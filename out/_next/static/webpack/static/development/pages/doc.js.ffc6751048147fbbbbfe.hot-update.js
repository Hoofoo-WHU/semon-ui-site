webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./components/PrevNextNav/index.tsx":
/*!******************************************!*\
  !*** ./components/PrevNextNav/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrevNextNav; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_PostMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/PostMenu */ "./data/PostMenu.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./components/Link.tsx");
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @semon/semon-ui */ "../semon-ui-react/dist/index.js");
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx";





function PrevNextNav(_ref) {
  var title = _ref.title;
  var prev = Object(_data_PostMenu__WEBPACK_IMPORTED_MODULE_2__["getPrev"])(title);
  var next = Object(_data_PostMenu__WEBPACK_IMPORTED_MODULE_2__["getNext"])(title);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2314587781" + " " + 'prev-next-nav',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, prev ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/doc?title=".concat(prev.file),
    as: "/doc/".concat(prev.file),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "demo-prev",
    icon: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "".concat(prev.title).concat(prev.subTitle ? ' ' + prev.subTitle : ''))) : null, next ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/doc?title=".concat(next.file),
    as: "/doc/".concat(next.file),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "next",
    iconRight: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "".concat(next.title).concat(next.subTitle ? ' ' + next.subTitle : ''))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2314587781",
    __self: this
  }, ".prev-next-nav.jsx-2314587781{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:200px;max-width:980px;margin:0 auto;padding:0 60px;}.prev.jsx-2314587781,.next.jsx-2314587781{border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUd3QixBQU9ELFlBQ2QsOERBUGtCLGdCQUNBLGdCQUNGLGNBQ0MsZUFDakIiLCJmaWxlIjoiL1VzZXJzL1dhbmdTaHVvL0RvY3VtZW50cy9HaXRIdWIvc2Vtb24tdWktc2l0ZS9jb21wb25lbnRzL1ByZXZOZXh0TmF2L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBvc3RUaXRsZSwgZ2V0TmV4dCwgZ2V0UHJldiB9IGZyb20gJy4uLy4uL2RhdGEvUG9zdE1lbnUnXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BzZW1vbi9zZW1vbi11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZOZXh0TmF2KHsgdGl0bGUgfTogeyB0aXRsZTogUG9zdFRpdGxlIH0pIHtcbiAgbGV0IHByZXYgPSBnZXRQcmV2KHRpdGxlKVxuICBsZXQgbmV4dCA9IGdldE5leHQodGl0bGUpXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ByZXYtbmV4dC1uYXYnPlxuICAgICAge1xuICAgICAgICBwcmV2ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtwcmV2LmZpbGV9YH0gYXM9e2AvZG9jLyR7cHJldi5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdkZW1vLXByZXYnIGljb249J2xlZnQnPntgJHtwcmV2LnRpdGxlfSR7cHJldi5zdWJUaXRsZSA/ICcgJyArIHByZXYuc3ViVGl0bGUgOiAnJ31gfTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+IDogbnVsbFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBuZXh0ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtuZXh0LmZpbGV9YH0gYXM9e2AvZG9jLyR7bmV4dC5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSduZXh0JyBpY29uUmlnaHQ9J3JpZ2h0Jz57YCR7bmV4dC50aXRsZX0ke25leHQuc3ViVGl0bGUgPyAnICcgKyBuZXh0LnN1YlRpdGxlIDogJyd9YH08L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByZXYtbmV4dC1uYXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCA2MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LC5uZXh0e1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uID5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.ffc6751048147fbbbbfe.hot-update.js.map