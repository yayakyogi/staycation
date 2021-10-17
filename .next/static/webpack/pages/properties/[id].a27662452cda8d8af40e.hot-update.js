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
    className: "flex mt-2",
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
      className: "bg-gray200 text-gray900 poppins-regular text-base text-center focus:outline-none flex-1",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvcGVydGllcy9baWRdLmEyNzY2MjQ1MmNkYThkOGFmNDBlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNwQyxNQUFRQyxLQUFSLEdBQXVFRCxLQUF2RSxDQUFRQyxLQUFSO0FBQUEsTUFBZUMsR0FBZixHQUF1RUYsS0FBdkUsQ0FBZUUsR0FBZjtBQUFBLE1BQW9CQyxJQUFwQixHQUF1RUgsS0FBdkUsQ0FBb0JHLElBQXBCO0FBQUEsTUFBMEJDLEdBQTFCLEdBQXVFSixLQUF2RSxDQUEwQkksR0FBMUI7QUFBQSxNQUErQkMsV0FBL0IsR0FBdUVMLEtBQXZFLENBQStCSyxXQUEvQjtBQUFBLE1BQTRDQyxNQUE1QyxHQUF1RU4sS0FBdkUsQ0FBNENNLE1BQTVDO0FBQUEsTUFBb0RDLGNBQXBELEdBQXVFUCxLQUF2RSxDQUFvRE8sY0FBcEQ7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQUlSLEtBQUssR0FBR1MsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU1YsS0FBVixDQUFsQjs7QUFDQSxRQUFJLENBQUNBLEtBQUQsSUFBVUcsR0FBVixJQUFpQixDQUFDSCxLQUFELElBQVVDLEdBQS9CLEVBQW9DO0FBQ2xDRixNQUFBQSxLQUFLLENBQUNRLFFBQU4sQ0FBZTtBQUNiRyxRQUFBQSxNQUFNLEVBQUU7QUFDTlIsVUFBQUEsSUFBSSxFQUFFQSxJQURBO0FBRU5GLFVBQUFBLEtBQUssRUFBRSxDQUFDQTtBQUZGO0FBREssT0FBZjtBQU1EO0FBQ0YsR0FWRDs7QUFZQSxNQUFNVyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLEtBQUNYLEtBQUQsR0FBU0MsR0FBVCxJQUFnQk0sUUFBUSxDQUFDO0FBQUVHLE1BQUFBLE1BQU0sRUFBRTtBQUFFUixRQUFBQSxJQUFJLEVBQUVBLElBQVI7QUFBY0YsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQsR0FBUztBQUE5QjtBQUFWLEtBQUQsQ0FBeEI7QUFDRCxHQUZEOztBQUdBLE1BQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsS0FBQ1osS0FBRCxHQUFTRyxHQUFULElBQWdCSSxRQUFRLENBQUM7QUFBRUcsTUFBQUEsTUFBTSxFQUFFO0FBQUVSLFFBQUFBLElBQUksRUFBRUEsSUFBUjtBQUFjRixRQUFBQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBRCxHQUFTO0FBQTlCO0FBQVYsS0FBRCxDQUF4QjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLG1FQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVhLFFBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLFFBQUFBLE1BQU0sRUFBRSxFQUFyQjtBQUF5QkMsUUFBQUEsT0FBTyxFQUFFO0FBQWxDLE9BRlQ7QUFHRSxhQUFPLEVBQUVKLEtBSFg7QUFBQSw2QkFLRTtBQUFNLGlCQUFTLEVBQUMsa0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUU7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUVULElBRlI7QUFHRSxXQUFLLFlBQUtGLEtBQUwsY0FBY0ssTUFBZCxTQUF1QkMsY0FBYyxJQUFJTixLQUFLLEdBQUcsQ0FBMUIsR0FBOEIsR0FBOUIsR0FBb0MsRUFBM0QsQ0FIUDtBQUlFLGVBQVMsRUFBQyx5RkFKWjtBQUtFLGlCQUFXLEVBQUVJLFdBQVcsR0FBR0EsV0FBSCxHQUFpQixHQUwzQztBQU1FLGNBQVEsRUFBRUc7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFnQkU7QUFDRSxlQUFTLEVBQUMsb0VBRFo7QUFFRSxXQUFLLEVBQUU7QUFBRU0sUUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsUUFBQUEsTUFBTSxFQUFFO0FBQXJCLE9BRlQ7QUFHRSxhQUFPLEVBQUVGLElBSFg7QUFBQSw2QkFLRTtBQUFNLGlCQUFTLEVBQUMsa0NBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDtLQS9DdUJkO0FBaUR4QkEsTUFBTSxDQUFDa0IsWUFBUCxHQUFzQjtBQUNwQmYsRUFBQUEsR0FBRyxFQUFFLENBRGU7QUFFcEJFLEVBQUFBLEdBQUcsRUFBRSxDQUZlO0FBR3BCRSxFQUFBQSxNQUFNLEVBQUU7QUFIWSxDQUF0QjtBQU1BUCxNQUFNLENBQUNELFNBQVAsR0FBbUI7QUFDakJHLEVBQUFBLEtBQUssRUFBRUgsMkRBQUEsQ0FBb0IsQ0FBQ0EsMERBQUQsRUFBbUJBLDBEQUFuQixDQUFwQixDQURVO0FBRWpCVSxFQUFBQSxRQUFRLEVBQUVWLHdEQUZPO0FBR2pCUyxFQUFBQSxjQUFjLEVBQUVULHdEQUhDO0FBSWpCUSxFQUFBQSxNQUFNLEVBQUVSLDBEQUpTO0FBS2pCSyxFQUFBQSxJQUFJLEVBQUVMLDBEQUxXO0FBTWpCTyxFQUFBQSxXQUFXLEVBQUVQLDBEQUFnQnFCO0FBTlosQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0lucHV0TnVtYmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVyKHByb3BzKSB7XHJcbiAgY29uc3QgeyB2YWx1ZSwgbWluLCBuYW1lLCBtYXgsIHBsYWNlaG9sZGVyLCBzdWZmaXgsIGlzU3VmZml4UGx1cmFsIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gU3RyaW5nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICgrdmFsdWUgPD0gbWF4ICYmICt2YWx1ZSA+PSBtaW4pIHtcclxuICAgICAgcHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHZhbHVlOiArdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWludXMgPSAoKSA9PiB7XHJcbiAgICArdmFsdWUgPiBtaW4gJiYgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgbmFtZTogbmFtZSwgdmFsdWU6ICt2YWx1ZSAtIDEgfSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHBsdXMgPSAoKSA9PiB7XHJcbiAgICArdmFsdWUgPCBtYXggJiYgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgbmFtZTogbmFtZSwgdmFsdWU6ICt2YWx1ZSArIDEgfSB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA0NSwgaGVpZ2h0OiA0NSwgcGFkZGluZzogMTAgfX1cclxuICAgICAgICBvbkNsaWNrPXttaW51c31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgcG9wcGlucy1ib2xkXCI+LTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICB2YWx1ZT17YCR7dmFsdWV9ICR7c3VmZml4fSR7aXNTdWZmaXhQbHVyYWwgJiYgdmFsdWUgPiAxID8gXCJzXCIgOiBcIlwifWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheTIwMCB0ZXh0LWdyYXk5MDAgcG9wcGlucy1yZWd1bGFyIHRleHQtYmFzZSB0ZXh0LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZmxleC0xXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6IFwiMFwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXRlYWwgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDQ1LCBoZWlnaHQ6IDQ1IH19XHJcbiAgICAgICAgb25DbGljaz17cGx1c31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgcG9wcGlucy1ib2xkXCI+Kzwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5OdW1iZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1pbjogMSxcclxuICBtYXg6IDEsXHJcbiAgc3VmZml4OiBcIlwiLFxyXG59O1xyXG5cclxuTnVtYmVyLnByb3BUeXBlcyA9IHtcclxuICB2YWx1ZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm51bWJlcl0pLFxyXG4gIG9uQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcclxuICBpc1N1ZmZpeFBsdXJhbDogcHJvcFR5cGVzLmJvb2wsXHJcbiAgc3VmZml4OiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG5hbWU6IHByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXI6IHByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInByb3BUeXBlcyIsIk51bWJlciIsInByb3BzIiwidmFsdWUiLCJtaW4iLCJuYW1lIiwibWF4IiwicGxhY2Vob2xkZXIiLCJzdWZmaXgiLCJpc1N1ZmZpeFBsdXJhbCIsIm9uQ2hhbmdlIiwiZSIsIlN0cmluZyIsInRhcmdldCIsIm1pbnVzIiwicGx1cyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sInNvdXJjZVJvb3QiOiIifQ==