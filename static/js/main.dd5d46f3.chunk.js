(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){},35:function(e,a,t){e.exports=t(78)},40:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),s=t.n(c),i=t(9),r=t(8),m=t(4),o=(t(40),function(){return l.a.createElement("nav",{className:"navbar is-primary is-fixed-top",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(r.b,{className:"navbar-item",to:"/home"},"Home"),l.a.createElement(r.b,{className:"navbar-item",to:"/me"},"Me")),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("button",{className:"button is-white"},"Login")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement(r.b,{to:"/signup"},l.a.createElement("button",{className:"button is-dark"},"Sign Up"))))))}),u=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"CMS by Michael Powell")))},d=t(33),p=t(2),E=t(28),f=t.n(E);var N=Object(n.createContext)(),h=function(e){var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=Object(n.useState)(e),t=Object(p.a)(a,2),l=t[0],c=t[1];return{notifications:l,addNotifications:function(e){c([].concat(Object(d.a)(l),[{id:f()(),text:e}]))},removeNotification:function(e){var a=l.filter(function(a){return a.id!==e});c(a)}}}([{id:0,text:"First Notification Here"},{id:1,text:"Second Notification Here"}]);return l.a.createElement(N.Provider,{value:a},e.children)},v=t(15),b=t.n(v),g=t(29),x=t(30),w=t.n(x),y=Object(n.createContext)(),j=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(p.a)(i,2),m=r[0],o=r[1];return Object(n.useEffect)(function(){function e(){return(e=Object(g.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef").then(function(e){return o(e.data.articles)}),c&&s(!c);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}setTimeout(function(){!function(){e.apply(this,arguments)}()},3e3)},[c]),l.a.createElement(y.Provider,{value:{showNews:c,setShowNews:s,articles:m,setArticles:o}},e.children)},O=(t(71),t(72),function(e){return l.a.createElement(h,null,l.a.createElement(o,null),l.a.createElement("div",{style:{padding:"100px",marginBottom:"60px"}},l.a.createElement(j,null,e.children)),l.a.createElement(u,null))}),k=function(e){var a=Object(n.useState)(e),t=Object(p.a)(a,2),l=t[0],c=t[1];return[l,function(e){c(e.target.value)},function(){c("")}]},C=(t(73),function(){var e=k(""),a=Object(p.a)(e,2),t=a[0],n=a[1],c=k(""),s=Object(p.a)(c,2),i=s[0],r=s[1];return l.a.createElement("div",{className:"Home",style:{width:"500px",margin:"0 auto"}},l.a.createElement("div",{className:"field",style:{paddingTop:"70px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:t,onChange:n}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement("i",{className:"fas fa-check"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:i,onChange:r}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control",style:{paddingTop:"30px",textAlign:"center"}},l.a.createElement("button",{className:"button is-primary"},"Login"))))}),S=(t(74),function(){var e=k(""),a=Object(p.a)(e,2),t=a[0],n=a[1],c=k(""),s=Object(p.a)(c,2),i=s[0],r=s[1],m=k(""),o=Object(p.a)(m,2),u=o[0],d=o[1],E=k(""),f=Object(p.a)(E,2),N=f[0],h=f[1];return l.a.createElement("div",{className:"SignUp",style:{width:"500px",margin:"0 auto"}},l.a.createElement("div",{className:"field",style:{paddingTop:"70px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:t,onChange:n}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-envelope"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Username",value:N,onChange:h}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-user"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:i,onChange:r}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:u===i?"input is-success":"input is-danger",type:"password",placeholder:"Confirm Password",value:u,onChange:d}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control",style:{paddingTop:"30px",textAlign:"center"}},l.a.createElement("button",{className:"button is-primary"},"Login"))))}),T=(t(25),function(e){var a=e.id,t=e.text,c=Object(n.useContext)(N).removeNotification;return l.a.createElement("div",{key:a,className:"notification",style:{height:"70px"}},l.a.createElement("button",{className:"delete",key:a,id:a,onClick:function(){return c(a)}}),t)}),A=t(80),P=t(81),L=(t(75),function(){var e=Object(n.useContext)(N).notifications;return l.a.createElement(A.a,null,e.map(function(e){return l.a.createElement(P.a,{key:e.id,timeout:500,classNames:"Notification"},l.a.createElement(T,{key:e.id,id:e.id,text:e.text}))}))}),M=function(e){var a=e.image,t=e.title,n=e.author,c=e.description,s=e.url,i=e.publishedAt;return l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:a,alt:"Placeholder"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,t),l.a.createElement("br",null),l.a.createElement("small",null,"Author: ",n),l.a.createElement("br",null),c)),l.a.createElement("a",{href:s},i))))},H=function(){return Object(n.useContext)(y).articles.slice(0,5).map(function(e){return l.a.createElement(M,{image:e.urlToImage,url:e.url,title:e.title,author:e.author,description:e.description,publishedAt:e.publishedAt})})},B=function(){return l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"John Smith"),l.a.createElement("small",null,"@johnsmith"),l.a.createElement("small",null,"31m"),l.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.")),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"},l.a.createElement("a",{className:"level-item","aria-label":"reply"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-reply","aria-hidden":"true"}))),l.a.createElement("a",{className:"level-item","aria-label":"retweet"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-retweet","aria-hidden":"true"}))),l.a.createElement("a",{className:"level-item","aria-label":"like"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"}))))))))},J=function(){var e=Object(n.useState)(Array(5).fill(0));return Object(p.a)(e,1)[0].map(function(e){return l.a.createElement(B,null)})},U=function(){var e=Object(n.useContext)(y),a=e.showNews,t=e.setShowNews;return l.a.createElement("div",{className:"tile is-ancestor"},l.a.createElement("div",{className:"tile is-4 is-vertical is-parent"},l.a.createElement("div",{className:"tile is-child box"},l.a.createElement("p",{className:"title"},"Notifications"),l.a.createElement(L,null)),l.a.createElement("div",{className:"tile is-child box"},l.a.createElement("p",{className:"title"},"News ",l.a.createElement("a",{className:a?"button is-primary is-outlined is-loading":"button is-primary is-outlined",style:{marginLeft:"100px",marginTop:"5px"},onClick:function(){t(!a)}},"Refresh News")),l.a.createElement(H,null))),l.a.createElement("div",{className:"tile is-parent"},l.a.createElement("div",{className:"tile is-child box"},l.a.createElement("p",{className:"title"},"My Feed"),l.a.createElement(J,null))))},F=function(){return l.a.createElement(i.c,null,l.a.createElement(O,null,l.a.createElement(i.a,{path:"/home",component:C}),l.a.createElement(i.a,{exact:!0,path:"/",component:C}),l.a.createElement(i.a,{path:"/signup",component:S}),l.a.createElement(i.a,{path:"/me",component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(m.a)();s.a.render(l.a.createElement(i.b,{history:I},l.a.createElement(r.a,{basename:"/CMS"},l.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.dd5d46f3.chunk.js.map