webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/sections/Migration.js":
/*!*************************************!*\
  !*** ./pages/sections/Migration.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Migration; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Migration() {\n  _s();\n\n  // Decare initial states and change variables\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      migrationq1 = _useState[0],\n      setMigrationq1 = _useState[1]; // Declare change variables\n\n\n  var handleMigrationq1 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (newValue) {\n    return setMigrationq1(newValue);\n  }, []);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Migration\",\n    description: \"Are you moving from another platform?\"\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], null, __jsx(\"div\", null, \"Is data migration a requirement?\"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"Yes\",\n    name: \"migrationReq\",\n    onChange: handleMigrationq1\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"No\",\n    name: \"migrationReq\",\n    onChange: handleMigrationq1\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"Which platform are you migrating from?\",\n    options: [{\n      label: 'Magento',\n      value: 'Magento'\n    }, {\n      label: 'BigCommerce',\n      value: 'BigCommerce'\n    }, {\n      label: 'WooCommerce',\n      value: 'WooCommerce'\n    }, {\n      label: 'Demandware / Salesforce Commerce Cloud',\n      value: 'Demandware / Salesforce Commerce Cloud'\n    }, {\n      label: 'Volusion',\n      value: 'Volusion'\n    }, {\n      label: 'ASP.net',\n      value: 'ASP.net'\n    }, {\n      label: 'Squarespace',\n      value: 'Squarespace'\n    }, {\n      label: '3D Cart',\n      value: '3D Cart'\n    }, {\n      label: 'Custom',\n      value: 'Custom'\n    }, {\n      label: 'other',\n      value: 'other'\n    }]\n  }), \"What data is being migrated?\", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, {\n    condensed: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Products\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Reviews\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Customers\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Orders\"\n  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"].Group, {\n    condensed: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Gift Vouchers\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Discounts\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Blogs\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Pages\"\n  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"Who is handling your migration?\",\n    options: [{\n      label: 'Agency Partner',\n      value: 'Agency Partner'\n    }, {\n      label: 'In-house',\n      value: 'In-house'\n    }, {\n      label: 'To be determined',\n      value: 'To be determined'\n    }]\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"How will the migration be handled?\",\n    options: [{\n      label: 'Agency Partner',\n      value: 'Agency Partner'\n    }, {\n      label: 'Import store app',\n      value: 'Import store app'\n    }, {\n      label: 'Transporter app',\n      value: \"Transporter app\"\n    }, {\n      label: 'Third party app service',\n      value: 'Third party app service'\n    }, {\n      label: 'Direct Shopify app integration',\n      value: 'Direct Shopify app integration'\n    }, {\n      label: 'other',\n      value: 'other'\n    }]\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    label: \"Who will be handling 301 URL redirects?\",\n    options: [{\n      label: 'Agency Partner',\n      value: 'Agency Partner'\n    }, {\n      label: 'In-house',\n      value: 'In-house'\n    }, {\n      label: 'To be determined',\n      value: 'To be determined'\n    }]\n  }))));\n}\n\n_s(Migration, \"Q4PHDG2NdrzbgTwF5FrjIAV4vqY=\");\n\n_c = Migration;\n\nvar _c;\n\n$RefreshReg$(_c, \"Migration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWN0aW9ucy9NaWdyYXRpb24uanM/NGUwOCJdLCJuYW1lcyI6WyJNaWdyYXRpb24iLCJ1c2VTdGF0ZSIsIm1pZ3JhdGlvbnExIiwic2V0TWlncmF0aW9ucTEiLCJoYW5kbGVNaWdyYXRpb25xMSIsInVzZUNhbGxiYWNrIiwibmV3VmFsdWUiLCJsYWJlbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNoQztBQURnQyxrQkFFTUMsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUV6QkMsV0FGeUI7QUFBQSxNQUVaQyxjQUZZLGlCQUloQzs7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsUUFBRDtBQUFBLFdBQWNILGNBQWMsQ0FBQ0csUUFBRCxDQUE1QjtBQUFBLEdBQUQsRUFBeUMsRUFBekMsQ0FBckM7QUFDQSxTQUNJLE1BQUMsdURBQUQsUUFDSSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFBeUIsU0FBSyxFQUFDLFdBQS9CO0FBQTJDLGVBQVcsRUFBQztBQUF2RCxLQUNJLE1BQUMscURBQUQsUUFDSSxzREFESixFQUVJLE1BQUMsNERBQUQ7QUFBYSxTQUFLLEVBQUMsS0FBbkI7QUFBeUIsUUFBSSxFQUFDLGNBQTlCO0FBQTZDLFlBQVEsRUFBRUY7QUFBdkQsSUFGSixFQUdJLE1BQUMsNERBQUQ7QUFBYSxTQUFLLEVBQUMsSUFBbkI7QUFBd0IsUUFBSSxFQUFDLGNBQTdCO0FBQTRDLFlBQVEsRUFBRUE7QUFBdEQsSUFISixFQUlJLE1BQUMsdURBQUQ7QUFBUSxTQUFLLEVBQUMsd0NBQWQ7QUFDUSxXQUFPLEVBQUUsQ0FDTDtBQUFDRyxXQUFLLEVBQUUsU0FBUjtBQUFtQkMsV0FBSyxFQUFFO0FBQTFCLEtBREssRUFFTDtBQUFDRCxXQUFLLEVBQUUsYUFBUjtBQUF1QkMsV0FBSyxFQUFFO0FBQTlC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bGUiOiIuL3BhZ2VzL3NlY3Rpb25zL01pZ3JhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIExheW91dCxcbiAgICBDYXJkLFxuICAgIFJhZGlvQnV0dG9uLFxuICAgIFNlbGVjdCxcbiAgICBGb3JtTGF5b3V0LFxuICAgIFRleHRGaWVsZCxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pZ3JhdGlvbigpIHtcbiAgICAvLyBEZWNhcmUgaW5pdGlhbCBzdGF0ZXMgYW5kIGNoYW5nZSB2YXJpYWJsZXNcbiAgICBjb25zdCBbbWlncmF0aW9ucTEsIHNldE1pZ3JhdGlvbnExXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vIERlY2xhcmUgY2hhbmdlIHZhcmlhYmxlc1xuICAgIGNvbnN0IGhhbmRsZU1pZ3JhdGlvbnExID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiBzZXRNaWdyYXRpb25xMShuZXdWYWx1ZSksIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIHRpdGxlPVwiTWlncmF0aW9uXCIgZGVzY3JpcHRpb249XCJBcmUgeW91IG1vdmluZyBmcm9tIGFub3RoZXIgcGxhdGZvcm0/XCI+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+SXMgZGF0YSBtaWdyYXRpb24gYSByZXF1aXJlbWVudD88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uIGxhYmVsPVwiWWVzXCIgbmFtZT1cIm1pZ3JhdGlvblJlcVwiIG9uQ2hhbmdlPXtoYW5kbGVNaWdyYXRpb25xMX0vPlxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b24gbGFiZWw9XCJOb1wiIG5hbWU9XCJtaWdyYXRpb25SZXFcIiBvbkNoYW5nZT17aGFuZGxlTWlncmF0aW9ucTF9Lz5cdFx0XHRcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBsYWJlbD1cIldoaWNoIHBsYXRmb3JtIGFyZSB5b3UgbWlncmF0aW5nIGZyb20/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ01hZ2VudG8nLCB2YWx1ZTogJ01hZ2VudG8nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmlnQ29tbWVyY2UnLCB2YWx1ZTogJ0JpZ0NvbW1lcmNlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dvb0NvbW1lcmNlJywgdmFsdWU6ICdXb29Db21tZXJjZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdEZW1hbmR3YXJlIC8gU2FsZXNmb3JjZSBDb21tZXJjZSBDbG91ZCcsIHZhbHVlOiAnRGVtYW5kd2FyZSAvIFNhbGVzZm9yY2UgQ29tbWVyY2UgQ2xvdWQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnVm9sdXNpb24nLCB2YWx1ZTogJ1ZvbHVzaW9uJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0FTUC5uZXQnLCB2YWx1ZTogJ0FTUC5uZXQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU3F1YXJlc3BhY2UnLCB2YWx1ZTogJ1NxdWFyZXNwYWNlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJzNEIENhcnQnLCB2YWx1ZTogJzNEIENhcnQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQ3VzdG9tJywgdmFsdWU6ICdDdXN0b20nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnb3RoZXInLCB2YWx1ZTogJ290aGVyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19Lz5cbiAgICAgICAgICAgICAgICAgICAgV2hhdCBkYXRhIGlzIGJlaW5nIG1pZ3JhdGVkP1xuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwIGNvbmRlbnNlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiUHJvZHVjdHNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlJldmlld3NcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkN1c3RvbWVyc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiT3JkZXJzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXAgY29uZGVuc2VkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJHaWZ0IFZvdWNoZXJzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJEaXNjb3VudHNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkJsb2dzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQYWdlc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGxhYmVsPVwiV2hvIGlzIGhhbmRsaW5nIHlvdXIgbWlncmF0aW9uP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdBZ2VuY3kgUGFydG5lcicsIHZhbHVlOiAnQWdlbmN5IFBhcnRuZXInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0luLWhvdXNlJywgdmFsdWU6ICdJbi1ob3VzZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnVG8gYmUgZGV0ZXJtaW5lZCcsIHZhbHVlOiAnVG8gYmUgZGV0ZXJtaW5lZCd9XX0vPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGxhYmVsPVwiSG93IHdpbGwgdGhlIG1pZ3JhdGlvbiBiZSBoYW5kbGVkP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQWdlbmN5IFBhcnRuZXInLCB2YWx1ZTogJ0FnZW5jeSBQYXJ0bmVyJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSW1wb3J0IHN0b3JlIGFwcCcsIHZhbHVlOiAnSW1wb3J0IHN0b3JlIGFwcCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1RyYW5zcG9ydGVyIGFwcCcsIHZhbHVlOiBcIlRyYW5zcG9ydGVyIGFwcFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdUaGlyZCBwYXJ0eSBhcHAgc2VydmljZScsIHZhbHVlOiAnVGhpcmQgcGFydHkgYXBwIHNlcnZpY2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdEaXJlY3QgU2hvcGlmeSBhcHAgaW50ZWdyYXRpb24nLCB2YWx1ZTogJ0RpcmVjdCBTaG9waWZ5IGFwcCBpbnRlZ3JhdGlvbid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ290aGVyJywgdmFsdWU6ICdvdGhlcid9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfS8+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbGFiZWw9XCJXaG8gd2lsbCBiZSBoYW5kbGluZyAzMDEgVVJMIHJlZGlyZWN0cz9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0FnZW5jeSBQYXJ0bmVyJywgdmFsdWU6ICdBZ2VuY3kgUGFydG5lcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0luLWhvdXNlJywgdmFsdWU6ICdJbi1ob3VzZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1RvIGJlIGRldGVybWluZWQnLCB2YWx1ZTogJ1RvIGJlIGRldGVybWluZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0vPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sections/Migration.js\n");

/***/ })

})