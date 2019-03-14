webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./data/PostMenu.ts":
/*!**************************!*\
  !*** ./data/PostMenu.ts ***!
  \**************************/
/*! exports provided: PostData, PostGroupData, PostSubMenuData, Posts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostData", function() { return PostData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostGroupData", function() { return PostGroupData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSubMenuData", function() { return PostSubMenuData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




var _Posts;

var PostData = function PostData(title, file, subTitle) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostData);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "type", PostData.type);

  this.title = title;
  this.subTitle = subTitle;
  this.file = file;
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(PostData, "type", _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('PostData'));

var PostGroupData = function PostGroupData(title, children) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostGroupData);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "type", PostGroupData.type);

  this.title = title;
  this.children = children;
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(PostGroupData, "type", _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('PostGroupData'));

var PostSubMenuData = function PostSubMenuData(title, key, children) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostSubMenuData);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "type", PostSubMenuData.type);

  this.title = title;
  this.key = key;
  this.children = children;
};

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(PostSubMenuData, "type", _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_0___default()('PostSubMenuData'));

var Posts = (_Posts = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, 'getting-started', new PostData('快速开始', 'getting-started')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "introduce", new PostData('介绍', 'introduce')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "button", new PostData('Button', 'button', '按钮')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "icon", new PostData('Icon', 'icon', '图标')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "grid", new PostData('Grid', 'grid', '栅格')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "layout", new PostData('Layout', 'layout', '布局')), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posts, "menu", new PostData('Menu', 'menu', '菜单')), _Posts);
var data = {
  default: Posts['getting-started'],
  opens: ['components'],
  data: [Posts.introduce, Posts['getting-started'], new PostSubMenuData('Components', 'components', [new PostGroupData('通用', [Posts.button, Posts.icon]), new PostGroupData('布局', [Posts.grid, Posts.layout])])]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ })

})
//# sourceMappingURL=doc.js.a3e251db0b3e2d3d744b.hot-update.js.map