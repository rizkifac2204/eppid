"use strict";
exports.id = 8595;
exports.ids = [8595];
exports.modules = {

/***/ 8595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TD": () => (/* binding */ UploadPublic),
/* harmony export */   "Vb": () => (/* binding */ UploadFromExternal),
/* harmony export */   "_0": () => (/* binding */ DeleteUpload),
/* harmony export */   "gq": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);



const storage = ()=>{
    return multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({
        destination: (req, file, cb)=>{
            const dir = `./public/${req.headers.destinationfile}`;
            if (!fs__WEBPACK_IMPORTED_MODULE_1__.existsSync(dir)) fs__WEBPACK_IMPORTED_MODULE_1__.mkdirSync(dir);
            cb(null, dir);
        },
        filename: (req, file, cb)=>{
            cb(null, Date.now() + "-" + file.originalname);
        }
    });
};
const storageFromExternal = ()=>{
    return multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({
        destination: (req, file, cb)=>{
            const dir = `./public/upload`;
            if (!fs__WEBPACK_IMPORTED_MODULE_1__.existsSync(dir)) fs__WEBPACK_IMPORTED_MODULE_1__.mkdirSync(dir);
            cb(null, dir);
        },
        filename: (req, file, cb)=>{
            cb(null, Date.now() + "-" + file.originalname);
        }
    });
};
// saat ini belum dipakai karena mendukung semua file
const filterFile = (req, file, cb)=>{
    if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(new Error("Hanya JPG, JPEG dan PNG!"));
    }
};
const Upload = ()=>multer__WEBPACK_IMPORTED_MODULE_0___default()({
        storage: storage()
    });
const UploadPublic = ()=>multer__WEBPACK_IMPORTED_MODULE_0___default()({
        storage: storage(),
        fileFilter: filterFile,
        limits: {
            fileSize: 10485760
        }
    });
const UploadFromExternal = ()=>multer__WEBPACK_IMPORTED_MODULE_0___default()({
        storage: storageFromExternal(),
        fileFilter: filterFile,
        limits: {
            fileSize: 10485760
        }
    });
function prosesDelete(path, file) {
    if (fs__WEBPACK_IMPORTED_MODULE_1__.existsSync(path + "/" + file)) fs__WEBPACK_IMPORTED_MODULE_1__.unlinkSync(path + "/" + file);
}
const DeleteUpload = (path, files)=>{
    if (!files) return;
    try {
        if (typeof files === "object") {
            if (Array.isArray(files)) {
                files.forEach((v)=>{
                    if (typeof v === "object" && !Array.isArray(v) && v !== null) {
                        prosesDelete(path, v.filename);
                    } else {
                        prosesDelete(path, v);
                    }
                });
            } else {
                if (typeof files === "object" && !Array.isArray(files) && files !== null) {
                    prosesDelete(path, files.filename);
                } else {
                    prosesDelete(path, files);
                }
            }
        } else {
            prosesDelete(path, files);
        }
    } catch (err) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(err);
        throw err;
    }
};


/***/ })

};
;