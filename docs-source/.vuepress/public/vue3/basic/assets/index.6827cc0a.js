
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t}from"./index.55b081b8.js";import{_ as i,d as a,r as e,o as s,c as n,b as o,e as c,H as r,p as l,k as d,y as u,A as m,q as p}from"./index.4b53d893.js";const b=t=>(l("data-v-73a63556"),t=t(),d(),t),g=b((()=>o("span",{class:"title"},[u("在线"),o("br"),u("咨询")],-1))),h=b((()=>o("span",{class:"title"},[u("加入"),o("br"),u("QQ群")],-1))),f=b((()=>o("span",{class:"title"},[u("购买"),o("br"),u("专业版")],-1))),v=b((()=>o("span",{class:"title"},[u("开发"),o("br"),u("文档")],-1))),y=b((()=>o("span",{class:"title"},[u("下载"),o("br"),u("基础版")],-1))),q=a({name:"BuyIt"});var x=i(Object.assign(q,{setup(i){const{proxy:a}=m(),l=e(location.href),d=e(!0);function u(t){window.open(t,"top")}return setTimeout((()=>{d.value=!1}),5e3),s((()=>{a.$notify({type:"success",title:"温馨提示",dangerouslyUseHTMLString:!0,message:`\n            <p>当前访问的是<b>基础版</b> (Vue3)</p>\n            <p>你可以点<a href="https://hooray.${location.origin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/vue3/pro/" target="_blank"><b>这里</b></a>访问专业版 (Vue3)</p>\n        `,position:"bottom-right",duration:5e3})})),(i,a)=>{const e=t;return p(),n("div",{class:r(["buy-it",{actived:d.value}])},[o("div",{class:"item",onClick:a[0]||(a[0]=t=>u("https://wpa.qq.com/msgrd?v=3&uin=304327508&site=qq&menu=yes"))},[c(e,{name:"fixed-right-qq"}),g]),o("div",{class:"item chat",onClick:a[1]||(a[1]=t=>u("https://qm.qq.com/cgi-bin/qm/qr?k=WoDBYN0S9r94f9oBZkxlGbiYxu3dEzgt&jump_from=webapi"))},[c(e,{name:"fixed-right-chat"}),h]),o("div",{class:"item buy",onClick:a[2]||(a[2]=t=>u(`https://hooray.${l.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/buy.html`))},[c(e,{name:"fixed-right-buy"}),f]),o("div",{class:"item doc",onClick:a[3]||(a[3]=t=>u(`https://hooray.${l.value.includes("gitee")?"gitee":"github"}.io/fantastic-admin/`))},[c(e,{name:"fixed-right-doc"}),v]),o("div",{class:"item code",onClick:a[4]||(a[4]=t=>u(`https://${l.value.includes("gitee")?"gitee":"github"}.com/hooray/fantastic-admin/`))},[c(e,{name:"fixed-right-code"}),y])],2)}}}),[["__scopeId","data-v-73a63556"]]);export{x as default};