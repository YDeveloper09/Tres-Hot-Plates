/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    font-family: inherit;\r\n}\r\n\r\nbody {\r\n    font-family: \"Open Sans\", sans-serif;\r\n    /* background-image: url(/src/images/food-background-1.jpg); */\r\n    background-repeat: no-repeat;\r\n    background-size:auto;\r\n  }\r\n\r\n\r\n.navbar{\r\n    padding: 1rem 0 1rem 0;\r\n    display: grid;\r\n    width: 100vw;\r\n    height: 10vh;\r\n    grid-template-columns: 1.5fr 3fr 1.5fr;\r\n}\r\n\r\nnav button {\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\nnav span{\r\n  cursor: pointer;\r\n}\r\n\r\nnav button::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #ffce00;\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n\r\nnav button:hover::after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n.logo{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-right:1.25rem;\r\n}\r\n\r\n#imgLogo{\r\n    width: 7vw;\r\n    height: 13vh;\r\n}\r\n\r\n#navlist, .search{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n    gap: 2.5rem;\r\n}\r\n\r\n.hero-container{\r\n    display: grid;\r\n    grid-template-columns: 40% 60%;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n\r\n.hero-title{\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    padding-top: 7rem;\r\n    margin-bottom: 0;\r\n    color: #ffa700;\r\n    text-shadow: 1px 1px #080808;\r\n}\r\n\r\n.hero-subtitle {\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.hero-caption{\r\n    font-size: .75rem;\r\n    font-weight: 50;\r\n    padding: 0;\r\n    margin: .5rem 0 3rem 0;\r\n}\r\n\r\n.hero-img-container{\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.heroImg{\r\n    width: 50vw;\r\n    height: 110vh;\r\n    margin-left:4.5rem;\r\n    filter: drop-shadow(10px 10px 5px #707070);\r\n}\r\n\r\n.fancy-border-radius {\r\n    position: absolute;\r\n    z-index: -1;\r\n    border-radius: 90% 10% 24% 76% / 75% 40% 60% 25%;\r\n    width: 60vw;\r\n    height: 110vh;\r\n    background: #ffce00;\r\n    background: -webkit-linear-gradient(to right,\r\n        #ffde1a,\r\n        #ffce00);\r\n    background: linear-gradient(to right,\r\n    #ffde1a,\r\n    #ffce00);\r\n  }\r\n.gravy{\r\n    position: absolute;\r\n    top: 100vh;\r\n    right: 100vh;\r\n    width: 12vw;\r\n    height: 20vh;\r\n    filter: drop-shadow(10px 10px 5px #707070);\r\n}\r\n\r\n  /* btn */\r\n  .orderBtn {\r\n    display: inline-block;\r\n    transition: all 0.2s ease-in;\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n    color: #090909;\r\n    padding: 0.7em 1.7em;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    border-radius: 0.5em;\r\n    background: #ffde1a;\r\n    border: 1px solid #e8e8e8;\r\n    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;\r\n  }\r\n  \r\n  .orderBtn:active {\r\n    color: #666;\r\n    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;\r\n  }\r\n  \r\n  .orderBtn:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%) scaleY(1) scaleX(1.25);\r\n    top: 100%;\r\n    width: 140%;\r\n    height: 180%;\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n    border-radius: 50%;\r\n    display: block;\r\n    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .orderBtn:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 55%;\r\n    transform: translateX(-50%) scaleY(1) scaleX(1.45);\r\n    top: 180%;\r\n    width: 160%;\r\n    height: 190%;\r\n    background-color: #ffa700;\r\n    border-radius: 50%;\r\n    display: block;\r\n    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .orderBtn:hover {\r\n    color: #ffffff;\r\n    border: 1px solid #ffa700;\r\n  }\r\n  \r\n  .orderBtn:hover:before {\r\n    top: -35%;\r\n    background-color: #ffa700;\r\n    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);\r\n  }\r\n  \r\n  .orderBtn:hover:after {\r\n    top: -45%;\r\n    background-color: #ffa700;\r\n    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);\r\n  }\r\n  /*btn */\r\n\r\n\r\n/* menu container */\r\n.menu-section {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  margin: 3rem 3rem;\r\n}\r\n\r\n.sub-section {\r\n  display: grid;\r\n  grid-template-columns: 2.5fr 1fr 2.5fr;\r\n  margin: 3rem 3rem;\r\n}\r\n\r\n.menu-container{\r\n  display: grid;\r\n  grid-auto-flow: rows;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n/* card */\r\n.card {\r\n  position: relative;\r\n  width: 11.875em;\r\n  height: 16.5em;\r\n  box-shadow: 0px 1px 13px rgba(0,0,0,0.1);\r\n  cursor: pointer;\r\n  transition: all 120ms;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: #ffffff;\r\n  padding: 0.5em;\r\n  padding-bottom: 3.4em;\r\n}\r\n\r\n.card::after {\r\n  content: \"Add to Cart\";\r\n  padding-top: 1.25em;\r\n  padding-left: 1.25em;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -60px;\r\n  background: #ffa700;\r\n  color: #fff;\r\n  height: 2.5em;\r\n  width: 90%;\r\n  transition: all 80ms;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  opacity: 0;\r\n}\r\n\r\n.card .title {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 0.9em;\r\n  position: absolute;\r\n  left: 0.625em;\r\n  bottom: 1.875em;\r\n  font-weight: 400;\r\n  color: #000;\r\n}\r\n\r\n.card .price {\r\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  font-size: 0.9em;\r\n  position: absolute;\r\n  left: 0.625em;\r\n  bottom: 0.625em;\r\n  color: #000;\r\n}\r\n\r\n.card:hover::after {\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.card:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.card:active::after {\r\n  content: \"Added !\";\r\n  height: 3.125em;\r\n}\r\n\r\n.text {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.image {\r\n  background: rgb(241, 241, 241);\r\n  width: 100%;\r\n  height: 95%;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.menuHeader,.caption{\r\n  text-align: center;\r\n  color:#ffa700;\r\n  text-shadow: .5px .5px black;\r\n}\r\n\r\n/* contactUs Form */\r\n\r\n.contactUsContainer{\r\n  margin: 3rem 0 0 7rem;\r\n  display: grid;\r\n  grid-template-columns: 30% 30%;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.button {\r\n  appearance: none;\r\n  font: inherit;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  background-color: #fff;\r\n  box-shadow: 0 15px 30px 0 rgba(0, 125, 171, 0.15);\r\n  border-radius: 10px;\r\n}\r\n\r\n.modal__header {\r\n  padding: 1rem 1.5rem;\r\n  border-bottom: 1px solid #ddd;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.modal__body {\r\n  padding: 1rem 1rem;\r\n}\r\n\r\n.modal__footer {\r\n  padding: 0 1.5rem 1.5rem;\r\n}\r\n\r\n.modal__title {\r\n  font-weight: 700;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: 0.15s ease;\r\n}\r\n\r\n.button--icon {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  background-color: transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.button--icon:focus, .button--icon:hover {\r\n  background-color: #ededed;\r\n}\r\n\r\n.button--primary {\r\n  background-color: #ffde1a;\r\n  color: #FFF;\r\n  padding: 0.75rem 1.25rem;\r\n  border-radius: 0.25rem;\r\n  font-weight: 500;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.button--primary:hover {\r\n  background-color: #ffce00;\r\n}\r\n\r\n.input {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input + .input {\r\n  margin-top: 1.75rem;\r\n}\r\n\r\n.input__label {\r\n  font-weight: 700;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.input__field {\r\n  display: block;\r\n  margin-top: 0.5rem;\r\n  border: 1px solid #DDD;\r\n  border-radius: 0.25rem;\r\n  padding: 0.75rem 0.75rem;\r\n  transition: 0.15s ease;\r\n}\r\n\r\n.input__field:focus {\r\n  outline: none;\r\n  border-color: #007dab;\r\n  box-shadow: 0 0 0 1px #007dab, 0 0 0 4px rgba(0, 125, 171, 0.25);\r\n}\r\n\r\n.input__field--textarea {\r\n  min-height: 100px;\r\n  max-width: 100%;\r\n}\r\n\r\n.input__description {\r\n  font-size: 0.875rem;\r\n  margin-top: 0.5rem;\r\n  color: #8d8d8d;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage.js */ \"./src/loadHomePage.js\");\n/* harmony import */ var _loadContactPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadContactPage.js */ \"./src/loadContactPage.js\");\n/* harmony import */ var _loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenuPage.js */ \"./src/loadMenuPage.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll.js */ \"./src/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  \r\n    \r\n    (0,_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_scroll_js__WEBPACK_IMPORTED_MODULE_4__.initializeScrollReveal)();\r\n    \r\n    const Mode = document.querySelector('.material-symbols-outlined');\r\n    const navbar = document.querySelector('#navlist')\r\n    const modal = document.querySelector('.modal__header');\r\n\r\n    Mode.addEventListener('click', () => {\r\n       if (Mode.innerText == \"light_mode\"){\r\n        Mode.innerText = \"dark_mode\";\r\n        document.body.style.backgroundColor = \"black\";\r\n        document.body.style.color = \"white\";\r\n        const navbarElements = navbar.querySelectorAll('*');\r\n            navbarElements.forEach(element => {\r\n                element.style.color = \"white\";\r\n            });\r\n        modal.style.color = \"black\"\r\n    } else {\r\n        Mode.innerText = \"light_mode\";\r\n        document.body.style.backgroundColor = \"white\";\r\n        document.body.style.color = \"#121212\";\r\n        const navbarElements = navbar.querySelectorAll('*');\r\n            navbarElements.forEach(element => {\r\n                element.style.color = \"#121212\";\r\n            });\r\n    }\r\n       });\r\n\r\n    const headers = [\"Tres Hot Plates\",\"Taste the Sizzle\",\"Crave. Sizzle. Enjoy\",\"Heat Meets Flavor\"];\r\n    let currentIndex = 0;\r\n    let charIndex = 0;\r\n    let typingInterval;\r\n\r\n    function typeHeader() {\r\n        const headerElement = document.querySelector(\".hero-title\");\r\n        if (headerElement) {\r\n            if (charIndex < headers[currentIndex].length) {\r\n                headerElement.textContent += headers[currentIndex].charAt(charIndex);\r\n                charIndex++;\r\n            } else {\r\n                clearInterval(typingInterval);\r\n                setTimeout(() => {\r\n                    charIndex = 0;\r\n                    currentIndex = (currentIndex + 1) % headers.length;\r\n                    headerElement.textContent = '';\r\n                    typingInterval = setInterval(typeHeader, 100); \r\n                }, 1000); \r\n            }\r\n        }\r\n    }\r\n\r\n    typingInterval = setInterval(typeHeader, 100);\r\n    \r\n    const homeButton = document.getElementById('home-button');\r\n    const contactButton = document.getElementById('contact-button');\r\n    const menuButton = document.getElementById('menu-button');\r\n\r\n    homeButton.addEventListener('click', () => {\r\n        (0,_loadHomePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        (0,_scroll_js__WEBPACK_IMPORTED_MODULE_4__.initializeScrollReveal)();\r\n    });\r\n\r\n    contactButton.addEventListener('click', () => {\r\n        (0,_loadContactPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        (0,_scroll_js__WEBPACK_IMPORTED_MODULE_4__.initializeScrollReveal)();\r\n    });\r\n\r\n    menuButton.addEventListener('click', () => {\r\n        (0,_loadMenuPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        (0,_scroll_js__WEBPACK_IMPORTED_MODULE_4__.initializeScrollReveal)();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadContactPage.js":
/*!********************************!*\
  !*** ./src/loadContactPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\r\n    function createElement(tag, className = '', textContent = '') {\r\n      const element = document.createElement(tag);\r\n      if (className) element.className = className;\r\n      if (textContent) element.textContent = textContent;\r\n      return element;\r\n    }\r\n  \r\n    function appendChildren(parent, ...children) {\r\n      children.forEach(child => parent.appendChild(child));\r\n    }\r\n  \r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; // Clear the content\r\n  \r\n    const section = createElement(\"section\", \"hero-section\");\r\n    content.appendChild(section);\r\n  \r\n    const contactUsContainer = createElement(\"div\", \"contactUsContainer\");\r\n    section.appendChild(contactUsContainer);\r\n  \r\n    const contactUsFormContainer = createElement(\"div\", \"contact-Us\");\r\n    const contactImageContainer = createElement(\"div\", \"contactUsHero-container\");\r\n    appendChildren(contactUsContainer, contactUsFormContainer, contactImageContainer);\r\n  \r\n\r\n    const contactHeroImg = createElement(\"img\", \"heroImg\");\r\n    contactHeroImg.src = \"/src/images/contactHero.png\";\r\n    appendChildren(contactImageContainer, contactHeroImg);\r\n\r\n\r\n    const modal = createElement('div', 'modal');\r\n    const modalHeader = createElement('div', 'modal__header');\r\n    const modalTitle = createElement('span', 'modal__title', 'Send us a Message');\r\n    const closeButton = createElement('button', 'button button--icon');\r\n\r\n    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n    svg.setAttribute('width', '24');\r\n    svg.setAttribute('height', '24');\r\n    svg.setAttribute('viewBox', '0 0 24 24');\r\n    appendChildren(closeButton, svg);\r\n\r\n    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n    path1.setAttribute('fill', 'none');\r\n    path1.setAttribute('d', 'M0 0h24v24H0V0z');\r\n    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n    path2.setAttribute('d', 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z');\r\n    appendChildren(svg, path1, path2);\r\n\r\n    appendChildren(modalHeader, modalTitle, closeButton);\r\n    appendChildren(modal, modalHeader);\r\n\r\n    const modalBody = createElement('div', 'modal__body');\r\n    const inputGroupTitle = createElement('div', 'input');\r\n    const labelTitle = createElement('label', 'input__label', 'Full Name');\r\n    const inputTitle = createElement('input', 'input__field');\r\n    inputTitle.type = 'text';\r\n    const descriptionTitle = createElement('p', 'input__description', 'Enter your Full Name');\r\n\r\n    appendChildren(inputGroupTitle, labelTitle, inputTitle, descriptionTitle);\r\n    appendChildren(modalBody, inputGroupTitle);\r\n\r\n    const inputGroupDescription = createElement('div', 'input');\r\n    const labelDescription = createElement('label', 'input__label', 'Message');\r\n    const textareaDescription = createElement('textarea', 'input__field input__field--textarea');\r\n    const descriptionTextarea = createElement('p', 'input__description', \"Help us improve our services by sending a message\");\r\n\r\n    appendChildren(inputGroupDescription, labelDescription, textareaDescription, descriptionTextarea);\r\n    appendChildren(modalBody, inputGroupDescription);\r\n\r\n    appendChildren(modal, modalBody);\r\n\r\n    const modalFooter = createElement('div', 'modal__footer');\r\n    const createButton = createElement('button', 'button button--primary', 'Send');\r\n\r\n    appendChildren(modalFooter, createButton);\r\n    appendChildren(modal, modalFooter);\r\n\r\n    appendChildren(content, modal);\r\n    \r\nappendChildren(contactUsFormContainer,modal);\r\n\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://restaurant/./src/loadContactPage.js?");

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_hero_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hero-image.png */ \"./src/images/hero-image.png\");\n/* harmony import */ var _images_gravy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gravy.png */ \"./src/images/gravy.png\");\n\r\n\r\n\r\nfunction loadHomePage() {\r\n    function createElement(tag, className = '', textContent = '') {\r\n      const element = document.createElement(tag);\r\n      if (className) element.className = className;\r\n      if (textContent) element.textContent = textContent;\r\n      return element;\r\n    }\r\n  \r\n    function appendChildren(parent, ...children) {\r\n      children.forEach(child => parent.appendChild(child));\r\n    }\r\n  \r\n    const content = document.getElementById('content');\r\n    content.innerHTML = ''; \r\n  \r\n    const section = createElement(\"section\", \"hero-section\");\r\n    content.appendChild(section);\r\n  \r\n    const heroContainer = createElement(\"div\", \"hero-container\");\r\n    section.appendChild(heroContainer);\r\n  \r\n    const heroTextContainer = createElement(\"div\", \"hero-text\");\r\n    const heroImgContainer = createElement(\"div\", \"hero-img-container\");\r\n    appendChildren(heroContainer, heroTextContainer, heroImgContainer);\r\n    const heroTitle = createElement(\"h1\", \"hero-title\", \"\");\r\n    const heroprice = createElement(\"h2\", \"hero-subtitle\", \"The Only Sizzling Food in Town!\");\r\n    const caption = createElement(\"p\", \"hero-caption\", \"Discover the ultimate dining experience at Tres Hot Plates!\");\r\n    const orderBtn = createElement(\"button\", \"orderBtn\", \"Order Now\");\r\n    const icon = createElement(\"span\", \"material-icons\", \"restaurant_menu\");\r\n    orderBtn.prepend(icon);\r\n    appendChildren(heroTextContainer, heroTitle, heroprice, caption, orderBtn);\r\n  \r\n    const fancyBorder = createElement(\"div\", \"fancy-border-radius\");\r\n    const heroImg = createElement(\"img\", \"heroImg\");\r\n    heroImg.src = _images_hero_image_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    const gravy = createElement(\"img\", \"gravy\");\r\n    gravy.src = _images_gravy_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    appendChildren(heroImgContainer, fancyBorder, heroImg, gravy);\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://restaurant/./src/loadHomePage.js?");

/***/ }),

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n\r\nfunction loadMenuPage() {\r\n        function createElement(tag, className = '', textContent = '') {\r\n          const element = document.createElement(tag);\r\n          if (className) element.className = className;\r\n          if (textContent) element.textContent = textContent;\r\n          return element;\r\n        }\r\n      \r\n        function appendChildren(parent, ...children) {\r\n          children.forEach(child => parent.appendChild(child));\r\n        }\r\n      \r\n        const content = document.getElementById('content');\r\n        content.innerHTML = ''; // Clear the content\r\n      \r\n        const section = createElement(\"section\", \"menu-section\");\r\n        content.appendChild(section);\r\n\r\n        const firstColumnContainer = createElement(\"div\", \"menu-container\");\r\n        const secondColumnContainer = createElement(\"div\", \"menu-container\");\r\n        const thirdColumnContainer = createElement(\"div\", \"menu-container\");\r\n        const fourthColumnContainer = createElement(\"div\", \"menu-container\");\r\n\r\n        appendChildren(section, firstColumnContainer,secondColumnContainer,thirdColumnContainer,fourthColumnContainer);\r\n\r\n        const sectionTitle = createElement(\"h1\", \"menuHeader\",\"Try Our Popular Dishes\");\r\n        const sectionText = createElement(\"p\", \"caption\",\"Discover our exclusive dishes and deals!\");\r\n        content.prepend(sectionTitle, sectionText);\r\n\r\n        const garlicpepperCard = createElement(\"div\", \"card\");\r\n        const gpdivImage = createElement(\"div\", \"image\");\r\n        const gpImage = createElement(\"img\", \"text\");\r\n        gpImage.src = \"/src/images/garlic-pepper.png\";\r\n        appendChildren(gpdivImage, gpImage);\r\n        const gpTitle = createElement(\"span\", \"title\",\"Sizzling Garlic Pepper Beef\");\r\n        const gpPrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        firstColumnContainer.appendChild(garlicpepperCard);\r\n        appendChildren(garlicpepperCard, gpdivImage, gpTitle, gpPrice);\r\n\r\n        const porkChopCard = createElement(\"div\", \"card\");\r\n        const pcdivImage = createElement(\"div\", \"image\");\r\n        const pcImage = createElement(\"img\", \"text\");\r\n        pcImage.src = \"/src/images/pork.png\";\r\n        appendChildren(pcdivImage, pcImage);\r\n        const pcTitle = createElement(\"span\", \"title\",\"Sizzling Pork Chop\");\r\n        const pcPrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        secondColumnContainer.appendChild(porkChopCard);\r\n        appendChildren(porkChopCard, pcdivImage, pcTitle, pcPrice);\r\n\r\n        const burgerCard = createElement(\"div\", \"card\");\r\n        const bgrdivImage = createElement(\"div\", \"image\");\r\n        const bgrImage = createElement(\"img\", \"text\");\r\n        bgrImage.src = \"/src/images/burgersteak.png\";\r\n        appendChildren(bgrdivImage, bgrImage);\r\n        const bgrTitle = createElement(\"span\", \"title\",\"Sizzling Burger Steak\");\r\n        const bgrPrice = createElement(\"span\", \"price\",\"P99.00\");\r\n       thirdColumnContainer.appendChild(burgerCard);\r\n        appendChildren(burgerCard, bgrdivImage, bgrTitle, bgrPrice);\r\n\r\n        const sausageCard = createElement(\"div\", \"card\");\r\n        const sausagedivImage = createElement(\"div\", \"image\");\r\n        const sausageImage = createElement(\"img\", \"text\");\r\n        sausageImage.src = \"/src/images/sausage.png\";\r\n        appendChildren(sausagedivImage, sausageImage);\r\n        const sausageTitle = createElement(\"span\", \"title\",\"Sizzling Sausage\");\r\n        const sausagePrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        fourthColumnContainer.appendChild(sausageCard);\r\n        appendChildren(sausageCard, sausagedivImage, sausageTitle, sausagePrice);\r\n\r\n        const subsection = createElement(\"section\", \"sub-section\");\r\n        content.appendChild(subsection);\r\n\r\n        const firstSubColumnContainer = createElement(\"div\", \"menu-container\");\r\n        const secondSubColumnContainer = createElement(\"div\", \"menu-container\");\r\n        const thirdSubColumnContainer = createElement(\"div\", \"menu-container\");\r\n\r\n        appendChildren(subsection, firstSubColumnContainer, secondSubColumnContainer, thirdSubColumnContainer);\r\n\r\n        const comboOneCard = createElement(\"div\", \"card\");\r\n        const comboOnedivImage = createElement(\"div\", \"image\");\r\n        const comboOneImage = createElement(\"img\", \"text\");\r\n        comboOneImage.src = \"/src/images/sisig.png\";\r\n        appendChildren(comboOnedivImage, comboOneImage);\r\n        const comboOneTitle = createElement(\"span\", \"title\",\"Sizzling Sisig\");\r\n        const comboOnePrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        firstSubColumnContainer.appendChild(comboOneCard);\r\n        appendChildren(comboOneCard, comboOnedivImage, comboOneTitle, comboOnePrice);\r\n\r\n        const comboTwoCard = createElement(\"div\", \"card\");\r\n        const comboTwodivImage = createElement(\"div\", \"image\");\r\n        const comboTwoImage = createElement(\"img\", \"text\");\r\n        comboTwoImage.src = \"/src/images/pork-beef.png\";\r\n        appendChildren(comboTwodivImage, comboTwoImage);\r\n        const comboTwoTitle = createElement(\"span\", \"title\",\"Sizzling Pork and Garlic Pepper Beef\");\r\n        const comboTwoPrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        secondSubColumnContainer.appendChild(comboTwoCard);\r\n        appendChildren(comboTwoCard, comboTwodivImage, comboTwoTitle, comboTwoPrice);\r\n\r\n        const comboThirdCard = createElement(\"div\", \"card\");\r\n        const comboThirddivImage = createElement(\"div\", \"image\");\r\n        const comboThirdImage = createElement(\"img\", \"text\");\r\n        comboThirdImage.src = \"/src/images/sausage-burger.png\";\r\n        appendChildren(comboThirddivImage, comboThirdImage);\r\n        const comboThirdTitle = createElement(\"span\", \"title\",\"Sizzling Burger Steak and Sausage\");\r\n        const comboThirdPrice = createElement(\"span\", \"price\",\"P99.00\");\r\n        thirdSubColumnContainer.appendChild(comboThirdCard);\r\n        appendChildren(comboThirdCard, comboThirddivImage, comboThirdTitle, comboThirdPrice);\r\n}\n\n//# sourceURL=webpack://restaurant/./src/loadMenuPage.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeScrollReveal: () => (/* binding */ initializeScrollReveal)\n/* harmony export */ });\nfunction initializeScrollReveal() {\r\n    const sr = ScrollReveal({\r\n      origin: 'top',\r\n      distance: '60px',\r\n      duration: 2500,\r\n      delay: 200,\r\n    });\r\n  \r\n    sr.reveal(`.navbar`);\r\n    sr.reveal(`.hero-text`,{ delay: 700, distance: '100px', origin: 'bottom' });\r\n    sr.reveal(`.hero-img-container`, { delay: 900, distance: '100px', origin: 'right' });\r\n    sr.reveal(`.menu-section`);\r\n    sr.reveal(`.sub-section`);\r\n    sr.reveal(`.menuHeader`,{delay: 100});\r\n    sr.reveal(`.caption`);\r\n    sr.reveal(`.card`, { interval: 200 });\r\n    sr.reveal(`.orderBtn`, { interval: 200, delay: 1000 });\r\n    sr.reveal('.contact-Us',{distance: '100px', origin: 'left' });\r\n    sr.reveal(`.contactUsHero-container`,{distance: '100px', origin: 'right' });\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant/./src/scroll.js?");

/***/ }),

/***/ "./src/images/gravy.png":
/*!******************************!*\
  !*** ./src/images/gravy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4fc8ccc3a224835c303.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/gravy.png?");

/***/ }),

/***/ "./src/images/hero-image.png":
/*!***********************************!*\
  !*** ./src/images/hero-image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"609a2247a0fb89303164.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/hero-image.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;