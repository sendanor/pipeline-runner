#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function D(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
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
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Pn);return o.cache=new(u.Cache||Ln),o}
function v(e){return void 0===e}function c(e){return rr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!rr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||A(e
,t))}function h(e){return v(e)||Aa(e)}function p(e){return pa(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&A(e,p)}function E(e){return Ra(e)}function T(e){return v(e)||Ra(e)}function g(e,t){return Hi(e,t)}
function A(e,t){return Ki(e,t)}function S(e,t){return ht(e)&&A(Fa(e),t)}function R(e,t=p,r=void 0){return!(
void 0!==r&&!S(e,r))&&(t=void 0!==t?t:p,ht(e)&&A(P(e),t))}function N(e){return!!ht(e)&&!(e instanceof Date)&&!vt(e)&&!c(
e)&&R(e,p,void 0)}function y(e,t=p,r=void 0){return!!ht(e)&&!(e instanceof Date)&&!vt(e)&&!c(e)&&R(e,t,r)}function m(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!ht(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(vt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||S(e,e=>r(e)))throw e=jo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Fa(e),n=Mo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function w(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return m(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>g(e,e=>e(t))}function b(e){return ht(e)}function I(e,t){return b(e
)&&0===(r=t,Os(P(e),e=>!r.includes(e)).length);var r}function O(e){if(void 0!==e&&""!==e)return ca(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=Di(e,(e,t)=>t);return Os(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Os(e,e=>t(e))):[]}function U(e){switch(e
){case Ha.HTTP:return"http";case Ha.LOCAL:return"local";case Ha.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return N(e)&&function(){switch(null==e?void 0:e.type){
case xa.NONE:case xa.BASIC_AUTH:case xa.BEARER_AUTH:return 1;default:return}}()}function F(e){return N(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===Ja.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:Ja.BASIC_AUTH,username:r,password:n
}}function M(e){return N(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===Ja.BEARER_AUTH&&p(
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
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return yu?`USAGE: ${e} ARG(1) [...ARG(N)]

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
`:""}${Su?`

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
`}function B(e){if(Aa(e))switch(e){case Va.OPTIONS:return"options";case Va.GET:return"get";case Va.POST:return"post"
;case Va.PUT:return"put";case Va.DELETE:return"delete";case Va.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function x(e){return!(!pa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function J(e){return N(e)&&I(e,["type","value"
])&&(null==e?void 0:e.type)===Pl.STRING&&p(null==e?void 0:e.value)}function W(e){return p(e)||Aa(e)||ca(e)||da(e)}
function q(e){return W(e)||d(e,C(q,v))||V(e)}function V(e){return N(e)&&R(e,p,C(q,v))}function K(e){return v(e)||V(e)}
function z(e){return W(e)||Y(e)||X(e)}function X(e){return N(e)&&R(e,p,C(z,v))}function Y(e){return d(e,C(z,v))}
function Q(e){return N(e)&&(v(null==e?void 0:e.parameters)||y(null==e?void 0:e.parameters,p,J))&&(v(
null==e?void 0:e.variables)||V(null==e?void 0:e.variables))}function Z(e){return Q(e)&&x(null==e?void 0:e.name)&&p(
null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,void 0===(
r=null==e?void 0:e.env)||y(r,n,i))&&I(e,zu);var t,r,n,i}function ee(e){return!(!Q(e)||!Z(e)&&!(Q(e)&&N(e)&&x(
null==e?void 0:e.name)))}function te(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&I(e,Xu)}
function re(e){if(te(e))return e}function ne(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&I(
e,Yu)}function ie(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&I(e,Qu)}function oe(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e)
)return e}(e))&&void 0!==t?t:re(e))&&void 0!==t?t:null!==(e=function(e){if(Z(e))return e}(t=e))&&void 0!==e?e:re(t)}
function se(e){return b(e)&&vt(null==e?void 0:e.getName)&&vt(null==e?void 0:e.isRunning)&&vt(null==e?void 0:e.isStarted
)&&vt(null==e?void 0:e.isPaused)&&vt(null==e?void 0:e.isCancelled)&&vt(null==e?void 0:e.isFinished)&&vt(
null==e?void 0:e.isFailed)&&vt(null==e?void 0:e.isSuccessful)&&vt(null==e?void 0:e.start)&&vt(null==e?void 0:e.pause
)&&vt(null==e?void 0:e.resume)&&vt(null==e?void 0:e.stop)&&vt(null==e?void 0:e.destroy)&&vt(null==e?void 0:e.toString
)&&vt(null==e?void 0:e.toJSON)&&vt(null==e?void 0:e.onStarted)&&vt(null==e?void 0:e.onPaused)&&vt(
null==e?void 0:e.onResumed)&&vt(null==e?void 0:e.onCancelled)&&vt(null==e?void 0:e.onFailed)&&vt(
null==e?void 0:e.onFinished)&&vt(null==e?void 0:e.onChanged)}function ae(e){return e instanceof tc}function le(e){
return e instanceof nc}function ue(e){return p(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function de(e){return N(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&T(e["m.joined_member_count"])&&T(e["m.invited_member_count"]);var t}function he(e){return p(e)&&!!e&&"@"===e[0]}
function _e(e){return N(e)&&I(e,["content","type","sender"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function Ee(e){return N(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&K(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function ve(e){try{return function(e){if(!N(e))throw new TypeError(
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
return e.message}}function pe(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||V(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function fe(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!V(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!V(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Te(e){return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ge(e){
return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,pe)}function Ae(e){try{return function(e){if(!N(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,pe))throw e=jo(null==e?void 0:e.events,e=>!pe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${fe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Se(e){return N(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&V(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function Re(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!Ee(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ve(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Ne(e){return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ye(e){
return N(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Se)&&ca(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function me(e){try{return function(e){if(!N(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Se)){var t=jo(null==e?void 0:e.events,e=>!Se(e));throw new TypeError(
`Property "events" item was not correct: ${Re(t)}`)}if(!ca(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function we(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function Ce(e){
return fo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function be(e){return N(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,_e)}function Ie(e){return N(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function De(e){return N(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||ge(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||ye(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||we(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||be(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Ie(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!N(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!ge(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ae(e)}`);if(
!v(null==e?void 0:e.timeline)&&!ye(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${me(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!we(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!be(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Ie(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return N(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&V(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||Ee(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Pe(e){try{return function(e){if(!N(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!V(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Le)}function $e(e){try{return function(e){if(!N(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Le))throw e=jo(
null==e?void 0:e.events,e=>!Le(e)),new TypeError(`Property "events" had invalid item: ${Pe(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return N(e)&&I(e,["invite_state"])&&Ue(
null==e?void 0:e.invite_state)}function ke(e){try{return function(e){if(!N(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Ue(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Me(e){return N(e)&&I(e,[
"state","timeline","account_data"])&&ge(null==e?void 0:e.state)&&ye(null==e?void 0:e.timeline)&&be(
null==e?void 0:e.account_data)}function je(e){return N(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,ue,De))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,ue,Fe))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,ue,Me))}function Ge(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,ue,De))throw new TypeError(`Property "join" was invalid: ${w(
null==e?void 0:e.join,ue,De,ce,Oe)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${w(null==e?void 0:e.invite,ue,Fe,ce,ke)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,ue,Me))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function He(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
_e)}function Be(e){return N(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function xe(e){return N(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&d(null==e?void 0:e.left,he)}function Je(e){return y(e,p,E)}
function We(e){try{return function(e){if(!N(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!je(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ge(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!He(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!be(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Be(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Je(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function qe(e){return N(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||da(null==e?void 0:e.avatar_url))}function Ve(e){
return N(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case al.M_USER_IN_USE:
case al.M_INVALID_USERNAME:case al.M_EXCLUSIVE:case al.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function Ke(e){return encodeURIComponent(e)}async function ze(e,t,r,n,i){n=D(D({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,ol.FI_NOR_PIPELINE_STATE,"",i.toJSON())}var Xe,Ye,Qe,Ze,et,tt,rt,nt,it,
ot,st,at,lt,ut,ct,dt,ht,_t,Et,vt,pt,ft,Tt,gt,At,St,Rt,Nt,yt,mt,wt,Ct,bt,It,Dt,Ot,Lt,Pt,Ut,$t,Ft,kt,Mt,jt,Gt,Ht,Bt,xt,Jt,
Wt,qt,Vt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,Tr,gr,Ar,Sr,Rr,Nr,yr,mr,wr,Cr,br,Ir,Dr,
Or,Lr,Pr,Ur,$r,Fr,kr,Mr,jr,Gr,Hr,Br,xr,Jr,Wr,qr,Vr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,
Tn,gn,An,Sn,Rn,Nn,yn,mn,wn,Cn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,kn,Mn,jn,Gn,Hn,Bn,xn,Jn,Wn,qn,Vn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,
ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,Ti,gi,Ai,Si,Ri,Ni,yi,mi,wi,Ci,bi,Ii,Di,Oi,Li,Pi,Ui,$i,Fi,ki,Mi,ji,Gi,Hi,Bi,xi,
Ji,Wi,qi,Vi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,To,go,Ao,So,Ro,No,yo,mo,wo,Co,bo,Io,Do,
Oo,Lo,Po,Uo,$o,Fo,ko,Mo,jo,Go,Ho,Bo,xo,Jo,Wo,qo,Vo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,
fs,Ts,gs,As,Ss,Rs,Ns,ys,ms,ws,Cs,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,ks,Ms,js,Gs,Hs,Bs,xs,Js,Ws,qs,Vs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,
na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,Ta,ga,Aa,Sa,Ra,Na,ya,ma,wa,Ca,ba,Ia,Da,Oa,La,Pa,Ua,$a,Fa,ka,Ma,ja,Ga,Ha,Ba,
xa,Ja,Wa,qa,Va,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,Tl,gl,Al,Sl,Rl,Nl,yl,ml,wl,Cl,bl,
Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,kl,Ml,jl,Gl,Hl,Bl,xl,Jl,Wl=require("fs"),ql=require("querystring"),Vl=require("url"),Kl=require(
"path"),zl=require("child_process"),Xl=e(Wl),Yl=t(ql),Ql=e(Vl),Zl=e(Kl),
eu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,tu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ru=function(){
this.__data__=[],this.size=0},nu=function(e,t){return e===t||e!=e&&t!=t},iu=nu,ou=function(e,t){for(var r=e.length;r--;
)if(iu(e[r][0],t))return r;return-1},su=ou,au=Array.prototype,lu=au.splice,uu=ou,cu=ou,du=function(e){return-1<cu(
this.__data__,e)},hu=ou,_u=ru,Eu=function(e){var t=this.__data__;return!((e=su(t,e))<0||(e==t.length-1?t.pop():lu.call(t
,e,1),--this.size,0))},vu=function(e){var t=this.__data__;return(e=uu(t,e))<0?void 0:t[e][1]},pu=du,fu=function(e,t){
var r=this.__data__,n=hu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=_u,
r.prototype.delete=Eu,r.prototype.get=vu,r.prototype.has=pu,r.prototype.set=fu,it=fl=r,Tl=function(){
this.__data__=new it,this.size=0},Gs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
vl=function(e){return this.__data__.get(e)},pl=function(e){return this.__data__.has(e)},
Rl=gl="object"==typeof eu&&eu&&eu.Object===Object&&eu,yl="object"==typeof self&&self&&self.Object===Object&&self,fr=Nl=(
Qo=Rl||yl||Function("return this")()).Symbol,$l=Object.prototype,ot=$l.hasOwnProperty,st=$l.toString,
at=fr?fr.toStringTag:void 0,Tr=Object.prototype,lt=Tr.toString,ut=function(e){var t,r,n=ot.call(e,at),i=e[at];try{t=!(
e[at]=void 0)}catch(e){}return r=st.call(e),t&&(n?e[at]=i:delete e[at]),r},ct=function(e){return lt.call(e)},dt=(Bs=Nl
)?Bs.toStringTag:void 0,_t=ml=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
dt&&dt in Object(e)?ut:ct)(e)},Et=ht=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
vt=function(e){return!!Et(e)&&("[object Function]"==(e=_t(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},gr=Qo["__core-js_shared__"],
El=/[^.]+$/.exec((Wt=gr)&&Wt.keys&&Wt.keys.IE_PROTO||""),pt=El?"Symbol(src)_1."+El:"",qt=Function.prototype,
ft=qt.toString,Tt=vt,gt=function(e){return!!pt&&pt in e},At=ht,St=Jr=function(e){if(null!=e){try{return ft.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Sr=/[\\^$.*+?()[\]{}|]/g,Rt=/^\[object .+?Constructor\]$/,
Hs=Function.prototype,Ar=Object.prototype,ql=Hs.toString,Vl=Ar.hasOwnProperty,Nt=RegExp("^"+ql.call(Vl).replace(Sr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=function(e){return!(!At(e
)||gt(e))&&(Tt(e)?Nt:Rt).test(St(e))},mt=function(e,t){return null==e?void 0:e[t]},au=(Kl=function(e,t){return t=mt(e,t)
,yt(t)?t:void 0})(Qo,"Map"),ou=Kl(Object,"create"),Ct=wt=ru=ou,Bl=Object.prototype,bt=Bl.hasOwnProperty,It=ru,
xl=Object.prototype,Dt=xl.hasOwnProperty,Ot=ru,du=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Jl=function(e){var t,r=this.__data__;return Ct?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:bt.call(r,e)?r[e]:void 0},_u=function(e){var t=this.__data__;return It?void 0!==t[e]:Dt.call(t,e)},
Eu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ot&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=wt?wt(null):{},this.size=0},i.prototype.delete=du,i.prototype.get=Jl,
i.prototype.has=_u,i.prototype.set=Eu,Lt=i,Pt=fl,Ut=au,vu=function(){this.size=0,this.__data__={hash:new Lt,map:new(
Ut||Pt),string:new Lt}},$t=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},jt=Mt=kt=Ft=function(e,t){
return e=e.__data__,$t(t)?e["string"==typeof t?"string":"hash"]:e.map},pu=function(e){return e=Ft(this,e).delete(e),
this.size-=e?1:0,e},fu=function(e){return kt(this,e).get(e)},eu=function(e){return Mt(this,e).has(e)},gl=function(e,t){
var r=jt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=vu,o.prototype.delete=pu,
o.prototype.get=fu,o.prototype.has=eu,o.prototype.set=gl,Ht=au,Bt=yl=o,xt=Gt=fl,Xo=Gs,$l=vl,fr=pl,Tr=function(e,t){var r
,n=this.__data__;if(n instanceof Gt){if(r=n.__data__,!Ht||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Bt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Tl,s.prototype.delete=Xo,
s.prototype.get=$l,s.prototype.has=fr,s.prototype.set=Tr,Bs=s,Jt=yl,gr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=gr,Vt=Wt=a,Kt=El=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},zt=qt=function(e,t){return e.has(t)},Hs=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new Vt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!Kt(t,function(e,t){if(!zt(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Ar=Qo.Uint8Array,Xt=Ar,Yt=nu,Qt=Hs,Zt=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},er=ql=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Sr=(Vl=Nl)?Vl.prototype:void 0,tr=Sr?Sr.valueOf:void 0,ou=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Xt(e),new Xt(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return Yt(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=Zt;case"[object Set]":return l=l||er,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=Qt(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(tr)return tr.call(e)==tr.call(t)}return!1},Bl=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},xl=Array.isArray,nr=Bl,ir=rr=xl,ru=function(e,t,r){
return t=t(e),ir(e)?t:nr(t,r(e))},or=du=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Jl=Object.prototype,sr=Jl.propertyIsEnumerable,_u=(ar=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),or(ar(t),function(e){return sr.call(t,e)}))}:function(){return[]},Eu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},lr=ml,vu=function(e){return ur(e)&&"[object Arguments]"==lr(e)},
cr=ur=pu=function(e){return null!=e&&"object"==typeof e},fu=Object.prototype,dr=fu.hasOwnProperty,
hr=fu.propertyIsEnumerable,eu=vu(function(){return arguments}())?vu:function(e){return cr(e)&&dr.call(e,"callee"
)&&!hr.call(e,"callee")},gl=Qo,fl=function(){return!1},gl=(gl=(Tl=(pl=(Tl=(pl=(vl=Gs={exports:{}}).exports
)&&!pl.nodeType&&pl)&&vl&&!vl.nodeType&&vl)&&pl.exports===Tl)?gl.Buffer:void 0)?gl.isBuffer:void 0,vl.exports=fl=gl||fl,
_r=/^(?:0|[1-9]\d*)$/,Xo=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&_r.test(e))&&-1<e&&e%1==0&&e<t},Er=ml,vr=$l=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},pr=pu,fr="[object Arguments]",Tr="[object Array]",
gr="[object Boolean]",Ar="[object Date]",Vl="[object Error]",Sr="[object Function]",xl="[object Map]",
fu="[object Object]",vu="[object RegExp]",pl="[object Set]",Tl="[object String]",gl="[object WeakMap]",
vl="[object ArrayBuffer]",fl="[object DataView]",(Rr={}
)["[object Float32Array]"]=Rr["[object Float64Array]"]=Rr["[object Int8Array]"]=Rr["[object Int16Array]"]=Rr["[object Int32Array]"]=Rr["[object Uint8Array]"]=Rr["[object Uint8ClampedArray]"]=Rr["[object Uint16Array]"]=Rr["[object Uint32Array]"]=!0
,
Rr[fr]=Rr[Tr]=Rr[vl]=Rr[gr]=Rr[fl]=Rr[Ar]=Rr[Vl]=Rr[Sr]=Rr[xl]=Rr["[object Number]"]=Rr[fu]=Rr[vu]=Rr[pl]=Rr[Tl]=Rr[gl]=!1
,Jl=function(e){return pr(e)&&vr(e.length)&&!!Rr[Er(e)]},fu=function(t){return function(e){return t(e)}},vu=Rl,gl=(gl=(
Tl=pl={exports:{}}).exports)&&!gl.nodeType&&gl,gl=(Al=gl&&Tl&&!Tl.nodeType&&Tl)&&Al.exports===gl,Sl=gl&&vu.process,
vu=function(){try{return Al&&Al.require&&Al.require("util").types||Sl&&Sl.binding&&Sl.binding("util")}catch(e){}}(),
Tl.exports=vu,Rl=Jl,vu=(Tl=(gl=pl.exports)&&gl.isTypedArray)?fu(Tl):Rl,Nr=Eu,yr=eu,mr=rr,wr=Gs.exports,Cr=Xo,br=Jl=vu,
gl=Object.prototype,Ir=gl.hasOwnProperty,Tl=function(e,t){var r,n=mr(e),i=!n&&yr(e),o=!n&&!i&&wr(e),s=!n&&!i&&!o&&br(e),
a=n||i||o||s,l=a?Nr(e.length,String):[],u=l.length;for(r in e)!t&&!Ir.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Cr(r,u))||l.push(r);return l},
Dr=Object.prototype,Rl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Dr)},
Gl=Object.keys,Hl=Object,Or=Rl,Lr=function(e){return Gl(Hl(e))},vu=Object.prototype,Pr=vu.hasOwnProperty,Ur=vt,$r=$l,
Fr=Tl,kr=function(e){var t,r;if(!Or(e))return Lr(e);for(r in t=[],Object(e))Pr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Mr=gl=function(e){return null!=e&&$r(e.length)&&!Ur(e)},jr=ru,Gr=_u,Hr=Rl=function(e){return(Mr(e)?Fr:kr)(e)}
,Br=function(e){return jr(e,Hr,Gr)},Eu=Object.prototype,xr=Eu.hasOwnProperty,vu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,T=Br(e),g=T.length;if(g!=Br(t).length&&!f)return!1;for(s=g;s--;)if(a=T[s],!(f?a in t:xr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<g;){if(c=e[a=T[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Tl=Kl(Qo,
"DataView"),ru=au,_u=Kl(Qo,"Promise"),au=Eu=Kl(Qo,"Set"),Qo=Kl(Qo,"WeakMap"),Wr=ml,Vr="[object Map]",
Kr="[object Promise]",zr="[object Set]",Xr="[object WeakMap]",Yr="[object DataView]",Qr=(qr=Jr)(Jr=Tl),Zr=qr(ru),en=qr(
_u),tn=qr(au),rn=qr(Qo),Tl=Wr,(Jr&&Tl(new Jr(new ArrayBuffer(1)))!=Yr||ru&&Tl(new ru)!=Vr||_u&&Tl(_u.resolve()
)!=Kr||au&&Tl(new au)!=zr||Qo&&Tl(new Qo)!=Xr)&&(Tl=function(e){var t=Wr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?qr(e):"")switch(e){case Qr:return Yr;case Zr:return Vr;case en:return Kr
;case tn:return zr;case rn:return Xr}return t}),nn=Bs,on=Hs,sn=ou,an=vu,ln=Tl,un=rr,cn=Gs.exports,dn=Jl,
hn="[object Arguments]",_n="[object Array]",En="[object Object]",au=Object.prototype,vn=au.hasOwnProperty,pn=function(e,
t,r,n,i,o){var s,a,l=un(e),u=un(t),c=l?_n:ln(e),d=u?_n:ln(t),h=(c=c==hn?En:c)==En,u=(d=d==hn?En:d)==En;if((d=c==d)&&cn(e
)){if(!cn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new nn,l||dn(e)?on(e,t,r,n,i,o):sn(e,t,c,r,n,i,o)):1&r||(
s=h&&vn.call(e,"__wrapped__"),a=u&&vn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new nn,an(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new nn)},Tn=Bs,gn=Qo=function e(t,r,n,i,o){return t===r||(null==t||null==r||!fn(t)&&!fn(r
)?t!=t&&r!=r:pn(t,r,n,i,e,o))},An=ht,Sn=Hs=function(e){return e==e&&!An(e)},Rn=Rl,Nn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Tn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?gn(a,s,3,n,l):u))return!1;return!0},yn=function(e){for(var t,r,n=Rn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Sn(r)];return n},mn=ou=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
vu=function(t){var r=yn(t);return 1==r.length&&r[0][2]?mn(r[0][0],r[0][1]):function(e){return e===t||Nn(e,t,r)}},wn=ml,
Cn=fn=pu,bn=rr,In=Tl=function(e){return"symbol"==typeof e||Cn(e)&&"[object Symbol]"==wn(e)},
Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/,Gs=function(e,t){if(bn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!In(e))||On.test(e)||!Dn.test(e)||null!=t&&e in Object(t)},
Ln=yl,Pn="Expected a function",u.Cache=Ln,
Un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$n=/\\(\\)?/g,_u=0
,jl=(_u=u(_u=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Un,function(e,t,r,n){i.push(
r?n.replace($n,"$1"):t||e)}),i},function(e){return 500===jl.size&&jl.clear(),e})).cache,Fn=tu,Bs=(au=Nl
)?au.prototype:void 0,jn=Bs?Bs.toString:void 0,Gn=yl=function e(t){if("string"==typeof t)return t;if(kn(t))return Fn(t,e
)+"";if(Mn(t))return jn?jn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},xn=_u,Jn=au=function(e){
return null==e?"":Gn(e)},Wn=Mn=Tl,Xn=qn=Bs=function(e,t){return Hn(e)?e:Bn(e,t)?[e]:xn(Jn(e))},Yn=eu,ei=$l,ri=function(e
,t){return null!=e&&t in Object(e)},ni=Jl=function(e,t,r){for(var n,i,o=(t=Xn(t,e)).length,s=!(n=-1);++n<o&&(i=ti(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ei(o)&&Zn(i,o)&&(Qn(e)||Yn(e))},ii=Qo,
oi=zn=function(e,t,r){return void 0===(t=null==e?void 0:Kn(e,t))?r:t},si=function(e,t){return null!=e&&ni(e,t,ri)},li=Hs
,ui=ou,di=Kn=$l=function(e,t){for(var r=0,n=(t=qn(t,e)).length;null!=e&&r<n;)e=e[Vn(t[r++])];return r&&r==n?e:void 0},
hi=function(t){return function(e){return null==e?void 0:e[t]}},_i=function(t){return function(e){return di(e,t)}},
Ei=ai=Bn=Gs,vi=ci=ti=Vn=Qo=function(e){if("string"==typeof e||Wn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
pi=vu,fi=function(r,n){return ai(r)&&li(n)?ui(ci(r),n):function(e){var t=oi(e,r);return void 0===t&&t===n?si(e,r):ii(n,t
,3)}},Ti=Hs=function(e){return e},gi=Qn=Hn=kn=rr,Ai=function(e){return Ei(e)?hi(vi(e)):_i(e)},Si=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Ri=Rl,wi=tu,bi=Gs=function(e,n){
var i=-1,o=mi(e)?Array(e.length):[];return yi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Di=function(e,t){return(Ii(e)?wi:bi
)(e,Ci(t))},Li=nu,Pi=mi=Ni=gl,Ui=Zn=Xo,$i=ht,Fi=El,Mi=function(e,n){var i;return Oi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Hi=function(e,t,r){var n=ji(e)?Fi:Mi;return r&&Gi(e,t,r)&&(t=void 0),n(e,ki(t))},Bi=Oi=yi=El=vu=function(e,t){
if(null==e)return e;if(!Ni(e))return e&&Si(e,t,Ri);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},xi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Ji=function(e,n){
var i=!0;return Bi(e,function(e,t,r){return i=!!n(e,t,r)}),i},Wi=ki=Ci=ou=function(e){
return"function"==typeof e?e:null==e?Ti:"object"==typeof e?gi(e)?fi(e[0],e[1]):pi(e):Ai(e)},qi=ji=Ii=rr,
Vi=Gi=vu=function(e,t,r){if(!$i(r))return!1;var n=typeof t;return!!("number"==n?Pi(r)&&Ui(t,r.length
):"string"==n&&t in r)&&Li(r[t],e)},Ki=function(e,t,r){var n=qi(e)?xi:Ji;return r&&Vi(e,t,r)&&(t=void 0),n(e,Wi(t))},
zi=Kl,Kl=function(){try{var e=zi(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Xi=Kl,Yi=function(e,t,r){
"__proto__"==t&&Xi?Xi(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},Qi=nu,nu=Object.prototype,
Zi=nu.hasOwnProperty,eo=function(e,t,r){var n=e[t];Zi.call(e,t)&&Qi(n,r)&&(void 0!==r||t in e)||Yi(e,t,r)},to=Bs,ro=Xo,
io=Qo,oo=function(e,t,r,n){var i,o,s,a,l,u,c;if(!no(e))return e;for(i=-1,s=(o=(t=to(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=io(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=no(c)?c:ro(t[i+1])?[]:{})),eo(a,l,u),a=a[l]}return e},so=function(e,t,r){return null==e?e:oo(e,t,r)},ao=eu
,uo=(nu=Nl)?nu.isConcatSpreadable:void 0,ho=function(e){return lo(e)||ao(e)||!!(uo&&e&&e[uo])},_o=co=Bl,
Eo=Bs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||ho,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):co(o,s
):i||(o[o.length]=s);return o},vo=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
po=lo=rr,fo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return _o(po(t)?vo(t):[t],Eo(e,1))},To=ou,go=gl,Ao=Rl,Xo=function(o){return function(e,t,r){var n,
i=Object(e);return go(e)||(n=To(t),e=Ao(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
Qo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},So=/\s/,Ro=function(
e){for(var t=e.length;t--&&So.test(e.charAt(t)););return t},No=/^\s+/,yo=eu=function(e){return e&&e.slice(0,Ro(e)+1
).replace(No,"")},mo=no=ht,wo=Tl,Co=/^[-+]0x[0-9a-f]+$/i,bo=/^0b[01]+$/i,Io=/^0o[0-7]+$/i,Do=parseInt,Oo=function(e){
var t;return"number"==typeof e?e:wo(e)?NaN:(mo(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=mo(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=yo(e),(t=bo.test(e))||Io.test(e)?Do(e.slice(2),t?2:8):Co.test(e)?NaN:+e))},
Lo=17976931348623157e292,Po=function(e){return e?(e=Oo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Lo:0===e?e:0},Uo=Qo,$o=ou
,Fo=Nl=function(e){var t=Po(e),e=t%1;return t==t?e?t-e:t:0},ko=Math.max,nu=Xo(Mo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Fo(r))<0&&(r=ko(n+r,0)),Uo(e,$o(t),r)):-1}),jo=nu,Go=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Ho=El,Bo=ou,xo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Jo=rr,Wo=function(e,t,r){var n=Jo(e)?Go:xo,i=arguments.length<3
;return n(e,Bo(t),r,i,Ho)},Bl=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},qo=Qo,Vo=function(e){return e!=e},Ko=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},zo=gl=function(e,t,r){return t==t?Ko(e,t,r):qo(e,Vo,r)},
Xo=function(e,t){return!(null==e||!e.length)&&-1<zo(e,t,0)},nu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},Qo=function(){},Qo=(Yo=Eu)&&1/ql(new Yo([,-0]))[1]==1/0?function(e){return new Yo(e)
}:Qo,Zo=Wt,es=Xo,ts=nu,rs=qt,ns=Qo,is=ql,os=function(e,t,r){var n,i,o,s,a=-1,l=es,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=ts;else if(200<=u){if(n=t?null:ns(e))return is(n);c=!1,l=rs,h=new Zo}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},ss=function(e){return e&&e.length?os(e):[]},as=Tl,ls=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=as(e),s=void 0!==t,a=null===t,l=t==t,u=as(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},us=tu,cs=$l,ds=ou,hs=Gs,_s=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Es=fu,vs=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=ls(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},ps=Hs,fs=rr,Gs=function(e,n,r){var i;return n=n.length?us(n
,function(t){return fs(t)?function(e){return cs(e,1===t.length?t[0]:t)}:t}):[ps],i=-1,n=us(n,Es(ds)),e=hs(e,function(t,e
,r){return{criteria:us(n,function(e){return e(t)}),index:++i,value:t}}),_s(e,function(e,t){return vs(e,t,r)})},
Ts=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},gs=Math.max,fu=function(o,s,a){return s=gs(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=gs(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ts(o,this,e)}},As=function(e){return function(){return e}},Ss=Kl,
Rs=Date.now,Fl=Ss?function(e,t){return Ss(e,"toString",{configurable:!0,enumerable:!1,value:As(t),writable:!0})}:Hs,
Ns=Bs,ys=Gs,ms=vu,function(){var e=Rs(),t=16-e+ +Ml;if(Ml=e,0<t){if(800<=++kl)return}else kl=0;Fl.apply(void 0,arguments
)}(fu($l=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ms(e,t[0],t[1])?t=[]:2<r&&ms(t[0],t[1],t[2])&&(t=[
t[0]]),ys(e,Ns(t,1),[])},void(Ml=kl=0),Hs),$l+""),Cs=du,bs=function(e,n){var i=[];return ws(e,function(e,t,r){n(e,t,r
)&&i.push(e)}),i},Is=ou,Os=function(e,t){return(Ds(e)?Cs:bs)(e,Is(t))},Ls=Hs,Ps=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Us=ws=El,$s=function(e){return"function"==typeof e?e:Ls},
Fs=Ds=rr,ks=function(e,t){return(Fs(e)?Ps:Us)(e,$s(t))},Ms=Bl,fu=function(e,t,r){var n=e.length;return r=void 0===r?n:r,
!t&&n<=r?e:Ms(e,t,r)},js=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
Kl=function(e){return js.test(e)},(Bs=pl.exports)&&Bs.isRegExp,Gs=function(e){return e.split("")},du="["+(
vu="\\ud800-\\udfff")+"]",Bl=(ou="[\\ufe0e\\ufe0f]?")+"(?:"+(Hs="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(
El="\\ud83c[\\udffb-\\udfff]")+")?(?:\\u200d(?:"+[pl="[^"+vu+"]",Bs="(?:\\ud83c[\\udde6-\\uddff]){2}",
vu="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")"+ou+"(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",du="(?:"+[pl+Hs+"?",Hs,Bs,vu,
du].join("|")+")",xs=RegExp(El+"(?="+El+")|"+du+Bl,"g"),Js=Gs,Ws=Kl,qs=function(e){return e.match(xs)||[]},Ks=Vs=gl,
zs=yl,Xs=eu,Ys=fu,Qs=function(e,t){for(var r=e.length;r--&&-1<Vs(t,e[r],0););return r},Zs=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<Ks(t,e[r],0););return r},ea=function(e){return(Ws(e)?qs:Js)(e)},ta=au,ra=function(e,t,r){return(
e=ta(e))&&(r||void 0===t)?Xs(e):e&&(t=zs(t))?(r=ea(e),e=ea(t),t=Zs(r,e),e=Qs(r,e)+1,Ys(r,t,e).join("")):e},
fu=Object.prototype,na=fu.hasOwnProperty,ia=function(e,t){return null!=e&&na.call(e,t)},oa=Jl,sa=function(e,t){
return null!=e&&oa(e,t,ia)},ua="[object Boolean]",ca=function(e){return!0===e||!1===e||la(e)&&aa(e)==ua},da=function(e){
return null===e},_a=rr,va="[object String]",pa=function(e){return"string"==typeof e||!_a(e)&&Ea(e)&&ha(e)==va},
fa=ha=aa=ml,Ta=Ea=la=pu,ga="[object Number]",Aa=function(e){return"number"==typeof e||Ta(e)&&fa(e)==ga},Ra=function(e){
return"number"==typeof e&&e==Sa(e)},Ca=function(e,t,r){return e=wa(e),r=null==r?0:Na(ma(r),0,e.length),t=ya(t),e.slice(r
,r+t.length)==t},ba=Na=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ia=ya=yl,
Da=ma=Sa=Nl,Oa=wa=au,La=function(e,t,r){var n;return e=Oa(e),t=Ia(t),n=e.length,n=r=void 0===r?n:ba(Da(r),0,n),0<=(
r-=t.length)&&e.slice(r,n)==t},Pa=tu,Ua=function(t,e){return Pa(e,function(e){return t[e]})},$a=Rl,Fa=function(e){
return null==e?[]:Ua(e,$a(e))},ml=Array.prototype,ka=ml.join,Ma=function(e,t){return null==e?"":ka.call(e,t)},(pu=ja={}
)[pu.DEBUG=0]="DEBUG",pu[pu.INFO=1]="INFO",pu[pu.WARN=2]="WARN",pu[pu.ERROR=3]="ERROR",pu[pu.NONE=4]="NONE",Ga=ja
;const Tu=null!==(yl=L("1.0.2"))&&void 0!==yl?yl:"?";au=null!==(Nl=L(""))&&void 0!==Nl?Nl:"io.nor.fi",Rl=null!==(tu=L(""
))&&void 0!==tu?tu:"nor-pipeline-runner",pu=null!==(ml=L(""))&&void 0!==ml?ml:"",Nl=null!==(yl=L(""))&&void 0!==yl?yl:""
;const gu=null!==(tu=L("production"))&&void 0!==tu?tu:"development",Au=null!==(ml=L("2021-09-02T21:05:02.859Z")
)&&void 0!==ml?ml:"";tu=null!==(yl=L(""))&&void 0!==yl?yl:"${",yl=null!==(ml=L(""))&&void 0!==ml?ml:"}"
;const Su=null===(ml=O(""))||void 0===ml||ml,Ru=null===(ml=O(""))||void 0===ml||ml,Nu=null===(ml=O(""))||void 0===ml||ml
,yu=null===(ml=O(""))||void 0===ml||ml;ml="production"===gu;const mu="test"===gu,wu=!ml&&!mu;pu=null!==(Xe=function(e){
if(e){if(function(){switch(e){case ja.DEBUG:case ja.INFO:case ja.WARN:case ja.ERROR:case ja.NONE:return 1;default:return
}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ja.DEBUG;case"INFO":return ja.INFO;case"WARN":
case"WARNING":return ja.WARN;case"ERR":case"ERROR":return ja.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return ja.NONE;default:return}}}(null!==(Xe=L(null===(ml=process)||void 0===ml||null===(Xe=ml.env
)||void 0===Xe?void 0:Xe.PIPELINE_LOG_LEVEL))&&void 0!==Xe?Xe:L(pu)))&&void 0!==Xe?Xe:Ga.INFO;const Cu=null!==(Ye=L(
null===(Xe=process)||void 0===Xe||null===(Ye=Xe.env)||void 0===Ye?void 0:Ye.PIPELINE_SERVER))&&void 0!==Ye?Ye:Rl,
bu=null!==(Qe=function(e){if(void 0!==e)return`${e}`}(null===(Rl=process)||void 0===Rl||null===(Qe=Rl.env
)||void 0===Qe?void 0:Qe.PIPELINE_AUTHENTICATION))&&void 0!==Qe?Qe:Nl,Iu=null!==(Ze=L(null===(Nl=process
)||void 0===Nl||null===(Ze=Nl.env)||void 0===Ze?void 0:Ze.PIPELINE_SERVER))&&void 0!==Ze?Ze:au,Du=null!==(et=L(null===(
au=process)||void 0===au||null===(et=au.env)||void 0===et?void 0:et.PIPELINE_VARIABLE_PREFIX))&&void 0!==et?et:tu,
Ou=null!==(tt=L(null===(tu=process)||void 0===tu||null===(tt=tu.env)||void 0===tt?void 0:tt.PIPELINE_VARIABLE_SUFFIX)
)&&void 0!==tt?tt:yl;class Lu{constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class Pu{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case ja.DEBUG:return"DEBUG";case ja.INFO:return"INFO";case ja.WARN:return"WARN";case ja.ERROR:return"ERROR"
;case ja.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=Ga.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=Ga.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=Ga.WARN&&this._logger.warn(...e)}static error(...e){this._level<=Ga.ERROR&&this._logger.error(...e)}
static createLogger(e){return new Lu(e,Pu)}}l(Pu,"Level",Ga),l(Pu,"_level",Ga.DEBUG),l(Pu,"_logger",console),(yl=Ha={}
)[yl.HTTP=0]="HTTP",yl[yl.LOCAL=1]="LOCAL",yl[yl.MATRIX=2]="MATRIX",Ba=Ha,(yl=xa={})[yl.NONE=0]="NONE",
yl[yl.BASIC_AUTH=1]="BASIC_AUTH",yl[yl.BEARER_AUTH=2]="BEARER_AUTH",Ja=xa;class Uu{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=j(e))&&void 0!==r?r:k(e):null!==(r=j(e,t))&&void 0!==r?r:k(e,t)}}
const $u=Pu.createLogger("MatrixRunnerResource");class Fu{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return N(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===Ba.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=ra(`${e}`)
).toLowerCase(),Ca(t,"http:")||Ca(t,"https:")?(t=new URL(e),t=null!==(t=Uu.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:Uu.parseRunnerAuthentication(bu),{type:Ba.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return N(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===Ba.LOCAL&&p(null==t?void 0:t.path)?e:(e=ra(`${e}`),(e=Ca(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&Xl.default.existsSync(e)?{type:Ba.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(N(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===Ba.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=ra(
`${i}`),$u.debug(`value: '${i}'`);let e=i.toLowerCase();if($u.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),$u.debug(`lowerCaseValue: '${e}'`),Ca(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),$u.debug(`url: '${s}': `,s),o=null!==(o=Uu.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:Uu.parseRunnerAuthentication(bu),$u.debug(
"auth: ",o);const e=`${s.host}`;$u.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),$u.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return $u.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,$u.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",$u.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,$u.debug(`pool: '${s}'`),{type:Ba.MATRIX,homeserver:e,pool:s,
authentication:o}}Ca(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Ca(e,"!")||Ca(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Iu}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||bu,r=r||Iu,{type:Ba.MATRIX,homeserver:r,pool:n,
authentication:Uu.parseRunnerAuthentication(t)}}}(e)}}(yl=Wa={})[yl.OK=0]="OK",yl[yl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
yl[yl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",yl[yl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
yl[yl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",yl[yl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
yl[yl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",yl[yl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
yl[yl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",yl[yl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
yl[yl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",yl[yl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
yl[yl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",yl[yl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
yl[yl.FATAL_ERROR=14]="FATAL_ERROR",yl[yl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
yl[yl.WORK_CANCELLED=16]="WORK_CANCELLED",yl[yl.CONFLICT=17]="CONFLICT",yl[yl.USAGE=64]="USAGE",
yl[yl.DATAERR=65]="DATAERR",yl[yl.NOINPUT=66]="NOINPUT",yl[yl.NOUSER=67]="NOUSER",yl[yl.NOHOST=68]="NOHOST",
yl[yl.UNAVAILABLE=69]="UNAVAILABLE",yl[yl.SOFTWARE=70]="SOFTWARE",yl[yl.OSERR=71]="OSERR",yl[yl.OSFILE=72]="OSFILE",
yl[yl.CANTCREAT=73]="CANTCREAT",yl[yl.IOERR=74]="IOERR",yl[yl.TEMPFAIL=75]="TEMPFAIL",yl[yl.PROTOCOL=76]="PROTOCOL",
yl[yl.NOPERM=77]="NOPERM",yl[yl.CONFIG=78]="CONFIG",
yl[yl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
yl[yl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",yl[yl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
yl[yl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
yl[yl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
yl[yl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",qa=Wa,(yl=Va={})[yl.OPTIONS=0]="OPTIONS",
yl[yl.GET=1]="GET",yl[yl.POST=2]="POST",yl[yl.PUT=3]="PUT",yl[yl.DELETE=4]="DELETE",yl[yl.PATCH=5]="PATCH",wl=Va
;const ku="WINDOW"===(Cl=null!==(Cl=null!==(rt=null===(yl=process)||void 0===yl||null===(rt=yl.env
)||void 0===rt?void 0:rt.NOR_REQUEST_CLIENT_MODE)&&void 0!==rt?rt:null===(Cl=process)||void 0===Cl||null===(nt=Cl.env
)||void 0===nt?void 0:nt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Cl?Cl:"")||!("undefined"==typeof window||!window.fetch
),Mu="NODE"===Cl||!ku;class ju{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await ju.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await ju.getRequestDataAsString(e)))return Yl.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await ju.getRequestDataAsString(e)))return JSON.parse(e)}}(Cl=Ka={}
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
Xa=Xa||{}).ERROR="error",Ya=Xa;class Gu extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
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
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Ya.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Hu=Mu?require("fs").promises:void 0,Bu=Pu.createLogger(
"NodeRequestClient");class xu{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case wl.GET:return this._getJson(t,r,n);case wl.POST:return this._postJson(t,r,n)
;case wl.PATCH:return this._patchJson(t,r,n);case wl.PUT:return this._putJson(t,r,n);case wl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await Hu.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void Bu.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Bu.debug(
"_checkSocketFile: ENOENT: ",e);throw Bu.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Zl.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Ql.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=D(D({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=D(D({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?Bu.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Bu.warn(
"Warning! Request had already ended when the response was received."),Bu.debug("Error from event: ",e)):(Bu.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Bu.warn(
"Warning! Request had already ended when the response was received."),Bu.debug("Exception: ",e)):(Bu.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ju.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(wl.GET,e,n,r).then(xu._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(wl.PUT,e,n,r).then(xu._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),this._request(wl.POST,e,n,r).then(
xu._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(wl.PATCH,e,n,r).then(xu._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(wl.DELETE,e,n,r).then(xu._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw Bu.error(`Unsuccessful response with status ${t}: `,e),new Gu(t,`Error ${t} for ${B(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Ju{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case wl.GET:return this._getJson(t,r,n);case wl.POST:return this._postJson(t,r,n)
;case wl.PUT:return this._putJson(t,r,n);case wl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ju._successResponse(e,wl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ju._successResponse(e,wl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ju._successResponse(e,wl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ju._successResponse(e,wl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${B(t)} ${n}`;return e.json().then(
e=>{throw new Gu(r,i,t,n,e)})}return e.json()}}const Wu=Mu?require("http"):void 0,qu=Mu?require("https"):void 0,
Vu=Pu.createLogger("RequestClient");class Ku{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(wl.GET,e,t)}static postJson(e,t,r){return Vu.debug(".postJson: ",e,t
,r),this._client.jsonRequest(wl.POST,e,r,t)}static patchJson(e,t,r){return Vu.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(wl.PATCH,e,r,t)}static putJson(e,t,r){return Vu.debug(".putJson: ",e,t,r),
this._client.jsonRequest(wl.PUT,e,r,t)}static deleteJson(e,t,r){return Vu.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(wl.DELETE,e,t,r)}static _initClient(){if(ku)return Vu.debug("Detected browser environment"),
new Ju(window.fetch.bind(window));if(Mu)return new xu(Wu,qu);throw new TypeError(
"Could not detect request client implementation")}}l(Ku,"_client",Ku._initClient()),(Ul=Ul||{}).STRING="string",Pl=Ul
;const zu=fo(Ul=["parameters","variables"],["name","command","args","env"]),Xu=fo(Ul,["name","steps"]),Yu=fo(Ul,["name",
"jobs"]),Qu=fo(Ul,["name","stages"]);class Zu{getName(){return this._name}constructor(e){l(this,"_name",void 0),l(this,
"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){
return sa(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],ks(e,e=>{try{e(t,...r
)}catch(e){console.error(`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})
):console.warn(`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Os(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
Ul=bl=bl||{})[Ul.CONSTRUCTED=0]="CONSTRUCTED",Ul[Ul.STARTED=1]="STARTED",Ul[Ul.PAUSED=2]="PAUSED",
Ul[Ul.CANCELLED=3]="CANCELLED",Ul[Ul.FINISHED=4]="FINISHED",Ul[Ul.FAILED=5]="FAILED",Qa=bl,(bl=Il=Il||{}
).PIPELINE="fi.nor.pipeline",bl.JOB="fi.nor.pipeline.job",bl.STAGE="fi.nor.pipeline.stage",
bl.TASK="fi.nor.pipeline.task",bl.STEP="fi.nor.pipeline.step",bl.SCRIPT_STEP="fi.nor.pipeline.step.script",Za=Il
;const ec=Pu.createLogger("JobController");(Il=el={}).JOB_CHANGED="JobController:jobChanged",
Il.JOB_STARTED="JobController:jobStarted",Il.JOB_PAUSED="JobController:jobPaused",
Il.JOB_RESUMED="JobController:jobResumed",Il.JOB_CANCELLED="JobController:jobCancelled",
Il.JOB_FAILED="JobController:jobFailed",Il.JOB_FINISHED="JobController:jobFinished";class tc{constructor(e,t,r=[]){if(l(
this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,
"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!x(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new Zu(`JobController#${this._name}`),
this._state=Qa.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Di(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=Os(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){ec.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Za.JOB,
state:this._state,name:this._name,steps:Di(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
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
`Job#${this._name} was already started`);return ec.info(`Starting job ${this._name}`),this._state=Qa.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(el.JOB_STARTED)&&this._observer.triggerEvent(
el.JOB_STARTED,this),this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return ec.info(
`Pausing job ${this._name}`),this._state=Qa.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
el.JOB_PAUSED)&&this._observer.triggerEvent(el.JOB_PAUSED,this),this._observer.hasCallbacks(el.JOB_CHANGED
)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return ec.info(`Resuming job ${this._name}`),this._state=Qa.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(el.JOB_RESUMED)&&this._observer.triggerEvent(
el.JOB_RESUMED,this),this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}
stop(){if(this._state!==Qa.STARTED)throw new Error(`Job#${this._name} was not started`);return ec.info(
`Stopping job ${this._name}`),this._state=Qa.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
el.JOB_CANCELLED)&&this._observer.triggerEvent(el.JOB_CANCELLED,this),this._observer.hasCallbacks(el.JOB_CHANGED
)&&this._observer.triggerEvent(el.JOB_CHANGED,this),this}onCancelled(e){return this.on(el.JOB_CANCELLED,e)}onChanged(e){
return this.on(el.JOB_CHANGED,e)}onFailed(e){return this.on(el.JOB_FAILED,e)}onFinished(e){return this.on(
el.JOB_FINISHED,e)}onPaused(e){return this.on(el.JOB_PAUSED,e)}onResumed(e){return this.on(el.JOB_RESUMED,e)}onStarted(e
){return this.on(el.JOB_STARTED,e)}getErrorString(){return Di(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Di(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){ec.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
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
this._observer.hasCallbacks(el.JOB_CHANGED)&&this._observer.triggerEvent(el.JOB_CHANGED,this))}}l(tc,"Event",el)
;const rc=Pu.createLogger("StageController");(Il=tl={}).STAGE_STARTED="StageController:stageStarted",
Il.STAGE_PAUSED="StageController:stagePaused",Il.STAGE_RESUMED="StageController:stageResumed",
Il.STAGE_FINISHED="StageController:stageFinished",Il.STAGE_FAILED="StageController:stageFailed",
Il.STAGE_CANCELLED="StageController:stageCancelled",Il.STAGE_CHANGED="StageController:stageChanged";class nc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!x(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=Qa.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Zu(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=Di(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:Za.STAGE,state:this._state,name:this._name,jobs:Di(this._jobs,e=>e.getStateDTO())}}toJSON(){
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
this._state!==Qa.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return rc.info(
`Starting stage ${this._name}`),this._state=Qa.STARTED,Os(this._jobs,t=>{try{return t.start(),!1}catch(e){
return rc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Qa.FAILED,
this._observer.hasCallbacks(tl.STAGE_FAILED)&&this._observer.triggerEvent(tl.STAGE_FAILED,this)
):this._observer.hasCallbacks(tl.STAGE_STARTED)&&this._observer.triggerEvent(tl.STAGE_STARTED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}pause(){if(
this._state===Qa.PAUSED)throw new Error(`Stage#${this._name} was already paused`);rc.info(`Pausing stage ${this._name}`)
,this._state=Qa.PAUSED;var e=Os(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return rc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&rc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(tl.STAGE_PAUSED
)&&this._observer.triggerEvent(tl.STAGE_PAUSED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}resume(){if(this._state===Qa.STARTED)throw new Error(
`Stage#${this._name} was already started`);rc.info(`Resuming stage ${this._name}`),this._state=Qa.STARTED;var e=Os(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return rc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&rc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(tl.STAGE_RESUMED
)&&this._observer.triggerEvent(tl.STAGE_RESUMED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);rc.info(`Stopping stage ${this._name}`),this._state=Qa.CANCELLED;var e=Os(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return rc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&rc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Di(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Di(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;A(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Os(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){rc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=g(this._jobs,e=>e.isFailed()),n=g(this._jobs,
e=>e.isCancelled()),r&&this._state!==Qa.FAILED?(this._state=Qa.FAILED,this._observer.hasCallbacks(tl.STAGE_FAILED
)&&this._observer.triggerEvent(tl.STAGE_FAILED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)):n&&this._state!==Qa.CANCELLED?(this._state=Qa.CANCELLED,
this._observer.hasCallbacks(tl.STAGE_CANCELLED)&&this._observer.triggerEvent(tl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)
):this._state!==Qa.FINISHED&&(this._state=Qa.FINISHED,this._observer.hasCallbacks(tl.STAGE_FINISHED
)&&this._observer.triggerEvent(tl.STAGE_FINISHED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)))):(n=A(Os(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Qa.PAUSED?(this._state=Qa.PAUSED,this._observer.hasCallbacks(tl.STAGE_PAUSED
)&&this._observer.triggerEvent(tl.STAGE_PAUSED,this),this._observer.hasCallbacks(tl.STAGE_CHANGED
)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this)):n||this._state!==Qa.PAUSED||(this._state=Qa.STARTED,
this._observer.hasCallbacks(tl.STAGE_RESUMED)&&this._observer.triggerEvent(tl.STAGE_RESUMED,this),
this._observer.hasCallbacks(tl.STAGE_CHANGED)&&this._observer.triggerEvent(tl.STAGE_CHANGED,this))}}l(nc,"Event",tl)
;const ic=Pu.createLogger("PipelineController");(Il=rl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
Il.PIPELINE_PAUSED="PipelineController:pipelinePaused",Il.PIPELINE_RESUMED="PipelineController:pipelineResumed",
Il.PIPELINE_FINISHED="PipelineController:pipelineFinished",Il.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
Il.PIPELINE_FAILED="PipelineController:pipelineFailed",Il.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class oc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!x(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Zu(`PipelineController#${this._name}`),this._state=Qa.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Di(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Za.PIPELINE,state:this._state,name:this._name,
stages:Di(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
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
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return ic.info(
`Pausing pipeline ${this._name}`),this._state=Qa.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
rl.PIPELINE_PAUSED)&&this._observer.triggerEvent(rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return ic.info(`Resuming pipeline ${this._name}`),
this._state=Qa.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}start(){if(this._state!==Qa.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return ic.info(`Starting pipeline ${this._name}`),this._state=Qa.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(rl.PIPELINE_STARTED)&&this._observer.triggerEvent(
rl.PIPELINE_STARTED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
rl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Qa.STARTED)throw new Error(`Job#${this._name} was not started`)
;return ic.info(`Stopping pipeline ${this._name}`),this._state=Qa.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(rl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),this}
getErrorString(){return Di(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Di(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){ic.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Qa.FAILED,
this._observer.hasCallbacks(rl.PIPELINE_FAILED)&&this._observer.triggerEvent(rl.PIPELINE_FAILED,this),ic.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Qa.CANCELLED,this._observer.hasCallbacks(
rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(rl.PIPELINE_CANCELLED,this),ic.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Qa.STARTED;const o=this._stages[this._current].start();n===Qa.PAUSED&&this._observer.hasCallbacks(
rl.PIPELINE_RESUMED)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),ic.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Qa.FINISHED,this._observer.hasCallbacks(rl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(rl.PIPELINE_FINISHED,this),ic.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Qa.PAUSED,this._observer.hasCallbacks(rl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),ic.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Qa.STARTED,this._observer.hasCallbacks(rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(rl.PIPELINE_CHANGED,this),ic.info(`Pipeline ${this._name} was resumed`))}}l(oc,"Event",rl
);const sc=Pu.createLogger("ScriptController");(Il=nl={}).SCRIPT_STARTED="ScriptController:scriptStarted",
Il.SCRIPT_PAUSED="ScriptController:scriptPaused",Il.SCRIPT_RESUMED="ScriptController:scriptResumed",
Il.SCRIPT_CANCELLED="ScriptController:scriptCancelled",Il.SCRIPT_FAILED="ScriptController:scriptFailed",
Il.SCRIPT_FINISHED="ScriptController:scriptFinished",Il.SCRIPT_CHANGED="ScriptController:scriptChanged";class ac{
constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,
"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_closeCallback",void 0),l(this,"_stdoutCallback"
,void 0),l(this,"_stderrCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,
"_compiledEnv",void 0),l(this,"_state",void 0),l(this,"_process",void 0),l(this,"_stdoutChunks",void 0),l(this,
"_stderrChunks",void 0),!x(t))throw new TypeError(`Script name invalid: ${t}`);if(!p(r))throw new TypeError(
`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!y(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=Qa.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new Zu(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this),
this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._compiledCommand=void 0,
this._compiledArgs=void 0,this._compiledEnv=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
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
case Qa.STARTED:case Qa.PAUSED:return!1}}start(){if(this._state!==Qa.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);sc.info(`Starting command "${this._command} ${this._args.join(" ")}"`),
this._state=Qa.STARTED;var e=this._context.compileModel(this._command);if(!p(e))throw new Error(
`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
e=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=e,!y(
e=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);return this._compiledEnv=e,
this._process=zl.spawn(this._compiledCommand,this._compiledArgs,{env:this._compiledEnv}),this._process.stdout.on("data",
this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),this._process.on("close",this._closeCallback)
,this._observer.hasCallbacks(nl.SCRIPT_STARTED)&&this._observer.triggerEvent(nl.SCRIPT_STARTED,this),
this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}pause(){if(
!this.isRunning())throw new Error(`Script#${this._name} was not running`);if(!this._process)throw new Error(
"No process initialized");return sc.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),
this._state=Qa.PAUSED,this._process.kill("SIGSTOP"),this._observer.hasCallbacks(nl.SCRIPT_PAUSED
)&&this._observer.triggerEvent(nl.SCRIPT_PAUSED,this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Script#${this._name} was not paused`);if(!this._process)throw new Error("No process initialized");return sc.info(
`Resuming command "${this._command} ${this._args.join(" ")}"`),this._state=Qa.STARTED,this._process.kill("SIGCONT"),
this._observer.hasCallbacks(nl.SCRIPT_RESUMED)&&this._observer.triggerEvent(nl.SCRIPT_RESUMED,this),
this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}stop(){if(
this._state!==Qa.STARTED)throw new Error(`Script#${this._name} was not started`);if(!this._process)throw new Error(
"No process initialized");return sc.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),
this._state=Qa.CANCELLED,this._process.kill("SIGTERM"),this._observer.hasCallbacks(nl.SCRIPT_CANCELLED
)&&this._observer.triggerEvent(nl.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(nl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this),this}onStarted(e){return this.on(nl.SCRIPT_STARTED,e)}onPaused(e
){return this.on(nl.SCRIPT_PAUSED,e)}onResumed(e){return this.on(nl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(
nl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(nl.SCRIPT_FAILED,e)}onFinished(e){return this.on(nl.SCRIPT_FINISHED,e)
}onChanged(e){return this.on(nl.SCRIPT_CHANGED,e)}getErrorString(){return Buffer.concat(this._stderrChunks).toString(
"utf8")}getOutputString(){return Buffer.concat(this._stdoutChunks).toString("utf8")}_onClose(e){sc.debug(
`Child process stopped with exit status ${e}`),0===e?(this._state=Qa.FINISHED,this._observer.hasCallbacks(
nl.SCRIPT_FINISHED)&&this._observer.triggerEvent(nl.SCRIPT_FINISHED,this)):(this._state=Qa.FAILED,
this._observer.hasCallbacks(nl.SCRIPT_FAILED)&&this._observer.triggerEvent(nl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(nl.SCRIPT_CHANGED)&&this._observer.triggerEvent(nl.SCRIPT_CHANGED,this)}_onStdOut(e){
this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),process.stderr.write(e)}}l(ac
,"Event",nl),l(ac,"State",Qa);const lc=Pu.createLogger("PipelineRunner");class uc{static createStepController(e,t){if(Z(
e))return new ac(t,e.name,e.command,e.args,e.env);throw new TypeError(`Unknown step type: ${e.name}`)}
static createJobController(e,t){return new tc(t,e.name,Di(e.steps,e=>this.createStepController(e,t)))}
static createStageController(e,t){return new nc(t,e.name,Di(e.jobs,e=>this.createJobController(e,t)))}
static createPipelineController(e,t){return new oc(t,e.name,Di(e.stages,e=>this.createStageController(e,t)))}
static createController(e,t){return ie(e)?(lc.debug(`Starting pipeline ${e.name}`),this.createPipelineController(e,t)
):ne(e)?(lc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(lc.debug(`Starting job ${e.name}`)
,this.createJobController(e,t)):(lc.debug(`Starting step ${e.name}`),this.createStepController(e,t))}
static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{r=n.onChanged(()=>{try{n.isFinished()?(
lc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):lc.debug(`Controller ${n.toString(
)} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),lc.debug(`Controller ${n.toString()} started`)}catch(e){
r&&(r(),r=void 0),t(e)}})}}const cc=Pu.createLogger("StringUtils"),dc="qwertyuiopasdfghjklzxcvbnm. \n\t1234567890_"
;class hc{static toString(...e){return Di(e,e=>da(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){
return Y(n)?Di(n,e=>hc.processVariables(e,i,o,s,a)):X(n)?Wo(P(n),(e,t)=>{var r=n[t];return e[`${hc.processVariables(t,i,
o,s,a)}`]=hc.processVariables(r,i,o,s,a),e},{}):p(n)?hc.processVariablesInString(n,i,o,s,a):n}
static processVariablesInString(t,r,n,i,o=void 0){var s,e,a,l,u,c;if(0===t.length)return"";let d;if(d=vt(r)?r:e=>zn(r,e,
o),Ca(t,n)&&La(t,i)){let e=t.substr(n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=ra(e),A(e,e=>dc.includes(
e))))return s=d(e),cc.debug(`Variable "${e}" resolved as `,s),s}let h="",_=0;for(;0<=_&&_<t.length;)if(e=_,_=t.indexOf(n
,e),_<0)h+=t.substr(e),_=t.length;else{if(a=_,l=_+n.length,(u=t.indexOf(i,l))<0)throw new TypeError(
`Parse error near "${t.substr(a).substr(0,20)}". End of variable not detected.`);c=u+i.length,u=ra(t.substr(l,u-l)),_=(
A(u,e=>dc.includes(e))?(l=d(u),cc.debug(`Variable "${u}" at ${a}-${c} resolved as "${l}": `,l),h+=`${t.substr(e,a-e
)}${l}`):h+=`${t.substr(e,c-e)}`,c)}return h}}class _c{constructor(e,t,r,n){l(this,"_variables",void 0),l(this,
"_parameters",void 0),l(this,"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,"_lookupVariable",void 0)
,this._variables=t,this._parameters=e,this._variablePrefix=r,this._variableSuffix=n,
this._lookupVariable=this.getVariable.bind(this)}compileModel(e){return hc.processVariables(e,this._lookupVariable,
this._variablePrefix,this._variableSuffix)}getParametersModel(){var e;return null!==(e=this._parameters
)&&void 0!==e?e:{}}getVariablesModel(){var e;return null!==(e=this._variables)&&void 0!==e?e:{}}getVariable(e){
return zn(this._variables,e)}setVariable(e,t){return so(this._variables,e,t),this}toString(){return"PipelineContext"}
toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)}catch(e){return}}(
JSON.stringify(this._variables))}}}const Ec=Pu.createLogger("runHttpResource"),vc=Pu.createLogger("runLocalResource");(
Il=il={}).M_ROOM_POWER_LEVELS="m.room.power_levels",Il.M_ROOM_JOIN_RULES="m.room.join_rules",
Il.M_ROOM_MEMBERSHIP="m.room.membership",Il.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
Il.M_ROOM_GUEST_ACCESS="m.room.guest_access",Il.M_ROOM_CREATE="m.room.create",Il.M_FEDERATE="m.federate",
Il.M_ROOM_MEMBER="m.room.member",Il.M_PUSH_RULES="m.push_rules",Il.M_PRESENCE="m.presence",Il.M_SPACE="m.space",
Il.M_LOGIN_PASSWORD="m.login.password",Il.M_LOGIN_TOKEN="m.login.token",Il.M_ID_USER="m.id.user",
Il.FI_NOR_DELETED="fi.nor.deleted",Il.FI_NOR_FORM_DTO="fi.nor.form_dto",Il.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,Il.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",Il.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
Il.FI_NOR_AGENT_DTO="fi.nor.dto.agent",Il.FI_NOR_PIPELINE="fi.nor.pipeline",
Il.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",ol=il,(Il=sl=sl||{})[Il.UNAUTHENTICATED=0]="UNAUTHENTICATED",
Il[Il.AUTHENTICATING=1]="AUTHENTICATING",Il[Il.AUTHENTICATED=2]="AUTHENTICATED",
Il[Il.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
Il[Il.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(Il=al={}).M_USER_IN_USE="M_USER_IN_USE",
Il.M_INVALID_USERNAME="M_INVALID_USERNAME",Il.M_EXCLUSIVE="M_EXCLUSIVE",Il.M_FORBIDDEN="M_FORBIDDEN",ll=al
;const pc=Pu.createLogger("SimpleMatrixClient");(ul=ul||{}).EVENT="SimpleMatrixClient:event";class fc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?sl.AUTHENTICATED:sl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Zu("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{pc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
pc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(N(a=s=await Ku.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${Ke(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw pc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return pc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(pc.debug(
"Could not register user: ",e),!(e instanceof Gu))throw new Gu(za.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new Gu(za.Unauthorized):403===s?new Gu(za.Forbidden
):429===s?new Gu(429):new Gu(za.InternalServerError,"Failed to register user");if(!Ve(s=null==e?void 0:e.getBody())
)throw new Gu(za.InternalServerError,"Failed to register user");switch(s.errcode){case ll.M_USER_IN_USE:throw new Gu(
za.Conflict,"User already exists");case ll.M_INVALID_USERNAME:throw new Gu(za.BadRequest,"Username invalid")
;case ll.M_EXCLUSIVE:throw new Gu(za.Conflict,"User name conflicts with exclusive namespace");default:throw new Gu(
za.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
pc.debug("whoami: Fetching account whoami... ",r),n=await Ku.getJson(r,{Authorization:`Bearer ${t}`}),pc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,pc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void pc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(pc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await Ku.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw pc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
pc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(N(
n=r=await Ku.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw pc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return pc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(pc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof Gu))throw new Gu(za.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new Gu(za.Unauthorized
):403===r?new Gu(za.Forbidden):429===r?new Gu(429):new Gu(za.InternalServerError,"Failed to register user");if(!Ve(
r=null==e?void 0:e.getBody()))throw new Gu(za.InternalServerError,"Failed to register user");switch(r.errcode){
case ll.M_USER_IN_USE:throw new Gu(za.Conflict,"User already exists");case ll.M_INVALID_USERNAME:throw new Gu(
za.BadRequest,"Username invalid");case ll.M_EXCLUSIVE:throw new Gu(za.Conflict,
"User name conflicts with exclusive namespace");default:throw new Gu(za.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:il.M_LOGIN_PASSWORD,identifier:{type:il.M_ID_USER,user:r},
password:n},pc.debug("Sending login with userId:",r),!(N(h=o=await Ku.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||N(_=h)&&I(_,["m.homeserver","m.identity_server"])&&N(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||N(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw pc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");pc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new fc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw pc.debug(
"Could not login: ",e),new Gu(za.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(N(n=r=await Ku.getJson(this._resolveHomeServerUrl(`/directory/room/${Ke(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw pc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return pc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof Gu&&e.getStatusCode()===za.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(N(
t=e=await Ku.getJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,he,qe)))throw pc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return pc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!V(i=await Ku.getJson(this._resolveHomeServerUrl(
`/rooms/${Ke(e)}/state/${Ke(t)}/${Ke(r)}`),{Authorization:`Bearer ${n}`})))throw pc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return pc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Gu&&e.getStatusCode()===za.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(N(s=o=await Ku.putJson(this._resolveHomeServerUrl(
`/rooms/${Ke(e)}/state/${Ke(t)}/${Ke(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw pc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return pc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw pc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await Ku.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),pc.debug("forgetRoom: received: ",r)}catch(e){throw pc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await Ku.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),pc.debug("leaveRoom: received: ",r)}catch(e){throw pc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e))throw new TypeError(
`roomId invalid: ${e}`);if(!he(t))throw new TypeError(`userId invalid: ${t}`);if(pc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await Ku.postJson(
this._resolveHomeServerUrl(`/rooms/${Ke(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),pc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw pc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},pc.debug("Sending message with body:",t
),r=await Ku.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,pc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(pc.debug("Creating room with body:",e),!(N(
e=t=await Ku.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&ue(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw pc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return pc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(pc.debug(
`Joining to room ${t} with body:`,e),!(N(i=n=await Ku.postJson(this._resolveHomeServerUrl(`/rooms/${Ke(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw pc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return pc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw pc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(pc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!V(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=Ma(Di(P(s),e=>{var t=s[e]
;return`${Ke(e)}=${Ke(t)}`}),"&"),!(N(t=e=await Ku.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||je(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||He(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||be(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Be(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw pc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${We(e)}`);return e}isAlreadyInTheRoom(
e){if(Ve(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===ll.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){ks(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(ul.EVENT,t?D(D({},e),{},{
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
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),ks(n,e=>{var t,r=(r=s[e],fo([],
null!=r&&r.state?Te(null==r?void 0:r.state):[],null!=r&&r.timeline?Ne(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,fo([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),ks(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),ks(o,e=>{var t=l[e],t=fo([],Te(
null==t?void 0:t.state),Ne(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(fc,
"Event",ul),(Il=Dl=Dl||{}).PRIVATE_CHAT="private_chat",Il.PUBLIC_CHAT="public_chat",
Il.TRUSTED_PRIVATE_CHAT="trusted_private_chat",cl=Dl,(Dl=Ol=Ol||{}).INVITED="invited",Dl.JOINED="joined",
Dl.SHARED="shared",Dl.WORLD_READABLE="world_readable",dl=Ol,(Ol=Ll=Ll||{}).PUBLIC="public",Ol.KNOCK="knock",
Ol.INVITE="invite",Ol.PRIVATE="private",Ol.RESTRICTED="restricted",hl=Ll,(Ll=Ol={}).CAN_JOIN="can_join",
Ll.FORBIDDEN="forbidden",_l=Ol;const Tc=Pu.createLogger("MatrixCrudRepository");class gc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:ol.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Tc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Tc.debug("joinedRooms = ",i),t=P(t),Tc.debug(
"invitedRooms = ",t),(t=Os(t,e=>!i.includes(e))).length){Tc.debug("Joining to rooms = ",t);let r=0;if(await Wo(t,async(e
,t)=>{await e;try{Tc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Tc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Tc.debug(
"Fetching results again after joining"),this.getAll()}return Wo(i,(e,i)=>{var t=n[i],r=Os(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Aa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return fo(e,Di(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Di(Os(e,
e=>zn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Tc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Tc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Tc.debug(
"createItem: serviceAccountId = ",n),i=Os(ss(fo(n?[n]:[],t||[])),e=>e!==o),Tc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Tc.debug("createItem: allowedGroups = ",n),t={[ol.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:ol.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:dl.SHARED}},{type:ol.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:_l.FORBIDDEN}}]
;void 0!==n&&s.push({type:ol.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:hl.RESTRICTED,allow:Di(n,e=>({
type:ol.M_ROOM_MEMBERSHIP,room_id:e}))}}),Tc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Tc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&ks(this._allowedEvents,e=>{a[e]=0}),t=D(D({},n),{},{preset:cl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Tc.debug(
"createItem: response = ",t),t=t.room_id,Tc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Tc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Tc.debug(
"response = ",JSON.stringify(n,null,2)),!V(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Di(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!V(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Gu(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Tc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Gu(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Tc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Tc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Tc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Gu&&[401,403,404].includes(e.getStatusCode()))throw e;throw Tc.error(
`Error in deleteById(${t}): `,e),new Gu(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await Wo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Tc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const Ac=Pu.createLogger(
"runMatrixRoomResource"),Sc=Pu.createLogger("main");Pu.setLogLevel(pu),async function(t=[]){var r,n,i,o;try{if(Sc.debug(
`Loglevel ${Pu.getLogLevelString()}`),r=Cu,t.shift(),!t.shift())return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;if(
0===t.length)return console.log(H(r)),qa.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return console.log(H(r)),qa.OK;case 1:return console.log(function(e){const t=Os([Su?"LOCAL":"",Ru?"HTTP":"",
Nu?"MATRIX":"",mu?"TEST":"",wu?"DEV":""],e=>!!e);return`${e} v${Tu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Tu}'
  BUILD_NODE_ENV              = '${gu}'
  BUILD_DATE                  = '${Au}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Su}'
  BUILD_WITH_HTTP_RESOURCES   = '${Ru}'
  BUILD_WITH_MATRIX_RESOURCES = '${Nu}'
`}(r)),qa.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=Fu.parseRunnerResource(n)))return Sc.error(
`Unsupported argument: ${n}`),console.log(H(r)),qa.UNKNOWN_ARGUMENT;if((o=await async function(e){switch(e.type){
case Ba.HTTP:return Ru?async function(t){var r,n,i,o,s,a,l;try{const u={};if(t.authentication&&(M(t.authentication)&&(
u.Authorization=`Bearer ${t.authentication.access_token}`),F(t.authentication)&&(r=t.authentication.username,
n=t.authentication.password,u.Authorization=`Basic ${new Buffer(r+":"+n).toString("base64")}`)),void 0===(
i=await Ku.getJson(t.url,u)))return Ec.error(`Failed to load URL "${t.url}": `,i),qa.RESOURCE_LOAD_FAILED;if(void 0===(
o=oe(i)))return Ec.error(`Model from URL "${t.url}" was not valid: `,i),qa.RESOURCE_MODEL_INVALID
;s=null==o?void 0:o.parameters,a=null==o?void 0:o.variables,l=new _c(s,a,Du,Ou);let e=uc.createController(o,l)
;return Ec.info(`Running ${e.getName()} from ${t.url}`),await uc.startAndWaitUntilFinished(e),Ec.info(
`Successfully finished ${e.getName()} from ${t.url}`),qa.OK}catch(e){return Ec.error("Error: ",e),
qa.HTTP_RESOURCE_FAILED}}(e):qa.UNBUILD_FEATURE;case Ba.LOCAL:return Su?async function(t){var r,n,i,o,s,a;try{if(
r=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{Wl.readFile(i,o,(e,t)=>{e?n(e
):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(t.path),void 0===(i=oe(n=JSON.parse(r)))
)return vc.warn("Model was not valid: ",n),qa.RESOURCE_MODEL_INVALID;o=null==i?void 0:i.parameters,
s=null==i?void 0:i.variables,a=new _c(o,s,Du,Ou);let e=uc.createController(i,a);return vc.info(`Running ${e.getName(
)} from ${t.path}`),await uc.startAndWaitUntilFinished(e),vc.info(`Successfully finished ${e.getName()} from ${t.path}`)
,qa.OK}catch(e){return vc.error("Error: ",e),qa.LOCAL_RESOURCE_FAILED}}(e):qa.UNBUILD_FEATURE;case Ba.MATRIX:
return Nu?async function(i){var o,s,a,l,u,c,d,h,_,E,v,p,f,T,g,A,S,R,N,y,m;try{Ac.debug("runMatrixResource: ",i),
f=i.authentication;let e;if(M(f))e=new fc(`https://${i.homeserver}`,void 0,void 0,f.access_token);else{if(!F(f)
)return qa.UNKNOWN_AUTHENTICATION_TYPE;e=new fc(`https://${i.homeserver}`),e=await e.login(f.username,f.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return Ac.error("Could not detect agent user ID"),qa.UNKNOWN_AGENT_ID
;Ac.info(`Agent user ID: ${t}`);const w=new gc(e,ol.FI_NOR_AGENT_DTO);if(0===(m=await w.getAll()).length
)return Ac.debug("Detected no pools available."),qa.OK;T=(1===m.length?(Ac.debug(
"Detected single pool available. Picking it."),m[0]):(Ac.debug(
`Detected ${m.length} pools available. Picking one by random.`),m[Math.floor(Math.random()*m.length)])).id,Ac.info(
`Pool ID: ${T}`);const C=new gc(e,ol.FI_NOR_PIPELINE_RUN_DTO,"",void 0,ol.FI_NOR_PIPELINE_STATE,"",[T])
;g=await C.getAll(),Ac.debug("runList = ",g);let r;if(0===g.length)return Ac.debug("Detected no work available."),qa.OK
;r=1===g.length?(Ac.debug("Detected single work available. Picking it."),g[0]):(Ac.debug(
`Detected ${g.length} work items available. Picking one by random.`),g[Math.floor(Math.random()*g.length)]);const b=r.id
;if(void 0!==(null===(o=r)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.agentPoolId)&&void 0!==(null===(a=r
)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.agentAccountId)&&void 0!==(null===(u=r)||void 0===u||null===(
c=u.data)||void 0===c?void 0:c.state))return Ac.warn(`Work ID was already running: ${b}`),qa.CONFLICT;if(Ac.info(
`Work ID: ${b}`),A=D(D({},r.data),{},{agentPoolId:T,agentAccountId:t}),await C.update(r.id,A),r=await C.findById(r.id),
!r)return Ac.warn("The work item disappeared while we were selecting it."),qa.WORK_CANCELLED;if(b!==r.id
)return Ac.error(`The work item ID conflict: ${b} !== ${r.id}`),qa.CONFLICT;if(T!==(null===(d=r)||void 0===d||null===(
h=d.data)||void 0===h?void 0:h.agentPoolId)||t!==(null===(_=r)||void 0===_||null===(E=_.data
)||void 0===E?void 0:E.agentAccountId))return Ac.error(""),qa.CONFLICT;if(Ac.debug(
"Work item secured to us! We can start the job."),void 0===(S=oe(null===(v=r)||void 0===v||null===(p=v.data
)||void 0===p?void 0:p.model)))return Ac.warn("Work item did not contain correct pipeline model: ",r),
qa.RESOURCE_MODEL_INVALID;R=null==S?void 0:S.parameters,N=null==S?void 0:S.variables,y=new _c(R,N,Du,Ou)
;let n=uc.createController(S,y);await ze(e,C,b,r,n);const I=n.onChanged(()=>{ze(e,C,b,r,n).catch(e=>{Ac.error(
"Failed to save controller state: ",e)})});try{await uc.startAndWaitUntilFinished(n)}finally{I(),await ze(e,C,b,r,n)}
return qa.OK}catch(e){return Ac.error("Error: ",e),qa.MATRIX_RESOURCE_FAILED}}(e):qa.UNBUILD_FEATURE;default:
return qa.UNKNOWN_RESOURCE_TYPE}}(i))!==qa.OK)return o===qa.UNKNOWN_RESOURCE_TYPE?(Sc.error(`Error NorPP${o}: ${G(o
)}: Resource type was unknown: ${i.type}`),console.log(H(r)),qa.UNKNOWN_RESOURCE_TYPE):(function(e){if(Aa(e)&&!(
e<0||255<e)){if(Wa.FATAL_SIGNAL_RANGE_START<=e&&e<=Wa.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case Wa.OK:
case Wa.GENERAL_ERRORS:case Wa.MISUSE_OF_SHELL_BUILTINS:case Wa.ARGUMENT_PARSE_ERROR:case Wa.UNKNOWN_ARGUMENT:
case Wa.UNKNOWN_RESOURCE_TYPE:case Wa.UNKNOWN_AUTHENTICATION_TYPE:case Wa.RESOURCE_LOAD_FAILED:
case Wa.RESOURCE_MODEL_INVALID:case Wa.LOCAL_RESOURCE_FAILED:case Wa.HTTP_RESOURCE_FAILED:
case Wa.MATRIX_RESOURCE_FAILED:case Wa.UNIMPLEMENTED_FEATURE:case Wa.UNBUILD_FEATURE:case Wa.FATAL_ERROR:case Wa.USAGE:
case Wa.DATAERR:case Wa.NOINPUT:case Wa.NOUSER:case Wa.NOHOST:case Wa.UNAVAILABLE:case Wa.SOFTWARE:case Wa.OSERR:
case Wa.OSFILE:case Wa.CANTCREAT:case Wa.IOERR:case Wa.TEMPFAIL:case Wa.PROTOCOL:case Wa.NOPERM:case Wa.CONFIG:
case Wa.COMMAND_INVOKED_CANNOT_EXECUTE:case Wa.COMMAND_NOT_FOUND:case Wa.INVALID_ARGUMENT_TO_EXIT:
case Wa.FATAL_SIGNAL_RANGE_START:case Wa.FATAL_SIGNAL_RANGE_END:case Wa.EXIT_STATUS_OUT_OF_RANGE:
case Wa.UNKNOWN_AGENT_ID:case Wa.WORK_CANCELLED:case Wa.CONFLICT:return 1;default:return}}}(o)?Sc.error(
`Error EX-${o}: ${G(o)}: for ${U(i.type)} resource ${n}`):Sc.error(`Error: Exit status ${o}: for ${U(i.type
)} resource ${n}`),o)}while(1<=t.length);return qa.OK}catch(e){return Sc.error("Fatal error: ",e),qa.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
