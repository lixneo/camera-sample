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
              attrs: { _i: 4 },
              on: { click: _vm.handleScanMachineBarCode },
            }),
          ]),
          _c("swiper-item", [
            _c("button", {
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 19));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 22));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      currentIndex: 0,\n      imagesrc: null,\n      canvasSize: {\n        width: 300,\n        height: 200\n      },\n      formData: {\n        productionControlNo: '',\n        finishDate: ''\n      }\n    };\n  },\n  methods: {\n    // 检查权限\n    checkPermission: function checkPermission() {\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var status;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!_permission.default.isIOS) {\n                  _context.next = 6;\n                  break;\n                }\n                _context.next = 3;\n                return _permission.default.requestIOS('camera');\n              case 3:\n                _context.t0 = _context.sent;\n                _context.next = 9;\n                break;\n              case 6:\n                _context.next = 8;\n                return _permission.default.requestAndroid('android.permission.CAMERA');\n              case 8:\n                _context.t0 = _context.sent;\n              case 9:\n                status = _context.t0;\n                if (status === null || status === 1) {\n                  status = 1;\n                } else {\n                  uni.showModal({\n                    content: \"需要相机权限\",\n                    confirmText: \"设置\",\n                    success: function success(res) {\n                      if (res.confirm) {\n                        _permission.default.gotoAppSetting();\n                      }\n                    }\n                  });\n                }\n                return _context.abrupt(\"return\", status);\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    // 扫描机器条码\n    handleScanMachineBarCode: function handleScanMachineBarCode() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var status;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _this.checkPermission();\n              case 2:\n                status = _context2.sent;\n                if (!(status !== 1)) {\n                  _context2.next = 5;\n                  break;\n                }\n                return _context2.abrupt(\"return\");\n              case 5:\n                uni.scanCode({\n                  scanType: ['barCode'],\n                  success: function success(res) {\n                    if (res.result) {\n                      __f__(\"log\", \"条码扫描结果\", res.result, \" at pages/index/index.vue:75\");\n                      _this.formData.productionControlNo = res.result;\n                      uni.showToast({\n                        title: '机器条码扫描成功',\n                        icon: 'none'\n                      });\n                      setTimeout(function () {\n                        _this.currentIndex = 1;\n                      }, 500);\n                    } else {\n                      uni.showToast({\n                        title: '条码扫描失败',\n                        icon: 'none'\n                      });\n                    }\n                  }\n                });\n              case 6:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    // 扫描机器二维码\n    handleScanMachineQRCode: function handleScanMachineQRCode() {\n      var _this2 = this;\n      uni.scanCode({\n        scanType: ['qrCode'],\n        success: function success(res) {\n          var dateUrl = res.result;\n          if (dateUrl) {\n            __f__(\"log\", \"二维码扫描结果\", dateUrl, \" at pages/index/index.vue:102\");\n            uni.request({\n              url: dateUrl,\n              method: 'GET',\n              header: {\n                'Content-Type': 'application/json'\n              },\n              success: function success(res) {\n                __f__(\"log\", \"二维码解析结果\", res, \" at pages/index/index.vue:111\");\n                var datePattern = /\\d{4}年\\d{1,2}月\\d{1,2}日/g;\n                var match = res.data.match(datePattern);\n                if (match) {\n                  _this2.formData.finishDate = match[0];\n                  uni.showToast({\n                    title: '日期识别成功',\n                    icon: 'none'\n                  });\n                  setTimeout(function () {\n                    _this2.currentIndex = 2;\n                  }, 500);\n                } else {\n                  uni.showToast({\n                    title: '未识别到日期信息',\n                    icon: 'none'\n                  });\n                }\n              },\n              fail: function fail(err) {\n                uni.showToast({\n                  title: '二维码解析失败',\n                  icon: 'none'\n                });\n              }\n            });\n          } else {\n            uni.showToast({\n              title: '二维码扫描失败',\n              icon: 'none'\n            });\n          }\n        }\n      });\n    },\n    // 拍摄机器铭牌\n    captureMachinePlate: function captureMachinePlate() {\n      uni.navigateTo({\n        url: '/pages/camera/index'\n      });\n    },\n    // 拍摄回调函数\n    setImage: function setImage(e) {\n      // 证件照裁切\n      this.clipper(e.path);\n    },\n    // 证件照裁切\n    clipper: function clipper(path) {\n      var _this3 = this;\n      uni.getImageInfo({\n        src: path,\n        success: function success(image) {\n          //因为nvue页面使用canvas比较麻烦，所以在此页面上处理图片\n          var ctx = uni.createCanvasContext('canvas-clipper', _this3);\n          ctx.drawImage(path, parseInt(0.07 * image.width), parseInt(0.28 * image.height), parseInt(0.86 * image.width), parseInt(0.40 * image.height), 0, 0, _this3.canvasSize.width, _this3.canvasSize.height);\n          ctx.draw(false, function () {\n            uni.canvasToTempFilePath({\n              destWidth: _this3.canvasSize.width * 2,\n              destHeight: _this3.canvasSize.height * 2,\n              canvasId: 'canvas-clipper',\n              fileType: 'jpg',\n              success: function success(res) {\n                _this3.savePhoto(res.tempFilePath);\n              }\n            }, _this3);\n          });\n        }\n      });\n    },\n    // 图片上传ocr 识别\n    savePhoto: function savePhoto(path) {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var base64;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _this4.imagesrc = path;\n                // 图片转换为base64\n                _context3.next = 3;\n                return _this4.imgToBase64(path);\n              case 3:\n                base64 = _context3.sent;\n                // 请求ocr接口\n                uni.request({\n                  // 本地ocr\n                  url: 'http://192.168.123.123:1224/api/ocr',\n                  // 85 ocr\n                  // url: 'http://192.168.230.85:1224/api/ocr',\n                  method: 'POST',\n                  timeout: 10000,\n                  data: {\n                    base64: base64\n                  },\n                  success: function success(res) {\n                    if (res.data.code != 100) {\n                      uni.showToast({\n                        title: '未识别到文字信息',\n                        icon: 'none'\n                      });\n                      return;\n                    }\n                    // 识别日期信息, 默认当前年\n                    var year = new Date().getFullYear(),\n                      month = \"\",\n                      day = \"\";\n                    res.data.data.forEach(function (item) {\n                      // 检索年\n                      var yearPattern = /\\d{4}年/g;\n                      var yearMatch = item.text.match(yearPattern);\n                      if (yearMatch) {\n                        year = yearMatch[0].split('年')[0];\n                      }\n                      // 检索月\n                      var monthPattern = /\\d{1,2}月/g;\n                      var monthMatch = item.text.match(monthPattern);\n                      if (monthMatch) {\n                        month = monthMatch[0].split('月')[0];\n                      }\n                      // 检索日\n                      var dayPattern = /\\d{1,2}日/g;\n                      var dayMatch = item.text.match(dayPattern);\n                      if (dayMatch) {\n                        day = dayMatch[0].split('日')[0];\n                      }\n                    });\n                    if (!month || !day) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    var ocrDate = year + \"年\" + month + \"月\" + day + \"日\";\n                    if (ocrDate != _this4.formData.finishDate) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E0D\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    // ocr成功，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  },\n                  fail: function fail(err) {\n                    // ocr识别失败，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  }\n                });\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    // 提交工单\n    submitWorkOrder: function submitWorkOrder() {\n      var _this5 = this;\n      uni.request({\n        url: 'http://192.168.230.73:8888/yanmar/app/api/check/updateFinishDate',\n        method: 'POST',\n        data: this.formData,\n        success: function success(res) {\n          if (!res.data.code) {\n            uni.showToast({\n              title: '录入失败',\n              icon: 'none'\n            });\n            return;\n          }\n          uni.showToast({\n            title: '录入成功',\n            icon: 'success'\n          });\n          _this5.currentIndex = 0;\n          _this5.imagesrc = null;\n          _this5.formData = {\n            productionControlNo: '',\n            finishDate: ''\n          };\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '录入失败',\n            icon: 'none'\n          });\n        }\n      });\n    },\n    // 图片转换为base64\n    imgToBase64: function imgToBase64(url) {\n      return new Promise(function (resolve, reject) {\n        plus.io.resolveLocalFileSystemURL(url, function (entry) {\n          // 可通过entry对象操作test.html文件 \n          entry.file(function (file) {\n            var fileReader = new plus.io.FileReader();\n            fileReader.onloadend = function (evt) {\n              resolve(evt.target.result.split(\"base64,\")[1]);\n            };\n            fileReader.readAsDataURL(file);\n          });\n        }, function (e) {\n          alert(\"Resolve file URL failed: \" + e.message);\n        });\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjdXJyZW50SW5kZXgiLCJpbWFnZXNyYyIsImNhbnZhc1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1EYXRhIiwicHJvZHVjdGlvbkNvbnRyb2xObyIsImZpbmlzaERhdGUiLCJtZXRob2RzIiwiY2hlY2tQZXJtaXNzaW9uIiwicGVybWlzaW9uIiwiaXNJT1MiLCJyZXF1ZXN0SU9TIiwicmVxdWVzdEFuZHJvaWQiLCJzdGF0dXMiLCJ1bmkiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsImdvdG9BcHBTZXR0aW5nIiwiaGFuZGxlU2Nhbk1hY2hpbmVCYXJDb2RlIiwic2NhbkNvZGUiLCJzY2FuVHlwZSIsInJlc3VsdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInNldFRpbWVvdXQiLCJoYW5kbGVTY2FuTWFjaGluZVFSQ29kZSIsImRhdGVVcmwiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiZGF0ZVBhdHRlcm4iLCJtYXRjaCIsImZhaWwiLCJlcnIiLCJjYXB0dXJlTWFjaGluZVBsYXRlIiwibmF2aWdhdGVUbyIsInNldEltYWdlIiwiZSIsImNsaXBwZXIiLCJwYXRoIiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwiaW1hZ2UiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwicGFyc2VJbnQiLCJkcmF3IiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiY2FudmFzSWQiLCJmaWxlVHlwZSIsInNhdmVQaG90byIsInRlbXBGaWxlUGF0aCIsImltZ1RvQmFzZTY0IiwiYmFzZTY0IiwidGltZW91dCIsImNvZGUiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJkYXkiLCJmb3JFYWNoIiwiaXRlbSIsInllYXJQYXR0ZXJuIiwieWVhck1hdGNoIiwidGV4dCIsInNwbGl0IiwibW9udGhQYXR0ZXJuIiwibW9udGhNYXRjaCIsImRheVBhdHRlcm4iLCJkYXlNYXRjaCIsImNhbmNlbFRleHQiLCJzdWJtaXRXb3JrT3JkZXIiLCJvY3JEYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwbHVzIiwiaW8iLCJyZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMIiwiZW50cnkiLCJmaWxlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJldnQiLCJ0YXJnZXQiLCJyZWFkQXNEYXRhVVJMIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUF3QkE7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGVBR2U7RUFDZEEsSUFBSSxrQkFBRztJQUNOLE9BQU87TUFDTkMsWUFBWSxFQUFFLENBQUM7TUFDZkMsUUFBUSxFQUFFLElBQUk7TUFDZEMsVUFBVSxFQUFFO1FBQ1hDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLE1BQU0sRUFBRTtNQUNULENBQUM7TUFDREMsUUFBUSxFQUFFO1FBQ1RDLG1CQUFtQixFQUFFLEVBQUU7UUFDdkJDLFVBQVUsRUFBRTtNQUNiO0lBQ0QsQ0FBQztFQUNGLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1I7SUFDTUMsZUFBZSw2QkFBRztNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxLQUNWQyxtQkFBUyxDQUFDQyxLQUFLO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2dCQUFBLE9BQVNELG1CQUFTLENBQUNFLFVBQVUsQ0FBQyxRQUFRLENBQUM7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQzVERixtQkFBUyxDQUFDRyxj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Q0MsR0FBRyxFQUFLO2NBQy9CVixPQUFPLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDdEUsTUFBTSxDQUFDa0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFDRGdCLFVBQVUsQ0FBQ0ssYUFBYSxDQUFDTixJQUFJLENBQUM7VUFDL0IsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUMvQyxDQUFDLEVBQUs7VUFDVHNELEtBQUssQ0FBQywyQkFBMkIsR0FBR3RELENBQUMsQ0FBQ3VELE9BQU8sQ0FBQztRQUMvQyxDQUFDLENBQUM7TUFFSCxDQUFDLENBQUM7SUFDSDtFQUNEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBwZXJtaXNpb24gZnJvbSBcIkAvY29tbW9uL3Blcm1pc3Npb24uanNcIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdXJyZW50SW5kZXg6IDAsXG5cdFx0XHRpbWFnZXNyYzogbnVsbCxcblx0XHRcdGNhbnZhc1NpemU6IHtcblx0XHRcdFx0d2lkdGg6IDMwMCxcblx0XHRcdFx0aGVpZ2h0OiAyMDBcblx0XHRcdH0sXG5cdFx0XHRmb3JtRGF0YToge1xuXHRcdFx0XHRwcm9kdWN0aW9uQ29udHJvbE5vOiAnJyxcblx0XHRcdFx0ZmluaXNoRGF0ZTogJydcblx0XHRcdH1cblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly8g5qOA5p+l5p2D6ZmQXG5cdFx0YXN5bmMgY2hlY2tQZXJtaXNzaW9uKCkge1xuXHRcdFx0bGV0IHN0YXR1cyA9IHBlcm1pc2lvbi5pc0lPUyA/IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0SU9TKCdjYW1lcmEnKSA6XG5cdFx0XHRcdGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCgnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScpO1xuXG5cdFx0XHRpZiAoc3RhdHVzID09PSBudWxsIHx8IHN0YXR1cyA9PT0gMSkge1xuXHRcdFx0XHRzdGF0dXMgPSAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0Y29udGVudDogXCLpnIDopoHnm7jmnLrmnYPpmZBcIixcblx0XHRcdFx0XHRjb25maXJtVGV4dDogXCLorr7nva5cIixcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFNldHRpbmcoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RhdHVzO1xuXHRcdH0sXG5cdFx0Ly8g5omr5o+P5py65Zmo5p2h56CBXG5cdFx0YXN5bmMgaGFuZGxlU2Nhbk1hY2hpbmVCYXJDb2RlKCkge1xuXG5cdFx0XHRsZXQgc3RhdHVzID0gYXdhaXQgdGhpcy5jaGVja1Blcm1pc3Npb24oKTtcblx0XHRcdGlmIChzdGF0dXMgIT09IDEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cblx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdHNjYW5UeXBlOiBbJ2JhckNvZGUnXSxcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMucmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuadoeeggeaJq+aPj+e7k+aenFwiLCByZXMucmVzdWx0KTtcblxuXHRcdFx0XHRcdFx0dGhpcy5mb3JtRGF0YS5wcm9kdWN0aW9uQ29udHJvbE5vID0gcmVzLnJlc3VsdDtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+acuuWZqOadoeeggeaJq+aPj+aIkOWKnycsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+adoeeggeaJq+aPj+Wksei0pScsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmiavmj4/mnLrlmajkuoznu7TnoIFcblx0XHRoYW5kbGVTY2FuTWFjaGluZVFSQ29kZSgpIHtcblx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdHNjYW5UeXBlOiBbJ3FyQ29kZSddLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRhdGVVcmwgPSByZXMucmVzdWx0O1xuXHRcdFx0XHRcdGlmIChkYXRlVXJsKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuS6jOe7tOeggeaJq+aPj+e7k+aenFwiLCBkYXRlVXJsKTtcblxuXHRcdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0XHR1cmw6IGRhdGVVcmwsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5LqM57u056CB6Kej5p6Q57uT5p6cXCIsIHJlcyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRlUGF0dGVybiA9IC9cXGR7NH3lubRcXGR7MSwyfeaciFxcZHsxLDJ95pelL2c7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSByZXMuZGF0YS5tYXRjaChkYXRlUGF0dGVybik7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGUgPSBtYXRjaFswXTtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aXpeacn+ivhuWIq+aIkOWKnycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmnKror4bliKvliLDml6XmnJ/kv6Hmga8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S6jOe7tOeggeino+aekOWksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuoznu7TnoIHmiavmj4/lpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5ouN5pGE5py65Zmo6ZOt54mMXG5cdFx0Y2FwdHVyZU1hY2hpbmVQbGF0ZSgpIHtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NhbWVyYS9pbmRleCdcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmi43mkYTlm57osIPlh73mlbBcblx0XHRzZXRJbWFnZShlKSB7XG5cdFx0XHQvLyDor4Hku7bnhafoo4HliIdcblx0XHRcdHRoaXMuY2xpcHBlcihlLnBhdGgpO1xuXHRcdH0sXG5cdFx0Ly8g6K+B5Lu254Wn6KOB5YiHXG5cdFx0Y2xpcHBlcihwYXRoKSB7XG5cdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcblx0XHRcdFx0c3JjOiBwYXRoLFxuXHRcdFx0XHRzdWNjZXNzOiAoaW1hZ2UpID0+IHtcblx0XHRcdFx0XHQvL+WboOS4um52dWXpobXpnaLkvb/nlKhjYW52YXPmr5TovoPpurvng6bvvIzmiYDku6XlnKjmraTpobXpnaLkuIrlpITnkIblm77niYdcblx0XHRcdFx0XHRsZXQgY3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcy1jbGlwcGVyJywgdGhpcyk7XG5cblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHRcdHBhcnNlSW50KDAuMDcgKiBpbWFnZS53aWR0aCksXG5cdFx0XHRcdFx0XHRwYXJzZUludCgwLjI4ICogaW1hZ2UuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdHBhcnNlSW50KDAuODYgKiBpbWFnZS53aWR0aCksXG5cdFx0XHRcdFx0XHRwYXJzZUludCgwLjQwICogaW1hZ2UuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXNTaXplLndpZHRoLFxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXNTaXplLmhlaWdodFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcblx0XHRcdFx0XHRcdFx0ZGVzdFdpZHRoOiB0aGlzLmNhbnZhc1NpemUud2lkdGggKiAyLFxuXHRcdFx0XHRcdFx0XHRkZXN0SGVpZ2h0OiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0ICogMixcblx0XHRcdFx0XHRcdFx0Y2FudmFzSWQ6ICdjYW52YXMtY2xpcHBlcicsXG5cdFx0XHRcdFx0XHRcdGZpbGVUeXBlOiAnanBnJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZVBob3RvKHJlcy50ZW1wRmlsZVBhdGgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR0aGlzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vIOWbvueJh+S4iuS8oG9jciDor4bliKtcblx0XHRhc3luYyBzYXZlUGhvdG8ocGF0aCkge1xuXHRcdFx0dGhpcy5pbWFnZXNyYyA9IHBhdGg7XG5cdFx0XHQvLyDlm77niYfovazmjaLkuLpiYXNlNjRcblx0XHRcdGxldCBiYXNlNjQgPSBhd2FpdCB0aGlzLmltZ1RvQmFzZTY0KHBhdGgpXG5cdFx0XHQvLyDor7fmsYJvY3LmjqXlj6Ncblx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0Ly8g5pys5Zywb2NyXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEyMy4xMjM6MTIyNC9hcGkvb2NyJyxcblx0XHRcdFx0Ly8gODUgb2NyXG5cdFx0XHRcdC8vIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjIzMC44NToxMjI0L2FwaS9vY3InLFxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0dGltZW91dDogMTAwMDAsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRiYXNlNjQ6IGJhc2U2NFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgIT0gMTAwKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmnKror4bliKvliLDmloflrZfkv6Hmga8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8g6K+G5Yir5pel5pyf5L+h5oGvLCDpu5jorqTlvZPliY3lubRcblx0XHRcdFx0XHRsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbW9udGggPSBcIlwiLCBkYXkgPSBcIlwiO1xuXHRcdFx0XHRcdHJlcy5kYXRhLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0XHRcdC8vIOajgOe0ouW5tFxuXHRcdFx0XHRcdFx0Y29uc3QgeWVhclBhdHRlcm4gPSAvXFxkezR95bm0L2c7XG5cdFx0XHRcdFx0XHRjb25zdCB5ZWFyTWF0Y2ggPSBpdGVtLnRleHQubWF0Y2goeWVhclBhdHRlcm4pO1xuXHRcdFx0XHRcdFx0aWYgKHllYXJNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHR5ZWFyID0geWVhck1hdGNoWzBdLnNwbGl0KCflubQnKVswXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIOajgOe0ouaciFxuXHRcdFx0XHRcdFx0Y29uc3QgbW9udGhQYXR0ZXJuID0gL1xcZHsxLDJ95pyIL2c7XG5cdFx0XHRcdFx0XHRjb25zdCBtb250aE1hdGNoID0gaXRlbS50ZXh0Lm1hdGNoKG1vbnRoUGF0dGVybik7XG5cdFx0XHRcdFx0XHRpZiAobW9udGhNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRtb250aCA9IG1vbnRoTWF0Y2hbMF0uc3BsaXQoJ+aciCcpWzBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8g5qOA57Si5pelXG5cdFx0XHRcdFx0XHRjb25zdCBkYXlQYXR0ZXJuID0gL1xcZHsxLDJ95pelL2c7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXlNYXRjaCA9IGl0ZW0udGV4dC5tYXRjaChkYXlQYXR0ZXJuKTtcblx0XHRcdFx0XHRcdGlmIChkYXlNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRkYXkgPSBkYXlNYXRjaFswXS5zcGxpdCgn5pelJylbMF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRpZiAoIW1vbnRoIHx8ICFkYXkpIHtcblx0XHRcdFx0XHRcdC8vIG9jcuWksei0pe+8jOW8ueeql+ehruiupFxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogYG9jcuivhuWIq+Wksei0pe+8jOaYr+WQpuS7peS6jOe7tOeggeaXpeacnyR7dGhpcy5mb3JtRGF0YS5maW5pc2hEYXRlfeW9leWFpeWujOW3peWNlWAsXG5cdFx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5b2V5YWlJyxcblx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBvY3JEYXRlID0geWVhciArIFwi5bm0XCIgKyBtb250aCArIFwi5pyIXCIgKyBkYXkgKyBcIuaXpVwiXG5cdFx0XHRcdFx0aWYgKG9jckRhdGUgIT0gdGhpcy5mb3JtRGF0YS5maW5pc2hEYXRlKSB7XG5cdFx0XHRcdFx0XHQvLyBvY3LlpLHotKXvvIzlvLnnqpfnoa7orqRcblx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+ehruiupCcsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGBvY3Lor4bliKvml6XmnJ/kuI7lrozlt6XljZXml6XmnJ/kuI3kuIDoh7TvvIzmmK/lkKbku6Xkuoznu7TnoIHml6XmnJ8ke3RoaXMuZm9ybURhdGEuZmluaXNoRGF0ZX3lvZXlhaXlrozlt6XljZVgLFxuXHRcdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+W9leWFpScsXG5cdFx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdFdvcmtPcmRlcigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvY3LmiJDlip/vvIzlvLnnqpfnoa7orqRcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGBvY3Lor4bliKvml6XmnJ/kuI7lrozlt6XljZXml6XmnJ/kuIDoh7TvvIzmmK/lkKbku6Xml6XmnJ8ke3RoaXMuZm9ybURhdGEuZmluaXNoRGF0ZX3lvZXlhaXlrozlt6XljZVgLFxuXHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICflvZXlhaUnLFxuXHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gb2Ny6K+G5Yir5aSx6LSl77yM5by556qX56Gu6K6kXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+ehruiupCcsXG5cdFx0XHRcdFx0XHRjb250ZW50OiBgb2Ny6K+G5Yir5aSx6LSl77yM5piv5ZCm5Lul5LqM57u056CB5pel5pyfJHt0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGV95b2V5YWl5a6M5bel5Y2VYCxcblx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5b2V5YWlJyxcblx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdFdvcmtPcmRlcigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOaPkOS6pOW3peWNlVxuXHRcdHN1Ym1pdFdvcmtPcmRlcigpIHtcblx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiAnaHR0cDovLzE5Mi4xNjguMjMwLjczOjg4ODgveWFubWFyL2FwcC9hcGkvY2hlY2svdXBkYXRlRmluaXNoRGF0ZScsXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB0aGlzLmZvcm1EYXRhLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXMuZGF0YS5jb2RlKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvZXlhaXlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+W9leWFpeaIkOWKnycsXG5cdFx0XHRcdFx0XHRpY29uOiAnc3VjY2Vzcydcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzcmMgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuZm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0XHRwcm9kdWN0aW9uQ29udHJvbE5vOiAnJyxcblx0XHRcdFx0XHRcdGZpbmlzaERhdGU6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+W9leWFpeWksei0pScsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5Zu+54mH6L2s5o2i5Li6YmFzZTY0XG5cdFx0aW1nVG9CYXNlNjQodXJsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0XHRwbHVzLmlvLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodXJsLCAoZW50cnkpID0+IHtcblx0XHRcdFx0XHQvLyDlj6/pgJrov4dlbnRyeeWvueixoeaTjeS9nHRlc3QuaHRtbOaWh+S7tiBcblx0XHRcdFx0XHRlbnRyeS5maWxlKChmaWxlKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgZmlsZVJlYWRlciA9IG5ldyBwbHVzLmlvLkZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGV2dC50YXJnZXQucmVzdWx0LnNwbGl0KFwiYmFzZTY0LFwiKVsxXSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0XHRhbGVydChcIlJlc29sdmUgZmlsZSBVUkwgZmFpbGVkOiBcIiArIGUubWVzc2FnZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

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