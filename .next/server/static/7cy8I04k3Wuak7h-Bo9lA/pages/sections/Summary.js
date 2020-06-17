module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aprx");


/***/ }),

/***/ "aprx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kdv+");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Summary(props) {
  const {
    0: summaryq1,
    1: setSummaryq1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Question 1');
  const {
    0: summaryq2,
    1: setSummaryq2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Question 2');
  const {
    0: summaryq3,
    1: setSummaryq3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('No');
  const {
    0: summaryq4,
    1: setSummaryq4
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Question 4');
  const {
    0: summaryq5,
    1: setSummaryq5
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Question 5');
  const handleQ1Change = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setSummaryq1(newValue), []);
  const handleQ2Change = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setSummaryq2(newValue), []);
  const handleQ3Change = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_checked, newValue) => setSummaryq3(newValue), []);
  const handleQ4Change = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setSummaryq4(newValue), []);
  const handleQ5Change = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setSummaryq5(newValue), []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Business summary",
    description: "Please fill out as much of this form as you can. This will help us to help you."
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    name: "question1",
    onChange: handleQ1Change,
    label: "Tell us about your business: your brand, industry, products and customers.",
    value: summaryq1
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "What is your annual business revenue to date?",
    value: summaryq2,
    onChange: handleQ2Change,
    name: "summaryq2"
  }), "Do you have other brands currently on Shopify or Shopify Plus?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontal: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    id: "No",
    name: "question3",
    onChange: handleQ3Change,
    checked: true
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    id: "Yes",
    name: "question3",
    onChange: handleQ3Change,
    checked: true
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "If yes, then please provide the URL:",
    onChange: handleQ4Change,
    value: summaryq4
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "What are your main reasons for choosing Shopify Plus?",
    value: summaryq5,
    onChange: handleQ5Change
  }))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kdv+":
/***/ (function(module, exports) {



/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ })

/******/ });