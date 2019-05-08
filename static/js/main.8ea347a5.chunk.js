(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){e.exports=t(81)},45:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),s=t.n(c),r=t(4),i=(t(43),t(44),t(45),t(9)),m=t(8),o=function(){return l.a.createElement("nav",{className:"navbar is-primary is-fixed-top",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"},l.a.createElement(m.b,{className:"navbar-item",to:"/home"},"Home"),l.a.createElement(m.b,{className:"navbar-item",to:"/me"},"Me")),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("button",{className:"button is-white"},"Login")),l.a.createElement("div",{className:"navbar-item"},l.a.createElement(m.b,{to:"/signup"},l.a.createElement("button",{className:"button is-dark"},"Sign Up"))))))},u=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,"CMS by Michael Powell")))},d=t(2),E=t(14),p=t(10),f=t.n(p),v=function(e,a){switch(a.type){case"ADD":return[].concat(Object(E.a)(e),[{id:f()(),text:a.text}]);case"REMOVE":return e.filter(function(e){return e.id!==a.id});default:return e}},N=[{id:0,text:"First Notification Here"},{id:1,text:"Second Notification Here"}],h=Object(n.createContext)(),b=Object(n.createContext)(),g=function(e){var a=Object(n.useReducer)(v,N),t=Object(d.a)(a,2),c=t[0],s=t[1];return l.a.createElement(h.Provider,{value:c},l.a.createElement(b.Provider,{value:s},e.children))},x=t(17),w=t.n(x),y=t(32),O=t(33),j=t.n(O),k=Object(n.createContext)(),C=function(e){var a=Object(n.useState)(!0),t=Object(d.a)(a,2),c=t[0],s=t[1],r=Object(n.useState)([]),i=Object(d.a)(r,2),m=i[0],o=i[1];return Object(n.useEffect)(function(){function e(){return(e=Object(y.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d5342e381e0748ada294675b8bca5fef").then(function(e){o(e.data.articles),s(!1)}),c&&s(!c);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}setTimeout(function(){!function(){e.apply(this,arguments)}()},3e3)},[c]),l.a.createElement(k.Provider,{value:{showNews:c,setShowNews:s,articles:m,setArticles:o}},e.children)},S=function(e,a){switch(a.type){case"ADD":return[].concat(Object(E.a)(e),[{id:f()(),name:a.name,at:a.at,text:a.text}]);case"REMOVE":return e.filter(function(e){return e.id!==a.id});default:return e}},T=[{id:f()(),name:"Tom Fence",at:"@tomfence",text:"Had a great time at the lake yesterday!"},{id:f()(),name:"Will Ford",at:"@willford",text:"The basketball game was amazing, a lot of close calls, but we came out on top!"}],A=Object(n.createContext)(),P=Object(n.createContext)(),M=function(e){var a=Object(n.useReducer)(S,T),t=Object(d.a)(a,2),c=t[0],s=t[1];return l.a.createElement(A.Provider,{value:c},l.a.createElement(P.Provider,{value:s},e.children))},R=function(e){return l.a.createElement(g,null,l.a.createElement(o,null),l.a.createElement("div",{style:{padding:"100px",marginBottom:"60px"}},l.a.createElement(C,null,l.a.createElement(M,null,e.children))),l.a.createElement(u,null))},W=function(e){var a=Object(n.useState)(e),t=Object(d.a)(a,2),l=t[0],c=t[1];return[l,function(e){c(e.target.value)},function(){c("")}]},D=(t(76),function(){var e=W(""),a=Object(d.a)(e,2),t=a[0],n=a[1],c=W(""),s=Object(d.a)(c,2),r=s[0],i=s[1];return l.a.createElement("div",{className:"Home container"},l.a.createElement("div",{className:"field",style:{paddingTop:"70px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:t,onChange:n}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-envelope"})),l.a.createElement("span",{className:"icon is-small is-right"},l.a.createElement("i",{className:"fas fa-check"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:r,onChange:i}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control",style:{paddingTop:"30px",textAlign:"center"}},l.a.createElement("button",{className:"button is-primary"},"Login"))))}),F=(t(77),function(){var e=W(""),a=Object(d.a)(e,2),t=a[0],n=a[1],c=W(""),s=Object(d.a)(c,2),r=s[0],i=s[1],m=W(""),o=Object(d.a)(m,2),u=o[0],E=o[1],p=W(""),f=Object(d.a)(p,2),v=f[0],N=f[1];return l.a.createElement("div",{className:"SignUp container"},l.a.createElement("div",{className:"field",style:{paddingTop:"70px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left has-icons-right"},l.a.createElement("input",{className:"input",type:"email",placeholder:"Email",value:t,onChange:n}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-envelope"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Username",value:v,onChange:N}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-user"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:"input",type:"password",placeholder:"Password",value:r,onChange:i}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field",style:{paddingTop:"30px",width:"300px",margin:"0 auto"}},l.a.createElement("p",{className:"control has-icons-left"},l.a.createElement("input",{className:u===r?"input is-success":"input is-danger",type:"password",placeholder:"Confirm Password",value:u,onChange:E}),l.a.createElement("span",{className:"icon is-small is-left"},l.a.createElement("i",{className:"fas fa-lock"})))),l.a.createElement("div",{className:"field"},l.a.createElement("p",{className:"control",style:{paddingTop:"30px",textAlign:"center"}},l.a.createElement("button",{className:"button is-primary"},"Login"))))}),H=(t(27),Object(n.memo)(function(e){var a=e.image,t=e.title,n=e.author,c=e.description,s=e.url,r=e.publishedAt;return l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:a,alt:"Placeholder"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,t),l.a.createElement("br",null),l.a.createElement("small",null,"Author: ",n),l.a.createElement("br",null),c)),l.a.createElement("a",{href:s},r))))})),L=function(){return Object(n.useContext)(k).articles.slice(0,5).map(function(e){return l.a.createElement(H,{key:e.url,image:e.urlToImage,url:e.url,title:e.title,author:e.author,description:e.description,publishedAt:e.publishedAt})})},U=(t(78),function(){var e=Object(n.useContext)(k),a=e.showNews,t=e.setShowNews;return l.a.createElement("div",{className:"tile is-child box Article"},l.a.createElement("div",{className:"title"},l.a.createElement("nav",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},"News")),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{className:a?"button is-primary is-outlined is-loading":"button is-primary is-outlined",onClick:function(){return t(!a)}},"Refresh News"))))),!0===a?l.a.createElement("progress",{className:"progress is-primary",max:"100"},"15%"):l.a.createElement(L,null))}),B=Object(n.memo)(function(e){var a=e.name,t=e.at,n=e.text;return l.a.createElement("div",{className:"box"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:"Placeholder"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,a),l.a.createElement("small",null,t),l.a.createElement("br",null),n)),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"},l.a.createElement("a",{className:"level-item","aria-label":"reply"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-reply","aria-hidden":"true"}))),l.a.createElement("a",{className:"level-item","aria-label":"retweet"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-retweet","aria-hidden":"true"}))),l.a.createElement("a",{className:"level-item","aria-label":"like"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-heart","aria-hidden":"true"}))))))))}),J=t(82),V=t(83),z=(t(28),function(){var e=Object(n.useContext)(A);return l.a.createElement(J.a,null,e.map(function(e){return l.a.createElement(V.a,{key:e.id,timeout:500,classNames:"Feed"},l.a.createElement(B,{key:e.id,name:e.name,at:e.at,text:e.text}))}))}),I=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],m=r[1],o=W(""),u=Object(d.a)(o,3),E=u[0],p=u[1],f=u[2],v=Object(n.useContext)(P);return l.a.createElement("div",null,l.a.createElement("div",{className:"tile is-parent Feed-Tile"},l.a.createElement("div",{className:"tile is-child box"},l.a.createElement("div",{className:"title"},l.a.createElement("nav",{role:"navigation",className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("h1",{className:"title"}," My Feed "))),l.a.createElement("div",{className:"level-right"},l.a.createElement("div",{className:"level-item"},l.a.createElement("a",{onClick:function(){return c(!0)},className:"button is-rounded is-primary"},l.a.createElement("span",{className:"icon is-small"},l.a.createElement("i",{className:"fas fa-plus",style:{color:"#fff"}}))))))),l.a.createElement(z,null))),l.a.createElement("div",{className:t?"modal is-active":"modal"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-content"},i.length>0?l.a.createElement("article",{className:"message is-small is-danger"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Empty Post!"),l.a.createElement("button",{onClick:function(){return m("")},className:"delete is-small","aria-label":"delete"})),l.a.createElement("div",{className:"message-body"},i)):"",l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("nav",{className:"level"},l.a.createElement("p",{className:"level-item has-text-centered"},l.a.createElement("h4",{className:"title is-4"},"Post Message")))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("textarea",{value:E,onChange:p,className:"textarea has-fixed-size",placeholder:"Type Here"}))),l.a.createElement("footer",{className:"card-footer has-text-centered"},l.a.createElement("div",{className:"content"},l.a.createElement("a",{className:"button is-primary",style:{color:"#fff",marginLeft:"30px",marginTop:"10px",marginBottom:"10px"},onClick:function(){E.trim().length>0?(v({type:"ADD",name:"John Smith",at:"@johnsmith",text:E}),c(!t),f(),m("")):m("Your message is empty!")}},"Post")))),l.a.createElement("button",{onClick:function(){return c(!t)},className:"modal-close is-large","aria-label":"close"}))))},K=Object(n.memo)(function(e){var a=e.id,t=e.text,c=Object(n.useContext)(b);return l.a.createElement("div",{key:a,className:"notification",style:{height:"70px"}},l.a.createElement("button",{className:"delete",key:a,id:a,onClick:function(){return c({type:"REMOVE",id:a})}}),t)}),Y=(t(29),function(){var e=Object(n.useContext)(h);return l.a.createElement(J.a,null,e.map(function(e){return l.a.createElement(V.a,{key:e.id,timeout:500,classNames:"Notification"},l.a.createElement(K,{key:e.id,id:e.id,text:e.text}))}))}),$=function(){return l.a.createElement("div",{className:"tile is-child box Notification-Tile"},l.a.createElement("p",{className:"title"},"Notifications"),l.a.createElement(Y,null))},q=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"tile is-ancestor"},l.a.createElement("div",{className:"tile is-4 is-vertical is-parent"},l.a.createElement($,null),l.a.createElement(U,null)),l.a.createElement(I,null)))},G=function(){return l.a.createElement(i.c,null,l.a.createElement(R,null,l.a.createElement(i.a,{path:"/home",component:D}),l.a.createElement(i.a,{exact:!0,path:"/",component:D}),l.a.createElement(i.a,{path:"/signup",component:F}),l.a.createElement(i.a,{path:"/me",component:q})))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=Object(r.a)();s.a.render(l.a.createElement(i.b,{history:Z},l.a.createElement(m.a,{basename:"/CMS"},l.a.createElement(G,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/CMS",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/CMS","/service-worker.js");Q?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):X(a,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.8ea347a5.chunk.js.map