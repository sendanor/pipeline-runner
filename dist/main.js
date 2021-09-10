#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function O(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){u(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new rr(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new nr;++t<r;)this.add(e[t])}function l(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Wn);return o.cache=new(l.Cache||Jn),o}
function v(e){return void 0===e}function c(e){return vr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!vr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||xa(e)}function p(e){return Ga(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return Wa(e)}function g(e){return v(e)||Wa(e)}function T(e,t){return Zi(e,t)}
function S(e,t){return so(e,t)}function A(e,t){return wt(e)&&S(ol(e),t)}function m(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,wt(e)&&S(P(e),t))}function N(e){return!!wt(e)&&!(e instanceof Date)&&!bt(e)&&!c(
e)&&m(e,p,void 0)}function y(e,t=p,r=void 0){return!!wt(e)&&!(e instanceof Date)&&!bt(e)&&!c(e)&&m(e,t,r)}function w(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!wt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(bt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=Yo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=ol(e),n=Xo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function R(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return w(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>T(e,e=>e(t))}function b(e){return wt(e)}function I(e,t){return b(e
)&&0===(r=t,xs(P(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return Pa(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=Bi(e,(e,t)=>t);return xs(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),xs(e,e=>t(e))):[]}function U(e){switch(e
){case cl.HTTP:return"http";case cl.LOCAL:return"local";case cl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return N(e)&&function(){switch(null==e?void 0:e.type){
case hl.NONE:case hl.BASIC_AUTH:case hl.BEARER_AUTH:return 1;default:return}}()}function F(e){return N(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===_l.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:_l.BASIC_AUTH,username:r,password:n
}}function M(e){return N(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===_l.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:_l.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:_l.BEARER_AUTH,access_token:n}}function j(e){if(xa(e)&&!(e<0||255<e)){if(
El.FATAL_SIGNAL_RANGE_START<=e&&e<=El.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case El.OK:case El.GENERAL_ERRORS:
case El.MISUSE_OF_SHELL_BUILTINS:case El.ARGUMENT_PARSE_ERROR:case El.UNKNOWN_ARGUMENT:case El.UNKNOWN_RESOURCE_TYPE:
case El.UNKNOWN_AUTHENTICATION_TYPE:case El.RESOURCE_LOAD_FAILED:case El.RESOURCE_MODEL_INVALID:
case El.LOCAL_RESOURCE_FAILED:case El.HTTP_RESOURCE_FAILED:case El.MATRIX_RESOURCE_FAILED:case El.UNIMPLEMENTED_FEATURE:
case El.UNBUILD_FEATURE:case El.FATAL_ERROR:case El.USAGE:case El.DATAERR:case El.NOINPUT:case El.NOUSER:case El.NOHOST:
case El.UNAVAILABLE:case El.SOFTWARE:case El.OSERR:case El.OSFILE:case El.CANTCREAT:case El.IOERR:case El.TEMPFAIL:
case El.PROTOCOL:case El.NOPERM:case El.CONFIG:case El.COMMAND_INVOKED_CANNOT_EXECUTE:case El.COMMAND_NOT_FOUND:
case El.INVALID_ARGUMENT_TO_EXIT:case El.FATAL_SIGNAL_RANGE_START:case El.FATAL_SIGNAL_RANGE_END:
case El.EXIT_STATUS_OUT_OF_RANGE:case El.UNKNOWN_AGENT_ID:case El.WORK_CANCELLED:case El.CONFLICT:return 1;default:
return}}}function H(e){if(El.FATAL_SIGNAL_RANGE_START<=e&&e<=El.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-El.FATAL_SIGNAL_RANGE_START}`;switch(e){case El.OK:return"OK";case El.GENERAL_ERRORS:
return"GENERAL_ERRORS";case El.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case El.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case El.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case El.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case El.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case El.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case El.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case El.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case El.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case El.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case El.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case El.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case El.FATAL_ERROR:return"FATAL_ERROR"
;case El.USAGE:return"USAGE";case El.DATAERR:return"DATAERR";case El.NOINPUT:return"NOINPUT";case El.NOUSER:
return"NOUSER";case El.NOHOST:return"NOHOST";case El.UNAVAILABLE:return"UNAVAILABLE";case El.SOFTWARE:return"SOFTWARE"
;case El.OSERR:return"OSERR";case El.OSFILE:return"OSFILE";case El.CANTCREAT:return"CANTCREAT";case El.IOERR:
return"IOERR";case El.TEMPFAIL:return"TEMPFAIL";case El.PROTOCOL:return"PROTOCOL";case El.NOPERM:return"NOPERM"
;case El.CONFIG:return"CONFIG";case El.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case El.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case El.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case El.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case El.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case El.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case El.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case El.WORK_CANCELLED:return"WORK_CANCELLED";case El.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function B(e){return ac?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${oc?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${sc?`

  Instructions to fetch work from Sendanor's Pipeline CRUD repository (see https://lomake.net):

      [matrix://] [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN ] [@PIPELINE_SERVER] [/POOL]
      [POOL]
      
    Will look up work items to do from Matrix. 
    
    If the agent belongs to multiple pools (which are Matrix rooms), and no pool is defined, one 
    will be picked up by random.
    
    If multiple work items are available, one will be picked by random.
    
    Uses Bearer authentication with ACCESS_TOKEN by default. Optionally will log in Matrix using 
    USER and PASSWORD.
    
    See also PIPELINE_AUTHENTICATION and PIPELINE_SERVER environment variable.
`:""}${ic?`

  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.
`:""}

...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    -w --wait          Waits for work to appear if no work is available
    --                 Disables option parsing

  Environment variables:

    PIPELINE_SERVER -- The default Matrix server. By default, io.nor.fi.
    
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
`:`USAGE: ${e} ARG(1) [...ARG(N)]
See https://github.com/sendanor/pipeline-runner#usage
`}function x(e){if(xa(e))switch(e){case pl.OPTIONS:return"options";case pl.GET:return"get";case pl.POST:return"post"
;case pl.PUT:return"put";case pl.DELETE:return"delete";case pl.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!Ga(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function W(e){return p(e)||xa(e)||Pa(e)||Ua(e)
}function V(e){return W(e)||d(e,C(V,v))||K(e)}function K(e){return N(e)&&m(e,p,C(V,v))}function q(e){return v(e)||K(e)}
function z(e){return W(e)||Y(e)||X(e)}function X(e){return N(e)&&m(e,p,C(z,v))}function Y(e){return d(e,C(z,v))}
function Q(e){return N(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===vu.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Pa(r))||N(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===vu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===vu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===vu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||N(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===vu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||z(null==e?void 0:e.default));var t,r}function Z(e){return N(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Q))&&(v(null==e?void 0:e.variables)||K(
null==e?void 0:e.variables))}function ee(e){return!(!Z(e)||void 0===Lc.findController(e)&&!(Z(e)&&N(e)&&J(
null==e?void 0:e.name)))}function te(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&I(e,Pc)}
function re(e){if(te(e))return e}function ne(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&I(
e,Uc)}function ie(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&I(e,$c)}function oe(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e)
)return e}(e))&&void 0!==t?t:re(e))&&void 0!==t?t:(t=e,null!==(e=Lc.parseControllerModel(t))&&void 0!==e?e:re(t))}
function se(e){return b(e)&&bt(null==e?void 0:e.getName)&&bt(null==e?void 0:e.isRunning)&&bt(null==e?void 0:e.isStarted
)&&bt(null==e?void 0:e.isPaused)&&bt(null==e?void 0:e.isCancelled)&&bt(null==e?void 0:e.isFinished)&&bt(
null==e?void 0:e.isFailed)&&bt(null==e?void 0:e.isSuccessful)&&bt(null==e?void 0:e.start)&&bt(null==e?void 0:e.pause
)&&bt(null==e?void 0:e.resume)&&bt(null==e?void 0:e.stop)&&bt(null==e?void 0:e.destroy)&&bt(null==e?void 0:e.toString
)&&bt(null==e?void 0:e.toJSON)&&bt(null==e?void 0:e.onStarted)&&bt(null==e?void 0:e.onPaused)&&bt(
null==e?void 0:e.onResumed)&&bt(null==e?void 0:e.onCancelled)&&bt(null==e?void 0:e.onFailed)&&bt(
null==e?void 0:e.onFinished)&&bt(null==e?void 0:e.onChanged)}function ae(e){return e instanceof Mc}function le(e){
return e instanceof jc}function ue(e){return p(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function de(e){return N(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function he(e){return p(e)&&!!e&&"@"===e[0]}
function _e(e){return N(e)&&I(e,["content","type","sender"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function Ee(e){return N(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function ve(e){try{return function(e){if(!N(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!q(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!he(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!_e(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function pe(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||K(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function fe(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!K(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!K(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ge(e){return Io([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Te(e){
return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,pe)}function Se(e){try{return function(e){if(!N(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,pe))throw e=Yo(null==e?void 0:e.events,e=>!pe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${fe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ae(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&K(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function me(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!Ee(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ve(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Ne(e){return Io([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ye(e){
return N(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ae)&&Pa(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function we(e){try{return function(e){if(!N(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Ae)){var t=Yo(null==e?void 0:e.events,e=>!Ae(e));throw new TypeError(
`Property "events" item was not correct: ${me(t)}`)}if(!Pa(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function Ce(e){
return Io([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function be(e){return N(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,_e)}function Ie(e){return N(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function De(e){return N(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||Te(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||ye(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Re(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||be(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Ie(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!N(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!Te(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Se(e)}`);if(
!v(null==e?void 0:e.timeline)&&!ye(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${we(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Re(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!be(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Ie(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return N(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||Ee(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Pe(e){try{return function(e){if(!N(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Le)}function $e(e){try{return function(e){if(!N(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Le))throw e=Yo(
null==e?void 0:e.events,e=>!Le(e)),new TypeError(`Property "events" had invalid item: ${Pe(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return N(e)&&I(e,["invite_state"])&&Ue(
null==e?void 0:e.invite_state)}function ke(e){try{return function(e){if(!N(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Ue(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Me(e){return N(e)&&I(e,[
"state","timeline","account_data"])&&Te(null==e?void 0:e.state)&&ye(null==e?void 0:e.timeline)&&be(
null==e?void 0:e.account_data)}function Ge(e){return N(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,ue,De))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,ue,Fe))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,ue,Me))}function je(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,ue,De))throw new TypeError(`Property "join" was invalid: ${R(
null==e?void 0:e.join,ue,De,ce,Oe)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${R(null==e?void 0:e.invite,ue,Fe,ce,ke)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,ue,Me))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function He(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
_e)}function Be(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function xe(e){return N(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&d(null==e?void 0:e.left,he)}function Je(e){return y(e,p,E)}
function We(e){try{return function(e){if(!N(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Ge(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${je(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!He(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!be(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Be(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Je(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function Ve(e){return N(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||Ua(null==e?void 0:e.avatar_url))}function Ke(e){
return N(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case bl.M_USER_IN_USE:
case bl.M_INVALID_USERNAME:case bl.M_EXCLUSIVE:case bl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function qe(e){return encodeURIComponent(e)}async function ze(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Rl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}async function Xe(e,t){switch(
t.type){case dl.HTTP:return oc?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Oc.getJson(r.url,c)))return qc.error(`Failed to load URL "${r.url}": `,o),
vl.RESOURCE_LOAD_FAILED;if(void 0===(s=oe(o)))return qc.error(`Model from URL "${r.url}" was not valid: `,o),
vl.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Kc(t,a,l,_c,Ec)
;let e=Jc.createController(s,u);return qc.info(`Running ${e.getName()} from ${r.url}`),
await Jc.startAndWaitUntilFinished(e),qc.info(`Successfully finished ${e.getName()} from ${r.url}`),vl.OK}catch(e){
return qc.error("Error: ",e),vl.HTTP_RESOURCE_FAILED}}(e,t):vl.UNBUILD_FEATURE;case dl.LOCAL:return ic?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
Cu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=oe(i=JSON.parse(n))))return zc.warn("Model was not valid: ",i),vl.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new Kc(t,s,a,_c,Ec);let e=Jc.createController(o,l);return zc.info(`Running ${e.getName(
)} from ${r.path}`),await Jc.startAndWaitUntilFinished(e),zc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,vl.OK}catch(e){return zc.error("Error: ",e),vl.LOCAL_RESOURCE_FAILED}}(e,t):vl.UNBUILD_FEATURE;case dl.MATRIX:
return sc?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,m,N,y,w,R;try{ed.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new Yc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return vl.UNKNOWN_AUTHENTICATION_TYPE;e=new Yc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return ed.error("Could not detect agent user ID"),vl.UNKNOWN_AGENT_ID
;ed.info(`Agent user ID: ${t}`);const C=new Zc(e,Rl.FI_NOR_AGENT_DTO);if(0===(R=await C.getAll()).length
)return ed.debug("Detected no pools available."),vl.NO_WORK_AVAILABLE;T=(1===R.length?(ed.debug(
"Detected single pool available. Picking it."),R[0]):(ed.debug(
`Detected ${R.length} pools available. Picking one by random.`),R[Math.floor(Math.random()*R.length)])).id,ed.info(
`Pool ID: ${T}`);const b=new Zc(e,Rl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Rl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),ed.debug("runList = ",S);let r;if(0===S.length)return ed.debug("Detected no work available."),
vl.NO_WORK_AVAILABLE;r=1===S.length?(ed.debug("Detected single work available. Picking it."),S[0]):(ed.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return ed.warn(`Work ID was already running: ${I}`),ed.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),ed.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),vl.CONFLICT;if(ed.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return ed.warn(
"The work item disappeared while we were selecting it."),vl.WORK_CANCELLED;if(I!==r.id)return ed.error(
`The work item ID conflict: ${I} !== ${r.id}`),vl.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return ed.error(""),vl.CONFLICT;if(ed.debug(
"Work item secured to us! We can start the job."),void 0===(m=oe(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return ed.warn("Work item did not contain correct pipeline model: ",r),
vl.RESOURCE_MODEL_INVALID;N=null==m?void 0:m.parameters,y=null==m?void 0:m.variables,w=new Kc(i,N,y,_c,Ec)
;let n=Jc.createController(m,w);await ze(e,b,I,r,n);const D=n.onChanged(()=>{ze(e,b,I,r,n).catch(e=>{ed.error(
"Failed to save controller state: ",e)})});try{await Jc.startAndWaitUntilFinished(n)}finally{D(),await ze(e,b,I,r,n)}
return ed.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),ed.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),vl.OK}catch(e){return ed.error("Error: ",e),
vl.MATRIX_RESOURCE_FAILED}}(e,t):vl.UNBUILD_FEATURE;default:return vl.UNKNOWN_RESOURCE_TYPE}}function Ye(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,ad)}
function Qe(e){return d(e,p)}function Ze(e){return d(e,Qe)}function et(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,cd)}function tt(e){return Z(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,_d);var t,r,n,i}function rt(e){return Z(e)&&J(null==e?void 0:e.name
)&&z(null==e?void 0:e.file)&&(v(null==e?void 0:e.content)||z(null==e?void 0:e.content))&&f(null==e?void 0:e.target)&&f(
null==e?void 0:e.output)&&f(null==e?void 0:e.default)&&I(e,fd)}function nt(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,Sd)}function it(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.git)&&f(null==e?void 0:e.url)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.message)&&f(
null==e?void 0:e.cwd)&&I(e,Nd)}function ot(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.assert)&&z(
null==e?void 0:e.equals)&&I(e,wd)}function st(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.concat)&&I(e,
bd)}async function at(e,t){t=t.id,Od.info(`Pool ID: ${t}`);const r=new Zc(e,Rl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,
Rl.FI_NOR_PIPELINE_STATE,"",[t]);return t=await r.getAll(),Od.debug("runList = ",t),0!==t.length?(Od.debug(
"Detected work available."),vl.OK):(Od.debug("No work available."),vl.NO_WORK_AVAILABLE)}async function lt(r,e){
return 0===e.length?(Od.debug("checkIfAnyPoolHasWork: Detected no pools available."),vl.NO_WORK_AVAILABLE
):1===e.length?(Od.debug("checkIfAnyPoolHasWork: Detected single pool available. Checking it."),at(r,e[0])):(Od.debug(
`checkIfAnyPoolHasWork: Detected ${e.length} pools available.`),ns(e,async(e,t)=>(e=await e,Od.debug(
`checkIfAnyPoolHasWork: Result: ${e}`),e===vl.OK?vl.OK:(Od.debug(`checkIfAnyPoolHasWork: Checking pool ${t.id}`),at(r,t)
)),Promise.resolve(vl.NO_WORK_AVAILABLE)))}var ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,mt,Nt,yt,wt,Rt,Ct,bt,It,Dt,Ot,Lt,
Pt,Ut,$t,Ft,kt,Mt,Gt,jt,Ht,Bt,xt,Jt,Wt,Vt,Kt,qt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,
Tr,Sr,Ar,mr,Nr,yr,wr,Rr,Cr,br,Ir,Dr,Or,Lr,Pr,Ur,$r,Fr,kr,Mr,Gr,jr,Hr,Br,xr,Jr,Wr,Vr,Kr,qr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,
sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An,mn,Nn,yn,wn,Rn,Cn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,kn,Mn,Gn,jn,Hn,Bn,xn,Jn,Wn,
Vn,Kn,qn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,mi,Ni,yi,wi,Ri,Ci,bi,Ii,Di,Oi,
Li,Pi,Ui,$i,Fi,ki,Mi,Gi,ji,Hi,Bi,xi,Ji,Wi,Vi,Ki,qi,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,
To,So,Ao,mo,No,yo,wo,Ro,Co,bo,Io,Do,Oo,Lo,Po,Uo,$o,Fo,ko,Mo,Go,jo,Ho,Bo,xo,Jo,Wo,Vo,Ko,qo,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,
os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,As,ms,Ns,ys,ws,Rs,Cs,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,ks,Ms,Gs,js,Hs,Bs,xs,Js,
Ws,Vs,Ks,qs,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,ma,Na,ya,wa,Ra,Ca,ba,Ia,Da,
Oa,La,Pa,Ua,$a,Fa,ka,Ma,Ga,ja,Ha,Ba,xa,Ja,Wa,Va,Ka,qa,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,
fl,gl,Tl,Sl,Al,ml,Nl,yl,wl,Rl,Cl,bl,Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,kl,Ml,Gl,jl,Hl,Bl,xl,Jl,Wl,Vl,Kl,ql,zl,Xl,Yl,Ql,Zl,eu,tu,ru,
nu,iu,ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu,pu,fu,gu,Tu,Su,Au,mu,Nu,yu,wu,Ru,Cu=require("fs"),bu=require("querystring"),
Iu=require("url"),Du=require("path"),Ou=require("child_process"),Lu=require("crypto"),Pu=e(Cu),Uu=t(bu),$u=e(Iu),Fu=e(Du
),ku=e(Lu),
Mu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Gu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ju=function(){
this.__data__=[],this.size=0},Hu=function(e,t){return e===t||e!=e&&t!=t},Bu=Hu,xu=function(e,t){for(var r=e.length;r--;
)if(Bu(e[r][0],t))return r;return-1},Ju=xu,Wu=Array.prototype,Vu=Wu.splice,Ku=xu,qu=xu,zu=xu,Xu=ju,Yu=function(e){
var t=this.__data__;return!((e=Ju(t,e))<0||(e==t.length-1?t.pop():Vu.call(t,e,1),--this.size,0))},Qu=function(e){
var t=this.__data__;return(e=Ku(t,e))<0?void 0:t[e][1]},Zu=function(e){return-1<qu(this.__data__,e)},ec=function(e,t){
var r=this.__data__,n=zu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Xu,
r.prototype.delete=Yu,r.prototype.get=Qu,r.prototype.has=Zu,r.prototype.set=ec,ft=Yl=r,Ql=function(){
this.__data__=new ft,this.size=0},ra=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
zl=function(e){return this.__data__.get(e)},Xl=function(e){return this.__data__.has(e)},
ru=Zl="object"==typeof Mu&&Mu&&Mu.Object===Object&&Mu,iu="object"==typeof self&&self&&self.Object===Object&&self,Dr=nu=(
cs=ru||iu||Function("return this")()).Symbol,Qs=Object.prototype,gt=Qs.hasOwnProperty,Tt=Qs.toString,
St=Dr?Dr.toStringTag:void 0,Or=Object.prototype,At=Or.toString,mt=function(e){var t,r,n=gt.call(e,St),i=e[St];try{t=!(
e[St]=void 0)}catch(e){}return r=Tt.call(e),t&&(n?e[St]=i:delete e[St]),r},Nt=function(e){return At.call(e)},yt=(ta=nu
)?ta.toStringTag:void 0,Rt=ou=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
yt&&yt in Object(e)?mt:Nt)(e)},Ct=wt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
bt=function(e){return!!Ct(e)&&("[object Function]"==(e=Rt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Lr=cs["__core-js_shared__"],
ql=/[^.]+$/.exec((ir=Lr)&&ir.keys&&ir.keys.IE_PROTO||""),It=ql?"Symbol(src)_1."+ql:"",or=Function.prototype,
Dt=or.toString,Ot=bt,Lt=function(e){return!!It&&It in e},Pt=wt,Ut=rn=function(e){if(null!=e){try{return Dt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Pr=/[\\^$.*+?()[\]{}|]/g,$t=/^\[object .+?Constructor\]$/,
na=Function.prototype,bu=Object.prototype,Iu=na.toString,Du=bu.hasOwnProperty,Ft=RegExp("^"+Iu.call(Du).replace(Pr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=function(e){return!(!Pt(e
)||Lt(e))&&(Ot(e)?Ft:$t).test(Ut(e))},Mt=function(e,t){return null==e?void 0:e[t]},Wu=(Lu=function(e,t){return t=Mt(e,t)
,kt(t)?t:void 0})(cs,"Map"),xu=Lu(Object,"create"),jt=Gt=ju=xu,Nu=Object.prototype,Ht=Nu.hasOwnProperty,Bt=ju,
yu=Object.prototype,xt=yu.hasOwnProperty,Jt=ju,wu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Ru=function(e){var t,r=this.__data__;return jt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Ht.call(r,e)?r[e]:void 0},Xu=function(e){var t=this.__data__;return Bt?void 0!==t[e]:xt.call(t,e)},
Yu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Jt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Gt?Gt(null):{},this.size=0},i.prototype.delete=wu,i.prototype.get=Ru,
i.prototype.has=Xu,i.prototype.set=Yu,Wt=i,Vt=Yl,Kt=Wu,Qu=function(){this.size=0,this.__data__={hash:new Wt,map:new(
Kt||Vt),string:new Wt}},qt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Qt=Yt=Xt=zt=function(e,t){
return e=e.__data__,qt(t)?e["string"==typeof t?"string":"hash"]:e.map},Zu=function(e){return e=zt(this,e).delete(e),
this.size-=e?1:0,e},ec=function(e){return Xt(this,e).get(e)},Mu=function(e){return Yt(this,e).has(e)},Zl=function(e,t){
var r=Qt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Qu,o.prototype.delete=Zu,
o.prototype.get=ec,o.prototype.has=Mu,o.prototype.set=Zl,er=Wu,tr=iu=o,rr=Zt=Yl,ls=ra,Qs=zl,Dr=Xl,Or=function(e,t){var r
,n=this.__data__;if(n instanceof Zt){if(r=n.__data__,!er||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new tr(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Ql,s.prototype.delete=ls,
s.prototype.get=Qs,s.prototype.has=Dr,s.prototype.set=Or,ta=s,nr=iu,Lr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Lr,sr=ir=a,ar=ql=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},lr=or=function(e,t){return e.has(t)},na=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new sr:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!ar(t,function(e,t){if(!lr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},bu=cs.Uint8Array,ur=bu,cr=Hu,dr=na,hr=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},_r=Iu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Pr=(Du=nu)?Du.prototype:void 0,Er=Pr?Pr.valueOf:void 0,xu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new ur(e),new ur(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return cr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=hr;case"[object Set]":return l=l||_r,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=dr(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(Er)return Er.call(e)==Er.call(t)}return!1},Nu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},yu=Array.isArray,pr=Nu,fr=vr=yu,ju=function(e,t,r){
return t=t(e),fr(e)?t:pr(t,r(e))},gr=wu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Ru=Object.prototype,Tr=Ru.propertyIsEnumerable,Xu=(Sr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),gr(Sr(t),function(e){return Tr.call(t,e)}))}:function(){return[]},Yu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Ar=ou,Qu=function(e){return mr(e)&&"[object Arguments]"==Ar(e)},
Nr=mr=Zu=function(e){return null!=e&&"object"==typeof e},ec=Object.prototype,yr=ec.hasOwnProperty,
wr=ec.propertyIsEnumerable,Mu=Qu(function(){return arguments}())?Qu:function(e){return Nr(e)&&yr.call(e,"callee"
)&&!wr.call(e,"callee")},Zl=cs,Yl=function(){return!1},Zl=(Zl=(Ql=(Xl=(Ql=(Xl=(zl=ra={exports:{}}).exports
)&&!Xl.nodeType&&Xl)&&zl&&!zl.nodeType&&zl)&&Xl.exports===Ql)?Zl.Buffer:void 0)?Zl.isBuffer:void 0,zl.exports=Yl=Zl||Yl,
Rr=/^(?:0|[1-9]\d*)$/,ls=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Rr.test(e))&&-1<e&&e%1==0&&e<t},Cr=ou,br=Qs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ir=Zu,Dr="[object Arguments]",Or="[object Array]",
Lr="[object Boolean]",bu="[object Date]",Du="[object Error]",Pr="[object Function]",yu="[object Map]",
ec="[object Object]",Qu="[object RegExp]",Xl="[object Set]",Ql="[object String]",Zl="[object WeakMap]",
zl="[object ArrayBuffer]",Yl="[object DataView]",(Ur={}
)["[object Float32Array]"]=Ur["[object Float64Array]"]=Ur["[object Int8Array]"]=Ur["[object Int16Array]"]=Ur["[object Int32Array]"]=Ur["[object Uint8Array]"]=Ur["[object Uint8ClampedArray]"]=Ur["[object Uint16Array]"]=Ur["[object Uint32Array]"]=!0
,
Ur[Dr]=Ur[Or]=Ur[zl]=Ur[Lr]=Ur[Yl]=Ur[bu]=Ur[Du]=Ur[Pr]=Ur[yu]=Ur["[object Number]"]=Ur[ec]=Ur[Qu]=Ur[Xl]=Ur[Ql]=Ur[Zl]=!1
,Ru=function(e){return Ir(e)&&br(e.length)&&!!Ur[Cr(e)]},ec=function(t){return function(e){return t(e)}},Qu=ru,Zl=(Zl=(
Ql=Xl={exports:{}}).exports)&&!Zl.nodeType&&Zl,Zl=(eu=Zl&&Ql&&!Ql.nodeType&&Ql)&&eu.exports===Zl,tu=Zl&&Qu.process,
Qu=function(){try{return eu&&eu.require&&eu.require("util").types||tu&&tu.binding&&tu.binding("util")}catch(e){}}(),
Ql.exports=Qu,ru=Ru,Qu=(Ql=(Zl=Xl.exports)&&Zl.isTypedArray)?ec(Ql):ru,$r=Yu,Fr=Mu,kr=vr,Mr=ra.exports,Gr=ls,jr=Ru=Qu,
Zl=Object.prototype,Hr=Zl.hasOwnProperty,Ql=function(e,t){var r,n=kr(e),i=!n&&Fr(e),o=!n&&!i&&Mr(e),s=!n&&!i&&!o&&jr(e),
a=n||i||o||s,l=a?$r(e.length,String):[],u=l.length;for(r in e)!t&&!Hr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Gr(r,u))||l.push(r);return l},
Br=Object.prototype,ru=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Br)},
Au=Object.keys,mu=Object,xr=ru,Jr=function(e){return Au(mu(e))},Qu=Object.prototype,Wr=Qu.hasOwnProperty,Vr=bt,Kr=Qs,
qr=Ql,zr=function(e){var t,r;if(!xr(e))return Jr(e);for(r in t=[],Object(e))Wr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Xr=Zl=function(e){return null!=e&&Kr(e.length)&&!Vr(e)},Yr=ju,Qr=Xu,Zr=ru=function(e){return(Xr(e)?qr:zr)(e)}
,en=function(e){return Yr(e,Zr,Qr)},Yu=Object.prototype,tn=Yu.hasOwnProperty,Qu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=en(e),T=g.length;if(T!=en(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:tn.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Ql=Lu(cs,
"DataView"),ju=Wu,Xu=Lu(cs,"Promise"),Wu=Yu=Lu(cs,"Set"),cs=Lu(cs,"WeakMap"),nn=ou,sn="[object Map]",
an="[object Promise]",ln="[object Set]",un="[object WeakMap]",cn="[object DataView]",dn=(on=rn)(rn=Ql),hn=on(ju),_n=on(
Xu),En=on(Wu),vn=on(cs),Ql=nn,(rn&&Ql(new rn(new ArrayBuffer(1)))!=cn||ju&&Ql(new ju)!=sn||Xu&&Ql(Xu.resolve()
)!=an||Wu&&Ql(new Wu)!=ln||cs&&Ql(new cs)!=un)&&(Ql=function(e){var t=nn(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?on(e):"")switch(e){case dn:return cn;case hn:return sn;case _n:return an
;case En:return ln;case vn:return un}return t}),pn=ta,fn=na,gn=xu,Tn=Qu,Sn=Ql,An=vr,mn=ra.exports,Nn=Ru,
yn="[object Arguments]",wn="[object Array]",Rn="[object Object]",Wu=Object.prototype,Cn=Wu.hasOwnProperty,bn=function(e,
t,r,n,i,o){var s,a,l=An(e),u=An(t),c=l?wn:Sn(e),d=u?wn:Sn(t),h=(c=c==yn?Rn:c)==Rn,u=(d=d==yn?Rn:d)==Rn;if((d=c==d)&&mn(e
)){if(!mn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new pn,l||Nn(e)?fn(e,t,r,n,i,o):gn(e,t,c,r,n,i,o)):1&r||(
s=h&&Cn.call(e,"__wrapped__"),a=u&&Cn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new pn,Tn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new pn)},Dn=ta,On=cs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!In(t)&&!In(r
)?t!=t&&r!=r:bn(t,r,n,i,e,o))},Ln=wt,Pn=na=function(e){return e==e&&!Ln(e)},Un=ru,$n=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Dn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?On(a,s,3,n,l):u))return!1;return!0},Fn=function(e){for(var t,r,n=Un(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Pn(r)];return n},kn=xu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Qu=function(t){var r=Fn(t);return 1==r.length&&r[0][2]?kn(r[0][0],r[0][1]):function(e){return e===t||$n(e,t,r)}},Mn=ou,
Gn=In=Zu,jn=vr,Hn=Ql=function(e){return"symbol"==typeof e||Gn(e)&&"[object Symbol]"==Mn(e)},
Bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xn=/^\w*$/,ra=function(e,t){if(jn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Hn(e))||xn.test(e)||!Bn.test(e)||null!=t&&e in Object(t)},
Jn=iu,Wn="Expected a function",l.Cache=Jn,
Vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kn=/\\(\\)?/g,Xu=0
,Su=(Xu=l(Xu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Vn,function(e,t,r,n){i.push(
r?n.replace(Kn,"$1"):t||e)}),i},function(e){return 500===Su.size&&Su.clear(),e})).cache,qn=Gu,ta=(Wu=nu
)?Wu.prototype:void 0,Yn=ta?ta.toString:void 0,Qn=iu=function e(t){if("string"==typeof t)return t;if(zn(t))return qn(t,e
)+"";if(Xn(t))return Yn?Yn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ti=Xu,ri=Wu=function(e){
return null==e?"":Qn(e)},ni=Xn=Ql,li=ii=ta=function(e,t){return Zn(e)?e:ei(e,t)?[e]:ti(ri(e))},ui=Mu,hi=Qs,Ei=function(e
,t){return null!=e&&t in Object(e)},vi=Ru=function(e,t,r){for(var n,i,o=(t=li(t,e)).length,s=!(n=-1);++n<o&&(i=_i(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&hi(o)&&di(i,o)&&(ci(e)||ui(e))},pi=cs,
fi=ai=function(e,t,r){return void 0===(t=null==e?void 0:si(e,t))?r:t},gi=function(e,t){return null!=e&&vi(e,t,Ei)},Si=na
,Ai=xu,Ni=si=Qs=function(e,t){for(var r=0,n=(t=ii(t,e)).length;null!=e&&r<n;)e=e[oi(t[r++])];return r&&r==n?e:void 0},
yi=function(t){return function(e){return null==e?void 0:e[t]}},wi=function(t){return function(e){return Ni(e,t)}},
Ri=Ti=ei=ra,Ci=mi=_i=oi=cs=function(e){if("string"==typeof e||ni(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
bi=Qu,Ii=function(r,n){return Ti(r)&&Si(n)?Ai(mi(r),n):function(e){var t=fi(e,r);return void 0===t&&t===n?gi(e,r):pi(n,t
,3)}},Di=na=function(e){return e},Oi=ci=Zn=zn=vr,Li=function(e){return Ri(e)?yi(Ci(e)):wi(e)},Pi=ra=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Ui=ru,Mi=Gu,ji=ra=function(e,n){
var i=-1,o=ki(e)?Array(e.length):[];return Fi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Bi=function(e,t){return(Hi(e)?Mi:ji
)(e,Gi(t))},Ji=Hu,Wi=ki=$i=Zl,Vi=di=ls,Ki=wt,qi=ql,Xi=function(e,n){var i;return xi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Zi=function(e,t,r){var n=Yi(e)?qi:Xi;return r&&Qi(e,t,r)&&(t=void 0),n(e,zi(t))},eo=xi=Fi=ql=Qu=function(e,t){
if(null==e)return e;if(!$i(e))return e&&Pi(e,t,Ui);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},to=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},ro=function(e,n){
var i=!0;return eo(e,function(e,t,r){return i=!!n(e,t,r)}),i},no=zi=Gi=xu=function(e){
return"function"==typeof e?e:null==e?Di:"object"==typeof e?Oi(e)?Ii(e[0],e[1]):bi(e):Li(e)},io=Yi=Hi=vr,
oo=Qi=Qu=function(e,t,r){if(!Ki(r))return!1;var n=typeof t;return!!("number"==n?Wi(r)&&Vi(t,r.length
):"string"==n&&t in r)&&Ji(r[t],e)},so=function(e,t,r){var n=io(e)?to:ro;return r&&oo(e,t,r)&&(t=void 0),n(e,no(t))},
ao=Lu,Lu=function(){try{var e=ao(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),lo=Lu,uo=function(e,t,r){
"__proto__"==t&&lo?lo(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},co=Hu,Hu=Object.prototype,
ho=Hu.hasOwnProperty,_o=function(e,t,r){var n=e[t];ho.call(e,t)&&co(n,r)&&(void 0!==r||t in e)||uo(e,t,r)},Eo=ta,vo=ls,
fo=cs,go=function(e,t,r,n){var i,o,s,a,l,u,c;if(!po(e))return e;for(i=-1,s=(o=(t=Eo(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=fo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=po(c)?c:vo(t[i+1])?[]:{})),_o(a,l,u),a=a[l]}return e},To=function(e,t,r){return null==e?e:go(e,t,r)},So=Mu
,mo=(Hu=nu)?Hu.isConcatSpreadable:void 0,yo=function(e){return Ao(e)||So(e)||!!(mo&&e&&e[mo])},wo=No=Nu,
Ro=ta=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||yo,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):No(o,s
):i||(o[o.length]=s);return o},Co=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
bo=Ao=vr,Io=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return wo(bo(t)?Co(t):[t],Ro(e,1))},Do=xu,Oo=Zl,Lo=ru,ls=function(o){return function(e,t,r){var n,
i=Object(e);return Oo(e)||(n=Do(t),e=Lo(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
cs=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Po=/\s/,Uo=function(
e){for(var t=e.length;t--&&Po.test(e.charAt(t)););return t},$o=/^\s+/,Fo=Mu=function(e){return e&&e.slice(0,Uo(e)+1
).replace($o,"")},ko=po=wt,Mo=Ql,Go=/^[-+]0x[0-9a-f]+$/i,jo=/^0b[01]+$/i,Ho=/^0o[0-7]+$/i,Bo=parseInt,xo=function(e){
var t;return"number"==typeof e?e:Mo(e)?NaN:(ko(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=ko(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Fo(e),(t=jo.test(e))||Ho.test(e)?Bo(e.slice(2),t?2:8):Go.test(e)?NaN:+e))},
Jo=17976931348623157e292,Wo=function(e){return e?(e=xo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Jo:0===e?e:0},Vo=cs,Ko=xu
,qo=nu=function(e){var t=Wo(e),e=t%1;return t==t?e?t-e:t:0},zo=Math.max,Hu=ls(Xo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:qo(r))<0&&(r=zo(n+r,0)),Vo(e,Ko(t),r)):-1}),Yo=Hu,Qo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Zo=ql,es=xu,ts=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},rs=vr,ns=function(e,t,r){var n=rs(e)?Qo:ts,i=arguments.length<3
;return n(e,es(t),r,i,Zo)},Nu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},is=cs,os=function(e){return e!=e},ss=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},as=Zl=function(e,t,r){return t==t?ss(e,t,r):is(e,os,r)},
ls=function(e,t){return!(null==e||!e.length)&&-1<as(e,t,0)},Hu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},cs=function(){},cs=(us=Yu)&&1/Iu(new us([,-0]))[1]==1/0?function(e){return new us(e)
}:cs,ds=ir,hs=ls,_s=Hu,Es=or,vs=cs,ps=Iu,fs=function(e,t,r){var n,i,o,s,a=-1,l=hs,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=_s;else if(200<=u){if(n=t?null:vs(e))return ps(n);c=!1,l=Es,h=new ds}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},gs=function(e){return e&&e.length?fs(e):[]},Ts=Ql,Ss=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=Ts(e),s=void 0!==t,a=null===t,l=t==t,u=Ts(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},As=Gu,ms=Qs,Ns=xu,ys=ra,ws=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Rs=ec,Cs=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=Ss(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},bs=na,Is=vr,Ql=function(e,n,r){var i;return n=n.length?As(n
,function(t){return Is(t)?function(e){return ms(e,1===t.length?t[0]:t)}:t}):[bs],i=-1,n=As(n,Rs(Ns)),e=ys(e,function(t,e
,r){return{criteria:As(n,function(e){return e(t)}),index:++i,value:t}}),ws(e,function(e,t){return Cs(e,t,r)})},
Ds=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Os=Math.max,Qs=function(o,s,a){return s=Os(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Os(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ds(o,this,e)}},Ls=function(e){return function(){return e}},Ps=Lu,
Us=Date.now,fu=Ps?function(e,t){return Ps(e,"toString",{configurable:!0,enumerable:!1,value:Ls(t),writable:!0})}:na,
$s=ta,Fs=Ql,ks=Qu,(ra=function(){var e=Us(),t=16-e+ +Tu;if(Tu=e,0<t){if(800<=++gu)return arguments[0]}else gu=0
;return fu.apply(void 0,arguments)})(Qs(Iu=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ks(e,t[0],t[1]
)?t=[]:2<r&&ks(t[0],t[1],t[2])&&(t=[t[0]]),Fs(e,$s(t,1),[])},void(Tu=gu=0),na),Iu+""),Gs=wu,js=function(e,n){var i=[]
;return Ms(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Hs=xu,xs=function(e,t){return(Bs(e)?Gs:js)(e,Hs(t))},Js=na,
Ws=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Vs=Ms=ql,Ks=function(e){
return"function"==typeof e?e:Js},qs=Bs=vr,zs=function(e,t){return(qs(e)?Ws:Vs)(e,Ks(t))},Xs=Nu,Lu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Xs(e,t,r)},Ys=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Qs=function(e){return Ys.test(e)}
,Zs=ou,ea=Zu,ra=function(e){return ea(e)&&"[object RegExp]"==Zs(e)},wu=(Ql=(ta=Xl.exports)&&ta.isRegExp)?ec(Ql):ra,
xu=function(e){return e.split("")},ql="["+(na="\\ud800-\\udfff")+"]",ec=(Nu="[\\ufe0e\\ufe0f]?")+(ec="(?:"+(
Xl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(ta="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
Ql="[^"+na+"]",ra="(?:\\ud83c[\\udde6-\\uddff]){2}",na="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+Nu+ec+")*",
ql="(?:"+[Ql+Xl+"?",Xl,ra,na,ql].join("|")+")",ia=RegExp(ta+"(?="+ta+")|"+ql+ec,"g"),oa=xu,aa=function(e){
return e.match(ia)||[]},ca=sa=Qs,da=Qu,ha=wu,va=function(e,t,r){return r&&"number"!=typeof r&&da(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=Ea(e))&&("string"==typeof t||null!=t&&!ha(t))&&!(t=la(t))&&ca(e)?ua(_a(e),0,r
):e.split(t,r):[]},fa=pa=Zl,ga=la=iu,Ta=Mu,Sa=ua=Lu,Aa=function(e,t){for(var r=e.length;r--&&-1<pa(t,e[r],0););return r}
,ma=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<fa(t,e[r],0););return r},Na=_a=function(e){return(sa(e)?aa:oa)(e)},
ya=Ea=Wu,wa=function(e,t,r){return(e=ya(e))&&(r||void 0===t)?Ta(e):e&&(t=ga(t))?(r=Na(e),e=Na(t),t=ma(r,e),e=Aa(r,e)+1,
Sa(r,t,e).join("")):e},Lu=Object.prototype,Ra=Lu.hasOwnProperty,Ca=function(e,t){return null!=e&&Ra.call(e,t)},ba=Ru,
Ia=function(e,t){return null!=e&&ba(e,t,Ca)},La="[object Boolean]",Pa=function(e){return!0===e||!1===e||Oa(e)&&Da(e)==La
},Ua=function(e){return null===e},Fa=vr,Ma="[object String]",Ga=function(e){return"string"==typeof e||!Fa(e)&&ka(e)&&$a(
e)==Ma},ja=$a=Da=ou,Ha=ka=Oa=Zu,Ba="[object Number]",xa=function(e){return"number"==typeof e||Ha(e)&&ja(e)==Ba},
Wa=function(e){return"number"==typeof e&&e==Ja(e)},Xa=function(e,t,r){return e=za(e),r=null==r?0:Va(qa(r),0,e.length),
t=Ka(t),e.slice(r,r+t.length)==t},Ya=Va=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Qa=Ka=iu,Za=qa=Ja=nu,el=za=Wu,tl=function(e,t,r){var n;return e=el(e),t=Qa(t),n=e.length,n=r=void 0===r?n:Ya(Za(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},rl=Gu,nl=function(t,e){return rl(e,function(e){return t[e]})},il=ru,ol=function(e
){return null==e?[]:nl(e,il(e))},ou=Array.prototype,sl=ou.join,al=function(e,t){return null==e?"":sl.call(e,t)},(
Zu=ll={})[Zu.DEBUG=0]="DEBUG",Zu[Zu.INFO=1]="INFO",Zu[Zu.WARN=2]="WARN",Zu[Zu.ERROR=3]="ERROR",Zu[Zu.NONE=4]="NONE",
ul=ll;const tc=null!==(iu=L("1.0.4"))&&void 0!==iu?iu:"?";Wu=null!==(nu=L(""))&&void 0!==nu?nu:"io.nor.fi",ru=null!==(
Gu=L(""))&&void 0!==Gu?Gu:"nor-pipeline-runner",Zu=null!==(ou=L(""))&&void 0!==ou?ou:"",nu=null!==(iu=L("")
)&&void 0!==iu?iu:"";const rc=null!==(Gu=L("production"))&&void 0!==Gu?Gu:"development",nc=null!==(ou=L(
"2021-09-10T04:42:56.041Z"))&&void 0!==ou?ou:"";Gu=null!==(iu=L(""))&&void 0!==iu?iu:"${",iu=null!==(ou=L("")
)&&void 0!==ou?ou:"}";const ic=null===(ou=D(""))||void 0===ou||ou,oc=null===(ou=D(""))||void 0===ou||ou,sc=null===(ou=D(
""))||void 0===ou||ou,ac=null===(ou=D(""))||void 0===ou||ou;ou="production"===rc;const lc="test"===rc,uc=!ou&&!lc
;Zu=null!==(ut=function(e){if(e){if(function(){switch(e){case ll.DEBUG:case ll.INFO:case ll.WARN:case ll.ERROR:
case ll.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ll.DEBUG
;case"INFO":return ll.INFO;case"WARN":case"WARNING":return ll.WARN;case"ERR":case"ERROR":return ll.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return ll.NONE;default:return}}}(null!==(ut=L(null===(ou=process
)||void 0===ou||null===(ut=ou.env)||void 0===ut?void 0:ut.PIPELINE_LOG_LEVEL))&&void 0!==ut?ut:L(Zu))
)&&void 0!==ut?ut:ul.INFO;const cc=null!==(ct=L(null===(ut=process)||void 0===ut||null===(ct=ut.env
)||void 0===ct?void 0:ct.PIPELINE_SERVER))&&void 0!==ct?ct:ru,dc=null!==(dt=function(e){if(void 0!==e)return`${e}`}(
null===(ru=process)||void 0===ru||null===(dt=ru.env)||void 0===dt?void 0:dt.PIPELINE_AUTHENTICATION))&&void 0!==dt?dt:nu
,hc=null!==(ht=L(null===(nu=process)||void 0===nu||null===(ht=nu.env)||void 0===ht?void 0:ht.PIPELINE_SERVER)
)&&void 0!==ht?ht:Wu,_c=null!==(_t=L(null===(Wu=process)||void 0===Wu||null===(_t=Wu.env
)||void 0===_t?void 0:_t.PIPELINE_VARIABLE_PREFIX))&&void 0!==_t?_t:Gu,Ec=null!==(Et=L(null===(Gu=process
)||void 0===Gu||null===(Et=Gu.env)||void 0===Et?void 0:Et.PIPELINE_VARIABLE_SUFFIX))&&void 0!==Et?Et:iu;class vc{
constructor(e,t){u(this,"_logger",void 0),u(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class pc{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case ll.DEBUG:return"DEBUG";case ll.INFO:return"INFO";case ll.WARN:return"WARN";case ll.ERROR:return"ERROR"
;case ll.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=ul.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=ul.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=ul.WARN&&this._logger.warn(...e)}static error(...e){this._level<=ul.ERROR&&this._logger.error(...e)}
static createLogger(e){return new vc(e,pc)}}u(pc,"Level",ul),u(pc,"_level",ul.DEBUG),u(pc,"_logger",console),(iu=cl={}
)[iu.HTTP=0]="HTTP",iu[iu.LOCAL=1]="LOCAL",iu[iu.MATRIX=2]="MATRIX",dl=cl,(iu=hl={})[iu.NONE=0]="NONE",
iu[iu.BASIC_AUTH=1]="BASIC_AUTH",iu[iu.BEARER_AUTH=2]="BEARER_AUTH",_l=hl;class fc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const gc=pc.createLogger("MatrixRunnerResource");class Tc{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return N(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===dl.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=wa(`${e}`)
).toLowerCase(),Xa(t,"http:")||Xa(t,"https:")?(t=new URL(e),t=null!==(t=fc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:fc.parseRunnerAuthentication(dc),{type:dl.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return N(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===dl.LOCAL&&p(null==t?void 0:t.path)?e:(e=wa(`${e}`),(e=Xa(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&Pu.default.existsSync(e)?{type:dl.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(N(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===dl.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=wa(
`${i}`),gc.debug(`value: '${i}'`);let e=i.toLowerCase();if(gc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),gc.debug(`lowerCaseValue: '${e}'`),Xa(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),gc.debug(`url: '${s}': `,s),o=null!==(o=fc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:fc.parseRunnerAuthentication(dc),gc.debug(
"auth: ",o);const e=`${s.host}`;gc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),gc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return gc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,gc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",gc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,gc.debug(`pool: '${s}'`),{type:dl.MATRIX,homeserver:e,pool:s,
authentication:o}}Xa(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Xa(e,"!")||Xa(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${hc}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||dc,r=r||hc,{type:dl.MATRIX,homeserver:r,pool:n,
authentication:fc.parseRunnerAuthentication(t)}}}(e)}}(iu=El={})[iu.OK=0]="OK",iu[iu.GENERAL_ERRORS=1]="GENERAL_ERRORS",
iu[iu.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",iu[iu.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
iu[iu.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",iu[iu.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
iu[iu.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",iu[iu.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
iu[iu.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",iu[iu.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
iu[iu.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",iu[iu.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
iu[iu.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",iu[iu.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
iu[iu.FATAL_ERROR=14]="FATAL_ERROR",iu[iu.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
iu[iu.WORK_CANCELLED=16]="WORK_CANCELLED",iu[iu.CONFLICT=17]="CONFLICT",iu[iu.NO_WORK_AVAILABLE=18]="NO_WORK_AVAILABLE",
iu[iu.USAGE=64]="USAGE",iu[iu.DATAERR=65]="DATAERR",iu[iu.NOINPUT=66]="NOINPUT",iu[iu.NOUSER=67]="NOUSER",
iu[iu.NOHOST=68]="NOHOST",iu[iu.UNAVAILABLE=69]="UNAVAILABLE",iu[iu.SOFTWARE=70]="SOFTWARE",iu[iu.OSERR=71]="OSERR",
iu[iu.OSFILE=72]="OSFILE",iu[iu.CANTCREAT=73]="CANTCREAT",iu[iu.IOERR=74]="IOERR",iu[iu.TEMPFAIL=75]="TEMPFAIL",
iu[iu.PROTOCOL=76]="PROTOCOL",iu[iu.NOPERM=77]="NOPERM",iu[iu.CONFIG=78]="CONFIG",
iu[iu.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
iu[iu.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",iu[iu.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
iu[iu.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
iu[iu.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
iu[iu.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",vl=El,(iu=pl={})[iu.OPTIONS=0]="OPTIONS",
iu[iu.GET=1]="GET",iu[iu.POST=2]="POST",iu[iu.PUT=3]="PUT",iu[iu.DELETE=4]="DELETE",iu[iu.PATCH=5]="PATCH",su=pl
;const Sc="WINDOW"===(au=null!==(au=null!==(vt=null===(iu=process)||void 0===iu||null===(vt=iu.env
)||void 0===vt?void 0:vt.NOR_REQUEST_CLIENT_MODE)&&void 0!==vt?vt:null===(au=process)||void 0===au||null===(pt=au.env
)||void 0===pt?void 0:pt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==au?au:"")||!("undefined"==typeof window||!window.fetch
),Ac="NODE"===au||!Sc;class mc{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await mc.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await mc.getRequestDataAsString(e)))return Uu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await mc.getRequestDataAsString(e)))return JSON.parse(e)}}(au=fl={}
)[au.Continue=100]="Continue",au[au.SwitchingProtocols=101]="SwitchingProtocols",au[au.Processing=102]="Processing",
au[au.CheckPoint=103]="CheckPoint",au[au.OK=200]="OK",au[au.Created=201]="Created",au[au.Accepted=202]="Accepted",
au[au.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",au[au.NoContent=204]="NoContent",
au[au.ResetContent=205]="ResetContent",au[au.PartialContent=206]="PartialContent",au[au.MultiStatus=207]="MultiStatus",
au[au.AlreadyReported=208]="AlreadyReported",au[au.IMUsed=226]="IMUsed",au[au.MultipleChoices=300]="MultipleChoices",
au[au.MovedPermanently=301]="MovedPermanently",au[au.Found=302]="Found",au[au.SeeOther=303]="SeeOther",
au[au.NotModified=304]="NotModified",au[au.TemporaryRedirect=307]="TemporaryRedirect",
au[au.PermanentRedirect=308]="PermanentRedirect",au[au.BadRequest=400]="BadRequest",
au[au.Unauthorized=401]="Unauthorized",au[au.PaymentRequired=402]="PaymentRequired",au[au.Forbidden=403]="Forbidden",
au[au.NotFound=404]="NotFound",au[au.MethodNotAllowed=405]="MethodNotAllowed",au[au.NotAcceptable=406]="NotAcceptable",
au[au.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",au[au.RequestTimeout=408]="RequestTimeout",
au[au.Conflict=409]="Conflict",au[au.Gone=410]="Gone",au[au.LengthRequired=411]="LengthRequired",
au[au.PreconditionFailed=412]="PreconditionFailed",au[au.PayloadTooLarge=413]="PayloadTooLarge",
au[au.URITooLong=414]="URITooLong",au[au.UnsupportedMediaType=415]="UnsupportedMediaType",
au[au.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",au[au.ExpectationFailed=417]="ExpectationFailed",
au[au.IAmATeapot=418]="IAmATeapot",au[au.UnprocessableEntity=422]="UnprocessableEntity",au[au.Locked=423]="Locked",
au[au.FailedDependency=424]="FailedDependency",au[au.TooEarly=425]="TooEarly",
au[au.UpgradeRequired=426]="UpgradeRequired",au[au.PreconditionRequired=428]="PreconditionRequired",
au[au.TooManyRequests=429]="TooManyRequests",au[au.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
au[au.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",au[au.InternalError=500]="InternalError",
au[au.InternalServerError=500]="InternalServerError",au[au.NotImplemented=501]="NotImplemented",
au[au.BadGateway=502]="BadGateway",au[au.ServiceUnavailable=503]="ServiceUnavailable",
au[au.GatewayTimeout=504]="GatewayTimeout",au[au.HttpVersionNotSupported=505]="HttpVersionNotSupported",
au[au.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",au[au.InsufficientStorage=507]="InsufficientStorage",
au[au.LoopDetected=508]="LoopDetected",au[au.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
au[au.NotExtended=510]="NotExtended",au[au.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",gl=fl,(
pu=pu||{}).ERROR="error",Tl=pu;class Nc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case fl.Continue:return"Continue";case fl.SwitchingProtocols:return"Switching Protocols"
;case fl.Processing:return"Processing";case fl.CheckPoint:return"Check Point";case fl.OK:return"OK";case fl.Created:
return"Created";case fl.Accepted:return"Accepted";case fl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case fl.NoContent:return"No Content";case fl.ResetContent:return"Reset Content"
;case fl.PartialContent:return"Partial Content";case fl.MultiStatus:return"Multi Status";case fl.AlreadyReported:
return"Already Reported";case fl.IMUsed:return"IM Used";case fl.MultipleChoices:return"Multiple Choices"
;case fl.MovedPermanently:return"Moved Permanently";case fl.Found:return"Found";case fl.SeeOther:return"See Other"
;case fl.NotModified:return"Not Modified";case fl.TemporaryRedirect:return"Temporary Redirect"
;case fl.PermanentRedirect:return"Permanent Redirect";case fl.BadRequest:return"Bad Request";case fl.Unauthorized:
return"Unauthorized";case fl.PaymentRequired:return"Payment Required";case fl.Forbidden:return"Forbidden"
;case fl.NotFound:return"Not Found";case fl.MethodNotAllowed:return"Method Not Allowed";case fl.NotAcceptable:
return"Not Acceptable";case fl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case fl.RequestTimeout:
return"Request Timeout";case fl.Conflict:return"Conflict";case fl.Gone:return"Gone";case fl.LengthRequired:
return"Length Required";case fl.PreconditionFailed:return"Precondition Failed";case fl.PayloadTooLarge:
return"Payload Too Large";case fl.URITooLong:return"URI Too Long";case fl.UnsupportedMediaType:
return"Unsupported Media Type";case fl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case fl.ExpectationFailed:return"Expectation Failed";case fl.IAmATeapot:return"I Am a Teapot"
;case fl.UnprocessableEntity:return"Unprocessable Entity";case fl.Locked:return"Locked";case fl.FailedDependency:
return"Failed Dependency";case fl.TooEarly:return"Too Early";case fl.UpgradeRequired:return"Upgrade Required"
;case fl.PreconditionRequired:return"Precondition Required";case fl.TooManyRequests:return"Too Many Requests"
;case fl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case fl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case fl.InternalServerError:return"Internal Server Error";case fl.NotImplemented:
return"Not Implemented";case fl.BadGateway:return"Bad Gateway";case fl.ServiceUnavailable:return"Service Unavailable"
;case fl.GatewayTimeout:return"Gateway Timeout";case fl.HttpVersionNotSupported:return"Http Version Not Supported"
;case fl.VariantAlsoNegotiates:return"Variant Also Negotiates";case fl.InsufficientStorage:return"Insufficient Storage"
;case fl.LoopDetected:return"Loop Detected";case fl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case fl.NotExtended:return"Not Extended";case fl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),u(this,"status",void 0),u(this,"method",void 0),u(this,"url",
void 0),u(this,"body",void 0),u(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Tl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const yc=Ac?require("fs").promises:void 0,wc=pc.createLogger(
"NodeRequestClient");class Rc{constructor(e,t){u(this,"_http",void 0),u(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case su.GET:return this._getJson(t,r,n);case su.POST:return this._postJson(t,r,n)
;case su.PATCH:return this._patchJson(t,r,n);case su.PUT:return this._putJson(t,r,n);case su.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await yc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void wc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void wc.debug(
"_checkSocketFile: ENOENT: ",e);throw wc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Fu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new $u.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?wc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(wc.warn(
"Warning! Request had already ended when the response was received."),wc.debug("Error from event: ",e)):(wc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(wc.warn(
"Warning! Request had already ended when the response was received."),wc.debug("Exception: ",e)):(wc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await mc.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(su.GET,e,n,r).then(Rc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(su.PUT,e,n,r).then(Rc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(su.POST,e,n,r).then(
Rc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(su.PATCH,e,n,r).then(Rc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(su.DELETE,e,n,r).then(Rc._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw wc.error(`Unsuccessful response with status ${t}: `,e),new Nc(t,`Error ${t} for ${x(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Cc{constructor(e){u(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case su.GET:return this._getJson(t,r,n);case su.POST:return this._postJson(t,r,n)
;case su.PUT:return this._putJson(t,r,n);case su.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Cc._successResponse(e,su.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Cc._successResponse(e,su.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Cc._successResponse(e,su.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Cc._successResponse(e,su.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(
e=>{throw new Nc(r,i,t,n,e)})}return e.json()}}const bc=Ac?require("http"):void 0,Ic=Ac?require("https"):void 0,
Dc=pc.createLogger("RequestClient");class Oc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(su.GET,e,t)}static postJson(e,t,r){return Dc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(su.POST,e,r,t)}static patchJson(e,t,r){return Dc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(su.PATCH,e,r,t)}static putJson(e,t,r){return Dc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(su.PUT,e,r,t)}static deleteJson(e,t,r){return Dc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(su.DELETE,e,t,r)}static _initClient(){if(Sc)return Dc.debug("Detected browser environment"),
new Cc(window.fetch.bind(window));if(Ac)return new Rc(bc,Ic);throw new TypeError(
"Could not detect request client implementation")}}u(Oc,"_client",Oc._initClient()),(pu=lu=lu||{}).JSON="json",
pu.STRING="string",pu.BOOLEAN="boolean",pu.NUMBER="number",pu.INTEGER="integer",vu=lu,pu=["name","parameters",
"variables"];class Lc{static registerController(e){this._stepControllers.push(e)}static findController(t){return Yo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return ns(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}u(Lc,"_stepControllers",[]);const Pc=Io(pu,["name","steps"]),Uc=Io(pu
,["name","jobs"]),$c=Io(pu,["name","stages"]);class Fc{getName(){return this._name}constructor(e){u(this,"_name",void 0)
,u(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Ia(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],zs(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=xs(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
lu=uu=uu||{})[lu.CONSTRUCTED=0]="CONSTRUCTED",lu[lu.STARTED=1]="STARTED",lu[lu.PAUSED=2]="PAUSED",
lu[lu.CANCELLED=3]="CANCELLED",lu[lu.FINISHED=4]="FINISHED",lu[lu.FAILED=5]="FAILED",Sl=uu,(uu=cu=cu||{}
).PIPELINE="fi.nor.pipeline",uu.JOB="fi.nor.pipeline.job",uu.STAGE="fi.nor.pipeline.stage",
uu.TASK="fi.nor.pipeline.task",uu.STEP="fi.nor.pipeline.step",uu.FILE="fi.nor.pipeline.step.file",
uu.SCRIPT="fi.nor.pipeline.step.script",uu.VARIABLE="fi.nor.pipeline.step.variable",uu.JSON="fi.nor.pipeline.step.json",
uu.CSV="fi.nor.pipeline.step.csv",uu.GIT="fi.nor.pipeline.step.git",Al=cu;const kc=pc.createLogger("JobController");(
cu=ml={}).JOB_CHANGED="JobController:jobChanged",cu.JOB_STARTED="JobController:jobStarted",
cu.JOB_PAUSED="JobController:jobPaused",cu.JOB_RESUMED="JobController:jobResumed",
cu.JOB_CANCELLED="JobController:jobCancelled",cu.JOB_FAILED="JobController:jobFailed",
cu.JOB_FINISHED="JobController:jobFinished";class Mc{constructor(e,t,r=[]){if(u(this,"_context",void 0),u(this,
"_observer",void 0),u(this,"_name",void 0),u(this,"_steps",void 0),u(this,"_changedCallback",void 0),u(this,"_state",
void 0),u(this,"_stepDestructors",void 0),u(this,"_current",void 0),!J(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new Fc(`JobController#${this._name}`),this._state=Sl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Bi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=xs(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
kc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Al.JOB,
state:this._state,name:this._name,steps:Bi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Sl.STARTED:return!0;case Sl.PAUSED:case Sl.CONSTRUCTED:case Sl.CANCELLED:
case Sl.FINISHED:case Sl.FAILED:return!1}}isStarted(){switch(this._state){case Sl.PAUSED:case Sl.STARTED:return!0
;case Sl.CONSTRUCTED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}isPaused(){switch(this._state){
case Sl.PAUSED:return!0;case Sl.STARTED:case Sl.CONSTRUCTED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}
isCancelled(){switch(this._state){case Sl.CANCELLED:return!0;case Sl.PAUSED:case Sl.STARTED:case Sl.CONSTRUCTED:
case Sl.FINISHED:case Sl.FAILED:return!1}}isFinished(){switch(this._state){case Sl.FINISHED:case Sl.FAILED:
case Sl.CANCELLED:return!0;case Sl.CONSTRUCTED:case Sl.PAUSED:case Sl.STARTED:return!1}}isFailed(){switch(this._state){
case Sl.FAILED:return!0;case Sl.CONSTRUCTED:case Sl.FINISHED:case Sl.PAUSED:case Sl.STARTED:case Sl.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case Sl.FINISHED:return!0;case Sl.FAILED:case Sl.CONSTRUCTED:case Sl.PAUSED:
case Sl.STARTED:case Sl.CANCELLED:return!1}}start(){if(this._state!==Sl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return kc.info(`Starting job ${this._name}`),this._state=Sl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(ml.JOB_STARTED)&&this._observer.triggerEvent(
ml.JOB_STARTED,this),this._observer.hasCallbacks(ml.JOB_CHANGED)&&this._observer.triggerEvent(ml.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return kc.info(
`Pausing job ${this._name}`),this._state=Sl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
ml.JOB_PAUSED)&&this._observer.triggerEvent(ml.JOB_PAUSED,this),this._observer.hasCallbacks(ml.JOB_CHANGED
)&&this._observer.triggerEvent(ml.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return kc.info(`Resuming job ${this._name}`),this._state=Sl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(ml.JOB_RESUMED)&&this._observer.triggerEvent(
ml.JOB_RESUMED,this),this._observer.hasCallbacks(ml.JOB_CHANGED)&&this._observer.triggerEvent(ml.JOB_CHANGED,this),this}
stop(){if(this._state!==Sl.STARTED)throw new Error(`Job#${this._name} was not started`);return kc.info(
`Stopping job ${this._name}`),this._state=Sl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
ml.JOB_CANCELLED)&&this._observer.triggerEvent(ml.JOB_CANCELLED,this),this._observer.hasCallbacks(ml.JOB_CHANGED
)&&this._observer.triggerEvent(ml.JOB_CHANGED,this),this}onCancelled(e){return this.on(ml.JOB_CANCELLED,e)}onChanged(e){
return this.on(ml.JOB_CHANGED,e)}onFailed(e){return this.on(ml.JOB_FAILED,e)}onFinished(e){return this.on(
ml.JOB_FINISHED,e)}onPaused(e){return this.on(ml.JOB_PAUSED,e)}onResumed(e){return this.on(ml.JOB_RESUMED,e)}onStarted(e
){return this.on(ml.JOB_STARTED,e)}getErrorString(){return Bi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Bi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){kc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=Sl.FAILED,this._observer.hasCallbacks(ml.JOB_FAILED)&&this._observer.triggerEvent(
ml.JOB_FAILED,this)):i.isCancelled()?(this._state=Sl.CANCELLED,this._observer.hasCallbacks(ml.JOB_CANCELLED
)&&this._observer.triggerEvent(ml.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=Sl.STARTED,this._steps[this._current].start(),n===Sl.PAUSED&&this._observer.hasCallbacks(ml.JOB_RESUMED
)&&this._observer.triggerEvent(ml.JOB_RESUMED,this)):(this._state=Sl.FINISHED,this._observer.hasCallbacks(
ml.JOB_FINISHED)&&this._observer.triggerEvent(ml.JOB_FINISHED,this))),this._observer.hasCallbacks(ml.JOB_CHANGED
)&&this._observer.triggerEvent(ml.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=Sl.PAUSED,
this._observer.hasCallbacks(ml.JOB_PAUSED)&&this._observer.triggerEvent(ml.JOB_PAUSED,this),this._observer.hasCallbacks(
ml.JOB_CHANGED)&&this._observer.triggerEvent(ml.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=Sl.STARTED,this._observer.hasCallbacks(ml.JOB_RESUMED)&&this._observer.triggerEvent(ml.JOB_RESUMED,this),
this._observer.hasCallbacks(ml.JOB_CHANGED)&&this._observer.triggerEvent(ml.JOB_CHANGED,this))}}u(Mc,"Event",ml)
;const Gc=pc.createLogger("StageController");(cu=Nl={}).STAGE_STARTED="StageController:stageStarted",
cu.STAGE_PAUSED="StageController:stagePaused",cu.STAGE_RESUMED="StageController:stageResumed",
cu.STAGE_FINISHED="StageController:stageFinished",cu.STAGE_FAILED="StageController:stageFailed",
cu.STAGE_CANCELLED="StageController:stageCancelled",cu.STAGE_CHANGED="StageController:stageChanged";class jc{
constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,"_name",void 0),u(this,"_jobs",void 0)
,u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_jobDestructors",void 0),!J(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=Sl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Fc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Bi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:Al.STAGE,state:this._state,name:this._name,jobs:Bi(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case Sl.CANCELLED:return!0;case Sl.FINISHED:case Sl.FAILED:
case Sl.CONSTRUCTED:case Sl.PAUSED:case Sl.STARTED:return!1}}isFailed(){switch(this._state){case Sl.FAILED:return!0
;case Sl.CANCELLED:case Sl.FINISHED:case Sl.CONSTRUCTED:case Sl.PAUSED:case Sl.STARTED:return!1}}isFinished(){switch(
this._state){case Sl.FINISHED:case Sl.FAILED:case Sl.CANCELLED:return!0;case Sl.CONSTRUCTED:case Sl.PAUSED:
case Sl.STARTED:return!1}}isPaused(){switch(this._state){case Sl.PAUSED:return!0;case Sl.FAILED:case Sl.CANCELLED:
case Sl.FINISHED:case Sl.CONSTRUCTED:case Sl.STARTED:return!1}}isRunning(){switch(this._state){case Sl.STARTED:return!0
;case Sl.PAUSED:case Sl.FAILED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case Sl.PAUSED:case Sl.STARTED:return!0;case Sl.FAILED:case Sl.CANCELLED:case Sl.FINISHED:
case Sl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case Sl.FINISHED:return!0;case Sl.PAUSED:
case Sl.STARTED:case Sl.FAILED:case Sl.CANCELLED:case Sl.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
Nl.STAGE_CANCELLED,e)}onChanged(e){return this.on(Nl.STAGE_CHANGED,e)}onFailed(e){return this.on(Nl.STAGE_FAILED,e)}
onFinished(e){return this.on(Nl.STAGE_FINISHED,e)}onPaused(e){return this.on(Nl.STAGE_PAUSED,e)}onResumed(e){
return this.on(Nl.STAGE_RESUMED,e)}onStarted(e){return this.on(Nl.STAGE_STARTED,e)}start(){if(
this._state!==Sl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Gc.info(
`Starting stage ${this._name}`),this._state=Sl.STARTED,xs(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Gc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Sl.FAILED,
this._observer.hasCallbacks(Nl.STAGE_FAILED)&&this._observer.triggerEvent(Nl.STAGE_FAILED,this)
):this._observer.hasCallbacks(Nl.STAGE_STARTED)&&this._observer.triggerEvent(Nl.STAGE_STARTED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}pause(){if(
this._state===Sl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Gc.info(`Pausing stage ${this._name}`)
,this._state=Sl.PAUSED;var e=xs(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Gc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Gc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Nl.STAGE_PAUSED
)&&this._observer.triggerEvent(Nl.STAGE_PAUSED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}resume(){if(this._state===Sl.STARTED)throw new Error(
`Stage#${this._name} was already started`);Gc.info(`Resuming stage ${this._name}`),this._state=Sl.STARTED;var e=xs(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Gc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Gc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Nl.STAGE_RESUMED
)&&this._observer.triggerEvent(Nl.STAGE_RESUMED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Gc.info(`Stopping stage ${this._name}`),this._state=Sl.CANCELLED;var e=xs(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Gc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Gc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Bi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Bi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=xs(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Gc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==Sl.FAILED?(this._state=Sl.FAILED,this._observer.hasCallbacks(Nl.STAGE_FAILED
)&&this._observer.triggerEvent(Nl.STAGE_FAILED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)):n&&this._state!==Sl.CANCELLED?(this._state=Sl.CANCELLED,
this._observer.hasCallbacks(Nl.STAGE_CANCELLED)&&this._observer.triggerEvent(Nl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)
):this._state!==Sl.FINISHED&&(this._state=Sl.FINISHED,this._observer.hasCallbacks(Nl.STAGE_FINISHED
)&&this._observer.triggerEvent(Nl.STAGE_FINISHED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)))):(n=S(xs(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Sl.PAUSED?(this._state=Sl.PAUSED,this._observer.hasCallbacks(Nl.STAGE_PAUSED
)&&this._observer.triggerEvent(Nl.STAGE_PAUSED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)):n||this._state!==Sl.PAUSED||(this._state=Sl.STARTED,
this._observer.hasCallbacks(Nl.STAGE_RESUMED)&&this._observer.triggerEvent(Nl.STAGE_RESUMED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this))}}u(jc,"Event",Nl)
;const Hc=pc.createLogger("PipelineController");(cu=yl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
cu.PIPELINE_PAUSED="PipelineController:pipelinePaused",cu.PIPELINE_RESUMED="PipelineController:pipelineResumed",
cu.PIPELINE_FINISHED="PipelineController:pipelineFinished",cu.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
cu.PIPELINE_FAILED="PipelineController:pipelineFailed",cu.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class Bc{constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_name",void 0),u(this,"_stages",void 0),u(this,
"_observer",void 0),u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_stageDestructors",void 0),u(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Fc(`PipelineController#${this._name}`),this._state=Sl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Bi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Al.PIPELINE,state:this._state,name:this._name,
stages:Bi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case Sl.CANCELLED:return!0;case Sl.STARTED:case Sl.PAUSED:case Sl.CONSTRUCTED:case Sl.FINISHED:case Sl.FAILED:return!1}}
isFailed(){switch(this._state){case Sl.FAILED:return!0;case Sl.CANCELLED:case Sl.STARTED:case Sl.PAUSED:
case Sl.CONSTRUCTED:case Sl.FINISHED:return!1}}isFinished(){switch(this._state){case Sl.FAILED:case Sl.CANCELLED:
case Sl.FINISHED:return!0;case Sl.STARTED:case Sl.PAUSED:case Sl.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Sl.PAUSED:return!0;case Sl.FAILED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.STARTED:case Sl.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Sl.STARTED:return!0;case Sl.PAUSED:case Sl.FAILED:case Sl.CANCELLED:
case Sl.FINISHED:case Sl.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Sl.STARTED:case Sl.PAUSED:return!0
;case Sl.FAILED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Sl.FINISHED:return!0;case Sl.STARTED:case Sl.PAUSED:case Sl.FAILED:case Sl.CANCELLED:case Sl.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(yl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(yl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(yl.PIPELINE_FAILED,e)}onFinished(e){return this.on(yl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
yl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(yl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(yl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Hc.info(
`Pausing pipeline ${this._name}`),this._state=Sl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
yl.PIPELINE_PAUSED)&&this._observer.triggerEvent(yl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
yl.PIPELINE_CHANGED)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Hc.info(`Resuming pipeline ${this._name}`),
this._state=Sl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(yl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(yl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(yl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this),this}start(){if(this._state!==Sl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Hc.info(`Starting pipeline ${this._name}`),this._state=Sl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(yl.PIPELINE_STARTED)&&this._observer.triggerEvent(
yl.PIPELINE_STARTED,this),this._observer.hasCallbacks(yl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
yl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Sl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Hc.info(`Stopping pipeline ${this._name}`),this._state=Sl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(yl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(yl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(yl.PIPELINE_CHANGED)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this),this}
getErrorString(){return Bi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Bi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Hc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Sl.FAILED,
this._observer.hasCallbacks(yl.PIPELINE_FAILED)&&this._observer.triggerEvent(yl.PIPELINE_FAILED,this),Hc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Sl.CANCELLED,this._observer.hasCallbacks(
yl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(yl.PIPELINE_CANCELLED,this),Hc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Sl.STARTED;const o=this._stages[this._current].start();n===Sl.PAUSED&&this._observer.hasCallbacks(
yl.PIPELINE_RESUMED)&&this._observer.triggerEvent(yl.PIPELINE_RESUMED,this),Hc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Sl.FINISHED,this._observer.hasCallbacks(yl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(yl.PIPELINE_FINISHED,this),Hc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(yl.PIPELINE_CHANGED)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Sl.PAUSED,this._observer.hasCallbacks(yl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(yl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(yl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this),Hc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Sl.STARTED,this._observer.hasCallbacks(yl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(yl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(yl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(yl.PIPELINE_CHANGED,this),Hc.info(`Pipeline ${this._name} was resumed`))}}u(Bc,"Event",yl
);const xc=pc.createLogger("PipelineRunner");class Jc{static registerController(e){Lc.registerController(e)}
static createStepController(e,t){const r=Lc.findController(e);if(void 0===r)throw new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Mc(t,e.name,
Bi(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new jc(t,e.name,Bi(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new Bc(t,e.name,Bi(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ie(e)?(xc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ne(e)?(xc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(
xc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(xc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(xc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):xc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),xc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class Wc{static toString(...e){return Bi(e,
e=>Ua(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return Y(n)?Bi(n,e=>Wc.processVariables(e,i,o
,s,a)):X(n)?ns(P(n),(e,t)=>{var r=n[t];return e[`${Wc.processVariables(t,i,o,s,a)}`]=Wc.processVariables(r,i,o,s,a),e},
{}):p(n)?Wc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=bt(r)?r:e=>ai(r,e,o),Xa(t,n)&&tl(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=wa(e),Wc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=wa(
t.substr(a,l-a)),h=(Wc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Vc=pc.createLogger("PipelineContext");class Kc{constructor(e,t=void 0,r=void 0,n="${",i="}"){u(this,"_system",
void 0),u(this,"_parameters",void 0),u(this,"_variablePrefix",void 0),u(this,"_variableSuffix",void 0),u(this,
"_lookupVariable",void 0),u(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Vc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=Wc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Vc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return ai(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Vc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return K(this._variables)||(
this._variables={}),To(this._variables,e,t),Vc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const qc=pc.createLogger("runHttpResource"),zc=pc.createLogger(
"runLocalResource");(cu=wl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",cu.M_ROOM_JOIN_RULES="m.room.join_rules",
cu.M_ROOM_MEMBERSHIP="m.room.membership",cu.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
cu.M_ROOM_GUEST_ACCESS="m.room.guest_access",cu.M_ROOM_CREATE="m.room.create",cu.M_FEDERATE="m.federate",
cu.M_ROOM_MEMBER="m.room.member",cu.M_PUSH_RULES="m.push_rules",cu.M_PRESENCE="m.presence",cu.M_SPACE="m.space",
cu.M_LOGIN_PASSWORD="m.login.password",cu.M_LOGIN_TOKEN="m.login.token",cu.M_ID_USER="m.id.user",
cu.FI_NOR_DELETED="fi.nor.deleted",cu.FI_NOR_FORM_DTO="fi.nor.form_dto",cu.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,cu.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",cu.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
cu.FI_NOR_AGENT_DTO="fi.nor.dto.agent",cu.FI_NOR_PIPELINE="fi.nor.pipeline",
cu.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Rl=wl,(cu=Cl=Cl||{})[cu.UNAUTHENTICATED=0]="UNAUTHENTICATED",
cu[cu.AUTHENTICATING=1]="AUTHENTICATING",cu[cu.AUTHENTICATED=2]="AUTHENTICATED",
cu[cu.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
cu[cu.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(cu=bl={}).M_USER_IN_USE="M_USER_IN_USE",
cu.M_INVALID_USERNAME="M_INVALID_USERNAME",cu.M_EXCLUSIVE="M_EXCLUSIVE",cu.M_FORBIDDEN="M_FORBIDDEN",Il=bl
;const Xc=pc.createLogger("SimpleMatrixClient");(Dl=Dl||{}).EVENT="SimpleMatrixClient:event";class Yc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){u(this,"_observer",void 0),u(this,"_originalUrl",void 0),u(this,
"_pollTimeout",void 0),u(this,"_pollWaitTime",void 0),u(this,"_timeoutCallback",void 0),u(this,"_state",void 0),u(this,
"_homeServerUrl",void 0),u(this,"_identityServerUrl",void 0),u(this,"_accessToken",void 0),u(this,"_userId",void 0),u(
this,"_nextBatch",void 0),u(this,"_timer",void 0),u(this,"_syncing",void 0),
this._state=n?Cl.AUTHENTICATED:Cl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Fc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Xc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Xc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(N(a=s=await Oc.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Xc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Xc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Xc.debug(
"Could not register user: ",e),!(e instanceof Nc))throw new Nc(gl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Nc(gl.Unauthorized):403===s?new Nc(gl.Forbidden
):429===s?new Nc(429):new Nc(gl.InternalServerError,"Failed to register user");if(!Ke(s=null==e?void 0:e.getBody())
)throw new Nc(gl.InternalServerError,"Failed to register user");switch(s.errcode){case Il.M_USER_IN_USE:throw new Nc(
gl.Conflict,"User already exists");case Il.M_INVALID_USERNAME:throw new Nc(gl.BadRequest,"Username invalid")
;case Il.M_EXCLUSIVE:throw new Nc(gl.Conflict,"User name conflicts with exclusive namespace");default:throw new Nc(
gl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Xc.debug("whoami: Fetching account whoami... ",r),n=await Oc.getJson(r,{Authorization:`Bearer ${t}`}),Xc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Xc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Xc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Xc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await Oc.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Xc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Xc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(N(
n=r=await Oc.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Xc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Xc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Xc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Nc))throw new Nc(gl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Nc(gl.Unauthorized
):403===r?new Nc(gl.Forbidden):429===r?new Nc(429):new Nc(gl.InternalServerError,"Failed to register user");if(!Ke(
r=null==e?void 0:e.getBody()))throw new Nc(gl.InternalServerError,"Failed to register user");switch(r.errcode){
case Il.M_USER_IN_USE:throw new Nc(gl.Conflict,"User already exists");case Il.M_INVALID_USERNAME:throw new Nc(
gl.BadRequest,"Username invalid");case Il.M_EXCLUSIVE:throw new Nc(gl.Conflict,
"User name conflicts with exclusive namespace");default:throw new Nc(gl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:wl.M_LOGIN_PASSWORD,identifier:{type:wl.M_ID_USER,user:r},
password:n},Xc.debug("Sending login with userId:",r),!(N(h=o=await Oc.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||N(_=h)&&I(_,["m.homeserver","m.identity_server"])&&N(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||N(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Xc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Xc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Yc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Xc.debug(
"Could not login: ",e),new Nc(gl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(N(n=r=await Oc.getJson(this._resolveHomeServerUrl(`/directory/room/${qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Xc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Xc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Nc&&e.getStatusCode()===gl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(N(
t=e=await Oc.getJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,he,Ve)))throw Xc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Xc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!K(i=await Oc.getJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),{Authorization:`Bearer ${n}`})))throw Xc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Xc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Nc&&e.getStatusCode()===gl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(N(s=o=await Oc.putJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Xc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Xc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Xc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await Oc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Xc.debug("forgetRoom: received: ",r)}catch(e){throw Xc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await Oc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Xc.debug("leaveRoom: received: ",r)}catch(e){throw Xc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e))throw new TypeError(
`roomId invalid: ${e}`);if(!he(t))throw new TypeError(`userId invalid: ${t}`);if(Xc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await Oc.postJson(
this._resolveHomeServerUrl(`/rooms/${qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Xc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Xc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Xc.debug("Sending message with body:",t
),r=await Oc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,Xc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(Xc.debug("Creating room with body:",e),!(N(
e=t=await Oc.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&ue(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw Xc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return Xc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(Xc.debug(
`Joining to room ${t} with body:`,e),!(N(i=n=await Oc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw Xc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return Xc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw Xc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Xc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!K(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=al(Bi(P(s),e=>{var t=s[e]
;return`${qe(e)}=${qe(t)}`}),"&"),!(N(t=e=await Oc.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||Ge(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||He(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||be(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Be(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw Xc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${We(e)}`);return e}isAlreadyInTheRoom(
e){if(Ke(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===Il.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){zs(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(Dl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Xc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Xc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Xc.info("Initial sync request started"),
this._state!==Cl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Cl.AUTHENTICATED_AND_STARTING,
e=await this.sync({filter:{room:{timeline:{limit:1}}}}),Xc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Xc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Xc.info("Timer started..."),this._state=Cl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Xc.error("No next_batch in the response: ",t),r=Io(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),zs(n,e=>{var t,r=(r=s[e],Io([],
null!=r&&r.state?ge(null==r?void 0:r.state):[],null!=r&&r.timeline?Ne(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Io([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),zs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),zs(o,e=>{var t=l[e],t=Io([],ge(
null==t?void 0:t.state),Ne(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}u(Yc,
"Event",Dl),(cu=du=du||{}).PRIVATE_CHAT="private_chat",cu.PUBLIC_CHAT="public_chat",
cu.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Ol=du,(du=hu=hu||{}).INVITED="invited",du.JOINED="joined",
du.SHARED="shared",du.WORLD_READABLE="world_readable",Ll=hu,(hu=_u=_u||{}).PUBLIC="public",hu.KNOCK="knock",
hu.INVITE="invite",hu.PRIVATE="private",hu.RESTRICTED="restricted",Pl=_u,(_u=Eu=Eu||{}).CAN_JOIN="can_join",
_u.FORBIDDEN="forbidden",Ul=Eu;const Qc=pc.createLogger("MatrixCrudRepository");class Zc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){u(this,"_client",void 0),u(this,"_serviceAccount",void 0),u(this,
"_stateType",void 0),u(this,"_stateKey",void 0),u(this,"_deletedType",void 0),u(this,"_deletedKey",void 0),u(this,
"_allowedGroups",void 0),u(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:Rl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Qc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Qc.debug("joinedRooms = ",i),t=P(t),Qc.debug(
"invitedRooms = ",t),(t=xs(t,e=>!i.includes(e))).length){Qc.debug("Joining to rooms = ",t);let r=0;if(await ns(t,async(e
,t)=>{await e;try{Qc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Qc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Qc.debug(
"Fetching results again after joining"),this.getAll()}return ns(i,(e,i)=>{var t=n[i],r=xs(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&xa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Io(e,Bi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Bi(xs(e,
e=>ai(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Qc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Qc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Qc.debug(
"createItem: serviceAccountId = ",n),i=xs(gs(Io(n?[n]:[],t||[])),e=>e!==o),Qc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Qc.debug("createItem: allowedGroups = ",n),t={[Rl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:Rl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Ll.SHARED}},{type:Rl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Ul.FORBIDDEN}}]
;void 0!==n&&s.push({type:Rl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Pl.RESTRICTED,allow:Bi(n,e=>({
type:Rl.M_ROOM_MEMBERSHIP,room_id:e}))}}),Qc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Qc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&zs(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Ol.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Qc.debug(
"createItem: response = ",t),t=t.room_id,Qc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Qc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Qc.debug(
"response = ",JSON.stringify(n,null,2)),!K(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Bi(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!K(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Nc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Qc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Nc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Qc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Qc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Qc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Nc&&[401,403,404].includes(e.getStatusCode()))throw e;throw Qc.error(
`Error in deleteById(${t}): `,e),new Nc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await ns(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Qc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const ed=pc.createLogger("runMatrixResource"
);($l=$l||{}).ON_EXIT="NodeSystemProcess:onExit";const td=pc.createLogger("NodeSystemProcess");class rd{constructor(e,t,
r,n=void 0,i=!0){u(this,"_command",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_cwd",void 0),u(this,
"_stdoutCallback",void 0),u(this,"_stderrCallback",void 0),u(this,"_closeCallback",void 0),u(this,"_observer",void 0),u(
this,"_process",void 0),u(this,"_printToParentProcess",void 0),u(this,"_stdoutChunks",void 0),u(this,"_stderrChunks",
void 0),u(this,"_exitStatus",void 0),this._observer=new Fc("NodeSystemProcess"),this._process=void 0,this._command=e,
this._args=t,this._env=r,this._cwd=n,this._printToParentProcess=i,this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[],this._exitStatus=void 0}start(){const e={};return this._env&&(e.env=this._env),this._cwd&&(
e.cwd=this._cwd),this._process=Ou.spawn(this._command,this._args,e),this._process.stdout.on("data",this._stdoutCallback)
,this._process.stderr.on("data",this._stderrCallback),this._process.on("close",this._closeCallback),this}stop(){
return this._process.kill("SIGTERM"),this}pause(){return this._process.kill("SIGSTOP"),this}resume(){
return this._process.kill("SIGCONT"),this}toString(){return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}
}getExitStatus(){return this._exitStatus}getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}
getOutputString(){return Buffer.concat(this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){
this._stderrChunks.push(e),process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks($l.ON_EXIT
)?this._observer.triggerEvent($l.ON_EXIT,this):td.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}u(rd,"Event",$l);const nd=pc.createLogger(
"NodeSystem");class id{constructor(){u(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){zs(this._tempFileNames,e=>{nd.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){try{const t=Pu.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}catch(e){if("ENOENT"===(
null==e?void 0:e.code))return!1;throw e}}isFile(e){const t=Pu.default.statSync(e);return t.isFile()}isDirectory(e){
const t=Pu.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e)?this.isDirectory(e
)?this.deleteDirectory(e):Pu.default.unlinkSync(e):nd.warn(`deleteFile: Path did not exist: ${e}`)}deleteDirectory(e){
this.pathExists(e)?Pu.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):nd.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r,n){return new rd(e,t,r,n)}createDirectory(e){
return Pu.default.mkdirSync(e),this}readFile(e){return Pu.default.readFileSync(e,{encoding:"utf8"})}writeFile(e,t){
return Pu.default.writeFileSync(e,t,{encoding:"utf8"}),this}getWorkingDirectory(){return process.cwd()}
createTemporaryFile(){let e="";do{var t=ku.default.randomBytes(20).toString("hex")}while(e=Fu.default.join(
this.getWorkingDirectory(),`${t}.tmp`),Pu.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file")
;return this._tempFileNames.push(e),e}}(Eu=Fl=Fl||{}).STRINGIFY="stringify",Eu.PARSE="parse";const od=pc.createLogger(
"BaseStepController");(Eu=kl={}).JSON_STARTED="BaseStepController:scriptStarted",
Eu.JSON_PAUSED="BaseStepController:scriptPaused",Eu.JSON_RESUMED="BaseStepController:scriptResumed",
Eu.JSON_CANCELLED="BaseStepController:scriptCancelled",Eu.JSON_FAILED="BaseStepController:scriptFailed",
Eu.JSON_FINISHED="BaseStepController:scriptFinished",Eu.JSON_CHANGED="BaseStepController:scriptChanged";class sd{
constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,
"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,"_stepName",void 0),u(this,"_name",void 0),u(this,
"_action",void 0),u(this,"_input",void 0),u(this,"_output",void 0),u(this,"_state",void 0),u(this,"_compiledAction",
void 0),u(this,"_compiledInput",void 0),u(this,"_compiledOutput",void 0),u(this,"_successResult",void 0),u(this,
"_errorResult",void 0),!p(r))throw new TypeError(`[${r}] invalid controller identifier: ${r}`);if(!p(n)
)throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(!J(i))throw new TypeError(`[${n}] invalid name: ${i}`)
;if(!p(s))throw new TypeError(`[${n}] must have a valid string: ${s}`);if(!v(o)&&!z(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!v(a)&&!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=Sl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new Fc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case Sl.STARTED:return!0;case Sl.PAUSED:case Sl.CONSTRUCTED:case Sl.CANCELLED:case Sl.FINISHED:
case Sl.FAILED:return!1}}isStarted(){switch(this._state){case Sl.STARTED:case Sl.PAUSED:return!0;case Sl.CONSTRUCTED:
case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}isPaused(){switch(this._state){case Sl.PAUSED:return!0
;case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}isFinished(){switch(
this._state){case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!0;case Sl.CONSTRUCTED:case Sl.STARTED:
case Sl.PAUSED:return!1}}isSuccessful(){switch(this._state){case Sl.FINISHED:return!0;case Sl.FAILED:case Sl.CANCELLED:
case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.PAUSED:return!1}}isCancelled(){switch(this._state){case Sl.CANCELLED:
return!0;case Sl.FINISHED:case Sl.FAILED:case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.PAUSED:return!1}}isFailed(){switch(
this._state){case Sl.FAILED:return!0;case Sl.CANCELLED:case Sl.FINISHED:case Sl.CONSTRUCTED:case Sl.STARTED:
case Sl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==Sl.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=Sl.STARTED,!z(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${Wc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!z(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${Wc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${Wc.toString(this._output)}`);if(this._compiledOutput=n,
od.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(kl.JSON_STARTED)&&this._observer.triggerEvent(kl.JSON_STARTED,this),
this._observer.hasCallbacks(kl.JSON_CHANGED)&&this._observer.triggerEvent(kl.JSON_CHANGED,this),!bt(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,wt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(kl.JSON_STARTED,e)}onPaused(e
){return this.on(kl.JSON_PAUSED,e)}onResumed(e){return this.on(kl.JSON_RESUMED,e)}onCancelled(e){return this.on(
kl.JSON_CANCELLED,e)}onFailed(e){return this.on(kl.JSON_FAILED,e)}onFinished(e){return this.on(kl.JSON_FINISHED,e)}
onChanged(e){return this.on(kl.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){od.error(
"Action success: ",e),void 0!==this._compiledOutput?(od.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):od.info("No output target configured for result: ",e),
this._successResult=e,this._state=Sl.FINISHED,this._observer.hasCallbacks(kl.JSON_FINISHED
)&&this._observer.triggerEvent(kl.JSON_FINISHED,this),this._observer.hasCallbacks(kl.JSON_CHANGED
)&&this._observer.triggerEvent(kl.JSON_CHANGED,this)}_errorCloseAction(e){od.error("Action failed: ",e),
this._errorResult=e,this._state=Sl.FAILED,this._observer.hasCallbacks(kl.JSON_FAILED)&&this._observer.triggerEvent(
kl.JSON_FAILED,this),this._observer.hasCallbacks(kl.JSON_CHANGED)&&this._observer.triggerEvent(kl.JSON_CHANGED,this)}}u(
sd,"Event",kl),u(sd,"State",Sl);const ad=Io(pu,["name","json","action","output"]),ld=pc.createLogger("JsonController")
;class ud extends sd{static parseControllerModel(e){if(Ye(e))return e}static isControllerModel(e){return Ye(e)}
static createController(e,t){return new ud(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=Fl.STRINGIFY,i=void 0
){super(e,Al.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:Fl.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case Fl.STRINGIFY:case Fl.PARSE:return 1}}())throw ld.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${Wc.toString(e)}`);if(e===Fl.STRINGIFY){if(!z(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${Wc.toString(t)}`);var r=JSON.stringify(t,null,2)
;if(!p(r))throw ld.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==Fl.PARSE
)throw ld.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw ld.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${Wc.toString(t)}`)
;return JSON.parse(t)}}(Eu=Ml=Ml||{}).STRINGIFY="stringify",Eu.PARSE="parse";const cd=Io(pu,["name","csv","action",
"output"]),dd=pc.createLogger("CsvController");class hd extends sd{static parseControllerModel(e){if(et(e))return e}
static isControllerModel(e){return et(e)}static createController(e,t){return new hd(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Ml.STRINGIFY,i=void 0){super(e,Al.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Ml.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Ml.STRINGIFY:case Ml.PARSE:return 1}}())throw dd.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${Wc.toString(e)}`);if(e===Ml.STRINGIFY
){if(!Ze(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${Wc.toString(t)}`)
;if(n="\n",!p(r=Bi(t,e=>{return[e,t,r]=[e,",",'"'],Bi(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Ml.PARSE)throw dd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw dd.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${Wc.toString(t)}`);if(n="\n",t=Ze(r=t)?r:(p(r
)||(r=`${r}`),Bi(va(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Qe(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Xa(e,'"')&&tl(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!Ze(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const _d=Io(pu,["name","command","args","env"]),
Ed=pc.createLogger("BaseScriptController");(Eu=Gl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
Eu.SCRIPT_PAUSED="BaseScriptController:scriptPaused",Eu.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
Eu.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",Eu.SCRIPT_FAILED="BaseScriptController:scriptFailed",
Eu.SCRIPT_FINISHED="BaseScriptController:scriptFinished",Eu.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class vd{constructor(e,t,r,n,i,o,s=[],a={},l=void 0){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,
"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,"_stepName",void 0),u(this,"_name",void 0),u(this,
"_command",void 0),u(this,"_cwd",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_closeCallback",void 0),u(
this,"_compiledCwd",void 0),u(this,"_compiledCommand",void 0),u(this,"_compiledArgs",void 0),u(this,"_compiledEnv",
void 0),u(this,"_systemProcess",void 0),u(this,"_state",void 0),!p(r))throw new TypeError(
`[${n}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] name invalid: ${i}`);if(!p(o))throw new TypeError(
`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,p,0))throw new TypeError(
`[${n}#${i}] must have a valid args: ${JSON.stringify(s)}`);if(!y(a,p,p))throw new TypeError(
`[${n}#${i}] must have a valid env: ${JSON.stringify(a)}`);if(!f(l))throw new TypeError(`[${n}#${i}] invalid cwd: ${l}`)
;this._controllerType=t,this._controllerName=r,this._stepName=n,this._context=e,this._state=Sl.CONSTRUCTED,this._name=i,
this._cwd=l,this._command=o,this._args=s,this._env=a,this._observer=new Fc(`BaseScriptController#${i}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`BaseScriptController#${this._name}`}
getStateDTO(){return{type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Sl.STARTED:return!0;case Sl.PAUSED:case Sl.CONSTRUCTED:case Sl.CANCELLED:
case Sl.FINISHED:case Sl.FAILED:return!1}}isStarted(){switch(this._state){case Sl.STARTED:case Sl.PAUSED:return!0
;case Sl.CONSTRUCTED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}isPaused(){switch(this._state){
case Sl.PAUSED:return!0;case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!1}}
isFinished(){switch(this._state){case Sl.CANCELLED:case Sl.FINISHED:case Sl.FAILED:return!0;case Sl.CONSTRUCTED:
case Sl.STARTED:case Sl.PAUSED:return!1}}isSuccessful(){switch(this._state){case Sl.FINISHED:return!0;case Sl.FAILED:
case Sl.CANCELLED:case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.PAUSED:return!1}}isCancelled(){switch(this._state){
case Sl.CANCELLED:return!0;case Sl.FINISHED:case Sl.FAILED:case Sl.CONSTRUCTED:case Sl.STARTED:case Sl.PAUSED:return!1}}
isFailed(){switch(this._state){case Sl.FAILED:return!0;case Sl.CANCELLED:case Sl.FINISHED:case Sl.CONSTRUCTED:
case Sl.STARTED:case Sl.PAUSED:return!1}}start(){var e,t,r;if(this._state!==Sl.CONSTRUCTED)throw new Error(
`${this._stepName}#${this._name} was already started`);if(this._state=Sl.STARTED,!p(e=this._context.compileModel(
this._command)))throw new Error(`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(
this._compiledCommand=e,!f(t=this._context.compileModel(this._cwd)))throw new Error(
`${this._stepName}#${this._name} failed to compile the cwd: ${this._cwd}`);if(this._compiledCwd=t,!d(
r=this._context.compileModel(this._args),p))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=r,!y(
t=this._context.compileModel(this._env),p,p))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=t,Ed.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,r,this._compiledEnv,
this._compiledCwd),this._systemProcess.on($l.ON_EXIT,this._closeCallback),this._systemProcess.start(),
this._observer.hasCallbacks(Gl.SCRIPT_STARTED)&&this._observer.triggerEvent(Gl.SCRIPT_STARTED,this),
this._observer.hasCallbacks(Gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Gl.SCRIPT_CHANGED,this),this}pause(){if(
!this.isRunning())throw new Error(`${this._stepName}#${this._name} was not running`);if(!this._systemProcess
)throw new Error("No process initialized");return Ed.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),
this._state=Sl.PAUSED,this._systemProcess.pause(),this._observer.hasCallbacks(Gl.SCRIPT_PAUSED
)&&this._observer.triggerEvent(Gl.SCRIPT_PAUSED,this),this._observer.hasCallbacks(Gl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Gl.SCRIPT_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess)throw new Error("No process initialized")
;return Ed.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),this._state=Sl.STARTED,
this._systemProcess.resume(),this._observer.hasCallbacks(Gl.SCRIPT_RESUMED)&&this._observer.triggerEvent(
Gl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Gl.SCRIPT_CHANGED,
this),this}stop(){if(this._state!==Sl.STARTED)throw new Error(`${this._stepName}#${this._name} was not started`);if(
!this._systemProcess)throw new Error("No process initialized");return Ed.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Sl.CANCELLED,this._systemProcess.stop(),
this._observer.hasCallbacks(Gl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(Gl.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(Gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Gl.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(Gl.SCRIPT_STARTED,e)}onPaused(e){return this.on(Gl.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
Gl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Gl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(Gl.SCRIPT_FAILED,e)
}onFinished(e){return this.on(Gl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Gl.SCRIPT_CHANGED,e)}getErrorString(){
return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),Ed.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=Sl.FINISHED,this._observer.hasCallbacks(
Gl.SCRIPT_FINISHED)&&this._observer.triggerEvent(Gl.SCRIPT_FINISHED,this)):(this._state=Sl.FAILED,
this._observer.hasCallbacks(Gl.SCRIPT_FAILED)&&this._observer.triggerEvent(Gl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(Gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Gl.SCRIPT_CHANGED,this)}}u(vd,"Event",Gl),u(
vd,"State",Sl);class pd extends vd{static parseControllerModel(e){if(tt(e))return e}static isControllerModel(e){
return tt(e)}static createController(e,t){return new pd(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){
super(e,Al.SCRIPT,"ScriptController","command",t,r,n,i)}}(Eu=jl=jl||{}).MKDIR="mkdir",Eu.READ="read",
Eu.READ_OR_CREATE="read/create",Eu.WRITE="write";const fd=Io(pu,["name","file","target","content","output","default"]),
gd=pc.createLogger("FileController");class Td extends sd{static parseControllerModel(e){if(rt(e))return e}
static isControllerModel(e){return rt(e)}static createController(e,t){return new Td(e,t.name,t,t.file,t.output)}
constructor(e,t,r,n,i=void 0){super(e,Al.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(!function(){switch(e){case jl.MKDIR:case jl.READ:case jl.READ_OR_CREATE:
case jl.WRITE:return 1}}())throw gd.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${Wc.toString(e)}`);if(!rt(t))throw gd.debug("run: input = ",t),
new TypeError(`[file#${this.getName()}] failed to compile the input property: ${Wc.toString(t)}`)
;let i=null==t?void 0:t.target;if(!f(i))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${Wc.toString(i)}`);if(e===jl.MKDIR)return void 0===i?(
i=n.createTemporaryFile(),n.createDirectory(i),gd.info(`Created temporary directory: ${i}`)):(n.createDirectory(i),
gd.info(`Created directory: ${i}`)),i;if(e===jl.READ){if(void 0===i)throw new TypeError(`[file#${this.getName(
)}] No file to read defined`);return n.readFile(i)}if(e===jl.READ_OR_CREATE){if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);if(n.pathExists(i))return n.readFile(i);{
let e=null==t?void 0:t.default;return p(e)||(e=JSON.stringify(e,null,2)),n.writeFile(i,e),e}}if(e!==jl.WRITE
)throw gd.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);{if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);let e=null==t?void 0:t.content;return p(e)||(e=JSON.stringify(e,null
,2)),n.writeFile(i,e),i}}}const Sd=Io(pu,["name","variable","set"]);(Hl=Hl||{}).SET="set",Bl=Hl
;const Ad=pc.createLogger("VariableController");class md extends sd{static parseControllerModel(e){if(nt(e))return e}
static isControllerModel(e){return nt(e)}static createController(e,t){return new md(e,t.name,t.set,Bl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,Al.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Hl.SET)throw Ad.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${Wc.toString(e)}`);if(e!==Bl.SET)throw Ad.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!z(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${Wc.toString(t)}`);return t}}const Nd=Io(pu,["name","git","url",
"target","message","cwd"]);(Eu=_u={}).CLONE="clone",Eu.COMMIT="commit",Eu.ADD="add",xl=_u;class yd extends vd{
static parseControllerModel(e){if(it(e))return e}static isControllerModel(e){return it(e)}static createController(e,t){
var r,n,i;if(t.git===xl.CLONE)return r=t.target,n=t.url,new yd(e,t.name,"git",["clone",n,r],{GIT_TERMINAL_PROMPT:"0",
GIT_ASKPASS:"/bin/echo"});if(t.git===xl.ADD)return i=null==t?void 0:t.target,new yd(e,t.name,"git",["add",i],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"});if(t.git!==xl.COMMIT)throw new TypeError(
`Unknown git action: ${t.git}`);return i=null!==(i=null==t?void 0:t.message)&&void 0!==i?i:"Pipeline commit",new yd(e,
t.name,"git",["commit","-m",i],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"})}constructor(e,t,r,n=[],i={}){super(e,
Al.GIT,"GitController","git",t,r,n,i)}}const wd=Io(pu,["name","assert","equals"]);(Jl=Jl||{}).EQUALS="equals",Wl=Jl
;const Rd=pc.createLogger("AssertController");class Cd extends sd{static parseControllerModel(e){if(ot(e))return e}
static isControllerModel(e){return ot(e)}static createController(e,t){return new Cd(e,t.name,t,Wl.EQUALS,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,Al.VARIABLE,`AssertController#${t}`,`assert#${t}`,t,r,n,i)}run(e,t){if(
e!==Jl.EQUALS)throw Rd.debug("run: action = ",e),new TypeError(`[assert#${this.getName(
)}] failed to compile the action property: ${Wc.toString(e)}`);if(e!==Wl.EQUALS)throw Rd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!ot(t))throw new TypeError(`[assert#${this.getName(
)}] failed to compile the input property as variable: ${Wc.toString(t)}`);if((e=null==t?void 0:t.assert)!==(
t=null==t?void 0:t.equals))throw new TypeError(`[assert#${this.getName()}] Values do not match: ${Wc.toString(e
)} vs ${Wc.toString(t)}`);return e}}const bd=Io(pu,["name","concat","output"]);(Vl=Vl||{}).CONCAT="concat",Kl=Vl
;const Id=pc.createLogger("ConcatController");class Dd extends sd{static parseControllerModel(e){if(st(e))return e}
static isControllerModel(e){return st(e)}static createController(e,t){return new Dd(e,t.name,t,Kl.CONCAT,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,Al.VARIABLE,`ConcatController#${t}`,`concat#${t}`,t,r,n,i)}run(e,t){if(
e!==Vl.CONCAT)throw Id.debug("run: action = ",e),new TypeError(`[concat#${this.getName(
)}] failed to compile the action property: ${Wc.toString(e)}`);if(e!==Kl.CONCAT)throw Id.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);{if(!st(t))throw new TypeError(`[concat#${this.getName(
)}] failed to compile the input property as variable: ${Wc.toString(t)}`);const r=null==t?void 0:t.concat;return d(r,Y
)?Io([],...r):d(r,X)?ns(r,(e,t)=>O(O({},e),t),{}):c(r)?r.join(""):[r]}}}pc.createLogger("waitHttpResource"),
pc.createLogger("waitLocalResource");const Od=pc.createLogger("waitMatrixResource"),Ld=pc.createLogger("main")
;pc.setLogLevel(Zu),async function(n=[]){var i,o,s;let a;try{if(class{static registerControllers(){
Jc.registerController(Dd),Jc.registerController(Cd),Jc.registerController(md),Jc.registerController(yd),
Jc.registerController(Td),Jc.registerController(ud),Jc.registerController(hd),Jc.registerController(pd)}
}.registerControllers(),Ld.debug(`Loglevel ${pc.getLogLevelString()}`),i=cc,n.shift(),!n.shift())return console.log(B(i)
),vl.ARGUMENT_PARSE_ERROR;if(0===n.length)return console.log(B(i)),vl.ARGUMENT_PARSE_ERROR;let t=!1,r=!0;do{if(
o=n.shift(),r){let e=!1;switch(function(){switch(o){case"-h":case"--help":case 0:return 0;case"-v":case"--version":
case 1:return 1;case"--":case 2:return 2;case"-w":case"--wait":case 3:return 3}}()){case 0:return console.log(B(i)),
vl.OK;case 1:return console.log(function(e){const t=xs([ic?"LOCAL":"",oc?"HTTP":"",sc?"MATRIX":"",lc?"TEST":"",
uc?"DEV":""],e=>!!e);return`${e} v${tc} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${tc}'
  BUILD_NODE_ENV              = '${rc}'
  BUILD_DATE                  = '${nc}'
  BUILD_WITH_LOCAL_RESOURCES  = '${ic}'
  BUILD_WITH_HTTP_RESOURCES   = '${oc}'
  BUILD_WITH_MATRIX_RESOURCES = '${sc}'
`}(i)),vl.OK;case 3:t=!0,e=!0;break;case 2:r=!1,e=!0}if(!r||e)continue}if(void 0===(s=Tc.parseRunnerResource(o))
)return Ld.error(`Unsupported argument: ${o}`),console.log(B(i)),vl.UNKNOWN_ARGUMENT;a=new id;let e=await Xe(a,s);if(
t&&e===vl.NO_WORK_AVAILABLE&&(await async function(e){switch(e.type){case dl.HTTP:
return oc?vl.UNIMPLEMENTED_FEATURE:vl.UNBUILD_FEATURE;case dl.LOCAL:
return ic?vl.UNIMPLEMENTED_FEATURE:vl.UNBUILD_FEATURE;case dl.MATRIX:return sc?async function(t){var r,n,i;try{if(
Od.debug("waitMatrixResource: ",t),j(r=await async function(e,t){if(M(t))return new Yc(e,void 0,void 0,t.access_token)
;if(F(t)){const r=new Yc(e);return r.login(t.username,t.password)}return vl.UNKNOWN_AUTHENTICATION_TYPE}(
`https://${t.homeserver}`,t.authentication)))return r;if(j(n=await async function(e){let t=e.getUserId();return t||(
t=await e.whoami(),t)?(Od.info(`Agent user ID: ${t}`),t):(Od.error("Could not detect agent user ID"),vl.UNKNOWN_AGENT_ID
)}(r)))return n;let e=await lt(r,i=await async function(e){const t=new Zc(e,Rl.FI_NOR_AGENT_DTO);return t.getAll()}(r))
;if(e===vl.OK)return vl.OK;do{try{await async function(s,a){return new Promise((i,t)=>{let o;try{o=s.on(Dl.EVENT,
function(e,t){var r=null==t?void 0:t.type,n=null==t?void 0:t.room_id;Od.debug("waitForEvents: Event: ",r,n,t),
r&&a.includes(r)&&(o&&(o(),o=void 0),s.stop(),i())}),s.start()}catch(e){o&&(o(),o=void 0),s.stop(),t(e)}})}(r,[
Rl.M_ROOM_CREATE,Rl.M_ROOM_JOIN_RULES,Rl.M_ROOM_MEMBER])}catch(e){Od.error("Error while waiting: ",e),await new Promise(
(e,t)=>{try{setTimeout(e,15e3)}catch(e){t(e)}})}}while(e=await lt(r,i),e===vl.NO_WORK_AVAILABLE);return e}catch(e){
return Od.error("Error: ",e),vl.MATRIX_RESOURCE_FAILED}}(e):vl.UNBUILD_FEATURE;default:return vl.UNKNOWN_RESOURCE_TYPE}
}((a,s)),e=await Xe(a,s)),e!==vl.OK)return e===vl.UNKNOWN_RESOURCE_TYPE?(Ld.error(`Error NorPP${e}: ${H(e
)}: Resource type was unknown: ${s.type}`),console.log(B(i)),vl.UNKNOWN_RESOURCE_TYPE):(j(e)?Ld.error(
`Error EX-${e}: ${H(e)}: for ${U(s.type)} resource ${o}`):Ld.error(`Error: Exit status ${e}: for ${U(s.type
)} resource ${o}`),e)}while(1<=n.length);return vl.OK}catch(e){return Ld.error("Fatal error: ",e),vl.FATAL_ERROR
}finally{a&&a.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)}
);
