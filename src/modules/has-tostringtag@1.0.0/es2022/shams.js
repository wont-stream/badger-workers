/* esm.sh - esbuild bundle(has-tostringtag@1.0.0/shams) es2022 production */
import * as __0$ from "../../has-symbols@1.0.3/es2022/shams.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"has-symbols/shams":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var _=Object.create;var n=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty;var h=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,e)=>(typeof require<"u"?require:r)[e]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var x=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports),T=(t,r)=>{for(var e in r)n(t,e,{get:r[e],enumerable:!0})},u=(t,r,e,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of g(r))!c.call(t,s)&&s!==e&&n(t,s,{get:()=>r[s],enumerable:!(i=S(r,s))||i.enumerable});return t},a=(t,r,e)=>(u(t,r,"default"),e&&u(e,r,"default")),m=(t,r,e)=>(e=t!=null?_(p(t)):{},u(r||!t||!t.__esModule?n(e,"default",{value:t,enumerable:!0}):e,t));var f=x((k,d)=>{"use strict";var b=h("has-symbols/shams");d.exports=function(){return b()&&!!Symbol.toStringTag}});var o={};T(o,{default:()=>v});var y=m(f());a(o,m(f()));var{default:l,...q}=y,v=l!==void 0?l:q;export{v as default};
//# sourceMappingURL=shams.js.map