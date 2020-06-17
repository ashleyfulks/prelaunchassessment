module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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
  });
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "18ia":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DiscountUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NJCc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Products() {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Products",
    description: "Tell us about your products"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Please outline your most complex products and how they are setup with variants/options, customizations, etc."
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Do you products have additional product information outside of the product description that needs to appear on product pages?"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "externalProdInfo"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "externalProdInfo"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Do you sell product bundles?"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "productBundles"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Are bundles pre-made or do staff assemble them by hand in fulfillment?"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "How should bundles display to the customer on products and in the cart, checkout and order confirmation?"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "How do bundles need to display for staff for reporting and fulfillment"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "productBundles"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Do you require region specific pricing?"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "regionSpecificPricing"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Specific pricing for each region"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Standard FX rate"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "regionSpecificPricing"
  }), __jsx("p", null, "Do you offer discounts?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "offerDiscounts"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Please outline or give examples of your discounted strategy including use of discount codes, automatic discounts, tiered discounts, VIP pricing, etc."
  }), __jsx("p", null, "Upload your Discounts!"), __jsx(_DiscountUpload__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "offerDiscounts"
  }), __jsx("p", null, "Do you take preorders?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "doYouPreorder"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Please outline your pre-order workflow and requirements"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "doYouPreorder"
  }), __jsx("p", null, "Do you sell subscriptions or offer any other type of recurring payments, or payments over time?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "subscriptions"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Please outline your workflow and requirements"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "subscriptions"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Please outline any other products complexities that we should be aware of."
  }))));
}

/***/ }),

/***/ "5ENu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dates; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kdv+");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Dates() {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Launch Date",
    description: "What date are you planning to launch?"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, "What is your planned launch date?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    month: "5",
    year: "2020",
    selected: "5/5/2020"
  }), "Are you planning a phased roll-out of stores, functionality or integrations?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontal: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "isPhased"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "isPhased"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "What is the store's web address?"
  }), "Do you have access to your DNS settings?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    horizontal: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "isPhased3"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "isPhased3"
  })))));
}

/***/ }),

/***/ "GbwQ":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "NJCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscountUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function DiscountUpload() {
  const {
    0: files,
    1: setFiles
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const handleDropZoneDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((_dropFiles, acceptedFiles, _rejectedFiles) => setFiles(files => [...files, ...acceptedFiles]), []);
  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const fileUpload = !files.length && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DropZone"].FileUpload, null);

  const uploadedFiles = files.length > 0 && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    vertical: true
  }, files.map((file, index) => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    alignment: "center",
    key: index
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Thumbnail"], {
    size: "small",
    alt: file.name,
    source: validImageTypes.indexOf(file.type) > 0 ? window.URL.createObjectURL(file) : 'https://cdn.shopify.com/s/files/1/0757/9955/files/New_Post.png?12678548500147524304'
  }), __jsx("div", null, file.name, " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Caption"], null, file.size, " bytes")))));

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DropZone"], {
    onDrop: handleDropZoneDrop
  }, uploadedFiles, fileUpload);
}

/***/ }),

/***/ "R9NV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Apps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Apps() {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Apps",
    description: "Integrations, Apps and Features"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("p", null, "What Shopify Plus exclusive apps for features are you planning to use?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Checkout.liquid"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Launchpad app"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Shopify Flow app "
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Shopify Scripts & the Script Editor app"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Transporter app"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Bulk Account Inviter"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Avalara Avatax"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Wholesale Channel"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Gift Card API resource"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Multipass login feature"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "User API resource"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Ev Certificate"
  }), __jsx("p", null, "What does your tech stack look like?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Enterprise Resource Platform (ERP)"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Warehouse Management System (WMS)"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Fulfillment"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Product Information System (PIS)"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Order Management System (OMS)"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Email Marketing"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Loyalty/Reward points"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Finance/Accounting software"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Retail POS"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Anything else"
  }), __jsx("p", null, "Are you working with an integration partner for any of your 3rd party systems? If so, please add their contact information in the Stakeholders section."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    checked: true,
    name: "3rdparty"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    checked: true,
    name: "3rdparty"
  }), __jsx("p", null, "If you plan to have expansion stores, what needs to be synced across your stores?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Inventory"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Product Information"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Collections"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Customers"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Theme updates"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Blogs"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Pages"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Shopify Flow workflows"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    label: "Staff accounts"
  }))));
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GbwQ");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("aprx");
/* harmony import */ var _sections_Stakeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ilNp");
/* harmony import */ var _sections_Dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5ENu");
/* harmony import */ var _sections_Migration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TgiG");
/* harmony import */ var _sections_Design__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("WkyY");
/* harmony import */ var _sections_Apps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("R9NV");
/* harmony import */ var _sections_Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("18ia");
/* harmony import */ var _sections_Payments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("0MgN");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function index() {
  const defaultState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    emailFieldValue: 'ashley.fulks@shopify.com',
    nameFieldValue: 'Technical Services'
  });
  const skipToContentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: toastActive,
    1: setToastActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isDirty,
    1: setIsDirty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: searchActive,
    1: setSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: searchValue,
    1: setSearchValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: userMenuActive,
    1: setUserMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: mobileNavigationActive,
    1: setMobileNavigationActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalActive,
    1: setModalActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: nameFieldValue,
    1: setNameFieldValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState.current.nameFieldValue);
  const {
    0: emailFieldValue,
    1: setEmailFieldValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState.current.emailFieldValue);
  const {
    0: storeName,
    1: setStoreName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState.current.nameFieldValue);
  const {
    0: supportSubject,
    1: setSupportSubject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: supportMessage,
    1: setSupportMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const handleSubjectChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSupportSubject(value), []);
  const handleMessageChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => setSupportMessage(value), []);
  const handleDiscard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;
    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setToastActive(toastActive => !toastActive), []);
  const toggleUserMenuActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setUserMenuActive(userMenuActive => !userMenuActive), []);
  const toggleMobileNavigationActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setMobileNavigationActive(mobileNavigationActive => !mobileNavigationActive), []);
  const toggleIsLoading = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => alert('These will auto scroll to section clicked'), []);
  const toggleModalActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setModalActive(modalActive => !modalActive), []);
  const toastMarkup = toastActive ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    onDismiss: toggleToastActive,
    content: "Changes saved"
  }) : null;
  const userMenuActions = [{
    items: [{
      content: 'Launch Manual'
    }]
  }];
  const contextualSaveBarMarkup = isDirty ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ContextualSaveBar"], {
    message: "Unsaved changes",
    saveAction: {
      onAction: handleSave
    },
    discardAction: {
      onAction: handleDiscard
    }
  }) : null;

  const userMenuMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"].UserMenu, {
    actions: userMenuActions,
    name: "Launch Engineeers",
    detail: storeName,
    initials: "L",
    open: userMenuActive,
    onToggle: toggleUserMenuActive
  });

  const searchResultsMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ActionList"], {
    items: [{
      content: 'Shopify help center'
    }, {
      content: 'Community forums'
    }]
  }));

  const searchFieldMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"].SearchField, {
    onChange: handleSearchFieldChange,
    value: searchValue,
    placeholder: "Search"
  });

  const topBarMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"], {
    showNavigationToggle: true,
    userMenu: userMenuMarkup,
    searchResultsVisible: searchActive,
    searchField: searchFieldMarkup,
    searchResults: searchResultsMarkup,
    onSearchResultsDismiss: handleSearchResultsDismiss,
    onNavigationToggle: toggleMobileNavigationActive
  });

  function openLaunchDrive() {
    window.open('https://drive.google.com/drive/u/0/folders/1eOyMi5EzsVNY7aGC1Ra0QCW1I82x7mV2', '_blank');
  }

  ;

  function openLaunchGuide() {
    window.open('https://drive.google.com/file/d/1th_rF6ZDmKTil_ayjfzF72Hf6ntm3cQZ/view?usp=sharing', '_blank');
  }

  ;

  function openChecklist() {
    window.open('https://docs.google.com/spreadsheets/d/1xUKlKLwh2kMFWH0fLAo6DX-KlPcwdmjde2tEgRN3MgM/edit?usp=sharing', '_blank');
  }

  ;

  function openWelcomeKit() {
    window.open('https://drive.google.com/file/d/1ChGVOQs7NBhFOlAGpXb1jJLFmCjShRoo/view?usp=sharing', '_blank');
  }

  function openFastMigration() {
    window.open('https://drive.google.com/file/d/1zGU74TCSYXjtlGtKp2Bg-E-PvXwmX9o5/view?usp=sharing', '_blank');
  }

  const navigationMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Navigation"], {
    location: "/"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Navigation"].Section, {
    title: "Launch Resources",
    items: [{
      label: 'Welcome to Launch!',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["HintMajorMonotone"],
      onClick: openWelcomeKit
    }, {
      label: 'Launch Guide',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["SocialAdMajorMonotone"],
      onClick: openLaunchGuide
    }, {
      label: 'Fast Migration Guide',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ImportStoreMajorMonotone"],
      onClick: openFastMigration
    }, {
      label: 'Launch Checklist',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ChecklistMajorMonotone"],
      onClick: openChecklist
    }]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Navigation"].Section, {
    separator: true,
    title: "Click on a section",
    items: [{
      label: 'Business Summary',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["DomainsMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Stakeholders',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["SmileyHappyMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Launch date',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["IllustrationMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Migration',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ImportStoreMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Design',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ImageMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Integrations, apps and features',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["AppsMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Product Details',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ProductsMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Currencies & Payment Gateways',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["CurrencyConvertMinor"],
      onClick: toggleIsLoading
    }, {
      label: 'Taxes & Shipping',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["TaxMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Languages',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["LanguageMinor"],
      onClick: toggleIsLoading
    }, {
      label: 'Sales Channels',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ChannelsMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Future Business Objectives',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["GlobeMajorMonotone"],
      onClick: toggleIsLoading
    }, {
      label: 'Additional Requirements',
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["AffiliateMajorMonotone"],
      onClick: toggleIsLoading
    }],
    action: {
      icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ConversationMinor"],
      accessibilityLabel: 'Report an issue with the form',
      onClick: toggleModalActive
    }
  }));

  const loadingMarkup = isLoading ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Loading"], null) : null;

  const skipToContentTarget = __jsx("a", {
    id: "SkipToContentTarget",
    ref: skipToContentRef,
    tabIndex: -1
  });

  const actualPageMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    title: "Launch Accelerator"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_sections_Summary__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("br", null), __jsx(_sections_Stakeholders__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("br", null), __jsx(_sections_Dates__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("br", null), __jsx(_sections_Migration__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("br", null), __jsx(_sections_Design__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("br", null), __jsx(_sections_Apps__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("br", null), __jsx(_sections_Products__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx("br", null), __jsx(_sections_Payments__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("br", null))));

  const loadingPageMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonPage"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonDisplayText"], {
    size: "small"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonBodyText"], {
    lines: 9
  }))))));

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

  const modalMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: modalActive,
    onClose: toggleModalActive,
    title: "Feedback",
    primaryAction: {
      content: 'Send',
      onAction: toggleModalActive
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Subject",
    value: supportSubject,
    onChange: handleSubjectChange
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Message",
    value: supportMessage,
    onChange: handleMessageChange,
    multiline: true
  }))));

  const theme = {
    colors: {
      topBar: {
        background: '#457b9d'
      }
    },
    logo: {
      width: 50,
      topBarSource: 'https://screenshot.click/20-06-tejkp-vp7q2.png',
      contextualSaveBarSource: 'https://screenshot.click/20-06-tejkp-vp7q2.png',
      url: 'http://www.shopify.com',
      accessibilityLabel: 'Launch Accelerator logo'
    }
  };
  return __jsx("div", {
    style: {
      height: '500px'
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["AppProvider"], {
    theme: theme,
    i18n: {
      Polaris: {
        Avatar: {
          label: 'Avatar',
          labelWithInitials: 'Avatar with initials {initials}'
        },
        ContextualSaveBar: {
          save: 'Save',
          discard: 'Discard'
        },
        TextField: {
          characterCount: '{count} characters'
        },
        TopBar: {
          toggleMenuLabel: 'Toggle menu',
          SearchField: {
            clearButtonLabel: 'Clear',
            search: 'Search'
          }
        },
        Modal: {
          iFrameTitle: 'body markup'
        },
        Frame: {
          skipToContent: 'Skip to content',
          Navigation: {
            closeMobileNavigationLabel: 'Close navigation'
          }
        }
      }
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    topBar: topBarMarkup,
    navigation: navigationMarkup,
    showMobileNavigation: mobileNavigationActive,
    onNavigationDismiss: toggleMobileNavigationActive,
    skipToContentTarget: skipToContentRef.current
  }, contextualSaveBarMarkup, loadingMarkup, pageMarkup, toastMarkup, modalMarkup)));
}

/***/ }),

/***/ "TgiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Migration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kdv+");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Migration() {
  // Decare initial states and change variables
  const {
    0: migrationq1,
    1: setMigrationq1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // Declare change variables

  const handleMigrationq1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setMigrationq1(newValue), []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Migration",
    description: "Are you moving from another platform?"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("div", null, "Is data migration a requirement?"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    name: "migrationReq",
    onChange: handleMigrationq1
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    name: "migrationReq",
    onChange: handleMigrationq1
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Which platform are you migrating from?",
    options: [{
      label: 'Magento',
      value: 'Magento'
    }, {
      label: 'BigCommerce',
      value: 'BigCommerce'
    }, {
      label: 'WooCommerce',
      value: 'WooCommerce'
    }, {
      label: 'Demandware / Salesforce Commerce Cloud',
      value: 'Demandware / Salesforce Commerce Cloud'
    }, {
      label: 'Volusion',
      value: 'Volusion'
    }, {
      label: 'ASP.net',
      value: 'ASP.net'
    }, {
      label: 'Squarespace',
      value: 'Squarespace'
    }, {
      label: '3D Cart',
      value: '3D Cart'
    }, {
      label: 'Custom',
      value: 'Custom'
    }, {
      label: 'other',
      value: 'other'
    }]
  }), "What data is being migrated?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, {
    condensed: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Products"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Reviews"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Customers"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Orders"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, {
    condensed: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Gift Vouchers"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Discounts"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Blogs"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Pages"
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Who is handling your migration?",
    options: [{
      label: 'Agency Partner',
      value: 'Agency Partner'
    }, {
      label: 'In-house',
      value: 'In-house'
    }, {
      label: 'To be determined',
      value: 'To be determined'
    }]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "How will the migration be handled?",
    options: [{
      label: 'Agency Partner',
      value: 'Agency Partner'
    }, {
      label: 'Import store app',
      value: 'Import store app'
    }, {
      label: 'Transporter app',
      value: "Transporter app"
    }, {
      label: 'Third party app service',
      value: 'Third party app service'
    }, {
      label: 'Direct Shopify app integration',
      value: 'Direct Shopify app integration'
    }, {
      label: 'other',
      value: 'other'
    }]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Who will be handling 301 URL redirects?",
    options: [{
      label: 'Agency Partner',
      value: 'Agency Partner'
    }, {
      label: 'In-house',
      value: 'In-house'
    }, {
      label: 'To be determined',
      value: 'To be determined'
    }]
  }))));
}

/***/ }),

/***/ "WkyY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Design; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Design() {
  // State and handlers
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Design",
    description: "Who is handling the build?"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "How is your storefront theme design being handled?",
    options: [{
      label: 'Purchased theme',
      value: 'Purchased theme'
    }, {
      label: 'Custom theme',
      value: 'Custom theme'
    }, {
      label: 'Headless',
      value: 'Headless'
    }, {
      label: 'Not applicable',
      value: 'Not applicable'
    }]
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    label: "Who is handling storefront design?",
    options: [{
      label: 'Agency partner',
      value: 'Agency partner'
    }, {
      label: 'In-house',
      value: 'In-house'
    }, {
      label: 'Not applicable',
      value: 'Not applicable'
    }]
  }))));
}
;

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

/***/ "ilNp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stakeholders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kdv+");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Stakeholders() {
  const {
    0: Stakeholders,
    1: newStakeholder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: Email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: Name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: Company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: JobTitle,
    1: setJobTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: ProjectRole,
    1: setProjectRole
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: Region,
    1: setRegion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: TimeZone,
    1: setTimeZone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // Define handlers

  const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(_event => {});
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Stakeholders",
    description: "Who are the owners, employees working on the project?"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Email"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Name"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Company"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Job title"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Project role"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Region"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Time zone"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Additional"
  }), "Should this person be CCed on all communications?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    id: "disabled2",
    name: "comms321"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    id: "optional2",
    name: "comms321"
  })), "Is this a Partner/Contractor/Consultant?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    id: "disabled3",
    name: "isPartner"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    id: "optional3",
    name: "isPartner"
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onSubmit: handleSubmit
  }, "Save contact")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Are you open to hiring Shopify Experts or Plus Partners?"
  }), "Are you planning to continue with your agency partner after launch?", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "Yes",
    id: "disabled4",
    name: "areContinue"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RadioButton"], {
    label: "No",
    id: "optional4",
    name: "areContinue"
  })))));
}

/***/ }),

/***/ "kdv+":
/***/ (function(module, exports) {



/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ })

/******/ });