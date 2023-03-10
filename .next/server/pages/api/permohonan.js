"use strict";
(() => {
var exports = {};
exports.id = 1838;
exports.ids = [1838];
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

/***/ 135:
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
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan.*", "pemohon.*", "bawaslu.nama_bawaslu", "bawaslu.level_bawaslu", "provinsi.provinsi").from("permohonan").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").leftJoin("provinsi", "provinsi.id", "bawaslu.provinsi_id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).whereNull("permohonan.deleted_at").orderBy("permohonan.created_at", "desc");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        const { level , bawaslu_id  } = req.session.user;
        const { no_registrasi , tanggal_permohonan , platform , nama_pemohon , pekerjaan_pemohon , pendidikan_pemohon , telp_pemohon , email_pemohon , alamat_pemohon , rincian , tujuan , cara_dapat , cara_terima , status_permohonan , jenis_respon , // finall
        jangka_waktu , // diberikan / sebagian
        bentuk_fisik , ket_biaya , // sebagian
        penjelasan_penghitaman , // tidak dapat diberikan
        penguasaan_informasi , penguasaan_informasi_lain , dasar_pengecualian , pada_pasal , ket_konsekuensi  } = req.body;
        const tiket = (0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .buatTiketByAdmin */ .Fl)(6, level, bawaslu_id);
        const badan_publik = penguasaan_informasi === "Bawaslu" ? penguasaan_informasi : penguasaan_informasi_lain;
        // cek reg number sama
        const cek = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("no_registrasi", no_registrasi).first();
        // Jika ada yang sama
        if (cek) return res.status(400).json({
            message: "Nomor Registrasi yang anda masukan sudah terdaftar dalam sistem, silakan masukan nomor register pengganti"
        });
        // proses manajemen data pemohon
        const cekDataPemohon = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").where({
            email_pemohon: email_pemohon
        }).first();
        if (cekDataPemohon) {
            // proses update
            const update = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").where({
                email_pemohon: email_pemohon
            }).update({
                nama_pemohon,
                telp_pemohon,
                pekerjaan_pemohon,
                pendidikan_pemohon,
                alamat_pemohon
            });
            // failed
            if (!update) return res.status(400).json({
                message: "Gagal Proses Input Pemohon"
            });
        } else {
            // proses simpan
            const simpan = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").insert({
                email_pemohon,
                nama_pemohon,
                telp_pemohon,
                pendidikan_pemohon,
                pekerjaan_pemohon,
                alamat_pemohon
            });
            // failed
            if (!simpan) return res.status(400).json({
                message: "Gagal Menyimpan Data Pemohon"
            });
        }
        // proses simpan permohonan
        const dataForInsertPermohonan = {
            bawaslu_id,
            email_pemohon,
            tiket,
            no_registrasi,
            tanggal_permohonan,
            platform,
            rincian,
            tujuan,
            cara_terima,
            cara_dapat,
            status_permohonan
        };
        const prosesInsertPermohonan = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").insert(dataForInsertPermohonan);
        // failed
        if (!prosesInsertPermohonan) return res.status(400).json({
            message: "Gagal Memasukan Data"
        });
        // proses simpan Respon
        const dataForInsertRespon = {
            permohonan_id: prosesInsertPermohonan,
            jenis_respon,
            tanggal_respon: tanggal_permohonan,
            penguasaan_informasi: status_permohonan === "Tidak Dapat Diberikan" ? badan_publik : "",
            bentuk_fisik: status_permohonan === "Tidak Dapat Diberikan" ? "" : bentuk_fisik,
            ket_biaya: status_permohonan === "Tidak Dapat Diberikan" ? "" : ket_biaya,
            penjelasan_penghitaman: status_permohonan === "Diberikan Sebagian" ? penjelasan_penghitaman : "",
            jangka_waktu,
            mailed: false
        };
        const prosesInsertRespon = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").insert(dataForInsertRespon);
        // failed
        if (!prosesInsertRespon) {
            await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("id", prosesInsertPermohonan).del();
            return res.status(400).json({
                message: "Gagal Menginput Response"
            });
        }
        // cek apakah Tidak Dapat Diberikan, kalau iya insert ke tabel penolakan
        if (status_permohonan === "Tidak Dapat Diberikan") {
            const insertTolak = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon_tolak").insert({
                respon_id: prosesInsertRespon,
                tanggal_ditolak: tanggal_permohonan,
                dasar_pengecualian,
                pada_pasal,
                ket_konsekuensi
            });
            // failed
            if (!insertTolak) {
                await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan_respon").where("id", prosesInsertRespon).del();
                return res.status(400).json({
                    message: "Gagal Menginput Response Penolakan"
                });
            }
        }
        // success
        res.json({
            message: "Berhasil Menginput Data",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).delete(async (req, res)=>{
    try {
        const arrID = req.body;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").whereIn("id", arrID).update("deleted_at", libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fn.now */ .Z.fn.now());
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Memindahkan Ke Sampah",
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134], () => (__webpack_exec__(135)));
module.exports = __webpack_exports__;

})();