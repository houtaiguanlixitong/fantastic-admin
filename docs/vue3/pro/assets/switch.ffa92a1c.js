
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,b as a,w as t,j as u,n as o,ac as d,q as s,ad as n}from"./index.992324c5.js";import i from"./alert.9821d680.js";const m={components:{Alert:i},data:()=>({value:!0,value1:!0,value2:!0,value3:!1})};"function"==typeof u&&u(m);var c=e(m,[["render",function(e,u,i,m,c,v){const r=o("Alert"),V=n,f=o("el-switch"),p=d;return s(),l("div",null,[a(r),a(V,{title:"开关"}),a(p,{title:"基础用法",class:"demo"},{default:t((()=>[a(f,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=e=>c.value=e),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])])),_:1}),a(p,{title:"文字描述",class:"demo"},{default:t((()=>[a(f,{modelValue:c.value1,"onUpdate:modelValue":u[1]||(u[1]=e=>c.value1=e),"active-text":"按月付费","inactive-text":"按年付费"},null,8,["modelValue"])])),_:1}),a(p,{title:"禁用状态",class:"demo"},{default:t((()=>[a(f,{modelValue:c.value2,"onUpdate:modelValue":u[2]||(u[2]=e=>c.value2=e),disabled:"",style:{"margin-right":"10px"}},null,8,["modelValue"]),a(f,{modelValue:c.value3,"onUpdate:modelValue":u[3]||(u[3]=e=>c.value3=e),disabled:""},null,8,["modelValue"])])),_:1})])}]]);export{c as default};