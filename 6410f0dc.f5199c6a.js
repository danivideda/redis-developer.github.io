(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(283)),o={id:"index-install",title:"2. Install Redisearch",sidebar_label:"2. Install Redisearch",slug:"/howtos/moviesdatabase/install"},s={unversionedId:"howtos/moviesdatabase/install/index-install",id:"howtos/moviesdatabase/install/index-install",isDocsHomePage:!1,title:"2. Install Redisearch",description:"You have multiple ways to run RediSearch:",source:"@site/docs/howtos/moviesdatabase/install/index-install.mdx",slug:"/howtos/moviesdatabase/install",permalink:"/howtos/moviesdatabase/install",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/install/index-install.mdx",version:"current",sidebar_label:"2. Install Redisearch",sidebar:"docs",previous:{title:"1. Getting Started",permalink:"/howtos/moviesdatabase/getting-started"},next:{title:"3. Create Index",permalink:"/howtos/moviesdatabase/create"}},l=[],c={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You have multiple ways to run RediSearch:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"building from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/RediSearch/RediSearch"}),"sources")," and installing it inside an existing Redis Instance"),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise-cloud/overview/"}),"Redis Cloud")),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise-software/overview/"}),"Redis Enterprise")),Object(i.b)("li",{parentName:"ul"},"using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/r/redislabs/redisearch/"}),"Docker"))),Object(i.b)("p",null,"Let's use Docker for now."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1.1 Open a terminal an run the following command")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"> docker run -it --rm --name redis-search-2 \\\n   -p 6379:6379 \\\n   redislabs/redisearch:2.0.2\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: The container will automatically be removed when it exits (",Object(i.b)("inlineCode",{parentName:"em"},"--rm")," parameter).")),Object(i.b)("p",null,"You have now a Redis instance running with RediSearch installed, let's discover the basics."),Object(i.b)("hr",null))}u.isMDXComponent=!0},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);