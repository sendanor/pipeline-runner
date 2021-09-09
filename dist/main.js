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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new Kt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new zt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(kn);return o.cache=new(u.Cache||Fn),o}
function v(e){return void 0===e}function c(e){return ar(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!ar(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||$a(e)}function p(e){return Oa(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return ka(e)}function g(e){return v(e)||ka(e)}function T(e,t){return Wi(e,t)}
function S(e,t){return Qi(e,t)}function A(e,t){return ft(e)&&S(Ya(e),t)}function m(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,ft(e)&&S(L(e),t))}function N(e){return!!ft(e)&&!(e instanceof Date)&&!St(e)&&!c(
e)&&m(e,p,void 0)}function y(e,t=p,r=void 0){return!!ft(e)&&!(e instanceof Date)&&!St(e)&&!c(e)&&m(e,t,r)}function R(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!ft(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(St(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=Jo(L(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Ya(e),n=xo(s,e=>!r(e)),t=L(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function C(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return R(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function w(...e){return t=>T(e,e=>e(t))}function b(e){return ft(e)}function I(e,t){return b(e
)&&0===(r=t,$s(L(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return Ra(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function P(e){if(void 0!==e&&""!==e)return`${e}`}function L(e,t=p){if(c(e
)){var r=Ui(e,(e,t)=>t);return $s(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),$s(e,e=>t(e))):[]}function U(e){switch(e
){case rl.HTTP:return"http";case rl.LOCAL:return"local";case rl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return N(e)&&function(){switch(null==e?void 0:e.type){
case il.NONE:case il.BASIC_AUTH:case il.BEARER_AUTH:return 1;default:return}}()}function F(e){return N(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===ol.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:ol.BASIC_AUTH,username:r,password:n
}}function M(e){return N(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===ol.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:ol.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:ol.BEARER_AUTH,access_token:n}}function j(e){if(sl.FATAL_SIGNAL_RANGE_START<=e&&e<=sl.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-sl.FATAL_SIGNAL_RANGE_START}`;switch(e){case sl.OK:return"OK";case sl.GENERAL_ERRORS:
return"GENERAL_ERRORS";case sl.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case sl.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case sl.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case sl.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case sl.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case sl.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case sl.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case sl.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case sl.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case sl.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case sl.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case sl.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case sl.FATAL_ERROR:return"FATAL_ERROR"
;case sl.USAGE:return"USAGE";case sl.DATAERR:return"DATAERR";case sl.NOINPUT:return"NOINPUT";case sl.NOUSER:
return"NOUSER";case sl.NOHOST:return"NOHOST";case sl.UNAVAILABLE:return"UNAVAILABLE";case sl.SOFTWARE:return"SOFTWARE"
;case sl.OSERR:return"OSERR";case sl.OSFILE:return"OSFILE";case sl.CANTCREAT:return"CANTCREAT";case sl.IOERR:
return"IOERR";case sl.TEMPFAIL:return"TEMPFAIL";case sl.PROTOCOL:return"PROTOCOL";case sl.NOPERM:return"NOPERM"
;case sl.CONFIG:return"CONFIG";case sl.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case sl.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case sl.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case sl.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case sl.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case sl.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case sl.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case sl.WORK_CANCELLED:return"WORK_CANCELLED";case sl.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return Vu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${Bu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Wu?`

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
`:""}${Ju?`

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
`}function x(e){if($a(e))switch(e){case ll.OPTIONS:return"options";case ll.GET:return"get";case ll.POST:return"post"
;case ll.PUT:return"put";case ll.DELETE:return"delete";case ll.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!Oa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function B(e){return p(e)||$a(e)||Ra(e)||Ca(e)
}function W(e){return B(e)||d(e,w(W,v))||V(e)}function V(e){return N(e)&&m(e,p,w(W,v))}function q(e){return v(e)||V(e)}
function K(e){return B(e)||X(e)||z(e)}function z(e){return N(e)&&m(e,p,w(K,v))}function X(e){return d(e,w(K,v))}
function Y(e){return N(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===eu.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Ra(r))||N(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===eu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===eu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||N(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===eu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||N(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===eu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return N(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(v(null==e?void 0:e.variables)||V(
null==e?void 0:e.variables))}function Z(e){return!(!Q(e)||void 0===fc.findController(e)&&!(Q(e)&&N(e)&&J(
null==e?void 0:e.name)))}function ee(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,Z,1)&&I(e,gc)}
function te(e){if(ee(e))return e}function re(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,ee,1)&&I(
e,Tc)}function ne(e){return Q(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,re,1)&&I(e,Sc)}function ie(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ne(e))return e}(e))&&void 0!==t?t:function(e){if(re(e)
)return e}(e))&&void 0!==t?t:te(e))&&void 0!==t?t:(t=e,null!==(e=fc.parseControllerModel(t))&&void 0!==e?e:te(t))}
function oe(e){return b(e)&&St(null==e?void 0:e.getName)&&St(null==e?void 0:e.isRunning)&&St(null==e?void 0:e.isStarted
)&&St(null==e?void 0:e.isPaused)&&St(null==e?void 0:e.isCancelled)&&St(null==e?void 0:e.isFinished)&&St(
null==e?void 0:e.isFailed)&&St(null==e?void 0:e.isSuccessful)&&St(null==e?void 0:e.start)&&St(null==e?void 0:e.pause
)&&St(null==e?void 0:e.resume)&&St(null==e?void 0:e.stop)&&St(null==e?void 0:e.destroy)&&St(null==e?void 0:e.toString
)&&St(null==e?void 0:e.toJSON)&&St(null==e?void 0:e.onStarted)&&St(null==e?void 0:e.onPaused)&&St(
null==e?void 0:e.onResumed)&&St(null==e?void 0:e.onCancelled)&&St(null==e?void 0:e.onFailed)&&St(
null==e?void 0:e.onFinished)&&St(null==e?void 0:e.onChanged)}function se(e){return e instanceof Nc}function ae(e){
return e instanceof Rc}function le(e){return p(e)&&!!e&&"!"===e[0]}function ue(e){try{return function(e){if(!p(e)
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
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${L(e)}`);if(!E(null==e?void 0:e.age)
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
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${L(e)}`);if(!V(
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
return e.message}}function fe(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ge(e){
return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,ve)}function Te(e){try{return function(e){if(!N(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,ve))throw e=Jo(null==e?void 0:e.events,e=>!ve(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${pe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Se(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&V(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&de(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||_e(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function Ae(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${L(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!de(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!_e(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${Ee(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function me(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ne(e){
return N(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Se)&&Ra(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function ye(e){try{return function(e){if(!N(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${L(e)}`);if(!d(
null==e?void 0:e.events,Se)){var t=Jo(null==e?void 0:e.events,e=>!Se(e));throw new TypeError(
`Property "events" item was not correct: ${Ae(t)}`)}if(!Ra(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,he)}function Ce(e){
return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function we(e){return N(e)&&I(e,["events"])&&d(
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
)||_e(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Pe(e){try{return function(e){if(!N(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${L(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!_e(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Le(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Oe)}function Ue(e){try{return function(e){if(!N(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${L(e)}`);if(!d(null==e?void 0:e.events,Oe))throw e=Jo(
null==e?void 0:e.events,e=>!Oe(e)),new TypeError(`Property "events" had invalid item: ${Pe(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function $e(e){return N(e)&&I(e,["invite_state"])&&Le(
null==e?void 0:e.invite_state)}function Fe(e){try{return function(e){if(!N(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${L(e)}`);if(
!Le(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Ue(
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
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||Ca(null==e?void 0:e.avatar_url))}function Ve(e){
return N(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case Sl.M_USER_IN_USE:
case Sl.M_INVALID_USERNAME:case Sl.M_EXCLUSIVE:case Sl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function qe(e){return encodeURIComponent(e)}async function Ke(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,gl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}function ze(e){return Q(e)&&J(
null==e?void 0:e.name)&&K(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,Vc)}
function Xe(e){return d(e,p)}function Ye(e){return d(e,Xe)}function Qe(e){return Q(e)&&J(null==e?void 0:e.name)&&K(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,zc)}function Ze(e){return Q(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,Qc);var t,r,n,i}function et(e){return Q(e)&&J(null==e?void 0:e.name
)&&K(null==e?void 0:e.file)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.output)&&I(e,td)}var tt,rt,nt,it,ot,st,at,lt
,ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,mt,Nt,yt,Rt,Ct,wt,bt,It,Dt,Ot,Pt,Lt,Ut,$t,Ft,kt,Mt,Gt,jt,Ht,xt,Jt,Bt,Wt,Vt,qt,Kt
,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,Ar,mr,Nr,yr,Rr,Cr,wr,br,Ir,Dr,Or,Pr,Lr,Ur
,$r,Fr,kr,Mr,Gr,jr,Hr,xr,Jr,Br,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An
,mn,Nn,yn,Rn,Cn,wn,bn,In,Dn,On,Pn,Ln,Un,$n,Fn,kn,Mn,Gn,jn,Hn,xn,Jn,Bn,Wn,Vn,qn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai
,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,mi,Ni,yi,Ri,Ci,wi,bi,Ii,Di,Oi,Pi,Li,Ui,$i,Fi,ki,Mi,Gi,ji,Hi,xi,Ji,Bi,Wi,Vi,qi
,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,Ao,mo,No,yo,Ro,Co,wo,bo,Io,Do,Oo,Po,Lo,Uo
,$o,Fo,ko,Mo,Go,jo,Ho,xo,Jo,Bo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss
,As,ms,Ns,ys,Rs,Cs,ws,bs,Is,Ds,Os,Ps,Ls,Us,$s,Fs,ks,Ms,Gs,js,Hs,xs,Js,Bs,Ws,Vs,qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa
,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,ma,Na,ya,Ra,Ca,wa,ba,Ia,Da,Oa,Pa,La,Ua,$a,Fa,ka,Ma,Ga,ja,Ha,xa,Ja,Ba,Wa,Va
,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,Tl,Sl,Al,ml,Nl,yl,Rl,Cl,wl,bl,Il,Dl,Ol,Pl
,Ll,Ul,$l,Fl,kl,Ml,Gl,jl,Hl,xl,Jl,Bl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,ou,su,au,lu,uu,cu,du,hu=require("fs"),
_u=require("querystring"),Eu=require("url"),vu=require("path"),pu=require("child_process"),fu=require("crypto"),gu=e(hu)
,Tu=t(_u),Su=e(Eu),Au=e(vu),mu=e(fu),
Nu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,yu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ru=function(){
this.__data__=[],this.size=0},Cu=function(e,t){return e===t||e!=e&&t!=t},wu=Cu,bu=function(e,t){for(var r=e.length;r--;
)if(wu(e[r][0],t))return r;return-1},Iu=bu,Du=Array.prototype,Ou=Du.splice,Pu=bu,Lu=bu,Uu=bu,$u=Ru,Fu=function(e){
var t=this.__data__;return!((e=Iu(t,e))<0||(e==t.length-1?t.pop():Ou.call(t,e,1),--this.size,0))},ku=function(e){
var t=this.__data__;return(e=Pu(t,e))<0?void 0:t[e][1]},Mu=function(e){return-1<Lu(this.__data__,e)},Gu=function(e,t){
var r=this.__data__,n=Uu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=$u,
r.prototype.delete=Fu,r.prototype.get=ku,r.prototype.has=Mu,r.prototype.set=Gu,ut=Fl=r,kl=function(){
this.__data__=new ut,this.size=0},Ks=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Ul=function(e){return this.__data__.get(e)},$l=function(e){return this.__data__.has(e)},
Hl=Ml="object"==typeof Nu&&Nu&&Nu.Object===Object&&Nu,Jl="object"==typeof self&&self&&self.Object===Object&&self,mr=xl=(
rs=Hl||Jl||Function("return this")()).Symbol,Bs=Object.prototype,ct=Bs.hasOwnProperty,dt=Bs.toString,
ht=mr?mr.toStringTag:void 0,Nr=Object.prototype,_t=Nr.toString,Et=function(e){var t,r,n=ct.call(e,ht),i=e[ht];try{t=!(
e[ht]=void 0)}catch(e){}return r=dt.call(e),t&&(n?e[ht]=i:delete e[ht]),r},vt=function(e){return _t.call(e)},pt=(qs=xl
)?qs.toStringTag:void 0,gt=Bl=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
pt&&pt in Object(e)?Et:vt)(e)},Tt=ft=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
St=function(e){return!!Tt(e)&&("[object Function]"==(e=gt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},yr=rs["__core-js_shared__"],
Ll=/[^.]+$/.exec((Xt=yr)&&Xt.keys&&Xt.keys.IE_PROTO||""),At=Ll?"Symbol(src)_1."+Ll:"",Yt=Function.prototype,
mt=Yt.toString,Nt=St,yt=function(e){return!!At&&At in e},Rt=ft,Ct=Kr=function(e){if(null!=e){try{return mt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Rr=/[\\^$.*+?()[\]{}|]/g,wt=/^\[object .+?Constructor\]$/,
zs=Function.prototype,_u=Object.prototype,Eu=zs.toString,vu=_u.hasOwnProperty,bt=RegExp("^"+Eu.call(vu).replace(Rr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),It=function(e){return!(!Rt(e
)||yt(e))&&(Nt(e)?bt:wt).test(Ct(e))},Dt=function(e,t){return null==e?void 0:e[t]},Du=(fu=function(e,t){return t=Dt(e,t)
,It(t)?t:void 0})(rs,"Map"),bu=fu(Object,"create"),Pt=Ot=Ru=bu,lu=Object.prototype,Lt=lu.hasOwnProperty,Ut=Ru,
uu=Object.prototype,$t=uu.hasOwnProperty,Ft=Ru,cu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},du=function(e){var t,r=this.__data__;return Pt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Lt.call(r,e)?r[e]:void 0},$u=function(e){var t=this.__data__;return Ut?void 0!==t[e]:$t.call(t,e)},
Fu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ft&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Ot?Ot(null):{},this.size=0},i.prototype.delete=cu,i.prototype.get=du,
i.prototype.has=$u,i.prototype.set=Fu,kt=i,Mt=Fl,Gt=Du,ku=function(){this.size=0,this.__data__={hash:new kt,map:new(
Gt||Mt),string:new kt}},jt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Bt=Jt=xt=Ht=function(e,t){
return e=e.__data__,jt(t)?e["string"==typeof t?"string":"hash"]:e.map},Mu=function(e){return e=Ht(this,e).delete(e),
this.size-=e?1:0,e},Gu=function(e){return xt(this,e).get(e)},Nu=function(e){return Jt(this,e).has(e)},Ml=function(e,t){
var r=Bt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=ku,o.prototype.delete=Mu,
o.prototype.get=Gu,o.prototype.has=Nu,o.prototype.set=Ml,Vt=Du,qt=Jl=o,Kt=Wt=Fl,es=Ks,Bs=Ul,mr=$l,Nr=function(e,t){var r
,n=this.__data__;if(n instanceof Wt){if(r=n.__data__,!Vt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new qt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=kl,s.prototype.delete=es,
s.prototype.get=Bs,s.prototype.has=mr,s.prototype.set=Nr,qs=s,zt=Jl,yr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=yr,Qt=Xt=a,Zt=Ll=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},er=Yt=function(e,t){return e.has(t)},zs=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new Qt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!Zt(t,function(e,t){if(!er(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},_u=rs.Uint8Array,tr=_u,rr=Cu,nr=zs,ir=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},or=Eu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Rr=(vu=xl)?vu.prototype:void 0,sr=Rr?Rr.valueOf:void 0,bu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new tr(e),new tr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return rr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=ir;case"[object Set]":return l=l||or,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=nr(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(sr)return sr.call(e)==sr.call(t)}return!1},lu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},uu=Array.isArray,lr=lu,ur=ar=uu,Ru=function(e,t,r){
return t=t(e),ur(e)?t:lr(t,r(e))},cr=cu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},du=Object.prototype,dr=du.propertyIsEnumerable,$u=(hr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),cr(hr(t),function(e){return dr.call(t,e)}))}:function(){return[]},Fu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},_r=Bl,ku=function(e){return Er(e)&&"[object Arguments]"==_r(e)},
vr=Er=Mu=function(e){return null!=e&&"object"==typeof e},Gu=Object.prototype,pr=Gu.hasOwnProperty,
fr=Gu.propertyIsEnumerable,Nu=ku(function(){return arguments}())?ku:function(e){return vr(e)&&pr.call(e,"callee"
)&&!fr.call(e,"callee")},Ml=rs,Fl=function(){return!1},Ml=(Ml=(kl=($l=(kl=($l=(Ul=Ks={exports:{}}).exports
)&&!$l.nodeType&&$l)&&Ul&&!Ul.nodeType&&Ul)&&$l.exports===kl)?Ml.Buffer:void 0)?Ml.isBuffer:void 0,Ul.exports=Fl=Ml||Fl,
gr=/^(?:0|[1-9]\d*)$/,es=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&gr.test(e))&&-1<e&&e%1==0&&e<t},Tr=Bl,Sr=Bs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ar=Mu,mr="[object Arguments]",Nr="[object Array]",
yr="[object Boolean]",_u="[object Date]",vu="[object Error]",Rr="[object Function]",uu="[object Map]",
Gu="[object Object]",ku="[object RegExp]",$l="[object Set]",kl="[object String]",Ml="[object WeakMap]",
Ul="[object ArrayBuffer]",Fl="[object DataView]",(Cr={}
)["[object Float32Array]"]=Cr["[object Float64Array]"]=Cr["[object Int8Array]"]=Cr["[object Int16Array]"]=Cr["[object Int32Array]"]=Cr["[object Uint8Array]"]=Cr["[object Uint8ClampedArray]"]=Cr["[object Uint16Array]"]=Cr["[object Uint32Array]"]=!0
,
Cr[mr]=Cr[Nr]=Cr[Ul]=Cr[yr]=Cr[Fl]=Cr[_u]=Cr[vu]=Cr[Rr]=Cr[uu]=Cr["[object Number]"]=Cr[Gu]=Cr[ku]=Cr[$l]=Cr[kl]=Cr[Ml]=!1
,du=function(e){return Ar(e)&&Sr(e.length)&&!!Cr[Tr(e)]},Gu=function(t){return function(e){return t(e)}},ku=Hl,Ml=(Ml=(
kl=$l={exports:{}}).exports)&&!Ml.nodeType&&Ml,Ml=(Gl=Ml&&kl&&!kl.nodeType&&kl)&&Gl.exports===Ml,jl=Ml&&ku.process,
ku=function(){try{return Gl&&Gl.require&&Gl.require("util").types||jl&&jl.binding&&jl.binding("util")}catch(e){}}(),
kl.exports=ku,Hl=du,ku=(kl=(Ml=$l.exports)&&Ml.isTypedArray)?Gu(kl):Hl,wr=Fu,br=Nu,Ir=ar,Dr=Ks.exports,Or=es,Pr=du=ku,
Ml=Object.prototype,Lr=Ml.hasOwnProperty,kl=function(e,t){var r,n=Ir(e),i=!n&&br(e),o=!n&&!i&&Dr(e),s=!n&&!i&&!o&&Pr(e),
a=n||i||o||s,l=a?wr(e.length,String):[],u=l.length;for(r in e)!t&&!Lr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Or(r,u))||l.push(r);return l},
Ur=Object.prototype,Hl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ur)},
su=Object.keys,au=Object,$r=Hl,Fr=function(e){return su(au(e))},ku=Object.prototype,kr=ku.hasOwnProperty,Mr=St,Gr=Bs,
jr=kl,Hr=function(e){var t,r;if(!$r(e))return Fr(e);for(r in t=[],Object(e))kr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},xr=Ml=function(e){return null!=e&&Gr(e.length)&&!Mr(e)},Jr=Ru,Br=$u,Wr=Hl=function(e){return(xr(e)?jr:Hr)(e)}
,Vr=function(e){return Jr(e,Wr,Br)},Fu=Object.prototype,qr=Fu.hasOwnProperty,ku=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=Vr(e),T=g.length;if(T!=Vr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:qr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},kl=fu(rs,
"DataView"),Ru=Du,$u=fu(rs,"Promise"),Du=Fu=fu(rs,"Set"),rs=fu(rs,"WeakMap"),zr=Bl,Yr="[object Map]",
Qr="[object Promise]",Zr="[object Set]",en="[object WeakMap]",tn="[object DataView]",rn=(Xr=Kr)(Kr=kl),nn=Xr(Ru),on=Xr(
$u),sn=Xr(Du),an=Xr(rs),kl=zr,(Kr&&kl(new Kr(new ArrayBuffer(1)))!=tn||Ru&&kl(new Ru)!=Yr||$u&&kl($u.resolve()
)!=Qr||Du&&kl(new Du)!=Zr||rs&&kl(new rs)!=en)&&(kl=function(e){var t=zr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Xr(e):"")switch(e){case rn:return tn;case nn:return Yr;case on:return Qr
;case sn:return Zr;case an:return en}return t}),ln=qs,un=zs,cn=bu,dn=ku,hn=kl,_n=ar,En=Ks.exports,vn=du,
pn="[object Arguments]",fn="[object Array]",gn="[object Object]",Du=Object.prototype,Tn=Du.hasOwnProperty,Sn=function(e,
t,r,n,i,o){var s,a,l=_n(e),u=_n(t),c=l?fn:hn(e),d=u?fn:hn(t),h=(c=c==pn?gn:c)==gn,u=(d=d==pn?gn:d)==gn;if((d=c==d)&&En(e
)){if(!En(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new ln,l||vn(e)?un(e,t,r,n,i,o):cn(e,t,c,r,n,i,o)):1&r||(
s=h&&Tn.call(e,"__wrapped__"),a=u&&Tn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new ln,dn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new ln)},mn=qs,Nn=rs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!An(t)&&!An(r
)?t!=t&&r!=r:Sn(t,r,n,i,e,o))},yn=ft,Rn=zs=function(e){return e==e&&!yn(e)},Cn=Hl,wn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new mn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Nn(a,s,3,n,l):u))return!1;return!0},bn=function(e){for(var t,r,n=Cn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Rn(r)];return n},In=bu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
ku=function(t){var r=bn(t);return 1==r.length&&r[0][2]?In(r[0][0],r[0][1]):function(e){return e===t||wn(e,t,r)}},Dn=Bl,
On=An=Mu,Pn=ar,Ln=kl=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==Dn(e)},
Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$n=/^\w*$/,Ks=function(e,t){if(Pn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ln(e))||$n.test(e)||!Un.test(e)||null!=t&&e in Object(t)},
Fn=Jl,kn="Expected a function",u.Cache=Fn,
Mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/\\(\\)?/g,$u=0
,ou=($u=u($u=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Mn,function(e,t,r,n){i.push(
r?n.replace(Gn,"$1"):t||e)}),i},function(e){return 500===ou.size&&ou.clear(),e})).cache,jn=yu,qs=(Du=xl
)?Du.prototype:void 0,Jn=qs?qs.toString:void 0,Bn=Jl=function e(t){if("string"==typeof t)return t;if(Hn(t))return jn(t,e
)+"";if(xn(t))return Jn?Jn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},qn=$u,Kn=Du=function(e){
return null==e?"":Bn(e)},zn=xn=kl,ei=Xn=qs=function(e,t){return Wn(e)?e:Vn(e,t)?[e]:qn(Kn(e))},ti=Nu,ii=Bs,si=function(e
,t){return null!=e&&t in Object(e)},ai=du=function(e,t,r){for(var n,i,o=(t=ei(t,e)).length,s=!(n=-1);++n<o&&(i=oi(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ii(o)&&ni(i,o)&&(ri(e)||ti(e))},li=rs,
ui=Zn=function(e,t,r){return void 0===(t=null==e?void 0:Qn(e,t))?r:t},ci=function(e,t){return null!=e&&ai(e,t,si)},hi=zs
,_i=bu,vi=Qn=Bs=function(e,t){for(var r=0,n=(t=Xn(t,e)).length;null!=e&&r<n;)e=e[Yn(t[r++])];return r&&r==n?e:void 0},
pi=function(t){return function(e){return null==e?void 0:e[t]}},fi=function(t){return function(e){return vi(e,t)}},
gi=di=Vn=Ks,Ti=Ei=oi=Yn=rs=function(e){if("string"==typeof e||zn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Si=ku,Ai=function(r,n){return di(r)&&hi(n)?_i(Ei(r),n):function(e){var t=ui(e,r);return void 0===t&&t===n?ci(e,r):li(n,t
,3)}},mi=zs=function(e){return e},Ni=ri=Wn=Hn=ar,yi=function(e){return gi(e)?pi(Ti(e)):fi(e)},Ri=Ks=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Ci=Hl,Di=yu,Pi=Ks=function(e,n){
var i=-1,o=Ii(e)?Array(e.length):[];return bi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Ui=function(e,t){return(Li(e)?Di:Pi
)(e,Oi(t))},Fi=Cu,ki=Ii=wi=Ml,Mi=ni=es,Gi=ft,ji=Ll,xi=function(e,n){var i;return $i(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Wi=function(e,t,r){var n=Ji(e)?ji:xi;return r&&Bi(e,t,r)&&(t=void 0),n(e,Hi(t))},Vi=$i=bi=Ll=ku=function(e,t){
if(null==e)return e;if(!wi(e))return e&&Ri(e,t,Ci);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},qi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Ki=function(e,n){
var i=!0;return Vi(e,function(e,t,r){return i=!!n(e,t,r)}),i},zi=Hi=Oi=bu=function(e){
return"function"==typeof e?e:null==e?mi:"object"==typeof e?Ni(e)?Ai(e[0],e[1]):Si(e):yi(e)},Xi=Ji=Li=ar,
Yi=Bi=ku=function(e,t,r){if(!Gi(r))return!1;var n=typeof t;return!!("number"==n?ki(r)&&Mi(t,r.length
):"string"==n&&t in r)&&Fi(r[t],e)},Qi=function(e,t,r){var n=Xi(e)?qi:Ki;return r&&Yi(e,t,r)&&(t=void 0),n(e,zi(t))},
Zi=fu,fu=function(){try{var e=Zi(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),eo=fu,to=function(e,t,r){
"__proto__"==t&&eo?eo(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},ro=Cu,Cu=Object.prototype,
no=Cu.hasOwnProperty,io=function(e,t,r){var n=e[t];no.call(e,t)&&ro(n,r)&&(void 0!==r||t in e)||to(e,t,r)},oo=qs,so=es,
lo=rs,uo=function(e,t,r,n){var i,o,s,a,l,u,c;if(!ao(e))return e;for(i=-1,s=(o=(t=oo(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=lo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=ao(c)?c:so(t[i+1])?[]:{})),io(a,l,u),a=a[l]}return e},co=function(e,t,r){return null==e?e:uo(e,t,r)},ho=Nu
,Eo=(Cu=xl)?Cu.isConcatSpreadable:void 0,po=function(e){return _o(e)||ho(e)||!!(Eo&&e&&e[Eo])},fo=vo=lu,
go=qs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||po,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):vo(o,s
):i||(o[o.length]=s);return o},To=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
So=_o=ar,Ao=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return fo(So(t)?To(t):[t],go(e,1))},mo=bu,No=Ml,yo=Hl,es=function(o){return function(e,t,r){var n,
i=Object(e);return No(e)||(n=mo(t),e=yo(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
rs=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Ro=/\s/,Co=function(
e){for(var t=e.length;t--&&Ro.test(e.charAt(t)););return t},wo=/^\s+/,bo=Nu=function(e){return e&&e.slice(0,Co(e)+1
).replace(wo,"")},Io=ao=ft,Do=kl,Oo=/^[-+]0x[0-9a-f]+$/i,Po=/^0b[01]+$/i,Lo=/^0o[0-7]+$/i,Uo=parseInt,$o=function(e){
var t;return"number"==typeof e?e:Do(e)?NaN:(Io(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Io(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=bo(e),(t=Po.test(e))||Lo.test(e)?Uo(e.slice(2),t?2:8):Oo.test(e)?NaN:+e))},
Fo=17976931348623157e292,ko=function(e){return e?(e=$o(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Fo:0===e?e:0},Mo=rs,Go=bu
,jo=xl=function(e){var t=ko(e),e=t%1;return t==t?e?t-e:t:0},Ho=Math.max,Cu=es(xo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:jo(r))<0&&(r=Ho(n+r,0)),Mo(e,Go(t),r)):-1}),Jo=Cu,Bo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Wo=Ll,Vo=bu,qo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Ko=ar,zo=function(e,t,r){var n=Ko(e)?Bo:qo,i=arguments.length<3
;return n(e,Vo(t),r,i,Wo)},lu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Xo=rs,Yo=function(e){return e!=e},Qo=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},Zo=Ml=function(e,t,r){return t==t?Qo(e,t,r):Xo(e,Yo,r)},
es=function(e,t){return!(null==e||!e.length)&&-1<Zo(e,t,0)},Cu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},rs=function(){},rs=(ts=Fu)&&1/Eu(new ts([,-0]))[1]==1/0?function(e){return new ts(e)
}:rs,ns=Xt,is=es,os=Cu,ss=Yt,as=rs,ls=Eu,us=function(e,t,r){var n,i,o,s,a=-1,l=is,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=os;else if(200<=u){if(n=t?null:as(e))return ls(n);c=!1,l=ss,h=new ns}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},cs=function(e){return e&&e.length?us(e):[]},ds=kl,hs=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=ds(e),s=void 0!==t,a=null===t,l=t==t,u=ds(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},_s=yu,Es=Bs,vs=bu,ps=Ks,fs=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,gs=Gu,Ts=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=hs(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},Ss=zs,As=ar,kl=function(e,n,r){var i;return n=n.length?_s(n
,function(t){return As(t)?function(e){return Es(e,1===t.length?t[0]:t)}:t}):[Ss],i=-1,n=_s(n,gs(vs)),e=ps(e,function(t,e
,r){return{criteria:_s(n,function(e){return e(t)}),index:++i,value:t}}),fs(e,function(e,t){return Ts(e,t,r)})},
ms=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ns=Math.max,Bs=function(o,s,a){return s=Ns(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ns(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),ms(o,this,e)}},ys=function(e){return function(){return e}},Rs=fu,
Cs=Date.now,ru=Rs?function(e,t){return Rs(e,"toString",{configurable:!0,enumerable:!1,value:ys(t),writable:!0})}:zs,
ws=qs,bs=kl,Is=ku,(Ks=function(){var e=Cs(),t=16-e+ +iu;if(iu=e,0<t){if(800<=++nu)return arguments[0]}else nu=0
;return ru.apply(void 0,arguments)})(Bs(Eu=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Is(e,t[0],t[1]
)?t=[]:2<r&&Is(t[0],t[1],t[2])&&(t=[t[0]]),bs(e,ws(t,1),[])},void(iu=nu=0),zs),Eu+""),Os=cu,Ps=function(e,n){var i=[]
;return Ds(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Ls=bu,$s=function(e,t){return(Us(e)?Os:Ps)(e,Ls(t))},Fs=zs,
ks=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Ms=Ds=Ll,Gs=function(e){
return"function"==typeof e?e:Fs},js=Us=ar,Hs=function(e,t){return(js(e)?ks:Ms)(e,Gs(t))},xs=lu,fu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:xs(e,t,r)},Js=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Bs=function(e){return Js.test(e)}
,Ws=Bl,Vs=Mu,Ks=function(e){return Vs(e)&&"[object RegExp]"==Ws(e)},cu=(kl=(qs=$l.exports)&&qs.isRegExp)?Gu(kl):Ks,
bu=function(e){return e.split("")},Ll="["+(zs="\\ud800-\\udfff")+"]",Gu=(lu="[\\ufe0e\\ufe0f]?")+(Gu="(?:"+(
$l="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(qs="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
kl="[^"+zs+"]",Ks="(?:\\ud83c[\\udde6-\\uddff]){2}",zs="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+lu+Gu+")*",
Ll="(?:"+[kl+$l+"?",$l,Ks,zs,Ll].join("|")+")",Xs=RegExp(qs+"(?="+qs+")|"+Ll+Gu,"g"),Ys=bu,Zs=function(e){
return e.match(Xs)||[]},ra=Qs=Bs,na=ku,ia=cu,aa=function(e,t,r){return r&&"number"!=typeof r&&na(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=sa(e))&&("string"==typeof t||null!=t&&!ia(t))&&!(t=ea(t))&&ra(e)?ta(oa(e),0,r
):e.split(t,r):[]},ua=la=Ml,ca=ea=Jl,da=Nu,ha=ta=fu,_a=function(e,t){for(var r=e.length;r--&&-1<la(t,e[r],0););return r}
,Ea=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<ua(t,e[r],0););return r},va=oa=function(e){return(Qs(e)?Zs:Ys)(e)},
pa=sa=Du,fa=function(e,t,r){return(e=pa(e))&&(r||void 0===t)?da(e):e&&(t=ca(t))?(r=va(e),e=va(t),t=Ea(r,e),e=_a(r,e)+1,
ha(r,t,e).join("")):e},fu=Object.prototype,ga=fu.hasOwnProperty,Ta=function(e,t){return null!=e&&ga.call(e,t)},Sa=du,
Aa=function(e,t){return null!=e&&Sa(e,t,Ta)},ya="[object Boolean]",Ra=function(e){return!0===e||!1===e||Na(e)&&ma(e)==ya
},Ca=function(e){return null===e},ba=ar,Da="[object String]",Oa=function(e){return"string"==typeof e||!ba(e)&&Ia(e)&&wa(
e)==Da},Pa=wa=ma=Bl,La=Ia=Na=Mu,Ua="[object Number]",$a=function(e){return"number"==typeof e||La(e)&&Pa(e)==Ua},
ka=function(e){return"number"==typeof e&&e==Fa(e)},xa=function(e,t,r){return e=Ha(e),r=null==r?0:Ma(ja(r),0,e.length),
t=Ga(t),e.slice(r,r+t.length)==t},Ja=Ma=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Ba=Ga=Jl,Wa=ja=Fa=xl,Va=Ha=Du,qa=function(e,t,r){var n;return e=Va(e),t=Ba(t),n=e.length,n=r=void 0===r?n:Ja(Wa(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},Ka=yu,za=function(t,e){return Ka(e,function(e){return t[e]})},Xa=Hl,Ya=function(e
){return null==e?[]:za(e,Xa(e))},Bl=Array.prototype,Qa=Bl.join,Za=function(e,t){return null==e?"":Qa.call(e,t)},(
Mu=el={})[Mu.DEBUG=0]="DEBUG",Mu[Mu.INFO=1]="INFO",Mu[Mu.WARN=2]="WARN",Mu[Mu.ERROR=3]="ERROR",Mu[Mu.NONE=4]="NONE",
tl=el;const ju=null!==(Jl=P("1.0.4"))&&void 0!==Jl?Jl:"?";Du=null!==(xl=P(""))&&void 0!==xl?xl:"io.nor.fi",Hl=null!==(
yu=P(""))&&void 0!==yu?yu:"nor-pipeline-runner",Mu=null!==(Bl=P(""))&&void 0!==Bl?Bl:"",xl=null!==(Jl=P("")
)&&void 0!==Jl?Jl:"";const Hu=null!==(yu=P("production"))&&void 0!==yu?yu:"development",xu=null!==(Bl=P(
"2021-09-09T20:03:11.517Z"))&&void 0!==Bl?Bl:"";yu=null!==(Jl=P(""))&&void 0!==Jl?Jl:"${",Jl=null!==(Bl=P("")
)&&void 0!==Bl?Bl:"}";const Ju=null===(Bl=D(""))||void 0===Bl||Bl,Bu=null===(Bl=D(""))||void 0===Bl||Bl,Wu=null===(Bl=D(
""))||void 0===Bl||Bl,Vu=null===(Bl=D(""))||void 0===Bl||Bl;Bl="production"===Hu;const qu="test"===Hu,Ku=!Bl&&!qu
;Mu=null!==(tt=function(e){if(e){if(function(){switch(e){case el.DEBUG:case el.INFO:case el.WARN:case el.ERROR:
case el.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return el.DEBUG
;case"INFO":return el.INFO;case"WARN":case"WARNING":return el.WARN;case"ERR":case"ERROR":return el.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return el.NONE;default:return}}}(null!==(tt=P(null===(Bl=process
)||void 0===Bl||null===(tt=Bl.env)||void 0===tt?void 0:tt.PIPELINE_LOG_LEVEL))&&void 0!==tt?tt:P(Mu))
)&&void 0!==tt?tt:tl.INFO;const zu=null!==(rt=P(null===(tt=process)||void 0===tt||null===(rt=tt.env
)||void 0===rt?void 0:rt.PIPELINE_SERVER))&&void 0!==rt?rt:Hl,Xu=null!==(nt=function(e){if(void 0!==e)return`${e}`}(
null===(Hl=process)||void 0===Hl||null===(nt=Hl.env)||void 0===nt?void 0:nt.PIPELINE_AUTHENTICATION))&&void 0!==nt?nt:xl
,Yu=null!==(it=P(null===(xl=process)||void 0===xl||null===(it=xl.env)||void 0===it?void 0:it.PIPELINE_SERVER)
)&&void 0!==it?it:Du,Qu=null!==(ot=P(null===(Du=process)||void 0===Du||null===(ot=Du.env
)||void 0===ot?void 0:ot.PIPELINE_VARIABLE_PREFIX))&&void 0!==ot?ot:yu,Zu=null!==(st=P(null===(yu=process
)||void 0===yu||null===(st=yu.env)||void 0===st?void 0:st.PIPELINE_VARIABLE_SUFFIX))&&void 0!==st?st:Jl;class ec{
constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class tc{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case el.DEBUG:return"DEBUG";case el.INFO:return"INFO";case el.WARN:return"WARN";case el.ERROR:return"ERROR"
;case el.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=tl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=tl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=tl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=tl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new ec(e,tc)}}l(tc,"Level",tl),l(tc,"_level",tl.DEBUG),l(tc,"_logger",console),(Jl=rl={}
)[Jl.HTTP=0]="HTTP",Jl[Jl.LOCAL=1]="LOCAL",Jl[Jl.MATRIX=2]="MATRIX",nl=rl,(Jl=il={})[Jl.NONE=0]="NONE",
Jl[Jl.BASIC_AUTH=1]="BASIC_AUTH",Jl[Jl.BEARER_AUTH=2]="BEARER_AUTH",ol=il;class rc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const nc=tc.createLogger("MatrixRunnerResource");class ic{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return N(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===nl.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=fa(`${e}`)
).toLowerCase(),xa(t,"http:")||xa(t,"https:")?(t=new URL(e),t=null!==(t=rc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:rc.parseRunnerAuthentication(Xu),{type:nl.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return N(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===nl.LOCAL&&p(null==t?void 0:t.path)?e:(e=fa(`${e}`),(e=xa(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&gu.default.existsSync(e)?{type:nl.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(N(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===nl.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=fa(
`${i}`),nc.debug(`value: '${i}'`);let e=i.toLowerCase();if(nc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),nc.debug(`lowerCaseValue: '${e}'`),xa(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),nc.debug(`url: '${s}': `,s),o=null!==(o=rc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:rc.parseRunnerAuthentication(Xu),nc.debug(
"auth: ",o);const e=`${s.host}`;nc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),nc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return nc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,nc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",nc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,nc.debug(`pool: '${s}'`),{type:nl.MATRIX,homeserver:e,pool:s,
authentication:o}}xa(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return xa(e,"!")||xa(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Yu}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||Xu,r=r||Yu,{type:nl.MATRIX,homeserver:r,pool:n,
authentication:rc.parseRunnerAuthentication(t)}}}(e)}}(Jl=sl={})[Jl.OK=0]="OK",Jl[Jl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
Jl[Jl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",Jl[Jl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
Jl[Jl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",Jl[Jl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Jl[Jl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Jl[Jl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Jl[Jl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Jl[Jl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Jl[Jl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Jl[Jl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Jl[Jl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Jl[Jl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Jl[Jl.FATAL_ERROR=14]="FATAL_ERROR",Jl[Jl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Jl[Jl.WORK_CANCELLED=16]="WORK_CANCELLED",Jl[Jl.CONFLICT=17]="CONFLICT",Jl[Jl.USAGE=64]="USAGE",
Jl[Jl.DATAERR=65]="DATAERR",Jl[Jl.NOINPUT=66]="NOINPUT",Jl[Jl.NOUSER=67]="NOUSER",Jl[Jl.NOHOST=68]="NOHOST",
Jl[Jl.UNAVAILABLE=69]="UNAVAILABLE",Jl[Jl.SOFTWARE=70]="SOFTWARE",Jl[Jl.OSERR=71]="OSERR",Jl[Jl.OSFILE=72]="OSFILE",
Jl[Jl.CANTCREAT=73]="CANTCREAT",Jl[Jl.IOERR=74]="IOERR",Jl[Jl.TEMPFAIL=75]="TEMPFAIL",Jl[Jl.PROTOCOL=76]="PROTOCOL",
Jl[Jl.NOPERM=77]="NOPERM",Jl[Jl.CONFIG=78]="CONFIG",
Jl[Jl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Jl[Jl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Jl[Jl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Jl[Jl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Jl[Jl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Jl[Jl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",al=sl,(Jl=ll={})[Jl.OPTIONS=0]="OPTIONS",
Jl[Jl.GET=1]="GET",Jl[Jl.POST=2]="POST",Jl[Jl.PUT=3]="PUT",Jl[Jl.DELETE=4]="DELETE",Jl[Jl.PATCH=5]="PATCH",Wl=ll
;const oc="WINDOW"===(Vl=null!==(Vl=null!==(at=null===(Jl=process)||void 0===Jl||null===(at=Jl.env
)||void 0===at?void 0:at.NOR_REQUEST_CLIENT_MODE)&&void 0!==at?at:null===(Vl=process)||void 0===Vl||null===(lt=Vl.env
)||void 0===lt?void 0:lt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Vl?Vl:"")||!("undefined"==typeof window||!window.fetch
),sc="NODE"===Vl||!oc;class ac{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await ac.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await ac.getRequestDataAsString(e)))return Tu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await ac.getRequestDataAsString(e)))return JSON.parse(e)}}(Vl=ul={}
)[Vl.Continue=100]="Continue",Vl[Vl.SwitchingProtocols=101]="SwitchingProtocols",Vl[Vl.Processing=102]="Processing",
Vl[Vl.CheckPoint=103]="CheckPoint",Vl[Vl.OK=200]="OK",Vl[Vl.Created=201]="Created",Vl[Vl.Accepted=202]="Accepted",
Vl[Vl.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",Vl[Vl.NoContent=204]="NoContent",
Vl[Vl.ResetContent=205]="ResetContent",Vl[Vl.PartialContent=206]="PartialContent",Vl[Vl.MultiStatus=207]="MultiStatus",
Vl[Vl.AlreadyReported=208]="AlreadyReported",Vl[Vl.IMUsed=226]="IMUsed",Vl[Vl.MultipleChoices=300]="MultipleChoices",
Vl[Vl.MovedPermanently=301]="MovedPermanently",Vl[Vl.Found=302]="Found",Vl[Vl.SeeOther=303]="SeeOther",
Vl[Vl.NotModified=304]="NotModified",Vl[Vl.TemporaryRedirect=307]="TemporaryRedirect",
Vl[Vl.PermanentRedirect=308]="PermanentRedirect",Vl[Vl.BadRequest=400]="BadRequest",
Vl[Vl.Unauthorized=401]="Unauthorized",Vl[Vl.PaymentRequired=402]="PaymentRequired",Vl[Vl.Forbidden=403]="Forbidden",
Vl[Vl.NotFound=404]="NotFound",Vl[Vl.MethodNotAllowed=405]="MethodNotAllowed",Vl[Vl.NotAcceptable=406]="NotAcceptable",
Vl[Vl.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",Vl[Vl.RequestTimeout=408]="RequestTimeout",
Vl[Vl.Conflict=409]="Conflict",Vl[Vl.Gone=410]="Gone",Vl[Vl.LengthRequired=411]="LengthRequired",
Vl[Vl.PreconditionFailed=412]="PreconditionFailed",Vl[Vl.PayloadTooLarge=413]="PayloadTooLarge",
Vl[Vl.URITooLong=414]="URITooLong",Vl[Vl.UnsupportedMediaType=415]="UnsupportedMediaType",
Vl[Vl.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",Vl[Vl.ExpectationFailed=417]="ExpectationFailed",
Vl[Vl.IAmATeapot=418]="IAmATeapot",Vl[Vl.UnprocessableEntity=422]="UnprocessableEntity",Vl[Vl.Locked=423]="Locked",
Vl[Vl.FailedDependency=424]="FailedDependency",Vl[Vl.TooEarly=425]="TooEarly",
Vl[Vl.UpgradeRequired=426]="UpgradeRequired",Vl[Vl.PreconditionRequired=428]="PreconditionRequired",
Vl[Vl.TooManyRequests=429]="TooManyRequests",Vl[Vl.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
Vl[Vl.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",Vl[Vl.InternalError=500]="InternalError",
Vl[Vl.InternalServerError=500]="InternalServerError",Vl[Vl.NotImplemented=501]="NotImplemented",
Vl[Vl.BadGateway=502]="BadGateway",Vl[Vl.ServiceUnavailable=503]="ServiceUnavailable",
Vl[Vl.GatewayTimeout=504]="GatewayTimeout",Vl[Vl.HttpVersionNotSupported=505]="HttpVersionNotSupported",
Vl[Vl.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",Vl[Vl.InsufficientStorage=507]="InsufficientStorage",
Vl[Vl.LoopDetected=508]="LoopDetected",Vl[Vl.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
Vl[Vl.NotExtended=510]="NotExtended",Vl[Vl.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",cl=ul,(
tu=tu||{}).ERROR="error",dl=tu;class lc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case ul.Continue:return"Continue";case ul.SwitchingProtocols:return"Switching Protocols"
;case ul.Processing:return"Processing";case ul.CheckPoint:return"Check Point";case ul.OK:return"OK";case ul.Created:
return"Created";case ul.Accepted:return"Accepted";case ul.NonAuthoritativeInformation:
return"Non-Authoritative Information";case ul.NoContent:return"No Content";case ul.ResetContent:return"Reset Content"
;case ul.PartialContent:return"Partial Content";case ul.MultiStatus:return"Multi Status";case ul.AlreadyReported:
return"Already Reported";case ul.IMUsed:return"IM Used";case ul.MultipleChoices:return"Multiple Choices"
;case ul.MovedPermanently:return"Moved Permanently";case ul.Found:return"Found";case ul.SeeOther:return"See Other"
;case ul.NotModified:return"Not Modified";case ul.TemporaryRedirect:return"Temporary Redirect"
;case ul.PermanentRedirect:return"Permanent Redirect";case ul.BadRequest:return"Bad Request";case ul.Unauthorized:
return"Unauthorized";case ul.PaymentRequired:return"Payment Required";case ul.Forbidden:return"Forbidden"
;case ul.NotFound:return"Not Found";case ul.MethodNotAllowed:return"Method Not Allowed";case ul.NotAcceptable:
return"Not Acceptable";case ul.ProxyAuthenticationRequired:return"Proxy Authentication Required";case ul.RequestTimeout:
return"Request Timeout";case ul.Conflict:return"Conflict";case ul.Gone:return"Gone";case ul.LengthRequired:
return"Length Required";case ul.PreconditionFailed:return"Precondition Failed";case ul.PayloadTooLarge:
return"Payload Too Large";case ul.URITooLong:return"URI Too Long";case ul.UnsupportedMediaType:
return"Unsupported Media Type";case ul.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case ul.ExpectationFailed:return"Expectation Failed";case ul.IAmATeapot:return"I Am a Teapot"
;case ul.UnprocessableEntity:return"Unprocessable Entity";case ul.Locked:return"Locked";case ul.FailedDependency:
return"Failed Dependency";case ul.TooEarly:return"Too Early";case ul.UpgradeRequired:return"Upgrade Required"
;case ul.PreconditionRequired:return"Precondition Required";case ul.TooManyRequests:return"Too Many Requests"
;case ul.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case ul.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case ul.InternalServerError:return"Internal Server Error";case ul.NotImplemented:
return"Not Implemented";case ul.BadGateway:return"Bad Gateway";case ul.ServiceUnavailable:return"Service Unavailable"
;case ul.GatewayTimeout:return"Gateway Timeout";case ul.HttpVersionNotSupported:return"Http Version Not Supported"
;case ul.VariantAlsoNegotiates:return"Variant Also Negotiates";case ul.InsufficientStorage:return"Insufficient Storage"
;case ul.LoopDetected:return"Loop Detected";case ul.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case ul.NotExtended:return"Not Extended";case ul.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:dl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const uc=sc?require("fs").promises:void 0,cc=tc.createLogger(
"NodeRequestClient");class dc{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case Wl.GET:return this._getJson(t,r,n);case Wl.POST:return this._postJson(t,r,n)
;case Wl.PATCH:return this._patchJson(t,r,n);case Wl.PUT:return this._putJson(t,r,n);case Wl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await uc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void cc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void cc.debug(
"_checkSocketFile: ENOENT: ",e);throw cc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Au.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Su.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?cc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(cc.warn(
"Warning! Request had already ended when the response was received."),cc.debug("Error from event: ",e)):(cc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(cc.warn(
"Warning! Request had already ended when the response was received."),cc.debug("Exception: ",e)):(cc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ac.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.GET,e,n,r).then(dc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Wl.PUT,e,n,r).then(dc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.POST,e,n,r).then(
dc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.PATCH,e,n,r).then(dc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Wl.DELETE,e,n,r).then(dc._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw cc.error(`Unsuccessful response with status ${t}: `,e),new lc(t,`Error ${t} for ${x(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class hc{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case Wl.GET:return this._getJson(t,r,n);case Wl.POST:return this._postJson(t,r,n)
;case Wl.PUT:return this._putJson(t,r,n);case Wl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>hc._successResponse(e,Wl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>hc._successResponse(e,Wl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>hc._successResponse(e,Wl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>hc._successResponse(e,Wl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(
e=>{throw new lc(r,i,t,n,e)})}return e.json()}}const _c=sc?require("http"):void 0,Ec=sc?require("https"):void 0,
vc=tc.createLogger("RequestClient");class pc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(Wl.GET,e,t)}static postJson(e,t,r){return vc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(Wl.POST,e,r,t)}static patchJson(e,t,r){return vc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Wl.PATCH,e,r,t)}static putJson(e,t,r){return vc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Wl.PUT,e,r,t)}static deleteJson(e,t,r){return vc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Wl.DELETE,e,t,r)}static _initClient(){if(oc)return vc.debug("Detected browser environment"),
new hc(window.fetch.bind(window));if(sc)return new dc(_c,Ec);throw new TypeError(
"Could not detect request client implementation")}}l(pc,"_client",pc._initClient()),(tu=ql=ql||{}).JSON="json",
tu.STRING="string",tu.BOOLEAN="boolean",tu.NUMBER="number",tu.INTEGER="integer",eu=ql,tu=["name","parameters",
"variables"];class fc{static registerController(e){this._stepControllers.push(e)}static findController(t){return Jo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return zo(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}l(fc,"_stepControllers",[]);const gc=Ao(tu,["name","steps"]),Tc=Ao(tu
,["name","jobs"]),Sc=Ao(tu,["name","stages"]);class Ac{getName(){return this._name}constructor(e){l(this,"_name",void 0)
,l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Aa(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Hs(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=$s(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
ql=Kl=Kl||{})[ql.CONSTRUCTED=0]="CONSTRUCTED",ql[ql.STARTED=1]="STARTED",ql[ql.PAUSED=2]="PAUSED",
ql[ql.CANCELLED=3]="CANCELLED",ql[ql.FINISHED=4]="FINISHED",ql[ql.FAILED=5]="FAILED",hl=Kl,(Kl=zl=zl||{}
).PIPELINE="fi.nor.pipeline",Kl.JOB="fi.nor.pipeline.job",Kl.STAGE="fi.nor.pipeline.stage",
Kl.TASK="fi.nor.pipeline.task",Kl.STEP="fi.nor.pipeline.step",Kl.FILE="fi.nor.pipeline.step.file",
Kl.SCRIPT="fi.nor.pipeline.step.script",Kl.JSON="fi.nor.pipeline.step.json",Kl.CSV="fi.nor.pipeline.step.csv",_l=zl
;const mc=tc.createLogger("JobController");(zl=El={}).JOB_CHANGED="JobController:jobChanged",
zl.JOB_STARTED="JobController:jobStarted",zl.JOB_PAUSED="JobController:jobPaused",
zl.JOB_RESUMED="JobController:jobResumed",zl.JOB_CANCELLED="JobController:jobCancelled",
zl.JOB_FAILED="JobController:jobFailed",zl.JOB_FINISHED="JobController:jobFinished";class Nc{constructor(e,t,r=[]){if(l(
this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,
"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!J(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,oe,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new Ac(`JobController#${this._name}`),
this._state=hl.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Ui(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=$s(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){mc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:_l.JOB,
state:this._state,name:this._name,steps:Ui(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:case hl.CANCELLED:
case hl.FINISHED:case hl.FAILED:return!1}}isStarted(){switch(this._state){case hl.PAUSED:case hl.STARTED:return!0
;case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){switch(this._state){
case hl.PAUSED:return!0;case hl.STARTED:case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}
isCancelled(){switch(this._state){case hl.CANCELLED:return!0;case hl.PAUSED:case hl.STARTED:case hl.CONSTRUCTED:
case hl.FINISHED:case hl.FAILED:return!1}}isFinished(){switch(this._state){case hl.FINISHED:case hl.FAILED:
case hl.CANCELLED:return!0;case hl.CONSTRUCTED:case hl.PAUSED:case hl.STARTED:return!1}}isFailed(){switch(this._state){
case hl.FAILED:return!0;case hl.CONSTRUCTED:case hl.FINISHED:case hl.PAUSED:case hl.STARTED:case hl.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.FAILED:case hl.CONSTRUCTED:case hl.PAUSED:
case hl.STARTED:case hl.CANCELLED:return!1}}start(){if(this._state!==hl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return mc.info(`Starting job ${this._name}`),this._state=hl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(El.JOB_STARTED)&&this._observer.triggerEvent(
El.JOB_STARTED,this),this._observer.hasCallbacks(El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return mc.info(
`Pausing job ${this._name}`),this._state=hl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
El.JOB_PAUSED)&&this._observer.triggerEvent(El.JOB_PAUSED,this),this._observer.hasCallbacks(El.JOB_CHANGED
)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return mc.info(`Resuming job ${this._name}`),this._state=hl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(El.JOB_RESUMED)&&this._observer.triggerEvent(
El.JOB_RESUMED,this),this._observer.hasCallbacks(El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}
stop(){if(this._state!==hl.STARTED)throw new Error(`Job#${this._name} was not started`);return mc.info(
`Stopping job ${this._name}`),this._state=hl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
El.JOB_CANCELLED)&&this._observer.triggerEvent(El.JOB_CANCELLED,this),this._observer.hasCallbacks(El.JOB_CHANGED
)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}onCancelled(e){return this.on(El.JOB_CANCELLED,e)}onChanged(e){
return this.on(El.JOB_CHANGED,e)}onFailed(e){return this.on(El.JOB_FAILED,e)}onFinished(e){return this.on(
El.JOB_FINISHED,e)}onPaused(e){return this.on(El.JOB_PAUSED,e)}onResumed(e){return this.on(El.JOB_RESUMED,e)}onStarted(e
){return this.on(El.JOB_STARTED,e)}getErrorString(){return Ui(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Ui(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){mc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=hl.FAILED,this._observer.hasCallbacks(El.JOB_FAILED)&&this._observer.triggerEvent(
El.JOB_FAILED,this)):i.isCancelled()?(this._state=hl.CANCELLED,this._observer.hasCallbacks(El.JOB_CANCELLED
)&&this._observer.triggerEvent(El.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=hl.STARTED,this._steps[this._current].start(),n===hl.PAUSED&&this._observer.hasCallbacks(El.JOB_RESUMED
)&&this._observer.triggerEvent(El.JOB_RESUMED,this)):(this._state=hl.FINISHED,this._observer.hasCallbacks(
El.JOB_FINISHED)&&this._observer.triggerEvent(El.JOB_FINISHED,this))),this._observer.hasCallbacks(El.JOB_CHANGED
)&&this._observer.triggerEvent(El.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=hl.PAUSED,
this._observer.hasCallbacks(El.JOB_PAUSED)&&this._observer.triggerEvent(El.JOB_PAUSED,this),this._observer.hasCallbacks(
El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=hl.STARTED,this._observer.hasCallbacks(El.JOB_RESUMED)&&this._observer.triggerEvent(El.JOB_RESUMED,this),
this._observer.hasCallbacks(El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this))}}l(Nc,"Event",El)
;const yc=tc.createLogger("StageController");(zl=vl={}).STAGE_STARTED="StageController:stageStarted",
zl.STAGE_PAUSED="StageController:stagePaused",zl.STAGE_RESUMED="StageController:stageResumed",
zl.STAGE_FINISHED="StageController:stageFinished",zl.STAGE_FAILED="StageController:stageFailed",
zl.STAGE_CANCELLED="StageController:stageCancelled",zl.STAGE_CHANGED="StageController:stageChanged";class Rc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!J(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=hl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Ac(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Ui(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:_l.STAGE,state:this._state,name:this._name,jobs:Ui(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case hl.CANCELLED:return!0;case hl.FINISHED:case hl.FAILED:
case hl.CONSTRUCTED:case hl.PAUSED:case hl.STARTED:return!1}}isFailed(){switch(this._state){case hl.FAILED:return!0
;case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:case hl.PAUSED:case hl.STARTED:return!1}}isFinished(){switch(
this._state){case hl.FINISHED:case hl.FAILED:case hl.CANCELLED:return!0;case hl.CONSTRUCTED:case hl.PAUSED:
case hl.STARTED:return!1}}isPaused(){switch(this._state){case hl.PAUSED:return!0;case hl.FAILED:case hl.CANCELLED:
case hl.FINISHED:case hl.CONSTRUCTED:case hl.STARTED:return!1}}isRunning(){switch(this._state){case hl.STARTED:return!0
;case hl.PAUSED:case hl.FAILED:case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case hl.PAUSED:case hl.STARTED:return!0;case hl.FAILED:case hl.CANCELLED:case hl.FINISHED:
case hl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.PAUSED:
case hl.STARTED:case hl.FAILED:case hl.CANCELLED:case hl.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
vl.STAGE_CANCELLED,e)}onChanged(e){return this.on(vl.STAGE_CHANGED,e)}onFailed(e){return this.on(vl.STAGE_FAILED,e)}
onFinished(e){return this.on(vl.STAGE_FINISHED,e)}onPaused(e){return this.on(vl.STAGE_PAUSED,e)}onResumed(e){
return this.on(vl.STAGE_RESUMED,e)}onStarted(e){return this.on(vl.STAGE_STARTED,e)}start(){if(
this._state!==hl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return yc.info(
`Starting stage ${this._name}`),this._state=hl.STARTED,$s(this._jobs,t=>{try{return t.start(),!1}catch(e){
return yc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=hl.FAILED,
this._observer.hasCallbacks(vl.STAGE_FAILED)&&this._observer.triggerEvent(vl.STAGE_FAILED,this)
):this._observer.hasCallbacks(vl.STAGE_STARTED)&&this._observer.triggerEvent(vl.STAGE_STARTED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}pause(){if(
this._state===hl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);yc.info(`Pausing stage ${this._name}`)
,this._state=hl.PAUSED;var e=$s(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return yc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&yc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(vl.STAGE_PAUSED
)&&this._observer.triggerEvent(vl.STAGE_PAUSED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}resume(){if(this._state===hl.STARTED)throw new Error(
`Stage#${this._name} was already started`);yc.info(`Resuming stage ${this._name}`),this._state=hl.STARTED;var e=$s(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return yc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&yc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(vl.STAGE_RESUMED
)&&this._observer.triggerEvent(vl.STAGE_RESUMED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);yc.info(`Stopping stage ${this._name}`),this._state=hl.CANCELLED;var e=$s(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return yc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&yc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Ui(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Ui(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=$s(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){yc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==hl.FAILED?(this._state=hl.FAILED,this._observer.hasCallbacks(vl.STAGE_FAILED
)&&this._observer.triggerEvent(vl.STAGE_FAILED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)):n&&this._state!==hl.CANCELLED?(this._state=hl.CANCELLED,
this._observer.hasCallbacks(vl.STAGE_CANCELLED)&&this._observer.triggerEvent(vl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)
):this._state!==hl.FINISHED&&(this._state=hl.FINISHED,this._observer.hasCallbacks(vl.STAGE_FINISHED
)&&this._observer.triggerEvent(vl.STAGE_FINISHED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)))):(n=S($s(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==hl.PAUSED?(this._state=hl.PAUSED,this._observer.hasCallbacks(vl.STAGE_PAUSED
)&&this._observer.triggerEvent(vl.STAGE_PAUSED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)):n||this._state!==hl.PAUSED||(this._state=hl.STARTED,
this._observer.hasCallbacks(vl.STAGE_RESUMED)&&this._observer.triggerEvent(vl.STAGE_RESUMED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this))}}l(Rc,"Event",vl)
;const Cc=tc.createLogger("PipelineController");(zl=pl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
zl.PIPELINE_PAUSED="PipelineController:pipelinePaused",zl.PIPELINE_RESUMED="PipelineController:pipelineResumed",
zl.PIPELINE_FINISHED="PipelineController:pipelineFinished",zl.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
zl.PIPELINE_FAILED="PipelineController:pipelineFailed",zl.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class wc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Ac(`PipelineController#${this._name}`),this._state=hl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Ui(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:_l.PIPELINE,state:this._state,name:this._name,
stages:Ui(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case hl.CANCELLED:return!0;case hl.STARTED:case hl.PAUSED:case hl.CONSTRUCTED:case hl.FINISHED:case hl.FAILED:return!1}}
isFailed(){switch(this._state){case hl.FAILED:return!0;case hl.CANCELLED:case hl.STARTED:case hl.PAUSED:
case hl.CONSTRUCTED:case hl.FINISHED:return!1}}isFinished(){switch(this._state){case hl.FAILED:case hl.CANCELLED:
case hl.FINISHED:return!0;case hl.STARTED:case hl.PAUSED:case hl.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case hl.PAUSED:return!0;case hl.FAILED:case hl.CANCELLED:case hl.FINISHED:case hl.STARTED:case hl.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.FAILED:case hl.CANCELLED:
case hl.FINISHED:case hl.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case hl.STARTED:case hl.PAUSED:return!0
;case hl.FAILED:case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case hl.FINISHED:return!0;case hl.STARTED:case hl.PAUSED:case hl.FAILED:case hl.CANCELLED:case hl.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(pl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(pl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(pl.PIPELINE_FAILED,e)}onFinished(e){return this.on(pl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
pl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(pl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(pl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Cc.info(
`Pausing pipeline ${this._name}`),this._state=hl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
pl.PIPELINE_PAUSED)&&this._observer.triggerEvent(pl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Cc.info(`Resuming pipeline ${this._name}`),
this._state=hl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(pl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}start(){if(this._state!==hl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Cc.info(`Starting pipeline ${this._name}`),this._state=hl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(pl.PIPELINE_STARTED)&&this._observer.triggerEvent(
pl.PIPELINE_STARTED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
pl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==hl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Cc.info(`Stopping pipeline ${this._name}`),this._state=hl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(pl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}
getErrorString(){return Ui(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Ui(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Cc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=hl.FAILED,
this._observer.hasCallbacks(pl.PIPELINE_FAILED)&&this._observer.triggerEvent(pl.PIPELINE_FAILED,this),Cc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=hl.CANCELLED,this._observer.hasCallbacks(
pl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pl.PIPELINE_CANCELLED,this),Cc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=hl.STARTED;const o=this._stages[this._current].start();n===hl.PAUSED&&this._observer.hasCallbacks(
pl.PIPELINE_RESUMED)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),Cc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=hl.FINISHED,this._observer.hasCallbacks(pl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(pl.PIPELINE_FINISHED,this),Cc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=hl.PAUSED,this._observer.hasCallbacks(pl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(pl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),Cc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=hl.STARTED,this._observer.hasCallbacks(pl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),Cc.info(`Pipeline ${this._name} was resumed`))}}l(wc,"Event",pl
);const bc=tc.createLogger("PipelineRunner");class Ic{static registerController(e){fc.registerController(e)}
static createStepController(e,t){const r=fc.findController(e);if(void 0===r)throw new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Nc(t,e.name,
Ui(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new Rc(t,e.name,Ui(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new wc(t,e.name,Ui(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ne(e)?(bc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):re(e)?(bc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):ee(e)?(
bc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(bc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(bc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):bc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),bc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class Dc{static toString(...e){return Ui(e,
e=>Ca(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return X(n)?Ui(n,e=>Dc.processVariables(e,i,o
,s,a)):z(n)?zo(L(n),(e,t)=>{var r=n[t];return e[`${Dc.processVariables(t,i,o,s,a)}`]=Dc.processVariables(r,i,o,s,a),e},
{}):p(n)?Dc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=St(r)?r:e=>Zn(r,e,o),xa(t,n)&&qa(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=fa(e),Dc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=fa(
t.substr(a,l-a)),h=(Dc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Oc=tc.createLogger("PipelineContext");class Pc{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",
void 0),l(this,"_parameters",void 0),l(this,"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,
"_lookupVariable",void 0),l(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Oc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=Dc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Oc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return Zn(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Oc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return V(this._variables)||(
this._variables={}),co(this._variables,e,t),Oc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const Lc=tc.createLogger("runHttpResource"),Uc=tc.createLogger(
"runLocalResource");(zl=fl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",zl.M_ROOM_JOIN_RULES="m.room.join_rules",
zl.M_ROOM_MEMBERSHIP="m.room.membership",zl.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
zl.M_ROOM_GUEST_ACCESS="m.room.guest_access",zl.M_ROOM_CREATE="m.room.create",zl.M_FEDERATE="m.federate",
zl.M_ROOM_MEMBER="m.room.member",zl.M_PUSH_RULES="m.push_rules",zl.M_PRESENCE="m.presence",zl.M_SPACE="m.space",
zl.M_LOGIN_PASSWORD="m.login.password",zl.M_LOGIN_TOKEN="m.login.token",zl.M_ID_USER="m.id.user",
zl.FI_NOR_DELETED="fi.nor.deleted",zl.FI_NOR_FORM_DTO="fi.nor.form_dto",zl.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,zl.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",zl.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
zl.FI_NOR_AGENT_DTO="fi.nor.dto.agent",zl.FI_NOR_PIPELINE="fi.nor.pipeline",
zl.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",gl=fl,(zl=Tl=Tl||{})[zl.UNAUTHENTICATED=0]="UNAUTHENTICATED",
zl[zl.AUTHENTICATING=1]="AUTHENTICATING",zl[zl.AUTHENTICATED=2]="AUTHENTICATED",
zl[zl.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
zl[zl.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(zl=Sl={}).M_USER_IN_USE="M_USER_IN_USE",
zl.M_INVALID_USERNAME="M_INVALID_USERNAME",zl.M_EXCLUSIVE="M_EXCLUSIVE",zl.M_FORBIDDEN="M_FORBIDDEN",Al=Sl
;const $c=tc.createLogger("SimpleMatrixClient");(ml=ml||{}).EVENT="SimpleMatrixClient:event";class Fc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?Tl.AUTHENTICATED:Tl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Ac("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{$c.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
$c.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(N(a=s=await pc.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw $c.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return $c.debug("RegisterResponseDTO received: ",s),s}catch(e){if($c.debug(
"Could not register user: ",e),!(e instanceof lc))throw new lc(cl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new lc(cl.Unauthorized):403===s?new lc(cl.Forbidden
):429===s?new lc(429):new lc(cl.InternalServerError,"Failed to register user");if(!Ve(s=null==e?void 0:e.getBody())
)throw new lc(cl.InternalServerError,"Failed to register user");switch(s.errcode){case Al.M_USER_IN_USE:throw new lc(
cl.Conflict,"User already exists");case Al.M_INVALID_USERNAME:throw new lc(cl.BadRequest,"Username invalid")
;case Al.M_EXCLUSIVE:throw new lc(cl.Conflict,"User name conflicts with exclusive namespace");default:throw new lc(
cl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
$c.debug("whoami: Fetching account whoami... ",r),n=await pc.getJson(r,{Authorization:`Bearer ${t}`}),$c.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,$c.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void $c.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if($c.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await pc.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw $c.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
$c.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(N(
n=r=await pc.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw $c.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return $c.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if($c.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof lc))throw new lc(cl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new lc(cl.Unauthorized
):403===r?new lc(cl.Forbidden):429===r?new lc(429):new lc(cl.InternalServerError,"Failed to register user");if(!Ve(
r=null==e?void 0:e.getBody()))throw new lc(cl.InternalServerError,"Failed to register user");switch(r.errcode){
case Al.M_USER_IN_USE:throw new lc(cl.Conflict,"User already exists");case Al.M_INVALID_USERNAME:throw new lc(
cl.BadRequest,"Username invalid");case Al.M_EXCLUSIVE:throw new lc(cl.Conflict,
"User name conflicts with exclusive namespace");default:throw new lc(cl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:fl.M_LOGIN_PASSWORD,identifier:{type:fl.M_ID_USER,user:r},
password:n},$c.debug("Sending login with userId:",r),!(N(h=o=await pc.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||N(_=h)&&I(_,["m.homeserver","m.identity_server"])&&N(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||N(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw $c.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");$c.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Fc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw $c.debug(
"Could not login: ",e),new lc(cl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(N(n=r=await pc.getJson(this._resolveHomeServerUrl(`/directory/room/${qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw $c.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return $c.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof lc&&e.getStatusCode()===cl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(N(
t=e=await pc.getJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,de,We)))throw $c.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return $c.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!V(i=await pc.getJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),{Authorization:`Bearer ${n}`})))throw $c.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return $c.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof lc&&e.getStatusCode()===cl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(N(s=o=await pc.putJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw $c.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return $c.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw $c.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await pc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),$c.debug("forgetRoom: received: ",r)}catch(e){throw $c.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await pc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),$c.debug("leaveRoom: received: ",r)}catch(e){throw $c.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!le(e))throw new TypeError(
`roomId invalid: ${e}`);if(!de(t))throw new TypeError(`userId invalid: ${t}`);if($c.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await pc.postJson(
this._resolveHomeServerUrl(`/rooms/${qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),$c.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw $c.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},$c.debug("Sending message with body:",t
),r=await pc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,$c.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if($c.debug("Creating room with body:",e),!(N(
e=t=await pc.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&le(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw $c.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return $c.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if($c.debug(
`Joining to room ${t} with body:`,e),!(N(i=n=await pc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&le(null==i?void 0:i.room_id)))throw $c.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return $c.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw $c.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if($c.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!V(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=Za(Ui(L(s),e=>{var t=s[e]
;return`${qe(e)}=${qe(t)}`}),"&"),!(N(t=e=await pc.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||Me(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||je(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||we(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||He(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw $c.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${Be(e)}`);return e}isAlreadyInTheRoom(
e){if(Ve(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===Al.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Hs(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(ml.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)$c.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,$c.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if($c.info("Initial sync request started"),
this._state!==Tl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Tl.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),$c.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:$c.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),$c.info("Timer started..."),this._state=Tl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:$c.error("No next_batch in the response: ",t),r=Ao(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=L(s),Hs(n,e=>{var t,r=(r=s[e],Ao([],
null!=r&&r.state?fe(null==r?void 0:r.state):[],null!=r&&r.timeline?me(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Ao([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=L(a),Hs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=L(l),Hs(o,e=>{var t=l[e],t=Ao([],fe(
null==t?void 0:t.state),me(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(Fc,
"Event",ml),(zl=Xl=Xl||{}).PRIVATE_CHAT="private_chat",zl.PUBLIC_CHAT="public_chat",
zl.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Nl=Xl,(Xl=Yl=Yl||{}).INVITED="invited",Xl.JOINED="joined",
Xl.SHARED="shared",Xl.WORLD_READABLE="world_readable",yl=Yl,(Yl=Ql=Ql||{}).PUBLIC="public",Yl.KNOCK="knock",
Yl.INVITE="invite",Yl.PRIVATE="private",Yl.RESTRICTED="restricted",Rl=Ql,(Ql=Zl=Zl||{}).CAN_JOIN="can_join",
Ql.FORBIDDEN="forbidden",Cl=Zl;const kc=tc.createLogger("MatrixCrudRepository");class Mc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=P(i))&&void 0!==i?i:gl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});kc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=L(n);if(kc.debug("joinedRooms = ",i),t=L(t),kc.debug(
"invitedRooms = ",t),(t=$s(t,e=>!i.includes(e))).length){kc.debug("Joining to rooms = ",t);let r=0;if(await zo(t,async(e
,t)=>{await e;try{kc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){kc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return kc.debug(
"Fetching results again after joining"),this.getAll()}return zo(i,(e,i)=>{var t=n[i],r=$s(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&$a(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Ao(e,Ui(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Ui($s(e,
e=>Zn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();kc.debug("createItem: clientUserId = ",o),r={data:e,version:1},kc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),kc.debug(
"createItem: serviceAccountId = ",n),i=$s(cs(Ao(n?[n]:[],t||[])),e=>e!==o),kc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,kc.debug("createItem: allowedGroups = ",n),t={[gl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:gl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:yl.SHARED}},{type:gl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Cl.FORBIDDEN}}]
;void 0!==n&&s.push({type:gl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Rl.RESTRICTED,allow:Ui(n,e=>({
type:gl.M_ROOM_MEMBERSHIP,room_id:e}))}}),kc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},kc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Hs(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Nl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),kc.debug(
"createItem: response = ",t),t=t.room_id,kc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
kc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(kc.debug(
"response = ",JSON.stringify(n,null,2)),!V(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Ui(L(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!V(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new lc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),kc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new lc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){kc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){kc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),kc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof lc&&[401,403,404].includes(e.getStatusCode()))throw e;throw kc.error(
`Error in deleteById(${t}): `,e),new lc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await zo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw kc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const Gc=tc.createLogger("runMatrixResource"
);(wl=wl||{}).ON_EXIT="NodeSystemProcess:onExit";const jc=tc.createLogger("NodeSystemProcess");class Hc{constructor(e,t,
r,n=!0){l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,
"_stderrCallback",void 0),l(this,"_closeCallback",void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,
"_printToParentProcess",void 0),l(this,"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",
void 0),this._observer=new Ac("NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,
this._printToParentProcess=n,this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this)
,this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=pu.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(wl.ON_EXIT
)?this._observer.triggerEvent(wl.ON_EXIT,this):jc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(Hc,"Event",wl);const xc=tc.createLogger(
"NodeSystem");class Jc{constructor(){l(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Hs(this._tempFileNames,e=>{xc.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){const t=gu.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}isFile(e){const t=gu.default.statSync(e)
;return t.isFile()}isDirectory(e){const t=gu.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e
)?this.isDirectory(e)?this.deleteDirectory(e):gu.default.unlinkSync(e):xc.warn(`deleteFile: Path did not exist: ${e}`)}
deleteDirectory(e){this.pathExists(e)?gu.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):xc.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r){return new Hc(e,t,r)}createDirectory(e){
return gu.default.mkdirSync(e),this}getWorkingDirectory(){return process.cwd()}createTemporaryFile(){let e="";do{
var t=mu.default.randomBytes(20).toString("hex")}while(e=Au.default.join(this.getWorkingDirectory(),`${t}.tmp`),
gu.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file");return this._tempFileNames.push(e),e}}
(Zl=bl=bl||{}).STRINGIFY="stringify",Zl.PARSE="parse";const Bc=tc.createLogger("BaseStepController");(Zl=Il={}
).JSON_STARTED="BaseStepController:scriptStarted",Zl.JSON_PAUSED="BaseStepController:scriptPaused",
Zl.JSON_RESUMED="BaseStepController:scriptResumed",Zl.JSON_CANCELLED="BaseStepController:scriptCancelled",
Zl.JSON_FAILED="BaseStepController:scriptFailed",Zl.JSON_FINISHED="BaseStepController:scriptFinished",
Zl.JSON_CHANGED="BaseStepController:scriptChanged";class Wc{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(l(this,
"_context",void 0),l(this,"_observer",void 0),l(this,"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,
"_stepName",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,"_output",void 0),l(
this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,"_compiledOutput",void 0),
l(this,"_successResult",void 0),l(this,"_errorResult",void 0),!p(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!p(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!K(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=hl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new Ac(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:
case hl.FAILED:return!1}}isStarted(){switch(this._state){case hl.STARTED:case hl.PAUSED:return!0;case hl.CONSTRUCTED:
case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){switch(this._state){case hl.PAUSED:return!0
;case hl.CONSTRUCTED:case hl.STARTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isFinished(){switch(
this._state){case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!0;case hl.CONSTRUCTED:case hl.STARTED:
case hl.PAUSED:return!1}}isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.FAILED:case hl.CANCELLED:
case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isCancelled(){switch(this._state){case hl.CANCELLED:
return!0;case hl.FINISHED:case hl.FAILED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isFailed(){switch(
this._state){case hl.FAILED:return!0;case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:case hl.STARTED:
case hl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==hl.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=hl.STARTED,!K(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${Dc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!K(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${Dc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${Dc.toString(this._output)}`);if(this._compiledOutput=n,
Bc.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Il.JSON_STARTED)&&this._observer.triggerEvent(Il.JSON_STARTED,this),
this._observer.hasCallbacks(Il.JSON_CHANGED)&&this._observer.triggerEvent(Il.JSON_CHANGED,this),!St(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,ft(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(Il.JSON_STARTED,e)}onPaused(e
){return this.on(Il.JSON_PAUSED,e)}onResumed(e){return this.on(Il.JSON_RESUMED,e)}onCancelled(e){return this.on(
Il.JSON_CANCELLED,e)}onFailed(e){return this.on(Il.JSON_FAILED,e)}onFinished(e){return this.on(Il.JSON_FINISHED,e)}
onChanged(e){return this.on(Il.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){Bc.error(
"Action success: ",e),void 0!==this._compiledOutput?(Bc.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):Bc.info("No output target configured for result: ",e),
this._successResult=e,this._state=hl.FINISHED,this._observer.hasCallbacks(Il.JSON_FINISHED
)&&this._observer.triggerEvent(Il.JSON_FINISHED,this),this._observer.hasCallbacks(Il.JSON_CHANGED
)&&this._observer.triggerEvent(Il.JSON_CHANGED,this)}_errorCloseAction(e){Bc.error("Action failed: ",e),
this._errorResult=e,this._state=hl.FAILED,this._observer.hasCallbacks(Il.JSON_FAILED)&&this._observer.triggerEvent(
Il.JSON_FAILED,this),this._observer.hasCallbacks(Il.JSON_CHANGED)&&this._observer.triggerEvent(Il.JSON_CHANGED,this)}}l(
Wc,"Event",Il),l(Wc,"State",hl);const Vc=Ao(tu,["name","json","action","output"]),qc=tc.createLogger("JsonController")
;class Kc extends Wc{static parseControllerModel(e){if(ze(e))return e}static isControllerModel(e){return ze(e)}
static createController(e,t){return new Kc(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=bl.STRINGIFY,i=void 0
){super(e,_l.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:bl.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case bl.STRINGIFY:case bl.PARSE:return 1}}())throw qc.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${Dc.toString(e)}`);if(e===bl.STRINGIFY){if(!K(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${Dc.toString(t)}`);var r=JSON.stringify(t);if(!p(
r))throw qc.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==bl.PARSE
)throw qc.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw qc.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${Dc.toString(t)}`)
;return JSON.parse(t)}}(Zl=Dl=Dl||{}).STRINGIFY="stringify",Zl.PARSE="parse";const zc=Ao(tu,["name","csv","action",
"output"]),Xc=tc.createLogger("CsvController");class Yc extends Wc{static parseControllerModel(e){if(Qe(e))return e}
static isControllerModel(e){return Qe(e)}static createController(e,t){return new Yc(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Dl.STRINGIFY,i=void 0){super(e,_l.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Dl.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Dl.STRINGIFY:case Dl.PARSE:return 1}}())throw Xc.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${Dc.toString(e)}`);if(e===Dl.STRINGIFY
){if(!Ye(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${Dc.toString(t)}`)
;if(n="\n",!p(r=Ui(t,e=>{return[e,t,r]=[e,",",'"'],Ui(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Dl.PARSE)throw Xc.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw Xc.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${Dc.toString(t)}`);if(n="\n",t=Ye(r=t)?r:(p(r
)||(r=`${r}`),Ui(aa(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Xe(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&xa(e,'"')&&qa(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!Ye(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const Qc=Ao(tu,["name","command","args","env"]),
Zc=tc.createLogger("ScriptController");(Zl=Ol=Ol||{}).SCRIPT_STARTED="ScriptController:scriptStarted",
Zl.SCRIPT_PAUSED="ScriptController:scriptPaused",Zl.SCRIPT_RESUMED="ScriptController:scriptResumed",
Zl.SCRIPT_CANCELLED="ScriptController:scriptCancelled",Zl.SCRIPT_FAILED="ScriptController:scriptFailed",
Zl.SCRIPT_FINISHED="ScriptController:scriptFinished",Zl.SCRIPT_CHANGED="ScriptController:scriptChanged";class ed{
static parseControllerModel(e){if(Ze(e))return e}static isControllerModel(e){return Ze(e)}static createController(e,t){
return new ed(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this
,"_closeCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",void 0)
,l(this,"_systemProcess",void 0),l(this,"_state",void 0),!J(t))throw new TypeError(`Script name invalid: ${t}`);if(!p(r)
)throw new TypeError(`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!y(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=hl.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new Ac(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`ScriptController#${this._name}`}
getStateDTO(){return{type:_l.SCRIPT,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){
switch(this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:
case hl.FAILED:return!1}}isStarted(){switch(this._state){case hl.STARTED:case hl.PAUSED:return!0;case hl.CONSTRUCTED:
case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){switch(this._state){case hl.PAUSED:return!0
;case hl.CONSTRUCTED:case hl.STARTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isFinished(){switch(
this._state){case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!0;case hl.CONSTRUCTED:case hl.STARTED:
case hl.PAUSED:return!1}}isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.FAILED:case hl.CANCELLED:
case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isCancelled(){switch(this._state){case hl.CANCELLED:
return!0;case hl.FINISHED:case hl.FAILED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isFailed(){switch(
this._state){case hl.FAILED:return!0;case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:case hl.STARTED:
case hl.PAUSED:return!1}}start(){var e,t,r;if(this._state!==hl.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);if(this._state=hl.STARTED,!p(e=this._context.compileModel(this._command))
)throw new Error(`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!y(
r=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);this._compiledEnv=r,Zc.info(
`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "')}"`)
;const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(wl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
Ol.SCRIPT_STARTED)&&this._observer.triggerEvent(Ol.SCRIPT_STARTED,this),this._observer.hasCallbacks(Ol.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ol.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return Zc.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=hl.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(Ol.SCRIPT_PAUSED)&&this._observer.triggerEvent(Ol.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(Ol.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ol.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._systemProcess)throw new Error(
"No process initialized");return Zc.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=hl.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(Ol.SCRIPT_RESUMED
)&&this._observer.triggerEvent(Ol.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Ol.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ol.SCRIPT_CHANGED,this),this}stop(){if(this._state!==hl.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return Zc.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=hl.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(Ol.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
Ol.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(Ol.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ol.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(Ol.SCRIPT_STARTED,e)}onPaused(e){return this.on(Ol.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(Ol.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Ol.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
Ol.SCRIPT_FAILED,e)}onFinished(e){return this.on(Ol.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Ol.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),Zc.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=hl.FINISHED,this._observer.hasCallbacks(
Ol.SCRIPT_FINISHED)&&this._observer.triggerEvent(Ol.SCRIPT_FINISHED,this)):(this._state=hl.FAILED,
this._observer.hasCallbacks(Ol.SCRIPT_FAILED)&&this._observer.triggerEvent(Ol.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(Ol.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ol.SCRIPT_CHANGED,this)}}l(ed,"Event",Ol),l(
ed,"State",hl),(Pl=Pl||{}).MKDIR="mkdir";const td=Ao(tu,["name","file","target","output"]),rd=tc.createLogger(
"FileController");class nd extends Wc{static parseControllerModel(e){if(et(e))return e}static isControllerModel(e){
return et(e)}static createController(e,t){return new nd(e,t.name,t.target,t.file,t.output)}constructor(e,t,r,n,i=void 0
){super(e,_l.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){const r=this.getContext(),n=r.getSystem();if(
e!==Pl.MKDIR)throw rd.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${Dc.toString(e)}`);if(e!==Pl.MKDIR)throw rd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!f(t))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${Dc.toString(t)}`);return void 0===t?(t=n.createTemporaryFile(),
n.createDirectory(t),rd.info(`Created temporary directory: ${t}`)):(n.createDirectory(t),rd.info(
`Created directory: ${t}`)),t}}const id=tc.createLogger("main");tc.setLogLevel(Mu),async function(t=[]){var r,n,i,o
;let s;try{if(class{static registerControllers(){Ic.registerController(nd),Ic.registerController(Kc),
Ic.registerController(Yc),Ic.registerController(ed)}}.registerControllers(),id.debug(`Loglevel ${tc.getLogLevelString(
)}`),r=zu,t.shift(),!t.shift())return console.log(H(r)),al.ARGUMENT_PARSE_ERROR;if(0===t.length)return console.log(H(r))
,al.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){case"-h":case"--help":case 0:return 0
;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return console.log(H(r)),al.OK;case 1:
return console.log(function(e){const t=$s([Ju?"LOCAL":"",Bu?"HTTP":"",Wu?"MATRIX":"",qu?"TEST":"",Ku?"DEV":""],e=>!!e)
;return`${e} v${ju} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${ju}'
  BUILD_NODE_ENV              = '${Hu}'
  BUILD_DATE                  = '${xu}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Ju}'
  BUILD_WITH_HTTP_RESOURCES   = '${Bu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Wu}'
`}(r)),al.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=ic.parseRunnerResource(n)))return id.error(
`Unsupported argument: ${n}`),console.log(H(r)),al.UNKNOWN_ARGUMENT;if(s=new Jc,(o=await async function(e,t){switch(
t.type){case nl.HTTP:return Bu?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await pc.getJson(r.url,c)))return Lc.error(`Failed to load URL "${r.url}": `,o),
al.RESOURCE_LOAD_FAILED;if(void 0===(s=ie(o)))return Lc.error(`Model from URL "${r.url}" was not valid: `,o),
al.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Pc(t,a,l,Qu,Zu)
;let e=Ic.createController(s,u);return Lc.info(`Running ${e.getName()} from ${r.url}`),
await Ic.startAndWaitUntilFinished(e),Lc.info(`Successfully finished ${e.getName()} from ${r.url}`),al.OK}catch(e){
return Lc.error("Error: ",e),al.HTTP_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;case nl.LOCAL:return Ju?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
hu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=ie(i=JSON.parse(n))))return Uc.warn("Model was not valid: ",i),al.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new Pc(t,s,a,Qu,Zu);let e=Ic.createController(o,l);return Uc.info(`Running ${e.getName(
)} from ${r.path}`),await Ic.startAndWaitUntilFinished(e),Uc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,al.OK}catch(e){return Uc.error("Error: ",e),al.LOCAL_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;case nl.MATRIX:
return Wu?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,m,N,y,R,C;try{Gc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new Fc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return al.UNKNOWN_AUTHENTICATION_TYPE;e=new Fc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return Gc.error("Could not detect agent user ID"),al.UNKNOWN_AGENT_ID
;Gc.info(`Agent user ID: ${t}`);const w=new Mc(e,gl.FI_NOR_AGENT_DTO);if(0===(C=await w.getAll()).length
)return Gc.debug("Detected no pools available."),al.OK;T=(1===C.length?(Gc.debug(
"Detected single pool available. Picking it."),C[0]):(Gc.debug(
`Detected ${C.length} pools available. Picking one by random.`),C[Math.floor(Math.random()*C.length)])).id,Gc.info(
`Pool ID: ${T}`);const b=new Mc(e,gl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,gl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),Gc.debug("runList = ",S);let r;if(0===S.length)return Gc.debug("Detected no work available."),al.OK
;r=1===S.length?(Gc.debug("Detected single work available. Picking it."),S[0]):(Gc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return Gc.warn(`Work ID was already running: ${I}`),Gc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),Gc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),al.CONFLICT;if(Gc.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return Gc.warn(
"The work item disappeared while we were selecting it."),al.WORK_CANCELLED;if(I!==r.id)return Gc.error(
`The work item ID conflict: ${I} !== ${r.id}`),al.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return Gc.error(""),al.CONFLICT;if(Gc.debug(
"Work item secured to us! We can start the job."),void 0===(m=ie(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return Gc.warn("Work item did not contain correct pipeline model: ",r),
al.RESOURCE_MODEL_INVALID;N=null==m?void 0:m.parameters,y=null==m?void 0:m.variables,R=new Pc(i,N,y,Qu,Zu)
;let n=Ic.createController(m,R);await Ke(e,b,I,r,n);const D=n.onChanged(()=>{Ke(e,b,I,r,n).catch(e=>{Gc.error(
"Failed to save controller state: ",e)})});try{await Ic.startAndWaitUntilFinished(n)}finally{D(),await Ke(e,b,I,r,n)}
return Gc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),Gc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),al.OK}catch(e){return Gc.error("Error: ",e),
al.MATRIX_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;default:return al.UNKNOWN_RESOURCE_TYPE}}(s,i))!==al.OK
)return o===al.UNKNOWN_RESOURCE_TYPE?(id.error(`Error NorPP${o}: ${j(o)}: Resource type was unknown: ${i.type}`),
console.log(H(r)),al.UNKNOWN_RESOURCE_TYPE):(function(e){if($a(e)&&!(e<0||255<e)){if(
sl.FATAL_SIGNAL_RANGE_START<=e&&e<=sl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case sl.OK:case sl.GENERAL_ERRORS:
case sl.MISUSE_OF_SHELL_BUILTINS:case sl.ARGUMENT_PARSE_ERROR:case sl.UNKNOWN_ARGUMENT:case sl.UNKNOWN_RESOURCE_TYPE:
case sl.UNKNOWN_AUTHENTICATION_TYPE:case sl.RESOURCE_LOAD_FAILED:case sl.RESOURCE_MODEL_INVALID:
case sl.LOCAL_RESOURCE_FAILED:case sl.HTTP_RESOURCE_FAILED:case sl.MATRIX_RESOURCE_FAILED:case sl.UNIMPLEMENTED_FEATURE:
case sl.UNBUILD_FEATURE:case sl.FATAL_ERROR:case sl.USAGE:case sl.DATAERR:case sl.NOINPUT:case sl.NOUSER:case sl.NOHOST:
case sl.UNAVAILABLE:case sl.SOFTWARE:case sl.OSERR:case sl.OSFILE:case sl.CANTCREAT:case sl.IOERR:case sl.TEMPFAIL:
case sl.PROTOCOL:case sl.NOPERM:case sl.CONFIG:case sl.COMMAND_INVOKED_CANNOT_EXECUTE:case sl.COMMAND_NOT_FOUND:
case sl.INVALID_ARGUMENT_TO_EXIT:case sl.FATAL_SIGNAL_RANGE_START:case sl.FATAL_SIGNAL_RANGE_END:
case sl.EXIT_STATUS_OUT_OF_RANGE:case sl.UNKNOWN_AGENT_ID:case sl.WORK_CANCELLED:case sl.CONFLICT:return 1;default:
return}}}(o)?id.error(`Error EX-${o}: ${j(o)}: for ${U(i.type)} resource ${n}`):id.error(
`Error: Exit status ${o}: for ${U(i.type)} resource ${n}`),o)}while(1<=t.length);return al.OK}catch(e){return id.error(
"Fatal error: ",e),al.FATAL_ERROR}finally{s&&s.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{
console.error("Error: ",e),process.exit(1)});
