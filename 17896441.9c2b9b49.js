(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{361:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),i=t(373),c=t(21),m=t(364),o=t(374);var s=function(e){var a=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:a.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:a.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},a.next.title," \xbb"))))},u=t(375);var d=function(){var e=Object(c.default)().siteConfig.title,a=Object(u.useActivePlugin)({failfast:!0}).pluginId,t=Object(i.useDocsPreferredVersion)(a).savePreferredVersionName,n=Object(u.useActiveVersion)(a),r=Object(u.useDocVersionSuggestions)(a),m=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var d,E=null!=m?m:(d=s).docs.find((function(e){return e.id===d.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:E.path,onClick:function(){return t(s.name)}},"latest version"))," ","(",s.label,")."))},E=t(3),g=t(7),v=t(371),p=t(104),f=t.n(p),b=function(e){var a=e.className,t=Object(g.a)(e,["className"]);return l.a.createElement("svg",Object(E.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(v.a)(f.a.iconEdit,a)},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},h=t(105),N=t.n(h);a.default=function(e){var a,t=Object(c.default)().siteConfig,n=t.url,o=e.content,E=o.metadata,g=o.frontMatter,p=g.image,f=g.keywords,h=g.hide_title,_=g.hide_table_of_contents,w=(g.authors,E.description),O=E.title,j=E.permalink,k=E.editUrl,y=E.lastUpdatedAt,x=E.lastUpdatedBy,P=t.customFields.authors,A=Object(u.useActivePlugin)({failfast:!0}).pluginId,M=Object(u.useVersions)(A),I=Object(u.useActiveVersion)(A),V=M.length>1,D=Object(i.useTitleFormatter)(O),F=Object(m.a)(p,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,D),l.a.createElement("meta",{property:"og:title",content:D}),w&&l.a.createElement("meta",{name:"description",content:w}),w&&l.a.createElement("meta",{property:"og:description",content:w}),f&&f.length&&l.a.createElement("meta",{name:"keywords",content:f.join(",")}),p&&l.a.createElement("meta",{property:"og:image",content:F}),p&&l.a.createElement("meta",{name:"twitter:image",content:F}),p&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),j&&l.a.createElement("meta",{property:"og:url",content:n+j}),j&&l.a.createElement("link",{rel:"canonical",href:n+j})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(v.a)("col",(a={},a[N.a.docItemCol]=!_,a))},l.a.createElement(d,null),l.a.createElement("div",{className:N.a.docItemContainer},l.a.createElement("article",null,V&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!h&&l.a.createElement("header",null,l.a.createElement("h1",{className:N.a.docTitle},O)),o.frontMatter.authors&&l.a.createElement("div",{className:"docAuthors"},l.a.createElement("hr",null),o.frontMatter.authors.map((function(e){return l.a.createElement("div",{className:N.a.authorByline},l.a.createElement("img",{className:N.a.authorProfileImage,src:"/img/"+(P[e].image?P[e].image:"default_author_profile_pic.png"),alt:"Profile picture for "+P[e].name})," ",l.a.createElement("div",null,l.a.createElement("div",{className:N.a.authorLabel},"Author:"),l.a.createElement("div",null,l.a.createElement("a",{href:P[e].link,target:"_blank"},P[e].name),", ",P[e].title)))})),l.a.createElement("hr",null)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(k||y||x)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},(!o.frontMatter.hasOwnProperty("isEditable")||!0===o.frontMatter.isEditable)&&l.a.createElement("div",{className:"col"},k&&l.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(b,null),"Edit this page")),(y||x)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",y&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*y).toISOString(),className:N.a.docLastUpdatedAt},new Date(1e3*y).toLocaleDateString()),x&&" "),x&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,x)),!1))))),(!o.frontMatter.hasOwnProperty("useNextPrev")||!0===o.frontMatter.useNextPrev)&&l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:E}))))))}}}]);