// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import LocalRunnerResource from "./LocalRunnerResource";
import RunnerExitStatus from "../../types/RunnerExitStatus";
import LogService from "../../nor/ts/LogService";
import System from "../../nor/pipeline/systems/types/System";

const LOG = LogService.createLogger('waitLocalResource');

export async function waitLocalResource (
    system   : System,
    resource : LocalRunnerResource
): Promise<RunnerExitStatus> {

    return RunnerExitStatus.UNIMPLEMENTED_FEATURE;

}

export default waitLocalResource;
