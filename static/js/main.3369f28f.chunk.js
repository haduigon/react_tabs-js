(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),s=c(5),i=c(1),b=(c(10),c(11),c(12),c(4)),r=c.n(b),d=c(0),o=function(t){var e=t.tabs,c=t.currentTab,n=t.selected;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:r()({"is-active":n===t}),"data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t,e){t!==e&&c(e)}(n,t)},children:t.title})},t.id)}))})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(i.useState)(l[0]),e=Object(s.a)(t,2),c=e[0],n=e[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is Tab \xa0",c.id.slice(-1)]}),Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)(o,{tabs:l,currentTab:function(t){return n(t)},selected:c})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})]})};a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3369f28f.chunk.js.map