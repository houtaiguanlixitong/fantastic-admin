
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.a91da01e.js";import{_ as b}from"./index.454d22a3.js";import{j as A,r as d,am as V,l as h,F as t,A as _,X as N,D as p,o as E,m as i,$ as r}from"./vendor.d1c84aa2.js";import{_ as C,k as D}from"./index.8f12b84b.js";const w={class:"block"},B={class:"block"},K={class:"block"},$=r("\u8FDB\u5165\u540C\u7EA7\u8DEF\u7531\u9875\u9762"),j=r("\u8FDB\u5165\u4E0B\u7EA7\u8DEF\u7531\u9875\u9762"),y=A({name:"KeepAliveExamplePage"}),I=Object.assign(y,{setup(O){const v=N(),a=D(),s=d(!1),m=d(1);function u(o){let e;switch(o){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}v.push({name:e})}return V((o,e)=>{const n=e.matched[o.matched.length-1].components.default.name;s.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(o.name)?a.add(n):a.remove(n)}),(o,e)=>{const n=b,f=p("el-switch"),k=p("el-input-number"),c=p("el-button"),x=g;return E(),h("div",null,[t(n,{title:"\u9875\u9762\u7F13\u5B58",content:"\u9664\u4E86\u53EF\u4EE5\u5728\u8DEF\u7531\u91CC\u914D\u7F6E\u9875\u9762\u662F\u5426\u9700\u8981\u7F13\u5B58\u5916\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u6846\u67B6\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u800C\u662F\u5728\u9875\u9762\u91CC\u81EA\u884C\u5B9E\u73B0\uFF0C\u8BE5\u65B9\u6CD5\u76EE\u524D\u4EC5\u652F\u6301\u5728 Options API \u4E2D\u5B9E\u73B0\u3002"}),t(x,null,{default:_(()=>[i("div",w,[t(f,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),"active-text":"\u5F00\u542F\u7F13\u5B58","inactive-text":"\u5173\u95ED\u7F13\u5B58"},null,8,["modelValue"])]),i("div",B,[t(k,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=l=>m.value=l)},null,8,["modelValue"])]),i("div",K,[t(c,{onClick:e[2]||(e[2]=l=>u(1))},{default:_(()=>[$]),_:1}),t(c,{onClick:e[3]||(e[3]=l=>u(2))},{default:_(()=>[j]),_:1})])]),_:1})])}}});var F=C(I,[["__scopeId","data-v-7dfdf479"]]);export{F as default};