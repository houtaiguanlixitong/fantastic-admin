
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var F=Object.defineProperty,D=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(t,o,e)=>o in t?F(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))S.call(o,e)&&k(t,e,o[e]);if(V)for(var e of V(o))U.call(o,e)&&k(t,e,o[e]);return t},x=(t,o)=>D(t,I(o));import i from"./index.0e430504.js";import{_ as q}from"./index.8f12b84b.js";import{w as C,l as A,z as w,A as a,k as c,ag as b,q as E,D as _,o as f,F as s,af as z,m as H,$ as u,H as M}from"./vendor.d1c84aa2.js";import"./index.0b7e7a76.js";import"./index.b43bdef4.js";const P=u("\u53D6 \u6D88"),R=u("\u786E \u5B9A"),T={class:"buttons"},$=u("\u53D6 \u6D88"),j=u("\u786E \u5B9A"),G={props:x(v({},i.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:o}){const e=t,{proxy:B}=M();console.log(e);let l=C({get:function(){return e.modelValue},set:function(p){o("update:modelValue",p)}});const g=C(()=>e.id==""?"\u65B0\u589E\u8FD0\u8D39\u6A21\u677F":"\u7F16\u8F91\u8FD0\u8D39\u6A21\u677F");function y(){B.$refs.form.submit(()=>{o("success"),m()})}function m(){l.value=!1}return(p,n)=>{const d=_("el-button"),h=_("el-dialog"),N=_("el-drawer");return f(),A("div",null,[e.mode==="dialog"?(f(),w(h,{key:0,modelValue:c(l),"onUpdate:modelValue":n[0]||(n[0]=r=>b(l)?l.value=r:l=r),title:c(g),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[s(d,{size:"large",onClick:m},{default:a(()=>[P]),_:1}),s(d,{type:"primary",size:"large",onClick:y},{default:a(()=>[R]),_:1})]),default:a(()=>[s(i,z({ref:"form"},p.$props),null,16)]),_:1},8,["modelValue","title"])):e.mode==="drawer"?(f(),w(N,{key:1,modelValue:c(l),"onUpdate:modelValue":n[1]||(n[1]=r=>b(l)?l.value=r:l=r),title:c(g),size:"800px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[s(i,z({ref:"form"},i.props,{class:"form-container"}),null,16),H("div",T,[s(d,{size:"large",onClick:m},{default:a(()=>[$]),_:1}),s(d,{type:"primary",size:"large",onClick:y},{default:a(()=>[j]),_:1})])]),_:1},8,["modelValue","title"])):E("v-if",!0)])}}};var X=q(G,[["__scopeId","data-v-4cf53717"]]);export{X as default};