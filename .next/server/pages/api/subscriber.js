"use strict";
(() => {
var exports = {};
exports.id = 6137;
exports.ids = [6137];
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

/***/ 9550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// khusus subscriber instansi masing2
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("subscriber.*", "bawaslu.nama_bawaslu").from("subscriber").leftJoin("bawaslu", "bawaslu.id", "subscriber.bawaslu_id").modify((builder)=>{
            if (req.session.user.level === 1) {
                builder.where(`subscriber.bawaslu_id`, "=", `0`);
            }
            if (req.session.user.level === 2) {
                builder.where(`subscriber.bawaslu_id`, "=", `${req.session.user.bawaslu_id}`);
            }
            if (req.session.user.level === 3) {
                builder.where(`subscriber.bawaslu_id`, "=", req.session.user.bawaslu_id);
            }
        }).orderBy("subscriber.created_at", "desc");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        const { bawaslu_id  } = req.session.user;
        const { nama_subscriber , email_subscriber  } = req.body;
        // proses simpan
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber").insert([
            {
                nama_subscriber,
                email_subscriber,
                bawaslu_id
            }
        ]);
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Memasukan Data"
        });
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
})// delete one by one
.put(async (req, res)=>{
    try {
        const { id  } = req.body;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber").where("id", id).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
})// proses hapus data terpilih
.delete(async (req, res)=>{
    try {
        const arrID = req.body;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber").whereIn("id", arrID).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Sukses Menghapus Data Terpilih",
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733], () => (__webpack_exec__(9550)));
module.exports = __webpack_exports__;

})();