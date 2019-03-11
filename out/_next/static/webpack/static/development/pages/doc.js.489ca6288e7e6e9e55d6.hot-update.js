webpackHotUpdate("static/development/pages/doc.js",{

/***/ "./markdowns lazy recursive ^\\.\\/.*\\.md$":
/*!******************************************************!*\
  !*** ./markdowns lazy ^\.\/.*\.md$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./getting-start.md": [
		"./markdowns/getting-start.md",
		3
	],
	"./introduce.md": [
		"./markdowns/introduce.md",
		2
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
//# sourceMappingURL=doc.js.489ca6288e7e6e9e55d6.hot-update.js.map