// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import MatrixRoomRunnerResource from "../../types/MatrixRoomRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";

const LOG = LogService.createLogger('runMatrixRoomResource');

export async function runMatrixRoomResource (
    resource: MatrixRoomRunnerResource
): Promise<RunnerExitStatus> {

    try {

        LOG.error(`Unimplemented matrix resource: `, resource);
        return RunnerExitStatus.UNIMPLEMENTED_FEATURE;

        // const dataString = await FS.readFile(resource.path, {encoding: 'utf8'});
        //
        // const data : Json = JSON.parse(dataString);
        //
        // const model = parsePipelineModel(data);
        //
        // if ( model === undefined ) {
        //     LOG.warn('Model was not valid: ', data);
        //     return ;
        // }
        //
        // let controller : Controller = PipelineRunner.createController(model);
        //
        // await PipelineRunner.startAndWaitUntilFinished(controller);
        //
        // return 0;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.MATRIX_RESOURCE_FAILED;
    }

}

export default runMatrixRoomResource;
