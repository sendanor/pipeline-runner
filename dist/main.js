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
);++r<n;)t=e[r],this.set(t[0],t[1])}function s(e){e=this.__data__=new er(e),this.size=e.size}function a(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new tr;++t<r;)this.add(e[t])}function u(n,i){function o(){var e=arguments,
t=i?i.apply(this,e):e[0],r=o.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),o.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=i&&"function"!=typeof i)throw new TypeError(xn);return o.cache=new(u.Cache||Bn),o}
function v(e){return void 0===e}function c(e){return _r(e)}function d(e,t=void 0,r=void 0,n=void 0){if(!_r(e))return!1
;var i=null!==(i=null==e?void 0:e.length)&&void 0!==i?i:0;return!(void 0!==r&&i<r)&&!(void 0!==n&&n<i)&&(void 0===t||S(e
,t))}function h(e){return v(e)||Ha(e)}function p(e){return ka(e)}function f(e){return v(e)||p(e)}function _(e){
return!!e&&c(e)&&S(e,p)}function E(e){return xa(e)}function g(e){return v(e)||xa(e)}function T(e,t){return Yi(e,t)}
function S(e,t){return io(e,t)}function A(e,t){return mt(e)&&S(nl(e),t)}function N(e,t=p,r=void 0){return!(
void 0!==r&&!A(e,r))&&(t=void 0!==t?t:p,mt(e)&&S(P(e),t))}function m(e){return!!mt(e)&&!(e instanceof Date)&&!wt(e)&&!c(
e)&&N(e,p,void 0)}function y(e,t=p,r=void 0){return!!mt(e)&&!(e instanceof Date)&&!wt(e)&&!c(e)&&N(e,t,r)}function R(e,
t=void 0,r=void 0,n=void 0,i=void 0){if(t=void 0===t?p:t,!mt(e))throw new TypeError("value was not object");if(
e instanceof Date)throw new TypeError("value was Date");if(wt(e))throw new TypeError("value was Function");if(c(e)
)throw new TypeError("value was array");!function(e,t=void 0,r=void 0,n=void 0,i=void 0){const o=void 0===t?p:t;if(
void 0===r||A(e,e=>r(e)))throw e=zo(P(e),e=>!o(e)),n?new TypeError(`Property "${e}": key was not correct: ${n(e)}`
):new TypeError(`Property "${e}": key was not correct: ${JSON.stringify(e,null,2)}`);var s=nl(e),n=qo(s,e=>!r(e)),t=P(e
)[n],n=s[n];throw i?new TypeError(`Property "${t}": value not correct: ${i(n)}`):new TypeError(
`Property "${t}": value not correct: ${JSON.stringify(n,null,2)}`)}(e,t,r,n,i)}function w(e,t=void 0,r=void 0,n=void 0,
i=void 0){try{return R(e,t,r,n,i),"No errors detected"}catch(e){return null!==(i=null==e?void 0:e.message
)&&void 0!==i?i:`${e}`}}function C(...e){return t=>T(e,e=>e(t))}function b(e){return mt(e)}function I(e,t){return b(e
)&&0===(r=t,Hs(P(e),e=>!r.includes(e)).length);var r}function D(e){if(void 0!==e&&""!==e)return Oa(e)?e:["true","t","on"
,"1","enabled"].includes(`${e}`.toLowerCase())}function L(e){if(void 0!==e&&""!==e)return`${e}`}function P(e,t=p){if(c(e
)){var r=ji(e,(e,t)=>t);return Hs(r,e=>t(e))}return b(e)?(e=Reflect.ownKeys(e),Hs(e,e=>t(e))):[]}function U(e){switch(e
){case ll.HTTP:return"http";case ll.LOCAL:return"local";case ll.MATRIX:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function $(e){return m(e)&&function(){switch(null==e?void 0:e.type){
case cl.NONE:case cl.BASIC_AUTH:case cl.BEARER_AUTH:return 1;default:return}}()}function F(e){return m(e)&&I(e,["type",
"username","password"])&&(null==e?void 0:e.type)===dl.BASIC_AUTH&&p(null==e?void 0:e.username)&&p(
null==e?void 0:e.password)}function k(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(F(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return k(r,n)}return k(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:dl.BASIC_AUTH,username:r,password:n
}}function M(e){return m(e)&&I(e,["type","access_token"])&&(null==e?void 0:e.type)===dl.BEARER_AUTH&&p(
null==e?void 0:e.access_token)}function G(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(M(e))return e
;const i=(e=`${e}`).indexOf(":");if(0<=i){const r=i.substr(0,i),n=i.substr(i+1);return G(r,n)}return{
type:dl.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:dl.BEARER_AUTH,access_token:n}}function j(e){if(Ha(e)&&!(e<0||255<e)){if(
hl.FATAL_SIGNAL_RANGE_START<=e&&e<=hl.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case hl.OK:case hl.GENERAL_ERRORS:
case hl.MISUSE_OF_SHELL_BUILTINS:case hl.ARGUMENT_PARSE_ERROR:case hl.UNKNOWN_ARGUMENT:case hl.UNKNOWN_RESOURCE_TYPE:
case hl.UNKNOWN_AUTHENTICATION_TYPE:case hl.RESOURCE_LOAD_FAILED:case hl.RESOURCE_MODEL_INVALID:
case hl.LOCAL_RESOURCE_FAILED:case hl.HTTP_RESOURCE_FAILED:case hl.MATRIX_RESOURCE_FAILED:case hl.UNIMPLEMENTED_FEATURE:
case hl.UNBUILD_FEATURE:case hl.FATAL_ERROR:case hl.USAGE:case hl.DATAERR:case hl.NOINPUT:case hl.NOUSER:case hl.NOHOST:
case hl.UNAVAILABLE:case hl.SOFTWARE:case hl.OSERR:case hl.OSFILE:case hl.CANTCREAT:case hl.IOERR:case hl.TEMPFAIL:
case hl.PROTOCOL:case hl.NOPERM:case hl.CONFIG:case hl.COMMAND_INVOKED_CANNOT_EXECUTE:case hl.COMMAND_NOT_FOUND:
case hl.INVALID_ARGUMENT_TO_EXIT:case hl.FATAL_SIGNAL_RANGE_START:case hl.FATAL_SIGNAL_RANGE_END:
case hl.EXIT_STATUS_OUT_OF_RANGE:case hl.UNKNOWN_AGENT_ID:case hl.WORK_CANCELLED:case hl.CONFLICT:return 1;default:
return}}}function H(e){if(hl.FATAL_SIGNAL_RANGE_START<=e&&e<=hl.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-hl.FATAL_SIGNAL_RANGE_START}`;switch(e){case hl.OK:return"OK";case hl.GENERAL_ERRORS:
return"GENERAL_ERRORS";case hl.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case hl.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case hl.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case hl.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case hl.UNKNOWN_AUTHENTICATION_TYPE:return"UNKNOWN_AUTHENTICATION_TYPE"
;case hl.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case hl.RESOURCE_MODEL_INVALID:return"RESOURCE_MODEL_INVALID"
;case hl.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case hl.HTTP_RESOURCE_FAILED:return"HTTP_RESOURCE_FAILED"
;case hl.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED";case hl.UNIMPLEMENTED_FEATURE:
return"UNIMPLEMENTED_FEATURE";case hl.UNBUILD_FEATURE:return"UNBUILD_FEATURE";case hl.FATAL_ERROR:return"FATAL_ERROR"
;case hl.USAGE:return"USAGE";case hl.DATAERR:return"DATAERR";case hl.NOINPUT:return"NOINPUT";case hl.NOUSER:
return"NOUSER";case hl.NOHOST:return"NOHOST";case hl.UNAVAILABLE:return"UNAVAILABLE";case hl.SOFTWARE:return"SOFTWARE"
;case hl.OSERR:return"OSERR";case hl.OSFILE:return"OSFILE";case hl.CANTCREAT:return"CANTCREAT";case hl.IOERR:
return"IOERR";case hl.TEMPFAIL:return"TEMPFAIL";case hl.PROTOCOL:return"PROTOCOL";case hl.NOPERM:return"NOPERM"
;case hl.CONFIG:return"CONFIG";case hl.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE"
;case hl.COMMAND_NOT_FOUND:return"COMMAND_NOT_FOUND";case hl.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case hl.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case hl.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case hl.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"
;case hl.UNKNOWN_AGENT_ID:return"UNKNOWN_AGENT_ID";case hl.WORK_CANCELLED:return"WORK_CANCELLED";case hl.CONFLICT:
return"CONFLICT"}throw new TypeError(`Unsupported RunnerExitStatus value: ${e}`)}function B(e){return rc?`USAGE: ${e} [OPT(s)] ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.


...where ARG is one of:${ec?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${tc?`

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
`:""}${Zu?`

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
`}function x(e){if(Ha(e))switch(e){case El.OPTIONS:return"options";case El.GET:return"get";case El.POST:return"post"
;case El.PUT:return"put";case El.DELETE:return"delete";case El.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function J(e){return!(!ka(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function W(e){return p(e)||Ha(e)||Oa(e)||La(e)
}function V(e){return W(e)||d(e,C(V,v))||K(e)}function K(e){return m(e)&&N(e,p,C(V,v))}function q(e){return v(e)||K(e)}
function z(e){return W(e)||Y(e)||X(e)}function X(e){return m(e)&&N(e,p,C(z,v))}function Y(e){return d(e,C(z,v))}
function Q(e){return m(r=e)&&I(r,["type","name","displayName","default"])&&(null==r?void 0:r.type)===cu.BOOLEAN&&p(
null==r?void 0:r.name)&&f(null==r?void 0:r.displayName)&&(v(r=null==r?void 0:r.default)||Oa(r))||m(r=e)&&I(r,["type",
"name","displayName","default"])&&(null==r?void 0:r.type)===cu.INTEGER&&p(null==r?void 0:r.name)&&f(
null==r?void 0:r.displayName)&&h(null==r?void 0:r.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(
null==t?void 0:t.type)===cu.NUMBER&&p(null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&h(
null==t?void 0:t.default)||m(t=e)&&I(t,["type","name","displayName","default"])&&(null==t?void 0:t.type)===cu.STRING&&p(
null==t?void 0:t.name)&&f(null==t?void 0:t.displayName)&&f(null==t?void 0:t.default)||m(e)&&I(e,["type","name",
"displayName","default"])&&(null==e?void 0:e.type)===cu.JSON&&p(null==e?void 0:e.name)&&f(null==e?void 0:e.displayName
)&&(v(null==e?void 0:e.default)||z(null==e?void 0:e.default));var t,r}function Z(e){return m(e)&&p(null==e?void 0:e.name
)&&(v(null==e?void 0:e.parameters)||d(null==e?void 0:e.parameters,Q))&&(v(null==e?void 0:e.variables)||K(
null==e?void 0:e.variables))}function ee(e){return!(!Z(e)||void 0===Cc.findController(e)&&!(Z(e)&&m(e)&&J(
null==e?void 0:e.name)))}function te(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.steps,ee,1)&&I(e,bc)}
function re(e){if(te(e))return e}function ne(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.jobs,te,1)&&I(
e,Ic)}function ie(e){return Z(e)&&J(null==e?void 0:e.name)&&d(null==e?void 0:e.stages,ne,1)&&I(e,Dc)}function oe(e){
var t;return null!==(t=null!==(t=null!==(t=function(e){if(ie(e))return e}(e))&&void 0!==t?t:function(e){if(ne(e)
)return e}(e))&&void 0!==t?t:re(e))&&void 0!==t?t:(t=e,null!==(e=Cc.parseControllerModel(t))&&void 0!==e?e:re(t))}
function se(e){return b(e)&&wt(null==e?void 0:e.getName)&&wt(null==e?void 0:e.isRunning)&&wt(null==e?void 0:e.isStarted
)&&wt(null==e?void 0:e.isPaused)&&wt(null==e?void 0:e.isCancelled)&&wt(null==e?void 0:e.isFinished)&&wt(
null==e?void 0:e.isFailed)&&wt(null==e?void 0:e.isSuccessful)&&wt(null==e?void 0:e.start)&&wt(null==e?void 0:e.pause
)&&wt(null==e?void 0:e.resume)&&wt(null==e?void 0:e.stop)&&wt(null==e?void 0:e.destroy)&&wt(null==e?void 0:e.toString
)&&wt(null==e?void 0:e.toJSON)&&wt(null==e?void 0:e.onStarted)&&wt(null==e?void 0:e.onPaused)&&wt(
null==e?void 0:e.onResumed)&&wt(null==e?void 0:e.onCancelled)&&wt(null==e?void 0:e.onFailed)&&wt(
null==e?void 0:e.onFinished)&&wt(null==e?void 0:e.onChanged)}function ae(e){return e instanceof Pc}function le(e){
return e instanceof $c}function ue(e){return p(e)&&!!e&&"!"===e[0]}function ce(e){try{return function(e){if(!p(e)
)throw new TypeError(`value was not string: "${e}"`);if(!e)throw new TypeError(`value was empty: "${e}"`);if("!"!==e[0]
)throw new TypeError(`value did not start with !: "${e}"`)}(e),"No errors detected"}catch(e){return e.message}}
function de(e){return m(e)&&I(e,["m.heroes","m.joined_member_count","m.invited_member_count"])&&(v(t=e["m.heroes"])||_(t
))&&g(e["m.joined_member_count"])&&g(e["m.invited_member_count"]);var t}function he(e){return p(e)&&!!e&&"@"===e[0]}
function _e(e){return m(e)&&I(e,["content","type","sender"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&(v(
null==e?void 0:e.sender)||he(null==e?void 0:e.sender))}function Ee(e){return m(e)&&I(e,["age","prev_content",
"prev_sender","redacted_because","replaces_state","transaction_id"])&&E(null==e?void 0:e.age)&&q(
null==e?void 0:e.prev_content)&&(v(null==e?void 0:e.prev_sender)||he(null==e?void 0:e.prev_sender))&&(v(
null==e?void 0:e.redacted_because)||_e(null==e?void 0:e.redacted_because))&&f(null==e?void 0:e.replaces_state)&&f(
null==e?void 0:e.transaction_id)}function ve(e){try{return function(e){if(!m(e))throw new TypeError(
"Value was not regular object");if(!I(e,["age","prev_content","prev_sender","redacted_because","replaces_state",
"transaction_id"]))throw new TypeError(`Value had extra properties: All keys: ${P(e)}`);if(!E(null==e?void 0:e.age)
)throw new TypeError(`Property "age" was not valid: ${null==e?void 0:e.age}`);if(!q(null==e?void 0:e.prev_content)
)throw new TypeError(`Property "prev_content" was not valid: ${null==e?void 0:e.prev_content}`);if(!v(
null==e?void 0:e.prev_sender)&&!he(null==e?void 0:e.prev_sender))throw new TypeError(
`Property "prev_sender" was not valid: ${null==e?void 0:e.prev_sender}`);if(!v(null==e?void 0:e.redacted_because)&&!_e(
null==e?void 0:e.redacted_because))throw new TypeError(
`Property "redacted_because" was not valid: ${null==e?void 0:e.redacted_because}`);if(!f(null==e?void 0:e.replaces_state
))throw new TypeError(`Property "replaces_state" was not valid: ${null==e?void 0:e.replaces_state}`);if(!f(
null==e?void 0:e.transaction_id))throw new TypeError(
`Property "transaction_id" was not valid: ${null==e?void 0:e.transaction_id}`)}(e),"No errors detected"}catch(e){
return e.message}}function pe(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&p(
null==e?void 0:e.sender)&&E(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(
null==e?void 0:e.unsigned))&&(v(null==e?void 0:e.prev_content)||K(null==e?void 0:e.prev_content))&&p(
null==e?void 0:e.state_key)}function fe(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned",
"prev_content","state_key"]))throw new TypeError(`value had extra keys: all keys: ${P(e)}`);if(!K(
null==e?void 0:e.content))throw new TypeError(`Property "content" not JsonObject: ${null==e?void 0:e.content}`);if(!p(
null==e?void 0:e.type))throw new TypeError(`Property "type" not valid: ${null==e?void 0:e.type}`);if(!p(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" not valid: ${null==e?void 0:e.event_id}`);if(!p(
null==e?void 0:e.sender))throw new TypeError(`Property "sender" not valid: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" not valid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" not valid: ${null==e?void 0:e.unsigned}`);if(!v(
null==e?void 0:e.prev_content)&&!K(null==e?void 0:e.prev_content))throw new TypeError(
`Property "prev_content" not valid: ${null==e?void 0:e.prev_content}`);if(!p(null==e?void 0:e.state_key)
)throw new TypeError(`Property "state_key" not valid: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function ge(e){return Co([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function Te(e){
return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,pe)}function Se(e){try{return function(e){if(!m(e)
)throw new TypeError("value was not object");if(!I(e,["events"]))throw new TypeError("value had extra keys");if(!d(
null==e?void 0:e.events,pe))throw e=zo(null==e?void 0:e.events,e=>!pe(e)),new TypeError(
`Not array of MatrixSyncResponseStateEventDTO: ${fe(e)}`)}(e),"No errors detected"}catch(e){return e.message}}
function Ae(e){return m(e)&&I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"])&&K(
null==e?void 0:e.content)&&p(null==e?void 0:e.type)&&p(null==e?void 0:e.event_id)&&he(null==e?void 0:e.sender)&&E(
null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned)||Ee(null==e?void 0:e.unsigned))&&f(
null==e?void 0:e.state_key)}function Ne(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["content","type","event_id","sender","origin_server_ts","unsigned","state_key"]
))throw new TypeError(`Had extra properties: All keys: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" was not correct: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" was not correct: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.event_id))throw new TypeError(
`Property "event_id" was not correct: ${null==e?void 0:e.event_id}`);if(!he(null==e?void 0:e.sender)
)throw new TypeError(`Property "sender" was not correct: ${null==e?void 0:e.sender}`);if(!E(
null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" was not correct: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned
)&&!Ee(null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" was not correct: ${ve(
null==e?void 0:e.unsigned)}`);if(!f(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" was not correct: ${null==e?void 0:e.state_key}`)}(e),"No errors detected"}catch(e){
return e.message}}function me(e){return Co([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function ye(e){
return m(e)&&I(e,["events","limited","prev_batch"])&&d(null==e?void 0:e.events,Ae)&&Oa(null==e?void 0:e.limited)&&p(
null==e?void 0:e.prev_batch)}function Re(e){try{return function(e){if(!m(e))throw new TypeError(`value not object: ${e}`
);if(!I(e,["events","limited","prev_batch"]))throw new TypeError(`Extra properties in value: all keys: ${P(e)}`);if(!d(
null==e?void 0:e.events,Ae)){var t=zo(null==e?void 0:e.events,e=>!Ae(e));throw new TypeError(
`Property "events" item was not correct: ${Ne(t)}`)}if(!Oa(null==e?void 0:e.limited))throw new TypeError(
`Property "limited" was not boolean: ${null==e?void 0:e.limited}`);if(!p(null==e?void 0:e.prev_batch)
)throw new TypeError(`Property "prev_batch" was not string: ${null==e?void 0:e.prev_batch}`)}(e),"No errors detected"
}catch(e){return e.message}}function we(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function Ce(e){
return Co([],null!==(e=null==e?void 0:e.events)&&void 0!==e?e:[])}function be(e){return m(e)&&I(e,["events"])&&d(
null==e?void 0:e.events,_e)}function Ie(e){return m(e)&&I(e,["highlight_count","notification_count"])&&E(
null==e?void 0:e.highlight_count)&&E(null==e?void 0:e.notification_count)}function De(e){return m(e)&&I(e,["summary",
"state","timeline","ephemeral","account_data","unread_notifications","org.matrix.msc2654.unread_count"])&&(v(
null==e?void 0:e.summary)||de(null==e?void 0:e.summary))&&(v(null==e?void 0:e.state)||Te(null==e?void 0:e.state))&&(v(
null==e?void 0:e.timeline)||ye(null==e?void 0:e.timeline))&&(v(null==e?void 0:e.ephemeral)||we(
null==e?void 0:e.ephemeral))&&(v(null==e?void 0:e.account_data)||be(null==e?void 0:e.account_data))&&(v(
null==e?void 0:e.unread_notifications)||Ie(null==e?void 0:e.unread_notifications))&&h(
e["org.matrix.msc2654.unread_count"])}function Oe(e){try{return function(e){if(!m(e))throw new TypeError(
`value was not object: ${e}`);if(!I(e,["summary","state","timeline","ephemeral","account_data","unread_notifications",
"org.matrix.msc2654.unread_count"]))throw new TypeError(`value had extra keys: ${e}`);if(!v(null==e?void 0:e.summary
)&&!de(null==e?void 0:e.summary))throw new TypeError(`Property "summary" was invalid: ${e}`);if(!v(
null==e?void 0:e.state)&&!Te(null==e?void 0:e.state))throw new TypeError(`Property "state" was invalid: ${Se(e)}`);if(
!v(null==e?void 0:e.timeline)&&!ye(null==e?void 0:e.timeline))throw new TypeError(
`Property "timeline" was invalid: ${Re(null==e?void 0:e.timeline)}`);if(!v(null==e?void 0:e.ephemeral)&&!we(
null==e?void 0:e.ephemeral))throw new TypeError(`Property "ephemeral" was invalid: ${e}`);if(!v(
null==e?void 0:e.account_data)&&!be(null==e?void 0:e.account_data))throw new TypeError(
`Property "account_data" was invalid: ${e}`);if(!v(null==e?void 0:e.unread_notifications)&&!Ie(
null==e?void 0:e.unread_notifications))throw new TypeError(`Property "unread_notifications" was invalid: ${e}`);if(!h(
e["org.matrix.msc2654.unread_count"]))throw new TypeError(`Property "org.matrix.msc2654.unread_count" was invalid: ${e}`
)}(e),"No errors detected"}catch(e){return e.message}}function Le(e){return m(e)&&I(e,["content","state_key","type",
"sender","origin_server_ts","unsigned","event_id"])&&K(null==e?void 0:e.content)&&p(null==e?void 0:e.state_key)&&p(
null==e?void 0:e.type)&&p(null==e?void 0:e.sender)&&h(null==e?void 0:e.origin_server_ts)&&(v(null==e?void 0:e.unsigned
)||Ee(null==e?void 0:e.unsigned))&&f(null==e?void 0:e.event_id)}function Pe(e){try{return function(e){if(!m(e)
)throw new TypeError(`invalid: ${e}`);if(!I(e,["content","state_key","type","sender","origin_server_ts","unsigned",
"event_id"]))throw new TypeError(`one key is extra: ${P(e)}`);if(!K(null==e?void 0:e.content))throw new TypeError(
`Property "content" invalid: ${null==e?void 0:e.content}`);if(!p(null==e?void 0:e.state_key))throw new TypeError(
`Property "state_key" invalid: ${null==e?void 0:e.state_key}`);if(!p(null==e?void 0:e.type))throw new TypeError(
`Property "type" invalid: ${null==e?void 0:e.type}`);if(!p(null==e?void 0:e.sender))throw new TypeError(
`Property "sender" invalid: ${null==e?void 0:e.sender}`);if(!h(null==e?void 0:e.origin_server_ts))throw new TypeError(
`Property "origin_server_ts" invalid: ${null==e?void 0:e.origin_server_ts}`);if(!v(null==e?void 0:e.unsigned)&&!Ee(
null==e?void 0:e.unsigned))throw new TypeError(`Property "unsigned" invalid: ${null==e?void 0:e.unsigned}`);if(!f(
null==e?void 0:e.event_id))throw new TypeError(`Property "event_id" invalid: ${null==e?void 0:e.event_id}`)}(e),
"No errors detected"}catch(e){return e.message}}function Ue(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
Le)}function $e(e){try{return function(e){if(!m(e))throw new TypeError(`value invalid: ${e}`);if(!I(e,["events"])
)throw new TypeError(`value has extra keys: all keys: ${P(e)}`);if(!d(null==e?void 0:e.events,Le))throw e=zo(
null==e?void 0:e.events,e=>!Le(e)),new TypeError(`Property "events" had invalid item: ${Pe(e)}`)}(e),
"No errors detected"}catch(e){return e.message}}function Fe(e){return m(e)&&I(e,["invite_state"])&&Ue(
null==e?void 0:e.invite_state)}function ke(e){try{return function(e){if(!m(e))throw new TypeError(
`Value not object: ${e}`);if(!I(e,["invite_state"]))throw new TypeError(`Object has extra keys: all keys: ${P(e)}`);if(
!Ue(null==e?void 0:e.invite_state))throw new TypeError(`Property "invite_state" invalid: ${$e(
null==e?void 0:e.invite_state)}`)}(e),"No errors detected"}catch(e){return e.message}}function Me(e){return m(e)&&I(e,[
"state","timeline","account_data"])&&Te(null==e?void 0:e.state)&&ye(null==e?void 0:e.timeline)&&be(
null==e?void 0:e.account_data)}function Ge(e){return m(e)&&I(e,["join","invite","leave"])&&(v(null==e?void 0:e.join)||y(
null==e?void 0:e.join,ue,De))&&(v(null==e?void 0:e.invite)||y(null==e?void 0:e.invite,ue,Fe))&&(v(null==e?void 0:e.leave
)||y(null==e?void 0:e.leave,ue,Me))}function je(e){try{return function(e){if(!m(e))throw new TypeError(
"value was not regular object");if(!I(e,["join","invite","leave"]))throw new TypeError("value had extra properties");if(
!v(null==e?void 0:e.join)&&!y(null==e?void 0:e.join,ue,De))throw new TypeError(`Property "join" was invalid: ${w(
null==e?void 0:e.join,ue,De,ce,Oe)}`);if(!v(null==e?void 0:e.invite)&&!y(null==e?void 0:e.invite,ue,Fe)
)throw new TypeError(`Property "invite" was invalid: ${w(null==e?void 0:e.invite,ue,Fe,ce,ke)}`);if(!v(
null==e?void 0:e.leave)&&!y(null==e?void 0:e.leave,ue,Me))throw new TypeError('Property "leave" was invalid')}(e),
"No errors detected"}catch(e){return e.message}}function He(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,
_e)}function Be(e){return m(e)&&I(e,["events"])&&d(null==e?void 0:e.events,_e)}function xe(e){return m(e)&&I(e,[
"changed","left"])&&d(null==e?void 0:e.changed,he)&&d(null==e?void 0:e.left,he)}function Je(e){return y(e,p,E)}
function We(e){try{return function(e){if(!m(e))throw new TypeError("value not RegularObject");if(!I(e,["next_batch",
"rooms","presence","account_data","to_device","device_lists","device_one_time_keys_count"]))throw new TypeError(
"value has additional keys");if(!p(null==e?void 0:e.next_batch))throw new TypeError(
'Property "next_batch" was not string');if(!v(null==e?void 0:e.rooms)&&!Ge(null==e?void 0:e.rooms))throw new TypeError(
`Property "rooms" was invalid: ${je(null==e?void 0:e.rooms)}`);if(!v(null==e?void 0:e.presence)&&!He(
null==e?void 0:e.presence))throw new TypeError('Property "presence" was invalid');if(!v(null==e?void 0:e.account_data
)&&!be(null==e?void 0:e.account_data))throw new TypeError('Property "account_data" was invalid');if(!v(
null==e?void 0:e.to_device)&&!Be(null==e?void 0:e.to_device))throw new TypeError('Property "to_device" was invalid');if(
!v(null==e?void 0:e.device_lists)&&!xe(null==e?void 0:e.device_lists))throw new TypeError(
'Property "device_lists" was invalid');if(!v(null==e?void 0:e.device_one_time_keys_count)&&!Je(
null==e?void 0:e.device_one_time_keys_count))throw new TypeError('Property "device_one_time_keys_count" was invalid')}(e
),"No errors detected"}catch(e){return e.message}}function Ve(e){return m(e)&&I(e,["display_name","avatar_url"])&&p(
null==e?void 0:e.display_name)&&(p(null==e?void 0:e.avatar_url)||La(null==e?void 0:e.avatar_url))}function Ke(e){
return m(e)&&I(e,["errcode","error"])&&function(){switch(null==e?void 0:e.errcode){case wl.M_USER_IN_USE:
case wl.M_INVALID_USERNAME:case wl.M_EXCLUSIVE:case wl.M_FORBIDDEN:return 1;default:return}}()&&p(null==e?void 0:e.error
)}function qe(e){return encodeURIComponent(e)}async function ze(e,t,r,n,i){n=O(O({},n.data),{},{state:i.getStateDTO()}),
await t.update(r,n),await e.setRoomStateByType(r,yl.FI_NOR_PIPELINE_STATE,"",i.toJSON())}async function Xe(e,t){switch(
t.type){case ul.HTTP:return ec?async function(t,r){var n,i,o,s,a,l,u;try{const c={};if(r.authentication&&(M(
r.authentication)&&(c.Authorization=`Bearer ${r.authentication.access_token}`),F(r.authentication)&&(
n=r.authentication.username,i=r.authentication.password,c.Authorization=`Basic ${new Buffer(n+":"+i).toString("base64"
)}`)),void 0===(o=await wc.getJson(r.url,c)))return xc.error(`Failed to load URL "${r.url}": `,o),
_l.RESOURCE_LOAD_FAILED;if(void 0===(s=oe(o)))return xc.error(`Model from URL "${r.url}" was not valid: `,o),
_l.RESOURCE_MODEL_INVALID;a=null==s?void 0:s.parameters,l=null==s?void 0:s.variables,u=new Bc(t,a,l,lc,uc)
;let e=Gc.createController(s,u);return xc.info(`Running ${e.getName()} from ${r.url}`),
await Gc.startAndWaitUntilFinished(e),xc.info(`Successfully finished ${e.getName()} from ${r.url}`),_l.OK}catch(e){
return xc.error("Error: ",e),_l.HTTP_RESOURCE_FAILED}}(e,t):_l.UNBUILD_FEATURE;case ul.LOCAL:return Zu?async function(t,
r){var n,i,o,s,a,l;try{if(n=await async function(e){const t=(i=e,o={encoding:"utf8"},await new Promise((r,n)=>{try{
Nu.readFile(i,o,(e,t)=>{e?n(e):r(t)})}catch(e){n(e)}}));var i,o;return p(t)?t:t.toString("utf8")}(r.path),void 0===(
o=oe(i=JSON.parse(n))))return Jc.warn("Model was not valid: ",i),_l.RESOURCE_MODEL_INVALID;s=null==o?void 0:o.parameters
,a=null==o?void 0:o.variables,l=new Bc(t,s,a,lc,uc);let e=Gc.createController(o,l);return Jc.info(`Running ${e.getName(
)} from ${r.path}`),await Gc.startAndWaitUntilFinished(e),Jc.info(`Successfully finished ${e.getName()} from ${r.path}`)
,_l.OK}catch(e){return Jc.error("Error: ",e),_l.LOCAL_RESOURCE_FAILED}}(e,t):_l.UNBUILD_FEATURE;case ul.MATRIX:
return tc?async function(i,o){var s,a,l,u,c,d,h,_,E,v,p,f,g,T,S,A,N,m,y,R,w;try{zc.debug("runMatrixResource: ",o),
g=o.authentication;let e;if(M(g))e=new Vc(`https://${o.homeserver}`,void 0,void 0,g.access_token);else{if(!F(g)
)return _l.UNKNOWN_AUTHENTICATION_TYPE;e=new Vc(`https://${o.homeserver}`),e=await e.login(g.username,g.password)}
let t=e.getUserId();if(!t&&(t=await e.whoami(),!t))return zc.error("Could not detect agent user ID"),_l.UNKNOWN_AGENT_ID
;zc.info(`Agent user ID: ${t}`);const C=new qc(e,yl.FI_NOR_AGENT_DTO);if(0===(w=await C.getAll()).length
)return zc.debug("Detected no pools available."),_l.NO_WORK_AVAILABLE;T=(1===w.length?(zc.debug(
"Detected single pool available. Picking it."),w[0]):(zc.debug(
`Detected ${w.length} pools available. Picking one by random.`),w[Math.floor(Math.random()*w.length)])).id,zc.info(
`Pool ID: ${T}`);const b=new qc(e,yl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,yl.FI_NOR_PIPELINE_STATE,"",[T])
;S=await b.getAll(),zc.debug("runList = ",S);let r;if(0===S.length)return zc.debug("Detected no work available."),
_l.NO_WORK_AVAILABLE;r=1===S.length?(zc.debug("Detected single work available. Picking it."),S[0]):(zc.debug(
`Detected ${S.length} work items available. Picking one by random.`),S[Math.floor(Math.random()*S.length)]);const I=r.id
;if(void 0!==(null===(s=r)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.agentPoolId)&&void 0!==(null===(l=r
)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.agentAccountId)&&void 0!==(null===(c=r)||void 0===c||null===(
d=c.data)||void 0===d?void 0:d.state))return zc.warn(`Work ID was already running: ${I}`),zc.debug(
`We'll stop listening the work item: ${I}`),await e.leaveRoom(I),zc.debug(`We'll forget the work item now: ${I}`),
await e.forgetRoom(I),_l.CONFLICT;if(zc.info(`Work ID: ${I}`),A=O(O({},r.data),{},{agentPoolId:T,agentAccountId:t}),
await b.update(r.id,A),r=await b.findById(r.id),!r)return zc.warn(
"The work item disappeared while we were selecting it."),_l.WORK_CANCELLED;if(I!==r.id)return zc.error(
`The work item ID conflict: ${I} !== ${r.id}`),_l.CONFLICT;if(T!==(null===(h=r)||void 0===h||null===(_=h.data
)||void 0===_?void 0:_.agentPoolId)||t!==(null===(E=r)||void 0===E||null===(v=E.data
)||void 0===v?void 0:v.agentAccountId))return zc.error(""),_l.CONFLICT;if(zc.debug(
"Work item secured to us! We can start the job."),void 0===(N=oe(null===(p=r)||void 0===p||null===(f=p.data
)||void 0===f?void 0:f.model)))return zc.warn("Work item did not contain correct pipeline model: ",r),
_l.RESOURCE_MODEL_INVALID;m=null==N?void 0:N.parameters,y=null==N?void 0:N.variables,R=new Bc(i,m,y,lc,uc)
;let n=Gc.createController(N,R);await ze(e,b,I,r,n);const D=n.onChanged(()=>{ze(e,b,I,r,n).catch(e=>{zc.error(
"Failed to save controller state: ",e)})});try{await Gc.startAndWaitUntilFinished(n)}finally{D(),await ze(e,b,I,r,n)}
return zc.debug(`We'll stop listening the work item now: ${I}`),await e.leaveRoom(I),zc.debug(
`We'll forget the work item now: ${I}`),await e.forgetRoom(I),_l.OK}catch(e){return zc.error("Error: ",e),
_l.MATRIX_RESOURCE_FAILED}}(e,t):_l.UNBUILD_FEATURE;default:return _l.UNKNOWN_RESOURCE_TYPE}}function Ye(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.json)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,rd)}
function Qe(e){return d(e,p)}function Ze(e){return d(e,Qe)}function et(e){return Z(e)&&J(null==e?void 0:e.name)&&z(
null==e?void 0:e.csv)&&f(null==e?void 0:e.action)&&f(null==e?void 0:e.output)&&I(e,od)}function tt(e){return Z(e)&&J(
null==e?void 0:e.name)&&p(null==e?void 0:e.command)&&(r=p,(i=n=void 0)===(t=null==e?void 0:e.args)||d(t,r,n,i))&&(i=n=p,
void 0===(r=null==e?void 0:e.env)||y(r,n,i))&&I(e,ld);var t,r,n,i}function rt(e){return Z(e)&&J(null==e?void 0:e.name
)&&z(null==e?void 0:e.file)&&f(null==e?void 0:e.target)&&f(null==e?void 0:e.output)&&I(e,hd)}function nt(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.set)&&f(null==e?void 0:e.variable)&&I(e,vd)}function it(e){return Z(e
)&&J(null==e?void 0:e.name)&&z(null==e?void 0:e.git)&&f(null==e?void 0:e.url)&&f(null==e?void 0:e.target)&&I(e,gd)}
async function ot(e,t){t=t.id,Sd.info(`Pool ID: ${t}`);const r=new qc(e,yl.FI_NOR_PIPELINE_RUN_DTO,"",void 0,
yl.FI_NOR_PIPELINE_STATE,"",[t]);return t=await r.getAll(),Sd.debug("runList = ",t),0!==t.length?(Sd.debug(
"Detected work available."),_l.OK):(Sd.debug("No work available."),_l.NO_WORK_AVAILABLE)}async function st(r,e){
return 0===e.length?(Sd.debug("checkIfAnyPoolHasWork: Detected no pools available."),_l.NO_WORK_AVAILABLE
):1===e.length?(Sd.debug("checkIfAnyPoolHasWork: Detected single pool available. Checking it."),ot(r,e[0])):(Sd.debug(
`checkIfAnyPoolHasWork: Detected ${e.length} pools available.`),ts(e,async(e,t)=>(e=await e,Sd.debug(
`checkIfAnyPoolHasWork: Result: ${e}`),e===_l.OK?_l.OK:(Sd.debug(`checkIfAnyPoolHasWork: Checking pool ${t.id}`),ot(r,t)
)),Promise.resolve(_l.NO_WORK_AVAILABLE)))}var at,lt,ut,ct,dt,ht,_t,Et,vt,pt,ft,gt,Tt,St,At,Nt,mt,yt,Rt,wt,Ct,bt,It,Dt,
Ot,Lt,Pt,Ut,$t,Ft,kt,Mt,Gt,jt,Ht,Bt,xt,Jt,Wt,Vt,Kt,qt,zt,Xt,Yt,Qt,Zt,er,tr,rr,nr,ir,or,sr,ar,lr,ur,cr,dr,hr,_r,Er,vr,pr,
fr,gr,Tr,Sr,Ar,Nr,mr,yr,Rr,wr,Cr,br,Ir,Dr,Or,Lr,Pr,Ur,$r,Fr,kr,Mr,Gr,jr,Hr,Br,xr,Jr,Wr,Vr,Kr,qr,zr,Xr,Yr,Qr,Zr,en,tn,rn,
nn,on,sn,an,ln,un,cn,dn,hn,_n,En,vn,pn,fn,gn,Tn,Sn,An,Nn,mn,yn,Rn,wn,Cn,bn,In,Dn,On,Ln,Pn,Un,$n,Fn,kn,Mn,Gn,jn,Hn,Bn,xn,
Jn,Wn,Vn,Kn,qn,zn,Xn,Yn,Qn,Zn,ei,ti,ri,ni,ii,oi,si,ai,li,ui,ci,di,hi,_i,Ei,vi,pi,fi,gi,Ti,Si,Ai,Ni,mi,yi,Ri,wi,Ci,bi,Ii,
Di,Oi,Li,Pi,Ui,$i,Fi,ki,Mi,Gi,ji,Hi,Bi,xi,Ji,Wi,Vi,Ki,qi,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,io,oo,so,ao,lo,uo,co,ho,_o,Eo,vo,po,
fo,go,To,So,Ao,No,mo,yo,Ro,wo,Co,bo,Io,Do,Oo,Lo,Po,Uo,$o,Fo,ko,Mo,Go,jo,Ho,Bo,xo,Jo,Wo,Vo,Ko,qo,zo,Xo,Yo,Qo,Zo,es,ts,rs,
ns,is,os,ss,as,ls,us,cs,ds,hs,_s,Es,vs,ps,fs,gs,Ts,Ss,As,Ns,ms,ys,Rs,ws,Cs,bs,Is,Ds,Os,Ls,Ps,Us,$s,Fs,ks,Ms,Gs,js,Hs,Bs,
xs,Js,Ws,Vs,Ks,qs,zs,Xs,Ys,Qs,Zs,ea,ta,ra,na,ia,oa,sa,aa,la,ua,ca,da,ha,_a,Ea,va,pa,fa,ga,Ta,Sa,Aa,Na,ma,ya,Ra,wa,Ca,ba,
Ia,Da,Oa,La,Pa,Ua,$a,Fa,ka,Ma,Ga,ja,Ha,Ba,xa,Ja,Wa,Va,Ka,qa,za,Xa,Ya,Qa,Za,el,tl,rl,nl,il,ol,sl,al,ll,ul,cl,dl,hl,_l,El,
vl,pl,fl,gl,Tl,Sl,Al,Nl,ml,yl,Rl,wl,Cl,bl,Il,Dl,Ol,Ll,Pl,Ul,$l,Fl,kl,Ml,Gl,jl,Hl,Bl,xl,Jl,Wl,Vl,Kl,ql,zl,Xl,Yl,Ql,Zl,eu,
tu,ru,nu,iu,ou,su,au,lu,uu,cu,du,hu,_u,Eu,vu,pu,fu,gu,Tu,Su,Au,Nu=require("fs"),mu=require("querystring"),yu=require(
"url"),Ru=require("path"),wu=require("child_process"),Cu=require("crypto"),bu=e(Nu),Iu=t(mu),Du=e(yu),Ou=e(Ru),Lu=e(Cu),
Pu="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Uu=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},$u=function(){
this.__data__=[],this.size=0},Fu=function(e,t){return e===t||e!=e&&t!=t},ku=Fu,Mu=function(e,t){for(var r=e.length;r--;
)if(ku(e[r][0],t))return r;return-1},Gu=Mu,ju=Array.prototype,Hu=ju.splice,Bu=Mu,xu=Mu,Ju=Mu,Wu=$u,Vu=function(e){
var t=this.__data__;return!((e=Gu(t,e))<0||(e==t.length-1?t.pop():Hu.call(t,e,1),--this.size,0))},Ku=function(e){
var t=this.__data__;return(e=Bu(t,e))<0?void 0:t[e][1]},qu=function(e){return-1<xu(this.__data__,e)},zu=function(e,t){
var r=this.__data__,n=Ju(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Wu,
r.prototype.delete=Vu,r.prototype.get=Ku,r.prototype.has=qu,r.prototype.set=zu,vt=Vl=r,Kl=function(){
this.__data__=new vt,this.size=0},ea=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},
Jl=function(e){return this.__data__.get(e)},Wl=function(e){return this.__data__.has(e)},
Yl=ql="object"==typeof Pu&&Pu&&Pu.Object===Object&&Pu,Zl="object"==typeof self&&self&&self.Object===Object&&self,br=Ql=(
ls=Yl||Zl||Function("return this")()).Symbol,Xs=Object.prototype,pt=Xs.hasOwnProperty,ft=Xs.toString,
gt=br?br.toStringTag:void 0,Ir=Object.prototype,Tt=Ir.toString,St=function(e){var t,r,n=pt.call(e,gt),i=e[gt];try{t=!(
e[gt]=void 0)}catch(e){}return r=ft.call(e),t&&(n?e[gt]=i:delete e[gt]),r},At=function(e){return Tt.call(e)},Nt=(Zs=Ql
)?Zs.toStringTag:void 0,yt=eu=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(
Nt&&Nt in Object(e)?St:At)(e)},Rt=mt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},
wt=function(e){return!!Rt(e)&&("[object Function]"==(e=yt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},Dr=ls["__core-js_shared__"],
xl=/[^.]+$/.exec((rr=Dr)&&rr.keys&&rr.keys.IE_PROTO||""),Ct=xl?"Symbol(src)_1."+xl:"",nr=Function.prototype,
bt=nr.toString,It=wt,Dt=function(e){return!!Ct&&Ct in e},Ot=mt,Lt=en=function(e){if(null!=e){try{return bt.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},Or=/[\\^$.*+?()[\]{}|]/g,Pt=/^\[object .+?Constructor\]$/,
ta=Function.prototype,mu=Object.prototype,yu=ta.toString,Ru=mu.hasOwnProperty,Ut=RegExp("^"+yu.call(Ru).replace(Or,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$t=function(e){return!(!Ot(e
)||Dt(e))&&(It(e)?Ut:Pt).test(Lt(e))},Ft=function(e,t){return null==e?void 0:e[t]},ju=(Cu=function(e,t){return t=Ft(e,t)
,$t(t)?t:void 0})(ls,"Map"),Mu=Cu(Object,"create"),Mt=kt=$u=Mu,gu=Object.prototype,Gt=gu.hasOwnProperty,jt=$u,
Tu=Object.prototype,Ht=Tu.hasOwnProperty,Bt=$u,Su=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},Au=function(e){var t,r=this.__data__;return Mt?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:Gt.call(r,e)?r[e]:void 0},Wu=function(e){var t=this.__data__;return jt?void 0!==t[e]:Ht.call(t,e)},
Vu=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Bt&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=kt?kt(null):{},this.size=0},i.prototype.delete=Su,i.prototype.get=Au,
i.prototype.has=Wu,i.prototype.set=Vu,xt=i,Jt=Vl,Wt=ju,Ku=function(){this.size=0,this.__data__={hash:new xt,map:new(
Wt||Jt),string:new xt}},Vt=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Xt=zt=qt=Kt=function(e,t){
return e=e.__data__,Vt(t)?e["string"==typeof t?"string":"hash"]:e.map},qu=function(e){return e=Kt(this,e).delete(e),
this.size-=e?1:0,e},zu=function(e){return qt(this,e).get(e)},Pu=function(e){return zt(this,e).has(e)},ql=function(e,t){
var r=Xt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=Ku,o.prototype.delete=qu,
o.prototype.get=zu,o.prototype.has=Pu,o.prototype.set=ql,Qt=ju,Zt=Zl=o,er=Yt=Vl,ss=ea,Xs=Jl,br=Wl,Ir=function(e,t){var r
,n=this.__data__;if(n instanceof Yt){if(r=n.__data__,!Qt||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new Zt(r)}return n.set(e,t),this.size=n.size,this},s.prototype.clear=Kl,s.prototype.delete=ss,
s.prototype.get=Xs,s.prototype.has=br,s.prototype.set=Ir,Zs=s,tr=Zl,Dr=function(e){return this.__data__.has(e)},
a.prototype.add=a.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
a.prototype.has=Dr,ir=rr=a,or=xl=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1
},sr=nr=function(e,t){return e.has(t)},ta=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,_=1&r,E=e.length,v=t.length;if(
E!=v&&!(_&&E<v))return!1;if(s=o.get(e),v=o.get(t),s&&v)return s==t&&v==e;for(a=-1,l=!0,u=2&r?new ir:void 0,o.set(e,t),
o.set(t,e);++a<E;){if(c=e[a],d=t[a],void 0!==(h=n?_?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)){if(h)continue;l=!1;break}if(u){if(
!or(t,function(e,t){if(!sr(u,t)&&(c===e||i(c,e,r,n,o)))return u.push(t)})){l=!1;break}}else if(c!==d&&!i(c,d,r,n,o)){
l=!1;break}}return o.delete(e),o.delete(t),l},mu=ls.Uint8Array,ar=mu,lr=Fu,ur=ta,cr=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},dr=yu=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e
){r[++t]=e}),r},Or=(Ru=Ql)?Ru.prototype:void 0,hr=Or?Or.valueOf:void 0,Mu=function(e,t,r,n,i,o,s){var a,l;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new ar(e),new ar(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return lr(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":l=cr;case"[object Set]":return l=l||dr,!!(e.size==t.size||1&n)&&((a=s.get(e))?a==t:(n|=2,s.set(e,t),
l=ur(l(e),l(t),n,i,o,s),s.delete(e),l));case"[object Symbol]":if(hr)return hr.call(e)==hr.call(t)}return!1},gu=function(
e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Tu=Array.isArray,Er=gu,vr=_r=Tu,$u=function(e,t,r){
return t=t(e),vr(e)?t:Er(t,r(e))},pr=Su=function(e,t){for(var r,n=-1,i=null==e?0:e.length,o=0,s=[];++n<i;)t(r=e[n],n,e
)&&(s[o++]=r);return s},Au=Object.prototype,fr=Au.propertyIsEnumerable,Wu=(gr=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),pr(gr(t),function(e){return fr.call(t,e)}))}:function(){return[]},Vu=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Tr=eu,Ku=function(e){return Sr(e)&&"[object Arguments]"==Tr(e)},
Ar=Sr=qu=function(e){return null!=e&&"object"==typeof e},zu=Object.prototype,Nr=zu.hasOwnProperty,
mr=zu.propertyIsEnumerable,Pu=Ku(function(){return arguments}())?Ku:function(e){return Ar(e)&&Nr.call(e,"callee"
)&&!mr.call(e,"callee")},ql=ls,Vl=function(){return!1},ql=(ql=(Kl=(Wl=(Kl=(Wl=(Jl=ea={exports:{}}).exports
)&&!Wl.nodeType&&Wl)&&Jl&&!Jl.nodeType&&Jl)&&Wl.exports===Kl)?ql.Buffer:void 0)?ql.isBuffer:void 0,Jl.exports=Vl=ql||Vl,
yr=/^(?:0|[1-9]\d*)$/,ss=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&yr.test(e))&&-1<e&&e%1==0&&e<t},Rr=eu,wr=Xs=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Cr=qu,br="[object Arguments]",Ir="[object Array]",
Dr="[object Boolean]",mu="[object Date]",Ru="[object Error]",Or="[object Function]",Tu="[object Map]",
zu="[object Object]",Ku="[object RegExp]",Wl="[object Set]",Kl="[object String]",ql="[object WeakMap]",
Jl="[object ArrayBuffer]",Vl="[object DataView]",(Lr={}
)["[object Float32Array]"]=Lr["[object Float64Array]"]=Lr["[object Int8Array]"]=Lr["[object Int16Array]"]=Lr["[object Int32Array]"]=Lr["[object Uint8Array]"]=Lr["[object Uint8ClampedArray]"]=Lr["[object Uint16Array]"]=Lr["[object Uint32Array]"]=!0
,
Lr[br]=Lr[Ir]=Lr[Jl]=Lr[Dr]=Lr[Vl]=Lr[mu]=Lr[Ru]=Lr[Or]=Lr[Tu]=Lr["[object Number]"]=Lr[zu]=Lr[Ku]=Lr[Wl]=Lr[Kl]=Lr[ql]=!1
,Au=function(e){return Cr(e)&&wr(e.length)&&!!Lr[Rr(e)]},zu=function(t){return function(e){return t(e)}},Ku=Yl,ql=(ql=(
Kl=Wl={exports:{}}).exports)&&!ql.nodeType&&ql,ql=(zl=ql&&Kl&&!Kl.nodeType&&Kl)&&zl.exports===ql,Xl=ql&&Ku.process,
Ku=function(){try{return zl&&zl.require&&zl.require("util").types||Xl&&Xl.binding&&Xl.binding("util")}catch(e){}}(),
Kl.exports=Ku,Yl=Au,Ku=(Kl=(ql=Wl.exports)&&ql.isTypedArray)?zu(Kl):Yl,Pr=Vu,Ur=Pu,$r=_r,Fr=ea.exports,kr=ss,Mr=Au=Ku,
ql=Object.prototype,Gr=ql.hasOwnProperty,Kl=function(e,t){var r,n=$r(e),i=!n&&Ur(e),o=!n&&!i&&Fr(e),s=!n&&!i&&!o&&Mr(e),
a=n||i||o||s,l=a?Pr(e.length,String):[],u=l.length;for(r in e)!t&&!Gr.call(e,r)||a&&("length"==r||o&&(
"offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||kr(r,u))||l.push(r);return l},
jr=Object.prototype,Yl=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jr)},
pu=Object.keys,fu=Object,Hr=Yl,Br=function(e){return pu(fu(e))},Ku=Object.prototype,xr=Ku.hasOwnProperty,Jr=wt,Wr=Xs,
Vr=Kl,Kr=function(e){var t,r;if(!Hr(e))return Br(e);for(r in t=[],Object(e))xr.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},qr=ql=function(e){return null!=e&&Wr(e.length)&&!Jr(e)},zr=$u,Xr=Wu,Yr=Yl=function(e){return(qr(e)?Vr:Kr)(e)}
,Qr=function(e){return zr(e,Yr,Xr)},Vu=Object.prototype,Zr=Vu.hasOwnProperty,Ku=function(e,t,r,n,i,o){var s,a,l,u,c,d,h,
_,E,v,p,f=1&r,g=Qr(e),T=g.length;if(T!=Qr(t).length&&!f)return!1;for(s=T;s--;)if(a=g[s],!(f?a in t:Zr.call(t,a))
)return!1;if(v=o.get(e),p=o.get(t),v&&p)return v==t&&p==e;for(l=!0,o.set(e,t),o.set(t,e),u=f;++s<T;){if(c=e[a=g[s]],
d=t[a],!(void 0===(h=n?f?n(d,c,a,t,e,o):n(c,d,a,e,t,o):h)?c===d||i(c,d,r,n,o):h)){l=!1;break}u=u||"constructor"==a}
return l&&!u&&(_=e.constructor)!=(E=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(l=!1),o.delete(e),o.delete(t),l},Kl=Cu(ls,
"DataView"),$u=ju,Wu=Cu(ls,"Promise"),ju=Vu=Cu(ls,"Set"),ls=Cu(ls,"WeakMap"),tn=eu,nn="[object Map]",
on="[object Promise]",sn="[object Set]",an="[object WeakMap]",ln="[object DataView]",un=(rn=en)(en=Kl),cn=rn($u),dn=rn(
Wu),hn=rn(ju),_n=rn(ls),Kl=tn,(en&&Kl(new en(new ArrayBuffer(1)))!=ln||$u&&Kl(new $u)!=nn||Wu&&Kl(Wu.resolve()
)!=on||ju&&Kl(new ju)!=sn||ls&&Kl(new ls)!=an)&&(Kl=function(e){var t=tn(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?rn(e):"")switch(e){case un:return ln;case cn:return nn;case dn:return on
;case hn:return sn;case _n:return an}return t}),En=Zs,vn=ta,pn=Mu,fn=Ku,gn=Kl,Tn=_r,Sn=ea.exports,An=Au,
Nn="[object Arguments]",mn="[object Array]",yn="[object Object]",ju=Object.prototype,Rn=ju.hasOwnProperty,wn=function(e,
t,r,n,i,o){var s,a,l=Tn(e),u=Tn(t),c=l?mn:gn(e),d=u?mn:gn(t),h=(c=c==Nn?yn:c)==yn,u=(d=d==Nn?yn:d)==yn;if((d=c==d)&&Sn(e
)){if(!Sn(t))return!1;h=!(l=!0)}return d&&!h?(o=o||new En,l||An(e)?vn(e,t,r,n,i,o):pn(e,t,c,r,n,i,o)):1&r||(
s=h&&Rn.call(e,"__wrapped__"),a=u&&Rn.call(t,"__wrapped__"),!s&&!a)?d&&(o=o||new En,fn(e,t,r,n,i,o)):i(s?e.value():e,
a?t.value():t,r,n,o=o||new En)},bn=Zs,In=ls=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Cn(t)&&!Cn(r
)?t!=t&&r!=r:wn(t,r,n,i,e,o))},Dn=mt,On=ta=function(e){return e==e&&!Dn(e)},Ln=Yl,Pn=function(e,t,r,n){var i,o,s,a,l,u,
c=r.length,d=c,h=!n;if(null==e)return!d;for(e=Object(e);c--;)if(i=r[c],h&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1;for(
;++c<d;)if(s=e[o=(i=r[c])[0]],a=i[1],h&&i[2]){if(void 0===s&&!(o in e))return!1}else if(l=new bn,!(void 0===(u=n?n(s,a,o
,e,t,l):u)?In(a,s,3,n,l):u))return!1;return!0},Un=function(e){for(var t,r,n=Ln(e),i=n.length;i--;)r=e[t=n[i]],n[i]=[t,r,
On(r)];return n},$n=Mu=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},
Ku=function(t){var r=Un(t);return 1==r.length&&r[0][2]?$n(r[0][0],r[0][1]):function(e){return e===t||Pn(e,t,r)}},Fn=eu,
kn=Cn=qu,Mn=_r,Gn=Kl=function(e){return"symbol"==typeof e||kn(e)&&"[object Symbol]"==Fn(e)},
jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hn=/^\w*$/,ea=function(e,t){if(Mn(e))return!1;var r=typeof e
;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gn(e))||Hn.test(e)||!jn.test(e)||null!=t&&e in Object(t)},
Bn=Zl,xn="Expected a function",u.Cache=Bn,
Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wn=/\\(\\)?/g,Wu=0
,vu=(Wu=u(Wu=function(e){var i=[];return 46===e.charCodeAt(0)&&i.push(""),e.replace(Jn,function(e,t,r,n){i.push(
r?n.replace(Wn,"$1"):t||e)}),i},function(e){return 500===vu.size&&vu.clear(),e})).cache,Vn=Uu,Zs=(ju=Ql
)?ju.prototype:void 0,zn=Zs?Zs.toString:void 0,Xn=Zl=function e(t){if("string"==typeof t)return t;if(Kn(t))return Vn(t,e
)+"";if(qn(t))return zn?zn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Zn=Wu,ei=ju=function(e){
return null==e?"":Xn(e)},ti=qn=Kl,si=ri=Zs=function(e,t){return Yn(e)?e:Qn(e,t)?[e]:Zn(ei(e))},ai=Pu,ci=Xs,hi=function(e
,t){return null!=e&&t in Object(e)},_i=Au=function(e,t,r){for(var n,i,o=(t=si(t,e)).length,s=!(n=-1);++n<o&&(i=di(t[n]),
s=null!=e&&r(e,i));)e=e[i];return s||++n!=o?s:!!(o=null==e?0:e.length)&&ci(o)&&ui(i,o)&&(li(e)||ai(e))},Ei=ls,
vi=oi=function(e,t,r){return void 0===(t=null==e?void 0:ii(e,t))?r:t},pi=function(e,t){return null!=e&&_i(e,t,hi)},gi=ta
,Ti=Mu,Ai=ii=Xs=function(e,t){for(var r=0,n=(t=ri(t,e)).length;null!=e&&r<n;)e=e[ni(t[r++])];return r&&r==n?e:void 0},
Ni=function(t){return function(e){return null==e?void 0:e[t]}},mi=function(t){return function(e){return Ai(e,t)}},
yi=fi=Qn=ea,Ri=Si=di=ni=ls=function(e){if("string"==typeof e||ti(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
wi=Ku,Ci=function(r,n){return fi(r)&&gi(n)?Ti(Si(r),n):function(e){var t=vi(e,r);return void 0===t&&t===n?pi(e,r):Ei(n,t
,3)}},bi=ta=function(e){return e},Ii=li=Yn=Kn=_r,Di=function(e){return yi(e)?Ni(Ri(e)):mi(e)},Oi=ea=function(e,t,r){for(
var n,i=-1,o=Object(e),s=r(e),a=s.length;a--&&!1!==t(o[n=s[++i]],n,o););return e},Li=Yl,Fi=Uu,Mi=ea=function(e,n){
var i=-1,o=$i(e)?Array(e.length):[];return Ui(e,function(e,t,r){o[++i]=n(e,t,r)}),o},ji=function(e,t){return(Gi(e)?Fi:Mi
)(e,ki(t))},Bi=Fu,xi=$i=Pi=ql,Ji=ui=ss,Wi=mt,Vi=xl,qi=function(e,n){var i;return Hi(e,function(e,t,r){return!(i=n(e,t,r)
)}),!!i},Yi=function(e,t,r){var n=zi(e)?Vi:qi;return r&&Xi(e,t,r)&&(t=void 0),n(e,Ki(t))},Qi=Hi=Ui=xl=Ku=function(e,t){
if(null==e)return e;if(!Pi(e))return e&&Oi(e,t,Li);for(var r=e.length,n=-1,i=Object(e);++n<r&&!1!==t(i[n],n,i););
return e},Zi=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},eo=function(e,n){
var i=!0;return Qi(e,function(e,t,r){return i=!!n(e,t,r)}),i},to=Ki=ki=Mu=function(e){
return"function"==typeof e?e:null==e?bi:"object"==typeof e?Ii(e)?Ci(e[0],e[1]):wi(e):Di(e)},ro=zi=Gi=_r,
no=Xi=Ku=function(e,t,r){if(!Wi(r))return!1;var n=typeof t;return!!("number"==n?xi(r)&&Ji(t,r.length
):"string"==n&&t in r)&&Bi(r[t],e)},io=function(e,t,r){var n=ro(e)?Zi:eo;return r&&no(e,t,r)&&(t=void 0),n(e,to(t))},
oo=Cu,Cu=function(){try{var e=oo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),so=Cu,ao=function(e,t,r){
"__proto__"==t&&so?so(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},lo=Fu,Fu=Object.prototype,
uo=Fu.hasOwnProperty,co=function(e,t,r){var n=e[t];uo.call(e,t)&&lo(n,r)&&(void 0!==r||t in e)||ao(e,t,r)},ho=Zs,_o=ss,
vo=ls,po=function(e,t,r,n){var i,o,s,a,l,u,c;if(!Eo(e))return e;for(i=-1,s=(o=(t=ho(t,e)).length)-1,a=e;null!=a&&++i<o;
){if(u=r,"__proto__"===(l=vo(t[i]))||"constructor"===l||"prototype"===l)return e;i!=s&&(c=a[l],void 0===(u=n?n(c,l,a
):void 0)&&(u=Eo(c)?c:_o(t[i+1])?[]:{})),co(a,l,u),a=a[l]}return e},fo=function(e,t,r){return null==e?e:po(e,t,r)},go=Pu
,So=(Fu=Ql)?Fu.isConcatSpreadable:void 0,No=function(e){return To(e)||go(e)||!!(So&&e&&e[So])},mo=Ao=gu,
yo=Zs=function e(t,r,n,i,o){var s,a=-1,l=t.length;for(n=n||No,o=o||[];++a<l;)s=t[a],0<r&&n(s)?1<r?e(s,r-1,n,i,o):Ao(o,s
):i||(o[o.length]=s);return o},Ro=function(e,t){var r=-1,n=e.length;for(t=t||Array(n);++r<n;)t[r]=e[r];return t},
wo=To=_r,Co=function(){var e,t,r,n=arguments.length;if(!n)return[];for(e=Array(n-1),t=arguments[0],r=n;r--;
)e[r-1]=arguments[r];return mo(wo(t)?Ro(t):[t],yo(e,1))},bo=Mu,Io=ql,Do=Yl,ss=function(o){return function(e,t,r){var n,
i=Object(e);return Io(e)||(n=bo(t),e=Do(e),t=function(e){return n(i[e],e,i)}),-1<(r=o(e,t,r))?i[n?e[r]:r]:void 0}},
ls=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},Oo=/\s/,Lo=function(
e){for(var t=e.length;t--&&Oo.test(e.charAt(t)););return t},Po=/^\s+/,Uo=Pu=function(e){return e&&e.slice(0,Lo(e)+1
).replace(Po,"")},$o=Eo=mt,Fo=Kl,ko=/^[-+]0x[0-9a-f]+$/i,Mo=/^0b[01]+$/i,Go=/^0o[0-7]+$/i,jo=parseInt,Ho=function(e){
var t;return"number"==typeof e?e:Fo(e)?NaN:($o(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=$o(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=Uo(e),(t=Mo.test(e))||Go.test(e)?jo(e.slice(2),t?2:8):ko.test(e)?NaN:+e))},
Bo=17976931348623157e292,xo=function(e){return e?(e=Ho(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*Bo:0===e?e:0},Jo=ls,Wo=Mu
,Vo=Ql=function(e){var t=xo(e),e=t%1;return t==t?e?t-e:t:0},Ko=Math.max,Fu=ss(qo=function(e,t,r){
var n=null==e?0:e.length;return n?((r=null==r?0:Vo(r))<0&&(r=Ko(n+r,0)),Jo(e,Wo(t),r)):-1}),zo=Fu,Xo=function(e,t,r,n){
var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r},Yo=xl,Qo=Mu,Zo=function(e,n,i,o,t){
return t(e,function(e,t,r){i=o?(o=!1,e):n(i,e,t,r)}),i},es=_r,ts=function(e,t,r){var n=es(e)?Xo:Zo,i=arguments.length<3
;return n(e,Qo(t),r,i,Yo)},gu=function(e,t,r){var n,i=-1,o=e.length;for((r=o<r?o:r)<0&&(r+=o),o=r<(t=t<0?o<-t?0:o+t:t
)?0:r-t>>>0,t>>>=0,n=Array(o);++i<o;)n[i]=e[i+t];return n},rs=ls,ns=function(e){return e!=e},is=function(e,t,r){for(
var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1},os=ql=function(e,t,r){return t==t?is(e,t,r):rs(e,ns,r)},
ss=function(e,t){return!(null==e||!e.length)&&-1<os(e,t,0)},Fu=function(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;
)if(r(t,e[n]))return!0;return!1},ls=function(){},ls=(as=Vu)&&1/yu(new as([,-0]))[1]==1/0?function(e){return new as(e)
}:ls,us=rr,cs=ss,ds=Fu,hs=nr,_s=ls,Es=yu,vs=function(e,t,r){var n,i,o,s,a=-1,l=cs,u=e.length,c=!0,d=[],h=d;if(r)c=!1,
l=ds;else if(200<=u){if(n=t?null:_s(e))return Es(n);c=!1,l=hs,h=new us}else h=t?[]:d;e:for(;++a<u;)if(i=e[a],o=t?t(i):i,
i=r||0!==i?i:0,c&&o==o){for(s=h.length;s--;)if(h[s]===o)continue e;t&&h.push(o),d.push(i)}else l(h,o,r)||(h!==d&&h.push(
o),d.push(i));return d},ps=function(e){return e&&e.length?vs(e):[]},fs=Kl,gs=function(e,t){var r,n,i,o,s,a,l,u;if(e!==t
){if(r=void 0!==e,n=null===e,i=e==e,o=fs(e),s=void 0!==t,a=null===t,l=t==t,u=fs(t),
!a&&!u&&!o&&t<e||o&&s&&l&&!a&&!u||n&&s&&l||!r&&l||!i)return 1;if(!n&&!o&&!u&&e<t||u&&r&&i&&!n&&!o||a&&r&&i||!s&&i||!l
)return-1}return 0},Ts=Uu,Ss=Xs,As=Mu,Ns=ea,ms=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}
,ys=zu,Rs=function(e,t,r){for(var n,i=-1,o=e.criteria,s=t.criteria,a=o.length,l=r.length;++i<a;)if(n=gs(o[i],s[i])
)return l<=i?n:n*("desc"==r[i]?-1:1);return e.index-t.index},ws=ta,Cs=_r,Kl=function(e,n,r){var i;return n=n.length?Ts(n
,function(t){return Cs(t)?function(e){return Ss(e,1===t.length?t[0]:t)}:t}):[ws],i=-1,n=Ts(n,ys(As)),e=Ns(e,function(t,e
,r){return{criteria:Ts(n,function(e){return e(t)}),index:++i,value:t}}),ms(e,function(e,t){return Rs(e,t,r)})},
bs=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],
r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},Is=Math.max,Xs=function(o,s,a){return s=Is(
void 0===s?o.length-1:s,0),function(){for(var e,t=arguments,r=-1,n=Is(t.length-s,0),i=Array(n);++r<n;)i[r]=t[s+r];for(
r=-1,e=Array(s+1);++r<s;)e[r]=t[r];return e[s]=a(i),bs(o,this,e)}},Ds=function(e){return function(){return e}},Os=Cu,
Ls=Date.now,hu=Os?function(e,t){return Os(e,"toString",{configurable:!0,enumerable:!1,value:Ds(t),writable:!0})}:ta,
Ps=Zs,Us=Kl,$s=Ku,(ea=function(){var e=Ls(),t=16-e+ +Eu;if(Eu=e,0<t){if(800<=++_u)return arguments[0]}else _u=0
;return hu.apply(void 0,arguments)})(Xs(yu=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&$s(e,t[0],t[1]
)?t=[]:2<r&&$s(t[0],t[1],t[2])&&(t=[t[0]]),Us(e,Ps(t,1),[])},void(Eu=_u=0),ta),yu+""),ks=Su,Ms=function(e,n){var i=[]
;return Fs(e,function(e,t,r){n(e,t,r)&&i.push(e)}),i},Gs=Mu,Hs=function(e,t){return(js(e)?ks:Ms)(e,Gs(t))},Bs=ta,
xs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},Js=Fs=xl,Ws=function(e){
return"function"==typeof e?e:Bs},Vs=js=_r,Ks=function(e,t){return(Vs(e)?xs:Js)(e,Ws(t))},qs=gu,Cu=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:qs(e,t,r)},zs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Xs=function(e){return zs.test(e)}
,Ys=eu,Qs=qu,ea=function(e){return Qs(e)&&"[object RegExp]"==Ys(e)},Su=(Kl=(Zs=Wl.exports)&&Zs.isRegExp)?zu(Kl):ea,
Mu=function(e){return e.split("")},xl="["+(ta="\\ud800-\\udfff")+"]",zu=(gu="[\\ufe0e\\ufe0f]?")+(zu="(?:"+(
Wl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(Zs="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[
Kl="[^"+ta+"]",ea="(?:\\ud83c[\\udde6-\\uddff]){2}",ta="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+gu+zu+")*",
xl="(?:"+[Kl+Wl+"?",Wl,ea,ta,xl].join("|")+")",ra=RegExp(Zs+"(?="+Zs+")|"+xl+zu,"g"),na=Mu,oa=function(e){
return e.match(ra)||[]},la=ia=Xs,ua=Ku,ca=Su,_a=function(e,t,r){return r&&"number"!=typeof r&&ua(e,t,r)&&(t=r=void 0),(
r=void 0===r?4294967295:r>>>0)?(e=ha(e))&&("string"==typeof t||null!=t&&!ca(t))&&!(t=sa(t))&&la(e)?aa(da(e),0,r
):e.split(t,r):[]},va=Ea=ql,pa=sa=Zl,fa=Pu,ga=aa=Cu,Ta=function(e,t){for(var r=e.length;r--&&-1<Ea(t,e[r],0););return r}
,Sa=function(e,t){for(var r=-1,n=e.length;++r<n&&-1<va(t,e[r],0););return r},Aa=da=function(e){return(ia(e)?oa:na)(e)},
Na=ha=ju,ma=function(e,t,r){return(e=Na(e))&&(r||void 0===t)?fa(e):e&&(t=pa(t))?(r=Aa(e),e=Aa(t),t=Sa(r,e),e=Ta(r,e)+1,
ga(r,t,e).join("")):e},Cu=Object.prototype,ya=Cu.hasOwnProperty,Ra=function(e,t){return null!=e&&ya.call(e,t)},wa=Au,
Ca=function(e,t){return null!=e&&wa(e,t,Ra)},Da="[object Boolean]",Oa=function(e){return!0===e||!1===e||Ia(e)&&ba(e)==Da
},La=function(e){return null===e},Ua=_r,Fa="[object String]",ka=function(e){return"string"==typeof e||!Ua(e)&&$a(e)&&Pa(
e)==Fa},Ma=Pa=ba=eu,Ga=$a=Ia=qu,ja="[object Number]",Ha=function(e){return"number"==typeof e||Ga(e)&&Ma(e)==ja},
xa=function(e){return"number"==typeof e&&e==Ba(e)},qa=function(e,t,r){return e=Ka(e),r=null==r?0:Ja(Va(r),0,e.length),
t=Wa(t),e.slice(r,r+t.length)==t},za=Ja=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t))
,e},Xa=Wa=Zl,Ya=Va=Ba=Ql,Qa=Ka=ju,Za=function(e,t,r){var n;return e=Qa(e),t=Xa(t),n=e.length,n=r=void 0===r?n:za(Ya(r),0
,n),0<=(r-=t.length)&&e.slice(r,n)==t},el=Uu,tl=function(t,e){return el(e,function(e){return t[e]})},rl=Yl,nl=function(e
){return null==e?[]:tl(e,rl(e))},eu=Array.prototype,il=eu.join,ol=function(e,t){return null==e?"":il.call(e,t)},(
qu=sl={})[qu.DEBUG=0]="DEBUG",qu[qu.INFO=1]="INFO",qu[qu.WARN=2]="WARN",qu[qu.ERROR=3]="ERROR",qu[qu.NONE=4]="NONE",
al=sl;const Xu=null!==(Zl=L("1.0.4"))&&void 0!==Zl?Zl:"?";ju=null!==(Ql=L(""))&&void 0!==Ql?Ql:"io.nor.fi",Yl=null!==(
Uu=L(""))&&void 0!==Uu?Uu:"nor-pipeline-runner",qu=null!==(eu=L(""))&&void 0!==eu?eu:"",Ql=null!==(Zl=L("")
)&&void 0!==Zl?Zl:"";const Yu=null!==(Uu=L("production"))&&void 0!==Uu?Uu:"development",Qu=null!==(eu=L(
"2021-09-10T00:45:42.601Z"))&&void 0!==eu?eu:"";Uu=null!==(Zl=L(""))&&void 0!==Zl?Zl:"${",Zl=null!==(eu=L("")
)&&void 0!==eu?eu:"}";const Zu=null===(eu=D(""))||void 0===eu||eu,ec=null===(eu=D(""))||void 0===eu||eu,tc=null===(eu=D(
""))||void 0===eu||eu,rc=null===(eu=D(""))||void 0===eu||eu;eu="production"===Yu;const nc="test"===Yu,ic=!eu&&!nc
;qu=null!==(at=function(e){if(e){if(function(){switch(e){case sl.DEBUG:case sl.INFO:case sl.WARN:case sl.ERROR:
case sl.NONE:return 1;default:return}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return sl.DEBUG
;case"INFO":return sl.INFO;case"WARN":case"WARNING":return sl.WARN;case"ERR":case"ERROR":return sl.ERROR;case"FALSE":
case"OFF":case"QUIET":case"SILENT":case"NONE":return sl.NONE;default:return}}}(null!==(at=L(null===(eu=process
)||void 0===eu||null===(at=eu.env)||void 0===at?void 0:at.PIPELINE_LOG_LEVEL))&&void 0!==at?at:L(qu))
)&&void 0!==at?at:al.INFO;const oc=null!==(lt=L(null===(at=process)||void 0===at||null===(lt=at.env
)||void 0===lt?void 0:lt.PIPELINE_SERVER))&&void 0!==lt?lt:Yl,sc=null!==(ut=function(e){if(void 0!==e)return`${e}`}(
null===(Yl=process)||void 0===Yl||null===(ut=Yl.env)||void 0===ut?void 0:ut.PIPELINE_AUTHENTICATION))&&void 0!==ut?ut:Ql
,ac=null!==(ct=L(null===(Ql=process)||void 0===Ql||null===(ct=Ql.env)||void 0===ct?void 0:ct.PIPELINE_SERVER)
)&&void 0!==ct?ct:ju,lc=null!==(dt=L(null===(ju=process)||void 0===ju||null===(dt=ju.env
)||void 0===dt?void 0:dt.PIPELINE_VARIABLE_PREFIX))&&void 0!==dt?dt:Uu,uc=null!==(ht=L(null===(Uu=process
)||void 0===Uu||null===(ht=Uu.env)||void 0===ht?void 0:ht.PIPELINE_VARIABLE_SUFFIX))&&void 0!==ht?ht:Zl;class cc{
constructor(e,t){l(this,"_logger",void 0),l(this,"name",void 0),this.name=e,this._logger=t}debug(...e){
this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class dc{
static setLogLevel(e){this._level=e}static getLogLevel(){return this._level}static getLogLevelString(){return function(e
){switch(e){case sl.DEBUG:return"DEBUG";case sl.INFO:return"INFO";case sl.WARN:return"WARN";case sl.ERROR:return"ERROR"
;case sl.NONE:return"NONE";default:return`Unknown:${e}`}}(this._level)}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=al.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=al.INFO&&this._logger.info(...e)}static warn(...e){
this._level<=al.WARN&&this._logger.warn(...e)}static error(...e){this._level<=al.ERROR&&this._logger.error(...e)}
static createLogger(e){return new cc(e,dc)}}l(dc,"Level",al),l(dc,"_level",al.DEBUG),l(dc,"_logger",console),(Zl=ll={}
)[Zl.HTTP=0]="HTTP",Zl[Zl.LOCAL=1]="LOCAL",Zl[Zl.MATRIX=2]="MATRIX",ul=ll,(Zl=cl={})[Zl.NONE=0]="NONE",
Zl[Zl.BASIC_AUTH=1]="BASIC_AUTH",Zl[Zl.BEARER_AUTH=2]="BEARER_AUTH",dl=cl;class hc{static parseRunnerAuthentication(e,t
){var r;return void 0===t?null!==(r=G(e))&&void 0!==r?r:k(e):null!==(r=G(e,t))&&void 0!==r?r:k(e,t)}}
const _c=dc.createLogger("MatrixRunnerResource");class Ec{static parseRunnerResource(e){var t;return null!==(t=null!==(
t=function(e){var t;if(e)return m(t=e)&&I(t,["type","url","authentication"])&&(null==t?void 0:t.type)===ul.HTTP&&p(
null==t?void 0:t.url)&&(v(null==t?void 0:t.authentication)||$(null==t?void 0:t.authentication))?e:(t=(e=ma(`${e}`)
).toLowerCase(),qa(t,"http:")||qa(t,"https:")?(t=new URL(e),t=null!==(t=hc.parseRunnerAuthentication(decodeURIComponent(
t.username),decodeURIComponent(t.password)))&&void 0!==t?t:hc.parseRunnerAuthentication(sc),{type:ul.HTTP,url:e,auth:t}
):void 0)}(e))&&void 0!==t?t:function(e){var t;if(e)return m(t=e)&&I(t,["type","path"])&&(null==t?void 0:t.type
)===ul.LOCAL&&p(null==t?void 0:t.path)?e:(e=ma(`${e}`),(e=qa(e.toLowerCase(),"file://")?e.substr("file://".length):e
)&&bu.default.existsSync(e)?{type:ul.LOCAL,path:e}:void 0)}(e))&&void 0!==t?t:function(i){var o,s;if(i){if(m(s=i)&&I(s,[
"type","pool","homeserver","authentication"])&&(null==s?void 0:s.type)===ul.MATRIX&&f(null==s?void 0:s.pool)&&p(
null==s?void 0:s.homeserver)&&(v(null==s?void 0:s.authentication)||$(null==s?void 0:s.authentication)))return i;i=ma(
`${i}`),_c.debug(`value: '${i}'`);let e=i.toLowerCase();if(_c.debug(`lowerCaseValue: '${e}'`),"matrix://"===e&&(
i="matrix://io.nor.fi",e="matrix://io.nor.fi"),_c.debug(`lowerCaseValue: '${e}'`),qa(e,"matrix://")){s=new URL(
`https://${i.substr("matrix://".length)}`),_c.debug(`url: '${s}': `,s),o=null!==(o=hc.parseRunnerAuthentication(
decodeURIComponent(s.username),decodeURIComponent(s.password)))&&void 0!==o?o:hc.parseRunnerAuthentication(sc),_c.debug(
"auth: ",o);const e=`${s.host}`;_c.debug(`homeserver: '${e}'`);const a=`${s.pathname}`.split("/");a.shift(),_c.debug(
"paths: ",a);const l=decodeURIComponent(null!==(s=a.shift())&&void 0!==s?s:"");return _c.debug(`roomPath: '${l}'`),
s=l.length?l.indexOf(":"):-1,_c.debug("roomPathIndex: ",s),s=l.length?0<=s?l:`${l}:${e}`:"",_c.debug(`roomId: '${s}'`),
s=0===s.length?void 0:"!"===s[0]||"#"===s[0]?s:`#${s}`,_c.debug(`pool: '${s}'`),{type:ul.MATRIX,homeserver:e,pool:s,
authentication:o}}qa(e,"matrix:")&&(i=i.substr("matrix:".length),e=e.substr("matrix:".length)),i=decodeURIComponent(i),
e=i.toLowerCase();let t=void 0,r=void 0,n=void 0;return qa(e,"!")||qa(e,"#")?(o=i.indexOf(":"))<0?n=`${e}:${ac}`:(n=e,(
o=i.substr(o+1))&&(r=o)):e&&(t=e),t=t||sc,r=r||ac,{type:ul.MATRIX,homeserver:r,pool:n,
authentication:hc.parseRunnerAuthentication(t)}}}(e)}}(Zl=hl={})[Zl.OK=0]="OK",Zl[Zl.GENERAL_ERRORS=1]="GENERAL_ERRORS",
Zl[Zl.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",Zl[Zl.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",
Zl[Zl.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",Zl[Zl.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",
Zl[Zl.UNKNOWN_AUTHENTICATION_TYPE=6]="UNKNOWN_AUTHENTICATION_TYPE",Zl[Zl.RESOURCE_LOAD_FAILED=7]="RESOURCE_LOAD_FAILED",
Zl[Zl.RESOURCE_MODEL_INVALID=8]="RESOURCE_MODEL_INVALID",Zl[Zl.LOCAL_RESOURCE_FAILED=9]="LOCAL_RESOURCE_FAILED",
Zl[Zl.HTTP_RESOURCE_FAILED=10]="HTTP_RESOURCE_FAILED",Zl[Zl.MATRIX_RESOURCE_FAILED=11]="MATRIX_RESOURCE_FAILED",
Zl[Zl.UNIMPLEMENTED_FEATURE=12]="UNIMPLEMENTED_FEATURE",Zl[Zl.UNBUILD_FEATURE=13]="UNBUILD_FEATURE",
Zl[Zl.FATAL_ERROR=14]="FATAL_ERROR",Zl[Zl.UNKNOWN_AGENT_ID=15]="UNKNOWN_AGENT_ID",
Zl[Zl.WORK_CANCELLED=16]="WORK_CANCELLED",Zl[Zl.CONFLICT=17]="CONFLICT",Zl[Zl.NO_WORK_AVAILABLE=18]="NO_WORK_AVAILABLE",
Zl[Zl.USAGE=64]="USAGE",Zl[Zl.DATAERR=65]="DATAERR",Zl[Zl.NOINPUT=66]="NOINPUT",Zl[Zl.NOUSER=67]="NOUSER",
Zl[Zl.NOHOST=68]="NOHOST",Zl[Zl.UNAVAILABLE=69]="UNAVAILABLE",Zl[Zl.SOFTWARE=70]="SOFTWARE",Zl[Zl.OSERR=71]="OSERR",
Zl[Zl.OSFILE=72]="OSFILE",Zl[Zl.CANTCREAT=73]="CANTCREAT",Zl[Zl.IOERR=74]="IOERR",Zl[Zl.TEMPFAIL=75]="TEMPFAIL",
Zl[Zl.PROTOCOL=76]="PROTOCOL",Zl[Zl.NOPERM=77]="NOPERM",Zl[Zl.CONFIG=78]="CONFIG",
Zl[Zl.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Zl[Zl.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Zl[Zl.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Zl[Zl.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Zl[Zl.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Zl[Zl.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",_l=hl,(Zl=El={})[Zl.OPTIONS=0]="OPTIONS",
Zl[Zl.GET=1]="GET",Zl[Zl.POST=2]="POST",Zl[Zl.PUT=3]="PUT",Zl[Zl.DELETE=4]="DELETE",Zl[Zl.PATCH=5]="PATCH",tu=El
;const vc="WINDOW"===(ru=null!==(ru=null!==(_t=null===(Zl=process)||void 0===Zl||null===(_t=Zl.env
)||void 0===_t?void 0:_t.NOR_REQUEST_CLIENT_MODE)&&void 0!==_t?_t:null===(ru=process)||void 0===ru||null===(Et=ru.env
)||void 0===Et?void 0:Et.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==ru?ru:"")||!("undefined"==typeof window||!window.fetch
),pc="NODE"===ru||!vc;class fc{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await fc.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await fc.getRequestDataAsString(e)))return Iu.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await fc.getRequestDataAsString(e)))return JSON.parse(e)}}(ru=vl={}
)[ru.Continue=100]="Continue",ru[ru.SwitchingProtocols=101]="SwitchingProtocols",ru[ru.Processing=102]="Processing",
ru[ru.CheckPoint=103]="CheckPoint",ru[ru.OK=200]="OK",ru[ru.Created=201]="Created",ru[ru.Accepted=202]="Accepted",
ru[ru.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",ru[ru.NoContent=204]="NoContent",
ru[ru.ResetContent=205]="ResetContent",ru[ru.PartialContent=206]="PartialContent",ru[ru.MultiStatus=207]="MultiStatus",
ru[ru.AlreadyReported=208]="AlreadyReported",ru[ru.IMUsed=226]="IMUsed",ru[ru.MultipleChoices=300]="MultipleChoices",
ru[ru.MovedPermanently=301]="MovedPermanently",ru[ru.Found=302]="Found",ru[ru.SeeOther=303]="SeeOther",
ru[ru.NotModified=304]="NotModified",ru[ru.TemporaryRedirect=307]="TemporaryRedirect",
ru[ru.PermanentRedirect=308]="PermanentRedirect",ru[ru.BadRequest=400]="BadRequest",
ru[ru.Unauthorized=401]="Unauthorized",ru[ru.PaymentRequired=402]="PaymentRequired",ru[ru.Forbidden=403]="Forbidden",
ru[ru.NotFound=404]="NotFound",ru[ru.MethodNotAllowed=405]="MethodNotAllowed",ru[ru.NotAcceptable=406]="NotAcceptable",
ru[ru.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",ru[ru.RequestTimeout=408]="RequestTimeout",
ru[ru.Conflict=409]="Conflict",ru[ru.Gone=410]="Gone",ru[ru.LengthRequired=411]="LengthRequired",
ru[ru.PreconditionFailed=412]="PreconditionFailed",ru[ru.PayloadTooLarge=413]="PayloadTooLarge",
ru[ru.URITooLong=414]="URITooLong",ru[ru.UnsupportedMediaType=415]="UnsupportedMediaType",
ru[ru.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",ru[ru.ExpectationFailed=417]="ExpectationFailed",
ru[ru.IAmATeapot=418]="IAmATeapot",ru[ru.UnprocessableEntity=422]="UnprocessableEntity",ru[ru.Locked=423]="Locked",
ru[ru.FailedDependency=424]="FailedDependency",ru[ru.TooEarly=425]="TooEarly",
ru[ru.UpgradeRequired=426]="UpgradeRequired",ru[ru.PreconditionRequired=428]="PreconditionRequired",
ru[ru.TooManyRequests=429]="TooManyRequests",ru[ru.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
ru[ru.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",ru[ru.InternalError=500]="InternalError",
ru[ru.InternalServerError=500]="InternalServerError",ru[ru.NotImplemented=501]="NotImplemented",
ru[ru.BadGateway=502]="BadGateway",ru[ru.ServiceUnavailable=503]="ServiceUnavailable",
ru[ru.GatewayTimeout=504]="GatewayTimeout",ru[ru.HttpVersionNotSupported=505]="HttpVersionNotSupported",
ru[ru.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",ru[ru.InsufficientStorage=507]="InsufficientStorage",
ru[ru.LoopDetected=508]="LoopDetected",ru[ru.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
ru[ru.NotExtended=510]="NotExtended",ru[ru.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",pl=vl,(
du=du||{}).ERROR="error",fl=du;class gc extends Error{constructor(e,t=void 0,r=void 0,n=void 0,i=void 0){super(
t||function(e){switch(e){case vl.Continue:return"Continue";case vl.SwitchingProtocols:return"Switching Protocols"
;case vl.Processing:return"Processing";case vl.CheckPoint:return"Check Point";case vl.OK:return"OK";case vl.Created:
return"Created";case vl.Accepted:return"Accepted";case vl.NonAuthoritativeInformation:
return"Non-Authoritative Information";case vl.NoContent:return"No Content";case vl.ResetContent:return"Reset Content"
;case vl.PartialContent:return"Partial Content";case vl.MultiStatus:return"Multi Status";case vl.AlreadyReported:
return"Already Reported";case vl.IMUsed:return"IM Used";case vl.MultipleChoices:return"Multiple Choices"
;case vl.MovedPermanently:return"Moved Permanently";case vl.Found:return"Found";case vl.SeeOther:return"See Other"
;case vl.NotModified:return"Not Modified";case vl.TemporaryRedirect:return"Temporary Redirect"
;case vl.PermanentRedirect:return"Permanent Redirect";case vl.BadRequest:return"Bad Request";case vl.Unauthorized:
return"Unauthorized";case vl.PaymentRequired:return"Payment Required";case vl.Forbidden:return"Forbidden"
;case vl.NotFound:return"Not Found";case vl.MethodNotAllowed:return"Method Not Allowed";case vl.NotAcceptable:
return"Not Acceptable";case vl.ProxyAuthenticationRequired:return"Proxy Authentication Required";case vl.RequestTimeout:
return"Request Timeout";case vl.Conflict:return"Conflict";case vl.Gone:return"Gone";case vl.LengthRequired:
return"Length Required";case vl.PreconditionFailed:return"Precondition Failed";case vl.PayloadTooLarge:
return"Payload Too Large";case vl.URITooLong:return"URI Too Long";case vl.UnsupportedMediaType:
return"Unsupported Media Type";case vl.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case vl.ExpectationFailed:return"Expectation Failed";case vl.IAmATeapot:return"I Am a Teapot"
;case vl.UnprocessableEntity:return"Unprocessable Entity";case vl.Locked:return"Locked";case vl.FailedDependency:
return"Failed Dependency";case vl.TooEarly:return"Too Early";case vl.UpgradeRequired:return"Upgrade Required"
;case vl.PreconditionRequired:return"Precondition Required";case vl.TooManyRequests:return"Too Many Requests"
;case vl.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case vl.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case vl.InternalServerError:return"Internal Server Error";case vl.NotImplemented:
return"Not Implemented";case vl.BadGateway:return"Bad Gateway";case vl.ServiceUnavailable:return"Service Unavailable"
;case vl.GatewayTimeout:return"Gateway Timeout";case vl.HttpVersionNotSupported:return"Http Version Not Supported"
;case vl.VariantAlsoNegotiates:return"Variant Also Negotiates";case vl.InsufficientStorage:return"Insufficient Storage"
;case vl.LoopDetected:return"Loop Detected";case vl.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case vl.NotExtended:return"Not Extended";case vl.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),l(this,"status",void 0),l(this,"method",void 0),l(this,"url",
void 0),l(this,"body",void 0),l(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=r,this.url=n,this.body=i}
valueOf(){return this.status}toString(){return`${this.status} ${this.message}`}toJSON(){return{type:fl.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Tc=pc?require("fs").promises:void 0,Sc=dc.createLogger(
"NodeRequestClient");class Ac{constructor(e,t){l(this,"_http",void 0),l(this,"_https",void 0),this._http=e,this._https=t
}async jsonRequest(e,t,r,n){switch(e){case tu.GET:return this._getJson(t,r,n);case tu.POST:return this._postJson(t,r,n)
;case tu.PATCH:return this._patchJson(t,r,n);case tu.PUT:return this._putJson(t,r,n);case tu.DELETE:
return this._deleteJson(t,r,n);default:throw new TypeError(`[Node]RequestClient: Unsupported method: ${e}`)}}
async _checkSocketFile(t){try{const e=await Tc.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))return void Sc.debug("_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Sc.debug(
"_checkSocketFile: ENOENT: ",e);throw Sc.error(`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(
e){var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=Ou.default.dirname(e)
)&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,s,e){const a=e?JSON.stringify(e)+"\n":void 0,
l=new Du.default.URL(o);let u;const c=null!==(t=null===l||void 0===l?void 0:l.protocol)&&void 0!==t?t:"";if(
"unix:"===c||"socket:"===c){const r=null!==l&&void 0!==l&&l.pathname?null===l||void 0===l?void 0:l.pathname:"/";if(
"/"===r)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);if(!(e=await this._findSocketFile(r))
)throw new TypeError(`No socket path found for unix protocol URL: ${o}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==l.search?l.search:""}`;s=O(O({},s),{},{socketPath:e,path:t}),o="",u=this._http
}else u="https:"===c?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!u)throw new Error(
"HTTP module not defined. This error should not happen.");var i;let e;o&&(s=O(O({},s),{},{hostname:l.hostname,
port:null!==(i=null!==l&&void 0!==l&&l.port?parseInt(l.port,10):void 0)&&void 0!==i?i:"https:"===c?443:80,
path:l.pathname+l.search})),e=u.request(s,e=>{n?Sc.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(Sc.warn(
"Warning! Request had already ended when the response was received."),Sc.debug("Error from event: ",e)):(Sc.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(Sc.warn(
"Warning! Request had already ended when the response was received."),Sc.debug("Exception: ",e)):(Sc.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await fc.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(tu.GET,e,n,r).then(Ac._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(tu.PUT,e,n,r).then(Ac._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),this._request(tu.POST,e,n,r).then(
Ac._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=O(O({},n.headers),t)),this._request(tu.PATCH,e,n,r).then(Ac._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=O(O({},n.headers),t)),
this._request(tu.DELETE,e,n,r).then(Ac._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw Sc.error(`Unsuccessful response with status ${t}: `,e),new gc(t,`Error ${t} for ${x(e.method
)} ${e.url}`,e.method,e.url,e.body);return e.body}}class Nc{constructor(e){l(this,"_fetch",void 0),this._fetch=e}
jsonRequest(e,t,r,n){switch(e){case tu.GET:return this._getJson(t,r,n);case tu.POST:return this._postJson(t,r,n)
;case tu.PUT:return this._putJson(t,r,n);case tu.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Nc._successResponse(e,tu.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Nc._successResponse(e,tu.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Nc._successResponse(e,tu.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=O(O({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Nc._successResponse(e,tu.DELETE))}static _successResponse(e,t){
const r=e.status;if(!e.ok||r<200||400<=r){const n=e.url,i=`${r} ${e.statusText} for ${x(t)} ${n}`;return e.json().then(
e=>{throw new gc(r,i,t,n,e)})}return e.json()}}const mc=pc?require("http"):void 0,yc=pc?require("https"):void 0,
Rc=dc.createLogger("RequestClient");class wc{static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}
static getJson(e,t){return this._client.jsonRequest(tu.GET,e,t)}static postJson(e,t,r){return Rc.debug(".postJson: ",e,t
,r),this._client.jsonRequest(tu.POST,e,r,t)}static patchJson(e,t,r){return Rc.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(tu.PATCH,e,r,t)}static putJson(e,t,r){return Rc.debug(".putJson: ",e,t,r),
this._client.jsonRequest(tu.PUT,e,r,t)}static deleteJson(e,t,r){return Rc.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(tu.DELETE,e,t,r)}static _initClient(){if(vc)return Rc.debug("Detected browser environment"),
new Nc(window.fetch.bind(window));if(pc)return new Ac(mc,yc);throw new TypeError(
"Could not detect request client implementation")}}l(wc,"_client",wc._initClient()),(du=nu=nu||{}).JSON="json",
du.STRING="string",du.BOOLEAN="boolean",du.NUMBER="number",du.INTEGER="integer",cu=nu,du=["name","parameters",
"variables"];class Cc{static registerController(e){this._stepControllers.push(e)}static findController(t){return zo(
this._stepControllers,e=>e.isControllerModel(t))}static parseControllerModel(r){return ts(this._stepControllers,(e,t
)=>void 0!==e?e:t.parseControllerModel(r),void 0)}}l(Cc,"_stepControllers",[]);const bc=Co(du,["name","steps"]),Ic=Co(du
,["name","jobs"]),Dc=Co(du,["name","stages"]);class Oc{getName(){return this._name}constructor(e){l(this,"_name",void 0)
,l(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return Ca(this._callbacks,e)}triggerEvent(t,...r){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Ks(e,
e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=Hs(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}(
nu=iu=iu||{})[nu.CONSTRUCTED=0]="CONSTRUCTED",nu[nu.STARTED=1]="STARTED",nu[nu.PAUSED=2]="PAUSED",
nu[nu.CANCELLED=3]="CANCELLED",nu[nu.FINISHED=4]="FINISHED",nu[nu.FAILED=5]="FAILED",gl=iu,(iu=ou=ou||{}
).PIPELINE="fi.nor.pipeline",iu.JOB="fi.nor.pipeline.job",iu.STAGE="fi.nor.pipeline.stage",
iu.TASK="fi.nor.pipeline.task",iu.STEP="fi.nor.pipeline.step",iu.FILE="fi.nor.pipeline.step.file",
iu.SCRIPT="fi.nor.pipeline.step.script",iu.VARIABLE="fi.nor.pipeline.step.variable",iu.JSON="fi.nor.pipeline.step.json",
iu.CSV="fi.nor.pipeline.step.csv",iu.GIT="fi.nor.pipeline.step.git",Tl=ou;const Lc=dc.createLogger("JobController");(
ou=Sl={}).JOB_CHANGED="JobController:jobChanged",ou.JOB_STARTED="JobController:jobStarted",
ou.JOB_PAUSED="JobController:jobPaused",ou.JOB_RESUMED="JobController:jobResumed",
ou.JOB_CANCELLED="JobController:jobCancelled",ou.JOB_FAILED="JobController:jobFailed",
ou.JOB_FINISHED="JobController:jobFinished";class Pc{constructor(e,t,r=[]){if(l(this,"_context",void 0),l(this,
"_observer",void 0),l(this,"_name",void 0),l(this,"_steps",void 0),l(this,"_changedCallback",void 0),l(this,"_state",
void 0),l(this,"_stepDestructors",void 0),l(this,"_current",void 0),!J(t))throw new TypeError(`Job name invalid: ${t}`)
;if(!d(r,se,1))throw new TypeError(`Job#${t} must have at least one step`);this._context=e,this._current=0,this._name=t,
this._steps=r,this._observer=new Oc(`JobController#${this._name}`),this._state=gl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=ji(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy(),this._stepDestructors=Hs(this._stepDestructors,(e,t)=>{const r=this._steps[t];try{e()}catch(e){
Lc.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)}return!1})}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}getStateDTO(){return{type:Tl.JOB,
state:this._state,name:this._name,steps:ji(this._steps,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}
isRunning(){switch(this._state){case gl.STARTED:return!0;case gl.PAUSED:case gl.CONSTRUCTED:case gl.CANCELLED:
case gl.FINISHED:case gl.FAILED:return!1}}isStarted(){switch(this._state){case gl.PAUSED:case gl.STARTED:return!0
;case gl.CONSTRUCTED:case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}isPaused(){switch(this._state){
case gl.PAUSED:return!0;case gl.STARTED:case gl.CONSTRUCTED:case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}
isCancelled(){switch(this._state){case gl.CANCELLED:return!0;case gl.PAUSED:case gl.STARTED:case gl.CONSTRUCTED:
case gl.FINISHED:case gl.FAILED:return!1}}isFinished(){switch(this._state){case gl.FINISHED:case gl.FAILED:
case gl.CANCELLED:return!0;case gl.CONSTRUCTED:case gl.PAUSED:case gl.STARTED:return!1}}isFailed(){switch(this._state){
case gl.FAILED:return!0;case gl.CONSTRUCTED:case gl.FINISHED:case gl.PAUSED:case gl.STARTED:case gl.CANCELLED:return!1}}
isSuccessful(){switch(this._state){case gl.FINISHED:return!0;case gl.FAILED:case gl.CONSTRUCTED:case gl.PAUSED:
case gl.STARTED:case gl.CANCELLED:return!1}}start(){if(this._state!==gl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Lc.info(`Starting job ${this._name}`),this._state=gl.STARTED,
this._steps[this._current].start(),this._observer.hasCallbacks(Sl.JOB_STARTED)&&this._observer.triggerEvent(
Sl.JOB_STARTED,this),this._observer.hasCallbacks(Sl.JOB_CHANGED)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this),this}
pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Lc.info(
`Pausing job ${this._name}`),this._state=gl.PAUSED,this._steps[this._current].pause(),this._observer.hasCallbacks(
Sl.JOB_PAUSED)&&this._observer.triggerEvent(Sl.JOB_PAUSED,this),this._observer.hasCallbacks(Sl.JOB_CHANGED
)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this),this}resume(){if(!this.isPaused())throw new Error(
`Job#${this._name} was not paused`);return Lc.info(`Resuming job ${this._name}`),this._state=gl.STARTED,
this._steps[this._current].resume(),this._observer.hasCallbacks(Sl.JOB_RESUMED)&&this._observer.triggerEvent(
Sl.JOB_RESUMED,this),this._observer.hasCallbacks(Sl.JOB_CHANGED)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this),this}
stop(){if(this._state!==gl.STARTED)throw new Error(`Job#${this._name} was not started`);return Lc.info(
`Stopping job ${this._name}`),this._state=gl.CANCELLED,this._steps[this._current].stop(),this._observer.hasCallbacks(
Sl.JOB_CANCELLED)&&this._observer.triggerEvent(Sl.JOB_CANCELLED,this),this._observer.hasCallbacks(Sl.JOB_CHANGED
)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this),this}onCancelled(e){return this.on(Sl.JOB_CANCELLED,e)}onChanged(e){
return this.on(Sl.JOB_CHANGED,e)}onFailed(e){return this.on(Sl.JOB_FAILED,e)}onFinished(e){return this.on(
Sl.JOB_FINISHED,e)}onPaused(e){return this.on(Sl.JOB_PAUSED,e)}onResumed(e){return this.on(Sl.JOB_RESUMED,e)}onStarted(e
){return this.on(Sl.JOB_STARTED,e)}getErrorString(){return ji(this._steps,e=>e.getErrorString()).join("\n")}
getOutputString(){return ji(this._steps,e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state
;const i=this._steps[this._current];if(t===i)if(i.isFinished()&&this.isStarted()){try{r=this._steps.indexOf(i),
this._stepDestructors[r]()}catch(e){Lc.warn(`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}
i.isFailed()?(this._state=gl.FAILED,this._observer.hasCallbacks(Sl.JOB_FAILED)&&this._observer.triggerEvent(
Sl.JOB_FAILED,this)):i.isCancelled()?(this._state=gl.CANCELLED,this._observer.hasCallbacks(Sl.JOB_CANCELLED
)&&this._observer.triggerEvent(Sl.JOB_CANCELLED,this)):(this._current+=1,this._current<this._steps.length?(
this._state=gl.STARTED,this._steps[this._current].start(),n===gl.PAUSED&&this._observer.hasCallbacks(Sl.JOB_RESUMED
)&&this._observer.triggerEvent(Sl.JOB_RESUMED,this)):(this._state=gl.FINISHED,this._observer.hasCallbacks(
Sl.JOB_FINISHED)&&this._observer.triggerEvent(Sl.JOB_FINISHED,this))),this._observer.hasCallbacks(Sl.JOB_CHANGED
)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this)}else i.isPaused()&&!this.isPaused()?(this._state=gl.PAUSED,
this._observer.hasCallbacks(Sl.JOB_PAUSED)&&this._observer.triggerEvent(Sl.JOB_PAUSED,this),this._observer.hasCallbacks(
Sl.JOB_CHANGED)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this)):i.isStarted()&&this.isPaused()&&(
this._state=gl.STARTED,this._observer.hasCallbacks(Sl.JOB_RESUMED)&&this._observer.triggerEvent(Sl.JOB_RESUMED,this),
this._observer.hasCallbacks(Sl.JOB_CHANGED)&&this._observer.triggerEvent(Sl.JOB_CHANGED,this))}}l(Pc,"Event",Sl)
;const Uc=dc.createLogger("StageController");(ou=Al={}).STAGE_STARTED="StageController:stageStarted",
ou.STAGE_PAUSED="StageController:stagePaused",ou.STAGE_RESUMED="StageController:stageResumed",
ou.STAGE_FINISHED="StageController:stageFinished",ou.STAGE_FAILED="StageController:stageFailed",
ou.STAGE_CANCELLED="StageController:stageCancelled",ou.STAGE_CHANGED="StageController:stageChanged";class $c{
constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,"_name",void 0),l(this,"_jobs",void 0)
,l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_jobDestructors",void 0),!J(t))throw new TypeError(
`Stage name invalid: ${t}`);if(!d(r,ae,1))throw new TypeError(`Stage#${t} must have at least one job`);this._context=e,
this._state=gl.CONSTRUCTED,this._name=t,this._jobs=r,this._observer=new Oc(`StageController#${this._name}`),
this._changedCallback=this._onChanged.bind(this),this._jobDestructors=ji(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}getStateDTO(){return{type:Tl.STAGE,state:this._state,name:this._name,jobs:ji(this._jobs,e=>e.getStateDTO())}}toJSON(){
return this.getStateDTO()}isCancelled(){switch(this._state){case gl.CANCELLED:return!0;case gl.FINISHED:case gl.FAILED:
case gl.CONSTRUCTED:case gl.PAUSED:case gl.STARTED:return!1}}isFailed(){switch(this._state){case gl.FAILED:return!0
;case gl.CANCELLED:case gl.FINISHED:case gl.CONSTRUCTED:case gl.PAUSED:case gl.STARTED:return!1}}isFinished(){switch(
this._state){case gl.FINISHED:case gl.FAILED:case gl.CANCELLED:return!0;case gl.CONSTRUCTED:case gl.PAUSED:
case gl.STARTED:return!1}}isPaused(){switch(this._state){case gl.PAUSED:return!0;case gl.FAILED:case gl.CANCELLED:
case gl.FINISHED:case gl.CONSTRUCTED:case gl.STARTED:return!1}}isRunning(){switch(this._state){case gl.STARTED:return!0
;case gl.PAUSED:case gl.FAILED:case gl.CANCELLED:case gl.FINISHED:case gl.CONSTRUCTED:return!1}}isStarted(){switch(
this._state){case gl.PAUSED:case gl.STARTED:return!0;case gl.FAILED:case gl.CANCELLED:case gl.FINISHED:
case gl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){case gl.FINISHED:return!0;case gl.PAUSED:
case gl.STARTED:case gl.FAILED:case gl.CANCELLED:case gl.CONSTRUCTED:return!1}}onCancelled(e){return this.on(
Al.STAGE_CANCELLED,e)}onChanged(e){return this.on(Al.STAGE_CHANGED,e)}onFailed(e){return this.on(Al.STAGE_FAILED,e)}
onFinished(e){return this.on(Al.STAGE_FINISHED,e)}onPaused(e){return this.on(Al.STAGE_PAUSED,e)}onResumed(e){
return this.on(Al.STAGE_RESUMED,e)}onStarted(e){return this.on(Al.STAGE_STARTED,e)}start(){if(
this._state!==gl.CONSTRUCTED)throw new Error(`Stage#${this._name} was already started`);return Uc.info(
`Starting stage ${this._name}`),this._state=gl.STARTED,Hs(this._jobs,t=>{try{return t.start(),!1}catch(e){
return Uc.error(`Could not start job#${t.getName()}: ${e}`),!0}}).length===this._jobs.length?(this._state=gl.FAILED,
this._observer.hasCallbacks(Al.STAGE_FAILED)&&this._observer.triggerEvent(Al.STAGE_FAILED,this)
):this._observer.hasCallbacks(Al.STAGE_STARTED)&&this._observer.triggerEvent(Al.STAGE_STARTED,this),
this._observer.hasCallbacks(Al.STAGE_CHANGED)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this),this}pause(){if(
this._state===gl.PAUSED)throw new Error(`Stage#${this._name} was already paused`);Uc.info(`Pausing stage ${this._name}`)
,this._state=gl.PAUSED;var e=Hs(this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return Uc.error(
`Could not pause job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&Uc.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Al.STAGE_PAUSED
)&&this._observer.triggerEvent(Al.STAGE_PAUSED,this),this._observer.hasCallbacks(Al.STAGE_CHANGED
)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this),this}resume(){if(this._state===gl.STARTED)throw new Error(
`Stage#${this._name} was already started`);Uc.info(`Resuming stage ${this._name}`),this._state=gl.STARTED;var e=Hs(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return Uc.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&Uc.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Al.STAGE_RESUMED
)&&this._observer.triggerEvent(Al.STAGE_RESUMED,this),this._observer.hasCallbacks(Al.STAGE_CHANGED
)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);Uc.info(`Stopping stage ${this._name}`),this._state=gl.CANCELLED;var e=Hs(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return Uc.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&Uc.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return ji(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return ji(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=Hs(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){Uc.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=T(this._jobs,e=>e.isFailed()),n=T(this._jobs,
e=>e.isCancelled()),r&&this._state!==gl.FAILED?(this._state=gl.FAILED,this._observer.hasCallbacks(Al.STAGE_FAILED
)&&this._observer.triggerEvent(Al.STAGE_FAILED,this),this._observer.hasCallbacks(Al.STAGE_CHANGED
)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this)):n&&this._state!==gl.CANCELLED?(this._state=gl.CANCELLED,
this._observer.hasCallbacks(Al.STAGE_CANCELLED)&&this._observer.triggerEvent(Al.STAGE_CANCELLED,this),
this._observer.hasCallbacks(Al.STAGE_CHANGED)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this)
):this._state!==gl.FINISHED&&(this._state=gl.FINISHED,this._observer.hasCallbacks(Al.STAGE_FINISHED
)&&this._observer.triggerEvent(Al.STAGE_FINISHED,this),this._observer.hasCallbacks(Al.STAGE_CHANGED
)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this)))):(n=S(Hs(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==gl.PAUSED?(this._state=gl.PAUSED,this._observer.hasCallbacks(Al.STAGE_PAUSED
)&&this._observer.triggerEvent(Al.STAGE_PAUSED,this),this._observer.hasCallbacks(Al.STAGE_CHANGED
)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this)):n||this._state!==gl.PAUSED||(this._state=gl.STARTED,
this._observer.hasCallbacks(Al.STAGE_RESUMED)&&this._observer.triggerEvent(Al.STAGE_RESUMED,this),
this._observer.hasCallbacks(Al.STAGE_CHANGED)&&this._observer.triggerEvent(Al.STAGE_CHANGED,this))}}l($c,"Event",Al)
;const Fc=dc.createLogger("PipelineController");(ou=Nl={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
ou.PIPELINE_PAUSED="PipelineController:pipelinePaused",ou.PIPELINE_RESUMED="PipelineController:pipelineResumed",
ou.PIPELINE_FINISHED="PipelineController:pipelineFinished",ou.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
ou.PIPELINE_FAILED="PipelineController:pipelineFailed",ou.PIPELINE_CHANGED="PipelineController:pipelineChanged"
;class kc{constructor(e,t,r){if(l(this,"_context",void 0),l(this,"_name",void 0),l(this,"_stages",void 0),l(this,
"_observer",void 0),l(this,"_changedCallback",void 0),l(this,"_state",void 0),l(this,"_stageDestructors",void 0),l(this,
"_current",void 0),!J(t))throw new TypeError(`Pipeline name invalid: ${t}`);if(!d(r,le,1))throw new TypeError(
`Pipeline#${t} must have at least one stage`);this._context=e,this._current=0,this._name=t,this._stages=r,
this._observer=new Oc(`PipelineController#${this._name}`),this._state=gl.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stageDestructors=ji(r,e=>e.onChanged(this._changedCallback))}
getContext(){return this._context}getState(){return this._state}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`PipelineController#${this._name}`}getStateDTO(){return{type:Tl.PIPELINE,state:this._state,name:this._name,
stages:ji(this._stages,e=>e.getStateDTO())}}toJSON(){return this.getStateDTO()}isCancelled(){switch(this._state){
case gl.CANCELLED:return!0;case gl.STARTED:case gl.PAUSED:case gl.CONSTRUCTED:case gl.FINISHED:case gl.FAILED:return!1}}
isFailed(){switch(this._state){case gl.FAILED:return!0;case gl.CANCELLED:case gl.STARTED:case gl.PAUSED:
case gl.CONSTRUCTED:case gl.FINISHED:return!1}}isFinished(){switch(this._state){case gl.FAILED:case gl.CANCELLED:
case gl.FINISHED:return!0;case gl.STARTED:case gl.PAUSED:case gl.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case gl.PAUSED:return!0;case gl.FAILED:case gl.CANCELLED:case gl.FINISHED:case gl.STARTED:case gl.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case gl.STARTED:return!0;case gl.PAUSED:case gl.FAILED:case gl.CANCELLED:
case gl.FINISHED:case gl.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case gl.STARTED:case gl.PAUSED:return!0
;case gl.FAILED:case gl.CANCELLED:case gl.FINISHED:case gl.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case gl.FINISHED:return!0;case gl.STARTED:case gl.PAUSED:case gl.FAILED:case gl.CANCELLED:case gl.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(Nl.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(Nl.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(Nl.PIPELINE_FAILED,e)}onFinished(e){return this.on(Nl.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
Nl.PIPELINE_PAUSED,e)}onResumed(e){return this.on(Nl.PIPELINE_RESUMED,e)}onStarted(e){return this.on(Nl.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Fc.info(
`Pausing pipeline ${this._name}`),this._state=gl.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
Nl.PIPELINE_PAUSED)&&this._observer.triggerEvent(Nl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
Nl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Fc.info(`Resuming pipeline ${this._name}`),
this._state=gl.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(Nl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Nl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Nl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this),this}start(){if(this._state!==gl.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Fc.info(`Starting pipeline ${this._name}`),this._state=gl.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(Nl.PIPELINE_STARTED)&&this._observer.triggerEvent(
Nl.PIPELINE_STARTED,this),this._observer.hasCallbacks(Nl.PIPELINE_CHANGED)&&this._observer.triggerEvent(
Nl.PIPELINE_CHANGED,this),this}stop(){if(this._state!==gl.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Fc.info(`Stopping pipeline ${this._name}`),this._state=gl.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(Nl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Nl.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(Nl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this),this}
getErrorString(){return ji(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return ji(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const i=this._stages[this._current];if(t===i)if(
i.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(i),this._stageDestructors[r]()}catch(e){Fc.warn(
`Warning! Exception in the step#${i.getName()} listener destructor: `,e)}if(i.isFailed())this._state=gl.FAILED,
this._observer.hasCallbacks(Nl.PIPELINE_FAILED)&&this._observer.triggerEvent(Nl.PIPELINE_FAILED,this),Fc.info(
`Pipeline ${this._name} has failed`);else if(i.isCancelled())this._state=gl.CANCELLED,this._observer.hasCallbacks(
Nl.PIPELINE_CANCELLED)&&this._observer.triggerEvent(Nl.PIPELINE_CANCELLED,this),Fc.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=gl.STARTED;const o=this._stages[this._current].start();n===gl.PAUSED&&this._observer.hasCallbacks(
Nl.PIPELINE_RESUMED)&&this._observer.triggerEvent(Nl.PIPELINE_RESUMED,this),Fc.info(`Stage ${o.getName(
)} for pipeline ${this._name} started`)}else this._state=gl.FINISHED,this._observer.hasCallbacks(Nl.PIPELINE_FINISHED
)&&this._observer.triggerEvent(Nl.PIPELINE_FINISHED,this),Fc.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(Nl.PIPELINE_CHANGED)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this)
}else i.isPaused()&&!this.isPaused()?(this._state=gl.PAUSED,this._observer.hasCallbacks(Nl.PIPELINE_PAUSED
)&&this._observer.triggerEvent(Nl.PIPELINE_PAUSED,this),this._observer.hasCallbacks(Nl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this),Fc.info(`Pipeline ${this._name} was paused`)):i.isStarted(
)&&this.isPaused()&&(this._state=gl.STARTED,this._observer.hasCallbacks(Nl.PIPELINE_RESUMED
)&&this._observer.triggerEvent(Nl.PIPELINE_RESUMED,this),this._observer.hasCallbacks(Nl.PIPELINE_CHANGED
)&&this._observer.triggerEvent(Nl.PIPELINE_CHANGED,this),Fc.info(`Pipeline ${this._name} was resumed`))}}l(kc,"Event",Nl
);const Mc=dc.createLogger("PipelineRunner");class Gc{static registerController(e){Cc.registerController(e)}
static createStepController(e,t){const r=Cc.findController(e);if(void 0===r)throw new TypeError(
`Unknown step type: ${e.name}`);return r.createController(t,e)}static createJobController(e,t){return new Pc(t,e.name,
ji(e.steps,e=>this.createStepController(e,t)))}static createStageController(e,t){return new $c(t,e.name,ji(e.jobs,
e=>this.createJobController(e,t)))}static createPipelineController(e,t){return new kc(t,e.name,ji(e.stages,
e=>this.createStageController(e,t)))}static createController(e,t){return ie(e)?(Mc.debug(`Starting pipeline ${e.name}`),
this.createPipelineController(e,t)):ne(e)?(Mc.debug(`Starting stage ${e.name}`),this.createStageController(e,t)):te(e)?(
Mc.debug(`Starting job ${e.name}`),this.createJobController(e,t)):(Mc.debug(`Starting step ${e.name}`),
this.createStepController(e,t))}static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{
r=n.onChanged(()=>{try{n.isFinished()?(Mc.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Mc.debug(
`Controller ${n.toString()} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Mc.debug(
`Controller ${n.toString()} started`)}catch(e){r&&(r(),r=void 0),t(e)}})}}class jc{static toString(...e){return ji(e,
e=>La(e)?"null":`${e}`).join("")}static processVariables(n,i,o,s,a=void 0){return Y(n)?ji(n,e=>jc.processVariables(e,i,o
,s,a)):X(n)?ts(P(n),(e,t)=>{var r=n[t];return e[`${jc.processVariables(t,i,o,s,a)}`]=jc.processVariables(r,i,o,s,a),e},
{}):p(n)?jc.processVariablesInString(n,i,o,s,a):n}static isValidKeyword(e){return!(e.length<=0)&&(
!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||S(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,r,
n,i,o=void 0){var e,s,a,l,u;if(0===t.length)return"";let c;if(c=wt(r)?r:e=>oi(r,e,o),qa(t,n)&&Za(t,i)){let e=t.substr(
n.length,t.length-n.length-i.length);if(e.indexOf(n)<0&&(e=ma(e),jc.isValidKeyword(e)))return c(e)}let d="",h=0;for(
;0<=h&&h<t.length;)if(e=h,h=t.indexOf(n,e),h<0)d+=t.substr(e),h=t.length;else{if(s=h,a=h+n.length,(l=t.indexOf(i,a))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);u=l+i.length,a=ma(
t.substr(a,l-a)),h=(jc.isValidKeyword(a)?(a=c(a),d+=`${t.substr(e,s-e)}${a}`):d+=`${t.substr(e,u-e)}`,u)}return d}}
const Hc=dc.createLogger("PipelineContext");class Bc{constructor(e,t=void 0,r=void 0,n="${",i="}"){l(this,"_system",
void 0),l(this,"_parameters",void 0),l(this,"_variablePrefix",void 0),l(this,"_variableSuffix",void 0),l(this,
"_lookupVariable",void 0),l(this,"_variables",void 0),this._system=e,this._variables=null!=r?r:{},this._parameters=t,
this._variablePrefix=n,this._variableSuffix=i,this._lookupVariable=this._onLookupVariable.bind(this)}getSystem(){
return this._system}compileModel(e){return Hc.debug("Compiling model using: ",e,this._variablePrefix,
this._variableSuffix),e=jc.processVariables(e,this._lookupVariable,this._variablePrefix,this._variableSuffix),Hc.debug(
"Compiled as: ",e),e}getParametersArray(){var e;return null!==(e=this._parameters)&&void 0!==e?e:[]}getVariablesModel(){
return this._variables}getVariable(e){return oi(this._variables,e)}_onLookupVariable(e){var t=this.getVariable(e)
;return Hc.debug(`lookup variable "${e}": `,t,this._variables),t}setVariable(e,t){return K(this._variables)||(
this._variables={}),fo(this._variables,e,t),Hc.debug(`setVariable "${e}": `,t,this._variables),this}toString(){
return"PipelineContext"}toJSON(){return{type:"fi.nor.pipeline.context",variables:function(e){try{return JSON.parse(e)
}catch(e){return}}(JSON.stringify(this._variables))}}}const xc=dc.createLogger("runHttpResource"),Jc=dc.createLogger(
"runLocalResource");(ou=ml={}).M_ROOM_POWER_LEVELS="m.room.power_levels",ou.M_ROOM_JOIN_RULES="m.room.join_rules",
ou.M_ROOM_MEMBERSHIP="m.room.membership",ou.M_ROOM_HISTORY_VISIBILITY="m.room.history_visibility",
ou.M_ROOM_GUEST_ACCESS="m.room.guest_access",ou.M_ROOM_CREATE="m.room.create",ou.M_FEDERATE="m.federate",
ou.M_ROOM_MEMBER="m.room.member",ou.M_PUSH_RULES="m.push_rules",ou.M_PRESENCE="m.presence",ou.M_SPACE="m.space",
ou.M_LOGIN_PASSWORD="m.login.password",ou.M_LOGIN_TOKEN="m.login.token",ou.M_ID_USER="m.id.user",
ou.FI_NOR_DELETED="fi.nor.deleted",ou.FI_NOR_FORM_DTO="fi.nor.form_dto",ou.FI_NOR_FORM_VALUE_DTO="fi.nor.form_value_dto"
,ou.FI_NOR_PIPELINE_DTO="fi.nor.dto.pipeline",ou.FI_NOR_PIPELINE_RUN_DTO="fi.nor.dto.pipeline.run",
ou.FI_NOR_AGENT_DTO="fi.nor.dto.agent",ou.FI_NOR_PIPELINE="fi.nor.pipeline",
ou.FI_NOR_PIPELINE_STATE="fi.nor.pipeline.state",yl=ml,(ou=Rl=Rl||{})[ou.UNAUTHENTICATED=0]="UNAUTHENTICATED",
ou[ou.AUTHENTICATING=1]="AUTHENTICATING",ou[ou.AUTHENTICATED=2]="AUTHENTICATED",
ou[ou.AUTHENTICATED_AND_STARTING=3]="AUTHENTICATED_AND_STARTING",
ou[ou.AUTHENTICATED_AND_STARTED=4]="AUTHENTICATED_AND_STARTED",(ou=wl={}).M_USER_IN_USE="M_USER_IN_USE",
ou.M_INVALID_USERNAME="M_INVALID_USERNAME",ou.M_EXCLUSIVE="M_EXCLUSIVE",ou.M_FORBIDDEN="M_FORBIDDEN",Cl=wl
;const Wc=dc.createLogger("SimpleMatrixClient");(bl=bl||{}).EVENT="SimpleMatrixClient:event";class Vc{constructor(e,
t=void 0,r=void 0,n=void 0,i=void 0,o=3e4,s=1e3){l(this,"_observer",void 0),l(this,"_originalUrl",void 0),l(this,
"_pollTimeout",void 0),l(this,"_pollWaitTime",void 0),l(this,"_timeoutCallback",void 0),l(this,"_state",void 0),l(this,
"_homeServerUrl",void 0),l(this,"_identityServerUrl",void 0),l(this,"_accessToken",void 0),l(this,"_userId",void 0),l(
this,"_nextBatch",void 0),l(this,"_timer",void 0),l(this,"_syncing",void 0),
this._state=n?Rl.AUTHENTICATED:Rl.UNAUTHENTICATED,this._originalUrl=e,this._homeServerUrl=null!=t?t:e,
this._identityServerUrl=null!=r?r:e,this._nextBatch=void 0,this._accessToken=n,this._userId=i,this._pollTimeout=o,
this._pollWaitTime=s,this._syncing=!1,this._observer=new Oc("SimpleMatrixClient"),
this._timeoutCallback=this._onTimeout.bind(this)}getState(){return this._state}destroy(){this._observer.destroy(),
this.stop()}on(e,t){return this._observer.listenEvent(e,t)}start(){void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._initSync().catch(e=>{Wc.error("SYNC ERROR: ",e)})}stop(){void 0!==this._timer&&(clearTimeout(
this._timer),this._timer=void 0)}getAccessToken(){return this._accessToken}getUserId(){return this._userId}
getHomeServerName(){return new URL(this._homeServerUrl).hostname}async register(e,t=void 0,r){var n,i,o,s,a;try{if(
Wc.debug("Registering user:",e,t),o=null!==(n=null!==(i=null==this?void 0:this._accessToken)&&void 0!==i?i:r
)&&void 0!==n?n:void 0,!(m(a=s=await wc.postJson(this._resolveHomeServerUrl("/register")+(t?`?kind=${qe(t)}`:""),e,o?{
Authorization:`Bearer ${o}`}:void 0))&&I(a,["user_id","access_token","home_server","device_id"])&&p(
null==a?void 0:a.user_id)&&f(null==a?void 0:a.access_token)&&f(null==a?void 0:a.home_server)&&f(
null==a?void 0:a.device_id)))throw Wc.debug("Invalid response received: ",s),new TypeError(
"register: Response was invalid");return Wc.debug("RegisterResponseDTO received: ",s),s}catch(e){if(Wc.debug(
"Could not register user: ",e),!(e instanceof gc))throw new gc(pl.InternalServerError,"Failed to register user");if(
400!==(s=null==e?void 0:e.getStatusCode()))throw 401===s?new gc(pl.Unauthorized):403===s?new gc(pl.Forbidden
):429===s?new gc(429):new gc(pl.InternalServerError,"Failed to register user");if(!Ke(s=null==e?void 0:e.getBody())
)throw new gc(pl.InternalServerError,"Failed to register user");switch(s.errcode){case Cl.M_USER_IN_USE:throw new gc(
pl.Conflict,"User already exists");case Cl.M_INVALID_USERNAME:throw new gc(pl.BadRequest,"Username invalid")
;case Cl.M_EXCLUSIVE:throw new gc(pl.Conflict,"User name conflicts with exclusive namespace");default:throw new gc(
pl.InternalServerError,"Failed to register user")}}}async whoami(){var e,t,r,n,i,o;try{if(!(t=this._accessToken)
)throw new TypeError("whoami: Client did not have access token");return r=this._resolveHomeServerUrl("/account/whoami"),
Wc.debug("whoami: Fetching account whoami... ",r),n=await wc.getJson(r,{Authorization:`Bearer ${t}`}),Wc.debug(
"whoami: response = ",n),i=null!==(e=null==n?void 0:n.user_id)&&void 0!==e?e:void 0,Wc.debug("whoami: user_id = ",i),
o=p(i)?i:void 0,this._userId=o}catch(e){return void Wc.error("whoami: Could not fetch user_id: ",e)}}
async getRegisterNonce(){var e,t,r,n;try{if(Wc.debug("Fetching nonce for registration..."),
t=this._resolveSynapseServerUrl("/register"),!(n=null!==(e=null==(r=await wc.getJson(t))?void 0:r.nonce
)&&void 0!==e?e:void 0))throw new TypeError("No nonce detected");return n}catch(e){throw Wc.debug(
"Could not fetch nonce for registration: ",e),new TypeError(
"Could not fetch nonce for the register request. Is it Synapse?")}}async registerWithSharedSecret(e){var t,r,n;try{if(
Wc.debug("registerWithSharedSecret: Registering user:",e),t=this._resolveSynapseServerUrl("/register"),!(m(
n=r=await wc.postJson(t,e))&&I(n,["access_token","user_id","home_server","device_id"])&&p(null==n?void 0:n.access_token
)&&p(null==n?void 0:n.user_id)&&p(null==n?void 0:n.home_server)&&p(null==n?void 0:n.device_id)))throw Wc.debug(
"registerWithSharedSecret: Invalid response received: ",r),new TypeError(
"registerWithSharedSecret: Response was invalid");return Wc.debug(
"registerWithSharedSecret: RegisterResponseDTO received: ",r),r}catch(e){if(Wc.debug(
"registerWithSharedSecret: Could not register user: ",e),!(e instanceof gc))throw new gc(pl.InternalServerError,
"Failed to register user");if(400!==(r=null==e?void 0:e.getStatusCode()))throw 401===r?new gc(pl.Unauthorized
):403===r?new gc(pl.Forbidden):429===r?new gc(429):new gc(pl.InternalServerError,"Failed to register user");if(!Ke(
r=null==e?void 0:e.getBody()))throw new gc(pl.InternalServerError,"Failed to register user");switch(r.errcode){
case Cl.M_USER_IN_USE:throw new gc(pl.Conflict,"User already exists");case Cl.M_INVALID_USERNAME:throw new gc(
pl.BadRequest,"Username invalid");case Cl.M_EXCLUSIVE:throw new gc(pl.Conflict,
"User name conflicts with exclusive namespace");default:throw new gc(pl.InternalServerError,"Failed to register user")}}
}async login(r,n){var i,o,s,a,l,u,c,d,h,_,E;try{if(i={type:ml.M_LOGIN_PASSWORD,identifier:{type:ml.M_ID_USER,user:r},
password:n},Wc.debug("Sending login with userId:",r),!(m(h=o=await wc.postJson(this._resolveHomeServerUrl("/login"),i)
)&&I(h,["user_id","access_token","home_server","device_id","well_known"])&&p(null==h?void 0:h.user_id)&&p(
null==h?void 0:h.access_token)&&f(null==h?void 0:h.home_server)&&f(null==h?void 0:h.device_id)&&(v(
null==h?void 0:h.MatrixWellKnownDTO)||m(_=h)&&I(_,["m.homeserver","m.identity_server"])&&m(E=_["m.homeserver"])&&I(E,[
"base_url"])&&p(null==E?void 0:E.base_url)&&(v(_["m.identity_server"])||m(_=_["m.identity_server"])&&I(_,["base_url"]
)&&p(null==_?void 0:_.base_url)))))throw Wc.debug("Invalid response received: ",o),new TypeError(
"login: Response was invalid");Wc.debug("Login response received: ",o),u=this._originalUrl;let e=this._homeServerUrl,t
;if(t=null!=o&&o.well_known?(l=null===(s=o.well_known["m.homeserver"])||void 0===s?void 0:s.base_url,e=l||u,(null===(
a=o.well_known["m.identity_server"])||void 0===a?void 0:a.base_url)||e):e=u,!(c=null==o?void 0:o.access_token)
)throw new TypeError("Response did not have access_token");if(!(d=null==o?void 0:o.user_id))throw new TypeError(
"Response did not have user_id");return new Vc(u,e,t,c,d,this._pollTimeout,this._pollWaitTime)}catch(e){throw Wc.debug(
"Could not login: ",e),new gc(pl.Forbidden,"Access denied")}}async resolveRoomId(e){var t,r,n;try{if(
t=this._normalizeRoomName(e),!(m(n=r=await wc.getJson(this._resolveHomeServerUrl(`/directory/room/${qe(t)}`)))&&I(n,[
"room_id","servers"])&&p(null==n?void 0:n.room_id)&&_(null==n?void 0:n.servers)))throw Wc.debug(
"resolveRoomId: response was not GetDirectoryRoomAliasResponseDTO: ",r),new TypeError(
`Response was not GetDirectoryRoomAliasResponseDTO: ${r}`);return Wc.debug("resolveRoomId: received: ",r),r.room_id
}catch(e){if(e instanceof gc&&e.getStatusCode()===pl.NotFound)return;throw e}}async getJoinedMembers(e){
var t=this._accessToken;if(!t)throw new TypeError("getRoomStateByType: Client did not have access token");if(!(m(
t=e=await wc.getJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/joined_members`),{Authorization:`Bearer ${t}`}))&&I(t,[
"joined"])&&y(null==t?void 0:t.joined,he,Ve)))throw Wc.debug(
"getJoinedMembers: response was not MatrixRoomJoinedMembersDTO: ",e),new TypeError(
`Response was not MatrixRoomJoinedMembersDTO: ${e}`);return Wc.debug("getJoinedMembers: received: ",e),e}
async getRoomStateByType(e,t,r){var n,i;try{if(!(n=this._accessToken))throw new TypeError(
"getRoomStateByType: Client did not have access token");if(!K(i=await wc.getJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),{Authorization:`Bearer ${n}`})))throw Wc.debug(
"resolveRoomId: response was not JsonObject: ",i),new TypeError(`Response was not JsonObject: ${JSON.stringify(i)}`)
;return Wc.debug("resolveRoomId: received: ",i),i}catch(e){if(e instanceof gc&&e.getStatusCode()===pl.NotFound)return
;throw e}}async setRoomStateByType(e,t,r,n){var i,o,s;try{if(!(i=this._accessToken))throw new TypeError(
"setRoomStateByType: Client did not have access token");if(!(m(s=o=await wc.putJson(this._resolveHomeServerUrl(
`/rooms/${qe(e)}/state/${qe(t)}/${qe(r)}`),n,{Authorization:`Bearer ${i}`}))&&I(s,["event_id"])&&p(
null==s?void 0:s.event_id)))throw Wc.debug("setRoomStateByType: response was not PutRoomStateWithEventTypeDTO: ",o),
new TypeError(`Response was not PutRoomStateWithEventTypeDTO: ${JSON.stringify(o)}`);return Wc.debug(
"setRoomStateByType: received: ",o),o}catch(e){throw Wc.error("setRoomStateByType: Passing on error: ",e),e}}
async forgetRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"forgetRoom: Client did not have access token");r=await wc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/forget`)
,{},{Authorization:`Bearer ${t}`}),Wc.debug("forgetRoom: received: ",r)}catch(e){throw Wc.error(
"forgetRoom: Passing on error: ",e),e}}async leaveRoom(e){var t,r;try{if(!(t=this._accessToken))throw new TypeError(
"leaveRoom: Client did not have access token");r=await wc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/leave`),
{},{Authorization:`Bearer ${t}`}),Wc.debug("leaveRoom: received: ",r)}catch(e){throw Wc.error(
"leaveRoom: Passing on error: ",e),e}}async inviteToRoom(e,t){var r,n;try{if(!ue(e))throw new TypeError(
`roomId invalid: ${e}`);if(!he(t))throw new TypeError(`userId invalid: ${t}`);if(Wc.info(`Inviting user ${t} to ${e}`),
!(r=this._accessToken))throw new TypeError("inviteToRoom: Client did not have access token");n=await wc.postJson(
this._resolveHomeServerUrl(`/rooms/${qe(e)}/invite`),{user_id:t},{Authorization:`Bearer ${r}`}),Wc.debug(
"inviteToRoom: received: ",n)}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return;throw Wc.error(
"inviteToRoom: Passing on error: ",e),e}}async sendTextMessage(e,t){var r=this._accessToken;if(!r)throw new TypeError(
"sendTextMessage: Client did not have access token");t={msgtype:"m.text",body:t},Wc.debug("Sending message with body:",t
),r=await wc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(e)}/send/m.room.message`),t,{Authorization:`Bearer ${r}`})
,Wc.debug("sendTextMessage response received: ",r)}async createRoom(e){var t=this._accessToken;if(!t
)throw new TypeError("createRoom: Client did not have access token");if(Wc.debug("Creating room with body:",e),!(m(
e=t=await wc.postJson(this._resolveHomeServerUrl("/createRoom"),e,{Authorization:`Bearer ${t}`}))&&I(e,["room_id",
"room_alias"])&&ue(null==e?void 0:e.room_id)&&(v(null==e?void 0:e.room_alias)||p(e=null==e?void 0:e.room_alias
)&&e&&"#"===e[0])))throw Wc.debug("response = ",t),new TypeError("Response was not MatrixCreateRoomResponseDTO: "+t)
;return Wc.debug("Create room response received: ",t),t}async joinRoom(t,e=void 0){var r,n,i;try{if(!(
r=this._accessToken))throw new TypeError("createRoom: Client did not have access token");if(Wc.debug(
`Joining to room ${t} with body:`,e),!(m(i=n=await wc.postJson(this._resolveHomeServerUrl(`/rooms/${qe(t)}/join`),
null!=e?e:{},{Authorization:`Bearer ${r}`}))&&I(i,["room_id"])&&ue(null==i?void 0:i.room_id)))throw Wc.debug(
"response = ",n),new TypeError(`Could not join to ${t}: Response was not MatrixJoinRoomResponseDTO: `+n)
;return Wc.debug(`Joined to room ${t}: `,n),n}catch(e){if(this.isAlreadyInTheRoom(null==e?void 0:e.body))return{
room_id:t};throw Wc.debug(`Could not join to room ${t}: `,e),e}}async sync(e){var t;if(Wc.info("sync with ",e),!(
t=this._accessToken))throw new TypeError(`sync: Client ${this._userId} did not have access token`);var{filter:r,since:n,
full_state:i,set_presence:o,timeout:e}=e;const s={};if(void 0!==r)if(p(r))s.filter=r;else{if(!K(r))throw new TypeError(
`Invalid value for filter option: ${r}`);s.filter=JSON.stringify(r)}if(void 0!==n&&(s.since=n),void 0!==i&&(
s.full_state=i?"true":"false"),void 0!==o&&(s.set_presence=o),void 0!==e&&(s.timeout=`${e}`),e=ol(ji(P(s),e=>{var t=s[e]
;return`${qe(e)}=${qe(t)}`}),"&"),!(m(t=e=await wc.getJson(this._resolveHomeServerUrl(`/sync?${e}`),{
Authorization:`Bearer ${t}`}))&&I(t,["next_batch","rooms","presence","account_data","to_device","device_lists",
"device_one_time_keys_count"])&&p(null==t?void 0:t.next_batch)&&(v(null==t?void 0:t.rooms)||Ge(null==t?void 0:t.rooms)
)&&(v(null==t?void 0:t.presence)||He(null==t?void 0:t.presence))&&(v(null==t?void 0:t.account_data)||be(
null==t?void 0:t.account_data))&&(v(null==t?void 0:t.to_device)||Be(null==t?void 0:t.to_device))&&(v(
null==t?void 0:t.device_lists)||xe(null==t?void 0:t.device_lists))&&(v(null==t?void 0:t.device_one_time_keys_count)||Je(
null==t?void 0:t.device_one_time_keys_count))))throw Wc.debug("_sync: response not MatrixSyncResponseDTO: ",
JSON.stringify(e,null,2)),new TypeError(`Response was not MatrixSyncResponseDTO: ${We(e)}`);return e}isAlreadyInTheRoom(
e){if(Ke(e)){var t=null!==(t=null==e?void 0:e.errcode)&&void 0!==t?t:"";const r=null!==(e=null==e?void 0:e.error
)&&void 0!==e?e:"";if(t===Cl.M_FORBIDDEN&&0<=r.indexOf("already in the room"))return!0}return!1}_sendMatrixEventList(e,t
){Ks(e,e=>{this._sendMatrixEvent(e,t)})}_sendMatrixEvent(e,t){this._observer.triggerEvent(bl.EVENT,t?O(O({},e),{},{
room_id:t}):e)}_onTimeout(){if(this._syncing)Wc.warn("Warning! Already syncing...");else{var e=this._nextBatch;if(!e
)throw new TypeError("_onTimeout: No nextBatch defined");this._syncing=!0,this._syncSince(e).then(()=>{this._syncing=!1,
void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime)},e=>{this._syncing=!1,Wc.error("ERROR: ",e),void 0!==this._timer&&(clearTimeout(this._timer),
this._timer=void 0),this._timer=setTimeout(this._timeoutCallback,this._pollWaitTime)})}}_normalizeRoomName(e){if(!e||!p(
e))throw new TypeError(`_normalizeRoomName: name is invalid: ${e}`);return(e="#"!==e[0]?`#${e}`:e).indexOf(":"
)<0?`${e}:${this.getHomeServerName()}`:e}async _initSync(){var e,t;if(Wc.info("Initial sync request started"),
this._state!==Rl.AUTHENTICATED)throw new TypeError("_initSync: Client was not authenticated");if(!this._accessToken
)throw new TypeError("_initSync: Client did not have access token");this._state=Rl.AUTHENTICATED_AND_STARTING,
e=await this.sync({filter:{room:{timeline:{limit:1}}}}),Wc.info("Initial sync response received"),(t=e.next_batch
)?this._nextBatch=t:Wc.error("No next_batch in the response: ",e),this._timer=setTimeout(this._timeoutCallback,
this._pollWaitTime),Wc.info("Timer started..."),this._state=Rl.AUTHENTICATED_AND_STARTED}async _syncSince(e){var t,r,n,i
,o;if(!this._accessToken)throw new TypeError("_syncSince: Client did not have access token");(e=(t=await this.sync({
since:e,timeout:this._pollTimeout})).next_batch)?this._nextBatch=e:Wc.error("No next_batch in the response: ",t),r=Co(
null!=t&&t.presence&&null!==(e=null==(e=null==t?void 0:t.presence)?void 0:e.events)&&void 0!==e?e:[],
null!=t&&t.account_data?Ce(null==t?void 0:t.account_data):[],null!=t&&t.to_device&&null!==(r=null==(
r=null==t?void 0:t.to_device)?void 0:r.events)&&void 0!==r?r:[]),this._sendMatrixEventList(r,void 0);const s=null!==(
n=null==t||null===(n=t.rooms)||void 0===n?void 0:n.join)&&void 0!==n?n:{};n=P(s),Ks(n,e=>{var t,r=(r=s[e],Co([],
null!=r&&r.state?ge(null==r?void 0:r.state):[],null!=r&&r.timeline?me(null==r?void 0:r.timeline):[],
null!=r&&r.ephemeral?(t=null==r?void 0:r.ephemeral,Co([],null!==(t=null==t?void 0:t.events)&&void 0!==t?t:[])):[],
null!=r&&r.account_data?Ce(null==r?void 0:r.account_data):[]));this._sendMatrixEventList(r,e)});const a=null!==(
i=null==t||null===(i=t.rooms)||void 0===i?void 0:i.invite)&&void 0!==i?i:{};i=P(a),Ks(i,e=>{var t=null!==(t=null==(t=(
t=a[e]).invite_state)?void 0:t.events)&&void 0!==t?t:[];this._sendMatrixEventList(t,e)});const l=null!==(
o=null==t||null===(o=t.rooms)||void 0===o?void 0:o.leave)&&void 0!==o?o:{};o=P(l),Ks(o,e=>{var t=l[e],t=Co([],ge(
null==t?void 0:t.state),me(null==t?void 0:t.timeline),Ce(null==t?void 0:t.account_data));this._sendMatrixEventList(t,e)}
)}_resolveHomeServerUrl(e){var t=this._homeServerUrl
;return`${t}${"/"===t[t.length-1]?"":"/"}_matrix/client/r0${"/"===e[0]?"":"/"}${e}`}_resolveSynapseServerUrl(e){
var t=this._homeServerUrl;return`${t}${"/"===t[t.length-1]?"":"/"}_synapse/admin/v1${"/"===e[0]?"":"/"}${e}`}}l(Vc,
"Event",bl),(ou=su=su||{}).PRIVATE_CHAT="private_chat",ou.PUBLIC_CHAT="public_chat",
ou.TRUSTED_PRIVATE_CHAT="trusted_private_chat",Il=su,(su=au=au||{}).INVITED="invited",su.JOINED="joined",
su.SHARED="shared",su.WORLD_READABLE="world_readable",Dl=au,(au=lu=lu||{}).PUBLIC="public",au.KNOCK="knock",
au.INVITE="invite",au.PRIVATE="private",au.RESTRICTED="restricted",Ol=lu,(lu=uu=uu||{}).CAN_JOIN="can_join",
lu.FORBIDDEN="forbidden",Ll=uu;const Kc=dc.createLogger("MatrixCrudRepository");class qc{constructor(e,t,r=void 0,
n=void 0,i=void 0,o=void 0,s=void 0,a=void 0){l(this,"_client",void 0),l(this,"_serviceAccount",void 0),l(this,
"_stateType",void 0),l(this,"_stateKey",void 0),l(this,"_deletedType",void 0),l(this,"_deletedKey",void 0),l(this,
"_allowedGroups",void 0),l(this,"_allowedEvents",void 0),this._client=e,this._stateType=t,this._stateKey=null!=r?r:"",
this._serviceAccount=null!=n?n:void 0,this._deletedType=null!==(i=L(i))&&void 0!==i?i:yl.FI_NOR_DELETED,
this._deletedKey=null!=o?o:"",this._allowedEvents=a,this._allowedGroups=void 0===s?void 0:[...s]}async getAll(){var e,t,
r=await this._client.sync({filter:{presence:{limit:0},account_data:{limit:0},room:{account_data:{limit:0},ephemeral:{
limit:0},timeline:{limit:0},state:{limit:1,include_redundant_members:!0,types:[this._stateType],not_types:[
this._deletedType]}}},full_state:!0});Kc.debug("getAll: response = ",JSON.stringify(r,null,2));const n=null!==(
e=null==r||null===(e=r.rooms)||void 0===e?void 0:e.join)&&void 0!==e?e:{};t=null!==(t=null==r||null===(t=r.rooms
)||void 0===t?void 0:t.invite)&&void 0!==t?t:{};const i=P(n);if(Kc.debug("joinedRooms = ",i),t=P(t),Kc.debug(
"invitedRooms = ",t),(t=Hs(t,e=>!i.includes(e))).length){Kc.debug("Joining to rooms = ",t);let r=0;if(await ts(t,async(e
,t)=>{await e;try{Kc.debug("Joining to room = ",t),await this._client.joinRoom(t),r+=1}catch(e){Kc.warn(
`Warning! Could not join client to room ${t}`)}},Promise.resolve()),1<=r)return Kc.debug(
"Fetching results again after joining"),this.getAll()}return ts(i,(e,i)=>{var t=n[i],r=Hs(null!==(r=null==t||null===(
r=t.state)||void 0===r?void 0:r.events)&&void 0!==r?r:[],e=>{var t;return(null==e?void 0:e.type)===this._stateType&&(
null==e?void 0:e.state_key)===this._stateKey&&Ha(null==e||null===(t=e.content)||void 0===t?void 0:t.version)})
;return Co(e,ji(r,e=>{var t=null!==(t=null==e||null===(t=e.content)||void 0===t?void 0:t.data)&&void 0!==t?t:{},
r=null==e||null===(r=e.content)||void 0===r?void 0:r.version,n=!(null==e||null===(n=e.content)||void 0===n||!n.deleted)
;return{data:t,id:i,version:r,deleted:n}}))},[])}async getAllByProperty(t,r){var e=await this.getAll();return ji(Hs(e,
e=>oi(null==e?void 0:e.data,t)===r),e=>({id:e.id,version:e.version,data:e.data}))}async createItem(e,t){var r,n,i
;const o=this._client.getUserId();Kc.debug("createItem: clientUserId = ",o),r={data:e,version:1},Kc.debug(
"createItem: content = ",r),n=null===(i=this._serviceAccount)||void 0===i?void 0:i.getUserId(),Kc.debug(
"createItem: serviceAccountId = ",n),i=Hs(ps(Co(n?[n]:[],t||[])),e=>e!==o),Kc.debug("createItem: invitedMembers = ",i),
n=this._allowedGroups,Kc.debug("createItem: allowedGroups = ",n),t={[yl.M_FEDERATE]:!1};const s=[{type:this._stateType,
state_key:this._stateKey,content:r},{type:yl.M_ROOM_HISTORY_VISIBILITY,state_key:"",content:{
history_visibility:Dl.SHARED}},{type:yl.M_ROOM_GUEST_ACCESS,state_key:"",content:{guest_access:Ll.FORBIDDEN}}]
;void 0!==n&&s.push({type:yl.M_ROOM_JOIN_RULES,state_key:"",content:{join_rule:Ol.RESTRICTED,allow:ji(n,e=>({
type:yl.M_ROOM_MEMBERSHIP,room_id:e}))}}),Kc.debug("createItem: initialState = ",s),n=i.length?{invite:i}:{},Kc.debug(
"createItem: inviteOptions = ",n);const a={[this._stateType]:0,[this._deletedType]:0};if(null!==(i=this._allowedEvents
)&&void 0!==i&&i.length&&Ks(this._allowedEvents,e=>{a[e]=0}),t=O(O({},n),{},{preset:Il.PRIVATE_CHAT,creation_content:t,
initial_state:s,room_version:"8",power_level_content_override:{events:a}}),t=await this._client.createRoom(t),Kc.debug(
"createItem: response = ",t),t=t.room_id,Kc.debug("createItem: room_id = ",t),
this._serviceAccount&&o&&o!==this._serviceAccount.getUserId())try{await this._serviceAccount.joinRoom(t)}catch(e){
Kc.warn(`Warning! Could not join service account to room ${t}: `,e)}return{id:t,version:1,data:e,deleted:!1}}
async findById(e,t){var r,n=await this._client.getRoomStateByType(e,this._stateType,this._stateKey);if(Kc.debug(
"response = ",JSON.stringify(n,null,2)),!K(r=null==n?void 0:n.data))throw new TypeError(`data was not JsonObject: ${r}`)
;if(!E(n=null==n?void 0:n.version))throw new TypeError(`version was not integer: ${n}`);let i=void 0;if(t){
const o=await this._client.getJoinedMembers(e);i=ji(P(o.joined),e=>{var t=o.joined[e];return{id:e,
displayName:t.display_name,avatarUrl:null!=t&&t.avatar_url?t.avatar_url:void 0}})}return{data:r,id:e,version:n,members:i
}}async update(e,t){var r,n;if(!K(t))throw new TypeError(`jsonData was not JsonObject: ${t}`);if(void 0===(
r=await this.findById(e)))throw new gc(404);if(!E(n=r.version+1))throw new TypeError(`newVersion was not integer: ${n}`)
;return r=await this._client.setRoomStateByType(e,this._stateType,this._stateKey,{data:t,version:n}),Kc.debug(
"response = ",JSON.stringify(r,null,2)),{data:t,id:e,version:n,deleted:!1}}async deleteById(t){var e,r,n,i;try{if(
void 0===(e=await this.findById(t)))throw new gc(404);if(!E(r=e.version+1))throw new TypeError(
`newVersion was not integer: ${r}`);if(n={data:e.data,version:r,deleted:!0},i=await this._client.setRoomStateByType(t,
this._stateType,this._stateKey,n),await this._client.setRoomStateByType(t,this._deletedType,this._deletedKey,{}),
this._serviceAccount){try{await this._serviceAccount.leaveRoom(t)}catch(e){Kc.warn(
`Warning! Service account could not leave from the room ${t}: `,e)}try{await this._serviceAccount.forgetRoom(t)}catch(e
){Kc.warn(`Warning! Service account could not forget the room ${t}: `,e)}}return await this._client.leaveRoom(t),
await this._client.forgetRoom(t),Kc.debug("response = ",JSON.stringify(i,null,2)),{data:e.data,id:t,version:r,deleted:!0
}}catch(e){if(e instanceof gc&&[401,403,404].includes(e.getStatusCode()))throw e;throw Kc.error(
`Error in deleteById(${t}): `,e),new gc(500)}}async inviteToItem(r,e){let n;var t;this._serviceAccount&&(n=null===(
t=this._serviceAccount)||void 0===t?void 0:t.getUserId(),n=n||await this._serviceAccount.whoami()),await ts(e,async(e,t
)=>{if(await e,!n||t!==n)try{await this._client.inviteToRoom(r,t)}catch(e){if(this._client.isAlreadyInTheRoom(
null==e?void 0:e.body))return;throw Kc.error(`Warning! Could not invite user ${t} to room ${r}: `,e),e}},
Promise.resolve())}async subscribeToItem(e){await this._client.joinRoom(e)}}const zc=dc.createLogger("runMatrixResource"
);(Pl=Pl||{}).ON_EXIT="NodeSystemProcess:onExit";const Xc=dc.createLogger("NodeSystemProcess");class Yc{constructor(e,t,
r,n=!0){l(this,"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_stdoutCallback",void 0),l(this,
"_stderrCallback",void 0),l(this,"_closeCallback",void 0),l(this,"_observer",void 0),l(this,"_process",void 0),l(this,
"_printToParentProcess",void 0),l(this,"_stdoutChunks",void 0),l(this,"_stderrChunks",void 0),l(this,"_exitStatus",
void 0),this._observer=new Oc("NodeSystemProcess"),this._process=void 0,this._command=e,this._args=t,this._env=r,
this._printToParentProcess=n,this._closeCallback=this._onClose.bind(this),this._stdoutCallback=this._onStdOut.bind(this)
,this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],this._stderrChunks=[],this._exitStatus=void 0}
start(){const e={};return this._env&&(e.env=this._env),this._process=wu.spawn(this._command,this._args,e),
this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",this._stderrCallback),
this._process.on("close",this._closeCallback),this}stop(){return this._process.kill("SIGTERM"),this}pause(){
return this._process.kill("SIGSTOP"),this}resume(){return this._process.kill("SIGCONT"),this}toString(){
return"NodeSystemProcess"}toJSON(){return{type:"NodeSystemProcess"}}getExitStatus(){return this._exitStatus}
getErrorString(){return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(
this._stdoutChunks).toString("utf8")}destroy(){this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}
_onStdOut(e){this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),
process.stderr.write(e)}_onClose(e){this._exitStatus=e,this._observer.hasCallbacks(Pl.ON_EXIT
)?this._observer.triggerEvent(Pl.ON_EXIT,this):Xc.debug(
`Child process stopped with exit status ${e} -- no listeners detected`)}}l(Yc,"Event",Pl);const Qc=dc.createLogger(
"NodeSystem");class Zc{constructor(){l(this,"_tempFileNames",[])}toString(){return"NodeSystem"}toJSON(){return{
type:"NodeSystem"}}destroy(){Ks(this._tempFileNames,e=>{Qc.debug(`destroy: Deleting temporary file: ${e}`),
this.deleteFile(e)})}pathExists(e){const t=bu.default.statSync(e);return t.isFile()||t.isDirectory()||t.isSocket(
)||t.isBlockDevice()||t.isCharacterDevice()||t.isFIFO()||t.isSymbolicLink()}isFile(e){const t=bu.default.statSync(e)
;return t.isFile()}isDirectory(e){const t=bu.default.statSync(e);return t.isDirectory()}deleteFile(e){this.pathExists(e
)?this.isDirectory(e)?this.deleteDirectory(e):bu.default.unlinkSync(e):Qc.warn(`deleteFile: Path did not exist: ${e}`)}
deleteDirectory(e){this.pathExists(e)?bu.default.rmdirSync(e,{maxRetries:30,retryDelay:100}):Qc.warn(
`deleteDirectory: Path did not exist: ${e}`)}createProcess(e,t,r){return new Yc(e,t,r)}createDirectory(e){
return bu.default.mkdirSync(e),this}getWorkingDirectory(){return process.cwd()}createTemporaryFile(){let e="";do{
var t=Lu.default.randomBytes(20).toString("hex")}while(e=Ou.default.join(this.getWorkingDirectory(),`${t}.tmp`),
bu.default.existsSync(e));if(!e)throw new TypeError("Could not create temp file");return this._tempFileNames.push(e),e}}
(uu=Ul=Ul||{}).STRINGIFY="stringify",uu.PARSE="parse";const ed=dc.createLogger("BaseStepController");(uu=$l={}
).JSON_STARTED="BaseStepController:scriptStarted",uu.JSON_PAUSED="BaseStepController:scriptPaused",
uu.JSON_RESUMED="BaseStepController:scriptResumed",uu.JSON_CANCELLED="BaseStepController:scriptCancelled",
uu.JSON_FAILED="BaseStepController:scriptFailed",uu.JSON_FINISHED="BaseStepController:scriptFinished",
uu.JSON_CHANGED="BaseStepController:scriptChanged";class td{constructor(e,t,r,n,i,o=void 0,s=void 0,a=void 0){if(l(this,
"_context",void 0),l(this,"_observer",void 0),l(this,"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,
"_stepName",void 0),l(this,"_name",void 0),l(this,"_action",void 0),l(this,"_input",void 0),l(this,"_output",void 0),l(
this,"_state",void 0),l(this,"_compiledAction",void 0),l(this,"_compiledInput",void 0),l(this,"_compiledOutput",void 0),
l(this,"_successResult",void 0),l(this,"_errorResult",void 0),!p(r))throw new TypeError(
`[${r}] invalid controller identifier: ${r}`);if(!p(n))throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(
!J(i))throw new TypeError(`[${n}] invalid name: ${i}`);if(!p(s))throw new TypeError(
`[${n}] must have a valid string: ${s}`);if(!v(o)&&!z(o))throw new TypeError(
`[${n}] must have a valid input property: ${JSON.stringify(o)}`);if(!p(a))throw new TypeError(
`[${n}] must have a valid output property: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,
this._stepName=n,this._name=i,this._context=e,this._state=gl.CONSTRUCTED,this._action=s,this._input=o,this._output=a,
this._observer=new Oc(`BaseStepController#${i}`),this._compiledAction=void 0,this._compiledInput=void 0,
this._compiledOutput=void 0,this._successResult=void 0,this._successResult=void 0,this._errorResult=void 0}destroy(){
this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){
return this._context}getState(){return this._state}getName(){return this._name}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`${this._controllerName}`}getStateDTO(){return{
type:this._controllerType,state:this._state,name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(
this._state){case gl.STARTED:return!0;case gl.PAUSED:case gl.CONSTRUCTED:case gl.CANCELLED:case gl.FINISHED:
case gl.FAILED:return!1}}isStarted(){switch(this._state){case gl.STARTED:case gl.PAUSED:return!0;case gl.CONSTRUCTED:
case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}isPaused(){switch(this._state){case gl.PAUSED:return!0
;case gl.CONSTRUCTED:case gl.STARTED:case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}isFinished(){switch(
this._state){case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!0;case gl.CONSTRUCTED:case gl.STARTED:
case gl.PAUSED:return!1}}isSuccessful(){switch(this._state){case gl.FINISHED:return!0;case gl.FAILED:case gl.CANCELLED:
case gl.CONSTRUCTED:case gl.STARTED:case gl.PAUSED:return!1}}isCancelled(){switch(this._state){case gl.CANCELLED:
return!0;case gl.FINISHED:case gl.FAILED:case gl.CONSTRUCTED:case gl.STARTED:case gl.PAUSED:return!1}}isFailed(){switch(
this._state){case gl.FAILED:return!0;case gl.CANCELLED:case gl.FINISHED:case gl.CONSTRUCTED:case gl.STARTED:
case gl.PAUSED:return!1}}start(){var t,r,n,i;try{if(this._state!==gl.CONSTRUCTED)throw new Error(
`[${this._stepName}] was already started`);if(this._state=gl.STARTED,!z(t=this._context.compileModel(this._action))
)throw new Error(`[${this._stepName}] failed to compile the action property: ${jc.toString(this._action)}`);if(
this._compiledAction=t,!v(r=void 0!==this._input?this._context.compileModel(this._input):void 0)&&!z(r))throw new Error(
`[${this._stepName}] failed to compile the input property: ${jc.toString(this._input)}`);if(this._compiledInput=r,!p(
n=this._output?this._context.compileModel(this._output):void 0)&&!v(n))throw new Error(
`[${this._stepName}] failed to compile the output property: ${jc.toString(this._output)}`);if(this._compiledOutput=n,
ed.info(`Starting ${this._stepName} action "${this._compiledAction}" for `,this._compiledInput),
this._observer.hasCallbacks($l.JSON_STARTED)&&this._observer.triggerEvent($l.JSON_STARTED,this),
this._observer.hasCallbacks($l.JSON_CHANGED)&&this._observer.triggerEvent($l.JSON_CHANGED,this),!wt(this.run)
)throw new Error(`[${this._stepName}] the controller did not implement the "run" property`);let e=this.run(
this._compiledAction,this._compiledInput);i=e,mt(i)&&i.then&&i.catch?e.then(e=>{this._successCloseAction(e)},e=>{
this._errorCloseAction(e)}):this._successCloseAction(e)}catch(e){this._errorCloseAction(e)}return this}pause(){
throw new Error(`[${this._stepName}] was not running`)}resume(){throw new Error(`[${this._stepName}] was not paused`)}
stop(){throw new Error(`[${this._stepName}] was not started`)}onStarted(e){return this.on($l.JSON_STARTED,e)}onPaused(e
){return this.on($l.JSON_PAUSED,e)}onResumed(e){return this.on($l.JSON_RESUMED,e)}onCancelled(e){return this.on(
$l.JSON_CANCELLED,e)}onFailed(e){return this.on($l.JSON_FAILED,e)}onFinished(e){return this.on($l.JSON_FINISHED,e)}
onChanged(e){return this.on($l.JSON_CHANGED,e)}getErrorString(){return this._errorResult?`${this._errorResult}`:""}
getOutputString(){return this._successResult?`${this._successResult}`:""}_successCloseAction(e){ed.error(
"Action success: ",e),void 0!==this._compiledOutput?(ed.info(`Saving output as variable "${this._compiledOutput}": `,e),
this._context.setVariable(this._compiledOutput,e)):ed.info("No output target configured for result: ",e),
this._successResult=e,this._state=gl.FINISHED,this._observer.hasCallbacks($l.JSON_FINISHED
)&&this._observer.triggerEvent($l.JSON_FINISHED,this),this._observer.hasCallbacks($l.JSON_CHANGED
)&&this._observer.triggerEvent($l.JSON_CHANGED,this)}_errorCloseAction(e){ed.error("Action failed: ",e),
this._errorResult=e,this._state=gl.FAILED,this._observer.hasCallbacks($l.JSON_FAILED)&&this._observer.triggerEvent(
$l.JSON_FAILED,this),this._observer.hasCallbacks($l.JSON_CHANGED)&&this._observer.triggerEvent($l.JSON_CHANGED,this)}}l(
td,"Event",$l),l(td,"State",gl);const rd=Co(du,["name","json","action","output"]),nd=dc.createLogger("JsonController")
;class id extends td{static parseControllerModel(e){if(Ye(e))return e}static isControllerModel(e){return Ye(e)}
static createController(e,t){return new id(e,t.name,t.json,t.action,t.output)}constructor(e,t,r,n=Ul.STRINGIFY,i=void 0
){super(e,Tl.JSON,`JsonController#${t}`,`json#${t}`,t,r,null!=n?n:Ul.STRINGIFY,i)}run(e,t){if(!function(){switch(e){
case Ul.STRINGIFY:case Ul.PARSE:return 1}}())throw nd.debug("run: action = ",e),new TypeError(`JSON#${this.getName(
)} failed to compile the action property: ${jc.toString(e)}`);if(e===Ul.STRINGIFY){if(!z(t))throw new TypeError(
`JSON#${this.getName()} failed to compile the input property as JSON: ${jc.toString(t)}`);var r=JSON.stringify(t);if(!p(
r))throw nd.debug("run: result = ",r),new TypeError(`Failed to stringify as JSON: ${r}`);return r}if(e!==Ul.PARSE
)throw nd.debug("run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw nd.debug("run: input = ",
t),new TypeError(`JSON#${this.getName()} failed to compile the input property as string: ${jc.toString(t)}`)
;return JSON.parse(t)}}(uu=Fl=Fl||{}).STRINGIFY="stringify",uu.PARSE="parse";const od=Co(du,["name","csv","action",
"output"]),sd=dc.createLogger("CsvController");class ad extends td{static parseControllerModel(e){if(et(e))return e}
static isControllerModel(e){return et(e)}static createController(e,t){return new ad(e,t.name,t.csv,t.action,t.output)}
constructor(e,t,r,n=Fl.STRINGIFY,i=void 0){super(e,Tl.CSV,`CsvController#${t}`,`csv#${t}`,t,r,null!=n?n:Fl.STRINGIFY,i)}
run(e,t){var r,n;if(!function(){switch(e){case Fl.STRINGIFY:case Fl.PARSE:return 1}}())throw sd.debug("run: action = ",e
),new TypeError(`[csv#${this.getName()}] failed to compile the action property: ${jc.toString(e)}`);if(e===Fl.STRINGIFY
){if(!Ze(t))throw new Error(`[csv#${this.getName()}] failed to compile the input property as CSV: ${jc.toString(t)}`)
;if(n="\n",!p(r=ji(t,e=>{return[e,t,r]=[e,",",'"'],ji(e,e=>0!==e.length&&(0<=e.indexOf(t)||e[0]===r)?0<=e.indexOf(r
)?`${r}${e.split(r).join(r+r)}${r}`:`${r}${e}${r}`:e).join(t);var t,r}).join(n)))throw new TypeError(
`[csv#${this.getName()}] Could not stringify CSV: ${r}`);return r}if(e!==Fl.PARSE)throw sd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!p(t))throw sd.debug("run: input = ",t),new TypeError(
`[csv#${this.getName()}] failed to compile the input property as string: ${jc.toString(t)}`);if(n="\n",t=Ze(r=t)?r:(p(r
)||(r=`${r}`),ji(_a(r,n),e=>function(t){if(1!==",".length)throw new TypeError(
"The separator must be exactly 1 character long: ,");if(1!=='"'.length)throw new TypeError(
'The quote must be exactly 1 character long: "');if(Qe(t))return t;p(t)||(t=`${t}`);let r=[],n=0;for(;n<t.length;){
var i=t.indexOf(",",n);if(i<0){r.push(t.substr(n)),n=r.length;break}let e=t.substr(n,i-n);2<=e.length&&qa(e,'"')&&Za(e,
'"')&&(e=e.substr(1,e.length-2).split(e+e).join(e)),r.push(e),n=i+1}return r}(e))),!Ze(t))throw new TypeError(
`[csv#${this.getName()}] Result was not csv: ${t}`);return t}}const ld=Co(du,["name","command","args","env"]),
ud=dc.createLogger("BaseScriptController");(uu=kl={}).SCRIPT_STARTED="BaseScriptController:scriptStarted",
uu.SCRIPT_PAUSED="BaseScriptController:scriptPaused",uu.SCRIPT_RESUMED="BaseScriptController:scriptResumed",
uu.SCRIPT_CANCELLED="BaseScriptController:scriptCancelled",uu.SCRIPT_FAILED="BaseScriptController:scriptFailed",
uu.SCRIPT_FINISHED="BaseScriptController:scriptFinished",uu.SCRIPT_CHANGED="BaseScriptController:scriptChanged"
;class cd{constructor(e,t,r,n,i,o,s=[],a={}){if(l(this,"_context",void 0),l(this,"_observer",void 0),l(this,
"_controllerType",void 0),l(this,"_controllerName",void 0),l(this,"_stepName",void 0),l(this,"_name",void 0),l(this,
"_command",void 0),l(this,"_args",void 0),l(this,"_env",void 0),l(this,"_closeCallback",void 0),l(this,
"_compiledCommand",void 0),l(this,"_compiledArgs",void 0),l(this,"_compiledEnv",void 0),l(this,"_systemProcess",void 0),
l(this,"_state",void 0),!p(r))throw new TypeError(`[${n}] invalid controller identifier: ${r}`);if(!p(n)
)throw new TypeError(`[${n}] invalid step identifier: ${n}`);if(!J(i))throw new TypeError(`[${n}] name invalid: ${i}`)
;if(!p(o))throw new TypeError(`[${n}#${i}] must have a valid command: ${o}`);if(!d(s,p,0))throw new TypeError(
`${n}#${i} must have a valid args: ${JSON.stringify(s)}`);if(!y(a,p,p))throw new TypeError(
`${n}#${i} must have a valid env: ${JSON.stringify(a)}`);this._controllerType=t,this._controllerName=r,this._stepName=n,
this._context=e,this._state=gl.CONSTRUCTED,this._name=i,this._command=o,this._args=s,this._env=a,this._observer=new Oc(
`BaseScriptController#${i}`),this._closeCallback=this._onClose.bind(this),this._compiledCommand=void 0,
this._compiledArgs=void 0,this._compiledEnv=void 0,this._systemProcess=void 0}destroy(){this._observer.destroy(),
this.isPaused()?this.resume().stop():this.isRunning()&&this.stop()}getContext(){return this._context}getState(){
return this._state}getName(){return this._name}on(e,t){return this._observer.listenEvent(e,t)}toString(){
return`BaseScriptController#${this._name}`}getStateDTO(){return{type:this._controllerType,state:this._state,
name:this._name}}toJSON(){return this.getStateDTO()}isRunning(){switch(this._state){case gl.STARTED:return!0
;case gl.PAUSED:case gl.CONSTRUCTED:case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}isStarted(){switch(
this._state){case gl.STARTED:case gl.PAUSED:return!0;case gl.CONSTRUCTED:case gl.CANCELLED:case gl.FINISHED:
case gl.FAILED:return!1}}isPaused(){switch(this._state){case gl.PAUSED:return!0;case gl.CONSTRUCTED:case gl.STARTED:
case gl.CANCELLED:case gl.FINISHED:case gl.FAILED:return!1}}isFinished(){switch(this._state){case gl.CANCELLED:
case gl.FINISHED:case gl.FAILED:return!0;case gl.CONSTRUCTED:case gl.STARTED:case gl.PAUSED:return!1}}isSuccessful(){
switch(this._state){case gl.FINISHED:return!0;case gl.FAILED:case gl.CANCELLED:case gl.CONSTRUCTED:case gl.STARTED:
case gl.PAUSED:return!1}}isCancelled(){switch(this._state){case gl.CANCELLED:return!0;case gl.FINISHED:case gl.FAILED:
case gl.CONSTRUCTED:case gl.STARTED:case gl.PAUSED:return!1}}isFailed(){switch(this._state){case gl.FAILED:return!0
;case gl.CANCELLED:case gl.FINISHED:case gl.CONSTRUCTED:case gl.STARTED:case gl.PAUSED:return!1}}start(){var e,t,r;if(
this._state!==gl.CONSTRUCTED)throw new Error(`${this._stepName}#${this._name} was already started`);if(
this._state=gl.STARTED,!p(e=this._context.compileModel(this._command)))throw new Error(
`${this._stepName}#${this._name} failed to compile the command: ${this._command}`);if(this._compiledCommand=e,!d(
t=this._context.compileModel(this._args),p))throw new Error(
`${this._stepName}#${this._name} failed to compile args: ${this._args.join(" ")}`);if(this._compiledArgs=t,!y(
r=this._context.compileModel(this._env),p,p))throw new Error(
`${this._stepName}#${this._name} failed to compile environment: ${JSON.stringify(this._env,null,2)}`)
;this._compiledEnv=r,ud.info(`Starting command "${this._compiledCommand}" with args: "${this._compiledArgs.join('", "'
)}"`);const n=this._context.getSystem();return this._systemProcess=n.createProcess(e,t,this._compiledEnv),
this._systemProcess.on(Pl.ON_EXIT,this._closeCallback),this._systemProcess.start(),this._observer.hasCallbacks(
kl.SCRIPT_STARTED)&&this._observer.triggerEvent(kl.SCRIPT_STARTED,this),this._observer.hasCallbacks(kl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(kl.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`${this._stepName}#${this._name} was not running`);if(!this._systemProcess)throw new Error("No process initialized")
;return ud.info(`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=gl.PAUSED,
this._systemProcess.pause(),this._observer.hasCallbacks(kl.SCRIPT_PAUSED)&&this._observer.triggerEvent(kl.SCRIPT_PAUSED,
this),this._observer.hasCallbacks(kl.SCRIPT_CHANGED)&&this._observer.triggerEvent(kl.SCRIPT_CHANGED,this),this}resume(){
if(!this.isPaused())throw new Error(`${this._stepName}#${this._name} was not paused`);if(!this._systemProcess
)throw new Error("No process initialized");return ud.info(`Resuming command "${this._command} ${this._args.join(" ")}"`)
,this._state=gl.STARTED,this._systemProcess.resume(),this._observer.hasCallbacks(kl.SCRIPT_RESUMED
)&&this._observer.triggerEvent(kl.SCRIPT_RESUMED,this),this._observer.hasCallbacks(kl.SCRIPT_CHANGED
)&&this._observer.triggerEvent(kl.SCRIPT_CHANGED,this),this}stop(){if(this._state!==gl.STARTED)throw new Error(
`${this._stepName}#${this._name} was not started`);if(!this._systemProcess)throw new Error("No process initialized")
;return ud.debug(`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=gl.CANCELLED,
this._systemProcess.stop(),this._observer.hasCallbacks(kl.SCRIPT_CANCELLED)&&this._observer.triggerEvent(
kl.SCRIPT_CANCELLED,this),this._observer.hasCallbacks(kl.SCRIPT_CHANGED)&&this._observer.triggerEvent(kl.SCRIPT_CHANGED,
this),this}onStarted(e){return this.on(kl.SCRIPT_STARTED,e)}onPaused(e){return this.on(kl.SCRIPT_PAUSED,e)}onResumed(e){
return this.on(kl.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(kl.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(
kl.SCRIPT_FAILED,e)}onFinished(e){return this.on(kl.SCRIPT_FINISHED,e)}onChanged(e){return this.on(kl.SCRIPT_CHANGED,e)}
getErrorString(){return this._systemProcess?this._systemProcess.getErrorString():""}getOutputString(){
return this._systemProcess?this._systemProcess.getOutputString():""}_onClose(e,t){t=t.getExitStatus(),ud.debug(
`Child process stopped with exit status ${t}`),0===t?(this._state=gl.FINISHED,this._observer.hasCallbacks(
kl.SCRIPT_FINISHED)&&this._observer.triggerEvent(kl.SCRIPT_FINISHED,this)):(this._state=gl.FAILED,
this._observer.hasCallbacks(kl.SCRIPT_FAILED)&&this._observer.triggerEvent(kl.SCRIPT_FAILED,this)),
this._observer.hasCallbacks(kl.SCRIPT_CHANGED)&&this._observer.triggerEvent(kl.SCRIPT_CHANGED,this)}}l(cd,"Event",kl),l(
cd,"State",gl);class dd extends cd{static parseControllerModel(e){if(tt(e))return e}static isControllerModel(e){
return tt(e)}static createController(e,t){return new dd(e,t.name,t.command,t.args,t.env)}constructor(e,t,r,n=[],i={}){
super(e,Tl.SCRIPT,"ScriptController","command",t,r,n,i)}}(Ml=Ml||{}).MKDIR="mkdir";const hd=Co(du,["name","file",
"target","output"]),_d=dc.createLogger("FileController");class Ed extends td{static parseControllerModel(e){if(rt(e)
)return e}static isControllerModel(e){return rt(e)}static createController(e,t){return new Ed(e,t.name,t.target,t.file,
t.output)}constructor(e,t,r,n,i=void 0){super(e,Tl.FILE,`FileController#${t}`,`file#${t}`,t,r,n,i)}run(e,t){
const r=this.getContext(),n=r.getSystem();if(e!==Ml.MKDIR)throw _d.debug("run: action = ",e),new TypeError(
`[file#${this.getName()}] failed to compile the action property: ${jc.toString(e)}`);if(e!==Ml.MKDIR)throw _d.debug(
"run: action = ",e),new TypeError(`Unimplemented action: ${e}`);if(!f(t))throw new TypeError(`[file#${this.getName(
)}] failed to compile the target property: ${jc.toString(t)}`);return void 0===t?(t=n.createTemporaryFile(),
n.createDirectory(t),_d.info(`Created temporary directory: ${t}`)):(n.createDirectory(t),_d.info(
`Created directory: ${t}`)),t}}const vd=Co(du,["name","variable","set"]);(Gl=Gl||{}).SET="set",jl=Gl
;const pd=dc.createLogger("VariableController");class fd extends td{static parseControllerModel(e){if(nt(e))return e}
static isControllerModel(e){return nt(e)}static createController(e,t){return new fd(e,t.name,t.set,jl.SET,t.variable)}
constructor(e,t,r,n=void 0,i=void 0){super(e,Tl.VARIABLE,`VariableController#${t}`,`variable#${t}`,t,r,n,i)}run(e,t){if(
e!==Gl.SET)throw pd.debug("run: action = ",e),new TypeError(`variable#${this.getName(
)} failed to compile the action property: ${jc.toString(e)}`);if(e!==jl.SET)throw pd.debug("run: action = ",e),
new TypeError(`Unimplemented action: ${e}`);if(!z(t))throw new TypeError(`variable#${this.getName(
)} failed to compile the input property as variable: ${jc.toString(t)}`);return t}}const gd=Co(du,["name","git","url",
"target"]);(Hl=Hl||{}).CLONE="clone",Bl=Hl;class Td extends cd{static parseControllerModel(e){if(it(e))return e}
static isControllerModel(e){return it(e)}static createController(e,t){if(t.git!==Bl.CLONE)throw new TypeError(
`Unknown git action: ${t.git}`);var r=t.target,n=t.url;return new Td(e,t.name,"git",["clone",n,r],{
GIT_TERMINAL_PROMPT:"0",GIT_ASKPASS:"/bin/echo"})}constructor(e,t,r,n=[],i={}){super(e,Tl.GIT,"GitController","git",t,r,
n,i)}}dc.createLogger("waitHttpResource"),dc.createLogger("waitLocalResource");const Sd=dc.createLogger(
"waitMatrixResource"),Ad=dc.createLogger("main");dc.setLogLevel(qu),async function(n=[]){var i,o,s;let a;try{if(class{
static registerControllers(){Gc.registerController(fd),Gc.registerController(Td),Gc.registerController(Ed),
Gc.registerController(id),Gc.registerController(ad),Gc.registerController(dd)}}.registerControllers(),Ad.debug(
`Loglevel ${dc.getLogLevelString()}`),i=oc,n.shift(),!n.shift())return console.log(B(i)),_l.ARGUMENT_PARSE_ERROR;if(
0===n.length)return console.log(B(i)),_l.ARGUMENT_PARSE_ERROR;let t=!1,r=!0;do{if(o=n.shift(),r){let e=!1;switch(
function(){switch(o){case"-h":case"--help":case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:
return 2;case"-w":case"--wait":case 3:return 3}}()){case 0:return console.log(B(i)),_l.OK;case 1:return console.log(
function(e){const t=Hs([Zu?"LOCAL":"",ec?"HTTP":"",tc?"MATRIX":"",nc?"TEST":"",ic?"DEV":""],e=>!!e)
;return`${e} v${Xu} [${t.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${Xu}'
  BUILD_NODE_ENV              = '${Yu}'
  BUILD_DATE                  = '${Qu}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Zu}'
  BUILD_WITH_HTTP_RESOURCES   = '${ec}'
  BUILD_WITH_MATRIX_RESOURCES = '${tc}'
`}(i)),_l.OK;case 3:t=!0,e=!0;break;case 2:r=!1,e=!0}if(!r||e)continue}if(void 0===(s=Ec.parseRunnerResource(o))
)return Ad.error(`Unsupported argument: ${o}`),console.log(B(i)),_l.UNKNOWN_ARGUMENT;a=new Zc;let e=await Xe(a,s);if(
t&&e===_l.NO_WORK_AVAILABLE&&(await async function(e){switch(e.type){case ul.HTTP:
return ec?_l.UNIMPLEMENTED_FEATURE:_l.UNBUILD_FEATURE;case ul.LOCAL:
return Zu?_l.UNIMPLEMENTED_FEATURE:_l.UNBUILD_FEATURE;case ul.MATRIX:return tc?async function(t){var r,n,i;try{if(
Sd.debug("waitMatrixResource: ",t),j(r=await async function(e,t){if(M(t))return new Vc(e,void 0,void 0,t.access_token)
;if(F(t)){const r=new Vc(e);return r.login(t.username,t.password)}return _l.UNKNOWN_AUTHENTICATION_TYPE}(
`https://${t.homeserver}`,t.authentication)))return r;if(j(n=await async function(e){let t=e.getUserId();return t||(
t=await e.whoami(),t)?(Sd.info(`Agent user ID: ${t}`),t):(Sd.error("Could not detect agent user ID"),_l.UNKNOWN_AGENT_ID
)}(r)))return n;let e=await st(r,i=await async function(e){const t=new qc(e,yl.FI_NOR_AGENT_DTO);return t.getAll()}(r))
;if(e===_l.OK)return _l.OK;do{try{await async function(s,a){return new Promise((i,t)=>{let o;try{o=s.on(bl.EVENT,
function(e,t){var r=null==t?void 0:t.type,n=null==t?void 0:t.room_id;Sd.debug("waitForEvents: Event: ",r,n,t),
r&&a.includes(r)&&(o&&(o(),o=void 0),s.stop(),i())}),s.start()}catch(e){o&&(o(),o=void 0),s.stop(),t(e)}})}(r,[
yl.M_ROOM_CREATE,yl.M_ROOM_JOIN_RULES,yl.M_ROOM_MEMBER])}catch(e){Sd.error("Error while waiting: ",e),await new Promise(
(e,t)=>{try{setTimeout(e,15e3)}catch(e){t(e)}})}}while(e=await st(r,i),e===_l.NO_WORK_AVAILABLE);return e}catch(e){
return Sd.error("Error: ",e),_l.MATRIX_RESOURCE_FAILED}}(e):_l.UNBUILD_FEATURE;default:return _l.UNKNOWN_RESOURCE_TYPE}
}((a,s)),e=await Xe(a,s)),e!==_l.OK)return e===_l.UNKNOWN_RESOURCE_TYPE?(Ad.error(`Error NorPP${e}: ${H(e
)}: Resource type was unknown: ${s.type}`),console.log(B(i)),_l.UNKNOWN_RESOURCE_TYPE):(j(e)?Ad.error(
`Error EX-${e}: ${H(e)}: for ${U(s.type)} resource ${o}`):Ad.error(`Error: Exit status ${e}: for ${U(s.type
)} resource ${o}`),e)}while(1<=n.length);return _l.OK}catch(e){return Ad.error("Fatal error: ",e),_l.FATAL_ERROR
}finally{a&&a.destroy()}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)}
);
