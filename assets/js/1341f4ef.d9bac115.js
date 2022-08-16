"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5312],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||s;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},20376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",sidebar_label:"Building RedisGraph databases from CSV inputs",slug:"/howtos/redisgraph/csvtograph",authors:["ajeet"]},l=void 0,p={unversionedId:"howtos/redisgraph/csvtograph/index-csvtograph",id:"howtos/redisgraph/csvtograph/index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. It shows how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon.",source:"@site/docs/howtos/redisgraph/csvtograph/index-csvtograph.mdx",sourceDirName:"howtos/redisgraph/csvtograph",slug:"/howtos/redisgraph/csvtograph",permalink:"/howtos/redisgraph/csvtograph",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/csvtograph/index-csvtograph.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-csvtograph",title:"How to build RedisGraph databases from CSV inputs in Easy Steps",sidebar_label:"Building RedisGraph databases from CSV inputs",slug:"/howtos/redisgraph/csvtograph",authors:["ajeet"]},sidebar:"docs",previous:{title:"Building Movies database app using RedisGraph & NodeJS",permalink:"/howtos/redisgraph/redisgraphmovies"},next:{title:"Probabilistic data structures using Redis Stack",permalink:"/howtos/redisbloom"}},d={},u=[{value:"RedisGraph Bulk Loader",id:"redisgraph-bulk-loader",level:2},{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Clone the Bulk Loader Utility",id:"step-3-clone-the-bulk-loader-utility",level:3},{value:"Step 4. Installing the RedisGraph Bulk Loader tool",id:"step-4-installing-the-redisgraph-bulk-loader-tool",level:3},{value:"Step 5. Create a Python virtual env for this work",id:"step-5-create-a-python-virtual-env-for-this-work",level:3},{value:"Step 6. Step into the venv:",id:"step-6-step-into-the-venv",level:3},{value:"Step 7. Install the dependencies for the bulk loader:",id:"step-7-install-the-dependencies-for-the-bulk-loader",level:3},{value:"Step 8. Install groovy",id:"step-8-install-groovy",level:3},{value:"Step 9. Verify the .csv files created",id:"step-9-verify-the-csv-files-created",level:3},{value:"Step 10. Run the Bulk loader script",id:"step-10-run-the-bulk-loader-script",level:3},{value:"Step 10 . Install RedisInsight",id:"step-10--install-redisinsight",level:3},{value:"Step 11. Accessing RedisInsight",id:"step-11-accessing-redisinsight",level:3},{value:"Step 12. Run the Graph Query",id:"step-12-run-the-graph-query",level:3},{value:"References",id:"references",level:3}],c={toc:u};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/modules/redis-graph/"},"RedisGraph")," is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. It shows how your data is connected through multiple visualization integrations including ",(0,s.kt)("a",{parentName:"p",href:"/explore/redisinsight/getting-started"},"RedisInsight"),", Linkurious, and Graphileon.\nIt allows you to query graphs using the industry-standard Cypher query language and you can easily use graph capabilities from application code."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:r(48118).Z,width:"2300",height:"1572"})),(0,s.kt)("h2",{id:"redisgraph-bulk-loader"},"RedisGraph Bulk Loader"),(0,s.kt)("p",null,"If you have a bunch of CSV files that you want to load to RedisGraph database, you must try out ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RedisGraph/redisgraph-bulk-loader"},"this Bulk Loader utility"),". Rightly called RedisGraph Bulk Loader, this tool is written in Python and helps you in building RedisGraph databases from CSV inputs. This utility requires a Python 3 interpreter."),(0,s.kt)("p",null,"Follow the steps below to load CSV data into RedisGraph database:"),(0,s.kt)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redislabs/redismod\n")),(0,s.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,s.kt)("h3",{id:"step-3-clone-the-bulk-loader-utility"},"Step 3. Clone the Bulk Loader Utility"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," $ git clone https://github.com/RedisGraph/redisgraph-bulk-loader\n")),(0,s.kt)("h3",{id:"step-4-installing-the-redisgraph-bulk-loader-tool"},"Step 4. Installing the RedisGraph Bulk Loader tool"),(0,s.kt)("p",null,"The bulk loader can be installed using pip:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  pip3 install redisgraph-bulk-loader\n")),(0,s.kt)("p",null,"Or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install git+https://github.com/RedisGraph/redisgraph-bulk-loader.git@master\n")),(0,s.kt)("h3",{id:"step-5-create-a-python-virtual-env-for-this-work"},"Step 5. Create a Python virtual env for this work"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"}," python3 -m venv redisgraphloader\n")),(0,s.kt)("h3",{id:"step-6-step-into-the-venv"},"Step 6. Step into the venv:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," source redisgraphloader/bin/activate\n")),(0,s.kt)("h3",{id:"step-7-install-the-dependencies-for-the-bulk-loader"},"Step 7. Install the dependencies for the bulk loader:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install -r requirements.txt\n")),(0,s.kt)("p",null,"If the above command doesn\u2019t work, install the below modules:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pip3 install pathos\n pip3 install redis\n pip3 install click\n")),(0,s.kt)("h3",{id:"step-8-install-groovy"},"Step 8. Install groovy"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," groovy generateCommerceGraphCSVForImport.groovy\n")),(0,s.kt)("h3",{id:"step-9-verify-the-csv-files-created"},"Step 9. Verify the .csv files created"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," head -n2 *.csv\n ==> addtocart.csv <==\n src_person,dst_product,timestamp\n 0,1156,2010-07-20T16:11:20.551748\n\n ==> contain.csv <==\n src_person,dst_order\n 2000,1215\n\n ==> order.csv <==\n _internalid,id,subTotal,tax,shipping,total\n 2000,0,904.71,86.40,81.90,1073.01\n\n ==> person.csv <==\n _internalid,id,name,address,age,memberSince\n  0,0,Cherlyn Corkery,146 Kuphal Isle South Jarvis MS 74838-0662,16,2010-03-18T16:25:20.551748\n\n ==> product.csv <==\n _internalid,id,name,manufacturer,msrp\n 1000,0,Sleek Plastic Car,Thiel Hills and Leannon,385.62\n\n ==> transact.csv <==\n src_person,dst_order\n 2,2000\n\n ==> view.csv <==\n src_person,dst_product,timestamp\n 0,1152,2012-04-14T11:23:20.551748\n")),(0,s.kt)("h3",{id:"step-10-run-the-bulk-loader-script"},"Step 10. Run the Bulk loader script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  python3 bulk_insert.py prodrec-bulk -n person.csv -n product.csv -n order.csv -r view.csv -r addtocart.csv -r transact.csv -r contain.csv\n person  [####################################]  100%\n 1000 nodes created with label 'person'\n product  [####################################]  100%\n 1000 nodes created with label 'product'\n order  [####################################]  100%\n 811 nodes created with label 'order'\n view  [####################################]  100%\n 24370 relations created for type 'view'\n addtocart  [####################################]  100%\n 6458 relations created for type 'addtocart'\n transact  [####################################]  100%\n 811 relations created for type 'transact'\n contain  [####################################]  100%\n 1047 relations created for type 'contain'\n Construction of graph 'prodrec-bulk' complete: 2811 nodes created, 32686 relations created in 1.021761 seconds\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' graph.query prodrec "match (p:person) where p.id=200 return p.name"\n 1) 1) "p.name"\n 2) (empty array)\n 3) 1) "Cached execution: 0"\n    2) "Query internal execution time: 0.518300 milliseconds"\n')),(0,s.kt)("h3",{id:"step-10--install-redisinsight"},"Step 10 . Install RedisInsight"),(0,s.kt)("p",null,"To use RedisInsight on a local Mac, you can download from the RedisInsight page on the RedisLabs website:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link to access a form")," that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:r(14213).Z,width:"1526",height:"1344"})),(0,s.kt)("p",null,"If you have Docker Engine installed in your system, the quick way is to run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,s.kt)("h3",{id:"step-11-accessing-redisinsight"},"Step 11. Accessing RedisInsight"),(0,s.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,s.kt)("h3",{id:"step-12-run-the-graph-query"},"Step 12. Run the Graph Query"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' GRAPH.QUERY "prodrec-bulk" "match (p:person) where p.id=199 return p"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:r(52643).Z,width:"1032",height:"1076"})),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,s.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,s.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},48118:function(e,t,r){t.Z=r.p+"assets/images/redisgraph_preview-78bbe6e1d7a082f07afaf3188fb7b0de.png"},52643:function(e,t,r){t.Z=r.p+"assets/images/redisgraph_redisinsight_csvtograph-e5efef6ce85c0a5baa2f2d94c66ea711.png"},14213:function(e,t,r){t.Z=r.p+"assets/images/redisinsight-b769d3b36fb7cb59aced16fc89217e5a.png"}}]);