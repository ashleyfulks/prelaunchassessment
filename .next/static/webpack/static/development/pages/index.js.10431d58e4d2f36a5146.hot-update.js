webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TabsExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabsExample */ \"./pages/TabsExample.js\");\n/* harmony import */ var _sections_Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/Summary */ \"./pages/sections/Summary.js\");\n/* harmony import */ var _sections_Stakeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/Stakeholders */ \"./pages/sections/Stakeholders.js\");\n/* harmony import */ var _sections_Dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/Dates */ \"./pages/sections/Dates.js\");\n/* harmony import */ var _sections_Migration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/Migration */ \"./pages/sections/Migration.js\");\n/* harmony import */ var _sections_Design__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/Design */ \"./pages/sections/Design.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction index() {\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"AppProvider\"], {\n    i18n: {},\n    features: {\n      newDesignLanguage: true\n    },\n    theme: {\n      colors: {\n        surface: '#111213',\n        onSurface: '#111213',\n        interactive: '#2e72d2',\n        secondary: '#111213',\n        primary: '#3b5998',\n        critical: '#d82c0d',\n        warning: '#ffc453',\n        highlight: '#5bcdda',\n        success: '#008060',\n        decorative: '#ffc96b'\n      }\n    }\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Frame\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Page\"], {\n    title: \"Launch Accelerator\",\n    thumbnail: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Thumbnail\"], {\n      source: \"https://screenshot.click/20-06-xy1ym-xqg8n.png\"\n    })\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"Layout\"].Section, null, __jsx(_TabsExample__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_0__[\"FormLayout\"], null, __jsx(_sections_Summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), __jsx(_sections_Stakeholders__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), __jsx(_sections_Dates__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), __jsx(_sections_Migration__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), __jsx(_sections_Design__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)))))));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4IiwibmV3RGVzaWduTGFuZ3VhZ2UiLCJjb2xvcnMiLCJzdXJmYWNlIiwib25TdXJmYWNlIiwiaW50ZXJhY3RpdmUiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiY3JpdGljYWwiLCJ3YXJuaW5nIiwiaGlnaGxpZ2h0Iiwic3VjY2VzcyIsImRlY29yYXRpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDL0IsU0FDQyxNQUFDLDREQUFEO0FBQWEsUUFBSSxFQUFFLEVBQW5CO0FBQ0MsWUFBUSxFQUFFO0FBQUNDLHVCQUFpQixFQUFFO0FBQXBCLEtBRFg7QUFFQyxTQUFLLEVBQUU7QUFDUEMsWUFBTSxFQUFFO0FBQ1BDLGVBQU8sRUFBRSxTQURGO0FBRVBDLGlCQUFTLEVBQUUsU0FGSjtBQUdQQyxtQkFBVyxFQUFFLFNBSE47QUFJUEMsaUJBQVMsRUFBRSxTQUpKO0FBS1BDLGVBQU8sRUFBRSxTQUxGO0FBTVBDLGdCQUFRLEVBQUUsU0FOSDtBQU9QQyxlQUFPLEVBQUUsU0FQRjtBQVFQQyxpQkFBUyxFQUFFLFNBUko7QUFTUEMsZUFBTyxFQUFFLFNBVEY7QUFVUEMsa0JBQVUsRUFBRTtBQVZMO0FBREQ7QUFGUixLQWdCQyxNQUFDLHNEQUFELFFBQ0MsTUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxvQkFBWjtBQUFpQyxhQUFTLEVBQUUsTUFBQywwREFBRDtBQUFXLFlBQU0sRUFBQztBQUFsQjtBQUE1QyxLQUNDLE1BQUMsdURBQUQsUUFDQyxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNDLE1BQUMsb0RBQUQsT0FERCxFQUVDLE1BQUMsMkRBQUQsUUFDQSxNQUFDLHlEQUFELE9BREEsRUFFQSxNQUFDLDhEQUFELE9BRkEsRUFHQSxNQUFDLHVEQUFELE9BSEEsRUFJQSxNQUFDLDJEQUFELE9BSkEsRUFLQSxNQUFDLHdEQUFELE9BTEEsQ0FGRCxDQURELENBREQsQ0FERCxDQWhCRCxDQUREO0FBbUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBcHBQcm92aWRlcixcblx0QnV0dG9uLFxuXHRCdXR0b25Hcm91cCxcbiAgICBSYWRpb0J1dHRvbixcblx0Q2FyZCxcblx0RnJhbWUsXG4gICAgRm9ybSxcbiAgICBGb3JtTGF5b3V0LFxuICAgIExheW91dCxcbiAgICBQYWdlLFxuICAgIFNldHRpbmdUb2dnbGUsXG4gICAgU3RhY2ssXG4gICAgVGV4dEZpZWxkLFxuICAgIFRleHRTdHlsZSxcbiAgICBIZWFkaW5nLFxuICAgIFN1YmhlYWRpbmcsXG5cdFJhbmdlU2xpZGVyLFxuXHRDb2xsYXBzaWJsZSxcblx0RGF0ZVBpY2tlcixcblx0U2VsZWN0LFxuXHRUaHVtYm5haWxcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQHNob3BpZnkvcG9sYXJpcy9zdHlsZXMuY3NzJztcbmltcG9ydCBUYWJzRXhhbXBsZSBmcm9tICcuL1RhYnNFeGFtcGxlJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc2VjdGlvbnMvU3VtbWFyeSc7XG5pbXBvcnQgU3Rha2Vob2xkZXJzIGZyb20gJy4vc2VjdGlvbnMvU3Rha2Vob2xkZXJzJztcbmltcG9ydCBEYXRlcyBmcm9tICcuL3NlY3Rpb25zL0RhdGVzJztcbmltcG9ydCBNaWdyYXRpb24gZnJvbSAnLi9zZWN0aW9ucy9NaWdyYXRpb24nO1xuaW1wb3J0IERlc2lnbiBmcm9tICcuL3NlY3Rpb25zL0Rlc2lnbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDxBcHBQcm92aWRlciBpMThuPXt7fX1cblx0XHRcdGZlYXR1cmVzPXt7bmV3RGVzaWduTGFuZ3VhZ2U6IHRydWV9fVxuXHRcdFx0dGhlbWU9e3tcblx0XHRcdGNvbG9yczoge1xuXHRcdFx0XHRzdXJmYWNlOiAnIzExMTIxMycsXG5cdFx0XHRcdG9uU3VyZmFjZTogJyMxMTEyMTMnLFxuXHRcdFx0XHRpbnRlcmFjdGl2ZTogJyMyZTcyZDInLFxuXHRcdFx0XHRzZWNvbmRhcnk6ICcjMTExMjEzJyxcblx0XHRcdFx0cHJpbWFyeTogJyMzYjU5OTgnLFxuXHRcdFx0XHRjcml0aWNhbDogJyNkODJjMGQnLFxuXHRcdFx0XHR3YXJuaW5nOiAnI2ZmYzQ1MycsXG5cdFx0XHRcdGhpZ2hsaWdodDogJyM1YmNkZGEnLFxuXHRcdFx0XHRzdWNjZXNzOiAnIzAwODA2MCcsXG5cdFx0XHRcdGRlY29yYXRpdmU6ICcjZmZjOTZiJyxcblx0XHRcdFx0fSxcblx0XHRcdH19PlxuXHRcdFx0PEZyYW1lPlxuXHRcdFx0XHQ8UGFnZSB0aXRsZT1cIkxhdW5jaCBBY2NlbGVyYXRvclwiIHRodW1ibmFpbD17PFRodW1ibmFpbCBzb3VyY2U9XCJodHRwczovL3NjcmVlbnNob3QuY2xpY2svMjAtMDYteHkxeW0teHFnOG4ucG5nXCIvPn0+XG5cdFx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHRcdDxMYXlvdXQuU2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0PFRhYnNFeGFtcGxlLz5cblx0XHRcdFx0XHRcdFx0PEZvcm1MYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdDxTdW1tYXJ5Lz5cblx0XHRcdFx0XHRcdFx0PFN0YWtlaG9sZGVycy8+XG5cdFx0XHRcdFx0XHRcdDxEYXRlcy8+XG5cdFx0XHRcdFx0XHRcdDxNaWdyYXRpb24vPlxuXHRcdFx0XHRcdFx0XHQ8RGVzaWduLz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtTGF5b3V0PlxuXHRcdFx0XHRcdFx0PC9MYXlvdXQuU2VjdGlvbj5cblx0XHRcdFx0XHQ8L0xheW91dD5cblx0XHRcdFx0PC9QYWdlPlxuXHRcdFx0PC9GcmFtZT5cblx0XHQ8L0FwcFByb3ZpZGVyPlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/sections/Design.js":
/*!**********************************!*\
  !*** ./pages/sections/Design.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  // State and handlers\n  render(__jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Design\",\n    description: \"Who is handling the build?\"\n  }, __jsx(Card, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"How is your storefront theme design being handled?\",\n    options: [{\n      label: 'Purchased theme',\n      value: 'Purchased theme'\n    }, {\n      label: 'Custom theme',\n      value: 'Custom theme'\n    }, {\n      label: 'Headless',\n      value: 'Headless'\n    }, {\n      label: 'Not applicable',\n      value: 'Not applicable'\n    }]\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"Who is handling storefront design?\",\n    options: [{\n      label: 'Agency partner',\n      value: 'Agency partner'\n    }, {\n      label: 'In-house',\n      value: 'In-house'\n    }, {\n      label: 'Not applicable',\n      value: 'Not applicable'\n    }]\n  })))));\n});\n;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWN0aW9ucy9EZXNpZ24uanM/NWE0YyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFLZSwyRUFBVztBQUN0QjtBQUNBQSxRQUFNLENBQ0YsTUFBQyx1REFBRCxRQUNJLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBd0MsZUFBVyxFQUFDO0FBQXBELEtBQ0ksTUFBQyxJQUFELFFBQ0ksTUFBQyx1REFBRDtBQUFRLFNBQUssRUFBQyxvREFBZDtBQUNJLFdBQU8sRUFBRSxDQUNMO0FBQUNDLFdBQUssRUFBRSxpQkFBUjtBQUEyQkMsV0FBSyxFQUFFO0FBQWxDLEtBREssRUFFTDtBQUFDRCxXQUFLLEVBQUUsY0FBUjtBQUF3QkMsV0FBSyxFQUFFO0FBQS9CLEtBRkssRUFHTDtBQUFDRCxXQUFLLEVBQUUsVUFBUjtBQUFvQkMsV0FBSyxFQUFFO0FBQTNCLEtBSEssRUFJTDtBQUFDRCxXQUFLLEVBQUUsZ0JBQVI7QUFBMEJDLFdBQUssRUFBRTtBQUFqQyxLQUpLO0FBRGIsSUFESixFQVNJLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsb0NBQWQ7QUFDSSxXQUFPLEVBQUUsQ0FDTDtBQUFDRCxXQUFLLEVBQUUsZ0JBQVI7QUFBMEJDLFdBQUssRUFBRTtBQUFqQyxLQURLLEVBRUw7QUFBQ0QsV0FBSyxFQUFFLFVBQVI7QUFBb0JDLFdBQUssRUFBRTtBQUEzQixLQUZLLEVBR0w7QUFBQ0QsV0FBSyxFQUFFLGdCQUFSO0FBQTBCQyxXQUFLLEVBQUU7QUFBakMsS0FISztBQURiLElBVEosQ0FESixDQURKLENBREUsQ0FBTjtBQXVCSDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvc2VjdGlvbnMvRGVzaWduLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgTGF5b3V0LFxuICAgIFNlbGVjdFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICAvLyBTdGF0ZSBhbmQgaGFuZGxlcnNcbiAgICByZW5kZXIoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb24gdGl0bGU9J0Rlc2lnbicgZGVzY3JpcHRpb249J1dobyBpcyBoYW5kbGluZyB0aGUgYnVpbGQ/Jz5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBsYWJlbD1cIkhvdyBpcyB5b3VyIHN0b3JlZnJvbnQgdGhlbWUgZGVzaWduIGJlaW5nIGhhbmRsZWQ/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdQdXJjaGFzZWQgdGhlbWUnLCB2YWx1ZTogJ1B1cmNoYXNlZCB0aGVtZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0N1c3RvbSB0aGVtZScsIHZhbHVlOiAnQ3VzdG9tIHRoZW1lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSGVhZGxlc3MnLCB2YWx1ZTogJ0hlYWRsZXNzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnTm90IGFwcGxpY2FibGUnLCB2YWx1ZTogJ05vdCBhcHBsaWNhYmxlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbGFiZWw9XCJXaG8gaXMgaGFuZGxpbmcgc3RvcmVmcm9udCBkZXNpZ24/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdBZ2VuY3kgcGFydG5lcicsIHZhbHVlOiAnQWdlbmN5IHBhcnRuZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdJbi1ob3VzZScsIHZhbHVlOiAnSW4taG91c2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdOb3QgYXBwbGljYWJsZScsIHZhbHVlOiAnTm90IGFwcGxpY2FibGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sections/Design.js\n");

/***/ })

})