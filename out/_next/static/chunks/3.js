(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./docs/getting-started/doc.md":
/*!*************************************!*\
  !*** ./docs/getting-started/doc.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# 快速上手\n## 安装\n### 使用 npm 或 yarn 安装\n推荐使用 npm 或 yarn 的方式安装，它能更好地和 [webpack](https://webpack.js.org) 打包工具配合使用。\n```shell\nnpm install @semon/semon-ui --save\n```\n```shell\nyarn add @semon/semon-ui\n```\n### 浏览器引入\n目前可以通过 [unpkg.com/@semon/semon-ui](//unpkg.com/@semon/semon-ui) 获取到最新版本的资源，在浏览器中使用`script`和`link`标签直接引入文件，并使用全局变量`semon`。\n```html\n<!-- 引入样式 -->\n<link rel=\"stylesheet\" href=\"https://unpkg.com/@semon/semon-ui/dist/index.css\">\n<!-- 引入组件库 -->\n<script src=\"https://unpkg.com/@semon/semon-ui/dist/index.js\"></script>\n```\n\n## 开始使用\n### 完整引入\n```jsx\nimport { Button } from '@semon/semon-ui'\nReactDOM.render(<Button />, container)\n```\n引入css样式：\n```js\nimport '@semon/semon-ui/dist/index.css'\n```\n### 按需引入\n```jsx\nimport Button from '@semon/semon-ui/dist/Button'\nimport '@semon/semon-ui/dist/Button.css'\n```\n> 也可以通过 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现自动按需引入"

/***/ })

}]);
//# sourceMappingURL=3.js.map