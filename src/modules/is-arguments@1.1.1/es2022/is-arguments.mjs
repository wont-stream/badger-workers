/* esm.sh - esbuild bundle(is-arguments@1.1.1) es2022 production */
import * as __0$ from "../../has-tostringtag@1.0.0/es2022/shams.js";
import * as __1$ from "../../call-bind@1.0.5/es2022/callBound.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"has-tostringtag/shams":return e(__0$);case"call-bind/callBound":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var g=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var m=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var h=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),x=(r,t)=>{for(var e in t)g(r,e,{get:t[e],enumerable:!0})},u=(r,t,e,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of j(t))!l.call(r,s)&&s!==e&&g(r,s,{get:()=>t[s],enumerable:!(f=S(t,s))||f.enumerable});return r},o=(r,t,e)=>(u(r,t,"default"),e&&u(e,t,"default")),d=(r,t,e)=>(e=r!=null?A(_(r)):{},u(t||!r||!r.__esModule?g(e,"default",{value:r,enumerable:!0}):e,r));var a=h((k,b)=>{"use strict";var T=m("has-tostringtag/shams")(),q=m("call-bind/callBound"),c=q("Object.prototype.toString"),i=function(t){return T&&t&&typeof t=="object"&&Symbol.toStringTag in t?!1:c(t)==="[object Arguments]"},p=function(t){return i(t)?!0:t!==null&&typeof t=="object"&&typeof t.length=="number"&&t.length>=0&&c(t)!=="[object Array]"&&c(t.callee)==="[object Function]"},L=function(){return i(arguments)}();i.isLegacyArguments=p;b.exports=L?i:p});var n={};x(n,{default:()=>O});var B=d(a());o(n,d(a()));var{default:y,...F}=B,O=y!==void 0?y:F;export{O as default};
//# sourceMappingURL=is-arguments.mjs.map