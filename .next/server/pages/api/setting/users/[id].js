"use strict";
(() => {
var exports = {};
exports.id = 2644;
exports.ids = [2644];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 1099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6305);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const { id  } = req.query;
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("admin.*", "bawaslu.level_bawaslu", "bawaslu.nama_bawaslu", "level.level", "provinsi.provinsi", libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].raw */ .Z.raw(`IF(${req.session.user.level} < bawaslu.level_bawaslu, true, false) as editable,
          IF(${req.session.user.id} = admin.id, true, false) as myself`)).from("admin").innerJoin("bawaslu", "admin.bawaslu_id", "bawaslu.id").innerJoin("level", "bawaslu.level_bawaslu", "level.id").leftJoin("provinsi", "bawaslu.provinsi_id", "provinsi.id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__/* .conditionFilterUser */ .PV)(builder, req.session.user)).orderBy("bawaslu.level_bawaslu").where("admin.id", id).first();
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).put(async (req, res)=>{
    try {
        const { id , nama_admin , telp_admin , email_admin , alamat_admin , username , passwordBaru  } = req.body;
        // cek reg number sama
        const cek = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").where("username", username).whereNot("id", id).first();
        // Jika ada yang sama
        if (cek) return res.status(400).json({
            message: "Mohon Ganti Username Pengganti",
            type: "error"
        });
        const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(10);
        const hashPasswordBaru = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hashSync(passwordBaru, salt);
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").where("id", id).update({
            nama_admin,
            telp_admin,
            email_admin,
            alamat_admin,
            username,
            password: hashPasswordBaru,
            updated_at: libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fn.now */ .Z.fn.now()
        });
        // failed
        if (!proses) return req.status(400).json({
            message: "Gagal Proses"
        });
        res.json({
            message: "Berhasil Edit User",
            type: "success"
        });
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).delete(async (req, res)=>{
    try {
        const { id  } = req.query;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").where("id", id).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Hapus",
            type: "success"
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,2679,6305], () => (__webpack_exec__(1099)));
module.exports = __webpack_exports__;

})();