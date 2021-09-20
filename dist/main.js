#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function O(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){c(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new ir(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new or;++t<r;)this.add(e[t])}function l(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(qn);return o.cache=new(l.Cache||Vn),o}
function v(e){return void 0===e}function u(e){return pr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!pr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||A(e
,t))}function h(e){return v(e)||Wa(e)}function T(e){return ja(e)}function p(e){return v(e)||T(e)}function _(e){
return!!e&&u(e)&&A(e,T)}function E(e){return qa(e)}function g(e){return v(e)||qa(e)}function f(e,t){return to(e,t)}
function A(e,t){return lo(e,t)}function N(e,t){return mt(e)&&A(al(e),t)}function S(e,t=T,r=void 0){return!(
void 0!==r&&!N(e,r))&&(t=void 0!==t?t:T,mt(e)&&A(L(e),t))}function y(e){return!!mt(e)&&!(e instanceof Date)&&!bt(e)&&!u(
e)&&S(e,T,void 0)}function C(e,t=T,r=void 0){return!!mt(e)&&!(e instanceof Date)&&!bt(e)&&!u(e)&&S(e,t,r)}function w(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?T:t,!mt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(bt(e))throw new TypeError("value was Function");if(u(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?T:t;if(
void 0===r||N(e,e=>r(e)))throw e=Zo(L(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=al(e),n=Qo(s,e=>!r(e)),t=L(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function R(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return w(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function m(...e){return t=>f(e,e=>e(t))}function I(e){return mt(e)}function D(e,t){return I(e
)&&0===(r=t,Ws(L(e),e=>!r.includes(e)).length);var r}function b(e){if(void 0!==e&&""!==e)return $a(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function U(e){if(void 0!==e&&""!==e)return`${e}`}function L(e,t=T){if(u(e
)){var r=Ji(e,(e,t)=>t);return Ws(r,e=>t(e))}return I(e)?(e=Reflect.ownKeys(e),Ws(e,e=>t(e))):[]}function P(e){switch(e
){case hl.HTTP:return"http";case hl.LOCAL:return"local";case hl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return y(e)&&function(){switch(null==e?void 0:e.type){
case El.NONE:case El.BASIC_AUTH:case El.BEARER_AUTH:return 1;default:return}}()}function F(e){return y(e)&&D(e,["type",
"username","password"])&&(null==e?void 0:e.type)===vl.BASIC_AUTH&&T(null==e?void 0:e.username)&&T(
null==e?void 0:e.password)}function M(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return M(r,n)}return M(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:vl.BASIC_AUTH,username:r,password:n
}}function H(e){return y(e)&&D(e,["type","access_token"])&&(null==e?void 0:e.type)===vl.BEARER_AUTH&&T(
null==e?void 0:e.access_token)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(H(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return{
type:vl.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:vl.BEARER_AUTH,access_token:n}}function G(e){if(Wa(e)&&!(e<0||255<e)){if(
Tl.FATAL_SIGNAL_RANGE_START<=e&&e<=Tl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case Tl.OK:case Tl.GENERAL_ERRORS:
case Tl.MISUSE_OF_SHELL_BUILTINS:case Tl.ARGUMENT_PARSE_ERROR:case Tl.UNKNOWN_ARGUMENT:case Tl.UNKNOWN_RESOURCE_TYPE:
case Tl.UNKNOWN_AUTHENTICATION_TYPE:case Tl.RESOURCE_LOAD_FAILED:case Tl.RESOURCE_MODEL_INVALID:
case Tl.LOCAL_RESOURCE_FAILED:case Tl.HTTP_RESOURCE_FAILED:case Tl.MATRIX_RESOURCE_FAILED:case Tl.UNIMPLEMENTED_FEATURE:
case Tl.UNBUILD_FEATURE:case Tl.FATAL_ERROR:case Tl.USAGE:case Tl.DATAERR:case Tl.NOINPUT:case Tl.NOUSER:case Tl.NOHOST:
case Tl.UNAVAILABLE:case Tl.SOFTWARE:case Tl.OSERR:case Tl.OSFILE:case Tl.CANTCREAT:case Tl.IOERR:case Tl.TEMPFAIL:
case Tl.PROTOCOL:case Tl.NOPERM:case Tl.CONFIG:case Tl.COMMAND_INVOKED_CANNOT_EXECUTE:case Tl.COMMAND_NOT_FOUND:
case Tl.INVALID_ARGUMENT_TO_EXIT:case Tl.FATAL_SIGNAL_RANGE_START:case Tl.FATAL_SIGNAL_RANGE_END:
case Tl.EXIT_STATUS_OUT_OF_RANGE:case Tl.UNKNOWN_AGENT_ID:case Tl.WORK_CANCELLED:case Tl.CONFLICT:return 1;default:
return}}}function j(e){if(Tl.FATAL_SIGNAL_RANGE_START<=e&&e<=Tl.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-Tl.FATAL_SIGNAL_RANGE_START}`;switch(e){case Tl.OK:return"OK";case Tl.GENERAL_ERRORS:
return"GENERAL_ERRORS";case Tl.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case Tl.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case Tl.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case Tl.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case Tl.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case Tl.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case Tl.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case Tl.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case Tl.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case Tl.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case Tl.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case Tl.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case Tl.FATAL_ERROR:return"FATAL_ERROR"
;case Tl.USAGE:return"USAGE";case Tl.DATAERR:return"DATAERR";case Tl.NOINPUT:return"NOINPUT";case Tl.NOUSER:
return"NOUSER";case Tl.NOHOST:return"NOHOST";case Tl.UNAVAILABLE:return"UNAVAILABLE";case Tl.SOFTWARE:return"SOFTWARE"
;case Tl.OSERR:return"OSERR";case Tl.OSFILE:return"OSFILE";case Tl.CANTCREAT:return"CANTCREAT";case Tl.IOERR:
return"IOERR";case Tl.TEMPFAIL:return"TEMPFAIL";case Tl.PROTOCOL:return"PROTOCOL";case Tl.NOPERM:return"NOPERM"
;case Tl.CONFIG:return"CONFIG";case Tl.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case Tl.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case Tl.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case Tl.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case Tl.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case Tl.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case Tl.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case Tl.WORK_CANCELLED:return"WORK_CANCELLED";case Tl.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function x(e){return uc?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${ac?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${lc?`

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
`:""}${sc?`

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
`}function B(e){if(Wa(e))switch(e){case gl.OPTIONS:return"options";case gl.GET:return"get";case gl.POST:return"post"
;case gl.PUT:return"put";case gl.DELETE:return"delete";case gl.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!ja(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function W(e){return T(e)||Wa(e)||$a(e)||Fa(e)
}function V(e){return W(e)||d(e,m(V,v))||q(e)}function q(e){return y(e)&&S(e,T,m(V,v))}function K(e){return v(e)||q(e)}
function z(e){return W(e)||Y(e)||X(e)}function X(e){return y(e)&&S(e,T,m(z,v))}function Y(e){return d(e,m(z,v))}
function Q(e){return y(r=e)&&D(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===pu.BOOLEAN&&T(
null==r?void 0:r.name)&&p(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||$a(r))||y(r=e)&&D(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===pu.INTEGER&&T(null==r?void 0:r.name)&&p(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||y(t=e)&&D(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===pu.NUMBER&&T(null==t?void 0:t.name)&&p(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||y(t=e)&&D(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===pu.STRING&&T(
null==t?void 0:t.name)&&p(null==t?void 0:t.displayName)&&p(null==t?void 0:t.default)||y(e)&&D(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===pu.JSON&&T(null==e?void 0:e.name)&&p(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||z(null==e?void 0:e.default));var t,r}function Z(e){return y(e)&&T(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Q))&&(v(null==e?void 0:e.variables)||q(
null==e?void 0:e.variables))}function ee(e){return!(!Z(e)||void 0===Pc.findController(e)&&!(Z(e)&&y(e)&&J(
null==e?void 0:e.name)))}function te(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&D(e,$c)}
function re(e){if(te(e))return e}function ne(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&D(
e,Fc)}function ie(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&D(e,Mc)}function oe(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e)
)return e}(e))&&void 0!==t?t:re(e))&&void 0!==t?t:(t=e,null!==(e=Pc.parseControllerModel(t))&&void 0!==e?e:re(t))}
function se(e){return I(e)&&bt(null==e?void 0:e.getName)&&bt(null==e?void 0:e.isRunning)&&bt(null==e?void 0:e.isStarted
)&&bt(null==e?void 0:e.isPaused)&&bt(null==e?void 0:e.isCancelled)&&bt(null==e?void 0:e.isFinished)&&bt(
null==e?void 0:e.isFailed)&&bt(null==e?void 0:e.isSuccessful)&&bt(null==e?void 0:e.start)&&bt(null==e?void 0:e.pause
)&&bt(null==e?void 0:e.resume)&&bt(null==e?void 0:e.stop)&&bt(null==e?void 0:e.destroy)&&bt(null==e?void 0:e.toString
)&&bt(null==e?void 0:e.toJSON)&&bt(null==e?void 0:e.onStarted)&&bt(null==e?void 0:e.onPaused)&&bt(
null==e?void 0:e.onResumed)&&bt(null==e?void 0:e.onCancelled)&&bt(null==e?void 0:e.onFailed)&&bt(
null==e?void 0:e.onFinished)&&bt(null==e?void 0:e.onChanged)}function ae(e){return e instanceof Gc}function le(e){
return e instanceof xc}function ue(e){return T(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!T(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function de(e){return y(e)&&D(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function he(e){return T(e)&&!!e&&"@"===e[0]}
function _e(e){return y(e)&&D(e,["content","type","sender"])&&q(null==e?void 0:e.content)&&T(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function Ee(e){return y(e)&&D(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&K(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&p(null==e?void 0:e.replaces_state)&&p(
null==e?void 0:e.transaction_id)}function ve(e){try{return function(e){if(!y(e))throw new TypeError(
"Value was not regular object");if(!D(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${L(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!K(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!he(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!_e(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!p(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!p(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function Te(e){return y(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&q(null==e?void 0:e.content)&&T(null==e?void 0:e.type)&&T(null==e?void 0:e.event_id)&&T(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||q(null==e?void 0:e.prev_content))&&T(
null==e?void 0:e.state_key)}function pe(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${L(e)}`);if(!q(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!T(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!T(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!T(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!q(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!T(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ge(e){return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function fe(e){
return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,Te)}function Ae(e){try{return function(e){if(!y(e)
)throw new TypeError("value was not object");if(!D(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,Te))throw e=Zo(null==e?void 0:e.events,e=>!Te(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${pe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ne(e){return y(e)&&D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&q(
null==e?void 0:e.content)&&T(null==e?void 0:e.type)&&T(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(null==e?void 0:e.unsigned))&&p(
null==e?void 0:e.state_key)}function Se(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${L(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!T(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!T(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!Ee(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ve(
null==e?void 0:e.unsigned)}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ye(e){return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ce(e){
return y(e)&&D(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ne)&&$a(null==e?void 0:e.limited)&&T(
null==e?void 0:e.prev_batch)}function we(e){try{return function(e){if(!y(e))throw new TypeError(`value not object: ${e}`
);if(!D(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${L(e)}`);if(!d(
null==e?void 0:e.events,Ne)){var t=Zo(null==e?void 0:e.events,e=>!Ne(e));throw new TypeError(
`Property "events" item was not correct: ${Se(t)}`)}if(!$a(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!T(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Re(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,_e)}function me(e){
return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ie(e){return y(e)&&D(e,["events"])&&d(
null==e?void 0:e.events,_e)}function De(e){return y(e)&&D(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function be(e){return y(e)&&D(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||fe(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||Ce(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Re(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Ie(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||De(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!y(e))throw new TypeError(
`value was not object: ${e}`);if(!D(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!fe(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ae(e)}`);if(
!v(null==e?void 0:e.timeline)&&!Ce(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${we(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Re(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Ie(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!De(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Ue(e){return y(e)&&D(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&q(null==e?void 0:e.content)&&T(null==e?void 0:e.state_key)&&T(
null==e?void 0:e.type)&&T(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||Ee(null==e?void 0:e.unsigned))&&p(null==e?void 0:e.event_id)}function Le(e){try{return function(e){if(!y(e)
)throw new TypeError(`invalid: ${e}`);if(!D(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${L(e)}`);if(!q(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!T(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!T(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!T(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Pe(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,
Ue)}function $e(e){try{return function(e){if(!y(e))throw new TypeError(`value invalid: ${e}`);if(!D(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${L(e)}`);if(!d(null==e?void 0:e.events,Ue))throw e=Zo(
null==e?void 0:e.events,e=>!Ue(e)),new TypeError(`Property "events" had invalid item: ${Le(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return y(e)&&D(e,["invite_state"])&&Pe(
null==e?void 0:e.invite_state)}function Me(e){try{return function(e){if(!y(e))throw new TypeError(
`Value not object: ${e}`);if(!D(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${L(e)}`);if(
!Pe(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function He(e){return y(e)&&D(e,[
"state","timeline","account_data"])&&fe(null==e?void 0:e.state)&&Ce(null==e?void 0:e.timeline)&&Ie(
null==e?void 0:e.account_data)}function ke(e){return y(e)&&D(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||C(
null==e?void 0:e.join,ue,be))&&(v(null==e?void 0:e.invite)||C(null==e?void 0:e.invite,ue,Fe))&&(v(null==e?void 0:e.leave
)||C(null==e?void 0:e.leave,ue,He))}function Ge(e){try{return function(e){if(!y(e))throw new TypeError(
"value was not regular object");if(!D(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!C(null==e?void 0:e.join,ue,be))throw new TypeError(`Property "join" was invalid: ${R(
null==e?void 0:e.join,ue,be,ce,Oe)}`);if(!v(null==e?void 0:e.invite)&&!C(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${R(null==e?void 0:e.invite,ue,Fe,ce,Me)}`);if(!v(
null==e?void 0:e.leave)&&!C(null==e?void 0:e.leave,ue,He))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function je(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,
_e)}function xe(e){return y(e)&&D(e,["events"])&&d(null==e?void 0:e.events,_e)}function Be(e){return y(e)&&D(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&(v(null==e?void 0:e.left)||d(null==e?void 0:e.left,he))}function Je(
e){try{return function(e){if(!y(e))throw new TypeError(`Value not regular object: ${e}`);if(!D(e,["changed","left"])
)throw new TypeError(`Value properties not right: ${L(e)}`);if(!d(null==e?void 0:e.changed,he))throw new TypeError(
`Property "changed" not valid: ${null==e?void 0:e.changed}`);if(!v(null==e?void 0:e.left)&&!d(null==e?void 0:e.left,he)
)throw new TypeError(`Property "left" not valid: ${null==e?void 0:e.left}`)}(e),"No errors detected"}catch(e){
return e.message}}function We(e){return C(e,T,E)}function Ve(e){try{return function(e){if(!y(e))throw new TypeError(
"value not RegularObject");if(!D(e,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count","org.matrix.msc2732.device_unused_fallback_key_types"]))throw new TypeError(
`value has additional keys: ${L(e)}`);if(!T(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!ke(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${Ge(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!je(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Ie(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!xe(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!Be(null==e?void 0:e.device_lists))throw new TypeError(
`Property "device_lists" was invalid: ${Je(null==e?void 0:e.device_lists)}`);if(!v(
null==e?void 0:e.device_one_time_keys_count)&&!We(null==e?void 0:e.device_one_time_keys_count))throw new TypeError(
'Property "device_one_time_keys_count" was invalid')}(e),"No errors detected"}catch(e){return e.message}}function qe(e){
switch(e){case bl.UNAUTHENTICATED:return"UNAUTHENTICATED";case bl.AUTHENTICATING:return"AUTHENTICATING"
;case bl.AUTHENTICATED:return"AUTHENTICATED";case bl.AUTHENTICATED_AND_STARTING:return"AUTHENTICATED_AND_STARTING"
;case bl.AUTHENTICATED_AND_STARTED:return"AUTHENTICATED_AND_STARTED";case bl.AUTHENTICATED_AND_SYNCING:
return"AUTHENTICATED_AND_SYNCING"}throw new TypeError(`Unsupported SimpleMatrixClientState value: ${e}`)}function Ke(e){
return y(e)&&D(e,["display_name","avatar_url"])&&T(null==e?void 0:e.display_name)&&(T(null==e?void 0:e.avatar_url)||Fa(
null==e?void 0:e.avatar_url))}function ze(e){return y(e)&&D(e,["errcode","error","retry_after_ms"])&&function(){switch(
null==e?void 0:e.errcode){case Ol.M_USER_IN_USE:case Ol.M_INVALID_USERNAME:case Ol.M_EXCLUSIVE:case Ol.M_FORBIDDEN:
case Ol.M_LIMIT_EXCEEDED:return 1;default:return}}()&&T(null==e?void 0:e.error)&&h(null==e?void 0:e.retry_after_ms)}
function Xe(e){return encodeURIComponent(e)}async function Ye(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,Dl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}async function Qe(e,t){switch(
t.type){case _l.HTTP:return ac?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(H(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Lc.getJson(r.url,c)))return Xc.error(`Failed to load URL "${r.url}": `,o),
pl.RESOURCE_LOAD_FAILED;if(void 0===(s=oe(o)))return Xc.error(`Model from URL "${r.url}" was not valid: `,o),
pl.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new zc(t,a,l,vc,Tc)
;let e=Vc.createController(s,u);return Xc.info(`Running ${e.getName()} from ${r.url}`),
await Vc.startAndWaitUntilFinished(e),Xc.info(`Successfully finished ${e.getName()} from ${r.url}`),pl.OK}catch(e){
return Xc.error("Error: ",e),pl.HTTP_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;case _l.LOCAL:return sc?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
Du.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return T(t)?t:t.toString("utf8")}(r.path),void 0===(
o=oe(i=JSON.parse(n))))return Yc.warn("Model was not valid: ",i),pl.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new zc(t,s,a,vc,Tc);let e=Vc.createController(o,l);return Yc.info(`Running ${e.getName(
)} from ${r.path}`),await Vc.startAndWaitUntilFinished(e),Yc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,pl.OK}catch(e){return Yc.error("Error: ",e),pl.LOCAL_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;case _l.MATRIX:
return lc?async function(i,o){var s,a,l,u,c,d,h,_,E,v,T,p,g,f,A,N,S,y,C,w,R;try{rd.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(H(g))e=new Zc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return pl.UNKNOWN_AUTHENTICATION_TYPE;e=new Zc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return rd.error("Could not detect agent user ID"),pl.UNKNOWN_AGENT_ID
;rd.info(`Agent user ID: ${t}`);const m=new td(e,Dl.FI_NOR_AGENT_DTO);if(0===(R=await m.getAll()).length
)return rd.debug("Detected no pools available."),pl.NO_WORK_AVAILABLE;f=(1===R.length?(rd.debug(
"Detected single pool available. Picking it."),R[0]):(rd.debug(
`Detected ${R.length} pools available. Picking one by random.`),R[Math.floor(Math.random()*R.length)])).id,rd.info(
`Pool ID: ${f}`);const I=new td(e,Dl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Dl.FI_NOR_PIPELINE_STATE,"",[f])
;A=await I.getAll(),rd.debug("runList = ",A);let r;if(0===A.length)return rd.debug("Detected no work available."),
pl.NO_WORK_AVAILABLE;r=1===A.length?(rd.debug("Detected single work available. Picking it."),A[0]):(rd.debug(
`Detected ${A.length} work items available. Picking one by random.`),A[Math.floor(Math.random()*A.length)]);const D=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return rd.warn(`Work ID was already running: ${D}`),rd.debug(
`We'll stop listening the work item: ${D}`),await e.leaveRoom(D),rd.debug(`We'll forget the work item now: ${D}`),
await e.forgetRoom(D),pl.CONFLICT;if(rd.info(`Work ID: ${D}`),N=O(O({},r.data),{},{agentPoolId:f,agentAccountId:t}),
await I.update(r.id,N),r=await I.findById(r.id),!r)return rd.warn(
"The work item disappeared while we were selecting it."),pl.WORK_CANCELLED;if(D!==r.id)return rd.error(
`The work item ID conflict: ${D} !== ${r.id}`),pl.CONFLICT;if(f!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return rd.error(""),pl.CONFLICT;if(rd.debug(
"Work item secured to us! We can start the job."),void 0===(S=oe(null===(T=r)||void 0===T||null===(p=T.data
)||void 0===p?void 0:p.model)))return rd.warn("Work item did not contain correct pipeline model: ",r),
pl.RESOURCE_MODEL_INVALID;y=null==S?void 0:S.parameters,C=null==S?void 0:S.variables,w=new zc(i,y,C,vc,Tc)
;let n=Vc.createController(S,w);try{await Ye(e,I,D,r,n);const b=n.onChanged(()=>{Ye(e,I,D,r,n).catch(e=>{rd.error(
"Failed to save controller state: ",e)})});try{await Vc.startAndWaitUntilFinished(n)}finally{b()}}finally{n.isStarted(
)&&(rd.warn(`Warning! Controller wasn't stopped (${function(e){switch(e){case Sl.UNCONSTRUCTED:return"UNCONSTRUCTED"
;case Sl.CONSTRUCTED:return"CONSTRUCTED";case Sl.STARTED:return"STARTED";case Sl.PAUSED:return"PAUSED"
;case Sl.CANCELLED:return"CANCELLED";case Sl.FINISHED:return"FINISHED";case Sl.FAILED:return"FAILED"}
throw new TypeError(`Unsupported ControllerState value: ${e}`)}(n.getState())}). Stopping it now.`),await n.stop()),
await Ye(e,I,D,r,n)}return rd.debug(`We'll stop listening the work item now: ${D}`),await e.leaveRoom(D),rd.debug(
`We'll forget the work item now: ${D}`),await e.forgetRoom(D),pl.OK}catch(e){return rd.error("Error: ",e),
pl.MATRIX_RESOURCE_FAILED}}(e,t):pl.UNBUILD_FEATURE;default:return pl.UNKNOWN_RESOURCE_TYPE}}function Ze(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.json)&&p(null==e?void 0:e.action)&&p(null==e?void 0:e.output)&&D(e,ud)}
function et(e){return d(e,T)}function tt(e){return d(e,et)}function rt(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.csv)&&p(null==e?void 0:e.action)&&p(null==e?void 0:e.output)&&D(e,hd)}function nt(e){return Z(e)&&J(
null==e?void 0:e.name)&&T(null==e?void 0:e.command)&&(r=T,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=T,
void 0===(r=null==e?void 0:e.env)||C(r,n,i))&&p(null==e?void 0:e.cwd)&&p(null==e?void 0:e.output)&&D(e,vd);var t,r,n,i}
function it(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.file)&&(v(null==e?void 0:e.content)||z(
null==e?void 0:e.content))&&p(null==e?void 0:e.target)&&p(null==e?void 0:e.output)&&p(null==e?void 0:e.default)&&D(e,fd)
}function ot(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.set)&&p(null==e?void 0:e.variable)&&D(e,Sd)}
function st(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.git)&&p(null==e?void 0:e.url)&&p(
null==e?void 0:e.target)&&p(null==e?void 0:e.message)&&p(null==e?void 0:e.cwd)&&p(null==e?void 0:e.set)&&p(
null==e?void 0:e.value)&&D(e,wd)}function at(e){return Z(e)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.assert)&&(v(
null==e?void 0:e.equals)||z(null==e?void 0:e.equals))&&D(e,md)}function lt(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.concat)&&D(e,bd)}async function ut(e,t){t=t.id,Ld.info(`Pool ID: ${t}`);const r=new td(e,
Dl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,Dl.FI_NOR_PIPELINE_STATE,"",[t]);return t=await r.getAll(),Ld.debug("runList = ",t)
,0!==t.length?(Ld.debug("Detected work available."),pl.OK):(Ld.debug("No work available."),pl.NO_WORK_AVAILABLE)}
async function ct(r,e){return 0===e.length?(Ld.debug("checkIfAnyPoolHasWork: Detected no pools available."),
pl.NO_WORK_AVAILABLE):1===e.length?(Ld.debug("checkIfAnyPoolHasWork: Detected single pool available. Checking it."),ut(r
,e[0])):(Ld.debug(`checkIfAnyPoolHasWork: Detected ${e.length} pools available.`),os(e,async(e,t)=>(e=await e,Ld.debug(
`checkIfAnyPoolHasWork: Result: ${e}`),e===pl.OK?pl.OK:(Ld.debug(`checkIfAnyPoolHasWork: Checking pool ${t.id}`),ut(r,t)
)),Promise.resolve(pl.NO_WORK_AVAILABLE)))}var dt,ht,_t,Et,vt,Tt,pt,gt,ft,At,Nt,St,yt,Ct,wt,Rt,mt,It,Dt,bt,Ot,Ut,Lt,Pt,
$t,Ft,Mt,Ht,kt,Gt,jt,xt,Bt,Jt,Wt,Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,Tr,pr,gr,fr,Ar,
Nr,Sr,yr,Cr,wr,Rr,mr,Ir,Dr,br,Or,Ur,Lr,Pr,$r,Fr,Mr,Hr,kr,Gr,jr,xr,Br,Jr,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,
ln,un,cn,dn,hn,_n,En,vn,Tn,pn,gn,fn,An,Nn,Sn,yn,Cn,wn,Rn,mn,In,Dn,bn,On,Un,Ln,Pn,$n,Fn,Mn,Hn,kn,Gn,jn,xn,Bn,Jn,Wn,Vn,qn,
Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,Ti,pi,gi,fi,Ai,Ni,Si,yi,Ci,wi,Ri,mi,Ii,Di,bi,Oi,Ui,Li,
Pi,$i,Fi,Mi,Hi,ki,Gi,ji,xi,Bi,Ji,Wi,Vi,qi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,To,po,go,fo,Ao,
No,So,yo,Co,wo,Ro,mo,Io,Do,bo,Oo,Uo,Lo,Po,$o,Fo,Mo,Ho,ko,Go,jo,xo,Bo,Jo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,
as,ls,us,cs,ds,hs,_s,Es,vs,Ts,ps,gs,fs,As,Ns,Ss,ys,Cs,ws,Rs,ms,Is,Ds,bs,Os,Us,Ls,Ps,$s,Fs,Ms,Hs,ks,Gs,js,xs,Bs,Js,Ws,Vs,
qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,Ta,pa,ga,fa,Aa,Na,Sa,ya,Ca,wa,Ra,ma,Ia,Da,ba,Oa,Ua,
La,Pa,$a,Fa,Ma,Ha,ka,Ga,ja,xa,Ba,Ja,Wa,Va,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,Tl,pl,gl,
fl,Al,Nl,Sl,yl,Cl,wl,Rl,ml,Il,Dl,bl,Ol,Ul,Ll,Pl,$l,Fl,Ml,Hl,kl,Gl,jl,xl,Bl,Jl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,
ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu,Tu,pu,gu,fu,Au,Nu,Su,yu,Cu,wu,Ru,mu,Iu,Du=require("fs"),bu=require("querystring"),
Ou=require("url"),Uu=require("path"),Lu=require("child_process"),Pu=require("crypto"),$u=e(Du),Fu=t(bu),Mu=e(Ou),Hu=e(Uu
),ku=e(Pu),
Gu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,ju=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},xu=function(){
this.__data__=[],this.size=0},Bu=function(e,t){return e===t||e!=e&&t!=t},Ju=Bu,Wu=function(e,t){for(var r=e.length;r--;
)if(Ju(e[r][0],t))return r;return-1},Vu=Wu,qu=Array.prototype,Ku=qu.splice,zu=Wu,Xu=Wu,Yu=Wu,Qu=xu,Zu=function(e){
var t=this.__data__;return!((e=Vu(t,e))<0||(e==t.length-1?t.pop():Ku.call(t,e,1),--this.size,0))},ec=function(e){
var t=this.__data__;return(e=zu(t,e))<0?void 0:t[e][1]},tc=function(e){return-1<Xu(this.__data__,e)},rc=function(e,t){
var r=this.__data__,n=Yu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Qu,
r.prototype.delete=Zu,r.prototype.get=ec,r.prototype.has=tc,r.prototype.set=rc,ft=eu=r,tu=function(){
this.__data__=new ft,this.size=0},ia=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Ql=function(e){return this.__data__.get(e)},Zl=function(e){return this.__data__.has(e)},
ou=ru="object"==typeof Gu&&Gu&&Gu.Object===Object&&Gu,au="object"==typeof self&&self&&self.Object===Object&&self,Ur=su=(
hs=ou||au||Function("return this")()).Symbol,ea=Object.prototype,At=ea.hasOwnProperty,Nt=ea.toString,
St=Ur?Ur.toStringTag:void 0,Lr=Object.prototype,yt=Lr.toString,Ct=function(e){var t,r,n=At.call(e,St),i=e[St];try{t=!(
e[St]=void 0)}catch(e){}return r=Nt.call(e),t&&(n?e[St]=i:delete e[St]),r},wt=function(e){return yt.call(e)},Rt=(na=su
)?na.toStringTag:void 0,It=lu=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
Rt&&Rt in Object(e)?Ct:wt)(e)},Dt=mt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
bt=function(e){return!!Dt(e)&&("[object Function]"==(e=It(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Pr=hs["__core-js_shared__"],
Yl=/[^.]+$/.exec((sr=Pr)&&sr.keys&&sr.keys.IE_PROTO||""),Ot=Yl?"Symbol(src)_1."+Yl:"",ar=Function.prototype,
Ut=ar.toString,Lt=bt,Pt=function(e){return!!Ot&&Ot in e},$t=mt,Ft=on=function(e){if(null!=e){try{return Ut.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},$r=/[\\^$.*+?()[\]{}|]/g,Mt=/^\[object .+?Constructor\]$/,
oa=Function.prototype,bu=Object.prototype,Ou=oa.toString,Uu=bu.hasOwnProperty,Ht=RegExp("^"+Ou.call(Uu).replace($r,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=function(e){return!(!$t(e
)||Pt(e))&&(Lt(e)?Ht:Mt).test(Ft(e))},Gt=function(e,t){return null==e?void 0:e[t]},qu=(Pu=function(e,t){return t=Gt(e,t)
,kt(t)?t:void 0})(hs,"Map"),Wu=Pu(Object,"create"),xt=jt=xu=Wu,wu=Object.prototype,Bt=wu.hasOwnProperty,Jt=xu,
Ru=Object.prototype,Wt=Ru.hasOwnProperty,Vt=xu,mu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Iu=function(e){var t,r=this.__data__;return xt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Bt.call(r,e)?r[e]:void 0},Qu=function(e){var t=this.__data__;return Jt?void 0!==t[e]:Wt.call(t,e)},
Zu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Vt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=jt?jt(null):{},this.size=0},i.prototype.delete=mu,i.prototype.get=Iu,
i.prototype.has=Qu,i.prototype.set=Zu,qt=i,Kt=eu,zt=qu,ec=function(){this.size=0,this.__data__={hash:new qt,map:new(
zt||Kt),string:new qt}},Xt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},er=Zt=Qt=Yt=function(e,t){
return e=e.__data__,Xt(t)?e["string"==typeof t?"string":"hash"]:e.map},tc=function(e){return e=Yt(this,e).delete(e),
this.size-=e?1:0,e},rc=function(e){return Qt(this,e).get(e)},Gu=function(e){return Zt(this,e).has(e)},ru=function(e,t){
var r=er(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=ec,o.prototype.delete=tc,
o.prototype.get=rc,o.prototype.has=Gu,o.prototype.set=ru,rr=qu,nr=au=o,ir=tr=eu,cs=ia,ea=Ql,Ur=Zl,Lr=function(e,t){var r
,n=this.__data__;if(n instanceof tr){if(r=n.__data__,!rr||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new nr(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=tu,s.prototype.delete=cs,
s.prototype.get=ea,s.prototype.has=Ur,s.prototype.set=Lr,na=s,or=au,Pr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Pr,lr=sr=a,ur=Yl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},cr=ar=function(e,t){return e.has(t)},oa=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new lr:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!ur(t,function(e,t){if(!cr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},bu=hs.Uint8Array,dr=bu,hr=Bu,_r=oa,Er=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},vr=Ou=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},$r=(Uu=su)?Uu.prototype:void 0,Tr=$r?$r.valueOf:void 0,Wu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new dr(e),new dr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return hr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=Er;case"[object Set]":return l=l||vr,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=_r(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(Tr)return Tr.call(e)==Tr.call(t)}return!1},wu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Ru=Array.isArray,gr=wu,fr=pr=Ru,xu=function(e,t,r){
return t=t(e),fr(e)?t:gr(t,r(e))},Ar=mu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Iu=Object.prototype,Nr=Iu.propertyIsEnumerable,Qu=(Sr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Ar(Sr(t),function(e){return Nr.call(t,e)}))}:function(){return[]},Zu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},yr=lu,ec=function(e){return Cr(e)&&"[object Arguments]"==yr(e)},
wr=Cr=tc=function(e){return null!=e&&"object"==typeof e},rc=Object.prototype,Rr=rc.hasOwnProperty,
mr=rc.propertyIsEnumerable,Gu=ec(function(){return arguments}())?ec:function(e){return wr(e)&&Rr.call(e,"callee"
)&&!mr.call(e,"callee")},ru=hs,eu=function(){return!1},ru=(ru=(tu=(Zl=(tu=(Zl=(Ql=ia={exports:{}}).exports
)&&!Zl.nodeType&&Zl)&&Ql&&!Ql.nodeType&&Ql)&&Zl.exports===tu)?ru.Buffer:void 0)?ru.isBuffer:void 0,Ql.exports=eu=ru||eu,
Ir=/^(?:0|[1-9]\d*)$/,cs=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Ir.test(e))&&-1<e&&e%1==0&&e<t},Dr=lu,br=ea=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Or=tc,Ur="[object Arguments]",Lr="[object Array]",
Pr="[object Boolean]",bu="[object Date]",Uu="[object Error]",$r="[object Function]",Ru="[object Map]",
rc="[object Object]",ec="[object RegExp]",Zl="[object Set]",tu="[object String]",ru="[object WeakMap]",
Ql="[object ArrayBuffer]",eu="[object DataView]",(Fr={}
)["[object Float32Array]"]=Fr["[object Float64Array]"]=Fr["[object Int8Array]"]=Fr["[object Int16Array]"]=Fr["[object Int32Array]"]=Fr["[object Uint8Array]"]=Fr["[object Uint8ClampedArray]"]=Fr["[object Uint16Array]"]=Fr["[object Uint32Array]"]=!0
,
Fr[Ur]=Fr[Lr]=Fr[Ql]=Fr[Pr]=Fr[eu]=Fr[bu]=Fr[Uu]=Fr[$r]=Fr[Ru]=Fr["[object Number]"]=Fr[rc]=Fr[ec]=Fr[Zl]=Fr[tu]=Fr[ru]=!1
,Iu=function(e){return Or(e)&&br(e.length)&&!!Fr[Dr(e)]},rc=function(t){return function(e){return t(e)}},ec=ou,ru=(ru=(
tu=Zl={exports:{}}).exports)&&!ru.nodeType&&ru,ru=(nu=ru&&tu&&!tu.nodeType&&tu)&&nu.exports===ru,iu=ru&&ec.process,
ec=function(){try{return nu&&nu.require&&nu.require("util").types||iu&&iu.binding&&iu.binding("util")}catch(e){}}(),
tu.exports=ec,ou=Iu,ec=(tu=(ru=Zl.exports)&&ru.isTypedArray)?rc(tu):ou,Mr=Zu,Hr=Gu,kr=pr,Gr=ia.exports,jr=cs,xr=Iu=ec,
ru=Object.prototype,Br=ru.hasOwnProperty,tu=function(e,t){var r,n=kr(e),i=!n&&Hr(e),o=!n&&!i&&Gr(e),s=!n&&!i&&!o&&xr(e),
a=n||i||o||s,l=a?Mr(e.length,String):[],u=l.length;for(r in e)!t&&!Br.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||jr(r,u))||l.push(r);return l},
Jr=Object.prototype,ou=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Jr)},
yu=Object.keys,Cu=Object,Wr=ou,Vr=function(e){return yu(Cu(e))},ec=Object.prototype,qr=ec.hasOwnProperty,Kr=bt,zr=ea,
Xr=tu,Yr=function(e){var t,r;if(!Wr(e))return Vr(e);for(r in t=[],Object(e))qr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Qr=ru=function(e){return null!=e&&zr(e.length)&&!Kr(e)},Zr=xu,en=Qu,tn=ou=function(e){return(Qr(e)?Xr:Yr)(e)}
,rn=function(e){return Zr(e,tn,en)},Zu=Object.prototype,nn=Zu.hasOwnProperty,ec=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,T,p=1&r,g=rn(e),f=g.length;if(f!=rn(t).length&&!p)return!1;for(s=f;s--;)if(a=g[s],!(p?a in t:nn.call(t,a))
)return!1;if(v=o.get(e),T=o.get(t),v&&T)return v==t&&T==e;for(l=!0,o.set(e,t),o.set(t,e),u=p;++s<f;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?p?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},tu=Pu(hs,
"DataView"),xu=qu,Qu=Pu(hs,"Promise"),qu=Zu=Pu(hs,"Set"),hs=Pu(hs,"WeakMap"),sn=lu,ln="[object Map]",
un="[object Promise]",cn="[object Set]",dn="[object WeakMap]",hn="[object DataView]",_n=(an=on)(on=tu),En=an(xu),vn=an(
Qu),Tn=an(qu),pn=an(hs),tu=sn,(on&&tu(new on(new ArrayBuffer(1)))!=hn||xu&&tu(new xu)!=ln||Qu&&tu(Qu.resolve()
)!=un||qu&&tu(new qu)!=cn||hs&&tu(new hs)!=dn)&&(tu=function(e){var t=sn(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?an(e):"")switch(e){case _n:return hn;case En:return ln;case vn:return un
;case Tn:return cn;case pn:return dn}return t}),gn=na,fn=oa,An=Wu,Nn=ec,Sn=tu,yn=pr,Cn=ia.exports,wn=Iu,
Rn="[object Arguments]",mn="[object Array]",In="[object Object]",qu=Object.prototype,Dn=qu.hasOwnProperty,bn=function(e,
t,r,n,i,o){var s,a,l=yn(e),u=yn(t),c=l?mn:Sn(e),d=u?mn:Sn(t),h=(c=c==Rn?In:c)==In,u=(d=d==Rn?In:d)==In;if((d=c==d)&&Cn(e
)){if(!Cn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new gn,l||wn(e)?fn(e,t,r,n,i,o):An(e,t,c,r,n,i,o)):1&r||(
s=h&&Dn.call(e,"__wrapped__"),a=u&&Dn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new gn,Nn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new gn)},Un=na,Ln=hs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!On(t)&&!On(r
)?t!=t&&r!=r:bn(t,r,n,i,e,o))},Pn=mt,$n=oa=function(e){return e==e&&!Pn(e)},Fn=ou,Mn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Un,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Ln(a,s,3,n,l):u))return!1;return!0},Hn=function(e){for(var t,r,n=Fn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
$n(r)];return n},kn=Wu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
ec=function(t){var r=Hn(t);return 1==r.length&&r[0][2]?kn(r[0][0],r[0][1]):function(e){return e===t||Mn(e,t,r)}},Gn=lu,
jn=On=tc,xn=pr,Bn=tu=function(e){return"symbol"==typeof e||jn(e)&&"[object Symbol]"==Gn(e)},
Jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wn=/^\w*$/,ia=function(e,t){if(xn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Bn(e))||Wn.test(e)||!Jn.test(e)||null!=t&&e in Object(t)},
Vn=au,qn="Expected a function",l.Cache=Vn,
Kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zn=/\\(\\)?/g,Qu=0
,Su=(Qu=l(Qu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Kn,function(e,t,r,n){i.push(
r?n.replace(zn,"$1"):t||e)}),i},function(e){return 500===Su.size&&Su.clear(),e})).cache,Xn=ju,na=(qu=su
)?qu.prototype:void 0,Zn=na?na.toString:void 0,ei=au=function e(t){if("string"==typeof t)return t;if(Yn(t))return Xn(t,e
)+"";if(Qn(t))return Zn?Zn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ni=Qu,ii=qu=function(e){
return null==e?"":ei(e)},oi=Qn=tu,ci=si=na=function(e,t){return ti(e)?e:ri(e,t)?[e]:ni(ii(e))},di=Gu,Ei=ea,Ti=function(e
,t){return null!=e&&t in Object(e)},pi=Iu=function(e,t,r){for(var n,i,o=(t=ci(t,e)).length,s=!(n=-1);++n<o&&(i=vi(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&Ei(o)&&_i(i,o)&&(hi(e)||di(e))},gi=hs,
fi=ui=function(e,t,r){return void 0===(t=null==e?void 0:li(e,t))?r:t},Ai=function(e,t){return null!=e&&pi(e,t,Ti)},Si=oa
,yi=Wu,wi=li=ea=function(e,t){for(var r=0,n=(t=si(t,e)).length;null!=e&&r<n;)e=e[ai(t[r++])];return r&&r==n?e:void 0},
Ri=function(t){return function(e){return null==e?void 0:e[t]}},mi=function(t){return function(e){return wi(e,t)}},
Ii=Ni=ri=ia,Di=Ci=vi=ai=hs=function(e){if("string"==typeof e||oi(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
bi=ec,Oi=function(r,n){return Ni(r)&&Si(n)?yi(Ci(r),n):function(e){var t=fi(e,r);return void 0===t&&t===n?Ai(e,r):gi(n,t
,3)}},Ui=oa=function(e){return e},Li=hi=ti=Yn=pr,Pi=function(e){return Ii(e)?Ri(Di(e)):mi(e)},$i=ia=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Fi=ou,Gi=ju,xi=ia=function(e,n){
var i=-1,o=ki(e)?Array(e.length):[];return Hi(e,function(e,t,r){o[++i]=n(e,t,r)}),o},Ji=function(e,t){return(Bi(e)?Gi:xi
)(e,ji(t))},Vi=Bu,qi=ki=Mi=ru,Ki=_i=cs,zi=mt,Xi=Yl,Qi=function(e,n){var i;return Wi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},to=function(e,t,r){var n=Zi(e)?Xi:Qi;return r&&eo(e,t,r)&&(t=void 0),n(e,Yi(t))},ro=Wi=Hi=Yl=ec=function(e,t){
if(null==e)return e;if(!Mi(e))return e&&$i(e,t,Fi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},no=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},io=function(e,n){
var i=!0;return ro(e,function(e,t,r){return i=!!n(e,t,r)}),i},oo=Yi=ji=Wu=function(e){
return"function"==typeof e?e:null==e?Ui:"object"==typeof e?Li(e)?Oi(e[0],e[1]):bi(e):Pi(e)},so=Zi=Bi=pr,
ao=eo=ec=function(e,t,r){if(!zi(r))return!1;var n=typeof t;return!!("number"==n?qi(r)&&Ki(t,r.length
):"string"==n&&t in r)&&Vi(r[t],e)},lo=function(e,t,r){var n=so(e)?no:io;return r&&ao(e,t,r)&&(t=void 0),n(e,oo(t))},
uo=Pu,Pu=function(){try{var e=uo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),co=Pu,ho=function(e,t,r){
"__proto__"==t&&co?co(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},_o=Bu,Bu=Object.prototype,
Eo=Bu.hasOwnProperty,vo=function(e,t,r){var n=e[t];Eo.call(e,t)&&_o(n,r)&&(void 0!==r||t in e)||ho(e,t,r)},To=na,po=cs,
fo=hs,Ao=function(e,t,r,n){var i,o,s,a,l,u,c;if(!go(e))return e;for(i=-1,s=(o=(t=To(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=fo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=go(c)?c:po(t[i+1])?[]:{})),vo(a,l,u),a=a[l]}return e},No=function(e,t,r){return null==e?e:Ao(e,t,r)},So=Gu
,Co=(Bu=su)?Bu.isConcatSpreadable:void 0,Ro=function(e){return yo(e)||So(e)||!!(Co&&e&&e[Co])},mo=wo=wu,
Io=na=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||Ro,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):wo(o,s
):i||(o[o.length]=s);return o},Do=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
bo=yo=pr,Oo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return mo(bo(t)?Do(t):[t],Io(e,1))},Uo=Wu,Lo=ru,Po=ou,cs=function(o){return function(e,t,r){var n,
i=Object(e);return Lo(e)||(n=Uo(t),e=Po(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
hs=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},$o=/\s/,Fo=function(
e){for(var t=e.length;t--&&$o.test(e.charAt(t)););return t},Mo=/^\s+/,Ho=Gu=function(e){return e&&e.slice(0,Fo(e)+1
).replace(Mo,"")},ko=go=mt,Go=tu,jo=/^[-+]0x[0-9a-f]+$/i,xo=/^0b[01]+$/i,Bo=/^0o[0-7]+$/i,Jo=parseInt,Wo=function(e){
var t;return"number"==typeof e?e:Go(e)?NaN:(ko(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=ko(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Ho(e),(t=xo.test(e))||Bo.test(e)?Jo(e.slice(2),t?2:8):jo.test(e)?NaN:+e))},
Vo=17976931348623157e292,qo=function(e){return e?(e=Wo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Vo:0===e?e:0},Ko=hs,zo=Wu
,Xo=su=function(e){var t=qo(e),e=t%1;return t==t?e?t-e:t:0},Yo=Math.max,Bu=cs(Qo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Xo(r))<0&&(r=Yo(n+r,0)),Ko(e,zo(t),r)):-1}),Zo=Bu,es=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},ts=Yl,rs=Wu,ns=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},is=pr,os=function(e,t,r){var n=is(e)?es:ns,i=arguments.length<3
;return n(e,rs(t),r,i,ts)},wu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},ss=hs,as=function(e){return e!=e},ls=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},us=ru=function(e,t,r){return t==t?ls(e,t,r):ss(e,as,r)},
cs=function(e,t){return!(null==e||!e.length)&&-1<us(e,t,0)},Bu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},hs=function(){},hs=(ds=Zu)&&1/Ou(new ds([,-0]))[1]==1/0?function(e){return new ds(e)
}:hs,_s=sr,Es=cs,vs=Bu,Ts=ar,ps=hs,gs=Ou,fs=function(e,t,r){var n,i,o,s,a=-1,l=Es,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=vs;else if(200<=u){if(n=t?null:ps(e))return gs(n);c=!1,l=Ts,h=new _s}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},As=function(e){return e&&e.length?fs(e):[]},Ns=tu,Ss=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=Ns(e),s=void 0!==t,a=null===t,l=t==t,u=Ns(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},ys=ju,Cs=ea,ws=Wu,Rs=ia,ms=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,Is=rc,Ds=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=Ss(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},bs=oa,Os=pr,tu=function(e,n,r){var i;return n=n.length?ys(n
,function(t){return Os(t)?function(e){return Cs(e,1===t.length?t[0]:t)}:t}):[bs],i=-1,n=ys(n,Is(ws)),e=Rs(e,function(t,e
,r){return{criteria:ys(n,function(e){return e(t)}),index:++i,value:t}}),ms(e,function(e,t){return Ds(e,t,r)})},
Us=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ls=Math.max,ea=function(o,s,a){return s=Ls(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ls(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Us(o,this,e)}},Ps=function(e){return function(){return e}},$s=Pu,
Fs=Date.now,fu=$s?function(e,t){return $s(e,"toString",{configurable:!0,enumerable:!1,value:Ps(t),writable:!0})}:oa,
Ms=na,Hs=tu,ks=ec,(ia=function(){var e=Fs(),t=16-e+ +Nu;if(Nu=e,0<t){if(800<=++Au)return arguments[0]}else Au=0
;return fu.apply(void 0,arguments)})(ea(Ou=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&ks(e,t[0],t[1]
)?t=[]:2<r&&ks(t[0],t[1],t[2])&&(t=[t[0]]),Hs(e,Ms(t,1),[])},void(Nu=Au=0),oa),Ou+""),js=mu,xs=function(e,n){var i=[]
;return Gs(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Bs=Wu,Ws=function(e,t){return(Js(e)?js:xs)(e,Bs(t))},Vs=oa,
qs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Ks=Gs=Yl,zs=function(e){
return"function"==typeof e?e:Vs},Xs=Js=pr,Ys=function(e,t){return(Xs(e)?qs:Ks)(e,zs(t))},Qs=wu,Pu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Qs(e,t,r)},Zs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),ea=function(e){return Zs.test(e)}
,ta=lu,ra=tc,ia=function(e){return ra(e)&&"[object RegExp]"==ta(e)},mu=(tu=(na=Zl.exports)&&na.isRegExp)?rc(tu):ia,
Wu=function(e){return e.split("")},Yl="["+(oa="\\ud800-\\udfff")+"]",rc=(wu="[\\ufe0e\\ufe0f]?")+(rc="(?:"+(
Zl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(na="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
tu="[^"+oa+"]",ia="(?:\\ud83c[\\udde6-\\uddff]){2}",oa="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+wu+rc+")*",
Yl="(?:"+[tu+Zl+"?",Zl,ia,oa,Yl].join("|")+")",sa=RegExp(na+"(?="+na+")|"+Yl+rc,"g"),aa=Wu,ua=function(e){
return e.match(sa)||[]},ha=la=ea,_a=ec,Ea=mu,pa=function(e,t,r){return r&&"number"!=typeof r&&_a(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=Ta(e))&&("string"==typeof t||null!=t&&!Ea(t))&&!(t=ca(t))&&ha(e)?da(va(e),0,r
):e.split(t,r):[]},fa=ga=ru,Aa=ca=au,Na=Gu,Sa=da=Pu,ya=function(e,t){for(var r=e.length;r--&&-1<ga(t,e[r],0););return r}
,Ca=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<fa(t,e[r],0););return r},wa=va=function(e){return(la(e)?ua:aa)(e)},
Ra=Ta=qu,ma=function(e,t,r){return(e=Ra(e))&&(r||void 0===t)?Na(e):e&&(t=Aa(t))?(r=wa(e),e=wa(t),t=Ca(r,e),e=ya(r,e)+1,
Sa(r,t,e).join("")):e},Pu=Object.prototype,Ia=Pu.hasOwnProperty,Da=function(e,t){return null!=e&&Ia.call(e,t)},ba=Iu,
Oa=function(e,t){return null!=e&&ba(e,t,Da)},Pa="[object Boolean]",$a=function(e){return!0===e||!1===e||La(e)&&Ua(e)==Pa
},Fa=function(e){return null===e},Ha=pr,Ga="[object String]",ja=function(e){return"string"==typeof e||!Ha(e)&&ka(e)&&Ma(
e)==Ga},xa=Ma=Ua=lu,Ba=ka=La=tc,Ja="[object Number]",Wa=function(e){return"number"==typeof e||Ba(e)&&xa(e)==Ja},
qa=function(e){return"number"==typeof e&&e==Va(e)},Qa=function(e,t,r){return e=Ya(e),r=null==r?0:Ka(Xa(r),0,e.length),
t=za(t),e.slice(r,r+t.length)==t},Za=Ka=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},el=za=au,tl=Xa=Va=su,rl=Ya=qu,nl=function(e,t,r){var n;return e=rl(e),t=el(t),n=e.length,n=r=void 0===r?n:Za(tl(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},il=ju,ol=function(t,e){return il(e,function(e){return t[e]})},sl=ou,al=function(e
){return null==e?[]:ol(e,sl(e))},lu=Array.prototype,ll=lu.join,ul=function(e,t){return null==e?"":ll.call(e,t)},(
tc=cl={})[tc.DEBUG=0]="DEBUG",tc[tc.INFO=1]="INFO",tc[tc.WARN=2]="WARN",tc[tc.ERROR=3]="ERROR",tc[tc.NONE=4]="NONE",
dl=cl;const nc=null!==(au=U("1.0.9"))&&void 0!==au?au:"?";qu=null!==(su=U(""))&&void 0!==su?su:"io.nor.fi",ou=null!==(
ju=U(""))&&void 0!==ju?ju:"nor-pipeline-runner",tc=null!==(lu=U(""))&&void 0!==lu?lu:"",su=null!==(au=U("")
)&&void 0!==au?au:"";const ic=null!==(ju=U("production"))&&void 0!==ju?ju:"development",oc=null!==(lu=U(
"2021-09-20T14:56:39.958Z"))&&void 0!==lu?lu:"";ju=null!==(au=U(""))&&void 0!==au?au:"${",au=null!==(lu=U("")
)&&void 0!==lu?lu:"}";const sc=null===(lu=b(""))||void 0===lu||lu,ac=null===(lu=b(""))||void 0===lu||lu,lc=null===(lu=b(
""))||void 0===lu||lu,uc=null===(lu=b(""))||void 0===lu||lu;lu="production"===ic;const cc="test"===ic,dc=!lu&&!cc
;tc=null!==(dt=function(e){if(e){if(function(){switch(e){case cl.DEBUG:case cl.INFO:case cl.WARN:case cl.ERROR:
case cl.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return cl.DEBUG
;case"INFO":return cl.INFO;case"WARN":case"WARNING":return cl.WARN;case"ERR":case"ERROR":return cl.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return cl.NONE;default:return}}}(null!==(dt=U(null===(lu=process
)||void 0===lu||null===(dt=lu.env)||void 0===dt?void 0:dt.PIPELINE_LOG_LEVEL))&&void 0!==dt?dt:U(tc))
)&&void 0!==dt?dt:dl.INFO;const hc=null!==(ht=U(null===(dt=process)||void 0===dt||null===(ht=dt.env
)||void 0===ht?void 0:ht.PIPELINE_SERVER))&&void 0!==ht?ht:ou,_c=null!==(_t=function(e){if(void 0!==e)return`${e}`}(
null===(ou=process)||void 0===ou||null===(_t=ou.env)||void 0===_t?void 0:_t.PIPELINE_AUTHENTICATION))&&void 0!==_t?_t:su
,Ec=null!==(Et=U(null===(su=process)||void 0===su||null===(Et=su.env)||void 0===Et?void 0:Et.PIPELINE_SERVER)
)&&void 0!==Et?Et:qu,vc=null!==(vt=U(null===(qu=process)||void 0===qu||null===(vt=qu.env
)||void 0===vt?void 0:vt.PIPELINE_VARIABLE_PREFIX))&&void 0!==vt?vt:ju,Tc=null!==(Tt=U(null===(ju=process
)||void 0===ju||null===(Tt=ju.env)||void 0===Tt?void 0:Tt.PIPELINE_VARIABLE_SUFFIX))&&void 0!==Tt?Tt:au;class pc{
constructor(e,t){c(this,"_logger",void 0),c(this,"name",void 0),c(this,"_level",void 0),this.name=e,this._logger=t,
this._level=void 0}getLogLevel(){var e;return null!==(e=this._level)&&void 0!==e?e:this._logger.getLogLevel()}
setLogLevel(e){return this._level=e,this}debug(...e){(void 0===this._level||this._level<=dl.DEBUG)&&this._logger.debug(
`[${this.name}]`,...e)}info(...e){(void 0===this._level||this._level<=dl.INFO)&&this._logger.info(`[${this.name}]`,...e)
}warn(...e){(void 0===this._level||this._level<=dl.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=dl.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class gc{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){return function(e){
switch(e){case cl.DEBUG:return"DEBUG";case cl.INFO:return"INFO";case cl.WARN:return"WARN";case cl.ERROR:return"ERROR"
;case cl.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=dl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=dl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=dl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=dl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new pc(e,gc)}}c(gc,"Level",dl),c(gc,"_level",dl.DEBUG),c(gc,"_logger",console),(au=hl={}
)[au.HTTP=0]="HTTP",au[au.LOCAL=1]="LOCAL",au[au.MATRIX=2]="MATRIX",_l=hl,(au=El={})[au.NONE=0]="NONE",
au[au.BASIC_AUTH=1]="BASIC_AUTH",au[au.BEARER_AUTH=2]="BEARER_AUTH",vl=El;class fc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=k(e))&&void 0!==r?r:M(e):null!==(r=k(e,t))&&void 0!==r?r:M(e,t)}}
const Ac=gc.createLogger("MatrixRunnerResource");class Nc{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return y(t=e)&&D(t,["type","url","authentication"])&&(null==t?void 0:t.type)===_l.HTTP&&T(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=ma(`${e}`)
).toLowerCase(),Qa(t,"http:")||Qa(t,"https:")?(t=new URL(e),t=null!==(t=fc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:fc.parseRunnerAuthentication(_c),{type:_l.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return y(t=e)&&D(t,["type","path"])&&(null==t?void 0:t.type
)===_l.LOCAL&&T(null==t?void 0:t.path)?e:(e=ma(`${e}`),(e=Qa(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&$u.default.existsSync(e)?{type:_l.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(y(s=i)&&D(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===_l.MATRIX&&p(null==s?void 0:s.pool)&&T(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=ma(
`${i}`),Ac.debug(`value: '${i}'`);let e=i.toLowerCase();if(Ac.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),Ac.debug(`lowerCaseValue: '${e}'`),Qa(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),Ac.debug(`url: '${s}': `,s),o=null!==(o=fc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:fc.parseRunnerAuthentication(_c),Ac.debug(
"auth: ",o);const e=`${s.host}`;Ac.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),Ac.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return Ac.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,Ac.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",Ac.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,Ac.debug(`pool: '${s}'`),{type:_l.MATRIX,homeserver:e,pool:s,
authentication:o}}Qa(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Qa(e,"!")||Qa(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Ec}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||_c,r=r||Ec,{type:_l.MATRIX,homeserver:r,pool:n,
authentication:fc.parseRunnerAuthentication(t)}}}(e)}}(au=Tl={})[au.OK=0]="OK",au[au.GENERAL_ERRORS=1]="GENERAL_ERRORS",
au[au.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",au[au.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
au[au.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",au[au.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
au[au.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",au[au.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
au[au.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",au[au.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
au[au.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",au[au.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
au[au.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",au[au.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
au[au.FATAL_ERROR=14]="FATAL_ERROR",au[au.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
au[au.WORK_CANCELLED=16]="WORK_CANCELLED",au[au.CONFLICT=17]="CONFLICT",au[au.NO_WORK_AVAILABLE=18]="NO_WORK_AVAILABLE",
au[au.USAGE=64]="USAGE",au[au.DATAERR=65]="DATAERR",au[au.NOINPUT=66]="NOINPUT",au[au.NOUSER=67]="NOUSER",
au[au.NOHOST=68]="NOHOST",au[au.UNAVAILABLE=69]="UNAVAILABLE",au[au.SOFTWARE=70]="SOFTWARE",au[au.OSERR=71]="OSERR",
au[au.OSFILE=72]="OSFILE",au[au.CANTCREAT=73]="CANTCREAT",au[au.IOERR=74]="IOERR",au[au.TEMPFAIL=75]="TEMPFAIL",
au[au.PROTOCOL=76]="PROTOCOL",au[au.NOPERM=77]="NOPERM",au[au.CONFIG=78]="CONFIG",
au[au.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
au[au.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",au[au.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
au[au.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
au[au.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
au[au.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",pl=Tl,(au=gl={})[au.OPTIONS=0]="OPTIONS",
au[au.GET=1]="GET",au[au.POST=2]="POST",au[au.PUT=3]="PUT",au[au.DELETE=4]="DELETE",au[au.PATCH=5]="PATCH",uu=gl
;const Sc="WINDOW"===(cu=null!==(cu=null!==(pt=null===(au=process)||void 0===au||null===(pt=au.env
)||void 0===pt?void 0:pt.NOR_REQUEST_CLIENT_MODE)&&void 0!==pt?pt:null===(cu=process)||void 0===cu||null===(gt=cu.env
)||void 0===gt?void 0:gt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==cu?cu:"")||!("undefined"==typeof window||!window.fetch
),yc="NODE"===cu||!Sc;class Cc{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await Cc.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await Cc.getRequestDataAsString(e)))return Fu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await Cc.getRequestDataAsString(e)))return JSON.parse(e)}}(cu=fl={}
)[cu.Continue=100]="Continue",cu[cu.SwitchingProtocols=101]="SwitchingProtocols",cu[cu.Processing=102]="Processing",
cu[cu.CheckPoint=103]="CheckPoint",cu[cu.OK=200]="OK",cu[cu.Created=201]="Created",cu[cu.Accepted=202]="Accepted",
cu[cu.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",cu[cu.NoContent=204]="NoContent",
cu[cu.ResetContent=205]="ResetContent",cu[cu.PartialContent=206]="PartialContent",cu[cu.MultiStatus=207]="MultiStatus",
cu[cu.AlreadyReported=208]="AlreadyReported",cu[cu.IMUsed=226]="IMUsed",cu[cu.MultipleChoices=300]="MultipleChoices",
cu[cu.MovedPermanently=301]="MovedPermanently",cu[cu.Found=302]="Found",cu[cu.SeeOther=303]="SeeOther",
cu[cu.NotModified=304]="NotModified",cu[cu.TemporaryRedirect=307]="TemporaryRedirect",
cu[cu.PermanentRedirect=308]="PermanentRedirect",cu[cu.BadRequest=400]="BadRequest",
cu[cu.Unauthorized=401]="Unauthorized",cu[cu.PaymentRequired=402]="PaymentRequired",cu[cu.Forbidden=403]="Forbidden",
cu[cu.NotFound=404]="NotFound",cu[cu.MethodNotAllowed=405]="MethodNotAllowed",cu[cu.NotAcceptable=406]="NotAcceptable",
cu[cu.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",cu[cu.RequestTimeout=408]="RequestTimeout",
cu[cu.Conflict=409]="Conflict",cu[cu.Gone=410]="Gone",cu[cu.LengthRequired=411]="LengthRequired",
cu[cu.PreconditionFailed=412]="PreconditionFailed",cu[cu.PayloadTooLarge=413]="PayloadTooLarge",
cu[cu.URITooLong=414]="URITooLong",cu[cu.UnsupportedMediaType=415]="UnsupportedMediaType",
cu[cu.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",cu[cu.ExpectationFailed=417]="ExpectationFailed",
cu[cu.IAmATeapot=418]="IAmATeapot",cu[cu.UnprocessableEntity=422]="UnprocessableEntity",cu[cu.Locked=423]="Locked",
cu[cu.FailedDependency=424]="FailedDependency",cu[cu.TooEarly=425]="TooEarly",
cu[cu.UpgradeRequired=426]="UpgradeRequired",cu[cu.PreconditionRequired=428]="PreconditionRequired",
cu[cu.TooManyRequests=429]="TooManyRequests",cu[cu.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
cu[cu.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",cu[cu.InternalError=500]="InternalError",
cu[cu.InternalServerError=500]="InternalServerError",cu[cu.NotImplemented=501]="NotImplemented",
cu[cu.BadGateway=502]="BadGateway",cu[cu.ServiceUnavailable=503]="ServiceUnavailable",
cu[cu.GatewayTimeout=504]="GatewayTimeout",cu[cu.HttpVersionNotSupported=505]="HttpVersionNotSupported",
cu[cu.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",cu[cu.InsufficientStorage=507]="InsufficientStorage",
cu[cu.LoopDetected=508]="LoopDetected",cu[cu.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
cu[cu.NotExtended=510]="NotExtended",cu[cu.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Al=fl,(
gu=gu||{}).ERROR="error",Nl=gu;class wc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case fl.Continue:return"Continue";case fl.SwitchingProtocols:return"Switching Protocols"
;case fl.Processing:return"Processing";case fl.CheckPoint:return"Check Point";case fl.OK:return"OK";case fl.Created:
return"Created";case fl.Accepted:return"Accepted";case fl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case fl.NoContent:return"No Content";case fl.ResetContent:return"Reset Content"
;case fl.PartialContent:return"Partial Content";case fl.MultiStatus:return"Multi Status";case fl.AlreadyReported:
return"Already Reported";case fl.IMUsed:return"IM Used";case fl.MultipleChoices:return"Multiple Choices"
;case fl.MovedPermanently:return"Moved Permanently";case fl.Found:return"Found";case fl.SeeOther:return"See Other"
;case fl.NotModified:return"Not Modified";case fl.TemporaryRedirect:return"Temporary Redirect"
;case fl.PermanentRedirect:return"Permanent Redirect";case fl.BadRequest:return"Bad Request";case fl.Unauthorized:
return"Unauthorized";case fl.PaymentRequired:return"Payment Required";case fl.Forbidden:return"Forbidden"
;case fl.NotFound:return"Not Found";case fl.MethodNotAllowed:return"Method Not Allowed";case fl.NotAcceptable:
return"Not Acceptable";case fl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case fl.RequestTimeout:
return"Request Timeout";case fl.Conflict:return"Conflict";case fl.Gone:return"Gone";case fl.LengthRequired:
return"Length Required";case fl.PreconditionFailed:return"Precondition Failed";case fl.PayloadTooLarge:
return"Payload Too Large";case fl.URITooLong:return"URI Too Long";case fl.UnsupportedMediaType:
return"Unsupported Media Type";case fl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case fl.ExpectationFailed:return"Expectation Failed";case fl.IAmATeapot:return"I Am a Teapot"
;case fl.UnprocessableEntity:return"Unprocessable Entity";case fl.Locked:return"Locked";case fl.FailedDependency:
return"Failed Dependency";case fl.TooEarly:return"Too Early";case fl.UpgradeRequired:return"Upgrade Required"
;case fl.PreconditionRequired:return"Precondition Required";case fl.TooManyRequests:return"Too Many Requests"
;case fl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case fl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case fl.InternalServerError:return"Internal Server Error";case fl.NotImplemented:
return"Not Implemented";case fl.BadGateway:return"Bad Gateway";case fl.ServiceUnavailable:return"Service Unavailable"
;case fl.GatewayTimeout:return"Gateway Timeout";case fl.HttpVersionNotSupported:return"Http Version Not Supported"
;case fl.VariantAlsoNegotiates:return"Variant Also Negotiates";case fl.InsufficientStorage:return"Insufficient Storage"
;case fl.LoopDetected:return"Loop Detected";case fl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case fl.NotExtended:return"Not Extended";case fl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),c(this,"status",void 0),c(this,"method",void 0),c(this,"url",
void 0),c(this,"body",void 0),c(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Nl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Rc=yc?require("fs").promises:void 0,mc=gc.createLogger(
"NodeRequestClient");class Ic{static setLogLevel(e){mc.setLogLevel(e)}constructor(e,t){c(this,"_http",void 0),c(this,
"_https",void 0),this._http=e,this._https=t}async jsonRequest(e,t,r,n){switch(e){case uu.GET:return this._getJson(t,r,n)
;case uu.POST:return this._postJson(t,r,n);case uu.PATCH:return this._patchJson(t,r,n);case uu.PUT:return this._putJson(
t,r,n);case uu.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Node]RequestClient: Unsupported method: ${e}`)}}async _checkSocketFile(t){try{const e=await Rc.stat(t)
;return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void mc.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void mc.debug("_checkSocketFile: ENOENT: ",e);throw mc.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e)
;return!0===t?e:!1!==t&&"/"!==(t=Hu.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){
const a=e?JSON.stringify(e)+"\n":void 0,l=new Mu.default.URL(o);let u;const c=null!==(
t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if("unix:"===c||"socket:"===c){
const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if("/"===r)throw new TypeError(
`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r)))throw new TypeError(
`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?mc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(mc.warn(
"Warning! Request had already ended when the response was received."),mc.debug("Error from event: ",e)):(mc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(mc.warn(
"Warning! Request had already ended when the response was received."),mc.debug("Exception: ",e)):(mc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await Cc.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(uu.GET,e,n,r).then(Ic._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(uu.PUT,e,n,r).then(Ic._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(uu.POST,e,n,r).then(
Ic._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(uu.PATCH,e,n,r).then(Ic._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(uu.DELETE,e,n,r).then(Ic._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw mc.error(`Unsuccessful response with status ${t}: `,e),new wc(t
,`Error ${t} for ${B(e.method)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Dc{constructor(e){c(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,r,n){switch(e){case uu.GET:return this._getJson(t,r,n);case uu.POST:
return this._postJson(t,r,n);case uu.PUT:return this._putJson(t,r,n);case uu.DELETE:return this._deleteJson(t,r,n)
;default:throw new TypeError(`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Dc._successResponse(e,uu.GET))}
_putJson(e,t,r){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Dc._successResponse(e,uu.PUT))}_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Dc._successResponse(e,uu.POST))}_deleteJson(e,t,r){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"}
;return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Dc._successResponse(e
,uu.DELETE))}static _successResponse(e,t){const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,
i=`${r} ${e.statusText} for ${B(t)} ${n}`;return e.json().then(e=>{throw new wc(r,i,t,n,e)})}return e.json()}}
const bc=yc?require("http"):void 0,Oc=yc?require("https"):void 0,Uc=gc.createLogger("RequestClient");class Lc{
static setLogLevel(e){Uc.setLogLevel(e),Ic.setLogLevel(e)}static async jsonRequest(e,t,r,n){
return this._client.jsonRequest(e,t,r,n)}static async getJson(e,t){return this._client.jsonRequest(uu.GET,e,t)}
static async postJson(e,t,r){return Uc.debug(".postJson: ",e,t,r),this._client.jsonRequest(uu.POST,e,r,t)}
static async patchJson(e,t,r){return Uc.debug(".patchJson: ",e,t,r),this._client.jsonRequest(uu.PATCH,e,r,t)}
static async putJson(e,t,r){return Uc.debug(".putJson: ",e,t,r),this._client.jsonRequest(uu.PUT,e,r,t)}
static async deleteJson(e,t,r){return Uc.debug(".deleteJson: ",e,r,t),this._client.jsonRequest(uu.DELETE,e,t,r)}
static _initClient(){if(Sc)return Uc.debug("Detected browser environment"),new Dc(window.fetch.bind(window));if(yc
)return new Ic(bc,Oc);throw new TypeError("Could not detect request client implementation")}}c(Lc,"_client",
Lc._initClient()),(gu=du=du||{}).JSON="json",gu.STRING="string",gu.BOOLEAN="boolean",gu.NUMBER="number",
gu.INTEGER="integer",pu=du,gu=["name","parameters","variables"];class Pc{static registerController(e){
this._stepControllers.push(e)}static findController(t){return Zo(this._stepControllers,e=>e.isControllerModel(t))}
static parseControllerModel(r){return os(this._stepControllers,(e,t)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}c(
Pc,"_stepControllers",[]);const $c=Oo(gu,["name","steps"]),Fc=Oo(gu,["name","jobs"]),Mc=Oo(gu,["name","stages"])
;class Hc{getName(){return this._name}constructor(e){c(this,"_name",void 0),c(this,"_callbacks",void 0),this._name=e,
this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return Oa(this._callbacks,e)}
triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Ys(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Ws(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
du=Sl={})[du.UNCONSTRUCTED=-1]="UNCONSTRUCTED",du[du.CONSTRUCTED=0]="CONSTRUCTED",du[du.STARTED=1]="STARTED",
du[du.PAUSED=2]="PAUSED",du[du.CANCELLED=3]="CANCELLED",du[du.FINISHED=4]="FINISHED",du[du.FAILED=5]="FAILED",yl=Sl,(
du=hu=hu||{}).NONE="fi.nor.pipeline.none",du.PIPELINE="fi.nor.pipeline",du.JOB="fi.nor.pipeline.job",
du.STAGE="fi.nor.pipeline.stage",du.TASK="fi.nor.pipeline.task",du.STEP="fi.nor.pipeline.step",
du.FILE="fi.nor.pipeline.step.file",du.SCRIPT="fi.nor.pipeline.step.script",du.VARIABLE="fi.nor.pipeline.step.variable",
du.JSON="fi.nor.pipeline.step.json",du.CSV="fi.nor.pipeline.step.csv",du.GIT="fi.nor.pipeline.step.git",Cl=hu
;const kc=gc.createLogger("JobController");(hu=wl={}).JOB_CHANGED="JobController:jobChanged",
hu.JOB_STARTED="JobController:jobStarted",hu.JOB_PAUSED="JobController:jobPaused",
hu.JOB_RESUMED="JobController:jobResumed",hu.JOB_CANCELLED="JobController:jobCancelled",
hu.JOB_FAILED="JobController:jobFailed",hu.JOB_FINISHED="JobController:jobFinished";class Gc{constructor(e,t,r=[]){if(c(
this,"_context",void 0),c(this,"_observer",void 0),c(this,"_name",void 0),c(this,"_steps",void 0),c(this,
"_changedCallback",void 0),c(this,"_state",void 0),c(this,"_stepDestructors",void 0),c(this,"_current",void 0),!J(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new Hc(`JobController#${this._name}`),
this._state=yl.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Ji(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=Ws(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){kc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Cl.JOB,
state:this._state,name:this._name,steps:Ji(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isStarted(){switch(this._state){case yl.PAUSED:
case yl.STARTED:return!0;case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:
return!1}}isPaused(){switch(this._state){case yl.PAUSED:return!0;case yl.STARTED:case yl.CONSTRUCTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isCancelled(){switch(this._state){case yl.CANCELLED:
case yl.UNCONSTRUCTED:return!0;case yl.PAUSED:case yl.STARTED:case yl.CONSTRUCTED:case yl.FINISHED:case yl.FAILED:
return!1}}isFinished(){switch(this._state){case yl.FINISHED:case yl.FAILED:case yl.CANCELLED:return!0
;case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:case yl.UNCONSTRUCTED:return!1}}isFailed(){switch(this._state){
case yl.FAILED:case yl.UNCONSTRUCTED:return!0;case yl.CONSTRUCTED:case yl.FINISHED:case yl.PAUSED:case yl.STARTED:
case yl.CANCELLED:return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:
case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:case yl.CANCELLED:case yl.UNCONSTRUCTED:return!1}}start(){if(
this._state!==yl.CONSTRUCTED)throw new Error(`Job#${this._name} was already started`);return kc.info(
`Starting job ${this._name}`),this._state=yl.STARTED,this._steps[this._current].start(),this._observer.hasCallbacks(
wl.JOB_STARTED)&&this._observer.triggerEvent(wl.JOB_STARTED,this),this._observer.hasCallbacks(wl.JOB_CHANGED
)&&this._observer.triggerEvent(wl.JOB_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Job#${this._name} was not running`);return kc.info(`Pausing job ${this._name}`),this._state=yl.PAUSED,
this._steps[this._current].pause(),this._observer.hasCallbacks(wl.JOB_PAUSED)&&this._observer.triggerEvent(wl.JOB_PAUSED
,this),this._observer.hasCallbacks(wl.JOB_CHANGED)&&this._observer.triggerEvent(wl.JOB_CHANGED,this),this}resume(){if(
!this.isPaused())throw new Error(`Job#${this._name} was not paused`);return kc.info(`Resuming job ${this._name}`),
this._state=yl.STARTED,this._steps[this._current].resume(),this._observer.hasCallbacks(wl.JOB_RESUMED
)&&this._observer.triggerEvent(wl.JOB_RESUMED,this),this._observer.hasCallbacks(wl.JOB_CHANGED
)&&this._observer.triggerEvent(wl.JOB_CHANGED,this),this}stop(){if(this._state!==yl.STARTED)throw new Error(
`Job#${this._name} was not started`);return kc.info(`Stopping job ${this._name}`),this._state=yl.CANCELLED,
this._steps[this._current].stop(),this._observer.hasCallbacks(wl.JOB_CANCELLED)&&this._observer.triggerEvent(
wl.JOB_CANCELLED,this),this._observer.hasCallbacks(wl.JOB_CHANGED)&&this._observer.triggerEvent(wl.JOB_CHANGED,this),
this}onCancelled(e){return this.on(wl.JOB_CANCELLED,e)}onChanged(e){return this.on(wl.JOB_CHANGED,e)}onFailed(e){
return this.on(wl.JOB_FAILED,e)}onFinished(e){return this.on(wl.JOB_FINISHED,e)}onPaused(e){return this.on(wl.JOB_PAUSED
,e)}onResumed(e){return this.on(wl.JOB_RESUMED,e)}onStarted(e){return this.on(wl.JOB_STARTED,e)}getErrorString(){
return Ji(this._steps,e=>e.getErrorString()).join("\n")}getOutputString(){return Ji(this._steps,e=>e.getOutputString()
).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._steps[this._current];if(t===i)if(i.isFinished(
)&&this.isStarted()){try{r=this._steps.indexOf(i),this._stepDestructors[r]()}catch(e){kc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}i.isFailed()?(this._state=yl.FAILED,
this._observer.hasCallbacks(wl.JOB_FAILED)&&this._observer.triggerEvent(wl.JOB_FAILED,this)):i.isCancelled()?(
this._state=yl.CANCELLED,this._observer.hasCallbacks(wl.JOB_CANCELLED)&&this._observer.triggerEvent(wl.JOB_CANCELLED,
this)):(this._current+=1,this._current<this._steps.length?(this._state=yl.STARTED,this._steps[this._current].start(),
n===yl.PAUSED&&this._observer.hasCallbacks(wl.JOB_RESUMED)&&this._observer.triggerEvent(wl.JOB_RESUMED,this)):(
this._state=yl.FINISHED,this._observer.hasCallbacks(wl.JOB_FINISHED)&&this._observer.triggerEvent(wl.JOB_FINISHED,this))
),this._observer.hasCallbacks(wl.JOB_CHANGED)&&this._observer.triggerEvent(wl.JOB_CHANGED,this)}else i.isPaused(
)&&!this.isPaused()?(this._state=yl.PAUSED,this._observer.hasCallbacks(wl.JOB_PAUSED)&&this._observer.triggerEvent(
wl.JOB_PAUSED,this),this._observer.hasCallbacks(wl.JOB_CHANGED)&&this._observer.triggerEvent(wl.JOB_CHANGED,this)
):i.isStarted()&&this.isPaused()&&(this._state=yl.STARTED,this._observer.hasCallbacks(wl.JOB_RESUMED
)&&this._observer.triggerEvent(wl.JOB_RESUMED,this),this._observer.hasCallbacks(wl.JOB_CHANGED
)&&this._observer.triggerEvent(wl.JOB_CHANGED,this))}}c(Gc,"Event",wl);const jc=gc.createLogger("StageController");(
hu=Rl={}).STAGE_STARTED="StageController:stageStarted",hu.STAGE_PAUSED="StageController:stagePaused",
hu.STAGE_RESUMED="StageController:stageResumed",hu.STAGE_FINISHED="StageController:stageFinished",
hu.STAGE_FAILED="StageController:stageFailed",hu.STAGE_CANCELLED="StageController:stageCancelled",
hu.STAGE_CHANGED="StageController:stageChanged";class xc{constructor(e,t,r){if(c(this,"_context",void 0),c(this,
"_observer",void 0),c(this,"_name",void 0),c(this,"_jobs",void 0),c(this,"_changedCallback",void 0),c(this,"_state",
void 0),c(this,"_jobDestructors",void 0),!J(t))throw new TypeError(`Stage name invalid: ${t}`);if(!d(r,ae,1)
)throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,this._state=yl.CONSTRUCTED,this._name=t,
this._jobs=r,this._observer=new Hc(`StageController#${this._name}`),this._changedCallback=this._onChanged.bind(this),
this._jobDestructors=Ji(r,e=>e.onChanged(this._changedCallback))}getContext(){return this._context}getState(){
return this._state}getName(){return this._name}destroy(){this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`}getStateDTO(){return{
type:Cl.STAGE,state:this._state,name:this._name,jobs:Ji(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case yl.CANCELLED:return!0;case yl.FINISHED:case yl.FAILED:
case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:case yl.UNCONSTRUCTED:return!1}}isFailed(){switch(this._state){
case yl.FAILED:case yl.UNCONSTRUCTED:return!0;case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.PAUSED:
case yl.STARTED:return!1}}isFinished(){switch(this._state){case yl.FINISHED:case yl.FAILED:case yl.CANCELLED:return!0
;case yl.CONSTRUCTED:case yl.PAUSED:case yl.STARTED:case yl.UNCONSTRUCTED:return!1}}isPaused(){switch(this._state){
case yl.PAUSED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.STARTED:
case yl.UNCONSTRUCTED:return!1}}isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.FAILED:
case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}isStarted(){switch(this._state){
case yl.PAUSED:case yl.STARTED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:
case yl.UNCONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.PAUSED:
case yl.STARTED:case yl.FAILED:case yl.CANCELLED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}onCancelled(e){
return this.on(Rl.STAGE_CANCELLED,e)}onChanged(e){return this.on(Rl.STAGE_CHANGED,e)}onFailed(e){return this.on(
Rl.STAGE_FAILED,e)}onFinished(e){return this.on(Rl.STAGE_FINISHED,e)}onPaused(e){return this.on(Rl.STAGE_PAUSED,e)}
onResumed(e){return this.on(Rl.STAGE_RESUMED,e)}onStarted(e){return this.on(Rl.STAGE_STARTED,e)}start(){if(
this._state!==yl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return jc.info(
`Starting stage ${this._name}`),this._state=yl.STARTED,Ws(this._jobs,t=>{try{return t.start(),!1}catch(e){
return jc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=yl.FAILED,
this._observer.hasCallbacks(Rl.STAGE_FAILED)&&this._observer.triggerEvent(Rl.STAGE_FAILED,this)
):this._observer.hasCallbacks(Rl.STAGE_STARTED)&&this._observer.triggerEvent(Rl.STAGE_STARTED,this),
this._observer.hasCallbacks(Rl.STAGE_CHANGED)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this),this}pause(){if(
this._state===yl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);jc.info(`Pausing stage ${this._name}`)
,this._state=yl.PAUSED;var e=Ws(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return jc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Rl.STAGE_PAUSED
)&&this._observer.triggerEvent(Rl.STAGE_PAUSED,this),this._observer.hasCallbacks(Rl.STAGE_CHANGED
)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this),this}resume(){if(this._state===yl.STARTED)throw new Error(
`Stage#${this._name} was already started`);jc.info(`Resuming stage ${this._name}`),this._state=yl.STARTED;var e=Ws(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return jc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Rl.STAGE_RESUMED
)&&this._observer.triggerEvent(Rl.STAGE_RESUMED,this),this._observer.hasCallbacks(Rl.STAGE_CHANGED
)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);jc.info(`Stopping stage ${this._name}`),this._state=yl.CANCELLED;var e=Ws(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return jc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&jc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Ji(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Ji(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;A(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Ws(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){jc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=f(this._jobs,e=>e.isFailed()),n=f(this._jobs,
e=>e.isCancelled()),r&&this._state!==yl.FAILED?(this._state=yl.FAILED,this._observer.hasCallbacks(Rl.STAGE_FAILED
)&&this._observer.triggerEvent(Rl.STAGE_FAILED,this),this._observer.hasCallbacks(Rl.STAGE_CHANGED
)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this)):n&&this._state!==yl.CANCELLED?(this._state=yl.CANCELLED,
this._observer.hasCallbacks(Rl.STAGE_CANCELLED)&&this._observer.triggerEvent(Rl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(Rl.STAGE_CHANGED)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this)
):this._state!==yl.FINISHED&&(this._state=yl.FINISHED,this._observer.hasCallbacks(Rl.STAGE_FINISHED
)&&this._observer.triggerEvent(Rl.STAGE_FINISHED,this),this._observer.hasCallbacks(Rl.STAGE_CHANGED
)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this)))):(n=A(Ws(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==yl.PAUSED?(this._state=yl.PAUSED,this._observer.hasCallbacks(Rl.STAGE_PAUSED
)&&this._observer.triggerEvent(Rl.STAGE_PAUSED,this),this._observer.hasCallbacks(Rl.STAGE_CHANGED
)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this)):n||this._state!==yl.PAUSED||(this._state=yl.STARTED,
this._observer.hasCallbacks(Rl.STAGE_RESUMED)&&this._observer.triggerEvent(Rl.STAGE_RESUMED,this),
this._observer.hasCallbacks(Rl.STAGE_CHANGED)&&this._observer.triggerEvent(Rl.STAGE_CHANGED,this))}}c(xc,"Event",Rl)
;const Bc=gc.createLogger("PipelineController");(hu=ml={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
hu.PIPELINE_PAUSED="PipelineController:pipelinePaused",hu.PIPELINE_RESUMED="PipelineController:pipelineResumed",
hu.PIPELINE_FINISHED="PipelineController:pipelineFinished",hu.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
hu.PIPELINE_FAILED="PipelineController:pipelineFailed",hu.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class Jc{constructor(e,t,r){if(c(this,"_context",void 0),c(this,"_name",void 0),c(this,"_stages",void 0),c(this,
"_observer",void 0),c(this,"_changedCallback",void 0),c(this,"_state",void 0),c(this,"_stageDestructors",void 0),c(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Hc(`PipelineController#${this._name}`),this._state=yl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Ji(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Cl.PIPELINE,state:this._state,name:this._name,
stages:Ji(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case yl.CANCELLED:return!0;case yl.STARTED:case yl.PAUSED:case yl.CONSTRUCTED:case yl.FINISHED:case yl.FAILED:
case yl.UNCONSTRUCTED:return!1}}isFailed(){switch(this._state){case yl.FAILED:case yl.UNCONSTRUCTED:return!0
;case yl.CANCELLED:case yl.STARTED:case yl.PAUSED:case yl.CONSTRUCTED:case yl.FINISHED:return!1}}isFinished(){switch(
this._state){case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:return!0;case yl.STARTED:case yl.PAUSED:
case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}isPaused(){switch(this._state){case yl.PAUSED:return!0
;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.STARTED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.FAILED:case yl.CANCELLED:
case yl.FINISHED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}isStarted(){switch(this._state){case yl.STARTED:
case yl.PAUSED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:
return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.STARTED:case yl.PAUSED:case yl.FAILED:
case yl.CANCELLED:case yl.CONSTRUCTED:case yl.UNCONSTRUCTED:return!1}}onCancelled(e){return this.on(
ml.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(ml.PIPELINE_CHANGED,e)}onFailed(e){return this.on(
ml.PIPELINE_FAILED,e)}onFinished(e){return this.on(ml.PIPELINE_FINISHED,e)}onPaused(e){return this.on(ml.PIPELINE_PAUSED
,e)}onResumed(e){return this.on(ml.PIPELINE_RESUMED,e)}onStarted(e){return this.on(ml.PIPELINE_STARTED,e)}pause(){if(
!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Bc.info(`Pausing pipeline ${this._name}`),
this._state=yl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(ml.PIPELINE_PAUSED
)&&this._observer.triggerEvent(ml.PIPELINE_PAUSED,this),this._observer.hasCallbacks(ml.PIPELINE_CHANGED
)&&this._observer.triggerEvent(ml.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Bc.info(`Resuming pipeline ${this._name}`),this._state=yl.STARTED,
this._stages[this._current].resume(),this._observer.hasCallbacks(ml.PIPELINE_RESUMED)&&this._observer.triggerEvent(
ml.PIPELINE_RESUMED,this),this._observer.hasCallbacks(ml.PIPELINE_CHANGED)&&this._observer.triggerEvent(
ml.PIPELINE_CHANGED,this),this}start(){if(this._state!==yl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Bc.info(`Starting pipeline ${this._name}`),this._state=yl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(ml.PIPELINE_STARTED)&&this._observer.triggerEvent(
ml.PIPELINE_STARTED,this),this._observer.hasCallbacks(ml.PIPELINE_CHANGED)&&this._observer.triggerEvent(
ml.PIPELINE_CHANGED,this),this}stop(){if(this._state!==yl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Bc.info(`Stopping pipeline ${this._name}`),this._state=yl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(ml.PIPELINE_CANCELLED)&&this._observer.triggerEvent(ml.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(ml.PIPELINE_CHANGED)&&this._observer.triggerEvent(ml.PIPELINE_CHANGED,this),this}
getErrorString(){return Ji(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Ji(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Bc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=yl.FAILED,
this._observer.hasCallbacks(ml.PIPELINE_FAILED)&&this._observer.triggerEvent(ml.PIPELINE_FAILED,this),Bc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=yl.CANCELLED,this._observer.hasCallbacks(
ml.PIPELINE_CANCELLED)&&this._observer.triggerEvent(ml.PIPELINE_CANCELLED,this),Bc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=yl.STARTED;const o=this._stages[this._current].start();n===yl.PAUSED&&this._observer.hasCallbacks(
ml.PIPELINE_RESUMED)&&this._observer.triggerEvent(ml.PIPELINE_RESUMED,this),Bc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=yl.FINISHED,this._observer.hasCallbacks(ml.PIPELINE_FINISHED
)&&this._observer.triggerEvent(ml.PIPELINE_FINISHED,this),Bc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(ml.PIPELINE_CHANGED)&&this._observer.triggerEvent(ml.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=yl.PAUSED,this._observer.hasCallbacks(ml.PIPELINE_PAUSED
)&&this._observer.triggerEvent(ml.PIPELINE_PAUSED,this),this._observer.hasCallbacks(ml.PIPELINE_CHANGED
)&&this._observer.triggerEvent(ml.PIPELINE_CHANGED,this),Bc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=yl.STARTED,this._observer.hasCallbacks(ml.PIPELINE_RESUMED
)&&this._observer.triggerEvent(ml.PIPELINE_RESUMED,this),this._observer.hasCallbacks(ml.PIPELINE_CHANGED
)&&this._observer.triggerEvent(ml.PIPELINE_CHANGED,this),Bc.info(`Pipeline ${this._name} was resumed`))}}c(Jc,"Event",ml
);const Wc=gc.createLogger("PipelineRunner");class Vc{static registerController(e){Pc.registerController(e)}
static createStepController(e,t){const r=Pc.findController(e);if(void 0===r)throw Wc.debug("step = ",e),new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Gc(t,e.name,
Ji(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new xc(t,e.name,Ji(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new Jc(t,e.name,Ji(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ie(e)?(Wc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ne(e)?(Wc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(
Wc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Wc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Wc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Wc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Wc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class qc{static toString(...e){return Ji(e,
e=>Fa(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return Y(n)?Ji(n,e=>qc.processVariables(e,i,o
,s,a)):X(n)?os(L(n),(e,t)=>{var r=n[t];return e[`${qc.processVariables(t,i,o,s,a)}`]=qc.processVariables(r,i,o,s,a),e},
{}):T(n)?qc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||A(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=bt(r)?r:e=>ui(r,e,o),Qa(t,n)&&nl(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=ma(e),qc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=ma(
t.substr(a,l-a)),h=(qc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Kc=gc.createLogger("PipelineContext");class zc{constructor(e,t=void 0,r=void 0,n="${",i="}"){c(this,"_system",
void 0),c(this,"_parameters",void 0),c(this,"_variablePrefix",void 0),c(this,"_variableSuffix",void 0),c(this,
"_lookupVariable",void 0),c(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Kc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=qc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Kc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return ui(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Kc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return q(this._variables)||(
this._variables={}),No(this._variables,e,t),Kc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const Xc=gc.createLogger("runHttpResource"),Yc=gc.createLogger(
"runLocalResource");(hu=Il={}).M_ROOM_POWER_LEVELS="m.room.power_levels",hu.M_ROOM_JOIN_RULES="m.room.join_rules",
hu.M_ROOM_MEMBERSHIP="m.room.membership",hu.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
hu.M_ROOM_GUEST_ACCESS="m.room.guest_access",hu.M_ROOM_CREATE="m.room.create",hu.M_FEDERATE="m.federate",
hu.M_ROOM_MEMBER="m.room.member",hu.M_PUSH_RULES="m.push_rules",hu.M_PRESENCE="m.presence",hu.M_SPACE="m.space",
hu.M_LOGIN_PASSWORD="m.login.password",hu.M_LOGIN_TOKEN="m.login.token",hu.M_ID_USER="m.id.user",
hu.FI_NOR_DELETED="fi.nor.deleted",hu.FI_NOR_FORM_DTO="fi.nor.form_dto",hu.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,hu.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",hu.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
hu.FI_NOR_AGENT_DTO="fi.nor.dto.agent",hu.FI_NOR_PIPELINE="fi.nor.pipeline",
hu.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",Dl=Il,(hu=bl=bl||{})[hu.UNAUTHENTICATED=0]="UNAUTHENTICATED",
hu[hu.AUTHENTICATING=1]="AUTHENTICATING",hu[hu.AUTHENTICATED=2]="AUTHENTICATED",
hu[hu.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
hu[hu.AUTHENTICATED_AND_RESTARTING=4]="AUTHENTICATED_AND_RESTARTING",
hu[hu.AUTHENTICATED_AND_STARTED=5]="AUTHENTICATED_AND_STARTED",
hu[hu.AUTHENTICATED_AND_SYNCING=6]="AUTHENTICATED_AND_SYNCING",(hu=Ol={}).M_USER_IN_USE="M_USER_IN_USE",
hu.M_INVALID_USERNAME="M_INVALID_USERNAME",hu.M_EXCLUSIVE="M_EXCLUSIVE",hu.M_FORBIDDEN="M_FORBIDDEN",
hu.M_LIMIT_EXCEEDED="M_LIMIT_EXCEEDED",Ul=Ol;const Qc=gc.createLogger("SimpleMatrixClient");(Ll=Ll||{}
).EVENT="SimpleMatrixClient:event";class Zc{static setLogLevel(e){Qc.setLogLevel(e)}constructor(e,t=void 0,r=void 0,
n=void 0,i=void 0,o=3e4,s=1e3){c(this,"_observer",void 0),c(this,"_originalUrl",void 0),c(this,"_homeServerUrl",void 0),
c(this,"_identityServerUrl",void 0),c(this,"_accessToken",void 0),c(this,"_syncAgainTimeMs",void 0),c(this,
"_syncRequestTimeoutMs",void 0),c(this,"_syncAgainTimeoutCallback",void 0),c(this,"_initSyncAgainTimeoutCallback",void 0
),c(this,"_state",void 0),c(this,"_userId",void 0),c(this,"_stopSyncOnNext",void 0),c(this,"_nextSyncBatch",void 0),c(
this,"_syncAgainTimer",void 0),c(this,"_initSyncAgainTimer",void 0),this._stopSyncOnNext=!1,
this._state=n?bl.AUTHENTICATED:bl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextSyncBatch=void 0,this._accessToken=n,this._userId=i,
this._syncRequestTimeoutMs=o,this._syncAgainTimeMs=s,this._observer=new Hc("SimpleMatrixClient"),
this._syncAgainTimeoutCallback=this._onSyncAgainTimeout.bind(this),
this._initSyncAgainTimeoutCallback=this._onInitSyncAgain.bind(this)}getState(){return this._state}getAccessToken(){
return this._accessToken}getUserId(){return this._userId}getHomeServerName(){return new URL(this._homeServerUrl
).hostname}isAlreadyInTheRoom(e){if(ze(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(
e=null==e?void 0:e.error)&&void 0!==e?e:"";if(t===Ul.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}
isUnauthenticated(){return this._state===bl.UNAUTHENTICATED}isAuthenticating(){return this._state===bl.AUTHENTICATING}
isAuthenticated(){return this._state===bl.AUTHENTICATED}isStarting(){return this._state===bl.AUTHENTICATED_AND_STARTING}
isRestarting(){return this._state===bl.AUTHENTICATED_AND_RESTARTING}isStarted(){
return this._state===bl.AUTHENTICATED_AND_STARTED}isStopping(){return this._stopSyncOnNext}isSyncing(){
return this._state===bl.AUTHENTICATED_AND_SYNCING}destroy(){switch(this._state){case bl.UNAUTHENTICATED:
case bl.AUTHENTICATING:case bl.AUTHENTICATED:break;case bl.AUTHENTICATED_AND_STARTING:
case bl.AUTHENTICATED_AND_RESTARTING:case bl.AUTHENTICATED_AND_STARTED:case bl.AUTHENTICATED_AND_SYNCING:
this._stopSyncing()}this._clearSyncAgainTimer(),this._clearInitSyncAgainTimer(),this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}start(){this._startSyncing()}stop(){this._stopSyncing()}async register(e,t=void 0
,r){var n,i,o,s,a;try{if(Qc.debug("register: Registering user:",e,t),o=null!==(n=null!==(
i=null==this?void 0:this._accessToken)&&void 0!==i?i:r)&&void 0!==n?n:void 0,!(y(a=s=await this._postJson(
this._resolveHomeServerUrl("/register")+(t?`?kind=${Xe(t)}`:""),e,o?{Authorization:`Bearer ${o}`}:void 0))&&D(a,[
"user_id","access_token","home_server","device_id"])&&T(null==a?void 0:a.user_id)&&p(null==a?void 0:a.access_token)&&p(
null==a?void 0:a.home_server)&&p(null==a?void 0:a.device_id)))throw Qc.debug("Invalid response received: ",s),
new TypeError("register: Response was invalid");return Qc.debug("register: RegisterResponseDTO received: ",s),s}catch(e
){if(Qc.debug("register: Could not register user: ",e),!(e instanceof wc))throw new wc(Al.InternalServerError,
"Failed to register user");if(400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new wc(Al.Unauthorized
):403===s?new wc(Al.Forbidden):429===s?new wc(429):new wc(Al.InternalServerError,"Failed to register user");if(!ze(
s=null==e?void 0:e.getBody()))throw new wc(Al.InternalServerError,"Failed to register user");switch(s.errcode){
case Ul.M_USER_IN_USE:throw new wc(Al.Conflict,"User already exists");case Ul.M_INVALID_USERNAME:throw new wc(
Al.BadRequest,"Username invalid");case Ul.M_EXCLUSIVE:throw new wc(Al.Conflict,
"User name conflicts with exclusive namespace");default:throw new wc(Al.InternalServerError,"Failed to register user")}}
}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken))throw new TypeError(
"whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),Qc.debug(
"whoami: Fetching account whoami... ",r),n=await this._getJson(r,{Authorization:`Bearer ${t}`}),Qc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Qc.debug("whoami: user_id = ",i),
o=T(i)?i:void 0,this._userId=o}catch(e){return void Qc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Qc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await this._getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Qc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Qc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(y(
n=r=await this._postJson(t,e))&&D(n,["access_token","user_id","home_server","device_id"])&&T(
null==n?void 0:n.access_token)&&T(null==n?void 0:n.user_id)&&T(null==n?void 0:n.home_server)&&T(
null==n?void 0:n.device_id)))throw Qc.debug("registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Qc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Qc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof wc))throw new wc(Al.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new wc(Al.Unauthorized
):403===r?new wc(Al.Forbidden):429===r?new wc(429):new wc(Al.InternalServerError,"Failed to register user");if(!ze(
r=null==e?void 0:e.getBody()))throw new wc(Al.InternalServerError,"Failed to register user");switch(r.errcode){
case Ul.M_USER_IN_USE:throw new wc(Al.Conflict,"User already exists");case Ul.M_INVALID_USERNAME:throw new wc(
Al.BadRequest,"Username invalid");case Ul.M_EXCLUSIVE:throw new wc(Al.Conflict,
"User name conflicts with exclusive namespace");default:throw new wc(Al.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:Il.M_LOGIN_PASSWORD,identifier:{type:Il.M_ID_USER,user:r},
password:n},Qc.debug("Sending login with userId:",r),!(y(h=o=await this._postJson(this._resolveHomeServerUrl("/login"),i
))&&D(h,["user_id","access_token","home_server","device_id","well_known"])&&T(null==h?void 0:h.user_id)&&T(
null==h?void 0:h.access_token)&&p(null==h?void 0:h.home_server)&&p(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||y(_=h)&&D(_,["m.homeserver","m.identity_server"])&&y(E=_["m.homeserver"])&&D(E,[
"base_url"])&&T(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||y(_=_["m.identity_server"])&&D(_,["base_url"]
)&&T(null==_?void 0:_.base_url)))))throw Qc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Qc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Zc(u,e,t,c,d,this._syncRequestTimeoutMs,this._syncAgainTimeMs)}catch(e){
throw Qc.debug("Could not login: ",e),new wc(Al.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(y(n=r=await this._getJson(this._resolveHomeServerUrl(`/directory/room/${Xe(t)}`)))&&D(n,[
"room_id","servers"])&&T(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Qc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Qc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof wc&&e.getStatusCode()===Al.NotFound)return;throw Qc.warn("resolveRoomId: Passing on error: ",e
),e}}async getJoinedMembers(e){var t=this._accessToken;if(!t)throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!(y(t=e=await this._getJson(this._resolveHomeServerUrl(
`/rooms/${Xe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&D(t,["joined"])&&C(null==t?void 0:t.joined,he,Ke))
)throw Qc.debug("getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Qc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!q(i=await this._getJson(this._resolveHomeServerUrl(
`/rooms/${Xe(e)}/state/${Xe(t)}/${Xe(r)}`),{Authorization:`Bearer ${n}`})))throw Qc.debug(
"getRoomStateByType: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`
);return Qc.debug("getRoomStateByType: received: ",i),i}catch(e){if(e instanceof wc&&e.getStatusCode()===Al.NotFound
)return;throw Qc.warn("getRoomStateByType: Passing on error: ",e),e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(
!(i=this._accessToken))throw new TypeError("setRoomStateByType: Client did not have access token");if(!(y(
s=o=await this._putJson(this._resolveHomeServerUrl(`/rooms/${Xe(e)}/state/${Xe(t)}/${Xe(r)}`),n,{
Authorization:`Bearer ${i}`}))&&D(s,["event_id"])&&T(null==s?void 0:s.event_id)))throw Qc.debug(
"setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),new TypeError(
`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Qc.debug("setRoomStateByType: received: ",
o),o}catch(e){throw Qc.error("setRoomStateByType: Passing on error: ",e),e}}async forgetRoom(e){var t,r;try{if(!(
t=this._accessToken))throw new TypeError("forgetRoom: Client did not have access token");r=await this._postJson(
this._resolveHomeServerUrl(`/rooms/${Xe(e)}/forget`),{},{Authorization:`Bearer ${t}`}),Qc.debug("forgetRoom: received: "
,r)}catch(e){throw Qc.warn("forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(
t=this._accessToken))throw new TypeError("leaveRoom: Client did not have access token");r=await this._postJson(
this._resolveHomeServerUrl(`/rooms/${Xe(e)}/leave`),{},{Authorization:`Bearer ${t}`}),Qc.debug("leaveRoom: received: ",r
)}catch(e){throw Qc.warn("leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e)
)throw new TypeError(`inviteToRoom: roomId invalid: ${e}`);if(!he(t))throw new TypeError(
`inviteToRoom: userId invalid: ${t}`);if(Qc.info(`Inviting user ${t} to ${e}`),!(r=this._accessToken)
)throw new TypeError("inviteToRoom: Client did not have access token");n=await this._postJson(
this._resolveHomeServerUrl(`/rooms/${Xe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Qc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Qc.warn(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Qc.debug("Sending message with body:",t
),r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(e)}/send/m.room.message`),t,{
Authorization:`Bearer ${r}`}),Qc.debug("sendTextMessage response received: ",r)}async createRoom(e){
var t=this._accessToken;if(!t)throw new TypeError("createRoom: Client did not have access token");if(Qc.debug(
"Creating room with body:",e),!(y(e=t=await this._postJson(this._resolveHomeServerUrl("/createRoom"),e,{
Authorization:`Bearer ${t}`}))&&D(e,["room_id","room_alias"])&&ue(null==e?void 0:e.room_id)&&(v(
null==e?void 0:e.room_alias)||T(e=null==e?void 0:e.room_alias)&&e&&"#"===e[0])))throw Qc.debug("response = ",t),
new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t);return Qc.debug("Create room response received: ",t),t
}async joinRoom(t,r=void 0){var e,n,i;try{if(!(e=this._accessToken))throw new TypeError(
"createRoom: Client did not have access token");if(Qc.debug(`joinRoom: Joining to room "${t}" with body:`,r),!(y(
i=n=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(t)}/join`),null!=r?r:{},{Authorization:`Bearer ${e}`})
)&&D(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw Qc.debug("response = ",n),new TypeError(
`Could not join to "${t}": Response was not MatrixJoinRoomResponseDTO: `+n);return Qc.debug(
`joinRoom: Joined to room "${t}": `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{room_id:t}
;const r=null==e?void 0:e.getBody();throw ze(r)&&r.errcode===Ul.M_FORBIDDEN?Qc.warn(
`joinRoom: Passing on error: Could not join to room "${t}": ${null===r||void 0===r?void 0:r.errcode}: ${null===r||void 0===r?void 0:r.error}`
):Qc.warn(`joinRoom: Passing on error: Could not join to room "${t}": `,e),e}}async sync(e){var t;if(Qc.info(
"sync with ",e),!(t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`)
;var{filter:r,since:n,full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(T(r))s.filter=r;else{if(!q(r)
)throw new TypeError(`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),
void 0!==i&&(s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=ul(Ji(L(s),
e=>{var t=s[e];return`${Xe(e)}=${Xe(t)}`}),"&"),!(y(t=e=await this._getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&D(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count","org.matrix.msc2732.device_unused_fallback_key_types"])&&T(null==t?void 0:t.next_batch)&&(
v(null==t?void 0:t.rooms)||ke(null==t?void 0:t.rooms))&&(v(null==t?void 0:t.presence)||je(null==t?void 0:t.presence))&&(
v(null==t?void 0:t.account_data)||Ie(null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||xe(
null==t?void 0:t.to_device))&&(v(null==t?void 0:t.device_lists)||Be(null==t?void 0:t.device_lists))&&(v(
null==t?void 0:t.device_one_time_keys_count)||We(null==t?void 0:t.device_one_time_keys_count))))throw Qc.debug(
"_sync: response not MatrixSyncResponseDTO: ",JSON.stringify(e,null,2)),new TypeError(
`Response was not MatrixSyncResponseDTO: ${Ve(e)}`);return e}async waitForEvents(s,a=void 0,n=void 0){
return void 0===n&&(n=3e4),void 0===a?Qc.debug(`Waiting for events ${s.join(" | ")} in all rooms`):Qc.debug(
`Waiting for events ${s.join(" | ")} in rooms ${a.join(", ")}`),new Promise((i,r)=>{try{let e,t;const o=()=>{Qc.debug(
"waitForEvents: On stop"),e&&(e(),e=void 0),t&&(clearTimeout(t),t=void 0),this._stopSyncing()};try{t=setTimeout(()=>{
Qc.debug("waitForEvents: On timeout"),t=void 0,o(),i(!1)},n),e=this.on(Ll.EVENT,(e,t)=>{var r=null==t?void 0:t.type,
n=null==t?void 0:t.room_id;void 0===a||n&&a.includes(n)?r&&s.includes(r)?(Qc.debug("waitForEvents: Event found: ",r,n,t)
,o(),i(!0)):Qc.debug("waitForEvents: Ignored event: ",r,n,t):Qc.debug(
"waitForEvents: Event was not in watched room list: ",r,n,t)}),Qc.debug("waitForEvents: Started listening events"),
this._startSyncing()}catch(e){Qc.error("waitForEvents: Error: ",e),r(e),o()}}catch(e){Qc.error(
"waitForEvents: Outer error: ",e),r(e)}})}async _retryLater(r,n){let i;return new Promise((e,t)=>{try{Qc.debug(
`_retryLater: Waiting for a moment (${n})`),i=setTimeout(()=>{i=void 0;try{Qc.debug("_retryLater: Restoring now"),e(r())
}catch(e){t(e)}},n)}catch(e){i&&(clearTimeout(i),i=void 0),t(e)}})}async _postJson(t,r,n){var i,o,s;try{return Qc.debug(
`_postJson: Executing POST request ${t} with `,r,n),i=await Lc.postJson(t,r,n),Qc.debug(
`_postJson: Response received for POST request ${t} as `,i),i}catch(e){if(ze(o=null!==(s=null==e?void 0:e.getBody()
)&&void 0!==s?s:null==e?void 0:e.body)){if((i=null==o?void 0:o.errcode)===Ul.M_LIMIT_EXCEEDED)return s=null!==(
s=null==o?void 0:o.retry_after_ms)&&void 0!==s?s:1e3,Qc.warn("_postJson: Limit reached, retrying: ",s,t,r,n),
this._retryLater(async()=>(Qc.error("Calling again: ",t,r,n),this._postJson(t,r,n)),s);Qc.warn(
`_postJson: Passing on error code ${i}: ${null==o?void 0:o.error}`)}else Qc.warn(
"_postJson: Passing on error with no body: ",e);throw e}}async _putJson(t,r,n){var i,o,s;try{return Qc.debug(
`_putJson: Executing PUT request ${t} with `,r,n),i=await Lc.putJson(t,r,n),Qc.debug(
`_putJson: Response received for PUT request ${t} as `,i),i}catch(e){if(ze(o=null!==(s=null==e?void 0:e.getBody()
)&&void 0!==s?s:null==e?void 0:e.body)){if(i=null==o?void 0:o.errcode,(null==o?void 0:o.errcode)===Ul.M_LIMIT_EXCEEDED
)return s=null!==(s=null==o?void 0:o.retry_after_ms)&&void 0!==s?s:1e3,Qc.warn("_putJson: Limit reached, retrying: ",s,t
,r,n),this._retryLater(async()=>(Qc.error("Calling again: ",t,r,n),this._putJson(t,r,n)),s);Qc.warn(
`Passing on: Error with code ${i}: ${o.error}`)}else Qc.warn("Passing on: Error did not have body: ",e);throw e}}
async _getJson(t,r){var n,i,o;try{return Qc.debug(`_getJson: Executing GET request ${t} with `,r),n=await Lc.getJson(t,r
),Qc.debug(`_getJson: Response received for PUT request ${t} as `,n),n}catch(e){if(ze(i=null!==(
o=null==e?void 0:e.getBody())&&void 0!==o?o:null==e?void 0:e.body)){if(n=null==i?void 0:i.errcode,(
null==i?void 0:i.errcode)===Ul.M_LIMIT_EXCEEDED)return o=null!==(o=null==i?void 0:i.retry_after_ms)&&void 0!==o?o:1e3,
Qc.error("_getJson: Limit reached, retrying: ",o,t,r),this._retryLater(async()=>(Qc.error("Calling again: ",t,r),
this._getJson(t,r)),o);Qc.warn(`_getJson: Passing on: Error with code ${n}: ${null==i?void 0:i.error}`)}else Qc.warn(
"_getJson: Passing on: Error did not have body: ",e);throw e}}_normalizeRoomName(e){if(!e||!T(e))throw new TypeError(
`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}_setState(e
){Qc.debug("_setState: ",e,qe(e),this._stopSyncOnNext),this._state=e}_startSyncing(){switch(this._state){
case bl.AUTHENTICATED:break;case bl.AUTHENTICATED_AND_STARTING:case bl.AUTHENTICATED_AND_RESTARTING:
case bl.AUTHENTICATED_AND_STARTED:case bl.AUTHENTICATED_AND_SYNCING:return void(this._stopSyncOnNext?(
this._stopSyncOnNext=!1,Qc.debug(`_startSyncing: Cancelled previous stop request (state was ${qe(this._state)})`)
):Qc.warn(`_startSyncing: Warning! Client was already started (was ${qe(this._state)})`));default:
case bl.UNAUTHENTICATED:case bl.AUTHENTICATING:throw new TypeError(`_startSyncing: Client was ${qe(this._state)}`)}
this.isStopping()&&(Qc.warn("_startSyncing: Warning! Cancelled previous stop request, although state was AUTHENTICATED."
),this._stopSyncOnNext=!1),this._clearSyncAgainTimer(),Qc.debug("start: Initializing sync"),this._initSync().catch(e=>{
Qc.error("SYNC ERROR: ",e)})}_stopSyncing(){switch(this._state){case bl.UNAUTHENTICATED:case bl.AUTHENTICATING:
case bl.AUTHENTICATED:return void Qc.warn(`_stopSyncing: Warning! Client was not started (was ${qe(this._state)})`)
;case bl.AUTHENTICATED_AND_STARTING:case bl.AUTHENTICATED_AND_RESTARTING:case bl.AUTHENTICATED_AND_SYNCING:return void(
this._stopSyncOnNext?Qc.warn(`_stopSyncing: Warning! Stop was already scheduled (state was ${qe(this._state)})`):(
Qc.debug(`_stopSyncing: Scheduled stop (state was ${qe(this._state)})`),this._stopSyncOnNext=!0))
;case bl.AUTHENTICATED_AND_STARTED:return Qc.debug(
"_stopSyncing: Stopping timer and moving to AUTHENTICATED state (was AUTHENTICATED_AND_STARTED)"),
this._clearSyncAgainTimer(),void this._setState(bl.AUTHENTICATED)}}_startSyncAgainTimer(){if(
this._state!==bl.AUTHENTICATED_AND_STARTED)throw new TypeError(
`_startSyncRetryTimer: Client was not AUTHENTICATED_AND_STARTED (was ${qe(this._state)})`);this._clearSyncAgainTimer(),
this._syncAgainTimer=setTimeout(this._syncAgainTimeoutCallback,this._syncAgainTimeMs)}_startInitSyncAgainLater(){if(
this._state!==bl.AUTHENTICATED_AND_RESTARTING)throw new TypeError(
`_startSyncRetryTimer: Client was not AUTHENTICATED_AND_RESTARTING (${qe(this._state)})`);this._clearInitSyncAgainTimer(
),this._initSyncAgainTimer=setTimeout(this._initSyncAgainTimeoutCallback,this._syncAgainTimeMs)}_onSyncAgainTimeout(){
if(this._syncAgainTimer=void 0,this._stopSyncOnNext)return this._stopSyncOnNext=!1,void Qc.debug(
"_onSyncRetryTimeout: Sync cancelled by previous stop request.");this._state!==bl.AUTHENTICATED_AND_STARTED?Qc.error(
`_onSyncRetryTimeout: Client was not AUTHENTICATED_AND_STARTED (was ${qe(this._state)})`):this._syncNextBatch().catch(
e=>{Qc.error("_onSyncRetryTimeout: Error: ",e)})}_onInitSyncAgain(){if(this._initSyncAgainTimer=void 0,
this._stopSyncOnNext)return this._stopSyncOnNext=!1,void Qc.debug(
"_onInitSyncAgain: Sync cancelled by previous stop request.");this._state===bl.AUTHENTICATED_AND_RESTARTING?(
this._setState(bl.AUTHENTICATED),this._initSync().catch(e=>{Qc.error("_onInitSyncAgain: Error: ",e)})):Qc.error(
`_onInitSyncAgain: Client was not AUTHENTICATED_AND_RESTARTING (${qe(this._state)})`)}_clearSyncAgainTimer(){
void 0!==this._syncAgainTimer&&(clearTimeout(this._syncAgainTimer),this._syncAgainTimer=void 0)}
_clearInitSyncAgainTimer(){void 0!==this._initSyncAgainTimer&&(clearTimeout(this._initSyncAgainTimer),
this._initSyncAgainTimer=void 0)}_triggerMatrixEventList(e,t){Ys(e,e=>{this._triggerMatrixEvent(e,t)})}
_triggerMatrixEvent(e,t){this._observer.triggerEvent(Ll.EVENT,t?O(O({},e),{},{room_id:t}):e)}async _syncNextBatch(){
var e,t;switch(this._state){case bl.AUTHENTICATED_AND_STARTED:break;default:case bl.UNAUTHENTICATED:
case bl.AUTHENTICATING:case bl.AUTHENTICATED:case bl.AUTHENTICATED_AND_RESTARTING:case bl.AUTHENTICATED_AND_STARTING:
case bl.AUTHENTICATED_AND_SYNCING:throw new TypeError(`_syncNextBatch: State was ${qe(this._state)}`)}if(!(
e=this._nextSyncBatch))throw new TypeError("_onTimeout: No previous nextBatch defined");t=()=>{
this._clearSyncAgainTimer(),this._stopSyncOnNext?(this._stopSyncOnNext=!1,this._setState(bl.AUTHENTICATED)):(
this._setState(bl.AUTHENTICATED_AND_STARTED),this._startSyncAgainTimer())};try{Qc.debug("_syncNextBatch: ",e),
this._setState(bl.AUTHENTICATED_AND_SYNCING),await this._syncSinceBatch(e),t()}catch(e){Qc.error(
"_syncNextBatch: ERROR: ",e),t()}}async _initSync(){var e,t;if(this._state!==bl.AUTHENTICATED)throw new TypeError(
`_initSync: Client was not authenticated (${qe(this._state)})`);if(!this._accessToken)throw new TypeError(
"_initSync: Client did not have access token");Qc.info("_initSync: Initial sync request started");try{if(this._setState(
bl.AUTHENTICATED_AND_STARTING),e=await this.sync({filter:{room:{timeline:{limit:1}}}}),Qc.debug(
"_initSync: Initial sync response received"),this._stopSyncOnNext)return this._stopSyncOnNext=!1,this._setState(
bl.AUTHENTICATED),void Qc.debug("_initSync: Started successfully, but stop was already scheduled.");if(!(t=e.next_batch)
)return Qc.warn("_initSync: Warning! No next_batch in the response: ",e),this._setState(bl.AUTHENTICATED_AND_RESTARTING)
,void this._startInitSyncAgainLater();this._nextSyncBatch=t,this._setState(bl.AUTHENTICATED_AND_STARTED),Qc.debug(
"_initSync: Started successfully")}catch(e){Qc.error("_initSync: Error: ",e),this._stopSyncOnNext?(
this._stopSyncOnNext=!1,this._setState(bl.AUTHENTICATED)):(this._setState(bl.AUTHENTICATED_AND_RESTARTING),
this._startInitSyncAgainLater())}}async _syncSinceBatch(e){var t,r,n,i,o;if(!this._accessToken)throw new TypeError(
"_syncSince: Client did not have access token");(e=(t=await this.sync({since:e,timeout:this._syncRequestTimeoutMs})
).next_batch)?this._nextSyncBatch=e:Qc.error("No next_batch in the response: ",t),r=Oo(null!=t&&t.presence&&null!==(
e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],null!=t&&t.account_data?me(
null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(r=null==t?void 0:t.to_device)?void 0:r.events
)&&void 0!==r?r:[]),this._triggerMatrixEventList(r,void 0);const s=null!==(n=null==t||null===(n=t.rooms
)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=L(s),Ys(n,e=>{var t,r=(r=s[e],Oo([],null!=r&&r.state?ge(
null==r?void 0:r.state):[],null!=r&&r.timeline?ye(null==r?void 0:r.timeline):[],null!=r&&r.ephemeral?(
t=null==r?void 0:r.ephemeral,Oo([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],null!=r&&r.account_data?me(
null==r?void 0:r.account_data):[]));this._triggerMatrixEventList(r,e)});const a=null!==(i=null==t||null===(i=t.rooms
)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=L(a),Ys(i,e=>{var t=null!==(t=null==(t=(t=a[e]).invite_state
)?void 0:t.events)&&void 0!==t?t:[];this._triggerMatrixEventList(t,e)});const l=null!==(o=null==t||null===(o=t.rooms
)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=L(l),Ys(o,e=>{var t=l[e],t=Oo([],ge(null==t?void 0:t.state),ye(
null==t?void 0:t.timeline),me(null==t?void 0:t.account_data));this._triggerMatrixEventList(t,e)})}}c(Zc,"Event",Ll),(
hu=_u=_u||{}).PRIVATE_CHAT="private_chat",hu.PUBLIC_CHAT="public_chat",hu.TRUSTED_PRIVATE_CHAT="trusted_private_chat",
Pl=_u,(_u=Eu=Eu||{}).INVITED="invited",_u.JOINED="joined",_u.SHARED="shared",_u.WORLD_READABLE="world_readable",$l=Eu,(
Eu=vu=vu||{}).PUBLIC="public",Eu.KNOCK="knock",Eu.INVITE="invite",Eu.PRIVATE="private",Eu.RESTRICTED="restricted",Fl=vu,
(vu=Tu=Tu||{}).CAN_JOIN="can_join",vu.FORBIDDEN="forbidden",Ml=Tu;const ed=gc.createLogger("MatrixCrudRepository")
;class td{static setLogLevel(e){ed.setLogLevel(e)}constructor(e,t,r=void 0,n=void 0,i=void 0,o=void 0,s=void 0,a=void 0
){c(this,"_client",void 0),c(this,"_serviceAccount",void 0),c(this,"_stateType",void 0),c(this,"_stateKey",void 0),c(
this,"_deletedType",void 0),c(this,"_deletedKey",void 0),c(this,"_allowedGroups",void 0),c(this,"_allowedEvents",void 0)
,this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",this._serviceAccount=null!=n?n:void 0,
this._deletedType=null!==(i=U(i))&&void 0!==i?i:Dl.FI_NOR_DELETED,this._deletedKey=null!=o?o:"",this._allowedEvents=a,
this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,r=await this._client.sync({filter:{presence:{limit:0
},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{limit:0},timeline:{limit:0},state:{limit:1,
include_redundant_members:!0,types:[this._stateType],not_types:[this._deletedType]}}},full_state:!0});ed.debug(
"getAll: response = ",JSON.stringify(r,null,2));const n=null!==(e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join
)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=L(n)
;if(ed.debug("joinedRooms = ",i),t=L(t),ed.debug("invitedRooms = ",t),(t=Ws(t,e=>!i.includes(e))).length){ed.debug(
"Joining to rooms = ",t);let r=0;if(await os(t,async(e,t)=>{await e;try{ed.debug("Joining to room = ",t),
await this._client.joinRoom(t),r+=1}catch(e){ed.warn(`Warning! Could not join client "${this._client.getUserId(
)}" to room: ${t}`)}},Promise.resolve()),1<=r)return ed.debug("Fetching results again after joining"),this.getAll()}
return os(i,(e,i)=>{var t=n[i],r=Ws(null!==(r=null==t||null===(r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],
e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(null==e?void 0:e.state_key)===this._stateKey&&Wa(
null==e||null===(t=e.content)||void 0===t?void 0:t.version)});return Oo(e,Ji(r,e=>{var t=null!==(t=null==e||null===(
t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,
n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted);return{data:t,id:i,version:r,deleted:n}}))},[])}
async getAllByProperty(t,r){var e=await this.getAll();return Ji(Ws(e,e=>ui(null==e?void 0:e.data,t)===r),e=>({id:e.id,
version:e.version,data:e.data}))}async createItem(e,t){var r,n,i;const o=this._client.getUserId();ed.debug(
"createItem: clientUserId = ",o),r={data:e,version:1},ed.debug("createItem: content = ",r),n=null===(
i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),ed.debug("createItem: serviceAccountId = ",n),i=Ws(As(Oo(n?[n
]:[],t||[])),e=>e!==o),ed.debug("createItem: invitedMembers = ",i),n=this._allowedGroups,ed.debug(
"createItem: allowedGroups = ",n),t={[Dl.M_FEDERATE]:!1};const s=[{type:this._stateType,state_key:this._stateKey,
content:r},{type:Dl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{history_visibility:$l.SHARED}},{
type:Dl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Ml.FORBIDDEN}}];void 0!==n&&s.push({
type:Dl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Fl.RESTRICTED,allow:Ji(n,e=>({type:Dl.M_ROOM_MEMBERSHIP,
room_id:e}))}}),ed.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},ed.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Ys(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Pl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),ed.debug(
"createItem: response = ",t),t=t.room_id,ed.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
ed.warn(`Warning! Could not join service account to room "${t}": `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(t,r){var n,i=await this._client.getRoomStateByType(t,this._stateType,this._stateKey);if(void 0!==i){if(
ed.debug("findById: response = ",JSON.stringify(i,null,2)),!q(n=null==i?void 0:i.data))throw new TypeError(
`findById: data was not JsonObject: ${n}`);if(!E(i=null==i?void 0:i.version))throw new TypeError(
`findById: version was not integer: ${i}`);let e=void 0;if(r){const o=await this._client.getJoinedMembers(t);e=Ji(L(
o.joined),e=>{var t=o.joined[e];return{id:e,displayName:t.display_name,
avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:n,id:t,version:i,members:e}}ed.debug(
`findById: response not found for ${t}`)}async update(e,t){var r,n;if(!q(t))throw new TypeError(
`jsonData was not JsonObject: ${t}`);if(void 0===(r=await this.findById(e)))throw new wc(404);if(!E(n=r.version+1)
)throw new TypeError(`newVersion was not integer: ${n}`);return r=await this._client.setRoomStateByType(e,
this._stateType,this._stateKey,{data:t,version:n}),ed.debug("response = ",JSON.stringify(r,null,2)),{data:t,id:e,
version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(void 0===(e=await this.findById(t)))throw new wc(404);if(
!E(r=e.version+1))throw new TypeError(`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},
i=await this._client.setRoomStateByType(t,this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,
this._deletedType,this._deletedKey,{}),this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){
ed.warn(`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)
}catch(e){ed.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t)
,await this._client.forgetRoom(t),ed.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,
deleted:!0}}catch(e){if(e instanceof wc&&[401,403,404].includes(e.getStatusCode()))throw e;throw ed.error(
`Error in deleteById(${t}): `,e),new wc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await os(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw ed.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}async waitById(e,t,r){if(!e
)throw new TypeError(`id is required: ${e}`);return await this._client.waitForEvents([this._stateType],[e],r)||ed.debug(
`waitById: Timeout received for ${e}`),this.findById(e,t)}}const rd=gc.createLogger("runMatrixResource");(Hl=Hl||{}
).ON_EXIT="NodeSystemProcess:onExit";const nd=gc.createLogger("NodeSystemProcess");class id{constructor(e,t,r,n=void 0,
i=!0){c(this,"_command",void 0),c(this,"_args",void 0),c(this,"_env",void 0),c(this,"_cwd",void 0),c(this,
"_stdoutCallback",void 0),c(this,"_stderrCallback",void 0),c(this,"_closeCallback",void 0),c(this,"_observer",void 0),c(
this,"_process",void 0),c(this,"_printToParentProcess",void 0),c(this,"_stdoutChunks",void 0),c(this,"_stderrChunks",
void 0),c(this,"_exitStatus",void 0),this._observer=new Hc("NodeSystemProcess"),this._process=void 0,this._command=e,
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
this._stderrChunks.push(e),process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(Hl.ON_EXIT
)?this._observer.triggerEvent(Hl.ON_EXIT,this):nd.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}c(id,"Event",Hl);const od=gc.createLogger(
"NodeSystem");class sd{constructor(){c(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Ys(this._tempFileNames,e=>{od.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){try{const t=$u.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}catch(e){if("ENOENT"===(
null==e?void 0:e.code))return!1;throw e}}isFile(e){const t=$u.default.statSync(e);return t.isFile()}isDirectory(e){
const t=$u.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e)?this.isDirectory(e
)?this.deleteDirectory(e):$u.default.unlinkSync(e):od.warn(`deleteFile: Path did not exist: ${e}`)}deleteDirectory(e){
this.pathExists(e)?$u.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):od.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r,n){return new id(e,t,r,n)}createDirectory(e){
return this.pathExists(e)&&this.isDirectory(e)||$u.default.mkdirSync(e),this}readFile(e){return $u.default.readFileSync(
e,{encoding:"utf8"})}writeFile(e,t){return $u.default.writeFileSync(e,t,{encoding:"utf8"}),this}getWorkingDirectory(){
return process.cwd()}createTemporaryFile(){let e="";do{var t=ku.default.randomBytes(20).toString("hex")}while(
e=Hu.default.join(this.getWorkingDirectory(),`${t}.tmp`),$u.default.existsSync(e));if(!e)throw new TypeError(
"Could not create temp file");return this._tempFileNames.push(e),e}}(Tu=kl=kl||{}).STRINGIFY="stringify",
Tu.PARSE="parse";const ad=gc.createLogger("BaseStepController");(Tu=Gl={}
).JSON_STARTED="BaseStepController:scriptStarted",Tu.JSON_PAUSED="BaseStepController:scriptPaused",
Tu.JSON_RESUMED="BaseStepController:scriptResumed",Tu.JSON_CANCELLED="BaseStepController:scriptCancelled",
Tu.JSON_FAILED="BaseStepController:scriptFailed",Tu.JSON_FINISHED="BaseStepController:scriptFinished",
Tu.JSON_CHANGED="BaseStepController:scriptChanged";class ld{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(c(this,
"_context",void 0),c(this,"_observer",void 0),c(this,"_controllerType",void 0),c(this,"_controllerName",void 0),c(this,
"_stepName",void 0),c(this,"_name",void 0),c(this,"_action",void 0),c(this,"_input",void 0),c(this,"_output",void 0),c(
this,"_state",void 0),c(this,"_compiledAction",void 0),c(this,"_compiledInput",void 0),c(this,"_compiledOutput",void 0),
c(this,"_successResult",void 0),c(this,"_errorResult",void 0),!T(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!T(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!T(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!z(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!v(a)&&!T(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=yl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new Hc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:
case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isStarted(){switch(this._state){case yl.STARTED:case yl.PAUSED:return!0
;case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isPaused(){
switch(this._state){case yl.PAUSED:return!0;case yl.CONSTRUCTED:case yl.STARTED:case yl.CANCELLED:case yl.FINISHED:
case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isFinished(){switch(this._state){case yl.CANCELLED:case yl.FINISHED:
case yl.FAILED:return!0;case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:case yl.UNCONSTRUCTED:return!1}}isSuccessful(
){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:case yl.CANCELLED:case yl.CONSTRUCTED:case yl.STARTED:
case yl.PAUSED:case yl.UNCONSTRUCTED:return!1}}isCancelled(){switch(this._state){case yl.CANCELLED:return!0
;case yl.FINISHED:case yl.FAILED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:case yl.UNCONSTRUCTED:return!1}}
isFailed(){switch(this._state){case yl.FAILED:case yl.UNCONSTRUCTED:return!0;case yl.CANCELLED:case yl.FINISHED:
case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==yl.CONSTRUCTED
)throw new Error(`[${this._stepName}] was already started`);if(this._state=yl.STARTED,!z(t=this._context.compileModel(
this._action)))throw new Error(`[${this._stepName}] failed to compile the action property: ${qc.toString(this._action)}`
);if(this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!z(r)
)throw new Error(`[${this._stepName}] failed to compile the input property: ${qc.toString(this._input)}`);if(
this._compiledInput=r,!T(n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${qc.toString(this._output)}`);if(this._compiledOutput=n,
ad.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Gl.JSON_STARTED)&&this._observer.triggerEvent(Gl.JSON_STARTED,this),
this._observer.hasCallbacks(Gl.JSON_CHANGED)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this),!bt(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,mt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(Gl.JSON_STARTED,e)}onPaused(e
){return this.on(Gl.JSON_PAUSED,e)}onResumed(e){return this.on(Gl.JSON_RESUMED,e)}onCancelled(e){return this.on(
Gl.JSON_CANCELLED,e)}onFailed(e){return this.on(Gl.JSON_FAILED,e)}onFinished(e){return this.on(Gl.JSON_FINISHED,e)}
onChanged(e){return this.on(Gl.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){ad.error(
"Action success: ",e),void 0!==this._compiledOutput?(ad.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):ad.info("No output target configured for result: ",e),
this._successResult=e,this._state=yl.FINISHED,this._observer.hasCallbacks(Gl.JSON_FINISHED
)&&this._observer.triggerEvent(Gl.JSON_FINISHED,this),this._observer.hasCallbacks(Gl.JSON_CHANGED
)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this)}_errorCloseAction(e){ad.error("Action failed: ",e),
this._errorResult=e,this._state=yl.FAILED,this._observer.hasCallbacks(Gl.JSON_FAILED)&&this._observer.triggerEvent(
Gl.JSON_FAILED,this),this._observer.hasCallbacks(Gl.JSON_CHANGED)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this)}}c(
ld,"Event",Gl),c(ld,"State",yl);const ud=Oo(gu,["name","json","action","output"]),cd=gc.createLogger("JsonController")
;class dd extends ld{static parseControllerModel(e){if(Ze(e))return e}static isControllerModel(e){return Ze(e)}
static createController(e,t){return new dd(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=kl.STRINGIFY,i=void 0
){super(e,Cl.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:kl.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case kl.STRINGIFY:case kl.PARSE:return 1}}())throw cd.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${qc.toString(e)}`);if(e===kl.STRINGIFY){if(!z(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${qc.toString(t)}`);var r=JSON.stringify(t,null,2)
;if(!T(r))throw cd.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==kl.PARSE
)throw cd.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!T(t))throw cd.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${qc.toString(t)}`)
;return JSON.parse(t)}}(Tu=jl=jl||{}).STRINGIFY="stringify",Tu.PARSE="parse";const hd=Oo(gu,["name","csv","action",
"output"]),_d=gc.createLogger("CsvController");class Ed extends ld{static parseControllerModel(e){if(rt(e))return e}
static isControllerModel(e){return rt(e)}static createController(e,t){return new Ed(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=jl.STRINGIFY,i=void 0){super(e,Cl.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:jl.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case jl.STRINGIFY:case jl.PARSE:return 1}}())throw _d.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${qc.toString(e)}`);if(e===jl.STRINGIFY
){if(!tt(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${qc.toString(t)}`)
;if(n="\n",!T(r=Ji(t,e=>{return[e,t,r]=[e,",",'"'],Ji(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==jl.PARSE)throw _d.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!T(t))throw _d.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${qc.toString(t)}`);if(n="\n",t=tt(r=t)?r:(T(r
)||(r=`${r}`),Ji(pa(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(et(t))return t;T(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Qa(e,'"')&&nl(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!tt(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const vd=Oo(gu,["name","command","args","env","output",
"cwd"]),Td=gc.createLogger("BaseScriptController");(Tu=xl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
Tu.SCRIPT_PAUSED="BaseScriptController:scriptPaused",Tu.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
Tu.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",Tu.SCRIPT_FAILED="BaseScriptController:scriptFailed",
Tu.SCRIPT_FINISHED="BaseScriptController:scriptFinished",Tu.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class pd{constructor(e,t,r,n,i,o,s=[],a={},l=void 0,u=void 0){if(c(this,"_context",void 0),c(this,"_observer",void 0),
c(this,"_controllerType",void 0),c(this,"_controllerName",void 0),c(this,"_stepName",void 0),c(this,"_name",void 0),c(
this,"_command",void 0),c(this,"_cwd",void 0),c(this,"_outputVariable",void 0),c(this,"_args",void 0),c(this,"_env",
void 0),c(this,"_closeCallback",void 0),c(this,"_compiledCwd",void 0),c(this,"_compiledCommand",void 0),c(this,
"_compiledArgs",void 0),c(this,"_compiledEnv",void 0),c(this,"_systemProcess",void 0),c(this,"_state",void 0),!T(r)
)throw new TypeError(`[${n}] invalid controller identifier: ${r}`);if(!T(n))throw new TypeError(
`[${n}] invalid step identifier: ${n}`);if(!J(i))throw new TypeError(`[${n}] name invalid: ${i}`);if(!T(o)
)throw new TypeError(`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,T,0))throw new TypeError(
`[${n}#${i}] must have a valid args: ${JSON.stringify(s)}`);if(!C(a,T,T))throw new TypeError(
`[${n}#${i}] must have a valid env: ${JSON.stringify(a)}`);if(!p(l))throw new TypeError(`[${n}#${i}] invalid cwd: ${l}`)
;if(!p(u))throw new TypeError(`[${n}#${i}] invalid output variable name: ${u}`);this._controllerType=t,
this._controllerName=r,this._stepName=n,this._context=e,this._state=yl.CONSTRUCTED,this._name=i,this._cwd=l,
this._outputVariable=u,this._command=o,this._args=s,this._env=a,this._observer=new Hc(`BaseScriptController#${i}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`BaseScriptController#${this._name}`}
getStateDTO(){return{type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case yl.STARTED:return!0;case yl.PAUSED:case yl.CONSTRUCTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isStarted(){switch(this._state){case yl.STARTED:
case yl.PAUSED:return!0;case yl.CONSTRUCTED:case yl.CANCELLED:case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:
return!1}}isPaused(){switch(this._state){case yl.PAUSED:return!0;case yl.CONSTRUCTED:case yl.STARTED:case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:case yl.UNCONSTRUCTED:return!1}}isFinished(){switch(this._state){case yl.CANCELLED:
case yl.FINISHED:case yl.FAILED:return!0;case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:case yl.UNCONSTRUCTED:
return!1}}isSuccessful(){switch(this._state){case yl.FINISHED:return!0;case yl.FAILED:case yl.CANCELLED:
case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:case yl.UNCONSTRUCTED:return!1}}isCancelled(){switch(this._state){
case yl.CANCELLED:return!0;case yl.FINISHED:case yl.FAILED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:
case yl.UNCONSTRUCTED:return!1}}isFailed(){switch(this._state){case yl.FAILED:case yl.UNCONSTRUCTED:return!0
;case yl.CANCELLED:case yl.FINISHED:case yl.CONSTRUCTED:case yl.STARTED:case yl.PAUSED:return!1}}start(){var e,t,r;if(
this._state!==yl.CONSTRUCTED)throw new Error(`${this._stepName}#${this._name} was already started`);if(
this._state=yl.STARTED,!T(e=this._context.compileModel(this._command)))throw new Error(
`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!p(
t=this._cwd?this._context.compileModel(this._cwd):void 0))throw new Error(
`${this._stepName}#${this._name} failed to compile the cwd: ${this._cwd}`);if(this._compiledCwd=t,!d(
r=this._context.compileModel(this._args),T))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=r,!C(
t=this._context.compileModel(this._env),T,T))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=t,Td.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,r,this._compiledEnv,
this._compiledCwd),this._systemProcess.on(Hl.ON_EXIT,this._closeCallback),this._systemProcess.start(),
this._observer.hasCallbacks(xl.SCRIPT_STARTED)&&this._observer.triggerEvent(xl.SCRIPT_STARTED,this),
this._observer.hasCallbacks(xl.SCRIPT_CHANGED)&&this._observer.triggerEvent(xl.SCRIPT_CHANGED,this),this}pause(){if(
!this.isRunning())throw new Error(`${this._stepName}#${this._name} was not running`);if(!this._systemProcess
)throw new Error("No process initialized");return Td.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),
this._state=yl.PAUSED,this._systemProcess.pause(),this._observer.hasCallbacks(xl.SCRIPT_PAUSED
)&&this._observer.triggerEvent(xl.SCRIPT_PAUSED,this),this._observer.hasCallbacks(xl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(xl.SCRIPT_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess)throw new Error("No process initialized")
;return Td.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),this._state=yl.STARTED,
this._systemProcess.resume(),this._observer.hasCallbacks(xl.SCRIPT_RESUMED)&&this._observer.triggerEvent(
xl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(xl.SCRIPT_CHANGED)&&this._observer.triggerEvent(xl.SCRIPT_CHANGED,
this),this}stop(){if(this._state!==yl.STARTED)throw new Error(`${this._stepName}#${this._name} was not started`);if(
!this._systemProcess)throw new Error("No process initialized");return Td.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=yl.CANCELLED,this._systemProcess.stop(),
this._observer.hasCallbacks(xl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(xl.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(xl.SCRIPT_CHANGED)&&this._observer.triggerEvent(xl.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(xl.SCRIPT_STARTED,e)}onPaused(e){return this.on(xl.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
xl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(xl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(xl.SCRIPT_FAILED,e)
}onFinished(e){return this.on(xl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(xl.SCRIPT_CHANGED,e)}getErrorString(){
return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),Td.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=yl.FINISHED,this._observer.hasCallbacks(
xl.SCRIPT_FINISHED)&&this._observer.triggerEvent(xl.SCRIPT_FINISHED,this),
void 0!==this._outputVariable&&this._context.setVariable(this._outputVariable,this.getOutputString())):(
this._state=yl.FAILED,this._observer.hasCallbacks(xl.SCRIPT_FAILED)&&this._observer.triggerEvent(xl.SCRIPT_FAILED,this))
,this._observer.hasCallbacks(xl.SCRIPT_CHANGED)&&this._observer.triggerEvent(xl.SCRIPT_CHANGED,this)}}c(pd,"Event",xl),
c(pd,"State",yl);class gd extends pd{static parseControllerModel(e){if(nt(e))return e}static isControllerModel(e){
return nt(e)}static createController(e,t){return new gd(e,t.name,t.command,t.args,t.env,t.cwd,t.output)}constructor(e,t,
r,n=[],i={},o=void 0,s=void 0){super(e,Cl.SCRIPT,"ScriptController","command",t,r,n,i,o,s)}}(Tu=Bl=Bl||{}).MKDIR="mkdir"
,Tu.READ="read",Tu.READ_OR_CREATE="read/create",Tu.WRITE="write";const fd=Oo(gu,["name","file","target","content",
"output","default"]),Ad=gc.createLogger("FileController");class Nd extends ld{static parseControllerModel(e){if(it(e)
)return e}static isControllerModel(e){return it(e)}static createController(e,t){return new Nd(e,t.name,t,t.file,t.output
)}constructor(e,t,r,n,i=void 0){super(e,Cl.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(!function(){switch(e){case Bl.MKDIR:case Bl.READ:case Bl.READ_OR_CREATE:
case Bl.WRITE:return 1}}())throw Ad.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${qc.toString(e)}`);if(!it(t))throw Ad.debug("run: input = ",t),
new TypeError(`[file#${this.getName()}] failed to compile the input property: ${qc.toString(t)}`)
;let i=null==t?void 0:t.target;if(!p(i))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${qc.toString(i)}`);if(e===Bl.MKDIR)return void 0===i?(
i=n.createTemporaryFile(),n.createDirectory(i),Ad.info(`Created temporary directory: ${i}`)):(n.createDirectory(i),
Ad.info(`Created directory: ${i}`)),i;if(e===Bl.READ){if(void 0===i)throw new TypeError(`[file#${this.getName(
)}] No file to read defined`);return n.readFile(i)}if(e===Bl.READ_OR_CREATE){if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);if(n.pathExists(i))return n.readFile(i);{
let e=null==t?void 0:t.default;return T(e)||(e=JSON.stringify(e,null,2)),n.writeFile(i,e),e}}if(e!==Bl.WRITE
)throw Ad.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);{if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);let e=null==t?void 0:t.content;return T(e)||(e=JSON.stringify(e,null
,2)),n.writeFile(i,e),i}}}const Sd=Oo(gu,["name","variable","set"]);(Jl=Jl||{}).SET="set",Wl=Jl
;const yd=gc.createLogger("VariableController");class Cd extends ld{static parseControllerModel(e){if(ot(e))return e}
static isControllerModel(e){return ot(e)}static createController(e,t){return new Cd(e,t.name,t.set,Wl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,Cl.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Jl.SET)throw yd.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${qc.toString(e)}`);if(e!==Wl.SET)throw yd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!z(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${qc.toString(t)}`);return t}}const wd=Oo(gu,["name","git","url",
"target","message","set","value","cwd"]);(Tu=vu={}).CLONE="clone",Tu.COMMIT="commit",Tu.ADD="add",Tu.CONFIG="config",
Tu.PUSH="push",Tu.PULL="pull",Vl=vu;class Rd extends pd{static parseControllerModel(e){if(st(e))return e}
static isControllerModel(e){return st(e)}static createController(e,t){var r,n,i,o,s;if(t.git===Vl.CLONE){if(r=t.target,
!(n=t.url))throw new TypeError("url is required for git clone");return n=r?["clone",n,r]:["clone",n],new Rd(e,t.name,
"git",n,{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd)}if(t.git===Vl.ADD)return i=null!==(
i=null==t?void 0:t.target)&&void 0!==i?i:".",new Rd(e,t.name,"git",["add",i],{GIT_TERMINAL_PROMPT:"0",
GIT_ASKPASS:"/bin/echo"},t.cwd);if(t.git===Vl.PUSH)return void 0!==(i=null==t?void 0:t.target)?new Rd(e,t.name,"git",[
"push",i],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd):new Rd(e,t.name,"git",["push"],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd);if(t.git===Vl.PULL)return void 0!==(o=null==t?void 0:t.target
)?new Rd(e,t.name,"git",["pull",o],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd):new Rd(e,t.name,"git",[
"pull"],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd);if(t.git===Vl.CONFIG)return o=null!==(
s=null==t?void 0:t.set)&&void 0!==s?s:"",s=null!==(s=null==t?void 0:t.value)&&void 0!==s?s:"",new Rd(e,t.name,"git",[
"config",o,s],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd);if(t.git!==Vl.COMMIT)throw new TypeError(
`Unknown git action: ${t.git}`);return s=null!==(s=null==t?void 0:t.message)&&void 0!==s?s:"Pipeline commit",new Rd(e,
t.name,"git",["commit","-m",s],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"},t.cwd)}constructor(e,t,r,n=[],i={},
o=void 0){var s=null===(s=process.env)||void 0===s?void 0:s.SSH_AUTH_SOCK;!s||null!=i&&i.SSH_AUTH_SOCK||(i=O(O({},i),{},
{SSH_AUTH_SOCK:s})),super(e,Cl.GIT,"GitController","git",t,r,n,i,o)}}const md=Oo(gu,["name","assert","equals","output"])
;(ql=ql||{}).EQUALS="equals",Kl=ql;const Id=gc.createLogger("AssertController");class Dd extends ld{
static parseControllerModel(e){if(at(e))return e}static isControllerModel(e){return at(e)}static createController(e,t){
return new Dd(e,t.name,t,Kl.EQUALS,t.output)}constructor(e,t,r,n=void 0,i=void 0){super(e,Cl.VARIABLE,
`AssertController#${t}`,`assert#${t}`,t,r,n,i)}run(e,t){if(e!==ql.EQUALS)throw Id.debug("run: action = ",e),
new TypeError(`[assert#${this.getName()}] failed to compile the action property: ${qc.toString(e)}`);if(e!==Kl.EQUALS
)throw Id.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!at(t))throw new TypeError(
`[assert#${this.getName()}] failed to compile the input property as variable: ${qc.toString(t)}`);if((
e=null==t?void 0:t.assert)!==(t=null==t?void 0:t.equals))throw new TypeError(`[assert#${this.getName(
)}] Values do not match: ${qc.toString(e)} vs ${qc.toString(t)}`);return e}}const bd=Oo(gu,["name","concat","output"]);(
zl=zl||{}).CONCAT="concat",Xl=zl;const Od=gc.createLogger("ConcatController");class Ud extends ld{
static parseControllerModel(e){if(lt(e))return e}static isControllerModel(e){return lt(e)}static createController(e,t){
return new Ud(e,t.name,t,Xl.CONCAT,t.output)}constructor(e,t,r,n=void 0,i=void 0){super(e,Cl.VARIABLE,
`ConcatController#${t}`,`concat#${t}`,t,r,n,i)}run(e,t){if(e!==zl.CONCAT)throw Od.debug("run: action = ",e),
new TypeError(`[concat#${this.getName()}] failed to compile the action property: ${qc.toString(e)}`);if(e!==Xl.CONCAT
)throw Od.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);{if(!lt(t))throw new TypeError(
`[concat#${this.getName()}] failed to compile the input property as variable: ${qc.toString(t)}`)
;const r=null==t?void 0:t.concat;return d(r,Y)?Oo([],...r):d(r,X)?os(r,(e,t)=>O(O({},e),t),{}):u(r)?r.join(""):[r]}}}
gc.createLogger("waitHttpResource"),gc.createLogger("waitLocalResource");const Ld=gc.createLogger("waitMatrixResource"),
Pd=gc.createLogger("main");gc.setLogLevel(tc),async function(n=[]){var i,o,s;let a;try{if(Lc.setLogLevel(dl.INFO),
Zc.setLogLevel(dl.INFO),td.setLogLevel(dl.INFO),class{static registerControllers(){Vc.registerController(Ud),
Vc.registerController(Dd),Vc.registerController(Cd),Vc.registerController(Rd),Vc.registerController(Nd),
Vc.registerController(dd),Vc.registerController(Ed),Vc.registerController(gd)}}.registerControllers(),Pd.debug(
`Loglevel ${gc.getLogLevelString()}`),i=hc,n.shift(),!n.shift())return console.log(x(i)),pl.ARGUMENT_PARSE_ERROR;if(
0===n.length)return console.log(x(i)),pl.ARGUMENT_PARSE_ERROR;let t=!1,r=!0;do{if(o=n.shift(),r){let e=!1;switch(
function(){switch(o){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:
return 2;case"-w":case"--wait":case 3:return 3}}()){case 0:return console.log(x(i)),pl.OK;case 1:return console.log(
function(e){const t=Ws([sc?"LOCAL":"",ac?"HTTP":"",lc?"MATRIX":"",cc?"TEST":"",dc?"DEV":""],e=>!!e)
;return`${e} v${nc} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${nc}'
  BUILD_NODE_ENV              = '${ic}'
  BUILD_DATE                  = '${oc}'
  BUILD_WITH_LOCAL_RESOURCES  = '${sc}'
  BUILD_WITH_HTTP_RESOURCES   = '${ac}'
  BUILD_WITH_MATRIX_RESOURCES = '${lc}'
`}(i)),pl.OK;case 3:t=!0,e=!0;break;case 2:r=!1,e=!0}if(!r||e)continue}if(void 0===(s=Nc.parseRunnerResource(o))
)return Pd.error(`Unsupported argument: ${o}`),console.log(x(i)),pl.UNKNOWN_ARGUMENT;a=new sd;let e=await Qe(a,s);if(
t&&e===pl.NO_WORK_AVAILABLE&&(await async function(e){switch(e.type){case _l.HTTP:
return ac?pl.UNIMPLEMENTED_FEATURE:pl.UNBUILD_FEATURE;case _l.LOCAL:
return sc?pl.UNIMPLEMENTED_FEATURE:pl.UNBUILD_FEATURE;case _l.MATRIX:return lc?async function(t){var r,n;try{Ld.debug(
"waitMatrixResource: ",t);const i=await async function(e,t){if(H(t))return new Zc(e,void 0,void 0,t.access_token);if(F(t
)){const r=new Zc(e);return r.login(t.username,t.password)}return pl.UNKNOWN_AUTHENTICATION_TYPE}(
`https://${t.homeserver}`,t.authentication);if(G(i))return i;if(G(r=await async function(e){let t=e.getUserId()
;return t||(t=await e.whoami(),t)?(Ld.info(`Agent user ID: ${t}`),t):(Ld.error("Could not detect agent user ID"),
pl.UNKNOWN_AGENT_ID)}(i)))return r;n=await async function(e){const t=new td(e,Dl.FI_NOR_AGENT_DTO);return t.getAll()}(i)
;let e=await ct(i,n);if(e===pl.OK)return pl.OK;do{try{await i.waitForEvents([Dl.M_ROOM_CREATE,Dl.M_ROOM_JOIN_RULES,
Dl.M_ROOM_MEMBER])}catch(e){Ld.error("Error while waiting: ",e),await new Promise((e,t)=>{try{setTimeout(e,15e3)}catch(e
){t(e)}})}}while(e=await ct(i,n),e===pl.NO_WORK_AVAILABLE);return e}catch(e){return Ld.error("Error: ",e),
pl.MATRIX_RESOURCE_FAILED}}(e):pl.UNBUILD_FEATURE;default:return pl.UNKNOWN_RESOURCE_TYPE}}((a,s)),e=await Qe(a,s)),
e!==pl.OK)return e===pl.UNKNOWN_RESOURCE_TYPE?(Pd.error(`Error NorPP${e}: ${j(e)}: Resource type was unknown: ${s.type}`
),console.log(x(i)),pl.UNKNOWN_RESOURCE_TYPE):(G(e)?Pd.error(`Error EX-${e}: ${j(e)}: for ${P(s.type)} resource ${o}`
):Pd.error(`Error: Exit status ${e}: for ${P(s.type)} resource ${o}`),e)}while(1<=n.length);return pl.OK}catch(e){
return Pd.error("Fatal error: ",e),pl.FATAL_ERROR}finally{a&&a.destroy()}}(process.argv).then(e=>{process.exit(e)}
).catch(e=>{console.error("Error: ",e),process.exit(1)});
