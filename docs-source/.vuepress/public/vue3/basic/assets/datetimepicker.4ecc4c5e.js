
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as a,h as l,j as t}from"./index.d5f01412.js";import d from"./alert.03a4f071.js";import{k as o,g as u,e as r,r as n,f as s,s as m}from"./vendor.9748e354.js";const i={components:{Alert:d},data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},p=m("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);"function"==typeof a&&a(i);var f=e(i,[["render",function(e,a,d,m,i,f){const c=n("Alert"),v=t,V=n("el-date-picker"),h=l;return s(),o("div",null,[u(c),u(v,{title:"日期时间选择器"}),u(h,{title:"日期和时间点",class:"demo"},{default:r((()=>[u(V,{modelValue:i.value1,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),u(h,{title:"日期和时间范围",class:"demo"},{default:r((()=>[u(V,{modelValue:i.value2,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),u(h,{title:"默认的起始与结束时刻",class:"demo"},{default:r((()=>[p,u(V,{modelValue:i.value3,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{f as default};
