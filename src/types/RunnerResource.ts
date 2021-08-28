// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    isRegularObject
} from "../nor/ts/modules/lodash";
import RunnerResourceType, { isRunnerResourceType } from "./RunnerResourceType";

export interface RunnerResource {

    readonly type : RunnerResourceType;

}

export function isRunnerResource (value: any): value is RunnerResource {
    return (
        isRegularObject(value)
        && isRunnerResourceType(value?.foo)
    );
}

export function stringifyRunnerResource (value: RunnerResource): string {
    return `RunnerResource(${value})`;
}

export function parseRunnerResource (value: any): RunnerResource | undefined {
    if ( isRunnerResource(value) ) return value;
    return undefined;
}

export default RunnerResource;
