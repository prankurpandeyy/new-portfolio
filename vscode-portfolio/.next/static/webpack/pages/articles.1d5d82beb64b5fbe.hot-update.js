"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./pages/articles.jsx":
/*!****************************!*\
  !*** ./pages/articles.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArticleCard */ \"./components/ArticleCard.jsx\");\n/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ArticlesPage.module.css */ \"./styles/ArticlesPage.module.css\");\n/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ArticlesPage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), articles = ref[0], setArticles = ref[1];\n    console.log(\"🚀 ~ file: articles.jsx:6 ~ ArticlesPage ~ articles:\", articles);\n    function fetchArticles() {\n        return _fetchArticles.apply(this, arguments);\n    }\n    function _fetchArticles() {\n        _fetchArticles = _asyncToGenerator(_home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var Blogs;\n            return _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\" https://dev.to/api/articles?username=prankurpandeyy \");\n                    case 3:\n                        Blogs = _ctx.sent;\n                        setBlogs(Blogs.data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return _fetchArticles.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchArticles();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h3\", {\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"Recent Posts from\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        href: \"https://dev.to/prankurpandeyy\",\n                        target: \"_blank\",\n                        rel: \"noopener\",\n                        className: (_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().underline),\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"dev.to\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: articles.map(function(article) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        article: article,\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }, article.id);\n                })\n            })\n        ]\n    }));\n};\n_s(ArticlesPage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ArticlesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesPage);\nvar _c;\n$RefreshReg$(_c, \"ArticlesPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUTtBQUNHO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNLLFlBQVksR0FBRyxRQUNyQixHQUQyQixDQUFDOzs7SUFDMUIsR0FBSyxDQUEyQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0ssUUFBUSxHQUFpQkwsR0FBWSxLQUEzQk0sV0FBVyxHQUFJTixHQUFZO0lBQzVDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxRCx5REFBRUgsUUFBUTthQUU1REksYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsK0tBQTVCLFFBQVEsV0FBdUIsQ0FBQztnQkFFdEJDLEtBQUs7Ozs7OzsrQkFBU1AsaURBQVMsQ0FDM0IsQ0FBdUQ7O3dCQURuRE8sS0FBSzt3QkFJWEUsUUFBUSxDQUFDRixLQUFLLENBQUNHLElBQUk7Ozs7Ozt3QkFFbkJOLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFZixDQUFDO2VBVmNDLGNBQWE7O0lBWTVCVixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmVSxhQUFhO0lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU07O2tGQUVESyxDQUFFOzs7Ozs7OztvQkFBQyxDQUNlO29CQUFDLENBQUc7eUZBQ3BCQyxDQUFDO3dCQUNBQyxJQUFJLEVBQUMsQ0FBK0I7d0JBQ3BDQyxNQUFNLEVBQUMsQ0FBUTt3QkFDZkMsR0FBRyxFQUFDLENBQVU7d0JBQ2RDLFNBQVMsRUFBRWpCLGtGQUFnQjs7Ozs7OztrQ0FDNUIsQ0FFRDs7OztpRkFFRG1CLENBQUc7Z0JBQUNGLFNBQVMsRUFBRWpCLGtGQUFnQjs7Ozs7OzswQkFDN0JHLFFBQVEsQ0FBQ2tCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU87a0NBQ3BCLE1BQU0sd0RBQUx2QiwrREFBVzt3QkFBa0J1QixPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7O0FBS3RDLENBQUM7R0F2Q0tyQixZQUFZO0tBQVpBLFlBQVk7O0FBMkRsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzLmpzeD9iMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FydGljbGVzUGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEFydGljbGVzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGFydGljbGVzLmpzeDo2IH4gQXJ0aWNsZXNQYWdlIH4gYXJ0aWNsZXM6XCIsIGFydGljbGVzKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEFydGljbGVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBCbG9ncyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgXCIgaHR0cHM6Ly9kZXYudG8vYXBpL2FydGljbGVzP3VzZXJuYW1lPXByYW5rdXJwYW5kZXl5IFwiXG4gICAgICApO1xuXG4gICAgICBzZXRCbG9ncyhCbG9ncy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hBcnRpY2xlcygpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz5cbiAgICAgICAgUmVjZW50IFBvc3RzIGZyb217XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3ByYW5rdXJwYW5kZXl5XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XG4gICAgICAgID5cbiAgICAgICAgICBkZXYudG9cbiAgICAgICAgPC9hPlxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgIDxBcnRpY2xlQ2FyZCBrZXk9e2FydGljbGUuaWR9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9kZXYudG8vYXBpL2FydGljbGVzL21lL3B1Ymxpc2hlZD9wZXJfcGFnZT02XCIsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcImFwaS1rZXlcIjogcHJvY2Vzcy5lbnYuREVWX1RPX0FQSV9LRVksXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpdGxlOiBcIkFydGljbGVzXCIsIGFydGljbGVzOiBkYXRhIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGljbGVDYXJkIiwic3R5bGVzIiwiYXhpb3MiLCJBcnRpY2xlc1BhZ2UiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwiY29uc29sZSIsImxvZyIsImZldGNoQXJ0aWNsZXMiLCJCbG9ncyIsImdldCIsInNldEJsb2dzIiwiZGF0YSIsImgzIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJjbGFzc05hbWUiLCJ1bmRlcmxpbmUiLCJkaXYiLCJjb250YWluZXIiLCJtYXAiLCJhcnRpY2xlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles.jsx\n");

/***/ })

});