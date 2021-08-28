// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export enum RunnerAuthenticationType {
    NONE,
    BASIC_AUTH,
    BEARER_AUTH
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isRunnerAuthenticationType (value: any): value is RunnerAuthenticationType {
    switch (value) {
        case RunnerAuthenticationType.NONE:
        case RunnerAuthenticationType.BASIC_AUTH:
        case RunnerAuthenticationType.BEARER_AUTH:
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
export function stringifyRunnerAuthenticationType (value: RunnerAuthenticationType): string {
    switch (value) {
        case RunnerAuthenticationType.NONE : return 'NONE';
        case RunnerAuthenticationType.BASIC_AUTH : return 'BASIC_AUTH';
        case RunnerAuthenticationType.BEARER_AUTH : return 'BEARER_AUTH';
    }
    throw new TypeError(`Unsupported RunnerAuthenticationType value: ${value}`);
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerAuthenticationType (value: any): RunnerAuthenticationType | undefined {

    switch (value) {

        case 'NONE' : return RunnerAuthenticationType.NONE;
        case 'BASIC_AUTH' : return RunnerAuthenticationType.BASIC_AUTH;
        case 'BEARER_AUTH' : return RunnerAuthenticationType.BEARER_AUTH;

        default    :
            return undefined;

    }

}

export default RunnerAuthenticationType;
