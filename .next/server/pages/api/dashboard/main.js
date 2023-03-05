"use strict";
(() => {
var exports = {};
exports.id = 5565;
exports.ids = [5565];
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

/***/ 7306:
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
        // ambil jumlah user
        const user = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("admin").count("id", {
            as: "jumlah"
        }).modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionFilterUser */ .PV)(builder, req.session.user)).first();
        // ambil jumlah permohonan
        const permohonan = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("permohonan").count("id", {
            as: "jumlah"
        }).whereNull("deleted_at").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).first();
        // ambil jumlah survey
        const survey = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("survey").count("id", {
            as: "jumlah"
        }).modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "survey")).first();
        // ambil jumlah keberatan
        const keberatan = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("permohonan_keberatan").count("permohonan_keberatan.id", {
            as: "jumlah"
        }).innerJoin("permohonan", "permohonan_keberatan.permohonan_id", "permohonan.id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "permohonan")).first();
        // ambil jumlah DIP
        const dip = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].from */ .Z.from("dip").count("id", {
            as: "jumlah"
        }).whereNull("deleted_at").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "dip")).first();
        // return hasil
        res.json({
            message: "Succes",
            tingkat: (0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .labelTingkat */ .dC)(req.session.user.level),
            jumlahUser: user.jumlah,
            jumlahPermohonan: permohonan.jumlah,
            jumlahSurvey: survey.jumlah,
            jumlahKeberatan: keberatan.jumlah,
            jumlahDip: dip.jumlah
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,6305], () => (__webpack_exec__(7306)));
module.exports = __webpack_exports__;

})();