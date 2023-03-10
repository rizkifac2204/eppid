"use strict";
(() => {
var exports = {};
exports.id = 8295;
exports.ids = [8295];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

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

/***/ 9220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var libs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5920);
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9733);
/* harmony import */ var middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6305);
/* harmony import */ var services_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function kirim(send, setMailOption, id) {
    if (send) {
        await (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(setMailOption).then(async (resolve)=>{
            if (!resolve) {
                // ubah email tidak terkirim jika gagal
                await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber_email").where("id", id).update({
                    status: 0,
                    sended_at: null
                });
                throw new Error("Email Tidak Terkirim, Menyimpan Ke Draft");
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().get(async (req, res)=>{
    const { status  } = req.query;
    const result = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("subscriber_email.*", "bawaslu.nama_bawaslu").from("subscriber_email").leftJoin("bawaslu", "bawaslu.id", "subscriber_email.bawaslu_id").modify((builder)=>(0,middlewares_Condition__WEBPACK_IMPORTED_MODULE_3__/* .conditionWillSpesific */ .EA)(libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, builder, req.session.user, "subscriber_email")).modify((builder)=>{
        if (status) builder.where("subscriber_email.status", status);
    }).orderBy("subscriber_email.created_at", "desc");
    res.json(result);
}).post(async (req, res)=>{
    const { level , bawaslu_id  } = req.session.user;
    const { id , penerima , subjek , isi , send  } = req.body;
    const sended_at = send ? new Date() : null;
    // persiapan value untuk kolom daftar penerima dan/atau list email
    var listIDPenerima = [];
    var listEmailPenerima = req.body.list_penerima;
    // cek siapa penerima
    // kalau select disiapkan List ID untuk kolom daftar_penerima
    // kalau all disiapkan List Email untuk kirim email
    if (penerima === "Select") {
        // klo select, cek kosong atau tidak
        if (listEmailPenerima.length === 0) return res.status(400).json({
            message: "Daftar Penerima Tidak Terdeteksi"
        });
        // jika ada, loop subscriber dan push id ke listIDPenerima
        const getIDSubscriber = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber").select("id").whereIn("email_subscriber", listEmailPenerima);
        getIDSubscriber.map((item)=>{
            listIDPenerima.push(item.id);
        });
    } else {
        // klo bukan select, maka langsung listIDPenerima null
        listIDPenerima = [];
        // dan buat list email untuk kirim
        const getEmailSubscriber = await libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].select */ .Z.select("email_subscriber").from("subscriber").modify((builder)=>{
            if (req.session.user.level === 1) {
                builder.where(`bawaslu_id`, "=", 0);
            }
            if (req.session.user.level === 2) {
                builder.where(`bawaslu_id`, "=", bawaslu_id);
            }
            if (req.session.user.level === 3) {
                builder.where(`bawaslu_id`, "=", bawaslu_id);
            }
        });
        getEmailSubscriber.map((item)=>{
            listEmailPenerima.push(item.email_subscriber);
        });
    }
    // setting email
    const setMailOption = (0,services_Email__WEBPACK_IMPORTED_MODULE_2__/* .mailOption */ .hW)(listEmailPenerima, subjek, isi);
    if (id) {
        // proses Edit
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber_email").where("id", id).update({
            bawaslu_id,
            penerima,
            daftar_penerima: listIDPenerima.length === 0 ? null : `${listIDPenerima}`,
            subjek,
            isi,
            status: send,
            sended_at
        });
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Memproses Data"
        });
        // jika harus kirim email
        await kirim(send, setMailOption, id);
    } else {
        // proses simpan
        const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber_email").insert([
            {
                bawaslu_id,
                penerima,
                daftar_penerima: listIDPenerima.length === 0 ? null : `${listIDPenerima}`,
                subjek,
                isi,
                status: send,
                sended_at
            }
        ]);
        // failed
        if (!proses) return res.status(400).json({
            message: "Gagal Memproses Data"
        });
        // jika harus kirim email
        await kirim(send, setMailOption, proses[0]);
    }
    // success
    res.json({
        message: "Berhasil Proses Data",
        type: "success"
    });
}).delete(async (req, res)=>{
    const arrID = req.body;
    const proses = await (0,libs_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("subscriber_email").whereIn("id", arrID).del();
    if (!proses) return res.status(400).json({
        message: "Gagal Hapus"
    });
    res.json({
        message: "Sukses Menghapus Data Terpilih",
        type: "success"
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733,2134,6954], () => (__webpack_exec__(9220)));
module.exports = __webpack_exports__;

})();