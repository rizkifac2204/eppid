"use strict";
(() => {
var exports = {};
exports.id = 4930;
exports.ids = [4930];
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

/***/ 6691:
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




function filter(builder, f, table) {
    if (f.tahun) builder.whereRaw(`YEAR(${table}.created_at) = ?`, [
        f.tahun
    ]);
    if (f.unit) builder.whereRaw(`bawaslu.level_bawaslu = ?`, [
        f.unit
    ]);
    if (f.prov && !f.kab) {
        builder.whereRaw(`${table}.bawaslu_id = ?`, [
            f.prov
        ]);
    }
    if (f.prov && f.kab) {
        builder.whereRaw(`${table}.bawaslu_id = ?`, [
            f.kab
        ]);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { chart  } = req.query;
        if (chart === "jumlahpermohonan") {
            const result = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").count("permohonan.id", {
                as: "value"
            }).select(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].raw */ .Z.raw("DATE_FORMAT(permohonan.tanggal_permohonan, '%M %Y') AS label"), "bawaslu.level_bawaslu").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").whereNull("permohonan.deleted_at").modify((builder)=>filter(builder, req.query, "permohonan")).modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).groupBy(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].raw */ .Z.raw("YEAR(permohonan.tanggal_permohonan), MONTH(permohonan.tanggal_permohonan)"));
            return res.json(result);
        }
        if (chart === "latarbelakang") {
            const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("pemohon").count("pemohon.email_pemohon", {
                as: "value"
            }).select(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].raw */ .Z.raw("pemohon.pekerjaan_pemohon AS text"), "bawaslu.level_bawaslu").innerJoin("permohonan", "permohonan.email_pemohon", "pemohon.email_pemohon").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").whereNull("permohonan.deleted_at").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).modify((builder)=>filter(builder, req.query, "permohonan")).groupBy("text");
            return res.json(result);
        }
        if (chart === "status") {
            const result = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").count("permohonan.id", {
                as: "value"
            }).select({
                label: "status_permohonan"
            }, "bawaslu.level_bawaslu").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").whereNull("permohonan.deleted_at").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).modify((builder)=>filter(builder, req.query, "permohonan")).groupBy("label");
            return res.json(result);
        }
        if (chart === "platform") {
            const result = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("permohonan").count("permohonan.id", {
                as: "value"
            }).select({
                label: "platform"
            }, "bawaslu.level_bawaslu").innerJoin("bawaslu", "permohonan.bawaslu_id", "bawaslu.id").whereNull("permohonan.deleted_at").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).modify((builder)=>filter(builder, req.query, "permohonan")).groupBy("label");
            return res.json(result);
        }
        res.json({
            message: "Not Body Query Detected"
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134], () => (__webpack_exec__(6691)));
module.exports = __webpack_exports__;

})();