// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export const enum RunnerShortArgument {
    HELP          = '-h',
    WAIT_FOR_WORK = '-w',
    VERSION       = '-v'
}

export const enum RunnerLongArgument {
    HELP                     = '--help',
    VERSION                  = '--version',
    WAIT_FOR_WORK            = '--wait',
    DISABLE_ARGUMENT_PARSING = '--'
}

export const enum RunnerArgumentType {
    HELP,
    VERSION,
    DISABLE_ARGUMENT_PARSING,
    WAIT_FOR_WORK
}

/**
 *
 * @param value
 * @__PURE__
 * @nosideeffects
 */
export function parseRunnerArgumentType (value : any) : RunnerArgumentType | undefined {

    switch (value) {

        case RunnerShortArgument.HELP:
        case RunnerLongArgument.HELP:
        case RunnerArgumentType.HELP:
            return RunnerArgumentType.HELP;

        case RunnerShortArgument.VERSION:
        case RunnerLongArgument.VERSION:
        case RunnerArgumentType.VERSION:
            return RunnerArgumentType.VERSION;

        case RunnerLongArgument.DISABLE_ARGUMENT_PARSING:
        case RunnerArgumentType.DISABLE_ARGUMENT_PARSING:
            return RunnerArgumentType.DISABLE_ARGUMENT_PARSING;

        case RunnerShortArgument.WAIT_FOR_WORK:
        case RunnerLongArgument.WAIT_FOR_WORK:
        case RunnerArgumentType.WAIT_FOR_WORK:
            return RunnerArgumentType.WAIT_FOR_WORK;

    }

    return undefined;

}

export default RunnerArgumentType;
