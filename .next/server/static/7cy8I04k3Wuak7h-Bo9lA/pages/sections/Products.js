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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("18ia");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ })

/******/ });