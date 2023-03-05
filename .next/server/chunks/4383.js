"use strict";
exports.id = 4383;
exports.ids = [4383];
exports.modules = {

/***/ 4383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7773);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
/* harmony import */ var winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston_daily_rotate_file__WEBPACK_IMPORTED_MODULE_1__);


const getLogger = (fileName = "application")=>{
    const fileLogTransport = new winston__WEBPACK_IMPORTED_MODULE_0__.transports.DailyRotateFile({
        filename: `logs/${fileName}-%DATE%.log`,
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20mb",
        maxFiles: "30d"
    });
    const consoleTransport = new winston__WEBPACK_IMPORTED_MODULE_0__.transports.Console({
        level: "info",
        handleExceptions: false,
        json: false,
        colorize: true,
        format: winston__WEBPACK_IMPORTED_MODULE_0__.format.printf((i)=>`${i.message}`)
    });
    const logger = (0,winston__WEBPACK_IMPORTED_MODULE_0__.createLogger)({
        level: "error",
        format: winston__WEBPACK_IMPORTED_MODULE_0__.format.combine(winston__WEBPACK_IMPORTED_MODULE_0__.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }), winston__WEBPACK_IMPORTED_MODULE_0__.format.errors({
            stack: true
        }), winston__WEBPACK_IMPORTED_MODULE_0__.format.splat(), winston__WEBPACK_IMPORTED_MODULE_0__.format.printf(({ level , message , label ="production" , timeStamp  })=>`${timeStamp} [${label}] ${level}: ${message}`)),
        defaultMeta: {
            service: "my-app"
        },
        transports: [
            consoleTransport
        ]
    });
    logger.add(fileLogTransport);
    return logger;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogger());


/***/ })

};
;