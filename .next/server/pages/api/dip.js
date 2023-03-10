"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394];
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

/***/ 1159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6305);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
/* harmony import */ var services_UploadService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8595);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("dip.*", "bawaslu.nama_bawaslu", "divisi.nama_divisi").from("dip").leftJoin("bawaslu", "bawaslu.id", "dip.bawaslu_id").leftJoin("divisi", "divisi.id", "dip.divisi_id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "dip")).orderBy("dip.created_at", "desc");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).delete(async (req, res)=>{
    try {
        const arrID = req.body;
        // get detail untuk ambil nama file
        const cek = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("file", "bawaslu_id").from("dip").whereIn("id", arrID);
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("dip").whereIn("id", arrID).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        if (cek.length !== 0) {
            cek.map((item)=>{
                (0,services_UploadService__WEBPACK_IMPORTED_MODULE_3__/* .DeleteUpload */ ._0)(`./public/dip/${item.bawaslu_id}`, item.file);
            });
        }
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134,8595], () => (__webpack_exec__(1159)));
module.exports = __webpack_exports__;

})();