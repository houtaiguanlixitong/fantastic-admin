
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as a,h as l}from"./index.d5f01412.js";import{_ as t}from"./index.fe75bae1.js";import{i as s,j as d,k as o,g as u,e as i,R as n,r as c,f as m,s as r,y as p,z as f,v,V as _}from"./vendor.9748e354.js";import"./index.2247f9f8.js";const h=e=>(p("data-v-5e1a20c4"),e=e(),f(),e),b=h((()=>r("h2",null,"基本设置",-1))),g=v("保存"),V=h((()=>r("h2",null,"安全设置",-1))),x={class:"setting-list"},y={class:"item"},w=h((()=>r("div",{class:"content"},[r("div",{class:"title"},"账户密码"),r("div",{class:"desc"},"当前密码强度：强")],-1))),j={class:"action"},q=v("修改"),U={class:"item"},k=h((()=>r("div",{class:"content"},[r("div",{class:"title"},"密保手机"),r("div",{class:"desc"},"已绑定手机：187****3441")],-1))),Q={class:"action"},O=v("修改"),P={class:"item"},S=h((()=>r("div",{class:"content"},[r("div",{class:"title"},"备用邮箱"),r("div",{class:"desc"},"当前未绑定备用邮箱")],-1))),z={class:"action"},C=v("绑定"),D=s({name:"PersonalSetting"}),E=Object.assign(D,{setup(e){const a=n(),{proxy:s}=_(),p=d({headimg:"",mobile:"",name:"",qq:"",wechat:""});function f(e){""==e.error?p.value.headimg=e.data.path:s.$message.warning(e.error)}function v(){a.push({name:"personalEditPassword"})}return(e,a)=>{const s=c("el-input"),d=c("el-form-item"),n=c("el-button"),_=c("el-form"),h=c("el-col"),D=t,E=c("el-row"),I=c("el-tab-pane"),K=c("el-tabs"),R=l;return m(),o("div",null,[u(R,null,{default:i((()=>[u(K,{"tab-position":"left",style:{height:"600px"}},{default:i((()=>[u(I,{label:"基本设置",class:"basic"},{default:i((()=>[b,u(E,{gutter:20},{default:i((()=>[u(h,{span:16},{default:i((()=>[u(_,{ref_key:"form",ref:p,model:p.value,"label-width":"120px","label-suffix":"："},{default:i((()=>[u(d,{label:"名 称"},{default:i((()=>[u(s,{modelValue:p.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value.name=e),placeholder:"请输入你的名称"},null,8,["modelValue"])])),_:1}),u(d,{label:"手机号"},{default:i((()=>[u(s,{modelValue:p.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value.mobile=e),placeholder:"请输入你的手机号"},null,8,["modelValue"])])),_:1}),u(d,{label:"QQ 号"},{default:i((()=>[u(s,{modelValue:p.value.qq,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value.qq=e),placeholder:"请输入你的 QQ 号"},null,8,["modelValue"])])),_:1}),u(d,{label:"微信号"},{default:i((()=>[u(s,{modelValue:p.value.wechat,"onUpdate:modelValue":a[3]||(a[3]=e=>p.value.wechat=e),placeholder:"请输入你的微信号"},null,8,["modelValue"])])),_:1}),u(d,null,{default:i((()=>[u(n,{type:"primary"},{default:i((()=>[g])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),u(h,{span:8},{default:i((()=>[u(D,{url:p.value.headimg,"onUpdate:url":a[4]||(a[4]=e=>p.value.headimg=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:f},null,8,["url"])])),_:1})])),_:1})])),_:1}),u(I,{label:"安全设置",class:"security"},{default:i((()=>[V,r("div",x,[r("div",y,[w,r("div",j,[u(n,{type:"text",onClick:v},{default:i((()=>[q])),_:1})])]),r("div",U,[k,r("div",Q,[u(n,{type:"text"},{default:i((()=>[O])),_:1})])]),r("div",P,[S,r("div",z,[u(n,{type:"text"},{default:i((()=>[C])),_:1})])])])])),_:1})])),_:1})])),_:1})])}}});"function"==typeof a&&a(E);var I=e(E,[["__scopeId","data-v-5e1a20c4"]]);export{I as default};
