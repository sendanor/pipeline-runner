// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { parseString } from "./nor/ts/modules/lodash";
import LogLevel, { parseLogLevel } from "./nor/ts/types/LogLevel";

export const PIPELINE_LOG_LEVEL : LogLevel = parseLogLevel(process?.env?.PIPELINE_LOG_LEVEL) ?? LogLevel.INFO;

export const PIPELINE_SCRIPT_NAME : string = 'nor-pipeline-runner';

export const PIPELINE_AUTHENTICATION : string = parseString(process?.env?.PIPELINE_AUTHENTICATION) ?? '';
