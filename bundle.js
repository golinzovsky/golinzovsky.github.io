/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_a_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/a-entry */ \"./js/a-entry.js\");\n/* harmony import */ var _js_a_entry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_a_entry__WEBPACK_IMPORTED_MODULE_2__);\n\n //\n//\n// import $ from 'jquery';\n// import 'bootstrap';\n//\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./index.pug":
/*!*******************!*\
  !*** ./index.pug ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n<!-- Required meta tags-->\\n<meta charset=\\\"utf-8\\\"/>\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width initial-scale=1 shrink-to-fit=no\\\"/>\\n<!-- Bootstrap CSS-->\\n<!--link(rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\\" integrity=\\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\\" crossorigin=\\\"anonymous\\\")-->\\n<!--link(rel=\\\"stylesheet\\\", href=\\\"bundle.css\\\")-->\\n<title>Hello, world!!!!!</title>\\n<body>\\n  <h1>golinzovsky.github.io</h1>\\n  <form action=\\\"\\\">\\n    <input class=\\\"class-MyButton\\\" id=\\\"forThis\\\" type=\\\"button\\\" value=\\\"MyButton\\\"/>\\n    <hr/>\\n    <div>\\n      <input type=\\\"checkbox\\\" name=\\\"one\\\" value=\\\"one\\\"/>\\n      <label for=\\\"forThis\\\">one</label>\\n      <input type=\\\"checkbox\\\" name=\\\"two\\\" value=\\\"one\\\"/>\\n      <label for=\\\"forThis\\\">two</label>\\n    </div>\\n    <hr/>\\n    <input type=\\\"text\\\"/>\\n    <input type=\\\"submit\\\" value=\\\"MySubmit\\\"/>\\n    <hr/>\\n    <input type=\\\"date\\\"/>\\n  </form>\\n  <!-- my JavaScript-->\\n  <!--script(src=\\\"./bundle.js\\\")-->\\n  <!-- Optional JavaScript-->\\n  <!-- jQuery first, then Popper.js, then Bootstrap JS-->\\n  <!--script(src=\\\"https://code.jquery.com/jquery-3.3.1.slim.min.js\\\" integrity=\\\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\\\" crossorigin=\\\"anonymous\\\")-->\\n  <!--script(src=\\\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\\\" integrity=\\\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\\\" crossorigin=\\\"anonymous\\\")-->\\n  <!--script(src=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\\\" integrity=\\\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\\\" crossorigin=\\\"anonymous\\\")-->\\n</body>\";\n\n//# sourceURL=webpack:///./index.pug?");

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./js/a-entry.js":
/*!***********************!*\
  !*** ./js/a-entry.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import $ from 'jquery';\n//const mariadb = require('mariadb');\n// import  mariadb from 'mariadb';\n(function () {\n  //\n  var button = document.getElementsByClassName('form_wrap_input')[0];\n  var arr = [button.value, button.type];\n  console.log(arr); //\n})(); //self-called function\n\n//# sourceURL=webpack:///./js/a-entry.js?");

/***/ })

/******/ });