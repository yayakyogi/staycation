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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Categories.tsx";



function Categories(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    id: "categories",
    className: "container mx-auto mt-8 md:mt-16 px-8 md:px-16 pt-8 md:pt-0",
    children: props.data.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "mb-6 md:mb-12",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
          className: "poppins-medium text-xl md:text-2xl text-gray900 mb-9",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col md:flex-row justify-between items-center",
          children: item.items.map(function (items, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "relative mb-6 md:mb-0",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "".concat(items.isPopular ? "absolute" : "hidden", " bg-pink z-10 right-0 rounded-tr-2xl rounded-bl-2xl px-4 py-1"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "text-base poppins-medium text-white",
                  children: ["Popular ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "poppins-light",
                    children: "Choice"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: items.imageUrl,
                width: "263",
                height: "180",
                alt: items.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "text-lg md:text-xl poppins-regular mt-4 text-gray900 text-center md:text-left",
                children: items.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "text-sm poppins-light text-gray500 text-center md:text-left",
                children: [items.citry, " ", items.country]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 21
              }, _this)]
            }, "items-".concat(index), true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 19
            }, _this);
          })
        }, "items-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)]
      }, "categories-".concat(index), true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTI2OTZiMTBlYmNlMmEwMDViMjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVlLFNBQVNFLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLFlBREw7QUFFRSxhQUFTLEVBQUMsNERBRlo7QUFBQSxjQUlHQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMvQiwwQkFDRTtBQUFpQyxpQkFBUyxFQUFDLGVBQTNDO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHNEQUFkO0FBQUEsb0JBQ0dELElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFFRSxtQkFBUyxFQUFDLHdEQUZaO0FBQUEsb0JBSUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXSixHQUFYLENBQWUsVUFBQ0ksS0FBRCxFQUFRRixLQUFSLEVBQWtCO0FBQ2hDLGdDQUNFO0FBQTRCLHVCQUFTLEVBQUMsdUJBQXRDO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxZQUNQRSxLQUFLLENBQUNDLFNBQU4sR0FBa0IsVUFBbEIsR0FBK0IsUUFEeEIsa0VBRFg7QUFBQSx1Q0FLRTtBQUFNLDJCQUFTLEVBQUMscUNBQWhCO0FBQUEsc0RBQ1U7QUFBTSw2QkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFVRSw4REFBQyxtREFBRDtBQUNFLG1CQUFHLEVBQUVELEtBQUssQ0FBQ0UsUUFEYjtBQUVFLHFCQUFLLEVBQUMsS0FGUjtBQUdFLHNCQUFNLEVBQUMsS0FIVDtBQUlFLG1CQUFHLEVBQUVGLEtBQUssQ0FBQ0Q7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBZ0JFO0FBQUcseUJBQVMsRUFBQywrRUFBYjtBQUFBLDBCQUNHQyxLQUFLLENBQUNEO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQkYsZUFtQkU7QUFBRyx5QkFBUyxFQUFDLDZEQUFiO0FBQUEsMkJBQ0dDLEtBQUssQ0FBQ0csS0FEVCxPQUNpQkgsS0FBSyxDQUFDSSxPQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJGO0FBQUEsK0JBQW1CTixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBeUJELFdBMUJBO0FBSkgsMkJBQ2dCQSxLQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsOEJBQXdCQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1Q0QsS0F4Q0E7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7S0FqRHVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYXJ0cy9DYXRlZ29yaWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiY2F0ZWdvcmllc1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTggbWQ6bXQtMTYgcHgtOCBtZDpweC0xNiBwdC04IG1kOnB0LTBcIlxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtgY2F0ZWdvcmllcy0ke2luZGV4fWB9IGNsYXNzTmFtZT1cIm1iLTYgbWQ6bWItMTJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBvcHBpbnMtbWVkaXVtIHRleHQteGwgbWQ6dGV4dC0yeGwgdGV4dC1ncmF5OTAwIG1iLTlcIj5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgaXRlbXMtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS5pdGVtcy5tYXAoKGl0ZW1zLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BpdGVtcy0ke2luZGV4fWB9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTYgbWQ6bWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmlzUG9wdWxhciA/IFwiYWJzb2x1dGVcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0gYmctcGluayB6LTEwIHJpZ2h0LTAgcm91bmRlZC10ci0yeGwgcm91bmRlZC1ibC0yeGwgcHgtNCBweS0xYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgcG9wcGlucy1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3B1bGFyIDxzcGFuIGNsYXNzTmFtZT1cInBvcHBpbnMtbGlnaHRcIj5DaG9pY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW1zLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBwb3BwaW5zLXJlZ3VsYXIgbXQtNCB0ZXh0LWdyYXk5MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBwb3BwaW5zLWxpZ2h0IHRleHQtZ3JheTUwMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5jaXRyeX0ge2l0ZW1zLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiQ2F0ZWdvcmllcyIsInByb3BzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJpdGVtcyIsImlzUG9wdWxhciIsImltYWdlVXJsIiwiY2l0cnkiLCJjb3VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==