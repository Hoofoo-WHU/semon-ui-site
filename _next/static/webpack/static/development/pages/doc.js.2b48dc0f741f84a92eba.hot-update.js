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
    className: "jsx-911532239" + " " + 'prev-next-nav',
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
    id: "911532239",
    __self: this
  }, ".prev-next-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:24px 45px;position:relative;}.prev-next-nav::before{content:'';border-top:1px solid #e8e8e8;width:100%;position:absolute;left:0;top:0;}.prev-next-nav>.prev,.prev-next-nav>.next{border:none;box-shadow:none;}.prev-next-nav>.prev::after,.prev-next-nav>.next::after{display:none;}.prev-next-nav .next{justify-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ5QixBQUd3QixBQVNGLEFBUUMsQUFJQyxBQUdTLFdBZE8sQ0FRYixDQUlsQixTQUdBLE1BTkEsWUFSYSxXQUNPLGtCQUNYLEtBWmUsRUFhaEIsTUFDUixjQWJrQixnQkFDQSxnQkFDRixjQUNJLGtCQUNBLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV2FuZ1NodW8vRG9jdW1lbnRzL0dpdEh1Yi9zZW1vbi11aS1zaXRlL2NvbXBvbmVudHMvUHJldk5leHROYXYvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUG9zdFRpdGxlLCBnZXROZXh0LCBnZXRQcmV2IH0gZnJvbSAnLi4vLi4vZGF0YS9Qb3N0TWVudSdcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHNlbW9uL3NlbW9uLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJldk5leHROYXYoeyB0aXRsZSB9OiB7IHRpdGxlOiBQb3N0VGl0bGUgfSkge1xuICBsZXQgcHJldiA9IGdldFByZXYodGl0bGUpXG4gIGxldCBuZXh0ID0gZ2V0TmV4dCh0aXRsZSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJldi1uZXh0LW5hdic+XG4gICAgICB7XG4gICAgICAgIHByZXYgPyA8TGluayBocmVmPXtgL2RvYz90aXRsZT0ke3ByZXYuZmlsZX1gfSBhcz17YC9kb2MvJHtwcmV2LmZpbGV9YH0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3ByZXYnIGljb249J2xlZnQnPntgJHtwcmV2LnRpdGxlfSR7cHJldi5zdWJUaXRsZSA/ICcgJyArIHByZXYuc3ViVGl0bGUgOiAnJ31gfTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+IDogbnVsbFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBuZXh0ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtuZXh0LmZpbGV9YH0gYXM9e2AvZG9jLyR7bmV4dC5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSduZXh0JyBpY29uUmlnaHQ9J3JpZ2h0Jz57YCR7bmV4dC50aXRsZX0ke25leHQuc3ViVGl0bGUgPyAnICcgKyBuZXh0LnN1YlRpdGxlIDogJyd9YH08L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5wcmV2LW5leHQtbmF2e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMjRweCA0NXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdjo6YmVmb3Jle1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldiwucHJldi1uZXh0LW5hdj4ubmV4dHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldjo6YWZ0ZXIsLnByZXYtbmV4dC1uYXY+Lm5leHQ6OmFmdGVye1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXYgLm5leHR7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uID5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.2b48dc0f741f84a92eba.hot-update.js.map