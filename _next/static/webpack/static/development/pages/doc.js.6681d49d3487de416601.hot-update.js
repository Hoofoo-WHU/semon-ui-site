webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./markdowns lazy recursive ^\\.\\/.*\\.md$":
/*!******************************************************!*\
  !*** ./markdowns lazy ^\.\/.*\.md$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api/button.md": [
		"./markdowns/api/button.md",
		4
	],
	"./button.md": [
		"./markdowns/button.md",
		1
	],
	"./getting-started.md": [
		"./markdowns/getting-started.md",
		2
	],
	"./introduce.md": [
		"./markdowns/introduce.md",
		3
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
webpackAsyncContext.id = "./markdowns lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=doc.js.6681d49d3487de416601.hot-update.js.map