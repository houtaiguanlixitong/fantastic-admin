
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as h}from"./index.5f2bc1a2.js";import{_ as x}from"./index.ce04210c.js";import g from"./alert.50b12b47.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import{r as m,b as s,G as a,g as l,f as d,W as i,X as _,Q as u,e as p,N as k}from"./vendor.a0579877.js";const C=["\u4E0A\u6D77","\u5317\u4EAC","\u5E7F\u5DDE","\u6DF1\u5733"],A={components:{Alert:g},data(){return{checked:!0,checked1:!1,checked2:!0,checkList:["\u9009\u4E2D\u4E14\u7981\u7528","\u590D\u9009\u6846 A"],checkedCities:["\u4E0A\u6D77","\u5317\u4EAC"],cities:C,checkboxGroup1:["\u4E0A\u6D77"],checked3:!0,checked4:!1}}},B=u("\u5907\u9009\u9879"),G=u("\u5907\u9009\u98791"),L=u("\u5907\u9009\u9879");function v(N,t,w,D,o,E){const b=m("Alert"),f=x,c=m("el-checkbox"),n=h,r=m("el-checkbox-group"),V=m("el-checkbox-button");return s(),a("div",null,[l(b),l(f,{title:"\u591A\u9009\u6846"}),l(n,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:d(()=>[l(c,{modelValue:o.checked,"onUpdate:modelValue":t[0]||(t[0]=e=>o.checked=e)},{default:d(()=>[B]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:d(()=>[l(c,{modelValue:o.checked1,"onUpdate:modelValue":t[1]||(t[1]=e=>o.checked1=e),disabled:""},{default:d(()=>[G]),_:1},8,["modelValue"]),l(c,{modelValue:o.checked2,"onUpdate:modelValue":t[2]||(t[2]=e=>o.checked2=e),disabled:""},{default:d(()=>[L]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u591A\u9009\u6846\u7EC4",class:"demo"},{default:d(()=>[l(r,{modelValue:o.checkList,"onUpdate:modelValue":t[3]||(t[3]=e=>o.checkList=e)},{default:d(()=>[l(c,{label:"\u590D\u9009\u6846 A"}),l(c,{label:"\u590D\u9009\u6846 B"}),l(c,{label:"\u590D\u9009\u6846 C"}),l(c,{label:"\u7981\u7528",disabled:""}),l(c,{label:"\u9009\u4E2D\u4E14\u7981\u7528",disabled:""})]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236",class:"demo"},{default:d(()=>[l(r,{modelValue:o.checkedCities,"onUpdate:modelValue":t[4]||(t[4]=e=>o.checkedCities=e),min:1,max:2},{default:d(()=>[(s(!0),a(i,null,_(o.cities,e=>(s(),p(c,{key:e,label:e},{default:d(()=>[u(k(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u6309\u94AE\u6837\u5F0F",class:"demo"},{default:d(()=>[l(r,{modelValue:o.checkboxGroup1,"onUpdate:modelValue":t[5]||(t[5]=e=>o.checkboxGroup1=e)},{default:d(()=>[(s(!0),a(i,null,_(o.cities,e=>(s(),p(V,{key:e,label:e},{default:d(()=>[u(k(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(n,{title:"\u5E26\u6709\u8FB9\u6846",class:"demo"},{default:d(()=>[l(c,{modelValue:o.checked3,"onUpdate:modelValue":t[6]||(t[6]=e=>o.checked3=e),label:"\u5907\u9009\u98791",border:""},null,8,["modelValue"]),l(c,{modelValue:o.checked4,"onUpdate:modelValue":t[7]||(t[7]=e=>o.checked4=e),label:"\u5907\u9009\u98792",border:""},null,8,["modelValue"])]),_:1})])}var W=U(A,[["render",v]]);export{W as default};
