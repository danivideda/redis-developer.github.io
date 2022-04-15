(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),r=(a(0),a(363)),s=(a(368),a(369),a(364),a(365),{id:"index-redisearch",title:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",sidebar_label:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",slug:"/explore/redisinsightv2/redisearch",authors:["ajeet"]}),l={unversionedId:"explore/redisinsightv2/redisearch/index-redisearch",id:"explore/redisinsightv2/redisearch/index-redisearch",isDocsHomePage:!1,title:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",description:"A full-featured pure desktop GUI client, RedisInsight supports RediSearch. RediSearch is a powerful indexing, querying, and full-text search engine for Redis. It is one of the most mature and feature-rich Redis modules. With RedisInsight, the following functionalities are possible:",source:"@site/docs/explore/redisinsightv2/redisearch/index-redisearch.mdx",slug:"/explore/redisinsightv2/redisearch",permalink:"/explore/redisinsightv2/redisearch",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/redisearch/index-redisearch.mdx",version:"current",lastUpdatedAt:1649946399,sidebar_label:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",sidebar:"docs",previous:{title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",permalink:"/explore/redisinsightv2/profiler"},next:{title:"RedisInsight Developer Hub for Redis Interactive Tutorials",permalink:"/explore/redisinsight"}},o=[{value:"Step 1. Create a Redis Database",id:"step-1-create-a-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3. Movie Sample Database",id:"step-3-movie-sample-database",children:[]},{value:"Step 4. Insert Movies",id:"step-4-insert-movies",children:[]},{value:"Step 5. RediSearch &amp; Indexing",id:"step-5-redisearch--indexing",children:[]},{value:"Step 6. Create the Index",id:"step-6-create-the-index",children:[]},{value:"Step 7. Fuzzy Search",id:"step-7-fuzzy-search",children:[]},{value:"Step 8. Aggregation",id:"step-8-aggregation",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:o};function b(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A full-featured pure desktop GUI client, RedisInsight supports RediSearch. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/"}),"RediSearch")," is a powerful indexing, querying, and full-text search engine for Redis. It is one of the most mature and feature-rich Redis modules. With RedisInsight, the following functionalities are possible:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"MyImage",src:a(587).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Multi-line for building queries"),Object(r.b)("li",{parentName:"ul"},"Ability to submit query with \u2018ctrl + enter\u2019 in single line mode"),Object(r.b)("li",{parentName:"ul"},"Better handling of long index names in index selector dropdown"),Object(r.b)("li",{parentName:"ul"},"Supports Aggregation"),Object(r.b)("li",{parentName:"ul"},"Supports Fuzzy logic"),Object(r.b)("li",{parentName:"ul"},"Supports simple and complex conditions"),Object(r.b)("li",{parentName:"ul"},"Sorting"),Object(r.b)("li",{parentName:"ul"},"Pagination"),Object(r.b)("li",{parentName:"ul"},"Counting")),Object(r.b)("p",null,"RediSearch allows you to quickly create indexes on datasets (stored as Redis Hashes or, with RedisJSON, as JSON documents), and uses an incremental indexing approach for rapid index creation and deletion. The indexes let you query your data at lightning speed, perform complex aggregations, and filter by properties, numeric ranges, and geographical distance."),Object(r.b)("h3",{id:"step-1-create-a-redis-database"},"Step 1. Create a Redis Database"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/explore/redismod"}),"Follow this link to create a Redis database using a Docker container")," that comes with the RediSearch module enabled."),Object(r.b)("h3",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(r.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link")," to access a form that allows you to select the operating system of your choice."),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(588).default})),Object(r.b)("p",null,"Run the installer.\nOnce the installation  completes, you should be able to connect to a Redis database."),Object(r.b)("p",null,'Select "Connect to a Redis database".'),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(589).default})),Object(r.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(590).default})),Object(r.b)("h3",{id:"step-3-movie-sample-database"},"Step 3. Movie Sample Database"),Object(r.b)("p",null,"In this section, you will use a simple dataset describing movies, for now, all records are in English. You will learn more about other languages in another tutorial."),Object(r.b)("p",null,"A movie is represented by the following attributes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"movie_id"))," : The unique ID of the movie, internal to this database"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://imdb.com"}),"IMDB")," database.")),Object(r.b)("h4",{id:"key-and-data-structure"},"Key and Data Structure"),Object(r.b)("p",null,"As a Redis developer, one of the first things to look at when building your application is to define the structure of the key and data (data design/data modeling)."),Object(r.b)("p",null,"A common strategy for Redis is to use specific patterns when naming keys. For example in this application where the database will probably deal with various business objects: movies, actors, theaters, users, ... we can use the following pattern:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"business_object:key"))),Object(r.b)("p",null,"For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"movie:001")," for the movie with the id 001"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user:001")," the user with the id 001")),Object(r.b)("p",null,"and for the movie's information you should use a Redis ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/topics/data-types#hashes"}),"Hash"),". "),Object(r.b)("p",null,"A Redis Hash allows the application to structure all the movie attributes in individual fields; also RediSearch will index the fields based on the index definition."),Object(r.b)("h3",{id:"step-4-insert-movies"},"Step 4. Insert Movies"),Object(r.b)("p",null,"It is time now to add some data into your database, let's insert a few movies, using ",Object(r.b)("inlineCode",{parentName:"p"},"redis-cli")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/"}),"RedisInsight"),"."),Object(r.b)("p",null,"Once you are connected to your Redis instance run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'HSET movie:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy." release_year 1980 genre "Action" rating 8.7 votes 1127635 imdb_id tt0080684\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'HSET movie:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 imdb_id tt0068646\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'HSET movie:11004 title "Heat" plot "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist." release_year 1995 genre "Thriller" rating 8.2 votes 559490 imdb_id tt0113277\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'HSET "movie:11005" title "Star Wars: Episode VI - Return of the Jedi" genre "Action" votes 906260 rating 8.3 release_year 1983  plot "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star." ibmdb_id "tt0086190"\n')),Object(r.b)("p",null,"Now it is possible to get information from the hash using the movie ID. For example if you want to get the title, and rating execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),">> HMGET movie:11002 title rating\n")),Object(r.b)("h4",{id:"result"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),Object(r.b)("h4",{id:"increment-the-movie-rating"},"Increment the Movie Rating"),Object(r.b)("p",null,"You can increment the rating of this movie using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"HINCRBYFLOAT movie:11002 rating 0.1\n")),Object(r.b)("p",null,"Here's a quick screenshot of the results shown in RedisInsight:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"MyImage",src:a(591).default})),Object(r.b)("p",null,"But how do you get a movie or list of movies by year of release, rating or title?"),Object(r.b)("p",null,"One option, would be to read all the movies, check all fields and then return only matching movies; no need to say that this is a really bad idea. Nevertheless this is where Redis developers often create custom secondary indexes using SET/SORTED SET structures that point back to the movie hash. This needs some heavy design and implementation."),Object(r.b)("p",null,"This is where the RediSearch module can help, and why it was created."),Object(r.b)("h3",{id:"step-5-redisearch--indexing"},"Step 5. RediSearch & Indexing"),Object(r.b)("p",null,"RediSearch greatly simplifies this by offering a simple and automatic way to create secondary indices on Redis Hashes. (more datastructure will eventually come)"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/RediSearch/redisearch-getting-started/blob/master/docs/images/secondary-index.png?raw=true",alt:"Secondary Index"}))),Object(r.b)("p",null,"Using RediSearch if you want to query on a field, you must first index that field. Let's start by indexing the following fields for our movies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Title"),Object(r.b)("li",{parentName:"ul"},"Release Year"),Object(r.b)("li",{parentName:"ul"},"Rating"),Object(r.b)("li",{parentName:"ul"},"Genre")),Object(r.b)("p",null,"When creating an index you define:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"which data you want to index: all ",Object(r.b)("em",{parentName:"li"},"hashes")," with a key starting with ",Object(r.b)("inlineCode",{parentName:"li"},"movies")," "),Object(r.b)("li",{parentName:"ul"},"which fields in the hashes you want to index using a Schema definition.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Warning: Do not index all fields"))),Object(r.b)("p",{parentName:"blockquote"},"Indexes take space in memory, and must be updated when the primary data is updated. So create the index carefully and keep the definition up to date with your needs.")),Object(r.b)("h3",{id:"step-6-create-the-index"},"Step 6. Create the Index"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),' FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n')),Object(r.b)("p",null,"The database contains a few movies, and an index, it is now possible to execute some queries."),Object(r.b)("h4",{id:"query-all-the-movies-that-contains-the-string-war"},'Query: All the movies that contains the string "',Object(r.b)("inlineCode",{parentName:"h4"},"war"),'"'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH idx:movie "war"\n')),Object(r.b)("h4",{id:"result-1"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "votes"\n   4) "906260"\n   5) "plot"\n   6) "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star."\n   7) "rating"\n   8) "8.3"\n   9) "release_year"\n   10) "1983"\n   11) "ibmdb_id"\n   12) "tt0086190"\n   13) "genre"\n   14) "Action"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "votes"\n   4) "1127635"\n   5) "plot"\n   6) "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy."\n   7) "rating"\n   8) "8.8"\n   9) "release_year"\n   10) "1980"\n   11) "genre"\n   12) "Action"\n   13) "imdb_id"\n   14) "tt0080684"\n>\n')),Object(r.b)("h4",{id:"query-limit-the-list-of-fields-returned-by-the-query-using-the-return-parameter"},"Query: Limit the list of fields returned by the query using the RETURN parameter"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FT.SEARCH")," commands returns a list of results starting with the number of results, then the list of elements (keys & fields)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH idx:movie "war" RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-2"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n> \n')),Object(r.b)("p",null,"As you can see the movie ",Object(r.b)("em",{parentName:"p"},"Star Wars: Episode V - The Empire Strikes Back")," is found, even though you used only the word \u201cwar\u201d to match \u201cWars\u201d in the title. This is because the title has been indexed as text, so the field is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Escaping/"}),"tokenized")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redisearch/Stemming/"}),"stemmed"),"."),Object(r.b)("p",null,"Later when looking at the query syntax in more detail you will learn more about the search capabilities."),Object(r.b)("p",null,"It is also possible to limit the list of fields returned by the query using the ",Object(r.b)("inlineCode",{parentName:"p"},"RETURN")," parameter, let's run the same query, and return only the title and release_year."),Object(r.b)("h4",{id:"query-all-the-movies-that-contains-the-string-war-but-not-the-jedi-one"},'Query: All the movies that contains the string "war" but NOT the "jedi" one'),Object(r.b)("p",null,"Adding the string ",Object(r.b)("inlineCode",{parentName:"p"},"-Jedi")," (minus) will ask the query engine not to return values that contain ",Object(r.b)("inlineCode",{parentName:"p"},"jedi"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH idx:movie "war -Jedi" RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-3"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(r.b)("h3",{id:"step-7-fuzzy-search"},"Step 7. Fuzzy Search"),Object(r.b)("p",null,'All the movies that contains the string "gdfather using fuzzy search"'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH "idx:movie" " %gdfather% " RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-4"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 1\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n')),Object(r.b)("h4",{id:"query-all-thriller-movies"},"Query: All Thriller movies"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH "idx:movie" "@genre:{Thriller}" RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-5"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 1\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n')),Object(r.b)("h4",{id:"query-all-thriller-or-action-movies"},"Query: All Thriller or Action movies"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH "idx:movie" "@genre:{Thriller|Action}" RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-6"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 3\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11005"\n5) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n6) "movie:11002"\n7) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(r.b)("h4",{id:"query--all-the-movies-released-between-1970-and-1980-included"},"Query : All the movies released between 1970 and 1980 (included)"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FT.SEARCH")," syntax has two ways to query numeric fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"using the ",Object(r.b)("inlineCode",{parentName:"li"},"FILTER")," parameter")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.SEARCH "idx:movie" "@genre:{Thriller|Action}" FILTER release_year 1970  1980 RETURN 2 title release_year\n')),Object(r.b)("h4",{id:"result-7"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),Object(r.b)("h3",{id:"step-8-aggregation"},"Step 8. Aggregation"),Object(r.b)("h4",{id:"query-number-of-movies-by-year"},"Query: Number of movies by year"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.AGGREGATE "idx:movie" "*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies\n')),Object(r.b)("h4",{id:"result-8"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 4\n2) 1) "release_year"\n   2) "1983"\n   3) "nb_of_movies"\n   4) "1"\n3) 1) "release_year"\n   2) "1995"\n   3) "nb_of_movies"\n   4) "1"\n4) 1) "release_year"\n   2) "1980"\n   3) "nb_of_movies"\n   4) "1"\n5) 1) "release_year"\n   2) "1972"\n   3) "nb_of_movies"\n   4) "1"\n')),Object(r.b)("h4",{id:"query-number-of-movies-by-year-from-the-most-recent-to-the-oldest"},"Query: Number of movies by year from the most recent to the oldest"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'FT.AGGREGATE "idx:movie" "*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies SORTBY 2 @release_year DESC\n')),Object(r.b)("h4",{id:"result-9"},"Result:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'1) 4\n2) 1) "release_year"\n   2) "1995"\n   3) "nb_of_movies"\n   4) "1"\n3) 1) "release_year"\n   2) "1983"\n   3) "nb_of_movies"\n   4) "1"\n4) 1) "release_year"\n   2) "1980"\n   3) "nb_of_movies"\n   4) "1"\n5) 1) "release_year"\n   2) "1972"\n   3) "nb_of_movies"\n   4) "1"\n\n')),Object(r.b)("h3",{id:"additional-links"},"Additional Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://oss.redis.com/redisearch/"}),"RediSearch Project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/redisearch"}),"RediSearch Tutorial")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started"}),"Getting Started with Movie Database")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsightv2/getting-started"}),"Getting Started with RedisInsight v2.0")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsightv2/browser"}),"Visualize Redis Database keys using the RedisInsight Browser Tool"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}b.isMDXComponent=!0},365:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(363),s=a(370);a(364),a(59);t.a=function(e){var t=i.a.useState(!1),a=t[0],n=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(r.a,{components:s.a},e.children)))}},366:function(e,t,a){"use strict";var n=a(0),i=a(367);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},367:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},368:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(366),s=a(371),l=a(60),o=a.n(l),c=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,u=e.groupId,p=e.className,h=Object(r.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(n.useState)(l),g=j[0],f=j[1],y=n.Children.toArray(e.children);if(null!=u){var v=m[u];null!=v&&v!==g&&d.some((function(e){return e.value===v}))&&f(v)}var N=function(e){f(e),null!=u&&O(u,e)},R=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return R.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(R,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},369:function(e,t,a){"use strict";var n=a(3),i=a(0),r=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},587:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisearch-da64b00be4ca7771a0067d876b34e42a.png"},588:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-register-07e99cf0ec20dc07567c2935f64b2587.png"},589:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database-connection-d98dee54e3ef4b7672150a916d252b8a.png"},590:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database-4df29dfbac1e6bf612d5468cdff4784d.png"},591:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rating-964e0e2cee104d080b8a3779ab08bbc9.png"}}]);