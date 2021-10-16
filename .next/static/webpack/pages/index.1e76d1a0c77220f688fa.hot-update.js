"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/star.tsx":
/*!*****************************!*\
  !*** ./components/star.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Star; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\components\\star.tsx";




var star = __webpack_require__(/*! ../assets/icons/ic_star.svg */ "./assets/icons/ic_star.svg");

function Star(props) {
  var _this = this;

  var data = props.data; // destructuring props

  var number = Math.ceil(data); // bulatkan angka desimal ke atas

  var stars = []; // buat variabel array

  for (var i = 0; i < number; i++) {
    stars.push(star); // push icon star ke dalam array
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "mt-10",
    children: stars.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: star,
        alt: "ic_star",
        width: "36",
        height: "36"
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = Star;

var _c;

$RefreshReg$(_c, "Star");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWU3NmQxYTBjNzcyMjBmNjg4ZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsK0RBQUQsQ0FBcEI7O0FBRWUsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ2xDLE1BQVFDLElBQVIsR0FBaUJELEtBQWpCLENBQVFDLElBQVIsQ0FEa0MsQ0FDVjs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUgsSUFBVixDQUFmLENBRmtDLENBRUY7O0FBQ2hDLE1BQU1JLEtBQUssR0FBRyxFQUFkLENBSGtDLENBR2hCOztBQUNsQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLE1BQXBCLEVBQTRCSSxDQUFDLEVBQTdCLEVBQWlDO0FBQy9CRCxJQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV1YsSUFBWCxFQUQrQixDQUNiO0FBQ25COztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQSxjQUNHUSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDMUIsMEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUViLElBQVo7QUFBOEIsV0FBRyxFQUFDLFNBQWxDO0FBQTRDLGFBQUssRUFBQyxJQUFsRDtBQUF1RCxjQUFNLEVBQUM7QUFBOUQsU0FBdUJhLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUdELEtBSkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtLQWhCdUJYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3Rhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3Qgc3RhciA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbnMvaWNfc3Rhci5zdmdcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyKHByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wczsgLy8gZGVzdHJ1Y3R1cmluZyBwcm9wc1xyXG4gIGNvbnN0IG51bWJlciA9IE1hdGguY2VpbChkYXRhKTsgLy8gYnVsYXRrYW4gYW5na2EgZGVzaW1hbCBrZSBhdGFzXHJcbiAgY29uc3Qgc3RhcnMgPSBbXTsgLy8gYnVhdCB2YXJpYWJlbCBhcnJheVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuICAgIHN0YXJzLnB1c2goc3Rhcik7IC8vIHB1c2ggaWNvbiBzdGFyIGtlIGRhbGFtIGFycmF5XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XHJcbiAgICAgIHtzdGFycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3N0YXJ9IGtleT17aW5kZXh9IGFsdD1cImljX3N0YXJcIiB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMzZcIiAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInN0YXIiLCJyZXF1aXJlIiwiU3RhciIsInByb3BzIiwiZGF0YSIsIm51bWJlciIsIk1hdGgiLCJjZWlsIiwic3RhcnMiLCJpIiwicHVzaCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=