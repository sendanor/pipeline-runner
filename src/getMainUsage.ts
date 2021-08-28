// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    BUILD_WITH_HTTP_RESOURCES,
    BUILD_WITH_LOCAL_RESOURCES,
    BUILD_WITH_MATRIX_RESOURCES,
    BUILD_WITH_FULL_USAGE,
    BUILD_USAGE_URL
} from "./pipeline-build-constants";

/**
 *
 * @param scriptName
 * @nosideeffects
 * @__PURE__
 */
export function getMainUsage (
    scriptName: string
): string {

    /* @__PURE__ */if ( /* @__PURE__ */BUILD_WITH_FULL_USAGE ) {

        return `USAGE: ${/* @__PURE__ */scriptName} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where ARG is one of:${/* @__PURE__ */BUILD_WITH_HTTP_RESOURCES ? `

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
` : ''}${/* @__PURE__ */BUILD_WITH_MATRIX_RESOURCES ? `

  Instructions from a Matrix room:

      matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] HOMESERVER / ROOM
      matrix:ROOM
      ROOM
      
    The room will be looked up. 
    
    When the room has a state event of type fi.nor.pipeline and has empty state_key with content 
    as the data for pipeline, the pipeline will be executed in that room.
    
    Otherwise, will look for state events of type fi.nor.pipeline with state_key as a Room ID 
    type to execute.
    
    The ROOM should be either in format !ID:HOMESERVER or #ALIAS:HOMESERVER and decoded correctly 
    in the URL format.
    
    Optionally will log in Matrix using USER and PASSWORD.
    
    Optionally uses Bearer authentication with ACCESS_TOKEN.
    
    See also PIPELINE_AUTHENTICATION environment variable.
` : ''}${/* @__PURE__ */BUILD_WITH_LOCAL_RESOURCES ? `

  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.
` : ''}

  Environment variables:

    PIPELINE_AUTHENTICATION as one of:
    
      USER:PASSWORD
      _bearer:ACCESS_TOKEN
      ACCESS_TOKEN
      
    PIPELINE_LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`;
    } else {
        return `USAGE: ${/* @__PURE__ */scriptName} ARG(1) [...ARG(N)]
See ${/* @__PURE__ */BUILD_USAGE_URL}
`;
    }
}

export default getMainUsage;
