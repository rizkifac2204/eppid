"use strict";
(() => {
var exports = {};
exports.id = 4556;
exports.ids = [4556];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

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

/***/ 6293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var services_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6954);
/* harmony import */ var middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3800);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { id  } = req.query;
        const data = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select(`permohonan_respon.*`, `permohonan_respon_tolak.id as tolak_id`, `permohonan_respon_tolak.tanggal_ditolak`, `permohonan_respon_tolak.dasar_pengecualian`, `permohonan_respon_tolak.pada_pasal`, `permohonan_respon_tolak.ket_konsekuensi`).from("permohonan_respon").leftJoin(`permohonan_respon_tolak`, `permohonan_respon.id`, `permohonan_respon_tolak.respon_id`).where({
            permohonan_id: id
        });
        res.json(data);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        const { permohonan_id , email_pemohon , current_no_registrasi , no_registrasi , tiket , jenis_respon , status_permohonan , pesan , mailed , // final
        jangka_waktu , // diberikan / sebagian
        bentuk_fisik , ket_biaya , // sebagian
        penjelasan_penghitaman , // tidak dapat diberikan
        penguasaan_informasi , penguasaan_informasi_lain , dasar_pengecualian , pada_pasal , ket_konsekuensi  } = req.body;
        const tanggal = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_4__/* .buatCurTime */ .sh)();
        const badan_publik = penguasaan_informasi === "Bawaslu" ? penguasaan_informasi : penguasaan_informasi_lain;
        // cek nomor registrasi sama
        const cekRegNumber = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("no_registrasi", no_registrasi).whereNot("id", permohonan_id).first();
        var tolak_id = null;
        // Jika ada yang sama
        if (cekRegNumber) return res.status(400).json({
            message: "Nomor Registrasi yang anda masukan sudah terdaftar dalam sistem, silakan masukan nomor register pengganti"
        });
        // proses update nomor registrasi jika terjadi perubahan
        if (current_no_registrasi != no_registrasi) {
            await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("id", permohonan_id).update("no_registrasi", no_registrasi);
        }
        // proses update status permohonan terkait respon yang baru
        await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("id", permohonan_id).update("status_permohonan", status_permohonan);
        const dataForInsertRespon = {
            permohonan_id,
            jenis_respon,
            tanggal_respon: tanggal,
            pesan,
            penguasaan_informasi: status_permohonan === "Tidak Dapat Diberikan" ? "" : badan_publik,
            bentuk_fisik: status_permohonan === "Tidak Dapat Diberikan" ? "" : bentuk_fisik,
            ket_biaya: status_permohonan === "Tidak Dapat Diberikan" ? "" : ket_biaya,
            penjelasan_penghitaman: status_permohonan === "Diberikan Sebagian" ? penjelasan_penghitaman : "",
            jangka_waktu,
            mailed
        };
        // proses simpan respon
        const insert = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").insert(dataForInsertRespon);
        // failed
        if (!insert) return res.status(400).json({
            message: "Gagal Menginput Response"
        });
        // cek apakah Tidak Dapat Diberikan, kalau iya insert ke tabel penolakan
        if (status_permohonan === "Tidak Dapat Diberikan") {
            const insertTolak = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon_tolak").insert({
                respon_id: insert,
                tanggal_ditolak: tanggal,
                dasar_pengecualian,
                pada_pasal,
                ket_konsekuensi
            });
            // failed
            if (!insertTolak) {
                await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").where("id", insert).del();
                return res.status(400).json({
                    message: "Gagal Menginput Response Penolakan"
                });
            }
            tolak_id = insertTolak;
        }
        // setting email
        const setMailOption = (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .mailOption */ .hW)(email_pemohon, "Perubahan Status Permohonan Informasi", (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .TextPerubahanStatus */ .Wk)(tiket, email_pemohon, status_permohonan, no_registrasi, pesan));
        // jika harus kirim email
        if (mailed) {
            await (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(setMailOption).then(async (resolve)=>{
                if (!resolve) {
                    // ubah email tidak terkirim jika gagal
                    await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").where("id", insert).update({
                        mailed: 0
                    });
                }
            });
        }
        // data callback
        const dataCallback = {
            id: insert[0],
            permohonan_id,
            jenis_respon,
            tanggal_respon: tanggal,
            pesan,
            penguasaan_informasi: badan_publik,
            bentuk_fisik,
            ket_biaya,
            penjelasan_penghitaman,
            jangka_waktu,
            mailed,
            respon_id: insert,
            tanggal_ditolak: tanggal,
            dasar_pengecualian,
            pada_pasal,
            ket_konsekuensi,
            tolak_id
        };
        // success
        res.json({
            message: "Berhasil Memproses Response",
            dataCallback,
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,6954,3800], () => (__webpack_exec__(6293)));
module.exports = __webpack_exports__;

})();