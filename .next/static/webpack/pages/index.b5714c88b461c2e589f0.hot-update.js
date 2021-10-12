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
/* harmony import */ var _dummy_landingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy/landingPage */ "./dummy/landingPage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\pages\\LandingPage\\index.tsx";






function LandingPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_parts_Header__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_parts_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_parts_MostPicked__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: _dummy_landingPage__WEBPACK_IMPORTED_MODULE_3__.default.mostPicked
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
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
            className: "rounded-2xl relative h-auto bg-gradient-to-t card",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "absolute z-10 right-0 bg-pink rounded-tr-2xl rounded-bl-2xl px-10 py-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: "text-base poppins-medium text-white",
                children: ["$", items.price, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "text-base poppins-light text-white",
                  children: "per night"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("figure", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: items.imageUrl,
                alt: items.name,
                width: "373",
                height: "".concat(index === 0 ? "462" : "217")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU3MTRjODhiNDYxYzJlNTg5ZjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRWUsU0FBU0ksV0FBVCxHQUF1QjtBQUNwQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixvQkFDYyw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGQsb0JBQ3VCLDhEQUFDLHNEQUFEO0FBQVksVUFBSSxFQUFFRCxrRUFBc0JFO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEdkI7QUFBQSxrQkFERjtBQUtEO0tBTnVCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ054QjtBQUNBOztBQUVlLFNBQVNGLFVBQVQsQ0FBb0JNLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDO0FBRUEsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsWUFETDtBQUVFLGFBQVMsRUFBQyw2Q0FGWjtBQUFBLDRCQUlFO0FBQUksZUFBUyxFQUFDLDJDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFLLGVBQVMsRUFBQyxzQ0FBZjtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoQyw0QkFDRTtBQUVFLG1CQUFTLFlBQUtBLEtBQUssS0FBSyxDQUFWLEdBQWMsWUFBZCxHQUE2QixZQUFsQyxDQUZYO0FBQUEsaUNBSUU7QUFBSyxxQkFBUyxFQUFDLG1EQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLHdFQUFmO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLHFDQUFoQjtBQUFBLGdDQUNJRCxLQUFLLENBQUNFLEtBRFYsRUFDaUIsR0FEakIsZUFFRTtBQUFNLDJCQUFTLEVBQUMsb0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRTtBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQUcsRUFBRUYsS0FBSyxDQUFDRyxRQURiO0FBRUUsbUJBQUcsRUFBRUgsS0FBSyxDQUFDSSxJQUZiO0FBR0UscUJBQUssRUFBQyxLQUhSO0FBSUUsc0JBQU0sWUFBS0gsS0FBSyxLQUFLLENBQVYsR0FBYyxLQUFkLEdBQXNCLEtBQTNCO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsZ0NBQ3FCQSxLQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBeUJELE9BMUJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEO0tBL0N1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTGFuZGluZ1BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9wYXJ0cy9Nb3N0UGlja2VkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVycyBmcm9tIFwiLi4vLi4vcGFydHMvSGVhZGVyXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi8uLi9wYXJ0cy9IZXJvXCI7XHJcbmltcG9ydCBNb3N0UGlja2VkIGZyb20gXCIuLi8uLi9wYXJ0cy9Nb3N0UGlja2VkXCI7XHJcblxyXG5pbXBvcnQgbGFuZGluZ1BhZ2UgZnJvbSBcIi4uLy4uL2R1bW15L2xhbmRpbmdQYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcnMgLz4gPEhlcm8gLz4gPE1vc3RQaWNrZWQgZGF0YT17bGFuZGluZ1BhZ2UubW9zdFBpY2tlZH0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RQaWNrZWQocHJvcHMpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcIkRhdGE6IFwiLCBwcm9wcy5kYXRhWzBdLm5hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cIm1vc3RwaWNrZWRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xNiBweC04IG1kOnB4LTE2IHBiLTIwXCJcclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInBvcHBpbnMtbWVkaXVtIHRleHQtMnhsIHRleHQtZ3JheTkwMCBtYi05XCI+TW9zdCBQaWNrZWQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1yb3dzLTQgZ3JpZC1mbG93LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgbW9zdHBpY2tlZC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpbmRleCA9PT0gMCA/IFwicm93LXNwYW4tNFwiIDogXCJyb3ctc3Bhbi0yXCJ9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgcmVsYXRpdmUgaC1hdXRvIGJnLWdyYWRpZW50LXRvLXQgY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHJpZ2h0LTAgYmctcGluayByb3VuZGVkLXRyLTJ4bCByb3VuZGVkLWJsLTJ4bCBweC0xMCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwb3BwaW5zLW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtcy5wcmljZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBvcHBpbnMtbGlnaHQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGVyIG5pZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbXMuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzczXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2luZGV4ID09PSAwID8gXCI0NjJcIiA6IFwiMjE3XCJ9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy00IGdyaWQtZmxvdy1jb2wgZ2FwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTQgYmctcmVkXCI+MTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3Bhbi0yIGJnLXJlZFwiPjI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zcGFuLTIgYmctcmVkXCI+MjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNwYW4tMiBiZy1yZWRcIj4yPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWRlcnMiLCJIZXJvIiwiTW9zdFBpY2tlZCIsImxhbmRpbmdQYWdlIiwiTGFuZGluZ1BhZ2UiLCJtb3N0UGlja2VkIiwiUmVhY3QiLCJJbWFnZSIsInByb3BzIiwiZGF0YSIsIm1hcCIsIml0ZW1zIiwiaW5kZXgiLCJwcmljZSIsImltYWdlVXJsIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=