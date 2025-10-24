(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 23));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 24));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!********************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/pages.json ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!*******************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/pages/index/index.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmU4NGEzY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    faSteps: __webpack_require__(/*! @/components/fa-steps/fa-steps.vue */ 10).default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "app-container"), attrs: { _i: 0 } },
    [
      _c("fa-steps", { attrs: { active: _vm.currentIndex, _i: 1 } }),
      _c(
        "swiper",
        {
          staticClass: _vm._$s(2, "sc", "swiper-container"),
          attrs: { current: _vm._$s(2, "a-current", _vm.currentIndex), _i: 2 },
        },
        [
          _c("swiper-item", [
            _c("button", {
              staticClass: _vm._$s(4, "sc", "custom-btn"),
              attrs: { _i: 4 },
              on: { click: _vm.handleScanMachineBarCode },
            }),
          ]),
          _c("swiper-item", [
            _c("button", {
              staticClass: _vm._$s(6, "sc", "custom-btn"),
              attrs: { _i: 6 },
              on: { click: _vm.handleScanMachineQRCode },
            }),
          ]),
          _c("swiper-item", [
            _vm._$s(8, "i", !_vm.imagesrc)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(8, "sc", "machine-plate"),
                    attrs: { _i: 8 },
                    on: { click: _vm.captureMachinePlate },
                  },
                  [
                    _c("image", {
                      staticClass: _vm._$s(9, "sc", "machine-plate-image"),
                      attrs: { _i: 9 },
                    }),
                    _c("view", {
                      staticClass: _vm._$s(10, "sc", "machine-plate-text"),
                      attrs: { _i: 10 },
                    }),
                  ]
                )
              : _vm._e(),
            _c("image", {
              attrs: { src: _vm._$s(11, "a-src", _vm.imagesrc), _i: 11 },
              on: { click: _vm.captureMachinePlate },
            }),
          ]),
        ]
      ),
      _c("canvas", {
        style: _vm._$s(12, "s", {
          width: _vm.canvasSize.width + "px",
          height: _vm.canvasSize.height + "px",
          position: "absolute",
          left: "-500000px",
          top: "-500000px",
        }),
        attrs: { id: "canvas-clipper", _i: 12 },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!******************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/components/fa-steps/fa-steps.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fa-steps.vue?vue&type=template&id=a3e99cb8&scoped=true& */ 11);\n/* harmony import */ var _fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fa-steps.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a3e99cb8\",\n  null,\n  false,\n  _fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/fa-steps/fa-steps.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDNEQ7QUFDTDs7O0FBR3ZEO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZhLXN0ZXBzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hM2U5OWNiOCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZhLXN0ZXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmEtc3RlcHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTNlOTljYjhcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9mYS1zdGVwcy9mYS1zdGVwcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/components/fa-steps/fa-steps.vue?vue&type=template&id=a3e99cb8&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fa-steps.vue?vue&type=template&id=a3e99cb8&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_template_id_a3e99cb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/components/fa-steps/fa-steps.vue?vue&type=template&id=a3e99cb8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "step-indicator"), attrs: { _i: 1 } },
      [
        _c(
          "view",
          {
            staticClass: _vm._$s(2, "sc", "step"),
            class: _vm._$s(2, "c", { active: _vm.active >= 1 }),
            attrs: { _i: 2 },
          },
          [
            _c("text", {
              staticClass: _vm._$s(3, "sc", "step-num"),
              attrs: { _i: 3 },
            }),
          ]
        ),
        _c("view", {
          staticClass: _vm._$s(4, "sc", "step-line"),
          class: _vm._$s(4, "c", { active: _vm.active >= 1 }),
          attrs: { _i: 4 },
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(5, "sc", "step"),
            class: _vm._$s(5, "c", { active: _vm.active >= 2 }),
            attrs: { _i: 5 },
          },
          [
            _c("text", {
              staticClass: _vm._$s(6, "sc", "step-num"),
              attrs: { _i: 6 },
            }),
          ]
        ),
        _c("view", {
          staticClass: _vm._$s(7, "sc", "step-line"),
          class: _vm._$s(7, "c", { active: _vm.active >= 2 }),
          attrs: { _i: 7 },
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(8, "sc", "step"),
            class: _vm._$s(8, "c", { active: _vm.active >= 3 }),
            attrs: { _i: 8 },
          },
          [
            _c("text", {
              staticClass: _vm._$s(9, "sc", "step-num"),
              attrs: { _i: 9 },
            }),
          ]
        ),
      ]
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*******************************************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/components/fa-steps/fa-steps.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./fa-steps.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_fa_steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd2QixDQUFnQiw4c0JBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZhLXN0ZXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZmEtc3RlcHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/components/fa-steps/fa-steps.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'fa-steps',\n  props: {\n    active: {\n      type: Number,\n      default: 0\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mYS1zdGVwcy9mYS1zdGVwcy52dWUiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwiYWN0aXZlIiwidHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQW1CQTtFQUNBQTtFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInN0ZXAtaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cInN0ZXBcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogYWN0aXZlID49IDEgfVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic3RlcC1udW1cIj4xPC90ZXh0PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJzdGVwLWxpbmVcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogYWN0aXZlID49IDEgfVwiPjwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3RlcFwiIDpjbGFzcz1cInsgYWN0aXZlOiBhY3RpdmUgPj0gMiB9XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzdGVwLW51bVwiPjI8L3RleHQ+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cInN0ZXAtbGluZVwiIDpjbGFzcz1cInsgYWN0aXZlOiBhY3RpdmUgPj0gMiB9XCI+PC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJzdGVwXCIgOmNsYXNzPVwieyBhY3RpdmU6IGFjdGl2ZSA+PSAzIH1cIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInN0ZXAtbnVtXCI+MzwvdGV4dD5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2ZhLXN0ZXBzJyxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uc3RlcC1pbmRpY2F0b3Ige1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luOiA0MHJweCAwO1xuXG5cdC5zdGVwIHtcblx0XHR3aWR0aDogNjBycHg7XG5cdFx0aGVpZ2h0OiA2MHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRib3JkZXI6IDEwcnB4IHNvbGlkICNEQ0RDREM7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0Ji5hY3RpdmUge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRcdGJvcmRlcjogMTBycHggc29saWQgI0NBMUUzMDtcblxuXHRcdFx0LnN0ZXAtbnVtIHtcblx0XHRcdFx0Y29sb3I6ICNDQTFFMzA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnN0ZXAtbGluZSB7XG5cdFx0d2lkdGg6IDE1MHJweDtcblx0XHRib3JkZXI6IDFweCBkYXNoZWQgI0RDRENEQztcblx0XHRtYXJnaW46IDAgMjBycHg7XG5cblx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRib3JkZXI6IDFweCBkYXNoZWQgI0NBMUUzMDtcblx0XHR9XG5cdH1cblxuXHQuc3RlcC1udW0ge1xuXHRcdGNvbG9yOiAjOTk5O1xuXHRcdGZvbnQtc2l6ZTogMjhycHg7XG5cdH1cbn1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
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


/***/ }),
/* 16 */
/*!*******************************************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 19));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 22));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      currentIndex: 0,\n      imagesrc: null,\n      canvasSize: {\n        width: 300,\n        height: 200\n      },\n      formData: {\n        productionControlNo: '',\n        finishDate: ''\n      }\n    };\n  },\n  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {\n    //在里边添加想要的代码\n    uni.showModal({\n      title: '请确认',\n      content: '是否重录',\n      confirmText: '重录',\n      cancelText: '取消',\n      success: function success(res) {\n        if (res.confirm) {\n          uni.reLaunch({\n            url: '/pages/index/index'\n          });\n        }\n      }\n    });\n  },\n  methods: {\n    // 检查权限\n    checkPermission: function checkPermission() {\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var status;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!_permission.default.isIOS) {\n                  _context.next = 6;\n                  break;\n                }\n                _context.next = 3;\n                return _permission.default.requestIOS('camera');\n              case 3:\n                _context.t0 = _context.sent;\n                _context.next = 9;\n                break;\n              case 6:\n                _context.next = 8;\n                return _permission.default.requestAndroid('android.permission.CAMERA');\n              case 8:\n                _context.t0 = _context.sent;\n              case 9:\n                status = _context.t0;\n                if (status === null || status === 1) {\n                  status = 1;\n                } else {\n                  uni.showModal({\n                    content: \"需要相机权限\",\n                    confirmText: \"设置\",\n                    success: function success(res) {\n                      if (res.confirm) {\n                        _permission.default.gotoAppSetting();\n                      }\n                    }\n                  });\n                }\n                return _context.abrupt(\"return\", status);\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    // 扫描机器条码\n    handleScanMachineBarCode: function handleScanMachineBarCode() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var status;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this.checkPermission();\n              case 2:\n                status = _context2.sent;\n                if (!(status !== 1)) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                uni.scanCode({\n                  scanType: ['barCode'],\n                  success: function success(res) {\n                    if (res.result) {\n                      __f__(\"log\", \"条码扫描结果\", res.result, \" at pages/index/index.vue:93\");\n                      _this.formData.productionControlNo = res.result;\n                      uni.showToast({\n                        title: '机器条码扫描成功',\n                        icon: 'none'\n                      });\n                      setTimeout(function () {\n                        _this.currentIndex = 1;\n                      }, 500);\n                    } else {\n                      uni.showToast({\n                        title: '条码扫描失败',\n                        icon: 'none'\n                      });\n                    }\n                  }\n                });\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    // 扫描机器二维码\n    handleScanMachineQRCode: function handleScanMachineQRCode() {\n      var _this2 = this;\n      uni.scanCode({\n        scanType: ['qrCode'],\n        success: function success(res) {\n          var dateUrl = res.result;\n          if (dateUrl) {\n            __f__(\"log\", \"二维码扫描结果\", dateUrl, \" at pages/index/index.vue:119\");\n            uni.request({\n              url: dateUrl,\n              method: 'GET',\n              header: {\n                'Content-Type': 'application/json'\n              },\n              success: function success(res) {\n                __f__(\"log\", \"二维码解析结果\", res, \" at pages/index/index.vue:128\");\n                var datePattern = /\\d{4}年\\d{1,2}月\\d{1,2}日/g;\n                var match = res.data.match(datePattern);\n                if (match) {\n                  _this2.formData.finishDate = match[0];\n                  uni.showToast({\n                    title: '日期识别成功',\n                    icon: 'none'\n                  });\n                  setTimeout(function () {\n                    _this2.currentIndex = 2;\n                  }, 500);\n                } else {\n                  uni.showToast({\n                    title: '未识别到日期信息',\n                    icon: 'none'\n                  });\n                }\n              },\n              fail: function fail(err) {\n                uni.showToast({\n                  title: '二维码解析失败',\n                  icon: 'none'\n                });\n              }\n            });\n          } else {\n            uni.showToast({\n              title: '二维码扫描失败',\n              icon: 'none'\n            });\n          }\n        }\n      });\n    },\n    // 拍摄机器铭牌\n    captureMachinePlate: function captureMachinePlate() {\n      uni.navigateTo({\n        url: '/pages/camera/index'\n      });\n    },\n    // 拍摄回调函数\n    setImage: function setImage(e) {\n      // 证件照裁切\n      this.clipper(e.path);\n    },\n    // 证件照裁切\n    clipper: function clipper(path) {\n      var _this3 = this;\n      uni.getImageInfo({\n        src: path,\n        success: function success(image) {\n          //因为nvue页面使用canvas比较麻烦，所以在此页面上处理图片\n          var ctx = uni.createCanvasContext('canvas-clipper', _this3);\n          ctx.drawImage(path, parseInt(0.07 * image.width), parseInt(0.28 * image.height), parseInt(0.86 * image.width), parseInt(0.40 * image.height), 0, 0, _this3.canvasSize.width, _this3.canvasSize.height);\n          ctx.draw(false, function () {\n            uni.canvasToTempFilePath({\n              destWidth: _this3.canvasSize.width * 2,\n              destHeight: _this3.canvasSize.height * 2,\n              canvasId: 'canvas-clipper',\n              fileType: 'jpg',\n              success: function success(res) {\n                _this3.savePhoto(res.tempFilePath);\n              }\n            }, _this3);\n          });\n        }\n      });\n    },\n    // 图片上传ocr 识别\n    savePhoto: function savePhoto(path) {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var base64;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _this4.imagesrc = path;\n                // 图片转换为base64\n                _context3.next = 3;\n                return _this4.imgToBase64(path);\n              case 3:\n                base64 = _context3.sent;\n                // 请求ocr接口\n                uni.request({\n                  // 本地ocr\n                  url: 'http://192.168.1.3:1224/api/ocr',\n                  // 85 ocr\n                  // url: 'http://192.168.230.85:1224/api/ocr',\n                  method: 'POST',\n                  timeout: 10000,\n                  data: {\n                    base64: base64\n                  },\n                  success: function success(res) {\n                    if (res.data.code != 100) {\n                      uni.showToast({\n                        title: '未识别到文字信息',\n                        icon: 'none'\n                      });\n                      return;\n                    }\n                    // 识别日期信息, 默认当前年\n                    var year = new Date().getFullYear(),\n                      month = \"\",\n                      day = \"\";\n                    res.data.data.forEach(function (item) {\n                      // 检索年\n                      var yearPattern = /\\d{4}年/g;\n                      var yearMatch = item.text.match(yearPattern);\n                      if (yearMatch) {\n                        year = yearMatch[0].split('年')[0];\n                      }\n                      // 检索月\n                      var monthPattern = /\\d{1,2}月/g;\n                      var monthMatch = item.text.match(monthPattern);\n                      if (monthMatch) {\n                        month = monthMatch[0].split('月')[0];\n                      }\n                      // 检索日\n                      var dayPattern = /\\d{1,2}日/g;\n                      var dayMatch = item.text.match(dayPattern);\n                      if (dayMatch) {\n                        day = dayMatch[0].split('日')[0];\n                      }\n                    });\n                    if (!month || !day) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    var ocrDate = year + \"年\" + month + \"月\" + day + \"日\";\n                    if (ocrDate != _this4.formData.finishDate) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E0D\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    // ocr成功，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  },\n                  fail: function fail(err) {\n                    // ocr识别失败，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  }\n                });\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    // 提交工单\n    submitWorkOrder: function submitWorkOrder() {\n      var _this5 = this;\n      uni.request({\n        url: 'http://192.168.230.73:8888/yanmar/app/api/check/updateFinishDate',\n        method: 'POST',\n        data: this.formData,\n        success: function success(res) {\n          if (!res.data.code) {\n            uni.showToast({\n              title: '录入失败',\n              icon: 'none'\n            });\n            return;\n          }\n          uni.showToast({\n            title: '录入成功',\n            icon: 'success'\n          });\n          _this5.currentIndex = 0;\n          _this5.imagesrc = null;\n          _this5.formData = {\n            productionControlNo: '',\n            finishDate: ''\n          };\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '录入失败',\n            icon: 'none'\n          });\n        }\n      });\n    },\n    // 图片转换为base64\n    imgToBase64: function imgToBase64(url) {\n      return new Promise(function (resolve, reject) {\n        plus.io.resolveLocalFileSystemURL(url, function (entry) {\n          // 可通过entry对象操作test.html文件 \n          entry.file(function (file) {\n            var fileReader = new plus.io.FileReader();\n            fileReader.onloadend = function (evt) {\n              resolve(evt.target.result.split(\"base64,\")[1]);\n            };\n            fileReader.readAsDataURL(file);\n          });\n        }, function (e) {\n          alert(\"Resolve file URL failed: \" + e.message);\n        });\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjdXJyZW50SW5kZXgiLCJpbWFnZXNyYyIsImNhbnZhc1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1EYXRhIiwicHJvZHVjdGlvbkNvbnRyb2xObyIsImZpbmlzaERhdGUiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJ1bmkiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJzdWNjZXNzIiwidXJsIiwibWV0aG9kcyIsImNoZWNrUGVybWlzc2lvbiIsInBlcm1pc2lvbiIsInN0YXR1cyIsImhhbmRsZVNjYW5NYWNoaW5lQmFyQ29kZSIsInNjYW5UeXBlIiwiaWNvbiIsInNldFRpbWVvdXQiLCJoYW5kbGVTY2FuTWFjaGluZVFSQ29kZSIsIm1ldGhvZCIsImhlYWRlciIsImZhaWwiLCJjYXB0dXJlTWFjaGluZVBsYXRlIiwic2V0SW1hZ2UiLCJjbGlwcGVyIiwic3JjIiwiY3R4IiwicGF0aCIsInBhcnNlSW50IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImNhbnZhc0lkIiwiZmlsZVR5cGUiLCJzYXZlUGhvdG8iLCJiYXNlNjQiLCJ0aW1lb3V0IiwibW9udGgiLCJkYXkiLCJyZXMiLCJ5ZWFyIiwic3VibWl0V29ya09yZGVyIiwiaW1nVG9CYXNlNjQiLCJwbHVzIiwiZW50cnkiLCJmaWxlUmVhZGVyIiwicmVzb2x2ZSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtVQUNBTDtZQUNBTTtVQUNBO1FBQ0E7TUFD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QTtzQkFDQTtvQkFDQTtrQkFDQTtrQkFDQWE7b0JBQ0E7b0JBQ0FsQjtzQkFDQUM7c0JBQ0FDO3NCQUNBQztzQkFDQUM7c0JBQ0FDO3dCQUNBOzBCQUNBO3dCQUNBO3NCQUNBO29CQUNBO2tCQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQTtJQUNBZ0M7TUFBQTtNQUNBckM7UUFDQU07UUFDQVU7UUFDQTFCO1FBQ0FlO1VBQ0E7WUFDQUw7Y0FDQUM7Y0FDQVk7WUFDQTtZQUNBO1VBQ0E7VUFDQWI7WUFDQUM7WUFDQVk7VUFDQTtVQUVBO1VBQ0E7VUFDQTtZQUNBaEI7WUFDQUM7VUFDQTtRQUNBO1FBQ0FvQjtVQUNBbEI7WUFDQUM7WUFDQVk7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0F5QjtNQUNBO1FBNEJBQztVQUNBO1VBQ0FDO1lBQ0E7WUFDQUM7Y0FDQUM7WUFDQTtZQUNBRDtVQUNBO1FBQ0E7VUFDQUU7UUFDQTtNQUVBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJhcHAtY29udGFpbmVyXCI+XHJcblx0XHQ8ZmEtc3RlcHMgOmFjdGl2ZT1cImN1cnJlbnRJbmRleFwiPjwvZmEtc3RlcHM+XHJcblx0XHQ8c3dpcGVyIDphdXRvcGxheT1cImZhbHNlXCIgOmRpc2FibGUtdG91Y2g9XCJ0cnVlXCIgOmN1cnJlbnQ9XCJjdXJyZW50SW5kZXhcIiBjbGFzcz1cInN3aXBlci1jb250YWluZXJcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cImN1c3RvbS1idG5cIiBAY2xpY2s9XCJoYW5kbGVTY2FuTWFjaGluZUJhckNvZGVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHJweDtcIj7miavmj4/mnLrlmajmnaHnoIE8L2J1dHRvbj5cclxuXHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0PHN3aXBlci1pdGVtPlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzcz1cImN1c3RvbS1idG5cIiBAY2xpY2s9XCJoYW5kbGVTY2FuTWFjaGluZVFSQ29kZVwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcnB4O1wiPuaJq+aPj+acuuWZqOS6jOe7tOeggTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0XHQ8c3dpcGVyLWl0ZW0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtYWNoaW5lLXBsYXRlXCIgQGNsaWNrPVwiY2FwdHVyZU1hY2hpbmVQbGF0ZVwiIHYtaWY9XCIhaW1hZ2VzcmNcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlL3Bob3RvLnBuZ1wiIGNsYXNzPVwibWFjaGluZS1wbGF0ZS1pbWFnZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1hY2hpbmUtcGxhdGUtdGV4dFwiPuaLjeaRhOacuuWZqOmTreeJjDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpbWFnZXNyY1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgbW9kZT1cIndpZHRoRml4XCIgQGNsaWNrPVwiY2FwdHVyZU1hY2hpbmVQbGF0ZVwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXMtY2xpcHBlclwiIGNhbnZhcy1pZD1cImNhbnZhcy1jbGlwcGVyXCIgdHlwZT1cIjJkXCJcclxuXHRcdFx0OnN0eWxlPVwieyB3aWR0aDogY2FudmFzU2l6ZS53aWR0aCArICdweCcsIGhlaWdodDogY2FudmFzU2l6ZS5oZWlnaHQgKyAncHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy01MDAwMDBweCcsIHRvcDogJy01MDAwMDBweCcgfVwiIC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgcGVybWlzaW9uIGZyb20gXCJAL2NvbW1vbi9wZXJtaXNzaW9uLmpzXCJcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGN1cnJlbnRJbmRleDogMCxcclxuXHRcdFx0XHRpbWFnZXNyYzogbnVsbCxcclxuXHRcdFx0XHRjYW52YXNTaXplOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZvcm1EYXRhOiB7XHJcblx0XHRcdFx0XHRwcm9kdWN0aW9uQ29udHJvbE5vOiAnJyxcclxuXHRcdFx0XHRcdGZpbmlzaERhdGU6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChlKSB7XHJcblx0XHRcdC8v5Zyo6YeM6L655re75Yqg5oOz6KaB55qE5Luj56CBXHJcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcclxuXHRcdFx0XHRjb250ZW50OiAn5piv5ZCm6YeN5b2VJyxcclxuXHRcdFx0XHRjb25maXJtVGV4dDogJ+mHjeW9lScsXHJcblx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOajgOafpeadg+mZkFxyXG5cdFx0XHRhc3luYyBjaGVja1Blcm1pc3Npb24oKSB7XHJcblx0XHRcdFx0bGV0IHN0YXR1cyA9IHBlcm1pc2lvbi5pc0lPUyA/IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0SU9TKCdjYW1lcmEnKSA6XHJcblx0XHRcdFx0XHRhd2FpdCBwZXJtaXNpb24ucmVxdWVzdEFuZHJvaWQoJ2FuZHJvaWQucGVybWlzc2lvbi5DQU1FUkEnKTtcclxuXHJcblx0XHRcdFx0aWYgKHN0YXR1cyA9PT0gbnVsbCB8fCBzdGF0dXMgPT09IDEpIHtcclxuXHRcdFx0XHRcdHN0YXR1cyA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIumcgOimgeebuOacuuadg+mZkFwiLFxyXG5cdFx0XHRcdFx0XHRjb25maXJtVGV4dDogXCLorr7nva5cIixcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzdGF0dXM7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJq+aPj+acuuWZqOadoeeggVxyXG5cdFx0XHRhc3luYyBoYW5kbGVTY2FuTWFjaGluZUJhckNvZGUoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0bGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuY2hlY2tQZXJtaXNzaW9uKCk7XHJcblx0XHRcdFx0aWYgKHN0YXR1cyAhPT0gMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdFx0dW5pLnNjYW5Db2RlKHtcclxuXHRcdFx0XHRcdHNjYW5UeXBlOiBbJ2JhckNvZGUnXSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5yZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuadoeeggeaJq+aPj+e7k+aenFwiLCByZXMucmVzdWx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mb3JtRGF0YS5wcm9kdWN0aW9uQ29udHJvbE5vID0gcmVzLnJlc3VsdDtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5py65Zmo5p2h56CB5omr5o+P5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XHJcblx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5p2h56CB5omr5o+P5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiavmj4/mnLrlmajkuoznu7TnoIFcclxuXHRcdFx0aGFuZGxlU2Nhbk1hY2hpbmVRUkNvZGUoKSB7XHJcblx0XHRcdFx0dW5pLnNjYW5Db2RlKHtcclxuXHRcdFx0XHRcdHNjYW5UeXBlOiBbJ3FyQ29kZSddLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgZGF0ZVVybCA9IHJlcy5yZXN1bHQ7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLkuoznu7TnoIHmiavmj4/nu5PmnpxcIiwgZGF0ZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogZGF0ZVVybCxcclxuXHRcdFx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLkuoznu7TnoIHop6PmnpDnu5PmnpxcIiwgcmVzKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGVQYXR0ZXJuID0gL1xcZHs0feW5tFxcZHsxLDJ95pyIXFxkezEsMn3ml6UvZztcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSByZXMuZGF0YS5tYXRjaChkYXRlUGF0dGVybik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChtYXRjaCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9ybURhdGEuZmluaXNoRGF0ZSA9IG1hdGNoWzBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfml6XmnJ/or4bliKvmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmnKror4bliKvliLDml6XmnJ/kv6Hmga8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuoznu7TnoIHop6PmnpDlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S6jOe7tOeggeaJq+aPj+Wksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ouN5pGE5py65Zmo6ZOt54mMXHJcblx0XHRcdGNhcHR1cmVNYWNoaW5lUGxhdGUoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NhbWVyYS9pbmRleCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmi43mkYTlm57osIPlh73mlbBcclxuXHRcdFx0c2V0SW1hZ2UoZSkge1xyXG5cdFx0XHRcdC8vIOivgeS7tueFp+ijgeWIh1xyXG5cdFx0XHRcdHRoaXMuY2xpcHBlcihlLnBhdGgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDor4Hku7bnhafoo4HliIdcclxuXHRcdFx0Y2xpcHBlcihwYXRoKSB7XHJcblx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRzcmM6IHBhdGgsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAoaW1hZ2UpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly/lm6DkuLpudnVl6aG16Z2i5L2/55SoY2FudmFz5q+U6L6D6bq754Om77yM5omA5Lul5Zyo5q2k6aG16Z2i5LiK5aSE55CG5Zu+54mHXHJcblx0XHRcdFx0XHRcdGxldCBjdHggPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzLWNsaXBwZXInLCB0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRcdFx0cGF0aCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZUludCgwLjA3ICogaW1hZ2Uud2lkdGgpLFxyXG5cdFx0XHRcdFx0XHRcdHBhcnNlSW50KDAuMjggKiBpbWFnZS5oZWlnaHQpLFxyXG5cdFx0XHRcdFx0XHRcdHBhcnNlSW50KDAuODYgKiBpbWFnZS53aWR0aCksXHJcblx0XHRcdFx0XHRcdFx0cGFyc2VJbnQoMC40MCAqIGltYWdlLmhlaWdodCksXHJcblx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FudmFzU2l6ZS53aWR0aCxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNhbnZhc1NpemUuaGVpZ2h0XHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlc3RXaWR0aDogdGhpcy5jYW52YXNTaXplLndpZHRoICogMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzdEhlaWdodDogdGhpcy5jYW52YXNTaXplLmhlaWdodCAqIDIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhbnZhc0lkOiAnY2FudmFzLWNsaXBwZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlVHlwZTogJ2pwZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVQaG90byhyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXNcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Zu+54mH5LiK5Lygb2NyIOivhuWIq1xyXG5cdFx0XHRhc3luYyBzYXZlUGhvdG8ocGF0aCkge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2VzcmMgPSBwYXRoO1xyXG5cdFx0XHRcdC8vIOWbvueJh+i9rOaNouS4umJhc2U2NFxyXG5cdFx0XHRcdGxldCBiYXNlNjQgPSBhd2FpdCB0aGlzLmltZ1RvQmFzZTY0KHBhdGgpXHJcblx0XHRcdFx0Ly8g6K+35rGCb2Ny5o6l5Y+jXHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0Ly8g5pys5Zywb2NyXHJcblx0XHRcdFx0XHR1cmw6ICdodHRwOi8vMTkyLjE2OC4xLjM6MTIyNC9hcGkvb2NyJyxcclxuXHRcdFx0XHRcdC8vIDg1IG9jclxyXG5cdFx0XHRcdFx0Ly8gdXJsOiAnaHR0cDovLzE5Mi4xNjguMjMwLjg1OjEyMjQvYXBpL29jcicsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdHRpbWVvdXQ6IDEwMDAwLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRiYXNlNjQ6IGJhc2U2NFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgIT0gMTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+acquivhuWIq+WIsOaWh+Wtl+S/oeaBrycsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIOivhuWIq+aXpeacn+S/oeaBrywg6buY6K6k5b2T5YmN5bm0XHJcblx0XHRcdFx0XHRcdGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0XHRcdFx0XHRcdG1vbnRoID0gXCJcIixcclxuXHRcdFx0XHRcdFx0XHRkYXkgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRyZXMuZGF0YS5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5qOA57Si5bm0XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgeWVhclBhdHRlcm4gPSAvXFxkezR95bm0L2c7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgeWVhck1hdGNoID0gaXRlbS50ZXh0Lm1hdGNoKHllYXJQYXR0ZXJuKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoeWVhck1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR5ZWFyID0geWVhck1hdGNoWzBdLnNwbGl0KCflubQnKVswXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5qOA57Si5pyIXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9udGhQYXR0ZXJuID0gL1xcZHsxLDJ95pyIL2c7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9udGhNYXRjaCA9IGl0ZW0udGV4dC5tYXRjaChtb250aFBhdHRlcm4pO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtb250aE1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtb250aCA9IG1vbnRoTWF0Y2hbMF0uc3BsaXQoJ+aciCcpWzBdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvLyDmo4DntKLml6VcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXlQYXR0ZXJuID0gL1xcZHsxLDJ95pelL2c7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGF5TWF0Y2ggPSBpdGVtLnRleHQubWF0Y2goZGF5UGF0dGVybik7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGRheU1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXkgPSBkYXlNYXRjaFswXS5zcGxpdCgn5pelJylbMF07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRpZiAoIW1vbnRoIHx8ICFkYXkpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBvY3LlpLHotKXvvIzlvLnnqpfnoa7orqRcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGBvY3Lor4bliKvlpLHotKXvvIzmmK/lkKbku6Xkuoznu7TnoIHml6XmnJ8ke3RoaXMuZm9ybURhdGEuZmluaXNoRGF0ZX3lvZXlhaXlrozlt6XljZVgLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICflvZXlhaUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBvY3JEYXRlID0geWVhciArIFwi5bm0XCIgKyBtb250aCArIFwi5pyIXCIgKyBkYXkgKyBcIuaXpVwiXHJcblx0XHRcdFx0XHRcdGlmIChvY3JEYXRlICE9IHRoaXMuZm9ybURhdGEuZmluaXNoRGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIG9jcuWksei0pe+8jOW8ueeql+ehruiupFxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7fnoa7orqQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogYG9jcuivhuWIq+aXpeacn+S4juWujOW3peWNleaXpeacn+S4jeS4gOiHtO+8jOaYr+WQpuS7peS6jOe7tOeggeaXpeacnyR7dGhpcy5mb3JtRGF0YS5maW5pc2hEYXRlfeW9leWFpeWujOW3peWNlWAsXHJcblx0XHRcdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+W9leWFpScsXHJcblx0XHRcdFx0XHRcdFx0XHRjYW5jZWxUZXh0OiAn5Y+W5raIJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRXb3JrT3JkZXIoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gb2Ny5oiQ5Yqf77yM5by556qX56Gu6K6kXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBgb2Ny6K+G5Yir5pel5pyf5LiO5a6M5bel5Y2V5pel5pyf5LiA6Ie077yM5piv5ZCm5Lul5pel5pyfJHt0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGV95b2V5YWl5a6M5bel5Y2VYCxcclxuXHRcdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+W9leWFpScsXHJcblx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gb2Ny6K+G5Yir5aSx6LSl77yM5by556qX56Gu6K6kXHJcblx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBgb2Ny6K+G5Yir5aSx6LSl77yM5piv5ZCm5Lul5LqM57u056CB5pel5pyfJHt0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGV95b2V5YWl5a6M5bel5Y2VYCxcclxuXHRcdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+W9leWFpScsXHJcblx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaPkOS6pOW3peWNlVxyXG5cdFx0XHRzdWJtaXRXb3JrT3JkZXIoKSB7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAnaHR0cDovLzE5Mi4xNjguMjMwLjczOjg4ODgveWFubWFyL2FwcC9hcGkvY2hlY2svdXBkYXRlRmluaXNoRGF0ZScsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHRoaXMuZm9ybURhdGEsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghcmVzLmRhdGEuY29kZSkge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvZXlhaXlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W9leWFpeaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnXHJcblx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VzcmMgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvcm1EYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3Rpb25Db250cm9sTm86ICcnLFxyXG5cdFx0XHRcdFx0XHRcdGZpbmlzaERhdGU6ICcnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5b2V5YWl5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlm77niYfovazmjaLkuLpiYXNlNjRcclxuXHRcdFx0aW1nVG9CYXNlNjQodXJsKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdHVuaS5nZXRGaWxlU3lzdGVtTWFuYWdlcigpLnJlYWRGaWxlKHtcclxuXHRcdFx0XHRcdFx0ZmlsZVBhdGg6IHVybCwgLy/pgInmi6nlm77niYfov5Tlm57nmoTnm7jlr7not6/lvoRcclxuXHRcdFx0XHRcdFx0ZW5jb2Rpbmc6ICdiYXNlNjQnLCAvL+e8lueggeagvOW8j1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4geyAvL+aIkOWKn+eahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6IChlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlm77niYfovazmjaLlpLHotKVcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRcdFx0cmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXNzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYmFzZTY0ID0gdW5pLmFycmF5QnVmZmVyVG9CYXNlNjQocmVzcy5kYXRhKTsgLy/miophcnJheWJ1ZmZlcui9rOaIkGJhc2U2NFxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoYmFzZTY0KVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5Zu+54mH6L2s5o2i5aSx6LSlXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRcdHBsdXMuaW8ucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh1cmwsIChlbnRyeSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyDlj6/pgJrov4dlbnRyeeWvueixoeaTjeS9nHRlc3QuaHRtbOaWh+S7tiBcclxuXHRcdFx0XHRcdFx0ZW50cnkuZmlsZSgoZmlsZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBmaWxlUmVhZGVyID0gbmV3IHBsdXMuaW8uRmlsZVJlYWRlcigpO1xyXG5cdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGV2dCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShldnQudGFyZ2V0LnJlc3VsdC5zcGxpdChcImJhc2U2NCxcIilbMV0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LCAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhbGVydChcIlJlc29sdmUgZmlsZSBVUkwgZmFpbGVkOiBcIiArIGUubWVzc2FnZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmFwcC1jb250YWluZXIge1xyXG5cdFx0cGFkZGluZzogMCAzMnJweDtcclxuXHR9XHJcblxyXG5cdC5zd2lwZXItY29udGFpbmVyIHtcclxuXHRcdGhlaWdodDogNzB2aDtcclxuXHR9XHJcblxyXG5cdC5tYWNoaW5lLXBsYXRlIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNjB2dztcclxuXHR9XHJcblxyXG5cdC5tYWNoaW5lLXBsYXRlLWltYWdlIHtcclxuXHRcdHdpZHRoOiA2MHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0fVxyXG5cclxuXHQubWFjaGluZS1wbGF0ZS10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogIzk5OTk5OTtcclxuXHR9XHJcblxyXG5cdC5jdXN0b20tYnRuIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNDQTFFMzAgIWltcG9ydGFudDtcclxuXHRcdC8qIOe7v+iJsuiDjOaZryAqL1xyXG5cdFx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHRcdC8qIOm7keiJsuaWh+WtlyAqL1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdC8qIOWchuinkiAqL1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0Lyog5Y676Zmk6L655qGGICovXHJcblx0XHRtYXgtd2lkdGg6IDYwMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 19 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 20)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 20 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!******************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/common/permission.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/// null = 未请求，1 = 已允许，0 = 拒绝|受限, 2 = 系统未开启\n\nvar isIOS;\nfunction album() {\n  var result = 0;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\nfunction camera() {\n  var result = 0;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\nfunction location() {\n  var result = 0;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var enable = cllocationManger.locationServicesEnabled();\n  var status = cllocationManger.authorizationStatus();\n  if (!enable) {\n    result = 2;\n  } else if (status === 0) {\n    result = null;\n  } else if (status === 3 || status === 4) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\nfunction push() {\n  var result = 0;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    if (enabledTypes == 0) {\n      result = 0;\n      __f__(\"log\", \"推送权限没有开启\", \" at common/permission.js:63\");\n    } else {\n      result = 1;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:66\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      result = 3;\n      __f__(\"log\", \"推送权限没有开启!\", \" at common/permission.js:73\");\n    } else {\n      result = 4;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:76\");\n    }\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\nfunction contact() {\n  var result = 0;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus === 0) {\n    result = null;\n  } else if (cnAuthStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\nfunction record() {\n  var result = null;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var status = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + status, \" at common/permission.js:104\");\n  if (status === 1970168948) {\n    result = null;\n  } else if (status === 1735552628) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\nfunction calendar() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"日历权限已经开启\", \" at common/permission.js:122\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at common/permission.js:124\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\nfunction memo() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at common/permission.js:136\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at common/permission.js:138\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\nfunction requestIOS(permissionID) {\n  return new Promise(function (resolve, reject) {\n    switch (permissionID) {\n      case \"push\":\n        resolve(push());\n        break;\n      case \"location\":\n        resolve(location());\n        break;\n      case \"record\":\n        resolve(record());\n        break;\n      case \"camera\":\n        resolve(camera());\n        break;\n      case \"album\":\n        resolve(album());\n        break;\n      case \"contact\":\n        resolve(contact());\n        break;\n      case \"calendar\":\n        resolve(calendar());\n        break;\n      case \"memo\":\n        resolve(memo());\n        break;\n      default:\n        resolve(0);\n        break;\n    }\n  });\n}\nfunction requestAndroid(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions([permissionID], function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at common/permission.js:187\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at common/permission.js:192\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at common/permission.js:197\");\n        result = -1;\n      }\n      resolve(result);\n    }, function (error) {\n      __f__(\"log\", 'result error: ' + error.message, \" at common/permission.js:203\");\n      resolve({\n        code: error.code,\n        message: error.message\n      });\n    });\n  });\n}\nfunction gotoAppPermissionSetting() {\n  if (permission.isIOS) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\nvar permission = {\n  get isIOS() {\n    return typeof isIOS === 'boolean' ? isIOS : isIOS = uni.getSystemInfoSync().platform === 'ios';\n  },\n  requestIOS: requestIOS,\n  requestAndroid: requestAndroid,\n  gotoAppSetting: gotoAppPermissionSetting\n};\nvar _default = permission;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3Blcm1pc3Npb24uanMiXSwibmFtZXMiOlsiaXNJT1MiLCJhbGJ1bSIsInJlc3VsdCIsIlBIUGhvdG9MaWJyYXJ5IiwicGx1cyIsImlvcyIsImltcG9ydCIsImF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzIiwiZGVsZXRlT2JqZWN0IiwiY2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSIsImxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsImVuYWJsZSIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwic3RhdHVzIiwicHVzaCIsIlVJQXBwbGljYXRpb24iLCJhcHAiLCJzaGFyZWRBcHBsaWNhdGlvbiIsImVuYWJsZWRUeXBlcyIsImN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJzZXR0aW5ncyIsInBsdXNHZXRBdHRyaWJ1dGUiLCJlbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMiLCJjb250YWN0IiwiQ05Db250YWN0U3RvcmUiLCJjbkF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSIsInJlY29yZCIsImF2YXVkaW9zZXNzaW9uIiwiYXZhdWRpbyIsInNoYXJlZEluc3RhbmNlIiwicmVjb3JkUGVybWlzc2lvbiIsImNhbGVuZGFyIiwiRUtFdmVudFN0b3JlIiwiZWtBdXRoU3RhdHVzIiwibWVtbyIsInJlcXVlc3RJT1MiLCJwZXJtaXNzaW9uSUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RBbmRyb2lkIiwiYW5kcm9pZCIsInJlcXVlc3RQZXJtaXNzaW9ucyIsInJlc3VsdE9iaiIsImkiLCJncmFudGVkIiwibGVuZ3RoIiwiZ3JhbnRlZFBlcm1pc3Npb24iLCJkZW5pZWRQcmVzZW50IiwiZGVuaWVkUHJlc2VudFBlcm1pc3Npb24iLCJkZW5pZWRBbHdheXMiLCJkZW5pZWRBbHdheXNQZXJtaXNzaW9uIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZyIsInBlcm1pc3Npb24iLCJhcHBsaWNhdGlvbjIiLCJOU1VSTDIiLCJzZXR0aW5nMiIsIlVSTFdpdGhTdHJpbmciLCJvcGVuVVJMIiwiSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJTZXR0aW5ncyIsIlVyaSIsIm1haW5BY3Rpdml0eSIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJpbnRlbnQiLCJzZXRBY3Rpb24iLCJBQ1RJT05fQVBQTElDQVRJT05fREVUQUlMU19TRVRUSU5HUyIsInVyaSIsImZyb21QYXJ0cyIsImdldFBhY2thZ2VOYW1lIiwic2V0RGF0YSIsInN0YXJ0QWN0aXZpdHkiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwiZ290b0FwcFNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQUlBLEtBQUs7QUFFVCxTQUFTQyxLQUFLLEdBQUc7RUFDYixJQUFJQyxNQUFNLEdBQUcsQ0FBQztFQUNkLElBQUlDLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUN0RCxJQUFJQyxVQUFVLEdBQUdKLGNBQWMsQ0FBQ0ssbUJBQW1CLEVBQUU7RUFDckQsSUFBSUQsVUFBVSxLQUFLLENBQUMsRUFBRTtJQUNsQkwsTUFBTSxHQUFHLElBQUk7RUFDakIsQ0FBQyxNQUFNLElBQUlLLFVBQVUsSUFBSSxDQUFDLEVBQUU7SUFDeEJMLE1BQU0sR0FBRyxDQUFDO0VBQ2QsQ0FBQyxNQUFNO0lBQ0hBLE1BQU0sR0FBRyxDQUFDO0VBQ2Q7RUFDQUUsSUFBSSxDQUFDQyxHQUFHLENBQUNJLFlBQVksQ0FBQ04sY0FBYyxDQUFDO0VBQ3JDLE9BQU9ELE1BQU07QUFDakI7QUFFQSxTQUFTUSxNQUFNLEdBQUc7RUFDZCxJQUFJUixNQUFNLEdBQUcsQ0FBQztFQUNkLElBQUlTLGVBQWUsR0FBR1AsSUFBSSxD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QztFQUN2QyxDQUFDLE1BQU07SUFDSCxJQUFJSyxNQUFNLEdBQUcvRCxJQUFJLENBQUMwQyxPQUFPLENBQUNzQixXQUFXLENBQUMsd0JBQXdCLENBQUM7SUFDL0QsSUFBSUMsUUFBUSxHQUFHakUsSUFBSSxDQUFDMEMsT0FBTyxDQUFDc0IsV0FBVyxDQUFDLDJCQUEyQixDQUFDO0lBQ3BFLElBQUlFLEdBQUcsR0FBR2xFLElBQUksQ0FBQzBDLE9BQU8sQ0FBQ3NCLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUNyRCxJQUFJRyxZQUFZLEdBQUduRSxJQUFJLENBQUMwQyxPQUFPLENBQUMwQixtQkFBbUIsRUFBRTtJQUNyRCxJQUFJQyxNQUFNLEdBQUcsSUFBSU4sTUFBTSxFQUFFO0lBQ3pCTSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDTSxtQ0FBbUMsQ0FBQztJQUM5RCxJQUFJQyxHQUFHLEdBQUdOLEdBQUcsQ0FBQ08sU0FBUyxDQUFDLFNBQVMsRUFBRU4sWUFBWSxDQUFDTyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDdkVMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDSCxHQUFHLENBQUM7SUFDbkJMLFlBQVksQ0FBQ1MsYUFBYSxDQUFDUCxNQUFNLENBQUM7RUFDdEM7QUFDSjtBQUVBLElBQU1aLFVBQVUsR0FBRztFQUNmLElBQUk3RCxLQUFLLEdBQUU7SUFDUCxPQUFPLE9BQU9BLEtBQUssS0FBSyxTQUFTLEdBQUdBLEtBQUssR0FBSUEsS0FBSyxHQUFHaUYsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDQyxRQUFRLEtBQUssS0FBTTtFQUNwRyxDQUFDO0VBQ0QzQyxVQUFVLEVBQUVBLFVBQVU7RUFDdEJLLGNBQWMsRUFBRUEsY0FBYztFQUM5QnVDLGNBQWMsRUFBRXhCO0FBQ3BCLENBQUM7QUFBQSxlQUVjQyxVQUFVO0FBQUEsMkIiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gbnVsbCA9IOacquivt+axgu+8jDEgPSDlt7LlhYHorrjvvIwwID0g5ouS57udfOWPl+mZkCwgMiA9IOezu+e7n+acquW8gOWQr1xuXG52YXIgaXNJT1NcblxuZnVuY3Rpb24gYWxidW0oKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XG4gICAgdmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XG4gICAgaWYgKGF1dGhTdGF0dXMgPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGF1dGhTdGF0dXMgPT0gMykge1xuICAgICAgICByZXN1bHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChQSFBob3RvTGlicmFyeSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FtZXJhKCkge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIHZhciBBVkNhcHR1cmVEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnQoXCJBVkNhcHR1cmVEZXZpY2VcIik7XG4gICAgdmFyIGF1dGhTdGF0dXMgPSBBVkNhcHR1cmVEZXZpY2UuYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSgndmlkZScpO1xuICAgIGlmIChhdXRoU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChhdXRoU3RhdHVzID09IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoQVZDYXB0dXJlRGV2aWNlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgY2xsb2NhdGlvbk1hbmdlciA9IHBsdXMuaW9zLmltcG9ydChcIkNMTG9jYXRpb25NYW5hZ2VyXCIpO1xuICAgIHZhciBlbmFibGUgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XG4gICAgdmFyIHN0YXR1cyA9IGNsbG9jYXRpb25NYW5nZXIuYXV0aG9yaXphdGlvblN0YXR1cygpO1xuICAgIGlmICghZW5hYmxlKSB7XG4gICAgICAgIHJlc3VsdCA9IDI7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMyB8fCBzdGF0dXMgPT09IDQpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcHVzaCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgVUlBcHBsaWNhdGlvbiA9IHBsdXMuaW9zLmltcG9ydChcIlVJQXBwbGljYXRpb25cIik7XG4gICAgdmFyIGFwcCA9IFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24oKTtcbiAgICB2YXIgZW5hYmxlZFR5cGVzID0gMDtcbiAgICBpZiAoYXBwLmN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gYXBwLmN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKTtcbiAgICAgICAgZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xuICAgICAgICBpZiAoZW5hYmxlZFR5cGVzID09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW3sue7j+W8gOWQr+aOqOmAgeWKn+iDvSFcIilcbiAgICAgICAgfVxuICAgICAgICBwbHVzLmlvcy5kZWxldGVPYmplY3Qoc2V0dGluZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZWRUeXBlcyA9IGFwcC5lbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMoKTtcbiAgICAgICAgaWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjqjpgIHmnYPpmZDmsqHmnInlvIDlkK8hXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gNDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHApO1xuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChVSUFwcGxpY2F0aW9uKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIHZhciBDTkNvbnRhY3RTdG9yZSA9IHBsdXMuaW9zLmltcG9ydChcIkNOQ29udGFjdFN0b3JlXCIpO1xuICAgIHZhciBjbkF1dGhTdGF0dXMgPSBDTkNvbnRhY3RTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcbiAgICBpZiAoY25BdXRoU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xuICAgICAgICByZXN1bHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChDTkNvbnRhY3RTdG9yZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVjb3JkKCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBhdmF1ZGlvc2Vzc2lvbiA9IHBsdXMuaW9zLmltcG9ydChcIkFWQXVkaW9TZXNzaW9uXCIpO1xuICAgIHZhciBhdmF1ZGlvID0gYXZhdWRpb3Nlc3Npb24uc2hhcmVkSW5zdGFuY2UoKTtcbiAgICB2YXIgc3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XG4gICAgY29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgc3RhdHVzKTtcbiAgICBpZiAoc3RhdHVzID09PSAxOTcwMTY4OTQ4KSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDE3MzU1NTI2MjgpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXZhdWRpb3Nlc3Npb24pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbGVuZGFyKCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XG4gICAgdmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcbiAgICBpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCLml6XljobmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1lbW8oKSB7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgdmFyIEVLRXZlbnRTdG9yZSA9IHBsdXMuaW9zLmltcG9ydChcIkVLRXZlbnRTdG9yZVwiKTtcbiAgICB2YXIgZWtBdXRoU3RhdHVzID0gRUtFdmVudFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDEpO1xuICAgIGlmIChla0F1dGhTdGF0dXMgPT0gMykge1xuICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWkh+W/mOW9leadg+mZkOW3sue7j+W8gOWQr1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWkh+W/mOW9leadg+mZkOayoeacieW8gOWQr1wiKTtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEVLRXZlbnRTdG9yZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiByZXF1ZXN0SU9TKHBlcm1pc3Npb25JRCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGVybWlzc2lvbklEKSB7XG4gICAgICAgICAgICBjYXNlIFwicHVzaFwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUocHVzaCgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhdGlvblwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVjb3JkXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmQoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2FtZXJhXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYW1lcmEoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWxidW1cIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFsYnVtKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNvbnRhY3QoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2FsZW5kYXJcIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhbGVuZGFyKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbW9cIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1lbW8oKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc29sdmUoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuZHJvaWQocGVybWlzc2lvbklEKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcbiAgICAgICAgICAgIFtwZXJtaXNzaW9uSURdLFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVzdWx0T2JqKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZ3JhbnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+W3suiOt+WPlueahOadg+mZkO+8micgKyBncmFudGVkUGVybWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkUHJlc2VudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aLkue7neacrOasoeeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRQcmVzZW50UGVybWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkQWx3YXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+awuOS5heaLkue7neeUs+ivt+eahOadg+mZkO+8micgKyBkZW5pZWRBbHdheXNQZXJtaXNzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdCBlcnJvcjogJyArIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nKCkge1xuICAgIGlmIChwZXJtaXNzaW9uLmlzSU9TKSB7XG4gICAgICAgIHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcbiAgICAgICAgdmFyIGFwcGxpY2F0aW9uMiA9IFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24oKTtcbiAgICAgICAgdmFyIE5TVVJMMiA9IHBsdXMuaW9zLmltcG9ydChcIk5TVVJMXCIpO1xuICAgICAgICB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcImFwcC1zZXR0aW5nczpcIik7XG4gICAgICAgIGFwcGxpY2F0aW9uMi5vcGVuVVJMKHNldHRpbmcyKTtcbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmcyKTtcbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KE5TVVJMMik7XG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmNvbnRlbnQuSW50ZW50XCIpO1xuICAgICAgICB2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xuICAgICAgICB2YXIgVXJpID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZXQuVXJpXCIpO1xuICAgICAgICB2YXIgbWFpbkFjdGl2aXR5ID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcbiAgICAgICAgdmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcbiAgICAgICAgaW50ZW50LnNldEFjdGlvbihTZXR0aW5ncy5BQ1RJT05fQVBQTElDQVRJT05fREVUQUlMU19TRVRUSU5HUyk7XG4gICAgICAgIHZhciB1cmkgPSBVcmkuZnJvbVBhcnRzKFwicGFja2FnZVwiLCBtYWluQWN0aXZpdHkuZ2V0UGFja2FnZU5hbWUoKSwgbnVsbCk7XG4gICAgICAgIGludGVudC5zZXREYXRhKHVyaSk7XG4gICAgICAgIG1haW5BY3Rpdml0eS5zdGFydEFjdGl2aXR5KGludGVudCk7XG4gICAgfVxufVxuXG5jb25zdCBwZXJtaXNzaW9uID0ge1xuICAgIGdldCBpc0lPUygpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIGlzSU9TID09PSAnYm9vbGVhbicgPyBpc0lPUyA6IChpc0lPUyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09PSAnaW9zJylcbiAgICB9LFxuICAgIHJlcXVlc3RJT1M6IHJlcXVlc3RJT1MsXG4gICAgcmVxdWVzdEFuZHJvaWQ6IHJlcXVlc3RBbmRyb2lkLFxuICAgIGdvdG9BcHBTZXR0aW5nOiBnb3RvQXBwUGVybWlzc2lvblNldHRpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGVybWlzc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 24 */
/*!*****************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/App.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ })
],[[0,"app-config"]]]);