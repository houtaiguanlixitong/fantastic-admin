
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{u as a,c as t,b as n,w as s,j as e,n as i,ac as u,q as l,z as o,t as c,g as m,e as r,ad as f,C as p}from"./index.992324c5.js";const x=r("p",null,"可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),d=r("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1),g={setup(e){const{proxy:r}=p(),g=a();function z(){g.mainPageMaximizeStatus?r.$mainPageMaximize(!1):r.$mainPageMaximize(!0)}return(a,e)=>{const r=f,p=i("el-button"),M=u;return l(),t("div",null,[n(r,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),n(M,null,{default:s((()=>[x,d,n(p,{onClick:z},{default:s((()=>[o(c(m(g).mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1})])),_:1})])}}};"function"==typeof e&&e(g);export{g as default};