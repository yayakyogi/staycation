"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./parts/MostPicked.tsx":
/*!******************************!*\
  !*** ./parts/MostPicked.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MostPicked; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\MostPicked.tsx";



function MostPicked(props) {
  var _this = this;

  // console.log("Data: ", props.data[0].name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    id: "mostpicked",
    className: "container mx-auto mt-16 px-8 md:px-16 pb-20",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "poppins-medium text-2xl text-gray900 mb-9",
      children: "Most Picked"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "grid grid-rows-4 grid-flow-col gap-4",
      children: props.data.map(function (items, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "".concat(index === 0 ? "row-span-4" : "row-span-2"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "rounded-2xl",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: "text-base poppins-medium",
                children: ["$", item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: items.imageUrl,
              alt: items.name,
              width: "360",
              height: "".concat(index === 0 ? "460" : "215")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this)
        }, "mostpicked-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = MostPicked;

var _c;

$RefreshReg$(_c, "MostPicked");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM0OGE2ODY1MDRmMjU5ZmYyOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDO0FBRUEsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGFBQVMsRUFBQyw2Q0FGWjtBQUFBLDRCQUlFO0FBQUksZUFBUyxFQUFDLDJDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxzQ0FBZjtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQyw0QkFDRTtBQUVFLG1CQUFTLFlBQUtBLEtBQUssS0FBSyxDQUFWLEdBQWMsWUFBZCxHQUE2QixZQUFsQyxDQUZYO0FBQUEsaUNBSUU7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDRTtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQywwQkFBaEI7QUFBQSxnQ0FDSUMsSUFBSSxDQUFDQyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFNRSw4REFBQyxtREFBRDtBQUNFLGlCQUFHLEVBQUVILEtBQUssQ0FBQ0ksUUFEYjtBQUVFLGlCQUFHLEVBQUVKLEtBQUssQ0FBQ0ssSUFGYjtBQUdFLG1CQUFLLEVBQUMsS0FIUjtBQUlFLG9CQUFNLFlBQUtKLEtBQUssS0FBSyxDQUFWLEdBQWMsS0FBZCxHQUFzQixLQUEzQjtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsZ0NBQ3FCQSxLQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBb0JELE9BckJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEO0tBMUN1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvTW9zdFBpY2tlZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RQaWNrZWQocHJvcHMpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcIkRhdGE6IFwiLCBwcm9wcy5kYXRhWzBdLm5hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cIm1vc3RwaWNrZWRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xNiBweC04IG1kOnB4LTE2IHBiLTIwXCJcclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvcHBpbnMtbWVkaXVtIHRleHQtMnhsIHRleHQtZ3JheTkwMCBtYi05XCI+TW9zdCBQaWNrZWQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1yb3dzLTQgZ3JpZC1mbG93LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgbW9zdHBpY2tlZC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbmRleCA9PT0gMCA/IFwicm93LXNwYW4tNFwiIDogXCJyb3ctc3Bhbi0yXCJ9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwb3BwaW5zLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtcy5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjM2MFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17YCR7aW5kZXggPT09IDAgPyBcIjQ2MFwiIDogXCIyMTVcIn1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNCBncmlkLWZsb3ctY29sIGdhcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi00IGJnLXJlZFwiPjE8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTIgYmctcmVkXCI+MjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGJnLXJlZFwiPjI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTIgYmctcmVkXCI+MjwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTW9zdFBpY2tlZCIsInByb3BzIiwiZGF0YSIsIm1hcCIsIml0ZW1zIiwiaW5kZXgiLCJpdGVtIiwicHJpY2UiLCJpbWFnZVVybCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9