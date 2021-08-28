// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

export const enum RunnerShortArgument {
    HELP    = '-h',
    VERSION = '-v'
}

export const enum RunnerLongArgument {
    HELP                     = '--help',
    VERSION                  = '--version',
    DISABLE_ARGUMENT_PARSING = '--'
}

export const enum RunnerArgumentType {
    HELP,
    VERSION,
    DISABLE_ARGUMENT_PARSING
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

    }

    return undefined;

}

export default RunnerArgumentType;
