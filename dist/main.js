#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function D(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){u(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
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
function v(e){return void 0===e}function c(e){return fr(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!fr(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Wa(e)}function p(e){return Ha(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return qa(e)}function g(e){return v(e)||qa(e)}function T(e,t){return to(e,t)}
function S(e,t){return lo(e,t)}function A(e,t){return Ct(e)&&S(al(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,Ct(e)&&S(P(e),t))}function m(e){return!!Ct(e)&&!(e instanceof Date)&&!Dt(e)&&!c(
e)&&N(e,p,void 0)}function y(e,t=p,r=void 0){return!!Ct(e)&&!(e instanceof Date)&&!Dt(e)&&!c(e)&&N(e,t,r)}function w(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!Ct(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(Dt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=Zo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=al(e),n=Qo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function R(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return w(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>T(e,e=>e(t))}function b(e){return Ct(e)}function I(e,t){return b(e
)&&0===(r=t,Ws(P(e),e=>!r.includes(e)).length);var r}function O(e){if(void 0!==e&&""!==e)return $a(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=xi(e,(e,t)=>t);return Ws(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Ws(e,e=>t(e))):[]}function U(e){switch(e
){case hl.HTTP:return"http";case hl.LOCAL:return"local";case hl.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return m(e)&&function(){switch(null==e?void 0:e.type){
case El.NONE:case El.BASIC_AUTH:case El.BEARER_AUTH:return 1;default:return}}()}function F(e){return m(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===vl.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function M(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return M(r,n)}return M(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:vl.BASIC_AUTH,username:r,password:n
}}function k(e){return m(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===vl.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(k(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:vl.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:vl.BEARER_AUTH,access_token:n}}function j(e){if(Wa(e)&&!(e<0||255<e)){if(
pl.FATAL_SIGNAL_RANGE_START<=e&&e<=pl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case pl.OK:case pl.GENERAL_ERRORS:
case pl.MISUSE_OF_SHELL_BUILTINS:case pl.ARGUMENT_PARSE_ERROR:case pl.UNKNOWN_ARGUMENT:case pl.UNKNOWN_RESOURCE_TYPE:
case pl.UNKNOWN_AUTHENTICATION_TYPE:case pl.RESOURCE_LOAD_FAILED:case pl.RESOURCE_MODEL_INVALID:
case pl.LOCAL_RESOURCE_FAILED:case pl.HTTP_RESOURCE_FAILED:case pl.MATRIX_RESOURCE_FAILED:case pl.UNIMPLEMENTED_FEATURE:
case pl.UNBUILD_FEATURE:case pl.FATAL_ERROR:case pl.USAGE:case pl.DATAERR:case pl.NOINPUT:case pl.NOUSER:case pl.NOHOST:
case pl.UNAVAILABLE:case pl.SOFTWARE:case pl.OSERR:case pl.OSFILE:case pl.CANTCREAT:case pl.IOERR:case pl.TEMPFAIL:
case pl.PROTOCOL:case pl.NOPERM:case pl.CONFIG:case pl.COMMAND_INVOKED_CANNOT_EXECUTE:case pl.COMMAND_NOT_FOUND:
case pl.INVALID_ARGUMENT_TO_EXIT:case pl.FATAL_SIGNAL_RANGE_START:case pl.FATAL_SIGNAL_RANGE_END:
case pl.EXIT_STATUS_OUT_OF_RANGE:case pl.UNKNOWN_AGENT_ID:case pl.WORK_CANCELLED:case pl.CONFLICT:return 1;default:
return}}}function H(e){if(pl.FATAL_SIGNAL_RANGE_START<=e&&e<=pl.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-pl.FATAL_SIGNAL_RANGE_START}`;switch(e){case pl.OK:return"OK";case pl.GENERAL_ERRORS:
return"GENERAL_ERRORS";case pl.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case pl.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case pl.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case pl.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case pl.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case pl.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case pl.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case pl.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case pl.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case pl.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case pl.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case pl.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case pl.FATAL_ERROR:return"FATAL_ERROR"
;case pl.USAGE:return"USAGE";case pl.DATAERR:return"DATAERR";case pl.NOINPUT:return"NOINPUT";case pl.NOUSER:
return"NOUSER";case pl.NOHOST:return"NOHOST";case pl.UNAVAILABLE:return"UNAVAILABLE";case pl.SOFTWARE:return"SOFTWARE"
;case pl.OSERR:return"OSERR";case pl.OSFILE:return"OSFILE";case pl.CANTCREAT:return"CANTCREAT";case pl.IOERR:
return"IOERR";case pl.TEMPFAIL:return"TEMPFAIL";case pl.PROTOCOL:return"PROTOCOL";case pl.NOPERM:return"NOPERM"
;case pl.CONFIG:return"CONFIG";case pl.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case pl.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case pl.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case pl.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case pl.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case pl.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case pl.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case pl.WORK_CANCELLED:return"WORK_CANCELLED";case pl.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function B(e){return uc?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

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
`}function J(e){if(Wa(e))switch(e){case gl.OPTIONS:return"options";case gl.GET:return"get";case gl.POST:return"post"
;case gl.PUT:return"put";case gl.DELETE:return"delete";case gl.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function x(e){return e&&e instanceof wc}function W(e){return!(
!Ha(t=e)||(t=null!==(t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function V(e){return p(e
)||Wa(e)||$a(e)||Fa(e)}function q(e){return V(e)||d(e,C(q,v))||K(e)}function K(e){return m(e)&&N(e,p,C(q,v))}function z(
e){return v(e)||K(e)}function X(e){return V(e)||Q(e)||Y(e)}function Y(e){return m(e)&&N(e,p,C(X,v))}function Q(e){
return d(e,C(X,v))}function Z(e){return m(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type
)===fu.BOOLEAN&&p(null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||$a(r))||m(r=e
)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===fu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===fu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===fu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||m(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===fu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||X(null==e?void 0:e.default));var t,r}function ee(e){return m(e)&&p(
null==e?void 0:e.name)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Z))&&(v(
null==e?void 0:e.variables)||K(null==e?void 0:e.variables))}function te(e){return!(!ee(e)||void 0===Uc.findController(e
)&&!(ee(e)&&m(e)&&W(null==e?void 0:e.name)))}function re(e){return ee(e)&&W(null==e?void 0:e.name)&&d(
null==e?void 0:e.steps,te,1)&&I(e,$c)}function ne(e){if(re(e))return e}function ie(e){return ee(e)&&W(
null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,re,1)&&I(e,Fc)}function oe(e){return ee(e)&&W(null==e?void 0:e.name)&&d(
null==e?void 0:e.stages,ie,1)&&I(e,Mc)}function se(e){var t;return null!==(t=null!==(t=null!==(t=function(e){if(oe(e)
)return e}(e))&&void 0!==t?t:function(e){if(ie(e))return e}(e))&&void 0!==t?t:ne(e))&&void 0!==t?t:(t=e,null!==(
e=Uc.parseControllerModel(t))&&void 0!==e?e:ne(t))}function ae(e){return b(e)&&Dt(null==e?void 0:e.getName)&&Dt(
null==e?void 0:e.isRunning)&&Dt(null==e?void 0:e.isStarted)&&Dt(null==e?void 0:e.isPaused)&&Dt(
null==e?void 0:e.isCancelled)&&Dt(null==e?void 0:e.isFinished)&&Dt(null==e?void 0:e.isFailed)&&Dt(
null==e?void 0:e.isSuccessful)&&Dt(null==e?void 0:e.start)&&Dt(null==e?void 0:e.pause)&&Dt(null==e?void 0:e.resume)&&Dt(
null==e?void 0:e.stop)&&Dt(null==e?void 0:e.destroy)&&Dt(null==e?void 0:e.toString)&&Dt(null==e?void 0:e.toJSON)&&Dt(
null==e?void 0:e.onStarted)&&Dt(null==e?void 0:e.onPaused)&&Dt(null==e?void 0:e.onResumed)&&Dt(
null==e?void 0:e.onCancelled)&&Dt(null==e?void 0:e.onFailed)&&Dt(null==e?void 0:e.onFinished)&&Dt(
null==e?void 0:e.onChanged)}function le(e){return e instanceof jc}function ue(e){return e instanceof Bc}function ce(e){
return p(e)&&!!e&&"!"===e[0]}function de(e){try{return function(e){if(!p(e))throw new TypeError(
`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0])throw new TypeError(
`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}function he(e){return m(e)&&I(
e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t))&&g(
e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function _e(e){return p(e)&&!!e&&"@"===e[0]}
function Ee(e){return m(e)&&I(e,["content","type","sender"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||_e(null==e?void 0:e.sender))}function ve(e){return m(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&z(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||_e(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||Ee(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function pe(e){try{return function(e){if(!m(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!z(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!_e(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!Ee(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function fe(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ve(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||K(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function ge(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!K(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!K(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function Te(e){return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Se(e){
return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,fe)}function Ae(e){try{return function(e){if(!m(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,fe))throw e=Zo(null==e?void 0:e.events,e=>!fe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${ge(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ne(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&K(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&_e(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||ve(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function me(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!_e(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!ve(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${pe(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ye(e){return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function we(e){
return m(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ne)&&$a(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function Re(e){try{return function(e){if(!m(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Ne)){var t=Zo(null==e?void 0:e.events,e=>!Ne(e));throw new TypeError(
`Property "events" item was not correct: ${me(t)}`)}if(!$a(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function Ce(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,Ee)}function be(e){
return Oo([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Ie(e){return m(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,Ee)}function De(e){return m(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function Oe(e){return m(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||he(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||Se(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||we(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||Ce(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||Ie(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||De(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Le(e){try{return function(e){if(!m(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!he(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!Se(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Ae(e)}`);if(
!v(null==e?void 0:e.timeline)&&!we(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${Re(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!Ce(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!Ie(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!De(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Pe(e){return m(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||ve(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Ue(e){try{return function(e){if(!m(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!ve(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function $e(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Pe)}function Fe(e){try{return function(e){if(!m(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Pe))throw e=Zo(
null==e?void 0:e.events,e=>!Pe(e)),new TypeError(`Property "events" had invalid item: ${Ue(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Me(e){return m(e)&&I(e,["invite_state"])&&$e(
null==e?void 0:e.invite_state)}function ke(e){try{return function(e){if(!m(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!$e(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${Fe(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Ge(e){return m(e)&&I(e,[
"state","timeline","account_data"])&&Se(null==e?void 0:e.state)&&we(null==e?void 0:e.timeline)&&Ie(
null==e?void 0:e.account_data)}function je(e){return m(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,ce,Oe))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,ce,Me))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,ce,Ge))}function He(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,ce,Oe))throw new TypeError(`Property "join" was invalid: ${R(
null==e?void 0:e.join,ce,Oe,de,Le)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,ce,Me)
)throw new TypeError(`Property "invite" was invalid: ${R(null==e?void 0:e.invite,ce,Me,de,ke)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,ce,Ge))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function Be(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Ee)}function Je(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,Ee)}function xe(e){return m(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,_e)&&d(null==e?void 0:e.left,_e)}function We(e){try{return function(e){
if(!m(e))throw new TypeError(`Value not regular object: ${e}`);if(!I(e,["changed","left"]))throw new TypeError(
`Value properties not right: ${P(e)}`);if(!d(null==e?void 0:e.changed,_e))throw new TypeError(
`Property "changed" not valid: ${null==e?void 0:e.changed}`);if(!d(null==e?void 0:e.left,_e))throw new TypeError(
`Property "left" not valid: ${null==e?void 0:e.left}`)}(e),"No errors detected"}catch(e){return e.message}}function Ve(e
){return y(e,p,E)}function qe(e){try{return function(e){if(!m(e))throw new TypeError("value not RegularObject");if(!I(e,
["next_batch","rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"])
)throw new TypeError("value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!je(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${He(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!Be(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!Ie(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Je(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
`Property "device_lists" was invalid: ${We(null==e?void 0:e.device_lists)}`);if(!v(
null==e?void 0:e.device_one_time_keys_count)&&!Ve(null==e?void 0:e.device_one_time_keys_count))throw new TypeError(
'Property "device_one_time_keys_count" was invalid')}(e),"No errors detected"}catch(e){return e.message}}function Ke(e){
return m(e)&&I(e,["display_name","avatar_url"])&&p(null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||Fa(
null==e?void 0:e.avatar_url))}function ze(e){return m(e)&&I(e,["errcode","error","retry_after_ms"])&&function(){switch(
null==e?void 0:e.errcode){case Dl.M_USER_IN_USE:case Dl.M_INVALID_USERNAME:case Dl.M_EXCLUSIVE:case Dl.M_FORBIDDEN:
case Dl.M_LIMIT_EXCEEDED:return 1;default:return}}()&&p(null==e?void 0:e.error)&&h(null==e?void 0:e.retry_after_ms)}
function Xe(e){return encodeURIComponent(e)}async function Ye(e,t,r,n,i){n=D(D({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,bl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}async function Qe(e,t){switch(
t.type){case _l.HTTP:return ac?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(k(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await Pc.getJson(r.url,c)))return Xc.error(`Failed to load URL "${r.url}": `,o),
fl.RESOURCE_LOAD_FAILED;if(void 0===(s=se(o)))return Xc.error(`Model from URL "${r.url}" was not valid: `,o),
fl.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new zc(t,a,l,vc,pc)
;let e=Vc.createController(s,u);return Xc.info(`Running ${e.getName()} from ${r.url}`),
await Vc.startAndWaitUntilFinished(e),Xc.info(`Successfully finished ${e.getName()} from ${r.url}`),fl.OK}catch(e){
return Xc.error("Error: ",e),fl.HTTP_RESOURCE_FAILED}}(e,t):fl.UNBUILD_FEATURE;case _l.LOCAL:return sc?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
Iu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=se(i=JSON.parse(n))))return Yc.warn("Model was not valid: ",i),fl.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new zc(t,s,a,vc,pc);let e=Vc.createController(o,l);return Yc.info(`Running ${e.getName(
)} from ${r.path}`),await Vc.startAndWaitUntilFinished(e),Yc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,fl.OK}catch(e){return Yc.error("Error: ",e),fl.LOCAL_RESOURCE_FAILED}}(e,t):fl.UNBUILD_FEATURE;case _l.MATRIX:
return lc?async function(n,i){var o,s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,N,m,y,w;try{rd.debug("runMatrixResource: ",i),
f=i.authentication;let t;if(k(f))t=new Zc(`https://${i.homeserver}`,void 0,void 0,f.access_token);else{if(!F(f)
)return fl.UNKNOWN_AUTHENTICATION_TYPE;t=new Zc(`https://${i.homeserver}`),t=await t.login(f.username,f.password)}
let e=t.getUserId();if(!e&&(e=await t.whoami(),!e))return rd.error("Could not detect agent user ID"),fl.UNKNOWN_AGENT_ID
;rd.info(`Agent user ID: ${e}`);const R=new td(t,bl.FI_NOR_AGENT_DTO);if(0===(w=await R.getAll()).length
)return rd.debug("Detected no pools available."),fl.NO_WORK_AVAILABLE;g=(1===w.length?(rd.debug(
"Detected single pool available. Picking it."),w[0]):(rd.debug(
`Detected ${w.length} pools available. Picking one by random.`),w[Math.floor(Math.random()*w.length)])).id,rd.info(
`Pool ID: ${g}`);const C=new td(t,bl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,bl.FI_NOR_PIPELINE_STATE,"",[g])
;T=await C.getAll(),rd.debug("runList = ",T);let r;if(0===T.length)return rd.debug("Detected no work available."),
fl.NO_WORK_AVAILABLE;r=1===T.length?(rd.debug("Detected single work available. Picking it."),T[0]):(rd.debug(
`Detected ${T.length} work items available. Picking one by random.`),T[Math.floor(Math.random()*T.length)]);const b=r.id
;if(void 0!==(null===(o=r)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.agentPoolId)&&void 0!==(null===(a=r
)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.agentAccountId)&&void 0!==(null===(u=r)||void 0===u||null===(
c=u.data)||void 0===c?void 0:c.state))return rd.warn(`Work ID was already running: ${b}`),rd.debug(
`We'll stop listening the work item: ${b}`),await t.leaveRoom(b),rd.debug(`We'll forget the work item now: ${b}`),
await t.forgetRoom(b),fl.CONFLICT;if(rd.info(`Work ID: ${b}`),S=D(D({},r.data),{},{agentPoolId:g,agentAccountId:e}),
await C.update(r.id,S),r=await C.findById(r.id),!r)return rd.warn(
"The work item disappeared while we were selecting it."),fl.WORK_CANCELLED;if(b!==r.id)return rd.error(
`The work item ID conflict: ${b} !== ${r.id}`),fl.CONFLICT;if(g!==(null===(d=r)||void 0===d||null===(h=d.data
)||void 0===h?void 0:h.agentPoolId)||e!==(null===(_=r)||void 0===_||null===(E=_.data
)||void 0===E?void 0:E.agentAccountId))return rd.error(""),fl.CONFLICT;if(rd.debug(
"Work item secured to us! We can start the job."),void 0===(A=se(null===(v=r)||void 0===v||null===(p=v.data
)||void 0===p?void 0:p.model)))return rd.warn("Work item did not contain correct pipeline model: ",r),
fl.RESOURCE_MODEL_INVALID;N=null==A?void 0:A.parameters,m=null==A?void 0:A.variables,y=new zc(n,N,m,vc,pc);try{
let e=Vc.createController(A,y);await Ye(t,C,b,r,e);const I=e.onChanged(()=>{Ye(t,C,b,r,e).catch(e=>{rd.error(
"Failed to save controller state: ",e)})});try{await Vc.startAndWaitUntilFinished(e)}finally{I(),await Ye(t,C,b,r,e)}
}finally{await Ye(t,C,b,r,{getStateDTO:()=>({type:ml.NONE,name:"none",state:Nl.UNCONSTRUCTED}),toJSON:()=>({type:"none"}
)})}return rd.debug(`We'll stop listening the work item now: ${b}`),await t.leaveRoom(b),rd.debug(
`We'll forget the work item now: ${b}`),await t.forgetRoom(b),fl.OK}catch(e){return rd.error("Error: ",e),
fl.MATRIX_RESOURCE_FAILED}}(e,t):fl.UNBUILD_FEATURE;default:return fl.UNKNOWN_RESOURCE_TYPE}}function Ze(e){return ee(e
)&&W(null==e?void 0:e.name)&&X(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,ud)}
function et(e){return d(e,p)}function tt(e){return d(e,et)}function rt(e){return ee(e)&&W(null==e?void 0:e.name)&&X(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,hd)}function nt(e){return ee(e)&&W(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,vd);var t,r,n,i}function it(e){return ee(e)&&W(null==e?void 0:e.name
)&&X(null==e?void 0:e.file)&&(v(null==e?void 0:e.content)||X(null==e?void 0:e.content))&&f(null==e?void 0:e.target)&&f(
null==e?void 0:e.output)&&f(null==e?void 0:e.default)&&I(e,Td)}function ot(e){return ee(e)&&W(null==e?void 0:e.name)&&X(
null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,Nd)}function st(e){return ee(e)&&W(null==e?void 0:e.name)&&X(
null==e?void 0:e.git)&&f(null==e?void 0:e.url)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.message)&&f(
null==e?void 0:e.cwd)&&I(e,wd)}function at(e){return ee(e)&&W(null==e?void 0:e.name)&&X(null==e?void 0:e.assert)&&(v(
null==e?void 0:e.equals)||X(null==e?void 0:e.equals))&&I(e,Cd)}function lt(e){return ee(e)&&W(null==e?void 0:e.name)&&X(
null==e?void 0:e.concat)&&I(e,Dd)}async function ut(e,t){t=t.id,Pd.info(`Pool ID: ${t}`);const r=new td(e,
bl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,bl.FI_NOR_PIPELINE_STATE,"",[t]);return t=await r.getAll(),Pd.debug("runList = ",t)
,0!==t.length?(Pd.debug("Detected work available."),fl.OK):(Pd.debug("No work available."),fl.NO_WORK_AVAILABLE)}
async function ct(r,e){return 0===e.length?(Pd.debug("checkIfAnyPoolHasWork: Detected no pools available."),
fl.NO_WORK_AVAILABLE):1===e.length?(Pd.debug("checkIfAnyPoolHasWork: Detected single pool available. Checking it."),ut(r
,e[0])):(Pd.debug(`checkIfAnyPoolHasWork: Detected ${e.length} pools available.`),os(e,async(e,t)=>(e=await e,Pd.debug(
`checkIfAnyPoolHasWork: Result: ${e}`),e===fl.OK?fl.OK:(Pd.debug(`checkIfAnyPoolHasWork: Checking pool ${t.id}`),ut(r,t)
)),Promise.resolve(fl.NO_WORK_AVAILABLE)))}var dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,Nt,mt,yt,wt,Rt,Ct,bt,It,Dt,Ot,Lt,Pt,Ut,
$t,Ft,Mt,kt,Gt,jt,Ht,Bt,Jt,xt,Wt,Vt,qt,Kt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,fr,gr,Tr,Sr,
Ar,Nr,mr,yr,wr,Rr,Cr,br,Ir,Dr,Or,Lr,Pr,Ur,$r,Fr,Mr,kr,Gr,jr,Hr,Br,Jr,xr,Wr,Vr,qr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,on,sn,an,
ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An,Nn,mn,yn,wn,Rn,Cn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,Mn,kn,Gn,jn,Hn,Bn,Jn,xn,Wn,Vn,qn,
Kn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,Ni,mi,yi,wi,Ri,Ci,bi,Ii,Di,Oi,Li,Pi,
Ui,$i,Fi,Mi,ki,Gi,ji,Hi,Bi,Ji,xi,Wi,Vi,qi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,fo,go,To,So,
Ao,No,mo,yo,wo,Ro,Co,bo,Io,Do,Oo,Lo,Po,Uo,$o,Fo,Mo,ko,Go,jo,Ho,Bo,Jo,xo,Wo,Vo,qo,Ko,zo,Xo,Yo,Qo,Zo,es,ts,rs,ns,is,os,ss,
as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,As,Ns,ms,ys,ws,Rs,Cs,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,Ms,ks,Gs,js,Hs,Bs,Js,xs,Ws,Vs,
qs,Ks,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,Na,ma,ya,wa,Ra,Ca,ba,Ia,Da,Oa,La,
Pa,Ua,$a,Fa,Ma,ka,Ga,ja,Ha,Ba,Ja,xa,Wa,Va,qa,Ka,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,vl,pl,fl,gl,
Tl,Sl,Al,Nl,ml,yl,wl,Rl,Cl,bl,Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,Ml,kl,Gl,jl,Hl,Bl,Jl,xl,Wl,Vl,ql,Kl,zl,Xl,Yl,Ql,Zl,eu,tu,ru,nu,iu,
ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu,pu,fu,gu,Tu,Su,Au,Nu,mu,yu,wu,Ru,Cu,bu,Iu=require("fs"),Du=require("querystring"),
Ou=require("url"),Lu=require("path"),Pu=require("child_process"),Uu=require("crypto"),$u=e(Iu),Fu=t(Du),Mu=e(Ou),ku=e(Lu
),Gu=e(Uu),
ju="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Hu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Bu=function(){
this.__data__=[],this.size=0},Ju=function(e,t){return e===t||e!=e&&t!=t},xu=Ju,Wu=function(e,t){for(var r=e.length;r--;
)if(xu(e[r][0],t))return r;return-1},Vu=Wu,qu=Array.prototype,Ku=qu.splice,zu=Wu,Xu=Wu,Yu=Wu,Qu=Bu,Zu=function(e){
var t=this.__data__;return!((e=Vu(t,e))<0||(e==t.length-1?t.pop():Ku.call(t,e,1),--this.size,0))},ec=function(e){
var t=this.__data__;return(e=zu(t,e))<0?void 0:t[e][1]},tc=function(e){return-1<Xu(this.__data__,e)},rc=function(e,t){
var r=this.__data__,n=Yu(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Qu,
r.prototype.delete=Zu,r.prototype.get=ec,r.prototype.has=tc,r.prototype.set=rc,Tt=Zl=r,eu=function(){
this.__data__=new Tt,this.size=0},ia=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Yl=function(e){return this.__data__.get(e)},Ql=function(e){return this.__data__.has(e)},
iu=tu="object"==typeof ju&&ju&&ju.Object===Object&&ju,su="object"==typeof self&&self&&self.Object===Object&&self,Lr=ou=(
hs=iu||su||Function("return this")()).Symbol,ea=Object.prototype,St=ea.hasOwnProperty,At=ea.toString,
Nt=Lr?Lr.toStringTag:void 0,Pr=Object.prototype,mt=Pr.toString,yt=function(e){var t,r,n=St.call(e,Nt),i=e[Nt];try{t=!(
e[Nt]=void 0)}catch(e){}return r=At.call(e),t&&(n?e[Nt]=i:delete e[Nt]),r},wt=function(e){return mt.call(e)},Rt=(na=ou
)?na.toStringTag:void 0,bt=au=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
Rt&&Rt in Object(e)?yt:wt)(e)},It=Ct=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
Dt=function(e){return!!It(e)&&("[object Function]"==(e=bt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Ur=hs["__core-js_shared__"],
Xl=/[^.]+$/.exec((sr=Ur)&&sr.keys&&sr.keys.IE_PROTO||""),Ot=Xl?"Symbol(src)_1."+Xl:"",ar=Function.prototype,
Lt=ar.toString,Pt=Dt,Ut=function(e){return!!Ot&&Ot in e},$t=Ct,Ft=on=function(e){if(null!=e){try{return Lt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},$r=/[\\^$.*+?()[\]{}|]/g,Mt=/^\[object .+?Constructor\]$/,
oa=Function.prototype,Du=Object.prototype,Ou=oa.toString,Lu=Du.hasOwnProperty,kt=RegExp("^"+Ou.call(Lu).replace($r,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gt=function(e){return!(!$t(e
)||Ut(e))&&(Pt(e)?kt:Mt).test(Ft(e))},jt=function(e,t){return null==e?void 0:e[t]},qu=(Uu=function(e,t){return t=jt(e,t)
,Gt(t)?t:void 0})(hs,"Map"),Wu=Uu(Object,"create"),Bt=Ht=Bu=Wu,wu=Object.prototype,Jt=wu.hasOwnProperty,xt=Bu,
Ru=Object.prototype,Wt=Ru.hasOwnProperty,Vt=Bu,Cu=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},bu=function(e){var t,r=this.__data__;return Bt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Jt.call(r,e)?r[e]:void 0},Qu=function(e){var t=this.__data__;return xt?void 0!==t[e]:Wt.call(t,e)},
Zu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Vt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=Ht?Ht(null):{},this.size=0},i.prototype.delete=Cu,i.prototype.get=bu,
i.prototype.has=Qu,i.prototype.set=Zu,qt=i,Kt=Zl,zt=qu,ec=function(){this.size=0,this.__data__={hash:new qt,map:new(
zt||Kt),string:new qt}},Xt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},er=Zt=Qt=Yt=function(e,t){
return e=e.__data__,Xt(t)?e["string"==typeof t?"string":"hash"]:e.map},tc=function(e){return e=Yt(this,e).delete(e),
this.size-=e?1:0,e},rc=function(e){return Qt(this,e).get(e)},ju=function(e){return Zt(this,e).has(e)},tu=function(e,t){
var r=er(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=ec,o.prototype.delete=tc,
o.prototype.get=rc,o.prototype.has=ju,o.prototype.set=tu,rr=qu,nr=su=o,ir=tr=Zl,cs=ia,ea=Yl,Lr=Ql,Pr=function(e,t){var r
,n=this.__data__;if(n instanceof tr){if(r=n.__data__,!rr||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new nr(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=eu,s.prototype.delete=cs,
s.prototype.get=ea,s.prototype.has=Lr,s.prototype.set=Pr,na=s,or=su,Ur=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Ur,lr=sr=a,ur=Xl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},cr=ar=function(e,t){return e.has(t)},oa=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new lr:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!ur(t,function(e,t){if(!cr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},Du=hs.Uint8Array,dr=Du,hr=Ju,_r=oa,Er=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},vr=Ou=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},$r=(Lu=ou)?Lu.prototype:void 0,pr=$r?$r.valueOf:void 0,Wu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new dr(e),new dr(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return hr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=Er;case"[object Set]":return l=l||vr,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=_r(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(pr)return pr.call(e)==pr.call(t)}return!1},wu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Ru=Array.isArray,gr=wu,Tr=fr=Ru,Bu=function(e,t,r){
return t=t(e),Tr(e)?t:gr(t,r(e))},Sr=Cu=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},bu=Object.prototype,Ar=bu.propertyIsEnumerable,Qu=(Nr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Sr(Nr(t),function(e){return Ar.call(t,e)}))}:function(){return[]},Zu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},mr=au,ec=function(e){return yr(e)&&"[object Arguments]"==mr(e)},
wr=yr=tc=function(e){return null!=e&&"object"==typeof e},rc=Object.prototype,Rr=rc.hasOwnProperty,
Cr=rc.propertyIsEnumerable,ju=ec(function(){return arguments}())?ec:function(e){return wr(e)&&Rr.call(e,"callee"
)&&!Cr.call(e,"callee")},tu=hs,Zl=function(){return!1},tu=(tu=(eu=(Ql=(eu=(Ql=(Yl=ia={exports:{}}).exports
)&&!Ql.nodeType&&Ql)&&Yl&&!Yl.nodeType&&Yl)&&Ql.exports===eu)?tu.Buffer:void 0)?tu.isBuffer:void 0,Yl.exports=Zl=tu||Zl,
br=/^(?:0|[1-9]\d*)$/,cs=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&br.test(e))&&-1<e&&e%1==0&&e<t},Ir=au,Dr=ea=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Or=tc,Lr="[object Arguments]",Pr="[object Array]",
Ur="[object Boolean]",Du="[object Date]",Lu="[object Error]",$r="[object Function]",Ru="[object Map]",
rc="[object Object]",ec="[object RegExp]",Ql="[object Set]",eu="[object String]",tu="[object WeakMap]",
Yl="[object ArrayBuffer]",Zl="[object DataView]",(Fr={}
)["[object Float32Array]"]=Fr["[object Float64Array]"]=Fr["[object Int8Array]"]=Fr["[object Int16Array]"]=Fr["[object Int32Array]"]=Fr["[object Uint8Array]"]=Fr["[object Uint8ClampedArray]"]=Fr["[object Uint16Array]"]=Fr["[object Uint32Array]"]=!0
,
Fr[Lr]=Fr[Pr]=Fr[Yl]=Fr[Ur]=Fr[Zl]=Fr[Du]=Fr[Lu]=Fr[$r]=Fr[Ru]=Fr["[object Number]"]=Fr[rc]=Fr[ec]=Fr[Ql]=Fr[eu]=Fr[tu]=!1
,bu=function(e){return Or(e)&&Dr(e.length)&&!!Fr[Ir(e)]},rc=function(t){return function(e){return t(e)}},ec=iu,tu=(tu=(
eu=Ql={exports:{}}).exports)&&!tu.nodeType&&tu,tu=(ru=tu&&eu&&!eu.nodeType&&eu)&&ru.exports===tu,nu=tu&&ec.process,
ec=function(){try{return ru&&ru.require&&ru.require("util").types||nu&&nu.binding&&nu.binding("util")}catch(e){}}(),
eu.exports=ec,iu=bu,ec=(eu=(tu=Ql.exports)&&tu.isTypedArray)?rc(eu):iu,Mr=Zu,kr=ju,Gr=fr,jr=ia.exports,Hr=cs,Br=bu=ec,
tu=Object.prototype,Jr=tu.hasOwnProperty,eu=function(e,t){var r,n=Gr(e),i=!n&&kr(e),o=!n&&!i&&jr(e),s=!n&&!i&&!o&&Br(e),
a=n||i||o||s,l=a?Mr(e.length,String):[],u=l.length;for(r in e)!t&&!Jr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Hr(r,u))||l.push(r);return l},
xr=Object.prototype,iu=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||xr)},
mu=Object.keys,yu=Object,Wr=iu,Vr=function(e){return mu(yu(e))},ec=Object.prototype,qr=ec.hasOwnProperty,Kr=Dt,zr=ea,
Xr=eu,Yr=function(e){var t,r;if(!Wr(e))return Vr(e);for(r in t=[],Object(e))qr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},Qr=tu=function(e){return null!=e&&zr(e.length)&&!Kr(e)},Zr=Bu,en=Qu,tn=iu=function(e){return(Qr(e)?Xr:Yr)(e)}
,rn=function(e){return Zr(e,tn,en)},Zu=Object.prototype,nn=Zu.hasOwnProperty,ec=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=rn(e),T=g.length;if(T!=rn(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:nn.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},eu=Uu(hs,
"DataView"),Bu=qu,Qu=Uu(hs,"Promise"),qu=Zu=Uu(hs,"Set"),hs=Uu(hs,"WeakMap"),sn=au,ln="[object Map]",
un="[object Promise]",cn="[object Set]",dn="[object WeakMap]",hn="[object DataView]",_n=(an=on)(on=eu),En=an(Bu),vn=an(
Qu),pn=an(qu),fn=an(hs),eu=sn,(on&&eu(new on(new ArrayBuffer(1)))!=hn||Bu&&eu(new Bu)!=ln||Qu&&eu(Qu.resolve()
)!=un||qu&&eu(new qu)!=cn||hs&&eu(new hs)!=dn)&&(eu=function(e){var t=sn(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?an(e):"")switch(e){case _n:return hn;case En:return ln;case vn:return un
;case pn:return cn;case fn:return dn}return t}),gn=na,Tn=oa,Sn=Wu,An=ec,Nn=eu,mn=fr,yn=ia.exports,wn=bu,
Rn="[object Arguments]",Cn="[object Array]",bn="[object Object]",qu=Object.prototype,In=qu.hasOwnProperty,Dn=function(e,
t,r,n,i,o){var s,a,l=mn(e),u=mn(t),c=l?Cn:Nn(e),d=u?Cn:Nn(t),h=(c=c==Rn?bn:c)==bn,u=(d=d==Rn?bn:d)==bn;if((d=c==d)&&yn(e
)){if(!yn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new gn,l||wn(e)?Tn(e,t,r,n,i,o):Sn(e,t,c,r,n,i,o)):1&r||(
s=h&&In.call(e,"__wrapped__"),a=u&&In.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new gn,An(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new gn)},Ln=na,Pn=hs=function e(t,r,n,i,o){return t===r||(null==t||null==r||!On(t)&&!On(r
)?t!=t&&r!=r:Dn(t,r,n,i,e,o))},Un=Ct,$n=oa=function(e){return e==e&&!Un(e)},Fn=iu,Mn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new Ln,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?Pn(a,s,3,n,l):u))return!1;return!0},kn=function(e){for(var t,r,n=Fn(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
$n(r)];return n},Gn=Wu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
ec=function(t){var r=kn(t);return 1==r.length&&r[0][2]?Gn(r[0][0],r[0][1]):function(e){return e===t||Mn(e,t,r)}},jn=au,
Hn=On=tc,Bn=fr,Jn=eu=function(e){return"symbol"==typeof e||Hn(e)&&"[object Symbol]"==jn(e)},
xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wn=/^\w*$/,ia=function(e,t){if(Bn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Jn(e))||Wn.test(e)||!xn.test(e)||null!=t&&e in Object(t)},
Vn=su,qn="Expected a function",l.Cache=Vn,
Kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zn=/\\(\\)?/g,Qu=0
,Nu=(Qu=l(Qu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Kn,function(e,t,r,n){i.push(
r?n.replace(zn,"$1"):t||e)}),i},function(e){return 500===Nu.size&&Nu.clear(),e})).cache,Xn=Hu,na=(qu=ou
)?qu.prototype:void 0,Zn=na?na.toString:void 0,ei=su=function e(t){if("string"==typeof t)return t;if(Yn(t))return Xn(t,e
)+"";if(Qn(t))return Zn?Zn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ni=Qu,ii=qu=function(e){
return null==e?"":ei(e)},oi=Qn=eu,ci=si=na=function(e,t){return ti(e)?e:ri(e,t)?[e]:ni(ii(e))},di=ju,Ei=ea,pi=function(e
,t){return null!=e&&t in Object(e)},fi=bu=function(e,t,r){for(var n,i,o=(t=ci(t,e)).length,s=!(n=-1);++n<o&&(i=vi(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&Ei(o)&&_i(i,o)&&(hi(e)||di(e))},gi=hs,
Ti=ui=function(e,t,r){return void 0===(t=null==e?void 0:li(e,t))?r:t},Si=function(e,t){return null!=e&&fi(e,t,pi)},Ni=oa
,mi=Wu,wi=li=ea=function(e,t){for(var r=0,n=(t=si(t,e)).length;null!=e&&r<n;)e=e[ai(t[r++])];return r&&r==n?e:void 0},
Ri=function(t){return function(e){return null==e?void 0:e[t]}},Ci=function(t){return function(e){return wi(e,t)}},
bi=Ai=ri=ia,Ii=yi=vi=ai=hs=function(e){if("string"==typeof e||oi(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
Di=ec,Oi=function(r,n){return Ai(r)&&Ni(n)?mi(yi(r),n):function(e){var t=Ti(e,r);return void 0===t&&t===n?Si(e,r):gi(n,t
,3)}},Li=oa=function(e){return e},Pi=hi=ti=Yn=fr,Ui=function(e){return bi(e)?Ri(Ii(e)):Ci(e)},$i=ia=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Fi=iu,ji=Hu,Bi=ia=function(e,n){
var i=-1,o=Gi(e)?Array(e.length):[];return ki(e,function(e,t,r){o[++i]=n(e,t,r)}),o},xi=function(e,t){return(Ji(e)?ji:Bi
)(e,Hi(t))},Vi=Ju,qi=Gi=Mi=tu,Ki=_i=cs,zi=Ct,Xi=Xl,Qi=function(e,n){var i;return Wi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},to=function(e,t,r){var n=Zi(e)?Xi:Qi;return r&&eo(e,t,r)&&(t=void 0),n(e,Yi(t))},ro=Wi=ki=Xl=ec=function(e,t){
if(null==e)return e;if(!Mi(e))return e&&$i(e,t,Fi);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},no=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},io=function(e,n){
var i=!0;return ro(e,function(e,t,r){return i=!!n(e,t,r)}),i},oo=Yi=Hi=Wu=function(e){
return"function"==typeof e?e:null==e?Li:"object"==typeof e?Pi(e)?Oi(e[0],e[1]):Di(e):Ui(e)},so=Zi=Ji=fr,
ao=eo=ec=function(e,t,r){if(!zi(r))return!1;var n=typeof t;return!!("number"==n?qi(r)&&Ki(t,r.length
):"string"==n&&t in r)&&Vi(r[t],e)},lo=function(e,t,r){var n=so(e)?no:io;return r&&ao(e,t,r)&&(t=void 0),n(e,oo(t))},
uo=Uu,Uu=function(){try{var e=uo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),co=Uu,ho=function(e,t,r){
"__proto__"==t&&co?co(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},_o=Ju,Ju=Object.prototype,
Eo=Ju.hasOwnProperty,vo=function(e,t,r){var n=e[t];Eo.call(e,t)&&_o(n,r)&&(void 0!==r||t in e)||ho(e,t,r)},po=na,fo=cs,
To=hs,So=function(e,t,r,n){var i,o,s,a,l,u,c;if(!go(e))return e;for(i=-1,s=(o=(t=po(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=To(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=go(c)?c:fo(t[i+1])?[]:{})),vo(a,l,u),a=a[l]}return e},Ao=function(e,t,r){return null==e?e:So(e,t,r)},No=ju
,yo=(Ju=ou)?Ju.isConcatSpreadable:void 0,Ro=function(e){return mo(e)||No(e)||!!(yo&&e&&e[yo])},Co=wo=wu,
bo=na=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||Ro,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):wo(o,s
):i||(o[o.length]=s);return o},Io=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
Do=mo=fr,Oo=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return Co(Do(t)?Io(t):[t],bo(e,1))},Lo=Wu,Po=tu,Uo=iu,cs=function(o){return function(e,t,r){var n,
i=Object(e);return Po(e)||(n=Lo(t),e=Uo(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
hs=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},$o=/\s/,Fo=function(
e){for(var t=e.length;t--&&$o.test(e.charAt(t)););return t},Mo=/^\s+/,ko=ju=function(e){return e&&e.slice(0,Fo(e)+1
).replace(Mo,"")},Go=go=Ct,jo=eu,Ho=/^[-+]0x[0-9a-f]+$/i,Bo=/^0b[01]+$/i,Jo=/^0o[0-7]+$/i,xo=parseInt,Wo=function(e){
var t;return"number"==typeof e?e:jo(e)?NaN:(Go(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=Go(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=ko(e),(t=Bo.test(e))||Jo.test(e)?xo(e.slice(2),t?2:8):Ho.test(e)?NaN:+e))},
Vo=17976931348623157e292,qo=function(e){return e?(e=Wo(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Vo:0===e?e:0},Ko=hs,zo=Wu
,Xo=ou=function(e){var t=qo(e),e=t%1;return t==t?e?t-e:t:0},Yo=Math.max,Ju=cs(Qo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Xo(r))<0&&(r=Yo(n+r,0)),Ko(e,zo(t),r)):-1}),Zo=Ju,es=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},ts=Xl,rs=Wu,ns=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},is=fr,os=function(e,t,r){var n=is(e)?es:ns,i=arguments.length<3
;return n(e,rs(t),r,i,ts)},wu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},ss=hs,as=function(e){return e!=e},ls=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},us=tu=function(e,t,r){return t==t?ls(e,t,r):ss(e,as,r)},
cs=function(e,t){return!(null==e||!e.length)&&-1<us(e,t,0)},Ju=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},hs=function(){},hs=(ds=Zu)&&1/Ou(new ds([,-0]))[1]==1/0?function(e){return new ds(e)
}:hs,_s=sr,Es=cs,vs=Ju,ps=ar,fs=hs,gs=Ou,Ts=function(e,t,r){var n,i,o,s,a=-1,l=Es,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=vs;else if(200<=u){if(n=t?null:fs(e))return gs(n);c=!1,l=ps,h=new _s}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},Ss=function(e){return e&&e.length?Ts(e):[]},As=eu,Ns=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=As(e),s=void 0!==t,a=null===t,l=t==t,u=As(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},ms=Hu,ys=ea,ws=Wu,Rs=ia,Cs=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,bs=rc,Is=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=Ns(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},Ds=oa,Os=fr,eu=function(e,n,r){var i;return n=n.length?ms(n
,function(t){return Os(t)?function(e){return ys(e,1===t.length?t[0]:t)}:t}):[Ds],i=-1,n=ms(n,bs(ws)),e=Rs(e,function(t,e
,r){return{criteria:ms(n,function(e){return e(t)}),index:++i,value:t}}),Cs(e,function(e,t){return Is(e,t,r)})},
Ls=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Ps=Math.max,ea=function(o,s,a){return s=Ps(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Ps(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),Ls(o,this,e)}},Us=function(e){return function(){return e}},$s=Uu,
Fs=Date.now,Tu=$s?function(e,t){return $s(e,"toString",{configurable:!0,enumerable:!1,value:Us(t),writable:!0})}:oa,
Ms=na,ks=eu,Gs=ec,(ia=function(){var e=Fs(),t=16-e+ +Au;if(Au=e,0<t){if(800<=++Su)return arguments[0]}else Su=0
;return Tu.apply(void 0,arguments)})(ea(Ou=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&Gs(e,t[0],t[1]
)?t=[]:2<r&&Gs(t[0],t[1],t[2])&&(t=[t[0]]),ks(e,Ms(t,1),[])},void(Au=Su=0),oa),Ou+""),Hs=Cu,Bs=function(e,n){var i=[]
;return js(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Js=Wu,Ws=function(e,t){return(xs(e)?Hs:Bs)(e,Js(t))},Vs=oa,
qs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Ks=js=Xl,zs=function(e){
return"function"==typeof e?e:Vs},Xs=xs=fr,Ys=function(e,t){return(Xs(e)?qs:Ks)(e,zs(t))},Qs=wu,Uu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:Qs(e,t,r)},Zs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),ea=function(e){return Zs.test(e)}
,ta=au,ra=tc,ia=function(e){return ra(e)&&"[object RegExp]"==ta(e)},Cu=(eu=(na=Ql.exports)&&na.isRegExp)?rc(eu):ia,
Wu=function(e){return e.split("")},Xl="["+(oa="\\ud800-\\udfff")+"]",rc=(wu="[\\ufe0e\\ufe0f]?")+(rc="(?:"+(
Ql="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(na="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
eu="[^"+oa+"]",ia="(?:\\ud83c[\\udde6-\\uddff]){2}",oa="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+wu+rc+")*",
Xl="(?:"+[eu+Ql+"?",Ql,ia,oa,Xl].join("|")+")",sa=RegExp(na+"(?="+na+")|"+Xl+rc,"g"),aa=Wu,ua=function(e){
return e.match(sa)||[]},ha=la=ea,_a=ec,Ea=Cu,fa=function(e,t,r){return r&&"number"!=typeof r&&_a(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=pa(e))&&("string"==typeof t||null!=t&&!Ea(t))&&!(t=ca(t))&&ha(e)?da(va(e),0,r
):e.split(t,r):[]},Ta=ga=tu,Sa=ca=su,Aa=ju,Na=da=Uu,ma=function(e,t){for(var r=e.length;r--&&-1<ga(t,e[r],0););return r}
,ya=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<Ta(t,e[r],0););return r},wa=va=function(e){return(la(e)?ua:aa)(e)},
Ra=pa=qu,Ca=function(e,t,r){return(e=Ra(e))&&(r||void 0===t)?Aa(e):e&&(t=Sa(t))?(r=wa(e),e=wa(t),t=ya(r,e),e=ma(r,e)+1,
Na(r,t,e).join("")):e},Uu=Object.prototype,ba=Uu.hasOwnProperty,Ia=function(e,t){return null!=e&&ba.call(e,t)},Da=bu,
Oa=function(e,t){return null!=e&&Da(e,t,Ia)},Ua="[object Boolean]",$a=function(e){return!0===e||!1===e||Pa(e)&&La(e)==Ua
},Fa=function(e){return null===e},ka=fr,ja="[object String]",Ha=function(e){return"string"==typeof e||!ka(e)&&Ga(e)&&Ma(
e)==ja},Ba=Ma=La=au,Ja=Ga=Pa=tc,xa="[object Number]",Wa=function(e){return"number"==typeof e||Ja(e)&&Ba(e)==xa},
qa=function(e){return"number"==typeof e&&e==Va(e)},Qa=function(e,t,r){return e=Ya(e),r=null==r?0:Ka(Xa(r),0,e.length),
t=za(t),e.slice(r,r+t.length)==t},Za=Ka=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},el=za=su,tl=Xa=Va=ou,rl=Ya=qu,nl=function(e,t,r){var n;return e=rl(e),t=el(t),n=e.length,n=r=void 0===r?n:Za(tl(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},il=Hu,ol=function(t,e){return il(e,function(e){return t[e]})},sl=iu,al=function(e
){return null==e?[]:ol(e,sl(e))},au=Array.prototype,ll=au.join,ul=function(e,t){return null==e?"":ll.call(e,t)},(
tc=cl={})[tc.DEBUG=0]="DEBUG",tc[tc.INFO=1]="INFO",tc[tc.WARN=2]="WARN",tc[tc.ERROR=3]="ERROR",tc[tc.NONE=4]="NONE",
dl=cl;const nc=null!==(su=L("1.0.5"))&&void 0!==su?su:"?";qu=null!==(ou=L(""))&&void 0!==ou?ou:"io.nor.fi",iu=null!==(
Hu=L(""))&&void 0!==Hu?Hu:"nor-pipeline-runner",tc=null!==(au=L(""))&&void 0!==au?au:"",ou=null!==(su=L("")
)&&void 0!==su?su:"";const ic=null!==(Hu=L("production"))&&void 0!==Hu?Hu:"development",oc=null!==(au=L(
"2021-09-10T06:57:15.549Z"))&&void 0!==au?au:"";Hu=null!==(su=L(""))&&void 0!==su?su:"${",su=null!==(au=L("")
)&&void 0!==au?au:"}";const sc=null===(au=O(""))||void 0===au||au,ac=null===(au=O(""))||void 0===au||au,lc=null===(au=O(
""))||void 0===au||au,uc=null===(au=O(""))||void 0===au||au;au="production"===ic;const cc="test"===ic,dc=!au&&!cc
;tc=null!==(dt=function(e){if(e){if(function(){switch(e){case cl.DEBUG:case cl.INFO:case cl.WARN:case cl.ERROR:
case cl.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return cl.DEBUG
;case"INFO":return cl.INFO;case"WARN":case"WARNING":return cl.WARN;case"ERR":case"ERROR":return cl.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return cl.NONE;default:return}}}(null!==(dt=L(null===(au=process
)||void 0===au||null===(dt=au.env)||void 0===dt?void 0:dt.PIPELINE_LOG_LEVEL))&&void 0!==dt?dt:L(tc))
)&&void 0!==dt?dt:dl.INFO;const hc=null!==(ht=L(null===(dt=process)||void 0===dt||null===(ht=dt.env
)||void 0===ht?void 0:ht.PIPELINE_SERVER))&&void 0!==ht?ht:iu,_c=null!==(_t=function(e){if(void 0!==e)return`${e}`}(
null===(iu=process)||void 0===iu||null===(_t=iu.env)||void 0===_t?void 0:_t.PIPELINE_AUTHENTICATION))&&void 0!==_t?_t:ou
,Ec=null!==(Et=L(null===(ou=process)||void 0===ou||null===(Et=ou.env)||void 0===Et?void 0:Et.PIPELINE_SERVER)
)&&void 0!==Et?Et:qu,vc=null!==(vt=L(null===(qu=process)||void 0===qu||null===(vt=qu.env
)||void 0===vt?void 0:vt.PIPELINE_VARIABLE_PREFIX))&&void 0!==vt?vt:Hu,pc=null!==(pt=L(null===(Hu=process
)||void 0===Hu||null===(pt=Hu.env)||void 0===pt?void 0:pt.PIPELINE_VARIABLE_SUFFIX))&&void 0!==pt?pt:su;class fc{
constructor(e,t){u(this,"_logger",void 0),u(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class gc{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case cl.DEBUG:return"DEBUG";case cl.INFO:return"INFO";case cl.WARN:return"WARN";case cl.ERROR:return"ERROR"
;case cl.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=dl.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=dl.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=dl.WARN&&this._logger.warn(...e)}static error(...e){this._level<=dl.ERROR&&this._logger.error(...e)}
static createLogger(e){return new fc(e,gc)}}u(gc,"Level",dl),u(gc,"_level",dl.DEBUG),u(gc,"_logger",console),(su=hl={}
)[su.HTTP=0]="HTTP",su[su.LOCAL=1]="LOCAL",su[su.MATRIX=2]="MATRIX",_l=hl,(su=El={})[su.NONE=0]="NONE",
su[su.BASIC_AUTH=1]="BASIC_AUTH",su[su.BEARER_AUTH=2]="BEARER_AUTH",vl=El;class Tc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:M(e):null!==(r=G(e,t))&&void 0!==r?r:M(e,t)}}
const Sc=gc.createLogger("MatrixRunnerResource");class Ac{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return m(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===_l.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=Ca(`${e}`)
).toLowerCase(),Qa(t,"http:")||Qa(t,"https:")?(t=new URL(e),t=null!==(t=Tc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:Tc.parseRunnerAuthentication(_c),{type:_l.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return m(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===_l.LOCAL&&p(null==t?void 0:t.path)?e:(e=Ca(`${e}`),(e=Qa(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&$u.default.existsSync(e)?{type:_l.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(m(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===_l.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=Ca(
`${i}`),Sc.debug(`value: '${i}'`);let e=i.toLowerCase();if(Sc.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),Sc.debug(`lowerCaseValue: '${e}'`),Qa(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),Sc.debug(`url: '${s}': `,s),o=null!==(o=Tc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:Tc.parseRunnerAuthentication(_c),Sc.debug(
"auth: ",o);const e=`${s.host}`;Sc.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),Sc.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return Sc.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,Sc.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",Sc.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,Sc.debug(`pool: '${s}'`),{type:_l.MATRIX,homeserver:e,pool:s,
authentication:o}}Qa(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return Qa(e,"!")||Qa(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${Ec}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||_c,r=r||Ec,{type:_l.MATRIX,homeserver:r,pool:n,
authentication:Tc.parseRunnerAuthentication(t)}}}(e)}}(su=pl={})[su.OK=0]="OK",su[su.GENERAL_ERRORS=1]="GENERAL_ERRORS",
su[su.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",su[su.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
su[su.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",su[su.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
su[su.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",su[su.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
su[su.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",su[su.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
su[su.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",su[su.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
su[su.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",su[su.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
su[su.FATAL_ERROR=14]="FATAL_ERROR",su[su.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
su[su.WORK_CANCELLED=16]="WORK_CANCELLED",su[su.CONFLICT=17]="CONFLICT",su[su.NO_WORK_AVAILABLE=18]="NO_WORK_AVAILABLE",
su[su.USAGE=64]="USAGE",su[su.DATAERR=65]="DATAERR",su[su.NOINPUT=66]="NOINPUT",su[su.NOUSER=67]="NOUSER",
su[su.NOHOST=68]="NOHOST",su[su.UNAVAILABLE=69]="UNAVAILABLE",su[su.SOFTWARE=70]="SOFTWARE",su[su.OSERR=71]="OSERR",
su[su.OSFILE=72]="OSFILE",su[su.CANTCREAT=73]="CANTCREAT",su[su.IOERR=74]="IOERR",su[su.TEMPFAIL=75]="TEMPFAIL",
su[su.PROTOCOL=76]="PROTOCOL",su[su.NOPERM=77]="NOPERM",su[su.CONFIG=78]="CONFIG",
su[su.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
su[su.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",su[su.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
su[su.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
su[su.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
su[su.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",fl=pl,(su=gl={})[su.OPTIONS=0]="OPTIONS",
su[su.GET=1]="GET",su[su.POST=2]="POST",su[su.PUT=3]="PUT",su[su.DELETE=4]="DELETE",su[su.PATCH=5]="PATCH",lu=gl
;const Nc="WINDOW"===(uu=null!==(uu=null!==(ft=null===(su=process)||void 0===su||null===(ft=su.env
)||void 0===ft?void 0:ft.NOR_REQUEST_CLIENT_MODE)&&void 0!==ft?ft:null===(uu=process)||void 0===uu||null===(gt=uu.env
)||void 0===gt?void 0:gt.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==uu?uu:"")||!("undefined"==typeof window||!window.fetch
),mc="NODE"===uu||!Nc;class yc{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await yc.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await yc.getRequestDataAsString(e)))return Fu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await yc.getRequestDataAsString(e)))return JSON.parse(e)}}(uu=Tl={}
)[uu.Continue=100]="Continue",uu[uu.SwitchingProtocols=101]="SwitchingProtocols",uu[uu.Processing=102]="Processing",
uu[uu.CheckPoint=103]="CheckPoint",uu[uu.OK=200]="OK",uu[uu.Created=201]="Created",uu[uu.Accepted=202]="Accepted",
uu[uu.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",uu[uu.NoContent=204]="NoContent",
uu[uu.ResetContent=205]="ResetContent",uu[uu.PartialContent=206]="PartialContent",uu[uu.MultiStatus=207]="MultiStatus",
uu[uu.AlreadyReported=208]="AlreadyReported",uu[uu.IMUsed=226]="IMUsed",uu[uu.MultipleChoices=300]="MultipleChoices",
uu[uu.MovedPermanently=301]="MovedPermanently",uu[uu.Found=302]="Found",uu[uu.SeeOther=303]="SeeOther",
uu[uu.NotModified=304]="NotModified",uu[uu.TemporaryRedirect=307]="TemporaryRedirect",
uu[uu.PermanentRedirect=308]="PermanentRedirect",uu[uu.BadRequest=400]="BadRequest",
uu[uu.Unauthorized=401]="Unauthorized",uu[uu.PaymentRequired=402]="PaymentRequired",uu[uu.Forbidden=403]="Forbidden",
uu[uu.NotFound=404]="NotFound",uu[uu.MethodNotAllowed=405]="MethodNotAllowed",uu[uu.NotAcceptable=406]="NotAcceptable",
uu[uu.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",uu[uu.RequestTimeout=408]="RequestTimeout",
uu[uu.Conflict=409]="Conflict",uu[uu.Gone=410]="Gone",uu[uu.LengthRequired=411]="LengthRequired",
uu[uu.PreconditionFailed=412]="PreconditionFailed",uu[uu.PayloadTooLarge=413]="PayloadTooLarge",
uu[uu.URITooLong=414]="URITooLong",uu[uu.UnsupportedMediaType=415]="UnsupportedMediaType",
uu[uu.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",uu[uu.ExpectationFailed=417]="ExpectationFailed",
uu[uu.IAmATeapot=418]="IAmATeapot",uu[uu.UnprocessableEntity=422]="UnprocessableEntity",uu[uu.Locked=423]="Locked",
uu[uu.FailedDependency=424]="FailedDependency",uu[uu.TooEarly=425]="TooEarly",
uu[uu.UpgradeRequired=426]="UpgradeRequired",uu[uu.PreconditionRequired=428]="PreconditionRequired",
uu[uu.TooManyRequests=429]="TooManyRequests",uu[uu.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
uu[uu.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",uu[uu.InternalError=500]="InternalError",
uu[uu.InternalServerError=500]="InternalServerError",uu[uu.NotImplemented=501]="NotImplemented",
uu[uu.BadGateway=502]="BadGateway",uu[uu.ServiceUnavailable=503]="ServiceUnavailable",
uu[uu.GatewayTimeout=504]="GatewayTimeout",uu[uu.HttpVersionNotSupported=505]="HttpVersionNotSupported",
uu[uu.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",uu[uu.InsufficientStorage=507]="InsufficientStorage",
uu[uu.LoopDetected=508]="LoopDetected",uu[uu.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
uu[uu.NotExtended=510]="NotExtended",uu[uu.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",Sl=Tl,(
gu=gu||{}).ERROR="error",Al=gu;class wc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case Tl.Continue:return"Continue";case Tl.SwitchingProtocols:return"Switching Protocols"
;case Tl.Processing:return"Processing";case Tl.CheckPoint:return"Check Point";case Tl.OK:return"OK";case Tl.Created:
return"Created";case Tl.Accepted:return"Accepted";case Tl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case Tl.NoContent:return"No Content";case Tl.ResetContent:return"Reset Content"
;case Tl.PartialContent:return"Partial Content";case Tl.MultiStatus:return"Multi Status";case Tl.AlreadyReported:
return"Already Reported";case Tl.IMUsed:return"IM Used";case Tl.MultipleChoices:return"Multiple Choices"
;case Tl.MovedPermanently:return"Moved Permanently";case Tl.Found:return"Found";case Tl.SeeOther:return"See Other"
;case Tl.NotModified:return"Not Modified";case Tl.TemporaryRedirect:return"Temporary Redirect"
;case Tl.PermanentRedirect:return"Permanent Redirect";case Tl.BadRequest:return"Bad Request";case Tl.Unauthorized:
return"Unauthorized";case Tl.PaymentRequired:return"Payment Required";case Tl.Forbidden:return"Forbidden"
;case Tl.NotFound:return"Not Found";case Tl.MethodNotAllowed:return"Method Not Allowed";case Tl.NotAcceptable:
return"Not Acceptable";case Tl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case Tl.RequestTimeout:
return"Request Timeout";case Tl.Conflict:return"Conflict";case Tl.Gone:return"Gone";case Tl.LengthRequired:
return"Length Required";case Tl.PreconditionFailed:return"Precondition Failed";case Tl.PayloadTooLarge:
return"Payload Too Large";case Tl.URITooLong:return"URI Too Long";case Tl.UnsupportedMediaType:
return"Unsupported Media Type";case Tl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case Tl.ExpectationFailed:return"Expectation Failed";case Tl.IAmATeapot:return"I Am a Teapot"
;case Tl.UnprocessableEntity:return"Unprocessable Entity";case Tl.Locked:return"Locked";case Tl.FailedDependency:
return"Failed Dependency";case Tl.TooEarly:return"Too Early";case Tl.UpgradeRequired:return"Upgrade Required"
;case Tl.PreconditionRequired:return"Precondition Required";case Tl.TooManyRequests:return"Too Many Requests"
;case Tl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case Tl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case Tl.InternalServerError:return"Internal Server Error";case Tl.NotImplemented:
return"Not Implemented";case Tl.BadGateway:return"Bad Gateway";case Tl.ServiceUnavailable:return"Service Unavailable"
;case Tl.GatewayTimeout:return"Gateway Timeout";case Tl.HttpVersionNotSupported:return"Http Version Not Supported"
;case Tl.VariantAlsoNegotiates:return"Variant Also Negotiates";case Tl.InsufficientStorage:return"Insufficient Storage"
;case Tl.LoopDetected:return"Loop Detected";case Tl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case Tl.NotExtended:return"Not Extended";case Tl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),u(this,"status",void 0),u(this,"method",void 0),u(this,"url",
void 0),u(this,"body",void 0),u(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:Al.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Rc=mc?require("fs").promises:void 0,Cc=gc.createLogger(
"NodeRequestClient");class bc{constructor(e,t){u(this,"_http",void 0),u(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case lu.GET:return this._getJson(t,r,n);case lu.POST:return this._postJson(t,r,n)
;case lu.PATCH:return this._patchJson(t,r,n);case lu.PUT:return this._putJson(t,r,n);case lu.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await Rc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void Cc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Cc.debug(
"_checkSocketFile: ENOENT: ",e);throw Cc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=ku.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Mu.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=D(D({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=D(D({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?Cc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Cc.warn(
"Warning! Request had already ended when the response was received."),Cc.debug("Error from event: ",e)):(Cc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Cc.warn(
"Warning! Request had already ended when the response was received."),Cc.debug("Exception: ",e)):(Cc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await yc.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(lu.GET,e,n,r).then(bc._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(lu.PUT,e,n,r).then(bc._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),this._request(lu.POST,e,n,r).then(
bc._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=D(D({},n.headers),t)),this._request(lu.PATCH,e,n,r).then(bc._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=D(D({},n.headers),t)),
this._request(lu.DELETE,e,n,r).then(bc._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw Cc.error(`Unsuccessful response with status ${t}: `,e),new wc(t,`Error ${t} for ${J(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Ic{constructor(e){u(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case lu.GET:return this._getJson(t,r,n);case lu.POST:return this._postJson(t,r,n)
;case lu.PUT:return this._putJson(t,r,n);case lu.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ic._successResponse(e,lu.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ic._successResponse(e,lu.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ic._successResponse(e,lu.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=D(D({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ic._successResponse(e,lu.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${J(t)} ${n}`;return e.json().then(
e=>{throw new wc(r,i,t,n,e)})}return e.json()}}const Dc=mc?require("http"):void 0,Oc=mc?require("https"):void 0,
Lc=gc.createLogger("RequestClient");class Pc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(lu.GET,e,t)}static postJson(e,t,r){return Lc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(lu.POST,e,r,t)}static patchJson(e,t,r){return Lc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(lu.PATCH,e,r,t)}static putJson(e,t,r){return Lc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(lu.PUT,e,r,t)}static deleteJson(e,t,r){return Lc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(lu.DELETE,e,t,r)}static _initClient(){if(Nc)return Lc.debug("Detected browser environment"),
new Ic(window.fetch.bind(window));if(mc)return new bc(Dc,Oc);throw new TypeError(
"Could not detect request client implementation")}}u(Pc,"_client",Pc._initClient()),(gu=cu=cu||{}).JSON="json",
gu.STRING="string",gu.BOOLEAN="boolean",gu.NUMBER="number",gu.INTEGER="integer",fu=cu,gu=["name","parameters",
"variables"];class Uc{static registerController(e){this._stepControllers.push(e)}static findController(t){return Zo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return os(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}u(Uc,"_stepControllers",[]);const $c=Oo(gu,["name","steps"]),Fc=Oo(gu
,["name","jobs"]),Mc=Oo(gu,["name","stages"]);class kc{getName(){return this._name}constructor(e){u(this,"_name",void 0)
,u(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Oa(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Ys(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Ws(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
cu=du=du||{})[cu.UNCONSTRUCTED=-1]="UNCONSTRUCTED",cu[cu.CONSTRUCTED=0]="CONSTRUCTED",cu[cu.STARTED=1]="STARTED",
cu[cu.PAUSED=2]="PAUSED",cu[cu.CANCELLED=3]="CANCELLED",cu[cu.FINISHED=4]="FINISHED",cu[cu.FAILED=5]="FAILED",Nl=du,(
du=hu=hu||{}).NONE="fi.nor.pipeline.none",du.PIPELINE="fi.nor.pipeline",du.JOB="fi.nor.pipeline.job",
du.STAGE="fi.nor.pipeline.stage",du.TASK="fi.nor.pipeline.task",du.STEP="fi.nor.pipeline.step",
du.FILE="fi.nor.pipeline.step.file",du.SCRIPT="fi.nor.pipeline.step.script",du.VARIABLE="fi.nor.pipeline.step.variable",
du.JSON="fi.nor.pipeline.step.json",du.CSV="fi.nor.pipeline.step.csv",du.GIT="fi.nor.pipeline.step.git",ml=hu
;const Gc=gc.createLogger("JobController");(hu=yl={}).JOB_CHANGED="JobController:jobChanged",
hu.JOB_STARTED="JobController:jobStarted",hu.JOB_PAUSED="JobController:jobPaused",
hu.JOB_RESUMED="JobController:jobResumed",hu.JOB_CANCELLED="JobController:jobCancelled",
hu.JOB_FAILED="JobController:jobFailed",hu.JOB_FINISHED="JobController:jobFinished";class jc{constructor(e,t,r=[]){if(u(
this,"_context",void 0),u(this,"_observer",void 0),u(this,"_name",void 0),u(this,"_steps",void 0),u(this,
"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_stepDestructors",void 0),u(this,"_current",void 0),!W(t)
)throw new TypeError(`Job name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Job#${t} must have at least one step`)
;this._context=e,this._current=0,this._name=t,this._steps=r,this._observer=new kc(`JobController#${this._name}`),
this._state=Nl.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stepDestructors=xi(r,e=>e.onChanged(
this._changedCallback))}getContext(){return this._context}getState(){return this._state}getName(){return this._name}
destroy(){this._observer.destroy(),this._stepDestructors=Ws(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()
}catch(e){Gc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:ml.JOB,
state:this._state,name:this._name,steps:xi(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Nl.STARTED:return!0;case Nl.PAUSED:case Nl.CONSTRUCTED:case Nl.CANCELLED:
case Nl.FINISHED:case Nl.FAILED:return!1}}isStarted(){switch(this._state){case Nl.PAUSED:case Nl.STARTED:return!0
;case Nl.CONSTRUCTED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}isPaused(){switch(this._state){
case Nl.PAUSED:return!0;case Nl.STARTED:case Nl.CONSTRUCTED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}
isCancelled(){switch(this._state){case Nl.CANCELLED:return!0;case Nl.PAUSED:case Nl.STARTED:case Nl.CONSTRUCTED:
case Nl.FINISHED:case Nl.FAILED:return!1}}isFinished(){switch(this._state){case Nl.FINISHED:case Nl.FAILED:
case Nl.CANCELLED:return!0;case Nl.CONSTRUCTED:case Nl.PAUSED:case Nl.STARTED:return!1}}isFailed(){switch(this._state){
case Nl.FAILED:return!0;case Nl.CONSTRUCTED:case Nl.FINISHED:case Nl.PAUSED:case Nl.STARTED:case Nl.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case Nl.FINISHED:return!0;case Nl.FAILED:case Nl.CONSTRUCTED:case Nl.PAUSED:
case Nl.STARTED:case Nl.CANCELLED:return!1}}start(){if(this._state!==Nl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Gc.info(`Starting job ${this._name}`),this._state=Nl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(yl.JOB_STARTED)&&this._observer.triggerEvent(
yl.JOB_STARTED,this),this._observer.hasCallbacks(yl.JOB_CHANGED)&&this._observer.triggerEvent(yl.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Gc.info(
`Pausing job ${this._name}`),this._state=Nl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
yl.JOB_PAUSED)&&this._observer.triggerEvent(yl.JOB_PAUSED,this),this._observer.hasCallbacks(yl.JOB_CHANGED
)&&this._observer.triggerEvent(yl.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Gc.info(`Resuming job ${this._name}`),this._state=Nl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(yl.JOB_RESUMED)&&this._observer.triggerEvent(
yl.JOB_RESUMED,this),this._observer.hasCallbacks(yl.JOB_CHANGED)&&this._observer.triggerEvent(yl.JOB_CHANGED,this),this}
stop(){if(this._state!==Nl.STARTED)throw new Error(`Job#${this._name} was not started`);return Gc.info(
`Stopping job ${this._name}`),this._state=Nl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
yl.JOB_CANCELLED)&&this._observer.triggerEvent(yl.JOB_CANCELLED,this),this._observer.hasCallbacks(yl.JOB_CHANGED
)&&this._observer.triggerEvent(yl.JOB_CHANGED,this),this}onCancelled(e){return this.on(yl.JOB_CANCELLED,e)}onChanged(e){
return this.on(yl.JOB_CHANGED,e)}onFailed(e){return this.on(yl.JOB_FAILED,e)}onFinished(e){return this.on(
yl.JOB_FINISHED,e)}onPaused(e){return this.on(yl.JOB_PAUSED,e)}onResumed(e){return this.on(yl.JOB_RESUMED,e)}onStarted(e
){return this.on(yl.JOB_STARTED,e)}getErrorString(){return xi(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return xi(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Gc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=Nl.FAILED,this._observer.hasCallbacks(yl.JOB_FAILED)&&this._observer.triggerEvent(
yl.JOB_FAILED,this)):i.isCancelled()?(this._state=Nl.CANCELLED,this._observer.hasCallbacks(yl.JOB_CANCELLED
)&&this._observer.triggerEvent(yl.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=Nl.STARTED,this._steps[this._current].start(),n===Nl.PAUSED&&this._observer.hasCallbacks(yl.JOB_RESUMED
)&&this._observer.triggerEvent(yl.JOB_RESUMED,this)):(this._state=Nl.FINISHED,this._observer.hasCallbacks(
yl.JOB_FINISHED)&&this._observer.triggerEvent(yl.JOB_FINISHED,this))),this._observer.hasCallbacks(yl.JOB_CHANGED
)&&this._observer.triggerEvent(yl.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=Nl.PAUSED,
this._observer.hasCallbacks(yl.JOB_PAUSED)&&this._observer.triggerEvent(yl.JOB_PAUSED,this),this._observer.hasCallbacks(
yl.JOB_CHANGED)&&this._observer.triggerEvent(yl.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=Nl.STARTED,this._observer.hasCallbacks(yl.JOB_RESUMED)&&this._observer.triggerEvent(yl.JOB_RESUMED,this),
this._observer.hasCallbacks(yl.JOB_CHANGED)&&this._observer.triggerEvent(yl.JOB_CHANGED,this))}}u(jc,"Event",yl)
;const Hc=gc.createLogger("StageController");(hu=wl={}).STAGE_STARTED="StageController:stageStarted",
hu.STAGE_PAUSED="StageController:stagePaused",hu.STAGE_RESUMED="StageController:stageResumed",
hu.STAGE_FINISHED="StageController:stageFinished",hu.STAGE_FAILED="StageController:stageFailed",
hu.STAGE_CANCELLED="StageController:stageCancelled",hu.STAGE_CHANGED="StageController:stageChanged";class Bc{
constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,"_name",void 0),u(this,"_jobs",void 0)
,u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_jobDestructors",void 0),!W(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=Nl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new kc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=xi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:ml.STAGE,state:this._state,name:this._name,jobs:xi(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case Nl.CANCELLED:return!0;case Nl.FINISHED:case Nl.FAILED:
case Nl.CONSTRUCTED:case Nl.PAUSED:case Nl.STARTED:return!1}}isFailed(){switch(this._state){case Nl.FAILED:return!0
;case Nl.CANCELLED:case Nl.FINISHED:case Nl.CONSTRUCTED:case Nl.PAUSED:case Nl.STARTED:return!1}}isFinished(){switch(
this._state){case Nl.FINISHED:case Nl.FAILED:case Nl.CANCELLED:return!0;case Nl.CONSTRUCTED:case Nl.PAUSED:
case Nl.STARTED:return!1}}isPaused(){switch(this._state){case Nl.PAUSED:return!0;case Nl.FAILED:case Nl.CANCELLED:
case Nl.FINISHED:case Nl.CONSTRUCTED:case Nl.STARTED:return!1}}isRunning(){switch(this._state){case Nl.STARTED:return!0
;case Nl.PAUSED:case Nl.FAILED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case Nl.PAUSED:case Nl.STARTED:return!0;case Nl.FAILED:case Nl.CANCELLED:case Nl.FINISHED:
case Nl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case Nl.FINISHED:return!0;case Nl.PAUSED:
case Nl.STARTED:case Nl.FAILED:case Nl.CANCELLED:case Nl.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
wl.STAGE_CANCELLED,e)}onChanged(e){return this.on(wl.STAGE_CHANGED,e)}onFailed(e){return this.on(wl.STAGE_FAILED,e)}
onFinished(e){return this.on(wl.STAGE_FINISHED,e)}onPaused(e){return this.on(wl.STAGE_PAUSED,e)}onResumed(e){
return this.on(wl.STAGE_RESUMED,e)}onStarted(e){return this.on(wl.STAGE_STARTED,e)}start(){if(
this._state!==Nl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Hc.info(
`Starting stage ${this._name}`),this._state=Nl.STARTED,Ws(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Hc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=Nl.FAILED,
this._observer.hasCallbacks(wl.STAGE_FAILED)&&this._observer.triggerEvent(wl.STAGE_FAILED,this)
):this._observer.hasCallbacks(wl.STAGE_STARTED)&&this._observer.triggerEvent(wl.STAGE_STARTED,this),
this._observer.hasCallbacks(wl.STAGE_CHANGED)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this),this}pause(){if(
this._state===Nl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Hc.info(`Pausing stage ${this._name}`)
,this._state=Nl.PAUSED;var e=Ws(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Hc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Hc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(wl.STAGE_PAUSED
)&&this._observer.triggerEvent(wl.STAGE_PAUSED,this),this._observer.hasCallbacks(wl.STAGE_CHANGED
)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this),this}resume(){if(this._state===Nl.STARTED)throw new Error(
`Stage#${this._name} was already started`);Hc.info(`Resuming stage ${this._name}`),this._state=Nl.STARTED;var e=Ws(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Hc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Hc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(wl.STAGE_RESUMED
)&&this._observer.triggerEvent(wl.STAGE_RESUMED,this),this._observer.hasCallbacks(wl.STAGE_CHANGED
)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Hc.info(`Stopping stage ${this._name}`),this._state=Nl.CANCELLED;var e=Ws(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Hc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Hc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return xi(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return xi(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Ws(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Hc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==Nl.FAILED?(this._state=Nl.FAILED,this._observer.hasCallbacks(wl.STAGE_FAILED
)&&this._observer.triggerEvent(wl.STAGE_FAILED,this),this._observer.hasCallbacks(wl.STAGE_CHANGED
)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this)):n&&this._state!==Nl.CANCELLED?(this._state=Nl.CANCELLED,
this._observer.hasCallbacks(wl.STAGE_CANCELLED)&&this._observer.triggerEvent(wl.STAGE_CANCELLED,this),
this._observer.hasCallbacks(wl.STAGE_CHANGED)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this)
):this._state!==Nl.FINISHED&&(this._state=Nl.FINISHED,this._observer.hasCallbacks(wl.STAGE_FINISHED
)&&this._observer.triggerEvent(wl.STAGE_FINISHED,this),this._observer.hasCallbacks(wl.STAGE_CHANGED
)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this)))):(n=S(Ws(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==Nl.PAUSED?(this._state=Nl.PAUSED,this._observer.hasCallbacks(wl.STAGE_PAUSED
)&&this._observer.triggerEvent(wl.STAGE_PAUSED,this),this._observer.hasCallbacks(wl.STAGE_CHANGED
)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this)):n||this._state!==Nl.PAUSED||(this._state=Nl.STARTED,
this._observer.hasCallbacks(wl.STAGE_RESUMED)&&this._observer.triggerEvent(wl.STAGE_RESUMED,this),
this._observer.hasCallbacks(wl.STAGE_CHANGED)&&this._observer.triggerEvent(wl.STAGE_CHANGED,this))}}u(Bc,"Event",wl)
;const Jc=gc.createLogger("PipelineController");(hu=Rl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
hu.PIPELINE_PAUSED="PipelineController:pipelinePaused",hu.PIPELINE_RESUMED="PipelineController:pipelineResumed",
hu.PIPELINE_FINISHED="PipelineController:pipelineFinished",hu.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
hu.PIPELINE_FAILED="PipelineController:pipelineFailed",hu.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class xc{constructor(e,t,r){if(u(this,"_context",void 0),u(this,"_name",void 0),u(this,"_stages",void 0),u(this,
"_observer",void 0),u(this,"_changedCallback",void 0),u(this,"_state",void 0),u(this,"_stageDestructors",void 0),u(this,
"_current",void 0),!W(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,ue,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new kc(`PipelineController#${this._name}`),this._state=Nl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=xi(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:ml.PIPELINE,state:this._state,name:this._name,
stages:xi(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case Nl.CANCELLED:return!0;case Nl.STARTED:case Nl.PAUSED:case Nl.CONSTRUCTED:case Nl.FINISHED:case Nl.FAILED:return!1}}
isFailed(){switch(this._state){case Nl.FAILED:return!0;case Nl.CANCELLED:case Nl.STARTED:case Nl.PAUSED:
case Nl.CONSTRUCTED:case Nl.FINISHED:return!1}}isFinished(){switch(this._state){case Nl.FAILED:case Nl.CANCELLED:
case Nl.FINISHED:return!0;case Nl.STARTED:case Nl.PAUSED:case Nl.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Nl.PAUSED:return!0;case Nl.FAILED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.STARTED:case Nl.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Nl.STARTED:return!0;case Nl.PAUSED:case Nl.FAILED:case Nl.CANCELLED:
case Nl.FINISHED:case Nl.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Nl.STARTED:case Nl.PAUSED:return!0
;case Nl.FAILED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Nl.FINISHED:return!0;case Nl.STARTED:case Nl.PAUSED:case Nl.FAILED:case Nl.CANCELLED:case Nl.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(Rl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(Rl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(Rl.PIPELINE_FAILED,e)}onFinished(e){return this.on(Rl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
Rl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(Rl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(Rl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Jc.info(
`Pausing pipeline ${this._name}`),this._state=Nl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
Rl.PIPELINE_PAUSED)&&this._observer.triggerEvent(Rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
Rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Jc.info(`Resuming pipeline ${this._name}`),
this._state=Nl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(Rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this),this}start(){if(this._state!==Nl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Jc.info(`Starting pipeline ${this._name}`),this._state=Nl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(Rl.PIPELINE_STARTED)&&this._observer.triggerEvent(
Rl.PIPELINE_STARTED,this),this._observer.hasCallbacks(Rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
Rl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Nl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Jc.info(`Stopping pipeline ${this._name}`),this._state=Nl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(Rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Rl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(Rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this),this}
getErrorString(){return xi(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return xi(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Jc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=Nl.FAILED,
this._observer.hasCallbacks(Rl.PIPELINE_FAILED)&&this._observer.triggerEvent(Rl.PIPELINE_FAILED,this),Jc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=Nl.CANCELLED,this._observer.hasCallbacks(
Rl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Rl.PIPELINE_CANCELLED,this),Jc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Nl.STARTED;const o=this._stages[this._current].start();n===Nl.PAUSED&&this._observer.hasCallbacks(
Rl.PIPELINE_RESUMED)&&this._observer.triggerEvent(Rl.PIPELINE_RESUMED,this),Jc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=Nl.FINISHED,this._observer.hasCallbacks(Rl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(Rl.PIPELINE_FINISHED,this),Jc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(Rl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=Nl.PAUSED,this._observer.hasCallbacks(Rl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(Rl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(Rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this),Jc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=Nl.STARTED,this._observer.hasCallbacks(Rl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Rl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Rl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Rl.PIPELINE_CHANGED,this),Jc.info(`Pipeline ${this._name} was resumed`))}}u(xc,"Event",Rl
);const Wc=gc.createLogger("PipelineRunner");class Vc{static registerController(e){Uc.registerController(e)}
static createStepController(e,t){const r=Uc.findController(e);if(void 0===r)throw Wc.debug("step = ",e),new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new jc(t,e.name,
xi(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new Bc(t,e.name,xi(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new xc(t,e.name,xi(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return oe(e)?(Wc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ie(e)?(Wc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):re(e)?(
Wc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Wc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Wc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Wc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Wc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class qc{static toString(...e){return xi(e,
e=>Fa(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return Q(n)?xi(n,e=>qc.processVariables(e,i,o
,s,a)):Y(n)?os(P(n),(e,t)=>{var r=n[t];return e[`${qc.processVariables(t,i,o,s,a)}`]=qc.processVariables(r,i,o,s,a),e},
{}):p(n)?qc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=Dt(r)?r:e=>ui(r,e,o),Qa(t,n)&&nl(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=Ca(e),qc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=Ca(
t.substr(a,l-a)),h=(qc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Kc=gc.createLogger("PipelineContext");class zc{constructor(e,t=void 0,r=void 0,n="${",i="}"){u(this,"_system",
void 0),u(this,"_parameters",void 0),u(this,"_variablePrefix",void 0),u(this,"_variableSuffix",void 0),u(this,
"_lookupVariable",void 0),u(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Kc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=qc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Kc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return ui(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Kc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return K(this._variables)||(
this._variables={}),Ao(this._variables,e,t),Kc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const Xc=gc.createLogger("runHttpResource"),Yc=gc.createLogger(
"runLocalResource");(hu=Cl={}).M_ROOM_POWER_LEVELS="m.room.power_levels",hu.M_ROOM_JOIN_RULES="m.room.join_rules",
hu.M_ROOM_MEMBERSHIP="m.room.membership",hu.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
hu.M_ROOM_GUEST_ACCESS="m.room.guest_access",hu.M_ROOM_CREATE="m.room.create",hu.M_FEDERATE="m.federate",
hu.M_ROOM_MEMBER="m.room.member",hu.M_PUSH_RULES="m.push_rules",hu.M_PRESENCE="m.presence",hu.M_SPACE="m.space",
hu.M_LOGIN_PASSWORD="m.login.password",hu.M_LOGIN_TOKEN="m.login.token",hu.M_ID_USER="m.id.user",
hu.FI_NOR_DELETED="fi.nor.deleted",hu.FI_NOR_FORM_DTO="fi.nor.form_dto",hu.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,hu.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",hu.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
hu.FI_NOR_AGENT_DTO="fi.nor.dto.agent",hu.FI_NOR_PIPELINE="fi.nor.pipeline",
hu.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",bl=Cl,(hu=Il=Il||{})[hu.UNAUTHENTICATED=0]="UNAUTHENTICATED",
hu[hu.AUTHENTICATING=1]="AUTHENTICATING",hu[hu.AUTHENTICATED=2]="AUTHENTICATED",
hu[hu.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
hu[hu.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(hu=Dl={}).M_USER_IN_USE="M_USER_IN_USE",
hu.M_INVALID_USERNAME="M_INVALID_USERNAME",hu.M_EXCLUSIVE="M_EXCLUSIVE",hu.M_FORBIDDEN="M_FORBIDDEN",
hu.M_LIMIT_EXCEEDED="M_LIMIT_EXCEEDED",Ol=Dl;const Qc=gc.createLogger("SimpleMatrixClient");(Ll=Ll||{}
).EVENT="SimpleMatrixClient:event";class Zc{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){u(this,
"_observer",void 0),u(this,"_originalUrl",void 0),u(this,"_pollTimeout",void 0),u(this,"_pollWaitTime",void 0),u(this,
"_timeoutCallback",void 0),u(this,"_state",void 0),u(this,"_homeServerUrl",void 0),u(this,"_identityServerUrl",void 0),
u(this,"_accessToken",void 0),u(this,"_userId",void 0),u(this,"_nextBatch",void 0),u(this,"_timer",void 0),u(this,
"_syncing",void 0),this._state=n?Il.AUTHENTICATED:Il.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e
,this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new kc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Qc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Qc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(m(a=s=await this._postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${Xe(t)}`:""),e,
o?{Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Qc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Qc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Qc.debug(
"Could not register user: ",e),!(e instanceof wc))throw new wc(Sl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new wc(Sl.Unauthorized):403===s?new wc(Sl.Forbidden
):429===s?new wc(429):new wc(Sl.InternalServerError,"Failed to register user");if(!ze(s=null==e?void 0:e.getBody())
)throw new wc(Sl.InternalServerError,"Failed to register user");switch(s.errcode){case Ol.M_USER_IN_USE:throw new wc(
Sl.Conflict,"User already exists");case Ol.M_INVALID_USERNAME:throw new wc(Sl.BadRequest,"Username invalid")
;case Ol.M_EXCLUSIVE:throw new wc(Sl.Conflict,"User name conflicts with exclusive namespace");default:throw new wc(
Sl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Qc.debug("whoami: Fetching account whoami... ",r),n=await this._getJson(r,{Authorization:`Bearer ${t}`}),Qc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Qc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Qc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Qc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await this._getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Qc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Qc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(m(
n=r=await this._postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(
null==n?void 0:n.access_token)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(
null==n?void 0:n.device_id)))throw Qc.debug("registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Qc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Qc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof wc))throw new wc(Sl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new wc(Sl.Unauthorized
):403===r?new wc(Sl.Forbidden):429===r?new wc(429):new wc(Sl.InternalServerError,"Failed to register user");if(!ze(
r=null==e?void 0:e.getBody()))throw new wc(Sl.InternalServerError,"Failed to register user");switch(r.errcode){
case Ol.M_USER_IN_USE:throw new wc(Sl.Conflict,"User already exists");case Ol.M_INVALID_USERNAME:throw new wc(
Sl.BadRequest,"Username invalid");case Ol.M_EXCLUSIVE:throw new wc(Sl.Conflict,
"User name conflicts with exclusive namespace");default:throw new wc(Sl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:Cl.M_LOGIN_PASSWORD,identifier:{type:Cl.M_ID_USER,user:r},
password:n},Qc.debug("Sending login with userId:",r),!(m(h=o=await this._postJson(this._resolveHomeServerUrl("/login"),i
))&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||m(_=h)&&I(_,["m.homeserver","m.identity_server"])&&m(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||m(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Qc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Qc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Zc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Qc.debug(
"Could not login: ",e),new wc(Sl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(m(n=r=await this._getJson(this._resolveHomeServerUrl(`/directory/room/${Xe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Qc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Qc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof wc&&e.getStatusCode()===Sl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(m(
t=e=await this._getJson(this._resolveHomeServerUrl(`/rooms/${Xe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(
t,["joined"])&&y(null==t?void 0:t.joined,_e,Ke)))throw Qc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Qc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!K(i=await this._getJson(this._resolveHomeServerUrl(
`/rooms/${Xe(e)}/state/${Xe(t)}/${Xe(r)}`),{Authorization:`Bearer ${n}`})))throw Qc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Qc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof wc&&e.getStatusCode()===Sl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(m(s=o=await this._putJson(this._resolveHomeServerUrl(
`/rooms/${Xe(e)}/state/${Xe(t)}/${Xe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Qc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Qc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Qc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(e
)}/forget`),{},{Authorization:`Bearer ${t}`}),Qc.debug("forgetRoom: received: ",r)}catch(e){throw Qc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(e)}/leave`
),{},{Authorization:`Bearer ${t}`}),Qc.debug("leaveRoom: received: ",r)}catch(e){throw Qc.error(
"leaveRoom: Passing on error: ",e),e}}async _retryLater(r,n){return new Promise((e,t)=>{try{setTimeout(()=>{try{e(r())
}catch(e){t(e)}},n)}catch(e){t(e)}})}async inviteToRoom(e,t){var r,n;try{if(!ce(e))throw new TypeError(
`roomId invalid: ${e}`);if(!_e(t))throw new TypeError(`userId invalid: ${t}`);if(Qc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await this._postJson(
this._resolveHomeServerUrl(`/rooms/${Xe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Qc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Qc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Qc.debug("Sending message with body:",t
),r=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(e)}/send/m.room.message`),t,{
Authorization:`Bearer ${r}`}),Qc.debug("sendTextMessage response received: ",r)}async _postJson(t,r,n){try{
return Pc.postJson(t,r,n)}catch(e){if(x(e)){const i=e.getBody();if(ze(i)&&i.errcode===Ol.M_LIMIT_EXCEEDED
)return r=null===i||void 0===i?void 0:i.retry_after_ms,this._retryLater(async()=>this._postJson(t,i,n),r)}throw e}}
async _putJson(t,r,n){try{return Pc.putJson(t,r,n)}catch(e){if(x(e)){const i=e.getBody();if(ze(i
)&&i.errcode===Ol.M_LIMIT_EXCEEDED)return r=null===i||void 0===i?void 0:i.retry_after_ms,this._retryLater(async(
)=>this._putJson(t,i,n),r)}throw e}}async _getJson(t,r){try{return Pc.getJson(t,r)}catch(e){if(x(e)){var n=e.getBody()
;if(ze(n)&&(null==n?void 0:n.errcode)===Ol.M_LIMIT_EXCEEDED)return n=null==n?void 0:n.retry_after_ms,this._retryLater(
async()=>this._getJson(t,r),n)}throw e}}async createRoom(e){var t=this._accessToken;if(!t)throw new TypeError(
"createRoom: Client did not have access token");if(Qc.debug("Creating room with body:",e),!(m(e=t=await this._postJson(
this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id","room_alias"])&&ce(
null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias)&&e&&"#"===e[0]))
)throw Qc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t);return Qc.debug(
"Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(r=this._accessToken)
)throw new TypeError("createRoom: Client did not have access token");if(Qc.debug(`Joining to room ${t} with body:`,e),!(
m(i=n=await this._postJson(this._resolveHomeServerUrl(`/rooms/${Xe(t)}/join`),null!=e?e:{},{Authorization:`Bearer ${r}`}
))&&I(i,["room_id"])&&ce(null==i?void 0:i.room_id)))throw Qc.debug("response = ",n),new TypeError(
`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n);return Qc.debug(`Joined to room ${t}: `,n),n
}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{room_id:t};throw Qc.debug(
`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Qc.info("sync with ",e),!(t=this._accessToken)
)throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,full_state:i,
set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!K(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=ul(xi(P(s),e=>{var t=s[e]
;return`${Xe(e)}=${Xe(t)}`}),"&"),!(m(t=e=await this._getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||je(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||Be(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||Ie(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Je(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Ve(
null==t?void 0:t.device_one_time_keys_count))))throw Qc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${qe(e)}`);return e}isAlreadyInTheRoom(
e){if(ze(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===Ol.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Ys(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(Ll.EVENT,t?D(D({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Qc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Qc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Qc.info("Initial sync request started"),
this._state!==Il.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Il.AUTHENTICATED_AND_STARTING,
e=await this.sync({filter:{room:{timeline:{limit:1}}}}),Qc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Qc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Qc.info("Timer started..."),this._state=Il.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Qc.error("No next_batch in the response: ",t),r=Oo(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?be(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),Ys(n,e=>{var t,r=(r=s[e],Oo([],
null!=r&&r.state?Te(null==r?void 0:r.state):[],null!=r&&r.timeline?ye(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Oo([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?be(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),Ys(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),Ys(o,e=>{var t=l[e],t=Oo([],Te(
null==t?void 0:t.state),ye(null==t?void 0:t.timeline),be(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}u(Zc,
"Event",Ll),(hu=_u=_u||{}).PRIVATE_CHAT="private_chat",hu.PUBLIC_CHAT="public_chat",
hu.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Pl=_u,(_u=Eu=Eu||{}).INVITED="invited",_u.JOINED="joined",
_u.SHARED="shared",_u.WORLD_READABLE="world_readable",Ul=Eu,(Eu=vu=vu||{}).PUBLIC="public",Eu.KNOCK="knock",
Eu.INVITE="invite",Eu.PRIVATE="private",Eu.RESTRICTED="restricted",$l=vu,(vu=pu=pu||{}).CAN_JOIN="can_join",
vu.FORBIDDEN="forbidden",Fl=pu;const ed=gc.createLogger("MatrixCrudRepository");class td{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){u(this,"_client",void 0),u(this,"_serviceAccount",void 0),u(this,
"_stateType",void 0),u(this,"_stateKey",void 0),u(this,"_deletedType",void 0),u(this,"_deletedKey",void 0),u(this,
"_allowedGroups",void 0),u(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:bl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});ed.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(ed.debug("joinedRooms = ",i),t=P(t),ed.debug(
"invitedRooms = ",t),(t=Ws(t,e=>!i.includes(e))).length){ed.debug("Joining to rooms = ",t);let r=0;if(await os(t,async(e
,t)=>{await e;try{ed.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){ed.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return ed.debug(
"Fetching results again after joining"),this.getAll()}return os(i,(e,i)=>{var t=n[i],r=Ws(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Wa(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Oo(e,xi(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return xi(Ws(e,
e=>ui(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();ed.debug("createItem: clientUserId = ",o),r={data:e,version:1},ed.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),ed.debug(
"createItem: serviceAccountId = ",n),i=Ws(Ss(Oo(n?[n]:[],t||[])),e=>e!==o),ed.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,ed.debug("createItem: allowedGroups = ",n),t={[bl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:bl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Ul.SHARED}},{type:bl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Fl.FORBIDDEN}}]
;void 0!==n&&s.push({type:bl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:$l.RESTRICTED,allow:xi(n,e=>({
type:bl.M_ROOM_MEMBERSHIP,room_id:e}))}}),ed.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},ed.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Ys(this._allowedEvents,e=>{a[e]=0}),t=D(D({},n),{},{preset:Pl.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),ed.debug(
"createItem: response = ",t),t=t.room_id,ed.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
ed.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(ed.debug(
"response = ",JSON.stringify(n,null,2)),!K(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=xi(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!K(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new wc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),ed.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new wc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){ed.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){ed.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),ed.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof wc&&[401,403,404].includes(e.getStatusCode()))throw e;throw ed.error(
`Error in deleteById(${t}): `,e),new wc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await os(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw ed.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const rd=gc.createLogger("runMatrixResource"
);(Ml=Ml||{}).ON_EXIT="NodeSystemProcess:onExit";const nd=gc.createLogger("NodeSystemProcess");class id{constructor(e,t,
r,n=void 0,i=!0){u(this,"_command",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_cwd",void 0),u(this,
"_stdoutCallback",void 0),u(this,"_stderrCallback",void 0),u(this,"_closeCallback",void 0),u(this,"_observer",void 0),u(
this,"_process",void 0),u(this,"_printToParentProcess",void 0),u(this,"_stdoutChunks",void 0),u(this,"_stderrChunks",
void 0),u(this,"_exitStatus",void 0),this._observer=new kc("NodeSystemProcess"),this._process=void 0,this._command=e,
this._args=t,this._env=r,this._cwd=n,this._printToParentProcess=i,this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[],this._exitStatus=void 0}start(){const e={};return this._env&&(e.env=this._env),this._cwd&&(
e.cwd=this._cwd),this._process=Pu.spawn(this._command,this._args,e),this._process.stdout.on("data",this._stdoutCallback)
,this._process.stderr.on("data",this._stderrCallback),this._process.on("close",this._closeCallback),this}stop(){
return this._process.kill("SIGTERM"),this}pause(){return this._process.kill("SIGSTOP"),this}resume(){
return this._process.kill("SIGCONT"),this}toString(){return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}
}getExitStatus(){return this._exitStatus}getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}
getOutputString(){return Buffer.concat(this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){
this._stderrChunks.push(e),process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(Ml.ON_EXIT
)?this._observer.triggerEvent(Ml.ON_EXIT,this):nd.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}u(id,"Event",Ml);const od=gc.createLogger(
"NodeSystem");class sd{constructor(){u(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Ys(this._tempFileNames,e=>{od.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){try{const t=$u.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}catch(e){if("ENOENT"===(
null==e?void 0:e.code))return!1;throw e}}isFile(e){const t=$u.default.statSync(e);return t.isFile()}isDirectory(e){
const t=$u.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e)?this.isDirectory(e
)?this.deleteDirectory(e):$u.default.unlinkSync(e):od.warn(`deleteFile: Path did not exist: ${e}`)}deleteDirectory(e){
this.pathExists(e)?$u.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):od.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r,n){return new id(e,t,r,n)}createDirectory(e){
return $u.default.mkdirSync(e),this}readFile(e){return $u.default.readFileSync(e,{encoding:"utf8"})}writeFile(e,t){
return $u.default.writeFileSync(e,t,{encoding:"utf8"}),this}getWorkingDirectory(){return process.cwd()}
createTemporaryFile(){let e="";do{var t=Gu.default.randomBytes(20).toString("hex")}while(e=ku.default.join(
this.getWorkingDirectory(),`${t}.tmp`),$u.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file")
;return this._tempFileNames.push(e),e}}(pu=kl=kl||{}).STRINGIFY="stringify",pu.PARSE="parse";const ad=gc.createLogger(
"BaseStepController");(pu=Gl={}).JSON_STARTED="BaseStepController:scriptStarted",
pu.JSON_PAUSED="BaseStepController:scriptPaused",pu.JSON_RESUMED="BaseStepController:scriptResumed",
pu.JSON_CANCELLED="BaseStepController:scriptCancelled",pu.JSON_FAILED="BaseStepController:scriptFailed",
pu.JSON_FINISHED="BaseStepController:scriptFinished",pu.JSON_CHANGED="BaseStepController:scriptChanged";class ld{
constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,
"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,"_stepName",void 0),u(this,"_name",void 0),u(this,
"_action",void 0),u(this,"_input",void 0),u(this,"_output",void 0),u(this,"_state",void 0),u(this,"_compiledAction",
void 0),u(this,"_compiledInput",void 0),u(this,"_compiledOutput",void 0),u(this,"_successResult",void 0),u(this,
"_errorResult",void 0),!p(r))throw new TypeError(`[${r}] invalid controller identifier: ${r}`);if(!p(n)
)throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(!W(i))throw new TypeError(`[${n}] invalid name: ${i}`)
;if(!p(s))throw new TypeError(`[${n}] must have a valid string: ${s}`);if(!v(o)&&!X(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!v(a)&&!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=Nl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new kc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case Nl.STARTED:return!0;case Nl.PAUSED:case Nl.CONSTRUCTED:case Nl.CANCELLED:case Nl.FINISHED:
case Nl.FAILED:return!1}}isStarted(){switch(this._state){case Nl.STARTED:case Nl.PAUSED:return!0;case Nl.CONSTRUCTED:
case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}isPaused(){switch(this._state){case Nl.PAUSED:return!0
;case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}isFinished(){switch(
this._state){case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!0;case Nl.CONSTRUCTED:case Nl.STARTED:
case Nl.PAUSED:return!1}}isSuccessful(){switch(this._state){case Nl.FINISHED:return!0;case Nl.FAILED:case Nl.CANCELLED:
case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.PAUSED:return!1}}isCancelled(){switch(this._state){case Nl.CANCELLED:
return!0;case Nl.FINISHED:case Nl.FAILED:case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.PAUSED:return!1}}isFailed(){switch(
this._state){case Nl.FAILED:return!0;case Nl.CANCELLED:case Nl.FINISHED:case Nl.CONSTRUCTED:case Nl.STARTED:
case Nl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==Nl.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=Nl.STARTED,!X(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${qc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!X(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${qc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${qc.toString(this._output)}`);if(this._compiledOutput=n,
ad.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks(Gl.JSON_STARTED)&&this._observer.triggerEvent(Gl.JSON_STARTED,this),
this._observer.hasCallbacks(Gl.JSON_CHANGED)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this),!Dt(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,Ct(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on(Gl.JSON_STARTED,e)}onPaused(e
){return this.on(Gl.JSON_PAUSED,e)}onResumed(e){return this.on(Gl.JSON_RESUMED,e)}onCancelled(e){return this.on(
Gl.JSON_CANCELLED,e)}onFailed(e){return this.on(Gl.JSON_FAILED,e)}onFinished(e){return this.on(Gl.JSON_FINISHED,e)}
onChanged(e){return this.on(Gl.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){ad.error(
"Action success: ",e),void 0!==this._compiledOutput?(ad.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):ad.info("No output target configured for result: ",e),
this._successResult=e,this._state=Nl.FINISHED,this._observer.hasCallbacks(Gl.JSON_FINISHED
)&&this._observer.triggerEvent(Gl.JSON_FINISHED,this),this._observer.hasCallbacks(Gl.JSON_CHANGED
)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this)}_errorCloseAction(e){ad.error("Action failed: ",e),
this._errorResult=e,this._state=Nl.FAILED,this._observer.hasCallbacks(Gl.JSON_FAILED)&&this._observer.triggerEvent(
Gl.JSON_FAILED,this),this._observer.hasCallbacks(Gl.JSON_CHANGED)&&this._observer.triggerEvent(Gl.JSON_CHANGED,this)}}u(
ld,"Event",Gl),u(ld,"State",Nl);const ud=Oo(gu,["name","json","action","output"]),cd=gc.createLogger("JsonController")
;class dd extends ld{static parseControllerModel(e){if(Ze(e))return e}static isControllerModel(e){return Ze(e)}
static createController(e,t){return new dd(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=kl.STRINGIFY,i=void 0
){super(e,ml.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:kl.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case kl.STRINGIFY:case kl.PARSE:return 1}}())throw cd.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${qc.toString(e)}`);if(e===kl.STRINGIFY){if(!X(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${qc.toString(t)}`);var r=JSON.stringify(t,null,2)
;if(!p(r))throw cd.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==kl.PARSE
)throw cd.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw cd.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${qc.toString(t)}`)
;return JSON.parse(t)}}(pu=jl=jl||{}).STRINGIFY="stringify",pu.PARSE="parse";const hd=Oo(gu,["name","csv","action",
"output"]),_d=gc.createLogger("CsvController");class Ed extends ld{static parseControllerModel(e){if(rt(e))return e}
static isControllerModel(e){return rt(e)}static createController(e,t){return new Ed(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=jl.STRINGIFY,i=void 0){super(e,ml.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:jl.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case jl.STRINGIFY:case jl.PARSE:return 1}}())throw _d.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${qc.toString(e)}`);if(e===jl.STRINGIFY
){if(!tt(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${qc.toString(t)}`)
;if(n="\n",!p(r=xi(t,e=>{return[e,t,r]=[e,",",'"'],xi(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==jl.PARSE)throw _d.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw _d.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${qc.toString(t)}`);if(n="\n",t=tt(r=t)?r:(p(r
)||(r=`${r}`),xi(fa(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(et(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&Qa(e,'"')&&nl(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!tt(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const vd=Oo(gu,["name","command","args","env"]),
pd=gc.createLogger("BaseScriptController");(pu=Hl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
pu.SCRIPT_PAUSED="BaseScriptController:scriptPaused",pu.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
pu.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",pu.SCRIPT_FAILED="BaseScriptController:scriptFailed",
pu.SCRIPT_FINISHED="BaseScriptController:scriptFinished",pu.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class fd{constructor(e,t,r,n,i,o,s=[],a={},l=void 0){if(u(this,"_context",void 0),u(this,"_observer",void 0),u(this,
"_controllerType",void 0),u(this,"_controllerName",void 0),u(this,"_stepName",void 0),u(this,"_name",void 0),u(this,
"_command",void 0),u(this,"_cwd",void 0),u(this,"_args",void 0),u(this,"_env",void 0),u(this,"_closeCallback",void 0),u(
this,"_compiledCwd",void 0),u(this,"_compiledCommand",void 0),u(this,"_compiledArgs",void 0),u(this,"_compiledEnv",
void 0),u(this,"_systemProcess",void 0),u(this,"_state",void 0),!p(r))throw new TypeError(
`[${n}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!W(i))throw new TypeError(`[${n}] name invalid: ${i}`);if(!p(o))throw new TypeError(
`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,p,0))throw new TypeError(
`[${n}#${i}] must have a valid args: ${JSON.stringify(s)}`);if(!y(a,p,p))throw new TypeError(
`[${n}#${i}] must have a valid env: ${JSON.stringify(a)}`);if(!f(l))throw new TypeError(`[${n}#${i}] invalid cwd: ${l}`)
;this._controllerType=t,this._controllerName=r,this._stepName=n,this._context=e,this._state=Nl.CONSTRUCTED,this._name=i,
this._cwd=l,this._command=o,this._args=s,this._env=a,this._observer=new kc(`BaseScriptController#${i}`),
this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,this._compiledArgs=void 0,
this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),this.isPaused()?this.resume(
).stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){return this._state}getName(){
return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`BaseScriptController#${this._name}`}
getStateDTO(){return{type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case Nl.STARTED:return!0;case Nl.PAUSED:case Nl.CONSTRUCTED:case Nl.CANCELLED:
case Nl.FINISHED:case Nl.FAILED:return!1}}isStarted(){switch(this._state){case Nl.STARTED:case Nl.PAUSED:return!0
;case Nl.CONSTRUCTED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}isPaused(){switch(this._state){
case Nl.PAUSED:return!0;case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!1}}
isFinished(){switch(this._state){case Nl.CANCELLED:case Nl.FINISHED:case Nl.FAILED:return!0;case Nl.CONSTRUCTED:
case Nl.STARTED:case Nl.PAUSED:return!1}}isSuccessful(){switch(this._state){case Nl.FINISHED:return!0;case Nl.FAILED:
case Nl.CANCELLED:case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.PAUSED:return!1}}isCancelled(){switch(this._state){
case Nl.CANCELLED:return!0;case Nl.FINISHED:case Nl.FAILED:case Nl.CONSTRUCTED:case Nl.STARTED:case Nl.PAUSED:return!1}}
isFailed(){switch(this._state){case Nl.FAILED:return!0;case Nl.CANCELLED:case Nl.FINISHED:case Nl.CONSTRUCTED:
case Nl.STARTED:case Nl.PAUSED:return!1}}start(){var e,t,r;if(this._state!==Nl.CONSTRUCTED)throw new Error(
`${this._stepName}#${this._name} was already started`);if(this._state=Nl.STARTED,!p(e=this._context.compileModel(
this._command)))throw new Error(`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(
this._compiledCommand=e,!f(t=this._context.compileModel(this._cwd)))throw new Error(
`${this._stepName}#${this._name} failed to compile the cwd: ${this._cwd}`);if(this._compiledCwd=t,!d(
r=this._context.compileModel(this._args),p))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=r,!y(
t=this._context.compileModel(this._env),p,p))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=t,pd.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,r,this._compiledEnv,
this._compiledCwd),this._systemProcess.on(Ml.ON_EXIT,this._closeCallback),this._systemProcess.start(),
this._observer.hasCallbacks(Hl.SCRIPT_STARTED)&&this._observer.triggerEvent(Hl.SCRIPT_STARTED,this),
this._observer.hasCallbacks(Hl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Hl.SCRIPT_CHANGED,this),this}pause(){if(
!this.isRunning())throw new Error(`${this._stepName}#${this._name} was not running`);if(!this._systemProcess
)throw new Error("No process initialized");return pd.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),
this._state=Nl.PAUSED,this._systemProcess.pause(),this._observer.hasCallbacks(Hl.SCRIPT_PAUSED
)&&this._observer.triggerEvent(Hl.SCRIPT_PAUSED,this),this._observer.hasCallbacks(Hl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Hl.SCRIPT_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess)throw new Error("No process initialized")
;return pd.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),this._state=Nl.STARTED,
this._systemProcess.resume(),this._observer.hasCallbacks(Hl.SCRIPT_RESUMED)&&this._observer.triggerEvent(
Hl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Hl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Hl.SCRIPT_CHANGED,
this),this}stop(){if(this._state!==Nl.STARTED)throw new Error(`${this._stepName}#${this._name} was not started`);if(
!this._systemProcess)throw new Error("No process initialized");return pd.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Nl.CANCELLED,this._systemProcess.stop(),
this._observer.hasCallbacks(Hl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(Hl.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(Hl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Hl.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(Hl.SCRIPT_STARTED,e)}onPaused(e){return this.on(Hl.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
Hl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Hl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(Hl.SCRIPT_FAILED,e)
}onFinished(e){return this.on(Hl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Hl.SCRIPT_CHANGED,e)}getErrorString(){
return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),pd.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=Nl.FINISHED,this._observer.hasCallbacks(
Hl.SCRIPT_FINISHED)&&this._observer.triggerEvent(Hl.SCRIPT_FINISHED,this)):(this._state=Nl.FAILED,
this._observer.hasCallbacks(Hl.SCRIPT_FAILED)&&this._observer.triggerEvent(Hl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(Hl.SCRIPT_CHANGED)&&this._observer.triggerEvent(Hl.SCRIPT_CHANGED,this)}}u(fd,"Event",Hl),u(
fd,"State",Nl);class gd extends fd{static parseControllerModel(e){if(nt(e))return e}static isControllerModel(e){
return nt(e)}static createController(e,t){return new gd(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){
super(e,ml.SCRIPT,"ScriptController","command",t,r,n,i)}}(pu=Bl=Bl||{}).MKDIR="mkdir",pu.READ="read",
pu.READ_OR_CREATE="read/create",pu.WRITE="write";const Td=Oo(gu,["name","file","target","content","output","default"]),
Sd=gc.createLogger("FileController");class Ad extends ld{static parseControllerModel(e){if(it(e))return e}
static isControllerModel(e){return it(e)}static createController(e,t){return new Ad(e,t.name,t,t.file,t.output)}
constructor(e,t,r,n,i=void 0){super(e,ml.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(!function(){switch(e){case Bl.MKDIR:case Bl.READ:case Bl.READ_OR_CREATE:
case Bl.WRITE:return 1}}())throw Sd.debug("run: action = ",e),new TypeError(`[file#${this.getName(
)}] failed to compile the action property: ${qc.toString(e)}`);if(!it(t))throw Sd.debug("run: input = ",t),
new TypeError(`[file#${this.getName()}] failed to compile the input property: ${qc.toString(t)}`)
;let i=null==t?void 0:t.target;if(!f(i))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${qc.toString(i)}`);if(e===Bl.MKDIR)return void 0===i?(
i=n.createTemporaryFile(),n.createDirectory(i),Sd.info(`Created temporary directory: ${i}`)):(n.createDirectory(i),
Sd.info(`Created directory: ${i}`)),i;if(e===Bl.READ){if(void 0===i)throw new TypeError(`[file#${this.getName(
)}] No file to read defined`);return n.readFile(i)}if(e===Bl.READ_OR_CREATE){if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);if(n.pathExists(i))return n.readFile(i);{
let e=null==t?void 0:t.default;return p(e)||(e=JSON.stringify(e,null,2)),n.writeFile(i,e),e}}if(e!==Bl.WRITE
)throw Sd.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);{if(void 0===i)throw new TypeError(
`[file#${this.getName()}] No file to read defined`);let e=null==t?void 0:t.content;return p(e)||(e=JSON.stringify(e,null
,2)),n.writeFile(i,e),i}}}const Nd=Oo(gu,["name","variable","set"]);(Jl=Jl||{}).SET="set",xl=Jl
;const md=gc.createLogger("VariableController");class yd extends ld{static parseControllerModel(e){if(ot(e))return e}
static isControllerModel(e){return ot(e)}static createController(e,t){return new yd(e,t.name,t.set,xl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Jl.SET)throw md.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${qc.toString(e)}`);if(e!==xl.SET)throw md.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!X(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${qc.toString(t)}`);return t}}const wd=Oo(gu,["name","git","url",
"target","message","cwd"]);(pu=vu={}).CLONE="clone",pu.COMMIT="commit",pu.ADD="add",Wl=vu;class Rd extends fd{
static parseControllerModel(e){if(st(e))return e}static isControllerModel(e){return st(e)}static createController(e,t){
var r,n,i;if(t.git===Wl.CLONE)return r=t.target,n=t.url,new Rd(e,t.name,"git",["clone",n,r],{GIT_TERMINAL_PROMPT:"0",
GIT_ASKPASS:"/bin/echo"});if(t.git===Wl.ADD)return i=null==t?void 0:t.target,new Rd(e,t.name,"git",["add",i],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"});if(t.git!==Wl.COMMIT)throw new TypeError(
`Unknown git action: ${t.git}`);return i=null!==(i=null==t?void 0:t.message)&&void 0!==i?i:"Pipeline commit",new Rd(e,
t.name,"git",["commit","-m",i],{GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"})}constructor(e,t,r,n=[],i={}){super(e,
ml.GIT,"GitController","git",t,r,n,i)}}const Cd=Oo(gu,["name","assert","equals","output"]);(Vl=Vl||{}).EQUALS="equals",
ql=Vl;const bd=gc.createLogger("AssertController");class Id extends ld{static parseControllerModel(e){if(at(e))return e}
static isControllerModel(e){return at(e)}static createController(e,t){return new Id(e,t.name,t,ql.EQUALS,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`AssertController#${t}`,`assert#${t}`,t,r,n,i)}run(e,t){if(
e!==Vl.EQUALS)throw bd.debug("run: action = ",e),new TypeError(`[assert#${this.getName(
)}] failed to compile the action property: ${qc.toString(e)}`);if(e!==ql.EQUALS)throw bd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!at(t))throw new TypeError(`[assert#${this.getName(
)}] failed to compile the input property as variable: ${qc.toString(t)}`);if((e=null==t?void 0:t.assert)!==(
t=null==t?void 0:t.equals))throw new TypeError(`[assert#${this.getName()}] Values do not match: ${qc.toString(e
)} vs ${qc.toString(t)}`);return e}}const Dd=Oo(gu,["name","concat","output"]);(Kl=Kl||{}).CONCAT="concat",zl=Kl
;const Od=gc.createLogger("ConcatController");class Ld extends ld{static parseControllerModel(e){if(lt(e))return e}
static isControllerModel(e){return lt(e)}static createController(e,t){return new Ld(e,t.name,t,zl.CONCAT,t.output)}
constructor(e,t,r,n=void 0,i=void 0){super(e,ml.VARIABLE,`ConcatController#${t}`,`concat#${t}`,t,r,n,i)}run(e,t){if(
e!==Kl.CONCAT)throw Od.debug("run: action = ",e),new TypeError(`[concat#${this.getName(
)}] failed to compile the action property: ${qc.toString(e)}`);if(e!==zl.CONCAT)throw Od.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);{if(!lt(t))throw new TypeError(`[concat#${this.getName(
)}] failed to compile the input property as variable: ${qc.toString(t)}`);const r=null==t?void 0:t.concat;return d(r,Q
)?Oo([],...r):d(r,Y)?os(r,(e,t)=>D(D({},e),t),{}):c(r)?r.join(""):[r]}}}gc.createLogger("waitHttpResource"),
gc.createLogger("waitLocalResource");const Pd=gc.createLogger("waitMatrixResource"),Ud=gc.createLogger("main")
;gc.setLogLevel(tc),async function(n=[]){var i,o,s;let a;try{if(class{static registerControllers(){
Vc.registerController(Ld),Vc.registerController(Id),Vc.registerController(yd),Vc.registerController(Rd),
Vc.registerController(Ad),Vc.registerController(dd),Vc.registerController(Ed),Vc.registerController(gd)}
}.registerControllers(),Ud.debug(`Loglevel ${gc.getLogLevelString()}`),i=hc,n.shift(),!n.shift())return console.log(B(i)
),fl.ARGUMENT_PARSE_ERROR;if(0===n.length)return console.log(B(i)),fl.ARGUMENT_PARSE_ERROR;let t=!1,r=!0;do{if(
o=n.shift(),r){let e=!1;switch(function(){switch(o){case"-h":case"--help":case 0:return 0;case"-v":case"--version":
case 1:return 1;case"--":case 2:return 2;case"-w":case"--wait":case 3:return 3}}()){case 0:return console.log(B(i)),
fl.OK;case 1:return console.log(function(e){const t=Ws([sc?"LOCAL":"",ac?"HTTP":"",lc?"MATRIX":"",cc?"TEST":"",
dc?"DEV":""],e=>!!e);return`${e} v${nc} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${nc}'
  BUILD_NODE_ENV              = '${ic}'
  BUILD_DATE                  = '${oc}'
  BUILD_WITH_LOCAL_RESOURCES  = '${sc}'
  BUILD_WITH_HTTP_RESOURCES   = '${ac}'
  BUILD_WITH_MATRIX_RESOURCES = '${lc}'
`}(i)),fl.OK;case 3:t=!0,e=!0;break;case 2:r=!1,e=!0}if(!r||e)continue}if(void 0===(s=Ac.parseRunnerResource(o))
)return Ud.error(`Unsupported argument: ${o}`),console.log(B(i)),fl.UNKNOWN_ARGUMENT;a=new sd;let e=await Qe(a,s);if(
t&&e===fl.NO_WORK_AVAILABLE&&(await async function(e){switch(e.type){case _l.HTTP:
return ac?fl.UNIMPLEMENTED_FEATURE:fl.UNBUILD_FEATURE;case _l.LOCAL:
return sc?fl.UNIMPLEMENTED_FEATURE:fl.UNBUILD_FEATURE;case _l.MATRIX:return lc?async function(t){var r,n,i;try{if(
Pd.debug("waitMatrixResource: ",t),j(r=await async function(e,t){if(k(t))return new Zc(e,void 0,void 0,t.access_token)
;if(F(t)){const r=new Zc(e);return r.login(t.username,t.password)}return fl.UNKNOWN_AUTHENTICATION_TYPE}(
`https://${t.homeserver}`,t.authentication)))return r;if(j(n=await async function(e){let t=e.getUserId();return t||(
t=await e.whoami(),t)?(Pd.info(`Agent user ID: ${t}`),t):(Pd.error("Could not detect agent user ID"),fl.UNKNOWN_AGENT_ID
)}(r)))return n;let e=await ct(r,i=await async function(e){const t=new td(e,bl.FI_NOR_AGENT_DTO);return t.getAll()}(r))
;if(e===fl.OK)return fl.OK;do{try{await async function(s,a){return new Promise((i,t)=>{let o;try{o=s.on(Ll.EVENT,
function(e,t){var r=null==t?void 0:t.type,n=null==t?void 0:t.room_id;Pd.debug("waitForEvents: Event: ",r,n,t),
r&&a.includes(r)&&(o&&(o(),o=void 0),s.stop(),i())}),s.start()}catch(e){o&&(o(),o=void 0),s.stop(),t(e)}})}(r,[
bl.M_ROOM_CREATE,bl.M_ROOM_JOIN_RULES,bl.M_ROOM_MEMBER])}catch(e){Pd.error("Error while waiting: ",e),await new Promise(
(e,t)=>{try{setTimeout(e,15e3)}catch(e){t(e)}})}}while(e=await ct(r,i),e===fl.NO_WORK_AVAILABLE);return e}catch(e){
return Pd.error("Error: ",e),fl.MATRIX_RESOURCE_FAILED}}(e):fl.UNBUILD_FEATURE;default:return fl.UNKNOWN_RESOURCE_TYPE}
}((a,s)),e=await Qe(a,s)),e!==fl.OK)return e===fl.UNKNOWN_RESOURCE_TYPE?(Ud.error(`Error NorPP${e}: ${H(e
)}: Resource type was unknown: ${s.type}`),console.log(B(i)),fl.UNKNOWN_RESOURCE_TYPE):(j(e)?Ud.error(
`Error EX-${e}: ${H(e)}: for ${U(s.type)} resource ${o}`):Ud.error(`Error: Exit status ${e}: for ${U(s.type
)} resource ${o}`),e)}while(1<=n.length);return fl.OK}catch(e){return Ud.error("Fatal error: ",e),fl.FATAL_ERROR
}finally{a&&a.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)}
);
