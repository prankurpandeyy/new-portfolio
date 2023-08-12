(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx



const ProjectCard = ({ project  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: project.image,
                height: 300,
                width: 600,
                alt: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: [
                            project.source_code && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.source_code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Source Code"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Live Demo"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":" Slate-UI","image":"https://imgur.com/kbGs6zH.png","description":"A platform for web developers to showcase their projects","tags":["html","css","js","gist"],"source_code":"https://github.com/prankurpandeyy/Slate-UI","demo":"https://slateui.netlify.app/"},{"id":2,"name":"Slate E commerce Store","image":"https://imgur.com/tAZotn3.png","description":"E-commerce website for a selling cars","tags":["ReactJS"," React Router v6"," React Context API and useReducer"," MockBee","Slate UI - CSS Component Library","React Hot Toast","razorpay"],"source_code":"https://github.com/prankurpandeyy/Slate-Store","demo":"https://slate-ecom-app.netlify.app/"},{"id":3,"name":"Slate Video Library","image":"https://imgur.com/8FFqaX8.png","description":"A food ordering platform for healthy and home-cooked meals","tags":["ReactJS"," React Router v6"," React Context API and useReducer"," MockBee","Slate UI - CSS Component Library","React Hot Toast"],"source_code":"https://github.com/prankurpandeyy/Slate-Video-Library","demo":"https://slate-video-app.netlify.app/"},{"id":4,"name":"Slate Note Taking","image":"https://imgur.com/mKkz0iz.png","description":"A themeable and developer-centric portfolio based on the VSCode","tags":["ReactJS"," React Router v6"," React Context API and useReducer"," MockBee","Slate UI - CSS Component Library","React Hot Toast","react-quill"],"source_code":"https://github.com/prankurpandeyy/Slate-Note-Taking","demo":"https://slate-note-taking.netlify.app/"},{"id":5,"name":"Slate Social Media","image":"https://imgur.com/mKkz0iz.png","description":"A themeable and developer-centric portfolio based on the VSCode","tags":["ReactJS","React Router v6","Redux","MockBee","Tailwind","React Hot Toast","react-quill"],"source_code":"https://github.com/prankurpandeyy/Slate-Social-Media","demo":"https://slate-social-media.netlify.app/"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Stuff I've Built So Far"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id)
                )
            })
        ]
    }));
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,675], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();