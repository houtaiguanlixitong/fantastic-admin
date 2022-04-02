
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ef647e37.js";import{d as t,_ as i,r as s,n as l,q as a,c as r,e as n,f as o,h as p,b as c,D as u,x as d,w as h,v as g,i as f,A as m}from"./index.b6307f63.js";const v={class:"upload-container"},y={class:"image-slot"},w={key:1,class:"image"},b={class:"mask"},x={class:"actions"},$=["onClick"],_=["onClick"],k={key:0,class:"el-upload__tip"},j={style:{display:"inline-block"}},V=t({name:"ImageUpload"});var z=i(Object.assign(V,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(t,{emit:i}){const V=t,{proxy:z}=m(),C=s({imageViewerVisible:!1,progress:{preview:"",percent:0}});function O(){C.value.imageViewerVisible=!0}function S(){C.value.imageViewerVisible=!1}function B(){i("update:url","")}function M(e){const t=e.name.split("."),i=t[t.length-1],s=V.ext.indexOf(i)>=0,l=e.size/1024/1024<V.size;return s||z.$message.error(`上传图片只支持 ${V.ext.join(" / ")} 格式！`),l||z.$message.error(`上传图片大小不能超过 ${V.size}MB！`),s&&l&&(C.value.progress.preview=URL.createObjectURL(e)),s&&l}function N(e){C.value.progress.percent=~~e.percent}function U(e){C.value.progress.preview="",C.value.progress.percent=0,i("on-success",e)}return(i,s)=>{const m=e,V=l("el-image"),z=l("el-icon-zoom-in"),q=l("el-icon"),A=l("el-icon-delete"),I=l("el-progress"),L=l("el-upload"),R=l("el-alert"),D=l("el-image-viewer");return a(),r("div",v,[n(L,{"show-file-list":!1,headers:t.headers,action:t.action,data:t.data,name:t.name,"before-upload":M,"on-progress":N,"on-success":U,drag:""},{default:o((()=>[""===t.url?(a(),p(V,{key:0,src:""===t.url?t.placeholder:t.url,style:u(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},{error:o((()=>[c("div",y,[n(m,{name:"el-icon-plus"})])])),_:1},8,["src","style"])):(a(),r("div",w,[n(V,{src:t.url,style:u(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},null,8,["src","style"]),c("div",b,[c("div",x,[c("span",{title:"预览",onClick:d(O,["stop"])},[n(q,null,{default:o((()=>[n(z)])),_:1})],8,$),c("span",{title:"移除",onClick:d(B,["stop"])},[n(q,null,{default:o((()=>[n(A)])),_:1})],8,_)])])])),h(c("div",{class:"progress",style:u(`width:${t.width}px;height:${t.height}px;`)},[n(V,{src:C.value.progress.preview,style:u(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},null,8,["src","style"]),n(I,{type:"circle",width:.8*Math.min(t.width,t.height),percentage:C.value.progress.percent},null,8,["width","percentage"])],4),[[g,""===t.url&&C.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),t.notip?f("v-if",!0):(a(),r("div",k,[c("div",j,[n(R,{title:`上传图片支持 ${t.ext.join(" / ")} 格式，且图片大小不超过 ${t.size}MB，建议图片尺寸为 ${t.width}*${t.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),C.value.imageViewerVisible?(a(),p(D,{key:1,"url-list":[t.url],onClose:S},null,8,["url-list"])):f("v-if",!0)])}}}),[["__scopeId","data-v-bbca8d8c"]]);export{z as _};
