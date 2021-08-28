// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerAuthenticationType, { isRunnerAuthenticationType } from "./RunnerAuthenticationType";
import { isRegularObject } from "../nor/ts/modules/lodash";

export interface RunnerAuthentication {

    readonly type          : RunnerAuthenticationType;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isRunnerAuthentication (value: any): value is RunnerAuthentication {
    return (
        isRegularObject(value)
        && isRunnerAuthenticationType(value?.type)
    );
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyRunnerAuthentication (value: RunnerAuthentication): string {
    return `RunnerAuthentication(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerAuthentication (value: any): RunnerAuthentication | undefined {
    if ( isRunnerAuthentication(value) ) return value;
    return undefined;
}

export default RunnerAuthentication;
