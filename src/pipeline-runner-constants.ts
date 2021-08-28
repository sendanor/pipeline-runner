// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { parseBoolean, parseString } from "./nor/ts/modules/lodash";

export const PIPELINE_SCRIPT_NAME : string = 'nor-pipeline-runner';

export const ENABLE_MATRIX : boolean = parseBoolean(process?.env?.ENABLE_MATRIX) ?? true;

export const PIPELINE_AUTHENTICATION : string = parseString(process?.env?.PIPELINE_AUTHENTICATION) ?? '';
