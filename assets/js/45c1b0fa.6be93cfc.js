"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4001],{85162:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(67294),i=a(86010),r="tabItem_Ymn6";function s(e){var n=e.children,a=e.hidden,s=e.className;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:a},n)}},65488:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(87462),i=a(67294),r=a(86010),s=a(72389),o=a(67392),l=a(7094),c=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,a,s=e.lazy,p=e.block,h=e.defaultValue,m=e.values,g=e.groupId,v=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===h?h:null!=(n=null!=h?h:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:f[0].props.value;if(null!==C&&!b.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,R=w.setTabGroupChoices,y=(0,i.useState)(C),E=y[0],_=y[1],S=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=N[g];null!=j&&j!==E&&b.some((function(e){return e.value===j}))&&_(j)}var x=function(e){var n=e.currentTarget,a=S.indexOf(n),t=b[a].value;t!==E&&(T(n),_(t),null!=g&&R(g,String(t)))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,i=S.indexOf(e.currentTarget)+1;a=null!=(t=S[i])?t:S[0];break;case"ArrowLeft":var r,s=S.indexOf(e.currentTarget)-1;a=null!=(r=S[s])?r:S[S.length-1]}null==(n=a)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var n=e.value,a=e.label,s=e.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:x,onClick:x},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===n})}),null!=a?a:n)}))),s?(0,i.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function h(e){var n=(0,s.Z)();return i.createElement(p,(0,t.Z)({key:String(n)},e))}},1203:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(67294),i=a(3905),r=a(48811),s="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",c="riIcon_yDou",u="riTitle_x6vI",d="riDescription_RDnu",p="riMore_apRP",h=a(86010),m=function(e){var n=t.useState(!1),a=n[0],m=n[1];return t.createElement("a",{href:e.page,className:s},t.createElement("div",{className:o},t.createElement("div",{className:c},t.createElement("span",{className:"fe fe-zap"})),t.createElement("div",{className:l},t.createElement("div",{className:u},t.createElement("a",{href:e.page},e.title)),t.createElement("div",{className:d},e.description,t.Children.count(e.children)>0&&t.createElement("span",{className:(0,h.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return m(!a)}})))),a&&t.createElement("div",{className:"ri-description-long"},t.createElement(i.Zo,{components:r.Z},e.children)))}},99682:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var t=a(87462),i=a(63366),r=(a(67294),a(3905)),s=(a(1203),a(65488),a(85162),a(44996),["components"]),o={id:"index-lesson_9",title:"Caching REST Services with Redis",sidebar_label:"Caching w/ Redis",slug:"/develop/java/redis-and-spring-course/lesson_9",authors:["bsb"]},l=void 0,c={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",id:"develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9",title:"Caching REST Services with Redis",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_9",slug:"/develop/java/redis-and-spring-course/lesson_9",permalink:"/develop/java/redis-and-spring-course/lesson_9",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-lesson_9",title:"Caching REST Services with Redis",sidebar_label:"Caching w/ Redis",slug:"/develop/java/redis-and-spring-course/lesson_9",authors:["bsb"]},sidebar:"docs",previous:{title:"Recommendations w/ RedisGraph",permalink:"/develop/java/redis-and-spring-course/lesson_8"},next:{title:"Overview",permalink:"/develop/java/spring/rate-limiting"}},u={},d=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Spring-Redis Caching Recipe",id:"spring-redis-caching-recipe",level:3},{value:"Using the @Cacheable annotation",id:"using-the-cacheable-annotation",level:3}],p={toc:d};function h(e){var n=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,"Learn how easy it is to use Redis as a cache in your Spring applications"),(0,r.kt)("h3",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"In this lesson, students will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The basics of Caching RESTful Services"),(0,r.kt)("li",{parentName:"ul"},"How to configure the Spring Data Redis ",(0,r.kt)("inlineCode",{parentName:"li"},"RedisCacheManager")," using ",(0,r.kt)("inlineCode",{parentName:"li"},"RedisCacheConfiguration")),(0,r.kt)("li",{parentName:"ul"},"How to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Cacheable")," annotation to mark a REST controller response as cacheable\nIf you get stuck:"),(0,r.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-9"},"https://github.com/redis-developer/redi2read/tree/course/milestone-9"))),(0,r.kt)("h3",{id:"spring-redis-caching-recipe"},"Spring-Redis Caching Recipe"),(0,r.kt)("p",null,"To implement caching in our Spring Boot application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure the Redis cache manager"),(0,r.kt)("li",{parentName:"ul"},"Enable application-wide caching with the ",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableCaching")," annotation")),(0,r.kt)("p",null,"In the main application file (",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/Redi2readApplication.java"),"), add the ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheManager")," method as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@EnableCaching\npublic class Redi2readApplication {\n\n  // ...\n\n  @Bean\n  public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {\n    RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig() //\n        .prefixCacheNameWith(this.getClass().getPackageName() + ".") //\n        .entryTtl(Duration.ofHours(1)) //\n        .disableCachingNullValues();\n\n    return RedisCacheManager.builder(connectionFactory) //\n        .cacheDefaults(config) //\n        .build();\n  }\n\n  // ...\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheManager")," method takes an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisConnectionFactory"),". In it we will configure our cache to use a Redis\nkey prefix equals to our application\u2019s main package plus a period, that is ",(0,r.kt)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read."),"\nWe also set the TTL or \u201cTime to Live\u201d of our cache entries to 1 hour and make sure that we don\u2019t cache nulls.\nAt the class level, we also use the annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableCaching "),"to globally enable caching for our applications.\nThe changes above will need the import statements shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.cache.annotation.EnableCaching;\nimport org.springframework.data.redis.cache.RedisCacheConfiguration;\nimport org.springframework.data.redis.cache.RedisCacheManager;\nimport java.time.Duration;\n")),(0,r.kt)("h3",{id:"using-the-cacheable-annotation"},"Using the @Cacheable annotation"),(0,r.kt)("p",null,"In the context of a RESTful service, caching makes sense at the handoff between the application and the HTTP protocol.\nIt seems almost silly to think about caching anything in an application powered by Redis, but complex business logic\ntouching many data repositories and performing intense calculations can add to your response\u2019s latency.\nThe ideal place to perform this caching is at the controller level. For example, let\u2019s say that we wanted to cache\nthe responses of our book searches in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BookController"),". We could simple add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Cacheable")," annotation as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/search")\n@Cacheable("book-search")\npublic SearchResults<String,String> search(@RequestParam(name="q")String query) {\n  RediSearchCommands<String, String> commands = searchConnection.sync();\n  SearchResults<String, String> results = commands.search(searchIndexName, query);\n  return results;\n}\n')),(0,r.kt)("p",null,"Spring will now use Redis to create keys under the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.redislabs.edu.redi2read.book-search")," prefix to store cache entries for the search method.\nThere is no need to perform cache maintenance yourself. Spring will intercept the request and check the cache;\nin the case of a cache hit, it will return its value. Otherwise, in case of a miss, it will store the cache\u2019s search method\u2019s return value,\nallowing the method to execute as if there was no cache at all.\nIf we try the request ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/search?q=java"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8080/api/books/search?q=java'\n")),(0,r.kt)("p",null,"On the first request we get a 28 ms response time:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PostMan Request 2",src:a(10702).Z,width:"1684",height:"1040"})),(0,r.kt)("p",null,"Subsequent responses return in the range of 8 ms to 10 ms consistently:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PostMan Request 1",src:a(70442).Z,width:"1684",height:"1040"})))}h.isMDXComponent=!0},70442:function(e,n,a){n.Z=a.p+"assets/images/image1-b14ce854155fedafbf2e5e2ae72c476c.png"},10702:function(e,n,a){n.Z=a.p+"assets/images/image2-96a417f52c38a686e5b194570d9db8dc.png"}}]);