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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new xt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Jt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Ln);return o.cache=new(u.Cache||Pn),o}
function E(e){return void 0===e}function c(e){return rr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!rr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return E(e)||Sa(e)}function p(e){return pa(e)}function f(e){return E(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function v(e){return ya(e)}function g(e){return E(e)||ya(e)}function T(e,t){return Hi(e,t)}
function S(e,t){return Ki(e,t)}function A(e,t){return ht(e)&&S(Fa(e),t)}function y(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,ht(e)&&S(L(e),t))}function R(e){return!!ht(e)&&!(e instanceof Date)&&!Et(e)&&!c(
e)&&y(e,p,void 0)}function N(e,t=p,r=void 0){return ht(e)&&!(e instanceof Date)&&!Et(e)&&!c(e)&&y(e,t,r)}function m(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!ht(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(Et(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=jo(L(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Fa(e),n=Mo(s,e=>!r(e)),t=L(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function w(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return m(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function b(...e){return t=>T(e,e=>e(t))}function C(e){return ht(e)}function I(e,t){return C(e
)&&0===(r=t,Os(L(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return ca(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function P(e){if(void 0!==e&&""!==e)return`${e}`}function L(e,t=p){if(c(e
)){var r=Di(e,(e,t)=>t);return Os(r,e=>t(e))}return C(e)?(e=Reflect.ownKeys(e),Os(e,e=>t(e))):[]}function U(e){switch(e
){case Ha.HTTP:return"http";case Ha.LOCAL:return"local";case Ha.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return R(e)&&function(){switch(null==e?void 0:e.type){
case xa.NONE:case xa.BASIC_AUTH:case xa.BEARER_AUTH:return 1;default:return}}()}function F(e){return R(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===Ja.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:Ja.BASIC_AUTH,username:r,password:n
}}function M(e){return R(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===Ja.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function j(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return j(r,n)}return{
type:Ja.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:Ja.BEARER_AUTH,access_token:n}}function G(e){if(Wa.FATAL_SIGNAL_RANGE_START<=e&&e<=Wa.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-Wa.FATAL_SIGNAL_RANGE_START}`;switch(e){case Wa.OK:return"OK";case Wa.GENERAL_ERRORS:
return"GENERAL_ERRORS";case Wa.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case Wa.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case Wa.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case Wa.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case Wa.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case Wa.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case Wa.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case Wa.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case Wa.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case Wa.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case Wa.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case Wa.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case Wa.FATAL_ERROR:return"FATAL_ERROR"
;case Wa.USAGE:return"USAGE";case Wa.DATAERR:return"DATAERR";case Wa.NOINPUT:return"NOINPUT";case Wa.NOUSER:
return"NOUSER";case Wa.NOHOST:return"NOHOST";case Wa.UNAVAILABLE:return"UNAVAILABLE";case Wa.SOFTWARE:return"SOFTWARE"
;case Wa.OSERR:return"OSERR";case Wa.OSFILE:return"OSFILE";case Wa.CANTCREAT:return"CANTCREAT";case Wa.IOERR:
return"IOERR";case Wa.TEMPFAIL:return"TEMPFAIL";case Wa.PROTOCOL:return"PROTOCOL";case Wa.NOPERM:return"NOPERM"
;case Wa.CONFIG:return"CONFIG";case Wa.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case Wa.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case Wa.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case Wa.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case Wa.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case Wa.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case Wa.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case Wa.WORK_CANCELLED:return"WORK_CANCELLED";case Wa.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return mu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${Ru?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Nu?`

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
`}function B(e){if(Sa(e))switch(e){case Va.OPTIONS:return"options";case Va.GET:return"get";case Va.POST:return"post"
;case Va.PUT:return"put";case Va.DELETE:return"delete";case Va.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function x(e){return!(!pa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function J(e){return p(e)||Sa(e)||ca(e)||da(e)
}function W(e){return J(e)||d(e,b(W,E))||q(e)}function q(e){return R(e)&&y(e,p,b(W,E))}function V(e){return E(e)||q(e)}
function K(e){return J(e)||X(e)||z(e)}function z(e){return R(e)&&y(e,p,b(K,E))}function X(e){return d(e,b(K,E))}
function Y(e){return R(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===Ul.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(E(r=null==r?void 0:r.default)||ca(r))||R(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===Ul.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||R(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===Ul.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||R(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===Ul.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||R(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===Ul.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(E(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return R(e)&&(E(
null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(E(null==e?void 0:e.variables)||q(
null==e?void 0:e.variables))}function Z(e){return Q(e)&&x(null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(
i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,void 0===(r=null==e?void 0:e.env)||N(r,n,i))&&I(e,Xu);var t
,r,n,i}function ee(e){return!(!Q(e)||!Z(e)&&!(Q(e)&&R(e)&&x(null==e?void 0:e.name)))}function te(e){return Q(e)&&x(
null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&I(e,Yu)}function re(e){if(te(e))return e}function ne(e){
return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&I(e,Qu)}function ie(e){return Q(e)&&x(
null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&I(e,Zu)}function oe(e){var t;return null!==(t=null!==(
t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e))return e}(e))&&void 0!==t?t:re(e)
)&&void 0!==t?t:null!==(e=function(e){if(Z(e))return e}(t=e))&&void 0!==e?e:re(t)}function se(e){return C(e)&&Et(
null==e?void 0:e.getName)&&Et(null==e?void 0:e.isRunning)&&Et(null==e?void 0:e.isStarted)&&Et(null==e?void 0:e.isPaused
)&&Et(null==e?void 0:e.isCancelled)&&Et(null==e?void 0:e.isFinished)&&Et(null==e?void 0:e.isFailed)&&Et(
null==e?void 0:e.isSuccessful)&&Et(null==e?void 0:e.start)&&Et(null==e?void 0:e.pause)&&Et(null==e?void 0:e.resume)&&Et(
null==e?void 0:e.stop)&&Et(null==e?void 0:e.destroy)&&Et(null==e?void 0:e.toString)&&Et(null==e?void 0:e.toJSON)&&Et(
null==e?void 0:e.onStarted)&&Et(null==e?void 0:e.onPaused)&&Et(null==e?void 0:e.onResumed)&&Et(
null==e?void 0:e.onCancelled)&&Et(null==e?void 0:e.onFailed)&&Et(null==e?void 0:e.onFinished)&&Et(
null==e?void 0:e.onChanged)}function ae(e){return e instanceof rc}function le(e){return e instanceof ic}function ue(e){
return p(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!p(e))throw new TypeError(
`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0])throw new TypeError(
`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}function de(e){return R(e)&&I(
e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(E(t=e["m.heroes"])||_(t))&&g(
e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function he(e){return p(e)&&!!e&&"@"===e[0]}
function _e(e){return R(e)&&I(e,["content","type","sender"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(E(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function ve(e){return R(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&v(null==e?void 0:e.age)&&V(
null==e?void 0:e.prev_content)&&(E(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(E(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function Ee(e){try{return function(e){if(!R(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${L(e)}`);if(!v(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!V(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!E(
null==e?void 0:e.prev_sender)&&!he(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!E(null==e?void 0:e.redacted_because)&&!_e(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function pe(e){return R(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&v(null==e?void 0:e.origin_server_ts)&&(E(null==e?void 0:e.unsigned)||ve(
null==e?void 0:e.unsigned))&&(E(null==e?void 0:e.prev_content)||q(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function fe(e){try{return function(e){if(!R(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${L(e)}`);if(!q(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!v(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!E(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!E(
null==e?void 0:e.prev_content)&&!q(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ge(e){return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Te(e){
return R(e)&&I(e,["events"])&&d(null==e?void 0:e.events,pe)}function Se(e){try{return function(e){if(!R(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,pe))throw e=jo(null==e?void 0:e.events,e=>!pe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${fe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ae(e){return R(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&q(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&v(
null==e?void 0:e.origin_server_ts)&&(E(null==e?void 0:e.unsigned)||ve(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function ye(e){try{return function(e){if(!R(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${L(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!v(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!E(null==e?void 0:e.unsigned
)&&!ve(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${Ee(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Re(e){return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ne(e){
return R(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ae)&&ca(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function me(e){try{return function(e){if(!R(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${L(e)}`);if(!d(
null==e?void 0:e.events,Ae)){var t=jo(null==e?void 0:e.events,e=>!Ae(e));throw new TypeError(
`Property "events" item was not correct: ${ye(t)}`)}if(!ca(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function we(e){return R(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function be(e){
return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ce(e){return R(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,_e)}function Ie(e){return R(e)&&I(e,["highlight_count","notification_count"])&&v(
null==e?void 0:e.highlight_count)&&v(null==e?void 0:e.notification_count)}function De(e){return R(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(E(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(E(null==e?void 0:e.state)||Te(null==e?void 0:e.state))&&(E(
null==e?void 0:e.timeline)||Ne(null==e?void 0:e.timeline))&&(E(null==e?void 0:e.ephemeral)||we(
null==e?void 0:e.ephemeral))&&(E(null==e?void 0:e.account_data)||Ce(null==e?void 0:e.account_data))&&(E(
null==e?void 0:e.unread_notifications)||Ie(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!R(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!E(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!E(
null==e?void 0:e.state)&&!Te(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Se(e)}`);if(
!E(null==e?void 0:e.timeline)&&!Ne(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${me(null==e?void 0:e.timeline)}`);if(!E(null==e?void 0:e.ephemeral)&&!we(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!E(
null==e?void 0:e.account_data)&&!Ce(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!E(null==e?void 0:e.unread_notifications)&&!Ie(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Pe(e){return R(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&q(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(E(null==e?void 0:e.unsigned
)||ve(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Le(e){try{return function(e){if(!R(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${L(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!E(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return R(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Pe)}function $e(e){try{return function(e){if(!R(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${L(e)}`);if(!d(null==e?void 0:e.events,Pe))throw e=jo(
null==e?void 0:e.events,e=>!Pe(e)),new TypeError(`Property "events" had invalid item: ${Le(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return R(e)&&I(e,["invite_state"])&&Ue(
null==e?void 0:e.invite_state)}function ke(e){try{return function(e){if(!R(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${L(e)}`);if(
!Ue(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Me(e){return R(e)&&I(e,[
"state","timeline","account_data"])&&Te(null==e?void 0:e.state)&&Ne(null==e?void 0:e.timeline)&&Ce(
null==e?void 0:e.account_data)}function je(e){return R(e)&&I(e,["join","invite","leave"])&&(E(null==e?void 0:e.join)||N(
null==e?void 0:e.join,ue,De))&&(E(null==e?void 0:e.invite)||N(null==e?void 0:e.invite,ue,Fe))&&(E(null==e?void 0:e.leave
)||N(null==e?void 0:e.leave,ue,Me))}function Ge(e){try{return function(e){if(!R(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!E(null==e?void 0:e.join)&&!N(null==e?void 0:e.join,ue,De))throw new TypeError(`Property "join" was invalid: ${w(
null==e?void 0:e.join,ue,De,ce,Oe)}`);if(!E(null==e?void 0:e.invite)&&!N(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${w(null==e?void 0:e.invite,ue,Fe,ce,ke)}`);if(!E(
null==e?void 0:e.leave)&&!N(null==e?void 0:e.leave,ue,Me))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function He(e){return R(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
_e)}function Be(e){return R(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function xe(e){return R(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&d(null==e?void 0:e.left,he)}function Je(e){return N(e,p,v)}
function We(e){try{return function(e){if(!R(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!E(null==e?void 0:e.rooms)&&!je(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ge(null==e?void 0:e.rooms)}`);if(!E(null==e?void 0:e.presence)&&!He(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!E(null==e?void 0:e.account_data
)&&!Ce(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!E(
null==e?void 0:e.to_device)&&!Be(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!E(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!E(null==e?void 0:e.device_one_time_keys_count)&&!Je(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function qe(e){return R(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||da(null==e?void 0:e.avatar_url))}function Ve(e){
return R(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case al.M_USER_IN_USE:
case al.M_INVALID_USERNAME:case al.M_EXCLUSIVE:case al.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function Ke(e){return encodeURIComponent(e)}async function ze(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,ol.FI_NOR_PIPELINE_STATE,"",i.toJSON())}var Xe,Ye,Qe,Ze,et,tt,rt,nt,it,
ot,st,at,lt,ut,ct,dt,ht,_t,vt,Et,pt,ft,gt,Tt,St,At,yt,Rt,Nt,mt,wt,bt,Ct,It,Dt,Ot,Pt,Lt,Ut,$t,Ft,kt,Mt,jt,Gt,Ht,Bt,xt,Jt,
Wt,qt,Vt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,vr,Er,pr,fr,gr,Tr,Sr,Ar,yr,Rr,Nr,mr,wr,br,Cr,Ir,Dr,
Or,Pr,Lr,Ur,$r,Fr,kr,Mr,jr,Gr,Hr,Br,xr,Jr,Wr,qr,Vr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,vn,En,pn,fn,
gn,Tn,Sn,An,yn,Rn,Nn,mn,wn,bn,Cn,In,Dn,On,Pn,Ln,Un,$n,Fn,kn,Mn,jn,Gn,Hn,Bn,xn,Jn,Wn,qn,Vn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,
ii,oi,si,ai,li,ui,ci,di,hi,_i,vi,Ei,pi,fi,gi,Ti,Si,Ai,yi,Ri,Ni,mi,wi,bi,Ci,Ii,Di,Oi,Pi,Li,Ui,$i,Fi,ki,Mi,ji,Gi,Hi,Bi,xi,
Ji,Wi,qi,Vi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,vo,Eo,po,fo,go,To,So,Ao,yo,Ro,No,mo,wo,bo,Co,Io,Do,
Oo,Po,Lo,Uo,$o,Fo,ko,Mo,jo,Go,Ho,Bo,xo,Jo,Wo,qo,Vo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,vs,Es,ps,
fs,gs,Ts,Ss,As,ys,Rs,Ns,ms,ws,bs,Cs,Is,Ds,Os,Ps,Ls,Us,$s,Fs,ks,Ms,js,Gs,Hs,Bs,xs,Js,Ws,qs,Vs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,
na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,va,Ea,pa,fa,ga,Ta,Sa,Aa,ya,Ra,Na,ma,wa,ba,Ca,Ia,Da,Oa,Pa,La,Ua,$a,Fa,ka,Ma,ja,Ga,Ha,Ba,
xa,Ja,Wa,qa,Va,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,vl,El,pl,fl,gl,Tl,Sl,Al,yl,Rl,Nl,ml,wl,bl,Cl,
Il,Dl,Ol,Pl,Ll,Ul,$l,Fl,kl,Ml,jl,Gl,Hl,Bl,xl,Jl,Wl,ql=require("fs"),Vl=require("querystring"),Kl=require("url"),
zl=require("path"),Xl=require("child_process"),Yl=e(ql),Ql=t(Vl),Zl=e(Kl),eu=e(zl),
tu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ru=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},nu=function(){
this.__data__=[],this.size=0},iu=function(e,t){return e===t||e!=e&&t!=t},ou=iu,su=function(e,t){for(var r=e.length;r--;
)if(ou(e[r][0],t))return r;return-1},au=su,lu=Array.prototype,uu=lu.splice,cu=su,du=su,hu=function(e){return-1<du(
this.__data__,e)},_u=su,vu=nu,Eu=function(e){var t=this.__data__;return!((e=au(t,e))<0||(e==t.length-1?t.pop():uu.call(t
,e,1),--this.size,0))},pu=function(e){var t=this.__data__;return(e=cu(t,e))<0?void 0:t[e][1]},fu=hu,gu=function(e,t){
var r=this.__data__,n=_u(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=vu,
r.prototype.delete=Eu,r.prototype.get=pu,r.prototype.has=fu,r.prototype.set=gu,it=fl=r,gl=function(){
this.__data__=new it,this.size=0},Gs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
El=function(e){return this.__data__.get(e)},pl=function(e){return this.__data__.has(e)},
yl=Tl="object"==typeof tu&&tu&&tu.Object===Object&&tu,Nl="object"==typeof self&&self&&self.Object===Object&&self,fr=Rl=(
Qo=yl||Nl||Function("return this")()).Symbol,Fl=Object.prototype,ot=Fl.hasOwnProperty,st=Fl.toString,
at=fr?fr.toStringTag:void 0,gr=Object.prototype,lt=gr.toString,ut=function(e){var t,r,n=ot.call(e,at),i=e[at];try{t=!(
e[at]=void 0)}catch(e){}return r=st.call(e),t&&(n?e[at]=i:delete e[at]),r},ct=function(e){return lt.call(e)},dt=(Bs=Rl
)?Bs.toStringTag:void 0,_t=ml=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
dt&&dt in Object(e)?ut:ct)(e)},vt=ht=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
Et=function(e){return!!vt(e)&&("[object Function]"==(e=_t(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Tr=Qo["__core-js_shared__"],
vl=/[^.]+$/.exec((Wt=Tr)&&Wt.keys&&Wt.keys.IE_PROTO||""),pt=vl?"Symbol(src)_1."+vl:"",qt=Function.prototype,
ft=qt.toString,gt=Et,Tt=function(e){return!!pt&&pt in e},St=ht,At=Jr=function(e){if(null!=e){try{return ft.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Ar=/[\\^$.*+?()[\]{}|]/g,yt=/^\[object .+?Constructor\]$/,
Hs=Function.prototype,Sr=Object.prototype,Vl=Hs.toString,Kl=Sr.hasOwnProperty,Rt=RegExp("^"+Vl.call(Kl).replace(Ar,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Nt=function(e){return!(!St(e
)||Tt(e))&&(gt(e)?Rt:yt).test(At(e))},mt=function(e,t){return null==e?void 0:e[t]},lu=(zl=function(e,t){return t=mt(e,t)
,Nt(t)?t:void 0})(Qo,"Map"),su=zl(Object,"create"),bt=wt=nu=su,xl=Object.prototype,Ct=xl.hasOwnProperty,It=nu,
Jl=Object.prototype,Dt=Jl.hasOwnProperty,Ot=nu,hu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Wl=function(e){var t,r=this.__data__;return bt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Ct.call(r,e)?r[e]:void 0},vu=function(e){var t=this.__data__;return It?void 0!==t[e]:Dt.call(t,e)},
Eu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ot&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=wt?wt(null):{},this.size=0},i.prototype.delete=hu,i.prototype.get=Wl,
i.prototype.has=vu,i.prototype.set=Eu,Pt=i,Lt=fl,Ut=lu,pu=function(){this.size=0,this.__data__={hash:new Pt,map:new(
Ut||Lt),string:new Pt}},$t=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},jt=Mt=kt=Ft=function(e,t){
return e=e.__data__,$t(t)?e["string"==typeof t?"string":"hash"]:e.map},fu=function(e){return e=Ft(this,e).delete(e),
this.size-=e?1:0,e},gu=function(e){return kt(this,e).get(e)},tu=function(e){return Mt(this,e).has(e)},Tl=function(e,t){
var r=jt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=pu,o.prototype.delete=fu,
o.prototype.get=gu,o.prototype.has=tu,o.prototype.set=Tl,Ht=lu,Bt=Nl=o,xt=Gt=fl,Xo=Gs,Fl=El,fr=pl,gr=function(e,t){var r
,n=this.__data__;if(n instanceof Gt){if(r=n.__data__,!Ht||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Bt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=gl,s.prototype.delete=Xo,
s.prototype.get=Fl,s.prototype.has=fr,s.prototype.set=gr,Bs=s,Jt=Nl,Tr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Tr,Vt=Wt=a,Kt=vl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},zt=qt=function(e,t){return e.has(t)},Hs=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,v=e.length,E=t.length;if(
v!=E&&!(_&&v<E))return!1;if(s=o.get(e),E=o.get(t),s&&E)return s==t&&E==e;for(a=-1,l=!0,u=2&r?new Vt:void 0,o.set(e,t),
o.set(t,e);++a<v;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!Kt(t,function(e,t){if(!zt(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Sr=Qo.Uint8Array,Xt=Sr,Yt=iu,Qt=Hs,Zt=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},er=Vl=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Ar=(Kl=Rl)?Kl.prototype:void 0,tr=Ar?Ar.valueOf:void 0,su=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Xt(e),new Xt(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return Yt(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=Zt;case"[object Set]":return l=l||er,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=Qt(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(tr)return tr.call(e)==tr.call(t)}return!1},xl=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Jl=Array.isArray,nr=xl,ir=rr=Jl,nu=function(e,t,r){
return t=t(e),ir(e)?t:nr(t,r(e))},or=hu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Wl=Object.prototype,sr=Wl.propertyIsEnumerable,vu=(ar=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),or(ar(t),function(e){return sr.call(t,e)}))}:function(){return[]},Eu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},lr=ml,pu=function(e){return ur(e)&&"[object Arguments]"==lr(e)},
cr=ur=fu=function(e){return null!=e&&"object"==typeof e},gu=Object.prototype,dr=gu.hasOwnProperty,
hr=gu.propertyIsEnumerable,tu=pu(function(){return arguments}())?pu:function(e){return cr(e)&&dr.call(e,"callee"
)&&!hr.call(e,"callee")},Tl=Qo,fl=function(){return!1},Tl=(Tl=(gl=(pl=(gl=(pl=(El=Gs={exports:{}}).exports
)&&!pl.nodeType&&pl)&&El&&!El.nodeType&&El)&&pl.exports===gl)?Tl.Buffer:void 0)?Tl.isBuffer:void 0,El.exports=fl=Tl||fl,
_r=/^(?:0|[1-9]\d*)$/,Xo=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&_r.test(e))&&-1<e&&e%1==0&&e<t},vr=ml,Er=Fl=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},pr=fu,fr="[object Arguments]",gr="[object Array]",
Tr="[object Boolean]",Sr="[object Date]",Kl="[object Error]",Ar="[object Function]",Jl="[object Map]",
gu="[object Object]",pu="[object RegExp]",pl="[object Set]",gl="[object String]",Tl="[object WeakMap]",
El="[object ArrayBuffer]",fl="[object DataView]",(yr={}
)["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0
,
yr[fr]=yr[gr]=yr[El]=yr[Tr]=yr[fl]=yr[Sr]=yr[Kl]=yr[Ar]=yr[Jl]=yr["[object Number]"]=yr[gu]=yr[pu]=yr[pl]=yr[gl]=yr[Tl]=!1
,Wl=function(e){return pr(e)&&Er(e.length)&&!!yr[vr(e)]},gu=function(t){return function(e){return t(e)}},pu=yl,Tl=(Tl=(
gl=pl={exports:{}}).exports)&&!Tl.nodeType&&Tl,Tl=(Sl=Tl&&gl&&!gl.nodeType&&gl)&&Sl.exports===Tl,Al=Tl&&pu.process,
pu=function(){try{return Sl&&Sl.require&&Sl.require("util").types||Al&&Al.binding&&Al.binding("util")}catch(e){}}(),
gl.exports=pu,yl=Wl,pu=(gl=(Tl=pl.exports)&&Tl.isTypedArray)?gu(gl):yl,Rr=Eu,Nr=tu,mr=rr,wr=Gs.exports,br=Xo,Cr=Wl=pu,
Tl=Object.prototype,Ir=Tl.hasOwnProperty,gl=function(e,t){var r,n=mr(e),i=!n&&Nr(e),o=!n&&!i&&wr(e),s=!n&&!i&&!o&&Cr(e),
a=n||i||o||s,l=a?Rr(e.length,String):[],u=l.length;for(r in e)!t&&!Ir.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||br(r,u))||l.push(r);return l},
Dr=Object.prototype,yl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Dr)},
Hl=Object.keys,Bl=Object,Or=yl,Pr=function(e){return Hl(Bl(e))},pu=Object.prototype,Lr=pu.hasOwnProperty,Ur=Et,$r=Fl,
Fr=gl,kr=function(e){var t,r;if(!Or(e))return Pr(e);for(r in t=[],Object(e))Lr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Mr=Tl=function(e){return null!=e&&$r(e.length)&&!Ur(e)},jr=nu,Gr=vu,Hr=yl=function(e){return(Mr(e)?Fr:kr)(e)}
,Br=function(e){return jr(e,Hr,Gr)},Eu=Object.prototype,xr=Eu.hasOwnProperty,pu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,v,E,p,f=1&r,g=Br(e),T=g.length;if(T!=Br(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:xr.call(t,a))
)return!1;if(E=o.get(e),p=o.get(t),E&&p)return E==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(v=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof v&&v instanceof v)&&(l=!1),o.delete(e),o.delete(t),l},gl=zl(Qo,
"DataView"),nu=lu,vu=zl(Qo,"Promise"),lu=Eu=zl(Qo,"Set"),Qo=zl(Qo,"WeakMap"),Wr=ml,Vr="[object Map]",
Kr="[object Promise]",zr="[object Set]",Xr="[object WeakMap]",Yr="[object DataView]",Qr=(qr=Jr)(Jr=gl),Zr=qr(nu),en=qr(
vu),tn=qr(lu),rn=qr(Qo),gl=Wr,(Jr&&gl(new Jr(new ArrayBuffer(1)))!=Yr||nu&&gl(new nu)!=Vr||vu&&gl(vu.resolve()
)!=Kr||lu&&gl(new lu)!=zr||Qo&&gl(new Qo)!=Xr)&&(gl=function(e){var t=Wr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?qr(e):"")switch(e){case Qr:return Yr;case Zr:return Vr;case en:return Kr
;case tn:return zr;case rn:return Xr}return t}),nn=Bs,on=Hs,sn=su,an=pu,ln=gl,un=rr,cn=Gs.exports,dn=Wl,
hn="[object Arguments]",_n="[object Array]",vn="[object Object]",lu=Object.prototype,En=lu.hasOwnProperty,pn=function(e,
t,r,n,i,o){var s,a,l=un(e),u=un(t),c=l?_n:ln(e),d=u?_n:ln(t),h=(c=c==hn?vn:c)==vn,u=(d=d==hn?vn:d)==vn;if((d=c==d)&&cn(e
)){if(!cn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new nn,l||dn(e)?on(e,t,r,n,i,o):sn(e,t,c,r,n,i,o)):1&r||(
s=h&&En.call(e,"__wrapped__"),a=u&&En.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new nn,an(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new nn)},gn=Bs,Tn=Qo=function e(t,r,n,i,o){return t===r||(null==t||null==r||!fn(t)&&!fn(r
)?t!=t&&r!=r:pn(t,r,n,i,e,o))},Sn=ht,An=Hs=function(e){return e==e&&!Sn(e)},yn=yl,Rn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new gn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Tn(a,s,3,n,l):u))return!1;return!0},Nn=function(e){for(var t,r,n=yn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
An(r)];return n},mn=su=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
pu=function(t){var r=Nn(t);return 1==r.length&&r[0][2]?mn(r[0][0],r[0][1]):function(e){return e===t||Rn(e,t,r)}},wn=ml,
bn=fn=fu,Cn=rr,In=gl=function(e){return"symbol"==typeof e||bn(e)&&"[object Symbol]"==wn(e)},
Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/,Gs=function(e,t){if(Cn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!In(e))||On.test(e)||!Dn.test(e)||null!=t&&e in Object(t)},
Pn=Nl,Ln="Expected a function",u.Cache=Pn,
Un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$n=/\\(\\)?/g,vu=0
,Gl=(vu=u(vu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Un,function(e,t,r,n){i.push(
r?n.replace($n,"$1"):t||e)}),i},function(e){return 500===Gl.size&&Gl.clear(),e})).cache,Fn=ru,Bs=(lu=Rl
)?lu.prototype:void 0,jn=Bs?Bs.toString:void 0,Gn=Nl=function e(t){if("string"==typeof t)return t;if(kn(t))return Fn(t,e
)+"";if(Mn(t))return jn?jn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},xn=vu,Jn=lu=function(e){
return null==e?"":Gn(e)},Wn=Mn=gl,Xn=qn=Bs=function(e,t){return Hn(e)?e:Bn(e,t)?[e]:xn(Jn(e))},Yn=tu,ei=Fl,ri=function(e
,t){return null!=e&&t in Object(e)},ni=Wl=function(e,t,r){for(var n,i,o=(t=Xn(t,e)).length,s=!(n=-1);++n<o&&(i=ti(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ei(o)&&Zn(i,o)&&(Qn(e)||Yn(e))},ii=Qo,
oi=zn=function(e,t,r){return void 0===(t=null==e?void 0:Kn(e,t))?r:t},si=function(e,t){return null!=e&&ni(e,t,ri)},li=Hs
,ui=su,di=Kn=Fl=function(e,t){for(var r=0,n=(t=qn(t,e)).length;null!=e&&r<n;)e=e[Vn(t[r++])];return r&&r==n?e:void 0},
hi=function(t){return function(e){return null==e?void 0:e[t]}},_i=function(t){return function(e){return di(e,t)}},
vi=ai=Bn=Gs,Ei=ci=ti=Vn=Qo=function(e){if("string"==typeof e||Wn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
pi=pu,fi=function(r,n){return ai(r)&&li(n)?ui(ci(r),n):function(e){var t=oi(e,r);return void 0===t&&t===n?si(e,r):ii(n,t
,3)}},gi=Hs=function(e){return e},Ti=Qn=Hn=kn=rr,Si=function(e){return vi(e)?hi(Ei(e)):_i(e)},Ai=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},yi=yl,wi=ru,Ci=Gs=function(e,n){
var i=-1,o=mi(e)?Array(e.length):[];return Ni(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Di=function(e,t){return(Ii(e)?wi:Ci
)(e,bi(t))},Pi=iu,Li=mi=Ri=Tl,Ui=Zn=Xo,$i=ht,Fi=vl,Mi=function(e,n){var i;return Oi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Hi=function(e,t,r){var n=ji(e)?Fi:Mi;return r&&Gi(e,t,r)&&(t=void 0),n(e,ki(t))},Bi=Oi=Ni=vl=pu=function(e,t){
if(null==e)return e;if(!Ri(e))return e&&Ai(e,t,yi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},xi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Ji=function(e,n){
var i=!0;return Bi(e,function(e,t,r){return i=!!n(e,t,r)}),i},Wi=ki=bi=su=function(e){
return"function"==typeof e?e:null==e?gi:"object"==typeof e?Ti(e)?fi(e[0],e[1]):pi(e):Si(e)},qi=ji=Ii=rr,
Vi=Gi=pu=function(e,t,r){if(!$i(r))return!1;var n=typeof t;return!!("number"==n?Li(r)&&Ui(t,r.length
):"string"==n&&t in r)&&Pi(r[t],e)},Ki=function(e,t,r){var n=qi(e)?xi:Ji;return r&&Vi(e,t,r)&&(t=void 0),n(e,Wi(t))},
zi=zl,zl=function(){try{var e=zi(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Xi=zl,Yi=function(e,t,r){
"__proto__"==t&&Xi?Xi(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},Qi=iu,iu=Object.prototype,
Zi=iu.hasOwnProperty,eo=function(e,t,r){var n=e[t];Zi.call(e,t)&&Qi(n,r)&&(void 0!==r||t in e)||Yi(e,t,r)},to=Bs,ro=Xo,
io=Qo,oo=function(e,t,r,n){var i,o,s,a,l,u,c;if(!no(e))return e;for(i=-1,s=(o=(t=to(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=io(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=no(c)?c:ro(t[i+1])?[]:{})),eo(a,l,u),a=a[l]}return e},so=function(e,t,r){return null==e?e:oo(e,t,r)},ao=tu
,uo=(iu=Rl)?iu.isConcatSpreadable:void 0,ho=function(e){return lo(e)||ao(e)||!!(uo&&e&&e[uo])},_o=co=xl,
vo=Bs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||ho,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):co(o,s
):i||(o[o.length]=s);return o},Eo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
po=lo=rr,fo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return _o(po(t)?Eo(t):[t],vo(e,1))},go=su,To=Tl,So=yl,Xo=function(o){return function(e,t,r){var n,
i=Object(e);return To(e)||(n=go(t),e=So(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
Qo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Ao=/\s/,yo=function(
e){for(var t=e.length;t--&&Ao.test(e.charAt(t)););return t},Ro=/^\s+/,No=tu=function(e){return e&&e.slice(0,yo(e)+1
).replace(Ro,"")},mo=no=ht,wo=gl,bo=/^[-+]0x[0-9a-f]+$/i,Co=/^0b[01]+$/i,Io=/^0o[0-7]+$/i,Do=parseInt,Oo=function(e){
var t;return"number"==typeof e?e:wo(e)?NaN:(mo(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=mo(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=No(e),(t=Co.test(e))||Io.test(e)?Do(e.slice(2),t?2:8):bo.test(e)?NaN:+e))},
Po=17976931348623157e292,Lo=function(e){return e?(e=Oo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Po:0===e?e:0},Uo=Qo,$o=su
,Fo=Rl=function(e){var t=Lo(e),e=t%1;return t==t?e?t-e:t:0},ko=Math.max,iu=Xo(Mo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Fo(r))<0&&(r=ko(n+r,0)),Uo(e,$o(t),r)):-1}),jo=iu,Go=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Ho=vl,Bo=su,xo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Jo=rr,Wo=function(e,t,r){var n=Jo(e)?Go:xo,i=arguments.length<3
;return n(e,Bo(t),r,i,Ho)},xl=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},qo=Qo,Vo=function(e){return e!=e},Ko=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},zo=Tl=function(e,t,r){return t==t?Ko(e,t,r):qo(e,Vo,r)},
Xo=function(e,t){return!(null==e||!e.length)&&-1<zo(e,t,0)},iu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},Qo=function(){},Qo=(Yo=Eu)&&1/Vl(new Yo([,-0]))[1]==1/0?function(e){return new Yo(e)
}:Qo,Zo=Wt,es=Xo,ts=iu,rs=qt,ns=Qo,is=Vl,os=function(e,t,r){var n,i,o,s,a=-1,l=es,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=ts;else if(200<=u){if(n=t?null:ns(e))return is(n);c=!1,l=rs,h=new Zo}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},ss=function(e){return e&&e.length?os(e):[]},as=gl,ls=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=as(e),s=void 0!==t,a=null===t,l=t==t,u=as(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},us=ru,cs=Fl,ds=su,hs=Gs,_s=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,vs=gu,Es=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=ls(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},ps=Hs,fs=rr,Gs=function(e,n,r){var i;return n=n.length?us(n
,function(t){return fs(t)?function(e){return cs(e,1===t.length?t[0]:t)}:t}):[ps],i=-1,n=us(n,vs(ds)),e=hs(e,function(t,e
,r){return{criteria:us(n,function(e){return e(t)}),index:++i,value:t}}),_s(e,function(e,t){return Es(e,t,r)})},
gs=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ts=Math.max,gu=function(o,s,a){return s=Ts(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ts(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),gs(o,this,e)}},Ss=function(e){return function(){return e}},As=zl,
ys=Date.now,kl=As?function(e,t){return As(e,"toString",{configurable:!0,enumerable:!1,value:Ss(t),writable:!0})}:Hs,
Rs=Bs,Ns=Gs,ms=pu,function(){var e=ys(),t=16-e+ +jl;if(jl=e,0<t){if(800<=++Ml)return}else Ml=0;kl.apply(void 0,arguments
)}(gu(Fl=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ms(e,t[0],t[1])?t=[]:2<r&&ms(t[0],t[1],t[2])&&(t=[
t[0]]),Ns(e,Rs(t,1),[])},void(jl=Ml=0),Hs),Fl+""),bs=hu,Cs=function(e,n){var i=[];return ws(e,function(e,t,r){n(e,t,r
)&&i.push(e)}),i},Is=su,Os=function(e,t){return(Ds(e)?bs:Cs)(e,Is(t))},Ps=Hs,Ls=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Us=ws=vl,$s=function(e){return"function"==typeof e?e:Ps},
Fs=Ds=rr,ks=function(e,t){return(Fs(e)?Ls:Us)(e,$s(t))},Ms=xl,gu=function(e,t,r){var n=e.length;return r=void 0===r?n:r,
!t&&n<=r?e:Ms(e,t,r)},js=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
zl=function(e){return js.test(e)},(Bs=pl.exports)&&Bs.isRegExp,Gs=function(e){return e.split("")},hu="["+(
pu="\\ud800-\\udfff")+"]",xl=(su="[\\ufe0e\\ufe0f]?")+"(?:"+(Hs="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(
vl="\\ud83c[\\udffb-\\udfff]")+")?(?:\\u200d(?:"+[pl="[^"+pu+"]",Bs="(?:\\ud83c[\\udde6-\\uddff]){2}",
pu="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")"+su+"(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",hu="(?:"+[pl+Hs+"?",Hs,Bs,pu,
hu].join("|")+")",xs=RegExp(vl+"(?="+vl+")|"+hu+xl,"g"),Js=Gs,Ws=zl,qs=function(e){return e.match(xs)||[]},Ks=Vs=Tl,
zs=Nl,Xs=tu,Ys=gu,Qs=function(e,t){for(var r=e.length;r--&&-1<Vs(t,e[r],0););return r},Zs=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<Ks(t,e[r],0););return r},ea=function(e){return(Ws(e)?qs:Js)(e)},ta=lu,ra=function(e,t,r){return(
e=ta(e))&&(r||void 0===t)?Xs(e):e&&(t=zs(t))?(r=ea(e),e=ea(t),t=Zs(r,e),e=Qs(r,e)+1,Ys(r,t,e).join("")):e},
gu=Object.prototype,na=gu.hasOwnProperty,ia=function(e,t){return null!=e&&na.call(e,t)},oa=Wl,sa=function(e,t){
return null!=e&&oa(e,t,ia)},ua="[object Boolean]",ca=function(e){return!0===e||!1===e||la(e)&&aa(e)==ua},da=function(e){
return null===e},_a=rr,Ea="[object String]",pa=function(e){return"string"==typeof e||!_a(e)&&va(e)&&ha(e)==Ea},
fa=ha=aa=ml,ga=va=la=fu,Ta="[object Number]",Sa=function(e){return"number"==typeof e||ga(e)&&fa(e)==Ta},ya=function(e){
return"number"==typeof e&&e==Aa(e)},ba=function(e,t,r){return e=wa(e),r=null==r?0:Ra(ma(r),0,e.length),t=Na(t),e.slice(r
,r+t.length)==t},Ca=Ra=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ia=Na=Nl,
Da=ma=Aa=Rl,Oa=wa=lu,Pa=function(e,t,r){var n;return e=Oa(e),t=Ia(t),n=e.length,n=r=void 0===r?n:Ca(Da(r),0,n),0<=(
r-=t.length)&&e.slice(r,n)==t},La=ru,Ua=function(t,e){return La(e,function(e){return t[e]})},$a=yl,Fa=function(e){
return null==e?[]:Ua(e,$a(e))},ml=Array.prototype,ka=ml.join,Ma=function(e,t){return null==e?"":ka.call(e,t)},(fu=ja={}
)[fu.DEBUG=0]="DEBUG",fu[fu.INFO=1]="INFO",fu[fu.WARN=2]="WARN",fu[fu.ERROR=3]="ERROR",fu[fu.NONE=4]="NONE",Ga=ja
;const Tu=null!==(Nl=P("1.0.3"))&&void 0!==Nl?Nl:"?";lu=null!==(Rl=P(""))&&void 0!==Rl?Rl:"io.nor.fi",yl=null!==(ru=P(""
))&&void 0!==ru?ru:"nor-pipeline-runner",fu=null!==(ml=P(""))&&void 0!==ml?ml:"",Rl=null!==(Nl=P(""))&&void 0!==Nl?Nl:""
;const Su=null!==(ru=P("production"))&&void 0!==ru?ru:"development",Au=null!==(ml=P("2021-09-04T10:51:33.842Z")
)&&void 0!==ml?ml:"";ru=null!==(Nl=P(""))&&void 0!==Nl?Nl:"${",Nl=null!==(ml=P(""))&&void 0!==ml?ml:"}"
;const yu=null===(ml=D(""))||void 0===ml||ml,Ru=null===(ml=D(""))||void 0===ml||ml,Nu=null===(ml=D(""))||void 0===ml||ml
,mu=null===(ml=D(""))||void 0===ml||ml;ml="production"===Su;const wu="test"===Su,bu=!ml&&!wu;fu=null!==(Xe=function(e){
if(e){if(function(){switch(e){case ja.DEBUG:case ja.INFO:case ja.WARN:case ja.ERROR:case ja.NONE:return 1;default:return
}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ja.DEBUG;case"INFO":return ja.INFO;case"WARN":
case"WARNING":return ja.WARN;case"ERR":case"ERROR":return ja.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return ja.NONE;default:return}}}(null!==(Xe=P(null===(ml=process)||void 0===ml||null===(Xe=ml.env
)||void 0===Xe?void 0:Xe.PIPELINE_LOG_LEVEL))&&void 0!==Xe?Xe:P(fu)))&&void 0!==Xe?Xe:Ga.INFO;const Cu=null!==(Ye=P(
null===(Xe=process)||void 0===Xe||null===(Ye=Xe.env)||void 0===Ye?void 0:Ye.PIPELINE_SERVER))&&void 0!==Ye?Ye:yl,
Iu=null!==(Qe=function(e){if(void 0!==e)return`${e}`}(null===(yl=process)||void 0===yl||null===(Qe=yl.env
)||void 0===Qe?void 0:Qe.PIPELINE_AUTHENTICATION))&&void 0!==Qe?Qe:Rl,Du=null!==(Ze=P(null===(Rl=process
)||void 0===Rl||null===(Ze=Rl.env)||void 0===Ze?void 0:Ze.PIPELINE_SERVER))&&void 0!==Ze?Ze:lu,Ou=null!==(et=P(null===(
lu=process)||void 0===lu||null===(et=lu.env)||void 0===et?void 0:et.PIPELINE_VARIABLE_PREFIX))&&void 0!==et?et:ru,
Pu=null!==(tt=P(null===(ru=process)||void 0===ru||null===(tt=ru.env)||void 0===tt?void 0:tt.PIPELINE_VARIABLE_SUFFIX)
)&&void 0!==tt?tt:Nl;class Lu{constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class Uu{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case ja.DEBUG:return"DEBUG";case ja.INFO:return"INFO";case ja.WARN:return"WARN";case ja.ERROR:return"ERROR"
;case ja.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=Ga.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=Ga.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=Ga.WARN&&this._logger.warn(...e)}static error(...e){this._level<=Ga.ERROR&&this._logger.error(...e)}
static createLogger(e){return new Lu(e,Uu)}}l(Uu,"Level",Ga),l(Uu,"_level",Ga.DEBUG),l(Uu,"_logger",console),(Nl=Ha={}
)[Nl.HTTP=0]="HTTP",Nl[Nl.LOCAL=1]="LOCAL",Nl[Nl.MATRIX=2]="MATRIX",Ba=Ha,(Nl=xa={})[Nl.NONE=0]="NONE",
Nl[Nl.BASIC_AUTH=1]="BASIC_AUTH",Nl[Nl.BEARER_AUTH=2]="BEARER_AUTH",Ja=xa;class $u{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=j(e))&&void 0!==r?r:k(e):null!==(r=j(e,t))&&void 0!==r?r:k(e,t)}}
const Fu=Uu.createLogger("MatrixRunnerResource");class ku{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return R(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===Ba.HTTP&&p(
null==t?void 0:t.url)&&(E(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=ra(`${e}`)
).toLowerCase(),ba(t,"http:")||ba(t,"https:")?(t=new URL(e),t=null!==(t=$u.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:$u.parseRunnerAuthentication(Iu),{type:Ba.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return R(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===Ba.LOCAL&&p(null==t?void 0:t.path)?e:(e=ra(`${e}`),(e=ba(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&Yl.default.existsSync(e)?{type:Ba.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(R(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===Ba.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(E(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=ra(
`${i}`),Fu.debug(`value: '${i}'`);let e=i.toLowerCase();if(Fu.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),Fu.debug(`lowerCaseValue: '${e}'`),ba(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),Fu.debug(`url: '${s}': `,s),o=null!==(o=$u.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:$u.parseRunnerAuthentication(Iu),Fu.debug(
"auth: ",o);const e=`${s.host}`;Fu.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),Fu.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return Fu.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,Fu.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",Fu.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,Fu.debug(`pool: '${s}'`),{type:Ba.MATRIX,homeserver:e,pool:s,
authentication:o}}ba(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return ba(e,"!")||ba(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Du}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||Iu,r=r||Du,{type:Ba.MATRIX,homeserver:r,pool:n,
authentication:$u.parseRunnerAuthentication(t)}}}(e)}}(Nl=Wa={})[Nl.OK=0]="OK",Nl[Nl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
Nl[Nl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",Nl[Nl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
Nl[Nl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",Nl[Nl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Nl[Nl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Nl[Nl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Nl[Nl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Nl[Nl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Nl[Nl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Nl[Nl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Nl[Nl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Nl[Nl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Nl[Nl.FATAL_ERROR=14]="FATAL_ERROR",Nl[Nl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Nl[Nl.WORK_CANCELLED=16]="WORK_CANCELLED",Nl[Nl.CONFLICT=17]="CONFLICT",Nl[Nl.USAGE=64]="USAGE",
Nl[Nl.DATAERR=65]="DATAERR",Nl[Nl.NOINPUT=66]="NOINPUT",Nl[Nl.NOUSER=67]="NOUSER",Nl[Nl.NOHOST=68]="NOHOST",
Nl[Nl.UNAVAILABLE=69]="UNAVAILABLE",Nl[Nl.SOFTWARE=70]="SOFTWARE",Nl[Nl.OSERR=71]="OSERR",Nl[Nl.OSFILE=72]="OSFILE",
Nl[Nl.CANTCREAT=73]="CANTCREAT",Nl[Nl.IOERR=74]="IOERR",Nl[Nl.TEMPFAIL=75]="TEMPFAIL",Nl[Nl.PROTOCOL=76]="PROTOCOL",
Nl[Nl.NOPERM=77]="NOPERM",Nl[Nl.CONFIG=78]="CONFIG",
Nl[Nl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Nl[Nl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Nl[Nl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Nl[Nl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Nl[Nl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Nl[Nl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",qa=Wa,(Nl=Va={})[Nl.OPTIONS=0]="OPTIONS",
Nl[Nl.GET=1]="GET",Nl[Nl.POST=2]="POST",Nl[Nl.PUT=3]="PUT",Nl[Nl.DELETE=4]="DELETE",Nl[Nl.PATCH=5]="PATCH",bl=Va
;const Mu="WINDOW"===(Cl=null!==(Cl=null!==(rt=null===(Nl=process)||void 0===Nl||null===(rt=Nl.env
)||void 0===rt?void 0:rt.NOR_REQUEST_CLIENT_MODE)&&void 0!==rt?rt:null===(Cl=process)||void 0===Cl||null===(nt=Cl.env
)||void 0===nt?void 0:nt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Cl?Cl:"")||!("undefined"==typeof window||!window.fetch
),ju="NODE"===Cl||!Mu;class Gu{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await Gu.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await Gu.getRequestDataAsString(e)))return Ql.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await Gu.getRequestDataAsString(e)))return JSON.parse(e)}}(Cl=Ka={}
)[Cl.Continue=100]="Continue",Cl[Cl.SwitchingProtocols=101]="SwitchingProtocols",Cl[Cl.Processing=102]="Processing",
Cl[Cl.CheckPoint=103]="CheckPoint",Cl[Cl.OK=200]="OK",Cl[Cl.Created=201]="Created",Cl[Cl.Accepted=202]="Accepted",
Cl[Cl.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",Cl[Cl.NoContent=204]="NoContent",
Cl[Cl.ResetContent=205]="ResetContent",Cl[Cl.PartialContent=206]="PartialContent",Cl[Cl.MultiStatus=207]="MultiStatus",
Cl[Cl.AlreadyReported=208]="AlreadyReported",Cl[Cl.IMUsed=226]="IMUsed",Cl[Cl.MultipleChoices=300]="MultipleChoices",
Cl[Cl.MovedPermanently=301]="MovedPermanently",Cl[Cl.Found=302]="Found",Cl[Cl.SeeOther=303]="SeeOther",
Cl[Cl.NotModified=304]="NotModified",Cl[Cl.TemporaryRedirect=307]="TemporaryRedirect",
Cl[Cl.PermanentRedirect=308]="PermanentRedirect",Cl[Cl.BadRequest=400]="BadRequest",
Cl[Cl.Unauthorized=401]="Unauthorized",Cl[Cl.PaymentRequired=402]="PaymentRequired",Cl[Cl.Forbidden=403]="Forbidden",
Cl[Cl.NotFound=404]="NotFound",Cl[Cl.MethodNotAllowed=405]="MethodNotAllowed",Cl[Cl.NotAcceptable=406]="NotAcceptable",
Cl[Cl.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",Cl[Cl.RequestTimeout=408]="RequestTimeout",
Cl[Cl.Conflict=409]="Conflict",Cl[Cl.Gone=410]="Gone",Cl[Cl.LengthRequired=411]="LengthRequired",
Cl[Cl.PreconditionFailed=412]="PreconditionFailed",Cl[Cl.PayloadTooLarge=413]="PayloadTooLarge",
Cl[Cl.URITooLong=414]="URITooLong",Cl[Cl.UnsupportedMediaType=415]="UnsupportedMediaType",
Cl[Cl.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",Cl[Cl.ExpectationFailed=417]="ExpectationFailed",
Cl[Cl.IAmATeapot=418]="IAmATeapot",Cl[Cl.UnprocessableEntity=422]="UnprocessableEntity",Cl[Cl.Locked=423]="Locked",
Cl[Cl.FailedDependency=424]="FailedDependency",Cl[Cl.TooEarly=425]="TooEarly",
Cl[Cl.UpgradeRequired=426]="UpgradeRequired",Cl[Cl.PreconditionRequired=428]="PreconditionRequired",
Cl[Cl.TooManyRequests=429]="TooManyRequests",Cl[Cl.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
Cl[Cl.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",Cl[Cl.InternalError=500]="InternalError",
Cl[Cl.InternalServerError=500]="InternalServerError",Cl[Cl.NotImplemented=501]="NotImplemented",
Cl[Cl.BadGateway=502]="BadGateway",Cl[Cl.ServiceUnavailable=503]="ServiceUnavailable",
Cl[Cl.GatewayTimeout=504]="GatewayTimeout",Cl[Cl.HttpVersionNotSupported=505]="HttpVersionNotSupported",
Cl[Cl.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",Cl[Cl.InsufficientStorage=507]="InsufficientStorage",
Cl[Cl.LoopDetected=508]="LoopDetected",Cl[Cl.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
Cl[Cl.NotExtended=510]="NotExtended",Cl[Cl.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",za=Ka,(
wl=wl||{}).ERROR="error",Xa=wl;class Hu extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case Ka.Continue:return"Continue";case Ka.SwitchingProtocols:return"Switching Protocols"
;case Ka.Processing:return"Processing";case Ka.CheckPoint:return"Check Point";case Ka.OK:return"OK";case Ka.Created:
return"Created";case Ka.Accepted:return"Accepted";case Ka.NonAuthoritativeInformation:
return"Non-Authoritative Information";case Ka.NoContent:return"No Content";case Ka.ResetContent:return"Reset Content"
;case Ka.PartialContent:return"Partial Content";case Ka.MultiStatus:return"Multi Status";case Ka.AlreadyReported:
return"Already Reported";case Ka.IMUsed:return"IM Used";case Ka.MultipleChoices:return"Multiple Choices"
;case Ka.MovedPermanently:return"Moved Permanently";case Ka.Found:return"Found";case Ka.SeeOther:return"See Other"
;case Ka.NotModified:return"Not Modified";case Ka.TemporaryRedirect:return"Temporary Redirect"
;case Ka.PermanentRedirect:return"Permanent Redirect";case Ka.BadRequest:return"Bad Request";case Ka.Unauthorized:
return"Unauthorized";case Ka.PaymentRequired:return"Payment Required";case Ka.Forbidden:return"Forbidden"
;case Ka.NotFound:return"Not Found";case Ka.MethodNotAllowed:return"Method Not Allowed";case Ka.NotAcceptable:
return"Not Acceptable";case Ka.ProxyAuthenticationRequired:return"Proxy Authentication Required";case Ka.RequestTimeout:
return"Request Timeout";case Ka.Conflict:return"Conflict";case Ka.Gone:return"Gone";case Ka.LengthRequired:
return"Length Required";case Ka.PreconditionFailed:return"Precondition Failed";case Ka.PayloadTooLarge:
return"Payload Too Large";case Ka.URITooLong:return"URI Too Long";case Ka.UnsupportedMediaType:
return"Unsupported Media Type";case Ka.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case Ka.ExpectationFailed:return"Expectation Failed";case Ka.IAmATeapot:return"I Am a Teapot"
;case Ka.UnprocessableEntity:return"Unprocessable Entity";case Ka.Locked:return"Locked";case Ka.FailedDependency:
return"Failed Dependency";case Ka.TooEarly:return"Too Early";case Ka.UpgradeRequired:return"Upgrade Required"
;case Ka.PreconditionRequired:return"Precondition Required";case Ka.TooManyRequests:return"Too Many Requests"
;case Ka.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case Ka.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case Ka.InternalServerError:return"Internal Server Error";case Ka.NotImplemented:
return"Not Implemented";case Ka.BadGateway:return"Bad Gateway";case Ka.ServiceUnavailable:return"Service Unavailable"
;case Ka.GatewayTimeout:return"Gateway Timeout";case Ka.HttpVersionNotSupported:return"Http Version Not Supported"
;case Ka.VariantAlsoNegotiates:return"Variant Also Negotiates";case Ka.InsufficientStorage:return"Insufficient Storage"
;case Ka.LoopDetected:return"Loop Detected";case Ka.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case Ka.NotExtended:return"Not Extended";case Ka.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Xa.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Bu=ju?require("fs").promises:void 0,xu=Uu.createLogger(
"NodeRequestClient");class Ju{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case bl.GET:return this._getJson(t,r,n);case bl.POST:return this._postJson(t,r,n)
;case bl.PATCH:return this._patchJson(t,r,n);case bl.PUT:return this._putJson(t,r,n);case bl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await Bu.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void xu.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void xu.debug(
"_checkSocketFile: ENOENT: ",e);throw xu.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=eu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Zl.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?xu.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(xu.warn(
"Warning! Request had already ended when the response was received."),xu.debug("Error from event: ",e)):(xu.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(xu.warn(
"Warning! Request had already ended when the response was received."),xu.debug("Exception: ",e)):(xu.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Gu.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(bl.GET,e,n,r).then(Ju._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(bl.PUT,e,n,r).then(Ju._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(bl.POST,e,n,r).then(
Ju._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(bl.PATCH,e,n,r).then(Ju._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(bl.DELETE,e,n,r).then(Ju._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw xu.error(`Unsuccessful response with status ${t}: `,e),new Hu(t,`Error ${t} for ${B(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Wu{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case bl.GET:return this._getJson(t,r,n);case bl.POST:return this._postJson(t,r,n)
;case bl.PUT:return this._putJson(t,r,n);case bl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Wu._successResponse(e,bl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Wu._successResponse(e,bl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Wu._successResponse(e,bl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Wu._successResponse(e,bl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${B(t)} ${n}`;return e.json().then(
e=>{throw new Hu(r,i,t,n,e)})}return e.json()}}const qu=ju?require("http"):void 0,Vu=ju?require("https"):void 0,
Ku=Uu.createLogger("RequestClient");class zu{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(bl.GET,e,t)}static postJson(e,t,r){return Ku.debug(".postJson: ",e,t
,r),this._client.jsonRequest(bl.POST,e,r,t)}static patchJson(e,t,r){return Ku.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(bl.PATCH,e,r,t)}static putJson(e,t,r){return Ku.debug(".putJson: ",e,t,r),
this._client.jsonRequest(bl.PUT,e,r,t)}static deleteJson(e,t,r){return Ku.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(bl.DELETE,e,t,r)}static _initClient(){if(Mu)return Ku.debug("Detected browser environment"),
new Wu(window.fetch.bind(window));if(ju)return new Ju(qu,Vu);throw new TypeError(
"Could not detect request client implementation")}}l(zu,"_client",zu._initClient()),(wl=$l=$l||{}).JSON="json",
wl.STRING="string",wl.BOOLEAN="boolean",wl.NUMBER="number",wl.INTEGER="integer",Ul=$l;const Xu=fo($l=["parameters",
"variables"],["name","command","args","env"]),Yu=fo($l,["name","steps"]),Qu=fo($l,["name","jobs"]),Zu=fo($l,["name",
"stages"]);class ec{getName(){return this._name}constructor(e){l(this,"_name",void 0),l(this,"_callbacks",void 0),
this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return sa(
this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],ks(e,e=>{try{e(t,...r)}catch(e
){console.error(`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Os(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
$l=Il=Il||{})[$l.CONSTRUCTED=0]="CONSTRUCTED",$l[$l.STARTED=1]="STARTED",$l[$l.PAUSED=2]="PAUSED",
$l[$l.CANCELLED=3]="CANCELLED",$l[$l.FINISHED=4]="FINISHED",$l[$l.FAILED=5]="FAILED",Ya=Il,(Il=Dl=Dl||{}
).PIPELINE="fi.nor.pipeline",Il.JOB="fi.nor.pipeline.job",Il.STAGE="fi.nor.pipeline.stage",
Il.TASK="fi.nor.pipeline.task",Il.STEP="fi.nor.pipeline.step",Il.SCRIPT_STEP="fi.nor.pipeline.step.script",Qa=Dl
;const tc=Uu.createLogger("JobController");(Dl=Za={}).JOB_CHANGED="JobController:jobChanged",
Dl.JOB_STARTED="JobController:jobStarted",Dl.JOB_PAUSED="JobController:jobPaused",
Dl.JOB_RESUMED="JobController:jobResumed",Dl.JOB_CANCELLED="JobController:jobCancelled",
Dl.JOB_FAILED="JobController:jobFailed",Dl.JOB_FINISHED="JobController:jobFinished";class rc{constructor(e,t,r=[]){if(l(
this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,
"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!x(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new ec(`JobController#${this._name}`),
this._state=Ya.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Di(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=Os(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){tc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Qa.JOB,
state:this._state,name:this._name,steps:Di(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Ya.STARTED:return!0;case Ya.PAUSED:case Ya.CONSTRUCTED:case Ya.CANCELLED:
case Ya.FINISHED:case Ya.FAILED:return!1}}isStarted(){switch(this._state){case Ya.PAUSED:case Ya.STARTED:return!0
;case Ya.CONSTRUCTED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.FAILED:return!1}}isPaused(){switch(this._state){
case Ya.PAUSED:return!0;case Ya.STARTED:case Ya.CONSTRUCTED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.FAILED:return!1}}
isCancelled(){switch(this._state){case Ya.CANCELLED:return!0;case Ya.PAUSED:case Ya.STARTED:case Ya.CONSTRUCTED:
case Ya.FINISHED:case Ya.FAILED:return!1}}isFinished(){switch(this._state){case Ya.FINISHED:case Ya.FAILED:
case Ya.CANCELLED:return!0;case Ya.CONSTRUCTED:case Ya.PAUSED:case Ya.STARTED:return!1}}isFailed(){switch(this._state){
case Ya.FAILED:return!0;case Ya.CONSTRUCTED:case Ya.FINISHED:case Ya.PAUSED:case Ya.STARTED:case Ya.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case Ya.FINISHED:return!0;case Ya.FAILED:case Ya.CONSTRUCTED:case Ya.PAUSED:
case Ya.STARTED:case Ya.CANCELLED:return!1}}start(){if(this._state!==Ya.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return tc.info(`Starting job ${this._name}`),this._state=Ya.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(Za.JOB_STARTED)&&this._observer.triggerEvent(
Za.JOB_STARTED,this),this._observer.hasCallbacks(Za.JOB_CHANGED)&&this._observer.triggerEvent(Za.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return tc.info(
`Pausing job ${this._name}`),this._state=Ya.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
Za.JOB_PAUSED)&&this._observer.triggerEvent(Za.JOB_PAUSED,this),this._observer.hasCallbacks(Za.JOB_CHANGED
)&&this._observer.triggerEvent(Za.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return tc.info(`Resuming job ${this._name}`),this._state=Ya.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(Za.JOB_RESUMED)&&this._observer.triggerEvent(
Za.JOB_RESUMED,this),this._observer.hasCallbacks(Za.JOB_CHANGED)&&this._observer.triggerEvent(Za.JOB_CHANGED,this),this}
stop(){if(this._state!==Ya.STARTED)throw new Error(`Job#${this._name} was not started`);return tc.info(
`Stopping job ${this._name}`),this._state=Ya.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
Za.JOB_CANCELLED)&&this._observer.triggerEvent(Za.JOB_CANCELLED,this),this._observer.hasCallbacks(Za.JOB_CHANGED
)&&this._observer.triggerEvent(Za.JOB_CHANGED,this),this}onCancelled(e){return this.on(Za.JOB_CANCELLED,e)}onChanged(e){
return this.on(Za.JOB_CHANGED,e)}onFailed(e){return this.on(Za.JOB_FAILED,e)}onFinished(e){return this.on(
Za.JOB_FINISHED,e)}onPaused(e){return this.on(Za.JOB_PAUSED,e)}onResumed(e){return this.on(Za.JOB_RESUMED,e)}onStarted(e
){return this.on(Za.JOB_STARTED,e)}getErrorString(){return Di(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Di(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){tc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=Ya.FAILED,this._observer.hasCallbacks(Za.JOB_FAILED)&&this._observer.triggerEvent(
Za.JOB_FAILED,this)):i.isCancelled()?(this._state=Ya.CANCELLED,this._observer.hasCallbacks(Za.JOB_CANCELLED
)&&this._observer.triggerEvent(Za.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=Ya.STARTED,this._steps[this._current].start(),n===Ya.PAUSED&&this._observer.hasCallbacks(Za.JOB_RESUMED
)&&this._observer.triggerEvent(Za.JOB_RESUMED,this)):(this._state=Ya.FINISHED,this._observer.hasCallbacks(
Za.JOB_FINISHED)&&this._observer.triggerEvent(Za.JOB_FINISHED,this))),this._observer.hasCallbacks(Za.JOB_CHANGED
)&&this._observer.triggerEvent(Za.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=Ya.PAUSED,
this._observer.hasCallbacks(Za.JOB_PAUSED)&&this._observer.triggerEvent(Za.JOB_PAUSED,this),this._observer.hasCallbacks(
Za.JOB_CHANGED)&&this._observer.triggerEvent(Za.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=Ya.STARTED,this._observer.hasCallbacks(Za.JOB_RESUMED)&&this._observer.triggerEvent(Za.JOB_RESUMED,this),
this._observer.hasCallbacks(Za.JOB_CHANGED)&&this._observer.triggerEvent(Za.JOB_CHANGED,this))}}l(rc,"Event",Za)
;const nc=Uu.createLogger("StageController");(Dl=el={}).STAGE_STARTED="StageController:stageStarted",
Dl.STAGE_PAUSED="StageController:stagePaused",Dl.STAGE_RESUMED="StageController:stageResumed",
Dl.STAGE_FINISHED="StageController:stageFinished",Dl.STAGE_FAILED="StageController:stageFailed",
Dl.STAGE_CANCELLED="StageController:stageCancelled",Dl.STAGE_CHANGED="StageController:stageChanged";class ic{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!x(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=Ya.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new ec(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Di(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:Qa.STAGE,state:this._state,name:this._name,jobs:Di(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case Ya.CANCELLED:return!0;case Ya.FINISHED:case Ya.FAILED:
case Ya.CONSTRUCTED:case Ya.PAUSED:case Ya.STARTED:return!1}}isFailed(){switch(this._state){case Ya.FAILED:return!0
;case Ya.CANCELLED:case Ya.FINISHED:case Ya.CONSTRUCTED:case Ya.PAUSED:case Ya.STARTED:return!1}}isFinished(){switch(
this._state){case Ya.FINISHED:case Ya.FAILED:case Ya.CANCELLED:return!0;case Ya.CONSTRUCTED:case Ya.PAUSED:
case Ya.STARTED:return!1}}isPaused(){switch(this._state){case Ya.PAUSED:return!0;case Ya.FAILED:case Ya.CANCELLED:
case Ya.FINISHED:case Ya.CONSTRUCTED:case Ya.STARTED:return!1}}isRunning(){switch(this._state){case Ya.STARTED:return!0
;case Ya.PAUSED:case Ya.FAILED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case Ya.PAUSED:case Ya.STARTED:return!0;case Ya.FAILED:case Ya.CANCELLED:case Ya.FINISHED:
case Ya.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case Ya.FINISHED:return!0;case Ya.PAUSED:
case Ya.STARTED:case Ya.FAILED:case Ya.CANCELLED:case Ya.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
el.STAGE_CANCELLED,e)}onChanged(e){return this.on(el.STAGE_CHANGED,e)}onFailed(e){return this.on(el.STAGE_FAILED,e)}
onFinished(e){return this.on(el.STAGE_FINISHED,e)}onPaused(e){return this.on(el.STAGE_PAUSED,e)}onResumed(e){
return this.on(el.STAGE_RESUMED,e)}onStarted(e){return this.on(el.STAGE_STARTED,e)}start(){if(
this._state!==Ya.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return nc.info(
`Starting stage ${this._name}`),this._state=Ya.STARTED,Os(this._jobs,t=>{try{return t.start(),!1}catch(e){
return nc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Ya.FAILED,
this._observer.hasCallbacks(el.STAGE_FAILED)&&this._observer.triggerEvent(el.STAGE_FAILED,this)
):this._observer.hasCallbacks(el.STAGE_STARTED)&&this._observer.triggerEvent(el.STAGE_STARTED,this),
this._observer.hasCallbacks(el.STAGE_CHANGED)&&this._observer.triggerEvent(el.STAGE_CHANGED,this),this}pause(){if(
this._state===Ya.PAUSED)throw new Error(`Stage#${this._name} was already paused`);nc.info(`Pausing stage ${this._name}`)
,this._state=Ya.PAUSED;var e=Os(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return nc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&nc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(el.STAGE_PAUSED
)&&this._observer.triggerEvent(el.STAGE_PAUSED,this),this._observer.hasCallbacks(el.STAGE_CHANGED
)&&this._observer.triggerEvent(el.STAGE_CHANGED,this),this}resume(){if(this._state===Ya.STARTED)throw new Error(
`Stage#${this._name} was already started`);nc.info(`Resuming stage ${this._name}`),this._state=Ya.STARTED;var e=Os(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return nc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&nc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(el.STAGE_RESUMED
)&&this._observer.triggerEvent(el.STAGE_RESUMED,this),this._observer.hasCallbacks(el.STAGE_CHANGED
)&&this._observer.triggerEvent(el.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);nc.info(`Stopping stage ${this._name}`),this._state=Ya.CANCELLED;var e=Os(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return nc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&nc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Di(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Di(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Os(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){nc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==Ya.FAILED?(this._state=Ya.FAILED,this._observer.hasCallbacks(el.STAGE_FAILED
)&&this._observer.triggerEvent(el.STAGE_FAILED,this),this._observer.hasCallbacks(el.STAGE_CHANGED
)&&this._observer.triggerEvent(el.STAGE_CHANGED,this)):n&&this._state!==Ya.CANCELLED?(this._state=Ya.CANCELLED,
this._observer.hasCallbacks(el.STAGE_CANCELLED)&&this._observer.triggerEvent(el.STAGE_CANCELLED,this),
this._observer.hasCallbacks(el.STAGE_CHANGED)&&this._observer.triggerEvent(el.STAGE_CHANGED,this)
):this._state!==Ya.FINISHED&&(this._state=Ya.FINISHED,this._observer.hasCallbacks(el.STAGE_FINISHED
)&&this._observer.triggerEvent(el.STAGE_FINISHED,this),this._observer.hasCallbacks(el.STAGE_CHANGED
)&&this._observer.triggerEvent(el.STAGE_CHANGED,this)))):(n=S(Os(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Ya.PAUSED?(this._state=Ya.PAUSED,this._observer.hasCallbacks(el.STAGE_PAUSED
)&&this._observer.triggerEvent(el.STAGE_PAUSED,this),this._observer.hasCallbacks(el.STAGE_CHANGED
)&&this._observer.triggerEvent(el.STAGE_CHANGED,this)):n||this._state!==Ya.PAUSED||(this._state=Ya.STARTED,
this._observer.hasCallbacks(el.STAGE_RESUMED)&&this._observer.triggerEvent(el.STAGE_RESUMED,this),
this._observer.hasCallbacks(el.STAGE_CHANGED)&&this._observer.triggerEvent(el.STAGE_CHANGED,this))}}l(ic,"Event",el)
;const oc=Uu.createLogger("PipelineController");(Dl=tl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
Dl.PIPELINE_PAUSED="PipelineController:pipelinePaused",Dl.PIPELINE_RESUMED="PipelineController:pipelineResumed",
Dl.PIPELINE_FINISHED="PipelineController:pipelineFinished",Dl.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
Dl.PIPELINE_FAILED="PipelineController:pipelineFailed",Dl.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class sc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!x(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new ec(`PipelineController#${this._name}`),this._state=Ya.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Di(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Qa.PIPELINE,state:this._state,name:this._name,
stages:Di(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case Ya.CANCELLED:return!0;case Ya.STARTED:case Ya.PAUSED:case Ya.CONSTRUCTED:case Ya.FINISHED:case Ya.FAILED:return!1}}
isFailed(){switch(this._state){case Ya.FAILED:return!0;case Ya.CANCELLED:case Ya.STARTED:case Ya.PAUSED:
case Ya.CONSTRUCTED:case Ya.FINISHED:return!1}}isFinished(){switch(this._state){case Ya.FAILED:case Ya.CANCELLED:
case Ya.FINISHED:return!0;case Ya.STARTED:case Ya.PAUSED:case Ya.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Ya.PAUSED:return!0;case Ya.FAILED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.STARTED:case Ya.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Ya.STARTED:return!0;case Ya.PAUSED:case Ya.FAILED:case Ya.CANCELLED:
case Ya.FINISHED:case Ya.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Ya.STARTED:case Ya.PAUSED:return!0
;case Ya.FAILED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Ya.FINISHED:return!0;case Ya.STARTED:case Ya.PAUSED:case Ya.FAILED:case Ya.CANCELLED:case Ya.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(tl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(tl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(tl.PIPELINE_FAILED,e)}onFinished(e){return this.on(tl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
tl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(tl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(tl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return oc.info(
`Pausing pipeline ${this._name}`),this._state=Ya.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
tl.PIPELINE_PAUSED)&&this._observer.triggerEvent(tl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
tl.PIPELINE_CHANGED)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return oc.info(`Resuming pipeline ${this._name}`),
this._state=Ya.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(tl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(tl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(tl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this),this}start(){if(this._state!==Ya.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return oc.info(`Starting pipeline ${this._name}`),this._state=Ya.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(tl.PIPELINE_STARTED)&&this._observer.triggerEvent(
tl.PIPELINE_STARTED,this),this._observer.hasCallbacks(tl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
tl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Ya.STARTED)throw new Error(`Job#${this._name} was not started`)
;return oc.info(`Stopping pipeline ${this._name}`),this._state=Ya.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(tl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(tl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(tl.PIPELINE_CHANGED)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this),this}
getErrorString(){return Di(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Di(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){oc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Ya.FAILED,
this._observer.hasCallbacks(tl.PIPELINE_FAILED)&&this._observer.triggerEvent(tl.PIPELINE_FAILED,this),oc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Ya.CANCELLED,this._observer.hasCallbacks(
tl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(tl.PIPELINE_CANCELLED,this),oc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Ya.STARTED;const o=this._stages[this._current].start();n===Ya.PAUSED&&this._observer.hasCallbacks(
tl.PIPELINE_RESUMED)&&this._observer.triggerEvent(tl.PIPELINE_RESUMED,this),oc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Ya.FINISHED,this._observer.hasCallbacks(tl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(tl.PIPELINE_FINISHED,this),oc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(tl.PIPELINE_CHANGED)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Ya.PAUSED,this._observer.hasCallbacks(tl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(tl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(tl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this),oc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Ya.STARTED,this._observer.hasCallbacks(tl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(tl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(tl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(tl.PIPELINE_CHANGED,this),oc.info(`Pipeline ${this._name} was resumed`))}}l(sc,"Event",tl
),(rl=rl||{}).ON_EXIT="NodeSystemProcess:onExit";const ac=Uu.createLogger("ScriptController");(Dl=nl={}
).SCRIPT_STARTED="ScriptController:scriptStarted",Dl.SCRIPT_PAUSED="ScriptController:scriptPaused",
Dl.SCRIPT_RESUMED="ScriptController:scriptResumed",Dl.SCRIPT_CANCELLED="ScriptController:scriptCancelled",
Dl.SCRIPT_FAILED="ScriptController:scriptFailed",Dl.SCRIPT_FINISHED="ScriptController:scriptFinished",
Dl.SCRIPT_CHANGED="ScriptController:scriptChanged";class lc{constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(
this,"_observer",void 0),l(this,"_name",void 0),l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),
l(this,"_closeCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",
void 0),l(this,"_systemProcess",void 0),l(this,"_state",void 0),!x(t))throw new TypeError(`Script name invalid: ${t}`)
;if(!p(r))throw new TypeError(`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!N(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=Ya.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new ec(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`ScriptController#${this._name}`}
getStateDTO(){return{type:Qa.SCRIPT_STEP,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Ya.STARTED:return!0;case Ya.PAUSED:case Ya.CONSTRUCTED:case Ya.CANCELLED:
case Ya.FINISHED:case Ya.FAILED:return!1}}isStarted(){switch(this._state){case Ya.STARTED:case Ya.PAUSED:return!0
;case Ya.CONSTRUCTED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.FAILED:return!1}}isPaused(){switch(this._state){
case Ya.PAUSED:return!0;case Ya.CONSTRUCTED:case Ya.STARTED:case Ya.CANCELLED:case Ya.FINISHED:case Ya.FAILED:return!1}}
isFinished(){switch(this._state){case Ya.CANCELLED:case Ya.FINISHED:case Ya.FAILED:return!0;case Ya.CONSTRUCTED:
case Ya.STARTED:case Ya.PAUSED:return!1}}isSuccessful(){switch(this._state){case Ya.FINISHED:return!0;case Ya.FAILED:
case Ya.CANCELLED:case Ya.CONSTRUCTED:case Ya.STARTED:case Ya.PAUSED:return!1}}isCancelled(){switch(this._state){
case Ya.CANCELLED:return!0;case Ya.FINISHED:case Ya.FAILED:case Ya.CONSTRUCTED:case Ya.STARTED:case Ya.PAUSED:return!1}}
isFailed(){switch(this._state){case Ya.FAILED:return!0;case Ya.CANCELLED:case Ya.FINISHED:case Ya.CONSTRUCTED:
case Ya.STARTED:case Ya.PAUSED:return!1}}start(){var e,t,r;if(this._state!==Ya.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);if(ac.info(`Starting command "${this._command} ${this._args.join(" ")}"`),
this._state=Ya.STARTED,!p(e=this._context.compileModel(this._command)))throw new Error(
`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!N(
r=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);this._compiledEnv=r
;const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(rl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
nl.SCRIPT_STARTED)&&this._observer.triggerEvent(nl.SCRIPT_STARTED,this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return ac.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=Ya.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(nl.SCRIPT_PAUSED)&&this._observer.triggerEvent(nl.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._systemProcess)throw new Error(
"No process initialized");return ac.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=Ya.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(nl.SCRIPT_RESUMED
)&&this._observer.triggerEvent(nl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}stop(){if(this._state!==Ya.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return ac.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Ya.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(nl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
nl.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(nl.SCRIPT_STARTED,e)}onPaused(e){return this.on(nl.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(nl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(nl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
nl.SCRIPT_FAILED,e)}onFinished(e){return this.on(nl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(nl.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),ac.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=Ya.FINISHED,this._observer.hasCallbacks(
nl.SCRIPT_FINISHED)&&this._observer.triggerEvent(nl.SCRIPT_FINISHED,this)):(this._state=Ya.FAILED,
this._observer.hasCallbacks(nl.SCRIPT_FAILED)&&this._observer.triggerEvent(nl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this)}}l(lc,"Event",nl),l(
lc,"State",Ya);const uc=Uu.createLogger("PipelineRunner");class cc{static createStepController(e,t){if(Z(e)
)return new lc(t,e.name,e.command,e.args,e.env);throw new TypeError(`Unknown step type: ${e.name}`)}
static createJobController(e,t){return new rc(t,e.name,Di(e.steps,e=>this.createStepController(e,t)))}
static createStageController(e,t){return new ic(t,e.name,Di(e.jobs,e=>this.createJobController(e,t)))}
static createPipelineController(e,t){return new sc(t,e.name,Di(e.stages,e=>this.createStageController(e,t)))}
static createController(e,t){return ie(e)?(uc.debug(`Starting pipeline ${e.name}`),this.createPipelineController(e,t)
):ne(e)?(uc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(uc.debug(`Starting job ${e.name}`)
,this.createJobController(e,t)):(uc.debug(`Starting step ${e.name}`),this.createStepController(e,t))}
static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{r=n.onChanged(()=>{try{n.isFinished()?(
uc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):uc.debug(`Controller ${n.toString(
)} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),uc.debug(`Controller ${n.toString()} started`)}catch(e){
r&&(r(),r=void 0),t(e)}})}}const dc="qwertyuiopasdfghjklzxcvbnm. \n\t1234567890_";class hc{static toString(...e){
return Di(e,e=>da(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return X(n)?Di(n,
e=>hc.processVariables(e,i,o,s,a)):z(n)?Wo(L(n),(e,t)=>{var r=n[t];return e[`${hc.processVariables(t,i,o,s,a
)}`]=hc.processVariables(r,i,o,s,a),e},{}):p(n)?hc.processVariablesInString(n,i,o,s,a):n}
static processVariablesInString(t,r,n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=Et(r)?r:e=>zn(r,e,o)
,ba(t,n)&&Pa(t,i)){let e=t.substr(n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=ra(e),S(e,e=>dc.includes(e)
)))return c(e)}let d="",h=0;for(;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,
a=h+n.length,(l=t.indexOf(i,a))<0)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20
)}". End of variable not detected.`);u=l+i.length,a=ra(t.substr(a,l-a)),h=(S(a,e=>dc.includes(e))?(a=c(a),
d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}class _c{constructor(e,t=void 0,r=void 0,n="${",i="}"
){l(this,"_system",void 0),l(this,"_variables",void 0),l(this,"_parameters",void 0),l(this,"_variablePrefix",void 0),l(
this,"_variableSuffix",void 0),l(this,"_lookupVariable",void 0),this._system=e,this._variables=r,this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this.getVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return hc.processVariables(e,this._lookupVariable,this._variablePrefix,
this._variableSuffix)}getParametersModel(){var e;return null!==(e=this._parameters)&&void 0!==e?e:{}}getVariablesModel(
){var e;return null!==(e=this._variables)&&void 0!==e?e:{}}getVariable(e){return zn(this._variables,e)}setVariable(e,t){
return so(this._variables,e,t),this}toString(){return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",
variables:function(e){try{return JSON.parse(e)}catch(e){return}}(JSON.stringify(this._variables))}}}
const vc=Uu.createLogger("runHttpResource"),Ec=Uu.createLogger("runLocalResource");(Dl=il={}
).M_ROOM_POWER_LEVELS="m.room.power_levels",Dl.M_ROOM_JOIN_RULES="m.room.join_rules",
Dl.M_ROOM_MEMBERSHIP="m.room.membership",Dl.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
Dl.M_ROOM_GUEST_ACCESS="m.room.guest_access",Dl.M_ROOM_CREATE="m.room.create",Dl.M_FEDERATE="m.federate",
Dl.M_ROOM_MEMBER="m.room.member",Dl.M_PUSH_RULES="m.push_rules",Dl.M_PRESENCE="m.presence",Dl.M_SPACE="m.space",
Dl.M_LOGIN_PASSWORD="m.login.password",Dl.M_LOGIN_TOKEN="m.login.token",Dl.M_ID_USER="m.id.user",
Dl.FI_NOR_DELETED="fi.nor.deleted",Dl.FI_NOR_FORM_DTO="fi.nor.form_dto",Dl.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,Dl.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",Dl.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
Dl.FI_NOR_AGENT_DTO="fi.nor.dto.agent",Dl.FI_NOR_PIPELINE="fi.nor.pipeline",
Dl.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",ol=il,(Dl=sl=sl||{})[Dl.UNAUTHENTICATED=0]="UNAUTHENTICATED",
Dl[Dl.AUTHENTICATING=1]="AUTHENTICATING",Dl[Dl.AUTHENTICATED=2]="AUTHENTICATED",
Dl[Dl.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
Dl[Dl.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(Dl=al={}).M_USER_IN_USE="M_USER_IN_USE",
Dl.M_INVALID_USERNAME="M_INVALID_USERNAME",Dl.M_EXCLUSIVE="M_EXCLUSIVE",Dl.M_FORBIDDEN="M_FORBIDDEN",ll=al
;const pc=Uu.createLogger("SimpleMatrixClient");(ul=ul||{}).EVENT="SimpleMatrixClient:event";class fc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?sl.AUTHENTICATED:sl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new ec("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{pc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
pc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(R(a=s=await zu.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${Ke(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw pc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return pc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(pc.debug(
"Could not register user: ",e),!(e instanceof Hu))throw new Hu(za.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Hu(za.Unauthorized):403===s?new Hu(za.Forbidden
):429===s?new Hu(429):new Hu(za.InternalServerError,"Failed to register user");if(!Ve(s=null==e?void 0:e.getBody())
)throw new Hu(za.InternalServerError,"Failed to register user");switch(s.errcode){case ll.M_USER_IN_USE:throw new Hu(
za.Conflict,"User already exists");case ll.M_INVALID_USERNAME:throw new Hu(za.BadRequest,"Username invalid")
;case ll.M_EXCLUSIVE:throw new Hu(za.Conflict,"User name conflicts with exclusive namespace");default:throw new Hu(
za.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
pc.debug("whoami: Fetching account whoami... ",r),n=await zu.getJson(r,{Authorization:`Bearer ${t}`}),pc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,pc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void pc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(pc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await zu.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw pc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
pc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(R(
n=r=await zu.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw pc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return pc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(pc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Hu))throw new Hu(za.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Hu(za.Unauthorized
):403===r?new Hu(za.Forbidden):429===r?new Hu(429):new Hu(za.InternalServerError,"Failed to register user");if(!Ve(
r=null==e?void 0:e.getBody()))throw new Hu(za.InternalServerError,"Failed to register user");switch(r.errcode){
case ll.M_USER_IN_USE:throw new Hu(za.Conflict,"User already exists");case ll.M_INVALID_USERNAME:throw new Hu(
za.BadRequest,"Username invalid");case ll.M_EXCLUSIVE:throw new Hu(za.Conflict,
"User name conflicts with exclusive namespace");default:throw new Hu(za.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,v;try{if(i={type:il.M_LOGIN_PASSWORD,identifier:{type:il.M_ID_USER,user:r},
password:n},pc.debug("Sending login with userId:",r),!(R(h=o=await zu.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(E(
null==h?void 0:h.MatrixWellKnownDTO)||R(_=h)&&I(_,["m.homeserver","m.identity_server"])&&R(v=_["m.homeserver"])&&I(v,[
"base_url"])&&p(null==v?void 0:v.base_url)&&(E(_["m.identity_server"])||R(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw pc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");pc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new fc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw pc.debug(
"Could not login: ",e),new Hu(za.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(R(n=r=await zu.getJson(this._resolveHomeServerUrl(`/directory/room/${Ke(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw pc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return pc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Hu&&e.getStatusCode()===za.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(R(
t=e=await zu.getJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&N(null==t?void 0:t.joined,he,qe)))throw pc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return pc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!q(i=await zu.getJson(this._resolveHomeServerUrl(
`/rooms/${Ke(e)}/state/${Ke(t)}/${Ke(r)}`),{Authorization:`Bearer ${n}`})))throw pc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return pc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Hu&&e.getStatusCode()===za.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(R(s=o=await zu.putJson(this._resolveHomeServerUrl(
`/rooms/${Ke(e)}/state/${Ke(t)}/${Ke(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw pc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return pc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw pc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),pc.debug("forgetRoom: received: ",r)}catch(e){throw pc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),pc.debug("leaveRoom: received: ",r)}catch(e){throw pc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e))throw new TypeError(
`roomId invalid: ${e}`);if(!he(t))throw new TypeError(`userId invalid: ${t}`);if(pc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await zu.postJson(
this._resolveHomeServerUrl(`/rooms/${Ke(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),pc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw pc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},pc.debug("Sending message with body:",t
),r=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,pc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(pc.debug("Creating room with body:",e),!(R(
e=t=await zu.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&ue(null==e?void 0:e.room_id)&&(E(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw pc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return pc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(pc.debug(
`Joining to room ${t} with body:`,e),!(R(i=n=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw pc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return pc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw pc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(pc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!q(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=Ma(Di(L(s),e=>{var t=s[e]
;return`${Ke(e)}=${Ke(t)}`}),"&"),!(R(t=e=await zu.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(E(null==t?void 0:t.rooms)||je(null==t?void 0:t.rooms)
)&&(E(null==t?void 0:t.presence)||He(null==t?void 0:t.presence))&&(E(null==t?void 0:t.account_data)||Ce(
null==t?void 0:t.account_data))&&(E(null==t?void 0:t.to_device)||Be(null==t?void 0:t.to_device))&&(E(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(E(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw pc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${We(e)}`);return e}isAlreadyInTheRoom(
e){if(Ve(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===ll.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){ks(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(ul.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)pc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,pc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(pc.info("Initial sync request started"),
this._state!==sl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=sl.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),pc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:pc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),pc.info("Timer started..."),this._state=sl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:pc.error("No next_batch in the response: ",t),r=fo(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?be(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=L(s),ks(n,e=>{var t,r=(r=s[e],fo([],
null!=r&&r.state?ge(null==r?void 0:r.state):[],null!=r&&r.timeline?Re(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,fo([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?be(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=L(a),ks(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=L(l),ks(o,e=>{var t=l[e],t=fo([],ge(
null==t?void 0:t.state),Re(null==t?void 0:t.timeline),be(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(fc,
"Event",ul),(Dl=Ol=Ol||{}).PRIVATE_CHAT="private_chat",Dl.PUBLIC_CHAT="public_chat",
Dl.TRUSTED_PRIVATE_CHAT="trusted_private_chat",cl=Ol,(Ol=Pl=Pl||{}).INVITED="invited",Ol.JOINED="joined",
Ol.SHARED="shared",Ol.WORLD_READABLE="world_readable",dl=Pl,(Pl=Ll=Ll||{}).PUBLIC="public",Pl.KNOCK="knock",
Pl.INVITE="invite",Pl.PRIVATE="private",Pl.RESTRICTED="restricted",hl=Ll,(Ll=Pl={}).CAN_JOIN="can_join",
Ll.FORBIDDEN="forbidden",_l=Pl;const gc=Uu.createLogger("MatrixCrudRepository");class Tc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=P(i))&&void 0!==i?i:ol.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});gc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=L(n);if(gc.debug("joinedRooms = ",i),t=L(t),gc.debug(
"invitedRooms = ",t),(t=Os(t,e=>!i.includes(e))).length){gc.debug("Joining to rooms = ",t);let r=0;if(await Wo(t,async(e
,t)=>{await e;try{gc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){gc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return gc.debug(
"Fetching results again after joining"),this.getAll()}return Wo(i,(e,i)=>{var t=n[i],r=Os(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Sa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return fo(e,Di(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Di(Os(e,
e=>zn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();gc.debug("createItem: clientUserId = ",o),r={data:e,version:1},gc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),gc.debug(
"createItem: serviceAccountId = ",n),i=Os(ss(fo(n?[n]:[],t||[])),e=>e!==o),gc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,gc.debug("createItem: allowedGroups = ",n),t={[ol.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:ol.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:dl.SHARED}},{type:ol.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:_l.FORBIDDEN}}]
;void 0!==n&&s.push({type:ol.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:hl.RESTRICTED,allow:Di(n,e=>({
type:ol.M_ROOM_MEMBERSHIP,room_id:e}))}}),gc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},gc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&ks(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:cl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),gc.debug(
"createItem: response = ",t),t=t.room_id,gc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
gc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(gc.debug(
"response = ",JSON.stringify(n,null,2)),!q(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!v(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Di(L(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!q(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Hu(404);if(!v(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),gc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Hu(404);if(!v(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){gc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){gc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),gc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Hu&&[401,403,404].includes(e.getStatusCode()))throw e;throw gc.error(
`Error in deleteById(${t}): `,e),new Hu(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await Wo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw gc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const Sc=Uu.createLogger(
"runMatrixRoomResource"),Ac=Uu.createLogger("NodeSystemProcess");class yc{constructor(e,t,r,n=!0){l(this,"_command",
void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,"_stderrCallback",void 0),
l(this,"_closeCallback",void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,"_printToParentProcess",
void 0),l(this,"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",void 0),
this._observer=new ec("NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,
this._printToParentProcess=n,this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this)
,this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=Xl.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(rl.ON_EXIT
)?this._observer.triggerEvent(rl.ON_EXIT,e):Ac.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(yc,"Event",rl);class Rc{constructor(){}
toString(){return"NodeSystem"}toJSON(){return{type:"NodeSystem"}}createProcess(e,t,r){return new yc(e,t,r)}}
const Nc=Uu.createLogger("main");Uu.setLogLevel(fu),async function(t=[]){var r,n,i,o;try{if(Nc.debug(
`Loglevel ${Uu.getLogLevelString()}`),r=Cu,t.shift(),!t.shift())return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;if(
0===t.length)return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return console.log(H(r)),qa.OK;case 1:return console.log(function(e){const t=Os([yu?"LOCAL":"",Ru?"HTTP":"",
Nu?"MATRIX":"",wu?"TEST":"",bu?"DEV":""],e=>!!e);return`${e} v${Tu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Tu}'
  BUILD_NODE_ENV              = '${Su}'
  BUILD_DATE                  = '${Au}'
  BUILD_WITH_LOCAL_RESOURCES  = '${yu}'
  BUILD_WITH_HTTP_RESOURCES   = '${Ru}'
  BUILD_WITH_MATRIX_RESOURCES = '${Nu}'
`}(r)),qa.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=ku.parseRunnerResource(n)))return Nc.error(
`Unsupported argument: ${n}`),console.log(H(r)),qa.UNKNOWN_ARGUMENT;if((o=await async function(e,t){switch(t.type){
case Ba.HTTP:return Ru?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(r.authentication)&&(
c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(n=r.authentication.username,
i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64")}`)),void 0===(
o=await zu.getJson(r.url,c)))return vc.error(`Failed to load URL "${r.url}": `,o),qa.RESOURCE_LOAD_FAILED;if(void 0===(
s=oe(o)))return vc.error(`Model from URL "${r.url}" was not valid: `,o),qa.RESOURCE_MODEL_INVALID
;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new _c(t,a,l,Ou,Pu);let e=cc.createController(s,u)
;return vc.info(`Running ${e.getName()} from ${r.url}`),await cc.startAndWaitUntilFinished(e),vc.info(
`Successfully finished ${e.getName()} from ${r.url}`),qa.OK}catch(e){return vc.error("Error: ",e),
qa.HTTP_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;case Ba.LOCAL:return yu?async function(t,r){var n,i,o,s,a,l;try{if(
n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{ql.readFile(i,o,(e,t)=>{e?n(e
):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(o=oe(i=JSON.parse(n)))
)return Ec.warn("Model was not valid: ",i),qa.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters,
a=null==o?void 0:o.variables,l=new _c(t,s,a,Ou,Pu);let e=cc.createController(o,l);return Ec.info(`Running ${e.getName(
)} from ${r.path}`),await cc.startAndWaitUntilFinished(e),Ec.info(`Successfully finished ${e.getName()} from ${r.path}`)
,qa.OK}catch(e){return Ec.error("Error: ",e),qa.LOCAL_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;case Ba.MATRIX:
return Nu?async function(i,o){var s,a,l,u,c,d,h,_,v,E,p,f,g,T,S,A,y,R,N,m,w;try{Sc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new fc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return qa.UNKNOWN_AUTHENTICATION_TYPE;e=new fc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return Sc.error("Could not detect agent user ID"),qa.UNKNOWN_AGENT_ID
;Sc.info(`Agent user ID: ${t}`);const b=new Tc(e,ol.FI_NOR_AGENT_DTO);if(0===(w=await b.getAll()).length
)return Sc.debug("Detected no pools available."),qa.OK;T=(1===w.length?(Sc.debug(
"Detected single pool available. Picking it."),w[0]):(Sc.debug(
`Detected ${w.length} pools available. Picking one by random.`),w[Math.floor(Math.random()*w.length)])).id,Sc.info(
`Pool ID: ${T}`);const C=new Tc(e,ol.FI_NOR_PIPELINE_RUN_DTO,"",void 0,ol.FI_NOR_PIPELINE_STATE,"",[T])
;S=await C.getAll(),Sc.debug("runList = ",S);let r;if(0===S.length)return Sc.debug("Detected no work available."),qa.OK
;r=1===S.length?(Sc.debug("Detected single work available. Picking it."),S[0]):(Sc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return Sc.warn(`Work ID was already running: ${I}`),qa.CONFLICT;if(Sc.info(
`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),await C.update(r.id,A),r=await C.findById(r.id),
!r)return Sc.warn("The work item disappeared while we were selecting it."),qa.WORK_CANCELLED;if(I!==r.id
)return Sc.error(`The work item ID conflict: ${I} !== ${r.id}`),qa.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(
_=h.data)||void 0===_?void 0:_.agentPoolId)||t!==(null===(v=r)||void 0===v||null===(E=v.data
)||void 0===E?void 0:E.agentAccountId))return Sc.error(""),qa.CONFLICT;if(Sc.debug(
"Work item secured to us! We can start the job."),void 0===(y=oe(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return Sc.warn("Work item did not contain correct pipeline model: ",r),
qa.RESOURCE_MODEL_INVALID;R=null==y?void 0:y.parameters,N=null==y?void 0:y.variables,m=new _c(i,R,N,Ou,Pu)
;let n=cc.createController(y,m);await ze(e,C,I,r,n);const D=n.onChanged(()=>{ze(e,C,I,r,n).catch(e=>{Sc.error(
"Failed to save controller state: ",e)})});try{await cc.startAndWaitUntilFinished(n)}finally{D(),await ze(e,C,I,r,n)}
return qa.OK}catch(e){return Sc.error("Error: ",e),qa.MATRIX_RESOURCE_FAILED}}(e,t):qa.UNBUILD_FEATURE;default:
return qa.UNKNOWN_RESOURCE_TYPE}}(new Rc,i))!==qa.OK)return o===qa.UNKNOWN_RESOURCE_TYPE?(Nc.error(
`Error NorPP${o}: ${G(o)}: Resource type was unknown: ${i.type}`),console.log(H(r)),qa.UNKNOWN_RESOURCE_TYPE):(function(
e){if(Sa(e)&&!(e<0||255<e)){if(Wa.FATAL_SIGNAL_RANGE_START<=e&&e<=Wa.FATAL_SIGNAL_RANGE_END)return 1;switch(e){
case Wa.OK:case Wa.GENERAL_ERRORS:case Wa.MISUSE_OF_SHELL_BUILTINS:case Wa.ARGUMENT_PARSE_ERROR:
case Wa.UNKNOWN_ARGUMENT:case Wa.UNKNOWN_RESOURCE_TYPE:case Wa.UNKNOWN_AUTHENTICATION_TYPE:case Wa.RESOURCE_LOAD_FAILED:
case Wa.RESOURCE_MODEL_INVALID:case Wa.LOCAL_RESOURCE_FAILED:case Wa.HTTP_RESOURCE_FAILED:
case Wa.MATRIX_RESOURCE_FAILED:case Wa.UNIMPLEMENTED_FEATURE:case Wa.UNBUILD_FEATURE:case Wa.FATAL_ERROR:case Wa.USAGE:
case Wa.DATAERR:case Wa.NOINPUT:case Wa.NOUSER:case Wa.NOHOST:case Wa.UNAVAILABLE:case Wa.SOFTWARE:case Wa.OSERR:
case Wa.OSFILE:case Wa.CANTCREAT:case Wa.IOERR:case Wa.TEMPFAIL:case Wa.PROTOCOL:case Wa.NOPERM:case Wa.CONFIG:
case Wa.COMMAND_INVOKED_CANNOT_EXECUTE:case Wa.COMMAND_NOT_FOUND:case Wa.INVALID_ARGUMENT_TO_EXIT:
case Wa.FATAL_SIGNAL_RANGE_START:case Wa.FATAL_SIGNAL_RANGE_END:case Wa.EXIT_STATUS_OUT_OF_RANGE:
case Wa.UNKNOWN_AGENT_ID:case Wa.WORK_CANCELLED:case Wa.CONFLICT:return 1;default:return}}}(o)?Nc.error(
`Error EX-${o}: ${G(o)}: for ${U(i.type)} resource ${n}`):Nc.error(`Error: Exit status ${o}: for ${U(i.type
)} resource ${n}`),o)}while(1<=t.length);return qa.OK}catch(e){return Nc.error("Fatal error: ",e),qa.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
