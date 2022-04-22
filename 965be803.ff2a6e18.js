(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{243:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),i=(t(0),t(363)),o={id:"numeric-queries",title:"Numeric Queries",sidebar_label:"Numeric Queries",slug:"/develop/dotnet/redis-om-dotnet/searching/numeric-queries",authors:["steve"]},s={unversionedId:"develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries",id:"develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries",isDocsHomePage:!1,title:"Numeric Queries",description:"In addition to providing capabilities for text queries, Redis OM also provides you the ability to perform numeric equality and numeric range queries. Let us assume a model of:",source:"@site/docs/develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries.md",slug:"/develop/dotnet/redis-om-dotnet/searching/numeric-queries",permalink:"/develop/dotnet/redis-om-dotnet/searching/numeric-queries",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries.md",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Numeric Queries",sidebar:"docs",previous:{title:"Simple Text Queries",permalink:"/develop/dotnet/redis-om-dotnet/simple-text-queries"},next:{title:"Geo Filters",permalink:"/develop/dotnet/redis-om-dotnet/searching/geo-filters"}},l=[{value:"Sorting",id:"sorting",children:[]}],c={toc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In addition to providing capabilities for text queries, Redis OM also provides you the ability to perform numeric equality and numeric range queries. Let us assume a model of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"[Document]\npublic class Employee\n{\n    [Indexed]\n    public string Name { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public int Age { get; set; }\n    \n    [Indexed(Aggregatable = true)]\n    public double Sales { get; set; }    \n    \n    [Searchable(Aggregatable = true)]\n    public string Department { get; set; }\n}\n")),Object(i.b)("p",null,"Assume that we've connected to Redis already and retrieved a ",Object(i.b)("inlineCode",{parentName:"p"},"RedisCollection")," and seeded some data as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var employees = provider.RedisCollection<Employee>();\nvar e1 = new Employee {Name = "Bob", Age = 35, Sales = 100000, Department = "EMEA Sales"};\nvar e2 = new Employee {Name = "Alice", Age = 52, Sales = 300000, Department = "Partner Sales"};\nvar e3 = new Employee {Name = "Marcus", Age = 42, Sales = 250000, Department = "NA Sales"};\nvar e4 = new Employee {Name = "Susan", Age = 27, Sales = 200000, Department = "EMEA Sales"};\nvar e5 = new Employee {Name = "John", Age = 38, Sales = 275000, Department = "APAC Sales"};\nvar e6 = new Employee {Name = "Theresa", Age = 30, Department = "EMEA Ops"};\nemployees.Insert(e1);\nemployees.Insert(e2);\nemployees.Insert(e3);\nemployees.Insert(e4);\nemployees.Insert(e5);\nemployees.Insert(e6);\n')),Object(i.b)("p",null,"We can now perform queries against the numeric values in our data as you would with any other collection using LINQ expressions."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var underThirty = employees.Where(x=>x.Age < 30);\nvar middleTierSales = employees.Where(x=>x.Sales > 100000 && x.Sales < 300000);\n")),Object(i.b)("p",null,"You can of course also pair numeric queries with Text Queries:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var emeaMidTier = employees.Where(x=>x.Sales>100000 & x.Sales <300000 && x.Department == "EMEA");\n')),Object(i.b)("h2",{id:"sorting"},"Sorting"),Object(i.b)("p",null,"If an ",Object(i.b)("inlineCode",{parentName:"p"},"Indexed")," field is marked as ",Object(i.b)("inlineCode",{parentName:"p"},"Sortable"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"Aggregatable"),", you can order by that field using ",Object(i.b)("inlineCode",{parentName:"p"},"OrderBy")," predicates."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var employeesBySales = employees.OrderBy(x=>x.Sales);\nvar employeesBySalesDescending = employees.OrderByDescending(x=>x.Sales);\n")))}u.isMDXComponent=!0},363:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(b,s(s({ref:r},c),{},{components:t})):a.a.createElement(b,s({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);