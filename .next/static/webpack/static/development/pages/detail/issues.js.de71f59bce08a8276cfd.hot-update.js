webpackHotUpdate("static/development/pages/detail/issues.js",{

/***/ "./components/Repos.jsx":
/*!******************************!*\
  !*** ./components/Repos.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






function getLicense(license) {
  return license ? "".concat(license.spdx_id, " license") : '';
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var repo = _ref.repo;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1118865391" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1118865391" + " " + "basic-info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-1118865391" + " " + "repo-tit"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/detail?owner=".concat(repo.owner.login, "&name=").concat(repo.name)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-1118865391"
  }, repo.full_name))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1118865391" + " " + "repo-desc"
  }, repo.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1118865391" + " " + "other-info"
  }, repo.license ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1118865391" + " " + "license"
  }, getLicense(repo.license)) : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1118865391" + " " + "last-updated"
  }, getLastUpdated(repo.updated_at)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1118865391" + " " + "open-issues"
  }, repo.open_issues_count, " open issues"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1118865391" + " " + "lang-star"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1118865391" + " " + "lang"
  }, repo.language), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1118865391" + " " + "star"
  }, repo.stargazers_count, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "star",
    theme: "filled"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1118865391"
  }, ".root.jsx-1118865391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-1118865391>span.jsx-1118865391+span.jsx-1118865391{margin-left:10px;}.root.jsx-1118865391+.root.jsx-1118865391{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-1118865391{font-size:20px;}.lang-star.jsx-1118865391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-1118865391>span.jsx-1118865391{width:120px;text-align:right;}.repo-desc.jsx-1118865391{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9SZXBvcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUdrQyxBQUlJLEFBR1MsQUFJWCxBQUdGLEFBR0QsQUFJQSxZQUhLLEFBSXJCLEdBVkEsRUFQQSxTQUdxQixHQVdyQixjQVZBLCtCQVJrQyxBQWNsQyxtSEFiQSIsImZpbGUiOiIvVXNlcnMvaG9jaHVuZ3dvbmcvRG9jdW1lbnRzL1JlYWN0L25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvUmVwb3MuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJztcblxuZnVuY3Rpb24gZ2V0TGljZW5zZShsaWNlbnNlKSB7XG4gICAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcG8gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhID57cmVwby5mdWxsX25hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlcG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm90aGVyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwby5saWNlbnNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpY2Vuc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldExpY2Vuc2UocmVwby5saWNlbnNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dldExhc3RVcGRhdGVkKHJlcG8udXBkYXRlZF9hdCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1pc3N1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvLm9wZW5faXNzdWVzX2NvdW50fSBvcGVuIGlzc3Vlc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctc3RhclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhbmdcIj57cmVwby5sYW5ndWFnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhclwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVwby5zdGFyZ2F6ZXJzX2NvdW50fVxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPSdzdGFyJyB0aGVtZT1cImZpbGxlZFwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm90aGVyLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucm9vdCArIC5yb290IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVwby10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhbmctc3RhciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYW5nLXN0YXIgID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXBvLWRlc2Mge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il19 */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/components/Repos.jsx */"));
});

/***/ }),

/***/ "./node_modules/moment/moment.js":
false

})
//# sourceMappingURL=issues.js.de71f59bce08a8276cfd.hot-update.js.map