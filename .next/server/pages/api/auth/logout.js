"use strict";
(() => {
var exports = {};
exports.id = 1845;
exports.ids = [1845];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 9242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logout)
/* harmony export */ });
/* harmony import */ var libs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([libs_auth__WEBPACK_IMPORTED_MODULE_0__]);
libs_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function Logout(req, res) {
    await (0,libs_auth__WEBPACK_IMPORTED_MODULE_0__/* .expireUserCookie */ .Z9)(res);
    res.status(200).json({
        message: "Success Logout"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1820], () => (__webpack_exec__(9242)));
module.exports = __webpack_exports__;

})();