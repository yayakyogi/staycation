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
    }, this), props.data.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "grid grid-rows-4 grid-flow-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "px-10 py-4 ".concat(index === 0 ? "row-span-4" : "row-span-2"),
          children: index
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: props.data[index].imageUrl,
          alt: props.data[index].name,
          className: "h-96 w-96",
          width: "360",
          height: "".concat(index === 0 ? "460" : "215")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)]
      }, "mostpicked-".concat(index), true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, _this);
    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM3NmFmZjZmYzI0MDc0ODY5NmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDO0FBRUEsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGFBQVMsRUFBQyw2Q0FGWjtBQUFBLDRCQUlFO0FBQUksZUFBUyxFQUFDLDJDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0IsMEJBQ0U7QUFFRSxpQkFBUyxFQUFDLHNDQUZaO0FBQUEsZ0NBSUU7QUFDRSxtQkFBUyx1QkFDUEEsS0FBSyxLQUFLLENBQVYsR0FBYyxZQUFkLEdBQTZCLFlBRHRCLENBRFg7QUFBQSxvQkFLR0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBV0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxLQUFYLEVBQWtCQyxRQUR6QjtBQUVFLGFBQUcsRUFBRUwsS0FBSyxDQUFDQyxJQUFOLENBQVdHLEtBQVgsRUFBa0JFLElBRnpCO0FBR0UsbUJBQVMsRUFBQyxXQUhaO0FBSUUsZUFBSyxFQUFDLEtBSlI7QUFLRSxnQkFBTSxZQUFLRixLQUFLLEtBQUssQ0FBVixHQUFjLEtBQWQsR0FBc0IsS0FBM0I7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUEsOEJBQ3FCQSxLQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxQkQsS0F0QkEsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNDRDtLQXpDdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhcnRzL01vc3RQaWNrZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3N0UGlja2VkKHByb3BzKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJEYXRhOiBcIiwgcHJvcHMuZGF0YVswXS5uYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgaWQ9XCJtb3N0cGlja2VkXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMTYgcHgtOCBtZDpweC0xNiBwYi0yMFwiXHJcbiAgICA+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3BwaW5zLW1lZGl1bSB0ZXh0LTJ4bCB0ZXh0LWdyYXk5MDAgbWItOVwiPk1vc3QgUGlja2VkPC9oMT5cclxuICAgICAge3Byb3BzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17YG1vc3RwaWNrZWQtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IGdyaWQtZmxvdy1jb2wgZ2FwLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMTAgcHktNCAke1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPT09IDAgPyBcInJvdy1zcGFuLTRcIiA6IFwicm93LXNwYW4tMlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aW5kZXh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGFbaW5kZXhdLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvcHMuZGF0YVtpbmRleF0ubmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTk2IHctOTZcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzYwXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2luZGV4ID09PSAwID8gXCI0NjBcIiA6IFwiMjE1XCJ9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IGdyaWQtZmxvdy1jb2wgZ2FwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTQgYmctcmVkXCI+MTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGJnLXJlZFwiPjI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTIgYmctcmVkXCI+MjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJNb3N0UGlja2VkIiwicHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2VVcmwiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==