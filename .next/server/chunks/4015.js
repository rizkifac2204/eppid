"use strict";
exports.id = 4015;
exports.ids = [4015,3724];
exports.modules = {

/***/ 3635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$N": () => (/* binding */ CustomBarChart),
/* harmony export */   "Q3": () => (/* binding */ CustomWordCloud),
/* harmony export */   "UT": () => (/* binding */ CustomAreaChart),
/* harmony export */   "kI": () => (/* binding */ CustomPieChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3765);
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3767);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(738);
/* harmony import */ var chartjs_chart_wordcloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__, chartjs_chart_wordcloud__WEBPACK_IMPORTED_MODULE_5__]);
([chart_js__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__, chartjs_chart_wordcloud__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// MUI




chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chartjs_chart_wordcloud__WEBPACK_IMPORTED_MODULE_5__.WordCloudController, chartjs_chart_wordcloud__WEBPACK_IMPORTED_MODULE_5__.WordElement);
function getRandomColor(length, solid = false) {
    var colors = [];
    for(var i = 0; i < length; i++){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = solid ? 1 : 0.6;
        const c = "rgb(" + r + ", " + g + ", " + b + ", " + a + ")";
        colors.push(c);
    }
    return colors;
}
const pieData = (labels, data)=>{
    const backgroundColor = getRandomColor(labels.length);
    const borderColor = backgroundColor.map((item)=>{
        return item.replace(0.6, 1);
    });
    return {
        labels: labels,
        datasets: [
            {
                label: "Jumlah",
                data: data,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }
        ]
    };
};
const CustomAreaChart = ({ data , loading  })=>{
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!loading && data.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
        severity: "info",
        children: "Data Tidak Ditemukan"
    });
    const labels = data.map((a)=>a.label);
    const values = data.map((a)=>a.value);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Jumlah Permohonan"
            }
        }
    };
    const datas = {
        labels,
        datasets: [
            {
                fill: true,
                data: values,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {
        options: options,
        data: datas,
        height: 80
    });
};
const CustomPieChart = ({ data , loading  })=>{
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!loading && data.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
        severity: "info",
        children: "Data Tidak Ditemukan"
    });
    const labels = data.map((a)=>a.label);
    const values = data.map((a)=>a.value);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {
        width: "100%",
        height: 300,
        options: {
            maintainAspectRatio: false
        },
        data: pieData(labels, values)
    });
};
const CustomBarChart = ({ data , loading  })=>{
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!loading && data.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
        severity: "info",
        children: "Data Tidak Ditemukan"
    });
    const labels = data.map((a)=>a.label);
    const values = data.map((a)=>a.value);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        }
    };
    const datas = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: values,
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {
        options: options,
        data: datas,
        height: 100
    });
};
const CustomWordCloud = ({ data , loading  })=>{
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    if (!loading && data.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Alert__WEBPACK_IMPORTED_MODULE_2___default()), {
        severity: "info",
        children: "Data Tidak Ditemukan"
    });
    const labels = data.map((a)=>a.text);
    const values = data.map((a)=>a.value);
    const datas = {
        labels: labels,
        datasets: [
            {
                label: "",
                data: values
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Chart, {
        height: 300,
        ref: chartRef,
        type: "wordCloud",
        data: datas,
        options: {
            title: {
                display: false,
                text: "Chart.js Word Cloud"
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}; // JAJAL SETELAH UPDATE PACKAGE

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WaitLoadingComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(441);
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_1__);


function WaitLoadingComponent({ loading =false  }) {
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
            variant: "rectangular",
            width: "100%",
            sx: {
                minHeight: 300
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}


/***/ })

};
;