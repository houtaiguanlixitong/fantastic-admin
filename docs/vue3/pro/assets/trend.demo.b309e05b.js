
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as t,D as a,q as l,c as s,t as n,i as r,e as u,b as i,g as p,O as d,B as f,w as o,j as c,ad as v,n as y,ac as m}from"./index.80ead521.js";const x={key:0,class:"prefix"},g={class:"text"},_={key:1,class:"suffix"},w=e({name:"Trend"});var b=t(Object.assign(w,{props:{value:{type:String,required:!0},type:{type:String,validator:e=>["up","down"].includes(e),default:"up"},prefix:{type:String,default:""},suffix:{type:String,default:""},reverse:{type:Boolean,default:!1}},setup(e){const t=e,o=a((()=>{let e="up"===t.type;return t.reverse&&(e=!e),e}));return(t,a)=>{const c=f;return l(),s("div",{class:d("trend "+(p(o)?"up":"down"))},[e.prefix?(l(),s("span",x,n(e.prefix),1)):r("v-if",!0),u("span",g,n(e.value),1),e.suffix?(l(),s("span",_,n(e.suffix),1)):r("v-if",!0),i(c,{name:""+(p(o)?"el-icon-caret-top":"el-icon-caret-bottom")},null,8,["name"])],2)}}}),[["__scopeId","data-v-40bc29c3"]]);const S={},j=u("p",null,"Trend",-1),k=u("p",{style:{"margin-bottom":"0"}},"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外",-1);"function"==typeof c&&c(S);var q=t(S,[["render",function(e,t){const a=v,n=b,r=m,p=y("el-col"),d=y("el-row");return l(),s("div",null,[i(a,{title:"趋势符号"},{content:o((()=>[j,k])),_:1}),i(d,{gutter:20,style:{margin:"0 10px"}},{default:o((()=>[i(p,{md:8},{default:o((()=>[i(r,{title:"基础用法",style:{margin:"0"}},{default:o((()=>[u("p",null,[i(n,{value:"12.3"})]),u("p",null,[i(n,{value:"12.3",type:"down"})])])),_:1})])),_:1}),i(p,{md:8},{default:o((()=>[i(r,{title:"颜色反转",style:{margin:"0"}},{default:o((()=>[u("p",null,[i(n,{value:"12.3",reverse:""})]),u("p",null,[i(n,{value:"12.3",type:"down",reverse:""})])])),_:1})])),_:1}),i(p,{md:8},{default:o((()=>[i(r,{title:"前缀后缀",style:{margin:"0"}},{default:o((()=>[u("p",null,[i(n,{value:"12.3",prefix:"$"})]),u("p",null,[i(n,{value:"12.3",suffix:"%"})])])),_:1})])),_:1})])),_:1})])}]]);export{q as default};