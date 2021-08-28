// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import RunnerExitStatus from "../types/RunnerExitStatus";
import RunnerResource from "../types/RunnerResource";
import RunnerResourceType from "../types/RunnerResourceType";
import runHttpResource from "./http/runHttpResource";
import HttpRunnerResource from "../types/HttpRunnerResource";
import runLocalResource from "./local/runLocalResource";
import LocalRunnerResource from "../types/LocalRunnerResource";
import runMatrixRoomResource from "./matrix/runMatrixRoomResource";
import MatrixRoomRunnerResource from "../types/MatrixRoomRunnerResource";
import {
    BUILD_WITH_HTTP_RESOURCES,
    BUILD_WITH_LOCAL_RESOURCES,
    BUILD_WITH_MATRIX_RESOURCES
} from "../pipeline-build-constants";

export async function runResource (
    resource : RunnerResource
) : Promise<RunnerExitStatus> {

    switch (resource.type) {

        case RunnerResourceType.HTTP: {
            if (BUILD_WITH_HTTP_RESOURCES) {
                return await runHttpResource(resource as HttpRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.LOCAL: {
            if (BUILD_WITH_LOCAL_RESOURCES) {
                return await runLocalResource(resource as LocalRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        case RunnerResourceType.MATRIX_ROOM: {
            if (BUILD_WITH_MATRIX_RESOURCES) {
                return await runMatrixRoomResource(resource as MatrixRoomRunnerResource);
            } else {
                return RunnerExitStatus.UNBUILD_FEATURE;
            }
        }

        default:
            return RunnerExitStatus.UNKNOWN_RESOURCE_TYPE;

    }

}

export default runResource;
