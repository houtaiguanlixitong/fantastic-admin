
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as g}from"./index.5f2bc1a2.js";import{_ as b}from"./index.ce04210c.js";import{A,D as V,F as r,a5 as h,r as _,b as N,G as E,g as t,f as p,H as i,Q as d}from"./vendor.a0579877.js";import{e as C}from"./index.255e4962.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const w={class:"block"},B={class:"block"},K={class:"block"},y=d("\u8FDB\u5165\u540C\u7EA7\u8DEF\u7531\u9875\u9762"),I=d("\u8FDB\u5165\u4E0B\u7EA7\u8DEF\u7531\u9875\u9762"),O=A({name:"KeepAliveExamplePage"}),P=Object.assign(O,{setup(R){const v=V(),l=C(),s=r(!1),m=r(1);function u(o){let e;switch(o){case 1:e="keepAliveExampleDetail";break;case 2:e="keepAliveExampleNestedDetail";break}v.push({name:e})}return h((o,e)=>{const n=e.matched[o.matched.length-1].components.default.name;s.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(o.name)?l.add(n):l.remove(n)}),(o,e)=>{const n=b,f=_("el-switch"),k=_("el-input-number"),c=_("el-button"),x=g;return N(),E("div",null,[t(n,{title:"\u9875\u9762\u7F13\u5B58",content:"\u9664\u4E86\u53EF\u4EE5\u5728\u8DEF\u7531\u91CC\u914D\u7F6E\u9875\u9762\u662F\u5426\u9700\u8981\u7F13\u5B58\u5916\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u6846\u67B6\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u800C\u662F\u5728\u9875\u9762\u91CC\u81EA\u884C\u5B9E\u73B0\uFF0C\u8BE5\u65B9\u6CD5\u76EE\u524D\u4EC5\u652F\u6301\u5728 Options API \u4E2D\u5B9E\u73B0\u3002"}),t(x,null,{default:p(()=>[i("div",w,[t(f,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a),"active-text":"\u5F00\u542F\u7F13\u5B58","inactive-text":"\u5173\u95ED\u7F13\u5B58"},null,8,["modelValue"])]),i("div",B,[t(k,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=a=>m.value=a)},null,8,["modelValue"])]),i("div",K,[t(c,{onClick:e[2]||(e[2]=a=>u(1))},{default:p(()=>[y]),_:1}),t(c,{onClick:e[3]||(e[3]=a=>u(2))},{default:p(()=>[I]),_:1})])]),_:1})])}}});var G=D(P,[["__scopeId","data-v-556317d7"]]);export{G as default};
