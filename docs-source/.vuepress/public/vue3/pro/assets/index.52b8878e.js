
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as t,r as i,n as s,q as l,c as a,b as r,w as n,h as o,e as p,P as c,y as u,f as d,v as h,i as g,B as f,C as m}from"./index.80ead521.js";const y={class:"upload-container"},v={class:"image-slot"},w={key:1,class:"image"},b={class:"mask"},x={class:"actions"},$=["onClick"],k=["onClick"],_={key:0,class:"el-upload__tip"},j={style:{display:"inline-block"}},V=e({name:"ImageUpload"});var z=t(Object.assign(V,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const V=e,{proxy:z}=m(),C=i({imageViewerVisible:!1,progress:{preview:"",percent:0}});function O(){C.value.imageViewerVisible=!0}function B(){C.value.imageViewerVisible=!1}function S(){t("update:url","")}function M(e){const t=e.name.split("."),i=t[t.length-1],s=V.ext.indexOf(i)>=0,l=e.size/1024/1024<V.size;return s||z.$message.error(`上传图片只支持 ${V.ext.join(" / ")} 格式！`),l||z.$message.error(`上传图片大小不能超过 ${V.size}MB！`),s&&l&&(C.value.progress.preview=URL.createObjectURL(e)),s&&l}function N(e){C.value.progress.percent=~~e.percent}function U(e){C.value.progress.preview="",C.value.progress.percent=0,t("on-success",e)}return(t,i)=>{const m=f,V=s("el-image"),z=s("el-icon-zoom-in"),q=s("el-icon"),I=s("el-icon-delete"),L=s("el-progress"),R=s("el-upload"),A=s("el-alert"),P=s("el-image-viewer");return l(),a("div",y,[r(R,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":M,"on-progress":N,"on-success":U,drag:""},{default:n((()=>[""===e.url?(l(),o(V,{key:0,src:""===e.url?e.placeholder:e.url,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:n((()=>[p("div",v,[r(m,{name:"el-icon-plus"})])])),_:1},8,["src","style"])):(l(),a("div",w,[r(V,{src:e.url,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),p("div",b,[p("div",x,[p("span",{title:"预览",onClick:u(O,["stop"])},[r(q,null,{default:n((()=>[r(z)])),_:1})],8,$),p("span",{title:"移除",onClick:u(S,["stop"])},[r(q,null,{default:n((()=>[r(I)])),_:1})],8,k)])])])),d(p("div",{class:"progress",style:c(`width:${e.width}px;height:${e.height}px;`)},[r(V,{src:C.value.progress.preview,style:c(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(L,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:C.value.progress.percent},null,8,["width","percentage"])],4),[[h,""===e.url&&C.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),e.notip?g("v-if",!0):(l(),a("div",_,[p("div",j,[r(A,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，且图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),C.value.imageViewerVisible?(l(),o(P,{key:1,"url-list":[e.url],onClose:B},null,8,["url-list"])):g("v-if",!0)])}}}),[["__scopeId","data-v-bbca8d8c"]]);export{z as _};