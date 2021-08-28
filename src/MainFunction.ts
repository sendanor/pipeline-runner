// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { readFile } from "fs/promises";
import Json from "./nor/ts/Json";
import JsonAny from "./nor/ts/Json";
import PipelineRunner from "./nor/pipeline/PipelineRunner";
import Controller from "./nor/pipeline/types/Controller";
import LogService from "./nor/ts/LogService";
import LocalRunnerResource from "./types/LocalRunnerResource";
import { parsePipelineModel } from "./nor/pipeline/types/PipelineModel";
import RunnerResource from "./types/RunnerResource";
import RunnerResourceUtils from "./RunnerResourceUtils";
import RunnerResourceType from "./types/RunnerResourceType";
import HttpRunnerResource from "./types/HttpRunnerResource";
import MatrixRoomRunnerResource from "./types/MatrixRoomRunnerResource";
import RunnerExitStatus from "./types/RunnerExitStatus";
import RequestClient from "./nor/ts/RequestClient";
import { isBearerRunnerAuthentication } from "./types/BearerRunnerAuthentication";
import { isBasicRunnerAuthentication } from "./types/BasicRunnerAuthentication";

const LOG = LogService.createLogger('main');

export function mainUsage (
    scriptName: string,
    exitStatus: RunnerExitStatus
) : RunnerExitStatus {

    console.log(`USAGE: ${scriptName} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where ARG is one of:

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.

  Instructions from a Matrix room:

      matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] HOMESERVER / ROOM
      matrix:ROOM
      ROOM
      
    The room will be looked up. 
    
    When the room has a state event of type fi.nor.pipeline and has empty state_key with content 
    as the data for pipeline, the pipeline will be executed in that room.
    
    Otherwise will look for state events of type fi.nor.pipeline with state_key as a Room ID 
    type to execute.
    
    The ROOM should be either in format !ID:HOMESERVER or #ALIAS:HOMESERVER and decoded correctly 
    in the URL format.
    
    Optionally will log in Matrix using USER and PASSWORD.
    
    Optionally uses Bearer authentication with ACCESS_TOKEN.
    
    See also PIPELINE_AUTHENTICATION environment variable.
    
  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.

  Environment variables:

    PIPELINE_AUTHENTICATION as one of:
    
      USER:PASSWORD
      _bearer:ACCESS_TOKEN
      ACCESS_TOKEN
`);
    return exitStatus;
}

export async function runLocalResource (
    scriptName : string,
    resource : LocalRunnerResource
) : Promise<RunnerExitStatus> {

    try {

        const dataString = await readFile(resource.path, {encoding: 'utf8'});

        const data : Json = JSON.parse(dataString);

        const model = parsePipelineModel(data);

        if ( model === undefined ) {
            LOG.warn('Model was not valid: ', data);
            return mainUsage(scriptName, RunnerExitStatus.RESOURCE_MODEL_INVALID);
        }

        let controller : Controller = PipelineRunner.createController(model);

        LOG.info(`Running ${controller.getName()} from ${resource.path}`);

        await PipelineRunner.startAndWaitUntilFinished(controller);

        LOG.info(`Successfully finished ${controller.getName()} from ${resource.path}`);

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.LOCAL_RESOURCE_FAILED;
    }

}

export async function runHttpResource (
    scriptName : string,
    resource : HttpRunnerResource
) : Promise<RunnerExitStatus> {

    try {

        const headers : any = {};

        if (resource.authentication) {
            if (isBearerRunnerAuthentication(resource.authentication)) {
                headers['Authorization'] = `Bearer ${resource.authentication.access_token}`;
            }
            if (isBasicRunnerAuthentication(resource.authentication)) {
                const username = resource.authentication.username;
                const password = resource.authentication.password;
                headers['Authorization'] = `Basic ${ new Buffer(username + ':' + password).toString('base64') }`;
            }
        }

        const data : JsonAny | undefined = await RequestClient.getJson(resource.url, headers);

        if ( data === undefined ) {
            LOG.error( `Failed to load URL "${resource.url}": `, data);
            return mainUsage(scriptName, RunnerExitStatus.RESOURCE_LOAD_FAILED);
        }

        const model = parsePipelineModel(data);

        if ( model === undefined ) {
            LOG.error(`Model from URL "${resource.url}" was not valid: `, data);
            return mainUsage(scriptName, RunnerExitStatus.RESOURCE_MODEL_INVALID);
        }

        let controller : Controller = PipelineRunner.createController(model);

        LOG.info(`Running ${controller.getName()} from ${resource.url}`);

        await PipelineRunner.startAndWaitUntilFinished(controller);

        LOG.info(`Successfully finished ${controller.getName()} from ${resource.url}`);

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Error: `, err);
        return RunnerExitStatus.HTTP_RESOURCE_FAILED;
    }

}

export async function runMatrixRoomResource (
    scriptName : string,
    resource : MatrixRoomRunnerResource
) : Promise<RunnerExitStatus> {

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
        //     return mainUsage(scriptName);
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

export async function main (
    args: string[] = []
) : Promise<RunnerExitStatus> {

    try {

        let script_name = 'runner';

        args.shift();
        const scriptNameFromArgs = args.shift();

        if (!scriptNameFromArgs) {
            return mainUsage(script_name, RunnerExitStatus.ARGUMENT_PARSE_ERROR);
        }

        if (args.length === 0) {
            return mainUsage(script_name, RunnerExitStatus.ARGUMENT_PARSE_ERROR);
        }

        do {

            const argName : string | undefined = args.shift();
            const resource : RunnerResource | undefined = RunnerResourceUtils.parseRunnerResource( argName );

            if ( resource === undefined ) {
                LOG.error(`Unsupported argument: ${argName}`);
                return mainUsage(script_name, RunnerExitStatus.UNKNOWN_ARGUMENT);
            }

            switch (resource.type) {

                case RunnerResourceType.HTTP: {
                    const result = await runHttpResource(script_name, resource as HttpRunnerResource);
                    if (result !== 0) {
                        LOG.error(`Exit status ${result} for http resource ${argName}`);
                        return result;
                    }
                    break;
                }

                case RunnerResourceType.LOCAL: {
                    const result = await runLocalResource(script_name, resource as LocalRunnerResource);
                    if ( result !== 0 ) {
                        LOG.error(`Exit status ${result} for local resource ${argName}`);
                        return result;
                    }
                    break;
                }

                case RunnerResourceType.MATRIX_ROOM: {
                    const result = await runMatrixRoomResource(script_name, resource as MatrixRoomRunnerResource);
                    if ( result !== 0 ) {
                        LOG.error(`Exit status ${result} for matrix resource ${argName}`);
                        return result;
                    }
                    break;
                }

                default:
                    LOG.error(`Resource type was unknown: ${resource.type}`)
                    return mainUsage(script_name, RunnerExitStatus.UNKNOWN_RESOURCE_TYPE);

            }

        } while( args.length >= 1 );

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return RunnerExitStatus.FATAL_ERROR;
    }

}

export default main;
