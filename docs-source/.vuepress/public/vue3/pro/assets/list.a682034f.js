
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,d as a,r as l,o as t,a8 as o,c as i,b as s,w as n,h as r,i as d,j as u,C as c,m as p,n as f,ac as m,af as g,q as v,x as h,f as b,g as _,z as y,ad as C}from"./index.992324c5.js";import{_ as x}from"./index.87c088c3.js";import{_ as z}from"./index.048463de.js";import{u as k}from"./usePagination.b6af660a.js";import w from"./index.d96f9c4f.js";import"./index.b7bc8e5b.js";import"./index.15f47cfa.js";import"./index.e470b19b.js";const M=y("新增运费模版"),$=y("筛 选"),L=y("单个批量操作按钮"),P=y("批量操作按钮组1"),j=y("批量操作按钮组2"),S=y("编辑"),V=y("删除"),U=a({name:"PagesExampleDeliveryList"}),D=Object.assign(U,{setup(e){const{pagination:a,getParams:u,onSizeChange:y,onCurrentChange:U,onSortChange:D}=k(),{proxy:E}=c(),R=p(),A=l({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});function B(){A.value.loading=!0;let e=u();A.value.search.title&&(e.title=A.value.search.title),E.$api.get("pages_example/delivery/list",{baseURL:"/mock/",params:e}).then((e=>{A.value.loading=!1,A.value.dataList=e.data.list,a.value.total=e.data.total}))}function q(e){y(e).then((()=>B()))}function I(e=1){U(e).then((()=>B()))}function K(e,a){D(e,a).then((()=>B()))}function N(){"router"===A.value.formMode?R.push({name:"pagesExampleShopDeliveryCreate"}):(A.value.formModeProps.id="",A.value.formModeProps.visible=!0)}return t((()=>{B(),"router"===A.value.formMode&&E.$eventBus.on("get-data-list",(()=>{B()}))})),o((()=>{"router"===A.value.formMode&&E.$eventBus.off("get-data-list")})),(e,l)=>{const t=C,o=f("el-button"),u=f("el-input"),c=f("el-form-item"),p=f("el-col"),y=f("el-row"),k=f("el-form"),U=z,D=f("el-button-group"),O=x,F=f("el-table-column"),G=f("el-switch"),H=f("el-table"),J=f("el-pagination"),Q=m,T=g("loading");return v(),i("div",null,[s(t,{title:"运费模版管理"}),s(Q,null,{default:n((()=>[s(o,{type:"primary",size:"large",icon:"el-icon-plus",onClick:N},{default:n((()=>[M])),_:1}),s(U,null,{default:n((()=>[s(k,{model:A.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:n((()=>[s(y,null,{default:n((()=>[s(p,{span:12},{default:n((()=>[s(c,{label:"模版名称"},{default:n((()=>[s(u,{modelValue:A.value.search.title,"onUpdate:modelValue":l[0]||(l[0]=e=>A.value.search.title=e),placeholder:"请输入模版名称，支持模糊查询",clearable:"",onKeydown:l[1]||(l[1]=h((e=>I()),["enter"])),onClear:l[2]||(l[2]=e=>I())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(c,null,{default:n((()=>[s(o,{type:"primary",icon:"el-icon-search",onClick:l[3]||(l[3]=e=>I())},{default:n((()=>[$])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),A.value.batch.enable?(v(),r(O,{key:0,data:e.dataList,"selection-data":A.value.batch.selectionDataList,onCheckAll:l[4]||(l[4]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[5]||(l[5]=a=>e.$refs.table.clearSelection())},{default:n((()=>[s(o,{size:"default"},{default:n((()=>[L])),_:1}),s(D,null,{default:n((()=>[s(o,{size:"default"},{default:n((()=>[P])),_:1}),s(o,{size:"default"},{default:n((()=>[j])),_:1})])),_:1})])),_:1},8,["data","selection-data"])):d("v-if",!0),b((v(),r(H,{ref:"table",class:"list-table",data:A.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:K,onSelectionChange:l[6]||(l[6]=e=>A.value.batch.selectionDataList=e)},{default:n((()=>[A.value.batch.enable?(v(),r(F,{key:0,type:"selection",width:"40"})):d("v-if",!0),s(F,{prop:"title",label:"模版名称"}),s(F,{label:"开启状态",width:"100",align:"center"},{default:n((e=>[s(G,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,onChange:a=>{return l=a,t=e.row,void E.$confirm(`确认${l?"启用":"停用"}「${t.title}」运费模版吗？`,"确认信息").then((()=>{E.$api.post("pages_example/delivery/change/status",{id:t.id,status:l},{baseURL:"/mock/"}).then((()=>{E.$message.success({message:`模拟${l?"启用":"停用"}成功`,center:!0})}))})).catch((()=>{t.status=!l}));var l,t}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),s(F,{label:"操作",width:"250",align:"center"},{default:n((e=>[s(o,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,void("router"===A.value.formMode?R.push({name:"pagesExampleShopDeliveryEdit",params:{id:l.id}}):(A.value.formModeProps.id=l.id,A.value.formModeProps.visible=!0));var l}},{default:n((()=>[S])),_:2},1032,["onClick"]),s(o,{type:"danger",size:"small",plain:"",onClick:a=>{return l=e.row,void E.$confirm(`确认删除「${l.title}」吗？`,"确认信息").then((()=>{E.$api.post("pages_example/delivery/delete",{id:l.id},{baseURL:"/mock/"}).then((()=>{B(),E.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}));var l}},{default:n((()=>[V])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[T,A.value.loading]]),s(J,{"current-page":_(a).page,total:_(a).total,"page-size":_(a).size,"page-sizes":_(a).sizes,layout:_(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:q,onCurrentChange:I},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(A.value.formMode)?(v(),r(w,{key:0,id:A.value.formModeProps.id,modelValue:A.value.formModeProps.visible,"onUpdate:modelValue":l[7]||(l[7]=e=>A.value.formModeProps.visible=e),mode:A.value.formMode,onSuccess:B},null,8,["id","modelValue","mode"])):d("v-if",!0)])}}});"function"==typeof u&&u(D);var E=e(D,[["__scopeId","data-v-e340c1f2"]]);export{E as default};