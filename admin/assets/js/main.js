"use strict";
(self["webpackChunkaddonify_quick_view"] = self["webpackChunkaddonify_quick_view"] || []).push([["/js/main"],{

/***/ "./admin/src/main.js":
/*!***************************!*\
  !*** ./admin/src/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./admin/src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./admin/src/router/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-axios */ "./node_modules/vue-axios/dist/vue-axios.esm.min.js");
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/defaults2.mjs");
/* harmony import */ var element_plus_dist_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-plus/dist/index.css */ "./node_modules/element-plus/dist/index.css");








var pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_6__.createPinia)();
var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use(pinia);
app.use(_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
app.use(element_plus__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(vue_axios__WEBPACK_IMPORTED_MODULE_4__["default"], (axios__WEBPACK_IMPORTED_MODULE_3___default()));
app.mount("#___adfy-quickview-app___");

/***/ }),

/***/ "./admin/src/router/index.js":
/*!***********************************!*\
  !*** ./admin/src/router/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _views_Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Settings.vue */ "./admin/src/views/Settings.vue");
/* harmony import */ var _views_Styles_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Styles.vue */ "./admin/src/views/Styles.vue");
/* harmony import */ var _views_Products_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Products.vue */ "./admin/src/views/Products.vue");
/* harmony import */ var _views_404_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/404.vue */ "./admin/src/views/404.vue");





var routes = [{
  path: "/",
  name: "Settings",
  component: _views_Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: "/styles",
  name: "Styles",
  component: _views_Styles_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: "/products",
  name: "Products",
  component: _views_Products_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/:catchAll(.*)*',
  name: "404",
  component: _views_404_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHashHistory)(),
  routes: routes
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./admin/src/stores/options.js":
/*!*************************************!*\
  !*** ./admin/src/stores/options.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOptionsStore": () => (/* binding */ useOptionsStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/components/message/index2.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var BASE_API_URL = adfy_wp_locolizer.api_url;
var oldOptions = {};
var useOptionsStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__.defineStore)({
  id: 'Options',
  state: function state() {
    return {
      data: {},
      // Holds all datas like options, section, tab & fields.
      options: {},
      // Holds the old options to compare with the new ones.
      message: "",
      // Holds the message to be displayed to the user.
      isLoading: true,
      isSaving: false,
      needSave: false,
      errors: ""
    };
  },
  getters: {
    // ⚡️ Check if we need to save the options.
    needSave: function needSave(state) {
      return !lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(state.options, oldOptions) ? true : false;
    }
  },
  actions: {
    // ⚡️ Use Axios to get options from api.
    fetchOptions: function fetchOptions() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, settingsValues;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get(BASE_API_URL + 'get_options');

              case 2:
                res = _context.sent;

                try {
                  settingsValues = res.data.settings_values;
                  _this.data = res.data.tabs;
                  _this.options = settingsValues;
                  oldOptions = lodash__WEBPACK_IMPORTED_MODULE_1___default().cloneDeep(settingsValues);
                  _this.isLoading = false;
                } catch (err) {
                  _this.errors = err;
                  console.log(err);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ⚡️ Handle update options & map the values to the options object.
    handleUpdateOptions: function handleUpdateOptions() {
      var payload = {};
      var changedOptions = this.options;
      Object.keys(changedOptions).map(function (key) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(changedOptions[key], oldOptions[key])) {
          payload[key] = changedOptions[key];
        }
      });
      this.updateOptions(payload); //console.log(payload);
    },
    // ⚡️ Update options using Axios.
    updateOptions: function updateOptions(payload) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isSaving = true; // Set saving to true.

                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().post(BASE_API_URL + 'update_options', payload);

              case 3:
                res = _context2.sent;

                try {
                  //console.log(res);
                  _this2.isSaving = false; // Saving is completed here.

                  _this2.message = res.data.message; // Set the message to be displayed to the user.

                  if (res.data.success === true) {
                    element_plus__WEBPACK_IMPORTED_MODULE_3__.ElMessage.success({
                      message: _this2.message,
                      offset: 50,
                      duration: 3000
                    });
                  } else {
                    element_plus__WEBPACK_IMPORTED_MODULE_3__.ElMessage.error({
                      message: _this2.message,
                      offset: 50,
                      duration: 3000
                    });
                  }

                  _this2.fetchOptions(); // Fetch options again.

                } catch (err) {
                  _this2.errors = err;
                  console.log(err);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header.vue */ "./admin/src/components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer.vue */ "./admin/src/components/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Footer',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var rate = adfy_wp_locolizer.rate;
    var versionText = adfy_wp_locolizer.version;
    var versionNumber = adfy_wp_locolizer.version_number;
    var thisYear = new Date().getFullYear();
    var __returned__ = {
      rate: rate,
      versionText: versionText,
      versionNumber: versionNumber,
      thisYear: thisYear
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stores_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores/options */ "./admin/src/stores/options.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Header',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var _wp$i18n = wp.i18n,
        __ = _wp$i18n.__,
        _x = _wp$i18n._x,
        _n = _wp$i18n._n,
        _nx = _wp$i18n._nx;
    var store = (0,_stores_options__WEBPACK_IMPORTED_MODULE_0__.useOptionsStore)();
    var documentation = adfy_wp_locolizer.documentation;
    var saveOptions = adfy_wp_locolizer.save_options;
    var __returned__ = {
      __: __,
      _x: _x,
      _n: _n,
      _nx: _nx,
      store: store,
      documentation: documentation,
      saveOptions: saveOptions,
      useOptionsStore: _stores_options__WEBPACK_IMPORTED_MODULE_0__.useOptionsStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

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
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/eleme.mjs");
/* harmony import */ var _Loading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loading.vue */ "./admin/src/components/Loading.vue");
/* harmony import */ var _stores_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stores/options */ "./admin/src/stores/options.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Settings',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,_stores_options__WEBPACK_IMPORTED_MODULE_2__.useOptionsStore)(); //let { isLoading, needSave, options } = storeToRefs(store);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      store.fetchOptions();
    });
    var __returned__ = {
      store: store,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      storeToRefs: pinia__WEBPACK_IMPORTED_MODULE_3__.storeToRefs,
      Check: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      Close: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
      Eleme: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/check.mjs");
/* harmony import */ var _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @element-plus/icons-vue */ "./node_modules/@element-plus/icons-vue/dist/es/close.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Styles',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var enableQuickViewPluginStyles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var overlayBgColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var modalBgColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#FFFFFF");
    var productTitleColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var productIsUnratedColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#d3ced2");
    var productIsRatedColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#f5c40e");
    var regularPriceColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var onsalePriceColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#FF0000");
    var productExcerptColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var productMetaColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var productMetaHoverColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#0286e7");
    var closeButtonColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#ffffff");
    var closeButtonHoverColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#ffffff");
    var closeButtonBgColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var closeButtonBgHoverColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#0286e7");
    var otherButtonTextColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#ffffff");
    var otherButtonTextHoverColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#ffffff");
    var otherButtonBgColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#000000");
    var otherButtonBgHoverColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("#0286e7");
    var customCSS = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");
    var __returned__ = {
      enableQuickViewPluginStyles: enableQuickViewPluginStyles,
      overlayBgColor: overlayBgColor,
      modalBgColor: modalBgColor,
      productTitleColor: productTitleColor,
      productIsUnratedColor: productIsUnratedColor,
      productIsRatedColor: productIsRatedColor,
      regularPriceColor: regularPriceColor,
      onsalePriceColor: onsalePriceColor,
      productExcerptColor: productExcerptColor,
      productMetaColor: productMetaColor,
      productMetaHoverColor: productMetaHoverColor,
      closeButtonColor: closeButtonColor,
      closeButtonHoverColor: closeButtonHoverColor,
      closeButtonBgColor: closeButtonBgColor,
      closeButtonBgHoverColor: closeButtonBgHoverColor,
      otherButtonTextColor: otherButtonTextColor,
      otherButtonTextHoverColor: otherButtonTextHoverColor,
      otherButtonBgColor: otherButtonBgColor,
      otherButtonBgHoverColor: otherButtonBgHoverColor,
      customCSS: customCSS,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Check: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      Close: _element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./admin/src/components/Navigation.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Products",
  components: {
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_form_Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/form/Settings.vue */ "./admin/src/components/form/Settings.vue");
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation.vue */ "./admin/src/components/Navigation.vue");
 //import xSettings from "../components/form/xSettings.vue";
//import xSettings from "../components/form/xSettings.vue";
//import Options from "../components/form/Options.vue";

 //import Loading from "../components/Loading.vue";
//import { storeToRefs } from "pinia";
//import { useOptionsStore } from "../stores/options";
//const store = useOptionsStore();
//const { loading } = storeToRefs(store);
//onMounted(() => {
//	store.getOptions();
//});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Settings',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose(); //import { onMounted, defineAsyncComponent } from "vue";

    var __returned__ = {
      Settings: _components_form_Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./admin/src/components/Navigation.vue");
/* harmony import */ var _components_form_Styles_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form/Styles.vue */ "./admin/src/components/form/Styles.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Styles",
  components: {
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    StyleForm: _components_form_Styles_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=template&id=20c9a2f8":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=template&id=20c9a2f8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Header"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Footer"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=template&id=593cefea":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=template&id=593cefea ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-colopon"
};
var _hoisted_2 = {
  "class": "adfy-row"
};
var _hoisted_3 = {
  "class": "adfy-col left"
};
var _hoisted_4 = {
  "class": "text"
};
var _hoisted_5 = {
  "class": "version"
};
var _hoisted_6 = {
  "class": "adfy-col right"
};
var _hoisted_7 = {
  "class": "text"
};
var _hoisted_8 = {
  href: "#",
  "class": "adfy-link",
  target: "_blank"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"icon\"><i class=\"dashicons dashicons-star-filled\"></i><i class=\"dashicons dashicons-star-filled\"></i><i class=\"dashicons dashicons-star-filled\"></i><i class=\"dashicons dashicons-star-filled\"></i><i class=\"dashicons dashicons-star-filled\"></i></span> :) ", 2);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" © " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.thisYear) + " Addonify Quick View ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.versionText) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.versionNumber), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.rate) + " ", 1
  /* TEXT */
  ), _hoisted_9])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=template&id=16d82806":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=template&id=16d82806 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-header"
};
var _hoisted_2 = {
  "class": "adfy-row"
};
var _hoisted_3 = {
  "class": "adfy-col start"
};
var _hoisted_4 = {
  "class": "branding"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "logo",
  viewBox: "0 0 128 128",
  width: "42",
  height: "42"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "#42b883",
  d: "M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z",
  "data-v-1c32dc7e": ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "#35495e",
  d: "M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z",
  "data-v-1c32dc7e": ""
})], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "adfy-col end"
};
var _hoisted_7 = {
  "class": "buttons"
};
var _hoisted_8 = {
  href: "#",
  "class": "adfy-button fake-button has-underline"
};
var _hoisted_9 = ["disabled", "loading"];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "loading-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "adfy-link",
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.documentation), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.store.handleUpdateOptions();
    }),
    "class": "adfy-button",
    disabled: !$setup.store.needSave,
    loading: $setup.store.isSaving
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.__("Save Option Hi", "addonify-quick-view")), 1
  /* TEXT */
  )], 8
  /* PROPS */
  , _hoisted_9)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-loading"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pulse"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-navigation"
};
var _hoisted_2 = {
  "class": "navigation"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
})])], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Settings ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"
})])], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Styles ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM1 5h2v4H1V5zm20 0h2v4h-2V5z"
})])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Products ");

function render(_ctx, _cache) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, _hoisted_4];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/styles"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5, _hoisted_6];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/products"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, _hoisted_8];
    }),
    _: 1
    /* STABLE */

  })])])]);
}

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

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "option-box-title"
  }, "General", -1
  /* HOISTED */
  );
});

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
  }, "Button label")])], -1
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
  }, "Button position"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "option-description"
  }, " Choose where you want to show the quick view button. ")])], -1
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

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-option");

  var _component_el_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-select");

  var _component_el_checkbox_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-checkbox-button");

  var _component_el_checkbox_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-checkbox-group");

  return $setup.store.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Loading"], {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 1,
    id: "adfy-settings-form",
    "class": "adfy-form",
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.store.options.enable_quick_view,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.store.options.enable_quick_view = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), $setup.store.options.enable_quick_view ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
    modelValue: $setup.store.options.quick_view_btn_label,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.store.options.quick_view_btn_label = $event;
    }),
    size: "large",
    placeholder: "Quick view"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
    modelValue: $setup.store.options.quick_view_btn_position,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.store.options.quick_view_btn_position = $event;
    }),
    placeholder: "Select",
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.data.settings.sections.button.fields.quick_view_btn_position.choices, function (label, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
          label: label,
          value: key
        }, null, 8
        /* PROPS */
        , ["label", "value"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_checkbox_group, {
    modelValue: $setup.store.options.modal_box_content,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.store.options.modal_box_content = $event;
    }),
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.data.settings.sections.modal.fields.modal_box_content.choices, function (label, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_checkbox_button, {
          label: key
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(label), 1
            /* TEXT */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["label"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
    modelValue: $setup.store.options.product_thumbnail,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.store.options.product_thumbnail = $event;
    }),
    placeholder: "Select",
    size: "large"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.store.data.settings.sections.modal.fields.product_thumbnail.choices, function (label, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
          label: label,
          value: key
        }, null, 8
        /* PROPS */
        , ["label", "value"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.store.options.enable_lightbox,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.store.options.enable_lightbox = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.store.options.display_read_more_button,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.store.options.display_read_more_button = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-settings-options ")], 32
  /* HYDRATE_EVENTS */
  ));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "option-box-title"
}, "General", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "adfy-options"
};
var _hoisted_3 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"adfy-col left\"><div class=\"label\"><p class=\"option-label\"> Enable plugin styles <span class=\"badge\"> Optional </span></p><p class=\"option-description\"> If enabled, the colors selected below will be applied to the quick view modal &amp; elements. </p></div></div>", 1);

var _hoisted_5 = {
  "class": "adfy-col right"
};
var _hoisted_6 = {
  key: 0,
  "class": "input"
};
var _hoisted_7 = {
  key: 1,
  "class": "input"
};
var _hoisted_8 = {
  key: 0,
  "class": "adfy-color-options"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "option-box-title"
}, "Modal", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "adfy-options"
};
var _hoisted_11 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Modal box color"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-description"
}, " Change the look & feel of modal box. ")])], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "adfy-col right"
};
var _hoisted_14 = {
  "class": "input-group"
};
var _hoisted_15 = {
  "class": "input"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Overlay background color", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "input"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Modal background color", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "option-box-title"
}, "Modal Box Content", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "adfy-options"
};
var _hoisted_21 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Product title color")])], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "adfy-col right"
};
var _hoisted_24 = {
  "class": "input-group"
};
var _hoisted_25 = {
  "class": "input"
};
var _hoisted_26 = {
  "class": "adfy-options"
};
var _hoisted_27 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Product rating color")])], -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "adfy-col right"
};
var _hoisted_30 = {
  "class": "input-group"
};
var _hoisted_31 = {
  "class": "input"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "If product is unrated", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "input"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "If product is rated", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "adfy-options"
};
var _hoisted_36 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Product price color")])], -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "adfy-col right"
};
var _hoisted_39 = {
  "class": "input-group"
};
var _hoisted_40 = {
  "class": "input"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Regular price", -1
/* HOISTED */
);

var _hoisted_42 = {
  "class": "input"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "On sale price", -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "adfy-options"
};
var _hoisted_45 = {
  "class": "adfy-option-columns option-box"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Product excerpt color")])], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "adfy-col right"
};
var _hoisted_48 = {
  "class": "input-group"
};
var _hoisted_49 = {
  "class": "input"
};
var _hoisted_50 = {
  "class": "adfy-options"
};
var _hoisted_51 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Product meta color")])], -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "adfy-col right"
};
var _hoisted_54 = {
  "class": "input-group"
};
var _hoisted_55 = {
  "class": "input"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default", -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "input"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "On mouse hover", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "option-box-title"
}, "Buttons Inside Modal Box", -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "adfy-options"
};
var _hoisted_61 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Close button color"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-description"
}, " Change the look & feel of close modal box button. ")])], -1
/* HOISTED */
);

var _hoisted_63 = {
  "class": "adfy-col right"
};
var _hoisted_64 = {
  "class": "input-group"
};
var _hoisted_65 = {
  "class": "input"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default text", -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "input"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Text color on mouse hover", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "input"
};

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default background", -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "input"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Background color on mouse hover", -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "adfy-options"
};
var _hoisted_74 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, " Miscellaneous buttons color ")])], -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "adfy-col right"
};
var _hoisted_77 = {
  "class": "input-group"
};
var _hoisted_78 = {
  "class": "input"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default text", -1
/* HOISTED */
);

var _hoisted_80 = {
  "class": "input"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Text on mouse hover", -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "input"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default background", -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "input"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Background color on mouse hover", -1
/* HOISTED */
);

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "option-box-title"
}, "Developer", -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "adfy-options"
};
var _hoisted_88 = {
  "class": "adfy-option-columns option-box fullwidth"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "adfy-col left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-label"
}, "Custom CSS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "option-description"
}, " If required, you may add your own custom CSS code here. ")])], -1
/* HOISTED */
);

var _hoisted_90 = {
  "class": "adfy-col right"
};
var _hoisted_91 = {
  "class": "input"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-switch");

  var _component_el_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-tooltip");

  var _component_el_color_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-color-picker");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    id: "adfy-styles-form",
    "class": "adfy-form",
    onSubmit: _cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [!$setup.enableQuickViewPluginStyles ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_tooltip, {
    content: "You may encounter issues with the theme styles if enabled.",
    placement: "top"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
        modelValue: $setup.enableQuickViewPluginStyles,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.enableQuickViewPluginStyles = $event;
        }),
        "class": "enable-addonify-quick-view",
        size: "large",
        "inline-prompt": "",
        "active-icon": $setup.Check,
        "inactive-icon": $setup.Close
      }, null, 8
      /* PROPS */
      , ["modelValue", "active-icon", "inactive-icon"])];
    }),
    _: 1
    /* STABLE */

  })])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_switch, {
    modelValue: $setup.enableQuickViewPluginStyles,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.enableQuickViewPluginStyles = $event;
    }),
    "class": "enable-addonify-quick-view",
    size: "large",
    "inline-prompt": "",
    "active-icon": $setup.Check,
    "inactive-icon": $setup.Close
  }, null, 8
  /* PROPS */
  , ["modelValue", "active-icon", "inactive-icon"])]))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), $setup.enableQuickViewPluginStyles ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.overlayBgColor,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.overlayBgColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.modalBgColor,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.modalBgColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_18])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productTitleColor,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.productTitleColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productIsUnratedColor,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.productIsUnratedColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productIsRatedColor,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.productIsRatedColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_34])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.regularPriceColor,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.regularPriceColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_41]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.onsalePriceColor,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.onsalePriceColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_43])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productExcerptColor,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.productExcerptColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productMetaColor,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.productMetaColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_56]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.productMetaHoverColor,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.productMetaHoverColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_58])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.closeButtonColor,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.closeButtonColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_66]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.closeButtonHoverColor,
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.closeButtonHoverColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_68]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.closeButtonBgColor,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.closeButtonBgColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_70]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.closeButtonBgHoverColor,
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.closeButtonBgHoverColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_72])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.otherButtonTextColor,
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.otherButtonTextColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_79]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.otherButtonTextHoverColor,
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.otherButtonTextHoverColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_81]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.otherButtonBgColor,
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.otherButtonBgColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_83]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_color_picker, {
    modelValue: $setup.otherButtonBgHoverColor,
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.otherButtonBgHoverColor = $event;
    }),
    "show-alpha": ""
  }, null, 8
  /* PROPS */
  , ["modelValue"]), _hoisted_85])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options "), _hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [_hoisted_89, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
    modelValue: $setup.customCSS,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $setup.customCSS = $event;
    }),
    "class": "custom-css-box",
    type: "textarea",
    rows: "10",
    placeholder: "#app { color: blue }",
    resize: "vertical",
    "input-style": "display:block;width: 100%;"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" // adfy-options ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/404.vue?vue&type=template&id=155f1cce":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/404.vue?vue&type=template&id=155f1cce ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h3", null, "404 route not found!");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=template&id=62ebf7de":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=template&id=62ebf7de ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-container"
};
var _hoisted_2 = {
  "class": "adfy-columns main-content"
};
var _hoisted_3 = {
  "class": "adfy-col start aside"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "adfy-col end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Coming soon.....")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation)]), _hoisted_4])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=template&id=45416b1d":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=template&id=45416b1d ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-container"
};
var _hoisted_2 = {
  "class": "adfy-columns main-content"
};
var _hoisted_3 = {
  "class": "adfy-col start aside"
};
var _hoisted_4 = {
  "class": "adfy-col end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Navigation"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Settings"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<xSettings />"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("<Options />")])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "adfy-container"
};
var _hoisted_2 = {
  "class": "adfy-columns main-content"
};
var _hoisted_3 = {
  "class": "adfy-col start aside"
};
var _hoisted_4 = {
  "class": "adfy-col end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");

  var _component_StyleForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("StyleForm");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_StyleForm)])])]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-checkbox[data-v-2c85248e] {\n\t\t--el-checkbox-font-weight: normal;\n}\n.el-select-dropdown__item.selected[data-v-2c85248e] {\n\t\tfont-weight: normal;\n}\n.el-message--success[data-v-2c85248e] {\n\t\t-el-message-text-color: #2f8e00;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.adfy-options .tooltip-base-box {\n\t\twidth: 400px;\n}\n.adfy-options .el-textarea__inner {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tfont-family: monospace;\n\t\tmin-height: 200px;\n}\n.adfy-options .el-color-picker__trigger,\n\t.adfy-options .el-color-picker__color,\n\t.adfy-options .el-color-picker__color-inner {\n\t\tborder-radius: 100%;\n}\n.adfy-options .el-color-picker__color {\n\t\tborder: none;\n}\n.adfy-options .el-color-picker__trigger {\n\t\theight: 36px;\n\t\twidth: 36px;\n\t\tpadding: 5px;\n\t\tborder: 2px dotted #bbbbbb;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./admin/assets/scss/index.scss":
/*!**************************************!*\
  !*** ./admin/assets/scss/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_style_index_0_id_07be428d_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=style&index=0&id=07be428d&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_style_index_0_id_07be428d_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_style_index_0_id_07be428d_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./admin/src/App.vue":
/*!***************************!*\
  !*** ./admin/src/App.vue ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_20c9a2f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=20c9a2f8 */ "./admin/src/App.vue?vue&type=template&id=20c9a2f8");
/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ "./admin/src/App.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_20c9a2f8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/components/Footer.vue":
/*!*****************************************!*\
  !*** ./admin/src/components/Footer.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_593cefea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=593cefea */ "./admin/src/components/Footer.vue?vue&type=template&id=593cefea");
/* harmony import */ var _Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&setup=true&lang=js */ "./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_593cefea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/components/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/components/Header.vue":
/*!*****************************************!*\
  !*** ./admin/src/components/Header.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_16d82806__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=16d82806 */ "./admin/src/components/Header.vue?vue&type=template&id=16d82806");
/* harmony import */ var _Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&setup=true&lang=js */ "./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_16d82806__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/components/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/components/Loading.vue":
/*!******************************************!*\
  !*** ./admin/src/components/Loading.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading_vue_vue_type_template_id_4c22db7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=4c22db7c */ "./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Loading_vue_vue_type_template_id_4c22db7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/components/Loading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/components/Navigation.vue":
/*!*********************************************!*\
  !*** ./admin/src/components/Navigation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_4a058c04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=4a058c04 */ "./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Navigation_vue_vue_type_template_id_4a058c04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/components/Navigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./admin/src/components/form/Styles.vue":
/*!**********************************************!*\
  !*** ./admin/src/components/form/Styles.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Styles_vue_vue_type_template_id_07be428d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles.vue?vue&type=template&id=07be428d */ "./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d");
/* harmony import */ var _Styles_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Styles.vue?vue&type=script&setup=true&lang=js */ "./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Styles_vue_vue_type_style_index_0_id_07be428d_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Styles.vue?vue&type=style&index=0&id=07be428d&lang=css */ "./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Styles_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Styles_vue_vue_type_template_id_07be428d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/components/form/Styles.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/views/404.vue":
/*!*********************************!*\
  !*** ./admin/src/views/404.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _404_vue_vue_type_template_id_155f1cce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=155f1cce */ "./admin/src/views/404.vue?vue&type=template&id=155f1cce");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_404_vue_vue_type_template_id_155f1cce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/views/404.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/views/Products.vue":
/*!**************************************!*\
  !*** ./admin/src/views/Products.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_62ebf7de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=62ebf7de */ "./admin/src/views/Products.vue?vue&type=template&id=62ebf7de");
/* harmony import */ var _Products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js */ "./admin/src/views/Products.vue?vue&type=script&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Products_vue_vue_type_template_id_62ebf7de__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/views/Products.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/views/Settings.vue":
/*!**************************************!*\
  !*** ./admin/src/views/Settings.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_45416b1d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=45416b1d */ "./admin/src/views/Settings.vue?vue&type=template&id=45416b1d");
/* harmony import */ var _Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&setup=true&lang=js */ "./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Settings_vue_vue_type_template_id_45416b1d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/views/Settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/views/Styles.vue":
/*!************************************!*\
  !*** ./admin/src/views/Styles.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Styles_vue_vue_type_template_id_9eae3e48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles.vue?vue&type=template&id=9eae3e48 */ "./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48");
/* harmony import */ var _Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Styles.vue?vue&type=script&lang=js */ "./admin/src/views/Styles.vue?vue&type=script&lang=js");
/* harmony import */ var _media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_media_dev_sda2_code_Localwp_vuewp_app_public_wp_content_plugins_addonify_quick_view_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Styles_vue_vue_type_template_id_9eae3e48__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"admin/src/views/Styles.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./admin/src/App.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************!*\
  !*** ./admin/src/App.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./admin/src/views/Products.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./admin/src/views/Products.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./admin/src/views/Styles.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./admin/src/views/Styles.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./admin/src/App.vue?vue&type=template&id=20c9a2f8":
/*!*********************************************************!*\
  !*** ./admin/src/App.vue?vue&type=template&id=20c9a2f8 ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_20c9a2f8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_20c9a2f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=20c9a2f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/App.vue?vue&type=template&id=20c9a2f8");


/***/ }),

/***/ "./admin/src/components/Footer.vue?vue&type=template&id=593cefea":
/*!***********************************************************************!*\
  !*** ./admin/src/components/Footer.vue?vue&type=template&id=593cefea ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_593cefea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_593cefea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=593cefea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Footer.vue?vue&type=template&id=593cefea");


/***/ }),

/***/ "./admin/src/components/Header.vue?vue&type=template&id=16d82806":
/*!***********************************************************************!*\
  !*** ./admin/src/components/Header.vue?vue&type=template&id=16d82806 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_16d82806__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_16d82806__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=16d82806 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Header.vue?vue&type=template&id=16d82806");


/***/ }),

/***/ "./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c":
/*!************************************************************************!*\
  !*** ./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_template_id_4c22db7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loading_vue_vue_type_template_id_4c22db7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loading.vue?vue&type=template&id=4c22db7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Loading.vue?vue&type=template&id=4c22db7c");


/***/ }),

/***/ "./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04":
/*!***************************************************************************!*\
  !*** ./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_4a058c04__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_4a058c04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=template&id=4a058c04 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/Navigation.vue?vue&type=template&id=4a058c04");


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

/***/ "./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d":
/*!****************************************************************************!*\
  !*** ./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_template_id_07be428d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_template_id_07be428d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=template&id=07be428d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=template&id=07be428d");


/***/ }),

/***/ "./admin/src/views/404.vue?vue&type=template&id=155f1cce":
/*!***************************************************************!*\
  !*** ./admin/src/views/404.vue?vue&type=template&id=155f1cce ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_404_vue_vue_type_template_id_155f1cce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_404_vue_vue_type_template_id_155f1cce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./404.vue?vue&type=template&id=155f1cce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/404.vue?vue&type=template&id=155f1cce");


/***/ }),

/***/ "./admin/src/views/Products.vue?vue&type=template&id=62ebf7de":
/*!********************************************************************!*\
  !*** ./admin/src/views/Products.vue?vue&type=template&id=62ebf7de ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_template_id_62ebf7de__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Products_vue_vue_type_template_id_62ebf7de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Products.vue?vue&type=template&id=62ebf7de */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Products.vue?vue&type=template&id=62ebf7de");


/***/ }),

/***/ "./admin/src/views/Settings.vue?vue&type=template&id=45416b1d":
/*!********************************************************************!*\
  !*** ./admin/src/views/Settings.vue?vue&type=template&id=45416b1d ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_45416b1d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_template_id_45416b1d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=template&id=45416b1d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Settings.vue?vue&type=template&id=45416b1d");


/***/ }),

/***/ "./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48":
/*!******************************************************************!*\
  !*** ./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_template_id_9eae3e48__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_template_id_9eae3e48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=template&id=9eae3e48 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/views/Styles.vue?vue&type=template&id=9eae3e48");


/***/ }),

/***/ "./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Settings_vue_vue_type_style_index_0_id_2c85248e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Settings.vue?vue&type=style&index=0&id=2c85248e&lang=css&scoped=true");


/***/ }),

/***/ "./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css":
/*!******************************************************************************************!*\
  !*** ./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Styles_vue_vue_type_style_index_0_id_07be428d_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Styles.vue?vue&type=style&index=0&id=07be428d&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./admin/src/components/form/Styles.vue?vue&type=style&index=0&id=07be428d&lang=css");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/admin","/js/vendor"], () => (__webpack_exec__("./admin/src/main.js"), __webpack_exec__("./admin/assets/scss/index.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);