// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerExitStatus from "../types/RunnerExitStatus";
import RunnerResource from "../types/RunnerResource";
import RunnerResourceType from "../types/RunnerResourceType";
import runHttpResource from "./http/runHttpResource";
import HttpRunnerResource from "../types/HttpRunnerResource";
import runLocalResource from "./local/runLocalResource";
import LocalRunnerResource from "../types/LocalRunnerResource";
import runMatrixResource from "./matrix/runMatrixResource";
import MatrixRunnerResource from "../types/MatrixRunnerResource";
import {
    BUILD_WITH_HTTP_RESOURCES,
    BUILD_WITH_LOCAL_RESOURCES,
    BUILD_WITH_MATRIX_RESOURCES
} from "../pipeline-build-constants";
import System from "../nor/pipeline/systems/types/System";

export async function runResource (
    system   : System,
    resource : RunnerResource
) : Promise<RunnerExitStatus> {

    switch (resource.type) {

        case RunnerResourceType.HTTP: {
            if (BUILD_WITH_HTTP_RESOURCES) {
                return await runHttpResource(system, resource as HttpRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.LOCAL: {
            if (BUILD_WITH_LOCAL_RESOURCES) {
                return await runLocalResource(system, resource as LocalRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.MATRIX: {
            if (BUILD_WITH_MATRIX_RESOURCES) {
                return await runMatrixResource(system, resource as MatrixRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        default:
            return RunnerExitStatus.UNKNOWN_RESOURCE_TYPE;

    }

}

export default runResource;
