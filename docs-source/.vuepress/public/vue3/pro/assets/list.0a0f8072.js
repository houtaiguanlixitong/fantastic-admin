
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as J}from"./index.a91da01e.js";import{_ as K}from"./index.21ab5f55.js";import{_ as q}from"./index.789880c6.js";import{_ as H}from"./index.454d22a3.js";import{j as O,r as T,y as X,ae as Z,l as Q,F as o,A as n,z as f,q as b,H as W,X as Y,D as s,aB as ee,o as _,Z as te,U as oe,k as m,$ as r}from"./vendor.d1c84aa2.js";import{u as ae}from"./usePagination.d7f04838.js";import ne from"./index.2572e1cc.js";import{_ as le}from"./index.8f12b84b.js";import"./index.05cd0e65.js";const se=r("\u65B0\u589E\u90E8\u95E8"),ie=r("\u7B5B \u9009"),re=r("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),ue=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),de=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),pe=r("\u67E5\u770B\u804C\u4F4D"),_e=r("\u7F16\u8F91"),me=r("\u5220\u9664"),ce=O({name:"PagesExampleDepartmentList"}),fe=Object.assign(ce,{setup(ge){const{pagination:d,getParams:k,onSizeChange:y,onCurrentChange:$,onSortChange:z}=ae(),{proxy:p}=W(),g=Y(),e=T({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});X(()=>{u(),e.value.formMode==="router"&&p.$eventBus.on("get-data-list",()=>{u()})}),Z(()=>{e.value.formMode==="router"&&p.$eventBus.off("get-data-list")});function u(){e.value.loading=!0;let a=k();e.value.search.title&&(a.title=e.value.search.title),p.$api.get("pages_example/department/list",{baseURL:"/mock/",params:a}).then(t=>{e.value.loading=!1,e.value.dataList=t.data.list,d.value.total=t.data.total})}function M(a){y(a).then(()=>u())}function c(a=1){$(a).then(()=>u())}function x(a,t){z(a,t).then(()=>u())}function w(){e.value.formMode==="router"?g.push({name:"pagesExampleGeneralDepartmentCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function L(a){e.value.formMode==="router"?g.push({name:"pagesExampleGeneralDepartmentEdit",params:{id:a.id}}):(e.value.formModeProps.id=a.id,e.value.formModeProps.visible=!0)}function D(a){p.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${a.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{p.$api.post("pages_example/department/delete",{id:a.id},{baseURL:"/mock/"}).then(()=>{u(),p.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}function P(a){g.push({name:"pagesExampleGeneralJobList",params:{department_id:a.id}})}return(a,t)=>{const V=H,i=s("el-button"),S=s("el-input"),h=s("el-form-item"),B=s("el-col"),E=s("el-row"),U=s("el-form"),N=q,A=s("el-button-group"),G=K,v=s("el-table-column"),I=s("el-table"),R=s("el-pagination"),j=J,F=ee("loading");return _(),Q("div",null,[o(V,{title:"\u90E8\u95E8\u7BA1\u7406",content:"\u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002"}),o(j,null,{default:n(()=>[o(i,{type:"primary",size:"large",icon:"el-icon-plus",onClick:w},{default:n(()=>[se]),_:1}),o(N,null,{default:n(()=>[o(U,{model:e.value.search,size:"default","label-width":"100px","label-suffix":"\uFF1A"},{default:n(()=>[o(E,null,{default:n(()=>[o(B,{span:12},{default:n(()=>[o(h,{label:"\u90E8\u95E8"},{default:n(()=>[o(S,{modelValue:e.value.search.title,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.search.title=l),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:t[1]||(t[1]=te(l=>c(),["enter"])),onClear:t[2]||(t[2]=l=>c())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(h,null,{default:n(()=>[o(i,{type:"primary",icon:"el-icon-search",onClick:t[3]||(t[3]=l=>c())},{default:n(()=>[ie]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(_(),f(G,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:t[4]||(t[4]=l=>a.$refs.table.toggleAllSelection()),onCheckNull:t[5]||(t[5]=l=>a.$refs.table.clearSelection())},{default:n(()=>[o(i,{size:"default"},{default:n(()=>[re]),_:1}),o(A,null,{default:n(()=>[o(i,{size:"default"},{default:n(()=>[ue]),_:1}),o(i,{size:"default"},{default:n(()=>[de]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):b("v-if",!0),oe((_(),f(I,{ref:"table",class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:x,onSelectionChange:t[6]||(t[6]=l=>e.value.batch.selectionDataList=l)},{default:n(()=>[e.value.batch.enable?(_(),f(v,{key:0,type:"selection",width:"40"})):b("v-if",!0),o(v,{prop:"title",label:"\u90E8\u95E8"}),o(v,{label:"\u64CD\u4F5C",width:"250",align:"center"},{default:n(l=>[o(i,{type:"info",size:"small",plain:"",onClick:C=>P(l.row)},{default:n(()=>[pe]),_:2},1032,["onClick"]),o(i,{type:"primary",size:"small",plain:"",onClick:C=>L(l.row)},{default:n(()=>[_e]),_:2},1032,["onClick"]),o(i,{type:"danger",size:"small",plain:"",onClick:C=>D(l.row)},{default:n(()=>[me]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[F,e.value.loading]]),o(R,{"current-page":m(d).page,total:m(d).total,"page-size":m(d).size,"page-sizes":m(d).sizes,layout:m(d).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:M,onCurrentChange:c},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(_(),f(ne,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.formModeProps.visible=l),mode:e.value.formMode,onSuccess:u},null,8,["id","modelValue","mode"])):b("v-if",!0)])}}});var xe=le(fe,[["__scopeId","data-v-c1591644"]]);export{xe as default};