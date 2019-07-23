webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/pagination/style/css */ "./node_modules/antd/lib/pagination/style/css.js");
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/pagination */ "./node_modules/antd/lib/pagination/index.js");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/list/style/css */ "./node_modules/antd/lib/list/style/css.js");
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Repos__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Repos */ "./components/Repos.jsx");


















var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var LANGUAGE = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Rust'];
var SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'starts',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'starts',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
/**
 * sort: 排序方式
 * order: 排序顺序
 * lang: 仓库项目开发主语言
 * page: 分页页面
 */

var selectedItemStyle = {
  borderLeft: '2px solid #e36209',
  fontWeight: 100
};

function noop() {}

;
var per_page = 20; //memo

var FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_12__["memo"])(function (_ref) {
  var name = _ref.name,
      query = _ref.query,
      lang = _ref.lang,
      sort = _ref.sort,
      order = _ref.order,
      page = _ref.page;
  //avoid re-render
  var queryString = "?query=".concat(query);
  if (lang) queryString += "&lang=".concat(lang);
  if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
  if (page) queryString += "&page=".concat(page);
  queryString += "&per_page=".concat(per_page);
  /**
   * 1.SEO
   * 2.while click on the 'Best Match', aviod sort and order are null
   */

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/search".concat(queryString)
  }, Object(react__WEBPACK_IMPORTED_MODULE_12__["isValidElement"])(name) ? name : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", null, name));
});

function Search(_ref2) {
  var router = _ref2.router,
      repos = _ref2.repos;
  //get query
  console.log(repos);

  var querys = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, router.query);

  var _router$query = router.query,
      lang = _router$query.lang,
      sort = _router$query.sort,
      order = _router$query.order,
      page = _router$query.page;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "jsx-532950966" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: "jsx-532950966" + " " + "list-header"
    }, "Language"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGE,
    renderItem: function renderItem(item) {
      var selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-532950966"
      }, item) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: "jsx-532950966" + " " + "list-header"
    }, "Sorted"),
    dataSource: SORT_TYPES,
    renderItem: function renderItem(item) {
      var selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      } else {
        selected = false;
      }

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-532950966"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 16
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
    className: "jsx-532950966" + " " + "repos title"
  }, repos.total_count, " repositories"), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Repos__WEBPACK_IMPORTED_MODULE_15__["default"], {
      repo: repo,
      key: repo.id
    });
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "jsx-532950966" + " " + "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pageSize: per_page,
    current: Number(page) || 1,
    total: repos.total_count,
    onChange: noop,
    itemRender: function itemRender(page, type, ol) {
      var p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
      var name = type === 'page' ? page : ol;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, querys, {
        page: p,
        name: name
      }));
    }
  })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "532950966"
  }, ".root.jsx-532950966{padding:20px 0;}.list-header.jsx-532950966{font-weight:800;font-size:16px;}.repos.title.jsx-532950966{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-532950966{padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStLd0IsQUFHb0MsQUFHQyxBQUlhLEFBS2hCLGFBQ0ssRUFadEIsQ0FHbUIsYUFJQSxFQUhuQixBQVNBLGFBTHFCLGlCQUNyQiIsImZpbGUiOiIvVXNlcnMvaG9jaHVuZ3dvbmcvRG9jdW1lbnRzL1JlYWN0L25leHRqcy1wcm9qZWN0L3BhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIGlzVmFsaWRFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgUmVwb3MgZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvcyc7XG5cbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKTtcblxuY29uc3QgTEFOR1VBR0UgPSBbXG4gICAgJ0phdmFTY3JpcHQnLFxuICAgICdIVE1MJyxcbiAgICAnQ1NTJyxcbiAgICAnVHlwZVNjcmlwdCcsXG4gICAgJ0phdmEnLFxuICAgICdSdXN0Jyxcbl07XG5cbmNvbnN0IFNPUlRfVFlQRVMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnQmVzdCBNYXRjaCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01vc3QgU3RhcnMnLFxuICAgICAgICB2YWx1ZTogJ3N0YXJ0cycsXG4gICAgICAgIG9yZGVyOiAnZGVzYydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Zld2VzdCBTdGFycycsXG4gICAgICAgIHZhbHVlOiAnc3RhcnRzJyxcbiAgICAgICAgb3JkZXI6ICdhc2MnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNb3N0IEZvcmtzJyxcbiAgICAgICAgdmFsdWU6ICdmb3JrcycsXG4gICAgICAgIG9yZGVyOiAnZGVzYydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Zld2VzdCBGb3JrcycsXG4gICAgICAgIHZhbHVlOiAnZm9ya3MnLFxuICAgICAgICBvcmRlcjogJ2FzYydcbiAgICB9XG5dO1xuXG4vKipcbiAqIHNvcnQ6IOaOkuW6j+aWueW8j1xuICogb3JkZXI6IOaOkuW6j+mhuuW6j1xuICogbGFuZzog5LuT5bqT6aG555uu5byA5Y+R5Li76K+t6KiAXG4gKiBwYWdlOiDliIbpobXpobXpnaJcbiAqL1xuXG4gY29uc3Qgc2VsZWN0ZWRJdGVtU3R5bGUgPSB7XG4gICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgI2UzNjIwOScsXG4gICAgIGZvbnRXZWlnaHQ6IDEwMCwgXG4gfVxuXG5mdW5jdGlvbiBub29wKCkge307XG5cbmNvbnN0IHBlcl9wYWdlID0gMjA7XG5cbiAvL21lbW9cbiBjb25zdCBGaWx0ZXJMaW5rID0gbWVtbygoeyBuYW1lLCBxdWVyeSwgbGFuZywgc29ydCwgb3JkZXIsIHBhZ2UgfSkgPT4ge1xuICAgIC8vYXZvaWQgcmUtcmVuZGVyXG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xdWVyeT0keyBxdWVyeSAgfWA7XG4gICAgaWYgKGxhbmcpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZz0keyBsYW5nIH1gO1xuICAgIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHsgc29ydCB9Jm9yZGVyPSR7IG9yZGVyIHx8ICdkZXNjJyB9YDtcbiAgICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYCZwYWdlPSR7IHBhZ2UgfWA7XG5cbiAgICBxdWVyeVN0cmluZyArPSBgJnBlcl9wYWdlPSR7IHBlcl9wYWdlIH1gO1xuICAgIFxuICAgIC8qKlxuICAgICAqIDEuU0VPXG4gICAgICogMi53aGlsZSBjbGljayBvbiB0aGUgJ0Jlc3QgTWF0Y2gnLCBhdmlvZCBzb3J0IGFuZCBvcmRlciBhcmUgbnVsbFxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9eyBgL3NlYXJjaCR7cXVlcnlTdHJpbmd9YCB9PlxuICAgICAgICAgICAgeyBpc1ZhbGlkRWxlbWVudChuYW1lKSA/IG5hbWUgOiA8YT57IG5hbWUgfTwvYT59XG4gICAgICAgIDwvTGluaz5cbiAgICApXG4gfSk7XG5cbmZ1bmN0aW9uIFNlYXJjaCh7IHJvdXRlciwgcmVwb3MgfSkge1xuICAgIC8vZ2V0IHF1ZXJ5XG4gICAgY29uc29sZS5sb2cocmVwb3MpO1xuXG4gICAgY29uc3QgeyAuLi4gcXVlcnlzIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgeyBsYW5nLCBzb3J0LCBvcmRlciwgcGFnZSB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezIwfT5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+TGFuZ3VhZ2U8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17TEFOR1VBR0V9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGxhbmcgPT09IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzZWxlY3RlZCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgaXRlbSB9PC9zcGFuPiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uIHF1ZXJ5cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+U29ydGVkPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSAnQmVzdCBNYXRjaCcgJiYgIXNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID8gPHNwYW4+eyBpdGVtLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uIHF1ZXJ5cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0PXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI9e2l0ZW0ub3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcyB0aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0gcmVwb3NpdG9yaWVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3MuaXRlbXMubWFwKHJlcG8gPT4gPFJlcG9zIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0vPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsgcGVyX3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17IE51bWJlcihwYWdlKSB8fCAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17cmVwb3MudG90YWxfY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e25vb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlcj17KHBhZ2UsIHR5cGUsIG9sKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlID09PSAncGFnZScgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgOiAodHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdHlwZSA9PT0gJ3BhZ2UnID8gcGFnZSA6IG9sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi4gcXVlcnlzIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saXN0LWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlcG9zLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBzb3J0LCBsYW5nLCBvcmRlciwgcGFnZSB9ID0gY3R4LnF1ZXJ5O1xuICAgIFxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlcG9zOiB7XG4gICAgICAgICAgICAgICAgdG90YWxfY291bnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vID9xPXJlYWN0K2xhbmd1YWdlOmphdmFzY3JpcHQmc29ydD1zdGFycyZvcmRlcj1kZXNjJnBhZ2U9MjtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gO1xuICAgIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgK2xhbmd1YWdlOiR7bGFuZ31gO1xuICAgIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8ICdkZXNjJyB9YDtcbiAgICBpZiAocGFnZSkgcXVlcnlTdHJpbmcgKz0gYHBhZ2U9JHtwYWdlfWA7XG5cbiAgICBxdWVyeVN0cmluZyArPSBgJnBlcl9wYWdlPSR7cGVyX3BhZ2V9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgL3NlYXJjaC9yZXBvc2l0b3JpZXMke3F1ZXJ5U3RyaW5nfWBcbiAgICB9LCBjdHgucmVxLCBjdHgucmVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcG9zOiByZXN1bHQuZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2gpOyJdfQ== */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/search.js */"));
}

Search.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var ctx, _ctx$query, query, sort, lang, order, page, queryString, result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref3.ctx;
            _ctx$query = ctx.query, query = _ctx$query.query, sort = _ctx$query.sort, lang = _ctx$query.lang, order = _ctx$query.order, page = _ctx$query.page;

            if (query) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              repos: {
                total_count: 0
              }
            });

          case 4:
            // ?q=react+language:javascript&sort=stars&order=desc&page=2;
            queryString = "?q=".concat(query);
            if (lang) queryString += "+language:".concat(lang);
            if (sort) queryString += "&sort=".concat(sort, "&order=").concat(order || 'desc');
            if (page) queryString += "page=".concat(page);
            queryString += "&per_page=".concat(per_page);
            _context.next = 11;
            return api.request({
              url: "/search/repositories".concat(queryString)
            }, ctx.req, ctx.res);

          case 11:
            result = _context.sent;
            return _context.abrupt("return", {
              repos: result.data
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Search));

/***/ })

})
//# sourceMappingURL=search.js.2ea1fdfb571ca8f97b43.hot-update.js.map