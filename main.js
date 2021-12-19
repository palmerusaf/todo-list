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
    taskField.textContent = "";

    const project = _getActiveProject(projectList);
    if (!project) return;
    
    const projectIndex = _getActiveProjectIndex(projectList);
    taskField.dataset.projectIndex = projectIndex;
    taskField.appendChild(_makeProjectTitle(project));
    taskField.appendChild(_makeTaskList(project));
    return taskField;

    function _makeProjectTitle(project) {
      const title = document.createElement("h1");
      title.classList.add(tf("project-title"));
      console.log(project);
      title.textContent = `Task List for ${project.title}`;
      return title;
    }

    function _makeTaskList(project) {
      const list = document.createElement("div");
      list.classList.add(tf("task-list"));
      project.taskList.forEach((task) => list.appendChild(_makeTaskItem(task)));
      return list;

      function _makeTaskItem(task) {
        const item = document.createElement("span");
        item.classList = tf("task-item", {
          ["mark-done"]: task.taskCompleteStatus,
        });
        item.appendChild(_makeTaskMainView(task));
        item.appendChild(_makeTaskExpandedView(task));
        return item;
      }

      function _makeTaskMainView(task) {
        const container = document.createElement("div");
        container.classList = tf("main-view");
        container.appendChild(_makeTaskTitle(task));
        container.appendChild(_makeDueDate(task));
        container.appendChild(_makeButtonField());
        return container;

        function _makeTaskTitle(task) {
          const title = document.createElement("span");
          title.classList = tf("title");
          title.textContent=task.title
          return title
        }

        function _makeDueDate(task) {
          const dueDate = document.createElement("span");
          dueDate.classList = tf("dueDate");
          dueDate.textContent=task.dueDate
          return dueDate
        }

        function _makeButtonField() {}
      }

      function _makeTaskExpandedView(task) {
        const container = document.createElement("div");
        container.classList = tf("expanded-view", { hidden: true });
        return container;
      }
    }

    function _getActiveProject(projectList) {
      return projectList.filter((project) => project.activeStatus)[0];
    }

    function _getActiveProjectIndex(projectList) {
      return projectList.findIndex((project) => project.activeStatus);
    }
  }

  return { taskField };
})();
// {
// "title": "task0 for project b",
// "description": "description0",
// "dueDate": "1989-10-24T17:00:00.000Z",
// "priority": "0",
// "taskCompleteStatus": false
//   }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLHlFQUF5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pFOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQiw2REFBVztBQUMvQixhQUFhLEdBQUcsY0FBYyxTQUFTO0FBQ3ZDLG9CQUFvQixFQUFFO0FBQ3RCLHdCQUF3QixTQUFTO0FBQ2pDLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RDs7Ozs7OztVQ3JCeEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9lYXN5LWJlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Fzcz9lOGYyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1saXN0LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLXByb2plY3QtZmllbGQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci10YXNrLWZpZWxkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stYnVpbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVzdHMvcHJvamVjdC1idWlsZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rlc3RzL3JlbmRlci10YXNrLWZpZWxkLXRlc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZXN0cy90YXNrLWJ1aWxkZXItdGVzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idXR0b25fX2FkZCB7XFxuICBiYWNrZ3JvdW5kOiAjN2ZjZWQ4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4uYnV0dG9uX19lZGl0IHtcXG4gIGNvbG9yOiAjZjRhMjYxZmY7XFxufVxcbi5idXR0b25fX2RlbGV0ZSB7XFxuICBjb2xvcjogI2U3NmY1MWZmO1xcbn1cXG4uYnV0dG9uX19jaGVjayB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0LWZpZWxkIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzQjQ2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI2cHg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDUzNjI7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmYjFhMjtcXG59XFxuLnByb2plY3QtZmllbGRfX3RpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogOXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW06aG92ZXIgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1M2ZmO1xcbn1cXG4ucHJvamVjdC1maWVsZF9fZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0LWZpZWxkX190ZXh0LWJveCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ1MzYyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMjFweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IDJweCBpbnNldCAjMmE5ZDhmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODExcHgpIHtcXG4gIC5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmUgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIChmYWxzZSkge1xcbiAgLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZSAucHJvamVjdC1maWVsZF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNJLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTko7QUFPSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTFI7QUFNSTtFQUNJLGdCQWZNO0FBV2Q7QUFLSTtFQUNJLGdCQWhCTztBQWFmO0FBSUk7RUFDSSxZQUFBO0FBRlI7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBbENPO0VBbUNQLGFBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFyQ1E7RUFzQ1IsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLHlCQTFDSztBQTJDakI7QUFBUTtFQUNJLHlCQTNDSTtFQTRDSixnQkFBQTtBQUVaO0FBRFk7RUFDSSx5QkE3Q007QUFnRHRCO0FBRkk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFISTtFQUNJLG9CQUFBO0FBS1I7QUFKSTtFQUNJLGFBQUE7QUFNUjtBQUxJO0VBQ0ksdUJBQUE7RUFDQSwyQkEzREc7QUFrRVg7QUFOUTtFQUNJLDJCQTdERDtBQXFFWDtBQVBJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVNSO0FBUkk7RUFDSSxZQUFBO0VBQ0EseUJBbEVTO0VBbUVULGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFVUjtBQVRJO0VBQ0k7SUFDSSxvQkFBQTtFQVdWO0FBQ0Y7QUFYSTtFQUNJO0lBQ0ksb0JBQUE7RUFhVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGh0dHBzOi8vY29vbG9ycy5jby8yMDNiNDYtMmZiMWEyLWU5YzQ2YS1mNGEyNjEtZTc2ZjUxXFxuJGNoYXJjb2FsOiAjMjY0NjUzZmZcXG4kY2hhcmNvYWwtZGFyazogIzIwM0I0NlxcbiRjaGFyY29hbC1ob3ZlcjogIzJENTM2MlxcbiRwZXJzaWFuLWdyZWVuOiAjMmE5ZDhmXFxuJHBlcnNpYW4tZ3JlZW4taG92ZXI6ICMyZmIxYTJcXG4kb3JhbmdlLXllbGxvdy1jcmF5b2xhOiAjZTljNDZhZmZcXG4kc2FuZHktYnJvd246ICNmNGEyNjFmZlxcbiRidXJudC1zaWVubmE6ICNlNzZmNTFmZlxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcXG4uYnV0dG9uXFxuICAgIGJhY2tncm91bmQ6IG5vbmVcXG4gICAgYm9yZGVyOiBub25lXFxuICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAmX19hZGRcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMjcsMjA2LDIxNilcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxcbiAgICAgICAgcGFkZGluZzogM3B4XFxuICAgICZfX2VkaXRcXG4gICAgICAgIGNvbG9yOiAkc2FuZHktYnJvd25cXG4gICAgJl9fZGVsZXRlXFxuICAgICAgICBjb2xvcjogJGJ1cm50LXNpZW5uYVxcbiAgICAmX19jaGVja1xcbiAgICAgICAgY29sb3I6IGdyZWVuXFxuXFxuLnByb2plY3QtZmllbGRcXG4gICAgd2lkdGg6IDI1JVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiAxMHB4XFxuICAgIGNvbG9yOiB3aGl0ZVxcbiAgICBoZWlnaHQ6IDEwMHZoXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbFxcbiAgICBwYWRkaW5nOiAxMHB4XFxuICAgICZfX2l0ZW1cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWRhcmtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgaGVpZ2h0OiAyNnB4XFxuICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWhvdmVyXFxuICAgICAgICAmLS1hY3RpdmVcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVyc2lhbi1ncmVlblxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZXJzaWFuLWdyZWVuLWhvdmVyXFxuICAgICZfX3RpdGxlXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweFxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICAmX19pdGVtOmhvdmVyICZfX2J1dHRvbnNcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XFxuICAgICZfX2J1dHRvbnNcXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcXG4gICAgJl9fYWRkXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsXFxuICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsXFxuICAgICZfX2Zvcm1cXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG4gICAgJl9fdGV4dC1ib3hcXG4gICAgICAgIGNvbG9yOiB3aGl0ZVxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNoYXJjb2FsLWhvdmVyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwXFxuICAgICAgICBoZWlnaHQ6IDIxcHhcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlclxcbiAgICAgICAgb3V0bGluZTogMnB4IGluc2V0ICRwZXJzaWFuLWdyZWVuXFxuICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgICAgIHdpZHRoOiA3NSVcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgxMXB4KVxcbiAgICAgICAgJl9faXRlbS0tYWN0aXZlICZfX2J1dHRvbnNcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxcbiAgICBAbWVkaWEgKG5vdChob3ZlcikpXFxuICAgICAgICAmX19pdGVtLS1hY3RpdmUgJl9fYnV0dG9uc1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBCRU0gY2xhc3MgbmFtZSBmYWN0b3J5LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7RnVuY3Rpb259IEJlbVxyXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtlbGVtZW50T3JNb2RzXSBFbGVtZW50IG5hbWUgb3IgaGFzaCBvYmplY3Qgd2l0aCBtb2RzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbbW9kc10gSGFzaCBvYmplY3Qgd2l0aCBtb2RzXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgQkVNIGNsYXNzIG5hbWUgZmFjdG9yeS5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudE5hbWUgQmxvY2sgbmFtZVxyXG4gKiBAcmV0dXJucyB7QmVtfVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZW0oY29tcG9uZW50TmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50T3JNb2RzLCBtb2RzKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50T3JNb2RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnROYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudE9yTW9kcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRPck1vZHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kcyA9IGVsZW1lbnRPck1vZHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmFzZSA9IGNvbXBvbmVudE5hbWU7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgYmFzZSArPSAnX18nICsgZWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBiYXNlICsgKFxyXG4gICAgICAgICAgICBtb2RzXHJcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKG1vZHMpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gbW9kc1tuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnICcgKyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGJhc2UgKyAnLS0nICsgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChiYXNlICsgJy0tJyArIG5hbWUgKyAnXycgKyB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9LCAnJylcclxuICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0QnVpbGRlciA9IGZ1bmN0aW9uICh0aXRsZSwgdGFza0xpc3QsIGFjdGl2ZVN0YXR1cykge1xuICByZXR1cm4geyB0aXRsZSwgdGFza0xpc3QsIGFjdGl2ZVN0YXR1cyB9O1xufTtcbiIsImltcG9ydCB7IHByb2plY3RCdWlsZGVyIH0gZnJvbSBcIi4vcHJvamVjdC1idWlsZGVyLmpzXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgcHVic3ViLnN1YnNjcmliZShcImxvYWRQcm9qZWN0TGlzdFwiLCBpbml0UHJvamVjdExpc3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdERlbGV0ZUNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidGFza0RlbGV0ZUNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidGFza0FkZENsaWNrXCIsIGFkZFRhc2spO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdEFkZENsaWNrXCIsIGFkZFByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdFNldEFjdGl2ZUNsaWNrXCIsIHNldEFjdGl2ZVByb2plY3QpO1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidG9nZ2xlVGFza0NvbXBsZXRlQ2xpY2tcIiwgdG9nZ2xlVGFza0NvbXBsZXRlKTtcblxuICBmdW5jdGlvbiBpbml0UHJvamVjdExpc3Qoc3RvcmVkTGlzdCkge1xuICAgIHByb2plY3RMaXN0ID0gc3RvcmVkTGlzdCB8fCBidWlsZERlZmF1bHRMaXN0KCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZERlZmF1bHRMaXN0KCkge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0QnVpbGRlcihcIk15IFByb2plY3RcIiwgW10sIHRydWUpO1xuICAgIGxpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgIHByb2plY3RMaXN0W2luZGV4XVxuICAgICAgPyBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICA6IGNvbnNvbGUud2FybihgUHJvamVjdCBpbmRleCAke2luZGV4fSBub3QgZm91bmQgdG8gZGVsZXRlLmApO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBjb25zdCB0SSA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV1cbiAgICAgID8gcHJvamVjdExpc3RbcEldLnRhc2tMaXN0LnNwbGljZSh0SSwgMSlcbiAgICAgIDogY29uc29sZS53YXJuKFxuICAgICAgICAgIGBQcm9qZWN0IGluZGV4ICR7cEl9LHRhc2sgaW5kZXggJHt0SX0gbm90IGZvdW5kIHRvIGRlbGV0ZS5gXG4gICAgICAgICk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICBpZiAodGFza0FscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkpIHJlcGxhY2VPbGRUYXNrV2l0aE5ld1Rhc2soY2xpY2tFdmVudCk7XG4gICAgZWxzZSBhcHBlbmRMaXN0V2l0aE5ld1Rhc2soY2xpY2tFdmVudCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiB0YXNrQWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgICBjb25zdCB0YXNrTGlzdExlbmd0aCA9IHByb2plY3RMaXN0W3BJXS50YXNrTGlzdC5sZW5ndGg7XG4gICAgICBpZiAodGFza0luZGV4ICE9PSB1bmRlZmluZWQpIHJldHVybiB0YXNrSW5kZXggPCB0YXNrTGlzdExlbmd0aDtcbiAgICAgIHJldHVybiB0YXNrSW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTGlzdFdpdGhOZXdUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3QucHVzaChjcmVhdGVUYXNrRnJvbUNsaWNrRXZlbnQoY2xpY2tFdmVudCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VPbGRUYXNrV2l0aE5ld1Rhc2soY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGNvbnN0IHRJID0gY2xpY2tFdmVudC50YXNrSW5kZXg7XG4gICAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldID0gY3JlYXRlVGFza0Zyb21DbGlja0V2ZW50KGNsaWNrRXZlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tQ2xpY2tFdmVudChjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGNsaWNrRXZlbnQudGl0bGU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNsaWNrRXZlbnQuZGVzY3JpcHRpb247XG4gICAgICBjb25zdCBkdWVEYXRlID0gY2xpY2tFdmVudC5kdWVEYXRlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBjbGlja0V2ZW50LnByaW9yaXR5O1xuICAgICAgY29uc3QgdGFza0NvbXBsZXRlU3RhdHVzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGFza0J1aWxkZXIoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHRhc2tDb21wbGV0ZVN0YXR1c1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICBpZiAocHJvamVjdEFscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkpIGNoYW5nZVByb2plY3RUaXRsZShjbGlja0V2ZW50KTtcbiAgICBlbHNlIGFwcGVuZFByb2plY3QoY2xpY2tFdmVudCk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBwcm9qZWN0QWxyZWFkeUV4aXN0cyhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgaWYgKHBJICE9PSB1bmRlZmluZWQpIHJldHVybiBwSSA8IHByb2plY3RMaXN0Lmxlbmd0aDtcbiAgICAgIHJldHVybiBwSTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0VGl0bGUoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGNvbnN0IG5ld1RpdGxlID0gY2xpY2tFdmVudC50aXRsZTtcbiAgICAgIHByb2plY3RMaXN0W3BJXS50aXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFByb2plY3QoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBjbGlja0V2ZW50LnRpdGxlO1xuICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0QnVpbGRlcih0aXRsZSwgW10sIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBpZiAocHJvamVjdExpc3RbcEldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IEluZGV4IHVuZGVmaW5lZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEFsbFByb2plY3RzVG9JbkFjdGl2ZSgpO1xuICAgIHNldFByb2plY3RJbmRleFRvQWN0aXZlKHBJKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIHNldEFsbFByb2plY3RzVG9JbkFjdGl2ZSgpIHtcbiAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IChwcm9qZWN0LmFjdGl2ZVN0YXR1cyA9IGZhbHNlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdEluZGV4VG9BY3RpdmUoaW5kZXgpIHtcbiAgICAgIHByb2plY3RMaXN0W2luZGV4XS5hY3RpdmVTdGF0dXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRhc2tDb21wbGV0ZShjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBjb25zdCB0SSA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgIHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV0udGFza0NvbXBsZXRlU3RhdHVzXG4gICAgICA/IChwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldLnRhc2tDb21wbGV0ZVN0YXR1cyA9IGZhbHNlKVxuICAgICAgOiAocHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXS50YXNrQ29tcGxldGVTdGF0dXMgPSB0cnVlKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbiAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2tGdW5jVG9TdWIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZlbnROYW1lfWApO1xuICAgICAgLy9hZGQgYW4gZXZlbnQgd2l0aCBhIG5hbWUgYXMgbmV3IG9yIHRvIGV4aXN0aW5nIGxpc3RcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrRnVuY1RvU3ViKTtcbiAgICB9LFxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrRnVuY1RvVW5TdWIpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldmVudE5hbWV9YCk7XG4gICAgICAvL3JlbW92ZSBhbiBldmVudCBmdW5jdGlvbiBieSBuYW1lXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maWx0ZXIoY2FsbGJhY2tGdW5jID0+IGNhbGxiYWNrRnVuYyAhPT0gY2FsbGJhY2tGdW5jVG9VblN1Yik7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZlbnROYW1lfSB3aXRoIGAsZGF0YSk7XG4gICAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2tGdW5jID0+IHtcbiAgICAgICAgICBjYWxsYmFja0Z1bmMoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTsiLCJpbXBvcnQgeyBSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCBcIi4vcHJvamVjdC1saXN0LWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1Yi5qc1wiO1xuaW1wb3J0IGJlbSBmcm9tIFwiZWFzeS1iZW1cIjtcblxuZXhwb3J0IGNvbnN0IFJlbmRlclByb2plY3RGaWVsZCA9ICgoKSA9PiB7XG4gIC8vIGZvciBiZW0gY2xhc3MgbmFtZXNcbiAgY29uc3QgcGYgPSBiZW0oXCJwcm9qZWN0LWZpZWxkXCIpO1xuXG4gIC8vIEluaXRpYWxpemUgcHJvamVjdEZpZWxkXG4gIGNvbnN0IHByb2plY3RGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RGaWVsZC5jbGFzc0xpc3QuYWRkKHBmKCkpO1xuXG4gIC8vIEluaXRpYWxpemUgUHViU3Vic1xuICBwdWJzdWIuc3Vic2NyaWJlKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcmVuZGVyUHJvamVjdEZpZWxkQ29udGVudCk7XG4gIC8vIFRPLURPIFJlbW92ZSBhZnRlciBsb2NhbFN0b3JhZ2UgaW1wbGVtZW50YXRpb25cbiAgcHVic3ViLnB1Ymxpc2goXCJsb2FkUHJvamVjdExpc3RcIik7XG4gIC8vIFRPLURPIFJlbW92ZSBhZnRlciBsb2NhbFN0b3JhZ2UgaW1wbGVtZW50YXRpb25cblxuICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0RmllbGRDb250ZW50KHByb2plY3RMaXN0KSB7XG4gICAgcHJvamVjdEZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgcHJvamVjdEZpZWxkLmFwcGVuZENoaWxkKF9tYWtlUHJvamVjdEl0ZW0ocHJvamVjdCwgaW5kZXgpKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0RmllbGQuYXBwZW5kQ2hpbGQoX21ha2VBZGRQcm9qZWN0QnV0dG9uKCkpO1xuXG4gICAgZnVuY3Rpb24gX21ha2VQcm9qZWN0SXRlbShwcm9qZWN0LCBpbmRleCkge1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcIml0ZW1cIiwgeyBhY3RpdmU6IHByb2plY3QuYWN0aXZlU3RhdHVzIH0pO1xuICAgICAgc3Bhbi5kYXRhc2V0LnByb2plY3RJbmRleCA9IGluZGV4O1xuICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3NldEl0ZW1BY3RpdmVPbkNsaWNrKTtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCwgaW5kZXgpKTtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VCdXR0b25GaWVsZChpbmRleCkpO1xuICAgICAgcmV0dXJuIHNwYW47XG5cbiAgICAgIGZ1bmN0aW9uIF9tYWtlUHJvamVjdFRpdGxlKHByb2plY3QpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwidGl0bGVcIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX21ha2VCdXR0b25GaWVsZChpbmRleCkge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJidXR0b25zXCIpO1xuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKF9tYWtlUHJvamVjdEVkaXRCdXR0b24oKSk7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0RGVsZXRlQnV0dG9uKCkpO1xuICAgICAgICByZXR1cm4gc3BhbjtcblxuICAgICAgICBmdW5jdGlvbiBfbWFrZVByb2plY3REZWxldGVCdXR0b24oKSB7XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VEZWxldGVCdXR0b24oKTtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9kZWxldGVQcm9qZWN0T25DbGljayk7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcblxuICAgICAgICAgIGZ1bmN0aW9uIF9kZWxldGVQcm9qZWN0T25DbGljaygpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9XG4gICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0RGVsZXRlQ2xpY2tcIiwgeyBwcm9qZWN0SW5kZXggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX21ha2VQcm9qZWN0RWRpdEJ1dHRvbigpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZUVkaXRCdXR0b24oKTtcbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9oYW5kbGVFZGl0QnV0dG9uQ2xpY2spO1xuICAgICAgICAgIHJldHVybiBidXR0b247XG5cbiAgICAgICAgICBmdW5jdGlvbiBfaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKCkge1xuICAgICAgICAgICAgcmVwbGFjZUxhYmVsV2l0aEZvcm0odGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmVwbGFjZUxhYmVsV2l0aEZvcm0oaW5kZXgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0O1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUxhYmVsV2l0aEZvcm0oY2xpY2tFdmVudCkge1xuICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPVxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBfZ2V0UHJvamVjdFRpdGxlKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IF9nZXRQcm9qZWN0TGFiZWwocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgcHJlRmlsbGVkRm9ybSA9IF9tYWtlUHJvamVjdEVudHJ5Rm9ybShcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUsXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZGV4XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgcHJvamVjdEZpZWxkLnJlcGxhY2VDaGlsZChwcmVGaWxsZWRGb3JtLCBwcm9qZWN0TGFiZWwpO1xuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIF9nZXRQcm9qZWN0VGl0bGUocHJvamVjdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtcHJvamVjdC1pbmRleD0nJHtwcm9qZWN0SW5kZXh9J10gLiR7cGYoXCJ0aXRsZVwiKX1gXG4gICAgICAgICAgICAgICAgKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIF9nZXRQcm9qZWN0TGFiZWwocHJvamVjdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtcHJvamVjdC1pbmRleD0nJHtwcm9qZWN0SW5kZXh9J10uJHtwZihcIml0ZW1cIil9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RFbnRyeUZvcm0ocHJvamVjdFRpdGxlLCBwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBfbWFrZUVudHJ5Q29udGFpbmVyKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IF9tYWtlRm9ybShwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX21ha2VFbnRyeUNvbnRhaW5lcihwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJpdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgc3Bhbi5kYXRhc2V0LnByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9tYWtlRm9ybShwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0ID0gcGYoXCJmb3JtXCIpO1xuICAgICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSBcIiNcIjtcbiAgICAgICAgICAgICAgICAgIGZvcm0ub25zdWJtaXQgPSBcInJldHVybiBmYWxzZVwiO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVudHJ5Qm94ID0gX21ha2VUZXh0RW50cnlCb3gocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IF9tYWtlU3VibWl0QnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRFbnRyeUJveCk7XG4gICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybTtcblxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gX21ha2VUZXh0RW50cnlCb3gocHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbnRyeUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVudHJ5Qm94LmNsYXNzTGlzdCA9IHBmKFwidGV4dC1ib3hcIik7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbnRyeUJveC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgcHJvamVjdCBuYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbnRyeUJveC52YWx1ZSA9IHByb2plY3RUaXRsZSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RW50cnlCb3gucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEVudHJ5Qm94O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZVN1Ym1pdEJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VDaGVja0J1dHRvbigpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdWJtaXRFbnRyeUZvcm0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9zdWJtaXRFbnRyeUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnBhcmVudE5vZGVbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRpdGxlID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQucHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdEFkZENsaWNrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF9zZXRJdGVtQWN0aXZlT25DbGljayhjbGlja0V2ZW50KSB7XG4gICAgICAgIGlmIChidXR0b25XYXNDbGlja2VkKGNsaWNrRXZlbnQpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdFNldEFjdGl2ZUNsaWNrXCIsIHsgcHJvamVjdEluZGV4IH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGJ1dHRvbldhc0NsaWNrZWQoY2xpY2tFdmVudCkge1xuICAgICAgICAgIHJldHVybiBbLi4uY2xpY2tFdmVudC50YXJnZXQuY2xhc3NMaXN0XS5pbmNsdWRlcyhcImJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYWtlQWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IFJlbmRlci5tYWtlQWRkQnV0dG9uKCk7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9pbnNlcnRCbGFua0VudHJ5Rm9ybSk7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwiaXRlbVwiKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChwZihcImFkZFwiKSk7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICByZXR1cm4gc3BhbjtcblxuICAgICAgZnVuY3Rpb24gX2luc2VydEJsYW5rRW50cnlGb3JtKCkge1xuICAgICAgICBwcm9qZWN0RmllbGQuaW5zZXJ0QmVmb3JlKF9tYWtlUHJvamVjdEVudHJ5Rm9ybSgpLCB0aGlzLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdEZpZWxkLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFJlbmRlciB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0IFwiLi9wcm9qZWN0LWxpc3QtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgYmVtIGZyb20gXCJlYXN5LWJlbVwiO1xuXG5leHBvcnQgY29uc3QgUmVuZGVyVGFza0ZpZWxkID0gKCgpID0+IHtcbiAgLy8gZm9yIGJlbSBjbGFzcyBuYW1lc1xuICBjb25zdCB0ZiA9IGJlbShcInRhc2stZmllbGRcIik7XG5cbiAgLy8gSW5pdGlhbGl6ZSBQdWJTdWJzXG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCByZW5kZXJUYXNrRmllbGRDb250ZW50KTtcblxuICAvLyBJbml0aWFsaXplIHRhc2tGaWVsZFxuICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCh0ZigpKTtcbiAgdGFza0ZpZWxkLnRleHRDb250ZW50ID0gXCJ0ZXN0XCI7XG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza0ZpZWxkQ29udGVudChwcm9qZWN0TGlzdCkge1xuICAgIHRhc2tGaWVsZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gX2dldEFjdGl2ZVByb2plY3QocHJvamVjdExpc3QpO1xuICAgIGlmICghcHJvamVjdCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IF9nZXRBY3RpdmVQcm9qZWN0SW5kZXgocHJvamVjdExpc3QpO1xuICAgIHRhc2tGaWVsZC5kYXRhc2V0LnByb2plY3RJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICB0YXNrRmllbGQuYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCkpO1xuICAgIHRhc2tGaWVsZC5hcHBlbmRDaGlsZChfbWFrZVRhc2tMaXN0KHByb2plY3QpKTtcbiAgICByZXR1cm4gdGFza0ZpZWxkO1xuXG4gICAgZnVuY3Rpb24gX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKHRmKFwicHJvamVjdC10aXRsZVwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYFRhc2sgTGlzdCBmb3IgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VUYXNrTGlzdChwcm9qZWN0KSB7XG4gICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCh0ZihcInRhc2stbGlzdFwiKSk7XG4gICAgICBwcm9qZWN0LnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IGxpc3QuYXBwZW5kQ2hpbGQoX21ha2VUYXNrSXRlbSh0YXNrKSkpO1xuICAgICAgcmV0dXJuIGxpc3Q7XG5cbiAgICAgIGZ1bmN0aW9uIF9tYWtlVGFza0l0ZW0odGFzaykge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0ID0gdGYoXCJ0YXNrLWl0ZW1cIiwge1xuICAgICAgICAgIFtcIm1hcmstZG9uZVwiXTogdGFzay50YXNrQ29tcGxldGVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKF9tYWtlVGFza01haW5WaWV3KHRhc2spKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChfbWFrZVRhc2tFeHBhbmRlZFZpZXcodGFzaykpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX21ha2VUYXNrTWFpblZpZXcodGFzaykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gdGYoXCJtYWluLXZpZXdcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWFrZVRhc2tUaXRsZSh0YXNrKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfbWFrZUR1ZURhdGUodGFzaykpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoX21ha2VCdXR0b25GaWVsZCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcblxuICAgICAgICBmdW5jdGlvbiBfbWFrZVRhc2tUaXRsZSh0YXNrKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QgPSB0ZihcInRpdGxlXCIpO1xuICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50PXRhc2sudGl0bGVcbiAgICAgICAgICByZXR1cm4gdGl0bGVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9tYWtlRHVlRGF0ZSh0YXNrKSB7XG4gICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0ID0gdGYoXCJkdWVEYXRlXCIpO1xuICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQ9dGFzay5kdWVEYXRlXG4gICAgICAgICAgcmV0dXJuIGR1ZURhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9tYWtlQnV0dG9uRmllbGQoKSB7fVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfbWFrZVRhc2tFeHBhbmRlZFZpZXcodGFzaykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0ID0gdGYoXCJleHBhbmRlZC12aWV3XCIsIHsgaGlkZGVuOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRBY3RpdmVQcm9qZWN0KHByb2plY3RMaXN0KSB7XG4gICAgICByZXR1cm4gcHJvamVjdExpc3QuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmFjdGl2ZVN0YXR1cylbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldEFjdGl2ZVByb2plY3RJbmRleChwcm9qZWN0TGlzdCkge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5hY3RpdmVTdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRhc2tGaWVsZCB9O1xufSkoKTtcbi8vIHtcbi8vIFwidGl0bGVcIjogXCJ0YXNrMCBmb3IgcHJvamVjdCBiXCIsXG4vLyBcImRlc2NyaXB0aW9uXCI6IFwiZGVzY3JpcHRpb24wXCIsXG4vLyBcImR1ZURhdGVcIjogXCIxOTg5LTEwLTI0VDE3OjAwOjAwLjAwMFpcIixcbi8vIFwicHJpb3JpdHlcIjogXCIwXCIsXG4vLyBcInRhc2tDb21wbGV0ZVN0YXR1c1wiOiBmYWxzZVxuLy8gICB9XG4iLCJleHBvcnQgY29uc3QgUmVuZGVyID0gKCgpID0+IHtcbiAgLy8gTGluayBzdHlsZXNoZWV0IGZvciBpY29uc1xuICB7XG4gICAgY29uc3QgZ29vZ2xlSWNvbnNTdHlsZVNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgZ29vZ2xlSWNvbnNTdHlsZVNoZWV0LmhyZWYgPVxuICAgICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zK091dGxpbmVkXCI7XG4gICAgZ29vZ2xlSWNvbnNTdHlsZVNoZWV0LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ29vZ2xlSWNvbnNTdHlsZVNoZWV0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9tYWtlSWNvbkJ1dHRvbihjb250ZW50KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcbiAgICAgIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIixcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBgYnV0dG9uX18ke2NvbnRlbnR9YFxuICAgICk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgY29uc3QgbWFrZUFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX21ha2VJY29uQnV0dG9uKFwiYWRkXCIpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VFZGl0QnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJlZGl0XCIpO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9tYWtlSWNvbkJ1dHRvbihcImRlbGV0ZVwiKTtcbiAgfTtcblxuICBjb25zdCBtYWtlQ2hlY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9tYWtlSWNvbkJ1dHRvbihcImNoZWNrXCIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbWFrZUFkZEJ1dHRvbixcbiAgICBtYWtlRWRpdEJ1dHRvbixcbiAgICBtYWtlRGVsZXRlQnV0dG9uLFxuICAgIG1ha2VDaGVja0J1dHRvbixcbiAgfTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgdGFza0J1aWxkZXIgPSBmdW5jdGlvbiAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHRhc2tDb21wbGV0ZVN0YXR1c1xuKSB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHRhc2tDb21wbGV0ZVN0YXR1cyB9O1xufTtcbiIsImltcG9ydCB7IHByb2plY3RCdWlsZGVyIH0gZnJvbSBcIi4uL3Byb2plY3QtYnVpbGRlclwiO1xuaW1wb3J0IHsgdGFza0xpc3RQcm90b3R5cGUgfSBmcm9tIFwiLi90YXNrLWJ1aWxkZXItdGVzdHNcIjtcblxubGV0IHByb2plY3RMaXN0UHJvdG90eXBlID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0QnVpbGRlcihcbiAgICBgcHJvamVjdCR7aX1gLFxuICAgIHRhc2tMaXN0UHJvdG90eXBlW2ldLFxuICAgIGkgJSAyID8gdHJ1ZSA6IGZhbHNlXG4gICk7XG4gIHByb2plY3RMaXN0UHJvdG90eXBlLnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmV4cG9ydCB7IHByb2plY3RMaXN0UHJvdG90eXBlIH07XG4iLCJpbXBvcnQgeyBSZW5kZXJQcm9qZWN0RmllbGQgfSBmcm9tIFwiLi4vcmVuZGVyLXByb2plY3QtZmllbGRcIjtcbmltcG9ydCB7IFJlbmRlclRhc2tGaWVsZCB9IGZyb20gXCIuLi9yZW5kZXItdGFzay1maWVsZFwiO1xuaW1wb3J0IFwiLi4vcHJvamVjdC1saXN0LWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0UHJvdG90eXBlIH0gZnJvbSBcIi4vcHJvamVjdC1idWlsZGVyLXRlc3RcIjtcblxuLy8gaW5pdGlhbGl6ZSBwcm9qZWN0IGZpZWxkXG5wdWJzdWIucHVibGlzaChcImxvYWRQcm9qZWN0TGlzdFwiLCBwcm9qZWN0TGlzdFByb3RvdHlwZSk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChSZW5kZXJQcm9qZWN0RmllbGQucHJvamVjdEZpZWxkKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChSZW5kZXJUYXNrRmllbGQudGFza0ZpZWxkKTtcbiIsImltcG9ydCB7IHRhc2tCdWlsZGVyIH0gZnJvbSBcIi4uL3Rhc2stYnVpbGRlci5qc1wiO1xuXG5sZXQgdGhyZWVEaWZmZXJlbnRUYXNrTGlzdHMgPSBbXG4gIGJ1aWxkVGFza0xpc3QoXCJhXCIpLFxuICBidWlsZFRhc2tMaXN0KFwiYlwiKSxcbiAgYnVpbGRUYXNrTGlzdChcImNcIiksXG5dO1xuZnVuY3Rpb24gYnVpbGRUYXNrTGlzdChtb2RpZmllcikge1xuICBsZXQgdGFza0xpc3QgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tCdWlsZGVyKFxuICAgICAgYHRhc2ske2l9IGZvciBwcm9qZWN0ICR7bW9kaWZpZXJ9YCxcbiAgICAgIGBkZXNjcmlwdGlvbiR7aX1gLFxuICAgICAgbmV3IERhdGUoYDEwLzI1LyR7MTk4OSArIGl9YCksXG4gICAgICBgJHtpfWAsXG4gICAgICBpICUgMiA/IHRydWUgOiBmYWxzZVxuICAgICk7XG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgfVxuICByZXR1cm4gdGFza0xpc3Q7XG59XG5leHBvcnQgeyB0aHJlZURpZmZlcmVudFRhc2tMaXN0cyBhcyB0YXNrTGlzdFByb3RvdHlwZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuc2Fzc1wiO1xuaW1wb3J0IFwiLi90ZXN0cy9yZW5kZXItdGFzay1maWVsZC10ZXN0c1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9