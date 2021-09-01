// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export enum RunnerResourceType {
    HTTP,
    LOCAL,
    MATRIX
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isRunnerResourceType (value: any): value is RunnerResourceType {
    switch (value) {

        case RunnerResourceType.HTTP:
        case RunnerResourceType.LOCAL:
        case RunnerResourceType.MATRIX:
            return true;

        default:
            return false;

    }
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyRunnerResourceType (value: RunnerResourceType): string {
    switch (value) {
        case RunnerResourceType.HTTP         : return 'http';
        case RunnerResourceType.LOCAL        : return 'local';
        case RunnerResourceType.MATRIX  : return 'matrix';
    }
    throw new TypeError(`Unsupported RunnerResourceType value: ${value}`);
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerResourceType (value: any): RunnerResourceType | undefined {

    if (value === undefined) return undefined;

    switch (`${value}`.toUpperCase()) {

        case 'HTTPS' :
        case 'HTTP'  : return RunnerResourceType.HTTP;

        case 'LOCAL' :
        case 'FILE'  : return RunnerResourceType.LOCAL;

        case 'MATRIX'      :
        case 'MATRIX_ROOM' :
            return RunnerResourceType.MATRIX;

        default    :
            return undefined;

    }

}

export default RunnerResourceType;
