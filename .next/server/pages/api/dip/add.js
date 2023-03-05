"use strict";
(() => {
var exports = {};
exports.id = 7466;
exports.ids = [7466];
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

/***/ 6722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post((0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .Upload */ .gq)().single("file"), async (req, res)=>{
    try {
        const { bawaslu_id  } = req.session.user;
        const { sifat , jenis_informasi , ringkasan , tahun_pembuatan , penanggung_jawab , bentuk_informasi  } = req.body;
        if (!req.file) return res.status(400).json({
            message: "Sisipkan link atau upload",
            type: "error"
        });
        const filename = req.file ? req.file.filename : null;
        const dataForInsert = {
            bawaslu_id,
            sifat,
            jenis_informasi,
            ringkasan,
            tahun_pembuatan,
            penanggung_jawab,
            bentuk_informasi,
            file: filename
        };
        // proses simpan
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("dip").insert(dataForInsert);
        // failed
        if (!proses) {
            if (req.file) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)(req.file.destination, req.file);
            return res.status(400).json({
                message: "Gagal Memasukan Data"
            });
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
}).put((0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .Upload */ .gq)().single("file"), async (req, res)=>{
    try {
        const { id , bawaslu_id , sifat , jenis_informasi , ringkasan , tahun_pembuatan , penanggung_jawab , bentuk_informasi , nama_file , ganti_file  } = req.body;
        if (!req.file && !nama_file) return res.status(400).json({
            message: "Sisipkan link atau upload",
            type: "error"
        });
        const filename = req.file ? req.file.filename : nama_file === "null" ? null : nama_file;
        const dataForEdit = {
            sifat,
            jenis_informasi,
            ringkasan,
            tahun_pembuatan,
            penanggung_jawab,
            bentuk_informasi,
            file: filename
        };
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("dip").where("id", id).update(dataForEdit);
        // failed
        if (!proses) {
            if (req.file) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)(req.file.destination, req.file);
            return res.status(400).json({
                message: "Gagal Memasukan Data"
            });
        }
        // success
        if (proses) {
            if (ganti_file == "true") (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)(`./public/dip/${bawaslu_id}`, nama_file);
        }
        res.json({
            message: "Berhasil Edit Data",
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,8595], () => (__webpack_exec__(6722)));
module.exports = __webpack_exports__;

})();