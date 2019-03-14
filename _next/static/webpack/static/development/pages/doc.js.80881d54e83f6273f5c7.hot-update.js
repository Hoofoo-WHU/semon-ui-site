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
    className: "jsx-1125168435" + " " + 'prev-next-nav',
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
    className: "prev",
    icon: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "".concat(prev.title).concat(prev.subTitle ? ' ' + prev.subTitle : ''))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1125168435" + " " + 'holder',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), next ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/doc?title=".concat(next.file),
    as: "/doc/".concat(next.file),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "next",
    iconRight: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "".concat(next.title).concat(next.subTitle ? ' ' + next.subTitle : ''))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1125168435",
    __self: this
  }, ".prev-next-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:24px 45px;position:relative;margin-top:150px;}.holder{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.prev-next-nav::before{content:'';border-top:1px solid #e8e8e8;position:absolute;left:45px;right:45px;top:0;}.prev-next-nav>.prev,.prev-next-nav>.next{border:none;box-shadow:none;}.prev-next-nav>.prev:hover>svg,.prev-next-nav>.next:hover>svg{-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}.prev-next-nav>.prev::after,.prev-next-nav>.next::after{display:none;}.prev-next-nav>.next{justify-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQUd3QixBQVVELEFBR0QsQUFRQyxBQU9mLEFBRWdCLEFBR1MsV0FuQk8sQ0FRYixDQVNsQixTQUdBLE1BWEEsWUFSb0Isa0JBQ1IsVUFDQyxHQU5iLEdBVndCLEtBaUJoQixNQUNSLFFBU0EsR0ExQmtCLGdCQUNBLGdCQUNGLGNBQ0ksa0JBQ0Esa0JBQ0QsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQb3N0VGl0bGUsIGdldE5leHQsIGdldFByZXYgfSBmcm9tICcuLi8uLi9kYXRhL1Bvc3RNZW51J1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAc2Vtb24vc2Vtb24tdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmV2TmV4dE5hdih7IHRpdGxlIH06IHsgdGl0bGU6IFBvc3RUaXRsZSB9KSB7XG4gIGxldCBwcmV2ID0gZ2V0UHJldih0aXRsZSlcbiAgbGV0IG5leHQgPSBnZXROZXh0KHRpdGxlKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcmV2LW5leHQtbmF2Jz5cbiAgICAgIHtcbiAgICAgICAgcHJldiA/IDxMaW5rIGhyZWY9e2AvZG9jP3RpdGxlPSR7cHJldi5maWxlfWB9IGFzPXtgL2RvYy8ke3ByZXYuZmlsZX1gfT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0ncHJldicgaWNvbj0nbGVmdCc+e2Ake3ByZXYudGl0bGV9JHtwcmV2LnN1YlRpdGxlID8gJyAnICsgcHJldi5zdWJUaXRsZSA6ICcnfWB9PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz4gOiBudWxsXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naG9sZGVyJyAvPlxuICAgICAge1xuICAgICAgICBuZXh0ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtuZXh0LmZpbGV9YH0gYXM9e2AvZG9jLyR7bmV4dC5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSduZXh0JyBpY29uUmlnaHQ9J3JpZ2h0Jz57YCR7bmV4dC50aXRsZX0ke25leHQuc3ViVGl0bGUgPyAnICcgKyBuZXh0LnN1YlRpdGxlIDogJyd9YH08L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5wcmV2LW5leHQtbmF2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMjRweCA0NXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaG9sZGVye1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdjo6YmVmb3Jle1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA0NXB4O1xuICAgICAgICAgIHJpZ2h0OiA0NXB4O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldiwucHJldi1uZXh0LW5hdj4ubmV4dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldj5zdmcsLnByZXYtbmV4dC1uYXY+Lm5leHQ+c3Zne1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5wcmV2OmhvdmVyPnN2ZywucHJldi1uZXh0LW5hdj4ubmV4dDpob3Zlcj5zdmd7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpXG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+LnByZXY6OmFmdGVyLC5wcmV2LW5leHQtbmF2Pi5uZXh0OjphZnRlcntcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5uZXh0e1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbiA+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.80881d54e83f6273f5c7.hot-update.js.map