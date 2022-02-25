
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as G}from"./index.134061c0.js";import{i as J,j as b,a as Q,w as P,o as W,b as g,s,T as k,g as v,S as $,u as f,k as y,l as I,q as V,x as j,F as q,a2 as X,y as Y,z as Z,v as i,V as ee,r as D,f as c,e as ae,t as E}from"./vendor.7c7b0e52.js";import{_ as se,u as te,e as ne,c as oe,d as M,i as S}from"./index.78be6e19.js";const H=_=>(Y("data-v-6e3c9a61"),_=_(),Z(),_),le={class:"container"},re={key:0,class:"tips"},ce=H(()=>s("div",{class:"tip"},[s("span",null,"Alt"),i("+"),s("span",null,"S"),i(" \u5524\u9192\u641C\u7D22\u9762\u677F ")],-1)),ue={class:"tip"},ie=i(" \u5207\u6362\u641C\u7D22\u7ED3\u679C "),de={class:"tip"},he=i(" \u8BBF\u95EE\u9875\u9762 "),pe=H(()=>s("div",{class:"tip"},[s("span",null,"ESC"),i(" \u9000\u51FA ")],-1)),ve=["href","target","onClick","onMouseover"],fe={class:"icon"},_e={class:"info"},me={class:"title"},be={class:"breadcrumb"},ge={class:"path"},ke=J({name:"Search"}),$e=Object.assign(ke,{setup(_){const{proxy:t}=ee(),m=te(),K=ne(),U=oe(),u=b(!1),d=b(""),N=b([]),n=b(-1),h=Q(()=>{let a=[];return a=N.value.filter(e=>{let o=!1;return e.title.indexOf(d.value)>=0&&(o=!0),e.path.indexOf(d.value)>=0&&(o=!0),e.breadcrumb.some(l=>l.indexOf(d.value)>=0)&&(o=!0),o}),a});P(()=>u.value,a=>{a?(document.querySelector("body").classList.add("hidden"),t.$refs.search.scrollTop=0,t.$hotkeys("up",x),t.$hotkeys("down",B),t.$hotkeys("enter",C),setTimeout(()=>{t.$refs.input.$el.children[0].focus()},100)):(document.querySelector("body").classList.remove("hidden"),t.$hotkeys.unbind("up",x),t.$hotkeys.unbind("down",B),t.$hotkeys.unbind("enter",C),setTimeout(()=>{d.value="",n.value=-1},500))}),P(()=>h.value,()=>{n.value=-1,L(0)}),W(()=>{t.$eventBus.on("global-search-toggle",()=>{u.value=!u.value}),t.$hotkeys("alt+s",a=>{m.topbar.enableNavSearch&&(a.preventDefault(),u.value=!0)}),m.app.routeBaseOn!=="filesystem"?K.routes.map(a=>{w(a.children)}):U.menus.map(a=>{w(a.children)})});function z(a){let e=!0;return a.children?a.children.every(o=>o.meta.sidebar===!1)&&(e=!1):e=!1,e}function w(a){a.map(e=>{if(e.meta.sidebar!==!1)if(z(e)){let o=e.meta.baseBreadcrumb?M(e.meta.baseBreadcrumb):[];o.push(e.meta.title);let l=M(e.children);l.map(p=>{p.meta.baseIcon=e.meta.icon||e.meta.baseIcon,p.meta.baseBreadcrumb=o,p.meta.basePath=e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path}),w(l)}else{let o=[];e.meta.baseBreadcrumb&&(o=M(e.meta.baseBreadcrumb)),o.push(e.meta.title);let l="";S(e.path)?l=e.path:l=e.meta.basePath?[e.meta.basePath,e.path].join("/"):e.path,N.value.push({icon:e.meta.icon||e.meta.baseIcon,title:e.meta.title,i18n:e.meta.i18n,breadcrumb:o,path:l,isExternalLink:S(e.path)})}})}function x(){h.value.length&&(n.value-=1,n.value<0&&(n.value=h.value.length-1),L(t.$refs[`search-item-${n.value}`][0].offsetTop))}function B(){h.value.length&&(n.value+=1,n.value>h.value.length-1&&(n.value=0),L(t.$refs[`search-item-${n.value}`][0].offsetTop))}function C(){n.value!==-1&&t.$refs[`search-item-${n.value}`][0].click()}function L(a){n.value!==-1&&(a+t.$refs[`search-item-${n.value}`][0].clientHeight>t.$refs.search.scrollTop+t.$refs.search.clientHeight||a+t.$refs[`search-item-${n.value}`][0].clientHeight<=t.$refs.search.scrollTop)&&t.$refs.search.scrollTo({top:a,behavior:"smooth"})}return(a,e)=>{const o=D("el-input"),l=G,p=D("router-link");return c(),g(X,{to:"#app"},[s("div",{id:"search",class:V({searching:u.value}),onClick:e[3]||(e[3]=r=>u.value&&a.$eventBus.emit("global-search-toggle"))},[s("div",le,[s("div",{class:"search-box",onClick:e[2]||(e[2]=k(()=>{},["stop"]))},[v(o,{ref:"input",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r),"prefix-icon":"el-icon-search",placeholder:"\u641C\u7D22\u9875\u9762\uFF0C\u652F\u6301\u6807\u9898\u3001URL\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:[e[1]||(e[1]=$(r=>a.$eventBus.emit("global-search-toggle"),["esc"])),$(k(x,["prevent"]),["up"]),$(k(B,["prevent"]),["down"]),$(k(C,["prevent"]),["enter"])]},null,8,["modelValue","onKeydown"]),f(m).mode==="pc"?(c(),y("div",re,[ce,s("div",ue,[s("span",null,[v(l,{name:"search-up"})]),s("span",null,[v(l,{name:"search-down"})]),ie]),s("div",de,[s("span",null,[v(l,{name:"search-enter"})]),he]),pe])):I("v-if",!0)]),s("div",{ref:"search",class:V(["result",{mobile:f(m).mode==="mobile"}])},[(c(!0),y(q,null,j(f(h),(r,T)=>(c(),g(p,{key:r.path,custom:"",to:u.value?r.path:""},{default:ae(({href:F,navigate:R})=>[s("a",{ref_for:!0,ref:`search-item-${T}`,href:f(S)(r.path)?r.path:F,class:V(["item",{actived:T===n.value}]),target:f(S)(r.path)?"_blank":"_self",onClick:R,onMouseover:O=>n.value=T},[s("div",fe,[r.icon?(c(),g(l,{key:0,name:r.icon},null,8,["name"])):I("v-if",!0)]),s("div",_e,[s("div",me,[i(E(r.title)+" ",1),r.isExternalLink?(c(),g(l,{key:0,name:"external-link"})):I("v-if",!0)]),s("div",be,[(c(!0),y(q,null,j(r.breadcrumb,(O,A)=>(c(),y("span",{key:A},[i(E(O)+" ",1),v(l,{name:"el-icon-arrow-right"})]))),128))]),s("div",ge,E(r.path),1)])],42,ve)]),_:2},1032,["to"]))),128))],2)])],2)])}}});var xe=se($e,[["__scopeId","data-v-6e3c9a61"]]);export{xe as default};
