(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2846:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "HomePage_container__puf3E",
	"background": "HomePage_background__x7Tr_",
	"foreground": "HomePage_foreground__cGFUH",
	"name": "HomePage_name__XfsN_",
	"bio": "HomePage_bio__6zCc4",
	"typewriter": "HomePage_typewriter__hlJD0",
	"blink": "HomePage_blink__mDVNq",
	"button": "HomePage_button__lzSH5",
	"outlined": "HomePage_outlined__c2ZLF",
	"illustration": "HomePage_illustration__sclzu",
	"content": "HomePage_content__V9RW1"
};


/***/ }),

/***/ 2037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Illustration.jsx

function Illustration(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 486,
        height: 534,
        viewBox: "0 0 486 534",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 167,
                cy: 60,
                r: 60,
                fill: "#D7F484"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: 37.5,
                cy: 215.5,
                r: 37.5,
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z",
                fill: "currentColor"
            })
        ]
    }));
}
/* harmony default export */ const components_Illustration = (Illustration);

// EXTERNAL MODULE: ./styles/HomePage.module.css
var HomePage_module = __webpack_require__(2846);
var HomePage_module_default = /*#__PURE__*/__webpack_require__.n(HomePage_module);
;// CONCATENATED MODULE: ./pages/index.jsx




function HomePage() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (HomePage_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (HomePage_module_default()).background,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "I BUILD"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "WEBSITES"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (HomePage_module_default()).foreground,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (HomePage_module_default()).content,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (HomePage_module_default()).name,
                                    children: "Prankur Pandey"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: (HomePage_module_default()).bio,
                                    children: "Full Stack Web Developer"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/projects",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (HomePage_module_default()).button,
                                        children: "View Work"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (HomePage_module_default()).outlined,
                                        children: "Contact Me"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Illustration, {
                            className: (HomePage_module_default()).illustration
                        })
                    ]
                })
            ]
        })
    }));
};
async function getStaticProps() {
    return {
        props: {
            title: "Home"
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,664], () => (__webpack_exec__(2037)));
module.exports = __webpack_exports__;

})();