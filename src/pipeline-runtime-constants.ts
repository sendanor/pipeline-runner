// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { parseNonEmptyString, parseString } from "./nor/ts/modules/lodash";
import LogLevel, { parseLogLevel } from "./nor/ts/types/LogLevel";
import {
    BUILD_AUTHENTICATION,
    BUILD_COMMAND_NAME, BUILD_LOG_LEVEL,
    BUILD_MATRIX_SERVER, BUILD_VARIABLE_PREFIX, BUILD_VARIABLE_SUFFIX
} from "./pipeline-build-constants";

export const PIPELINE_LOG_LEVEL       : LogLevel = parseLogLevel(parseNonEmptyString(process?.env?.PIPELINE_LOG_LEVEL) ?? parseNonEmptyString(BUILD_LOG_LEVEL)) ?? LogLevel.INFO ;
export const PIPELINE_SCRIPT_NAME     : string   = parseNonEmptyString(process?.env?.PIPELINE_SERVER) ?? BUILD_COMMAND_NAME;
export const PIPELINE_AUTHENTICATION  : string   = parseString(process?.env?.PIPELINE_AUTHENTICATION) ?? BUILD_AUTHENTICATION;
export const PIPELINE_SERVER          : string   = parseNonEmptyString(process?.env?.PIPELINE_SERVER) ?? BUILD_MATRIX_SERVER;
export const PIPELINE_VARIABLE_PREFIX : string   = parseNonEmptyString(process?.env?.PIPELINE_VARIABLE_PREFIX) ?? BUILD_VARIABLE_PREFIX;
export const PIPELINE_VARIABLE_SUFFIX : string   = parseNonEmptyString(process?.env?.PIPELINE_VARIABLE_SUFFIX) ?? BUILD_VARIABLE_SUFFIX;
