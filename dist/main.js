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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new Bt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Wt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Un);return o.cache=new(u.Cache||Ln),o}
function v(e){return void 0===e}function c(e){return nr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!nr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Aa(e)}function p(e){return fa(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return ma(e)}function g(e){return v(e)||ma(e)}function T(e,t){return Ji(e,t)}
function S(e,t){return zi(e,t)}function A(e,t){return _t(e)&&S(ka(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,_t(e)&&S(L(e),t))}function m(e){return!!_t(e)&&!(e instanceof Date)&&!pt(e)&&!c(
e)&&N(e,p,void 0)}function R(e,t=p,r=void 0){return _t(e)&&!(e instanceof Date)&&!pt(e)&&!c(e)&&N(e,t,r)}function y(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!_t(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(pt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=jo(L(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=ka(e),n=Go(s,e=>!r(e)),t=L(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function w(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return y(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>T(e,e=>e(t))}function b(e){return _t(e)}function I(e,t){return b(e
)&&0===(r=t,Ps(L(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return da(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function P(e){if(void 0!==e&&""!==e)return`${e}`}function L(e,t=p){if(c(e
)){var r=Oi(e,(e,t)=>t);return Ps(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Ps(e,e=>t(e))):[]}function U(e){switch(e
){case Ja.HTTP:return"http";case Ja.LOCAL:return"local";case Ja.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function F(e){return m(e)&&function(){switch(null==e?void 0:e.type){
case Ba.NONE:case Ba.BASIC_AUTH:case Ba.BEARER_AUTH:return 1;default:return}}()}function $(e){return m(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===Wa.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if($(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:Wa.BASIC_AUTH,username:r,password:n
}}function M(e){return m(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===Wa.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:Wa.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:Wa.BEARER_AUTH,access_token:n}}function j(e){if(Va.FATAL_SIGNAL_RANGE_START<=e&&e<=Va.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-Va.FATAL_SIGNAL_RANGE_START}`;switch(e){case Va.OK:return"OK";case Va.GENERAL_ERRORS:
return"GENERAL_ERRORS";case Va.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case Va.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case Va.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case Va.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case Va.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case Va.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case Va.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case Va.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case Va.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case Va.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case Va.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case Va.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case Va.FATAL_ERROR:return"FATAL_ERROR"
;case Va.USAGE:return"USAGE";case Va.DATAERR:return"DATAERR";case Va.NOINPUT:return"NOINPUT";case Va.NOUSER:
return"NOUSER";case Va.NOHOST:return"NOHOST";case Va.UNAVAILABLE:return"UNAVAILABLE";case Va.SOFTWARE:return"SOFTWARE"
;case Va.OSERR:return"OSERR";case Va.OSFILE:return"OSFILE";case Va.CANTCREAT:return"CANTCREAT";case Va.IOERR:
return"IOERR";case Va.TEMPFAIL:return"TEMPFAIL";case Va.PROTOCOL:return"PROTOCOL";case Va.NOPERM:return"NOPERM"
;case Va.CONFIG:return"CONFIG";case Va.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case Va.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case Va.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case Va.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case Va.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case Va.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case Va.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case Va.WORK_CANCELLED:return"WORK_CANCELLED";case Va.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return bu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${wu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Cu?`

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
`:""}${yu?`

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
`}function J(e){if(Aa(e))switch(e){case Ka.OPTIONS:return"options";case Ka.GET:return"get";case Ka.POST:return"post"
;case Ka.PUT:return"put";case Ka.DELETE:return"delete";case Ka.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function x(e){return!(!fa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function B(e){return p(e)||Aa(e)||da(e)||ha(e)
}function W(e){return B(e)||d(e,C(W,v))||V(e)}function V(e){return m(e)&&N(e,p,C(W,v))}function q(e){return v(e)||V(e)}
function K(e){return B(e)||X(e)||z(e)}function z(e){return m(e)&&N(e,p,C(K,v))}function X(e){return d(e,C(K,v))}
function Y(e){return m(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===kl.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||da(r))||m(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===kl.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===kl.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===kl.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||m(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===kl.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return m(e)&&(v(
null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(v(null==e?void 0:e.variables)||V(
null==e?void 0:e.variables))}function Z(e){return Q(e)&&x(null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(
i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,void 0===(r=null==e?void 0:e.env)||R(r,n,i))&&I(e,Zu);var t
,r,n,i}function ee(e){return Q(e)&&x(null==e?void 0:e.name)&&K(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(
null==e?void 0:e.output)&&I(e,ec)}function te(e){return!(!Q(e)||!Z(e)&&!(Q(e)&&m(e)&&x(null==e?void 0:e.name)))}
function re(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,te,1)&&I(e,tc)}function ne(e){if(re(e)
)return e}function ie(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,re,1)&&I(e,rc)}function oe(e){
return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ie,1)&&I(e,nc)}function se(e){var t;return null!==(
t=null!==(t=null!==(t=function(e){if(oe(e))return e}(e))&&void 0!==t?t:function(e){if(ie(e))return e}(e)
)&&void 0!==t?t:ne(e))&&void 0!==t?t:null!==(e=null!==(e=function(e){if(Z(e))return e}(t=e))&&void 0!==e?e:function(e){
if(ee(e))return e}(t))&&void 0!==e?e:ne(t)}function ae(e){return b(e)&&pt(null==e?void 0:e.getName)&&pt(
null==e?void 0:e.isRunning)&&pt(null==e?void 0:e.isStarted)&&pt(null==e?void 0:e.isPaused)&&pt(
null==e?void 0:e.isCancelled)&&pt(null==e?void 0:e.isFinished)&&pt(null==e?void 0:e.isFailed)&&pt(
null==e?void 0:e.isSuccessful)&&pt(null==e?void 0:e.start)&&pt(null==e?void 0:e.pause)&&pt(null==e?void 0:e.resume)&&pt(
null==e?void 0:e.stop)&&pt(null==e?void 0:e.destroy)&&pt(null==e?void 0:e.toString)&&pt(null==e?void 0:e.toJSON)&&pt(
null==e?void 0:e.onStarted)&&pt(null==e?void 0:e.onPaused)&&pt(null==e?void 0:e.onResumed)&&pt(
null==e?void 0:e.onCancelled)&&pt(null==e?void 0:e.onFailed)&&pt(null==e?void 0:e.onFinished)&&pt(
null==e?void 0:e.onChanged)}function le(e){return e instanceof sc}function ue(e){return e instanceof lc}function ce(e){
return p(e)&&!!e&&"!"===e[0]}function de(e){try{return function(e){if(!p(e))throw new TypeError(
`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0])throw new TypeError(
`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}function he(e){return m(e)&&I(
e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t))&&g(
e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function _e(e){return p(e)&&!!e&&"@"===e[0]}
function Ee(e){return m(e)&&I(e,["content","type","sender"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||_e(null==e?void 0:e.sender))}function ve(e){return m(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||_e(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||Ee(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function pe(e){try{return function(e){if(!m(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${L(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!q(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!_e(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!Ee(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function fe(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ve(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||V(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function ge(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${L(e)}`);if(!V(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!V(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Te(e){return go([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Se(e){
return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,fe)}function Ae(e){try{return function(e){if(!m(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,fe))throw e=jo(null==e?void 0:e.events,e=>!fe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${ge(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ne(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&V(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&_e(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ve(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function me(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${L(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!_e(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!ve(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${pe(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Re(e){return go([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ye(e){
return m(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ne)&&da(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function we(e){try{return function(e){if(!m(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${L(e)}`);if(!d(
null==e?void 0:e.events,Ne)){var t=jo(null==e?void 0:e.events,e=>!Ne(e));throw new TypeError(
`Property "events" item was not correct: ${me(t)}`)}if(!da(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Ce(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,Ee)}function be(e){
return go([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ie(e){return m(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,Ee)}function De(e){return m(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function Oe(e){return m(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||he(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||Se(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||ye(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Ce(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Ie(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||De(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Pe(e){try{return function(e){if(!m(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!he(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!Se(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ae(e)}`);if(
!v(null==e?void 0:e.timeline)&&!ye(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${we(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Ce(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Ie(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!De(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return m(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||ve(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Ue(e){try{return function(e){if(!m(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${L(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Le)}function $e(e){try{return function(e){if(!m(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${L(e)}`);if(!d(null==e?void 0:e.events,Le))throw e=jo(
null==e?void 0:e.events,e=>!Le(e)),new TypeError(`Property "events" had invalid item: ${Ue(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function ke(e){return m(e)&&I(e,["invite_state"])&&Fe(
null==e?void 0:e.invite_state)}function Me(e){try{return function(e){if(!m(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${L(e)}`);if(
!Fe(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Ge(e){return m(e)&&I(e,[
"state","timeline","account_data"])&&Se(null==e?void 0:e.state)&&ye(null==e?void 0:e.timeline)&&Ie(
null==e?void 0:e.account_data)}function je(e){return m(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||R(
null==e?void 0:e.join,ce,Oe))&&(v(null==e?void 0:e.invite)||R(null==e?void 0:e.invite,ce,ke))&&(v(null==e?void 0:e.leave
)||R(null==e?void 0:e.leave,ce,Ge))}function He(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!R(null==e?void 0:e.join,ce,Oe))throw new TypeError(`Property "join" was invalid: ${w(
null==e?void 0:e.join,ce,Oe,de,Pe)}`);if(!v(null==e?void 0:e.invite)&&!R(null==e?void 0:e.invite,ce,ke)
)throw new TypeError(`Property "invite" was invalid: ${w(null==e?void 0:e.invite,ce,ke,de,Me)}`);if(!v(
null==e?void 0:e.leave)&&!R(null==e?void 0:e.leave,ce,Ge))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function Je(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Ee)}function xe(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,Ee)}function Be(e){return m(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,_e)&&d(null==e?void 0:e.left,_e)}function We(e){return R(e,p,E)}
function Ve(e){try{return function(e){if(!m(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!je(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${He(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!Je(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Ie(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!xe(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!Be(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!We(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function qe(e){return m(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||ha(null==e?void 0:e.avatar_url))}function Ke(e){
return m(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case cl.M_USER_IN_USE:
case cl.M_INVALID_USERNAME:case cl.M_EXCLUSIVE:case cl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function ze(e){return encodeURIComponent(e)}async function Xe(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,ll.FI_NOR_PIPELINE_STATE,"",i.toJSON())}var Ye,Qe,Ze,et,tt,rt,nt,it,ot,
st,at,lt,ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,Nt,mt,Rt,yt,wt,Ct,bt,It,Dt,Ot,Pt,Lt,Ut,Ft,$t,kt,Mt,Gt,jt,Ht,Jt,xt,Bt,Wt,
Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,Ar,Nr,mr,Rr,yr,wr,Cr,br,Ir,Dr,Or,
Pr,Lr,Ur,Fr,$r,kr,Mr,Gr,jr,Hr,Jr,xr,Br,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,
Tn,Sn,An,Nn,mn,Rn,yn,wn,Cn,bn,In,Dn,On,Pn,Ln,Un,Fn,$n,kn,Mn,Gn,jn,Hn,Jn,xn,Bn,Wn,Vn,qn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,
oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,Ni,mi,Ri,yi,wi,Ci,bi,Ii,Di,Oi,Pi,Li,Ui,Fi,$i,ki,Mi,Gi,ji,Hi,Ji,xi,Bi,
Wi,Vi,qi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,Ao,No,mo,Ro,yo,wo,Co,bo,Io,Do,Oo,
Po,Lo,Uo,Fo,$o,ko,Mo,Go,jo,Ho,Jo,xo,Bo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,
gs,Ts,Ss,As,Ns,ms,Rs,ys,ws,Cs,bs,Is,Ds,Os,Ps,Ls,Us,Fs,$s,ks,Ms,Gs,js,Hs,Js,xs,Bs,Ws,Vs,qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,
ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,Na,ma,Ra,ya,wa,Ca,ba,Ia,Da,Oa,Pa,La,Ua,Fa,$a,ka,Ma,Ga,ja,Ha,Ja,xa,
Ba,Wa,Va,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,Tl,Sl,Al,Nl,ml,Rl,yl,wl,Cl,bl,Il,
Dl,Ol,Pl,Ll,Ul,Fl,$l,kl,Ml,Gl,jl,Hl,Jl,xl,Bl,Wl,Vl,ql,Kl,zl=require("fs"),Xl=require("querystring"),Yl=require("url"),
Ql=require("path"),Zl=require("child_process"),eu=e(zl),tu=t(Xl),ru=e(Yl),nu=e(Ql),
iu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ou=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},su=function(){
this.__data__=[],this.size=0},au=function(e,t){return e===t||e!=e&&t!=t},lu=au,uu=function(e,t){for(var r=e.length;r--;
)if(lu(e[r][0],t))return r;return-1},cu=uu,du=Array.prototype,hu=du.splice,_u=uu,Eu=uu,vu=function(e){return-1<Eu(
this.__data__,e)},pu=uu,fu=su,gu=function(e){var t=this.__data__;return!((e=cu(t,e))<0||(e==t.length-1?t.pop():hu.call(t
,e,1),--this.size,0))},Tu=function(e){var t=this.__data__;return(e=_u(t,e))<0?void 0:t[e][1]},Su=vu,Au=function(e,t){
var r=this.__data__,n=pu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=fu,
r.prototype.delete=gu,r.prototype.get=Tu,r.prototype.has=Su,r.prototype.set=Au,ot=Sl=r,Al=function(){
this.__data__=new ot,this.size=0},Hs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
gl=function(e){return this.__data__.get(e)},Tl=function(e){return this.__data__.has(e)},
yl=Nl="object"==typeof iu&&iu&&iu.Object===Object&&iu,Cl="object"==typeof self&&self&&self.Object===Object&&self,gr=wl=(
Zo=yl||Cl||Function("return this")()).Symbol,Gl=Object.prototype,st=Gl.hasOwnProperty,at=Gl.toString,
lt=gr?gr.toStringTag:void 0,Tr=Object.prototype,ut=Tr.toString,ct=function(e){var t,r,n=st.call(e,lt),i=e[lt];try{t=!(
e[lt]=void 0)}catch(e){}return r=at.call(e),t&&(n?e[lt]=i:delete e[lt]),r},dt=function(e){return ut.call(e)},ht=(xs=wl
)?xs.toStringTag:void 0,Et=bl=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
ht&&ht in Object(e)?ct:dt)(e)},vt=_t=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
pt=function(e){return!!vt(e)&&("[object Function]"==(e=Et(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Sr=Zo["__core-js_shared__"],
fl=/[^.]+$/.exec((Vt=Sr)&&Vt.keys&&Vt.keys.IE_PROTO||""),ft=fl?"Symbol(src)_1."+fl:"",qt=Function.prototype,
gt=qt.toString,Tt=pt,St=function(e){return!!ft&&ft in e},At=_t,Nt=Wr=function(e){if(null!=e){try{return gt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Nr=/[\\^$.*+?()[\]{}|]/g,mt=/^\[object .+?Constructor\]$/,
Js=Function.prototype,Ar=Object.prototype,Xl=Js.toString,Yl=Ar.hasOwnProperty,Rt=RegExp("^"+Xl.call(Yl).replace(Nr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=function(e){return!(!At(e
)||St(e))&&(Tt(e)?Rt:mt).test(Nt(e))},wt=function(e,t){return null==e?void 0:e[t]},du=(Ql=function(e,t){return t=wt(e,t)
,yt(t)?t:void 0})(Zo,"Map"),uu=Ql(Object,"create"),bt=Ct=su=uu,Vl=Object.prototype,It=Vl.hasOwnProperty,Dt=su,
ql=Object.prototype,Ot=ql.hasOwnProperty,Pt=su,vu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Kl=function(e){var t,r=this.__data__;return bt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:It.call(r,e)?r[e]:void 0},fu=function(e){var t=this.__data__;return Dt?void 0!==t[e]:Ot.call(t,e)},
gu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Pt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Ct?Ct(null):{},this.size=0},i.prototype.delete=vu,i.prototype.get=Kl,
i.prototype.has=fu,i.prototype.set=gu,Lt=i,Ut=Sl,Ft=du,Tu=function(){this.size=0,this.__data__={hash:new Lt,map:new(
Ft||Ut),string:new Lt}},$t=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},jt=Gt=Mt=kt=function(e,t){
return e=e.__data__,$t(t)?e["string"==typeof t?"string":"hash"]:e.map},Su=function(e){return e=kt(this,e).delete(e),
this.size-=e?1:0,e},Au=function(e){return Mt(this,e).get(e)},iu=function(e){return Gt(this,e).has(e)},Nl=function(e,t){
var r=jt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Tu,o.prototype.delete=Su,
o.prototype.get=Au,o.prototype.has=iu,o.prototype.set=Nl,Jt=du,xt=Cl=o,Bt=Ht=Sl,Yo=Hs,Gl=gl,gr=Tl,Tr=function(e,t){var r
,n=this.__data__;if(n instanceof Ht){if(r=n.__data__,!Jt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new xt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Al,s.prototype.delete=Yo,
s.prototype.get=Gl,s.prototype.has=gr,s.prototype.set=Tr,xs=s,Wt=Cl,Sr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Sr,Kt=Vt=a,zt=fl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},Xt=qt=function(e,t){return e.has(t)},Js=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new Kt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!zt(t,function(e,t){if(!Xt(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Ar=Zo.Uint8Array,Yt=Ar,Qt=au,Zt=Js,er=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},tr=Xl=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Nr=(Yl=wl)?Yl.prototype:void 0,rr=Nr?Nr.valueOf:void 0,uu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Yt(e),new Yt(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return Qt(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=er;case"[object Set]":return l=l||tr,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=Zt(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(rr)return rr.call(e)==rr.call(t)}return!1},Vl=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},ql=Array.isArray,ir=Vl,or=nr=ql,su=function(e,t,r){
return t=t(e),or(e)?t:ir(t,r(e))},sr=vu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Kl=Object.prototype,ar=Kl.propertyIsEnumerable,fu=(lr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),sr(lr(t),function(e){return ar.call(t,e)}))}:function(){return[]},gu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},ur=bl,Tu=function(e){return cr(e)&&"[object Arguments]"==ur(e)},
dr=cr=Su=function(e){return null!=e&&"object"==typeof e},Au=Object.prototype,hr=Au.hasOwnProperty,
_r=Au.propertyIsEnumerable,iu=Tu(function(){return arguments}())?Tu:function(e){return dr(e)&&hr.call(e,"callee"
)&&!_r.call(e,"callee")},Nl=Zo,Sl=function(){return!1},Nl=(Nl=(Al=(Tl=(Al=(Tl=(gl=Hs={exports:{}}).exports
)&&!Tl.nodeType&&Tl)&&gl&&!gl.nodeType&&gl)&&Tl.exports===Al)?Nl.Buffer:void 0)?Nl.isBuffer:void 0,gl.exports=Sl=Nl||Sl,
Er=/^(?:0|[1-9]\d*)$/,Yo=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Er.test(e))&&-1<e&&e%1==0&&e<t},vr=bl,pr=Gl=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},fr=Su,gr="[object Arguments]",Tr="[object Array]",
Sr="[object Boolean]",Ar="[object Date]",Yl="[object Error]",Nr="[object Function]",ql="[object Map]",
Au="[object Object]",Tu="[object RegExp]",Tl="[object Set]",Al="[object String]",Nl="[object WeakMap]",
gl="[object ArrayBuffer]",Sl="[object DataView]",(mr={}
)["[object Float32Array]"]=mr["[object Float64Array]"]=mr["[object Int8Array]"]=mr["[object Int16Array]"]=mr["[object Int32Array]"]=mr["[object Uint8Array]"]=mr["[object Uint8ClampedArray]"]=mr["[object Uint16Array]"]=mr["[object Uint32Array]"]=!0
,
mr[gr]=mr[Tr]=mr[gl]=mr[Sr]=mr[Sl]=mr[Ar]=mr[Yl]=mr[Nr]=mr[ql]=mr["[object Number]"]=mr[Au]=mr[Tu]=mr[Tl]=mr[Al]=mr[Nl]=!1
,Kl=function(e){return fr(e)&&pr(e.length)&&!!mr[vr(e)]},Au=function(t){return function(e){return t(e)}},Tu=yl,Nl=(Nl=(
Al=Tl={exports:{}}).exports)&&!Nl.nodeType&&Nl,Nl=(ml=Nl&&Al&&!Al.nodeType&&Al)&&ml.exports===Nl,Rl=Nl&&Tu.process,
Tu=function(){try{return ml&&ml.require&&ml.require("util").types||Rl&&Rl.binding&&Rl.binding("util")}catch(e){}}(),
Al.exports=Tu,yl=Kl,Tu=(Al=(Nl=Tl.exports)&&Nl.isTypedArray)?Au(Al):yl,Rr=gu,yr=iu,wr=nr,Cr=Hs.exports,br=Yo,Ir=Kl=Tu,
Nl=Object.prototype,Dr=Nl.hasOwnProperty,Al=function(e,t){var r,n=wr(e),i=!n&&yr(e),o=!n&&!i&&Cr(e),s=!n&&!i&&!o&&Ir(e),
a=n||i||o||s,l=a?Rr(e.length,String):[],u=l.length;for(r in e)!t&&!Dr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||br(r,u))||l.push(r);return l},
Or=Object.prototype,yl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Or)},
Bl=Object.keys,Wl=Object,Pr=yl,Lr=function(e){return Bl(Wl(e))},Tu=Object.prototype,Ur=Tu.hasOwnProperty,Fr=pt,$r=Gl,
kr=Al,Mr=function(e){var t,r;if(!Pr(e))return Lr(e);for(r in t=[],Object(e))Ur.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Gr=Nl=function(e){return null!=e&&$r(e.length)&&!Fr(e)},jr=su,Hr=fu,Jr=yl=function(e){return(Gr(e)?kr:Mr)(e)}
,xr=function(e){return jr(e,Jr,Hr)},gu=Object.prototype,Br=gu.hasOwnProperty,Tu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=xr(e),T=g.length;if(T!=xr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:Br.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Al=Ql(Zo,
"DataView"),su=du,fu=Ql(Zo,"Promise"),du=gu=Ql(Zo,"Set"),Zo=Ql(Zo,"WeakMap"),Vr=bl,Kr="[object Map]",
zr="[object Promise]",Xr="[object Set]",Yr="[object WeakMap]",Qr="[object DataView]",Zr=(qr=Wr)(Wr=Al),en=qr(su),tn=qr(
fu),rn=qr(du),nn=qr(Zo),Al=Vr,(Wr&&Al(new Wr(new ArrayBuffer(1)))!=Qr||su&&Al(new su)!=Kr||fu&&Al(fu.resolve()
)!=zr||du&&Al(new du)!=Xr||Zo&&Al(new Zo)!=Yr)&&(Al=function(e){var t=Vr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?qr(e):"")switch(e){case Zr:return Qr;case en:return Kr;case tn:return zr
;case rn:return Xr;case nn:return Yr}return t}),on=xs,sn=Js,an=uu,ln=Tu,un=Al,cn=nr,dn=Hs.exports,hn=Kl,
_n="[object Arguments]",En="[object Array]",vn="[object Object]",du=Object.prototype,pn=du.hasOwnProperty,fn=function(e,
t,r,n,i,o){var s,a,l=cn(e),u=cn(t),c=l?En:un(e),d=u?En:un(t),h=(c=c==_n?vn:c)==vn,u=(d=d==_n?vn:d)==vn;if((d=c==d)&&dn(e
)){if(!dn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new on,l||hn(e)?sn(e,t,r,n,i,o):an(e,t,c,r,n,i,o)):1&r||(
s=h&&pn.call(e,"__wrapped__"),a=u&&pn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new on,ln(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new on)},Tn=xs,Sn=Zo=function e(t,r,n,i,o){return t===r||(null==t||null==r||!gn(t)&&!gn(r
)?t!=t&&r!=r:fn(t,r,n,i,e,o))},An=_t,Nn=Js=function(e){return e==e&&!An(e)},mn=yl,Rn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Tn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Sn(a,s,3,n,l):u))return!1;return!0},yn=function(e){for(var t,r,n=mn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Nn(r)];return n},wn=uu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Tu=function(t){var r=yn(t);return 1==r.length&&r[0][2]?wn(r[0][0],r[0][1]):function(e){return e===t||Rn(e,t,r)}},Cn=bl,
bn=gn=Su,In=nr,Dn=Al=function(e){return"symbol"==typeof e||bn(e)&&"[object Symbol]"==Cn(e)},
On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pn=/^\w*$/,Hs=function(e,t){if(In(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Dn(e))||Pn.test(e)||!On.test(e)||null!=t&&e in Object(t)},
Ln=Cl,Un="Expected a function",u.Cache=Ln,
Fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$n=/\\(\\)?/g,fu=0
,xl=(fu=u(fu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Fn,function(e,t,r,n){i.push(
r?n.replace($n,"$1"):t||e)}),i},function(e){return 500===xl.size&&xl.clear(),e})).cache,kn=ou,xs=(du=wl
)?du.prototype:void 0,jn=xs?xs.toString:void 0,Hn=Cl=function e(t){if("string"==typeof t)return t;if(Mn(t))return kn(t,e
)+"";if(Gn(t))return jn?jn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Bn=fu,Wn=du=function(e){
return null==e?"":Hn(e)},Vn=Gn=Al,Yn=qn=xs=function(e,t){return Jn(e)?e:xn(e,t)?[e]:Bn(Wn(e))},Qn=iu,ti=Gl,ni=function(e
,t){return null!=e&&t in Object(e)},ii=Kl=function(e,t,r){for(var n,i,o=(t=Yn(t,e)).length,s=!(n=-1);++n<o&&(i=ri(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ti(o)&&ei(i,o)&&(Zn(e)||Qn(e))},oi=Zo,
si=Xn=function(e,t,r){return void 0===(t=null==e?void 0:zn(e,t))?r:t},ai=function(e,t){return null!=e&&ii(e,t,ni)},ui=Js
,ci=uu,hi=zn=Gl=function(e,t){for(var r=0,n=(t=qn(t,e)).length;null!=e&&r<n;)e=e[Kn(t[r++])];return r&&r==n?e:void 0},
_i=function(t){return function(e){return null==e?void 0:e[t]}},Ei=function(t){return function(e){return hi(e,t)}},
vi=li=xn=Hs,pi=di=ri=Kn=Zo=function(e){if("string"==typeof e||Vn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
fi=Tu,gi=function(r,n){return li(r)&&ui(n)?ci(di(r),n):function(e){var t=si(e,r);return void 0===t&&t===n?ai(e,r):oi(n,t
,3)}},Ti=Js=function(e){return e},Si=Zn=Jn=Mn=nr,Ai=function(e){return vi(e)?_i(pi(e)):Ei(e)},Ni=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},mi=yl,Ci=ou,Ii=Hs=function(e,n){
var i=-1,o=wi(e)?Array(e.length):[];return yi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Oi=function(e,t){return(Di(e)?Ci:Ii
)(e,bi(t))},Li=au,Ui=wi=Ri=Nl,Fi=ei=Yo,$i=_t,ki=fl,Gi=function(e,n){var i;return Pi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Ji=function(e,t,r){var n=ji(e)?ki:Gi;return r&&Hi(e,t,r)&&(t=void 0),n(e,Mi(t))},xi=Pi=yi=fl=Tu=function(e,t){
if(null==e)return e;if(!Ri(e))return e&&Ni(e,t,mi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},Bi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Wi=function(e,n){
var i=!0;return xi(e,function(e,t,r){return i=!!n(e,t,r)}),i},Vi=Mi=bi=uu=function(e){
return"function"==typeof e?e:null==e?Ti:"object"==typeof e?Si(e)?gi(e[0],e[1]):fi(e):Ai(e)},qi=ji=Di=nr,
Ki=Hi=Tu=function(e,t,r){if(!$i(r))return!1;var n=typeof t;return!!("number"==n?Ui(r)&&Fi(t,r.length
):"string"==n&&t in r)&&Li(r[t],e)},zi=function(e,t,r){var n=qi(e)?Bi:Wi;return r&&Ki(e,t,r)&&(t=void 0),n(e,Vi(t))},
Xi=Ql,Ql=function(){try{var e=Xi(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Yi=Ql,Qi=function(e,t,r){
"__proto__"==t&&Yi?Yi(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},Zi=au,au=Object.prototype,
eo=au.hasOwnProperty,to=function(e,t,r){var n=e[t];eo.call(e,t)&&Zi(n,r)&&(void 0!==r||t in e)||Qi(e,t,r)},ro=xs,no=Yo,
oo=Zo,so=function(e,t,r,n){var i,o,s,a,l,u,c;if(!io(e))return e;for(i=-1,s=(o=(t=ro(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=oo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=io(c)?c:no(t[i+1])?[]:{})),to(a,l,u),a=a[l]}return e},ao=function(e,t,r){return null==e?e:so(e,t,r)},lo=iu
,co=(au=wl)?au.isConcatSpreadable:void 0,_o=function(e){return uo(e)||lo(e)||!!(co&&e&&e[co])},Eo=ho=Vl,
vo=xs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||_o,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):ho(o,s
):i||(o[o.length]=s);return o},po=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
fo=uo=nr,go=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return Eo(fo(t)?po(t):[t],vo(e,1))},To=uu,So=Nl,Ao=yl,Yo=function(o){return function(e,t,r){var n,
i=Object(e);return So(e)||(n=To(t),e=Ao(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
Zo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},No=/\s/,mo=function(
e){for(var t=e.length;t--&&No.test(e.charAt(t)););return t},Ro=/^\s+/,yo=iu=function(e){return e&&e.slice(0,mo(e)+1
).replace(Ro,"")},wo=io=_t,Co=Al,bo=/^[-+]0x[0-9a-f]+$/i,Io=/^0b[01]+$/i,Do=/^0o[0-7]+$/i,Oo=parseInt,Po=function(e){
var t;return"number"==typeof e?e:Co(e)?NaN:(wo(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=wo(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=yo(e),(t=Io.test(e))||Do.test(e)?Oo(e.slice(2),t?2:8):bo.test(e)?NaN:+e))},
Lo=17976931348623157e292,Uo=function(e){return e?(e=Po(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Lo:0===e?e:0},Fo=Zo,$o=uu
,ko=wl=function(e){var t=Uo(e),e=t%1;return t==t?e?t-e:t:0},Mo=Math.max,au=Yo(Go=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:ko(r))<0&&(r=Mo(n+r,0)),Fo(e,$o(t),r)):-1}),jo=au,Ho=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Jo=fl,xo=uu,Bo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Wo=nr,Vo=function(e,t,r){var n=Wo(e)?Ho:Bo,i=arguments.length<3
;return n(e,xo(t),r,i,Jo)},Vl=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},qo=Zo,Ko=function(e){return e!=e},zo=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},Xo=Nl=function(e,t,r){return t==t?zo(e,t,r):qo(e,Ko,r)},
Yo=function(e,t){return!(null==e||!e.length)&&-1<Xo(e,t,0)},au=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},Zo=function(){},Zo=(Qo=gu)&&1/Xl(new Qo([,-0]))[1]==1/0?function(e){return new Qo(e)
}:Zo,es=Vt,ts=Yo,rs=au,ns=qt,is=Zo,os=Xl,ss=function(e,t,r){var n,i,o,s,a=-1,l=ts,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=rs;else if(200<=u){if(n=t?null:is(e))return os(n);c=!1,l=ns,h=new es}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},as=function(e){return e&&e.length?ss(e):[]},ls=Al,us=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=ls(e),s=void 0!==t,a=null===t,l=t==t,u=ls(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},cs=ou,ds=Gl,hs=uu,_s=Hs,Es=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,vs=Au,ps=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=us(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},fs=Js,gs=nr,Hs=function(e,n,r){var i;return n=n.length?cs(n
,function(t){return gs(t)?function(e){return ds(e,1===t.length?t[0]:t)}:t}):[fs],i=-1,n=cs(n,vs(hs)),e=_s(e,function(t,e
,r){return{criteria:cs(n,function(e){return e(t)}),index:++i,value:t}}),Es(e,function(e,t){return ps(e,t,r)})},
Ts=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ss=Math.max,Au=function(o,s,a){return s=Ss(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ss(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ts(o,this,e)}},As=function(e){return function(){return e}},Ns=Ql,
ms=Date.now,jl=Ns?function(e,t){return Ns(e,"toString",{configurable:!0,enumerable:!1,value:As(t),writable:!0})}:Js,
Rs=xs,ys=Hs,ws=Tu,function(){var e=ms(),t=16-e+ +Jl;if(Jl=e,0<t){if(800<=++Hl)return}else Hl=0;jl.apply(void 0,arguments
)}(Au(Gl=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ws(e,t[0],t[1])?t=[]:2<r&&ws(t[0],t[1],t[2])&&(t=[
t[0]]),ys(e,Rs(t,1),[])},void(Jl=Hl=0),Js),Gl+""),bs=vu,Is=function(e,n){var i=[];return Cs(e,function(e,t,r){n(e,t,r
)&&i.push(e)}),i},Ds=uu,Ps=function(e,t){return(Os(e)?bs:Is)(e,Ds(t))},Ls=Js,Us=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Fs=Cs=fl,$s=function(e){return"function"==typeof e?e:Ls},
ks=Os=nr,Ms=function(e,t){return(ks(e)?Us:Fs)(e,$s(t))},Gs=Vl,Au=function(e,t,r){var n=e.length;return r=void 0===r?n:r,
!t&&n<=r?e:Gs(e,t,r)},js=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
Ql=function(e){return js.test(e)},(xs=Tl.exports)&&xs.isRegExp,Hs=function(e){return e.split("")},vu="["+(
Tu="\\ud800-\\udfff")+"]",Vl=(uu="[\\ufe0e\\ufe0f]?")+"(?:"+(Js="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(
fl="\\ud83c[\\udffb-\\udfff]")+")?(?:\\u200d(?:"+[Tl="[^"+Tu+"]",xs="(?:\\ud83c[\\udde6-\\uddff]){2}",
Tu="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")"+uu+"(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",vu="(?:"+[Tl+Js+"?",Js,xs,Tu,
vu].join("|")+")",Bs=RegExp(fl+"(?="+fl+")|"+vu+Vl,"g"),Ws=Hs,Vs=Ql,qs=function(e){return e.match(Bs)||[]},zs=Ks=Nl,
Xs=Cl,Ys=iu,Qs=Au,Zs=function(e,t){for(var r=e.length;r--&&-1<Ks(t,e[r],0););return r},ea=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<zs(t,e[r],0););return r},ta=function(e){return(Vs(e)?qs:Ws)(e)},ra=du,na=function(e,t,r){return(
e=ra(e))&&(r||void 0===t)?Ys(e):e&&(t=Xs(t))?(r=ta(e),e=ta(t),t=ea(r,e),e=Zs(r,e)+1,Qs(r,t,e).join("")):e},
Au=Object.prototype,ia=Au.hasOwnProperty,oa=function(e,t){return null!=e&&ia.call(e,t)},sa=Kl,aa=function(e,t){
return null!=e&&sa(e,t,oa)},ca="[object Boolean]",da=function(e){return!0===e||!1===e||ua(e)&&la(e)==ca},ha=function(e){
return null===e},Ea=nr,pa="[object String]",fa=function(e){return"string"==typeof e||!Ea(e)&&va(e)&&_a(e)==pa},
ga=_a=la=bl,Ta=va=ua=Su,Sa="[object Number]",Aa=function(e){return"number"==typeof e||Ta(e)&&ga(e)==Sa},ma=function(e){
return"number"==typeof e&&e==Na(e)},ba=function(e,t,r){return e=Ca(e),r=null==r?0:Ra(wa(r),0,e.length),t=ya(t),e.slice(r
,r+t.length)==t},Ia=Ra=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Da=ya=Cl,
Oa=wa=Na=wl,Pa=Ca=du,La=function(e,t,r){var n;return e=Pa(e),t=Da(t),n=e.length,n=r=void 0===r?n:Ia(Oa(r),0,n),0<=(
r-=t.length)&&e.slice(r,n)==t},Ua=ou,Fa=function(t,e){return Ua(e,function(e){return t[e]})},$a=yl,ka=function(e){
return null==e?[]:Fa(e,$a(e))},bl=Array.prototype,Ma=bl.join,Ga=function(e,t){return null==e?"":Ma.call(e,t)},(Su=ja={}
)[Su.DEBUG=0]="DEBUG",Su[Su.INFO=1]="INFO",Su[Su.WARN=2]="WARN",Su[Su.ERROR=3]="ERROR",Su[Su.NONE=4]="NONE",Ha=ja
;const Nu=null!==(Cl=P("1.0.4"))&&void 0!==Cl?Cl:"?";du=null!==(wl=P(""))&&void 0!==wl?wl:"io.nor.fi",yl=null!==(ou=P(""
))&&void 0!==ou?ou:"nor-pipeline-runner",Su=null!==(bl=P(""))&&void 0!==bl?bl:"",wl=null!==(Cl=P(""))&&void 0!==Cl?Cl:""
;const mu=null!==(ou=P("production"))&&void 0!==ou?ou:"development",Ru=null!==(bl=P("2021-09-08T23:06:10.101Z")
)&&void 0!==bl?bl:"";ou=null!==(Cl=P(""))&&void 0!==Cl?Cl:"${",Cl=null!==(bl=P(""))&&void 0!==bl?bl:"}"
;const yu=null===(bl=D(""))||void 0===bl||bl,wu=null===(bl=D(""))||void 0===bl||bl,Cu=null===(bl=D(""))||void 0===bl||bl
,bu=null===(bl=D(""))||void 0===bl||bl;bl="production"===mu;const Iu="test"===mu,Du=!bl&&!Iu;Su=null!==(Ye=function(e){
if(e){if(function(){switch(e){case ja.DEBUG:case ja.INFO:case ja.WARN:case ja.ERROR:case ja.NONE:return 1;default:return
}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ja.DEBUG;case"INFO":return ja.INFO;case"WARN":
case"WARNING":return ja.WARN;case"ERR":case"ERROR":return ja.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return ja.NONE;default:return}}}(null!==(Ye=P(null===(bl=process)||void 0===bl||null===(Ye=bl.env
)||void 0===Ye?void 0:Ye.PIPELINE_LOG_LEVEL))&&void 0!==Ye?Ye:P(Su)))&&void 0!==Ye?Ye:Ha.INFO;const Ou=null!==(Qe=P(
null===(Ye=process)||void 0===Ye||null===(Qe=Ye.env)||void 0===Qe?void 0:Qe.PIPELINE_SERVER))&&void 0!==Qe?Qe:yl,
Pu=null!==(Ze=function(e){if(void 0!==e)return`${e}`}(null===(yl=process)||void 0===yl||null===(Ze=yl.env
)||void 0===Ze?void 0:Ze.PIPELINE_AUTHENTICATION))&&void 0!==Ze?Ze:wl,Lu=null!==(et=P(null===(wl=process
)||void 0===wl||null===(et=wl.env)||void 0===et?void 0:et.PIPELINE_SERVER))&&void 0!==et?et:du,Uu=null!==(tt=P(null===(
du=process)||void 0===du||null===(tt=du.env)||void 0===tt?void 0:tt.PIPELINE_VARIABLE_PREFIX))&&void 0!==tt?tt:ou,
Fu=null!==(rt=P(null===(ou=process)||void 0===ou||null===(rt=ou.env)||void 0===rt?void 0:rt.PIPELINE_VARIABLE_SUFFIX)
)&&void 0!==rt?rt:Cl;class $u{constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class ku{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case ja.DEBUG:return"DEBUG";case ja.INFO:return"INFO";case ja.WARN:return"WARN";case ja.ERROR:return"ERROR"
;case ja.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=Ha.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=Ha.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=Ha.WARN&&this._logger.warn(...e)}static error(...e){this._level<=Ha.ERROR&&this._logger.error(...e)}
static createLogger(e){return new $u(e,ku)}}l(ku,"Level",Ha),l(ku,"_level",Ha.DEBUG),l(ku,"_logger",console),(Cl=Ja={}
)[Cl.HTTP=0]="HTTP",Cl[Cl.LOCAL=1]="LOCAL",Cl[Cl.MATRIX=2]="MATRIX",xa=Ja,(Cl=Ba={})[Cl.NONE=0]="NONE",
Cl[Cl.BASIC_AUTH=1]="BASIC_AUTH",Cl[Cl.BEARER_AUTH=2]="BEARER_AUTH",Wa=Ba;class Mu{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const Gu=ku.createLogger("MatrixRunnerResource");class ju{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return m(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===xa.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||F(null==t?void 0:t.authentication))?e:(t=(e=na(`${e}`)
).toLowerCase(),ba(t,"http:")||ba(t,"https:")?(t=new URL(e),t=null!==(t=Mu.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:Mu.parseRunnerAuthentication(Pu),{type:xa.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return m(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===xa.LOCAL&&p(null==t?void 0:t.path)?e:(e=na(`${e}`),(e=ba(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&eu.default.existsSync(e)?{type:xa.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(m(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===xa.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||F(null==s?void 0:s.authentication)))return i;i=na(
`${i}`),Gu.debug(`value: '${i}'`);let e=i.toLowerCase();if(Gu.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),Gu.debug(`lowerCaseValue: '${e}'`),ba(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),Gu.debug(`url: '${s}': `,s),o=null!==(o=Mu.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:Mu.parseRunnerAuthentication(Pu),Gu.debug(
"auth: ",o);const e=`${s.host}`;Gu.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),Gu.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return Gu.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,Gu.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",Gu.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,Gu.debug(`pool: '${s}'`),{type:xa.MATRIX,homeserver:e,pool:s,
authentication:o}}ba(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return ba(e,"!")||ba(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Lu}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||Pu,r=r||Lu,{type:xa.MATRIX,homeserver:r,pool:n,
authentication:Mu.parseRunnerAuthentication(t)}}}(e)}}(Cl=Va={})[Cl.OK=0]="OK",Cl[Cl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
Cl[Cl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",Cl[Cl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
Cl[Cl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",Cl[Cl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Cl[Cl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Cl[Cl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Cl[Cl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Cl[Cl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Cl[Cl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Cl[Cl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Cl[Cl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Cl[Cl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Cl[Cl.FATAL_ERROR=14]="FATAL_ERROR",Cl[Cl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Cl[Cl.WORK_CANCELLED=16]="WORK_CANCELLED",Cl[Cl.CONFLICT=17]="CONFLICT",Cl[Cl.USAGE=64]="USAGE",
Cl[Cl.DATAERR=65]="DATAERR",Cl[Cl.NOINPUT=66]="NOINPUT",Cl[Cl.NOUSER=67]="NOUSER",Cl[Cl.NOHOST=68]="NOHOST",
Cl[Cl.UNAVAILABLE=69]="UNAVAILABLE",Cl[Cl.SOFTWARE=70]="SOFTWARE",Cl[Cl.OSERR=71]="OSERR",Cl[Cl.OSFILE=72]="OSFILE",
Cl[Cl.CANTCREAT=73]="CANTCREAT",Cl[Cl.IOERR=74]="IOERR",Cl[Cl.TEMPFAIL=75]="TEMPFAIL",Cl[Cl.PROTOCOL=76]="PROTOCOL",
Cl[Cl.NOPERM=77]="NOPERM",Cl[Cl.CONFIG=78]="CONFIG",
Cl[Cl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Cl[Cl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Cl[Cl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Cl[Cl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Cl[Cl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Cl[Cl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",qa=Va,(Cl=Ka={})[Cl.OPTIONS=0]="OPTIONS",
Cl[Cl.GET=1]="GET",Cl[Cl.POST=2]="POST",Cl[Cl.PUT=3]="PUT",Cl[Cl.DELETE=4]="DELETE",Cl[Cl.PATCH=5]="PATCH",Dl=Ka
;const Hu="WINDOW"===(Ol=null!==(Ol=null!==(nt=null===(Cl=process)||void 0===Cl||null===(nt=Cl.env
)||void 0===nt?void 0:nt.NOR_REQUEST_CLIENT_MODE)&&void 0!==nt?nt:null===(Ol=process)||void 0===Ol||null===(it=Ol.env
)||void 0===it?void 0:it.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Ol?Ol:"")||!("undefined"==typeof window||!window.fetch
),Ju="NODE"===Ol||!Hu;class xu{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await xu.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await xu.getRequestDataAsString(e)))return tu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await xu.getRequestDataAsString(e)))return JSON.parse(e)}}(Ol=za={}
)[Ol.Continue=100]="Continue",Ol[Ol.SwitchingProtocols=101]="SwitchingProtocols",Ol[Ol.Processing=102]="Processing",
Ol[Ol.CheckPoint=103]="CheckPoint",Ol[Ol.OK=200]="OK",Ol[Ol.Created=201]="Created",Ol[Ol.Accepted=202]="Accepted",
Ol[Ol.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",Ol[Ol.NoContent=204]="NoContent",
Ol[Ol.ResetContent=205]="ResetContent",Ol[Ol.PartialContent=206]="PartialContent",Ol[Ol.MultiStatus=207]="MultiStatus",
Ol[Ol.AlreadyReported=208]="AlreadyReported",Ol[Ol.IMUsed=226]="IMUsed",Ol[Ol.MultipleChoices=300]="MultipleChoices",
Ol[Ol.MovedPermanently=301]="MovedPermanently",Ol[Ol.Found=302]="Found",Ol[Ol.SeeOther=303]="SeeOther",
Ol[Ol.NotModified=304]="NotModified",Ol[Ol.TemporaryRedirect=307]="TemporaryRedirect",
Ol[Ol.PermanentRedirect=308]="PermanentRedirect",Ol[Ol.BadRequest=400]="BadRequest",
Ol[Ol.Unauthorized=401]="Unauthorized",Ol[Ol.PaymentRequired=402]="PaymentRequired",Ol[Ol.Forbidden=403]="Forbidden",
Ol[Ol.NotFound=404]="NotFound",Ol[Ol.MethodNotAllowed=405]="MethodNotAllowed",Ol[Ol.NotAcceptable=406]="NotAcceptable",
Ol[Ol.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",Ol[Ol.RequestTimeout=408]="RequestTimeout",
Ol[Ol.Conflict=409]="Conflict",Ol[Ol.Gone=410]="Gone",Ol[Ol.LengthRequired=411]="LengthRequired",
Ol[Ol.PreconditionFailed=412]="PreconditionFailed",Ol[Ol.PayloadTooLarge=413]="PayloadTooLarge",
Ol[Ol.URITooLong=414]="URITooLong",Ol[Ol.UnsupportedMediaType=415]="UnsupportedMediaType",
Ol[Ol.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",Ol[Ol.ExpectationFailed=417]="ExpectationFailed",
Ol[Ol.IAmATeapot=418]="IAmATeapot",Ol[Ol.UnprocessableEntity=422]="UnprocessableEntity",Ol[Ol.Locked=423]="Locked",
Ol[Ol.FailedDependency=424]="FailedDependency",Ol[Ol.TooEarly=425]="TooEarly",
Ol[Ol.UpgradeRequired=426]="UpgradeRequired",Ol[Ol.PreconditionRequired=428]="PreconditionRequired",
Ol[Ol.TooManyRequests=429]="TooManyRequests",Ol[Ol.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
Ol[Ol.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",Ol[Ol.InternalError=500]="InternalError",
Ol[Ol.InternalServerError=500]="InternalServerError",Ol[Ol.NotImplemented=501]="NotImplemented",
Ol[Ol.BadGateway=502]="BadGateway",Ol[Ol.ServiceUnavailable=503]="ServiceUnavailable",
Ol[Ol.GatewayTimeout=504]="GatewayTimeout",Ol[Ol.HttpVersionNotSupported=505]="HttpVersionNotSupported",
Ol[Ol.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",Ol[Ol.InsufficientStorage=507]="InsufficientStorage",
Ol[Ol.LoopDetected=508]="LoopDetected",Ol[Ol.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
Ol[Ol.NotExtended=510]="NotExtended",Ol[Ol.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Xa=za,(
Il=Il||{}).ERROR="error",Ya=Il;class Bu extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case za.Continue:return"Continue";case za.SwitchingProtocols:return"Switching Protocols"
;case za.Processing:return"Processing";case za.CheckPoint:return"Check Point";case za.OK:return"OK";case za.Created:
return"Created";case za.Accepted:return"Accepted";case za.NonAuthoritativeInformation:
return"Non-Authoritative Information";case za.NoContent:return"No Content";case za.ResetContent:return"Reset Content"
;case za.PartialContent:return"Partial Content";case za.MultiStatus:return"Multi Status";case za.AlreadyReported:
return"Already Reported";case za.IMUsed:return"IM Used";case za.MultipleChoices:return"Multiple Choices"
;case za.MovedPermanently:return"Moved Permanently";case za.Found:return"Found";case za.SeeOther:return"See Other"
;case za.NotModified:return"Not Modified";case za.TemporaryRedirect:return"Temporary Redirect"
;case za.PermanentRedirect:return"Permanent Redirect";case za.BadRequest:return"Bad Request";case za.Unauthorized:
return"Unauthorized";case za.PaymentRequired:return"Payment Required";case za.Forbidden:return"Forbidden"
;case za.NotFound:return"Not Found";case za.MethodNotAllowed:return"Method Not Allowed";case za.NotAcceptable:
return"Not Acceptable";case za.ProxyAuthenticationRequired:return"Proxy Authentication Required";case za.RequestTimeout:
return"Request Timeout";case za.Conflict:return"Conflict";case za.Gone:return"Gone";case za.LengthRequired:
return"Length Required";case za.PreconditionFailed:return"Precondition Failed";case za.PayloadTooLarge:
return"Payload Too Large";case za.URITooLong:return"URI Too Long";case za.UnsupportedMediaType:
return"Unsupported Media Type";case za.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case za.ExpectationFailed:return"Expectation Failed";case za.IAmATeapot:return"I Am a Teapot"
;case za.UnprocessableEntity:return"Unprocessable Entity";case za.Locked:return"Locked";case za.FailedDependency:
return"Failed Dependency";case za.TooEarly:return"Too Early";case za.UpgradeRequired:return"Upgrade Required"
;case za.PreconditionRequired:return"Precondition Required";case za.TooManyRequests:return"Too Many Requests"
;case za.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case za.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case za.InternalServerError:return"Internal Server Error";case za.NotImplemented:
return"Not Implemented";case za.BadGateway:return"Bad Gateway";case za.ServiceUnavailable:return"Service Unavailable"
;case za.GatewayTimeout:return"Gateway Timeout";case za.HttpVersionNotSupported:return"Http Version Not Supported"
;case za.VariantAlsoNegotiates:return"Variant Also Negotiates";case za.InsufficientStorage:return"Insufficient Storage"
;case za.LoopDetected:return"Loop Detected";case za.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case za.NotExtended:return"Not Extended";case za.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Ya.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Wu=Ju?require("fs").promises:void 0,Vu=ku.createLogger(
"NodeRequestClient");class qu{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case Dl.GET:return this._getJson(t,r,n);case Dl.POST:return this._postJson(t,r,n)
;case Dl.PATCH:return this._patchJson(t,r,n);case Dl.PUT:return this._putJson(t,r,n);case Dl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await Wu.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void Vu.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Vu.debug(
"_checkSocketFile: ENOENT: ",e);throw Vu.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=nu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new ru.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?Vu.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Vu.warn(
"Warning! Request had already ended when the response was received."),Vu.debug("Error from event: ",e)):(Vu.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Vu.warn(
"Warning! Request had already ended when the response was received."),Vu.debug("Exception: ",e)):(Vu.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await xu.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Dl.GET,e,n,r).then(qu._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Dl.PUT,e,n,r).then(qu._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(Dl.POST,e,n,r).then(
qu._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Dl.PATCH,e,n,r).then(qu._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Dl.DELETE,e,n,r).then(qu._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw Vu.error(`Unsuccessful response with status ${t}: `,e),new Bu(t,`Error ${t} for ${J(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Ku{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case Dl.GET:return this._getJson(t,r,n);case Dl.POST:return this._postJson(t,r,n)
;case Dl.PUT:return this._putJson(t,r,n);case Dl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ku._successResponse(e,Dl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ku._successResponse(e,Dl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ku._successResponse(e,Dl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ku._successResponse(e,Dl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${J(t)} ${n}`;return e.json().then(
e=>{throw new Bu(r,i,t,n,e)})}return e.json()}}const zu=Ju?require("http"):void 0,Xu=Ju?require("https"):void 0,
Yu=ku.createLogger("RequestClient");class Qu{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(Dl.GET,e,t)}static postJson(e,t,r){return Yu.debug(".postJson: ",e,t
,r),this._client.jsonRequest(Dl.POST,e,r,t)}static patchJson(e,t,r){return Yu.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Dl.PATCH,e,r,t)}static putJson(e,t,r){return Yu.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Dl.PUT,e,r,t)}static deleteJson(e,t,r){return Yu.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Dl.DELETE,e,t,r)}static _initClient(){if(Hu)return Yu.debug("Detected browser environment"),
new Ku(window.fetch.bind(window));if(Ju)return new qu(zu,Xu);throw new TypeError(
"Could not detect request client implementation")}}l(Qu,"_client",Qu._initClient()),(Il=Ml=Ml||{}).JSON="json",
Il.STRING="string",Il.BOOLEAN="boolean",Il.NUMBER="number",Il.INTEGER="integer",kl=Ml;const Zu=go(Ml=["parameters",
"variables"],["name","command","args","env"]),ec=go(Ml,["name","json","action","output"]),tc=go(Ml,["name","steps"]),
rc=go(Ml,["name","jobs"]),nc=go(Ml,["name","stages"]);class ic{getName(){return this._name}constructor(e){l(this,"_name"
,void 0),l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return aa(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Ms(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Ps(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
Ml=Pl=Pl||{})[Ml.CONSTRUCTED=0]="CONSTRUCTED",Ml[Ml.STARTED=1]="STARTED",Ml[Ml.PAUSED=2]="PAUSED",
Ml[Ml.CANCELLED=3]="CANCELLED",Ml[Ml.FINISHED=4]="FINISHED",Ml[Ml.FAILED=5]="FAILED",Qa=Pl,(Pl=Ll=Ll||{}
).PIPELINE="fi.nor.pipeline",Pl.JOB="fi.nor.pipeline.job",Pl.STAGE="fi.nor.pipeline.stage",
Pl.TASK="fi.nor.pipeline.task",Pl.STEP="fi.nor.pipeline.step",Pl.SCRIPT_STEP="fi.nor.pipeline.step.script",
Pl.JSON_STEP="fi.nor.pipeline.step.json",Za=Ll;const oc=ku.createLogger("JobController");(Ll=el={}
).JOB_CHANGED="JobController:jobChanged",Ll.JOB_STARTED="JobController:jobStarted",
Ll.JOB_PAUSED="JobController:jobPaused",Ll.JOB_RESUMED="JobController:jobResumed",
Ll.JOB_CANCELLED="JobController:jobCancelled",Ll.JOB_FAILED="JobController:jobFailed",
Ll.JOB_FINISHED="JobController:jobFinished";class sc{constructor(e,t,r=[]){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,"_changedCallback",void 0),l(this,"_state",
void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!x(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,ae,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new ic(`JobController#${this._name}`),this._state=Qa.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Oi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=Ps(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
oc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Za.JOB,
state:this._state,name:this._name,steps:Oi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Qa.STARTED:return!0;case Qa.PAUSED:case Qa.CONSTRUCTED:case Qa.CANCELLED:
case Qa.FINISHED:case Qa.FAILED:return!1}}isStarted(){switch(this._state){case Qa.PAUSED:case Qa.STARTED:return!0
;case Qa.CONSTRUCTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}isPaused(){switch(this._state){
case Qa.PAUSED:return!0;case Qa.STARTED:case Qa.CONSTRUCTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}
isCancelled(){switch(this._state){case Qa.CANCELLED:return!0;case Qa.PAUSED:case Qa.STARTED:case Qa.CONSTRUCTED:
case Qa.FINISHED:case Qa.FAILED:return!1}}isFinished(){switch(this._state){case Qa.FINISHED:case Qa.FAILED:
case Qa.CANCELLED:return!0;case Qa.CONSTRUCTED:case Qa.PAUSED:case Qa.STARTED:return!1}}isFailed(){switch(this._state){
case Qa.FAILED:return!0;case Qa.CONSTRUCTED:case Qa.FINISHED:case Qa.PAUSED:case Qa.STARTED:case Qa.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case Qa.FINISHED:return!0;case Qa.FAILED:case Qa.CONSTRUCTED:case Qa.PAUSED:
case Qa.STARTED:case Qa.CANCELLED:return!1}}start(){if(this._state!==Qa.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return oc.info(`Starting job ${this._name}`),this._state=Qa.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(el.JOB_STARTED)&&this._observer.triggerEvent(
el.JOB_STARTED,this),this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return oc.info(
`Pausing job ${this._name}`),this._state=Qa.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
el.JOB_PAUSED)&&this._observer.triggerEvent(el.JOB_PAUSED,this),this._observer.hasCallbacks(el.JOB_CHANGED
)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return oc.info(`Resuming job ${this._name}`),this._state=Qa.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(el.JOB_RESUMED)&&this._observer.triggerEvent(
el.JOB_RESUMED,this),this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}
stop(){if(this._state!==Qa.STARTED)throw new Error(`Job#${this._name} was not started`);return oc.info(
`Stopping job ${this._name}`),this._state=Qa.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
el.JOB_CANCELLED)&&this._observer.triggerEvent(el.JOB_CANCELLED,this),this._observer.hasCallbacks(el.JOB_CHANGED
)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}onCancelled(e){return this.on(el.JOB_CANCELLED,e)}onChanged(e){
return this.on(el.JOB_CHANGED,e)}onFailed(e){return this.on(el.JOB_FAILED,e)}onFinished(e){return this.on(
el.JOB_FINISHED,e)}onPaused(e){return this.on(el.JOB_PAUSED,e)}onResumed(e){return this.on(el.JOB_RESUMED,e)}onStarted(e
){return this.on(el.JOB_STARTED,e)}getErrorString(){return Oi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Oi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){oc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=Qa.FAILED,this._observer.hasCallbacks(el.JOB_FAILED)&&this._observer.triggerEvent(
el.JOB_FAILED,this)):i.isCancelled()?(this._state=Qa.CANCELLED,this._observer.hasCallbacks(el.JOB_CANCELLED
)&&this._observer.triggerEvent(el.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=Qa.STARTED,this._steps[this._current].start(),n===Qa.PAUSED&&this._observer.hasCallbacks(el.JOB_RESUMED
)&&this._observer.triggerEvent(el.JOB_RESUMED,this)):(this._state=Qa.FINISHED,this._observer.hasCallbacks(
el.JOB_FINISHED)&&this._observer.triggerEvent(el.JOB_FINISHED,this))),this._observer.hasCallbacks(el.JOB_CHANGED
)&&this._observer.triggerEvent(el.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=Qa.PAUSED,
this._observer.hasCallbacks(el.JOB_PAUSED)&&this._observer.triggerEvent(el.JOB_PAUSED,this),this._observer.hasCallbacks(
el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=Qa.STARTED,this._observer.hasCallbacks(el.JOB_RESUMED)&&this._observer.triggerEvent(el.JOB_RESUMED,this),
this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this))}}l(sc,"Event",el)
;const ac=ku.createLogger("StageController");(Ll=tl={}).STAGE_STARTED="StageController:stageStarted",
Ll.STAGE_PAUSED="StageController:stagePaused",Ll.STAGE_RESUMED="StageController:stageResumed",
Ll.STAGE_FINISHED="StageController:stageFinished",Ll.STAGE_FAILED="StageController:stageFailed",
Ll.STAGE_CANCELLED="StageController:stageCancelled",Ll.STAGE_CHANGED="StageController:stageChanged";class lc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!x(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=Qa.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new ic(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Oi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:Za.STAGE,state:this._state,name:this._name,jobs:Oi(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case Qa.CANCELLED:return!0;case Qa.FINISHED:case Qa.FAILED:
case Qa.CONSTRUCTED:case Qa.PAUSED:case Qa.STARTED:return!1}}isFailed(){switch(this._state){case Qa.FAILED:return!0
;case Qa.CANCELLED:case Qa.FINISHED:case Qa.CONSTRUCTED:case Qa.PAUSED:case Qa.STARTED:return!1}}isFinished(){switch(
this._state){case Qa.FINISHED:case Qa.FAILED:case Qa.CANCELLED:return!0;case Qa.CONSTRUCTED:case Qa.PAUSED:
case Qa.STARTED:return!1}}isPaused(){switch(this._state){case Qa.PAUSED:return!0;case Qa.FAILED:case Qa.CANCELLED:
case Qa.FINISHED:case Qa.CONSTRUCTED:case Qa.STARTED:return!1}}isRunning(){switch(this._state){case Qa.STARTED:return!0
;case Qa.PAUSED:case Qa.FAILED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case Qa.PAUSED:case Qa.STARTED:return!0;case Qa.FAILED:case Qa.CANCELLED:case Qa.FINISHED:
case Qa.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case Qa.FINISHED:return!0;case Qa.PAUSED:
case Qa.STARTED:case Qa.FAILED:case Qa.CANCELLED:case Qa.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
tl.STAGE_CANCELLED,e)}onChanged(e){return this.on(tl.STAGE_CHANGED,e)}onFailed(e){return this.on(tl.STAGE_FAILED,e)}
onFinished(e){return this.on(tl.STAGE_FINISHED,e)}onPaused(e){return this.on(tl.STAGE_PAUSED,e)}onResumed(e){
return this.on(tl.STAGE_RESUMED,e)}onStarted(e){return this.on(tl.STAGE_STARTED,e)}start(){if(
this._state!==Qa.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return ac.info(
`Starting stage ${this._name}`),this._state=Qa.STARTED,Ps(this._jobs,t=>{try{return t.start(),!1}catch(e){
return ac.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Qa.FAILED,
this._observer.hasCallbacks(tl.STAGE_FAILED)&&this._observer.triggerEvent(tl.STAGE_FAILED,this)
):this._observer.hasCallbacks(tl.STAGE_STARTED)&&this._observer.triggerEvent(tl.STAGE_STARTED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}pause(){if(
this._state===Qa.PAUSED)throw new Error(`Stage#${this._name} was already paused`);ac.info(`Pausing stage ${this._name}`)
,this._state=Qa.PAUSED;var e=Ps(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return ac.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&ac.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(tl.STAGE_PAUSED
)&&this._observer.triggerEvent(tl.STAGE_PAUSED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}resume(){if(this._state===Qa.STARTED)throw new Error(
`Stage#${this._name} was already started`);ac.info(`Resuming stage ${this._name}`),this._state=Qa.STARTED;var e=Ps(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return ac.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&ac.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(tl.STAGE_RESUMED
)&&this._observer.triggerEvent(tl.STAGE_RESUMED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);ac.info(`Stopping stage ${this._name}`),this._state=Qa.CANCELLED;var e=Ps(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return ac.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&ac.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Oi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Oi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Ps(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){ac.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==Qa.FAILED?(this._state=Qa.FAILED,this._observer.hasCallbacks(tl.STAGE_FAILED
)&&this._observer.triggerEvent(tl.STAGE_FAILED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)):n&&this._state!==Qa.CANCELLED?(this._state=Qa.CANCELLED,
this._observer.hasCallbacks(tl.STAGE_CANCELLED)&&this._observer.triggerEvent(tl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)
):this._state!==Qa.FINISHED&&(this._state=Qa.FINISHED,this._observer.hasCallbacks(tl.STAGE_FINISHED
)&&this._observer.triggerEvent(tl.STAGE_FINISHED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)))):(n=S(Ps(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Qa.PAUSED?(this._state=Qa.PAUSED,this._observer.hasCallbacks(tl.STAGE_PAUSED
)&&this._observer.triggerEvent(tl.STAGE_PAUSED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)):n||this._state!==Qa.PAUSED||(this._state=Qa.STARTED,
this._observer.hasCallbacks(tl.STAGE_RESUMED)&&this._observer.triggerEvent(tl.STAGE_RESUMED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this))}}l(lc,"Event",tl)
;const uc=ku.createLogger("PipelineController");(Ll=rl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
Ll.PIPELINE_PAUSED="PipelineController:pipelinePaused",Ll.PIPELINE_RESUMED="PipelineController:pipelineResumed",
Ll.PIPELINE_FINISHED="PipelineController:pipelineFinished",Ll.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
Ll.PIPELINE_FAILED="PipelineController:pipelineFailed",Ll.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class cc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!x(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ue,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new ic(`PipelineController#${this._name}`),this._state=Qa.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Oi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Za.PIPELINE,state:this._state,name:this._name,
stages:Oi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case Qa.CANCELLED:return!0;case Qa.STARTED:case Qa.PAUSED:case Qa.CONSTRUCTED:case Qa.FINISHED:case Qa.FAILED:return!1}}
isFailed(){switch(this._state){case Qa.FAILED:return!0;case Qa.CANCELLED:case Qa.STARTED:case Qa.PAUSED:
case Qa.CONSTRUCTED:case Qa.FINISHED:return!1}}isFinished(){switch(this._state){case Qa.FAILED:case Qa.CANCELLED:
case Qa.FINISHED:return!0;case Qa.STARTED:case Qa.PAUSED:case Qa.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Qa.PAUSED:return!0;case Qa.FAILED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.STARTED:case Qa.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Qa.STARTED:return!0;case Qa.PAUSED:case Qa.FAILED:case Qa.CANCELLED:
case Qa.FINISHED:case Qa.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Qa.STARTED:case Qa.PAUSED:return!0
;case Qa.FAILED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Qa.FINISHED:return!0;case Qa.STARTED:case Qa.PAUSED:case Qa.FAILED:case Qa.CANCELLED:case Qa.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(rl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(rl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(rl.PIPELINE_FAILED,e)}onFinished(e){return this.on(rl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
rl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(rl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(rl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return uc.info(
`Pausing pipeline ${this._name}`),this._state=Qa.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
rl.PIPELINE_PAUSED)&&this._observer.triggerEvent(rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return uc.info(`Resuming pipeline ${this._name}`),
this._state=Qa.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}start(){if(this._state!==Qa.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return uc.info(`Starting pipeline ${this._name}`),this._state=Qa.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(rl.PIPELINE_STARTED)&&this._observer.triggerEvent(
rl.PIPELINE_STARTED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
rl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Qa.STARTED)throw new Error(`Job#${this._name} was not started`)
;return uc.info(`Stopping pipeline ${this._name}`),this._state=Qa.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(rl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}
getErrorString(){return Oi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Oi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){uc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Qa.FAILED,
this._observer.hasCallbacks(rl.PIPELINE_FAILED)&&this._observer.triggerEvent(rl.PIPELINE_FAILED,this),uc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Qa.CANCELLED,this._observer.hasCallbacks(
rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(rl.PIPELINE_CANCELLED,this),uc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Qa.STARTED;const o=this._stages[this._current].start();n===Qa.PAUSED&&this._observer.hasCallbacks(
rl.PIPELINE_RESUMED)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),uc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Qa.FINISHED,this._observer.hasCallbacks(rl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(rl.PIPELINE_FINISHED,this),uc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Qa.PAUSED,this._observer.hasCallbacks(rl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),uc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Qa.STARTED,this._observer.hasCallbacks(rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),uc.info(`Pipeline ${this._name} was resumed`))}}l(cc,"Event",rl
),(nl=nl||{}).ON_EXIT="NodeSystemProcess:onExit";const dc=ku.createLogger("ScriptController");(Ll=il={}
).SCRIPT_STARTED="ScriptController:scriptStarted",Ll.SCRIPT_PAUSED="ScriptController:scriptPaused",
Ll.SCRIPT_RESUMED="ScriptController:scriptResumed",Ll.SCRIPT_CANCELLED="ScriptController:scriptCancelled",
Ll.SCRIPT_FAILED="ScriptController:scriptFailed",Ll.SCRIPT_FINISHED="ScriptController:scriptFinished",
Ll.SCRIPT_CHANGED="ScriptController:scriptChanged";class hc{constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(
this,"_observer",void 0),l(this,"_name",void 0),l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),
l(this,"_closeCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",
void 0),l(this,"_systemProcess",void 0),l(this,"_state",void 0),!x(t))throw new TypeError(`Script name invalid: ${t}`)
;if(!p(r))throw new TypeError(`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!R(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=Qa.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new ic(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`ScriptController#${this._name}`}
getStateDTO(){return{type:Za.SCRIPT_STEP,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Qa.STARTED:return!0;case Qa.PAUSED:case Qa.CONSTRUCTED:case Qa.CANCELLED:
case Qa.FINISHED:case Qa.FAILED:return!1}}isStarted(){switch(this._state){case Qa.STARTED:case Qa.PAUSED:return!0
;case Qa.CONSTRUCTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}isPaused(){switch(this._state){
case Qa.PAUSED:return!0;case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}
isFinished(){switch(this._state){case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!0;case Qa.CONSTRUCTED:
case Qa.STARTED:case Qa.PAUSED:return!1}}isSuccessful(){switch(this._state){case Qa.FINISHED:return!0;case Qa.FAILED:
case Qa.CANCELLED:case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.PAUSED:return!1}}isCancelled(){switch(this._state){
case Qa.CANCELLED:return!0;case Qa.FINISHED:case Qa.FAILED:case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.PAUSED:return!1}}
isFailed(){switch(this._state){case Qa.FAILED:return!0;case Qa.CANCELLED:case Qa.FINISHED:case Qa.CONSTRUCTED:
case Qa.STARTED:case Qa.PAUSED:return!1}}start(){var e,t,r;if(this._state!==Qa.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);if(this._state=Qa.STARTED,!p(e=this._context.compileModel(this._command))
)throw new Error(`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!R(
r=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);this._compiledEnv=r,dc.info(
`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "')}"`)
;const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(nl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
il.SCRIPT_STARTED)&&this._observer.triggerEvent(il.SCRIPT_STARTED,this),this._observer.hasCallbacks(il.SCRIPT_CHANGED
)&&this._observer.triggerEvent(il.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return dc.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=Qa.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(il.SCRIPT_PAUSED)&&this._observer.triggerEvent(il.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(il.SCRIPT_CHANGED)&&this._observer.triggerEvent(il.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._systemProcess)throw new Error(
"No process initialized");return dc.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=Qa.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(il.SCRIPT_RESUMED
)&&this._observer.triggerEvent(il.SCRIPT_RESUMED,this),this._observer.hasCallbacks(il.SCRIPT_CHANGED
)&&this._observer.triggerEvent(il.SCRIPT_CHANGED,this),this}stop(){if(this._state!==Qa.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return dc.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Qa.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(il.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
il.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(il.SCRIPT_CHANGED)&&this._observer.triggerEvent(il.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(il.SCRIPT_STARTED,e)}onPaused(e){return this.on(il.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(il.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(il.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
il.SCRIPT_FAILED,e)}onFinished(e){return this.on(il.SCRIPT_FINISHED,e)}onChanged(e){return this.on(il.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),dc.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=Qa.FINISHED,this._observer.hasCallbacks(
il.SCRIPT_FINISHED)&&this._observer.triggerEvent(il.SCRIPT_FINISHED,this)):(this._state=Qa.FAILED,
this._observer.hasCallbacks(il.SCRIPT_FAILED)&&this._observer.triggerEvent(il.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(il.SCRIPT_CHANGED)&&this._observer.triggerEvent(il.SCRIPT_CHANGED,this)}}l(hc,"Event",il),l(
hc,"State",Qa);class _c{static toString(...e){return Oi(e,e=>ha(e)?"null":`${e}`).join("")}static processVariables(n,i,o
,s,a=void 0){return X(n)?Oi(n,e=>_c.processVariables(e,i,o,s,a)):z(n)?Vo(L(n),(e,t)=>{var r=n[t]
;return e[`${_c.processVariables(t,i,o,s,a)}`]=_c.processVariables(r,i,o,s,a),e},{}):p(n)?_c.processVariablesInString(n,
i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=pt(r)?r:e=>Xn(r,e,o),ba(t,n)&&La(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=na(e),_c.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=na(
t.substr(a,l-a)),h=(_c.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}(
Ll=ol={}).STRINGIFY="stringify",Ll.PARSE="parse";const Ec=ku.createLogger("JsonController");(Ll=sl={}
).JSON_STARTED="JsonController:scriptStarted",Ll.JSON_PAUSED="JsonController:scriptPaused",
Ll.JSON_RESUMED="JsonController:scriptResumed",Ll.JSON_CANCELLED="JsonController:scriptCancelled",
Ll.JSON_FAILED="JsonController:scriptFailed",Ll.JSON_FINISHED="JsonController:scriptFinished",
Ll.JSON_CHANGED="JsonController:scriptChanged";class vc{constructor(e,t,r,n=ol.STRINGIFY,i=void 0){if(l(this,"_context",
void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,
"_output",void 0),l(this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,
"_compiledOutput",void 0),l(this,"_errorString",void 0),!x(t))throw new TypeError(`JSON name invalid: ${t}`);if(!p(n)
)throw new TypeError(`JSON#${t} must have a valid string: ${n}`);if(!K(r))throw new TypeError(
`JSON#${t} must have a valid input property: ${JSON.stringify(r)}`);if(!p(i))throw new TypeError(
`JSON#${t} must have a valid output property: ${JSON.stringify(i)}`);this._context=e,this._state=Qa.CONSTRUCTED,
this._name=t,this._input=r,this._action=null!=n?n:ol.STRINGIFY,this._output=i,this._observer=new ic(
`JsonController#${t}`),this._compiledAction=void 0,this._compiledInput=void 0,this._compiledOutput=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JsonController#${this._name}`}getStateDTO(){return{
type:Za.JSON_STEP,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(this._state){
case Qa.STARTED:return!0;case Qa.PAUSED:case Qa.CONSTRUCTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}
isStarted(){switch(this._state){case Qa.STARTED:case Qa.PAUSED:return!0;case Qa.CONSTRUCTED:case Qa.CANCELLED:
case Qa.FINISHED:case Qa.FAILED:return!1}}isPaused(){switch(this._state){case Qa.PAUSED:return!0;case Qa.CONSTRUCTED:
case Qa.STARTED:case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!1}}isFinished(){switch(this._state){
case Qa.CANCELLED:case Qa.FINISHED:case Qa.FAILED:return!0;case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.PAUSED:return!1}}
isSuccessful(){switch(this._state){case Qa.FINISHED:return!0;case Qa.FAILED:case Qa.CANCELLED:case Qa.CONSTRUCTED:
case Qa.STARTED:case Qa.PAUSED:return!1}}isCancelled(){switch(this._state){case Qa.CANCELLED:return!0;case Qa.FINISHED:
case Qa.FAILED:case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.PAUSED:return!1}}isFailed(){switch(this._state){
case Qa.FAILED:return!0;case Qa.CANCELLED:case Qa.FINISHED:case Qa.CONSTRUCTED:case Qa.STARTED:case Qa.PAUSED:return!1}}
start(){var t,r,n;try{if(this._state!==Qa.CONSTRUCTED)throw new Error(`JSON#${this._name} was already started`);if(
this._state=Qa.STARTED,t=this._context.compileModel(this._action),!function(){switch(t){case ol.STRINGIFY:case ol.PARSE:
return 1}}())throw new Error(`JSON#${this._name} failed to compile the action property: ${_c.toString(this._action)}`)
;if(this._compiledAction=t,r=this._context.compileModel(this._input),t===ol.STRINGIFY){if(!K(r))throw new Error(
`JSON#${this._name} failed to compile the input property as JSON: ${_c.toString(this._input)}`);this._compiledInput=r
}else{if(!p(r))throw new Error(`JSON#${this._name} failed to compile the input property as string: ${_c.toString(
this._input)}`);this._compiledInput=r}if(!p(n=this._output?this._context.compileModel(this._output):void 0)&&!v(n)
)throw new Error(`JSON#${this._name} failed to compile the output property: ${_c.toString(this._output)}`)
;this._compiledOutput=n,Ec.info(`Starting JSON action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(sl.JSON_STARTED)&&this._observer.triggerEvent(sl.JSON_STARTED,this),
this._observer.hasCallbacks(sl.JSON_CHANGED)&&this._observer.triggerEvent(sl.JSON_CHANGED,this);let e=void 0;switch(
this._compiledAction){case ol.STRINGIFY:if(e=JSON.stringify(r),!p(e))throw new TypeError(
`Failed to stringify JSON: ${e}`);break;case ol.PARSE:if(!p(r))throw new TypeError("Value was not string");e=JSON.parse(
r);break;default:throw new TypeError(`Unknown action: ${this._compiledAction}`)}void 0!==this._compiledOutput?(Ec.info(
`Saving output as variable "${this._compiledOutput}": `,e),this._context.setVariable(this._compiledOutput,e)):Ec.info(
"No output target configured for result: ",e),this._closeAction(void 0)}catch(e){Ec.error("Error: ",e),
this._errorString=`${e}`,this._closeAction(e)}return this}pause(){throw new Error(`JSON#${this._name} was not running`)}
resume(){throw new Error(`JSON#${this._name} was not paused`)}stop(){throw new Error(
`JSON#${this._name} was not started`)}onStarted(e){return this.on(sl.JSON_STARTED,e)}onPaused(e){return this.on(
sl.JSON_PAUSED,e)}onResumed(e){return this.on(sl.JSON_RESUMED,e)}onCancelled(e){return this.on(sl.JSON_CANCELLED,e)}
onFailed(e){return this.on(sl.JSON_FAILED,e)}onFinished(e){return this.on(sl.JSON_FINISHED,e)}onChanged(e){
return this.on(sl.JSON_CHANGED,e)}getErrorString(){var e;return null!==(e=this._errorString)&&void 0!==e?e:""}
getOutputString(){return""}_closeAction(e){void 0===e?(this._state=Qa.FINISHED,this._observer.hasCallbacks(
sl.JSON_FINISHED)&&this._observer.triggerEvent(sl.JSON_FINISHED,this)):(Ec.error("Action failed: ",e),
this._state=Qa.FAILED,this._observer.hasCallbacks(sl.JSON_FAILED)&&this._observer.triggerEvent(sl.JSON_FAILED,this)),
this._observer.hasCallbacks(sl.JSON_CHANGED)&&this._observer.triggerEvent(sl.JSON_CHANGED,this)}}l(vc,"Event",sl),l(vc,
"State",Qa);const pc=ku.createLogger("PipelineRunner");class fc{static createStepController(e,t){if(ee(e))return new vc(
t,e.name,e.json,e.action,e.output);if(Z(e))return new hc(t,e.name,e.command,e.args,e.env);throw new TypeError(
`Unknown step type: ${e.name}`)}static createJobController(e,t){return new sc(t,e.name,Oi(e.steps,
e=>this.createStepController(e,t)))}static createStageController(e,t){return new lc(t,e.name,Oi(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new cc(t,e.name,Oi(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return oe(e)?(pc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ie(e)?(pc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):re(e)?(
pc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(pc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(pc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):pc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),pc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}const gc=ku.createLogger("PipelineContext")
;class Tc{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",void 0),l(this,"_parameters",void 0),l(this,
"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,"_lookupVariable",void 0),l(this,"_variables",void 0),
this._system=e,this._variables=null!=r?r:{},this._parameters=t,this._variablePrefix=n,this._variableSuffix=i,
this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){return this._system}compileModel(e){return gc.debug(
"Compiling model using: ",e,this._variablePrefix,this._variableSuffix),e=_c.processVariables(e,this._lookupVariable,
this._variablePrefix,this._variableSuffix),gc.debug("Compiled as: ",e),e}getParametersArray(){var e;return null!==(
e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){return this._variables}getVariable(e){return Xn(this._variables
,e)}_onLookupVariable(e){var t=this.getVariable(e);return gc.debug(`lookup variable "${e}": `,t,this._variables),t}
setVariable(e,t){return V(this._variables)||(this._variables={}),ao(this._variables,e,t),gc.debug(`setVariable "${e}": `
,t,this._variables),this}toString(){return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",
variables:function(e){try{return JSON.parse(e)}catch(e){return}}(JSON.stringify(this._variables))}}}
const Sc=ku.createLogger("runHttpResource"),Ac=ku.createLogger("runLocalResource");(Ll=al={}
).M_ROOM_POWER_LEVELS="m.room.power_levels",Ll.M_ROOM_JOIN_RULES="m.room.join_rules",
Ll.M_ROOM_MEMBERSHIP="m.room.membership",Ll.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
Ll.M_ROOM_GUEST_ACCESS="m.room.guest_access",Ll.M_ROOM_CREATE="m.room.create",Ll.M_FEDERATE="m.federate",
Ll.M_ROOM_MEMBER="m.room.member",Ll.M_PUSH_RULES="m.push_rules",Ll.M_PRESENCE="m.presence",Ll.M_SPACE="m.space",
Ll.M_LOGIN_PASSWORD="m.login.password",Ll.M_LOGIN_TOKEN="m.login.token",Ll.M_ID_USER="m.id.user",
Ll.FI_NOR_DELETED="fi.nor.deleted",Ll.FI_NOR_FORM_DTO="fi.nor.form_dto",Ll.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,Ll.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",Ll.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
Ll.FI_NOR_AGENT_DTO="fi.nor.dto.agent",Ll.FI_NOR_PIPELINE="fi.nor.pipeline",
Ll.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",ll=al,(Ll=ul=ul||{})[Ll.UNAUTHENTICATED=0]="UNAUTHENTICATED",
Ll[Ll.AUTHENTICATING=1]="AUTHENTICATING",Ll[Ll.AUTHENTICATED=2]="AUTHENTICATED",
Ll[Ll.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
Ll[Ll.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(Ll=cl={}).M_USER_IN_USE="M_USER_IN_USE",
Ll.M_INVALID_USERNAME="M_INVALID_USERNAME",Ll.M_EXCLUSIVE="M_EXCLUSIVE",Ll.M_FORBIDDEN="M_FORBIDDEN",dl=cl
;const Nc=ku.createLogger("SimpleMatrixClient");(hl=hl||{}).EVENT="SimpleMatrixClient:event";class mc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?ul.AUTHENTICATED:ul.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new ic("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Nc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Nc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(m(a=s=await Qu.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${ze(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Nc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Nc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Nc.debug(
"Could not register user: ",e),!(e instanceof Bu))throw new Bu(Xa.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Bu(Xa.Unauthorized):403===s?new Bu(Xa.Forbidden
):429===s?new Bu(429):new Bu(Xa.InternalServerError,"Failed to register user");if(!Ke(s=null==e?void 0:e.getBody())
)throw new Bu(Xa.InternalServerError,"Failed to register user");switch(s.errcode){case dl.M_USER_IN_USE:throw new Bu(
Xa.Conflict,"User already exists");case dl.M_INVALID_USERNAME:throw new Bu(Xa.BadRequest,"Username invalid")
;case dl.M_EXCLUSIVE:throw new Bu(Xa.Conflict,"User name conflicts with exclusive namespace");default:throw new Bu(
Xa.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Nc.debug("whoami: Fetching account whoami... ",r),n=await Qu.getJson(r,{Authorization:`Bearer ${t}`}),Nc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Nc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Nc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Nc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await Qu.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Nc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Nc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(m(
n=r=await Qu.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Nc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Nc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Nc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Bu))throw new Bu(Xa.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Bu(Xa.Unauthorized
):403===r?new Bu(Xa.Forbidden):429===r?new Bu(429):new Bu(Xa.InternalServerError,"Failed to register user");if(!Ke(
r=null==e?void 0:e.getBody()))throw new Bu(Xa.InternalServerError,"Failed to register user");switch(r.errcode){
case dl.M_USER_IN_USE:throw new Bu(Xa.Conflict,"User already exists");case dl.M_INVALID_USERNAME:throw new Bu(
Xa.BadRequest,"Username invalid");case dl.M_EXCLUSIVE:throw new Bu(Xa.Conflict,
"User name conflicts with exclusive namespace");default:throw new Bu(Xa.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:al.M_LOGIN_PASSWORD,identifier:{type:al.M_ID_USER,user:r},
password:n},Nc.debug("Sending login with userId:",r),!(m(h=o=await Qu.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||m(_=h)&&I(_,["m.homeserver","m.identity_server"])&&m(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||m(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Nc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Nc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new mc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Nc.debug(
"Could not login: ",e),new Bu(Xa.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(m(n=r=await Qu.getJson(this._resolveHomeServerUrl(`/directory/room/${ze(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Nc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Nc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Bu&&e.getStatusCode()===Xa.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(m(
t=e=await Qu.getJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&R(null==t?void 0:t.joined,_e,qe)))throw Nc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Nc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!V(i=await Qu.getJson(this._resolveHomeServerUrl(
`/rooms/${ze(e)}/state/${ze(t)}/${ze(r)}`),{Authorization:`Bearer ${n}`})))throw Nc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Nc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Bu&&e.getStatusCode()===Xa.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(m(s=o=await Qu.putJson(this._resolveHomeServerUrl(
`/rooms/${ze(e)}/state/${ze(t)}/${ze(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Nc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Nc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Nc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await Qu.postJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Nc.debug("forgetRoom: received: ",r)}catch(e){throw Nc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await Qu.postJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Nc.debug("leaveRoom: received: ",r)}catch(e){throw Nc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ce(e))throw new TypeError(
`roomId invalid: ${e}`);if(!_e(t))throw new TypeError(`userId invalid: ${t}`);if(Nc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await Qu.postJson(
this._resolveHomeServerUrl(`/rooms/${ze(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Nc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Nc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Nc.debug("Sending message with body:",t
),r=await Qu.postJson(this._resolveHomeServerUrl(`/rooms/${ze(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,Nc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(Nc.debug("Creating room with body:",e),!(m(
e=t=await Qu.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&ce(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw Nc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return Nc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(Nc.debug(
`Joining to room ${t} with body:`,e),!(m(i=n=await Qu.postJson(this._resolveHomeServerUrl(`/rooms/${ze(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&ce(null==i?void 0:i.room_id)))throw Nc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return Nc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw Nc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Nc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!V(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=Ga(Oi(L(s),e=>{var t=s[e]
;return`${ze(e)}=${ze(t)}`}),"&"),!(m(t=e=await Qu.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||je(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||Je(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||Ie(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||xe(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||Be(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||We(
null==t?void 0:t.device_one_time_keys_count))))throw Nc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${Ve(e)}`);return e}isAlreadyInTheRoom(
e){if(Ke(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===dl.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Ms(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(hl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Nc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Nc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Nc.info("Initial sync request started"),
this._state!==ul.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=ul.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),Nc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Nc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Nc.info("Timer started..."),this._state=ul.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Nc.error("No next_batch in the response: ",t),r=go(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?be(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=L(s),Ms(n,e=>{var t,r=(r=s[e],go([],
null!=r&&r.state?Te(null==r?void 0:r.state):[],null!=r&&r.timeline?Re(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,go([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?be(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=L(a),Ms(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=L(l),Ms(o,e=>{var t=l[e],t=go([],Te(
null==t?void 0:t.state),Re(null==t?void 0:t.timeline),be(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(mc,
"Event",hl),(Ll=Ul=Ul||{}).PRIVATE_CHAT="private_chat",Ll.PUBLIC_CHAT="public_chat",
Ll.TRUSTED_PRIVATE_CHAT="trusted_private_chat",_l=Ul,(Ul=Fl=Fl||{}).INVITED="invited",Ul.JOINED="joined",
Ul.SHARED="shared",Ul.WORLD_READABLE="world_readable",El=Fl,(Fl=$l=$l||{}).PUBLIC="public",Fl.KNOCK="knock",
Fl.INVITE="invite",Fl.PRIVATE="private",Fl.RESTRICTED="restricted",vl=$l,($l=Fl={}).CAN_JOIN="can_join",
$l.FORBIDDEN="forbidden",pl=Fl;const Rc=ku.createLogger("MatrixCrudRepository");class yc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=P(i))&&void 0!==i?i:ll.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Rc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=L(n);if(Rc.debug("joinedRooms = ",i),t=L(t),Rc.debug(
"invitedRooms = ",t),(t=Ps(t,e=>!i.includes(e))).length){Rc.debug("Joining to rooms = ",t);let r=0;if(await Vo(t,async(e
,t)=>{await e;try{Rc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Rc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Rc.debug(
"Fetching results again after joining"),this.getAll()}return Vo(i,(e,i)=>{var t=n[i],r=Ps(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Aa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return go(e,Oi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Oi(Ps(e,
e=>Xn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Rc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Rc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Rc.debug(
"createItem: serviceAccountId = ",n),i=Ps(as(go(n?[n]:[],t||[])),e=>e!==o),Rc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Rc.debug("createItem: allowedGroups = ",n),t={[ll.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:ll.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:El.SHARED}},{type:ll.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:pl.FORBIDDEN}}]
;void 0!==n&&s.push({type:ll.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:vl.RESTRICTED,allow:Oi(n,e=>({
type:ll.M_ROOM_MEMBERSHIP,room_id:e}))}}),Rc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Rc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Ms(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:_l.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Rc.debug(
"createItem: response = ",t),t=t.room_id,Rc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Rc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Rc.debug(
"response = ",JSON.stringify(n,null,2)),!V(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Oi(L(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!V(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Bu(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Rc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Bu(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Rc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Rc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Rc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Bu&&[401,403,404].includes(e.getStatusCode()))throw e;throw Rc.error(
`Error in deleteById(${t}): `,e),new Bu(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await Vo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Rc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const wc=ku.createLogger("runMatrixResource"
),Cc=ku.createLogger("NodeSystemProcess");class bc{constructor(e,t,r,n=!0){l(this,"_command",void 0),l(this,"_args",
void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,"_stderrCallback",void 0),l(this,"_closeCallback",
void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,"_printToParentProcess",void 0),l(this,
"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",void 0),this._observer=new ic(
"NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,this._printToParentProcess=n,
this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this),
this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=Zl.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(nl.ON_EXIT
)?this._observer.triggerEvent(nl.ON_EXIT,this):Cc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(bc,"Event",nl);class Ic{constructor(){}
toString(){return"NodeSystem"}toJSON(){return{type:"NodeSystem"}}createProcess(e,t,r){return new bc(e,t,r)}}
const Dc=ku.createLogger("main");ku.setLogLevel(Su),async function(t=[]){var r,n,i,o;try{if(Dc.debug(
`Loglevel ${ku.getLogLevelString()}`),r=Ou,t.shift(),!t.shift())return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;if(
0===t.length)return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return console.log(H(r)),qa.OK;case 1:return console.log(function(e){const t=Ps([yu?"LOCAL":"",wu?"HTTP":"",
Cu?"MATRIX":"",Iu?"TEST":"",Du?"DEV":""],e=>!!e);return`${e} v${Nu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Nu}'
  BUILD_NODE_ENV              = '${mu}'
  BUILD_DATE                  = '${Ru}'
  BUILD_WITH_LOCAL_RESOURCES  = '${yu}'
  BUILD_WITH_HTTP_RESOURCES   = '${wu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Cu}'
`}(r)),qa.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=ju.parseRunnerResource(n)))return Dc.error(
`Unsupported argument: ${n}`),console.log(H(r)),qa.UNKNOWN_ARGUMENT;if((o=await async function(e,t){switch(t.type){
case xa.HTTP:return wu?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(r.authentication)&&(
c.Authorization=`Bearer ${r.authentication.access_token}`),$(r.authentication)&&(n=r.authentication.username,
i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64")}`)),void 0===(
o=await Qu.getJson(r.url,c)))return Sc.error(`Failed to load URL "${r.url}": `,o),qa.RESOURCE_LOAD_FAILED;if(void 0===(
s=se(o)))return Sc.error(`Model from URL "${r.url}" was not valid: `,o),qa.RESOURCE_MODEL_INVALID
;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Tc(t,a,l,Uu,Fu);let e=fc.createController(s,u)
;return Sc.info(`Running ${e.getName()} from ${r.url}`),await fc.startAndWaitUntilFinished(e),Sc.info(
`Successfully finished ${e.getName()} from ${r.url}`),qa.OK}catch(e){return Sc.error("Error: ",e),
qa.HTTP_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;case xa.LOCAL:return yu?async function(t,r){var n,i,o,s,a,l;try{if(
n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{zl.readFile(i,o,(e,t)=>{e?n(e
):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(o=se(i=JSON.parse(n)))
)return Ac.warn("Model was not valid: ",i),qa.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters,
a=null==o?void 0:o.variables,l=new Tc(t,s,a,Uu,Fu);let e=fc.createController(o,l);return Ac.info(`Running ${e.getName(
)} from ${r.path}`),await fc.startAndWaitUntilFinished(e),Ac.info(`Successfully finished ${e.getName()} from ${r.path}`)
,qa.OK}catch(e){return Ac.error("Error: ",e),qa.LOCAL_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;case xa.MATRIX:
return Cu?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,N,m,R,y,w;try{wc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new mc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!$(g)
)return qa.UNKNOWN_AUTHENTICATION_TYPE;e=new mc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return wc.error("Could not detect agent user ID"),qa.UNKNOWN_AGENT_ID
;wc.info(`Agent user ID: ${t}`);const C=new yc(e,ll.FI_NOR_AGENT_DTO);if(0===(w=await C.getAll()).length
)return wc.debug("Detected no pools available."),qa.OK;T=(1===w.length?(wc.debug(
"Detected single pool available. Picking it."),w[0]):(wc.debug(
`Detected ${w.length} pools available. Picking one by random.`),w[Math.floor(Math.random()*w.length)])).id,wc.info(
`Pool ID: ${T}`);const b=new yc(e,ll.FI_NOR_PIPELINE_RUN_DTO,"",void 0,ll.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),wc.debug("runList = ",S);let r;if(0===S.length)return wc.debug("Detected no work available."),qa.OK
;r=1===S.length?(wc.debug("Detected single work available. Picking it."),S[0]):(wc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return wc.warn(`Work ID was already running: ${I}`),wc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),wc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),qa.CONFLICT;if(wc.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return wc.warn(
"The work item disappeared while we were selecting it."),qa.WORK_CANCELLED;if(I!==r.id)return wc.error(
`The work item ID conflict: ${I} !== ${r.id}`),qa.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return wc.error(""),qa.CONFLICT;if(wc.debug(
"Work item secured to us! We can start the job."),void 0===(N=se(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return wc.warn("Work item did not contain correct pipeline model: ",r),
qa.RESOURCE_MODEL_INVALID;m=null==N?void 0:N.parameters,R=null==N?void 0:N.variables,y=new Tc(i,m,R,Uu,Fu)
;let n=fc.createController(N,y);await Xe(e,b,I,r,n);const D=n.onChanged(()=>{Xe(e,b,I,r,n).catch(e=>{wc.error(
"Failed to save controller state: ",e)})});try{await fc.startAndWaitUntilFinished(n)}finally{D(),await Xe(e,b,I,r,n)}
return wc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),wc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),qa.OK}catch(e){return wc.error("Error: ",e),
qa.MATRIX_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;default:return qa.UNKNOWN_RESOURCE_TYPE}}(new Ic,i))!==qa.OK
)return o===qa.UNKNOWN_RESOURCE_TYPE?(Dc.error(`Error NorPP${o}: ${j(o)}: Resource type was unknown: ${i.type}`),
console.log(H(r)),qa.UNKNOWN_RESOURCE_TYPE):(function(e){if(Aa(e)&&!(e<0||255<e)){if(
Va.FATAL_SIGNAL_RANGE_START<=e&&e<=Va.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case Va.OK:case Va.GENERAL_ERRORS:
case Va.MISUSE_OF_SHELL_BUILTINS:case Va.ARGUMENT_PARSE_ERROR:case Va.UNKNOWN_ARGUMENT:case Va.UNKNOWN_RESOURCE_TYPE:
case Va.UNKNOWN_AUTHENTICATION_TYPE:case Va.RESOURCE_LOAD_FAILED:case Va.RESOURCE_MODEL_INVALID:
case Va.LOCAL_RESOURCE_FAILED:case Va.HTTP_RESOURCE_FAILED:case Va.MATRIX_RESOURCE_FAILED:case Va.UNIMPLEMENTED_FEATURE:
case Va.UNBUILD_FEATURE:case Va.FATAL_ERROR:case Va.USAGE:case Va.DATAERR:case Va.NOINPUT:case Va.NOUSER:case Va.NOHOST:
case Va.UNAVAILABLE:case Va.SOFTWARE:case Va.OSERR:case Va.OSFILE:case Va.CANTCREAT:case Va.IOERR:case Va.TEMPFAIL:
case Va.PROTOCOL:case Va.NOPERM:case Va.CONFIG:case Va.COMMAND_INVOKED_CANNOT_EXECUTE:case Va.COMMAND_NOT_FOUND:
case Va.INVALID_ARGUMENT_TO_EXIT:case Va.FATAL_SIGNAL_RANGE_START:case Va.FATAL_SIGNAL_RANGE_END:
case Va.EXIT_STATUS_OUT_OF_RANGE:case Va.UNKNOWN_AGENT_ID:case Va.WORK_CANCELLED:case Va.CONFLICT:return 1;default:
return}}}(o)?Dc.error(`Error EX-${o}: ${j(o)}: for ${U(i.type)} resource ${n}`):Dc.error(
`Error: Exit status ${o}: for ${U(i.type)} resource ${n}`),o)}while(1<=t.length);return qa.OK}catch(e){return Dc.error(
"Fatal error: ",e),qa.FATAL_ERROR}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),
process.exit(1)});
