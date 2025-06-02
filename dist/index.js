/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../e/ll_models/SillyTavern-Launcher/SillyTavern/public/scripts/slash-commands/SlashCommandEnumValue.js":
/*!***********************************************************************************************************************!*\
  !*** ../../../../e/ll_models/SillyTavern-Launcher/SillyTavern/public/scripts/slash-commands/SlashCommandEnumValue.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlashCommandEnumValue: () => (/* binding */ SlashCommandEnumValue),
/* harmony export */   enumTypes: () => (/* binding */ enumTypes)
/* harmony export */ });
/**
 * @typedef {'enum' | 'command' | 'namedArgument' | 'variable' | 'qr' | 'macro' | 'number' | 'name'} EnumType
 */

/**
 * Collection of the enum types that can be used with `SlashCommandEnumValue`
 *
 * Contains documentation on which color this will result to
 */
const enumTypes = {
    /** 'enum' - [string] - light orange @type {EnumType} */
    enum: 'enum',
    /** 'command' - [cmd] - light yellow @type {EnumType} */
    command: 'command',
    /** 'namedArgument' - [argName] - sky blue @type {EnumType} */
    namedArgument: 'namedArgument',
    /** 'variable' - [punctuationL1] - pink @type {EnumType} */
    variable: 'variable',
    /** 'qr' - [variable] - light blue @type {EnumType} */
    qr: 'qr',
    /** 'macro' - [variableLanguage] - blue @type {EnumType} */
    macro: 'macro',
    /** 'number' - [number] - light green @type {EnumType} */
    number: 'number',
    /** 'name' - [type] - forest green @type {EnumType} */
    name: 'name',

    /**
     * Gets the value of the enum type based on the provided index
     *
     * Can be used to get differing colors or even random colors, by providing the index of a unique set
     *
     * @param {number?} index - The index used to retrieve the enum type
     * @return {EnumType} The enum type corresponding to the index
     */
    getBasedOnIndex(index) {
        const keys = Object.keys(this);
        return this[keys[(index ?? 0) % keys.length]];
    },
};

class SlashCommandEnumValue {
    /**@type {string}*/ value;
    /**@type {string}*/ description;
    /**@type {EnumType}*/ type = 'enum';
    /**@type {string}*/ typeIcon = '◊';
    /**@type {(input:string)=>boolean}*/ matchProvider;
    /**@type {(input:string)=>string}*/ valueProvider;
    /**@type {boolean}*/ makeSelectable = false;

    /**
     * A constructor for creating a SlashCommandEnumValue instance.
     *
     * @param {string} value - The value
     * @param {string?} description - Optional description, displayed in a second line
     * @param {EnumType?} type - type of the enum (defining its color)
     * @param {string?} typeIcon - The icon to display (Can be pulled from `enumIcons` for common ones)
     * @param {(input:string)=>boolean?} matchProvider - A custom function to match autocomplete input instead of startsWith/includes/fuzzy. Should only be used for generic options like "any number" or "any string". "input" is the part of the text that is getting auto completed.
     * @param {(input:string)=>string?} valueProvider - A function returning a value to be used in autocomplete instead of the enum value. "input" is the part of the text that is getting auto completed. By default, values with a valueProvider will not be selectable in the autocomplete (with tab/enter).
     * @param {boolean?} makeSelectable - Set to true to make the value selectable (through tab/enter) even though a valueProvider exists.
     */
    constructor(value, description = null, type = 'enum', typeIcon = '◊', matchProvider = null, valueProvider = null, makeSelectable = false) {
        this.value = value;
        this.description = description;
        this.type = type ?? 'enum';
        this.typeIcon = typeIcon;
        this.matchProvider = matchProvider;
        this.valueProvider = valueProvider;
        this.makeSelectable = makeSelectable;
    }

    toString() {
        return this.value;
    }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.loader {
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.okText {
    color: var(--customThemeColor);
}
`, ""]);
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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

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

/***/ "./src/commands.ts":
/*!*************************!*\
  !*** ./src/commands.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerSlashCommands: () => (/* binding */ registerSlashCommands)
/* harmony export */ });
/* harmony import */ var _e_ll_models_SillyTavern_Launcher_SillyTavern_public_scripts_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../e/ll_models/SillyTavern-Launcher/SillyTavern/public/scripts/slash-commands/SlashCommandEnumValue */ "../../../../e/ll_models/SillyTavern-Launcher/SillyTavern/public/scripts/slash-commands/SlashCommandEnumValue.js");
/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model_state */ "./src/model_state.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests */ "./src/requests.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const { SlashCommandParser, SlashCommandNamedArgument, SlashCommand, ARGUMENT_TYPE, } = SillyTavern.getContext();
const registerSlashCommands = () => {
    const startModelCommand = SlashCommand.fromProps({
        name: 'kobold-start',
        callback: (nargs) => __awaiter(void 0, void 0, void 0, function* () {
            const { name } = nargs;
            const selectedModel = (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)().runTemplates.find(tmpl => tmpl.name === name);
            if (selectedModel === undefined) {
                const errMsg = `Can't find model ${name}`;
                toastr.error(errMsg);
                return errMsg;
            }
            (0,_model_state__WEBPACK_IMPORTED_MODULE_1__.refreshModelState)({ model: selectedModel.model, status: 'loading' });
            const currentStatus = yield (0,_requests__WEBPACK_IMPORTED_MODULE_2__.loadModelStatus)();
            if (currentStatus.status === 'online') {
                yield (0,_requests__WEBPACK_IMPORTED_MODULE_2__.stopModel)()
                    .then(() => (0,_model_state__WEBPACK_IMPORTED_MODULE_1__.waitForModelStatus)('offline'))
                    .catch();
            }
            return yield (0,_requests__WEBPACK_IMPORTED_MODULE_2__.startModel)(selectedModel)
                .then(() => (0,_model_state__WEBPACK_IMPORTED_MODULE_1__.waitForModelStatus)('online'))
                .then(state => (0,_model_state__WEBPACK_IMPORTED_MODULE_1__.refreshModelState)(state))
                .catch((err) => {
                const errMsg = `Failed to start model ${name}: ${err.message}`;
                toastr.error(errMsg);
                return errMsg;
            });
        }),
        namedArgumentList: [
            SlashCommandNamedArgument.fromProps({
                name: 'name',
                description: 'name of template to start',
                typeList: [ARGUMENT_TYPE.STRING],
                isRequired: true,
                enumProvider: () => (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)().runTemplates.map(tmpl => new _e_ll_models_SillyTavern_Launcher_SillyTavern_public_scripts_slash_commands_SlashCommandEnumValue__WEBPACK_IMPORTED_MODULE_0__.SlashCommandEnumValue(tmpl.name, tmpl.model)),
                forceEnum: true,
            }),
        ],
        helpString: 'Starts KoboldCpp with configuration from selected template',
    });
    SlashCommandParser.addCommandObject(startModelCommand);
};


/***/ }),

/***/ "./src/consts.ts":
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_CTX_SIZES: () => (/* binding */ ALLOWED_CTX_SIZES),
/* harmony export */   MODULE_NAME: () => (/* binding */ MODULE_NAME),
/* harmony export */   TEXT_LIST_SEP: () => (/* binding */ TEXT_LIST_SEP)
/* harmony export */ });
/*eslint no-magic-numbers: "off"*/
const MODULE_NAME = 'KoboldModelSwitcher';
const TEXT_LIST_SEP = ' ';
const ALLOWED_CTX_SIZES = [
    256,
    512,
    1024,
    2048,
    3072,
    4096,
    6144,
    8192,
    10240,
    12288,
    14336,
    16384,
    20480,
    24576,
    28672,
    32768,
    40960,
    49152,
    57344,
    65536,
    81920,
    98304,
    114688,
    131072,
];


/***/ }),

/***/ "./src/elements.ts":
/*!*************************!*\
  !*** ./src/elements.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateOption: () => (/* binding */ generateOption)
/* harmony export */ });
const generateOption = (value, opts) => {
    var _a, _b;
    const option = document.createElement('option');
    option.value = value;
    option.innerText = (_a = opts === null || opts === void 0 ? void 0 : opts.text) !== null && _a !== void 0 ? _a : value;
    option.selected = (_b = opts === null || opts === void 0 ? void 0 : opts.selected) !== null && _b !== void 0 ? _b : false;
    return option;
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands */ "./src/commands.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ "./src/requests.ts");
/* harmony import */ var _settings_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings_render */ "./src/settings_render.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





// Main extension initialization function
await (function initExtension() {
    return __awaiter(this, void 0, void 0, function* () {
        globalThis.console.debug(`[${_consts__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME}]`, 'Initializing extension');
        yield (0,_requests__WEBPACK_IMPORTED_MODULE_3__.initHeaders)();
        yield (0,_settings_render__WEBPACK_IMPORTED_MODULE_4__.addSettingsControls)();
        (0,_commands__WEBPACK_IMPORTED_MODULE_1__.registerSlashCommands)();
        globalThis.console.debug(`[${_consts__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME}]`, 'Extension initialized');
    });
})();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/model_state.ts":
/*!****************************!*\
  !*** ./src/model_state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshModelState: () => (/* binding */ refreshModelState),
/* harmony export */   waitForModelStatus: () => (/* binding */ waitForModelStatus)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requests */ "./src/requests.ts");
/* harmony import */ var _timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timers */ "./src/timers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const msInS = 1000;
// Waits for target status tracking progress with a toast returning final model state.
const waitForModelStatus = (status) => __awaiter(void 0, void 0, void 0, function* () {
    const params = status === 'online' ? {
        timout: 120000,
        retry: 2000,
        waitMsg: `Starting KoboldCpp...`,
    } : {
        timout: 10000,
        retry: 200,
        waitMsg: `Stopping KoboldCpp currently running model`,
    };
    const progressToast = toastr.info(params.waitMsg, undefined, { timeOut: params.timout });
    let lastModelState = yield (0,_requests__WEBPACK_IMPORTED_MODULE_1__.loadModelStatus)();
    const modelStateReached = () => __awaiter(void 0, void 0, void 0, function* () {
        lastModelState = yield (0,_requests__WEBPACK_IMPORTED_MODULE_1__.loadModelStatus)();
        return [status, 'failed'].includes(lastModelState.status);
    });
    const online = status === 'online';
    return yield (0,_timers__WEBPACK_IMPORTED_MODULE_2__.waitFor)(modelStateReached, params.timout, params.retry)
        .then(() => {
        var _a;
        if (lastModelState.status === status) {
            toastr.success('Don\'t forget to update settings', `Model successfully ${online ? 'started' : 'stopped'}`);
        }
        else {
            toastr.error(`Error ${(_a = lastModelState.error) !== null && _a !== void 0 ? _a : 'unknown'}`, `Model failed to ${online ? 'start' : 'stop'}`);
        }
        return lastModelState;
    })
        .catch(() => {
        toastr.error('Error', `Failed to wait for model status ${status} ` +
            `after ${(params.timout / msInS).toString()} seconds`);
        return lastModelState;
    })
        .finally(() => {
        progressToast.remove();
    });
});
const statusClasses = ['redOverlayGlow', 'okText', 'comment'], switcherLoaderClasses = ['loader'], switcherOfflineClasses = ['fa-play', 'active'], switcherOnlineClasses = ['fa-stop', 'redOverlayGlow'];
const updateStateElements = (state) => {
    const elements = {
        switcher: document.getElementById('kss-run-template-start'),
        status: document.getElementById('kss-current-status')
    };
    elements.switcher.classList.remove(...switcherOnlineClasses, ...switcherOfflineClasses, ...switcherLoaderClasses);
    elements.switcher.classList.add(...state.switcherClasses);
    elements.switcher.onclick = state.clickAction;
    elements.status.classList.remove(...statusClasses);
    elements.status.classList.add(...state.statusClasses);
    elements.status.innerHTML = `<h4>${state.text}</h4>`;
};
// Refresh page elements to match the model states
const refreshModelState = (state) => {
    globalThis.console.info(`[${_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME}]`, `Updating model info for status ${state.status}`);
    globalThis.console.info(`[${_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME}]`, `Click handler is ${globalThis.statusSwitchAction.toString()}`);
    switch (state.status) {
        case 'failed':
        case 'offline': {
            updateStateElements({
                switcherClasses: switcherOfflineClasses,
                statusClasses: ['redOverlayGlow'],
                text: 'All models are offline',
                clickAction: globalThis.statusSwitchAction,
            });
            break;
        }
        case 'online': {
            updateStateElements({
                switcherClasses: switcherOnlineClasses,
                statusClasses: ['okText'],
                text: state.model,
                clickAction: globalThis.statusSwitchAction,
            });
            break;
        }
        default: {
            updateStateElements({
                switcherClasses: switcherLoaderClasses,
                statusClasses: ['comment'],
                text: `Loading model ${state.model}...`,
                clickAction: null,
            });
        }
    }
    return `Model ${state.model} in status ${state.status}`;
};


/***/ }),

/***/ "./src/requests.ts":
/*!*************************!*\
  !*** ./src/requests.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeaders: () => (/* binding */ initHeaders),
/* harmony export */   loadAvailableModels: () => (/* binding */ loadAvailableModels),
/* harmony export */   loadModelStatus: () => (/* binding */ loadModelStatus),
/* harmony export */   startModel: () => (/* binding */ startModel),
/* harmony export */   stopModel: () => (/* binding */ stopModel)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modelURL = '/api/plugins/kobold-switcher/model';
class UnexpectedStatusCode extends Error {
}
let token = '';
const requestHeaders = () => {
    return {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
    };
};
const initHeaders = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('/csrf-token')
        .then(resp => {
        if (!resp.ok) {
            return Promise.reject(new Error(`requiest unsuccessfull, received code ${resp.status.toString()} (${resp.statusText})`));
        }
        return resp.json();
    })
        .then((data) => {
        ({ token } = data);
    });
});
const loadAvailableModels = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch('/api/plugins/kobold-switcher/models')
        .then(resp => {
        if (!resp.ok) {
            return Promise.reject(new Error(`requiest unsuccessfull, received code ${resp.status.toString()} (${resp.statusText})`));
        }
        return resp.json();
    })
        .then((data) => data.models);
});
const loadModelStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(modelURL)
        .then(resp => {
        if (!resp.ok) {
            return Promise.reject(new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`));
        }
        return resp.json();
    });
});
const startModel = (opts) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(modelURL, {
        method: 'PUT',
        headers: requestHeaders(),
        body: JSON.stringify({
            model: opts.model,
            contextSize: opts.contextSize,
            gpuLayers: opts.gpuLayers,
            threads: opts.threads,
            tensorSplit: opts.tensorSplit,
        }),
    })
        .then(resp => {
        if (!resp.ok) {
            throw new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`);
        }
    });
});
const stopModel = () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(modelURL, { method: 'DELETE', headers: requestHeaders() })
        .then(resp => {
        if (!resp.ok) {
            throw new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`);
        }
    });
});


/***/ }),

/***/ "./src/run_template.html":
/*!*******************************!*\
  !*** ./src/run_template.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div id="kobold-model-edit-template">
    <div>
        <label for="model">Model Name</label>
        <select id="model" class="text_pole flex1">
            <!-- available models to be inserted here -->
        </select>
    </div>
    <div>
        <label for="context-size">Context Size</label>
        <select id="context-size" class="text_pole flex1">
            <!-- context size options to be inserted here -->
        </select>
    </div>
    <div>
        <label for="gpu-layers">GPU Layers</label>
        <input type="number" id="gpu-layers" class="text_pole" />
    </div>
    <div>
        <label for="threads">Threads</label>
        <input type="number" id="threads" class="text_pole" min="-1" />
    </div>
    <div>
        <label for="tensor-split"
            >Tensor split (space-separated list of floats)</label
        >
        <input type="text" id="tensor-split" class="text_pole" />
    </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/settings.html":
/*!***************************!*\
  !*** ./src/settings.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<div id="kobold-switcher-settings">
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>
                <span>KoboldCpp Switcher</span>
            </b>
            <div
                class="inline-drawer-icon fa-solid fa-circle-chevron-down down"
            ></div>
        </div>
        <div class="inline-drawer-content">
            <label for="run-templates">Run template</label>
            <div class="flex-container flexnowrap">
                <select id="run-templates" class="text_pole flex1">
                    <!-- available run templates to be inserted here -->
                </select>
                <div
                    id="kss-run-template-start"
                    class="menu_button fa-solid fa-play active interactable"
                ></div>
                <div
                    id="kss-run-template-edit"
                    class="menu_button menu_button_icon interactable"
                >
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div
                    id="kss-run-template-clone"
                    class="menu_button menu_button_icon interactable"
                >
                    <i class="fa-solid fa-clone"></i>
                </div>
                <div
                    id="kss-run-template-create"
                    class="menu_button menu_button_icon interactable"
                >
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div
                    id="kss-run-template-delete"
                    class="menu_button menu_button_icon interactable"
                >
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <label for="kss-current-status">Currently running model</label>
            <div class="flex-container flexnowrap">
                <div
                    id="kss-current-status"
                    class="flex-container flexnowrap redOverlayGlow"
                >
                    <h4>All models are offline</h4>
                </div>
            </div>
        </div>
    </div>
</div>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyRunTemplate: () => (/* binding */ emptyRunTemplate),
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   saveExtensionSettings: () => (/* binding */ saveExtensionSettings)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");

const { saveSettingsDebounced } = SillyTavern.getContext();
const emptyRunTemplate = Object.freeze({
    name: '',
    model: '',
});
const defaultSettings = Object.freeze({
    runTemplates: [],
});
const getSettings = () => {
    const context = SillyTavern.getContext();
    const globalSettings = context.extensionSettings;
    // Initialize settings if they don't exist
    if (!globalSettings[_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME]) {
        globalSettings[_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME] = structuredClone(defaultSettings);
    }
    return globalSettings[_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME];
};
const saveExtensionSettings = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    saveSettingsDebounced();
};


/***/ }),

/***/ "./src/settings_render.ts":
/*!********************************!*\
  !*** ./src/settings_render.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSettingsControls: () => (/* binding */ addSettingsControls),
/* harmony export */   switchRunStatus: () => (/* binding */ switchRunStatus)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/elements.ts");
/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model_state */ "./src/model_state.ts");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests */ "./src/requests.ts");
/* harmony import */ var _run_template_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run_template.html */ "./src/run_template.html");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var _settings_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.html */ "./src/settings.html");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const { Popup, POPUP_TYPE } = SillyTavern.getContext();
// eslint-disable-next-line max-statements,max-lines-per-function
const showRunTemplateEditPopup = (tmpl) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const popup = new Popup(_run_template_html__WEBPACK_IMPORTED_MODULE_4__["default"], POPUP_TYPE.TEXT, '', {
        okButton: 'Save',
        cancelButton: 'Cancel',
        wide: true,
        large: true,
    });
    const popupShow = popup.show();
    const elements = {
        modelSelect: document.getElementById('model'),
        contextSizeSelect: document.getElementById('context-size'),
        gpuLayers: document.getElementById('gpu-layers'),
        threads: document.getElementById('threads'),
        tensorSplit: document.getElementById('tensor-split'),
    };
    _consts__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_CTX_SIZES
        .forEach(size => {
        elements
            .contextSizeSelect
            .appendChild((0,_elements__WEBPACK_IMPORTED_MODULE_1__.generateOption)(size.toString(), { selected: size === tmpl.contextSize }));
    });
    const existingModels = yield (0,_requests__WEBPACK_IMPORTED_MODULE_3__.loadAvailableModels)();
    existingModels
        .forEach(model => {
        elements
            .modelSelect
            .appendChild((0,_elements__WEBPACK_IMPORTED_MODULE_1__.generateOption)(model, { selected: model === tmpl.model }));
    });
    const tmplData = tmpl !== null && tmpl !== void 0 ? tmpl : _settings__WEBPACK_IMPORTED_MODULE_5__.emptyRunTemplate;
    elements.modelSelect.value = (_a = tmplData.model) !== null && _a !== void 0 ? _a : '';
    elements.modelSelect.onchange = () => { tmplData.model = elements.modelSelect.value; };
    elements.contextSizeSelect.value = (_c = (_b = tmplData.contextSize) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : '';
    elements.contextSizeSelect.onchange = () => { tmplData.contextSize = parseInt(elements.contextSizeSelect.value, 10); };
    elements.gpuLayers.value = (_e = (_d = tmplData.gpuLayers) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : '';
    elements.gpuLayers.onchange = () => { tmplData.gpuLayers = parseInt(elements.gpuLayers.value, 10); };
    elements.threads.value = (_g = (_f = tmplData.threads) === null || _f === void 0 ? void 0 : _f.toString()) !== null && _g !== void 0 ? _g : '';
    elements.threads.onchange = () => { tmplData.threads = parseInt(elements.threads.value, 10); };
    elements.tensorSplit.value = (_j = (_h = tmplData.tensorSplit) === null || _h === void 0 ? void 0 : _h.join(_consts__WEBPACK_IMPORTED_MODULE_0__.TEXT_LIST_SEP)) !== null && _j !== void 0 ? _j : '';
    elements.tensorSplit.onchange = () => {
        tmplData.tensorSplit = elements.tensorSplit.value.split(_consts__WEBPACK_IMPORTED_MODULE_0__.TEXT_LIST_SEP).map(str => parseInt(str, 10));
    };
    return yield popupShow
        .then(result => {
        if (result) {
            return tmplData;
        }
        // If NOK, return unchanged template
        return tmpl;
    });
});
const syncSelectWithSettings = () => {
    var _a;
    const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const select = document.getElementById('run-templates');
    // Remove all
    select.innerHTML = '';
    // Add added
    settings
        .runTemplates
        .forEach(tmpl => { select.options.add((0,_elements__WEBPACK_IMPORTED_MODULE_1__.generateOption)(tmpl.name)); });
    select.value = (_a = settings.selectedRunTemplate) !== null && _a !== void 0 ? _a : '';
};
const checkForDuplicates = (templateName) => {
    const success = !(0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates.find(tmp => tmp.name === templateName);
    if (!success) {
        toastr.error('Template name already exists');
    }
    return success;
};
const showCreatePopup = () => __awaiter(void 0, void 0, void 0, function* () {
    globalThis.console.info(`[${_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME}]`, 'Create popup created');
    const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const popup = new Popup('New run template name (UNIQUE)', POPUP_TYPE.INPUT, '', {
        okButton: 'Create',
        cancelButton: 'Cancel',
        wide: true,
        // There should be no duplicates
        onClosing: pop => checkForDuplicates(pop.value),
    });
    let templateName = yield popup.show();
    if (templateName && typeof templateName === 'string') {
        if (settings.runTemplates.find(tmp => tmp.name === templateName)) {
            templateName = `${templateName} (${Date.now().toString()})`;
        }
        settings.runTemplates.push(Object.assign(Object.assign({}, _settings__WEBPACK_IMPORTED_MODULE_5__.emptyRunTemplate), { name: templateName }));
        (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
    }
    syncSelectWithSettings();
});
const showClonePopup = () => __awaiter(void 0, void 0, void 0, function* () {
    const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const selectedTemplate = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates.find(tmp => tmp.name === settings.selectedRunTemplate);
    if (settings.selectedRunTemplate === undefined || selectedTemplate === undefined) {
        yield showCreatePopup();
        return;
    }
    const popup = new Popup('New run template name (UNIQUE)', POPUP_TYPE.INPUT, `${settings.selectedRunTemplate} (copy)`, {
        okButton: 'Create',
        cancelButton: 'Cancel',
        wide: true,
        // There should no duplicates
        onClosing: pop => checkForDuplicates(pop.value),
    });
    let templateName = yield popup.show();
    if (templateName && typeof templateName === 'string') {
        if (settings.runTemplates.find(tmp => tmp.name === templateName)) {
            templateName = `${templateName} (${Date.now().toString()})`;
        }
        settings.runTemplates.push(Object.assign(Object.assign({}, selectedTemplate), { name: templateName }));
        (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
    }
    syncSelectWithSettings();
});
const showEditPopup = () => __awaiter(void 0, void 0, void 0, function* () {
    const select = document.getElementById('run-templates');
    const targetName = select.value;
    const template = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates.find(tmp => tmp.name === targetName);
    if (template === undefined) {
        globalThis.console.error(`[${_consts__WEBPACK_IMPORTED_MODULE_0__.MODULE_NAME}]`, `run template not found by name ${targetName}`);
        return;
    }
    const updatedTemplate = yield showRunTemplateEditPopup(template);
    const idx = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates.findIndex(tmp => tmp.name === targetName);
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates[idx] = updatedTemplate;
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
    syncSelectWithSettings();
});
const showDeletePopup = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)();
    const select = document.getElementById('run-templates');
    const popup = new Popup(`Delete run template '${(_a = settings.selectedRunTemplate) !== null && _a !== void 0 ? _a : ''}'?`, POPUP_TYPE.CONFIRM, '', {
        okButton: 'Delete',
        cancelButton: 'Cancel',
        wide: true,
    });
    if (yield popup.show()) {
        settings.runTemplates = settings.runTemplates.filter(tmp => tmp.name !== select.value);
        (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
        syncSelectWithSettings();
    }
});
const updateSelectedTemplate = (event) => {
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().selectedRunTemplate = event.target.value;
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
};
const switchRunStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const selectedTemplate = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().selectedRunTemplate;
    if (selectedTemplate === undefined) {
        return;
    }
    const selectedModel = (0,_settings__WEBPACK_IMPORTED_MODULE_5__.getSettings)().runTemplates.find(tmpl => tmpl.name === selectedTemplate);
    if (selectedModel === undefined) {
        throw new Error(`can't find model ${selectedTemplate}`);
    }
    // Blocking input, showing loader
    (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.refreshModelState)({ status: 'loading', model: selectedModel.model });
    const currentState = yield (0,_requests__WEBPACK_IMPORTED_MODULE_3__.loadModelStatus)();
    // Handle switch for handable statuses
    switch (currentState.status) {
        case 'failed':
        case 'offline': {
            (0,_requests__WEBPACK_IMPORTED_MODULE_3__.startModel)(selectedModel)
                .then(() => (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.waitForModelStatus)('online'))
                .then(state => (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.refreshModelState)(state))
                .catch((err) => {
                toastr.error(err.message);
            });
            break;
        }
        case 'online': {
            (0,_requests__WEBPACK_IMPORTED_MODULE_3__.stopModel)()
                .then(() => (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.waitForModelStatus)('offline'))
                .then(state => (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.refreshModelState)(state))
                .catch((err) => {
                toastr.error(err.message);
            });
            break;
        }
        default: {
            toastr.error(`Model ${currentState.model} currently in NOOP state '${currentState.status}'`);
        }
    }
});
globalThis.statusSwitchAction = switchRunStatus;
const addSettingsControls = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const settingsContainer = (_a = document.getElementById('kobold-switcher-container')) !== null && _a !== void 0 ? _a : document.getElementById('extensions_settings2');
    if (!settingsContainer) {
        return;
    }
    const renderer = document.createElement('template');
    renderer.innerHTML = _settings_html__WEBPACK_IMPORTED_MODULE_6__["default"];
    settingsContainer.appendChild(renderer.content);
    const elements = {
        templatesSelect: document.getElementById('run-templates'),
        create: document.getElementById('kss-run-template-create'),
        clone: document.getElementById('kss-run-template-clone'),
        edit: document.getElementById('kss-run-template-edit'),
        delete: document.getElementById('kss-run-template-delete'),
    };
    elements.templatesSelect.onchange = updateSelectedTemplate;
    elements.create.onclick = showCreatePopup;
    elements.clone.onclick = showClonePopup;
    elements.edit.onclick = showEditPopup;
    elements.delete.onclick = showDeletePopup;
    (0,_model_state__WEBPACK_IMPORTED_MODULE_2__.refreshModelState)(yield (0,_requests__WEBPACK_IMPORTED_MODULE_3__.loadModelStatus)());
    (0,_settings__WEBPACK_IMPORTED_MODULE_5__.saveExtensionSettings)();
    syncSelectWithSettings();
});


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/timers.ts":
/*!***********************!*\
  !*** ./src/timers.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   waitFor: () => (/* binding */ waitFor)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TimeoutError extends Error {
    constructor(ms) {
        super(`Timeout reached after ${ms.toString()}ms`);
    }
}
const timeout = (durationMs) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((_, reject) => { setTimeout(reject, durationMs); })
        .catch(() => new TimeoutError(durationMs));
});
const sleep = (durationMs) => __awaiter(void 0, void 0, void 0, function* () { return new Promise((resolve) => { setTimeout(resolve, durationMs); }); });
const waitFor = (predicate, timeoutMs, retryInterval) => __awaiter(void 0, void 0, void 0, function* () {
    const waitForPredicate = () => __awaiter(void 0, void 0, void 0, function* () {
        if (yield predicate()) {
            return;
        }
        // Sleep x_x
        yield sleep(retryInterval);
        yield waitForPredicate();
    });
    yield Promise.race([
        waitForPredicate(),
        timeout(timeoutMs),
    ]);
});


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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	var __webpack_exports_export__ = __webpack_exports__["default"];
/******/ 	for(var __webpack_i__ in __webpack_exports_export__) __webpack_export_target__[__webpack_i__] = __webpack_exports_export__[__webpack_i__];
/******/ 	if(__webpack_exports_export__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;