/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n.button {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.button__add {\n  background: #7fced8;\n  border-radius: 50%;\n  padding: 3px;\n}\n.button__edit {\n  color: #f4a261ff;\n}\n.button__delete {\n  color: #e76f51ff;\n}\n.button__check {\n  color: green;\n}\n\n.project-field {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: white;\n  height: 100vh;\n  background-color: #264653ff;\n  padding: 10px;\n}\n.project-field__item {\n  border-radius: 5px;\n  background-color: #203B46;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 26px;\n}\n.project-field__item:hover {\n  background-color: #2D5362;\n}\n.project-field__item--active {\n  background-color: #2a9d8f;\n  font-weight: 800;\n}\n.project-field__item--active:hover {\n  background-color: #2fb1a2;\n}\n.project-field__title {\n  padding-left: 9px;\n  font-family: sans-serif;\n  overflow: hidden;\n}\n.project-field__item:hover .project-field__buttons {\n  display: inline-flex;\n}\n.project-field__buttons {\n  display: none;\n}\n.project-field__add {\n  justify-content: center;\n  background-color: #264653ff;\n}\n.project-field__add:hover {\n  background-color: #264653ff;\n}\n@media (max-width: 811px) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}\n@media (false) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.sass"],"names":[],"mappings":"AASA;EACI,SAAA;AARJ;;AASA;EACI,gBAAA;EACA,YAAA;EACA,eAAA;AANJ;AAOI;EACI,mBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAMI;EACI,gBAbM;AASd;AAKI;EACI,gBAdO;AAWf;AAII;EACI,YAAA;AAFR;;AAIA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,2BAhCO;EAiCP,aAAA;AADJ;AAEI;EACI,kBAAA;EACA,yBAnCQ;EAoCR,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AAAR;AACQ;EACI,yBAxCK;AAyCjB;AAAQ;EACI,yBAzCI;EA0CJ,gBAAA;AAEZ;AADY;EACI,yBA3CM;AA8CtB;AAFI;EACI,iBAAA;EACA,uBAAA;EACA,gBAAA;AAIR;AAHI;EACI,oBAAA;AAKR;AAJI;EACI,aAAA;AAMR;AALI;EACI,uBAAA;EACA,2BA1DG;AAiEX;AANQ;EACI,2BA5DD;AAoEX;AAPI;EACI;IACI,oBAAA;EASV;AACF;AATI;EACI;IACI,oBAAA;EAWV;AACF","sourcesContent":["// https://coolors.co/203b46-2fb1a2-e9c46a-f4a261-e76f51\n$charcoal: #264653ff\n$charcoal-dark: #203B46\n$charcoal-hover: #2D5362\n$persian-green: #2a9d8f\n$persian-green-hover: #2fb1a2\n$orange-yellow-crayola: #e9c46aff\n$sandy-brown: #f4a261ff\n$burnt-sienna: #e76f51ff\n*\n    margin: 0\n.button\n    background: none\n    border: none\n    cursor: pointer\n    &__add\n        background: rgb(127,206,216)\n        border-radius: 50%\n        padding: 3px\n    &__edit\n        color: $sandy-brown\n    &__delete\n        color: $burnt-sienna\n    &__check\n        color: green\n\n.project-field\n    width: 25%\n    display: flex\n    flex-direction: column\n    gap: 10px\n    color: white\n    height: 100vh\n    background-color: $charcoal\n    padding: 10px\n    &__item\n        border-radius: 5px\n        background-color: $charcoal-dark\n        display: flex\n        justify-content: space-between\n        align-items: center\n        height: 26px\n        &:hover\n            background-color: $charcoal-hover\n        &--active\n            background-color: $persian-green\n            font-weight: 800\n            &:hover\n                background-color: $persian-green-hover\n    &__title\n        padding-left: 9px\n        font-family: sans-serif\n        overflow: hidden\n    &__item:hover &__buttons\n        display: inline-flex\n    &__buttons\n        display: none\n    &__add\n        justify-content: center\n        background-color: $charcoal\n        &:hover\n            background-color: $charcoal\n    @media (max-width: 811px)\n        &__item--active &__buttons\n            display: inline-flex\n    @media (not(hover))\n        &__item--active &__buttons\n            display: inline-flex\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/easy-bem/index.js":
/*!****************************************!*\
  !*** ./node_modules/easy-bem/index.js ***!
  \****************************************/
/***/ ((module) => {



/**
 * BEM class name factory.
 *
 * @typedef {Function} Bem
 * @param {String|Object} [elementOrMods] Element name or hash object with mods
 * @param {Object} [mods] Hash object with mods
 * @returns {String}
 */

/**
 * Returns BEM class name factory.
 *
 * @param {String} componentName Block name
 * @returns {Bem}
 */
module.exports = function bem(componentName) {
    return function (elementOrMods, mods) {
        if (!elementOrMods) {
            return componentName;
        }

        var element;

        if (typeof elementOrMods === 'string') {
            element = elementOrMods;
        } else {
            mods = elementOrMods;
        }

        var base = componentName;
        if (element) {
            base += '__' + element;
        }

        return base + (
            mods
                ? Object.keys(mods).reduce(function (result, name) {
                    var value = mods[name];

                    if (value) {
                        result += ' ' + (
                            typeof value === 'boolean'
                                ? (base + '--' + name)
                                : (base + '--' + name + '_' + value)
                        );
                    }

                    return result;
                }, '')
                : ''
        );
    };
}


/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/project-builder.js":
/*!********************************!*\
  !*** ./src/project-builder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectBuilder": () => (/* binding */ projectBuilder)
/* harmony export */ });
/* harmony import */ var _task_builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-builder.js */ "./src/task-builder.js");


const projectBuilder = function (title, taskList, activeStatus) {
  return { title, taskList, activeStatus };
};


/***/ }),

/***/ "./src/project-list-controller.js":
/*!****************************************!*\
  !*** ./src/project-list-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectListController": () => (/* binding */ projectListController)
/* harmony export */ });
/* harmony import */ var _project_builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-builder.js */ "./src/project-builder.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
/* harmony import */ var _task_builder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-builder.js */ "./src/task-builder.js");




const projectListController = (function () {
  let projectList = [];
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("loadProjectList", initProjectList);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("projectDeleteClick", deleteProject);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("taskDeleteClick", deleteTask);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("taskAddClick", addTask);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("projectAddClick", addProject);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("projectSetActiveClick", setActiveProject);
  _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("toggleTaskCompleteClick", toggleTaskComplete);

  function initProjectList(storedList) {
    projectList = storedList || buildDefaultList();
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);
  }

  function buildDefaultList() {
    let list = [];
    const defaultProject = (0,_project_builder_js__WEBPACK_IMPORTED_MODULE_0__.projectBuilder)("My Project", [], true);
    list.push(defaultProject);
    return list;
  }

  function deleteProject(clickEvent) {
    const index = clickEvent.projectIndex;
    projectList[index]
      ? projectList.splice(index, 1)
      : console.warn(`Project index ${index} not found to delete.`);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);
  }

  function deleteTask(clickEvent) {
    const pI = clickEvent.projectIndex;
    const tI = clickEvent.taskIndex;
    projectList[pI].taskList[tI]
      ? projectList[pI].taskList.splice(tI, 1)
      : console.warn(
          `Project index ${pI},task index ${tI} not found to delete.`
        );
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);
  }

  function addTask(clickEvent) {
    if (taskAlreadyExists(clickEvent)) replaceOldTaskWithNewTask(clickEvent);
    else appendListWithNewTask(clickEvent);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);

    function taskAlreadyExists(clickEvent) {
      const pI = clickEvent.projectIndex;
      const taskIndex = clickEvent.taskIndex;
      const taskListLength = projectList[pI].taskList.length;
      if (taskIndex !== undefined) return taskIndex < taskListLength;
      return taskIndex;
    }

    function appendListWithNewTask(clickEvent) {
      const pI = clickEvent.projectIndex;
      projectList[pI].taskList.push(createTaskFromClickEvent(clickEvent));
    }

    function replaceOldTaskWithNewTask(clickEvent) {
      const pI = clickEvent.projectIndex;
      const tI = clickEvent.taskIndex;
      projectList[pI].taskList[tI] = createTaskFromClickEvent(clickEvent);
    }

    function createTaskFromClickEvent(clickEvent) {
      const title = clickEvent.title;
      const description = clickEvent.description;
      const dueDate = clickEvent.dueDate;
      const priority = clickEvent.priority;
      const taskCompleteStatus = false;
      return (0,_task_builder_js__WEBPACK_IMPORTED_MODULE_2__.taskBuilder)(
        title,
        description,
        dueDate,
        priority,
        taskCompleteStatus
      );
    }
  }

  function addProject(clickEvent) {
    if (projectAlreadyExists(clickEvent)) changeProjectTitle(clickEvent);
    else appendProject(clickEvent);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);

    function projectAlreadyExists(clickEvent) {
      const pI = clickEvent.projectIndex;
      if (pI !== undefined) return pI < projectList.length;
      return pI;
    }

    function changeProjectTitle(clickEvent) {
      const pI = clickEvent.projectIndex;
      const newTitle = clickEvent.title;
      projectList[pI].title = newTitle;
    }

    function appendProject(clickEvent) {
      const title = clickEvent.title;
      projectList.push((0,_project_builder_js__WEBPACK_IMPORTED_MODULE_0__.projectBuilder)(title, [], false));
    }
  }

  function setActiveProject(clickEvent) {
    const pI = clickEvent.projectIndex;
    if (projectList[pI] === undefined) {
      console.error("Project Index undefined.");
      return;
    }
    setAllProjectsToInActive();
    setProjectIndexToActive(pI);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);

    function setAllProjectsToInActive() {
      projectList.forEach((project) => (project.activeStatus = false));
    }

    function setProjectIndexToActive(index) {
      projectList[index].activeStatus = true;
    }
  }

  function toggleTaskComplete(clickEvent) {
    const pI = clickEvent.projectIndex;
    const tI = clickEvent.taskIndex;
    projectList[pI].taskList[tI].taskCompleteStatus
      ? (projectList[pI].taskList[tI].taskCompleteStatus = false)
      : (projectList[pI].taskList[tI].taskCompleteStatus = true);
    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish("updateListOfProjects", projectList);
  }
})();


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
const pubsub = {
    events: {},
    subscribe: function(eventName, callbackFuncToSub) {
      console.info(`PUBSUB: someone just subscribed to know about ${eventName}`);
      //add an event with a name as new or to existing list
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(callbackFuncToSub);
    },
    unsubscribe: function(eventName, callbackFuncToUnSub) {
      console.info(`PUBSUB: someone just UNsubscribed from ${eventName}`);
      //remove an event function by name
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(callbackFunc => callbackFunc !== callbackFuncToUnSub);
      }
    },
    publish: function(eventName, data) {
      console.info(`PUBSUB: Making an broadcast about ${eventName} with `,data);
      //emit|publish|announce the event to anyone who is subscribed
      if (this.events[eventName]) {
        this.events[eventName].forEach(callbackFunc => {
          callbackFunc(data);
        });
      }
    }
  };

/***/ }),

/***/ "./src/render-project-field.js":
/*!*************************************!*\
  !*** ./src/render-project-field.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderProjectField": () => (/* binding */ RenderProjectField)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list-controller */ "./src/project-list-controller.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
/* harmony import */ var easy_bem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-bem */ "./node_modules/easy-bem/index.js");
/* harmony import */ var easy_bem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(easy_bem__WEBPACK_IMPORTED_MODULE_3__);





const RenderProjectField = (() => {
  _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);

  // for bem class names
  const pf = easy_bem__WEBPACK_IMPORTED_MODULE_3___default()("project-field");

  const projectField = document.createElement("div");
  projectField.classList.add("project-field");

  function renderProjectFieldContent(projectList) {
    projectField.textContent = "";
    projectList.forEach((project, index) => {
      projectField.appendChild(_makeProjectItem(project, index));
    });
    projectField.appendChild(_makeAddProjectButton());
  }

  function _makeAddProjectButton() {
    const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeAddButton();
    const span = document.createElement("span");
    span.classList = pf("item");
    span.classList.add(pf("add"));
    span.appendChild(button);
    return span;
  }

  function _makeProjectItem(project, index) {
    const span = document.createElement("span");
    span.classList = pf("item", { active: project.activeStatus });
    span.dataset.projectIndex = index;
    span.addEventListener("click", _setItemActiveOnClick);
    span.appendChild(_makeProjectTitle(project, index));
    span.appendChild(_makeButtonField(index));
    return span;
  }

  function _setItemActiveOnClick(clickEvent) {
    if (buttonWasClicked(clickEvent)) return;
    const projectIndex = this.dataset.projectIndex;
    _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectSetActiveClick", { projectIndex });

    function buttonWasClicked(clickEvent) {
      return [...clickEvent.target.classList].includes("button");
    }
  }

  function _makeProjectTitle(project, index) {
    const span = document.createElement("span");
    span.classList = pf("title");
    span.textContent = project.title;
    return span;
  }

  function _makeButtonField(index) {
    const span = document.createElement("span");
    span.classList = pf("buttons");
    span.appendChild(_makeProjectEditButton());
    span.appendChild(_makeProjectDeleteButton());
    return span;
  }

  function _makeProjectDeleteButton() {
    const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeDeleteButton();
    button.addEventListener("click", _deleteProjectOnClick);
    return button;
  }

  function _deleteProjectOnClick() {
    const projectIndex = this.parentNode.parentNode.dataset.projectIndex;
    _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectDeleteClick", { projectIndex });
  }

  function _makeProjectEditButton() {
    const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeEditButton();
    return button;
  }

  function _makeProjectEntryForm() {}

  function _makeProjectSubmitFormButton() {}

  return {
    projectField,
  };
})();


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render": () => (/* binding */ Render)
/* harmony export */ });
const Render = (() => {
  // Link stylesheet for icons
  {
    const googleIconsStyleSheet = document.createElement("link");
    googleIconsStyleSheet.href =
      "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
    googleIconsStyleSheet.rel = "stylesheet";
    document.head.appendChild(googleIconsStyleSheet);
  }

  function _makeIconButton(content) {
    const button = document.createElement("button");
    button.classList.add(
      "material-icons-outlined",
      "button",
      `button__${content}`
    );
    button.textContent = content;
    return button;
  }

  const makeAddButton = () => {
    return _makeIconButton("add");
  };

  const makeEditButton = () => {
    return _makeIconButton("edit");
  };

  const makeDeleteButton = () => {
    return _makeIconButton("delete");
  };

  const makeCheckButton = () => {
    return _makeIconButton("check");
  };

  return {
    makeAddButton,
    makeEditButton,
    makeDeleteButton,
    makeCheckButton,
  };
})();


/***/ }),

/***/ "./src/task-builder.js":
/*!*****************************!*\
  !*** ./src/task-builder.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskBuilder": () => (/* binding */ taskBuilder)
/* harmony export */ });
const taskBuilder = function (
  title,
  description,
  dueDate,
  priority,
  taskCompleteStatus
) {
  return { title, description, dueDate, priority, taskCompleteStatus };
};


/***/ }),

/***/ "./src/tests/project-builder-test.js":
/*!*******************************************!*\
  !*** ./src/tests/project-builder-test.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectListPrototype": () => (/* binding */ projectListPrototype)
/* harmony export */ });
/* harmony import */ var _project_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-builder */ "./src/project-builder.js");
/* harmony import */ var _task_builder_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-builder-tests */ "./src/tests/task-builder-tests.js");



let projectListPrototype = [];

for (let i = 0; i < 3; i++) {
  const newProject = (0,_project_builder__WEBPACK_IMPORTED_MODULE_0__.projectBuilder)(
    `project${i}`,
    _task_builder_tests__WEBPACK_IMPORTED_MODULE_1__.taskListPrototype[i],
    i % 2 ? true : false
  );
  projectListPrototype.push(newProject);
}




/***/ }),

/***/ "./src/tests/render-project-field-tests.js":
/*!*************************************************!*\
  !*** ./src/tests/render-project-field-tests.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_project_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render-project-field */ "./src/render-project-field.js");
/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-list-controller */ "./src/project-list-controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ "./src/pubsub.js");
/* harmony import */ var _project_builder_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-builder-test */ "./src/tests/project-builder-test.js");





_pubsub__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("loadProjectList", _project_builder_test__WEBPACK_IMPORTED_MODULE_3__.projectListPrototype);

// projectField tests
document.body.appendChild(_render_project_field__WEBPACK_IMPORTED_MODULE_0__.RenderProjectField.projectField);


/***/ }),

/***/ "./src/tests/task-builder-tests.js":
/*!*****************************************!*\
  !*** ./src/tests/task-builder-tests.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskListPrototype": () => (/* binding */ threeDifferentTaskLists)
/* harmony export */ });
/* harmony import */ var _task_builder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task-builder.js */ "./src/task-builder.js");


let threeDifferentTaskLists = [
  buildTaskList("a"),
  buildTaskList("b"),
  buildTaskList("c"),
];
function buildTaskList(modifier) {
  let taskList = [];
  for (let i = 0; i < 10; i++) {
    const newTask = (0,_task_builder_js__WEBPACK_IMPORTED_MODULE_0__.taskBuilder)(
      `task${i} for project ${modifier}`,
      `description${i}`,
      new Date(`10/25/${1989 + i}`),
      `${i}`,
      i % 2 ? true : false
    );
    taskList.push(newTask);
  }
  return taskList;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ "./src/style.sass");
/* harmony import */ var _tests_render_project_field_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests/render-project-field-tests */ "./src/tests/render-project-field-tests.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zYXNzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Vhc3ktYmVtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zYXNzP2U4ZjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1idWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItcHJvamVjdC1maWVsZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rlc3RzL3Byb2plY3QtYnVpbGRlci10ZXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZXN0cy9yZW5kZXItcHJvamVjdC1maWVsZC10ZXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVzdHMvdGFzay1idWlsZGVyLXRlc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uX19hZGQge1xcbiAgYmFja2dyb3VuZDogIzdmY2VkODtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuLmJ1dHRvbl9fZWRpdCB7XFxuICBjb2xvcjogI2Y0YTI2MWZmO1xcbn1cXG4uYnV0dG9uX19kZWxldGUge1xcbiAgY29sb3I6ICNlNzZmNTFmZjtcXG59XFxuLmJ1dHRvbl9fY2hlY2sge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1maWVsZCB7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1M2ZmO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwM0I0NjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNnB4O1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ1MzYyO1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbS0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbS0tYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZmIxYTI7XFxufVxcbi5wcm9qZWN0LWZpZWxkX190aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDlweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW06aG92ZXIgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1M2ZmO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODExcHgpIHtcXG4gIC5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmUgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIChmYWxzZSkge1xcbiAgLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZSAucHJvamVjdC1maWVsZF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNJLFNBQUE7QUFSSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMUjtBQU1JO0VBQ0ksZ0JBYk07QUFTZDtBQUtJO0VBQ0ksZ0JBZE87QUFXZjtBQUlJO0VBQ0ksWUFBQTtBQUZSOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQWhDTztFQWlDUCxhQUFBO0FBREo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EseUJBbkNRO0VBb0NSLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFSO0FBQ1E7RUFDSSx5QkF4Q0s7QUF5Q2pCO0FBQVE7RUFDSSx5QkF6Q0k7RUEwQ0osZ0JBQUE7QUFFWjtBQURZO0VBQ0kseUJBM0NNO0FBOEN0QjtBQUZJO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFISTtFQUNJLG9CQUFBO0FBS1I7QUFKSTtFQUNJLGFBQUE7QUFNUjtBQUxJO0VBQ0ksdUJBQUE7RUFDQSwyQkExREc7QUFpRVg7QUFOUTtFQUNJLDJCQTVERDtBQW9FWDtBQVBJO0VBQ0k7SUFDSSxvQkFBQTtFQVNWO0FBQ0Y7QUFUSTtFQUNJO0lBQ0ksb0JBQUE7RUFXVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGh0dHBzOi8vY29vbG9ycy5jby8yMDNiNDYtMmZiMWEyLWU5YzQ2YS1mNGEyNjEtZTc2ZjUxXFxuJGNoYXJjb2FsOiAjMjY0NjUzZmZcXG4kY2hhcmNvYWwtZGFyazogIzIwM0I0NlxcbiRjaGFyY29hbC1ob3ZlcjogIzJENTM2MlxcbiRwZXJzaWFuLWdyZWVuOiAjMmE5ZDhmXFxuJHBlcnNpYW4tZ3JlZW4taG92ZXI6ICMyZmIxYTJcXG4kb3JhbmdlLXllbGxvdy1jcmF5b2xhOiAjZTljNDZhZmZcXG4kc2FuZHktYnJvd246ICNmNGEyNjFmZlxcbiRidXJudC1zaWVubmE6ICNlNzZmNTFmZlxcbipcXG4gICAgbWFyZ2luOiAwXFxuLmJ1dHRvblxcbiAgICBiYWNrZ3JvdW5kOiBub25lXFxuICAgIGJvcmRlcjogbm9uZVxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgJl9fYWRkXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTI3LDIwNiwyMTYpXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcXG4gICAgICAgIHBhZGRpbmc6IDNweFxcbiAgICAmX19lZGl0XFxuICAgICAgICBjb2xvcjogJHNhbmR5LWJyb3duXFxuICAgICZfX2RlbGV0ZVxcbiAgICAgICAgY29sb3I6ICRidXJudC1zaWVubmFcXG4gICAgJl9fY2hlY2tcXG4gICAgICAgIGNvbG9yOiBncmVlblxcblxcbi5wcm9qZWN0LWZpZWxkXFxuICAgIHdpZHRoOiAyNSVcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMTBweFxcbiAgICBjb2xvcjogd2hpdGVcXG4gICAgaGVpZ2h0OiAxMDB2aFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgcGFkZGluZzogMTBweFxcbiAgICAmX19pdGVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1kYXJrXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGhlaWdodDogMjZweFxcbiAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ob3ZlclxcbiAgICAgICAgJi0tYWN0aXZlXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlcnNpYW4tZ3JlZW5cXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVyc2lhbi1ncmVlbi1ob3ZlclxcbiAgICAmX190aXRsZVxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHhcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICZfX2l0ZW06aG92ZXIgJl9fYnV0dG9uc1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhcXG4gICAgJl9fYnV0dG9uc1xcbiAgICAgICAgZGlzcGxheTogbm9uZVxcbiAgICAmX19hZGRcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgxMXB4KVxcbiAgICAgICAgJl9faXRlbS0tYWN0aXZlICZfX2J1dHRvbnNcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxcbiAgICBAbWVkaWEgKG5vdChob3ZlcikpXFxuICAgICAgICAmX19pdGVtLS1hY3RpdmUgJl9fYnV0dG9uc1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBCRU0gY2xhc3MgbmFtZSBmYWN0b3J5LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7RnVuY3Rpb259IEJlbVxyXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtlbGVtZW50T3JNb2RzXSBFbGVtZW50IG5hbWUgb3IgaGFzaCBvYmplY3Qgd2l0aCBtb2RzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbbW9kc10gSGFzaCBvYmplY3Qgd2l0aCBtb2RzXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgQkVNIGNsYXNzIG5hbWUgZmFjdG9yeS5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgQmxvY2sgbmFtZVxyXG4gKiBAcmV0dXJucyB7QmVtfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZW0oY29tcG9uZW50TmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50T3JNb2RzLCBtb2RzKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50T3JNb2RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnROYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudE9yTW9kcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRPck1vZHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kcyA9IGVsZW1lbnRPck1vZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmFzZSA9IGNvbXBvbmVudE5hbWU7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgYmFzZSArPSAnX18nICsgZWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiYXNlICsgKFxyXG4gICAgICAgICAgICBtb2RzXHJcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKG1vZHMpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbW9kc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGJhc2UgKyAnLS0nICsgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChiYXNlICsgJy0tJyArIG5hbWUgKyAnXycgKyB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LCAnJylcclxuICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0QnVpbGRlciA9IGZ1bmN0aW9uICh0aXRsZSwgdGFza0xpc3QsIGFjdGl2ZVN0YXR1cykge1xuICByZXR1cm4geyB0aXRsZSwgdGFza0xpc3QsIGFjdGl2ZVN0YXR1cyB9O1xufTtcbiIsImltcG9ydCB7IHByb2plY3RCdWlsZGVyIH0gZnJvbSBcIi4vcHJvamVjdC1idWlsZGVyLmpzXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgcHVic3ViLnN1YnNjcmliZShcImxvYWRQcm9qZWN0TGlzdFwiLCBpbml0UHJvamVjdExpc3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdERlbGV0ZUNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidGFza0RlbGV0ZUNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidGFza0FkZENsaWNrXCIsIGFkZFRhc2spO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdEFkZENsaWNrXCIsIGFkZFByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdFNldEFjdGl2ZUNsaWNrXCIsIHNldEFjdGl2ZVByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidG9nZ2xlVGFza0NvbXBsZXRlQ2xpY2tcIiwgdG9nZ2xlVGFza0NvbXBsZXRlKTtcblxuICBmdW5jdGlvbiBpbml0UHJvamVjdExpc3Qoc3RvcmVkTGlzdCkge1xuICAgIHByb2plY3RMaXN0ID0gc3RvcmVkTGlzdCB8fCBidWlsZERlZmF1bHRMaXN0KCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZERlZmF1bHRMaXN0KCkge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihcIk15IFByb2plY3RcIiwgW10sIHRydWUpO1xuICAgIGxpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgIHByb2plY3RMaXN0W2luZGV4XVxuICAgICAgPyBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICA6IGNvbnNvbGUud2FybihgUHJvamVjdCBpbmRleCAke2luZGV4fSBub3QgZm91bmQgdG8gZGVsZXRlLmApO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBjb25zdCB0SSA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV1cbiAgICAgID8gcHJvamVjdExpc3RbcEldLnRhc2tMaXN0LnNwbGljZSh0SSwgMSlcbiAgICAgIDogY29uc29sZS53YXJuKFxuICAgICAgICAgIGBQcm9qZWN0IGluZGV4ICR7cEl9LHRhc2sgaW5kZXggJHt0SX0gbm90IGZvdW5kIHRvIGRlbGV0ZS5gXG4gICAgICAgICk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICBpZiAodGFza0FscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkpIHJlcGxhY2VPbGRUYXNrV2l0aE5ld1Rhc2soY2xpY2tFdmVudCk7XG4gICAgZWxzZSBhcHBlbmRMaXN0V2l0aE5ld1Rhc2soY2xpY2tFdmVudCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiB0YXNrQWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgICBjb25zdCB0YXNrTGlzdExlbmd0aCA9IHByb2plY3RMaXN0W3BJXS50YXNrTGlzdC5sZW5ndGg7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSB1bmRlZmluZWQpIHJldHVybiB0YXNrSW5kZXggPCB0YXNrTGlzdExlbmd0aDtcbiAgICAgIHJldHVybiB0YXNrSW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTGlzdFdpdGhOZXdUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3QucHVzaChjcmVhdGVUYXNrRnJvbUNsaWNrRXZlbnQoY2xpY2tFdmVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VPbGRUYXNrV2l0aE5ld1Rhc2soY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGNvbnN0IHRJID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldID0gY3JlYXRlVGFza0Zyb21DbGlja0V2ZW50KGNsaWNrRXZlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tQ2xpY2tFdmVudChjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGNsaWNrRXZlbnQudGl0bGU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNsaWNrRXZlbnQuZGVzY3JpcHRpb247XG4gICAgICBjb25zdCBkdWVEYXRlID0gY2xpY2tFdmVudC5kdWVEYXRlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBjbGlja0V2ZW50LnByaW9yaXR5O1xuICAgICAgY29uc3QgdGFza0NvbXBsZXRlU3RhdHVzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGFza0J1aWxkZXIoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHRhc2tDb21wbGV0ZVN0YXR1c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICBpZiAocHJvamVjdEFscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkpIGNoYW5nZVByb2plY3RUaXRsZShjbGlja0V2ZW50KTtcbiAgICBlbHNlIGFwcGVuZFByb2plY3QoY2xpY2tFdmVudCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBwcm9qZWN0QWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgaWYgKHBJICE9PSB1bmRlZmluZWQpIHJldHVybiBwSSA8IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgICAgIHJldHVybiBwSTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0VGl0bGUoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGNvbnN0IG5ld1RpdGxlID0gY2xpY2tFdmVudC50aXRsZTtcbiAgICAgIHByb2plY3RMaXN0W3BJXS50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFByb2plY3QoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBjbGlja0V2ZW50LnRpdGxlO1xuICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0QnVpbGRlcih0aXRsZSwgW10sIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBpZiAocHJvamVjdExpc3RbcEldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IEluZGV4IHVuZGVmaW5lZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFsbFByb2plY3RzVG9JbkFjdGl2ZSgpO1xuICAgIHNldFByb2plY3RJbmRleFRvQWN0aXZlKHBJKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIHNldEFsbFByb2plY3RzVG9JbkFjdGl2ZSgpIHtcbiAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IChwcm9qZWN0LmFjdGl2ZVN0YXR1cyA9IGZhbHNlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdEluZGV4VG9BY3RpdmUoaW5kZXgpIHtcbiAgICAgIHByb2plY3RMaXN0W2luZGV4XS5hY3RpdmVTdGF0dXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRhc2tDb21wbGV0ZShjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBjb25zdCB0SSA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV0udGFza0NvbXBsZXRlU3RhdHVzXG4gICAgICA/IChwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldLnRhc2tDb21wbGV0ZVN0YXR1cyA9IGZhbHNlKVxuICAgICAgOiAocHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXS50YXNrQ29tcGxldGVTdGF0dXMgPSB0cnVlKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbiAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9TdWIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZlbnROYW1lfWApO1xuICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrRnVuY1RvU3ViKTtcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrRnVuY1RvVW5TdWIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldmVudE5hbWV9YCk7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoY2FsbGJhY2tGdW5jID0+IGNhbGxiYWNrRnVuYyAhPT0gY2FsbGJhY2tGdW5jVG9VblN1Yik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnROYW1lfSB3aXRoIGAsZGF0YSk7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2tGdW5jID0+IHtcbiAgICAgICAgICBjYWxsYmFja0Z1bmMoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTsiLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCBcIi4vcHJvamVjdC1saXN0LWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IGJlbSBmcm9tIFwiZWFzeS1iZW1cIjtcblxuZXhwb3J0IGNvbnN0IFJlbmRlclByb2plY3RGaWVsZCA9ICgoKSA9PiB7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCByZW5kZXJQcm9qZWN0RmllbGRDb250ZW50KTtcblxuICAvLyBmb3IgYmVtIGNsYXNzIG5hbWVzXG4gIGNvbnN0IHBmID0gYmVtKFwicHJvamVjdC1maWVsZFwiKTtcblxuICBjb25zdCBwcm9qZWN0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RmllbGQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZmllbGRcIik7XG5cbiAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdEZpZWxkQ29udGVudChwcm9qZWN0TGlzdCkge1xuICAgIHByb2plY3RGaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIHByb2plY3RGaWVsZC5hcHBlbmRDaGlsZChfbWFrZVByb2plY3RJdGVtKHByb2plY3QsIGluZGV4KSk7XG4gICAgfSk7XG4gICAgcHJvamVjdEZpZWxkLmFwcGVuZENoaWxkKF9tYWtlQWRkUHJvamVjdEJ1dHRvbigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlQWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZUFkZEJ1dHRvbigpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwiaXRlbVwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQocGYoXCJhZGRcIikpO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gc3BhbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlUHJvamVjdEl0ZW0ocHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcIml0ZW1cIiwgeyBhY3RpdmU6IHByb2plY3QuYWN0aXZlU3RhdHVzIH0pO1xuICAgIHNwYW4uZGF0YXNldC5wcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc2V0SXRlbUFjdGl2ZU9uQ2xpY2spO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCwgaW5kZXgpKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKF9tYWtlQnV0dG9uRmllbGQoaW5kZXgpKTtcbiAgICByZXR1cm4gc3BhbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXRJdGVtQWN0aXZlT25DbGljayhjbGlja0V2ZW50KSB7XG4gICAgaWYgKGJ1dHRvbldhc0NsaWNrZWQoY2xpY2tFdmVudCkpIHJldHVybjtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdFNldEFjdGl2ZUNsaWNrXCIsIHsgcHJvamVjdEluZGV4IH0pO1xuXG4gICAgZnVuY3Rpb24gYnV0dG9uV2FzQ2xpY2tlZChjbGlja0V2ZW50KSB7XG4gICAgICByZXR1cm4gWy4uLmNsaWNrRXZlbnQudGFyZ2V0LmNsYXNzTGlzdF0uaW5jbHVkZXMoXCJidXR0b25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcInRpdGxlXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHJldHVybiBzcGFuO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ha2VCdXR0b25GaWVsZChpbmRleCkge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwiYnV0dG9uc1wiKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKF9tYWtlUHJvamVjdEVkaXRCdXR0b24oKSk7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZVByb2plY3REZWxldGVCdXR0b24oKSk7XG4gICAgcmV0dXJuIHNwYW47XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZVByb2plY3REZWxldGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VEZWxldGVCdXR0b24oKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9kZWxldGVQcm9qZWN0T25DbGljayk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWxldGVQcm9qZWN0T25DbGljaygpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICBwdWJzdWIucHVibGlzaChcInByb2plY3REZWxldGVDbGlja1wiLCB7IHByb2plY3RJbmRleCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlUHJvamVjdEVkaXRCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VFZGl0QnV0dG9uKCk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlUHJvamVjdEVudHJ5Rm9ybSgpIHt9XG5cbiAgZnVuY3Rpb24gX21ha2VQcm9qZWN0U3VibWl0Rm9ybUJ1dHRvbigpIHt9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0RmllbGQsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFJlbmRlciA9ICgoKSA9PiB7XG4gIC8vIExpbmsgc3R5bGVzaGVldCBmb3IgaWNvbnNcbiAge1xuICAgIGNvbnN0IGdvb2dsZUljb25zU3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGdvb2dsZUljb25zU3R5bGVTaGVldC5ocmVmID1cbiAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZFwiO1xuICAgIGdvb2dsZUljb25zU3R5bGVTaGVldC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdvb2dsZUljb25zU3R5bGVTaGVldCk7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZUljb25CdXR0b24oY29udGVudCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgYGJ1dHRvbl9fJHtjb250ZW50fWBcbiAgICApO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGNvbnN0IG1ha2VBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9tYWtlSWNvbkJ1dHRvbihcImFkZFwiKTtcbiAgfTtcblxuICBjb25zdCBtYWtlRWRpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX21ha2VJY29uQnV0dG9uKFwiZWRpdFwiKTtcbiAgfTtcblxuICBjb25zdCBtYWtlRGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJkZWxldGVcIik7XG4gIH07XG5cbiAgY29uc3QgbWFrZUNoZWNrQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJjaGVja1wiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1ha2VBZGRCdXR0b24sXG4gICAgbWFrZUVkaXRCdXR0b24sXG4gICAgbWFrZURlbGV0ZUJ1dHRvbixcbiAgICBtYWtlQ2hlY2tCdXR0b24sXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHRhc2tCdWlsZGVyID0gZnVuY3Rpb24gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICB0YXNrQ29tcGxldGVTdGF0dXNcbikge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXNrQ29tcGxldGVTdGF0dXMgfTtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0QnVpbGRlciB9IGZyb20gXCIuLi9wcm9qZWN0LWJ1aWxkZXJcIjtcbmltcG9ydCB7IHRhc2tMaXN0UHJvdG90eXBlIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLXRlc3RzXCI7XG5cbmxldCBwcm9qZWN0TGlzdFByb3RvdHlwZSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoXG4gICAgYHByb2plY3Qke2l9YCxcbiAgICB0YXNrTGlzdFByb3RvdHlwZVtpXSxcbiAgICBpICUgMiA/IHRydWUgOiBmYWxzZVxuICApO1xuICBwcm9qZWN0TGlzdFByb3RvdHlwZS5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdFByb3RvdHlwZSB9O1xuIiwiaW1wb3J0IHsgUmVuZGVyUHJvamVjdEZpZWxkIH0gZnJvbSBcIi4uL3JlbmRlci1wcm9qZWN0LWZpZWxkXCI7XG5pbXBvcnQgXCIuLi9wcm9qZWN0LWxpc3QtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3RQcm90b3R5cGUgfSBmcm9tIFwiLi9wcm9qZWN0LWJ1aWxkZXItdGVzdFwiO1xuXG5wdWJzdWIucHVibGlzaChcImxvYWRQcm9qZWN0TGlzdFwiLCBwcm9qZWN0TGlzdFByb3RvdHlwZSk7XG5cbi8vIHByb2plY3RGaWVsZCB0ZXN0c1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChSZW5kZXJQcm9qZWN0RmllbGQucHJvamVjdEZpZWxkKTtcbiIsImltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4uL3Rhc2stYnVpbGRlci5qc1wiO1xuXG5sZXQgdGhyZWVEaWZmZXJlbnRUYXNrTGlzdHMgPSBbXG4gIGJ1aWxkVGFza0xpc3QoXCJhXCIpLFxuICBidWlsZFRhc2tMaXN0KFwiYlwiKSxcbiAgYnVpbGRUYXNrTGlzdChcImNcIiksXG5dO1xuZnVuY3Rpb24gYnVpbGRUYXNrTGlzdChtb2RpZmllcikge1xuICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tCdWlsZGVyKFxuICAgICAgYHRhc2ske2l9IGZvciBwcm9qZWN0ICR7bW9kaWZpZXJ9YCxcbiAgICAgIGBkZXNjcmlwdGlvbiR7aX1gLFxuICAgICAgbmV3IERhdGUoYDEwLzI1LyR7MTk4OSArIGl9YCksXG4gICAgICBgJHtpfWAsXG4gICAgICBpICUgMiA/IHRydWUgOiBmYWxzZVxuICAgICk7XG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgfVxuICByZXR1cm4gdGFza0xpc3Q7XG59XG5leHBvcnQgeyB0aHJlZURpZmZlcmVudFRhc2tMaXN0cyBhcyB0YXNrTGlzdFByb3RvdHlwZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuc2Fzc1wiO1xuaW1wb3J0IFwiLi90ZXN0cy9yZW5kZXItcHJvamVjdC1maWVsZC10ZXN0c1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9