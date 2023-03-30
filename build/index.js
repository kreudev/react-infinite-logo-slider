(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c});const r=require("react");var n=e.n(r),o=["children","width"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var t,o,a=e.children,i=e.width,c=void 0===i?"200px":i,d=e.duration,u=void 0===d?40:d,s=e.toRight,f=void 0!==s&&s,m=e.pauseOnHover,y=void 0!==m&&m,p=e.blurBorders,g=void 0!==p&&p,v=e.blurBoderColor,h=void 0===v?"#fff":v,b=(t=(0,r.useState)(""),o=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,d=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){d=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw o}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),E=b[0],w=b[1];return(0,r.useEffect)((function(){w(function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<10;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}())}),[]),(0,r.useEffect)((function(){var e=document.createElement("style");e.type="text/css",e.innerHTML="        @-webkit-keyframes slider_logo_slider {            0% {                transform: translateX(0);            }            100% {                transform: translateX(A_DYNAMIC_VALUE);            }        }        @-moz-keyframes slider_logo_slider {            0% {                transform: translateX(0);            }            100% {                transform: translateX(A_DYNAMIC_VALUE);            }        }".replace(/A_DYNAMIC_VALUE/g,"calc(".concat(f?"":"-").concat(c," * ").concat(null==a?void 0:a.length,")")),document.getElementsByTagName("head")[0].appendChild(e)}),[f,c,a]),n().createElement("div",{style:{position:"relative"}},n().createElement("div",{style:{width:"100%",height:"auto",margin:"auto",top:0,overflow:"hidden"},onMouseEnter:function(){return y&&void(document.getElementById("slider_".concat(E)).style.animationPlayState="paused")},onMouseLeave:function(){return y&&void(document.getElementById("slider_".concat(E)).style.animationPlayState="running")},id:"slider_wrapper_".concat(E)},n().createElement("div",{style:{display:"flex",animation:"slider_logo_slider ".concat(u,"s linear infinite"),width:"calc(".concat(c," * ").concat(3*(null==a?void 0:a.length),")"),top:0},id:"slider_".concat(E)},null==a?void 0:a.map((function(e,t){return n().createElement(n().Fragment,{key:t},n().cloneElement(e,{width:c}))})),null==a?void 0:a.map((function(e,t){return n().createElement(n().Fragment,{key:t},n().cloneElement(e,{width:c}))})),null==a?void 0:a.map((function(e,t){return n().createElement(n().Fragment,{key:t},n().cloneElement(e,{width:c}))})))),g&&n().createElement(n().Fragment,null,n().createElement("div",{style:{position:"absolute",right:0,top:"0px",width:"180px",transform:"rotate(180deg)",zIndex:10,height:"105%",background:"linear-gradient(90deg, ".concat(h," 10%, rgba(255, 255, 255, 0) 80%)")}}),n().createElement("div",{style:{position:"absolute",left:0,top:"0px",width:"180px",zIndex:10,height:"120%",background:"linear-gradient(90deg, ".concat(h," 10%, rgba(255, 255, 255, 0) 80%)")}})))};i.Slide=function(e){var t=e.children,r=e.width,l=void 0===r?"200px":r,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,o);return n().createElement("div",a({style:{width:l,alignItems:"center",display:"flex"}},i),t)};const c=i;module.exports=t})();