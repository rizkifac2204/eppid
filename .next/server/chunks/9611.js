"use strict";
exports.id = 9611;
exports.ids = [9611];
exports.modules = {

/***/ 7321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/no-file.1bd1d555.png","height":253,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAqklEQVR42mNQ8Mtlct7wLdt544865w3fk4H0DiC+6Lzx5yUgrcQAJFa7bPq1FEhHuWz8OcF1618rl82/QoBiBS6bfq5kADIWAXEhUIcGUMLFZt5dXsfVHwSBkgxA3M0AlFwDxBOA1sQATSkHsh8C8WugdS5ABc0MQF1FQMZxoOR+F6CkC5ANpK8DTewH0nMZgAIWQMY5IN7nsvn3LCA/GSiZDKSnuWz+HQAAkZJzf8f/2FoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 9611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kz": () => (/* binding */ SetQRCode),
/* harmony export */   "V2": () => (/* binding */ FormatedDate),
/* harmony export */   "aU": () => (/* binding */ WithDynamicImage),
/* harmony export */   "dl": () => (/* binding */ NumberWithCommas),
/* harmony export */   "xX": () => (/* binding */ CurrentDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1121);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var _public_images_no_file_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7321);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SetQRCode({ text  }) {
    const [src, setSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!text) return;
        qrcode__WEBPACK_IMPORTED_MODULE_1___default().toDataURL(text).then((data)=>{
            setSrc(data);
        });
        return ()=>{
            "cleanup";
        };
    }, [
        text
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            alt: "QrCode"
        })
    });
}
function CurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
}
function FormatedDate({ tanggal  }) {
    if (!tanggal) return;
    var date = new Date(tanggal);
    if (date instanceof Date && !isNaN(date.valueOf())) {
        return date.toISOString().split("T")[0];
    } else {
        return "-";
    }
}
function NumberWithCommas({ number  }) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function WithDynamicImage({ image , altText ="Pemohon"  }) {
    const [initImage, setInitImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_public_images_no_file_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!image) return;
        let mounted = true;
        const url = `/api/services/file/public/upload/${image}`;
        if (mounted) axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url, {
            responseType: "arraybuffer"
        }).then((res)=>{
            const buffer64 = Buffer.from(res.data, "binary").toString("base64");
            setInitImage(`data:${res.headers["content-type"]};base64, ${buffer64}`);
        }).catch((err)=>{
            console.log(err.response);
        });
        return function cleanup() {
            mounted = false;
        };
    }, [
        image
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: initImage,
            alt: altText,
            priority: true,
            width: 280,
            height: 0
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;