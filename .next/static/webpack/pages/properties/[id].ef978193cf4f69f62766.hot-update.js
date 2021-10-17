"use strict";
self["webpackHotUpdate_N_E"]("pages/properties/[id]",{

/***/ "./components/Form/InputNumber/index.tsx":
/*!***********************************************!*\
  !*** ./components/Form/InputNumber/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Number; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\components\\Form\\InputNumber\\index.tsx";



function Number(props) {
  var value = props.value,
      min = props.min,
      name = props.name,
      max = props.max,
      placeholder = props.placeholder,
      suffix = props.suffix,
      isSuffixPlural = props.isSuffixPlural;

  var onChange = function onChange(e) {
    var value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value
        }
      });
    }
  };

  var minus = function minus() {
    +value > min && onChange({
      target: {
        name: name,
        value: +value - 1
      }
    });
  };

  var plus = function plus() {
    +value < max && onChange({
      target: {
        name: name,
        value: +value + 1
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex flex-1 mt-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "bg-red rounded-md cursor-pointer flex justify-center items-center",
      style: {
        width: 45,
        height: 45,
        padding: 10
      },
      onClick: minus,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "text-white text-2xl poppins-bold",
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      readOnly: true,
      name: name,
      value: "".concat(value, " ").concat(suffix).concat(isSuffixPlural && value > 1 ? "s" : ""),
      className: "bg-gray100 text-gray900 poppins-regular text-base text-center focus:outline-none",
      placeholder: placeholder ? placeholder : "0",
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "bg-teal rounded-md cursor-pointer flex justify-center items-center",
      style: {
        width: 45,
        height: 45
      },
      onClick: plus,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "text-white text-2xl poppins-bold",
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
_c = Number;
Number.defaultProps = {
  min: 1,
  max: 1,
  suffix: ""
};
Number.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isSuffixPlural: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  suffix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

var _c;

$RefreshReg$(_c, "Number");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvcGVydGllcy9baWRdLmVmOTc4MTkzY2Y0ZjY5ZjYyNzY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNwQyxNQUFRQyxLQUFSLEdBQXVFRCxLQUF2RSxDQUFRQyxLQUFSO0FBQUEsTUFBZUMsR0FBZixHQUF1RUYsS0FBdkUsQ0FBZUUsR0FBZjtBQUFBLE1BQW9CQyxJQUFwQixHQUF1RUgsS0FBdkUsQ0FBb0JHLElBQXBCO0FBQUEsTUFBMEJDLEdBQTFCLEdBQXVFSixLQUF2RSxDQUEwQkksR0FBMUI7QUFBQSxNQUErQkMsV0FBL0IsR0FBdUVMLEtBQXZFLENBQStCSyxXQUEvQjtBQUFBLE1BQTRDQyxNQUE1QyxHQUF1RU4sS0FBdkUsQ0FBNENNLE1BQTVDO0FBQUEsTUFBb0RDLGNBQXBELEdBQXVFUCxLQUF2RSxDQUFvRE8sY0FBcEQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQUlSLEtBQUssR0FBR1MsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU1YsS0FBVixDQUFsQjs7QUFDQSxRQUFJLENBQUNBLEtBQUQsSUFBVUcsR0FBVixJQUFpQixDQUFDSCxLQUFELElBQVVDLEdBQS9CLEVBQW9DO0FBQ2xDRixNQUFBQSxLQUFLLENBQUNRLFFBQU4sQ0FBZTtBQUNiRyxRQUFBQSxNQUFNLEVBQUU7QUFDTlIsVUFBQUEsSUFBSSxFQUFFQSxJQURBO0FBRU5GLFVBQUFBLEtBQUssRUFBRSxDQUFDQTtBQUZGO0FBREssT0FBZjtBQU1EO0FBQ0YsR0FWRDs7QUFZQSxNQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLEtBQUNYLEtBQUQsR0FBU0MsR0FBVCxJQUFnQk0sUUFBUSxDQUFDO0FBQUVHLE1BQUFBLE1BQU0sRUFBRTtBQUFFUixRQUFBQSxJQUFJLEVBQUVBLElBQVI7QUFBY0YsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQsR0FBUztBQUE5QjtBQUFWLEtBQUQsQ0FBeEI7QUFDRCxHQUZEOztBQUdBLE1BQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsS0FBQ1osS0FBRCxHQUFTRyxHQUFULElBQWdCSSxRQUFRLENBQUM7QUFBRUcsTUFBQUEsTUFBTSxFQUFFO0FBQUVSLFFBQUFBLElBQUksRUFBRUEsSUFBUjtBQUFjRixRQUFBQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBRCxHQUFTO0FBQTlCO0FBQVYsS0FBRCxDQUF4QjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQyxtRUFEWjtBQUVFLFdBQUssRUFBRTtBQUFFYSxRQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxRQUFBQSxNQUFNLEVBQUUsRUFBckI7QUFBeUJDLFFBQUFBLE9BQU8sRUFBRTtBQUFsQyxPQUZUO0FBR0UsYUFBTyxFQUFFSixLQUhYO0FBQUEsNkJBS0U7QUFBTSxpQkFBUyxFQUFDLGtDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQ0UsY0FBUSxNQURWO0FBRUUsVUFBSSxFQUFFVCxJQUZSO0FBR0UsV0FBSyxZQUFLRixLQUFMLGNBQWNLLE1BQWQsU0FBdUJDLGNBQWMsSUFBSU4sS0FBSyxHQUFHLENBQTFCLEdBQThCLEdBQTlCLEdBQW9DLEVBQTNELENBSFA7QUFJRSxlQUFTLEVBQUMsa0ZBSlo7QUFLRSxpQkFBVyxFQUFFSSxXQUFXLEdBQUdBLFdBQUgsR0FBaUIsR0FMM0M7QUFNRSxjQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBZ0JFO0FBQ0UsZUFBUyxFQUFDLG9FQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVNLFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFFBQUFBLE1BQU0sRUFBRTtBQUFyQixPQUZUO0FBR0UsYUFBTyxFQUFFRixJQUhYO0FBQUEsNkJBS0U7QUFBTSxpQkFBUyxFQUFDLGtDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7S0EvQ3VCZDtBQWlEeEJBLE1BQU0sQ0FBQ2tCLFlBQVAsR0FBc0I7QUFDcEJmLEVBQUFBLEdBQUcsRUFBRSxDQURlO0FBRXBCRSxFQUFBQSxHQUFHLEVBQUUsQ0FGZTtBQUdwQkUsRUFBQUEsTUFBTSxFQUFFO0FBSFksQ0FBdEI7QUFNQVAsTUFBTSxDQUFDRCxTQUFQLEdBQW1CO0FBQ2pCRyxFQUFBQSxLQUFLLEVBQUVILDJEQUFBLENBQW9CLENBQUNBLDBEQUFELEVBQW1CQSwwREFBbkIsQ0FBcEIsQ0FEVTtBQUVqQlUsRUFBQUEsUUFBUSxFQUFFVix3REFGTztBQUdqQlMsRUFBQUEsY0FBYyxFQUFFVCx3REFIQztBQUlqQlEsRUFBQUEsTUFBTSxFQUFFUiwwREFKUztBQUtqQkssRUFBQUEsSUFBSSxFQUFFTCwwREFMVztBQU1qQk8sRUFBQUEsV0FBVyxFQUFFUCwwREFBZ0JxQjtBQU5aLENBQW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9JbnB1dE51bWJlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE51bWJlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgdmFsdWUsIG1pbiwgbmFtZSwgbWF4LCBwbGFjZWhvbGRlciwgc3VmZml4LCBpc1N1ZmZpeFBsdXJhbCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IFN0cmluZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoK3ZhbHVlIDw9IG1heCAmJiArdmFsdWUgPj0gbWluKSB7XHJcbiAgICAgIHByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogK3ZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1pbnVzID0gKCkgPT4ge1xyXG4gICAgK3ZhbHVlID4gbWluICYmIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWU6IG5hbWUsIHZhbHVlOiArdmFsdWUgLSAxIH0gfSk7XHJcbiAgfTtcclxuICBjb25zdCBwbHVzID0gKCkgPT4ge1xyXG4gICAgK3ZhbHVlIDwgbWF4ICYmIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWU6IG5hbWUsIHZhbHVlOiArdmFsdWUgKyAxIH0gfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBtdC0yXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDQ1LCBoZWlnaHQ6IDQ1LCBwYWRkaW5nOiAxMCB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e21pbnVzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBwb3BwaW5zLWJvbGRcIj4tPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIHZhbHVlPXtgJHt2YWx1ZX0gJHtzdWZmaXh9JHtpc1N1ZmZpeFBsdXJhbCAmJiB2YWx1ZSA+IDEgPyBcInNcIiA6IFwiXCJ9YH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5MTAwIHRleHQtZ3JheTkwMCBwb3BwaW5zLXJlZ3VsYXIgdGV4dC1iYXNlIHRleHQtY2VudGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyID8gcGxhY2Vob2xkZXIgOiBcIjBcIn1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0NSwgaGVpZ2h0OiA0NSB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3BsdXN9XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIHBvcHBpbnMtYm9sZFwiPis8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuTnVtYmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtaW46IDEsXHJcbiAgbWF4OiAxLFxyXG4gIHN1ZmZpeDogXCJcIixcclxufTtcclxuXHJcbk51bWJlci5wcm9wVHlwZXMgPSB7XHJcbiAgdmFsdWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXJdKSxcclxuICBvbkNoYW5nZTogcHJvcFR5cGVzLmZ1bmMsXHJcbiAgaXNTdWZmaXhQbHVyYWw6IHByb3BUeXBlcy5ib29sLFxyXG4gIHN1ZmZpeDogcHJvcFR5cGVzLnN0cmluZyxcclxuICBuYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9wVHlwZXMiLCJOdW1iZXIiLCJwcm9wcyIsInZhbHVlIiwibWluIiwibmFtZSIsIm1heCIsInBsYWNlaG9sZGVyIiwic3VmZml4IiwiaXNTdWZmaXhQbHVyYWwiLCJvbkNoYW5nZSIsImUiLCJTdHJpbmciLCJ0YXJnZXQiLCJtaW51cyIsInBsdXMiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJkZWZhdWx0UHJvcHMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwiYm9vbCJdLCJzb3VyY2VSb290IjoiIn0=