"use strict";
(() => {
var exports = {};
exports.id = 6901;
exports.ids = [6901];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

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

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 7121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var services_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6954);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8595);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { id , respon_id  } = req.query;
        const data = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select(`permohonan_respon.*`, `permohonan_respon_tolak.id as tolak_id`, `permohonan_respon_tolak.tanggal_ditolak`, `permohonan_respon_tolak.dasar_pengecualian`, `permohonan_respon_tolak.pada_pasal`, `permohonan_respon_tolak.ket_konsekuensi`).from("permohonan_respon").leftJoin(`permohonan_respon_tolak`, `permohonan_respon.id`, `permohonan_respon_tolak.respon_id`).where({
            "permohonan_respon.id": respon_id
        }).first();
        res.json(data);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).put(async (req, res)=>{
    const { id , respon_id  } = req.query;
    const dataRespon = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("pesan", "mailed").from("permohonan_respon").where({
        "permohonan_respon.id": respon_id
    }).first();
    const dataPermohonan = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("tiket", "email_pemohon", "status_permohonan", "no_registrasi").from("permohonan").where("id", id).first();
    try {
        // setting email
        const setMailOption = (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .mailOption */ .hW)(dataPermohonan.email_pemohon, "Perubahan Status Permohonan Informasi", (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .TextPerubahanStatus */ .Wk)(dataPermohonan.tiket, dataPermohonan.email_pemohon, dataPermohonan.status_permohonan, dataPermohonan.no_registrasi, dataRespon.pesan));
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(setMailOption).then(async (resolve)=>{
            if (!resolve) {
                return res.status(400).json({
                    message: "Gagal Mengirim Ulang Email"
                });
            } else {
                if (dataRespon.mailed == 0) {
                    await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").where("id", respon_id).update({
                        mailed: 1
                    });
                }
                return res.json({
                    message: "Berhasil Mengirim Ulang Email",
                    type: "success"
                });
            }
        });
    } catch (err) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__/* ["default"].error */ .Z.error(err);
        return res.status(400).json({
            message: "Gagal Mengirim Ulang"
        });
    }
}).delete(async (req, res)=>{
    try {
        const { id , respon_id  } = req.query;
        const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("permohonan_respon").where("id", respon_id).first();
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)("./public/response", cek.file_informasi);
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)("./public/pemberitahuan", cek.file_surat_pemberitahuan);
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").where("id", respon_id).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__/* ["default"].error */ .Z.error(error);
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
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,8595,6954], () => (__webpack_exec__(7121)));
module.exports = __webpack_exports__;

})();