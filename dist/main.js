#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function d(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){a(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new Pt(e),this.size=e.size}function u(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Lt;++t<r;)this.add(e[t])}function l(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(Sn);return o.cache=new(l.Cache||gn),o}
function v(e){return void 0===e}function c(e){return Jt(e)}function h(e,t=void 0,r=void 0,n=void 0){if(!Jt(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function _(e){return v(e)||Bs(e)}function p(e){return Ms(e)}function f(e){return v(e)||p(e)}function E(e){
return!!e&&c(e)&&S(e,p)}function T(e){return xs(e)}function A(e){return v(e)||xs(e)}function g(e,t){return Oi(e,t)}
function S(e,t){return Mi(e,t)}function R(e,t){return tt(e)&&S(Zs(e),t)}function y(e,t=p,r=void 0){return!(
void 0!==r&&!R(e,r))&&(t=void 0!==t?t:p,tt(e)&&S(Cr(e),t))}function N(e){return!!tt(e)&&!(e instanceof Date)&&!it(e
)&&!c(e)&&y(e,p,void 0)}function C(e,t=p,r=void 0){return tt(e)&&!(e instanceof Date)&&!it(e)&&!c(e)&&y(e,t,r)}
function m(e,t=p,r=void 0,n=void 0,i=void 0){if(!tt(e))throw new TypeError("value was not object");if(e instanceof Date
)throw new TypeError("value was Date");if(it(e))throw new TypeError("value was Function");if(c(e))throw new TypeError(
"value was array");!function(e,t=p,r=void 0,n=void 0,i=void 0){if(void 0!==r&&!R(e,r)){var o=Zs(e),s=fo(o,e=>!r(e)),
a=Cr(e)[s],s=o[s];throw i?new TypeError(`Property "${a}": value not correct: ${i(s)}`):new TypeError(
`Property "${a}": value not correct: ${JSON.stringify(s,null,2)}`)}if(void 0!==t){const u=To(Cr(e),e=>!t(e))
;throw n?new TypeError(`Property "${u}": key was not correct: ${n(u)}`):new TypeError(
`Property "${u}": key was not correct: ${JSON.stringify(u,null,2)}`)}const u=To(Cr(e),e=>!p(e));throw new TypeError(
`Property "${u}": key was not string: ${u}`)}(e,t,r,n,i)}function w(e,t=p,r=void 0,n=void 0,i=void 0){try{return m(e,t,r
,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message)&&void 0!==i?i:`${e}`}}function b(...e){
return t=>g(e,e=>e(t))}function I(e){return tt(e)}function D(e,t){return I(e)&&0===(r=t,Qo(Cr(e),e=>!r.includes(e)
).length);var r}function O(e){if(void 0!==e&&""!==e)return Ps(e)?e:["true","t","on","1","enabled"].includes(
`${e}`.toLowerCase())}function P(e){if(void 0!==e&&""!==e)return`${e}`}function L(e){switch(e){case na.HTTP:return"http"
;case na.LOCAL:return"local";case na.MATRIX_ROOM:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function U(e){return N(e)&&function(){switch(null==e?void 0:e.type){
case oa.NONE:case oa.BASIC_AUTH:case oa.BEARER_AUTH:return 1;default:return}}()}function F(e){return N(e)&&D(e,["type",
"username","password"])&&(null==e?void 0:e.type)===sa.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function $(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return $(r,n)}return $(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:sa.BASIC_AUTH,username:r,password:n
}}function k(e){return N(e)&&D(e,["type","access_token"])&&(null==e?void 0:e.type)===sa.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function M(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(k(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return M(r,n)}return{
type:sa.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:sa.BEARER_AUTH,access_token:n}}function j(e){if(aa.FATAL_SIGNAL_RANGE_START<=e&&e<=aa.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-aa.FATAL_SIGNAL_RANGE_START}`;switch(e){case aa.OK:return"OK";case aa.GENERAL_ERRORS:
return"GENERAL_ERRORS";case aa.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case aa.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case aa.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case aa.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case aa.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case aa.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case aa.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case aa.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case aa.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case aa.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case aa.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case aa.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case aa.FATAL_ERROR:return"FATAL_ERROR"
;case aa.USAGE:return"USAGE";case aa.DATAERR:return"DATAERR";case aa.NOINPUT:return"NOINPUT";case aa.NOUSER:
return"NOUSER";case aa.NOHOST:return"NOHOST";case aa.UNAVAILABLE:return"UNAVAILABLE";case aa.SOFTWARE:return"SOFTWARE"
;case aa.OSERR:return"OSERR";case aa.OSFILE:return"OSFILE";case aa.CANTCREAT:return"CANTCREAT";case aa.IOERR:
return"IOERR";case aa.TEMPFAIL:return"TEMPFAIL";case aa.PROTOCOL:return"PROTOCOL";case aa.NOPERM:return"NOPERM"
;case aa.CONFIG:return"CONFIG";case aa.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case aa.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case aa.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case aa.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case aa.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case aa.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"}throw new TypeError(
`Unsupported RunnerExitStatus value: ${e}`)}function G(e){return Fu?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where ARG is one of:${Lu?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Uu?`

  Instructions from a Matrix room:

      matrix:// [ USER:PASSWORD@ | [_bearer:]ACCESS_TOKEN@ ] HOMESERVER / ROOM
      matrix:ROOM
      ROOM
      
    The room will be looked up. 
    
    When the room has a state event of type fi.nor.pipeline and has empty state_key with content 
    as the data for pipeline, the pipeline will be executed in that room.
    
    Otherwise, will look for state events of type fi.nor.pipeline with state_key as a Room ID 
    type to execute.
    
    The ROOM should be either in format !ID:HOMESERVER or #ALIAS:HOMESERVER and decoded correctly 
    in the URL format.
    
    Optionally will log in Matrix using USER and PASSWORD.
    
    Optionally uses Bearer authentication with ACCESS_TOKEN.
    
    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${Pu?`

  Instructions from the local system:
  
      [file://]FILE
    
    The resource will be loaded from the local filesystem and executed.
`:""}

  Environment variables:

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
`}function H(e){if(Bs(e))switch(e){case la.OPTIONS:return"options";case la.GET:return"get";case la.POST:return"post"
;case la.PUT:return"put";case la.DELETE:return"delete";case la.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function B(e){return!(!Ms(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function J(e){return N(e)&&B(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||h(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||C(r,n,i))&&D(e,["name","command","args","env"]);var t,r,n,i}function x(e){return!!J(e
)||!(!N(e)||!B(null==e?void 0:e.name))}function q(e){return N(e)&&B(null==e?void 0:e.name)&&h(null==e?void 0:e.steps,x,1
)&&D(e,["name","steps"])}function W(e){if(q(e))return e}function K(e){return N(e)&&B(null==e?void 0:e.name)&&h(
null==e?void 0:e.jobs,q,1)&&D(e,["name","jobs"])}function V(e){return N(e)&&B(null==e?void 0:e.name)&&h(
null==e?void 0:e.stages,K,1)&&D(e,["name","stages"])}function z(e){var t;return null!==(t=null!==(t=null!==(t=function(e
){if(V(e))return e}(e))&&void 0!==t?t:function(e){if(K(e))return e}(e))&&void 0!==t?t:W(e))&&void 0!==t?t:null!==(
e=function(e){if(J(e))return e}(t=e))&&void 0!==e?e:W(t)}function X(e){return I(e)&&it(null==e?void 0:e.getName)&&it(
null==e?void 0:e.isRunning)&&it(null==e?void 0:e.isStarted)&&it(null==e?void 0:e.isPaused)&&it(
null==e?void 0:e.isCancelled)&&it(null==e?void 0:e.isFinished)&&it(null==e?void 0:e.isFailed)&&it(
null==e?void 0:e.isSuccessful)&&it(null==e?void 0:e.start)&&it(null==e?void 0:e.pause)&&it(null==e?void 0:e.resume)&&it(
null==e?void 0:e.stop)&&it(null==e?void 0:e.destroy)&&it(null==e?void 0:e.toString)&&it(null==e?void 0:e.toJSON)&&it(
null==e?void 0:e.onStarted)&&it(null==e?void 0:e.onPaused)&&it(null==e?void 0:e.onResumed)&&it(
null==e?void 0:e.onCancelled)&&it(null==e?void 0:e.onFailed)&&it(null==e?void 0:e.onFinished)&&it(
null==e?void 0:e.onChanged)}function Y(e){return e instanceof Qu}function Q(e){return e instanceof el}function Z(e){
return p(t=e)||Bs(t)||Ps(t)||Ls(t)||h(e,b(Z,v))||ee(e);var t}function ee(e){return N(e)&&y(e,p,b(Z,v))}function te(e){
return v(e)||ee(e)}function re(e){return p(e)&&!!e&&"!"===e[0]}function ne(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function ie(e){return N(e)&&D(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||E(t
))&&A(e["m.joined_member_count"])&&A(e["m.invited_member_count"]);var t}function oe(e){return p(e)&&!!e&&"@"===e[0]}
function se(e){return N(e)&&D(e,["content","type","sender"])&&ee(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(
v(null==e?void 0:e.sender)||oe(null==e?void 0:e.sender))}function ae(e){return N(e)&&D(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&T(null==e?void 0:e.age)&&te(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||oe(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||se(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function ue(e){try{return function(e){if(!N(e))throw new TypeError(
"Value was not regular object");if(!D(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${Cr(e)}`);if(!T(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!te(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!oe(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!se(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function le(e){return N(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&ee(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&T(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ae(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||ee(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function ce(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${Cr(e)}`);if(!ee(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!T(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ae(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!ee(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function de(e){return zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function he(e){
return N(e)&&D(e,["events"])&&h(null==e?void 0:e.events,le)}function _e(e){try{return function(e){if(!N(e)
)throw new TypeError("value was not object");if(!D(e,["events"]))throw new TypeError("value had extra keys");if(!h(
null==e?void 0:e.events,le))throw e=To(null==e?void 0:e.events,e=>!le(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${ce(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ee(e){return N(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&ee(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&oe(null==e?void 0:e.sender)&&T(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ae(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function ve(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${Cr(e)}`);if(!ee(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!oe(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!T(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!ae(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ue(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function pe(e){return zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function fe(e){
return N(e)&&D(e,["events","limited","prev_batch"])&&h(null==e?void 0:e.events,Ee)&&Ps(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function Te(e){try{return function(e){if(!N(e))throw new TypeError(`value not object: ${e}`
);if(!D(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${Cr(e)}`);if(!h(
null==e?void 0:e.events,Ee)){var t=To(null==e?void 0:e.events,e=>!Ee(e));throw new TypeError(
`Property "events" item was not correct: ${ve(t)}`)}if(!Ps(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Ae(e){return N(e)&&D(e,["events"])&&h(null==e?void 0:e.events,se)}function ge(e){
return zi([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Se(e){return N(e)&&D(e,["events"])&&h(
null==e?void 0:e.events,se)}function Re(e){return N(e)&&D(e,["highlight_count","notification_count"])&&T(
null==e?void 0:e.highlight_count)&&T(null==e?void 0:e.notification_count)}function ye(e){return N(e)&&D(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||ie(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||he(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||fe(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Ae(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Se(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Re(null==e?void 0:e.unread_notifications))&&_(
e["org.matrix.msc2654.unread_count"])}function Ne(e){try{return function(e){if(!N(e))throw new TypeError(
`value was not object: ${e}`);if(!D(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!ie(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!he(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${_e(e)}`);if(
!v(null==e?void 0:e.timeline)&&!fe(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${Te(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Ae(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Se(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Re(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!_(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Ce(e){return N(e)&&D(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&ee(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&_(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||ae(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function me(e){try{return function(e){if(!N(e)
)throw new TypeError(`invalid: ${e}`);if(!D(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${Cr(e)}`);if(!ee(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!_(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ae(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function we(e){return N(e)&&D(e,["events"])&&h(null==e?void 0:e.events,
Ce)}function be(e){try{return function(e){if(!N(e))throw new TypeError(`value invalid: ${e}`);if(!D(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${Cr(e)}`);if(!h(null==e?void 0:e.events,Ce))throw e=To(
null==e?void 0:e.events,e=>!Ce(e)),new TypeError(`Property "events" had invalid item: ${me(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ie(e){return N(e)&&D(e,["invite_state"])&&we(
null==e?void 0:e.invite_state)}function De(e){try{return function(e){if(!N(e))throw new TypeError(
`Value not object: ${e}`);if(!D(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${Cr(e)}`);if(
!we(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${be(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Oe(e){return N(e)&&D(e,[
"state","timeline","account_data"])&&he(null==e?void 0:e.state)&&fe(null==e?void 0:e.timeline)&&Se(
null==e?void 0:e.account_data)}function Pe(e){return N(e)&&D(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||C(
null==e?void 0:e.join,re,ye))&&(v(null==e?void 0:e.invite)||C(null==e?void 0:e.invite,re,Ie))&&(v(null==e?void 0:e.leave
)||C(null==e?void 0:e.leave,re,Oe))}function Le(e){try{return function(e){if(!N(e))throw new TypeError(
"value was not regular object");if(!D(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!C(null==e?void 0:e.join,re,ye))throw new TypeError(`Property "join" was invalid: ${w(
null==e?void 0:e.join,re,ye,ne,Ne)}`);if(!v(null==e?void 0:e.invite)&&!C(null==e?void 0:e.invite,re,Ie)
)throw new TypeError(`Property "invite" was invalid: ${w(null==e?void 0:e.invite,re,Ie,ne,De)}`);if(!v(
null==e?void 0:e.leave)&&!C(null==e?void 0:e.leave,re,Oe))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return N(e)&&D(e,["events"])&&h(null==e?void 0:e.events,
se)}function Fe(e){return N(e)&&D(e,["events"])&&h(null==e?void 0:e.events,se)}function $e(e){return N(e)&&D(e,[
"changed","left"])&&h(null==e?void 0:e.changed,oe)&&h(null==e?void 0:e.left,oe)}function ke(e){return C(e,p,T)}
function Me(e){try{return function(e){if(!N(e))throw new TypeError("value not RegularObject");if(!D(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Pe(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Le(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!Ue(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Se(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Fe(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!$e(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!ke(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function je(e){return N(e)&&D(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||Ls(null==e?void 0:e.avatar_url))}function Ge(e){
return encodeURIComponent(e)}async function He(e,t,r){await e.setRoomStateByType(t,Aa.FI_NOR_PIPELINE_STATE,"",r.toJSON(
))}function Be(e,t){return e===t||e!=e&&t!=t}var Je,xe,qe,We,Ke,Ve,ze,Xe,Ye,Qe,Ze,et,tt,rt,nt,it,ot,st,at,ut,lt,ct,dt,ht
,_t,Et,vt,pt,ft,Tt,At,gt,St,Rt,yt,Nt,Ct,mt,wt,bt,It,Dt,Ot,Pt,Lt,Ut,Ft,$t,kt,Mt,jt,Gt,Ht,Bt,Jt,xt,qt,Wt,Kt,Vt,zt,Xt,Yt,Qt
,Zt,er,tr,rr,nr,ir,or,sr,ar,ur,lr,cr,dr,hr,_r,Er,vr,pr,fr,Tr,Ar,gr,Sr,Rr,yr,Nr,Cr,mr,wr,br,Ir,Dr,Or,Pr,Lr,Ur,Fr,$r,kr,Mr
,jr,Gr,Hr,Br,Jr,xr,qr,Wr,Kr,Vr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,un,ln,cn,dn,hn,_n,En,vn,pn,fn,Tn,An,gn,Sn,Rn,yn,Nn,Cn
,mn,wn,bn,In,Dn,On,Pn,Ln,Un,Fn,$n,kn,Mn,jn,Gn,Hn,Bn,Jn,xn,qn,Wn,Kn,Vn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,ui,li,ci,di
,hi,_i,Ei,vi,pi,fi,Ti,Ai,gi,Si,Ri,yi,Ni,Ci,mi,wi,bi,Ii,Di,Oi,Pi,Li,Ui,Fi,$i,ki,Mi,ji,Gi,Hi,Bi,Ji,xi,qi,Wi,Ki,Vi,zi,Xi,Yi
,Qi,Zi,eo,to,ro,no,io,oo,so,ao,uo,lo,co,ho,_o,Eo,vo,po,fo,To,Ao,go,So,Ro,yo,No,Co,mo,wo,bo,Io,Do,Oo,Po,Lo,Uo,Fo,$o,ko,Mo
,jo,Go,Ho,Bo,Jo,xo,qo,Wo,Ko,Vo,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,as,us,ls,cs,ds,hs,_s,Es,vs,ps,fs,Ts,As,gs,Ss,Rs,ys,Ns
,Cs,ms,ws,bs,Is,Ds,Os,Ps,Ls,Us,Fs,$s,ks,Ms,js,Gs,Hs,Bs,Js,xs,qs,Ws,Ks,Vs,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,ua,la,ca
,da,ha,_a,Ea,va,pa,fa,Ta,Aa,ga,Sa,Ra,ya,Na,Ca,ma,wa,ba,Ia,Da,Oa,Pa,La,Ua,Fa,$a,ka,Ma,ja,Ga,Ha,Ba,Ja,xa,qa,Wa,Ka,Va,za,Xa
,Ya,Qa=require("querystring"),Za=require("url"),eu=require("path"),tu=require("child_process"),ru=require("fs"),nu=t(Qa)
,iu=e(Za),ou=e(eu),
su="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,au=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},uu=function(){
this.__data__=[],this.size=0},lu=Be,cu=function(e,t){for(var r=e.length;r--;)if(lu(e[r][0],t))return r;return-1},du=cu,
hu=Array.prototype,_u=hu.splice,Eu=function(e){var t=this.__data__;return!((e=du(t,e))<0||(e==t.length-1?t.pop(
):_u.call(t,e,1),--this.size,0))},vu=cu,pu=cu,fu=function(e){return-1<pu(this.__data__,e)},Tu=cu,Au=uu,gu=Eu,
Su=function(e){var t=this.__data__;return(e=vu(t,e))<0?void 0:t[e][1]},Ru=fu,yu=function(e,t){var r=this.__data__,n=Tu(r
,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Au,r.prototype.delete=gu,r.prototype.get=Su
,r.prototype.has=Ru,r.prototype.set=yu,We=wa=r,ba=function(){this.__data__=new We,this.size=0},as=function(e){
var t=this.__data__,e=t.delete(e);return this.size=t.size,e},ma=function(e){return this.__data__.get(e)},Oa=function(e){
return this.__data__.has(e)},Da="object"==typeof su&&su&&su.Object===Object&&su,
vn="object"==typeof self&&self&&self.Object===Object&&self,bn=cs=(Wa=ls=Da||vn||Function("return this")()).Symbol,
Ia=Object.prototype,Ke=Ia.hasOwnProperty,Ve=Ia.toString,ze=bn?bn.toStringTag:void 0,us=Object.prototype,Xe=us.toString,
Ye=function(e){var t,r,n=Ke.call(e,ze),i=e[ze];try{t=!(e[ze]=void 0)}catch(e){}return r=Ve.call(e),t&&(
n?e[ze]=i:delete e[ze]),r},Qe=function(e){return Xe.call(e)},Ze=(qn=cs)?qn.toStringTag:void 0,rt=et=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ze&&Ze in Object(e)?Ye:Qe)(e)},nt=tt=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},it=function(e){return!!nt(e)&&("[object Function]"==(e=rt(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},or=Wa["__core-js_shared__"],
Ua=/[^.]+$/.exec((sr=or)&&sr.keys&&sr.keys.IE_PROTO||""),ot=Ua?"Symbol(src)_1."+Ua:"",ar=Function.prototype,
st=ar.toString,at=it,ut=function(e){return!!ot&&ot in e},lt=tt,ct=Or=function(e){if(null!=e){try{return st.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Qa=/[\\^$.*+?()[\]{}|]/g,dt=/^\[object .+?Constructor\]$/,
Za=Function.prototype,eu=Object.prototype,hu=Za.toString,cu=eu.hasOwnProperty,ht=RegExp("^"+hu.call(cu).replace(Qa,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_t=function(e){return!(!lt(e
)||ut(e))&&(at(e)?ht:dt).test(ct(e))},Et=function(e,t){return null==e?void 0:e[t]},Eu=(uu=function(e,t){return t=Et(e,t)
,_t(t)?t:void 0})(Wa,"Map"),Xa=uu(Object,"create"),pt=vt=fu=Xa,Ya=Object.prototype,ft=Ya.hasOwnProperty,Tt=fu,
Au=Object.prototype,At=Au.hasOwnProperty,gt=fu,gu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Su=function(e){var t,r=this.__data__;return pt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:ft.call(r,e)?r[e]:void 0},Ru=function(e){var t=this.__data__;return Tt?void 0!==t[e]:At.call(t,e)},
yu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=gt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},i.prototype.delete=gu,i.prototype.get=Su,
i.prototype.has=Ru,i.prototype.set=yu,St=i,Rt=wa,yt=Eu,su=function(){this.size=0,this.__data__={hash:new St,map:new(
yt||Rt),string:new St}},Nt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},bt=wt=mt=Ct=function(e,t){
return e=e.__data__,Nt(t)?e["string"==typeof t?"string":"hash"]:e.map},zt=function(e){return e=Ct(this,e).delete(e),
this.size-=e?1:0,e},vn=function(e){return mt(this,e).get(e)},ls=function(e){return wt(this,e).has(e)},Ia=function(e,t){
var r=bt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=su,o.prototype.delete=zt,
o.prototype.get=vn,o.prototype.has=ls,o.prototype.set=Ia,Dt=Eu,Ot=bn=o,Pt=It=wa,us=as,qn=ma,or=Oa,sr=function(e,t){var r
,n=this.__data__;if(n instanceof It){if(r=n.__data__,!Dt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Ot(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=ba,s.prototype.delete=us,
s.prototype.get=qn,s.prototype.has=or,s.prototype.set=sr,Ua=s,Lt=bn,ar=function(e){return this.__data__.has(e)},
u.prototype.add=u.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
u.prototype.has=ar,Ut=u,Ft=Za=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},
$t=function(e,t){return e.has(t)},eu=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,_=1&r,E=e.length,v=t.length;if(E!=v&&!(
_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,u=!0,l=2&r?new Ut:void 0,o.set(e,t),o.set(t,e
);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;u=!1;break}if(l){if(!Ft(t,
function(e,t){if(!$t(l,t)&&(c===e||i(c,e,r,n,o)))return l.push(t)})){u=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){u=!1
;break}}return o.delete(e),o.delete(t),u},hu=Wa.Uint8Array,kt=hu,Mt=Be,jt=eu,Gt=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},Ht=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){
r[++t]=e}),r},Qa=(cu=cs)?cu.prototype:void 0,Bt=Qa?Qa.valueOf:void 0,Xa=function(e,t,r,n,i,o,s){var a,u;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new kt(e),new kt(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return Mt(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":u=Gt;case"[object Set]":return u=u||Ht,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
u=jt(u(e),u(t),n,i,o,s),s.delete(e),u));case"[object Symbol]":if(Bt)return Bt.call(e)==Bt.call(t)}return!1},Ya=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Au=Array.isArray,xt=Ya,qt=Jt=Au,fu=function(e,t,r){
return t=t(e),qt(e)?t:xt(t,r(e))},Wt=gu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Su=Object.prototype,Kt=Su.propertyIsEnumerable,Ru=(Vt=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Wt(Vt(t),function(e){return Kt.call(t,e)}))}:function(){return[]},yu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Xt=et,su=function(e){return Yt(e)&&"[object Arguments]"==Xt(e)},
Qt=Yt=zt=function(e){return null!=e&&"object"==typeof e},vn=Object.prototype,Zt=vn.hasOwnProperty,
er=vn.propertyIsEnumerable,ls=su(function(){return arguments}())?su:function(e){return Qt(e)&&Zt.call(e,"callee"
)&&!er.call(e,"callee")},Ia=Wa,wa=function(){return!1},Ia=(Ia=(ba=(Oa=(ba=(Oa=(ma=as={exports:{}}).exports
)&&!Oa.nodeType&&Oa)&&ma&&!ma.nodeType&&ma)&&Oa.exports===ba)?Ia.Buffer:void 0)?Ia.isBuffer:void 0,ma.exports=wa=Ia||wa,
tr=/^(?:0|[1-9]\d*)$/,us=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&tr.test(e))&&-1<e&&e%1==0&&e<t},rr=et,nr=qn=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},ir=zt,or="[object Arguments]",sr="[object Array]",
ar="[object Boolean]",hu="[object Date]",cu="[object Error]",Qa="[object Function]",Au="[object Map]",
Su="[object Number]",vn="[object Object]",su="[object RegExp]",Oa="[object Set]",ba="[object String]",
Ia="[object WeakMap]",ma="[object ArrayBuffer]",wa="[object DataView]",(ur={}
)["[object Float32Array]"]=ur["[object Float64Array]"]=ur["[object Int8Array]"]=ur["[object Int16Array]"]=ur["[object Int32Array]"]=ur["[object Uint8Array]"]=ur["[object Uint8ClampedArray]"]=ur["[object Uint16Array]"]=ur["[object Uint32Array]"]=!0
,ur[or]=ur[sr]=ur[ma]=ur[ar]=ur[wa]=ur[hu]=ur[cu]=ur[Qa]=ur[Au]=ur[Su]=ur[vn]=ur[su]=ur[Oa]=ur[ba]=ur[Ia]=!1,
vn=function(e){return ir(e)&&nr(e.length)&&!!ur[rr(e)]},su=function(t){return function(e){return t(e)}},Oa=Da,Da=(Da=(
Ia=ba={exports:{}}).exports)&&!Da.nodeType&&Da,Da=(Pa=Da&&Ia&&!Ia.nodeType&&Ia)&&Pa.exports===Da,La=Da&&Oa.process,
Oa=function(){try{return Pa&&Pa.require&&Pa.require("util").types||La&&La.binding&&La.binding("util")}catch(e){}}(),
Ia.exports=Oa,Ia=vn,Oa=(vn=(Oa=ba.exports)&&Oa.isTypedArray)?su(vn):Ia,lr=yu,cr=ls,dr=Jt,hr=as.exports,_r=us,Er=vn=Oa,
Ia=Object.prototype,vr=Ia.hasOwnProperty,yu=function(e,t){var r,n=dr(e),i=!n&&cr(e),o=!n&&!i&&hr(e),s=!n&&!i&&!o&&Er(e),
a=n||i||o||s,u=a?lr(e.length,String):[],l=u.length;for(r in e)!t&&!vr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||_r(r,l))||u.push(r);return u},
pr=Object.prototype,Oa=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||pr)},
Va=Object.keys,za=Object,fr=Oa,Tr=Ia=function(e){return Va(za(e))},Oa=Object.prototype,Ar=Oa.hasOwnProperty,gr=it,Sr=qn,
Rr=yu,yr=function(e){var t,r;if(!fr(e))return Tr(e);for(r in t=[],Object(e))Ar.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Nr=Ia=function(e){return null!=e&&Sr(e.length)&&!gr(e)},mr=fu,wr=Ru,br=Cr=function(e){return(Nr(e)?Rr:yr)(e)}
,Ir=function(e){return mr(e,br,wr)},Oa=Object.prototype,Dr=Oa.hasOwnProperty,yu=function(e,t,r,n,i,o){var s,a,u,l,c,d,h,
_,E,v,p,f=1&r,T=Ir(e),A=T.length;if(A!=Ir(t).length&&!f)return!1;for(s=A;s--;)if(a=T[s],!(f?a in t:Dr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(u=!0,o.set(e,t),o.set(t,e),l=f;++s<A;){if(c=e[a=T[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){u=!1;break}l=l||"constructor"==a}
return u&&!l&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(u=!1),o.delete(e),o.delete(t),u},fu=uu(Wa,
"DataView"),Ru=Eu,Oa=uu(Wa,"Promise"),Eu=uu(Wa,"Set"),Wa=uu(Wa,"WeakMap"),Pr=et,Ur="[object Map]",Fr="[object Promise]",
$r="[object Set]",kr="[object WeakMap]",Mr="[object DataView]",jr=(Lr=Or)(Or=fu),Gr=Lr(Ru),Hr=Lr(Oa),Br=Lr(Eu),Jr=Lr(Wa)
,fu=Pr,(Or&&fu(new Or(new ArrayBuffer(1)))!=Mr||Ru&&fu(new Ru)!=Ur||Oa&&fu(Oa.resolve())!=Fr||Eu&&fu(new Eu
)!=$r||Wa&&fu(new Wa)!=kr)&&(fu=function(e){var t=Pr(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?Lr(e):""
)switch(e){case jr:return Mr;case Gr:return Ur;case Hr:return Fr;case Br:return $r;case Jr:return kr}return t}),xr=Ua,
qr=eu,Wr=Xa,Kr=yu,Vr=fu,zr=Jt,Xr=as.exports,Yr=vn,Qr="[object Arguments]",Zr="[object Array]",en="[object Object]",
eu=Object.prototype,tn=eu.hasOwnProperty,rn=function(e,t,r,n,i,o){var s,a,u=zr(e),l=zr(t),c=u?Zr:Vr(e),d=l?Zr:Vr(t),h=(
c=c==Qr?en:c)==en,l=(d=d==Qr?en:d)==en;if((d=c==d)&&Xr(e)){if(!Xr(t))return!1;h=!(u=!0)}return d&&!h?(o=o||new xr,u||Yr(
e)?qr(e,t,r,n,i,o):Wr(e,t,c,r,n,i,o)):1&r||(s=h&&tn.call(e,"__wrapped__"),a=l&&tn.call(t,"__wrapped__"),!s&&!a)?d&&(
o=o||new xr,Kr(e,t,r,n,i,o)):i(s?e.value():e,a?t.value():t,r,n,o=o||new xr)},on=Ua,sn=Xa=function e(t,r,n,i,o){
return t===r||(null==t||null==r||!nn(t)&&!nn(r)?t!=t&&r!=r:rn(t,r,n,i,e,o))},an=tt,un=yu=function(e){return e==e&&!an(e)
},ln=Cr,cn=function(e,t,r,n){var i,o,s,a,u,l,c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],
h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e)
)return!1}else if(u=new on,!(void 0===(l=n?n(s,a,o,e,t,u):l)?sn(a,s,3,n,u):l))return!1;return!0},dn=function(e){for(
var t,r,n=ln(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,un(r)];return n},hn=fu=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},as=function(t){var r=dn(t);return 1==r.length&&r[0][2]?hn(
r[0][0],r[0][1]):function(e){return e===t||cn(e,t,r)}},_n=et,En=nn=zt,pn=Jt,fn=vn=function(e){
return"symbol"==typeof e||En(e)&&"[object Symbol]"==_n(e)},Tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
An=/^\w*$/,eu=function(e,t){if(pn(e))return!1;var r=typeof e;return!(
"number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!fn(e))||An.test(e)||!Tn.test(e)||null!=t&&e in Object(t)},gn=bn,
Sn="Expected a function",l.Cache=gn,
Rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yn=/\\(\\)?/g,Wa=0
,Ka=(Wa=l(Wa=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Rn,function(e,t,r,n){i.push(
r?n.replace(yn,"$1"):t||e)}),i},function(e){return 500===Ka.size&&Ka.clear(),e})).cache,Nn=au,bn=(bn=cs
)?bn.prototype:void 0,wn=bn?bn.toString:void 0,In=bn=function e(t){if("string"==typeof t)return t;if(Cn(t))return Nn(t,e
)+"";if(mn(t))return wn?wn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Pn=Ua=Wa,Ln=Ua=function(e){
return null==e?"":In(e)},Un=mn=vn,jn=Fn=function(e,t){return Dn(e)?e:On(e,t)?[e]:Pn(Ln(e))},Gn=ls,Jn=qn,Wn=function(e,t
){return null!=e&&t in Object(e)},Kn=qn=function(e,t,r){for(var n,i,o=(t=jn(t,e)).length,s=!(n=-1);++n<o&&(i=xn(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&Jn(o)&&Bn(i,o)&&(Hn(e)||Gn(e))},Vn=Xa,
zn=Mn=function(e,t,r){return void 0===(t=null==e?void 0:kn(e,t))?r:t},Xn=function(e,t){return null!=e&&Kn(e,t,Wn)},Qn=yu
,Zn=fu,ti=kn=Xa=function(e,t){for(var r=0,n=(t=Fn(t,e)).length;null!=e&&r<n;)e=e[$n(t[r++])];return r&&r==n?e:void 0},
ri=function(t){return function(e){return null==e?void 0:e[t]}},ni=function(t){return function(e){return ti(e,t)}},
ii=Yn=On=eu,oi=ei=xn=$n=function(e){if("string"==typeof e||Un(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
si=as,ai=function(r,n){return Yn(r)&&Qn(n)?Zn(ei(r),n):function(e){var t=zn(e,r);return void 0===t&&t===n?Xn(e,r):Vn(n,t
,3)}},ui=yu=function(e){return e},li=Hn=Dn=Cn=Jt,ci=function(e){return ii(e)?ri(oi(e)):ni(e)},di=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},hi=Cr,pi=au,Ti=eu=function(e,n){
var i=-1,o=vi(e)?Array(e.length):[];return Ei(e,function(e,t,r){o[++i]=n(e,t,r)}),o},gi=function(e,t){return(Ai(e)?pi:Ti
)(e,fi(t))},Ri=Be,yi=vi=_i=Ia,Ni=Bn=us,Ci=tt,mi=Za,bi=function(e,n){var i;return Si(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Oi=function(e,t,r){var n=Ii(e)?mi:bi;return r&&Di(e,t,r)&&(t=void 0),n(e,wi(t))},Pi=Si=Ei=us=function(e,t){if(
null==e)return e;if(!_i(e))return e&&di(e,t,hi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););return e},
Li=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Ui=function(e,n){var i=!0
;return Pi(e,function(e,t,r){return i=!!n(e,t,r)}),i},Fi=wi=fi=fu=function(e){
return"function"==typeof e?e:null==e?ui:"object"==typeof e?li(e)?ai(e[0],e[1]):si(e):ci(e)},$i=Ii=Ai=Jt,
ki=Di=Za=function(e,t,r){if(!Ci(r))return!1;var n=typeof t;return!!("number"==n?yi(r)&&Ni(t,r.length
):"string"==n&&t in r)&&Ri(r[t],e)},Mi=function(e,t,r){var n=$i(e)?Li:Ui;return r&&ki(e,t,r)&&(t=void 0),n(e,Fi(t))},
ji=uu,as=function(){try{var e=ji(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Gi=ls,Bi=(uu=cs
)?uu.isConcatSpreadable:void 0,xi=function(e){return Hi(e)||Gi(e)||!!(Bi&&e&&e[Bi])},qi=Ji=Ya,Wi=ls=function e(t,r,n,i,o
){var s,a=-1,u=t.length;for(n=n||xi,o=o||[];++a<u;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):Ji(o,s):i||(o[o.length]=s)
;return o},Ki=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},Vi=Hi=Jt,zi=function(){
var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;)e[r-1]=arguments[r];return qi(Vi(t
)?Ki(t):[t],Wi(e,1))},Xi=fu,Yi=Ia,Qi=Cr,cs=function(o){return function(e,t,r){var n,i=Object(e);return Yi(e)||(n=Xi(t),
e=Qi(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},uu=function(e,t,r,n){for(var i=e.length,
o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Zi=/\s/,eo=function(e){for(var t=e.length;t--&&Zi.test(
e.charAt(t)););return t},to=/^\s+/,ro=Ya=function(e){return e&&e.slice(0,eo(e)+1).replace(to,"")},no=tt,io=vn,
oo=/^[-+]0x[0-9a-f]+$/i,so=/^0b[01]+$/i,ao=/^0o[0-7]+$/i,uo=parseInt,lo=function(e){var t;return"number"==typeof e?e:io(
e)?NaN:(no(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=no(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=ro(e),(
t=so.test(e))||ao.test(e)?uo(e.slice(2),t?2:8):oo.test(e)?NaN:+e))},co=17976931348623157e292,ho=function(e){return e?(
e=lo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*co:0===e?e:0},_o=uu,Eo=fu,vo=Ia=function(e){var t=ho(e),e=t%1
;return t==t?e?t-e:t:0},po=Math.max,cs=cs(fo=function(e,t,r){var n=null==e?0:e.length;return n?((r=null==r?0:vo(r))<0&&(
r=po(n+r,0)),_o(e,Eo(t),r)):-1}),To=cs,Ao=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;
)r=t(r,e[i],i,e);return r},go=us,Ro=function(e,n,i,o,t){return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},
No=function(e,t,r){var n=yo(e)?Ao:Ro,i=arguments.length<3;return n(e,So(t),r,i,go)},cs=function(e,t,r){var n,i=-1,
o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},
Co=uu,mo=function(e){return e!=e},wo=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},
uu=function(e,t,r){return t==t?wo(e,t,r):Co(e,mo,r)},bo=vn,Io=function(e,t){var r,n,i,o,s,a,u,l;if(e!==t){if(
r=void 0!==e,n=null===e,i=e==e,o=bo(e),s=void 0!==t,a=null===t,u=t==t,l=bo(t),
!a&&!l&&!o&&t<e||o&&s&&u&&!a&&!l||n&&s&&u||!r&&u||!i)return 1;if(!n&&!o&&!l&&e<t||l&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!u
)return-1}return 0},Do=au,Oo=Xa,Po=So=fu,Lo=eu,Uo=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value
;return e},Fo=su,$o=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,u=r.length;++i<a;)if(n=Io(o[i],
s[i]))return u<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},ko=yu,Mo=yo=Jt,eu=function(e,n,r){var i
;return n=n.length?Do(n,function(t){return Mo(t)?function(e){return Oo(e,1===t.length?t[0]:t)}:t}):[ko],i=-1,n=Do(n,Fo(
Po)),e=Lo(e,function(t,e,r){return{criteria:Do(n,function(e){return e(t)}),index:++i,value:t}}),Uo(e,function(e,t){
return $o(e,t,r)})},jo=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:
return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Go=Math.max,su=function(o,s,a){
return s=Go(void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Go(t.length-s,0),i=Array(n);++r<n;
)i[r]=t[s+r];for(r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),jo(o,this,e)}},Ho=function(e){return function(){
return e}},Bo=as,Jo=Date.now,Ja=Bo?function(e,t){return Bo(e,"toString",{configurable:!0,enumerable:!1,value:Ho(t),
writable:!0})}:yu,xo=ls,qo=eu,Wo=Za,function(){var e=Jo(),t=16-e+ +qa;if(qa=e,0<t){if(800<=++xa)return}else xa=0
;Ja.apply(void 0,arguments)}(su(Xa=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Wo(e,t[0],t[1])?t=[
]:2<r&&Wo(t[0],t[1],t[2])&&(t=[t[0]]),qo(e,xo(t,1),[])},void(qa=xa=0),yu),Xa+""),Vo=gu,zo=function(e,n){var i=[]
;return Ko(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Xo=fu,Qo=function(e,t){return(Yo(e)?Vo:zo)(e,Xo(t))},Zo=yu,
es=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},ts=Ko=us,rs=function(e){
return"function"==typeof e?e:Zo},ns=Yo=Jt,is=function(e,t){return(ns(e)?es:ts)(e,rs(t))},os=cs,su=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:os(e,t,r)},ss=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),as=function(e){return ss.test(e)}
,(ls=ba.exports)&&ls.isRegExp,eu=function(e){return e.split("")},gu="["+(Za="\\ud800-\\udfff")+"]",cs=(
fu="[\\ufe0e\\ufe0f]?")+"(?:"+(yu="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(us="\\ud83c[\\udffb-\\udfff]"
)+")?(?:\\u200d(?:"+[ba="[^"+Za+"]",ls="(?:\\ud83c[\\udde6-\\uddff]){2}",Za="[\\ud800-\\udbff][\\udc00-\\udfff]"].join(
"|")+")"+fu+"(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",gu="(?:"+[ba+yu+"?",yu,ls,
Za,gu].join("|")+")",ds=RegExp(us+"(?="+us+")|"+gu+cs,"g"),hs=eu,_s=as,Es=function(e){return e.match(ds)||[]},ps=vs=uu,
fs=bn,Ts=Ya,As=su,gs=function(e,t){for(var r=e.length;r--&&-1<vs(t,e[r],0););return r},Ss=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<ps(t,e[r],0););return r},Rs=function(e){return(_s(e)?Es:hs)(e)},ys=Ua,Ns=function(e,t,r){return(
e=ys(e))&&(r||void 0===t)?Ts(e):e&&(t=fs(t))?(r=Rs(e),e=Rs(t),t=Ss(r,e),e=gs(r,e)+1,As(r,t,e).join("")):e},
su=Object.prototype,Cs=su.hasOwnProperty,ms=function(e,t){return null!=e&&Cs.call(e,t)},ws=qn,bs=function(e,t){
return null!=e&&ws(e,t,ms)},Os="[object Boolean]",Ps=function(e){return!0===e||!1===e||Ds(e)&&Is(e)==Os},Ls=function(e){
return null===e},Fs=Jt,ks="[object String]",Ms=function(e){return"string"==typeof e||!Fs(e)&&$s(e)&&Us(e)==ks},
js=Us=Is=et,Gs=$s=Ds=zt,Hs="[object Number]",Bs=function(e){return"number"==typeof e||Gs(e)&&js(e)==Hs},xs=function(e){
return"number"==typeof e&&e==Js(e)},qs=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),
e},Ws=bn,Ks=Js=Ia,Vs=Ua,zs=function(e,t,r){return e=Vs(e),r=null==r?0:qs(Ks(r),0,e.length),t=Ws(t),e.slice(r,r+t.length
)==t},Xs=au,Ys=function(t,e){return Xs(e,function(e){return t[e]})},Qs=Cr,Zs=function(e){return null==e?[]:Ys(e,Qs(e))},
Ua=Array.prototype,ea=Ua.join,ta=function(e,t){return null==e?"":ea.call(e,t)},(au=ra=ra||{})[au.DEBUG=0]="DEBUG",
au[au.INFO=1]="INFO",au[au.WARN=2]="WARN",au[au.ERROR=3]="ERROR",au[au.NONE=4]="NONE",Ua=ra,Fa=null!==(Fa=function(e){
if(e){if(function(){switch(e){case ra.DEBUG:case ra.INFO:case ra.WARN:case ra.ERROR:case ra.NONE:return 1;default:return
}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return ra.DEBUG;case"INFO":return ra.INFO;case"WARN":
case"WARNING":return ra.WARN;case"ERR":case"ERROR":return ra.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return ra.NONE;default:return}}}(null===(au=process)||void 0===au||null===(Fa=au.env
)||void 0===Fa?void 0:Fa.PIPELINE_LOG_LEVEL))&&void 0!==Fa?Fa:Ua.INFO;const Nu=null!==(Ua=function(e){if(void 0!==e
)return`${e}`}(null===(Ua=process)||void 0===Ua||null===(Je=Ua.env)||void 0===Je?void 0:Je.PIPELINE_AUTHENTICATION)
)&&void 0!==Ua?Ua:"";class Cu{constructor(e,t){a(this,"_logger",void 0),a(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class mu{
static setLogLevel(e){this._level=e}static setLogger(e){if(!e)throw new TypeError("The logger was not defined")
;this._logger=e}static debug(...e){this._level<=ra.DEBUG&&this._logger.debug(...e)}static info(...e){
this._level<=ra.INFO&&this._logger.info(...e)}static warn(...e){this._level<=ra.WARN&&this._logger.warn(...e)}
static error(...e){this._level<=ra.ERROR&&this._logger.error(...e)}static createLogger(e){return new Cu(e,mu)}}a(mu,
"_level",ra.DEBUG),a(mu,"_logger",console),(Ua=na={})[Ua.HTTP=0]="HTTP",Ua[Ua.LOCAL=1]="LOCAL",
Ua[Ua.MATRIX_ROOM=2]="MATRIX_ROOM",ia=na,(Ua=oa={})[Ua.NONE=0]="NONE",Ua[Ua.BASIC_AUTH=1]="BASIC_AUTH",
Ua[Ua.BEARER_AUTH=2]="BEARER_AUTH",sa=oa;class wu{static parseRunnerAuthentication(e,t){var r;return void 0===t?null!==(
r=M(e))&&void 0!==r?r:$(e):null!==(r=M(e,t))&&void 0!==r?r:$(e,t)}}class bu{static parseRunnerResource(e){var t
;return null!==(t=null!==(t=function(e){var t;if(e)return N(t=e)&&D(t,["type","url","authentication"])&&(
null==t?void 0:t.type)===ia.HTTP&&p(null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||U(
null==t?void 0:t.authentication))?e:(t=(e=Ns(`${e}`)).toLowerCase(),zs(t,"http:")||zs(t,"https:")?(t=new URL(e),
t=null!==(t=wu.parseRunnerAuthentication(decodeURIComponent(t.username),decodeURIComponent(t.password))
)&&void 0!==t?t:wu.parseRunnerAuthentication(Nu),{type:ia.HTTP,url:e,auth:t}):void 0)}(e))&&void 0!==t?t:function(t){if(
t){if(N(i=t)&&D(i,["type","id","name","homeserver","authentication"])&&(null==i?void 0:i.type)===ia.MATRIX_ROOM&&p(
null==i?void 0:i.id)&&p(null==i?void 0:i.name)&&p(null==i?void 0:i.homeserver)&&(v(null==i?void 0:i.authentication)||U(
null==i?void 0:i.authentication)))return t;let e=(t=Ns(`${t}`)).toLowerCase();if(zs(e,"matrix://")){var r=new URL(t),
n=null!==(i=wu.parseRunnerAuthentication(decodeURIComponent(r.username),decodeURIComponent(r.password))
)&&void 0!==i?i:wu.parseRunnerAuthentication(Nu),i=`${r.host}`;const o=`${r.pathname}`.split("/");o.shift()
;const s=decodeURIComponent(null!==(r=o.shift())&&void 0!==r?r:"");return 0===(r=0<=s.indexOf(":")?s:`${s}:${i}`
).length?void 0:{type:ia.MATRIX_ROOM,homeserver:i,room:"!"===r[0]||"#"===r[0]?r:`#${r}`,authentication:n}}return zs(e,
"matrix:")&&(t=t.substr("matrix:".length),e=e.substr("matrix:".length)),t=decodeURIComponent(t),e=t.toLowerCase(),!zs(e,
"!")&&!zs(e,"#")||(n=t.indexOf(":"))<0||!(n=t.substr(n+1))?void 0:{type:ia.MATRIX_ROOM,homeserver:n,room:t,
authentication:wu.parseRunnerAuthentication(Nu)}}}(e))&&void 0!==t?t:function(e){var t;if(e)return N(t=e)&&D(t,["type",
"path"])&&(null==t?void 0:t.type)===ia.LOCAL&&p(null==t?void 0:t.path)?e:(e=Ns(`${e}`),(e=zs(e.toLowerCase(),"file://"
)?e.substr("file://".length):e)?{type:ia.LOCAL,path:e}:void 0)}(e)}}(Ua=aa={})[Ua.OK=0]="OK",
Ua[Ua.GENERAL_ERRORS=1]="GENERAL_ERRORS",Ua[Ua.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",
Ua[Ua.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",Ua[Ua.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",
Ua[Ua.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Ua[Ua.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Ua[Ua.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Ua[Ua.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Ua[Ua.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Ua[Ua.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Ua[Ua.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Ua[Ua.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Ua[Ua.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Ua[Ua.FATAL_ERROR=14]="FATAL_ERROR",Ua[Ua.USAGE=64]="USAGE",Ua[Ua.DATAERR=65]="DATAERR",Ua[Ua.NOINPUT=66]="NOINPUT",
Ua[Ua.NOUSER=67]="NOUSER",Ua[Ua.NOHOST=68]="NOHOST",Ua[Ua.UNAVAILABLE=69]="UNAVAILABLE",Ua[Ua.SOFTWARE=70]="SOFTWARE",
Ua[Ua.OSERR=71]="OSERR",Ua[Ua.OSFILE=72]="OSFILE",Ua[Ua.CANTCREAT=73]="CANTCREAT",Ua[Ua.IOERR=74]="IOERR",
Ua[Ua.TEMPFAIL=75]="TEMPFAIL",Ua[Ua.PROTOCOL=76]="PROTOCOL",Ua[Ua.NOPERM=77]="NOPERM",Ua[Ua.CONFIG=78]="CONFIG",
Ua[Ua.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Ua[Ua.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Ua[Ua.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Ua[Ua.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Ua[Ua.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Ua[Ua.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",ua=aa;const Iu=null!==(Ua=P("1.0.2"))&&void 0!==Ua?Ua:"?"
,Du=null!==(Ua=P("production"))&&void 0!==Ua?Ua:"development",Ou=null!==(Ua=P("2021-08-28T21:59:09.126Z")
)&&void 0!==Ua?Ua:"",Pu=null===(Ua=O(""))||void 0===Ua||Ua,Lu=null===(Ua=O(""))||void 0===Ua||Ua,Uu=null!==(Ua=O("")
)&&void 0!==Ua&&Ua,Fu=null===(Ua=O(""))||void 0===Ua||Ua;Ua="production"===Du;const $u="test"===Du,ku=!Ua&&!$u;(Ua=la={}
)[Ua.OPTIONS=0]="OPTIONS",Ua[Ua.GET=1]="GET",Ua[Ua.POST=2]="POST",Ua[Ua.PUT=3]="PUT",Ua[Ua.DELETE=4]="DELETE",
Ua[Ua.PATCH=5]="PATCH",Ha=la;const Mu="WINDOW"===(Ba=null!==(Ba=null!==(xe=null===(Ua=process)||void 0===Ua||null===(
xe=Ua.env)||void 0===xe?void 0:xe.NOR_REQUEST_CLIENT_MODE)&&void 0!==xe?xe:null===(Ba=process)||void 0===Ba||null===(
qe=Ba.env)||void 0===qe?void 0:qe.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==Ba?Ba:"")||!(
"undefined"==typeof window||!window.fetch),ju="NODE"===Ba||!Mu;class Gu{static async getRequestDataAsBuffer(n){
return new Promise((e,t)=>{const r=[];n.on("data",e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(
Buffer.concat(r))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){
const r=await Gu.getRequestDataAsBuffer(e);return r.toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await Gu.getRequestDataAsString(e)))return nu.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await Gu.getRequestDataAsString(e)))return JSON.parse(e)}}(Ba=ca={})[Ba.Continue=100]="Continue",
Ba[Ba.SwitchingProtocols=101]="SwitchingProtocols",Ba[Ba.Processing=102]="Processing",Ba[Ba.CheckPoint=103]="CheckPoint"
,Ba[Ba.OK=200]="OK",Ba[Ba.Created=201]="Created",Ba[Ba.Accepted=202]="Accepted",
Ba[Ba.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",Ba[Ba.NoContent=204]="NoContent",
Ba[Ba.ResetContent=205]="ResetContent",Ba[Ba.PartialContent=206]="PartialContent",Ba[Ba.MultiStatus=207]="MultiStatus",
Ba[Ba.AlreadyReported=208]="AlreadyReported",Ba[Ba.IMUsed=226]="IMUsed",Ba[Ba.MultipleChoices=300]="MultipleChoices",
Ba[Ba.MovedPermanently=301]="MovedPermanently",Ba[Ba.Found=302]="Found",Ba[Ba.SeeOther=303]="SeeOther",
Ba[Ba.NotModified=304]="NotModified",Ba[Ba.TemporaryRedirect=307]="TemporaryRedirect",
Ba[Ba.PermanentRedirect=308]="PermanentRedirect",Ba[Ba.BadRequest=400]="BadRequest",
Ba[Ba.Unauthorized=401]="Unauthorized",Ba[Ba.PaymentRequired=402]="PaymentRequired",Ba[Ba.Forbidden=403]="Forbidden",
Ba[Ba.NotFound=404]="NotFound",Ba[Ba.MethodNotAllowed=405]="MethodNotAllowed",Ba[Ba.NotAcceptable=406]="NotAcceptable",
Ba[Ba.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",Ba[Ba.RequestTimeout=408]="RequestTimeout",
Ba[Ba.Conflict=409]="Conflict",Ba[Ba.Gone=410]="Gone",Ba[Ba.LengthRequired=411]="LengthRequired",
Ba[Ba.PreconditionFailed=412]="PreconditionFailed",Ba[Ba.PayloadTooLarge=413]="PayloadTooLarge",
Ba[Ba.URITooLong=414]="URITooLong",Ba[Ba.UnsupportedMediaType=415]="UnsupportedMediaType",
Ba[Ba.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",Ba[Ba.ExpectationFailed=417]="ExpectationFailed",
Ba[Ba.IAmATeapot=418]="IAmATeapot",Ba[Ba.UnprocessableEntity=422]="UnprocessableEntity",Ba[Ba.Locked=423]="Locked",
Ba[Ba.FailedDependency=424]="FailedDependency",Ba[Ba.TooEarly=425]="TooEarly",
Ba[Ba.UpgradeRequired=426]="UpgradeRequired",Ba[Ba.PreconditionRequired=428]="PreconditionRequired",
Ba[Ba.TooManyRequests=429]="TooManyRequests",Ba[Ba.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
Ba[Ba.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",Ba[Ba.InternalError=500]="InternalError",
Ba[Ba.InternalServerError=500]="InternalServerError",Ba[Ba.NotImplemented=501]="NotImplemented",
Ba[Ba.BadGateway=502]="BadGateway",Ba[Ba.ServiceUnavailable=503]="ServiceUnavailable",
Ba[Ba.GatewayTimeout=504]="GatewayTimeout",Ba[Ba.HttpVersionNotSupported=505]="HttpVersionNotSupported",
Ba[Ba.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",Ba[Ba.InsufficientStorage=507]="InsufficientStorage",
Ba[Ba.LoopDetected=508]="LoopDetected",Ba[Ba.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
Ba[Ba.NotExtended=510]="NotExtended",Ba[Ba.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",da=ca,(
$a=$a||{}).ERROR="error",ha=$a;class Hu extends Error{constructor(e,t=void 0,r=void 0,n=void 0){super(t||function(e){
switch(e){case ca.Continue:return"Continue";case ca.SwitchingProtocols:return"Switching Protocols";case ca.Processing:
return"Processing";case ca.CheckPoint:return"Check Point";case ca.OK:return"OK";case ca.Created:return"Created"
;case ca.Accepted:return"Accepted";case ca.NonAuthoritativeInformation:return"Non-Authoritative Information"
;case ca.NoContent:return"No Content";case ca.ResetContent:return"Reset Content";case ca.PartialContent:
return"Partial Content";case ca.MultiStatus:return"Multi Status";case ca.AlreadyReported:return"Already Reported"
;case ca.IMUsed:return"IM Used";case ca.MultipleChoices:return"Multiple Choices";case ca.MovedPermanently:
return"Moved Permanently";case ca.Found:return"Found";case ca.SeeOther:return"See Other";case ca.NotModified:
return"Not Modified";case ca.TemporaryRedirect:return"Temporary Redirect";case ca.PermanentRedirect:
return"Permanent Redirect";case ca.BadRequest:return"Bad Request";case ca.Unauthorized:return"Unauthorized"
;case ca.PaymentRequired:return"Payment Required";case ca.Forbidden:return"Forbidden";case ca.NotFound:return"Not Found"
;case ca.MethodNotAllowed:return"Method Not Allowed";case ca.NotAcceptable:return"Not Acceptable"
;case ca.ProxyAuthenticationRequired:return"Proxy Authentication Required";case ca.RequestTimeout:
return"Request Timeout";case ca.Conflict:return"Conflict";case ca.Gone:return"Gone";case ca.LengthRequired:
return"Length Required";case ca.PreconditionFailed:return"Precondition Failed";case ca.PayloadTooLarge:
return"Payload Too Large";case ca.URITooLong:return"URI Too Long";case ca.UnsupportedMediaType:
return"Unsupported Media Type";case ca.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case ca.ExpectationFailed:return"Expectation Failed";case ca.IAmATeapot:return"I Am a Teapot"
;case ca.UnprocessableEntity:return"Unprocessable Entity";case ca.Locked:return"Locked";case ca.FailedDependency:
return"Failed Dependency";case ca.TooEarly:return"Too Early";case ca.UpgradeRequired:return"Upgrade Required"
;case ca.PreconditionRequired:return"Precondition Required";case ca.TooManyRequests:return"Too Many Requests"
;case ca.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case ca.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case ca.InternalServerError:return"Internal Server Error";case ca.NotImplemented:
return"Not Implemented";case ca.BadGateway:return"Bad Gateway";case ca.ServiceUnavailable:return"Service Unavailable"
;case ca.GatewayTimeout:return"Gateway Timeout";case ca.HttpVersionNotSupported:return"Http Version Not Supported"
;case ca.VariantAlsoNegotiates:return"Variant Also Negotiates";case ca.InsufficientStorage:return"Insufficient Storage"
;case ca.LoopDetected:return"Loop Detected";case ca.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case ca.NotExtended:return"Not Extended";case ca.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),a(this,"status",void 0),a(this,"method",void 0),a(this,"url",
void 0),a(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n}valueOf(){return this.status}toString(){
return`${this.status} ${this.message}`}toJSON(){return{type:ha.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}}const Bu=ju?require("fs"
).promises:void 0,Ju=mu.createLogger("NodeRequestClient");class xu{constructor(e,t){a(this,"_http",void 0),a(this,
"_https",void 0),this._http=e,this._https=t}async jsonRequest(e,t,r,n){switch(e){case Ha.GET:return this._getJson(t,r,n)
;case Ha.POST:return this._postJson(t,r,n);case Ha.PATCH:return this._patchJson(t,r,n);case Ha.PUT:return this._putJson(
t,r,n);case Ha.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Node]RequestClient: Unsupported method: ${e}`)}}async _checkSocketFile(t){try{const e=await Bu.stat(t)
;return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void Ju.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Ju.debug("_checkSocketFile: ENOENT: ",e);throw Ju.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e)
;return!0===t?e:!1!==t&&"/"!==(t=ou.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){
const a=e?JSON.stringify(e)+"\n":void 0,u=new iu.default.URL(o);let l;const c=null!==(
t=null===u||void 0===u?void 0:u.protocol)&&void 0!==t?t:"";if("unix:"===c||"socket:"===c){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r)))throw new TypeError(
`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==u.search?u.search:""}`;s=d(d({},s),{},{socketPath:e,path:t}),o="",l=this._http
}else l="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!l)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=d(d({},s),{},{hostname:u.hostname,
port:null!==(i=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:u.pathname+u.search})),e=l.request(s,e=>{n?Ju.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Ju.warn(
"Warning! Request had already ended when the response was received."),Ju.debug("Error from event: ",e)):(Ju.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Ju.warn(
"Warning! Request had already ended when the response was received."),Ju.debug("Exception: ",e)):(Ju.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Gu.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=d(d({},n.headers),t)),this._request(Ha.GET,e,n,r).then(xu._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(Ha.PUT,e,n,r).then(xu._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),this._request(Ha.POST,e,n,r).then(
xu._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=d(d({},n.headers),t)),this._request(Ha.PATCH,e,n,r).then(xu._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=d(d({},n.headers),t)),
this._request(Ha.DELETE,e,n,r).then(xu._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw Ju.error(`Unsuccessful response with status ${t}: `,e),new Hu(t,`Error ${t} for ${H(e.method
)} ${e.url}`,e.method,e.url);return e.body}}class qu{constructor(e){a(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,
t,r,n){switch(e){case Ha.GET:return this._getJson(t,r,n);case Ha.POST:return this._postJson(t,r,n);case Ha.PUT:
return this._putJson(t,r,n);case Ha.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>qu._successResponse(e,Ha.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>qu._successResponse(e,Ha.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>qu._successResponse(e,Ha.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=d(d({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>qu._successResponse(e,Ha.DELETE))}static _successResponse(e,t){var r,
n=e.status;if(!e.ok||n<200||400<=n)throw r=e.url,new Hu(n,`${n} ${e.statusText} for ${H(t)} ${r}`,t,r);return e.json()}}
const Wu=ju?require("http"):void 0,Ku=ju?require("https"):void 0,Vu=mu.createLogger("RequestClient");class zu{
static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static getJson(e,t){
return this._client.jsonRequest(Ha.GET,e,t)}static postJson(e,t,r){return Vu.debug(".postJson: ",e,t,r),
this._client.jsonRequest(Ha.POST,e,r,t)}static patchJson(e,t,r){return Vu.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(Ha.PATCH,e,r,t)}static putJson(e,t,r){return Vu.debug(".putJson: ",e,t,r),
this._client.jsonRequest(Ha.PUT,e,r,t)}static deleteJson(e,t,r){return Vu.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(Ha.DELETE,e,t,r)}static _initClient(){if(Mu)return Vu.debug("Detected browser environment"),
new qu(window.fetch.bind(window));if(ju)return new xu(Wu,Ku);throw new TypeError(
"Could not detect request client implementation")}}a(zu,"_client",zu._initClient());class Xu{getName(){return this._name
}constructor(e){a(this,"_name",void 0),a(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){
this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return bs(this._callbacks,e)}triggerEvent(t,...r){var e
;this.hasCallbacks(t)?(e=this._callbacks[t],is(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Qo(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
$a=ka=ka||{})[$a.CONSTRUCTED=0]="CONSTRUCTED",$a[$a.STARTED=1]="STARTED",$a[$a.PAUSED=2]="PAUSED",
$a[$a.CANCELLED=3]="CANCELLED",$a[$a.FINISHED=4]="FINISHED",$a[$a.FAILED=5]="FAILED",_a=ka;const Yu=mu.createLogger(
"JobController");(ka=Ea={}).JOB_CHANGED="JobController:jobChanged",ka.JOB_STARTED="JobController:jobStarted",
ka.JOB_PAUSED="JobController:jobPaused",ka.JOB_RESUMED="JobController:jobResumed",
ka.JOB_CANCELLED="JobController:jobCancelled",ka.JOB_FAILED="JobController:jobFailed",
ka.JOB_FINISHED="JobController:jobFinished";class Qu{constructor(e,t=[]){if(a(this,"_observer",void 0),a(this,"_name",
void 0),a(this,"_steps",void 0),a(this,"_changedCallback",void 0),a(this,"_state",void 0),a(this,"_stepDestructors",
void 0),a(this,"_current",void 0),!B(e))throw new TypeError(`Job name invalid: ${e}`);if(!h(t,X,1))throw new TypeError(
`Job#${e} must have at least one step`);this._current=0,this._name=e,this._steps=t,this._observer=new Xu(
`JobController#${this._name}`),this._state=_a.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),
this._stepDestructors=gi(t,e=>e.onChanged(this._changedCallback))}getState(){return this._state}getName(){
return this._name}destroy(){this._observer.destroy(),this._stepDestructors=Qo(this._stepDestructors,(e,t)=>{
const r=this._steps[t];try{e()}catch(e){Yu.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)
}return!1})}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}toJSON(){
return{type:"JobController",state:this._state,name:this._name,steps:gi(this._steps,e=>e.toJSON())}}isRunning(){switch(
this._state){case _a.STARTED:return!0;case _a.PAUSED:case _a.CONSTRUCTED:case _a.CANCELLED:case _a.FINISHED:
case _a.FAILED:return!1}}isStarted(){switch(this._state){case _a.PAUSED:case _a.STARTED:return!0;case _a.CONSTRUCTED:
case _a.CANCELLED:case _a.FINISHED:case _a.FAILED:return!1}}isPaused(){switch(this._state){case _a.PAUSED:return!0
;case _a.STARTED:case _a.CONSTRUCTED:case _a.CANCELLED:case _a.FINISHED:case _a.FAILED:return!1}}isCancelled(){switch(
this._state){case _a.CANCELLED:return!0;case _a.PAUSED:case _a.STARTED:case _a.CONSTRUCTED:case _a.FINISHED:
case _a.FAILED:return!1}}isFinished(){switch(this._state){case _a.FINISHED:case _a.FAILED:case _a.CANCELLED:return!0
;case _a.CONSTRUCTED:case _a.PAUSED:case _a.STARTED:return!1}}isFailed(){switch(this._state){case _a.FAILED:return!0
;case _a.CONSTRUCTED:case _a.FINISHED:case _a.PAUSED:case _a.STARTED:case _a.CANCELLED:return!1}}isSuccessful(){switch(
this._state){case _a.FINISHED:return!0;case _a.FAILED:case _a.CONSTRUCTED:case _a.PAUSED:case _a.STARTED:
case _a.CANCELLED:return!1}}start(){if(this._state!==_a.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Yu.info(`Starting job ${this._name}`),this._state=_a.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(Ea.JOB_STARTED)&&this._observer.triggerEvent(
Ea.JOB_STARTED,this),this._observer.hasCallbacks(Ea.JOB_CHANGED)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Yu.info(
`Pausing job ${this._name}`),this._state=_a.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
Ea.JOB_PAUSED)&&this._observer.triggerEvent(Ea.JOB_PAUSED,this),this._observer.hasCallbacks(Ea.JOB_CHANGED
)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Yu.info(`Resuming job ${this._name}`),this._state=_a.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(Ea.JOB_RESUMED)&&this._observer.triggerEvent(
Ea.JOB_RESUMED,this),this._observer.hasCallbacks(Ea.JOB_CHANGED)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this),this}
stop(){if(this._state!==_a.STARTED)throw new Error(`Job#${this._name} was not started`);return Yu.info(
`Stopping job ${this._name}`),this._state=_a.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
Ea.JOB_CANCELLED)&&this._observer.triggerEvent(Ea.JOB_CANCELLED,this),this._observer.hasCallbacks(Ea.JOB_CHANGED
)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this),this}onCancelled(e){return this.on(Ea.JOB_CANCELLED,e)}onChanged(e){
return this.on(Ea.JOB_CHANGED,e)}onFailed(e){return this.on(Ea.JOB_FAILED,e)}onFinished(e){return this.on(
Ea.JOB_FINISHED,e)}onPaused(e){return this.on(Ea.JOB_PAUSED,e)}onResumed(e){return this.on(Ea.JOB_RESUMED,e)}onStarted(e
){return this.on(Ea.JOB_STARTED,e)}getErrorString(){return gi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return gi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Yu.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=_a.FAILED,this._observer.hasCallbacks(Ea.JOB_FAILED)&&this._observer.triggerEvent(
Ea.JOB_FAILED,this)):i.isCancelled()?(this._state=_a.CANCELLED,this._observer.hasCallbacks(Ea.JOB_CANCELLED
)&&this._observer.triggerEvent(Ea.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=_a.STARTED,this._steps[this._current].start(),n===_a.PAUSED&&this._observer.hasCallbacks(Ea.JOB_RESUMED
)&&this._observer.triggerEvent(Ea.JOB_RESUMED,this)):(this._state=_a.FINISHED,this._observer.hasCallbacks(
Ea.JOB_FINISHED)&&this._observer.triggerEvent(Ea.JOB_FINISHED,this))),this._observer.hasCallbacks(Ea.JOB_CHANGED
)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=_a.PAUSED,
this._observer.hasCallbacks(Ea.JOB_PAUSED)&&this._observer.triggerEvent(Ea.JOB_PAUSED,this),this._observer.hasCallbacks(
Ea.JOB_CHANGED)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=_a.STARTED,this._observer.hasCallbacks(Ea.JOB_RESUMED)&&this._observer.triggerEvent(Ea.JOB_RESUMED,this),
this._observer.hasCallbacks(Ea.JOB_CHANGED)&&this._observer.triggerEvent(Ea.JOB_CHANGED,this))}}a(Qu,"Event",Ea)
;const Zu=mu.createLogger("StageController");(ka=va={}).STAGE_STARTED="StageController:stageStarted",
ka.STAGE_PAUSED="StageController:stagePaused",ka.STAGE_RESUMED="StageController:stageResumed",
ka.STAGE_FINISHED="StageController:stageFinished",ka.STAGE_FAILED="StageController:stageFailed",
ka.STAGE_CANCELLED="StageController:stageCancelled",ka.STAGE_CHANGED="StageController:stageChanged";class el{
constructor(e,t){if(a(this,"_observer",void 0),a(this,"_name",void 0),a(this,"_jobs",void 0),a(this,"_changedCallback",
void 0),a(this,"_state",void 0),a(this,"_jobDestructors",void 0),!B(e))throw new TypeError(`Stage name invalid: ${e}`)
;if(!h(t,Y,1))throw new TypeError(`Stage#${e} must have at least one job`);this._state=_a.CONSTRUCTED,this._name=e,
this._jobs=t,this._observer=new Xu(`StageController#${this._name}`),this._changedCallback=this._onChanged.bind(this),
this._jobDestructors=gi(t,e=>e.onChanged(this._changedCallback))}getState(){return this._state}getName(){
return this._name}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`StageController#${this._name}`}toJSON(){return{type:"StageController",state:this._state,name:this._name,jobs:gi(
this._jobs,e=>e.toJSON())}}isCancelled(){switch(this._state){case _a.CANCELLED:return!0;case _a.FINISHED:case _a.FAILED:
case _a.CONSTRUCTED:case _a.PAUSED:case _a.STARTED:return!1}}isFailed(){switch(this._state){case _a.FAILED:return!0
;case _a.CANCELLED:case _a.FINISHED:case _a.CONSTRUCTED:case _a.PAUSED:case _a.STARTED:return!1}}isFinished(){switch(
this._state){case _a.FINISHED:case _a.FAILED:case _a.CANCELLED:return!0;case _a.CONSTRUCTED:case _a.PAUSED:
case _a.STARTED:return!1}}isPaused(){switch(this._state){case _a.PAUSED:return!0;case _a.FAILED:case _a.CANCELLED:
case _a.FINISHED:case _a.CONSTRUCTED:case _a.STARTED:return!1}}isRunning(){switch(this._state){case _a.STARTED:return!0
;case _a.PAUSED:case _a.FAILED:case _a.CANCELLED:case _a.FINISHED:case _a.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case _a.PAUSED:case _a.STARTED:return!0;case _a.FAILED:case _a.CANCELLED:case _a.FINISHED:
case _a.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case _a.FINISHED:return!0;case _a.PAUSED:
case _a.STARTED:case _a.FAILED:case _a.CANCELLED:case _a.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
va.STAGE_CANCELLED,e)}onChanged(e){return this.on(va.STAGE_CHANGED,e)}onFailed(e){return this.on(va.STAGE_FAILED,e)}
onFinished(e){return this.on(va.STAGE_FINISHED,e)}onPaused(e){return this.on(va.STAGE_PAUSED,e)}onResumed(e){
return this.on(va.STAGE_RESUMED,e)}onStarted(e){return this.on(va.STAGE_STARTED,e)}start(){if(
this._state!==_a.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Zu.info(
`Starting stage ${this._name}`),this._state=_a.STARTED,Qo(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Zu.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=_a.FAILED,
this._observer.hasCallbacks(va.STAGE_FAILED)&&this._observer.triggerEvent(va.STAGE_FAILED,this)
):this._observer.hasCallbacks(va.STAGE_STARTED)&&this._observer.triggerEvent(va.STAGE_STARTED,this),
this._observer.hasCallbacks(va.STAGE_CHANGED)&&this._observer.triggerEvent(va.STAGE_CHANGED,this),this}pause(){if(
this._state===_a.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Zu.info(`Pausing stage ${this._name}`)
,this._state=_a.PAUSED;var e=Qo(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Zu.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Zu.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(va.STAGE_PAUSED
)&&this._observer.triggerEvent(va.STAGE_PAUSED,this),this._observer.hasCallbacks(va.STAGE_CHANGED
)&&this._observer.triggerEvent(va.STAGE_CHANGED,this),this}resume(){if(this._state===_a.STARTED)throw new Error(
`Stage#${this._name} was already started`);Zu.info(`Resuming stage ${this._name}`),this._state=_a.STARTED;var e=Qo(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Zu.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Zu.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(va.STAGE_RESUMED
)&&this._observer.triggerEvent(va.STAGE_RESUMED,this),this._observer.hasCallbacks(va.STAGE_CHANGED
)&&this._observer.triggerEvent(va.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Zu.info(`Stopping stage ${this._name}`),this._state=_a.CANCELLED;var e=Qo(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Zu.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Zu.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return gi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return gi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Qo(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Zu.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=g(this._jobs,e=>e.isFailed()),n=g(this._jobs,
e=>e.isCancelled()),r&&this._state!==_a.FAILED?(this._state=_a.FAILED,this._observer.hasCallbacks(va.STAGE_FAILED
)&&this._observer.triggerEvent(va.STAGE_FAILED,this),this._observer.hasCallbacks(va.STAGE_CHANGED
)&&this._observer.triggerEvent(va.STAGE_CHANGED,this)):n&&this._state!==_a.CANCELLED?(this._state=_a.CANCELLED,
this._observer.hasCallbacks(va.STAGE_CANCELLED)&&this._observer.triggerEvent(va.STAGE_CANCELLED,this),
this._observer.hasCallbacks(va.STAGE_CHANGED)&&this._observer.triggerEvent(va.STAGE_CHANGED,this)
):this._state!==_a.FINISHED&&(this._state=_a.FINISHED,this._observer.hasCallbacks(va.STAGE_FINISHED
)&&this._observer.triggerEvent(va.STAGE_FINISHED,this),this._observer.hasCallbacks(va.STAGE_CHANGED
)&&this._observer.triggerEvent(va.STAGE_CHANGED,this)))):(n=S(Qo(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==_a.PAUSED?(this._state=_a.PAUSED,this._observer.hasCallbacks(va.STAGE_PAUSED
)&&this._observer.triggerEvent(va.STAGE_PAUSED,this),this._observer.hasCallbacks(va.STAGE_CHANGED
)&&this._observer.triggerEvent(va.STAGE_CHANGED,this)):n||this._state!==_a.PAUSED||(this._state=_a.STARTED,
this._observer.hasCallbacks(va.STAGE_RESUMED)&&this._observer.triggerEvent(va.STAGE_RESUMED,this),
this._observer.hasCallbacks(va.STAGE_CHANGED)&&this._observer.triggerEvent(va.STAGE_CHANGED,this))}}a(el,"Event",va)
;const tl=mu.createLogger("PipelineController");(ka=pa={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
ka.PIPELINE_PAUSED="PipelineController:pipelinePaused",ka.PIPELINE_RESUMED="PipelineController:pipelineResumed",
ka.PIPELINE_FINISHED="PipelineController:pipelineFinished",ka.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
ka.PIPELINE_FAILED="PipelineController:pipelineFailed",ka.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class rl{constructor(e,t){if(a(this,"_name",void 0),a(this,"_stages",void 0),a(this,"_observer",void 0),a(this,
"_changedCallback",void 0),a(this,"_state",void 0),a(this,"_stageDestructors",void 0),a(this,"_current",void 0),!B(e)
)throw new TypeError(`Pipeline name invalid: ${e}`);if(!h(t,Q,1))throw new TypeError(
`Pipeline#${e} must have at least one stage`);this._current=0,this._name=e,this._stages=t,this._observer=new Xu(
`PipelineController#${this._name}`),this._state=_a.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),
this._stageDestructors=gi(t,e=>e.onChanged(this._changedCallback))}getState(){return this._state}getName(){
return this._name}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}toJSON(){return{type:"PipelineController",state:this._state,name:this._name,
stages:gi(this._stages,e=>e.toJSON())}}isCancelled(){switch(this._state){case _a.CANCELLED:return!0;case _a.STARTED:
case _a.PAUSED:case _a.CONSTRUCTED:case _a.FINISHED:case _a.FAILED:return!1}}isFailed(){switch(this._state){
case _a.FAILED:return!0;case _a.CANCELLED:case _a.STARTED:case _a.PAUSED:case _a.CONSTRUCTED:case _a.FINISHED:return!1}}
isFinished(){switch(this._state){case _a.FAILED:case _a.CANCELLED:case _a.FINISHED:return!0;case _a.STARTED:
case _a.PAUSED:case _a.CONSTRUCTED:return!1}}isPaused(){switch(this._state){case _a.PAUSED:return!0;case _a.FAILED:
case _a.CANCELLED:case _a.FINISHED:case _a.STARTED:case _a.CONSTRUCTED:return!1}}isRunning(){switch(this._state){
case _a.STARTED:return!0;case _a.PAUSED:case _a.FAILED:case _a.CANCELLED:case _a.FINISHED:case _a.CONSTRUCTED:return!1}}
isStarted(){switch(this._state){case _a.STARTED:case _a.PAUSED:return!0;case _a.FAILED:case _a.CANCELLED:
case _a.FINISHED:case _a.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case _a.FINISHED:return!0
;case _a.STARTED:case _a.PAUSED:case _a.FAILED:case _a.CANCELLED:case _a.CONSTRUCTED:return!1}}onCancelled(e){
return this.on(pa.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(pa.PIPELINE_CHANGED,e)}onFailed(e){return this.on(
pa.PIPELINE_FAILED,e)}onFinished(e){return this.on(pa.PIPELINE_FINISHED,e)}onPaused(e){return this.on(pa.PIPELINE_PAUSED
,e)}onResumed(e){return this.on(pa.PIPELINE_RESUMED,e)}onStarted(e){return this.on(pa.PIPELINE_STARTED,e)}pause(){if(
!this.isRunning())throw new Error(`Job#${this._name} was not running`);return tl.info(`Pausing pipeline ${this._name}`),
this._state=_a.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(pa.PIPELINE_PAUSED
)&&this._observer.triggerEvent(pa.PIPELINE_PAUSED,this),this._observer.hasCallbacks(pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pa.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return tl.info(`Resuming pipeline ${this._name}`),this._state=_a.STARTED,
this._stages[this._current].resume(),this._observer.hasCallbacks(pa.PIPELINE_RESUMED)&&this._observer.triggerEvent(
pa.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(
pa.PIPELINE_CHANGED,this),this}start(){if(this._state!==_a.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return tl.info(`Starting pipeline ${this._name}`),this._state=_a.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(pa.PIPELINE_STARTED)&&this._observer.triggerEvent(
pa.PIPELINE_STARTED,this),this._observer.hasCallbacks(pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(
pa.PIPELINE_CHANGED,this),this}stop(){if(this._state!==_a.STARTED)throw new Error(`Job#${this._name} was not started`)
;return tl.info(`Stopping pipeline ${this._name}`),this._state=_a.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(pa.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pa.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(pa.PIPELINE_CHANGED,this),this}
getErrorString(){return gi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return gi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){tl.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=_a.FAILED,
this._observer.hasCallbacks(pa.PIPELINE_FAILED)&&this._observer.triggerEvent(pa.PIPELINE_FAILED,this),tl.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=_a.CANCELLED,this._observer.hasCallbacks(
pa.PIPELINE_CANCELLED)&&this._observer.triggerEvent(pa.PIPELINE_CANCELLED,this),tl.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=_a.STARTED;const o=this._stages[this._current].start();n===_a.PAUSED&&this._observer.hasCallbacks(
pa.PIPELINE_RESUMED)&&this._observer.triggerEvent(pa.PIPELINE_RESUMED,this),tl.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=_a.FINISHED,this._observer.hasCallbacks(pa.PIPELINE_FINISHED
)&&this._observer.triggerEvent(pa.PIPELINE_FINISHED,this),tl.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(pa.PIPELINE_CHANGED)&&this._observer.triggerEvent(pa.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=_a.PAUSED,this._observer.hasCallbacks(pa.PIPELINE_PAUSED
)&&this._observer.triggerEvent(pa.PIPELINE_PAUSED,this),this._observer.hasCallbacks(pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pa.PIPELINE_CHANGED,this),tl.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=_a.STARTED,this._observer.hasCallbacks(pa.PIPELINE_RESUMED
)&&this._observer.triggerEvent(pa.PIPELINE_RESUMED,this),this._observer.hasCallbacks(pa.PIPELINE_CHANGED
)&&this._observer.triggerEvent(pa.PIPELINE_CHANGED,this),tl.info(`Pipeline ${this._name} was resumed`))}}a(rl,"Event",pa
);const nl=mu.createLogger("ScriptController");(ka=fa={}).SCRIPT_STARTED="ScriptController:scriptStarted",
ka.SCRIPT_PAUSED="ScriptController:scriptPaused",ka.SCRIPT_RESUMED="ScriptController:scriptResumed",
ka.SCRIPT_CANCELLED="ScriptController:scriptCancelled",ka.SCRIPT_FAILED="ScriptController:scriptFailed",
ka.SCRIPT_FINISHED="ScriptController:scriptFinished",ka.SCRIPT_CHANGED="ScriptController:scriptChanged";class il{
constructor(e,t,r=[],n={}){if(a(this,"_observer",void 0),a(this,"_name",void 0),a(this,"_command",void 0),a(this,"_args"
,void 0),a(this,"_env",void 0),a(this,"_closeCallback",void 0),a(this,"_stdoutCallback",void 0),a(this,"_stderrCallback"
,void 0),a(this,"_state",void 0),a(this,"_process",void 0),a(this,"_stdoutChunks",void 0),a(this,"_stderrChunks",void 0)
,!B(e))throw new TypeError(`Script name invalid: ${e}`);if(!p(t))throw new TypeError(
`Script#${e} must have a valid command: ${t}`);if(!h(r,p,0))throw new TypeError(
`Script#${e} must have a valid args: ${JSON.stringify(r)}`);if(!C(n,p,p))throw new TypeError(
`Script#${e} must have a valid env: ${JSON.stringify(n)}`);this._state=_a.CONSTRUCTED,this._name=e,this._command=t,
this._args=r,this._env=n,this._observer=new Xu(`ScriptController#${e}`),this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[]}destroy(){this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning(
)&&this.stop()}getState(){return this._state}getName(){return this._name}on(e,t){return this._observer.listenEvent(e,t)}
toString(){return`ScriptController#${this._name}`}toJSON(){return{type:"ScriptController",state:this._state,
name:this._name,args:this._args,env:this._env}}isRunning(){switch(this._state){case _a.STARTED:return!0;case _a.PAUSED:
case _a.CONSTRUCTED:case _a.CANCELLED:case _a.FINISHED:case _a.FAILED:return!1}}isStarted(){switch(this._state){
case _a.STARTED:case _a.PAUSED:return!0;case _a.CONSTRUCTED:case _a.CANCELLED:case _a.FINISHED:case _a.FAILED:return!1}}
isPaused(){switch(this._state){case _a.PAUSED:return!0;case _a.CONSTRUCTED:case _a.STARTED:case _a.CANCELLED:
case _a.FINISHED:case _a.FAILED:return!1}}isFinished(){switch(this._state){case _a.CANCELLED:case _a.FINISHED:
case _a.FAILED:return!0;case _a.CONSTRUCTED:case _a.STARTED:case _a.PAUSED:return!1}}isSuccessful(){switch(this._state){
case _a.FINISHED:return!0;case _a.FAILED:case _a.CANCELLED:case _a.CONSTRUCTED:case _a.STARTED:case _a.PAUSED:return!1}}
isCancelled(){switch(this._state){case _a.CANCELLED:return!0;case _a.FINISHED:case _a.FAILED:case _a.CONSTRUCTED:
case _a.STARTED:case _a.PAUSED:return!1}}isFailed(){switch(this._state){case _a.FAILED:return!0;case _a.CANCELLED:
case _a.FINISHED:case _a.CONSTRUCTED:case _a.STARTED:case _a.PAUSED:return!1}}start(){if(this._state!==_a.CONSTRUCTED
)throw new Error(`Script#${this._name} was already started`);return nl.info(
`Starting command "${this._command} ${this._args.join(" ")}"`),this._state=_a.STARTED,this._process=tu.spawn(
this._command,this._args),this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",
this._stderrCallback),this._process.on("close",this._closeCallback),this._observer.hasCallbacks(fa.SCRIPT_STARTED
)&&this._observer.triggerEvent(fa.SCRIPT_STARTED,this),this._observer.hasCallbacks(fa.SCRIPT_CHANGED
)&&this._observer.triggerEvent(fa.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._process)throw new Error("No process initialized");return nl.info(
`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=_a.PAUSED,this._process.kill("SIGSTOP"),
this._observer.hasCallbacks(fa.SCRIPT_PAUSED)&&this._observer.triggerEvent(fa.SCRIPT_PAUSED,this),
this._observer.hasCallbacks(fa.SCRIPT_CHANGED)&&this._observer.triggerEvent(fa.SCRIPT_CHANGED,this),this}resume(){if(
!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._process)throw new Error(
"No process initialized");return nl.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=_a.STARTED,this._process.kill("SIGCONT"),this._observer.hasCallbacks(fa.SCRIPT_RESUMED
)&&this._observer.triggerEvent(fa.SCRIPT_RESUMED,this),this._observer.hasCallbacks(fa.SCRIPT_CHANGED
)&&this._observer.triggerEvent(fa.SCRIPT_CHANGED,this),this}stop(){if(this._state!==_a.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._process)throw new Error("No process initialized");return nl.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=_a.CANCELLED,this._process.kill("SIGTERM"),
this._observer.hasCallbacks(fa.SCRIPT_CANCELLED)&&this._observer.triggerEvent(fa.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(fa.SCRIPT_CHANGED)&&this._observer.triggerEvent(fa.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(fa.SCRIPT_STARTED,e)}onPaused(e){return this.on(fa.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
fa.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(fa.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(fa.SCRIPT_FAILED,e)
}onFinished(e){return this.on(fa.SCRIPT_FINISHED,e)}onChanged(e){return this.on(fa.SCRIPT_CHANGED,e)}getErrorString(){
return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(this._stdoutChunks
).toString("utf8")}_onClose(e){nl.debug(`Child process stopped with exit status ${e}`),0===e?(this._state=_a.FINISHED,
this._observer.hasCallbacks(fa.SCRIPT_FINISHED)&&this._observer.triggerEvent(fa.SCRIPT_FINISHED,this)):(
this._state=_a.FAILED,this._observer.hasCallbacks(fa.SCRIPT_FAILED)&&this._observer.triggerEvent(fa.SCRIPT_FAILED,this))
,this._observer.hasCallbacks(fa.SCRIPT_CHANGED)&&this._observer.triggerEvent(fa.SCRIPT_CHANGED,this)}_onStdOut(e){
this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),process.stderr.write(e)}}a(il
,"Event",fa),a(il,"State",_a);const ol=mu.createLogger("PipelineRunner");class sl{static createStepController(e){if(J(e)
)return new il(e.name,e.command,e.args,e.env);throw new TypeError(`Unknown step type: ${e.name}`)}
static createJobController(e){return new Qu(e.name,gi(e.steps,e=>this.createStepController(e)))}
static createStageController(e){return new el(e.name,gi(e.jobs,e=>this.createJobController(e)))}
static createPipelineController(e){return new rl(e.name,gi(e.stages,e=>this.createStageController(e)))}
static createController(e){return V(e)?(ol.debug(`Starting pipeline ${e.name}`),this.createPipelineController(e)):K(e)?(
ol.debug(`Starting stage ${e.name}`),this.createStageController(e)):q(e)?(ol.debug(`Starting job ${e.name}`),
this.createJobController(e)):(ol.debug(`Starting step ${e.name}`),this.createStepController(e))}
static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{r=n.onChanged(()=>{try{n.isFinished()?(
ol.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):ol.debug(`Controller ${n.toString(
)} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),ol.debug(`Controller ${n.toString()} started`)}catch(e){
r&&(r(),r=void 0),t(e)}})}}const al=mu.createLogger("runHttpResource"),ul=mu.createLogger("runLocalResource");(ka=Ta={}
).M_ROOM_POWER_LEVELS="m.room.power_levels",ka.M_ROOM_JOIN_RULES="m.room.join_rules",
ka.M_ROOM_MEMBERSHIP="m.room.membership",ka.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
ka.M_ROOM_GUEST_ACCESS="m.room.guest_access",ka.M_ROOM_CREATE="m.room.create",ka.M_FEDERATE="m.federate",
ka.M_ROOM_MEMBER="m.room.member",ka.M_PUSH_RULES="m.push_rules",ka.M_PRESENCE="m.presence",ka.M_SPACE="m.space",
ka.M_LOGIN_PASSWORD="m.login.password",ka.M_LOGIN_TOKEN="m.login.token",ka.M_ID_USER="m.id.user",
ka.FI_NOR_DELETED="fi.nor.deleted",ka.FI_NOR_FORM_DTO="fi.nor.form_dto",ka.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,ka.FI_NOR_PIPELINE="fi.nor.pipeline",ka.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Aa=Ta,(ka=ga=ga||{}
)[ka.UNAUTHENTICATED=0]="UNAUTHENTICATED",ka[ka.AUTHENTICATING=1]="AUTHENTICATING",
ka[ka.AUTHENTICATED=2]="AUTHENTICATED",ka[ka.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
ka[ka.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED";const ll=mu.createLogger("SimpleMatrixClient");(Sa=Sa||{}
).EVENT="SimpleMatrixClient:event";class cl{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){a(this,
"_observer",void 0),a(this,"_originalUrl",void 0),a(this,"_pollTimeout",void 0),a(this,"_pollWaitTime",void 0),a(this,
"_timeoutCallback",void 0),a(this,"_state",void 0),a(this,"_homeServerUrl",void 0),a(this,"_identityServerUrl",void 0),
a(this,"_accessToken",void 0),a(this,"_userId",void 0),a(this,"_nextBatch",void 0),a(this,"_timer",void 0),a(this,
"_syncing",void 0),this._state=n?ga.AUTHENTICATED:ga.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e
,this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Xu("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{ll.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async login(r,n){var i,o,s,a,u,l,c,d,h,_,E;try{if(i={
type:Ta.M_LOGIN_PASSWORD,identifier:{type:Ta.M_ID_USER,user:r},password:n},ll.debug("Sending login with userId:",r),!(N(
h=o=await zu.postJson(this._resolveHomeServerUrl("/login"),i))&&D(h,["user_id","access_token","home_server","device_id",
"well_known"])&&p(null==h?void 0:h.user_id)&&p(null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(
null==h?void 0:h.device_id)&&(v(null==h?void 0:h.MatrixWellKnownDTO)||N(_=h)&&D(_,["m.homeserver","m.identity_server"]
)&&N(E=_["m.homeserver"])&&D(E,["base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||N(
_=_["m.identity_server"])&&D(_,["base_url"])&&p(null==_?void 0:_.base_url)))))throw ll.debug(
"Invalid response received: ",o),new TypeError("login: Response was invalid");ll.debug("Login response received: ",o),
l=this._originalUrl;let e=this._homeServerUrl,t;if(t=null!=o&&o.well_known?(u=null===(s=o.well_known["m.homeserver"]
)||void 0===s?void 0:s.base_url,e=u||l,(null===(a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e
):e=l,!(c=null==o?void 0:o.access_token))throw new TypeError("Response did not have access_token");if(!(
d=null==o?void 0:o.user_id))throw new TypeError("Response did not have user_id");return new cl(l,e,t,c,d,
this._pollTimeout,this._pollWaitTime)}catch(e){throw ll.debug("Could not login: ",e),new Hu(da.Forbidden,"Access denied"
)}}async resolveRoomId(e){var t,r,n;try{if(t=this._normalizeRoomName(e),!(N(n=r=await zu.getJson(
this._resolveHomeServerUrl(`/directory/room/${Ge(t)}`)))&&D(n,["room_id","servers"])&&p(null==n?void 0:n.room_id)&&E(
null==n?void 0:n.servers)))throw ll.debug("resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),
new TypeError(`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return ll.debug("resolveRoomId: received: ",r),
r.room_id}catch(e){if(e instanceof Hu&&e.getStatusCode()===da.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(N(
t=e=await zu.getJson(this._resolveHomeServerUrl(`/rooms/${Ge(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&D(t,[
"joined"])&&C(null==t?void 0:t.joined,oe,je)))throw ll.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return ll.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!ee(i=await zu.getJson(this._resolveHomeServerUrl(
`/rooms/${Ge(e)}/state/${Ge(t)}/${Ge(r)}`),{Authorization:`Bearer ${n}`})))throw ll.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return ll.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof Hu&&e.getStatusCode()===da.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(N(s=o=await zu.putJson(this._resolveHomeServerUrl(
`/rooms/${Ge(e)}/state/${Ge(t)}/${Ge(r)}`),n,{Authorization:`Bearer ${i}`}))&&D(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw ll.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return ll.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw ll.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ge(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),ll.debug("forgetRoom: received: ",r)}catch(e){throw ll.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ge(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),ll.debug("leaveRoom: received: ",r)}catch(e){throw ll.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!re(e))throw new TypeError(
`roomId invalid: ${e}`);if(!oe(t))throw new TypeError(`userId invalid: ${t}`);if(ll.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await zu.postJson(
this._resolveHomeServerUrl(`/rooms/${Ge(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),ll.debug(
"inviteToRoom: received: ",n)}catch(e){throw ll.error("inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t
){var r=this._accessToken;if(!r)throw new TypeError("sendTextMessage: Client did not have access token");t={
msgtype:"m.text",body:t},ll.debug("Sending message with body:",t),r=await zu.postJson(this._resolveHomeServerUrl(
`/rooms/${Ge(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`}),ll.debug("sendTextMessage response received: ",r
)}async createRoom(e){var t=this._accessToken;if(!t)throw new TypeError("createRoom: Client did not have access token")
;if(ll.debug("Creating room with body:",e),!(N(e=t=await zu.postJson(this._resolveHomeServerUrl("/createRoom"),e,{
Authorization:`Bearer ${t}`}))&&D(e,["room_id","room_alias"])&&re(null==e?void 0:e.room_id)&&(v(
null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias)&&e&&"#"===e[0])))throw ll.debug("response = ",t),
new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t);return ll.debug("Create room response received: ",t),t
}async joinRoom(e,t=void 0){var r=this._accessToken;if(!r)throw new TypeError(
"createRoom: Client did not have access token");if(ll.debug(`Joining to room ${e} with body:`,t),!(N(
r=t=await zu.postJson(this._resolveHomeServerUrl(`/rooms/${Ge(e)}/join`),null!=t?t:{},{Authorization:`Bearer ${r}`})
)&&D(r,["room_id"])&&re(null==r?void 0:r.room_id)))throw ll.debug("response = ",t),new TypeError(
`Could not join to ${e}: Response was not MatrixJoinRoomResponseDTO: `+t);return ll.debug(`Joined to room ${e}: `,t),t}
async sync(e){var t;if(ll.info("sync with ",e),!(t=this._accessToken))throw new TypeError(
`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,full_state:i,set_presence:o,timeout:e}=e
;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!ee(r))throw new TypeError(`Invalid value for filter option: ${r}`)
;s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(s.full_state=i?"true":"false"),void 0!==o&&(
s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=ta(gi(Cr(s),e=>{var t=s[e];return`${Ge(e)}=${Ge(t)}`}),"&"),!(N(
t=e=await zu.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{Authorization:`Bearer ${t}`}))&&D(t,["next_batch","rooms"
,"presence","account_data","to_device","device_lists","device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(
v(null==t?void 0:t.rooms)||Pe(null==t?void 0:t.rooms))&&(v(null==t?void 0:t.presence)||Ue(null==t?void 0:t.presence))&&(
v(null==t?void 0:t.account_data)||Se(null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Fe(
null==t?void 0:t.to_device))&&(v(null==t?void 0:t.device_lists)||$e(null==t?void 0:t.device_lists))&&(v(
null==t?void 0:t.device_one_time_keys_count)||ke(null==t?void 0:t.device_one_time_keys_count))))throw ll.debug(
"_sync: response not MatrixSyncResponseDTO: ",JSON.stringify(e,null,2)),new TypeError(
`Response was not MatrixSyncResponseDTO: ${Me(e)}`);return e}_sendMatrixEventList(e,t){is(e,e=>{this._sendMatrixEvent(e,
t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(Sa.EVENT,t?d(d({},e),{},{room_id:t}):e)}_onTimeout(){if(
this._syncing)ll.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e)throw new TypeError(
"_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,ll.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(ll.info("Initial sync request started"),
this._state!==ga.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=ga.AUTHENTICATED_AND_STARTING,
e=this.sync({filter:{room:{timeline:{limit:1}}}}),ll.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:ll.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),ll.info("Timer started..."),this._state=ga.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:ll.error("No next_batch in the response: ",t),r=zi(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?ge(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=Cr(s),is(n,e=>{var t,r=(r=s[e],zi([],
null!=r&&r.state?de(null==r?void 0:r.state):[],null!=r&&r.timeline?pe(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,zi([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?ge(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=Cr(a),is(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const u=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=Cr(u),is(o,e=>{var t=u[e],t=zi([],de(
null==t?void 0:t.state),pe(null==t?void 0:t.timeline),ge(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}}a(cl,"Event",Sa),(ka=Ma=Ma||{}
).PRIVATE_CHAT="private_chat",ka.PUBLIC_CHAT="public_chat",ka.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Ra=Ma,(
Ma=ja=ja||{}).INVITED="invited",Ma.JOINED="joined",Ma.SHARED="shared",Ma.WORLD_READABLE="world_readable",ya=ja,(
ja=Ga=Ga||{}).PUBLIC="public",ja.KNOCK="knock",ja.INVITE="invite",ja.PRIVATE="private",ja.RESTRICTED="restricted",Na=Ga,
(Ga=ja={}).CAN_JOIN="can_join",Ga.FORBIDDEN="forbidden",Ca=ja;const dl=mu.createLogger("MatrixCrudRepository");class hl{
constructor(e,t,r=void 0,n=void 0,i=void 0,o=void 0,s=void 0){a(this,"_client",void 0),a(this,"_serviceAccount",void 0),
a(this,"_stateType",void 0),a(this,"_stateKey",void 0),a(this,"_deletedType",void 0),a(this,"_deletedKey",void 0),a(this
,"_allowedGroups",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=P(i))&&void 0!==i?i:Aa.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});dl.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=Cr(n);if(t=Cr(t),(t=Qo(t,e=>!i.includes(e))).length){dl.debug(
"Joining to rooms = ",t);let r=0;if(await No(t,async(e,t)=>{await e;try{dl.debug("Joining to room = ",t),
await this._client.joinRoom(t),r+=1}catch(e){dl.warn(`Warning! Could not join client to room ${t}`)}},Promise.resolve())
,1<=r)return dl.debug("Fetching results again after joining"),this.getAll()}return No(i,(e,i)=>{var t=n[i],r=Qo(null!==(
r=null==t||null===(r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type
)===this._stateType&&(null==e?void 0:e.state_key)===this._stateKey&&Bs(null==e||null===(t=e.content
)||void 0===t?void 0:t.version)});return zi(e,gi(r,e=>{var t=null!==(t=null==e||null===(t=e.content
)||void 0===t?void 0:t.data)&&void 0!==t?t:{},r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(
null==e||null===(n=e.content)||void 0===n||!n.deleted);return{data:t,id:i,version:r,deleted:n}}))},[])}
async getAllByProperty(t,r){var e=await this.getAll();return gi(Qo(e,e=>Mn(null==e?void 0:e.data,t)===r),e=>({id:e.id,
version:e.version,data:e.data}))}async createItem(e){var t={data:e,version:1},r=(i=null===(n=this._serviceAccount
)||void 0===n?void 0:n.getUserId())?[i]:[],n=this._allowedGroups,i={[Aa.M_FEDERATE]:!1};const o=[{type:this._stateType,
state_key:this._stateKey,content:t},{type:Aa.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:ya.SHARED}},{type:Aa.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Ca.FORBIDDEN}}]
;return void 0!==n&&o.push({type:Aa.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Na.RESTRICTED,allow:gi(n,e=>({
type:Aa.M_ROOM_MEMBERSHIP,room_id:e}))}}),i=d(d({},r.length?{invite:r}:{}),{},{preset:Ra.PRIVATE_CHAT,
creation_content:i,initial_state:o,room_version:"8"}),i=(await this._client.createRoom(i)).room_id,
this._serviceAccount&&await this._serviceAccount.joinRoom(i),{id:i,version:1,data:e,deleted:!1}}async findById(e){var t,
r=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(dl.debug("response = ",JSON.stringify(r,
null,2)),!ee(t=null==r?void 0:r.data))throw new TypeError(`data was not JsonObject: ${t}`);if(!T(
r=null==r?void 0:r.version))throw new TypeError(`version was not integer: ${r}`);return{data:t,id:e,version:r}}
async update(e,t){var r,n;if(!ee(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new Hu(404);if(!T(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),dl.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new Hu(404);if(!T(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){dl.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){dl.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),dl.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof Hu&&[401,403,404].includes(e.getStatusCode()))throw e;throw dl.error(
`Error in deleteById(${t}): `,e),new Hu(500)}}}const _l=mu.createLogger("runMatrixRoomResource"),El=mu.createLogger(
"main");mu.setLogLevel(Fa),async function(e=[]){var t,r,n,i;try{if(t="nor-pipeline-runner",e.shift(),!e.shift()
)return console.log(G(t)),ua.ARGUMENT_PARSE_ERROR;if(0===e.length)return console.log(G(t)),ua.ARGUMENT_PARSE_ERROR;do{
switch(r=e.shift(),function(){switch(r){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1
;case"--":case 2:return 2}}()){case 0:return console.log(G(t)),ua.OK;case 1:return console.log(function(){const e=Qo([
Pu?"LOCAL":"",Lu?"HTTP":"",Uu?"MATRIX":"",$u?"TEST":"",ku?"DEV":""],e=>!!e);return`nor-pipeline-runner v${Iu} [${e.join(
"|")}]
    
Built with options:

  BUILD_VERSION               = '${Iu}'
  BUILD_NODE_ENV              = '${Du}'
  BUILD_DATE                  = '${Ou}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Pu}'
  BUILD_WITH_HTTP_RESOURCES   = '${Lu}'
  BUILD_WITH_MATRIX_RESOURCES = '${Uu}'
`}()),ua.OK}if(void 0===(n=bu.parseRunnerResource(r)))return El.error(`Unsupported argument: ${r}`),console.log(G(t)),
ua.UNKNOWN_ARGUMENT;if((i=await async function(e){switch(e.type){case ia.HTTP:return Lu?async function(t){var r,n,i,o
;try{const s={};if(t.authentication&&(k(t.authentication)&&(s.Authorization=`Bearer ${t.authentication.access_token}`),
F(t.authentication)&&(r=t.authentication.username,n=t.authentication.password,s.Authorization=`Basic ${new Buffer(
r+":"+n).toString("base64")}`)),void 0===(i=await zu.getJson(t.url,s)))return al.error(`Failed to load URL "${t.url}": `
,i),ua.RESOURCE_LOAD_FAILED;if(void 0===(o=z(i)))return al.error(`Model from URL "${t.url}" was not valid: `,i),
ua.RESOURCE_MODEL_INVALID;let e=sl.createController(o);return al.info(`Running ${e.getName()} from ${t.url}`),
await sl.startAndWaitUntilFinished(e),al.info(`Successfully finished ${e.getName()} from ${t.url}`),ua.OK}catch(e){
return al.error("Error: ",e),ua.HTTP_RESOURCE_FAILED}}(e):ua.UNBUILD_FEATURE;case ia.LOCAL:return Pu?async function(t){
try{var r=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{ru.readFile(i,o,(e,t
)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(t.path),n=JSON.parse(r),i=z(n);if(
void 0===i)return ul.warn("Model was not valid: ",n),ua.RESOURCE_MODEL_INVALID;let e=sl.createController(i)
;return ul.info(`Running ${e.getName()} from ${t.path}`),await sl.startAndWaitUntilFinished(e),ul.info(
`Successfully finished ${e.getName()} from ${t.path}`),ua.OK}catch(e){return ul.error("Error: ",e),
ua.LOCAL_RESOURCE_FAILED}}(e):ua.UNBUILD_FEATURE;case ia.MATRIX_ROOM:return Uu?async function(e){var r,n,i,o;try{
r=e.authentication;const s=e.room;let t;if(k(r))t=new cl(`https://${e.homeserver}`,void 0,void 0,r.access_token);else{
if(!F(r))return ua.UNKNOWN_AUTHENTICATION_TYPE;t=new cl(`https://${e.homeserver}`),await t.login(r.username,r.password)}
const a=new hl(t,Aa.FI_NOR_PIPELINE,"",void 0,Aa.FI_NOR_PIPELINE_STATE,"");if(void 0===(n=await a.findById(s))
)return ua.UNIMPLEMENTED_FEATURE;{if(void 0===(o=z(i=n.data)))return _l.warn(`Model was not valid for room ${s}: `,i),
ua.RESOURCE_MODEL_INVALID;let e=sl.createController(o);await He(t,s,e);const u=e.onChanged(()=>{He(t,s,e).catch(e=>{
_l.error("Failed to save controller state: ",e)})});try{await sl.startAndWaitUntilFinished(e)}finally{u(),await He(t,s,e
)}return ua.OK}}catch(e){return _l.error("Error: ",e),ua.MATRIX_RESOURCE_FAILED}}(e):ua.UNBUILD_FEATURE;default:
return ua.UNKNOWN_RESOURCE_TYPE}}(n))!==ua.OK)return i===ua.UNKNOWN_RESOURCE_TYPE?(El.error(`Error NorPP${i}: ${j(i
)}: Resource type was unknown: ${n.type}`),console.log(G(t)),ua.UNKNOWN_RESOURCE_TYPE):(function(e){if(Bs(e)&&!(
e<0||255<e)){if(aa.FATAL_SIGNAL_RANGE_START<=e&&e<=aa.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case aa.OK:
case aa.GENERAL_ERRORS:case aa.MISUSE_OF_SHELL_BUILTINS:case aa.ARGUMENT_PARSE_ERROR:case aa.UNKNOWN_ARGUMENT:
case aa.UNKNOWN_RESOURCE_TYPE:case aa.UNKNOWN_AUTHENTICATION_TYPE:case aa.RESOURCE_LOAD_FAILED:
case aa.RESOURCE_MODEL_INVALID:case aa.LOCAL_RESOURCE_FAILED:case aa.HTTP_RESOURCE_FAILED:
case aa.MATRIX_RESOURCE_FAILED:case aa.UNIMPLEMENTED_FEATURE:case aa.UNBUILD_FEATURE:case aa.FATAL_ERROR:case aa.USAGE:
case aa.DATAERR:case aa.NOINPUT:case aa.NOUSER:case aa.NOHOST:case aa.UNAVAILABLE:case aa.SOFTWARE:case aa.OSERR:
case aa.OSFILE:case aa.CANTCREAT:case aa.IOERR:case aa.TEMPFAIL:case aa.PROTOCOL:case aa.NOPERM:case aa.CONFIG:
case aa.COMMAND_INVOKED_CANNOT_EXECUTE:case aa.COMMAND_NOT_FOUND:case aa.INVALID_ARGUMENT_TO_EXIT:
case aa.FATAL_SIGNAL_RANGE_START:case aa.FATAL_SIGNAL_RANGE_END:case aa.EXIT_STATUS_OUT_OF_RANGE:return 1;default:return
}}}(i)?El.error(`Error EX-${i}: ${j(i)}: for ${L(n.type)} resource ${r}`):El.error(`Error: Exit status ${i}: for ${L(
n.type)} resource ${r}`),i)}while(1<=e.length);return ua.OK}catch(e){return El.error("Fatal error: ",e),ua.FATAL_ERROR}
}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
