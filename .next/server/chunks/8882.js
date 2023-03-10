"use strict";
exports.id = 8882;
exports.ids = [8882];
exports.modules = {

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

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_w": () => (/* binding */ emailAdmin),
/* harmony export */   "bm": () => (/* binding */ buatIDWill),
/* harmony export */   "sh": () => (/* binding */ buatCurTime),
/* harmony export */   "th": () => (/* binding */ buatTiket)
/* harmony export */ });
const buatTiket = (length, kepada, id_prov, id_kabkot)=>{
    var firstCode = "";
    var result = "";
    var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (kepada === "Bawaslu Provinsi") {
        firstCode = id_prov;
    } else if (kepada === "Bawaslu") {
        firstCode = id_kabkot;
    } else {
        firstCode = "01";
    }
    return firstCode + "-" + result;
};
const buatCurTime = ()=>{
    var d = new Date(), dformat = [
        d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()
    ].join("-") + " " + [
        d.getHours(),
        d.getMinutes(),
        d.getSeconds()
    ].join(":");
    return d;
};
const buatIDWill = (kepada, id_prov, id_kabkot)=>{
    var id_will = "";
    if (kepada === "Bawaslu Republik Indonesia") {
        id_will = 0;
    } else if (kepada === "Bawaslu Provinsi") {
        id_will = id_prov;
    } else {
        id_will = id_kabkot;
    }
    return id_will;
};
function emailAdmin(kepada, email) {
    var email_master = process.env.EMAIL_MASTER ? process.env.EMAIL_MASTER : process.env.EMAIL_USER;
    if (kepada === "Bawaslu Republik Indonesia") return email_master;
    return email ? email : email_master;
}


/***/ })

};
;