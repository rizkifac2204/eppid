"use strict";
(() => {
var exports = {};
exports.id = 6751;
exports.ids = [6751];
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

/***/ 9030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    const { id  } = req.query;
    const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("subscriber_email.*", "bawaslu.nama_bawaslu").from("subscriber_email").leftJoin("bawaslu", "bawaslu.id", "subscriber_email.bawaslu_id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_2__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "subscriber_email")).where("subscriber_email.id", id).first();
    if (!result) return res.status(404).json({
        message: "Tidak Ditemukan"
    });
    if (result.penerima === "Select") {
        const arrID = result.daftar_penerima.split(",");
        const listPenerima = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("*").from("subscriber").whereIn("id", arrID).orderBy("email_subscriber", "asc");
        result.listPenerima = listPenerima;
    }
    res.json(result);
}).delete(async (req, res)=>{
    const { id  } = req.query;
    const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber_email").where("id", id).del();
    if (!proses) return res.status(400).json({
        message: "Gagal Hapus"
    });
    res.json({
        message: "Berhasil Hapus",
        type: "success"
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134], () => (__webpack_exec__(9030)));
module.exports = __webpack_exports__;

})();