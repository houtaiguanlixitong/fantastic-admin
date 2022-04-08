
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.a2c1a6dd.js";import{_ as a,d as l,u as o,a as t,r as s,s as n,o as r,c as u,b as d,w as c,e as p,f as i,v as m,g as f,h as g,i as v,j as w,p as b,k as h,l as _,m as x,n as y,q as V,t as k,x as $,y as C,z as q,A as z,B as P,C as U}from"./index.992324c5.js";import{_ as j}from"./index.ab9e2bc0.js";const F=e=>(b("data-v-78fb50aa"),e=e(),h(),e),R=F((()=>p("div",{class:"bg-banner"},null,-1))),K=F((()=>p("i",{class:"ri-translate"},null,-1))),L={id:"login-box"},A=F((()=>p("div",{class:"login-banner"},null,-1))),B={class:"title-container"},I={class:"title"},O={class:"flex-bar"},D=q("记住我"),E=q("忘记密码"),G={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},H=F((()=>p("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1))),J=q("admin"),M=q("test"),N=F((()=>p("div",{class:"title-container"},[p("h3",{class:"title"},"重置密码")],-1))),Q=l({name:"Login"}),S=Object.assign(Q,{setup(a){const{proxy:l}=U(),w=_(),b=x(),h=o(),F=t(),Q=s("login"),S=s({account:n.local.get("login_account"),password:"",remember:n.local.has("login_account")}),T=s({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),W=s({account:n.local.get("login_account"),captcha:"",newPassword:""}),X=s({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),Y=s(!1),Z=s("password"),ee=s(null);function ae(){Z.value="password"===Z.value?"":"password",z((()=>{l.$refs.password.focus()}))}function le(){l.$refs.loginFormRef.validate((e=>{e&&(Y.value=!0,F.login(S.value).then((()=>{Y.value=!1,S.value.remember?n.local.set("login_account",S.value.account):n.local.remove("login_account"),b.push(ee.value)})).catch((()=>{Y.value=!1})))}))}function oe(){l.$message({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),l.$refs.resetFormRef.validate((e=>{}))}function te(e){S.value.account=e,S.value.password="123456",le()}return r((()=>{var e;ee.value=null!=(e=w.query.redirect)?e:"/"})),(a,l)=>{const o=j,t=P,s=y("el-input"),n=y("el-form-item"),r=y("el-checkbox"),w=y("el-button"),b=y("el-form"),_=y("el-col"),x=y("el-row"),z=e;return V(),u("div",null,[R,d(o,{class:"i18n-selector"},{default:c((()=>[K])),_:1}),p("div",L,[A,i(d(b,{ref:"loginFormRef",model:S.value,rules:T.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:c((()=>[p("div",B,[p("h3",I,k(f("Fantastic-admin 专业版"))+"管理后台",1)]),p("div",null,[d(n,{prop:"account"},{default:c((()=>[d(s,{ref:"name",modelValue:S.value.account,"onUpdate:modelValue":l[0]||(l[0]=e=>S.value.account=e),placeholder:a.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[d(t,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(n,{prop:"password"},{default:c((()=>[d(s,{ref:"password",modelValue:S.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>S.value.password=e),type:Z.value,placeholder:a.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:$(le,["enter"])},{prefix:c((()=>[d(t,{name:"password"})])),suffix:c((()=>[d(t,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type","placeholder","onKeyup"])])),_:1})]),p("div",O,[d(r,{modelValue:S.value.remember,"onUpdate:modelValue":l[2]||(l[2]=e=>S.value.remember=e)},{default:c((()=>[D])),_:1},8,["modelValue"]),d(w,{type:"text",onClick:l[3]||(l[3]=e=>Q.value="reset")},{default:c((()=>[E])),_:1})]),d(w,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:C(le,["prevent"])},{default:c((()=>[q(k(a.$t("app.login")),1)])),_:1},8,["loading","onClick"]),p("div",G,[H,d(w,{type:"danger",size:"small",onClick:l[4]||(l[4]=e=>te("admin"))},{default:c((()=>[J])),_:1}),d(w,{type:"danger",size:"small",plain:"",onClick:l[5]||(l[5]=e=>te("test"))},{default:c((()=>[M])),_:1})])])),_:1},8,["model","rules"]),[[m,"login"==Q.value]]),i(d(b,{ref:"resetFormRef",model:W.value,rules:X.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:c((()=>[N,p("div",null,[d(n,{prop:"account"},{default:c((()=>[d(s,{ref:"name",modelValue:W.value.account,"onUpdate:modelValue":l[6]||(l[6]=e=>W.value.account=e),placeholder:a.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[d(t,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(n,{prop:"captcha"},{default:c((()=>[d(s,{ref:"captcha",modelValue:W.value.captcha,"onUpdate:modelValue":l[7]||(l[7]=e=>W.value.captcha=e),placeholder:a.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:c((()=>[d(t,{name:"captcha"})])),append:c((()=>[d(w,null,{default:c((()=>[q(k(a.$t("app.sendCaptcha")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),d(n,{prop:"newPassword"},{default:c((()=>[d(s,{ref:"newPassword",modelValue:W.value.newPassword,"onUpdate:modelValue":l[8]||(l[8]=e=>W.value.newPassword=e),type:Z.value,placeholder:a.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:c((()=>[d(t,{name:"password"})])),suffix:c((()=>[d(t,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type","placeholder"])])),_:1})]),d(x,{gutter:15,style:{"padding-top":"20px"}},{default:c((()=>[d(_,{md:6},{default:c((()=>[d(w,{size:"large",style:{width:"100%"},onClick:l[9]||(l[9]=e=>Q.value="login")},{default:c((()=>[q(k(a.$t("app.goLogin")),1)])),_:1})])),_:1}),d(_,{md:18},{default:c((()=>[d(w,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:C(oe,["prevent"])},{default:c((()=>[q(k(a.$t("app.check")),1)])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[m,"reset"==Q.value]])]),f(h).copyright.enable?(V(),g(z,{key:0})):v("v-if",!0)])}}});"function"==typeof w&&w(S);var T=a(S,[["__scopeId","data-v-78fb50aa"]]);export{T as default};