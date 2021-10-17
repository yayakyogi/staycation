"use strict";
self["webpackHotUpdate_N_E"]("pages/properties/[id]",{

/***/ "./parts/BookingForm.tsx":
/*!*******************************!*\
  !*** ./parts/BookingForm.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BookingForm; }
/* harmony export */ });
/* harmony import */ var D_Web_NEXT_JS_staycation_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Web\\NEXT JS\\staycation\\parts\\BookingForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Web_NEXT_JS_staycation_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function BookingForm(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  }),
      data = _useState[0],
      setData = _useState[1];

  var updateData = function updateData(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, (0,D_Web_NEXT_JS_staycation_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, e.target.name, e.target.value)));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (data.duration > 1) {
      var startDate = new Date(data.date.startDate);
      var endDate = new Date(data.date.endDate);
      var countDuration = new Date(endDate - startDate).getDate() - 1;
      setData(_objectSpread(_objectSpread({}, data), {}, {
        duration: countDuration
      }));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [data.date]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "w-full mt-6 md:mt-0 ml-0 md:ml-12 py-4 md:py-16 px-3 md:px-20 rounded-lg border-2 border-gray200",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
      className: "text-lg md:text-xl poppins-medium text-gray900 mb-4",
      children: "Start Booking"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
      className: "text-2xl md:text-4xl poppins-medium text-teal",
      children: ["$", props.data.price, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "poppins-extraLight text-gray500",
        children: ["per ", props.data.unit]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      htmlFor: "duration",
      className: "text-base poppins-regular text-gray900 block mt-4",
      children: "How Long you will stay?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__.InputNumber, {
      max: 30,
      isSuffixPlural: true,
      name: "duration",
      value: data.duration,
      suffix: props.data.unit,
      onChange: updateData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
      htmlFor: "duration",
      className: "text-base poppins-regular text-gray900 block mt-6",
      children: "Pick a Date"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__.InputDate, {
      onChange: updateData,
      name: "date",
      value: data.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      className: "text-base poppins-light text-gray500 mt-4",
      children: ["You will pay", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "poppins-medium text-gray900",
        children: ["$", props.data.price * data.duration, " USD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), " ", "per", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "poppins-medium text-gray900",
        children: [data.duration, " ", data.duration > 1 ? "nights" : "night"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: "text-lg poppins-medium w-full bg-indigo py-3 mt-10 text-white shadow-2xl",
      onClick: props.startBooking,
      children: "Continue to Book"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(BookingForm, "RmEyanL10UEFnhlqNP25Di+pLmc=");

_c = BookingForm;

var _c;

$RefreshReg$(_c, "BookingForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvcGVydGllcy9baWRdLmMyNjI5Mjc1MzdkOGJmMmE0NDIxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVlLFNBQVNNLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDLGtCQUF3Qk4sK0NBQVEsQ0FBQztBQUMvQk8sSUFBQUEsUUFBUSxFQUFFLENBRHFCO0FBRS9CQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsU0FBUyxFQUFFLElBQUlDLElBQUosRUFEUDtBQUVKQyxNQUFBQSxPQUFPLEVBQUUsSUFBSUQsSUFBSixFQUZMO0FBR0pFLE1BQUFBLEdBQUcsRUFBRTtBQUhEO0FBRnlCLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFTQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEJGLElBQUFBLE9BQU8saUNBQ0ZELElBREUsbUlBRUpHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUZMLEVBRVlGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUZyQixHQUFQO0FBSUQsR0FMRDs7QUFPQWxCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlZLElBQUksQ0FBQ04sUUFBTCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQixVQUFNRSxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTRyxJQUFJLENBQUNMLElBQUwsQ0FBVUMsU0FBbkIsQ0FBbEI7QUFDQSxVQUFNRSxPQUFPLEdBQUcsSUFBSUQsSUFBSixDQUFTRyxJQUFJLENBQUNMLElBQUwsQ0FBVUcsT0FBbkIsQ0FBaEI7QUFDQSxVQUFNUyxhQUFhLEdBQUcsSUFBSVYsSUFBSixDQUFTQyxPQUFPLEdBQUdGLFNBQW5CLEVBQThCWSxPQUE5QixLQUEwQyxDQUFoRTtBQUNBUCxNQUFBQSxPQUFPLGlDQUNGRCxJQURFO0FBRUxOLFFBQUFBLFFBQVEsRUFBRWE7QUFGTCxTQUFQO0FBSUQsS0FUYSxDQVVkOztBQUNELEdBWFEsRUFXTixDQUFDUCxJQUFJLENBQUNMLElBQU4sQ0FYTSxDQUFUO0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0dBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxxREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUMsK0NBQWhCO0FBQUEsc0JBQ0lGLEtBQUssQ0FBQ08sSUFBTixDQUFXUyxLQURmLEVBQ3NCLEdBRHRCLGVBRUU7QUFBTSxpQkFBUyxFQUFDLGlDQUFoQjtBQUFBLDJCQUNPaEIsS0FBSyxDQUFDTyxJQUFOLENBQVdVLElBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0U7QUFDRSxhQUFPLEVBQUMsVUFEVjtBQUVFLGVBQVMsRUFBQyxtREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBaUJFLDhEQUFDLHlEQUFEO0FBQ0UsU0FBRyxFQUFFLEVBRFA7QUFFRSxvQkFBYyxNQUZoQjtBQUdFLFVBQUksRUFBQyxVQUhQO0FBSUUsV0FBSyxFQUFFVixJQUFJLENBQUNOLFFBSmQ7QUFLRSxZQUFNLEVBQUVELEtBQUssQ0FBQ08sSUFBTixDQUFXVSxJQUxyQjtBQU1FLGNBQVEsRUFBRVI7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBeUJFO0FBQ0UsYUFBTyxFQUFDLFVBRFY7QUFFRSxlQUFTLEVBQUMsbURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUErQkUsOERBQUMsdURBQUQ7QUFBVyxjQUFRLEVBQUVBLFVBQXJCO0FBQWlDLFVBQUksRUFBQyxNQUF0QztBQUE2QyxXQUFLLEVBQUVGLElBQUksQ0FBQ0w7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CRixlQWdDRTtBQUFHLGVBQVMsRUFBQywyQ0FBYjtBQUFBLGlDQUNlLEdBRGYsZUFFRTtBQUFNLGlCQUFTLEVBQUMsNkJBQWhCO0FBQUEsd0JBQ0lGLEtBQUssQ0FBQ08sSUFBTixDQUFXUyxLQUFYLEdBQW1CVCxJQUFJLENBQUNOLFFBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBSVUsR0FKVixTQUtNLEdBTE4sZUFNRTtBQUFNLGlCQUFTLEVBQUMsNkJBQWhCO0FBQUEsbUJBQ0dNLElBQUksQ0FBQ04sUUFEUixPQUNtQk0sSUFBSSxDQUFDTixRQUFMLEdBQWdCLENBQWhCLEdBQW9CLFFBQXBCLEdBQStCLE9BRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLEVBUVUsR0FSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0YsZUEwQ0UsOERBQUMsdURBQUQ7QUFDRSxlQUFTLEVBQUMsMEVBRFo7QUFFRSxhQUFPLEVBQUVELEtBQUssQ0FBQ2tCLFlBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUREOztHQWpGdUJuQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFydHMvQm9va2luZ0Zvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0RGF0ZSwgSW5wdXROdW1iZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va2luZ0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkdXJhdGlvbjogMSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBrZXk6IFwic2VsZWN0aW9uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVEYXRhID0gKGUpID0+IHtcclxuICAgIHNldERhdGEoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhLmR1cmF0aW9uID4gMSkge1xyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShkYXRhLmRhdGUuc3RhcnREYXRlKTtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGEuZGF0ZS5lbmREYXRlKTtcclxuICAgICAgY29uc3QgY291bnREdXJhdGlvbiA9IG5ldyBEYXRlKGVuZERhdGUgLSBzdGFydERhdGUpLmdldERhdGUoKSAtIDE7XHJcbiAgICAgIHNldERhdGEoe1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgZHVyYXRpb246IGNvdW50RHVyYXRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtkYXRhLmRhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTYgbWQ6bXQtMCBtbC0wIG1kOm1sLTEyIHB5LTQgbWQ6cHktMTYgcHgtMyBtZDpweC0yMCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1ncmF5MjAwXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgcG9wcGlucy1tZWRpdW0gdGV4dC1ncmF5OTAwIG1iLTRcIj5cclxuICAgICAgICBTdGFydCBCb29raW5nXHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIHBvcHBpbnMtbWVkaXVtIHRleHQtdGVhbFwiPlxyXG4gICAgICAgICR7cHJvcHMuZGF0YS5wcmljZX17XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9wcGlucy1leHRyYUxpZ2h0IHRleHQtZ3JheTUwMFwiPlxyXG4gICAgICAgICAgcGVyIHtwcm9wcy5kYXRhLnVuaXR9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8bGFiZWxcclxuICAgICAgICBodG1sRm9yPVwiZHVyYXRpb25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwb3BwaW5zLXJlZ3VsYXIgdGV4dC1ncmF5OTAwIGJsb2NrIG10LTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgSG93IExvbmcgeW91IHdpbGwgc3RheT9cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgbWF4PXszMH1cclxuICAgICAgICBpc1N1ZmZpeFBsdXJhbFxyXG4gICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgdmFsdWU9e2RhdGEuZHVyYXRpb259XHJcbiAgICAgICAgc3VmZml4PXtwcm9wcy5kYXRhLnVuaXR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZURhdGF9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbFxyXG4gICAgICAgIGh0bWxGb3I9XCJkdXJhdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHBvcHBpbnMtcmVndWxhciB0ZXh0LWdyYXk5MDAgYmxvY2sgbXQtNlwiXHJcbiAgICAgID5cclxuICAgICAgICBQaWNrIGEgRGF0ZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8SW5wdXREYXRlIG9uQ2hhbmdlPXt1cGRhdGVEYXRhfSBuYW1lPVwiZGF0ZVwiIHZhbHVlPXtkYXRhLmRhdGV9IC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBwb3BwaW5zLWxpZ2h0IHRleHQtZ3JheTUwMCBtdC00XCI+XHJcbiAgICAgICAgWW91IHdpbGwgcGF5e1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvcHBpbnMtbWVkaXVtIHRleHQtZ3JheTkwMFwiPlxyXG4gICAgICAgICAgJHtwcm9wcy5kYXRhLnByaWNlICogZGF0YS5kdXJhdGlvbn0gVVNEXHJcbiAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICBwZXJ7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9wcGlucy1tZWRpdW0gdGV4dC1ncmF5OTAwXCI+XHJcbiAgICAgICAgICB7ZGF0YS5kdXJhdGlvbn0ge2RhdGEuZHVyYXRpb24gPiAxID8gXCJuaWdodHNcIiA6IFwibmlnaHRcIn1cclxuICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIHBvcHBpbnMtbWVkaXVtIHctZnVsbCBiZy1pbmRpZ28gcHktMyBtdC0xMCB0ZXh0LXdoaXRlIHNoYWRvdy0yeGxcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLnN0YXJ0Qm9va2luZ31cclxuICAgICAgPlxyXG4gICAgICAgIENvbnRpbnVlIHRvIEJvb2tcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXREYXRlIiwiSW5wdXROdW1iZXIiLCJCdXR0b24iLCJCb29raW5nRm9ybSIsInByb3BzIiwiZHVyYXRpb24iLCJkYXRlIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJrZXkiLCJkYXRhIiwic2V0RGF0YSIsInVwZGF0ZURhdGEiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY291bnREdXJhdGlvbiIsImdldERhdGUiLCJwcmljZSIsInVuaXQiLCJzdGFydEJvb2tpbmciXSwic291cmNlUm9vdCI6IiJ9