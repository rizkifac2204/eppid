"use strict";
(() => {
var exports = {};
exports.id = 5705;
exports.ids = [5705];
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

/***/ 4228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6305);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { id  } = req.query;
        const data = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan_keberatan.id", "permohonan_keberatan.kasus_posisi", "permohonan_keberatan.created_at", "permohonan_keberatan.tanggal_keberatan", "permohonan_keberatan.alasan_a", "permohonan_keberatan.alasan_b", "permohonan_keberatan.alasan_c", "permohonan_keberatan.alasan_d", "permohonan_keberatan.alasan_e", "permohonan_keberatan.alasan_f", "permohonan_keberatan.alasan_g", "permohonan.tiket", "permohonan.no_registrasi", "permohonan.bawaslu_id", "permohonan.rincian", "permohonan.tujuan", "permohonan.cara_terima", "permohonan.cara_dapat", "pemohon.nama_pemohon", "pemohon.pekerjaan_pemohon", "pemohon.telp_pemohon", "pemohon.email_pemohon", "pemohon.alamat_pemohon", "pemohon.identitas_pemohon").from("permohonan_keberatan").innerJoin("permohonan", "permohonan.id", "permohonan_keberatan.permohonan_id").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).whereNull("permohonan.deleted_at").where("permohonan_keberatan.id", id).first();
        if (!data) return res.status(404).json({
            message: "Tidak Ditemukan"
        });
        res.json(data);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).delete(async (req, res)=>{
    try {
        const { id  } = req.query;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_keberatan").where("id", id).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,6305], () => (__webpack_exec__(4228)));
module.exports = __webpack_exports__;

})();