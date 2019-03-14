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
    className: "jsx-705070669" + " " + 'prev-next-nav',
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
    className: "jsx-705070669" + " " + 'holder',
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
    id: "705070669",
    __self: this
  }, ".prev-next-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:24px 45px;position:relative;margin-top:150px;}.holder{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.prev-next-nav::before{content:'';border-top:1px solid #e8e8e8;position:absolute;left:45px;right:45px;top:0;}.prev-next-nav>.prev,.prev-next-nav>.next{border:none;box-shadow:none;}.prev-next-nav>.prev>svg,.prev-next-nav>.next>svg{fill:#aaa;}.prev-next-nav>.prev:hover>svg,.prev-next-nav>.next:hover>svg{fill:inherit;}.prev-next-nav>.prev::after,.prev-next-nav>.next::after{display:none;}.prev-next-nav>.next{justify-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQUd3QixBQVVELEFBR0QsQUFRQyxBQUlGLEFBR0csQUFHQSxBQUdTLFVBUnhCLENBWitCLENBUWIsQ0FPbEIsQUFHQSxTQUdBLE1BWkEsWUFSb0Isa0JBQ1IsVUFDQyxHQU5iLEdBVndCLEtBaUJoQixNQUNSLFdBakJrQixnQkFDQSxnQkFDRixjQUNJLGtCQUNBLGtCQUNELGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvV2FuZ1NodW8vRG9jdW1lbnRzL0dpdEh1Yi9zZW1vbi11aS1zaXRlL2NvbXBvbmVudHMvUHJldk5leHROYXYvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUG9zdFRpdGxlLCBnZXROZXh0LCBnZXRQcmV2IH0gZnJvbSAnLi4vLi4vZGF0YS9Qb3N0TWVudSdcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHNlbW9uL3NlbW9uLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJldk5leHROYXYoeyB0aXRsZSB9OiB7IHRpdGxlOiBQb3N0VGl0bGUgfSkge1xuICBsZXQgcHJldiA9IGdldFByZXYodGl0bGUpXG4gIGxldCBuZXh0ID0gZ2V0TmV4dCh0aXRsZSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJldi1uZXh0LW5hdic+XG4gICAgICB7XG4gICAgICAgIHByZXYgPyA8TGluayBocmVmPXtgL2RvYz90aXRsZT0ke3ByZXYuZmlsZX1gfSBhcz17YC9kb2MvJHtwcmV2LmZpbGV9YH0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3ByZXYnIGljb249J2xlZnQnPntgJHtwcmV2LnRpdGxlfSR7cHJldi5zdWJUaXRsZSA/ICcgJyArIHByZXYuc3ViVGl0bGUgOiAnJ31gfTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+IDogbnVsbFxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbGRlcicgLz5cbiAgICAgIHtcbiAgICAgICAgbmV4dCA/IDxMaW5rIGhyZWY9e2AvZG9jP3RpdGxlPSR7bmV4dC5maWxlfWB9IGFzPXtgL2RvYy8ke25leHQuZmlsZX1gfT5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nbmV4dCcgaWNvblJpZ2h0PSdyaWdodCc+e2Ake25leHQudGl0bGV9JHtuZXh0LnN1YlRpdGxlID8gJyAnICsgbmV4dC5zdWJUaXRsZSA6ICcnfWB9PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz4gOiBudWxsXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucHJldi1uZXh0LW5hdntcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDk4MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggNDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhvbGRlcntcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY6OmJlZm9yZXtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNDVweDtcbiAgICAgICAgICByaWdodDogNDVweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+LnByZXYsLnByZXYtbmV4dC1uYXY+Lm5leHR7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+LnByZXY+c3ZnLC5wcmV2LW5leHQtbmF2Pi5uZXh0PnN2Z3tcbiAgICAgICAgICBmaWxsOiAjYWFhO1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5wcmV2OmhvdmVyPnN2ZywucHJldi1uZXh0LW5hdj4ubmV4dDpob3Zlcj5zdmd7XG4gICAgICAgICAgZmlsbDogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ucHJldjo6YWZ0ZXIsLnByZXYtbmV4dC1uYXY+Lm5leHQ6OmFmdGVye1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+Lm5leHR7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uID5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.fc82d08982d3c51cd397.hot-update.js.map