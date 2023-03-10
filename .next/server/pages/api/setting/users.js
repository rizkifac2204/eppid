"use strict";
(() => {
var exports = {};
exports.id = 4717;
exports.ids = [4717];
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

/***/ 7400:
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





function capitalizeFirstLetter(words) {
    var separateWord = words.toLowerCase().split(" ");
    for(var i = 0; i < separateWord.length; i++){
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    let fullWords = separateWord.join(" ");
    let modifiedWord = fullWords.replace("Kab.", "Kabupaten");
    return modifiedWord;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("admin.*", "bawaslu.level_bawaslu", "bawaslu.nama_bawaslu", "level.level", "provinsi.provinsi", libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].raw */ .Z.raw(`IF(${req.session.user.level} < bawaslu.level_bawaslu, true, false) as editable,
          IF(${req.session.user.id} = admin.id, true, false) as myself`)).from("admin").innerJoin("bawaslu", "admin.bawaslu_id", "bawaslu.id").innerJoin("level", "bawaslu.level_bawaslu", "level.id").leftJoin("provinsi", "bawaslu.provinsi_id", "provinsi.id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_4__/* .conditionFilterUser */ .PV)(builder, req.session.user)).orderBy("bawaslu.level_bawaslu").whereNull("admin.deleted_at");
        res.json(result);
    } catch (error) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(error);
        res.status(500).json({
            message: "Terjadi Kesalahan..."
        });
    }
}).post(async (req, res)=>{
    try {
        const { level_bawaslu , nama_admin , telp_admin , email_admin , alamat_admin , username , password  } = req.body;
        var bawaslu_id;
        var provinsi_id = req.body.provinsi_id;
        var kabkota_id = req.body.kabkota_id;
        var nama_bawaslu;
        // validasi (double cek)
        if (level_bawaslu == 1) {
            var bawaslu_id = 0;
        }
        if (level_bawaslu === 2) {
            if (!provinsi_id) return res.status(400).json({
                message: "Provinsi Harus Diisi",
                type: "error"
            });
            var bawaslu_id = provinsi_id;
        }
        if (level_bawaslu === 3) {
            if (!kabkota_id) return res.status(400).json({
                message: "Kabupaten/Kota Harus Diisi",
                type: "error"
            });
            var bawaslu_id = kabkota_id;
        }
        // cek data login sama
        const cek = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").where("username", username).first();
        // Jika ada yang sama
        if (cek) return res.status(400).json({
            message: "Mohon Ganti Username Pengganti",
            type: "error"
        });
        const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().genSaltSync(10);
        const hash = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hashSync(password, salt);
        // AMBIL NAMA KABUPATEN/PROVINSI UNTUK DATA BAWASLU
        if (level_bawaslu == 1) {
            var nama_bawaslu = "Bawaslu Republik Indonesia";
        }
        if (level_bawaslu == 2) {
            const getNamaBawaslu = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("provinsi").from("provinsi").where("id", bawaslu_id).first();
            var nama_bawaslu = capitalizeFirstLetter("Bawaslu " + getNamaBawaslu.provinsi);
        }
        if (level_bawaslu == 3) {
            const getNamaBawaslu = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("kabkota").from("kabkota").where("id", bawaslu_id).first();
            var nama_bawaslu = capitalizeFirstLetter("Bawaslu " + getNamaBawaslu.kabkota);
        }
        // proses insert data bawaslu jika belum ada
        const cekDataBawaslu = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").where("id", bawaslu_id).first();
        if (!cekDataBawaslu) {
            const insertDataBawaslu = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("bawaslu").insert([
                {
                    id: bawaslu_id,
                    provinsi_id: provinsi_id,
                    level_bawaslu: level_bawaslu,
                    nama_bawaslu
                }
            ]);
            // failed
            if (!insertDataBawaslu) return res.status(400).json({
                message: "Terjadi Kesalahan Sistem Memasukan Data Bawaslu"
            });
        }
        // proses simpan user/admin
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").insert([
            {
                bawaslu_id,
                nama_admin,
                telp_admin,
                email_admin,
                alamat_admin,
                username,
                password: hash,
                valid: 1,
                login: 0
            }
        ]);
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Memasukan Data"
        });
        // success
        res.json({
            message: "Berhasil Menginput User",
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
        const arrID = req.body;
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("admin").whereIn("id", arrID).del();
        if (!proses) return res.status(400).json({
            message: "Gagal Hapus"
        });
        res.json({
            message: "Berhasil Menghapus Data",
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134], () => (__webpack_exec__(7400)));
module.exports = __webpack_exports__;

})();