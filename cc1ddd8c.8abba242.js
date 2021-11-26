(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{243:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),i=r(7),n=(r(0),r(283)),c={id:"index-azure-terraform-simple",title:"Azure Cache for Redis Enterprise using Terraform",sidebar_label:"Redis Enterprise with Terraform",slug:"/create/azure/terraform-simple"},o={unversionedId:"create/azure/terraform-simple/index-azure-terraform-simple",id:"create/azure/terraform-simple/index-azure-terraform-simple",isDocsHomePage:!1,title:"Azure Cache for Redis Enterprise using Terraform",description:"The Enterprise Tiers of Azure Cache for Redis is generally available as a native fully managed service on Microsoft Azure. This offering combines Azure\u2019s global presence, flexibility, security, and compliance with Redis Enterprise\u2019s unmatched availability, performance, and extended data structure functionality to create the best experience for enterprises. Enterprise features include:",source:"@site/docs/create/azure/terraform-simple/index-azure-terraform-simple.mdx",slug:"/create/azure/terraform-simple",permalink:"/create/azure/terraform-simple",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/azure/terraform-simple/index-azure-terraform-simple.mdx",version:"current",sidebar_label:"Redis Enterprise with Terraform",sidebar:"docs",previous:{title:"Create Redis database on Azure Cache",permalink:"/create/azure/portal"},next:{title:"Azure Cache for Redis Enterprise using Terraform with Private Link",permalink:"/create/azure/terraform-private-endpoint"}},l=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Step 1. Getting Started",id:"step-1-getting-started",children:[]},{value:"Step 2: Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3: Initialize the repository",id:"step-3-initialize-the-repository",children:[]},{value:"Step 4: Modify the variables(optional)",id:"step-4-modify-the-variablesoptional",children:[]},{value:"Step 5: Verify the plan",id:"step-5-verify-the-plan",children:[]},{value:"Step 6: Apply the plan",id:"step-6-apply-the-plan",children:[]},{value:"Step 7: Connect using generated output",id:"step-7-connect-using-generated-output",children:[]},{value:"Resources",id:"resources",children:[]},{value:"References",id:"references",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Enterprise Tiers of Azure Cache for Redis is generally available as a native fully managed service on Microsoft Azure. This offering combines Azure\u2019s global presence, flexibility, security, and compliance with Redis Enterprise\u2019s unmatched availability, performance, and extended data structure functionality to create the best experience for enterprises. Enterprise features include: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/blog/diving-into-redis-6/"}),"Open source Redis 6.0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-high-availability#zone-redundancy"}),"Zone redundancy, with up to 99.99% availability")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"}),"Active geo-replication, with up to 99.999% availability")," - Preview"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/technology/redis-on-flash/"}),"Redis on Flash (RoF)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/redis-enterprise/technology/durable-redis/"}),"Disk persistence with recovery")," - Preview"),Object(n.b)("li",{parentName:"ul"},"Redis Enterprise modules:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/blog/redisearch-2-build-modern-applications-interactive-search/"}),"RediSearch 2.0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/modules/redis-timeseries/"}),"RedisTimeSeries")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.com/modules/redis-bloom/"}),"RedisBloom")))),Object(n.b)("li",{parentName:"ul"},"Scaling",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Datasets up to 13TB "),Object(n.b)("li",{parentName:"ul"},"Up to 2M concurrent client connections "),Object(n.b)("li",{parentName:"ul"},"Over 1M ops/second"))),Object(n.b)("li",{parentName:"ul"},"Security ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-private-link"}),"Private Link support")),Object(n.b)("li",{parentName:"ul"},"TLS connectivity "))),Object(n.b)("li",{parentName:"ul"},"Integrated billing and the ability to apply Azure-commitment spend")),Object(n.b)("p",null,"Azure Resource Manager(a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment."),Object(n.b)("p",null,"The \"azurerm_redis_enterprise_cluster\" is a resource that manages a Redis Enterprise cluster. This is a template to get started with the 'azurerm_redis_enterprise_cluster' resource available in the 'azurerm' provider with Terraform."),Object(n.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://terraform.io"}),"Terraform CLI")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"}),"Azure CLI"))),Object(n.b)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),Object(n.b)("p",null,"Login in Azure using the Azure CLI"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"az login\n")),Object(n.b)("h3",{id:"step-2-clone-the-repository"},"Step 2: Clone the repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/redis-developer/acre-terraform-simple\n")),Object(n.b)("h3",{id:"step-3-initialize-the-repository"},"Step 3: Initialize the repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd acre-terraform-simple\nterraform init\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The output should include: ",Object(n.b)("inlineCode",{parentName:"p"},"Terraform has been successfully initialized"))),Object(n.b)("h3",{id:"step-4-modify-the-variablesoptional"},"Step 4: Modify the variables(optional)"),Object(n.b)("p",null,"The default variables are setup to deploy the smallest 'E10' instance into the 'East US' region.\nChanges can be made by updating the ",Object(n.b)("inlineCode",{parentName:"p"},"variables.tf")," file."),Object(n.b)("h3",{id:"step-5-verify-the-plan"},"Step 5: Verify the plan"),Object(n.b)("p",null,"The 'plan' output will show you everything being created by the template."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform plan\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The plan step does not make any changes in Azure")),Object(n.b)("h3",{id:"step-6-apply-the-plan"},"Step 6: Apply the plan"),Object(n.b)("p",null,"When the plan looks good, 'apply' the template."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform apply\n")),Object(n.b)("h3",{id:"step-7-connect-using-generated-output"},"Step 7: Connect using generated output"),Object(n.b)("p",null,"The access key is sensitive, so viewing the outputs must be requested specifically.\nThe output is also in JSON format."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"terraform output redisgeek_config\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Example output:"),Object(n.b)("pre",{parentName:"blockquote"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n"hostname" = "redisgeek-8jy4.eastus.redisenterprise.cache.azure.net"\n"access_key" = "DQYABC3uRMyDguEXXXXXXXXXXWTRkfgOPjs82Y="\n"port" = "10000"\n}\n'))),Object(n.b)("h3",{id:"resources"},"Resources"),Object(n.b)("h5",{id:"how-to-use-redis-cache-for-redis-like-a-pro"},"How to use Redis Cache for Redis like a Pro"),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/eThj-jwViZw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h5",{id:"do-more-with-azure-cache-for-redis-enterprise-tiers"},"Do More with Azure Cache for Redis, Enterprise Tiers"),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h3",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/garantiadata.redis_enterprise_1sp_public_preview?ocid=redisga_redislabs_cloudpartner_cta1"}),"Azure Cache for Redis Enterprise")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWGGx3"}),"Accelerate Modern Application Delivery with Redis Enterprise on Microsoft Azure")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/develop/dotnet/"}),".Net and Redis")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise"}),"Quickstart: Create a Redis Enterprise cache"))))}p.isMDXComponent=!0},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||n;return r?i.a.createElement(m,o(o({ref:t},s),{},{components:r})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<n;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);