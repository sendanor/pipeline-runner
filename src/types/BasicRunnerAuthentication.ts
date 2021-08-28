// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../nor/ts/modules/lodash";
import RunnerAuthenticationType from "./RunnerAuthenticationType";
import RunnerAuthentication from "./RunnerAuthentication";

export interface BasicRunnerAuthentication extends RunnerAuthentication {

    readonly type     : RunnerAuthenticationType.BASIC_AUTH;
    readonly username : string;
    readonly password : string;

}

export function isBasicRunnerAuthentication (value: any): value is BasicRunnerAuthentication {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'type',
            'username',
            'password'
        ])
        && value?.type === RunnerAuthenticationType.BASIC_AUTH
        && isString(value?.username)
        && isString(value?.password)
    );
}

export function stringifyBasicRunnerAuthentication (value: BasicRunnerAuthentication): string {
    return `BasicRunnerAuthentication(${value})`;
}

export function parseBasicRunnerAuthentication (value: any): BasicRunnerAuthentication | undefined;
export function parseBasicRunnerAuthentication (username: any, password: any): BasicRunnerAuthentication | undefined;

export function parseBasicRunnerAuthentication (
    value1  : any,
    value2 ?: any
): BasicRunnerAuthentication | undefined {

    if (value2 === undefined) {

        if ( value1 === undefined ) return undefined;
        if ( value1 === '' ) return undefined;
        if ( isBasicRunnerAuthentication(value1) ) return value1;

        value1 = `${value1}`;

        const index = value1.indexOf(':');

        if ( index >= 0 ) {

            const username = index.substr(0, index);
            const password = index.substr(index + 1);
            return parseBasicRunnerAuthentication(username, password);

        } else {
            return parseBasicRunnerAuthentication(value1, '');
        }

    }

    const username = value1 === undefined ? '' : `${value1}`;
    const password = `${value2}`;

    if (username === '' && password === '') return undefined;

    if (username === '_bearer') {
        return undefined;
    }

    return {
        type: RunnerAuthenticationType.BASIC_AUTH,
        username,
        password
    };

}

export default BasicRunnerAuthentication;
