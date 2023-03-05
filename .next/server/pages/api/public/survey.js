"use strict";
(() => {
var exports = {};
exports.id = 5460;
exports.ids = [5460];
exports.modules = {

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

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 8205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1536);
/* harmony import */ var middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3800);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_PublicHandler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().post(async (req, res)=>{
    const { kepada , id_prov , id_kabkota , nama_pemohon , jenis_kelamin_pemohon , pendidikan_pemohon , email_pemohon , pekerjaan_pemohon , alamat_pemohon , q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9 , q10 , saran  } = req.body;
    const bawaslu_id = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_3__/* .buatIDWill */ .bm)(kepada, id_prov, id_kabkota);
    const tanggal_survey = (0,middlewares_PublicCondition__WEBPACK_IMPORTED_MODULE_3__/* .buatCurTime */ .sh)();
    const dataForInsertSurvey = {
        bawaslu_id,
        email_pemohon,
        tanggal_survey,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        saran
    };
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
            pekerjaan_pemohon,
            jenis_kelamin_pemohon,
            pendidikan_pemohon,
            alamat_pemohon
        });
        // failed
        if (!update) return res.status(400).json({
            message: "Gagal Proses Input Pemohon"
        });
    } else {
        return res.status(400).json({
            message: "Anda Belum Pernah Melakukan Permohonan Informasi"
        });
    }
    // proses simpan
    try {
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("survey").insert(dataForInsertSurvey);
        // failed
        if (!proses) {
            return res.status(400).json({
                message: "Gagal Mengirim Survey"
            });
        }
        // success
        res.json({
            message: "Berhasil Mengirim Survey",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        return res.status(400).json({
            message: "Gagal Mengirim Survey"
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,3800], () => (__webpack_exec__(8205)));
module.exports = __webpack_exports__;

})();