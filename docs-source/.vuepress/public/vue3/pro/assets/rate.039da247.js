
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d,m as c,n as i}from"./index.a1178b85.js";import f from"./alert.a0609b5a.js";import{h as v,q as e,w as u,l as s,o as V}from"./vendor.ee7254f0.js";var r={};const m={components:{Alert:f},data(){return{value1:null,value2:null,value3:3.7}}};function x(g,l,w,k,o,A){const p=s("Alert"),_=i,n=s("el-rate"),a=c;return V(),v("div",null,[e(p),e(_,{title:"\u8BC4\u5206"}),e(a,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value1,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value1=t)},null,8,["modelValue"])]),_:1}),e(a,{title:"\u8F85\u52A9\u6587\u5B57",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value2,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value2=t),"show-text":"",texts:["\u6781\u5DEE","\u5DEE","\u4E00\u822C","\u597D","\u6781\u597D"]},null,8,["modelValue"])]),_:1}),e(a,{title:"\u53EA\u8BFB",class:"demo"},{default:u(()=>[e(n,{modelValue:o.value3,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value3=t),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])]),_:1})])}typeof r=="function"&&r(m);var C=d(m,[["render",x]]);export{C as default};
