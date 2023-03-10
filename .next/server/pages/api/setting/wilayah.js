"use strict";
(() => {
var exports = {};
exports.id = 7546;
exports.ids = [7546];
exports.modules = {

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const data = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").where({
            id: req.session.user.bawaslu_id
        }).first();
        res.json(data);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        const { level , bawaslu_id  } = req.session.user;
        const { id , nama_bawaslu , email_bawaslu , telp_bawaslu , alamat_bawaslu , kota_bawaslu , web_profile , web_ppid , facebook , twitter , youtube , instagram  } = req.body;
        let provinsi_id = bawaslu_id.substring(0, 2);
        const cek = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").where({
            id: bawaslu_id
        }).first();
        if (cek) {
            // proses update
            const update = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").where({
                id: bawaslu_id
            }).update({
                nama_bawaslu,
                email_bawaslu,
                telp_bawaslu,
                alamat_bawaslu,
                kota_bawaslu,
                web_profile,
                web_ppid,
                facebook,
                twitter,
                youtube,
                instagram
            });
            // failed
            if (!update) return res.status(400).json({
                message: "Gagal Mengubah Data"
            });
        } else {
            // proses simpan
            const simpan = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").insert({
                id: bawaslu_id,
                level_bawaslu: level,
                provinsi_id,
                nama_bawaslu,
                email_bawaslu,
                telp_bawaslu,
                alamat_bawaslu,
                kota_bawaslu,
                web_profile,
                web_ppid,
                facebook,
                twitter,
                youtube,
                instagram
            });
            // failed
            if (!simpan) return res.status(400).json({
                message: "Gagal Menyimpan Data"
            });
        }
        // success
        res.json({
            message: "Berhasil Menyimpan Data",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}));

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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733], () => (__webpack_exec__(394)));
module.exports = __webpack_exports__;

})();