
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as l,r as a,G as d,n as t,q as u,c as o,a0 as r,e as s,f as n,y as c,t as _,i as p,j as f,Z as m,bg as b,w as h,h as i,v,$ as V}from"./index.b6307f63.js";const y={class:"search-container"},w={key:0,class:"more"},g=e({name:"SearchBar"});var j=l(Object.assign(g,{props:{showMore:{type:Boolean,default:!1},unfold:{type:Boolean,default:!1}},emits:["toggle"],setup(e,{emit:l}){const f=e,m=a(!f.unfold);function b(){m.value=!m.value,l("toggle",m.value)}return d((()=>f.unfold),(()=>b()),{immediate:!0}),(l,a)=>{const d=t("el-button");return u(),o("div",y,[r(l.$slots,"default",{},void 0,!0),e.showMore?(u(),o("div",w,[s(d,{type:"text",size:"small",icon:m.value?"el-icon-caret-top":"el-icon-caret-bottom",onClick:b},{default:n((()=>[c(_(m.value?"收起":"展开"),1)])),_:1},8,["icon"])])):p("v-if",!0)])}}}),[["__scopeId","data-v-5fdcbaf8"]]);const U={data:()=>({search:{name:"",department_id:"",department_job_id:"",role_id:"",check1:!0,check2:!1},searchMore:!1,searchMore2:!1})},k=c("备选项"),x=c("备选项"),M=c("筛选"),B=c("导出"),z=c("查看已导出记录"),S=c("备选项"),T=c("备选项"),$=c("筛选"),q=c("导出"),C=c("查看已导出记录");"function"==typeof f&&f(U);var G=l(U,[["render",function(e,l,a,d,r,c){const _=V,p=t("el-input"),f=t("el-form-item"),y=t("el-col"),w=t("el-row"),g=t("el-option"),U=t("el-select"),G=t("el-checkbox"),I=t("el-button"),O=t("el-form"),Z=j,A=m,D=b("auth");return u(),o("div",null,[s(_,{title:"搜索面板",content:"SearchBar"}),s(A,null,{default:n((()=>[s(Z,{"show-more":"",onToggle:l[4]||(l[4]=e=>r.searchMore=e)},{default:n((()=>[s(O,{model:r.search,size:"default","label-width":"120px"},{default:n((()=>[s(w,null,{default:n((()=>[s(y,{span:12},{default:n((()=>[s(f,{label:"姓名 / 手机号"},{default:n((()=>[s(p,{modelValue:r.search.name,"onUpdate:modelValue":l[0]||(l[0]=e=>r.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(w,null,{default:n((()=>[s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"部门"},{default:n((()=>[s(U,{modelValue:r.search.department_id,"onUpdate:modelValue":l[1]||(l[1]=e=>r.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:n((()=>[s(g,{label:"技术部",value:1}),s(g,{label:"设计部",value:2}),s(g,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.department.browse"]])])),_:1}),s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"职位"},{default:n((()=>[s(U,{modelValue:r.search.department_job_id,"onUpdate:modelValue":l[2]||(l[2]=e=>r.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:n((()=>[s(g,{label:"程序员",value:1}),s(g,{label:"设计师",value:2}),s(g,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.department_job.browse"]])])),_:1}),s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"角色"},{default:n((()=>[s(U,{modelValue:r.search.role_id,"onUpdate:modelValue":l[3]||(l[3]=e=>r.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:n((()=>[s(g,{label:"主管",value:1}),s(g,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.role.browse"]])])),_:1})])),_:1}),h(s(w,null,{default:n((()=>[s(y,{span:24},{default:n((()=>[s(f,{label:"角色"},{default:n((()=>[s(G,{value:!0},{default:n((()=>[k])),_:1}),s(G,{value:!1},{default:n((()=>[x])),_:1})])),_:1})])),_:1})])),_:1},512),[[v,r.searchMore]]),s(f,null,{default:n((()=>[s(I,{type:"primary",icon:"el-icon-search"},{default:n((()=>[M])),_:1}),s(I,null,{default:n((()=>[B])),_:1}),s(I,{type:"text"},{default:n((()=>[z])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),s(A,{title:"默认展开"},{default:n((()=>[s(Z,{"show-more":"",unfold:"",onToggle:l[11]||(l[11]=e=>r.searchMore2=e)},{default:n((()=>[s(O,{model:r.search,size:"default","label-width":"120px"},{default:n((()=>[s(w,null,{default:n((()=>[s(y,{span:12},{default:n((()=>[s(f,{label:"姓名 / 手机号"},{default:n((()=>[s(p,{modelValue:r.search.name,"onUpdate:modelValue":l[5]||(l[5]=e=>r.search.name=e),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(w,null,{default:n((()=>[s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"部门"},{default:n((()=>[s(U,{modelValue:r.search.department_id,"onUpdate:modelValue":l[6]||(l[6]=e=>r.search.department_id=e),clearable:"",placeholder:"请选择部门"},{default:n((()=>[s(g,{label:"技术部",value:1}),s(g,{label:"设计部",value:2}),s(g,{label:"行政部",value:3})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.department.browse"]])])),_:1}),s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"职位"},{default:n((()=>[s(U,{modelValue:r.search.department_job_id,"onUpdate:modelValue":l[7]||(l[7]=e=>r.search.department_job_id=e),clearable:"",placeholder:"请选择职位"},{default:n((()=>[s(g,{label:"程序员",value:1}),s(g,{label:"设计师",value:2}),s(g,{label:"人事",value:3})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.department_job.browse"]])])),_:1}),s(y,{span:6},{default:n((()=>[h((u(),i(f,{label:"角色"},{default:n((()=>[s(U,{modelValue:r.search.role_id,"onUpdate:modelValue":l[8]||(l[8]=e=>r.search.role_id=e),clearable:"",placeholder:"请选择角色"},{default:n((()=>[s(g,{label:"主管",value:1}),s(g,{label:"普通职员",value:2})])),_:1},8,["modelValue"])])),_:1})),[[D,"supplay.role.browse"]])])),_:1})])),_:1}),h(s(w,null,{default:n((()=>[s(y,{span:24},{default:n((()=>[s(f,{label:"角色"},{default:n((()=>[s(G,{modelValue:r.search.check1,"onUpdate:modelValue":l[9]||(l[9]=e=>r.search.check1=e)},{default:n((()=>[S])),_:1},8,["modelValue"]),s(G,{modelValue:r.search.check2,"onUpdate:modelValue":l[10]||(l[10]=e=>r.search.check2=e)},{default:n((()=>[T])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[v,r.searchMore2]]),s(f,null,{default:n((()=>[s(I,{type:"primary",icon:"el-icon-search"},{default:n((()=>[$])),_:1}),s(I,null,{default:n((()=>[q])),_:1}),s(I,{type:"text"},{default:n((()=>[C])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])}]]);export{G as default};
