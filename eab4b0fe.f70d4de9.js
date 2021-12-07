(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{272:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return c}));var n=i(3),r=i(7),s=(i(0),i(296)),a=(i(301),i(302),i(297),i(298),{id:"index-redistimeseries",title:"Manage Redis time-series data using RedisTimeSeries Browser Tool",sidebar_label:"Manage Redis time-series data using RedisTimeSeries Browser Tool",slug:"/explore/redisinsight/redistimeseries",authors:["ajeet"]}),o={unversionedId:"explore/redisinsight/redistimeseries/index-redistimeseries",id:"explore/redisinsight/redistimeseries/index-redistimeseries",isDocsHomePage:!1,title:"Manage Redis time-series data using RedisTimeSeries Browser Tool",description:"If you want to add a time series data structure to your Redis database, check out RedisTimeSeries browser tool that comes with RedisInsight.",source:"@site/docs/explore/redisinsight/redistimeseries/index-redistimeseries.mdx",slug:"/explore/redisinsight/redistimeseries",permalink:"/explore/redisinsight/redistimeseries",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redistimeseries/index-redistimeseries.mdx",version:"current",sidebar_label:"Manage Redis time-series data using RedisTimeSeries Browser Tool",sidebar:"docs",previous:{title:"Write Your Serverless Redis function using RedisGears Browser Tool",permalink:"/explore/redisinsight/redisgears"},next:{title:"Perform Database Search and Analytics using RediSearch Browser Tool",permalink:"/explore/redisinsight/redisearch"}},l=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3. Clone the repository",id:"step-3-clone-the-repository",children:[]},{value:"Step 4. Execute the Python script",id:"step-4-execute-the-python-script",children:[]},{value:"Step 5. Execute the script",id:"step-5-execute-the-script",children:[]},{value:"Step 6. Query a range across one or multiple time-series",id:"step-6-query-a-range-across-one-or-multiple-time-series",children:[]},{value:"Step 7 . Displaying the JSON view",id:"step-7--displaying-the-json-view",children:[]},{value:"Step 8.  Displaying the tabular view",id:"step-8--displaying-the-tabular-view",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],d={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"If you want to add a time series data structure to your Redis database, check out RedisTimeSeries browser tool that comes with RedisInsight. "),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redistimeseries/"}),"RedisTimeseries")," is a Redis module developed by Redis to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With RedisTimeSeries, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downsampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf."),Object(s.b)("p",null,"With RedisInsight browser tool, you can perform the below sets of activities:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"TS.RANGE & TS.MRANGE are supported"),Object(s.b)("li",{parentName:"ul"},"Charts support milliseconds."),Object(s.b)("li",{parentName:"ul"},"Ability to configure auto refresh interval."),Object(s.b)("li",{parentName:"ul"},"Ability to submit query with \u2018ctrl + enter\u2019 in single line mode"),Object(s.b)("li",{parentName:"ul"},"Display tabular as well as JSON view ")),Object(s.b)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/explore/redismod"}),"Follow this link to create Redis database using Docker container "),"that comes with RedisTimeSeries module enabled"),Object(s.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(s.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(s.b)("p",null,Object(s.b)("img",{alt:"My Image",src:i(974).default})),Object(s.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(s.b)("p",null,'Select "Connect to a Redis database"\n',Object(s.b)("img",{alt:"My Image",src:i(975).default})),Object(s.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(s.b)("h2",{id:"step-3-clone-the-repository"},"Step 3. Clone the repository"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redistimeseries/AirQualityUCI\n")),Object(s.b)("h2",{id:"step-4-execute-the-python-script"},"Step 4. Execute the Python script"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\n"""sample module for dataset loading into redistimeseries from csv file\n"""\n\nimport argparse\nimport redis\nimport csv\nimport datetime\nimport logging\nfrom tqdm import tqdm\n\n\ndef parse_dataset_row(line):\n\n    result = False\n    date = None\n    Time = None\n    unix_ts = None\n    carbon_monoxide = None\n    temperature_c = None\n    relative_humidity = None\n    # check if we have 15 fields or more, and all fields have something on it\n    if len(line) > 14 and sum([len(line[x]) > 0 for x in range(0, 14)]) == 14:\n        str_date = line[0]\n        str_time = line[1]\n        carbon_monoxide = (\n            float(line[2].replace(",", "."))\n            if (float(line[2].replace(",", ".")) > -200.0)\n            else None\n        )\n        temperature_c = (\n            float(line[12].replace(",", "."))\n            if (float(line[12].replace(",", ".")) > -200.0)\n            else None\n        )\n        relative_humidity = (\n            float(line[13].replace(",", "."))\n            if (float(line[13].replace(",", ".")) > -200.0)\n            else None\n        )\n        unix_ts = int(\n            datetime.datetime.strptime(\n                "{0} {1}".format(str_date, str_time), "%d/%m/%Y %H.%M.%S"\n            ).timestamp()\n        )\n        result = True\n\n    return result, unix_ts, carbon_monoxide, temperature_c, relative_humidity\n\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--port", type=int, help="redis instance port", default=6379)\nparser.add_argument(\n    "--password", type=int, help="redis instance password", default=None\n)\nparser.add_argument("--verbose", help="enable verbose output", action="store_true")\nparser.add_argument("--host", type=str, help="redis instance host", default="127.0.0.1")\nparser.add_argument(\n    "--csv",\n    type=str,\n    help="csv file containing the dataset",\n    default="./AirQualityUCI/AirQualityUCI.csv",\n)\nparser.add_argument(\n    "--csv_delimiter", type=str, help="csv file field delimiter", default=";"\n)\nargs = parser.parse_args()\n\nlog_level = logging.ERROR\nif args.verbose is True:\n    log_level = logging.INFO\nlogging.basicConfig(level=log_level)\n\n# redis setup\nredis_obj = redis.Redis(host=args.host, port=args.port, password=args.password)\ntemperature_key = "ts:temperature"\ncarbon_monoxide_key = "ts:carbon_monoxide"\nrelative_humidity_key = "ts:relative_humidity"\n\nwith open(args.csv, newline="") as csv_file:\n    csv_reader = csv.reader(csv_file, delimiter=args.csv_delimiter)\n    next(csv_reader, None)  # skip the headers\n    for row in tqdm(csv_reader):\n        (\n            result,\n            unix_ts,\n            carbon_monoxide,\n            temperature_c,\n            relative_humidity,\n        ) = parse_dataset_row(row)\n        if result is True:\n            try:\n                if temperature_c is not None:\n                    redis_obj.execute_command(\n                        "ts.add", temperature_key, unix_ts, temperature_c\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            temperature_key, unix_ts, temperature_c\n                        )\n                    )\n                if carbon_monoxide is not None:\n                    redis_obj.execute_command(\n                        "ts.add", carbon_monoxide_key, unix_ts, carbon_monoxide\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            carbon_monoxide_key, unix_ts, carbon_monoxide\n                        )\n                    )\n                if relative_humidity is not None:\n                    redis_obj.execute_command(\n                        "ts.add", relative_humidity_key, unix_ts, relative_humidity\n                    )\n                    logging.info(\n                        "ts.add {0} {1} {2}".format(\n                            relative_humidity_key, unix_ts, relative_humidity\n                        )\n                    )\n            except redis.RedisError as err:\n                logging.error(err)\n\n')),Object(s.b)("h2",{id:"step-5-execute-the-script"},"Step 5. Execute the script"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"$ python3 dataloader.py                        \n9471it [00:29, 326.33it/s]\n")),Object(s.b)("h2",{id:"step-6-query-a-range-across-one-or-multiple-time-series"},"Step 6. Query a range across one or multiple time-series"),Object(s.b)("p",null," ",Object(s.b)("inlineCode",{parentName:"p"}," TS.RANGE ts:carbon_monoxide 1112596200 1112603400")),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(976).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-7--displaying-the-json-view"},"Step 7 . Displaying the JSON view"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(977).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"step-8--displaying-the-tabular-view"},"Step 8.  Displaying the tabular view"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt_text",src:i(978).default,title:"image_tooltip"})),Object(s.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redis.com/redistimeseries/"}),"RedisTimeSeries Project")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redistimeseries"}),"RedisTimeSeries Tutorial")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"explore/redisinsight/profiler"}),"Analyze Your Redis commands using RedisInsight Profiler tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis"))),Object(s.b)("h2",{id:""}),Object(s.b)("div",null,Object(s.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(s.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},298:function(e,t,i){"use strict";var n=i(0),r=i.n(n),s=i(296),a=i(304);i(297),i(55);t.a=function(e){var t=r.a.useState(!1),i=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!i)}})))),i&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(s.a,{components:a.a},e.children)))}},299:function(e,t,i){"use strict";var n=i(0),r=i(300);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},300:function(e,t,i){"use strict";var n=i(0),r=Object(n.createContext)(void 0);t.a=r},301:function(e,t,i){"use strict";var n=i(0),r=i.n(n),s=i(299),a=i(303),o=i(56),l=i.n(o),d=37,c=39;t.a=function(e){var t=e.lazy,i=e.block,o=e.defaultValue,u=e.values,m=e.groupId,p=e.className,b=Object(s.a)(),h=b.tabGroupChoices,g=b.setTabGroupChoices,f=Object(n.useState)(o),v=f[0],_=f[1],y=n.Children.toArray(e.children);if(null!=m){var O=h[m];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&_(O)}var j=function(e){_(e),null!=m&&g(m,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":i},p)},u.map((function(e){var t=e.value,i=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case c:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},i)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},302:function(e,t,i){"use strict";var n=i(3),r=i(0),s=i.n(r);t.a=function(e){var t=e.children,i=e.hidden,r=e.className;return s.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:i,className:r}),t)}},974:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},975:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},976:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image1-ee358a955656cfe9c486f466b2796cdb.png"},977:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image2-661f242e4ab31edb2821cdd6f1027a18.png"},978:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image3-e8e956f69cdd6275cdb30e850dd69adb.png"}}]);