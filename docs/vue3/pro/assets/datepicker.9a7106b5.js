
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as l,n as a,o as t}from"./index.2c18650f.js";import d from"./alert.93d55ba6.js";import{h as u,q as o,w as n,l as r,o as s,i as m}from"./vendor.9da56f98.js";const v={components:{Alert:d},data:()=>({disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:"今天",value:new Date},{text:"昨天",value:(()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e})()},{text:"一周前",value:(()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e})()}],value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:""})},p=m("div",null,"默认",-1),i=m("div",null,"带快捷选项",-1),c=m("div",null,"周",-1),V=m("div",null,"月",-1),h=m("div",null,"年",-1),f=m("div",null,"多个日期",-1);"function"==typeof l&&l(v);var g=e(v,[["render",function(e,l,d,m,v,g){const y=r("Alert"),w=t,U=r("el-date-picker"),b=a;return s(),u("div",null,[o(y),o(w,{title:"日期选择器"}),o(b,{title:"选择日",class:"demo"},{default:n((()=>[p,o(U,{modelValue:v.value1,"onUpdate:modelValue":l[0]||(l[0]=e=>v.value1=e),type:"date",placeholder:"选择日期"},null,8,["modelValue"]),i,o(U,{modelValue:v.value2,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value2=e),align:"right",type:"date",placeholder:"选择日期","disabled-date":v.disabledDate,shortcuts:v.shortcuts},null,8,["modelValue","disabled-date","shortcuts"])])),_:1}),o(b,{title:"其他日期单位",class:"demo"},{default:n((()=>[c,o(U,{modelValue:v.value3,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value3=e),type:"week",format:"gggg 第 ww 周",placeholder:"选择周"},null,8,["modelValue"]),V,o(U,{modelValue:v.value4,"onUpdate:modelValue":l[3]||(l[3]=e=>v.value4=e),type:"month",placeholder:"选择月"},null,8,["modelValue"]),h,o(U,{modelValue:v.value5,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value5=e),type:"year",placeholder:"选择年"},null,8,["modelValue"]),f,o(U,{modelValue:v.value6,"onUpdate:modelValue":l[5]||(l[5]=e=>v.value6=e),type:"dates",placeholder:"选择一个或多个日期"},null,8,["modelValue"])])),_:1}),o(b,{title:"选择日期范围",class:"demo"},{default:n((()=>[o(U,{modelValue:v.value7,"onUpdate:modelValue":l[6]||(l[6]=e=>v.value7=e),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),o(b,{title:"选择月份范围",class:"demo"},{default:n((()=>[o(U,{modelValue:v.value8,"onUpdate:modelValue":l[7]||(l[7]=e=>v.value8=e),type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},null,8,["modelValue"])])),_:1})])}]]);export{g as default};
