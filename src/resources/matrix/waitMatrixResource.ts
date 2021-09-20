// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import MatrixRunnerResource from "./MatrixRunnerResource";
import RunnerExitStatus, { isRunnerExitStatus } from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";
import SimpleMatrixClient, { SimpleMatrixClientEvent } from "../../nor/matrix/SimpleMatrixClient";
import { isBearerRunnerAuthentication } from "../../types/BearerRunnerAuthentication";
import { isBasicRunnerAuthentication } from "../../types/BasicRunnerAuthentication";
import MatrixCrudRepository from "../../nor/matrix/MatrixCrudRepository";
import MatrixType from "../../nor/matrix/types/core/MatrixType";
import { RepositoryEntry } from "../../nor/ts/simpleRepository/types/RepositoryEntry";
import PipelineRunDTO from "../../nor/pipeline/dto/PipelineRunDTO";
import AgentPoolDTO from "../../nor/pipeline/dto/AgentPoolDTO";
import System from "../../nor/pipeline/systems/types/System";
import RunnerAuthentication from "../../types/RunnerAuthentication";
import MatrixUserId from "../../nor/matrix/types/core/MatrixUserId";
import { reduce } from "../../nor/ts/modules/lodash";
import MatrixSyncResponseAnyEventDTO
    from "../../nor/matrix/types/response/sync/types/MatrixSyncResponseAnyEventDTO";

const LOG = LogService.createLogger('waitMatrixResource');

const ERROR_WAIT_TIME = 15000;

export async function waitMatrixResource (
    system   : System,
    resource : MatrixRunnerResource
): Promise<RunnerExitStatus> {

    try {

        LOG.debug(`waitMatrixResource: `, resource);

        const matrixClient : SimpleMatrixClient | RunnerExitStatus = await getMatrixClient(
            `https://${resource.homeserver}`,
            resource.authentication
        );
        if (isRunnerExitStatus(matrixClient)) return matrixClient;

        const agentAccountId : MatrixUserId | RunnerExitStatus = await getAgentAccountId(matrixClient);
        if (isRunnerExitStatus(agentAccountId)) return agentAccountId;

        const poolList : RepositoryEntry<AgentPoolDTO>[] = await getPoolList(matrixClient);

        let result : RunnerExitStatus = await checkIfAnyPoolHasWork(matrixClient, poolList);

        if (result === RunnerExitStatus.OK) {
            return RunnerExitStatus.OK;
        }

        do {

            try {

                await matrixClient.waitForEvents([
                    MatrixType.M_ROOM_CREATE,
                    MatrixType.M_ROOM_JOIN_RULES,
                    MatrixType.M_ROOM_MEMBER
                ],
                    );

            } catch (err) {

                LOG.error(`Error while waiting: `, err);

                await waitForMoment(ERROR_WAIT_TIME);

            }

            result = await checkIfAnyPoolHasWork(matrixClient, poolList);

        } while (result === RunnerExitStatus.NO_WORK_AVAILABLE);

        return result;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.MATRIX_RESOURCE_FAILED;
    }

}

async function getAgentAccountId (
    matrixClient : SimpleMatrixClient
) : Promise<MatrixUserId | RunnerExitStatus> {

    let agentAccountId : MatrixUserId | undefined = matrixClient.getUserId();
    if (!agentAccountId) {

        agentAccountId = await matrixClient.whoami();

        if (!agentAccountId) {
            LOG.error(`Could not detect agent user ID`);
            return RunnerExitStatus.UNKNOWN_AGENT_ID;
        }

    }

    LOG.info(`Agent user ID: ${agentAccountId}`);
    return agentAccountId;

}

async function getMatrixClient (
    url  : string,
    auth : RunnerAuthentication
) : Promise<SimpleMatrixClient | RunnerExitStatus> {

    if (isBearerRunnerAuthentication(auth)) {

        return new SimpleMatrixClient(
            url,
            undefined,
            undefined,
            auth.access_token
        );

    } else if (isBasicRunnerAuthentication(auth)) {

        const matrixClient = new SimpleMatrixClient(url);

        return await matrixClient.login(auth.username, auth.password);

    } else {
        return RunnerExitStatus.UNKNOWN_AUTHENTICATION_TYPE;
    }

}

async function getPoolList (
    matrixClient : SimpleMatrixClient
) : Promise<RepositoryEntry<AgentPoolDTO>[]> {

    const poolRepository = new MatrixCrudRepository<AgentPoolDTO>(
        matrixClient,
        MatrixType.FI_NOR_AGENT_DTO
    );

    return await poolRepository.getAll();

}

async function checkIfPoolHasWork (
    matrixClient : SimpleMatrixClient,
    pool         : AgentPoolDTO
) : Promise<RunnerExitStatus> {

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

    if (runList.length !== 0) {

        LOG.debug(`Detected work available.`);
        return RunnerExitStatus.OK;

    }

    LOG.debug(`No work available.`);
    return RunnerExitStatus.NO_WORK_AVAILABLE;

}

async function checkIfAnyPoolHasWork (
    matrixClient : SimpleMatrixClient,
    poolList     : RepositoryEntry<AgentPoolDTO>[]
) : Promise<RunnerExitStatus> {

    if (poolList.length === 0) {

        LOG.debug(`checkIfAnyPoolHasWork: Detected no pools available.`);
        return RunnerExitStatus.NO_WORK_AVAILABLE;

    } else if (poolList.length === 1) {

        LOG.debug(`checkIfAnyPoolHasWork: Detected single pool available. Checking it.`);
        return await checkIfPoolHasWork( matrixClient, poolList[0] );

    } else {

        LOG.debug(`checkIfAnyPoolHasWork: Detected ${poolList.length} pools available.`);

        return await reduce(
            poolList,
            async (p: Promise<RunnerExitStatus>, item : RepositoryEntry<AgentPoolDTO>) : Promise<RunnerExitStatus> => {

                const result = await p;
                LOG.debug(`checkIfAnyPoolHasWork: Result: ${result}`);

                if (result === RunnerExitStatus.OK) {
                    return RunnerExitStatus.OK;
                }

                LOG.debug(`checkIfAnyPoolHasWork: Checking pool ${item.id}`);
                return await checkIfPoolHasWork( matrixClient, item );

            },
            Promise.resolve(RunnerExitStatus.NO_WORK_AVAILABLE)
        );

    }

}

async function waitForMoment (time: number) {
    return await new Promise((resolve, reject) => {
        try {
            setTimeout(resolve, time);
        } catch (err) {
            reject(err);
        }
    });
}

export default waitMatrixResource;
