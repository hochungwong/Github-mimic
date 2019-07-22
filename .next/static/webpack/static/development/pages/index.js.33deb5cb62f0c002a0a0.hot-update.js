webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Repo.jsx":
/*!*****************************!*\
  !*** ./components/Repo.jsx ***!
  \*****************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);







function getLicense(license) {
  return license ? "".concat(license.spdx_id, " license") : '';
}

function getLastUpdated(time) {
  return moment__WEBPACK_IMPORTED_MODULE_5___default()(time).fromNow();
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var repo = _ref.repo;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3802605060" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3802605060" + " " + "basic-info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-3802605060" + " " + "repo-tit"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/detail?owner=".concat(repo.owner.login, "&name=").concat(repo.name)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-3802605060"
  }, repo.full_name))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3802605060" + " " + "repo-desc"
  }, repo.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3802605060" + " " + "other-info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3802605060" + " " + "license"
  }, getLicense(repo.license)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3802605060" + " " + "last-updated"
  }, getLastUpdated(repo.updated_at)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3802605060" + " " + "open-issues"
  }, repo.open_issues_count))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3802605060" + " " + "lang-star"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3802605060" + " " + "lang"
  }, repo.language), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-3802605060" + " " + "star"
  }, repo.stargazers_count, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "star",
    theme: "filled"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3802605060"
  }, ".root.jsx-3802605060{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-3802605060>span.jsx-3802605060+.other-info.jsx-3802605060>span.jsx-3802605060{margin-right:10px;}.root.jsx-3802605060+.root.jsx-3802605060{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-3802605060{font-size:20px;}.lang-star.jsx-3802605060{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-start.jsx-3802605060>span.jsx-3802605060{width:120px;text-align:right;}.repo-desc.jsx-3802605060{width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9SZXBvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3dCLEFBR2tDLEFBSUssQUFHUSxBQUlYLEFBR0YsQUFHRCxBQUlBLFlBSEssQUFJckIsR0FWQSxHQVBBLFFBR3FCLEdBV3JCLGNBVkEsK0JBUmtDLEFBY2xDLG1IQWJBIiwiZmlsZSI6Ii9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9SZXBvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmZ1bmN0aW9uIGdldExpY2Vuc2UobGljZW5zZSkge1xuICAgIHJldHVybiBsaWNlbnNlID8gYCR7bGljZW5zZS5zcGR4X2lkfSBsaWNlbnNlYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0VXBkYXRlZCh0aW1lKSB7XG4gICAgcmV0dXJuIG1vbWVudCh0aW1lKS5mcm9tTm93KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcG8gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhID57cmVwby5mdWxsX25hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXBvLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlcG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm90aGVyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2dldExpY2Vuc2UocmVwby5saWNlbnNlKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LXVwZGF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRMYXN0VXBkYXRlZChyZXBvLnVwZGF0ZWRfYXQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVwby5vcGVuX2lzc3Vlc19jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5nLXN0YXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT0nc3RhcicgdGhlbWU9XCJmaWxsZWRcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdGhlci1pbmZvID4gc3BhbiArIC5vdGhlci1pbmZvID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvb3QgKyAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlcG8tdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYW5nLXN0YXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGFuZy1zdGFydCA+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVwby1kZXNjIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/components/Repo.jsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.33deb5cb62f0c002a0a0.hot-update.js.map