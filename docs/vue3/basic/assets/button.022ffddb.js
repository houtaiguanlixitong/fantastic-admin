
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,e as a,f as t,j as i,n as d,Z as n,q as u,g as s,a2 as p,a3 as r,a4 as f,a5 as o,a6 as c,a7 as y,a8 as _,a9 as m,b as g,y as b,$ as w}from"./index.9be238e7.js";import x from"./alert.d2629505.js";const z=b("默认按钮"),v=b("主要按钮"),h=b("成功按钮"),j=b("信息按钮"),q=b("警告按钮"),I=b("危险按钮"),Z=b("朴素按钮"),$=b("主要按钮"),k=b("成功按钮"),A=b("信息按钮"),B=b("警告按钮"),C=b("危险按钮"),D=b("圆角按钮"),E=b("主要按钮"),F=b("成功按钮"),G=b("信息按钮"),H=b("警告按钮"),J=b("危险按钮"),K=b("默认按钮"),L=b("主要按钮"),M=b("成功按钮"),N=b("信息按钮"),O=b("警告按钮"),P=b("危险按钮"),Q=b("朴素按钮"),R=b("主要按钮"),S=b("成功按钮"),T=b("信息按钮"),U=b("警告按钮"),V=b("危险按钮"),W=b("文字按钮"),X=b("文字按钮"),Y=b("搜索"),ee=b(" 上传 "),le=b("上一页"),ae=b("下一页"),te=b("加载中"),ie={style:{"margin-bottom":"10px"}},de=b("大号按钮"),ne=b("默认按钮"),ue=b("小号按钮"),se=b("大号按钮"),pe=b("默认按钮"),re=b("小号按钮"),fe={setup:e=>(e,i)=>{const b=w,fe=d("el-button"),oe=d("el-row"),ce=n,ye=d("el-icon-upload"),_e=d("el-icon"),me=d("el-icon-arrow-right"),ge=d("el-button-group");return u(),l("div",null,[a(x),a(b,{title:"按钮"}),a(ce,{title:"基础用法",class:"demo"},{default:t((()=>[a(oe,null,{default:t((()=>[a(fe,null,{default:t((()=>[z])),_:1}),a(fe,{type:"primary"},{default:t((()=>[v])),_:1}),a(fe,{type:"success"},{default:t((()=>[h])),_:1}),a(fe,{type:"info"},{default:t((()=>[j])),_:1}),a(fe,{type:"warning"},{default:t((()=>[q])),_:1}),a(fe,{type:"danger"},{default:t((()=>[I])),_:1})])),_:1}),a(oe,null,{default:t((()=>[a(fe,{plain:""},{default:t((()=>[Z])),_:1}),a(fe,{type:"primary",plain:""},{default:t((()=>[$])),_:1}),a(fe,{type:"success",plain:""},{default:t((()=>[k])),_:1}),a(fe,{type:"info",plain:""},{default:t((()=>[A])),_:1}),a(fe,{type:"warning",plain:""},{default:t((()=>[B])),_:1}),a(fe,{type:"danger",plain:""},{default:t((()=>[C])),_:1})])),_:1}),a(oe,null,{default:t((()=>[a(fe,{round:""},{default:t((()=>[D])),_:1}),a(fe,{type:"primary",round:""},{default:t((()=>[E])),_:1}),a(fe,{type:"success",round:""},{default:t((()=>[F])),_:1}),a(fe,{type:"info",round:""},{default:t((()=>[G])),_:1}),a(fe,{type:"warning",round:""},{default:t((()=>[H])),_:1}),a(fe,{type:"danger",round:""},{default:t((()=>[J])),_:1})])),_:1}),a(oe,null,{default:t((()=>[a(fe,{icon:s(p),circle:""},null,8,["icon"]),a(fe,{type:"primary",icon:s(r),circle:""},null,8,["icon"]),a(fe,{type:"success",icon:s(f),circle:""},null,8,["icon"]),a(fe,{type:"info",icon:s(o),circle:""},null,8,["icon"]),a(fe,{type:"warning",icon:s(c),circle:""},null,8,["icon"]),a(fe,{type:"danger",icon:s(y),circle:""},null,8,["icon"])])),_:1})])),_:1}),a(ce,{title:"禁用状态",class:"demo"},{default:t((()=>[a(oe,null,{default:t((()=>[a(fe,{disabled:""},{default:t((()=>[K])),_:1}),a(fe,{type:"primary",disabled:""},{default:t((()=>[L])),_:1}),a(fe,{type:"success",disabled:""},{default:t((()=>[M])),_:1}),a(fe,{type:"info",disabled:""},{default:t((()=>[N])),_:1}),a(fe,{type:"warning",disabled:""},{default:t((()=>[O])),_:1}),a(fe,{type:"danger",disabled:""},{default:t((()=>[P])),_:1})])),_:1}),a(oe,null,{default:t((()=>[a(fe,{plain:"",disabled:""},{default:t((()=>[Q])),_:1}),a(fe,{type:"primary",plain:"",disabled:""},{default:t((()=>[R])),_:1}),a(fe,{type:"success",plain:"",disabled:""},{default:t((()=>[S])),_:1}),a(fe,{type:"info",plain:"",disabled:""},{default:t((()=>[T])),_:1}),a(fe,{type:"warning",plain:"",disabled:""},{default:t((()=>[U])),_:1}),a(fe,{type:"danger",plain:"",disabled:""},{default:t((()=>[V])),_:1})])),_:1})])),_:1}),a(ce,{title:"文字按钮",class:"demo"},{default:t((()=>[a(fe,{type:"text"},{default:t((()=>[W])),_:1}),a(fe,{type:"text",disabled:""},{default:t((()=>[X])),_:1})])),_:1}),a(ce,{title:"图标按钮",class:"demo"},{default:t((()=>[a(fe,{type:"primary",icon:s(r)},null,8,["icon"]),a(fe,{type:"primary",icon:s(_)},null,8,["icon"]),a(fe,{type:"primary",icon:s(y)},null,8,["icon"]),a(fe,{type:"primary",icon:s(p)},{default:t((()=>[Y])),_:1},8,["icon"]),a(fe,{type:"primary"},{default:t((()=>[ee,a(_e,{class:"el-icon--right"},{default:t((()=>[a(ye)])),_:1})])),_:1})])),_:1}),a(ce,{title:"按钮组",class:"demo"},{default:t((()=>[a(ge,{style:{"margin-right":"10px"}},{default:t((()=>[a(fe,{type:"primary",icon:s(m)},{default:t((()=>[le])),_:1},8,["icon"]),a(fe,{type:"primary"},{default:t((()=>[ae,a(_e,{class:"el-icon--right"},{default:t((()=>[a(me)])),_:1})])),_:1})])),_:1}),a(ge,null,{default:t((()=>[a(fe,{type:"primary",icon:s(r)},null,8,["icon"]),a(fe,{type:"primary",icon:s(_)},null,8,["icon"]),a(fe,{type:"primary",icon:s(y)},null,8,["icon"])])),_:1})])),_:1}),a(ce,{title:"加载中",class:"demo"},{default:t((()=>[a(fe,{type:"primary",loading:!0},{default:t((()=>[te])),_:1})])),_:1}),a(ce,{title:"不同尺寸",class:"demo"},{default:t((()=>[g("div",ie,[a(fe,{size:"large"},{default:t((()=>[de])),_:1}),a(fe,{size:"default"},{default:t((()=>[ne])),_:1}),a(fe,{size:"small"},{default:t((()=>[ue])),_:1})]),g("div",null,[a(fe,{size:"large",round:""},{default:t((()=>[se])),_:1}),a(fe,{size:"default",round:""},{default:t((()=>[pe])),_:1}),a(fe,{size:"small",round:""},{default:t((()=>[re])),_:1})])])),_:1})])}};"function"==typeof i&&i(fe);var oe=e(fe,[["__scopeId","data-v-06c75f17"]]);export{oe as default};