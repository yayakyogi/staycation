"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./parts/Testimoni.tsx":
/*!*****************************!*\
  !*** ./parts/Testimoni.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Testimoni; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/star */ "./components/star.tsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./components/button.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Testimoni.tsx";






var _ImgFrame = __webpack_require__(/*! ../assets/images/img-frame-home.png */ "./assets/images/img-frame-home.png");

var ic_star = __webpack_require__(/*! ../assets/icons/ic_star.svg */ "./assets/icons/ic_star.svg");

function Testimoni(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    id: "testimonial",
    className: "container mx-auto flex justify-start items-center px-4 md:px-20 pt-8 md:pt-0 mt-32 pb-20",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "relative md:block mr-16",
      style: {
        width: 400,
        height: 450
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute",
        style: {
          margin: "0 -15px -15px 0",
          zIndex: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: props.data.imageUrl,
          alt: "img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute",
        style: {
          margin: "-30px 0 0 -30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _ImgFrame,
          alt: "_img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        className: "text-2xl text-gray900 poppins-medium",
        children: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_star__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: props.data.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-3xl text-gray900 my-2 w-4/5 leading-normal",
        children: props.data.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-lg text-gray500 poppins-light",
        children: [props.data.familyName, " ", props.data.familyOccupation]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "btn mt-12 block md:inline-block px-8 py-4 md:py-2 rounded-full md:rounded-none bg-indigo text-white text-center shadow-2xl",
        hasShadow: true,
        type: "link",
        href: "#",
        children: "Read Their Story"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Testimoni;

var _c;

$RefreshReg$(_c, "Testimoni");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGJjZjg4Y2ZmOTI2ODc1ZGEyZjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0VBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLCtEQUFELENBQXZCOztBQUVlLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxhQUFTLEVBQUMsMEZBRlo7QUFBQSw0QkFLRTtBQUNFLGVBQVMsRUFBQyx5QkFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFBQSxNQUFNLEVBQUU7QUFBdEIsT0FGVDtBQUFBLDhCQUlFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxpQkFBVjtBQUE2QkMsVUFBQUEsTUFBTSxFQUFFO0FBQXJDLFNBRlQ7QUFBQSwrQkFJRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUosS0FBSyxDQUFDSyxJQUFOLENBQVdDLFFBRGxCO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxlQUFLLEVBQUMsS0FIUjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsYUFBSyxFQUFFO0FBQUVILFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQWpDO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVQLFNBQVo7QUFBdUIsYUFBRyxFQUFDLFdBQTNCO0FBQXVDLGVBQUssRUFBQyxLQUE3QztBQUFtRCxnQkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUF5QkU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQSxrQkFDR0ksS0FBSyxDQUFDSyxJQUFOLENBQVdFO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUsOERBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUVQLEtBQUssQ0FBQ0ssSUFBTixDQUFXRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFBQSxrQkFDR1IsS0FBSyxDQUFDSyxJQUFOLENBQVdJO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBUUU7QUFBRyxpQkFBUyxFQUFDLG9DQUFiO0FBQUEsbUJBQ0dULEtBQUssQ0FBQ0ssSUFBTixDQUFXSyxVQURkLE9BQzJCVixLQUFLLENBQUNLLElBQU4sQ0FBV00sZ0JBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBV0UsOERBQUMsdURBQUQ7QUFDRSxpQkFBUyxFQUFDLDRIQURaO0FBRUUsaUJBQVMsTUFGWDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsWUFBSSxFQUFDLEdBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7S0FqRHVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYXJ0cy9UZXN0aW1vbmkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTdGFyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0YXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmNvbnN0IF9JbWdGcmFtZSA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ltZy1mcmFtZS1ob21lLnBuZ1wiKTtcclxuY29uc3QgaWNfc3RhciA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbnMvaWNfc3Rhci5zdmdcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmkocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInRlc3RpbW9uaWFsXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweC00IG1kOnB4LTIwIHB0LTggbWQ6cHQtMCBtdC0zMiBwYi0yMFwiXHJcbiAgICA+XHJcbiAgICAgIHsvKiBjb2x1bW4gaW1hZ2UgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtZDpibG9jayBtci0xNlwiXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDQwMCwgaGVpZ2h0OiA0NTAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIC0xNXB4IC0xNXB4IDBcIiwgekluZGV4OiAxIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZVVybH1cclxuICAgICAgICAgICAgYWx0PVwiaW1nLWhlcm9cIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjM2MFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIiBzdHlsZT17eyBtYXJnaW46IFwiLTMwcHggMCAwIC0zMHB4XCIgfX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtfSW1nRnJhbWV9IGFsdD1cIl9pbWctaGVyb1wiIHdpZHRoPVwiMzYwXCIgaGVpZ2h0PVwiNTAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBjb2x1bSBjYXB0aW9uICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXk5MDAgcG9wcGlucy1tZWRpdW1cIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLm5hbWV9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8U3RhciBkYXRhPXtwcm9wcy5kYXRhLnJhdGV9IC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ncmF5OTAwIG15LTIgdy00LzUgbGVhZGluZy1ub3JtYWxcIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmNvbnRlbnR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5NTAwIHBvcHBpbnMtbGlnaHRcIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmZhbWlseU5hbWV9IHtwcm9wcy5kYXRhLmZhbWlseU9jY3VwYXRpb259XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBtdC0xMiBibG9jayBtZDppbmxpbmUtYmxvY2sgcHgtOCBweS00IG1kOnB5LTIgcm91bmRlZC1mdWxsIG1kOnJvdW5kZWQtbm9uZSBiZy1pbmRpZ28gdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgIGhhc1NoYWRvd1xyXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWQgVGhlaXIgU3RvcnlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiU3RhciIsIkJ1dHRvbiIsIl9JbWdGcmFtZSIsInJlcXVpcmUiLCJpY19zdGFyIiwiVGVzdGltb25pIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInpJbmRleCIsImRhdGEiLCJpbWFnZVVybCIsIm5hbWUiLCJyYXRlIiwiY29udGVudCIsImZhbWlseU5hbWUiLCJmYW1pbHlPY2N1cGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==