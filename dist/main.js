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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new qt(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Kt;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(kn);return o.cache=new(u.Cache||$n),o}
function v(e){return void 0===e}function c(e){return sr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!sr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Fa(e)}function p(e){return Oa(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return ka(e)}function g(e){return v(e)||ka(e)}function T(e,t){return Vi(e,t)}
function S(e,t){return Qi(e,t)}function A(e,t){return pt(e)&&S(Ya(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,pt(e)&&S(P(e),t))}function m(e){return!!pt(e)&&!(e instanceof Date)&&!Tt(e)&&!c(
e)&&N(e,p,void 0)}function C(e,t=p,r=void 0){return pt(e)&&!(e instanceof Date)&&!Tt(e)&&!c(e)&&N(e,t,r)}function R(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!pt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(Tt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=xo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Ya(e),n=Jo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function y(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return R(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function w(...e){return t=>T(e,e=>e(t))}function b(e){return pt(e)}function I(e,t){return b(e
)&&0===(r=t,Fs(P(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return Ra(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=Ui(e,(e,t)=>t);return Fs(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Fs(e,e=>t(e))):[]}function U(e){switch(e
){case rl.HTTP:return"http";case rl.LOCAL:return"local";case rl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function F(e){return m(e)&&function(){switch(null==e?void 0:e.type){
case il.NONE:case il.BASIC_AUTH:case il.BEARER_AUTH:return 1;default:return}}()}function $(e){return m(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===ol.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if($(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:ol.BASIC_AUTH,username:r,password:n
}}function M(e){return m(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===ol.BEARER_AUTH&&p(
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
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return xu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${Hu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Ju?`

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
`:""}${ju?`

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
`}function J(e){if(Fa(e))switch(e){case ll.OPTIONS:return"options";case ll.GET:return"get";case ll.POST:return"post"
;case ll.PUT:return"put";case ll.DELETE:return"delete";case ll.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function x(e){return!(!Oa(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function B(e){return p(e)||Fa(e)||Ra(e)||ya(e)
}function V(e){return B(e)||d(e,w(V,v))||W(e)}function W(e){return m(e)&&N(e,p,w(V,v))}function q(e){return v(e)||W(e)}
function K(e){return B(e)||X(e)||z(e)}function z(e){return m(e)&&N(e,p,w(K,v))}function X(e){return d(e,w(K,v))}
function Y(e){return m(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===Zl.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Ra(r))||m(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===Zl.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===Zl.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===Zl.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||m(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===Zl.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||K(null==e?void 0:e.default));var t,r}function Q(e){return m(e)&&(v(
null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Y))&&(v(null==e?void 0:e.variables)||W(
null==e?void 0:e.variables))}function Z(e){return Q(e)&&x(null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(
i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,void 0===(r=null==e?void 0:e.env)||C(r,n,i))&&I(e,Ec);var t
,r,n,i}function ee(e){return Q(e)&&x(null==e?void 0:e.name)&&K(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(
null==e?void 0:e.output)&&I(e,vc)}function te(e){return Q(e)&&x(null==e?void 0:e.name)&&K(null==e?void 0:e.csv)&&f(
null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,pc)}function re(e){return!(!Q(e)||!Z(e)&&!(Q(e)&&m(e)&&x(
null==e?void 0:e.name)))}function ne(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,re,1)&&I(e,fc)}
function ie(e){if(ne(e))return e}function oe(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,ne,1)&&I(
e,gc)}function se(e){return Q(e)&&x(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,oe,1)&&I(e,Tc)}function ae(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(se(e))return e}(e))&&void 0!==t?t:function(e){if(oe(e)
)return e}(e))&&void 0!==t?t:ie(e))&&void 0!==t?t:null!==(e=null!==(e=null!==(e=function(e){if(Z(e))return e}(t=e)
)&&void 0!==e?e:function(e){if(te(e))return e}(t))&&void 0!==e?e:function(e){if(ee(e))return e}(t))&&void 0!==e?e:ie(t)}
function le(e){return b(e)&&Tt(null==e?void 0:e.getName)&&Tt(null==e?void 0:e.isRunning)&&Tt(null==e?void 0:e.isStarted
)&&Tt(null==e?void 0:e.isPaused)&&Tt(null==e?void 0:e.isCancelled)&&Tt(null==e?void 0:e.isFinished)&&Tt(
null==e?void 0:e.isFailed)&&Tt(null==e?void 0:e.isSuccessful)&&Tt(null==e?void 0:e.start)&&Tt(null==e?void 0:e.pause
)&&Tt(null==e?void 0:e.resume)&&Tt(null==e?void 0:e.stop)&&Tt(null==e?void 0:e.destroy)&&Tt(null==e?void 0:e.toString
)&&Tt(null==e?void 0:e.toJSON)&&Tt(null==e?void 0:e.onStarted)&&Tt(null==e?void 0:e.onPaused)&&Tt(
null==e?void 0:e.onResumed)&&Tt(null==e?void 0:e.onCancelled)&&Tt(null==e?void 0:e.onFailed)&&Tt(
null==e?void 0:e.onFinished)&&Tt(null==e?void 0:e.onChanged)}function ue(e){return e instanceof Nc}function ce(e){
return e instanceof Cc}function de(e){return d(e,p)}function he(e){return d(e,de)}function _e(e){return p(e
)&&!!e&&"!"===e[0]}function Ee(e){try{return function(e){if(!p(e))throw new TypeError(`value was not string: "${e}"`)
;if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0])throw new TypeError(
`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}function ve(e){return m(e)&&I(
e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t))&&g(
e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function pe(e){return p(e)&&!!e&&"@"===e[0]}
function fe(e){return m(e)&&I(e,["content","type","sender"])&&W(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||pe(null==e?void 0:e.sender))}function ge(e){return m(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||pe(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||fe(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function Te(e){try{return function(e){if(!m(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!q(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!pe(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!fe(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function Se(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&W(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ge(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||W(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function Ae(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!W(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ge(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!W(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Ne(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function me(e){
return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,Se)}function Ce(e){try{return function(e){if(!m(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,Se))throw e=xo(null==e?void 0:e.events,e=>!Se(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${Ae(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Re(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&W(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&pe(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ge(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function ye(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!W(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!pe(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!ge(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${Te(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function we(e){return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function be(e){
return m(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Re)&&Ra(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function Ie(e){try{return function(e){if(!m(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Re)){var t=xo(null==e?void 0:e.events,e=>!Re(e));throw new TypeError(
`Property "events" item was not correct: ${ye(t)}`)}if(!Ra(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function De(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,fe)}function Oe(e){
return Ao([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Le(e){return m(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,fe)}function Pe(e){return m(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function Ue(e){return m(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||ve(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||me(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||be(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||De(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Le(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Pe(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Fe(e){try{return function(e){if(!m(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!ve(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!me(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ce(e)}`);if(
!v(null==e?void 0:e.timeline)&&!be(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${Ie(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!De(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Le(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Pe(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function $e(e){return m(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&W(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||ge(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function ke(e){try{return function(e){if(!m(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!W(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ge(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Me(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
$e)}function Ge(e){try{return function(e){if(!m(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,$e))throw e=xo(
null==e?void 0:e.events,e=>!$e(e)),new TypeError(`Property "events" had invalid item: ${ke(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function je(e){return m(e)&&I(e,["invite_state"])&&Me(
null==e?void 0:e.invite_state)}function He(e){try{return function(e){if(!m(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Me(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Ge(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Je(e){return m(e)&&I(e,[
"state","timeline","account_data"])&&me(null==e?void 0:e.state)&&be(null==e?void 0:e.timeline)&&Le(
null==e?void 0:e.account_data)}function xe(e){return m(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||C(
null==e?void 0:e.join,_e,Ue))&&(v(null==e?void 0:e.invite)||C(null==e?void 0:e.invite,_e,je))&&(v(null==e?void 0:e.leave
)||C(null==e?void 0:e.leave,_e,Je))}function Be(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!C(null==e?void 0:e.join,_e,Ue))throw new TypeError(`Property "join" was invalid: ${y(
null==e?void 0:e.join,_e,Ue,Ee,Fe)}`);if(!v(null==e?void 0:e.invite)&&!C(null==e?void 0:e.invite,_e,je)
)throw new TypeError(`Property "invite" was invalid: ${y(null==e?void 0:e.invite,_e,je,Ee,He)}`);if(!v(
null==e?void 0:e.leave)&&!C(null==e?void 0:e.leave,_e,Je))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function Ve(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
fe)}function We(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,fe)}function qe(e){return m(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,pe)&&d(null==e?void 0:e.left,pe)}function Ke(e){return C(e,p,E)}
function ze(e){try{return function(e){if(!m(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!xe(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Be(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!Ve(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Le(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!We(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!qe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Ke(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function Xe(e){return m(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||ya(null==e?void 0:e.avatar_url))}function Ye(e){
return m(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case yl.M_USER_IN_USE:
case yl.M_INVALID_USERNAME:case yl.M_EXCLUSIVE:case yl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function Qe(e){return encodeURIComponent(e)}async function Ze(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Cl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}var et,tt,rt,nt,it,ot,st,at,lt,
ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,Nt,mt,Ct,Rt,yt,wt,bt,It,Dt,Ot,Lt,Pt,Ut,Ft,$t,kt,Mt,Gt,jt,Ht,Jt,xt,Bt,Vt,Wt,qt,Kt,
zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,Ar,Nr,mr,Cr,Rr,yr,wr,br,Ir,Dr,Or,Lr,Pr,Ur,
Fr,$r,kr,Mr,Gr,jr,Hr,Jr,xr,Br,Vr,Wr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An,
Nn,mn,Cn,Rn,yn,wn,bn,In,Dn,On,Ln,Pn,Un,Fn,$n,kn,Mn,Gn,jn,Hn,Jn,xn,Bn,Vn,Wn,qn,Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,
li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,Ni,mi,Ci,Ri,yi,wi,bi,Ii,Di,Oi,Li,Pi,Ui,Fi,$i,ki,Mi,Gi,ji,Hi,Ji,xi,Bi,Vi,Wi,qi,
Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,Ao,No,mo,Co,Ro,yo,wo,bo,Io,Do,Oo,Lo,Po,Uo,
Fo,$o,ko,Mo,Go,jo,Ho,Jo,xo,Bo,Vo,Wo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,
As,Ns,ms,Cs,Rs,ys,ws,bs,Is,Ds,Os,Ls,Ps,Us,Fs,$s,ks,Ms,Gs,js,Hs,Js,xs,Bs,Vs,Ws,qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,
aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,Na,ma,Ca,Ra,ya,wa,ba,Ia,Da,Oa,La,Pa,Ua,Fa,$a,ka,Ma,Ga,ja,Ha,Ja,xa,Ba,Va,Wa,
qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,Tl,Sl,Al,Nl,ml,Cl,Rl,yl,wl,bl,Il,Dl,Ol,Ll,
Pl,Ul,Fl,$l,kl,Ml,Gl,jl,Hl,Jl,xl,Bl,Vl,Wl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,ou,su,au,lu,uu,cu,du=require("fs"),
hu=require("querystring"),_u=require("url"),Eu=require("path"),vu=require("child_process"),pu=e(du),fu=t(hu),gu=e(_u),
Tu=e(Eu),
Su="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Au=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Nu=function(){
this.__data__=[],this.size=0},mu=function(e,t){return e===t||e!=e&&t!=t},Cu=mu,Ru=function(e,t){for(var r=e.length;r--;
)if(Cu(e[r][0],t))return r;return-1},yu=Ru,wu=Array.prototype,bu=wu.splice,Iu=Ru,Du=Ru,Ou=Ru,Lu=Nu,Pu=function(e){
var t=this.__data__;return!((e=yu(t,e))<0||(e==t.length-1?t.pop():bu.call(t,e,1),--this.size,0))},Uu=function(e){
var t=this.__data__;return(e=Iu(t,e))<0?void 0:t[e][1]},Fu=function(e){return-1<Du(this.__data__,e)},$u=function(e,t){
var r=this.__data__,n=Ou(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Lu,
r.prototype.delete=Pu,r.prototype.get=Uu,r.prototype.has=Fu,r.prototype.set=$u,lt=$l=r,kl=function(){
this.__data__=new lt,this.size=0},Ks=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Ul=function(e){return this.__data__.get(e)},Fl=function(e){return this.__data__.has(e)},
Hl=Ml="object"==typeof Su&&Su&&Su.Object===Object&&Su,xl="object"==typeof self&&self&&self.Object===Object&&self,Ar=Jl=(
rs=Hl||xl||Function("return this")()).Symbol,Bs=Object.prototype,ut=Bs.hasOwnProperty,ct=Bs.toString,
dt=Ar?Ar.toStringTag:void 0,Nr=Object.prototype,ht=Nr.toString,_t=function(e){var t,r,n=ut.call(e,dt),i=e[dt];try{t=!(
e[dt]=void 0)}catch(e){}return r=ct.call(e),t&&(n?e[dt]=i:delete e[dt]),r},Et=function(e){return ht.call(e)},vt=(qs=Jl
)?qs.toStringTag:void 0,ft=Bl=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
vt&&vt in Object(e)?_t:Et)(e)},gt=pt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
Tt=function(e){return!!gt(e)&&("[object Function]"==(e=ft(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},mr=rs["__core-js_shared__"],
Pl=/[^.]+$/.exec((zt=mr)&&zt.keys&&zt.keys.IE_PROTO||""),St=Pl?"Symbol(src)_1."+Pl:"",Xt=Function.prototype,
At=Xt.toString,Nt=Tt,mt=function(e){return!!St&&St in e},Ct=pt,Rt=Kr=function(e){if(null!=e){try{return At.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Rr=/[\\^$.*+?()[\]{}|]/g,yt=/^\[object .+?Constructor\]$/,
zs=Function.prototype,Cr=Object.prototype,hu=zs.toString,_u=Cr.hasOwnProperty,wt=RegExp("^"+hu.call(_u).replace(Rr,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bt=function(e){return!(!Ct(e
)||mt(e))&&(Nt(e)?wt:yt).test(Rt(e))},It=function(e,t){return null==e?void 0:e[t]},wu=(Eu=function(e,t){return t=It(e,t)
,bt(t)?t:void 0})(rs,"Map"),Ru=Eu(Object,"create"),Ot=Dt=Nu=Ru,au=Object.prototype,Lt=au.hasOwnProperty,Pt=Nu,
lu=Object.prototype,Ut=lu.hasOwnProperty,Ft=Nu,uu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},cu=function(e){var t,r=this.__data__;return Ot?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Lt.call(r,e)?r[e]:void 0},Lu=function(e){var t=this.__data__;return Pt?void 0!==t[e]:Ut.call(t,e)},
Pu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ft&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Dt?Dt(null):{},this.size=0},i.prototype.delete=uu,i.prototype.get=cu,
i.prototype.has=Lu,i.prototype.set=Pu,$t=i,kt=$l,Mt=wu,Uu=function(){this.size=0,this.__data__={hash:new $t,map:new(
Mt||kt),string:new $t}},Gt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},xt=Jt=Ht=jt=function(e,t){
return e=e.__data__,Gt(t)?e["string"==typeof t?"string":"hash"]:e.map},Fu=function(e){return e=jt(this,e).delete(e),
this.size-=e?1:0,e},$u=function(e){return Ht(this,e).get(e)},Su=function(e){return Jt(this,e).has(e)},Ml=function(e,t){
var r=xt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Uu,o.prototype.delete=Fu,
o.prototype.get=$u,o.prototype.has=Su,o.prototype.set=Ml,Vt=wu,Wt=xl=o,qt=Bt=$l,es=Ks,Bs=Ul,Ar=Fl,Nr=function(e,t){var r
,n=this.__data__;if(n instanceof Bt){if(r=n.__data__,!Vt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Wt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=kl,s.prototype.delete=es,
s.prototype.get=Bs,s.prototype.has=Ar,s.prototype.set=Nr,qs=s,Kt=xl,mr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=mr,Yt=zt=a,Qt=Pl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},Zt=Xt=function(e,t){return e.has(t)},zs=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new Yt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!Qt(t,function(e,t){if(!Zt(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Cr=rs.Uint8Array,er=Cr,tr=mu,rr=zs,nr=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},ir=hu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Rr=(_u=Jl)?_u.prototype:void 0,or=Rr?Rr.valueOf:void 0,Ru=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new er(e),new er(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return tr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=nr;case"[object Set]":return l=l||ir,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=rr(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(or)return or.call(e)==or.call(t)}return!1},au=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},lu=Array.isArray,ar=au,lr=sr=lu,Nu=function(e,t,r){
return t=t(e),lr(e)?t:ar(t,r(e))},ur=uu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},cu=Object.prototype,cr=cu.propertyIsEnumerable,Lu=(dr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),ur(dr(t),function(e){return cr.call(t,e)}))}:function(){return[]},Pu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},hr=Bl,Uu=function(e){return _r(e)&&"[object Arguments]"==hr(e)},
Er=_r=Fu=function(e){return null!=e&&"object"==typeof e},$u=Object.prototype,vr=$u.hasOwnProperty,
pr=$u.propertyIsEnumerable,Su=Uu(function(){return arguments}())?Uu:function(e){return Er(e)&&vr.call(e,"callee"
)&&!pr.call(e,"callee")},Ml=rs,$l=function(){return!1},Ml=(Ml=(kl=(Fl=(kl=(Fl=(Ul=Ks={exports:{}}).exports
)&&!Fl.nodeType&&Fl)&&Ul&&!Ul.nodeType&&Ul)&&Fl.exports===kl)?Ml.Buffer:void 0)?Ml.isBuffer:void 0,Ul.exports=$l=Ml||$l,
fr=/^(?:0|[1-9]\d*)$/,es=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&fr.test(e))&&-1<e&&e%1==0&&e<t},gr=Bl,Tr=Bs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Sr=Fu,Ar="[object Arguments]",Nr="[object Array]",
mr="[object Boolean]",Cr="[object Date]",_u="[object Error]",Rr="[object Function]",lu="[object Map]",
$u="[object Object]",Uu="[object RegExp]",Fl="[object Set]",kl="[object String]",Ml="[object WeakMap]",
Ul="[object ArrayBuffer]",$l="[object DataView]",(yr={}
)["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0
,
yr[Ar]=yr[Nr]=yr[Ul]=yr[mr]=yr[$l]=yr[Cr]=yr[_u]=yr[Rr]=yr[lu]=yr["[object Number]"]=yr[$u]=yr[Uu]=yr[Fl]=yr[kl]=yr[Ml]=!1
,cu=function(e){return Sr(e)&&Tr(e.length)&&!!yr[gr(e)]},$u=function(t){return function(e){return t(e)}},Uu=Hl,Ml=(Ml=(
kl=Fl={exports:{}}).exports)&&!Ml.nodeType&&Ml,Ml=(Gl=Ml&&kl&&!kl.nodeType&&kl)&&Gl.exports===Ml,jl=Ml&&Uu.process,
Uu=function(){try{return Gl&&Gl.require&&Gl.require("util").types||jl&&jl.binding&&jl.binding("util")}catch(e){}}(),
kl.exports=Uu,Hl=cu,Uu=(kl=(Ml=Fl.exports)&&Ml.isTypedArray)?$u(kl):Hl,wr=Pu,br=Su,Ir=sr,Dr=Ks.exports,Or=es,Lr=cu=Uu,
Ml=Object.prototype,Pr=Ml.hasOwnProperty,kl=function(e,t){var r,n=Ir(e),i=!n&&br(e),o=!n&&!i&&Dr(e),s=!n&&!i&&!o&&Lr(e),
a=n||i||o||s,l=a?wr(e.length,String):[],u=l.length;for(r in e)!t&&!Pr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Or(r,u))||l.push(r);return l},
Ur=Object.prototype,Hl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ur)},
ou=Object.keys,su=Object,Fr=Hl,$r=function(e){return ou(su(e))},Uu=Object.prototype,kr=Uu.hasOwnProperty,Mr=Tt,Gr=Bs,
jr=kl,Hr=function(e){var t,r;if(!Fr(e))return $r(e);for(r in t=[],Object(e))kr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Jr=Ml=function(e){return null!=e&&Gr(e.length)&&!Mr(e)},xr=Nu,Br=Lu,Vr=Hl=function(e){return(Jr(e)?jr:Hr)(e)}
,Wr=function(e){return xr(e,Vr,Br)},Pu=Object.prototype,qr=Pu.hasOwnProperty,Uu=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=Wr(e),T=g.length;if(T!=Wr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:qr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},kl=Eu(rs,
"DataView"),Nu=wu,Lu=Eu(rs,"Promise"),wu=Pu=Eu(rs,"Set"),rs=Eu(rs,"WeakMap"),zr=Bl,Yr="[object Map]",
Qr="[object Promise]",Zr="[object Set]",en="[object WeakMap]",tn="[object DataView]",rn=(Xr=Kr)(Kr=kl),nn=Xr(Nu),on=Xr(
Lu),sn=Xr(wu),an=Xr(rs),kl=zr,(Kr&&kl(new Kr(new ArrayBuffer(1)))!=tn||Nu&&kl(new Nu)!=Yr||Lu&&kl(Lu.resolve()
)!=Qr||wu&&kl(new wu)!=Zr||rs&&kl(new rs)!=en)&&(kl=function(e){var t=zr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Xr(e):"")switch(e){case rn:return tn;case nn:return Yr;case on:return Qr
;case sn:return Zr;case an:return en}return t}),ln=qs,un=zs,cn=Ru,dn=Uu,hn=kl,_n=sr,En=Ks.exports,vn=cu,
pn="[object Arguments]",fn="[object Array]",gn="[object Object]",wu=Object.prototype,Tn=wu.hasOwnProperty,Sn=function(e,
t,r,n,i,o){var s,a,l=_n(e),u=_n(t),c=l?fn:hn(e),d=u?fn:hn(t),h=(c=c==pn?gn:c)==gn,u=(d=d==pn?gn:d)==gn;if((d=c==d)&&En(e
)){if(!En(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new ln,l||vn(e)?un(e,t,r,n,i,o):cn(e,t,c,r,n,i,o)):1&r||(
s=h&&Tn.call(e,"__wrapped__"),a=u&&Tn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new ln,dn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new ln)},Nn=qs,mn=rs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!An(t)&&!An(r
)?t!=t&&r!=r:Sn(t,r,n,i,e,o))},Cn=pt,Rn=zs=function(e){return e==e&&!Cn(e)},yn=Hl,wn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Nn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?mn(a,s,3,n,l):u))return!1;return!0},bn=function(e){for(var t,r,n=yn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
Rn(r)];return n},In=Ru=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Uu=function(t){var r=bn(t);return 1==r.length&&r[0][2]?In(r[0][0],r[0][1]):function(e){return e===t||wn(e,t,r)}},Dn=Bl,
On=An=Fu,Ln=sr,Pn=kl=function(e){return"symbol"==typeof e||On(e)&&"[object Symbol]"==Dn(e)},
Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/,Ks=function(e,t){if(Ln(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Pn(e))||Fn.test(e)||!Un.test(e)||null!=t&&e in Object(t)},
$n=xl,kn="Expected a function",u.Cache=$n,
Mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/\\(\\)?/g,Lu=0
,iu=(Lu=u(Lu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Mn,function(e,t,r,n){i.push(
r?n.replace(Gn,"$1"):t||e)}),i},function(e){return 500===iu.size&&iu.clear(),e})).cache,jn=Au,qs=(wu=Jl
)?wu.prototype:void 0,xn=qs?qs.toString:void 0,Bn=xl=function e(t){if("string"==typeof t)return t;if(Hn(t))return jn(t,e
)+"";if(Jn(t))return xn?xn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},qn=Lu,Kn=wu=function(e){
return null==e?"":Bn(e)},zn=Jn=kl,ei=Xn=qs=function(e,t){return Vn(e)?e:Wn(e,t)?[e]:qn(Kn(e))},ti=Su,ii=Bs,si=function(e
,t){return null!=e&&t in Object(e)},ai=cu=function(e,t,r){for(var n,i,o=(t=ei(t,e)).length,s=!(n=-1);++n<o&&(i=oi(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ii(o)&&ni(i,o)&&(ri(e)||ti(e))},li=rs,
ui=Zn=function(e,t,r){return void 0===(t=null==e?void 0:Qn(e,t))?r:t},ci=function(e,t){return null!=e&&ai(e,t,si)},hi=zs
,_i=Ru,vi=Qn=Bs=function(e,t){for(var r=0,n=(t=Xn(t,e)).length;null!=e&&r<n;)e=e[Yn(t[r++])];return r&&r==n?e:void 0},
pi=function(t){return function(e){return null==e?void 0:e[t]}},fi=function(t){return function(e){return vi(e,t)}},
gi=di=Wn=Ks,Ti=Ei=oi=Yn=rs=function(e){if("string"==typeof e||zn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Si=Uu,Ai=function(r,n){return di(r)&&hi(n)?_i(Ei(r),n):function(e){var t=ui(e,r);return void 0===t&&t===n?ci(e,r):li(n,t
,3)}},Ni=zs=function(e){return e},mi=ri=Vn=Hn=sr,Ci=function(e){return gi(e)?pi(Ti(e)):fi(e)},Ri=Ks=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},yi=Hl,Di=Au,Li=Ks=function(e,n){
var i=-1,o=Ii(e)?Array(e.length):[];return bi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Ui=function(e,t){return(Pi(e)?Di:Li
)(e,Oi(t))},$i=mu,ki=Ii=wi=Ml,Mi=ni=es,Gi=pt,ji=Pl,Ji=function(e,n){var i;return Fi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Vi=function(e,t,r){var n=xi(e)?ji:Ji;return r&&Bi(e,t,r)&&(t=void 0),n(e,Hi(t))},Wi=Fi=bi=Pl=Uu=function(e,t){
if(null==e)return e;if(!wi(e))return e&&Ri(e,t,yi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},qi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Ki=function(e,n){
var i=!0;return Wi(e,function(e,t,r){return i=!!n(e,t,r)}),i},zi=Hi=Oi=Ru=function(e){
return"function"==typeof e?e:null==e?Ni:"object"==typeof e?mi(e)?Ai(e[0],e[1]):Si(e):Ci(e)},Xi=xi=Pi=sr,
Yi=Bi=Uu=function(e,t,r){if(!Gi(r))return!1;var n=typeof t;return!!("number"==n?ki(r)&&Mi(t,r.length
):"string"==n&&t in r)&&$i(r[t],e)},Qi=function(e,t,r){var n=Xi(e)?qi:Ki;return r&&Yi(e,t,r)&&(t=void 0),n(e,zi(t))},
Zi=Eu,Eu=function(){try{var e=Zi(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),eo=Eu,to=function(e,t,r){
"__proto__"==t&&eo?eo(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},ro=mu,mu=Object.prototype,
no=mu.hasOwnProperty,io=function(e,t,r){var n=e[t];no.call(e,t)&&ro(n,r)&&(void 0!==r||t in e)||to(e,t,r)},oo=qs,so=es,
lo=rs,uo=function(e,t,r,n){var i,o,s,a,l,u,c;if(!ao(e))return e;for(i=-1,s=(o=(t=oo(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=lo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=ao(c)?c:so(t[i+1])?[]:{})),io(a,l,u),a=a[l]}return e},co=function(e,t,r){return null==e?e:uo(e,t,r)},ho=Su
,Eo=(mu=Jl)?mu.isConcatSpreadable:void 0,po=function(e){return _o(e)||ho(e)||!!(Eo&&e&&e[Eo])},fo=vo=au,
go=qs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||po,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):vo(o,s
):i||(o[o.length]=s);return o},To=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
So=_o=sr,Ao=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return fo(So(t)?To(t):[t],go(e,1))},No=Ru,mo=Ml,Co=Hl,es=function(o){return function(e,t,r){var n,
i=Object(e);return mo(e)||(n=No(t),e=Co(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
rs=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Ro=/\s/,yo=function(
e){for(var t=e.length;t--&&Ro.test(e.charAt(t)););return t},wo=/^\s+/,bo=Su=function(e){return e&&e.slice(0,yo(e)+1
).replace(wo,"")},Io=ao=pt,Do=kl,Oo=/^[-+]0x[0-9a-f]+$/i,Lo=/^0b[01]+$/i,Po=/^0o[0-7]+$/i,Uo=parseInt,Fo=function(e){
var t;return"number"==typeof e?e:Do(e)?NaN:(Io(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Io(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=bo(e),(t=Lo.test(e))||Po.test(e)?Uo(e.slice(2),t?2:8):Oo.test(e)?NaN:+e))},
$o=17976931348623157e292,ko=function(e){return e?(e=Fo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*$o:0===e?e:0},Mo=rs,Go=Ru
,jo=Jl=function(e){var t=ko(e),e=t%1;return t==t?e?t-e:t:0},Ho=Math.max,mu=es(Jo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:jo(r))<0&&(r=Ho(n+r,0)),Mo(e,Go(t),r)):-1}),xo=mu,Bo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Vo=Pl,Wo=Ru,qo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},Ko=sr,zo=function(e,t,r){var n=Ko(e)?Bo:qo,i=arguments.length<3
;return n(e,Wo(t),r,i,Vo)},au=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},Xo=rs,Yo=function(e){return e!=e},Qo=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},Zo=Ml=function(e,t,r){return t==t?Qo(e,t,r):Xo(e,Yo,r)},
es=function(e,t){return!(null==e||!e.length)&&-1<Zo(e,t,0)},mu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},rs=function(){},rs=(ts=Pu)&&1/hu(new ts([,-0]))[1]==1/0?function(e){return new ts(e)
}:rs,ns=zt,is=es,os=mu,ss=Xt,as=rs,ls=hu,us=function(e,t,r){var n,i,o,s,a=-1,l=is,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=os;else if(200<=u){if(n=t?null:as(e))return ls(n);c=!1,l=ss,h=new ns}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},cs=function(e){return e&&e.length?us(e):[]},ds=kl,hs=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=ds(e),s=void 0!==t,a=null===t,l=t==t,u=ds(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},_s=Au,Es=Bs,vs=Ru,ps=Ks,fs=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,gs=$u,Ts=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=hs(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},Ss=zs,As=sr,kl=function(e,n,r){var i;return n=n.length?_s(n
,function(t){return As(t)?function(e){return Es(e,1===t.length?t[0]:t)}:t}):[Ss],i=-1,n=_s(n,gs(vs)),e=ps(e,function(t,e
,r){return{criteria:_s(n,function(e){return e(t)}),index:++i,value:t}}),fs(e,function(e,t){return Ts(e,t,r)})},
Ns=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},ms=Math.max,Bs=function(o,s,a){return s=ms(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=ms(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ns(o,this,e)}},Cs=function(e){return function(){return e}},Rs=Eu,
ys=Date.now,tu=Rs?function(e,t){return Rs(e,"toString",{configurable:!0,enumerable:!1,value:Cs(t),writable:!0})}:zs,
ws=qs,bs=kl,Is=Uu,(Ks=function(){var e=ys(),t=16-e+ +nu;if(nu=e,0<t){if(800<=++ru)return arguments[0]}else ru=0
;return tu.apply(void 0,arguments)})(Bs(hu=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Is(e,t[0],t[1]
)?t=[]:2<r&&Is(t[0],t[1],t[2])&&(t=[t[0]]),bs(e,ws(t,1),[])},void(nu=ru=0),zs),hu+""),Os=uu,Ls=function(e,n){var i=[]
;return Ds(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Ps=Ru,Fs=function(e,t){return(Us(e)?Os:Ls)(e,Ps(t))},$s=zs,
ks=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Ms=Ds=Pl,Gs=function(e){
return"function"==typeof e?e:$s},js=Us=sr,Hs=function(e,t){return(js(e)?ks:Ms)(e,Gs(t))},Js=au,Eu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Js(e,t,r)},xs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Bs=function(e){return xs.test(e)}
,Vs=Bl,Ws=Fu,Ks=function(e){return Ws(e)&&"[object RegExp]"==Vs(e)},uu=(kl=(qs=Fl.exports)&&qs.isRegExp)?$u(kl):Ks,
Ru=function(e){return e.split("")},Pl="["+(zs="\\ud800-\\udfff")+"]",$u=(au="[\\ufe0e\\ufe0f]?")+($u="(?:"+(
Fl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(qs="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
kl="[^"+zs+"]",Ks="(?:\\ud83c[\\udde6-\\uddff]){2}",zs="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+au+$u+")*",
Pl="(?:"+[kl+Fl+"?",Fl,Ks,zs,Pl].join("|")+")",Xs=RegExp(qs+"(?="+qs+")|"+Pl+$u,"g"),Ys=Ru,Zs=function(e){
return e.match(Xs)||[]},ra=Qs=Bs,na=Uu,ia=uu,aa=function(e,t,r){return r&&"number"!=typeof r&&na(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=sa(e))&&("string"==typeof t||null!=t&&!ia(t))&&!(t=ea(t))&&ra(e)?ta(oa(e),0,r
):e.split(t,r):[]},ua=la=Ml,ca=ea=xl,da=Su,ha=ta=Eu,_a=function(e,t){for(var r=e.length;r--&&-1<la(t,e[r],0););return r}
,Ea=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<ua(t,e[r],0););return r},va=oa=function(e){return(Qs(e)?Zs:Ys)(e)},
pa=sa=wu,fa=function(e,t,r){return(e=pa(e))&&(r||void 0===t)?da(e):e&&(t=ca(t))?(r=va(e),e=va(t),t=Ea(r,e),e=_a(r,e)+1,
ha(r,t,e).join("")):e},Eu=Object.prototype,ga=Eu.hasOwnProperty,Ta=function(e,t){return null!=e&&ga.call(e,t)},Sa=cu,
Aa=function(e,t){return null!=e&&Sa(e,t,Ta)},Ca="[object Boolean]",Ra=function(e){return!0===e||!1===e||ma(e)&&Na(e)==Ca
},ya=function(e){return null===e},ba=sr,Da="[object String]",Oa=function(e){return"string"==typeof e||!ba(e)&&Ia(e)&&wa(
e)==Da},La=wa=Na=Bl,Pa=Ia=ma=Fu,Ua="[object Number]",Fa=function(e){return"number"==typeof e||Pa(e)&&La(e)==Ua},
ka=function(e){return"number"==typeof e&&e==$a(e)},Ja=function(e,t,r){return e=Ha(e),r=null==r?0:Ma(ja(r),0,e.length),
t=Ga(t),e.slice(r,r+t.length)==t},xa=Ma=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Ba=Ga=xl,Va=ja=$a=Jl,Wa=Ha=wu,qa=function(e,t,r){var n;return e=Wa(e),t=Ba(t),n=e.length,n=r=void 0===r?n:xa(Va(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},Ka=Au,za=function(t,e){return Ka(e,function(e){return t[e]})},Xa=Hl,Ya=function(e
){return null==e?[]:za(e,Xa(e))},Bl=Array.prototype,Qa=Bl.join,Za=function(e,t){return null==e?"":Qa.call(e,t)},(
Fu=el={})[Fu.DEBUG=0]="DEBUG",Fu[Fu.INFO=1]="INFO",Fu[Fu.WARN=2]="WARN",Fu[Fu.ERROR=3]="ERROR",Fu[Fu.NONE=4]="NONE",
tl=el;const ku=null!==(xl=L("1.0.4"))&&void 0!==xl?xl:"?";wu=null!==(Jl=L(""))&&void 0!==Jl?Jl:"io.nor.fi",Hl=null!==(
Au=L(""))&&void 0!==Au?Au:"nor-pipeline-runner",Fu=null!==(Bl=L(""))&&void 0!==Bl?Bl:"",Jl=null!==(xl=L("")
)&&void 0!==xl?xl:"";const Mu=null!==(Au=L("production"))&&void 0!==Au?Au:"development",Gu=null!==(Bl=L(
"2021-09-09T00:00:56.795Z"))&&void 0!==Bl?Bl:"";Au=null!==(xl=L(""))&&void 0!==xl?xl:"${",xl=null!==(Bl=L("")
)&&void 0!==Bl?Bl:"}";const ju=null===(Bl=D(""))||void 0===Bl||Bl,Hu=null===(Bl=D(""))||void 0===Bl||Bl,Ju=null===(Bl=D(
""))||void 0===Bl||Bl,xu=null===(Bl=D(""))||void 0===Bl||Bl;Bl="production"===Mu;const Bu="test"===Mu,Vu=!Bl&&!Bu
;Fu=null!==(et=function(e){if(e){if(function(){switch(e){case el.DEBUG:case el.INFO:case el.WARN:case el.ERROR:
case el.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return el.DEBUG
;case"INFO":return el.INFO;case"WARN":case"WARNING":return el.WARN;case"ERR":case"ERROR":return el.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return el.NONE;default:return}}}(null!==(et=L(null===(Bl=process
)||void 0===Bl||null===(et=Bl.env)||void 0===et?void 0:et.PIPELINE_LOG_LEVEL))&&void 0!==et?et:L(Fu))
)&&void 0!==et?et:tl.INFO;const Wu=null!==(tt=L(null===(et=process)||void 0===et||null===(tt=et.env
)||void 0===tt?void 0:tt.PIPELINE_SERVER))&&void 0!==tt?tt:Hl,qu=null!==(rt=function(e){if(void 0!==e)return`${e}`}(
null===(Hl=process)||void 0===Hl||null===(rt=Hl.env)||void 0===rt?void 0:rt.PIPELINE_AUTHENTICATION))&&void 0!==rt?rt:Jl
,Ku=null!==(nt=L(null===(Jl=process)||void 0===Jl||null===(nt=Jl.env)||void 0===nt?void 0:nt.PIPELINE_SERVER)
)&&void 0!==nt?nt:wu,zu=null!==(it=L(null===(wu=process)||void 0===wu||null===(it=wu.env
)||void 0===it?void 0:it.PIPELINE_VARIABLE_PREFIX))&&void 0!==it?it:Au,Xu=null!==(ot=L(null===(Au=process
)||void 0===Au||null===(ot=Au.env)||void 0===ot?void 0:ot.PIPELINE_VARIABLE_SUFFIX))&&void 0!==ot?ot:xl;class Yu{
constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class Qu{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case el.DEBUG:return"DEBUG";case el.INFO:return"INFO";case el.WARN:return"WARN";case el.ERROR:return"ERROR"
;case el.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=tl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=tl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=tl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=tl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new Yu(e,Qu)}}l(Qu,"Level",tl),l(Qu,"_level",tl.DEBUG),l(Qu,"_logger",console),(xl=rl={}
)[xl.HTTP=0]="HTTP",xl[xl.LOCAL=1]="LOCAL",xl[xl.MATRIX=2]="MATRIX",nl=rl,(xl=il={})[xl.NONE=0]="NONE",
xl[xl.BASIC_AUTH=1]="BASIC_AUTH",xl[xl.BEARER_AUTH=2]="BEARER_AUTH",ol=il;class Zu{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const ec=Qu.createLogger("MatrixRunnerResource");class tc{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return m(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===nl.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||F(null==t?void 0:t.authentication))?e:(t=(e=fa(`${e}`)
).toLowerCase(),Ja(t,"http:")||Ja(t,"https:")?(t=new URL(e),t=null!==(t=Zu.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:Zu.parseRunnerAuthentication(qu),{type:nl.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return m(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===nl.LOCAL&&p(null==t?void 0:t.path)?e:(e=fa(`${e}`),(e=Ja(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&pu.default.existsSync(e)?{type:nl.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(m(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===nl.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||F(null==s?void 0:s.authentication)))return i;i=fa(
`${i}`),ec.debug(`value: '${i}'`);let e=i.toLowerCase();if(ec.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),ec.debug(`lowerCaseValue: '${e}'`),Ja(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),ec.debug(`url: '${s}': `,s),o=null!==(o=Zu.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:Zu.parseRunnerAuthentication(qu),ec.debug(
"auth: ",o);const e=`${s.host}`;ec.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),ec.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return ec.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,ec.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",ec.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,ec.debug(`pool: '${s}'`),{type:nl.MATRIX,homeserver:e,pool:s,
authentication:o}}Ja(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Ja(e,"!")||Ja(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Ku}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||qu,r=r||Ku,{type:nl.MATRIX,homeserver:r,pool:n,
authentication:Zu.parseRunnerAuthentication(t)}}}(e)}}(xl=sl={})[xl.OK=0]="OK",xl[xl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
xl[xl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",xl[xl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
xl[xl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",xl[xl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
xl[xl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",xl[xl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
xl[xl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",xl[xl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
xl[xl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",xl[xl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
xl[xl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",xl[xl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
xl[xl.FATAL_ERROR=14]="FATAL_ERROR",xl[xl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
xl[xl.WORK_CANCELLED=16]="WORK_CANCELLED",xl[xl.CONFLICT=17]="CONFLICT",xl[xl.USAGE=64]="USAGE",
xl[xl.DATAERR=65]="DATAERR",xl[xl.NOINPUT=66]="NOINPUT",xl[xl.NOUSER=67]="NOUSER",xl[xl.NOHOST=68]="NOHOST",
xl[xl.UNAVAILABLE=69]="UNAVAILABLE",xl[xl.SOFTWARE=70]="SOFTWARE",xl[xl.OSERR=71]="OSERR",xl[xl.OSFILE=72]="OSFILE",
xl[xl.CANTCREAT=73]="CANTCREAT",xl[xl.IOERR=74]="IOERR",xl[xl.TEMPFAIL=75]="TEMPFAIL",xl[xl.PROTOCOL=76]="PROTOCOL",
xl[xl.NOPERM=77]="NOPERM",xl[xl.CONFIG=78]="CONFIG",
xl[xl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
xl[xl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",xl[xl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
xl[xl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
xl[xl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
xl[xl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",al=sl,(xl=ll={})[xl.OPTIONS=0]="OPTIONS",
xl[xl.GET=1]="GET",xl[xl.POST=2]="POST",xl[xl.PUT=3]="PUT",xl[xl.DELETE=4]="DELETE",xl[xl.PATCH=5]="PATCH",Wl=ll
;const rc="WINDOW"===(ql=null!==(ql=null!==(st=null===(xl=process)||void 0===xl||null===(st=xl.env
)||void 0===st?void 0:st.NOR_REQUEST_CLIENT_MODE)&&void 0!==st?st:null===(ql=process)||void 0===ql||null===(at=ql.env
)||void 0===at?void 0:at.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==ql?ql:"")||!("undefined"==typeof window||!window.fetch
),nc="NODE"===ql||!rc;class ic{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await ic.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await ic.getRequestDataAsString(e)))return fu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await ic.getRequestDataAsString(e)))return JSON.parse(e)}}(ql=ul={}
)[ql.Continue=100]="Continue",ql[ql.SwitchingProtocols=101]="SwitchingProtocols",ql[ql.Processing=102]="Processing",
ql[ql.CheckPoint=103]="CheckPoint",ql[ql.OK=200]="OK",ql[ql.Created=201]="Created",ql[ql.Accepted=202]="Accepted",
ql[ql.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",ql[ql.NoContent=204]="NoContent",
ql[ql.ResetContent=205]="ResetContent",ql[ql.PartialContent=206]="PartialContent",ql[ql.MultiStatus=207]="MultiStatus",
ql[ql.AlreadyReported=208]="AlreadyReported",ql[ql.IMUsed=226]="IMUsed",ql[ql.MultipleChoices=300]="MultipleChoices",
ql[ql.MovedPermanently=301]="MovedPermanently",ql[ql.Found=302]="Found",ql[ql.SeeOther=303]="SeeOther",
ql[ql.NotModified=304]="NotModified",ql[ql.TemporaryRedirect=307]="TemporaryRedirect",
ql[ql.PermanentRedirect=308]="PermanentRedirect",ql[ql.BadRequest=400]="BadRequest",
ql[ql.Unauthorized=401]="Unauthorized",ql[ql.PaymentRequired=402]="PaymentRequired",ql[ql.Forbidden=403]="Forbidden",
ql[ql.NotFound=404]="NotFound",ql[ql.MethodNotAllowed=405]="MethodNotAllowed",ql[ql.NotAcceptable=406]="NotAcceptable",
ql[ql.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",ql[ql.RequestTimeout=408]="RequestTimeout",
ql[ql.Conflict=409]="Conflict",ql[ql.Gone=410]="Gone",ql[ql.LengthRequired=411]="LengthRequired",
ql[ql.PreconditionFailed=412]="PreconditionFailed",ql[ql.PayloadTooLarge=413]="PayloadTooLarge",
ql[ql.URITooLong=414]="URITooLong",ql[ql.UnsupportedMediaType=415]="UnsupportedMediaType",
ql[ql.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",ql[ql.ExpectationFailed=417]="ExpectationFailed",
ql[ql.IAmATeapot=418]="IAmATeapot",ql[ql.UnprocessableEntity=422]="UnprocessableEntity",ql[ql.Locked=423]="Locked",
ql[ql.FailedDependency=424]="FailedDependency",ql[ql.TooEarly=425]="TooEarly",
ql[ql.UpgradeRequired=426]="UpgradeRequired",ql[ql.PreconditionRequired=428]="PreconditionRequired",
ql[ql.TooManyRequests=429]="TooManyRequests",ql[ql.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
ql[ql.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",ql[ql.InternalError=500]="InternalError",
ql[ql.InternalServerError=500]="InternalServerError",ql[ql.NotImplemented=501]="NotImplemented",
ql[ql.BadGateway=502]="BadGateway",ql[ql.ServiceUnavailable=503]="ServiceUnavailable",
ql[ql.GatewayTimeout=504]="GatewayTimeout",ql[ql.HttpVersionNotSupported=505]="HttpVersionNotSupported",
ql[ql.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",ql[ql.InsufficientStorage=507]="InsufficientStorage",
ql[ql.LoopDetected=508]="LoopDetected",ql[ql.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
ql[ql.NotExtended=510]="NotExtended",ql[ql.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",cl=ul,(
Vl=Vl||{}).ERROR="error",dl=Vl;class oc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
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
return this.url}getBody(){return this.body}}const sc=nc?require("fs").promises:void 0,ac=Qu.createLogger(
"NodeRequestClient");class lc{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case Wl.GET:return this._getJson(t,r,n);case Wl.POST:return this._postJson(t,r,n)
;case Wl.PATCH:return this._patchJson(t,r,n);case Wl.PUT:return this._putJson(t,r,n);case Wl.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await sc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void ac.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void ac.debug(
"_checkSocketFile: ENOENT: ",e);throw ac.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Tu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new gu.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?ac.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(ac.warn(
"Warning! Request had already ended when the response was received."),ac.debug("Error from event: ",e)):(ac.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(ac.warn(
"Warning! Request had already ended when the response was received."),ac.debug("Exception: ",e)):(ac.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await ic.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.GET,e,n,r).then(lc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Wl.PUT,e,n,r).then(lc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.POST,e,n,r).then(
lc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(Wl.PATCH,e,n,r).then(lc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(Wl.DELETE,e,n,r).then(lc._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw ac.error(`Unsuccessful response with status ${t}: `,e),new oc(t,`Error ${t} for ${J(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class uc{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case Wl.GET:return this._getJson(t,r,n);case Wl.POST:return this._postJson(t,r,n)
;case Wl.PUT:return this._putJson(t,r,n);case Wl.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>uc._successResponse(e,Wl.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>uc._successResponse(e,Wl.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>uc._successResponse(e,Wl.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>uc._successResponse(e,Wl.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${J(t)} ${n}`;return e.json().then(
e=>{throw new oc(r,i,t,n,e)})}return e.json()}}const cc=nc?require("http"):void 0,dc=nc?require("https"):void 0,
hc=Qu.createLogger("RequestClient");class _c{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(Wl.GET,e,t)}static postJson(e,t,r){return hc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(Wl.POST,e,r,t)}static patchJson(e,t,r){return hc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Wl.PATCH,e,r,t)}static putJson(e,t,r){return hc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Wl.PUT,e,r,t)}static deleteJson(e,t,r){return hc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Wl.DELETE,e,t,r)}static _initClient(){if(rc)return hc.debug("Detected browser environment"),
new uc(window.fetch.bind(window));if(nc)return new lc(cc,dc);throw new TypeError(
"Could not detect request client implementation")}}l(_c,"_client",_c._initClient()),(Vl=eu=eu||{}).JSON="json",
Vl.STRING="string",Vl.BOOLEAN="boolean",Vl.NUMBER="number",Vl.INTEGER="integer",Zl=eu;const Ec=Ao(eu=["parameters",
"variables"],["name","command","args","env"]),vc=Ao(eu,["name","json","action","output"]),pc=Ao(eu,["name","csv",
"action","output"]),fc=Ao(eu,["name","steps"]),gc=Ao(eu,["name","jobs"]),Tc=Ao(eu,["name","stages"]);class Sc{getName(){
return this._name}constructor(e){l(this,"_name",void 0),l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}
destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return Aa(this._callbacks,e)}triggerEvent(t,...r){
var e;this.hasCallbacks(t)?(e=this._callbacks[t],Hs(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Fs(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
eu=Kl=Kl||{})[eu.CONSTRUCTED=0]="CONSTRUCTED",eu[eu.STARTED=1]="STARTED",eu[eu.PAUSED=2]="PAUSED",
eu[eu.CANCELLED=3]="CANCELLED",eu[eu.FINISHED=4]="FINISHED",eu[eu.FAILED=5]="FAILED",hl=Kl,(Kl=zl=zl||{}
).PIPELINE="fi.nor.pipeline",Kl.JOB="fi.nor.pipeline.job",Kl.STAGE="fi.nor.pipeline.stage",
Kl.TASK="fi.nor.pipeline.task",Kl.STEP="fi.nor.pipeline.step",Kl.SCRIPT_STEP="fi.nor.pipeline.step.script",
Kl.JSON_STEP="fi.nor.pipeline.step.json",Kl.CSV_STEP="fi.nor.pipeline.step.csv",_l=zl;const Ac=Qu.createLogger(
"JobController");(zl=El={}).JOB_CHANGED="JobController:jobChanged",zl.JOB_STARTED="JobController:jobStarted",
zl.JOB_PAUSED="JobController:jobPaused",zl.JOB_RESUMED="JobController:jobResumed",
zl.JOB_CANCELLED="JobController:jobCancelled",zl.JOB_FAILED="JobController:jobFailed",
zl.JOB_FINISHED="JobController:jobFinished";class Nc{constructor(e,t,r=[]){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,"_changedCallback",void 0),l(this,"_state",
void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!x(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,le,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new Sc(`JobController#${this._name}`),this._state=hl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Ui(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=Fs(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
Ac.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
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
`Job#${this._name} was already started`);return Ac.info(`Starting job ${this._name}`),this._state=hl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(El.JOB_STARTED)&&this._observer.triggerEvent(
El.JOB_STARTED,this),this._observer.hasCallbacks(El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Ac.info(
`Pausing job ${this._name}`),this._state=hl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
El.JOB_PAUSED)&&this._observer.triggerEvent(El.JOB_PAUSED,this),this._observer.hasCallbacks(El.JOB_CHANGED
)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Ac.info(`Resuming job ${this._name}`),this._state=hl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(El.JOB_RESUMED)&&this._observer.triggerEvent(
El.JOB_RESUMED,this),this._observer.hasCallbacks(El.JOB_CHANGED)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}
stop(){if(this._state!==hl.STARTED)throw new Error(`Job#${this._name} was not started`);return Ac.info(
`Stopping job ${this._name}`),this._state=hl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
El.JOB_CANCELLED)&&this._observer.triggerEvent(El.JOB_CANCELLED,this),this._observer.hasCallbacks(El.JOB_CHANGED
)&&this._observer.triggerEvent(El.JOB_CHANGED,this),this}onCancelled(e){return this.on(El.JOB_CANCELLED,e)}onChanged(e){
return this.on(El.JOB_CHANGED,e)}onFailed(e){return this.on(El.JOB_FAILED,e)}onFinished(e){return this.on(
El.JOB_FINISHED,e)}onPaused(e){return this.on(El.JOB_PAUSED,e)}onResumed(e){return this.on(El.JOB_RESUMED,e)}onStarted(e
){return this.on(El.JOB_STARTED,e)}getErrorString(){return Ui(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return Ui(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Ac.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
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
;const mc=Qu.createLogger("StageController");(zl=vl={}).STAGE_STARTED="StageController:stageStarted",
zl.STAGE_PAUSED="StageController:stagePaused",zl.STAGE_RESUMED="StageController:stageResumed",
zl.STAGE_FINISHED="StageController:stageFinished",zl.STAGE_FAILED="StageController:stageFailed",
zl.STAGE_CANCELLED="StageController:stageCancelled",zl.STAGE_CHANGED="StageController:stageChanged";class Cc{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!x(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ue,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=hl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Sc(`StageController#${this._name}`),
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
this._state!==hl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return mc.info(
`Starting stage ${this._name}`),this._state=hl.STARTED,Fs(this._jobs,t=>{try{return t.start(),!1}catch(e){
return mc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=hl.FAILED,
this._observer.hasCallbacks(vl.STAGE_FAILED)&&this._observer.triggerEvent(vl.STAGE_FAILED,this)
):this._observer.hasCallbacks(vl.STAGE_STARTED)&&this._observer.triggerEvent(vl.STAGE_STARTED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}pause(){if(
this._state===hl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);mc.info(`Pausing stage ${this._name}`)
,this._state=hl.PAUSED;var e=Fs(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return mc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&mc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(vl.STAGE_PAUSED
)&&this._observer.triggerEvent(vl.STAGE_PAUSED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}resume(){if(this._state===hl.STARTED)throw new Error(
`Stage#${this._name} was already started`);mc.info(`Resuming stage ${this._name}`),this._state=hl.STARTED;var e=Fs(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return mc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&mc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(vl.STAGE_RESUMED
)&&this._observer.triggerEvent(vl.STAGE_RESUMED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);mc.info(`Stopping stage ${this._name}`),this._state=hl.CANCELLED;var e=Fs(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return mc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&mc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Ui(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Ui(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Fs(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){mc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==hl.FAILED?(this._state=hl.FAILED,this._observer.hasCallbacks(vl.STAGE_FAILED
)&&this._observer.triggerEvent(vl.STAGE_FAILED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)):n&&this._state!==hl.CANCELLED?(this._state=hl.CANCELLED,
this._observer.hasCallbacks(vl.STAGE_CANCELLED)&&this._observer.triggerEvent(vl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)
):this._state!==hl.FINISHED&&(this._state=hl.FINISHED,this._observer.hasCallbacks(vl.STAGE_FINISHED
)&&this._observer.triggerEvent(vl.STAGE_FINISHED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)))):(n=S(Fs(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==hl.PAUSED?(this._state=hl.PAUSED,this._observer.hasCallbacks(vl.STAGE_PAUSED
)&&this._observer.triggerEvent(vl.STAGE_PAUSED,this),this._observer.hasCallbacks(vl.STAGE_CHANGED
)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this)):n||this._state!==hl.PAUSED||(this._state=hl.STARTED,
this._observer.hasCallbacks(vl.STAGE_RESUMED)&&this._observer.triggerEvent(vl.STAGE_RESUMED,this),
this._observer.hasCallbacks(vl.STAGE_CHANGED)&&this._observer.triggerEvent(vl.STAGE_CHANGED,this))}}l(Cc,"Event",vl)
;const Rc=Qu.createLogger("PipelineController");(zl=pl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
zl.PIPELINE_PAUSED="PipelineController:pipelinePaused",zl.PIPELINE_RESUMED="PipelineController:pipelineResumed",
zl.PIPELINE_FINISHED="PipelineController:pipelineFinished",zl.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
zl.PIPELINE_FAILED="PipelineController:pipelineFailed",zl.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class yc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!x(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ce,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Sc(`PipelineController#${this._name}`),this._state=hl.CONSTRUCTED,
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
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Rc.info(
`Pausing pipeline ${this._name}`),this._state=hl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
pl.PIPELINE_PAUSED)&&this._observer.triggerEvent(pl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Rc.info(`Resuming pipeline ${this._name}`),
this._state=hl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(pl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}start(){if(this._state!==hl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Rc.info(`Starting pipeline ${this._name}`),this._state=hl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(pl.PIPELINE_STARTED)&&this._observer.triggerEvent(
pl.PIPELINE_STARTED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
pl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==hl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Rc.info(`Stopping pipeline ${this._name}`),this._state=hl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(pl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),this}
getErrorString(){return Ui(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Ui(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Rc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=hl.FAILED,
this._observer.hasCallbacks(pl.PIPELINE_FAILED)&&this._observer.triggerEvent(pl.PIPELINE_FAILED,this),Rc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=hl.CANCELLED,this._observer.hasCallbacks(
pl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pl.PIPELINE_CANCELLED,this),Rc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=hl.STARTED;const o=this._stages[this._current].start();n===hl.PAUSED&&this._observer.hasCallbacks(
pl.PIPELINE_RESUMED)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),Rc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=hl.FINISHED,this._observer.hasCallbacks(pl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(pl.PIPELINE_FINISHED,this),Rc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(pl.PIPELINE_CHANGED)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=hl.PAUSED,this._observer.hasCallbacks(pl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(pl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),Rc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=hl.STARTED,this._observer.hasCallbacks(pl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(pl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pl.PIPELINE_CHANGED,this),Rc.info(`Pipeline ${this._name} was resumed`))}}l(yc,"Event",pl
),(fl=fl||{}).ON_EXIT="NodeSystemProcess:onExit";const wc=Qu.createLogger("ScriptController");(zl=gl={}
).SCRIPT_STARTED="ScriptController:scriptStarted",zl.SCRIPT_PAUSED="ScriptController:scriptPaused",
zl.SCRIPT_RESUMED="ScriptController:scriptResumed",zl.SCRIPT_CANCELLED="ScriptController:scriptCancelled",
zl.SCRIPT_FAILED="ScriptController:scriptFailed",zl.SCRIPT_FINISHED="ScriptController:scriptFinished",
zl.SCRIPT_CHANGED="ScriptController:scriptChanged";class bc{constructor(e,t,r,n=[],i={}){if(l(this,"_context",void 0),l(
this,"_observer",void 0),l(this,"_name",void 0),l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),
l(this,"_closeCallback",void 0),l(this,"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",
void 0),l(this,"_systemProcess",void 0),l(this,"_state",void 0),!x(t))throw new TypeError(`Script name invalid: ${t}`)
;if(!p(r))throw new TypeError(`Script#${t} must have a valid command: ${r}`);if(!d(n,p,0))throw new TypeError(
`Script#${t} must have a valid args: ${JSON.stringify(n)}`);if(!C(i,p,p))throw new TypeError(
`Script#${t} must have a valid env: ${JSON.stringify(i)}`);this._context=e,this._state=hl.CONSTRUCTED,this._name=t,
this._command=r,this._args=n,this._env=i,this._observer=new Sc(`ScriptController#${t}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`ScriptController#${this._name}`}
getStateDTO(){return{type:_l.SCRIPT_STEP,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:case hl.CANCELLED:
case hl.FINISHED:case hl.FAILED:return!1}}isStarted(){switch(this._state){case hl.STARTED:case hl.PAUSED:return!0
;case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){switch(this._state){
case hl.PAUSED:return!0;case hl.CONSTRUCTED:case hl.STARTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}
isFinished(){switch(this._state){case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!0;case hl.CONSTRUCTED:
case hl.STARTED:case hl.PAUSED:return!1}}isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.FAILED:
case hl.CANCELLED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isCancelled(){switch(this._state){
case hl.CANCELLED:return!0;case hl.FINISHED:case hl.FAILED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}
isFailed(){switch(this._state){case hl.FAILED:return!0;case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:
case hl.STARTED:case hl.PAUSED:return!1}}start(){var e,t,r;if(this._state!==hl.CONSTRUCTED)throw new Error(
`Script#${this._name} was already started`);if(this._state=hl.STARTED,!p(e=this._context.compileModel(this._command))
)throw new Error(`Script#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`Script#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!C(
r=this._context.compileModel(this._env),p,p))throw new Error(
`Script#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`);this._compiledEnv=r,wc.info(
`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "')}"`)
;const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(fl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
gl.SCRIPT_STARTED)&&this._observer.triggerEvent(gl.SCRIPT_STARTED,this),this._observer.hasCallbacks(gl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(gl.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return wc.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=hl.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(gl.SCRIPT_PAUSED)&&this._observer.triggerEvent(gl.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(gl.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._systemProcess)throw new Error(
"No process initialized");return wc.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=hl.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(gl.SCRIPT_RESUMED
)&&this._observer.triggerEvent(gl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(gl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(gl.SCRIPT_CHANGED,this),this}stop(){if(this._state!==hl.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return wc.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=hl.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(gl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
gl.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(gl.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(gl.SCRIPT_STARTED,e)}onPaused(e){return this.on(gl.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(gl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(gl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
gl.SCRIPT_FAILED,e)}onFinished(e){return this.on(gl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(gl.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),wc.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=hl.FINISHED,this._observer.hasCallbacks(
gl.SCRIPT_FINISHED)&&this._observer.triggerEvent(gl.SCRIPT_FINISHED,this)):(this._state=hl.FAILED,
this._observer.hasCallbacks(gl.SCRIPT_FAILED)&&this._observer.triggerEvent(gl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(gl.SCRIPT_CHANGED)&&this._observer.triggerEvent(gl.SCRIPT_CHANGED,this)}}l(bc,"Event",gl),l(
bc,"State",hl);class Ic{static toString(...e){return Ui(e,e=>ya(e)?"null":`${e}`).join("")}static processVariables(n,i,o
,s,a=void 0){return X(n)?Ui(n,e=>Ic.processVariables(e,i,o,s,a)):z(n)?zo(P(n),(e,t)=>{var r=n[t]
;return e[`${Ic.processVariables(t,i,o,s,a)}`]=Ic.processVariables(r,i,o,s,a),e},{}):p(n)?Ic.processVariablesInString(n,
i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=Tt(r)?r:e=>Zn(r,e,o),Ja(t,n)&&qa(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=fa(e),Ic.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=fa(
t.substr(a,l-a)),h=(Ic.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}(
zl=Tl={}).STRINGIFY="stringify",zl.PARSE="parse";const Dc=Qu.createLogger("JsonController");(zl=Sl={}
).JSON_STARTED="JsonController:scriptStarted",zl.JSON_PAUSED="JsonController:scriptPaused",
zl.JSON_RESUMED="JsonController:scriptResumed",zl.JSON_CANCELLED="JsonController:scriptCancelled",
zl.JSON_FAILED="JsonController:scriptFailed",zl.JSON_FINISHED="JsonController:scriptFinished",
zl.JSON_CHANGED="JsonController:scriptChanged";class Oc{constructor(e,t,r,n=Tl.STRINGIFY,i=void 0){if(l(this,"_context",
void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,
"_output",void 0),l(this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,
"_compiledOutput",void 0),l(this,"_errorString",void 0),!x(t))throw new TypeError(`JSON name invalid: ${t}`);if(!p(n)
)throw new TypeError(`JSON#${t} must have a valid string: ${n}`);if(!K(r))throw new TypeError(
`JSON#${t} must have a valid input property: ${JSON.stringify(r)}`);if(!p(i))throw new TypeError(
`JSON#${t} must have a valid output property: ${JSON.stringify(i)}`);this._context=e,this._state=hl.CONSTRUCTED,
this._name=t,this._input=r,this._action=null!=n?n:Tl.STRINGIFY,this._output=i,this._observer=new Sc(
`JsonController#${t}`),this._compiledAction=void 0,this._compiledInput=void 0,this._compiledOutput=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JsonController#${this._name}`}getStateDTO(){return{
type:_l.JSON_STEP,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(this._state){
case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}
isStarted(){switch(this._state){case hl.STARTED:case hl.PAUSED:return!0;case hl.CONSTRUCTED:case hl.CANCELLED:
case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){switch(this._state){case hl.PAUSED:return!0;case hl.CONSTRUCTED:
case hl.STARTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isFinished(){switch(this._state){
case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!0;case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}
isSuccessful(){switch(this._state){case hl.FINISHED:return!0;case hl.FAILED:case hl.CANCELLED:case hl.CONSTRUCTED:
case hl.STARTED:case hl.PAUSED:return!1}}isCancelled(){switch(this._state){case hl.CANCELLED:return!0;case hl.FINISHED:
case hl.FAILED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isFailed(){switch(this._state){
case hl.FAILED:return!0;case hl.CANCELLED:case hl.FINISHED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}
start(){var t,r,n;try{if(this._state!==hl.CONSTRUCTED)throw new Error(`JSON#${this._name} was already started`);if(
this._state=hl.STARTED,t=this._context.compileModel(this._action),!function(){switch(t){case Tl.STRINGIFY:case Tl.PARSE:
return 1}}())throw new Error(`JSON#${this._name} failed to compile the action property: ${Ic.toString(this._action)}`)
;if(this._compiledAction=t,r=this._context.compileModel(this._input),t===Tl.STRINGIFY){if(!K(r))throw new Error(
`JSON#${this._name} failed to compile the input property as JSON: ${Ic.toString(this._input)}`);this._compiledInput=r
}else{if(!p(r))throw new Error(`JSON#${this._name} failed to compile the input property as string: ${Ic.toString(
this._input)}`);this._compiledInput=r}if(!p(n=this._output?this._context.compileModel(this._output):void 0)&&!v(n)
)throw new Error(`JSON#${this._name} failed to compile the output property: ${Ic.toString(this._output)}`)
;this._compiledOutput=n,Dc.info(`Starting JSON action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Sl.JSON_STARTED)&&this._observer.triggerEvent(Sl.JSON_STARTED,this),
this._observer.hasCallbacks(Sl.JSON_CHANGED)&&this._observer.triggerEvent(Sl.JSON_CHANGED,this);let e=void 0;switch(
this._compiledAction){case Tl.STRINGIFY:if(e=JSON.stringify(r),!p(e))throw new TypeError(
`Failed to stringify JSON: ${e}`);break;case Tl.PARSE:if(!p(r))throw new TypeError("Value was not string");e=JSON.parse(
r);break;default:throw new TypeError(`Unknown action: ${this._compiledAction}`)}void 0!==this._compiledOutput?(Dc.info(
`Saving output as variable "${this._compiledOutput}": `,e),this._context.setVariable(this._compiledOutput,e)):Dc.info(
"No output target configured for result: ",e),this._closeAction(void 0)}catch(e){Dc.error("Error: ",e),
this._errorString=`${e}`,this._closeAction(e)}return this}pause(){throw new Error(`JSON#${this._name} was not running`)}
resume(){throw new Error(`JSON#${this._name} was not paused`)}stop(){throw new Error(
`JSON#${this._name} was not started`)}onStarted(e){return this.on(Sl.JSON_STARTED,e)}onPaused(e){return this.on(
Sl.JSON_PAUSED,e)}onResumed(e){return this.on(Sl.JSON_RESUMED,e)}onCancelled(e){return this.on(Sl.JSON_CANCELLED,e)}
onFailed(e){return this.on(Sl.JSON_FAILED,e)}onFinished(e){return this.on(Sl.JSON_FINISHED,e)}onChanged(e){
return this.on(Sl.JSON_CHANGED,e)}getErrorString(){var e;return null!==(e=this._errorString)&&void 0!==e?e:""}
getOutputString(){return""}_closeAction(e){void 0===e?(this._state=hl.FINISHED,this._observer.hasCallbacks(
Sl.JSON_FINISHED)&&this._observer.triggerEvent(Sl.JSON_FINISHED,this)):(Dc.error("Action failed: ",e),
this._state=hl.FAILED,this._observer.hasCallbacks(Sl.JSON_FAILED)&&this._observer.triggerEvent(Sl.JSON_FAILED,this)),
this._observer.hasCallbacks(Sl.JSON_CHANGED)&&this._observer.triggerEvent(Sl.JSON_CHANGED,this)}}l(Oc,"Event",Sl),l(Oc,
"State",hl),(zl=Al={}).STRINGIFY="stringify",zl.PARSE="parse";const Lc=Qu.createLogger("CsvController");(zl=Nl={}
).CSV_STARTED="CsvController:scriptStarted",zl.CSV_PAUSED="CsvController:scriptPaused",
zl.CSV_RESUMED="CsvController:scriptResumed",zl.CSV_CANCELLED="CsvController:scriptCancelled",
zl.CSV_FAILED="CsvController:scriptFailed",zl.CSV_FINISHED="CsvController:scriptFinished",
zl.CSV_CHANGED="CsvController:scriptChanged";class Pc{constructor(e,t,r,n=Al.STRINGIFY,i=void 0){if(l(this,"_context",
void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,
"_output",void 0),l(this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,
"_compiledOutput",void 0),l(this,"_errorString",void 0),!x(t))throw new TypeError(`CSV name invalid: ${t}`);if(!p(n)
)throw new TypeError(`CSV#${t} must have a valid string: ${n}`);if(!K(r))throw new TypeError(
`CSV#${t} must have a valid input property: ${JSON.stringify(r)}`);if(!p(i))throw new TypeError(
`CSV#${t} must have a valid output property: ${JSON.stringify(i)}`);this._context=e,this._state=hl.CONSTRUCTED,
this._name=t,this._input=r,this._action=null!=n?n:Al.STRINGIFY,this._output=i,this._observer=new Sc(`CsvController#${t}`
),this._compiledAction=void 0,this._compiledInput=void 0,this._compiledOutput=void 0}destroy(){this._observer.destroy(),
this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){
return this._state}getName(){return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`CsvController#${this._name}`}getStateDTO(){return{type:_l.CSV_STEP,state:this._state,name:this._name}}toJSON(){
return this.getStateDTO()}isRunning(){switch(this._state){case hl.STARTED:return!0;case hl.PAUSED:case hl.CONSTRUCTED:
case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isStarted(){switch(this._state){case hl.STARTED:
case hl.PAUSED:return!0;case hl.CONSTRUCTED:case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!1}}isPaused(){
switch(this._state){case hl.PAUSED:return!0;case hl.CONSTRUCTED:case hl.STARTED:case hl.CANCELLED:case hl.FINISHED:
case hl.FAILED:return!1}}isFinished(){switch(this._state){case hl.CANCELLED:case hl.FINISHED:case hl.FAILED:return!0
;case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isSuccessful(){switch(this._state){case hl.FINISHED:
return!0;case hl.FAILED:case hl.CANCELLED:case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}isCancelled(){
switch(this._state){case hl.CANCELLED:return!0;case hl.FINISHED:case hl.FAILED:case hl.CONSTRUCTED:case hl.STARTED:
case hl.PAUSED:return!1}}isFailed(){switch(this._state){case hl.FAILED:return!0;case hl.CANCELLED:case hl.FINISHED:
case hl.CONSTRUCTED:case hl.STARTED:case hl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==hl.CONSTRUCTED
)throw new Error(`CSV#${this._name} was already started`);if(this._state=hl.STARTED,t=this._context.compileModel(
this._action),!function(){switch(t){case Al.STRINGIFY:case Al.PARSE:return 1}}())throw new Error(
`CSV#${this._name} failed to compile the action property: ${Ic.toString(this._action)}`);if(this._compiledAction=t,
r=this._context.compileModel(this._input),t===Al.STRINGIFY){if(!he(r))throw new Error(
`CSV#${this._name} failed to compile the input property as CSV: ${Ic.toString(this._input)}`);this._compiledInput=r
}else{if(!p(r))throw new Error(`CSV#${this._name} failed to compile the input property as string: ${Ic.toString(
this._input)}`);this._compiledInput=r}if(!p(n=this._output?this._context.compileModel(this._output):void 0)&&!v(n)
)throw new Error(`CSV#${this._name} failed to compile the output property: ${Ic.toString(this._output)}`)
;this._compiledOutput=n,Lc.info(`Starting CSV action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Nl.CSV_STARTED)&&this._observer.triggerEvent(Nl.CSV_STARTED,this),
this._observer.hasCallbacks(Nl.CSV_CHANGED)&&this._observer.triggerEvent(Nl.CSV_CHANGED,this);let e=void 0;switch(
this._compiledAction){case Al.STRINGIFY:if(!he(r))throw new TypeError("Value was not csv");if(e=Ui(r,e=>{return[e,t,r]=[
e,",",'"'],Ui(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r)?`${r}${e.split(r).join(r+r
)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join("\n"),!p(e))throw new TypeError(`Failed to stringify CSV: ${e}`);break
;case Al.PARSE:if(!p(r))throw new TypeError("Value was not string");if(e=he(i=r)?i:(p(i)||(i=`${i}`),Ui(aa(i,"\n"),
e=>function(t){if(1!==",".length)throw new TypeError("The separator must be exactly 1 character long: ,");if(
1!=='"'.length)throw new TypeError('The quote must be exactly 1 character long: "');if(de(t))return t;p(t)||(t=`${t}`)
;let r=[],n=0;for(;n<t.length;){var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n
);2<=e.length&&Ja(e,'"')&&qa(e,'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!he(e)
)throw new TypeError(`Result was not csv: ${e}`);break;default:throw new TypeError(
`Unknown action: ${this._compiledAction}`)}void 0!==this._compiledOutput?(Lc.info(
`Saving output as variable "${this._compiledOutput}": `,e),this._context.setVariable(this._compiledOutput,e)):Lc.info(
"No output target configured for result: ",e),this._closeAction(void 0)}catch(e){Lc.error("Error: ",e),
this._errorString=`${e}`,this._closeAction(e)}return this}pause(){throw new Error(`CSV#${this._name} was not running`)}
resume(){throw new Error(`CSV#${this._name} was not paused`)}stop(){throw new Error(`CSV#${this._name} was not started`)
}onStarted(e){return this.on(Nl.CSV_STARTED,e)}onPaused(e){return this.on(Nl.CSV_PAUSED,e)}onResumed(e){return this.on(
Nl.CSV_RESUMED,e)}onCancelled(e){return this.on(Nl.CSV_CANCELLED,e)}onFailed(e){return this.on(Nl.CSV_FAILED,e)}
onFinished(e){return this.on(Nl.CSV_FINISHED,e)}onChanged(e){return this.on(Nl.CSV_CHANGED,e)}getErrorString(){var e
;return null!==(e=this._errorString)&&void 0!==e?e:""}getOutputString(){return""}_closeAction(e){void 0===e?(
this._state=hl.FINISHED,this._observer.hasCallbacks(Nl.CSV_FINISHED)&&this._observer.triggerEvent(Nl.CSV_FINISHED,this)
):(Lc.error("Action failed: ",e),this._state=hl.FAILED,this._observer.hasCallbacks(Nl.CSV_FAILED
)&&this._observer.triggerEvent(Nl.CSV_FAILED,this)),this._observer.hasCallbacks(Nl.CSV_CHANGED
)&&this._observer.triggerEvent(Nl.CSV_CHANGED,this)}}l(Pc,"Event",Nl),l(Pc,"State",hl);const Uc=Qu.createLogger(
"PipelineRunner");class Fc{static createStepController(e,t){if(ee(e))return new Oc(t,e.name,e.json,e.action,e.output)
;if(te(e))return new Pc(t,e.name,e.csv,e.action,e.output);if(Z(e))return new bc(t,e.name,e.command,e.args,e.env)
;throw new TypeError(`Unknown step type: ${e.name}`)}static createJobController(e,t){return new Nc(t,e.name,Ui(e.steps,
e=>this.createStepController(e,t)))}static createStageController(e,t){return new Cc(t,e.name,Ui(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new yc(t,e.name,Ui(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return se(e)?(Uc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):oe(e)?(Uc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):ne(e)?(
Uc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Uc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Uc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Uc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Uc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}const $c=Qu.createLogger("PipelineContext")
;class kc{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",void 0),l(this,"_parameters",void 0),l(this,
"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,"_lookupVariable",void 0),l(this,"_variables",void 0),
this._system=e,this._variables=null!=r?r:{},this._parameters=t,this._variablePrefix=n,this._variableSuffix=i,
this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){return this._system}compileModel(e){return $c.debug(
"Compiling model using: ",e,this._variablePrefix,this._variableSuffix),e=Ic.processVariables(e,this._lookupVariable,
this._variablePrefix,this._variableSuffix),$c.debug("Compiled as: ",e),e}getParametersArray(){var e;return null!==(
e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){return this._variables}getVariable(e){return Zn(this._variables
,e)}_onLookupVariable(e){var t=this.getVariable(e);return $c.debug(`lookup variable "${e}": `,t,this._variables),t}
setVariable(e,t){return W(this._variables)||(this._variables={}),co(this._variables,e,t),$c.debug(`setVariable "${e}": `
,t,this._variables),this}toString(){return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",
variables:function(e){try{return JSON.parse(e)}catch(e){return}}(JSON.stringify(this._variables))}}}
const Mc=Qu.createLogger("runHttpResource"),Gc=Qu.createLogger("runLocalResource");(zl=ml={}
).M_ROOM_POWER_LEVELS="m.room.power_levels",zl.M_ROOM_JOIN_RULES="m.room.join_rules",
zl.M_ROOM_MEMBERSHIP="m.room.membership",zl.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
zl.M_ROOM_GUEST_ACCESS="m.room.guest_access",zl.M_ROOM_CREATE="m.room.create",zl.M_FEDERATE="m.federate",
zl.M_ROOM_MEMBER="m.room.member",zl.M_PUSH_RULES="m.push_rules",zl.M_PRESENCE="m.presence",zl.M_SPACE="m.space",
zl.M_LOGIN_PASSWORD="m.login.password",zl.M_LOGIN_TOKEN="m.login.token",zl.M_ID_USER="m.id.user",
zl.FI_NOR_DELETED="fi.nor.deleted",zl.FI_NOR_FORM_DTO="fi.nor.form_dto",zl.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,zl.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",zl.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
zl.FI_NOR_AGENT_DTO="fi.nor.dto.agent",zl.FI_NOR_PIPELINE="fi.nor.pipeline",
zl.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Cl=ml,(zl=Rl=Rl||{})[zl.UNAUTHENTICATED=0]="UNAUTHENTICATED",
zl[zl.AUTHENTICATING=1]="AUTHENTICATING",zl[zl.AUTHENTICATED=2]="AUTHENTICATED",
zl[zl.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
zl[zl.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(zl=yl={}).M_USER_IN_USE="M_USER_IN_USE",
zl.M_INVALID_USERNAME="M_INVALID_USERNAME",zl.M_EXCLUSIVE="M_EXCLUSIVE",zl.M_FORBIDDEN="M_FORBIDDEN",wl=yl
;const jc=Qu.createLogger("SimpleMatrixClient");(bl=bl||{}).EVENT="SimpleMatrixClient:event";class Hc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?Rl.AUTHENTICATED:Rl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Sc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{jc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
jc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(m(a=s=await _c.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${Qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw jc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return jc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(jc.debug(
"Could not register user: ",e),!(e instanceof oc))throw new oc(cl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new oc(cl.Unauthorized):403===s?new oc(cl.Forbidden
):429===s?new oc(429):new oc(cl.InternalServerError,"Failed to register user");if(!Ye(s=null==e?void 0:e.getBody())
)throw new oc(cl.InternalServerError,"Failed to register user");switch(s.errcode){case wl.M_USER_IN_USE:throw new oc(
cl.Conflict,"User already exists");case wl.M_INVALID_USERNAME:throw new oc(cl.BadRequest,"Username invalid")
;case wl.M_EXCLUSIVE:throw new oc(cl.Conflict,"User name conflicts with exclusive namespace");default:throw new oc(
cl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
jc.debug("whoami: Fetching account whoami... ",r),n=await _c.getJson(r,{Authorization:`Bearer ${t}`}),jc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,jc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void jc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(jc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await _c.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw jc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
jc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(m(
n=r=await _c.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw jc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return jc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(jc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof oc))throw new oc(cl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new oc(cl.Unauthorized
):403===r?new oc(cl.Forbidden):429===r?new oc(429):new oc(cl.InternalServerError,"Failed to register user");if(!Ye(
r=null==e?void 0:e.getBody()))throw new oc(cl.InternalServerError,"Failed to register user");switch(r.errcode){
case wl.M_USER_IN_USE:throw new oc(cl.Conflict,"User already exists");case wl.M_INVALID_USERNAME:throw new oc(
cl.BadRequest,"Username invalid");case wl.M_EXCLUSIVE:throw new oc(cl.Conflict,
"User name conflicts with exclusive namespace");default:throw new oc(cl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:ml.M_LOGIN_PASSWORD,identifier:{type:ml.M_ID_USER,user:r},
password:n},jc.debug("Sending login with userId:",r),!(m(h=o=await _c.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||m(_=h)&&I(_,["m.homeserver","m.identity_server"])&&m(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||m(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw jc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");jc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Hc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw jc.debug(
"Could not login: ",e),new oc(cl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(m(n=r=await _c.getJson(this._resolveHomeServerUrl(`/directory/room/${Qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw jc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return jc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof oc&&e.getStatusCode()===cl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(m(
t=e=await _c.getJson(this._resolveHomeServerUrl(`/rooms/${Qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&C(null==t?void 0:t.joined,pe,Xe)))throw jc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return jc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!W(i=await _c.getJson(this._resolveHomeServerUrl(
`/rooms/${Qe(e)}/state/${Qe(t)}/${Qe(r)}`),{Authorization:`Bearer ${n}`})))throw jc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return jc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof oc&&e.getStatusCode()===cl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(m(s=o=await _c.putJson(this._resolveHomeServerUrl(
`/rooms/${Qe(e)}/state/${Qe(t)}/${Qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw jc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return jc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw jc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await _c.postJson(this._resolveHomeServerUrl(`/rooms/${Qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),jc.debug("forgetRoom: received: ",r)}catch(e){throw jc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await _c.postJson(this._resolveHomeServerUrl(`/rooms/${Qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),jc.debug("leaveRoom: received: ",r)}catch(e){throw jc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!_e(e))throw new TypeError(
`roomId invalid: ${e}`);if(!pe(t))throw new TypeError(`userId invalid: ${t}`);if(jc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await _c.postJson(
this._resolveHomeServerUrl(`/rooms/${Qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),jc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw jc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},jc.debug("Sending message with body:",t
),r=await _c.postJson(this._resolveHomeServerUrl(`/rooms/${Qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,jc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(jc.debug("Creating room with body:",e),!(m(
e=t=await _c.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&_e(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw jc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return jc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(jc.debug(
`Joining to room ${t} with body:`,e),!(m(i=n=await _c.postJson(this._resolveHomeServerUrl(`/rooms/${Qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&_e(null==i?void 0:i.room_id)))throw jc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return jc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw jc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(jc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!W(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=Za(Ui(P(s),e=>{var t=s[e]
;return`${Qe(e)}=${Qe(t)}`}),"&"),!(m(t=e=await _c.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||xe(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||Ve(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||Le(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||We(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||qe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Ke(
null==t?void 0:t.device_one_time_keys_count))))throw jc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${ze(e)}`);return e}isAlreadyInTheRoom(
e){if(Ye(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===wl.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Hs(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(bl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)jc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,jc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(jc.info("Initial sync request started"),
this._state!==Rl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Rl.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),jc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:jc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),jc.info("Timer started..."),this._state=Rl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:jc.error("No next_batch in the response: ",t),r=Ao(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Oe(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),Hs(n,e=>{var t,r=(r=s[e],Ao([],
null!=r&&r.state?Ne(null==r?void 0:r.state):[],null!=r&&r.timeline?we(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Ao([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Oe(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),Hs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),Hs(o,e=>{var t=l[e],t=Ao([],Ne(
null==t?void 0:t.state),we(null==t?void 0:t.timeline),Oe(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(Hc,
"Event",bl),(zl=Xl=Xl||{}).PRIVATE_CHAT="private_chat",zl.PUBLIC_CHAT="public_chat",
zl.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Il=Xl,(Xl=Yl=Yl||{}).INVITED="invited",Xl.JOINED="joined",
Xl.SHARED="shared",Xl.WORLD_READABLE="world_readable",Dl=Yl,(Yl=Ql=Ql||{}).PUBLIC="public",Yl.KNOCK="knock",
Yl.INVITE="invite",Yl.PRIVATE="private",Yl.RESTRICTED="restricted",Ol=Ql,(Ql=Yl={}).CAN_JOIN="can_join",
Ql.FORBIDDEN="forbidden",Ll=Yl;const Jc=Qu.createLogger("MatrixCrudRepository");class xc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:Cl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Jc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Jc.debug("joinedRooms = ",i),t=P(t),Jc.debug(
"invitedRooms = ",t),(t=Fs(t,e=>!i.includes(e))).length){Jc.debug("Joining to rooms = ",t);let r=0;if(await zo(t,async(e
,t)=>{await e;try{Jc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Jc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Jc.debug(
"Fetching results again after joining"),this.getAll()}return zo(i,(e,i)=>{var t=n[i],r=Fs(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Fa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Ao(e,Ui(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return Ui(Fs(e,
e=>Zn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Jc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Jc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Jc.debug(
"createItem: serviceAccountId = ",n),i=Fs(cs(Ao(n?[n]:[],t||[])),e=>e!==o),Jc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Jc.debug("createItem: allowedGroups = ",n),t={[Cl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:Cl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Dl.SHARED}},{type:Cl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Ll.FORBIDDEN}}]
;void 0!==n&&s.push({type:Cl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Ol.RESTRICTED,allow:Ui(n,e=>({
type:Cl.M_ROOM_MEMBERSHIP,room_id:e}))}}),Jc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Jc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Hs(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Il.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Jc.debug(
"createItem: response = ",t),t=t.room_id,Jc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Jc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Jc.debug(
"response = ",JSON.stringify(n,null,2)),!W(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=Ui(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!W(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new oc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Jc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new oc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Jc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Jc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Jc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof oc&&[401,403,404].includes(e.getStatusCode()))throw e;throw Jc.error(
`Error in deleteById(${t}): `,e),new oc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await zo(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Jc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const Bc=Qu.createLogger("runMatrixResource"
),Vc=Qu.createLogger("NodeSystemProcess");class Wc{constructor(e,t,r,n=!0){l(this,"_command",void 0),l(this,"_args",
void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,"_stderrCallback",void 0),l(this,"_closeCallback",
void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,"_printToParentProcess",void 0),l(this,
"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",void 0),this._observer=new Sc(
"NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,this._printToParentProcess=n,
this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this),
this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=vu.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(fl.ON_EXIT
)?this._observer.triggerEvent(fl.ON_EXIT,this):Vc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(Wc,"Event",fl);class qc{constructor(){}
toString(){return"NodeSystem"}toJSON(){return{type:"NodeSystem"}}createProcess(e,t,r){return new Wc(e,t,r)}}
const Kc=Qu.createLogger("main");Qu.setLogLevel(Fu),async function(t=[]){var r,n,i,o;try{if(Kc.debug(
`Loglevel ${Qu.getLogLevelString()}`),r=Wu,t.shift(),!t.shift())return console.log(H(r)),al.ARGUMENT_PARSE_ERROR;if(
0===t.length)return console.log(H(r)),al.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){switch(function(){switch(n){
case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:
return console.log(H(r)),al.OK;case 1:return console.log(function(e){const t=Fs([ju?"LOCAL":"",Hu?"HTTP":"",
Ju?"MATRIX":"",Bu?"TEST":"",Vu?"DEV":""],e=>!!e);return`${e} v${ku} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${ku}'
  BUILD_NODE_ENV              = '${Mu}'
  BUILD_DATE                  = '${Gu}'
  BUILD_WITH_LOCAL_RESOURCES  = '${ju}'
  BUILD_WITH_HTTP_RESOURCES   = '${Hu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Ju}'
`}(r)),al.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=tc.parseRunnerResource(n)))return Kc.error(
`Unsupported argument: ${n}`),console.log(H(r)),al.UNKNOWN_ARGUMENT;if((o=await async function(e,t){switch(t.type){
case nl.HTTP:return Hu?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(r.authentication)&&(
c.Authorization=`Bearer ${r.authentication.access_token}`),$(r.authentication)&&(n=r.authentication.username,
i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64")}`)),void 0===(
o=await _c.getJson(r.url,c)))return Mc.error(`Failed to load URL "${r.url}": `,o),al.RESOURCE_LOAD_FAILED;if(void 0===(
s=ae(o)))return Mc.error(`Model from URL "${r.url}" was not valid: `,o),al.RESOURCE_MODEL_INVALID
;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new kc(t,a,l,zu,Xu);let e=Fc.createController(s,u)
;return Mc.info(`Running ${e.getName()} from ${r.url}`),await Fc.startAndWaitUntilFinished(e),Mc.info(
`Successfully finished ${e.getName()} from ${r.url}`),al.OK}catch(e){return Mc.error("Error: ",e),
al.HTTP_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;case nl.LOCAL:return ju?async function(t,r){var n,i,o,s,a,l;try{if(
n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{du.readFile(i,o,(e,t)=>{e?n(e
):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(o=ae(i=JSON.parse(n)))
)return Gc.warn("Model was not valid: ",i),al.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters,
a=null==o?void 0:o.variables,l=new kc(t,s,a,zu,Xu);let e=Fc.createController(o,l);return Gc.info(`Running ${e.getName(
)} from ${r.path}`),await Fc.startAndWaitUntilFinished(e),Gc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,al.OK}catch(e){return Gc.error("Error: ",e),al.LOCAL_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;case nl.MATRIX:
return Ju?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,N,m,C,R,y;try{Bc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new Hc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!$(g)
)return al.UNKNOWN_AUTHENTICATION_TYPE;e=new Hc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return Bc.error("Could not detect agent user ID"),al.UNKNOWN_AGENT_ID
;Bc.info(`Agent user ID: ${t}`);const w=new xc(e,Cl.FI_NOR_AGENT_DTO);if(0===(y=await w.getAll()).length
)return Bc.debug("Detected no pools available."),al.OK;T=(1===y.length?(Bc.debug(
"Detected single pool available. Picking it."),y[0]):(Bc.debug(
`Detected ${y.length} pools available. Picking one by random.`),y[Math.floor(Math.random()*y.length)])).id,Bc.info(
`Pool ID: ${T}`);const b=new xc(e,Cl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Cl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),Bc.debug("runList = ",S);let r;if(0===S.length)return Bc.debug("Detected no work available."),al.OK
;r=1===S.length?(Bc.debug("Detected single work available. Picking it."),S[0]):(Bc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return Bc.warn(`Work ID was already running: ${I}`),Bc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),Bc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),al.CONFLICT;if(Bc.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return Bc.warn(
"The work item disappeared while we were selecting it."),al.WORK_CANCELLED;if(I!==r.id)return Bc.error(
`The work item ID conflict: ${I} !== ${r.id}`),al.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return Bc.error(""),al.CONFLICT;if(Bc.debug(
"Work item secured to us! We can start the job."),void 0===(N=ae(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return Bc.warn("Work item did not contain correct pipeline model: ",r),
al.RESOURCE_MODEL_INVALID;m=null==N?void 0:N.parameters,C=null==N?void 0:N.variables,R=new kc(i,m,C,zu,Xu)
;let n=Fc.createController(N,R);await Ze(e,b,I,r,n);const D=n.onChanged(()=>{Ze(e,b,I,r,n).catch(e=>{Bc.error(
"Failed to save controller state: ",e)})});try{await Fc.startAndWaitUntilFinished(n)}finally{D(),await Ze(e,b,I,r,n)}
return Bc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),Bc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),al.OK}catch(e){return Bc.error("Error: ",e),
al.MATRIX_RESOURCE_FAILED}}(e,t):al.UNBUILD_FEATURE;default:return al.UNKNOWN_RESOURCE_TYPE}}(new qc,i))!==al.OK
)return o===al.UNKNOWN_RESOURCE_TYPE?(Kc.error(`Error NorPP${o}: ${j(o)}: Resource type was unknown: ${i.type}`),
console.log(H(r)),al.UNKNOWN_RESOURCE_TYPE):(function(e){if(Fa(e)&&!(e<0||255<e)){if(
sl.FATAL_SIGNAL_RANGE_START<=e&&e<=sl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case sl.OK:case sl.GENERAL_ERRORS:
case sl.MISUSE_OF_SHELL_BUILTINS:case sl.ARGUMENT_PARSE_ERROR:case sl.UNKNOWN_ARGUMENT:case sl.UNKNOWN_RESOURCE_TYPE:
case sl.UNKNOWN_AUTHENTICATION_TYPE:case sl.RESOURCE_LOAD_FAILED:case sl.RESOURCE_MODEL_INVALID:
case sl.LOCAL_RESOURCE_FAILED:case sl.HTTP_RESOURCE_FAILED:case sl.MATRIX_RESOURCE_FAILED:case sl.UNIMPLEMENTED_FEATURE:
case sl.UNBUILD_FEATURE:case sl.FATAL_ERROR:case sl.USAGE:case sl.DATAERR:case sl.NOINPUT:case sl.NOUSER:case sl.NOHOST:
case sl.UNAVAILABLE:case sl.SOFTWARE:case sl.OSERR:case sl.OSFILE:case sl.CANTCREAT:case sl.IOERR:case sl.TEMPFAIL:
case sl.PROTOCOL:case sl.NOPERM:case sl.CONFIG:case sl.COMMAND_INVOKED_CANNOT_EXECUTE:case sl.COMMAND_NOT_FOUND:
case sl.INVALID_ARGUMENT_TO_EXIT:case sl.FATAL_SIGNAL_RANGE_START:case sl.FATAL_SIGNAL_RANGE_END:
case sl.EXIT_STATUS_OUT_OF_RANGE:case sl.UNKNOWN_AGENT_ID:case sl.WORK_CANCELLED:case sl.CONFLICT:return 1;default:
return}}}(o)?Kc.error(`Error EX-${o}: ${j(o)}: for ${U(i.type)} resource ${n}`):Kc.error(
`Error: Exit status ${o}: for ${U(i.type)} resource ${n}`),o)}while(1<=t.length);return al.OK}catch(e){return Kc.error(
"Fatal error: ",e),al.FATAL_ERROR}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),
process.exit(1)});
