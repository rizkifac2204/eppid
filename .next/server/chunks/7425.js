"use strict";
exports.id = 7425;
exports.ids = [7425];
exports.modules = {

/***/ 7425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FJ": () => (/* binding */ WhatsappContextProvider),
/* harmony export */   "a": () => (/* binding */ useWhatsappContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



let socket;
const WhatsappContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function useWhatsappContext() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WhatsappContext);
    return context;
}
const WhatsappContextProvider = ({ children  })=>{
    const [whatsapp, setWhatsapp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        status: "Wait",
        message: "Menghubungkan ...",
        qr: null,
        info: null
    });
    const socketInitializer = async ()=>{
        await fetch("/api/setting/whatsapp");
        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"])();
        socket.on("connect", ()=>{
            socket.emit("checkInfo", {});
        });
        socket.on("statusWA", (status)=>{
            setWhatsapp((prev)=>status);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socketInitializer();
    }, []);
    const context = {
        whatsapp
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WhatsappContext.Provider, {
        value: context,
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WhatsappContext)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;