
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.5f2bc1a2.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,b as s,G as o,g as e,f as t,H as a,N as p,K as u,a4 as m,Q as d}from"./vendor.a0579877.js";import{_ as g}from"./index.ce04210c.js";const $={class:"result"},k={key:0,class:"icon icon-success"},x={key:1,class:"icon icon-warning"},w={key:2,class:"icon icon-error"},N={key:3,class:"desc"},S={key:4,class:"extra"},b={key:5,class:"actions"},V={props:{type:{type:String,validator:n=>["success","warning","error"].includes(n),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup(n){return(l,f)=>{const _=i("el-icon-success-filled"),c=i("el-icon"),r=i("el-icon-warning-filled"),y=i("el-icon-circle-close-filled");return s(),o("div",$,[n.type==="success"?(s(),o("div",k,[e(c,null,{default:t(()=>[e(_)]),_:1})])):n.type==="warning"?(s(),o("div",x,[e(c,null,{default:t(()=>[e(r)]),_:1})])):(s(),o("div",w,[e(c,null,{default:t(()=>[e(y)]),_:1})])),a("h1",null,p(n.title),1),n.desc?(s(),o("div",N,p(n.desc),1)):u("v-if",!0),l.$slots.extra?(s(),o("div",S,[m(l.$slots,"extra",{},void 0,!0)])):u("v-if",!0),l.$slots.default?(s(),o("div",b,[m(l.$slots,"default",{},void 0,!0)])):u("v-if",!0)])}}};var B=v(V,[["__scopeId","data-v-cef7b02c"]]);const C={},q=d("\u8FD4\u56DE\u5217\u8868"),D=d("\u6253\u5370"),E=a("div",null,"\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A",-1),G=a("div",null,[d(" \u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3 "),a("a",{href:"###"},"\u6253\u5370")],-1),H=d("\u8FD4\u56DE\u4FEE\u6539");function I(n,l){const f=g,_=i("el-button"),c=B,r=h;return s(),o("div",null,[e(f,{title:"\u5904\u7406\u7ED3\u679C",content:"Result"}),e(r,null,{default:t(()=>[e(c,{type:"success",title:"\u63D0\u4EA4\u6210\u529F",desc:"\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\u3002"},{default:t(()=>[e(_,{type:"primary"},{default:t(()=>[q]),_:1}),e(_,null,{default:t(()=>[D]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(c,{type:"error",title:"\u63D0\u4EA4\u5931\u8D25",desc:"\u7070\u8272\u989D\u5916\u533A\u57DF\u53EF\u4EE5\u663E\u793A\u4E00\u4E9B\u8865\u5145\u7684\u4FE1\u606F\u3002\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002"},{extra:t(()=>[E,G]),default:t(()=>[e(_,{type:"primary"},{default:t(()=>[H]),_:1})]),_:1})]),_:1})])}var j=v(C,[["render",I]]);export{j as default};