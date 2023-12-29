/* esm.sh - esbuild bundle(css-color-converter@2.0.0) es2022 production */
import * as __0$ from "../../color-name@1.1.4/es2022/color-name.mjs";
import * as __1$ from "../../css-unit-converter@1.1.2/es2022/css-unit-converter.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"color-name":return e(__0$);case"css-unit-converter":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var L=Object.create;var y=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var A=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var J=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),K=(r,e)=>{for(var t in e)y(r,t,{get:e[t],enumerable:!0})},_=(r,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of z(e))!G.call(r,n)&&n!==t&&y(r,n,{get:()=>e[n],enumerable:!(a=W(e,n))||a.enumerable});return r},d=(r,e,t)=>(_(r,e,"default"),t&&_(t,e,"default")),H=(r,e,t)=>(t=r!=null?L(B(r)):{},_(e||!r||!r.__esModule?y(t,"default",{value:r,enumerable:!0}):t,r));var x=J(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.fromRgba=m;g.fromRgb=S;g.fromHsla=p;g.fromHsl=j;g.fromString=q;g.default=void 0;var I=$(A("color-name")),Q=$(A("css-unit-converter"));function $(r){return r&&r.__esModule?r:{default:r}}function V(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function R(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function X(r,e,t){return e&&R(r.prototype,e),t&&R(r,t),r}function i(r,e){return tr(r)||rr(r,e)||Z(r,e)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(r,e){if(r){if(typeof r=="string")return M(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(r,e)}}function M(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}function rr(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],a=!0,n=!1,u=void 0;try{for(var o=r[Symbol.iterator](),f;!(a=(f=o.next()).done)&&(t.push(f.value),!(e&&t.length===e));a=!0);}catch(s){n=!0,u=s}finally{try{!a&&o.return!=null&&o.return()}finally{if(n)throw u}}return t}}function tr(r){if(Array.isArray(r))return r}var F=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/,T=/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/,k=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,w=/^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,C=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,O=/^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,N=/^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;function h(r,e){return r.indexOf(e)>-1}function er(r,e,t){var a=r/255,n=e/255,u=t/255,o=Math.max(a,n,u),f=Math.min(a,n,u),s=o-f,l=(o+f)/2;if(s===0)return[0,0,l*100];var c=s/(1-Math.abs(2*l-1)),b=function(){switch(o){case a:return(n-u)/s%6;case n:return(u-a)/s+2;default:return(a-n)/s+4}}();return[b*60,c*100,l*100]}function ar(r,e,t){var a=r/60,n=e/100,u=t/100,o=(1-Math.abs(2*u-1))*n,f=o*(1-Math.abs(a%2-1)),s=u-o/2,l=function(){return a<1?[o,f,0]:a<2?[f,o,0]:a<3?[0,o,f]:a<4?[0,f,o]:a<5?[f,0,o]:[o,0,f]}(),c=i(l,3),b=c[0],U=c[1],D=c[2];return[(b+s)*255,(U+s)*255,(D+s)*255]}var nr=function(){function r(e){var t=i(e,4),a=t[0],n=t[1],u=t[2],o=t[3];V(this,r),this.values=[Math.max(Math.min(parseInt(a,10),255),0),Math.max(Math.min(parseInt(n,10),255),0),Math.max(Math.min(parseInt(u,10),255),0),o==null?1:Math.max(Math.min(parseFloat(o),255),0)]}return X(r,[{key:"toRgbString",value:function(){var t=i(this.values,4),a=t[0],n=t[1],u=t[2],o=t[3];return o===1?"rgb(".concat(a,", ").concat(n,", ").concat(u,")"):"rgba(".concat(a,", ").concat(n,", ").concat(u,", ").concat(o,")")}},{key:"toHslString",value:function(){var t=this.toHslaArray(),a=i(t,4),n=a[0],u=a[1],o=a[2],f=a[3];return f===1?"hsl(".concat(n,", ").concat(u,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(u,"%, ").concat(o,"%, ").concat(f,")")}},{key:"toHexString",value:function(){var t=i(this.values,4),a=t[0],n=t[1],u=t[2],o=t[3];return a=Number(a).toString(16).padStart(2,"0"),n=Number(n).toString(16).padStart(2,"0"),u=Number(u).toString(16).padStart(2,"0"),o=o<1?parseInt(o*255,10).toString(16).padStart(2,"0"):"","#".concat(a).concat(n).concat(u).concat(o)}},{key:"toRgbaArray",value:function(){return this.values}},{key:"toHslaArray",value:function(){var t=i(this.values,4),a=t[0],n=t[1],u=t[2],o=t[3],f=er(a,n,u),s=i(f,3),l=s[0],c=s[1],b=s[2];return[l,c,b,o]}}]),r}();function m(r){var e=i(r,4),t=e[0],a=e[1],n=e[2],u=e[3];return new nr([t,a,n,u])}function S(r){var e=i(r,3),t=e[0],a=e[1],n=e[2];return m([t,a,n,1])}function p(r){var e=i(r,4),t=e[0],a=e[1],n=e[2],u=e[3],o=ar(t,a,n),f=i(o,3),s=f[0],l=f[1],c=f[2];return m([s,l,c,u])}function j(r){var e=i(r,3),t=e[0],a=e[1],n=e[2];return p([t,a,n,1])}function or(r){var e=F.exec(r)||T.exec(r),t=i(e,5),a=t[1],n=t[2],u=t[3],o=t[4];return a=parseInt(a.length<2?a.repeat(2):a,16),n=parseInt(n.length<2?n.repeat(2):n,16),u=parseInt(u.length<2?u.repeat(2):u,16),o=o&&(parseInt(o.length<2?o.repeat(2):o,16)/255).toPrecision(1)||1,m([a,n,u,o])}function ur(r){var e=k.exec(r)||C.exec(r)||w.exec(r)||O.exec(r),t=i(e,5),a=t[1],n=t[2],u=t[3],o=t[4];return a=h(a,"%")?parseInt(a,10)*255/100:parseInt(a,10),n=h(n,"%")?parseInt(n,10)*255/100:parseInt(n,10),u=h(u,"%")>0?parseInt(u,10)*255/100:parseInt(u,10),o=o===void 0?1:parseFloat(o)/(h(o,"%")?100:1),m([a,n,u,o])}function fr(r){var e=N.exec(r),t=i(e,6),a=t[1],n=t[2],u=t[3],o=t[4],f=t[5];return n=n||"deg",a=(0,Q.default)(parseFloat(a),n,"deg"),u=parseFloat(u),o=parseFloat(o),f=f===void 0?1:parseFloat(f)/(h(f,"%")?100:1),p([a,u,o,f])}function q(r){return I.default[r]?S(I.default[r]):F.test(r)||T.test(r)?or(r):k.test(r)||C.test(r)||w.test(r)||O.test(r)?ur(r):N.test(r)?fr(r):null}var sr={fromString:q,fromRgb:S,fromRgba:m,fromHsl:j,fromHsla:p};g.default=sr});var v={};K(v,{__esModule:()=>ir,default:()=>br,fromHsl:()=>vr,fromHsla:()=>gr,fromRgb:()=>cr,fromRgba:()=>lr,fromString:()=>dr});var P=H(x());d(v,H(x()));var{__esModule:ir,fromRgba:lr,fromRgb:cr,fromHsla:gr,fromHsl:vr,fromString:dr}=P,{default:E,...mr}=P,br=E!==void 0?E:mr;export{ir as __esModule,br as default,vr as fromHsl,gr as fromHsla,cr as fromRgb,lr as fromRgba,dr as fromString};
//# sourceMappingURL=css-color-converter.mjs.map