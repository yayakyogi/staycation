"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/LandingPage/index.tsx":
/*!*************************************!*\
  !*** ./pages/LandingPage/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LandingPage; }
/* harmony export */ });
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../parts/Header */ "./parts/Header.tsx");
/* harmony import */ var _parts_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../parts/Hero */ "./parts/Hero.tsx");
/* harmony import */ var _parts_MostPicked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../parts/MostPicked */ "./parts/MostPicked.tsx");
/* harmony import */ var _parts_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parts/Categories */ "./parts/Categories.tsx");
/* harmony import */ var _parts_Testimoni__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parts/Testimoni */ "./parts/Testimoni.tsx");
/* harmony import */ var _parts_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parts/Footer */ "./parts/Footer.tsx");
/* harmony import */ var _dummy_landingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dummy/landingPage */ "./dummy/landingPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\pages\\LandingPage\\index.tsx";









function LandingPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Header__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_MostPicked__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: _dummy_landingPage__WEBPACK_IMPORTED_MODULE_6__.default.mostPicked
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Categories__WEBPACK_IMPORTED_MODULE_3__.default, {
      data: _dummy_landingPage__WEBPACK_IMPORTED_MODULE_6__.default.categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Testimoni__WEBPACK_IMPORTED_MODULE_4__.default, {
      data: _dummy_landingPage__WEBPACK_IMPORTED_MODULE_6__.default.testimonial
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = LandingPage;

var _c;

$RefreshReg$(_c, "LandingPage");

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


/***/ }),

/***/ "./parts/Footer.tsx":
/*!**************************!*\
  !*** ./parts/Footer.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Footer.tsx";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "Footer"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTViM2JlZGQ5YTgzMjcwYmYxODAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRWUsU0FBU08sV0FBVCxHQUF1QjtBQUNwQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHNEQUFEO0FBQVksVUFBSSxFQUFFRCxrRUFBc0JFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLHNEQUFEO0FBQVksVUFBSSxFQUFFRixrRUFBc0JHO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLHFEQUFEO0FBQVcsVUFBSSxFQUFFSCxtRUFBdUJJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBVUQ7S0FYdUJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4Qjs7QUFFZSxTQUFTRixNQUFULEdBQWtCO0FBQy9CLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtLQUZ1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTGFuZGluZ1BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9wYXJ0cy9Gb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXJzIGZyb20gXCIuLi8uLi9wYXJ0cy9IZWFkZXJcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uLy4uL3BhcnRzL0hlcm9cIjtcclxuaW1wb3J0IE1vc3RQaWNrZWQgZnJvbSBcIi4uLy4uL3BhcnRzL01vc3RQaWNrZWRcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uL3BhcnRzL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IFRlc3RpbW9uaSBmcm9tIFwiLi4vLi4vcGFydHMvVGVzdGltb25pXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL3BhcnRzL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IGxhbmRpbmdQYWdlIGZyb20gXCIuLi8uLi9kdW1teS9sYW5kaW5nUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJzIC8+XHJcbiAgICAgIDxIZXJvIC8+XHJcbiAgICAgIDxNb3N0UGlja2VkIGRhdGE9e2xhbmRpbmdQYWdlLm1vc3RQaWNrZWR9IC8+XHJcbiAgICAgIDxDYXRlZ29yaWVzIGRhdGE9e2xhbmRpbmdQYWdlLmNhdGVnb3JpZXN9IC8+XHJcbiAgICAgIDxUZXN0aW1vbmkgZGF0YT17bGFuZGluZ1BhZ2UudGVzdGltb25pYWx9IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiA8ZGl2PkZvb3RlcjwvZGl2PjtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZGVycyIsIkhlcm8iLCJNb3N0UGlja2VkIiwiQ2F0ZWdvcmllcyIsIlRlc3RpbW9uaSIsIkZvb3RlciIsImxhbmRpbmdQYWdlIiwiTGFuZGluZ1BhZ2UiLCJtb3N0UGlja2VkIiwiY2F0ZWdvcmllcyIsInRlc3RpbW9uaWFsIiwiUmVhY3QiXSwic291cmNlUm9vdCI6IiJ9