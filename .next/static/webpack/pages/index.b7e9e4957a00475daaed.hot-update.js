"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\components\\button.tsx";





function Button(props) {
  var className = [props.className];
  if (props.hasShadow) className.push(props.hasShadow);

  var onClick = function onClick() {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading || props.isDisabled) {
    if (props.isDisabled) {
      className.push("bg-gray200");
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
      className: className.join(" "),
      style: props.style,
      children: porps.isLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "animate-spin h-5 w-5 mr-3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "text-sm",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true) : props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }

  if (props.type === "link") {
    if (props.isEkternal) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line react/jsx-no-target-blank
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: props.href,
          className: className.join(" "),
          style: props.style,
          target: props.target === "_blank" ? "_blank" : undefinded,
          rel: props.target === "_blank" ? "noopener noreferrer" : undefinded,
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this)
      );
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: props.href,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          className: className.join(" "),
          style: props.styles,
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    className: className.join(" "),
    style: props.style,
    onClick: onClick,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
_c = Button;
Button.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["button", "link"]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  hasShadow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isEkternal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

var _c;

$RefreshReg$(_c, "Button");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdlOWU0OTU3YTAwNDc1ZGFhZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0csTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDcEMsTUFBTUMsU0FBUyxHQUFHLENBQUNELEtBQUssQ0FBQ0MsU0FBUCxDQUFsQjtBQUNBLE1BQUlELEtBQUssQ0FBQ0UsU0FBVixFQUFxQkQsU0FBUyxDQUFDRSxJQUFWLENBQWVILEtBQUssQ0FBQ0UsU0FBckI7O0FBRXJCLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsUUFBSUosS0FBSyxDQUFDSSxPQUFWLEVBQW1CSixLQUFLLENBQUNJLE9BQU47QUFDcEIsR0FGRDs7QUFJQSxNQUFJSixLQUFLLENBQUNLLFNBQU4sSUFBbUJMLEtBQUssQ0FBQ00sVUFBN0IsRUFBeUM7QUFDdkMsUUFBSU4sS0FBSyxDQUFDTSxVQUFWLEVBQXNCO0FBQ3BCTCxNQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZSxZQUFmO0FBQ0Q7O0FBQ0Qsd0JBQ0U7QUFBTSxlQUFTLEVBQUVGLFNBQVMsQ0FBQ00sSUFBVixDQUFlLEdBQWYsQ0FBakI7QUFBc0MsV0FBSyxFQUFFUCxLQUFLLENBQUNRLEtBQW5EO0FBQUEsZ0JBQ0dDLEtBQUssQ0FBQ0osU0FBTixnQkFDQztBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBREQsR0FNQ0wsS0FBSyxDQUFDVTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVlEOztBQUVELE1BQUlWLEtBQUssQ0FBQ1csSUFBTixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUlYLEtBQUssQ0FBQ1ksVUFBVixFQUFzQjtBQUNwQjtBQUFBO0FBQ0U7QUFDQTtBQUNFLGNBQUksRUFBRVosS0FBSyxDQUFDYSxJQURkO0FBRUUsbUJBQVMsRUFBRVosU0FBUyxDQUFDTSxJQUFWLENBQWUsR0FBZixDQUZiO0FBR0UsZUFBSyxFQUFFUCxLQUFLLENBQUNRLEtBSGY7QUFJRSxnQkFBTSxFQUFFUixLQUFLLENBQUNjLE1BQU4sS0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsR0FBdUNDLFVBSmpEO0FBS0UsYUFBRyxFQUFFZixLQUFLLENBQUNjLE1BQU4sS0FBaUIsUUFBakIsR0FBNEIscUJBQTVCLEdBQW9EQyxVQUwzRDtBQUFBLG9CQU9HZixLQUFLLENBQUNVO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBWUQsS0FiRCxNQWFPO0FBQ0wsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVWLEtBQUssQ0FBQ2EsSUFBbEI7QUFBQSwrQkFDRTtBQUFRLG1CQUFTLEVBQUVaLFNBQVMsQ0FBQ00sSUFBVixDQUFlLEdBQWYsQ0FBbkI7QUFBd0MsZUFBSyxFQUFFUCxLQUFLLENBQUNnQixNQUFyRDtBQUFBLG9CQUNHaEIsS0FBSyxDQUFDVTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFPRDtBQUNGOztBQUNELHNCQUNFO0FBQ0UsYUFBUyxFQUFFVCxTQUFTLENBQUNNLElBQVYsQ0FBZSxHQUFmLENBRGI7QUFFRSxTQUFLLEVBQUVQLEtBQUssQ0FBQ1EsS0FGZjtBQUdFLFdBQU8sRUFBRUosT0FIWDtBQUFBLGNBS0dKLEtBQUssQ0FBQ1U7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtLQTNEdUJYO0FBNkR4QkEsTUFBTSxDQUFDRCxTQUFQLEdBQW1CO0FBQ2pCYSxFQUFBQSxJQUFJLEVBQUViLHVEQUFBLENBQWdCLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBaEIsQ0FEVztBQUVqQk0sRUFBQUEsT0FBTyxFQUFFTix3REFGUTtBQUdqQmUsRUFBQUEsSUFBSSxFQUFFZiwwREFIVztBQUlqQkcsRUFBQUEsU0FBUyxFQUFFSCwwREFKTTtBQUtqQk8sRUFBQUEsU0FBUyxFQUFFUCx3REFMTTtBQU1qQlEsRUFBQUEsVUFBVSxFQUFFUix3REFOSztBQU9qQkksRUFBQUEsU0FBUyxFQUFFSix3REFQTTtBQVFqQmMsRUFBQUEsVUFBVSxFQUFFZCx3REFBY3NCO0FBUlQsQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc05hbWUgPSBbcHJvcHMuY2xhc3NOYW1lXTtcclxuICBpZiAocHJvcHMuaGFzU2hhZG93KSBjbGFzc05hbWUucHVzaChwcm9wcy5oYXNTaGFkb3cpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQ2xpY2spIHByb3BzLm9uQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICBpZiAocHJvcHMuaXNMb2FkaW5nIHx8IHByb3BzLmlzRGlzYWJsZWQpIHtcclxuICAgIGlmIChwcm9wcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIGNsYXNzTmFtZS5wdXNoKFwiYmctZ3JheTIwMFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oXCIgXCIpfSBzdHlsZT17cHJvcHMuc3R5bGV9PlxyXG4gICAgICAgIHtwb3Jwcy5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gaC01IHctNSBtci0zXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcHMudHlwZSA9PT0gXCJsaW5rXCIpIHtcclxuICAgIGlmIChwcm9wcy5pc0VrdGVybmFsKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmtcclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj17cHJvcHMuaHJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxyXG4gICAgICAgICAgdGFyZ2V0PXtwcm9wcy50YXJnZXQgPT09IFwiX2JsYW5rXCIgPyBcIl9ibGFua1wiIDogdW5kZWZpbmRlZH1cclxuICAgICAgICAgIHJlbD17cHJvcHMudGFyZ2V0ID09PSBcIl9ibGFua1wiID8gXCJub29wZW5lciBub3JlZmVycmVyXCIgOiB1bmRlZmluZGVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2E+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKFwiIFwiKX0gc3R5bGU9e3Byb3BzLnN0eWxlc30+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbihcIiBcIil9XHJcbiAgICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICB0eXBlOiBwcm9wVHlwZXMub25lT2YoW1wiYnV0dG9uXCIsIFwibGlua1wiXSksXHJcbiAgb25DbGljazogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgaHJlZjogcHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaXNMb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcclxuICBpc0Rpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcclxuICBoYXNTaGFkb3c6IHByb3BUeXBlcy5ib29sLFxyXG4gIGlzRWt0ZXJuYWw6IHByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwicHJvcFR5cGVzIiwiQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJoYXNTaGFkb3ciLCJwdXNoIiwib25DbGljayIsImlzTG9hZGluZyIsImlzRGlzYWJsZWQiLCJqb2luIiwic3R5bGUiLCJwb3JwcyIsImNoaWxkcmVuIiwidHlwZSIsImlzRWt0ZXJuYWwiLCJocmVmIiwidGFyZ2V0IiwidW5kZWZpbmRlZCIsInN0eWxlcyIsIm9uZU9mIiwiZnVuYyIsInN0cmluZyIsImJvb2wiXSwic291cmNlUm9vdCI6IiJ9