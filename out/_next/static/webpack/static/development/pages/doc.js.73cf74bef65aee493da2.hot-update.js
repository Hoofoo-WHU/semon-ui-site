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
    className: "jsx-1613492285" + " " + 'prev-next-nav',
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
    className: "jsx-1613492285" + " " + 'holder',
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
    id: "1613492285",
    __self: this
  }, ".prev-next-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:24px 45px;position:relative;margin-top:150px;}.holder{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.prev-next-nav::before{content:'';border-top:1px solid #e8e8e8;position:absolute;left:45px;right:45px;top:0;}.prev-next-nav>.prev,.prev-next-nav>.next{border:none;box-shadow:none;}.prev-next-nav>.prev::after,.prev-next-nav>.next::after{display:none;}.prev-next-nav>.next{justify-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYW5nU2h1by9Eb2N1bWVudHMvR2l0SHViL3NlbW9uLXVpLXNpdGUvY29tcG9uZW50cy9QcmV2TmV4dE5hdi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J5QixBQXFFd0IsQUFVRCxBQUdELEFBUUMsQUFTQyxBQUdTLFdBbkJPLENBUWIsQ0FTbEIsU0FHQSxNQVhBLFlBUm9CLGtCQUNSLFVBQ0MsR0FOYixHQVZ3QixLQWlCaEIsTUFDUixXQWpCa0IsZ0JBQ0EsZ0JBQ0YsY0FDSSxrQkFDQSxrQkFDRCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL1dhbmdTaHVvL0RvY3VtZW50cy9HaXRIdWIvc2Vtb24tdWktc2l0ZS9jb21wb25lbnRzL1ByZXZOZXh0TmF2L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBvc3RUaXRsZSwgZ2V0TmV4dCwgZ2V0UHJldiB9IGZyb20gJy4uLy4uL2RhdGEvUG9zdE1lbnUnXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BzZW1vbi9zZW1vbi11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZOZXh0TmF2KHsgdGl0bGUgfTogeyB0aXRsZTogUG9zdFRpdGxlIH0pIHtcbiAgbGV0IHByZXYgPSBnZXRQcmV2KHRpdGxlKVxuICBsZXQgbmV4dCA9IGdldE5leHQodGl0bGUpXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ByZXYtbmV4dC1uYXYnPlxuICAgICAge1xuICAgICAgICBwcmV2ID8gPExpbmsgaHJlZj17YC9kb2M/dGl0bGU9JHtwcmV2LmZpbGV9YH0gYXM9e2AvZG9jLyR7cHJldi5maWxlfWB9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdwcmV2JyBpY29uPSdsZWZ0Jz57YCR7cHJldi50aXRsZX0ke3ByZXYuc3ViVGl0bGUgPyAnICcgKyBwcmV2LnN1YlRpdGxlIDogJyd9YH08L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob2xkZXInIC8+XG4gICAgICB7XG4gICAgICAgIG5leHQgPyA8TGluayBocmVmPXtgL2RvYz90aXRsZT0ke25leHQuZmlsZX1gfSBhcz17YC9kb2MvJHtuZXh0LmZpbGV9YH0+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J25leHQnIGljb25SaWdodD0ncmlnaHQnPntgJHtuZXh0LnRpdGxlfSR7bmV4dC5zdWJUaXRsZSA/ICcgJyArIG5leHQuc3ViVGl0bGUgOiAnJ31gfTwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+IDogbnVsbFxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnByZXYtbmV4dC1uYXZ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDQ1cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ob2xkZXJ7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2OjpiZWZvcmV7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgICAgICAgcmlnaHQ6IDQ1cHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5wcmV2LC5wcmV2LW5leHQtbmF2Pi5uZXh0e1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5wcmV2PnN2ZywucHJldi1uZXh0LW5hdj4ubmV4dD5zdmd7XG4gICAgICAgIH1cbiAgICAgICAgLnByZXYtbmV4dC1uYXY+LnByZXY6aG92ZXI+c3ZnLC5wcmV2LW5leHQtbmF2Pi5uZXh0OmhvdmVyPnN2Z3tcblxuICAgICAgICB9XG4gICAgICAgIC5wcmV2LW5leHQtbmF2Pi5wcmV2OjphZnRlciwucHJldi1uZXh0LW5hdj4ubmV4dDo6YWZ0ZXJ7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucHJldi1uZXh0LW5hdj4ubmV4dHtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24gPlxuICApXG59Il19 */\n/*@ sourceURL=/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx */"));
}

/***/ })

})
//# sourceMappingURL=doc.js.73cf74bef65aee493da2.hot-update.js.map