
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.9ed489d8.js";import{_ as h}from"./index.abc7a202.js";import{_ as y}from"./index.64e7900a.js";import{r as l,y as q,l as x,F as e,A as o,H as $,D as _,o as w,m as c,$ as E}from"./vendor.bcd7a662.js";const k=E("node-qrcode \u5B98\u7F51"),C=["src"],F={ref:"canvas"},D=["src"],b=["src"],B={setup(L){const{proxy:n}=$(),r=l(""),i=l(""),d=l("");q(()=>{n.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01").then(t=>{r.value=t}).catch(t=>{console.log(t)}),n.$qrcode.toCanvas(n.$refs.canvas,"Fantastic-admin \u771F\u68D2\uFF01").then(()=>{console.log("success")}).catch(t=>{console.log(t)}),n.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(t=>{i.value=t}).catch(t=>{console.log(t)}),n.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{width:100}).then(t=>{d.value=t}).catch(t=>{console.log(t)})});function m(t){window.open(t,"top")}return(t,u)=>{const p=_("el-button"),f=h,a=v,s=_("el-col"),g=_("el-row");return w(),x("div",null,[e(f,{title:"\u4E8C\u7EF4\u7801"},{default:o(()=>[e(p,{icon:"el-icon-link",onClick:u[0]||(u[0]=N=>m("https://github.com/soldair/node-qrcode"))},{default:o(()=>[k]),_:1})]),_:1}),e(g,{gutter:20,style:{margin:"0 10px"}},{default:o(()=>[e(s,{sm:6},{default:o(()=>[e(a,{title:"\u6E32\u67D3\u6210 img \u6807\u7B7E",style:{margin:"0"}},{default:o(()=>[c("img",{src:r.value},null,8,C)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(a,{title:"\u6E32\u67D3\u6210 canvas \u6807\u7B7E",style:{margin:"0"}},{default:o(()=>[c("canvas",F,null,512)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(a,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",style:{margin:"0"}},{default:o(()=>[c("img",{src:i.value},null,8,D)]),_:1})]),_:1}),e(s,{sm:6},{default:o(()=>[e(a,{title:"\u6307\u5B9A\u5BBD\u5EA6",style:{margin:"0"}},{default:o(()=>[c("img",{src:d.value},null,8,b)]),_:1})]),_:1})]),_:1})])}}};var A=y(B,[["__scopeId","data-v-5d9fe2f2"]]);export{A as default};
