"use strict";
exports.id = 3424;
exports.ids = [3424];
exports.modules = {

/***/ 7444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6354);
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8860);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5768);
/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5538);
/* harmony import */ var _mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// MUI



















const handleSubmit = (values, props, setSubmitting)=>{
    const postData = {
        ...values,
        email_pemohon: props.detail.email_pemohon,
        tiket: props.detail.tiket
    };
    const toastProses = react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.loading("Tunggu Sebentar...", {
        autoClose: false
    });
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`/api/permohonan/${values.permohonan_id}/responses`, postData).then((res)=>{
        if (props.invalidateQueries) props.invalidateQueries();
        setTimeout(()=>props.onClose(), 1000);
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.update(toastProses, {
            render: res.data.message,
            type: res.data.type,
            isLoading: false,
            autoClose: 2000
        });
    }).catch((err)=>{
        console.log(err);
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.update(toastProses, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 2000
        });
    }).then(()=>{
        setSubmitting(false);
    });
};
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object({
    // umum
    no_registrasi: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi"),
    status_permohonan: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi"),
    jenis_respon: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi"),
    pesan: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi"),
    // respon final
    jangka_waktu: yup__WEBPACK_IMPORTED_MODULE_3__.number().when("jenis_respon", {
        is: (v)=>v === "Respon Final",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.number().required("Harus Diisi")
    }),
    // diberikan / sebagian
    bentuk_fisik: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>[
                "Diberikan",
                "Diberikan Sebagian"
            ].includes(v),
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    }),
    ket_biaya: yup__WEBPACK_IMPORTED_MODULE_3__.number().when("status_permohonan", {
        is: (v)=>[
                "Diberikan",
                "Diberikan Sebagian"
            ].includes(v),
        then: yup__WEBPACK_IMPORTED_MODULE_3__.number().required("Harus Diisi")
    }),
    // khusus diberikan sebagian
    penjelasan_penghitaman: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>v === "Diberikan Sebagian",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    }),
    // khusus tidak dapat diberikan
    penguasaan_informasi: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>v === "Tidak Dapat Diberikan",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    }),
    penguasaan_informasi_lain: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("penguasaan_informasi", {
        is: (v)=>v === "Badan Publik Lain",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Isi Badan Publik")
    }),
    dasar_pengecualian: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>v === "Tidak Dapat Diberikan",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    }),
    pada_pasal: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>v === "Tidak Dapat Diberikan",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    }),
    ket_konsekuensi: yup__WEBPACK_IMPORTED_MODULE_3__.string().when("status_permohonan", {
        is: (v)=>v === "Tidak Dapat Diberikan",
        then: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Harus Diisi")
    })
});
function ResponseDialog(props) {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
        initialValues: {
            current_no_registrasi: props.detail.no_registrasi ? props.detail.no_registrasi : "",
            no_registrasi: props.detail.no_registrasi ? props.detail.no_registrasi : "",
            permohonan_id: props.detail.id ? props.detail.id : "",
            status_permohonan: props.detail.status_permohonan ? props.detail.status_permohonan : "",
            jenis_respon: "",
            penjelasan_penghitaman: "",
            jangka_waktu: "",
            pesan: "",
            mailed: true,
            penguasaan_informasi: "",
            penguasaan_informasi_lain: "",
            // diberikan
            bentuk_fisik: "",
            ket_biaya: "",
            // ditolak
            dasar_pengecualian: "",
            pada_pasal: "",
            ket_konsekuensi: ""
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting  })=>handleSubmit(values, props, setSubmitting)
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.open) formik.resetForm();
    }, [
        props.open
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_8___default()), {
        open: props.open,
        onClose: props.onClose,
        fullScreen: props.fullScreen,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_11___default()), {
                    children: [
                        "Response ",
                        props.detail.no_registrasi,
                        " ",
                        props.detail.tiket
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_10___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        label: "Nomor Registrasi",
                                        name: "no_registrasi",
                                        value: formik.values.no_registrasi,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.no_registrasi && Boolean(formik.errors.no_registrasi),
                                        helperText: formik.touched.no_registrasi && formik.errors.no_registrasi
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_21___default()), {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                fullWidth: true,
                                                required: true,
                                                margin: "normal",
                                                error: Boolean(formik.errors.jenis_respon),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        children: "Jenis Respon"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        name: "jenis_respon",
                                                        label: "Jenis Respon",
                                                        value: formik.values.jenis_respon,
                                                        onChange: formik.handleChange,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                value: "Respon Awal",
                                                                children: "Respon Awal"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                value: "Respon Lanjutan",
                                                                children: "Respon Lanjutan"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                value: "Respon Final",
                                                                children: "Respon Final"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                value: "Respon Perbaikan",
                                                                children: "Respon Perbaikan"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                                value: "Respon Keberatan",
                                                                children: "Respon Keberatan"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                        children: formik.errors.jenis_respon
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                "aria-describedby": Boolean(anchorEl) ? "login-google" : undefined,
                                                variant: "text",
                                                onClick: (e)=>setAnchorEl(e.currentTarget),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Help__WEBPACK_IMPORTED_MODULE_24___default()), {
                                                    fontSize: "small"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Popover__WEBPACK_IMPORTED_MODULE_23___default()), {
                                                id: Boolean(anchorEl) ? "login-google" : undefined,
                                                open: Boolean(anchorEl),
                                                anchorEl: anchorEl,
                                                onClose: ()=>setAnchorEl(null),
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_22___default()), {
                                                            color: "inherit",
                                                            children: "Jenis Respon"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Respon Awal : merupakan Respon Pertama yang diberikan (Biasanya pada saat memberikan Nomor Registrasi) dan belum memberikan informasi"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Respon Lanjutan : merupakan Respon setelah respon awal dan belum selesai dalam memberikan informasi (informasi masih diberikan secara berkala)"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Respon Final : merupakan Respon terkahir setelah memberikan informasi yang diminta (dapat menjadi respon awal jika informasi langsung dapat diberikan)"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Respon Perbaikan : merupakan Respon jika terjadi perbaikan dalam memberikan informasi"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Respon Keberatan : merupakan Respon yang diberikan setelah permohon melakukan keberatan terkait permohonan"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        error: Boolean(formik.errors.status_permohonan),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                children: "Status Permohonan"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                name: "status_permohonan",
                                                label: "Status Permohonan",
                                                value: formik.values.status_permohonan,
                                                onChange: formik.handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Proses",
                                                        children: "Diproses"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Diberikan",
                                                        children: "Diberikan"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Diberikan Sebagian",
                                                        children: "Diberikan Sebagian"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Tidak Dapat Diberikan",
                                                        children: "Tidak Dapat Diberikan"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Proses Keberatan",
                                                        children: "Proses Keberatan"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Sengketa",
                                                        children: "Sengketa"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                children: formik.errors.status_permohonan
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        [
                            "Diberikan",
                            "Diberikan Sebagian"
                        ].includes(formik.values.status_permohonan) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        error: Boolean(formik.errors.bentuk_fisik),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                children: "Bentuk Fisik"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                name: "bentuk_fisik",
                                                label: "Bentuk Fisik",
                                                value: formik.values.bentuk_fisik,
                                                onChange: formik.handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Softcopy",
                                                        children: "Softcopy"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Hardcopy",
                                                        children: "Hardcopy"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                children: formik.errors.bentuk_fisik
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        type: "number",
                                        margin: "normal",
                                        label: "Biaya",
                                        name: "ket_biaya",
                                        value: formik.values.ket_biaya,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.ket_biaya && Boolean(formik.errors.ket_biaya),
                                        helperText: formik.touched.ket_biaya && formik.errors.ket_biaya
                                    })
                                })
                            ]
                        }),
                        formik.values.status_permohonan === "Diberikan Sebagian" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    required: true,
                                    multiline: true,
                                    rows: 2,
                                    margin: "normal",
                                    label: "Penjelasan Penghitaman",
                                    name: "penjelasan_penghitaman",
                                    value: formik.values.penjelasan_penghitaman,
                                    onChange: formik.handleChange,
                                    onBlur: formik.handleBlur,
                                    error: formik.touched.penjelasan_penghitaman && Boolean(formik.errors.penjelasan_penghitaman),
                                    helperText: formik.touched.penjelasan_penghitaman && formik.errors.penjelasan_penghitaman
                                })
                            })
                        }),
                        formik.values.status_permohonan === "Tidak Dapat Diberikan" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        error: Boolean(formik.errors.penguasaan_informasi),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                children: "Penguasaan Informasi"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                name: "penguasaan_informasi",
                                                label: "Penguasaan Informasi",
                                                value: formik.values.penguasaan_informasi,
                                                onChange: formik.handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Bawaslu",
                                                        children: "Bawaslu"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                        value: "Badan Publik Lain",
                                                        children: "Badan Publik Lain..."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_16___default()), {
                                                children: formik.errors.penguasaan_informasi
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: formik.values.penguasaan_informasi === "Badan Publik Lain" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        label: "Badan Publik",
                                        name: "penguasaan_informasi_lain",
                                        value: formik.values.penguasaan_informasi_lain,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.penguasaan_informasi_lain && Boolean(formik.errors.penguasaan_informasi_lain),
                                        helperText: formik.touched.penguasaan_informasi_lain && formik.errors.penguasaan_informasi_lain
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        label: "Dasar Pengecualian",
                                        name: "dasar_pengecualian",
                                        value: formik.values.dasar_pengecualian,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.dasar_pengecualian && Boolean(formik.errors.dasar_pengecualian),
                                        helperText: formik.touched.dasar_pengecualian && formik.errors.dasar_pengecualian
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        margin: "normal",
                                        label: "Pada Pasal",
                                        name: "pada_pasal",
                                        value: formik.values.pada_pasal,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.pada_pasal && Boolean(formik.errors.pada_pasal),
                                        helperText: formik.touched.pada_pasal && formik.errors.pada_pasal
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                    item: true,
                                    xs: 12,
                                    md: 6,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        fullWidth: true,
                                        required: true,
                                        multiline: true,
                                        rows: 4,
                                        margin: "normal",
                                        label: "Keterangan Konsekuensi",
                                        name: "ket_konsekuensi",
                                        value: formik.values.ket_konsekuensi,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.ket_konsekuensi && Boolean(formik.errors.ket_konsekuensi),
                                        helperText: formik.touched.ket_konsekuensi && formik.errors.ket_konsekuensi
                                    })
                                })
                            ]
                        }),
                        formik.values.jenis_respon === "Respon Final" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                item: true,
                                xs: 12,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    required: true,
                                    type: "number",
                                    margin: "normal",
                                    label: "Jangka Waktu Proses (Hari)",
                                    name: "jangka_waktu",
                                    value: formik.values.jangka_waktu,
                                    onChange: formik.handleChange,
                                    onBlur: formik.handleBlur,
                                    error: formik.touched.jangka_waktu && Boolean(formik.errors.jangka_waktu),
                                    helperText: formik.touched.jangka_waktu && formik.errors.jangka_waktu
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                            container: true,
                            columnSpacing: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_20___default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    fullWidth: true,
                                    required: true,
                                    multiline: true,
                                    rows: 4,
                                    margin: "normal",
                                    label: "Pesan Kepada Pemohon",
                                    name: "pesan",
                                    value: formik.values.pesan,
                                    onChange: formik.handleChange,
                                    onBlur: formik.handleBlur,
                                    error: formik.touched.pesan && Boolean(formik.errors.pesan),
                                    helperText: formik.touched.pesan && formik.errors.pesan
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_17___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_18___default()), {
                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_19___default()), {
                                    defaultChecked: true
                                }),
                                label: "Kirim Email Kepada Pemohon",
                                name: "mailed",
                                onChange: formik.handleChange
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            type: "submit",
                            disabled: formik.isSubmitting,
                            children: "Simpan dan Tutup"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                            onClick: props.onClose,
                            type: "button",
                            children: "Tutup"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseDialog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Attributes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Attributes__WEBPACK_IMPORTED_MODULE_12__]);
components_Attributes__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// MUI









// Components

const themeLight = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
    palette: {
        mode: "light"
    }
});
const DataPermohonan = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ detail , profileBawaslu  }, ref)=>{
    const textForQrCode = detail.no_registrasi ? detail.no_registrasi : detail.tiket;
    const isEmpty = Object.keys(detail).length === 0;
    if (isEmpty) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        theme: themeLight,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
            sx: {
                display: "none",
                displayPrint: "block",
                p: 2
            },
            ref: ref,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        display: "flex",
                        flexWrap: "nowrap",
                        p: 2,
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sx: {
                                position: "relative",
                                width: 100,
                                height: 90,
                                mr: 3
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: "/images/logo-buttom.png",
                                alt: "Logo",
                                layout: "fill",
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    variant: "h5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: "BADAN PENGAWAS PEMILIHAN UMUM"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: [
                                        profileBawaslu.alamat_bawaslu,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        profileBawaslu.telp_bawaslu,
                                        " / ",
                                        profileBawaslu.email_bawaslu
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    variant: "h5",
                    align: "center",
                    children: "DATA PERMOHONAN INFORMASI PUBLIK"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_10___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Table__WEBPACK_IMPORTED_MODULE_7___default()), {
                        sx: {
                            minWidth: 650
                        },
                        "aria-label": "simple table",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        colSpan: 2,
                                        children: "Yang menyerahkan formulir permohonan Informasi Publik:"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Nama"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.nama_pemohon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Pekerjaan"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.pekerjaan_pemohon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Telp"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.telp_pemohon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.email_pemohon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Alamat"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.alamat_pemohon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Tanggal Pemohonan"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ":",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Attributes__WEBPACK_IMPORTED_MODULE_12__/* .FormatedDate */ .V2, {
                                                        tanggal: detail.tanggal_permohonan
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Rincian"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.rincian
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: "Tujuan"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            children: [
                                                ": ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: detail.tujuan
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    sx: {
                                        border: 0
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        colSpan: 2,
                                        children: [
                                            profileBawaslu.kota_bawaslu,
                                            ", ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Attributes__WEBPACK_IMPORTED_MODULE_12__/* .CurrentDate */ .xX, {})
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                    sx: {
                        display: "flex",
                        justifyContent: "space-evenly"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Attributes__WEBPACK_IMPORTED_MODULE_12__/* .SetQRCode */ .Kz, {
                                    text: "https://ppidapp.bawaslu.go.id" + "/qr/permohonan/" + textForQrCode
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    sx: {
                                        fontSize: 10,
                                        m: 1
                                    },
                                    children: [
                                        "(Kode merupakan bukti Sah dari Sistem PPID Bawaslu ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " selama dapat terbaca dan terscan dengan benar)"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sx: {
                                position: "relative",
                                width: 100,
                                height: 90,
                                mr: 3
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Attributes__WEBPACK_IMPORTED_MODULE_12__/* .WithDynamicImage */ .aU, {
                                    image: detail.identitas_pemohon,
                                    altText: detail.nama_pemohon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    sx: {
                                        fontSize: 10,
                                        m: 1
                                    },
                                    children: "Pemohon"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
DataPermohonan.displayName = "DataPermohonan";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataPermohonan);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;