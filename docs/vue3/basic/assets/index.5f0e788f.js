
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as s,u as a,F as o,r as n,g as l,c as u,e as t,H as i,i as d,f as m,n as p,q as r,O as c,M as b,N as f,h as g}from"./index.b6307f63.js";import h from"./index.eaf781d9.js";import M from"./index.3fc6c061.js";import"./logo.96f1da49.js";import"./index.ef647e37.js";const v=s({name:"SubSidebar"});var j=e(Object.assign(v,{setup(e){const s=a(),v=o(),j=n(0);function x(e){j.value=e.target.scrollTop}return(e,a)=>{const o=p("el-menu");return["side","head","single"].includes(l(s).menu.menuMode)||"mobile"===l(s).mode?(r(),u("div",{key:0,class:i(["sub-sidebar-container",{"is-collapse":"pc"===l(s).mode&&l(s).menu.subMenuCollapse}]),onScroll:x},[t(h,{"show-logo":"single"===l(s).menu.menuMode,class:i({"sidebar-logo":!0,"sidebar-logo-bg":"single"===l(s).menu.menuMode,shadow:j.value})},null,8,["show-logo","class"]),d(" 侧边栏模式（无主导航） "),t(o,{"unique-opened":l(s).menu.subMenuUniqueOpened,"default-openeds":l(v).defaultOpenedPaths,"default-active":e.$route.meta.activeMenu||e.$route.path,collapse:"pc"===l(s).mode&&l(s).menu.subMenuCollapse,"collapse-transition":!1,class:i({"is-collapse-without-logo":"single"!==l(s).menu.menuMode&&l(s).menu.subMenuCollapse})},{default:m((()=>[t(c,{name:"sub-sidebar"},{default:m((()=>[(r(!0),u(b,null,f(l(v).sidebarMenus,((e,s)=>(r(),u(b,null,[!1!==e.meta.sidebar?(r(),g(M,{key:e.path||s,item:e,"base-path":e.path},null,8,["item","base-path"])):d("v-if",!0)],64)))),256))])),_:1})])),_:1},8,["unique-opened","default-openeds","default-active","collapse","class"])],34)):d("v-if",!0)}}}),[["__scopeId","data-v-e13b78be"]]);export{j as default};
