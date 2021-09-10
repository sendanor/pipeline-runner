// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    hasNoOtherKeys,
    isRegularObject,
    isString, isStringOrUndefined,
    isUndefined, startsWith, trim
} from "../../nor/ts/modules/lodash";
import RunnerResource from "../../types/RunnerResource";
import RunnerResourceType from "../../types/RunnerResourceType";
import RunnerAuthentication, { isRunnerAuthentication } from "../../types/RunnerAuthentication";
import RunnerAuthenticationUtils from "../../utils/RunnerAuthenticationUtils";
import { PIPELINE_AUTHENTICATION, PIPELINE_SERVER } from "../../pipeline-runtime-constants";
import LogService from "../../nor/ts/LogService";

const LOG = LogService.createLogger('MatrixRunnerResource');

export interface MatrixRunnerResource extends RunnerResource {

    readonly type            : RunnerResourceType.MATRIX;
    readonly homeserver      : string;
    readonly pool           ?: string;
    readonly authentication ?: RunnerAuthentication;

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isMatrixRoomRunnerResource (value: any): value is MatrixRunnerResource {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'type',
            'pool',
            'homeserver',
            'authentication'
        ])
        && value?.type === RunnerResourceType.MATRIX
        && isStringOrUndefined(value?.pool)
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
export function stringifyMatrixRoomRunnerResource (value: MatrixRunnerResource): string {
    return `MatrixRoomRunnerResource(${value})`;
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseMatrixRunnerResource (value: any): MatrixRunnerResource | undefined {

    if ( !value ) return undefined;

    if ( isMatrixRoomRunnerResource(value) ) return value;

    value = trim(`${value}`);

    LOG.debug(`value: '${value}'`);

    let lowerCaseValue = value.toLowerCase();

    LOG.debug(`lowerCaseValue: '${lowerCaseValue}'`);

    if ( lowerCaseValue === 'matrix://' ) {
        value = 'matrix://io.nor.fi';
        lowerCaseValue = 'matrix://io.nor.fi';
    }

    LOG.debug(`lowerCaseValue: '${lowerCaseValue}'`);

    if ( startsWith(lowerCaseValue, 'matrix://') ) {

        const u = new URL(`https://${value.substr('matrix://'.length)}`);

        LOG.debug(`url: '${u}': `, u);

        const auth = (
            RunnerAuthenticationUtils.parseRunnerAuthentication(decodeURIComponent(u.username), decodeURIComponent(u.password))
            ?? RunnerAuthenticationUtils.parseRunnerAuthentication(PIPELINE_AUTHENTICATION)
        );
        LOG.debug(`auth: `, auth);

        const homeserver = `${u.host}`;
        LOG.debug(`homeserver: '${homeserver}'`);

        const paths = `${u.pathname}`.split('/');
        paths.shift();
        LOG.debug(`paths: `, paths);

        const roomPath = decodeURIComponent(paths.shift() ?? '');
        LOG.debug(`roomPath: '${roomPath}'`);

        const roomPathIndex = roomPath.length ? roomPath.indexOf(':') : -1;
        LOG.debug(`roomPathIndex: `, roomPathIndex);

        const roomId = roomPath.length ?  (roomPathIndex >= 0 ? roomPath : `${roomPath}:${homeserver}` ) : '';
        LOG.debug(`roomId: '${roomId}'`);

        let pool : string | undefined;
        if ( roomId.length === 0 ) {
            pool = undefined;
        } else {
            pool = ( roomId[0] === '!' || roomId[0] === '#' ) ? roomId : `#${roomId}`;
        }

        LOG.debug(`pool: '${pool}'`);

        return {
            type           : RunnerResourceType.MATRIX,
            homeserver     : homeserver,
            pool           : pool,
            authentication : auth
        } as MatrixRunnerResource;

    }

    if ( startsWith(lowerCaseValue, 'matrix:') ) {
        value          = value.substr('matrix:'.length);
        lowerCaseValue = lowerCaseValue.substr('matrix:'.length);
    }

    value          = decodeURIComponent(value);
    lowerCaseValue = value.toLowerCase();

    let authentication : string | undefined = undefined;
    let homeserver     : string | undefined = undefined;
    let pool           : string | undefined = undefined;
    if ( startsWith(lowerCaseValue, '!') || startsWith(lowerCaseValue, '#') ) {
        const index = value.indexOf(':');
        if (index < 0) {

            pool = `${lowerCaseValue}:${PIPELINE_SERVER}`;

        } else {

            pool = lowerCaseValue;

            const parsedHomeserver = value.substr(index+1);
            if (parsedHomeserver) {
                homeserver = parsedHomeserver;
            }

        }
    } else if (lowerCaseValue) {
        authentication = lowerCaseValue;
    }

    if (!authentication) {
        authentication = PIPELINE_AUTHENTICATION;
    }

    if (!homeserver) {
        homeserver = PIPELINE_SERVER;
    }

    return {
        type           : RunnerResourceType.MATRIX,
        homeserver     : homeserver,
        pool           : pool,
        authentication : RunnerAuthenticationUtils.parseRunnerAuthentication(authentication)
    } as MatrixRunnerResource;

}

export default MatrixRunnerResource;
