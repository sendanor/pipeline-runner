// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import MatrixRunnerResource from "./MatrixRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";
import SimpleMatrixClient from "../../nor/matrix/SimpleMatrixClient";
import { isBearerRunnerAuthentication } from "../../types/BearerRunnerAuthentication";
import { isBasicRunnerAuthentication } from "../../types/BasicRunnerAuthentication";
import MatrixCrudRepository from "../../nor/matrix/MatrixCrudRepository";
import MatrixType from "../../nor/matrix/types/core/MatrixType";
import { RepositoryEntry } from "../../nor/ts/simpleRepository/types/RepositoryEntry";
import {
    parsePipelineModel
} from "../../nor/pipeline/types/PipelineModel";
import PipelineRunner from "../../nor/pipeline/PipelineRunner";
import MatrixRoomId from "../../nor/matrix/types/core/MatrixRoomId";
import PipelineRunDTO from "../../nor/pipeline/dto/PipelineRunDTO";
import AgentPoolDTO from "../../nor/pipeline/dto/AgentPoolDTO";
import Controller from "../../nor/pipeline/controllers/types/Controller";
import ControllerStateDTO from "../../nor/pipeline/controllers/types/ControllerStateDTO";
import { JsonObject } from "../../nor/ts/Json";
import PipelineContext from "../../nor/pipeline/PipelineContext";
import {
    PIPELINE_VARIABLE_PREFIX,
    PIPELINE_VARIABLE_SUFFIX
} from "../../pipeline-runtime-constants";
import System from "../../nor/pipeline/systems/types/System";
import ControllerType from "../../nor/pipeline/controllers/types/ControllerType";
import ControllerState, { stringifyControllerState } from "../../nor/pipeline/controllers/types/ControllerState";

const LOG = LogService.createLogger('runMatrixResource');

async function updateControllerState (
    matrixClient  : SimpleMatrixClient,
    runRepository : MatrixCrudRepository<PipelineRunDTO>,
    workItemId    : MatrixRoomId,
    workItem      : RepositoryEntry<PipelineRunDTO>,
    controller    : Controller
) {

    const newRunDto : PipelineRunDTO = {
        ...workItem.data,
        state: controller.getStateDTO()
    };

    await runRepository.update(workItemId, newRunDto);

    await matrixClient.setRoomStateByType(
        workItemId,
        MatrixType.FI_NOR_PIPELINE_STATE,
        '',
        controller.toJSON() as unknown as JsonObject
    );

}

export async function runMatrixResource (
    system   : System,
    resource : MatrixRunnerResource
): Promise<RunnerExitStatus> {

    try {

        LOG.debug(`runMatrixResource: `, resource);

        const auth = resource.authentication;

        // FIXME: Check if the room is an alias and convert to ID first

        let matrixClient : SimpleMatrixClient;

        if (isBearerRunnerAuthentication(auth)) {

            matrixClient = new SimpleMatrixClient(
                `https://${resource.homeserver}`,
                undefined,
                undefined,
                auth.access_token
            );

        } else if (isBasicRunnerAuthentication(auth)) {

            matrixClient = new SimpleMatrixClient(
                `https://${resource.homeserver}`
            );

            matrixClient = await matrixClient.login(auth.username, auth.password);

        } else {
            return RunnerExitStatus.UNKNOWN_AUTHENTICATION_TYPE;
        }

        let agentAccountId = matrixClient.getUserId();
        if (!agentAccountId) {

            agentAccountId = await matrixClient.whoami();

            if (!agentAccountId) {
                LOG.error(`Could not detect agent user ID`);
                return RunnerExitStatus.UNKNOWN_AGENT_ID;
            }

        }
        LOG.info(`Agent user ID: ${agentAccountId}`);

        const poolRepository = new MatrixCrudRepository<AgentPoolDTO>(
            matrixClient,
            MatrixType.FI_NOR_AGENT_DTO
        );

        const poolList : RepositoryEntry<AgentPoolDTO>[] = await poolRepository.getAll();

        let pool : RepositoryEntry<AgentPoolDTO> | undefined;

        if (poolList.length === 0) {

            LOG.debug(`Detected no pools available.`);
            return RunnerExitStatus.NO_WORK_AVAILABLE;

        } else if (poolList.length === 1) {

            LOG.debug(`Detected single pool available. Picking it.`);
            pool = poolList[0];

        } else {

            LOG.debug(`Detected ${poolList.length} pools available. Picking one by random.`);
            const randomPoolIndex = Math.floor(Math.random() * poolList.length);
            pool = poolList[randomPoolIndex];

        }
        const poolId = pool.id;
        LOG.info(`Pool ID: ${poolId}`);

        const runRepository = new MatrixCrudRepository<PipelineRunDTO>(
            matrixClient,
            MatrixType.FI_NOR_PIPELINE_RUN_DTO,
            '',
            undefined,
            MatrixType.FI_NOR_PIPELINE_STATE, // We are only interested about non-started states
            '',
            [
                poolId
            ]
        );

        const runList : RepositoryEntry<PipelineRunDTO>[] = await runRepository.getAll();

        LOG.debug(`runList = `, runList);

        let work : RepositoryEntry<PipelineRunDTO> | undefined;

        if (runList.length === 0) {

            LOG.debug(`Detected no work available.`);
            return RunnerExitStatus.NO_WORK_AVAILABLE;

        } else if (runList.length === 1) {

            LOG.debug(`Detected single work available. Picking it.`);
            work = runList[0];

        } else {

            LOG.debug(`Detected ${runList.length} work items available. Picking one by random.`);
            const randomIndex = Math.floor(Math.random() * runList.length);
            work = runList[randomIndex];

        }

        const workId = work.id;

        if ( work?.data?.agentPoolId !== undefined
            && work?.data?.agentAccountId !== undefined
            && work?.data?.state !== undefined
        ) {
            LOG.warn(`Work ID was already running: ${workId}`);

            LOG.debug(`We'll stop listening the work item: ${workId}`);
            await matrixClient.leaveRoom(workId);

            LOG.debug(`We'll forget the work item now: ${workId}`);
            await matrixClient.forgetRoom(workId);

            return RunnerExitStatus.CONFLICT;
        }

        LOG.info(`Work ID: ${workId}`);

        // Let's take the job
        const updatedDto : PipelineRunDTO = {
            ...work.data,
            agentPoolId: poolId,
            agentAccountId: agentAccountId
        };

        await runRepository.update(work.id, updatedDto);

        // Let's check if we managed to secure this work

        work = await runRepository.findById(work.id);

        if (!work) {
            LOG.warn(`The work item disappeared while we were selecting it.`);
            return RunnerExitStatus.WORK_CANCELLED;
        }

        if (workId !== work.id) {
            LOG.error(`The work item ID conflict: ${workId} !== ${work.id}`);
            return RunnerExitStatus.CONFLICT;
        }

        if ( (poolId === work?.data?.agentPoolId)
            && (agentAccountId === work?.data?.agentAccountId)
        ) {
            LOG.debug('Work item secured to us! We can start the job.');
        } else {
            LOG.error(``);
            return RunnerExitStatus.CONFLICT;
        }

        const model = parsePipelineModel( work?.data?.model );
        if ( model === undefined ) {
            LOG.warn(`Work item did not contain correct pipeline model: `, work);
            return RunnerExitStatus.RESOURCE_MODEL_INVALID;
        }

        const parameters = model?.parameters;
        const variables  = model?.variables;

        const context : PipelineContext = new PipelineContext(
            system,
            parameters,
            variables,
            PIPELINE_VARIABLE_PREFIX,
            PIPELINE_VARIABLE_SUFFIX
        );

        let controller : Controller = PipelineRunner.createController(model, context);
        try {

            await updateControllerState(matrixClient, runRepository, workId, work, controller);

            const listener = controller.onChanged(() => {
                updateControllerState(matrixClient, runRepository, workId, work, controller).catch(err => {
                    LOG.error(`Failed to save controller state: `, err);
                });
            });

            try {
                await PipelineRunner.startAndWaitUntilFinished(controller);
            } finally {
                listener();
            }

        } finally {

            if (controller.isStarted()) {
                LOG.warn(`Warning! Controller wasn't stopped (${stringifyControllerState(controller.getState())}). Stopping it now.`);
                await controller.stop();
            }

            await updateControllerState(matrixClient, runRepository, workId, work, controller);

        }

        LOG.debug(`We'll stop listening the work item now: ${workId}`);
        await matrixClient.leaveRoom(workId);

        LOG.debug(`We'll forget the work item now: ${workId}`);
        await matrixClient.forgetRoom(workId);

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.MATRIX_RESOURCE_FAILED;
    }

}

export default runMatrixResource;
