
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as N}from"./index.134061c0.js";import{i as M,j as U,r as s,f as c,k as m,g as i,e as d,b as _,s as o,n as u,T as y,O as I,P as D,l as w,V as E}from"./vendor.7c7b0e52.js";import{_ as L}from"./index.78be6e19.js";const P={class:"upload-container"},R={class:"image-slot"},T={key:1,class:"image"},q={class:"mask"},A={class:"actions"},F=["onClick"],G=["onClick"],H={key:0,class:"el-upload__tip"},J={style:{display:"inline-block"}},K=M({name:"ImageUpload"}),Q=Object.assign(K,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:f}){const r=e,{proxy:p}=E(),t=U({imageViewerVisible:!1,progress:{preview:"",percent:0}});function x(){t.value.imageViewerVisible=!0}function b(){t.value.imageViewerVisible=!1}function $(){f("update:url","")}function k(n){const h=n.name.split("."),g=h[h.length-1],l=r.ext.indexOf(g)>=0,a=n.size/1024/1024<r.size;return l||p.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${r.ext.join(" / ")} \u683C\u5F0F\uFF01`),a||p.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${r.size}MB\uFF01`),l&&a&&(t.value.progress.preview=URL.createObjectURL(n)),l&&a}function V(n){t.value.progress.percent=~~n.percent}function C(n){t.value.progress.preview="",t.value.progress.percent=0,f("on-success",n)}return(n,h)=>{const g=N,l=s("el-image"),a=s("el-icon-zoom-in"),v=s("el-icon"),z=s("el-icon-delete"),j=s("el-progress"),O=s("el-upload"),S=s("el-alert"),B=s("el-image-viewer");return c(),m("div",P,[i(O,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":k,"on-progress":V,"on-success":C,drag:""},{default:d(()=>[e.url===""?(c(),_(l,{key:0,src:e.url===""?e.placeholder:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:d(()=>[o("div",R,[i(g,{name:"el-icon-plus"})])]),_:1},8,["src","style"])):(c(),m("div",T,[i(l,{src:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),o("div",q,[o("div",A,[o("span",{title:"\u9884\u89C8",onClick:y(x,["stop"])},[i(v,null,{default:d(()=>[i(a)]),_:1})],8,F),o("span",{title:"\u79FB\u9664",onClick:y($,["stop"])},[i(v,null,{default:d(()=>[i(z)]),_:1})],8,G)])])])),I(o("div",{class:"progress",style:u(`width:${e.width}px;height:${e.height}px;`)},[i(l,{src:t.value.progress.preview,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),i(j,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:t.value.progress.percent},null,8,["width","percentage"])],4),[[D,e.url===""&&t.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),e.notip?w("v-if",!0):(c(),m("div",H,[o("div",J,[i(S,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u4E14\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),t.value.imageViewerVisible?(c(),_(B,{key:1,"url-list":[e.url],onClose:b},null,8,["url-list"])):w("v-if",!0)])}}});var Z=L(Q,[["__scopeId","data-v-5442efad"]]);export{Z as _};
