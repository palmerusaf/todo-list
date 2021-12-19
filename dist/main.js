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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: sans-serif;\n}\n\n.button {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.button__add {\n  background: #7fced8;\n  border-radius: 50%;\n  padding: 3px;\n}\n.button__edit {\n  color: #f4a261ff;\n}\n.button__delete {\n  color: #e76f51ff;\n}\n.button__check {\n  color: green;\n}\n\n.project-field {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: white;\n  height: 100vh;\n  background-color: #264653ff;\n  padding: 10px;\n}\n.project-field__item {\n  border-radius: 5px;\n  background-color: #203B46;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 26px;\n}\n.project-field__item:hover {\n  background-color: #2D5362;\n}\n.project-field__item--active {\n  background-color: #2a9d8f;\n  font-weight: 800;\n}\n.project-field__item--active:hover {\n  background-color: #2fb1a2;\n}\n.project-field__title {\n  padding-left: 9px;\n  overflow: hidden;\n}\n.project-field__item:hover .project-field__buttons {\n  display: inline-flex;\n}\n.project-field__buttons {\n  display: none;\n}\n.project-field__add {\n  justify-content: center;\n  background-color: #264653ff;\n}\n.project-field__add:hover {\n  background-color: #264653ff;\n}\n.project-field__form {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.project-field__text-box {\n  color: white;\n  background-color: #2D5362;\n  font-weight: 600;\n  height: 21px;\n  align-self: center;\n  outline: 2px inset #2a9d8f;\n  border: none;\n  padding-left: 8px;\n  border-radius: 5px;\n  width: 75%;\n}\n@media (max-width: 811px) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}\n@media (false) {\n  .project-field__item--active .project-field__buttons {\n    display: inline-flex;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.sass"],"names":[],"mappings":"AASA;EACI,SAAA;EACA,uBAAA;AARJ;;AASA;EACI,gBAAA;EACA,YAAA;EACA,eAAA;AANJ;AAOI;EACI,mBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAMI;EACI,gBAdM;AAUd;AAKI;EACI,gBAfO;AAYf;AAII;EACI,YAAA;AAFR;;AAIA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,aAAA;EACA,2BAjCO;EAkCP,aAAA;AADJ;AAEI;EACI,kBAAA;EACA,yBApCQ;EAqCR,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;AAAR;AACQ;EACI,yBAzCK;AA0CjB;AAAQ;EACI,yBA1CI;EA2CJ,gBAAA;AAEZ;AADY;EACI,yBA5CM;AA+CtB;AAFI;EACI,iBAAA;EACA,gBAAA;AAIR;AAHI;EACI,oBAAA;AAKR;AAJI;EACI,aAAA;AAMR;AALI;EACI,uBAAA;EACA,2BA1DG;AAiEX;AANQ;EACI,2BA5DD;AAoEX;AAPI;EACI,WAAA;EACA,aAAA;EACA,8BAAA;AASR;AARI;EACI,YAAA;EACA,yBAjES;EAkET,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,0BAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AAUR;AATI;EACI;IACI,oBAAA;EAWV;AACF;AAXI;EACI;IACI,oBAAA;EAaV;AACF","sourcesContent":["// https://coolors.co/203b46-2fb1a2-e9c46a-f4a261-e76f51\n$charcoal: #264653ff\n$charcoal-dark: #203B46\n$charcoal-hover: #2D5362\n$persian-green: #2a9d8f\n$persian-green-hover: #2fb1a2\n$orange-yellow-crayola: #e9c46aff\n$sandy-brown: #f4a261ff\n$burnt-sienna: #e76f51ff\n*\n    margin: 0\n    font-family: sans-serif\n.button\n    background: none\n    border: none\n    cursor: pointer\n    &__add\n        background: rgb(127,206,216)\n        border-radius: 50%\n        padding: 3px\n    &__edit\n        color: $sandy-brown\n    &__delete\n        color: $burnt-sienna\n    &__check\n        color: green\n\n.project-field\n    width: 25%\n    display: flex\n    flex-direction: column\n    gap: 10px\n    color: white\n    height: 100vh\n    background-color: $charcoal\n    padding: 10px\n    &__item\n        border-radius: 5px\n        background-color: $charcoal-dark\n        display: flex\n        justify-content: space-between\n        align-items: center\n        height: 26px\n        &:hover\n            background-color: $charcoal-hover\n        &--active\n            background-color: $persian-green\n            font-weight: 800\n            &:hover\n                background-color: $persian-green-hover\n    &__title\n        padding-left: 9px\n        overflow: hidden\n    &__item:hover &__buttons\n        display: inline-flex\n    &__buttons\n        display: none\n    &__add\n        justify-content: center\n        background-color: $charcoal\n        &:hover\n            background-color: $charcoal\n    &__form\n        width: 100%\n        display: flex\n        justify-content: space-between\n    &__text-box\n        color: white\n        background-color: $charcoal-hover\n        font-weight: 600\n        height: 21px\n        align-self: center\n        outline: 2px inset $persian-green\n        border: none\n        padding-left: 8px\n        border-radius: 5px\n        width: 75%\n    @media (max-width: 811px)\n        &__item--active &__buttons\n            display: inline-flex\n    @media (not(hover))\n        &__item--active &__buttons\n            display: inline-flex\n"],"sourceRoot":""}]);
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
  projectField.classList.add("project-field");

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
/* harmony import */ var _project_list_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-list-controller */ "./src/project-list-controller.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ "./src/pubsub.js");
/* harmony import */ var _project_builder_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-builder-test */ "./src/tests/project-builder-test.js");





// initialize project field
_pubsub__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("loadProjectList", _project_builder_test__WEBPACK_IMPORTED_MODULE_3__.projectListPrototype);
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
/* harmony import */ var _tests_render_task_field_tests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tests/render-task-field-tests */ "./src/tests/render-task-field-tests.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXNzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Vhc3ktYmVtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zYXNzP2U4ZjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1idWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXItcHJvamVjdC1maWVsZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rlc3RzL3Byb2plY3QtYnVpbGRlci10ZXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZXN0cy9yZW5kZXItdGFzay1maWVsZC10ZXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVzdHMvdGFzay1idWlsZGVyLXRlc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5idXR0b25fX2FkZCB7XFxuICBiYWNrZ3JvdW5kOiAjN2ZjZWQ4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4uYnV0dG9uX19lZGl0IHtcXG4gIGNvbG9yOiAjZjRhMjYxZmY7XFxufVxcbi5idXR0b25fX2RlbGV0ZSB7XFxuICBjb2xvcjogI2U3NmY1MWZmO1xcbn1cXG4uYnV0dG9uX19jaGVjayB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0LWZpZWxkIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucHJvamVjdC1maWVsZF9faXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzQjQ2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI2cHg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDUzNjI7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmYjFhMjtcXG59XFxuLnByb2plY3QtZmllbGRfX3RpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogOXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2plY3QtZmllbGRfX2l0ZW06aG92ZXIgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzZmY7XFxufVxcbi5wcm9qZWN0LWZpZWxkX19hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1M2ZmO1xcbn1cXG4ucHJvamVjdC1maWVsZF9fZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0LWZpZWxkX190ZXh0LWJveCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ1MzYyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGhlaWdodDogMjFweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG91dGxpbmU6IDJweCBpbnNldCAjMmE5ZDhmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNzUlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODExcHgpIHtcXG4gIC5wcm9qZWN0LWZpZWxkX19pdGVtLS1hY3RpdmUgLnByb2plY3QtZmllbGRfX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIChmYWxzZSkge1xcbiAgLnByb2plY3QtZmllbGRfX2l0ZW0tLWFjdGl2ZSAucHJvamVjdC1maWVsZF9fYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtBQVJKOztBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5KO0FBT0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxSO0FBTUk7RUFDSSxnQkFkTTtBQVVkO0FBS0k7RUFDSSxnQkFmTztBQVlmO0FBSUk7RUFDSSxZQUFBO0FBRlI7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBakNPO0VBa0NQLGFBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSx5QkFwQ1E7RUFxQ1IsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLHlCQXpDSztBQTBDakI7QUFBUTtFQUNJLHlCQTFDSTtFQTJDSixnQkFBQTtBQUVaO0FBRFk7RUFDSSx5QkE1Q007QUErQ3RCO0FBRkk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFISTtFQUNJLG9CQUFBO0FBS1I7QUFKSTtFQUNJLGFBQUE7QUFNUjtBQUxJO0VBQ0ksdUJBQUE7RUFDQSwyQkExREc7QUFpRVg7QUFOUTtFQUNJLDJCQTVERDtBQW9FWDtBQVBJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVNSO0FBUkk7RUFDSSxZQUFBO0VBQ0EseUJBakVTO0VBa0VULGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFVUjtBQVRJO0VBQ0k7SUFDSSxvQkFBQTtFQVdWO0FBQ0Y7QUFYSTtFQUNJO0lBQ0ksb0JBQUE7RUFhVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGh0dHBzOi8vY29vbG9ycy5jby8yMDNiNDYtMmZiMWEyLWU5YzQ2YS1mNGEyNjEtZTc2ZjUxXFxuJGNoYXJjb2FsOiAjMjY0NjUzZmZcXG4kY2hhcmNvYWwtZGFyazogIzIwM0I0NlxcbiRjaGFyY29hbC1ob3ZlcjogIzJENTM2MlxcbiRwZXJzaWFuLWdyZWVuOiAjMmE5ZDhmXFxuJHBlcnNpYW4tZ3JlZW4taG92ZXI6ICMyZmIxYTJcXG4kb3JhbmdlLXllbGxvdy1jcmF5b2xhOiAjZTljNDZhZmZcXG4kc2FuZHktYnJvd246ICNmNGEyNjFmZlxcbiRidXJudC1zaWVubmE6ICNlNzZmNTFmZlxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXFxuLmJ1dHRvblxcbiAgICBiYWNrZ3JvdW5kOiBub25lXFxuICAgIGJvcmRlcjogbm9uZVxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgJl9fYWRkXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTI3LDIwNiwyMTYpXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcXG4gICAgICAgIHBhZGRpbmc6IDNweFxcbiAgICAmX19lZGl0XFxuICAgICAgICBjb2xvcjogJHNhbmR5LWJyb3duXFxuICAgICZfX2RlbGV0ZVxcbiAgICAgICAgY29sb3I6ICRidXJudC1zaWVubmFcXG4gICAgJl9fY2hlY2tcXG4gICAgICAgIGNvbG9yOiBncmVlblxcblxcbi5wcm9qZWN0LWZpZWxkXFxuICAgIHdpZHRoOiAyNSVcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogMTBweFxcbiAgICBjb2xvcjogd2hpdGVcXG4gICAgaGVpZ2h0OiAxMDB2aFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhcmNvYWxcXG4gICAgcGFkZGluZzogMTBweFxcbiAgICAmX19pdGVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1kYXJrXFxuICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGhlaWdodDogMjZweFxcbiAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ob3ZlclxcbiAgICAgICAgJi0tYWN0aXZlXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlcnNpYW4tZ3JlZW5cXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVyc2lhbi1ncmVlbi1ob3ZlclxcbiAgICAmX190aXRsZVxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHhcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgJl9faXRlbTpob3ZlciAmX19idXR0b25zXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxcbiAgICAmX19idXR0b25zXFxuICAgICAgICBkaXNwbGF5OiBub25lXFxuICAgICZfX2FkZFxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbFxcbiAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbFxcbiAgICAmX19mb3JtXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxuICAgICZfX3RleHQtYm94XFxuICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGFyY29hbC1ob3ZlclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICAgICAgaGVpZ2h0OiAyMXB4XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcXG4gICAgICAgIG91dGxpbmU6IDJweCBpbnNldCAkcGVyc2lhbi1ncmVlblxcbiAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweFxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4XFxuICAgICAgICB3aWR0aDogNzUlXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MTFweClcXG4gICAgICAgICZfX2l0ZW0tLWFjdGl2ZSAmX19idXR0b25zXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXhcXG4gICAgQG1lZGlhIChub3QoaG92ZXIpKVxcbiAgICAgICAgJl9faXRlbS0tYWN0aXZlICZfX2J1dHRvbnNcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQkVNIGNsYXNzIG5hbWUgZmFjdG9yeS5cclxuICpcclxuICogQHR5cGVkZWYge0Z1bmN0aW9ufSBCZW1cclxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBbZWxlbWVudE9yTW9kc10gRWxlbWVudCBuYW1lIG9yIGhhc2ggb2JqZWN0IHdpdGggbW9kc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gW21vZHNdIEhhc2ggb2JqZWN0IHdpdGggbW9kc1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIEJFTSBjbGFzcyBuYW1lIGZhY3RvcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnROYW1lIEJsb2NrIG5hbWVcclxuICogQHJldHVybnMge0JlbX1cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmVtKGNvbXBvbmVudE5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudE9yTW9kcywgbW9kcykge1xyXG4gICAgICAgIGlmICghZWxlbWVudE9yTW9kcykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRPck1vZHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50T3JNb2RzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZHMgPSBlbGVtZW50T3JNb2RzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJhc2UgPSBjb21wb25lbnROYW1lO1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGJhc2UgKz0gJ19fJyArIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYmFzZSArIChcclxuICAgICAgICAgICAgbW9kc1xyXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhtb2RzKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1vZHNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJyAnICsgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChiYXNlICsgJy0tJyArIG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoYmFzZSArICctLScgKyBuYW1lICsgJ18nICsgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSwgJycpXHJcbiAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn1cclxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrQnVpbGRlciB9IGZyb20gXCIuL3Rhc2stYnVpbGRlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdEJ1aWxkZXIgPSBmdW5jdGlvbiAodGl0bGUsIHRhc2tMaXN0LCBhY3RpdmVTdGF0dXMpIHtcbiAgcmV0dXJuIHsgdGl0bGUsIHRhc2tMaXN0LCBhY3RpdmVTdGF0dXMgfTtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0QnVpbGRlciB9IGZyb20gXCIuL3Byb2plY3QtYnVpbGRlci5qc1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHVic3ViLmpzXCI7XG5pbXBvcnQgeyB0YXNrQnVpbGRlciB9IGZyb20gXCIuL3Rhc2stYnVpbGRlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdExpc3RDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJsb2FkUHJvamVjdExpc3RcIiwgaW5pdFByb2plY3RMaXN0KTtcbiAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3REZWxldGVDbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgcHVic3ViLnN1YnNjcmliZShcInRhc2tEZWxldGVDbGlja1wiLCBkZWxldGVUYXNrKTtcbiAgcHVic3ViLnN1YnNjcmliZShcInRhc2tBZGRDbGlja1wiLCBhZGRUYXNrKTtcbiAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3RBZGRDbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3RTZXRBY3RpdmVDbGlja1wiLCBzZXRBY3RpdmVQcm9qZWN0KTtcbiAgcHVic3ViLnN1YnNjcmliZShcInRvZ2dsZVRhc2tDb21wbGV0ZUNsaWNrXCIsIHRvZ2dsZVRhc2tDb21wbGV0ZSk7XG5cbiAgZnVuY3Rpb24gaW5pdFByb2plY3RMaXN0KHN0b3JlZExpc3QpIHtcbiAgICBwcm9qZWN0TGlzdCA9IHN0b3JlZExpc3QgfHwgYnVpbGREZWZhdWx0TGlzdCgpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGREZWZhdWx0TGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoXCJNeSBQcm9qZWN0XCIsIFtdLCB0cnVlKTtcbiAgICBsaXN0LnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChjbGlja0V2ZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICBwcm9qZWN0TGlzdFtpbmRleF1cbiAgICAgID8gcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgOiBjb25zb2xlLndhcm4oYFByb2plY3QgaW5kZXggJHtpbmRleH0gbm90IGZvdW5kIHRvIGRlbGV0ZS5gKTtcbiAgICBwdWJzdWIucHVibGlzaChcInVwZGF0ZUxpc3RPZlByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soY2xpY2tFdmVudCkge1xuICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgY29uc3QgdEkgPSBjbGlja0V2ZW50LnRhc2tJbmRleDtcbiAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldXG4gICAgICA/IHByb2plY3RMaXN0W3BJXS50YXNrTGlzdC5zcGxpY2UodEksIDEpXG4gICAgICA6IGNvbnNvbGUud2FybihcbiAgICAgICAgICBgUHJvamVjdCBpbmRleCAke3BJfSx0YXNrIGluZGV4ICR7dEl9IG5vdCBmb3VuZCB0byBkZWxldGUuYFxuICAgICAgICApO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFzayhjbGlja0V2ZW50KSB7XG4gICAgaWYgKHRhc2tBbHJlYWR5RXhpc3RzKGNsaWNrRXZlbnQpKSByZXBsYWNlT2xkVGFza1dpdGhOZXdUYXNrKGNsaWNrRXZlbnQpO1xuICAgIGVsc2UgYXBwZW5kTGlzdFdpdGhOZXdUYXNrKGNsaWNrRXZlbnQpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuXG4gICAgZnVuY3Rpb24gdGFza0FscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgICAgY29uc3QgdGFza0xpc3RMZW5ndGggPSBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3QubGVuZ3RoO1xuICAgICAgaWYgKHRhc2tJbmRleCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGFza0luZGV4IDwgdGFza0xpc3RMZW5ndGg7XG4gICAgICByZXR1cm4gdGFza0luZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZExpc3RXaXRoTmV3VGFzayhjbGlja0V2ZW50KSB7XG4gICAgICBjb25zdCBwSSA9IGNsaWNrRXZlbnQucHJvamVjdEluZGV4O1xuICAgICAgcHJvamVjdExpc3RbcEldLnRhc2tMaXN0LnB1c2goY3JlYXRlVGFza0Zyb21DbGlja0V2ZW50KGNsaWNrRXZlbnQpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlT2xkVGFza1dpdGhOZXdUYXNrKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBjb25zdCB0SSA9IGNsaWNrRXZlbnQudGFza0luZGV4O1xuICAgICAgcHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXSA9IGNyZWF0ZVRhc2tGcm9tQ2xpY2tFdmVudChjbGlja0V2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRnJvbUNsaWNrRXZlbnQoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgdGl0bGUgPSBjbGlja0V2ZW50LnRpdGxlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjbGlja0V2ZW50LmRlc2NyaXB0aW9uO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGNsaWNrRXZlbnQuZHVlRGF0ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gY2xpY2tFdmVudC5wcmlvcml0eTtcbiAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZVN0YXR1cyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRhc2tCdWlsZGVyKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICB0YXNrQ29tcGxldGVTdGF0dXNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChjbGlja0V2ZW50KSB7XG4gICAgaWYgKHByb2plY3RBbHJlYWR5RXhpc3RzKGNsaWNrRXZlbnQpKSBjaGFuZ2VQcm9qZWN0VGl0bGUoY2xpY2tFdmVudCk7XG4gICAgZWxzZSBhcHBlbmRQcm9qZWN0KGNsaWNrRXZlbnQpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwidXBkYXRlTGlzdE9mUHJvamVjdHNcIiwgcHJvamVjdExpc3QpO1xuXG4gICAgZnVuY3Rpb24gcHJvamVjdEFscmVhZHlFeGlzdHMoY2xpY2tFdmVudCkge1xuICAgICAgY29uc3QgcEkgPSBjbGlja0V2ZW50LnByb2plY3RJbmRleDtcbiAgICAgIGlmIChwSSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcEkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7XG4gICAgICByZXR1cm4gcEk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdFRpdGxlKGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgICBjb25zdCBuZXdUaXRsZSA9IGNsaWNrRXZlbnQudGl0bGU7XG4gICAgICBwcm9qZWN0TGlzdFtwSV0udGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0KGNsaWNrRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gY2xpY2tFdmVudC50aXRsZTtcbiAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdEJ1aWxkZXIodGl0bGUsIFtdLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QoY2xpY2tFdmVudCkge1xuICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgaWYgKHByb2plY3RMaXN0W3BJXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUHJvamVjdCBJbmRleCB1bmRlZmluZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBbGxQcm9qZWN0c1RvSW5BY3RpdmUoKTtcbiAgICBzZXRQcm9qZWN0SW5kZXhUb0FjdGl2ZShwSSk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBzZXRBbGxQcm9qZWN0c1RvSW5BY3RpdmUoKSB7XG4gICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiAocHJvamVjdC5hY3RpdmVTdGF0dXMgPSBmYWxzZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2plY3RJbmRleFRvQWN0aXZlKGluZGV4KSB7XG4gICAgICBwcm9qZWN0TGlzdFtpbmRleF0uYWN0aXZlU3RhdHVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGUoY2xpY2tFdmVudCkge1xuICAgIGNvbnN0IHBJID0gY2xpY2tFdmVudC5wcm9qZWN0SW5kZXg7XG4gICAgY29uc3QgdEkgPSBjbGlja0V2ZW50LnRhc2tJbmRleDtcbiAgICBwcm9qZWN0TGlzdFtwSV0udGFza0xpc3RbdEldLnRhc2tDb21wbGV0ZVN0YXR1c1xuICAgICAgPyAocHJvamVjdExpc3RbcEldLnRhc2tMaXN0W3RJXS50YXNrQ29tcGxldGVTdGF0dXMgPSBmYWxzZSlcbiAgICAgIDogKHByb2plY3RMaXN0W3BJXS50YXNrTGlzdFt0SV0udGFza0NvbXBsZXRlU3RhdHVzID0gdHJ1ZSk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgcHVic3ViID0ge1xuICAgIGV2ZW50czoge30sXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrRnVuY1RvU3ViKSB7XG4gICAgICBjb25zb2xlLmluZm8oYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2ZW50TmFtZX1gKTtcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFja0Z1bmNUb1N1Yik7XG4gICAgfSxcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFja0Z1bmNUb1VuU3ViKSB7XG4gICAgICBjb25zb2xlLmluZm8oYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZlbnROYW1lfWApO1xuICAgICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmlsdGVyKGNhbGxiYWNrRnVuYyA9PiBjYWxsYmFja0Z1bmMgIT09IGNhbGxiYWNrRnVuY1RvVW5TdWIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICBjb25zb2xlLmluZm8oYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2ZW50TmFtZX0gd2l0aCBgLGRhdGEpO1xuICAgICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrRnVuYyA9PiB7XG4gICAgICAgICAgY2FsbGJhY2tGdW5jKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07IiwiaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgXCIuL3Byb2plY3QtbGlzdC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWIuanNcIjtcbmltcG9ydCBiZW0gZnJvbSBcImVhc3ktYmVtXCI7XG5cbmV4cG9ydCBjb25zdCBSZW5kZXJQcm9qZWN0RmllbGQgPSAoKCkgPT4ge1xuICAvLyBmb3IgYmVtIGNsYXNzIG5hbWVzXG4gIGNvbnN0IHBmID0gYmVtKFwicHJvamVjdC1maWVsZFwiKTtcblxuICAvLyBJbml0aWFsaXplIHByb2plY3RGaWVsZFxuICBjb25zdCBwcm9qZWN0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RmllbGQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZmllbGRcIik7XG5cbiAgLy8gSW5pdGlhbGl6ZSBQdWJTdWJzXG4gIHB1YnN1Yi5zdWJzY3JpYmUoXCJ1cGRhdGVMaXN0T2ZQcm9qZWN0c1wiLCByZW5kZXJQcm9qZWN0RmllbGRDb250ZW50KTtcbiAgLy8gVE8tRE8gUmVtb3ZlIGFmdGVyIGxvY2FsU3RvcmFnZSBpbXBsZW1lbnRhdGlvblxuICBwdWJzdWIucHVibGlzaChcImxvYWRQcm9qZWN0TGlzdFwiKTtcbiAgLy8gVE8tRE8gUmVtb3ZlIGFmdGVyIGxvY2FsU3RvcmFnZSBpbXBsZW1lbnRhdGlvblxuXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3RGaWVsZENvbnRlbnQocHJvamVjdExpc3QpIHtcbiAgICBwcm9qZWN0RmllbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBwcm9qZWN0RmllbGQuYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0SXRlbShwcm9qZWN0LCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByb2plY3RGaWVsZC5hcHBlbmRDaGlsZChfbWFrZUFkZFByb2plY3RCdXR0b24oKSk7XG5cbiAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RJdGVtKHByb2plY3QsIGluZGV4KSB7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLmNsYXNzTGlzdCA9IHBmKFwiaXRlbVwiLCB7IGFjdGl2ZTogcHJvamVjdC5hY3RpdmVTdGF0dXMgfSk7XG4gICAgICBzcGFuLmRhdGFzZXQucHJvamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc2V0SXRlbUFjdGl2ZU9uQ2xpY2spO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZVByb2plY3RUaXRsZShwcm9qZWN0LCBpbmRleCkpO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZUJ1dHRvbkZpZWxkKGluZGV4KSk7XG4gICAgICByZXR1cm4gc3BhbjtcblxuICAgICAgZnVuY3Rpb24gX21ha2VQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJ0aXRsZVwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfbWFrZUJ1dHRvbkZpZWxkKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcImJ1dHRvbnNcIik7XG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoX21ha2VQcm9qZWN0RWRpdEJ1dHRvbigpKTtcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChfbWFrZVByb2plY3REZWxldGVCdXR0b24oKSk7XG4gICAgICAgIHJldHVybiBzcGFuO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9tYWtlUHJvamVjdERlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZURlbGV0ZUJ1dHRvbigpO1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2RlbGV0ZVByb2plY3RPbkNsaWNrKTtcbiAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuXG4gICAgICAgICAgZnVuY3Rpb24gX2RlbGV0ZVByb2plY3RPbkNsaWNrKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID1cbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICBwdWJzdWIucHVibGlzaChcInByb2plY3REZWxldGVDbGlja1wiLCB7IHByb2plY3RJbmRleCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfbWFrZVByb2plY3RFZGl0QnV0dG9uKCkge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IFJlbmRlci5tYWtlRWRpdEJ1dHRvbigpO1xuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2hhbmRsZUVkaXRCdXR0b25DbGljayk7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcblxuICAgICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVFZGl0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgICAgICByZXBsYWNlTGFiZWxXaXRoRm9ybSh0aGlzKTtcblxuICAgICAgICAgICAgY29uc3QgdGVzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXBsYWNlTGFiZWxXaXRoRm9ybShpbmRleCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlTGFiZWxXaXRoRm9ybShjbGlja0V2ZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9nZXRQcm9qZWN0VGl0bGUocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gX2dldFByb2plY3RMYWJlbChwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgICBjb25zdCBwcmVGaWxsZWRGb3JtID0gX21ha2VQcm9qZWN0RW50cnlGb3JtKFxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXhcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBwcm9qZWN0RmllbGQucmVwbGFjZUNoaWxkKHByZUZpbGxlZEZvcm0sIHByb2plY3RMYWJlbCk7XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gX2dldFByb2plY3RUaXRsZShwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1wcm9qZWN0LWluZGV4PScke3Byb2plY3RJbmRleH0nXSAuJHtwZihcInRpdGxlXCIpfWBcbiAgICAgICAgICAgICAgICApLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gX2dldFByb2plY3RMYWJlbChwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1wcm9qZWN0LWluZGV4PScke3Byb2plY3RJbmRleH0nXS4ke3BmKFwiaXRlbVwiKX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIF9tYWtlUHJvamVjdEVudHJ5Rm9ybShwcm9qZWN0VGl0bGUsIHByb2plY3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IF9tYWtlRW50cnlDb250YWluZXIocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gX21ha2VGb3JtKHByb2plY3RUaXRsZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZUVudHJ5Q29udGFpbmVyKHByb2plY3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QgPSBwZihcIml0ZW1cIik7XG4gICAgICAgICAgICAgICAgICBzcGFuLmRhdGFzZXQucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX21ha2VGb3JtKHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QgPSBwZihcImZvcm1cIik7XG4gICAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgICAgICAgICAgICAgICAgZm9ybS5vbnN1Ym1pdCA9IFwicmV0dXJuIGZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW50cnlCb3ggPSBfbWFrZVRleHRFbnRyeUJveChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gX21ha2VTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dEVudHJ5Qm94KTtcbiAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtO1xuXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfbWFrZVRleHRFbnRyeUJveChwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVudHJ5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RW50cnlCb3guY2xhc3NMaXN0ID0gcGYoXCJ0ZXh0LWJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVudHJ5Qm94LnBsYWNlaG9sZGVyID0gXCJFbnRlciBwcm9qZWN0IG5hbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dEVudHJ5Qm94LnZhbHVlID0gcHJvamVjdFRpdGxlIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHRFbnRyeUJveC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW50cnlCb3g7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9tYWtlU3VibWl0QnV0dG9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXIubWFrZUNoZWNrQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N1Ym1pdEVudHJ5Rm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gX3N1Ym1pdEVudHJ5Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyZW50Tm9kZVswXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0QWRkQ2xpY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3NldEl0ZW1BY3RpdmVPbkNsaWNrKGNsaWNrRXZlbnQpIHtcbiAgICAgICAgaWYgKGJ1dHRvbldhc0NsaWNrZWQoY2xpY2tFdmVudCkpIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0U2V0QWN0aXZlQ2xpY2tcIiwgeyBwcm9qZWN0SW5kZXggfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gYnV0dG9uV2FzQ2xpY2tlZChjbGlja0V2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5jbGlja0V2ZW50LnRhcmdldC5jbGFzc0xpc3RdLmluY2x1ZGVzKFwiYnV0dG9uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VBZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgICAgY29uc3QgYnV0dG9uID0gUmVuZGVyLm1ha2VBZGRCdXR0b24oKTtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2luc2VydEJsYW5rRW50cnlGb3JtKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0ID0gcGYoXCJpdGVtXCIpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKHBmKFwiYWRkXCIpKTtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIHJldHVybiBzcGFuO1xuXG4gICAgICBmdW5jdGlvbiBfaW5zZXJ0QmxhbmtFbnRyeUZvcm0oKSB7XG4gICAgICAgIHByb2plY3RGaWVsZC5pbnNlcnRCZWZvcmUoX21ha2VQcm9qZWN0RW50cnlGb3JtKCksIHRoaXMucGFyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0RmllbGQsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFJlbmRlciA9ICgoKSA9PiB7XG4gIC8vIExpbmsgc3R5bGVzaGVldCBmb3IgaWNvbnNcbiAge1xuICAgIGNvbnN0IGdvb2dsZUljb25zU3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGdvb2dsZUljb25zU3R5bGVTaGVldC5ocmVmID1cbiAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytPdXRsaW5lZFwiO1xuICAgIGdvb2dsZUljb25zU3R5bGVTaGVldC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdvb2dsZUljb25zU3R5bGVTaGVldCk7XG4gIH1cblxuICBmdW5jdGlvbiBfbWFrZUljb25CdXR0b24oY29udGVudCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIsXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgYGJ1dHRvbl9fJHtjb250ZW50fWBcbiAgICApO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGNvbnN0IG1ha2VBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9tYWtlSWNvbkJ1dHRvbihcImFkZFwiKTtcbiAgfTtcblxuICBjb25zdCBtYWtlRWRpdEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gX21ha2VJY29uQnV0dG9uKFwiZWRpdFwiKTtcbiAgfTtcblxuICBjb25zdCBtYWtlRGVsZXRlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJkZWxldGVcIik7XG4gIH07XG5cbiAgY29uc3QgbWFrZUNoZWNrQnV0dG9uID0gKCkgPT4ge1xuICAgIHJldHVybiBfbWFrZUljb25CdXR0b24oXCJjaGVja1wiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1ha2VBZGRCdXR0b24sXG4gICAgbWFrZUVkaXRCdXR0b24sXG4gICAgbWFrZURlbGV0ZUJ1dHRvbixcbiAgICBtYWtlQ2hlY2tCdXR0b24sXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IHRhc2tCdWlsZGVyID0gZnVuY3Rpb24gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICB0YXNrQ29tcGxldGVTdGF0dXNcbikge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0YXNrQ29tcGxldGVTdGF0dXMgfTtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0QnVpbGRlciB9IGZyb20gXCIuLi9wcm9qZWN0LWJ1aWxkZXJcIjtcbmltcG9ydCB7IHRhc2tMaXN0UHJvdG90eXBlIH0gZnJvbSBcIi4vdGFzay1idWlsZGVyLXRlc3RzXCI7XG5cbmxldCBwcm9qZWN0TGlzdFByb3RvdHlwZSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEJ1aWxkZXIoXG4gICAgYHByb2plY3Qke2l9YCxcbiAgICB0YXNrTGlzdFByb3RvdHlwZVtpXSxcbiAgICBpICUgMiA/IHRydWUgOiBmYWxzZVxuICApO1xuICBwcm9qZWN0TGlzdFByb3RvdHlwZS5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdFByb3RvdHlwZSB9O1xuIiwiaW1wb3J0IHsgUmVuZGVyUHJvamVjdEZpZWxkIH0gZnJvbSBcIi4uL3JlbmRlci1wcm9qZWN0LWZpZWxkXCI7XG5pbXBvcnQgXCIuLi9wcm9qZWN0LWxpc3QtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3RQcm90b3R5cGUgfSBmcm9tIFwiLi9wcm9qZWN0LWJ1aWxkZXItdGVzdFwiO1xuXG4vLyBpbml0aWFsaXplIHByb2plY3QgZmllbGRcbnB1YnN1Yi5wdWJsaXNoKFwibG9hZFByb2plY3RMaXN0XCIsIHByb2plY3RMaXN0UHJvdG90eXBlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUmVuZGVyUHJvamVjdEZpZWxkLnByb2plY3RGaWVsZCk7XG4iLCJpbXBvcnQgeyB0YXNrQnVpbGRlciB9IGZyb20gXCIuLi90YXNrLWJ1aWxkZXIuanNcIjtcblxubGV0IHRocmVlRGlmZmVyZW50VGFza0xpc3RzID0gW1xuICBidWlsZFRhc2tMaXN0KFwiYVwiKSxcbiAgYnVpbGRUYXNrTGlzdChcImJcIiksXG4gIGJ1aWxkVGFza0xpc3QoXCJjXCIpLFxuXTtcbmZ1bmN0aW9uIGJ1aWxkVGFza0xpc3QobW9kaWZpZXIpIHtcbiAgbGV0IHRhc2tMaXN0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrQnVpbGRlcihcbiAgICAgIGB0YXNrJHtpfSBmb3IgcHJvamVjdCAke21vZGlmaWVyfWAsXG4gICAgICBgZGVzY3JpcHRpb24ke2l9YCxcbiAgICAgIG5ldyBEYXRlKGAxMC8yNS8kezE5ODkgKyBpfWApLFxuICAgICAgYCR7aX1gLFxuICAgICAgaSAlIDIgPyB0cnVlIDogZmFsc2VcbiAgICApO1xuICAgIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gIH1cbiAgcmV0dXJuIHRhc2tMaXN0O1xufVxuZXhwb3J0IHsgdGhyZWVEaWZmZXJlbnRUYXNrTGlzdHMgYXMgdGFza0xpc3RQcm90b3R5cGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLnNhc3NcIjtcbmltcG9ydCBcIi4vdGVzdHMvcmVuZGVyLXRhc2stZmllbGQtdGVzdHNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==