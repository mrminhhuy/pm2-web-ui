(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"54sG":function(e,s,t){"use strict";t.r(s);var n=t("q1tI"),a=t.n(n),l=t("nOHt"),i=t.n(l),o=t("/MKj"),c=t("muLP"),u=t("AD/7"),r=t("vDqi"),d=t.n(r),m=t("ZQtW"),p=a.a.createElement;s.default=Object(c.a)(Object(u.a)((function(){var e=Object(n.useRef)(!0),s=Object(n.useState)(null),t=s[0],a=s[1],l=Object(o.c)();return Object(n.useEffect)((function(){d.a.post("/api/logout").then((function(){e&&(l({type:"auth",client:null}),i.a.push("/"))})).catch((function(s){var t,n,l;if(e){var i=null===(t=s.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message;a(i?[null!==(l=s.response.statusText)&&void 0!==l?l:"Error",i]:["Error",s.toString()])}}))}),[]),p("div",null,p(m.a,null),p("div",{className:"columns is-centered"},p("div",{className:"column is-4-tablet is-3-fullhd box",style:{margin:"40px 25px 20px 25px",textAlign:"center"}},p("h1",{className:"subtitle"},"Logging out..."),p("progress",{className:"progress is-small ".concat(t?"is-danger":"is-info"),max:"100"}),t&&p("article",{className:"message is-danger"},p("div",{className:"message-header"},p("p",null,t[0]),p("button",{className:"delete","aria-label":"delete",onClick:function(){return a(null)}})),p("div",{className:"message-body"},t[1])))))})))},iyT4:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return t("54sG")}])}},[["iyT4",0,2,1,3]]]);