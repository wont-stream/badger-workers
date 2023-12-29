/* esm.sh - esbuild bundle(set-function-length@1.1.1) es2022 production */
import * as __0$ from "../../get-intrinsic@1.2.2/es2022/get-intrinsic.mjs";
import * as __1$ from "../../define-data-property@1.1.1/es2022/define-data-property.mjs";
import * as __2$ from "../../has-property-descriptors@1.0.1/es2022/has-property-descriptors.mjs";
import * as __3$ from "../../gopd@1.0.1/es2022/gopd.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"get-intrinsic":return e(__0$);case"define-data-property":return e(__1$);case"has-property-descriptors":return e(__2$);case"gopd":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var w=Object.create;var l=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var f=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var I=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),L=(e,r)=>{for(var t in r)l(e,t,{get:r[t],enumerable:!0})},s=(e,r,t,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of q(r))!y.call(e,i)&&i!==t&&l(e,i,{get:()=>r[i],enumerable:!(u=d(r,i))||u.enumerable});return e},n=(e,r,t)=>(s(e,r,"default"),t&&s(t,r,"default")),g=(e,r,t)=>(t=e!=null?w(x(e)):{},s(r||!e||!e.__esModule?l(t,"default",{value:e,enumerable:!0}):t,e));var v=I((M,h)=>{"use strict";var b=f("get-intrinsic"),F=f("define-data-property"),D=f("has-property-descriptors")(),c=f("gopd"),m=b("%TypeError%"),E=b("%Math.floor%");h.exports=function(r,t){if(typeof r!="function")throw new m("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||E(t)!==t)throw new m("`length` must be a positive 32-bit integer");var u=arguments.length>2&&!!arguments[2],i=!0,p=!0;if("length"in r&&c){var a=c(r,"length");a&&!a.configurable&&(i=!1),a&&!a.writable&&(p=!1)}return(i||p||!u)&&(D?F(r,"length",t,!0,!0):F(r,"length",t)),r}});var o={};L(o,{default:()=>C});var T=g(v());n(o,g(v()));var{default:_,...$}=T,C=_!==void 0?_:$;export{C as default};
//# sourceMappingURL=set-function-length.mjs.map