webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./components/Demo/index.tsx":
/*!***********************************!*\
  !*** ./components/Demo/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/WangShuo/Documents/GitHub/semon-ui-site/components/Demo/index.tsx";



var Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _React$Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ref", Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          description = _this$props.description,
          title = _this$props.title,
          className = _this$props.className,
          language = _this$props.language,
          code = _this$props.code;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-2339393193" + " " + "".concat(className, " wrapper"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2339393193" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2339393193" + " " + 'description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2339393193" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2339393193",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, description)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2339393193" + " " + 'code',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre", {
        ref: this.ref,
        className: "jsx-2339393193" + " " + "language-".concat(language || 'jsx'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code", {
        className: "jsx-2339393193" + " " + "language-".concat(language || 'jsx'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, code))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2339393193",
        __self: this
      }, ".wrapper.jsx-2339393193{box-sizing:border-box;border:1px solid #e8e8e8;border-radius:4px;}.container.jsx-2339393193{padding:30px;}.description.jsx-2339393193{border-top:1px solid #e8e8e8;padding:20px 30px;position:relative;color:#6A737D;font-size:14px;}.description.jsx-2339393193 .title.jsx-2339393193{position:absolute;background-color:#fff;padding:5px 10px;left:20px;top:0;color:#314659;font-weight:500;font-size:16px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.code.jsx-2339393193{-webkit-transition:height .3s;transition:height .3s;height:0;overflow:hidden;}pre.jsx-2339393193{border-top:1px dashed #e8e8e8;margin:0;padding-left:30px;padding-right:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9EZW1vL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBR2lDLEFBS1QsQUFHZ0IsQUFPWCxBQVdJLEFBS1EsYUF6QmhDLEtBVXdCLElBZkcsT0FRUCxDQXVCVixTQUNVLENBaEJELE9BZkMsQUFRQSxLQWlCVCxLQVRBLEFBZ0JVLElBTkgsSUF6QmxCLEFBUWdCLEVBUVQsTUFDUyxHQWVoQixDQU5BLEVBakJpQixRQVNDLE9BUmxCLFNBU2lCLGVBQ1ksNkZBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9EZW1vL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBEZW1vUHJvcHMgZXh0ZW5kcyBSZWFjdC5Qcm9wczx7fT4ge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgbGFuZ3VhZ2U/OiBzdHJpbmdcbiAgY29kZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5jbGFzcyBEZW1vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERlbW9Qcm9wcz4ge1xuICByZWYgPSBjcmVhdGVSZWY8SFRNTFByZUVsZW1lbnQ+KClcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGRlc2NyaXB0aW9uLCB0aXRsZSwgY2xhc3NOYW1lLCBsYW5ndWFnZSwgY29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gd3JhcHBlcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZSc+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnPlxuICAgICAgICA8cHJlIGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7bGFuZ3VhZ2UgfHwgJ2pzeCd9YH0gcmVmPXt0aGlzLnJlZn0+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtsYW5ndWFnZSB8fCAnanN4J31gfT5cbiAgICAgICAgICAgIHtjb2RlfVxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXJ7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY29sb3I6ICM2QTczN0Q7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiAudGl0bGV7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgbGVmdDoyMHB4O1xuICAgICAgICAgIHRvcDowO1xuICAgICAgICAgIGNvbG9yOiAjMzE0NjU5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29kZXtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIHByZXtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlOGU4ZTg7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24gPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbW8iXX0= */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/Demo/index.tsx */"));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=doc.js.1679e66762e99c4cc602.hot-update.js.map