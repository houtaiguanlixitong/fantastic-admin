
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.b2b8566d.js";import{_ as a,d as s,u as t,B as o,r,o as l,P as d,c as n,b as i,g as b,H as c,e as u,i as m,h as p,f,l as h,Q as v,n as x,q as g,M as w,N as _,y,t as j,O as k,R as C}from"./index.9be238e7.js";import B from"./index.77690d95.js";const E={class:"left-box"},M=s({name:"Topbar"});var N=a(Object.assign(M,{setup(a){const s=h(),M=t(),N=o((()=>"mobile"===M.mode||["side","head","single"].includes(M.menu.menuMode)&&M.topbar.enableSidebarCollapse)),O=o((()=>{let e=[];return M.dashboard.enable&&e.push({path:"/dashboard",title:M.dashboard.title}),s.meta.breadcrumbNeste&&e.push(...v(s.meta.breadcrumbNeste)),e})),T=r(0);function L(){T.value=document.documentElement.scrollTop||document.body.scrollTop}return l((()=>{window.addEventListener("scroll",L)})),d((()=>{window.removeEventListener("scroll",L)})),(a,t)=>{const o=e,r=x("el-breadcrumb-item"),l=x("el-breadcrumb");return g(),n("div",{class:c(["topbar-container",{fixed:b(M).topbar.fixed,shadow:T.value}]),"data-fixed-calc-width":""},[i("div",E,[b(N)?(g(),n("div",{key:0,class:c(["sidebar-collapse",{"is-collapse":b(M).menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>b(M).toggleSidebarCollapse())},[u(o,{name:"toolbar-collapse"})],2)):m("v-if",!0),b(M).topbar.enableBreadcrumb&&"pc"===b(M).mode&&"filesystem"!==b(M).app.routeBaseOn?(g(),p(l,{key:1,"separator-class":"el-icon-arrow-right"},{default:f((()=>[u(k,{name:"breadcrumb"},{default:f((()=>[(g(!0),n(w,null,_(b(O),((e,a)=>{return g(),p(r,{key:e.path,to:a<b(O).length-1?(t=e.path,C(t)(s.params)):""},{default:f((()=>[y(j(e.title),1)])),_:2},1032,["to"]);var t})),128))])),_:1})])),_:1})):m("v-if",!0)]),u(B)],2)}}}),[["__scopeId","data-v-3ac0fd84"]]);export{N as default};