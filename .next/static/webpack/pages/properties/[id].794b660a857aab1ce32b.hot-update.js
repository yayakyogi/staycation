"use strict";
self["webpackHotUpdate_N_E"]("pages/properties/[id]",{

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
              className: "relative mb-6 md:mb-0 hover:scale-105",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvcGVydGllcy9baWRdLjc5NGI2NjBhODU3YWFiMWNlMzJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTRyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUN4QyxzQkFDRTtBQUNFLE1BQUUsRUFBQyxZQURMO0FBRUUsYUFBUyxFQUFDLDREQUZaO0FBQUEsY0FJR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0IsMEJBQ0U7QUFBaUMsaUJBQVMsRUFBQyxlQUEzQztBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxzREFBZDtBQUFBLG9CQUNHRCxJQUFJLENBQUNFO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBRUUsbUJBQVMsRUFBQyx3REFGWjtBQUFBLG9CQUlHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0osR0FBWCxDQUFlLFVBQUNJLEtBQUQsRUFBUUYsS0FBUixFQUFrQjtBQUNoQyxnQ0FDRSw4REFBQyx1REFBRDtBQUVFLGtCQUFJLEVBQUMsTUFGUDtBQUdFLGtCQUFJLHdCQUFpQkUsS0FBSyxDQUFDQyxHQUF2QixDQUhOO0FBSUUsdUJBQVMsRUFBQyx1Q0FKWjtBQUFBLHNDQU1FO0FBQ0UseUJBQVMsWUFDUEQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCLFVBQWxCLEdBQStCLFFBRHhCLGtFQURYO0FBQUEsdUNBS0U7QUFBTSwyQkFBUyxFQUFDLHFDQUFoQjtBQUFBLHNEQUNVO0FBQU0sNkJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLGVBZUUsOERBQUMsbURBQUQ7QUFDRSxtQkFBRyxFQUFFRixLQUFLLENBQUNHLFFBRGI7QUFFRSxxQkFBSyxFQUFDLEtBRlI7QUFHRSxzQkFBTSxFQUFDLEtBSFQ7QUFJRSxtQkFBRyxFQUFFSCxLQUFLLENBQUNEO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRixlQXFCRTtBQUFHLHlCQUFTLEVBQUMsK0VBQWI7QUFBQSwwQkFDR0MsS0FBSyxDQUFDRDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGLGVBd0JFO0FBQUcseUJBQVMsRUFBQyw2REFBYjtBQUFBLDJCQUNHQyxLQUFLLENBQUNJLEtBRFQsT0FDaUJKLEtBQUssQ0FBQ0ssT0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRjtBQUFBLCtCQUNnQlAsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQThCRCxXQS9CQTtBQUpILDJCQUNnQkEsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBLDhCQUF3QkEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNENELEtBN0NBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUREO0tBdER1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvQ2F0ZWdvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgaWQ9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtOCBtZDptdC0xNiBweC04IG1kOnB4LTE2IHB0LTggbWQ6cHQtMFwiXHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2BjYXRlZ29yaWVzLSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibWItNiBtZDptYi0xMlwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9wcGlucy1tZWRpdW0gdGV4dC14bCBtZDp0ZXh0LTJ4bCB0ZXh0LWdyYXk5MDAgbWItOVwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2BpdGVtcy0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgaXRlbXMtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb3BlcnRpZXMvJHtpdGVtcy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi02IG1kOm1iLTAgaG92ZXI6c2NhbGUtMTA1XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLmlzUG9wdWxhciA/IFwiYWJzb2x1dGVcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0gYmctcGluayB6LTEwIHJpZ2h0LTAgcm91bmRlZC10ci0yeGwgcm91bmRlZC1ibC0yeGwgcHgtNCBweS0xYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgcG9wcGlucy1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3B1bGFyIDxzcGFuIGNsYXNzTmFtZT1cInBvcHBpbnMtbGlnaHRcIj5DaG9pY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW1zLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBwb3BwaW5zLXJlZ3VsYXIgbXQtNCB0ZXh0LWdyYXk5MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBwb3BwaW5zLWxpZ2h0IHRleHQtZ3JheTUwMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5jaXRyeX0ge2l0ZW1zLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiQnV0dG9uIiwiQ2F0ZWdvcmllcyIsInByb3BzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJpdGVtcyIsIl9pZCIsImlzUG9wdWxhciIsImltYWdlVXJsIiwiY2l0cnkiLCJjb3VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==