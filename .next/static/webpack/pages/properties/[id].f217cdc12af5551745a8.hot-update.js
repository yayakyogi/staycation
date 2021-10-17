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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvcGVydGllcy9baWRdLmYyMTdjZGMxMmFmNTU1MTc0NWE4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTRyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUN4QyxzQkFDRTtBQUNFLE1BQUUsRUFBQyxZQURMO0FBRUUsYUFBUyxFQUFDLDREQUZaO0FBQUEsY0FJR0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0IsMEJBQ0U7QUFBaUMsaUJBQVMsRUFBQyxlQUEzQztBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxzREFBZDtBQUFBLG9CQUNHRCxJQUFJLENBQUNFO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBRUUsbUJBQVMsRUFBQyx3REFGWjtBQUFBLG9CQUlHRixJQUFJLENBQUNHLEtBQUwsQ0FBV0osR0FBWCxDQUFlLFVBQUNJLEtBQUQsRUFBUUYsS0FBUixFQUFrQjtBQUNoQyxnQ0FDRSw4REFBQyx1REFBRDtBQUVFLGtCQUFJLEVBQUMsTUFGUDtBQUdFLGtCQUFJLHdCQUFpQkUsS0FBSyxDQUFDQyxHQUF2QixDQUhOO0FBSUUsdUJBQVMsRUFBQyxzQ0FKWjtBQUFBLHNDQU1FO0FBQ0UseUJBQVMsWUFDUEQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCLFVBQWxCLEdBQStCLFFBRHhCLGtFQURYO0FBQUEsdUNBS0U7QUFBTSwyQkFBUyxFQUFDLHFDQUFoQjtBQUFBLHNEQUNVO0FBQU0sNkJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLGVBZUUsOERBQUMsbURBQUQ7QUFDRSxtQkFBRyxFQUFFRixLQUFLLENBQUNHLFFBRGI7QUFFRSxxQkFBSyxFQUFDLEtBRlI7QUFHRSxzQkFBTSxFQUFDLEtBSFQ7QUFJRSxtQkFBRyxFQUFFSCxLQUFLLENBQUNEO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRixlQXFCRTtBQUFHLHlCQUFTLEVBQUMsK0VBQWI7QUFBQSwwQkFDR0MsS0FBSyxDQUFDRDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGLGVBd0JFO0FBQUcseUJBQVMsRUFBQyw2REFBYjtBQUFBLDJCQUNHQyxLQUFLLENBQUNJLEtBRFQsT0FDaUJKLEtBQUssQ0FBQ0ssT0FEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRjtBQUFBLCtCQUNnQlAsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQThCRCxXQS9CQTtBQUpILDJCQUNnQkEsS0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBLDhCQUF3QkEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNENELEtBN0NBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUREO0tBdER1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvQ2F0ZWdvcmllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgaWQ9XCJjYXRlZ29yaWVzXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtOCBtZDptdC0xNiBweC04IG1kOnB4LTE2IHB0LTggbWQ6cHQtMFwiXHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2BjYXRlZ29yaWVzLSR7aW5kZXh9YH0gY2xhc3NOYW1lPVwibWItNiBtZDptYi0xMlwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9wcGlucy1tZWRpdW0gdGV4dC14bCBtZDp0ZXh0LTJ4bCB0ZXh0LWdyYXk5MDAgbWItOVwiPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2BpdGVtcy0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpdGVtLml0ZW1zLm1hcCgoaXRlbXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgaXRlbXMtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb3BlcnRpZXMvJHtpdGVtcy5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi02IG1kOm1iLTAgaG92ZXI6c2NhbGUtNTBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuaXNQb3B1bGFyID8gXCJhYnNvbHV0ZVwiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBiZy1waW5rIHotMTAgcmlnaHQtMCByb3VuZGVkLXRyLTJ4bCByb3VuZGVkLWJsLTJ4bCBweC00IHB5LTFgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwb3BwaW5zLW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVsYXIgPHNwYW4gY2xhc3NOYW1lPVwicG9wcGlucy1saWdodFwiPkNob2ljZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbXMuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI2M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHBvcHBpbnMtcmVndWxhciBtdC00IHRleHQtZ3JheTkwMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHBvcHBpbnMtbGlnaHQgdGV4dC1ncmF5NTAwIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmNpdHJ5fSB7aXRlbXMuY291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJCdXR0b24iLCJDYXRlZ29yaWVzIiwicHJvcHMiLCJkYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsIml0ZW1zIiwiX2lkIiwiaXNQb3B1bGFyIiwiaW1hZ2VVcmwiLCJjaXRyeSIsImNvdW50cnkiXSwic291cmNlUm9vdCI6IiJ9