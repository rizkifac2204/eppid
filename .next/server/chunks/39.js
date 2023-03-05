"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 39:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    user: null,
    logout: ()=>{}
});
const AuthContextProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const controller = new AbortController();
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/api/auth/isLogin`, {
            signal: controller.signal
        }).then((res)=>{
            setUser(res.data);
        }).catch((err)=>{
            // ini sebenarya sudah di block oleh middleware
            if (err?.response?.status === 401) {
                if (router.pathname.startsWith("/admin")) window.open("/login", "_self");
            }
        });
        return ()=>{
            controller.abort();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const logout = async ()=>{
        setUser(null);
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/api/auth/logout", {
            redirect: "true"
        }).then((res)=>{
            console.log("Logged Out");
        }).catch((err)=>{
            console.log("Error Something");
        }).then(()=>{
            window.open("/login", "_self");
        });
    };
    const context = {
        user,
        logout
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: context,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;