"use strict";
(() => {
var exports = {};
exports.id = 9073;
exports.ids = [9073];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 7773:
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ 767:
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 7472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLogin)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4383);
/* harmony import */ var libs_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([libs_auth__WEBPACK_IMPORTED_MODULE_2__]);
libs_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function isLogin(req, res) {
    try {
        const cookiess = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie || "");
        const token = cookiess[process.env.JWT_NAME];
        const verifiedToken = await (0,libs_auth__WEBPACK_IMPORTED_MODULE_2__/* .verifyAuth */ .RA)(token, res).catch((err)=>{
        // console.log(err);
        });
        if (!verifiedToken) return res.status(401).json({
            message: "Akses Tidak Dikenal"
        });
        res.json(verifiedToken);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(error);
        res.status(401).json({
            message: "Akses Tidak Dikenal"
        });
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820], () => (__webpack_exec__(7472)));
module.exports = __webpack_exports__;

})();