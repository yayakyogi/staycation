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
    className: "shadow bg-white",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "w-full px-2 md:container md:mx-auto md:px-8 flex flex-row py-4 justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "text-xl text-blue md:text-2xl",
        children: ["Stay", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "text-xl text-gray900 md:text-2xl",
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
        className: "".concat(IsOpen ? "block" : "hidden", " flex flex-col absolute top-16 pb-4 pt-2 bg-gray100 shadow-sm w-full left-0 md:shadow-none md:bg-transparent md:top-0 md:relative md:flex md:flex-row md:justify-between md:items-center md:w-80 md:p-0"),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: "font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 md:p-0 header-link".concat(getNavLinkClass("/")),
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
            className: "font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/browseby")),
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
            className: "font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/stories")),
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
            className: "font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link".concat(getNavLinkClass("/agents")),
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
          className: "".concat(!IsOpen ? "block" : "hidden", " h-6 w-6 text-gray900"),
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
          className: "".concat(IsOpen ? "block" : "hidden", " h-6 w-6 text-gray900"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmM1ZDE2MWQ4NDU0ZTFkYjExOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNJLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsa0JBQTRCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPRyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLFdBQU9GLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQkQsSUFBcEIsR0FBMkIsWUFBM0IsR0FBMEMsY0FBakQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNkZBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsK0JBQWQ7QUFBQSx3Q0FDTTtBQUFNLG1CQUFTLEVBQUMsa0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFDRSxpQkFBUyxZQUNQSixNQUFNLEdBQUcsT0FBSCxHQUFhLFFBRFosNE1BRFg7QUFBQSxnQ0FLRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyw0RkFBcUZHLGVBQWUsQ0FDM0csR0FEMkcsQ0FBcEcsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFjRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxXQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxxRkFBOEVBLGVBQWUsQ0FDcEcsV0FEb0csQ0FBN0YsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEYsZUF1QkUsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMscUZBQThFQSxlQUFlLENBQ3BHLFVBRG9HLENBQTdGLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQWdDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxxRkFBOEVBLGVBQWUsQ0FDcEcsU0FEb0csQ0FBN0YsQ0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBOENFO0FBQ0UsVUFBRSxFQUFDLGNBREw7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUYsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLFNBRlg7QUFHRSxpQkFBUyxFQUFDLG1IQUhaO0FBQUEsZ0NBS0U7QUFDRSxlQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBUyxZQUFLLENBQUNBLE1BQUQsR0FBVSxPQUFWLEdBQW9CLFFBQXpCLDBCQUZYO0FBR0UsaUJBQU8sRUFBQyxXQUhWO0FBSUUsY0FBSSxFQUFDLGNBSlA7QUFBQSxpQ0FNRTtBQUNFLG9CQUFRLEVBQUMsU0FEWDtBQUVFLGFBQUMsRUFBQyxpSkFGSjtBQUdFLG9CQUFRLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQWlCRTtBQUNFLGVBQUssRUFBQyw0QkFEUjtBQUVFLG1CQUFTLFlBQUtBLE1BQU0sR0FBRyxPQUFILEdBQWEsUUFBeEIsMEJBRlg7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGlCQUFPLEVBQUMsV0FKVjtBQUtFLGdCQUFNLEVBQUMsY0FMVDtBQUFBLGlDQU9FO0FBQ0UseUJBQWEsRUFBQyxPQURoQjtBQUVFLDBCQUFjLEVBQUMsT0FGakI7QUFHRSx1QkFBVyxFQUFFLENBSGY7QUFJRSxhQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1GRDs7R0ExRnVCRDtVQUVQRDs7O0tBRk9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhcnRzL0hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJzKCkge1xyXG4gIGNvbnN0IFtJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZ2V0TmF2TGlua0NsYXNzID0gKHBhdGgpID0+IHtcclxuICAgIHJldHVybiByb3V0ZXIucGF0aG5hbWUgPT09IHBhdGggPyBcIiB0ZXh0LWJsdWVcIiA6IFwidGV4dC1ncmF5OTAwXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IGJnLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgbWQ6Y29udGFpbmVyIG1kOm14LWF1dG8gbWQ6cHgtOCBmbGV4IGZsZXgtcm93IHB5LTQganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYmx1ZSBtZDp0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgU3RheTxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5OTAwIG1kOnRleHQtMnhsXCI+Y2F0aW9uLjwvc3Bhbj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgIElzT3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgIH0gZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSB0b3AtMTYgcGItNCBwdC0yIGJnLWdyYXkxMDAgc2hhZG93LXNtIHctZnVsbCBsZWZ0LTAgbWQ6c2hhZG93LW5vbmUgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6dG9wLTAgbWQ6cmVsYXRpdmUgbWQ6ZmxleCBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWJldHdlZW4gbWQ6aXRlbXMtY2VudGVyIG1kOnctODAgbWQ6cC0wYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbm9ybWFsIHRleHQtc20gbWQ6dGV4dC1iYXNlIHB4LTIgcHktMiBob3Zlcjp0ZXh0LWdyYXk2MDAgbWQ6cC0wIGhlYWRlci1saW5rJHtnZXROYXZMaW5rQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICBcIi9cIlxyXG4gICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9icm93c2VieVwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbm9ybWFsIHRleHQtc20gbWQ6dGV4dC1iYXNlIHB4LTIgcHktMiBob3Zlcjp0ZXh0LWdyYXk2MDAgaGVhZGVyLWxpbmske2dldE5hdkxpbmtDbGFzcyhcclxuICAgICAgICAgICAgICAgIFwiL2Jyb3dzZWJ5XCJcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCcm93c2UgQnlcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cInN0b3JpZXNcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5NjAwIGhlYWRlci1saW5rJHtnZXROYXZMaW5rQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICBcIi9zdG9yaWVzXCJcclxuICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdG9yaWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJhZ2VudHNcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCB0ZXh0LXNtIG1kOnRleHQtYmFzZSBweC0yIHB5LTIgaG92ZXI6dGV4dC1ncmF5NjAwIGhlYWRlci1saW5rJHtnZXROYXZMaW5rQ2xhc3MoXHJcbiAgICAgICAgICAgICAgICBcIi9hZ2VudHNcIlxyXG4gICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFnZW50c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJodW1iZXJnZXJidG5cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFJc09wZW4pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHRleHQtc20gbXItNCBweC0yIHB5LTEgZm9udC1ib2xkIGJvcmRlci1ncmF5LTEwMCBib3JkZXItMSByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7IUlzT3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9IGgtNiB3LTYgdGV4dC1ncmF5OTAwYH1cclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTkgMTVhMSAxIDAgMDExLTFoNmExIDEgMCAxMTAgMmgtNmExIDEgMCAwMS0xLTF6XCJcclxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake0lzT3BlbiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9IGgtNiB3LTYgdGV4dC1ncmF5OTAwYH1cclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWRlcnMiLCJJc09wZW4iLCJzZXRJc09wZW4iLCJyb3V0ZXIiLCJnZXROYXZMaW5rQ2xhc3MiLCJwYXRoIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9