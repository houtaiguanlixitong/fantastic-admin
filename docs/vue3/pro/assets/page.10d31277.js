
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as a,M as l,r as t,ae as s,c as n,b as c,w as d,j as o,m as u,n as i,ac as m,q as p,e as v,z as r,ad as f}from"./index.992324c5.js";const k={class:"block"},x={class:"block"},b={class:"block"},h=r("进入同级路由页面"),A=r("进入下级路由页面"),V=a({name:"KeepAliveExamplePage"}),_=Object.assign(V,{setup(e){const a=u(),o=l(),r=t(!1),V=t(1);function _(e){let l;switch(e){case 1:l="keepAliveExampleDetail";break;case 2:l="keepAliveExampleNestedDetail"}a.push({name:l})}return s(((e,a)=>{const l=a.matched[e.matched.length-1].components.default.name;r.value&&["keepAliveExampleDetail","keepAliveExampleNestedDetail"].includes(e.name)?o.add(l):o.remove(l)})),(e,a)=>{const l=f,t=i("el-switch"),s=i("el-input-number"),o=i("el-button"),u=m;return p(),n("div",null,[c(l,{title:"页面缓存",content:"除了可以在路由里配置页面是否需要缓存外，你也可以不使用框架提供的方法，而是在页面里自行实现，该方法目前仅支持在 Options API 中实现。"}),c(u,null,{default:d((()=>[v("div",k,[c(t,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),"active-text":"开启缓存","inactive-text":"关闭缓存"},null,8,["modelValue"])]),v("div",x,[c(s,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e)},null,8,["modelValue"])]),v("div",b,[c(o,{onClick:a[2]||(a[2]=e=>_(1))},{default:d((()=>[h])),_:1}),c(o,{onClick:a[3]||(a[3]=e=>_(2))},{default:d((()=>[A])),_:1})])])),_:1})])}}});"function"==typeof o&&o(_);var E=e(_,[["__scopeId","data-v-675c6adf"]]);export{E as default};