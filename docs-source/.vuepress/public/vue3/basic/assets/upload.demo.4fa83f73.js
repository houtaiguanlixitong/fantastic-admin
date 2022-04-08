
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{d as e,_ as t,n as a,q as s,h as i,f as l,c as n,b as o,e as r,i as c,p as u,k as d,y as p,A as m,r as h,M as g,N as f,D as y,w as v,v as x,H as b,j as w,Z as $,$ as k}from"./index.4b53d893.js";import{_}from"./index.55b081b8.js";import{_ as S}from"./index.d5a706a4.js";const j={class:"slot"},O=(e=>(u("data-v-039ceb4c"),e=e(),d(),e))((()=>o("div",{class:"el-upload__text"},[p("将文件拖到此处，或"),o("em",null,"点击上传")],-1))),z={key:0,class:"el-upload__tip"},I={style:{display:"inline-block"}},C=e({name:"FileUpload"});var U=t(Object.assign(C,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:t}){const u=e,{proxy:d}=m();function p(e){const t=e.name.split("."),a=t[t.length-1],s=u.ext.indexOf(a)>=0,i=e.size/1024/1024<u.size;return s||d.$message.error(`上传文件只支持 ${u.ext.join(" / ")} 格式！`),i||d.$message.error(`上传文件大小不能超过 ${u.size}MB！`),s&&i}function h(){d.$message.warning("文件上传超过限制")}function g(e,a){t("on-success",e,a)}return(t,u)=>{const d=a("el-icon-upload-filled"),m=a("el-icon"),f=a("el-alert"),y=a("el-upload");return s(),i(y,{action:e.action,data:e.data,name:e.name,"before-upload":p,"on-exceed":h,"on-success":g,"file-list":e.files,limit:e.max,drag:""},{tip:l((()=>[e.notip?c("v-if",!0):(s(),n("div",z,[o("div",I,[r(f,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:l((()=>[o("div",j,[r(m,{class:"el-icon--upload"},{default:l((()=>[r(d)])),_:1}),O])])),_:1},8,["action","data","name","file-list","limit"])}}}),[["__scopeId","data-v-039ceb4c"]]);const V={class:"upload-container"},N={class:"mask"},B={class:"actions"},M=["onClick"],A=["onClick"],T=["onClick"],q=["onClick"],E={key:0,class:"el-upload__tip"},K={style:{display:"inline-block"}},F=e({name:"ImagesUpload"});var L=t(Object.assign(F,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:t}){const u=e,{proxy:d}=m(),p=h({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function w(){p.value.imageViewerVisible=!1}function $(e,a){let s=u.url;"left"==a&&0!=e&&(s[e]=s.splice(e-1,1,s[e])[0]),"right"==a&&e!=s.length-1&&(s[e]=s.splice(e+1,1,s[e])[0]),t("update:url",s)}function k(e){const t=e.name.split("."),a=t[t.length-1],s=u.ext.indexOf(a)>=0,i=e.size/1024/1024<u.size;return s||d.$message.error(`上传图片只支持 ${u.ext.join(" / ")} 格式！`),i||d.$message.error(`上传图片大小不能超过 ${u.size}MB！`),s&&i&&(p.value.progress.preview=URL.createObjectURL(e)),s&&i}function S(e){p.value.progress.percent=~~e.percent}function j(e){p.value.progress.preview="",p.value.progress.percent=0,t("on-success",e)}return(d,m)=>{const h=a("el-image"),O=a("el-icon-zoom-in"),z=a("el-icon"),I=a("el-icon-delete"),C=a("el-icon-back"),U=a("el-icon-right"),F=_,L=a("el-progress"),R=a("el-upload"),D=a("el-alert"),H=a("el-image-viewer");return s(),n("div",V,[(s(!0),n(g,null,f(e.url,((a,d)=>(s(),n("div",{key:d,class:"images"},[d<e.max?(s(),i(h,{key:0,src:a,style:y(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):c("v-if",!0),o("div",N,[o("div",B,[o("span",{title:"预览",onClick:e=>function(e){p.value.dialogImageIndex=e,p.value.imageViewerVisible=!0}(d)},[r(z,null,{default:l((()=>[r(O)])),_:1})],8,M),o("span",{title:"移除",onClick:e=>function(e){let a=u.url;a.splice(e,1),t("update:url",a)}(d)},[r(z,null,{default:l((()=>[r(I)])),_:1})],8,A),v(o("span",{title:"左移",class:b({disabled:0==d}),onClick:e=>$(d,"left")},[r(z,null,{default:l((()=>[r(C)])),_:1})],10,T),[[x,e.url.length>1]]),v(o("span",{title:"右移",class:b({disabled:d==e.url.length-1}),onClick:e=>$(d,"right")},[r(z,null,{default:l((()=>[r(U)])),_:1})],10,q),[[x,e.url.length>1]])])])])))),128)),v(r(R,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":k,"on-progress":S,"on-success":j,drag:"",class:"images-upload"},{default:l((()=>[o("div",{class:"image-slot",style:y(`width:${e.width}px;height:${e.height}px;`)},[r(F,{name:"el-icon-plus"})],4),v(o("div",{class:"progress",style:y(`width:${e.width}px;height:${e.height}px;`)},[r(h,{src:p.value.progress.preview,style:y(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(L,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:p.value.progress.percent},null,8,["width","percentage"])],4),[[x,p.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[x,e.url.length<e.max]]),e.notip?c("v-if",!0):(s(),n("div",E,[o("div",K,[r(D,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),p.value.imageViewerVisible?(s(),i(H,{key:1,"url-list":e.url,"initial-index":p.value.dialogImageIndex,onClose:w},null,8,["url-list","initial-index"])):c("v-if",!0)])}}}),[["__scopeId","data-v-7e2d8523"]]);const R={data:()=>({image:"",images:[],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}};"function"==typeof w&&w(R);var D=t(R,[["render",function(e,t,a,i,o,c){const u=k,d=S,p=$,m=L,h=U;return s(),n("div",null,[r(u,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),r(p,{title:"单图上传"},{default:l((()=>[r(d,{url:o.image,"onUpdate:url":t[0]||(t[0]=e=>o.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:c.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),r(p,{title:"多图上传（默认最多3张）"},{default:l((()=>[r(m,{url:o.images,"onUpdate:url":t[1]||(t[1]=e=>o.images=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:c.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),r(p,{title:"文件上传（默认最多3个）"},{default:l((()=>[r(h,{files:o.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:c.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{D as default};