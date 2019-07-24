webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");



// import Repo from '../../components/Repos';
// import Link from 'next/link';
// import { withRouter } from 'next/router';
// const api = require('../../lib/api');
// function makeQuery(queryObject) {
//     const query = Object.entries(queryObject).reduce(
//         (result, entry) => {
//             result.push(entry.join('='));
//             return result;
//         }, []).join('&');
//     return `?${query}`;
// }
// function Detail({ repoBasic, router }) {
//     console.log(repoBasic);
//     const query = makeQuery(router.query);
//     console.log(query)
//     return (
//         <div c lassName="root">
//             <div className="repo-basic">
//                 <Repo repo={repoBasic}/>
//                 <div className="tabs">
//                     <Link href={`/detail${query}`}>
//                         <a className="tab readme">Readme </a>
//                     </Link>
//                     <Link href={`/detail/issues${query}`}>
//                      <a href="" className="tab issues">Issues</a>
//                     </Link>
//                 </div>
//             </div>
//             <div>Readme</div>
//             <style jsx>{`
//                 .root {
//                     padding-top: 20px;
//                 }
//                 .repo-basic {
//                     padding: 20px;
//                     border: 1px solid #eee;
//                     margin-bottom: 20px;
//                     border-radius: 5px;
//                 }
//                 .tab + .tab {
//                     margin-left: 20px;
//                 }
//             `}</style>
//         </div>
//     )
// }
// Detail.getInitialProps = async ({ ctx }) => {
//     console.log(ctx.query);
//     const { owner, name } = ctx.query;
//     const repoBasic = await api.request({
//             url: `/repos/${owner}/${name}`, 
//         },
//         ctx.req,
//         ctx.res
//     );
//     return {
//         repoBasic: repoBasic.data
//     }
// };


function Detail() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Detail Index");
}

Detail.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            text: 123
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail));

/***/ })

})
//# sourceMappingURL=detail.js.6475f2bb4355c6b2cd7b.hot-update.js.map