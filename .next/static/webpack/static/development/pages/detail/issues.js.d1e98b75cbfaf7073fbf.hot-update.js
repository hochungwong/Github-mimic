webpackHotUpdate("static/development/pages/detail/issues.js",{

/***/ "./components/SearchUser.jsx":
/*!***********************************!*\
  !*** ./components/SearchUser.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");
/* harmony import */ var antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_7__);









var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a.Option;

function SearchUser() {
  var lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      fetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1]; //debounce 防抖


  var fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(function (value) {
    setFetching(true);
    setOptions([]); // !isServer

    _lib_api__WEBPACK_IMPORTED_MODULE_7___default.a.request({
      url: "/search/users?q=".concat(value)
    }).then(function (resp) {
      console.log('user', resp);
      var data = resp.data.items.map(function (user) {
        return {
          text: user.login,
          value: user.login
        };
      });
      setFetching(false);
      setOptions(data);
    });
  }, 500), []);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      width: 200
    },
    showSearch: true,
    notFoundContent: fetching ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "small"
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Nothing"),
    filterOption: false,
    placeholder: "Creator",
    allowClear: true,
    onSearch: fetchUser
  }, options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Option, {
      value: option.value,
      key: option.value
    }, option.text);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ })

})
//# sourceMappingURL=issues.js.d1e98b75cbfaf7073fbf.hot-update.js.map