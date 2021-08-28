## Pipeline runner program

### Command Line Usage

```
$ ts-node main.ts 
[RequestClient] Detected NodeJS environment
USAGE: runner ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where ARG is one of:

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.

  Instructions from a Matrix room:

      matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] HOMESERVER / ROOM
      matrix:ROOM
      ROOM
      
    The room will be looked up. 
    
    When the room has a state event of type fi.nor.pipeline and has empty state_key with content 
    as the data for pipeline, the pipeline will be executed in that room.
    
    Otherwise will look for state events of type fi.nor.pipeline with state_key as a Room ID 
    type to execute.
    
    The ROOM should be either in format !ID:HOMESERVER or #ALIAS:HOMESERVER and decoded correctly 
    in the URL format.
    
    Optionally will log in Matrix using USER and PASSWORD.
    
    Optionally uses Bearer authentication with ACCESS_TOKEN.
    
    See also PIPELINE_AUTHENTICATION environment variable.
    
  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.

  Environment variables:

    PIPELINE_AUTHENTICATION as one of:
    
      USER:PASSWORD
      _bearer:ACCESS_TOKEN
      ACCESS_TOKEN

```

### Example pipelines

Check out our [example pipelines](https://github.com/sendanor/test/tree/main/examples/pipeline).
