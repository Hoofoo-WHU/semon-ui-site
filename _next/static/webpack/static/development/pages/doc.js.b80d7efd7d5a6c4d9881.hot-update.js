webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./docs lazy recursive ^\\.\\/.*\\/api\\.md$":
/*!******************************************************!*\
  !*** ./docs lazy ^\.\/.*\/api\.md$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/api.md": [
		"./docs/button/api.md",
		1
	],
	"./grid/api.md": [
		"./docs/grid/api.md",
		8
	],
	"./icon/api.md": [
		"./docs/icon/api.md",
		5
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
webpackAsyncContext.id = "./docs lazy recursive ^\\.\\/.*\\/api\\.md$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=doc.js.b80d7efd7d5a6c4d9881.hot-update.js.map