
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,b as a,o as l,n as t}from"./index.2c18650f.js";import{_ as o}from"./index.6643e359.js";import{_ as i}from"./index.9e821b92.js";import{g as s,r as n,L as r,ai as d,h as u,q as f,w as m,A as c,j as p,O as g,a2 as v,l as b,an as h,o as _,a3 as M,a0 as C,u as y,p as x,k as z,y as k,i as L}from"./vendor.9da56f98.js";import{u as P}from"./usePagination.3fb54251.js";import w from"./index.748bcc67.js";import"./index.c2f3c8e1.js";const j=(e=>(x("data-v-16e0742d"),e=e(),z(),e))((()=>L("p",null,"标准模块的优势之一就是，可根据表单内容量与关联性，快速切换表单展示模式，默认提供了以下三种常见模式",-1))),V=k("路由跳转"),$=k("对话框"),S=k("抽屉"),U=k("新增"),E=k("筛 选"),A=k("单个批量操作按钮"),D=k("批量操作按钮组1"),F=k("批量操作按钮组2"),B=k("编辑"),G=k("删除"),O=s({name:"PagesExampleFormModeList"}),R=Object.assign(O,{setup(e){const{pagination:a,getParams:s,onSizeChange:x,onCurrentChange:z,onSortChange:k}=P(),{proxy:L}=g(),O=v(),R=n({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function q(){R.value.loading=!0;let e=s();R.value.search.title&&(e.title=R.value.search.title),L.$api.get("pages_example/form_mode/list",{baseURL:"/mock/",params:e}).then((e=>{R.value.loading=!1,R.value.dataList=e.data.list,a.value.total=e.data.total}))}function I(e){x(e).then((()=>q()))}function K(e=1){z(e).then((()=>q()))}function N(e,a){k(e,a).then((()=>q()))}function H(){"router"===R.value.formMode?O.push({name:"pagesExampleGeneralFormModeCreate"}):(R.value.formModeProps.id="",R.value.formModeProps.visible=!0)}return r((()=>{q(),"router"===R.value.formMode&&L.$eventBus.on("get-data-list",(()=>{q()}))})),d((()=>{"router"===R.value.formMode&&L.$eventBus.off("get-data-list")})),(e,s)=>{const n=b("el-radio-button"),r=b("el-radio-group"),d=l,g=b("el-button"),v=b("el-input"),x=b("el-form-item"),z=b("el-col"),k=b("el-row"),P=b("el-form"),J=i,Q=b("el-button-group"),T=o,W=b("el-table-column"),X=b("el-table"),Y=b("el-pagination"),Z=t,ee=h("loading");return _(),u("div",null,[f(d,{title:"表单展示模式"},{content:m((()=>[j,f(r,{modelValue:R.value.formMode,"onUpdate:modelValue":s[0]||(s[0]=e=>R.value.formMode=e),size:"default"},{default:m((()=>[f(n,{label:"router"},{default:m((()=>[V])),_:1}),f(n,{label:"dialog"},{default:m((()=>[$])),_:1}),f(n,{label:"drawer"},{default:m((()=>[S])),_:1})])),_:1},8,["modelValue"])])),_:1}),f(Z,null,{default:m((()=>[f(g,{type:"primary",size:"large",icon:"el-icon-plus",onClick:H},{default:m((()=>[U])),_:1}),f(J,null,{default:m((()=>[f(P,{model:R.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:m((()=>[f(k,null,{default:m((()=>[f(z,{span:12},{default:m((()=>[f(x,{label:"标题"},{default:m((()=>[f(v,{modelValue:R.value.search.title,"onUpdate:modelValue":s[1]||(s[1]=e=>R.value.search.title=e),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:s[2]||(s[2]=M((e=>K()),["enter"])),onClear:s[3]||(s[3]=e=>K())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),f(x,null,{default:m((()=>[f(g,{type:"primary",icon:"el-icon-search",onClick:s[4]||(s[4]=e=>K())},{default:m((()=>[E])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),R.value.batch.enable?(_(),c(T,{key:0,data:R.value.dataList,"selection-data":R.value.batch.selectionDataList,onCheckAll:s[5]||(s[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:s[6]||(s[6]=a=>e.$refs.table.clearSelection())},{default:m((()=>[f(g,{size:"default"},{default:m((()=>[A])),_:1}),f(Q,null,{default:m((()=>[f(g,{size:"default"},{default:m((()=>[D])),_:1}),f(g,{size:"default"},{default:m((()=>[F])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):p("v-if",!0),C((_(),c(X,{ref:"table",class:"list-table",data:R.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:N,onSelectionChange:s[7]||(s[7]=e=>R.value.batch.selectionDataList=e)},{default:m((()=>[R.value.batch.enable?(_(),c(W,{key:0,type:"selection",align:"center",fixed:""})):p("v-if",!0),f(W,{prop:"title",label:"标题"}),f(W,{label:"操作",width:"250",align:"center",fixed:"right"},{default:m((e=>[f(g,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===R.value.formMode?O.push({name:"pagesExampleGeneralFormModeEdit",params:{id:l.id}}):(R.value.formModeProps.id=l.id,R.value.formModeProps.visible=!0));var l}},{default:m((()=>[B])),_:2},1032,["onClick"]),f(g,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void L.$confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{L.$api.post("pages_example/form_mode/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{q(),L.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:m((()=>[G])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ee,R.value.loading]]),f(Y,{"current-page":y(a).page,total:y(a).total,"page-size":y(a).size,"page-sizes":y(a).sizes,layout:y(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:I,onCurrentChange:K},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(R.value.formMode)?(_(),c(w,{key:0,id:R.value.formModeProps.id,modelValue:R.value.formModeProps.visible,"onUpdate:modelValue":s[8]||(s[8]=e=>R.value.formModeProps.visible=e),mode:R.value.formMode,onSuccess:q},null,8,["id","modelValue","mode"])):p("v-if",!0)])}}});"function"==typeof a&&a(R);var q=e(R,[["__scopeId","data-v-16e0742d"]]);export{q as default};
