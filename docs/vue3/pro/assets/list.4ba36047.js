
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as a,n as l,o,c as t}from"./index.2c18650f.js";import{_ as n}from"./index.6643e359.js";import{_ as s}from"./index.9e821b92.js";import{g as r,r as d,L as u,ai as i,h as c,q as m,w as p,A as f,j as g,O as h,a2 as v,l as b,an as _,o as w,a3 as x,a0 as y,a1 as C,u as M,y as k}from"./vendor.9da56f98.js";import{u as V}from"./usePagination.3fb54251.js";import $ from"./index.864fab37.js";import"./index.5123c990.js";const z=k("新增管理员"),L=k("全部"),P=k("男"),U=k("女"),j=k("保密"),S=k("筛 选"),E=k("批量操作"),R=k("男"),A=k("女"),D=k("保密"),K=k("编辑"),B=k(" 更多操作 "),G=k("重置密码"),O=k("删除"),q=r({name:"PagesExampleManagerList"}),I=Object.assign(q,{setup(e){const{pagination:a,getParams:r,onSizeChange:k,onCurrentChange:q,onSortChange:I}=V(),{proxy:N}=h(),T=v(),F=d({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{account:"",name:"",mobile:"",sex:""},searchMore:!1,batch:{enable:!0,selectionDataList:[]},dataList:[]});function H(){F.value.loading=!0;let e=r();F.value.search.account&&(e.account=F.value.search.account),F.value.search.name&&(e.name=F.value.search.name),F.value.search.mobile&&(e.mobile=F.value.search.mobile),""!=F.value.search.sex&&(e.sex=F.value.search.sex),N.$api.get("pages_example/manager/list",{baseURL:"/mock/",params:e}).then((e=>{F.value.loading=!1,F.value.dataList=e.data.list,a.value.total=e.data.total}))}function J(e){k(e).then((()=>H()))}function Q(e=1){q(e).then((()=>H()))}function W(e,a){I(e,a).then((()=>H()))}function X(){"router"===F.value.formMode?T.push({name:"pagesExampleGeneralManagerCreate"}):(F.value.formModeProps.id="",F.value.formModeProps.visible=!0)}function Y(e,a){switch(e){case"resetPassword":!function(e){N.$confirm(`确认将「${e.account}」的密码重置为 “123456” 吗？`,"确认信息").then((()=>{N.$api.post("pages_example/manager/password/reset",{id:e.id},{baseURL:"/mock/"}).then((()=>{N.$message.success({message:"模拟重置成功",center:!0})}))})).catch((()=>{}))}(a);break;case"delete":!function(e){N.$confirm(`确认删除「${e.account}」管理员吗？`,"确认信息").then((()=>{N.$api.post("pages_example/manager/delete",{id:e.id},{baseURL:"/mock/"}).then((()=>{H(),N.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}))}(a)}}return u((()=>{H(),"router"===F.value.formMode&&N.$eventBus.on("get-data-list",(()=>{H()}))})),i((()=>{"router"===F.value.formMode&&N.$eventBus.off("get-data-list")})),(e,r)=>{const d=o,u=b("el-button"),i=b("el-input"),h=b("el-form-item"),v=b("el-col"),k=b("el-row"),V=b("el-radio-button"),q=b("el-radio-group"),I=b("el-form"),Z=s,ee=n,ae=b("el-table-column"),le=b("el-tag"),oe=b("el-switch"),te=t,ne=b("el-dropdown-item"),se=b("el-dropdown-menu"),re=b("el-dropdown"),de=b("el-table"),ue=b("el-pagination"),ie=l,ce=_("loading");return w(),c("div",null,[m(d,{title:"管理员管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),m(ie,null,{default:p((()=>[m(u,{type:"primary",size:"large",icon:"el-icon-plus",onClick:X},{default:p((()=>[z])),_:1}),m(Z,{"show-more":"",onToggle:r[12]||(r[12]=e=>F.value.searchMore=e)},{default:p((()=>[m(I,{model:F.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:p((()=>[m(k,null,{default:p((()=>[m(v,{md:8},{default:p((()=>[m(h,{label:"帐号"},{default:p((()=>[m(i,{modelValue:F.value.search.account,"onUpdate:modelValue":r[0]||(r[0]=e=>F.value.search.account=e),placeholder:"请输入帐号，支持模糊查询",clearable:"",onKeydown:r[1]||(r[1]=x((e=>Q()),["enter"])),onClear:r[2]||(r[2]=e=>Q())},null,8,["modelValue"])])),_:1})])),_:1}),m(v,{md:8},{default:p((()=>[m(h,{label:"姓名"},{default:p((()=>[m(i,{modelValue:F.value.search.name,"onUpdate:modelValue":r[3]||(r[3]=e=>F.value.search.name=e),placeholder:"请输入姓名，支持模糊查询",clearable:"",onKeydown:r[4]||(r[4]=x((e=>Q()),["enter"])),onClear:r[5]||(r[5]=e=>Q())},null,8,["modelValue"])])),_:1})])),_:1}),m(v,{md:8},{default:p((()=>[m(h,{label:"手机号"},{default:p((()=>[m(i,{modelValue:F.value.search.mobile,"onUpdate:modelValue":r[6]||(r[6]=e=>F.value.search.mobile=e),placeholder:"请输入手机号",clearable:"",onKeydown:r[7]||(r[7]=x((e=>Q()),["enter"])),onClear:r[8]||(r[8]=e=>Q())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),y(m(k,null,{default:p((()=>[m(v,{md:8},{default:p((()=>[m(h,{label:"性别"},{default:p((()=>[m(q,{modelValue:F.value.search.sex,"onUpdate:modelValue":r[9]||(r[9]=e=>F.value.search.sex=e),onChange:r[10]||(r[10]=e=>Q())},{default:p((()=>[m(V,{label:""},{default:p((()=>[L])),_:1}),m(V,{label:"1"},{default:p((()=>[P])),_:1}),m(V,{label:"0"},{default:p((()=>[U])),_:1}),m(V,{label:"2"},{default:p((()=>[j])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[C,F.value.searchMore]]),m(h,null,{default:p((()=>[m(u,{type:"primary",icon:"el-icon-search",onClick:r[11]||(r[11]=e=>Q())},{default:p((()=>[S])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),F.value.batch.enable?(w(),f(ee,{key:0,data:F.value.dataList,"selection-data":F.value.batch.selectionDataList,onCheckAll:r[13]||(r[13]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:r[14]||(r[14]=a=>e.$refs.table.clearSelection())},{default:p((()=>[m(u,{size:"default"},{default:p((()=>[E])),_:1})])),_:1},8,["data","selection-data"])):g("v-if",!0),y((w(),f(de,{ref:"table",class:"list-table",data:F.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:W,onSelectionChange:r[15]||(r[15]=e=>F.value.batch.selectionDataList=e)},{default:p((()=>[F.value.batch.enable?(w(),f(ae,{key:0,type:"selection",align:"center",fixed:""})):g("v-if",!0),m(ae,{prop:"account",sortable:"",label:"帐号"}),m(ae,{prop:"name",label:"姓名",width:"100",align:"center"}),m(ae,{prop:"sex",label:"性别",width:"100",align:"center"},{default:p((e=>[1==e.row.sex?(w(),f(le,{key:0,type:"success",size:"small"},{default:p((()=>[R])),_:1})):0==e.row.sex?(w(),f(le,{key:1,type:"warning",size:"small"},{default:p((()=>[A])),_:1})):(w(),f(le,{key:2,type:"info",size:"small"},{default:p((()=>[D])),_:1}))])),_:1}),m(ae,{prop:"mobile",label:"手机号",width:"150",align:"center"}),m(ae,{label:"状态",width:"100",align:"center"},{default:p((e=>[m(oe,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,onChange:a=>{return l=a,o=e.row,void N.$confirm(`确认${l?"启用":"停用"}「${o.account}」吗？`,"确认信息").then((()=>{N.$api.post("pages_example/manager/change/status",{id:o.id,status:l},{baseURL:"/mock/"}).then((()=>{N.$message.success({message:`模拟${l?"启用":"停用"}成功`,center:!0})}))})).catch((()=>{o.status=!l}));var l,o}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),m(ae,{label:"操作",width:"200",align:"center",fixed:"right"},{default:p((e=>[m(u,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===F.value.formMode?T.push({name:"pagesExampleGeneralManagerEdit",params:{id:l.id}}):(F.value.formModeProps.id=l.id,F.value.formModeProps.visible=!0));var l}},{default:p((()=>[K])),_:2},1032,["onClick"]),m(re,{onCommand:a=>Y(a,e.row)},{dropdown:p((()=>[m(se,null,{default:p((()=>[m(ne,{command:"resetPassword"},{default:p((()=>[G])),_:1}),m(ne,{command:"delete",divided:""},{default:p((()=>[O])),_:1})])),_:1})])),default:p((()=>[m(u,{size:"small"},{default:p((()=>[B,m(te,{name:"el-icon-arrow-down",class:"el-icon--right"})])),_:1})])),_:2},1032,["onCommand"])])),_:1})])),_:1},8,["data"])),[[ce,F.value.loading]]),m(ue,{"current-page":M(a).page,total:M(a).total,"page-size":M(a).size,"page-sizes":M(a).sizes,layout:M(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:Q,onSizeChange:J},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(F.value.formMode)?(w(),f($,{key:0,id:F.value.formModeProps.id,modelValue:F.value.formModeProps.visible,"onUpdate:modelValue":r[16]||(r[16]=e=>F.value.formModeProps.visible=e),mode:F.value.formMode,onSuccess:H},null,8,["id","modelValue","mode"])):g("v-if",!0)])}}});"function"==typeof a&&a(I);var N=e(I,[["__scopeId","data-v-7a695026"]]);export{N as default};
