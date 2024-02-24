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
  z-index: 1;
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

.header {
  width: calc(100vw - 80px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
    width: calc(100vw - 80px);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: end;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n$menu-text: white;\r\n$menu-color: #252629;\r\n$task-status-working: #ffdd00;\r\n$task-status-done: #1db443;\r\n$task-status-stuck: #ef233c;\r\n$task-priority-high: #7b2cbf;\r\n$task-priority-medium: #9145cf;\r\n$task-priority-low: #be74f7;\r\n$task-tags: #b3e9c7;\r\n$header: #2a2d2f;\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab {\r\n  height: 100vh;\r\n  background-color: $menu-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  transition: all 0.3s ease;\r\n  font-family: \"Lato\", sans-serif;\r\n  z-index: 10;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.bx {\r\n  fill: $menu-text;\r\n}\r\n.menu {\r\n  fill: $menu-text;\r\n  cursor: pointer;\r\n}\r\n.menu-headline {\r\n  color: $menu-text;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: default;\r\n}\r\n.menu-box {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: start;\r\n  padding: 10px;\r\n}\r\n.menu-user {\r\n  color: $menu-text;\r\n  padding: 10px;\r\n  font-size: 1.8rem;\r\n  cursor: default;\r\n}\r\n.menu-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n.menu-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 18px;\r\n}\r\n.menu-main-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.bx-box {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  padding-left: 5px;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n.bx-box:before {\r\n  content: \"\";\r\n}\r\n.bx-text::before {\r\n  content: \"\";\r\n}\r\n.bx-text {\r\n  color: $menu-text;\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n}\r\n.sidebar-active .bx-text,\r\n.sidebar-active .menu-headline,\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .bx-box {\r\n  padding: 15px;\r\n  width: fit-content;\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-main-list {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.sidebar-active .menu-list {\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-content {\r\n  gap: 15px;\r\n}\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .menu-box {\r\n  justify-content: center;\r\n}\r\n.sidebar-active {\r\n  width: 65px;\r\n  z-index: 1;\r\n}\r\n\r\n.bx-box:hover {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n.bx-box:hover .bx {\r\n  fill: $menu-color;\r\n}\r\n.bx-box:hover .bx-text {\r\n  color: $menu-color;\r\n}\r\n.main-content {\r\n  min-width: calc(100vw - clamp(220px, 40vw, 300px));\r\n  width: calc(100vw - 65px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: end;\r\n  z-index: 1;\r\n\r\n  min-height: 100vh;\r\n  height: fit-content;\r\n}\r\n\r\n.header {\r\n  width: calc(100vw - 80px);\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: $header;\r\n  color: white;\r\n  height: 170px;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n.content-head {\r\n  display: flex;\r\n  font-size: 0.85rem;\r\n  padding-top: 30px;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n.add {\r\n  border-radius: 12px;\r\n  background-color: #0089ff;\r\n  border: 1px solid black;\r\n  width: 90px;\r\n  height: 40px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n}\r\n.button:hover {\r\n  width: 100px;\r\n  height: 50px;\r\n  font-size: 1rem;\r\n  font-weight: 800;\r\n}\r\n.content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.today-headline {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 50px;\r\n}\r\n.task {\r\n  display: flex;\r\n  margin-left: 20px;\r\n  width: 90%;\r\n  min-width: fit-content;\r\n  color: white;\r\n  background-color: $header;\r\n  height: 90px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  margin-top: 5px;\r\n}\r\n.task-border-done {\r\n  border-left: 10px solid $task-status-done;\r\n}\r\n.task-border-stuck {\r\n  border-left: 10px solid $task-status-stuck;\r\n}\r\n.task-border-working {\r\n  border-left: 10px solid $task-status-working;\r\n}\r\n.task-name {\r\n  border-right: 1px solid black;\r\n  width: 28%;\r\n  min-width: 230px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-owner {\r\n  border-right: 1px solid black;\r\n  width: 15%;\r\n  min-width: 120px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-status {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  min-width: 120px;\r\n}\r\n.task-priority {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n}\r\n.task-priority-high {\r\n  background-color: $task-priority-high;\r\n}\r\n.task-priority-medium {\r\n  background-color: $task-priority-medium;\r\n}\r\n.task-priority-low {\r\n  background-color: $task-priority-low;\r\n}\r\n.task-status-stuck {\r\n  background-color: $task-status-stuck;\r\n}\r\n.task-status-done {\r\n  background-color: $task-status-done;\r\n}\r\n.task-status-working {\r\n  background-color: $task-status-working;\r\n}\r\n\r\n.task-tags {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n\r\n  color: $task-tags;\r\n  padding-left: 5px;\r\n}\r\n.task-date {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n}\r\n.today {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n.task-edit {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  min-width: 24px;\r\n}\r\n.task-delete {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.bx-box-task:hover {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n.bx-box-task:hover .bx {\r\n  fill: $menu-color;\r\n}\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 20;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: $header;\r\n  color: white;\r\n  width: 50vw;\r\n  height: 50vw;\r\n  justify-content: space-around;\r\n  padding: 20px;\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n  border-radius: 17px;\r\n}\r\n.form-input {\r\n  height: 8%;\r\n  max-height: 45px;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size: 1rem;\r\n}\r\n.delete-form {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n}\r\n.bx-delete {\r\n}\r\n.overview {\r\n  z-index: 15;\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(59, 56, 56, 0.432);\r\n  position: fixed;\r\n}\r\n.button-submit {\r\n  border-radius: 12px;\r\n  background-color: #0089ff;\r\n  color: white;\r\n  border: 1px solid black;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all ease-in 50ms;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\r\n}\r\n.button-submit:active {\r\n  font-size: 1.1rem;\r\n  width: 99%;\r\n  height: 99%;\r\n}\r\n.submit-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10%;\r\n}\r\n@media (max-width: 967px) {\r\n  .task {\r\n    flex-direction: column;\r\n  }\r\n  .task-name,\r\n  .task-owner,\r\n  .task-status,\r\n  .task-priority,\r\n  .task-tags,\r\n  .task-date {\r\n    width: 100%;\r\n    border: none;\r\n    justify-content: center;\r\n    height: 70px;\r\n    min-width: 200px;\r\n  }\r\n  .task {\r\n    height: fit-content;\r\n    min-width: 200px;\r\n    margin-top: 50px;\r\n  }\r\n  .task-border-done {\r\n    border: 3px solid $task-status-done;\r\n  }\r\n  .task-border-stuck {\r\n    border: 3px solid $task-status-stuck;\r\n  }\r\n  .task-border-working {\r\n    border: 3px solid $task-status-working;\r\n  }\r\n  .header {\r\n    height: fit-content;\r\n    width: calc(100vw - 80px);\r\n  }\r\n  .task-delete {\r\n    height: 50px;\r\n  }\r\n  .task-edit {\r\n    height: 50px;\r\n  }\r\n  .form {\r\n    position: fixed;\r\n  }\r\n  .overview {\r\n    position: fixed;\r\n  }\r\n  .today-headline {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .form {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    min-width: 300px;\r\n    min-height: 300px;\r\n    position: fixed;\r\n    border-radius: 0;\r\n    position: fixed;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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









const menu = document.getElementById("menu");
const tab = document.getElementById("tab");
const add = document.querySelector(".add");
menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});
let myArray = [];

let place = "";
const homeMenu = document.getElementById("home");
const taskAllMenu = document.getElementById("all-task");
const quickAddMenu = document.getElementById("quick-add");
const todayMenu = document.getElementById("today");
const upcomingMenu = document.getElementById("upcoming");
const overdue = document.getElementById("overdue");

homeMenu.addEventListener("click", function () {
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"])();
  place = "Home";
});
taskAllMenu.addEventListener("click", function () {
  (0,_pages_allTasks__WEBPACK_IMPORTED_MODULE_3__.AllTask)();
  place = "All-Task";
});

quickAddMenu.addEventListener("click", function () {
  (0,_pages_userForm__WEBPACK_IMPORTED_MODULE_5__["default"])(place);
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

// Try to load existing tasks from localStorage
let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];

// Only populate the array with initial objects if it's empty
if (storedArray.length === 0 || storedArray === undefined) {
  const ob = (0,_pages_task__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(
    "Creating a task",
    "Orbter",
    "Working on it",
    "High",
    "#Admin",
    "2024-02-15"
  );
  const ob2 = (0,_pages_task__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(
    "testing the ui",
    "Yotam",
    "Done",
    "Low",
    "#king",
    "2024-02-21"
  );

  storedArray.push(ob, ob2);

  localStorage.setItem("myArray", JSON.stringify(storedArray));
}

(0,_pages_home__WEBPACK_IMPORTED_MODULE_4__["default"])();
console.log(storedArray);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (place);


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
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userForm */ "./src/pages/userForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/pages/task.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");



 // Hypothetical taskStorage module

function Overdue() {
  (0,_remove__WEBPACK_IMPORTED_MODULE_2__.RemoveScreen)();
  const mainContent = document.querySelector(".main-content");
  const header = document.createElement("div");
  const upcoming = document.createElement("div");
  const content = document.createElement("main");
  const contentHead = document.createElement("div");
  const headText = document.createElement("h1");
  const place = document.createElement("h1");
  const upcomingHeadline = document.createElement("h1");
  const add = document.createElement("button");
  place.innerText = "Overdue Tasks";
  headText.innerText = "you are behind schedule!";
  upcomingHeadline.innerText = "Overdue";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__["default"])("Overdue");
  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(upcomingHeadline, upcoming);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayOverdueUi)(showingArray, upcoming);
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
  place.innerText = "All Tasks";
  headText.innerText = "See all the tasks you have!";
  allTimeHeadline.innerText = "All Time";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  allTimeHeadline.classList.add("today-headline");
  allTime.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__["default"])("All-Task");
  mainContent.append(header, content);

  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(allTimeHeadline, allTime);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayAllTimeUi)(showingArray, allTime);
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
/* harmony export */   editPopup: () => (/* binding */ editPopup)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _userFormObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userFormObj */ "./src/pages/userFormObj.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");





function editPopup(place, array, index) {
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
      (0,_userFormObj__WEBPACK_IMPORTED_MODULE_1__.EditItem)(_index__WEBPACK_IMPORTED_MODULE_2__["default"], index);
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
  const nameOfFunction = "";
  if (place === "Home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])(_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  return nameOfFunction;
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
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__["default"])("Home");

  //appending

  mainContent.append(header, content);

  header.append(place, welcome, contentHead);

  contentHead.append(headText, add);

  content.append(
    todayHeadline,
    today,
    weekHeadline,
    thisWeek,
    allTimeHeadline,
    allTime
  );
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_1__.displayArrayHomeUi)(showingArray, today, thisWeek, allTime);
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
/* harmony export */   displayArrayTodayUi: () => (/* binding */ displayArrayTodayUi)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove */ "./src/pages/remove.js");
/* harmony import */ var _taskUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskUI */ "./src/pages/taskUI.js");
/* harmony import */ var _formedit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formedit */ "./src/pages/formedit.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskStorage */ "./src/pages/taskStorage.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
const createTaskObject = (Name, Owner, Status, Priority, Tags, Date) => ({
  Name,
  Owner,
  Status,
  Priority,
  Tags,
  Date,
});




 // Hypothetical taskStorage module


function displayArrayOverdueUi(array, overdue) {
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
    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() > todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, overdue);
    }
  });
}

function displayArrayTodayUi(array, today) {
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
    if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, today);
    }
  });
}

function displayArrayAllTimeUi(array, allTime) {
  sortArrayByDate(array); //assuring the array by date
  const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
  newArray.forEach((element, index) => {
    appendingTask(newArray, element, index, allTime);
  });
}

function displayArrayHomeUi(array, today, week, allTime) {
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
    // Corrected comparison for determining if the event is "today"
    if (objectDateOnly.getTime() === todayDateOnly.getTime()) {
      appendingTask(newArray, element, index, today);
    } else if (
      objectDateOnly >= firstDayOfWeek &&
      objectDateOnly <= lastDayOfWeek
    ) {
      appendingTask(newArray, element, index, week);
    } else {
      appendingTask(newArray, element, index, allTime);
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

const appendingTask = (array, element, index, place) => {
  const taskElement = (0,_taskUI__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  const deleteButton = taskElement.querySelector(".task-delete");
  const editButton = taskElement.querySelector(".task-edit");
  const newArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.loadTasks)();
  deleteButton.onclick = () => {
    (0,_remove__WEBPACK_IMPORTED_MODULE_1__.RemoveItemArray)(newArray, index);
    (0,_taskStorage__WEBPACK_IMPORTED_MODULE_4__.saveTasks)(newArray);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(newArray);
  };
  editButton.onclick = () => {
    (0,_formedit__WEBPACK_IMPORTED_MODULE_3__.editPopup)(place, array, index);
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
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   saveTasks: () => (/* binding */ saveTasks)
/* harmony export */ });
// taskStorage.js
function loadTasks() {
  return JSON.parse(localStorage.getItem("myArray")) || [];
}

function addTask(task) {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
}

function saveTasks(tasks) {
  localStorage.setItem("myArray", JSON.stringify(tasks));
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
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__["default"])("Today");
  mainContent.append(header, content);

  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(todayHeadline, today);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_2__.loadTasks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_3__.displayArrayTodayUi)(showingArray, today);
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
  const add = document.createElement("button");

  place.innerText = "Upcoming Tasks";
  headText.innerText = "Your next project are in here!";
  upcomingHeadline.innerText = "Future tasks";
  add.innerText = "add a task!";

  content.classList.add("content");
  header.classList.add("header");
  contentHead.classList.add("content-head");
  upcomingHeadline.classList.add("today-headline");
  upcoming.classList.add("today");
  add.classList.add("add", "button");
  add.onclick = (event) => (0,_userForm__WEBPACK_IMPORTED_MODULE_0__["default"])("Upcoming");
  mainContent.append(header, content);
  header.append(place, contentHead);

  contentHead.append(headText, add);

  content.append(upcomingHeadline, upcoming);
  const showingArray = (0,_taskStorage__WEBPACK_IMPORTED_MODULE_3__.loadTasks)();
  displayArrayUpcomingUi(showingArray, upcoming);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userFormUI);


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

function FormToArray(array) {
  const task = document.getElementById("form-task").value;
  const name = document.getElementById("form-name").value;
  const status = document.getElementById("form-status").value;
  const priority = document.getElementById("form-priority").value;
  const tags = document.getElementById("form-tags").value;
  const date = document.getElementById("form-date").value;
  const obj = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(task, name, status, priority, tags, date);
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
  const obj = (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(task, name, status, priority, tags, date);

  array[index] = obj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxhQUFhLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FB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QUFDWixJQUFJO0FBQ0osSUFBSSxpREFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLZ0I7QUFDb0IsQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1REFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVEQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNpQzs7Ozs7OztVQy9CakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvYm94aWNvbnMvZGlzdC9ib3hpY29ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL092ZXJkdWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2FsbFRhc2tzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9mb3JtZWRpdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvcmVtb3ZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90YXNrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90YXNrU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdGFza1VJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy90b2RheS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvdXBjb21pbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL3VzZXJGb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy91c2VyRm9ybU9iai5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsZSxuLHIsbyl7aWYoXCJjdXN0b21FbGVtZW50c1wiaW4gbilvKCk7ZWxzZXtpZihuLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMKXJldHVybiB2b2lkIG4uQVdBSVRJTkdfV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEwudGhlbihvKTt2YXIgYT1uLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMPWYoKTthLnRoZW4obyk7dmFyIGk9bi5XRUJfQ09NUE9ORU5UU19QT0xZRklMTHx8XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy93ZWJjb21wb25lbnRzanMvMi4wLjIvd2ViY29tcG9uZW50cy1idW5kbGUuanNcIixzPW4uRVM2X0NPUkVfUE9MWUZJTEx8fFwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY29yZS1qcy8yLjUuMy9jb3JlLm1pbi5qc1wiO1wiUHJvbWlzZVwiaW4gbj9jKGkpLnRoZW4oKGZ1bmN0aW9uKCl7YS5pc0RvbmU9ITAsYS5leGVjKCl9KSk6YyhzKS50aGVuKChmdW5jdGlvbigpe2MoaSkudGhlbigoZnVuY3Rpb24oKXthLmlzRG9uZT0hMCxhLmV4ZWMoKX0pKX0pKX1mdW5jdGlvbiBmKCl7dmFyIHQ9W107cmV0dXJuIHQuaXNEb25lPSExLHQuZXhlYz1mdW5jdGlvbigpe3Quc3BsaWNlKDApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QoKX0pKX0sdC50aGVuPWZ1bmN0aW9uKGUpe3JldHVybiB0LmlzRG9uZT9lKCk6dC5wdXNoKGUpLHR9LHR9ZnVuY3Rpb24gYyh0KXt2YXIgZT1mKCksbj1yLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIG4udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLG4ucmVhZHlTdGF0ZT9uLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1wibG9hZGVkXCIhPW4ucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT1uLnJlYWR5U3RhdGV8fChuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGUuaXNEb25lPSEwLGUuZXhlYygpKX06bi5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmlzRG9uZT0hMCxlLmV4ZWMoKX0sbi5zcmM9dCxyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnRoZW49ZS50aGVuLG59fSgwLDAsd2luZG93LGRvY3VtZW50LChmdW5jdGlvbigpe3ZhciB0LGU7dD13aW5kb3csZT1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTUpfShbZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoKGZ1bmN0aW9uKGUpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj10WzFdfHxcIlwiLG89dFszXTtpZighbylyZXR1cm4gcjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgYT0obj1vLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpK1wiICovXCIpLGk9by5zb3VyY2VzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK28uc291cmNlUm9vdCt0K1wiICovXCJ9KSk7cmV0dXJuW3JdLmNvbmNhdChpKS5jb25jYXQoW2FdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfShlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbitcIn1cIjpufSkpLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgcj17fSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciBhPXRoaXNbb11bMF07XCJudW1iZXJcIj09dHlwZW9mIGEmJihyW2FdPSEwKX1mb3Iobz0wO288dC5sZW5ndGg7bysrKXt2YXIgaT10W29dO1wibnVtYmVyXCI9PXR5cGVvZiBpWzBdJiZyW2lbMF1dfHwobiYmIWlbMl0/aVsyXT1uOm4mJihpWzJdPVwiKFwiK2lbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksZS5wdXNoKGkpKX19LGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKTt0LmV4cG9ydHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/cjpyLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpO3QuZXhwb3J0cz1cInN0cmluZ1wiPT10eXBlb2Ygcj9yOnIudG9TdHJpbmcoKX0sZnVuY3Rpb24odCxlLG4peyh0LmV4cG9ydHM9bigwKSghMSkpLnB1c2goW3QuaSxcIkAtd2Via2l0LWtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBzcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJ1cnN0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9OTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2hpbmd7MCV7b3BhY2l0eToxfTQ1JXtvcGFjaXR5OjB9OTAle29wYWNpdHk6MX19QGtleWZyYW1lcyBmbGFzaGluZ3swJXtvcGFjaXR5OjF9NDUle29wYWNpdHk6MH05MCV7b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1sZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGUtcmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS11cHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLXVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1kb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLWRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjBweCk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0xMCUsMjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKX0zMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpfTQwJSw2MCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgtMTBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyl9MzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fS5ieC1zcGluLC5ieC1zcGluLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOnNwaW4gMnMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZX0uYngtdGFkYSwuYngtdGFkYS1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjp0YWRhIDEuNXMgZWFzZSBpbmZpbml0ZTthbmltYXRpb246dGFkYSAxLjVzIGVhc2UgaW5maW5pdGV9LmJ4LWZsYXNoaW5nLC5ieC1mbGFzaGluZy1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmbGFzaGluZyAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246Zmxhc2hpbmcgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWJ1cnN0LC5ieC1idXJzdC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpidXJzdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246YnVyc3QgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtdXAsLmJ4LWZhZGUtdXAtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS11cCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1kb3duLC5ieC1mYWRlLWRvd24taG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246ZmFkZS1kb3duIDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLWRvd24gMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtbGVmdCwuYngtZmFkZS1sZWZ0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtbGVmdCAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1sZWZ0IDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLXJpZ2h0LC5ieC1mYWRlLXJpZ2h0LWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtcmlnaHQgMS41cyBpbmZpbml0ZSBsaW5lYXJ9XCIsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDApKCExKSkucHVzaChbdC5pLCcuYngtcm90YXRlLTkwe3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVwifS5ieC1yb3RhdGUtMTgwe3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcIn0uYngtcm90YXRlLTI3MHt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXCJ9LmJ4LWZsaXAtaG9yaXpvbnRhbHt0cmFuc2Zvcm06c2NhbGVYKC0xKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXCJ9LmJ4LWZsaXAtdmVydGljYWx7dHJhbnNmb3JtOnNjYWxlWSgtMSk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVwifScsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpLG4uZChlLFwiQm94SWNvbkVsZW1lbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ30pKTt2YXIgcixvLGEsaSxzPW4oMSksZj1uLm4ocyksYz1uKDIpLGw9bi5uKGMpLG09XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0sdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fXJldHVybiBmdW5jdGlvbihlLG4scil7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksciYmdChlLHIpLGV9fSgpLGQ9KG89KHI9T2JqZWN0KS5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffSxhPXIuc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0saT1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0P1widW5kZWZpbmVkXCI6bShSZWZsZWN0KSk/UmVmbGVjdC5jb25zdHJ1Y3Q6ZnVuY3Rpb24odCxlLG4pe3ZhciByLG89W251bGxdO3JldHVybiBvLnB1c2guYXBwbHkobyxlKSxyPXQuYmluZC5hcHBseSh0LG8pLGEobmV3IHIsbi5wcm90b3R5cGUpfSxmdW5jdGlvbih0KXt2YXIgZT1vKHQpO3JldHVybiBhKHQsYSgoZnVuY3Rpb24oKXtyZXR1cm4gaShlLGFyZ3VtZW50cyxvKHRoaXMpLmNvbnN0cnVjdG9yKX0pLGUpKX0pLHA9d2luZG93LGI9e30seT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksaD1mdW5jdGlvbigpe3JldHVybiEhcC5TaGFkeUNTU307eS5pbm5lckhUTUw9J1xcbjxzdHlsZT5cXG46aG9zdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaXRpYWw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbjpob3N0KFtzaXplPXhzXSkge1xcbiAgICB3aWR0aDogMC44cmVtO1xcbiAgICBoZWlnaHQ6IDAuOHJlbTtcXG59XFxuOmhvc3QoW3NpemU9c21dKSB7XFxuICAgIHdpZHRoOiAxLjU1cmVtO1xcbiAgICBoZWlnaHQ6IDEuNTVyZW07XFxufVxcbjpob3N0KFtzaXplPW1kXSkge1xcbiAgICB3aWR0aDogMi4yNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1sZ10pIHtcXG4gICAgd2lkdGg6IDMuMHJlbTtcXG4gICAgaGVpZ2h0OiAzLjByZW07XFxufVxcblxcbjpob3N0KFtzaXplXTpub3QoW3NpemU9XCJcIl0pOm5vdChbc2l6ZT14c10pOm5vdChbc2l6ZT1zbV0pOm5vdChbc2l6ZT1tZF0pOm5vdChbc2l6ZT1sZ10pKSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcbjpob3N0KFtwdWxsPWxlZnRdKSAjaWNvbiB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW0haW1wb3J0YW50O1xcbn1cXG46aG9zdChbcHVsbD1yaWdodF0pICNpY29uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tbGVmdDogLjNlbSFpbXBvcnRhbnQ7XFxufVxcbjpob3N0KFtib3JkZXI9c3F1YXJlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxufVxcbjpob3N0KFtib3JkZXI9Y2lyY2xlXSkgI2ljb24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgYm9yZGVyOiAuMDdlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jaWNvbixcXG5zdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpY29uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59IFxcbicrZi5hK1wiXFxuXCIrbC5hKydcXG48L3N0eWxlPlxcbjxkaXYgaWQ9XCJpY29uXCI+PC9kaXY+Jzt2YXIgZz1kKGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiFlfHxcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT90OmV9KHRoaXMsKGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpLmNhbGwodGhpcykpO3JldHVybiB0LiR1aT10LmF0dGFjaFNoYWRvdyh7bW9kZTpcIm9wZW5cIn0pLHQuJHVpLmFwcGVuZENoaWxkKHQub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKHkuY29udGVudCwhMCkpLGgoKSYmcC5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodCksdC5fc3RhdGU9eyRpY29uSG9sZGVyOnQuJHVpLmdldEVsZW1lbnRCeUlkKFwiaWNvblwiKSx0eXBlOnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKX0sdH1yZXR1cm4gZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX0oZSxIVE1MRWxlbWVudCksdShlLG51bGwsW3trZXk6XCJnZXRJY29uU3ZnXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmNkblVybCtcIi9yZWd1bGFyL2J4LVwiK3QrXCIuc3ZnXCI7cmV0dXJuXCJzb2xpZFwiPT09ZT9uPXRoaXMuY2RuVXJsK1wiL3NvbGlkL2J4cy1cIit0K1wiLnN2Z1wiOlwibG9nb1wiPT09ZSYmKG49dGhpcy5jZG5VcmwrXCIvbG9nb3MvYnhsLVwiK3QrXCIuc3ZnXCIpLG4mJmJbbl18fChiW25dPW5ldyBQcm9taXNlKChmdW5jdGlvbih0LGUpe3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7dGhpcy5zdGF0dXM8MjAwfHx0aGlzLnN0YXR1cz49MzAwP2UobmV3IEVycm9yKHRoaXMuc3RhdHVzK1wiIFwiK3RoaXMucmVzcG9uc2VUZXh0KSk6dCh0aGlzLnJlc3BvbnNlVGV4dCl9KSksci5vbmVycm9yPWUsci5vbmFib3J0PWUsci5vcGVuKFwiR0VUXCIsbiksci5zZW5kKCl9KSkpLGJbbl19fSx7a2V5OlwiZGVmaW5lXCIsdmFsdWU6ZnVuY3Rpb24odCl7dD10fHx0aGlzLnRhZ05hbWUsaCgpJiZwLlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZSh5LHQpLGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0LHRoaXMpfX0se2tleTpcImNkblVybFwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiLy91bnBrZy5jb20vYm94aWNvbnNAMi4xLjQvc3ZnXCJ9fSx7a2V5OlwidGFnTmFtZVwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiYm94LWljb25cIn19LHtrZXk6XCJvYnNlcnZlZEF0dHJpYnV0ZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5bXCJ0eXBlXCIsXCJuYW1lXCIsXCJjb2xvclwiLFwic2l6ZVwiLFwicm90YXRlXCIsXCJmbGlwXCIsXCJhbmltYXRpb25cIixcImJvcmRlclwiLFwicHVsbFwiXX19XSksdShlLFt7a2V5OlwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMuX3N0YXRlLiRpY29uSG9sZGVyO3N3aXRjaCh0KXtjYXNlXCJ0eXBlXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLiRpY29uSG9sZGVyLnRleHRDb250ZW50PVwiXCIsci50eXBlJiYoci50eXBlPW51bGwpLHIudHlwZT0hbnx8XCJzb2xpZFwiIT09biYmXCJsb2dvXCIhPT1uP1wicmVndWxhclwiOm4sdm9pZCAwIT09ci5jdXJyZW50TmFtZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKHIuY3VycmVudE5hbWUsci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLnR5cGU9PT1uJiYoci4kaWNvbkhvbGRlci5pbm5lckhUTUw9dCl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBpY29uOiBcIityLmN1cnJlbnROYW1lK1wiXFxuXCIrdCl9KSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJuYW1lXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLmN1cnJlbnROYW1lPW4sci4kaWNvbkhvbGRlci50ZXh0Q29udGVudD1cIlwiLG4mJnZvaWQgMCE9PXIudHlwZSYmdC5jb25zdHJ1Y3Rvci5nZXRJY29uU3ZnKG4sci50eXBlKS50aGVuKChmdW5jdGlvbih0KXtyLmN1cnJlbnROYW1lPT09biYmKHIuJGljb25Ib2xkZXIuaW5uZXJIVE1MPXQpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaWNvbjogXCIrbitcIlxcblwiK3QpfSkpfSh0aGlzLDAsbik7YnJlYWs7Y2FzZVwiY29sb3JcIjpyLnN0eWxlLmZpbGw9bnx8XCJcIjticmVhaztjYXNlXCJzaXplXCI6IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10Ll9zdGF0ZTtyLnNpemUmJihyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PVwiXCIsci5zaXplPXIuc2l6ZVR5cGU9bnVsbCksbiYmIS9eKHhzfHNtfG1kfGxnKSQvLnRlc3Qoci5zaXplKSYmKHIuc2l6ZT1uLnRyaW0oKSxyLiRpY29uSG9sZGVyLnN0eWxlLndpZHRoPXIuJGljb25Ib2xkZXIuc3R5bGUuaGVpZ2h0PXIuc2l6ZSl9KHRoaXMsMCxuKTticmVhaztjYXNlXCJyb3RhdGVcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1yb3RhdGUtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtcm90YXRlLVwiK24pO2JyZWFrO2Nhc2VcImZsaXBcIjplJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJieC1mbGlwLVwiK2UpLG4mJnIuY2xhc3NMaXN0LmFkZChcImJ4LWZsaXAtXCIrbik7YnJlYWs7Y2FzZVwiYW5pbWF0aW9uXCI6ZSYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYngtXCIrZSksbiYmci5jbGFzc0xpc3QuYWRkKFwiYngtXCIrbil9fX0se2tleTpcImNvbm5lY3RlZENhbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXtoKCkmJnAuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpfX1dKSxlfSgpKTtlLmRlZmF1bHQ9ZyxnLmRlZmluZSgpfV0pfSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkJveEljb25FbGVtZW50PWUoKTp0LkJveEljb25FbGVtZW50PWUoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJveGljb25zLmpzLm1hcCIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udGFiIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjYyOTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmJ4IHtcbiAgZmlsbDogd2hpdGU7XG59XG5cbi5tZW51IHtcbiAgZmlsbDogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaGVhZGxpbmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5tZW51LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51LXVzZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5tZW51LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDM1cHg7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE4cHg7XG59XG5cbi5tZW51LW1haW4tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ4LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmJ4LWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uYngtdGV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmJ4LXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5ieC10ZXh0LFxuLnNpZGViYXItYWN0aXZlIC5tZW51LWhlYWRsaW5lLFxuLnNpZGViYXItYWN0aXZlIC5tZW51LXVzZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLmJ4LWJveCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZ2FwOiAwO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtbWFpbi1saXN0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1saXN0IHtcbiAgZ2FwOiAwO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtY29udGVudCB7XG4gIGdhcDogMTVweDtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5tZW51LXVzZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtYm94IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSB7XG4gIHdpZHRoOiA2NXB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uYngtYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ4LWJveDpob3ZlciAuYngge1xuICBmaWxsOiAjMjUyNjI5O1xufVxuXG4uYngtYm94OmhvdmVyIC5ieC10ZXh0IHtcbiAgY29sb3I6ICMyNTI2Mjk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSBjbGFtcCgyMjBweCwgNDB2dywgMzAwcHgpKTtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NXB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgei1pbmRleDogMTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDgwcHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDJmO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTcwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRlbnQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRkIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODlmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RheS1oZWFkbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDJmO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRhc2stYm9yZGVyLWRvbmUge1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMWRiNDQzO1xufVxuXG4udGFzay1ib3JkZXItc3R1Y2sge1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZWYyMzNjO1xufVxuXG4udGFzay1ib3JkZXItd29ya2luZyB7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmRkMDA7XG59XG5cbi50YXNrLW5hbWUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDI4JTtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi50YXNrLW93bmVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxNSU7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGFzay1zdGF0dXMge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNSU7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTIlO1xuICBtaW4td2lkdGg6IDExMHB4O1xufVxuXG4udGFzay1wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiMmNiZjtcbn1cblxuLnRhc2stcHJpb3JpdHktbWVkaXVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDVjZjtcbn1cblxuLnRhc2stcHJpb3JpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlNzRmNztcbn1cblxuLnRhc2stc3RhdHVzLXN0dWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcbn1cblxuLnRhc2stc3RhdHVzLWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRiNDQzO1xufVxuXG4udGFzay1zdGF0dXMtd29ya2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRkMDA7XG59XG5cbi50YXNrLXRhZ3Mge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyJTtcbiAgbWluLXdpZHRoOiAxMTBweDtcbiAgY29sb3I6ICNiM2U5Yzc7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGFzay1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMiU7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG5cbi50b2RheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLWVkaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtaW4td2lkdGg6IDI0cHg7XG59XG5cbi50YXNrLWRlbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ieC1ib3gtdGFzazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5ieC1ib3gtdGFzazpob3ZlciAuYngge1xuICBmaWxsOiAjMjUyNjI5O1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDIwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDJmO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDUwdnc7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgaGVpZ2h0OiA4JTtcbiAgbWF4LWhlaWdodDogNDVweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kZWxldGUtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3ZlcnZpZXcge1xuICB6LWluZGV4OiAxNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTksIDU2LCA1NiwgMC40MzIpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5idXR0b24tc3VibWl0IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODlmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gNTBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b24tc3VibWl0OmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB3aWR0aDogOTklO1xuICBoZWlnaHQ6IDk5JTtcbn1cblxuLnN1Ym1pdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTY3cHgpIHtcbiAgLnRhc2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnRhc2stbmFtZSxcbiAgLnRhc2stb3duZXIsXG4gIC50YXNrLXN0YXR1cyxcbiAgLnRhc2stcHJpb3JpdHksXG4gIC50YXNrLXRhZ3MsXG4gIC50YXNrLWRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgfVxuICAudGFzayB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgLnRhc2stYm9yZGVyLWRvbmUge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxZGI0NDM7XG4gIH1cbiAgLnRhc2stYm9yZGVyLXN0dWNrIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWYyMzNjO1xuICB9XG4gIC50YXNrLWJvcmRlci13b3JraW5nIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZkZDAwO1xuICB9XG4gIC5oZWFkZXIge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcbiAgfVxuICAudGFzay1kZWxldGUge1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAudGFzay1lZGl0IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAub3ZlcnZpZXcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICAudG9kYXktaGVhZGxpbmUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZm9ybSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBV0E7RUFDRSxxQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHlCQWZXO0VBZ0JYLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQVJGOztBQVVBO0VBQ0UsV0E1QlU7QUFxQlo7O0FBU0E7RUFDRSxXQS9CVTtFQWdDVixlQUFBO0FBTkY7O0FBUUE7RUFDRSxZQW5DVTtFQW9DVixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FB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RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXFDRjs7QUFuQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFzQ0Y7O0FBcENBO0VBQ0U7SUFDRSxzQkFBQTtFQXVDRjtFQXJDQTs7Ozs7O0lBTUUsV0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQXVDRjtFQXJDQTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQXVDRjtFQXJDQTtJQUNFLHlCQUFBO0VBdUNGO0VBckNBO0lBQ0UseUJBQUE7RUF1Q0Y7RUFyQ0E7SUFDRSx5QkFBQTtFQXVDRjtFQXJDQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUF1Q0Y7RUFyQ0E7SUFDRSxZQUFBO0VBdUNGO0VBckNBO0lBQ0UsWUFBQTtFQXVDRjtFQXJDQTtJQUNFLGVBQUE7RUF1Q0Y7RUFyQ0E7SUFDRSxlQUFBO0VBdUNGO0VBckNBO0lBQ0UsZ0JBQUE7RUF1Q0Y7QUFDRjtBQXJDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQXVDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4kbWVudS10ZXh0OiB3aGl0ZTtcXHJcXG4kbWVudS1jb2xvcjogIzI1MjYyOTtcXHJcXG4kdGFzay1zdGF0dXMtd29ya2luZzogI2ZmZGQwMDtcXHJcXG4kdGFzay1zdGF0dXMtZG9uZTogIzFkYjQ0MztcXHJcXG4kdGFzay1zdGF0dXMtc3R1Y2s6ICNlZjIzM2M7XFxyXFxuJHRhc2stcHJpb3JpdHktaGlnaDogIzdiMmNiZjtcXHJcXG4kdGFzay1wcmlvcml0eS1tZWRpdW06ICM5MTQ1Y2Y7XFxyXFxuJHRhc2stcHJpb3JpdHktbG93OiAjYmU3NGY3O1xcclxcbiR0YXNrLXRhZ3M6ICNiM2U5Yzc7XFxyXFxuJGhlYWRlcjogIzJhMmQyZjtcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLmJ4IHtcXHJcXG4gIGZpbGw6ICRtZW51LXRleHQ7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIGZpbGw6ICRtZW51LXRleHQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5tZW51LWhlYWRsaW5lIHtcXHJcXG4gIGNvbG9yOiAkbWVudS10ZXh0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4ubWVudS1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLm1lbnUtdXNlciB7XFxyXFxuICBjb2xvcjogJG1lbnUtdGV4dDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLm1lbnUtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzVweDtcXHJcXG59XFxyXFxuLm1lbnUtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMThweDtcXHJcXG59XFxyXFxuLm1lbnUtbWFpbi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4LWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG4uYngtYm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG59XFxyXFxuLmJ4LXRleHQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG59XFxyXFxuLmJ4LXRleHQge1xcclxcbiAgY29sb3I6ICRtZW51LXRleHQ7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLmJ4LXRleHQsXFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LWhlYWRsaW5lLFxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS11c2VyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAuYngtYm94IHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBnYXA6IDA7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1tYWluLWxpc3Qge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtbGlzdCB7XFxyXFxuICBnYXA6IDA7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1jb250ZW50IHtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LXVzZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LWJveCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIHtcXHJcXG4gIHdpZHRoOiA2NXB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4LWJveDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuLmJ4LWJveDpob3ZlciAuYngge1xcclxcbiAgZmlsbDogJG1lbnUtY29sb3I7XFxyXFxufVxcclxcbi5ieC1ib3g6aG92ZXIgLmJ4LXRleHQge1xcclxcbiAgY29sb3I6ICRtZW51LWNvbG9yO1xcclxcbn1cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gIG1pbi13aWR0aDogY2FsYygxMDB2dyAtIGNsYW1wKDIyMHB4LCA0MHZ3LCAzMDBweCkpO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA2NXB4KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA4MHB4KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5jb250ZW50LWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uYWRkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OWZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiA1MG1zO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50b2RheS1oZWFkbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXI7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4udGFzay1ib3JkZXItZG9uZSB7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkdGFzay1zdGF0dXMtZG9uZTtcXHJcXG59XFxyXFxuLnRhc2stYm9yZGVyLXN0dWNrIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR0YXNrLXN0YXR1cy1zdHVjaztcXHJcXG59XFxyXFxuLnRhc2stYm9yZGVyLXdvcmtpbmcge1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJHRhc2stc3RhdHVzLXdvcmtpbmc7XFxyXFxufVxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMjglO1xcclxcbiAgbWluLXdpZHRoOiAyMzBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi50YXNrLW93bmVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4udGFzay1zdGF0dXMge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxufVxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMiU7XFxyXFxuICBtaW4td2lkdGg6IDExMHB4O1xcclxcbn1cXHJcXG4udGFzay1wcmlvcml0eS1oaWdoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXByaW9yaXR5LWhpZ2g7XFxyXFxufVxcclxcbi50YXNrLXByaW9yaXR5LW1lZGl1bSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1wcmlvcml0eS1tZWRpdW07XFxyXFxufVxcclxcbi50YXNrLXByaW9yaXR5LWxvdyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1wcmlvcml0eS1sb3c7XFxyXFxufVxcclxcbi50YXNrLXN0YXR1cy1zdHVjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1zdGF0dXMtc3R1Y2s7XFxyXFxufVxcclxcbi50YXNrLXN0YXR1cy1kb25lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLXN0YXR1cy1kb25lO1xcclxcbn1cXHJcXG4udGFzay1zdGF0dXMtd29ya2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1zdGF0dXMtd29ya2luZztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGFncyB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyJTtcXHJcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxyXFxuXFxyXFxuICBjb2xvcjogJHRhc2stdGFncztcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4udGFzay1kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTIlO1xcclxcbiAgbWluLXdpZHRoOiAxMTBweDtcXHJcXG59XFxyXFxuLnRvZGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbi50YXNrLWVkaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogMjRweDtcXHJcXG59XFxyXFxuLnRhc2stZGVsZXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ieC1ib3gtdGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuLmJ4LWJveC10YXNrOmhvdmVyIC5ieCB7XFxyXFxuICBmaWxsOiAkbWVudS1jb2xvcjtcXHJcXG59XFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IDUwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcXHJcXG59XFxyXFxuLmZvcm0taW5wdXQge1xcclxcbiAgaGVpZ2h0OiA4JTtcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uZGVsZXRlLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJ4LWRlbGV0ZSB7XFxyXFxufVxcclxcbi5vdmVydmlldyB7XFxyXFxuICB6LWluZGV4OiAxNTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU5LCA1NiwgNTYsIDAuNDMyKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1zdWJtaXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg5ZmY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIDUwbXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcbi5idXR0b24tc3VibWl0OmFjdGl2ZSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHdpZHRoOiA5OSU7XFxyXFxuICBoZWlnaHQ6IDk5JTtcXHJcXG59XFxyXFxuLnN1Ym1pdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2N3B4KSB7XFxyXFxuICAudGFzayB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAudGFzay1uYW1lLFxcclxcbiAgLnRhc2stb3duZXIsXFxyXFxuICAudGFzay1zdGF0dXMsXFxyXFxuICAudGFzay1wcmlvcml0eSxcXHJcXG4gIC50YXNrLXRhZ3MsXFxyXFxuICAudGFzay1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIH1cXHJcXG4gIC50YXNrLWJvcmRlci1kb25lIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHRhc2stc3RhdHVzLWRvbmU7XFxyXFxuICB9XFxyXFxuICAudGFzay1ib3JkZXItc3R1Y2sge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkdGFzay1zdGF0dXMtc3R1Y2s7XFxyXFxuICB9XFxyXFxuICAudGFzay1ib3JkZXItd29ya2luZyB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICR0YXNrLXN0YXR1cy13b3JraW5nO1xcclxcbiAgfVxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gODBweCk7XFxyXFxuICB9XFxyXFxuICAudGFzay1kZWxldGUge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB9XFxyXFxuICAudGFzay1lZGl0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmZvcm0ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB9XFxyXFxuICAub3ZlcnZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB9XFxyXFxuICAudG9kYXktaGVhZGxpbmUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcImJveGljb25zXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrT2JqZWN0LCBEaXNwbGF5QXJyYXlVaSB9IGZyb20gXCIuL3BhZ2VzL3Rhc2tcIjtcclxuaW1wb3J0IHsgQWxsVGFzayB9IGZyb20gXCIuL3BhZ2VzL2FsbFRhc2tzXCI7XHJcbmltcG9ydCBIb21lVUkgZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xyXG5pbXBvcnQgdXNlckZvcm1VSSBmcm9tIFwiLi9wYWdlcy91c2VyRm9ybVwiO1xyXG5pbXBvcnQgeyBUb2RheSB9IGZyb20gXCIuL3BhZ2VzL3RvZGF5XCI7XHJcbmltcG9ydCB7IFVwY29taW5nIH0gZnJvbSBcIi4vcGFnZXMvdXBjb21pbmdcIjtcclxuaW1wb3J0IHsgT3ZlcmR1ZSB9IGZyb20gXCIuL3BhZ2VzL092ZXJkdWVcIjtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJcIik7XHJcbmNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGFiLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWFjdGl2ZVwiKTtcclxufSk7XHJcbmxldCBteUFycmF5ID0gW107XHJcblxyXG5sZXQgcGxhY2UgPSBcIlwiO1xyXG5jb25zdCBob21lTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuY29uc3QgdGFza0FsbE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrXCIpO1xyXG5jb25zdCBxdWlja0FkZE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aWNrLWFkZFwiKTtcclxuY29uc3QgdG9kYXlNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheVwiKTtcclxuY29uc3QgdXBjb21pbmdNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGNvbWluZ1wiKTtcclxuY29uc3Qgb3ZlcmR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmR1ZVwiKTtcclxuXHJcbmhvbWVNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgSG9tZVVJKCk7XHJcbiAgcGxhY2UgPSBcIkhvbWVcIjtcclxufSk7XHJcbnRhc2tBbGxNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgQWxsVGFzaygpO1xyXG4gIHBsYWNlID0gXCJBbGwtVGFza1wiO1xyXG59KTtcclxuXHJcbnF1aWNrQWRkTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHVzZXJGb3JtVUkocGxhY2UpO1xyXG59KTtcclxudG9kYXlNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgVG9kYXkoKTtcclxuICBwbGFjZSA9IFwiVG9kYXlcIjtcclxufSk7XHJcbnVwY29taW5nTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIFVwY29taW5nKCk7XHJcbiAgcGxhY2UgPSBcIlVwY29taW5nXCI7XHJcbn0pO1xyXG5vdmVyZHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgT3ZlcmR1ZSgpO1xyXG4gIHBsYWNlID0gXCJPdmVyZHVlXCI7XHJcbn0pO1xyXG5cclxuLy8gVHJ5IHRvIGxvYWQgZXhpc3RpbmcgdGFza3MgZnJvbSBsb2NhbFN0b3JhZ2VcclxubGV0IHN0b3JlZEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15QXJyYXlcIikpIHx8IFtdO1xyXG5cclxuLy8gT25seSBwb3B1bGF0ZSB0aGUgYXJyYXkgd2l0aCBpbml0aWFsIG9iamVjdHMgaWYgaXQncyBlbXB0eVxyXG5pZiAoc3RvcmVkQXJyYXkubGVuZ3RoID09PSAwIHx8IHN0b3JlZEFycmF5ID09PSB1bmRlZmluZWQpIHtcclxuICBjb25zdCBvYiA9IGNyZWF0ZVRhc2tPYmplY3QoXHJcbiAgICBcIkNyZWF0aW5nIGEgdGFza1wiLFxyXG4gICAgXCJPcmJ0ZXJcIixcclxuICAgIFwiV29ya2luZyBvbiBpdFwiLFxyXG4gICAgXCJIaWdoXCIsXHJcbiAgICBcIiNBZG1pblwiLFxyXG4gICAgXCIyMDI0LTAyLTE1XCJcclxuICApO1xyXG4gIGNvbnN0IG9iMiA9IGNyZWF0ZVRhc2tPYmplY3QoXHJcbiAgICBcInRlc3RpbmcgdGhlIHVpXCIsXHJcbiAgICBcIllvdGFtXCIsXHJcbiAgICBcIkRvbmVcIixcclxuICAgIFwiTG93XCIsXHJcbiAgICBcIiNraW5nXCIsXHJcbiAgICBcIjIwMjQtMDItMjFcIlxyXG4gICk7XHJcblxyXG4gIHN0b3JlZEFycmF5LnB1c2gob2IsIG9iMik7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlBcnJheVwiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRBcnJheSkpO1xyXG59XHJcblxyXG5Ib21lVUkoKTtcclxuY29uc29sZS5sb2coc3RvcmVkQXJyYXkpO1xyXG5leHBvcnQgZGVmYXVsdCBwbGFjZTtcclxuIiwiaW1wb3J0IHVzZXJGb3JtVUkgZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza09iamVjdCwgZGlzcGxheUFycmF5T3ZlcmR1ZVVpIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBSZW1vdmVTY3JlZW4gfSBmcm9tIFwiLi9yZW1vdmVcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzLCBhZGRUYXNrLCBzYXZlVGFza3MgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBPdmVyZHVlKCkge1xyXG4gIFJlbW92ZVNjcmVlbigpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCB1cGNvbWluZ0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgcGxhY2UuaW5uZXJUZXh0ID0gXCJPdmVyZHVlIFRhc2tzXCI7XHJcbiAgaGVhZFRleHQuaW5uZXJUZXh0ID0gXCJ5b3UgYXJlIGJlaGluZCBzY2hlZHVsZSFcIjtcclxuICB1cGNvbWluZ0hlYWRsaW5lLmlubmVyVGV4dCA9IFwiT3ZlcmR1ZVwiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcblxyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29udGVudEhlYWQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZFwiKTtcclxuICB1cGNvbWluZ0hlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICB1cGNvbWluZy5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgYWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJidXR0b25cIik7XHJcbiAgYWRkLm9uY2xpY2sgPSAoZXZlbnQpID0+IHVzZXJGb3JtVUkoXCJPdmVyZHVlXCIpO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZChoZWFkZXIsIGNvbnRlbnQpO1xyXG4gIGhlYWRlci5hcHBlbmQocGxhY2UsIGNvbnRlbnRIZWFkKTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBhZGQpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZCh1cGNvbWluZ0hlYWRsaW5lLCB1cGNvbWluZyk7XHJcbiAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgZGlzcGxheUFycmF5T3ZlcmR1ZVVpKHNob3dpbmdBcnJheSwgdXBjb21pbmcpO1xyXG59XHJcblxyXG5leHBvcnQgeyBPdmVyZHVlIH07XHJcbiIsImltcG9ydCB1c2VyRm9ybVVJIGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tPYmplY3QsIGRpc3BsYXlBcnJheUFsbFRpbWVVaSB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgUmVtb3ZlU2NyZWVuIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5cclxuZnVuY3Rpb24gQWxsVGFzaygpIHtcclxuICBSZW1vdmVTY3JlZW4oKTtcclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWxsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBhbGxUaW1lSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBwbGFjZS5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiO1xyXG4gIGhlYWRUZXh0LmlubmVyVGV4dCA9IFwiU2VlIGFsbCB0aGUgdGFza3MgeW91IGhhdmUhXCI7XHJcbiAgYWxsVGltZUhlYWRsaW5lLmlubmVyVGV4dCA9IFwiQWxsIFRpbWVcIjtcclxuICBhZGQuaW5uZXJUZXh0ID0gXCJhZGQgYSB0YXNrIVwiO1xyXG5cclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnRlbnRIZWFkLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRcIik7XHJcbiAgYWxsVGltZUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICBhbGxUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcclxuICBhZGQuY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcImJ1dHRvblwiKTtcclxuICBhZGQub25jbGljayA9IChldmVudCkgPT4gdXNlckZvcm1VSShcIkFsbC1UYXNrXCIpO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZChoZWFkZXIsIGNvbnRlbnQpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kKHBsYWNlLCBjb250ZW50SGVhZCk7XHJcblxyXG4gIGNvbnRlbnRIZWFkLmFwcGVuZChoZWFkVGV4dCwgYWRkKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQoYWxsVGltZUhlYWRsaW5lLCBhbGxUaW1lKTtcclxuICBjb25zdCBzaG93aW5nQXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICBkaXNwbGF5QXJyYXlBbGxUaW1lVWkoc2hvd2luZ0FycmF5LCBhbGxUaW1lKTtcclxufVxyXG5leHBvcnQgeyBBbGxUYXNrIH07XHJcbiIsImltcG9ydCB7IFJlbW92ZUZvcm1VSSwgUmVtb3ZlU2NyZWVuIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IEVkaXRJdGVtIH0gZnJvbSBcIi4vdXNlckZvcm1PYmpcIjtcclxuaW1wb3J0IG15QXJyYXkgZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCBIb21lVUkgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gZWRpdFBvcHVwKHBsYWNlLCBhcnJheSwgaW5kZXgpIHtcclxuICAvLyBDcmVhdGUgdGhlIGZvcm0gYW5kIHRoZSBtYWluIGRpdiB3cmFwcGVyXHJcbiAgLy88Ym94LWljb24gdHlwZT0nc29saWQnIG5hbWU9J3gtY2lyY2xlJz48L2JveC1pY29uPlxyXG4gIGNvbnN0IG9iaiA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGZvcm0uaWQgPSBcImZvcm0taWRcIjtcclxuICBjb25zdCBkaXZGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZGb3JtLmNsYXNzTmFtZSA9IFwiZm9ybVwiO1xyXG4gIGNvbnN0IGRlbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtZm9ybVwiKTtcclxuICBjb25zdCBpY29uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJveC1pY29uXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNvbGlkXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIngtY2lyY2xlXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBcImxnXCIpO1xyXG4gIGljb25EZWxldGUub25jbGljayA9ICgpID0+IHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9O1xyXG4gIGljb25EZWxldGUuY2xhc3NMaXN0LmFkZChcImJ4XCIpO1xyXG4gIGRlbGV0ZUNvbnRhaW5lci5hcHBlbmQoaWNvbkRlbGV0ZSk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQoZGVsZXRlQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdUYXNrJyBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFRhc2suc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10YXNrXCIpO1xyXG4gIGxhYmVsVGFzay50ZXh0Q29udGVudCA9IFwiVGFzazpcIjtcclxuICBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXRUYXNrLnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dFRhc2suaWQgPSBcImZvcm0tdGFza1wiO1xyXG4gIGlucHV0VGFzay5uYW1lID0gXCJmb3JtLXRhc2tcIjtcclxuICBpbnB1dFRhc2suY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXRUYXNrLnBsYWNlaG9sZGVyID0gXCJQaWNrIHVwIHRoZSBkb2cgZnJvbSB0aGUgdmV0XCI7XHJcbiAgaW5wdXRUYXNrLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dFRhc2sudmFsdWUgPSBvYmouTmFtZTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFRhc2ssIGlucHV0VGFzayk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnTmFtZScgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tbmFtZVwiKTtcclxuICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XHJcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXROYW1lLmlkID0gXCJmb3JtLW5hbWVcIjtcclxuICBpbnB1dE5hbWUubmFtZSA9IFwiZm9ybS1uYW1lXCI7XHJcbiAgaW5wdXROYW1lLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IFwiWW90YW1cIjtcclxuICBpbnB1dE5hbWUucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGlucHV0TmFtZS52YWx1ZSA9IG9iai5Pd25lcjtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbE5hbWUsIGlucHV0TmFtZSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnU3RhdHVzJyBzZWxlY3QgZmllbGRcclxuICBjb25zdCBsYWJlbFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXN0YXR1c1wiKTtcclxuICBsYWJlbFN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3RhdHVzOlwiO1xyXG4gIGNvbnN0IHNlbGVjdFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgc2VsZWN0U3RhdHVzLmlkID0gXCJmb3JtLXN0YXR1c1wiO1xyXG4gIHNlbGVjdFN0YXR1cy5uYW1lID0gXCJmb3JtLXN0YXR1c1wiO1xyXG4gIHNlbGVjdFN0YXR1cy5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBzZWxlY3RTdGF0dXMucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZVN0YXR1cyA9IG9iai5TdGF0dXM7IC8vIGUuZy4sIFwiU3R1Y2tcIlxyXG5cclxuICBbXCJEb25lXCIsIFwiU3R1Y2tcIiwgXCJXb3JraW5nIG9uIGl0XCJdLmZvckVhY2goKHN0YXR1cykgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHN0YXR1cztcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN0YXR1cztcclxuICAgIGlmIChzdGF0dXMgPT09IGRlZmF1bHRWYWx1ZVN0YXR1cykge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0U3RhdHVzLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsU3RhdHVzLCBzZWxlY3RTdGF0dXMpO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ1ByaW9yaXR5JyBzZWxlY3QgZmllbGRcclxuICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS1wcmlvcml0eVwiKTtcclxuICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcclxuICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgc2VsZWN0UHJpb3JpdHkuaWQgPSBcImZvcm0tcHJpb3JpdHlcIjtcclxuICBzZWxlY3RQcmlvcml0eS5uYW1lID0gXCJmb3JtLXByaW9yaXR5XCI7XHJcbiAgc2VsZWN0UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgc2VsZWN0UHJpb3JpdHkucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZVByaW9yaXR5ID0gb2JqLlByaW9yaXR5O1xyXG4gIFtcIkhpZ2hcIiwgXCJMb3dcIiwgXCJNZWRpdW1cIl0uZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgaWYgKHByaW9yaXR5ID09PSBkZWZhdWx0VmFsdWVQcmlvcml0eSkge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICB9KTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbFByaW9yaXR5LCBzZWxlY3RQcmlvcml0eSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnVGFnJyBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsVGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFRhZ3Muc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS10YWdzXCIpO1xyXG4gIGxhYmVsVGFncy50ZXh0Q29udGVudCA9IFwiVGFnOlwiO1xyXG4gIGNvbnN0IGlucHV0VGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dFRhZ3MudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0VGFncy5pZCA9IFwiZm9ybS10YWdzXCI7XHJcbiAgaW5wdXRUYWdzLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0VGFncy5wbGFjZWhvbGRlciA9IFwiQWRtaW5cIjtcclxuICBpbnB1dFRhZ3MucmVxdWlyZWQgPSB0cnVlO1xyXG4gIGlucHV0VGFncy52YWx1ZSA9IG9iai5UYWdzO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsVGFncywgaW5wdXRUYWdzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdEYXRlJyBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbERhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZm9ybS1kYXRlXCIpO1xyXG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcclxuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuICBpbnB1dERhdGUuaWQgPSBcImZvcm0tZGF0ZVwiO1xyXG4gIGlucHV0RGF0ZS5uYW1lID0gXCJmb3JtLWRhdGVcIjtcclxuICBpbnB1dERhdGUuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXREYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dERhdGUudmFsdWUgPSBvYmouRGF0ZTtcclxuICBpbnB1dERhdGUubWluID0gXCIxOTAwLTAxLTAxXCI7XHJcbiAgaW5wdXREYXRlLm1heCA9IFwiMjEyNS0wMS0wMVwiO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsRGF0ZSwgaW5wdXREYXRlKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuICBjb25zdCBkaXZTdWJtaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZTdWJtaXRGb3JtLmNsYXNzTmFtZSA9IFwic3VibWl0LWZvcm1cIjtcclxuICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvblN1Ym1pdC5jbGFzc05hbWUgPSBcImJ1dHRvbi1zdWJtaXRcIjtcclxuICBidXR0b25TdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcclxuICBkaXZTdWJtaXRGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XHJcbiAgLy9jcmVhdGluZyBhIGJsdXJcclxuICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBibHVyLmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcclxuICBibHVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEtlZXAgdGhpcyB0byBwcmV2ZW50IHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgIEVkaXRJdGVtKG15QXJyYXksIGluZGV4KTtcclxuICAgICAgUmVtb3ZlRm9ybVVJKGZvcm0sIGJsdXIpO1xyXG4gICAgICBjaGVja2luZ0Z1bmN0aW9uKHBsYWNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE9wdGlvbmFsbHkgdHJpZ2dlciB0aGUgYnJvd3NlcidzIGRlZmF1bHQgdmFsaWRhdGlvbiBVSVxyXG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFwcGVuZCBldmVyeXRoaW5nIHRvIHRoZSBtYWluIGZvcm0gZGl2IGFuZCB0aGVuIHRoZSBmb3JtIHRvIHRoZSBkb2N1bWVudCBib2R5IChvciB3aGVyZXZlciBpdCBuZWVkcyB0byBnbylcclxuICBkaXZGb3JtLmFwcGVuZENoaWxkKGRpdlN1Ym1pdEZvcm0pO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGl2Rm9ybSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibHVyKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pOyAvLyBPciBhcHBlbmQgdG8gYW5vdGhlciBlbGVtZW50IGlmIG5lZWRlZFxyXG59XHJcbmZ1bmN0aW9uIGNoZWNraW5nRnVuY3Rpb24ocGxhY2UpIHtcclxuICBjb25zdCBuYW1lT2ZGdW5jdGlvbiA9IFwiXCI7XHJcbiAgaWYgKHBsYWNlID09PSBcIkhvbWVcIikge1xyXG4gICAgSG9tZVVJKG15QXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5hbWVPZkZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgeyBlZGl0UG9wdXAgfTtcclxuIiwiaW1wb3J0IHVzZXJGb3JtVUkgZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFza09iamVjdCwgZGlzcGxheUFycmF5SG9tZVVpIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5pbXBvcnQgeyBSZW1vdmVTY3JlZW4gfSBmcm9tIFwiLi9yZW1vdmVcIjtcclxuaW1wb3J0IHsgbG9hZFRhc2tzLCBhZGRUYXNrLCBzYXZlVGFza3MgfSBmcm9tIFwiLi90YXNrU3RvcmFnZVwiOyAvLyBIeXBvdGhldGljYWwgdGFza1N0b3JhZ2UgbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBIb21lVUkoKSB7XHJcbiAgUmVtb3ZlU2NyZWVuKCk7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWxsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGNvbnRlbnRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHRvZGF5SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3Qgd2Vla0hlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGFsbFRpbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICBwbGFjZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuICB3ZWxjb21lLmlubmVyVGV4dCA9IFwiV2VsY29tZSBiYWNrLCBPcmJ0ZXJcIjtcclxuICBoZWFkVGV4dC5pbm5lclRleHQgPSBcIlN0YXJ0IEFub3RoZXIgVGFzayFcIjtcclxuICB0b2RheUhlYWRsaW5lLmlubmVyVGV4dCA9IFwiVG9kYXlcIjtcclxuICB3ZWVrSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJUaGlzIFdlZWtcIjtcclxuICBhbGxUaW1lSGVhZGxpbmUuaW5uZXJUZXh0ID0gXCJBbGwgVGltZVwiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcbiAgLy9jbGFzc2VzXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICBjb250ZW50SGVhZC5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkXCIpO1xyXG4gIHRvZGF5SGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcInRvZGF5LWhlYWRsaW5lXCIpO1xyXG4gIHdlZWtIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktaGVhZGxpbmVcIik7XHJcbiAgYWxsVGltZUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICB0b2RheS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgdGhpc1dlZWsuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gIGFsbFRpbWUuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gIGFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkXCIsIFwiYnV0dG9uXCIpO1xyXG4gIGFkZC5vbmNsaWNrID0gKGV2ZW50KSA9PiB1c2VyRm9ybVVJKFwiSG9tZVwiKTtcclxuXHJcbiAgLy9hcHBlbmRpbmdcclxuXHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKGhlYWRlciwgY29udGVudCk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQocGxhY2UsIHdlbGNvbWUsIGNvbnRlbnRIZWFkKTtcclxuXHJcbiAgY29udGVudEhlYWQuYXBwZW5kKGhlYWRUZXh0LCBhZGQpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChcclxuICAgIHRvZGF5SGVhZGxpbmUsXHJcbiAgICB0b2RheSxcclxuICAgIHdlZWtIZWFkbGluZSxcclxuICAgIHRoaXNXZWVrLFxyXG4gICAgYWxsVGltZUhlYWRsaW5lLFxyXG4gICAgYWxsVGltZVxyXG4gICk7XHJcbiAgY29uc3Qgc2hvd2luZ0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgZGlzcGxheUFycmF5SG9tZVVpKHNob3dpbmdBcnJheSwgdG9kYXksIHRoaXNXZWVrLCBhbGxUaW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVVJO1xyXG4iLCJmdW5jdGlvbiBSZW1vdmVGb3JtVUkoZm9ybSwgb3ZlcnZpZXcpIHtcclxuICBmb3JtLnJlbW92ZSgpO1xyXG4gIG92ZXJ2aWV3LnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW1vdmVTY3JlZW4oKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBSZW1vdmVJdGVtQXJyYXkoYXJyYXksIGluZGV4VG9SZW1vdmUpIHtcclxuICBhcnJheS5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFJlbW92ZUZvcm1VSSwgUmVtb3ZlU2NyZWVuLCBSZW1vdmVJdGVtQXJyYXkgfTtcclxuIiwiY29uc3QgY3JlYXRlVGFza09iamVjdCA9IChOYW1lLCBPd25lciwgU3RhdHVzLCBQcmlvcml0eSwgVGFncywgRGF0ZSkgPT4gKHtcclxuICBOYW1lLFxyXG4gIE93bmVyLFxyXG4gIFN0YXR1cyxcclxuICBQcmlvcml0eSxcclxuICBUYWdzLFxyXG4gIERhdGUsXHJcbn0pO1xyXG5pbXBvcnQgSG9tZVVJIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgUmVtb3ZlRm9ybVVJLCBSZW1vdmVTY3JlZW4sIFJlbW92ZUl0ZW1BcnJheSB9IGZyb20gXCIuL3JlbW92ZVwiO1xyXG5pbXBvcnQgY3JlYXRlVGFza1VJIGZyb20gXCIuL3Rhc2tVSVwiO1xyXG5pbXBvcnQgeyBlZGl0UG9wdXAgfSBmcm9tIFwiLi9mb3JtZWRpdFwiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcyB9IGZyb20gXCIuL3Rhc2tTdG9yYWdlXCI7IC8vIEh5cG90aGV0aWNhbCB0YXNrU3RvcmFnZSBtb2R1bGVcclxuaW1wb3J0IHBsYWNlIGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFycmF5T3ZlcmR1ZVVpKGFycmF5LCBvdmVyZHVlKSB7XHJcbiAgc29ydEFycmF5QnlEYXRlKGFycmF5KTtcclxuICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b2RheURhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICBjdXJyZW50RGF5LmdldEZ1bGxZZWFyKCksXHJcbiAgICBjdXJyZW50RGF5LmdldE1vbnRoKCksXHJcbiAgICBjdXJyZW50RGF5LmdldERhdGUoKVxyXG4gICk7XHJcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG9iamVjdERhdGUgPSBuZXcgRGF0ZShlbGVtZW50LkRhdGUpOyAvLyBGb3IgZXhhbXBsZSwgMjAyMS0xMi0wMVxyXG4gICAgY29uc3Qgb2JqZWN0RGF0ZU9ubHkgPSBuZXcgRGF0ZShcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBvYmplY3REYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RGF0ZSgpXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICAgIC8vIENvcnJlY3RlZCBjb21wYXJpc29uIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgZXZlbnQgaXMgXCJ0b2RheVwiXHJcbiAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpID4gdG9kYXlEYXRlT25seS5nZXRUaW1lKCkpIHtcclxuICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIG92ZXJkdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlUb2RheVVpKGFycmF5LCB0b2RheSkge1xyXG4gIHNvcnRBcnJheUJ5RGF0ZShhcnJheSk7IC8vYXNzdXJpbmcgdGhlIGFycmF5IGJ5IGRhdGVcclxuICBjb25zdCBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b2RheURhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICBjdXJyZW50RGF5LmdldEZ1bGxZZWFyKCksXHJcbiAgICBjdXJyZW50RGF5LmdldE1vbnRoKCksXHJcbiAgICBjdXJyZW50RGF5LmdldERhdGUoKVxyXG4gICk7XHJcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG9iamVjdERhdGUgPSBuZXcgRGF0ZShlbGVtZW50LkRhdGUpOyAvLyBGb3IgZXhhbXBsZSwgMjAyMS0xMi0wMVxyXG4gICAgY29uc3Qgb2JqZWN0RGF0ZU9ubHkgPSBuZXcgRGF0ZShcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBvYmplY3REYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RGF0ZSgpXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICAgIC8vIENvcnJlY3RlZCBjb21wYXJpc29uIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgZXZlbnQgaXMgXCJ0b2RheVwiXHJcbiAgICBpZiAob2JqZWN0RGF0ZU9ubHkuZ2V0VGltZSgpID09PSB0b2RheURhdGVPbmx5LmdldFRpbWUoKSkge1xyXG4gICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgdG9kYXkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlBbGxUaW1lVWkoYXJyYXksIGFsbFRpbWUpIHtcclxuICBzb3J0QXJyYXlCeURhdGUoYXJyYXkpOyAvL2Fzc3VyaW5nIHRoZSBhcnJheSBieSBkYXRlXHJcbiAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICBuZXdBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIGFsbFRpbWUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QXJyYXlIb21lVWkoYXJyYXksIHRvZGF5LCB3ZWVrLCBhbGxUaW1lKSB7XHJcbiAgc29ydEFycmF5QnlEYXRlKGFycmF5KTsgLy9hc3N1cmluZyB0aGUgYXJyYXkgYnkgZGF0ZVxyXG4gIGNvbnN0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHRvZGF5RGF0ZU9ubHkgPSBuZXcgRGF0ZShcclxuICAgIGN1cnJlbnREYXkuZ2V0RnVsbFllYXIoKSxcclxuICAgIGN1cnJlbnREYXkuZ2V0TW9udGgoKSxcclxuICAgIGN1cnJlbnREYXkuZ2V0RGF0ZSgpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBmaXJzdERheU9mV2VlaywgbGFzdERheU9mV2VlayB9ID0gc2V0dGluZ1RoZVdlZWsoY3VycmVudERheSk7XHJcblxyXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3REYXRlID0gbmV3IERhdGUoZWxlbWVudC5EYXRlKTsgLy8gRm9yIGV4YW1wbGUsIDIwMjEtMTItMDFcclxuICAgIGNvbnN0IG9iamVjdERhdGVPbmx5ID0gbmV3IERhdGUoXHJcbiAgICAgIG9iamVjdERhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgb2JqZWN0RGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICBvYmplY3REYXRlLmdldERhdGUoKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5ld0FycmF5ID0gbG9hZFRhc2tzKCk7XHJcbiAgICAvLyBDb3JyZWN0ZWQgY29tcGFyaXNvbiBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGV2ZW50IGlzIFwidG9kYXlcIlxyXG4gICAgaWYgKG9iamVjdERhdGVPbmx5LmdldFRpbWUoKSA9PT0gdG9kYXlEYXRlT25seS5nZXRUaW1lKCkpIHtcclxuICAgICAgYXBwZW5kaW5nVGFzayhuZXdBcnJheSwgZWxlbWVudCwgaW5kZXgsIHRvZGF5KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIG9iamVjdERhdGVPbmx5ID49IGZpcnN0RGF5T2ZXZWVrICYmXHJcbiAgICAgIG9iamVjdERhdGVPbmx5IDw9IGxhc3REYXlPZldlZWtcclxuICAgICkge1xyXG4gICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgd2Vlayk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcHBlbmRpbmdUYXNrKG5ld0FycmF5LCBlbGVtZW50LCBpbmRleCwgYWxsVGltZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuY29uc3Qgc2V0dGluZ1RoZVdlZWsgPSAodG9kYXkpID0+IHtcclxuICAvLyBDcmVhdGUgbmV3IERhdGUgb2JqZWN0cyBmb3IgdGhlIGZpcnN0IGFuZCBsYXN0IGRheSBvZiB0aGUgd2VlayBiYXNlZCBvbiAndG9kYXknXHJcbiAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgY29uc3QgbGFzdERheU9mV2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcclxuXHJcbiAgLy8gU2V0IGZpcnN0RGF5T2ZXZWVrIHRvIHRoZSBzdGFydCBvZiB0aGUgd2VlaywgU3VuZGF5XHJcbiAgZmlyc3REYXlPZldlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgLSB0b2RheS5nZXREYXkoKSk7XHJcbiAgZmlyc3REYXlPZldlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7IC8vIFNldCB0byBzdGFydCBvZiB0aGUgZGF5XHJcblxyXG4gIC8vIFNldCBsYXN0RGF5T2ZXZWVrIHRvIHRoZSBlbmQgb2YgdGhlIHdlZWssIFNhdHVyZGF5XHJcbiAgbGFzdERheU9mV2Vlay5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArICg2IC0gdG9kYXkuZ2V0RGF5KCkpKTtcclxuICBsYXN0RGF5T2ZXZWVrLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7IC8vIFNldCB0byBlbmQgb2YgdGhlIGRheVxyXG5cclxuICByZXR1cm4geyBmaXJzdERheU9mV2VlaywgbGFzdERheU9mV2VlayB9O1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kaW5nVGFzayA9IChhcnJheSwgZWxlbWVudCwgaW5kZXgsIHBsYWNlKSA9PiB7XHJcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrVUkoZWxlbWVudCk7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlbGV0ZVwiKTtcclxuICBjb25zdCBlZGl0QnV0dG9uID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWVkaXRcIik7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgIFJlbW92ZUl0ZW1BcnJheShuZXdBcnJheSwgaW5kZXgpO1xyXG4gICAgc2F2ZVRhc2tzKG5ld0FycmF5KTtcclxuICAgIEhvbWVVSShuZXdBcnJheSk7XHJcbiAgfTtcclxuICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBlZGl0UG9wdXAocGxhY2UsIGFycmF5LCBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcGxhY2UuYXBwZW5kKHRhc2tFbGVtZW50KTtcclxufTtcclxuZnVuY3Rpb24gc29ydEFycmF5QnlEYXRlKGFycmF5KSB7XHJcbiAgYXJyYXkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5EYXRlKSAtIG5ldyBEYXRlKGIuRGF0ZSkpO1xyXG4gIHNhdmVUYXNrcyhhcnJheSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlVGFza09iamVjdCxcclxuICBkaXNwbGF5QXJyYXlIb21lVWksXHJcbiAgZGlzcGxheUFycmF5QWxsVGltZVVpLFxyXG4gIGRpc3BsYXlBcnJheVRvZGF5VWksXHJcbiAgZGlzcGxheUFycmF5T3ZlcmR1ZVVpLFxyXG59O1xyXG4iLCIvLyB0YXNrU3RvcmFnZS5qc1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlBcnJheVwiKSkgfHwgW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcclxuICBjb25zdCB0YXNrcyA9IGxvYWRUYXNrcygpO1xyXG4gIHRhc2tzLnB1c2godGFzayk7XHJcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrcyh0YXNrcykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlBcnJheVwiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tVSShvYmplY3QpIHtcclxuICAvL25hbWUsIG93bmVyLCBzdGF0dXMsIHByaW9yaXR5LCB0YWdzLCBkYXRlXHJcbiAgLy9DcmVhdGluZyB0aGUgZGl2c1xyXG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrT3duZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza1RhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm94LWljb25cIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib3gtaWNvblwiKTtcclxuXHJcbiAgLy9pbm5lciB0ZXh0XHJcbiAgdGFza05hbWUuaW5uZXJUZXh0ID0gb2JqZWN0Lk5hbWU7XHJcbiAgdGFza093bmVyLmlubmVyVGV4dCA9IG9iamVjdC5Pd25lcjtcclxuICB0YXNrU3RhdHVzLmlubmVyVGV4dCA9IG9iamVjdC5TdGF0dXM7XHJcbiAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IG9iamVjdC5Qcmlvcml0eTtcclxuICB0YXNrVGFncy5pbm5lclRleHQgPSBjaGVja1RhZyhvYmplY3QuVGFncyk7XHJcblxyXG4gIHRhc2tEYXRlLmlubmVyVGV4dCA9IGZvcm1hdERhdGUob2JqZWN0LkRhdGUpO1xyXG4gIC8vY2xhc3Nlc1xyXG4gIHVwZGF0ZVRhc2tDbGFzcyhcclxuICAgIHRhc2tTdGF0dXMsXHJcbiAgICB0YXNrUHJpb3JpdHksXHJcbiAgICB0YXNrTmFtZSxcclxuICAgIHRhc2tPd25lcixcclxuICAgIHRhc2tUYWdzLFxyXG4gICAgdGFza0RhdGUsXHJcbiAgICB0YXNrRWRpdCxcclxuICAgIHRhc2tEZWxldGUsXHJcbiAgICBpY29uRWRpdCxcclxuICAgIGljb25EZWxldGUsXHJcbiAgICB0YXNrXHJcbiAgKTtcclxuICAvLyBhcHBlbmRpbmcgdGFza1xyXG5cclxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tPd25lcik7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcclxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGFncyk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XHJcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcclxuXHJcbiAgdGFza0VkaXQuYXBwZW5kQ2hpbGQoaWNvbkVkaXQpO1xyXG4gIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQoaWNvbkRlbGV0ZSk7XHJcblxyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcbmNvbnN0IHVwZGF0ZVRhc2tDbGFzcyA9IChcclxuICB0YXNrU3RhdHVzLFxyXG4gIHRhc2tQcmlvcml0eSxcclxuICB0YXNrTmFtZSxcclxuICB0YXNrT3duZXIsXHJcbiAgdGFza1RhZ3MsXHJcbiAgdGFza0RhdGUsXHJcbiAgdGFza0VkaXQsXHJcbiAgdGFza0RlbGV0ZSxcclxuICBpY29uRWRpdCxcclxuICBpY29uRGVsZXRlLFxyXG4gIHRhc2tcclxuKSA9PiB7XHJcbiAgdGFza1N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgXCJ0YXNrLXN0YXR1cy1kb25lXCIsXHJcbiAgICBcInRhc2stc3RhdHVzLXN0dWNrXCIsXHJcbiAgICBcInRhc2stc3RhdHVzLXdvcmtpbmdcIlxyXG4gICk7XHJcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5yZW1vdmUoXHJcbiAgICBcInRhc2stcHJpb3JpdHktaGlnaFwiLFxyXG4gICAgXCJ0YXNrLXByaW9yaXR5LWxvd1wiLFxyXG4gICAgXCJ0YXNrLXByaW9yaXR5LW1lZGl1bVwiXHJcbiAgKTtcclxuXHJcbiAgaWYgKHRhc2tTdGF0dXMuaW5uZXJUZXh0ID09PSBcIkRvbmVcIikge1xyXG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidGFzay1zdGF0dXMtZG9uZVwiLCBcInRhc2stc3RhdHVzXCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1ib3JkZXItZG9uZVwiKTtcclxuICB9IGVsc2UgaWYgKHRhc2tTdGF0dXMuaW5uZXJUZXh0ID09PSBcIlN0dWNrXCIpIHtcclxuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZChcInRhc2stc3RhdHVzLXN0dWNrXCIsIFwidGFzay1zdGF0dXNcIik7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJvcmRlci1zdHVja1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidGFzay1zdGF0dXMtd29ya2luZ1wiLCBcInRhc2stc3RhdHVzXCIpO1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1ib3JkZXItd29ya2luZ1wiKTtcclxuICB9XHJcblxyXG4gIGlmICh0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID09PSBcIkhpZ2hcIikge1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5LWhpZ2hcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG4gIH0gZWxzZSBpZiAodGFza1ByaW9yaXR5LmlubmVyVGV4dCA9PT0gXCJMb3dcIikge1xyXG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5LWxvd1wiLCBcInRhc2stcHJpb3JpdHlcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eS1tZWRpdW1cIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG4gIH1cclxuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xyXG4gIHRhc2tPd25lci5jbGFzc0xpc3QuYWRkKFwidGFzay1vd25lclwiKTtcclxuICB0YXNrVGFncy5jbGFzc0xpc3QuYWRkKFwidGFzay10YWdzXCIpO1xyXG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XHJcbiAgdGFza0VkaXQuY2xhc3NMaXN0LmFkZChcInRhc2stZWRpdFwiLCBcImJ4LWJveC10YXNrXCIpO1xyXG4gIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIsIFwiYngtYm94LXRhc2tcIik7XHJcbiAgaWNvbkVkaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNvbGlkXCIpO1xyXG4gIGljb25FZGl0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlZGl0LWFsdFwiKTtcclxuICBpY29uRWRpdC5jbGFzc0xpc3QuYWRkKFwiYnhcIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic29saWRcIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwieC1zcXVhcmVcIik7XHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYnhcIik7XHJcbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxufTtcclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XHJcbiAgcmV0dXJuIGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVGFnKHRhZ1N0cmluZykge1xyXG4gIGlmICh0YWdTdHJpbmcuaW5jbHVkZXMoXCIjXCIpKSB7XHJcbiAgICByZXR1cm4gdGFnU3RyaW5nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCIjXCIgKyBgJHt0YWdTdHJpbmd9YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tVSTtcclxuIiwiaW1wb3J0IHVzZXJGb3JtVUkgZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IHsgUmVtb3ZlU2NyZWVuIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5pbXBvcnQgeyBkaXNwbGF5QXJyYXlUb2RheVVpIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuZnVuY3Rpb24gVG9kYXkoKSB7XHJcbiAgUmVtb3ZlU2NyZWVuKCk7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgY29uc3QgY29udGVudEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHRvZGF5SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBwbGFjZS5pbm5lclRleHQgPSBcIlRvZGF5IFRhc2tzXCI7XHJcbiAgaGVhZFRleHQuaW5uZXJUZXh0ID0gXCJGaW5pc2ggdGhpcyB0YXNrcyB0b2RheSFcIjtcclxuICB0b2RheUhlYWRsaW5lLmlubmVyVGV4dCA9IFwiQWxsIHRhc2tzIER1ZSB0byB0b2RheVwiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcblxyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29udGVudEhlYWQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZFwiKTtcclxuICB0b2RheUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICB0b2RheS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgYWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJidXR0b25cIik7XHJcbiAgYWRkLm9uY2xpY2sgPSAoZXZlbnQpID0+IHVzZXJGb3JtVUkoXCJUb2RheVwiKTtcclxuICBtYWluQ29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250ZW50KTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChwbGFjZSwgY29udGVudEhlYWQpO1xyXG5cclxuICBjb250ZW50SGVhZC5hcHBlbmQoaGVhZFRleHQsIGFkZCk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKHRvZGF5SGVhZGxpbmUsIHRvZGF5KTtcclxuICBjb25zdCBzaG93aW5nQXJyYXkgPSBsb2FkVGFza3MoKTtcclxuICBkaXNwbGF5QXJyYXlUb2RheVVpKHNob3dpbmdBcnJheSwgdG9kYXkpO1xyXG59XHJcbmV4cG9ydCB7IFRvZGF5IH07XHJcbiIsImltcG9ydCB1c2VyRm9ybVVJIGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tPYmplY3QsIGRpc3BsYXlBcnJheUFsbFRpbWVVaSB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgUmVtb3ZlU2NyZWVuIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5cclxuZnVuY3Rpb24gVXBjb21pbmcoKSB7XHJcbiAgUmVtb3ZlU2NyZWVuKCk7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgY29uc3QgY29udGVudEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IHVwY29taW5nSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgcGxhY2UuaW5uZXJUZXh0ID0gXCJVcGNvbWluZyBUYXNrc1wiO1xyXG4gIGhlYWRUZXh0LmlubmVyVGV4dCA9IFwiWW91ciBuZXh0IHByb2plY3QgYXJlIGluIGhlcmUhXCI7XHJcbiAgdXBjb21pbmdIZWFkbGluZS5pbm5lclRleHQgPSBcIkZ1dHVyZSB0YXNrc1wiO1xyXG4gIGFkZC5pbm5lclRleHQgPSBcImFkZCBhIHRhc2shXCI7XHJcblxyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgY29udGVudEhlYWQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZFwiKTtcclxuICB1cGNvbWluZ0hlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1oZWFkbGluZVwiKTtcclxuICB1cGNvbWluZy5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgYWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJidXR0b25cIik7XHJcbiAgYWRkLm9uY2xpY2sgPSAoZXZlbnQpID0+IHVzZXJGb3JtVUkoXCJVcGNvbWluZ1wiKTtcclxuICBtYWluQ29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250ZW50KTtcclxuICBoZWFkZXIuYXBwZW5kKHBsYWNlLCBjb250ZW50SGVhZCk7XHJcblxyXG4gIGNvbnRlbnRIZWFkLmFwcGVuZChoZWFkVGV4dCwgYWRkKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQodXBjb21pbmdIZWFkbGluZSwgdXBjb21pbmcpO1xyXG4gIGNvbnN0IHNob3dpbmdBcnJheSA9IGxvYWRUYXNrcygpO1xyXG4gIGRpc3BsYXlBcnJheVVwY29taW5nVWkoc2hvd2luZ0FycmF5LCB1cGNvbWluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFVwY29taW5nIH07XHJcbiIsImltcG9ydCB7IFJlbW92ZUZvcm1VSSwgUmVtb3ZlU2NyZWVuIH0gZnJvbSBcIi4vcmVtb3ZlXCI7XHJcbmltcG9ydCB7IEZvcm1Ub0FycmF5IH0gZnJvbSBcIi4vdXNlckZvcm1PYmpcIjtcclxuaW1wb3J0IEhvbWVVSSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IEFsbFRhc2sgfSBmcm9tIFwiLi9hbGxUYXNrc1wiO1xyXG5pbXBvcnQgeyBsb2FkVGFza3MsIGFkZFRhc2ssIHNhdmVUYXNrcyB9IGZyb20gXCIuL3Rhc2tTdG9yYWdlXCI7IC8vIEh5cG90aGV0aWNhbCB0YXNrU3RvcmFnZSBtb2R1bGVcclxuaW1wb3J0IHsgVG9kYXkgfSBmcm9tIFwiLi90b2RheVwiO1xyXG5pbXBvcnQgeyBVcGNvbWluZyB9IGZyb20gXCIuL3VwY29taW5nXCI7XHJcbmltcG9ydCB7IE92ZXJkdWUgfSBmcm9tIFwiLi9PdmVyZHVlXCI7XHJcbmxldCBtYWluQXJyYXkgPSBsb2FkVGFza3MoKTtcclxuZnVuY3Rpb24gdXNlckZvcm1VSShwbGFjZSkge1xyXG4gIC8vIENyZWF0ZSB0aGUgZm9ybSBhbmQgdGhlIG1haW4gZGl2IHdyYXBwZXJcclxuICAvLzxib3gtaWNvbiB0eXBlPSdzb2xpZCcgbmFtZT0neC1jaXJjbGUnPjwvYm94LWljb24+XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBmb3JtLmlkID0gXCJmb3JtLWlkXCI7XHJcbiAgY29uc3QgZGl2Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2Rm9ybS5jbGFzc05hbWUgPSBcImZvcm1cIjtcclxuICBjb25zdCBkZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWZvcm1cIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib3gtaWNvblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzb2xpZFwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ4LWNpcmNsZVwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcInNpemVcIiwgXCJsZ1wiKTtcclxuICBpY29uRGVsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBSZW1vdmVGb3JtVUkoZm9ybSwgYmx1cik7XHJcbiAgfTtcclxuICBpY29uRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJieFwiKTtcclxuICBkZWxldGVDb250YWluZXIuYXBwZW5kKGljb25EZWxldGUpO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGRlbGV0ZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnVGFzaycgaW5wdXQgZmllbGRcclxuICBjb25zdCBsYWJlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxUYXNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZvcm0tdGFza1wiKTtcclxuICBsYWJlbFRhc2sudGV4dENvbnRlbnQgPSBcIlRhc2s6XCI7XHJcbiAgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0VGFzay50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXRUYXNrLmlkID0gXCJmb3JtLXRhc2tcIjtcclxuICBpbnB1dFRhc2submFtZSA9IFwiZm9ybS10YXNrXCI7XHJcbiAgaW5wdXRUYXNrLmNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dFwiO1xyXG4gIGlucHV0VGFzay5wbGFjZWhvbGRlciA9IFwiUGljayB1cCB0aGUgZG9nIGZyb20gdGhlIHZldFwiO1xyXG4gIGlucHV0VGFzay5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxUYXNrLCBpbnB1dFRhc2spO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ05hbWUnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLW5hbWVcIik7XHJcbiAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xyXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xyXG4gIGlucHV0TmFtZS5pZCA9IFwiZm9ybS1uYW1lXCI7XHJcbiAgaW5wdXROYW1lLm5hbWUgPSBcImZvcm0tbmFtZVwiO1xyXG4gIGlucHV0TmFtZS5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSBcIllvdGFtXCI7XHJcbiAgaW5wdXROYW1lLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBkaXZGb3JtLmFwcGVuZChsYWJlbE5hbWUsIGlucHV0TmFtZSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnU3RhdHVzJyBzZWxlY3QgZmllbGRcclxuICBjb25zdCBsYWJlbFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbFN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXN0YXR1c1wiKTtcclxuICBsYWJlbFN0YXR1cy50ZXh0Q29udGVudCA9IFwiU3RhdHVzOlwiO1xyXG4gIGNvbnN0IHNlbGVjdFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgc2VsZWN0U3RhdHVzLmlkID0gXCJmb3JtLXN0YXR1c1wiO1xyXG4gIHNlbGVjdFN0YXR1cy5uYW1lID0gXCJmb3JtLXN0YXR1c1wiO1xyXG4gIHNlbGVjdFN0YXR1cy5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBzZWxlY3RTdGF0dXMucmVxdWlyZWQgPSB0cnVlO1xyXG4gIFtcIkRvbmVcIiwgXCJTdHVja1wiLCBcIldvcmtpbmcgb24gaXRcIl0uZm9yRWFjaCgoc3RhdHVzKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gc3RhdHVzO1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3RhdHVzO1xyXG4gICAgc2VsZWN0U3RhdHVzLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfSk7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxTdGF0dXMsIHNlbGVjdFN0YXR1cyk7XHJcblxyXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSAnUHJpb3JpdHknIHNlbGVjdCBmaWVsZFxyXG4gIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgbGFiZWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXByaW9yaXR5XCIpO1xyXG4gIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xyXG4gIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICBzZWxlY3RQcmlvcml0eS5pZCA9IFwiZm9ybS1wcmlvcml0eVwiO1xyXG4gIHNlbGVjdFByaW9yaXR5Lm5hbWUgPSBcImZvcm0tcHJpb3JpdHlcIjtcclxuICBzZWxlY3RQcmlvcml0eS5jbGFzc05hbWUgPSBcImZvcm0taW5wdXRcIjtcclxuICBzZWxlY3RQcmlvcml0eS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgW1wiSGlnaFwiLCBcIkxvd1wiLCBcIk1lZGl1bVwiXS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcbiAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIH0pO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsUHJpb3JpdHksIHNlbGVjdFByaW9yaXR5KTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlICdUYWcnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxUYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsVGFncy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLXRhZ3NcIik7XHJcbiAgbGFiZWxUYWdzLnRleHRDb250ZW50ID0gXCJUYWc6XCI7XHJcbiAgY29uc3QgaW5wdXRUYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0VGFncy50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgaW5wdXRUYWdzLmlkID0gXCJmb3JtLXRhZ3NcIjtcclxuICBpbnB1dFRhZ3MuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXRUYWdzLnBsYWNlaG9sZGVyID0gXCJBZG1pblwiO1xyXG4gIGlucHV0VGFncy5yZXF1aXJlZCA9IHRydWU7XHJcbiAgZGl2Rm9ybS5hcHBlbmQobGFiZWxUYWdzLCBpbnB1dFRhZ3MpO1xyXG5cclxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgJ0RhdGUnIGlucHV0IGZpZWxkXHJcbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGxhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmb3JtLWRhdGVcIik7XHJcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcclxuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuICBpbnB1dERhdGUuaWQgPSBcImZvcm0tZGF0ZVwiO1xyXG4gIGlucHV0RGF0ZS5uYW1lID0gXCJmb3JtLWRhdGVcIjtcclxuICBpbnB1dERhdGUuY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI7XHJcbiAgaW5wdXREYXRlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICBpbnB1dERhdGUubWluID0gXCIxOTAwLTAxLTAxXCI7XHJcbiAgaW5wdXREYXRlLm1heCA9IFwiMjEyNS0wMS0wMVwiO1xyXG4gIGRpdkZvcm0uYXBwZW5kKGxhYmVsRGF0ZSwgaW5wdXREYXRlKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuICBjb25zdCBkaXZTdWJtaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZTdWJtaXRGb3JtLmNsYXNzTmFtZSA9IFwic3VibWl0LWZvcm1cIjtcclxuICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGJ1dHRvblN1Ym1pdC5jbGFzc05hbWUgPSBcImJ1dHRvbi1zdWJtaXRcIjtcclxuICBidXR0b25TdWJtaXQudHlwZSA9IFwic3VibWl0XCI7XHJcbiAgYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcclxuICBkaXZTdWJtaXRGb3JtLmFwcGVuZENoaWxkKGJ1dHRvblN1Ym1pdCk7XHJcbiAgLy9jcmVhdGluZyBhIGJsdXJcclxuICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBibHVyLmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcclxuICBibHVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEtlZXAgdGhpcyB0byBwcmV2ZW50IHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgIEZvcm1Ub0FycmF5KG1haW5BcnJheSk7XHJcbiAgICAgIFJlbW92ZUZvcm1VSShmb3JtLCBibHVyKTtcclxuICAgICAgY2hlY2tpbmdGdW5jdGlvbihwbGFjZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPcHRpb25hbGx5IHRyaWdnZXIgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHZhbGlkYXRpb24gVUlcclxuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBBcHBlbmQgZXZlcnl0aGluZyB0byB0aGUgbWFpbiBmb3JtIGRpdiBhbmQgdGhlbiB0aGUgZm9ybSB0byB0aGUgZG9jdW1lbnQgYm9keSAob3Igd2hlcmV2ZXIgaXQgbmVlZHMgdG8gZ28pXHJcbiAgZGl2Rm9ybS5hcHBlbmRDaGlsZChkaXZTdWJtaXRGb3JtKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGRpdkZvcm0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmx1cik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTsgLy8gT3IgYXBwZW5kIHRvIGFub3RoZXIgZWxlbWVudCBpZiBuZWVkZWRcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tpbmdGdW5jdGlvbihwbGFjZSkge1xyXG4gIGlmIChwbGFjZSA9PT0gXCJIb21lXCIpIHtcclxuICAgIEhvbWVVSSgpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiQWxsLVRhc2tcIikge1xyXG4gICAgQWxsVGFzaygpO1xyXG4gIH0gZWxzZSBpZiAocGxhY2UgPT09IFwiVG9kYXlcIikge1xyXG4gICAgVG9kYXkoKTtcclxuICB9IGVsc2UgaWYgKHBsYWNlID09PSBcIlVwY29taW5nXCIpIHtcclxuICAgIFVwY29taW5nKCk7XHJcbiAgfSBlbHNlIGlmIChwbGFjZSA9PT0gXCJPdmVyZHVlXCIpIHtcclxuICAgIE92ZXJkdWUoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJGb3JtVUk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tPYmplY3QgfSBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCB7IGxvYWRUYXNrcywgYWRkVGFzaywgc2F2ZVRhc2tzIH0gZnJvbSBcIi4vdGFza1N0b3JhZ2VcIjsgLy8gSHlwb3RoZXRpY2FsIHRhc2tTdG9yYWdlIG1vZHVsZVxyXG5cclxuZnVuY3Rpb24gRm9ybVRvQXJyYXkoYXJyYXkpIHtcclxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIikudmFsdWU7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1zdGF0dXNcIikudmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgY29uc3QgdGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWdzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tZGF0ZVwiKS52YWx1ZTtcclxuICBjb25zdCBvYmogPSBjcmVhdGVUYXNrT2JqZWN0KHRhc2ssIG5hbWUsIHN0YXR1cywgcHJpb3JpdHksIHRhZ3MsIGRhdGUpO1xyXG4gIGFycmF5ID0gc2F2aW5nQXJyYXkob2JqKTtcclxuXHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcbmNvbnN0IHNhdmluZ0FycmF5ID0gKG5ld1Rhc2spID0+IHtcclxuICBhZGRUYXNrKG5ld1Rhc2spO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gRWRpdEl0ZW0oYXJyYXksIGluZGV4KSB7XHJcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpLnZhbHVlO1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tc3RhdHVzXCIpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnc1wiKS52YWx1ZTtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWRhdGVcIikudmFsdWU7XHJcbiAgY29uc3Qgb2JqID0gY3JlYXRlVGFza09iamVjdCh0YXNrLCBuYW1lLCBzdGF0dXMsIHByaW9yaXR5LCB0YWdzLCBkYXRlKTtcclxuXHJcbiAgYXJyYXlbaW5kZXhdID0gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgeyBGb3JtVG9BcnJheSwgRWRpdEl0ZW0gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=