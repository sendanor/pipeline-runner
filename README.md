# @sendanor/pipeline-runner

Our Pipeline Processor for NodeJS v8 and newer.

For the library, check out [@sendanor/pipeline](https://github.com/sendanor/pipeline).

### Install the command line tool

Install in your project:

`npm i --save @sendanor/pipeline-runner`

...or install globally:

`npm i -g @sendanor/pipeline-runner`

### Usage

USAGE: `pipeline-runner ARG(1) [...ARG(N)]`

Executes instructions from various sources.
  
Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where `ARG` is one of:

#### Instructions from HTTP or HTTPS resource:

    http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
The resource will be executed once loaded.

Optionally uses HTTP Basic Authentication if `USER` and `PASSWORD` is provided.

Optionally uses Bearer Token Authentication if `ACCESS_TOKEN` is provided.

See also `PIPELINE_AUTHENTICATION` environment variable.

#### Instructions from a Matrix room:

      matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] HOMESERVER / ROOM
      matrix:ROOM
      ROOM
      
The room will be looked up. 
    
When the room has a state event of type `fi.nor.pipeline` and has empty `state_key` with content 
as the data for pipeline, the pipeline will be executed in that room.

Otherwise, will look for state events of type `fi.nor.pipeline` with `state_key` as a Room ID 
type to execute.

The ROOM should be either in format `!ID:HOMESERVER` or `#ALIAS:HOMESERVER` and decoded correctly 
in the URL format.

Optionally will log in Matrix using `USER` and `PASSWORD`.

Optionally uses Bearer authentication with `ACCESS_TOKEN`.

See also `PIPELINE_AUTHENTICATION` environment variable.

#### Instructions from the local system:
  
    [file://]FILE
    
The resource will be loaded from the local filesystem and executed.

#### Environment variables:

##### `PIPELINE_AUTHENTICATION` as one of:

 * `USER:PASSWORD`
 * `_bearer:ACCESS_TOKEN`
 * `ACCESS_TOKEN`

### It's MIT licenced

### It doesn't have any runtime dependencies

Except *NodeJS LTS v8 or newer*.

### It's well tested

Our unit tests exists beside the code. To run tests, check out our test repository 
[@sendanor/test](https://github.com/sendanor/test).

### We don't have traditional releases

This project evolves directly to our git repository in an agile manner.

### Stable releases available for a commercial customer

For *tailored commercial release*, you may contact [our sales](mailto:info@sendanor.fi).

General rule for pricing is 500 € (or $600) / [feature](https://github.com/sendanor/ui/issues). One 
full stable release containing multiple components is 8000 €.

The payment includes a month of agile development with the customer, and a year of support for that 
release branch.

### Build the source

`npm run build`

