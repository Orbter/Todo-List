/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/boxicons/dist/boxicons.js":
/*!************************************************!*\
  !*** ./node_modules/boxicons/dist/boxicons.js ***!
  \************************************************/
/***/ ((module) => {

!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=f();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){a.isDone=!0,a.exec()})):c(s).then((function(){c(i).then((function(){a.isDone=!0,a.exec()}))}))}function f(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function c(t){var e=f(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var t,e;t=window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return g}));var r,o,a,i,s=n(1),f=n.n(s),c=n(2),l=n.n(c),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=(o=(r=Object).getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+f.a+"\n"+l.a+'\n</style>\n<div id="icon"></div>';var g=d(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]||(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(t){t=t||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),e}());e.default=g,g.define()}])}, true?module.exports=e():0}));
//# sourceMappingURL=boxicons.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: end;
  font-family: "Lato", sans-serif;
}

li {
  list-style-type: none;
}

.tab {
  height: 100vh;
  background-color: #252629;
  display: flex;
  flex-direction: column;
  gap: 50px;
  transition: all 0.3s ease;
  font-family: "Lato", sans-serif;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.bx {
  fill: white;
}

.menu {
  fill: white;
  cursor: pointer;
}

.menu-headline {
  color: white;
  display: flex;
  justify-content: center;
  cursor: default;
}

.menu-box {
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 10px;
}

.menu-user {
  color: white;
  padding: 10px;
  font-size: 1.8rem;
  cursor: default;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.menu-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.menu-main-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.bx-box {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  padding-left: 5px;
  cursor: pointer;
  width: 80%;
}

.bx-box:before {
  content: "";
}

.bx-text::before {
  content: "";
}

.bx-text {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
}

.sidebar-active .bx-text,
.sidebar-active .menu-headline,
.sidebar-active .menu-user {
  display: none;
}

.sidebar-active .bx-box {
  padding: 15px;
  width: fit-content;
  gap: 0;
}

.sidebar-active .menu-main-list {
  justify-content: center;
  align-items: center;
}

.sidebar-active .menu-list {
  gap: 0;
}

.sidebar-active .menu-content {
  gap: 15px;
}

.sidebar-active .menu-user {
  display: none;
}

.sidebar-active .menu-box {
  justify-content: center;
}

.sidebar-active {
  width: 65px;
  z-index: 2;
}

.bx-box:hover {
  background-color: white;
  border-radius: 8px;
}

.bx-box:hover .bx {
  fill: #252629;
}

.bx-box:hover .bx-text {
  color: #252629;
}

.main-content {
  min-width: calc(100vw - clamp(220px, 40vw, 300px));
  width: calc(100vw - 65px);
  display: flex;
  flex-direction: column;
  align-items: end;
  z-index: 1;
  min-height: 100vh;
  height: fit-content;
}

.project-container {
  display: flex;
  justify-content: space-around;
}

.new-project {
  background-color: white;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  color: #252629;
  cursor: pointer;
  border: 1px solid #252629;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

.new-project:active {
  width: 31%;
  font-size: 0.9rem;
  height: 34px;
}

.header {
  width: calc(100vw - 65px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 30px;
  justify-content: space-between;
  background-color: #2a2d2f;
  color: white;
  height: 170px;
  font-family: "Lato", sans-serif;
}

.content-head {
  display: flex;
  font-size: 0.85rem;
  padding-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.add {
  border-radius: 12px;
  background-color: #0089ff;
  border: 1px solid black;
  width: 90px;
  height: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all ease-in 50ms;
  cursor: pointer;
}

.button:hover {
  width: 100px;
  height: 50px;
  font-size: 1rem;
  font-weight: 800;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.today-headline {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

.task {
  display: flex;
  margin-left: 20px;
  width: 90%;
  min-width: fit-content;
  color: white;
  background-color: #2a2d2f;
  height: 90px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 5px;
}

.task-border-done {
  border-left: 10px solid #1db443;
}

.task-border-stuck {
  border-left: 10px solid #ef233c;
}

.task-border-working {
  border-left: 10px solid #ffdd00;
}

.task-name {
  border-right: 1px solid black;
  width: 28%;
  min-width: 230px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.task-owner {
  border-right: 1px solid black;
  width: 15%;
  min-width: 120px;
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.task-status {
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  min-width: 120px;
}

.task-priority {
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  min-width: 110px;
}

.task-priority-high {
  background-color: #7b2cbf;
}

.task-priority-medium {
  background-color: #9145cf;
}

.task-priority-low {
  background-color: #be74f7;
}

.task-status-stuck {
  background-color: #ef233c;
}

.task-status-done {
  background-color: #1db443;
}

.task-status-working {
  background-color: #ffdd00;
}

#form-project {
  height: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-width: 100px;
  width: fit-content;
  max-width: 150px;
}

.task-tags {
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  width: 12%;
  min-width: 110px;
  color: #b3e9c7;
  padding-left: 5px;
}

.task-date {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  min-width: 110px;
}

.today {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.task-edit {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 24px;
}

.task-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.bx-box-task:hover {
  background-color: white;
  border-radius: 8px;
}

.bx-box-task:hover .bx {
  fill: #252629;
}

.form {
  display: flex;
  flex-direction: column;
  z-index: 20;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #2a2d2f;
  color: white;
  width: 50vw;
  height: 50vw;
  justify-content: space-around;
  padding: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-radius: 17px;
}

.form-input {
  height: 8%;
  max-height: 45px;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
}

.delete-form {
  display: flex;
  justify-content: end;
  align-items: center;
}

.overview {
  z-index: 15;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(59, 56, 56, 0.432);
  position: fixed;
}

.button-submit {
  border-radius: 12px;
  background-color: #0089ff;
  color: white;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all ease-in 50ms;
  cursor: pointer;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.button-submit:active {
  font-size: 1.1rem;
  width: 99%;
  height: 99%;
}

.submit-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
}

@media (max-width: 967px) {
  .task {
    flex-direction: column;
  }
  .task-name,
  .task-owner,
  .task-status,
  .task-priority,
  .task-tags,
  .task-date {
    width: 100%;
    border: none;
    justify-content: center;
    height: 70px;
    min-width: 200px;
  }
  .task {
    height: fit-content;
    min-width: 200px;
    margin-top: 50px;
  }
  .task-border-done {
    border: 3px solid #1db443;
  }
  .task-border-stuck {
    border: 3px solid #ef233c;
  }
  .task-border-working {
    border: 3px solid #ffdd00;
  }
  .header {
    height: fit-content;
    width: calc(100vw - 65px);
  }
  .task-delete {
    height: 50px;
  }
  .task-edit {
    height: 50px;
  }
  .form {
    position: fixed;
  }
  .overview {
    position: fixed;
  }
  .today-headline {
    margin-bottom: 0;
  }
}
@media (max-width: 800px) {
  .form {
    width: 100vw;
    height: 100vh;
    min-width: 300px;
    min-height: 300px;
    position: fixed;
    border-radius: 0;
    position: fixed;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: end;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n$menu-text: white;\r\n$menu-color: #252629;\r\n$task-status-working: #ffdd00;\r\n$task-status-done: #1db443;\r\n$task-status-stuck: #ef233c;\r\n$task-priority-high: #7b2cbf;\r\n$task-priority-medium: #9145cf;\r\n$task-priority-low: #be74f7;\r\n$task-tags: #b3e9c7;\r\n$header: #2a2d2f;\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab {\r\n  height: 100vh;\r\n  background-color: $menu-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  transition: all 0.3s ease;\r\n  font-family: \"Lato\", sans-serif;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.bx {\r\n  fill: $menu-text;\r\n}\r\n.menu {\r\n  fill: $menu-text;\r\n  cursor: pointer;\r\n}\r\n.menu-headline {\r\n  color: $menu-text;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: default;\r\n}\r\n.menu-box {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: start;\r\n  padding: 10px;\r\n}\r\n.menu-user {\r\n  color: $menu-text;\r\n  padding: 10px;\r\n  font-size: 1.8rem;\r\n  cursor: default;\r\n}\r\n.menu-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n.menu-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 18px;\r\n}\r\n.menu-main-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.bx-box {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  padding-left: 5px;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n.bx-box:before {\r\n  content: \"\";\r\n}\r\n.bx-text::before {\r\n  content: \"\";\r\n}\r\n.bx-text {\r\n  color: $menu-text;\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n}\r\n.sidebar-active .bx-text,\r\n.sidebar-active .menu-headline,\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .bx-box {\r\n  padding: 15px;\r\n  width: fit-content;\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-main-list {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.sidebar-active .menu-list {\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-content {\r\n  gap: 15px;\r\n}\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .menu-box {\r\n  justify-content: center;\r\n}\r\n.sidebar-active {\r\n  width: 65px;\r\n  z-index: 2;\r\n}\r\n\r\n.bx-box:hover {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n.bx-box:hover .bx {\r\n  fill: $menu-color;\r\n}\r\n.bx-box:hover .bx-text {\r\n  color: $menu-color;\r\n}\r\n.main-content {\r\n  min-width: calc(100vw - clamp(220px, 40vw, 300px));\r\n  width: calc(100vw - 65px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n  z-index: 1;\r\n\r\n  min-height: 100vh;\r\n  height: fit-content;\r\n}\r\n.project-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.new-project {\r\n  background-color: $menu-text;\r\n  border-radius: 5px;\r\n  width: 100px;\r\n  height: 35px;\r\n  color: $menu-color;\r\n  cursor: pointer;\r\n  border: 1px solid $menu-color;\r\n  font-size: 1rem;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n}\r\n.new-project:active {\r\n  width: 31%;\r\n  font-size: 0.9rem;\r\n  height: 34px;\r\n}\r\n.header {\r\n  width: calc(100vw - 65px);\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  padding-left: 30px;\r\n  justify-content: space-between;\r\n  background-color: $header;\r\n  color: white;\r\n  height: 170px;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n.content-head {\r\n  display: flex;\r\n  font-size: 0.85rem;\r\n  padding-top: 30px;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n.add {\r\n  border-radius: 12px;\r\n  background-color: #0089ff;\r\n  border: 1px solid black;\r\n  width: 90px;\r\n  height: 40px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n}\r\n.button:hover {\r\n  width: 100px;\r\n  height: 50px;\r\n  font-size: 1rem;\r\n  font-weight: 800;\r\n}\r\n.content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.today-headline {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 50px;\r\n}\r\n.task {\r\n  display: flex;\r\n  margin-left: 20px;\r\n  width: 90%;\r\n  min-width: fit-content;\r\n  color: white;\r\n  background-color: $header;\r\n  height: 90px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n.task-border-done {\r\n  border-left: 10px solid $task-status-done;\r\n}\r\n.task-border-stuck {\r\n  border-left: 10px solid $task-status-stuck;\r\n}\r\n.task-border-working {\r\n  border-left: 10px solid $task-status-working;\r\n}\r\n.task-name {\r\n  border-right: 1px solid black;\r\n  width: 28%;\r\n  min-width: 230px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-owner {\r\n  border-right: 1px solid black;\r\n  width: 15%;\r\n  min-width: 120px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-status {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  min-width: 120px;\r\n}\r\n.task-priority {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n}\r\n.task-priority-high {\r\n  background-color: $task-priority-high;\r\n}\r\n.task-priority-medium {\r\n  background-color: $task-priority-medium;\r\n}\r\n.task-priority-low {\r\n  background-color: $task-priority-low;\r\n}\r\n.task-status-stuck {\r\n  background-color: $task-status-stuck;\r\n}\r\n.task-status-done {\r\n  background-color: $task-status-done;\r\n}\r\n.task-status-working {\r\n  background-color: $task-status-working;\r\n}\r\n#form-project {\r\n  height: 35px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  min-width: 100px;\r\n  width: fit-content;\r\n  max-width: 150px;\r\n}\r\n.task-tags {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n\r\n  color: $task-tags;\r\n  padding-left: 5px;\r\n}\r\n.task-date {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n}\r\n.today {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n.task-edit {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  min-width: 24px;\r\n}\r\n.task-delete {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.bx-box-task:hover {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n.bx-box-task:hover .bx {\r\n  fill: $menu-color;\r\n}\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 20;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $header;\r\n  color: white;\r\n  width: 50vw;\r\n  height: 50vw;\r\n  justify-content: space-around;\r\n  padding: 20px;\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n  border-radius: 17px;\r\n}\r\n.form-input {\r\n  height: 8%;\r\n  max-height: 45px;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size: 1rem;\r\n}\r\n.delete-form {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n}\r\n.bx-delete {\r\n}\r\n.overview {\r\n  z-index: 15;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(59, 56, 56, 0.432);\r\n  position: fixed;\r\n}\r\n.button-submit {\r\n  border-radius: 12px;\r\n  background-color: #0089ff;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button-submit:active {\r\n  font-size: 1.1rem;\r\n  width: 99%;\r\n  height: 99%;\r\n}\r\n.submit-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10%;\r\n}\r\n@media (max-width: 967px) {\r\n  .task {\r\n    flex-direction: column;\r\n  }\r\n  .task-name,\r\n  .task-owner,\r\n  .task-status,\r\n  .task-priority,\r\n  .task-tags,\r\n  .task-date {\r\n    width: 100%;\r\n    border: none;\r\n    justify-content: center;\r\n    height: 70px;\r\n    min-width: 200px;\r\n  }\r\n  .task {\r\n    height: fit-content;\r\n    min-width: 200px;\r\n    margin-top: 50px;\r\n  }\r\n  .task-border-done {\r\n    border: 3px solid $task-status-done;\r\n  }\r\n  .task-border-stuck {\r\n    border: 3px solid $task-status-stuck;\r\n  }\r\n  .task-border-working {\r\n    border: 3px solid $task-status-working;\r\n  }\r\n  .header {\r\n    height: fit-content;\r\n    width: calc(100vw - 65px);\r\n  }\r\n  .task-delete {\r\n    height: 50px;\r\n  }\r\n  .task-edit {\r\n    height: 50px;\r\n  }\r\n  .form {\r\n    position: fixed;\r\n  }\r\n  .overview {\r\n    position: fixed;\r\n  }\r\n  .today-headline {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .form {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-width: 300px;\r\n    min-height: 300px;\r\n    position: fixed;\r\n    border-radius: 0;\r\n    position: fixed;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newProject: () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _pages_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/task */ "./src/pages/task.js");
/* harmony import */ var _pages_allTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/allTasks */ "./src/pages/allTasks.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_userForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/userForm */ "./src/pages/userForm.js");
/* harmony import */ var _pages_today__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/today */ "./src/pages/today.js");
/* harmony import */ var _pages_upcoming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/upcoming */ "./src/pages/upcoming.js");
/* harmony import */ var _pages_Overdue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Overdue */ "./src/pages/Overdue.js");
/* harmony import */ var _pages_addingProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/addingProject */ "./src/pages/addingProject.js");
/* harmony import */ var _pages_taskStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/taskStorage */ "./src/pages/taskStorage.js");











const menu = document.getElementById("menu");
const tab = document.getElementById("tab");
const add = document.querySelector(".add");
menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});
let myArray = [];
let place = "Home";
const homeMenu = document.getElementById("home");
const taskAllMenu = document.getElementById("all-task");
const quickAddMenu = document.getElementById("quick-add");
const todayMenu = document.getElementById("today");
const upcomingMenu = document.getElementById("upcoming");
const overdue = document.getElementById("overdue");
const projectButton = document.getElementById("new-project");

homeMenu.addEventListener("click", function () {
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"])();
  place = "Home";
});
taskAllMenu.addEventListener("click", function () {
  (0,_pages_allTasks__WEBPACK_IMPORTED_MODULE_3__.AllTask)();
  place = "All-Task";
});

quickAddMenu.addEventListener("click", function () {
  (0,_pages_userForm__WEBPACK_IMPORTED_MODULE_5__.userFormUI)(place);
});
todayMenu.addEventListener("click", function () {
  (0,_pages_today__WEBPACK_IMPORTED_MODULE_6__.Today)();
  place = "Today";
});
upcomingMenu.addEventListener("click", function () {
  (0,_pages_upcoming__WEBPACK_IMPORTED_MODULE_7__.Upcoming)();
  place = "Upcoming";
});
overdue.addEventListener("click", function () {
  (0,_pages_Overdue__WEBPACK_IMPORTED_MODULE_8__.Overdue)();
  place = "Overdue";
});
let newProject = (0,_pages_taskStorage__WEBPACK_IMPORTED_MODULE_10__.loadProject)();

projectButton.addEventListener("click", function () {
  (0,_pages_addingProject__WEBPACK_IMPORTED_MODULE_9__.addingProjectUi)(place);
});
// Try to load existing tasks from localStorage
let storedArray = (0,_pages_taskStorage__WEBPACK_IMPORTED_MODULE_10__.loadTasks)();
// Only populate the array with initial objects if it's empty
if (storedArray.length === 0) {
  const ob = (0,_pages_task__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(
    "Creating a task",
    "Orbter",
    "Working on it",
    "High",
    "#Admin",
    "2024-02-15",
    "Todo List"
  );
  const ob2 = (0,_pages_task__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(
    "testing the ui",
    "Yotam",
    "Done",
    "Low",
    "#king",
    "2024-02-21",
    "Todo List"
  );
  storedArray.push(ob, ob2);

  localStorage.setItem("myArray", JSON.stringify(storedArray));
}


(0,_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"])();


/***/ }),

/***/ "./src/pages/Overdue.js":
/*!******************************!*\
  !*** ./src/pages/Overdue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Overdue: () => (/* binding */ Overdue)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");


 // Hypothetical taskStorage module


function Overdue() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_1__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const upcoming = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const upcomingHeadline = document.createElement("h1");
  const selectProject = document.createElement("select");
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadProject)();

  place.innerText = "Overdue Tasks";
  headText.innerText = "you are behind schedule!";
  upcomingHeadline.innerText = "Overdue";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");

  selectProject.addEventListener("change", (event) => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_1__.RemoveContent)(upcoming);

    const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
    const selected = selectProject.value;
    (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayArrayOverdueUi)(showingArray, upcoming, selected);
  });

  (0,_userForm__WEBPACK_IMPORTED_MODULE_3__.optionCrater)(newProjects, selectProject);

  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, selectProject);

  const selected = selectProject.value;

  content.append(upcomingHeadline, upcoming);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayArrayOverdueUi)(showingArray, upcoming, selected);
}




/***/ }),

/***/ "./src/pages/addingProject.js":
/*!************************************!*\
  !*** ./src/pages/addingProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addingProjectUi: () => (/* binding */ addingProjectUi)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allTasks */ "./src/pages/allTasks.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./today */ "./src/pages/today.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcoming */ "./src/pages/upcoming.js");
/* harmony import */ var _Overdue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overdue */ "./src/pages/Overdue.js");
/* harmony import */ var _updateButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateButton */ "./src/pages/updateButton.js");


let mainArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();


 // Hypothetical taskStorage module





function addingProjectUi(place) {
  const form = document.createElement("form");
  form.id = "form-id";
  const divForm = document.createElement("div");
  divForm.className = "form";
  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete-form");
  const iconDelete = document.createElement("box-icon");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-circle");
  iconDelete.setAttribute("size", "lg");
  iconDelete.onclick = () => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  };
  iconDelete.classList.add("bx");
  deleteContainer.append(iconDelete);
  divForm.append(deleteContainer);

  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "creating-project");
  labelProject.textContent = "New Project:";
  const inputProject = document.createElement("input");
  inputProject.type = "text";
  inputProject.id = "creating-project";
  inputProject.name = "creating-project";
  inputProject.className = "form-input";
  inputProject.placeholder = "Todo List";
  inputProject.required = true;
  divForm.append(labelProject, inputProject);

  const divSubmitForm = document.createElement("div");
  divSubmitForm.className = "submit-form";
  const buttonSubmit = document.createElement("button");
  buttonSubmit.className = "button-submit";
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Add New Task";
  divSubmitForm.appendChild(buttonSubmit);
  //creating a blur
  const blur = document.createElement("div");
  blur.classList.add("overview");
  blur.addEventListener("click", function (event) {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  });

  divForm.appendChild(divSubmitForm);
  form.appendChild(divForm);
  document.body.appendChild(blur);
  document.body.appendChild(form); // Or append to another element if needed

  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Keep this to prevent the form submission

    // Check if the form is valid
    if (form.checkValidity()) {
      const project = inputProject.value;
      (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.addProject)(project);
      (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
      checkingFunction(place);
      (0,_updateButton__WEBPACK_IMPORTED_MODULE_8__.updateProjectButton)();
    } else {
      // Optionally trigger the browser's default validation UI
      form.reportValidity();
    }
  });
}

function checkingFunction(place) {
  if (place === "Home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else if (place === "All-Task") {
    (0,_allTasks__WEBPACK_IMPORTED_MODULE_4__.AllTask)();
  } else if (place === "Today") {
    (0,_today__WEBPACK_IMPORTED_MODULE_5__.Today)();
  } else if (place === "Upcoming") {
    (0,_upcoming__WEBPACK_IMPORTED_MODULE_6__.Upcoming)();
  } else if (place === "Overdue") {
    (0,_Overdue__WEBPACK_IMPORTED_MODULE_7__.Overdue)();
  }
}




/***/ }),

/***/ "./src/pages/allTasks.js":
/*!*******************************!*\
  !*** ./src/pages/allTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllTask: () => (/* binding */ AllTask)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");



 // Hypothetical taskStorage module

function AllTask() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const allTime = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const allTimeHeadline = document.createElement("h1");
  const add = document.createElement("button");
  const selectProject = document.createElement("select");
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadProject)();

  place.innerText = "All Tasks";
  headText.innerText = "See all the tasks you have!";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  allTimeHeadline.classList.add("today-headline");
  allTime.classList.add("today");
  add.classList.add("add", "button");
  (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.optionCrater)(newProjects, selectProject);
  mainContent.append(header, content);
  selectProject.addEventListener("change", (event) => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveContent)(allTime);
    const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
    const selected = selectProject.value;
    (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayAllTimeUi)(showingArray, allTime, selected);
  });

  header.append(place, contentHead);

  contentHead.append(headText, selectProject);
  const selected = selectProject.value;

  content.append(allTimeHeadline, allTime);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayAllTimeUi)(showingArray, allTime, selected);
}



/***/ }),

/***/ "./src/pages/formedit.js":
/*!*******************************!*\
  !*** ./src/pages/formedit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkingFunction: () => (/* binding */ checkingFunction),
/* harmony export */   editPopup: () => (/* binding */ editPopup)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _userFormObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userFormObj */ "./src/pages/userFormObj.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allTasks */ "./src/pages/allTasks.js");
/* harmony import */ var _Overdue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Overdue */ "./src/pages/Overdue.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcoming */ "./src/pages/upcoming.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./today */ "./src/pages/today.js");



 // Hypothetical taskStorage module




function editPopup(place, array, index) {
  let newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  // Create the form and the main div wrapper
  //<box-icon type='solid' name='x-circle'></box-icon>
  const obj = array[index];

  const form = document.createElement("form");
  form.id = "form-id";
  const divForm = document.createElement("div");
  divForm.className = "form";
  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete-form");
  const iconDelete = document.createElement("box-icon");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-circle");
  iconDelete.setAttribute("size", "lg");
  iconDelete.onclick = () => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  };
  iconDelete.classList.add("bx");
  deleteContainer.append(iconDelete);
  divForm.append(deleteContainer);

  // Create and append the 'Task' input field
  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "form-task");
  labelTask.textContent = "Task:";
  const inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.id = "form-task";
  inputTask.name = "form-task";
  inputTask.className = "form-input";
  inputTask.placeholder = "Pick up the dog from the vet";
  inputTask.required = true;
  inputTask.value = obj.Name;
  divForm.append(labelTask, inputTask);

  // Create and append the 'Name' input field
  const labelName = document.createElement("label");
  labelName.setAttribute("for", "form-name");
  labelName.textContent = "Name:";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "form-name";
  inputName.name = "form-name";
  inputName.className = "form-input";
  inputName.placeholder = "Yotam";
  inputName.required = true;
  inputName.value = obj.Owner;
  divForm.append(labelName, inputName);

  // Create and append the 'Status' select field
  const labelStatus = document.createElement("label");
  labelStatus.setAttribute("for", "form-status");
  labelStatus.textContent = "Status:";
  const selectStatus = document.createElement("select");
  selectStatus.id = "form-status";
  selectStatus.name = "form-status";
  selectStatus.className = "form-input";
  selectStatus.required = true;
  const defaultValueStatus = obj.Status; // e.g., "Stuck"

  ["Done", "Stuck", "Working on it"].forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    if (status === defaultValueStatus) {
      option.selected = true;
    }
    selectStatus.appendChild(option);
  });

  divForm.append(labelStatus, selectStatus);

  // Create and append the 'Priority' select field
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "form-priority");
  labelPriority.textContent = "Priority:";
  const selectPriority = document.createElement("select");
  selectPriority.id = "form-priority";
  selectPriority.name = "form-priority";
  selectPriority.className = "form-input";
  selectPriority.required = true;
  const defaultValuePriority = obj.Priority;
  ["High", "Low", "Medium"].forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    if (priority === defaultValuePriority) {
      option.selected = true;
    }
    selectPriority.appendChild(option);
  });
  divForm.append(labelPriority, selectPriority);
  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "form-projects");
  labelProject.textContent = "Project";
  const selectProject = document.createElement("select");
  selectProject.id = "form-projects";
  selectProject.name = "form-projects";
  selectProject.className = "form-input";
  selectProject.required = true;
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadProject)();
  const defaultValueProject = obj.Project; // e.g., "Stuck"

  optionCraterEdit(defaultValueProject, selectProject);
  divForm.append(labelProject, selectProject);

  // Create and append the 'Tag' input field
  const labelTags = document.createElement("label");
  labelTags.setAttribute("for", "form-tags");
  labelTags.textContent = "Tag:";
  const inputTags = document.createElement("input");
  inputTags.type = "text";
  inputTags.id = "form-tags";
  inputTags.className = "form-input";
  inputTags.placeholder = "Admin";
  inputTags.required = true;
  inputTags.value = obj.Tags;
  divForm.append(labelTags, inputTags);

  // Create and append the 'Date' input field
  const labelDate = document.createElement("label");
  labelDate.setAttribute("for", "form-date");
  labelDate.textContent = "Date:";
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.id = "form-date";
  inputDate.name = "form-date";
  inputDate.className = "form-input";
  inputDate.required = true;
  inputDate.value = obj.Date;
  inputDate.min = "1900-01-01";
  inputDate.max = "2125-01-01";
  divForm.append(labelDate, inputDate);

  // Create and append the submit button
  const divSubmitForm = document.createElement("div");
  divSubmitForm.className = "submit-form";
  const buttonSubmit = document.createElement("button");
  buttonSubmit.className = "button-submit";
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Add New Task";
  divSubmitForm.appendChild(buttonSubmit);
  //creating a blur
  const blur = document.createElement("div");
  blur.classList.add("overview");
  blur.addEventListener("click", function (event) {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  });

  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Keep this to prevent the form submission

    // Check if the form is valid
    if (form.checkValidity()) {
      (0,_userFormObj__WEBPACK_IMPORTED_MODULE_1__.EditItem)(newArray, index);
      (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
      checkingFunction(place);
    } else {
      // Optionally trigger the browser's default validation UI
      form.reportValidity();
    }
  });

  // Append everything to the main form div and then the form to the document body (or wherever it needs to go)
  divForm.appendChild(divSubmitForm);
  form.appendChild(divForm);
  document.body.appendChild(blur);
  document.body.appendChild(form); // Or append to another element if needed
}
function checkingFunction(place) {
  if (place === "Home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else if (place === "All-Task") {
    (0,_allTasks__WEBPACK_IMPORTED_MODULE_4__.AllTask)();
  } else if (place === "Today") {
    (0,_today__WEBPACK_IMPORTED_MODULE_7__.Today)();
  } else if (place === "Upcoming") {
    (0,_upcoming__WEBPACK_IMPORTED_MODULE_6__.Upcoming)();
  } else if (place === "Overdue") {
    (0,_Overdue__WEBPACK_IMPORTED_MODULE_5__.Overdue)();
  }
}

function optionCraterEdit(defaultValueProject, whereToAppend) {
  const projects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadProject)();
  projects.forEach((obj) => {
    const option = document.createElement("option");
    if (obj === defaultValueProject) {
      option.selected = true;
    }
    option.value = obj;
    option.textContent = obj;
    whereToAppend.appendChild(option);
  });
}




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");



 // Hypothetical taskStorage module

function HomeUI() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const today = document.createElement("div");
  const thisWeek = document.createElement("div");
  const allTime = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const welcome = document.createElement("h2");
  const todayHeadline = document.createElement("h1");
  const weekHeadline = document.createElement("h1");
  const allTimeHeadline = document.createElement("h1");
  const add = document.createElement("button");

  place.innerText = "Home";
  welcome.innerText = "Welcome back, Orbter";
  headText.innerText = "Start Another Task!";
  todayHeadline.innerText = "Today";
  weekHeadline.innerText = "This Week";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";
  //classes
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  todayHeadline.classList.add("today-headline");
  weekHeadline.classList.add("today-headline");
  allTimeHeadline.classList.add("today-headline");
  today.classList.add("today");
  thisWeek.classList.add("today");
  allTime.classList.add("today");
  add.classList.add("add", "button");

  const selectProject = document.createElement("select");
  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadProject)();
  (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.optionCrater)(newProjects, selectProject);

  selectProject.addEventListener("change", (event) => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveContent)(today);
    (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveContent)(thisWeek);
    (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveContent)(allTime);
    const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
    const selected = selectProject.value;
    (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayHomeUi)(showingArray, today, thisWeek, allTime, selected);
  });

  //appending

  mainContent.append(header, content);

  header.append(place, welcome, contentHead);

  contentHead.append(headText, selectProject);
  content.append(
    todayHeadline,
    today,
    weekHeadline,
    thisWeek,
    allTimeHeadline,
    allTime
  );

  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  const selected = selectProject.value;
  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayHomeUi)(showingArray, today, thisWeek, allTime, selected);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeUI);


/***/ }),

/***/ "./src/pages/remove.js":
/*!*****************************!*\
  !*** ./src/pages/remove.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveContent: () => (/* binding */ RemoveContent),
/* harmony export */   RemoveFormUI: () => (/* binding */ RemoveFormUI),
/* harmony export */   RemoveItemArray: () => (/* binding */ RemoveItemArray),
/* harmony export */   RemoveScreen: () => (/* binding */ RemoveScreen)
/* harmony export */ });
function RemoveFormUI(form, overview) {
  form.remove();
  overview.remove();
}

function RemoveScreen() {
  const mainContent = document.querySelector(".main-content");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}
function RemoveContent(content) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function RemoveItemArray(array, indexToRemove) {
  array.splice(indexToRemove, 1);
}




/***/ }),

/***/ "./src/pages/task.js":
/*!***************************!*\
  !*** ./src/pages/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskObject: () => (/* binding */ createTaskObject),
/* harmony export */   displayArrayAllTimeUi: () => (/* binding */ displayArrayAllTimeUi),
/* harmony export */   displayArrayHomeUi: () => (/* binding */ displayArrayHomeUi),
/* harmony export */   displayArrayOverdueUi: () => (/* binding */ displayArrayOverdueUi),
/* harmony export */   displayArrayTodayUi: () => (/* binding */ displayArrayTodayUi),
/* harmony export */   displayArrayUpcomingUi: () => (/* binding */ displayArrayUpcomingUi)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskUI */ "./src/pages/taskUI.js");
/* harmony import */ var _formedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formedit */ "./src/pages/formedit.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
const createTaskObject = (
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
  Project
) => ({
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
  Project,
});




 // Hypothetical taskStorage module

function displayArrayUpcomingUi(array, upcoming, selectedValue) {
  sortArrayByDate(array); //assuring the array by date
  const placeName = "Upcoming";
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );

    const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
    // Corrected comparison for determining if the event is "today"
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, upcoming, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, upcoming, placeName);
      }
    }
  });
}

function displayArrayOverdueUi(array, overdue, selectedValue) {
  const placeName = "Overdue";

  sortArrayByDate(array);
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );

    const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() < todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, overdue, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() < todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, overdue, placeName);
      }
    }
  });
}

function displayArrayTodayUi(array, today, selectedValue) {
  const placeName = "Today";

  sortArrayByDate(array); //assuring the array by date
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );
    const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
    // Corrected comparison for determining if the event is "today"
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      }
    }
  });
}

function displayArrayAllTimeUi(array, allTime, selectedValue) {
  const placeName = "All-Task";

  sortArrayByDate(array); //assuring the array by date
  const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();

  newArray.forEach((element, index) => {
    if (selectedValue === "All Task") {
      appendingTask(newArray, element, index, allTime, placeName);
    } else if (element.Project === selectedValue) {
      appendingTask(newArray, element, index, allTime, placeName);
    }
  });
}

function displayArrayHomeUi(array, today, week, allTime, selectedValue) {
  const placeName = "Home";

  sortArrayByDate(array); //assuring the array by date
  const currentDay = new Date();
  const todayDateOnly = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );

  const { firstDayOfWeek, lastDayOfWeek } = settingTheWeek(currentDay);

  array.forEach((element, index) => {
    const objectDate = new Date(element.Date); // For example, 2021-12-01
    const objectDateOnly = new Date(
      objectDate.getFullYear(),
      objectDate.getMonth(),
      objectDate.getDate()
    );

    const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
    if (selectedValue === "All Task") {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      } else if (
        objectDateOnly >= firstDayOfWeek &&
        objectDateOnly <= lastDayOfWeek
      ) {
        appendingTask(newArray, element, index, week, placeName);
      } else {
        appendingTask(newArray, element, index, allTime, placeName);
      }
    } else if (element.Project === selectedValue) {
      if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
        appendingTask(newArray, element, index, today, placeName);
      } else if (
        objectDateOnly >= firstDayOfWeek &&
        objectDateOnly <= lastDayOfWeek
      ) {
        appendingTask(newArray, element, index, week, placeName);
      } else {
        appendingTask(newArray, element, index, allTime, placeName);
      }
    }
  });
}
const settingTheWeek = (today) => {
  // Create new Date objects for the first and last day of the week based on 'today'
  const firstDayOfWeek = new Date(today);
  const lastDayOfWeek = new Date(today);

  // Set firstDayOfWeek to the start of the week, Sunday
  firstDayOfWeek.setDate(today.getDate() - today.getDay());
  firstDayOfWeek.setHours(0, 0, 0, 0); // Set to start of the day

  // Set lastDayOfWeek to the end of the week, Saturday
  lastDayOfWeek.setDate(today.getDate() + (6 - today.getDay()));
  lastDayOfWeek.setHours(23, 59, 59, 999); // Set to end of the day

  return { firstDayOfWeek, lastDayOfWeek };
};

const appendingTask = (array, element, index, place, placeName) => {
  const taskElement = (0,_taskUI__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  const deleteButton = taskElement.querySelector(".task-delete");
  const editButton = taskElement.querySelector(".task-edit");
  const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
  deleteButton.onclick = () => {
    (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.removeTaskArray)(index);
    (0,_formedit__WEBPACK_IMPORTED_MODULE_3__.checkingFunction)(placeName);
  };
  editButton.onclick = () => {
    (0,_formedit__WEBPACK_IMPORTED_MODULE_3__.editPopup)(placeName, array, index);
  };

  place.append(taskElement);
};
function sortArrayByDate(array) {
  array.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.saveTasks)(array);
}




/***/ }),

/***/ "./src/pages/taskStorage.js":
/*!**********************************!*\
  !*** ./src/pages/taskStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   editTaskArray: () => (/* binding */ editTaskArray),
/* harmony export */   loadProject: () => (/* binding */ loadProject),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   removeTaskArray: () => (/* binding */ removeTaskArray),
/* harmony export */   saveProject: () => (/* binding */ saveProject),
/* harmony export */   saveTasks: () => (/* binding */ saveTasks)
/* harmony export */ });
// taskStorage.js
function loadTasks() {
  let array = [];
  if (localStorage.getItem("myArray") === "undefined") {
    return array;
  } else {
    return JSON.parse(localStorage.getItem("myArray")) || [];
  }
}

function addTask(task) {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
}
function editTaskArray(obj, index) {
  const array = loadTasks();
  array[index] = obj;
  saveTasks(array);
}
function removeTaskArray(index) {
  const array = loadTasks();
  array.splice(index, 1);
  saveTasks(array);
}

function saveTasks(tasks) {
  localStorage.setItem("myArray", JSON.stringify(tasks));
}

function saveProject(newProject) {
  localStorage.setItem("projects", JSON.stringify(newProject));
}

function loadProject() {
  let array = ["All Task", "Todo List"];
  const myLocalStorage = localStorage.getItem("projects");

  if (myLocalStorage === undefined || myLocalStorage === null) {
    return array;
  } else {
    return JSON.parse(localStorage.getItem("projects"));
  }
}
function addProject(project) {
  const allProjects = loadProject();
  if (allProjects.includes(project)) {
    return;
  } else {
    allProjects.push(project);
    saveProject(allProjects);
  }
}


/***/ }),

/***/ "./src/pages/taskUI.js":
/*!*****************************!*\
  !*** ./src/pages/taskUI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTaskUI(object) {
  //name, owner, status, priority, tags, date
  //Creating the divs
  const task = document.createElement("div");
  const taskName = document.createElement("div");
  const taskOwner = document.createElement("div");
  const taskStatus = document.createElement("div");
  const taskPriority = document.createElement("div");
  const taskTags = document.createElement("div");
  const taskDate = document.createElement("div");
  const taskEdit = document.createElement("div");
  const taskDelete = document.createElement("div");
  const iconEdit = document.createElement("box-icon");
  const iconDelete = document.createElement("box-icon");

  //inner text
  taskName.innerText = object.Name;
  taskOwner.innerText = object.Owner;
  taskStatus.innerText = object.Status;
  taskPriority.innerText = object.Priority;
  taskTags.innerText = checkTag(object.Tags);

  taskDate.innerText = formatDate(object.Date);
  //classes
  updateTaskClass(
    taskStatus,
    taskPriority,
    taskName,
    taskOwner,
    taskTags,
    taskDate,
    taskEdit,
    taskDelete,
    iconEdit,
    iconDelete,
    task
  );
  // appending task

  task.appendChild(taskName);
  task.appendChild(taskOwner);
  task.appendChild(taskStatus);
  task.appendChild(taskPriority);
  task.appendChild(taskTags);
  task.appendChild(taskDate);
  task.appendChild(taskEdit);
  task.appendChild(taskDelete);

  taskEdit.appendChild(iconEdit);
  taskDelete.appendChild(iconDelete);

  return task;
}
const updateTaskClass = (
  taskStatus,
  taskPriority,
  taskName,
  taskOwner,
  taskTags,
  taskDate,
  taskEdit,
  taskDelete,
  iconEdit,
  iconDelete,
  task
) => {
  taskStatus.classList.remove(
    "task-status-done",
    "task-status-stuck",
    "task-status-working"
  );
  taskPriority.classList.remove(
    "task-priority-high",
    "task-priority-low",
    "task-priority-medium"
  );

  if (taskStatus.innerText === "Done") {
    taskStatus.classList.add("task-status-done", "task-status");
    task.classList.add("task-border-done");
  } else if (taskStatus.innerText === "Stuck") {
    taskStatus.classList.add("task-status-stuck", "task-status");
    task.classList.add("task-border-stuck");
  } else {
    taskStatus.classList.add("task-status-working", "task-status");
    task.classList.add("task-border-working");
  }

  if (taskPriority.innerText === "High") {
    taskPriority.classList.add("task-priority-high", "task-priority");
  } else if (taskPriority.innerText === "Low") {
    taskPriority.classList.add("task-priority-low", "task-priority");
  } else {
    taskPriority.classList.add("task-priority-medium", "task-priority");
  }
  taskName.classList.add("task-name");
  taskOwner.classList.add("task-owner");
  taskTags.classList.add("task-tags");
  taskDate.classList.add("task-date");
  taskEdit.classList.add("task-edit", "bx-box-task");
  taskDelete.classList.add("task-delete", "bx-box-task");
  iconEdit.setAttribute("type", "solid");
  iconEdit.setAttribute("name", "edit-alt");
  iconEdit.classList.add("bx");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-square");
  iconDelete.classList.add("bx");
  task.classList.add("task");
};
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function checkTag(tagString) {
  if (tagString.includes("#")) {
    return tagString;
  } else {
    return "#" + `${tagString}`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskUI);


/***/ }),

/***/ "./src/pages/today.js":
/*!****************************!*\
  !*** ./src/pages/today.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Today: () => (/* binding */ Today)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");


 // Hypothetical taskStorage module


function Today() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_1__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const today = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const todayHeadline = document.createElement("h1");
  const add = document.createElement("button");
  const selectProject = document.createElement("select");
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadProject)();

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  place.innerText = "Today Tasks";
  headText.innerText = "Finish this tasks today!";
  todayHeadline.innerText = "All tasks Due to today";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  todayHeadline.classList.add("today-headline");
  today.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.userFormUI)("Today");
  mainContent.append(header, content);

  (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.optionCrater)(newProjects, selectProject);

  selectProject.addEventListener("change", (event) => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_1__.RemoveContent)(today);
    const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
    const selected = selectProject.value;
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.displayArrayTodayUi)(showingArray, today, selected);
  });

  header.append(place, contentHead);

  contentHead.append(headText, selectProject);

  content.append(todayHeadline, today);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
  const selected = selectProject.value;

  (0,_task__WEBPACK_IMPORTED_MODULE_3__.displayArrayTodayUi)(showingArray, today, selected);
}



/***/ }),

/***/ "./src/pages/upcoming.js":
/*!*******************************!*\
  !*** ./src/pages/upcoming.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Upcoming: () => (/* binding */ Upcoming)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");



 // Hypothetical taskStorage module

function Upcoming() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const upcoming = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const upcomingHeadline = document.createElement("h1");
  const selectProject = document.createElement("select");
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadProject)();

  place.innerText = "Upcoming Tasks";
  headText.innerText = "Your next project are in here!";
  upcomingHeadline.innerText = "Future tasks";

  selectProject.id = "form-project";
  selectProject.name = "form-project";
  selectProject.className = "form-input";
  selectProject.required = true;
  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  mainContent.append(header, content);
  header.append(place, contentHead);
  (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.optionCrater)(newProjects, selectProject);

  contentHead.append(headText, selectProject);
  selectProject.addEventListener("change", (event) => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveContent)(upcoming);

    const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
    const selected = selectProject.value;
    (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayUpcomingUi)(showingArray, upcoming, selected);
  });

  content.append(upcomingHeadline, upcoming);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  const selected = selectProject.value;

  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayUpcomingUi)(showingArray, upcoming, selected);
}




/***/ }),

/***/ "./src/pages/updateButton.js":
/*!***********************************!*\
  !*** ./src/pages/updateButton.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateProjectButton: () => (/* binding */ updateProjectButton)
/* harmony export */ });
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");


function updateProjectButton() {
  const button = document.getElementById("form-project");
  while (button.firstChild) {
    button.removeChild(button.firstChild);
  }
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_1__.loadProject)();
  (0,_userForm__WEBPACK_IMPORTED_MODULE_0__.optionCrater)(newProjects, button);
}




/***/ }),

/***/ "./src/pages/userForm.js":
/*!*******************************!*\
  !*** ./src/pages/userForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionCrater: () => (/* binding */ optionCrater),
/* harmony export */   userFormUI: () => (/* binding */ userFormUI)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _userFormObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userFormObj */ "./src/pages/userFormObj.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allTasks */ "./src/pages/allTasks.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./today */ "./src/pages/today.js");
/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcoming */ "./src/pages/upcoming.js");
/* harmony import */ var _Overdue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overdue */ "./src/pages/Overdue.js");




 // Hypothetical taskStorage module



let mainArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
function userFormUI(place) {
  // Create the form and the main div wrapper
  //<box-icon type='solid' name='x-circle'></box-icon>

  const form = document.createElement("form");
  form.id = "form-id";
  const divForm = document.createElement("div");
  divForm.className = "form";
  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("delete-form");
  const iconDelete = document.createElement("box-icon");
  iconDelete.setAttribute("type", "solid");
  iconDelete.setAttribute("name", "x-circle");
  iconDelete.setAttribute("size", "lg");
  iconDelete.onclick = () => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  };
  iconDelete.classList.add("bx");
  deleteContainer.append(iconDelete);
  divForm.append(deleteContainer);

  // Create and append the 'Task' input field
  const labelTask = document.createElement("label");
  labelTask.setAttribute("for", "form-task");
  labelTask.textContent = "Task:";
  const inputTask = document.createElement("input");
  inputTask.type = "text";
  inputTask.id = "form-task";
  inputTask.name = "form-task";
  inputTask.className = "form-input";
  inputTask.placeholder = "Pick up the dog from the vet";
  inputTask.required = true;
  divForm.append(labelTask, inputTask);

  // Create and append the 'Name' input field
  const labelName = document.createElement("label");
  labelName.setAttribute("for", "form-name");
  labelName.textContent = "Name:";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "form-name";
  inputName.name = "form-name";
  inputName.className = "form-input";
  inputName.placeholder = "Yotam";
  inputName.required = true;
  divForm.append(labelName, inputName);

  // Create and append the 'Status' select field
  const labelStatus = document.createElement("label");
  labelStatus.setAttribute("for", "form-status");
  labelStatus.textContent = "Status:";
  const selectStatus = document.createElement("select");
  selectStatus.id = "form-status";
  selectStatus.name = "form-status";
  selectStatus.className = "form-input";
  selectStatus.required = true;
  ["Done", "Stuck", "Working on it"].forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    selectStatus.appendChild(option);
  });
  divForm.append(labelStatus, selectStatus);

  // Create and append the 'Priority' select field
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "form-priority");
  labelPriority.textContent = "Priority:";
  const selectPriority = document.createElement("select");
  selectPriority.id = "form-priority";
  selectPriority.name = "form-priority";
  selectPriority.className = "form-input";
  selectPriority.required = true;
  ["High", "Low", "Medium"].forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    selectPriority.appendChild(option);
  });
  divForm.append(labelPriority, selectPriority);

  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "form-projects");
  labelProject.textContent = "Project";
  const selectProject = document.createElement("select");
  selectProject.id = "form-projects";
  selectProject.name = "form-projects";
  selectProject.className = "form-input";
  selectProject.required = true;
  const newProjects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadProject)();
  optionCrater(newProjects, selectProject);
  divForm.append(labelProject, selectProject);

  // Create and append the 'Tag' input field
  const labelTags = document.createElement("label");
  labelTags.setAttribute("for", "form-tags");
  labelTags.textContent = "Tag:";
  const inputTags = document.createElement("input");
  inputTags.type = "text";
  inputTags.id = "form-tags";
  inputTags.className = "form-input";
  inputTags.placeholder = "Admin";
  inputTags.required = true;
  divForm.append(labelTags, inputTags);

  // Create and append the 'Date' input field
  const labelDate = document.createElement("label");
  labelDate.setAttribute("for", "form-date");
  labelDate.textContent = "Due Date:";
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.id = "form-date";
  inputDate.name = "form-date";
  inputDate.className = "form-input";
  inputDate.required = true;
  inputDate.min = "1900-01-01";
  inputDate.max = "2125-01-01";
  divForm.append(labelDate, inputDate);

  // Create and append the submit button
  const divSubmitForm = document.createElement("div");
  divSubmitForm.className = "submit-form";
  const buttonSubmit = document.createElement("button");
  buttonSubmit.className = "button-submit";
  buttonSubmit.type = "submit";
  buttonSubmit.textContent = "Add New Task";
  divSubmitForm.appendChild(buttonSubmit);
  //creating a blur
  const blur = document.createElement("div");
  blur.classList.add("overview");
  blur.addEventListener("click", function (event) {
    (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
  });

  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // Keep this to prevent the form submission

    // Check if the form is valid
    if (form.checkValidity()) {
      (0,_userFormObj__WEBPACK_IMPORTED_MODULE_1__.FormToArray)(mainArray);
      (0,_remove__WEBPACK_IMPORTED_MODULE_0__.RemoveFormUI)(form, blur);
      checkingFunction(place);
    } else {
      // Optionally trigger the browser's default validation UI
      form.reportValidity();
    }
  });

  // Append everything to the main form div and then the form to the document body (or wherever it needs to go)
  divForm.appendChild(divSubmitForm);
  form.appendChild(divForm);
  document.body.appendChild(blur);
  document.body.appendChild(form); // Or append to another element if needed
}

function checkingFunction(place) {
  if (place === "Home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else if (place === "All-Task") {
    (0,_allTasks__WEBPACK_IMPORTED_MODULE_3__.AllTask)();
  } else if (place === "Today") {
    (0,_today__WEBPACK_IMPORTED_MODULE_5__.Today)();
  } else if (place === "Upcoming") {
    (0,_upcoming__WEBPACK_IMPORTED_MODULE_6__.Upcoming)();
  } else if (place === "Overdue") {
    (0,_Overdue__WEBPACK_IMPORTED_MODULE_7__.Overdue)();
  }
}

function optionCrater(project, select) {
  const projects = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadProject)();
  projects.forEach((obj) => {
    const option = document.createElement("option");
    option.value = obj;
    option.textContent = obj;
    select.appendChild(option);
  });
}




/***/ }),

/***/ "./src/pages/userFormObj.js":
/*!**********************************!*\
  !*** ./src/pages/userFormObj.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditItem: () => (/* binding */ EditItem),
/* harmony export */   FormToArray: () => (/* binding */ FormToArray)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");

 // Hypothetical taskStorage module

function FormToArray(array, selectedValue) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const project = document.getElementById("form-projects").value;
  const obj = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(
    task,
    name,
    status,
    priority,
    tags,
    date,
    project
  );
  array = savingArray(obj);

  return array;
}
const savingArray = (newTask) => {
  (0,_taskStorage__WEBPACK_IMPORTED_MODULE_1__.addTask)(newTask);
};

function EditItem(array, index) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const project = document.getElementById("form-projects").value;

  const obj = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(
    task,
    name,
    status,
    priority,
    tags,
    date,
    project
  );

  array[index] = obj;
  (0,_taskStorage__WEBPACK_IMPORTED_MODULE_1__.editTaskArray)(obj, index);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sYUFBYSxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxxR0FBcUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFDQUFxQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9DQUFvQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHNCQUFzQixPQUFPLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEtBQUssVUFBVSxvQkFBb0Isb0JBQW9CLDJCQUEyQix3Q0FBd0MsS0FBSywwQkFBMEIseUJBQXlCLGtDQUFrQywrQkFBK0IsZ0NBQWdDLGlDQUFpQyxtQ0FBbUMsZ0NBQWdDLHdCQUF3QixxQkFBcUIsUUFBUSw0QkFBNEIsS0FBSyxjQUFjLG9CQUFvQixvQ0FBb0Msb0JBQW9CLDZCQUE2QixnQkFBZ0IsZ0NBQWdDLHdDQUF3QyxrQkFBa0Isc0JBQXNCLGFBQWEsY0FBYyxLQUFLLFNBQVMsdUJBQXVCLEtBQUssV0FBVyx1QkFBdUIsc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixvQkFBb0IsOEJBQThCLHNCQUFzQixLQUFLLGVBQWUsb0JBQW9CLDJCQUEyQix5QkFBeUIsb0JBQW9CLEtBQUssZ0JBQWdCLHdCQUF3QixvQkFBb0Isd0JBQXdCLHNCQUFzQixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsS0FBSyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLG9CQUFvQix3QkFBd0Isc0JBQXNCLGlCQUFpQixLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssY0FBYyx3QkFBd0IseUJBQXlCLHVCQUF1QixLQUFLLGdHQUFnRyxvQkFBb0IsS0FBSyw2QkFBNkIsb0JBQW9CLHlCQUF5QixhQUFhLEtBQUsscUNBQXFDLDhCQUE4QiwwQkFBMEIsS0FBSyxnQ0FBZ0MsYUFBYSxLQUFLLG1DQUFtQyxnQkFBZ0IsS0FBSyxnQ0FBZ0Msb0JBQW9CLEtBQUssK0JBQStCLDhCQUE4QixLQUFLLHFCQUFxQixrQkFBa0IsaUJBQWlCLEtBQUssdUJBQXVCLDhCQUE4Qix5QkFBeUIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssNEJBQTRCLHlCQUF5QixLQUFLLG1CQUFtQix5REFBeUQsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGlCQUFpQiw0QkFBNEIsMEJBQTBCLEtBQUssd0JBQXdCLG9CQUFvQixvQ0FBb0MsS0FBSyxrQkFBa0IsbUNBQW1DLHlCQUF5QixtQkFBbUIsbUJBQW1CLHlCQUF5QixzQkFBc0Isb0NBQW9DLHNCQUFzQiwyQ0FBMkMsdUJBQXVCLEtBQUsseUJBQXlCLGlCQUFpQix3QkFBd0IsbUJBQW1CLEtBQUssYUFBYSxnQ0FBZ0MsNkJBQTZCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLHlCQUF5QixxQ0FBcUMsZ0NBQWdDLG1CQUFtQixvQkFBb0Isd0NBQXdDLEtBQUssbUJBQW1CLG9CQUFvQix5QkFBeUIsd0JBQXdCLHNCQUFzQixxQ0FBcUMsS0FBSyxVQUFVLDBCQUEwQixnQ0FBZ0MsOEJBQThCLGtCQUFrQixtQkFBbUIsMkNBQTJDLHdCQUF3Qix1QkFBdUIsbUNBQW1DLHNCQUFzQixLQUFLLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQix1QkFBdUIsS0FBSyxjQUFjLGtCQUFrQixvQkFBb0IsNkJBQTZCLEtBQUsseUJBQXlCLGtCQUFrQixvQkFBb0IsOEJBQThCLHVCQUF1QiwwQkFBMEIsS0FBSyxXQUFXLG9CQUFvQix3QkFBd0IsaUJBQWlCLDZCQUE2QixtQkFBbUIsZ0NBQWdDLG1CQUFtQiwyQ0FBMkMsdUJBQXVCLHdCQUF3QixzQkFBc0IsS0FBSyx1QkFBdUIsZ0RBQWdELEtBQUssd0JBQXdCLGlEQUFpRCxLQUFLLDBCQUEwQixtREFBbUQsS0FBSyxnQkFBZ0Isb0NBQW9DLGlCQUFpQix1QkFBdUIsd0JBQXdCLDBCQUEwQix3QkFBd0IsS0FBSyxpQkFBaUIsb0NBQW9DLGlCQUFpQix1QkFBdUIsd0JBQXdCLDBCQUEwQix3QkFBd0IsS0FBSyxrQkFBa0Isb0NBQW9DLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlCQUFpQix1QkFBdUIsS0FBSyxvQkFBb0Isb0NBQW9DLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlCQUFpQix1QkFBdUIsS0FBSyx5QkFBeUIsNENBQTRDLEtBQUssMkJBQTJCLDhDQUE4QyxLQUFLLHdCQUF3QiwyQ0FBMkMsS0FBSyx3QkFBd0IsMkNBQTJDLEtBQUssdUJBQXVCLDBDQUEwQyxLQUFLLDBCQUEwQiw2Q0FBNkMsS0FBSyxtQkFBbUIsbUJBQW1CLDJDQUEyQyx1QkFBdUIsdUJBQXVCLHlCQUF5Qix1QkFBdUIsS0FBSyxnQkFBZ0Isb0NBQW9DLG9CQUFvQiwwQkFBMEIsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLEtBQUssZ0JBQWdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlCQUFpQix1QkFBdUIsS0FBSyxZQUFZLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDBCQUEwQixLQUFLLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0Isc0JBQXNCLEtBQUssa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixLQUFLLDRCQUE0Qiw4QkFBOEIseUJBQXlCLEtBQUssNEJBQTRCLHdCQUF3QixLQUFLLFdBQVcsb0JBQW9CLDZCQUE2QixrQkFBa0Isc0JBQXNCLGdCQUFnQixlQUFlLHVDQUF1QyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQixtQkFBbUIsb0NBQW9DLG9CQUFvQiwyQkFBMkIsd0JBQXdCLDBCQUEwQixLQUFLLGlCQUFpQixpQkFBaUIsdUJBQXVCLHdDQUF3QyxzQkFBc0IsS0FBSyxrQkFBa0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsS0FBSyxnQkFBZ0IsS0FBSyxlQUFlLGtCQUFrQix5QkFBeUIsbUJBQW1CLG9CQUFvQixnREFBZ0Qsc0JBQXNCLEtBQUssb0JBQW9CLDBCQUEwQixnQ0FBZ0MsbUJBQW1CLDhCQUE4QixrQkFBa0IsbUJBQW1CLDJDQUEyQyx3QkFBd0IsdUJBQXVCLG1DQUFtQyxzQkFBc0Isb0RBQW9ELEtBQUssMkJBQTJCLHdCQUF3QixpQkFBaUIsa0JBQWtCLEtBQUssa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixLQUFLLCtCQUErQixhQUFhLCtCQUErQixPQUFPLDhHQUE4RyxvQkFBb0IscUJBQXFCLGdDQUFnQyxxQkFBcUIseUJBQXlCLE9BQU8sYUFBYSw0QkFBNEIseUJBQXlCLHlCQUF5QixPQUFPLHlCQUF5Qiw0Q0FBNEMsT0FBTywwQkFBMEIsNkNBQTZDLE9BQU8sNEJBQTRCLCtDQUErQyxPQUFPLGVBQWUsNEJBQTRCLGtDQUFrQyxPQUFPLG9CQUFvQixxQkFBcUIsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sYUFBYSx3QkFBd0IsT0FBTyxpQkFBaUIsd0JBQXdCLE9BQU8sdUJBQXVCLHlCQUF5QixPQUFPLEtBQUssK0JBQStCLGFBQWEscUJBQXFCLHNCQUFzQix5QkFBeUIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcGljO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2hoQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLDJIQUFPLFVBQVUsMkhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQjtBQUNVO0FBQ29DO0FBQ3JCO0FBQ1Q7QUFDWTtBQUNSO0FBQ007QUFDRjtBQUNjO0FBUzNCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQU07QUFDUjtBQUNBLENBQUM7QUFDRDtBQUNBLEVBQUUsd0RBQU87QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSwyREFBVTtBQUNaLENBQUM7QUFDRDtBQUNBLEVBQUUsbURBQUs7QUFDUDtBQUNBLENBQUM7QUFDRDtBQUNBLEVBQUUseURBQVE7QUFDVjtBQUNBLENBQUM7QUFDRDtBQUNBLEVBQUUsdURBQU87QUFDVDtBQUNBLENBQUM7QUFDRCxpQkFBaUIsZ0VBQVc7QUFDNUI7QUFDQTtBQUNBLEVBQUUscUVBQWU7QUFDakIsQ0FBQztBQUNEO0FBQ0Esa0JBQWtCLDhEQUFTO0FBQzNCO0FBQ0E7QUFDQSxhQUFhLDZEQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCO0FBQ3RCO0FBQ0EsdURBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUYyRDtBQUNWO0FBQ29CLENBQUM7QUFDdEI7QUFDdEQ7QUFDQTtBQUNBLEVBQUUscURBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLHVEQUFTO0FBQ2xDO0FBQ0EsSUFBSSw0REFBcUI7QUFDekIsR0FBRztBQUNIO0FBQ0EsRUFBRSx1REFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBUztBQUNoQyxFQUFFLDREQUFxQjtBQUN2QjtBQUNBO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERtQztBQUNoQjtBQUN0QyxnQkFBZ0IsdURBQVM7QUFDRztBQUNTO0FBUWQsQ0FBQztBQUNRO0FBQ007QUFDRjtBQUNpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQixNQUFNLHFEQUFZO0FBQ2xCO0FBQ0EsTUFBTSxrRUFBbUI7QUFDekIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQU07QUFDVixJQUFJO0FBQ0osSUFBSSxrREFBTztBQUNYLElBQUk7QUFDSixJQUFJLDZDQUFLO0FBQ1QsSUFBSTtBQUNKLElBQUksbURBQVE7QUFDWixJQUFJO0FBQ0osSUFBSSxpREFBTztBQUNYO0FBQ0E7QUFDQTtBQUMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRzJCO0FBQ1c7QUFDVjtBQUNvQixDQUFDO0FBQzVFO0FBQ0E7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVk7QUFDZDtBQUNBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQix5QkFBeUIsdURBQVM7QUFDbEM7QUFDQSxJQUFJLDREQUFxQjtBQUN6QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQVM7QUFDaEMsRUFBRSw0REFBcUI7QUFDdkI7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1DO0FBQ2I7QUFDYjtBQUMrQyxDQUFDO0FBQ3ZDO0FBQ0Q7QUFDRTtBQUNOO0FBQ2hDO0FBQ0EsaUJBQWlCLHVEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFXO0FBQ2pDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFRO0FBQ2QsTUFBTSxxREFBWTtBQUNsQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFNO0FBQ1YsSUFBSTtBQUNKLElBQUksa0RBQU87QUFDWCxJQUFJO0FBQ0osSUFBSSw2Q0FBSztBQUNULElBQUk7QUFDSixJQUFJLG1EQUFRO0FBQ1osSUFBSTtBQUNKLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU1lO0FBQ1E7QUFDUDtBQUNvQixDQUFDO0FBQzVFO0FBQ0E7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFXO0FBQ2pDLEVBQUUsdURBQVk7QUFDZDtBQUNBO0FBQ0EsSUFBSSxzREFBYTtBQUNqQixJQUFJLHNEQUFhO0FBQ2pCLElBQUksc0RBQWE7QUFDakIseUJBQXlCLHVEQUFTO0FBQ2xDO0FBQ0EsSUFBSSx5REFBa0I7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQVM7QUFDaEM7QUFDQSxFQUFFLHlEQUFrQjtBQUNwQjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0V0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDMkM7QUFDbkM7QUFDcUI7QUFDc0IsQ0FBQztBQUNoRjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1REFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsbUJBQW1CLHVEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0NBQWdDO0FBQzFDO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBWTtBQUNsQztBQUNBO0FBQ0EsbUJBQW1CLHVEQUFTO0FBQzVCO0FBQ0EsSUFBSSw2REFBZTtBQUNuQixJQUFJLDJEQUFnQjtBQUNwQjtBQUNBO0FBQ0EsSUFBSSxvREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN05GO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvYm94aWNvbnMvZGlzdC9ib3hpY29ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL092ZXJkdWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2FkZGluZ1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9mb3JtZWRpdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvcmVtb3ZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90YXNrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90YXNrU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdGFza1VJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90b2RheS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdXBjb21pbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3VwZGF0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3VzZXJGb3JtT2JqLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlLG4scixvKXtpZihcImN1c3RvbUVsZW1lbnRzXCJpbiBuKW8oKTtlbHNle2lmKG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwpcmV0dXJuIHZvaWQgbi5BV0FJVElOR19XRUJfQ09NUE9ORU5UU19QT0xZRklMTC50aGVuKG8pO3ZhciBhPW4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEw9ZigpO2EudGhlbihvKTt2YXIgaT1uLldFQl9DT01QT05FTlRTX1BPTFlGSUxMfHxcIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3dlYmNvbXBvbmVudHNqcy8yLjAuMi93ZWJjb21wb25lbnRzLWJ1bmRsZS5qc1wiLHM9bi5FUzZfQ09SRV9QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jb3JlLWpzLzIuNS4zL2NvcmUubWluLmpzXCI7XCJQcm9taXNlXCJpbiBuP2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKTpjKHMpLnRoZW4oKGZ1bmN0aW9uKCl7YyhpKS50aGVuKChmdW5jdGlvbigpe2EuaXNEb25lPSEwLGEuZXhlYygpfSkpfSkpfWZ1bmN0aW9uIGYoKXt2YXIgdD1bXTtyZXR1cm4gdC5pc0RvbmU9ITEsdC5leGVjPWZ1bmN0aW9uKCl7dC5zcGxpY2UoMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7dCgpfSkpfSx0LnRoZW49ZnVuY3Rpb24oZSl7cmV0dXJuIHQuaXNEb25lP2UoKTp0LnB1c2goZSksdH0sdH1mdW5jdGlvbiBjKHQpe3ZhciBlPWYoKSxuPXIuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gbi50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIsbi5yZWFkeVN0YXRlP24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7XCJsb2FkZWRcIiE9bi5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPW4ucmVhZHlTdGF0ZXx8KG4ub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5pc0RvbmU9ITAsZS5leGVjKCkpfTpuLm9ubG9hZD1mdW5jdGlvbigpe2UuaXNEb25lPSEwLGUuZXhlYygpfSxuLnNyYz10LHIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4udGhlbj1lLnRoZW4sbn19KDAsMCx3aW5kb3csZG9jdW1lbnQsKGZ1bmN0aW9uKCl7dmFyIHQsZTt0PXdpbmRvdyxlPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9NSl9KFtmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcCgoZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgbixyPXRbMV18fFwiXCIsbz10WzNdO2lmKCFvKXJldHVybiByO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBhPShuPW8sXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSkrXCIgKi9cIiksaT1vLnNvdXJjZXMubWFwKChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrby5zb3VyY2VSb290K3QrXCIgKi9cIn0pKTtyZXR1cm5bcl0uY29uY2F0KGkpLmNvbmNhdChbYV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9KGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIituK1wifVwiOm59KSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciByPXt9LG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIGE9dGhpc1tvXVswXTtcIm51bWJlclwiPT10eXBlb2YgYSYmKHJbYV09ITApfWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBpPXRbb107XCJudW1iZXJcIj09dHlwZW9mIGlbMF0mJnJbaVswXV18fChuJiYhaVsyXT9pWzJdPW46biYmKGlbMl09XCIoXCIraVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goaSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCk7dC5leHBvcnRzPVwic3RyaW5nXCI9PXR5cGVvZiByP3I6ci50b1N0cmluZygpfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLFwiQC13ZWJraXQta2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIHNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYnVyc3R7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX05MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZsYXNoaW5nezAle29wYWNpdHk6MX00NSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1yaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtdXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtZG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmJ4LXNwaW4sLmJ4LXNwaW4taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlfS5ieC10YWRhLC5ieC10YWRhLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnRhZGEgMS41cyBlYXNlIGluZmluaXRlO2FuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZX0uYngtZmxhc2hpbmcsLmJ4LWZsYXNoaW5nLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZsYXNoaW5nIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtYnVyc3QsLmJ4LWJ1cnN0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmJ1cnN0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS11cCwuYngtZmFkZS11cC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLXVwIDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLWRvd24sLmJ4LWZhZGUtZG93bi1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtZG93biAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1sZWZ0LC5ieC1mYWRlLWxlZnQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWxlZnQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtcmlnaHQsLmJ4LWZhZGUtcmlnaHQtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1yaWdodCAxLjVzIGluZmluaXRlIGxpbmVhcn1cIixcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXsodC5leHBvcnRzPW4oMCkoITEpKS5wdXNoKFt0LmksJy5ieC1yb3RhdGUtOTB7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCJ9LmJ4LXJvdGF0ZS0xODB7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVwifS5ieC1yb3RhdGUtMjcwe3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcIn0uYngtZmxpcC1ob3Jpem9udGFse3RyYW5zZm9ybTpzY2FsZVgoLTEpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIn0uYngtZmxpcC12ZXJ0aWNhbHt0cmFuc2Zvcm06c2NhbGVZKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCJ9JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSksbi5kKGUsXCJCb3hJY29uRWxlbWVudFwiLChmdW5jdGlvbigpe3JldHVybiBnfSkpO3ZhciByLG8sYSxpLHM9bigxKSxmPW4ubihzKSxjPW4oMiksbD1uLm4oYyksbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gbiYmdChlLnByb3RvdHlwZSxuKSxyJiZ0KGUsciksZX19KCksZD0obz0ocj1PYmplY3QpLmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX199LGE9ci5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSxpPVwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3Q/XCJ1bmRlZmluZWRcIjptKFJlZmxlY3QpKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIHIsbz1bbnVsbF07cmV0dXJuIG8ucHVzaC5hcHBseShvLGUpLHI9dC5iaW5kLmFwcGx5KHQsbyksYShuZXcgcixuLnByb3RvdHlwZSl9LGZ1bmN0aW9uKHQpe3ZhciBlPW8odCk7cmV0dXJuIGEodCxhKChmdW5jdGlvbigpe3JldHVybiBpKGUsYXJndW1lbnRzLG8odGhpcykuY29uc3RydWN0b3IpfSksZSkpfSkscD13aW5kb3csYj17fSx5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxoPWZ1bmN0aW9uKCl7cmV0dXJuISFwLlNoYWR5Q1NTfTt5LmlubmVySFRNTD0nXFxuPHN0eWxlPlxcbjpob3N0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuOmhvc3QoW3NpemU9eHNdKSB7XFxuICAgIHdpZHRoOiAwLjhyZW07XFxuICAgIGhlaWdodDogMC44cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1zbV0pIHtcXG4gICAgd2lkdGg6IDEuNTVyZW07XFxuICAgIGhlaWdodDogMS41NXJlbTtcXG59XFxuOmhvc3QoW3NpemU9bWRdKSB7XFxuICAgIHdpZHRoOiAyLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDIuMjVyZW07XFxufVxcbjpob3N0KFtzaXplPWxnXSkge1xcbiAgICB3aWR0aDogMy4wcmVtO1xcbiAgICBoZWlnaHQ6IDMuMHJlbTtcXG59XFxuXFxuOmhvc3QoW3NpemVdOm5vdChbc2l6ZT1cIlwiXSk6bm90KFtzaXplPXhzXSk6bm90KFtzaXplPXNtXSk6bm90KFtzaXplPW1kXSk6bm90KFtzaXplPWxnXSkpIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuOmhvc3QoW3B1bGw9bGVmdF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtwdWxsPXJpZ2h0XSkgI2ljb24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtIWltcG9ydGFudDtcXG59XFxuOmhvc3QoW2JvcmRlcj1zcXVhcmVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG59XFxuOmhvc3QoW2JvcmRlcj1jaXJjbGVdKSAjaWNvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBib3JkZXI6IC4wN2VtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNpY29uLFxcbnN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2ljb24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuJytmLmErXCJcXG5cIitsLmErJ1xcbjwvc3R5bGU+XFxuPGRpdiBpZD1cImljb25cIj48L2Rpdj4nO3ZhciBnPWQoZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSk7dmFyIHQ9ZnVuY3Rpb24odCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP3Q6ZX0odGhpcywoZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSkuY2FsbCh0aGlzKSk7cmV0dXJuIHQuJHVpPXQuYXR0YWNoU2hhZG93KHttb2RlOlwib3BlblwifSksdC4kdWkuYXBwZW5kQ2hpbGQodC5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoeS5jb250ZW50LCEwKSksaCgpJiZwLlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0KSx0Ll9zdGF0ZT17JGljb25Ib2xkZXI6dC4kdWkuZ2V0RWxlbWVudEJ5SWQoXCJpY29uXCIpLHR5cGU6dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpfSx0fXJldHVybiBmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfShlLEhUTUxFbGVtZW50KSx1KGUsbnVsbCxbe2tleTpcImdldEljb25TdmdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuY2RuVXJsK1wiL3JlZ3VsYXIvYngtXCIrdCtcIi5zdmdcIjtyZXR1cm5cInNvbGlkXCI9PT1lP249dGhpcy5jZG5VcmwrXCIvc29saWQvYnhzLVwiK3QrXCIuc3ZnXCI6XCJsb2dvXCI9PT1lJiYobj10aGlzLmNkblVybCtcIi9sb2dvcy9ieGwtXCIrdCtcIi5zdmdcIiksbiYmYltuXXx8KGJbbl09bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsZSl7dmFyIHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3IuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXt0aGlzLnN0YXR1czwyMDB8fHRoaXMuc3RhdHVzPj0zMDA/ZShuZXcgRXJyb3IodGhpcy5zdGF0dXMrXCIgXCIrdGhpcy5yZXNwb25zZVRleHQpKTp0KHRoaXMucmVzcG9uc2VUZXh0KX0pKSxyLm9uZXJyb3I9ZSxyLm9uYWJvcnQ9ZSxyLm9wZW4oXCJHRVRcIixuKSxyLnNlbmQoKX0pKSksYltuXX19LHtrZXk6XCJkZWZpbmVcIix2YWx1ZTpmdW5jdGlvbih0KXt0PXR8fHRoaXMudGFnTmFtZSxoKCkmJnAuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlKHksdCksY3VzdG9tRWxlbWVudHMuZGVmaW5lKHQsdGhpcyl9fSx7a2V5OlwiY2RuVXJsXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCIvL3VucGtnLmNvbS9ib3hpY29uc0AyLjEuNC9zdmdcIn19LHtrZXk6XCJ0YWdOYW1lXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJib3gtaWNvblwifX0se2tleTpcIm9ic2VydmVkQXR0cmlidXRlc1wiLGdldDpmdW5jdGlvbigpe3JldHVybltcInR5cGVcIixcIm5hbWVcIixcImNvbG9yXCIsXCJzaXplXCIsXCJyb3RhdGVcIixcImZsaXBcIixcImFuaW1hdGlvblwiLFwiYm9yZGVyXCIsXCJwdWxsXCJdfX1dKSx1KGUsW3trZXk6XCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5fc3RhdGUuJGljb25Ib2xkZXI7c3dpdGNoKHQpe2Nhc2VcInR5cGVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuJGljb25Ib2xkZXIudGV4dENvbnRlbnQ9XCJcIixyLnR5cGUmJihyLnR5cGU9bnVsbCksci50eXBlPSFufHxcInNvbGlkXCIhPT1uJiZcImxvZ29cIiE9PW4/XCJyZWd1bGFyXCI6bix2b2lkIDAhPT1yLmN1cnJlbnROYW1lJiZ0LmNvbnN0cnVjdG9yLmdldEljb25Tdmcoci5jdXJyZW50TmFtZSxyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IudHlwZT09PW4mJihyLiRpY29uSG9sZGVyLmlubmVySFRNTD10KX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGljb246IFwiK3IuY3VycmVudE5hbWUrXCJcXG5cIit0KX0pKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcIm5hbWVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3IuY3VycmVudE5hbWU9bixyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsbiYmdm9pZCAwIT09ci50eXBlJiZ0LmNvbnN0cnVjdG9yLmdldEljb25TdmcobixyLnR5cGUpLnRoZW4oKGZ1bmN0aW9uKHQpe3IuY3VycmVudE5hbWU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIituK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJjb2xvclwiOnIuc3R5bGUuZmlsbD1ufHxcIlwiO2JyZWFrO2Nhc2VcInNpemVcIjohZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuX3N0YXRlO3Iuc2l6ZSYmKHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9XCJcIixyLnNpemU9ci5zaXplVHlwZT1udWxsKSxuJiYhL14oeHN8c218bWR8bGcpJC8udGVzdChyLnNpemUpJiYoci5zaXplPW4udHJpbSgpLHIuJGljb25Ib2xkZXIuc3R5bGUud2lkdGg9ci4kaWNvbkhvbGRlci5zdHlsZS5oZWlnaHQ9ci5zaXplKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LXJvdGF0ZS1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1yb3RhdGUtXCIrbik7YnJlYWs7Y2FzZVwiZmxpcFwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LWZsaXAtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtZmxpcC1cIituKTticmVhaztjYXNlXCJhbmltYXRpb25cIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1cIituKX19fSx7a2V5OlwiY29ubmVjdGVkQ2FsbGJhY2tcIix2YWx1ZTpmdW5jdGlvbigpe2goKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyl9fV0pLGV9KCkpO2UuZGVmYXVsdD1nLGcuZGVmaW5lKCl9XSl9LFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQm94SWNvbkVsZW1lbnQ9ZSgpOnQuQm94SWNvbkVsZW1lbnQ9ZSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94aWNvbnMuanMubWFwIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50YWIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNjI5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uYngge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLm1lbnUge1xuICBmaWxsOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1oZWFkbGluZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm1lbnUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lbnUtdXNlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm1lbnUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzVweDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMThweDtcbn1cblxuLm1lbnUtbWFpbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYngtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogODAlO1xufVxuXG4uYngtYm94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5ieC10ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uYngtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLmJ4LXRleHQsXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtaGVhZGxpbmUsXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtdXNlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAuYngtYm94IHtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBnYXA6IDA7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1tYWluLWxpc3Qge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5tZW51LWxpc3Qge1xuICBnYXA6IDA7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1jb250ZW50IHtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtdXNlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1ib3gge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItYWN0aXZlIHtcbiAgd2lkdGg6IDY1cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5ieC1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYngtYm94OmhvdmVyIC5ieCB7XG4gIGZpbGw6ICMyNTI2Mjk7XG59XG5cbi5ieC1ib3g6aG92ZXIgLmJ4LXRleHQge1xuICBjb2xvcjogIzI1MjYyOTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG1pbi13aWR0aDogY2FsYygxMDB2dyAtIGNsYW1wKDIyMHB4LCA0MHZ3LCAzMDBweCkpO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICB6LWluZGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogIzI1MjYyOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjUyNjI5O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5ldy1wcm9qZWN0OmFjdGl2ZSB7XG4gIHdpZHRoOiAzMSU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQyZjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE3MHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50LWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFkZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg5ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kYXktaGVhZGxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQyZjtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50YXNrLWJvcmRlci1kb25lIHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzFkYjQ0Mztcbn1cblxuLnRhc2stYm9yZGVyLXN0dWNrIHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2VmMjMzYztcbn1cblxuLnRhc2stYm9yZGVyLXdvcmtpbmcge1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZmZkZDAwO1xufVxuXG4udGFzay1uYW1lIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAyOCU7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGFzay1vd25lciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnRhc2stc3RhdHVzIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTUlO1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4udGFzay1wcmlvcml0eSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEyJTtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLnRhc2stcHJpb3JpdHktaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjJjYmY7XG59XG5cbi50YXNrLXByaW9yaXR5LW1lZGl1bSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTQ1Y2Y7XG59XG5cbi50YXNrLXByaW9yaXR5LWxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZTc0Zjc7XG59XG5cbi50YXNrLXN0YXR1cy1zdHVjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG59XG5cbi50YXNrLXN0YXR1cy1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkYjQ0Mztcbn1cblxuLnRhc2stc3RhdHVzLXdvcmtpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDAwO1xufVxuXG4jZm9ybS1wcm9qZWN0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLnRhc2stdGFncyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTIlO1xuICBtaW4td2lkdGg6IDExMHB4O1xuICBjb2xvcjogI2IzZTljNztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi50YXNrLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEyJTtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLnRvZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRhc2stZWRpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1pbi13aWR0aDogMjRweDtcbn1cblxuLnRhc2stZGVsZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ4LWJveC10YXNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ4LWJveC10YXNrOmhvdmVyIC5ieCB7XG4gIGZpbGw6ICMyNTI2Mjk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMjA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJkMmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cblxuLmZvcm0taW5wdXQge1xuICBoZWlnaHQ6IDglO1xuICBtYXgtaGVpZ2h0OiA0NXB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmRlbGV0ZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vdmVydmlldyB7XG4gIHotaW5kZXg6IDE1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgNTYsIDU2LCAwLjQzMik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmJ1dHRvbi1zdWJtaXQge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1dHRvbi1zdWJtaXQ6YWN0aXZlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogOTklO1xufVxuXG4uc3VibWl0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAudGFzayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGFzay1uYW1lLFxuICAudGFzay1vd25lcixcbiAgLnRhc2stc3RhdHVzLFxuICAudGFzay1wcmlvcml0eSxcbiAgLnRhc2stdGFncyxcbiAgLnRhc2stZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG4gIC50YXNrIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAudGFzay1ib3JkZXItZG9uZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFkYjQ0MztcbiAgfVxuICAudGFzay1ib3JkZXItc3R1Y2sge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlZjIzM2M7XG4gIH1cbiAgLnRhc2stYm9yZGVyLXdvcmtpbmcge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmRkMDA7XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xuICB9XG4gIC50YXNrLWRlbGV0ZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC50YXNrLWVkaXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAuZm9ybSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIC5vdmVydmlldyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIC50b2RheS1oZWFkbGluZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFXQTtFQUNFLHFCQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EseUJBZlc7RUFnQlgsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBUkY7O0FBVUE7RUFDRSxXQTVCVTtBQXFCWjs7QUFTQTtFQUNFLFdBL0JVO0VBZ0NWLGVBQUE7QUFORjs7QUFRQTtFQUNFLFlBbkNVO0VBb0NWLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU1BO0VBQ0UsWUEvQ1U7RUFnRFYsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0UsWUF0RlU7RUF1RlYsa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBOzs7RUFHRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Es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MkNGOztBQXpDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQTRDRjs7QUExQ0E7RUFDRTtJQUNFLHNCQUFBO0VBNkNGO0VBM0NBOzs7Ozs7SUFNRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBNkNGO0VBM0NBO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBNkNGO0VBM0NBO0lBQ0UseUJBQUE7RUE2Q0Y7RUEzQ0E7SUFDRSx5QkFBQTtFQTZDRjtFQTNDQTtJQUNFLHlCQUFBO0VBNkNGO0VBM0NBO0lBQ0UsbUJBQUE7SUFDQSx5QkFBQTtFQTZDRjtFQTNDQTtJQUNFLFlBQUE7RUE2Q0Y7RUEzQ0E7SUFDRSxZQUFBO0VBNkNGO0VBM0NBO0lBQ0UsZUFBQTtFQTZDRjtFQTNDQTtJQUNFLGVBQUE7RUE2Q0Y7RUEzQ0E7SUFDRSxnQkFBQTtFQTZDRjtBQUNGO0FBM0NBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBNkNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiRtZW51LXRleHQ6IHdoaXRlO1xcclxcbiRtZW51LWNvbG9yOiAjMjUyNjI5O1xcclxcbiR0YXNrLXN0YXR1cy13b3JraW5nOiAjZmZkZDAwO1xcclxcbiR0YXNrLXN0YXR1cy1kb25lOiAjMWRiNDQzO1xcclxcbiR0YXNrLXN0YXR1cy1zdHVjazogI2VmMjMzYztcXHJcXG4kdGFzay1wcmlvcml0eS1oaWdoOiAjN2IyY2JmO1xcclxcbiR0YXNrLXByaW9yaXR5LW1lZGl1bTogIzkxNDVjZjtcXHJcXG4kdGFzay1wcmlvcml0eS1sb3c6ICNiZTc0Zjc7XFxyXFxuJHRhc2stdGFnczogI2IzZTljNztcXHJcXG4kaGVhZGVyOiAjMmEyZDJmO1xcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG4uYngge1xcclxcbiAgZmlsbDogJG1lbnUtdGV4dDtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcbiAgZmlsbDogJG1lbnUtdGV4dDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm1lbnUtaGVhZGxpbmUge1xcclxcbiAgY29sb3I6ICRtZW51LXRleHQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5tZW51LWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ubWVudS11c2VyIHtcXHJcXG4gIGNvbG9yOiAkbWVudS10ZXh0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4ubWVudS1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzNXB4O1xcclxcbn1cXHJcXG4ubWVudS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxOHB4O1xcclxcbn1cXHJcXG4ubWVudS1tYWluLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYngtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcbi5ieC1ib3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG4uYngtdGV4dDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG4uYngtdGV4dCB7XFxyXFxuICBjb2xvcjogJG1lbnUtdGV4dDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAuYngtdGV4dCxcXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtaGVhZGxpbmUsXFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LXVzZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5ieC1ib3gge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGdhcDogMDtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LW1haW4tbGlzdCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1saXN0IHtcXHJcXG4gIGdhcDogMDtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LWNvbnRlbnQge1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtdXNlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtYm94IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUge1xcclxcbiAgd2lkdGg6IDY1cHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYngtYm94OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG4uYngtYm94OmhvdmVyIC5ieCB7XFxyXFxuICBmaWxsOiAkbWVudS1jb2xvcjtcXHJcXG59XFxyXFxuLmJ4LWJveDpob3ZlciAuYngtdGV4dCB7XFxyXFxuICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxufVxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gY2xhbXAoMjIwcHgsIDQwdncsIDMwMHB4KSk7XFxyXFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LXRleHQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBjb2xvcjogJG1lbnUtY29sb3I7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkbWVudS1jb2xvcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3Q6YWN0aXZlIHtcXHJcXG4gIHdpZHRoOiAzMSU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDE3MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5hZGQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg5ZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDUwbXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWhlYWRsaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlcjtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi50YXNrLWJvcmRlci1kb25lIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR0YXNrLXN0YXR1cy1kb25lO1xcclxcbn1cXHJcXG4udGFzay1ib3JkZXItc3R1Y2sge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJHRhc2stc3RhdHVzLXN0dWNrO1xcclxcbn1cXHJcXG4udGFzay1ib3JkZXItd29ya2luZyB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkdGFzay1zdGF0dXMtd29ya2luZztcXHJcXG59XFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiAyOCU7XFxyXFxuICBtaW4td2lkdGg6IDIzMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnRhc2stb3duZXIge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi50YXNrLXN0YXR1cyB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTUlO1xcclxcbiAgbWluLXdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyJTtcXHJcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxyXFxufVxcclxcbi50YXNrLXByaW9yaXR5LWhpZ2gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhc2stcHJpb3JpdHktaGlnaDtcXHJcXG59XFxyXFxuLnRhc2stcHJpb3JpdHktbWVkaXVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXByaW9yaXR5LW1lZGl1bTtcXHJcXG59XFxyXFxuLnRhc2stcHJpb3JpdHktbG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXByaW9yaXR5LWxvdztcXHJcXG59XFxyXFxuLnRhc2stc3RhdHVzLXN0dWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXN0YXR1cy1zdHVjaztcXHJcXG59XFxyXFxuLnRhc2stc3RhdHVzLWRvbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhc2stc3RhdHVzLWRvbmU7XFxyXFxufVxcclxcbi50YXNrLXN0YXR1cy13b3JraW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXN0YXR1cy13b3JraW5nO1xcclxcbn1cXHJcXG4jZm9ybS1wcm9qZWN0IHtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbi50YXNrLXRhZ3Mge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMiU7XFxyXFxuICBtaW4td2lkdGg6IDExMHB4O1xcclxcblxcclxcbiAgY29sb3I6ICR0YXNrLXRhZ3M7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnRhc2stZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyJTtcXHJcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxyXFxufVxcclxcbi50b2RheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG4udGFzay1lZGl0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDI0cHg7XFxyXFxufVxcclxcbi50YXNrLWRlbGV0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYngtYm94LXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcbi5ieC1ib3gtdGFzazpob3ZlciAuYngge1xcclxcbiAgZmlsbDogJG1lbnUtY29sb3I7XFxyXFxufVxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgaGVpZ2h0OiA1MHZ3O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxufVxcclxcbi5mb3JtLWlucHV0IHtcXHJcXG4gIGhlaWdodDogOCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ieC1kZWxldGUge1xcclxcbn1cXHJcXG4ub3ZlcnZpZXcge1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgNTYsIDU2LCAwLjQzMik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcbi5idXR0b24tc3VibWl0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWZmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4uYnV0dG9uLXN1Ym1pdDphY3RpdmUge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB3aWR0aDogOTklO1xcclxcbiAgaGVpZ2h0OiA5OSU7XFxyXFxufVxcclxcbi5zdWJtaXQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xcclxcbiAgLnRhc2sge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgLnRhc2stbmFtZSxcXHJcXG4gIC50YXNrLW93bmVyLFxcclxcbiAgLnRhc2stc3RhdHVzLFxcclxcbiAgLnRhc2stcHJpb3JpdHksXFxyXFxuICAudGFzay10YWdzLFxcclxcbiAgLnRhc2stZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB9XFxyXFxuICAudGFzayB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAudGFzay1ib3JkZXItZG9uZSB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR0YXNrLXN0YXR1cy1kb25lO1xcclxcbiAgfVxcclxcbiAgLnRhc2stYm9yZGVyLXN0dWNrIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHRhc2stc3RhdHVzLXN0dWNrO1xcclxcbiAgfVxcclxcbiAgLnRhc2stYm9yZGVyLXdvcmtpbmcge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkdGFzay1zdGF0dXMtd29ya2luZztcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDY1cHgpO1xcclxcbiAgfVxcclxcbiAgLnRhc2stZGVsZXRlIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLnRhc2stZWRpdCB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgfVxcclxcbiAgLm92ZXJ2aWV3IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgfVxcclxcbiAgLnRvZGF5LWhlYWRsaW5lIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAuZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCJib3hpY29uc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza09iamVjdCwgRGlzcGxheUFycmF5VWkgfSBmcm9tIFwiLi9wYWdlcy90YXNrXCI7XHJcbmltcG9ydCB7IEFsbFRhc2sgfSBmcm9tIFwiLi9wYWdlcy9hbGxUYXNrc1wiO1xyXG5pbXBvcnQgSG9tZVVJIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgdXNlckZvcm1VSSB9IGZyb20gXCIuL3BhZ2VzL3VzZXJGb3JtXCI7XHJcbmltcG9ydCB7IFRvZGF5IH0gZnJvbSBcIi4vcGFnZXMvdG9kYXlcIjtcclxuaW1wb3J0IHsgVXBjb21pbmcgfSBmcm9tIFwiLi9wYWdlcy91cGNvbWluZ1wiO1xyXG5pbXBvcnQgeyBPdmVyZHVlIH0gZnJvbSBcIi4vcGFnZXMvT3ZlcmR1ZVwiO1xyXG5pbXBvcnQgeyBhZGRpbmdQcm9qZWN0VWkgfSBmcm9tIFwiLi9wYWdlcy9hZGRpbmdQcm9qZWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgbG9hZFRhc2tzLFxyXG4gIGFkZFRhc2ssXHJcbiAgc2F2ZVRhc2tzLFxyXG4gIHJlbW92ZVRhc2tBcnJheSxcclxuICBzYXZlUHJvamVjdCxcclxuICBsb2FkUHJvamVjdCxcclxuICBhZGRQcm9qZWN0LFxyXG59IGZyb20gXCIuL3BhZ2VzL3Rhc2tTdG9yYWdlXCI7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbmNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiXCIpO1xyXG5jb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFwiKTtcclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHRhYi5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZWJhci1hY3RpdmVcIik7XHJcbn0pO1xyXG5sZXQgbXlBcnJheSA9IFtdO1xyXG5sZXQgcGxhY2UgPSBcIkhvbWVcIjtcclxuY29uc3QgaG9tZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbmNvbnN0IHRhc2tBbGxNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtdGFza1wiKTtcclxuY29uc3QgcXVpY2tBZGRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWljay1hZGRcIik7XHJcbmNvbnN0IHRvZGF5TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XHJcbmNvbnN0IHVwY29taW5nTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBjb21pbmdcIik7XHJcbmNvbnN0IG92ZXJkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJkdWVcIik7XHJcbmNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpO1xyXG5cclxuaG9tZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBIb21lVUkoKTtcclxuICBwbGFjZSA9IFwiSG9tZVwiO1xyXG59KTtcclxudGFza0FsbE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBBbGxUYXNrKCk7XHJcbiAgcGxhY2UgPSBcIkFsbC1UYXNrXCI7XHJcbn0pO1xyXG5cclxucXVpY2tBZGRNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdXNlckZvcm1VSShwbGFjZSk7XHJcbn0pO1xyXG50b2RheU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBUb2RheSgpO1xyXG4gIHBsYWNlID0gXCJUb2RheVwiO1xyXG59KTtcclxudXBjb21pbmdNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgVXBjb21pbmcoKTtcclxuICBwbGFjZSA9IFwiVXBjb21pbmdcIjtcclxufSk7XHJcbm92ZXJkdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBPdmVyZHVlKCk7XHJcbiAgcGxhY2UgPSBcIk92ZXJkdWVcIjtcclxufSk7XHJcbmxldCBuZXdQcm9qZWN0ID0gbG9hZFByb2plY3QoKTtcclxuXHJcbnByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBhZGRpbmdQcm9qZWN0VWkocGxhY2UpO1xyXG59KTtcclxuLy8gVHJ5IHRvIGxvYWQgZXhpc3RpbmcgdGFza3MgZnJvbSBsb2NhbFN0b3JhZ2VcclxubGV0IHN0b3JlZEFycmF5ID0gbG9hZFRhc2tzKCk7XHJcbi8vIE9ubHkgcG9wdWxhdGUgdGhlIGFycmF5IHdpdGggaW5pdGlhbCBvYmplY3RzIGlmIGl0J3MgZW1wdHlcclxuaWYgKHN0b3JlZEFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gIGNvbnN0IG9iID0gY3JlYXRlVGFza09iamVjdChcclxuICAgIFwiQ3JlYXRpbmcgYSB0YXNrXCIsXHJcbiAgICBcIk9yYnRlclwiLFxyXG4gICAgXCJXb3JraW5nIG9uIGl0XCIsXHJcbiAgICBcIkhpZ2hcIixcclxuICAgIFwiI0FkbWluXCIsXHJcbiAgICBcIjIwMjQtMDItMTVcIixcclxuICAgIFwiVG9kbyBMaXN0XCJcclxuICApO1xyXG4gIGNvbnN0IG9iMiA9IGNyZWF0ZVRhc2tPYmplY3QoXHJcbiAgICBcInRlc3RpbmcgdGhlIHVpXCIsXHJcbiAgICBcIllvdGFtXCIsXHJcbiAgICBcIkRvbmVcIixcclxuICAgIFwiTG93XCIsXHJcbiAgICBcIiNraW5nXCIsXHJcbiAgICBcIjIwMjQtMDItMjFcIixcclxuICAgIFwiVG9kbyBMaXN0XCJcclxuICApO1xyXG4gIHN0b3JlZEFycmF5LnB1c2gob2IsIG9iMik7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlBcnJheVwiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRBcnJheSkpO1xyXG59XHJcbmV4cG9ydCB7IG5ld1Byb2plY3QgfTtcclxuXHJcbkhvbWVVSSgpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT2JqZWN0LCBkaXNwbGF5QXJyYXlPdmVyZHVlVWkgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IFJlbW92ZVNjcmVlbiwgUmVtb3ZlQ29udGVudCB9IGZyb20gXCIuL3JlbW92ZVwiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcywgbG9hZFByb2plY3QgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcbmltcG9ydCB7IHVzZXJGb3JtVUksIG9wdGlvbkNyYXRlciB9IGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBPdmVyZHVlKCkge1xyXG4gIFJlbW92ZVNjcmVlbigpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCB1cGNvbWluZ0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIGNvbnN0IG5ld1Byb2plY3RzID0gbG9hZFByb2plY3QoKTtcclxuXHJcbiAgcGxhY2UuaW5uZXJUZXh0ID0gXCJPdmVyZHVlIFRhc2tzXCI7XHJcbiAgaGVhZFRleHQuaW5uZXJUZXh0ID0gXCJ5b3UgYXJlIGJlaGluZCBzY2hlZHVsZSFcIjtcclxuICB1cGNvbWluZ0hlYWRsaW5lLmlubmVyVGV4dCA9IFwiT3ZlcmR1ZVwiO1xyXG5cclxuICBzZWxlY3RQcm9qZWN0LmlkID0gXCJmb3JtLXByb2plY3RcIjtcclxuICBzZWxlY3RQcm9qZWN0Lm5hbWUgPSBcImZvcm0tcHJvamVjdFwiO1xyXG4gIHNlbGVjdFByb2plY3QuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIHVwY29taW5nSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRsaW5lXCIpO1xyXG4gIHVwY29taW5nLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuXHJcbiAgc2VsZWN0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgUmVtb3ZlQ29udGVudCh1cGNvbWluZyk7XHJcblxyXG4gICAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFByb2plY3QudmFsdWU7XHJcbiAgICBkaXNwbGF5QXJyYXlPdmVyZHVlVWkoc2hvd2luZ0FycmF5LCB1cGNvbWluZywgc2VsZWN0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICBvcHRpb25DcmF0ZXIobmV3UHJvamVjdHMsIHNlbGVjdFByb2plY3QpO1xyXG5cclxuICBtYWluQ29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250ZW50KTtcclxuICBoZWFkZXIuYXBwZW5kKHBsYWNlLCBjb250ZW50SGVhZCk7XHJcblxyXG4gIGNvbnRlbnRIZWFkLmFwcGVuZChoZWFkVGV4dCwgc2VsZWN0UHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0UHJvamVjdC52YWx1ZTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQodXBjb21pbmdIZWFkbGluZSwgdXBjb21pbmcpO1xyXG4gIGNvbnN0IHNob3dpbmdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gIGRpc3BsYXlBcnJheU92ZXJkdWVVaShzaG93aW5nQXJyYXksIHVwY29taW5nLCBzZWxlY3RlZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IE92ZXJkdWUgfTtcclxuIiwiaW1wb3J0IHsgUmVtb3ZlRm9ybVVJLCBSZW1vdmVTY3JlZW4gfSBmcm9tIFwiLi9yZW1vdmVcIjtcclxuaW1wb3J0IHsgbmV3UHJvamVjdCB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5sZXQgbWFpbkFycmF5ID0gbG9hZFRhc2tzKCk7XHJcbmltcG9ydCBIb21lVUkgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBBbGxUYXNrIH0gZnJvbSBcIi4vYWxsVGFza3NcIjtcclxuaW1wb3J0IHtcclxuICBsb2FkVGFza3MsXHJcbiAgYWRkVGFzayxcclxuICBzYXZlVGFza3MsXHJcbiAgc2F2ZVByb2plY3QsXHJcbiAgbG9hZFByb2plY3QsXHJcbiAgYWRkUHJvamVjdCxcclxufSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcbmltcG9ydCB7IFRvZGF5IH0gZnJvbSBcIi4vdG9kYXlcIjtcclxuaW1wb3J0IHsgVXBjb21pbmcgfSBmcm9tIFwiLi91cGNvbWluZ1wiO1xyXG5pbXBvcnQgeyBPdmVyZHVlIH0gZnJvbSBcIi4vT3ZlcmR1ZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0QnV0dG9uIH0gZnJvbSBcIi4vdXBkYXRlQnV0dG9uXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRpbmdQcm9qZWN0VWkocGxhY2UpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZm9ybS5pZCA9IFwiZm9ybS1pZFwiO1xyXG4gIGNvbnN0IGRpdkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdkZvcm0uY2xhc3NOYW1lID0gXCJmb3JtXCI7XHJcbiAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1mb3JtXCIpO1xyXG4gIGNvbnN0IGljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm94LWljb25cIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic29saWRcIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwieC1jaXJjbGVcIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIFwibGdcIik7XHJcbiAgaWNvbkRlbGV0ZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgUmVtb3ZlRm9ybVVJKGZvcm0sIGJsdXIpO1xyXG4gIH07XHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYnhcIik7XHJcbiAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZChpY29uRGVsZXRlKTtcclxuICBkaXZGb3JtLmFwcGVuZChkZWxldGVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNyZWF0aW5nLXByb2plY3RcIik7XHJcbiAgbGFiZWxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdDpcIjtcclxuICBjb25zdCBpbnB1dFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXRQcm9qZWN0LnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dFByb2plY3QuaWQgPSBcImNyZWF0aW5nLXByb2plY3RcIjtcclxuICBpbnB1dFByb2plY3QubmFtZSA9IFwiY3JlYXRpbmctcHJvamVjdFwiO1xyXG4gIGlucHV0UHJvamVjdC5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBpbnB1dFByb2plY3QucGxhY2Vob2xkZXIgPSBcIlRvZG8gTGlzdFwiO1xyXG4gIGlucHV0UHJvamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxQcm9qZWN0LCBpbnB1dFByb2plY3QpO1xyXG5cclxuICBjb25zdCBkaXZTdWJtaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZTdWJtaXRGb3JtLmNsYXNzTmFtZSA9IFwic3VibWl0LWZvcm1cIjtcclxuICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvblN1Ym1pdC5jbGFzc05hbWUgPSBcImJ1dHRvbi1zdWJtaXRcIjtcclxuICBidXR0b25TdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcclxuICBkaXZTdWJtaXRGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XHJcbiAgLy9jcmVhdGluZyBhIGJsdXJcclxuICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBibHVyLmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcclxuICBibHVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9KTtcclxuXHJcbiAgZGl2Rm9ybS5hcHBlbmRDaGlsZChkaXZTdWJtaXRGb3JtKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTsgLy8gT3IgYXBwZW5kIHRvIGFub3RoZXIgZWxlbWVudCBpZiBuZWVkZWRcclxuXHJcbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEtlZXAgdGhpcyB0byBwcmV2ZW50IHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dFByb2plY3QudmFsdWU7XHJcbiAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICAgICAgY2hlY2tpbmdGdW5jdGlvbihwbGFjZSk7XHJcbiAgICAgIHVwZGF0ZVByb2plY3RCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE9wdGlvbmFsbHkgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGRlZmF1bHQgdmFsaWRhdGlvbiBVSVxyXG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNraW5nRnVuY3Rpb24ocGxhY2UpIHtcclxuICBpZiAocGxhY2UgPT09IFwiSG9tZVwiKSB7XHJcbiAgICBIb21lVUkoKTtcclxuICB9IGVsc2UgaWYgKHBsYWNlID09PSBcIkFsbC1UYXNrXCIpIHtcclxuICAgIEFsbFRhc2soKTtcclxuICB9IGVsc2UgaWYgKHBsYWNlID09PSBcIlRvZGF5XCIpIHtcclxuICAgIFRvZGF5KCk7XHJcbiAgfSBlbHNlIGlmIChwbGFjZSA9PT0gXCJVcGNvbWluZ1wiKSB7XHJcbiAgICBVcGNvbWluZygpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiT3ZlcmR1ZVwiKSB7XHJcbiAgICBPdmVyZHVlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRpbmdQcm9qZWN0VWkgfTtcclxuIiwiaW1wb3J0IHsgdXNlckZvcm1VSSwgb3B0aW9uQ3JhdGVyIH0gZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza09iamVjdCwgZGlzcGxheUFycmF5QWxsVGltZVVpIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBSZW1vdmVTY3JlZW4sIFJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi9yZW1vdmVcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzLCBhZGRUYXNrLCBzYXZlVGFza3MsIGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5cclxuZnVuY3Rpb24gQWxsVGFzaygpIHtcclxuICBSZW1vdmVTY3JlZW4oKTtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWxsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBhbGxUaW1lSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBjb25zdCBuZXdQcm9qZWN0cyA9IGxvYWRQcm9qZWN0KCk7XHJcblxyXG4gIHBsYWNlLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCI7XHJcbiAgaGVhZFRleHQuaW5uZXJUZXh0ID0gXCJTZWUgYWxsIHRoZSB0YXNrcyB5b3UgaGF2ZSFcIjtcclxuICBhbGxUaW1lSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJBbGwgVGltZVwiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcblxyXG4gIHNlbGVjdFByb2plY3QuaWQgPSBcImZvcm0tcHJvamVjdFwiO1xyXG4gIHNlbGVjdFByb2plY3QubmFtZSA9IFwiZm9ybS1wcm9qZWN0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBzZWxlY3RQcm9qZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIGFsbFRpbWVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktaGVhZGxpbmVcIik7XHJcbiAgYWxsVGltZS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgYWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJidXR0b25cIik7XHJcbiAgb3B0aW9uQ3JhdGVyKG5ld1Byb2plY3RzLCBzZWxlY3RQcm9qZWN0KTtcclxuICBtYWluQ29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250ZW50KTtcclxuICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBSZW1vdmVDb250ZW50KGFsbFRpbWUpO1xyXG4gICAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFByb2plY3QudmFsdWU7XHJcbiAgICBkaXNwbGF5QXJyYXlBbGxUaW1lVWkoc2hvd2luZ0FycmF5LCBhbGxUaW1lLCBzZWxlY3RlZCk7XHJcbiAgfSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQocGxhY2UsIGNvbnRlbnRIZWFkKTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBzZWxlY3RQcm9qZWN0KTtcclxuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFByb2plY3QudmFsdWU7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKGFsbFRpbWVIZWFkbGluZSwgYWxsVGltZSk7XHJcbiAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgZGlzcGxheUFycmF5QWxsVGltZVVpKHNob3dpbmdBcnJheSwgYWxsVGltZSwgc2VsZWN0ZWQpO1xyXG59XHJcbmV4cG9ydCB7IEFsbFRhc2sgfTtcclxuIiwiaW1wb3J0IHsgUmVtb3ZlRm9ybVVJLCBSZW1vdmVTY3JlZW4gfSBmcm9tIFwiLi9yZW1vdmVcIjtcclxuaW1wb3J0IHsgRWRpdEl0ZW0gfSBmcm9tIFwiLi91c2VyRm9ybU9ialwiO1xyXG5pbXBvcnQgSG9tZVVJIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzLCBhZGRUYXNrLCBzYXZlVGFza3MsIGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5pbXBvcnQgeyBBbGxUYXNrIH0gZnJvbSBcIi4vYWxsVGFza3NcIjtcclxuaW1wb3J0IHsgT3ZlcmR1ZSB9IGZyb20gXCIuL092ZXJkdWVcIjtcclxuaW1wb3J0IHsgVXBjb21pbmcgfSBmcm9tIFwiLi91cGNvbWluZ1wiO1xyXG5pbXBvcnQgeyBUb2RheSB9IGZyb20gXCIuL3RvZGF5XCI7XHJcbmZ1bmN0aW9uIGVkaXRQb3B1cChwbGFjZSwgYXJyYXksIGluZGV4KSB7XHJcbiAgbGV0IG5ld0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgLy8gQ3JlYXRlIHRoZSBmb3JtIGFuZCB0aGUgbWFpbiBkaXYgd3JhcHBlclxyXG4gIC8vPGJveC1pY29uIHR5cGU9J3NvbGlkJyBuYW1lPSd4LWNpcmNsZSc+PC9ib3gtaWNvbj5cclxuICBjb25zdCBvYmogPSBhcnJheVtpbmRleF07XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmlkID0gXCJmb3JtLWlkXCI7XHJcbiAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2Rm9ybS5jbGFzc05hbWUgPSBcImZvcm1cIjtcclxuICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWZvcm1cIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib3gtaWNvblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzb2xpZFwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ4LWNpcmNsZVwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcInNpemVcIiwgXCJsZ1wiKTtcclxuICBpY29uRGVsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBSZW1vdmVGb3JtVUkoZm9ybSwgYmx1cik7XHJcbiAgfTtcclxuICBpY29uRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJieFwiKTtcclxuICBkZWxldGVDb250YWluZXIuYXBwZW5kKGljb25EZWxldGUpO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnVGFzaycgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFza1wiKTtcclxuICBsYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XHJcbiAgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0VGFzay50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXRUYXNrLmlkID0gXCJmb3JtLXRhc2tcIjtcclxuICBpbnB1dFRhc2submFtZSA9IFwiZm9ybS10YXNrXCI7XHJcbiAgaW5wdXRUYXNrLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0VGFzay5wbGFjZWhvbGRlciA9IFwiUGljayB1cCB0aGUgZG9nIGZyb20gdGhlIHZldFwiO1xyXG4gIGlucHV0VGFzay5yZXF1aXJlZCA9IHRydWU7XHJcbiAgaW5wdXRUYXNrLnZhbHVlID0gb2JqLk5hbWU7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxUYXNrLCBpbnB1dFRhc2spO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ05hbWUnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLW5hbWVcIik7XHJcbiAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xyXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0TmFtZS5pZCA9IFwiZm9ybS1uYW1lXCI7XHJcbiAgaW5wdXROYW1lLm5hbWUgPSBcImZvcm0tbmFtZVwiO1xyXG4gIGlucHV0TmFtZS5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSBcIllvdGFtXCI7XHJcbiAgaW5wdXROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dE5hbWUudmFsdWUgPSBvYmouT3duZXI7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxOYW1lLCBpbnB1dE5hbWUpO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ1N0YXR1cycgc2VsZWN0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxTdGF0dXMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS1zdGF0dXNcIik7XHJcbiAgbGFiZWxTdGF0dXMudGV4dENvbnRlbnQgPSBcIlN0YXR1czpcIjtcclxuICBjb25zdCBzZWxlY3RTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIHNlbGVjdFN0YXR1cy5pZCA9IFwiZm9ybS1zdGF0dXNcIjtcclxuICBzZWxlY3RTdGF0dXMubmFtZSA9IFwiZm9ybS1zdGF0dXNcIjtcclxuICBzZWxlY3RTdGF0dXMuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0U3RhdHVzLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBjb25zdCBkZWZhdWx0VmFsdWVTdGF0dXMgPSBvYmouU3RhdHVzOyAvLyBlLmcuLCBcIlN0dWNrXCJcclxuXHJcbiAgW1wiRG9uZVwiLCBcIlN0dWNrXCIsIFwiV29ya2luZyBvbiBpdFwiXS5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBzdGF0dXM7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzdGF0dXM7XHJcbiAgICBpZiAoc3RhdHVzID09PSBkZWZhdWx0VmFsdWVTdGF0dXMpIHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNlbGVjdFN0YXR1cy5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIH0pO1xyXG5cclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFN0YXR1cywgc2VsZWN0U3RhdHVzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdQcmlvcml0eScgc2VsZWN0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tcHJpb3JpdHlcIik7XHJcbiAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIHNlbGVjdFByaW9yaXR5LmlkID0gXCJmb3JtLXByaW9yaXR5XCI7XHJcbiAgc2VsZWN0UHJpb3JpdHkubmFtZSA9IFwiZm9ybS1wcmlvcml0eVwiO1xyXG4gIHNlbGVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIHNlbGVjdFByaW9yaXR5LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBjb25zdCBkZWZhdWx0VmFsdWVQcmlvcml0eSA9IG9iai5Qcmlvcml0eTtcclxuICBbXCJIaWdoXCIsIFwiTG93XCIsIFwiTWVkaXVtXCJdLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuICAgIGlmIChwcmlvcml0eSA9PT0gZGVmYXVsdFZhbHVlUHJpb3JpdHkpIHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxQcmlvcml0eSwgc2VsZWN0UHJpb3JpdHkpO1xyXG4gIGNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFByb2plY3Quc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS1wcm9qZWN0c1wiKTtcclxuICBsYWJlbFByb2plY3QudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcclxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RQcm9qZWN0LmlkID0gXCJmb3JtLXByb2plY3RzXCI7XHJcbiAgc2VsZWN0UHJvamVjdC5uYW1lID0gXCJmb3JtLXByb2plY3RzXCI7XHJcbiAgc2VsZWN0UHJvamVjdC5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBzZWxlY3RQcm9qZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBjb25zdCBuZXdQcm9qZWN0cyA9IGxvYWRQcm9qZWN0KCk7XHJcbiAgY29uc3QgZGVmYXVsdFZhbHVlUHJvamVjdCA9IG9iai5Qcm9qZWN0OyAvLyBlLmcuLCBcIlN0dWNrXCJcclxuXHJcbiAgb3B0aW9uQ3JhdGVyRWRpdChkZWZhdWx0VmFsdWVQcm9qZWN0LCBzZWxlY3RQcm9qZWN0KTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFByb2plY3QsIHNlbGVjdFByb2plY3QpO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ1RhZycgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbFRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxUYWdzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFnc1wiKTtcclxuICBsYWJlbFRhZ3MudGV4dENvbnRlbnQgPSBcIlRhZzpcIjtcclxuICBjb25zdCBpbnB1dFRhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXRUYWdzLnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dFRhZ3MuaWQgPSBcImZvcm0tdGFnc1wiO1xyXG4gIGlucHV0VGFncy5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBpbnB1dFRhZ3MucGxhY2Vob2xkZXIgPSBcIkFkbWluXCI7XHJcbiAgaW5wdXRUYWdzLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dFRhZ3MudmFsdWUgPSBvYmouVGFncztcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFRhZ3MsIGlucHV0VGFncyk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnRGF0ZScgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tZGF0ZVwiKTtcclxuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XHJcbiAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0RGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgaW5wdXREYXRlLmlkID0gXCJmb3JtLWRhdGVcIjtcclxuICBpbnB1dERhdGUubmFtZSA9IFwiZm9ybS1kYXRlXCI7XHJcbiAgaW5wdXREYXRlLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0RGF0ZS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgaW5wdXREYXRlLnZhbHVlID0gb2JqLkRhdGU7XHJcbiAgaW5wdXREYXRlLm1pbiA9IFwiMTkwMC0wMS0wMVwiO1xyXG4gIGlucHV0RGF0ZS5tYXggPSBcIjIxMjUtMDEtMDFcIjtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbERhdGUsIGlucHV0RGF0ZSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAgY29uc3QgZGl2U3VibWl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2U3VibWl0Rm9ybS5jbGFzc05hbWUgPSBcInN1Ym1pdC1mb3JtXCI7XHJcbiAgY29uc3QgYnV0dG9uU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b25TdWJtaXQuY2xhc3NOYW1lID0gXCJidXR0b24tc3VibWl0XCI7XHJcbiAgYnV0dG9uU3VibWl0LnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gIGJ1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XHJcbiAgZGl2U3VibWl0Rm9ybS5hcHBlbmRDaGlsZChidXR0b25TdWJtaXQpO1xyXG4gIC8vY3JlYXRpbmcgYSBibHVyXHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYmx1ci5jbGFzc0xpc3QuYWRkKFwib3ZlcnZpZXdcIik7XHJcbiAgYmx1ci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBSZW1vdmVGb3JtVUkoZm9ybSwgYmx1cik7XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvblN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBLZWVwIHRoaXMgdG8gcHJldmVudCB0aGUgZm9ybSBzdWJtaXNzaW9uXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGZvcm0gaXMgdmFsaWRcclxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICBFZGl0SXRlbShuZXdBcnJheSwgaW5kZXgpO1xyXG4gICAgICBSZW1vdmVGb3JtVUkoZm9ybSwgYmx1cik7XHJcbiAgICAgIGNoZWNraW5nRnVuY3Rpb24ocGxhY2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gT3B0aW9uYWxseSB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgZGVmYXVsdCB2YWxpZGF0aW9uIFVJXHJcbiAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQXBwZW5kIGV2ZXJ5dGhpbmcgdG8gdGhlIG1haW4gZm9ybSBkaXYgYW5kIHRoZW4gdGhlIGZvcm0gdG8gdGhlIGRvY3VtZW50IGJvZHkgKG9yIHdoZXJldmVyIGl0IG5lZWRzIHRvIGdvKVxyXG4gIGRpdkZvcm0uYXBwZW5kQ2hpbGQoZGl2U3VibWl0Rm9ybSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChkaXZGb3JtKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJsdXIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7IC8vIE9yIGFwcGVuZCB0byBhbm90aGVyIGVsZW1lbnQgaWYgbmVlZGVkXHJcbn1cclxuZnVuY3Rpb24gY2hlY2tpbmdGdW5jdGlvbihwbGFjZSkge1xyXG4gIGlmIChwbGFjZSA9PT0gXCJIb21lXCIpIHtcclxuICAgIEhvbWVVSSgpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiQWxsLVRhc2tcIikge1xyXG4gICAgQWxsVGFzaygpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiVG9kYXlcIikge1xyXG4gICAgVG9kYXkoKTtcclxuICB9IGVsc2UgaWYgKHBsYWNlID09PSBcIlVwY29taW5nXCIpIHtcclxuICAgIFVwY29taW5nKCk7XHJcbiAgfSBlbHNlIGlmIChwbGFjZSA9PT0gXCJPdmVyZHVlXCIpIHtcclxuICAgIE92ZXJkdWUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wdGlvbkNyYXRlckVkaXQoZGVmYXVsdFZhbHVlUHJvamVjdCwgd2hlcmVUb0FwcGVuZCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3QoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBpZiAob2JqID09PSBkZWZhdWx0VmFsdWVQcm9qZWN0KSB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvcHRpb24udmFsdWUgPSBvYmo7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmo7XHJcbiAgICB3aGVyZVRvQXBwZW5kLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGVkaXRQb3B1cCwgY2hlY2tpbmdGdW5jdGlvbiB9O1xyXG4iLCJpbXBvcnQgeyB1c2VyRm9ybVVJLCBvcHRpb25DcmF0ZXIgfSBmcm9tIFwiLi91c2VyRm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrT2JqZWN0LCBkaXNwbGF5QXJyYXlIb21lVWkgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IFJlbW92ZVNjcmVlbiwgUmVtb3ZlQ29udGVudCB9IGZyb20gXCIuL3JlbW92ZVwiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcywgbG9hZFByb2plY3QgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBIb21lVUkoKSB7XHJcbiAgUmVtb3ZlU2NyZWVuKCk7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWxsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHRvZGF5SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3Qgd2Vla0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGFsbFRpbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICBwbGFjZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuICB3ZWxjb21lLmlubmVyVGV4dCA9IFwiV2VsY29tZSBiYWNrLCBPcmJ0ZXJcIjtcclxuICBoZWFkVGV4dC5pbm5lclRleHQgPSBcIlN0YXJ0IEFub3RoZXIgVGFzayFcIjtcclxuICB0b2RheUhlYWRsaW5lLmlubmVyVGV4dCA9IFwiVG9kYXlcIjtcclxuICB3ZWVrSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUaGlzIFdlZWtcIjtcclxuICBhbGxUaW1lSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJBbGwgVGltZVwiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcbiAgLy9jbGFzc2VzXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIHRvZGF5SGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRsaW5lXCIpO1xyXG4gIHdlZWtIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktaGVhZGxpbmVcIik7XHJcbiAgYWxsVGltZUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICB0b2RheS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gIGFsbFRpbWUuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gIGFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkXCIsIFwiYnV0dG9uXCIpO1xyXG5cclxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RQcm9qZWN0LmlkID0gXCJmb3JtLXByb2plY3RcIjtcclxuICBzZWxlY3RQcm9qZWN0Lm5hbWUgPSBcImZvcm0tcHJvamVjdFwiO1xyXG4gIHNlbGVjdFByb2plY3QuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgY29uc3QgbmV3UHJvamVjdHMgPSBsb2FkUHJvamVjdCgpO1xyXG4gIG9wdGlvbkNyYXRlcihuZXdQcm9qZWN0cywgc2VsZWN0UHJvamVjdCk7XHJcblxyXG4gIHNlbGVjdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIFJlbW92ZUNvbnRlbnQodG9kYXkpO1xyXG4gICAgUmVtb3ZlQ29udGVudCh0aGlzV2Vlayk7XHJcbiAgICBSZW1vdmVDb250ZW50KGFsbFRpbWUpO1xyXG4gICAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdFByb2plY3QudmFsdWU7XHJcbiAgICBkaXNwbGF5QXJyYXlIb21lVWkoc2hvd2luZ0FycmF5LCB0b2RheSwgdGhpc1dlZWssIGFsbFRpbWUsIHNlbGVjdGVkKTtcclxuICB9KTtcclxuXHJcbiAgLy9hcHBlbmRpbmdcclxuXHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKGhlYWRlciwgY29udGVudCk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQocGxhY2UsIHdlbGNvbWUsIGNvbnRlbnRIZWFkKTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBzZWxlY3RQcm9qZWN0KTtcclxuICBjb250ZW50LmFwcGVuZChcclxuICAgIHRvZGF5SGVhZGxpbmUsXHJcbiAgICB0b2RheSxcclxuICAgIHdlZWtIZWFkbGluZSxcclxuICAgIHRoaXNXZWVrLFxyXG4gICAgYWxsVGltZUhlYWRsaW5lLFxyXG4gICAgYWxsVGltZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNob3dpbmdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0UHJvamVjdC52YWx1ZTtcclxuICBkaXNwbGF5QXJyYXlIb21lVWkoc2hvd2luZ0FycmF5LCB0b2RheSwgdGhpc1dlZWssIGFsbFRpbWUsIHNlbGVjdGVkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVVJO1xyXG4iLCJmdW5jdGlvbiBSZW1vdmVGb3JtVUkoZm9ybSwgb3ZlcnZpZXcpIHtcclxuICBmb3JtLnJlbW92ZSgpO1xyXG4gIG92ZXJ2aWV3LnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW1vdmVTY3JlZW4oKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIFJlbW92ZUNvbnRlbnQoY29udGVudCkge1xyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbW92ZUl0ZW1BcnJheShhcnJheSwgaW5kZXhUb1JlbW92ZSkge1xyXG4gIGFycmF5LnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IHsgUmVtb3ZlRm9ybVVJLCBSZW1vdmVTY3JlZW4sIFJlbW92ZUl0ZW1BcnJheSwgUmVtb3ZlQ29udGVudCB9O1xyXG4iLCJjb25zdCBjcmVhdGVUYXNrT2JqZWN0ID0gKFxyXG4gIE5hbWUsXHJcbiAgT3duZXIsXHJcbiAgU3RhdHVzLFxyXG4gIFByaW9yaXR5LFxyXG4gIFRhZ3MsXHJcbiAgRGF0ZSxcclxuICBQcm9qZWN0XHJcbikgPT4gKHtcclxuICBOYW1lLFxyXG4gIE93bmVyLFxyXG4gIFN0YXR1cyxcclxuICBQcmlvcml0eSxcclxuICBUYWdzLFxyXG4gIERhdGUsXHJcbiAgUHJvamVjdCxcclxufSk7XHJcbmltcG9ydCBIb21lVUkgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBSZW1vdmVGb3JtVUksIFJlbW92ZVNjcmVlbiwgUmVtb3ZlSXRlbUFycmF5IH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrVUkgZnJvbSBcIi4vdGFza1VJXCI7XHJcbmltcG9ydCB7IGVkaXRQb3B1cCwgY2hlY2tpbmdGdW5jdGlvbiB9IGZyb20gXCIuL2Zvcm1lZGl0XCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzLCByZW1vdmVUYXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlVcGNvbWluZ1VpKGFycmF5LCB1cGNvbWluZywgc2VsZWN0ZWRWYWx1ZSkge1xyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7IC8vYXNzdXJpbmcgdGhlIGFycmF5IGJ5IGRhdGVcclxuICBjb25zdCBwbGFjZU5hbWUgPSBcIlVwY29taW5nXCI7XHJcbiAgY29uc3QgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdG9kYXlEYXRlT25seSA9IG5ldyBEYXRlKFxyXG4gICAgY3VycmVudERheS5nZXRGdWxsWWVhcigpLFxyXG4gICAgY3VycmVudERheS5nZXRNb250aCgpLFxyXG4gICAgY3VycmVudERheS5nZXREYXRlKClcclxuICApO1xyXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3REYXRlID0gbmV3IERhdGUoZWxlbWVudC5EYXRlKTsgLy8gRm9yIGV4YW1wbGUsIDIwMjEtMTItMDFcclxuICAgIGNvbnN0IG9iamVjdERhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICBvYmplY3REYXRlLmdldERhdGUoKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gICAgLy8gQ29ycmVjdGVkIGNvbXBhcmlzb24gZm9yIGRldGVybWluaW5nIGlmIHRoZSBldmVudCBpcyBcInRvZGF5XCJcclxuICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSBcIkFsbCBUYXNrXCIpIHtcclxuICAgICAgaWYgKG9iamVjdERhdGVPbmx5LmdldFRpbWUoKSA+IHRvZGF5RGF0ZU9ubHkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIHVwY29taW5nLCBwbGFjZU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuUHJvamVjdCA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpID4gdG9kYXlEYXRlT25seS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgdXBjb21pbmcsIHBsYWNlTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFycmF5T3ZlcmR1ZVVpKGFycmF5LCBvdmVyZHVlLCBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgY29uc3QgcGxhY2VOYW1lID0gXCJPdmVyZHVlXCI7XHJcblxyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7XHJcbiAgY29uc3QgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdG9kYXlEYXRlT25seSA9IG5ldyBEYXRlKFxyXG4gICAgY3VycmVudERheS5nZXRGdWxsWWVhcigpLFxyXG4gICAgY3VycmVudERheS5nZXRNb250aCgpLFxyXG4gICAgY3VycmVudERheS5nZXREYXRlKClcclxuICApO1xyXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3REYXRlID0gbmV3IERhdGUoZWxlbWVudC5EYXRlKTsgLy8gRm9yIGV4YW1wbGUsIDIwMjEtMTItMDFcclxuICAgIGNvbnN0IG9iamVjdERhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICBvYmplY3REYXRlLmdldERhdGUoKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09IFwiQWxsIFRhc2tcIikge1xyXG4gICAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpIDwgdG9kYXlEYXRlT25seS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgb3ZlcmR1ZSwgcGxhY2VOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LlByb2plY3QgPT09IHNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgaWYgKG9iamVjdERhdGVPbmx5LmdldFRpbWUoKSA8IHRvZGF5RGF0ZU9ubHkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIG92ZXJkdWUsIHBsYWNlTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFycmF5VG9kYXlVaShhcnJheSwgdG9kYXksIHNlbGVjdGVkVmFsdWUpIHtcclxuICBjb25zdCBwbGFjZU5hbWUgPSBcIlRvZGF5XCI7XHJcblxyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7IC8vYXNzdXJpbmcgdGhlIGFycmF5IGJ5IGRhdGVcclxuICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b2RheURhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICBjdXJyZW50RGF5LmdldEZ1bGxZZWFyKCksXHJcbiAgICBjdXJyZW50RGF5LmdldE1vbnRoKCksXHJcbiAgICBjdXJyZW50RGF5LmdldERhdGUoKVxyXG4gICk7XHJcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG9iamVjdERhdGUgPSBuZXcgRGF0ZShlbGVtZW50LkRhdGUpOyAvLyBGb3IgZXhhbXBsZSwgMjAyMS0xMi0wMVxyXG4gICAgY29uc3Qgb2JqZWN0RGF0ZU9ubHkgPSBuZXcgRGF0ZShcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBvYmplY3REYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RGF0ZSgpXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICAgIC8vIENvcnJlY3RlZCBjb21wYXJpc29uIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgZXZlbnQgaXMgXCJ0b2RheVwiXHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gXCJBbGwgVGFza1wiKSB7XHJcbiAgICAgIGlmIChvYmplY3REYXRlT25seS5nZXRUaW1lKCkgPT09IHRvZGF5RGF0ZU9ubHkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIHRvZGF5LCBwbGFjZU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuUHJvamVjdCA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpID09PSB0b2RheURhdGVPbmx5LmdldFRpbWUoKSkge1xyXG4gICAgICAgIGFwcGVuZGluZ1Rhc2sobmV3QXJyYXksIGVsZW1lbnQsIGluZGV4LCB0b2RheSwgcGxhY2VOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlBbGxUaW1lVWkoYXJyYXksIGFsbFRpbWUsIHNlbGVjdGVkVmFsdWUpIHtcclxuICBjb25zdCBwbGFjZU5hbWUgPSBcIkFsbC1UYXNrXCI7XHJcblxyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7IC8vYXNzdXJpbmcgdGhlIGFycmF5IGJ5IGRhdGVcclxuICBjb25zdCBuZXdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG5cclxuICBuZXdBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09IFwiQWxsIFRhc2tcIikge1xyXG4gICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgYWxsVGltZSwgcGxhY2VOYW1lKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5Qcm9qZWN0ID09PSBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIGFwcGVuZGluZ1Rhc2sobmV3QXJyYXksIGVsZW1lbnQsIGluZGV4LCBhbGxUaW1lLCBwbGFjZU5hbWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlIb21lVWkoYXJyYXksIHRvZGF5LCB3ZWVrLCBhbGxUaW1lLCBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgY29uc3QgcGxhY2VOYW1lID0gXCJIb21lXCI7XHJcblxyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7IC8vYXNzdXJpbmcgdGhlIGFycmF5IGJ5IGRhdGVcclxuICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b2RheURhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICBjdXJyZW50RGF5LmdldEZ1bGxZZWFyKCksXHJcbiAgICBjdXJyZW50RGF5LmdldE1vbnRoKCksXHJcbiAgICBjdXJyZW50RGF5LmdldERhdGUoKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZmlyc3REYXlPZldlZWssIGxhc3REYXlPZldlZWsgfSA9IHNldHRpbmdUaGVXZWVrKGN1cnJlbnREYXkpO1xyXG5cclxuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3Qgb2JqZWN0RGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQuRGF0ZSk7IC8vIEZvciBleGFtcGxlLCAyMDIxLTEyLTAxXHJcbiAgICBjb25zdCBvYmplY3REYXRlT25seSA9IG5ldyBEYXRlKFxyXG4gICAgICBvYmplY3REYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgb2JqZWN0RGF0ZS5nZXREYXRlKClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSBcIkFsbCBUYXNrXCIpIHtcclxuICAgICAgaWYgKG9iamVjdERhdGVPbmx5LmdldFRpbWUoKSA9PT0gdG9kYXlEYXRlT25seS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgdG9kYXksIHBsYWNlTmFtZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgb2JqZWN0RGF0ZU9ubHkgPj0gZmlyc3REYXlPZldlZWsgJiZcclxuICAgICAgICBvYmplY3REYXRlT25seSA8PSBsYXN0RGF5T2ZXZWVrXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFwcGVuZGluZ1Rhc2sobmV3QXJyYXksIGVsZW1lbnQsIGluZGV4LCB3ZWVrLCBwbGFjZU5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcGVuZGluZ1Rhc2sobmV3QXJyYXksIGVsZW1lbnQsIGluZGV4LCBhbGxUaW1lLCBwbGFjZU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuUHJvamVjdCA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpID09PSB0b2RheURhdGVPbmx5LmdldFRpbWUoKSkge1xyXG4gICAgICAgIGFwcGVuZGluZ1Rhc2sobmV3QXJyYXksIGVsZW1lbnQsIGluZGV4LCB0b2RheSwgcGxhY2VOYW1lKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBvYmplY3REYXRlT25seSA+PSBmaXJzdERheU9mV2VlayAmJlxyXG4gICAgICAgIG9iamVjdERhdGVPbmx5IDw9IGxhc3REYXlPZldlZWtcclxuICAgICAgKSB7XHJcbiAgICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIHdlZWssIHBsYWNlTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIGFsbFRpbWUsIHBsYWNlTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5jb25zdCBzZXR0aW5nVGhlV2VlayA9ICh0b2RheSkgPT4ge1xyXG4gIC8vIENyZWF0ZSBuZXcgRGF0ZSBvYmplY3RzIGZvciB0aGUgZmlyc3QgYW5kIGxhc3QgZGF5IG9mIHRoZSB3ZWVrIGJhc2VkIG9uICd0b2RheSdcclxuICBjb25zdCBmaXJzdERheU9mV2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcclxuICBjb25zdCBsYXN0RGF5T2ZXZWVrID0gbmV3IERhdGUodG9kYXkpO1xyXG5cclxuICAvLyBTZXQgZmlyc3REYXlPZldlZWsgdG8gdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrLCBTdW5kYXlcclxuICBmaXJzdERheU9mV2Vlay5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIHRvZGF5LmdldERheSgpKTtcclxuICBmaXJzdERheU9mV2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTsgLy8gU2V0IHRvIHN0YXJ0IG9mIHRoZSBkYXlcclxuXHJcbiAgLy8gU2V0IGxhc3REYXlPZldlZWsgdG8gdGhlIGVuZCBvZiB0aGUgd2VlaywgU2F0dXJkYXlcclxuICBsYXN0RGF5T2ZXZWVrLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgKDYgLSB0b2RheS5nZXREYXkoKSkpO1xyXG4gIGxhc3REYXlPZldlZWsuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTsgLy8gU2V0IHRvIGVuZCBvZiB0aGUgZGF5XHJcblxyXG4gIHJldHVybiB7IGZpcnN0RGF5T2ZXZWVrLCBsYXN0RGF5T2ZXZWVrIH07XHJcbn07XHJcblxyXG5jb25zdCBhcHBlbmRpbmdUYXNrID0gKGFycmF5LCBlbGVtZW50LCBpbmRleCwgcGxhY2UsIHBsYWNlTmFtZSkgPT4ge1xyXG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gY3JlYXRlVGFza1VJKGVsZW1lbnQpO1xyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZWxldGVcIik7XHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1lZGl0XCIpO1xyXG4gIGNvbnN0IG5ld0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVUYXNrQXJyYXkoaW5kZXgpO1xyXG4gICAgY2hlY2tpbmdGdW5jdGlvbihwbGFjZU5hbWUpO1xyXG4gIH07XHJcbiAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgZWRpdFBvcHVwKHBsYWNlTmFtZSwgYXJyYXksIGluZGV4KTtcclxuICB9O1xyXG5cclxuICBwbGFjZS5hcHBlbmQodGFza0VsZW1lbnQpO1xyXG59O1xyXG5mdW5jdGlvbiBzb3J0QXJyYXlCeURhdGUoYXJyYXkpIHtcclxuICBhcnJheS5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLkRhdGUpIC0gbmV3IERhdGUoYi5EYXRlKSk7XHJcbiAgc2F2ZVRhc2tzKGFycmF5KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVUYXNrT2JqZWN0LFxyXG4gIGRpc3BsYXlBcnJheUhvbWVVaSxcclxuICBkaXNwbGF5QXJyYXlBbGxUaW1lVWksXHJcbiAgZGlzcGxheUFycmF5VG9kYXlVaSxcclxuICBkaXNwbGF5QXJyYXlPdmVyZHVlVWksXHJcbiAgZGlzcGxheUFycmF5VXBjb21pbmdVaSxcclxufTtcclxuIiwiLy8gdGFza1N0b3JhZ2UuanNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcclxuICBsZXQgYXJyYXkgPSBbXTtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUFycmF5XCIpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlBcnJheVwiKSkgfHwgW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XHJcbiAgY29uc3QgdGFza3MgPSBsb2FkVGFza3MoKTtcclxuICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gIHNhdmVUYXNrcyh0YXNrcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrQXJyYXkob2JqLCBpbmRleCkge1xyXG4gIGNvbnN0IGFycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgYXJyYXlbaW5kZXhdID0gb2JqO1xyXG4gIHNhdmVUYXNrcyhhcnJheSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tBcnJheShpbmRleCkge1xyXG4gIGNvbnN0IGFycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICBzYXZlVGFza3MoYXJyYXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzKHRhc2tzKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteUFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdCgpIHtcclxuICBsZXQgYXJyYXkgPSBbXCJBbGwgVGFza1wiLCBcIlRvZG8gTGlzdFwiXTtcclxuICBjb25zdCBteUxvY2FsU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XHJcblxyXG4gIGlmIChteUxvY2FsU3RvcmFnZSA9PT0gdW5kZWZpbmVkIHx8IG15TG9jYWxTdG9yYWdlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBsb2FkUHJvamVjdCgpO1xyXG4gIGlmIChhbGxQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgc2F2ZVByb2plY3QoYWxsUHJvamVjdHMpO1xyXG4gIH1cclxufVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVUYXNrVUkob2JqZWN0KSB7XHJcbiAgLy9uYW1lLCBvd25lciwgc3RhdHVzLCBwcmlvcml0eSwgdGFncywgZGF0ZVxyXG4gIC8vQ3JlYXRpbmcgdGhlIGRpdnNcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza093bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tUYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGljb25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJveC1pY29uXCIpO1xyXG4gIGNvbnN0IGljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm94LWljb25cIik7XHJcblxyXG4gIC8vaW5uZXIgdGV4dFxyXG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IG9iamVjdC5OYW1lO1xyXG4gIHRhc2tPd25lci5pbm5lclRleHQgPSBvYmplY3QuT3duZXI7XHJcbiAgdGFza1N0YXR1cy5pbm5lclRleHQgPSBvYmplY3QuU3RhdHVzO1xyXG4gIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSBvYmplY3QuUHJpb3JpdHk7XHJcbiAgdGFza1RhZ3MuaW5uZXJUZXh0ID0gY2hlY2tUYWcob2JqZWN0LlRhZ3MpO1xyXG5cclxuICB0YXNrRGF0ZS5pbm5lclRleHQgPSBmb3JtYXREYXRlKG9iamVjdC5EYXRlKTtcclxuICAvL2NsYXNzZXNcclxuICB1cGRhdGVUYXNrQ2xhc3MoXHJcbiAgICB0YXNrU3RhdHVzLFxyXG4gICAgdGFza1ByaW9yaXR5LFxyXG4gICAgdGFza05hbWUsXHJcbiAgICB0YXNrT3duZXIsXHJcbiAgICB0YXNrVGFncyxcclxuICAgIHRhc2tEYXRlLFxyXG4gICAgdGFza0VkaXQsXHJcbiAgICB0YXNrRGVsZXRlLFxyXG4gICAgaWNvbkVkaXQsXHJcbiAgICBpY29uRGVsZXRlLFxyXG4gICAgdGFza1xyXG4gICk7XHJcbiAgLy8gYXBwZW5kaW5nIHRhc2tcclxuXHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrT3duZXIpO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza1RhZ3MpO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XHJcblxyXG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKGljb25FZGl0KTtcclxuICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKGljb25EZWxldGUpO1xyXG5cclxuICByZXR1cm4gdGFzaztcclxufVxyXG5jb25zdCB1cGRhdGVUYXNrQ2xhc3MgPSAoXHJcbiAgdGFza1N0YXR1cyxcclxuICB0YXNrUHJpb3JpdHksXHJcbiAgdGFza05hbWUsXHJcbiAgdGFza093bmVyLFxyXG4gIHRhc2tUYWdzLFxyXG4gIHRhc2tEYXRlLFxyXG4gIHRhc2tFZGl0LFxyXG4gIHRhc2tEZWxldGUsXHJcbiAgaWNvbkVkaXQsXHJcbiAgaWNvbkRlbGV0ZSxcclxuICB0YXNrXHJcbikgPT4ge1xyXG4gIHRhc2tTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZShcclxuICAgIFwidGFzay1zdGF0dXMtZG9uZVwiLFxyXG4gICAgXCJ0YXNrLXN0YXR1cy1zdHVja1wiLFxyXG4gICAgXCJ0YXNrLXN0YXR1cy13b3JraW5nXCJcclxuICApO1xyXG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgXCJ0YXNrLXByaW9yaXR5LWhpZ2hcIixcclxuICAgIFwidGFzay1wcmlvcml0eS1sb3dcIixcclxuICAgIFwidGFzay1wcmlvcml0eS1tZWRpdW1cIlxyXG4gICk7XHJcblxyXG4gIGlmICh0YXNrU3RhdHVzLmlubmVyVGV4dCA9PT0gXCJEb25lXCIpIHtcclxuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZChcInRhc2stc3RhdHVzLWRvbmVcIiwgXCJ0YXNrLXN0YXR1c1wiKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stYm9yZGVyLWRvbmVcIik7XHJcbiAgfSBlbHNlIGlmICh0YXNrU3RhdHVzLmlubmVyVGV4dCA9PT0gXCJTdHVja1wiKSB7XHJcbiAgICB0YXNrU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXN0YXR1cy1zdHVja1wiLCBcInRhc2stc3RhdHVzXCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1ib3JkZXItc3R1Y2tcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZChcInRhc2stc3RhdHVzLXdvcmtpbmdcIiwgXCJ0YXNrLXN0YXR1c1wiKTtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stYm9yZGVyLXdvcmtpbmdcIik7XHJcbiAgfVxyXG5cclxuICBpZiAodGFza1ByaW9yaXR5LmlubmVyVGV4dCA9PT0gXCJIaWdoXCIpIHtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1oaWdoXCIsIFwidGFzay1wcmlvcml0eVwiKTtcclxuICB9IGVsc2UgaWYgKHRhc2tQcmlvcml0eS5pbm5lclRleHQgPT09IFwiTG93XCIpIHtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1sb3dcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHktbWVkaXVtXCIsIFwidGFzay1wcmlvcml0eVwiKTtcclxuICB9XHJcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcclxuICB0YXNrT3duZXIuY2xhc3NMaXN0LmFkZChcInRhc2stb3duZXJcIik7XHJcbiAgdGFza1RhZ3MuY2xhc3NMaXN0LmFkZChcInRhc2stdGFnc1wiKTtcclxuICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xyXG4gIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWVkaXRcIiwgXCJieC1ib3gtdGFza1wiKTtcclxuICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZVwiLCBcImJ4LWJveC10YXNrXCIpO1xyXG4gIGljb25FZGl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzb2xpZFwiKTtcclxuICBpY29uRWRpdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdC1hbHRcIik7XHJcbiAgaWNvbkVkaXQuY2xhc3NMaXN0LmFkZChcImJ4XCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNvbGlkXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIngtc3F1YXJlXCIpO1xyXG4gIGljb25EZWxldGUuY2xhc3NMaXN0LmFkZChcImJ4XCIpO1xyXG4gIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbn07XHJcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cmluZykge1xyXG4gIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpO1xyXG4gIHJldHVybiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RhZyh0YWdTdHJpbmcpIHtcclxuICBpZiAodGFnU3RyaW5nLmluY2x1ZGVzKFwiI1wiKSkge1xyXG4gICAgcmV0dXJuIHRhZ1N0cmluZztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgYCR7dGFnU3RyaW5nfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrVUk7XHJcbiIsImltcG9ydCB7IHVzZXJGb3JtVUksIG9wdGlvbkNyYXRlciB9IGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcbmltcG9ydCB7IFJlbW92ZVNjcmVlbiwgUmVtb3ZlQ29udGVudCB9IGZyb20gXCIuL3JlbW92ZVwiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcywgbG9hZFByb2plY3QgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcbmltcG9ydCB7IGRpc3BsYXlBcnJheVRvZGF5VWkgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5mdW5jdGlvbiBUb2RheSgpIHtcclxuICBSZW1vdmVTY3JlZW4oKTtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBjb25zdCBjb250ZW50SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgdG9kYXlIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIGNvbnN0IG5ld1Byb2plY3RzID0gbG9hZFByb2plY3QoKTtcclxuXHJcbiAgc2VsZWN0UHJvamVjdC5pZCA9IFwiZm9ybS1wcm9qZWN0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5uYW1lID0gXCJmb3JtLXByb2plY3RcIjtcclxuICBzZWxlY3RQcm9qZWN0LmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIHNlbGVjdFByb2plY3QucmVxdWlyZWQgPSB0cnVlO1xyXG4gIHBsYWNlLmlubmVyVGV4dCA9IFwiVG9kYXkgVGFza3NcIjtcclxuICBoZWFkVGV4dC5pbm5lclRleHQgPSBcIkZpbmlzaCB0aGlzIHRhc2tzIHRvZGF5IVwiO1xyXG4gIHRvZGF5SGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJBbGwgdGFza3MgRHVlIHRvIHRvZGF5XCI7XHJcbiAgYWRkLmlubmVyVGV4dCA9IFwiYWRkIGEgdGFzayFcIjtcclxuXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIHRvZGF5SGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRsaW5lXCIpO1xyXG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICBhZGQuY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcImJ1dHRvblwiKTtcclxuICBhZGQub25jbGljayA9IChldmVudCkgPT4gdXNlckZvcm1VSShcIlRvZGF5XCIpO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZChoZWFkZXIsIGNvbnRlbnQpO1xyXG5cclxuICBvcHRpb25DcmF0ZXIobmV3UHJvamVjdHMsIHNlbGVjdFByb2plY3QpO1xyXG5cclxuICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBSZW1vdmVDb250ZW50KHRvZGF5KTtcclxuICAgIGNvbnN0IHNob3dpbmdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RQcm9qZWN0LnZhbHVlO1xyXG4gICAgZGlzcGxheUFycmF5VG9kYXlVaShzaG93aW5nQXJyYXksIHRvZGF5LCBzZWxlY3RlZCk7XHJcbiAgfSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQocGxhY2UsIGNvbnRlbnRIZWFkKTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBzZWxlY3RQcm9qZWN0KTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQodG9kYXlIZWFkbGluZSwgdG9kYXkpO1xyXG4gIGNvbnN0IHNob3dpbmdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0UHJvamVjdC52YWx1ZTtcclxuXHJcbiAgZGlzcGxheUFycmF5VG9kYXlVaShzaG93aW5nQXJyYXksIHRvZGF5LCBzZWxlY3RlZCk7XHJcbn1cclxuZXhwb3J0IHsgVG9kYXkgfTtcclxuIiwiaW1wb3J0IHsgdXNlckZvcm1VSSwgb3B0aW9uQ3JhdGVyIH0gZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVUYXNrT2JqZWN0LFxyXG4gIGRpc3BsYXlBcnJheUFsbFRpbWVVaSxcclxuICBkaXNwbGF5QXJyYXlVcGNvbWluZ1VpLFxyXG59IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgUmVtb3ZlU2NyZWVuLCBSZW1vdmVDb250ZW50IH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzLCBsb2FkUHJvamVjdCB9IGZyb20gXCIuL3Rhc2tTdG9yYWdlXCI7IC8vIEh5cG90aGV0aWNhbCB0YXNrU3RvcmFnZSBtb2R1bGVcclxuXHJcbmZ1bmN0aW9uIFVwY29taW5nKCkge1xyXG4gIFJlbW92ZVNjcmVlbigpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCB1cGNvbWluZ0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIGNvbnN0IG5ld1Byb2plY3RzID0gbG9hZFByb2plY3QoKTtcclxuXHJcbiAgcGxhY2UuaW5uZXJUZXh0ID0gXCJVcGNvbWluZyBUYXNrc1wiO1xyXG4gIGhlYWRUZXh0LmlubmVyVGV4dCA9IFwiWW91ciBuZXh0IHByb2plY3QgYXJlIGluIGhlcmUhXCI7XHJcbiAgdXBjb21pbmdIZWFkbGluZS5pbm5lclRleHQgPSBcIkZ1dHVyZSB0YXNrc1wiO1xyXG5cclxuICBzZWxlY3RQcm9qZWN0LmlkID0gXCJmb3JtLXByb2plY3RcIjtcclxuICBzZWxlY3RQcm9qZWN0Lm5hbWUgPSBcImZvcm0tcHJvamVjdFwiO1xyXG4gIHNlbGVjdFByb2plY3QuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIHVwY29taW5nSGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRsaW5lXCIpO1xyXG4gIHVwY29taW5nLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICBtYWluQ29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250ZW50KTtcclxuICBoZWFkZXIuYXBwZW5kKHBsYWNlLCBjb250ZW50SGVhZCk7XHJcbiAgb3B0aW9uQ3JhdGVyKG5ld1Byb2plY3RzLCBzZWxlY3RQcm9qZWN0KTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBzZWxlY3RQcm9qZWN0KTtcclxuICBzZWxlY3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBSZW1vdmVDb250ZW50KHVwY29taW5nKTtcclxuXHJcbiAgICBjb25zdCBzaG93aW5nQXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0UHJvamVjdC52YWx1ZTtcclxuICAgIGRpc3BsYXlBcnJheVVwY29taW5nVWkoc2hvd2luZ0FycmF5LCB1cGNvbWluZywgc2VsZWN0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZCh1cGNvbWluZ0hlYWRsaW5lLCB1cGNvbWluZyk7XHJcbiAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RQcm9qZWN0LnZhbHVlO1xyXG5cclxuICBkaXNwbGF5QXJyYXlVcGNvbWluZ1VpKHNob3dpbmdBcnJheSwgdXBjb21pbmcsIHNlbGVjdGVkKTtcclxufVxyXG5cclxuZXhwb3J0IHsgVXBjb21pbmcgfTtcclxuIiwiaW1wb3J0IHsgb3B0aW9uQ3JhdGVyIH0gZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3QgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiO1xyXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0QnV0dG9uKCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wcm9qZWN0XCIpO1xyXG4gIHdoaWxlIChidXR0b24uZmlyc3RDaGlsZCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUNoaWxkKGJ1dHRvbi5maXJzdENoaWxkKTtcclxuICB9XHJcbiAgY29uc3QgbmV3UHJvamVjdHMgPSBsb2FkUHJvamVjdCgpO1xyXG4gIG9wdGlvbkNyYXRlcihuZXdQcm9qZWN0cywgYnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlUHJvamVjdEJ1dHRvbiB9O1xyXG4iLCJpbXBvcnQgeyBSZW1vdmVGb3JtVUksIFJlbW92ZVNjcmVlbiB9IGZyb20gXCIuL3JlbW92ZVwiO1xyXG5pbXBvcnQgeyBGb3JtVG9BcnJheSB9IGZyb20gXCIuL3VzZXJGb3JtT2JqXCI7XHJcbmltcG9ydCBIb21lVUkgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBBbGxUYXNrIH0gZnJvbSBcIi4vYWxsVGFza3NcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzLCBhZGRUYXNrLCBzYXZlVGFza3MsIGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5pbXBvcnQgeyBUb2RheSB9IGZyb20gXCIuL3RvZGF5XCI7XHJcbmltcG9ydCB7IFVwY29taW5nIH0gZnJvbSBcIi4vdXBjb21pbmdcIjtcclxuaW1wb3J0IHsgT3ZlcmR1ZSB9IGZyb20gXCIuL092ZXJkdWVcIjtcclxubGV0IG1haW5BcnJheSA9IGxvYWRUYXNrcygpO1xyXG5mdW5jdGlvbiB1c2VyRm9ybVVJKHBsYWNlKSB7XHJcbiAgLy8gQ3JlYXRlIHRoZSBmb3JtIGFuZCB0aGUgbWFpbiBkaXYgd3JhcHBlclxyXG4gIC8vPGJveC1pY29uIHR5cGU9J3NvbGlkJyBuYW1lPSd4LWNpcmNsZSc+PC9ib3gtaWNvbj5cclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uaWQgPSBcImZvcm0taWRcIjtcclxuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZGb3JtLmNsYXNzTmFtZSA9IFwiZm9ybVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZm9ybVwiKTtcclxuICBjb25zdCBpY29uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJveC1pY29uXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNvbGlkXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIngtY2lyY2xlXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBcImxnXCIpO1xyXG4gIGljb25EZWxldGUub25jbGljayA9ICgpID0+IHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9O1xyXG4gIGljb25EZWxldGUuY2xhc3NMaXN0LmFkZChcImJ4XCIpO1xyXG4gIGRlbGV0ZUNvbnRhaW5lci5hcHBlbmQoaWNvbkRlbGV0ZSk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQoZGVsZXRlQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdUYXNrJyBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10YXNrXCIpO1xyXG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IFwiVGFzazpcIjtcclxuICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXRUYXNrLnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dFRhc2suaWQgPSBcImZvcm0tdGFza1wiO1xyXG4gIGlucHV0VGFzay5uYW1lID0gXCJmb3JtLXRhc2tcIjtcclxuICBpbnB1dFRhc2suY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXRUYXNrLnBsYWNlaG9sZGVyID0gXCJQaWNrIHVwIHRoZSBkb2cgZnJvbSB0aGUgdmV0XCI7XHJcbiAgaW5wdXRUYXNrLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFRhc2ssIGlucHV0VGFzayk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnTmFtZScgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tbmFtZVwiKTtcclxuICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXROYW1lLmlkID0gXCJmb3JtLW5hbWVcIjtcclxuICBpbnB1dE5hbWUubmFtZSA9IFwiZm9ybS1uYW1lXCI7XHJcbiAgaW5wdXROYW1lLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IFwiWW90YW1cIjtcclxuICBpbnB1dE5hbWUucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsTmFtZSwgaW5wdXROYW1lKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdTdGF0dXMnIHNlbGVjdCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsU3RhdHVzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tc3RhdHVzXCIpO1xyXG4gIGxhYmVsU3RhdHVzLnRleHRDb250ZW50ID0gXCJTdGF0dXM6XCI7XHJcbiAgY29uc3Qgc2VsZWN0U3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RTdGF0dXMuaWQgPSBcImZvcm0tc3RhdHVzXCI7XHJcbiAgc2VsZWN0U3RhdHVzLm5hbWUgPSBcImZvcm0tc3RhdHVzXCI7XHJcbiAgc2VsZWN0U3RhdHVzLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIHNlbGVjdFN0YXR1cy5yZXF1aXJlZCA9IHRydWU7XHJcbiAgW1wiRG9uZVwiLCBcIlN0dWNrXCIsIFwiV29ya2luZyBvbiBpdFwiXS5mb3JFYWNoKChzdGF0dXMpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBzdGF0dXM7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzdGF0dXM7XHJcbiAgICBzZWxlY3RTdGF0dXMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFN0YXR1cywgc2VsZWN0U3RhdHVzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdQcmlvcml0eScgc2VsZWN0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tcHJpb3JpdHlcIik7XHJcbiAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XHJcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gIHNlbGVjdFByaW9yaXR5LmlkID0gXCJmb3JtLXByaW9yaXR5XCI7XHJcbiAgc2VsZWN0UHJpb3JpdHkubmFtZSA9IFwiZm9ybS1wcmlvcml0eVwiO1xyXG4gIHNlbGVjdFByaW9yaXR5LmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIHNlbGVjdFByaW9yaXR5LnJlcXVpcmVkID0gdHJ1ZTtcclxuICBbXCJIaWdoXCIsIFwiTG93XCIsIFwiTWVkaXVtXCJdLmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxQcmlvcml0eSwgc2VsZWN0UHJpb3JpdHkpO1xyXG5cclxuICBjb25zdCBsYWJlbFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tcHJvamVjdHNcIik7XHJcbiAgbGFiZWxQcm9qZWN0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XHJcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgc2VsZWN0UHJvamVjdC5pZCA9IFwiZm9ybS1wcm9qZWN0c1wiO1xyXG4gIHNlbGVjdFByb2plY3QubmFtZSA9IFwiZm9ybS1wcm9qZWN0c1wiO1xyXG4gIHNlbGVjdFByb2plY3QuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0UHJvamVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgY29uc3QgbmV3UHJvamVjdHMgPSBsb2FkUHJvamVjdCgpO1xyXG4gIG9wdGlvbkNyYXRlcihuZXdQcm9qZWN0cywgc2VsZWN0UHJvamVjdCk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxQcm9qZWN0LCBzZWxlY3RQcm9qZWN0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdUYWcnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxUYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsVGFncy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXRhZ3NcIik7XHJcbiAgbGFiZWxUYWdzLnRleHRDb250ZW50ID0gXCJUYWc6XCI7XHJcbiAgY29uc3QgaW5wdXRUYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0VGFncy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXRUYWdzLmlkID0gXCJmb3JtLXRhZ3NcIjtcclxuICBpbnB1dFRhZ3MuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXRUYWdzLnBsYWNlaG9sZGVyID0gXCJBZG1pblwiO1xyXG4gIGlucHV0VGFncy5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxUYWdzLCBpbnB1dFRhZ3MpO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ0RhdGUnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLWRhdGVcIik7XHJcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcclxuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuICBpbnB1dERhdGUuaWQgPSBcImZvcm0tZGF0ZVwiO1xyXG4gIGlucHV0RGF0ZS5uYW1lID0gXCJmb3JtLWRhdGVcIjtcclxuICBpbnB1dERhdGUuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXREYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dERhdGUubWluID0gXCIxOTAwLTAxLTAxXCI7XHJcbiAgaW5wdXREYXRlLm1heCA9IFwiMjEyNS0wMS0wMVwiO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsRGF0ZSwgaW5wdXREYXRlKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuICBjb25zdCBkaXZTdWJtaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZTdWJtaXRGb3JtLmNsYXNzTmFtZSA9IFwic3VibWl0LWZvcm1cIjtcclxuICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvblN1Ym1pdC5jbGFzc05hbWUgPSBcImJ1dHRvbi1zdWJtaXRcIjtcclxuICBidXR0b25TdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcclxuICBkaXZTdWJtaXRGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XHJcbiAgLy9jcmVhdGluZyBhIGJsdXJcclxuICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBibHVyLmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcclxuICBibHVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEtlZXAgdGhpcyB0byBwcmV2ZW50IHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgIEZvcm1Ub0FycmF5KG1haW5BcnJheSk7XHJcbiAgICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICAgICAgY2hlY2tpbmdGdW5jdGlvbihwbGFjZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPcHRpb25hbGx5IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHZhbGlkYXRpb24gVUlcclxuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBBcHBlbmQgZXZlcnl0aGluZyB0byB0aGUgbWFpbiBmb3JtIGRpdiBhbmQgdGhlbiB0aGUgZm9ybSB0byB0aGUgZG9jdW1lbnQgYm9keSAob3Igd2hlcmV2ZXIgaXQgbmVlZHMgdG8gZ28pXHJcbiAgZGl2Rm9ybS5hcHBlbmRDaGlsZChkaXZTdWJtaXRGb3JtKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTsgLy8gT3IgYXBwZW5kIHRvIGFub3RoZXIgZWxlbWVudCBpZiBuZWVkZWRcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tpbmdGdW5jdGlvbihwbGFjZSkge1xyXG4gIGlmIChwbGFjZSA9PT0gXCJIb21lXCIpIHtcclxuICAgIEhvbWVVSSgpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiQWxsLVRhc2tcIikge1xyXG4gICAgQWxsVGFzaygpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiVG9kYXlcIikge1xyXG4gICAgVG9kYXkoKTtcclxuICB9IGVsc2UgaWYgKHBsYWNlID09PSBcIlVwY29taW5nXCIpIHtcclxuICAgIFVwY29taW5nKCk7XHJcbiAgfSBlbHNlIGlmIChwbGFjZSA9PT0gXCJPdmVyZHVlXCIpIHtcclxuICAgIE92ZXJkdWUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wdGlvbkNyYXRlcihwcm9qZWN0LCBzZWxlY3QpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGxvYWRQcm9qZWN0KCk7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gb2JqO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHVzZXJGb3JtVUksIG9wdGlvbkNyYXRlciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrT2JqZWN0IH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcywgZWRpdFRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tTdG9yYWdlXCI7IC8vIEh5cG90aGV0aWNhbCB0YXNrU3RvcmFnZSBtb2R1bGVcclxuXHJcbmZ1bmN0aW9uIEZvcm1Ub0FycmF5KGFycmF5LCBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpLnZhbHVlO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tc3RhdHVzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnc1wiKS52YWx1ZTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWRhdGVcIikudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1wcm9qZWN0c1wiKS52YWx1ZTtcclxuICBjb25zdCBvYmogPSBjcmVhdGVUYXNrT2JqZWN0KFxyXG4gICAgdGFzayxcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIHRhZ3MsXHJcbiAgICBkYXRlLFxyXG4gICAgcHJvamVjdFxyXG4gICk7XHJcbiAgYXJyYXkgPSBzYXZpbmdBcnJheShvYmopO1xyXG5cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuY29uc3Qgc2F2aW5nQXJyYXkgPSAobmV3VGFzaykgPT4ge1xyXG4gIGFkZFRhc2sobmV3VGFzayk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBFZGl0SXRlbShhcnJheSwgaW5kZXgpIHtcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIikudmFsdWU7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1zdGF0dXNcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgY29uc3QgdGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWdzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tZGF0ZVwiKS52YWx1ZTtcclxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXByb2plY3RzXCIpLnZhbHVlO1xyXG5cclxuICBjb25zdCBvYmogPSBjcmVhdGVUYXNrT2JqZWN0KFxyXG4gICAgdGFzayxcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBwcmlvcml0eSxcclxuICAgIHRhZ3MsXHJcbiAgICBkYXRlLFxyXG4gICAgcHJvamVjdFxyXG4gICk7XHJcblxyXG4gIGFycmF5W2luZGV4XSA9IG9iajtcclxuICBlZGl0VGFza0FycmF5KG9iaiwgaW5kZXgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBGb3JtVG9BcnJheSwgRWRpdEl0ZW0gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=