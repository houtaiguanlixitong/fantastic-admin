
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.d2f8acf6.js";import{_ as a}from"./index.2247f9f8.js";import{i as l,j as o,o as t,k as s,s as r,O as n,P as u,g as d,e as i,u as c,b as p,l as m,y as f,z as g,Q as v,R as y,r as _,f as w,t as x,S as b,T as h,v as V,U as k,V as C}from"./vendor.9748e354.js";import{_ as z,u as P,a as U,b as j}from"./index.d5f01412.js";const q=e=>(f("data-v-915ce182"),e=e(),g(),e),S=q((()=>r("div",{class:"bg-banner"},null,-1))),F={id:"login-box"},R=q((()=>r("div",{class:"login-banner"},null,-1))),$={class:"title-container"},I={class:"title"},K={class:"flex-bar"},O=V("记住我"),L=V("忘记密码"),Q=V("登 录"),T={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},A=q((()=>r("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1))),B=V("admin"),D=V("test"),E=q((()=>r("div",{class:"title-container"},[r("h3",{class:"title"},"重置密码")],-1))),G=V("发送验证码"),H=V("去登录"),J=V("确 认"),M=l({name:"Login"}),N=Object.assign(M,{setup(l){const{proxy:f}=C(),g=v(),V=y(),z=P(),j=U(),q=o("login"),M=o({account:localStorage.login_account||"",password:"",remember:!!localStorage.login_account}),N=o({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),W=o({account:localStorage.login_account||"",captcha:"",newPassword:""}),X=o({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),Y=o(!1),Z=o("password"),ee=o(null);function ae(){Z.value="password"===Z.value?"":"password",k((()=>{f.$refs.password.focus()}))}function le(){f.$refs.loginFormRef.validate((e=>{e&&(Y.value=!0,j.login(M.value).then((()=>{Y.value=!1,M.value.remember?localStorage.setItem("login_account",M.value.account):localStorage.removeItem("login_account"),V.push(ee.value)})).catch((()=>{Y.value=!1})))}))}function oe(){f.$message({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),f.$refs.resetFormRef.validate((e=>{}))}function te(e){M.value.account=e,M.value.password="123456",le()}return t((()=>{var e;ee.value=null!=(e=g.query.redirect)?e:"/"})),(l,o)=>{const t=a,f=_("el-input"),g=_("el-form-item"),v=_("el-checkbox"),y=_("el-button"),V=_("el-form"),k=_("el-col"),C=_("el-row"),P=e;return w(),s("div",null,[S,r("div",F,[R,n(d(V,{ref:"loginFormRef",model:M.value,rules:N.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:i((()=>[r("div",$,[r("h3",I,x(c("Fantastic-admin 基础版"))+"管理后台",1)]),r("div",null,[d(g,{prop:"account"},{default:i((()=>[d(f,{ref:"name",modelValue:M.value.account,"onUpdate:modelValue":o[0]||(o[0]=e=>M.value.account=e),placeholder:"用户名",type:"text",tabindex:"1",autocomplete:"on"},{prefix:i((()=>[d(t,{name:"user"})])),_:1},8,["modelValue"])])),_:1}),d(g,{prop:"password"},{default:i((()=>[d(f,{ref:"password",modelValue:M.value.password,"onUpdate:modelValue":o[1]||(o[1]=e=>M.value.password=e),type:Z.value,placeholder:"密码",tabindex:"2",autocomplete:"on",onKeyup:b(le,["enter"])},{prefix:i((()=>[d(t,{name:"password"})])),suffix:i((()=>[d(t,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type","onKeyup"])])),_:1})]),r("div",K,[d(v,{modelValue:M.value.remember,"onUpdate:modelValue":o[2]||(o[2]=e=>M.value.remember=e)},{default:i((()=>[O])),_:1},8,["modelValue"]),d(y,{type:"text",onClick:o[3]||(o[3]=e=>q.value="reset")},{default:i((()=>[L])),_:1})]),d(y,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:h(le,["prevent"])},{default:i((()=>[Q])),_:1},8,["loading","onClick"]),r("div",T,[A,d(y,{type:"danger",size:"small",onClick:o[4]||(o[4]=e=>te("admin"))},{default:i((()=>[B])),_:1}),d(y,{type:"danger",size:"small",plain:"",onClick:o[5]||(o[5]=e=>te("test"))},{default:i((()=>[D])),_:1})])])),_:1},8,["model","rules"]),[[u,"login"==q.value]]),n(d(V,{ref:"resetFormRef",model:W.value,rules:X.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:i((()=>[E,r("div",null,[d(g,{prop:"account"},{default:i((()=>[d(f,{ref:"name",modelValue:W.value.account,"onUpdate:modelValue":o[6]||(o[6]=e=>W.value.account=e),placeholder:"用户名",type:"text",tabindex:"1",autocomplete:"on"},{prefix:i((()=>[d(t,{name:"user"})])),_:1},8,["modelValue"])])),_:1}),d(g,{prop:"captcha"},{default:i((()=>[d(f,{ref:"captcha",modelValue:W.value.captcha,"onUpdate:modelValue":o[7]||(o[7]=e=>W.value.captcha=e),placeholder:"验证码",type:"text",tabindex:"2",autocomplete:"on"},{prefix:i((()=>[d(t,{name:"captcha"})])),append:i((()=>[d(y,null,{default:i((()=>[G])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(g,{prop:"newPassword"},{default:i((()=>[d(f,{ref:"newPassword",modelValue:W.value.newPassword,"onUpdate:modelValue":o[8]||(o[8]=e=>W.value.newPassword=e),type:Z.value,placeholder:"新密码",tabindex:"3",autocomplete:"on"},{prefix:i((()=>[d(t,{name:"password"})])),suffix:i((()=>[d(t,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type"])])),_:1})]),d(C,{gutter:15,style:{"padding-top":"20px"}},{default:i((()=>[d(k,{md:6},{default:i((()=>[d(y,{size:"large",style:{width:"100%"},onClick:o[9]||(o[9]=e=>q.value="login")},{default:i((()=>[H])),_:1})])),_:1}),d(k,{md:18},{default:i((()=>[d(y,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:h(oe,["prevent"])},{default:i((()=>[J])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[u,"reset"==q.value]])]),c(z).copyright.enable?(w(),p(P,{key:0})):m("v-if",!0)])}}});"function"==typeof j&&j(N);var W=z(N,[["__scopeId","data-v-915ce182"]]);export{W as default};
