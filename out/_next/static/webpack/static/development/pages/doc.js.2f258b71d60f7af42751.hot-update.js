webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./components lazy recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./components lazy ^\.\/.*$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Demo": [
		"./components/Demo/index.tsx",
		9,
		8
	],
	"./Demo/": [
		"./components/Demo/index.tsx",
		9,
		8
	],
	"./Demo/index": [
		"./components/Demo/index.tsx",
		9,
		8
	],
	"./Demo/index.tsx": [
		"./components/Demo/index.tsx",
		9,
		8
	],
	"./DocMenu": [
		"./components/DocMenu/index.tsx",
		9,
		"styles",
		6
	],
	"./DocMenu/": [
		"./components/DocMenu/index.tsx",
		9,
		"styles",
		6
	],
	"./DocMenu/doc-menu.scss": [
		"./components/DocMenu/doc-menu.scss",
		7,
		"styles"
	],
	"./DocMenu/index": [
		"./components/DocMenu/index.tsx",
		9,
		"styles",
		6
	],
	"./DocMenu/index.tsx": [
		"./components/DocMenu/index.tsx",
		9,
		"styles",
		6
	],
	"./Link": [
		"./components/Link.tsx",
		9,
		9
	],
	"./Link.tsx": [
		"./components/Link.tsx",
		9,
		9
	],
	"./Navigator": [
		"./components/Navigator/index.tsx",
		9,
		"styles",
		5
	],
	"./Navigator/": [
		"./components/Navigator/index.tsx",
		9,
		"styles",
		5
	],
	"./Navigator/index": [
		"./components/Navigator/index.tsx",
		9,
		"styles",
		5
	],
	"./Navigator/index.tsx": [
		"./components/Navigator/index.tsx",
		9,
		"styles",
		5
	],
	"./Navigator/navigator.scss": [
		"./components/Navigator/navigator.scss",
		7,
		"styles"
	],
	"./Page": [
		"./components/Page.tsx",
		9
	],
	"./Page.tsx": [
		"./components/Page.tsx",
		9
	],
	"./Post": [
		"./components/Post/index.tsx",
		9
	],
	"./Post/": [
		"./components/Post/index.tsx",
		9
	],
	"./Post/highlight.scss": [
		"./components/Post/highlight.scss",
		7
	],
	"./Post/index": [
		"./components/Post/index.tsx",
		9
	],
	"./Post/index.tsx": [
		"./components/Post/index.tsx",
		9
	],
	"./Post/post.scss": [
		"./components/Post/post.scss",
		7
	],
	"./ProgressBar": [
		"./components/ProgressBar/index.tsx",
		9,
		"styles",
		7
	],
	"./ProgressBar/": [
		"./components/ProgressBar/index.tsx",
		9,
		"styles",
		7
	],
	"./ProgressBar/index": [
		"./components/ProgressBar/index.tsx",
		9,
		"styles",
		7
	],
	"./ProgressBar/index.tsx": [
		"./components/ProgressBar/index.tsx",
		9,
		"styles",
		7
	],
	"./ProgressBar/progressbar.scss": [
		"./components/ProgressBar/progressbar.scss",
		7,
		"styles"
	],
	"./Route": [
		"./components/Route.tsx",
		9,
		10
	],
	"./Route.tsx": [
		"./components/Route.tsx",
		9,
		10
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
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./components weak recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./components weak ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Demo": "./components/Demo/index.tsx",
	"./Demo/": "./components/Demo/index.tsx",
	"./Demo/index": "./components/Demo/index.tsx",
	"./Demo/index.tsx": "./components/Demo/index.tsx",
	"./DocMenu": "./components/DocMenu/index.tsx",
	"./DocMenu/": "./components/DocMenu/index.tsx",
	"./DocMenu/doc-menu.scss": "./components/DocMenu/doc-menu.scss",
	"./DocMenu/index": "./components/DocMenu/index.tsx",
	"./DocMenu/index.tsx": "./components/DocMenu/index.tsx",
	"./Link": "./components/Link.tsx",
	"./Link.tsx": "./components/Link.tsx",
	"./Navigator": "./components/Navigator/index.tsx",
	"./Navigator/": "./components/Navigator/index.tsx",
	"./Navigator/index": "./components/Navigator/index.tsx",
	"./Navigator/index.tsx": "./components/Navigator/index.tsx",
	"./Navigator/navigator.scss": "./components/Navigator/navigator.scss",
	"./Page": "./components/Page.tsx",
	"./Page.tsx": "./components/Page.tsx",
	"./Post": "./components/Post/index.tsx",
	"./Post/": "./components/Post/index.tsx",
	"./Post/highlight.scss": "./components/Post/highlight.scss",
	"./Post/index": "./components/Post/index.tsx",
	"./Post/index.tsx": "./components/Post/index.tsx",
	"./Post/post.scss": "./components/Post/post.scss",
	"./ProgressBar": "./components/ProgressBar/index.tsx",
	"./ProgressBar/": "./components/ProgressBar/index.tsx",
	"./ProgressBar/index": "./components/ProgressBar/index.tsx",
	"./ProgressBar/index.tsx": "./components/ProgressBar/index.tsx",
	"./ProgressBar/progressbar.scss": "./components/ProgressBar/progressbar.scss",
	"./Route": "./components/Route.tsx",
	"./Route.tsx": "./components/Route.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "./components weak recursive ^\\.\\/.*$";
module.exports = webpackContext;

/***/ }),

/***/ "./markdowns lazy recursive ^\\.\\/.*\\.md$":
false,

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);








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
          content = _this$props.content,
          demos = _this$props.demos;
      console.log('Component:', demos);
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Page__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "".concat(_data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].subTitle ? _data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].subTitle + ' ' : '').concat(_data_PostMenu__WEBPACK_IMPORTED_MODULE_11__["Posts"][title].title, " - Semon UI"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Post__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, content), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Post__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u4EE3\u7801\u6F14\u793A")));
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
    var query, Demo;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            // let content: any
            // let demos: any
            // try {
            //   content = await import(`../markdowns/${query.title}.md`)
            //   content = content.default
            // } catch{
            //   console.log('加载失败')
            // }
            // try {
            Demo = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(function () {
              return __webpack_require__("./components lazy recursive ^\\.\\/.*$")("./".concat(query.title));
            }, {
              loadableGenerated: {
                webpack: function webpack() {
                  return [/*require.resolve*/(__webpack_require__("./components weak recursive ^\\.\\/.*$").resolve("./".concat(query.title)))];
                },
                modules: ["../components/".concat(query.title)]
              }
            }); // demos = await import(`../demos/${query.title}`)
            // console.log(demos.default)
            // demos = demos.default
            // } catch{
            //   // demos = null
            // }

            return _context.abrupt("return", {
              Demo: Demo
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (DocPage);

/***/ })

})
//# sourceMappingURL=doc.js.2f258b71d60f7af42751.hot-update.js.map