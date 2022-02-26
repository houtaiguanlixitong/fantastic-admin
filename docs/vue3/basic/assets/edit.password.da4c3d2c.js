
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as C}from"./index.6efdeb0a.js";import{a as P,f as R,h as q}from"./index.4bcd9cef.js";import{i as U,j as m,k as E,g as e,e as s,Q as S,R as $,r as l,f as j,v as B,V as N}from"./vendor.7c7b0e52.js";var c={};const z=B("\u63D0\u4EA4"),I=U({name:"PersonalEditPassword"}),O=Object.assign(I,{setup(Q){const i=S(),f=$(),{proxy:d}=N(),_=P(),w=(n,t,a)=>{t!==o.value.newpassword?a(new Error("\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801")):a()},o=m({password:"",newpassword:"",checkpassword:""}),g=m({password:[{required:!0,message:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801",trigger:"blur"}],newpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"\u5BC6\u7801\u957F\u5EA6\u4E3A6\u523018\u4F4D"}],checkpassword:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{validator:w}]});function v(){d.$refs.formRef.validate(n=>{n&&_.editPassword(o.value).then(()=>{d.$message({type:"success",message:"\u6A21\u62DF\u4FEE\u6539\u6210\u529F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"}),_.logout().then(()=>{f.push({name:"login",query:{redirect:i.fullPath}})})}).catch(()=>{})})}return(n,t)=>{const a=q,u=l("el-input"),p=l("el-form-item"),b=l("el-form"),h=l("el-col"),V=l("el-row"),k=R,y=l("el-button"),x=C;return j(),E("div",null,[e(a,{title:"\u4FEE\u6539\u5BC6\u7801",content:"\u5B9A\u671F\u4FEE\u6539\u5BC6\u7801\u53EF\u4EE5\u63D0\u9AD8\u5E10\u53F7\u5B89\u5168\u6027\u5662~"}),e(k,null,{default:s(()=>[e(V,null,{default:s(()=>[e(h,{md:24,lg:12},{default:s(()=>[e(b,{ref:"formRef",model:o.value,rules:g.value,"label-width":"120px"},{default:s(()=>[e(p,{label:"\u539F\u5BC6\u7801",prop:"password"},{default:s(()=>[e(u,{modelValue:o.value.password,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value.password=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u65B0\u5BC6\u7801",prop:"newpassword"},{default:s(()=>[e(u,{modelValue:o.value.newpassword,"onUpdate:modelValue":t[1]||(t[1]=r=>o.value.newpassword=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u786E\u8BA4\u65B0\u5BC6\u7801",prop:"checkpassword"},{default:s(()=>[e(u,{modelValue:o.value.checkpassword,"onUpdate:modelValue":t[2]||(t[2]=r=>o.value.checkpassword=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:s(()=>[e(y,{type:"primary",size:"large",onClick:v},{default:s(()=>[z]),_:1})]),_:1})])}}});typeof c=="function"&&c(O);export{O as default};
