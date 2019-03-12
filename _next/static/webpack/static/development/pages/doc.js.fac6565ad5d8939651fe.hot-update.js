webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./markdowns/api lazy recursive ^\\.\\/.*\\.md$":
/*!**********************************************************!*\
  !*** ./markdowns/api lazy ^\.\/.*\.md$ namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button.md": [
		"./markdowns/api/button.md",
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./markdowns/api lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/doc.tsx":
/*!***********************!*\
  !*** ./pages/doc.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Page */ "./components/Page.tsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Post */ "./components/Post/index.tsx");
/* harmony import */ var _data_PostMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/PostMenu */ "./data/PostMenu.ts");








var _jsxFileName = "/Users/WangShuo/Documents/GitHub/semon-ui-site/pages/doc.tsx";



 // import Router from 'next/router'

var DocPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DocPage, _React$Component);

  function DocPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DocPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DocPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DocPage, [{
    key: "render",
    // static defaultProps = {
    //   title: 'button',
    //   cotent: '123',
    //   demos: <p>123</p>
    // }
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content;
      var demos = null;
      var api = null;

      try {
        demos = __webpack_require__("./demos sync recursive ^\\.\\/.*$")("./".concat(title)).default;
      } catch (_unused) {}

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Page__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "".concat(_data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].subTitle ? _data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].subTitle + ' ' : '').concat(_data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].title, " - Semon UI"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Post__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, content), demos && react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Post__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u4EE3\u7801\u6F14\u793A"), demos));
    }
  }]);

  return DocPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(DocPage, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, content, api;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.prev = 1;
            _context.next = 4;
            return __webpack_require__("./markdowns lazy recursive ^\\.\\/.*\\.md$")("./".concat(query.title, ".md"));

          case 4:
            content = _context.sent;
            content = content.default;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log('加载失败');

          case 11:
            _context.prev = 11;
            _context.next = 14;
            return __webpack_require__("./markdowns/api lazy recursive ^\\.\\/.*\\.md$")("./".concat(query.title, ".md"));

          case 14:
            api = _context.sent;
            api = content.default;
            _context.next = 20;
            break;

          case 18:
            _context.prev = 18;
            _context.t1 = _context["catch"](11);

          case 20:
            return _context.abrupt("return", {
              title: query.title,
              content: content,
              api: api
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8], [11, 18]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (DocPage);

/***/ })

})
//# sourceMappingURL=doc.js.fac6565ad5d8939651fe.hot-update.js.map