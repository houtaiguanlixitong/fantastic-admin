
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,o,l)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[o]=l;import d from"./index.4aad6d11.js";import{_ as i,D as n,n as u,q as c,c as p,h as m,w as f,b as y,a9 as b,g,aa as v,e as w,i as V,z as O,C as _}from"./index.80ead521.js";const j=O("取 消"),k=O("确 定"),x={class:"buttons"},z=O("取 消"),C=O("确 定"),P={props:(h=((e,a)=>{for(var o in a||(a={}))t.call(a,o)&&s(e,o,a[o]);if(l)for(var o of l(a))r.call(a,o)&&s(e,o,a[o]);return e})({},d.props),$={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(h,o($))),emits:["update:modelValue","success"],setup(e,{emit:a}){const o=e,{proxy:l}=_();let t=n({get:function(){return o.modelValue},set:function(e){a("update:modelValue",e)}});const r=n((()=>""==o.id?"新增管理员":"编辑管理员"));function s(){l.$refs.form.submit((()=>{a("success"),i()}))}function i(){t.value=!1}return(e,a)=>{const l=u("el-button"),n=u("el-dialog"),O=u("el-drawer");return c(),p("div",null,["dialog"===o.mode?(c(),m(n,{key:0,modelValue:g(t),"onUpdate:modelValue":a[0]||(a[0]=e=>v(t)?t.value=e:t=e),title:g(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:f((()=>[y(l,{size:"large",onClick:i},{default:f((()=>[j])),_:1}),y(l,{type:"primary",size:"large",onClick:s},{default:f((()=>[k])),_:1})])),default:f((()=>[y(d,b({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===o.mode?(c(),m(O,{key:1,modelValue:g(t),"onUpdate:modelValue":a[1]||(a[1]=e=>v(t)?t.value=e:t=e),title:g(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:f((()=>[y(d,b({ref:"form"},e.$props,{class:"form-container"}),null,16),w("div",x,[y(l,{size:"large",onClick:i},{default:f((()=>[z])),_:1}),y(l,{type:"primary",size:"large",onClick:s},{default:f((()=>[C])),_:1})])])),_:1},8,["modelValue","title"])):V("v-if",!0)])}}};var h,$,D=i(P,[["__scopeId","data-v-bc221ac0"]]);export{D as default};