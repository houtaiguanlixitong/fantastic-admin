
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as v}from"./index.9ed489d8.js";import{_ as V}from"./index.abc7a202.js";import _ from"./alert.1ed1e915.js";import{_ as f}from"./index.64e7900a.js";import{l as U,F as t,A as a,D as d,o as g,m as n}from"./vendor.bcd7a662.js";const x={components:{Alert:_},data(){return{value1:0,value2:50,value3:36,value4:48,value5:42,value6:0,value7:0,value8:[4,8],value9:0}},methods:{formatTooltip(m){return m/100}}},w=n("span",{class:"demonstration"},"\u9ED8\u8BA4",-1),c=n("span",{class:"demonstration"},"\u81EA\u5B9A\u4E49\u521D\u59CB\u503C",-1),A=n("span",{class:"demonstration"},"\u9690\u85CF Tooltip",-1),T=n("span",{class:"demonstration"},"\u683C\u5F0F\u5316 Tooltip",-1),B=n("span",{class:"demonstration"},"\u7981\u7528",-1),k=n("span",{class:"demonstration"},"\u4E0D\u663E\u793A\u95F4\u65AD\u70B9",-1),C=n("span",{class:"demonstration"},"\u663E\u793A\u95F4\u65AD\u70B9",-1);function N(m,e,b,D,l,p){const r=d("Alert"),i=V,s=d("el-slider"),u=v;return g(),U("div",null,[t(r),t(i,{title:"\u6ED1\u5757"}),t(u,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:a(()=>[w,t(s,{modelValue:l.value1,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value1=o)},null,8,["modelValue"]),c,t(s,{modelValue:l.value2,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value2=o)},null,8,["modelValue"]),A,t(s,{modelValue:l.value3,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value3=o),"show-tooltip":!1},null,8,["modelValue"]),T,t(s,{modelValue:l.value4,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value4=o),"format-tooltip":p.formatTooltip},null,8,["modelValue","format-tooltip"]),B,t(s,{modelValue:l.value5,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value5=o),disabled:""},null,8,["modelValue"])]),_:1}),t(u,{title:"\u79BB\u6563\u503C",class:"demo"},{default:a(()=>[k,t(s,{modelValue:l.value6,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value6=o),step:10},null,8,["modelValue"]),C,t(s,{modelValue:l.value6,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value6=o),step:10,"show-stops":""},null,8,["modelValue"])]),_:1}),t(u,{title:"\u5E26\u6709\u8F93\u5165\u6846",class:"demo"},{default:a(()=>[t(s,{modelValue:l.value7,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value7=o),"show-input":""},null,8,["modelValue"])]),_:1}),t(u,{title:"\u8303\u56F4\u9009\u62E9",class:"demo"},{default:a(()=>[t(s,{modelValue:l.value8,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value8=o),range:"","show-stops":"",max:10},null,8,["modelValue"])]),_:1}),t(u,{title:"\u7AD6\u5411\u6A21\u5F0F",class:"demo"},{default:a(()=>[t(s,{modelValue:l.value9,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value9=o),vertical:"",height:"200px"},null,8,["modelValue"])]),_:1})])}var z=f(x,[["render",N]]);export{z as default};
