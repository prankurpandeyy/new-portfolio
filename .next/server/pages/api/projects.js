"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();