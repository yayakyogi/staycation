"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./parts/Header.tsx":
/*!**************************!*\
  !*** ./parts/Header.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Headers; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Header.tsx",
    _s = $RefreshSig$();





function Headers() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      IsOpen = _useState[0],
      setIsOpen = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var getNavLinkClass = function getNavLinkClass(path) {
    return router.pathname === path ? " text-blue" : "text-gray900";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "shadow",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "w-full pl-2 md:container md:mx-auto md:px-8 flex flex-row py-4 justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-blue text-2xl",
        children: ["Stay", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "text-gray900 text-2xl",
          children: "cation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "".concat(IsOpen ? "block" : "hidden", " flex flex-col absolute top-16 pb-4 pt-2 bg-gray100 shadow w-full left-0 md:bg-transparent md:top-0 md:relative md:flex md:flex-row md:justify-between md:items-center md:w-80 md:p-0"),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "font-normal px-2 py-2 hover:text-gray600 md:p-0 header-link".concat(getNavLinkClass("/")),
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/browseby",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "font-normal px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/browseby")),
            children: "Browse By"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "stories",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "font-normal px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/stories")),
            children: "Stories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "agents",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "font-normal px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/agents")),
            children: "Agents"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        id: "humbergerbtn",
        onClick: function onClick() {
          return setIsOpen(!IsOpen);
        },
        className: "md:hidden text-sm mr-4 px-2 py-1 font-bold border-gray-100 border-1 rounded-md cursor-pointer  focus:outline-none",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "".concat(!IsOpen ? "block" : "hidden", " h-6 w-6 text-gray-100"),
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            fillRule: "evenodd",
            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
            clipRule: "evenodd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "".concat(IsOpen ? "block" : "hidden", " h-6 w-6 text-gray-100"),
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Headers, "fOlgfxn9IS46pnJX6FNpv1l0tgU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Headers;

var _c;

$RefreshReg$(_c, "Headers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzcwYWU4ODAxZDMxNjg3NjZhOWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNJLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsa0JBQTRCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLFdBQU9GLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQkQsSUFBcEIsR0FBMkIsWUFBM0IsR0FBMEMsY0FBakQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw2RkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBLHdDQUNNO0FBQU0sbUJBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUNFLGlCQUFTLFlBQ1BKLE1BQU0sR0FBRyxPQUFILEdBQWEsUUFEWiwwTEFEWDtBQUFBLGdDQUtFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLHVFQUFnRUcsZUFBZSxDQUN0RixHQURzRixDQUEvRSxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQWNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLGdFQUF5REEsZUFBZSxDQUMvRSxXQUQrRSxDQUF4RSxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQXVCRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxnRUFBeURBLGVBQWUsQ0FDL0UsVUFEK0UsQ0FBeEUsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGLGVBZ0NFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLGdFQUF5REEsZUFBZSxDQUMvRSxTQUQrRSxDQUF4RSxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUE4Q0U7QUFDRSxVQUFFLEVBQUMsY0FETDtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRixTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsU0FGWDtBQUdFLGlCQUFTLEVBQUMsbUhBSFo7QUFBQSxnQ0FLRTtBQUNFLGVBQUssRUFBQyw0QkFEUjtBQUVFLG1CQUFTLFlBQUssQ0FBQ0EsTUFBRCxHQUFVLE9BQVYsR0FBb0IsUUFBekIsMkJBRlg7QUFHRSxpQkFBTyxFQUFDLFdBSFY7QUFJRSxjQUFJLEVBQUMsY0FKUDtBQUFBLGlDQU1FO0FBQ0Usb0JBQVEsRUFBQyxTQURYO0FBRUUsYUFBQyxFQUFDLGlKQUZKO0FBR0Usb0JBQVEsRUFBQztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBaUJFO0FBQ0UsZUFBSyxFQUFDLDRCQURSO0FBRUUsbUJBQVMsWUFBS0EsTUFBTSxHQUFHLE9BQUgsR0FBYSxRQUF4QiwyQkFGWDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsaUJBQU8sRUFBQyxXQUpWO0FBS0UsZ0JBQU0sRUFBQyxjQUxUO0FBQUEsaUNBT0U7QUFDRSx5QkFBYSxFQUFDLE9BRGhCO0FBRUUsMEJBQWMsRUFBQyxPQUZqQjtBQUdFLHVCQUFXLEVBQUUsQ0FIZjtBQUlFLGFBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUZEOztHQTFGdUJEO1VBRVBEOzs7S0FGT0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcnMoKSB7XHJcbiAgY29uc3QgW0lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBnZXROYXZMaW5rQ2xhc3MgPSAocGF0aCkgPT4ge1xyXG4gICAgcmV0dXJuIHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aCA/IFwiIHRleHQtYmx1ZVwiIDogXCJ0ZXh0LWdyYXk5MDBcIjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtMiBtZDpjb250YWluZXIgbWQ6bXgtYXV0byBtZDpweC04IGZsZXggZmxleC1yb3cgcHktNCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmx1ZSB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgU3RheTxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheTkwMCB0ZXh0LTJ4bFwiPmNhdGlvbi48L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICBJc09wZW4gPyBcImJsb2NrXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgICB9IGZsZXggZmxleC1jb2wgYWJzb2x1dGUgdG9wLTE2IHBiLTQgcHQtMiBiZy1ncmF5MTAwIHNoYWRvdyB3LWZ1bGwgbGVmdC0wIG1kOmJnLXRyYW5zcGFyZW50IG1kOnRvcC0wIG1kOnJlbGF0aXZlIG1kOmZsZXggbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOml0ZW1zLWNlbnRlciBtZDp3LTgwIG1kOnAtMGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5NjAwIG1kOnAtMCBoZWFkZXItbGluayR7Z2V0TmF2TGlua0NsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCIvXCJcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnJvd3NlYnlcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5NjAwIGhlYWRlci1saW5rJHtnZXROYXZMaW5rQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICBcIi9icm93c2VieVwiXHJcbiAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQnJvd3NlIEJ5XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJzdG9yaWVzXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ub3JtYWwgcHgtMiBweS0yIGhvdmVyOnRleHQtZ3JheTYwMCBoZWFkZXItbGluayR7Z2V0TmF2TGlua0NsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCIvc3Rvcmllc1wiXHJcbiAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3Rvcmllc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiYWdlbnRzXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ub3JtYWwgcHgtMiBweS0yIGhvdmVyOnRleHQtZ3JheTYwMCBoZWFkZXItbGluayR7Z2V0TmF2TGlua0NsYXNzKFxyXG4gICAgICAgICAgICAgICAgXCIvYWdlbnRzXCJcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZ2VudHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGlkPVwiaHVtYmVyZ2VyYnRuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighSXNPcGVuKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiB0ZXh0LXNtIG1yLTQgcHgtMiBweS0xIGZvbnQtYm9sZCBib3JkZXItZ3JheS0xMDAgYm9yZGVyLTEgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2AkeyFJc09wZW4gPyBcImJsb2NrXCIgOiBcImhpZGRlblwifSBoLTYgdy02IHRleHQtZ3JheS0xMDBgfVxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICBkPVwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNOSAxNWExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAyaC02YTEgMSAwIDAxLTEtMXpcIlxyXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7SXNPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn0gaC02IHctNiB0ZXh0LWdyYXktMTAwYH1cclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWRlcnMiLCJJc09wZW4iLCJzZXRJc09wZW4iLCJyb3V0ZXIiLCJnZXROYXZMaW5rQ2xhc3MiLCJwYXRoIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9