"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                var _this = this;\n                return this.props.campaigns.map(function(c) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-3 pb-5 px-5 rounded-lg bg-white/10 w-22 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-b-lg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-bold\",\n                                children: c\n                            }, void 0, false, {\n                                fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"campaigns/\".concat(c),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"transition-all duration-200 text-green-300 hover:text-green-500 focus:text-green-500\",\n                                    children: \"View campaign\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, c, true, {\n                        fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, _this);\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-10 items-center sm:items-start w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-montserrat tracking-wide text-2xl\",\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col sm:flex-row gap-10 sm:justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col gap-6\",\n                                        children: this.props.campaigns.length ? this.renderCampaigns() : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-thin text-green-300\",\n                                            children: \"No campaigns have been created\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 27\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"campaigns/new\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"transition-all duration-200 hover:bg-white/20 focus:bg-white/30 py-3 px-5 flex gap-3 items-center h-fit w-fit border-[1px] border-white bg-white/10 rounded-lg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdAdd, {\n                                                    color: \"white\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 25\n                                                }, this),\n                                                \" Create campaign\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/brennamacquarrie/Development/solidity/contract-factory/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 16\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: // nextjs does not execute componentDidMount on the server\n            // so to get this on the server, it needs to be getInitialProps (not traditional React)\n            // does not render yet! only returns data\n            // static is a CLASS function, it's not assigned to CampaignIndex\n            // Next wants to get this data separately from any rendering actions\n            function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n                    var campaigns;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                                ];\n                            case 1:\n                                campaigns = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        campaigns: campaigns\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUM7QUFDQztBQUNIO0FBQ0c7QUFDYjtBQUU3QixpQkFBbUIsaUJBZ0RoQjs7OEVBaERHTSxhQUFhOytGQUFiQSxhQUFhO2FBQWJBLGFBQWE7Z0dBQWJBLGFBQWE7OztrRkFBYkEsYUFBYTs7WUFZZkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHOztnQkFDZCxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxDQUFDO3lDQUM5Qiw4REFBQ0MsS0FBRzt3QkFBU0MsU0FBUyxFQUFDLHFEQUFxRDs7MENBQ3hFLDhEQUFDQyxNQUFJO2dDQUFDRCxTQUFTLEVBQUMseUdBQXlHOzs7OztxQ0FBUTswQ0FDakksOERBQUNFLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxXQUFXOzBDQUNwQkYsQ0FBQzs7Ozs7cUNBQ0Q7MENBQ0wsOERBQUNOLGtEQUFJO2dDQUFDVyxJQUFJLEVBQUUsWUFBVyxDQUFJLE9BQUZMLENBQUMsQ0FBRTswQ0FDeEIsNEVBQUNNLEdBQUM7b0NBQUNKLFNBQVMsRUFBQyxzRkFBc0Y7OENBQUMsZUFBYTs7Ozs7eUNBQUk7Ozs7O3FDQUNsSDs7dUJBUERGLENBQUM7Ozs7NkJBUUw7aUJBQ1QsQ0FBQyxDQUFDO1lBQ1AsQ0FBQzs7O1lBRURPLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNMLHFCQUFPLDhEQUFDZCwwREFBTTs4QkFDZCw0RUFBQ1EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHlEQUF5RDs7MENBQ3BFLDhEQUFDTSxJQUFFO2dDQUFDTixTQUFTLEVBQUMsd0NBQXdDOzBDQUFDLGdCQUFjOzs7OztvQ0FBSzswQ0FDMUUsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxxREFBcUQ7O2tEQUNoRSw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjtrREFDL0IsSUFBSSxDQUFDTCxLQUFLLENBQUNDLFNBQVMsQ0FBQ1csTUFBTSxHQUN0QixJQUFJLENBQUNiLGVBQWUsRUFBRSxpQkFDdEIsOERBQUNLLEtBQUc7NENBQUNDLFNBQVMsRUFBQywwQkFBMEI7c0RBQUMsZ0NBQThCOzs7OztnREFBTTs7Ozs7NENBRWxGO2tEQUNOLDhEQUFDUixrREFBSTt3Q0FBQ1csSUFBSSxFQUFDLGVBQWU7a0RBQ3RCLDRFQUFDQyxHQUFDOzRDQUFDSixTQUFTLEVBQUMsZ0tBQWdLOzs4REFDekssOERBQUNWLGlEQUFLO29EQUFDa0IsS0FBSyxFQUFDLE9BQU87Ozs7O3dEQUFHO2dEQUFBLGtCQUMzQjs7Ozs7O2dEQUFJOzs7Ozs0Q0FDRDs7Ozs7O29DQUNMOzs7Ozs7NEJBQ0o7Ozs7O3dCQUNEO1lBQ1QsQ0FBQzs7OztZQXRDWUMsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsMERBTjBEO1lBQzFELHVGQUF1RjtZQUV2Rix5Q0FBeUM7WUFDekMsaUVBQWlFO1lBQ2pFLG9FQUFvRTtZQUNwRSxTQUFhQSxlQUFlO3VCQUE1QixnR0FBK0I7d0JBQ3JCYixTQUFTOzs7O2dDQUFHOztvQ0FBTVAsc0ZBQW9DLEVBQUUsQ0FBQ3VCLElBQUksRUFBRTtrQ0FBQTs7Z0NBQS9EaEIsU0FBUyxHQUFHLGFBQW1EO2dDQUNyRTs7b0NBQU87d0NBQUVBLFNBQVMsRUFBVEEsU0FBUztxQ0FBRTtrQ0FBQTs7O2dCQUN4QixDQUFDO2FBQUE7OztXQVZDSCxhQUFhO0NBOENsQixDQTlDMkJMLDRDQUFTLENBOENwQztBQUVELCtEQUFlSyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHsgTWRBZGQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gbmV4dGpzIGRvZXMgbm90IGV4ZWN1dGUgY29tcG9uZW50RGlkTW91bnQgb24gdGhlIHNlcnZlclxuICAgIC8vIHNvIHRvIGdldCB0aGlzIG9uIHRoZSBzZXJ2ZXIsIGl0IG5lZWRzIHRvIGJlIGdldEluaXRpYWxQcm9wcyAobm90IHRyYWRpdGlvbmFsIFJlYWN0KVxuICAgIFxuICAgIC8vIGRvZXMgbm90IHJlbmRlciB5ZXQhIG9ubHkgcmV0dXJucyBkYXRhXG4gICAgLy8gc3RhdGljIGlzIGEgQ0xBU1MgZnVuY3Rpb24sIGl0J3Mgbm90IGFzc2lnbmVkIHRvIENhbXBhaWduSW5kZXhcbiAgICAvLyBOZXh0IHdhbnRzIHRvIGdldCB0aGlzIGRhdGEgc2VwYXJhdGVseSBmcm9tIGFueSByZW5kZXJpbmcgYWN0aW9uc1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHsgY2FtcGFpZ25zIH1cbiAgICB9XG5cbiAgICByZW5kZXJDYW1wYWlnbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjfSBjbGFzc05hbWU9XCJwdC0zIHBiLTUgcHgtNSByb3VuZGVkLWxnIGJnLXdoaXRlLzEwIHctMjIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTAgaC0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi0zMDAgdmlhLWJsdWUtNTAwIHRvLXB1cnBsZS02MDAgcm91bmRlZC1iLWxnXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge2N9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgY2FtcGFpZ25zLyR7Y31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIHRleHQtZ3JlZW4tMzAwIGhvdmVyOnRleHQtZ3JlZW4tNTAwIGZvY3VzOnRleHQtZ3JlZW4tNTAwXCI+VmlldyBjYW1wYWlnbjwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTAgaXRlbXMtY2VudGVyIHNtOml0ZW1zLXN0YXJ0IHctZnVsbFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtbW9udHNlcnJhdCB0cmFja2luZy13aWRlIHRleHQtMnhsXCI+T3BlbiBDYW1wYWlnbnM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC0xMCBzbTpqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2FtcGFpZ25zLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNhbXBhaWducygpIFxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdGhpbiB0ZXh0LWdyZWVuLTMwMFwiPk5vIGNhbXBhaWducyBoYXZlIGJlZW4gY3JlYXRlZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImNhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGhvdmVyOmJnLXdoaXRlLzIwIGZvY3VzOmJnLXdoaXRlLzMwIHB5LTMgcHgtNSBmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlciBoLWZpdCB3LWZpdCBib3JkZXItWzFweF0gYm9yZGVyLXdoaXRlIGJnLXdoaXRlLzEwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZEFkZCBjb2xvcj1cIndoaXRlXCIgLz4gQ3JlYXRlIGNhbXBhaWduXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIk1kQWRkIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJDYW1wYWlnbnMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaDQiLCJocmVmIiwiYSIsInJlbmRlciIsImgyIiwibGVuZ3RoIiwiY29sb3IiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});