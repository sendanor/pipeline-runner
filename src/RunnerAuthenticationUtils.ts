// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerAuthentication from "./types/RunnerAuthentication";
import { parseBasicRunnerAuthentication } from "./types/BasicRunnerAuthentication";
import { parseBearerRunnerAuthentication } from "./types/BearerRunnerAuthentication";

export class RunnerAuthenticationUtils {

    // parseRunnerAuthentication

    public static parseRunnerAuthentication (
        value: string
    ) : RunnerAuthentication | undefined;

    public static parseRunnerAuthentication (
        username: string,
        password: string
    ) : RunnerAuthentication | undefined;

    public static parseRunnerAuthentication (
        value1  : string,
        value2 ?: string | undefined
    ) : RunnerAuthentication | undefined {

        if (value2 === undefined) {

            return (
                parseBearerRunnerAuthentication(value1)
                ?? parseBasicRunnerAuthentication(value1)
            );

        } else {

            return (
                parseBearerRunnerAuthentication(value1, value2)
                ?? parseBasicRunnerAuthentication(value1, value2)
            );

        }

    }


}

export default RunnerAuthenticationUtils;
