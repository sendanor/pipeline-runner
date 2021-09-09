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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new Xt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Yt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Gn);return o.cache=new(u.Cache||Mn),o}
function v(e){return void 0===e}function c(e){return ur(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!ur(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||ka(e)}function p(e){return Pa(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return Ga(e)}function g(e){return v(e)||Ga(e)}function T(e,t){return qi(e,t)}
function S(e,t){return eo(e,t)}function m(e,t){return Tt(e)&&S(Za(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!m(e,r))&&(t=void 0!==t?t:p,Tt(e)&&S(P(e),t))}function A(e){return!!Tt(e)&&!(e instanceof Date)&&!Nt(e)&&!c(
e)&&N(e,p,void 0)}function y(e,t=p,r=void 0){return!!Tt(e)&&!(e instanceof Date)&&!Nt(e)&&!c(e)&&N(e,t,r)}function R(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!Tt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(Nt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||m(e,e=>r(e)))throw e=Wo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Za(e),n=Jo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function C(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return R(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function w(...e){return t=>T(e,e=>e(t))}function b(e){return Tt(e)}function I(e,t){return b(e
)&&0===(r=t,ks(P(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return wa(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=Fi(e,(e,t)=>t);return ks(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),ks(e,e=>t(e))):[]}function U(e){switch(e
){case il.HTTP:return"http";case il.LOCAL:return"local";case il.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return A(e)&&function(){switch(null==e?void 0:e.type){
case sl.NONE:case sl.BASIC_AUTH:case sl.BEARER_AUTH:return 1;default:return}}()}function F(e){return A(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===al.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:al.BASIC_AUTH,username:r,password:n
}}function M(e){return A(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===al.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:al.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:al.BEARER_AUTH,access_token:n}}function j(e){if(ll.FATAL_SIGNAL_RANGE_START<=e&&e<=ll.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-ll.FATAL_SIGNAL_RANGE_START}`;switch(e){case ll.OK:return"OK";case ll.GENERAL_ERRORS:
return"GENERAL_ERRORS";case ll.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case ll.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case ll.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case ll.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case ll.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case ll.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case ll.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case ll.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case ll.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case ll.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case ll.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case ll.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case ll.FATAL_ERROR:return"FATAL_ERROR"
;case ll.USAGE:return"USAGE";case ll.DATAERR:return"DATAERR";case ll.NOINPUT:return"NOINPUT";case ll.NOUSER:
return"NOUSER";case ll.NOHOST:return"NOHOST";case ll.UNAVAILABLE:return"UNAVAILABLE";case ll.SOFTWARE:return"SOFTWARE"
;case ll.OSERR:return"OSERR";case ll.OSFILE:return"OSFILE";case ll.CANTCREAT:return"CANTCREAT";case ll.IOERR:
return"IOERR";case ll.TEMPFAIL:return"TEMPFAIL";case ll.PROTOCOL:return"PROTOCOL";case ll.NOPERM:return"NOPERM"
;case ll.CONFIG:return"CONFIG";case ll.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case ll.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case ll.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case ll.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case ll.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case ll.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case ll.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case ll.WORK_CANCELLED:return"WORK_CANCELLED";case ll.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return Qu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${Xu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Yu?`

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
`:""}${zu?`

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
`}function x(e){if(ka(e))switch(e){case cl.OPTIONS:return"options";case cl.GET:return"get";case cl.POST:return"post"
;case cl.PUT:return"put";case cl.DELETE:return"delete";case cl.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function B(e){return!(!Pa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function J(e){return p(e)||ka(e)||wa(e)||ba(e)
}function W(e){return J(e)||d(e,w(W,v))||V(e)}function V(e){return A(e)&&N(e,p,w(W,v))}function q(e){return v(e)||V(e)}
function K(e){return J(e)||X(e)||z(e)}function z(e){return A(e)&&N(e,p,w(K,v))}function X(e){return d(e,w(K,v))}
function Y(e){return A(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===su.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||wa(r))||A(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===su.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||A(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===su.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||A(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===su.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||A(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===su.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return A(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(v(null==e?void 0:e.variables)||V(
null==e?void 0:e.variables))}function Z(e){return!(!Q(e)||void 0===Ac.findController(e)&&!(Q(e)&&A(e)&&B(
null==e?void 0:e.name)))}function ee(e){return Q(e)&&B(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,Z,1)&&I(e,yc)}
function te(e){if(ee(e))return e}function re(e){return Q(e)&&B(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,ee,1)&&I(
e,Rc)}function ne(e){return Q(e)&&B(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,re,1)&&I(e,Cc)}function ie(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ne(e))return e}(e))&&void 0!==t?t:function(e){if(re(e)
)return e}(e))&&void 0!==t?t:te(e))&&void 0!==t?t:(t=e,null!==(e=Ac.parseControllerModel(t))&&void 0!==e?e:te(t))}
function oe(e){return b(e)&&Nt(null==e?void 0:e.getName)&&Nt(null==e?void 0:e.isRunning)&&Nt(null==e?void 0:e.isStarted
)&&Nt(null==e?void 0:e.isPaused)&&Nt(null==e?void 0:e.isCancelled)&&Nt(null==e?void 0:e.isFinished)&&Nt(
null==e?void 0:e.isFailed)&&Nt(null==e?void 0:e.isSuccessful)&&Nt(null==e?void 0:e.start)&&Nt(null==e?void 0:e.pause
)&&Nt(null==e?void 0:e.resume)&&Nt(null==e?void 0:e.stop)&&Nt(null==e?void 0:e.destroy)&&Nt(null==e?void 0:e.toString
)&&Nt(null==e?void 0:e.toJSON)&&Nt(null==e?void 0:e.onStarted)&&Nt(null==e?void 0:e.onPaused)&&Nt(
null==e?void 0:e.onResumed)&&Nt(null==e?void 0:e.onCancelled)&&Nt(null==e?void 0:e.onFailed)&&Nt(
null==e?void 0:e.onFinished)&&Nt(null==e?void 0:e.onChanged)}function se(e){return e instanceof Ic}function ae(e){
return e instanceof Oc}function le(e){return p(e)&&!!e&&"!"===e[0]}function ue(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function ce(e){return A(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function de(e){return p(e)&&!!e&&"@"===e[0]}
function he(e){return A(e)&&I(e,["content","type","sender"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||de(null==e?void 0:e.sender))}function _e(e){return A(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||de(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||he(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function Ee(e){try{return function(e){if(!A(e))throw new TypeError(
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
return e.message}}function ve(e){return A(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||_e(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||V(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function pe(e){try{return function(e){if(!A(e))throw new TypeError(
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
return e.message}}function fe(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ge(e){
return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,ve)}function Te(e){try{return function(e){if(!A(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,ve))throw e=Wo(null==e?void 0:e.events,e=>!ve(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${pe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Se(e){return A(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&V(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&de(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||_e(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function me(e){try{return function(e){if(!A(e))throw new TypeError(
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
return e.message}}function Ne(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ae(e){
return A(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Se)&&wa(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function ye(e){try{return function(e){if(!A(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Se)){var t=Wo(null==e?void 0:e.events,e=>!Se(e));throw new TypeError(
`Property "events" item was not correct: ${me(t)}`)}if(!wa(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,he)}function Ce(e){
return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function we(e){return A(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,he)}function be(e){return A(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function Ie(e){return A(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||ce(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||ge(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||Ae(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Re(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||we(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||be(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function De(e){try{return function(e){if(!A(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!ce(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!ge(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Te(e)}`);if(
!v(null==e?void 0:e.timeline)&&!Ae(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${ye(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Re(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!we(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!be(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Oe(e){return A(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||_e(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Le(e){try{return function(e){if(!A(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!_e(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Pe(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Oe)}function Ue(e){try{return function(e){if(!A(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Oe))throw e=Wo(
null==e?void 0:e.events,e=>!Oe(e)),new TypeError(`Property "events" had invalid item: ${Le(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function $e(e){return A(e)&&I(e,["invite_state"])&&Pe(
null==e?void 0:e.invite_state)}function Fe(e){try{return function(e){if(!A(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Pe(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Ue(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function ke(e){return A(e)&&I(e,[
"state","timeline","account_data"])&&ge(null==e?void 0:e.state)&&Ae(null==e?void 0:e.timeline)&&we(
null==e?void 0:e.account_data)}function Me(e){return A(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,le,Ie))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,le,$e))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,le,ke))}function Ge(e){try{return function(e){if(!A(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,le,Ie))throw new TypeError(`Property "join" was invalid: ${C(
null==e?void 0:e.join,le,Ie,ue,De)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,le,$e)
)throw new TypeError(`Property "invite" was invalid: ${C(null==e?void 0:e.invite,le,$e,ue,Fe)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,le,ke))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function je(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
he)}function He(e){return A(e)&&I(e,["events"])&&d(null==e?void 0:e.events,he)}function xe(e){return A(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,de)&&d(null==e?void 0:e.left,de)}function Be(e){return y(e,p,E)}
function Je(e){try{return function(e){if(!A(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Me(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ge(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!je(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!we(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!He(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Be(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function We(e){return A(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||ba(null==e?void 0:e.avatar_url))}function Ve(e){
return A(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case Nl.M_USER_IN_USE:
case Nl.M_INVALID_USERNAME:case Nl.M_EXCLUSIVE:case Nl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function qe(e){return encodeURIComponent(e)}async function Ke(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Sl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}function ze(e){return Q(e)&&B(
null==e?void 0:e.name)&&K(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,Qc)}
function Xe(e){return d(e,p)}function Ye(e){return d(e,Xe)}function Qe(e){return Q(e)&&B(null==e?void 0:e.name)&&K(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,td)}function Ze(e){return Q(e)&&B(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,id);var t,r,n,i}function et(e){return Q(e)&&B(null==e?void 0:e.name
)&&K(null==e?void 0:e.file)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.output)&&I(e,ld)}function tt(e){return Q(e
)&&B(null==e?void 0:e.name)&&K(null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,dd)}function rt(e){return Q(e
)&&B(null==e?void 0:e.name)&&K(null==e?void 0:e.git)&&f(null==e?void 0:e.url)&&f(null==e?void 0:e.target)&&I(e,Ed)}
var nt,it,ot,st,at,lt,ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,mt,Nt,At,yt,Rt,Ct,wt,bt,It,Dt,Ot,Lt,Pt,Ut,$t,Ft,kt,Mt,Gt,jt,Ht
,xt,Bt,Jt,Wt,Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,mr,Nr,Ar,yr,Rr,Cr,wr
,br,Ir,Dr,Or,Lr,Pr,Ur,$r,Fr,kr,Mr,Gr,jr,Hr,xr,Br,Jr,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En
,vn,pn,fn,gn,Tn,Sn,mn,Nn,An,yn,Rn,Cn,wn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,kn,Mn,Gn,jn,Hn,xn,Bn,Jn,Wn,Vn,qn,Kn,zn,Xn,Yn,Qn,Zn,ei
,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,mi,Ni,Ai,yi,Ri,Ci,wi,bi,Ii,Di,Oi,Li,Pi,Ui,$i,Fi,ki,Mi,Gi,ji
,Hi,xi,Bi,Ji,Wi,Vi,qi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,mo,No,Ao,yo,Ro,Co,wo
,bo,Io,Do,Oo,Lo,Po,Uo,$o,Fo,ko,Mo,Go,jo,Ho,xo,Bo,Jo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s
,Es,vs,ps,fs,gs,Ts,Ss,ms,Ns,As,ys,Rs,Cs,ws,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,ks,Ms,Gs,js,Hs,xs,Bs,Js,Ws,Vs,qs,Ks,zs,Xs,Ys,Qs,Zs
,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,ma,Na,Aa,ya,Ra,Ca,wa,ba,Ia,Da,Oa,La,Pa,Ua,$a,Fa,ka,Ma,Ga
,ja,Ha,xa,Ba,Ja,Wa,Va,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,Tl,Sl,ml,Nl,Al,yl,Rl
,Cl,wl,bl,Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,kl,Ml,Gl,jl,Hl,xl,Bl,Jl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,ou,su,au,lu,uu,cu,du
,hu,_u,Eu,vu,pu,fu,gu=require("fs"),Tu=require("querystring"),Su=require("url"),mu=require("path"),Nu=require(
"child_process"),Au=require("crypto"),yu=e(gu),Ru=t(Tu),Cu=e(Su),wu=e(mu),bu=e(Au),
Iu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Du=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ou=function(){
this.__data__=[],this.size=0},Lu=function(e,t){return e===t||e!=e&&t!=t},Pu=Lu,Uu=function(e,t){for(var r=e.length;r--;
)if(Pu(e[r][0],t))return r;return-1},$u=Uu,Fu=Array.prototype,ku=Fu.splice,Mu=Uu,Gu=Uu,ju=Uu,Hu=Ou,xu=function(e){
var t=this.__data__;return!((e=$u(t,e))<0||(e==t.length-1?t.pop():ku.call(t,e,1),--this.size,0))},Bu=function(e){
var t=this.__data__;return(e=Mu(t,e))<0?void 0:t[e][1]},Ju=function(e){return-1<Gu(this.__data__,e)},Wu=function(e,t){
var r=this.__data__,n=ju(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Hu,
r.prototype.delete=xu,r.prototype.get=Bu,r.prototype.has=Ju,r.prototype.set=Wu,dt=xl=r,Bl=function(){
this.__data__=new dt,this.size=0},Xs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
jl=function(e){return this.__data__.get(e)},Hl=function(e){return this.__data__.has(e)},
ql=Jl="object"==typeof Iu&&Iu&&Iu.Object===Object&&Iu,zl="object"==typeof self&&self&&self.Object===Object&&self,yr=Kl=(
is=ql||zl||Function("return this")()).Symbol,Vs=Object.prototype,ht=Vs.hasOwnProperty,_t=Vs.toString,
Et=yr?yr.toStringTag:void 0,Rr=Object.prototype,vt=Rr.toString,pt=function(e){var t,r,n=ht.call(e,Et),i=e[Et];try{t=!(
e[Et]=void 0)}catch(e){}return r=_t.call(e),t&&(n?e[Et]=i:delete e[Et]),r},ft=function(e){return vt.call(e)},gt=(zs=Kl
)?zs.toStringTag:void 0,St=Xl=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
gt&&gt in Object(e)?pt:ft)(e)},mt=Tt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
Nt=function(e){return!!mt(e)&&("[object Function]"==(e=St(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Cr=is["__core-js_shared__"],
Gl=/[^.]+$/.exec((Qt=Cr)&&Qt.keys&&Qt.keys.IE_PROTO||""),At=Gl?"Symbol(src)_1."+Gl:"",Zt=Function.prototype,
yt=Zt.toString,Rt=Nt,Ct=function(e){return!!At&&At in e},wt=Tt,bt=Xr=function(e){if(null!=e){try{return yt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},wr=/[\\^$.*+?()[\]{}|]/g,It=/^\[object .+?Constructor\]$/,
Ys=Function.prototype,Tu=Object.prototype,Su=Ys.toString,mu=Tu.hasOwnProperty,Dt=RegExp("^"+Su.call(mu).replace(wr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ot=function(e){return!(!wt(e
)||Ct(e))&&(Rt(e)?Dt:It).test(bt(e))},Lt=function(e,t){return null==e?void 0:e[t]},Fu=(Au=function(e,t){return t=Lt(e,t)
,Ot(t)?t:void 0})(is,"Map"),Uu=Au(Object,"create"),Ut=Pt=Ou=Uu,Eu=Object.prototype,$t=Eu.hasOwnProperty,Ft=Ou,
vu=Object.prototype,kt=vu.hasOwnProperty,Mt=Ou,pu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},fu=function(e){var t,r=this.__data__;return Ut?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:$t.call(r,e)?r[e]:void 0},Hu=function(e){var t=this.__data__;return Ft?void 0!==t[e]:kt.call(t,e)},
xu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Mt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Pt?Pt(null):{},this.size=0},i.prototype.delete=pu,i.prototype.get=fu,
i.prototype.has=Hu,i.prototype.set=xu,Gt=i,jt=xl,Ht=Fu,Bu=function(){this.size=0,this.__data__={hash:new Gt,map:new(
Ht||jt),string:new Gt}},xt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Vt=Wt=Jt=Bt=function(e,t){
return e=e.__data__,xt(t)?e["string"==typeof t?"string":"hash"]:e.map},Ju=function(e){return e=Bt(this,e).delete(e),
this.size-=e?1:0,e},Wu=function(e){return Jt(this,e).get(e)},Iu=function(e){return Wt(this,e).has(e)},Jl=function(e,t){
var r=Vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Bu,o.prototype.delete=Ju,
o.prototype.get=Wu,o.prototype.has=Iu,o.prototype.set=Jl,Kt=Fu,zt=zl=o,Xt=qt=xl,rs=Xs,Vs=jl,yr=Hl,Rr=function(e,t){var r
,n=this.__data__;if(n instanceof qt){if(r=n.__data__,!Kt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new zt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Bl,s.prototype.delete=rs,
s.prototype.get=Vs,s.prototype.has=yr,s.prototype.set=Rr,zs=s,Yt=zl,Cr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Cr,er=Qt=a,tr=Gl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},rr=Zt=function(e,t){return e.has(t)},Ys=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new er:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!tr(t,function(e,t){if(!rr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Tu=is.Uint8Array,nr=Tu,ir=Lu,or=Ys,sr=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},ar=Su=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},wr=(mu=Kl)?mu.prototype:void 0,lr=wr?wr.valueOf:void 0,Uu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new nr(e),new nr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return ir(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=sr;case"[object Set]":return l=l||ar,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=or(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(lr)return lr.call(e)==lr.call(t)}return!1},Eu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},vu=Array.isArray,cr=Eu,dr=ur=vu,Ou=function(e,t,r){
return t=t(e),dr(e)?t:cr(t,r(e))},hr=pu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},fu=Object.prototype,_r=fu.propertyIsEnumerable,Hu=(Er=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),hr(Er(t),function(e){return _r.call(t,e)}))}:function(){return[]},xu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},vr=Xl,Bu=function(e){return pr(e)&&"[object Arguments]"==vr(e)},
fr=pr=Ju=function(e){return null!=e&&"object"==typeof e},Wu=Object.prototype,gr=Wu.hasOwnProperty,
Tr=Wu.propertyIsEnumerable,Iu=Bu(function(){return arguments}())?Bu:function(e){return fr(e)&&gr.call(e,"callee"
)&&!Tr.call(e,"callee")},Jl=is,xl=function(){return!1},Jl=(Jl=(Bl=(Hl=(Bl=(Hl=(jl=Xs={exports:{}}).exports
)&&!Hl.nodeType&&Hl)&&jl&&!jl.nodeType&&jl)&&Hl.exports===Bl)?Jl.Buffer:void 0)?Jl.isBuffer:void 0,jl.exports=xl=Jl||xl,
Sr=/^(?:0|[1-9]\d*)$/,rs=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Sr.test(e))&&-1<e&&e%1==0&&e<t},mr=Xl,Nr=Vs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Ar=Ju,yr="[object Arguments]",Rr="[object Array]",
Cr="[object Boolean]",Tu="[object Date]",mu="[object Error]",wr="[object Function]",vu="[object Map]",
Wu="[object Object]",Bu="[object RegExp]",Hl="[object Set]",Bl="[object String]",Jl="[object WeakMap]",
jl="[object ArrayBuffer]",xl="[object DataView]",(br={}
)["[object Float32Array]"]=br["[object Float64Array]"]=br["[object Int8Array]"]=br["[object Int16Array]"]=br["[object Int32Array]"]=br["[object Uint8Array]"]=br["[object Uint8ClampedArray]"]=br["[object Uint16Array]"]=br["[object Uint32Array]"]=!0
,
br[yr]=br[Rr]=br[jl]=br[Cr]=br[xl]=br[Tu]=br[mu]=br[wr]=br[vu]=br["[object Number]"]=br[Wu]=br[Bu]=br[Hl]=br[Bl]=br[Jl]=!1
,fu=function(e){return Ar(e)&&Nr(e.length)&&!!br[mr(e)]},Wu=function(t){return function(e){return t(e)}},Bu=ql,Jl=(Jl=(
Bl=Hl={exports:{}}).exports)&&!Jl.nodeType&&Jl,Jl=(Wl=Jl&&Bl&&!Bl.nodeType&&Bl)&&Wl.exports===Jl,Vl=Jl&&Bu.process,
Bu=function(){try{return Wl&&Wl.require&&Wl.require("util").types||Vl&&Vl.binding&&Vl.binding("util")}catch(e){}}(),
Bl.exports=Bu,ql=fu,Bu=(Bl=(Jl=Hl.exports)&&Jl.isTypedArray)?Wu(Bl):ql,Ir=xu,Dr=Iu,Or=ur,Lr=Xs.exports,Pr=rs,Ur=fu=Bu,
Jl=Object.prototype,$r=Jl.hasOwnProperty,Bl=function(e,t){var r,n=Or(e),i=!n&&Dr(e),o=!n&&!i&&Lr(e),s=!n&&!i&&!o&&Ur(e),
a=n||i||o||s,l=a?Ir(e.length,String):[],u=l.length;for(r in e)!t&&!$r.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Pr(r,u))||l.push(r);return l},
Fr=Object.prototype,ql=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fr)},
hu=Object.keys,_u=Object,kr=ql,Mr=function(e){return hu(_u(e))},Bu=Object.prototype,Gr=Bu.hasOwnProperty,jr=Nt,Hr=Vs,
xr=Bl,Br=function(e){var t,r;if(!kr(e))return Mr(e);for(r in t=[],Object(e))Gr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Jr=Jl=function(e){return null!=e&&Hr(e.length)&&!jr(e)},Wr=Ou,Vr=Hu,qr=ql=function(e){return(Jr(e)?xr:Br)(e)}
,Kr=function(e){return Wr(e,qr,Vr)},xu=Object.prototype,zr=xu.hasOwnProperty,Bu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=Kr(e),T=g.length;if(T!=Kr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:zr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Bl=Au(is,
"DataView"),Ou=Fu,Hu=Au(is,"Promise"),Fu=xu=Au(is,"Set"),is=Au(is,"WeakMap"),Yr=Xl,Zr="[object Map]",
en="[object Promise]",tn="[object Set]",rn="[object WeakMap]",nn="[object DataView]",on=(Qr=Xr)(Xr=Bl),sn=Qr(Ou),an=Qr(
Hu),ln=Qr(Fu),un=Qr(is),Bl=Yr,(Xr&&Bl(new Xr(new ArrayBuffer(1)))!=nn||Ou&&Bl(new Ou)!=Zr||Hu&&Bl(Hu.resolve()
)!=en||Fu&&Bl(new Fu)!=tn||is&&Bl(new is)!=rn)&&(Bl=function(e){var t=Yr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Qr(e):"")switch(e){case on:return nn;case sn:return Zr;case an:return en
;case ln:return tn;case un:return rn}return t}),cn=zs,dn=Ys,hn=Uu,_n=Bu,En=Bl,vn=ur,pn=Xs.exports,fn=fu,
gn="[object Arguments]",Tn="[object Array]",Sn="[object Object]",Fu=Object.prototype,mn=Fu.hasOwnProperty,Nn=function(e,
t,r,n,i,o){var s,a,l=vn(e),u=vn(t),c=l?Tn:En(e),d=u?Tn:En(t),h=(c=c==gn?Sn:c)==Sn,u=(d=d==gn?Sn:d)==Sn;if((d=c==d)&&pn(e
)){if(!pn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new cn,l||fn(e)?dn(e,t,r,n,i,o):hn(e,t,c,r,n,i,o)):1&r||(
s=h&&mn.call(e,"__wrapped__"),a=u&&mn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new cn,_n(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new cn)},yn=zs,Rn=is=function e(t,r,n,i,o){return t===r||(null==t||null==r||!An(t)&&!An(r
)?t!=t&&r!=r:Nn(t,r,n,i,e,o))},Cn=Tt,wn=Ys=function(e){return e==e&&!Cn(e)},bn=ql,In=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new yn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Rn(a,s,3,n,l):u))return!1;return!0},Dn=function(e){for(var t,r,n=bn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
wn(r)];return n},On=Uu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Bu=function(t){var r=Dn(t);return 1==r.length&&r[0][2]?On(r[0][0],r[0][1]):function(e){return e===t||In(e,t,r)}},Ln=Xl,
Pn=An=Ju,Un=ur,$n=Bl=function(e){return"symbol"==typeof e||Pn(e)&&"[object Symbol]"==Ln(e)},
Fn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kn=/^\w*$/,Xs=function(e,t){if(Un(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!$n(e))||kn.test(e)||!Fn.test(e)||null!=t&&e in Object(t)},
Mn=zl,Gn="Expected a function",u.Cache=Mn,
jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hn=/\\(\\)?/g,Hu=0
,du=(Hu=u(Hu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(jn,function(e,t,r,n){i.push(
r?n.replace(Hn,"$1"):t||e)}),i},function(e){return 500===du.size&&du.clear(),e})).cache,xn=Du,zs=(Fu=Kl
)?Fu.prototype:void 0,Wn=zs?zs.toString:void 0,Vn=zl=function e(t){if("string"==typeof t)return t;if(Bn(t))return xn(t,e
)+"";if(Jn(t))return Wn?Wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},zn=Hu,Xn=Fu=function(e){
return null==e?"":Vn(e)},Yn=Jn=Bl,ri=Qn=zs=function(e,t){return qn(e)?e:Kn(e,t)?[e]:zn(Xn(e))},ni=Iu,si=Vs,li=function(e
,t){return null!=e&&t in Object(e)},ui=fu=function(e,t,r){for(var n,i,o=(t=ri(t,e)).length,s=!(n=-1);++n<o&&(i=ai(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&si(o)&&oi(i,o)&&(ii(e)||ni(e))},ci=is,
di=ti=function(e,t,r){return void 0===(t=null==e?void 0:ei(e,t))?r:t},hi=function(e,t){return null!=e&&ui(e,t,li)},Ei=Ys
,vi=Uu,fi=ei=Vs=function(e,t){for(var r=0,n=(t=Qn(t,e)).length;null!=e&&r<n;)e=e[Zn(t[r++])];return r&&r==n?e:void 0},
gi=function(t){return function(e){return null==e?void 0:e[t]}},Ti=function(t){return function(e){return fi(e,t)}},
Si=_i=Kn=Xs,mi=pi=ai=Zn=is=function(e){if("string"==typeof e||Yn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Ni=Bu,Ai=function(r,n){return _i(r)&&Ei(n)?vi(pi(r),n):function(e){var t=di(e,r);return void 0===t&&t===n?hi(e,r):ci(n,t
,3)}},yi=Ys=function(e){return e},Ri=ii=qn=Bn=ur,Ci=function(e){return Si(e)?gi(mi(e)):Ti(e)},wi=Xs=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},bi=ql,Li=Du,Ui=Xs=function(e,n){
var i=-1,o=Oi(e)?Array(e.length):[];return Di(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Fi=function(e,t){return($i(e)?Li:Ui
)(e,Pi(t))},Mi=Lu,Gi=Oi=Ii=Jl,ji=oi=rs,Hi=Tt,xi=Gl,Ji=function(e,n){var i;return ki(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},qi=function(e,t,r){var n=Wi(e)?xi:Ji;return r&&Vi(e,t,r)&&(t=void 0),n(e,Bi(t))},Ki=ki=Di=Gl=Bu=function(e,t){
if(null==e)return e;if(!Ii(e))return e&&wi(e,t,bi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},zi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Xi=function(e,n){
var i=!0;return Ki(e,function(e,t,r){return i=!!n(e,t,r)}),i},Yi=Bi=Pi=Uu=function(e){
return"function"==typeof e?e:null==e?yi:"object"==typeof e?Ri(e)?Ai(e[0],e[1]):Ni(e):Ci(e)},Qi=Wi=$i=ur,
Zi=Vi=Bu=function(e,t,r){if(!Hi(r))return!1;var n=typeof t;return!!("number"==n?Gi(r)&&ji(t,r.length
):"string"==n&&t in r)&&Mi(r[t],e)},eo=function(e,t,r){var n=Qi(e)?zi:Xi;return r&&Zi(e,t,r)&&(t=void 0),n(e,Yi(t))},
to=Au,Au=function(){try{var e=to(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ro=Au,no=function(e,t,r){
"__proto__"==t&&ro?ro(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},io=Lu,Lu=Object.prototype,
oo=Lu.hasOwnProperty,so=function(e,t,r){var n=e[t];oo.call(e,t)&&io(n,r)&&(void 0!==r||t in e)||no(e,t,r)},ao=zs,lo=rs,
co=is,ho=function(e,t,r,n){var i,o,s,a,l,u,c;if(!uo(e))return e;for(i=-1,s=(o=(t=ao(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=co(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=uo(c)?c:lo(t[i+1])?[]:{})),so(a,l,u),a=a[l]}return e},_o=function(e,t,r){return null==e?e:ho(e,t,r)},Eo=Iu
,po=(Lu=Kl)?Lu.isConcatSpreadable:void 0,go=function(e){return vo(e)||Eo(e)||!!(po&&e&&e[po])},To=fo=Eu,
So=zs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||go,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):fo(o,s
):i||(o[o.length]=s);return o},mo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
No=vo=ur,Ao=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return To(No(t)?mo(t):[t],So(e,1))},yo=Uu,Ro=Jl,Co=ql,rs=function(o){return function(e,t,r){var n,
i=Object(e);return Ro(e)||(n=yo(t),e=Co(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
is=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},wo=/\s/,bo=function(
e){for(var t=e.length;t--&&wo.test(e.charAt(t)););return t},Io=/^\s+/,Do=Iu=function(e){return e&&e.slice(0,bo(e)+1
).replace(Io,"")},Oo=uo=Tt,Lo=Bl,Po=/^[-+]0x[0-9a-f]+$/i,Uo=/^0b[01]+$/i,$o=/^0o[0-7]+$/i,Fo=parseInt,ko=function(e){
var t;return"number"==typeof e?e:Lo(e)?NaN:(Oo(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Oo(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Do(e),(t=Uo.test(e))||$o.test(e)?Fo(e.slice(2),t?2:8):Po.test(e)?NaN:+e))},
Mo=17976931348623157e292,Go=function(e){return e?(e=ko(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Mo:0===e?e:0},jo=is,Ho=Uu
,xo=Kl=function(e){var t=Go(e),e=t%1;return t==t?e?t-e:t:0},Bo=Math.max,Lu=rs(Jo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:xo(r))<0&&(r=Bo(n+r,0)),jo(e,Ho(t),r)):-1}),Wo=Lu,Vo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},qo=Gl,Ko=Uu,zo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Xo=ur,Yo=function(e,t,r){var n=Xo(e)?Vo:zo,i=arguments.length<3
;return n(e,Ko(t),r,i,qo)},Eu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Qo=is,Zo=function(e){return e!=e},es=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},ts=Jl=function(e,t,r){return t==t?es(e,t,r):Qo(e,Zo,r)},
rs=function(e,t){return!(null==e||!e.length)&&-1<ts(e,t,0)},Lu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},is=function(){},is=(ns=xu)&&1/Su(new ns([,-0]))[1]==1/0?function(e){return new ns(e)
}:is,os=Qt,ss=rs,as=Lu,ls=Zt,us=is,cs=Su,ds=function(e,t,r){var n,i,o,s,a=-1,l=ss,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=as;else if(200<=u){if(n=t?null:us(e))return cs(n);c=!1,l=ls,h=new os}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},hs=function(e){return e&&e.length?ds(e):[]},_s=Bl,Es=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=_s(e),s=void 0!==t,a=null===t,l=t==t,u=_s(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},vs=Du,ps=Vs,fs=Uu,gs=Xs,Ts=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Ss=Wu,ms=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=Es(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},Ns=Ys,As=ur,Bl=function(e,n,r){var i;return n=n.length?vs(n
,function(t){return As(t)?function(e){return ps(e,1===t.length?t[0]:t)}:t}):[Ns],i=-1,n=vs(n,Ss(fs)),e=gs(e,function(t,e
,r){return{criteria:vs(n,function(e){return e(t)}),index:++i,value:t}}),Ts(e,function(e,t){return ms(e,t,r)})},
ys=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Rs=Math.max,Vs=function(o,s,a){return s=Rs(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Rs(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),ys(o,this,e)}},Cs=function(e){return function(){return e}},ws=Au,
bs=Date.now,lu=ws?function(e,t){return ws(e,"toString",{configurable:!0,enumerable:!1,value:Cs(t),writable:!0})}:Ys,
Is=zs,Ds=Bl,Os=Bu,(Xs=function(){var e=bs(),t=16-e+ +cu;if(cu=e,0<t){if(800<=++uu)return arguments[0]}else uu=0
;return lu.apply(void 0,arguments)})(Vs(Su=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Os(e,t[0],t[1]
)?t=[]:2<r&&Os(t[0],t[1],t[2])&&(t=[t[0]]),Ds(e,Is(t,1),[])},void(cu=uu=0),Ys),Su+""),Ps=pu,Us=function(e,n){var i=[]
;return Ls(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},$s=Uu,ks=function(e,t){return(Fs(e)?Ps:Us)(e,$s(t))},Ms=Ys,
Gs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},js=Ls=Gl,Hs=function(e){
return"function"==typeof e?e:Ms},xs=Fs=ur,Bs=function(e,t){return(xs(e)?Gs:js)(e,Hs(t))},Js=Eu,Au=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Js(e,t,r)},Ws=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Vs=function(e){return Ws.test(e)}
,qs=Xl,Ks=Ju,Xs=function(e){return Ks(e)&&"[object RegExp]"==qs(e)},pu=(Bl=(zs=Hl.exports)&&zs.isRegExp)?Wu(Bl):Xs,
Uu=function(e){return e.split("")},Gl="["+(Ys="\\ud800-\\udfff")+"]",Wu=(Eu="[\\ufe0e\\ufe0f]?")+(Wu="(?:"+(
Hl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(zs="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
Bl="[^"+Ys+"]",Xs="(?:\\ud83c[\\udde6-\\uddff]){2}",Ys="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+Eu+Wu+")*",
Gl="(?:"+[Bl+Hl+"?",Hl,Xs,Ys,Gl].join("|")+")",Qs=RegExp(zs+"(?="+zs+")|"+Gl+Wu,"g"),Zs=Uu,ta=function(e){
return e.match(Qs)||[]},ia=ea=Vs,oa=Bu,sa=pu,ua=function(e,t,r){return r&&"number"!=typeof r&&oa(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=la(e))&&("string"==typeof t||null!=t&&!sa(t))&&!(t=ra(t))&&ia(e)?na(aa(e),0,r
):e.split(t,r):[]},da=ca=Jl,ha=ra=zl,_a=Iu,Ea=na=Au,va=function(e,t){for(var r=e.length;r--&&-1<ca(t,e[r],0););return r}
,pa=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<da(t,e[r],0););return r},fa=aa=function(e){return(ea(e)?ta:Zs)(e)},
ga=la=Fu,Ta=function(e,t,r){return(e=ga(e))&&(r||void 0===t)?_a(e):e&&(t=ha(t))?(r=fa(e),e=fa(t),t=pa(r,e),e=va(r,e)+1,
Ea(r,t,e).join("")):e},Au=Object.prototype,Sa=Au.hasOwnProperty,ma=function(e,t){return null!=e&&Sa.call(e,t)},Na=fu,
Aa=function(e,t){return null!=e&&Na(e,t,ma)},Ca="[object Boolean]",wa=function(e){return!0===e||!1===e||Ra(e)&&ya(e)==Ca
},ba=function(e){return null===e},Da=ur,La="[object String]",Pa=function(e){return"string"==typeof e||!Da(e)&&Oa(e)&&Ia(
e)==La},Ua=Ia=ya=Xl,$a=Oa=Ra=Ju,Fa="[object Number]",ka=function(e){return"number"==typeof e||$a(e)&&Ua(e)==Fa},
Ga=function(e){return"number"==typeof e&&e==Ma(e)},Ja=function(e,t,r){return e=Ba(e),r=null==r?0:ja(xa(r),0,e.length),
t=Ha(t),e.slice(r,r+t.length)==t},Wa=ja=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Va=Ha=zl,qa=xa=Ma=Kl,Ka=Ba=Fu,za=function(e,t,r){var n;return e=Ka(e),t=Va(t),n=e.length,n=r=void 0===r?n:Wa(qa(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},Xa=Du,Ya=function(t,e){return Xa(e,function(e){return t[e]})},Qa=ql,Za=function(e
){return null==e?[]:Ya(e,Qa(e))},Xl=Array.prototype,el=Xl.join,tl=function(e,t){return null==e?"":el.call(e,t)},(
Ju=rl={})[Ju.DEBUG=0]="DEBUG",Ju[Ju.INFO=1]="INFO",Ju[Ju.WARN=2]="WARN",Ju[Ju.ERROR=3]="ERROR",Ju[Ju.NONE=4]="NONE",
nl=rl;const Vu=null!==(zl=L("1.0.4"))&&void 0!==zl?zl:"?";Fu=null!==(Kl=L(""))&&void 0!==Kl?Kl:"io.nor.fi",ql=null!==(
Du=L(""))&&void 0!==Du?Du:"nor-pipeline-runner",Ju=null!==(Xl=L(""))&&void 0!==Xl?Xl:"",Kl=null!==(zl=L("")
)&&void 0!==zl?zl:"";const qu=null!==(Du=L("production"))&&void 0!==Du?Du:"development",Ku=null!==(Xl=L(
"2021-09-09T21:13:11.517Z"))&&void 0!==Xl?Xl:"";Du=null!==(zl=L(""))&&void 0!==zl?zl:"${",zl=null!==(Xl=L("")
)&&void 0!==Xl?Xl:"}";const zu=null===(Xl=D(""))||void 0===Xl||Xl,Xu=null===(Xl=D(""))||void 0===Xl||Xl,Yu=null===(Xl=D(
""))||void 0===Xl||Xl,Qu=null===(Xl=D(""))||void 0===Xl||Xl;Xl="production"===qu;const Zu="test"===qu,ec=!Xl&&!Zu
;Ju=null!==(nt=function(e){if(e){if(function(){switch(e){case rl.DEBUG:case rl.INFO:case rl.WARN:case rl.ERROR:
case rl.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return rl.DEBUG
;case"INFO":return rl.INFO;case"WARN":case"WARNING":return rl.WARN;case"ERR":case"ERROR":return rl.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return rl.NONE;default:return}}}(null!==(nt=L(null===(Xl=process
)||void 0===Xl||null===(nt=Xl.env)||void 0===nt?void 0:nt.PIPELINE_LOG_LEVEL))&&void 0!==nt?nt:L(Ju))
)&&void 0!==nt?nt:nl.INFO;const tc=null!==(it=L(null===(nt=process)||void 0===nt||null===(it=nt.env
)||void 0===it?void 0:it.PIPELINE_SERVER))&&void 0!==it?it:ql,rc=null!==(ot=function(e){if(void 0!==e)return`${e}`}(
null===(ql=process)||void 0===ql||null===(ot=ql.env)||void 0===ot?void 0:ot.PIPELINE_AUTHENTICATION))&&void 0!==ot?ot:Kl
,nc=null!==(st=L(null===(Kl=process)||void 0===Kl||null===(st=Kl.env)||void 0===st?void 0:st.PIPELINE_SERVER)
)&&void 0!==st?st:Fu,ic=null!==(at=L(null===(Fu=process)||void 0===Fu||null===(at=Fu.env
)||void 0===at?void 0:at.PIPELINE_VARIABLE_PREFIX))&&void 0!==at?at:Du,oc=null!==(lt=L(null===(Du=process
)||void 0===Du||null===(lt=Du.env)||void 0===lt?void 0:lt.PIPELINE_VARIABLE_SUFFIX))&&void 0!==lt?lt:zl;class sc{
constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class ac{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case rl.DEBUG:return"DEBUG";case rl.INFO:return"INFO";case rl.WARN:return"WARN";case rl.ERROR:return"ERROR"
;case rl.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=nl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=nl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=nl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=nl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new sc(e,ac)}}l(ac,"Level",nl),l(ac,"_level",nl.DEBUG),l(ac,"_logger",console),(zl=il={}
)[zl.HTTP=0]="HTTP",zl[zl.LOCAL=1]="LOCAL",zl[zl.MATRIX=2]="MATRIX",ol=il,(zl=sl={})[zl.NONE=0]="NONE",
zl[zl.BASIC_AUTH=1]="BASIC_AUTH",zl[zl.BEARER_AUTH=2]="BEARER_AUTH",al=sl;class lc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const uc=ac.createLogger("MatrixRunnerResource");class cc{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return A(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===ol.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=Ta(`${e}`)
).toLowerCase(),Ja(t,"http:")||Ja(t,"https:")?(t=new URL(e),t=null!==(t=lc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:lc.parseRunnerAuthentication(rc),{type:ol.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return A(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===ol.LOCAL&&p(null==t?void 0:t.path)?e:(e=Ta(`${e}`),(e=Ja(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&yu.default.existsSync(e)?{type:ol.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(A(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===ol.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=Ta(
`${i}`),uc.debug(`value: '${i}'`);let e=i.toLowerCase();if(uc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),uc.debug(`lowerCaseValue: '${e}'`),Ja(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),uc.debug(`url: '${s}': `,s),o=null!==(o=lc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:lc.parseRunnerAuthentication(rc),uc.debug(
"auth: ",o);const e=`${s.host}`;uc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),uc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return uc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,uc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",uc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,uc.debug(`pool: '${s}'`),{type:ol.MATRIX,homeserver:e,pool:s,
authentication:o}}Ja(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Ja(e,"!")||Ja(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${nc}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||rc,r=r||nc,{type:ol.MATRIX,homeserver:r,pool:n,
authentication:lc.parseRunnerAuthentication(t)}}}(e)}}(zl=ll={})[zl.OK=0]="OK",zl[zl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
zl[zl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",zl[zl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
zl[zl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",zl[zl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
zl[zl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",zl[zl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
zl[zl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",zl[zl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
zl[zl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",zl[zl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
zl[zl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",zl[zl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
zl[zl.FATAL_ERROR=14]="FATAL_ERROR",zl[zl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
zl[zl.WORK_CANCELLED=16]="WORK_CANCELLED",zl[zl.CONFLICT=17]="CONFLICT",zl[zl.USAGE=64]="USAGE",
zl[zl.DATAERR=65]="DATAERR",zl[zl.NOINPUT=66]="NOINPUT",zl[zl.NOUSER=67]="NOUSER",zl[zl.NOHOST=68]="NOHOST",
zl[zl.UNAVAILABLE=69]="UNAVAILABLE",zl[zl.SOFTWARE=70]="SOFTWARE",zl[zl.OSERR=71]="OSERR",zl[zl.OSFILE=72]="OSFILE",
zl[zl.CANTCREAT=73]="CANTCREAT",zl[zl.IOERR=74]="IOERR",zl[zl.TEMPFAIL=75]="TEMPFAIL",zl[zl.PROTOCOL=76]="PROTOCOL",
zl[zl.NOPERM=77]="NOPERM",zl[zl.CONFIG=78]="CONFIG",
zl[zl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
zl[zl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",zl[zl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
zl[zl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
zl[zl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
zl[zl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",ul=ll,(zl=cl={})[zl.OPTIONS=0]="OPTIONS",
zl[zl.GET=1]="GET",zl[zl.POST=2]="POST",zl[zl.PUT=3]="PUT",zl[zl.DELETE=4]="DELETE",zl[zl.PATCH=5]="PATCH",Yl=cl
;const dc="WINDOW"===(Ql=null!==(Ql=null!==(ut=null===(zl=process)||void 0===zl||null===(ut=zl.env
)||void 0===ut?void 0:ut.NOR_REQUEST_CLIENT_MODE)&&void 0!==ut?ut:null===(Ql=process)||void 0===Ql||null===(ct=Ql.env
)||void 0===ct?void 0:ct.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Ql?Ql:"")||!("undefined"==typeof window||!window.fetch
),hc="NODE"===Ql||!dc;class _c{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await _c.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await _c.getRequestDataAsString(e)))return Ru.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await _c.getRequestDataAsString(e)))return JSON.parse(e)}}(Ql=dl={}
)[Ql.Continue=100]="Continue",Ql[Ql.SwitchingProtocols=101]="SwitchingProtocols",Ql[Ql.Processing=102]="Processing",
Ql[Ql.CheckPoint=103]="CheckPoint",Ql[Ql.OK=200]="OK",Ql[Ql.Created=201]="Created",Ql[Ql.Accepted=202]="Accepted",
Ql[Ql.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",Ql[Ql.NoContent=204]="NoContent",
Ql[Ql.ResetContent=205]="ResetContent",Ql[Ql.PartialContent=206]="PartialContent",Ql[Ql.MultiStatus=207]="MultiStatus",
Ql[Ql.AlreadyReported=208]="AlreadyReported",Ql[Ql.IMUsed=226]="IMUsed",Ql[Ql.MultipleChoices=300]="MultipleChoices",
Ql[Ql.MovedPermanently=301]="MovedPermanently",Ql[Ql.Found=302]="Found",Ql[Ql.SeeOther=303]="SeeOther",
Ql[Ql.NotModified=304]="NotModified",Ql[Ql.TemporaryRedirect=307]="TemporaryRedirect",
Ql[Ql.PermanentRedirect=308]="PermanentRedirect",Ql[Ql.BadRequest=400]="BadRequest",
Ql[Ql.Unauthorized=401]="Unauthorized",Ql[Ql.PaymentRequired=402]="PaymentRequired",Ql[Ql.Forbidden=403]="Forbidden",
Ql[Ql.NotFound=404]="NotFound",Ql[Ql.MethodNotAllowed=405]="MethodNotAllowed",Ql[Ql.NotAcceptable=406]="NotAcceptable",
Ql[Ql.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",Ql[Ql.RequestTimeout=408]="RequestTimeout",
Ql[Ql.Conflict=409]="Conflict",Ql[Ql.Gone=410]="Gone",Ql[Ql.LengthRequired=411]="LengthRequired",
Ql[Ql.PreconditionFailed=412]="PreconditionFailed",Ql[Ql.PayloadTooLarge=413]="PayloadTooLarge",
Ql[Ql.URITooLong=414]="URITooLong",Ql[Ql.UnsupportedMediaType=415]="UnsupportedMediaType",
Ql[Ql.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",Ql[Ql.ExpectationFailed=417]="ExpectationFailed",
Ql[Ql.IAmATeapot=418]="IAmATeapot",Ql[Ql.UnprocessableEntity=422]="UnprocessableEntity",Ql[Ql.Locked=423]="Locked",
Ql[Ql.FailedDependency=424]="FailedDependency",Ql[Ql.TooEarly=425]="TooEarly",
Ql[Ql.UpgradeRequired=426]="UpgradeRequired",Ql[Ql.PreconditionRequired=428]="PreconditionRequired",
Ql[Ql.TooManyRequests=429]="TooManyRequests",Ql[Ql.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
Ql[Ql.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",Ql[Ql.InternalError=500]="InternalError",
Ql[Ql.InternalServerError=500]="InternalServerError",Ql[Ql.NotImplemented=501]="NotImplemented",
Ql[Ql.BadGateway=502]="BadGateway",Ql[Ql.ServiceUnavailable=503]="ServiceUnavailable",
Ql[Ql.GatewayTimeout=504]="GatewayTimeout",Ql[Ql.HttpVersionNotSupported=505]="HttpVersionNotSupported",
Ql[Ql.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",Ql[Ql.InsufficientStorage=507]="InsufficientStorage",
Ql[Ql.LoopDetected=508]="LoopDetected",Ql[Ql.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
Ql[Ql.NotExtended=510]="NotExtended",Ql[Ql.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",hl=dl,(
au=au||{}).ERROR="error",_l=au;class Ec extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case dl.Continue:return"Continue";case dl.SwitchingProtocols:return"Switching Protocols"
;case dl.Processing:return"Processing";case dl.CheckPoint:return"Check Point";case dl.OK:return"OK";case dl.Created:
return"Created";case dl.Accepted:return"Accepted";case dl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case dl.NoContent:return"No Content";case dl.ResetContent:return"Reset Content"
;case dl.PartialContent:return"Partial Content";case dl.MultiStatus:return"Multi Status";case dl.AlreadyReported:
return"Already Reported";case dl.IMUsed:return"IM Used";case dl.MultipleChoices:return"Multiple Choices"
;case dl.MovedPermanently:return"Moved Permanently";case dl.Found:return"Found";case dl.SeeOther:return"See Other"
;case dl.NotModified:return"Not Modified";case dl.TemporaryRedirect:return"Temporary Redirect"
;case dl.PermanentRedirect:return"Permanent Redirect";case dl.BadRequest:return"Bad Request";case dl.Unauthorized:
return"Unauthorized";case dl.PaymentRequired:return"Payment Required";case dl.Forbidden:return"Forbidden"
;case dl.NotFound:return"Not Found";case dl.MethodNotAllowed:return"Method Not Allowed";case dl.NotAcceptable:
return"Not Acceptable";case dl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case dl.RequestTimeout:
return"Request Timeout";case dl.Conflict:return"Conflict";case dl.Gone:return"Gone";case dl.LengthRequired:
return"Length Required";case dl.PreconditionFailed:return"Precondition Failed";case dl.PayloadTooLarge:
return"Payload Too Large";case dl.URITooLong:return"URI Too Long";case dl.UnsupportedMediaType:
return"Unsupported Media Type";case dl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case dl.ExpectationFailed:return"Expectation Failed";case dl.IAmATeapot:return"I Am a Teapot"
;case dl.UnprocessableEntity:return"Unprocessable Entity";case dl.Locked:return"Locked";case dl.FailedDependency:
return"Failed Dependency";case dl.TooEarly:return"Too Early";case dl.UpgradeRequired:return"Upgrade Required"
;case dl.PreconditionRequired:return"Precondition Required";case dl.TooManyRequests:return"Too Many Requests"
;case dl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case dl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case dl.InternalServerError:return"Internal Server Error";case dl.NotImplemented:
return"Not Implemented";case dl.BadGateway:return"Bad Gateway";case dl.ServiceUnavailable:return"Service Unavailable"
;case dl.GatewayTimeout:return"Gateway Timeout";case dl.HttpVersionNotSupported:return"Http Version Not Supported"
;case dl.VariantAlsoNegotiates:return"Variant Also Negotiates";case dl.InsufficientStorage:return"Insufficient Storage"
;case dl.LoopDetected:return"Loop Detected";case dl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case dl.NotExtended:return"Not Extended";case dl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:_l.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const vc=hc?require("fs").promises:void 0,pc=ac.createLogger(
"NodeRequestClient");class fc{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case Yl.GET:return this._getJson(t,r,n);case Yl.POST:return this._postJson(t,r,n)
;case Yl.PATCH:return this._patchJson(t,r,n);case Yl.PUT:return this._putJson(t,r,n);case Yl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await vc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void pc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void pc.debug(
"_checkSocketFile: ENOENT: ",e);throw pc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=wu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Cu.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?pc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(pc.warn(
"Warning! Request had already ended when the response was received."),pc.debug("Error from event: ",e)):(pc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(pc.warn(
"Warning! Request had already ended when the response was received."),pc.debug("Exception: ",e)):(pc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await _c.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Yl.GET,e,n,r).then(fc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Yl.PUT,e,n,r).then(fc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(Yl.POST,e,n,r).then(
fc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Yl.PATCH,e,n,r).then(fc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Yl.DELETE,e,n,r).then(fc._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw pc.error(`Unsuccessful response with status ${t}: `,e),new Ec(t,`Error ${t} for ${x(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class gc{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case Yl.GET:return this._getJson(t,r,n);case Yl.POST:return this._postJson(t,r,n)
;case Yl.PUT:return this._putJson(t,r,n);case Yl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gc._successResponse(e,Yl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gc._successResponse(e,Yl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>gc._successResponse(e,Yl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>gc._successResponse(e,Yl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(
e=>{throw new Ec(r,i,t,n,e)})}return e.json()}}const Tc=hc?require("http"):void 0,Sc=hc?require("https"):void 0,
mc=ac.createLogger("RequestClient");class Nc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(Yl.GET,e,t)}static postJson(e,t,r){return mc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(Yl.POST,e,r,t)}static patchJson(e,t,r){return mc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Yl.PATCH,e,r,t)}static putJson(e,t,r){return mc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Yl.PUT,e,r,t)}static deleteJson(e,t,r){return mc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Yl.DELETE,e,t,r)}static _initClient(){if(dc)return mc.debug("Detected browser environment"),
new gc(window.fetch.bind(window));if(hc)return new fc(Tc,Sc);throw new TypeError(
"Could not detect request client implementation")}}l(Nc,"_client",Nc._initClient()),(au=Zl=Zl||{}).JSON="json",
au.STRING="string",au.BOOLEAN="boolean",au.NUMBER="number",au.INTEGER="integer",su=Zl,au=["name","parameters",
"variables"];class Ac{static registerController(e){this._stepControllers.push(e)}static findController(t){return Wo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return Yo(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}l(Ac,"_stepControllers",[]);const yc=Ao(au,["name","steps"]),Rc=Ao(au
,["name","jobs"]),Cc=Ao(au,["name","stages"]);class wc{getName(){return this._name}constructor(e){l(this,"_name",void 0)
,l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Aa(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Bs(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=ks(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
Zl=eu=eu||{})[Zl.CONSTRUCTED=0]="CONSTRUCTED",Zl[Zl.STARTED=1]="STARTED",Zl[Zl.PAUSED=2]="PAUSED",
Zl[Zl.CANCELLED=3]="CANCELLED",Zl[Zl.FINISHED=4]="FINISHED",Zl[Zl.FAILED=5]="FAILED",El=eu,(eu=tu=tu||{}
).PIPELINE="fi.nor.pipeline",eu.JOB="fi.nor.pipeline.job",eu.STAGE="fi.nor.pipeline.stage",
eu.TASK="fi.nor.pipeline.task",eu.STEP="fi.nor.pipeline.step",eu.FILE="fi.nor.pipeline.step.file",
eu.SCRIPT="fi.nor.pipeline.step.script",eu.VARIABLE="fi.nor.pipeline.step.variable",eu.JSON="fi.nor.pipeline.step.json",
eu.CSV="fi.nor.pipeline.step.csv",eu.GIT="fi.nor.pipeline.step.git",vl=tu;const bc=ac.createLogger("JobController");(
tu=pl={}).JOB_CHANGED="JobController:jobChanged",tu.JOB_STARTED="JobController:jobStarted",
tu.JOB_PAUSED="JobController:jobPaused",tu.JOB_RESUMED="JobController:jobResumed",
tu.JOB_CANCELLED="JobController:jobCancelled",tu.JOB_FAILED="JobController:jobFailed",
tu.JOB_FINISHED="JobController:jobFinished";class Ic{constructor(e,t,r=[]){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,"_changedCallback",void 0),l(this,"_state",
void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!B(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,oe,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new wc(`JobController#${this._name}`),this._state=El.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Fi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=ks(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
bc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:vl.JOB,
state:this._state,name:this._name,steps:Fi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case El.STARTED:return!0;case El.PAUSED:case El.CONSTRUCTED:case El.CANCELLED:
case El.FINISHED:case El.FAILED:return!1}}isStarted(){switch(this._state){case El.PAUSED:case El.STARTED:return!0
;case El.CONSTRUCTED:case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}isPaused(){switch(this._state){
case El.PAUSED:return!0;case El.STARTED:case El.CONSTRUCTED:case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}
isCancelled(){switch(this._state){case El.CANCELLED:return!0;case El.PAUSED:case El.STARTED:case El.CONSTRUCTED:
case El.FINISHED:case El.FAILED:return!1}}isFinished(){switch(this._state){case El.FINISHED:case El.FAILED:
case El.CANCELLED:return!0;case El.CONSTRUCTED:case El.PAUSED:case El.STARTED:return!1}}isFailed(){switch(this._state){
case El.FAILED:return!0;case El.CONSTRUCTED:case El.FINISHED:case El.PAUSED:case El.STARTED:case El.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case El.FINISHED:return!0;case El.FAILED:case El.CONSTRUCTED:case El.PAUSED:
case El.STARTED:case El.CANCELLED:return!1}}start(){if(this._state!==El.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return bc.info(`Starting job ${this._name}`),this._state=El.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(pl.JOB_STARTED)&&this._observer.triggerEvent(
pl.JOB_STARTED,this),this._observer.hasCallbacks(pl.JOB_CHANGED)&&this._observer.triggerEvent(pl.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return bc.info(
`Pausing job ${this._name}`),this._state=El.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
pl.JOB_PAUSED)&&this._observer.triggerEvent(pl.JOB_PAUSED,this),this._observer.hasCallbacks(pl.JOB_CHANGED
)&&this._observer.triggerEvent(pl.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return bc.info(`Resuming job ${this._name}`),this._state=El.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(pl.JOB_RESUMED)&&this._observer.triggerEvent(
pl.JOB_RESUMED,this),this._observer.hasCallbacks(pl.JOB_CHANGED)&&this._observer.triggerEvent(pl.JOB_CHANGED,this),this}
stop(){if(this._state!==El.STARTED)throw new Error(`Job#${this._name} was not started`);return bc.info(
`Stopping job ${this._name}`),this._state=El.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
pl.JOB_CANCELLED)&&this._observer.triggerEvent(pl.JOB_CANCELLED,this),this._observer.hasCallbacks(pl.JOB_CHANGED
)&&this._observer.triggerEvent(pl.JOB_CHANGED,this),this}onCancelled(e){return this.on(pl.JOB_CANCELLED,e)}onChanged(e){
return this.on(pl.JOB_CHANGED,e)}onFailed(e){return this.on(pl.JOB_FAILED,e)}onFinished(e){return this.on(
pl.JOB_FINISHED,e)}onPaused(e){return this.on(pl.JOB_PAUSED,e)}onResumed(e){return this.on(pl.JOB_RESUMED,e)}onStarted(e
){return this.on(pl.JOB_STARTED,e)}getErrorString(){return Fi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Fi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){bc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=El.FAILED,this._observer.hasCallbacks(pl.JOB_FAILED)&&this._observer.triggerEvent(
pl.JOB_FAILED,this)):i.isCancelled()?(this._state=El.CANCELLED,this._observer.hasCallbacks(pl.JOB_CANCELLED
)&&this._observer.triggerEvent(pl.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=El.STARTED,this._steps[this._current].start(),n===El.PAUSED&&this._observer.hasCallbacks(pl.JOB_RESUMED
)&&this._observer.triggerEvent(pl.JOB_RESUMED,this)):(this._state=El.FINISHED,this._observer.hasCallbacks(
pl.JOB_FINISHED)&&this._observer.triggerEvent(pl.JOB_FINISHED,this))),this._observer.hasCallbacks(pl.JOB_CHANGED
)&&this._observer.triggerEvent(pl.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=El.PAUSED,
this._observer.hasCallbacks(pl.JOB_PAUSED)&&this._observer.triggerEvent(pl.JOB_PAUSED,this),this._observer.hasCallbacks(
pl.JOB_CHANGED)&&this._observer.triggerEvent(pl.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=El.STARTED,this._observer.hasCallbacks(pl.JOB_RESUMED)&&this._observer.triggerEvent(pl.JOB_RESUMED,this),
this._observer.hasCallbacks(pl.JOB_CHANGED)&&this._observer.triggerEvent(pl.JOB_CHANGED,this))}}l(Ic,"Event",pl)
;const Dc=ac.createLogger("StageController");(tu=fl={}).STAGE_STARTED="StageController:stageStarted",
tu.STAGE_PAUSED="StageController:stagePaused",tu.STAGE_RESUMED="StageController:stageResumed",
tu.STAGE_FINISHED="StageController:stageFinished",tu.STAGE_FAILED="StageController:stageFailed",
tu.STAGE_CANCELLED="StageController:stageCancelled",tu.STAGE_CHANGED="StageController:stageChanged";class Oc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!B(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=El.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new wc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Fi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:vl.STAGE,state:this._state,name:this._name,jobs:Fi(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case El.CANCELLED:return!0;case El.FINISHED:case El.FAILED:
case El.CONSTRUCTED:case El.PAUSED:case El.STARTED:return!1}}isFailed(){switch(this._state){case El.FAILED:return!0
;case El.CANCELLED:case El.FINISHED:case El.CONSTRUCTED:case El.PAUSED:case El.STARTED:return!1}}isFinished(){switch(
this._state){case El.FINISHED:case El.FAILED:case El.CANCELLED:return!0;case El.CONSTRUCTED:case El.PAUSED:
case El.STARTED:return!1}}isPaused(){switch(this._state){case El.PAUSED:return!0;case El.FAILED:case El.CANCELLED:
case El.FINISHED:case El.CONSTRUCTED:case El.STARTED:return!1}}isRunning(){switch(this._state){case El.STARTED:return!0
;case El.PAUSED:case El.FAILED:case El.CANCELLED:case El.FINISHED:case El.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case El.PAUSED:case El.STARTED:return!0;case El.FAILED:case El.CANCELLED:case El.FINISHED:
case El.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case El.FINISHED:return!0;case El.PAUSED:
case El.STARTED:case El.FAILED:case El.CANCELLED:case El.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
fl.STAGE_CANCELLED,e)}onChanged(e){return this.on(fl.STAGE_CHANGED,e)}onFailed(e){return this.on(fl.STAGE_FAILED,e)}
onFinished(e){return this.on(fl.STAGE_FINISHED,e)}onPaused(e){return this.on(fl.STAGE_PAUSED,e)}onResumed(e){
return this.on(fl.STAGE_RESUMED,e)}onStarted(e){return this.on(fl.STAGE_STARTED,e)}start(){if(
this._state!==El.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Dc.info(
`Starting stage ${this._name}`),this._state=El.STARTED,ks(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Dc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=El.FAILED,
this._observer.hasCallbacks(fl.STAGE_FAILED)&&this._observer.triggerEvent(fl.STAGE_FAILED,this)
):this._observer.hasCallbacks(fl.STAGE_STARTED)&&this._observer.triggerEvent(fl.STAGE_STARTED,this),
this._observer.hasCallbacks(fl.STAGE_CHANGED)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this),this}pause(){if(
this._state===El.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Dc.info(`Pausing stage ${this._name}`)
,this._state=El.PAUSED;var e=ks(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Dc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Dc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(fl.STAGE_PAUSED
)&&this._observer.triggerEvent(fl.STAGE_PAUSED,this),this._observer.hasCallbacks(fl.STAGE_CHANGED
)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this),this}resume(){if(this._state===El.STARTED)throw new Error(
`Stage#${this._name} was already started`);Dc.info(`Resuming stage ${this._name}`),this._state=El.STARTED;var e=ks(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Dc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Dc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(fl.STAGE_RESUMED
)&&this._observer.triggerEvent(fl.STAGE_RESUMED,this),this._observer.hasCallbacks(fl.STAGE_CHANGED
)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Dc.info(`Stopping stage ${this._name}`),this._state=El.CANCELLED;var e=ks(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Dc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Dc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Fi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Fi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=ks(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Dc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==El.FAILED?(this._state=El.FAILED,this._observer.hasCallbacks(fl.STAGE_FAILED
)&&this._observer.triggerEvent(fl.STAGE_FAILED,this),this._observer.hasCallbacks(fl.STAGE_CHANGED
)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this)):n&&this._state!==El.CANCELLED?(this._state=El.CANCELLED,
this._observer.hasCallbacks(fl.STAGE_CANCELLED)&&this._observer.triggerEvent(fl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(fl.STAGE_CHANGED)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this)
):this._state!==El.FINISHED&&(this._state=El.FINISHED,this._observer.hasCallbacks(fl.STAGE_FINISHED
)&&this._observer.triggerEvent(fl.STAGE_FINISHED,this),this._observer.hasCallbacks(fl.STAGE_CHANGED
)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this)))):(n=S(ks(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==El.PAUSED?(this._state=El.PAUSED,this._observer.hasCallbacks(fl.STAGE_PAUSED
)&&this._observer.triggerEvent(fl.STAGE_PAUSED,this),this._observer.hasCallbacks(fl.STAGE_CHANGED
)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this)):n||this._state!==El.PAUSED||(this._state=El.STARTED,
this._observer.hasCallbacks(fl.STAGE_RESUMED)&&this._observer.triggerEvent(fl.STAGE_RESUMED,this),
this._observer.hasCallbacks(fl.STAGE_CHANGED)&&this._observer.triggerEvent(fl.STAGE_CHANGED,this))}}l(Oc,"Event",fl)
;const Lc=ac.createLogger("PipelineController");(tu=gl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
tu.PIPELINE_PAUSED="PipelineController:pipelinePaused",tu.PIPELINE_RESUMED="PipelineController:pipelineResumed",
tu.PIPELINE_FINISHED="PipelineController:pipelineFinished",tu.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
tu.PIPELINE_FAILED="PipelineController:pipelineFailed",tu.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class Pc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!B(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new wc(`PipelineController#${this._name}`),this._state=El.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Fi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:vl.PIPELINE,state:this._state,name:this._name,
stages:Fi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case El.CANCELLED:return!0;case El.STARTED:case El.PAUSED:case El.CONSTRUCTED:case El.FINISHED:case El.FAILED:return!1}}
isFailed(){switch(this._state){case El.FAILED:return!0;case El.CANCELLED:case El.STARTED:case El.PAUSED:
case El.CONSTRUCTED:case El.FINISHED:return!1}}isFinished(){switch(this._state){case El.FAILED:case El.CANCELLED:
case El.FINISHED:return!0;case El.STARTED:case El.PAUSED:case El.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case El.PAUSED:return!0;case El.FAILED:case El.CANCELLED:case El.FINISHED:case El.STARTED:case El.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case El.STARTED:return!0;case El.PAUSED:case El.FAILED:case El.CANCELLED:
case El.FINISHED:case El.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case El.STARTED:case El.PAUSED:return!0
;case El.FAILED:case El.CANCELLED:case El.FINISHED:case El.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case El.FINISHED:return!0;case El.STARTED:case El.PAUSED:case El.FAILED:case El.CANCELLED:case El.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(gl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(gl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(gl.PIPELINE_FAILED,e)}onFinished(e){return this.on(gl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
gl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(gl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(gl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Lc.info(
`Pausing pipeline ${this._name}`),this._state=El.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
gl.PIPELINE_PAUSED)&&this._observer.triggerEvent(gl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
gl.PIPELINE_CHANGED)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Lc.info(`Resuming pipeline ${this._name}`),
this._state=El.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(gl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(gl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(gl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this),this}start(){if(this._state!==El.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Lc.info(`Starting pipeline ${this._name}`),this._state=El.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(gl.PIPELINE_STARTED)&&this._observer.triggerEvent(
gl.PIPELINE_STARTED,this),this._observer.hasCallbacks(gl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
gl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==El.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Lc.info(`Stopping pipeline ${this._name}`),this._state=El.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(gl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(gl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(gl.PIPELINE_CHANGED)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this),this}
getErrorString(){return Fi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Fi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Lc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=El.FAILED,
this._observer.hasCallbacks(gl.PIPELINE_FAILED)&&this._observer.triggerEvent(gl.PIPELINE_FAILED,this),Lc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=El.CANCELLED,this._observer.hasCallbacks(
gl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(gl.PIPELINE_CANCELLED,this),Lc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=El.STARTED;const o=this._stages[this._current].start();n===El.PAUSED&&this._observer.hasCallbacks(
gl.PIPELINE_RESUMED)&&this._observer.triggerEvent(gl.PIPELINE_RESUMED,this),Lc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=El.FINISHED,this._observer.hasCallbacks(gl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(gl.PIPELINE_FINISHED,this),Lc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(gl.PIPELINE_CHANGED)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=El.PAUSED,this._observer.hasCallbacks(gl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(gl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(gl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this),Lc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=El.STARTED,this._observer.hasCallbacks(gl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(gl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(gl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(gl.PIPELINE_CHANGED,this),Lc.info(`Pipeline ${this._name} was resumed`))}}l(Pc,"Event",gl
);const Uc=ac.createLogger("PipelineRunner");class $c{static registerController(e){Ac.registerController(e)}
static createStepController(e,t){const r=Ac.findController(e);if(void 0===r)throw new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Ic(t,e.name,
Fi(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new Oc(t,e.name,Fi(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new Pc(t,e.name,Fi(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ne(e)?(Uc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):re(e)?(Uc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):ee(e)?(
Uc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Uc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Uc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Uc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Uc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class Fc{static toString(...e){return Fi(e,
e=>ba(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return X(n)?Fi(n,e=>Fc.processVariables(e,i,o
,s,a)):z(n)?Yo(P(n),(e,t)=>{var r=n[t];return e[`${Fc.processVariables(t,i,o,s,a)}`]=Fc.processVariables(r,i,o,s,a),e},
{}):p(n)?Fc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=Nt(r)?r:e=>ti(r,e,o),Ja(t,n)&&za(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=Ta(e),Fc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=Ta(
t.substr(a,l-a)),h=(Fc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const kc=ac.createLogger("PipelineContext");class Mc{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",
void 0),l(this,"_parameters",void 0),l(this,"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,
"_lookupVariable",void 0),l(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return kc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=Fc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),kc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return ti(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return kc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return V(this._variables)||(
this._variables={}),_o(this._variables,e,t),kc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const Gc=ac.createLogger("runHttpResource"),jc=ac.createLogger(
"runLocalResource");(tu=Tl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",tu.M_ROOM_JOIN_RULES="m.room.join_rules",
tu.M_ROOM_MEMBERSHIP="m.room.membership",tu.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
tu.M_ROOM_GUEST_ACCESS="m.room.guest_access",tu.M_ROOM_CREATE="m.room.create",tu.M_FEDERATE="m.federate",
tu.M_ROOM_MEMBER="m.room.member",tu.M_PUSH_RULES="m.push_rules",tu.M_PRESENCE="m.presence",tu.M_SPACE="m.space",
tu.M_LOGIN_PASSWORD="m.login.password",tu.M_LOGIN_TOKEN="m.login.token",tu.M_ID_USER="m.id.user",
tu.FI_NOR_DELETED="fi.nor.deleted",tu.FI_NOR_FORM_DTO="fi.nor.form_dto",tu.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,tu.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",tu.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
tu.FI_NOR_AGENT_DTO="fi.nor.dto.agent",tu.FI_NOR_PIPELINE="fi.nor.pipeline",
tu.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Sl=Tl,(tu=ml=ml||{})[tu.UNAUTHENTICATED=0]="UNAUTHENTICATED",
tu[tu.AUTHENTICATING=1]="AUTHENTICATING",tu[tu.AUTHENTICATED=2]="AUTHENTICATED",
tu[tu.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
tu[tu.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(tu=Nl={}).M_USER_IN_USE="M_USER_IN_USE",
tu.M_INVALID_USERNAME="M_INVALID_USERNAME",tu.M_EXCLUSIVE="M_EXCLUSIVE",tu.M_FORBIDDEN="M_FORBIDDEN",Al=Nl
;const Hc=ac.createLogger("SimpleMatrixClient");(yl=yl||{}).EVENT="SimpleMatrixClient:event";class xc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?ml.AUTHENTICATED:ml.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new wc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Hc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Hc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(A(a=s=await Nc.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Hc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Hc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Hc.debug(
"Could not register user: ",e),!(e instanceof Ec))throw new Ec(hl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Ec(hl.Unauthorized):403===s?new Ec(hl.Forbidden
):429===s?new Ec(429):new Ec(hl.InternalServerError,"Failed to register user");if(!Ve(s=null==e?void 0:e.getBody())
)throw new Ec(hl.InternalServerError,"Failed to register user");switch(s.errcode){case Al.M_USER_IN_USE:throw new Ec(
hl.Conflict,"User already exists");case Al.M_INVALID_USERNAME:throw new Ec(hl.BadRequest,"Username invalid")
;case Al.M_EXCLUSIVE:throw new Ec(hl.Conflict,"User name conflicts with exclusive namespace");default:throw new Ec(
hl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Hc.debug("whoami: Fetching account whoami... ",r),n=await Nc.getJson(r,{Authorization:`Bearer ${t}`}),Hc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Hc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Hc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Hc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await Nc.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Hc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Hc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(A(
n=r=await Nc.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Hc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Hc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Hc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Ec))throw new Ec(hl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Ec(hl.Unauthorized
):403===r?new Ec(hl.Forbidden):429===r?new Ec(429):new Ec(hl.InternalServerError,"Failed to register user");if(!Ve(
r=null==e?void 0:e.getBody()))throw new Ec(hl.InternalServerError,"Failed to register user");switch(r.errcode){
case Al.M_USER_IN_USE:throw new Ec(hl.Conflict,"User already exists");case Al.M_INVALID_USERNAME:throw new Ec(
hl.BadRequest,"Username invalid");case Al.M_EXCLUSIVE:throw new Ec(hl.Conflict,
"User name conflicts with exclusive namespace");default:throw new Ec(hl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:Tl.M_LOGIN_PASSWORD,identifier:{type:Tl.M_ID_USER,user:r},
password:n},Hc.debug("Sending login with userId:",r),!(A(h=o=await Nc.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||A(_=h)&&I(_,["m.homeserver","m.identity_server"])&&A(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||A(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Hc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Hc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new xc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Hc.debug(
"Could not login: ",e),new Ec(hl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(A(n=r=await Nc.getJson(this._resolveHomeServerUrl(`/directory/room/${qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Hc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Hc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Ec&&e.getStatusCode()===hl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(A(
t=e=await Nc.getJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,de,We)))throw Hc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Hc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!V(i=await Nc.getJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),{Authorization:`Bearer ${n}`})))throw Hc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Hc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Ec&&e.getStatusCode()===hl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(A(s=o=await Nc.putJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Hc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Hc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Hc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await Nc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Hc.debug("forgetRoom: received: ",r)}catch(e){throw Hc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await Nc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Hc.debug("leaveRoom: received: ",r)}catch(e){throw Hc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!le(e))throw new TypeError(
`roomId invalid: ${e}`);if(!de(t))throw new TypeError(`userId invalid: ${t}`);if(Hc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await Nc.postJson(
this._resolveHomeServerUrl(`/rooms/${qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Hc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Hc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Hc.debug("Sending message with body:",t
),r=await Nc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,Hc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(Hc.debug("Creating room with body:",e),!(A(
e=t=await Nc.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&le(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw Hc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return Hc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(Hc.debug(
`Joining to room ${t} with body:`,e),!(A(i=n=await Nc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&le(null==i?void 0:i.room_id)))throw Hc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return Hc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw Hc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Hc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!V(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=tl(Fi(P(s),e=>{var t=s[e]
;return`${qe(e)}=${qe(t)}`}),"&"),!(A(t=e=await Nc.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||Me(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||je(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||we(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||He(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Be(
null==t?void 0:t.device_one_time_keys_count))))throw Hc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${Je(e)}`);return e}isAlreadyInTheRoom(
e){if(Ve(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===Al.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Bs(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(yl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Hc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Hc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Hc.info("Initial sync request started"),
this._state!==ml.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=ml.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),Hc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Hc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Hc.info("Timer started..."),this._state=ml.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Hc.error("No next_batch in the response: ",t),r=Ao(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),Bs(n,e=>{var t,r=(r=s[e],Ao([],
null!=r&&r.state?fe(null==r?void 0:r.state):[],null!=r&&r.timeline?Ne(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Ao([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),Bs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),Bs(o,e=>{var t=l[e],t=Ao([],fe(
null==t?void 0:t.state),Ne(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(xc,
"Event",yl),(tu=ru=ru||{}).PRIVATE_CHAT="private_chat",tu.PUBLIC_CHAT="public_chat",
tu.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Rl=ru,(ru=nu=nu||{}).INVITED="invited",ru.JOINED="joined",
ru.SHARED="shared",ru.WORLD_READABLE="world_readable",Cl=nu,(nu=iu=iu||{}).PUBLIC="public",nu.KNOCK="knock",
nu.INVITE="invite",nu.PRIVATE="private",nu.RESTRICTED="restricted",wl=iu,(iu=ou=ou||{}).CAN_JOIN="can_join",
iu.FORBIDDEN="forbidden",bl=ou;const Bc=ac.createLogger("MatrixCrudRepository");class Jc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:Sl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Bc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Bc.debug("joinedRooms = ",i),t=P(t),Bc.debug(
"invitedRooms = ",t),(t=ks(t,e=>!i.includes(e))).length){Bc.debug("Joining to rooms = ",t);let r=0;if(await Yo(t,async(e
,t)=>{await e;try{Bc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Bc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Bc.debug(
"Fetching results again after joining"),this.getAll()}return Yo(i,(e,i)=>{var t=n[i],r=ks(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&ka(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Ao(e,Fi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Fi(ks(e,
e=>ti(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Bc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Bc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Bc.debug(
"createItem: serviceAccountId = ",n),i=ks(hs(Ao(n?[n]:[],t||[])),e=>e!==o),Bc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Bc.debug("createItem: allowedGroups = ",n),t={[Sl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:Sl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Cl.SHARED}},{type:Sl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:bl.FORBIDDEN}}]
;void 0!==n&&s.push({type:Sl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:wl.RESTRICTED,allow:Fi(n,e=>({
type:Sl.M_ROOM_MEMBERSHIP,room_id:e}))}}),Bc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Bc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Bs(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Rl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Bc.debug(
"createItem: response = ",t),t=t.room_id,Bc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Bc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Bc.debug(
"response = ",JSON.stringify(n,null,2)),!V(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Fi(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!V(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Ec(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Bc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Ec(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Bc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Bc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Bc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Ec&&[401,403,404].includes(e.getStatusCode()))throw e;throw Bc.error(
`Error in deleteById(${t}): `,e),new Ec(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await Yo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Bc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const Wc=ac.createLogger("runMatrixResource"
);(Il=Il||{}).ON_EXIT="NodeSystemProcess:onExit";const Vc=ac.createLogger("NodeSystemProcess");class qc{constructor(e,t,
r,n=!0){l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,
"_stderrCallback",void 0),l(this,"_closeCallback",void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,
"_printToParentProcess",void 0),l(this,"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",
void 0),this._observer=new wc("NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,
this._printToParentProcess=n,this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this)
,this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=Nu.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(Il.ON_EXIT
)?this._observer.triggerEvent(Il.ON_EXIT,this):Vc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(qc,"Event",Il);const Kc=ac.createLogger(
"NodeSystem");class zc{constructor(){l(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Bs(this._tempFileNames,e=>{Kc.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){const t=yu.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}isFile(e){const t=yu.default.statSync(e)
;return t.isFile()}isDirectory(e){const t=yu.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e
)?this.isDirectory(e)?this.deleteDirectory(e):yu.default.unlinkSync(e):Kc.warn(`deleteFile: Path did not exist: ${e}`)}
deleteDirectory(e){this.pathExists(e)?yu.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):Kc.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r){return new qc(e,t,r)}createDirectory(e){
return yu.default.mkdirSync(e),this}getWorkingDirectory(){return process.cwd()}createTemporaryFile(){let e="";do{
var t=bu.default.randomBytes(20).toString("hex")}while(e=wu.default.join(this.getWorkingDirectory(),`${t}.tmp`),
yu.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file");return this._tempFileNames.push(e),e}}
(ou=Dl=Dl||{}).STRINGIFY="stringify",ou.PARSE="parse";const Xc=ac.createLogger("BaseStepController");(ou=Ol={}
).JSON_STARTED="BaseStepController:scriptStarted",ou.JSON_PAUSED="BaseStepController:scriptPaused",
ou.JSON_RESUMED="BaseStepController:scriptResumed",ou.JSON_CANCELLED="BaseStepController:scriptCancelled",
ou.JSON_FAILED="BaseStepController:scriptFailed",ou.JSON_FINISHED="BaseStepController:scriptFinished",
ou.JSON_CHANGED="BaseStepController:scriptChanged";class Yc{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(l(this,
"_context",void 0),l(this,"_observer",void 0),l(this,"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,
"_stepName",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,"_output",void 0),l(
this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,"_compiledOutput",void 0),
l(this,"_successResult",void 0),l(this,"_errorResult",void 0),!p(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!B(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!p(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!K(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=El.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new wc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case El.STARTED:return!0;case El.PAUSED:case El.CONSTRUCTED:case El.CANCELLED:case El.FINISHED:
case El.FAILED:return!1}}isStarted(){switch(this._state){case El.STARTED:case El.PAUSED:return!0;case El.CONSTRUCTED:
case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}isPaused(){switch(this._state){case El.PAUSED:return!0
;case El.CONSTRUCTED:case El.STARTED:case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}isFinished(){switch(
this._state){case El.CANCELLED:case El.FINISHED:case El.FAILED:return!0;case El.CONSTRUCTED:case El.STARTED:
case El.PAUSED:return!1}}isSuccessful(){switch(this._state){case El.FINISHED:return!0;case El.FAILED:case El.CANCELLED:
case El.CONSTRUCTED:case El.STARTED:case El.PAUSED:return!1}}isCancelled(){switch(this._state){case El.CANCELLED:
return!0;case El.FINISHED:case El.FAILED:case El.CONSTRUCTED:case El.STARTED:case El.PAUSED:return!1}}isFailed(){switch(
this._state){case El.FAILED:return!0;case El.CANCELLED:case El.FINISHED:case El.CONSTRUCTED:case El.STARTED:
case El.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==El.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=El.STARTED,!K(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${Fc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!K(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${Fc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${Fc.toString(this._output)}`);if(this._compiledOutput=n,
Xc.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Ol.JSON_STARTED)&&this._observer.triggerEvent(Ol.JSON_STARTED,this),
this._observer.hasCallbacks(Ol.JSON_CHANGED)&&this._observer.triggerEvent(Ol.JSON_CHANGED,this),!Nt(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,Tt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(Ol.JSON_STARTED,e)}onPaused(e
){return this.on(Ol.JSON_PAUSED,e)}onResumed(e){return this.on(Ol.JSON_RESUMED,e)}onCancelled(e){return this.on(
Ol.JSON_CANCELLED,e)}onFailed(e){return this.on(Ol.JSON_FAILED,e)}onFinished(e){return this.on(Ol.JSON_FINISHED,e)}
onChanged(e){return this.on(Ol.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){Xc.error(
"Action success: ",e),void 0!==this._compiledOutput?(Xc.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):Xc.info("No output target configured for result: ",e),
this._successResult=e,this._state=El.FINISHED,this._observer.hasCallbacks(Ol.JSON_FINISHED
)&&this._observer.triggerEvent(Ol.JSON_FINISHED,this),this._observer.hasCallbacks(Ol.JSON_CHANGED
)&&this._observer.triggerEvent(Ol.JSON_CHANGED,this)}_errorCloseAction(e){Xc.error("Action failed: ",e),
this._errorResult=e,this._state=El.FAILED,this._observer.hasCallbacks(Ol.JSON_FAILED)&&this._observer.triggerEvent(
Ol.JSON_FAILED,this),this._observer.hasCallbacks(Ol.JSON_CHANGED)&&this._observer.triggerEvent(Ol.JSON_CHANGED,this)}}l(
Yc,"Event",Ol),l(Yc,"State",El);const Qc=Ao(au,["name","json","action","output"]),Zc=ac.createLogger("JsonController")
;class ed extends Yc{static parseControllerModel(e){if(ze(e))return e}static isControllerModel(e){return ze(e)}
static createController(e,t){return new ed(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=Dl.STRINGIFY,i=void 0
){super(e,vl.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:Dl.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case Dl.STRINGIFY:case Dl.PARSE:return 1}}())throw Zc.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${Fc.toString(e)}`);if(e===Dl.STRINGIFY){if(!K(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${Fc.toString(t)}`);var r=JSON.stringify(t);if(!p(
r))throw Zc.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==Dl.PARSE
)throw Zc.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw Zc.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${Fc.toString(t)}`)
;return JSON.parse(t)}}(ou=Ll=Ll||{}).STRINGIFY="stringify",ou.PARSE="parse";const td=Ao(au,["name","csv","action",
"output"]),rd=ac.createLogger("CsvController");class nd extends Yc{static parseControllerModel(e){if(Qe(e))return e}
static isControllerModel(e){return Qe(e)}static createController(e,t){return new nd(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Ll.STRINGIFY,i=void 0){super(e,vl.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Ll.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Ll.STRINGIFY:case Ll.PARSE:return 1}}())throw rd.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${Fc.toString(e)}`);if(e===Ll.STRINGIFY
){if(!Ye(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${Fc.toString(t)}`)
;if(n="\n",!p(r=Fi(t,e=>{return[e,t,r]=[e,",",'"'],Fi(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Ll.PARSE)throw rd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw rd.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${Fc.toString(t)}`);if(n="\n",t=Ye(r=t)?r:(p(r
)||(r=`${r}`),Fi(ua(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Xe(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Ja(e,'"')&&za(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!Ye(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const id=Ao(au,["name","command","args","env"]),
od=ac.createLogger("BaseScriptController");(ou=Pl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
ou.SCRIPT_PAUSED="BaseScriptController:scriptPaused",ou.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
ou.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",ou.SCRIPT_FAILED="BaseScriptController:scriptFailed",
ou.SCRIPT_FINISHED="BaseScriptController:scriptFinished",ou.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class sd{constructor(e,t,r,n,i,o,s=[],a={}){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,
"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,"_stepName",void 0),l(this,"_name",void 0),l(this,
"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_closeCallback",void 0),l(this,
"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",void 0),l(this,"_systemProcess",void 0),
l(this,"_state",void 0),!p(r))throw new TypeError(`[${n}] invalid controller identifier: ${r}`);if(!p(n)
)throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(!B(i))throw new TypeError(`[${n}] name invalid: ${i}`)
;if(!p(o))throw new TypeError(`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,p,0))throw new TypeError(
`${n}#${i} must have a valid args: ${JSON.stringify(s)}`);if(!y(a,p,p))throw new TypeError(
`${n}#${i} must have a valid env: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,this._stepName=n,
this._context=e,this._state=El.CONSTRUCTED,this._name=i,this._command=o,this._args=s,this._env=a,this._observer=new wc(
`BaseScriptController#${i}`),this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,
this._compiledArgs=void 0,this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),
this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){
return this._state}getName(){return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`BaseScriptController#${this._name}`}getStateDTO(){return{type:this._controllerType,state:this._state,
name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(this._state){case El.STARTED:return!0
;case El.PAUSED:case El.CONSTRUCTED:case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}isStarted(){switch(
this._state){case El.STARTED:case El.PAUSED:return!0;case El.CONSTRUCTED:case El.CANCELLED:case El.FINISHED:
case El.FAILED:return!1}}isPaused(){switch(this._state){case El.PAUSED:return!0;case El.CONSTRUCTED:case El.STARTED:
case El.CANCELLED:case El.FINISHED:case El.FAILED:return!1}}isFinished(){switch(this._state){case El.CANCELLED:
case El.FINISHED:case El.FAILED:return!0;case El.CONSTRUCTED:case El.STARTED:case El.PAUSED:return!1}}isSuccessful(){
switch(this._state){case El.FINISHED:return!0;case El.FAILED:case El.CANCELLED:case El.CONSTRUCTED:case El.STARTED:
case El.PAUSED:return!1}}isCancelled(){switch(this._state){case El.CANCELLED:return!0;case El.FINISHED:case El.FAILED:
case El.CONSTRUCTED:case El.STARTED:case El.PAUSED:return!1}}isFailed(){switch(this._state){case El.FAILED:return!0
;case El.CANCELLED:case El.FINISHED:case El.CONSTRUCTED:case El.STARTED:case El.PAUSED:return!1}}start(){var e,t,r;if(
this._state!==El.CONSTRUCTED)throw new Error(`${this._stepName}#${this._name} was already started`);if(
this._state=El.STARTED,!p(e=this._context.compileModel(this._command)))throw new Error(
`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!y(
r=this._context.compileModel(this._env),p,p))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=r,od.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(Il.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
Pl.SCRIPT_STARTED)&&this._observer.triggerEvent(Pl.SCRIPT_STARTED,this),this._observer.hasCallbacks(Pl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Pl.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`${this._stepName}#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return od.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=El.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(Pl.SCRIPT_PAUSED)&&this._observer.triggerEvent(Pl.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(Pl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Pl.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess
)throw new Error("No process initialized");return od.info(`Resuming command "${this._command} ${this._args.join(" ")}"`)
,this._state=El.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(Pl.SCRIPT_RESUMED
)&&this._observer.triggerEvent(Pl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Pl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Pl.SCRIPT_CHANGED,this),this}stop(){if(this._state!==El.STARTED)throw new Error(
`${this._stepName}#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return od.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=El.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(Pl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
Pl.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(Pl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Pl.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(Pl.SCRIPT_STARTED,e)}onPaused(e){return this.on(Pl.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(Pl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Pl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
Pl.SCRIPT_FAILED,e)}onFinished(e){return this.on(Pl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Pl.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),od.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=El.FINISHED,this._observer.hasCallbacks(
Pl.SCRIPT_FINISHED)&&this._observer.triggerEvent(Pl.SCRIPT_FINISHED,this)):(this._state=El.FAILED,
this._observer.hasCallbacks(Pl.SCRIPT_FAILED)&&this._observer.triggerEvent(Pl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(Pl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Pl.SCRIPT_CHANGED,this)}}l(sd,"Event",Pl),l(
sd,"State",El);class ad extends sd{static parseControllerModel(e){if(Ze(e))return e}static isControllerModel(e){
return Ze(e)}static createController(e,t){return new ad(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){
super(e,vl.SCRIPT,"ScriptController","command",t,r,n,i)}}(Ul=Ul||{}).MKDIR="mkdir";const ld=Ao(au,["name","file",
"target","output"]),ud=ac.createLogger("FileController");class cd extends Yc{static parseControllerModel(e){if(et(e)
)return e}static isControllerModel(e){return et(e)}static createController(e,t){return new cd(e,t.name,t.target,t.file,
t.output)}constructor(e,t,r,n,i=void 0){super(e,vl.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(e!==Ul.MKDIR)throw ud.debug("run: action = ",e),new TypeError(
`[file#${this.getName()}] failed to compile the action property: ${Fc.toString(e)}`);if(e!==Ul.MKDIR)throw ud.debug(
"run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!f(t))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${Fc.toString(t)}`);return void 0===t?(t=n.createTemporaryFile(),
n.createDirectory(t),ud.info(`Created temporary directory: ${t}`)):(n.createDirectory(t),ud.info(
`Created directory: ${t}`)),t}}const dd=Ao(au,["name","variable","set"]);($l=$l||{}).SET="set",Fl=$l
;const hd=ac.createLogger("VariableController");class _d extends Yc{static parseControllerModel(e){if(tt(e))return e}
static isControllerModel(e){return tt(e)}static createController(e,t){return new _d(e,t.name,t.set,Fl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,vl.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==$l.SET)throw hd.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${Fc.toString(e)}`);if(e!==Fl.SET)throw hd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!K(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${Fc.toString(t)}`);return t}}const Ed=Ao(au,["name","git","url",
"target"]);(kl=kl||{}).CLONE="clone",Ml=kl;class vd extends sd{static parseControllerModel(e){if(rt(e))return e}
static isControllerModel(e){return rt(e)}static createController(e,t){if(t.git!==Ml.CLONE)throw new TypeError(
`Unknown git action: ${t.git}`);var r=t.target,n=t.url;return new vd(e,t.name,"git",["clone",n,r],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"})}constructor(e,t,r,n=[],i={}){super(e,vl.GIT,"GitController","git",t,r,
n,i)}}const pd=ac.createLogger("main");ac.setLogLevel(Ju),async function(t=[]){var r,n,i,o;let s;try{if(class{
static registerControllers(){$c.registerController(_d),$c.registerController(vd),$c.registerController(cd),
$c.registerController(ed),$c.registerController(nd),$c.registerController(ad)}}.registerControllers(),pd.debug(
`Loglevel ${ac.getLogLevelString()}`),r=tc,t.shift(),!t.shift())return console.log(H(r)),ul.ARGUMENT_PARSE_ERROR;if(
0===t.length)return console.log(H(r)),ul.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return console.log(H(r)),ul.OK;case 1:return console.log(function(e){const t=ks([zu?"LOCAL":"",Xu?"HTTP":"",
Yu?"MATRIX":"",Zu?"TEST":"",ec?"DEV":""],e=>!!e);return`${e} v${Vu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Vu}'
  BUILD_NODE_ENV              = '${qu}'
  BUILD_DATE                  = '${Ku}'
  BUILD_WITH_LOCAL_RESOURCES  = '${zu}'
  BUILD_WITH_HTTP_RESOURCES   = '${Xu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Yu}'
`}(r)),ul.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=cc.parseRunnerResource(n)))return pd.error(
`Unsupported argument: ${n}`),console.log(H(r)),ul.UNKNOWN_ARGUMENT;if(s=new zc,(o=await async function(e,t){switch(
t.type){case ol.HTTP:return Xu?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Nc.getJson(r.url,c)))return Gc.error(`Failed to load URL "${r.url}": `,o),
ul.RESOURCE_LOAD_FAILED;if(void 0===(s=ie(o)))return Gc.error(`Model from URL "${r.url}" was not valid: `,o),
ul.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Mc(t,a,l,ic,oc)
;let e=$c.createController(s,u);return Gc.info(`Running ${e.getName()} from ${r.url}`),
await $c.startAndWaitUntilFinished(e),Gc.info(`Successfully finished ${e.getName()} from ${r.url}`),ul.OK}catch(e){
return Gc.error("Error: ",e),ul.HTTP_RESOURCE_FAILED}}(e,t):ul.UNBUILD_FEATURE;case ol.LOCAL:return zu?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
gu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=ie(i=JSON.parse(n))))return jc.warn("Model was not valid: ",i),ul.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new Mc(t,s,a,ic,oc);let e=$c.createController(o,l);return jc.info(`Running ${e.getName(
)} from ${r.path}`),await $c.startAndWaitUntilFinished(e),jc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,ul.OK}catch(e){return jc.error("Error: ",e),ul.LOCAL_RESOURCE_FAILED}}(e,t):ul.UNBUILD_FEATURE;case ol.MATRIX:
return Yu?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,m,N,A,y,R,C;try{Wc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new xc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return ul.UNKNOWN_AUTHENTICATION_TYPE;e=new xc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return Wc.error("Could not detect agent user ID"),ul.UNKNOWN_AGENT_ID
;Wc.info(`Agent user ID: ${t}`);const w=new Jc(e,Sl.FI_NOR_AGENT_DTO);if(0===(C=await w.getAll()).length
)return Wc.debug("Detected no pools available."),ul.OK;T=(1===C.length?(Wc.debug(
"Detected single pool available. Picking it."),C[0]):(Wc.debug(
`Detected ${C.length} pools available. Picking one by random.`),C[Math.floor(Math.random()*C.length)])).id,Wc.info(
`Pool ID: ${T}`);const b=new Jc(e,Sl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Sl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),Wc.debug("runList = ",S);let r;if(0===S.length)return Wc.debug("Detected no work available."),ul.OK
;r=1===S.length?(Wc.debug("Detected single work available. Picking it."),S[0]):(Wc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return Wc.warn(`Work ID was already running: ${I}`),Wc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),Wc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),ul.CONFLICT;if(Wc.info(`Work ID: ${I}`),m=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,m),r=await b.findById(r.id),!r)return Wc.warn(
"The work item disappeared while we were selecting it."),ul.WORK_CANCELLED;if(I!==r.id)return Wc.error(
`The work item ID conflict: ${I} !== ${r.id}`),ul.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return Wc.error(""),ul.CONFLICT;if(Wc.debug(
"Work item secured to us! We can start the job."),void 0===(N=ie(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return Wc.warn("Work item did not contain correct pipeline model: ",r),
ul.RESOURCE_MODEL_INVALID;A=null==N?void 0:N.parameters,y=null==N?void 0:N.variables,R=new Mc(i,A,y,ic,oc)
;let n=$c.createController(N,R);await Ke(e,b,I,r,n);const D=n.onChanged(()=>{Ke(e,b,I,r,n).catch(e=>{Wc.error(
"Failed to save controller state: ",e)})});try{await $c.startAndWaitUntilFinished(n)}finally{D(),await Ke(e,b,I,r,n)}
return Wc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),Wc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),ul.OK}catch(e){return Wc.error("Error: ",e),
ul.MATRIX_RESOURCE_FAILED}}(e,t):ul.UNBUILD_FEATURE;default:return ul.UNKNOWN_RESOURCE_TYPE}}(s,i))!==ul.OK
)return o===ul.UNKNOWN_RESOURCE_TYPE?(pd.error(`Error NorPP${o}: ${j(o)}: Resource type was unknown: ${i.type}`),
console.log(H(r)),ul.UNKNOWN_RESOURCE_TYPE):(function(e){if(ka(e)&&!(e<0||255<e)){if(
ll.FATAL_SIGNAL_RANGE_START<=e&&e<=ll.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case ll.OK:case ll.GENERAL_ERRORS:
case ll.MISUSE_OF_SHELL_BUILTINS:case ll.ARGUMENT_PARSE_ERROR:case ll.UNKNOWN_ARGUMENT:case ll.UNKNOWN_RESOURCE_TYPE:
case ll.UNKNOWN_AUTHENTICATION_TYPE:case ll.RESOURCE_LOAD_FAILED:case ll.RESOURCE_MODEL_INVALID:
case ll.LOCAL_RESOURCE_FAILED:case ll.HTTP_RESOURCE_FAILED:case ll.MATRIX_RESOURCE_FAILED:case ll.UNIMPLEMENTED_FEATURE:
case ll.UNBUILD_FEATURE:case ll.FATAL_ERROR:case ll.USAGE:case ll.DATAERR:case ll.NOINPUT:case ll.NOUSER:case ll.NOHOST:
case ll.UNAVAILABLE:case ll.SOFTWARE:case ll.OSERR:case ll.OSFILE:case ll.CANTCREAT:case ll.IOERR:case ll.TEMPFAIL:
case ll.PROTOCOL:case ll.NOPERM:case ll.CONFIG:case ll.COMMAND_INVOKED_CANNOT_EXECUTE:case ll.COMMAND_NOT_FOUND:
case ll.INVALID_ARGUMENT_TO_EXIT:case ll.FATAL_SIGNAL_RANGE_START:case ll.FATAL_SIGNAL_RANGE_END:
case ll.EXIT_STATUS_OUT_OF_RANGE:case ll.UNKNOWN_AGENT_ID:case ll.WORK_CANCELLED:case ll.CONFLICT:return 1;default:
return}}}(o)?pd.error(`Error EX-${o}: ${j(o)}: for ${U(i.type)} resource ${n}`):pd.error(
`Error: Exit status ${o}: for ${U(i.type)} resource ${n}`),o)}while(1<=t.length);return ul.OK}catch(e){return pd.error(
"Fatal error: ",e),ul.FATAL_ERROR}finally{s&&s.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{
console.error("Error: ",e),process.exit(1)});
