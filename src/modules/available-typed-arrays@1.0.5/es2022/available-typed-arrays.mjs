/* esm.sh - esbuild bundle(available-typed-arrays@1.0.5) es2022 production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var p=Object.create;var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var v=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),U=(a,r)=>{for(var t in r)i(a,t,{get:r[t],enumerable:!0})},l=(a,r,t,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of m(r))!b.call(a,o)&&o!==t&&i(a,o,{get:()=>r[o],enumerable:!(s=g(r,o))||s.enumerable});return a},n=(a,r,t)=>(l(a,r,"default"),t&&l(t,r,"default")),A=(a,r,t)=>(t=a!=null?p(_(a)):{},l(r||!a||!a.__esModule?i(t,"default",{value:a,enumerable:!0}):t,a));var f=v((B,u)=>{"use strict";var y=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],c=typeof globalThis>"u"?__global$:globalThis;u.exports=function(){for(var r=[],t=0;t<y.length;t++)typeof c[y[t]]=="function"&&(r[r.length]=y[t]);return r}});var e={};U(e,{default:()=>x});var h=A(f());n(e,A(f()));var{default:d,...I}=h,x=d!==void 0?d:I;export{x as default};
//# sourceMappingURL=available-typed-arrays.mjs.map