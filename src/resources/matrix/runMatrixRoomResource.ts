// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import MatrixRoomRunnerResource from "../../types/MatrixRoomRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";
import SimpleMatrixClient from "../../nor/matrix/SimpleMatrixClient";
import { isBearerRunnerAuthentication } from "../../types/BearerRunnerAuthentication";
import { isBasicRunnerAuthentication } from "../../types/BasicRunnerAuthentication";
import MatrixCrudRepository from "../../nor/matrix/MatrixCrudRepository";
import MatrixType from "../../nor/matrix/types/core/MatrixType";
import { RepositoryEntry } from "../../nor/ts/simpleRepository/types/RepositoryEntry";
import { parsePipelineModel, PipelineModel } from "../../nor/pipeline/types/PipelineModel";
import Controller from "../../nor/pipeline/types/Controller";
import PipelineRunner from "../../nor/pipeline/PipelineRunner";
import { JsonObject } from "../../nor/ts/Json";
import MatrixRoomId from "../../nor/matrix/types/core/MatrixRoomId";

const LOG = LogService.createLogger('runMatrixRoomResource');

async function updateControllerState (
    matrixClient : SimpleMatrixClient,
    room         : MatrixRoomId,
    controller   : Controller
) {
    await matrixClient.setRoomStateByType(
        room,
        MatrixType.FI_NOR_PIPELINE_STATE,
        '',
        // FIXME: Controller types probably should be fixed
        controller.toJSON() as JsonObject
    );
}

export async function runMatrixRoomResource (
    resource: MatrixRoomRunnerResource
): Promise<RunnerExitStatus> {

    try {

        const auth = resource.authentication;
        const room = resource.room;

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

            await matrixClient.login(auth.username, auth.password);

        } else {
            return RunnerExitStatus.UNKNOWN_AUTHENTICATION_TYPE;
        }

        const repository = new MatrixCrudRepository<PipelineModel>(
            matrixClient,
            MatrixType.FI_NOR_PIPELINE,
            '',
            undefined,
            MatrixType.FI_NOR_PIPELINE_STATE, // We are only interested about non-started states
            ''
        );

        const entry : RepositoryEntry<PipelineModel> | undefined = await repository.findById(room);

        if ( entry !== undefined ) {

            const data: PipelineModel = entry.data;

            const model = parsePipelineModel(data);

            if ( model === undefined ) {
                LOG.warn(`Model was not valid for room ${room}: `, data);
                return RunnerExitStatus.RESOURCE_MODEL_INVALID;
            }

            let controller : Controller = PipelineRunner.createController(model);

            await updateControllerState(matrixClient, room, controller);

            const listener = controller.onChanged(() => {
                updateControllerState(matrixClient, room, controller).catch(err => {
                    LOG.error(`Failed to save controller state: `, err);
                });
            });

            try {

                await PipelineRunner.startAndWaitUntilFinished(controller);

            } finally {

                listener();

                await updateControllerState(matrixClient, room, controller);

            }
            return RunnerExitStatus.OK;

        }

        // FIXME: Implement the second style with multiple pipelines
        return RunnerExitStatus.UNIMPLEMENTED_FEATURE;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.MATRIX_RESOURCE_FAILED;
    }

}

export default runMatrixRoomResource;
