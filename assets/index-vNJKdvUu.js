/* empty css                  */import{a as T,d as J,F as E,g as P,f as N,r as D,s as Q,c as C,u as H,o,b as f,e as p,h as v,i as x,j as l,w as u,k as m,l as c,t as g,T as W,n as z,_ as y,m as A,p as k,q as X,v as R,x as $,E as F,y as Y,z as e1,A as Z,B as L,C as S,D as G,G as w,H as t1,I as q,J as o1,K as s1,L as a1,M as n1,N as c1,O as l1,P as r1,Q as i1,R as d1,S as u1,U as _1,V as p1,W as m1}from"./index-scE9fOMp.js";import{u as V}from"./hooks-F6y15REO.js";const f1={body:'<path fill="currentColor" fill-rule="evenodd" d="M8.38 1.353L8 1.131l-.38.222l-7.25 4.25a.75.75 0 0 0 .76 1.294l.87-.51V14h12V6.387l.87.51a.75.75 0 1 0 .76-1.294l-7.25-4.25Zm4.12 4.154L8 2.87L3.5 5.507V12.5H6V8h4v4.5h2.5V5.507ZM8.5 9.5v3h-1v-3h1Z" clip-rule="evenodd"/>'},h1={body:'<path fill="currentColor" fill-rule="evenodd" d="M8.429 2.746a.5.5 0 0 0-.858 0L1.58 12.743a.5.5 0 0 0 .429.757h11.984a.5.5 0 0 0 .43-.757L8.428 2.746Zm-2.144-.77C7.06.68 8.939.68 9.715 1.975l5.993 9.996c.799 1.333-.161 3.028-1.716 3.028H2.008C.453 15-.507 13.305.292 11.972l5.993-9.997ZM9 11.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-.25-5.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z" clip-rule="evenodd"/>'};T("home",f1);T("error",h1);const v1=J({id:"dc-app",state:()=>{var e;return{sidebar:{opened:((e=E().getItem("${responsiveStorageNameSpace()}layout"))==null?void 0:e.sidebarStatus)??P().SidebarStatus,isClickCollapse:!1},device:N()?"mobile":"desktop"}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device}},actions:{TOGGLE_SIDEBAR(e,t){const s=E().getItem(`${D()}layout`);e&&t?(this.sidebar.opened=!0,s.sidebarStatus=!0):!e&&t?(this.sidebar.opened=!1,s.sidebarStatus=!1):!e&&!t&&(this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,s.sidebarStatus=this.sidebar.opened),E().setItem(`${D()}layout`,s)},async toggleSideBar(e,t){await this.TOGGLE_SIDEBAR(e,t)},toggleDevice(e){this.device=e}}});function M(){return v1(Q)}const b1=""+new URL("user-CXv1Tgu4.jpg",import.meta.url).href;function B(){const e=M(),t=C(()=>!e.getSidebarStatus);function s(){e.toggleSideBar()}const i=C(()=>{var a;return(a=H())==null?void 0:a.username}),r=C(()=>i.value?{marginRight:"10px"}:"");function _(){H().logOut()}const d=C(()=>e.getDevice);return{userAvatar:b1,dcApp:e,isCollapse:t,toggleSideBar:s,username:i,avatarsStyle:r,logout:_,device:d}}const g1={xmlns:"http://www.w3.org/2000/svg",width:"677.333",height:"553.333",version:"1.0",viewBox:"0 0 508 415"},k1=p("path",{d:"M70 2.1C43.9 5.1 22.3 19.6 9.3 43 6.2 48.5 2.2 61.8 1 70.3c-1.4 11-1.4 261.9.1 274.2 2.1 17.6 9.5 33.6 21.1 45.6 8 8.4 14.1 12.7 24.8 17.4 15.1 6.6 13.4 6.5 97.8 6.5 84 0 81.3.2 85.2-6.2 1.9-3.1 2-5 2-36.6 0-36.3-.1-37-5.7-40.8-2.6-1.7-5.4-1.9-33.1-2.2-22.8-.3-30.6-.1-31.7.8-1.3 1-1.5 5.9-1.5 29.6V387H68.9l-7.8-2.6c-12.5-4.1-24.3-14.8-29.6-26.9-4.2-9.6-4.5-16-4.5-108V162h60.8l.7 4.1c.4 2.2 2.4 7.6 4.6 11.8C102 195.7 120.7 207 141 207c13.5 0 30-7.5 38.9-17.6 4.4-5.1 10.6-17 11.9-22.9l.8-4 9.4-.3c12.7-.4 13.4-.1 14.9 5 7.3 25.1 29.1 40.9 54.6 39.6 21.8-1.2 41.1-16.2 47-36.8l2.2-7.5h60.8v165l-17 .5-17 .5-.3 42.7-.2 42.8h16v-15.9c0-8.8.3-16.6.6-17.5.5-1.3 2.5-1.6 11.6-1.6h10.9l2 4.6c1.2 2.5 3.4 8.5 5.1 13.2 3.8 11 5.5 13.8 9.4 15.7 4.1 1.9 12.8 2 14.3.1.7-.9 1.1-3.8.9-7.3l-.3-5.8-3.9-.5-3.9-.5-3.4-9.4c-1.8-5.2-3.2-9.5-3-9.7.1-.2 2-.9 4.1-1.6 6.6-2.2 7.6-5.4 7.6-24.1 0-15.9-.4-18.1-4-22.2-1.7-1.9-1.8-10-2.3-133C408 51 408.6 62.1 400 44.4c-9.8-20.2-26.5-33.9-48.9-40.2l-9.6-2.7-132-.1c-72.6-.1-135.4.2-139.5.7m268.8 26.8c14.4 1.7 30.4 12.6 36.7 25.1 6 11.9 6 12.2 6 54.5v39h-60.9l-1.4-6.4c-2.6-11.7-11.6-24.1-22.6-31.3-10.1-6.6-24.2-9.6-35.4-7.7-13.9 2.4-23.2 7.4-32.5 17.4-4.5 4.8-11.3 18.3-12.3 24.3l-.7 4.3-11.6-.3-11.5-.3-.8-4.5c-.4-2.5-2.2-7.2-3.8-10.6-12.2-23.9-36.4-35.3-61.5-29-17.5 4.5-32 18.7-37.1 36.6l-2.2 7.5-30.1.3-30.1.2v-35.7c.1-41.6.8-47.6 6.6-58.1 7.3-13 21.9-23.5 35.1-25.2 8.1-1 261.2-1.1 270.1-.1m-193.2 84c19.2 3.7 31.8 16.1 35.5 35 3.3 17.1-6.8 36.3-23.1 44-11.2 5.3-26.8 5-37.5-.7-6.4-3.5-14.6-11.7-17.4-17.4-12.2-25.4 1.2-53.6 28.7-60.2 7.1-1.8 7.8-1.8 13.8-.7m130 .5c24.6 5.3 39.6 29.6 32.5 52.5-3.9 12.5-11.2 20.9-22.9 26.4-6.1 2.8-7.5 3.1-16.7 3.1-13.7-.1-19.4-2.3-28.5-11.3-3.7-3.6-8-9.1-9.6-12.1-2.7-5.2-2.8-6.2-2.8-17.5 0-11.1.2-12.4 2.7-17.7 5.8-11.9 16.7-20.4 30-23.3 7.8-1.7 8-1.7 15.3-.1m-59.8 257.3.2 28.2-18.5.3c-10.2.2-19 .1-19.5 0-1.6-.6-1.3-55.9.3-56.5.6-.3 9.3-.5 19.2-.4l18 .2zm182.5-21.3c.5 3.9.6 8.9.2 11.3l-.6 4.3-17.2-.2-17.2-.3-.3-9.9c-.2-6.4.1-10.3.9-11.2 1-1.2 4.3-1.4 17.3-1.2l16.1.3z"},null,-1),y1=p("path",{d:"M131.1 123c-11.8 2.5-24.1 18.8-24.1 32 0 9 6.3 21.2 13.5 26.2 6.4 4.4 15.8 7.2 22.1 6.5 20.1-2.1 34.7-21.4 30-39.7-2.6-9.9-9.7-18.9-18.2-23.1-5-2.4-16.5-3.3-23.3-1.9m27.3 10.9c2.4 2 4.6 7.2 4.6 10.7 0 1.5-1.1 4.7-2.5 7-5.9 10-20.2 7.8-23.6-3.6-3.8-12.6 11.4-22.7 21.5-14.1M259.7 123c-5.7 1.5-9 3.5-14.5 8.8-6.2 6-9.4 13.9-9.5 23.4-.1 5.9.3 7.6 3.8 14.5 3.3 6.3 5 8.4 9.4 11.5 17.2 12 37.9 7.3 48.9-11.2 2.5-4.1 2.7-5.4 2.7-15 0-10.3-.1-10.7-3.5-16.4-3.6-5.9-9-11-14.8-14-3.9-2-17.1-2.9-22.5-1.6m27.4 11.6c6.3 6 6 14.5-.6 20.3-3 2.6-4.4 3.1-8.5 3.1s-5.5-.5-8.5-3.1c-3.8-3.3-6.1-9.5-4.9-13.2 3.1-9.9 15.4-13.9 22.5-7.1M96.8 263.1c-2.2 1.2-2.3 6-.3 9.9 1.9 3.8 6.6 7.3 14.1 10.6 4.7 2.1 6.9 2.5 10.7 2.1 8.1-1 8.5-1.9 2.6-5.6-5-3.1-5.5-3.2-10.6-2.3-3.3.5-5.6.5-5.9 0-1-1.5 0-1.9 9.3-3.4 4.8-.7 11-1.8 13.6-2.4 2.7-.6 5.3-.7 5.8-.4 1.5.9-1 3.4-3.5 3.4-2.1.1-2.1.1.3 2 1.3 1.1 3.5 2.3 4.8 2.6 2.7.7 10.3-1.2 10.3-2.5 0-1.2-12.3-11.8-15.7-13.6-3.3-1.8-32.7-2.1-35.5-.4M300.9 263.3c-1.4.7-5.8 3.2-9.7 5.6-4 2.4-7.5 4.1-7.8 3.8s.6-2.2 2-4.3c1.4-2 2.3-4.1 2-4.6-.8-1.3-8.1-.9-11.7.6C272 266 261 276 261 277.7c0 .7 1.6 1.5 3.5 1.9 3.9.7 15.7 0 19.3-1.1 3.6-1.2 2.6 1.3-1.4 3.3-4.7 2.4-3.4 3.3 5.5 4 5.8.4 7.4.1 11.9-2.2 13.5-6.8 19-17.5 10.6-20.6-3.3-1.3-6.3-1.2-9.5.3m-24 8.3c1.7.4 3.1 1.3 3.1 2.1 0 2.2-7.4 1.3-7.8-1-.4-1.9.1-2 4.7-1.1m24 4.3c2.7 1.7 0 3.4-4.6 2.8-5-.5-6.4-1.4-4.3-2.7 1.9-1.2 7.1-1.2 8.9-.1M151.9 279c-.8.5-4.5 1.8-8.4 3-15.6 4.8-20 6.3-20.8 7-1.1.9 10.7 5 14.4 5 1.5 0 3.4-.6 4.1-1.3.7-.6 5.3-3.2 10.2-5.7 4.8-2.5 8.8-5 8.7-5.5-.3-1.5-6.5-3.4-8.2-2.5M253 279c-.8.6-4 1.7-7 2.6-3 .8-6.1 1.7-6.9 2s1.7 2.5 6 5.6c4.1 2.8 8.4 6 9.6 7 1.8 1.7 2.9 1.9 6.5 1.3 6.1-1.1 25.6-7.3 26.3-8.5 1-1.7-2-1.1-9.3 1.6l-7 2.6-4.1-2.1c-2.3-1.2-4.1-2.5-4.1-2.9s1.9-1.5 4.3-2.4l4.2-1.7h-3.4c-1.9-.1-4.9.4-6.7 1.1-2.5.9-3.9.8-6.3-.2-3.9-1.6-3.6-3 .9-4.5 2.7-.9 3-1.3 1.6-1.8-2.3-.9-2.8-.9-4.6.3M159.4 284.2c-3.3 2.8-11.5 7.7-15.9 9.6-2.5 1.1-2.7 1.5-1.4 2.2.9.6 4.8 1.3 8.7 1.6 7.1.7 7.1.7 11.3-3 2.9-2.5 4.6-3.3 5.3-2.6s-.1 2-2.4 4.2l-3.5 3.2 3.5.7c1.9.4 5.9.9 8.8 1.2 4.5.5 5.2.4 5.2-1.1 0-1 .5-2.3 1.1-2.9.8-.8.6-1.5-1-2.5-3-1.9-2.6-3.8.8-3.8 4 0 6.1-.9 6.1-2.6 0-1.8-2.8-2.9-11.5-4.3-3.9-.6-8.2-1.4-9.6-1.7-1.8-.4-3.4.1-5.5 1.8M175 287c0 1.3-4.9 4.4-5.7 3.6-.9-.8 2.7-4.6 4.4-4.6.7 0 1.3.4 1.3 1M221.3 285.7c-2.4.2-4.3.6-4.3.7 0 .2 1.6 3.8 3.6 8.1l3.6 7.8 7.6-.7c12-1 22.4-2.8 21.5-3.7-.5-.5-3.6-.3-7 .3l-6.2 1.1-7.1-7.1c-3.8-4-7.1-7.1-7.3-7-.1.1-2.1.3-4.4.5M196.9 287c-5.8.7-6.9 1.6-9.9 8-3.4 7.2-2.7 7.5 13.3 7.5 12.9 0 18.7-.7 18.7-2.3 0-.5-.6-1.5-1.2-2.4-1-1.2-2.6-1.5-7.5-1.1-5.1.4-6.2.9-6.5 2.5-.6 3.8-2.3 1.7-2.6-3.3-.4-5.9 1.1-8.5 3.2-5.7 1.7 2.3 10.6 2.6 10.6.3 0-.8-.8-1.8-1.7-2.3-2.6-1.3-11.1-2-16.4-1.2M275.9 332.7c-1.2 2.7-3.8 9.1-5.9 14.3-3.6 9.1-11.1 27.5-21.8 53.8-3.6 8.8-4.7 12.5-3.8 12.8.7.3 4.8.4 9.1.2l7.8-.3 2.8-8.4c1.5-4.6 3.2-8.8 3.7-9.3.4-.4 9.1-.7 19.2-.6l18.3.3 3.6 9 3.7 9h7.9c7.7 0 8-.1 7.8-2.3-.3-1.9-7.3-20.7-13.4-35.7-1.1-2.8-3.5-9.1-5.3-14-1.8-5-4.7-12.2-6.3-16-1.6-3.9-3.3-8.4-3.7-10-1.7-6.9-2.8-7.5-12.7-7.5h-9zm15.4 24.5c4.6 11.8 7.9 21.9 7.4 22.4-.6.7-23.6.9-24.2.2-.4-.4 1.3-5.8 3.8-12 2.4-6.2 5.2-13.4 6.2-16s2.1-4.5 2.5-4.3c.4.3 2.4 4.7 4.3 9.7M434.5 329.1c-.3.8-.4 20.1-.3 42.9l.3 41.5h17l.3-18.8.2-18.7h15.9l3.4 5.7c1.8 3.2 5.9 10.3 9 15.9 7.9 14 10 15.7 18.7 16.2l7 .4V403h-3.2c-3.3 0-3.4-.3-12-17.3-4.9-9.5-8.8-18-8.8-18.8s.8-2.6 1.7-3.9c3.1-4.5 18.3-32.8 18.3-34.2 0-.5-3.5-.8-7.7-.6l-7.7.3-2.9 5c-1.6 2.7-4.6 8.1-6.7 12-2 3.8-5 9.1-6.5 11.7l-2.7 4.8H452v-33h-6.9c-3.8 0-7.6-.3-8.5-.6s-1.8 0-2.1.7"},null,-1),C1=[k1,y1];function S1(e,t){return o(),f("svg",g1,[...C1])}const O={render:S1},I1="vue3项目脚手架",x1="DARK CRICLES TEAM",M1=v({__name:"logo",props:{collapse:Boolean},setup(e){const t=e;return(s,i)=>{const r=x("router-link");return o(),f("div",{class:z(["sidebar-logo-container",{collapses:t.collapse}])},[l(W,{name:"sidebarLogoFade"},{default:u(()=>[t.collapse?(o(),m(r,{key:"props.collapse",class:"sidebar-logo-link",to:"/"},{default:u(()=>[l(c(O),{class:"sidebar-collapse-logo"})]),_:1})):(o(),m(r,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:u(()=>[l(c(O),{class:"sidebar-logo"}),p("div",{class:"titlebox"},[p("div",{class:"sidebar-maintitle"},g(I1)),p("div",{class:"sidebar-subtitle"},g(x1))])]),_:1}))]),_:1})],2)}}}),U=y(M1,[["__scopeId","data-v-269d674c"]]),w1=v({__name:"sidebarItem",props:{routerList:{type:Array,required:!0}},setup(e){const t=e;return(s,i)=>{const r=F,_=x("sidebarItem",!0),d=Y,a=e1;return o(!0),f(k,null,A(t.routerList,n=>(o(),f(k,{key:n.path},[n.children&&n.children.length>0?(o(),m(d,{key:0,index:n.path},X({default:u(()=>[l(_,{routerList:n.children},null,8,["routerList"])]),_:2},[n.meta.icon?{name:"title",fn:u(()=>[l(r,null,{default:u(()=>[(o(),m(R(c(V)(n.meta.icon))))]),_:2},1024),p("span",null,g(n.meta.title),1)]),key:"0"}:{name:"title",fn:u(()=>[$(g(n.meta.title),1)]),key:"1"}]),1032,["index"])):(o(),m(a,{key:1,index:n.path},{default:u(()=>[n.meta.icon?(o(),f(k,{key:0},[l(r,null,{default:u(()=>[(o(),m(R(c(V)(n.meta.icon))))]),_:2},1024),p("span",null,g(n.meta.title),1)],64)):(o(),f(k,{key:1},[$(g(n.meta.title),1)],64))]),_:2},1032,["index"]))],64))),128)}}}),j=y(w1,[["__scopeId","data-v-f6e97cee"]]),$1={width:24,height:24,body:'<path fill="currentColor" d="M21 18v2H3v-2h18ZM6.95 3.55v9.9L2 8.5l4.95-4.95ZM21 11v2h-9v-2h9Zm0-7v2h-9V4h9Z"/>'},L1=$1,B1={class:"fold-container"},E1=v({__name:"leftCollapse",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(e,{emit:t}){const s=e,i=t,r=()=>{i("toggleClick")};return(_,d)=>{const a=x("IconifyIconOffline");return o(),f("div",B1,[l(a,{icon:c(L1),class:"icon",style:Z({transform:s.isActive?"none":"rotateY(180deg)"}),onClick:r},null,8,["icon","style"])])}}}),R1=y(E1,[["__scopeId","data-v-a5f3aa7e"]]),V1={class:"sidebar"},A1=v({__name:"index",setup(e){const{dcApp:t,isCollapse:s,toggleSideBar:i,device:r}=B(),d=L().getRoutes().filter(a=>a.meta&&a.meta.isShow);return(a,n)=>{const h=G;return o(),f("div",V1,[l(U,{collapse:c(s)},null,8,["collapse"]),l(h,{"active-text-color":"#0c53fb","background-color":"#fff","default-active":a.$route.path,"text-color":"#000000","unique-opened":!0,collapse:c(s),"collapse-transition":!1,router:""},{default:u(()=>[l(j,{routerList:c(d)},null,8,["routerList"])]),_:1},8,["default-active","collapse"]),c(r)==="desktop"?(o(),m(R1,{key:0,"is-active":c(t).sidebar.opened,onToggleClick:c(i)},null,8,["is-active","onToggleClick"])):S("",!0)])}}}),Z1=y(A1,[["__scopeId","data-v-5407b6e7"]]),D1={width:24,height:24,body:'<path fill="currentColor" d="M21 18v2H3v-2h18ZM17.05 3.55L22 8.5l-4.95 4.95v-9.9ZM12 11v2H3v-2h9Zm0-7v2H3V4h9Z"/>'},H1=v({__name:"topCollapse",setup(e){const t=w(!1),i=L().getRoutes().filter(r=>r.meta&&r.meta.isShow);return(r,_)=>{const d=x("IconifyIconOffline"),a=G,n=t1;return o(),f(k,null,[p("div",{onClick:_[0]||(_[0]=h=>t.value=!0)},[l(d,{icon:c(D1)},null,8,["icon"])]),l(n,{class:"sidebar",modelValue:t.value,"onUpdate:modelValue":_[1]||(_[1]=h=>t.value=h),direction:"ltr","with-header":!1,size:"200"},{default:u(()=>[p("div",null,[l(U,{collapse:!1}),l(a,{"active-text-color":"#0c53fb","background-color":"#fff","default-active":r.$route.path,"text-color":"#000000","unique-opened":!0,"collapse-transition":!1,router:""},{default:u(()=>[l(j,{routerList:c(i)},null,8,["routerList"])]),_:1},8,["default-active"])])]),_:1},8,["modelValue"])],64)}}}),O1=v({__name:"extraIcon",setup(e){const{currentRoute:t}=L(),s=w();return q(()=>t.value,i=>{s.value=i.matched},{immediate:!0}),(i,r)=>{const _=F;return o(!0),f(k,null,A(s.value,d=>(o(),f(k,{key:d.path},[d.meta.icon?(o(),m(_,{key:0,class:"extra-icon"},{default:u(()=>[(o(),m(R(c(V)(d.meta.icon))))]),_:2},1024)):S("",!0)],64))),128)}}}),T1=y(O1,[["__scopeId","data-v-058deca5"]]),N1=v({__name:"breadCrumb",setup(e){const{currentRoute:t}=L(),s=w();return q(()=>t.value,i=>{s.value=i.matched},{immediate:!0}),(i,r)=>{const _=s1,d=a1;return o(),m(d,{separator:""},{default:u(()=>[l(o1,{name:"breadcrumb"},{default:u(()=>[(o(!0),f(k,null,A(s.value,a=>(o(),m(_,{key:a.path,to:{path:`${a.path}`},class:"breadcrumb-item"},{default:u(()=>[$(g(a.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})}}}),z1=y(N1,[["__scopeId","data-v-462ed67c"]]),F1={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"/>'},G1=F1,q1={class:"el-dropdown-link navbar-bg-hover select-none"},U1={key:0,class:"dark:text-white"},j1=v({__name:"dropMenu",setup(e){const{username:t,userAvatar:s,avatarsStyle:i,logout:r}=B();return(_,d)=>{const a=n1,n=x("IconifyIconOffline"),h=c1,I=l1,b=r1;return o(),m(b,{trigger:"click"},{dropdown:u(()=>[l(I,{class:"logout"},{default:u(()=>[l(h,{onClick:c(r)},{default:u(()=>[l(n,{icon:c(G1),style:{margin:"5px"}},null,8,["icon"]),$(" 退出系统 ")]),_:1},8,["onClick"])]),_:1})]),default:u(()=>[p("span",q1,[l(a,{src:c(s),style:Z(c(i))},null,8,["src","style"]),c(t)?(o(),f("p",U1,g(c(t)),1)):S("",!0)])]),_:1})}}}),K1={class:"navbar"},J1={class:"header-right"},P1=v({__name:"index",setup(e){const{device:t}=B();return(s,i)=>(o(),f("div",K1,[c(t)==="mobile"?(o(),m(H1,{key:0})):S("",!0),c(t)==="desktop"?(o(),m(T1,{key:1})):S("",!0),c(t)==="desktop"?(o(),m(z1,{key:2})):S("",!0),p("div",J1,[l(j1,{class:"dropmenu"})])]))}}),Q1=y(P1,[["__scopeId","data-v-9e5fda34"]]),W1=e=>(p1("data-v-a17b3155"),e=e(),m1(),e),X1={class:"aside"},Y1={class:"main-container"},ee={class:"header"},te={class:"mainbox"},oe={class:"main"},se=W1(()=>p("div",{class:"footerbox"},[p("div",null,"黑眼圈脚手架 ©2024 Created by 黑眼圈")],-1)),ae=v({__name:"index",setup(e){const{isCollapse:t,device:s}=B(),i=w(t),r=N(),_=w(),d=i1({sidebar:C(()=>M().sidebar),device:C(()=>M().device),classes:C(()=>({hideSidebar:!d.sidebar.opened,openSidebar:d.sidebar.opened,mobile:d.device==="mobile"}))});function a(h,I){M().toggleDevice(h),M().toggleSideBar(I,"resize")}let n=!0;return d1(_,h=>{if(r)return;const I=h[0],{width:b}=I.contentRect;b>0&&b<=760?(a("mobile",!1),n=!0):b>760&&b<=990?n&&(a("desktop",!1),n=!1):b>990&&!d.sidebar.isClickCollapse?(a("desktop",!0),n=!0):(a("desktop",!1),n=!1)}),u1(()=>{r&&a("mobile",!1)}),(h,I)=>{const b=x("router-view"),K=_1;return o(),f("div",{ref_key:"containerRef",ref:_,class:z(["layout-container",d.classes])},[p("div",X1,[c(s)==="desktop"?(o(),m(Z1,{key:0,style:Z({width:i.value?"64px":"200px"})},null,8,["style"])):S("",!0)]),p("div",Y1,[p("div",ee,[l(Q1)]),p("div",te,[l(K,null,{default:u(()=>[p("div",oe,[l(b)])]),_:1})]),se])],2)}}}),re=y(ae,[["__scopeId","data-v-a17b3155"]]);export{re as default};
