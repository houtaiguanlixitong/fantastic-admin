
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,c as t,b as n,w as e,j as s,n as i,ac as u,q as l,z as o,t as m,g as c,e as r,ad as d,C as f}from"./index.80ead521.js";const p=r("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),x=r("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),g={setup(s){const{proxy:r}=f(),g=a();function z(){g.mainPageMaximizeStatus?r.$mainPageMaximize(!1):r.$mainPageMaximize(!0)}return(a,s)=>{const r=d,f=i("el-button"),M=u;return l(),t("div",null,[n(r,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(M,null,{default:e((()=>[p,x,n(f,{onClick:z},{default:e((()=>[o(m(c(g).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof s&&s(g);export{g as default};