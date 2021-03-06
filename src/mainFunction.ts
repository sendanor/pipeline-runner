// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import LogService from "./nor/ts/LogService";
import RunnerResource from "./types/RunnerResource";
import RunnerResourceUtils from "./utils/RunnerResourceUtils";
import RunnerExitStatus, {
    isRunnerExitStatus,
    stringifyRunnerExitStatus
} from "./types/RunnerExitStatus";
import { PIPELINE_SCRIPT_NAME } from "./pipeline-runtime-constants";
import getMainUsage from "./getMainUsage";
import runResource from "./resources/runResource";
import { stringifyRunnerResourceType } from "./types/RunnerResourceType";
import RunnerArgumentType, { parseRunnerArgumentType } from "./types/RunnerArgumentType";
import getMainVersion from "./getMainVersion";
import NodeSystem from "./systems/node/NodeSystem";
import PipelineDefaults from "./nor/pipeline/PipelineDefaults";
import System from "./nor/pipeline/systems/types/System";
import waitResource from "./resources/waitResource";
import LogLevel from "./nor/ts/types/LogLevel";
import SimpleMatrixClient from "./nor/matrix/SimpleMatrixClient";
import RequestClient from "./nor/ts/RequestClient";
import MatrixCrudRepository from "./nor/matrix/MatrixCrudRepository";

const LOG = LogService.createLogger('main');

export async function main (
    args: string[] = []
) : Promise<RunnerExitStatus> {

    let system : System | undefined;

    try {

        RequestClient.setLogLevel(LogLevel.INFO);
        SimpleMatrixClient.setLogLevel(LogLevel.INFO);
        MatrixCrudRepository.setLogLevel(LogLevel.INFO);

        PipelineDefaults.registerControllers();

        LOG.debug(`Loglevel ${LogService.getLogLevelString()}`);

        let script_name = PIPELINE_SCRIPT_NAME;

        args.shift();
        const scriptNameFromArgs = args.shift();

        if (!scriptNameFromArgs) {
            console.log(getMainUsage(script_name));
            return RunnerExitStatus.ARGUMENT_PARSE_ERROR;
        }

        if (args.length === 0) {
            console.log(getMainUsage(script_name));
            return RunnerExitStatus.ARGUMENT_PARSE_ERROR;
        }

        let waitForWork : boolean = false;
        let parsingArgs : boolean = true;

        do {

            const argName : string | undefined = args.shift();

            if (parsingArgs) {

                let notResource : boolean = false;

                const argType : RunnerArgumentType = parseRunnerArgumentType(argName);

                switch (argType) {

                    case RunnerArgumentType.HELP:
                        console.log(getMainUsage(script_name));
                        return RunnerExitStatus.OK;

                    case RunnerArgumentType.VERSION:
                        console.log(getMainVersion(script_name));
                        return RunnerExitStatus.OK;

                    case RunnerArgumentType.WAIT_FOR_WORK:
                        waitForWork = true;
                        notResource = true;
                        break;

                    case RunnerArgumentType.DISABLE_ARGUMENT_PARSING:
                        parsingArgs = false;
                        notResource = true;
                        break;

                }

                if ( !parsingArgs || notResource ) continue;

            }

            const resource : RunnerResource | undefined = RunnerResourceUtils.parseRunnerResource( argName );
            if ( resource === undefined ) {
                LOG.error(`Unsupported argument: ${argName}`);
                console.log( getMainUsage(script_name) );
                return RunnerExitStatus.UNKNOWN_ARGUMENT;
            }

            system = new NodeSystem();

            let result : RunnerExitStatus = await runResource(system, resource);

            if ( waitForWork && result === RunnerExitStatus.NO_WORK_AVAILABLE ) {

                await waitResource(system, resource);

                result = await runResource(system, resource);

            }

            if (result !== RunnerExitStatus.OK) {

                if (result === RunnerExitStatus.UNKNOWN_RESOURCE_TYPE) {
                    LOG.error(`Error NorPP${result}: ${stringifyRunnerExitStatus(result)}: Resource type was unknown: ${resource.type}`)
                    console.log(getMainUsage(script_name));
                    return RunnerExitStatus.UNKNOWN_RESOURCE_TYPE;
                }

                if (isRunnerExitStatus(result)) {
                    // FIXME: Our exit codes might overlap with statuses from scripts...
                    LOG.error(`Error EX-${result}: ${stringifyRunnerExitStatus(result)}: for ${stringifyRunnerResourceType(resource.type)} resource ${argName}`);
                } else {
                    LOG.error(`Error: Exit status ${result}: for ${stringifyRunnerResourceType(resource.type)} resource ${argName}`);
                }

                return result;

            }

        } while( args.length >= 1 );

        return RunnerExitStatus.OK;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return RunnerExitStatus.FATAL_ERROR;
    } finally {
        if (system) {
            system.destroy();
        }
    }

}

export default main;
