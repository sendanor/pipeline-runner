// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    hasNoOtherKeys,
    isRegularObject,
    isString,
    isUndefined, startsWith, trim
} from "../../nor/ts/modules/lodash";
import RunnerResource from "../../types/RunnerResource";
import RunnerResourceType from "../../types/RunnerResourceType";
import RunnerAuthentication, { isRunnerAuthentication } from "../../types/RunnerAuthentication";
import RunnerAuthenticationUtils from "../../utils/RunnerAuthenticationUtils";
import { PIPELINE_AUTHENTICATION } from "../../pipeline-runtime-constants";

export interface HttpRunnerResource extends RunnerResource {

    readonly type            : RunnerResourceType.HTTP;
    readonly url             : string;
    readonly authentication ?: RunnerAuthentication;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isHttpRunnerResource (value: any): value is HttpRunnerResource {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'type',
            'url',
            'authentication'
        ])
        && value?.type === RunnerResourceType.HTTP
        && isString(value?.url)
        && ( isUndefined(value?.authentication) || isRunnerAuthentication(value?.authentication) )
    );
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyHttpRunnerResource (value: HttpRunnerResource): string {
    return `HttpRunnerResource(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseHttpRunnerResource (value: any): HttpRunnerResource | undefined {

    if ( !value ) return undefined;
    if ( isHttpRunnerResource(value) ) return value;

    value = trim(`${value}`);

    const lowerCaseValue = value.toLowerCase();

    if ( startsWith(lowerCaseValue, 'http:') || startsWith(lowerCaseValue, 'https:') ) {

        const u = new URL(value);

        const auth = (
            RunnerAuthenticationUtils.parseRunnerAuthentication(decodeURIComponent(u.username), decodeURIComponent(u.password))
            ?? RunnerAuthenticationUtils.parseRunnerAuthentication(PIPELINE_AUTHENTICATION)
        );

        return {
            type : RunnerResourceType.HTTP,
            url  : value,
            auth : auth
        } as HttpRunnerResource;

    }

    return undefined;

}

export default HttpRunnerResource;
