
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{a as o,b as t,j as n,h as e}from"./index.d5f01412.js";import{k as s,g as a,e as i,r,f as l,v as c,V as u}from"./vendor.9748e354.js";const f=c("Mock.js 官网"),d=c("测试：获取用户权限"),p={setup(t){const{proxy:c}=u(),p=o();function m(){p.getPermissions().then((o=>{c.$notify({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:o.map((o=>`<p>${o}</p>`)).join("")})}))}return(o,t)=>{const c=r("el-button"),u=n,p=e;return l(),s("div",null,[a(u,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:i((()=>[a(c,{icon:"el-icon-link",onClick:t[0]||(t[0]=o=>{return t="http://mockjs.com/",void window.open(t,"top");var t})},{default:i((()=>[f])),_:1})])),_:1}),a(p,null,{default:i((()=>[a(c,{onClick:m},{default:i((()=>[d])),_:1})])),_:1})])}}};"function"==typeof t&&t(p);export{p as default};
