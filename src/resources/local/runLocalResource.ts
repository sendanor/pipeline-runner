// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import LocalRunnerResource from "../../types/LocalRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import { readFileString } from "../../nor/pipeline/modules/fs";
import Json from "../../nor/ts/Json";
import { parsePipelineModel } from "../../nor/pipeline/types/PipelineModel";
import PipelineRunner from "../../nor/pipeline/PipelineRunner";
import LogService from "../../nor/ts/LogService";
import Controller from "../../nor/pipeline/controllers/types/Controller";

const LOG = LogService.createLogger('runLocalResource');

export async function runLocalResource (
    resource: LocalRunnerResource
): Promise<RunnerExitStatus> {

    try {

        const dataString = await readFileString(resource.path, {encoding: 'utf8'});

        const data: Json = JSON.parse(dataString);

        const model = parsePipelineModel(data);

        if ( model === undefined ) {
            LOG.warn('Model was not valid: ', data);
            return RunnerExitStatus.RESOURCE_MODEL_INVALID;
        }

        let controller: Controller = PipelineRunner.createController(model);

        LOG.info(`Running ${controller.getName()} from ${resource.path}`);

        await PipelineRunner.startAndWaitUntilFinished(controller);

        LOG.info(`Successfully finished ${controller.getName()} from ${resource.path}`);

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.LOCAL_RESOURCE_FAILED;
    }

}

export default runLocalResource;
