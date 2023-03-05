"use strict";
(() => {
var exports = {};
exports.id = 3061;
exports.ids = [3061];
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

/***/ 7595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6305);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8595);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("permohonan.*", "pemohon.*", "bawaslu.nama_bawaslu", "bawaslu.level_bawaslu", "provinsi.provinsi").from("permohonan").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").innerJoin("pemohon", "pemohon.email_pemohon", "permohonan.email_pemohon").leftJoin("provinsi", "provinsi.id", "bawaslu.provinsi_id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).whereNotNull("permohonan.deleted_at").orderBy("permohonan.created_at", "desc");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).put(async (req, res)=>{
    try {
        const { id  } = req.body;
        // proses
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("id", id).update("deleted_at", null);
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Proses Data"
        });
        // success
        res.json({
            message: "Berhasil Mengembalikan Data",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
})// delete one by one
.post(async (req, res)=>{
    const { id  } = req.body;
    const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("file_surat_pemberitahuan", "file_informasi").from("permohonan_respon").where("permohonan_id", id);
    const fileIndormasis = cek.map(function(value) {
        return value.file_informasi;
    });
    const fileSuratPemberitahuans = cek.map(function(value) {
        return value.file_surat_pemberitahuan;
    });
    // proses
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").where("id", id).del();
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus Data"
        });
        // Hapus semua file
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/response", fileIndormasis);
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/pemberitahuan", fileSuratPemberitahuans);
        // success
        res.json({
            message: "Berhasil Hapus Data",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Hapus Permohonan Informasi"
        });
    }
})// delete selected
.delete(async (req, res)=>{
    const { id  } = req.body;
    // get detail untuk ambil nama file surat pemberitahuan dan file response
    const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("file_surat_pemberitahuan", "file_informasi").from("permohonan_respon").whereIn("permohonan_id", id);
    const fileIndormasis = cek.map(function(value) {
        return value.file_informasi;
    });
    const fileSuratPemberitahuans = cek.map(function(value) {
        return value.file_surat_pemberitahuan;
    });
    // proses
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").whereIn("id", id).del();
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus Data"
        });
        // Hapus semua file
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/response", fileIndormasis);
        (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/pemberitahuan", fileSuratPemberitahuans);
        // success
        res.json({
            message: "Berhasil Hapus Data",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Hapus Permohonan Informasi"
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,6305,8595], () => (__webpack_exec__(7595)));
module.exports = __webpack_exports__;

})();