
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as q}from"./index.5f2bc1a2.js";import{_ as C}from"./index.f82966be.js";import{A as k,D as I,B as Q,F as U,r as n,b as B,G as N,K as P,g as e,f as o,H as t,L as D,M as E,Q as p}from"./vendor.a0579877.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.693bf817.js";const _=i=>(D("data-v-0fa853b4"),i=i(),E(),i),O=_(()=>t("h2",null,"\u57FA\u672C\u8BBE\u7F6E",-1)),T=p("\u4FDD\u5B58"),j=_(()=>t("h2",null,"\u5B89\u5168\u8BBE\u7F6E",-1)),A={class:"setting-list"},F={class:"item"},G=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u8D26\u6237\u5BC6\u7801"),t("div",{class:"desc"},"\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u5F3A")],-1)),H={class:"action"},L=p("\u4FEE\u6539"),M={class:"item"},R=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u5BC6\u4FDD\u624B\u673A"),t("div",{class:"desc"},"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A187****3441")],-1)),$={class:"action"},z=p("\u4FEE\u6539"),J={class:"item"},W=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u5907\u7528\u90AE\u7BB1"),t("div",{class:"desc"},"\u5F53\u524D\u672A\u7ED1\u5B9A\u5907\u7528\u90AE\u7BB1")],-1)),X={class:"action"},Y=p("\u7ED1\u5B9A"),Z=k({name:"PersonalSetting"}),ee=Object.assign(Z,{setup(i){const v=I(),{proxy:h}=Q(),l=U({headimg:"",mobile:"",name:"",qq:"",wechat:""});function b(c){c.error==""?l.value.headimg=c.data.path:h.$message.warning(c.error)}function g(){v.push({name:"personalEditPassword"})}return(c,a)=>{const u=n("el-input"),d=n("el-form-item"),m=n("el-button"),V=n("el-form"),r=n("el-col"),x=C,w=n("el-row"),f=n("el-tab-pane"),y=n("el-tabs"),S=q;return B(),N("div",null,[P(" \u9875\u9762\uFF1ASetting "),e(S,null,{default:o(()=>[e(y,{"tab-position":"left",style:{height:"600px"}},{default:o(()=>[e(f,{label:"\u57FA\u672C\u8BBE\u7F6E",class:"basic"},{default:o(()=>[O,e(w,{gutter:20},{default:o(()=>[e(r,{span:16},{default:o(()=>[e(V,{ref_key:"form",ref:l,model:l.value,"label-width":"120px","label-suffix":"\uFF1A"},{default:o(()=>[e(d,{label:"\u540D \u79F0"},{default:o(()=>[e(u,{modelValue:l.value.name,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value.name=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u624B\u673A\u53F7"},{default:o(()=>[e(u,{modelValue:l.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value.mobile=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),e(d,{label:"QQ \u53F7"},{default:o(()=>[e(u,{modelValue:l.value.qq,"onUpdate:modelValue":a[2]||(a[2]=s=>l.value.qq=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684 QQ \u53F7"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5FAE\u4FE1\u53F7"},{default:o(()=>[e(u,{modelValue:l.value.wechat,"onUpdate:modelValue":a[3]||(a[3]=s=>l.value.wechat=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5FAE\u4FE1\u53F7"},null,8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(m,{type:"primary"},{default:o(()=>[T]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(r,{span:8},{default:o(()=>[e(x,{url:l.value.headimg,"onUpdate:url":a[4]||(a[4]=s=>l.value.headimg=s),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:b},null,8,["url"])]),_:1})]),_:1})]),_:1}),e(f,{label:"\u5B89\u5168\u8BBE\u7F6E",class:"security"},{default:o(()=>[j,t("div",A,[t("div",F,[G,t("div",H,[e(m,{type:"text",onClick:g},{default:o(()=>[L]),_:1})])]),t("div",M,[R,t("div",$,[e(m,{type:"text"},{default:o(()=>[z]),_:1})])]),t("div",J,[W,t("div",X,[e(m,{type:"text"},{default:o(()=>[Y]),_:1})])])])]),_:1})]),_:1})]),_:1})])}}});var ne=K(ee,[["__scopeId","data-v-0fa853b4"]]);export{ne as default};