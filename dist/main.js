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
  position: absolute;
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
  z-index: 1;
}

.header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #2a2d2f;
  color: white;
  height: 150px;
  font-family: "Lato", sans-serif;
}

.content-head {
  font-size: 0.85rem;
  padding-top: 30px;
  flex-wrap: wrap;
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
  border-left: 10px solid #ffdd00;
  width: 90%;
  color: white;
  background-color: #2a2d2f;
  font-family: "Lato", sans-serif;
  height: 90px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
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
  background-color: #ffdd00;
}

.task-priority {
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  min-width: 110px;
  background-color: #7b2cbf;
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
}

@media (max-width: 970px) {
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
    border: 3px solid #ffdd00;
  }
  .header {
    height: fit-content;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: end;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n$menu-text: white;\r\n$menu-color: #252629;\r\n$task-status: #ffdd00;\r\n$task-priority: #7b2cbf;\r\n$task-tags: #b3e9c7;\r\n$header: #2a2d2f;\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n.tab {\r\n  height: 100vh;\r\n  background-color: $menu-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  transition: all 0.3s ease;\r\n  font-family: \"Lato\", sans-serif;\r\n  z-index: 10;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.bx {\r\n  fill: $menu-text;\r\n}\r\n.menu {\r\n  fill: $menu-text;\r\n  cursor: pointer;\r\n}\r\n.menu-headline {\r\n  color: $menu-text;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: default;\r\n}\r\n.menu-box {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: start;\r\n  padding: 10px;\r\n}\r\n.menu-user {\r\n  color: $menu-text;\r\n  padding: 10px;\r\n  font-size: 1.8rem;\r\n  cursor: default;\r\n}\r\n.menu-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 35px;\r\n}\r\n.menu-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 18px;\r\n}\r\n.menu-main-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.bx-box {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  padding-left: 5px;\r\n  cursor: pointer;\r\n  width: 80%;\r\n}\r\n.bx-box:before {\r\n  content: \"\";\r\n}\r\n.bx-text::before {\r\n  content: \"\";\r\n}\r\n.bx-text {\r\n  color: $menu-text;\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n}\r\n.sidebar-active .bx-text,\r\n.sidebar-active .menu-headline,\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .bx-box {\r\n  padding: 15px;\r\n  width: fit-content;\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-main-list {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.sidebar-active .menu-list {\r\n  gap: 0;\r\n}\r\n.sidebar-active .menu-content {\r\n  gap: 15px;\r\n}\r\n.sidebar-active .menu-user {\r\n  display: none;\r\n}\r\n.sidebar-active .menu-box {\r\n  justify-content: center;\r\n}\r\n.sidebar-active {\r\n  width: 65px;\r\n  z-index: 1;\r\n}\r\n\r\n.bx-box:hover {\r\n  background-color: white;\r\n  border-radius: 8px;\r\n}\r\n.bx-box:hover .bx {\r\n  fill: $menu-color;\r\n}\r\n.bx-box:hover .bx-text {\r\n  color: $menu-color;\r\n}\r\n.main-content {\r\n  min-width: calc(100vw - clamp(220px, 40vw, 300px));\r\n  width: calc(100vw - 65px);\r\n\r\n  z-index: 1;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: $header;\r\n  color: white;\r\n  height: 150px;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n.content-head {\r\n  font-size: 0.85rem;\r\n  padding-top: 30px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.today-headline {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 50px;\r\n}\r\n.task {\r\n  display: flex;\r\n  margin-left: 20px;\r\n  border-left: 10px solid $task-status;\r\n  width: 90%;\r\n  color: white;\r\n  background-color: $header;\r\n  font-family: \"Lato\", sans-serif;\r\n  height: 90px;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n}\r\n.task-name {\r\n  border-right: 1px solid black;\r\n  width: 28%;\r\n  min-width: 230px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-owner {\r\n  border-right: 1px solid black;\r\n  width: 15%;\r\n  min-width: 120px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 5px;\r\n}\r\n.task-status {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  min-width: 120px;\r\n  background-color: $task-status;\r\n}\r\n.task-priority {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n\r\n  background-color: $task-priority;\r\n}\r\n.task-tags {\r\n  border-right: 1px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n\r\n  color: $task-tags;\r\n  padding-left: 5px;\r\n}\r\n.task-date {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 12%;\r\n  min-width: 110px;\r\n}\r\n.today {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (max-width: 970px) {\r\n  .task {\r\n    flex-direction: column;\r\n  }\r\n  .task-name,\r\n  .task-owner,\r\n  .task-status,\r\n  .task-priority,\r\n  .task-tags,\r\n  .task-date {\r\n    width: 100%;\r\n    border: none;\r\n    justify-content: center;\r\n    height: 70px;\r\n    min-width: 200px;\r\n  }\r\n  .task {\r\n    height: fit-content;\r\n    min-width: 200px;\r\n    border: 3px solid $task-status;\r\n  }\r\n  .header {\r\n    height: fit-content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! boxicons */ "./node_modules/boxicons/dist/boxicons.js");
/* harmony import */ var boxicons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(boxicons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
console.log("hey");


const menu = document.getElementById("menu");
const tab = document.getElementById("tab");

menu.addEventListener("click", function () {
  tab.classList.toggle("sidebar-active");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxZQUFZLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0scUdBQXFHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxvQ0FBb0MsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxzQkFBc0IsT0FBTyxpQkFBaUIsZ0JBQWdCLDZCQUE2QixLQUFLLFVBQVUsb0JBQW9CLG9CQUFvQiwyQkFBMkIsd0NBQXdDLEtBQUssMEJBQTBCLHlCQUF5QiwwQkFBMEIsNEJBQTRCLHdCQUF3QixxQkFBcUIsUUFBUSw0QkFBNEIsS0FBSyxjQUFjLG9CQUFvQixvQ0FBb0Msb0JBQW9CLDZCQUE2QixnQkFBZ0IsZ0NBQWdDLHdDQUF3QyxrQkFBa0IseUJBQXlCLGFBQWEsY0FBYyxLQUFLLFNBQVMsdUJBQXVCLEtBQUssV0FBVyx1QkFBdUIsc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixvQkFBb0IsOEJBQThCLHNCQUFzQixLQUFLLGVBQWUsb0JBQW9CLDJCQUEyQix5QkFBeUIsb0JBQW9CLEtBQUssZ0JBQWdCLHdCQUF3QixvQkFBb0Isd0JBQXdCLHNCQUFzQixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQiwwQkFBMEIsS0FBSyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLG9CQUFvQix3QkFBd0Isc0JBQXNCLGlCQUFpQixLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssY0FBYyx3QkFBd0IseUJBQXlCLHVCQUF1QixLQUFLLGdHQUFnRyxvQkFBb0IsS0FBSyw2QkFBNkIsb0JBQW9CLHlCQUF5QixhQUFhLEtBQUsscUNBQXFDLDhCQUE4QiwwQkFBMEIsS0FBSyxnQ0FBZ0MsYUFBYSxLQUFLLG1DQUFtQyxnQkFBZ0IsS0FBSyxnQ0FBZ0Msb0JBQW9CLEtBQUssK0JBQStCLDhCQUE4QixLQUFLLHFCQUFxQixrQkFBa0IsaUJBQWlCLEtBQUssdUJBQXVCLDhCQUE4Qix5QkFBeUIsS0FBSyx1QkFBdUIsd0JBQXdCLEtBQUssNEJBQTRCLHlCQUF5QixLQUFLLG1CQUFtQix5REFBeUQsZ0NBQWdDLHFCQUFxQixLQUFLLGlCQUFpQixrQkFBa0IsNkJBQTZCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGdDQUFnQyxtQkFBbUIsb0JBQW9CLHdDQUF3QyxLQUFLLG1CQUFtQix5QkFBeUIsd0JBQXdCLHNCQUFzQixLQUFLLGtCQUFrQixrQkFBa0Isb0JBQW9CLDZCQUE2QixLQUFLLHlCQUF5QixrQkFBa0Isb0JBQW9CLDhCQUE4Qix1QkFBdUIsMEJBQTBCLEtBQUssV0FBVyxvQkFBb0Isd0JBQXdCLDJDQUEyQyxpQkFBaUIsbUJBQW1CLGdDQUFnQyx3Q0FBd0MsbUJBQW1CLDJDQUEyQyx1QkFBdUIsd0JBQXdCLEtBQUssZ0JBQWdCLG9DQUFvQyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLEtBQUssaUJBQWlCLG9DQUFvQyxpQkFBaUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLEtBQUssa0JBQWtCLG9DQUFvQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixpQkFBaUIsdUJBQXVCLHFDQUFxQyxLQUFLLG9CQUFvQixvQ0FBb0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsaUJBQWlCLHVCQUF1QiwyQ0FBMkMsS0FBSyxnQkFBZ0Isb0NBQW9DLG9CQUFvQiwwQkFBMEIsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLEtBQUssZ0JBQWdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGlCQUFpQix1QkFBdUIsS0FBSyxZQUFZLG9CQUFvQiw2QkFBNkIsS0FBSyxtQ0FBbUMsYUFBYSwrQkFBK0IsT0FBTyw4R0FBOEcsb0JBQW9CLHFCQUFxQixnQ0FBZ0MscUJBQXFCLHlCQUF5QixPQUFPLGFBQWEsNEJBQTRCLHlCQUF5Qix1Q0FBdUMsT0FBTyxlQUFlLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCO0FBQzV5UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUM3UzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLDJIQUFPLFVBQVUsMkhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNrQjtBQUNVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2JveGljb25zL2Rpc3QvYm94aWNvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUsbixyLG8pe2lmKFwiY3VzdG9tRWxlbWVudHNcImluIG4pbygpO2Vsc2V7aWYobi5BV0FJVElOR19XRUJfQ09NUE9ORU5UU19QT0xZRklMTClyZXR1cm4gdm9pZCBuLkFXQUlUSU5HX1dFQl9DT01QT05FTlRTX1BPTFlGSUxMLnRoZW4obyk7dmFyIGE9bi5BV0FJVElOR19XRUJfQ09NUE9ORU5UU19QT0xZRklMTD1mKCk7YS50aGVuKG8pO3ZhciBpPW4uV0VCX0NPTVBPTkVOVFNfUE9MWUZJTEx8fFwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvd2ViY29tcG9uZW50c2pzLzIuMC4yL3dlYmNvbXBvbmVudHMtYnVuZGxlLmpzXCIscz1uLkVTNl9DT1JFX1BPTFlGSUxMfHxcIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2NvcmUtanMvMi41LjMvY29yZS5taW4uanNcIjtcIlByb21pc2VcImluIG4/YyhpKS50aGVuKChmdW5jdGlvbigpe2EuaXNEb25lPSEwLGEuZXhlYygpfSkpOmMocykudGhlbigoZnVuY3Rpb24oKXtjKGkpLnRoZW4oKGZ1bmN0aW9uKCl7YS5pc0RvbmU9ITAsYS5leGVjKCl9KSl9KSl9ZnVuY3Rpb24gZigpe3ZhciB0PVtdO3JldHVybiB0LmlzRG9uZT0hMSx0LmV4ZWM9ZnVuY3Rpb24oKXt0LnNwbGljZSgwKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0KCl9KSl9LHQudGhlbj1mdW5jdGlvbihlKXtyZXR1cm4gdC5pc0RvbmU/ZSgpOnQucHVzaChlKSx0fSx0fWZ1bmN0aW9uIGModCl7dmFyIGU9ZigpLG49ci5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3JldHVybiBuLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIixuLnJlYWR5U3RhdGU/bi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtcImxvYWRlZFwiIT1uLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9bi5yZWFkeVN0YXRlfHwobi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxlLmlzRG9uZT0hMCxlLmV4ZWMoKSl9Om4ub25sb2FkPWZ1bmN0aW9uKCl7ZS5pc0RvbmU9ITAsZS5leGVjKCl9LG4uc3JjPXQsci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi50aGVuPWUudGhlbixufX0oMCwwLHdpbmRvdyxkb2N1bWVudCwoZnVuY3Rpb24oKXt2YXIgdCxlO3Q9d2luZG93LGU9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz01KX0oW2Z1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKChmdW5jdGlvbihlKXt2YXIgbj1mdW5jdGlvbih0LGUpe3ZhciBuLHI9dFsxXXx8XCJcIixvPXRbM107aWYoIW8pcmV0dXJuIHI7aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSl7dmFyIGE9KG49byxcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKStcIiAqL1wiKSxpPW8uc291cmNlcy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIitvLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpO3JldHVybltyXS5jb25jYXQoaSkuY29uY2F0KFthXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX0oZSx0KTtyZXR1cm4gZVsyXT9cIkBtZWRpYSBcIitlWzJdK1wie1wiK24rXCJ9XCI6bn0pKS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIHI9e30sbz0wO288dGhpcy5sZW5ndGg7bysrKXt2YXIgYT10aGlzW29dWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBhJiYoclthXT0hMCl9Zm9yKG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIGk9dFtvXTtcIm51bWJlclwiPT10eXBlb2YgaVswXSYmcltpWzBdXXx8KG4mJiFpWzJdP2lbMl09bjpuJiYoaVsyXT1cIihcIitpWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChpKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMyk7dC5leHBvcnRzPVwic3RyaW5nXCI9PXR5cGVvZiByP3I6ci50b1N0cmluZygpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KTt0LmV4cG9ydHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/cjpyLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKHQsZSxuKXsodC5leHBvcnRzPW4oMCkoITEpKS5wdXNoKFt0LmksXCJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fUBrZXlmcmFtZXMgc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBidXJzdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjUpO3RyYW5zZm9ybTpzY2FsZSgxLjUpO29wYWNpdHk6MH19QGtleWZyYW1lcyBidXJzdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjUpO3RyYW5zZm9ybTpzY2FsZSgxLjUpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZsYXNoaW5nezAle29wYWNpdHk6MX00NSV7b3BhY2l0eTowfTkwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgZmxhc2hpbmd7MCV7b3BhY2l0eToxfTQ1JXtvcGFjaXR5OjB9OTAle29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLWxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTtvcGFjaXR5OjB9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlLXJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlLXJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtdXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtvcGFjaXR5OjF9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS11cHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtZG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO29wYWNpdHk6MX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmFkZS1kb3duezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7b3BhY2l0eToxfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDIwcHgpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwuOTUsLjk1KSByb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyl9MzAlLDUwJSw3MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoMTBkZWcpO3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTEwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19QGtleWZyYW1lcyB0YWRhezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTEwJSwyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsLjk1LC45NSkgcm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LC45NSwuOTUpIHJvdGF0ZSgtMTBkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDEwZGVnKTt0cmFuc2Zvcm06c2NhbGVYKDEpIHJvdGF0ZSgxMGRlZyl9NDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX0uYngtc3BpbiwuYngtc3Bpbi1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGV9LmJ4LXRhZGEsLmJ4LXRhZGEtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246dGFkYSAxLjVzIGVhc2UgaW5maW5pdGU7YW5pbWF0aW9uOnRhZGEgMS41cyBlYXNlIGluZmluaXRlfS5ieC1mbGFzaGluZywuYngtZmxhc2hpbmctaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246Zmxhc2hpbmcgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZsYXNoaW5nIDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1idXJzdCwuYngtYnVyc3QtaG92ZXI6aG92ZXJ7LXdlYmtpdC1hbmltYXRpb246YnVyc3QgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmJ1cnN0IDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLXVwLC5ieC1mYWRlLXVwLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtdXAgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtdXAgMS41cyBpbmZpbml0ZSBsaW5lYXJ9LmJ4LWZhZGUtZG93biwuYngtZmFkZS1kb3duLWhvdmVyOmhvdmVyey13ZWJraXQtYW5pbWF0aW9uOmZhZGUtZG93biAxLjVzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmFkZS1kb3duIDEuNXMgaW5maW5pdGUgbGluZWFyfS5ieC1mYWRlLWxlZnQsLmJ4LWZhZGUtbGVmdC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLWxlZnQgMS41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhZGUtbGVmdCAxLjVzIGluZmluaXRlIGxpbmVhcn0uYngtZmFkZS1yaWdodCwuYngtZmFkZS1yaWdodC1ob3Zlcjpob3Zlcnstd2Via2l0LWFuaW1hdGlvbjpmYWRlLXJpZ2h0IDEuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpmYWRlLXJpZ2h0IDEuNXMgaW5maW5pdGUgbGluZWFyfVwiLFwiXCJdKX0sZnVuY3Rpb24odCxlLG4peyh0LmV4cG9ydHM9bigwKSghMSkpLnB1c2goW3QuaSwnLmJ4LXJvdGF0ZS05MHt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcIn0uYngtcm90YXRlLTE4MHt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXCJ9LmJ4LXJvdGF0ZS0yNzB7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVwifS5ieC1mbGlwLWhvcml6b250YWx7dHJhbnNmb3JtOnNjYWxlWCgtMSk7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVwifS5ieC1mbGlwLXZlcnRpY2Fse3RyYW5zZm9ybTpzY2FsZVkoLTEpOy1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcIn0nLFwiXCJdKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKSxuLmQoZSxcIkJveEljb25FbGVtZW50XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGd9KSk7dmFyIHIsbyxhLGkscz1uKDEpLGY9bi5uKHMpLGM9bigyKSxsPW4ubihjKSxtPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9LHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24oZSxuLHIpe3JldHVybiBuJiZ0KGUucHJvdG90eXBlLG4pLHImJnQoZSxyKSxlfX0oKSxkPShvPShyPU9iamVjdCkuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX30sYT1yLnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9LGk9XCJvYmplY3RcIj09PShcInVuZGVmaW5lZFwiPT10eXBlb2YgUmVmbGVjdD9cInVuZGVmaW5lZFwiOm0oUmVmbGVjdCkpP1JlZmxlY3QuY29uc3RydWN0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcixvPVtudWxsXTtyZXR1cm4gby5wdXNoLmFwcGx5KG8sZSkscj10LmJpbmQuYXBwbHkodCxvKSxhKG5ldyByLG4ucHJvdG90eXBlKX0sZnVuY3Rpb24odCl7dmFyIGU9byh0KTtyZXR1cm4gYSh0LGEoKGZ1bmN0aW9uKCl7cmV0dXJuIGkoZSxhcmd1bWVudHMsbyh0aGlzKS5jb25zdHJ1Y3Rvcil9KSxlKSl9KSxwPXdpbmRvdyxiPXt9LHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGg9ZnVuY3Rpb24oKXtyZXR1cm4hIXAuU2hhZHlDU1N9O3kuaW5uZXJIVE1MPSdcXG48c3R5bGU+XFxuOmhvc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbml0aWFsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG46aG9zdChbc2l6ZT14c10pIHtcXG4gICAgd2lkdGg6IDAuOHJlbTtcXG4gICAgaGVpZ2h0OiAwLjhyZW07XFxufVxcbjpob3N0KFtzaXplPXNtXSkge1xcbiAgICB3aWR0aDogMS41NXJlbTtcXG4gICAgaGVpZ2h0OiAxLjU1cmVtO1xcbn1cXG46aG9zdChbc2l6ZT1tZF0pIHtcXG4gICAgd2lkdGg6IDIuMjVyZW07XFxuICAgIGhlaWdodDogMi4yNXJlbTtcXG59XFxuOmhvc3QoW3NpemU9bGddKSB7XFxuICAgIHdpZHRoOiAzLjByZW07XFxuICAgIGhlaWdodDogMy4wcmVtO1xcbn1cXG5cXG46aG9zdChbc2l6ZV06bm90KFtzaXplPVwiXCJdKTpub3QoW3NpemU9eHNdKTpub3QoW3NpemU9c21dKTpub3QoW3NpemU9bWRdKTpub3QoW3NpemU9bGddKSkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG46aG9zdChbcHVsbD1sZWZ0XSkgI2ljb24ge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAuM2VtIWltcG9ydGFudDtcXG59XFxuOmhvc3QoW3B1bGw9cmlnaHRdKSAjaWNvbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW0haW1wb3J0YW50O1xcbn1cXG46aG9zdChbYm9yZGVyPXNxdWFyZV0pICNpY29uIHtcXG4gICAgcGFkZGluZzogLjI1ZW07XFxuICAgIGJvcmRlcjogLjA3ZW0gc29saWQgcmdiYSgwLDAsMCwuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcbn1cXG46aG9zdChbYm9yZGVyPWNpcmNsZV0pICNpY29uIHtcXG4gICAgcGFkZGluZzogLjI1ZW07XFxuICAgIGJvcmRlcjogLjA3ZW0gc29saWQgcmdiYSgwLDAsMCwuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuI2ljb24sXFxuc3ZnIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaWNvbiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSBcXG4nK2YuYStcIlxcblwiK2wuYSsnXFxuPC9zdHlsZT5cXG48ZGl2IGlkPVwiaWNvblwiPjwvZGl2Pic7dmFyIGc9ZChmdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKTt2YXIgdD1mdW5jdGlvbih0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/dDplfSh0aGlzLChlLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpKS5jYWxsKHRoaXMpKTtyZXR1cm4gdC4kdWk9dC5hdHRhY2hTaGFkb3coe21vZGU6XCJvcGVuXCJ9KSx0LiR1aS5hcHBlbmRDaGlsZCh0Lm93bmVyRG9jdW1lbnQuaW1wb3J0Tm9kZSh5LmNvbnRlbnQsITApKSxoKCkmJnAuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHQpLHQuX3N0YXRlPXskaWNvbkhvbGRlcjp0LiR1aS5nZXRFbGVtZW50QnlJZChcImljb25cIiksdHlwZTp0LmdldEF0dHJpYnV0ZShcInR5cGVcIil9LHR9cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9KGUsSFRNTEVsZW1lbnQpLHUoZSxudWxsLFt7a2V5OlwiZ2V0SWNvblN2Z1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5jZG5VcmwrXCIvcmVndWxhci9ieC1cIit0K1wiLnN2Z1wiO3JldHVyblwic29saWRcIj09PWU/bj10aGlzLmNkblVybCtcIi9zb2xpZC9ieHMtXCIrdCtcIi5zdmdcIjpcImxvZ29cIj09PWUmJihuPXRoaXMuY2RuVXJsK1wiL2xvZ29zL2J4bC1cIit0K1wiLnN2Z1wiKSxuJiZiW25dfHwoYltuXT1uZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxlKXt2YXIgcj1uZXcgWE1MSHR0cFJlcXVlc3Q7ci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe3RoaXMuc3RhdHVzPDIwMHx8dGhpcy5zdGF0dXM+PTMwMD9lKG5ldyBFcnJvcih0aGlzLnN0YXR1cytcIiBcIit0aGlzLnJlc3BvbnNlVGV4dCkpOnQodGhpcy5yZXNwb25zZVRleHQpfSkpLHIub25lcnJvcj1lLHIub25hYm9ydD1lLHIub3BlbihcIkdFVFwiLG4pLHIuc2VuZCgpfSkpKSxiW25dfX0se2tleTpcImRlZmluZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3Q9dHx8dGhpcy50YWdOYW1lLGgoKSYmcC5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGUoeSx0KSxjdXN0b21FbGVtZW50cy5kZWZpbmUodCx0aGlzKX19LHtrZXk6XCJjZG5VcmxcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIi8vdW5wa2cuY29tL2JveGljb25zQDIuMS40L3N2Z1wifX0se2tleTpcInRhZ05hbWVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cImJveC1pY29uXCJ9fSx7a2V5Olwib2JzZXJ2ZWRBdHRyaWJ1dGVzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuW1widHlwZVwiLFwibmFtZVwiLFwiY29sb3JcIixcInNpemVcIixcInJvdGF0ZVwiLFwiZmxpcFwiLFwiYW5pbWF0aW9uXCIsXCJib3JkZXJcIixcInB1bGxcIl19fV0pLHUoZSxbe2tleTpcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10aGlzLl9zdGF0ZS4kaWNvbkhvbGRlcjtzd2l0Y2godCl7Y2FzZVwidHlwZVwiOiFmdW5jdGlvbih0LGUsbil7dmFyIHI9dC5fc3RhdGU7ci4kaWNvbkhvbGRlci50ZXh0Q29udGVudD1cIlwiLHIudHlwZSYmKHIudHlwZT1udWxsKSxyLnR5cGU9IW58fFwic29saWRcIiE9PW4mJlwibG9nb1wiIT09bj9cInJlZ3VsYXJcIjpuLHZvaWQgMCE9PXIuY3VycmVudE5hbWUmJnQuY29uc3RydWN0b3IuZ2V0SWNvblN2ZyhyLmN1cnJlbnROYW1lLHIudHlwZSkudGhlbigoZnVuY3Rpb24odCl7ci50eXBlPT09biYmKHIuJGljb25Ib2xkZXIuaW5uZXJIVE1MPXQpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgaWNvbjogXCIrci5jdXJyZW50TmFtZStcIlxcblwiK3QpfSkpfSh0aGlzLDAsbik7YnJlYWs7Y2FzZVwibmFtZVwiOiFmdW5jdGlvbih0LGUsbil7dmFyIHI9dC5fc3RhdGU7ci5jdXJyZW50TmFtZT1uLHIuJGljb25Ib2xkZXIudGV4dENvbnRlbnQ9XCJcIixuJiZ2b2lkIDAhPT1yLnR5cGUmJnQuY29uc3RydWN0b3IuZ2V0SWNvblN2ZyhuLHIudHlwZSkudGhlbigoZnVuY3Rpb24odCl7ci5jdXJyZW50TmFtZT09PW4mJihyLiRpY29uSG9sZGVyLmlubmVySFRNTD10KX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIGljb246IFwiK24rXCJcXG5cIit0KX0pKX0odGhpcywwLG4pO2JyZWFrO2Nhc2VcImNvbG9yXCI6ci5zdHlsZS5maWxsPW58fFwiXCI7YnJlYWs7Y2FzZVwic2l6ZVwiOiFmdW5jdGlvbih0LGUsbil7dmFyIHI9dC5fc3RhdGU7ci5zaXplJiYoci4kaWNvbkhvbGRlci5zdHlsZS53aWR0aD1yLiRpY29uSG9sZGVyLnN0eWxlLmhlaWdodD1cIlwiLHIuc2l6ZT1yLnNpemVUeXBlPW51bGwpLG4mJiEvXih4c3xzbXxtZHxsZykkLy50ZXN0KHIuc2l6ZSkmJihyLnNpemU9bi50cmltKCksci4kaWNvbkhvbGRlci5zdHlsZS53aWR0aD1yLiRpY29uSG9sZGVyLnN0eWxlLmhlaWdodD1yLnNpemUpfSh0aGlzLDAsbik7YnJlYWs7Y2FzZVwicm90YXRlXCI6ZSYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYngtcm90YXRlLVwiK2UpLG4mJnIuY2xhc3NMaXN0LmFkZChcImJ4LXJvdGF0ZS1cIituKTticmVhaztjYXNlXCJmbGlwXCI6ZSYmci5jbGFzc0xpc3QucmVtb3ZlKFwiYngtZmxpcC1cIitlKSxuJiZyLmNsYXNzTGlzdC5hZGQoXCJieC1mbGlwLVwiK24pO2JyZWFrO2Nhc2VcImFuaW1hdGlvblwiOmUmJnIuY2xhc3NMaXN0LnJlbW92ZShcImJ4LVwiK2UpLG4mJnIuY2xhc3NMaXN0LmFkZChcImJ4LVwiK24pfX19LHtrZXk6XCJjb25uZWN0ZWRDYWxsYmFja1wiLHZhbHVlOmZ1bmN0aW9uKCl7aCgpJiZwLlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0aGlzKX19XSksZX0oKSk7ZS5kZWZhdWx0PWcsZy5kZWZpbmUoKX1dKX0sXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5Cb3hJY29uRWxlbWVudD1lKCk6dC5Cb3hJY29uRWxlbWVudD1lKCl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3hpY29ucy5qcy5tYXAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnRhYiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI2Mjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5ieCB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4ubWVudSB7XG4gIGZpbGw6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LWhlYWRsaW5lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubWVudS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudS11c2VyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubWVudS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzNXB4O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxOHB4O1xufVxuXG4ubWVudS1tYWluLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ieC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5ieC1ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmJ4LXRleHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5ieC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAuYngtdGV4dCxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1oZWFkbGluZSxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS11c2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5ieC1ib3gge1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGdhcDogMDtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5tZW51LW1haW4tbGlzdCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtbGlzdCB7XG4gIGdhcDogMDtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5tZW51LWNvbnRlbnQge1xuICBnYXA6IDE1cHg7XG59XG5cbi5zaWRlYmFyLWFjdGl2ZSAubWVudS11c2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItYWN0aXZlIC5tZW51LWJveCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2lkZWJhci1hY3RpdmUge1xuICB3aWR0aDogNjVweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmJ4LWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5ieC1ib3g6aG92ZXIgLmJ4IHtcbiAgZmlsbDogIzI1MjYyOTtcbn1cblxuLmJ4LWJveDpob3ZlciAuYngtdGV4dCB7XG4gIGNvbG9yOiAjMjUyNjI5O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gY2xhbXAoMjIwcHgsIDQwdncsIDMwMHB4KSk7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjVweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmQyZjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50LWhlYWQge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RheS1oZWFkbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZGQwMDtcbiAgd2lkdGg6IDkwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZDJmO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogOTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnRhc2stbmFtZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMjglO1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnRhc2stb3duZXIge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi50YXNrLXN0YXR1cyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQwMDtcbn1cblxuLnRhc2stcHJpb3JpdHkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMiU7XG4gIG1pbi13aWR0aDogMTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjJjYmY7XG59XG5cbi50YXNrLXRhZ3Mge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyJTtcbiAgbWluLXdpZHRoOiAxMTBweDtcbiAgY29sb3I6ICNiM2U5Yzc7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGFzay1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMiU7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG5cbi50b2RheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xuICAudGFzayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGFzay1uYW1lLFxuICAudGFzay1vd25lcixcbiAgLnRhc2stc3RhdHVzLFxuICAudGFzay1wcmlvcml0eSxcbiAgLnRhc2stdGFncyxcbiAgLnRhc2stZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9XG4gIC50YXNrIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZGQwMDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFVBQUE7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QkFBQTtFQUVBLHlCQWpOYztBQXFPaEI7O0FBbEJBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQXpOVTtFQTBOVixpQkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFzQkY7O0FBbkJBO0VBQ0U7SUFDRSxzQkFBQTtFQXNCRjtFQXBCQTs7Ozs7O0lBTUUsV0FBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQXNCRjtFQXBCQTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQXNCRjtFQXBCQTtJQUNFLG1CQUFBO0VBc0JGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiRtZW51LXRleHQ6IHdoaXRlO1xcclxcbiRtZW51LWNvbG9yOiAjMjUyNjI5O1xcclxcbiR0YXNrLXN0YXR1czogI2ZmZGQwMDtcXHJcXG4kdGFzay1wcmlvcml0eTogIzdiMmNiZjtcXHJcXG4kdGFzay10YWdzOiAjYjNlOWM3O1xcclxcbiRoZWFkZXI6ICMyYTJkMmY7XFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi5ieCB7XFxyXFxuICBmaWxsOiAkbWVudS10ZXh0O1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICBmaWxsOiAkbWVudS10ZXh0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubWVudS1oZWFkbGluZSB7XFxyXFxuICBjb2xvcjogJG1lbnUtdGV4dDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLm1lbnUtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5tZW51LXVzZXIge1xcclxcbiAgY29sb3I6ICRtZW51LXRleHQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5tZW51LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDM1cHg7XFxyXFxufVxcclxcbi5tZW51LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE4cHg7XFxyXFxufVxcclxcbi5tZW51LW1haW4tbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ieC1ib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuLmJ4LWJveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcbi5ieC10ZXh0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcbi5ieC10ZXh0IHtcXHJcXG4gIGNvbG9yOiAkbWVudS10ZXh0O1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5ieC10ZXh0LFxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1oZWFkbGluZSxcXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtdXNlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLmJ4LWJveCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtbWFpbi1saXN0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNpZGViYXItYWN0aXZlIC5tZW51LWxpc3Qge1xcclxcbiAgZ2FwOiAwO1xcclxcbn1cXHJcXG4uc2lkZWJhci1hY3RpdmUgLm1lbnUtY29udGVudCB7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS11c2VyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSAubWVudS1ib3gge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaWRlYmFyLWFjdGl2ZSB7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5ieC1ib3g6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcbi5ieC1ib3g6aG92ZXIgLmJ4IHtcXHJcXG4gIGZpbGw6ICRtZW51LWNvbG9yO1xcclxcbn1cXHJcXG4uYngtYm94OmhvdmVyIC5ieC10ZXh0IHtcXHJcXG4gIGNvbG9yOiAkbWVudS1jb2xvcjtcXHJcXG59XFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSBjbGFtcCgyMjBweCwgNDB2dywgMzAwcHgpKTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjVweCk7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmNvbnRlbnQtaGVhZCB7XFxyXFxuICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWhlYWRsaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR0YXNrLXN0YXR1cztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogMjglO1xcclxcbiAgbWluLXdpZHRoOiAyMzBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi50YXNrLW93bmVyIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4udGFzay1zdGF0dXMge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1JTtcXHJcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1zdGF0dXM7XFxyXFxufVxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMiU7XFxyXFxuICBtaW4td2lkdGg6IDExMHB4O1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhc2stcHJpb3JpdHk7XFxyXFxufVxcclxcbi50YXNrLXRhZ3Mge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMiU7XFxyXFxuICBtaW4td2lkdGg6IDExMHB4O1xcclxcblxcclxcbiAgY29sb3I6ICR0YXNrLXRhZ3M7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLnRhc2stZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyJTtcXHJcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxyXFxufVxcclxcbi50b2RheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XFxyXFxuICAudGFzayB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAudGFzay1uYW1lLFxcclxcbiAgLnRhc2stb3duZXIsXFxyXFxuICAudGFzay1zdGF0dXMsXFxyXFxuICAudGFzay1wcmlvcml0eSxcXHJcXG4gIC50YXNrLXRhZ3MsXFxyXFxuICAudGFzay1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgJHRhc2stc3RhdHVzO1xcclxcbiAgfVxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImNvbnNvbGUubG9nKFwiaGV5XCIpO1xyXG5pbXBvcnQgXCJib3hpY29uc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIjtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJcIik7XHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGFiLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlYmFyLWFjdGl2ZVwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==