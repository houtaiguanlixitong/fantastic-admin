
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as F,n as T,m as H}from"./index.62acde6f.js";import{_ as Q}from"./index.c2c1d544.js";import{_ as W}from"./index.85edf3ae.js";import{g as X,r as Y,L as Z,ai as ee,h as te,q as o,w as n,A as g,j as b,O as ae,M as oe,a2 as ne,l as s,aB as le,o as m,a3 as se,a0 as ie,u as _,y as r}from"./vendor.ee7254f0.js";import{u as re}from"./usePagination.3ccba83a.js";import ue from"./index.16454c69.js";import"./index.2f18db0b.js";var $={};const de=r("\u8FD4\u56DE"),pe=r("\u65B0\u589E\u804C\u4F4D"),me=r("\u7B5B \u9009"),_e=r("\u5355\u4E2A\u6279\u91CF\u64CD\u4F5C\u6309\u94AE"),ce=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC41"),fe=r("\u6279\u91CF\u64CD\u4F5C\u6309\u94AE\u7EC42"),ge=r("\u7F16\u8F91"),ve=r("\u5220\u9664"),be=X({name:"PagesExampleDepartmentJobList"}),k=Object.assign(be,{setup(he){const{pagination:p,getParams:y,onSizeChange:M,onCurrentChange:z,onSortChange:w}=re(),{proxy:u}=ae(),c=oe(),h=ne(),e=Y({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[],department:""});Z(()=>{L(),d(),e.value.formMode==="router"&&u.$eventBus.on("get-data-list",()=>{d()})}),ee(()=>{e.value.formMode==="router"&&u.$eventBus.off("get-data-list")});function L(){u.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:c.params.department_id}}).then(a=>{e.value.department=a.data.title})}function d(){e.value.loading=!0;let a=y();a.department_id=c.params.department_id,e.value.search.title&&(a.title=e.value.search.title),u.$api.get("pages_example/job/list",{baseURL:"/mock/",params:a}).then(t=>{e.value.loading=!1,e.value.dataList=t.data.list,p.value.total=t.data.total})}function x(a){M(a).then(()=>d())}function f(a=1){z(a).then(()=>d())}function P(a,t){w(a,t).then(()=>d())}function D(){e.value.formMode==="router"?h.push({name:"pagesExampleGeneralJobCreate",params:{department_id:c.params.department_id}}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function V(a){e.value.formMode==="router"?h.push({name:"pagesExampleGeneralJobEdit",params:{id:a.id,department_id:c.params.department_id}}):(e.value.formModeProps.id=a.id,e.value.formModeProps.visible=!0)}function S(a){u.$confirm(`\u786E\u8BA4\u5220\u9664\u300C${a.title}\u300D\u5417\uFF1F`,"\u786E\u8BA4\u4FE1\u606F").then(()=>{u.$api.post("pages_example/job/delete",{id:a.id},{baseURL:"/mock/"}).then(()=>{d(),u.$message.success({message:"\u6A21\u62DF\u5220\u9664\u6210\u529F",center:!0})})}).catch(()=>{})}return(a,t)=>{const i=s("el-button"),B=T,E=s("el-input"),C=s("el-form-item"),U=s("el-col"),R=s("el-row"),j=s("el-form"),N=W,A=s("el-button-group"),I=Q,v=s("el-table-column"),J=s("el-table"),G=s("el-pagination"),K=H,O=le("loading");return m(),te("div",null,[o(B,{title:`\u300C${e.value.department}\u300D\u804C\u4F4D\u7BA1\u7406`,content:"\u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002"},{default:n(()=>[o(i,{icon:"el-icon-arrow-left",size:"small",round:"",onClick:t[0]||(t[0]=l=>a.$router.go(-1))},{default:n(()=>[de]),_:1})]),_:1},8,["title"]),o(K,null,{default:n(()=>[o(i,{type:"primary",size:"large",icon:"el-icon-plus",onClick:D},{default:n(()=>[pe]),_:1}),o(N,null,{default:n(()=>[o(j,{model:e.value.search,size:"default","label-width":"100px","label-suffix":"\uFF1A"},{default:n(()=>[o(R,null,{default:n(()=>[o(U,{span:12},{default:n(()=>[o(C,{label:"\u804C\u4F4D"},{default:n(()=>[o(E,{modelValue:e.value.search.title,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value.search.title=l),placeholder:"\u8BF7\u8F93\u5165\u804C\u4F4D\u540D\u79F0\uFF0C\u652F\u6301\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeydown:t[2]||(t[2]=se(l=>f(),["enter"])),onClear:t[3]||(t[3]=l=>f())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(C,null,{default:n(()=>[o(i,{type:"primary",icon:"el-icon-search",onClick:t[4]||(t[4]=l=>f())},{default:n(()=>[me]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e.value.batch.enable?(m(),g(I,{key:0,data:e.value.dataList,"selection-data":e.value.batch.selectionDataList,onCheckAll:t[5]||(t[5]=l=>a.$refs.table.toggleAllSelection()),onCheckNull:t[6]||(t[6]=l=>a.$refs.table.clearSelection())},{default:n(()=>[o(i,{size:"default"},{default:n(()=>[_e]),_:1}),o(A,null,{default:n(()=>[o(i,{size:"default"},{default:n(()=>[ce]),_:1}),o(i,{size:"default"},{default:n(()=>[fe]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):b("v-if",!0),ie((m(),g(J,{ref:"table",class:"list-table",data:e.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:P,onSelectionChange:t[7]||(t[7]=l=>e.value.batch.selectionDataList=l)},{default:n(()=>[e.value.batch.enable?(m(),g(v,{key:0,type:"selection",width:"40"})):b("v-if",!0),o(v,{prop:"title",label:"\u804C\u4F4D"}),o(v,{label:"\u64CD\u4F5C",width:"250",align:"center"},{default:n(l=>[o(i,{type:"primary",size:"small",plain:"",onClick:q=>V(l.row)},{default:n(()=>[ge]),_:2},1032,["onClick"]),o(i,{type:"danger",size:"small",plain:"",onClick:q=>S(l.row)},{default:n(()=>[ve]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[O,e.value.loading]]),o(G,{"current-page":_(p).page,total:_(p).total,"page-size":_(p).size,"page-sizes":_(p).sizes,layout:_(p).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:x,onCurrentChange:f},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(e.value.formMode)?(m(),g(ue,{key:0,id:e.value.formModeProps.id,modelValue:e.value.formModeProps.visible,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value.formModeProps.visible=l),"department-id":a.$route.params.department_id,mode:e.value.formMode,onSuccess:d},null,8,["id","modelValue","department-id","mode"])):b("v-if",!0)])}}});typeof $=="function"&&$(k);var Le=F(k,[["__scopeId","data-v-27f541d8"]]);export{Le as default};
