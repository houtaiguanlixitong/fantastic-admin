
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import a from"./index.854d5d70.js";import e from"./index.b6c739b5.js";import{_ as o,d as r,u as s,D as t,r as n,o as b,W as d,c as l,H as i,G as c,g as u,O as m,q as p,h as f,R as h}from"./index.992324c5.js";import"./index.1c8a711f.js";import"./index.ab9e2bc0.js";import"./index.9d45f7fa.js";const x=r({name:"Topbar"});var v=o(Object.assign(x,{setup(o){const r=s(),x=t((()=>{let a=[];return r.tabbar.enable&&a.push("tabbar"),("head"!==r.menu.menuMode||r.toolbar.enableSidebarCollapse||r.toolbar.enableBreadcrumb&&"filesystem"!==r.app.routeBaseOn)&&("only-head"!==r.menu.menuMode||r.toolbar.enableBreadcrumb&&"filesystem"!==r.app.routeBaseOn)&&a.push("toolbar"),r.topbar.switchTabbarAndToolbar&&a.reverse(),a}));const v=n(0);function w(){v.value=document.documentElement.scrollTop||document.body.scrollTop}return b((()=>{window.addEventListener("scroll",w)})),d((()=>{window.removeEventListener("scroll",w)})),(o,s)=>(p(),l("div",{class:m(["topbar-container",{"has-tabbar":u(x).includes("tabbar"),"has-toolbar":u(x).includes("toolbar"),fixed:u(r).topbar.fixed,shadow:!u(r).topbar.switchTabbarAndToolbar&&v.value}]),"data-fixed-calc-width":""},[(p(!0),l(i,null,c(u(x),(o=>(p(),f(h({tabbar:a,toolbar:e}[o]),{key:o})))),128))],2))}}),[["__scopeId","data-v-d7093e5e"]]);export{v as default};