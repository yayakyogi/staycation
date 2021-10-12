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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWM4OWFjOWI4MWU2MzQyYThmNTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0csTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDcEMsTUFBTUMsU0FBUyxHQUFHLENBQUNELEtBQUssQ0FBQ0MsU0FBUCxDQUFsQjtBQUNBLE1BQUlELEtBQUssQ0FBQ0UsU0FBVixFQUFxQkQsU0FBUyxDQUFDRSxJQUFWLENBQWVILEtBQUssQ0FBQ0UsU0FBckI7O0FBRXJCLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsUUFBSUosS0FBSyxDQUFDSSxPQUFWLEVBQW1CSixLQUFLLENBQUNJLE9BQU47QUFDcEIsR0FGRDs7QUFJQSxNQUFJSixLQUFLLENBQUNLLFNBQU4sSUFBbUJMLEtBQUssQ0FBQ00sVUFBN0IsRUFBeUM7QUFDdkMsUUFBSU4sS0FBSyxDQUFDTSxVQUFWLEVBQXNCO0FBQ3BCTCxNQUFBQSxTQUFTLENBQUNFLElBQVYsQ0FBZSxZQUFmO0FBQ0Q7O0FBQ0Qsd0JBQ0U7QUFBTSxlQUFTLEVBQUVGLFNBQVMsQ0FBQ00sSUFBVixDQUFlLEdBQWYsQ0FBakI7QUFBc0MsV0FBSyxFQUFFUCxLQUFLLENBQUNRLEtBQW5EO0FBQUEsZ0JBQ0dDLEtBQUssQ0FBQ0osU0FBTixnQkFDQztBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBREQsR0FNQ0wsS0FBSyxDQUFDVTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVlEOztBQUVELE1BQUlWLEtBQUssQ0FBQ1csSUFBTixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUlYLEtBQUssQ0FBQ1ksVUFBVixFQUFzQjtBQUNwQjtBQUFBO0FBQ0U7QUFDQTtBQUNFLGNBQUksRUFBRVosS0FBSyxDQUFDYSxJQURkO0FBRUUsbUJBQVMsRUFBRVosU0FBUyxDQUFDTSxJQUFWLENBQWUsR0FBZixDQUZiO0FBR0UsZUFBSyxFQUFFUCxLQUFLLENBQUNRLEtBSGY7QUFJRSxnQkFBTSxFQUFFUixLQUFLLENBQUNjLE1BQU4sS0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsR0FBdUNDLFVBSmpEO0FBS0UsYUFBRyxFQUFFZixLQUFLLENBQUNjLE1BQU4sS0FBaUIsUUFBakIsR0FBNEIscUJBQTVCLEdBQW9EQyxVQUwzRDtBQUFBLG9CQU9HZixLQUFLLENBQUNVO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBWUQsS0FiRCxNQWFPO0FBQ0wsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUVWLEtBQUssQ0FBQ2EsSUFBbEI7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVaLFNBQVMsQ0FBQ00sSUFBVixDQUFlLEdBQWYsQ0FBZDtBQUFtQyxlQUFLLEVBQUVQLEtBQUssQ0FBQ2dCLE1BQWhEO0FBQUEsb0JBQ0doQixLQUFLLENBQUNVO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EO0FBQ0Y7O0FBQ0Qsc0JBQ0U7QUFDRSxhQUFTLEVBQUVULFNBQVMsQ0FBQ00sSUFBVixDQUFlLEdBQWYsQ0FEYjtBQUVFLFNBQUssRUFBRVAsS0FBSyxDQUFDUSxLQUZmO0FBR0UsV0FBTyxFQUFFSixPQUhYO0FBQUEsY0FLR0osS0FBSyxDQUFDVTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEO0tBM0R1Qlg7QUE2RHhCQSxNQUFNLENBQUNELFNBQVAsR0FBbUI7QUFDakJhLEVBQUFBLElBQUksRUFBRWIsdURBQUEsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFoQixDQURXO0FBRWpCTSxFQUFBQSxPQUFPLEVBQUVOLHdEQUZRO0FBR2pCZSxFQUFBQSxJQUFJLEVBQUVmLDBEQUhXO0FBSWpCRyxFQUFBQSxTQUFTLEVBQUVILDBEQUpNO0FBS2pCTyxFQUFBQSxTQUFTLEVBQUVQLHdEQUxNO0FBTWpCUSxFQUFBQSxVQUFVLEVBQUVSLHdEQU5LO0FBT2pCSSxFQUFBQSxTQUFTLEVBQUVKLHdEQVBNO0FBUWpCYyxFQUFBQSxVQUFVLEVBQUVkLHdEQUFjc0I7QUFSVCxDQUFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFtwcm9wcy5jbGFzc05hbWVdO1xyXG4gIGlmIChwcm9wcy5oYXNTaGFkb3cpIGNsYXNzTmFtZS5wdXNoKHByb3BzLmhhc1NoYWRvdyk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMub25DbGljaykgcHJvcHMub25DbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGlmIChwcm9wcy5pc0xvYWRpbmcgfHwgcHJvcHMuaXNEaXNhYmxlZCkge1xyXG4gICAgaWYgKHByb3BzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgY2xhc3NOYW1lLnB1c2goXCJiZy1ncmF5MjAwXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbihcIiBcIil9IHN0eWxlPXtwcm9wcy5zdHlsZX0+XHJcbiAgICAgICAge3BvcnBzLmlzTG9hZGluZyA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBoLTUgdy01IG1yLTNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHByb3BzLmNoaWxkcmVuXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9wcy50eXBlID09PSBcImxpbmtcIikge1xyXG4gICAgaWYgKHByb3BzLmlzRWt0ZXJuYWwpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFua1xyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtwcm9wcy5ocmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbihcIiBcIil9XHJcbiAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICB0YXJnZXQ9e3Byb3BzLnRhcmdldCA9PT0gXCJfYmxhbmtcIiA/IFwiX2JsYW5rXCIgOiB1bmRlZmluZGVkfVxyXG4gICAgICAgICAgcmVsPXtwcm9wcy50YXJnZXQgPT09IFwiX2JsYW5rXCIgPyBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiA6IHVuZGVmaW5kZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMuaHJlZn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKFwiIFwiKX0gc3R5bGU9e3Byb3BzLnN0eWxlc30+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oXCIgXCIpfVxyXG4gICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgdHlwZTogcHJvcFR5cGVzLm9uZU9mKFtcImJ1dHRvblwiLCBcImxpbmtcIl0pLFxyXG4gIG9uQ2xpY2s6IHByb3BUeXBlcy5mdW5jLFxyXG4gIGhyZWY6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzTG9hZGluZzogcHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNEaXNhYmxlZDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgaGFzU2hhZG93OiBwcm9wVHlwZXMuYm9vbCxcclxuICBpc0VrdGVybmFsOiBwcm9wVHlwZXMuYm9vbCxcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInByb3BUeXBlcyIsIkJ1dHRvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiaGFzU2hhZG93IiwicHVzaCIsIm9uQ2xpY2siLCJpc0xvYWRpbmciLCJpc0Rpc2FibGVkIiwiam9pbiIsInN0eWxlIiwicG9ycHMiLCJjaGlsZHJlbiIsInR5cGUiLCJpc0VrdGVybmFsIiwiaHJlZiIsInRhcmdldCIsInVuZGVmaW5kZWQiLCJzdHlsZXMiLCJvbmVPZiIsImZ1bmMiLCJzdHJpbmciLCJib29sIl0sInNvdXJjZVJvb3QiOiIifQ==