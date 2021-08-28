// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    BUILD_DATE,
    BUILD_NODE_ENV,
    BUILD_VERSION,
    BUILD_WITH_HTTP_RESOURCES,
    BUILD_WITH_LOCAL_RESOURCES,
    BUILD_WITH_MATRIX_RESOURCES,
    IS_DEVELOPMENT,
    IS_TEST
} from "./pipeline-build-constants";
import { filter } from "./nor/ts/modules/lodash";

/**
 *
 * @param scriptName
 * @__PURE__
 * @nosideeffects
 */
export function getMainVersion (
    scriptName: string
): string {

    const features : string[] = /* @__PURE__ */filter([
        BUILD_WITH_LOCAL_RESOURCES  ? 'LOCAL'  : '',
        BUILD_WITH_HTTP_RESOURCES   ? 'HTTP'   : '',
        BUILD_WITH_MATRIX_RESOURCES ? 'MATRIX' : '',
        IS_TEST                     ? 'TEST' : '',
        IS_DEVELOPMENT              ? 'DEV' : ''
    ], item => !!item);

    return `${scriptName} v${BUILD_VERSION} [${features.join('|')}]
    
Built with options:

  BUILD_VERSION               = '${BUILD_VERSION}'
  BUILD_NODE_ENV              = '${BUILD_NODE_ENV}'
  BUILD_DATE                  = '${BUILD_DATE}'
  BUILD_WITH_LOCAL_RESOURCES  = '${BUILD_WITH_LOCAL_RESOURCES}'
  BUILD_WITH_HTTP_RESOURCES   = '${BUILD_WITH_HTTP_RESOURCES}'
  BUILD_WITH_MATRIX_RESOURCES = '${BUILD_WITH_MATRIX_RESOURCES}'
`;

}

export default getMainVersion;
