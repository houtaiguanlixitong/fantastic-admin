
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{m as U,n as B}from"./index.a1178b85.js";import{r as c,z as q,h as g,q as l,w as t,l as m,o as h,u as f,y as z,t as v,F,C as L,A as N}from"./vendor.ee7254f0.js";var w={};const R={setup(j){const i=c([{name:"\u7AD9\u70B9\u7BA1\u7406",module:"station",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u505C\u7528",module:"disabled"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u542F\u7528",module:"enable"}]},{name:"\u90E8\u95E8\u7BA1\u7406",module:"department",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u5220\u9664",module:"delete"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u65B0\u589E",module:"new"}]},{name:"\u804C\u4F4D\u7BA1\u7406",module:"department_job",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u65B0\u589E",module:"new"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u5220\u9664",module:"delete"}]},{name:"\u89D2\u8272\u7BA1\u7406",module:"role",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u5220\u9664",module:"delete"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u65B0\u589E",module:"new"}]},{name:"\u7BA1\u7406\u5458\u7BA1\u7406",module:"admin_manager",authorization_list:[{name:"\u67E5\u770B\u5217\u8868",module:"list"},{name:"\u67E5\u770B\u8BE6\u60C5",module:"info"},{name:"\u7F16\u8F91\u6743\u9650",module:"authorization_edit"},{name:"\u67E5\u770B\u6743\u9650\u8BE6\u60C5",module:"authorization_info"},{name:"\u5220\u9664",module:"delete"},{name:"\u505C\u7528",module:"disabled"},{name:"\u7F16\u8F91",module:"edit"},{name:"\u542F\u7528",module:"enable"},{name:"\u65B0\u589E",module:"new"},{name:"\u91CD\u7F6E\u5BC6\u7801",module:"reset"}]}]),n=c({name:"",brief:"",authorization_list:[]}),$=c({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:"blur"}],authorization_list:[{validator:(r,e,o)=>{e.length==0?o(new Error("\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6743\u9650")):o()},trigger:"change"}]}),s=q(()=>{let r=[];return i.value.forEach(e=>{let o=[];e.authorization_list.forEach(d=>{n.value.authorization_list.includes(`${e.module}.${d.module}`)&&o.push(`${e.module}.${d.module}`)}),r.push({checkAll:o.length==e.authorization_list.length,indeterminate:o.length>0&&o.length<e.authorization_list.length})}),r});function V(r,e){r?i.value[e].authorization_list.forEach(o=>{n.value.authorization_list.includes(`${i.value[e].module}.${o.module}`)||n.value.authorization_list.push(`${i.value[e].module}.${o.module}`)}):i.value[e].authorization_list.forEach(o=>{n.value.authorization_list=n.value.authorization_list.filter(d=>d!=`${i.value[e].module}.${o.module}`)})}return(r,e)=>{const o=B,d=m("el-input"),_=m("el-form-item"),p=m("el-checkbox"),b=m("el-table-column"),k=m("el-checkbox-group"),x=m("el-table"),A=m("el-form"),C=m("el-col"),y=m("el-row"),E=U;return h(),g("div",null,[l(o,{title:"\u6743\u9650",content:"\u8BE5\u9875\u9762\u751F\u6210\u7684\u6743\u9650\u683C\u5F0F\uFF0C\u53EF\u76F4\u63A5\u7528\u4E8E\u672C\u9879\u76EE\u7684\u6743\u9650\u6A21\u5F0F"}),l(E,null,{default:t(()=>[l(y,null,{default:t(()=>[l(C,{md:24,lg:18},{default:t(()=>[l(A,{model:n.value,rules:$.value,"label-width":"120px","label-suffix":"\uFF1A"},{default:t(()=>[l(_,{label:"\u540D\u79F0",prop:"name"},{default:t(()=>[l(d,{modelValue:n.value.name,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value.name=a),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(_,{label:"\u7B80\u4ECB"},{default:t(()=>[l(d,{modelValue:n.value.brief,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.brief=a),type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7B80\u4ECB"},null,8,["modelValue"])]),_:1}),l(_,{label:"\u6743\u9650",prop:"authorization_list"},{default:t(()=>[l(x,{data:i.value,border:"",stripe:"","highlight-current-row":"",style:{"line-height":"normal"}},{default:t(()=>[l(b,{prop:"name",width:"200",label:"\u6A21\u5757"},{default:t(a=>[l(p,{modelValue:f(s)[a.$index].checkAll,"onUpdate:modelValue":u=>f(s)[a.$index].checkAll=u,indeterminate:f(s)[a.$index].indeterminate,onChange:u=>V(u,a.$index)},{default:t(()=>[z(v(a.row.name),1)]),_:2},1032,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),_:1}),l(b,{label:"\u6743\u9650"},{default:t(a=>[l(k,{modelValue:n.value.authorization_list,"onUpdate:modelValue":e[2]||(e[2]=u=>n.value.authorization_list=u)},{default:t(()=>[(h(!0),g(F,null,L(a.row.authorization_list,u=>(h(),N(p,{key:`${a.row.module}.${u.module}`,label:`${a.row.module}.${u.module}`},{default:t(()=>[z(v(u.name),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue"])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})])}}};typeof w=="function"&&w(R);export{R as default};
