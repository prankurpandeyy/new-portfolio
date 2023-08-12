"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProjectCard.jsx":
/*!************************************!*\
  !*** ./components/ProjectCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ProjectCard.module.css */ \"./styles/ProjectCard.module.css\");\n/* harmony import */ var _styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar ProjectCard = function(param) {\n    var project = param.project;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        __source: {\n            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: project.image,\n                height: 300,\n                width: 600,\n                alt: project.name,\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: project.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: project.description\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().cta),\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            project.source_code && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.source_code,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().underline),\n                                __source: {\n                                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Source Code\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: project.demo,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: (_styles_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().underline),\n                                __source: {\n                                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/components/ProjectCard.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Live Demo\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFDdUI7O0FBRXJELEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWZDLE9BQU8sU0FBUEEsT0FBTztJQUM1QixNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUosNEVBQVc7Ozs7Ozs7O2lGQUN4QkQsbURBQUs7Z0JBQUNPLEdBQUcsRUFBRUosT0FBTyxDQUFDSyxLQUFLO2dCQUFFQyxNQUFNLEVBQUUsR0FBRztnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLEdBQUcsRUFBRVIsT0FBTyxDQUFDUyxJQUFJOzs7Ozs7OztrRkFDcEVSLENBQUc7Z0JBQUNDLFNBQVMsRUFBRUosK0VBQWM7Ozs7Ozs7O3lGQUMzQmEsQ0FBRTs7Ozs7OztrQ0FBRVgsT0FBTyxDQUFDUyxJQUFJOzt5RkFDaEJHLENBQUM7Ozs7Ozs7a0NBQUVaLE9BQU8sQ0FBQ2EsV0FBVzs7MEZBUXRCWixDQUFHO3dCQUFDQyxTQUFTLEVBQUVKLDJFQUFVOzs7Ozs7Ozs0QkFDdkJFLE9BQU8sQ0FBQ2UsV0FBVyx5RUFDakJDLENBQUM7Z0NBQ0FDLElBQUksRUFBRWpCLE9BQU8sQ0FBQ2UsV0FBVztnQ0FDekJHLE1BQU0sRUFBQyxDQUFRO2dDQUNmQyxHQUFHLEVBQUMsQ0FBcUI7Z0NBQ3pCakIsU0FBUyxFQUFFSixpRkFBZ0I7Ozs7Ozs7MENBQzVCLENBRUQ7O2lHQUVEa0IsQ0FBQztnQ0FDQUMsSUFBSSxFQUFFakIsT0FBTyxDQUFDcUIsSUFBSTtnQ0FDbEJILE1BQU0sRUFBQyxDQUFRO2dDQUNmQyxHQUFHLEVBQUMsQ0FBcUI7Z0NBQ3pCakIsU0FBUyxFQUFFSixpRkFBZ0I7Ozs7Ozs7MENBQzVCLENBRUQ7Ozs7Ozs7O0FBS1YsQ0FBQztLQXJDS0MsV0FBVztBQXVDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeD9mMjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17cHJvamVjdC5pbWFnZX0gaGVpZ2h0PXszMDB9IHdpZHRoPXs2MDB9IGFsdD17cHJvamVjdC5uYW1lfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzPntwcm9qZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgPHA+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cbiAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPXt0YWd9PlxuICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3RhfT5cbiAgICAgICAgICB7cHJvamVjdC5zb3VyY2VfY29kZSAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LnNvdXJjZV9jb2RlfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudW5kZXJsaW5lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTb3VyY2UgQ29kZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZGVtb31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuZGVybGluZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMaXZlIERlbW9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIlByb2plY3RDYXJkIiwicHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcmMiLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwibmFtZSIsImNvbnRlbnQiLCJoMyIsInAiLCJkZXNjcmlwdGlvbiIsImN0YSIsInNvdXJjZV9jb2RlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ1bmRlcmxpbmUiLCJkZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectCard.jsx\n");

/***/ })

});