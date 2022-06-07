"use strict";
(self["webpackChunkaddonify_quick_view"] = self["webpackChunkaddonify_quick_view"] || []).push([["admin_src_components_form_Settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/check.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/close.mjs");
/* harmony import */ var _Loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading.vue */ "./admin/src/components/Loading.vue");
/* harmony import */ var _stores_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/options */ "./admin/src/stores/options.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Settings',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,_stores_options__WEBPACK_IMPORTED_MODULE_2__.useOptionsStore)(); //const { loading } = storeToRefs(store);
    //onMounted(() => {
    //	store.getOptions();
    //});
    //const enableAddonifyQuickView = ref(true);

    var quickViewButtonPosition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var quickViewButtonPositionOptions = [{
      value: "after",
      label: "After add to cart button"
    }, {
      value: "before",
      label: "Before add to cart button"
    }, {
      value: "overlay",
      label: "Overlay on the product thumbnail"
    }];
    var quickViewButtonLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var quickViewModalContents = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(["Image", "Title", "Price", "Rating", "Add to Cart"]);
    var quickViewModalProductImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var quickViewModalProductImageOptions = [{
      value: "Product image only",
      label: "Product image only"
    }, {
      value: "Product image or gallery",
      label: "Product image or gallery"
    }];
    var quickViewEnableLightBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var quickViewModalEnableViewDetailButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var __returned__ = {
      store: store,
      quickViewButtonPosition: quickViewButtonPosition,
      quickViewButtonPositionOptions: quickViewButtonPositionOptions,
      quickViewButtonLabel: quickViewButtonLabel,
      quickViewModalContents: quickViewModalContents,
      quickViewModalProductImage: quickViewModalProductImage,
      quickViewModalProductImageOptions: quickViewModalProductImageOptions,
      quickViewEnableLightBox: quickViewEnableLightBox,
      quickViewModalEnableViewDetailButton: quickViewModalEnableViewDetailButton,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      storeToRefs: pinia__WEBPACK_IMPORTED_MODULE_3__.storeToRefs,
      Check: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      Close: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      Loading: _Loading_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      useOptionsStore: _stores_options__WEBPACK_IMPORTED_MODULE_2__.useOptionsStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2c85248e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "option-box-title"
};
var _hoisted_2 = {
  "class": "adfy-options"
};
var _hoisted_3 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Enable quick view"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Once enabled, it will be visible in product catalog. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "adfy-col right"
};
var _hoisted_6 = {
  "class": "input"
};
var _hoisted_7 = {
  key: 0,
  "class": "adfy-setting-options"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "option-box-title"
  }, "Button Options", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "adfy-options"
};
var _hoisted_10 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Button position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Choose where you want to show the quick view button. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  "class": "adfy-col right"
};
var _hoisted_13 = {
  "class": "input"
};
var _hoisted_14 = {
  "class": "adfy-options"
};
var _hoisted_15 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Button label")])], -1
  /* HOISTED */
  );
});

var _hoisted_17 = {
  "class": "adfy-col right"
};
var _hoisted_18 = {
  "class": "input"
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "option-box-title"
  }, "Modal Box Options", -1
  /* HOISTED */
  );
});

var _hoisted_20 = {
  "class": "adfy-options"
};
var _hoisted_21 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_22 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Content to display"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Which content would you like to display on quick view modal. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_23 = {
  "class": "adfy-col right"
};
var _hoisted_24 = {
  "class": "input"
};
var _hoisted_25 = {
  "class": "adfy-options"
};
var _hoisted_26 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Product thumbnail"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Choose whether you want to display single product image or gallery in quick view modal. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_28 = {
  "class": "adfy-col right"
};
var _hoisted_29 = {
  "class": "input"
};
var _hoisted_30 = {
  "class": "adfy-options"
};
var _hoisted_31 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, "Enable lightbox"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Enable lightbox for product images in quick view modal. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_33 = {
  "class": "adfy-col right"
};
var _hoisted_34 = {
  "class": "input"
};
var _hoisted_35 = {
  "class": "adfy-options"
};
var _hoisted_36 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "adfy-col left"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "label"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-label"
  }, " Display view detail button "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Enable display view detail button in modal. ")])], -1
  /* HOISTED */
  );
});

var _hoisted_38 = {
  "class": "adfy-col right"
};
var _hoisted_39 = {
  "class": "input"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-switch");

  var _component_el_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-option");

  var _component_el_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-select");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-checkbox");

  var _component_el_checkbox_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-checkbox-group");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    id: "adfy-settings-form",
    "class": "adfy-form",
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.store.options.general.section_label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.store.options.general.section_fields.enable_quick_view.value,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.store.options.general.section_fields.enable_quick_view.value = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), $setup.store.options.general.section_fields.enable_quick_view.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
    modelValue: $setup.quickViewButtonPosition,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.quickViewButtonPosition = $event;
    }),
    placeholder: "Select",
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.quickViewButtonPositionOptions, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8
        /* PROPS */
        , ["label", "value"]);
      }), 64
      /* STABLE_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
    modelValue: $setup.quickViewButtonLabel,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.quickViewButtonLabel = $event;
    }),
    size: "large",
    placeholder: "Quick view"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox_group, {
    modelValue: $setup.quickViewModalContents,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.quickViewModalContents = $event;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Image",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Title",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Price",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Rating",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Add to Cart",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Excerpt",
        size: "large"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox, {
        label: "Meta",
        size: "large"
      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
    modelValue: $setup.quickViewModalProductImage,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.quickViewModalProductImage = $event;
    }),
    placeholder: "Select",
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.quickViewModalProductImageOptions, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8
        /* PROPS */
        , ["label", "value"]);
      }), 64
      /* STABLE_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.quickViewEnableLightBox,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.quickViewEnableLightBox = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.quickViewModalEnableViewDetailButton,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.quickViewModalEnableViewDetailButton = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-setting-options ")], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-checkbox[data-v-2c85248e] {\n\t\t--el-checkbox-font-weight: normal;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./admin/src/components/form/Settings.vue":
/*!************************************************!*\
  !*** ./admin/src/components/form/Settings.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_2c85248e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=2c85248e&scoped=true */ "./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true");
/* harmony import */ var _Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&setup=true&lang=js */ "./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true */ "./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Settings_vue_vue_type_template_id_2c85248e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-2c85248e"],['__file',"admin/src/components/form/Settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true":
/*!******************************************************************************************!*\
  !*** ./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_2c85248e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_2c85248e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=template&id=2c85248e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=template&id=2c85248e&scoped=true");


/***/ }),

/***/ "./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true");


/***/ })

}]);