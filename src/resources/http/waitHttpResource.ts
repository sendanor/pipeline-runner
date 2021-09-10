// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import HttpRunnerResource from "./HttpRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";
import System from "../../nor/pipeline/systems/types/System";

const LOG = LogService.createLogger('waitHttpResource');

export async function waitHttpResource (
    system   : System,
    resource : HttpRunnerResource
): Promise<RunnerExitStatus> {

    return RunnerExitStatus.UNIMPLEMENTED_FEATURE;

}

export default waitHttpResource;
