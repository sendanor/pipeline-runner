// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    isRegularObject
} from "../nor/ts/modules/lodash";
import RunnerResourceType, { isRunnerResourceType } from "./RunnerResourceType";

export interface RunnerResource {

    readonly type : RunnerResourceType;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isRunnerResource (value: any): value is RunnerResource {
    return (
        isRegularObject(value)
        && isRunnerResourceType(value?.foo)
    );
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyRunnerResource (value: RunnerResource): string {
    return `RunnerResource(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerResource (value: any): RunnerResource | undefined {
    if ( isRunnerResource(value) ) return value;
    return undefined;
}

export default RunnerResource;
