
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as t,_ as e,B as i,n as s,q as r,h as a,f as n,b as o,e as d,D as c,g as l,c as g,j as h,Z as p,$ as u}from"./index.b6307f63.js";import{_ as f}from"./index.ef647e37.js";const m={class:"image-slot"},w=t({name:"ImagePreview"});var v=e(Object.assign(w,{props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,g=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),h=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const p=f,u=s("el-image");return r(),a(u,{src:t.src,fit:"cover",style:c(`width:${l(g)};height:${l(h)};`),"preview-src-list":[t.src]},{error:n((()=>[o("div",m,[d(p,{name:"image-load-fail"})])])),_:1},8,["src","style","preview-src-list"])}}}),[["__scopeId","data-v-d280b3d2"]]);const y={props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}};"function"==typeof h&&h(y);var b=e(y,[["render",function(t,e,i,s,a,c){const l=u,h=v,f=p;return r(),g("div",null,[d(l,{title:"图片预览",content:"ImagePreview"}),d(f,null,{default:n((()=>[o("div",null,[d(h,{src:`https://hooray.${c.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),d(f,{title:"图片加载失败时"},{default:n((()=>[o("div",null,[d(h,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}]]);export{b as default};
