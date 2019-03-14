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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_PostMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/PostMenu */ "./data/PostMenu.ts");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Link */ "./components/Link.tsx");
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @semon/semon-ui */ "../semon-ui-react/dist/index.js");
/* harmony import */ var _semon_semon_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/WangShuo/Documents/GitHub/semon-ui-site/components/PrevNextNav/index.tsx";




function PrevNextNav(_ref) {
  var title = _ref.title;
  var prev = Object(_data_PostMenu__WEBPACK_IMPORTED_MODULE_1__["getPrev"])(title);
  var next = Object(_data_PostMenu__WEBPACK_IMPORTED_MODULE_1__["getNext"])(title);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "prev-next-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, prev ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/doc?title=".concat(prev.file),
    as: "/doc/".concat(prev.file),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "prev",
    icon: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "".concat(prev.title).concat(prev.subTitle ? ' ' + prev.subTitle : ''))) : null, next ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/doc?title=".concat(next.file),
    as: "/doc/".concat(next.file),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_semon_semon_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "next",
    iconRight: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "".concat(next.title).concat(next.subTitle ? ' ' + next.subTitle : ''))) : null);
}

/***/ })

})
//# sourceMappingURL=doc.js.7f3e08c96ec1c3e82ded.hot-update.js.map