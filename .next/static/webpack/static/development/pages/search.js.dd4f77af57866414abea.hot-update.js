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
    className: "jsx-684692007" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: "jsx-684692007" + " " + "list-header"
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
        className: "jsx-684692007"
      }, item) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_9___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
      className: "jsx-684692007" + " " + "list-header"
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
        className: "jsx-684692007"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_10__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
    span: 16
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
    className: "jsx-684692007" + " " + "repos title"
  }, repos.total_count, " repositories"), repos.items.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_Repos__WEBPACK_IMPORTED_MODULE_15__["default"], {
      repo: repo,
      key: repo.id
    });
  }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "jsx-684692007" + " " + "pagination"
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
    id: "684692007"
  }, ".root.jsx-684692007{padding:20px 0;}.list-header.jsx-684692007{font-weight:800;font-size:16px;}.repos.title.jsx-684692007{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStLd0IsQUFHb0MsQUFHQyxBQUlhLGVBTmpDLENBR21CLGFBSUEsRUFIbkIsYUFJcUIsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9ob2NodW5nd29uZy9Eb2N1bWVudHMvUmVhY3QvbmV4dGpzLXByb2plY3QvcGFnZXMvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUm93LCBDb2wsIExpc3QsIFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBSZXBvcyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG9zJztcblxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi4vbGliL2FwaScpO1xuXG5jb25zdCBMQU5HVUFHRSA9IFtcbiAgICAnSmF2YVNjcmlwdCcsXG4gICAgJ0hUTUwnLFxuICAgICdDU1MnLFxuICAgICdUeXBlU2NyaXB0JyxcbiAgICAnSmF2YScsXG4gICAgJ1J1c3QnLFxuXTtcblxuY29uc3QgU09SVF9UWVBFUyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCZXN0IE1hdGNoJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTW9zdCBTdGFycycsXG4gICAgICAgIHZhbHVlOiAnc3RhcnRzJyxcbiAgICAgICAgb3JkZXI6ICdkZXNjJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmV3ZXN0IFN0YXJzJyxcbiAgICAgICAgdmFsdWU6ICdzdGFydHMnLFxuICAgICAgICBvcmRlcjogJ2FzYydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ01vc3QgRm9ya3MnLFxuICAgICAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICAgICAgb3JkZXI6ICdkZXNjJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRmV3ZXN0IEZvcmtzJyxcbiAgICAgICAgdmFsdWU6ICdmb3JrcycsXG4gICAgICAgIG9yZGVyOiAnYXNjJ1xuICAgIH1cbl07XG5cbi8qKlxuICogc29ydDog5o6S5bqP5pa55byPXG4gKiBvcmRlcjog5o6S5bqP6aG65bqPXG4gKiBsYW5nOiDku5PlupPpobnnm67lvIDlj5HkuLvor63oqIBcbiAqIHBhZ2U6IOWIhumhtemhtemdolxuICovXG5cbiBjb25zdCBzZWxlY3RlZEl0ZW1TdHlsZSA9IHtcbiAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZTM2MjA5JyxcbiAgICAgZm9udFdlaWdodDogMTAwLCBcbiB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuY29uc3QgcGVyX3BhZ2UgPSAyMDtcblxuIC8vbWVtb1xuIGNvbnN0IEZpbHRlckxpbmsgPSBtZW1vKCh7IG5hbWUsIHF1ZXJ5LCBsYW5nLCBzb3J0LCBvcmRlciwgcGFnZSB9KSA9PiB7XG4gICAgLy9hdm9pZCByZS1yZW5kZXJcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgP3F1ZXJ5PSR7IHF1ZXJ5ICB9YDtcbiAgICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCZsYW5nPSR7IGxhbmcgfWA7XG4gICAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0keyBzb3J0IH0mb3JkZXI9JHsgb3JkZXIgfHwgJ2Rlc2MnIH1gO1xuICAgIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHsgcGFnZSB9YDtcblxuICAgIHF1ZXJ5U3RyaW5nICs9IGAmcGVyX3BhZ2U9JHsgcGVyX3BhZ2UgfWA7XG4gICAgXG4gICAgLyoqXG4gICAgICogMS5TRU9cbiAgICAgKiAyLndoaWxlIGNsaWNrIG9uIHRoZSAnQmVzdCBNYXRjaCcsIGF2aW9kIHNvcnQgYW5kIG9yZGVyIGFyZSBudWxsXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17IGAvc2VhcmNoJHtxdWVyeVN0cmluZ31gIH0+XG4gICAgICAgICAgICB7IGlzVmFsaWRFbGVtZW50KG5hbWUpID8gbmFtZSA6IDxhPnsgbmFtZSB9PC9hPn1cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbiB9KTtcblxuZnVuY3Rpb24gU2VhcmNoKHsgcm91dGVyLCByZXBvcyB9KSB7XG4gICAgLy9nZXQgcXVlcnlcbiAgICBjb25zb2xlLmxvZyhyZXBvcyk7XG5cbiAgICBjb25zdCB7IC4uLiBxdWVyeXMgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCB7IGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MjB9PlxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5MYW5ndWFnZTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gbGFuZyA9PT0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyBpdGVtIH08L3NwYW4+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi4gcXVlcnlzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17PHNwYW4gY2xhc3NOYW1lPVwibGlzdC1oZWFkZXJcIj5Tb3J0ZWQ8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17U09SVF9UWVBFU31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdCZXN0IE1hdGNoJyAmJiAhc29ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlID09PSBzb3J0ICYmIGl0ZW0ub3JkZXIgPT09IG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtzZWxlY3RlZCA/IHNlbGVjdGVkSXRlbVN0eWxlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPyA8c3Bhbj57IGl0ZW0ubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi4gcXVlcnlzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcj17aXRlbS5vcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG9zIHRpdGxlXCI+e3JlcG9zLnRvdGFsX2NvdW50fSByZXBvc2l0b3JpZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcy5pdGVtcy5tYXAocmVwbyA9PiA8UmVwb3MgcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfS8+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9eyBwZXJfcGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXsgTnVtYmVyKHBhZ2UpIHx8IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXtyZXBvcy50b3RhbF9jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bm9vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocGFnZSwgdHlwZSwgb2wpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHR5cGUgPT09ICdwYWdlJyA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA6ICh0eXBlID09PSAncHJldicgPyBwYWdlIC0gMSA6IHBhZ2UgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogb2w7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLiBxdWVyeXMgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVwb3MudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuU2VhcmNoLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeTtcbiAgICBcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXBvczoge1xuICAgICAgICAgICAgICAgIHRvdGFsX2NvdW50OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA/cT1yZWFjdCtsYW5ndWFnZTpqYXZhc2NyaXB0JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzYyZwYWdlPTI7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYD9xPSR7cXVlcnl9YDtcbiAgICBpZiAobGFuZykgcXVlcnlTdHJpbmcgKz0gYCtsYW5ndWFnZToke2xhbmd9YDtcbiAgICBpZiAoc29ydCkgcXVlcnlTdHJpbmcgKz0gYCZzb3J0PSR7c29ydH0mb3JkZXI9JHtvcmRlciB8fCAnZGVzYycgfWA7XG4gICAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGBwYWdlPSR7cGFnZX1gO1xuXG4gICAgcXVlcnlTdHJpbmcgKz0gYCZwZXJfcGFnZT0ke3Blcl9wYWdlfWA7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICAgIHVybDogYC9zZWFyY2gvcmVwb3NpdG9yaWVzJHtxdWVyeVN0cmluZ31gXG4gICAgfSwgY3R4LnJlcSwgY3R4LnJlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXBvczogcmVzdWx0LmRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKTsiXX0= */\n/*@ sourceURL=/Users/hochungwong/Documents/React/nextjs-project/pages/search.js */"));
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
//# sourceMappingURL=search.js.dd4f77af57866414abea.hot-update.js.map