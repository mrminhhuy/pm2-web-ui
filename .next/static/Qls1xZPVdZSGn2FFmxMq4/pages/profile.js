(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+wdE":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t("btdU")}])},DRfh:function(n,e,t){"use strict";var a=t("Ff2n"),i=t("q1tI"),l=t.n(i).a.createElement;e.a=function(n){var e=n.columns,t=Object(a.a)(n,["columns"]),i=e.map((function(n){return l("th",{key:n},n)}));return l("thead",t,l("tr",null,i))}},btdU:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),l=t("muLP"),s=t("AD/7"),r=t("/MKj"),o=t("VtrM"),c=t("UJ/n"),u=t("v9gO"),d=t("jcc4"),p=t("DBJP"),m=t("DRfh"),v=t("3xcS"),h=i.a.createElement;function f(){return h("div",{className:"is-block",style:{padding:"10px"}},h("p",null,"You are an admin and have full access to the dashboard. These are the things you can do:"),h("div",{className:"content is-small"},h("ul",null,h("li",null,"View, manage and interact with all applications."),h("li",null,"Deploy new applications."),h("li",null,"Create and manage other users."))))}var E=[u.a.VIEW,u.a.MANAGE,u.a.INTERACT,u.a.DELETE];function g(n){var e=n.app;return h("tr",null,h("td",null,e.id),E.map((function(n){var t=(e.right&n)===n;return h("td",{key:n},h(p.a,{style:{display:"inline"},className:"has-text-".concat(t?"success":"danger"),icon:t?"fa-check":"fa-times"}))})))}function w(n){var e=n.apps;return e?0===e.length?h("div",{style:{width:"100%",textAlign:"center"}},h("p",{style:{margin:"10px"}},"You do not have access to any application.")):h("div",{className:"table-container",style:{width:"100%"}},h("style",null,"tr > th, td { text-align: center!important; }"),h("table",{className:"table is-fullwidth is-bordered is-striped is-hoverable",style:{textAlign:"center",tableLayout:"auto"}},h(m.a,{columns:["application","view","manage","interact","delete"]}),h("tbody",null,e.map((function(n){return h(g,{key:n.id,app:n})}))))):h("progress",{className:"progress is-small is-link",max:"100"},"Loading...")}e.default=Object(l.a)(Object(s.a)((function(){var n,e,t,a,l,s=Object(r.d)((function(n){return n.client})),u=Object(o.a)("/api/me",c.a),m=u.data,E=u.error;return h(d.a,null,h("div",{className:"container panel is-link"},h("div",{className:"panel-heading"},s.username,s.isAdmin&&h(p.a,{icon:"fa-user-shield",style:{marginLeft:"10px",display:"inline"}})),h("div",{className:"panel-block",style:{width:"100%"}},E?h(v.a,{style:{width:"100%"},title:null!==(n=null===(e=E.response)||void 0===e?void 0:e.statusText)&&void 0!==n?n:"Error",text:null!==(t=null===(a=E.response)||void 0===a?void 0:null===(l=a.data)||void 0===l?void 0:l.message)&&void 0!==t?t:E.toString()}):h(i.a.Fragment,null,s.isAdmin?h(f,null):h(w,{apps:null===m||void 0===m?void 0:m.user.apps})))))})))},v9gO:function(n,e,t){"use strict";var a;t.d(e,"a",(function(){return a})),function(n){n[n.NONE=0]="NONE",n[n.VIEW=1]="VIEW",n[n.MANAGE=2]="MANAGE",n[n.DELETE=4]="DELETE",n[n.INTERACT=8]="INTERACT"}(a||(a={}))}},[["+wdE",0,2,1,3,4]]]);