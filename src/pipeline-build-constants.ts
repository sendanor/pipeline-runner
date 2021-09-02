// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
//
// See also rollup.config.js
//

import {
    parseBoolean,
    parseNonEmptyString
} from "./nor/ts/modules/lodash";

/**
 * @__PURE__
 */
export const BUILD_USAGE_URL = 'https://github.com/sendanor/pipeline-runner#usage';

/**
 * @__PURE__
 */
export const BUILD_VERSION : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_VERSION}')        ?? '?';

/**
 * @__PURE__
 */
export const BUILD_MATRIX_SERVER : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_MATRIX_SERVER}')        ?? 'io.nor.fi';

/**
 * @__PURE__
 */
export const BUILD_COMMAND_NAME : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_COMMAND_NAME}')        ?? 'nor-pipeline-runner';

/**
 * @__PURE__
 */
export const BUILD_LOG_LEVEL : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_LOG_LEVEL}')        ?? '';

/**
 * @__PURE__
 */
export const BUILD_AUTHENTICATION : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_AUTHENTICATION}')        ?? '';

/**
 * @__PURE__
 */
export const BUILD_NODE_ENV : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_NODE_ENV}')       ?? 'development';

/**
 * @__PURE__
 */
export const BUILD_DATE : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_DATE}')           ?? '';

/**
 * @__PURE__
 */
export const BUILD_VARIABLE_PREFIX : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_VARIABLE_PREFIX}')           ?? '${';

/**
 * @__PURE__
 */
export const BUILD_VARIABLE_SUFFIX : string  = /* @__PURE__ */parseNonEmptyString('%{BUILD_VARIABLE_SUFFIX}')           ?? '}';

/**
 * @__PURE__
 */
export const BUILD_WITH_LOCAL_RESOURCES  : boolean = /* @__PURE__ */parseBoolean('%{BUILD_WITH_LOCAL_RESOURCES}')  ?? true;

/**
 * @__PURE__
 */
export const BUILD_WITH_HTTP_RESOURCES   : boolean = /* @__PURE__ */parseBoolean('%{BUILD_WITH_HTTP_RESOURCES}')   ?? true;

/**
 * @__PURE__
 */
export const BUILD_WITH_MATRIX_RESOURCES : boolean = /* @__PURE__ */parseBoolean('%{BUILD_WITH_MATRIX_RESOURCES}') ?? true;

/**
 * @__PURE__
 */
export const BUILD_WITH_FULL_USAGE       : boolean = /* @__PURE__ */parseBoolean('%{BUILD_WITH_FULL_USAGE}')       ?? true;

/**
 * @__PURE__
 */
export const IS_PRODUCTION  : boolean = BUILD_NODE_ENV === 'production';

/**
 * @__PURE__
 */
export const IS_TEST        : boolean = BUILD_NODE_ENV === 'test';

/**
 * @__PURE__
 */
export const IS_DEVELOPMENT : boolean = !IS_PRODUCTION && !IS_TEST;
