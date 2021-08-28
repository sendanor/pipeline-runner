#!/usr/bin/env node
"use strict";function n(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function E(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?n(
Object(r),!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function t(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}function r(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function i(e){var t,r=-1,n=null==e?0:e.length
;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function o(e){var t,r=-1,n=null==e?0:e.length;for(this.clear(
);++r<n;)t=e[r],this.set(t[0],t[1])}function a(e){e=this.__data__=new we(e),this.size=e.size}function u(e){var t=-1,
r=null==e?0:e.length;for(this.__data__=new Fe;++t<r;)this.add(e[t])}function c(n,s){function i(){var e=arguments,
t=s?s.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),i.cache=r.set(t,e)||r,e)}if(
"function"!=typeof n||null!=s&&"function"!=typeof s)throw new TypeError(gr);return i.cache=new(c.Cache||Cr),i}
function h(e){return void 0===e}function l(e){return xe(e)}function _(e,t=void 0,r=void 0,n=void 0){if(!xe(e))return!1
;var s=null!==(s=null==e?void 0:e.length)&&void 0!==s?s:0;return!(void 0!==r&&s<r)&&!(void 0!==n&&n<s)&&(void 0===t||S(e
,t))}function d(e){return fi(e)}function A(e,t){return mn(e,t)}function S(e,t){return Hn(e,t)}function f(e,t=d,r=void 0
){return!(void 0!==r&&(n=r,!ne(r=e)||!S(Pi(r),n)))&&(t=void 0!==t?t:d,ne(e)&&S(It(e),t));var n}function T(e){return!!ne(
e)&&!(e instanceof Date)&&!oe(e)&&!l(e)&&f(e,d,void 0)}function p(e,t=d,r=void 0){return ne(e)&&!(e instanceof Date
)&&!oe(e)&&!l(e)&&f(e,t,r)}function R(e){return ne(e)}function C(e,t){return R(e)&&0===(r=t,ws(It(e),e=>!r.includes(e)
).length);var r}function g(e){if(void 0!==e&&""!==e)return li(e)?e:["true","t","on","1","enabled"].includes(
`${e}`.toLowerCase())}function N(e){if(void 0!==e&&""!==e)return`${e}`}function v(e){switch(e){case mi.HTTP:return"http"
;case mi.LOCAL:return"local";case mi.MATRIX_ROOM:return"matrix"}throw new TypeError(
`Unsupported RunnerResourceType value: ${e}`)}function D(e){return T(e)&&function(){switch(null==e?void 0:e.type){
case wi.NONE:case wi.BASIC_AUTH:case wi.BEARER_AUTH:return 1;default:return}}()}function b(e){return T(e)&&C(e,["type",
"username","password"])&&(null==e?void 0:e.type)===Fi.BASIC_AUTH&&d(null==e?void 0:e.username)&&d(
null==e?void 0:e.password)}function I(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(b(e))return e
;const s=(e=`${e}`).indexOf(":");if(0<=s){const r=s.substr(0,s),n=s.substr(s+1);return I(r,n)}return I(e,"")}
const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"!==r)return{type:Fi.BASIC_AUTH,username:r,password:n
}}function O(e){return T(e)&&C(e,["type","access_token"])&&(null==e?void 0:e.type)===Fi.BEARER_AUTH&&d(
null==e?void 0:e.access_token)}function L(e,t){if(void 0===t){if(void 0===e)return;if(""===e)return;if(O(e))return e
;const s=(e=`${e}`).indexOf(":");if(0<=s){const r=s.substr(0,s),n=s.substr(s+1);return L(r,n)}return{
type:Fi.BEARER_AUTH,access_token:e}}const r=void 0===e?"":`${e}`,n=`${t}`;if((""!==r||""!==n)&&"_bearer"===r)return{
type:Fi.BEARER_AUTH,access_token:n}}function P(e){if(Gi.FATAL_SIGNAL_RANGE_START<=e&&e<=Gi.FATAL_SIGNAL_RANGE_END
)return`FATAL_SIGNAL_${e-Gi.FATAL_SIGNAL_RANGE_START}`;switch(e){case Gi.OK:return"OK";case Gi.GENERAL_ERRORS:
return"GENERAL_ERRORS";case Gi.MISUSE_OF_SHELL_BUILTINS:return"MISUSE_OF_SHELL_BUILTINS";case Gi.ARGUMENT_PARSE_ERROR:
return"ARGUMENT_PARSE_ERROR";case Gi.UNKNOWN_ARGUMENT:return"UNKNOWN_ARGUMENT";case Gi.UNKNOWN_RESOURCE_TYPE:
return"UNKNOWN_RESOURCE_TYPE";case Gi.RESOURCE_LOAD_FAILED:return"RESOURCE_LOAD_FAILED";case Gi.RESOURCE_MODEL_INVALID:
return"RESOURCE_MODEL_INVALID";case Gi.LOCAL_RESOURCE_FAILED:return"LOCAL_RESOURCE_FAILED";case Gi.HTTP_RESOURCE_FAILED:
return"HTTP_RESOURCE_FAILED";case Gi.MATRIX_RESOURCE_FAILED:return"MATRIX_RESOURCE_FAILED"
;case Gi.UNIMPLEMENTED_FEATURE:return"UNIMPLEMENTED_FEATURE";case Gi.FATAL_ERROR:return"FATAL_ERROR";case Gi.USAGE:
return"USAGE";case Gi.DATAERR:return"DATAERR";case Gi.NOINPUT:return"NOINPUT";case Gi.NOUSER:return"NOUSER"
;case Gi.NOHOST:return"NOHOST";case Gi.UNAVAILABLE:return"UNAVAILABLE";case Gi.SOFTWARE:return"SOFTWARE";case Gi.OSERR:
return"OSERR";case Gi.OSFILE:return"OSFILE";case Gi.CANTCREAT:return"CANTCREAT";case Gi.IOERR:return"IOERR"
;case Gi.TEMPFAIL:return"TEMPFAIL";case Gi.PROTOCOL:return"PROTOCOL";case Gi.NOPERM:return"NOPERM";case Gi.CONFIG:
return"CONFIG";case Gi.COMMAND_INVOKED_CANNOT_EXECUTE:return"COMMAND_INVOKED_CANNOT_EXECUTE";case Gi.COMMAND_NOT_FOUND:
return"COMMAND_NOT_FOUND";case Gi.INVALID_ARGUMENT_TO_EXIT:return"INVALID_ARGUMENT_TO_EXIT"
;case Gi.FATAL_SIGNAL_RANGE_START:return"FATAL_SIGNAL_RANGE_START";case Gi.FATAL_SIGNAL_RANGE_END:
return"FATAL_SIGNAL_RANGE_END";case Gi.EXIT_STATUS_OUT_OF_RANGE:return"EXIT_STATUS_OUT_OF_RANGE"}throw new TypeError(
`Unsupported RunnerExitStatus value: ${e}`)}function U(e){return ta?`USAGE: ${e} ARG(1) [...ARG(N)]

  Executes instructions from various sources.
  
  Instructions in the resource may be type of Pipeline, Stage, Job or Step resource.

...where ARG is one of:${Zo?`

  Instructions from HTTP or HTTPS resource:

      http[s]:// [ USER:PASSWORD@ | _bearer:ACCESS_TOKEN@ ] HOSTNAME [:PORT] [/PATH]
    
    The resource will be executed once loaded.

    Optionally uses HTTP Basic Authentication if USER and PASSWORD is provided.

    Optionally uses Bearer Token Authentication if ACCESS_TOKEN is provided.

    See also PIPELINE_AUTHENTICATION environment variable.
`:""}${ea?`

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
`:""}${Qo?`

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
`}function m(e){if(Ci(e))switch(e){case $i.OPTIONS:return"options";case $i.GET:return"get";case $i.POST:return"post"
;case $i.PUT:return"put";case $i.DELETE:return"delete";case $i.PATCH:return"patch"}throw new TypeError(
`Unsupported value for stringifyRequestMethod(): ${e}`)}function y(e){return!(!fi(t=e)||(t=null!==(
t=null==t?void 0:t.length)&&void 0!==t?t:0)<1||!(e.indexOf(" ")<0));var t}function w(e){return T(e)&&y(
null==e?void 0:e.name)&&d(null==e?void 0:e.command)&&(r=d,(s=n=void 0)===(t=null==e?void 0:e.args)||_(t,r,n,s))&&(s=n=d,
void 0===(r=null==e?void 0:e.env)||p(r,n,s))&&C(e,["name","command","args","env"]);var t,r,n,s}function F(e){return!!w(e
)||!(!T(e)||!y(null==e?void 0:e.name))}function G(e){return T(e)&&y(null==e?void 0:e.name)&&_(null==e?void 0:e.steps,F,1
)&&C(e,["name","steps"])}function j(e){if(G(e))return e}function $(e){return T(e)&&y(null==e?void 0:e.name)&&_(
null==e?void 0:e.jobs,G,1)&&C(e,["name","jobs"])}function H(e){return T(e)&&y(null==e?void 0:e.name)&&_(
null==e?void 0:e.stages,$,1)&&C(e,["name","stages"])}function M(e){var t;return null!==(t=null!==(t=null!==(t=function(e
){if(H(e))return e}(e))&&void 0!==t?t:function(e){if($(e))return e}(e))&&void 0!==t?t:j(e))&&void 0!==t?t:null!==(
e=function(e){if(w(e))return e}(t=e))&&void 0!==e?e:j(t)}function k(e){return R(e)&&oe(null==e?void 0:e.getName)&&oe(
null==e?void 0:e.isRunning)&&oe(null==e?void 0:e.isStarted)&&oe(null==e?void 0:e.isPaused)&&oe(
null==e?void 0:e.isCancelled)&&oe(null==e?void 0:e.isFinished)&&oe(null==e?void 0:e.isFailed)&&oe(
null==e?void 0:e.isSuccessful)&&oe(null==e?void 0:e.start)&&oe(null==e?void 0:e.pause)&&oe(null==e?void 0:e.resume)&&oe(
null==e?void 0:e.stop)&&oe(null==e?void 0:e.destroy)&&oe(null==e?void 0:e.toString)&&oe(null==e?void 0:e.toJSON)&&oe(
null==e?void 0:e.onStarted)&&oe(null==e?void 0:e.onPaused)&&oe(null==e?void 0:e.onResumed)&&oe(
null==e?void 0:e.onCancelled)&&oe(null==e?void 0:e.onFailed)&&oe(null==e?void 0:e.onFinished)&&oe(
null==e?void 0:e.onChanged)}function J(e){return e instanceof Ta}function B(e){return e instanceof Ra}function q(e,t){
return e===t||e!=e&&t!=t}var x,W,V,K,z,X,Y,Q,Z,ee,te,re,ne,se,ie,oe,ae,ue,ce,he,Ee,le,_e,de,Ae,Se,fe,Te,pe,Re,Ce,ge,Ne,
ve,De,be,Ie,Oe,Le,Pe,Ue,me,ye,we,Fe,Ge,je,$e,He,Me,ke,Je,Be,qe,xe,We,Ve,Ke,ze,Xe,Ye,Qe,Ze,et,tt,rt,nt,st,it,ot,at,ut,ct,
ht,Et,lt,_t,dt,At,St,ft,Tt,pt,Rt,Ct,gt,Nt,vt,Dt,bt,It,Ot,Lt,Pt,Ut,mt,yt,wt,Ft,Gt,jt,$t,Ht,Mt,kt,Jt,Bt,qt,xt,Wt,Vt,Kt,zt,
Xt,Yt,Qt,Zt,er,tr,rr,nr,sr,ir,or,ar,ur,cr,hr,Er,lr,_r,dr,Ar,Sr,fr,Tr,pr,Rr,Cr,gr,Nr,vr,Dr,br,Ir,Or,Lr,Pr,Ur,mr,yr,wr,Fr,
Gr,jr,$r,Hr,Mr,kr,Jr,Br,qr,xr,Wr,Vr,Kr,zr,Xr,Yr,Qr,Zr,en,tn,rn,nn,sn,on,an,un,cn,hn,En,ln,_n,dn,An,Sn,fn,Tn,pn,Rn,Cn,gn,
Nn,vn,Dn,bn,In,On,Ln,Pn,Un,mn,yn,wn,Fn,Gn,jn,$n,Hn,Mn,kn,Jn,Bn,qn,xn,Wn,Vn,Kn,zn,Xn,Yn,Qn,Zn,es,ts,rs,ns,ss,is,os,as,us,
cs,hs,Es,ls,_s,ds,As,Ss,fs,Ts,ps,Rs,Cs,gs,Ns,vs,Ds,bs,Is,Os,Ls,Ps,Us,ms,ys,ws,Fs,Gs,js,$s,Hs,Ms,ks,Js,Bs,qs,xs,Ws,Vs,Ks,
zs,Xs,Ys,Qs,Zs,ei,ti,ri,ni,si,ii,oi,ai,ui,ci,hi,Ei,li,_i,di,Ai,Si,fi,Ti,pi,Ri,Ci,gi,Ni,vi,Di,bi,Ii,Oi,Li,Pi,Ui,mi,yi,wi,
Fi,Gi,ji,$i,Hi,Mi,ki,Ji,Bi,qi,xi,Wi,Vi,Ki,zi,Xi,Yi,Qi,Zi,eo,to,ro,no,so,io,oo,ao,uo,co,ho,Eo,lo,_o,Ao,So,fo,To=require(
"querystring"),po=require("url"),Ro=require("path"),Co=require("child_process"),go=require("fs"),No=t(To),vo=e(po),Do=e(
Ro),
bo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Io=function(e,t){for(var r=-1,n=null==e?0:e.length,s=Array(n);++r<n;)s[r]=t(e[r],r,e);return s},Oo=function(){
this.__data__=[],this.size=0},Lo=q,Po=function(e,t){for(var r=e.length;r--;)if(Lo(e[r][0],t))return r;return-1},Uo=Po,
mo=Array.prototype,yo=mo.splice,wo=function(e){var t=this.__data__;return!((e=Uo(t,e))<0||(e==t.length-1?t.pop(
):yo.call(t,e,1),--this.size,0))},Fo=Po,Go=Po,jo=function(e){return-1<Go(this.__data__,e)},$o=Po,Ho=Oo,Mo=wo,
ko=function(e){var t=this.__data__;return(e=Fo(t,e))<0?void 0:t[e][1]},Jo=jo,Bo=function(e,t){var r=this.__data__,n=$o(r
,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};r.prototype.clear=Ho,r.prototype.delete=Mo,r.prototype.get=ko
,r.prototype.has=Jo,r.prototype.set=Bo,K=Xi=r,Yi=function(){this.__data__=new K,this.size=0},qs=function(e){
var t=this.__data__,e=t.delete(e);return this.size=t.size,e},zi=function(e){return this.__data__.get(e)},eo=function(e){
return this.__data__.has(e)},Zi="object"==typeof bo&&bo&&bo.Object===Object&&bo,
Sr="object"==typeof self&&self&&self.Object===Object&&self,Lr=os=(Eo=Zi||Sr||Function("return this")()).Symbol,
Qi=Object.prototype,z=Qi.hasOwnProperty,X=Qi.toString,Y=Lr?Lr.toStringTag:void 0,Bs=Object.prototype,Q=Bs.toString,
Z=function(e){var t,r,n=z.call(e,Y),s=e[Y];try{t=!(e[Y]=void 0)}catch(e){}return r=X.call(e),t&&(n?e[Y]=s:delete e[Y]),r
},ee=function(e){return Q.call(e)},te=(xr=os)?xr.toStringTag:void 0,se=re=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(te&&te in Object(e)?Z:ee)(e)},ie=ne=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},oe=function(e){return!!ie(e)&&("[object Function]"==(e=se(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},at=Eo["__core-js_shared__"],
no=/[^.]+$/.exec((ut=at)&&ut.keys&&ut.keys.IE_PROTO||""),ae=no?"Symbol(src)_1."+no:"",ct=Function.prototype,
ue=ct.toString,ce=oe,he=function(e){return!!ae&&ae in e},Ee=ne,le=yt=function(e){if(null!=e){try{return ue.call(e)
}catch(e){}try{return e+""}catch(e){}}return""},To=/[\\^$.*+?()[\]{}|]/g,_e=/^\[object .+?Constructor\]$/,
po=Function.prototype,Ro=Object.prototype,mo=po.toString,Po=Ro.hasOwnProperty,de=RegExp("^"+mo.call(Po).replace(To,
"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=function(e){return!(!Ee(e
)||he(e))&&(ce(e)?de:_e).test(le(e))},Se=function(e,t){return null==e?void 0:e[t]},wo=(Oo=function(e,t){return t=Se(e,t)
,Ae(t)?t:void 0})(Eo,"Map"),So=Oo(Object,"create"),Te=fe=jo=So,fo=Object.prototype,pe=fo.hasOwnProperty,Re=jo,
Ho=Object.prototype,Ce=Ho.hasOwnProperty,ge=jo,Mo=function(e){return e=this.has(e)&&delete this.__data__[e],
this.size-=e?1:0,e},ko=function(e){var t,r=this.__data__;return Te?"__lodash_hash_undefined__"===(t=r[e]
)?void 0:t:pe.call(r,e)?r[e]:void 0},Jo=function(e){var t=this.__data__;return Re?void 0!==t[e]:Ce.call(t,e)},
Bo=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ge&&void 0===t?"__lodash_hash_undefined__":t
,this},i.prototype.clear=function(){this.__data__=fe?fe(null):{},this.size=0},i.prototype.delete=Mo,i.prototype.get=ko,
i.prototype.has=Jo,i.prototype.set=Bo,Ne=i,ve=Xi,De=wo,bo=function(){this.size=0,this.__data__={hash:new Ne,map:new(
De||ve),string:new Ne}},be=function(e){var t=typeof e
;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Pe=Le=Oe=Ie=function(e,t){
return e=e.__data__,be(t)?e["string"==typeof t?"string":"hash"]:e.map},Ye=function(e){return e=Ie(this,e).delete(e),
this.size-=e?1:0,e},Sr=function(e){return Oe(this,e).get(e)},zn=function(e){return Le(this,e).has(e)},Qi=function(e,t){
var r=Pe(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},o.prototype.clear=bo,o.prototype.delete=Ye,
o.prototype.get=Sr,o.prototype.has=zn,o.prototype.set=Qi,me=wo,ye=Lr=o,we=Ue=Xi,Bs=qs,xr=zi,at=eo,ut=function(e,t){var r
,n=this.__data__;if(n instanceof Ue){if(r=n.__data__,!me||r.length<199)return r.push([e,t]),this.size=++n.size,this
;n=this.__data__=new ye(r)}return n.set(e,t),this.size=n.size,this},a.prototype.clear=Yi,a.prototype.delete=Bs,
a.prototype.get=xr,a.prototype.has=at,a.prototype.set=ut,no=a,Fe=Lr,ct=function(e){return this.__data__.has(e)},
u.prototype.add=u.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},
u.prototype.has=ct,Ge=u,je=po=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},
$e=function(e,t){return e.has(t)},Ro=function(e,t,r,n,s,i){var o,a,u,c,h,E,l,_=1&r,d=e.length,A=t.length;if(d!=A&&!(
_&&d<A))return!1;if(o=i.get(e),A=i.get(t),o&&A)return o==t&&A==e;for(a=-1,u=!0,c=2&r?new Ge:void 0,i.set(e,t),i.set(t,e
);++a<d;){if(h=e[a],E=t[a],void 0!==(l=n?_?n(E,h,a,t,e,i):n(h,E,a,e,t,i):l)){if(l)continue;u=!1;break}if(c){if(!je(t,
function(e,t){if(!$e(c,t)&&(h===e||s(h,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(h!==E&&!s(h,E,r,n,i)){u=!1
;break}}return i.delete(e),i.delete(t),u},mo=Eo.Uint8Array,He=mo,Me=q,ke=Ro,Je=function(e){var r=-1,n=Array(e.size)
;return e.forEach(function(e,t){n[++r]=[t,e]}),n},Be=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){
r[++t]=e}),r},To=(Po=os)?Po.prototype:void 0,qe=To?To.valueOf:void 0,So=function(e,t,r,n,s,i,o){var a,u;switch(r){
case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer
;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new He(e),new He(t)));case"[object Boolean]":
case"[object Date]":case"[object Number]":return Me(+e,+t);case"[object Error]":
return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+""
;case"[object Map]":u=Je;case"[object Set]":return u=u||Be,!!(e.size==t.size||1&n)&&((a=o.get(e))?a==t:(n|=2,o.set(e,t),
u=ke(u(e),u(t),n,s,i,o),o.delete(e),u));case"[object Symbol]":if(qe)return qe.call(e)==qe.call(t)}return!1},fo=function(
e,t){for(var r=-1,n=t.length,s=e.length;++r<n;)e[s+r]=t[r];return e},Ho=Array.isArray,We=fo,Ve=xe=Ho,jo=function(e,t,r){
return t=t(e),Ve(e)?t:We(t,r(e))},Ke=Mo=function(e,t){for(var r,n=-1,s=null==e?0:e.length,i=0,o=[];++n<s;)t(r=e[n],n,e
)&&(o[i++]=r);return o},ko=Object.prototype,ze=ko.propertyIsEnumerable,Jo=(Xe=Object.getOwnPropertySymbols)?function(t){
return null==t?[]:(t=Object(t),Ke(Xe(t),function(e){return ze.call(t,e)}))}:function(){return[]},Bo=function(e,t){for(
var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Qe=re,bo=function(e){return Ze(e)&&"[object Arguments]"==Qe(e)},
et=Ze=Ye=function(e){return null!=e&&"object"==typeof e},Sr=Object.prototype,tt=Sr.hasOwnProperty,
rt=Sr.propertyIsEnumerable,zn=bo(function(){return arguments}())?bo:function(e){return et(e)&&tt.call(e,"callee"
)&&!rt.call(e,"callee")},Qi=Eo,Xi=function(){return!1},Qi=(Qi=(Yi=(eo=(Yi=(eo=(zi=qs={exports:{}}).exports
)&&!eo.nodeType&&eo)&&zi&&!zi.nodeType&&zi)&&eo.exports===Yi)?Qi.Buffer:void 0)?Qi.isBuffer:void 0,zi.exports=Xi=Qi||Xi,
nt=/^(?:0|[1-9]\d*)$/,Bs=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&nt.test(e))&&-1<e&&e%1==0&&e<t},st=re,it=xr=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},ot=Ye,at="[object Arguments]",ut="[object Array]",
ct="[object Boolean]",mo="[object Date]",Po="[object Error]",To="[object Function]",Ho="[object Map]",
ko="[object Number]",Sr="[object Object]",bo="[object RegExp]",eo="[object Set]",Yi="[object String]",
Qi="[object WeakMap]",zi="[object ArrayBuffer]",Xi="[object DataView]",(ht={}
)["[object Float32Array]"]=ht["[object Float64Array]"]=ht["[object Int8Array]"]=ht["[object Int16Array]"]=ht["[object Int32Array]"]=ht["[object Uint8Array]"]=ht["[object Uint8ClampedArray]"]=ht["[object Uint16Array]"]=ht["[object Uint32Array]"]=!0
,ht[at]=ht[ut]=ht[zi]=ht[ct]=ht[Xi]=ht[mo]=ht[Po]=ht[To]=ht[Ho]=ht[ko]=ht[Sr]=ht[bo]=ht[eo]=ht[Yi]=ht[Qi]=!1,
Sr=function(e){return ot(e)&&it(e.length)&&!!ht[st(e)]},bo=function(t){return function(e){return t(e)}},eo=Zi,Zi=(Zi=(
Qi=Yi={exports:{}}).exports)&&!Zi.nodeType&&Zi,Zi=(to=Zi&&Qi&&!Qi.nodeType&&Qi)&&to.exports===Zi,ro=Zi&&eo.process,
eo=function(){try{return to&&to.require&&to.require("util").types||ro&&ro.binding&&ro.binding("util")}catch(e){}}(),
Qi.exports=eo,Qi=Sr,eo=(Sr=(eo=Yi.exports)&&eo.isTypedArray)?bo(Sr):Qi,Et=Bo,lt=zn,_t=xe,dt=qs.exports,At=Bs,St=Sr=eo,
Qi=Object.prototype,ft=Qi.hasOwnProperty,Bo=function(e,t){var r,n=_t(e),s=!n&&lt(e),i=!n&&!s&&dt(e),o=!n&&!s&&!i&&St(e),
a=n||s||i||o,u=a?Et(e.length,String):[],c=u.length;for(r in e)!t&&!ft.call(e,r)||a&&("length"==r||i&&(
"offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||At(r,c))||u.push(r);return u},
Tt=Object.prototype,eo=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Tt)},
_o=Object.keys,Ao=Object,pt=eo,Rt=Qi=function(e){return _o(Ao(e))},eo=Object.prototype,Ct=eo.hasOwnProperty,gt=oe,Nt=xr,
vt=Bo,Dt=function(e){var t,r;if(!pt(e))return Rt(e);for(r in t=[],Object(e))Ct.call(e,r)&&"constructor"!=r&&t.push(r)
;return t},bt=Qi=function(e){return null!=e&&Nt(e.length)&&!gt(e)},Ot=jo,Lt=Jo,Pt=It=function(e){return(bt(e)?vt:Dt)(e)}
,Ut=function(e){return Ot(e,Pt,Lt)},eo=Object.prototype,mt=eo.hasOwnProperty,Bo=function(e,t,r,n,s,i){var o,a,u,c,h,E,l,
_,d,A,S,f=1&r,T=Ut(e),p=T.length;if(p!=Ut(t).length&&!f)return!1;for(o=p;o--;)if(a=T[o],!(f?a in t:mt.call(t,a))
)return!1;if(A=i.get(e),S=i.get(t),A&&S)return A==t&&S==e;for(u=!0,i.set(e,t),i.set(t,e),c=f;++o<p;){if(h=e[a=T[o]],
E=t[a],!(void 0===(l=n?f?n(E,h,a,t,e,i):n(h,E,a,e,t,i):l)?h===E||s(h,E,r,n,i):l)){u=!1;break}c=c||"constructor"==a}
return u&&!c&&(_=e.constructor)!=(d=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof _&&_ instanceof _&&"function"==typeof d&&d instanceof d)&&(u=!1),i.delete(e),i.delete(t),u},jo=Oo(Eo,
"DataView"),Jo=wo,eo=Oo(Eo,"Promise"),wo=Oo(Eo,"Set"),Eo=Oo(Eo,"WeakMap"),wt=re,Gt="[object Map]",jt="[object Promise]",
$t="[object Set]",Ht="[object WeakMap]",Mt="[object DataView]",kt=(Ft=yt)(yt=jo),Jt=Ft(Jo),Bt=Ft(eo),qt=Ft(wo),xt=Ft(Eo)
,jo=wt,(yt&&jo(new yt(new ArrayBuffer(1)))!=Mt||Jo&&jo(new Jo)!=Gt||eo&&jo(eo.resolve())!=jt||wo&&jo(new wo
)!=$t||Eo&&jo(new Eo)!=Ht)&&(jo=function(e){var t=wt(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?Ft(e):""
)switch(e){case kt:return Mt;case Jt:return Gt;case Bt:return jt;case qt:return $t;case xt:return Ht}return t}),Wt=no,
Vt=Ro,Kt=So,zt=Bo,Xt=jo,Yt=xe,Qt=qs.exports,Zt=Sr,er="[object Arguments]",tr="[object Array]",rr="[object Object]",
Ro=Object.prototype,nr=Ro.hasOwnProperty,sr=function(e,t,r,n,s,i){var o,a,u=Yt(e),c=Yt(t),h=u?tr:Xt(e),E=c?tr:Xt(t),l=(
h=h==er?rr:h)==rr,c=(E=E==er?rr:E)==rr;if((E=h==E)&&Qt(e)){if(!Qt(t))return!1;l=!(u=!0)}return E&&!l?(i=i||new Wt,u||Zt(
e)?Vt(e,t,r,n,s,i):Kt(e,t,h,r,n,s,i)):1&r||(o=l&&nr.call(e,"__wrapped__"),a=c&&nr.call(t,"__wrapped__"),!o&&!a)?E&&(
i=i||new Wt,zt(e,t,r,n,s,i)):s(o?e.value():e,a?t.value():t,r,n,i=i||new Wt)},or=no,ar=So=function e(t,r,n,s,i){
return t===r||(null==t||null==r||!ir(t)&&!ir(r)?t!=t&&r!=r:sr(t,r,n,s,e,i))},ur=ne,cr=Bo=function(e){return e==e&&!ur(e)
},hr=It,Er=function(e,t,r,n){var s,i,o,a,u,c,h=r.length,E=h,l=!n;if(null==e)return!E;for(e=Object(e);h--;)if(s=r[h],
l&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1;for(;++h<E;)if(o=e[i=(s=r[h])[0]],a=s[1],l&&s[2]){if(void 0===o&&!(i in e)
)return!1}else if(u=new or,!(void 0===(c=n?n(o,a,i,e,t,u):c)?ar(a,o,3,n,u):c))return!1;return!0},lr=function(e){for(
var t,r,n=hr(e),s=n.length;s--;)r=e[t=n[s]],n[s]=[t,r,cr(r)];return n},_r=jo=function(t,r){return function(e){
return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},qs=function(t){var r=lr(t);return 1==r.length&&r[0][2]?_r(
r[0][0],r[0][1]):function(e){return e===t||Er(e,t,r)}},dr=re,Ar=ir=Ye,fr=xe,Tr=Sr=function(e){
return"symbol"==typeof e||Ar(e)&&"[object Symbol]"==dr(e)},pr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
Rr=/^\w*$/,Ro=function(e,t){if(fr(e))return!1;var r=typeof e;return!(
"number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Tr(e))||Rr.test(e)||!pr.test(e)||null!=t&&e in Object(t)},Cr=Lr,
gr="Expected a function",c.Cache=Cr,
Nr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vr=/\\(\\)?/g,Eo=0
,lo=(Eo=c(Eo=function(e){var s=[];return 46===e.charCodeAt(0)&&s.push(""),e.replace(Nr,function(e,t,r,n){s.push(
r?n.replace(vr,"$1"):t||e)}),s},function(e){return 500===lo.size&&lo.clear(),e})).cache,Dr=Io,Lr=(Lr=os
)?Lr.prototype:void 0,Or=Lr?Lr.toString:void 0,Pr=Lr=function e(t){if("string"==typeof t)return t;if(br(t))return Dr(t,e
)+"";if(Ir(t))return Or?Or.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},yr=no=Eo,wr=no=function(e){
return null==e?"":Pr(e)},Fr=Ir=Sr,Hr=Gr=function(e,t){return Ur(e)?e:mr(e,t)?[e]:yr(wr(e))},Mr=zn,Br=xr,Wr=function(e,t
){return null!=e&&t in Object(e)},Vr=xr=function(e,t,r){for(var n,s,i=(t=Hr(t,e)).length,o=!(n=-1);++n<i&&(s=qr(t[n]),
o=null!=e&&r(e,s));)e=e[s];return o||++n!=i?o:!!(i=null==e?0:e.length)&&Br(i)&&Jr(s,i)&&(kr(e)||Mr(e))},Kr=So,
zr=function(e,t,r){return void 0===(t=null==e?void 0:$r(e,t))?r:t},Xr=function(e,t){return null!=e&&Vr(e,t,Wr)},Qr=Bo,
Zr=jo,tn=$r=So=function(e,t){for(var r=0,n=(t=Gr(t,e)).length;null!=e&&r<n;)e=e[jr(t[r++])];return r&&r==n?e:void 0},
rn=function(t){return function(e){return null==e?void 0:e[t]}},nn=function(t){return function(e){return tn(e,t)}},
sn=Yr=mr=Ro,on=en=qr=jr=function(e){if("string"==typeof e||Fr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
an=qs,un=function(r,n){return Yr(r)&&Qr(n)?Zr(en(r),n):function(e){var t=zr(e,r);return void 0===t&&t===n?Xr(e,r):Kr(n,t
,3)}},cn=Bo=function(e){return e},hn=kr=Ur=br=xe,En=function(e){return sn(e)?rn(on(e)):nn(e)},ln=function(e,t,r){for(
var n,s=-1,i=Object(e),o=r(e),a=o.length;a--&&!1!==t(i[n=o[++s]],n,i););return e},_n=It,fn=Io,pn=Ro=function(e,n){
var s=-1,i=Sn(e)?Array(e.length):[];return An(e,function(e,t,r){i[++s]=n(e,t,r)}),i},Cn=function(e,t){return(Rn(e)?fn:pn
)(e,Tn(t))},Nn=q,vn=Sn=dn=Qi,Dn=Jr=Bs,bn=ne,In=po,Ln=function(e,n){var s;return gn(e,function(e,t,r){return!(s=n(e,t,r))
}),!!s},mn=function(e,t,r){var n=Pn(e)?In:Ln;return r&&Un(e,t,r)&&(t=void 0),n(e,On(t))},yn=gn=An=Qi=qs=function(e,t){
if(null==e)return e;if(!dn(e))return e&&ln(e,t,_n);for(var r=e.length,n=-1,s=Object(e);++n<r&&!1!==t(s[n],n,s););
return e},wn=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},Fn=function(e,n){
var s=!0;return yn(e,function(e,t,r){return s=!!n(e,t,r)}),s},Gn=On=Tn=jo=function(e){
return"function"==typeof e?e:null==e?cn:"object"==typeof e?hn(e)?un(e[0],e[1]):an(e):En(e)},jn=Pn=Rn=xe,
$n=Un=Bs=function(e,t,r){if(!bn(r))return!1;var n=typeof t;return!!("number"==n?vn(r)&&Dn(t,r.length
):"string"==n&&t in r)&&Nn(r[t],e)},Hn=function(e,t,r){var n=jn(e)?wn:Fn;return r&&$n(e,t,r)&&(t=void 0),n(e,Gn(t))},
Mn=Oo,po=function(){try{var e=Mn(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),kn=zn,Jn=xe,Bn=(qs=os
)?qs.isConcatSpreadable:void 0,qn=fo,xn=function(e){return Jn(e)||kn(e)||!!(Bn&&e&&e[Bn])},Oo=function e(t,r,n,s,i){
var o,a=-1,u=t.length;for(n=n||xn,i=i||[];++a<u;)o=t[a],0<r&&n(o)?1<r?e(o,r-1,n,s,i):qn(i,o):s||(i[i.length]=o);return i
},Wn=/\s/,Vn=function(e){for(var t=e.length;t--&&Wn.test(e.charAt(t)););return t},Kn=/^\s+/,Xn=zn=function(e){
return e&&e.slice(0,Vn(e)+1).replace(Kn,"")},Yn=ne,Qn=Sr,Zn=/^[-+]0x[0-9a-f]+$/i,es=/^0b[01]+$/i,ts=/^0o[0-7]+$/i,
rs=parseInt,ns=function(e){var t;return"number"==typeof e?e:Qn(e)?NaN:(Yn(e)&&(t="function"==typeof e.valueOf?e.valueOf(
):e,e=Yn(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=Xn(e),(t=es.test(e))||ts.test(e)?rs(e.slice(2),t?2:8):Zn.test(e
)?NaN:+e))},ss=17976931348623157e292,is=function(e){return e?(e=ns(e))!==1/0&&e!==-1/0?e==e?e:0:(e<0?-1:1)*ss:0===e?e:0}
,os=function(e){var t=is(e),e=t%1;return t==t?e?t-e:t:0},qs=function(e,t,r){var n,s=-1,i=e.length;for((r=i<r?i:r)<0&&(
r+=i),i=r<(t=t<0?i<-t?0:i+t:t)?0:r-t>>>0,t>>>=0,n=Array(i);++s<i;)n[s]=e[s+t];return n},as=function(e,t,r,n){for(
var s=e.length,i=r+(n?1:-1);n?i--:++i<s;)if(t(e[i],i,e))return i;return-1},us=function(e){return e!=e},cs=function(e,t,r
){for(var n=r-1,s=e.length;++n<s;)if(e[n]===t)return n;return-1},fo=function(e,t,r){return t==t?cs(e,t,r):as(e,us,r)},
hs=Sr,Es=function(e,t){var r,n,s,i,o,a,u,c;if(e!==t){if(r=void 0!==e,n=null===e,s=e==e,i=hs(e),o=void 0!==t,a=null===t,
u=t==t,c=hs(t),!a&&!c&&!i&&t<e||i&&o&&u&&!a&&!c||n&&o&&u||!r&&u||!s)return 1;if(
!n&&!i&&!c&&e<t||c&&r&&s&&!n&&!i||a&&r&&s||!o&&s||!u)return-1}return 0},ls=Io,_s=So,ds=jo,As=Ro,Ss=function(e,t){
var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},fs=bo,Ts=function(e,t,r){for(var n,s=-1,i=e.criteria,
o=t.criteria,a=i.length,u=r.length;++s<a;)if(n=Es(i[s],o[s]))return u<=s?n:n*("desc"==r[s]?-1:1);return e.index-t.index}
,ps=Bo,Rs=xe,Ro=function(e,n,r){var s;return n=n.length?ls(n,function(t){return Rs(t)?function(e){return _s(e,
1===t.length?t[0]:t)}:t}):[ps],s=-1,n=ls(n,fs(ds)),e=As(e,function(t,e,r){return{criteria:ls(n,function(e){return e(t)}
),index:++s,value:t}}),Ss(e,function(e,t){return Ts(e,t,r)})},Cs=function(e,t,r){switch(r.length){case 0:return e.call(t
);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t
,r)},gs=Math.max,bo=function(i,o,a){return o=gs(void 0===o?i.length-1:o,0),function(){for(var e,t=arguments,r=-1,n=gs(
t.length-o,0),s=Array(n);++r<n;)s[r]=t[o+r];for(r=-1,e=Array(o+1);++r<o;)e[r]=t[r];return e[o]=a(s),Cs(i,this,e)}},
Ns=function(e){return function(){return e}},vs=po,Ds=Date.now,uo=vs?function(e,t){return vs(e,"toString",{
configurable:!0,enumerable:!1,value:Ns(t),writable:!0})}:Bo,bs=Oo,Is=Ro,Os=Bs,function(){var e=Ds(),t=16-e+ +ho;if(ho=e,
0<t){if(800<=++co)return}else co=0;uo.apply(void 0,arguments)}(bo(So=function(e,t){if(null==e)return[];var r=t.length
;return 1<r&&Os(e,t[0],t[1])?t=[]:2<r&&Os(t[0],t[1],t[2])&&(t=[t[0]]),Is(e,bs(t,1),[])},void(ho=co=0),Bo),So+""),Ps=Mo,
Us=function(e,n){var s=[];return Ls(e,function(e,t,r){n(e,t,r)&&s.push(e)}),s},ms=jo,ws=function(e,t){return(ys(e)?Ps:Us
)(e,ms(t))},Fs=Bo,Gs=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e},js=Ls=Qi,
$s=function(e){return"function"==typeof e?e:Fs},Hs=ys=xe,Ms=function(e,t){return(Hs(e)?Gs:js)(e,$s(t))},ks=qs,
bo=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:ks(e,t,r)},Js=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),po=function(e){return Js.test(e)}
,(Oo=Yi.exports)&&Oo.isRegExp,Ro=function(e){return e.split("")},Mo="["+(Bs="\\ud800-\\udfff")+"]",qs=(
jo="[\\ufe0e\\ufe0f]?")+(qs="(?:"+(Bo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]")+"|"+(
Qi="\\ud83c[\\udffb-\\udfff]")+")?")+"(?:\\u200d(?:"+[Yi="[^"+Bs+"]",Oo="(?:\\ud83c[\\udde6-\\uddff]){2}",
Bs="[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+jo+qs+")*",Mo="(?:"+[Yi+Bo+"?",Bo,Oo,Bs,Mo].join("|")+")",
xs=RegExp(Qi+"(?="+Qi+")|"+Mo+qs,"g"),Ws=Ro,Vs=po,Ks=function(e){return e.match(xs)||[]},Xs=zs=fo,Ys=Lr,Qs=zn,Zs=bo,
ei=function(e,t){for(var r=e.length;r--&&-1<zs(t,e[r],0););return r},ti=function(e,t){for(var r=-1,
n=e.length;++r<n&&-1<Xs(t,e[r],0););return r},ri=function(e){return(Vs(e)?Ks:Ws)(e)},ni=no,si=function(e,t,r){return(
e=ni(e))&&(r||void 0===t)?Qs(e):e&&(t=Ys(t))?(r=ri(e),e=ri(t),t=ti(r,e),e=ei(r,e)+1,Zs(r,t,e).join("")):e},
bo=Object.prototype,ii=bo.hasOwnProperty,oi=function(e,t){return null!=e&&ii.call(e,t)},ai=xr,ui=function(e,t){
return null!=e&&ai(e,t,oi)},Ei="[object Boolean]",li=function(e){return!0===e||!1===e||hi(e)&&ci(e)==Ei},di=xe,
Si="[object String]",fi=function(e){return"string"==typeof e||!di(e)&&Ai(e)&&_i(e)==Si},Ti=_i=ci=re,pi=Ai=hi=Ye,
Ri="[object Number]",Ci=function(e){return"number"==typeof e||pi(e)&&Ti(e)==Ri},gi=function(e,t,r){return e==e&&(
void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=t<=e?e:t)),e},Ni=Lr,vi=os,Di=no,bi=function(e,t,r){return e=Di(e),
r=null==r?0:gi(vi(r),0,e.length),t=Ni(t),e.slice(r,r+t.length)==t},Ii=Io,Oi=function(t,e){return Ii(e,function(e){
return t[e]})},Li=It,Pi=function(e){return null==e?[]:Oi(e,Li(e))},(no=Ui=Ui||{})[no.DEBUG=0]="DEBUG",
no[no.INFO=1]="INFO",no[no.WARN=2]="WARN",no[no.ERROR=3]="ERROR",no[no.NONE=4]="NONE",Io=Ui,so=null!==(so=function(e){
if(e){if(function(){switch(e){case Ui.DEBUG:case Ui.INFO:case Ui.WARN:case Ui.ERROR:case Ui.NONE:return 1;default:return
}}())return e;switch(e=`${e}`.toUpperCase()){case"ALL":case"DEBUG":return Ui.DEBUG;case"INFO":return Ui.INFO;case"WARN":
case"WARNING":return Ui.WARN;case"ERR":case"ERROR":return Ui.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return Ui.NONE;default:return}}}(null===(no=process)||void 0===no||null===(so=no.env
)||void 0===so?void 0:so.PIPELINE_LOG_LEVEL))&&void 0!==so?so:Io.INFO;const qo=null!==(Io=function(e){if(void 0!==e
)return`${e}`}(null===(Io=process)||void 0===Io||null===(x=Io.env)||void 0===x?void 0:x.PIPELINE_AUTHENTICATION)
)&&void 0!==Io?Io:"";class xo{constructor(e,t){s(this,"_logger",void 0),s(this,"name",void 0),this.name=e,this._logger=t
}debug(...e){this._logger.debug(`[${this.name}]`,...e)}info(...e){this._logger.info(`[${this.name}]`,...e)}warn(...e){
this._logger.warn(`[${this.name}]`,...e)}error(...e){this._logger.error(`[${this.name}]`,...e)}}class Wo{
static setLogLevel(e){this._level=e}static setLogger(e){if(!e)throw new TypeError("The logger was not defined")
;this._logger=e}static debug(...e){this._level<=Ui.DEBUG&&this._logger.debug(...e)}static info(...e){
this._level<=Ui.INFO&&this._logger.info(...e)}static warn(...e){this._level<=Ui.WARN&&this._logger.warn(...e)}
static error(...e){this._level<=Ui.ERROR&&this._logger.error(...e)}static createLogger(e){return new xo(e,Wo)}}s(Wo,
"_level",Ui.DEBUG),s(Wo,"_logger",console),(Io=mi={})[Io.HTTP=0]="HTTP",Io[Io.LOCAL=1]="LOCAL",
Io[Io.MATRIX_ROOM=2]="MATRIX_ROOM",yi=mi,(Io=wi={})[Io.NONE=0]="NONE",Io[Io.BASIC_AUTH=1]="BASIC_AUTH",
Io[Io.BEARER_AUTH=2]="BEARER_AUTH",Fi=wi;class Vo{static parseRunnerAuthentication(e,t){var r;return void 0===t?null!==(
r=L(e))&&void 0!==r?r:I(e):null!==(r=L(e,t))&&void 0!==r?r:I(e,t)}}class Ko{static parseRunnerResource(e){var t
;return null!==(t=null!==(t=function(e){var t;if(e)return T(t=e)&&C(t,["type","url","authentication"])&&(
null==t?void 0:t.type)===yi.HTTP&&d(null==t?void 0:t.url)&&(h(null==t?void 0:t.authentication)||D(
null==t?void 0:t.authentication))?e:(t=(e=si(`${e}`)).toLowerCase(),bi(t,"http:")||bi(t,"https:")?(t=new URL(e),
t=null!==(t=Vo.parseRunnerAuthentication(decodeURIComponent(t.username),decodeURIComponent(t.password))
)&&void 0!==t?t:Vo.parseRunnerAuthentication(qo),{type:yi.HTTP,url:e,auth:t}):void 0)}(e))&&void 0!==t?t:function(t){if(
t){if(T(s=t)&&C(s,["type","id","name","homeserver","authentication"])&&(null==s?void 0:s.type)===yi.MATRIX_ROOM&&d(
null==s?void 0:s.id)&&d(null==s?void 0:s.name)&&d(null==s?void 0:s.homeserver)&&(h(null==s?void 0:s.authentication)||D(
null==s?void 0:s.authentication)))return t;let e=(t=si(`${t}`)).toLowerCase();if(bi(e,"matrix://")){var r=new URL(t),
n=null!==(s=Vo.parseRunnerAuthentication(decodeURIComponent(r.username),decodeURIComponent(r.password))
)&&void 0!==s?s:Vo.parseRunnerAuthentication(qo),s=`${r.host}`;const i=`${r.pathname}`.split("/");i.shift()
;const o=decodeURIComponent(null!==(r=i.shift())&&void 0!==r?r:"");return 0===(r=0<=o.indexOf(":")?o:`${o}:${s}`
).length?void 0:{type:yi.MATRIX_ROOM,homeserver:s,room:"!"===r[0]||"#"===r[0]?r:`#${r}`,authentication:n}}return bi(e,
"matrix:")&&(t=t.substr("matrix:".length),e=e.substr("matrix:".length)),t=decodeURIComponent(t),e=t.toLowerCase(),!bi(e,
"!")&&!bi(e,"#")||(n=t.indexOf(":"))<0||!(n=t.substr(n+1))?void 0:{type:yi.MATRIX_ROOM,homeserver:n,room:t,
authentication:Vo.parseRunnerAuthentication(qo)}}}(e))&&void 0!==t?t:function(e){var t;if(e)return T(t=e)&&C(t,["type",
"path"])&&(null==t?void 0:t.type)===yi.LOCAL&&d(null==t?void 0:t.path)?e:(e=si(`${e}`),(e=bi(e.toLowerCase(),"file://"
)?e.substr("file://".length):e)?{type:yi.LOCAL,path:e}:void 0)}(e)}}(Io=Gi={})[Io.OK=0]="OK",
Io[Io.GENERAL_ERRORS=1]="GENERAL_ERRORS",Io[Io.MISUSE_OF_SHELL_BUILTINS=2]="MISUSE_OF_SHELL_BUILTINS",
Io[Io.ARGUMENT_PARSE_ERROR=3]="ARGUMENT_PARSE_ERROR",Io[Io.UNKNOWN_ARGUMENT=4]="UNKNOWN_ARGUMENT",
Io[Io.UNKNOWN_RESOURCE_TYPE=5]="UNKNOWN_RESOURCE_TYPE",Io[Io.RESOURCE_LOAD_FAILED=6]="RESOURCE_LOAD_FAILED",
Io[Io.RESOURCE_MODEL_INVALID=7]="RESOURCE_MODEL_INVALID",Io[Io.LOCAL_RESOURCE_FAILED=8]="LOCAL_RESOURCE_FAILED",
Io[Io.HTTP_RESOURCE_FAILED=9]="HTTP_RESOURCE_FAILED",Io[Io.MATRIX_RESOURCE_FAILED=10]="MATRIX_RESOURCE_FAILED",
Io[Io.UNIMPLEMENTED_FEATURE=11]="UNIMPLEMENTED_FEATURE",Io[Io.UNBUILD_FEATURE=12]="UNBUILD_FEATURE",
Io[Io.FATAL_ERROR=13]="FATAL_ERROR",Io[Io.USAGE=64]="USAGE",Io[Io.DATAERR=65]="DATAERR",Io[Io.NOINPUT=66]="NOINPUT",
Io[Io.NOUSER=67]="NOUSER",Io[Io.NOHOST=68]="NOHOST",Io[Io.UNAVAILABLE=69]="UNAVAILABLE",Io[Io.SOFTWARE=70]="SOFTWARE",
Io[Io.OSERR=71]="OSERR",Io[Io.OSFILE=72]="OSFILE",Io[Io.CANTCREAT=73]="CANTCREAT",Io[Io.IOERR=74]="IOERR",
Io[Io.TEMPFAIL=75]="TEMPFAIL",Io[Io.PROTOCOL=76]="PROTOCOL",Io[Io.NOPERM=77]="NOPERM",Io[Io.CONFIG=78]="CONFIG",
Io[Io.COMMAND_INVOKED_CANNOT_EXECUTE=126]="COMMAND_INVOKED_CANNOT_EXECUTE",
Io[Io.COMMAND_NOT_FOUND=127]="COMMAND_NOT_FOUND",Io[Io.INVALID_ARGUMENT_TO_EXIT=128]="INVALID_ARGUMENT_TO_EXIT",
Io[Io.FATAL_SIGNAL_RANGE_START=129]="FATAL_SIGNAL_RANGE_START",
Io[Io.FATAL_SIGNAL_RANGE_END=254]="FATAL_SIGNAL_RANGE_END",
Io[Io.EXIT_STATUS_OUT_OF_RANGE=255]="EXIT_STATUS_OUT_OF_RANGE",ji=Gi;const zo=null!==(Io=N("1.0.1"))&&void 0!==Io?Io:"?"
,Xo=null!==(Io=N("production"))&&void 0!==Io?Io:"development",Yo=null!==(Io=N("2021-08-28T20:08:43.627Z")
)&&void 0!==Io?Io:"",Qo=null===(Io=g(""))||void 0===Io||Io,Zo=null===(Io=g(""))||void 0===Io||Io,ea=null!==(Io=g("")
)&&void 0!==Io&&Io,ta=null===(Io=g(""))||void 0===Io||Io;Io="production"===Xo;const ra="test"===Xo,na=!Io&&!ra;(Io=$i={}
)[Io.OPTIONS=0]="OPTIONS",Io[Io.GET=1]="GET",Io[Io.POST=2]="POST",Io[Io.PUT=3]="PUT",Io[Io.DELETE=4]="DELETE",
Io[Io.PATCH=5]="PATCH",oo=$i;const sa="WINDOW"===(ao=null!==(ao=null!==(W=null===(Io=process)||void 0===Io||null===(
W=Io.env)||void 0===W?void 0:W.NOR_REQUEST_CLIENT_MODE)&&void 0!==W?W:null===(ao=process)||void 0===ao||null===(V=ao.env
)||void 0===V?void 0:V.REACT_APP_REQUEST_CLIENT_MODE)&&void 0!==ao?ao:"")||!("undefined"==typeof window||!window.fetch),
ia="NODE"===ao||!sa;class oa{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const r=[];n.on("data",
e=>{try{r.push(e)}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(r))}catch(e){t(e)}})})}
static async getRequestDataAsString(e,t="utf8"){const r=await oa.getRequestDataAsBuffer(e);return r.toString(t)}
static async getRequestDataAsFormUrlEncoded(e){if(""!==(e=await oa.getRequestDataAsString(e)))return No.parse(e)}
static async getRequestDataAsJson(e){if(""!==(e=await oa.getRequestDataAsString(e)))return JSON.parse(e)}}(ao=Hi={}
)[ao.Continue=100]="Continue",ao[ao.SwitchingProtocols=101]="SwitchingProtocols",ao[ao.Processing=102]="Processing",
ao[ao.CheckPoint=103]="CheckPoint",ao[ao.OK=200]="OK",ao[ao.Created=201]="Created",ao[ao.Accepted=202]="Accepted",
ao[ao.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",ao[ao.NoContent=204]="NoContent",
ao[ao.ResetContent=205]="ResetContent",ao[ao.PartialContent=206]="PartialContent",ao[ao.MultiStatus=207]="MultiStatus",
ao[ao.AlreadyReported=208]="AlreadyReported",ao[ao.IMUsed=226]="IMUsed",ao[ao.MultipleChoices=300]="MultipleChoices",
ao[ao.MovedPermanently=301]="MovedPermanently",ao[ao.Found=302]="Found",ao[ao.SeeOther=303]="SeeOther",
ao[ao.NotModified=304]="NotModified",ao[ao.TemporaryRedirect=307]="TemporaryRedirect",
ao[ao.PermanentRedirect=308]="PermanentRedirect",ao[ao.BadRequest=400]="BadRequest",
ao[ao.Unauthorized=401]="Unauthorized",ao[ao.PaymentRequired=402]="PaymentRequired",ao[ao.Forbidden=403]="Forbidden",
ao[ao.NotFound=404]="NotFound",ao[ao.MethodNotAllowed=405]="MethodNotAllowed",ao[ao.NotAcceptable=406]="NotAcceptable",
ao[ao.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",ao[ao.RequestTimeout=408]="RequestTimeout",
ao[ao.Conflict=409]="Conflict",ao[ao.Gone=410]="Gone",ao[ao.LengthRequired=411]="LengthRequired",
ao[ao.PreconditionFailed=412]="PreconditionFailed",ao[ao.PayloadTooLarge=413]="PayloadTooLarge",
ao[ao.URITooLong=414]="URITooLong",ao[ao.UnsupportedMediaType=415]="UnsupportedMediaType",
ao[ao.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable",ao[ao.ExpectationFailed=417]="ExpectationFailed",
ao[ao.IAmATeapot=418]="IAmATeapot",ao[ao.UnprocessableEntity=422]="UnprocessableEntity",ao[ao.Locked=423]="Locked",
ao[ao.FailedDependency=424]="FailedDependency",ao[ao.TooEarly=425]="TooEarly",
ao[ao.UpgradeRequired=426]="UpgradeRequired",ao[ao.PreconditionRequired=428]="PreconditionRequired",
ao[ao.TooManyRequests=429]="TooManyRequests",ao[ao.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",
ao[ao.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",ao[ao.InternalError=500]="InternalError",
ao[ao.InternalServerError=500]="InternalServerError",ao[ao.NotImplemented=501]="NotImplemented",
ao[ao.BadGateway=502]="BadGateway",ao[ao.ServiceUnavailable=503]="ServiceUnavailable",
ao[ao.GatewayTimeout=504]="GatewayTimeout",ao[ao.HttpVersionNotSupported=505]="HttpVersionNotSupported",
ao[ao.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",ao[ao.InsufficientStorage=507]="InsufficientStorage",
ao[ao.LoopDetected=508]="LoopDetected",ao[ao.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",
ao[ao.NotExtended=510]="NotExtended",ao[ao.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",(io=io||{}
).ERROR="error",Mi=io;class aa extends Error{constructor(e,t=void 0,r=void 0,n=void 0){super(t||function(e){switch(e){
case Hi.Continue:return"Continue";case Hi.SwitchingProtocols:return"Switching Protocols";case Hi.Processing:
return"Processing";case Hi.CheckPoint:return"Check Point";case Hi.OK:return"OK";case Hi.Created:return"Created"
;case Hi.Accepted:return"Accepted";case Hi.NonAuthoritativeInformation:return"Non-Authoritative Information"
;case Hi.NoContent:return"No Content";case Hi.ResetContent:return"Reset Content";case Hi.PartialContent:
return"Partial Content";case Hi.MultiStatus:return"Multi Status";case Hi.AlreadyReported:return"Already Reported"
;case Hi.IMUsed:return"IM Used";case Hi.MultipleChoices:return"Multiple Choices";case Hi.MovedPermanently:
return"Moved Permanently";case Hi.Found:return"Found";case Hi.SeeOther:return"See Other";case Hi.NotModified:
return"Not Modified";case Hi.TemporaryRedirect:return"Temporary Redirect";case Hi.PermanentRedirect:
return"Permanent Redirect";case Hi.BadRequest:return"Bad Request";case Hi.Unauthorized:return"Unauthorized"
;case Hi.PaymentRequired:return"Payment Required";case Hi.Forbidden:return"Forbidden";case Hi.NotFound:return"Not Found"
;case Hi.MethodNotAllowed:return"Method Not Allowed";case Hi.NotAcceptable:return"Not Acceptable"
;case Hi.ProxyAuthenticationRequired:return"Proxy Authentication Required";case Hi.RequestTimeout:
return"Request Timeout";case Hi.Conflict:return"Conflict";case Hi.Gone:return"Gone";case Hi.LengthRequired:
return"Length Required";case Hi.PreconditionFailed:return"Precondition Failed";case Hi.PayloadTooLarge:
return"Payload Too Large";case Hi.URITooLong:return"URI Too Long";case Hi.UnsupportedMediaType:
return"Unsupported Media Type";case Hi.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable"
;case Hi.ExpectationFailed:return"Expectation Failed";case Hi.IAmATeapot:return"I Am a Teapot"
;case Hi.UnprocessableEntity:return"Unprocessable Entity";case Hi.Locked:return"Locked";case Hi.FailedDependency:
return"Failed Dependency";case Hi.TooEarly:return"Too Early";case Hi.UpgradeRequired:return"Upgrade Required"
;case Hi.PreconditionRequired:return"Precondition Required";case Hi.TooManyRequests:return"Too Many Requests"
;case Hi.RequestHeaderFieldsTooLarge:return"Request Header Fields Too Large";case Hi.UnavailableForLegalReasons:
return"Unavailable For Legal Reasons";case Hi.InternalServerError:return"Internal Server Error";case Hi.NotImplemented:
return"Not Implemented";case Hi.BadGateway:return"Bad Gateway";case Hi.ServiceUnavailable:return"Service Unavailable"
;case Hi.GatewayTimeout:return"Gateway Timeout";case Hi.HttpVersionNotSupported:return"Http Version Not Supported"
;case Hi.VariantAlsoNegotiates:return"Variant Also Negotiates";case Hi.InsufficientStorage:return"Insufficient Storage"
;case Hi.LoopDetected:return"Loop Detected";case Hi.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded"
;case Hi.NotExtended:return"Not Extended";case Hi.NetworkAuthenticationRequired:return"Network Authentication Required"
;default:return e<400?"HTTP Status":"HTTP Error"}}(e)),s(this,"status",void 0),s(this,"method",void 0),s(this,"url",
void 0),s(this,"__proto__",void 0),t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t
):this.__proto__=t,this.status=e,this.method=r,this.url=n}valueOf(){return this.status}toString(){
return`${this.status} ${this.message}`}toJSON(){return{type:Mi.ERROR,status:this.status,message:this.message}}
getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){return this.url}}const ua=ia?require("fs"
).promises:void 0,ca=Wo.createLogger("NodeRequestClient");class ha{constructor(e,t){s(this,"_http",void 0),s(this,
"_https",void 0),this._http=e,this._https=t}async jsonRequest(e,t,r,n){switch(e){case oo.GET:return this._getJson(t,r,n)
;case oo.POST:return this._postJson(t,r,n);case oo.PATCH:return this._patchJson(t,r,n);case oo.PUT:return this._putJson(
t,r,n);case oo.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Node]RequestClient: Unsupported method: ${e}`)}}async _checkSocketFile(t){try{const e=await ua.stat(t)
;return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void ca.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void ca.debug("_checkSocketFile: ENOENT: ",e);throw ca.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e)
;return!0===t?e:!1!==t&&"/"!==(t=Do.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(i,o,e){
const a=e?JSON.stringify(e)+"\n":void 0,u=new vo.default.URL(i);let c;const h=null!==(
t=null===u||void 0===u?void 0:u.protocol)&&void 0!==t?t:"";if("unix:"===h||"socket:"===h){
const r=null!==u&&void 0!==u&&u.pathname?null===u||void 0===u?void 0:u.pathname:"/";if("/"===r)throw new TypeError(
`No socket path found for unix protocol URL: ${i}`);if(!(e=await this._findSocketFile(r)))throw new TypeError(
`No socket path found for unix protocol URL: ${i}`);var t=`${e.length<r.length?r.substr(e.length
):""}${"?"!==u.search?u.search:""}`;o=E(E({},o),{},{socketPath:e,path:t}),i="",c=this._http
}else c="https:"===h?this._https:this._http;return new Promise((t,r)=>{let n=!1;try{if(!c)throw new Error(
"HTTP module not defined. This error should not happen.");var s;let e;i&&(o=E(E({},o),{},{hostname:u.hostname,
port:null!==(s=null!==u&&void 0!==u&&u.port?parseInt(u.port,10):void 0)&&void 0!==s?s:"https:"===h?443:80,
path:u.pathname+u.search})),e=c.request(o,e=>{n?ca.warn(
"Warning! Request had already ended when the response was received."):(n=!0,t(e))}),e.on("error",e=>{n?(ca.warn(
"Warning! Request had already ended when the response was received."),ca.debug("Error from event: ",e)):(ca.debug(
"Passing on error from event: ",e),n=!0,r(e))}),a&&e.write(a),e.end()}catch(e){n?(ca.warn(
"Warning! Request had already ended when the response was received."),ca.debug("Exception: ",e)):(ca.debug(
"Passing on error: ",e),n=!0,r(e))}})}async _request(e,t,r,n){return r=await this._httpRequest(t,r,n),
n=await oa.getRequestDataAsJson(r),{method:e,url:t,statusCode:null!==(t=null==r?void 0:r.statusCode)&&void 0!==t?t:0,
headers:r.headers,body:n}}async _getJson(e,t,r){const n={method:"GET",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=E(E({},n.headers),t)),this._request(oo.GET,e,n,r).then(ha._successResponse)}async _putJson(e,t,r){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=E(E({},n.headers),t)),
this._request(oo.PUT,e,n,r).then(ha._successResponse)}async _postJson(e,t,r){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=E(E({},n.headers),t)),this._request(oo.POST,e,n,r).then(
ha._successResponse)}async _patchJson(e,t,r){const n={method:"PATCH",headers:{"Content-Type":"application/json"}}
;return t&&(n.headers=E(E({},n.headers),t)),this._request(oo.PATCH,e,n,r).then(ha._successResponse)}async _deleteJson(e,
t,r){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=E(E({},n.headers),t)),
this._request(oo.DELETE,e,n,r).then(ha._successResponse)}static _successResponse(e){var t=null==e?void 0:e.statusCode
;if(t<200||400<=t)throw ca.error(`Unsuccessful response with status ${t}: `,e),new aa(t,`Error ${t} for ${m(e.method
)} ${e.url}`,e.method,e.url);return e.body}}class Ea{constructor(e){s(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,
t,r,n){switch(e){case oo.GET:return this._getJson(t,r,n);case oo.POST:return this._postJson(t,r,n);case oo.PUT:
return this._putJson(t,r,n);case oo.DELETE:return this._deleteJson(t,r,n);default:throw new TypeError(
`[Fetch]RequestClient: Unsupported method: ${e}`)}}_getJson(e,t,r){const n={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=E(E({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successResponse(e,oo.GET))}_putJson(e,t,r){const n={method:"PUT",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=E(E({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successResponse(e,oo.PUT))}
_postJson(e,t,r){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=E(E({},n.headers),t)),r&&(n.body=JSON.stringify(r)),this._fetch(e,n
).then(e=>Ea._successResponse(e,oo.POST))}_deleteJson(e,t,r){const n={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=E(E({},n.headers),t)),r&&(
n.body=JSON.stringify(r)),this._fetch(e,n).then(e=>Ea._successResponse(e,oo.DELETE))}static _successResponse(e,t){var r,
n=e.status;if(!e.ok||n<200||400<=n)throw r=e.url,new aa(n,`${n} ${e.statusText} for ${m(t)} ${r}`,t,r);return e.json()}}
const la=ia?require("http"):void 0,_a=ia?require("https"):void 0,da=Wo.createLogger("RequestClient");class Aa{
static jsonRequest(e,t,r,n){return this._client.jsonRequest(e,t,r,n)}static getJson(e,t){
return this._client.jsonRequest(oo.GET,e,t)}static postJson(e,t,r){return da.debug(".postJson: ",e,t,r),
this._client.jsonRequest(oo.POST,e,r,t)}static patchJson(e,t,r){return da.debug(".patchJson: ",e,t,r),
this._client.jsonRequest(oo.PATCH,e,r,t)}static putJson(e,t,r){return da.debug(".putJson: ",e,t,r),
this._client.jsonRequest(oo.PUT,e,r,t)}static deleteJson(e,t,r){return da.debug(".deleteJson: ",e,r,t),
this._client.jsonRequest(oo.DELETE,e,t,r)}static _initClient(){if(sa)return da.debug("Detected browser environment"),
new Ea(window.fetch.bind(window));if(ia)return new ha(la,_a);throw new TypeError(
"Could not detect request client implementation")}}s(Aa,"_client",Aa._initClient());class Sa{getName(){return this._name
}constructor(e){s(this,"_name",void 0),s(this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){
this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return ui(this._callbacks,e)}triggerEvent(t,...r){var e
;this.hasCallbacks(t)?(e=this._callbacks[t],Ms(e,e=>{try{e(t,...r)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,r){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=ws(this._callbacks[e],e=>!(!t&&e===r&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}
const fa=Wo.createLogger("JobController");(io=ki={}).JOB_CHANGED="JobController:jobChanged",
io.JOB_STARTED="JobController:jobStarted",io.JOB_PAUSED="JobController:jobPaused",
io.JOB_RESUMED="JobController:jobResumed",io.JOB_CANCELLED="JobController:jobCancelled",
io.JOB_FAILED="JobController:jobFailed",io.JOB_FINISHED="JobController:jobFinished",(io=Ji={}
)[io.CONSTRUCTED=0]="CONSTRUCTED",io[io.STARTED=1]="STARTED",io[io.PAUSED=2]="PAUSED",io[io.CANCELLED=3]="CANCELLED",
io[io.FINISHED=4]="FINISHED",io[io.FAILED=5]="FAILED";class Ta{constructor(e,t=[]){if(s(this,"_observer",void 0),s(this,
"_name",void 0),s(this,"_steps",void 0),s(this,"_changedCallback",void 0),s(this,"_state",void 0),s(this,
"_stepDestructors",void 0),s(this,"_current",void 0),!y(e))throw new TypeError(`Job name invalid: ${e}`);if(!_(t,k,1)
)throw new TypeError(`Job#${e} must have at least one step`);this._current=0,this._name=e,this._steps=t,
this._observer=new Sa(`JobController#${this._name}`),this._state=Ji.CONSTRUCTED,
this._changedCallback=this._onChanged.bind(this),this._stepDestructors=Cn(t,e=>e.onChanged(this._changedCallback))}
getName(){return this._name}destroy(){this._observer.destroy(),this._stepDestructors=ws(this._stepDestructors,(e,t)=>{
const r=this._steps[t];try{e()}catch(e){fa.warn(`Warning! Exception in the step#${r.getName()} listener destructor: `,e)
}return!1})}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`JobController#${this._name}`}toJSON(){
return{type:"JobController",name:this._name,steps:Cn(this._steps,e=>e.toJSON())}}isRunning(){switch(this._state){
case Ji.STARTED:return!0;case Ji.PAUSED:case Ji.CONSTRUCTED:case Ji.CANCELLED:case Ji.FINISHED:case Ji.FAILED:return!1}}
isStarted(){switch(this._state){case Ji.PAUSED:case Ji.STARTED:return!0;case Ji.CONSTRUCTED:case Ji.CANCELLED:
case Ji.FINISHED:case Ji.FAILED:return!1}}isPaused(){switch(this._state){case Ji.PAUSED:return!0;case Ji.STARTED:
case Ji.CONSTRUCTED:case Ji.CANCELLED:case Ji.FINISHED:case Ji.FAILED:return!1}}isCancelled(){switch(this._state){
case Ji.CANCELLED:return!0;case Ji.PAUSED:case Ji.STARTED:case Ji.CONSTRUCTED:case Ji.FINISHED:case Ji.FAILED:return!1}}
isFinished(){switch(this._state){case Ji.FINISHED:case Ji.FAILED:case Ji.CANCELLED:return!0;case Ji.CONSTRUCTED:
case Ji.PAUSED:case Ji.STARTED:return!1}}isFailed(){switch(this._state){case Ji.FAILED:return!0;case Ji.CONSTRUCTED:
case Ji.FINISHED:case Ji.PAUSED:case Ji.STARTED:case Ji.CANCELLED:return!1}}isSuccessful(){switch(this._state){
case Ji.FINISHED:return!0;case Ji.FAILED:case Ji.CONSTRUCTED:case Ji.PAUSED:case Ji.STARTED:case Ji.CANCELLED:return!1}}
start(){if(this._state!==Ji.CONSTRUCTED)throw new Error(`Job#${this._name} was already started`);return fa.info(
`Starting job ${this._name}`),this._state=Ji.STARTED,this._steps[this._current].start(),this._observer.hasCallbacks(
ki.JOB_STARTED)&&this._observer.triggerEvent(ki.JOB_STARTED,this),this._observer.hasCallbacks(ki.JOB_CHANGED
)&&this._observer.triggerEvent(ki.JOB_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Job#${this._name} was not running`);return fa.info(`Pausing job ${this._name}`),this._state=Ji.PAUSED,
this._steps[this._current].pause(),this._observer.hasCallbacks(ki.JOB_PAUSED)&&this._observer.triggerEvent(ki.JOB_PAUSED
,this),this._observer.hasCallbacks(ki.JOB_CHANGED)&&this._observer.triggerEvent(ki.JOB_CHANGED,this),this}resume(){if(
!this.isPaused())throw new Error(`Job#${this._name} was not paused`);return fa.info(`Resuming job ${this._name}`),
this._state=Ji.STARTED,this._steps[this._current].resume(),this._observer.hasCallbacks(ki.JOB_RESUMED
)&&this._observer.triggerEvent(ki.JOB_RESUMED,this),this._observer.hasCallbacks(ki.JOB_CHANGED
)&&this._observer.triggerEvent(ki.JOB_CHANGED,this),this}stop(){if(this._state!==Ji.STARTED)throw new Error(
`Job#${this._name} was not started`);return fa.info(`Stopping job ${this._name}`),this._state=Ji.CANCELLED,
this._steps[this._current].stop(),this._observer.hasCallbacks(ki.JOB_CANCELLED)&&this._observer.triggerEvent(
ki.JOB_CANCELLED,this),this._observer.hasCallbacks(ki.JOB_CHANGED)&&this._observer.triggerEvent(ki.JOB_CHANGED,this),
this}onCancelled(e){return this.on(ki.JOB_CANCELLED,e)}onChanged(e){return this.on(ki.JOB_CHANGED,e)}onFailed(e){
return this.on(ki.JOB_FAILED,e)}onFinished(e){return this.on(ki.JOB_FINISHED,e)}onPaused(e){return this.on(ki.JOB_PAUSED
,e)}onResumed(e){return this.on(ki.JOB_RESUMED,e)}onStarted(e){return this.on(ki.JOB_STARTED,e)}getErrorString(){
return Cn(this._steps,e=>e.getErrorString()).join("\n")}getOutputString(){return Cn(this._steps,e=>e.getOutputString()
).join("\n")}_onChanged(e,t){var r,n=this._state;const s=this._steps[this._current];if(t===s)if(s.isFinished(
)&&this.isStarted()){try{r=this._steps.indexOf(s),this._stepDestructors[r]()}catch(e){fa.warn(
`Warning! Exception in the step#${s.getName()} listener destructor: `,e)}s.isFailed()?(this._state=Ji.FAILED,
this._observer.hasCallbacks(ki.JOB_FAILED)&&this._observer.triggerEvent(ki.JOB_FAILED,this)):s.isCancelled()?(
this._state=Ji.CANCELLED,this._observer.hasCallbacks(ki.JOB_CANCELLED)&&this._observer.triggerEvent(ki.JOB_CANCELLED,
this)):(this._current+=1,this._current<this._steps.length?(this._state=Ji.STARTED,this._steps[this._current].start(),
n===Ji.PAUSED&&this._observer.hasCallbacks(ki.JOB_RESUMED)&&this._observer.triggerEvent(ki.JOB_RESUMED,this)):(
this._state=Ji.FINISHED,this._observer.hasCallbacks(ki.JOB_FINISHED)&&this._observer.triggerEvent(ki.JOB_FINISHED,this))
),this._observer.hasCallbacks(ki.JOB_CHANGED)&&this._observer.triggerEvent(ki.JOB_CHANGED,this)}else s.isPaused(
)&&!this.isPaused()?(this._state=Ji.PAUSED,this._observer.hasCallbacks(ki.JOB_PAUSED)&&this._observer.triggerEvent(
ki.JOB_PAUSED,this),this._observer.hasCallbacks(ki.JOB_CHANGED)&&this._observer.triggerEvent(ki.JOB_CHANGED,this)
):s.isStarted()&&this.isPaused()&&(this._state=Ji.STARTED,this._observer.hasCallbacks(ki.JOB_RESUMED
)&&this._observer.triggerEvent(ki.JOB_RESUMED,this),this._observer.hasCallbacks(ki.JOB_CHANGED
)&&this._observer.triggerEvent(ki.JOB_CHANGED,this))}}s(Ta,"Event",ki);const pa=Wo.createLogger("StageController");(
io=Bi={}).STAGE_STARTED="StageController:stageStarted",io.STAGE_PAUSED="StageController:stagePaused",
io.STAGE_RESUMED="StageController:stageResumed",io.STAGE_FINISHED="StageController:stageFinished",
io.STAGE_FAILED="StageController:stageFailed",io.STAGE_CANCELLED="StageController:stageCancelled",
io.STAGE_CHANGED="StageController:stageChanged",(io=qi={})[io.CONSTRUCTED=0]="CONSTRUCTED",io[io.STARTED=1]="STARTED",
io[io.PAUSED=2]="PAUSED",io[io.CANCELLED=3]="CANCELLED",io[io.FINISHED=4]="FINISHED",io[io.FAILED=5]="FAILED";class Ra{
constructor(e,t){if(s(this,"_observer",void 0),s(this,"_name",void 0),s(this,"_jobs",void 0),s(this,"_changedCallback",
void 0),s(this,"_state",void 0),s(this,"_jobDestructors",void 0),!y(e))throw new TypeError(`Stage name invalid: ${e}`)
;if(!_(t,J,1))throw new TypeError(`Stage#${e} must have at least one job`);this._state=qi.CONSTRUCTED,this._name=e,
this._jobs=t,this._observer=new Sa(`StageController#${this._name}`),this._changedCallback=this._onChanged.bind(this),
this._jobDestructors=Cn(t,e=>e.onChanged(this._changedCallback))}getName(){return this._name}destroy(){
this._observer.destroy()}on(e,t){return this._observer.listenEvent(e,t)}toString(){return`StageController#${this._name}`
}toJSON(){return{type:"StageController",name:this._name,jobs:Cn(this._jobs,e=>e.toJSON())}}isCancelled(){switch(
this._state){case qi.CANCELLED:return!0;case qi.FINISHED:case qi.FAILED:case qi.CONSTRUCTED:case qi.PAUSED:
case qi.STARTED:return!1}}isFailed(){switch(this._state){case qi.FAILED:return!0;case qi.CANCELLED:case qi.FINISHED:
case qi.CONSTRUCTED:case qi.PAUSED:case qi.STARTED:return!1}}isFinished(){switch(this._state){case qi.FINISHED:
case qi.FAILED:case qi.CANCELLED:return!0;case qi.CONSTRUCTED:case qi.PAUSED:case qi.STARTED:return!1}}isPaused(){
switch(this._state){case qi.PAUSED:return!0;case qi.FAILED:case qi.CANCELLED:case qi.FINISHED:case qi.CONSTRUCTED:
case qi.STARTED:return!1}}isRunning(){switch(this._state){case qi.STARTED:return!0;case qi.PAUSED:case qi.FAILED:
case qi.CANCELLED:case qi.FINISHED:case qi.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case qi.PAUSED:
case qi.STARTED:return!0;case qi.FAILED:case qi.CANCELLED:case qi.FINISHED:case qi.CONSTRUCTED:return!1}}isSuccessful(){
switch(this._state){case qi.FINISHED:return!0;case qi.PAUSED:case qi.STARTED:case qi.FAILED:case qi.CANCELLED:
case qi.CONSTRUCTED:return!1}}onCancelled(e){return this.on(Bi.STAGE_CANCELLED,e)}onChanged(e){return this.on(
Bi.STAGE_CHANGED,e)}onFailed(e){return this.on(Bi.STAGE_FAILED,e)}onFinished(e){return this.on(Bi.STAGE_FINISHED,e)}
onPaused(e){return this.on(Bi.STAGE_PAUSED,e)}onResumed(e){return this.on(Bi.STAGE_RESUMED,e)}onStarted(e){
return this.on(Bi.STAGE_STARTED,e)}start(){if(this._state!==qi.CONSTRUCTED)throw new Error(
`Stage#${this._name} was already started`);return pa.info(`Starting stage ${this._name}`),this._state=qi.STARTED,ws(
this._jobs,t=>{try{return t.start(),!1}catch(e){return pa.error(`Could not start job#${t.getName()}: ${e}`),!0}}
).length===this._jobs.length?(this._state=qi.FAILED,this._observer.hasCallbacks(Bi.STAGE_FAILED
)&&this._observer.triggerEvent(Bi.STAGE_FAILED,this)):this._observer.hasCallbacks(Bi.STAGE_STARTED
)&&this._observer.triggerEvent(Bi.STAGE_STARTED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this),this}pause(){if(this._state===qi.PAUSED)throw new Error(
`Stage#${this._name} was already paused`);pa.info(`Pausing stage ${this._name}`),this._state=qi.PAUSED;var e=ws(
this._jobs,t=>{try{return t.isRunning()&&t.pause(),!1}catch(e){return pa.error(`Could not pause job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to pause jobs for Stage#${this._name}`);return 0<e.length&&pa.warn(
`Warning! Failed to pause some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Bi.STAGE_PAUSED
)&&this._observer.triggerEvent(Bi.STAGE_PAUSED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this),this}resume(){if(this._state===qi.STARTED)throw new Error(
`Stage#${this._name} was already started`);pa.info(`Resuming stage ${this._name}`),this._state=qi.STARTED;var e=ws(
this._jobs,t=>{try{return t.isPaused()&&t.resume(),!1}catch(e){return pa.error(`Could not resume job#${t.getName(
)} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length)throw new TypeError(
`Failed to resume all jobs for Stage#${this._name}`);return 0<e.length&&pa.warn(
`Warning! Failed to resume some jobs for Stage#${this._name}`),this._observer.hasCallbacks(Bi.STAGE_RESUMED
)&&this._observer.triggerEvent(Bi.STAGE_RESUMED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this),this}stop(){if(this.isFinished())throw new Error(
`Stage#${this._name} was already finished`);pa.info(`Stopping stage ${this._name}`),this._state=qi.CANCELLED;var e=ws(
this._jobs,t=>{try{return t.isStarted()&&(t.isPaused()&&t.resume(),t.stop()),!1}catch(e){return pa.error(
`Could not stop job#${t.getName()} for stage#${this._name}: ${e}`),!0}});if(e.length===this._jobs.length
)throw new TypeError(`Failed to stop jobs for Stage#${this._name}`);return 0<e.length&&pa.warn(
`Warning! Failed to stop some jobs for Stage#${this._name}`),this}getErrorString(){return Cn(this._jobs,
e=>e.getErrorString()).join("\n")}getOutputString(){return Cn(this._jobs,e=>e.getOutputString()).join("\n")}_onChanged(e
,t){var r,n;S(this._jobs,e=>e.isFinished())?(0!==this._jobDestructors.length&&(this._jobDestructors=ws(
this._jobDestructors,(e,t)=>{const r=this._jobs[t];try{e()}catch(e){pa.warn(`Warning! Destructor for job#${r.getName(
)} event listener had an error: ${e}`)}return!1})),this.isFinished()||(r=A(this._jobs,e=>e.isFailed()),n=A(this._jobs,
e=>e.isCancelled()),r&&this._state!==qi.FAILED?(this._state=qi.FAILED,this._observer.hasCallbacks(Bi.STAGE_FAILED
)&&this._observer.triggerEvent(Bi.STAGE_FAILED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this)):n&&this._state!==qi.CANCELLED?(this._state=qi.CANCELLED,
this._observer.hasCallbacks(Bi.STAGE_CANCELLED)&&this._observer.triggerEvent(Bi.STAGE_CANCELLED,this),
this._observer.hasCallbacks(Bi.STAGE_CHANGED)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this)
):this._state!==qi.FINISHED&&(this._state=qi.FINISHED,this._observer.hasCallbacks(Bi.STAGE_FINISHED
)&&this._observer.triggerEvent(Bi.STAGE_FINISHED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this)))):(n=S(ws(this._jobs,e=>e.isStarted()),e=>e.isPaused())
)&&this._state!==qi.PAUSED?(this._state=qi.PAUSED,this._observer.hasCallbacks(Bi.STAGE_PAUSED
)&&this._observer.triggerEvent(Bi.STAGE_PAUSED,this),this._observer.hasCallbacks(Bi.STAGE_CHANGED
)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this)):n||this._state!==qi.PAUSED||(this._state=qi.STARTED,
this._observer.hasCallbacks(Bi.STAGE_RESUMED)&&this._observer.triggerEvent(Bi.STAGE_RESUMED,this),
this._observer.hasCallbacks(Bi.STAGE_CHANGED)&&this._observer.triggerEvent(Bi.STAGE_CHANGED,this))}}s(Ra,"Event",Bi)
;const Ca=Wo.createLogger("PipelineController");(io=xi={}).PIPELINE_STARTED="PipelineController:pipelineStarted",
io.PIPELINE_PAUSED="PipelineController:pipelinePaused",io.PIPELINE_RESUMED="PipelineController:pipelineResumed",
io.PIPELINE_FINISHED="PipelineController:pipelineFinished",io.PIPELINE_CANCELLED="PipelineController:pipelineCancelled",
io.PIPELINE_FAILED="PipelineController:pipelineFailed",io.PIPELINE_CHANGED="PipelineController:pipelineChanged",(
io=Wi={})[io.CONSTRUCTED=0]="CONSTRUCTED",io[io.STARTED=1]="STARTED",io[io.PAUSED=2]="PAUSED",
io[io.CANCELLED=3]="CANCELLED",io[io.FINISHED=4]="FINISHED",io[io.FAILED=5]="FAILED";class ga{constructor(e,t){if(s(this
,"_name",void 0),s(this,"_stages",void 0),s(this,"_observer",void 0),s(this,"_changedCallback",void 0),s(this,"_state",
void 0),s(this,"_stageDestructors",void 0),s(this,"_current",void 0),!y(e))throw new TypeError(
`Pipeline name invalid: ${e}`);if(!_(t,B,1))throw new TypeError(`Pipeline#${e} must have at least one stage`)
;this._current=0,this._name=e,this._stages=t,this._observer=new Sa(`PipelineController#${this._name}`),
this._state=Wi.CONSTRUCTED,this._changedCallback=this._onChanged.bind(this),this._stageDestructors=Cn(t,e=>e.onChanged(
this._changedCallback))}getName(){return this._name}destroy(){this._observer.destroy()}on(e,t){
return this._observer.listenEvent(e,t)}toString(){return`PipelineController#${this._name}`}toJSON(){return{
type:"PipelineController",name:this._name,stages:Cn(this._stages,e=>e.toJSON())}}isCancelled(){switch(this._state){
case Wi.CANCELLED:return!0;case Wi.STARTED:case Wi.PAUSED:case Wi.CONSTRUCTED:case Wi.FINISHED:case Wi.FAILED:return!1}}
isFailed(){switch(this._state){case Wi.FAILED:return!0;case Wi.CANCELLED:case Wi.STARTED:case Wi.PAUSED:
case Wi.CONSTRUCTED:case Wi.FINISHED:return!1}}isFinished(){switch(this._state){case Wi.FAILED:case Wi.CANCELLED:
case Wi.FINISHED:return!0;case Wi.STARTED:case Wi.PAUSED:case Wi.CONSTRUCTED:return!1}}isPaused(){switch(this._state){
case Wi.PAUSED:return!0;case Wi.FAILED:case Wi.CANCELLED:case Wi.FINISHED:case Wi.STARTED:case Wi.CONSTRUCTED:return!1}}
isRunning(){switch(this._state){case Wi.STARTED:return!0;case Wi.PAUSED:case Wi.FAILED:case Wi.CANCELLED:
case Wi.FINISHED:case Wi.CONSTRUCTED:return!1}}isStarted(){switch(this._state){case Wi.STARTED:case Wi.PAUSED:return!0
;case Wi.FAILED:case Wi.CANCELLED:case Wi.FINISHED:case Wi.CONSTRUCTED:return!1}}isSuccessful(){switch(this._state){
case Wi.FINISHED:return!0;case Wi.STARTED:case Wi.PAUSED:case Wi.FAILED:case Wi.CANCELLED:case Wi.CONSTRUCTED:return!1}}
onCancelled(e){return this.on(xi.PIPELINE_CANCELLED,e)}onChanged(e){return this.on(xi.PIPELINE_CHANGED,e)}onFailed(e){
return this.on(xi.PIPELINE_FAILED,e)}onFinished(e){return this.on(xi.PIPELINE_FINISHED,e)}onPaused(e){return this.on(
xi.PIPELINE_PAUSED,e)}onResumed(e){return this.on(xi.PIPELINE_RESUMED,e)}onStarted(e){return this.on(xi.PIPELINE_STARTED
,e)}pause(){if(!this.isRunning())throw new Error(`Job#${this._name} was not running`);return Ca.info(
`Pausing pipeline ${this._name}`),this._state=Wi.PAUSED,this._stages[this._current].pause(),this._observer.hasCallbacks(
xi.PIPELINE_PAUSED)&&this._observer.triggerEvent(xi.PIPELINE_PAUSED,this),this._observer.hasCallbacks(
xi.PIPELINE_CHANGED)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this),this}resume(){if(!this.isPaused()
)throw new Error(`Job#${this._name} was not paused`);return Ca.info(`Resuming pipeline ${this._name}`),
this._state=Wi.STARTED,this._stages[this._current].resume(),this._observer.hasCallbacks(xi.PIPELINE_RESUMED
)&&this._observer.triggerEvent(xi.PIPELINE_RESUMED,this),this._observer.hasCallbacks(xi.PIPELINE_CHANGED
)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this),this}start(){if(this._state!==Wi.CONSTRUCTED)throw new Error(
`Job#${this._name} was already started`);return Ca.info(`Starting pipeline ${this._name}`),this._state=Wi.STARTED,
this._stages[this._current].start(),this._observer.hasCallbacks(xi.PIPELINE_STARTED)&&this._observer.triggerEvent(
xi.PIPELINE_STARTED,this),this._observer.hasCallbacks(xi.PIPELINE_CHANGED)&&this._observer.triggerEvent(
xi.PIPELINE_CHANGED,this),this}stop(){if(this._state!==Wi.STARTED)throw new Error(`Job#${this._name} was not started`)
;return Ca.info(`Stopping pipeline ${this._name}`),this._state=Wi.CANCELLED,this._stages[this._current].stop(),
this._observer.hasCallbacks(xi.PIPELINE_CANCELLED)&&this._observer.triggerEvent(xi.PIPELINE_CANCELLED,this),
this._observer.hasCallbacks(xi.PIPELINE_CHANGED)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this),this}
getErrorString(){return Cn(this._stages,e=>e.getErrorString()).join("\n")}getOutputString(){return Cn(this._stages,
e=>e.getOutputString()).join("\n")}_onChanged(e,t){var r,n=this._state;const s=this._stages[this._current];if(t===s)if(
s.isFinished()&&this.isStarted()){try{r=this._stages.indexOf(s),this._stageDestructors[r]()}catch(e){Ca.warn(
`Warning! Exception in the step#${s.getName()} listener destructor: `,e)}if(s.isFailed())this._state=Wi.FAILED,
this._observer.hasCallbacks(xi.PIPELINE_FAILED)&&this._observer.triggerEvent(xi.PIPELINE_FAILED,this),Ca.info(
`Pipeline ${this._name} has failed`);else if(s.isCancelled())this._state=Wi.CANCELLED,this._observer.hasCallbacks(
xi.PIPELINE_CANCELLED)&&this._observer.triggerEvent(xi.PIPELINE_CANCELLED,this),Ca.info(
`Pipeline ${this._name} was cancelled`);else if(this._current+=1,this._current<this._stages.length){
this._state=Wi.STARTED;const i=this._stages[this._current].start();n===Wi.PAUSED&&this._observer.hasCallbacks(
xi.PIPELINE_RESUMED)&&this._observer.triggerEvent(xi.PIPELINE_RESUMED,this),Ca.info(`Stage ${i.getName(
)} for pipeline ${this._name} started`)}else this._state=Wi.FINISHED,this._observer.hasCallbacks(xi.PIPELINE_FINISHED
)&&this._observer.triggerEvent(xi.PIPELINE_FINISHED,this),Ca.info(`Pipeline ${this._name} finished successfully`)
;this._observer.hasCallbacks(xi.PIPELINE_CHANGED)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this)
}else s.isPaused()&&!this.isPaused()?(this._state=Wi.PAUSED,this._observer.hasCallbacks(xi.PIPELINE_PAUSED
)&&this._observer.triggerEvent(xi.PIPELINE_PAUSED,this),this._observer.hasCallbacks(xi.PIPELINE_CHANGED
)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this),Ca.info(`Pipeline ${this._name} was paused`)):s.isStarted(
)&&this.isPaused()&&(this._state=Wi.STARTED,this._observer.hasCallbacks(xi.PIPELINE_RESUMED
)&&this._observer.triggerEvent(xi.PIPELINE_RESUMED,this),this._observer.hasCallbacks(xi.PIPELINE_CHANGED
)&&this._observer.triggerEvent(xi.PIPELINE_CHANGED,this),Ca.info(`Pipeline ${this._name} was resumed`))}}s(ga,"Event",xi
);const Na=Wo.createLogger("ScriptController");(io=Vi={}).SCRIPT_STARTED="ScriptController:scriptStarted",
io.SCRIPT_PAUSED="ScriptController:scriptPaused",io.SCRIPT_RESUMED="ScriptController:scriptResumed",
io.SCRIPT_CANCELLED="ScriptController:scriptCancelled",io.SCRIPT_FAILED="ScriptController:scriptFailed",
io.SCRIPT_FINISHED="ScriptController:scriptFinished",io.SCRIPT_CHANGED="ScriptController:scriptChanged",(io=Ki={}
)[io.CONSTRUCTED=0]="CONSTRUCTED",io[io.STARTED=1]="STARTED",io[io.PAUSED=2]="PAUSED",io[io.CANCELLED=3]="CANCELLED",
io[io.FINISHED=4]="FINISHED",io[io.FAILED=5]="FAILED";class va{constructor(e,t,r=[],n={}){if(s(this,"_observer",void 0),
s(this,"_name",void 0),s(this,"_command",void 0),s(this,"_args",void 0),s(this,"_env",void 0),s(this,"_closeCallback",
void 0),s(this,"_stdoutCallback",void 0),s(this,"_stderrCallback",void 0),s(this,"_state",void 0),s(this,"_process",
void 0),s(this,"_stdoutChunks",void 0),s(this,"_stderrChunks",void 0),!y(e))throw new TypeError(
`Script name invalid: ${e}`);if(!d(t))throw new TypeError(`Script#${e} must have a valid command: ${t}`);if(!_(r,d,0)
)throw new TypeError(`Script#${e} must have a valid args: ${JSON.stringify(r)}`);if(!p(n,d,d))throw new TypeError(
`Script#${e} must have a valid env: ${JSON.stringify(n)}`);this._state=Ki.CONSTRUCTED,this._name=e,this._command=t,
this._args=r,this._env=n,this._observer=new Sa(`ScriptController#${e}`),this._closeCallback=this._onClose.bind(this),
this._stdoutCallback=this._onStdOut.bind(this),this._stderrCallback=this._onStdErr.bind(this),this._stdoutChunks=[],
this._stderrChunks=[]}destroy(){this._observer.destroy(),this.isPaused()?this.resume().stop():this.isRunning(
)&&this.stop()}getName(){return this._name}getState(){return this._state}on(e,t){return this._observer.listenEvent(e,t)}
toString(){return`ScriptController#${this._name}`}toJSON(){return{type:"ScriptController",name:this._name,
args:this._args,env:this._env}}isRunning(){switch(this._state){case Ki.STARTED:return!0;case Ki.PAUSED:
case Ki.CONSTRUCTED:case Ki.CANCELLED:case Ki.FINISHED:case Ki.FAILED:return!1}}isStarted(){switch(this._state){
case Ki.STARTED:case Ki.PAUSED:return!0;case Ki.CONSTRUCTED:case Ki.CANCELLED:case Ki.FINISHED:case Ki.FAILED:return!1}}
isPaused(){switch(this._state){case Ki.PAUSED:return!0;case Ki.CONSTRUCTED:case Ki.STARTED:case Ki.CANCELLED:
case Ki.FINISHED:case Ki.FAILED:return!1}}isFinished(){switch(this._state){case Ki.CANCELLED:case Ki.FINISHED:
case Ki.FAILED:return!0;case Ki.CONSTRUCTED:case Ki.STARTED:case Ki.PAUSED:return!1}}isSuccessful(){switch(this._state){
case Ki.FINISHED:return!0;case Ki.FAILED:case Ki.CANCELLED:case Ki.CONSTRUCTED:case Ki.STARTED:case Ki.PAUSED:return!1}}
isCancelled(){switch(this._state){case Ki.CANCELLED:return!0;case Ki.FINISHED:case Ki.FAILED:case Ki.CONSTRUCTED:
case Ki.STARTED:case Ki.PAUSED:return!1}}isFailed(){switch(this._state){case Ki.FAILED:return!0;case Ki.CANCELLED:
case Ki.FINISHED:case Ki.CONSTRUCTED:case Ki.STARTED:case Ki.PAUSED:return!1}}start(){if(this._state!==Ki.CONSTRUCTED
)throw new Error(`Script#${this._name} was already started`);return Na.info(
`Starting command "${this._command} ${this._args.join(" ")}"`),this._state=Ki.STARTED,this._process=Co.spawn(
this._command,this._args),this._process.stdout.on("data",this._stdoutCallback),this._process.stderr.on("data",
this._stderrCallback),this._process.on("close",this._closeCallback),this._observer.hasCallbacks(Vi.SCRIPT_STARTED
)&&this._observer.triggerEvent(Vi.SCRIPT_STARTED,this),this._observer.hasCallbacks(Vi.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Vi.SCRIPT_CHANGED,this),this}pause(){if(!this.isRunning())throw new Error(
`Script#${this._name} was not running`);if(!this._process)throw new Error("No process initialized");return Na.info(
`Pausing command "${this._command} ${this._args.join(" ")}"`),this._state=Ki.PAUSED,this._process.kill("SIGSTOP"),
this._observer.hasCallbacks(Vi.SCRIPT_PAUSED)&&this._observer.triggerEvent(Vi.SCRIPT_PAUSED,this),
this._observer.hasCallbacks(Vi.SCRIPT_CHANGED)&&this._observer.triggerEvent(Vi.SCRIPT_CHANGED,this),this}resume(){if(
!this.isPaused())throw new Error(`Script#${this._name} was not paused`);if(!this._process)throw new Error(
"No process initialized");return Na.info(`Resuming command "${this._command} ${this._args.join(" ")}"`),
this._state=Ki.STARTED,this._process.kill("SIGCONT"),this._observer.hasCallbacks(Vi.SCRIPT_RESUMED
)&&this._observer.triggerEvent(Vi.SCRIPT_RESUMED,this),this._observer.hasCallbacks(Vi.SCRIPT_CHANGED
)&&this._observer.triggerEvent(Vi.SCRIPT_CHANGED,this),this}stop(){if(this._state!==Ki.STARTED)throw new Error(
`Script#${this._name} was not started`);if(!this._process)throw new Error("No process initialized");return Na.debug(
`Cancelling command "${this._command} ${this._args.join(" ")}"`),this._state=Ki.CANCELLED,this._process.kill("SIGTERM"),
this._observer.hasCallbacks(Vi.SCRIPT_CANCELLED)&&this._observer.triggerEvent(Vi.SCRIPT_CANCELLED,this),
this._observer.hasCallbacks(Vi.SCRIPT_CHANGED)&&this._observer.triggerEvent(Vi.SCRIPT_CHANGED,this),this}onStarted(e){
return this.on(Vi.SCRIPT_STARTED,e)}onPaused(e){return this.on(Vi.SCRIPT_PAUSED,e)}onResumed(e){return this.on(
Vi.SCRIPT_RESUMED,e)}onCancelled(e){return this.on(Vi.SCRIPT_CANCELLED,e)}onFailed(e){return this.on(Vi.SCRIPT_FAILED,e)
}onFinished(e){return this.on(Vi.SCRIPT_FINISHED,e)}onChanged(e){return this.on(Vi.SCRIPT_CHANGED,e)}getErrorString(){
return Buffer.concat(this._stderrChunks).toString("utf8")}getOutputString(){return Buffer.concat(this._stdoutChunks
).toString("utf8")}_onClose(e){Na.debug(`Child process stopped with exit status ${e}`),0===e?(this._state=Ki.FINISHED,
this._observer.hasCallbacks(Vi.SCRIPT_FINISHED)&&this._observer.triggerEvent(Vi.SCRIPT_FINISHED,this)):(
this._state=Ki.FAILED,this._observer.hasCallbacks(Vi.SCRIPT_FAILED)&&this._observer.triggerEvent(Vi.SCRIPT_FAILED,this))
,this._observer.hasCallbacks(Vi.SCRIPT_CHANGED)&&this._observer.triggerEvent(Vi.SCRIPT_CHANGED,this)}_onStdOut(e){
this._stdoutChunks.push(e),process.stdout.write(e)}_onStdErr(e){this._stderrChunks.push(e),process.stderr.write(e)}}s(va
,"Event",Vi),s(va,"State",Ki);const Da=Wo.createLogger("PipelineRunner");class ba{static createStepController(e){if(w(e)
)return new va(e.name,e.command,e.args,e.env);throw new TypeError(`Unknown step type: ${e.name}`)}
static createJobController(e){return new Ta(e.name,Cn(e.steps,e=>this.createStepController(e)))}
static createStageController(e){return new Ra(e.name,Cn(e.jobs,e=>this.createJobController(e)))}
static createPipelineController(e){return new ga(e.name,Cn(e.stages,e=>this.createStageController(e)))}
static createController(e){return H(e)?(Da.debug(`Starting pipeline ${e.name}`),this.createPipelineController(e)):$(e)?(
Da.debug(`Starting stage ${e.name}`),this.createStageController(e)):G(e)?(Da.debug(`Starting job ${e.name}`),
this.createJobController(e)):(Da.debug(`Starting step ${e.name}`),this.createStepController(e))}
static async startAndWaitUntilFinished(n){return new Promise((e,t)=>{let r;try{r=n.onChanged(()=>{try{n.isFinished()?(
Da.debug(`Controller ${n.toString()} finished`),r&&(r(),r=void 0),e()):Da.debug(`Controller ${n.toString(
)} state changed`)}catch(e){r&&(r(),r=void 0),t(e)}}),n.start(),Da.debug(`Controller ${n.toString()} started`)}catch(e){
r&&(r(),r=void 0),t(e)}})}}const Ia=Wo.createLogger("runHttpResource"),Oa=Wo.createLogger("runLocalResource"),
La=Wo.createLogger("runMatrixRoomResource"),Pa=Wo.createLogger("main");Wo.setLogLevel(so),async function(e=[]){var t,r,n
,s;try{if(t="nor-pipeline-runner",e.shift(),!e.shift())return console.log(U(t)),ji.ARGUMENT_PARSE_ERROR;if(0===e.length
)return console.log(U(t)),ji.ARGUMENT_PARSE_ERROR;do{switch(r=e.shift(),function(){switch(r){case"-h":case"--help":
case 0:return 0;case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return console.log(U(t)),
ji.OK;case 1:return console.log(function(){const e=ws([Qo?"LOCAL":"",Zo?"HTTP":"",ea?"MATRIX":"",ra?"TEST":"",
na?"DEV":""],e=>!!e);return`nor-pipeline-runner v${zo} [${e.join("|")}]
    
Built with options:

  BUILD_VERSION               = '${zo}'
  BUILD_NODE_ENV              = '${Xo}'
  BUILD_DATE                  = '${Yo}'
  BUILD_WITH_LOCAL_RESOURCES  = '${Qo}'
  BUILD_WITH_HTTP_RESOURCES   = '${Zo}'
  BUILD_WITH_MATRIX_RESOURCES = '${ea}'
`}()),ji.OK}if(void 0===(n=Ko.parseRunnerResource(r)))return Pa.error(`Unsupported argument: ${r}`),console.log(U(t)),
ji.UNKNOWN_ARGUMENT;if((s=await async function(e){switch(e.type){case yi.HTTP:return Zo?async function(t){var r,n,s,i
;try{const o={};if(t.authentication&&(O(t.authentication)&&(o.Authorization=`Bearer ${t.authentication.access_token}`),
b(t.authentication)&&(r=t.authentication.username,n=t.authentication.password,o.Authorization=`Basic ${new Buffer(
r+":"+n).toString("base64")}`)),void 0===(s=await Aa.getJson(t.url,o)))return Ia.error(`Failed to load URL "${t.url}": `
,s),ji.RESOURCE_LOAD_FAILED;if(void 0===(i=M(s)))return Ia.error(`Model from URL "${t.url}" was not valid: `,s),
ji.RESOURCE_MODEL_INVALID;let e=ba.createController(i);return Ia.info(`Running ${e.getName()} from ${t.url}`),
await ba.startAndWaitUntilFinished(e),Ia.info(`Successfully finished ${e.getName()} from ${t.url}`),ji.OK}catch(e){
return Ia.error("Error: ",e),ji.HTTP_RESOURCE_FAILED}}(e):ji.UNBUILD_FEATURE;case yi.LOCAL:return Qo?async function(t){
try{var r=await async function(e){const t=(s=e,i={encoding:"utf8"},await new Promise((r,n)=>{try{go.readFile(s,i,(e,t
)=>{e?n(e):r(t)})}catch(e){n(e)}}));var s,i;return d(t)?t:t.toString("utf8")}(t.path),n=JSON.parse(r),s=M(n);if(
void 0===s)return Oa.warn("Model was not valid: ",n),ji.RESOURCE_MODEL_INVALID;let e=ba.createController(s)
;return Oa.info(`Running ${e.getName()} from ${t.path}`),await ba.startAndWaitUntilFinished(e),Oa.info(
`Successfully finished ${e.getName()} from ${t.path}`),ji.OK}catch(e){return Oa.error("Error: ",e),
ji.LOCAL_RESOURCE_FAILED}}(e):ji.UNBUILD_FEATURE;case yi.MATRIX_ROOM:return ea?async function(e){try{return La.error(
"Unimplemented matrix resource: ",e),ji.UNIMPLEMENTED_FEATURE}catch(e){return La.error("Error: ",e),
ji.MATRIX_RESOURCE_FAILED}}(e):ji.UNBUILD_FEATURE;default:return ji.UNKNOWN_RESOURCE_TYPE}}(n))!==ji.OK
)return s===ji.UNKNOWN_RESOURCE_TYPE?(Pa.error(`Error NorPP${s}: ${P(s)}: Resource type was unknown: ${n.type}`),
console.log(U(t)),ji.UNKNOWN_RESOURCE_TYPE):(function(e){if(Ci(e)&&!(e<0||255<e)){if(
Gi.FATAL_SIGNAL_RANGE_START<=e&&e<=Gi.FATAL_SIGNAL_RANGE_END)return 1;switch(e){case Gi.OK:case Gi.GENERAL_ERRORS:
case Gi.MISUSE_OF_SHELL_BUILTINS:case Gi.ARGUMENT_PARSE_ERROR:case Gi.UNKNOWN_ARGUMENT:case Gi.UNKNOWN_RESOURCE_TYPE:
case Gi.RESOURCE_LOAD_FAILED:case Gi.RESOURCE_MODEL_INVALID:case Gi.LOCAL_RESOURCE_FAILED:case Gi.HTTP_RESOURCE_FAILED:
case Gi.MATRIX_RESOURCE_FAILED:case Gi.UNIMPLEMENTED_FEATURE:case Gi.FATAL_ERROR:case Gi.USAGE:case Gi.DATAERR:
case Gi.NOINPUT:case Gi.NOUSER:case Gi.NOHOST:case Gi.UNAVAILABLE:case Gi.SOFTWARE:case Gi.OSERR:case Gi.OSFILE:
case Gi.CANTCREAT:case Gi.IOERR:case Gi.TEMPFAIL:case Gi.PROTOCOL:case Gi.NOPERM:case Gi.CONFIG:
case Gi.COMMAND_INVOKED_CANNOT_EXECUTE:case Gi.COMMAND_NOT_FOUND:case Gi.INVALID_ARGUMENT_TO_EXIT:
case Gi.FATAL_SIGNAL_RANGE_START:case Gi.FATAL_SIGNAL_RANGE_END:case Gi.EXIT_STATUS_OUT_OF_RANGE:return 1;default:return
}}}(s)?Pa.error(`Error EX-${s}: ${P(s)}: for ${v(n.type)} resource ${r}`):Pa.error(`Error: Exit status ${s}: for ${v(
n.type)} resource ${r}`),s)}while(1<=e.length);return ji.OK}catch(e){return Pa.error("Fatal error: ",e),ji.FATAL_ERROR}
}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
