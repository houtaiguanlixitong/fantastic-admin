
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var $=Object.defineProperty,F=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))S.call(e,o)&&k(t,o,e[o]);if(V)for(var o of V(e))U.call(e,o)&&k(t,o,e[o]);return t},C=(t,e)=>F(t,I(e));import p from"./index.fa9e54a6.js";import{_ as q}from"./index.64e7900a.js";import{w as b,D as _,o as f,l as A,z as w,A as a,F as s,af as x,k as c,ag as z,m as D,q as E,$ as u,H}from"./vendor.bcd7a662.js";const M=u("\u53D6 \u6D88"),P=u("\u786E \u5B9A"),R={class:"buttons"},T=u("\u53D6 \u6D88"),j=u("\u786E \u5B9A"),G={props:C(v({},p.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:B}=H();let l=b({get:function(){return o.modelValue},set:function(n){e("update:modelValue",n)}});const g=b(()=>o.id==""?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458");function y(){B.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(n,d)=>{const i=_("el-button"),h=_("el-dialog"),N=_("el-drawer");return f(),A("div",null,[o.mode==="dialog"?(f(),w(h,{key:0,modelValue:c(l),"onUpdate:modelValue":d[0]||(d[0]=r=>z(l)?l.value=r:l=r),title:c(g),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[s(i,{size:"large",onClick:m},{default:a(()=>[M]),_:1}),s(i,{type:"primary",size:"large",onClick:y},{default:a(()=>[P]),_:1})]),default:a(()=>[s(p,x({ref:"form"},n.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(f(),w(N,{key:1,modelValue:c(l),"onUpdate:modelValue":d[1]||(d[1]=r=>z(l)?l.value=r:l=r),title:c(g),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[s(p,x({ref:"form"},n.$props,{class:"form-container"}),null,16),D("div",R,[s(i,{size:"large",onClick:m},{default:a(()=>[T]),_:1}),s(i,{type:"primary",size:"large",onClick:y},{default:a(()=>[j]),_:1})])]),_:1},8,["modelValue","title"])):E("v-if",!0)])}}};var Q=q(G,[["__scopeId","data-v-bc221ac0"]]);export{Q as default};
