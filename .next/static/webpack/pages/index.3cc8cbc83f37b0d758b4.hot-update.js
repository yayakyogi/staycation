"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/landingpage/index.tsx":
/*!*************************************!*\
  !*** ./pages/landingpage/index.tsx ***!
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
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\pages\\landingpage\\index.tsx";









function LandingPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Header__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_parts_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {
      data: _dummy_landingPage__WEBPACK_IMPORTED_MODULE_6__.default.hero
    }, void 0, false, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2NjOGNiYzgzZjM3YjBkNzU4YjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRWUsU0FBU08sV0FBVCxHQUF1QjtBQUNwQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCw0REFBZ0JFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHNEQUFEO0FBQVksVUFBSSxFQUFFRixrRUFBc0JHO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLHNEQUFEO0FBQVksVUFBSSxFQUFFSCxrRUFBc0JJO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLHFEQUFEO0FBQVcsVUFBSSxFQUFFSixtRUFBdUJLO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBVUQ7S0FYdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xhbmRpbmdwYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVycyBmcm9tIFwiLi4vLi4vcGFydHMvSGVhZGVyXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi8uLi9wYXJ0cy9IZXJvXCI7XHJcbmltcG9ydCBNb3N0UGlja2VkIGZyb20gXCIuLi8uLi9wYXJ0cy9Nb3N0UGlja2VkXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi9wYXJ0cy9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBUZXN0aW1vbmkgZnJvbSBcIi4uLy4uL3BhcnRzL1Rlc3RpbW9uaVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9wYXJ0cy9Gb290ZXJcIjtcclxuXHJcbmltcG9ydCBsYW5kaW5nUGFnZSBmcm9tIFwiLi4vLi4vZHVtbXkvbGFuZGluZ1BhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVycyAvPlxyXG4gICAgICA8SGVybyBkYXRhPXtsYW5kaW5nUGFnZS5oZXJvfSAvPlxyXG4gICAgICA8TW9zdFBpY2tlZCBkYXRhPXtsYW5kaW5nUGFnZS5tb3N0UGlja2VkfSAvPlxyXG4gICAgICA8Q2F0ZWdvcmllcyBkYXRhPXtsYW5kaW5nUGFnZS5jYXRlZ29yaWVzfSAvPlxyXG4gICAgICA8VGVzdGltb25pIGRhdGE9e2xhbmRpbmdQYWdlLnRlc3RpbW9uaWFsfSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkZXJzIiwiSGVybyIsIk1vc3RQaWNrZWQiLCJDYXRlZ29yaWVzIiwiVGVzdGltb25pIiwiRm9vdGVyIiwibGFuZGluZ1BhZ2UiLCJMYW5kaW5nUGFnZSIsImhlcm8iLCJtb3N0UGlja2VkIiwiY2F0ZWdvcmllcyIsInRlc3RpbW9uaWFsIl0sInNvdXJjZVJvb3QiOiIifQ==