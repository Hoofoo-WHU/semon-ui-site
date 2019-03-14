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
    className: "jsx-2258551823" + " " + 'prev-next-nav',
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
    id: "2258551823",
    __self: this
  }, ".prev-next-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:24px 45px;position:relative;margin-top:80px;}.prev-next-nav::before{content:'';border-top:1px solid #e8e8e8;position:absolute;left:45px;right:45px;top:0;}.prev-next-nav>.prev,.prev-next-nav>.next{border:none;box-shadow:none;}.prev-next-nav>.prev::after,.prev-next-nav>.next::after{display:none;}.prev-next-nav>.next{justify-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ5QixBQUd3QixBQVVGLEFBUUMsQUFJQyxBQUdTLFdBZE8sQ0FRYixDQUlsQixTQUdBLE1BTkEsWUFSb0Isa0JBQ1IsVUFDQyxNQWJXLEtBY2hCLE1BQ1IsV0Fka0IsZ0JBQ0EsZ0JBQ0YsY0FDSSxrQkFDQSxrQkFDRixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dhbmdTaHVvL0RvY3VtZW50cy9HaXRIdWIvc2Vtb24tdWktc2l0ZS9jb21wb25lbnRzL1ByZXZOZXh0TmF2L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBvc3RUaXRsZSwgZ2V0TmV4dCwgZ2V0UHJldiB9IGZyb20gJy4uLy4uL2RhdGEvUG9zdE1lbnUnXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BzZW1vbi9zZW1vbi11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZOZXh0TmF2KHsgdGl0bGUgfTogeyB0aXRsZTogUG9zdFRpdGxlIH0pIHtcbiAgbGV0IHByZXYgPSBnZXRQcmV2KHRpdGxlKVxuICBsZXQgbmV4dCA9IGdldE5leHQodGl0bGUpXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ByZXYtbmV4dC1uYXYnPlxuICAgICAge1xuICAgICAgICBwcmV2ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtwcmV2LmZpbGV9YH0gYXM9e2AvZG9jLyR7cHJldi5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdwcmV2JyBpY29uPSdsZWZ0Jz57YCR7cHJldi50aXRsZX0ke3ByZXYuc3ViVGl0bGUgPyAnICcgKyBwcmV2LnN1YlRpdGxlIDogJyd9YH08L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgbmV4dCA/IDxMaW5rIGhyZWY9e2AvZG9jP3RpdGxlPSR7bmV4dC5maWxlfWB9IGFzPXtgL2RvYy8ke25leHQuZmlsZX1gfT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nbmV4dCcgaWNvblJpZ2h0PSdyaWdodCc+e2Ake25leHQudGl0bGV9JHtuZXh0LnN1YlRpdGxlID8gJyAnICsgbmV4dC5zdWJUaXRsZSA6ICcnfWB9PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz4gOiBudWxsXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucHJldi1uZXh0LW5hdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggNDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdjo6YmVmb3Jle1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA0NXB4O1xuICAgICAgICAgIHJpZ2h0OiA0NXB4O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldiwucHJldi1uZXh0LW5hdj4ubmV4dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldjo6YWZ0ZXIsLnByZXYtbmV4dC1uYXY+Lm5leHQ6OmFmdGVye1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+Lm5leHR7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uID5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.4f8b9085eef493101f37.hot-update.js.map