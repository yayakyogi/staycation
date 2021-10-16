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
    className: "container mx-20 flex justify-start items-center px-4 md:px-20 pt-8 md:pt-0 md:mt-32 pb-24",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "relative hidden md:block mr-16",
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "block mt-6 md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: props.data.imageUrl,
          alt: "img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_star__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: props.data.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-2xl md:text-3xl text-gray900 mt-3 md:my-2 w-full md:w-4/5 leading-normal",
        children: props.data.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-lg text-gray500 poppins-light mt-2 md:mt-0",
        children: [props.data.familyName, " ", props.data.familyOccupation]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "btn mt-12 block md:inline-block px-8 py-4 md:py-2 rounded-full md:rounded-none bg-indigo text-white text-center shadow-2xl",
        hasShadow: true,
        type: "link",
        href: "#",
        children: "Read Their Story"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQxNjBjYmE2N2MyOTVkMmFjODguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0VBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLCtEQUFELENBQXZCOztBQUVlLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxhQUFTLEVBQUMsMkZBRlo7QUFBQSw0QkFLRTtBQUNFLGVBQVMsRUFBQyxnQ0FEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFBQSxNQUFNLEVBQUU7QUFBdEIsT0FGVDtBQUFBLDhCQUlFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxpQkFBVjtBQUE2QkMsVUFBQUEsTUFBTSxFQUFFO0FBQXJDLFNBRlQ7QUFBQSwrQkFJRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUosS0FBSyxDQUFDSyxJQUFOLENBQVdDLFFBRGxCO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxlQUFLLEVBQUMsS0FIUjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsYUFBSyxFQUFFO0FBQUVILFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQWpDO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVQLFNBQVo7QUFBdUIsYUFBRyxFQUFDLFdBQTNCO0FBQXVDLGVBQUssRUFBQyxLQUE3QztBQUFtRCxnQkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUF5QkU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQSxrQkFDR0ksS0FBSyxDQUFDSyxJQUFOLENBQVdFO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUVQLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxRQURsQjtBQUVFLGFBQUcsRUFBQyxVQUZOO0FBR0UsZUFBSyxFQUFDLEtBSFI7QUFJRSxnQkFBTSxFQUFDO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVlFLDhEQUFDLHFEQUFEO0FBQU0sWUFBSSxFQUFFTixLQUFLLENBQUNLLElBQU4sQ0FBV0c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBYUU7QUFBRyxpQkFBUyxFQUFDLCtFQUFiO0FBQUEsa0JBQ0dSLEtBQUssQ0FBQ0ssSUFBTixDQUFXSTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWdCRTtBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFBQSxtQkFDR1QsS0FBSyxDQUFDSyxJQUFOLENBQVdLLFVBRGQsT0FDMkJWLEtBQUssQ0FBQ0ssSUFBTixDQUFXTSxnQkFEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGLGVBbUJFLDhEQUFDLHVEQUFEO0FBQ0UsaUJBQVMsRUFBQyw0SEFEWjtBQUVFLGlCQUFTLE1BRlg7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLFlBQUksRUFBQyxHQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdERDtLQXpEdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhcnRzL1Rlc3RpbW9uaS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFN0YXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvblwiO1xyXG5cclxuY29uc3QgX0ltZ0ZyYW1lID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pbWFnZXMvaW1nLWZyYW1lLWhvbWUucG5nXCIpO1xyXG5jb25zdCBpY19zdGFyID0gcmVxdWlyZShcIi4uL2Fzc2V0cy9pY29ucy9pY19zdGFyLnN2Z1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwidGVzdGltb25pYWxcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtMjAgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweC00IG1kOnB4LTIwIHB0LTggbWQ6cHQtMCBtZDptdC0zMiBwYi0yNFwiXHJcbiAgICA+XHJcbiAgICAgIHsvKiBjb2x1bW4gaW1hZ2UgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbWQ6YmxvY2sgbXItMTZcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0MDAsIGhlaWdodDogNDUwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMCAtMTVweCAtMTVweCAwXCIsIHpJbmRleDogMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGFsdD1cImltZy1oZXJvXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzNjBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXCIgc3R5bGU9e3sgbWFyZ2luOiBcIi0zMHB4IDAgMCAtMzBweFwiIH19PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17X0ltZ0ZyYW1lfSBhbHQ9XCJfaW1nLWhlcm9cIiB3aWR0aD1cIjM2MFwiIGhlaWdodD1cIjUwMFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogY29sdW0gY2FwdGlvbiAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5OTAwIHBvcHBpbnMtbWVkaXVtXCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtdC02IG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZVVybH1cclxuICAgICAgICAgICAgYWx0PVwiaW1nLWhlcm9cIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjM2MFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTdGFyIGRhdGE9e3Byb3BzLmRhdGEucmF0ZX0gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCB0ZXh0LWdyYXk5MDAgbXQtMyBtZDpteS0yIHctZnVsbCBtZDp3LTQvNSBsZWFkaW5nLW5vcm1hbFwiPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuY29udGVudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXk1MDAgcG9wcGlucy1saWdodCBtdC0yIG1kOm10LTBcIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmZhbWlseU5hbWV9IHtwcm9wcy5kYXRhLmZhbWlseU9jY3VwYXRpb259XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBtdC0xMiBibG9jayBtZDppbmxpbmUtYmxvY2sgcHgtOCBweS00IG1kOnB5LTIgcm91bmRlZC1mdWxsIG1kOnJvdW5kZWQtbm9uZSBiZy1pbmRpZ28gdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBzaGFkb3ctMnhsXCJcclxuICAgICAgICAgIGhhc1NoYWRvd1xyXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWQgVGhlaXIgU3RvcnlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiU3RhciIsIkJ1dHRvbiIsIl9JbWdGcmFtZSIsInJlcXVpcmUiLCJpY19zdGFyIiwiVGVzdGltb25pIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInpJbmRleCIsImRhdGEiLCJpbWFnZVVybCIsIm5hbWUiLCJyYXRlIiwiY29udGVudCIsImZhbWlseU5hbWUiLCJmYW1pbHlPY2N1cGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==