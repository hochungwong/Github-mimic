(window.webpackJsonp=window.webpackJsonp||[]).push([["fdb2"],{E8gZ:function(e,t,a){var n=a("jmDH"),r=a("w6GO"),s=a("NsO/"),c=a("NV0k").f;e.exports=function(e){return function(t){for(var a,o=s(t),u=r(o),i=u.length,l=0,p=[];i>l;)a=u[l++],n&&!c.call(o,a)||p.push(e?[a,o[a]]:o[a]);return p}}},"LR/J":function(e,t,a){e.exports=a("tgZa")},VbcV:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail/issues",function(){var e=a("bcnk");return{page:e.default||e}}])},bcnk:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),s=a("O40h"),c=a("q1tI"),o=a.n(c),u=a("xzy3");function i(e){var t=e.text;return o.a.createElement("span",null,"Issues Index ",t)}i.getInitialProps=Object(s.default)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("issues get init"),e.abrupt("return",{text:123});case 2:case"end":return e.stop()}},e)})),t.default=Object(u.a)(i,"issues")},nGDx:function(e,t,a){var n=a("Y7ZC"),r=a("E8gZ")(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},tgZa:function(e,t,a){a("nGDx"),e.exports=a("WEpk").Object.entries},xzy3:function(e,t,a){"use strict";var n=a("ln6h"),r=a.n(n),s=a("zrwo"),c=a("O40h"),o=a("qNsG"),u=a("LR/J"),i=a.n(u),l=a("MX0m"),p=a.n(l),d=a("q1tI"),f=a.n(d),b=a("r6nz"),m=a("YFqc"),x=a.n(m),j=a("nOHt"),v=a("7Aa8"),w=a("qoWs"),E="undefined"==typeof window;t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"readme";function a(a){var n=a.repoBasic,r=a.router,s=Object(o.a)(a,["repoBasic","router"]);console.log(n);var c=function(e){var t=i()(e).reduce(function(e,t){return e.push(t.join("=")),e},[]).join("&");return"?".concat(t)}(r.query);return Object(d.useEffect)(function(){!E&&Object(v.a)(n)}),f.a.createElement("div",{c:!0,lassName:"root",className:"jsx-1924159593"},f.a.createElement("div",{className:"jsx-1924159593 repo-basic"},f.a.createElement(b.a,{repo:n}),f.a.createElement("div",{className:"jsx-1924159593 tabs"},"readme"===t?f.a.createElement("span",{className:"jsx-1924159593 tab"},"Readme"):f.a.createElement(x.a,{href:"/detail".concat(c)},f.a.createElement("a",{className:"jsx-1924159593 tab readme"},"Readme ")),"issues"===t?f.a.createElement("span",{className:"jsx-1924159593 tab"},"Issues"):f.a.createElement(x.a,{href:"/detail/issues".concat(c)},f.a.createElement("a",{href:"",className:"jsx-1924159593 tab issues"},"Issues")))),f.a.createElement("div",{className:"jsx-1924159593"},f.a.createElement(e,s)),f.a.createElement(p.a,{id:"1924159593"},[".root.jsx-1924159593{padding-top:20px;}",".repo-basic.jsx-1924159593{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}",".tab.jsx-1924159593+.tab.jsx-1924159593{margin-left:20px;}"]))}return a.getInitialProps=function(){var t=Object(c.default)(r.a.mark(function t(a){var n,c,o,u,i,l,p,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("context",a),a.router,n=a.ctx,c=n.query,o=c.owner,u=c.name,i="".concat(o,"/").concat(u),l=Object(v.c)(i),p={},!e.getInitialProps){t.next=10;break}return t.next=9,e.getInitialProps(a);case 9:p=t.sent;case 10:if(!l){t.next=12;break}return t.abrupt("return",Object(s.a)({repoBasic:l},p));case 12:return t.next=14,w.request({url:"/repos/".concat(o,"/").concat(u)},n.req,n.res);case 14:return d=t.sent,t.abrupt("return",Object(s.a)({repoBasic:d.data},p));case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),Object(j.withRouter)(a)}}},[["VbcV","5d41","9da1","ad9d"]]]);