#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function D(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){u(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new nr(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new ir;++t<r;)this.add(e[t])}function l(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Vn);return o.cache=new(l.Cache||Wn),o}
function v(e){return void 0===e}function c(e){return pr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!pr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Ja(e)}function p(e){return ja(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return Va(e)}function g(e){return v(e)||Va(e)}function T(e,t){return eo(e,t)}
function S(e,t){return ao(e,t)}function y(e,t){return Rt(e)&&S(sl(e),t)}function m(e,t=p,r=void 0){return!(
void 0!==r&&!y(e,r))&&(t=void 0!==t?t:p,Rt(e)&&S(P(e),t))}function A(e){return!!Rt(e)&&!(e instanceof Date)&&!It(e)&&!c(
e)&&m(e,p,void 0)}function N(e,t=p,r=void 0){return!!Rt(e)&&!(e instanceof Date)&&!It(e)&&!c(e)&&m(e,t,r)}function w(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!Rt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(It(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||y(e,e=>r(e)))throw e=Qo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=sl(e),n=Yo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function R(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return w(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>T(e,e=>e(t))}function b(e){return Rt(e)}function I(e,t){return b(e
)&&0===(r=t,Js(P(e),e=>!r.includes(e)).length);var r}function O(e){if(void 0!==e&&""!==e)return Ua(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=xi(e,(e,t)=>t);return Js(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Js(e,e=>t(e))):[]}function U(e){switch(e
){case dl.HTTP:return"http";case dl.LOCAL:return"local";case dl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return A(e)&&function(){switch(null==e?void 0:e.type){
case _l.NONE:case _l.BASIC_AUTH:case _l.BEARER_AUTH:return 1;default:return}}()}function F(e){return A(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===El.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function M(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return M(r,n)}return M(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:El.BASIC_AUTH,username:r,password:n
}}function k(e){return A(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===El.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(k(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:El.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:El.BEARER_AUTH,access_token:n}}function j(e){if(Ja(e)&&!(e<0||255<e)){if(
vl.FATAL_SIGNAL_RANGE_START<=e&&e<=vl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case vl.OK:case vl.GENERAL_ERRORS:
case vl.MISUSE_OF_SHELL_BUILTINS:case vl.ARGUMENT_PARSE_ERROR:case vl.UNKNOWN_ARGUMENT:case vl.UNKNOWN_RESOURCE_TYPE:
case vl.UNKNOWN_AUTHENTICATION_TYPE:case vl.RESOURCE_LOAD_FAILED:case vl.RESOURCE_MODEL_INVALID:
case vl.LOCAL_RESOURCE_FAILED:case vl.HTTP_RESOURCE_FAILED:case vl.MATRIX_RESOURCE_FAILED:case vl.UNIMPLEMENTED_FEATURE:
case vl.UNBUILD_FEATURE:case vl.FATAL_ERROR:case vl.USAGE:case vl.DATAERR:case vl.NOINPUT:case vl.NOUSER:case vl.NOHOST:
case vl.UNAVAILABLE:case vl.SOFTWARE:case vl.OSERR:case vl.OSFILE:case vl.CANTCREAT:case vl.IOERR:case vl.TEMPFAIL:
case vl.PROTOCOL:case vl.NOPERM:case vl.CONFIG:case vl.COMMAND_INVOKED_CANNOT_EXECUTE:case vl.COMMAND_NOT_FOUND:
case vl.INVALID_ARGUMENT_TO_EXIT:case vl.FATAL_SIGNAL_RANGE_START:case vl.FATAL_SIGNAL_RANGE_END:
case vl.EXIT_STATUS_OUT_OF_RANGE:case vl.UNKNOWN_AGENT_ID:case vl.WORK_CANCELLED:case vl.CONFLICT:return 1;default:
return}}}function H(e){if(vl.FATAL_SIGNAL_RANGE_START<=e&&e<=vl.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-vl.FATAL_SIGNAL_RANGE_START}`;switch(e){case vl.OK:return"OK";case vl.GENERAL_ERRORS:
return"GENERAL_ERRORS";case vl.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case vl.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case vl.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case vl.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case vl.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case vl.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case vl.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case vl.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case vl.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case vl.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case vl.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case vl.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case vl.FATAL_ERROR:return"FATAL_ERROR"
;case vl.USAGE:return"USAGE";case vl.DATAERR:return"DATAERR";case vl.NOINPUT:return"NOINPUT";case vl.NOUSER:
return"NOUSER";case vl.NOHOST:return"NOHOST";case vl.UNAVAILABLE:return"UNAVAILABLE";case vl.SOFTWARE:return"SOFTWARE"
;case vl.OSERR:return"OSERR";case vl.OSFILE:return"OSFILE";case vl.CANTCREAT:return"CANTCREAT";case vl.IOERR:
return"IOERR";case vl.TEMPFAIL:return"TEMPFAIL";case vl.PROTOCOL:return"PROTOCOL";case vl.NOPERM:return"NOPERM"
;case vl.CONFIG:return"CONFIG";case vl.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case vl.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case vl.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case vl.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case vl.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case vl.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case vl.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case vl.WORK_CANCELLED:return"WORK_CANCELLED";case vl.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function B(e){return lc?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${sc?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${ac?`

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
`:""}${oc?`

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
`}function x(e){if(Ja(e))switch(e){case fl.OPTIONS:return"options";case fl.GET:return"get";case fl.POST:return"post"
;case fl.PUT:return"put";case fl.DELETE:return"delete";case fl.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!ja(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function W(e){return p(e)||Ja(e)||Ua(e)||$a(e)
}function V(e){return W(e)||d(e,C(V,v))||q(e)}function q(e){return A(e)&&m(e,p,C(V,v))}function K(e){return v(e)||q(e)}
function z(e){return W(e)||Y(e)||X(e)}function X(e){return A(e)&&m(e,p,C(z,v))}function Y(e){return d(e,C(z,v))}
function Q(e){return A(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===pu.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Ua(r))||A(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===pu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||A(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===pu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||A(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===pu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||A(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===pu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||z(null==e?void 0:e.default));var t,r}function Z(e){return A(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Q))&&(v(null==e?void 0:e.variables)||q(
null==e?void 0:e.variables))}function ee(e){return!(!Z(e)||void 0===Pc.findController(e)&&!(Z(e)&&A(e)&&J(
null==e?void 0:e.name)))}function te(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&I(e,Uc)}
function re(e){if(te(e))return e}function ne(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&I(
e,$c)}function ie(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&I(e,Fc)}function oe(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e)
)return e}(e))&&void 0!==t?t:re(e))&&void 0!==t?t:(t=e,null!==(e=Pc.parseControllerModel(t))&&void 0!==e?e:re(t))}
function se(e){return b(e)&&It(null==e?void 0:e.getName)&&It(null==e?void 0:e.isRunning)&&It(null==e?void 0:e.isStarted
)&&It(null==e?void 0:e.isPaused)&&It(null==e?void 0:e.isCancelled)&&It(null==e?void 0:e.isFinished)&&It(
null==e?void 0:e.isFailed)&&It(null==e?void 0:e.isSuccessful)&&It(null==e?void 0:e.start)&&It(null==e?void 0:e.pause
)&&It(null==e?void 0:e.resume)&&It(null==e?void 0:e.stop)&&It(null==e?void 0:e.destroy)&&It(null==e?void 0:e.toString
)&&It(null==e?void 0:e.toJSON)&&It(null==e?void 0:e.onStarted)&&It(null==e?void 0:e.onPaused)&&It(
null==e?void 0:e.onResumed)&&It(null==e?void 0:e.onCancelled)&&It(null==e?void 0:e.onFailed)&&It(
null==e?void 0:e.onFinished)&&It(null==e?void 0:e.onChanged)}function ae(e){return e instanceof Gc}function le(e){
return e instanceof Hc}function ue(e){return p(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function de(e){return A(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function he(e){return p(e)&&!!e&&"@"===e[0]}
function _e(e){return A(e)&&I(e,["content","type","sender"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function Ee(e){return A(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&K(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function ve(e){try{return function(e){if(!A(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!K(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!he(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!_e(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function pe(e){return A(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||q(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function fe(e){try{return function(e){if(!A(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!q(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!q(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ge(e){return Do([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Te(e){
return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,pe)}function Se(e){try{return function(e){if(!A(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,pe))throw e=Qo(null==e?void 0:e.events,e=>!pe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${fe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function ye(e){return A(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&q(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function me(e){try{return function(e){if(!A(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!Ee(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ve(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Ae(e){return Do([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ne(e){
return A(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,ye)&&Ua(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function we(e){try{return function(e){if(!A(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,ye)){var t=Qo(null==e?void 0:e.events,e=>!ye(e));throw new TypeError(
`Property "events" item was not correct: ${me(t)}`)}if(!Ua(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function Ce(e){
return Do([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function be(e){return A(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,_e)}function Ie(e){return A(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function De(e){return A(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||Te(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||Ne(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Re(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||be(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Ie(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!A(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!Te(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Se(e)}`);if(
!v(null==e?void 0:e.timeline)&&!Ne(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${we(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Re(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!be(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Ie(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return A(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||Ee(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Pe(e){try{return function(e){if(!A(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Le)}function $e(e){try{return function(e){if(!A(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Le))throw e=Qo(
null==e?void 0:e.events,e=>!Le(e)),new TypeError(`Property "events" had invalid item: ${Pe(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return A(e)&&I(e,["invite_state"])&&Ue(
null==e?void 0:e.invite_state)}function Me(e){try{return function(e){if(!A(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Ue(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function ke(e){return A(e)&&I(e,[
"state","timeline","account_data"])&&Te(null==e?void 0:e.state)&&Ne(null==e?void 0:e.timeline)&&be(
null==e?void 0:e.account_data)}function Ge(e){return A(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||N(
null==e?void 0:e.join,ue,De))&&(v(null==e?void 0:e.invite)||N(null==e?void 0:e.invite,ue,Fe))&&(v(null==e?void 0:e.leave
)||N(null==e?void 0:e.leave,ue,ke))}function je(e){try{return function(e){if(!A(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!N(null==e?void 0:e.join,ue,De))throw new TypeError(`Property "join" was invalid: ${R(
null==e?void 0:e.join,ue,De,ce,Oe)}`);if(!v(null==e?void 0:e.invite)&&!N(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${R(null==e?void 0:e.invite,ue,Fe,ce,Me)}`);if(!v(
null==e?void 0:e.leave)&&!N(null==e?void 0:e.leave,ue,ke))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function He(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
_e)}function Be(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function xe(e){return A(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&(v(null==e?void 0:e.left)||d(null==e?void 0:e.left,he))}function Je(
e){try{return function(e){if(!A(e))throw new TypeError(`Value not regular object: ${e}`);if(!I(e,["changed","left"])
)throw new TypeError(`Value properties not right: ${P(e)}`);if(!d(null==e?void 0:e.changed,he))throw new TypeError(
`Property "changed" not valid: ${null==e?void 0:e.changed}`);if(!v(null==e?void 0:e.left)&&!d(null==e?void 0:e.left,he)
)throw new TypeError(`Property "left" not valid: ${null==e?void 0:e.left}`)}(e),"No errors detected"}catch(e){
return e.message}}function We(e){return N(e,p,E)}function Ve(e){try{return function(e){if(!A(e))throw new TypeError(
"value not RegularObject");if(!I(e,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count","org.matrix.msc2732.device_unused_fallback_key_types"]))throw new TypeError(
`value has additional keys: ${P(e)}`);if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Ge(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${je(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!He(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!be(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Be(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
`Property "device_lists" was invalid: ${Je(null==e?void 0:e.device_lists)}`);if(!v(
null==e?void 0:e.device_one_time_keys_count)&&!We(null==e?void 0:e.device_one_time_keys_count))throw new TypeError(
'Property "device_one_time_keys_count" was invalid')}(e),"No errors detected"}catch(e){return e.message}}function qe(e){
return A(e)&&I(e,["display_name","avatar_url"])&&p(null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||$a(
null==e?void 0:e.avatar_url))}function Ke(e){return A(e)&&I(e,["errcode","error","retry_after_ms"])&&function(){switch(
null==e?void 0:e.errcode){case Il.M_USER_IN_USE:case Il.M_INVALID_USERNAME:case Il.M_EXCLUSIVE:case Il.M_FORBIDDEN:
case Il.M_LIMIT_EXCEEDED:return 1;default:return}}()&&p(null==e?void 0:e.error)&&h(null==e?void 0:e.retry_after_ms)}
function ze(e){return encodeURIComponent(e)}async function Xe(e,t,r,n,i){n=D(D({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Cl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}async function Ye(e,t){switch(
t.type){case hl.HTTP:return sc?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(k(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Lc.getJson(r.url,c)))return zc.error(`Failed to load URL "${r.url}": `,o),
pl.RESOURCE_LOAD_FAILED;if(void 0===(s=oe(o)))return zc.error(`Model from URL "${r.url}" was not valid: `,o),
pl.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Kc(t,a,l,Ec,vc)
;let e=Wc.createController(s,u);return zc.info(`Running ${e.getName()} from ${r.url}`),
await Wc.startAndWaitUntilFinished(e),zc.info(`Successfully finished ${e.getName()} from ${r.url}`),pl.OK}catch(e){
return zc.error("Error: ",e),pl.HTTP_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;case hl.LOCAL:return oc?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
bu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=oe(i=JSON.parse(n))))return Xc.warn("Model was not valid: ",i),pl.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new Kc(t,s,a,Ec,vc);let e=Wc.createController(o,l);return Xc.info(`Running ${e.getName(
)} from ${r.path}`),await Wc.startAndWaitUntilFinished(e),Xc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,pl.OK}catch(e){return Xc.error("Error: ",e),pl.LOCAL_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;case hl.MATRIX:
return ac?async function(n,i){var o,s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,y,m,A,N,w;try{td.debug("runMatrixResource: ",i),
f=i.authentication;let t;if(k(f))t=new Qc(`https://${i.homeserver}`,void 0,void 0,f.access_token);else{if(!F(f)
)return pl.UNKNOWN_AUTHENTICATION_TYPE;t=new Qc(`https://${i.homeserver}`),t=await t.login(f.username,f.password)}
let e=t.getUserId();if(!e&&(e=await t.whoami(),!e))return td.error("Could not detect agent user ID"),pl.UNKNOWN_AGENT_ID
;td.info(`Agent user ID: ${e}`);const R=new ed(t,Cl.FI_NOR_AGENT_DTO);if(0===(w=await R.getAll()).length
)return td.debug("Detected no pools available."),pl.NO_WORK_AVAILABLE;g=(1===w.length?(td.debug(
"Detected single pool available. Picking it."),w[0]):(td.debug(
`Detected ${w.length} pools available. Picking one by random.`),w[Math.floor(Math.random()*w.length)])).id,td.info(
`Pool ID: ${g}`);const C=new ed(t,Cl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Cl.FI_NOR_PIPELINE_STATE,"",[g])
;T=await C.getAll(),td.debug("runList = ",T);let r;if(0===T.length)return td.debug("Detected no work available."),
pl.NO_WORK_AVAILABLE;r=1===T.length?(td.debug("Detected single work available. Picking it."),T[0]):(td.debug(
`Detected ${T.length} work items available. Picking one by random.`),T[Math.floor(Math.random()*T.length)]);const b=r.id
;if(void 0!==(null===(o=r)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.agentPoolId)&&void 0!==(null===(a=r
)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.agentAccountId)&&void 0!==(null===(u=r)||void 0===u||null===(
c=u.data)||void 0===c?void 0:c.state))return td.warn(`Work ID was already running: ${b}`),td.debug(
`We'll stop listening the work item: ${b}`),await t.leaveRoom(b),td.debug(`We'll forget the work item now: ${b}`),
await t.forgetRoom(b),pl.CONFLICT;if(td.info(`Work ID: ${b}`),S=D(D({},r.data),{},{agentPoolId:g,agentAccountId:e}),
await C.update(r.id,S),r=await C.findById(r.id),!r)return td.warn(
"The work item disappeared while we were selecting it."),pl.WORK_CANCELLED;if(b!==r.id)return td.error(
`The work item ID conflict: ${b} !== ${r.id}`),pl.CONFLICT;if(g!==(null===(d=r)||void 0===d||null===(h=d.data
)||void 0===h?void 0:h.agentPoolId)||e!==(null===(_=r)||void 0===_||null===(E=_.data
)||void 0===E?void 0:E.agentAccountId))return td.error(""),pl.CONFLICT;if(td.debug(
"Work item secured to us! We can start the job."),void 0===(y=oe(null===(v=r)||void 0===v||null===(p=v.data
)||void 0===p?void 0:p.model)))return td.warn("Work item did not contain correct pipeline model: ",r),
pl.RESOURCE_MODEL_INVALID;m=null==y?void 0:y.parameters,A=null==y?void 0:y.variables,N=new Kc(n,m,A,Ec,vc);try{
let e=Wc.createController(y,N);await Xe(t,C,b,r,e);const I=e.onChanged(()=>{Xe(t,C,b,r,e).catch(e=>{td.error(
"Failed to save controller state: ",e)})});try{await Wc.startAndWaitUntilFinished(e)}finally{I(),await Xe(t,C,b,r,e)}
}finally{await Xe(t,C,b,r,{getStateDTO:()=>({type:ml.NONE,name:"none",state:yl.UNCONSTRUCTED}),toJSON:()=>({type:"none"}
)})}return td.debug(`We'll stop listening the work item now: ${b}`),await t.leaveRoom(b),td.debug(
`We'll forget the work item now: ${b}`),await t.forgetRoom(b),pl.OK}catch(e){return td.error("Error: ",e),
pl.MATRIX_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;default:return pl.UNKNOWN_RESOURCE_TYPE}}function Qe(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,ld)}
function Ze(e){return d(e,p)}function et(e){return d(e,Ze)}function tt(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,dd)}function rt(e){return Z(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||N(r,n,i))&&I(e,Ed);var t,r,n,i}function nt(e){return Z(e)&&J(null==e?void 0:e.name
)&&z(null==e?void 0:e.file)&&(v(null==e?void 0:e.content)||z(null==e?void 0:e.content))&&f(null==e?void 0:e.target)&&f(
null==e?void 0:e.output)&&f(null==e?void 0:e.default)&&I(e,gd)}function it(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,yd)}function ot(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.git)&&f(null==e?void 0:e.url)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.message)&&f(
null==e?void 0:e.cwd)&&I(e,Nd)}function st(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.assert)&&(v(
null==e?void 0:e.equals)||z(null==e?void 0:e.equals))&&I(e,Rd)}function at(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.concat)&&I(e,Id)}async function lt(e,t){t=t.id,Ld.info(`Pool ID: ${t}`);const r=new ed(e,
Cl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Cl.FI_NOR_PIPELINE_STATE,"",[t]);return t=await r.getAll(),Ld.debug("runList = ",t)
,0!==t.length?(Ld.debug("Detected work available."),pl.OK):(Ld.debug("No work available."),pl.NO_WORK_AVAILABLE)}
async function ut(r,e){return 0===e.length?(Ld.debug("checkIfAnyPoolHasWork: Detected no pools available."),
pl.NO_WORK_AVAILABLE):1===e.length?(Ld.debug("checkIfAnyPoolHasWork: Detected single pool available. Checking it."),lt(r
,e[0])):(Ld.debug(`checkIfAnyPoolHasWork: Detected ${e.length} pools available.`),is(e,async(e,t)=>(e=await e,Ld.debug(
`checkIfAnyPoolHasWork: Result: ${e}`),e===pl.OK?pl.OK:(Ld.debug(`checkIfAnyPoolHasWork: Checking pool ${t.id}`),lt(r,t)
)),Promise.resolve(pl.NO_WORK_AVAILABLE)))}var ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,yt,mt,At,Nt,wt,Rt,Ct,bt,It,Dt,Ot,Lt,Pt,
Ut,$t,Ft,Mt,kt,Gt,jt,Ht,Bt,xt,Jt,Wt,Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,
Sr,yr,mr,Ar,Nr,wr,Rr,Cr,br,Ir,Dr,Or,Lr,Pr,Ur,$r,Fr,Mr,kr,Gr,jr,Hr,Br,xr,Jr,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,
an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,yn,mn,An,Nn,wn,Rn,Cn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,Mn,kn,Gn,jn,Hn,Bn,xn,Jn,Wn,Vn,
qn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,yi,mi,Ai,Ni,wi,Ri,Ci,bi,Ii,Di,Oi,Li,
Pi,Ui,$i,Fi,Mi,ki,Gi,ji,Hi,Bi,xi,Ji,Wi,Vi,qi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,
So,yo,mo,Ao,No,wo,Ro,Co,bo,Io,Do,Oo,Lo,Po,Uo,$o,Fo,Mo,ko,Go,jo,Ho,Bo,xo,Jo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,
ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,ys,ms,As,Ns,ws,Rs,Cs,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,Ms,ks,Gs,js,Hs,Bs,xs,Js,Ws,
Vs,qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,ya,ma,Aa,Na,wa,Ra,Ca,ba,Ia,Da,Oa,
La,Pa,Ua,$a,Fa,Ma,ka,Ga,ja,Ha,Ba,xa,Ja,Wa,Va,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,
gl,Tl,Sl,yl,ml,Al,Nl,wl,Rl,Cl,bl,Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,Ml,kl,Gl,jl,Hl,Bl,xl,Jl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,
iu,ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu,pu,fu,gu,Tu,Su,yu,mu,Au,Nu,wu,Ru,Cu,bu=require("fs"),Iu=require("querystring"),
Du=require("url"),Ou=require("path"),Lu=require("child_process"),Pu=require("crypto"),Uu=e(bu),$u=t(Iu),Fu=e(Du),Mu=e(Ou
),ku=e(Pu),
Gu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ju=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Hu=function(){
this.__data__=[],this.size=0},Bu=function(e,t){return e===t||e!=e&&t!=t},xu=Bu,Ju=function(e,t){for(var r=e.length;r--;
)if(xu(e[r][0],t))return r;return-1},Wu=Ju,Vu=Array.prototype,qu=Vu.splice,Ku=Ju,zu=Ju,Xu=Ju,Yu=Hu,Qu=function(e){
var t=this.__data__;return!((e=Wu(t,e))<0||(e==t.length-1?t.pop():qu.call(t,e,1),--this.size,0))},Zu=function(e){
var t=this.__data__;return(e=Ku(t,e))<0?void 0:t[e][1]},ec=function(e){return-1<zu(this.__data__,e)},tc=function(e,t){
var r=this.__data__,n=Xu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Yu,
r.prototype.delete=Qu,r.prototype.get=Zu,r.prototype.has=ec,r.prototype.set=tc,gt=Ql=r,Zl=function(){
this.__data__=new gt,this.size=0},na=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Xl=function(e){return this.__data__.get(e)},Yl=function(e){return this.__data__.has(e)},
nu=eu="object"==typeof Gu&&Gu&&Gu.Object===Object&&Gu,ou="object"==typeof self&&self&&self.Object===Object&&self,Or=iu=(
ds=nu||ou||Function("return this")()).Symbol,Zs=Object.prototype,Tt=Zs.hasOwnProperty,St=Zs.toString,
yt=Or?Or.toStringTag:void 0,Lr=Object.prototype,mt=Lr.toString,At=function(e){var t,r,n=Tt.call(e,yt),i=e[yt];try{t=!(
e[yt]=void 0)}catch(e){}return r=St.call(e),t&&(n?e[yt]=i:delete e[yt]),r},Nt=function(e){return mt.call(e)},wt=(ra=iu
)?ra.toStringTag:void 0,Ct=su=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
wt&&wt in Object(e)?At:Nt)(e)},bt=Rt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
It=function(e){return!!bt(e)&&("[object Function]"==(e=Ct(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Pr=ds["__core-js_shared__"],
zl=/[^.]+$/.exec((or=Pr)&&or.keys&&or.keys.IE_PROTO||""),Dt=zl?"Symbol(src)_1."+zl:"",sr=Function.prototype,
Ot=sr.toString,Lt=It,Pt=function(e){return!!Dt&&Dt in e},Ut=Rt,$t=nn=function(e){if(null!=e){try{return Ot.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Ur=/[\\^$.*+?()[\]{}|]/g,Ft=/^\[object .+?Constructor\]$/,
ia=Function.prototype,Iu=Object.prototype,Du=ia.toString,Ou=Iu.hasOwnProperty,Mt=RegExp("^"+Du.call(Ou).replace(Ur,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=function(e){return!(!Ut(e
)||Pt(e))&&(Lt(e)?Mt:Ft).test($t(e))},Gt=function(e,t){return null==e?void 0:e[t]},Vu=(Pu=function(e,t){return t=Gt(e,t)
,kt(t)?t:void 0})(ds,"Map"),Ju=Pu(Object,"create"),Ht=jt=Hu=Ju,Nu=Object.prototype,Bt=Nu.hasOwnProperty,xt=Hu,
wu=Object.prototype,Jt=wu.hasOwnProperty,Wt=Hu,Ru=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Cu=function(e){var t,r=this.__data__;return Ht?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Bt.call(r,e)?r[e]:void 0},Yu=function(e){var t=this.__data__;return xt?void 0!==t[e]:Jt.call(t,e)},
Qu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Wt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=jt?jt(null):{},this.size=0},i.prototype.delete=Ru,i.prototype.get=Cu,
i.prototype.has=Yu,i.prototype.set=Qu,Vt=i,qt=Ql,Kt=Vu,Zu=function(){this.size=0,this.__data__={hash:new Vt,map:new(
Kt||qt),string:new Vt}},zt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Zt=Qt=Yt=Xt=function(e,t){
return e=e.__data__,zt(t)?e["string"==typeof t?"string":"hash"]:e.map},ec=function(e){return e=Xt(this,e).delete(e),
this.size-=e?1:0,e},tc=function(e){return Yt(this,e).get(e)},Gu=function(e){return Qt(this,e).has(e)},eu=function(e,t){
var r=Zt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Zu,o.prototype.delete=ec,
o.prototype.get=tc,o.prototype.has=Gu,o.prototype.set=eu,tr=Vu,rr=ou=o,nr=er=Ql,us=na,Zs=Xl,Or=Yl,Lr=function(e,t){var r
,n=this.__data__;if(n instanceof er){if(r=n.__data__,!tr||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new rr(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Zl,s.prototype.delete=us,
s.prototype.get=Zs,s.prototype.has=Or,s.prototype.set=Lr,ra=s,ir=ou,Pr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Pr,ar=or=a,lr=zl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},ur=sr=function(e,t){return e.has(t)},ia=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new ar:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!lr(t,function(e,t){if(!ur(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Iu=ds.Uint8Array,cr=Iu,dr=Bu,hr=ia,_r=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},Er=Du=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Ur=(Ou=iu)?Ou.prototype:void 0,vr=Ur?Ur.valueOf:void 0,Ju=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new cr(e),new cr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return dr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=_r;case"[object Set]":return l=l||Er,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=hr(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(vr)return vr.call(e)==vr.call(t)}return!1},Nu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},wu=Array.isArray,fr=Nu,gr=pr=wu,Hu=function(e,t,r){
return t=t(e),gr(e)?t:fr(t,r(e))},Tr=Ru=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Cu=Object.prototype,Sr=Cu.propertyIsEnumerable,Yu=(yr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Tr(yr(t),function(e){return Sr.call(t,e)}))}:function(){return[]},Qu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},mr=su,Zu=function(e){return Ar(e)&&"[object Arguments]"==mr(e)},
Nr=Ar=ec=function(e){return null!=e&&"object"==typeof e},tc=Object.prototype,wr=tc.hasOwnProperty,
Rr=tc.propertyIsEnumerable,Gu=Zu(function(){return arguments}())?Zu:function(e){return Nr(e)&&wr.call(e,"callee"
)&&!Rr.call(e,"callee")},eu=ds,Ql=function(){return!1},eu=(eu=(Zl=(Yl=(Zl=(Yl=(Xl=na={exports:{}}).exports
)&&!Yl.nodeType&&Yl)&&Xl&&!Xl.nodeType&&Xl)&&Yl.exports===Zl)?eu.Buffer:void 0)?eu.isBuffer:void 0,Xl.exports=Ql=eu||Ql,
Cr=/^(?:0|[1-9]\d*)$/,us=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Cr.test(e))&&-1<e&&e%1==0&&e<t},br=su,Ir=Zs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Dr=ec,Or="[object Arguments]",Lr="[object Array]",
Pr="[object Boolean]",Iu="[object Date]",Ou="[object Error]",Ur="[object Function]",wu="[object Map]",
tc="[object Object]",Zu="[object RegExp]",Yl="[object Set]",Zl="[object String]",eu="[object WeakMap]",
Xl="[object ArrayBuffer]",Ql="[object DataView]",($r={}
)["[object Float32Array]"]=$r["[object Float64Array]"]=$r["[object Int8Array]"]=$r["[object Int16Array]"]=$r["[object Int32Array]"]=$r["[object Uint8Array]"]=$r["[object Uint8ClampedArray]"]=$r["[object Uint16Array]"]=$r["[object Uint32Array]"]=!0
,
$r[Or]=$r[Lr]=$r[Xl]=$r[Pr]=$r[Ql]=$r[Iu]=$r[Ou]=$r[Ur]=$r[wu]=$r["[object Number]"]=$r[tc]=$r[Zu]=$r[Yl]=$r[Zl]=$r[eu]=!1
,Cu=function(e){return Dr(e)&&Ir(e.length)&&!!$r[br(e)]},tc=function(t){return function(e){return t(e)}},Zu=nu,eu=(eu=(
Zl=Yl={exports:{}}).exports)&&!eu.nodeType&&eu,eu=(tu=eu&&Zl&&!Zl.nodeType&&Zl)&&tu.exports===eu,ru=eu&&Zu.process,
Zu=function(){try{return tu&&tu.require&&tu.require("util").types||ru&&ru.binding&&ru.binding("util")}catch(e){}}(),
Zl.exports=Zu,nu=Cu,Zu=(Zl=(eu=Yl.exports)&&eu.isTypedArray)?tc(Zl):nu,Fr=Qu,Mr=Gu,kr=pr,Gr=na.exports,jr=us,Hr=Cu=Zu,
eu=Object.prototype,Br=eu.hasOwnProperty,Zl=function(e,t){var r,n=kr(e),i=!n&&Mr(e),o=!n&&!i&&Gr(e),s=!n&&!i&&!o&&Hr(e),
a=n||i||o||s,l=a?Fr(e.length,String):[],u=l.length;for(r in e)!t&&!Br.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||jr(r,u))||l.push(r);return l},
xr=Object.prototype,nu=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||xr)},
mu=Object.keys,Au=Object,Jr=nu,Wr=function(e){return mu(Au(e))},Zu=Object.prototype,Vr=Zu.hasOwnProperty,qr=It,Kr=Zs,
zr=Zl,Xr=function(e){var t,r;if(!Jr(e))return Wr(e);for(r in t=[],Object(e))Vr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Yr=eu=function(e){return null!=e&&Kr(e.length)&&!qr(e)},Qr=Hu,Zr=Yu,en=nu=function(e){return(Yr(e)?zr:Xr)(e)}
,tn=function(e){return Qr(e,en,Zr)},Qu=Object.prototype,rn=Qu.hasOwnProperty,Zu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=tn(e),T=g.length;if(T!=tn(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:rn.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Zl=Pu(ds,
"DataView"),Hu=Vu,Yu=Pu(ds,"Promise"),Vu=Qu=Pu(ds,"Set"),ds=Pu(ds,"WeakMap"),on=su,an="[object Map]",
ln="[object Promise]",un="[object Set]",cn="[object WeakMap]",dn="[object DataView]",hn=(sn=nn)(nn=Zl),_n=sn(Hu),En=sn(
Yu),vn=sn(Vu),pn=sn(ds),Zl=on,(nn&&Zl(new nn(new ArrayBuffer(1)))!=dn||Hu&&Zl(new Hu)!=an||Yu&&Zl(Yu.resolve()
)!=ln||Vu&&Zl(new Vu)!=un||ds&&Zl(new ds)!=cn)&&(Zl=function(e){var t=on(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?sn(e):"")switch(e){case hn:return dn;case _n:return an;case En:return ln
;case vn:return un;case pn:return cn}return t}),fn=ra,gn=ia,Tn=Ju,Sn=Zu,yn=Zl,mn=pr,An=na.exports,Nn=Cu,
wn="[object Arguments]",Rn="[object Array]",Cn="[object Object]",Vu=Object.prototype,bn=Vu.hasOwnProperty,In=function(e,
t,r,n,i,o){var s,a,l=mn(e),u=mn(t),c=l?Rn:yn(e),d=u?Rn:yn(t),h=(c=c==wn?Cn:c)==Cn,u=(d=d==wn?Cn:d)==Cn;if((d=c==d)&&An(e
)){if(!An(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new fn,l||Nn(e)?gn(e,t,r,n,i,o):Tn(e,t,c,r,n,i,o)):1&r||(
s=h&&bn.call(e,"__wrapped__"),a=u&&bn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new fn,Sn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new fn)},On=ra,Ln=ds=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Dn(t)&&!Dn(r
)?t!=t&&r!=r:In(t,r,n,i,e,o))},Pn=Rt,Un=ia=function(e){return e==e&&!Pn(e)},$n=nu,Fn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new On,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Ln(a,s,3,n,l):u))return!1;return!0},Mn=function(e){for(var t,r,n=$n(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Un(r)];return n},kn=Ju=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Zu=function(t){var r=Mn(t);return 1==r.length&&r[0][2]?kn(r[0][0],r[0][1]):function(e){return e===t||Fn(e,t,r)}},Gn=su,
jn=Dn=ec,Hn=pr,Bn=Zl=function(e){return"symbol"==typeof e||jn(e)&&"[object Symbol]"==Gn(e)},
xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jn=/^\w*$/,na=function(e,t){if(Hn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Bn(e))||Jn.test(e)||!xn.test(e)||null!=t&&e in Object(t)},
Wn=ou,Vn="Expected a function",l.Cache=Wn,
qn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kn=/\\(\\)?/g,Yu=0
,yu=(Yu=l(Yu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(qn,function(e,t,r,n){i.push(
r?n.replace(Kn,"$1"):t||e)}),i},function(e){return 500===yu.size&&yu.clear(),e})).cache,zn=ju,ra=(Vu=iu
)?Vu.prototype:void 0,Qn=ra?ra.toString:void 0,Zn=ou=function e(t){if("string"==typeof t)return t;if(Xn(t))return zn(t,e
)+"";if(Yn(t))return Qn?Qn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ri=Yu,ni=Vu=function(e){
return null==e?"":Zn(e)},ii=Yn=Zl,ui=oi=ra=function(e,t){return ei(e)?e:ti(e,t)?[e]:ri(ni(e))},ci=Gu,_i=Zs,vi=function(e
,t){return null!=e&&t in Object(e)},pi=Cu=function(e,t,r){for(var n,i,o=(t=ui(t,e)).length,s=!(n=-1);++n<o&&(i=Ei(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&_i(o)&&hi(i,o)&&(di(e)||ci(e))},fi=ds,
gi=li=function(e,t,r){return void 0===(t=null==e?void 0:ai(e,t))?r:t},Ti=function(e,t){return null!=e&&pi(e,t,vi)},yi=ia
,mi=Ju,Ni=ai=Zs=function(e,t){for(var r=0,n=(t=oi(t,e)).length;null!=e&&r<n;)e=e[si(t[r++])];return r&&r==n?e:void 0},
wi=function(t){return function(e){return null==e?void 0:e[t]}},Ri=function(t){return function(e){return Ni(e,t)}},
Ci=Si=ti=na,bi=Ai=Ei=si=ds=function(e){if("string"==typeof e||ii(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Ii=Zu,Di=function(r,n){return Si(r)&&yi(n)?mi(Ai(r),n):function(e){var t=gi(e,r);return void 0===t&&t===n?Ti(e,r):fi(n,t
,3)}},Oi=ia=function(e){return e},Li=di=ei=Xn=pr,Pi=function(e){return Ci(e)?wi(bi(e)):Ri(e)},Ui=na=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},$i=nu,Gi=ju,Hi=na=function(e,n){
var i=-1,o=ki(e)?Array(e.length):[];return Mi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},xi=function(e,t){return(Bi(e)?Gi:Hi
)(e,ji(t))},Wi=Bu,Vi=ki=Fi=eu,qi=hi=us,Ki=Rt,zi=zl,Yi=function(e,n){var i;return Ji(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},eo=function(e,t,r){var n=Qi(e)?zi:Yi;return r&&Zi(e,t,r)&&(t=void 0),n(e,Xi(t))},to=Ji=Mi=zl=Zu=function(e,t){
if(null==e)return e;if(!Fi(e))return e&&Ui(e,t,$i);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},ro=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},no=function(e,n){
var i=!0;return to(e,function(e,t,r){return i=!!n(e,t,r)}),i},io=Xi=ji=Ju=function(e){
return"function"==typeof e?e:null==e?Oi:"object"==typeof e?Li(e)?Di(e[0],e[1]):Ii(e):Pi(e)},oo=Qi=Bi=pr,
so=Zi=Zu=function(e,t,r){if(!Ki(r))return!1;var n=typeof t;return!!("number"==n?Vi(r)&&qi(t,r.length
):"string"==n&&t in r)&&Wi(r[t],e)},ao=function(e,t,r){var n=oo(e)?ro:no;return r&&so(e,t,r)&&(t=void 0),n(e,io(t))},
lo=Pu,Pu=function(){try{var e=lo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),uo=Pu,co=function(e,t,r){
"__proto__"==t&&uo?uo(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},ho=Bu,Bu=Object.prototype,
_o=Bu.hasOwnProperty,Eo=function(e,t,r){var n=e[t];_o.call(e,t)&&ho(n,r)&&(void 0!==r||t in e)||co(e,t,r)},vo=ra,po=us,
go=ds,To=function(e,t,r,n){var i,o,s,a,l,u,c;if(!fo(e))return e;for(i=-1,s=(o=(t=vo(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=go(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=fo(c)?c:po(t[i+1])?[]:{})),Eo(a,l,u),a=a[l]}return e},So=function(e,t,r){return null==e?e:To(e,t,r)},yo=Gu
,Ao=(Bu=iu)?Bu.isConcatSpreadable:void 0,wo=function(e){return mo(e)||yo(e)||!!(Ao&&e&&e[Ao])},Ro=No=Nu,
Co=ra=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||wo,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):No(o,s
):i||(o[o.length]=s);return o},bo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
Io=mo=pr,Do=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return Ro(Io(t)?bo(t):[t],Co(e,1))},Oo=Ju,Lo=eu,Po=nu,us=function(o){return function(e,t,r){var n,
i=Object(e);return Lo(e)||(n=Oo(t),e=Po(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
ds=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Uo=/\s/,$o=function(
e){for(var t=e.length;t--&&Uo.test(e.charAt(t)););return t},Fo=/^\s+/,Mo=Gu=function(e){return e&&e.slice(0,$o(e)+1
).replace(Fo,"")},ko=fo=Rt,Go=Zl,jo=/^[-+]0x[0-9a-f]+$/i,Ho=/^0b[01]+$/i,Bo=/^0o[0-7]+$/i,xo=parseInt,Jo=function(e){
var t;return"number"==typeof e?e:Go(e)?NaN:(ko(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=ko(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Mo(e),(t=Ho.test(e))||Bo.test(e)?xo(e.slice(2),t?2:8):jo.test(e)?NaN:+e))},
Wo=17976931348623157e292,Vo=function(e){return e?(e=Jo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Wo:0===e?e:0},qo=ds,Ko=Ju
,zo=iu=function(e){var t=Vo(e),e=t%1;return t==t?e?t-e:t:0},Xo=Math.max,Bu=us(Yo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:zo(r))<0&&(r=Xo(n+r,0)),qo(e,Ko(t),r)):-1}),Qo=Bu,Zo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},es=zl,ts=Ju,rs=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},ns=pr,is=function(e,t,r){var n=ns(e)?Zo:rs,i=arguments.length<3
;return n(e,ts(t),r,i,es)},Nu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},os=ds,ss=function(e){return e!=e},as=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},ls=eu=function(e,t,r){return t==t?as(e,t,r):os(e,ss,r)},
us=function(e,t){return!(null==e||!e.length)&&-1<ls(e,t,0)},Bu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},ds=function(){},ds=(cs=Qu)&&1/Du(new cs([,-0]))[1]==1/0?function(e){return new cs(e)
}:ds,hs=or,_s=us,Es=Bu,vs=sr,ps=ds,fs=Du,gs=function(e,t,r){var n,i,o,s,a=-1,l=_s,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=Es;else if(200<=u){if(n=t?null:ps(e))return fs(n);c=!1,l=vs,h=new hs}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},Ts=function(e){return e&&e.length?gs(e):[]},Ss=Zl,ys=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=Ss(e),s=void 0!==t,a=null===t,l=t==t,u=Ss(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},ms=ju,As=Zs,Ns=Ju,ws=na,Rs=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Cs=tc,bs=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=ys(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},Is=ia,Ds=pr,Zl=function(e,n,r){var i;return n=n.length?ms(n
,function(t){return Ds(t)?function(e){return As(e,1===t.length?t[0]:t)}:t}):[Is],i=-1,n=ms(n,Cs(Ns)),e=ws(e,function(t,e
,r){return{criteria:ms(n,function(e){return e(t)}),index:++i,value:t}}),Rs(e,function(e,t){return bs(e,t,r)})},
Os=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ls=Math.max,Zs=function(o,s,a){return s=Ls(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ls(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Os(o,this,e)}},Ps=function(e){return function(){return e}},Us=Pu,
$s=Date.now,gu=Us?function(e,t){return Us(e,"toString",{configurable:!0,enumerable:!1,value:Ps(t),writable:!0})}:ia,
Fs=ra,Ms=Zl,ks=Zu,(na=function(){var e=$s(),t=16-e+ +Su;if(Su=e,0<t){if(800<=++Tu)return arguments[0]}else Tu=0
;return gu.apply(void 0,arguments)})(Zs(Du=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ks(e,t[0],t[1]
)?t=[]:2<r&&ks(t[0],t[1],t[2])&&(t=[t[0]]),Ms(e,Fs(t,1),[])},void(Su=Tu=0),ia),Du+""),js=Ru,Hs=function(e,n){var i=[]
;return Gs(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Bs=Ju,Js=function(e,t){return(xs(e)?js:Hs)(e,Bs(t))},Ws=ia,
Vs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},qs=Gs=zl,Ks=function(e){
return"function"==typeof e?e:Ws},zs=xs=pr,Xs=function(e,t){return(zs(e)?Vs:qs)(e,Ks(t))},Ys=Nu,Pu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Ys(e,t,r)},Qs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Zs=function(e){return Qs.test(e)}
,ea=su,ta=ec,na=function(e){return ta(e)&&"[object RegExp]"==ea(e)},Ru=(Zl=(ra=Yl.exports)&&ra.isRegExp)?tc(Zl):na,
Ju=function(e){return e.split("")},zl="["+(ia="\\ud800-\\udfff")+"]",tc=(Nu="[\\ufe0e\\ufe0f]?")+(tc="(?:"+(
Yl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(ra="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
Zl="[^"+ia+"]",na="(?:\\ud83c[\\udde6-\\uddff]){2}",ia="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+Nu+tc+")*",
zl="(?:"+[Zl+Yl+"?",Yl,na,ia,zl].join("|")+")",oa=RegExp(ra+"(?="+ra+")|"+zl+tc,"g"),sa=Ju,la=function(e){
return e.match(oa)||[]},da=aa=Zs,ha=Zu,_a=Ru,pa=function(e,t,r){return r&&"number"!=typeof r&&ha(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=va(e))&&("string"==typeof t||null!=t&&!_a(t))&&!(t=ua(t))&&da(e)?ca(Ea(e),0,r
):e.split(t,r):[]},ga=fa=eu,Ta=ua=ou,Sa=Gu,ya=ca=Pu,ma=function(e,t){for(var r=e.length;r--&&-1<fa(t,e[r],0););return r}
,Aa=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<ga(t,e[r],0););return r},Na=Ea=function(e){return(aa(e)?la:sa)(e)},
wa=va=Vu,Ra=function(e,t,r){return(e=wa(e))&&(r||void 0===t)?Sa(e):e&&(t=Ta(t))?(r=Na(e),e=Na(t),t=Aa(r,e),e=ma(r,e)+1,
ya(r,t,e).join("")):e},Pu=Object.prototype,Ca=Pu.hasOwnProperty,ba=function(e,t){return null!=e&&Ca.call(e,t)},Ia=Cu,
Da=function(e,t){return null!=e&&Ia(e,t,ba)},Pa="[object Boolean]",Ua=function(e){return!0===e||!1===e||La(e)&&Oa(e)==Pa
},$a=function(e){return null===e},Ma=pr,Ga="[object String]",ja=function(e){return"string"==typeof e||!Ma(e)&&ka(e)&&Fa(
e)==Ga},Ha=Fa=Oa=su,Ba=ka=La=ec,xa="[object Number]",Ja=function(e){return"number"==typeof e||Ba(e)&&Ha(e)==xa},
Va=function(e){return"number"==typeof e&&e==Wa(e)},Ya=function(e,t,r){return e=Xa(e),r=null==r?0:qa(za(r),0,e.length),
t=Ka(t),e.slice(r,r+t.length)==t},Qa=qa=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Za=Ka=ou,el=za=Wa=iu,tl=Xa=Vu,rl=function(e,t,r){var n;return e=tl(e),t=Za(t),n=e.length,n=r=void 0===r?n:Qa(el(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},nl=ju,il=function(t,e){return nl(e,function(e){return t[e]})},ol=nu,sl=function(e
){return null==e?[]:il(e,ol(e))},su=Array.prototype,al=su.join,ll=function(e,t){return null==e?"":al.call(e,t)},(
ec=ul={})[ec.DEBUG=0]="DEBUG",ec[ec.INFO=1]="INFO",ec[ec.WARN=2]="WARN",ec[ec.ERROR=3]="ERROR",ec[ec.NONE=4]="NONE",
cl=ul;const rc=null!==(ou=L("1.0.5"))&&void 0!==ou?ou:"?";Vu=null!==(iu=L(""))&&void 0!==iu?iu:"io.nor.fi",nu=null!==(
ju=L(""))&&void 0!==ju?ju:"nor-pipeline-runner",ec=null!==(su=L(""))&&void 0!==su?su:"",iu=null!==(ou=L("")
)&&void 0!==ou?ou:"";const nc=null!==(ju=L("production"))&&void 0!==ju?ju:"development",ic=null!==(su=L(
"2021-09-10T10:19:17.420Z"))&&void 0!==su?su:"";ju=null!==(ou=L(""))&&void 0!==ou?ou:"${",ou=null!==(su=L("")
)&&void 0!==su?su:"}";const oc=null===(su=O(""))||void 0===su||su,sc=null===(su=O(""))||void 0===su||su,ac=null===(su=O(
""))||void 0===su||su,lc=null===(su=O(""))||void 0===su||su;su="production"===nc;const uc="test"===nc,cc=!su&&!uc
;ec=null!==(ct=function(e){if(e){if(function(){switch(e){case ul.DEBUG:case ul.INFO:case ul.WARN:case ul.ERROR:
case ul.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ul.DEBUG
;case"INFO":return ul.INFO;case"WARN":case"WARNING":return ul.WARN;case"ERR":case"ERROR":return ul.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return ul.NONE;default:return}}}(null!==(ct=L(null===(su=process
)||void 0===su||null===(ct=su.env)||void 0===ct?void 0:ct.PIPELINE_LOG_LEVEL))&&void 0!==ct?ct:L(ec))
)&&void 0!==ct?ct:cl.INFO;const dc=null!==(dt=L(null===(ct=process)||void 0===ct||null===(dt=ct.env
)||void 0===dt?void 0:dt.PIPELINE_SERVER))&&void 0!==dt?dt:nu,hc=null!==(ht=function(e){if(void 0!==e)return`${e}`}(
null===(nu=process)||void 0===nu||null===(ht=nu.env)||void 0===ht?void 0:ht.PIPELINE_AUTHENTICATION))&&void 0!==ht?ht:iu
,_c=null!==(_t=L(null===(iu=process)||void 0===iu||null===(_t=iu.env)||void 0===_t?void 0:_t.PIPELINE_SERVER)
)&&void 0!==_t?_t:Vu,Ec=null!==(Et=L(null===(Vu=process)||void 0===Vu||null===(Et=Vu.env
)||void 0===Et?void 0:Et.PIPELINE_VARIABLE_PREFIX))&&void 0!==Et?Et:ju,vc=null!==(vt=L(null===(ju=process
)||void 0===ju||null===(vt=ju.env)||void 0===vt?void 0:vt.PIPELINE_VARIABLE_SUFFIX))&&void 0!==vt?vt:ou;class pc{
constructor(e,t){u(this,"_logger",void 0),u(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class fc{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case ul.DEBUG:return"DEBUG";case ul.INFO:return"INFO";case ul.WARN:return"WARN";case ul.ERROR:return"ERROR"
;case ul.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=cl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=cl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=cl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=cl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new pc(e,fc)}}u(fc,"Level",cl),u(fc,"_level",cl.DEBUG),u(fc,"_logger",console),(ou=dl={}
)[ou.HTTP=0]="HTTP",ou[ou.LOCAL=1]="LOCAL",ou[ou.MATRIX=2]="MATRIX",hl=dl,(ou=_l={})[ou.NONE=0]="NONE",
ou[ou.BASIC_AUTH=1]="BASIC_AUTH",ou[ou.BEARER_AUTH=2]="BEARER_AUTH",El=_l;class gc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:M(e):null!==(r=G(e,t))&&void 0!==r?r:M(e,t)}}
const Tc=fc.createLogger("MatrixRunnerResource");class Sc{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return A(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===hl.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=Ra(`${e}`)
).toLowerCase(),Ya(t,"http:")||Ya(t,"https:")?(t=new URL(e),t=null!==(t=gc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:gc.parseRunnerAuthentication(hc),{type:hl.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return A(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===hl.LOCAL&&p(null==t?void 0:t.path)?e:(e=Ra(`${e}`),(e=Ya(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&Uu.default.existsSync(e)?{type:hl.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(A(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===hl.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=Ra(
`${i}`),Tc.debug(`value: '${i}'`);let e=i.toLowerCase();if(Tc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),Tc.debug(`lowerCaseValue: '${e}'`),Ya(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),Tc.debug(`url: '${s}': `,s),o=null!==(o=gc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:gc.parseRunnerAuthentication(hc),Tc.debug(
"auth: ",o);const e=`${s.host}`;Tc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),Tc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return Tc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,Tc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",Tc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,Tc.debug(`pool: '${s}'`),{type:hl.MATRIX,homeserver:e,pool:s,
authentication:o}}Ya(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Ya(e,"!")||Ya(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${_c}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||hc,r=r||_c,{type:hl.MATRIX,homeserver:r,pool:n,
authentication:gc.parseRunnerAuthentication(t)}}}(e)}}(ou=vl={})[ou.OK=0]="OK",ou[ou.GENERAL_ERRORS=1]="GENERAL_ERRORS",
ou[ou.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",ou[ou.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
ou[ou.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",ou[ou.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
ou[ou.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",ou[ou.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
ou[ou.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",ou[ou.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
ou[ou.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",ou[ou.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
ou[ou.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",ou[ou.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
ou[ou.FATAL_ERROR=14]="FATAL_ERROR",ou[ou.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
ou[ou.WORK_CANCELLED=16]="WORK_CANCELLED",ou[ou.CONFLICT=17]="CONFLICT",ou[ou.NO_WORK_AVAILABLE=18]="NO_WORK_AVAILABLE",
ou[ou.USAGE=64]="USAGE",ou[ou.DATAERR=65]="DATAERR",ou[ou.NOINPUT=66]="NOINPUT",ou[ou.NOUSER=67]="NOUSER",
ou[ou.NOHOST=68]="NOHOST",ou[ou.UNAVAILABLE=69]="UNAVAILABLE",ou[ou.SOFTWARE=70]="SOFTWARE",ou[ou.OSERR=71]="OSERR",
ou[ou.OSFILE=72]="OSFILE",ou[ou.CANTCREAT=73]="CANTCREAT",ou[ou.IOERR=74]="IOERR",ou[ou.TEMPFAIL=75]="TEMPFAIL",
ou[ou.PROTOCOL=76]="PROTOCOL",ou[ou.NOPERM=77]="NOPERM",ou[ou.CONFIG=78]="CONFIG",
ou[ou.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
ou[ou.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",ou[ou.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
ou[ou.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
ou[ou.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
ou[ou.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",pl=vl,(ou=fl={})[ou.OPTIONS=0]="OPTIONS",
ou[ou.GET=1]="GET",ou[ou.POST=2]="POST",ou[ou.PUT=3]="PUT",ou[ou.DELETE=4]="DELETE",ou[ou.PATCH=5]="PATCH",au=fl
;const yc="WINDOW"===(lu=null!==(lu=null!==(pt=null===(ou=process)||void 0===ou||null===(pt=ou.env
)||void 0===pt?void 0:pt.NOR_REQUEST_CLIENT_MODE)&&void 0!==pt?pt:null===(lu=process)||void 0===lu||null===(ft=lu.env
)||void 0===ft?void 0:ft.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==lu?lu:"")||!("undefined"==typeof window||!window.fetch
),mc="NODE"===lu||!yc;class Ac{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await Ac.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await Ac.getRequestDataAsString(e)))return $u.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await Ac.getRequestDataAsString(e)))return JSON.parse(e)}}(lu=gl={}
)[lu.Continue=100]="Continue",lu[lu.SwitchingProtocols=101]="SwitchingProtocols",lu[lu.Processing=102]="Processing",
lu[lu.CheckPoint=103]="CheckPoint",lu[lu.OK=200]="OK",lu[lu.Created=201]="Created",lu[lu.Accepted=202]="Accepted",
lu[lu.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",lu[lu.NoContent=204]="NoContent",
lu[lu.ResetContent=205]="ResetContent",lu[lu.PartialContent=206]="PartialContent",lu[lu.MultiStatus=207]="MultiStatus",
lu[lu.AlreadyReported=208]="AlreadyReported",lu[lu.IMUsed=226]="IMUsed",lu[lu.MultipleChoices=300]="MultipleChoices",
lu[lu.MovedPermanently=301]="MovedPermanently",lu[lu.Found=302]="Found",lu[lu.SeeOther=303]="SeeOther",
lu[lu.NotModified=304]="NotModified",lu[lu.TemporaryRedirect=307]="TemporaryRedirect",
lu[lu.PermanentRedirect=308]="PermanentRedirect",lu[lu.BadRequest=400]="BadRequest",
lu[lu.Unauthorized=401]="Unauthorized",lu[lu.PaymentRequired=402]="PaymentRequired",lu[lu.Forbidden=403]="Forbidden",
lu[lu.NotFound=404]="NotFound",lu[lu.MethodNotAllowed=405]="MethodNotAllowed",lu[lu.NotAcceptable=406]="NotAcceptable",
lu[lu.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",lu[lu.RequestTimeout=408]="RequestTimeout",
lu[lu.Conflict=409]="Conflict",lu[lu.Gone=410]="Gone",lu[lu.LengthRequired=411]="LengthRequired",
lu[lu.PreconditionFailed=412]="PreconditionFailed",lu[lu.PayloadTooLarge=413]="PayloadTooLarge",
lu[lu.URITooLong=414]="URITooLong",lu[lu.UnsupportedMediaType=415]="UnsupportedMediaType",
lu[lu.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",lu[lu.ExpectationFailed=417]="ExpectationFailed",
lu[lu.IAmATeapot=418]="IAmATeapot",lu[lu.UnprocessableEntity=422]="UnprocessableEntity",lu[lu.Locked=423]="Locked",
lu[lu.FailedDependency=424]="FailedDependency",lu[lu.TooEarly=425]="TooEarly",
lu[lu.UpgradeRequired=426]="UpgradeRequired",lu[lu.PreconditionRequired=428]="PreconditionRequired",
lu[lu.TooManyRequests=429]="TooManyRequests",lu[lu.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
lu[lu.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",lu[lu.InternalError=500]="InternalError",
lu[lu.InternalServerError=500]="InternalServerError",lu[lu.NotImplemented=501]="NotImplemented",
lu[lu.BadGateway=502]="BadGateway",lu[lu.ServiceUnavailable=503]="ServiceUnavailable",
lu[lu.GatewayTimeout=504]="GatewayTimeout",lu[lu.HttpVersionNotSupported=505]="HttpVersionNotSupported",
lu[lu.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",lu[lu.InsufficientStorage=507]="InsufficientStorage",
lu[lu.LoopDetected=508]="LoopDetected",lu[lu.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
lu[lu.NotExtended=510]="NotExtended",lu[lu.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Tl=gl,(
fu=fu||{}).ERROR="error",Sl=fu;class Nc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case gl.Continue:return"Continue";case gl.SwitchingProtocols:return"Switching Protocols"
;case gl.Processing:return"Processing";case gl.CheckPoint:return"Check Point";case gl.OK:return"OK";case gl.Created:
return"Created";case gl.Accepted:return"Accepted";case gl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case gl.NoContent:return"No Content";case gl.ResetContent:return"Reset Content"
;case gl.PartialContent:return"Partial Content";case gl.MultiStatus:return"Multi Status";case gl.AlreadyReported:
return"Already Reported";case gl.IMUsed:return"IM Used";case gl.MultipleChoices:return"Multiple Choices"
;case gl.MovedPermanently:return"Moved Permanently";case gl.Found:return"Found";case gl.SeeOther:return"See Other"
;case gl.NotModified:return"Not Modified";case gl.TemporaryRedirect:return"Temporary Redirect"
;case gl.PermanentRedirect:return"Permanent Redirect";case gl.BadRequest:return"Bad Request";case gl.Unauthorized:
return"Unauthorized";case gl.PaymentRequired:return"Payment Required";case gl.Forbidden:return"Forbidden"
;case gl.NotFound:return"Not Found";case gl.MethodNotAllowed:return"Method Not Allowed";case gl.NotAcceptable:
return"Not Acceptable";case gl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case gl.RequestTimeout:
return"Request Timeout";case gl.Conflict:return"Conflict";case gl.Gone:return"Gone";case gl.LengthRequired:
return"Length Required";case gl.PreconditionFailed:return"Precondition Failed";case gl.PayloadTooLarge:
return"Payload Too Large";case gl.URITooLong:return"URI Too Long";case gl.UnsupportedMediaType:
return"Unsupported Media Type";case gl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case gl.ExpectationFailed:return"Expectation Failed";case gl.IAmATeapot:return"I Am a Teapot"
;case gl.UnprocessableEntity:return"Unprocessable Entity";case gl.Locked:return"Locked";case gl.FailedDependency:
return"Failed Dependency";case gl.TooEarly:return"Too Early";case gl.UpgradeRequired:return"Upgrade Required"
;case gl.PreconditionRequired:return"Precondition Required";case gl.TooManyRequests:return"Too Many Requests"
;case gl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case gl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case gl.InternalServerError:return"Internal Server Error";case gl.NotImplemented:
return"Not Implemented";case gl.BadGateway:return"Bad Gateway";case gl.ServiceUnavailable:return"Service Unavailable"
;case gl.GatewayTimeout:return"Gateway Timeout";case gl.HttpVersionNotSupported:return"Http Version Not Supported"
;case gl.VariantAlsoNegotiates:return"Variant Also Negotiates";case gl.InsufficientStorage:return"Insufficient Storage"
;case gl.LoopDetected:return"Loop Detected";case gl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case gl.NotExtended:return"Not Extended";case gl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),u(this,"status",void 0),u(this,"method",void 0),u(this,"url",
void 0),u(this,"body",void 0),u(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Sl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const wc=mc?require("fs").promises:void 0,Rc=fc.createLogger(
"NodeRequestClient");class Cc{constructor(e,t){u(this,"_http",void 0),u(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case au.GET:return this._getJson(t,r,n);case au.POST:return this._postJson(t,r,n)
;case au.PATCH:return this._patchJson(t,r,n);case au.PUT:return this._putJson(t,r,n);case au.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await wc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void Rc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Rc.debug(
"_checkSocketFile: ENOENT: ",e);throw Rc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Mu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Fu.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=D(D({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=D(D({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?Rc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Rc.warn(
"Warning! Request had already ended when the response was received."),Rc.debug("Error from event: ",e)):(Rc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Rc.warn(
"Warning! Request had already ended when the response was received."),Rc.debug("Exception: ",e)):(Rc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Ac.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(au.GET,e,n,r).then(Cc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(au.PUT,e,n,r).then(Cc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),this._request(au.POST,e,n,r).then(
Cc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(au.PATCH,e,n,r).then(Cc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(au.DELETE,e,n,r).then(Cc._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw Rc.error(`Unsuccessful response with status ${t}: `,e),new Nc(t
,`Error ${t} for ${x(e.method)} ${e.url}`,e.method,e.url,e.body);return e.body}}class bc{constructor(e){u(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case au.GET:return this._getJson(t,r,n);case au.POST:
return this._postJson(t,r,n);case au.PUT:return this._putJson(t,r,n);case au.DELETE:return this._deleteJson(t,r,n)
;default:throw new TypeError(`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>bc._successResponse(e,au.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>bc._successResponse(e,au.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>bc._successResponse(e,au.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"}
;return t&&(n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>bc._successResponse(e
,au.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(e=>{throw new Nc(r,i,t,n,e)})}return e.json()}}
const Ic=mc?require("http"):void 0,Dc=mc?require("https"):void 0,Oc=fc.createLogger("RequestClient");class Lc{
static async jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){
return this._client.jsonRequest(au.GET,e,t)}static async postJson(e,t,r){return Oc.debug(".postJson: ",e,t,r),
this._client.jsonRequest(au.POST,e,r,t)}static async patchJson(e,t,r){return Oc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(au.PATCH,e,r,t)}static async putJson(e,t,r){return Oc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(au.PUT,e,r,t)}static async deleteJson(e,t,r){return Oc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(au.DELETE,e,t,r)}static _initClient(){if(yc)return Oc.debug("Detected browser environment"),
new bc(window.fetch.bind(window));if(mc)return new Cc(Ic,Dc);throw new TypeError(
"Could not detect request client implementation")}}u(Lc,"_client",Lc._initClient()),(fu=uu=uu||{}).JSON="json",
fu.STRING="string",fu.BOOLEAN="boolean",fu.NUMBER="number",fu.INTEGER="integer",pu=uu,fu=["name","parameters",
"variables"];class Pc{static registerController(e){this._stepControllers.push(e)}static findController(t){return Qo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return is(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}u(Pc,"_stepControllers",[]);const Uc=Do(fu,["name","steps"]),$c=Do(fu
,["name","jobs"]),Fc=Do(fu,["name","stages"]);class Mc{getName(){return this._name}constructor(e){u(this,"_name",void 0)
,u(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Da(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Xs(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Js(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
uu=cu=cu||{})[uu.UNCONSTRUCTED=-1]="UNCONSTRUCTED",uu[uu.CONSTRUCTED=0]="CONSTRUCTED",uu[uu.STARTED=1]="STARTED",
uu[uu.PAUSED=2]="PAUSED",uu[uu.CANCELLED=3]="CANCELLED",uu[uu.FINISHED=4]="FINISHED",uu[uu.FAILED=5]="FAILED",yl=cu,(
cu=du=du||{}).NONE="fi.nor.pipeline.none",cu.PIPELINE="fi.nor.pipeline",cu.JOB="fi.nor.pipeline.job",
cu.STAGE="fi.nor.pipeline.stage",cu.TASK="fi.nor.pipeline.task",cu.STEP="fi.nor.pipeline.step",
cu.FILE="fi.nor.pipeline.step.file",cu.SCRIPT="fi.nor.pipeline.step.script",cu.VARIABLE="fi.nor.pipeline.step.variable",
cu.JSON="fi.nor.pipeline.step.json",cu.CSV="fi.nor.pipeline.step.csv",cu.GIT="fi.nor.pipeline.step.git",ml=du
;const kc=fc.createLogger("JobController");(du=Al={}).JOB_CHANGED="JobController:jobChanged",
du.JOB_STARTED="JobController:jobStarted",du.JOB_PAUSED="JobController:jobPaused",
du.JOB_RESUMED="JobController:jobResumed",du.JOB_CANCELLED="JobController:jobCancelled",
du.JOB_FAILED="JobController:jobFailed",du.JOB_FINISHED="JobController:jobFinished";class Gc{constructor(e,t,r=[]){if(u(
this,"_context",void 0),u(this,"_observer",void 0),u(this,"_name",void 0),u(this,"_steps",void 0),u(this,
"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_stepDestructors",void 0),u(this,"_current",void 0),!J(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new Mc(`JobController#${this._name}`),
this._state=yl.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=xi(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=Js(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){kc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:ml.JOB,
state:this._state,name:this._name,steps:xi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:return!1}}isStarted(){switch(this._state){case yl.PAUSED:case yl.STARTED:return!0
;case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}isPaused(){switch(this._state){
case yl.PAUSED:return!0;case yl.STARTED:case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}
isCancelled(){switch(this._state){case yl.CANCELLED:return!0;case yl.PAUSED:case yl.STARTED:case yl.CONSTRUCTED:
case yl.FINISHED:case yl.FAILED:return!1}}isFinished(){switch(this._state){case yl.FINISHED:case yl.FAILED:
case yl.CANCELLED:return!0;case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:return!1}}isFailed(){switch(this._state){
case yl.FAILED:return!0;case yl.CONSTRUCTED:case yl.FINISHED:case yl.PAUSED:case yl.STARTED:case yl.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:case yl.CONSTRUCTED:case yl.PAUSED:
case yl.STARTED:case yl.CANCELLED:return!1}}start(){if(this._state!==yl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return kc.info(`Starting job ${this._name}`),this._state=yl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(Al.JOB_STARTED)&&this._observer.triggerEvent(
Al.JOB_STARTED,this),this._observer.hasCallbacks(Al.JOB_CHANGED)&&this._observer.triggerEvent(Al.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return kc.info(
`Pausing job ${this._name}`),this._state=yl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
Al.JOB_PAUSED)&&this._observer.triggerEvent(Al.JOB_PAUSED,this),this._observer.hasCallbacks(Al.JOB_CHANGED
)&&this._observer.triggerEvent(Al.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return kc.info(`Resuming job ${this._name}`),this._state=yl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(Al.JOB_RESUMED)&&this._observer.triggerEvent(
Al.JOB_RESUMED,this),this._observer.hasCallbacks(Al.JOB_CHANGED)&&this._observer.triggerEvent(Al.JOB_CHANGED,this),this}
stop(){if(this._state!==yl.STARTED)throw new Error(`Job#${this._name} was not started`);return kc.info(
`Stopping job ${this._name}`),this._state=yl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
Al.JOB_CANCELLED)&&this._observer.triggerEvent(Al.JOB_CANCELLED,this),this._observer.hasCallbacks(Al.JOB_CHANGED
)&&this._observer.triggerEvent(Al.JOB_CHANGED,this),this}onCancelled(e){return this.on(Al.JOB_CANCELLED,e)}onChanged(e){
return this.on(Al.JOB_CHANGED,e)}onFailed(e){return this.on(Al.JOB_FAILED,e)}onFinished(e){return this.on(
Al.JOB_FINISHED,e)}onPaused(e){return this.on(Al.JOB_PAUSED,e)}onResumed(e){return this.on(Al.JOB_RESUMED,e)}onStarted(e
){return this.on(Al.JOB_STARTED,e)}getErrorString(){return xi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return xi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){kc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=yl.FAILED,this._observer.hasCallbacks(Al.JOB_FAILED)&&this._observer.triggerEvent(
Al.JOB_FAILED,this)):i.isCancelled()?(this._state=yl.CANCELLED,this._observer.hasCallbacks(Al.JOB_CANCELLED
)&&this._observer.triggerEvent(Al.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=yl.STARTED,this._steps[this._current].start(),n===yl.PAUSED&&this._observer.hasCallbacks(Al.JOB_RESUMED
)&&this._observer.triggerEvent(Al.JOB_RESUMED,this)):(this._state=yl.FINISHED,this._observer.hasCallbacks(
Al.JOB_FINISHED)&&this._observer.triggerEvent(Al.JOB_FINISHED,this))),this._observer.hasCallbacks(Al.JOB_CHANGED
)&&this._observer.triggerEvent(Al.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=yl.PAUSED,
this._observer.hasCallbacks(Al.JOB_PAUSED)&&this._observer.triggerEvent(Al.JOB_PAUSED,this),this._observer.hasCallbacks(
Al.JOB_CHANGED)&&this._observer.triggerEvent(Al.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=yl.STARTED,this._observer.hasCallbacks(Al.JOB_RESUMED)&&this._observer.triggerEvent(Al.JOB_RESUMED,this),
this._observer.hasCallbacks(Al.JOB_CHANGED)&&this._observer.triggerEvent(Al.JOB_CHANGED,this))}}u(Gc,"Event",Al)
;const jc=fc.createLogger("StageController");(du=Nl={}).STAGE_STARTED="StageController:stageStarted",
du.STAGE_PAUSED="StageController:stagePaused",du.STAGE_RESUMED="StageController:stageResumed",
du.STAGE_FINISHED="StageController:stageFinished",du.STAGE_FAILED="StageController:stageFailed",
du.STAGE_CANCELLED="StageController:stageCancelled",du.STAGE_CHANGED="StageController:stageChanged";class Hc{
constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,"_name",void 0),u(this,"_jobs",void 0)
,u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_jobDestructors",void 0),!J(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=yl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Mc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=xi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:ml.STAGE,state:this._state,name:this._name,jobs:xi(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case yl.CANCELLED:return!0;case yl.FINISHED:case yl.FAILED:
case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:return!1}}isFailed(){switch(this._state){case yl.FAILED:return!0
;case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:return!1}}isFinished(){switch(
this._state){case yl.FINISHED:case yl.FAILED:case yl.CANCELLED:return!0;case yl.CONSTRUCTED:case yl.PAUSED:
case yl.STARTED:return!1}}isPaused(){switch(this._state){case yl.PAUSED:return!0;case yl.FAILED:case yl.CANCELLED:
case yl.FINISHED:case yl.CONSTRUCTED:case yl.STARTED:return!1}}isRunning(){switch(this._state){case yl.STARTED:return!0
;case yl.PAUSED:case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case yl.PAUSED:case yl.STARTED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:
case yl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.PAUSED:
case yl.STARTED:case yl.FAILED:case yl.CANCELLED:case yl.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
Nl.STAGE_CANCELLED,e)}onChanged(e){return this.on(Nl.STAGE_CHANGED,e)}onFailed(e){return this.on(Nl.STAGE_FAILED,e)}
onFinished(e){return this.on(Nl.STAGE_FINISHED,e)}onPaused(e){return this.on(Nl.STAGE_PAUSED,e)}onResumed(e){
return this.on(Nl.STAGE_RESUMED,e)}onStarted(e){return this.on(Nl.STAGE_STARTED,e)}start(){if(
this._state!==yl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return jc.info(
`Starting stage ${this._name}`),this._state=yl.STARTED,Js(this._jobs,t=>{try{return t.start(),!1}catch(e){
return jc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=yl.FAILED,
this._observer.hasCallbacks(Nl.STAGE_FAILED)&&this._observer.triggerEvent(Nl.STAGE_FAILED,this)
):this._observer.hasCallbacks(Nl.STAGE_STARTED)&&this._observer.triggerEvent(Nl.STAGE_STARTED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}pause(){if(
this._state===yl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);jc.info(`Pausing stage ${this._name}`)
,this._state=yl.PAUSED;var e=Js(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return jc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Nl.STAGE_PAUSED
)&&this._observer.triggerEvent(Nl.STAGE_PAUSED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}resume(){if(this._state===yl.STARTED)throw new Error(
`Stage#${this._name} was already started`);jc.info(`Resuming stage ${this._name}`),this._state=yl.STARTED;var e=Js(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return jc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Nl.STAGE_RESUMED
)&&this._observer.triggerEvent(Nl.STAGE_RESUMED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);jc.info(`Stopping stage ${this._name}`),this._state=yl.CANCELLED;var e=Js(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return jc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return xi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return xi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Js(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){jc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==yl.FAILED?(this._state=yl.FAILED,this._observer.hasCallbacks(Nl.STAGE_FAILED
)&&this._observer.triggerEvent(Nl.STAGE_FAILED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)):n&&this._state!==yl.CANCELLED?(this._state=yl.CANCELLED,
this._observer.hasCallbacks(Nl.STAGE_CANCELLED)&&this._observer.triggerEvent(Nl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)
):this._state!==yl.FINISHED&&(this._state=yl.FINISHED,this._observer.hasCallbacks(Nl.STAGE_FINISHED
)&&this._observer.triggerEvent(Nl.STAGE_FINISHED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)))):(n=S(Js(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==yl.PAUSED?(this._state=yl.PAUSED,this._observer.hasCallbacks(Nl.STAGE_PAUSED
)&&this._observer.triggerEvent(Nl.STAGE_PAUSED,this),this._observer.hasCallbacks(Nl.STAGE_CHANGED
)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this)):n||this._state!==yl.PAUSED||(this._state=yl.STARTED,
this._observer.hasCallbacks(Nl.STAGE_RESUMED)&&this._observer.triggerEvent(Nl.STAGE_RESUMED,this),
this._observer.hasCallbacks(Nl.STAGE_CHANGED)&&this._observer.triggerEvent(Nl.STAGE_CHANGED,this))}}u(Hc,"Event",Nl)
;const Bc=fc.createLogger("PipelineController");(du=wl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
du.PIPELINE_PAUSED="PipelineController:pipelinePaused",du.PIPELINE_RESUMED="PipelineController:pipelineResumed",
du.PIPELINE_FINISHED="PipelineController:pipelineFinished",du.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
du.PIPELINE_FAILED="PipelineController:pipelineFailed",du.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class xc{constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_name",void 0),u(this,"_stages",void 0),u(this,
"_observer",void 0),u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_stageDestructors",void 0),u(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Mc(`PipelineController#${this._name}`),this._state=yl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=xi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:ml.PIPELINE,state:this._state,name:this._name,
stages:xi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case yl.CANCELLED:return!0;case yl.STARTED:case yl.PAUSED:case yl.CONSTRUCTED:case yl.FINISHED:case yl.FAILED:return!1}}
isFailed(){switch(this._state){case yl.FAILED:return!0;case yl.CANCELLED:case yl.STARTED:case yl.PAUSED:
case yl.CONSTRUCTED:case yl.FINISHED:return!1}}isFinished(){switch(this._state){case yl.FAILED:case yl.CANCELLED:
case yl.FINISHED:return!0;case yl.STARTED:case yl.PAUSED:case yl.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case yl.PAUSED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.STARTED:case yl.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.FAILED:case yl.CANCELLED:
case yl.FINISHED:case yl.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case yl.STARTED:case yl.PAUSED:return!0
;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case yl.FINISHED:return!0;case yl.STARTED:case yl.PAUSED:case yl.FAILED:case yl.CANCELLED:case yl.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(wl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(wl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(wl.PIPELINE_FAILED,e)}onFinished(e){return this.on(wl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
wl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(wl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(wl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Bc.info(
`Pausing pipeline ${this._name}`),this._state=yl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
wl.PIPELINE_PAUSED)&&this._observer.triggerEvent(wl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
wl.PIPELINE_CHANGED)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Bc.info(`Resuming pipeline ${this._name}`),
this._state=yl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(wl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(wl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(wl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this),this}start(){if(this._state!==yl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Bc.info(`Starting pipeline ${this._name}`),this._state=yl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(wl.PIPELINE_STARTED)&&this._observer.triggerEvent(
wl.PIPELINE_STARTED,this),this._observer.hasCallbacks(wl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
wl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==yl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Bc.info(`Stopping pipeline ${this._name}`),this._state=yl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(wl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(wl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(wl.PIPELINE_CHANGED)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this),this}
getErrorString(){return xi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return xi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Bc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=yl.FAILED,
this._observer.hasCallbacks(wl.PIPELINE_FAILED)&&this._observer.triggerEvent(wl.PIPELINE_FAILED,this),Bc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=yl.CANCELLED,this._observer.hasCallbacks(
wl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(wl.PIPELINE_CANCELLED,this),Bc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=yl.STARTED;const o=this._stages[this._current].start();n===yl.PAUSED&&this._observer.hasCallbacks(
wl.PIPELINE_RESUMED)&&this._observer.triggerEvent(wl.PIPELINE_RESUMED,this),Bc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=yl.FINISHED,this._observer.hasCallbacks(wl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(wl.PIPELINE_FINISHED,this),Bc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(wl.PIPELINE_CHANGED)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=yl.PAUSED,this._observer.hasCallbacks(wl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(wl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(wl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this),Bc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=yl.STARTED,this._observer.hasCallbacks(wl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(wl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(wl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(wl.PIPELINE_CHANGED,this),Bc.info(`Pipeline ${this._name} was resumed`))}}u(xc,"Event",wl
);const Jc=fc.createLogger("PipelineRunner");class Wc{static registerController(e){Pc.registerController(e)}
static createStepController(e,t){const r=Pc.findController(e);if(void 0===r)throw Jc.debug("step = ",e),new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Gc(t,e.name,
xi(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new Hc(t,e.name,xi(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new xc(t,e.name,xi(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ie(e)?(Jc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ne(e)?(Jc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(
Jc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Jc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Jc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Jc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Jc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class Vc{static toString(...e){return xi(e,
e=>$a(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return Y(n)?xi(n,e=>Vc.processVariables(e,i,o
,s,a)):X(n)?is(P(n),(e,t)=>{var r=n[t];return e[`${Vc.processVariables(t,i,o,s,a)}`]=Vc.processVariables(r,i,o,s,a),e},
{}):p(n)?Vc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=It(r)?r:e=>li(r,e,o),Ya(t,n)&&rl(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=Ra(e),Vc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=Ra(
t.substr(a,l-a)),h=(Vc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const qc=fc.createLogger("PipelineContext");class Kc{constructor(e,t=void 0,r=void 0,n="${",i="}"){u(this,"_system",
void 0),u(this,"_parameters",void 0),u(this,"_variablePrefix",void 0),u(this,"_variableSuffix",void 0),u(this,
"_lookupVariable",void 0),u(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return qc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=Vc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),qc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return li(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return qc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return q(this._variables)||(
this._variables={}),So(this._variables,e,t),qc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const zc=fc.createLogger("runHttpResource"),Xc=fc.createLogger(
"runLocalResource");(du=Rl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",du.M_ROOM_JOIN_RULES="m.room.join_rules",
du.M_ROOM_MEMBERSHIP="m.room.membership",du.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
du.M_ROOM_GUEST_ACCESS="m.room.guest_access",du.M_ROOM_CREATE="m.room.create",du.M_FEDERATE="m.federate",
du.M_ROOM_MEMBER="m.room.member",du.M_PUSH_RULES="m.push_rules",du.M_PRESENCE="m.presence",du.M_SPACE="m.space",
du.M_LOGIN_PASSWORD="m.login.password",du.M_LOGIN_TOKEN="m.login.token",du.M_ID_USER="m.id.user",
du.FI_NOR_DELETED="fi.nor.deleted",du.FI_NOR_FORM_DTO="fi.nor.form_dto",du.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,du.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",du.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
du.FI_NOR_AGENT_DTO="fi.nor.dto.agent",du.FI_NOR_PIPELINE="fi.nor.pipeline",
du.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Cl=Rl,(du=bl=bl||{})[du.UNAUTHENTICATED=0]="UNAUTHENTICATED",
du[du.AUTHENTICATING=1]="AUTHENTICATING",du[du.AUTHENTICATED=2]="AUTHENTICATED",
du[du.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
du[du.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(du=Il={}).M_USER_IN_USE="M_USER_IN_USE",
du.M_INVALID_USERNAME="M_INVALID_USERNAME",du.M_EXCLUSIVE="M_EXCLUSIVE",du.M_FORBIDDEN="M_FORBIDDEN",
du.M_LIMIT_EXCEEDED="M_LIMIT_EXCEEDED",Dl=Il;const Yc=fc.createLogger("SimpleMatrixClient");(Ol=Ol||{}
).EVENT="SimpleMatrixClient:event";class Qc{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){u(this,
"_observer",void 0),u(this,"_originalUrl",void 0),u(this,"_pollTimeout",void 0),u(this,"_pollWaitTime",void 0),u(this,
"_timeoutCallback",void 0),u(this,"_state",void 0),u(this,"_homeServerUrl",void 0),u(this,"_identityServerUrl",void 0),
u(this,"_accessToken",void 0),u(this,"_userId",void 0),u(this,"_nextBatch",void 0),u(this,"_timer",void 0),u(this,
"_syncing",void 0),this._state=n?bl.AUTHENTICATED:bl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e
,this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Mc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Yc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Yc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(A(a=s=await this._postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${ze(t)}`:""),e,
o?{Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Yc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Yc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Yc.debug(
"Could not register user: ",e),!(e instanceof Nc))throw new Nc(Tl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Nc(Tl.Unauthorized):403===s?new Nc(Tl.Forbidden
):429===s?new Nc(429):new Nc(Tl.InternalServerError,"Failed to register user");if(!Ke(s=null==e?void 0:e.getBody())
)throw new Nc(Tl.InternalServerError,"Failed to register user");switch(s.errcode){case Dl.M_USER_IN_USE:throw new Nc(
Tl.Conflict,"User already exists");case Dl.M_INVALID_USERNAME:throw new Nc(Tl.BadRequest,"Username invalid")
;case Dl.M_EXCLUSIVE:throw new Nc(Tl.Conflict,"User name conflicts with exclusive namespace");default:throw new Nc(
Tl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Yc.debug("whoami: Fetching account whoami... ",r),n=await this._getJson(r,{Authorization:`Bearer ${t}`}),Yc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Yc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Yc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Yc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await this._getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Yc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Yc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(A(
n=r=await this._postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(
null==n?void 0:n.access_token)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(
null==n?void 0:n.device_id)))throw Yc.debug("registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Yc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Yc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Nc))throw new Nc(Tl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Nc(Tl.Unauthorized
):403===r?new Nc(Tl.Forbidden):429===r?new Nc(429):new Nc(Tl.InternalServerError,"Failed to register user");if(!Ke(
r=null==e?void 0:e.getBody()))throw new Nc(Tl.InternalServerError,"Failed to register user");switch(r.errcode){
case Dl.M_USER_IN_USE:throw new Nc(Tl.Conflict,"User already exists");case Dl.M_INVALID_USERNAME:throw new Nc(
Tl.BadRequest,"Username invalid");case Dl.M_EXCLUSIVE:throw new Nc(Tl.Conflict,
"User name conflicts with exclusive namespace");default:throw new Nc(Tl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:Rl.M_LOGIN_PASSWORD,identifier:{type:Rl.M_ID_USER,user:r},
password:n},Yc.debug("Sending login with userId:",r),!(A(h=o=await this._postJson(this._resolveHomeServerUrl("/login"),i
))&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||A(_=h)&&I(_,["m.homeserver","m.identity_server"])&&A(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||A(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Yc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Yc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Qc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Yc.debug(
"Could not login: ",e),new Nc(Tl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(A(n=r=await this._getJson(this._resolveHomeServerUrl(`/directory/room/${ze(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Yc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Yc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Nc&&e.getStatusCode()===Tl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(A(
t=e=await this._getJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(
t,["joined"])&&N(null==t?void 0:t.joined,he,qe)))throw Yc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Yc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!q(i=await this._getJson(this._resolveHomeServerUrl(
`/rooms/${ze(e)}/state/${ze(t)}/${ze(r)}`),{Authorization:`Bearer ${n}`})))throw Yc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Yc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Nc&&e.getStatusCode()===Tl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(A(s=o=await this._putJson(this._resolveHomeServerUrl(
`/rooms/${ze(e)}/state/${ze(t)}/${ze(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Yc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Yc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Yc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${ze(e
)}/forget`),{},{Authorization:`Bearer ${t}`}),Yc.debug("forgetRoom: received: ",r)}catch(e){throw Yc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/leave`
),{},{Authorization:`Bearer ${t}`}),Yc.debug("leaveRoom: received: ",r)}catch(e){throw Yc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e))throw new TypeError(
`roomId invalid: ${e}`);if(!he(t))throw new TypeError(`userId invalid: ${t}`);if(Yc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await this._postJson(
this._resolveHomeServerUrl(`/rooms/${ze(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Yc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Yc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Yc.debug("Sending message with body:",t
),r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/send/m.room.message`),t,{
Authorization:`Bearer ${r}`}),Yc.debug("sendTextMessage response received: ",r)}async createRoom(e){
var t=this._accessToken;if(!t)throw new TypeError("createRoom: Client did not have access token");if(Yc.debug(
"Creating room with body:",e),!(A(e=t=await this._postJson(this._resolveHomeServerUrl("/createRoom"),e,{
Authorization:`Bearer ${t}`}))&&I(e,["room_id","room_alias"])&&ue(null==e?void 0:e.room_id)&&(v(
null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias)&&e&&"#"===e[0])))throw Yc.debug("response = ",t),
new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t);return Yc.debug("Create room response received: ",t),t
}async joinRoom(t,e=void 0){var r,n,i;try{if(!(r=this._accessToken))throw new TypeError(
"createRoom: Client did not have access token");if(Yc.debug(`Joining to room ${t} with body:`,e),!(A(
i=n=await this._postJson(this._resolveHomeServerUrl(`/rooms/${ze(t)}/join`),null!=e?e:{},{Authorization:`Bearer ${r}`})
)&&I(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw Yc.debug("response = ",n),new TypeError(
`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n);return Yc.debug(`Joined to room ${t}: `,n),n
}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{room_id:t};throw Yc.debug(
`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Yc.info("sync with ",e),!(t=this._accessToken)
)throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,full_state:i,
set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!q(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=ll(xi(P(s),e=>{var t=s[e]
;return`${ze(e)}=${ze(t)}`}),"&"),!(A(t=e=await this._getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count","org.matrix.msc2732.device_unused_fallback_key_types"])&&p(null==t?void 0:t.next_batch)&&(
v(null==t?void 0:t.rooms)||Ge(null==t?void 0:t.rooms))&&(v(null==t?void 0:t.presence)||He(null==t?void 0:t.presence))&&(
v(null==t?void 0:t.account_data)||be(null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Be(
null==t?void 0:t.to_device))&&(v(null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(
null==t?void 0:t.device_one_time_keys_count)||We(null==t?void 0:t.device_one_time_keys_count))))throw Yc.debug(
"_sync: response not MatrixSyncResponseDTO: ",JSON.stringify(e,null,2)),new TypeError(
`Response was not MatrixSyncResponseDTO: ${Ve(e)}`);return e}isAlreadyInTheRoom(e){if(Ke(e)){var t=null!==(
t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error)&&void 0!==e?e:"";if(
t===Dl.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}async _retryLater(r,n){let i
;return new Promise((e,t)=>{try{Yc.debug(`_retryLater: Waiting for a moment (${n})`),i=setTimeout(()=>{i=void 0;try{
Yc.debug("_retryLater: Restoring now"),e(r())}catch(e){t(e)}},n)}catch(e){i&&(clearTimeout(i),i=void 0),t(e)}})}
async _postJson(t,r,n){var i;try{return Yc.debug(`Executing POST request ${t} with `,r,n),i=await Lc.postJson(t,r,n),
Yc.debug(`Response received for POST request ${t} as `,i),i}catch(e){if(i=null!==(i=null==e?void 0:e.getBody()
)&&void 0!==i?i:null==e?void 0:e.body){if((null==i?void 0:i.errcode)===Dl.M_LIMIT_EXCEEDED)return i=null!==(
i=null==i?void 0:i.retry_after_ms)&&void 0!==i?i:1e3,Yc.error("Limit reached: ",i,t,r,n),this._retryLater(async()=>(
Yc.error("Calling again: ",t,r,n),this._postJson(t,r,n)),i);Yc.error("Error did not have body: ",e)}else Yc.error(
"Error did not have body: ",e);throw e}}async _putJson(t,r,n){var i;try{return Yc.debug(
`Executing PUT request ${t} with `,r,n),i=await Lc.putJson(t,r,n),Yc.debug(`Response received for PUT request ${t} as `,
i),i}catch(e){if(null!=e&&e.getBody||null!=e&&e.body){if((null==(i=null!==(i=null==e?void 0:e.getBody()
)&&void 0!==i?i:null==e?void 0:e.body)?void 0:i.errcode)===Dl.M_LIMIT_EXCEEDED)return i=null!==(
i=null==i?void 0:i.retry_after_ms)&&void 0!==i?i:1e3,Yc.error("Limit reached: ",i,t,r,n),this._retryLater(async()=>(
Yc.error("Calling again: ",t,r,n),this._putJson(t,r,n)),i);Yc.error("Error did not have body: ",e)}else Yc.error(
"Error did not have body: ",e);throw e}}async _getJson(t,r){var n;try{return Yc.debug(`Executing GET request ${t} with `
,r),n=await Lc.getJson(t,r),Yc.debug(`Response received for PUT request ${t} as `,n),n}catch(e){if(
null!=e&&e.getBody||null!=e&&e.body){if((null==(n=null!==(n=null==e?void 0:e.getBody()
)&&void 0!==n?n:null==e?void 0:e.body)?void 0:n.errcode)===Dl.M_LIMIT_EXCEEDED)return n=null!==(
n=null==n?void 0:n.retry_after_ms)&&void 0!==n?n:1e3,Yc.error("Limit reached: ",n,t,r),this._retryLater(async()=>(
Yc.error("Calling again: ",t,r),this._getJson(t,r)),n);Yc.error("Error did not have body: ",e)}else Yc.error(
"Error did not have body: ",e);throw e}}_sendMatrixEventList(e,t){Xs(e,e=>{this._sendMatrixEvent(e,t)})}
_sendMatrixEvent(e,t){this._observer.triggerEvent(Ol.EVENT,t?D(D({},e),{},{room_id:t}):e)}_onTimeout(){if(this._syncing
)Yc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e)throw new TypeError(
"_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Yc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Yc.info("Initial sync request started"),
this._state!==bl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=bl.AUTHENTICATED_AND_STARTING,
e=await this.sync({filter:{room:{timeline:{limit:1}}}}),Yc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Yc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Yc.info("Timer started..."),this._state=bl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Yc.error("No next_batch in the response: ",t),r=Do(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),Xs(n,e=>{var t,r=(r=s[e],Do([],
null!=r&&r.state?ge(null==r?void 0:r.state):[],null!=r&&r.timeline?Ae(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Do([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),Xs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),Xs(o,e=>{var t=l[e],t=Do([],ge(
null==t?void 0:t.state),Ae(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}u(Qc,
"Event",Ol),(du=hu=hu||{}).PRIVATE_CHAT="private_chat",du.PUBLIC_CHAT="public_chat",
du.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Ll=hu,(hu=_u=_u||{}).INVITED="invited",hu.JOINED="joined",
hu.SHARED="shared",hu.WORLD_READABLE="world_readable",Pl=_u,(_u=Eu=Eu||{}).PUBLIC="public",_u.KNOCK="knock",
_u.INVITE="invite",_u.PRIVATE="private",_u.RESTRICTED="restricted",Ul=Eu,(Eu=vu=vu||{}).CAN_JOIN="can_join",
Eu.FORBIDDEN="forbidden",$l=vu;const Zc=fc.createLogger("MatrixCrudRepository");class ed{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){u(this,"_client",void 0),u(this,"_serviceAccount",void 0),u(this,
"_stateType",void 0),u(this,"_stateKey",void 0),u(this,"_deletedType",void 0),u(this,"_deletedKey",void 0),u(this,
"_allowedGroups",void 0),u(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:Cl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Zc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Zc.debug("joinedRooms = ",i),t=P(t),Zc.debug(
"invitedRooms = ",t),(t=Js(t,e=>!i.includes(e))).length){Zc.debug("Joining to rooms = ",t);let r=0;if(await is(t,async(e
,t)=>{await e;try{Zc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Zc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Zc.debug(
"Fetching results again after joining"),this.getAll()}return is(i,(e,i)=>{var t=n[i],r=Js(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Ja(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Do(e,xi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return xi(Js(e,
e=>li(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Zc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Zc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Zc.debug(
"createItem: serviceAccountId = ",n),i=Js(Ts(Do(n?[n]:[],t||[])),e=>e!==o),Zc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Zc.debug("createItem: allowedGroups = ",n),t={[Cl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:Cl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Pl.SHARED}},{type:Cl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:$l.FORBIDDEN}}]
;void 0!==n&&s.push({type:Cl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Ul.RESTRICTED,allow:xi(n,e=>({
type:Cl.M_ROOM_MEMBERSHIP,room_id:e}))}}),Zc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Zc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Xs(this._allowedEvents,e=>{a[e]=0}),t=D(D({},n),{},{preset:Ll.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Zc.debug(
"createItem: response = ",t),t=t.room_id,Zc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Zc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Zc.debug(
"response = ",JSON.stringify(n,null,2)),!q(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=xi(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!q(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Nc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Zc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Nc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Zc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Zc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Zc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Nc&&[401,403,404].includes(e.getStatusCode()))throw e;throw Zc.error(
`Error in deleteById(${t}): `,e),new Nc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await is(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Zc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const td=fc.createLogger("runMatrixResource"
);(Fl=Fl||{}).ON_EXIT="NodeSystemProcess:onExit";const rd=fc.createLogger("NodeSystemProcess");class nd{constructor(e,t,
r,n=void 0,i=!0){u(this,"_command",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_cwd",void 0),u(this,
"_stdoutCallback",void 0),u(this,"_stderrCallback",void 0),u(this,"_closeCallback",void 0),u(this,"_observer",void 0),u(
this,"_process",void 0),u(this,"_printToParentProcess",void 0),u(this,"_stdoutChunks",void 0),u(this,"_stderrChunks",
void 0),u(this,"_exitStatus",void 0),this._observer=new Mc("NodeSystemProcess"),this._process=void 0,this._command=e,
this._args=t,this._env=r,this._cwd=n,this._printToParentProcess=i,this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[],this._exitStatus=void 0}start(){const e={};return this._env&&(e.env=this._env),this._cwd&&(
e.cwd=this._cwd),this._process=Lu.spawn(this._command,this._args,e),this._process.stdout.on("data",this._stdoutCallback)
,this._process.stderr.on("data",this._stderrCallback),this._process.on("close",this._closeCallback),this}stop(){
return this._process.kill("SIGTERM"),this}pause(){return this._process.kill("SIGSTOP"),this}resume(){
return this._process.kill("SIGCONT"),this}toString(){return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}
}getExitStatus(){return this._exitStatus}getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}
getOutputString(){return Buffer.concat(this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){
this._stderrChunks.push(e),process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(Fl.ON_EXIT
)?this._observer.triggerEvent(Fl.ON_EXIT,this):rd.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}u(nd,"Event",Fl);const id=fc.createLogger(
"NodeSystem");class od{constructor(){u(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Xs(this._tempFileNames,e=>{id.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){try{const t=Uu.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}catch(e){if("ENOENT"===(
null==e?void 0:e.code))return!1;throw e}}isFile(e){const t=Uu.default.statSync(e);return t.isFile()}isDirectory(e){
const t=Uu.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e)?this.isDirectory(e
)?this.deleteDirectory(e):Uu.default.unlinkSync(e):id.warn(`deleteFile: Path did not exist: ${e}`)}deleteDirectory(e){
this.pathExists(e)?Uu.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):id.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r,n){return new nd(e,t,r,n)}createDirectory(e){
return this.pathExists(e)&&this.isDirectory(e)||Uu.default.mkdirSync(e),this}readFile(e){return Uu.default.readFileSync(
e,{encoding:"utf8"})}writeFile(e,t){return Uu.default.writeFileSync(e,t,{encoding:"utf8"}),this}getWorkingDirectory(){
return process.cwd()}createTemporaryFile(){let e="";do{var t=ku.default.randomBytes(20).toString("hex")}while(
e=Mu.default.join(this.getWorkingDirectory(),`${t}.tmp`),Uu.default.existsSync(e));if(!e)throw new TypeError(
"Could not create temp file");return this._tempFileNames.push(e),e}}(vu=Ml=Ml||{}).STRINGIFY="stringify",
vu.PARSE="parse";const sd=fc.createLogger("BaseStepController");(vu=kl={}
).JSON_STARTED="BaseStepController:scriptStarted",vu.JSON_PAUSED="BaseStepController:scriptPaused",
vu.JSON_RESUMED="BaseStepController:scriptResumed",vu.JSON_CANCELLED="BaseStepController:scriptCancelled",
vu.JSON_FAILED="BaseStepController:scriptFailed",vu.JSON_FINISHED="BaseStepController:scriptFinished",
vu.JSON_CHANGED="BaseStepController:scriptChanged";class ad{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(u(this,
"_context",void 0),u(this,"_observer",void 0),u(this,"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,
"_stepName",void 0),u(this,"_name",void 0),u(this,"_action",void 0),u(this,"_input",void 0),u(this,"_output",void 0),u(
this,"_state",void 0),u(this,"_compiledAction",void 0),u(this,"_compiledInput",void 0),u(this,"_compiledOutput",void 0),
u(this,"_successResult",void 0),u(this,"_errorResult",void 0),!p(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!p(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!z(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!v(a)&&!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=yl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new Mc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:
case yl.FAILED:return!1}}isStarted(){switch(this._state){case yl.STARTED:case yl.PAUSED:return!0;case yl.CONSTRUCTED:
case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}isPaused(){switch(this._state){case yl.PAUSED:return!0
;case yl.CONSTRUCTED:case yl.STARTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}isFinished(){switch(
this._state){case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!0;case yl.CONSTRUCTED:case yl.STARTED:
case yl.PAUSED:return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:case yl.CANCELLED:
case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}isCancelled(){switch(this._state){case yl.CANCELLED:
return!0;case yl.FINISHED:case yl.FAILED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}isFailed(){switch(
this._state){case yl.FAILED:return!0;case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.STARTED:
case yl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==yl.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=yl.STARTED,!z(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${Vc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!z(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${Vc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${Vc.toString(this._output)}`);if(this._compiledOutput=n,
sd.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(kl.JSON_STARTED)&&this._observer.triggerEvent(kl.JSON_STARTED,this),
this._observer.hasCallbacks(kl.JSON_CHANGED)&&this._observer.triggerEvent(kl.JSON_CHANGED,this),!It(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,Rt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(kl.JSON_STARTED,e)}onPaused(e
){return this.on(kl.JSON_PAUSED,e)}onResumed(e){return this.on(kl.JSON_RESUMED,e)}onCancelled(e){return this.on(
kl.JSON_CANCELLED,e)}onFailed(e){return this.on(kl.JSON_FAILED,e)}onFinished(e){return this.on(kl.JSON_FINISHED,e)}
onChanged(e){return this.on(kl.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){sd.error(
"Action success: ",e),void 0!==this._compiledOutput?(sd.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):sd.info("No output target configured for result: ",e),
this._successResult=e,this._state=yl.FINISHED,this._observer.hasCallbacks(kl.JSON_FINISHED
)&&this._observer.triggerEvent(kl.JSON_FINISHED,this),this._observer.hasCallbacks(kl.JSON_CHANGED
)&&this._observer.triggerEvent(kl.JSON_CHANGED,this)}_errorCloseAction(e){sd.error("Action failed: ",e),
this._errorResult=e,this._state=yl.FAILED,this._observer.hasCallbacks(kl.JSON_FAILED)&&this._observer.triggerEvent(
kl.JSON_FAILED,this),this._observer.hasCallbacks(kl.JSON_CHANGED)&&this._observer.triggerEvent(kl.JSON_CHANGED,this)}}u(
ad,"Event",kl),u(ad,"State",yl);const ld=Do(fu,["name","json","action","output"]),ud=fc.createLogger("JsonController")
;class cd extends ad{static parseControllerModel(e){if(Qe(e))return e}static isControllerModel(e){return Qe(e)}
static createController(e,t){return new cd(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=Ml.STRINGIFY,i=void 0
){super(e,ml.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:Ml.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case Ml.STRINGIFY:case Ml.PARSE:return 1}}())throw ud.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${Vc.toString(e)}`);if(e===Ml.STRINGIFY){if(!z(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${Vc.toString(t)}`);var r=JSON.stringify(t,null,2)
;if(!p(r))throw ud.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==Ml.PARSE
)throw ud.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw ud.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${Vc.toString(t)}`)
;return JSON.parse(t)}}(vu=Gl=Gl||{}).STRINGIFY="stringify",vu.PARSE="parse";const dd=Do(fu,["name","csv","action",
"output"]),hd=fc.createLogger("CsvController");class _d extends ad{static parseControllerModel(e){if(tt(e))return e}
static isControllerModel(e){return tt(e)}static createController(e,t){return new _d(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Gl.STRINGIFY,i=void 0){super(e,ml.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Gl.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Gl.STRINGIFY:case Gl.PARSE:return 1}}())throw hd.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${Vc.toString(e)}`);if(e===Gl.STRINGIFY
){if(!et(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${Vc.toString(t)}`)
;if(n="\n",!p(r=xi(t,e=>{return[e,t,r]=[e,",",'"'],xi(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Gl.PARSE)throw hd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw hd.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${Vc.toString(t)}`);if(n="\n",t=et(r=t)?r:(p(r
)||(r=`${r}`),xi(pa(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Ze(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Ya(e,'"')&&rl(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!et(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const Ed=Do(fu,["name","command","args","env"]),
vd=fc.createLogger("BaseScriptController");(vu=jl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
vu.SCRIPT_PAUSED="BaseScriptController:scriptPaused",vu.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
vu.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",vu.SCRIPT_FAILED="BaseScriptController:scriptFailed",
vu.SCRIPT_FINISHED="BaseScriptController:scriptFinished",vu.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class pd{constructor(e,t,r,n,i,o,s=[],a={},l=void 0){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,
"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,"_stepName",void 0),u(this,"_name",void 0),u(this,
"_command",void 0),u(this,"_cwd",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_closeCallback",void 0),u(
this,"_compiledCwd",void 0),u(this,"_compiledCommand",void 0),u(this,"_compiledArgs",void 0),u(this,"_compiledEnv",
void 0),u(this,"_systemProcess",void 0),u(this,"_state",void 0),!p(r))throw new TypeError(
`[${n}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] name invalid: ${i}`);if(!p(o))throw new TypeError(
`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,p,0))throw new TypeError(
`[${n}#${i}] must have a valid args: ${JSON.stringify(s)}`);if(!N(a,p,p))throw new TypeError(
`[${n}#${i}] must have a valid env: ${JSON.stringify(a)}`);if(!f(l))throw new TypeError(`[${n}#${i}] invalid cwd: ${l}`)
;this._controllerType=t,this._controllerName=r,this._stepName=n,this._context=e,this._state=yl.CONSTRUCTED,this._name=i,
this._cwd=l,this._command=o,this._args=s,this._env=a,this._observer=new Mc(`BaseScriptController#${i}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`BaseScriptController#${this._name}`}
getStateDTO(){return{type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:return!1}}isStarted(){switch(this._state){case yl.STARTED:case yl.PAUSED:return!0
;case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}isPaused(){switch(this._state){
case yl.PAUSED:return!0;case yl.CONSTRUCTED:case yl.STARTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!1}}
isFinished(){switch(this._state){case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:return!0;case yl.CONSTRUCTED:
case yl.STARTED:case yl.PAUSED:return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:
case yl.CANCELLED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}isCancelled(){switch(this._state){
case yl.CANCELLED:return!0;case yl.FINISHED:case yl.FAILED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}
isFailed(){switch(this._state){case yl.FAILED:return!0;case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:
case yl.STARTED:case yl.PAUSED:return!1}}start(){var e,t,r;if(this._state!==yl.CONSTRUCTED)throw new Error(
`${this._stepName}#${this._name} was already started`);if(this._state=yl.STARTED,!p(e=this._context.compileModel(
this._command)))throw new Error(`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(
this._compiledCommand=e,!f(t=this._context.compileModel(this._cwd)))throw new Error(
`${this._stepName}#${this._name} failed to compile the cwd: ${this._cwd}`);if(this._compiledCwd=t,!d(
r=this._context.compileModel(this._args),p))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=r,!N(
t=this._context.compileModel(this._env),p,p))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=t,vd.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,r,this._compiledEnv,
this._compiledCwd),this._systemProcess.on(Fl.ON_EXIT,this._closeCallback),this._systemProcess.start(),
this._observer.hasCallbacks(jl.SCRIPT_STARTED)&&this._observer.triggerEvent(jl.SCRIPT_STARTED,this),
this._observer.hasCallbacks(jl.SCRIPT_CHANGED)&&this._observer.triggerEvent(jl.SCRIPT_CHANGED,this),this}pause(){if(
!this.isRunning())throw new Error(`${this._stepName}#${this._name} was not running`);if(!this._systemProcess
)throw new Error("No process initialized");return vd.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),
this._state=yl.PAUSED,this._systemProcess.pause(),this._observer.hasCallbacks(jl.SCRIPT_PAUSED
)&&this._observer.triggerEvent(jl.SCRIPT_PAUSED,this),this._observer.hasCallbacks(jl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(jl.SCRIPT_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess)throw new Error("No process initialized")
;return vd.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),this._state=yl.STARTED,
this._systemProcess.resume(),this._observer.hasCallbacks(jl.SCRIPT_RESUMED)&&this._observer.triggerEvent(
jl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(jl.SCRIPT_CHANGED)&&this._observer.triggerEvent(jl.SCRIPT_CHANGED,
this),this}stop(){if(this._state!==yl.STARTED)throw new Error(`${this._stepName}#${this._name} was not started`);if(
!this._systemProcess)throw new Error("No process initialized");return vd.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=yl.CANCELLED,this._systemProcess.stop(),
this._observer.hasCallbacks(jl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(jl.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(jl.SCRIPT_CHANGED)&&this._observer.triggerEvent(jl.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(jl.SCRIPT_STARTED,e)}onPaused(e){return this.on(jl.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
jl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(jl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(jl.SCRIPT_FAILED,e)
}onFinished(e){return this.on(jl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(jl.SCRIPT_CHANGED,e)}getErrorString(){
return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),vd.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=yl.FINISHED,this._observer.hasCallbacks(
jl.SCRIPT_FINISHED)&&this._observer.triggerEvent(jl.SCRIPT_FINISHED,this)):(this._state=yl.FAILED,
this._observer.hasCallbacks(jl.SCRIPT_FAILED)&&this._observer.triggerEvent(jl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(jl.SCRIPT_CHANGED)&&this._observer.triggerEvent(jl.SCRIPT_CHANGED,this)}}u(pd,"Event",jl),u(
pd,"State",yl);class fd extends pd{static parseControllerModel(e){if(rt(e))return e}static isControllerModel(e){
return rt(e)}static createController(e,t){return new fd(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){
super(e,ml.SCRIPT,"ScriptController","command",t,r,n,i)}}(vu=Hl=Hl||{}).MKDIR="mkdir",vu.READ="read",
vu.READ_OR_CREATE="read/create",vu.WRITE="write";const gd=Do(fu,["name","file","target","content","output","default"]),
Td=fc.createLogger("FileController");class Sd extends ad{static parseControllerModel(e){if(nt(e))return e}
static isControllerModel(e){return nt(e)}static createController(e,t){return new Sd(e,t.name,t,t.file,t.output)}
constructor(e,t,r,n,i=void 0){super(e,ml.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(!function(){switch(e){case Hl.MKDIR:case Hl.READ:case Hl.READ_OR_CREATE:
case Hl.WRITE:return 1}}())throw Td.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${Vc.toString(e)}`);if(!nt(t))throw Td.debug("run: input = ",t),
new TypeError(`[file#${this.getName()}] failed to compile the input property: ${Vc.toString(t)}`)
;let i=null==t?void 0:t.target;if(!f(i))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${Vc.toString(i)}`);if(e===Hl.MKDIR)return void 0===i?(
i=n.createTemporaryFile(),n.createDirectory(i),Td.info(`Created temporary directory: ${i}`)):(n.createDirectory(i),
Td.info(`Created directory: ${i}`)),i;if(e===Hl.READ){if(void 0===i)throw new TypeError(`[file#${this.getName(
)}] No file to read defined`);return n.readFile(i)}if(e===Hl.READ_OR_CREATE){if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);if(n.pathExists(i))return n.readFile(i);{
let e=null==t?void 0:t.default;return p(e)||(e=JSON.stringify(e,null,2)),n.writeFile(i,e),e}}if(e!==Hl.WRITE
)throw Td.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);{if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);let e=null==t?void 0:t.content;return p(e)||(e=JSON.stringify(e,null
,2)),n.writeFile(i,e),i}}}const yd=Do(fu,["name","variable","set"]);(Bl=Bl||{}).SET="set",xl=Bl
;const md=fc.createLogger("VariableController");class Ad extends ad{static parseControllerModel(e){if(it(e))return e}
static isControllerModel(e){return it(e)}static createController(e,t){return new Ad(e,t.name,t.set,xl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Bl.SET)throw md.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${Vc.toString(e)}`);if(e!==xl.SET)throw md.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!z(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${Vc.toString(t)}`);return t}}const Nd=Do(fu,["name","git","url",
"target","message","cwd"]);(vu=Eu={}).CLONE="clone",vu.COMMIT="commit",vu.ADD="add",Jl=Eu;class wd extends pd{
static parseControllerModel(e){if(ot(e))return e}static isControllerModel(e){return ot(e)}static createController(e,t){
var r,n,i;if(t.git===Jl.CLONE)return r=t.target,n=t.url,new wd(e,t.name,"git",["clone",n,r],{GIT_TERMINAL_PROMPT:"0",
GIT_ASKPASS:"/bin/echo"});if(t.git===Jl.ADD)return i=null==t?void 0:t.target,new wd(e,t.name,"git",["add",i],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"});if(t.git!==Jl.COMMIT)throw new TypeError(
`Unknown git action: ${t.git}`);return i=null!==(i=null==t?void 0:t.message)&&void 0!==i?i:"Pipeline commit",new wd(e,
t.name,"git",["commit","-m",i],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"})}constructor(e,t,r,n=[],i={}){super(e,
ml.GIT,"GitController","git",t,r,n,i)}}const Rd=Do(fu,["name","assert","equals","output"]);(Wl=Wl||{}).EQUALS="equals",
Vl=Wl;const Cd=fc.createLogger("AssertController");class bd extends ad{static parseControllerModel(e){if(st(e))return e}
static isControllerModel(e){return st(e)}static createController(e,t){return new bd(e,t.name,t,Vl.EQUALS,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`AssertController#${t}`,`assert#${t}`,t,r,n,i)}run(e,t){if(
e!==Wl.EQUALS)throw Cd.debug("run: action = ",e),new TypeError(`[assert#${this.getName(
)}] failed to compile the action property: ${Vc.toString(e)}`);if(e!==Vl.EQUALS)throw Cd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!st(t))throw new TypeError(`[assert#${this.getName(
)}] failed to compile the input property as variable: ${Vc.toString(t)}`);if((e=null==t?void 0:t.assert)!==(
t=null==t?void 0:t.equals))throw new TypeError(`[assert#${this.getName()}] Values do not match: ${Vc.toString(e
)} vs ${Vc.toString(t)}`);return e}}const Id=Do(fu,["name","concat","output"]);(ql=ql||{}).CONCAT="concat",Kl=ql
;const Dd=fc.createLogger("ConcatController");class Od extends ad{static parseControllerModel(e){if(at(e))return e}
static isControllerModel(e){return at(e)}static createController(e,t){return new Od(e,t.name,t,Kl.CONCAT,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`ConcatController#${t}`,`concat#${t}`,t,r,n,i)}run(e,t){if(
e!==ql.CONCAT)throw Dd.debug("run: action = ",e),new TypeError(`[concat#${this.getName(
)}] failed to compile the action property: ${Vc.toString(e)}`);if(e!==Kl.CONCAT)throw Dd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);{if(!at(t))throw new TypeError(`[concat#${this.getName(
)}] failed to compile the input property as variable: ${Vc.toString(t)}`);const r=null==t?void 0:t.concat;return d(r,Y
)?Do([],...r):d(r,X)?is(r,(e,t)=>D(D({},e),t),{}):c(r)?r.join(""):[r]}}}fc.createLogger("waitHttpResource"),
fc.createLogger("waitLocalResource");const Ld=fc.createLogger("waitMatrixResource"),Pd=fc.createLogger("main")
;fc.setLogLevel(ec),async function(n=[]){var i,o,s;let a;try{if(class{static registerControllers(){
Wc.registerController(Od),Wc.registerController(bd),Wc.registerController(Ad),Wc.registerController(wd),
Wc.registerController(Sd),Wc.registerController(cd),Wc.registerController(_d),Wc.registerController(fd)}
}.registerControllers(),Pd.debug(`Loglevel ${fc.getLogLevelString()}`),i=dc,n.shift(),!n.shift())return console.log(B(i)
),pl.ARGUMENT_PARSE_ERROR;if(0===n.length)return console.log(B(i)),pl.ARGUMENT_PARSE_ERROR;let t=!1,r=!0;do{if(
o=n.shift(),r){let e=!1;switch(function(){switch(o){case"-h":case"--help":case 0:return 0;case"-v":case"--version":
case 1:return 1;case"--":case 2:return 2;case"-w":case"--wait":case 3:return 3}}()){case 0:return console.log(B(i)),
pl.OK;case 1:return console.log(function(e){const t=Js([oc?"LOCAL":"",sc?"HTTP":"",ac?"MATRIX":"",uc?"TEST":"",
cc?"DEV":""],e=>!!e);return`${e} v${rc} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${rc}'
  BUILD_NODE_ENV              = '${nc}'
  BUILD_DATE                  = '${ic}'
  BUILD_WITH_LOCAL_RESOURCES  = '${oc}'
  BUILD_WITH_HTTP_RESOURCES   = '${sc}'
  BUILD_WITH_MATRIX_RESOURCES = '${ac}'
`}(i)),pl.OK;case 3:t=!0,e=!0;break;case 2:r=!1,e=!0}if(!r||e)continue}if(void 0===(s=Sc.parseRunnerResource(o))
)return Pd.error(`Unsupported argument: ${o}`),console.log(B(i)),pl.UNKNOWN_ARGUMENT;a=new od;let e=await Ye(a,s);if(
t&&e===pl.NO_WORK_AVAILABLE&&(await async function(e){switch(e.type){case hl.HTTP:
return sc?pl.UNIMPLEMENTED_FEATURE:pl.UNBUILD_FEATURE;case hl.LOCAL:
return oc?pl.UNIMPLEMENTED_FEATURE:pl.UNBUILD_FEATURE;case hl.MATRIX:return ac?async function(t){var r,n,i;try{if(
Ld.debug("waitMatrixResource: ",t),j(r=await async function(e,t){if(k(t))return new Qc(e,void 0,void 0,t.access_token)
;if(F(t)){const r=new Qc(e);return r.login(t.username,t.password)}return pl.UNKNOWN_AUTHENTICATION_TYPE}(
`https://${t.homeserver}`,t.authentication)))return r;if(j(n=await async function(e){let t=e.getUserId();return t||(
t=await e.whoami(),t)?(Ld.info(`Agent user ID: ${t}`),t):(Ld.error("Could not detect agent user ID"),pl.UNKNOWN_AGENT_ID
)}(r)))return n;let e=await ut(r,i=await async function(e){const t=new ed(e,Cl.FI_NOR_AGENT_DTO);return t.getAll()}(r))
;if(e===pl.OK)return pl.OK;do{try{await async function(s,a){return new Promise((i,t)=>{let o;try{o=s.on(Ol.EVENT,
function(e,t){var r=null==t?void 0:t.type,n=null==t?void 0:t.room_id;Ld.debug("waitForEvents: Event: ",r,n,t),
r&&a.includes(r)&&(o&&(o(),o=void 0),s.stop(),i())}),s.start()}catch(e){o&&(o(),o=void 0),s.stop(),t(e)}})}(r,[
Cl.M_ROOM_CREATE,Cl.M_ROOM_JOIN_RULES,Cl.M_ROOM_MEMBER])}catch(e){Ld.error("Error while waiting: ",e),await new Promise(
(e,t)=>{try{setTimeout(e,15e3)}catch(e){t(e)}})}}while(e=await ut(r,i),e===pl.NO_WORK_AVAILABLE);return e}catch(e){
return Ld.error("Error: ",e),pl.MATRIX_RESOURCE_FAILED}}(e):pl.UNBUILD_FEATURE;default:return pl.UNKNOWN_RESOURCE_TYPE}
}((a,s)),e=await Ye(a,s)),e!==pl.OK)return e===pl.UNKNOWN_RESOURCE_TYPE?(Pd.error(`Error NorPP${e}: ${H(e
)}: Resource type was unknown: ${s.type}`),console.log(B(i)),pl.UNKNOWN_RESOURCE_TYPE):(j(e)?Pd.error(
`Error EX-${e}: ${H(e)}: for ${U(s.type)} resource ${o}`):Pd.error(`Error: Exit status ${e}: for ${U(s.type
)} resource ${o}`),e)}while(1<=n.length);return pl.OK}catch(e){return Pd.error("Fatal error: ",e),pl.FATAL_ERROR
}finally{a&&a.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)}
);
