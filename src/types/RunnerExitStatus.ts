// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { isNumber, parseInteger } from "../nor/ts/modules/lodash";

export enum RunnerExitStatus {

    /** Standard successful termination */
    OK                              = 0,

    // From Advanced Bash scripting guide
    GENERAL_ERRORS                  = 1,
    MISUSE_OF_SHELL_BUILTINS        = 2,

    // Our custom errors
    ARGUMENT_PARSE_ERROR            = 3,
    UNKNOWN_ARGUMENT                = 4,
    UNKNOWN_RESOURCE_TYPE           = 5,
    RESOURCE_LOAD_FAILED            = 6,
    RESOURCE_MODEL_INVALID          = 7,
    LOCAL_RESOURCE_FAILED           = 8,
    HTTP_RESOURCE_FAILED            = 9,
    MATRIX_RESOURCE_FAILED          = 10 ,
    UNIMPLEMENTED_FEATURE           = 11,
    UNBUILD_FEATURE                 = 12,
    FATAL_ERROR                     = 13,

    // From Linux sysexits.h
    USAGE                           = 64,      /* command line usage error */
    DATAERR                         = 65,      /* data format error */
    NOINPUT                         = 66,      /* cannot open input */
    NOUSER                          = 67,      /* addressee unknown */
    NOHOST                          = 68,      /* host name unknown */
    UNAVAILABLE                     = 69,      /* service unavailable */
    SOFTWARE                        = 70,      /* internal software error */
    OSERR                           = 71,      /* system error (e.g., can't fork) */
    OSFILE                          = 72,      /* critical OS file missing */
    CANTCREAT                       = 73,      /* can't create (user) output file */
    IOERR                           = 74,      /* input/output error */
    TEMPFAIL                        = 75,      /* temp failure; user is invited to retry */
    PROTOCOL                        = 76,      /* remote error in protocol */
    NOPERM                          = 77,      /* permission denied */
    CONFIG                          = 78,      /* configuration error */

    // From Advanced Bash scripting guide

    COMMAND_INVOKED_CANNOT_EXECUTE  = 126,
    COMMAND_NOT_FOUND               = 127,
    INVALID_ARGUMENT_TO_EXIT        = 128,
    FATAL_SIGNAL_RANGE_START        = 129,
    FATAL_SIGNAL_RANGE_END          = 254,
    EXIT_STATUS_OUT_OF_RANGE        = 255

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function isRunnerExitStatus (value: any): value is RunnerExitStatus {

    if (!isNumber(value)) return false;
    if (value < 0) return false;
    if (value > 255) return false;

    if ( value >= RunnerExitStatus.FATAL_SIGNAL_RANGE_START
        && value <= RunnerExitStatus.FATAL_SIGNAL_RANGE_END
    ) {
        return true;
    }

    switch (value) {

        case RunnerExitStatus.OK:
        case RunnerExitStatus.GENERAL_ERRORS:
        case RunnerExitStatus.MISUSE_OF_SHELL_BUILTINS:
        case RunnerExitStatus.ARGUMENT_PARSE_ERROR:
        case RunnerExitStatus.UNKNOWN_ARGUMENT:
        case RunnerExitStatus.UNKNOWN_RESOURCE_TYPE:
        case RunnerExitStatus.RESOURCE_LOAD_FAILED:
        case RunnerExitStatus.RESOURCE_MODEL_INVALID:
        case RunnerExitStatus.LOCAL_RESOURCE_FAILED:
        case RunnerExitStatus.HTTP_RESOURCE_FAILED:
        case RunnerExitStatus.MATRIX_RESOURCE_FAILED:
        case RunnerExitStatus.UNIMPLEMENTED_FEATURE:
        case RunnerExitStatus.FATAL_ERROR:
        case RunnerExitStatus.USAGE:
        case RunnerExitStatus.DATAERR:
        case RunnerExitStatus.NOINPUT:
        case RunnerExitStatus.NOUSER:
        case RunnerExitStatus.NOHOST:
        case RunnerExitStatus.UNAVAILABLE:
        case RunnerExitStatus.SOFTWARE:
        case RunnerExitStatus.OSERR:
        case RunnerExitStatus.OSFILE:
        case RunnerExitStatus.CANTCREAT:
        case RunnerExitStatus.IOERR:
        case RunnerExitStatus.TEMPFAIL:
        case RunnerExitStatus.PROTOCOL:
        case RunnerExitStatus.NOPERM:
        case RunnerExitStatus.CONFIG:
        case RunnerExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE:
        case RunnerExitStatus.COMMAND_NOT_FOUND:
        case RunnerExitStatus.INVALID_ARGUMENT_TO_EXIT:
        case RunnerExitStatus.FATAL_SIGNAL_RANGE_START:
        case RunnerExitStatus.FATAL_SIGNAL_RANGE_END:
        case RunnerExitStatus.EXIT_STATUS_OUT_OF_RANGE:
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
export function stringifyRunnerExitStatus (value: RunnerExitStatus): string {

    if (value >= RunnerExitStatus.FATAL_SIGNAL_RANGE_START && value <= RunnerExitStatus.FATAL_SIGNAL_RANGE_END) {
        return `FATAL_SIGNAL_${ value - RunnerExitStatus.FATAL_SIGNAL_RANGE_START }`;
    }

    switch (value) {

        case RunnerExitStatus.OK                              : return 'OK';
        case RunnerExitStatus.GENERAL_ERRORS                  : return 'GENERAL_ERRORS';
        case RunnerExitStatus.MISUSE_OF_SHELL_BUILTINS        : return 'MISUSE_OF_SHELL_BUILTINS';
        case RunnerExitStatus.ARGUMENT_PARSE_ERROR            : return 'ARGUMENT_PARSE_ERROR';
        case RunnerExitStatus.UNKNOWN_ARGUMENT                : return 'UNKNOWN_ARGUMENT';
        case RunnerExitStatus.UNKNOWN_RESOURCE_TYPE           : return 'UNKNOWN_RESOURCE_TYPE';
        case RunnerExitStatus.RESOURCE_LOAD_FAILED            : return 'RESOURCE_LOAD_FAILED';
        case RunnerExitStatus.RESOURCE_MODEL_INVALID          : return 'RESOURCE_MODEL_INVALID';
        case RunnerExitStatus.LOCAL_RESOURCE_FAILED           : return 'LOCAL_RESOURCE_FAILED';
        case RunnerExitStatus.HTTP_RESOURCE_FAILED            : return 'HTTP_RESOURCE_FAILED';
        case RunnerExitStatus.MATRIX_RESOURCE_FAILED          : return 'MATRIX_RESOURCE_FAILED';
        case RunnerExitStatus.UNIMPLEMENTED_FEATURE           : return 'UNIMPLEMENTED_FEATURE';
        case RunnerExitStatus.FATAL_ERROR                     : return 'FATAL_ERROR';
        case RunnerExitStatus.USAGE                           : return 'USAGE';
        case RunnerExitStatus.DATAERR                         : return 'DATAERR';
        case RunnerExitStatus.NOINPUT                         : return 'NOINPUT';
        case RunnerExitStatus.NOUSER                          : return 'NOUSER';
        case RunnerExitStatus.NOHOST                          : return 'NOHOST';
        case RunnerExitStatus.UNAVAILABLE                     : return 'UNAVAILABLE';
        case RunnerExitStatus.SOFTWARE                        : return 'SOFTWARE';
        case RunnerExitStatus.OSERR                           : return 'OSERR';
        case RunnerExitStatus.OSFILE                          : return 'OSFILE';
        case RunnerExitStatus.CANTCREAT                       : return 'CANTCREAT';
        case RunnerExitStatus.IOERR                           : return 'IOERR';
        case RunnerExitStatus.TEMPFAIL                        : return 'TEMPFAIL';
        case RunnerExitStatus.PROTOCOL                        : return 'PROTOCOL';
        case RunnerExitStatus.NOPERM                          : return 'NOPERM';
        case RunnerExitStatus.CONFIG                          : return 'CONFIG';
        case RunnerExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE  : return 'COMMAND_INVOKED_CANNOT_EXECUTE';
        case RunnerExitStatus.COMMAND_NOT_FOUND               : return 'COMMAND_NOT_FOUND';
        case RunnerExitStatus.INVALID_ARGUMENT_TO_EXIT        : return 'INVALID_ARGUMENT_TO_EXIT';
        case RunnerExitStatus.FATAL_SIGNAL_RANGE_START        : return 'FATAL_SIGNAL_RANGE_START';
        case RunnerExitStatus.FATAL_SIGNAL_RANGE_END          : return 'FATAL_SIGNAL_RANGE_END';
        case RunnerExitStatus.EXIT_STATUS_OUT_OF_RANGE        : return 'EXIT_STATUS_OUT_OF_RANGE';

    }

    throw new TypeError(`Unsupported RunnerExitStatus value: ${value}`);

}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerExitStatus (value: any): RunnerExitStatus | undefined {

    if (value === undefined) return undefined;

    if (isRunnerExitStatus(value)) return value;

    const valueString = `${value}`.toUpperCase();

    if (valueString.startsWith('FATAL_SIGNAL_')) {

        const int = parseInteger( value.substr(0, 'FATAL_SIGNAL_'.length) );

        if (int === undefined) return undefined;

        if ( int >= 0 && int < (RunnerExitStatus.FATAL_SIGNAL_RANGE_END - RunnerExitStatus.FATAL_SIGNAL_RANGE_START) ) {
            return int + RunnerExitStatus.FATAL_SIGNAL_RANGE_START;
        } else {
            return undefined;
        }

    }

    switch (valueString) {

        case 'OK'                              : return RunnerExitStatus.OK;
        case 'GENERAL_ERRORS'                  : return RunnerExitStatus.GENERAL_ERRORS;
        case 'MISUSE_OF_SHELL_BUILTINS'        : return RunnerExitStatus.MISUSE_OF_SHELL_BUILTINS;
        case 'ARGUMENT_PARSE_ERROR'            : return RunnerExitStatus.ARGUMENT_PARSE_ERROR;
        case 'UNKNOWN_ARGUMENT'                : return RunnerExitStatus.UNKNOWN_ARGUMENT;
        case 'UNKNOWN_RESOURCE_TYPE'           : return RunnerExitStatus.UNKNOWN_RESOURCE_TYPE;
        case 'RESOURCE_LOAD_FAILED'            : return RunnerExitStatus.RESOURCE_LOAD_FAILED;
        case 'RESOURCE_MODEL_INVALID'          : return RunnerExitStatus.RESOURCE_MODEL_INVALID;
        case 'LOCAL_RESOURCE_FAILED'           : return RunnerExitStatus.LOCAL_RESOURCE_FAILED;
        case 'HTTP_RESOURCE_FAILED'            : return RunnerExitStatus.HTTP_RESOURCE_FAILED;
        case 'MATRIX_RESOURCE_FAILED'          : return RunnerExitStatus.MATRIX_RESOURCE_FAILED;
        case 'UNIMPLEMENTED_FEATURE'           : return RunnerExitStatus.UNIMPLEMENTED_FEATURE;
        case 'FATAL_ERROR'                     : return RunnerExitStatus.FATAL_ERROR;
        case 'USAGE'                           : return RunnerExitStatus.USAGE;
        case 'DATAERR'                         : return RunnerExitStatus.DATAERR;
        case 'NOINPUT'                         : return RunnerExitStatus.NOINPUT;
        case 'NOUSER'                          : return RunnerExitStatus.NOUSER;
        case 'NOHOST'                          : return RunnerExitStatus.NOHOST;
        case 'UNAVAILABLE'                     : return RunnerExitStatus.UNAVAILABLE;
        case 'SOFTWARE'                        : return RunnerExitStatus.SOFTWARE;
        case 'OSERR'                           : return RunnerExitStatus.OSERR;
        case 'OSFILE'                          : return RunnerExitStatus.OSFILE;
        case 'CANTCREAT'                       : return RunnerExitStatus.CANTCREAT;
        case 'IOERR'                           : return RunnerExitStatus.IOERR;
        case 'TEMPFAIL'                        : return RunnerExitStatus.TEMPFAIL;
        case 'PROTOCOL'                        : return RunnerExitStatus.PROTOCOL;
        case 'NOPERM'                          : return RunnerExitStatus.NOPERM;
        case 'CONFIG'                          : return RunnerExitStatus.CONFIG;
        case 'COMMAND_INVOKED_CANNOT_EXECUTE'  : return RunnerExitStatus.COMMAND_INVOKED_CANNOT_EXECUTE;
        case 'COMMAND_NOT_FOUND'               : return RunnerExitStatus.COMMAND_NOT_FOUND;
        case 'INVALID_ARGUMENT_TO_EXIT'        : return RunnerExitStatus.INVALID_ARGUMENT_TO_EXIT;
        case 'FATAL_SIGNAL_RANGE_START'        : return RunnerExitStatus.FATAL_SIGNAL_RANGE_START;
        case 'FATAL_SIGNAL_RANGE_END'          : return RunnerExitStatus.FATAL_SIGNAL_RANGE_END;
        case 'EXIT_STATUS_OUT_OF_RANGE'        : return RunnerExitStatus.EXIT_STATUS_OUT_OF_RANGE;

        default:
            return undefined;

    }

}

export default RunnerExitStatus;
