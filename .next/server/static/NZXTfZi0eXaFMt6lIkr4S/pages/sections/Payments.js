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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0MgN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Payments() {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "What is your main currency you are selling in?",
    options: [{
      label: 'AED',
      value: 'AED'
    }, {
      label: 'AFN',
      value: 'AFN'
    }, {
      label: 'ALL',
      value: 'ALL'
    }, {
      label: 'AMD',
      value: 'AMD'
    }, {
      label: 'ANG',
      value: 'ANG'
    }, {
      label: 'AOA',
      value: 'AOA'
    }, {
      label: 'ARS',
      value: 'ARS'
    }, {
      label: 'AUD',
      value: 'AUD'
    }, {
      label: 'AWG',
      value: 'AWG'
    }, {
      label: 'AZN',
      value: 'AZN'
    }, {
      label: 'BAM',
      value: 'BAM'
    }, {
      label: 'BBD',
      value: 'BBD'
    }, {
      label: 'BDT',
      value: 'BDT'
    }, {
      label: 'BGN',
      value: 'BGN'
    }, {
      label: 'BIF',
      value: 'BIF'
    }, {
      label: 'BMD',
      value: 'BMD'
    }, {
      label: 'BND',
      value: 'BND'
    }, {
      label: 'BOB',
      value: 'BOB'
    }, {
      label: 'BRL',
      value: 'BRL'
    }, {
      label: 'BSD',
      value: 'BSD'
    }, {
      label: 'BWP',
      value: 'BWP'
    }, {
      label: 'BZD',
      value: 'BZD'
    }, {
      label: 'CAD',
      value: 'CAD'
    }, {
      label: 'CDF',
      value: 'CDF'
    }, {
      label: 'CHF',
      value: 'CHF'
    }, {
      label: 'CLP',
      value: 'CLP'
    }, {
      label: 'CNY',
      value: 'CNY'
    }, {
      label: 'COP',
      value: 'COP'
    }, {
      label: 'CRC',
      value: 'CRC'
    }, {
      label: 'CVE',
      value: 'CVE'
    }, {
      label: 'CZK',
      value: 'CZK'
    }, {
      label: 'DJF',
      value: 'DJF'
    }, {
      label: 'DKK',
      value: 'DKK'
    }, {
      label: 'DOP',
      value: 'DOP'
    }, {
      label: 'DZD',
      value: 'DZD'
    }, {
      label: 'EGP',
      value: 'EGP'
    }, {
      label: 'ETB',
      value: 'ETB'
    }, {
      label: 'EUR',
      value: 'EUR'
    }, {
      label: 'FJD',
      value: 'FJD'
    }, {
      label: 'FKP',
      value: 'FKP'
    }, {
      label: 'GBP',
      value: 'GBP'
    }, {
      label: 'GEL',
      value: 'GEL'
    }, {
      label: 'GIP',
      value: 'GIP'
    }, {
      label: 'GMD',
      value: 'GMD'
    }, {
      label: 'GNF',
      value: 'GNF'
    }, {
      label: 'GTQ',
      value: 'GTQ'
    }, {
      label: 'GYD',
      value: 'GYD'
    }, {
      label: 'HKD',
      value: 'HKD'
    }, {
      label: 'HNL',
      value: 'HNL'
    }, {
      label: 'HRK',
      value: 'HRK'
    }, {
      label: 'HTG',
      value: 'HTG'
    }, {
      label: 'HUF',
      value: 'HUF'
    }, {
      label: 'IDR',
      value: 'IDR'
    }, {
      label: 'ILS',
      value: 'ILS'
    }, {
      label: 'INR',
      value: 'INR'
    }, {
      label: 'ISK',
      value: 'ISK'
    }, {
      label: 'JMD',
      value: 'JMD'
    }, {
      label: 'JPY',
      value: 'JPY'
    }, {
      label: 'KES',
      value: 'KES'
    }, {
      label: 'KGS',
      value: 'KGS'
    }, {
      label: 'KHR',
      value: 'KHR'
    }, {
      label: 'KMF',
      value: 'KMF'
    }, {
      label: 'KRW',
      value: 'KRW'
    }, {
      label: 'KYD',
      value: 'KYD'
    }, {
      label: 'KZT',
      value: 'KZT'
    }, {
      label: 'LAK',
      value: 'LAK'
    }, {
      label: 'LBP',
      value: 'LBP'
    }, {
      label: 'LKR',
      value: 'LKR'
    }, {
      label: 'LRD',
      value: 'LRD'
    }, {
      label: 'LSL',
      value: 'LSL'
    }, {
      label: 'MAD',
      value: 'MAD'
    }, {
      label: 'MDL',
      value: 'MDL'
    }, {
      label: 'MGA',
      value: 'MGA'
    }, {
      label: 'MKD',
      value: 'MKD'
    }, {
      label: 'MMK',
      value: 'MMK'
    }, {
      label: 'MNT',
      value: 'MNT'
    }, {
      label: 'MOP',
      value: 'MOP'
    }, {
      label: 'MUR',
      value: 'MUR'
    }, {
      label: 'MVR',
      value: 'MVR'
    }, {
      label: 'MWK',
      value: 'MWK'
    }, {
      label: 'MXN',
      value: 'MXN'
    }, {
      label: 'MYR',
      value: 'MYR'
    }, {
      label: 'MZN',
      value: 'MZN'
    }, {
      label: 'NAD',
      value: 'NAD'
    }, {
      label: 'NGN',
      value: 'NGN'
    }, {
      label: 'NIO',
      value: 'NIO'
    }, {
      label: 'NOK',
      value: 'NOK'
    }, {
      label: 'NPR',
      value: 'NPR'
    }, {
      label: 'NZD',
      value: 'NZD'
    }, {
      label: 'PAB',
      value: 'PAB'
    }, {
      label: 'PEN',
      value: 'PEN'
    }, {
      label: 'PGK',
      value: 'PGK'
    }, {
      label: 'PHP',
      value: 'PHP'
    }, {
      label: 'PKR',
      value: 'PKR'
    }, {
      label: 'PLN',
      value: 'PLN'
    }, {
      label: 'PYG',
      value: 'PYG'
    }, {
      label: 'QAR',
      value: 'QAR'
    }, {
      label: 'RON',
      value: 'RON'
    }, {
      label: 'RSD',
      value: 'RSD'
    }, {
      label: 'RUB',
      value: 'RUB'
    }, {
      label: 'RWF',
      value: 'RWF'
    }, {
      label: 'SAR',
      value: 'SAR'
    }, {
      label: 'SBD',
      value: 'SBD'
    }, {
      label: 'SCR',
      value: 'SCR'
    }, {
      label: 'SEK',
      value: 'SEK'
    }, {
      label: 'SGD',
      value: 'SGD'
    }, {
      label: 'SHP',
      value: 'SHP'
    }, {
      label: 'SLL',
      value: 'SLL'
    }, {
      label: 'SRD',
      value: 'SRD'
    }, {
      label: 'STD',
      value: 'STD'
    }, {
      label: 'SZL',
      value: 'SZL'
    }, {
      label: 'THB',
      value: 'THB'
    }, {
      label: 'TJS',
      value: 'TJS'
    }, {
      label: 'TOP',
      value: 'TOP'
    }, {
      label: 'TRY',
      value: 'TRY'
    }, {
      label: 'TTD',
      value: 'TTD'
    }, {
      label: 'TWD',
      value: 'TWD'
    }, {
      label: 'TZS',
      value: 'TZS'
    }, {
      label: 'UAH',
      value: 'UAH'
    }, {
      label: 'UGX',
      value: 'UGX'
    }, {
      label: 'USD',
      value: 'USD'
    }, {
      label: 'UYU',
      value: 'UYU'
    }, {
      label: 'UZS',
      value: 'UZS'
    }, {
      label: 'VND',
      value: 'VND'
    }, {
      label: 'VUV',
      value: 'VUV'
    }, {
      label: 'WST',
      value: 'WST'
    }, {
      label: 'XAF',
      value: 'XAF'
    }, {
      label: 'XCD',
      value: 'XCD'
    }, {
      label: 'XOF',
      value: 'XOF'
    }, {
      label: 'XPF',
      value: 'XPF'
    }, {
      label: 'YER',
      value: 'YER'
    }, {
      label: 'ZAR',
      value: 'ZAR'
    }, {
      label: 'ZMW',
      value: 'ZMW'
    }]
  }))));
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0MgN");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ })

/******/ });