#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function O(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new zt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Xt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Mn);return o.cache=new(u.Cache||kn),o}
function v(e){return void 0===e}function c(e){return lr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!lr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Fa(e)}function p(e){return La(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return Ma(e)}function g(e){return v(e)||Ma(e)}function T(e,t){return Vi(e,t)}
function S(e,t){return Zi(e,t)}function A(e,t){return gt(e)&&S(Qa(e),t)}function m(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,gt(e)&&S(P(e),t))}function N(e){return!!gt(e)&&!(e instanceof Date)&&!At(e)&&!c(
e)&&m(e,p,void 0)}function y(e,t=p,r=void 0){return!!gt(e)&&!(e instanceof Date)&&!At(e)&&!c(e)&&m(e,t,r)}function R(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!gt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(At(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=Bo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Qa(e),n=Jo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function C(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return R(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function w(...e){return t=>T(e,e=>e(t))}function b(e){return gt(e)}function I(e,t){return b(e
)&&0===(r=t,Fs(P(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return Ca(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=$i(e,(e,t)=>t);return Fs(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Fs(e,e=>t(e))):[]}function U(e){switch(e
){case nl.HTTP:return"http";case nl.LOCAL:return"local";case nl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return N(e)&&function(){switch(null==e?void 0:e.type){
case ol.NONE:case ol.BASIC_AUTH:case ol.BEARER_AUTH:return 1;default:return}}()}function F(e){return N(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===sl.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:sl.BASIC_AUTH,username:r,password:n
}}function M(e){return N(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===sl.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:sl.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:sl.BEARER_AUTH,access_token:n}}function j(e){if(al.FATAL_SIGNAL_RANGE_START<=e&&e<=al.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-al.FATAL_SIGNAL_RANGE_START}`;switch(e){case al.OK:return"OK";case al.GENERAL_ERRORS:
return"GENERAL_ERRORS";case al.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case al.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case al.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case al.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case al.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case al.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case al.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case al.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case al.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case al.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case al.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case al.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case al.FATAL_ERROR:return"FATAL_ERROR"
;case al.USAGE:return"USAGE";case al.DATAERR:return"DATAERR";case al.NOINPUT:return"NOINPUT";case al.NOUSER:
return"NOUSER";case al.NOHOST:return"NOHOST";case al.UNAVAILABLE:return"UNAVAILABLE";case al.SOFTWARE:return"SOFTWARE"
;case al.OSERR:return"OSERR";case al.OSFILE:return"OSFILE";case al.CANTCREAT:return"CANTCREAT";case al.IOERR:
return"IOERR";case al.TEMPFAIL:return"TEMPFAIL";case al.PROTOCOL:return"PROTOCOL";case al.NOPERM:return"NOPERM"
;case al.CONFIG:return"CONFIG";case al.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case al.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case al.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case al.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case al.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case al.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case al.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case al.WORK_CANCELLED:return"WORK_CANCELLED";case al.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return zu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${qu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Ku?`

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
`:""}${Vu?`

  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.
`:""}

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
`}function x(e){if(Fa(e))switch(e){case ul.OPTIONS:return"options";case ul.GET:return"get";case ul.POST:return"post"
;case ul.PUT:return"put";case ul.DELETE:return"delete";case ul.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!La(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function B(e){return p(e)||Fa(e)||Ca(e)||wa(e)
}function W(e){return B(e)||d(e,w(W,v))||V(e)}function V(e){return N(e)&&m(e,p,w(W,v))}function q(e){return v(e)||V(e)}
function K(e){return B(e)||X(e)||z(e)}function z(e){return N(e)&&m(e,p,w(K,v))}function X(e){return d(e,w(K,v))}
function Y(e){return N(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===nu.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Ca(r))||N(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===nu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===nu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===nu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||N(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===nu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return N(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(v(null==e?void 0:e.variables)||V(
null==e?void 0:e.variables))}function Z(e){return!(!Q(e)||void 0===Sc.findController(e)&&!(Q(e)&&N(e)&&J(
null==e?void 0:e.name)))}function ee(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,Z,1)&&I(e,Ac)}
function te(e){if(ee(e))return e}function re(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,ee,1)&&I(
e,mc)}function ne(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,re,1)&&I(e,Nc)}function ie(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ne(e))return e}(e))&&void 0!==t?t:function(e){if(re(e)
)return e}(e))&&void 0!==t?t:te(e))&&void 0!==t?t:(t=e,null!==(e=Sc.parseControllerModel(t))&&void 0!==e?e:te(t))}
function oe(e){return b(e)&&At(null==e?void 0:e.getName)&&At(null==e?void 0:e.isRunning)&&At(null==e?void 0:e.isStarted
)&&At(null==e?void 0:e.isPaused)&&At(null==e?void 0:e.isCancelled)&&At(null==e?void 0:e.isFinished)&&At(
null==e?void 0:e.isFailed)&&At(null==e?void 0:e.isSuccessful)&&At(null==e?void 0:e.start)&&At(null==e?void 0:e.pause
)&&At(null==e?void 0:e.resume)&&At(null==e?void 0:e.stop)&&At(null==e?void 0:e.destroy)&&At(null==e?void 0:e.toString
)&&At(null==e?void 0:e.toJSON)&&At(null==e?void 0:e.onStarted)&&At(null==e?void 0:e.onPaused)&&At(
null==e?void 0:e.onResumed)&&At(null==e?void 0:e.onCancelled)&&At(null==e?void 0:e.onFailed)&&At(
null==e?void 0:e.onFinished)&&At(null==e?void 0:e.onChanged)}function se(e){return e instanceof Cc}function ae(e){
return e instanceof bc}function le(e){return p(e)&&!!e&&"!"===e[0]}function ue(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function ce(e){return N(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function de(e){return p(e)&&!!e&&"@"===e[0]}
function he(e){return N(e)&&I(e,["content","type","sender"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||de(null==e?void 0:e.sender))}function _e(e){return N(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||de(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||he(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function Ee(e){try{return function(e){if(!N(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!q(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!de(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!he(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function ve(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||_e(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||V(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function pe(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!V(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!_e(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!V(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function fe(e){return mo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ge(e){
return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,ve)}function Te(e){try{return function(e){if(!N(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,ve))throw e=Bo(null==e?void 0:e.events,e=>!ve(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${pe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Se(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&V(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&de(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||_e(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function Ae(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!de(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!_e(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${Ee(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function me(e){return mo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ne(e){
return N(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Se)&&Ca(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function ye(e){try{return function(e){if(!N(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Se)){var t=Bo(null==e?void 0:e.events,e=>!Se(e));throw new TypeError(
`Property "events" item was not correct: ${Ae(t)}`)}if(!Ca(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,he)}function Ce(e){
return mo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function we(e){return N(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,he)}function be(e){return N(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function Ie(e){return N(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||ce(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||ge(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||Ne(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Re(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||we(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||be(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function De(e){try{return function(e){if(!N(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!ce(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!ge(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Te(e)}`);if(
!v(null==e?void 0:e.timeline)&&!Ne(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${ye(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Re(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!we(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!be(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Oe(e){return N(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||_e(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Le(e){try{return function(e){if(!N(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!_e(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Pe(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Oe)}function Ue(e){try{return function(e){if(!N(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Oe))throw e=Bo(
null==e?void 0:e.events,e=>!Oe(e)),new TypeError(`Property "events" had invalid item: ${Le(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function $e(e){return N(e)&&I(e,["invite_state"])&&Pe(
null==e?void 0:e.invite_state)}function Fe(e){try{return function(e){if(!N(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Pe(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Ue(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function ke(e){return N(e)&&I(e,[
"state","timeline","account_data"])&&ge(null==e?void 0:e.state)&&Ne(null==e?void 0:e.timeline)&&we(
null==e?void 0:e.account_data)}function Me(e){return N(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,le,Ie))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,le,$e))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,le,ke))}function Ge(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,le,Ie))throw new TypeError(`Property "join" was invalid: ${C(
null==e?void 0:e.join,le,Ie,ue,De)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,le,$e)
)throw new TypeError(`Property "invite" was invalid: ${C(null==e?void 0:e.invite,le,$e,ue,Fe)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,le,ke))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function je(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
he)}function He(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,he)}function xe(e){return N(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,de)&&d(null==e?void 0:e.left,de)}function Je(e){return y(e,p,E)}
function Be(e){try{return function(e){if(!N(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Me(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ge(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!je(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!we(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!He(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Je(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function We(e){return N(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||wa(null==e?void 0:e.avatar_url))}function Ve(e){
return N(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case Al.M_USER_IN_USE:
case Al.M_INVALID_USERNAME:case Al.M_EXCLUSIVE:case Al.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function qe(e){return encodeURIComponent(e)}async function Ke(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Tl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}function ze(e){return Q(e)&&J(
null==e?void 0:e.name)&&K(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,zc)}
function Xe(e){return d(e,p)}function Ye(e){return d(e,Xe)}function Qe(e){return Q(e)&&J(null==e?void 0:e.name)&&K(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,Qc)}function Ze(e){return Q(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,td);var t,r,n,i}function et(e){return Q(e)&&J(null==e?void 0:e.name
)&&K(null==e?void 0:e.file)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.output)&&I(e,id)}function tt(e){return Q(e
)&&J(null==e?void 0:e.name)&&K(null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,ad)}var rt,nt,it,ot,st,at,lt,ut,
ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,mt,Nt,yt,Rt,Ct,wt,bt,It,Dt,Ot,Lt,Pt,Ut,$t,Ft,kt,Mt,Gt,jt,Ht,xt,Jt,Bt,Wt,Vt,qt,Kt,zt,
Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,Ar,mr,Nr,yr,Rr,Cr,wr,br,Ir,Dr,Or,Lr,Pr,Ur,$r,
Fr,kr,Mr,Gr,jr,Hr,xr,Jr,Br,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An,mn,
Nn,yn,Rn,Cn,wn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,kn,Mn,Gn,jn,Hn,xn,Jn,Bn,Wn,Vn,qn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,
ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,mi,Ni,yi,Ri,Ci,wi,bi,Ii,Di,Oi,Li,Pi,Ui,$i,Fi,ki,Mi,Gi,ji,Hi,xi,Ji,Bi,Wi,Vi,qi,Ki,
zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,Ao,mo,No,yo,Ro,Co,wo,bo,Io,Do,Oo,Lo,Po,Uo,$o,
Fo,ko,Mo,Go,jo,Ho,xo,Jo,Bo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,As,
ms,Ns,ys,Rs,Cs,ws,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,ks,Ms,Gs,js,Hs,xs,Js,Bs,Ws,Vs,qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,
la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,ma,Na,ya,Ra,Ca,wa,ba,Ia,Da,Oa,La,Pa,Ua,$a,Fa,ka,Ma,Ga,ja,Ha,xa,Ja,Ba,Wa,Va,qa,
Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,Tl,Sl,Al,ml,Nl,yl,Rl,Cl,wl,bl,Il,Dl,Ol,Ll,Pl,
Ul,$l,Fl,kl,Ml,Gl,jl,Hl,xl,Jl,Bl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu=require("fs"
),pu=require("querystring"),fu=require("url"),gu=require("path"),Tu=require("child_process"),Su=require("crypto"),Au=e(
vu),mu=t(pu),Nu=e(fu),yu=e(gu),Ru=e(Su),
Cu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,wu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},bu=function(){
this.__data__=[],this.size=0},Iu=function(e,t){return e===t||e!=e&&t!=t},Du=Iu,Ou=function(e,t){for(var r=e.length;r--;
)if(Du(e[r][0],t))return r;return-1},Lu=Ou,Pu=Array.prototype,Uu=Pu.splice,$u=Ou,Fu=Ou,ku=Ou,Mu=bu,Gu=function(e){
var t=this.__data__;return!((e=Lu(t,e))<0||(e==t.length-1?t.pop():Uu.call(t,e,1),--this.size,0))},ju=function(e){
var t=this.__data__;return(e=$u(t,e))<0?void 0:t[e][1]},Hu=function(e){return-1<Fu(this.__data__,e)},xu=function(e,t){
var r=this.__data__,n=ku(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Mu,
r.prototype.delete=Gu,r.prototype.get=ju,r.prototype.has=Hu,r.prototype.set=xu,ct=Gl=r,jl=function(){
this.__data__=new ct,this.size=0},zs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
kl=function(e){return this.__data__.get(e)},Ml=function(e){return this.__data__.has(e)},
Bl=Hl="object"==typeof Cu&&Cu&&Cu.Object===Object&&Cu,Vl="object"==typeof self&&self&&self.Object===Object&&self,Nr=Wl=(
ns=Bl||Vl||Function("return this")()).Symbol,Ws=Object.prototype,dt=Ws.hasOwnProperty,ht=Ws.toString,
_t=Nr?Nr.toStringTag:void 0,yr=Object.prototype,Et=yr.toString,vt=function(e){var t,r,n=dt.call(e,_t),i=e[_t];try{t=!(
e[_t]=void 0)}catch(e){}return r=ht.call(e),t&&(n?e[_t]=i:delete e[_t]),r},pt=function(e){return Et.call(e)},ft=(Ks=Wl
)?Ks.toStringTag:void 0,Tt=ql=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
ft&&ft in Object(e)?vt:pt)(e)},St=gt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
At=function(e){return!!St(e)&&("[object Function]"==(e=Tt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Rr=ns["__core-js_shared__"],
Fl=/[^.]+$/.exec((Yt=Rr)&&Yt.keys&&Yt.keys.IE_PROTO||""),mt=Fl?"Symbol(src)_1."+Fl:"",Qt=Function.prototype,
Nt=Qt.toString,yt=At,Rt=function(e){return!!mt&&mt in e},Ct=gt,wt=zr=function(e){if(null!=e){try{return Nt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Cr=/[\\^$.*+?()[\]{}|]/g,bt=/^\[object .+?Constructor\]$/,
Xs=Function.prototype,pu=Object.prototype,fu=Xs.toString,gu=pu.hasOwnProperty,It=RegExp("^"+fu.call(gu).replace(Cr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dt=function(e){return!(!Ct(e
)||Rt(e))&&(yt(e)?It:bt).test(wt(e))},Ot=function(e,t){return null==e?void 0:e[t]},Pu=(Su=function(e,t){return t=Ot(e,t)
,Dt(t)?t:void 0})(ns,"Map"),Ou=Su(Object,"create"),Pt=Lt=bu=Ou,du=Object.prototype,Ut=du.hasOwnProperty,$t=bu,
hu=Object.prototype,Ft=hu.hasOwnProperty,kt=bu,_u=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Eu=function(e){var t,r=this.__data__;return Pt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Ut.call(r,e)?r[e]:void 0},Mu=function(e){var t=this.__data__;return $t?void 0!==t[e]:Ft.call(t,e)},
Gu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=kt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Lt?Lt(null):{},this.size=0},i.prototype.delete=_u,i.prototype.get=Eu,
i.prototype.has=Mu,i.prototype.set=Gu,Mt=i,Gt=Gl,jt=Pu,ju=function(){this.size=0,this.__data__={hash:new Mt,map:new(
jt||Gt),string:new Mt}},Ht=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Wt=Bt=Jt=xt=function(e,t){
return e=e.__data__,Ht(t)?e["string"==typeof t?"string":"hash"]:e.map},Hu=function(e){return e=xt(this,e).delete(e),
this.size-=e?1:0,e},xu=function(e){return Jt(this,e).get(e)},Cu=function(e){return Bt(this,e).has(e)},Hl=function(e,t){
var r=Wt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=ju,o.prototype.delete=Hu,
o.prototype.get=xu,o.prototype.has=Cu,o.prototype.set=Hl,qt=Pu,Kt=Vl=o,zt=Vt=Gl,ts=zs,Ws=kl,Nr=Ml,yr=function(e,t){var r
,n=this.__data__;if(n instanceof Vt){if(r=n.__data__,!qt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Kt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=jl,s.prototype.delete=ts,
s.prototype.get=Ws,s.prototype.has=Nr,s.prototype.set=yr,Ks=s,Xt=Vl,Rr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Rr,Zt=Yt=a,er=Fl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},tr=Qt=function(e,t){return e.has(t)},Xs=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new Zt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!er(t,function(e,t){if(!tr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},pu=ns.Uint8Array,rr=pu,nr=Iu,ir=Xs,or=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},sr=fu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Cr=(gu=Wl)?gu.prototype:void 0,ar=Cr?Cr.valueOf:void 0,Ou=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new rr(e),new rr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return nr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=or;case"[object Set]":return l=l||sr,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=ir(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(ar)return ar.call(e)==ar.call(t)}return!1},du=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},hu=Array.isArray,ur=du,cr=lr=hu,bu=function(e,t,r){
return t=t(e),cr(e)?t:ur(t,r(e))},dr=_u=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Eu=Object.prototype,hr=Eu.propertyIsEnumerable,Mu=(_r=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),dr(_r(t),function(e){return hr.call(t,e)}))}:function(){return[]},Gu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Er=ql,ju=function(e){return vr(e)&&"[object Arguments]"==Er(e)},
pr=vr=Hu=function(e){return null!=e&&"object"==typeof e},xu=Object.prototype,fr=xu.hasOwnProperty,
gr=xu.propertyIsEnumerable,Cu=ju(function(){return arguments}())?ju:function(e){return pr(e)&&fr.call(e,"callee"
)&&!gr.call(e,"callee")},Hl=ns,Gl=function(){return!1},Hl=(Hl=(jl=(Ml=(jl=(Ml=(kl=zs={exports:{}}).exports
)&&!Ml.nodeType&&Ml)&&kl&&!kl.nodeType&&kl)&&Ml.exports===jl)?Hl.Buffer:void 0)?Hl.isBuffer:void 0,kl.exports=Gl=Hl||Gl,
Tr=/^(?:0|[1-9]\d*)$/,ts=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Tr.test(e))&&-1<e&&e%1==0&&e<t},Sr=ql,Ar=Ws=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},mr=Hu,Nr="[object Arguments]",yr="[object Array]",
Rr="[object Boolean]",pu="[object Date]",gu="[object Error]",Cr="[object Function]",hu="[object Map]",
xu="[object Object]",ju="[object RegExp]",Ml="[object Set]",jl="[object String]",Hl="[object WeakMap]",
kl="[object ArrayBuffer]",Gl="[object DataView]",(wr={}
)["[object Float32Array]"]=wr["[object Float64Array]"]=wr["[object Int8Array]"]=wr["[object Int16Array]"]=wr["[object Int32Array]"]=wr["[object Uint8Array]"]=wr["[object Uint8ClampedArray]"]=wr["[object Uint16Array]"]=wr["[object Uint32Array]"]=!0
,
wr[Nr]=wr[yr]=wr[kl]=wr[Rr]=wr[Gl]=wr[pu]=wr[gu]=wr[Cr]=wr[hu]=wr["[object Number]"]=wr[xu]=wr[ju]=wr[Ml]=wr[jl]=wr[Hl]=!1
,Eu=function(e){return mr(e)&&Ar(e.length)&&!!wr[Sr(e)]},xu=function(t){return function(e){return t(e)}},ju=Bl,Hl=(Hl=(
jl=Ml={exports:{}}).exports)&&!Hl.nodeType&&Hl,Hl=(xl=Hl&&jl&&!jl.nodeType&&jl)&&xl.exports===Hl,Jl=Hl&&ju.process,
ju=function(){try{return xl&&xl.require&&xl.require("util").types||Jl&&Jl.binding&&Jl.binding("util")}catch(e){}}(),
jl.exports=ju,Bl=Eu,ju=(jl=(Hl=Ml.exports)&&Hl.isTypedArray)?xu(jl):Bl,br=Gu,Ir=Cu,Dr=lr,Or=zs.exports,Lr=ts,Pr=Eu=ju,
Hl=Object.prototype,Ur=Hl.hasOwnProperty,jl=function(e,t){var r,n=Dr(e),i=!n&&Ir(e),o=!n&&!i&&Or(e),s=!n&&!i&&!o&&Pr(e),
a=n||i||o||s,l=a?br(e.length,String):[],u=l.length;for(r in e)!t&&!Ur.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Lr(r,u))||l.push(r);return l},
$r=Object.prototype,Bl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||$r)},
uu=Object.keys,cu=Object,Fr=Bl,kr=function(e){return uu(cu(e))},ju=Object.prototype,Mr=ju.hasOwnProperty,Gr=At,jr=Ws,
Hr=jl,xr=function(e){var t,r;if(!Fr(e))return kr(e);for(r in t=[],Object(e))Mr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Jr=Hl=function(e){return null!=e&&jr(e.length)&&!Gr(e)},Br=bu,Wr=Mu,Vr=Bl=function(e){return(Jr(e)?Hr:xr)(e)}
,qr=function(e){return Br(e,Vr,Wr)},Gu=Object.prototype,Kr=Gu.hasOwnProperty,ju=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=qr(e),T=g.length;if(T!=qr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:Kr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},jl=Su(ns,
"DataView"),bu=Pu,Mu=Su(ns,"Promise"),Pu=Gu=Su(ns,"Set"),ns=Su(ns,"WeakMap"),Xr=ql,Qr="[object Map]",
Zr="[object Promise]",en="[object Set]",tn="[object WeakMap]",rn="[object DataView]",nn=(Yr=zr)(zr=jl),on=Yr(bu),sn=Yr(
Mu),an=Yr(Pu),ln=Yr(ns),jl=Xr,(zr&&jl(new zr(new ArrayBuffer(1)))!=rn||bu&&jl(new bu)!=Qr||Mu&&jl(Mu.resolve()
)!=Zr||Pu&&jl(new Pu)!=en||ns&&jl(new ns)!=tn)&&(jl=function(e){var t=Xr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Yr(e):"")switch(e){case nn:return rn;case on:return Qr;case sn:return Zr
;case an:return en;case ln:return tn}return t}),un=Ks,cn=Xs,dn=Ou,hn=ju,_n=jl,En=lr,vn=zs.exports,pn=Eu,
fn="[object Arguments]",gn="[object Array]",Tn="[object Object]",Pu=Object.prototype,Sn=Pu.hasOwnProperty,An=function(e,
t,r,n,i,o){var s,a,l=En(e),u=En(t),c=l?gn:_n(e),d=u?gn:_n(t),h=(c=c==fn?Tn:c)==Tn,u=(d=d==fn?Tn:d)==Tn;if((d=c==d)&&vn(e
)){if(!vn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new un,l||pn(e)?cn(e,t,r,n,i,o):dn(e,t,c,r,n,i,o)):1&r||(
s=h&&Sn.call(e,"__wrapped__"),a=u&&Sn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new un,hn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new un)},Nn=Ks,yn=ns=function e(t,r,n,i,o){return t===r||(null==t||null==r||!mn(t)&&!mn(r
)?t!=t&&r!=r:An(t,r,n,i,e,o))},Rn=gt,Cn=Xs=function(e){return e==e&&!Rn(e)},wn=Bl,bn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Nn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?yn(a,s,3,n,l):u))return!1;return!0},In=function(e){for(var t,r,n=wn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Cn(r)];return n},Dn=Ou=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
ju=function(t){var r=In(t);return 1==r.length&&r[0][2]?Dn(r[0][0],r[0][1]):function(e){return e===t||bn(e,t,r)}},On=ql,
Ln=mn=Hu,Pn=lr,Un=jl=function(e){return"symbol"==typeof e||Ln(e)&&"[object Symbol]"==On(e)},
$n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/,zs=function(e,t){if(Pn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Un(e))||Fn.test(e)||!$n.test(e)||null!=t&&e in Object(t)},
kn=Vl,Mn="Expected a function",u.Cache=kn,
Gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jn=/\\(\\)?/g,Mu=0
,lu=(Mu=u(Mu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Gn,function(e,t,r,n){i.push(
r?n.replace(jn,"$1"):t||e)}),i},function(e){return 500===lu.size&&lu.clear(),e})).cache,Hn=wu,Ks=(Pu=Wl
)?Pu.prototype:void 0,Bn=Ks?Ks.toString:void 0,Wn=Vl=function e(t){if("string"==typeof t)return t;if(xn(t))return Hn(t,e
)+"";if(Jn(t))return Bn?Bn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Kn=Mu,zn=Pu=function(e){
return null==e?"":Wn(e)},Xn=Jn=jl,ti=Yn=Ks=function(e,t){return Vn(e)?e:qn(e,t)?[e]:Kn(zn(e))},ri=Cu,oi=Ws,ai=function(e
,t){return null!=e&&t in Object(e)},li=Eu=function(e,t,r){for(var n,i,o=(t=ti(t,e)).length,s=!(n=-1);++n<o&&(i=si(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&oi(o)&&ii(i,o)&&(ni(e)||ri(e))},ui=ns,
ci=ei=function(e,t,r){return void 0===(t=null==e?void 0:Zn(e,t))?r:t},di=function(e,t){return null!=e&&li(e,t,ai)},_i=Xs
,Ei=Ou,pi=Zn=Ws=function(e,t){for(var r=0,n=(t=Yn(t,e)).length;null!=e&&r<n;)e=e[Qn(t[r++])];return r&&r==n?e:void 0},
fi=function(t){return function(e){return null==e?void 0:e[t]}},gi=function(t){return function(e){return pi(e,t)}},
Ti=hi=qn=zs,Si=vi=si=Qn=ns=function(e){if("string"==typeof e||Xn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Ai=ju,mi=function(r,n){return hi(r)&&_i(n)?Ei(vi(r),n):function(e){var t=ci(e,r);return void 0===t&&t===n?di(e,r):ui(n,t
,3)}},Ni=Xs=function(e){return e},yi=ni=Vn=xn=lr,Ri=function(e){return Ti(e)?fi(Si(e)):gi(e)},Ci=zs=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},wi=Bl,Oi=wu,Pi=zs=function(e,n){
var i=-1,o=Di(e)?Array(e.length):[];return Ii(e,function(e,t,r){o[++i]=n(e,t,r)}),o},$i=function(e,t){return(Ui(e)?Oi:Pi
)(e,Li(t))},ki=Iu,Mi=Di=bi=Hl,Gi=ii=ts,ji=gt,Hi=Fl,Ji=function(e,n){var i;return Fi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Vi=function(e,t,r){var n=Bi(e)?Hi:Ji;return r&&Wi(e,t,r)&&(t=void 0),n(e,xi(t))},qi=Fi=Ii=Fl=ju=function(e,t){
if(null==e)return e;if(!bi(e))return e&&Ci(e,t,wi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},Ki=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},zi=function(e,n){
var i=!0;return qi(e,function(e,t,r){return i=!!n(e,t,r)}),i},Xi=xi=Li=Ou=function(e){
return"function"==typeof e?e:null==e?Ni:"object"==typeof e?yi(e)?mi(e[0],e[1]):Ai(e):Ri(e)},Yi=Bi=Ui=lr,
Qi=Wi=ju=function(e,t,r){if(!ji(r))return!1;var n=typeof t;return!!("number"==n?Mi(r)&&Gi(t,r.length
):"string"==n&&t in r)&&ki(r[t],e)},Zi=function(e,t,r){var n=Yi(e)?Ki:zi;return r&&Qi(e,t,r)&&(t=void 0),n(e,Xi(t))},
eo=Su,Su=function(){try{var e=eo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),to=Su,ro=function(e,t,r){
"__proto__"==t&&to?to(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},no=Iu,Iu=Object.prototype,
io=Iu.hasOwnProperty,oo=function(e,t,r){var n=e[t];io.call(e,t)&&no(n,r)&&(void 0!==r||t in e)||ro(e,t,r)},so=Ks,ao=ts,
uo=ns,co=function(e,t,r,n){var i,o,s,a,l,u,c;if(!lo(e))return e;for(i=-1,s=(o=(t=so(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=uo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=lo(c)?c:ao(t[i+1])?[]:{})),oo(a,l,u),a=a[l]}return e},ho=function(e,t,r){return null==e?e:co(e,t,r)},_o=Cu
,vo=(Iu=Wl)?Iu.isConcatSpreadable:void 0,fo=function(e){return Eo(e)||_o(e)||!!(vo&&e&&e[vo])},go=po=du,
To=Ks=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||fo,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):po(o,s
):i||(o[o.length]=s);return o},So=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
Ao=Eo=lr,mo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return go(Ao(t)?So(t):[t],To(e,1))},No=Ou,yo=Hl,Ro=Bl,ts=function(o){return function(e,t,r){var n,
i=Object(e);return yo(e)||(n=No(t),e=Ro(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
ns=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Co=/\s/,wo=function(
e){for(var t=e.length;t--&&Co.test(e.charAt(t)););return t},bo=/^\s+/,Io=Cu=function(e){return e&&e.slice(0,wo(e)+1
).replace(bo,"")},Do=lo=gt,Oo=jl,Lo=/^[-+]0x[0-9a-f]+$/i,Po=/^0b[01]+$/i,Uo=/^0o[0-7]+$/i,$o=parseInt,Fo=function(e){
var t;return"number"==typeof e?e:Oo(e)?NaN:(Do(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Do(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Io(e),(t=Po.test(e))||Uo.test(e)?$o(e.slice(2),t?2:8):Lo.test(e)?NaN:+e))},
ko=17976931348623157e292,Mo=function(e){return e?(e=Fo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*ko:0===e?e:0},Go=ns,jo=Ou
,Ho=Wl=function(e){var t=Mo(e),e=t%1;return t==t?e?t-e:t:0},xo=Math.max,Iu=ts(Jo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Ho(r))<0&&(r=xo(n+r,0)),Go(e,jo(t),r)):-1}),Bo=Iu,Wo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Vo=Fl,qo=Ou,Ko=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},zo=lr,Xo=function(e,t,r){var n=zo(e)?Wo:Ko,i=arguments.length<3
;return n(e,qo(t),r,i,Vo)},du=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Yo=ns,Qo=function(e){return e!=e},Zo=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},es=Hl=function(e,t,r){return t==t?Zo(e,t,r):Yo(e,Qo,r)},
ts=function(e,t){return!(null==e||!e.length)&&-1<es(e,t,0)},Iu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},ns=function(){},ns=(rs=Gu)&&1/fu(new rs([,-0]))[1]==1/0?function(e){return new rs(e)
}:ns,is=Yt,os=ts,ss=Iu,as=Qt,ls=ns,us=fu,cs=function(e,t,r){var n,i,o,s,a=-1,l=os,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=ss;else if(200<=u){if(n=t?null:ls(e))return us(n);c=!1,l=as,h=new is}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},ds=function(e){return e&&e.length?cs(e):[]},hs=jl,_s=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=hs(e),s=void 0!==t,a=null===t,l=t==t,u=hs(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},Es=wu,vs=Ws,ps=Ou,fs=zs,gs=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Ts=xu,Ss=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=_s(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},As=Xs,ms=lr,jl=function(e,n,r){var i;return n=n.length?Es(n
,function(t){return ms(t)?function(e){return vs(e,1===t.length?t[0]:t)}:t}):[As],i=-1,n=Es(n,Ts(ps)),e=fs(e,function(t,e
,r){return{criteria:Es(n,function(e){return e(t)}),index:++i,value:t}}),gs(e,function(e,t){return Ss(e,t,r)})},
Ns=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},ys=Math.max,Ws=function(o,s,a){return s=ys(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=ys(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ns(o,this,e)}},Rs=function(e){return function(){return e}},Cs=Su,
ws=Date.now,ou=Cs?function(e,t){return Cs(e,"toString",{configurable:!0,enumerable:!1,value:Rs(t),writable:!0})}:Xs,
bs=Ks,Is=jl,Ds=ju,(zs=function(){var e=ws(),t=16-e+ +au;if(au=e,0<t){if(800<=++su)return arguments[0]}else su=0
;return ou.apply(void 0,arguments)})(Ws(fu=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Ds(e,t[0],t[1]
)?t=[]:2<r&&Ds(t[0],t[1],t[2])&&(t=[t[0]]),Is(e,bs(t,1),[])},void(au=su=0),Xs),fu+""),Ls=_u,Ps=function(e,n){var i=[]
;return Os(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Us=Ou,Fs=function(e,t){return($s(e)?Ls:Ps)(e,Us(t))},ks=Xs,
Ms=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Gs=Os=Fl,js=function(e){
return"function"==typeof e?e:ks},Hs=$s=lr,xs=function(e,t){return(Hs(e)?Ms:Gs)(e,js(t))},Js=du,Su=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Js(e,t,r)},Bs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Ws=function(e){return Bs.test(e)}
,Vs=ql,qs=Hu,zs=function(e){return qs(e)&&"[object RegExp]"==Vs(e)},_u=(jl=(Ks=Ml.exports)&&Ks.isRegExp)?xu(jl):zs,
Ou=function(e){return e.split("")},Fl="["+(Xs="\\ud800-\\udfff")+"]",xu=(du="[\\ufe0e\\ufe0f]?")+(xu="(?:"+(
Ml="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(Ks="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
jl="[^"+Xs+"]",zs="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+du+xu+")*",
Fl="(?:"+[jl+Ml+"?",Ml,zs,Xs,Fl].join("|")+")",Ys=RegExp(Ks+"(?="+Ks+")|"+Fl+xu,"g"),Qs=Ou,ea=function(e){
return e.match(Ys)||[]},na=Zs=Ws,ia=ju,oa=_u,la=function(e,t,r){return r&&"number"!=typeof r&&ia(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=aa(e))&&("string"==typeof t||null!=t&&!oa(t))&&!(t=ta(t))&&na(e)?ra(sa(e),0,r
):e.split(t,r):[]},ca=ua=Hl,da=ta=Vl,ha=Cu,_a=ra=Su,Ea=function(e,t){for(var r=e.length;r--&&-1<ua(t,e[r],0););return r}
,va=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<ca(t,e[r],0););return r},pa=sa=function(e){return(Zs(e)?ea:Qs)(e)},
fa=aa=Pu,ga=function(e,t,r){return(e=fa(e))&&(r||void 0===t)?ha(e):e&&(t=da(t))?(r=pa(e),e=pa(t),t=va(r,e),e=Ea(r,e)+1,
_a(r,t,e).join("")):e},Su=Object.prototype,Ta=Su.hasOwnProperty,Sa=function(e,t){return null!=e&&Ta.call(e,t)},Aa=Eu,
ma=function(e,t){return null!=e&&Aa(e,t,Sa)},Ra="[object Boolean]",Ca=function(e){return!0===e||!1===e||ya(e)&&Na(e)==Ra
},wa=function(e){return null===e},Ia=lr,Oa="[object String]",La=function(e){return"string"==typeof e||!Ia(e)&&Da(e)&&ba(
e)==Oa},Pa=ba=Na=ql,Ua=Da=ya=Hu,$a="[object Number]",Fa=function(e){return"number"==typeof e||Ua(e)&&Pa(e)==$a},
Ma=function(e){return"number"==typeof e&&e==ka(e)},Ja=function(e,t,r){return e=xa(e),r=null==r?0:Ga(Ha(r),0,e.length),
t=ja(t),e.slice(r,r+t.length)==t},Ba=Ga=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Wa=ja=Vl,Va=Ha=ka=Wl,qa=xa=Pu,Ka=function(e,t,r){var n;return e=qa(e),t=Wa(t),n=e.length,n=r=void 0===r?n:Ba(Va(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},za=wu,Xa=function(t,e){return za(e,function(e){return t[e]})},Ya=Bl,Qa=function(e
){return null==e?[]:Xa(e,Ya(e))},ql=Array.prototype,Za=ql.join,el=function(e,t){return null==e?"":Za.call(e,t)},(
Hu=tl={})[Hu.DEBUG=0]="DEBUG",Hu[Hu.INFO=1]="INFO",Hu[Hu.WARN=2]="WARN",Hu[Hu.ERROR=3]="ERROR",Hu[Hu.NONE=4]="NONE",
rl=tl;const Ju=null!==(Vl=L("1.0.4"))&&void 0!==Vl?Vl:"?";Pu=null!==(Wl=L(""))&&void 0!==Wl?Wl:"io.nor.fi",Bl=null!==(
wu=L(""))&&void 0!==wu?wu:"nor-pipeline-runner",Hu=null!==(ql=L(""))&&void 0!==ql?ql:"",Wl=null!==(Vl=L("")
)&&void 0!==Vl?Vl:"";const Bu=null!==(wu=L("production"))&&void 0!==wu?wu:"development",Wu=null!==(ql=L(
"2021-09-09T20:26:56.259Z"))&&void 0!==ql?ql:"";wu=null!==(Vl=L(""))&&void 0!==Vl?Vl:"${",Vl=null!==(ql=L("")
)&&void 0!==ql?ql:"}";const Vu=null===(ql=D(""))||void 0===ql||ql,qu=null===(ql=D(""))||void 0===ql||ql,Ku=null===(ql=D(
""))||void 0===ql||ql,zu=null===(ql=D(""))||void 0===ql||ql;ql="production"===Bu;const Xu="test"===Bu,Yu=!ql&&!Xu
;Hu=null!==(rt=function(e){if(e){if(function(){switch(e){case tl.DEBUG:case tl.INFO:case tl.WARN:case tl.ERROR:
case tl.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return tl.DEBUG
;case"INFO":return tl.INFO;case"WARN":case"WARNING":return tl.WARN;case"ERR":case"ERROR":return tl.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return tl.NONE;default:return}}}(null!==(rt=L(null===(ql=process
)||void 0===ql||null===(rt=ql.env)||void 0===rt?void 0:rt.PIPELINE_LOG_LEVEL))&&void 0!==rt?rt:L(Hu))
)&&void 0!==rt?rt:rl.INFO;const Qu=null!==(nt=L(null===(rt=process)||void 0===rt||null===(nt=rt.env
)||void 0===nt?void 0:nt.PIPELINE_SERVER))&&void 0!==nt?nt:Bl,Zu=null!==(it=function(e){if(void 0!==e)return`${e}`}(
null===(Bl=process)||void 0===Bl||null===(it=Bl.env)||void 0===it?void 0:it.PIPELINE_AUTHENTICATION))&&void 0!==it?it:Wl
,ec=null!==(ot=L(null===(Wl=process)||void 0===Wl||null===(ot=Wl.env)||void 0===ot?void 0:ot.PIPELINE_SERVER)
)&&void 0!==ot?ot:Pu,tc=null!==(st=L(null===(Pu=process)||void 0===Pu||null===(st=Pu.env
)||void 0===st?void 0:st.PIPELINE_VARIABLE_PREFIX))&&void 0!==st?st:wu,rc=null!==(at=L(null===(wu=process
)||void 0===wu||null===(at=wu.env)||void 0===at?void 0:at.PIPELINE_VARIABLE_SUFFIX))&&void 0!==at?at:Vl;class nc{
constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class ic{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case tl.DEBUG:return"DEBUG";case tl.INFO:return"INFO";case tl.WARN:return"WARN";case tl.ERROR:return"ERROR"
;case tl.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=rl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=rl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=rl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=rl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new nc(e,ic)}}l(ic,"Level",rl),l(ic,"_level",rl.DEBUG),l(ic,"_logger",console),(Vl=nl={}
)[Vl.HTTP=0]="HTTP",Vl[Vl.LOCAL=1]="LOCAL",Vl[Vl.MATRIX=2]="MATRIX",il=nl,(Vl=ol={})[Vl.NONE=0]="NONE",
Vl[Vl.BASIC_AUTH=1]="BASIC_AUTH",Vl[Vl.BEARER_AUTH=2]="BEARER_AUTH",sl=ol;class oc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const sc=ic.createLogger("MatrixRunnerResource");class ac{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return N(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===il.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=ga(`${e}`)
).toLowerCase(),Ja(t,"http:")||Ja(t,"https:")?(t=new URL(e),t=null!==(t=oc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:oc.parseRunnerAuthentication(Zu),{type:il.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return N(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===il.LOCAL&&p(null==t?void 0:t.path)?e:(e=ga(`${e}`),(e=Ja(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&Au.default.existsSync(e)?{type:il.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(N(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===il.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=ga(
`${i}`),sc.debug(`value: '${i}'`);let e=i.toLowerCase();if(sc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),sc.debug(`lowerCaseValue: '${e}'`),Ja(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),sc.debug(`url: '${s}': `,s),o=null!==(o=oc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:oc.parseRunnerAuthentication(Zu),sc.debug(
"auth: ",o);const e=`${s.host}`;sc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),sc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return sc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,sc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",sc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,sc.debug(`pool: '${s}'`),{type:il.MATRIX,homeserver:e,pool:s,
authentication:o}}Ja(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Ja(e,"!")||Ja(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${ec}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||Zu,r=r||ec,{type:il.MATRIX,homeserver:r,pool:n,
authentication:oc.parseRunnerAuthentication(t)}}}(e)}}(Vl=al={})[Vl.OK=0]="OK",Vl[Vl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
Vl[Vl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",Vl[Vl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
Vl[Vl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",Vl[Vl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Vl[Vl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Vl[Vl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Vl[Vl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Vl[Vl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Vl[Vl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Vl[Vl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Vl[Vl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Vl[Vl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Vl[Vl.FATAL_ERROR=14]="FATAL_ERROR",Vl[Vl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Vl[Vl.WORK_CANCELLED=16]="WORK_CANCELLED",Vl[Vl.CONFLICT=17]="CONFLICT",Vl[Vl.USAGE=64]="USAGE",
Vl[Vl.DATAERR=65]="DATAERR",Vl[Vl.NOINPUT=66]="NOINPUT",Vl[Vl.NOUSER=67]="NOUSER",Vl[Vl.NOHOST=68]="NOHOST",
Vl[Vl.UNAVAILABLE=69]="UNAVAILABLE",Vl[Vl.SOFTWARE=70]="SOFTWARE",Vl[Vl.OSERR=71]="OSERR",Vl[Vl.OSFILE=72]="OSFILE",
Vl[Vl.CANTCREAT=73]="CANTCREAT",Vl[Vl.IOERR=74]="IOERR",Vl[Vl.TEMPFAIL=75]="TEMPFAIL",Vl[Vl.PROTOCOL=76]="PROTOCOL",
Vl[Vl.NOPERM=77]="NOPERM",Vl[Vl.CONFIG=78]="CONFIG",
Vl[Vl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Vl[Vl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Vl[Vl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Vl[Vl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Vl[Vl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Vl[Vl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",ll=al,(Vl=ul={})[Vl.OPTIONS=0]="OPTIONS",
Vl[Vl.GET=1]="GET",Vl[Vl.POST=2]="POST",Vl[Vl.PUT=3]="PUT",Vl[Vl.DELETE=4]="DELETE",Vl[Vl.PATCH=5]="PATCH",Kl=ul
;const lc="WINDOW"===(zl=null!==(zl=null!==(lt=null===(Vl=process)||void 0===Vl||null===(lt=Vl.env
)||void 0===lt?void 0:lt.NOR_REQUEST_CLIENT_MODE)&&void 0!==lt?lt:null===(zl=process)||void 0===zl||null===(ut=zl.env
)||void 0===ut?void 0:ut.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==zl?zl:"")||!("undefined"==typeof window||!window.fetch
),uc="NODE"===zl||!lc;class cc{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await cc.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await cc.getRequestDataAsString(e)))return mu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await cc.getRequestDataAsString(e)))return JSON.parse(e)}}(zl=cl={}
)[zl.Continue=100]="Continue",zl[zl.SwitchingProtocols=101]="SwitchingProtocols",zl[zl.Processing=102]="Processing",
zl[zl.CheckPoint=103]="CheckPoint",zl[zl.OK=200]="OK",zl[zl.Created=201]="Created",zl[zl.Accepted=202]="Accepted",
zl[zl.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",zl[zl.NoContent=204]="NoContent",
zl[zl.ResetContent=205]="ResetContent",zl[zl.PartialContent=206]="PartialContent",zl[zl.MultiStatus=207]="MultiStatus",
zl[zl.AlreadyReported=208]="AlreadyReported",zl[zl.IMUsed=226]="IMUsed",zl[zl.MultipleChoices=300]="MultipleChoices",
zl[zl.MovedPermanently=301]="MovedPermanently",zl[zl.Found=302]="Found",zl[zl.SeeOther=303]="SeeOther",
zl[zl.NotModified=304]="NotModified",zl[zl.TemporaryRedirect=307]="TemporaryRedirect",
zl[zl.PermanentRedirect=308]="PermanentRedirect",zl[zl.BadRequest=400]="BadRequest",
zl[zl.Unauthorized=401]="Unauthorized",zl[zl.PaymentRequired=402]="PaymentRequired",zl[zl.Forbidden=403]="Forbidden",
zl[zl.NotFound=404]="NotFound",zl[zl.MethodNotAllowed=405]="MethodNotAllowed",zl[zl.NotAcceptable=406]="NotAcceptable",
zl[zl.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",zl[zl.RequestTimeout=408]="RequestTimeout",
zl[zl.Conflict=409]="Conflict",zl[zl.Gone=410]="Gone",zl[zl.LengthRequired=411]="LengthRequired",
zl[zl.PreconditionFailed=412]="PreconditionFailed",zl[zl.PayloadTooLarge=413]="PayloadTooLarge",
zl[zl.URITooLong=414]="URITooLong",zl[zl.UnsupportedMediaType=415]="UnsupportedMediaType",
zl[zl.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",zl[zl.ExpectationFailed=417]="ExpectationFailed",
zl[zl.IAmATeapot=418]="IAmATeapot",zl[zl.UnprocessableEntity=422]="UnprocessableEntity",zl[zl.Locked=423]="Locked",
zl[zl.FailedDependency=424]="FailedDependency",zl[zl.TooEarly=425]="TooEarly",
zl[zl.UpgradeRequired=426]="UpgradeRequired",zl[zl.PreconditionRequired=428]="PreconditionRequired",
zl[zl.TooManyRequests=429]="TooManyRequests",zl[zl.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
zl[zl.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",zl[zl.InternalError=500]="InternalError",
zl[zl.InternalServerError=500]="InternalServerError",zl[zl.NotImplemented=501]="NotImplemented",
zl[zl.BadGateway=502]="BadGateway",zl[zl.ServiceUnavailable=503]="ServiceUnavailable",
zl[zl.GatewayTimeout=504]="GatewayTimeout",zl[zl.HttpVersionNotSupported=505]="HttpVersionNotSupported",
zl[zl.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",zl[zl.InsufficientStorage=507]="InsufficientStorage",
zl[zl.LoopDetected=508]="LoopDetected",zl[zl.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
zl[zl.NotExtended=510]="NotExtended",zl[zl.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",dl=cl,(
iu=iu||{}).ERROR="error",hl=iu;class dc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case cl.Continue:return"Continue";case cl.SwitchingProtocols:return"Switching Protocols"
;case cl.Processing:return"Processing";case cl.CheckPoint:return"Check Point";case cl.OK:return"OK";case cl.Created:
return"Created";case cl.Accepted:return"Accepted";case cl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case cl.NoContent:return"No Content";case cl.ResetContent:return"Reset Content"
;case cl.PartialContent:return"Partial Content";case cl.MultiStatus:return"Multi Status";case cl.AlreadyReported:
return"Already Reported";case cl.IMUsed:return"IM Used";case cl.MultipleChoices:return"Multiple Choices"
;case cl.MovedPermanently:return"Moved Permanently";case cl.Found:return"Found";case cl.SeeOther:return"See Other"
;case cl.NotModified:return"Not Modified";case cl.TemporaryRedirect:return"Temporary Redirect"
;case cl.PermanentRedirect:return"Permanent Redirect";case cl.BadRequest:return"Bad Request";case cl.Unauthorized:
return"Unauthorized";case cl.PaymentRequired:return"Payment Required";case cl.Forbidden:return"Forbidden"
;case cl.NotFound:return"Not Found";case cl.MethodNotAllowed:return"Method Not Allowed";case cl.NotAcceptable:
return"Not Acceptable";case cl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case cl.RequestTimeout:
return"Request Timeout";case cl.Conflict:return"Conflict";case cl.Gone:return"Gone";case cl.LengthRequired:
return"Length Required";case cl.PreconditionFailed:return"Precondition Failed";case cl.PayloadTooLarge:
return"Payload Too Large";case cl.URITooLong:return"URI Too Long";case cl.UnsupportedMediaType:
return"Unsupported Media Type";case cl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case cl.ExpectationFailed:return"Expectation Failed";case cl.IAmATeapot:return"I Am a Teapot"
;case cl.UnprocessableEntity:return"Unprocessable Entity";case cl.Locked:return"Locked";case cl.FailedDependency:
return"Failed Dependency";case cl.TooEarly:return"Too Early";case cl.UpgradeRequired:return"Upgrade Required"
;case cl.PreconditionRequired:return"Precondition Required";case cl.TooManyRequests:return"Too Many Requests"
;case cl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case cl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case cl.InternalServerError:return"Internal Server Error";case cl.NotImplemented:
return"Not Implemented";case cl.BadGateway:return"Bad Gateway";case cl.ServiceUnavailable:return"Service Unavailable"
;case cl.GatewayTimeout:return"Gateway Timeout";case cl.HttpVersionNotSupported:return"Http Version Not Supported"
;case cl.VariantAlsoNegotiates:return"Variant Also Negotiates";case cl.InsufficientStorage:return"Insufficient Storage"
;case cl.LoopDetected:return"Loop Detected";case cl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case cl.NotExtended:return"Not Extended";case cl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:hl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const hc=uc?require("fs").promises:void 0,_c=ic.createLogger(
"NodeRequestClient");class Ec{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case Kl.GET:return this._getJson(t,r,n);case Kl.POST:return this._postJson(t,r,n)
;case Kl.PATCH:return this._patchJson(t,r,n);case Kl.PUT:return this._putJson(t,r,n);case Kl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await hc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void _c.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void _c.debug(
"_checkSocketFile: ENOENT: ",e);throw _c.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=yu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Nu.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?_c.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(_c.warn(
"Warning! Request had already ended when the response was received."),_c.debug("Error from event: ",e)):(_c.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(_c.warn(
"Warning! Request had already ended when the response was received."),_c.debug("Exception: ",e)):(_c.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await cc.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Kl.GET,e,n,r).then(Ec._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Kl.PUT,e,n,r).then(Ec._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(Kl.POST,e,n,r).then(
Ec._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Kl.PATCH,e,n,r).then(Ec._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Kl.DELETE,e,n,r).then(Ec._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw _c.error(`Unsuccessful response with status ${t}: `,e),new dc(t,`Error ${t} for ${x(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class vc{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case Kl.GET:return this._getJson(t,r,n);case Kl.POST:return this._postJson(t,r,n)
;case Kl.PUT:return this._putJson(t,r,n);case Kl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vc._successResponse(e,Kl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vc._successResponse(e,Kl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>vc._successResponse(e,Kl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vc._successResponse(e,Kl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(
e=>{throw new dc(r,i,t,n,e)})}return e.json()}}const pc=uc?require("http"):void 0,fc=uc?require("https"):void 0,
gc=ic.createLogger("RequestClient");class Tc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(Kl.GET,e,t)}static postJson(e,t,r){return gc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(Kl.POST,e,r,t)}static patchJson(e,t,r){return gc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Kl.PATCH,e,r,t)}static putJson(e,t,r){return gc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Kl.PUT,e,r,t)}static deleteJson(e,t,r){return gc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Kl.DELETE,e,t,r)}static _initClient(){if(lc)return gc.debug("Detected browser environment"),
new vc(window.fetch.bind(window));if(uc)return new Ec(pc,fc);throw new TypeError(
"Could not detect request client implementation")}}l(Tc,"_client",Tc._initClient()),(iu=Xl=Xl||{}).JSON="json",
iu.STRING="string",iu.BOOLEAN="boolean",iu.NUMBER="number",iu.INTEGER="integer",nu=Xl,iu=["name","parameters",
"variables"];class Sc{static registerController(e){this._stepControllers.push(e)}static findController(t){return Bo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return Xo(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}l(Sc,"_stepControllers",[]);const Ac=mo(iu,["name","steps"]),mc=mo(iu
,["name","jobs"]),Nc=mo(iu,["name","stages"]);class yc{getName(){return this._name}constructor(e){l(this,"_name",void 0)
,l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return ma(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],xs(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Fs(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
Xl=Yl=Yl||{})[Xl.CONSTRUCTED=0]="CONSTRUCTED",Xl[Xl.STARTED=1]="STARTED",Xl[Xl.PAUSED=2]="PAUSED",
Xl[Xl.CANCELLED=3]="CANCELLED",Xl[Xl.FINISHED=4]="FINISHED",Xl[Xl.FAILED=5]="FAILED",_l=Yl,(Yl=Ql=Ql||{}
).PIPELINE="fi.nor.pipeline",Yl.JOB="fi.nor.pipeline.job",Yl.STAGE="fi.nor.pipeline.stage",
Yl.TASK="fi.nor.pipeline.task",Yl.STEP="fi.nor.pipeline.step",Yl.FILE="fi.nor.pipeline.step.file",
Yl.SCRIPT="fi.nor.pipeline.step.script",Yl.VARIABLE="fi.nor.pipeline.step.variable",Yl.JSON="fi.nor.pipeline.step.json",
Yl.CSV="fi.nor.pipeline.step.csv",El=Ql;const Rc=ic.createLogger("JobController");(Ql=vl={}
).JOB_CHANGED="JobController:jobChanged",Ql.JOB_STARTED="JobController:jobStarted",
Ql.JOB_PAUSED="JobController:jobPaused",Ql.JOB_RESUMED="JobController:jobResumed",
Ql.JOB_CANCELLED="JobController:jobCancelled",Ql.JOB_FAILED="JobController:jobFailed",
Ql.JOB_FINISHED="JobController:jobFinished";class Cc{constructor(e,t,r=[]){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,"_changedCallback",void 0),l(this,"_state",
void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!J(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,oe,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new yc(`JobController#${this._name}`),this._state=_l.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=$i(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=Fs(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
Rc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:El.JOB,
state:this._state,name:this._name,steps:$i(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case _l.STARTED:return!0;case _l.PAUSED:case _l.CONSTRUCTED:case _l.CANCELLED:
case _l.FINISHED:case _l.FAILED:return!1}}isStarted(){switch(this._state){case _l.PAUSED:case _l.STARTED:return!0
;case _l.CONSTRUCTED:case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}isPaused(){switch(this._state){
case _l.PAUSED:return!0;case _l.STARTED:case _l.CONSTRUCTED:case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}
isCancelled(){switch(this._state){case _l.CANCELLED:return!0;case _l.PAUSED:case _l.STARTED:case _l.CONSTRUCTED:
case _l.FINISHED:case _l.FAILED:return!1}}isFinished(){switch(this._state){case _l.FINISHED:case _l.FAILED:
case _l.CANCELLED:return!0;case _l.CONSTRUCTED:case _l.PAUSED:case _l.STARTED:return!1}}isFailed(){switch(this._state){
case _l.FAILED:return!0;case _l.CONSTRUCTED:case _l.FINISHED:case _l.PAUSED:case _l.STARTED:case _l.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case _l.FINISHED:return!0;case _l.FAILED:case _l.CONSTRUCTED:case _l.PAUSED:
case _l.STARTED:case _l.CANCELLED:return!1}}start(){if(this._state!==_l.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Rc.info(`Starting job ${this._name}`),this._state=_l.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(vl.JOB_STARTED)&&this._observer.triggerEvent(
vl.JOB_STARTED,this),this._observer.hasCallbacks(vl.JOB_CHANGED)&&this._observer.triggerEvent(vl.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Rc.info(
`Pausing job ${this._name}`),this._state=_l.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
vl.JOB_PAUSED)&&this._observer.triggerEvent(vl.JOB_PAUSED,this),this._observer.hasCallbacks(vl.JOB_CHANGED
)&&this._observer.triggerEvent(vl.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Rc.info(`Resuming job ${this._name}`),this._state=_l.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(vl.JOB_RESUMED)&&this._observer.triggerEvent(
vl.JOB_RESUMED,this),this._observer.hasCallbacks(vl.JOB_CHANGED)&&this._observer.triggerEvent(vl.JOB_CHANGED,this),this}
stop(){if(this._state!==_l.STARTED)throw new Error(`Job#${this._name} was not started`);return Rc.info(
`Stopping job ${this._name}`),this._state=_l.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
vl.JOB_CANCELLED)&&this._observer.triggerEvent(vl.JOB_CANCELLED,this),this._observer.hasCallbacks(vl.JOB_CHANGED
)&&this._observer.triggerEvent(vl.JOB_CHANGED,this),this}onCancelled(e){return this.on(vl.JOB_CANCELLED,e)}onChanged(e){
return this.on(vl.JOB_CHANGED,e)}onFailed(e){return this.on(vl.JOB_FAILED,e)}onFinished(e){return this.on(
vl.JOB_FINISHED,e)}onPaused(e){return this.on(vl.JOB_PAUSED,e)}onResumed(e){return this.on(vl.JOB_RESUMED,e)}onStarted(e
){return this.on(vl.JOB_STARTED,e)}getErrorString(){return $i(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return $i(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Rc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=_l.FAILED,this._observer.hasCallbacks(vl.JOB_FAILED)&&this._observer.triggerEvent(
vl.JOB_FAILED,this)):i.isCancelled()?(this._state=_l.CANCELLED,this._observer.hasCallbacks(vl.JOB_CANCELLED
)&&this._observer.triggerEvent(vl.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=_l.STARTED,this._steps[this._current].start(),n===_l.PAUSED&&this._observer.hasCallbacks(vl.JOB_RESUMED
)&&this._observer.triggerEvent(vl.JOB_RESUMED,this)):(this._state=_l.FINISHED,this._observer.hasCallbacks(
vl.JOB_FINISHED)&&this._observer.triggerEvent(vl.JOB_FINISHED,this))),this._observer.hasCallbacks(vl.JOB_CHANGED
)&&this._observer.triggerEvent(vl.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=_l.PAUSED,
this._observer.hasCallbacks(vl.JOB_PAUSED)&&this._observer.triggerEvent(vl.JOB_PAUSED,this),this._observer.hasCallbacks(
vl.JOB_CHANGED)&&this._observer.triggerEvent(vl.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=_l.STARTED,this._observer.hasCallbacks(vl.JOB_RESUMED)&&this._observer.triggerEvent(vl.JOB_RESUMED,this),
this._observer.hasCallbacks(vl.JOB_CHANGED)&&this._observer.triggerEvent(vl.JOB_CHANGED,this))}}l(Cc,"Event",vl)
;const wc=ic.createLogger("StageController");(Ql=pl={}).STAGE_STARTED="StageController:stageStarted",
Ql.STAGE_PAUSED="StageController:stagePaused",Ql.STAGE_RESUMED="StageController:stageResumed",
Ql.STAGE_FINISHED="StageController:stageFinished",Ql.STAGE_FAILED="StageController:stageFailed",
Ql.STAGE_CANCELLED="StageController:stageCancelled",Ql.STAGE_CHANGED="StageController:stageChanged";class bc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!J(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=_l.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new yc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=$i(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:El.STAGE,state:this._state,name:this._name,jobs:$i(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case _l.CANCELLED:return!0;case _l.FINISHED:case _l.FAILED:
case _l.CONSTRUCTED:case _l.PAUSED:case _l.STARTED:return!1}}isFailed(){switch(this._state){case _l.FAILED:return!0
;case _l.CANCELLED:case _l.FINISHED:case _l.CONSTRUCTED:case _l.PAUSED:case _l.STARTED:return!1}}isFinished(){switch(
this._state){case _l.FINISHED:case _l.FAILED:case _l.CANCELLED:return!0;case _l.CONSTRUCTED:case _l.PAUSED:
case _l.STARTED:return!1}}isPaused(){switch(this._state){case _l.PAUSED:return!0;case _l.FAILED:case _l.CANCELLED:
case _l.FINISHED:case _l.CONSTRUCTED:case _l.STARTED:return!1}}isRunning(){switch(this._state){case _l.STARTED:return!0
;case _l.PAUSED:case _l.FAILED:case _l.CANCELLED:case _l.FINISHED:case _l.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case _l.PAUSED:case _l.STARTED:return!0;case _l.FAILED:case _l.CANCELLED:case _l.FINISHED:
case _l.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case _l.FINISHED:return!0;case _l.PAUSED:
case _l.STARTED:case _l.FAILED:case _l.CANCELLED:case _l.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
pl.STAGE_CANCELLED,e)}onChanged(e){return this.on(pl.STAGE_CHANGED,e)}onFailed(e){return this.on(pl.STAGE_FAILED,e)}
onFinished(e){return this.on(pl.STAGE_FINISHED,e)}onPaused(e){return this.on(pl.STAGE_PAUSED,e)}onResumed(e){
return this.on(pl.STAGE_RESUMED,e)}onStarted(e){return this.on(pl.STAGE_STARTED,e)}start(){if(
this._state!==_l.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return wc.info(
`Starting stage ${this._name}`),this._state=_l.STARTED,Fs(this._jobs,t=>{try{return t.start(),!1}catch(e){
return wc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=_l.FAILED,
this._observer.hasCallbacks(pl.STAGE_FAILED)&&this._observer.triggerEvent(pl.STAGE_FAILED,this)
):this._observer.hasCallbacks(pl.STAGE_STARTED)&&this._observer.triggerEvent(pl.STAGE_STARTED,this),
this._observer.hasCallbacks(pl.STAGE_CHANGED)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this),this}pause(){if(
this._state===_l.PAUSED)throw new Error(`Stage#${this._name} was already paused`);wc.info(`Pausing stage ${this._name}`)
,this._state=_l.PAUSED;var e=Fs(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return wc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&wc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(pl.STAGE_PAUSED
)&&this._observer.triggerEvent(pl.STAGE_PAUSED,this),this._observer.hasCallbacks(pl.STAGE_CHANGED
)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this),this}resume(){if(this._state===_l.STARTED)throw new Error(
`Stage#${this._name} was already started`);wc.info(`Resuming stage ${this._name}`),this._state=_l.STARTED;var e=Fs(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return wc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&wc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(pl.STAGE_RESUMED
)&&this._observer.triggerEvent(pl.STAGE_RESUMED,this),this._observer.hasCallbacks(pl.STAGE_CHANGED
)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);wc.info(`Stopping stage ${this._name}`),this._state=_l.CANCELLED;var e=Fs(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return wc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&wc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return $i(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return $i(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Fs(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){wc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==_l.FAILED?(this._state=_l.FAILED,this._observer.hasCallbacks(pl.STAGE_FAILED
)&&this._observer.triggerEvent(pl.STAGE_FAILED,this),this._observer.hasCallbacks(pl.STAGE_CHANGED
)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this)):n&&this._state!==_l.CANCELLED?(this._state=_l.CANCELLED,
this._observer.hasCallbacks(pl.STAGE_CANCELLED)&&this._observer.triggerEvent(pl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(pl.STAGE_CHANGED)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this)
):this._state!==_l.FINISHED&&(this._state=_l.FINISHED,this._observer.hasCallbacks(pl.STAGE_FINISHED
)&&this._observer.triggerEvent(pl.STAGE_FINISHED,this),this._observer.hasCallbacks(pl.STAGE_CHANGED
)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this)))):(n=S(Fs(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==_l.PAUSED?(this._state=_l.PAUSED,this._observer.hasCallbacks(pl.STAGE_PAUSED
)&&this._observer.triggerEvent(pl.STAGE_PAUSED,this),this._observer.hasCallbacks(pl.STAGE_CHANGED
)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this)):n||this._state!==_l.PAUSED||(this._state=_l.STARTED,
this._observer.hasCallbacks(pl.STAGE_RESUMED)&&this._observer.triggerEvent(pl.STAGE_RESUMED,this),
this._observer.hasCallbacks(pl.STAGE_CHANGED)&&this._observer.triggerEvent(pl.STAGE_CHANGED,this))}}l(bc,"Event",pl)
;const Ic=ic.createLogger("PipelineController");(Ql=fl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
Ql.PIPELINE_PAUSED="PipelineController:pipelinePaused",Ql.PIPELINE_RESUMED="PipelineController:pipelineResumed",
Ql.PIPELINE_FINISHED="PipelineController:pipelineFinished",Ql.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
Ql.PIPELINE_FAILED="PipelineController:pipelineFailed",Ql.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class Dc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new yc(`PipelineController#${this._name}`),this._state=_l.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=$i(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:El.PIPELINE,state:this._state,name:this._name,
stages:$i(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case _l.CANCELLED:return!0;case _l.STARTED:case _l.PAUSED:case _l.CONSTRUCTED:case _l.FINISHED:case _l.FAILED:return!1}}
isFailed(){switch(this._state){case _l.FAILED:return!0;case _l.CANCELLED:case _l.STARTED:case _l.PAUSED:
case _l.CONSTRUCTED:case _l.FINISHED:return!1}}isFinished(){switch(this._state){case _l.FAILED:case _l.CANCELLED:
case _l.FINISHED:return!0;case _l.STARTED:case _l.PAUSED:case _l.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case _l.PAUSED:return!0;case _l.FAILED:case _l.CANCELLED:case _l.FINISHED:case _l.STARTED:case _l.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case _l.STARTED:return!0;case _l.PAUSED:case _l.FAILED:case _l.CANCELLED:
case _l.FINISHED:case _l.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case _l.STARTED:case _l.PAUSED:return!0
;case _l.FAILED:case _l.CANCELLED:case _l.FINISHED:case _l.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case _l.FINISHED:return!0;case _l.STARTED:case _l.PAUSED:case _l.FAILED:case _l.CANCELLED:case _l.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(fl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(fl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(fl.PIPELINE_FAILED,e)}onFinished(e){return this.on(fl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
fl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(fl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(fl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Ic.info(
`Pausing pipeline ${this._name}`),this._state=_l.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
fl.PIPELINE_PAUSED)&&this._observer.triggerEvent(fl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
fl.PIPELINE_CHANGED)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Ic.info(`Resuming pipeline ${this._name}`),
this._state=_l.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(fl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(fl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(fl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this),this}start(){if(this._state!==_l.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Ic.info(`Starting pipeline ${this._name}`),this._state=_l.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(fl.PIPELINE_STARTED)&&this._observer.triggerEvent(
fl.PIPELINE_STARTED,this),this._observer.hasCallbacks(fl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
fl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==_l.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Ic.info(`Stopping pipeline ${this._name}`),this._state=_l.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(fl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(fl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(fl.PIPELINE_CHANGED)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this),this}
getErrorString(){return $i(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return $i(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Ic.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=_l.FAILED,
this._observer.hasCallbacks(fl.PIPELINE_FAILED)&&this._observer.triggerEvent(fl.PIPELINE_FAILED,this),Ic.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=_l.CANCELLED,this._observer.hasCallbacks(
fl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(fl.PIPELINE_CANCELLED,this),Ic.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=_l.STARTED;const o=this._stages[this._current].start();n===_l.PAUSED&&this._observer.hasCallbacks(
fl.PIPELINE_RESUMED)&&this._observer.triggerEvent(fl.PIPELINE_RESUMED,this),Ic.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=_l.FINISHED,this._observer.hasCallbacks(fl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(fl.PIPELINE_FINISHED,this),Ic.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(fl.PIPELINE_CHANGED)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=_l.PAUSED,this._observer.hasCallbacks(fl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(fl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(fl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this),Ic.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=_l.STARTED,this._observer.hasCallbacks(fl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(fl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(fl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(fl.PIPELINE_CHANGED,this),Ic.info(`Pipeline ${this._name} was resumed`))}}l(Dc,"Event",fl
);const Oc=ic.createLogger("PipelineRunner");class Lc{static registerController(e){Sc.registerController(e)}
static createStepController(e,t){const r=Sc.findController(e);if(void 0===r)throw new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Cc(t,e.name,
$i(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new bc(t,e.name,$i(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new Dc(t,e.name,$i(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ne(e)?(Oc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):re(e)?(Oc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):ee(e)?(
Oc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Oc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Oc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Oc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Oc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class Pc{static toString(...e){return $i(e,
e=>wa(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return X(n)?$i(n,e=>Pc.processVariables(e,i,o
,s,a)):z(n)?Xo(P(n),(e,t)=>{var r=n[t];return e[`${Pc.processVariables(t,i,o,s,a)}`]=Pc.processVariables(r,i,o,s,a),e},
{}):p(n)?Pc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=At(r)?r:e=>ei(r,e,o),Ja(t,n)&&Ka(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=ga(e),Pc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=ga(
t.substr(a,l-a)),h=(Pc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Uc=ic.createLogger("PipelineContext");class $c{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",
void 0),l(this,"_parameters",void 0),l(this,"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,
"_lookupVariable",void 0),l(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Uc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=Pc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Uc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return ei(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Uc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return V(this._variables)||(
this._variables={}),ho(this._variables,e,t),Uc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const Fc=ic.createLogger("runHttpResource"),kc=ic.createLogger(
"runLocalResource");(Ql=gl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",Ql.M_ROOM_JOIN_RULES="m.room.join_rules",
Ql.M_ROOM_MEMBERSHIP="m.room.membership",Ql.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
Ql.M_ROOM_GUEST_ACCESS="m.room.guest_access",Ql.M_ROOM_CREATE="m.room.create",Ql.M_FEDERATE="m.federate",
Ql.M_ROOM_MEMBER="m.room.member",Ql.M_PUSH_RULES="m.push_rules",Ql.M_PRESENCE="m.presence",Ql.M_SPACE="m.space",
Ql.M_LOGIN_PASSWORD="m.login.password",Ql.M_LOGIN_TOKEN="m.login.token",Ql.M_ID_USER="m.id.user",
Ql.FI_NOR_DELETED="fi.nor.deleted",Ql.FI_NOR_FORM_DTO="fi.nor.form_dto",Ql.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,Ql.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",Ql.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
Ql.FI_NOR_AGENT_DTO="fi.nor.dto.agent",Ql.FI_NOR_PIPELINE="fi.nor.pipeline",
Ql.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Tl=gl,(Ql=Sl=Sl||{})[Ql.UNAUTHENTICATED=0]="UNAUTHENTICATED",
Ql[Ql.AUTHENTICATING=1]="AUTHENTICATING",Ql[Ql.AUTHENTICATED=2]="AUTHENTICATED",
Ql[Ql.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
Ql[Ql.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(Ql=Al={}).M_USER_IN_USE="M_USER_IN_USE",
Ql.M_INVALID_USERNAME="M_INVALID_USERNAME",Ql.M_EXCLUSIVE="M_EXCLUSIVE",Ql.M_FORBIDDEN="M_FORBIDDEN",ml=Al
;const Mc=ic.createLogger("SimpleMatrixClient");(Nl=Nl||{}).EVENT="SimpleMatrixClient:event";class Gc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?Sl.AUTHENTICATED:Sl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new yc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Mc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Mc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(N(a=s=await Tc.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Mc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Mc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Mc.debug(
"Could not register user: ",e),!(e instanceof dc))throw new dc(dl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new dc(dl.Unauthorized):403===s?new dc(dl.Forbidden
):429===s?new dc(429):new dc(dl.InternalServerError,"Failed to register user");if(!Ve(s=null==e?void 0:e.getBody())
)throw new dc(dl.InternalServerError,"Failed to register user");switch(s.errcode){case ml.M_USER_IN_USE:throw new dc(
dl.Conflict,"User already exists");case ml.M_INVALID_USERNAME:throw new dc(dl.BadRequest,"Username invalid")
;case ml.M_EXCLUSIVE:throw new dc(dl.Conflict,"User name conflicts with exclusive namespace");default:throw new dc(
dl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Mc.debug("whoami: Fetching account whoami... ",r),n=await Tc.getJson(r,{Authorization:`Bearer ${t}`}),Mc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Mc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Mc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Mc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await Tc.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Mc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Mc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(N(
n=r=await Tc.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Mc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Mc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Mc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof dc))throw new dc(dl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new dc(dl.Unauthorized
):403===r?new dc(dl.Forbidden):429===r?new dc(429):new dc(dl.InternalServerError,"Failed to register user");if(!Ve(
r=null==e?void 0:e.getBody()))throw new dc(dl.InternalServerError,"Failed to register user");switch(r.errcode){
case ml.M_USER_IN_USE:throw new dc(dl.Conflict,"User already exists");case ml.M_INVALID_USERNAME:throw new dc(
dl.BadRequest,"Username invalid");case ml.M_EXCLUSIVE:throw new dc(dl.Conflict,
"User name conflicts with exclusive namespace");default:throw new dc(dl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:gl.M_LOGIN_PASSWORD,identifier:{type:gl.M_ID_USER,user:r},
password:n},Mc.debug("Sending login with userId:",r),!(N(h=o=await Tc.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||N(_=h)&&I(_,["m.homeserver","m.identity_server"])&&N(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||N(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Mc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Mc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Gc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Mc.debug(
"Could not login: ",e),new dc(dl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(N(n=r=await Tc.getJson(this._resolveHomeServerUrl(`/directory/room/${qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Mc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Mc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof dc&&e.getStatusCode()===dl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(N(
t=e=await Tc.getJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,de,We)))throw Mc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Mc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!V(i=await Tc.getJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),{Authorization:`Bearer ${n}`})))throw Mc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Mc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof dc&&e.getStatusCode()===dl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(N(s=o=await Tc.putJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Mc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Mc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Mc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await Tc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Mc.debug("forgetRoom: received: ",r)}catch(e){throw Mc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await Tc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Mc.debug("leaveRoom: received: ",r)}catch(e){throw Mc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!le(e))throw new TypeError(
`roomId invalid: ${e}`);if(!de(t))throw new TypeError(`userId invalid: ${t}`);if(Mc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await Tc.postJson(
this._resolveHomeServerUrl(`/rooms/${qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Mc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Mc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Mc.debug("Sending message with body:",t
),r=await Tc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,Mc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(Mc.debug("Creating room with body:",e),!(N(
e=t=await Tc.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&le(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw Mc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return Mc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(Mc.debug(
`Joining to room ${t} with body:`,e),!(N(i=n=await Tc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&le(null==i?void 0:i.room_id)))throw Mc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return Mc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw Mc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Mc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!V(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=el($i(P(s),e=>{var t=s[e]
;return`${qe(e)}=${qe(t)}`}),"&"),!(N(t=e=await Tc.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||Me(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||je(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||we(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||He(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw Mc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${Be(e)}`);return e}isAlreadyInTheRoom(
e){if(Ve(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===ml.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){xs(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(Nl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Mc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Mc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Mc.info("Initial sync request started"),
this._state!==Sl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Sl.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),Mc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Mc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Mc.info("Timer started..."),this._state=Sl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Mc.error("No next_batch in the response: ",t),r=mo(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),xs(n,e=>{var t,r=(r=s[e],mo([],
null!=r&&r.state?fe(null==r?void 0:r.state):[],null!=r&&r.timeline?me(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,mo([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),xs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),xs(o,e=>{var t=l[e],t=mo([],fe(
null==t?void 0:t.state),me(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(Gc,
"Event",Nl),(Ql=Zl=Zl||{}).PRIVATE_CHAT="private_chat",Ql.PUBLIC_CHAT="public_chat",
Ql.TRUSTED_PRIVATE_CHAT="trusted_private_chat",yl=Zl,(Zl=eu=eu||{}).INVITED="invited",Zl.JOINED="joined",
Zl.SHARED="shared",Zl.WORLD_READABLE="world_readable",Rl=eu,(eu=tu=tu||{}).PUBLIC="public",eu.KNOCK="knock",
eu.INVITE="invite",eu.PRIVATE="private",eu.RESTRICTED="restricted",Cl=tu,(tu=ru=ru||{}).CAN_JOIN="can_join",
tu.FORBIDDEN="forbidden",wl=ru;const jc=ic.createLogger("MatrixCrudRepository");class Hc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:Tl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});jc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(jc.debug("joinedRooms = ",i),t=P(t),jc.debug(
"invitedRooms = ",t),(t=Fs(t,e=>!i.includes(e))).length){jc.debug("Joining to rooms = ",t);let r=0;if(await Xo(t,async(e
,t)=>{await e;try{jc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){jc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return jc.debug(
"Fetching results again after joining"),this.getAll()}return Xo(i,(e,i)=>{var t=n[i],r=Fs(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Fa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return mo(e,$i(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return $i(Fs(e,
e=>ei(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();jc.debug("createItem: clientUserId = ",o),r={data:e,version:1},jc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),jc.debug(
"createItem: serviceAccountId = ",n),i=Fs(ds(mo(n?[n]:[],t||[])),e=>e!==o),jc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,jc.debug("createItem: allowedGroups = ",n),t={[Tl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:Tl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Rl.SHARED}},{type:Tl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:wl.FORBIDDEN}}]
;void 0!==n&&s.push({type:Tl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Cl.RESTRICTED,allow:$i(n,e=>({
type:Tl.M_ROOM_MEMBERSHIP,room_id:e}))}}),jc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},jc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&xs(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:yl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),jc.debug(
"createItem: response = ",t),t=t.room_id,jc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
jc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(jc.debug(
"response = ",JSON.stringify(n,null,2)),!V(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=$i(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!V(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new dc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),jc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new dc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){jc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){jc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),jc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof dc&&[401,403,404].includes(e.getStatusCode()))throw e;throw jc.error(
`Error in deleteById(${t}): `,e),new dc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await Xo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw jc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const xc=ic.createLogger("runMatrixResource"
);(bl=bl||{}).ON_EXIT="NodeSystemProcess:onExit";const Jc=ic.createLogger("NodeSystemProcess");class Bc{constructor(e,t,
r,n=!0){l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,
"_stderrCallback",void 0),l(this,"_closeCallback",void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,
"_printToParentProcess",void 0),l(this,"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",
void 0),this._observer=new yc("NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,
this._printToParentProcess=n,this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this)
,this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=Tu.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(bl.ON_EXIT
)?this._observer.triggerEvent(bl.ON_EXIT,this):Jc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(Bc,"Event",bl);const Wc=ic.createLogger(
"NodeSystem");class Vc{constructor(){l(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){xs(this._tempFileNames,e=>{Wc.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){const t=Au.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}isFile(e){const t=Au.default.statSync(e)
;return t.isFile()}isDirectory(e){const t=Au.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e
)?this.isDirectory(e)?this.deleteDirectory(e):Au.default.unlinkSync(e):Wc.warn(`deleteFile: Path did not exist: ${e}`)}
deleteDirectory(e){this.pathExists(e)?Au.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):Wc.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r){return new Bc(e,t,r)}createDirectory(e){
return Au.default.mkdirSync(e),this}getWorkingDirectory(){return process.cwd()}createTemporaryFile(){let e="";do{
var t=Ru.default.randomBytes(20).toString("hex")}while(e=yu.default.join(this.getWorkingDirectory(),`${t}.tmp`),
Au.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file");return this._tempFileNames.push(e),e}}
(ru=Il=Il||{}).STRINGIFY="stringify",ru.PARSE="parse";const qc=ic.createLogger("BaseStepController");(ru=Dl={}
).JSON_STARTED="BaseStepController:scriptStarted",ru.JSON_PAUSED="BaseStepController:scriptPaused",
ru.JSON_RESUMED="BaseStepController:scriptResumed",ru.JSON_CANCELLED="BaseStepController:scriptCancelled",
ru.JSON_FAILED="BaseStepController:scriptFailed",ru.JSON_FINISHED="BaseStepController:scriptFinished",
ru.JSON_CHANGED="BaseStepController:scriptChanged";class Kc{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(l(this,
"_context",void 0),l(this,"_observer",void 0),l(this,"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,
"_stepName",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,"_output",void 0),l(
this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,"_compiledOutput",void 0),
l(this,"_successResult",void 0),l(this,"_errorResult",void 0),!p(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!p(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!K(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=_l.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new yc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case _l.STARTED:return!0;case _l.PAUSED:case _l.CONSTRUCTED:case _l.CANCELLED:case _l.FINISHED:
case _l.FAILED:return!1}}isStarted(){switch(this._state){case _l.STARTED:case _l.PAUSED:return!0;case _l.CONSTRUCTED:
case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}isPaused(){switch(this._state){case _l.PAUSED:return!0
;case _l.CONSTRUCTED:case _l.STARTED:case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}isFinished(){switch(
this._state){case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!0;case _l.CONSTRUCTED:case _l.STARTED:
case _l.PAUSED:return!1}}isSuccessful(){switch(this._state){case _l.FINISHED:return!0;case _l.FAILED:case _l.CANCELLED:
case _l.CONSTRUCTED:case _l.STARTED:case _l.PAUSED:return!1}}isCancelled(){switch(this._state){case _l.CANCELLED:
return!0;case _l.FINISHED:case _l.FAILED:case _l.CONSTRUCTED:case _l.STARTED:case _l.PAUSED:return!1}}isFailed(){switch(
this._state){case _l.FAILED:return!0;case _l.CANCELLED:case _l.FINISHED:case _l.CONSTRUCTED:case _l.STARTED:
case _l.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==_l.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=_l.STARTED,!K(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${Pc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!K(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${Pc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${Pc.toString(this._output)}`);if(this._compiledOutput=n,
qc.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Dl.JSON_STARTED)&&this._observer.triggerEvent(Dl.JSON_STARTED,this),
this._observer.hasCallbacks(Dl.JSON_CHANGED)&&this._observer.triggerEvent(Dl.JSON_CHANGED,this),!At(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,gt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(Dl.JSON_STARTED,e)}onPaused(e
){return this.on(Dl.JSON_PAUSED,e)}onResumed(e){return this.on(Dl.JSON_RESUMED,e)}onCancelled(e){return this.on(
Dl.JSON_CANCELLED,e)}onFailed(e){return this.on(Dl.JSON_FAILED,e)}onFinished(e){return this.on(Dl.JSON_FINISHED,e)}
onChanged(e){return this.on(Dl.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){qc.error(
"Action success: ",e),void 0!==this._compiledOutput?(qc.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):qc.info("No output target configured for result: ",e),
this._successResult=e,this._state=_l.FINISHED,this._observer.hasCallbacks(Dl.JSON_FINISHED
)&&this._observer.triggerEvent(Dl.JSON_FINISHED,this),this._observer.hasCallbacks(Dl.JSON_CHANGED
)&&this._observer.triggerEvent(Dl.JSON_CHANGED,this)}_errorCloseAction(e){qc.error("Action failed: ",e),
this._errorResult=e,this._state=_l.FAILED,this._observer.hasCallbacks(Dl.JSON_FAILED)&&this._observer.triggerEvent(
Dl.JSON_FAILED,this),this._observer.hasCallbacks(Dl.JSON_CHANGED)&&this._observer.triggerEvent(Dl.JSON_CHANGED,this)}}l(
Kc,"Event",Dl),l(Kc,"State",_l);const zc=mo(iu,["name","json","action","output"]),Xc=ic.createLogger("JsonController")
;class Yc extends Kc{static parseControllerModel(e){if(ze(e))return e}static isControllerModel(e){return ze(e)}
static createController(e,t){return new Yc(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=Il.STRINGIFY,i=void 0
){super(e,El.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:Il.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case Il.STRINGIFY:case Il.PARSE:return 1}}())throw Xc.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${Pc.toString(e)}`);if(e===Il.STRINGIFY){if(!K(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${Pc.toString(t)}`);var r=JSON.stringify(t);if(!p(
r))throw Xc.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==Il.PARSE
)throw Xc.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw Xc.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${Pc.toString(t)}`)
;return JSON.parse(t)}}(ru=Ol=Ol||{}).STRINGIFY="stringify",ru.PARSE="parse";const Qc=mo(iu,["name","csv","action",
"output"]),Zc=ic.createLogger("CsvController");class ed extends Kc{static parseControllerModel(e){if(Qe(e))return e}
static isControllerModel(e){return Qe(e)}static createController(e,t){return new ed(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Ol.STRINGIFY,i=void 0){super(e,El.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Ol.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Ol.STRINGIFY:case Ol.PARSE:return 1}}())throw Zc.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${Pc.toString(e)}`);if(e===Ol.STRINGIFY
){if(!Ye(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${Pc.toString(t)}`)
;if(n="\n",!p(r=$i(t,e=>{return[e,t,r]=[e,",",'"'],$i(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Ol.PARSE)throw Zc.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw Zc.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${Pc.toString(t)}`);if(n="\n",t=Ye(r=t)?r:(p(r
)||(r=`${r}`),$i(la(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Xe(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Ja(e,'"')&&Ka(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!Ye(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const td=mo(iu,["name","command","args","env"]),
rd=ic.createLogger("ScriptController");(ru=Ll=Ll||{}).SCRIPT_STARTED="ScriptController:scriptStarted",
ru.SCRIPT_PAUSED="ScriptController:scriptPaused",ru.SCRIPT_RESUMED="ScriptController:scriptResumed",
ru.SCRIPT_CANCELLED="ScriptController:scriptCancelled",ru.SCRIPT_FAILED="ScriptController:scriptFailed",
ru.SCRIPT_FINISHED="ScriptController:scriptFinished",ru.SCRIPT_CHANGED="ScriptController:scriptChanged";class nd{
static parseControllerModel(e){if(Ze(e))return e}static isControllerModel(e){return Ze(e)}static createController(e,t){
return new nd(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this
,"_closeCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",void 0)
,l(this,"_systemProcess",void 0),l(this,"_state",void 0),!J(t))throw new TypeError(`Script name invalid: ${t}`);if(!p(r)
)throw new TypeError(`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!y(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=_l.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new yc(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`ScriptController#${this._name}`}
getStateDTO(){return{type:El.SCRIPT,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){
switch(this._state){case _l.STARTED:return!0;case _l.PAUSED:case _l.CONSTRUCTED:case _l.CANCELLED:case _l.FINISHED:
case _l.FAILED:return!1}}isStarted(){switch(this._state){case _l.STARTED:case _l.PAUSED:return!0;case _l.CONSTRUCTED:
case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}isPaused(){switch(this._state){case _l.PAUSED:return!0
;case _l.CONSTRUCTED:case _l.STARTED:case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!1}}isFinished(){switch(
this._state){case _l.CANCELLED:case _l.FINISHED:case _l.FAILED:return!0;case _l.CONSTRUCTED:case _l.STARTED:
case _l.PAUSED:return!1}}isSuccessful(){switch(this._state){case _l.FINISHED:return!0;case _l.FAILED:case _l.CANCELLED:
case _l.CONSTRUCTED:case _l.STARTED:case _l.PAUSED:return!1}}isCancelled(){switch(this._state){case _l.CANCELLED:
return!0;case _l.FINISHED:case _l.FAILED:case _l.CONSTRUCTED:case _l.STARTED:case _l.PAUSED:return!1}}isFailed(){switch(
this._state){case _l.FAILED:return!0;case _l.CANCELLED:case _l.FINISHED:case _l.CONSTRUCTED:case _l.STARTED:
case _l.PAUSED:return!1}}start(){var e,t,r;if(this._state!==_l.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);if(this._state=_l.STARTED,!p(e=this._context.compileModel(this._command))
)throw new Error(`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!y(
r=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);this._compiledEnv=r,rd.info(
`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "')}"`)
;const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(bl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
Ll.SCRIPT_STARTED)&&this._observer.triggerEvent(Ll.SCRIPT_STARTED,this),this._observer.hasCallbacks(Ll.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ll.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return rd.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=_l.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(Ll.SCRIPT_PAUSED)&&this._observer.triggerEvent(Ll.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(Ll.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ll.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._systemProcess)throw new Error(
"No process initialized");return rd.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=_l.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(Ll.SCRIPT_RESUMED
)&&this._observer.triggerEvent(Ll.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Ll.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ll.SCRIPT_CHANGED,this),this}stop(){if(this._state!==_l.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return rd.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=_l.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(Ll.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
Ll.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(Ll.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ll.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(Ll.SCRIPT_STARTED,e)}onPaused(e){return this.on(Ll.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(Ll.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Ll.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
Ll.SCRIPT_FAILED,e)}onFinished(e){return this.on(Ll.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Ll.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),rd.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=_l.FINISHED,this._observer.hasCallbacks(
Ll.SCRIPT_FINISHED)&&this._observer.triggerEvent(Ll.SCRIPT_FINISHED,this)):(this._state=_l.FAILED,
this._observer.hasCallbacks(Ll.SCRIPT_FAILED)&&this._observer.triggerEvent(Ll.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(Ll.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ll.SCRIPT_CHANGED,this)}}l(nd,"Event",Ll),l(
nd,"State",_l),(Pl=Pl||{}).MKDIR="mkdir";const id=mo(iu,["name","file","target","output"]),od=ic.createLogger(
"FileController");class sd extends Kc{static parseControllerModel(e){if(et(e))return e}static isControllerModel(e){
return et(e)}static createController(e,t){return new sd(e,t.name,t.target,t.file,t.output)}constructor(e,t,r,n,i=void 0
){super(e,El.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){const r=this.getContext(),n=r.getSystem();if(
e!==Pl.MKDIR)throw od.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${Pc.toString(e)}`);if(e!==Pl.MKDIR)throw od.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!f(t))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${Pc.toString(t)}`);return void 0===t?(t=n.createTemporaryFile(),
n.createDirectory(t),od.info(`Created temporary directory: ${t}`)):(n.createDirectory(t),od.info(
`Created directory: ${t}`)),t}}const ad=mo(iu,["name","variable","set"]);(Ul=Ul||{}).SET="set",$l=Ul
;const ld=ic.createLogger("VariableController");class ud extends Kc{static parseControllerModel(e){if(tt(e))return e}
static isControllerModel(e){return tt(e)}static createController(e,t){return new ud(e,t.name,t.set,$l.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,El.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Ul.SET)throw ld.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${Pc.toString(e)}`);if(e!==$l.SET)throw ld.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!K(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${Pc.toString(t)}`);return t}}const cd=ic.createLogger("main")
;ic.setLogLevel(Hu),async function(t=[]){var r,n,i,o;let s;try{if(class{static registerControllers(){
Lc.registerController(ud),Lc.registerController(sd),Lc.registerController(Yc),Lc.registerController(ed),
Lc.registerController(nd)}}.registerControllers(),cd.debug(`Loglevel ${ic.getLogLevelString()}`),r=Qu,t.shift(),
!t.shift())return console.log(H(r)),ll.ARGUMENT_PARSE_ERROR;if(0===t.length)return console.log(H(r)),
ll.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){case"-h":case"--help":case 0:return 0
;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return console.log(H(r)),ll.OK;case 1:
return console.log(function(e){const t=Fs([Vu?"LOCAL":"",qu?"HTTP":"",Ku?"MATRIX":"",Xu?"TEST":"",Yu?"DEV":""],e=>!!e)
;return`${e} v${Ju} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Ju}'
  BUILD_NODE_ENV              = '${Bu}'
  BUILD_DATE                  = '${Wu}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Vu}'
  BUILD_WITH_HTTP_RESOURCES   = '${qu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Ku}'
`}(r)),ll.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=ac.parseRunnerResource(n)))return cd.error(
`Unsupported argument: ${n}`),console.log(H(r)),ll.UNKNOWN_ARGUMENT;if(s=new Vc,(o=await async function(e,t){switch(
t.type){case il.HTTP:return qu?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Tc.getJson(r.url,c)))return Fc.error(`Failed to load URL "${r.url}": `,o),
ll.RESOURCE_LOAD_FAILED;if(void 0===(s=ie(o)))return Fc.error(`Model from URL "${r.url}" was not valid: `,o),
ll.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new $c(t,a,l,tc,rc)
;let e=Lc.createController(s,u);return Fc.info(`Running ${e.getName()} from ${r.url}`),
await Lc.startAndWaitUntilFinished(e),Fc.info(`Successfully finished ${e.getName()} from ${r.url}`),ll.OK}catch(e){
return Fc.error("Error: ",e),ll.HTTP_RESOURCE_FAILED}}(e,t):ll.UNBUILD_FEATURE;case il.LOCAL:return Vu?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
vu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=ie(i=JSON.parse(n))))return kc.warn("Model was not valid: ",i),ll.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new $c(t,s,a,tc,rc);let e=Lc.createController(o,l);return kc.info(`Running ${e.getName(
)} from ${r.path}`),await Lc.startAndWaitUntilFinished(e),kc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,ll.OK}catch(e){return kc.error("Error: ",e),ll.LOCAL_RESOURCE_FAILED}}(e,t):ll.UNBUILD_FEATURE;case il.MATRIX:
return Ku?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,m,N,y,R,C;try{xc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new Gc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return ll.UNKNOWN_AUTHENTICATION_TYPE;e=new Gc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return xc.error("Could not detect agent user ID"),ll.UNKNOWN_AGENT_ID
;xc.info(`Agent user ID: ${t}`);const w=new Hc(e,Tl.FI_NOR_AGENT_DTO);if(0===(C=await w.getAll()).length
)return xc.debug("Detected no pools available."),ll.OK;T=(1===C.length?(xc.debug(
"Detected single pool available. Picking it."),C[0]):(xc.debug(
`Detected ${C.length} pools available. Picking one by random.`),C[Math.floor(Math.random()*C.length)])).id,xc.info(
`Pool ID: ${T}`);const b=new Hc(e,Tl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Tl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),xc.debug("runList = ",S);let r;if(0===S.length)return xc.debug("Detected no work available."),ll.OK
;r=1===S.length?(xc.debug("Detected single work available. Picking it."),S[0]):(xc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return xc.warn(`Work ID was already running: ${I}`),xc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),xc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),ll.CONFLICT;if(xc.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return xc.warn(
"The work item disappeared while we were selecting it."),ll.WORK_CANCELLED;if(I!==r.id)return xc.error(
`The work item ID conflict: ${I} !== ${r.id}`),ll.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return xc.error(""),ll.CONFLICT;if(xc.debug(
"Work item secured to us! We can start the job."),void 0===(m=ie(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return xc.warn("Work item did not contain correct pipeline model: ",r),
ll.RESOURCE_MODEL_INVALID;N=null==m?void 0:m.parameters,y=null==m?void 0:m.variables,R=new $c(i,N,y,tc,rc)
;let n=Lc.createController(m,R);await Ke(e,b,I,r,n);const D=n.onChanged(()=>{Ke(e,b,I,r,n).catch(e=>{xc.error(
"Failed to save controller state: ",e)})});try{await Lc.startAndWaitUntilFinished(n)}finally{D(),await Ke(e,b,I,r,n)}
return xc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),xc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),ll.OK}catch(e){return xc.error("Error: ",e),
ll.MATRIX_RESOURCE_FAILED}}(e,t):ll.UNBUILD_FEATURE;default:return ll.UNKNOWN_RESOURCE_TYPE}}(s,i))!==ll.OK
)return o===ll.UNKNOWN_RESOURCE_TYPE?(cd.error(`Error NorPP${o}: ${j(o)}: Resource type was unknown: ${i.type}`),
console.log(H(r)),ll.UNKNOWN_RESOURCE_TYPE):(function(e){if(Fa(e)&&!(e<0||255<e)){if(
al.FATAL_SIGNAL_RANGE_START<=e&&e<=al.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case al.OK:case al.GENERAL_ERRORS:
case al.MISUSE_OF_SHELL_BUILTINS:case al.ARGUMENT_PARSE_ERROR:case al.UNKNOWN_ARGUMENT:case al.UNKNOWN_RESOURCE_TYPE:
case al.UNKNOWN_AUTHENTICATION_TYPE:case al.RESOURCE_LOAD_FAILED:case al.RESOURCE_MODEL_INVALID:
case al.LOCAL_RESOURCE_FAILED:case al.HTTP_RESOURCE_FAILED:case al.MATRIX_RESOURCE_FAILED:case al.UNIMPLEMENTED_FEATURE:
case al.UNBUILD_FEATURE:case al.FATAL_ERROR:case al.USAGE:case al.DATAERR:case al.NOINPUT:case al.NOUSER:case al.NOHOST:
case al.UNAVAILABLE:case al.SOFTWARE:case al.OSERR:case al.OSFILE:case al.CANTCREAT:case al.IOERR:case al.TEMPFAIL:
case al.PROTOCOL:case al.NOPERM:case al.CONFIG:case al.COMMAND_INVOKED_CANNOT_EXECUTE:case al.COMMAND_NOT_FOUND:
case al.INVALID_ARGUMENT_TO_EXIT:case al.FATAL_SIGNAL_RANGE_START:case al.FATAL_SIGNAL_RANGE_END:
case al.EXIT_STATUS_OUT_OF_RANGE:case al.UNKNOWN_AGENT_ID:case al.WORK_CANCELLED:case al.CONFLICT:return 1;default:
return}}}(o)?cd.error(`Error EX-${o}: ${j(o)}: for ${U(i.type)} resource ${n}`):cd.error(
`Error: Exit status ${o}: for ${U(i.type)} resource ${n}`),o)}while(1<=t.length);return ll.OK}catch(e){return cd.error(
"Fatal error: ",e),ll.FATAL_ERROR}finally{s&&s.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{
console.error("Error: ",e),process.exit(1)});
