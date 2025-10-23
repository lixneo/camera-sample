(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 23));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 19));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      currentIndex: 0,\n      imagesrc: null,\n      canvasSize: {\n        width: 300,\n        height: 200\n      },\n      formData: {\n        productionControlNo: '',\n        finishDate: ''\n      }\n    };\n  },\n  methods: {\n    // 扫描机器条码\n    handleScanMachineBarCode: function handleScanMachineBarCode() {\n      var _this = this;\n      uni.scanCode({\n        scanType: ['barCode'],\n        success: function success(res) {\n          if (res.result) {\n            __f__(\"log\", \"条码扫描结果\", res.result, \" at pages/index/index.vue:47\");\n            _this.formData.productionControlNo = res.result;\n            uni.showToast({\n              title: '机器条码扫描成功',\n              icon: 'none'\n            });\n            setTimeout(function () {\n              _this.currentIndex = 1;\n            }, 500);\n          } else {\n            uni.showToast({\n              title: '条码扫描失败',\n              icon: 'none'\n            });\n          }\n        }\n      });\n    },\n    // 扫描机器二维码\n    handleScanMachineQRCode: function handleScanMachineQRCode() {\n      var _this2 = this;\n      uni.scanCode({\n        scanType: ['qrCode'],\n        success: function success(res) {\n          var dateUrl = res.result;\n          if (dateUrl) {\n            __f__(\"log\", \"二维码扫描结果\", dateUrl, \" at pages/index/index.vue:74\");\n            uni.request({\n              url: dateUrl,\n              method: 'GET',\n              header: {\n                'Content-Type': 'application/json'\n              },\n              success: function success(res) {\n                __f__(\"log\", \"二维码解析结果\", res, \" at pages/index/index.vue:83\");\n                var datePattern = /\\d{4}年\\d{1,2}月\\d{1,2}日/g;\n                var match = res.data.match(datePattern);\n                if (match) {\n                  _this2.formData.finishDate = match[0];\n                  uni.showToast({\n                    title: '日期识别成功',\n                    icon: 'none'\n                  });\n                  setTimeout(function () {\n                    _this2.currentIndex = 2;\n                  }, 500);\n                } else {\n                  uni.showToast({\n                    title: '未识别到日期信息',\n                    icon: 'none'\n                  });\n                }\n              },\n              fail: function fail(err) {\n                uni.showToast({\n                  title: '二维码解析失败',\n                  icon: 'none'\n                });\n              }\n            });\n          } else {\n            uni.showToast({\n              title: '二维码扫描失败',\n              icon: 'none'\n            });\n          }\n        }\n      });\n    },\n    // 拍摄机器铭牌\n    captureMachinePlate: function captureMachinePlate() {\n      uni.navigateTo({\n        url: '/pages/camera/index'\n      });\n    },\n    // 拍摄回调函数\n    setImage: function setImage(e) {\n      // 证件照裁切\n      this.clipper(e.path);\n    },\n    // 证件照裁切\n    clipper: function clipper(path) {\n      var _this3 = this;\n      uni.getImageInfo({\n        src: path,\n        success: function success(image) {\n          //因为nvue页面使用canvas比较麻烦，所以在此页面上处理图片\n          var ctx = uni.createCanvasContext('canvas-clipper', _this3);\n          ctx.drawImage(path, parseInt(0.07 * image.width), parseInt(0.28 * image.height), parseInt(0.86 * image.width), parseInt(0.40 * image.height), 0, 0, _this3.canvasSize.width, _this3.canvasSize.height);\n          ctx.draw(false, function () {\n            uni.canvasToTempFilePath({\n              destWidth: _this3.canvasSize.width * 2,\n              destHeight: _this3.canvasSize.height * 2,\n              canvasId: 'canvas-clipper',\n              fileType: 'jpg',\n              success: function success(res) {\n                _this3.savePhoto(res.tempFilePath);\n              }\n            }, _this3);\n          });\n        }\n      });\n    },\n    // 图片上传ocr 识别\n    savePhoto: function savePhoto(path) {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var base64;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _this4.imagesrc = path;\n                // 图片转换为base64\n                _context.next = 3;\n                return _this4.imgToBase64(path);\n              case 3:\n                base64 = _context.sent;\n                // 请求ocr接口\n                uni.request({\n                  // 本地ocr\n                  url: 'http://192.168.123.123:1224/api/ocr',\n                  // 85 ocr\n                  // url: 'http://192.168.230.85:1224/api/ocr',\n                  method: 'POST',\n                  timeout: 10000,\n                  data: {\n                    base64: base64\n                  },\n                  success: function success(res) {\n                    if (res.data.code != 100) {\n                      uni.showToast({\n                        title: '未识别到文字信息',\n                        icon: 'none'\n                      });\n                      return;\n                    }\n                    // 识别日期信息, 默认当前年\n                    var year = new Date().getFullYear(),\n                      month = \"\",\n                      day = \"\";\n                    res.data.data.forEach(function (item) {\n                      // 检索年\n                      var yearPattern = /\\d{4}年/g;\n                      var yearMatch = item.text.match(yearPattern);\n                      if (yearMatch) {\n                        year = yearMatch[0].split('年')[0];\n                      }\n                      // 检索月\n                      var monthPattern = /\\d{1,2}月/g;\n                      var monthMatch = item.text.match(monthPattern);\n                      if (monthMatch) {\n                        month = monthMatch[0].split('月')[0];\n                      }\n                      // 检索日\n                      var dayPattern = /\\d{1,2}日/g;\n                      var dayMatch = item.text.match(dayPattern);\n                      if (dayMatch) {\n                        day = dayMatch[0].split('日')[0];\n                      }\n                    });\n                    if (!month || !day) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    var ocrDate = year + \"年\" + month + \"月\" + day + \"日\";\n                    if (ocrDate != _this4.formData.finishDate) {\n                      // ocr失败，弹窗确认\n                      uni.showModal({\n                        title: '请确认',\n                        content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E0D\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                        confirmText: '录入',\n                        cancelText: '取消',\n                        success: function success(res) {\n                          if (res.confirm) {\n                            _this4.submitWorkOrder();\n                          }\n                        }\n                      });\n                      return;\n                    }\n                    // ocr成功，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u65E5\\u671F\\u4E0E\\u5B8C\\u5DE5\\u5355\\u65E5\\u671F\\u4E00\\u81F4\\uFF0C\\u662F\\u5426\\u4EE5\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  },\n                  fail: function fail(err) {\n                    // ocr识别失败，弹窗确认\n                    uni.showModal({\n                      title: '请确认',\n                      content: \"ocr\\u8BC6\\u522B\\u5931\\u8D25\\uFF0C\\u662F\\u5426\\u4EE5\\u4E8C\\u7EF4\\u7801\\u65E5\\u671F\".concat(_this4.formData.finishDate, \"\\u5F55\\u5165\\u5B8C\\u5DE5\\u5355\"),\n                      confirmText: '录入',\n                      cancelText: '取消',\n                      success: function success(res) {\n                        if (res.confirm) {\n                          _this4.submitWorkOrder();\n                        }\n                      }\n                    });\n                  }\n                });\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    // 提交工单\n    submitWorkOrder: function submitWorkOrder() {\n      var _this5 = this;\n      uni.request({\n        url: 'http://192.168.230.73:8888/yanmar/app/api/check/updateFinishDate',\n        method: 'POST',\n        data: this.formData,\n        success: function success(res) {\n          if (!res.data.code) {\n            uni.showToast({\n              title: '录入失败',\n              icon: 'none'\n            });\n            return;\n          }\n          uni.showToast({\n            title: '录入成功',\n            icon: 'success'\n          });\n          _this5.currentIndex = 0;\n          _this5.imagesrc = null;\n          _this5.formData = {\n            productionControlNo: '',\n            finishDate: ''\n          };\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '录入失败',\n            icon: 'none'\n          });\n        }\n      });\n    },\n    // 图片转换为base64\n    imgToBase64: function imgToBase64(url) {\n      return new Promise(function (resolve, reject) {\n        plus.io.resolveLocalFileSystemURL(url, function (entry) {\n          // 可通过entry对象操作test.html文件 \n          entry.file(function (file) {\n            var fileReader = new plus.io.FileReader();\n            fileReader.onloadend = function (evt) {\n              resolve(evt.target.result.split(\"base64,\")[1]);\n            };\n            fileReader.readAsDataURL(file);\n          });\n        }, function (e) {\n          alert(\"Resolve file URL failed: \" + e.message);\n        });\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjdXJyZW50SW5kZXgiLCJpbWFnZXNyYyIsImNhbnZhc1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImZvcm1EYXRhIiwicHJvZHVjdGlvbkNvbnRyb2xObyIsImZpbmlzaERhdGUiLCJtZXRob2RzIiwiaGFuZGxlU2Nhbk1hY2hpbmVCYXJDb2RlIiwidW5pIiwic2NhbkNvZGUiLCJzY2FuVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJyZXN1bHQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nhbk1hY2hpbmVRUkNvZGUiLCJkYXRlVXJsIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsImRhdGVQYXR0ZXJuIiwibWF0Y2giLCJmYWlsIiwiZXJyIiwiY2FwdHVyZU1hY2hpbmVQbGF0ZSIsIm5hdmlnYXRlVG8iLCJzZXRJbWFnZSIsImUiLCJjbGlwcGVyIiwicGF0aCIsImdldEltYWdlSW5mbyIsInNyYyIsImltYWdlIiwiY3R4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsImRyYXdJbWFnZSIsInBhcnNlSW50IiwiZHJhdyIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsImNhbnZhc0lkIiwiZmlsZVR5cGUiLCJzYXZlUGhvdG8iLCJ0ZW1wRmlsZVBhdGgiLCJpbWdUb0Jhc2U2NCIsImJhc2U2NCIsInRpbWVvdXQiLCJjb2RlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZGF5IiwiZm9yRWFjaCIsIml0ZW0iLCJ5ZWFyUGF0dGVybiIsInllYXJNYXRjaCIsInRleHQiLCJzcGxpdCIsIm1vbnRoUGF0dGVybiIsIm1vbnRoTWF0Y2giLCJkYXlQYXR0ZXJuIiwiZGF5TWF0Y2giLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiY29uZmlybSIsInN1Ym1pdFdvcmtPcmRlciIsIm9jckRhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBsdXMiLCJpbyIsInJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwiLCJlbnRyeSIsImZpbGUiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImV2dCIsInRhcmdldCIsInJlYWRBc0RhdGFVUkwiLCJhbGVydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUVlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLFlBQVksRUFBRSxDQUFDO01BQ2ZDLFFBQVEsRUFBRSxJQUFJO01BQ2RDLFVBQVUsRUFBRTtRQUNYQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxNQUFNLEVBQUU7TUFDVCxDQUFDO01BQ0RDLFFBQVEsRUFBRTtRQUNUQyxtQkFBbUIsRUFBRSxFQUFFO1FBQ3ZCQyxVQUFVLEVBQUU7TUFDYjtJQUNELENBQUM7RUFDRixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNSO0lBQ0FDLHdCQUF3QixzQ0FBRztNQUFBO01BQzFCQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztRQUNaQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDckJDLE9BQU8sRUFBRSxpQkFBQ0MsR0FBRyxFQUFLO1VBQ2pCLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFO1lBQ2YsYUFBWSxRQUFRLEVBQUVELEdBQUcsQ0FBQ0MsTUFBTTtZQUVoQyxLQUFJLENBQUNWLFFBQVEsQ0FBQ0MsbUJBQW1CLEdBQUdRLEdBQUcsQ0FBQ0MsTUFBTTtZQUM5Q0wsR0FBRyxDQUFDTSxTQUFTLENBQUM7Y0FDYkMsS0FBSyxFQUFFLFVBQVU7Y0FDakJDLElBQUks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VixPQUFPLENBQUNVLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDMUUsTUFBTSxDQUFDa0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFDRG9CLFVBQVUsQ0FBQ0ssYUFBYSxDQUFDTixJQUFJLENBQUM7VUFDL0IsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUNuRCxDQUFDLEVBQUs7VUFDVDBELEtBQUssQ0FBQywyQkFBMkIsR0FBRzFELENBQUMsQ0FBQzJELE9BQU8sQ0FBQztRQUMvQyxDQUFDLENBQUM7TUFFSCxDQUFDLENBQUM7SUFDSDtFQUNEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y3VycmVudEluZGV4OiAwLFxuXHRcdFx0aW1hZ2VzcmM6IG51bGwsXG5cdFx0XHRjYW52YXNTaXplOiB7XG5cdFx0XHRcdHdpZHRoOiAzMDAsXG5cdFx0XHRcdGhlaWdodDogMjAwXG5cdFx0XHR9LFxuXHRcdFx0Zm9ybURhdGE6IHtcblx0XHRcdFx0cHJvZHVjdGlvbkNvbnRyb2xObzogJycsXG5cdFx0XHRcdGZpbmlzaERhdGU6ICcnXG5cdFx0XHR9XG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8vIOaJq+aPj+acuuWZqOadoeeggVxuXHRcdGhhbmRsZVNjYW5NYWNoaW5lQmFyQ29kZSgpIHtcblx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdHNjYW5UeXBlOiBbJ2JhckNvZGUnXSxcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMucmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuadoeeggeaJq+aPj+e7k+aenFwiLCByZXMucmVzdWx0KTtcblxuXHRcdFx0XHRcdFx0dGhpcy5mb3JtRGF0YS5wcm9kdWN0aW9uQ29udHJvbE5vID0gcmVzLnJlc3VsdDtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+acuuWZqOadoeeggeaJq+aPj+aIkOWKnycsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDE7XG5cdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+adoeeggeaJq+aPj+Wksei0pScsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmiavmj4/mnLrlmajkuoznu7TnoIFcblx0XHRoYW5kbGVTY2FuTWFjaGluZVFSQ29kZSgpIHtcblx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdHNjYW5UeXBlOiBbJ3FyQ29kZSddLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRhdGVVcmwgPSByZXMucmVzdWx0O1xuXHRcdFx0XHRcdGlmIChkYXRlVXJsKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuS6jOe7tOeggeaJq+aPj+e7k+aenFwiLCBkYXRlVXJsKTtcblxuXHRcdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0XHR1cmw6IGRhdGVVcmwsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5LqM57u056CB6Kej5p6Q57uT5p6cXCIsIHJlcyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkYXRlUGF0dGVybiA9IC9cXGR7NH3lubRcXGR7MSwyfeaciFxcZHsxLDJ95pelL2c7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSByZXMuZGF0YS5tYXRjaChkYXRlUGF0dGVybik7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGUgPSBtYXRjaFswXTtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aXpeacn+ivhuWIq+aIkOWKnycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmnKror4bliKvliLDml6XmnJ/kv6Hmga8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S6jOe7tOeggeino+aekOWksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuoznu7TnoIHmiavmj4/lpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5ouN5pGE5py65Zmo6ZOt54mMXG5cdFx0Y2FwdHVyZU1hY2hpbmVQbGF0ZSgpIHtcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiAnL3BhZ2VzL2NhbWVyYS9pbmRleCdcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDmi43mkYTlm57osIPlh73mlbBcblx0XHRzZXRJbWFnZShlKSB7XG5cdFx0XHQvLyDor4Hku7bnhafoo4HliIdcblx0XHRcdHRoaXMuY2xpcHBlcihlLnBhdGgpO1xuXHRcdH0sXG5cdFx0Ly8g6K+B5Lu254Wn6KOB5YiHXG5cdFx0Y2xpcHBlcihwYXRoKSB7XG5cdFx0XHR1bmkuZ2V0SW1hZ2VJbmZvKHtcblx0XHRcdFx0c3JjOiBwYXRoLFxuXHRcdFx0XHRzdWNjZXNzOiAoaW1hZ2UpID0+IHtcblx0XHRcdFx0XHQvL+WboOS4um52dWXpobXpnaLkvb/nlKhjYW52YXPmr5TovoPpurvng6bvvIzmiYDku6XlnKjmraTpobXpnaLkuIrlpITnkIblm77niYdcblx0XHRcdFx0XHRsZXQgY3R4ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcy1jbGlwcGVyJywgdGhpcyk7XG5cblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKFxuXHRcdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHRcdHBhcnNlSW50KDAuMDcgKiBpbWFnZS53aWR0aCksXG5cdFx0XHRcdFx0XHRwYXJzZUludCgwLjI4ICogaW1hZ2UuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdHBhcnNlSW50KDAuODYgKiBpbWFnZS53aWR0aCksXG5cdFx0XHRcdFx0XHRwYXJzZUludCgwLjQwICogaW1hZ2UuaGVpZ2h0KSxcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXNTaXplLndpZHRoLFxuXHRcdFx0XHRcdFx0dGhpcy5jYW52YXNTaXplLmhlaWdodFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcblx0XHRcdFx0XHRcdFx0ZGVzdFdpZHRoOiB0aGlzLmNhbnZhc1NpemUud2lkdGggKiAyLFxuXHRcdFx0XHRcdFx0XHRkZXN0SGVpZ2h0OiB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0ICogMixcblx0XHRcdFx0XHRcdFx0Y2FudmFzSWQ6ICdjYW52YXMtY2xpcHBlcicsXG5cdFx0XHRcdFx0XHRcdGZpbGVUeXBlOiAnanBnJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZVBob3RvKHJlcy50ZW1wRmlsZVBhdGgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR0aGlzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8vIOWbvueJh+S4iuS8oG9jciDor4bliKtcblx0XHRhc3luYyBzYXZlUGhvdG8ocGF0aCkge1xuXHRcdFx0dGhpcy5pbWFnZXNyYyA9IHBhdGg7XG5cdFx0XHQvLyDlm77niYfovazmjaLkuLpiYXNlNjRcblx0XHRcdGxldCBiYXNlNjQgPSBhd2FpdCB0aGlzLmltZ1RvQmFzZTY0KHBhdGgpXG5cdFx0XHQvLyDor7fmsYJvY3LmjqXlj6Ncblx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0Ly8g5pys5Zywb2NyXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly8xOTIuMTY4LjEyMy4xMjM6MTIyNC9hcGkvb2NyJyxcblx0XHRcdFx0Ly8gODUgb2NyXG5cdFx0XHRcdC8vIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjIzMC44NToxMjI0L2FwaS9vY3InLFxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0dGltZW91dDogMTAwMDAsXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRiYXNlNjQ6IGJhc2U2NFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgIT0gMTAwKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmnKror4bliKvliLDmloflrZfkv6Hmga8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8g6K+G5Yir5pel5pyf5L+h5oGvLCDpu5jorqTlvZPliY3lubRcblx0XHRcdFx0XHRsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgbW9udGggPSBcIlwiLCBkYXkgPSBcIlwiO1xuXHRcdFx0XHRcdHJlcy5kYXRhLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0XHRcdC8vIOajgOe0ouW5tFxuXHRcdFx0XHRcdFx0Y29uc3QgeWVhclBhdHRlcm4gPSAvXFxkezR95bm0L2c7XG5cdFx0XHRcdFx0XHRjb25zdCB5ZWFyTWF0Y2ggPSBpdGVtLnRleHQubWF0Y2goeWVhclBhdHRlcm4pO1xuXHRcdFx0XHRcdFx0aWYgKHllYXJNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHR5ZWFyID0geWVhck1hdGNoWzBdLnNwbGl0KCflubQnKVswXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIOajgOe0ouaciFxuXHRcdFx0XHRcdFx0Y29uc3QgbW9udGhQYXR0ZXJuID0gL1xcZHsxLDJ95pyIL2c7XG5cdFx0XHRcdFx0XHRjb25zdCBtb250aE1hdGNoID0gaXRlbS50ZXh0Lm1hdGNoKG1vbnRoUGF0dGVybik7XG5cdFx0XHRcdFx0XHRpZiAobW9udGhNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRtb250aCA9IG1vbnRoTWF0Y2hbMF0uc3BsaXQoJ+aciCcpWzBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8g5qOA57Si5pelXG5cdFx0XHRcdFx0XHRjb25zdCBkYXlQYXR0ZXJuID0gL1xcZHsxLDJ95pelL2c7XG5cdFx0XHRcdFx0XHRjb25zdCBkYXlNYXRjaCA9IGl0ZW0udGV4dC5tYXRjaChkYXlQYXR0ZXJuKTtcblx0XHRcdFx0XHRcdGlmIChkYXlNYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRkYXkgPSBkYXlNYXRjaFswXS5zcGxpdCgn5pelJylbMF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRpZiAoIW1vbnRoIHx8ICFkYXkpIHtcblx0XHRcdFx0XHRcdC8vIG9jcuWksei0pe+8jOW8ueeql+ehruiupFxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogYG9jcuivhuWIq+Wksei0pe+8jOaYr+WQpuS7peS6jOe7tOeggeaXpeacnyR7dGhpcy5mb3JtRGF0YS5maW5pc2hEYXRlfeW9leWFpeWujOW3peWNlWAsXG5cdFx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5b2V5YWlJyxcblx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBvY3JEYXRlID0geWVhciArIFwi5bm0XCIgKyBtb250aCArIFwi5pyIXCIgKyBkYXkgKyBcIuaXpVwiXG5cdFx0XHRcdFx0aWYgKG9jckRhdGUgIT0gdGhpcy5mb3JtRGF0YS5maW5pc2hEYXRlKSB7XG5cdFx0XHRcdFx0XHQvLyBvY3LlpLHotKXvvIzlvLnnqpfnoa7orqRcblx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+ehruiupCcsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGBvY3Lor4bliKvml6XmnJ/kuI7lrozlt6XljZXml6XmnJ/kuI3kuIDoh7TvvIzmmK/lkKbku6Xkuoznu7TnoIHml6XmnJ8ke3RoaXMuZm9ybURhdGEuZmluaXNoRGF0ZX3lvZXlhaXlrozlt6XljZVgLFxuXHRcdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+W9leWFpScsXG5cdFx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdFdvcmtPcmRlcigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvY3LmiJDlip/vvIzlvLnnqpfnoa7orqRcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+356Gu6K6kJyxcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGBvY3Lor4bliKvml6XmnJ/kuI7lrozlt6XljZXml6XmnJ/kuIDoh7TvvIzmmK/lkKbku6Xml6XmnJ8ke3RoaXMuZm9ybURhdGEuZmluaXNoRGF0ZX3lvZXlhaXlrozlt6XljZVgLFxuXHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICflvZXlhaUnLFxuXHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+WPlua2iCcsXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0V29ya09yZGVyKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Ly8gb2Ny6K+G5Yir5aSx6LSl77yM5by556qX56Gu6K6kXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+ehruiupCcsXG5cdFx0XHRcdFx0XHRjb250ZW50OiBgb2Ny6K+G5Yir5aSx6LSl77yM5piv5ZCm5Lul5LqM57u056CB5pel5pyfJHt0aGlzLmZvcm1EYXRhLmZpbmlzaERhdGV95b2V5YWl5a6M5bel5Y2VYCxcblx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5b2V5YWlJyxcblx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdFdvcmtPcmRlcigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOaPkOS6pOW3peWNlVxuXHRcdHN1Ym1pdFdvcmtPcmRlcigpIHtcblx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiAnaHR0cDovLzE5Mi4xNjguMjMwLjczOjg4ODgveWFubWFyL2FwcC9hcGkvY2hlY2svdXBkYXRlRmluaXNoRGF0ZScsXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB0aGlzLmZvcm1EYXRhLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXMuZGF0YS5jb2RlKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvZXlhaXlpLHotKUnLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+W9leWFpeaIkOWKnycsXG5cdFx0XHRcdFx0XHRpY29uOiAnc3VjY2Vzcydcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXHRcdFx0XHRcdHRoaXMuaW1hZ2VzcmMgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuZm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0XHRwcm9kdWN0aW9uQ29udHJvbE5vOiAnJyxcblx0XHRcdFx0XHRcdGZpbmlzaERhdGU6ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+W9leWFpeWksei0pScsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5Zu+54mH6L2s5o2i5Li6YmFzZTY0XG5cdFx0aW1nVG9CYXNlNjQodXJsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXHRcdFx0XHRwbHVzLmlvLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodXJsLCAoZW50cnkpID0+IHtcblx0XHRcdFx0XHQvLyDlj6/pgJrov4dlbnRyeeWvueixoeaTjeS9nHRlc3QuaHRtbOaWh+S7tiBcblx0XHRcdFx0XHRlbnRyeS5maWxlKChmaWxlKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgZmlsZVJlYWRlciA9IG5ldyBwbHVzLmlvLkZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGV2dC50YXJnZXQucmVzdWx0LnNwbGl0KFwiYmFzZTY0LFwiKVsxXSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0XHRhbGVydChcIlJlc29sdmUgZmlsZSBVUkwgZmFpbGVkOiBcIiArIGUubWVzc2FnZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

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
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 23 */
/*!*****************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/App.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!******************************************************************************************!*\
  !*** /Users/css/Documents/code/study/vue/camera-sample/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/css/Documents/code/study/vue/camera-sample/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ })
],[[0,"app-config"]]]);