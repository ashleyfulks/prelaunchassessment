webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TabsExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabsExample */ \"./pages/TabsExample.js\");\n/* harmony import */ var _sections_Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/Summary */ \"./pages/sections/Summary.js\");\n/* harmony import */ var _sections_Stakeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/Stakeholders */ \"./pages/sections/Stakeholders.js\");\n/* harmony import */ var _sections_Dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/Dates */ \"./pages/sections/Dates.js\");\n/* harmony import */ var _launchGuidePDF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./launchGuidePDF */ \"./pages/launchGuidePDF.js\");\n/* harmony import */ var _sections_Migration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/Migration */ \"./pages/sections/Migration.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction index() {\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"AppProvider\"], {\n    i18n: {},\n    features: {\n      newDesignLanguage: true\n    },\n    theme: {\n      colors: {\n        surface: '#111213',\n        onSurface: '#111213',\n        interactive: '#2e72d2',\n        secondary: '#111213',\n        primary: '#3b5998',\n        critical: '#d82c0d',\n        warning: '#ffc453',\n        highlight: '#5bcdda',\n        success: '#008060',\n        decorative: '#ffc96b'\n      }\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Frame\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Page\"], {\n    title: \"Launch Accelerator\",\n    thumbnail: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Thumbnail\"], {\n      source: \"https://screenshot.click/20-06-xy1ym-xqg8n.png\"\n    })\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"].Section, null, __jsx(_TabsExample__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"FormLayout\"], null, __jsx(_sections_Summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), __jsx(_sections_Stakeholders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), __jsx(_sections_Dates__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))))));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4IiwibmV3RGVzaWduTGFuZ3VhZ2UiLCJjb2xvcnMiLCJzdXJmYWNlIiwib25TdXJmYWNlIiwiaW50ZXJhY3RpdmUiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiY3JpdGljYWwiLCJ3YXJuaW5nIiwiaGlnaGxpZ2h0Iiwic3VjY2VzcyIsImRlY29yYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDL0IsU0FDQyxNQUFDLDREQUFEO0FBQWEsUUFBSSxFQUFFLEVBQW5CO0FBQ0MsWUFBUSxFQUFFO0FBQUNDLHVCQUFpQixFQUFFO0FBQXBCLEtBRFg7QUFFQyxTQUFLLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBQ1BDLGVBQU8sRUFBRSxTQURGO0FBRVBDLGlCQUFTLEVBQUUsU0FGSjtBQUdQQyxtQkFBVyxFQUFFLFNBSE47QUFJUEMsaUJBQVMsRUFBRSxTQUpKO0FBS1BDLGVBQU8sRUFBRSxTQUxGO0FBTVBDLGdCQUFRLEVBQUUsU0FOSDtBQU9QQyxlQUFPLEVBQUUsU0FQRjtBQVFQQyxpQkFBUyxFQUFFLFNBUko7QUFTUEMsZUFBTyxFQUFFLFNBVEY7QUFVUEMsa0JBQVUsRUFBRTtBQVZMO0FBREQ7QUFGUixLQWdCQyxNQUFDLHNEQUFELFFBQ0MsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxvQkFBWjtBQUFpQyxhQUFTLEVBQUUsTUFBQywwREFBRDtBQUFXLFlBQU0sRUFBQztBQUFsQjtBQUE1QyxLQUNDLE1BQUMsdURBQUQsUUFDQyxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNDLE1BQUMsb0RBQUQsT0FERCxFQUVDLE1BQUMsMkRBQUQsUUFDQSxNQUFDLHlEQUFELE9BREEsRUFFQSxNQUFDLDhEQUFELE9BRkEsRUFHQSxNQUFDLHVEQUFELE9BSEEsQ0FGRCxDQURELENBREQsQ0FERCxDQWhCRCxDQUREO0FBa0NBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBQcm92aWRlcixcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbiAgICBSYWRpb0J1dHRvbixcblx0Q2FyZCxcblx0RnJhbWUsXG4gICAgRm9ybSxcbiAgICBGb3JtTGF5b3V0LFxuICAgIExheW91dCxcbiAgICBQYWdlLFxuICAgIFNldHRpbmdUb2dnbGUsXG4gICAgU3RhY2ssXG4gICAgVGV4dEZpZWxkLFxuICAgIFRleHRTdHlsZSxcbiAgICBIZWFkaW5nLFxuICAgIFN1YmhlYWRpbmcsXG5cdFJhbmdlU2xpZGVyLFxuXHRDb2xsYXBzaWJsZSxcblx0RGF0ZVBpY2tlcixcblx0U2VsZWN0LFxuXHRUaHVtYm5haWxcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQHNob3BpZnkvcG9sYXJpcy9zdHlsZXMuY3NzJztcbmltcG9ydCBUYWJzRXhhbXBsZSBmcm9tICcuL1RhYnNFeGFtcGxlJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc2VjdGlvbnMvU3VtbWFyeSc7XG5pbXBvcnQgU3Rha2Vob2xkZXJzIGZyb20gJy4vc2VjdGlvbnMvU3Rha2Vob2xkZXJzJztcbmltcG9ydCBEYXRlcyBmcm9tICcuL3NlY3Rpb25zL0RhdGVzJztcbmltcG9ydCBsYXVuY2hHdWlkZVBERiBmcm9tICcuL2xhdW5jaEd1aWRlUERGJztcbmltcG9ydCBNaWdyYXRpb24gZnJvbSAnLi9zZWN0aW9ucy9NaWdyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcblx0cmV0dXJuIChcblx0XHQ8QXBwUHJvdmlkZXIgaTE4bj17e319XG5cdFx0XHRmZWF0dXJlcz17e25ld0Rlc2lnbkxhbmd1YWdlOiB0cnVlfX1cblx0XHRcdHRoZW1lPXt7XG5cdFx0XHRjb2xvcnM6IHtcblx0XHRcdFx0c3VyZmFjZTogJyMxMTEyMTMnLFxuXHRcdFx0XHRvblN1cmZhY2U6ICcjMTExMjEzJyxcblx0XHRcdFx0aW50ZXJhY3RpdmU6ICcjMmU3MmQyJyxcblx0XHRcdFx0c2Vjb25kYXJ5OiAnIzExMTIxMycsXG5cdFx0XHRcdHByaW1hcnk6ICcjM2I1OTk4Jyxcblx0XHRcdFx0Y3JpdGljYWw6ICcjZDgyYzBkJyxcblx0XHRcdFx0d2FybmluZzogJyNmZmM0NTMnLFxuXHRcdFx0XHRoaWdobGlnaHQ6ICcjNWJjZGRhJyxcblx0XHRcdFx0c3VjY2VzczogJyMwMDgwNjAnLFxuXHRcdFx0XHRkZWNvcmF0aXZlOiAnI2ZmYzk2YicsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fT5cblx0XHRcdDxGcmFtZT5cblx0XHRcdFx0PFBhZ2UgdGl0bGU9XCJMYXVuY2ggQWNjZWxlcmF0b3JcIiB0aHVtYm5haWw9ezxUaHVtYm5haWwgc291cmNlPVwiaHR0cHM6Ly9zY3JlZW5zaG90LmNsaWNrLzIwLTA2LXh5MXltLXhxZzhuLnBuZ1wiLz59PlxuXHRcdFx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdFx0XHQ8TGF5b3V0LlNlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdDxUYWJzRXhhbXBsZS8+XG5cdFx0XHRcdFx0XHRcdDxGb3JtTGF5b3V0PlxuXHRcdFx0XHRcdFx0XHQ8U3VtbWFyeS8+XG5cdFx0XHRcdFx0XHRcdDxTdGFrZWhvbGRlcnMvPlxuXHRcdFx0XHRcdFx0XHQ8RGF0ZXMvPlxuXG5cdFx0XHRcdFx0XHRcdDwvRm9ybUxheW91dD5cblx0XHRcdFx0XHRcdDwvTGF5b3V0LlNlY3Rpb24+XG5cdFx0XHRcdFx0PC9MYXlvdXQ+XG5cdFx0XHRcdDwvUGFnZT5cblx0XHRcdDwvRnJhbWU+XG5cdFx0PC9BcHBQcm92aWRlcj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})