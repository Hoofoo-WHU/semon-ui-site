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
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @semon/semon-ui */ "../semon-ui-react/dist/index.js");
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/WangShuo/Documents/GitHub/semon-ui-site/components/Demo/index.tsx";




var Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _React$Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showCode: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ref", Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.codeClickHandle = _this.codeClickHandle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "codeClickHandle",
    value: function codeClickHandle() {
      this.setState(function (pre) {
        return {
          showCode: !pre.showCode
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          description = _this$props.description,
          title = _this$props.title,
          className = _this$props.className,
          language = _this$props.language,
          code = _this$props.code;
      var height = this.state.showCode && this.ref.current ? this.ref.current.offsetHeight : 0;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "jsx-2339393193" + " " + "".concat(className, " wrapper"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2339393193" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2339393193" + " " + 'description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2339393193" + " " + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-2339393193",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        style: {
          border: 'none',
          boxShadow: 'none'
        },
        shape: "circle",
        icon: "code",
        onClick: this.codeClickHandle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          height: height
        },
        className: "jsx-2339393193" + " " + 'code',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre", {
        ref: this.ref,
        className: "jsx-2339393193" + " " + "language-".concat(language || 'jsx'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code", {
        className: "jsx-2339393193" + " " + "language-".concat(language || 'jsx'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, code))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2339393193",
        __self: this
      }, ".wrapper.jsx-2339393193{box-sizing:border-box;border:1px solid #e8e8e8;border-radius:4px;}.container.jsx-2339393193{padding:30px;}.description.jsx-2339393193{border-top:1px solid #e8e8e8;padding:20px 30px;position:relative;color:#6A737D;font-size:14px;}.description.jsx-2339393193 .title.jsx-2339393193{position:absolute;background-color:#fff;padding:5px 10px;left:20px;top:0;color:#314659;font-weight:500;font-size:16px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.code.jsx-2339393193{-webkit-transition:height .3s;transition:height .3s;height:0;overflow:hidden;}pre.jsx-2339393193{border-top:1px dashed #e8e8e8;margin:0;padding-left:30px;padding-right:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9EZW1vL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBR2lDLEFBS1QsQUFHZ0IsQUFPWCxBQVdJLEFBS1EsYUF6QmhDLEtBVXdCLElBZkcsT0FRUCxDQXVCVixTQUNVLENBaEJELE9BZkMsQUFRQSxLQWlCVCxLQVRBLEFBZ0JVLElBTkgsSUF6QmxCLEFBUWdCLEVBUVQsTUFDUyxHQWVoQixDQU5BLEVBakJpQixRQVNDLE9BUmxCLFNBU2lCLGVBQ1ksNkZBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9EZW1vL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BzZW1vbi9zZW1vbi11aSdcbmV4cG9ydCBpbnRlcmZhY2UgRGVtb1Byb3BzIGV4dGVuZHMgUmVhY3QuUHJvcHM8e30+IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGxhbmd1YWdlPzogc3RyaW5nXG4gIGNvZGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuY2xhc3MgRGVtbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEZW1vUHJvcHMsIHsgc2hvd0NvZGU6IGJvb2xlYW4gfT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRGVtb1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb2RlQ2xpY2tIYW5kbGUgPSB0aGlzLmNvZGVDbGlja0hhbmRsZS5iaW5kKHRoaXMpXG4gIH1cbiAgcmVhZG9ubHkgc3RhdGUgPSB7XG4gICAgc2hvd0NvZGU6IGZhbHNlXG4gIH1cbiAgY29kZUNsaWNrSGFuZGxlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZSkgPT4gKHsgc2hvd0NvZGU6ICFwcmUuc2hvd0NvZGUgfSkpXG4gIH1cbiAgcmVmID0gY3JlYXRlUmVmPEhUTUxQcmVFbGVtZW50PigpXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBkZXNjcmlwdGlvbiwgdGl0bGUsIGNsYXNzTmFtZSwgbGFuZ3VhZ2UsIGNvZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnN0YXRlLnNob3dDb2RlICYmIHRoaXMucmVmLmN1cnJlbnQgPyB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA6IDBcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHdyYXBwZXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScsIGJveFNoYWRvdzogJ25vbmUnIH19IHNoYXBlPSdjaXJjbGUnIGljb249J2NvZGUnIG9uQ2xpY2s9e3RoaXMuY29kZUNsaWNrSGFuZGxlfT48L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnIHN0eWxlPXt7IGhlaWdodCB9fT5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke2xhbmd1YWdlIHx8ICdqc3gnfWB9IHJlZj17dGhpcy5yZWZ9PlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7bGFuZ3VhZ2UgfHwgJ2pzeCd9YH0+XG4gICAgICAgICAgICB7Y29kZX1cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVye1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGNvbG9yOiAjNkE3MzdEO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24gLnRpdGxle1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIGxlZnQ6MjBweDtcbiAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICBjb2xvcjogIzMxNDY1OTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvZGV7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBwcmV7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZThlOGU4O1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uID5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vIl19 */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/Demo/index.tsx */"));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

})
//# sourceMappingURL=doc.js.48860c0f9e4f1883d6bf.hot-update.js.map