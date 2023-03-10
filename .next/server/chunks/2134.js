"use strict";
exports.id = 2134;
exports.ids = [2134];
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

/***/ 6305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EA": () => (/* binding */ conditionWillSpesific),
/* harmony export */   "Fl": () => (/* binding */ buatTiketByAdmin),
/* harmony export */   "PV": () => (/* binding */ conditionFilterUser),
/* harmony export */   "dC": () => (/* binding */ labelTingkat)
/* harmony export */ });
const labelTingkat = (level)=>{
    if (level === 1) return "Se-Nasional";
    if (level === 2) return "Se-Provinsi";
    if (level === 3) return "Se-Kabupaten/Kota";
    return null;
};
const conditionFilterUser = (builder, user)=>{
    if (user.level === 1) {
    // skip untuk semua
    }
    if (user.level === 2) {
        builder.where("admin.bawaslu_id", "like", `${user.bawaslu_id}%`);
    }
    if (user.level === 3) {
        builder.where("admin.bawaslu_id", user.bawaslu_id);
    }
};
const conditionWillSpesific = (db, builder, user, table)=>{
    if (user.level === 1) {
    // skip untuk semua
    }
    if (user.level === 2) {
        builder.where(`${table}.bawaslu_id`, "like", `${user.bawaslu_id}%`);
    }
    if (user.level === 3) {
        builder.where(`${table}.bawaslu_id`, "=", user.bawaslu_id);
    }
};
const buatTiketByAdmin = (length, level, bawaslu_id)=>{
    var firstCode = "";
    var result = "";
    var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (level !== 1) {
        firstCode = bawaslu_id;
    } else {
        firstCode = "01";
    }
    return firstCode + "-" + result;
};


/***/ })

};
;