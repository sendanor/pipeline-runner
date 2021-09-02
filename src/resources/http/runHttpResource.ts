// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import HttpRunnerResource from "../../types/HttpRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import { isBearerRunnerAuthentication } from "../../types/BearerRunnerAuthentication";
import { isBasicRunnerAuthentication } from "../../types/BasicRunnerAuthentication";
import JsonAny from "../../nor/ts/Json";
import RequestClient from "../../nor/ts/RequestClient";
import { parsePipelineModel } from "../../nor/pipeline/types/PipelineModel";
import PipelineRunner from "../../nor/pipeline/PipelineRunner";
import LogService from "../../nor/ts/LogService";
import Controller from "../../nor/pipeline/controllers/types/Controller";
import PipelineContext from "../../nor/pipeline/PipelineContext";
import {
    PIPELINE_VARIABLE_PREFIX,
    PIPELINE_VARIABLE_SUFFIX
} from "../../pipeline-runtime-constants";

const LOG = LogService.createLogger('runHttpResource');

export async function runHttpResource (
    resource: HttpRunnerResource
): Promise<RunnerExitStatus> {

    try {

        const headers: any = {};

        if ( resource.authentication ) {
            if ( isBearerRunnerAuthentication(resource.authentication) ) {
                headers['Authorization'] = `Bearer ${resource.authentication.access_token}`;
            }
            if ( isBasicRunnerAuthentication(resource.authentication) ) {
                const username = resource.authentication.username;
                const password = resource.authentication.password;
                headers['Authorization'] = `Basic ${new Buffer(username + ':' + password).toString('base64')}`;
            }
        }

        const data: JsonAny | undefined = await RequestClient.getJson(resource.url, headers);

        if ( data === undefined ) {
            LOG.error(`Failed to load URL "${resource.url}": `, data);
            return RunnerExitStatus.RESOURCE_LOAD_FAILED;
        }

        const model = parsePipelineModel(data);

        if ( model === undefined ) {
            LOG.error(`Model from URL "${resource.url}" was not valid: `, data);
            return RunnerExitStatus.RESOURCE_MODEL_INVALID;
        }

        const parameters = model?.parameters;
        const variables  = model?.variables;
        const context : PipelineContext = new PipelineContext(
            parameters,
            variables,
            PIPELINE_VARIABLE_PREFIX,
            PIPELINE_VARIABLE_SUFFIX
        );

        let controller: Controller = PipelineRunner.createController(model, context);

        LOG.info(`Running ${controller.getName()} from ${resource.url}`);

        await PipelineRunner.startAndWaitUntilFinished(controller);

        LOG.info(`Successfully finished ${controller.getName()} from ${resource.url}`);

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.HTTP_RESOURCE_FAILED;
    }

}

export default runHttpResource;
