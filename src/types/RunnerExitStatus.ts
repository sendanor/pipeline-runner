// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export enum RunnerExitStatus {
    OK,
    ARGUMENT_PARSE_ERROR,
    UNKNOWN_ARGUMENT,
    UNKNOWN_RESOURCE_TYPE,
    RESOURCE_LOAD_FAILED,
    RESOURCE_MODEL_INVALID,
    LOCAL_RESOURCE_FAILED,
    HTTP_RESOURCE_FAILED,
    MATRIX_RESOURCE_FAILED,
    UNIMPLEMENTED_FEATURE,
    FATAL_ERROR
}

export function isRunnerExitStatus (value: any): value is RunnerExitStatus {
    switch (value) {

        case RunnerExitStatus.OK:
        case RunnerExitStatus.ARGUMENT_PARSE_ERROR:
        case RunnerExitStatus.UNIMPLEMENTED_FEATURE:
            return true;

        default:
            return false;

    }
}

export function stringifyRunnerExitStatus (value: RunnerExitStatus): string {
    switch (value) {
        case RunnerExitStatus.OK  : return 'OK';
        case RunnerExitStatus.ARGUMENT_PARSE_ERROR  : return 'ARG_ERROR';
        case RunnerExitStatus.UNIMPLEMENTED_FEATURE  : return 'UNSUPPORTED_FEATURE';
    }
    throw new TypeError(`Unsupported RunnerExitStatus value: ${value}`);
}

export function parseRunnerExitStatus (value: any): RunnerExitStatus | undefined {

    switch (value) {

        case 'OK' : return RunnerExitStatus.OK;
        case 'ARG_ERROR' : return RunnerExitStatus.ARGUMENT_PARSE_ERROR;
        case 'UNSUPPORTED_FEATURE' : return RunnerExitStatus.UNIMPLEMENTED_FEATURE;

        default    :
            return undefined;

    }

}

export default RunnerExitStatus;
