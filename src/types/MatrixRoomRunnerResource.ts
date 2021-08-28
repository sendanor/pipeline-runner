// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    hasNoOtherKeys,
    isRegularObject,
    isString,
    isUndefined, startsWith, trim
} from "../nor/ts/modules/lodash";
import RunnerResource from "./RunnerResource";
import RunnerResourceType from "./RunnerResourceType";
import RunnerAuthentication, { isRunnerAuthentication } from "./RunnerAuthentication";
import RunnerAuthenticationUtils from "../utils/RunnerAuthenticationUtils";
import { PIPELINE_AUTHENTICATION } from "../pipeline-runtime-constants";

export interface MatrixRoomRunnerResource extends RunnerResource {

    readonly type            : RunnerResourceType.MATRIX_ROOM;
    readonly homeserver      : string;
    readonly room            : string;
    readonly authentication ?: RunnerAuthentication;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isMatrixRoomRunnerResource (value: any): value is MatrixRoomRunnerResource {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'type',
            'id',
            'name',
            'homeserver',
            'authentication'
        ])
        && value?.type === RunnerResourceType.MATRIX_ROOM
        && isString(value?.id)
        && isString(value?.name)
        && isString(value?.homeserver)
        && ( isUndefined(value?.authentication) || isRunnerAuthentication(value?.authentication) )
    );
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function stringifyMatrixRoomRunnerResource (value: MatrixRoomRunnerResource): string {
    return `MatrixRoomRunnerResource(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseMatrixRoomRunnerResource (value: any): MatrixRoomRunnerResource | undefined {

    if ( !value ) return undefined;
    if ( isMatrixRoomRunnerResource(value) ) return value;

    value = trim(`${value}`);

    let lowerCaseValue = value.toLowerCase();

    if ( startsWith(lowerCaseValue, 'matrix://') ) {

        const u = new URL(value);

        const auth = (
            RunnerAuthenticationUtils.parseRunnerAuthentication(decodeURIComponent(u.username), decodeURIComponent(u.password))
            ?? RunnerAuthenticationUtils.parseRunnerAuthentication(PIPELINE_AUTHENTICATION)
        );

        const homeserver = `${u.host}`;

        const paths = `${u.pathname}`.split('/');
        paths.shift();

        const roomPath = decodeURIComponent(paths.shift() ?? '');

        const roomPathIndex = roomPath.indexOf(':');

        const roomId = roomPathIndex >= 0 ? roomPath : `${roomPath}:${homeserver}`;

        if ( roomId.length === 0 ) return undefined;

        return {
            type           : RunnerResourceType.MATRIX_ROOM,
            homeserver     : homeserver,
            room           : ( roomId[0] === '!' || roomId[0] === '#' ) ? roomId : `#${roomId}`,
            authentication : auth
        } as MatrixRoomRunnerResource;

    }

    if ( startsWith(lowerCaseValue, 'matrix:') ) {

        value          = value.substr('matrix:'.length);
        lowerCaseValue = lowerCaseValue.substr('matrix:'.length);

    }

    value          = decodeURIComponent(value);
    lowerCaseValue = value.toLowerCase();

    if ( startsWith(lowerCaseValue, '!')
        || startsWith(lowerCaseValue, '#')
    ) {

        const index = value.indexOf(':');

        if (index < 0) return undefined;

        const homeserver = value.substr(index+1);

        if (!homeserver) return undefined;

        return {
            type           : RunnerResourceType.MATRIX_ROOM,
            homeserver     : homeserver,
            room           : value,
            authentication : RunnerAuthenticationUtils.parseRunnerAuthentication(PIPELINE_AUTHENTICATION)
        } as MatrixRoomRunnerResource;

    }

    return undefined;

}

export default MatrixRoomRunnerResource;
