"use strict";
exports.id = 2679;
exports.ids = [2679];
exports.modules = {

/***/ 5920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const knex = __webpack_require__(514)({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex);


/***/ }),

/***/ 9733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
/* harmony import */ var libs_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, libs_auth__WEBPACK_IMPORTED_MODULE_3__]);
([next_connect__WEBPACK_IMPORTED_MODULE_0__, libs_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Handler() {
    return (0,next_connect__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onError: (err, req, res, next)=>{
            console.error(err.stack);
            _getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(err);
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
    }).use(async (req, res, next)=>{
        try {
            const cookiess = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie || "");
            const token = cookiess[process.env.JWT_NAME];
            const verifiedToken = await (0,libs_auth__WEBPACK_IMPORTED_MODULE_3__/* .verifyAuth */ .RA)(token, res).catch((err)=>{
            // console.log(err);
            });
            if (!verifiedToken) {
                return res.status(401).json({
                    message: "Akses Tidak Dikenal"
                });
            } else {
                req.session = {
                    user: verifiedToken
                };
            }
            next();
        } catch (err) {
            _getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(err);
            return res.status(401).json({
                message: "Akses Tidak Dikenal"
            });
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;