"use strict";
(() => {
var exports = {};
exports.id = 5747;
exports.ids = [5747];
exports.modules = {

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1743:
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
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// const fs = require("fs"); // import * as fs from "fs";
// const path = require("path");
// const sharp = require("sharp");

const config = {
    api: {
        bodyParser: false
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    res.json({
        message: "available / accepted",
        type: "success"
    });
}).post((0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .UploadFromExternal */ .Vb)().single("file"), async (req, res)=>{
    try {
        // cek if upload
        if (!req.file) return res.status(400).json({
            message: "File Identitas Tidak Ditemukan atau Tidak Sesuai",
            type: "error"
        });
        // // kompress belum digunakan
        // if (req.file) {
        //   await sharp(req.file.path)
        //     .resize({ width: 500 })
        //     .jpeg({ quality: 90 })
        //     .toFile(
        //       path.resolve(req.file.destination, `${req.file.filename}`)
        //     );
        //   fs.unlinkSync(req.file.path);
        // }
        // get data
        const { email  } = req.body;
        const filename = req.file ? `${req.file.filename}` : null;
        if (!email) {
            (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/upload", filename);
            return res.status(400).json({
                message: `Email Tidak Terdeteksi`,
                type: "error"
            });
        }
        // cek data user
        const cekDataPemohon = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").where({
            email_pemohon: email
        }).first();
        // if user not found
        if (!cekDataPemohon) return res.status(400).json({
            message: `User Dengan Email ${email} Tidak Ditemukan`,
            type: "error"
        });
        // proses update
        const update = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("pemohon").where({
            email_pemohon: email
        }).update({
            identitas_pemohon: filename
        });
        // jika gagal, hapus file upload dan return response
        if (!update) {
            (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/upload", filename);
            return res.status(400).json({
                message: "Gagal Proses",
                type: "error"
            });
        }
        // jika berhasil, hapus file lama
        if (update) (0,services_UploadService__WEBPACK_IMPORTED_MODULE_2__/* .DeleteUpload */ ._0)("./public/upload", cekDataPemohon.identitas_pemohon);
        res.json({
            message: "Berhasil Upload",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Terjadi Kesalahan Tak Terduga",
            type: "error"
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,8595], () => (__webpack_exec__(1743)));
module.exports = __webpack_exports__;

})();