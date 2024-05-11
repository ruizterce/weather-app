(()=>{"use strict";var __webpack_modules__={208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),a=t.n(o),r=t(314),c=t.n(r)()(a());c.push([n.id,"body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    width: fit-content;\n    margin: 20px auto;\n    padding: 20px 60px;\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.author {\n    font-size: 0.9rem;\n    color: #333;\n    background-color: #fff;\n    position: fixed;\n    padding: 5px;\n    border-radius: 10px 0px 0px 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    right: 0;\n    bottom: 10px;\n\n    text-decoration: none;\n}\n\n.location {\n    width: 120px;\n    text-align: center;\n    font-weight: bold;\n    padding: 5px 10px;\n    border: 2px solid #f2f2f2;\n    border-radius: 5px;\n    font-size: 25px;\n    color: #333333;\n    transition: all 0.3s ease;\n    z-index: 3;\n}\n\n.location:hover {\n    border-color: #666666;\n}\n\n.location:focus {\n    outline: none;\n    border-color: #333333;\n    box-shadow: 0 0 0 2px #333333;\n}\n\n.day {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh2 {\n    margin: 0px;\n    padding: 10px 0 0 0;\n}\n\n.location-info {\n    color: #333;\n    background-color: #fff;\n    text-align: center;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n}\n\n.date {\n    width: 100%;\n    color: #333;\n    background-color: #fff;\n    text-align: center;\n    position: sticky;\n    top: 2.2rem;\n    z-index: 1;\n}\n\n.weather-table {\n    width: calc(100% - 5px);\n    border-collapse: collapse;\n    border-radius: 5px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.weather-table th,\n.weather-table td {\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.weather-table th {\n    background-color: #f9f9f9;\n    color: #333;\n    padding: 10px;\n    position: sticky;\n    top: 4.5rem;\n}\n\n.weather-table td {\n    background-color: #fff;\n    padding: 0 10px;\n}\n\n.weather-table tr:nth-child(even) td {\n    background-color: #f2f2f2;\n}\n\n.condition-icon {\n    height: 40px;\n    padding: 0 10px;\n}\n\n.weather-table .temp {\n    color: #FF5722;\n}\n\n.weather-table .humidity {\n    color: #2196F3;\n}\n\n.weather-table .condition {\n    color: #9C27B0;\n}\n\n.weather-table .wind {\n    color: #4CAF50;\n}\n\n.weather-table .rain-chance {\n    color: #FFC107;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,gCAAgC;IAChC,uCAAuC;IACvC,QAAQ;IACR,YAAY;;IAEZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB",sourcesContent:["body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    width: fit-content;\n    margin: 20px auto;\n    padding: 20px 60px;\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.author {\n    font-size: 0.9rem;\n    color: #333;\n    background-color: #fff;\n    position: fixed;\n    padding: 5px;\n    border-radius: 10px 0px 0px 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    right: 0;\n    bottom: 10px;\n\n    text-decoration: none;\n}\n\n.location {\n    width: 120px;\n    text-align: center;\n    font-weight: bold;\n    padding: 5px 10px;\n    border: 2px solid #f2f2f2;\n    border-radius: 5px;\n    font-size: 25px;\n    color: #333333;\n    transition: all 0.3s ease;\n    z-index: 3;\n}\n\n.location:hover {\n    border-color: #666666;\n}\n\n.location:focus {\n    outline: none;\n    border-color: #333333;\n    box-shadow: 0 0 0 2px #333333;\n}\n\n.day {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh2 {\n    margin: 0px;\n    padding: 10px 0 0 0;\n}\n\n.location-info {\n    color: #333;\n    background-color: #fff;\n    text-align: center;\n    position: sticky;\n    top: -1px;\n    z-index: 2;\n}\n\n.date {\n    width: 100%;\n    color: #333;\n    background-color: #fff;\n    text-align: center;\n    position: sticky;\n    top: 2.2rem;\n    z-index: 1;\n}\n\n.weather-table {\n    width: calc(100% - 5px);\n    border-collapse: collapse;\n    border-radius: 5px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.weather-table th,\n.weather-table td {\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.weather-table th {\n    background-color: #f9f9f9;\n    color: #333;\n    padding: 10px;\n    position: sticky;\n    top: 4.5rem;\n}\n\n.weather-table td {\n    background-color: #fff;\n    padding: 0 10px;\n}\n\n.weather-table tr:nth-child(even) td {\n    background-color: #f2f2f2;\n}\n\n.condition-icon {\n    height: 40px;\n    padding: 0 10px;\n}\n\n.weather-table .temp {\n    color: #FF5722;\n}\n\n.weather-table .humidity {\n    color: #2196F3;\n}\n\n.weather-table .condition {\n    color: #9C27B0;\n}\n\n.weather-table .wind {\n    color: #4CAF50;\n}\n\n.weather-table .rain-chance {\n    color: #FFC107;\n}"],sourceRoot:""}]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(c[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},c=[],i=0;i<n.length;i++){var A=n[i],d=o.base?A[0]+o.base:A[0],l=r[d]||0,s="".concat(d," ").concat(l);r[d]=l+1;var p=t(s),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var _=a(u,o);o.byIndex=i,e.splice(i,0,{identifier:s,updater:_,references:1})}c.push(s)}return c}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var c=0;c<r.length;c++){var i=t(r[c]);e[i].references--}for(var A=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=A}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},978:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>initWeatherApp});var _processWeatherData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(657);function initWeatherApp(containerElement){const locationElement=document.createElement("input");locationElement.className="location";const startingLocation=["Tokyo","New York","Madrid","Shanghai","Moscow","Toronto","Melbourne","Berlin","Seoul","Brussels","Sydney","Washington","Beijing","Chicago","Los Angeles","Singapore","Hong Kong","Paris","London"];locationElement.value=startingLocation[Math.floor(Math.random()*startingLocation.length)],containerElement.appendChild(locationElement),displayWeatherData(containerElement,locationElement.value),locationElement.style.width=eval(locationElement.value.length+1)+"ch";const authorElement=document.createElement("a");authorElement.classList.add("author"),authorElement.textContent="@ruizterce",authorElement.href="https://github.com/ruizterce",containerElement.appendChild(authorElement),locationElement.addEventListener("focus",(()=>{locationElement.style.width="70vh",locationElement.select()})),locationElement.addEventListener("blur",(()=>{displayWeatherData(containerElement,locationElement.value),locationElement.style.width=eval(locationElement.value.length+1)+"ch"})),locationElement.addEventListener("keydown",(n=>{"Enter"===n.key&&locationElement.blur()}))}async function displayWeatherData(n,e){try{document.querySelector(".forecast")&&document.querySelector(".forecast").remove(),document.querySelector(".error")&&document.querySelector(".error").remove();const t=document.createElement("div");t.className="forecast";const o=await(0,_processWeatherData__WEBPACK_IMPORTED_MODULE_0__.A)(e),a=document.createElement("h2");a.classList.add("location-info"),a.textContent=o.location.name+", "+(o.location.region?o.location.region+", ":"")+o.location.country,a.addEventListener("click",(()=>{document.querySelector(".location").focus()})),t.appendChild(a),o.forecast.forecastday.forEach((n=>{const e=document.createElement("div");e.classList.add("day");const o=document.createElement("h2");o.classList.add("date"),o.textContent=n.date,e.appendChild(o);const a=document.createElement("table");a.classList.add("weather-table");const r=document.createElement("tr"),c=["hour","temp","humidity","condition","wind","rain-chance"];["","Hour","Temperature","Humidity","Condition","Wind","Rain Chance"].forEach(((n,e)=>{const t=document.createElement("th");t.textContent=n,t.classList.add(c[e-1]),r.appendChild(t)})),a.appendChild(r),n.hour.forEach((n=>{const e=document.createElement("tr"),t=document.createElement("td"),o=document.createElement("img");o.classList.add("condition-icon"),o.src=n.condition.icon,t.appendChild(o),e.appendChild(t);const r=document.createElement("td"),c=new Date(n.time);r.textContent=c.getHours()+":00",e.appendChild(r);const i=document.createElement("td");i.classList.add("temp"),i.textContent=n.temp_c+"°C",e.appendChild(i);const A=document.createElement("td");A.classList.add("humidity"),A.textContent=n.humidity+"%",e.appendChild(A);const d=document.createElement("td");d.classList.add("condition"),d.textContent=n.condition.text,e.appendChild(d);const l=document.createElement("td");l.classList.add("wind"),l.textContent=n.wind_kph+" k/h "+n.wind_dir,e.appendChild(l);const s=document.createElement("td");s.classList.add("rain-chance"),s.textContent=n.chance_of_rain+"%",e.appendChild(s),a.appendChild(e)})),e.appendChild(a),t.appendChild(e)})),n.appendChild(t)}catch{const e="Location's forecast not found. Please check the spelling.",t=document.createElement("div");t.classList.add("error"),t.textContent=e,n.appendChild(t)}}},657:(n,e,t)=>{async function o(n){const e=await async function(n){return(await fetch("https://api.weatherapi.com/v1/forecast.json?key=6bcec4ff459e420085d145709240705&days=3&q="+n,{mode:"cors"})).json()}(n);return{location:e.location,current:e.current,forecast:e.forecast}}t.d(e,{A:()=>o})}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.nc=void 0;var __webpack_exports__={};(()=>{var n=__webpack_require__(978),e=__webpack_require__(72),t=__webpack_require__.n(e),o=__webpack_require__(825),a=__webpack_require__.n(o),r=__webpack_require__(659),c=__webpack_require__.n(r),i=__webpack_require__(56),A=__webpack_require__.n(i),d=__webpack_require__(540),l=__webpack_require__.n(d),s=__webpack_require__(113),p=__webpack_require__.n(s),u=__webpack_require__(208),_={};_.styleTagTransform=p(),_.setAttributes=A(),_.insert=c().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=l(),t()(u.A,_),u.A&&u.A.locals&&u.A.locals;const f=document.querySelector(".container");(0,n.A)(f)})()})();
//# sourceMappingURL=main.js.map