
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as u,b as h,m as y,n as v}from"./index.62acde6f.js";import{g as C,l as r,o as l,A as d,w as t,y as b,t as c,i,j as x,x as k,h as S,q as e}from"./vendor.ee7254f0.js";const w={class:"num"},N={class:"tip"},B=C({name:"ColorfulCard"}),V=Object.assign(B,{props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(o){return(f,_)=>{const n=h,a=r("el-card");return l(),d(a,{shadow:"hover",class:"mini-card",style:k({background:`linear-gradient(50deg, ${o.colorFrom}, ${o.colorTo})`})},{header:t(()=>[b(c(o.header),1)]),default:t(()=>[i("div",w,c(o.num),1),i("div",N,c(o.tip),1),o.icon?(l(),d(n,{key:0,name:o.icon,rotate:20},null,8,["name"])):x("v-if",!0)]),_:1},8,["style"])}}});var $=u(V,[["__scopeId","data-v-7079d789"]]),s={};const m={};function T(o,f){const _=v,n=$,a=r("el-col"),p=r("el-row"),g=y;return l(),S("div",null,[e(_,{title:"\u591A\u5F69\u6E10\u53D8\u5361\u7247",content:"ColorfulCard"}),e(g,null,{default:t(()=>[e(p,{gutter:20},{default:t(()=>[e(a,{md:6},{default:t(()=>[e(n,{header:"\u5F00\u53D1\u6587\u6863",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%"})]),_:1}),e(a,{md:6},{default:t(()=>[e(n,{"color-from":"#fbaaa2","color-to":"#fc5286",header:"\u57FA\u7840\u7EC4\u4EF6",num:12323,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"sidebar-element"})]),_:1}),e(a,{md:6},{default:t(()=>[e(n,{"color-from":"#ff763b","color-to":"#ffc480",header:"\u6269\u5C55\u7EC4\u4EF6",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"ri-pages-line"})]),_:1}),e(a,{md:6},{default:t(()=>[e(n,{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"\u4E1A\u52A1\u5E94\u7528\u9875\u9762",num:123,tip:"\u8F83\u4E0A\u5468\u4E0A\u534750%",icon:"el-icon-link"})]),_:1})]),_:1})]),_:1})])}typeof s=="function"&&s(m);var q=u(m,[["render",T]]);export{q as default};
