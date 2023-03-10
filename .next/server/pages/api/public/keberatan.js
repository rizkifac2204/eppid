"use strict";
(() => {
var exports = {};
exports.id = 4649;
exports.ids = [4649];
exports.modules = {

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

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

/***/ 5254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1536);
/* harmony import */ var services_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6954);
/* harmony import */ var middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3800);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { nomor  } = req.query;
        const data = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan.*", "bawaslu.nama_bawaslu", "bawaslu.email_bawaslu", "bawaslu.telp_bawaslu", "bawaslu.alamat_bawaslu", "bawaslu.kota_bawaslu", "pemohon.nama_pemohon", "pemohon.alamat_pemohon", "pemohon.pekerjaan_pemohon", "pemohon.telp_pemohon").from("permohonan").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").leftJoin("bawaslu", "bawaslu.id", "permohonan.bawaslu_id").where("permohonan.no_registrasi", nomor).orWhere("permohonan.tiket", nomor).whereNull("permohonan.deleted_at").first();
        if (!data) return res.status(404).json({
            message: "Tidak Ditemukan"
        });
        res.json(data);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    const { id , no_registrasi , tiket , email_pemohon , email_bawaslu , nama_bawaslu , alasan_a , alasan_b , alasan_c , alasan_d , alasan_e , alasan_f , alasan_g , kasus_posisi  } = req.body;
    const curtime = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_4__/* .buatCurTime */ .sh)();
    // setting email untuk pemohon
    const setMailOptionPemohon = (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .mailOption */ .hW)(email_pemohon, "Pengajuan Keberatan PPID Bawaslu", (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .TextKeberatanKepadaPemohon */ .pc)(no_registrasi, tiket));
    // setting email untuk admin
    const emailadmintujuan = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_4__/* .emailAdmin */ ._w)(nama_bawaslu, email_bawaslu);
    const setMailOptionAdmin = (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .mailOption */ .hW)(emailadmintujuan, "Pengajuan Keberatan Permohonan Informasi Baru", (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .TextKeberatanKepadaAdmin */ .qU)(no_registrasi, email_pemohon, tiket));
    const dataForInsert = {
        permohonan_id: id,
        alasan_a: alasan_a ? 1 : 0,
        alasan_b: alasan_b ? 1 : 0,
        alasan_c: alasan_c ? 1 : 0,
        alasan_d: alasan_d ? 1 : 0,
        alasan_e: alasan_e ? 1 : 0,
        alasan_f: alasan_f ? 1 : 0,
        alasan_g: alasan_g ? 1 : 0,
        kasus_posisi,
        tanggal_keberatan: curtime
    };
    // proses simpan
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_keberatan").insert(dataForInsert);
        // failed
        if (!proses) {
            return res.status(400).json({
                message: "Gagal Mengajukan Keberatan"
            });
        }
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(setMailOptionPemohon);
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(setMailOptionAdmin);
        // success
        res.json({
            message: "Berhasil Mengajukan Keberatan",
            currentData: dataForInsert,
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Mengajukan Keberatan"
        });
    }
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,6954,8882], () => (__webpack_exec__(5254)));
module.exports = __webpack_exports__;

})();