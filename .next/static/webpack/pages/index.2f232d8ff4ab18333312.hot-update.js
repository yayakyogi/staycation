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
          className: "bg-red px-10 py-4 ".concat(index === 0 ? "row-span-4" : "row-span-2"),
          children: index
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: props.data[index].imageUrl,
          alt: "coba",
          className: "h-96 w-96",
          width: "360",
          height: "460"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmYyMzJkOGZmNGFiMTgzMzMzMTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDO0FBRUEsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGFBQVMsRUFBQyw2Q0FGWjtBQUFBLDRCQUlFO0FBQUksZUFBUyxFQUFDLDJDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0IsMEJBQ0U7QUFFRSxpQkFBUyxFQUFDLHNDQUZaO0FBQUEsZ0NBSUU7QUFDRSxtQkFBUyw4QkFDUEEsS0FBSyxLQUFLLENBQVYsR0FBYyxZQUFkLEdBQTZCLFlBRHRCLENBRFg7QUFBQSxvQkFLR0E7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBV0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxLQUFYLEVBQWtCQyxRQUR6QjtBQUVFLGFBQUcsRUFBQyxNQUZOO0FBR0UsbUJBQVMsRUFBQyxXQUhaO0FBSUUsZUFBSyxFQUFDLEtBSlI7QUFLRSxnQkFBTSxFQUFDO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBLDhCQUNxQkQsS0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUJELEtBdEJBLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQ0Q7S0F6Q3VCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYXJ0cy9Nb3N0UGlja2VkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9zdFBpY2tlZChwcm9wcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiRGF0YTogXCIsIHByb3BzLmRhdGFbMF0ubmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwibW9zdHBpY2tlZFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTE2IHB4LTggbWQ6cHgtMTYgcGItMjBcIlxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicG9wcGlucy1tZWRpdW0gdGV4dC0yeGwgdGV4dC1ncmF5OTAwIG1iLTlcIj5Nb3N0IFBpY2tlZDwvaDE+XHJcbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2Btb3N0cGlja2VkLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNCBncmlkLWZsb3ctY29sIGdhcC00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXJlZCBweC0xMCBweS00ICR7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMCA/IFwicm93LXNwYW4tNFwiIDogXCJyb3ctc3Bhbi0yXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpbmRleH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YVtpbmRleF0uaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgYWx0PVwiY29iYVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC05NiB3LTk2XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjM2MFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDYwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IGdyaWQtZmxvdy1jb2wgZ2FwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTQgYmctcmVkXCI+MTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGJnLXJlZFwiPjI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTIgYmctcmVkXCI+MjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJNb3N0UGlja2VkIiwicHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9