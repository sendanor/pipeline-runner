# @sendanor/pipeline-runner

Our Pipeline Processor for NodeJS v8 and newer.

For the library, check out [@sendanor/pipeline](https://github.com/sendanor/pipeline).

### Install the command line tool

Install in your project:

`npm i --save @sendanor/pipeline-runner`

...or install globally:

`npm i -g @sendanor/pipeline-runner`

### Usage

USAGE: `nor-pipeline-runner ARG(1) [...ARG(N)]`

Executes instructions from various sources.
  
Instructions in the resource may be type of:

 * [Pipeline](https://github.com/sendanor/test/blob/main/examples/pipeline/pipeline.json)
 * [Stage](https://github.com/sendanor/test/blob/main/examples/pipeline/stage.json)
 * [Job](https://github.com/sendanor/test/blob/main/examples/pipeline/job.json)
 * Steps
   * [Script Step](https://github.com/sendanor/test/blob/main/examples/pipeline/step-script.json)

...where `ARG` is one of:

#### Instructions from HTTP or HTTPS resource:

    http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
The resource will be executed once loaded.

Optionally uses HTTP Basic Authentication if `USER` and `PASSWORD` is provided.

Optionally uses Bearer Token Authentication if `ACCESS_TOKEN` is provided.

See also `PIPELINE_AUTHENTICATION` environment variable.

#### Instructions from a Matrix room:

     matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] SERVER [/ POOL]
     POOL

Will look up work items to do from Matrix.

If the agent belongs to multiple pools (which are Matrix rooms), and no pool is defined, one
will be picked up by random.

If multiple work items are available, one will be picked by random.

Uses Bearer authentication with ACCESS_TOKEN by default. Optionally will log in Matrix using
USER and PASSWORD.

See also PIPELINE_AUTHENTICATION and PIPELINE_SERVER environment variable.

#### Instructions from the local system:
  
    [file://]FILE
    
The resource will be loaded from the local filesystem and executed.

#### Environment variables:

##### `PIPELINE_SERVER`

The default Matrix server. 

By default, `io.nor.fi`.

##### `PIPELINE_AUTHENTICATION` as one of:

 * `USER:PASSWORD`
 * `_bearer:ACCESS_TOKEN`
 * `ACCESS_TOKEN`

##### `PIPELINE_LOG_LEVEL` as one of:

 * `ALL`
 * `DEBUG`
 * `INFO` (default)
 * `WARN`
 * `ERROR`
 * `NONE`
 
### It's MIT licenced

### It doesn't have any runtime dependencies

Except *NodeJS LTS v8 or newer*.

### It compiles as a single standalone 117 kB script

Including all the dependencies as well!

### It's well tested

Our unit tests exists beside the code. To run tests, check out our test repository 
[@sendanor/test](https://github.com/sendanor/test).

### We don't have traditional releases

This project evolves directly to our git repository in an agile manner.

### Stable releases available for a commercial customer

For *tailored commercial release*, you may contact [our sales](mailto:info@sendanor.fi).

General rule for pricing is 500 € (or $600) / [feature](https://github.com/sendanor/pipeline-runner/issues). One 
full stable release containing multiple components is 8000 €.

The payment includes a month of agile development with the customer, and a year of support for that 
release branch.

### Build the source

`npm run build`

