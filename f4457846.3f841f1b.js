(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(267)),s=(n(268),{id:"index-domainobjectswithhashes",title:"Managing Domain Objects with Redis Hashes",sidebar_label:"Domain Objects with Hashes",slug:"/develop/node/nodecrashcourse/domainobjectswithhashes",authors:["simon"]}),i={unversionedId:"develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes",id:"develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes",isDocsHomePage:!1,title:"Managing Domain Objects with Redis Hashes",description:"In this module, you'll see how we're using Redis Hashes to model the user and location data in our application.",source:"@site/docs/develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes.mdx",slug:"/develop/node/nodecrashcourse/domainobjectswithhashes",permalink:"/develop/node/nodecrashcourse/domainobjectswithhashes",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes.mdx",version:"current",sidebar_label:"Domain Objects with Hashes",sidebar:"docs",previous:{title:"Up and Running with the Sample Application",permalink:"/develop/node/nodecrashcourse/runningtheapplication"},next:{title:"Introduction to Redis Modules",permalink:"/develop/node/nodecrashcourse/introductiontomodules"}},c=[{value:"Coding Exercise",id:"coding-exercise",children:[]},{value:"External Resources",id:"external-resources",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this module, you'll see how we're using Redis Hashes to model the user and location data in our application."),Object(a.b)("div",{class:"text--center"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xASSiToabSM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(a.b)("h2",{id:"coding-exercise"},"Coding Exercise"),Object(a.b)("p",null,"In your first coding exercise, you'll be adding a new route that takes a user's ID and returns their full name."),Object(a.b)("p",null,"Using your IDE, open the ",Object(a.b)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you cloned the GitHub repository into.  Open the file ",Object(a.b)("inlineCode",{parentName:"p"},"src/routes/user_routes.js")," and find the route ",Object(a.b)("inlineCode",{parentName:"p"},"/user/:userId/fullname")," which looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// EXERCISE: Get user's full name.\nrouter.get(\n  '/user/:userId/fullname',\n  [\n    param('userId').isInt({ min: 1 }),\n    apiErrorReporter,\n  ],\n  async (req, res) => {\n    const { userId } = req.params;\n    /* eslint-disable no-unused-vars */\n    const userKey = redis.getKeyName('users', userId);\n    /* eslint-enable */\n\n    // TODO: Get the firstName and lastName fields from the\n    // user hash whose key is in userKey.\n    // HINT: Check out the HMGET command...\n    // https://redis.io/commands/hmget\n    const [firstName, lastName] = ['TODO', 'TODO'];\n\n    res.status(200).json({ fullName: `${firstName} ${lastName}` });\n  },\n);\n")),Object(a.b)("p",null,"In this exercise, you'll modify the code to return the user's full name by retrieving the firstName and lastName fields for the requested user from Redis.  "),Object(a.b)("p",null,"First, make sure your server is still running, if not start it with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm run dev\n")),Object(a.b)("p",null,"Next, browse to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8081/api/user/5/fullname")),Object(a.b)("p",null,"You should see:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fullName": "TODO TODO"\n}\n')),Object(a.b)("p",null,"Take a look at the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.io/commands/hmget"}),"documentation for the Redis HMGET command"),", which retrieves multiple named fields from a Redis Hash.  You'll need to add code that calls the Redis client's ",Object(a.b)("inlineCode",{parentName:"p"},"hmget")," function, then place the values returned into the ",Object(a.b)("inlineCode",{parentName:"p"},"firstName")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lastName")," variables.  You should be able to retrieve both values using a single call to ",Object(a.b)("inlineCode",{parentName:"p"},"hmget"),".  For guidance on how to invoke Redis commands, check out the code for the ",Object(a.b)("inlineCode",{parentName:"p"},"/user/:userId")," route which calls the ",Object(a.b)("inlineCode",{parentName:"p"},"HGETALL")," command."),Object(a.b)("p",null,"nodemon will restart the server automatically for you each time you save your changes."),Object(a.b)("p",null,"When you're ready to test your solution, browse to ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8081/api/user/5/fullname")," and you should see:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fullName": "Alejandro Reyes"\n}\n')),Object(a.b)("p",null,"If you need help from our team, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/redis"}),"join us in Discord"),"."),Object(a.b)("h2",{id:"external-resources"},"External Resources"),Object(a.b)("p",null,"In this video, Justin explains what Redis Hashes are and shows how common Redis Hash commands work:"),Object(a.b)("div",{class:"text--center"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-agsJUihrWw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(a.b)("p",null,"You can find documentation for all of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.io/commands#hash"}),"Redis Hash commands on redis.io"),"."))}u.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},268:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(21),o=n(276);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,s=a.forcePrependBaseUrl,i=void 0!==s&&s,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},276:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);