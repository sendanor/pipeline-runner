// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerExitStatus from "../types/RunnerExitStatus";
import RunnerResource from "../types/RunnerResource";
import RunnerResourceType from "../types/RunnerResourceType";
import HttpRunnerResource from "./http/HttpRunnerResource";
import LocalRunnerResource from "./local/LocalRunnerResource";
import MatrixRunnerResource from "./matrix/MatrixRunnerResource";
import {
    BUILD_WITH_HTTP_RESOURCES,
    BUILD_WITH_LOCAL_RESOURCES,
    BUILD_WITH_MATRIX_RESOURCES
} from "../pipeline-build-constants";
import System from "../nor/pipeline/systems/types/System";
import waitHttpResource from "./http/waitHttpResource";
import waitLocalResource from "./local/waitLocalResource";
import waitMatrixResource from "./matrix/waitMatrixResource";

export async function waitResource (
    system   : System,
    resource : RunnerResource
) : Promise<RunnerExitStatus> {

    switch (resource.type) {

        case RunnerResourceType.HTTP: {
            if (BUILD_WITH_HTTP_RESOURCES) {
                return await waitHttpResource(system, resource as HttpRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.LOCAL: {
            if (BUILD_WITH_LOCAL_RESOURCES) {
                return await waitLocalResource(system, resource as LocalRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.MATRIX: {
            if (BUILD_WITH_MATRIX_RESOURCES) {
                return await waitMatrixResource(system, resource as MatrixRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        default:
            return RunnerExitStatus.UNKNOWN_RESOURCE_TYPE;

    }

}

export default waitResource;
