
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var e=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,a,t)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t;import d from"./index.06d56888.js";import{_ as i}from"./index.2c18650f.js";import{z as n,h as u,A as c,w as p,u as m,ak as f,j as y,l as b,o as v,q as g,aj as j,i as w,y as O,O as V}from"./vendor.9da56f98.js";import"./index.442bda72.js";import"./index.eb17c7b3.js";const k=O("取 消"),_=O("确 定"),x={class:"buttons"},z=O("取 消"),P=O("确 定"),C={props:(h=((e,o)=>{for(var a in o||(o={}))l.call(o,a)&&s(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&s(e,a,o[a]);return e})({},d.props),I={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},o(h,a(I))),emits:["update:modelValue","success"],setup(e,{emit:o}){const a=e,{proxy:t}=V();let l=n({get:function(){return a.modelValue},set:function(e){o("update:modelValue",e)}});const r=n((()=>""==a.id?"新增运费模板":"编辑运费模板"));function s(){t.$refs.form.submit((()=>{o("success"),i()}))}function i(){l.value=!1}return(e,o)=>{const t=b("el-button"),n=b("el-dialog"),O=b("el-drawer");return v(),u("div",null,["dialog"===a.mode?(v(),c(n,{key:0,modelValue:m(l),"onUpdate:modelValue":o[0]||(o[0]=e=>f(l)?l.value=e:l=e),title:m(r),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:p((()=>[g(t,{size:"large",onClick:i},{default:p((()=>[k])),_:1}),g(t,{type:"primary",size:"large",onClick:s},{default:p((()=>[_])),_:1})])),default:p((()=>[g(d,j({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===a.mode?(v(),c(O,{key:1,modelValue:m(l),"onUpdate:modelValue":o[1]||(o[1]=e=>f(l)?l.value=e:l=e),title:m(r),size:"800px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:p((()=>[g(d,j({ref:"form"},d.props,{class:"form-container"}),null,16),w("div",x,[g(t,{size:"large",onClick:i},{default:p((()=>[z])),_:1}),g(t,{type:"primary",size:"large",onClick:s},{default:p((()=>[P])),_:1})])])),_:1},8,["modelValue","title"])):y("v-if",!0)])}}};var h,I,S=i(C,[["__scopeId","data-v-77cfbe3e"]]);export{S as default};
