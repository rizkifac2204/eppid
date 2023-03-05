"use strict";
(() => {
var exports = {};
exports.id = 9069;
exports.ids = [9069];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

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

/***/ 3745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
/* harmony import */ var libs_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([libs_auth__WEBPACK_IMPORTED_MODULE_3__]);
libs_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LoginCredential = async (req, res)=>{
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                message: "Method Not Allowed"
            });
        }
        const { username , password  } = req.body;
        if (!username || !password) {
            res.status(401).json({
                message: "Isi Semua Data"
            });
            return;
        }
        const checkUser = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select(`admin.*`, `bawaslu.level_bawaslu as level`).from(`admin`).innerJoin(`bawaslu`, `admin.bawaslu_id`, `bawaslu.id`).where(`admin.username`, username).first();
        if (!checkUser) {
            res.status(401).json({
                message: "Data Tidak Ditemukan"
            });
            return;
        }
        const match = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, checkUser.password);
        if (!match) return res.status(401).json({
            message: "Data Tidak Ditemukan"
        });
        const dataForJWT = {
            id: checkUser.id,
            level: checkUser.level,
            bawaslu_id: checkUser.bawaslu_id,
            email_admin: checkUser.email_admin,
            name: checkUser.nama_admin,
            image: null
        };
        await (0,libs_auth__WEBPACK_IMPORTED_MODULE_3__/* .setUserCookie */ .rk)(dataForJWT, res);
        return res.status(200).json({
            message: "Success Login"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginCredential);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820], () => (__webpack_exec__(3745)));
module.exports = __webpack_exports__;

})();