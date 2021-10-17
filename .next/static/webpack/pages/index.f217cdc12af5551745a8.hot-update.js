"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./parts/Categories.tsx":
/*!******************************!*\
  !*** ./parts/Categories.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Categories; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Categories.tsx";




function Categories(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    id: "categories",
    className: "container mx-auto mt-8 md:mt-16 px-8 md:px-16 pt-8 md:pt-0",
    children: props.data.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "mb-6 md:mb-12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
          className: "poppins-medium text-xl md:text-2xl text-gray900 mb-9",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "flex flex-col md:flex-row justify-between items-center",
          children: item.items.map(function (items, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
              type: "link",
              href: "/properties/".concat(items._id),
              className: "relative mb-6 md:mb-0 hover:scale-50",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "".concat(items.isPopular ? "absolute" : "hidden", " bg-pink z-10 right-0 rounded-tr-2xl rounded-bl-2xl px-4 py-1"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "text-base poppins-medium text-white",
                  children: ["Popular ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "poppins-light",
                    children: "Choice"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: items.imageUrl,
                width: "263",
                height: "180",
                alt: items.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "text-lg md:text-xl poppins-regular mt-4 text-gray900 text-center md:text-left",
                children: items.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "text-sm poppins-light text-gray500 text-center md:text-left",
                children: [items.citry, " ", items.country]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 21
              }, _this)]
            }, "items-".concat(index), true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 19
            }, _this);
          })
        }, "items-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, _this)]
      }, "categories-".concat(index), true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Categories;

var _c;

$RefreshReg$(_c, "Categories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIxN2NkYzEyYWY1NTUxNzQ1YTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVlLFNBQVNHLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLFlBREw7QUFFRSxhQUFTLEVBQUMsNERBRlo7QUFBQSxjQUlHQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMvQiwwQkFDRTtBQUFpQyxpQkFBUyxFQUFDLGVBQTNDO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHNEQUFkO0FBQUEsb0JBQ0dELElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFFRSxtQkFBUyxFQUFDLHdEQUZaO0FBQUEsb0JBSUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXSixHQUFYLENBQWUsVUFBQ0ksS0FBRCxFQUFRRixLQUFSLEVBQWtCO0FBQ2hDLGdDQUNFLDhEQUFDLHVEQUFEO0FBRUUsa0JBQUksRUFBQyxNQUZQO0FBR0Usa0JBQUksd0JBQWlCRSxLQUFLLENBQUNDLEdBQXZCLENBSE47QUFJRSx1QkFBUyxFQUFDLHNDQUpaO0FBQUEsc0NBTUU7QUFDRSx5QkFBUyxZQUNQRCxLQUFLLENBQUNFLFNBQU4sR0FBa0IsVUFBbEIsR0FBK0IsUUFEeEIsa0VBRFg7QUFBQSx1Q0FLRTtBQUFNLDJCQUFTLEVBQUMscUNBQWhCO0FBQUEsc0RBQ1U7QUFBTSw2QkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFlRSw4REFBQyxtREFBRDtBQUNFLG1CQUFHLEVBQUVGLEtBQUssQ0FBQ0csUUFEYjtBQUVFLHFCQUFLLEVBQUMsS0FGUjtBQUdFLHNCQUFNLEVBQUMsS0FIVDtBQUlFLG1CQUFHLEVBQUVILEtBQUssQ0FBQ0Q7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZGLGVBcUJFO0FBQUcseUJBQVMsRUFBQywrRUFBYjtBQUFBLDBCQUNHQyxLQUFLLENBQUNEO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkYsZUF3QkU7QUFBRyx5QkFBUyxFQUFDLDZEQUFiO0FBQUEsMkJBQ0dDLEtBQUssQ0FBQ0ksS0FEVCxPQUNpQkosS0FBSyxDQUFDSyxPQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGO0FBQUEsK0JBQ2dCUCxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBOEJELFdBL0JBO0FBSkgsMkJBQ2dCQSxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsOEJBQXdCQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0Q0QsS0E3Q0E7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQ7S0F0RHVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYXJ0cy9DYXRlZ29yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3JpZXMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cImNhdGVnb3JpZXNcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC04IG1kOm10LTE2IHB4LTggbWQ6cHgtMTYgcHQtOCBtZDpwdC0wXCJcclxuICAgID5cclxuICAgICAge3Byb3BzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YGNhdGVnb3JpZXMtJHtpbmRleH1gfSBjbGFzc05hbWU9XCJtYi02IG1kOm1iLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3BwaW5zLW1lZGl1bSB0ZXh0LXhsIG1kOnRleHQtMnhsIHRleHQtZ3JheTkwMCBtYi05XCI+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YGl0ZW1zLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW0uaXRlbXMubWFwKChpdGVtcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BpdGVtcy0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvcGVydGllcy8ke2l0ZW1zLl9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTYgbWQ6bWItMCBob3ZlcjpzY2FsZS01MFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5pc1BvcHVsYXIgPyBcImFic29sdXRlXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGJnLXBpbmsgei0xMCByaWdodC0wIHJvdW5kZWQtdHItMnhsIHJvdW5kZWQtYmwtMnhsIHB4LTQgcHktMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBvcHBpbnMtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9wdWxhciA8c3BhbiBjbGFzc05hbWU9XCJwb3BwaW5zLWxpZ2h0XCI+Q2hvaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtcy5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjYzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW1zLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgcG9wcGlucy1yZWd1bGFyIG10LTQgdGV4dC1ncmF5OTAwIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcG9wcGlucy1saWdodCB0ZXh0LWdyYXk1MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMuY2l0cnl9IHtpdGVtcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkJ1dHRvbiIsIkNhdGVnb3JpZXMiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiaXRlbXMiLCJfaWQiLCJpc1BvcHVsYXIiLCJpbWFnZVVybCIsImNpdHJ5IiwiY291bnRyeSJdLCJzb3VyY2VSb290IjoiIn0=