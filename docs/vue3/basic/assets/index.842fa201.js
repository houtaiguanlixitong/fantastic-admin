
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as I}from"./index.134061c0.js";import{i as V,a4 as z,k as r,s as g,u as o,g as e,l as c,e as t,y as F,z as R,_ as T,R as j,r as a,f as l,b as A,v as p,t as D}from"./vendor.7c7b0e52.js";import{_ as E,u as O,a as P}from"./index.78be6e19.js";const U=d=>(F("data-v-a7a71a9c"),d=d(),R(),d),q={class:"tools"},G={class:"buttons"},H=U(()=>g("span",{class:"title"},"\u67E5\u770B\u4E13\u4E1A\u7248",-1)),J={class:"user-wrapper"},K=p("\u63A7\u5236\u53F0"),L=p("\u4E2A\u4EBA\u8BBE\u7F6E"),M=p("\u9000\u51FA\u767B\u5F55"),Q=V({name:"Tools"}),W=Object.assign(Q,{setup(d){const k=T("reload"),m=j(),s=O(),v=P(),{isFullscreen:w,toggle:b}=z();function S(_){switch(_){case"dashboard":m.push({name:"dashboard"});break;case"setting":m.push({name:"personalSetting"});break;case"logout":v.logout().then(()=>{m.push({name:"login"})});break}}function y(){window.open(`https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro`,"top")}return(_,n)=>{const i=I,C=a("el-icon-user-filled"),h=a("el-icon"),x=a("el-avatar"),B=a("el-icon-caret-bottom"),f=a("el-dropdown-item"),$=a("el-dropdown-menu"),N=a("el-dropdown");return l(),r("div",q,[g("div",G,[o(s).mode=="pc"?(l(),r("span",{key:0,class:"item item-pro",onClick:y},[e(i,{name:"pro"}),H])):c("v-if",!0),o(s).topbar.enableNavSearch?(l(),r("span",{key:1,class:"item",onClick:n[0]||(n[0]=u=>_.$eventBus.emit("global-search-toggle"))},[e(i,{name:"search"})])):c("v-if",!0),o(s).mode==="pc"&&o(s).topbar.enableFullscreen?(l(),r("span",{key:2,class:"item",onClick:n[1]||(n[1]=(...u)=>o(b)&&o(b)(...u))},[e(i,{name:o(w)?"fullscreen-exit":"fullscreen"},null,8,["name"])])):c("v-if",!0),o(s).topbar.enablePageReload?(l(),r("span",{key:3,class:"item",onClick:n[2]||(n[2]=u=>o(k)())},[e(i,{name:"toolbar-reload"})])):c("v-if",!0),o(s).topbar.enableAppSetting?(l(),r("span",{key:4,class:"item",onClick:n[3]||(n[3]=u=>_.$eventBus.emit("global-theme-toggle"))},[e(i,{name:"toolbar-theme"})])):c("v-if",!0)]),e(N,{class:"user-container",size:"default",onCommand:S},{dropdown:t(()=>[e($,{class:"user-dropdown"},{default:t(()=>[o(s).dashboard.enable?(l(),A(f,{key:0,command:"dashboard"},{default:t(()=>[K]),_:1})):c("v-if",!0),e(f,{command:"setting"},{default:t(()=>[L]),_:1}),e(f,{divided:"",command:"logout"},{default:t(()=>[M]),_:1})]),_:1})]),default:t(()=>[g("div",J,[e(x,{size:"small"},{default:t(()=>[e(h,null,{default:t(()=>[e(C)]),_:1})]),_:1}),p(" "+D(o(v).account)+" ",1),e(h,null,{default:t(()=>[e(B)]),_:1})])]),_:1})])}}});var ee=E(W,[["__scopeId","data-v-a7a71a9c"]]);export{ee as default};
