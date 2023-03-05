"use strict";
(() => {
var exports = {};
exports.id = 1455;
exports.ids = [1455];
exports.modules = {

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1536);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    const table = req.query.slug[0];
    const id = req.query.slug[1];
    // cek kembali
    if (![
        "keberatan",
        "permohonan"
    ].includes(table)) return res.status(403).json({
        message: "Terjadi Kesalahan"
    });
    try {
        if (table === "permohonan") {
            // ambil data permohonan
            const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan.*", "pemohon.*", "bawaslu.nama_bawaslu").from("permohonan").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").whereNull("permohonan.deleted_at").where("permohonan.no_registrasi", id).orWhere("permohonan.tiket", id).first();
            if (!result) return res.status(404).json({
                message: "Tidak Ditemukan"
            });
            result.from = "Permohonan";
            res.json(result);
        } else {
            // ambil data keberatan
            const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan_keberatan.id", "permohonan_keberatan.kasus_posisi", "permohonan_keberatan.created_at", "permohonan_keberatan.tanggal_keberatan", "permohonan_keberatan.alasan_a", "permohonan_keberatan.alasan_b", "permohonan_keberatan.alasan_c", "permohonan_keberatan.alasan_d", "permohonan_keberatan.alasan_e", "permohonan_keberatan.alasan_f", "permohonan_keberatan.alasan_g", "permohonan.tiket", "permohonan.no_registrasi", "permohonan.bawaslu_id", "permohonan.rincian", "permohonan.tujuan", "permohonan.cara_terima", "permohonan.cara_dapat", "pemohon.nama_pemohon", "pemohon.pekerjaan_pemohon", "pemohon.telp_pemohon", "pemohon.email_pemohon", "pemohon.alamat_pemohon", "pemohon.identitas_pemohon").from("permohonan_keberatan").innerJoin("permohonan", "permohonan.id", "permohonan_keberatan.permohonan_id").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").whereNull("permohonan.deleted_at").where("permohonan.no_registrasi", id).orWhere("permohonan.tiket", id).first();
            if (!result) return res.status(404).json({
                message: "Tidak Ditemukan"
            });
            result.from = "Keberatan";
            res.json(result);
        }
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        return res.status(404).json({
            message: "Terjadi Kesalahan"
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383], () => (__webpack_exec__(8933)));
module.exports = __webpack_exports__;

})();