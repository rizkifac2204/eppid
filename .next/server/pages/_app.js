(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1290);
/* harmony import */ var components_Layout_PublicLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4103);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4204);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4500);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9063);
/* harmony import */ var context_whatsappContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, context__WEBPACK_IMPORTED_MODULE_11__, context_AuthContext__WEBPACK_IMPORTED_MODULE_12__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_14__, context_whatsappContext__WEBPACK_IMPORTED_MODULE_15__]);
([components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, context__WEBPACK_IMPORTED_MODULE_11__, context_AuthContext__WEBPACK_IMPORTED_MODULE_12__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_14__, context_whatsappContext__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// Toast dibutuhkan pada semua halaman termasuk saat logout


// Progess dibutuhkan pada semua halaman termasuk saat logout


// Router berjalan termasuk saat logout

next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_8___default().start());
next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_8___default().done());
next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_8___default().done());


// Tanstack


const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__.QueryClient();

function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "PPID"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                children: "Browser Anda Tidak Mendukung Javascript"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_whatsappContext__WEBPACK_IMPORTED_MODULE_15__/* .WhatsappContextProvider */ .FJ, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__.QueryClientProvider, {
                    client: queryClient,
                    children: [
                        Component.auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_AuthContext__WEBPACK_IMPORTED_MODULE_12__/* .AuthContextProvider */ .H, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context__WEBPACK_IMPORTED_MODULE_11__/* .ContextProvider */ .HQ, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                })
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: Component.public ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_PublicLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_14__.ReactQueryDevtools, {
                            initialIsOpen: false
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TopRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TopRight__WEBPACK_IMPORTED_MODULE_7__]);
_TopRight__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// components

const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
    shouldForwardProp: (prop)=>prop !== "open" && prop !== "close" && prop !== "drawerWidth"
})(({ theme , open , close , drawerWidth  })=>({
        // zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create([
            "width",
            "margin"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            width: `calc(100% - ${close ? 0 : drawerWidth}px)`
        },
        ...!open && {
            width: `calc(100% - ${close ? "0px" : theme.spacing(7)})`,
            [theme.breakpoints.up("md")]: {
                width: `calc(100% - ${close ? "0px" : theme.spacing(9)})`
            },
            [theme.breakpoints.down("md")]: {
                width: `calc(100% - 0px)`
            }
        }
    }));
function AppbarLayout(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppBar, {
        position: "absolute",
        open: props.toggleSidebar,
        close: props.closeSidebar,
        drawerWidth: props.drawerWidth,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                    edge: "start",
                    color: "inherit",
                    "aria-label": "open drawer",
                    onClick: props.toggleDrawer,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_6___default()), {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    component: "div",
                    sx: {
                        flexGrow: 1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopRight__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    toggleDrawerSetting: props.toggleDrawerSetting
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppbarLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8742);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8281);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9233);
/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3191);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_OpenInFull__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7000);
/* harmony import */ var _mui_icons_material_OpenInFull__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_OpenInFull__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_CloseFullscreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2618);
/* harmony import */ var _mui_icons_material_CloseFullscreen__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CloseFullscreen__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([context_AuthContext__WEBPACK_IMPORTED_MODULE_20__]);
context_AuthContext__WEBPACK_IMPORTED_MODULE_20__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















const MaterialUISwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.styled)((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_13___default()))(({ theme  })=>({
        width: 62,
        height: 34,
        padding: 7,
        "& .MuiSwitch-switchBase": {
            margin: 1,
            padding: 0,
            transform: "translateX(6px)",
            "&.Mui-checked": {
                color: "#fff",
                transform: "translateX(22px)",
                "& .MuiSwitch-thumb:before": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
                },
                "& + .MuiSwitch-track": {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
                }
            }
        },
        "& .MuiSwitch-thumb": {
            backgroundColor: theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.secondary.main,
            width: 32,
            height: 32,
            "&:before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
            }
        },
        "& .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            borderRadius: 20 / 2
        }
    }));
const primaryColor = {
    info: "#0288d1",
    success: "#2e7d32",
    warning: "#ed6c02",
    error: "#d32f2f"
};
const secondaryColors = {
    info: "#0288d1",
    success: "#2e7d32",
    warning: "#ed6c02",
    error: "#d32f2f"
};
function DrawerSetting(props) {
    const { logout  } = (0,react__WEBPACK_IMPORTED_MODULE_19__.useContext)(context_AuthContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1___default()), {
        variant: "persistent",
        anchor: "right",
        open: props.open,
        sx: {
            "& .MuiDrawer-paper": {
                width: 300,
                pt: 4,
                pb: 1,
                px: 3,
                borderRadius: "8px",
                boxShadow: 2
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                variant: "h5",
                                children: "Pengaturan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                variant: "body2",
                                color: "text.secondary",
                                children: "Profile dan Tampilan"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                fontSize: 12,
                                cursor: "pointer"
                            },
                            onClick: props.toggleDrawerSetting
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6___default()), {
                spacing: 2,
                my: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                        component: (next_link__WEBPACK_IMPORTED_MODULE_18___default()),
                        href: "/admin/profile",
                        variant: "outlined",
                        size: "small",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                        children: "Profile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                        variant: "outlined",
                        size: "small",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                        onClick: logout,
                        children: "Logout"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                my: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "subtitle1",
                        children: "Pengaturan"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "caption",
                                        display: "block",
                                        children: "Warna Utama"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        color: "inherit",
                                        size: "small",
                                        sx: {
                                            color: "#0097a7"
                                        },
                                        onClick: ()=>props.changePrimaryColor("#0097a7"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                    }),
                                    Object.keys(primaryColor).map((key, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            color: key,
                                            size: "small",
                                            onClick: ()=>props.changePrimaryColor(primaryColor[key]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                        }, idx))
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "caption",
                                        display: "block",
                                        children: "Warna Secondary"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        color: "inherit",
                                        size: "small",
                                        sx: {
                                            color: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.red[800]
                                        },
                                        onClick: ()=>props.changeSecondaryColor(_mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.red[800]),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                    }),
                                    Object.keys(secondaryColors).map((key, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            color: key,
                                            size: "small",
                                            onClick: ()=>props.changeSecondaryColor(secondaryColors[key]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_12___default()), {})
                                        }, idx))
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                my: 3,
                sx: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_15___default()), {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaterialUISwitch, {
                            onChange: ()=>props.changeMode(),
                            sx: {
                                m: 1
                            },
                            checked: props.darkMode
                        }),
                        label: "Theme"
                    }),
                    props.handleFullScreen.active ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        color: "primary",
                        onClick: ()=>props.handleFullScreen.exit(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CloseFullscreen__WEBPACK_IMPORTED_MODULE_17___default()), {
                            sx: {
                                fontSize: 25
                            }
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                        color: "primary",
                        onClick: ()=>props.handleFullScreen.enter(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_OpenInFull__WEBPACK_IMPORTED_MODULE_16___default()), {
                            sx: {
                                fontSize: 25
                            }
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerSetting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5168);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([context_AuthContext__WEBPACK_IMPORTED_MODULE_6__]);
context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function TopRight({ toggleDrawerSetting  }) {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(context_AuthContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    if (!user) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_7___default()), {
        variant: "circular",
        width: 40,
        height: 40
    });
    const { image , name: alt  } = user;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
            onClick: ()=>toggleDrawerSetting(),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Badge__WEBPACK_IMPORTED_MODULE_3___default()), {
                badgeContent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default()), {
                    sx: {
                        fontSize: 14
                    }
                }),
                color: "primary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                    sx: {
                        backgroundColor: "primary.light",
                        width: 28,
                        height: 28
                    },
                    alt: alt,
                    src: image
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopRight);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BreadcrumbsHead)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Breadcrumbs"
const Breadcrumbs_namespaceObject = require("@mui/material/Breadcrumbs");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Layout/Breadcrumb.js





function BreadcrumbsHead({ list  }) {
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx((Breadcrumbs_default()), {
        mb: 3,
        ml: 2,
        "aria-label": "breadcrumb",
        separator: "›",
        children: list && list.map((item, idx, arr)=>idx + 1 === arr.length ? /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                color: "text.primary",
                children: item.title
            }, idx) : item.path.includes("getID") && id ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.path.replace("getID", id),
                children: item.title
            }, idx) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.path,
                children: item.title
            }, idx))
    });
}


/***/ }),

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__);



function Footer(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: {
            pt: 3
        },
        variant: "body2",
        color: "text.secondary",
        align: "center",
        ...props,
        children: [
            "Copyright \xa9 ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: "inherit",
                href: "https://bawaslu.go.id",
                target: `_blank`,
                children: "Pusdatin Bawaslu Republik Indonesia"
            }),
            " ",
            new Date().getFullYear(),
            "."
        ]
    });
}


/***/ }),

/***/ 1290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9887);
/* harmony import */ var react_full_screen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_full_screen__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3574);
/* harmony import */ var _Appbar_Appbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(423);
/* harmony import */ var _Appbar_DrawerSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8521);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6835);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9675);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__, _Appbar_Appbar__WEBPACK_IMPORTED_MODULE_8__, _Appbar_DrawerSetting__WEBPACK_IMPORTED_MODULE_9__, context__WEBPACK_IMPORTED_MODULE_12__]);
([_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__, _Appbar_Appbar__WEBPACK_IMPORTED_MODULE_8__, _Appbar_DrawerSetting__WEBPACK_IMPORTED_MODULE_9__, context__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// MUI





// components self





// CURTOM

function Layout({ children  }) {
    const handleFullScreen = (0,react_full_screen__WEBPACK_IMPORTED_MODULE_1__.useFullScreenHandle)();
    const [init, action] = (0,context__WEBPACK_IMPORTED_MODULE_12__/* .useRizkiContext */ .$B)();
    const { toggleSidebar , closeSidebar , darkMode , toggleSetting , primary , secondary  } = init;
    const closeDrawer = ()=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setToggleSidebar */ .CC)(action, !toggleSidebar);
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setCloseSidebar */ .LO)(action, true);
    };
    const toggleDrawer = ()=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setToggleSidebar */ .CC)(action, !toggleSidebar);
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setCloseSidebar */ .LO)(action, false);
    };
    const toggleDrawerSetting = ()=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setToggleSetting */ .R8)(action, !toggleSetting);
    };
    const changeMode = ()=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setDarkMode */ .C8)(action, !darkMode);
    };
    const changePrimaryColor = (value)=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setPrimaryColor */ .p6)(action, value);
    };
    const changeSecondaryColor = (value)=>{
        (0,context__WEBPACK_IMPORTED_MODULE_12__/* .setSecondaryColor */ .Ec)(action, value);
    };
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.createTheme)((0,context__WEBPACK_IMPORTED_MODULE_12__/* .getDesignTokens */ .bk)(darkMode ? "dark" : "light", primary, secondary));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_full_screen__WEBPACK_IMPORTED_MODULE_1__.FullScreen, {
            handle: handleFullScreen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                    sx: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Appbar_Appbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            toggleSidebar: toggleSidebar,
                            closeSidebar: closeSidebar,
                            toggleDrawer: toggleDrawer,
                            toggleDrawerSetting: toggleDrawerSetting,
                            drawerWidth: context__WEBPACK_IMPORTED_MODULE_12__/* .drawerWidth */ .RK
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            toggleSidebar: toggleSidebar,
                            closeSidebar: closeSidebar,
                            darkMode: darkMode,
                            closeDrawer: closeDrawer,
                            drawerWidth: context__WEBPACK_IMPORTED_MODULE_12__/* .drawerWidth */ .RK
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            component: "main",
                            sx: {
                                p: 1,
                                backgroundColor: (theme)=>theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
                                flexGrow: 1,
                                height: "100vh",
                                overflow: "auto"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    list: children.type.breadcrumb
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    maxWidth: false,
                                    children: children
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Appbar_DrawerSetting__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            open: toggleSetting,
                            toggleDrawerSetting: toggleDrawerSetting,
                            changeMode: changeMode,
                            changePrimaryColor: changePrimaryColor,
                            changeSecondaryColor: changeSecondaryColor,
                            darkMode: darkMode,
                            handleFullScreen: handleFullScreen
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PublicLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "jquery"
const external_jquery_namespaceObject = require("jquery");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
;// CONCATENATED MODULE: external "@mui/material/Slide"
const Slide_namespaceObject = require("@mui/material/Slide");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Layout/PublicTemplate.js





// MUI


const Transition = /*#__PURE__*/ external_react_default().forwardRef(function Transition(props, ref) {
    props.timeout.enter = 0;
    props.timeout.exit = 600;
    return /*#__PURE__*/ jsx_runtime_.jsx((Slide_default()), {
        direction: "up",
        ref: ref,
        ...props
    });
});
const formulirPage = [
    "/",
    "/cek",
    "/survey",
    "/keberatan"
];
function initPgae() {
    setTimeout(function() {
        external_jquery_default()(".item-list").each(function(i) {
            (function(self) {
                setTimeout(function() {
                    external_jquery_default()(self).addClass("show-ready");
                }, i * 150 + 150);
            })(this);
        });
    }, 250);
    setTimeout(function() {
        external_jquery_default()(".overlay-prevent").removeClass("").addClass("display-none");
    }, 600);
}
function openPage() {
    external_jquery_default()("#nav-item").removeClass("fadeOutUp opacity-0").addClass("fadeInDown index9999");
    external_jquery_default()(".list-sections").removeClass("").addClass("fadeOutDown");
    setTimeout(function() {
        external_jquery_default()(".item-list").removeClass("show-ready").addClass("");
    }, 800);
}
function closePage() {
    external_jquery_default()("#nav-item").removeClass("fadeInDown").addClass("fadeOutUp");
    setTimeout(function() {
        external_jquery_default()("#nav-item").removeClass("index9999").addClass("");
        external_jquery_default()(".list-sections").removeClass("fadeOutDown").addClass("");
        external_jquery_default()(".item-list").each(function(i) {
            (function(self) {
                setTimeout(function() {
                    external_jquery_default()(self).addClass("show-ready");
                }, i * 150 + 150);
            })(this);
        });
    }, 100);
}
const Template = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const [first, setFirst] = (0,external_react_.useState)(true);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [pageReady, setPageReady] = (0,external_react_.useState)(false);
    const [currentFormulir, setCurrentFormulir] = (0,external_react_.useState)({
        currentUrl: "/",
        head: "Permohonan",
        foot: "Pengajuan Permohoan Informasi"
    });
    const handleClickOpen = ()=>{
        setOpen(()=>true);
    };
    const handleClose = ()=>{
        setOpen(()=>false);
    };
    (0,external_react_.useEffect)(()=>{
        initPgae();
    }, []);
    (0,external_react_.useEffect)(()=>{
        open ? openPage() : closePage();
    }, [
        open
    ]);
    function allReady(open) {
        setTimeout(()=>{
            if (open) setOpen(()=>true);
            setFirst(false);
            setPageReady(()=>true);
            external_jquery_default()("#loading-popup").fadeOut(2000);
        }, 1000);
    }
    (0,external_react_.useEffect)(()=>{
        if (!router.isReady) return;
        // fisrt bite / first window load
        if (router.pathname !== "/" && first) allReady(true);
        // router change
        router.events.on("routeChangeStart", ()=>setPageReady(()=>false));
        router.events.on("routeChangeComplete", ()=>allReady());
        router.events.on("routeChangeError", ()=>allReady());
        // setting text dan link untuk formulir section
        if (router.pathname === "/") setCurrentFormulir({
            currentUrl: router.asPath,
            head: "Permohonan Informasi",
            foot: "Buka Formulir Permohoan Informasi"
        });
        if (router.pathname === "/cek") setCurrentFormulir({
            currentUrl: router.asPath,
            head: "Cek Permohonan Informasi",
            foot: "Buka Formulir Permohoan Informasi"
        });
        if (router.pathname === "/keberatan") setCurrentFormulir({
            currentUrl: router.asPath,
            head: "Pengajuan Keberatan",
            foot: "Buka Formulir Pengajuan Keberatan"
        });
        if (router.pathname === "/survey") setCurrentFormulir({
            currentUrl: router.asPath,
            head: "Survey Layanan",
            foot: "Buka Formulir Survey Layanan"
        });
        return ()=>setFirst(false);
    }, [
        router
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "overlay-prevent"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "list-sections animated-middle",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: currentFormulir.currentUrl,
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "open-popup-link",
                                            onClick: handleClickOpen,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-title",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-file-text"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "point",
                                                                    children: ".F"
                                                                }),
                                                                "ormulir"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: currentFormulir.head
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-plus",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: currentFormulir.foot
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-plus-circle fa-2x"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/dip",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "open-popup-link",
                                            onClick: handleClickOpen,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-title",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-list-ul"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "point",
                                                                    children: ".D"
                                                                }),
                                                                "IP"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Daftar Informasi Publik"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-plus",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Cari Data Disini"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-plus-circle fa-2x"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/news",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "open-popup-link",
                                            onClick: handleClickOpen,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-title",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-newspaper-o"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "point",
                                                                    children: ".N"
                                                                }),
                                                                "ews!"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Berlangganan Kabar Berita"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-plus",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Update Kabar Terbaru"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-plus-circle fa-2x"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/lokasi",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "open-popup-link",
                                            onClick: handleClickOpen,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-title",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-location-arrow"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "point",
                                                                    children: ".L"
                                                                }),
                                                                "okasi"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Bawaslu Se-Indonesia"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item-plus",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Data dan Lokasi Bawaslu Se-Indonesia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-plus-circle fa-2x"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        id: "nav-item",
                        className: "animated-middle opacity-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "mfp-close",
                                onClick: handleClose,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-bars fa-2x"
                                })
                            }),
                            formulirPage.includes(router.pathname) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-icons",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: currentFormulir.currentUrl === "/" ? {
                                                color: "#2b2d35",
                                                background: "#ffffff"
                                            } : {},
                                            children: "Permohonan"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cek",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: currentFormulir.currentUrl === "/cek" ? {
                                                color: "#2b2d35",
                                                background: "#ffffff"
                                            } : {},
                                            children: "Cek"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/keberatan",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: currentFormulir.currentUrl === "/keberatan" ? {
                                                color: "#2b2d35",
                                                background: "#ffffff"
                                            } : {},
                                            children: "Keberatan"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/survey",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            style: currentFormulir.currentUrl === "/survey" ? {
                                                color: "#2b2d35",
                                                background: "#ffffff"
                                            } : {},
                                            children: "Survey"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                PaperProps: {
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none"
                    }
                },
                fullScreen: true,
                disableEnforceFocus: true,
                open: open,
                onClose: handleClose,
                TransitionComponent: Transition,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "loading-popup",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "background-top"
                        })
                    }),
                    pageReady && children
                ]
            })
        ]
    });
};
/* harmony default export */ const PublicTemplate = (Template);

;// CONCATENATED MODULE: ./src/components/Layout/PublicLayout.js




function loadScripts(array, callback) {
    var loader = function(src, handler) {
        var script = document.createElement("script");
        script.src = src;
        if (src === "uis/js/jquery-2.1.3.min.js") {
            script.defer = "defer";
        }
        script.onload = script.onreadystatechange = function() {
            script.onreadystatechange = script.onload = null;
            handler();
        };
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild(script);
    };
    (function run() {
        if (array.length != 0) {
            loader(array.shift(), run);
        } else {
            callback && callback();
        }
    })();
}
function PublicLayout({ children  }) {
    (0,external_react_.useEffect)(()=>{
        loadScripts([
            "uis/js/modernizr.js",
            "uis/js/jquery-2.1.3.min.js"
        ], function() {
            const script = document.createElement("script");
            script.src = "uis/js/bootstrap.min.js";
            script.async = true;
            document.body.appendChild(script);
            return ()=>{
                document.body.removeChild(script);
            };
            console.log("All things are loaded");
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PublicTemplate, {
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "844a157340ec7096",
                children: "@import url(uis/css/bootstrap.min.css);@import url(uis/font-awesome-4.3.0/css/font-awesome.min.css);@import url(uis/css/magnific-popup.css);@import url(uis/css/animate.css);@import url(uis/css/style-1.css);"
            })
        ]
    });
}


/***/ }),

/***/ 2056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pp": () => (/* binding */ ChartList),
  "t7": () => (/* binding */ DipList),
  "LZ": () => (/* binding */ MainList),
  "gM": () => (/* binding */ SettingList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandLess"
const ExpandLess_namespaceObject = require("@mui/icons-material/ExpandLess");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/Collapse"
var Collapse_ = __webpack_require__(3932);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Layout/Sidebar/ListItem.js













const SingleLevel = ({ item , userLevel  })=>{
    const routes = (0,router_.useRouter)();
    const isActive = ()=>routes.pathname === item.path;
    if (item.limit && !item.limit.includes(userLevel)) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: item.path,
        passHref: true,
        legacyBehavior: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                sx: {
                    color: isActive() ? "primary.main" : ""
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: item.title,
                        placement: "right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                            sx: {
                                color: isActive() ? "primary.main" : ""
                            },
                            children: item.icon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: item.title
                    })
                ]
            })
        })
    });
};
const MultiLevel = ({ item , userLevel  })=>{
    const routes = (0,router_.useRouter)();
    const firstPath = routes.pathname.split("/")[2];
    const isActive = ()=>firstPath === item.title.toLowerCase();
    const [open, setOpen] = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        setOpen((prev)=>!prev);
    };
    if (item.limit && !item.limit.includes(userLevel)) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                onClick: handleClick,
                sx: {
                    color: isActive() ? "primary.main" : ""
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                        title: item.title,
                        placement: "right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                            sx: {
                                color: isActive() ? "primary.main" : ""
                            },
                            children: item.icon
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                        primary: item.title
                    }),
                    open ? /*#__PURE__*/ jsx_runtime_.jsx((ExpandLess_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                in: open,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                    component: "div",
                    disablePadding: true,
                    dense: true,
                    children: item.children.map((child, key)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                paddingLeft: 1,
                                paddingY: 0
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                item: child,
                                userLevel: userLevel
                            })
                        }, key))
                })
            })
        ]
    });
};
const MenuItem = ({ item , userLevel  })=>{
    const Component = item.children ? MultiLevel : SingleLevel;
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        item: item,
        userLevel: userLevel
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Dashboard"
const Dashboard_namespaceObject = require("@mui/icons-material/Dashboard");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowRight"
const ArrowRight_namespaceObject = require("@mui/icons-material/ArrowRight");
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Analytics"
const Analytics_namespaceObject = require("@mui/icons-material/Analytics");
var Analytics_default = /*#__PURE__*/__webpack_require__.n(Analytics_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AutoAwesomeMotion"
const AutoAwesomeMotion_namespaceObject = require("@mui/icons-material/AutoAwesomeMotion");
var AutoAwesomeMotion_default = /*#__PURE__*/__webpack_require__.n(AutoAwesomeMotion_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/PanTool"
var PanTool_ = __webpack_require__(5381);
var PanTool_default = /*#__PURE__*/__webpack_require__.n(PanTool_);
;// CONCATENATED MODULE: external "@mui/icons-material/ConnectWithoutContact"
const ConnectWithoutContact_namespaceObject = require("@mui/icons-material/ConnectWithoutContact");
var ConnectWithoutContact_default = /*#__PURE__*/__webpack_require__.n(ConnectWithoutContact_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/People"
var People_ = __webpack_require__(7166);
var People_default = /*#__PURE__*/__webpack_require__.n(People_);
;// CONCATENATED MODULE: external "@mui/icons-material/HomeWork"
const HomeWork_namespaceObject = require("@mui/icons-material/HomeWork");
var HomeWork_default = /*#__PURE__*/__webpack_require__.n(HomeWork_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AutoDelete"
const AutoDelete_namespaceObject = require("@mui/icons-material/AutoDelete");
var AutoDelete_default = /*#__PURE__*/__webpack_require__.n(AutoDelete_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BarChart"
const BarChart_namespaceObject = require("@mui/icons-material/BarChart");
var BarChart_default = /*#__PURE__*/__webpack_require__.n(BarChart_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/DataArray"
const DataArray_namespaceObject = require("@mui/icons-material/DataArray");
var DataArray_default = /*#__PURE__*/__webpack_require__.n(DataArray_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Add"
var Add_ = __webpack_require__(6146);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
;// CONCATENATED MODULE: external "@mui/icons-material/BubbleChart"
const BubbleChart_namespaceObject = require("@mui/icons-material/BubbleChart");
var BubbleChart_default = /*#__PURE__*/__webpack_require__.n(BubbleChart_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/DataSaverOn"
var DataSaverOn_ = __webpack_require__(4580);
var DataSaverOn_default = /*#__PURE__*/__webpack_require__.n(DataSaverOn_);
;// CONCATENATED MODULE: external "@mui/icons-material/Gavel"
const Gavel_namespaceObject = require("@mui/icons-material/Gavel");
var Gavel_default = /*#__PURE__*/__webpack_require__.n(Gavel_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Class"
const Class_namespaceObject = require("@mui/icons-material/Class");
var Class_default = /*#__PURE__*/__webpack_require__.n(Class_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/WhatsApp"
const WhatsApp_namespaceObject = require("@mui/icons-material/WhatsApp");
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_namespaceObject);
;// CONCATENATED MODULE: ./src/components/routes/index.js


















const mainRoutes = [
    {
        title: "Dashboard",
        path: "/admin",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Dashboard_default()), {})
    },
    {
        title: "Permohonan",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AutoAwesomeMotion_default()), {}),
        children: [
            {
                title: "Data",
                path: "/admin/permohonan",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((DataArray_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            },
            {
                title: "Tambah",
                path: "/admin/permohonan/add",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            }
        ]
    },
    {
        title: "Survey",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Analytics_default()), {}),
        children: [
            {
                title: "Data",
                path: "/admin/survey",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((DataArray_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            },
            {
                title: "Chart",
                path: "/admin/survey/chart",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((BubbleChart_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            }
        ]
    },
    {
        title: "Keberatan",
        path: "/admin/keberatan",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((PanTool_default()), {})
    },
    {
        title: "Subscriber",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((ConnectWithoutContact_default()), {}),
        children: [
            {
                title: "Data Subscriber",
                path: "/admin/subscriber",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowRight_default()), {})
            },
            {
                title: "Email",
                path: "/admin/subscriber/email",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowRight_default()), {})
            }
        ]
    }
];
const dipRoutes = [
    {
        title: "DIP",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((DataSaverOn_default()), {}),
        children: [
            {
                title: "Data",
                path: "/admin/dip",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((DataArray_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            },
            {
                title: "Tambah",
                path: "/admin/dip/add",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            }
        ]
    }
];
const settingRoutes = [
    {
        title: "Users",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {}),
        children: [
            {
                title: "Data",
                path: "/admin/setting/users",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((DataArray_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            },
            {
                title: "Tambah",
                path: "/admin/setting/users/add",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            }
        ]
    },
    {
        title: "Profile Bawaslu",
        path: "/admin/setting/wilayah",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((HomeWork_default()), {})
    },
    {
        title: "Dibuang",
        path: "/admin/setting/trash",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AutoDelete_default()), {})
    },
    {
        title: "Regulasi",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Gavel_default()), {}),
        children: [
            {
                title: "Data",
                path: "/admin/setting/regulasi",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((DataArray_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            },
            {
                title: "Tambah",
                path: "/admin/setting/regulasi/add",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {
                    sx: {
                        fontSize: 12
                    }
                }),
                limit: [
                    1
                ]
            },
            {
                title: "Kategori",
                path: "/admin/setting/regulasi/kategori",
                icon: /*#__PURE__*/ jsx_runtime_.jsx((Class_default()), {
                    sx: {
                        fontSize: 12
                    }
                })
            }
        ]
    },
    {
        title: "Whatsapp",
        path: "/admin/setting/whatsapp",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {}),
        limit: [
            1
        ]
    }
];
const chartRoutes = [
    {
        title: "Layanan",
        path: "/admin/chart/layanan",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((BarChart_default()), {})
    },
    {
        title: "Unit",
        path: "/admin/chart/unit",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((BarChart_default()), {})
    }
];

;// CONCATENATED MODULE: ./src/components/Layout/Sidebar/MainList.js



const MainList = ({ userLevel  })=>{
    if (!userLevel) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return mainRoutes.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
            item: item,
            userLevel: userLevel
        }, item.title));
};
const SettingList = ({ userLevel  })=>{
    if (!userLevel) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return settingRoutes.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
            item: item,
            userLevel: userLevel
        }, item.title));
};
const ChartList = ({ userLevel  })=>{
    if (!userLevel) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return chartRoutes.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
            item: item,
            userLevel: userLevel
        }, item.title));
};
const DipList = ({ userLevel  })=>{
    if (!userLevel) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    return dipRoutes.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
            item: item,
            userLevel: userLevel
        }, item.title));
};


/***/ }),

/***/ 3574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5162);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9685);
/* harmony import */ var _mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6162);
/* harmony import */ var _mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _MainList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2056);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([context_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);
context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// NEXT





// SCHROLL

// MUI








// LIST

const openedMixin = (theme, close, drawerWidth)=>({
        width: close ? 0 : drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        overflowX: "hidden"
    });
const closedMixin = (theme, close)=>({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: close ? 0 : `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.down("md")]: {
            width: 0
        },
        [theme.breakpoints.up("md")]: {
            width: close ? 0 : `calc(${theme.spacing(9)} + 1px)`
        }
    });
const Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.styled)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default()), {
    shouldForwardProp: (prop)=>prop !== "open" && prop !== "close" && prop !== "drawerWidth"
})(({ theme , open , close , drawerWidth  })=>({
        // "& .MuiDrawer-paper": {},
        position: "relative",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...open && {
            ...openedMixin(theme, close, drawerWidth),
            "& .MuiDrawer-paper": openedMixin(theme, close, drawerWidth)
        },
        ...!open && {
            ...closedMixin(theme, close),
            "& .MuiDrawer-paper": closedMixin(theme, close)
        }
    }));
const LogoContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__.styled)("div", {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        position: "relative",
        margin: 10,
        ...open && {
            width: 160,
            height: 50
        },
        ...!open && {
            width: 50,
            height: 50,
            marginLeft: 10
        }
    }));
function Sidebar(props) {
    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Drawer, {
        variant: "permanent",
        open: props.toggleSidebar,
        close: props.closeSidebar,
        drawerWidth: props.drawerWidth,
        onClose: props.closeDrawer,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/admin",
                    legacyBehavior: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoContainer, {
                            open: props.toggleSidebar,
                            children: props.toggleSidebar ? props.darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/images/logo-white.png",
                                alt: "Logo",
                                width: 180,
                                height: 50,
                                priority: true
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/images/logo-dark.png",
                                alt: "Logo",
                                width: 180,
                                height: 50,
                                priority: true
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/images/logo.png",
                                alt: "Logo",
                                width: 50,
                                height: 50,
                                className: "logoSmall"
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default()), {
                options: {
                    suppressScrollX: true
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                    sx: {
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            component: "nav",
                            "aria-labelledby": "subheaderGeneral",
                            subheader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default()), {
                                component: "div",
                                id: "subheaderGeneral",
                                children: "Permohonan"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_14__/* .MainList */ .LZ, {
                                userLevel: user?.level
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            component: "nav",
                            "aria-labelledby": "subheaderDip",
                            subheader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default()), {
                                component: "div",
                                id: "subheaderDiv",
                                children: "DIP"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_14__/* .DipList */ .t7, {
                                userLevel: user?.level
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            component: "nav",
                            "aria-labelledby": "subheaderSetting",
                            subheader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default()), {
                                component: "div",
                                id: "subheaderSetting",
                                children: "Setting"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_14__/* .SettingList */ .gM, {
                                userLevel: user?.level
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                            component: "nav",
                            "aria-labelledby": "subheaderChart",
                            subheader: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListSubheader__WEBPACK_IMPORTED_MODULE_11___default()), {
                                component: "div",
                                id: "subheaderChart",
                                children: "Chart"
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainList__WEBPACK_IMPORTED_MODULE_14__/* .ChartList */ .pp, {
                                userLevel: user?.level
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                component: "div",
                sx: {
                    flexGrow: 1
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                onClick: props.closeDrawer,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_13___default()), {})
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4500:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ useRizkiContext),
/* harmony export */   "C8": () => (/* binding */ setDarkMode),
/* harmony export */   "CC": () => (/* binding */ setToggleSidebar),
/* harmony export */   "Ec": () => (/* binding */ setSecondaryColor),
/* harmony export */   "HQ": () => (/* binding */ ContextProvider),
/* harmony export */   "LO": () => (/* binding */ setCloseSidebar),
/* harmony export */   "R8": () => (/* binding */ setToggleSetting),
/* harmony export */   "RK": () => (/* binding */ drawerWidth),
/* harmony export */   "bk": () => (/* binding */ getDesignTokens),
/* harmony export */   "p6": () => (/* binding */ setPrimaryColor)
/* harmony export */ });
/* unused harmony export RizkiFach */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const getDesignTokens = (mode, primary, secondary)=>({
        palette: {
            mode: mode,
            primary: {
                main: primary
            },
            secondary: {
                main: secondary
            }
        }
    });
const drawerWidth = 230;
function reducer(state, action) {
    switch(action.type){
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                toggleSidebar: action.value
            };
        case "CLOSE_SIDEBAR":
            return {
                ...state,
                closeSidebar: action.value
            };
        case "TOGGLE_SETTING":
            return {
                ...state,
                toggleSetting: action.value
            };
        case "DARKMODE":
            return {
                ...state,
                darkMode: action.value
            };
        case "CHANGE_PRIMARY_COLOR":
            return {
                ...state,
                primary: action.value
            };
        case "CHANGE_SECONDARY_COLOR":
            return {
                ...state,
                secondary: action.value
            };
        default:
            throw new Error();
    }
}
const setToggleSidebar = (dispatch, value)=>dispatch({
        type: "TOGGLE_SIDEBAR",
        value
    });
const setCloseSidebar = (dispatch, value)=>dispatch({
        type: "CLOSE_SIDEBAR",
        value
    });
const setToggleSetting = (dispatch, value)=>dispatch({
        type: "TOGGLE_SETTING",
        value
    });
const setPrimaryColor = (dispatch, value)=>dispatch({
        type: "CHANGE_PRIMARY_COLOR",
        value
    });
const setSecondaryColor = (dispatch, value)=>dispatch({
        type: "CHANGE_SECONDARY_COLOR",
        value
    });
const setDarkMode = (dispatch, value)=>dispatch({
        type: "DARKMODE",
        value
    });
const RizkiFach = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useRizkiContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RizkiFach);
    return context;
};
const ContextProvider = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const initialState = {
        toggleSidebar: true,
        closeSidebar: false,
        toggleSetting: false,
        darkMode: false,
        primary: "#0097a7",
        secondary: _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__.red[800]
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isFirstRun.current) {
            isFirstRun.current = false;
            const settingDisplay = localStorage.getItem("settingDisplay");
            if (settingDisplay) {
                const setting = JSON.parse(settingDisplay);
                dispatch({
                    type: "DARKMODE",
                    value: setting.darkMode
                });
                dispatch({
                    type: "CHANGE_PRIMARY_COLOR",
                    value: setting.primary
                });
                dispatch({
                    type: "CHANGE_SECONDARY_COLOR",
                    value: setting.secondary
                });
            }
            return;
        }
        localStorage.setItem("settingDisplay", JSON.stringify(state));
    }, [
        state.darkMode,
        state.primary,
        state.secondary
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isMobile = window.matchMedia && window.matchMedia("(max-width: 480px)").matches;
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.dismiss();
        if (isMobile) dispatch({
            type: "TOGGLE_SIDEBAR",
            value: false
        });
        if (state.toggleSetting) dispatch({
            type: "TOGGLE_SETTING",
            value: false
        });
    }, [
        router
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RizkiFach.Provider, {
        value: [
            state,
            dispatch
        ],
        children: children
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4204:
/***/ (() => {



/***/ }),

/***/ 4103:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 6162:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowBackIosNewOutlined");

/***/ }),

/***/ 9233:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Circle");

/***/ }),

/***/ 4173:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 2618:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/CloseFullscreen");

/***/ }),

/***/ 4580:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/DataSaverOn");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 8281:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ManageAccounts");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 7000:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/OpenInFull");

/***/ }),

/***/ 5381:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/PanTool");

/***/ }),

/***/ 7166:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/People");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 5168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Badge");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 3932:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 8185:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 441:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ 8742:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 3191:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9887:
/***/ ((module) => {

"use strict";
module.exports = require("react-full-screen");

/***/ }),

/***/ 5162:
/***/ ((module) => {

"use strict";
module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9063:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,5675,1664,39,7425], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();