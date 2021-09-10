// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerResource from "../types/RunnerResource";
import { parseHttpRunnerResource } from "../resources/http/HttpRunnerResource";
import { parseMatrixRunnerResource } from "../resources/matrix/MatrixRunnerResource";
import { parseLocalRunnerResource } from "../resources/local/LocalRunnerResource";

export class RunnerResourceUtils {

    public static parseRunnerResource (value: any) : RunnerResource | undefined {

        return (
            parseHttpRunnerResource(value)
            ?? parseLocalRunnerResource(value)
            ?? parseMatrixRunnerResource(value)
        );

    }

}

export default RunnerResourceUtils;
