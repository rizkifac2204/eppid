"use strict";
(() => {
var exports = {};
exports.id = 3060;
exports.ids = [3060];
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

/***/ 8869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8595);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post((0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .Upload */ .gq)().single("file"), async (req, res)=>{
    try {
        if (!req.file) return res.status(400).json({
            message: "Terjadi Kesalahan, File Upload Tidak Ditemukan",
            type: "error"
        });
        const { filename  } = req.file;
        const { kategori_id , nomor , judul , tentang  } = req.body;
        // hanya admin yang boleh input
        if (req.session.user.level !== 1) {
            (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/regulasi", filename);
            return res.status(401).json({
                message: "Anda Tidak Diizinkan Melakukan Aksi ini"
            });
        }
        const dataForInsert = {
            kategori_id,
            nomor,
            judul,
            tentang,
            berkas: filename
        };
        const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("*").from("regulasi").where("kategori_id", kategori_id).andWhere("nomor", nomor);
        if (cek.length !== 0) {
            (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/regulasi", filename);
            return res.status(400).json({
                message: `Nomor ${nomor} pada kategori tersebut sudah terdata`
            });
        }
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("regulasi").insert(dataForInsert);
        // failed
        if (!proses) {
            (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/regulasi", filename);
            return res.status(400).json({
                message: "Gagal memproses data"
            });
        }
        res.json({
            file: filename,
            message: "Berhasil menyimpan data Regulasi"
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,8595], () => (__webpack_exec__(8869)));
module.exports = __webpack_exports__;

})();