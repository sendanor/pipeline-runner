// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../nor/ts/modules/lodash";
import RunnerAuthenticationType from "./RunnerAuthenticationType";
import RunnerAuthentication from "./RunnerAuthentication";

export interface BearerRunnerAuthentication extends RunnerAuthentication {

    readonly type         : RunnerAuthenticationType.BEARER_AUTH;
    readonly access_token : string;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isBearerRunnerAuthentication (value: any): value is BearerRunnerAuthentication {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'type',
            'access_token'
        ])
        && value?.type === RunnerAuthenticationType.BEARER_AUTH
        && isString(value?.access_token)
    );
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyBearerRunnerAuthentication (value: BearerRunnerAuthentication): string {
    return `BearerRunnerAuthentication(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseBearerRunnerAuthentication (value: any): BearerRunnerAuthentication | undefined;

/**
 *
 * @param username
 * @param password
 * @__PURE__
 * @nosideeffects
 */
export function parseBearerRunnerAuthentication (username: any, password: any): BearerRunnerAuthentication | undefined;

/**
 *
 * @param value1
 * @param value2
 * @__PURE__
 * @nosideeffects
 */
export function parseBearerRunnerAuthentication (
    value1  : any,
    value2 ?: any
): BearerRunnerAuthentication | undefined {

    if (value2 === undefined) {

        if ( value1 === undefined ) return undefined;
        if ( value1 === '' ) return undefined;
        if ( isBearerRunnerAuthentication(value1) ) return value1;

        value1 = `${value1}`;

        const index = value1.indexOf(':');

        if ( index >= 0 ) {

            const username = index.substr(0, index);
            const password = index.substr(index + 1);
            return parseBearerRunnerAuthentication(username, password);

        } else {
            return {
                type: RunnerAuthenticationType.BEARER_AUTH,
                access_token: value1
            };
        }

    }

    const username = value1 === undefined ? '' : `${value1}`;
    const password = `${value2}`;

    if (username === '' && password === '') return undefined;

    if (username !== '_bearer') {
        return undefined;
    }

    return {
        type: RunnerAuthenticationType.BEARER_AUTH,
        access_token: password
    };

}

export default BearerRunnerAuthentication;
