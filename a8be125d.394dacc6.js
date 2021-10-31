(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(266)),s=a(271),l=a(272),c=(a(267),a(268),{id:"index-ratelimiting",title:"How to build a Rate Limiter using Redis",sidebar_label:"How to build a Rate Limiter using Redis",slug:"/howtos/ratelimiting"}),o={unversionedId:"howtos/ratelimiting/index-ratelimiting",id:"howtos/ratelimiting/index-ratelimiting",isDocsHomePage:!1,title:"How to build a Rate Limiter using Redis",description:"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code.",source:"@site/docs/howtos/ratelimiting/index-ratelimiting.mdx",slug:"/howtos/ratelimiting",permalink:"/howtos/ratelimiting",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/ratelimiting/index-ratelimiting.mdx",version:"current",sidebar_label:"How to build a Rate Limiter using Redis",sidebar:"docs",previous:{title:"How to build a Real-Time Leaderboard app Using Redis",permalink:"/howtos/leaderboard"},next:{title:"How to cache REST API responses Using Redis & NodeJS",permalink:"/howtos/caching"}},p=[{value:"Using Python",id:"using-python",children:[{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",children:[]},{value:"Step 3. Run docker compose or install redis manually",id:"step-3-run-docker-compose-or-install-redis-manually",children:[]},{value:"Step 4. Setup and run",id:"step-4-setup-and-run",children:[]}]},{value:"Using NodeJS",id:"using-nodejs",children:[{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-1",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-1",children:[]},{value:"Step 3. Copy file and set proper data inside",id:"step-3-copy-file-and-set-proper-data-inside",children:[]},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies",children:[]},{value:"Step 5. Run docker compose or install redis manually",id:"step-5-run-docker-compose-or-install-redis-manually",children:[]},{value:"Step 6. Running the frontend",id:"step-6-running-the-frontend",children:[]},{value:"Step 7. Running the backend",id:"step-7-running-the-backend",children:[]},{value:"Step 8. Accessing the rate limiting app",id:"step-8-accessing-the-rate-limiting-app",children:[]}]},{value:"Using Java",id:"using-java",children:[{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-2",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-2",children:[]},{value:"Step 3. Run docker compose or install redis manually",id:"step-3-run-docker-compose-or-install-redis-manually-1",children:[]},{value:"Step 4. Setting up an environmental variable",id:"step-4-setting-up-an-environmental-variable",children:[]},{value:"Step 5. Setup and run",id:"step-5-setup-and-run",children:[]},{value:"Step 6. Accessing the rate limiting app",id:"step-6-accessing-the-rate-limiting-app",children:[]}]},{value:"Using Ruby",id:"using-ruby",children:[{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite-3",children:[]},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository-3",children:[]},{value:"Step 3. Copy files and set proper data inside",id:"step-3-copy-files-and-set-proper-data-inside",children:[]},{value:"Step 4. Install dependencies",id:"step-4-install-dependencies-1",children:[]},{value:"Step 5. Run Redis Docker container",id:"step-5-run-redis-docker-container",children:[]},{value:"Step 6. Running the app",id:"step-6-running-the-app",children:[]},{value:"Step 7. Accessing the app",id:"step-7-accessing-the-app",children:[]},{value:"How it works?",id:"how-it-works-1",children:[]},{value:"References",id:"references",children:[]}]}],d={toc:p};function b(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. "),Object(r.b)("div",{class:"text--center"},Object(r.b)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/_mFWjk7ONa8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("p",null,"In this tutorial, we will see how to implement Rate Limiting using various programming languages: "),Object(r.b)(s.a,{defaultValue:"Python",values:[{label:"Python",value:"Python"},{label:"NodeJS",value:"NodeJS"},{label:"Java",value:"Java"},{label:"Ruby",value:"Ruby"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"Python",mdxType:"TabItem"},Object(r.b)("h2",{id:"using-python"},"Using Python"),Object(r.b)("h3",{id:"step-1-pre-requisite"},"Step 1. Pre-requisite"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Python "),Object(r.b)("li",{parentName:"ul"},"Docker"),Object(r.b)("li",{parentName:"ul"},"Docker Compose")),Object(r.b)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),Object(r.b)("h3",{id:"step-3-run-docker-compose-or-install-redis-manually"},"Step 3. Run docker compose or install redis manually"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(r.b)("p",null," If you install redis manually open django-backend/configuration folder and copy ",Object(r.b)("inlineCode",{parentName:"p"},".env.example")," to create ",Object(r.b)("inlineCode",{parentName:"p"},".env"),". And provide the values for environment variables"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),Object(r.b)("h3",{id:"step-4-setup-and-run"},"Step 4. Setup and run"),Object(r.b)("p",null,"Install python, pip and venv (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://installpython3.com/mac/"}),"https://installpython3.com/mac/"),")"),Object(r.b)("p",null,"Use python version: 3.8"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"python3 -m venv venv\nsource ./venv/bin/activate\npip3 install -r requirements.txt\npython3 manage.py collectstatic\npython3 manage.py runserver\n")),Object(r.b)("p",null,"Step 5. Accessing the rate limiting app"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Rate Limiting",src:a(312).default})),Object(r.b)("h4",{id:"how-it-works"},"How it works?"),Object(r.b)("h4",{id:"how-the-data-is-stored"},"How the data is stored:"),Object(r.b)("p",null,"This app will block connections from a client after surpassing certain amount of requests (default: 10) per time (default: 10 sec)\nThe application will return after each request the following headers. That will let the user know how many requests they have remaining before the run over the limit.\nOn the 10th run server should return an HTTP status code of 429 Too Many Requests"),Object(r.b)("p",null,'SETNX is short for "SET if Not eXists". It basically sets key to hold string value if key does not exist. In that case, it is equal to SET.\nWhen key already holds a value, no operation is performed. New responses are added key-ip as shown below:'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," SETNX your_ip:PING limit_amount\n Example: SETNX 127.0.0.1:PING 10 \n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/setnx"}),"More information")),Object(r.b)("p",null,"Set a timeout on key:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," EXPIRE your_ip:PING timeout\n Example: EXPIRE 127.0.0.1:PING 1000 \n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/expire"}),"More information")),Object(r.b)("h4",{id:"how-the-data-is-accessed"},"How the data is accessed:"),Object(r.b)("p",null,"Next responses are get bucket:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," GET your_ip:PING\n Example: GET 127.0.0.1:PING   \n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/get"}),"More information")),Object(r.b)("p",null,"Next responses are changed bucket:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," DECRBY your_ip:PING amount\n Example: DECRBY 127.0.0.1:PING 1\n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/decrby"}),"More information"))),Object(r.b)(l.a,{value:"NodeJS",mdxType:"TabItem"},Object(r.b)("h2",{id:"using-nodejs"},"Using NodeJS"),Object(r.b)("h3",{id:"step-1-pre-requisite-1"},"Step 1. Pre-requisite"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Node - v12.19.0"),Object(r.b)("li",{parentName:"ul"},"NPM - v6.14.8"),Object(r.b)("li",{parentName:"ul"},"Docker - v19.03.13 (optional)")),Object(r.b)("h3",{id:"step-2-clone-the-repository-1"},"Step 2. Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs/\n")),Object(r.b)("h3",{id:"step-3-copy-file-and-set-proper-data-inside"},"Step 3. Copy file and set proper data inside"),Object(r.b)("p",null,"Copy .env.example to .env and make the changes as per your environment"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"REDIS_ENDPOINT_URI: Redis server URI"),Object(r.b)("li",{parentName:"ul"},"REDIS_PASSWORD: Password to the server")),Object(r.b)("h3",{id:"step-4-install-dependencies"},"Step 4. Install dependencies"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm cache clean && npm install\n")),Object(r.b)("h3",{id:"step-5-run-docker-compose-or-install-redis-manually"},"Step 5. Run docker compose or install redis manually"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker network create global\n docker-compose up -d --build\n")),Object(r.b)("h3",{id:"step-6-running-the-frontend"},"Step 6. Running the frontend"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cd client\n yarn\n yarn serve\n")),Object(r.b)("h3",{id:"step-7-running-the-backend"},"Step 7. Running the backend"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," npm run dev\n")),Object(r.b)("h3",{id:"step-8-accessing-the-rate-limiting-app"},"Step 8. Accessing the rate limiting app"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Rate Limiting",src:a(312).default}))),Object(r.b)(l.a,{value:"Java",mdxType:"TabItem"},Object(r.b)("h2",{id:"using-java"},"Using Java"),Object(r.b)("h3",{id:"step-1-pre-requisite-2"},"Step 1. Pre-requisite"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Java"),Object(r.b)("li",{parentName:"ul"},"Docker"),Object(r.b)("li",{parentName:"ul"},"Docker Compose")),Object(r.b)("h3",{id:"step-2-clone-the-repository-2"},"Step 2. Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),Object(r.b)("h3",{id:"step-3-run-docker-compose-or-install-redis-manually-1"},"Step 3. Run docker compose or install redis manually"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"docker network create global\ndocker-compose up -d --build\n")),Object(r.b)("h3",{id:"step-4-setting-up-an-environmental-variable"},"Step 4. Setting up an environmental variable"),Object(r.b)("p",null,"Open directory server (cd server): copy .env.example to create .env and provide the values for environment variables (if needed)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"- REDIS_URL: Redis server url\n- REDIS_HOST: Redis server host\n- REDIS_PORT: Redis server port\n- REDIS_DB: Redis server db index\n- REDIS_PASSWORD: Redis server password\n")),Object(r.b)("h3",{id:"step-5-setup-and-run"},"Step 5. Setup and run"),Object(r.b)("p",null,"Install gradle (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gradle.org/install/"}),"https://gradle.org/install/"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"brew install gradle\n")),Object(r.b)("p",null,"Install JDK (on mac: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"}),"https://docs.oracle.com/javase/10/install/installation-jdk-and-jre-macos.htm"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd server\nexport $(cat .env | xargs)\n./gradlew build\n./gradlew run\n")),Object(r.b)("h3",{id:"step-6-accessing-the-rate-limiting-app"},"Step 6. Accessing the rate limiting app"),Object(r.b)("p",null,"Point your browser to http://IP:5000 and you will be able to select various requests per second option on the screen. As shown in the above example, the server will allow sending max 10 API requests within a 10 second window.If you send more than that, all additional requests will be blocked"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Rate Limiting",src:a(312).default}))),Object(r.b)(l.a,{value:"Ruby",mdxType:"TabItem"},Object(r.b)("h2",{id:"using-ruby"},"Using Ruby"),Object(r.b)("p",null,"The server will allow sending particular number of requests (permitted_requests_count stored in Redis) within a 10 second window. If you send more than that, all additional requests will be blocked."),Object(r.b)("h3",{id:"step-1-pre-requisite-3"},"Step 1. Pre-requisite"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ruby - v2.7.0"),Object(r.b)("li",{parentName:"ul"},"Rails - v5.2.4.5"),Object(r.b)("li",{parentName:"ul"},"NPM - v7.6.0")),Object(r.b)("h3",{id:"step-2-clone-the-repository-3"},"Step 2. Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-ruby/\n")),Object(r.b)("h3",{id:"step-3-copy-files-and-set-proper-data-inside"},"Step 3. Copy files and set proper data inside"),Object(r.b)("p",null,"Copy config/application.yml.example to config/application.yml"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cp config/application.yml.example config/application.yml\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{})," - REDIS_URL: Redis server URI\n")),Object(r.b)("h3",{id:"step-4-install-dependencies-1"},"Step 4. Install dependencies"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," bundle install\n")),Object(r.b)("h3",{id:"step-5-run-redis-docker-container"},"Step 5. Run Redis Docker container"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod\n")),Object(r.b)("h3",{id:"step-6-running-the-app"},"Step 6. Running the app"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," rails s\n")),Object(r.b)("h3",{id:"step-7-accessing-the-app"},"Step 7. Accessing the app"),Object(r.b)("p",null,"Go to the browser and type https://localhost:3000 to access the app"),Object(r.b)("p",null,Object(r.b)("img",{alt:"rate-limiting",src:a(752).default})),Object(r.b)("h3",{id:"how-it-works-1"},"How it works?"),Object(r.b)("p",null,"This app was built using rack-defense gem which will block connections from a client after surpassing certain amount of requests (permitted_requests_count, default: 10) per time (10 seconds)."),Object(r.b)("h4",{id:"code-to-configure-rack-defence"},"Code to configure rack-defence"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"})," Rack::Defense.setup do |config|\n config.store = ENV['REDIS_URL']\n\n permitted_requests_count = config.store.get('permitted_requests_count')\n\n if permitted_requests_count.present?\n   permitted_requests_count = permitted_requests_count.to_i\n else\n   config.store.set('permitted_requests_count', 10)\n end\n\n # 10000 - time, ms\n # || 10 - to avoid ArgumentError on first run\n config.throttle('ping', permitted_requests_count || 10, 10000) do |req|\n   req.ip if req.path == '/ping' && req.get?\n  end\n end\n")),Object(r.b)("p",null,"The application will return response headers after each successful request:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"})," # example\n X-RateLimit-Limit: 10\n X-RateLimit-Remaining: 9\n")),Object(r.b)("p",null,"The application will also return request header after each request (including blocking requests) with count of remaining requests:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"})," # example\n RateLimit-Remaining: 1\n")),Object(r.b)("h4",{id:"how-the-data-is-stored-1"},"How the data is stored:"),Object(r.b)("p",null,"The permitted_requests_count is stored in Redis store in string format. By default, it's 10. You can set new VALUE with these commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"})," SET permitted_requests_count VALUE\n INCR permitted_requests_count\n DECR permitted_requests_count\n")),Object(r.b)("p",null,"IMPORTANT! For the new permitted_requests_count value to take effect you need to restart an app (rails) server after these commands."),Object(r.b)("h4",{id:"how-the-data-is-accessed-1"},"How the data is accessed:"),Object(r.b)("p",null,"You can get permitted_requests_count with this command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"})," GET permitted_requests_count    \n")))),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://redislabs.com/redis-best-practices/basic-rate-limiting/"}),"Basic Rate Limiting")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://redislabs.com/webinars-on-demand/rate-limiting-with-redis/"}),"Rate Limiting with Redis Webinar")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.infoworld.com/article/3230455/how-to-use-redis-for-real-time-metering-applications.html"}),"How to use Redis for real-time metering applications")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://redislabs.com/blog/redis-cell-rate-limiting-redis-module/"}),"redis-cell: a Rate Limiting Redis Module"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}b.isMDXComponent=!0},268:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(266),s=a(274);a(267),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:s.a},e.children)))}},269:function(e,t,a){"use strict";var n=a(0),i=a(270);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},270:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},271:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(269),s=a(273),l=a(56),c=a.n(l),o=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,b=e.groupId,u=e.className,m=Object(r.a)(),h=m.tabGroupChoices,j=m.setTabGroupChoices,O=Object(n.useState)(l),g=O[0],v=O[1],f=n.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=b&&j(b,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},272:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},312:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ratelimiting-0a76b60e4b3861e1190062d5029b86d9.png"},752:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ratelimitingruby-b070cac0e44ad0b8d7e38ca2b3aad174.png"}}]);