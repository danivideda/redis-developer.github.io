(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{313:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(335)),o={id:"simple-text-queries",title:"Simple Text Queries",sidebar_label:"Simple Text Queries",slug:"/develop/dotnet/redis-om-dotnet/simple-text-queries"},l={unversionedId:"develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries",id:"develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries",isDocsHomePage:!1,title:"Simple Text Queries",description:"The RedisCollection provides a fluent interface for querying objects stored in redis. This means that if you store an object in Redis with the Redis OM library, and you have RediSearch enabled, you can query objects stored in Redis with ease using the LINQ syntax you're used to.",source:"@site/docs/develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries.md",slug:"/develop/dotnet/redis-om-dotnet/simple-text-queries",permalink:"/develop/dotnet/redis-om-dotnet/simple-text-queries",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries.md",version:"current",lastUpdatedAt:1635532485,sidebar_label:"Simple Text Queries",sidebar:"docs",previous:{title:"Creating an Index with Redis OM",permalink:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index"},next:{title:"Numeric Queries",permalink:"/develop/dotnet/redis-om-dotnet/searching/numeric-queries"}},s=[{value:"Define the Model",id:"define-the-model",children:[]},{value:"Connect to Redis",id:"connect-to-redis",children:[]},{value:"Create our Index",id:"create-our-index",children:[]},{value:"Seed some Data",id:"seed-some-data",children:[]},{value:"Simple Text Query of an Indexed Field",id:"simple-text-query-of-an-indexed-field",children:[{value:"Limiting Result Object Fields",id:"limiting-result-object-fields",children:[]},{value:"Limiting Returned Objects",id:"limiting-returned-objects",children:[]}]},{value:"Full Text Search",id:"full-text-search",children:[{value:"Find Employee&#39;s in Sales",id:"find-employees-in-sales",children:[]}]},{value:"Sorting",id:"sorting",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"RedisCollection")," provides a fluent interface for querying objects stored in redis. This means that if you store an object in Redis with the Redis OM library, and you have ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/"}),"RediSearch")," enabled, you can query objects stored in Redis with ease using the LINQ syntax you're used to."),Object(i.b)("h2",{id:"define-the-model"},"Define the Model"),Object(i.b)("p",null,"Let's start off by defining a model that we will be using for querying, we will use a ",Object(i.b)("inlineCode",{parentName:"p"},"Employee")," Class which will have some basic stuff we may want to query in it"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[Document]\npublic class Employee\n{\n    [Indexed]\n    public string Name { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public int Age { get; set; }\n    \n    [Indexed(Aggregatable = true)]\n    public double Sales { get; set; }    \n    \n    [Searchable(Aggregatable = true)]\n    public string Department { get; set; }\n}\n")),Object(i.b)("h2",{id:"connect-to-redis"},"Connect to Redis"),Object(i.b)("p",null,"Now we will initialize a RedisConnectionProvider, and grab a handle to a RedisCollection for Employee"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'static async Task Main(string[] args)\n{\n    var provider = new RedisConnectionProvider("redis://localhost:6379");\n    var connection = provider.Connection;\n    var employees = prover.RedisCollection<Employee>();\n    await connection.CreateIndexAsync(typeof(Employee));\n}\n')),Object(i.b)("h2",{id:"create-our-index"},"Create our Index"),Object(i.b)("p",null,"Next we'll create the index, so next in our ",Object(i.b)("inlineCode",{parentName:"p"},"Main")," method, let's take our type and condense it into an index"),Object(i.b)("h2",{id:"seed-some-data"},"Seed some Data"),Object(i.b)("p",null,"Next we'll seed a few piece of data in our database to play around with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var e1 = new Employee {Name = "Bob", Age = 35, Sales = 100000, Department = "EMEA Sales"};\nvar e2 = new Employee {Name = "Alice", Age = 52, Sales = 300000, Department = "Partner Sales"};\nvar e3 = new Employee {Name = "Marcus", Age = 42, Sales = 250000, Department = "NA Sales"};\nvar e4 = new Employee {Name = "Susan", Age = 27, Sales = 200000, Department = "EMEA Sales"};\nvar e5 = new Employee {Name = "John", Age = 38, Sales = 275000, Department = "APAC Sales"};\nvar e6 = new Employee {Name = "Theresa", Age = 30, Department = "EMEA Ops"};\nvar insertTasks = new []\n    {\n        employees.InsertAsync(e1),\n        employees.InsertAsync(e2),\n        employees.InsertAsync(e3),\n        employees.InsertAsync(e4),\n        employees.InsertAsync(e5)\n        employees.InsertAsync(e6)\n    };\nawait Task.WhenAll(insertTasks);\n')),Object(i.b)("h2",{id:"simple-text-query-of-an-indexed-field"},"Simple Text Query of an Indexed Field"),Object(i.b)("p",null,"With these data inserted into our database, we can now go ahead and begin querying. Let's start out by trying to query people by name. We can search for all employees named ",Object(i.b)("inlineCode",{parentName:"p"},"Susan")," with a simple Where predicate:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var susans = employees.Where(x => x.Name == "Susan");\nawait foreach (var susan in susans)\n{\n    Console.WriteLine($"Susan is {susan.Age} years old and works in the {susan.Department} department ");\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Where")," Predicates also support ",Object(i.b)("inlineCode",{parentName:"p"},"and"),"/",Object(i.b)("inlineCode",{parentName:"p"},"or")," operators, e.g. to find all employees named ",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Bob")," you can use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var AliceOrBobs = employees.Where(x => x.Name == "Alice" || x.Name == "Bob");\nawait foreach (var employee in AliceOrBobs)\n{\n    Console.WriteLine($"{employee.Name} is {employee.Age} years old and works in the {employee.Department} Department");\n}\n')),Object(i.b)("h3",{id:"limiting-result-object-fields"},"Limiting Result Object Fields"),Object(i.b)("p",null,"When you are querying larger Documents in Redis, you may not want to have to drag back the entire object over the network, in that case you can limit the results to only what you want using a ",Object(i.b)("inlineCode",{parentName:"p"},"Select")," predicate. E.g. if you only wanted to find out the ages of employees, all you would need to do is select the age of employees:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var employeeAges = employees.Select(x => x.Age);\nawait foreach (var age in employeeAges)\n{\n    Console.WriteLine($"age: {age}");\n}\n')),Object(i.b)("p",null,"Or if you want to select more than one field you can create a new anonymous object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var employeeAges = employees.Select(x => new {x.Name, x.Age});\nawait foreach (var e in employeeAges)\n{\n    Console.WriteLine($"{e.Name} is age: {e.Age} years old");\n}\n')),Object(i.b)("h3",{id:"limiting-returned-objects"},"Limiting Returned Objects"),Object(i.b)("p",null,"You can limit the size of your result (in the number of objects returned) with ",Object(i.b)("inlineCode",{parentName:"p"},"Skip")," & ",Object(i.b)("inlineCode",{parentName:"p"},"Take")," predicates. ",Object(i.b)("inlineCode",{parentName:"p"},"Skip")," will skip over the specified number of records, and ",Object(i.b)("inlineCode",{parentName:"p"},"Take")," will take only the number of records provided (at most);"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var people = employees.Skip(1).Take(2);\nawait foreach (var e in people)\n{\n    Console.WriteLine($"{e.Name} is age: {e.Age} years old");\n}\n')),Object(i.b)("h2",{id:"full-text-search"},"Full Text Search"),Object(i.b)("p",null,"There are two types of attributes that can decorate strings, ",Object(i.b)("inlineCode",{parentName:"p"},"Indexed"),", which we've gone over and ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable")," which we've yet to discuss. The ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable")," attribute considers equality slightly differently than Indexed, it operates off a full-text search. In expressions involving Searchable fields, equality\u2014",Object(i.b)("inlineCode",{parentName:"p"},"=="),"\u2014 means a match. A match in the context of a searchable field is not necessarily a full exact match but rather that the string contains the search text. Let's look at some examples."),Object(i.b)("h3",{id:"find-employees-in-sales"},"Find Employee's in Sales"),Object(i.b)("p",null,"So we have a ",Object(i.b)("inlineCode",{parentName:"p"},"Department")," string which is marked as ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable")," in our Employee class. Notice how we've named our departments. They contain a region and a department type. If we wanted only to find all employee's in ",Object(i.b)("inlineCode",{parentName:"p"},"Sales")," we could do so with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var salesPeople = employees.Where(x => x.Department == "Sales");\nawait foreach (var employee in salesPeople)\n{\n    Console.WriteLine($"{employee.Name} is in the {employee.Department} department");\n}\n')),Object(i.b)("p",null,"This will produce:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Bob is in the EMEA Sales department\nAlice is in the Partner Sales department\nMarcus is in the NA Sales department\nSusan is in the EMEA Sales department\nJohn is in the APAC Sales department\n")),Object(i.b)("p",null,"Because they are all folks in departments called ",Object(i.b)("inlineCode",{parentName:"p"},"sales")),Object(i.b)("p",null,"If you wanted to search for everyone in a department in ",Object(i.b)("inlineCode",{parentName:"p"},"EMEA")," you could search with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var emeaFolks = employees.Where(x => x.Department == "EMEA");\nawait foreach (var employee in emeaFolks)\n{\n    Console.WriteLine($"{employee.Name} is in the {employee.Department} department");\n}\n')),Object(i.b)("p",null,"Which of course would produce:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Bob is in the EMEA Sales department\nSusan is in the EMEA Sales department\nTheresa is in the EMEA Ops department\n")),Object(i.b)("h2",{id:"sorting"},"Sorting"),Object(i.b)("p",null,"If a ",Object(i.b)("inlineCode",{parentName:"p"},"Searchable")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Indexed")," field is marked as ",Object(i.b)("inlineCode",{parentName:"p"},"Sortable"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"Aggregatable"),", you can order by that field using ",Object(i.b)("inlineCode",{parentName:"p"},"OrderBy")," predicates."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"var employeesBySales = employees.OrderBy(x=>x.Name);\nvar employeesBySalesDescending = employees.OrderByDescending(x=>x.Name);\n")))}p.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);