webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/sections/Stakeholders.js":
/*!****************************************!*\
  !*** ./pages/sections/Stakeholders.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stakeholders; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Stakeholders() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      Stakeholders = _useState[0],\n      newStakeholder = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      Email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      Name = _useState3[0],\n      setName = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      Company = _useState4[0],\n      setCompany = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      JobTitle = _useState5[0],\n      setJobTitle = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      ProjectRole = _useState6[0],\n      setProjectRole = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      Region = _useState7[0],\n      setRegion = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      TimeZone = _useState8[0],\n      setTimeZone = _useState8[1]; // Define handlers\n\n\n  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (_event) {});\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n    title: \"Stakeholders\",\n    description: \"Who are the owners, employees working on the project?\"\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    sectioned: true\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: handleSubmit\n  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Email\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Name\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Company\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Job title\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Project role\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Region\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Time zone\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Additional\"\n  }), \"Should this person be CCed on all communications?\", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"Yes\",\n    id: \"disabled2\",\n    name: \"comms321\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"No\",\n    id: \"optional2\",\n    name: \"comms321\"\n  })), \"Is this a Partner/Contractor/Consultant?\", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"Yes\",\n    id: \"disabled3\",\n    name: \"isPartner\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"No\",\n    id: \"optional3\",\n    name: \"isPartner\"\n  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    primary: true,\n    onSubmit: handleSubmit\n  }, \"Save contact\"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Are you open to hiring Shopify Experts or Plus Partners?\"\n  }), \"Are you planning to continue with your agency partner after launch?\", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"Yes\",\n    id: \"disabled4\",\n    name: \"areContinue\"\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"RadioButton\"], {\n    label: \"No\",\n    id: \"optional4\",\n    name: \"areContinue\"\n  })))));\n}\n\n_s(Stakeholders, \"EFAHIra09wKtL9QsKjIIPauVo3U=\");\n\n_c = Stakeholders;\n\nvar _c;\n\n$RefreshReg$(_c, \"Stakeholders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWN0aW9ucy9TdGFrZWhvbGRlcnMuanM/OGE1MyJdLCJuYW1lcyI6WyJTdGFrZWhvbGRlcnMiLCJ1c2VTdGF0ZSIsIm5ld1N0YWtlaG9sZGVyIiwiRW1haWwiLCJzZXRFbWFpbCIsIk5hbWUiLCJzZXROYW1lIiwiQ29tcGFueSIsInNldENvbXBhbnkiLCJKb2JUaXRsZSIsInNldEpvYlRpdGxlIiwiUHJvamVjdFJvbGUiLCJzZXRQcm9qZWN0Um9sZSIsIlJlZ2lvbiIsInNldFJlZ2lvbiIsIlRpbWVab25lIiwic2V0VGltZVpvbmUiLCJoYW5kbGVTdWJtaXQiLCJ1c2VDYWxsYmFjayIsIl9ldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUM1QkQsWUFENEI7QUFBQSxNQUNkRSxjQURjOztBQUFBLG1CQUVURCxzREFBUSxDQUFDLEVBQUQsQ0FGQztBQUFBLE1BRTVCRSxLQUY0QjtBQUFBLE1BRXJCQyxRQUZxQjs7QUFBQSxtQkFHWEgsc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUc1QkksSUFINEI7QUFBQSxNQUd0QkMsT0FIc0I7O0FBQUEsbUJBSUxMLHNEQUFRLENBQUMsRUFBRCxDQUpIO0FBQUEsTUFJNUJNLE9BSjRCO0FBQUEsTUFJbkJDLFVBSm1COztBQUFBLG1CQUtIUCxzREFBUSxDQUFDLEVBQUQsQ0FMTDtBQUFBLE1BSzVCUSxRQUw0QjtBQUFBLE1BS2xCQyxXQUxrQjs7QUFBQSxtQkFNR1Qsc0RBQVEsQ0FBQyxFQUFELENBTlg7QUFBQSxNQU01QlUsV0FONEI7QUFBQSxNQU1mQyxjQU5lOztBQUFBLG1CQU9QWCxzREFBUSxDQUFDLEVBQUQsQ0FQRDtBQUFBLE1BTzVCWSxNQVA0QjtBQUFBLE1BT3BCQyxTQVBvQjs7QUFBQSxtQkFRSGIsc0RBQVEsQ0FBQyxFQUFELENBUkw7QUFBQSxNQVE1QmMsUUFSNEI7QUFBQSxNQVFsQkMsV0FSa0Isa0JBVW5DOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsTUFBRCxFQUFZLENBRTVDLENBRitCLENBQWhDO0FBSUEsU0FDRixNQUFDLHVEQUFELFFBQ1UsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0ksU0FBSyxFQUFDLGNBRFY7QUFFSSxlQUFXLEVBQUM7QUFGaEIsS0FHSSxNQUFDLHFEQUFEO0FBQU0sYUFBUztBQUFmLEtBQ0ksTUFBQyxxREFBRDtBQUFNLFlBQVEsRUFBRUY7QUFBaEIsS0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQURKLEVBRUksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQUZKLEVBR0ksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQUhKLEVBSUksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQUpKLEVBS0ksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQUxKLEVBTUksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQU5KLEVBT0ksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQVBKLEVBUUksTUFBQywwREFBRDtBQUFXLFNBQUssRUFBQztBQUFqQixJQVJKLHVEQVVJLE1BQUMsc0RBQUQsUUFDSSxNQUFDLDREQUFEO0FBQ0ksU0FBSyxFQUFDLEtBRFY7QUFFSSxNQUFFLEVBQUMsV0FGUDtBQUdJLFFBQUksRUFBQztBQUhULElBREosRUFNSSxNQUFDLDREQUFEO0FBQ0ksU0FBSyxFQUFDLElBRFY7QUFFSSxNQUFFLEVBQUMsV0FGUDtBQUdJLFFBQUksRUFBQztBQUhULElBTkosQ0FWSiw4Q0F1QkksTUFBQyxzREFBRCxRQUNJLE1BQUMsNERBQUQ7QUFDSSxTQUFLLEVBQUMsS0FEVjtBQUVJLE1BQUUsRUFBQyxXQUZQO0FBR0ksUUFBSSxFQUFDO0FBSFQsSUFESixFQU1JLE1BQUMsNERBQUQ7QUFDSSxTQUFLLEVBQUMsSUFEVjtBQUVJLE1BQUUsRUFBQyxXQUZQO0FBR0ksUUFBSSxFQUFDO0FBSFQsSUFOSixDQXZCSixFQW1DSSxNQUFDLHVEQUFEO0FBQVEsV0FBTyxNQUFmO0FBQWdCLFlBQVEsRUFBRUE7QUFBMUIsb0JBbkNKLENBREosQ0FESixFQXdDSSxNQUFDLDBEQUFEO0FBQVcsU0FBSyxFQUFDO0FBQWpCLElBeENKLHlFQTBDSSxNQUFDLHNEQUFELFFBQ0ksTUFBQyw0REFBRDtBQUNJLFNBQUssRUFBQyxLQURWO0FBRUksTUFBRSxFQUFDLFdBRlA7QUFHSSxRQUFJLEVBQUM7QUFIVCxJQURKLEVBTUksTUFBQyw0REFBRDtBQUNJLFNBQUssRUFBQyxJQURWO0FBRUksTUFBRSxFQUFDLFdBRlA7QUFHSSxRQUFJLEVBQUM7QUFIVCxJQU5KLENBMUNKLENBSEosQ0FEVixDQURFO0FBK0RIOztHQTlFdUJqQixZOztLQUFBQSxZIiwiZmlsZSI6Ii4vcGFnZXMvc2VjdGlvbnMvU3Rha2Vob2xkZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdExheW91dCxcblx0Q2FyZCxcblx0VGV4dEZpZWxkLFxuXHRTdGFjayxcbiAgICBSYWRpb0J1dHRvbixcbiAgICBCdXR0b24sXG4gICAgRm9ybSxcbiAgICBGb3JtTGF5b3V0XG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFrZWhvbGRlcnMoKSB7XG4gICAgY29uc3QgW1N0YWtlaG9sZGVycywgbmV3U3Rha2Vob2xkZXJdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtFbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtOYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbQ29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0pvYlRpdGxlLCBzZXRKb2JUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1Byb2plY3RSb2xlLCBzZXRQcm9qZWN0Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1JlZ2lvbiwgc2V0UmVnaW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbVGltZVpvbmUsIHNldFRpbWVab25lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vIERlZmluZSBoYW5kbGVyc1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKChfZXZlbnQpID0+IHtcbiAgICAgICAgXG4gICAgfSlcblxuICAgIHJldHVybiAoXG5cdFx0PExheW91dD5cbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3Rha2Vob2xkZXJzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldobyBhcmUgdGhlIG93bmVycywgZW1wbG95ZWVzIHdvcmtpbmcgb24gdGhlIHByb2plY3Q/XCI+XG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJFbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiQ29tcGFueVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiSm9iIHRpdGxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQcm9qZWN0IHJvbGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlJlZ2lvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiVGltZSB6b25lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBZGRpdGlvbmFsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3VsZCB0aGlzIHBlcnNvbiBiZSBDQ2VkIG9uIGFsbCBjb21tdW5pY2F0aW9ucz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkaXNhYmxlZDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1zMzIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uYWwyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21tczMyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJcyB0aGlzIGEgUGFydG5lci9Db250cmFjdG9yL0NvbnN1bHRhbnQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGlzYWJsZWQzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc1BhcnRuZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcHRpb25hbDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlzUGFydG5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+U2F2ZSBjb250YWN0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkFyZSB5b3Ugb3BlbiB0byBoaXJpbmcgU2hvcGlmeSBFeHBlcnRzIG9yIFBsdXMgUGFydG5lcnM/XCIvPlxuICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHBsYW5uaW5nIHRvIGNvbnRpbnVlIHdpdGggeW91ciBhZ2VuY3kgcGFydG5lciBhZnRlciBsYXVuY2g/XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRpc2FibGVkNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFyZUNvbnRpbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbmFsNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFyZUNvbnRpbnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sections/Stakeholders.js\n");

/***/ })

})