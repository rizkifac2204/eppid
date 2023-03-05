"use strict";
exports.id = 1820;
exports.ids = [1820];
exports.modules = {

/***/ 1820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RA": () => (/* binding */ verifyAuth),
/* harmony export */   "Z9": () => (/* binding */ expireUserCookie),
/* harmony export */   "rk": () => (/* binding */ setUserCookie)
/* harmony export */ });
/* unused harmony export AuthError */
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5611);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9369);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_0__, jose__WEBPACK_IMPORTED_MODULE_1__]);
([nanoid__WEBPACK_IMPORTED_MODULE_0__, jose__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class AuthError extends Error {
}
async function verifyAuth(token, res) {
    if (!token) throw new AuthError("Tidak Ada Token");
    try {
        const verified = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, new TextEncoder().encode(process.env.JWT_SECRET_KEY));
        return verified.payload;
    } catch (err) {
        throw new AuthError("Token Tidak valid.");
    }
}
async function setUserCookie(data, res) {
    const token = await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(data).setProtectedHeader({
        alg: "HS256"
    }).setJti((0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)()).setIssuedAt().setExpirationTime("30d").sign(new TextEncoder().encode(process.env.JWT_SECRET_KEY));
    const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(process.env.JWT_NAME, token, {
        httpOnly: true,
        secure: "production" !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/"
    });
    res.setHeader("Set-Cookie", serialized);
    return res;
}
function expireUserCookie(res) {
    const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(process.env.JWT_NAME, null, {
        httpOnly: true,
        secure: "production" !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/"
    });
    res.setHeader("Set-Cookie", serialized);
    return res;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;