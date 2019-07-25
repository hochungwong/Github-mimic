webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: cacheRepo, getRepo, cacheReposArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheRepo", function() { return cacheRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepo", function() { return getRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheReposArray", function() { return cacheReposArray; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);


var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_1___default.a({
  //expired time: 1hr
  maxAge: 1000 * 60 * 60
});
function cacheRepo(repo) {
  var full_name = repo.full_name;
  cache.set(full_name, repo);
} // full_name: facebook/react

function getRepo(full_name) {
  return cache.get(full_name);
}
function cacheReposArray() {
  var repos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Array;

  // debugger;
  if (repos && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(repos)) {
    repos.forEach(function (repo) {
      return cacheRepo(repo);
    });
  }
}

/***/ })

})
//# sourceMappingURL=index.js.2006ca61b2619f6aae97.hot-update.js.map