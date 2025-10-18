"use weex:vue";
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************!*\
  !*** D:/code/JD/camera-sample/main.js?{"page":"pages%2Fcamera%2Findex"} ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_camera_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camera/index.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_camera_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_camera_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/camera/index'\n        _pages_camera_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_camera_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBK0Q7QUFDL0QsUUFBUSw0RUFBRztBQUNYLFFBQVEsNEVBQUc7QUFDWCxRQUFRLDRFQUFHO0FBQ1gsZ0JBQWdCLDRFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jYW1lcmEvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvY2FtZXJhL2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** D:/code/JD/camera-sample/main.js?{"type":"appStyle"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************!*\
  !*** D:/code/JD/camera-sample/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/JD/camera-sample/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!********************************************************************!*\
  !*** D:/code/JD/camera-sample/pages/camera/index.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=c7f112a6&mpType=page */ 6);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"438def7f\",\n  false,\n  _index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/camera/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQ2tNO0FBQ2xNLGdCQUFnQixxTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM3ZjExMmE2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhQzpcXFxcVXNlcnNcXFxcY3NzMjVcXFxcRG9jdW1lbnRzXFxcXOi9r+S7tlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDM4ZGVmN2ZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FtZXJhL2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************!*\
  !*** D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=template&id=c7f112a6&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=c7f112a6&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_c7f112a6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=template&id=c7f112a6&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        {
          staticClass: ["live-camera"],
          style: { width: _vm.windowWidth, height: _vm.windowHeight },
        },
        [
          _c(
            "view",
            {
              staticClass: ["preview"],
              style: { width: _vm.windowWidth, height: _vm.windowHeight - 80 },
            },
            [
              _c("live-pusher", {
                ref: "livePusher",
                staticClass: ["livePusher"],
                style: { width: _vm.cameraWidth, height: _vm.cameraHeight },
                attrs: {
                  id: "livePusher",
                  mode: "FHD",
                  beauty: "1",
                  whiteness: "0",
                  aspect: _vm.aspect,
                  minBitrate: "1000",
                  audioQuality: "16KHz",
                  devicePosition: "back",
                  autoFocus: true,
                  muted: true,
                  enableCamera: true,
                  enableMic: false,
                  zoom: false,
                },
                on: { statechange: _vm.statechange },
              }),
              _c("cover-view", { staticClass: ["remind"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["remind-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(_vm.message))]
                ),
              ]),
              _c(
                "cover-view",
                {
                  staticClass: ["outline-box"],
                  style: {
                    width: _vm.windowWidth,
                    height: _vm.windowHeight - 80,
                  },
                },
                [
                  _c("cover-image", {
                    staticClass: ["outline-img"],
                    attrs: {
                      src: "/static/live-camera/outline/idphotoskin.png",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["menu"] },
            [
              _c("cover-image", {
                staticClass: ["menu-mask"],
                attrs: { src: "/static/live-camera/bar.png" },
              }),
              _c("cover-image", {
                staticClass: ["menu-back"],
                attrs: { src: "/static/live-camera/back.png" },
                on: { click: _vm.back },
              }),
              _c("cover-image", {
                staticClass: ["menu-snapshot"],
                attrs: { src: "/static/live-camera/shutter.png" },
                on: { click: _vm.snapshot },
              }),
              _c("cover-image", {
                staticClass: ["menu-flip"],
                attrs: { src: "/static/live-camera/flip.png" },
                on: { click: _vm.flip },
              }),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!********************************************************************************************!*\
  !*** D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNnQixDQUFnQiw2aEJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxjc3MyNVxcXFxEb2N1bWVudHNcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUM6XFxcXFVzZXJzXFxcXGNzczI1XFxcXERvY3VtZW50c1xcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFDOlxcXFxVc2Vyc1xcXFxjc3MyNVxcXFxEb2N1bWVudHNcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxjc3MyNVxcXFxEb2N1bWVudHNcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUM6XFxcXFVzZXJzXFxcXGNzczI1XFxcXERvY3VtZW50c1xcXFzova/ku7ZcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFDOlxcXFxVc2Vyc1xcXFxjc3MyNVxcXFxEb2N1bWVudHNcXFxc6L2v5Lu2XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _this = null;\nvar _default = {\n  data: function data() {\n    return {\n      dotype: 'idphoto',\n      //操作类型\n      message: '',\n      //提示\n      aspect: '2:3',\n      //比例\n      cameraWidth: '',\n      //相机画面宽度\n      cameraHeight: '',\n      //相机画面宽度\n      windowWidth: '',\n      //屏幕可用宽度\n      windowHeight: '',\n      //屏幕可用高度\n      camerastate: false,\n      //相机准备好了\n      livePusher: null,\n      //流视频对象\n      snapshotsrc: null //快照\n    };\n  },\n  onLoad: function onLoad(e) {\n    _this = this;\n    if (e.dotype != undefined) this.dotype = e.dotype;\n    this.initCamera();\n  },\n  onReady: function onReady() {\n    this.livePusher = uni.createLivePusherContext('livePusher', this);\n    this.startPreview(); //开启预览并设置摄像头\n    this.poenCarme();\n  },\n  methods: {\n    //轮询打开\n    poenCarme: function poenCarme() {\n      if (plus.os.name == 'Android') {\n        this.poenCarmeInterval = setInterval(function () {\n          __f__(\"log\", _this.camerastate, \" at pages/camera/index.nvue:84\");\n          if (!_this.camerastate) _this.startPreview();\n        }, 2500);\n      }\n    },\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          _this.cameraWidth = res.windowWidth;\n          _this.cameraHeight = res.windowWidth * 1.5;\n        }\n      });\n    },\n    //开始预览\n    startPreview: function startPreview() {\n      this.livePusher.startPreview({\n        success: function success(a) {\n          __f__(\"log\", a, \" at pages/camera/index.nvue:107\");\n        }\n      });\n    },\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        }\n      });\n    },\n    //状态\n    statechange: function statechange(e) {\n      //状态改变\n      __f__(\"log\", e, \" at pages/camera/index.nvue:123\");\n      if (e.detail.code == 1007) {\n        _this.camerastate = true;\n      } else if (e.detail.code == -1301) {\n        _this.camerastate = false;\n      }\n    },\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    //抓拍\n    snapshot: function snapshot() {\n      this.livePusher.snapshot({\n        success: function success(e) {\n          _this.snapshotsrc = e.message.tempImagePath;\n          _this.stopPreview();\n          _this.setImage();\n          uni.navigateBack();\n        }\n      });\n    },\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({\n        path: _this.snapshotsrc,\n        dotype: this.dotype\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL2luZGV4Lm52dWUiXSwibmFtZXMiOlsiZGF0YSIsImRvdHlwZSIsIm1lc3NhZ2UiLCJhc3BlY3QiLCJjYW1lcmFXaWR0aCIsImNhbWVyYUhlaWdodCIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY2FtZXJhc3RhdGUiLCJsaXZlUHVzaGVyIiwic25hcHNob3RzcmMiLCJvbkxvYWQiLCJfdGhpcyIsIm9uUmVhZHkiLCJtZXRob2RzIiwicG9lbkNhcm1lIiwiaW5pdENhbWVyYSIsInVuaSIsInN1Y2Nlc3MiLCJzdGFydFByZXZpZXciLCJzdG9wUHJldmlldyIsInN0YXRlY2hhbmdlIiwiYmFjayIsInNuYXBzaG90IiwiZmxpcCIsInNldEltYWdlIiwicHJldlBhZ2UiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREE7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUVBO1FBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBRUE7SUFDQUM7TUFDQUM7UUFDQUM7VUFDQU47VUFDQUE7VUFDQUE7VUFDQUE7UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBTztNQUNBO1FBQ0FEO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBRTtNQUNBO1FBQ0FGO1VBQ0FOO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQVM7TUFDQTtNQUNBO01BQ0E7UUFDQVQ7TUFDQTtRQUNBQTtNQUNBO0lBQ0E7SUFFQTtJQUNBVTtNQUNBTDtJQUNBO0lBRUE7SUFDQU07TUFDQTtRQUNBTDtVQUNBTjtVQUNBQTtVQUNBQTtVQUNBSztRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FPO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTs7TUFFQTtNQUNBQztRQUFBQztRQUFBMUI7TUFBQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJsaXZlLWNhbWVyYVwiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInByZXZpZXdcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aW5kb3dXaWR0aCwgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgLSA4MCB9XCI+XHJcblx0XHRcdDxsaXZlLXB1c2hlclxyXG5cdFx0XHRcdGlkPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdFx0cmVmPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdFx0Y2xhc3M9XCJsaXZlUHVzaGVyXCJcclxuXHRcdFx0XHRtb2RlPVwiRkhEXCJcclxuXHRcdFx0XHRiZWF1dHk9XCIxXCJcclxuXHRcdFx0XHR3aGl0ZW5lc3M9XCIwXCJcclxuXHRcdFx0XHQ6YXNwZWN0PVwiYXNwZWN0XCJcclxuXHRcdFx0XHRtaW4tYml0cmF0ZT1cIjEwMDBcIlxyXG5cdFx0XHRcdGF1ZGlvLXF1YWxpdHk9XCIxNktIelwiXHJcblx0XHRcdFx0ZGV2aWNlLXBvc2l0aW9uPVwiYmFja1wiXHJcblx0XHRcdFx0OmF1dG8tZm9jdXM9XCJ0cnVlXCJcclxuXHRcdFx0XHQ6bXV0ZWQ9XCJ0cnVlXCJcclxuXHRcdFx0XHQ6ZW5hYmxlLWNhbWVyYT1cInRydWVcIlxyXG5cdFx0XHRcdDplbmFibGUtbWljPVwiZmFsc2VcIlxyXG5cdFx0XHRcdDp6b29tPVwiZmFsc2VcIlxyXG5cdFx0XHRcdEBzdGF0ZWNoYW5nZT1cInN0YXRlY2hhbmdlXCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7IHdpZHRoOiBjYW1lcmFXaWR0aCwgaGVpZ2h0OiBjYW1lcmFIZWlnaHQgfVwiXHJcblx0XHRcdD48L2xpdmUtcHVzaGVyPlxyXG5cclxuXHRcdFx0PCEtLeaPkOekuuivrS0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInJlbWluZFwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmVtaW5kLXRleHRcIiBzdHlsZT1cIlwiPnt7IG1lc3NhZ2UgfX08L3RleHQ+XHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdDwhLS3ovoXliqnnur8tLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJvdXRsaW5lLWJveFwiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCAtIDgwIH1cIj5cclxuXHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJvdXRsaW5lLWltZ1wiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvb3V0bGluZS9pZHBob3Rvc2tpbi5wbmdcIiBzdHlsZT1cIlwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyBjbGFzcz1cIm1lbnVcIj5cclxuXHRcdFx0PCEtLeW6lemDqOiPnOWNleWMuuWfn+iDjOaZry0tPlxyXG5cdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LW1hc2tcIiBzcmM9XCIvc3RhdGljL2xpdmUtY2FtZXJhL2Jhci5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0PCEtLei/lOWbnumUri0tPlxyXG5cdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LWJhY2tcIiBAdGFwPVwiYmFja1wiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvYmFjay5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0PCEtLeW/q+mXqOmUri0tPlxyXG5cdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LXNuYXBzaG90XCIgQHRhcD1cInNuYXBzaG90XCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9zaHV0dGVyLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblxyXG5cdFx0XHQ8IS0t5Y+N6L2s6ZSuLS0+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm1lbnUtZmxpcFwiIEB0YXA9XCJmbGlwXCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9mbGlwLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxubGV0IF90aGlzID0gbnVsbDtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkb3R5cGU6ICdpZHBob3RvJywgLy/mk43kvZznsbvlnotcclxuXHRcdFx0bWVzc2FnZTogJycsIC8v5o+Q56S6XHJcblx0XHRcdGFzcGVjdDogJzI6MycsIC8v5q+U5L6LXHJcblx0XHRcdGNhbWVyYVdpZHRoOiAnJywgLy/nm7jmnLrnlLvpnaLlrr3luqZcclxuXHRcdFx0Y2FtZXJhSGVpZ2h0OiAnJywgLy/nm7jmnLrnlLvpnaLlrr3luqZcclxuXHRcdFx0d2luZG93V2lkdGg6ICcnLCAvL+Wxj+W5leWPr+eUqOWuveW6plxyXG5cdFx0XHR3aW5kb3dIZWlnaHQ6ICcnLCAvL+Wxj+W5leWPr+eUqOmrmOW6plxyXG5cdFx0XHRjYW1lcmFzdGF0ZTogZmFsc2UsIC8v55u45py65YeG5aSH5aW95LqGXHJcblx0XHRcdGxpdmVQdXNoZXI6IG51bGwsIC8v5rWB6KeG6aKR5a+56LGhXHJcblx0XHRcdHNuYXBzaG90c3JjOiBudWxsIC8v5b+r54WnXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0b25Mb2FkKGUpIHtcclxuXHRcdF90aGlzID0gdGhpcztcclxuXHRcdGlmIChlLmRvdHlwZSAhPSB1bmRlZmluZWQpIHRoaXMuZG90eXBlID0gZS5kb3R5cGU7XHJcblx0XHR0aGlzLmluaXRDYW1lcmEoKTtcclxuXHR9LFxyXG5cdG9uUmVhZHkoKSB7XHJcblx0XHR0aGlzLmxpdmVQdXNoZXIgPSB1bmkuY3JlYXRlTGl2ZVB1c2hlckNvbnRleHQoJ2xpdmVQdXNoZXInLCB0aGlzKTtcclxuXHRcdHRoaXMuc3RhcnRQcmV2aWV3KCk7IC8v5byA5ZCv6aKE6KeI5bm26K6+572u5pGE5YOP5aS0XHJcblx0XHR0aGlzLnBvZW5DYXJtZSgpO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly/ova7or6LmiZPlvIBcclxuXHRcdHBvZW5DYXJtZSgpIHtcclxuXHRcdFx0Ly8jaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0aWYgKHBsdXMub3MubmFtZSA9PSAnQW5kcm9pZCcpIHtcclxuXHRcdFx0XHR0aGlzLnBvZW5DYXJtZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhfdGhpcy5jYW1lcmFzdGF0ZSk7XHJcblx0XHRcdFx0XHRpZiAoIV90aGlzLmNhbWVyYXN0YXRlKSBfdGhpcy5zdGFydFByZXZpZXcoKTtcclxuXHRcdFx0XHR9LCAyNTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyNlbmRpZlxyXG5cdFx0fSxcclxuXHJcblx0XHQvL+WIneWni+WMluebuOaculxyXG5cdFx0aW5pdENhbWVyYSgpIHtcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRfdGhpcy53aW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRcdFx0X3RoaXMuY2FtZXJhV2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0XHRfdGhpcy5jYW1lcmFIZWlnaHQgPSByZXMud2luZG93V2lkdGggKiAxLjU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lvIDlp4vpooTop4hcclxuXHRcdHN0YXJ0UHJldmlldygpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnN0YXJ0UHJldmlldyh7XHJcblx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8v5YGc5q2i6aKE6KeIXHJcblx0XHRzdG9wUHJldmlldygpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnN0b3BQcmV2aWV3KHtcclxuXHRcdFx0XHRzdWNjZXNzOiBhID0+IHtcclxuXHRcdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gZmFsc2U7IC8v5qCH6K6w55u45py65pyq5ZCv5YqoXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/nirbmgIFcclxuXHRcdHN0YXRlY2hhbmdlKGUpIHtcclxuXHRcdFx0Ly/nirbmgIHmlLnlj5hcclxuXHRcdFx0Y29uc29sZS5sb2coZSk7XHJcblx0XHRcdGlmIChlLmRldGFpbC5jb2RlID09IDEwMDcpIHtcclxuXHRcdFx0XHRfdGhpcy5jYW1lcmFzdGF0ZSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZS5kZXRhaWwuY29kZSA9PSAtMTMwMSkge1xyXG5cdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/ov5Tlm55cclxuXHRcdGJhY2soKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/mipPmi41cclxuXHRcdHNuYXBzaG90KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc25hcHNob3Qoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0X3RoaXMuc25hcHNob3RzcmMgPSBlLm1lc3NhZ2UudGVtcEltYWdlUGF0aDtcclxuXHRcdFx0XHRcdF90aGlzLnN0b3BQcmV2aWV3KCk7XHJcblx0XHRcdFx0XHRfdGhpcy5zZXRJbWFnZSgpO1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5Y+N6L2sXHJcblx0XHRmbGlwKCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3dpdGNoQ2FtZXJhKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v6K6+572uXHJcblx0XHRzZXRJbWFnZSgpIHtcclxuXHRcdFx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0XHRcdGxldCBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdOyAvL+S4iuS4gOS4qumhtemdolxyXG5cclxuXHRcdFx0Ly/nm7TmjqXosIPnlKjkuIrkuIDkuKrpobXpnaLnmoRzZXRJbWFnZSgp5pa55rOV77yM5oqK5pWw5o2u5a2Y5Yiw5LiK5LiA5Liq6aG16Z2i5Lit5Y67XHJcblx0XHRcdHByZXZQYWdlLiR2bS5zZXRJbWFnZSh7IHBhdGg6IF90aGlzLnNuYXBzaG90c3JjLCBkb3R5cGU6IHRoaXMuZG90eXBlIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmxpdmUtY2FtZXJhIHtcclxuXHQucHJldmlldyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQub3V0bGluZS1ib3gge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdC5vdXRsaW5lLWltZyB7XHJcblx0XHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDExMjVycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5yZW1pbmQge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogODgwcnB4O1xyXG5cdFx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQucmVtaW5kLXRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjZGRkZGRkO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5tZW51IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxODBycHg7XHJcblx0XHR6LWluZGV4OiA5ODtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC5tZW51LW1hc2sge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk4O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtYmFjayB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMzBycHg7XHJcblx0XHRcdGJvdHRvbTogNTBycHg7XHJcblx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtc25hcHNob3Qge1xyXG5cdFx0XHR3aWR0aDogMTMwcnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHR9XHJcblx0XHQubWVudS1mbGlwIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMzBycHg7XHJcblx0XHRcdGJvdHRvbTogNTBycHg7XHJcblx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!*****************************************************************************************************!*\
  !*** D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 12);
/* harmony import */ var _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_C_Users_css25_Documents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/JD/camera-sample/pages/camera/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".preview": {
    ".live-camera ": {
      "justifyContent": [
        "center",
        0,
        1,
        0
      ],
      "alignItems": [
        "center",
        0,
        1,
        0
      ]
    }
  },
  ".outline-box": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        1
      ],
      "top": [
        0,
        0,
        2,
        1
      ],
      "left": [
        0,
        0,
        2,
        1
      ],
      "bottom": [
        0,
        0,
        2,
        1
      ],
      "zIndex": [
        99,
        0,
        2,
        1
      ],
      "alignItems": [
        "center",
        0,
        2,
        1
      ],
      "justifyContent": [
        "center",
        0,
        2,
        1
      ]
    }
  },
  ".outline-img": {
    ".live-camera .preview .outline-box ": {
      "width": [
        "750rpx",
        0,
        3,
        2
      ],
      "height": [
        "1125rpx",
        0,
        3,
        2
      ]
    }
  },
  ".remind": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        3
      ],
      "top": [
        "880rpx",
        0,
        2,
        3
      ],
      "width": [
        "750rpx",
        0,
        2,
        3
      ],
      "zIndex": [
        100,
        0,
        2,
        3
      ],
      "alignItems": [
        "center",
        0,
        2,
        3
      ],
      "justifyContent": [
        "center",
        0,
        2,
        3
      ]
    }
  },
  ".remind-text": {
    ".live-camera .preview .remind ": {
      "color": [
        "#dddddd",
        0,
        3,
        4
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        4
      ]
    }
  },
  ".menu": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        5
      ],
      "left": [
        0,
        0,
        1,
        5
      ],
      "bottom": [
        0,
        0,
        1,
        5
      ],
      "width": [
        "750rpx",
        0,
        1,
        5
      ],
      "height": [
        "180rpx",
        0,
        1,
        5
      ],
      "zIndex": [
        98,
        0,
        1,
        5
      ],
      "alignItems": [
        "center",
        0,
        1,
        5
      ],
      "justifyContent": [
        "center",
        0,
        1,
        5
      ]
    }
  },
  ".menu-mask": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        6
      ],
      "left": [
        0,
        0,
        2,
        6
      ],
      "bottom": [
        0,
        0,
        2,
        6
      ],
      "width": [
        "750rpx",
        0,
        2,
        6
      ],
      "height": [
        "180rpx",
        0,
        2,
        6
      ],
      "zIndex": [
        98,
        0,
        2,
        6
      ]
    }
  },
  ".menu-back": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        7
      ],
      "left": [
        "30rpx",
        0,
        2,
        7
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        7
      ],
      "width": [
        "80rpx",
        0,
        2,
        7
      ],
      "height": [
        "80rpx",
        0,
        2,
        7
      ],
      "zIndex": [
        99,
        0,
        2,
        7
      ],
      "alignItems": [
        "center",
        0,
        2,
        7
      ],
      "justifyContent": [
        "center",
        0,
        2,
        7
      ]
    }
  },
  ".menu-snapshot": {
    ".live-camera .menu ": {
      "width": [
        "130rpx",
        0,
        2,
        8
      ],
      "height": [
        "130rpx",
        0,
        2,
        8
      ],
      "zIndex": [
        99,
        0,
        2,
        8
      ]
    }
  },
  ".menu-flip": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        9
      ],
      "right": [
        "30rpx",
        0,
        2,
        9
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        9
      ],
      "width": [
        "80rpx",
        0,
        2,
        9
      ],
      "height": [
        "80rpx",
        0,
        2,
        9
      ],
      "zIndex": [
        99,
        0,
        2,
        9
      ],
      "alignItems": [
        "center",
        0,
        2,
        9
      ],
      "justifyContent": [
        "center",
        0,
        2,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);