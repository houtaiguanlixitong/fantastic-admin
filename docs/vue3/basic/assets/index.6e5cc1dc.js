
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.2247f9f8.js";import{i as a,a as s,j as t,o,a0 as r,k as l,s as d,u as n,q as i,g as b,l as c,b as m,e as u,Q as p,r as f,f as v,F as h,x,v as g,t as w,$ as _,a1 as j}from"./vendor.9748e354.js";import{_ as k,u as y,e as C}from"./index.d5f01412.js";import E from"./index.69d3a774.js";const T={class:"left-box"},B=a({name:"Topbar"});var L=k(Object.assign(B,{setup(a){const k=p(),B=y(),L=s((()=>"mobile"===B.mode||["side","head","single"].includes(B.menu.menuMode)&&B.topbar.enableSidebarCollapse)),M=s((()=>{let e=[];return B.dashboard.enable&&e.push({path:"/dashboard",title:B.dashboard.title}),k.meta.breadcrumbNeste&&e.push(...C(k.meta.breadcrumbNeste)),e})),N=t(0);function O(){N.value=document.documentElement.scrollTop||document.body.scrollTop}return o((()=>{window.addEventListener("scroll",O)})),r((()=>{window.removeEventListener("scroll",O)})),(a,s)=>{const t=e,o=f("el-breadcrumb-item"),r=f("el-breadcrumb");return v(),l("div",{class:i(["topbar-container",{fixed:n(B).topbar.fixed,shadow:N.value}]),"data-fixed-calc-width":""},[d("div",T,[n(L)?(v(),l("div",{key:0,class:i(["sidebar-collapse",{"is-collapse":n(B).menu.subMenuCollapse}]),onClick:s[0]||(s[0]=e=>n(B).toggleSidebarCollapse())},[b(t,{name:"toolbar-collapse"})],2)):c("v-if",!0),n(B).topbar.enableBreadcrumb&&"pc"===n(B).mode&&"filesystem"!==n(B).app.routeBaseOn?(v(),m(r,{key:1,"separator-class":"el-icon-arrow-right"},{default:u((()=>[b(_,{name:"breadcrumb"},{default:u((()=>[(v(!0),l(h,null,x(n(M),((e,a)=>{return v(),m(o,{key:e.path,to:a<n(M).length-1?(s=e.path,j(s)(k.params)):""},{default:u((()=>[g(w(e.title),1)])),_:2},1032,["to"]);var s})),128))])),_:1})])),_:1})):c("v-if",!0)]),b(E)],2)}}}),[["__scopeId","data-v-922b0592"]]);export{L as default};
