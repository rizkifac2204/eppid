"use strict";
(() => {
var exports = {};
exports.id = 2709;
exports.ids = [2709];
exports.modules = {

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1536);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8595);
/* harmony import */ var middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3800);
/* harmony import */ var services_Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6954);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const fs = __webpack_require__(7147);
// const sharp = require("sharp");

const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post((0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .UploadPublic */ .TD)().single("file"), async (req, res)=>{
    try {
        // jika tidak ada identitas atau jika ada nama tapi tidak ada file
        if (!req.file) {
            if (!req.body.identitas_pemohon) return res.status(400).json({
                message: "File Identitas Tidak Ditemukan atau Tidak Sesuai",
                type: "error"
            });
            if (!fs.existsSync("./public/upload/" + req.body.identitas_pemohon)) return res.status(400).json({
                message: "File identitas Harus Upload Ulang",
                type: "error"
            });
        }
        const filename = req.file ? req.file.filename : req.body.identitas_pemohon;
        const { kepada , id_prov , id_kabkota , email_pemohon , nama_pemohon , telp_pemohon , pekerjaan_pemohon , pendidikan_pemohon , alamat_pemohon , rincian , tujuan , cara_terima , cara_dapat  } = req.body;
        const platform = "Website";
        const status_permohonan = "Proses";
        const tiket = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_5__/* .buatTiket */ .th)(6, kepada, id_prov, id_kabkota);
        const tanggal_permohonan = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_5__/* .buatCurTime */ .sh)();
        const bawaslu_id = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_5__/* .buatIDWill */ .bm)(kepada, id_prov, id_kabkota);
        const dataForInsertPermohonan = {
            bawaslu_id,
            email_pemohon,
            tiket,
            tanggal_permohonan,
            platform,
            rincian,
            tujuan,
            cara_terima,
            cara_dapat,
            status_permohonan
        };
        const dataForInsertPemohon = {
            email_pemohon,
            nama_pemohon,
            telp_pemohon,
            pekerjaan_pemohon,
            pendidikan_pemohon,
            alamat_pemohon,
            identitas_pemohon: filename
        };
        // setting email untuk admin
        const getEmailBawaslu = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").where("id", bawaslu_id).first();
        const emailadmintujuan = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_5__/* .emailAdmin */ ._w)(kepada, getEmailBawaslu.email_bawaslu);
        const setMailOptionAdmin = (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* .mailOption */ .hW)(emailadmintujuan, "Permohonan Informasi Baru", (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* .TextPermohonanBaruKepadaAdmin */ .A_)(tiket, email_pemohon));
        // setting email untuk pemohon
        const setMailOptionPemohon = (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* .mailOption */ .hW)(email_pemohon, "Permohonan Informasi PPID Bawaslu", (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* .TextPermohonanBaruKepadaPemohon */ ._e)(tiket, email_pemohon));
        // proses simpan data pemohon
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
                alamat_pemohon,
                identitas_pemohon: filename
            });
            // failed
            if (!update) {
                // gagal update hapus file baru
                if (req.file) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)(req.file.destination, filename);
                return res.status(400).json({
                    message: "Gagal Proses Input Pemohon"
                });
            }
            // berhasil update hapus file lama jika upload
            if (req.file) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)(req.file.destination, cekDataPemohon.identitas_pemohon);
        } else {
            // proses simpan
            const simpan = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").insert(dataForInsertPemohon);
            // failed
            if (!simpan) {
                // batal simpan
                if (req.file) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)(req.file.destination, filename);
                return res.status(400).json({
                    message: "Gagal Menyimpan Data Pemohon"
                });
            }
        }
        // prepare data for callback
        const currentData = {
            ...dataForInsertPermohonan,
            ...dataForInsertPemohon
        };
        // proses simpan
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").insert(dataForInsertPermohonan);
        // failed
        if (!proses) {
            return res.status(400).json({
                message: "Gagal Mengirim Permohonan"
            });
        }
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(setMailOptionAdmin);
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(setMailOptionPemohon);
        // success
        res.json({
            message: "Berhasil Mengirim Permohonan",
            currentData,
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_4__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Mengirim Permohonan Informasi, Kesalahan Server"
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,8595,6954,3800], () => (__webpack_exec__(356)));
module.exports = __webpack_exports__;

})();