webpackHotUpdate("static/development/pages/detail/issues.js",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_11__);













var MdRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx")];
    },
    modules: ['../../components/MarkdownRenderer']
  }
});

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1321320512" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MdRenderer, {
    content: issue.body
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1321320512" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "Open Issue Discussion")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1321320512"
  }, ".root.jsx-1321320512{background:#fefefe;padding:20px;}.actions.jsx-1321320512{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QndCLEFBR3dDLEFBS3hCLGlCQUFDLEVBSmlCLGFBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmltcG9ydCB3aXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljJztcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2xpYi9hcGknO1xuXG5jb25zdCBNZFJlbmRlcmVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXJlcicpKTtcblxuZnVuY3Rpb24gSXNzdWVEZXRhaWwoeyBpc3N1ZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCIgPlxuICAgICAgICAgICAgPE1kUmVuZGVyZXIgXG4gICAgICAgICAgICAgICAgY29udGVudD17aXNzdWUuYm9keX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpc3N1ZS5odG1sX3VybH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE9wZW4gSXNzdWUgRGlzY3Vzc2lvblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIElzc3VlSXRlbSh7IGlzc3VlIH0pIHtcbiAgICBcbiAgICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvL2F2b2lkIGNsb3N1cmVcbiAgICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaG93RGV0YWlsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeyBzaG93RGV0YWlsID8gJ0hpZGUgSXNzdWUnIDogJ1ZpZXcgSXNzdWUnIH0gICAgICBcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT0nc3F1YXJlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NTB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2lzc3VlLnVwZGF0ZWRfYXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuaXNzdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IHNob3dEZXRhaWwgPyA8SXNzdWVEZXRhaWwgaXNzdWU9eyBpc3N1ZSB9IC8+IDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSXNzdWVzKHsgaXNzdWVzIH0pIHtcbiAgICBjb25zb2xlLmxvZyhpc3N1ZXMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cbiAgICAgICAgICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaXNzdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5O1xuXG4gICAgY29uc3QgaXNzdWVSZXNwID0gYXdhaXQgYXBpLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpc3N1ZXM6IGlzc3VlUmVzcC5kYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIDsiXX0= */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/detail/issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1]; //avoid closure


  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-535737749" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? 'Hide Issue' : 'View Issue'), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-535737749" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-535737749" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
    className: "jsx-535737749"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "jsx-535737749"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-535737749" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "jsx-535737749"
  }, "Updated at ", issue.updated_at))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "535737749"
  }, ".issue.jsx-535737749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-535737749:hover{background:#fafafa;}.issue.jsx-535737749+.issue.jsx-535737749{border-top:1px solid #eee;}.main-info.jsx-535737749>h6.jsx-535737749{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-535737749{margin-right:20px;}.sub-info.jsx-535737749{margin-bottom:0;}.sub-info.jsx-535737749>span.jsx-535737749+span.jsx-535737749{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RTRCLEFBR3NDLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUW5CLEVBSEEsQ0FYQSxFQWlCcUIsS0FkckIsS0FJdUIsT0FXSixZQVZuQixHQVdBLHFCQXhCc0Isa0JBRXZCLGFBQUMiLCJmaWxlIjoiL1VzZXJzL2hvY2h1bmd3b25nL0RvY3VtZW50cy9SZWFjdC9uZXh0anMtcHJvamVjdC9wYWdlcy9kZXRhaWwvaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuaW1wb3J0IHdpdGhSZXBvQmFzaWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMnO1xuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSc7XG5cbmNvbnN0IE1kUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcmVyJykpO1xuXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7IGlzc3VlIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiA+XG4gICAgICAgICAgICA8TWRSZW5kZXJlciBcbiAgICAgICAgICAgICAgICBjb250ZW50PXtpc3N1ZS5ib2R5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2lzc3VlLmh0bWxfdXJsfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgT3BlbiBJc3N1ZSBEaXNjdXNzaW9uXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSXNzdWVJdGVtKHsgaXNzdWUgfSkge1xuICAgIFxuICAgIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vYXZvaWQgY2xvc3VyZVxuICAgIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7IHNob3dEZXRhaWwgPyAnSGlkZSBJc3N1ZScgOiAnVmlldyBJc3N1ZScgfSAgICAgIFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPSdzcXVhcmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7aXNzdWUudXBkYXRlZF9hdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5pc3N1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgc2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17IGlzc3VlIH0gLz4gOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZXMoeyBpc3N1ZXMgfSkge1xuICAgIGNvbnNvbGUubG9nKGlzc3Vlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxuICAgICAgICAgICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfS8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pc3N1ZXMge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgICBcbiAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XG5cbiAgICBjb25zdCBpc3N1ZVJlc3AgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzc3VlczogaXNzdWVSZXNwLmRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvQmFzaWMoSXNzdWVzLCAnaXNzdWVzJykgOyJdfQ== */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/detail/issues.js */")), showDetail ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IssueDetail, {
    issue: issue
  }) : null);
}

function Issues(_ref3) {
  var issues = _ref3.issues;
  console.log(issues);
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1137824294" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1137824294" + " " + "issues"
  }, issues.map(function (issue) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1137824294"
  }, ".issues.jsx-1137824294{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSHdCLEFBRzJDLHNCQUNKLGtCQUNDLG1CQUNILGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvaG9jaHVuZ3dvbmcvRG9jdW1lbnRzL1JlYWN0L25leHRqcy1wcm9qZWN0L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5pbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYyc7XG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJztcblxuY29uc3QgTWRSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXInKSk7XG5cbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHsgaXNzdWUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiID5cbiAgICAgICAgICAgIDxNZFJlbmRlcmVyIFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzc3VlLmJvZHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXNzdWUuaHRtbF91cmx9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBPcGVuIElzc3VlIERpc2N1c3Npb25cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oeyBpc3N1ZSB9KSB7XG4gICAgXG4gICAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy9hdm9pZCBjbG9zdXJlXG4gICAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0U2hvd0RldGFpbChkZXRhaWwgPT4gIWRldGFpbCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvd0RldGFpbCA/ICdIaWRlIElzc3VlJyA6ICdWaWV3IElzc3VlJyB9ICAgICAgXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9J3NxdWFyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezUwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmlzc3VlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXsgaXNzdWUgfSAvPiA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIElzc3Vlcyh7IGlzc3VlcyB9KSB7XG4gICAgY29uc29sZS5sb2coaXNzdWVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmlzc3VlcyB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbklzc3Vlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHggfSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcblxuICAgIGNvbnN0IGlzc3VlUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICAgIH0sIGN0eC5yZXEsIGN0eC5yZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNzdWVzOiBpc3N1ZVJlc3AuZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsICdpc3N1ZXMnKSA7Il19 */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/detail/issues.js */"));
}

Issues.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var ctx, _ctx$query, owner, name, issueResp;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref4.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_11___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 4:
            issueResp = _context.sent;
            return _context.abrupt("return", {
              issues: issueResp.data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_10__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.a7f7ddb17833e2f9ead8.hot-update.js.map