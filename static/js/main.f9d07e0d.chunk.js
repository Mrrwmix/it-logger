(window["webpackJsonpit-logger"]=window["webpackJsonpit-logger"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=a(1),o=a(2),i=a.n(o),u=a(5),m=function(){return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,fetch("/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_TECHS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"TECHS_ERROR",payload:e.t0.response.statusText});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},d=a(3),p=a.n(d),f=Object(s.b)(null,{deleteTech:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,fetch("/techs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_TECH",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response.statusText});case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.tech,a=t.firstName,n=t.lastName,c=t.id,l=e.deleteTech;return r.a.createElement("li",{className:"collection-item"},r.a.createElement("div",null,a," ",n,r.a.createElement("a",{href:"#!",className:"secondary-content",onClick:function(){l(c),p.a.toast({html:"Technician deleted"})}},r.a.createElement("i",{className:"material-icons grey-text"},"delete"))))}),E=Object(s.b)(function(e){return{tech:e.tech}},{getTechs:m})(function(e){var t=e.getTechs,a=e.tech,c=a.techs,l=a.loading;return Object(n.useEffect)(function(){t()},[]),r.a.createElement("div",{id:"tech-list-modal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"Technician List"),r.a.createElement("ul",{className:"collection"},!l&&null!==c&&c.map(function(e){return r.a.createElement("li",{className:"collection-item"},r.a.createElement(f,{tech:e,key:e.id}))}))))}),h=function(){return{type:"SET_LOADING"}},g=Object(s.b)(null,{searchLogs:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(),t.next=4,fetch("/logs?q=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"SEARCH_LOGS",payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.searchLogs,a=Object(n.useRef)("");return r.a.createElement("nav",{style:{marginBottom:"30px"},className:"blue"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{id:"search",type:"search",placeholder:"Search Logs",ref:a,onChange:function(e){t(a.current.value)}}),r.a.createElement("label",{className:"label-icon"},r.a.createElement("i",{className:"material-icons",htmlFor:"search"},"search")),r.a.createElement("i",{className:"material-icons"},"close")))))}),v=a(18),b=a.n(v),y=Object(s.b)(null,{deleteLog:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_LOG",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}})(function(e){var t=e.log,a=e.deleteLog,n=e.setCurrent;return r.a.createElement("li",{className:"collection-item"},r.a.createElement("div",null,r.a.createElement("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)}},t.message),r.a.createElement("br",null),r.a.createElement("span",{className:"grey-text"},r.a.createElement("span",{className:"black-text"},"ID #",t.id)," last updated by"," ",r.a.createElement("span",{className:"black-text"},t.tech)," on"," ",r.a.createElement(b.a,{format:"MMM Do YYYY, h:mm:ss a"},t.date)),r.a.createElement("a",{href:"#!",onClick:function(){a(t.id),p.a.toast({html:"Log deleted"})},className:"secondary-content"},r.a.createElement("i",{className:"material-icons grey-text"},"delete"))))}),O=function(){return r.a.createElement("div",{className:"progress blue lighten-4"},r.a.createElement("div",{className:"indeterminate blue"}))},N=Object(s.b)(function(e){return{log:e.log}},{getLogs:function(){return function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(),e.next=4,fetch("/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_LOGS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"LOGS_ERROR",payload:e.t0.response.statusText});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=e.log,a=t.logs,c=t.loading,l=e.getLogs;return Object(n.useEffect)(function(){l()},[]),c||null===a?r.a.createElement(O,null):r.a.createElement("ul",{className:"collection with-header"},r.a.createElement("li",{className:"collection-header"},r.a.createElement("h4",{className:"center"},"System Logs")),c||0!==a.length?a.map(function(e){return r.a.createElement(y,{log:e,key:e.id})}):r.a.createElement("p",{className:"center"},"No logs"))}),j=function(){return r.a.createElement("div",{className:"fixed-action-btn"},r.a.createElement("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger"},r.a.createElement("i",{className:"large material-icons"},"add")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger"},r.a.createElement("i",{className:"material-icons"},"person"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger"},r.a.createElement("i",{className:"material-icons"},"person_add")))))},w=a(4),T=Object(s.b)(function(e){return{tech:e.tech}},{getTechs:m})(function(e){var t=e.getTechs,a=e.tech,c=a.techs,l=a.loading;return Object(n.useEffect)(function(){t()},[]),!l&&null!==c&&c.map(function(e){return r.a.createElement("option",{key:e.id,value:"".concat(e.firstName," ").concat(e.lastName)},e.firstName," ",e.lastName)})}),x={width:"75%",height:"75%"},S=Object(s.b)(null,{addLog:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"ADD_LOG",payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.addLog,a=Object(n.useState)(""),c=Object(w.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(w.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(""),f=Object(w.a)(d,2),E=f[0],h=f[1];return r.a.createElement("div",{id:"add-log-modal",className:"modal",style:x},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"Enter System Log"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"message",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{htmlFor:"message",className:"active"},"Log Message"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("select",{name:"tech",value:E,className:"browser-default",onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Select Technician"),r.a.createElement(T,null)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",className:"filled-in",checked:u,value:u,onChange:function(e){return m(!u)}}),r.a.createElement("span",null,"Needs Attention")))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{href:"#!",onClick:function(){if(""===l||""===E)p.a.toast({html:"Please enter a message and tech"});else{var e={message:l,attention:u,tech:E,date:new Date};t(e),p.a.toast({html:"Log added by ".concat(E)}),s(""),h(""),m(!1)}},className:"modal-close waves-effect waves-green blue btn"},"Enter")))}),L={width:"75%",height:"75%"},R=Object(s.b)(function(e){return{current:e.log.current}},{updateLog:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"UPDATE_LOG",payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.updateLog,a=e.current,c=Object(n.useState)(""),l=Object(w.a)(c,2),s=l[0],o=l[1],i=Object(n.useState)(!1),u=Object(w.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)(""),E=Object(w.a)(f,2),h=E[0],g=E[1];Object(n.useEffect)(function(){a&&(o(a.message),d(a.attention),g(a.tech))},[a]);return r.a.createElement("div",{id:"edit-log-modal",className:"modal",style:L},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"Enter System Log"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"message",value:s,onChange:function(e){return o(e.target.value)}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return g(e.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Select Technician"),r.a.createElement(T,null)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",className:"filled-in",checked:m,value:m,onChange:function(e){return d(!m)}}),r.a.createElement("span",null,"Needs Attention")))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{href:"#!",onClick:function(){if(""===s||""===h)p.a.toast({html:"Please enter a message and tech"});else{var e={id:a.id,message:s,attention:m,tech:h,date:new Date};t(e),p.a.toast({html:"Log updated by ".concat(h)}),o(""),g(""),d(!1)}},className:"modal-close waves-effect waves-green blue btn"},"Enter")))}),k=Object(s.b)(null,{addTech:function(e){return function(){var t=Object(u.a)(i.a.mark(function t(a){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"ADD_TECH",payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.addTech,a=Object(n.useState)(""),c=Object(w.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(""),i=Object(w.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",{id:"add-tech-modal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"New Technician"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"firstName",value:l,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{htmlFor:"firstName",className:"active"},"First Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"lastName",value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement("label",{htmlFor:"lastName",className:"active"},"Last Name")))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{href:"#!",onClick:function(){""===l||""===u?p.a.toast({html:"Please enter the first and last name"}):(t({firstName:l,lastName:u}),p.a.toast({html:"".concat(l," ").concat(u," was added")}),s(""),m(""))},className:"modal-close waves-effect waves-green blue btn"},"Enter")))}),C=(a(34),a(19)),_=a.n(C),D=a(7),P=a(20),G=a(21),A=a(11),H=a(10);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(H.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U={logs:null,current:null,loading:!1,error:null};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(H.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y={techs:null,loading:!1,error:null},B=Object(D.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return I({},e,{loading:!0});case"LOGS_ERROR":return console.error(t.payload),I({},e,{error:t.payload});case"GET_LOGS":return I({},e,{logs:t.payload,loading:!1});case"ADD_LOG":return I({},e,{logs:[].concat(Object(A.a)(e.logs),[t.payload]),loading:!1});case"DELETE_LOG":return I({},e,{logs:e.logs.filter(function(e){return e.id!==t.payload}),loading:!1});case"UPDATE_LOG":return I({},e,{logs:e.logs.map(function(e){return e.id===t.payload.id?t.payload:e})});case"SET_CURRENT":return I({},e,{current:t.payload});case"CLEAR_CURRENT":return I({},e,{current:null});case"SEARCH_LOGS":return I({},e,{logs:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TECHS":return M({},e,{techs:t.payload,loading:!1});case"SET_LOADING":return M({},e,{loading:!0});case"ADD_TECH":return M({},e,{techs:[].concat(Object(A.a)(e.techs),[t.payload]),loading:!1});case"TECHS_ERROR":return console.error(t.payload),M({},e,{error:t.payload,loading:!1});case"DELETE_TECH":return M({},e,{techs:e.techs.filter(function(e){return e.id!==t.payload}),loading:!1});default:return e}}}),q=[G.a],W=Object(D.createStore)(B,{},Object(P.composeWithDevTools)(D.applyMiddleware.apply(void 0,q))),z=(a(35),function(){return Object(n.useEffect)(function(){_.a.AutoInit()}),r.a.createElement(s.a,{store:W},r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(R,null),r.a.createElement(k,null),r.a.createElement(E,null))))});l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.f9d07e0d.chunk.js.map