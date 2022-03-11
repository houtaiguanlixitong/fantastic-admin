
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.1de06d30.js";import{d as a,e as t,_ as r,u as o,f as i,h as s,i as m,c as n}from"./index.2c18650f.js";import{K as d,g as l,z as w,L as _,h as c,i as k,q as p,s as h,u,x as f,a0 as y,a1 as g,w as x,A as b,j as v,O as M,M as j,a2 as C,N as z,l as I,o as E,a7 as P,B,a8 as L}from"./vendor.9da56f98.js";import S from"./index.3039e5ed.js";import N from"./index.bcf5b41c.js";import O from"./index.6e0e4550.js";import T from"./index.69360934.js";import F from"./index.2a0cc234.js";import A from"./index.c81ccbdd.js";import D from"./index.27207f68.js";import"./index.a5806f78.js";import"./logo.96f1da49.js";import"./index.e6c79664.js";import"./index.45a1c72d.js";import"./index.81b49b23.js";import"./index.c7ccd2ab.js";import"./index.0f920bb7.js";import"./index.f56c241f.js";var R={},W=!1,$={watermark_id:"wm_div_id",watermark_prefix:"mask_div_id",watermark_txt:"测试水印",watermark_x:20,watermark_y:20,watermark_rows:0,watermark_cols:0,watermark_x_space:50,watermark_y_space:50,watermark_font:"微软雅黑",watermark_color:"black",watermark_fontsize:"18px",watermark_alpha:.15,watermark_width:100,watermark_height:100,watermark_angle:15,watermark_parent_width:0,watermark_parent_height:0,watermark_parent_node:null,monitor:!0};const q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;var V,H=void 0!==q,K=H?new q((function(e){W?W=!1:(V&&1===e.length||1===e.length&&e[0].removedNodes.length>=1)&&G(V)})):null,J={childList:!0,attributes:!0,subtree:!0},G=function(e){if(1===arguments.length&&"object"==typeof arguments[0]){var a=arguments[0]||{};for(let e in a)a[e]&&$[e]&&a[e]===$[e]||(a[e]||0===a[e])&&($[e]=a[e])}var t=document.getElementById($.watermark_id);t&&t.parentNode&&t.parentNode.removeChild(t);var r=document.getElementById($.watermark_parent_node),o=r||document.body,i=Math.max(o.scrollWidth,o.clientWidth),s=Math.max(o.scrollHeight,o.clientHeight),m=arguments[0]||{},n=o,d=0,l=0;m.watermark_parent_width||m.watermark_parent_height?n&&(d=n.offsetTop||0,l=n.offsetLeft||0,$.watermark_x=$.watermark_x+l,$.watermark_y=$.watermark_y+d):n&&(d=n.offsetTop||0,l=n.offsetLeft||0);var w=document.getElementById($.watermark_id),_=null;if(w)w.shadowRoot&&(_=w.shadowRoot);else{(w=document.createElement("div")).id=$.watermark_id,w.setAttribute("style","pointer-events: none !important; display: block !important"),_="function"==typeof w.attachShadow?w.attachShadow({mode:"open"}):w;var c=o.children,k=Math.floor(Math.random()*(c.length-1));c[k]?o.insertBefore(w,c[k]):o.appendChild(w)}$.watermark_cols=parseInt((i-$.watermark_x)/($.watermark_width+$.watermark_x_space));var p,h=parseInt((i-$.watermark_x-$.watermark_width*$.watermark_cols)/$.watermark_cols);$.watermark_x_space=h?$.watermark_x_space:h,$.watermark_rows=parseInt((s-$.watermark_y)/($.watermark_height+$.watermark_y_space));var u,f,y,g=parseInt((s-$.watermark_y-$.watermark_height*$.watermark_rows)/$.watermark_rows);$.watermark_y_space=g?$.watermark_y_space:g,r?(p=$.watermark_x+$.watermark_width*$.watermark_cols+$.watermark_x_space*($.watermark_cols-1),u=$.watermark_y+$.watermark_height*$.watermark_rows+$.watermark_y_space*($.watermark_rows-1)):(p=l+$.watermark_x+$.watermark_width*$.watermark_cols+$.watermark_x_space*($.watermark_cols-1),u=d+$.watermark_y+$.watermark_height*$.watermark_rows+$.watermark_y_space*($.watermark_rows-1));for(var x=0;x<$.watermark_rows;x++){y=r?d+$.watermark_y+(s-u)/2+($.watermark_y_space+$.watermark_height)*x:$.watermark_y+(s-u)/2+($.watermark_y_space+$.watermark_height)*x;for(var b=0;b<$.watermark_cols;b++){f=r?l+$.watermark_x+(i-p)/2+($.watermark_width+$.watermark_x_space)*b:$.watermark_x+(i-p)/2+($.watermark_width+$.watermark_x_space)*b;var v=document.createElement("div"),M=document.createTextNode($.watermark_txt);v.appendChild(M),v.id=$.watermark_prefix+x+b,v.style.webkitTransform="rotate(-"+$.watermark_angle+"deg)",v.style.MozTransform="rotate(-"+$.watermark_angle+"deg)",v.style.msTransform="rotate(-"+$.watermark_angle+"deg)",v.style.OTransform="rotate(-"+$.watermark_angle+"deg)",v.style.transform="rotate(-"+$.watermark_angle+"deg)",v.style.visibility="",v.style.position="absolute",v.style.left=f+"px",v.style.top=y+"px",v.style.overflow="hidden",v.style.zIndex="9999999",v.style.opacity=$.watermark_alpha,v.style.fontSize=$.watermark_fontsize,v.style.fontFamily=$.watermark_font,v.style.color=$.watermark_color,v.style.textAlign="center",v.style.width=$.watermark_width+"px",v.style.height=$.watermark_height+"px",v.style.display="block",v.style["-ms-user-select"]="none",_.appendChild(v)}}const j=void 0===e.monitor?$.monitor:e.monitor;j&&H&&(K.observe(o,J),K.observe(document.getElementById($.watermark_id).shadowRoot,J))};R.init=function(e){V=e,G(e),window.addEventListener("onload",(function(){G(e)})),window.addEventListener("resize",(function(){G(e)}))},R.load=function(e){V=e,G(e)},R.remove=function(){W=!0,function(){if(1===arguments.length&&"object"==typeof arguments[0]){var e=arguments[0]||{};for(let a in e)e[a]&&$[a]&&e[a]===$[a]||(e[a]||0===e[a])&&($[a]=e[a])}var a=document.getElementById($.watermark_id);a.parentNode.removeChild(a),K.disconnect()}()};K=new q((function(e){var a=document.getElementById($.watermark_parent_node),t=a||document.body;if(document.getElementById($.watermark_id)!==e[0].target&&t!==e[0].target||!(V&&1===e.length||1===e.length&&e[0].removedNodes.length>=1)){if(a){var r=getComputedStyle(a).getPropertyValue("width"),o=getComputedStyle(a).getPropertyValue("height");r===Q.width&&o===Q.height||(Q.width=r,Q.height=o,G(V))}}else G(V)})),J={childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"],attributeOldValue:!0};var Q={width:0,height:0};const U={class:"layout"},X={class:"wrapper"},Y={class:"main"},Z=l({name:"Layout"});var ee=r(Object.assign(Z,{setup(r){const{proxy:l}=M(),W=j(),$=C(),q=o(),V=i(),H=s();(()=>{const e=a(),r=t();function o(){R.init({watermark_txt:`Fantastic-admin 水印测试 ${r.account}`,watermark_width:150,watermark_x:0,watermark_y:0,watermark_x_space:50,watermark_y_space:50,watermark_alpha:.1})}function i(){try{R.remove()}catch(e){}}d((()=>e.app.enableWatermark),(e=>{e?o():i()}),{immediate:!0})})();const K=w((()=>void 0!==W.meta.copyright?W.meta.copyright:q.copyright.enable));function J(){$.push({name:"reload"})}return d((()=>q.menu.subMenuCollapse),(e=>{"mobile"===q.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),d((()=>W.path),(()=>{"mobile"===q.mode&&q.$patch((e=>{e.menu.subMenuCollapse=!0}))})),_((()=>{l.$hotkeys("f5",(e=>{q.toolbar.enablePageReload&&(e.preventDefault(),J())}))})),z("reload",J),z("switchMenu",(function(e){H.setActived(e),q.menu.switchMainMenuAndPageJump&&(m(H.sidebarMenusFirstDeepestPath)?window.open(H.sidebarMenusFirstDeepestPath,"_blank"):$.push(H.sidebarMenusFirstDeepestPath))})),(a,t)=>{const r=n,o=I("router-view"),i=e,s=I("el-backtop");return E(),c("div",U,[k("div",{id:"app-main",class:h({"main-page-maximize":u(q).mainPageMaximizeStatus})},[p(S),k("div",X,[k("div",{class:h(["sidebar-container",{show:"mobile"===u(q).mode&&!u(q).menu.subMenuCollapse}])},[p(N),p(O)],2),k("div",{class:h(["sidebar-mask",{show:"mobile"===u(q).mode&&!u(q).menu.subMenuCollapse}]),onClick:t[0]||(t[0]=e=>u(q).toggleSidebarCollapse())},null,2),k("div",{class:"main-container",style:f({"padding-bottom":a.$route.meta.paddingBottom})},[p(T),k("div",Y,[y(k("div",{class:"exit-main-page-maximize",onClick:t[1]||(t[1]=e=>u(q).setMainPageMaximize())},[p(r,{name:"ri-logout-box-line"})],512),[[g,u(q).mainPageMaximizeStatus]]),p(o,null,{default:x((({Component:e,route:a})=>[p(P,{name:"main",mode:"out-in",appear:""},{default:x((()=>[(E(),b(L,{include:[...u(V).list]},[(E(),b(B(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),u(K)?(E(),b(i,{key:0})):v("v-if",!0)],4)]),p(s,{right:20,bottom:20,title:"回到顶部"})],2),p(F),p(A),p(D)])}}}),[["__scopeId","data-v-4e2b360a"]]);export{ee as default};
