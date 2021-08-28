// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerResource from "../types/RunnerResource";
import { parseHttpRunnerResource } from "../types/HttpRunnerResource";
import { parseMatrixRoomRunnerResource } from "../types/MatrixRoomRunnerResource";
import { parseLocalRunnerResource } from "../types/LocalRunnerResource";

export class RunnerResourceUtils {

    public static parseRunnerResource (value: any) : RunnerResource | undefined {

        return (
            parseHttpRunnerResource(value)
            ?? parseMatrixRoomRunnerResource(value)
            ?? parseLocalRunnerResource(value)
        );

    }

}

export default RunnerResourceUtils;
