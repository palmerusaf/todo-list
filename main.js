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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n.button {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.button__add {\n  background: #7fced8;\n  border-radius: 50%;\n  padding: 3px;\n}\n.button__edit {\n  color: #f4a261ff;\n}\n.button__delete {\n  color: #e76f51ff;\n}\n.button__check {\n  color: green;\n}\n\n.project-field {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: white;\n  height: 100vh;\n  background-color: #264653ff;\n  padding: 10px;\n}\n.project-field__item {\n  border-radius: 5px;\n  background-color: #203B46;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 26px;\n}\n.project-field__item:hover {\n  background-color: #2D5362;\n}\n.project-field__item--active {\n  background-color: #2a9d8f;\n  font-weight: 800;\n}\n.project-field__item--active:hover {\n  background-color: #2fb1a2;\n}\n.project-field__title {\n  padding-left: 9px;\n  overflow: hidden;\n}\n.project-field__item:hover .project-field__buttons {\n  display: inline-flex;\n}\n.project-field__buttons {\n  display: none;\n}\n.project-field__add {\n  justify-content: center;\n  background-color: #264653ff;\n}\n.project-field__add:hover {\n  background-color: #264653ff;\n}\n.project-field__form {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.project-field__text-box {\n  color: white;\n  background-color: #2D5362;\n  font-weight: 600;\n  height: 21px;\n  align-self: center;\n  outline: 2px inset #2a9d8f;\n  border: none;\n  padding-left: 8px;\n  border-radius: 5px;\n  width: 75%;\n}\n@media (max-width: 811px) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}\n@media (false) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.sass"],"names":[],"mappings":"AASA;EACI,SAAA;EACA,sBAAA;EACA,uBAAA;AARJ;;AASA;EACI,gBAAA;EACA,YAAA;EACA,eAAA;AANJ;AAOI;EACI,mBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAMI;EACI,gBAfM;AAWd;AAKI;EACI,gBAhBO;AAaf;AAII;EACI,YAAA;AAFR;;AAIA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,2BAlCO;EAmCP,aAAA;AADJ;AAEI;EACI,kBAAA;EACA,yBArCQ;EAsCR,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AAAR;AACQ;EACI,yBA1CK;AA2CjB;AAAQ;EACI,yBA3CI;EA4CJ,gBAAA;AAEZ;AADY;EACI,yBA7CM;AAgDtB;AAFI;EACI,iBAAA;EACA,gBAAA;AAIR;AAHI;EACI,oBAAA;AAKR;AAJI;EACI,aAAA;AAMR;AALI;EACI,uBAAA;EACA,2BA3DG;AAkEX;AANQ;EACI,2BA7DD;AAqEX;AAPI;EACI,WAAA;EACA,aAAA;EACA,8BAAA;AASR;AARI;EACI,YAAA;EACA,yBAlES;EAmET,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AAUR;AATI;EACI;IACI,oBAAA;EAWV;AACF;AAXI;EACI;IACI,oBAAA;EAaV;AACF","sourcesContent":["// https://coolors.co/203b46-2fb1a2-e9c46a-f4a261-e76f51\n$charcoal: #264653ff\n$charcoal-dark: #203B46\n$charcoal-hover: #2D5362\n$persian-green: #2a9d8f\n$persian-green-hover: #2fb1a2\n$orange-yellow-crayola: #e9c46aff\n$sandy-brown: #f4a261ff\n$burnt-sienna: #e76f51ff\n*\n    margin: 0\n    box-sizing: border-box\n    font-family: sans-serif\n.button\n    background: none\n    border: none\n    cursor: pointer\n    &__add\n        background: rgb(127,206,216)\n        border-radius: 50%\n        padding: 3px\n    &__edit\n        color: $sandy-brown\n    &__delete\n        color: $burnt-sienna\n    &__check\n        color: green\n\n.project-field\n    width: 25%\n    display: flex\n    flex-direction: column\n    gap: 10px\n    color: white\n    height: 100vh\n    background-color: $charcoal\n    padding: 10px\n    &__item\n        border-radius: 5px\n        background-color: $charcoal-dark\n        display: flex\n        justify-content: space-between\n        align-items: center\n        height: 26px\n        &:hover\n            background-color: $charcoal-hover\n        &--active\n            background-color: $persian-green\n            font-weight: 800\n            &:hover\n                background-color: $persian-green-hover\n    &__title\n        padding-left: 9px\n        overflow: hidden\n    &__item:hover &__buttons\n        display: inline-flex\n    &__buttons\n        display: none\n    &__add\n        justify-content: center\n        background-color: $charcoal\n        &:hover\n            background-color: $charcoal\n    &__form\n        width: 100%\n        display: flex\n        justify-content: space-between\n    &__text-box\n        color: white\n        background-color: $charcoal-hover\n        font-weight: 600\n        height: 21px\n        align-self: center\n        outline: 2px inset $persian-green\n        border: none\n        padding-left: 8px\n        border-radius: 5px\n        width: 75%\n    @media (max-width: 811px)\n        &__item--active &__buttons\n            display: inline-flex\n    @media (not(hover))\n        &__item--active &__buttons\n            display: inline-flex\n"],"sourceRoot":""}]);
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
  // for bem class names
  const pf = easy_bem__WEBPACK_IMPORTED_MODULE_3___default()("project-field");

  // Initialize projectField
  const projectField = document.createElement("div");
  projectField.classList.add(pf());

  // Initialize PubSubs
  _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.subscribe("updateListOfProjects", renderProjectFieldContent);
  // TO-DO Remove after localStorage implementation
  _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("loadProjectList");
  // TO-DO Remove after localStorage implementation

  function renderProjectFieldContent(projectList) {
    projectField.textContent = "";
    projectList.forEach((project, index) => {
      projectField.appendChild(_makeProjectItem(project, index));
    });
    projectField.appendChild(_makeAddProjectButton());

    function _makeProjectItem(project, index) {
      const span = document.createElement("span");
      span.classList = pf("item", { active: project.activeStatus });
      span.dataset.projectIndex = index;
      span.addEventListener("click", _setItemActiveOnClick);
      span.appendChild(_makeProjectTitle(project, index));
      span.appendChild(_makeButtonField(index));
      return span;

      function _makeProjectTitle(project) {
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

        function _makeProjectDeleteButton() {
          const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeDeleteButton();
          button.addEventListener("click", _deleteProjectOnClick);
          return button;

          function _deleteProjectOnClick() {
            const projectIndex =
              this.parentNode.parentNode.dataset.projectIndex;
            _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectDeleteClick", { projectIndex });
          }
        }

        function _makeProjectEditButton() {
          const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeEditButton();
          button.addEventListener("click", _handleEditButtonClick);
          return button;

          function _handleEditButtonClick() {
            replaceLabelWithForm(this);

            const test = (index) => {
              replaceLabelWithForm(index);
            };
            return test;
            function replaceLabelWithForm(clickEvent) {
              const projectIndex =
                clickEvent.parentNode.parentNode.dataset.projectIndex;
              const projectTitle = _getProjectTitle(projectIndex);
              const projectLabel = _getProjectLabel(projectIndex);
              const preFilledForm = _makeProjectEntryForm(
                projectTitle,
                projectIndex
              );

              projectField.replaceChild(preFilledForm, projectLabel);

              function _getProjectTitle(projectIndex) {
                return document.querySelector(
                  `[data-project-index='${projectIndex}'] .${pf("title")}`
                ).textContent;
              }

              function _getProjectLabel(projectIndex) {
                return document.querySelector(
                  `[data-project-index='${projectIndex}'].${pf("item")}`
                );
              }

              function _makeProjectEntryForm(projectTitle, projectIndex) {
                const container = _makeEntryContainer(projectIndex);
                const form = _makeForm(projectTitle);
                container.appendChild(form);
                return container;

                function _makeEntryContainer(projectIndex) {
                  const span = document.createElement("span");
                  span.classList = pf("item");
                  span.dataset.projectIndex = projectIndex;
                  return span;
                }

                function _makeForm(projectTitle) {
                  const form = document.createElement("form");
                  form.classList = pf("form");
                  form.action = "#";
                  form.onsubmit = "return false";
                  const textEntryBox = _makeTextEntryBox(projectTitle);
                  const submitButton = _makeSubmitButton();
                  form.appendChild(textEntryBox);
                  form.appendChild(submitButton);
                  return form;

                  function _makeTextEntryBox(projectTitle) {
                    const textEntryBox = document.createElement("input");
                    textEntryBox.classList = pf("text-box");
                    textEntryBox.placeholder = "Enter project name";
                    textEntryBox.value = projectTitle || "";
                    textEntryBox.required = true;
                    return textEntryBox;
                  }

                  function _makeSubmitButton() {
                    const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeCheckButton();
                    button.addEventListener("click", _submitEntryForm);
                    return button;

                    function _submitEntryForm() {
                      const title = this.parentNode[0].value;
                      if (title === "") return;
                      const projectIndex =
                        this.parentNode.parentNode.dataset.projectIndex;
                      _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectAddClick", {
                        title,
                        projectIndex,
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }

      function _setItemActiveOnClick(clickEvent) {
        if (buttonWasClicked(clickEvent)) return;
        const projectIndex = this.dataset.projectIndex;
        _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectSetActiveClick", { projectIndex });

        function buttonWasClicked(clickEvent) {
          return [...clickEvent.target.classList].includes("button");
        }
      }
    }

    function _makeAddProjectButton() {
      const button = _render_js__WEBPACK_IMPORTED_MODULE_0__.Render.makeAddButton();
      button.addEventListener("click", _insertBlankEntryForm);
      const span = document.createElement("span");
      span.classList = pf("item");
      span.classList.add(pf("add"));
      span.appendChild(button);
      return span;

      function _insertBlankEntryForm() {
        projectField.insertBefore(_makeProjectEntryForm(), this.parentNode);
      }
    }
  }

  return {
    projectField,
  };
})();


/***/ }),

/***/ "./src/render-task-field.js":
/*!**********************************!*\
  !*** ./src/render-task-field.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderTaskField": () => (/* binding */ RenderTaskField)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list-controller */ "./src/project-list-controller.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
/* harmony import */ var easy_bem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easy-bem */ "./node_modules/easy-bem/index.js");
/* harmony import */ var easy_bem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(easy_bem__WEBPACK_IMPORTED_MODULE_3__);





const RenderTaskField = (() => {
  // for bem class names
  const tf = easy_bem__WEBPACK_IMPORTED_MODULE_3___default()("task-field");

  // Initialize PubSubs
  _pubsub_js__WEBPACK_IMPORTED_MODULE_2__.pubsub.subscribe("updateListOfProjects", renderTaskFieldContent);

  // Initialize taskField
  const taskField = document.createElement("div");
  taskField.classList.add(tf());
  taskField.textContent = "test";

  function renderTaskFieldContent(projectList) {
    const project = _getActiveProject(projectList);
    taskField.textContent = "";
    if (!project) return;
    taskField.appendChild(_makeProjectTitle(project));
    taskField.appendChild(_makeTaskList(project));
    return taskField;

    function _makeProjectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("title"));
      console.log(project);
      title.textContent = `Task List for ${project.title}`;
      return title;
    }

    function _makeTaskList(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      return list;
    }

    function _getActiveProject(projectList) {
      return projectList.filter((project) => project.activeStatus)[0];
    }
  }

  return { taskField };
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

/***/ "./src/tests/render-task-field-tests.js":
/*!**********************************************!*\
  !*** ./src/tests/render-task-field-tests.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_project_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render-project-field */ "./src/render-project-field.js");
/* harmony import */ var _render_task_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render-task-field */ "./src/render-task-field.js");
/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-list-controller */ "./src/project-list-controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub */ "./src/pubsub.js");
/* harmony import */ var _project_builder_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-builder-test */ "./src/tests/project-builder-test.js");






// initialize project field
_pubsub__WEBPACK_IMPORTED_MODULE_3__.pubsub.publish("loadProjectList", _project_builder_test__WEBPACK_IMPORTED_MODULE_4__.projectListPrototype);
const container = document.createElement("div");
container.style.display = "flex";
document.body.appendChild(container);
container.appendChild(_render_project_field__WEBPACK_IMPORTED_MODULE_0__.RenderProjectField.projectField);
container.appendChild(_render_task_field__WEBPACK_IMPORTED_MODULE_1__.RenderTaskField.taskField);


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
/* harmony import */ var _tests_render_task_field_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests/render-task-field-tests */ "./src/tests/render-task-field-tests.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zYXNzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Vhc3ktYmVtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zYXNzP2U4ZjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1idWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItcHJvamVjdC1maWVsZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLXRhc2stZmllbGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1idWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZXN0cy9wcm9qZWN0LWJ1aWxkZXItdGVzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVzdHMvcmVuZGVyLXRhc2stZmllbGQtdGVzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rlc3RzL3Rhc2stYnVpbGRlci10ZXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbl9fYWRkIHtcXG4gIGJhY2tncm91bmQ6ICM3ZmNlZDg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbi5idXR0b25fX2VkaXQge1xcbiAgY29sb3I6ICNmNGEyNjFmZjtcXG59XFxuLmJ1dHRvbl9fZGVsZXRlIHtcXG4gIGNvbG9yOiAjZTc2ZjUxZmY7XFxufVxcbi5idXR0b25fX2NoZWNrIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByb2plY3QtZmllbGQge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQ2NTNmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDNCNDY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjZweDtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJENTM2MjtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmZiMWEyO1xcbn1cXG4ucHJvamVjdC1maWVsZF9fdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbTpob3ZlciAucHJvamVjdC1maWVsZF9fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3QtZmllbGRfX2FkZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQ2NTNmZjtcXG59XFxuLnByb2plY3QtZmllbGRfX2FkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3QtZmllbGRfX3RleHQtYm94IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDUzNjI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgb3V0bGluZTogMnB4IGluc2V0ICMyYTlkOGY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MTFweCkge1xcbiAgLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZSAucHJvamVjdC1maWVsZF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKGZhbHNlKSB7XFxuICAucHJvamVjdC1maWVsZF9faXRlbS0tYWN0aXZlIC5wcm9qZWN0LWZpZWxkX19idXR0b25zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMUjtBQU1JO0VBQ0ksZ0JBZk07QUFXZDtBQUtJO0VBQ0ksZ0JBaEJPO0FBYWY7QUFJSTtFQUNJLFlBQUE7QUFGUjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFsQ087RUFtQ1AsYUFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLHlCQXJDUTtFQXNDUixhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUNRO0VBQ0kseUJBMUNLO0FBMkNqQjtBQUFRO0VBQ0kseUJBM0NJO0VBNENKLGdCQUFBO0FBRVo7QUFEWTtFQUNJLHlCQTdDTTtBQWdEdEI7QUFGSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUhJO0VBQ0ksb0JBQUE7QUFLUjtBQUpJO0VBQ0ksYUFBQTtBQU1SO0FBTEk7RUFDSSx1QkFBQTtFQUNBLDJCQTNERztBQWtFWDtBQU5RO0VBQ0ksMkJBN0REO0FBcUVYO0FBUEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBU1I7QUFSSTtFQUNJLFlBQUE7RUFDQSx5QkFsRVM7RUFtRVQsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVVSO0FBVEk7RUFDSTtJQUNJLG9CQUFBO0VBV1Y7QUFDRjtBQVhJO0VBQ0k7SUFDSSxvQkFBQTtFQWFWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gaHR0cHM6Ly9jb29sb3JzLmNvLzIwM2I0Ni0yZmIxYTItZTljNDZhLWY0YTI2MS1lNzZmNTFcXG4kY2hhcmNvYWw6ICMyNjQ2NTNmZlxcbiRjaGFyY29hbC1kYXJrOiAjMjAzQjQ2XFxuJGNoYXJjb2FsLWhvdmVyOiAjMkQ1MzYyXFxuJHBlcnNpYW4tZ3JlZW46ICMyYTlkOGZcXG4kcGVyc2lhbi1ncmVlbi1ob3ZlcjogIzJmYjFhMlxcbiRvcmFuZ2UteWVsbG93LWNyYXlvbGE6ICNlOWM0NmFmZlxcbiRzYW5keS1icm93bjogI2Y0YTI2MWZmXFxuJGJ1cm50LXNpZW5uYTogI2U3NmY1MWZmXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZlxcbi5idXR0b25cXG4gICAgYmFja2dyb3VuZDogbm9uZVxcbiAgICBib3JkZXI6IG5vbmVcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICZfX2FkZFxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEyNywyMDYsMjE2KVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXFxuICAgICAgICBwYWRkaW5nOiAzcHhcXG4gICAgJl9fZWRpdFxcbiAgICAgICAgY29sb3I6ICRzYW5keS1icm93blxcbiAgICAmX19kZWxldGVcXG4gICAgICAgIGNvbG9yOiAkYnVybnQtc2llbm5hXFxuICAgICZfX2NoZWNrXFxuICAgICAgICBjb2xvcjogZ3JlZW5cXG5cXG4ucHJvamVjdC1maWVsZFxcbiAgICB3aWR0aDogMjUlXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBnYXA6IDEwcHhcXG4gICAgY29sb3I6IHdoaXRlXFxuICAgIGhlaWdodDogMTAwdmhcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsXFxuICAgIHBhZGRpbmc6IDEwcHhcXG4gICAgJl9faXRlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtZGFya1xcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICBoZWlnaHQ6IDI2cHhcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtaG92ZXJcXG4gICAgICAgICYtLWFjdGl2ZVxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZXJzaWFuLWdyZWVuXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlcnNpYW4tZ3JlZW4taG92ZXJcXG4gICAgJl9fdGl0bGVcXG4gICAgICAgIHBhZGRpbmctbGVmdDogOXB4XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICZfX2l0ZW06aG92ZXIgJl9fYnV0dG9uc1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhcXG4gICAgJl9fYnV0dG9uc1xcbiAgICAgICAgZGlzcGxheTogbm9uZVxcbiAgICAmX19hZGRcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgJl9fZm9ybVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAmX190ZXh0LWJveFxcbiAgICAgICAgY29sb3I6IHdoaXRlXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWwtaG92ZXJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgICAgIGhlaWdodDogMjFweFxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXFxuICAgICAgICBvdXRsaW5lOiAycHggaW5zZXQgJHBlcnNpYW4tZ3JlZW5cXG4gICAgICAgIGJvcmRlcjogbm9uZVxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHhcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxcbiAgICAgICAgd2lkdGg6IDc1JVxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODExcHgpXFxuICAgICAgICAmX19pdGVtLS1hY3RpdmUgJl9fYnV0dG9uc1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XFxuICAgIEBtZWRpYSAobm90KGhvdmVyKSlcXG4gICAgICAgICZfX2l0ZW0tLWFjdGl2ZSAmX19idXR0b25zXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEJFTSBjbGFzcyBuYW1lIGZhY3RvcnkuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtGdW5jdGlvbn0gQmVtXHJcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gW2VsZW1lbnRPck1vZHNdIEVsZW1lbnQgbmFtZSBvciBoYXNoIG9iamVjdCB3aXRoIG1vZHNcclxuICogQHBhcmFtIHtPYmplY3R9IFttb2RzXSBIYXNoIG9iamVjdCB3aXRoIG1vZHNcclxuICogQHJldHVybnMge1N0cmluZ31cclxuICovXHJcblxyXG4vKipcclxuICogUmV0dXJucyBCRU0gY2xhc3MgbmFtZSBmYWN0b3J5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50TmFtZSBCbG9jayBuYW1lXHJcbiAqIEByZXR1cm5zIHtCZW19XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlbShjb21wb25lbnROYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnRPck1vZHMsIG1vZHMpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnRPck1vZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50T3JNb2RzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudE9yTW9kcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RzID0gZWxlbWVudE9yTW9kcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBiYXNlID0gY29tcG9uZW50TmFtZTtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBiYXNlICs9ICdfXycgKyBlbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJhc2UgKyAoXHJcbiAgICAgICAgICAgIG1vZHNcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmtleXMobW9kcykucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBtb2RzW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcgJyArIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoYmFzZSArICctLScgKyBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGJhc2UgKyAnLS0nICsgbmFtZSArICdfJyArIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0sICcnKVxyXG4gICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza0J1aWxkZXIgfSBmcm9tIFwiLi90YXNrLWJ1aWxkZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RCdWlsZGVyID0gZnVuY3Rpb24gKHRpdGxlLCB0YXNrTGlzdCwgYWN0aXZlU3RhdHVzKSB7XG4gIHJldHVybiB7IHRpdGxlLCB0YXNrTGlzdCwgYWN0aXZlU3RhdHVzIH07XG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdEJ1aWxkZXIgfSBmcm9tIFwiLi9wcm9qZWN0LWJ1aWxkZXIuanNcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IHsgdGFza0J1aWxkZXIgfSBmcm9tIFwiLi90YXNrLWJ1aWxkZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwibG9hZFByb2plY3RMaXN0XCIsIGluaXRQcm9qZWN0TGlzdCk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0RGVsZXRlQ2xpY2tcIiwgZGVsZXRlUHJvamVjdCk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0YXNrRGVsZXRlQ2xpY2tcIiwgZGVsZXRlVGFzayk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0YXNrQWRkQ2xpY2tcIiwgYWRkVGFzayk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0QWRkQ2xpY2tcIiwgYWRkUHJvamVjdCk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0U2V0QWN0aXZlQ2xpY2tcIiwgc2V0QWN0aXZlUHJvamVjdCk7XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2dnbGVUYXNrQ29tcGxldGVDbGlja1wiLCB0b2dnbGVUYXNrQ29tcGxldGUpO1xuXG4gIGZ1bmN0aW9uIGluaXRQcm9qZWN0TGlzdChzdG9yZWRMaXN0KSB7XG4gICAgcHJvamVjdExpc3QgPSBzdG9yZWRMaXN0IHx8IGJ1aWxkRGVmYXVsdExpc3QoKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkRGVmYXVsdExpc3QoKSB7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RCdWlsZGVyKFwiTXkgUHJvamVjdFwiLCBbXSwgdHJ1ZSk7XG4gICAgbGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoY2xpY2tFdmVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgcHJvamVjdExpc3RbaW5kZXhdXG4gICAgICA/IHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIDogY29uc29sZS53YXJuKGBQcm9qZWN0IGluZGV4ICR7aW5kZXh9IG5vdCBmb3VuZCB0byBkZWxldGUuYCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHRJID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgcHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXVxuICAgICAgPyBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3Quc3BsaWNlKHRJLCAxKVxuICAgICAgOiBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYFByb2plY3QgaW5kZXggJHtwSX0sdGFzayBpbmRleCAke3RJfSBub3QgZm91bmQgdG8gZGVsZXRlLmBcbiAgICAgICAgKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2soY2xpY2tFdmVudCkge1xuICAgIGlmICh0YXNrQWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSkgcmVwbGFjZU9sZFRhc2tXaXRoTmV3VGFzayhjbGlja0V2ZW50KTtcbiAgICBlbHNlIGFwcGVuZExpc3RXaXRoTmV3VGFzayhjbGlja0V2ZW50KTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIHRhc2tBbHJlYWR5RXhpc3RzKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBjbGlja0V2ZW50LnRhc2tJbmRleDtcbiAgICAgIGNvbnN0IHRhc2tMaXN0TGVuZ3RoID0gcHJvamVjdExpc3RbcEldLnRhc2tMaXN0Lmxlbmd0aDtcbiAgICAgIGlmICh0YXNrSW5kZXggIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRhc2tJbmRleCA8IHRhc2tMaXN0TGVuZ3RoO1xuICAgICAgcmV0dXJuIHRhc2tJbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRMaXN0V2l0aE5ld1Rhc2soY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdC5wdXNoKGNyZWF0ZVRhc2tGcm9tQ2xpY2tFdmVudChjbGlja0V2ZW50KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZU9sZFRhc2tXaXRoTmV3VGFzayhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgY29uc3QgdEkgPSBjbGlja0V2ZW50LnRhc2tJbmRleDtcbiAgICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV0gPSBjcmVhdGVUYXNrRnJvbUNsaWNrRXZlbnQoY2xpY2tFdmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21DbGlja0V2ZW50KGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gY2xpY2tFdmVudC50aXRsZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY2xpY2tFdmVudC5kZXNjcmlwdGlvbjtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBjbGlja0V2ZW50LmR1ZURhdGU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGNsaWNrRXZlbnQucHJpb3JpdHk7XG4gICAgICBjb25zdCB0YXNrQ29tcGxldGVTdGF0dXMgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0YXNrQnVpbGRlcihcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgdGFza0NvbXBsZXRlU3RhdHVzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoY2xpY2tFdmVudCkge1xuICAgIGlmIChwcm9qZWN0QWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSkgY2hhbmdlUHJvamVjdFRpdGxlKGNsaWNrRXZlbnQpO1xuICAgIGVsc2UgYXBwZW5kUHJvamVjdChjbGlja0V2ZW50KTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIHByb2plY3RBbHJlYWR5RXhpc3RzKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBpZiAocEkgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHBJIDwgcHJvamVjdExpc3QubGVuZ3RoO1xuICAgICAgcmV0dXJuIHBJO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVByb2plY3RUaXRsZShjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgY29uc3QgbmV3VGl0bGUgPSBjbGlja0V2ZW50LnRpdGxlO1xuICAgICAgcHJvamVjdExpc3RbcEldLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kUHJvamVjdChjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGNsaWNrRXZlbnQudGl0bGU7XG4gICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3RCdWlsZGVyKHRpdGxlLCBbXSwgZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgIGlmIChwcm9qZWN0TGlzdFtwSV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlByb2plY3QgSW5kZXggdW5kZWZpbmVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0QWxsUHJvamVjdHNUb0luQWN0aXZlKCk7XG4gICAgc2V0UHJvamVjdEluZGV4VG9BY3RpdmUocEkpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuXG4gICAgZnVuY3Rpb24gc2V0QWxsUHJvamVjdHNUb0luQWN0aXZlKCkge1xuICAgICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4gKHByb2plY3QuYWN0aXZlU3RhdHVzID0gZmFsc2UpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9qZWN0SW5kZXhUb0FjdGl2ZShpbmRleCkge1xuICAgICAgcHJvamVjdExpc3RbaW5kZXhdLmFjdGl2ZVN0YXR1cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVGFza0NvbXBsZXRlKGNsaWNrRXZlbnQpIHtcbiAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHRJID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgcHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXS50YXNrQ29tcGxldGVTdGF0dXNcbiAgICAgID8gKHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV0udGFza0NvbXBsZXRlU3RhdHVzID0gZmFsc2UpXG4gICAgICA6IChwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldLnRhc2tDb21wbGV0ZVN0YXR1cyA9IHRydWUpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgICBldmVudHM6IHt9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFja0Z1bmNUb1N1Yikge1xuICAgICAgY29uc29sZS5pbmZvKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldmVudE5hbWV9YCk7XG4gICAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2tGdW5jVG9TdWIpO1xuICAgIH0sXG4gICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9VblN1Yikge1xuICAgICAgY29uc29sZS5pbmZvKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2ZW50TmFtZX1gKTtcbiAgICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZpbHRlcihjYWxsYmFja0Z1bmMgPT4gY2FsbGJhY2tGdW5jICE9PSBjYWxsYmFja0Z1bmNUb1VuU3ViKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgY29uc29sZS5pbmZvKGBQVUJTVUI6IE1ha2luZyBhbiBicm9hZGNhc3QgYWJvdXQgJHtldmVudE5hbWV9IHdpdGggYCxkYXRhKTtcbiAgICAgIC8vZW1pdHxwdWJsaXNofGFubm91bmNlIHRoZSBldmVudCB0byBhbnlvbmUgd2hvIGlzIHN1YnNjcmliZWRcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFja0Z1bmMgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrRnVuYyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9OyIsImltcG9ydCB7IFJlbmRlciB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0IFwiLi9wcm9qZWN0LWxpc3QtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgYmVtIGZyb20gXCJlYXN5LWJlbVwiO1xuXG5leHBvcnQgY29uc3QgUmVuZGVyUHJvamVjdEZpZWxkID0gKCgpID0+IHtcbiAgLy8gZm9yIGJlbSBjbGFzcyBuYW1lc1xuICBjb25zdCBwZiA9IGJlbShcInByb2plY3QtZmllbGRcIik7XG5cbiAgLy8gSW5pdGlhbGl6ZSBwcm9qZWN0RmllbGRcbiAgY29uc3QgcHJvamVjdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEZpZWxkLmNsYXNzTGlzdC5hZGQocGYoKSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBQdWJTdWJzXG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCByZW5kZXJQcm9qZWN0RmllbGRDb250ZW50KTtcbiAgLy8gVE8tRE8gUmVtb3ZlIGFmdGVyIGxvY2FsU3RvcmFnZSBpbXBsZW1lbnRhdGlvblxuICBwdWJzdWIucHVibGlzaChcImxvYWRQcm9qZWN0TGlzdFwiKTtcbiAgLy8gVE8tRE8gUmVtb3ZlIGFmdGVyIGxvY2FsU3RvcmFnZSBpbXBsZW1lbnRhdGlvblxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RGaWVsZENvbnRlbnQocHJvamVjdExpc3QpIHtcbiAgICBwcm9qZWN0RmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBwcm9qZWN0RmllbGQuYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0SXRlbShwcm9qZWN0LCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByb2plY3RGaWVsZC5hcHBlbmRDaGlsZChfbWFrZUFkZFByb2plY3RCdXR0b24oKSk7XG5cbiAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RJdGVtKHByb2plY3QsIGluZGV4KSB7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwiaXRlbVwiLCB7IGFjdGl2ZTogcHJvamVjdC5hY3RpdmVTdGF0dXMgfSk7XG4gICAgICBzcGFuLmRhdGFzZXQucHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc2V0SXRlbUFjdGl2ZU9uQ2xpY2spO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZVByb2plY3RUaXRsZShwcm9qZWN0LCBpbmRleCkpO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZUJ1dHRvbkZpZWxkKGluZGV4KSk7XG4gICAgICByZXR1cm4gc3BhbjtcblxuICAgICAgZnVuY3Rpb24gX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJ0aXRsZVwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfbWFrZUJ1dHRvbkZpZWxkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcImJ1dHRvbnNcIik7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0RWRpdEJ1dHRvbigpKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZVByb2plY3REZWxldGVCdXR0b24oKSk7XG4gICAgICAgIHJldHVybiBzcGFuO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9tYWtlUHJvamVjdERlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZURlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2RlbGV0ZVByb2plY3RPbkNsaWNrKTtcbiAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuXG4gICAgICAgICAgZnVuY3Rpb24gX2RlbGV0ZVByb2plY3RPbkNsaWNrKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID1cbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaChcInByb2plY3REZWxldGVDbGlja1wiLCB7IHByb2plY3RJbmRleCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RFZGl0QnV0dG9uKCkge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IFJlbmRlci5tYWtlRWRpdEJ1dHRvbigpO1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2hhbmRsZUVkaXRCdXR0b25DbGljayk7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcblxuICAgICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVFZGl0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgICAgICByZXBsYWNlTGFiZWxXaXRoRm9ybSh0aGlzKTtcblxuICAgICAgICAgICAgY29uc3QgdGVzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXBsYWNlTGFiZWxXaXRoRm9ybShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlTGFiZWxXaXRoRm9ybShjbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9nZXRQcm9qZWN0VGl0bGUocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gX2dldFByb2plY3RMYWJlbChwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICBjb25zdCBwcmVGaWxsZWRGb3JtID0gX21ha2VQcm9qZWN0RW50cnlGb3JtKFxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXhcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBwcm9qZWN0RmllbGQucmVwbGFjZUNoaWxkKHByZUZpbGxlZEZvcm0sIHByb2plY3RMYWJlbCk7XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gX2dldFByb2plY3RUaXRsZShwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1wcm9qZWN0LWluZGV4PScke3Byb2plY3RJbmRleH0nXSAuJHtwZihcInRpdGxlXCIpfWBcbiAgICAgICAgICAgICAgICApLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gX2dldFByb2plY3RMYWJlbChwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1wcm9qZWN0LWluZGV4PScke3Byb2plY3RJbmRleH0nXS4ke3BmKFwiaXRlbVwiKX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIF9tYWtlUHJvamVjdEVudHJ5Rm9ybShwcm9qZWN0VGl0bGUsIHByb2plY3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IF9tYWtlRW50cnlDb250YWluZXIocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gX21ha2VGb3JtKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZUVudHJ5Q29udGFpbmVyKHByb2plY3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcIml0ZW1cIik7XG4gICAgICAgICAgICAgICAgICBzcGFuLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX21ha2VGb3JtKHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QgPSBwZihcImZvcm1cIik7XG4gICAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgICAgICAgICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IFwicmV0dXJuIGZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW50cnlCb3ggPSBfbWFrZVRleHRFbnRyeUJveChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gX21ha2VTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dEVudHJ5Qm94KTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtO1xuXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZVRleHRFbnRyeUJveChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVudHJ5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RW50cnlCb3guY2xhc3NMaXN0ID0gcGYoXCJ0ZXh0LWJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVudHJ5Qm94LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVudHJ5Qm94LnZhbHVlID0gcHJvamVjdFRpdGxlIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbnRyeUJveC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW50cnlCb3g7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9tYWtlU3VibWl0QnV0dG9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZUNoZWNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N1Ym1pdEVudHJ5Rm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gX3N1Ym1pdEVudHJ5Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyZW50Tm9kZVswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0QWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3NldEl0ZW1BY3RpdmVPbkNsaWNrKGNsaWNrRXZlbnQpIHtcbiAgICAgICAgaWYgKGJ1dHRvbldhc0NsaWNrZWQoY2xpY2tFdmVudCkpIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0U2V0QWN0aXZlQ2xpY2tcIiwgeyBwcm9qZWN0SW5kZXggfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gYnV0dG9uV2FzQ2xpY2tlZChjbGlja0V2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5jbGlja0V2ZW50LnRhcmdldC5jbGFzc0xpc3RdLmluY2x1ZGVzKFwiYnV0dG9uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VBZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VBZGRCdXR0b24oKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2luc2VydEJsYW5rRW50cnlGb3JtKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJpdGVtXCIpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHBmKFwiYWRkXCIpKTtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIHJldHVybiBzcGFuO1xuXG4gICAgICBmdW5jdGlvbiBfaW5zZXJ0QmxhbmtFbnRyeUZvcm0oKSB7XG4gICAgICAgIHByb2plY3RGaWVsZC5pbnNlcnRCZWZvcmUoX21ha2VQcm9qZWN0RW50cnlGb3JtKCksIHRoaXMucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0RmllbGQsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgXCIuL3Byb2plY3QtbGlzdC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCBiZW0gZnJvbSBcImVhc3ktYmVtXCI7XG5cbmV4cG9ydCBjb25zdCBSZW5kZXJUYXNrRmllbGQgPSAoKCkgPT4ge1xuICAvLyBmb3IgYmVtIGNsYXNzIG5hbWVzXG4gIGNvbnN0IHRmID0gYmVtKFwidGFzay1maWVsZFwiKTtcblxuICAvLyBJbml0aWFsaXplIFB1YlN1YnNcbiAgcHVic3ViLnN1YnNjcmliZShcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHJlbmRlclRhc2tGaWVsZENvbnRlbnQpO1xuXG4gIC8vIEluaXRpYWxpemUgdGFza0ZpZWxkXG4gIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKHRmKCkpO1xuICB0YXNrRmllbGQudGV4dENvbnRlbnQgPSBcInRlc3RcIjtcblxuICBmdW5jdGlvbiByZW5kZXJUYXNrRmllbGRDb250ZW50KHByb2plY3RMaXN0KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IF9nZXRBY3RpdmVQcm9qZWN0KHByb2plY3RMaXN0KTtcbiAgICB0YXNrRmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGlmICghcHJvamVjdCkgcmV0dXJuO1xuICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChfbWFrZVByb2plY3RUaXRsZShwcm9qZWN0KSk7XG4gICAgdGFza0ZpZWxkLmFwcGVuZENoaWxkKF9tYWtlVGFza0xpc3QocHJvamVjdCkpO1xuICAgIHJldHVybiB0YXNrRmllbGQ7XG5cbiAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RUaXRsZShwcm9qZWN0KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQodGYoXCJ0aXRsZVwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFRhc2sgTGlzdCBmb3IgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VUYXNrTGlzdChwcm9qZWN0KSB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCh0ZihcInRhc2stbGlzdFwiKSk7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0QWN0aXZlUHJvamVjdChwcm9qZWN0TGlzdCkge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5hY3RpdmVTdGF0dXMpWzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRhc2tGaWVsZCB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBSZW5kZXIgPSAoKCkgPT4ge1xuICAvLyBMaW5rIHN0eWxlc2hlZXQgZm9yIGljb25zXG4gIHtcbiAgICBjb25zdCBnb29nbGVJY29uc1N0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBnb29nbGVJY29uc1N0eWxlU2hlZXQuaHJlZiA9XG4gICAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWRcIjtcbiAgICBnb29nbGVJY29uc1N0eWxlU2hlZXQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnb29nbGVJY29uc1N0eWxlU2hlZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ha2VJY29uQnV0dG9uKGNvbnRlbnQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiLFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIGBidXR0b25fXyR7Y29udGVudH1gXG4gICAgKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICBjb25zdCBtYWtlQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJhZGRcIik7XG4gIH07XG5cbiAgY29uc3QgbWFrZUVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9tYWtlSWNvbkJ1dHRvbihcImVkaXRcIik7XG4gIH07XG5cbiAgY29uc3QgbWFrZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX21ha2VJY29uQnV0dG9uKFwiZGVsZXRlXCIpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VDaGVja0J1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX21ha2VJY29uQnV0dG9uKFwiY2hlY2tcIik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtYWtlQWRkQnV0dG9uLFxuICAgIG1ha2VFZGl0QnV0dG9uLFxuICAgIG1ha2VEZWxldGVCdXR0b24sXG4gICAgbWFrZUNoZWNrQnV0dG9uLFxuICB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCB0YXNrQnVpbGRlciA9IGZ1bmN0aW9uIChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgdGFza0NvbXBsZXRlU3RhdHVzXG4pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGFza0NvbXBsZXRlU3RhdHVzIH07XG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdEJ1aWxkZXIgfSBmcm9tIFwiLi4vcHJvamVjdC1idWlsZGVyXCI7XG5pbXBvcnQgeyB0YXNrTGlzdFByb3RvdHlwZSB9IGZyb20gXCIuL3Rhc2stYnVpbGRlci10ZXN0c1wiO1xuXG5sZXQgcHJvamVjdExpc3RQcm90b3R5cGUgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RCdWlsZGVyKFxuICAgIGBwcm9qZWN0JHtpfWAsXG4gICAgdGFza0xpc3RQcm90b3R5cGVbaV0sXG4gICAgaSAlIDIgPyB0cnVlIDogZmFsc2VcbiAgKTtcbiAgcHJvamVjdExpc3RQcm90b3R5cGUucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZXhwb3J0IHsgcHJvamVjdExpc3RQcm90b3R5cGUgfTtcbiIsImltcG9ydCB7IFJlbmRlclByb2plY3RGaWVsZCB9IGZyb20gXCIuLi9yZW5kZXItcHJvamVjdC1maWVsZFwiO1xuaW1wb3J0IHsgUmVuZGVyVGFza0ZpZWxkIH0gZnJvbSBcIi4uL3JlbmRlci10YXNrLWZpZWxkXCI7XG5pbXBvcnQgXCIuLi9wcm9qZWN0LWxpc3QtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3RQcm90b3R5cGUgfSBmcm9tIFwiLi9wcm9qZWN0LWJ1aWxkZXItdGVzdFwiO1xuXG4vLyBpbml0aWFsaXplIHByb2plY3QgZmllbGRcbnB1YnN1Yi5wdWJsaXNoKFwibG9hZFByb2plY3RMaXN0XCIsIHByb2plY3RMaXN0UHJvdG90eXBlKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKFJlbmRlclByb2plY3RGaWVsZC5wcm9qZWN0RmllbGQpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKFJlbmRlclRhc2tGaWVsZC50YXNrRmllbGQpO1xuIiwiaW1wb3J0IHsgdGFza0J1aWxkZXIgfSBmcm9tIFwiLi4vdGFzay1idWlsZGVyLmpzXCI7XG5cbmxldCB0aHJlZURpZmZlcmVudFRhc2tMaXN0cyA9IFtcbiAgYnVpbGRUYXNrTGlzdChcImFcIiksXG4gIGJ1aWxkVGFza0xpc3QoXCJiXCIpLFxuICBidWlsZFRhc2tMaXN0KFwiY1wiKSxcbl07XG5mdW5jdGlvbiBidWlsZFRhc2tMaXN0KG1vZGlmaWVyKSB7XG4gIGxldCB0YXNrTGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0J1aWxkZXIoXG4gICAgICBgdGFzayR7aX0gZm9yIHByb2plY3QgJHttb2RpZmllcn1gLFxuICAgICAgYGRlc2NyaXB0aW9uJHtpfWAsXG4gICAgICBuZXcgRGF0ZShgMTAvMjUvJHsxOTg5ICsgaX1gKSxcbiAgICAgIGAke2l9YCxcbiAgICAgIGkgJSAyID8gdHJ1ZSA6IGZhbHNlXG4gICAgKTtcbiAgICB0YXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICB9XG4gIHJldHVybiB0YXNrTGlzdDtcbn1cbmV4cG9ydCB7IHRocmVlRGlmZmVyZW50VGFza0xpc3RzIGFzIHRhc2tMaXN0UHJvdG90eXBlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5zYXNzXCI7XG5pbXBvcnQgXCIuL3Rlc3RzL3JlbmRlci10YXNrLWZpZWxkLXRlc3RzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=