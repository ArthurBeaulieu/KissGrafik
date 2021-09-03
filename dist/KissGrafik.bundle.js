/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/CanvasUtils.js":
/*!*******************************!*\
  !*** ./src/js/CanvasUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./src/js/Utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar CanvasUtils = /*#__PURE__*/function () {\n  function CanvasUtils() {\n    _classCallCheck(this, CanvasUtils);\n  }\n\n  _createClass(CanvasUtils, null, [{\n    key: \"pieDrawer\",\n    value: function pieDrawer(canvas, dataset, options) {\n      if (!options.radius) {\n        options.radius = options.dimension.height;\n      }\n\n      var colors = CanvasUtils.colorPalette(dataset.data.length);\n      var ctx = canvas.getContext('2d');\n      var offset = {\n        x: 0,\n        y: 0,\n        meanAngle: 0\n      };\n      var start = 0,\n          stop = 0;\n      ctx.strokeStyle = 'black';\n      ctx.font = \"\".concat(options.style.fontSize * 2, \"px Arial\");\n      ctx.textAlign = 'center';\n      ctx.beginPath();\n      ctx.moveTo(0, 20);\n      ctx.fillText(dataset.title, options.center.x, options.style.fontSize * 4);\n      ctx.closePath();\n\n      for (var i = 0; i < dataset.data.length; ++i) {\n        start = stop;\n        stop += dataset.data[i].amount * 360 / 100;\n        offset.meanAngle = (start + stop) / 2;\n\n        if (options.splited === true) {\n          offset.x = Math.cos(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * options.splitWidth;\n          offset.y = Math.sin(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * options.splitWidth;\n        }\n\n        ctx.strokeStyle = 'black';\n        ctx.fillStyle = colors[i];\n        ctx.beginPath();\n        ctx.moveTo(options.center.x + offset.x, options.center.y + offset.y);\n        ctx.arc(options.center.x + offset.x, options.center.y + offset.y, options.radius, _Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(start), _Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(stop));\n        options && options.border ? ctx.lineTo(options.center.x + offset.x, options.center.y + offset.y) : null;\n        ctx.fill();\n        options && options.border ? ctx.stroke() : null;\n        ctx.closePath();\n\n        if (options.label) {\n          var bigRadius = options.radius + options.radius * 10 / 100;\n          var biggerRadius = options.radius + options.radius * 25 / 100;\n          var partMiddle = {\n            x: Math.cos(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * bigRadius,\n            y: Math.sin(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * bigRadius\n          };\n          var textMiddle = {\n            x: Math.cos(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * biggerRadius,\n            y: Math.sin(_Utils__WEBPACK_IMPORTED_MODULE_0__.default.ang2rad(offset.meanAngle)) * biggerRadius\n          };\n\n          if (textMiddle.x > 0) {\n            ctx.textAlign = 'left';\n          } else if (textMiddle.x === 0) {\n            ctx.textAlign = 'center';\n          } else {\n            ctx.textAlign = 'right';\n          }\n\n          ctx.strokeStyle = colors[i];\n          ctx.fillStyle = 'black';\n          ctx.font = \"\".concat(options.style.fontSize, \"px Arial\");\n          ctx.beginPath();\n          ctx.moveTo(options.center.x + offset.x + partMiddle.x * 0.9, options.center.y + offset.y + partMiddle.y * 0.9);\n          ctx.lineTo(options.center.x + offset.x + partMiddle.x, options.center.y + offset.y + partMiddle.y);\n          ctx.stroke();\n          ctx.fillText(dataset.data[i].label, options.center.x + textMiddle.x, options.center.y + textMiddle.y);\n          ctx.font = '10px Arial';\n          ctx.fillText(\"\".concat(dataset.data[i].amount, \"%\"), options.center.x + textMiddle.x, options.center.y + textMiddle.y + options.style.fontSize);\n          ctx.closePath();\n        }\n      }\n    }\n  }, {\n    key: \"colorPalette\",\n    value: function colorPalette(length) {\n      var colors = ['#91d900', '#2592d5', '#e70606', '#ec9e45', '#00b050', '#f4ed50', '#f4c3fb', '#b0b0b0', '#f2d9a5'];\n      return colors.slice(0, length);\n    }\n  }]);\n\n  return CanvasUtils;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasUtils);\n\n//# sourceURL=webpack://KissGrafik/./src/js/CanvasUtils.js?");

/***/ }),

/***/ "./src/js/KissGrafik.js":
/*!******************************!*\
  !*** ./src/js/KissGrafik.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_KissGrafik_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/KissGrafik.scss */ \"./src/scss/KissGrafik.scss\");\n/* harmony import */ var _CanvasUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasUtils */ \"./src/js/CanvasUtils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar KissGrafik = /*#__PURE__*/function () {\n  function KissGrafik(dataset) {\n    _classCallCheck(this, KissGrafik);\n\n    this._dataset = dataset;\n  }\n\n  _createClass(KissGrafik, [{\n    key: \"pieChart\",\n    value: function pieChart(renderTo, options) {\n      var computedStyle = renderTo.getBoundingClientRect();\n      _CanvasUtils__WEBPACK_IMPORTED_MODULE_1__.default.pieDrawer(renderTo, this._dataset, Object.assign(options, {\n        center: {\n          x: computedStyle.width / 2,\n          y: computedStyle.height / 2\n        },\n        dimension: {\n          height: computedStyle.height * 25 / 100\n        }\n      }));\n    }\n  }]);\n\n  return KissGrafik;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KissGrafik);\n\n//# sourceURL=webpack://KissGrafik/./src/js/KissGrafik.js?");

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Utils = /*#__PURE__*/function () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n\n  _createClass(Utils, null, [{\n    key: \"ang2rad\",\n    value: function ang2rad(angle) {\n      return angle * (Math.PI / 180);\n    }\n  }]);\n\n  return Utils;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);\n\n//# sourceURL=webpack://KissGrafik/./src/js/Utils.js?");

/***/ }),

/***/ "./src/scss/KissGrafik.scss":
/*!**********************************!*\
  !*** ./src/scss/KissGrafik.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://KissGrafik/./src/scss/KissGrafik.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/KissGrafik.js");
/******/ 	self.KissGrafik = __webpack_exports__.default;
/******/ 	
/******/ })()
;