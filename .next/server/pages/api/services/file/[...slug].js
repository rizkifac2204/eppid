"use strict";
(() => {
var exports = {};
exports.id = 9569;
exports.ids = [9569];
exports.modules = {

/***/ 9514:
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ 7773:
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ 767:
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1536);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_0__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const path = __webpack_require__(1017);
const fs = __webpack_require__(7147);
var mime = __webpack_require__(9514);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(async (req, res)=>{
    const _path = req.query.slug.join("/");
    if (!_path) return res.status(404).json({
        message: "File tidak terdeteksi",
        type: "error"
    });
    const filePath = path.resolve("./", _path);
    try {
        if (fs.existsSync(filePath)) {
            fs.readFile(filePath, function(err, data) {
                res.writeHead(200, {
                    "Content-Type": mime.lookup(filePath)
                });
                res.write(data);
                return res.end();
            });
        } else {
            return res.status(404).json({
                message: "File tidak ditemukan",
                type: "error"
            });
        }
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "File error",
            type: "error"
        });
    }
// res.json({ data: "apa" });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PublicHandler)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function PublicHandler() {
    return (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onError: (err, req, res, next)=>{
            console.error(err.stack);
            res.status(500).json({
                message: err.toString(),
                type: "error"
            });
        },
        onNoMatch: (req, res)=>{
            res.status(404).json({
                message: "Not found",
                type: "error"
            });
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383], () => (__webpack_exec__(4434)));
module.exports = __webpack_exports__;

})();