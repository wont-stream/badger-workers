/* esm.sh - esbuild bundle(has-symbols@1.0.3/shams) es2022 production */
var m=Object.create;var y=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var v=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),w=(r,e)=>{for(var t in e)y(r,t,{get:e[t],enumerable:!0})},s=(r,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of j(e))!S.call(r,o)&&o!==t&&y(r,o,{get:()=>e[o],enumerable:!(l=O(e,o))||l.enumerable});return r},f=(r,e,t)=>(s(r,e,"default"),t&&s(t,e,"default")),c=(r,e,t)=>(t=r!=null?m(g(r)):{},s(e||!r||!r.__esModule?y(t,"default",{value:r,enumerable:!0}):t,r));var a=v((x,i)=>{"use strict";i.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),l=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(l)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var u=Object.getOwnPropertySymbols(e);if(u.length!==1||u[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var b=Object.getOwnPropertyDescriptor(e,t);if(b.value!==o||b.enumerable!==!0)return!1}return!0}});var n={};w(n,{default:()=>d});var P=c(a());f(n,c(a()));var{default:p,..._}=P,d=p!==void 0?p:_;export{d as default};
//# sourceMappingURL=shams.js.map