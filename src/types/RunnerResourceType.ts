// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export enum RunnerResourceType {
    HTTP,
    LOCAL,
    MATRIX_ROOM
}

export function isRunnerResourceType (value: any): value is RunnerResourceType {
    switch (value) {

        case RunnerResourceType.HTTP:
        case RunnerResourceType.LOCAL:
        case RunnerResourceType.MATRIX_ROOM:
            return true;

        default:
            return false;

    }
}

export function stringifyRunnerResourceType (value: RunnerResourceType): string {
    switch (value) {
        case RunnerResourceType.HTTP         : return 'http';
        case RunnerResourceType.LOCAL        : return 'local';
        case RunnerResourceType.MATRIX_ROOM  : return 'matrix';
    }
    throw new TypeError(`Unsupported RunnerResourceType value: ${value}`);
}

export function parseRunnerResourceType (value: any): RunnerResourceType | undefined {

    switch (`${value}`.toUpperCase()) {

        case 'HTTPS' :
        case 'HTTP'  : return RunnerResourceType.HTTP;

        case 'LOCAL' :
        case 'FILE'  : return RunnerResourceType.LOCAL;

        case 'MATRIX'      :
        case 'MATRIX_ROOM' :
            return RunnerResourceType.MATRIX_ROOM;

        default    :
            return undefined;

    }

}

export default RunnerResourceType;
