"use strict";
(() => {
var exports = {};
exports.id = 4781;
exports.ids = [4781];
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

/***/ 7300:
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
        const result = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("divisi").orderBy("nama_divisi", "desc");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        if (req.session.user.level !== 1) return res.status(401).json({
            message: "Anda Tidak Diizinkan Melakukan Aksi ini"
        });
        const { nama_divisi  } = req.body;
        const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("nama_divisi").from("divisi").where("nama_divisi", nama_divisi).first();
        if (cek) return res.status(400).json({
            message: "Nama Divisi Sudah Terdaftar"
        });
        const simpan = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("divisi").insert({
            nama_divisi
        });
        // failed
        if (!simpan) return res.status(400).json({
            message: "Gagal Menyimpan Data"
        });
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
})// delete one by one
.delete(async (req, res)=>{
    if (req.session.user.level !== 1) return res.status(401).json({
        message: "Anda Tidak Diizinkan Melakukan Aksi ini"
    });
    const { id  } = req.body;
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("divisi").where("id", id).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Proses, Data DIP terdeteksi"
        });
    }
})// delete selected
.put(async (req, res)=>{
    if (req.session.user.level !== 1) return res.status(401).json({
        message: "Anda Tidak Diizinkan Melakukan Aksi ini"
    });
    const { data  } = req.body;
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("divisi").whereIn("id", data).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Proses, Data DIP terdeteksi"
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733], () => (__webpack_exec__(7300)));
module.exports = __webpack_exports__;

})();