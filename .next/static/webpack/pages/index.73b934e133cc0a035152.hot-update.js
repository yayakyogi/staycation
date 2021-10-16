"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./parts/Testimoni.tsx":
/*!*****************************!*\
  !*** ./parts/Testimoni.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Testimoni; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/star */ "./components/star.tsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./components/button.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\Testimoni.tsx";






var _ImgFrame = __webpack_require__(/*! ../assets/images/img-frame-home.png */ "./assets/images/img-frame-home.png");

var ic_star = __webpack_require__(/*! ../assets/icons/ic_star.svg */ "./assets/icons/ic_star.svg");

function Testimoni(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    id: "testimonial",
    className: "container mx-auto flex justify-start items-center px-4 md:px-20 pt-8 md:pt-0 mt-32 pb-20",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "relative hidden md:block mr-16",
      style: {
        width: 400,
        height: 450
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute",
        style: {
          margin: "0 -15px -15px 0",
          zIndex: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: props.data.imageUrl,
          alt: "img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute",
        style: {
          margin: "-30px 0 0 -30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: _ImgFrame,
          alt: "_img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        className: "text-2xl text-gray900 poppins-medium",
        children: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "block md:hidden",
        style: {
          margin: "0 -15px -15px 0",
          zIndex: 1
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: props.data.imageUrl,
          alt: "img-hero",
          width: "360",
          height: "500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_star__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: props.data.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-3xl text-gray900 my-2 w-4/5 leading-normal",
        children: props.data.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: "text-lg text-gray500 poppins-light",
        children: [props.data.familyName, " ", props.data.familyOccupation]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "btn mt-12 block md:inline-block px-8 py-4 md:py-2 rounded-full md:rounded-none bg-indigo text-white text-center shadow-2xl",
        hasShadow: true,
        type: "link",
        href: "#",
        children: "Read Their Story"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Testimoni;

var _c;

$RefreshReg$(_c, "Testimoni");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzNiOTM0ZTEzM2NjMGEwMzUxNTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsK0VBQUQsQ0FBekI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLCtEQUFELENBQXZCOztBQUVlLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3ZDLHNCQUNFO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxhQUFTLEVBQUMsMEZBRlo7QUFBQSw0QkFLRTtBQUNFLGVBQVMsRUFBQyxnQ0FEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFBQSxNQUFNLEVBQUU7QUFBdEIsT0FGVDtBQUFBLDhCQUlFO0FBQ0UsaUJBQVMsRUFBQyxVQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxpQkFBVjtBQUE2QkMsVUFBQUEsTUFBTSxFQUFFO0FBQXJDLFNBRlQ7QUFBQSwrQkFJRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUosS0FBSyxDQUFDSyxJQUFOLENBQVdDLFFBRGxCO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxlQUFLLEVBQUMsS0FIUjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBZUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsYUFBSyxFQUFFO0FBQUVILFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQWpDO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVQLFNBQVo7QUFBdUIsYUFBRyxFQUFDLFdBQTNCO0FBQXVDLGVBQUssRUFBQyxLQUE3QztBQUFtRCxnQkFBTSxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUF5QkU7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQSxrQkFDR0ksS0FBSyxDQUFDSyxJQUFOLENBQVdFO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFDRSxpQkFBUyxFQUFDLGlCQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVKLFVBQUFBLE1BQU0sRUFBRSxpQkFBVjtBQUE2QkMsVUFBQUEsTUFBTSxFQUFFO0FBQXJDLFNBRlQ7QUFBQSwrQkFJRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUosS0FBSyxDQUFDSyxJQUFOLENBQVdDLFFBRGxCO0FBRUUsYUFBRyxFQUFDLFVBRk47QUFHRSxlQUFLLEVBQUMsS0FIUjtBQUlFLGdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBZUUsOERBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUVOLEtBQUssQ0FBQ0ssSUFBTixDQUFXRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUFnQkU7QUFBRyxpQkFBUyxFQUFDLGlEQUFiO0FBQUEsa0JBQ0dSLEtBQUssQ0FBQ0ssSUFBTixDQUFXSTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUFtQkU7QUFBRyxpQkFBUyxFQUFDLG9DQUFiO0FBQUEsbUJBQ0dULEtBQUssQ0FBQ0ssSUFBTixDQUFXSyxVQURkLE9BQzJCVixLQUFLLENBQUNLLElBQU4sQ0FBV00sZ0JBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixlQXNCRSw4REFBQyx1REFBRDtBQUNFLGlCQUFTLEVBQUMsNEhBRFo7QUFFRSxpQkFBUyxNQUZYO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxZQUFJLEVBQUMsR0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7S0E1RHVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYXJ0cy9UZXN0aW1vbmkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTdGFyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0YXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcclxuXHJcbmNvbnN0IF9JbWdGcmFtZSA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2ltZy1mcmFtZS1ob21lLnBuZ1wiKTtcclxuY29uc3QgaWNfc3RhciA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaWNvbnMvaWNfc3Rhci5zdmdcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmkocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInRlc3RpbW9uaWFsXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBweC00IG1kOnB4LTIwIHB0LTggbWQ6cHQtMCBtdC0zMiBwYi0yMFwiXHJcbiAgICA+XHJcbiAgICAgIHsvKiBjb2x1bW4gaW1hZ2UgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbWQ6YmxvY2sgbXItMTZcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0MDAsIGhlaWdodDogNDUwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMCAtMTVweCAtMTVweCAwXCIsIHpJbmRleDogMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIGFsdD1cImltZy1oZXJvXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzNjBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlXCIgc3R5bGU9e3sgbWFyZ2luOiBcIi0zMHB4IDAgMCAtMzBweFwiIH19PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17X0ltZ0ZyYW1lfSBhbHQ9XCJfaW1nLWhlcm9cIiB3aWR0aD1cIjM2MFwiIGhlaWdodD1cIjUwMFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogY29sdW0gY2FwdGlvbiAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5OTAwIHBvcHBpbnMtbWVkaXVtXCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIC0xNXB4IC0xNXB4IDBcIiwgekluZGV4OiAxIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZVVybH1cclxuICAgICAgICAgICAgYWx0PVwiaW1nLWhlcm9cIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjM2MFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTdGFyIGRhdGE9e3Byb3BzLmRhdGEucmF0ZX0gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWdyYXk5MDAgbXktMiB3LTQvNSBsZWFkaW5nLW5vcm1hbFwiPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuY29udGVudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXk1MDAgcG9wcGlucy1saWdodFwiPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuZmFtaWx5TmFtZX0ge3Byb3BzLmRhdGEuZmFtaWx5T2NjdXBhdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIG10LTEyIGJsb2NrIG1kOmlubGluZS1ibG9jayBweC04IHB5LTQgbWQ6cHktMiByb3VuZGVkLWZ1bGwgbWQ6cm91bmRlZC1ub25lIGJnLWluZGlnbyB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgaGFzU2hhZG93XHJcbiAgICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVhZCBUaGVpciBTdG9yeVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJTdGFyIiwiQnV0dG9uIiwiX0ltZ0ZyYW1lIiwicmVxdWlyZSIsImljX3N0YXIiLCJUZXN0aW1vbmkiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiekluZGV4IiwiZGF0YSIsImltYWdlVXJsIiwibmFtZSIsInJhdGUiLCJjb250ZW50IiwiZmFtaWx5TmFtZSIsImZhbWlseU9jY3VwYXRpb24iXSwic291cmNlUm9vdCI6IiJ9