#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function S(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){a(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new $t(e),this.size=e.size}function u(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new kt;++t<r;)this.add(e[t])}function l(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Cn);return o.cache=new(l.Cache||wn),o}
function v(e){return void 0===e}function c(e){return zt(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!zt(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||A(e
,t))}function h(e){return v(e)||na(e)}function p(e){return Zs(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&A(e,p)}function E(e){return oa(e)}function T(e){return v(e)||oa(e)}function g(e,t){return Fi(e,t)}
function A(e,t){return Bi(e,t)}function R(e,t){return ot(e)&&A(Ea(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!R(e,r))&&(t=void 0!==t?t:p,ot(e)&&A(P(e),t))}function y(e){return!!ot(e)&&!(e instanceof Date)&&!ut(e)&&!c(
e)&&N(e,p,void 0)}function w(e,t=p,r=void 0){return ot(e)&&!(e instanceof Date)&&!ut(e)&&!c(e)&&N(e,t,r)}function C(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!ot(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(ut(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||R(e,e=>r(e)))throw e=Ro(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=Ea(e),n=So(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function m(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return C(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function b(...e){return t=>g(e,e=>e(t))}function I(e){return ot(e)}function D(e,t){return I(e
)&&0===(r=t,_s(P(e),e=>!r.includes(e)).length);var r}function O(e){if(void 0!==e&&""!==e)return Ks(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=yi(e,(e,t)=>t);return _s(r,e=>t(e))}return I(e)?(e=Reflect.ownKeys(e),_s(e,e=>t(e))):[]}function U(e){switch(e
){case ga.HTTP:return"http";case ga.LOCAL:return"local";case ga.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function F(e){return y(e)&&function(){switch(null==e?void 0:e.type){
case Sa.NONE:case Sa.BASIC_AUTH:case Sa.BEARER_AUTH:return 1;default:return}}()}function $(e){return y(e)&&D(e,["type",
"username","password"])&&(null==e?void 0:e.type)===Ra.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if($(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:Ra.BASIC_AUTH,username:r,password:n
}}function M(e){return y(e)&&D(e,["type","access_token"])&&(null==e?void 0:e.type)===Ra.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function j(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return j(r,n)}return{
type:Ra.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:Ra.BEARER_AUTH,access_token:n}}function G(e){if(Na.FATAL_SIGNAL_RANGE_START<=e&&e<=Na.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-Na.FATAL_SIGNAL_RANGE_START}`;switch(e){case Na.OK:return"OK";case Na.GENERAL_ERRORS:
return"GENERAL_ERRORS";case Na.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case Na.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case Na.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case Na.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case Na.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case Na.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case Na.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case Na.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case Na.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case Na.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case Na.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case Na.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case Na.FATAL_ERROR:return"FATAL_ERROR"
;case Na.USAGE:return"USAGE";case Na.DATAERR:return"DATAERR";case Na.NOINPUT:return"NOINPUT";case Na.NOUSER:
return"NOUSER";case Na.NOHOST:return"NOHOST";case Na.UNAVAILABLE:return"UNAVAILABLE";case Na.SOFTWARE:return"SOFTWARE"
;case Na.OSERR:return"OSERR";case Na.OSFILE:return"OSFILE";case Na.CANTCREAT:return"CANTCREAT";case Na.IOERR:
return"IOERR";case Na.TEMPFAIL:return"TEMPFAIL";case Na.PROTOCOL:return"PROTOCOL";case Na.NOPERM:return"NOPERM"
;case Na.CONFIG:return"CONFIG";case Na.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case Na.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case Na.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case Na.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case Na.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case Na.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case Na.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case Na.WORK_CANCELLED:return"WORK_CANCELLED";case Na.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function H(e){return Yu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${zu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Xu?`

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
`}function B(e){if(na(e))switch(e){case wa.OPTIONS:return"options";case wa.GET:return"get";case wa.POST:return"post"
;case wa.PUT:return"put";case wa.DELETE:return"delete";case wa.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!Zs(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function x(e){return y(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||w(r,n,i))&&D(e,["name","command","args","env"]);var t,r,n,i}function W(e){return!!x(e
)||!(!y(e)||!J(null==e?void 0:e.name))}function q(e){return y(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,W,1
)&&D(e,["name","steps"])}function K(e){if(q(e))return e}function V(e){return y(e)&&J(null==e?void 0:e.name)&&d(
null==e?void 0:e.jobs,q,1)&&D(e,["name","jobs"])}function z(e){return y(e)&&J(null==e?void 0:e.name)&&d(
null==e?void 0:e.stages,V,1)&&D(e,["name","stages"])}function X(e){var t;return null!==(t=null!==(t=null!==(t=function(e
){if(z(e))return e}(e))&&void 0!==t?t:function(e){if(V(e))return e}(e))&&void 0!==t?t:K(e))&&void 0!==t?t:null!==(
e=function(e){if(x(e))return e}(t=e))&&void 0!==e?e:K(t)}function Y(e){return I(e)&&ut(null==e?void 0:e.getName)&&ut(
null==e?void 0:e.isRunning)&&ut(null==e?void 0:e.isStarted)&&ut(null==e?void 0:e.isPaused)&&ut(
null==e?void 0:e.isCancelled)&&ut(null==e?void 0:e.isFinished)&&ut(null==e?void 0:e.isFailed)&&ut(
null==e?void 0:e.isSuccessful)&&ut(null==e?void 0:e.start)&&ut(null==e?void 0:e.pause)&&ut(null==e?void 0:e.resume)&&ut(
null==e?void 0:e.stop)&&ut(null==e?void 0:e.destroy)&&ut(null==e?void 0:e.toString)&&ut(null==e?void 0:e.toJSON)&&ut(
null==e?void 0:e.onStarted)&&ut(null==e?void 0:e.onPaused)&&ut(null==e?void 0:e.onResumed)&&ut(
null==e?void 0:e.onCancelled)&&ut(null==e?void 0:e.onFailed)&&ut(null==e?void 0:e.onFinished)&&ut(
null==e?void 0:e.onChanged)}function Q(e){return e instanceof Rl}function Z(e){return e instanceof yl}function ee(e){
return p(t=e)||na(t)||Ks(t)||Vs(t)||d(e,b(ee,v))||te(e);var t}function te(e){return y(e)&&N(e,p,b(ee,v))}function re(e){
return v(e)||te(e)}function ne(e){return p(e)&&!!e&&"!"===e[0]}function ie(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function oe(e){return y(e)&&D(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&T(e["m.joined_member_count"])&&T(e["m.invited_member_count"]);var t}function se(e){return p(e)&&!!e&&"@"===e[0]}
function ae(e){return y(e)&&D(e,["content","type","sender"])&&te(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(
v(null==e?void 0:e.sender)||se(null==e?void 0:e.sender))}function ue(e){return y(e)&&D(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&re(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||se(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||ae(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function le(e){try{return function(e){if(!y(e))throw new TypeError(
"Value was not regular object");if(!D(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!re(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!se(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!ae(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function ce(e){return y(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&te(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ue(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||te(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function de(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!te(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ue(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!te(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function he(e){return Zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function _e(e){
return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,ce)}function Ee(e){try{return function(e){if(!y(e)
)throw new TypeError("value was not object");if(!D(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,ce))throw e=Ro(null==e?void 0:e.events,e=>!ce(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${de(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function ve(e){return y(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&te(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&se(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ue(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function pe(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!te(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!se(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!ue(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${le(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function fe(e){return Zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Te(e){
return y(e)&&D(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,ve)&&Ks(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function ge(e){try{return function(e){if(!y(e))throw new TypeError(`value not object: ${e}`
);if(!D(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,ve)){var t=Ro(null==e?void 0:e.events,e=>!ve(e));throw new TypeError(
`Property "events" item was not correct: ${pe(t)}`)}if(!Ks(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Ae(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,ae)}function Se(e){
return Zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Re(e){return y(e)&&D(e,["events"])&&d(
null==e?void 0:e.events,ae)}function Ne(e){return y(e)&&D(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function ye(e){return y(e)&&D(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||oe(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||_e(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||Te(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Ae(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Re(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Ne(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function we(e){try{return function(e){if(!y(e))throw new TypeError(
`value was not object: ${e}`);if(!D(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!oe(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!_e(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ee(e)}`);if(
!v(null==e?void 0:e.timeline)&&!Te(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${ge(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Ae(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Re(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Ne(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Ce(e){return y(e)&&D(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&te(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||ue(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function me(e){try{return function(e){if(!y(e)
)throw new TypeError(`invalid: ${e}`);if(!D(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!te(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ue(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function be(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,
Ce)}function Ie(e){try{return function(e){if(!y(e))throw new TypeError(`value invalid: ${e}`);if(!D(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Ce))throw e=Ro(
null==e?void 0:e.events,e=>!Ce(e)),new TypeError(`Property "events" had invalid item: ${me(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function De(e){return y(e)&&D(e,["invite_state"])&&be(
null==e?void 0:e.invite_state)}function Oe(e){try{return function(e){if(!y(e))throw new TypeError(
`Value not object: ${e}`);if(!D(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!be(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Ie(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return y(e)&&D(e,[
"state","timeline","account_data"])&&_e(null==e?void 0:e.state)&&Te(null==e?void 0:e.timeline)&&Re(
null==e?void 0:e.account_data)}function Pe(e){return y(e)&&D(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||w(
null==e?void 0:e.join,ne,ye))&&(v(null==e?void 0:e.invite)||w(null==e?void 0:e.invite,ne,De))&&(v(null==e?void 0:e.leave
)||w(null==e?void 0:e.leave,ne,Le))}function Ue(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!w(null==e?void 0:e.join,ne,ye))throw new TypeError(`Property "join" was invalid: ${m(
null==e?void 0:e.join,ne,ye,ie,we)}`);if(!v(null==e?void 0:e.invite)&&!w(null==e?void 0:e.invite,ne,De)
)throw new TypeError(`Property "invite" was invalid: ${m(null==e?void 0:e.invite,ne,De,ie,Oe)}`);if(!v(
null==e?void 0:e.leave)&&!w(null==e?void 0:e.leave,ne,Le))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,
ae)}function $e(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,ae)}function ke(e){return y(e)&&D(e,[
"changed","left"])&&d(null==e?void 0:e.changed,se)&&d(null==e?void 0:e.left,se)}function Me(e){return w(e,p,E)}
function je(e){try{return function(e){if(!y(e))throw new TypeError("value not RegularObject");if(!D(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Pe(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ue(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!Fe(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Re(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!$e(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!ke(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Me(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function Ge(e){return y(e)&&D(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||Vs(null==e?void 0:e.avatar_url))}function He(e){
return y(e)&&D(e,["errcode","error"])&&(null==e?void 0:e.errcode)===Ma.M_USER_IN_USE&&p(null==e?void 0:e.error)}
function Be(e){return encodeURIComponent(e)}async function Je(e,t,r,n){n=S(S({},r.data),{},{state:n.getStateDTO()}),
await e.update(t,n)}var xe,We,qe,Ke,Ve,ze,Xe,Ye,Qe,Ze,et,tt,rt,nt,it,ot,st,at,ut,lt,ct,dt,ht,_t,Et,vt,pt,ft,Tt,gt,At,St,
Rt,Nt,yt,wt,Ct,mt,bt,It,Dt,Ot,Lt,Pt,Ut,Ft,$t,kt,Mt,jt,Gt,Ht,Bt,Jt,xt,Wt,qt,Kt,Vt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,
ur,lr,cr,dr,hr,_r,Er,vr,pr,fr,Tr,gr,Ar,Sr,Rr,Nr,yr,wr,Cr,mr,br,Ir,Dr,Or,Lr,Pr,Ur,Fr,$r,kr,Mr,jr,Gr,Hr,Br,Jr,xr,Wr,qr,Kr,
Vr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,un,ln,cn,dn,hn,_n,En,vn,pn,fn,Tn,gn,An,Sn,Rn,Nn,yn,wn,Cn,mn,bn,In,Dn,On,Ln,Pn,Un,
Fn,$n,kn,Mn,jn,Gn,Hn,Bn,Jn,xn,Wn,qn,Kn,Vn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,ui,li,ci,di,hi,_i,Ei,vi,pi,fi,Ti,gi,Ai,
Si,Ri,Ni,yi,wi,Ci,mi,bi,Ii,Di,Oi,Li,Pi,Ui,Fi,$i,ki,Mi,ji,Gi,Hi,Bi,Ji,xi,Wi,qi,Ki,Vi,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,
ao,uo,lo,co,ho,_o,Eo,vo,po,fo,To,go,Ao,So,Ro,No,yo,wo,Co,mo,bo,Io,Do,Oo,Lo,Po,Uo,Fo,$o,ko,Mo,jo,Go,Ho,Bo,Jo,xo,Wo,qo,Ko,
Vo,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,us,ls,cs,ds,hs,_s,Es,vs,ps,fs,Ts,gs,As,Ss,Rs,Ns,ys,ws,Cs,ms,bs,Is,Ds,Os,Ls,Ps,
Us,Fs,$s,ks,Ms,js,Gs,Hs,Bs,Js,xs,Ws,qs,Ks,Vs,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,ua,la,ca,da,ha,_a,Ea,va,pa,fa,Ta,ga,
Aa,Sa,Ra,Na,ya,wa,Ca,ma,ba,Ia,Da,Oa,La,Pa,Ua,Fa,$a,ka,Ma,ja,Ga,Ha,Ba,Ja,xa,Wa,qa,Ka,Va,za,Xa,Ya,Qa,Za,eu,tu,ru,nu,iu,ou,
su,au,uu,lu,cu,du,hu,_u,Eu,vu,pu,fu,Tu,gu=require("querystring"),Au=require("url"),Su=require("path"),Ru=require(
"child_process"),Nu=require("fs"),yu=t(gu),wu=e(Au),Cu=e(Su),
mu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,bu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Iu=function(){
this.__data__=[],this.size=0},Du=function(e,t){return e===t||e!=e&&t!=t},Ou=Du,Lu=function(e,t){for(var r=e.length;r--;
)if(Ou(e[r][0],t))return r;return-1},Pu=Lu,Uu=Array.prototype,Fu=Uu.splice,$u=Lu,ku=Lu,Mu=function(e){return-1<ku(
this.__data__,e)},ju=Lu,Gu=Iu,Hu=function(e){var t=this.__data__;return!((e=Pu(t,e))<0||(e==t.length-1?t.pop():Fu.call(t
,e,1),--this.size,0))},Bu=function(e){var t=this.__data__;return(e=$u(t,e))<0?void 0:t[e][1]},Ju=Mu,xu=function(e,t){
var r=this.__data__,n=ju(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Gu,
r.prototype.delete=Hu,r.prototype.get=Bu,r.prototype.has=Ju,r.prototype.set=xu,Xe=Va=r,za=function(){
this.__data__=new Xe,this.size=0},Rs=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
qa=function(e){return this.__data__.get(e)},Ka=function(e){return this.__data__.has(e)},
Za=Xa="object"==typeof mu&&mu&&mu.Object===Object&&mu,tu="object"==typeof self&&self&&self.Object===Object&&self,cr=eu=(
ws=Po=Za||tu||Function("return this")()).Symbol,Ns=Object.prototype,Ye=Ns.hasOwnProperty,Qe=Ns.toString,
Ze=cr?cr.toStringTag:void 0,dr=Object.prototype,et=dr.toString,tt=function(e){var t,r,n=Ye.call(e,Ze),i=e[Ze];try{t=!(
e[Ze]=void 0)}catch(e){}return r=Qe.call(e),t&&(n?e[Ze]=i:delete e[Ze]),r},rt=function(e){return et.call(e)},nt=(zn=eu
)?zn.toStringTag:void 0,st=it=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
nt&&nt in Object(e)?tt:rt)(e)},at=ot=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
ut=function(e){return!!at(e)&&("[object Function]"==(e=st(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},hr=ws["__core-js_shared__"],
Wa=/[^.]+$/.exec((Mt=hr)&&Mt.keys&&Mt.keys.IE_PROTO||""),lt=Wa?"Symbol(src)_1."+Wa:"",jt=Function.prototype,
ct=jt.toString,dt=ut,ht=function(e){return!!lt&&lt in e},_t=ot,Et=kr=function(e){if(null!=e){try{return ct.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Er=/[\\^$.*+?()[\]{}|]/g,vt=/^\[object .+?Constructor\]$/,
ys=Function.prototype,_r=Object.prototype,gu=ys.toString,Au=_r.hasOwnProperty,pt=RegExp("^"+gu.call(Au).replace(Er,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ft=function(e){return!(!_t(e
)||ht(e))&&(dt(e)?pt:vt).test(Et(e))},Tt=function(e,t){return null==e?void 0:e[t]},Uu=(Su=function(e,t){return t=Tt(e,t)
,ft(t)?t:void 0})(ws,"Map"),Lu=Su(Object,"create"),At=gt=Iu=Lu,pu=Object.prototype,St=pu.hasOwnProperty,Rt=Iu,
fu=Object.prototype,Nt=fu.hasOwnProperty,yt=Iu,Mu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Tu=function(e){var t,r=this.__data__;return At?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:St.call(r,e)?r[e]:void 0},Gu=function(e){var t=this.__data__;return Rt?void 0!==t[e]:Nt.call(t,e)},
Hu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=gt?gt(null):{},this.size=0},i.prototype.delete=Mu,i.prototype.get=Tu,
i.prototype.has=Gu,i.prototype.set=Hu,wt=i,Ct=Va,mt=Uu,Bu=function(){this.size=0,this.__data__={hash:new wt,map:new(
mt||Ct),string:new wt}},bt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Lt=Ot=Dt=It=function(e,t){
return e=e.__data__,bt(t)?e["string"==typeof t?"string":"hash"]:e.map},Ju=function(e){return e=It(this,e).delete(e),
this.size-=e?1:0,e},xu=function(e){return Dt(this,e).get(e)},mu=function(e){return Ot(this,e).has(e)},Xa=function(e,t){
var r=Lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Bu,o.prototype.delete=Ju,
o.prototype.get=xu,o.prototype.has=mu,o.prototype.set=Xa,Ut=Uu,Ft=tu=o,$t=Pt=Va,Po=Rs,Ns=qa,cr=Ka,dr=function(e,t){var r
,n=this.__data__;if(n instanceof Pt){if(r=n.__data__,!Ut||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Ft(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=za,s.prototype.delete=Po,
s.prototype.get=Ns,s.prototype.has=cr,s.prototype.set=dr,zn=s,kt=tu,hr=function(e){return this.__data__.has(e)},
u.prototype.add=u.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
u.prototype.has=hr,Gt=Mt=u,Ht=Wa=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},Bt=jt=function(e,t){return e.has(t)},ys=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,u=!0,l=2&r?new Gt:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;u=!1;break}if(l){if(
!Ht(t,function(e,t){if(!Bt(l,t)&&(c===e||i(c,e,r,n,o)))return l.push(t)})){u=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
u=!1;break}}return o.delete(e),o.delete(t),u},_r=ws.Uint8Array,Jt=_r,xt=Du,Wt=ys,qt=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},Kt=gu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Er=(Au=eu)?Au.prototype:void 0,Vt=Er?Er.valueOf:void 0,Lu=function(e,t,r,n,i,o,s){var a,u;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Jt(e),new Jt(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return xt(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":u=qt;case"[object Set]":return u=u||Kt,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
u=Wt(u(e),u(t),n,i,o,s),s.delete(e),u));case"[object Symbol]":if(Vt)return Vt.call(e)==Vt.call(t)}return!1},pu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},fu=Array.isArray,Xt=pu,Yt=zt=fu,Iu=function(e,t,r){
return t=t(e),Yt(e)?t:Xt(t,r(e))},Qt=Mu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Tu=Object.prototype,Zt=Tu.propertyIsEnumerable,Gu=(er=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Qt(er(t),function(e){return Zt.call(t,e)}))}:function(){return[]},Hu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},tr=it,Bu=function(e){return rr(e)&&"[object Arguments]"==tr(e)},
nr=rr=Ju=function(e){return null!=e&&"object"==typeof e},xu=Object.prototype,ir=xu.hasOwnProperty,
or=xu.propertyIsEnumerable,mu=Bu(function(){return arguments}())?Bu:function(e){return nr(e)&&ir.call(e,"callee"
)&&!or.call(e,"callee")},Xa=ws,Va=function(){return!1},Xa=(Xa=(za=(Ka=(za=(Ka=(qa=Rs={exports:{}}).exports
)&&!Ka.nodeType&&Ka)&&qa&&!qa.nodeType&&qa)&&Ka.exports===za)?Xa.Buffer:void 0)?Xa.isBuffer:void 0,qa.exports=Va=Xa||Va,
sr=/^(?:0|[1-9]\d*)$/,Po=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&sr.test(e))&&-1<e&&e%1==0&&e<t},ar=it,ur=Ns=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},lr=Ju,cr="[object Arguments]",dr="[object Array]",
hr="[object Boolean]",_r="[object Date]",Au="[object Error]",Er="[object Function]",fu="[object Map]",
xu="[object Object]",Bu="[object RegExp]",Ka="[object Set]",za="[object String]",Xa="[object WeakMap]",
qa="[object ArrayBuffer]",Va="[object DataView]",(vr={}
)["[object Float32Array]"]=vr["[object Float64Array]"]=vr["[object Int8Array]"]=vr["[object Int16Array]"]=vr["[object Int32Array]"]=vr["[object Uint8Array]"]=vr["[object Uint8ClampedArray]"]=vr["[object Uint16Array]"]=vr["[object Uint32Array]"]=!0
,
vr[cr]=vr[dr]=vr[qa]=vr[hr]=vr[Va]=vr[_r]=vr[Au]=vr[Er]=vr[fu]=vr["[object Number]"]=vr[xu]=vr[Bu]=vr[Ka]=vr[za]=vr[Xa]=!1
,Tu=function(e){return lr(e)&&ur(e.length)&&!!vr[ar(e)]},xu=function(t){return function(e){return t(e)}},Bu=Za,Xa=(Xa=(
za=Ka={exports:{}}).exports)&&!Xa.nodeType&&Xa,Xa=(Ya=Xa&&za&&!za.nodeType&&za)&&Ya.exports===Xa,Qa=Xa&&Bu.process,
Bu=function(){try{return Ya&&Ya.require&&Ya.require("util").types||Qa&&Qa.binding&&Qa.binding("util")}catch(e){}}(),
za.exports=Bu,Za=Tu,Bu=(za=(Xa=Ka.exports)&&Xa.isTypedArray)?xu(za):Za,pr=Hu,fr=mu,Tr=zt,gr=Rs.exports,Ar=Po,Sr=Tu=Bu,
Xa=Object.prototype,Rr=Xa.hasOwnProperty,za=function(e,t){var r,n=Tr(e),i=!n&&fr(e),o=!n&&!i&&gr(e),s=!n&&!i&&!o&&Sr(e),
a=n||i||o||s,u=a?pr(e.length,String):[],l=u.length;for(r in e)!t&&!Rr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Ar(r,l))||u.push(r);return u},
Nr=Object.prototype,Za=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Nr)},
Eu=Object.keys,vu=Object,yr=Za,wr=function(e){return Eu(vu(e))},Bu=Object.prototype,Cr=Bu.hasOwnProperty,mr=ut,br=Ns,
Ir=za,Dr=function(e){var t,r;if(!yr(e))return wr(e);for(r in t=[],Object(e))Cr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Or=Xa=function(e){return null!=e&&br(e.length)&&!mr(e)},Lr=Iu,Pr=Gu,Ur=Za=function(e){return(Or(e)?Ir:Dr)(e)}
,Fr=function(e){return Lr(e,Ur,Pr)},Hu=Object.prototype,$r=Hu.hasOwnProperty,Bu=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,
_,E,v,p,f=1&r,T=Fr(e),g=T.length;if(g!=Fr(t).length&&!f)return!1;for(s=g;s--;)if(a=T[s],!(f?a in t:$r.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(u=!0,o.set(e,t),o.set(t,e),l=f;++s<g;){if(c=e[a=T[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){u=!1;break}l=l||"constructor"==a}
return u&&!l&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(u=!1),o.delete(e),o.delete(t),u},za=Su(ws,
"DataView"),Iu=Uu,Gu=Su(ws,"Promise"),Uu=Hu=Su(ws,"Set"),ws=Su(ws,"WeakMap"),Mr=it,Gr="[object Map]",
Hr="[object Promise]",Br="[object Set]",Jr="[object WeakMap]",xr="[object DataView]",Wr=(jr=kr)(kr=za),qr=jr(Iu),Kr=jr(
Gu),Vr=jr(Uu),zr=jr(ws),za=Mr,(kr&&za(new kr(new ArrayBuffer(1)))!=xr||Iu&&za(new Iu)!=Gr||Gu&&za(Gu.resolve()
)!=Hr||Uu&&za(new Uu)!=Br||ws&&za(new ws)!=Jr)&&(za=function(e){var t=Mr(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?jr(e):"")switch(e){case Wr:return xr;case qr:return Gr;case Kr:return Hr
;case Vr:return Br;case zr:return Jr}return t}),Xr=zn,Yr=ys,Qr=Lu,Zr=Bu,en=za,tn=zt,rn=Rs.exports,nn=Tu,
on="[object Arguments]",sn="[object Array]",an="[object Object]",Uu=Object.prototype,un=Uu.hasOwnProperty,ln=function(e,
t,r,n,i,o){var s,a,u=tn(e),l=tn(t),c=u?sn:en(e),d=l?sn:en(t),h=(c=c==on?an:c)==an,l=(d=d==on?an:d)==an;if((d=c==d)&&rn(e
)){if(!rn(t))return!1;h=!(u=!0)}return d&&!h?(o=o||new Xr,u||nn(e)?Yr(e,t,r,n,i,o):Qr(e,t,c,r,n,i,o)):1&r||(
s=h&&un.call(e,"__wrapped__"),a=l&&un.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new Xr,Zr(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new Xr)},dn=zn,hn=ws=function e(t,r,n,i,o){return t===r||(null==t||null==r||!cn(t)&&!cn(r
)?t!=t&&r!=r:ln(t,r,n,i,e,o))},_n=ot,En=ys=function(e){return e==e&&!_n(e)},vn=Za,pn=function(e,t,r,n){var i,o,s,a,u,l,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(u=new dn,!(void 0===(l=n?n(s,a,o
,e,t,u):l)?hn(a,s,3,n,u):l))return!1;return!0},fn=function(e){for(var t,r,n=vn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
En(r)];return n},Tn=Lu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Bu=function(t){var r=fn(t);return 1==r.length&&r[0][2]?Tn(r[0][0],r[0][1]):function(e){return e===t||pn(e,t,r)}},gn=it,
An=cn=Ju,Sn=zt,Rn=za=function(e){return"symbol"==typeof e||An(e)&&"[object Symbol]"==gn(e)},
Nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yn=/^\w*$/,Rs=function(e,t){if(Sn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Rn(e))||yn.test(e)||!Nn.test(e)||null!=t&&e in Object(t)},
wn=tu,Cn="Expected a function",l.Cache=wn,
mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bn=/\\(\\)?/g,Gu=0
,_u=(Gu=l(Gu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(mn,function(e,t,r,n){i.push(
r?n.replace(bn,"$1"):t||e)}),i},function(e){return 500===_u.size&&_u.clear(),e})).cache,In=bu,zn=(Uu=eu
)?Uu.prototype:void 0,Ln=zn?zn.toString:void 0,Pn=tu=function e(t){if("string"==typeof t)return t;if(Dn(t))return In(t,e
)+"";if(On(t))return Ln?Ln.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},$n=Gu,kn=Uu=function(e){
return null==e?"":Pn(e)},Mn=On=za,Jn=jn=function(e,t){return Un(e)?e:Fn(e,t)?[e]:$n(kn(e))},xn=mu,Kn=Ns,Xn=function(e,t
){return null!=e&&t in Object(e)},Yn=zn=function(e,t,r){for(var n,i,o=(t=Jn(t,e)).length,s=!(n=-1);++n<o&&(i=Vn(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&Kn(o)&&qn(i,o)&&(Wn(e)||xn(e))},Qn=ws,
Zn=Bn=function(e,t,r){return void 0===(t=null==e?void 0:Hn(e,t))?r:t},ei=function(e,t){return null!=e&&Yn(e,t,Xn)},ri=ys
,ni=Lu,oi=Hn=Tu=function(e,t){for(var r=0,n=(t=jn(t,e)).length;null!=e&&r<n;)e=e[Gn(t[r++])];return r&&r==n?e:void 0},
si=function(t){return function(e){return null==e?void 0:e[t]}},ai=function(t){return function(e){return oi(e,t)}},
ui=ti=Fn=Rs,li=ii=Vn=Gn=function(e){if("string"==typeof e||Mn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
ci=Bu,di=function(r,n){return ti(r)&&ri(n)?ni(ii(r),n):function(e){var t=Zn(e,r);return void 0===t&&t===n?ei(e,r):Qn(n,t
,3)}},hi=Ns=function(e){return e},_i=Wn=Un=Dn=zt,Ei=function(e){return ui(e)?si(li(e)):ai(e)},vi=ys=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},pi=Za,Ai=bu,Ri=Rs=function(e,n){
var i=-1,o=gi(e)?Array(e.length):[];return Ti(e,function(e,t,r){o[++i]=n(e,t,r)}),o},yi=function(e,t){return(Ni(e)?Ai:Ri
)(e,Si(t))},Ci=Du,mi=gi=fi=Xa,bi=qn=Po,Ii=ot,Di=Wa,Li=function(e,n){var i;return wi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Fi=function(e,t,r){var n=Pi(e)?Di:Li;return r&&Ui(e,t,r)&&(t=void 0),n(e,Oi(t))},$i=wi=Ti=Bu=function(e,t){if(
null==e)return e;if(!fi(e))return e&&vi(e,t,pi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},
ki=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Mi=function(e,n){var i=!0
;return $i(e,function(e,t,r){return i=!!n(e,t,r)}),i},ji=Oi=Si=ws=function(e){
return"function"==typeof e?e:null==e?hi:"object"==typeof e?_i(e)?di(e[0],e[1]):ci(e):Ei(e)},Gi=Pi=Ni=zt,
Hi=Ui=ys=function(e,t,r){if(!Ii(r))return!1;var n=typeof t;return!!("number"==n?mi(r)&&bi(t,r.length
):"string"==n&&t in r)&&Ci(r[t],e)},Bi=function(e,t,r){var n=Gi(e)?ki:Mi;return r&&Hi(e,t,r)&&(t=void 0),n(e,ji(t))},
Ji=Su,Du=function(){try{var e=Ji(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),xi=mu,qi=(Po=eu
)?Po.isConcatSpreadable:void 0,Vi=function(e){return Wi(e)||xi(e)||!!(qi&&e&&e[qi])},zi=Ki=pu,Xi=Wa=function e(t,r,n,i,o
){var s,a=-1,u=t.length;for(n=n||Vi,o=o||[];++a<u;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):Ki(o,s):i||(o[o.length]=s)
;return o},Yi=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},Qi=Wi=zt,Zi=function(){
var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return zi(Qi(t
)?Yi(t):[t],Xi(e,1))},eo=ws,to=Xa,ro=Za,Lu=function(o){return function(e,t,r){var n,i=Object(e);return to(e)||(n=eo(t),
e=ro(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},Su=function(e,t,r,n){for(var i=e.length,
o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},no=/\s/,io=function(e){for(var t=e.length;t--&&no.test(
e.charAt(t)););return t},oo=/^\s+/,so=mu=function(e){return e&&e.slice(0,io(e)+1).replace(oo,"")},ao=ot,uo=za,
lo=/^[-+]0x[0-9a-f]+$/i,co=/^0b[01]+$/i,ho=/^0o[0-7]+$/i,_o=parseInt,Eo=function(e){var t;return"number"==typeof e?e:uo(
e)?NaN:(ao(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=ao(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=so(e),(
t=co.test(e))||ho.test(e)?_o(e.slice(2),t?2:8):lo.test(e)?NaN:+e))},vo=17976931348623157e292,po=function(e){return e?(
e=Eo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*vo:0===e?e:0},fo=Su,To=ws,go=eu=function(e){var t=po(e),e=t%1
;return t==t?e?t-e:t:0},Ao=Math.max,Po=Lu(So=function(e,t,r){var n=null==e?0:e.length;return n?((r=null==r?0:go(r))<0&&(
r=Ao(n+r,0)),fo(e,To(t),r)):-1}),Ro=Po,No=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;
)r=t(r,e[i],i,e);return r},yo=Bu,wo=ws,Co=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},
mo=zt,bo=function(e,t,r){var n=mo(e)?No:Co,i=arguments.length<3;return n(e,wo(t),r,i,yo)},pu=function(e,t,r){var n,i=-1,
o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},
Io=Su,Do=function(e){return e!=e},Oo=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},
Lo=Xa=function(e,t,r){return t==t?Oo(e,t,r):Io(e,Do,r)},Lu=function(e,t){return!(null==e||!e.length)&&-1<Lo(e,t,0)},
Po=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1},Su=function(){},Su=(Uo=Hu
)&&1/gu(new Uo([,-0]))[1]==1/0?function(e){return new Uo(e)}:Su,Fo=Mt,$o=Lu,ko=Po,Mo=jt,jo=Su,Go=gu,Ho=function(e,t,r){
var n,i,o,s,a=-1,u=$o,l=e.length,c=!0,d=[],h=d;if(r)c=!1,u=ko;else if(200<=l){if(n=t?null:jo(e))return Go(n);c=!1,u=Mo,
h=new Fo}else h=t?[]:d;e:for(;++a<l;)if(i=e[a],o=t?t(i):i,i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o
)continue e;t&&h.push(o),d.push(i)}else u(h,o,r)||(h!==d&&h.push(o),d.push(i));return d},Bo=function(e){
return e&&e.length?Ho(e):[]},Jo=za,xo=function(e,t){var r,n,i,o,s,a,u,l;if(e!==t){if(r=void 0!==e,n=null===e,i=e==e,
o=Jo(e),s=void 0!==t,a=null===t,u=t==t,l=Jo(t),!a&&!l&&!o&&t<e||o&&s&&u&&!a&&!l||n&&s&&u||!r&&u||!i)return 1;if(
!n&&!o&&!l&&e<t||l&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!u)return-1}return 0},Wo=bu,qo=Tu,Ko=ws,Vo=Rs,zo=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},Xo=xu,Yo=function(e,t,r){for(var n,i=-1,o=e.criteria,
s=t.criteria,a=o.length,u=r.length;++i<a;)if(n=xo(o[i],s[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index}
,Qo=Ns,Zo=zt,Rs=function(e,n,r){var i;return n=n.length?Wo(n,function(t){return Zo(t)?function(e){return qo(e,
1===t.length?t[0]:t)}:t}):[Qo],i=-1,n=Wo(n,Xo(Ko)),e=Vo(e,function(t,e,r){return{criteria:Wo(n,function(e){return e(t)}
),index:++i,value:t}}),zo(e,function(e,t){return Yo(e,t,r)})},es=function(e,t,r){switch(r.length){case 0:return e.call(t
);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t
,r)},ts=Math.max,xu=function(o,s,a){return s=ts(void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=ts(
t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),es(o,this,e)}},
rs=function(e){return function(){return e}},ns=Du,is=Date.now,cu=ns?function(e,t){return ns(e,"toString",{
configurable:!0,enumerable:!1,value:rs(t),writable:!0})}:Ns,os=Wa,ss=Rs,as=ys,function(){var e=is(),t=16-e+ +hu;if(hu=e,
0<t){if(800<=++du)return}else du=0;cu.apply(void 0,arguments)}(xu(Tu=function(e,t){if(null==e)return[];var r=t.length
;return 1<r&&as(e,t[0],t[1])?t=[]:2<r&&as(t[0],t[1],t[2])&&(t=[t[0]]),ss(e,os(t,1),[])},void(hu=du=0),Ns),Tu+""),ls=Mu,
cs=function(e,n){var i=[];return us(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},ds=ws,_s=function(e,t){return(hs(e)?ls:cs
)(e,ds(t))},Es=Ns,vs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},ps=us=Bu,
fs=function(e){return"function"==typeof e?e:Es},Ts=hs=zt,gs=function(e,t){return(Ts(e)?vs:ps)(e,fs(t))},As=pu,
xu=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:As(e,t,r)},Ss=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Du=function(e){return Ss.test(e)}
,(Wa=Ka.exports)&&Wa.isRegExp,Rs=function(e){return e.split("")},Mu="["+(ys="\\ud800-\\udfff")+"]",pu=(
ws="[\\ufe0e\\ufe0f]?")+"(?:"+(Ns="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(Bu="\\ud83c[\\udffb-\\udfff]"
)+")?(?:\\u200d(?:"+[Ka="[^"+ys+"]",Wa="(?:\\ud83c[\\udde6-\\uddff]){2}",ys="[\\ud800-\\udbff][\\udc00-\\udfff]"].join(
"|")+")"+ws+"(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Mu="(?:"+[Ka+Ns+"?",Ns,Wa,
ys,Mu].join("|")+")",Cs=RegExp(Bu+"(?="+Bu+")|"+Mu+pu,"g"),ms=Rs,bs=Du,Is=function(e){return e.match(Cs)||[]},Os=Ds=Xa,
Ls=tu,Ps=mu,Us=xu,Fs=function(e,t){for(var r=e.length;r--&&-1<Ds(t,e[r],0););return r},$s=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<Os(t,e[r],0););return r},ks=function(e){return(bs(e)?Is:ms)(e)},Ms=Uu,js=function(e,t,r){return(
e=Ms(e))&&(r||void 0===t)?Ps(e):e&&(t=Ls(t))?(r=ks(e),e=ks(t),t=$s(r,e),e=Fs(r,e)+1,Us(r,t,e).join("")):e},
xu=Object.prototype,Gs=xu.hasOwnProperty,Hs=function(e,t){return null!=e&&Gs.call(e,t)},Bs=zn,Js=function(e,t){
return null!=e&&Bs(e,t,Hs)},qs="[object Boolean]",Ks=function(e){return!0===e||!1===e||Ws(e)&&xs(e)==qs},Vs=function(e){
return null===e},Xs=zt,Qs="[object String]",Zs=function(e){return"string"==typeof e||!Xs(e)&&Ys(e)&&zs(e)==Qs},
ea=zs=xs=it,ta=Ys=Ws=Ju,ra="[object Number]",na=function(e){return"number"==typeof e||ta(e)&&ea(e)==ra},oa=function(e){
return"number"==typeof e&&e==ia(e)},sa=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),
e},aa=tu,ua=ia=eu,la=Uu,ca=function(e,t,r){return e=la(e),r=null==r?0:sa(ua(r),0,e.length),t=aa(t),e.slice(r,r+t.length
)==t},da=bu,ha=function(t,e){return da(e,function(e){return t[e]})},_a=Za,Ea=function(e){return null==e?[]:ha(e,_a(e))},
tu=Array.prototype,va=tu.join,pa=function(e,t){return null==e?"":va.call(e,t)},(eu=fa={})[eu.DEBUG=0]="DEBUG",
eu[eu.INFO=1]="INFO",eu[eu.WARN=2]="WARN",eu[eu.ERROR=3]="ERROR",eu[eu.NONE=4]="NONE",Ta=fa;const Wu=null!==(Uu=L(
"1.0.2"))&&void 0!==Uu?Uu:"?";Za=null!==(bu=L(""))&&void 0!==bu?bu:"io.nor.fi",eu=null!==(tu=L("")
)&&void 0!==tu?tu:"nor-pipeline-runner",bu=null!==(Uu=L(""))&&void 0!==Uu?Uu:"",Uu=null!==(tu=L(""))&&void 0!==tu?tu:""
;const qu=null!==(tu=L("production"))&&void 0!==tu?tu:"development",Ku=null!==(tu=L("2021-09-01T17:31:13.262Z")
)&&void 0!==tu?tu:"",Vu=null===(tu=O(""))||void 0===tu||tu,zu=null===(tu=O(""))||void 0===tu||tu,Xu=null===(tu=O("")
)||void 0===tu||tu,Yu=null===(tu=O(""))||void 0===tu||tu;tu="production"===qu;const Qu="test"===qu,Zu=!tu&&!Qu
;bu=null!==(xe=function(e){if(e){if(function(){switch(e){case fa.DEBUG:case fa.INFO:case fa.WARN:case fa.ERROR:
case fa.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return fa.DEBUG
;case"INFO":return fa.INFO;case"WARN":case"WARNING":return fa.WARN;case"ERR":case"ERROR":return fa.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return fa.NONE;default:return}}}(null!==(xe=L(null===(tu=process
)||void 0===tu||null===(xe=tu.env)||void 0===xe?void 0:xe.PIPELINE_LOG_LEVEL))&&void 0!==xe?xe:L(bu))
)&&void 0!==xe?xe:Ta.INFO;const el=null!==(We=L(null===(xe=process)||void 0===xe||null===(We=xe.env
)||void 0===We?void 0:We.PIPELINE_SERVER))&&void 0!==We?We:eu,tl=null!==(qe=function(e){if(void 0!==e)return`${e}`}(
null===(eu=process)||void 0===eu||null===(qe=eu.env)||void 0===qe?void 0:qe.PIPELINE_AUTHENTICATION))&&void 0!==qe?qe:Uu
,rl=null!==(Ke=L(null===(Uu=process)||void 0===Uu||null===(Ke=Uu.env)||void 0===Ke?void 0:Ke.PIPELINE_SERVER)
)&&void 0!==Ke?Ke:Za;class nl{constructor(e,t){a(this,"_logger",void 0),a(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class il{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case fa.DEBUG:return"DEBUG";case fa.INFO:return"INFO";case fa.WARN:return"WARN";case fa.ERROR:return"ERROR"
;case fa.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=Ta.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=Ta.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=Ta.WARN&&this._logger.warn(...e)}static error(...e){this._level<=Ta.ERROR&&this._logger.error(...e)}
static createLogger(e){return new nl(e,il)}}a(il,"_level",Ta.DEBUG),a(il,"_logger",console),(Za=ga={})[Za.HTTP=0]="HTTP"
,Za[Za.LOCAL=1]="LOCAL",Za[Za.MATRIX=2]="MATRIX",Aa=ga,(Za=Sa={})[Za.NONE=0]="NONE",Za[Za.BASIC_AUTH=1]="BASIC_AUTH",
Za[Za.BEARER_AUTH=2]="BEARER_AUTH",Ra=Sa;class ol{static parseRunnerAuthentication(e,t){var r;return void 0===t?null!==(
r=j(e))&&void 0!==r?r:k(e):null!==(r=j(e,t))&&void 0!==r?r:k(e,t)}}const sl=il.createLogger("MatrixRunnerResource")
;class al{static parseRunnerResource(e){var t;return null!==(t=null!==(t=function(e){var t;if(e)return y(t=e)&&D(t,[
"type","url","authentication"])&&(null==t?void 0:t.type)===Aa.HTTP&&p(null==t?void 0:t.url)&&(v(
null==t?void 0:t.authentication)||F(null==t?void 0:t.authentication))?e:(t=(e=js(`${e}`)).toLowerCase(),ca(t,"http:"
)||ca(t,"https:")?(t=new URL(e),t=null!==(t=ol.parseRunnerAuthentication(decodeURIComponent(t.username),
decodeURIComponent(t.password)))&&void 0!==t?t:ol.parseRunnerAuthentication(tl),{type:Aa.HTTP,url:e,auth:t}):void 0)}(e)
)&&void 0!==t?t:function(i){var o,s;if(i){if(y(s=i)&&D(s,["type","pool","homeserver","authentication"])&&(
null==s?void 0:s.type)===Aa.MATRIX&&f(null==s?void 0:s.pool)&&p(null==s?void 0:s.homeserver)&&(v(
null==s?void 0:s.authentication)||F(null==s?void 0:s.authentication)))return i;i=js(`${i}`),sl.debug(`value: '${i}'`)
;let e=i.toLowerCase();if(sl.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(i="matrix://io.nor.fi",
e="matrix://io.nor.fi"),sl.debug(`lowerCaseValue: '${e}'`),ca(e,"matrix://")){s=new URL(`https://${i.substr(
"matrix://".length)}`),sl.debug(`url: '${s}': `,s),o=null!==(o=ol.parseRunnerAuthentication(decodeURIComponent(
s.username),decodeURIComponent(s.password)))&&void 0!==o?o:ol.parseRunnerAuthentication(tl),sl.debug("auth: ",o)
;const e=`${s.host}`;sl.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),sl.debug("paths: ",a)
;const u=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return sl.debug(`roomPath: '${u}'`),
s=u.length?u.indexOf(":"):-1,sl.debug("roomPathIndex: ",s),s=u.length?0<=s?u:`${u}:${e}`:"",sl.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,sl.debug(`pool: '${s}'`),{type:Aa.MATRIX,homeserver:e,pool:s,
authentication:o}}ca(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return ca(e,"!")||ca(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${rl}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||tl,r=r||rl,{type:Aa.MATRIX,homeserver:r,pool:n,
authentication:ol.parseRunnerAuthentication(t)}}}(e))&&void 0!==t?t:function(e){var t;if(e)return y(t=e)&&D(t,["type",
"path"])&&(null==t?void 0:t.type)===Aa.LOCAL&&p(null==t?void 0:t.path)?e:(e=js(`${e}`),(e=ca(e.toLowerCase(),"file://"
)?e.substr("file://".length):e)?{type:Aa.LOCAL,path:e}:void 0)}(e)}}(Za=Na={})[Za.OK=0]="OK",
Za[Za.GENERAL_ERRORS=1]="GENERAL_ERRORS",Za[Za.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",
Za[Za.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",Za[Za.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",
Za[Za.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Za[Za.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Za[Za.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Za[Za.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Za[Za.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Za[Za.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Za[Za.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Za[Za.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Za[Za.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Za[Za.FATAL_ERROR=14]="FATAL_ERROR",Za[Za.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Za[Za.WORK_CANCELLED=16]="WORK_CANCELLED",Za[Za.CONFLICT=17]="CONFLICT",Za[Za.USAGE=64]="USAGE",
Za[Za.DATAERR=65]="DATAERR",Za[Za.NOINPUT=66]="NOINPUT",Za[Za.NOUSER=67]="NOUSER",Za[Za.NOHOST=68]="NOHOST",
Za[Za.UNAVAILABLE=69]="UNAVAILABLE",Za[Za.SOFTWARE=70]="SOFTWARE",Za[Za.OSERR=71]="OSERR",Za[Za.OSFILE=72]="OSFILE",
Za[Za.CANTCREAT=73]="CANTCREAT",Za[Za.IOERR=74]="IOERR",Za[Za.TEMPFAIL=75]="TEMPFAIL",Za[Za.PROTOCOL=76]="PROTOCOL",
Za[Za.NOPERM=77]="NOPERM",Za[Za.CONFIG=78]="CONFIG",
Za[Za.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Za[Za.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Za[Za.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Za[Za.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Za[Za.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Za[Za.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",ya=Na,(Za=wa={})[Za.OPTIONS=0]="OPTIONS",
Za[Za.GET=1]="GET",Za[Za.POST=2]="POST",Za[Za.PUT=3]="PUT",Za[Za.DELETE=4]="DELETE",Za[Za.PATCH=5]="PATCH",uu=wa
;const ul="WINDOW"===(lu=null!==(lu=null!==(Ve=null===(Za=process)||void 0===Za||null===(Ve=Za.env
)||void 0===Ve?void 0:Ve.NOR_REQUEST_CLIENT_MODE)&&void 0!==Ve?Ve:null===(lu=process)||void 0===lu||null===(ze=lu.env
)||void 0===ze?void 0:ze.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==lu?lu:"")||!("undefined"==typeof window||!window.fetch
),ll="NODE"===lu||!ul;class cl{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await cl.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await cl.getRequestDataAsString(e)))return yu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await cl.getRequestDataAsString(e)))return JSON.parse(e)}}(lu=Ca={}
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
lu[lu.NotExtended=510]="NotExtended",lu[lu.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",ma=Ca,(
ru=ru||{}).ERROR="error",ba=ru;class dl extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case Ca.Continue:return"Continue";case Ca.SwitchingProtocols:return"Switching Protocols"
;case Ca.Processing:return"Processing";case Ca.CheckPoint:return"Check Point";case Ca.OK:return"OK";case Ca.Created:
return"Created";case Ca.Accepted:return"Accepted";case Ca.NonAuthoritativeInformation:
return"Non-Authoritative Information";case Ca.NoContent:return"No Content";case Ca.ResetContent:return"Reset Content"
;case Ca.PartialContent:return"Partial Content";case Ca.MultiStatus:return"Multi Status";case Ca.AlreadyReported:
return"Already Reported";case Ca.IMUsed:return"IM Used";case Ca.MultipleChoices:return"Multiple Choices"
;case Ca.MovedPermanently:return"Moved Permanently";case Ca.Found:return"Found";case Ca.SeeOther:return"See Other"
;case Ca.NotModified:return"Not Modified";case Ca.TemporaryRedirect:return"Temporary Redirect"
;case Ca.PermanentRedirect:return"Permanent Redirect";case Ca.BadRequest:return"Bad Request";case Ca.Unauthorized:
return"Unauthorized";case Ca.PaymentRequired:return"Payment Required";case Ca.Forbidden:return"Forbidden"
;case Ca.NotFound:return"Not Found";case Ca.MethodNotAllowed:return"Method Not Allowed";case Ca.NotAcceptable:
return"Not Acceptable";case Ca.ProxyAuthenticationRequired:return"Proxy Authentication Required";case Ca.RequestTimeout:
return"Request Timeout";case Ca.Conflict:return"Conflict";case Ca.Gone:return"Gone";case Ca.LengthRequired:
return"Length Required";case Ca.PreconditionFailed:return"Precondition Failed";case Ca.PayloadTooLarge:
return"Payload Too Large";case Ca.URITooLong:return"URI Too Long";case Ca.UnsupportedMediaType:
return"Unsupported Media Type";case Ca.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case Ca.ExpectationFailed:return"Expectation Failed";case Ca.IAmATeapot:return"I Am a Teapot"
;case Ca.UnprocessableEntity:return"Unprocessable Entity";case Ca.Locked:return"Locked";case Ca.FailedDependency:
return"Failed Dependency";case Ca.TooEarly:return"Too Early";case Ca.UpgradeRequired:return"Upgrade Required"
;case Ca.PreconditionRequired:return"Precondition Required";case Ca.TooManyRequests:return"Too Many Requests"
;case Ca.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case Ca.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case Ca.InternalServerError:return"Internal Server Error";case Ca.NotImplemented:
return"Not Implemented";case Ca.BadGateway:return"Bad Gateway";case Ca.ServiceUnavailable:return"Service Unavailable"
;case Ca.GatewayTimeout:return"Gateway Timeout";case Ca.HttpVersionNotSupported:return"Http Version Not Supported"
;case Ca.VariantAlsoNegotiates:return"Variant Also Negotiates";case Ca.InsufficientStorage:return"Insufficient Storage"
;case Ca.LoopDetected:return"Loop Detected";case Ca.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case Ca.NotExtended:return"Not Extended";case Ca.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),a(this,"status",void 0),a(this,"method",void 0),a(this,"url",
void 0),a(this,"body",void 0),a(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:ba.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const hl=ll?require("fs").promises:void 0,_l=il.createLogger(
"NodeRequestClient");class El{constructor(e,t){a(this,"_http",void 0),a(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case uu.GET:return this._getJson(t,r,n);case uu.POST:return this._postJson(t,r,n)
;case uu.PATCH:return this._patchJson(t,r,n);case uu.PUT:return this._putJson(t,r,n);case uu.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await hl.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void _l.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void _l.debug(
"_checkSocketFile: ENOENT: ",e);throw _l.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Cu.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
u=new wu.default.URL(o);let l;const c=null!==(t=null===u||void 0===u?void 0:u.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==u.search?u.search:""}`;s=S(S({},s),{},{socketPath:e,path:t}),o="",l=this._http
}else l="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!l)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=S(S({},s),{},{hostname:u.hostname,
port:null!==(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:u.pathname+u.search})),e=l.request(s,e=>{n?_l.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(_l.warn(
"Warning! Request had already ended when the response was received."),_l.debug("Error from event: ",e)):(_l.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(_l.warn(
"Warning! Request had already ended when the response was received."),_l.debug("Exception: ",e)):(_l.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await cl.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=S(S({},n.headers),t)),this._request(uu.GET,e,n,r).then(El._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=S(S({},n.headers),t)),
this._request(uu.PUT,e,n,r).then(El._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=S(S({},n.headers),t)),this._request(uu.POST,e,n,r).then(
El._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=S(S({},n.headers),t)),this._request(uu.PATCH,e,n,r).then(El._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=S(S({},n.headers),t)),
this._request(uu.DELETE,e,n,r).then(El._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw _l.error(`Unsuccessful response with status ${t}: `,e),new dl(t,`Error ${t} for ${B(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class vl{constructor(e){a(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case uu.GET:return this._getJson(t,r,n);case uu.POST:return this._postJson(t,r,n)
;case uu.PUT:return this._putJson(t,r,n);case uu.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=S(S({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vl._successResponse(e,uu.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=S(S({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vl._successResponse(e,uu.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=S(S({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>vl._successResponse(e,uu.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=S(S({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>vl._successResponse(e,uu.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${B(t)} ${n}`;return e.json().then(
e=>{throw new dl(r,i,t,n,e)})}return e.json()}}const pl=ll?require("http"):void 0,fl=ll?require("https"):void 0,
Tl=il.createLogger("RequestClient");class gl{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(uu.GET,e,t)}static postJson(e,t,r){return Tl.debug(".postJson: ",e,t
,r),this._client.jsonRequest(uu.POST,e,r,t)}static patchJson(e,t,r){return Tl.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(uu.PATCH,e,r,t)}static putJson(e,t,r){return Tl.debug(".putJson: ",e,t,r),
this._client.jsonRequest(uu.PUT,e,r,t)}static deleteJson(e,t,r){return Tl.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(uu.DELETE,e,t,r)}static _initClient(){if(ul)return Tl.debug("Detected browser environment"),
new vl(window.fetch.bind(window));if(ll)return new El(pl,fl);throw new TypeError(
"Could not detect request client implementation")}}a(gl,"_client",gl._initClient());class Al{getName(){return this._name
}constructor(e){a(this,"_name",void 0),a(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){
this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return Js(this._callbacks,e)}triggerEvent(t,...r){var e
;this.hasCallbacks(t)?(e=this._callbacks[t],gs(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=_s(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
ru=nu=nu||{})[ru.CONSTRUCTED=0]="CONSTRUCTED",ru[ru.STARTED=1]="STARTED",ru[ru.PAUSED=2]="PAUSED",
ru[ru.CANCELLED=3]="CANCELLED",ru[ru.FINISHED=4]="FINISHED",ru[ru.FAILED=5]="FAILED",Ia=nu,(nu=iu=iu||{}
).PIPELINE="fi.nor.pipeline",nu.JOB="fi.nor.pipeline.job",nu.STAGE="fi.nor.pipeline.stage",
nu.TASK="fi.nor.pipeline.task",nu.STEP="fi.nor.pipeline.step",nu.SCRIPT_STEP="fi.nor.pipeline.step.script",Da=iu
;const Sl=il.createLogger("JobController");(iu=Oa={}).JOB_CHANGED="JobController:jobChanged",
iu.JOB_STARTED="JobController:jobStarted",iu.JOB_PAUSED="JobController:jobPaused",
iu.JOB_RESUMED="JobController:jobResumed",iu.JOB_CANCELLED="JobController:jobCancelled",
iu.JOB_FAILED="JobController:jobFailed",iu.JOB_FINISHED="JobController:jobFinished";class Rl{constructor(e,t=[]){if(a(
this,"_observer",void 0),a(this,"_name",void 0),a(this,"_steps",void 0),a(this,"_changedCallback",void 0),a(this,
"_state",void 0),a(this,"_stepDestructors",void 0),a(this,"_current",void 0),!J(e))throw new TypeError(
`Job name invalid: ${e}`);if(!d(t,Y,1))throw new TypeError(`Job#${e} must have at least one step`);this._current=0,
this._name=e,this._steps=t,this._observer=new Al(`JobController#${this._name}`),this._state=Ia.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=yi(t,e=>e.onChanged(this._changedCallback))}
getState(){return this._state}getName(){return this._name}destroy(){this._observer.destroy(),this._stepDestructors=_s(
this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){Sl.warn(
`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Da.JOB,
state:this._state,name:this._name,steps:yi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Ia.STARTED:return!0;case Ia.PAUSED:case Ia.CONSTRUCTED:case Ia.CANCELLED:
case Ia.FINISHED:case Ia.FAILED:return!1}}isStarted(){switch(this._state){case Ia.PAUSED:case Ia.STARTED:return!0
;case Ia.CONSTRUCTED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.FAILED:return!1}}isPaused(){switch(this._state){
case Ia.PAUSED:return!0;case Ia.STARTED:case Ia.CONSTRUCTED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.FAILED:return!1}}
isCancelled(){switch(this._state){case Ia.CANCELLED:return!0;case Ia.PAUSED:case Ia.STARTED:case Ia.CONSTRUCTED:
case Ia.FINISHED:case Ia.FAILED:return!1}}isFinished(){switch(this._state){case Ia.FINISHED:case Ia.FAILED:
case Ia.CANCELLED:return!0;case Ia.CONSTRUCTED:case Ia.PAUSED:case Ia.STARTED:return!1}}isFailed(){switch(this._state){
case Ia.FAILED:return!0;case Ia.CONSTRUCTED:case Ia.FINISHED:case Ia.PAUSED:case Ia.STARTED:case Ia.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case Ia.FINISHED:return!0;case Ia.FAILED:case Ia.CONSTRUCTED:case Ia.PAUSED:
case Ia.STARTED:case Ia.CANCELLED:return!1}}start(){if(this._state!==Ia.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Sl.info(`Starting job ${this._name}`),this._state=Ia.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(Oa.JOB_STARTED)&&this._observer.triggerEvent(
Oa.JOB_STARTED,this),this._observer.hasCallbacks(Oa.JOB_CHANGED)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Sl.info(
`Pausing job ${this._name}`),this._state=Ia.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
Oa.JOB_PAUSED)&&this._observer.triggerEvent(Oa.JOB_PAUSED,this),this._observer.hasCallbacks(Oa.JOB_CHANGED
)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Sl.info(`Resuming job ${this._name}`),this._state=Ia.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(Oa.JOB_RESUMED)&&this._observer.triggerEvent(
Oa.JOB_RESUMED,this),this._observer.hasCallbacks(Oa.JOB_CHANGED)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this),this}
stop(){if(this._state!==Ia.STARTED)throw new Error(`Job#${this._name} was not started`);return Sl.info(
`Stopping job ${this._name}`),this._state=Ia.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
Oa.JOB_CANCELLED)&&this._observer.triggerEvent(Oa.JOB_CANCELLED,this),this._observer.hasCallbacks(Oa.JOB_CHANGED
)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this),this}onCancelled(e){return this.on(Oa.JOB_CANCELLED,e)}onChanged(e){
return this.on(Oa.JOB_CHANGED,e)}onFailed(e){return this.on(Oa.JOB_FAILED,e)}onFinished(e){return this.on(
Oa.JOB_FINISHED,e)}onPaused(e){return this.on(Oa.JOB_PAUSED,e)}onResumed(e){return this.on(Oa.JOB_RESUMED,e)}onStarted(e
){return this.on(Oa.JOB_STARTED,e)}getErrorString(){return yi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return yi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Sl.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=Ia.FAILED,this._observer.hasCallbacks(Oa.JOB_FAILED)&&this._observer.triggerEvent(
Oa.JOB_FAILED,this)):i.isCancelled()?(this._state=Ia.CANCELLED,this._observer.hasCallbacks(Oa.JOB_CANCELLED
)&&this._observer.triggerEvent(Oa.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=Ia.STARTED,this._steps[this._current].start(),n===Ia.PAUSED&&this._observer.hasCallbacks(Oa.JOB_RESUMED
)&&this._observer.triggerEvent(Oa.JOB_RESUMED,this)):(this._state=Ia.FINISHED,this._observer.hasCallbacks(
Oa.JOB_FINISHED)&&this._observer.triggerEvent(Oa.JOB_FINISHED,this))),this._observer.hasCallbacks(Oa.JOB_CHANGED
)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=Ia.PAUSED,
this._observer.hasCallbacks(Oa.JOB_PAUSED)&&this._observer.triggerEvent(Oa.JOB_PAUSED,this),this._observer.hasCallbacks(
Oa.JOB_CHANGED)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=Ia.STARTED,this._observer.hasCallbacks(Oa.JOB_RESUMED)&&this._observer.triggerEvent(Oa.JOB_RESUMED,this),
this._observer.hasCallbacks(Oa.JOB_CHANGED)&&this._observer.triggerEvent(Oa.JOB_CHANGED,this))}}a(Rl,"Event",Oa)
;const Nl=il.createLogger("StageController");(iu=La={}).STAGE_STARTED="StageController:stageStarted",
iu.STAGE_PAUSED="StageController:stagePaused",iu.STAGE_RESUMED="StageController:stageResumed",
iu.STAGE_FINISHED="StageController:stageFinished",iu.STAGE_FAILED="StageController:stageFailed",
iu.STAGE_CANCELLED="StageController:stageCancelled",iu.STAGE_CHANGED="StageController:stageChanged";class yl{
constructor(e,t){if(a(this,"_observer",void 0),a(this,"_name",void 0),a(this,"_jobs",void 0),a(this,"_changedCallback",
void 0),a(this,"_state",void 0),a(this,"_jobDestructors",void 0),!J(e))throw new TypeError(`Stage name invalid: ${e}`)
;if(!d(t,Q,1))throw new TypeError(`Stage#${e} must have at least one job`);this._state=Ia.CONSTRUCTED,this._name=e,
this._jobs=t,this._observer=new Al(`StageController#${this._name}`),this._changedCallback=this._onChanged.bind(this),
this._jobDestructors=yi(t,e=>e.onChanged(this._changedCallback))}getState(){return this._state}getName(){
return this._name}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`StageController#${this._name}`}getStateDTO(){return{type:Da.STAGE,state:this._state,name:this._name,jobs:yi(
this._jobs,e=>e.getStateDTO())}}toJSON(){return{type:"StageController",state:this._state,name:this._name,jobs:yi(
this._jobs,e=>e.toJSON())}}isCancelled(){switch(this._state){case Ia.CANCELLED:return!0;case Ia.FINISHED:case Ia.FAILED:
case Ia.CONSTRUCTED:case Ia.PAUSED:case Ia.STARTED:return!1}}isFailed(){switch(this._state){case Ia.FAILED:return!0
;case Ia.CANCELLED:case Ia.FINISHED:case Ia.CONSTRUCTED:case Ia.PAUSED:case Ia.STARTED:return!1}}isFinished(){switch(
this._state){case Ia.FINISHED:case Ia.FAILED:case Ia.CANCELLED:return!0;case Ia.CONSTRUCTED:case Ia.PAUSED:
case Ia.STARTED:return!1}}isPaused(){switch(this._state){case Ia.PAUSED:return!0;case Ia.FAILED:case Ia.CANCELLED:
case Ia.FINISHED:case Ia.CONSTRUCTED:case Ia.STARTED:return!1}}isRunning(){switch(this._state){case Ia.STARTED:return!0
;case Ia.PAUSED:case Ia.FAILED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case Ia.PAUSED:case Ia.STARTED:return!0;case Ia.FAILED:case Ia.CANCELLED:case Ia.FINISHED:
case Ia.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case Ia.FINISHED:return!0;case Ia.PAUSED:
case Ia.STARTED:case Ia.FAILED:case Ia.CANCELLED:case Ia.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
La.STAGE_CANCELLED,e)}onChanged(e){return this.on(La.STAGE_CHANGED,e)}onFailed(e){return this.on(La.STAGE_FAILED,e)}
onFinished(e){return this.on(La.STAGE_FINISHED,e)}onPaused(e){return this.on(La.STAGE_PAUSED,e)}onResumed(e){
return this.on(La.STAGE_RESUMED,e)}onStarted(e){return this.on(La.STAGE_STARTED,e)}start(){if(
this._state!==Ia.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Nl.info(
`Starting stage ${this._name}`),this._state=Ia.STARTED,_s(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Nl.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Ia.FAILED,
this._observer.hasCallbacks(La.STAGE_FAILED)&&this._observer.triggerEvent(La.STAGE_FAILED,this)
):this._observer.hasCallbacks(La.STAGE_STARTED)&&this._observer.triggerEvent(La.STAGE_STARTED,this),
this._observer.hasCallbacks(La.STAGE_CHANGED)&&this._observer.triggerEvent(La.STAGE_CHANGED,this),this}pause(){if(
this._state===Ia.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Nl.info(`Pausing stage ${this._name}`)
,this._state=Ia.PAUSED;var e=_s(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Nl.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Nl.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(La.STAGE_PAUSED
)&&this._observer.triggerEvent(La.STAGE_PAUSED,this),this._observer.hasCallbacks(La.STAGE_CHANGED
)&&this._observer.triggerEvent(La.STAGE_CHANGED,this),this}resume(){if(this._state===Ia.STARTED)throw new Error(
`Stage#${this._name} was already started`);Nl.info(`Resuming stage ${this._name}`),this._state=Ia.STARTED;var e=_s(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Nl.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Nl.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(La.STAGE_RESUMED
)&&this._observer.triggerEvent(La.STAGE_RESUMED,this),this._observer.hasCallbacks(La.STAGE_CHANGED
)&&this._observer.triggerEvent(La.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Nl.info(`Stopping stage ${this._name}`),this._state=Ia.CANCELLED;var e=_s(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Nl.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Nl.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return yi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return yi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;A(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=_s(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Nl.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=g(this._jobs,e=>e.isFailed()),n=g(this._jobs,
e=>e.isCancelled()),r&&this._state!==Ia.FAILED?(this._state=Ia.FAILED,this._observer.hasCallbacks(La.STAGE_FAILED
)&&this._observer.triggerEvent(La.STAGE_FAILED,this),this._observer.hasCallbacks(La.STAGE_CHANGED
)&&this._observer.triggerEvent(La.STAGE_CHANGED,this)):n&&this._state!==Ia.CANCELLED?(this._state=Ia.CANCELLED,
this._observer.hasCallbacks(La.STAGE_CANCELLED)&&this._observer.triggerEvent(La.STAGE_CANCELLED,this),
this._observer.hasCallbacks(La.STAGE_CHANGED)&&this._observer.triggerEvent(La.STAGE_CHANGED,this)
):this._state!==Ia.FINISHED&&(this._state=Ia.FINISHED,this._observer.hasCallbacks(La.STAGE_FINISHED
)&&this._observer.triggerEvent(La.STAGE_FINISHED,this),this._observer.hasCallbacks(La.STAGE_CHANGED
)&&this._observer.triggerEvent(La.STAGE_CHANGED,this)))):(n=A(_s(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Ia.PAUSED?(this._state=Ia.PAUSED,this._observer.hasCallbacks(La.STAGE_PAUSED
)&&this._observer.triggerEvent(La.STAGE_PAUSED,this),this._observer.hasCallbacks(La.STAGE_CHANGED
)&&this._observer.triggerEvent(La.STAGE_CHANGED,this)):n||this._state!==Ia.PAUSED||(this._state=Ia.STARTED,
this._observer.hasCallbacks(La.STAGE_RESUMED)&&this._observer.triggerEvent(La.STAGE_RESUMED,this),
this._observer.hasCallbacks(La.STAGE_CHANGED)&&this._observer.triggerEvent(La.STAGE_CHANGED,this))}}a(yl,"Event",La)
;const wl=il.createLogger("PipelineController");(iu=Pa={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
iu.PIPELINE_PAUSED="PipelineController:pipelinePaused",iu.PIPELINE_RESUMED="PipelineController:pipelineResumed",
iu.PIPELINE_FINISHED="PipelineController:pipelineFinished",iu.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
iu.PIPELINE_FAILED="PipelineController:pipelineFailed",iu.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class Cl{constructor(e,t){if(a(this,"_name",void 0),a(this,"_stages",void 0),a(this,"_observer",void 0),a(this,
"_changedCallback",void 0),a(this,"_state",void 0),a(this,"_stageDestructors",void 0),a(this,"_current",void 0),!J(e)
)throw new TypeError(`Pipeline name invalid: ${e}`);if(!d(t,Z,1))throw new TypeError(
`Pipeline#${e} must have at least one stage`);this._current=0,this._name=e,this._stages=t,this._observer=new Al(
`PipelineController#${this._name}`),this._state=Ia.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),
this._stageDestructors=yi(t,e=>e.onChanged(this._changedCallback))}getState(){return this._state}getName(){
return this._name}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Da.PIPELINE,state:this._state,name:this._name,
stages:yi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case Ia.CANCELLED:return!0;case Ia.STARTED:case Ia.PAUSED:case Ia.CONSTRUCTED:case Ia.FINISHED:case Ia.FAILED:return!1}}
isFailed(){switch(this._state){case Ia.FAILED:return!0;case Ia.CANCELLED:case Ia.STARTED:case Ia.PAUSED:
case Ia.CONSTRUCTED:case Ia.FINISHED:return!1}}isFinished(){switch(this._state){case Ia.FAILED:case Ia.CANCELLED:
case Ia.FINISHED:return!0;case Ia.STARTED:case Ia.PAUSED:case Ia.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Ia.PAUSED:return!0;case Ia.FAILED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.STARTED:case Ia.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Ia.STARTED:return!0;case Ia.PAUSED:case Ia.FAILED:case Ia.CANCELLED:
case Ia.FINISHED:case Ia.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Ia.STARTED:case Ia.PAUSED:return!0
;case Ia.FAILED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Ia.FINISHED:return!0;case Ia.STARTED:case Ia.PAUSED:case Ia.FAILED:case Ia.CANCELLED:case Ia.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(Pa.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(Pa.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(Pa.PIPELINE_FAILED,e)}onFinished(e){return this.on(Pa.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
Pa.PIPELINE_PAUSED,e)}onResumed(e){return this.on(Pa.PIPELINE_RESUMED,e)}onStarted(e){return this.on(Pa.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return wl.info(
`Pausing pipeline ${this._name}`),this._state=Ia.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
Pa.PIPELINE_PAUSED)&&this._observer.triggerEvent(Pa.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
Pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return wl.info(`Resuming pipeline ${this._name}`),
this._state=Ia.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(Pa.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Pa.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this),this}start(){if(this._state!==Ia.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return wl.info(`Starting pipeline ${this._name}`),this._state=Ia.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(Pa.PIPELINE_STARTED)&&this._observer.triggerEvent(
Pa.PIPELINE_STARTED,this),this._observer.hasCallbacks(Pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(
Pa.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Ia.STARTED)throw new Error(`Job#${this._name} was not started`)
;return wl.info(`Stopping pipeline ${this._name}`),this._state=Ia.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(Pa.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Pa.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(Pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this),this}
getErrorString(){return yi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return yi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){wl.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Ia.FAILED,
this._observer.hasCallbacks(Pa.PIPELINE_FAILED)&&this._observer.triggerEvent(Pa.PIPELINE_FAILED,this),wl.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Ia.CANCELLED,this._observer.hasCallbacks(
Pa.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Pa.PIPELINE_CANCELLED,this),wl.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Ia.STARTED;const o=this._stages[this._current].start();n===Ia.PAUSED&&this._observer.hasCallbacks(
Pa.PIPELINE_RESUMED)&&this._observer.triggerEvent(Pa.PIPELINE_RESUMED,this),wl.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Ia.FINISHED,this._observer.hasCallbacks(Pa.PIPELINE_FINISHED
)&&this._observer.triggerEvent(Pa.PIPELINE_FINISHED,this),wl.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(Pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Ia.PAUSED,this._observer.hasCallbacks(Pa.PIPELINE_PAUSED
)&&this._observer.triggerEvent(Pa.PIPELINE_PAUSED,this),this._observer.hasCallbacks(Pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this),wl.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Ia.STARTED,this._observer.hasCallbacks(Pa.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Pa.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Pa.PIPELINE_CHANGED,this),wl.info(`Pipeline ${this._name} was resumed`))}}a(Cl,"Event",Pa
);const ml=il.createLogger("ScriptController");(iu=Ua={}).SCRIPT_STARTED="ScriptController:scriptStarted",
iu.SCRIPT_PAUSED="ScriptController:scriptPaused",iu.SCRIPT_RESUMED="ScriptController:scriptResumed",
iu.SCRIPT_CANCELLED="ScriptController:scriptCancelled",iu.SCRIPT_FAILED="ScriptController:scriptFailed",
iu.SCRIPT_FINISHED="ScriptController:scriptFinished",iu.SCRIPT_CHANGED="ScriptController:scriptChanged";class bl{
constructor(e,t,r=[],n={}){if(a(this,"_observer",void 0),a(this,"_name",void 0),a(this,"_command",void 0),a(this,"_args"
,void 0),a(this,"_env",void 0),a(this,"_closeCallback",void 0),a(this,"_stdoutCallback",void 0),a(this,"_stderrCallback"
,void 0),a(this,"_state",void 0),a(this,"_process",void 0),a(this,"_stdoutChunks",void 0),a(this,"_stderrChunks",void 0)
,!J(e))throw new TypeError(`Script name invalid: ${e}`);if(!p(t))throw new TypeError(
`Script#${e} must have a valid command: ${t}`);if(!d(r,p,0))throw new TypeError(
`Script#${e} must have a valid args: ${JSON.stringify(r)}`);if(!w(n,p,p))throw new TypeError(
`Script#${e} must have a valid env: ${JSON.stringify(n)}`);this._state=Ia.CONSTRUCTED,this._name=e,this._command=t,
this._args=r,this._env=n,this._observer=new Al(`ScriptController#${e}`),this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[]}destroy(){this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning(
)&&this.stop()}getState(){return this._state}getName(){return this._name}on(e,t){return this._observer.listenEvent(e,t)}
toString(){return`ScriptController#${this._name}`}getStateDTO(){return{type:Da.SCRIPT_STEP,state:this._state,
name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(this._state){case Ia.STARTED:return!0
;case Ia.PAUSED:case Ia.CONSTRUCTED:case Ia.CANCELLED:case Ia.FINISHED:case Ia.FAILED:return!1}}isStarted(){switch(
this._state){case Ia.STARTED:case Ia.PAUSED:return!0;case Ia.CONSTRUCTED:case Ia.CANCELLED:case Ia.FINISHED:
case Ia.FAILED:return!1}}isPaused(){switch(this._state){case Ia.PAUSED:return!0;case Ia.CONSTRUCTED:case Ia.STARTED:
case Ia.CANCELLED:case Ia.FINISHED:case Ia.FAILED:return!1}}isFinished(){switch(this._state){case Ia.CANCELLED:
case Ia.FINISHED:case Ia.FAILED:return!0;case Ia.CONSTRUCTED:case Ia.STARTED:case Ia.PAUSED:return!1}}isSuccessful(){
switch(this._state){case Ia.FINISHED:return!0;case Ia.FAILED:case Ia.CANCELLED:case Ia.CONSTRUCTED:case Ia.STARTED:
case Ia.PAUSED:return!1}}isCancelled(){switch(this._state){case Ia.CANCELLED:return!0;case Ia.FINISHED:case Ia.FAILED:
case Ia.CONSTRUCTED:case Ia.STARTED:case Ia.PAUSED:return!1}}isFailed(){switch(this._state){case Ia.FAILED:return!0
;case Ia.CANCELLED:case Ia.FINISHED:case Ia.CONSTRUCTED:case Ia.STARTED:case Ia.PAUSED:return!1}}start(){if(
this._state!==Ia.CONSTRUCTED)throw new Error(`Script#${this._name} was already started`);return ml.info(
`Starting command "${this._command} ${this._args.join(" ")}"`),this._state=Ia.STARTED,this._process=Ru.spawn(
this._command,this._args),this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",
this._stderrCallback),this._process.on("close",this._closeCallback),this._observer.hasCallbacks(Ua.SCRIPT_STARTED
)&&this._observer.triggerEvent(Ua.SCRIPT_STARTED,this),this._observer.hasCallbacks(Ua.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ua.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._process)throw new Error("No process initialized");return ml.info(
`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=Ia.PAUSED,this._process.kill("SIGSTOP"),
this._observer.hasCallbacks(Ua.SCRIPT_PAUSED)&&this._observer.triggerEvent(Ua.SCRIPT_PAUSED,this),
this._observer.hasCallbacks(Ua.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ua.SCRIPT_CHANGED,this),this}resume(){if(
!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._process)throw new Error(
"No process initialized");return ml.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=Ia.STARTED,this._process.kill("SIGCONT"),this._observer.hasCallbacks(Ua.SCRIPT_RESUMED
)&&this._observer.triggerEvent(Ua.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Ua.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Ua.SCRIPT_CHANGED,this),this}stop(){if(this._state!==Ia.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._process)throw new Error("No process initialized");return ml.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Ia.CANCELLED,this._process.kill("SIGTERM"),
this._observer.hasCallbacks(Ua.SCRIPT_CANCELLED)&&this._observer.triggerEvent(Ua.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(Ua.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ua.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(Ua.SCRIPT_STARTED,e)}onPaused(e){return this.on(Ua.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
Ua.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Ua.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(Ua.SCRIPT_FAILED,e)
}onFinished(e){return this.on(Ua.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Ua.SCRIPT_CHANGED,e)}getErrorString(){
return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(this._stdoutChunks
).toString("utf8")}_onClose(e){ml.debug(`Child process stopped with exit status ${e}`),0===e?(this._state=Ia.FINISHED,
this._observer.hasCallbacks(Ua.SCRIPT_FINISHED)&&this._observer.triggerEvent(Ua.SCRIPT_FINISHED,this)):(
this._state=Ia.FAILED,this._observer.hasCallbacks(Ua.SCRIPT_FAILED)&&this._observer.triggerEvent(Ua.SCRIPT_FAILED,this))
,this._observer.hasCallbacks(Ua.SCRIPT_CHANGED)&&this._observer.triggerEvent(Ua.SCRIPT_CHANGED,this)}_onStdOut(e){
this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),process.stderr.write(e)}}a(bl
,"Event",Ua),a(bl,"State",Ia);const Il=il.createLogger("PipelineRunner");class Dl{static createStepController(e){if(x(e)
)return new bl(e.name,e.command,e.args,e.env);throw new TypeError(`Unknown step type: ${e.name}`)}
static createJobController(e){return new Rl(e.name,yi(e.steps,e=>this.createStepController(e)))}
static createStageController(e){return new yl(e.name,yi(e.jobs,e=>this.createJobController(e)))}
static createPipelineController(e){return new Cl(e.name,yi(e.stages,e=>this.createStageController(e)))}
static createController(e){return z(e)?(Il.debug(`Starting pipeline ${e.name}`),this.createPipelineController(e)):V(e)?(
Il.debug(`Starting stage ${e.name}`),this.createStageController(e)):q(e)?(Il.debug(`Starting job ${e.name}`),
this.createJobController(e)):(Il.debug(`Starting step ${e.name}`),this.createStepController(e))}
static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{r=n.onChanged(()=>{try{n.isFinished()?(
Il.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Il.debug(`Controller ${n.toString(
)} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Il.debug(`Controller ${n.toString()} started`)}catch(e){
r&&(r(),r=void 0),t(e)}})}}const Ol=il.createLogger("runHttpResource"),Ll=il.createLogger("runLocalResource");(iu=Fa={}
).M_ROOM_POWER_LEVELS="m.room.power_levels",iu.M_ROOM_JOIN_RULES="m.room.join_rules",
iu.M_ROOM_MEMBERSHIP="m.room.membership",iu.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
iu.M_ROOM_GUEST_ACCESS="m.room.guest_access",iu.M_ROOM_CREATE="m.room.create",iu.M_FEDERATE="m.federate",
iu.M_ROOM_MEMBER="m.room.member",iu.M_PUSH_RULES="m.push_rules",iu.M_PRESENCE="m.presence",iu.M_SPACE="m.space",
iu.M_LOGIN_PASSWORD="m.login.password",iu.M_LOGIN_TOKEN="m.login.token",iu.M_ID_USER="m.id.user",
iu.FI_NOR_DELETED="fi.nor.deleted",iu.FI_NOR_FORM_DTO="fi.nor.form_dto",iu.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,iu.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",iu.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
iu.FI_NOR_AGENT_DTO="fi.nor.dto.agent",iu.FI_NOR_PIPELINE="fi.nor.pipeline",
iu.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",$a=Fa,(iu=ka=ka||{})[iu.UNAUTHENTICATED=0]="UNAUTHENTICATED",
iu[iu.AUTHENTICATING=1]="AUTHENTICATING",iu[iu.AUTHENTICATED=2]="AUTHENTICATED",
iu[iu.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
iu[iu.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(iu=Ma={}).M_USER_IN_USE="M_USER_IN_USE",
iu.M_INVALID_USERNAME="M_INVALID_USERNAME",iu.M_EXCLUSIVE="M_EXCLUSIVE",ja=Ma;const Pl=il.createLogger(
"SimpleMatrixClient");(Ga=Ga||{}).EVENT="SimpleMatrixClient:event";class Ul{constructor(e,t=void 0,r=void 0,n=void 0,
i=void 0,o=3e4,s=1e3){a(this,"_observer",void 0),a(this,"_originalUrl",void 0),a(this,"_pollTimeout",void 0),a(this,
"_pollWaitTime",void 0),a(this,"_timeoutCallback",void 0),a(this,"_state",void 0),a(this,"_homeServerUrl",void 0),a(this
,"_identityServerUrl",void 0),a(this,"_accessToken",void 0),a(this,"_userId",void 0),a(this,"_nextBatch",void 0),a(this,
"_timer",void 0),a(this,"_syncing",void 0),this._state=n?ka.AUTHENTICATED:ka.UNAUTHENTICATED,this._originalUrl=e,
this._homeServerUrl=null!=t?t:e,this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,
this._userId=i,this._pollTimeout=o,this._pollWaitTime=s,this._syncing=!1,this._observer=new Al("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Pl.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Pl.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(y(a=s=await gl.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${Be(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&D(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Pl.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Pl.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Pl.debug(
"Could not register user: ",e),!(e instanceof dl))throw new dl(ma.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new dl(ma.Unauthorized):403===s?new dl(ma.Forbidden
):429===s?new dl(429):new dl(ma.InternalServerError,"Failed to register user");if(!He(s=null==e?void 0:e.getBody())
)throw new dl(ma.InternalServerError,"Failed to register user");switch(s.errcode){case ja.M_USER_IN_USE:throw new dl(
ma.Conflict,"User already exists");case ja.M_INVALID_USERNAME:throw new dl(ma.BadRequest,"Username invalid")
;case ja.M_EXCLUSIVE:throw new dl(ma.Conflict,"User name conflicts with exclusive namespace");default:throw new dl(
ma.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Pl.debug("whoami: Fetching account whoami... ",r),n=await gl.getJson(r,{Authorization:`Bearer ${t}`}),Pl.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Pl.debug("whoami: user_id = ",i),p(i
)?i:void 0}catch(e){return void Pl.error("whoami: Could not fetch user_id: ",e)}}async getRegisterNonce(){var e,t,r,n
;try{if(Pl.debug("Fetching nonce for registration..."),t=this._resolveSynapseServerUrl("/register"),!(n=null!==(
e=null==(r=await gl.getJson(t))?void 0:r.nonce)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n
}catch(e){throw Pl.debug("Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Pl.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(y(
n=r=await gl.postJson(t,e))&&D(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Pl.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Pl.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Pl.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof dl))throw new dl(ma.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new dl(ma.Unauthorized
):403===r?new dl(ma.Forbidden):429===r?new dl(429):new dl(ma.InternalServerError,"Failed to register user");if(!He(
r=null==e?void 0:e.getBody()))throw new dl(ma.InternalServerError,"Failed to register user");switch(r.errcode){
case ja.M_USER_IN_USE:throw new dl(ma.Conflict,"User already exists");case ja.M_INVALID_USERNAME:throw new dl(
ma.BadRequest,"Username invalid");case ja.M_EXCLUSIVE:throw new dl(ma.Conflict,
"User name conflicts with exclusive namespace");default:throw new dl(ma.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,u,l,c,d,h,_,E;try{if(i={type:Fa.M_LOGIN_PASSWORD,identifier:{type:Fa.M_ID_USER,user:r},
password:n},Pl.debug("Sending login with userId:",r),!(y(h=o=await gl.postJson(this._resolveHomeServerUrl("/login"),i)
)&&D(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||y(_=h)&&D(_,["m.homeserver","m.identity_server"])&&y(E=_["m.homeserver"])&&D(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||y(_=_["m.identity_server"])&&D(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Pl.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Pl.debug("Login response received: ",o),l=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(u=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=u||l,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=l,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Ul(l,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Pl.debug(
"Could not login: ",e),new dl(ma.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(y(n=r=await gl.getJson(this._resolveHomeServerUrl(`/directory/room/${Be(t)}`)))&&D(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Pl.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Pl.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof dl&&e.getStatusCode()===ma.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(y(
t=e=await gl.getJson(this._resolveHomeServerUrl(`/rooms/${Be(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&D(t,[
"joined"])&&w(null==t?void 0:t.joined,se,Ge)))throw Pl.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Pl.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!te(i=await gl.getJson(this._resolveHomeServerUrl(
`/rooms/${Be(e)}/state/${Be(t)}/${Be(r)}`),{Authorization:`Bearer ${n}`})))throw Pl.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Pl.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof dl&&e.getStatusCode()===ma.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(y(s=o=await gl.putJson(this._resolveHomeServerUrl(
`/rooms/${Be(e)}/state/${Be(t)}/${Be(r)}`),n,{Authorization:`Bearer ${i}`}))&&D(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Pl.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Pl.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Pl.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await gl.postJson(this._resolveHomeServerUrl(`/rooms/${Be(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Pl.debug("forgetRoom: received: ",r)}catch(e){throw Pl.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await gl.postJson(this._resolveHomeServerUrl(`/rooms/${Be(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Pl.debug("leaveRoom: received: ",r)}catch(e){throw Pl.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ne(e))throw new TypeError(
`roomId invalid: ${e}`);if(!se(t))throw new TypeError(`userId invalid: ${t}`);if(Pl.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await gl.postJson(
this._resolveHomeServerUrl(`/rooms/${Be(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Pl.debug(
"inviteToRoom: received: ",n)}catch(e){throw Pl.error("inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t
){var r=this._accessToken;if(!r)throw new TypeError("sendTextMessage: Client did not have access token");t={
msgtype:"m.text",body:t},Pl.debug("Sending message with body:",t),r=await gl.postJson(this._resolveHomeServerUrl(
`/rooms/${Be(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`}),Pl.debug("sendTextMessage response received: ",r
)}async createRoom(e){var t=this._accessToken;if(!t)throw new TypeError("createRoom: Client did not have access token")
;if(Pl.debug("Creating room with body:",e),!(y(e=t=await gl.postJson(this._resolveHomeServerUrl("/createRoom"),e,{
Authorization:`Bearer ${t}`}))&&D(e,["room_id","room_alias"])&&ne(null==e?void 0:e.room_id)&&(v(
null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias)&&e&&"#"===e[0])))throw Pl.debug("response = ",t),
new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t);return Pl.debug("Create room response received: ",t),t
}async joinRoom(e,t=void 0){var r=this._accessToken;if(!r)throw new TypeError(
"createRoom: Client did not have access token");if(Pl.debug(`Joining to room ${e} with body:`,t),!(y(
r=t=await gl.postJson(this._resolveHomeServerUrl(`/rooms/${Be(e)}/join`),null!=t?t:{},{Authorization:`Bearer ${r}`})
)&&D(r,["room_id"])&&ne(null==r?void 0:r.room_id)))throw Pl.debug("response = ",t),new TypeError(
`Could not join to ${e}: Response was not MatrixJoinRoomResponseDTO: `+t);return Pl.debug(`Joined to room ${e}: `,t),t}
async sync(e){var t;if(Pl.info("sync with ",e),!(t=this._accessToken))throw new TypeError(
`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,full_state:i,set_presence:o,timeout:e}=e
;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!te(r))throw new TypeError(`Invalid value for filter option: ${r}`)
;s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(s.full_state=i?"true":"false"),void 0!==o&&(
s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=pa(yi(P(s),e=>{var t=s[e];return`${Be(e)}=${Be(t)}`}),"&"),!(y(
t=e=await gl.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{Authorization:`Bearer ${t}`}))&&D(t,["next_batch","rooms"
,"presence","account_data","to_device","device_lists","device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(
v(null==t?void 0:t.rooms)||Pe(null==t?void 0:t.rooms))&&(v(null==t?void 0:t.presence)||Fe(null==t?void 0:t.presence))&&(
v(null==t?void 0:t.account_data)||Re(null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||$e(
null==t?void 0:t.to_device))&&(v(null==t?void 0:t.device_lists)||ke(null==t?void 0:t.device_lists))&&(v(
null==t?void 0:t.device_one_time_keys_count)||Me(null==t?void 0:t.device_one_time_keys_count))))throw Pl.debug(
"_sync: response not MatrixSyncResponseDTO: ",JSON.stringify(e,null,2)),new TypeError(
`Response was not MatrixSyncResponseDTO: ${je(e)}`);return e}_sendMatrixEventList(e,t){gs(e,e=>{this._sendMatrixEvent(e,
t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(Ga.EVENT,t?S(S({},e),{},{room_id:t}):e)}_onTimeout(){if(
this._syncing)Pl.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e)throw new TypeError(
"_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Pl.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Pl.info("Initial sync request started"),
this._state!==ka.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=ka.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),Pl.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Pl.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Pl.info("Timer started..."),this._state=ka.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Pl.error("No next_batch in the response: ",t),r=Zi(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Se(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),gs(n,e=>{var t,r=(r=s[e],Zi([],
null!=r&&r.state?he(null==r?void 0:r.state):[],null!=r&&r.timeline?fe(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Zi([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Se(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),gs(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const u=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(u),gs(o,e=>{var t=u[e],t=Zi([],he(
null==t?void 0:t.state),fe(null==t?void 0:t.timeline),Se(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}a(Ul,
"Event",Ga),(iu=ou=ou||{}).PRIVATE_CHAT="private_chat",iu.PUBLIC_CHAT="public_chat",
iu.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Ha=ou,(ou=su=su||{}).INVITED="invited",ou.JOINED="joined",
ou.SHARED="shared",ou.WORLD_READABLE="world_readable",Ba=su,(su=au=au||{}).PUBLIC="public",su.KNOCK="knock",
su.INVITE="invite",su.PRIVATE="private",su.RESTRICTED="restricted",Ja=au,(au=su={}).CAN_JOIN="can_join",
au.FORBIDDEN="forbidden",xa=su;const Fl=il.createLogger("MatrixCrudRepository");class $l{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0){a(this,"_client",void 0),a(this,"_serviceAccount",void 0),a(this,"_stateType",
void 0),a(this,"_stateKey",void 0),a(this,"_deletedType",void 0),a(this,"_deletedKey",void 0),a(this,"_allowedGroups",
void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",this._serviceAccount=null!=n?n:void 0,
this._deletedType=null!==(i=L(i))&&void 0!==i?i:$a.FI_NOR_DELETED,this._deletedKey=null!=o?o:"",
this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,r=await this._client.sync({filter:{presence:{limit:0
},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{limit:0},timeline:{limit:0},state:{limit:1,
include_redundant_members:!0,types:[this._stateType],not_types:[this._deletedType]}}},full_state:!0});Fl.debug(
"getAll: response = ",JSON.stringify(r,null,2));const n=null!==(e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join
)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n)
;if(t=P(t),(t=_s(t,e=>!i.includes(e))).length){Fl.debug("Joining to rooms = ",t);let r=0;if(await bo(t,async(e,t)=>{
await e;try{Fl.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Fl.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Fl.debug(
"Fetching results again after joining"),this.getAll()}return bo(i,(e,i)=>{var t=n[i],r=_s(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&na(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Zi(e,yi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return yi(_s(e,
e=>Bn(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r={data:e,
version:1},n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),i=Bo(Zi(n?[n]:[],t||[])),
n=this._allowedGroups,t={[$a.M_FEDERATE]:!1};const o=[{type:this._stateType,state_key:this._stateKey,content:r},{
type:$a.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{history_visibility:Ba.SHARED}},{type:$a.M_ROOM_GUEST_ACCESS,
state_key:"",content:{guest_access:xa.FORBIDDEN}}];return void 0!==n&&o.push({type:$a.M_ROOM_JOIN_RULES,state_key:"",
content:{join_rule:Ja.RESTRICTED,allow:yi(n,e=>({type:$a.M_ROOM_MEMBERSHIP,room_id:e}))}}),t=S(S({},i.length?{invite:i
}:{}),{},{preset:Ha.PRIVATE_CHAT,creation_content:t,initial_state:o,room_version:"8"}),t=(await this._client.createRoom(
t)).room_id,this._serviceAccount&&await this._serviceAccount.joinRoom(t),{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Fl.debug(
"response = ",JSON.stringify(n,null,2)),!te(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`
);if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=yi(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!te(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new dl(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Fl.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new dl(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Fl.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Fl.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Fl.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof dl&&[401,403,404].includes(e.getStatusCode()))throw e;throw Fl.error(
`Error in deleteById(${t}): `,e),new dl(500)}}async inviteToItem(r,e){await bo(e,async(e,t)=>{await e,
await this._client.inviteToRoom(r,t)},Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}
const kl=il.createLogger("runMatrixRoomResource"),Ml=il.createLogger("main");il.setLogLevel(bu),async function(t=[]){
var r,n,i,o;try{if(Ml.debug(`Loglevel ${il.getLogLevelString()}`),r=el,t.shift(),!t.shift())return console.log(H(r)),
ya.ARGUMENT_PARSE_ERROR;if(0===t.length)return console.log(H(r)),ya.ARGUMENT_PARSE_ERROR;let e=!0;do{if(n=t.shift(),e){
switch(function(){switch(n){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":
case 2:return 2}}()){case 0:return console.log(H(r)),ya.OK;case 1:return console.log(function(e){const t=_s([
Vu?"LOCAL":"",zu?"HTTP":"",Xu?"MATRIX":"",Qu?"TEST":"",Zu?"DEV":""],e=>!!e);return`${e} v${Wu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Wu}'
  BUILD_NODE_ENV              = '${qu}'
  BUILD_DATE                  = '${Ku}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Vu}'
  BUILD_WITH_HTTP_RESOURCES   = '${zu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Xu}'
`}(r)),ya.OK;case 2:e=!1}if(!e)continue}if(void 0===(i=al.parseRunnerResource(n)))return Ml.error(
`Unsupported argument: ${n}`),console.log(H(r)),ya.UNKNOWN_ARGUMENT;if((o=await async function(e){switch(e.type){
case Aa.HTTP:return zu?async function(t){var r,n,i,o;try{const s={};if(t.authentication&&(M(t.authentication)&&(
s.Authorization=`Bearer ${t.authentication.access_token}`),$(t.authentication)&&(r=t.authentication.username,
n=t.authentication.password,s.Authorization=`Basic ${new Buffer(r+":"+n).toString("base64")}`)),void 0===(
i=await gl.getJson(t.url,s)))return Ol.error(`Failed to load URL "${t.url}": `,i),ya.RESOURCE_LOAD_FAILED;if(void 0===(
o=X(i)))return Ol.error(`Model from URL "${t.url}" was not valid: `,i),ya.RESOURCE_MODEL_INVALID
;let e=Dl.createController(o);return Ol.info(`Running ${e.getName()} from ${t.url}`),await Dl.startAndWaitUntilFinished(
e),Ol.info(`Successfully finished ${e.getName()} from ${t.url}`),ya.OK}catch(e){return Ol.error("Error: ",e),
ya.HTTP_RESOURCE_FAILED}}(e):ya.UNBUILD_FEATURE;case Aa.LOCAL:return Vu?async function(t){try{
var r=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{Nu.readFile(i,o,(e,t)=>{
e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(t.path),n=JSON.parse(r),i=X(n);if(void 0===i
)return Ll.warn("Model was not valid: ",n),ya.RESOURCE_MODEL_INVALID;let e=Dl.createController(i);return Ll.info(
`Running ${e.getName()} from ${t.path}`),await Dl.startAndWaitUntilFinished(e),Ll.info(
`Successfully finished ${e.getName()} from ${t.path}`),ya.OK}catch(e){return Ll.error("Error: ",e),
ya.LOCAL_RESOURCE_FAILED}}(e):ya.UNBUILD_FEATURE;case Aa.MATRIX:return Xu?async function(i){var o,s,a,u,l,c,d,h,_,E,v,p
;try{kl.debug("runMatrixResource: ",i);let e;if(M(d=i.authentication))e=new Ul(`https://${i.homeserver}`,void 0,void 0,
d.access_token);else{if(!$(d))return ya.UNKNOWN_AUTHENTICATION_TYPE;e=new Ul(`https://${i.homeserver}`),e=await e.login(
d.username,d.password)}let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return kl.error(
"Could not detect agent user ID"),ya.UNKNOWN_AGENT_ID;kl.info(`Agent user ID: ${t}`);const f=new $l(e,
$a.FI_NOR_AGENT_DTO);if(0===(p=await f.getAll()).length)return kl.debug("Detected no pools available."),ya.OK;h=(
1===p.length?(kl.debug("Detected single pool available. Picking it."),p[0]):(kl.debug(
`Detected ${p.length} pools available. Picking one by random.`),p[Math.floor(Math.random()*p.length)])).id,kl.info(
`Pool ID: ${h}`);const T=new $l(e,$a.FI_NOR_PIPELINE_RUN_DTO,"",void 0,$a.FI_NOR_PIPELINE_STATE,"",[h])
;_=await T.getAll();let r;if(0===_.length)return kl.debug("Detected no work available."),ya.OK;r=1===_.length?(kl.debug(
"Detected single work available. Picking it."),_[0]):(kl.debug(
`Detected ${_.length} work items available. Picking one by random.`),_[Math.floor(Math.random()*_.length)]);const g=r.id
;if(kl.info(`Work ID: ${g}`),E=S(S({},r.data),{},{agentPoolId:h,agentAccountId:t}),await T.update(r.id,E),
r=await T.findById(r.id),!r)return kl.warn("The work item disappeared while we were selecting it."),ya.WORK_CANCELLED
;if(g!==r.id)return kl.error(`The work item ID conflict: ${g} !== ${r.id}`),ya.CONFLICT;if(h!==(null===(o=r
)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.agentPoolId)||t!==(null===(a=r)||void 0===a||null===(u=a.data
)||void 0===u?void 0:u.agentAccountId))return kl.error(""),ya.CONFLICT;if(kl.debug(
"Work item secured to us! We can start the job."),void 0===(v=X(null===(l=r)||void 0===l||null===(c=l.data
)||void 0===c?void 0:c.model)))return kl.warn("Work item did not contain correct pipeline model: ",r),
ya.RESOURCE_MODEL_INVALID;let n=Dl.createController(v);await Je(T,g,r,n);const A=n.onChanged(()=>{Je(T,g,r,n).catch(e=>{
kl.error("Failed to save controller state: ",e)})});try{await Dl.startAndWaitUntilFinished(n)}finally{A(),await Je(T,g,r
,n)}return ya.OK}catch(e){return kl.error("Error: ",e),ya.MATRIX_RESOURCE_FAILED}}(e):ya.UNBUILD_FEATURE;default:
return ya.UNKNOWN_RESOURCE_TYPE}}(i))!==ya.OK)return o===ya.UNKNOWN_RESOURCE_TYPE?(Ml.error(`Error NorPP${o}: ${G(o
)}: Resource type was unknown: ${i.type}`),console.log(H(r)),ya.UNKNOWN_RESOURCE_TYPE):(function(e){if(na(e)&&!(
e<0||255<e)){if(Na.FATAL_SIGNAL_RANGE_START<=e&&e<=Na.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case Na.OK:
case Na.GENERAL_ERRORS:case Na.MISUSE_OF_SHELL_BUILTINS:case Na.ARGUMENT_PARSE_ERROR:case Na.UNKNOWN_ARGUMENT:
case Na.UNKNOWN_RESOURCE_TYPE:case Na.UNKNOWN_AUTHENTICATION_TYPE:case Na.RESOURCE_LOAD_FAILED:
case Na.RESOURCE_MODEL_INVALID:case Na.LOCAL_RESOURCE_FAILED:case Na.HTTP_RESOURCE_FAILED:
case Na.MATRIX_RESOURCE_FAILED:case Na.UNIMPLEMENTED_FEATURE:case Na.UNBUILD_FEATURE:case Na.FATAL_ERROR:case Na.USAGE:
case Na.DATAERR:case Na.NOINPUT:case Na.NOUSER:case Na.NOHOST:case Na.UNAVAILABLE:case Na.SOFTWARE:case Na.OSERR:
case Na.OSFILE:case Na.CANTCREAT:case Na.IOERR:case Na.TEMPFAIL:case Na.PROTOCOL:case Na.NOPERM:case Na.CONFIG:
case Na.COMMAND_INVOKED_CANNOT_EXECUTE:case Na.COMMAND_NOT_FOUND:case Na.INVALID_ARGUMENT_TO_EXIT:
case Na.FATAL_SIGNAL_RANGE_START:case Na.FATAL_SIGNAL_RANGE_END:case Na.EXIT_STATUS_OUT_OF_RANGE:
case Na.UNKNOWN_AGENT_ID:case Na.WORK_CANCELLED:case Na.CONFLICT:return 1;default:return}}}(o)?Ml.error(
`Error EX-${o}: ${G(o)}: for ${U(i.type)} resource ${n}`):Ml.error(`Error: Exit status ${o}: for ${U(i.type
)} resource ${n}`),o)}while(1<=t.length);return ya.OK}catch(e){return Ml.error("Fatal error: ",e),ya.FATAL_ERROR}}(
process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
