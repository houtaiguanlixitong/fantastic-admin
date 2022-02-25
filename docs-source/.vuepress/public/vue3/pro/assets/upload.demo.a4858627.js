
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as j,b as P,m as G,n as H}from"./index.62acde6f.js";import{g as U,l,o as g,A as I,w as r,h as $,i,q as n,j as z,p as J,k as Q,y as W,O as B,r as X,F as Y,C as Z,x as k,a0 as S,a1 as O,s as N}from"./vendor.ee7254f0.js";import{_ as ee}from"./index.d0af39ec.js";const te=e=>(J("data-v-506dad6e"),e=e(),Q(),e),ne={class:"slot"},ae=te(()=>i("div",{class:"el-upload__text"},[W("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216"),i("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),le={key:0,class:"el-upload__tip"},se={style:{display:"inline-block"}},ie=U({name:"FileUpload"}),oe=Object.assign(ie,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=B();function a(p){const u=p.name.split("."),w=u[u.length-1],h=c.ext.indexOf(w)>=0,d=p.size/1024/1024<c.size;return h||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),d||v.$message.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),h&&d}function y(){v.$message.warning("\u6587\u4EF6\u4E0A\u4F20\u8D85\u8FC7\u9650\u5236")}function x(p,u){o("on-success",p,u)}return(p,u)=>{const w=l("el-icon-upload-filled"),h=l("el-icon"),d=l("el-alert"),t=l("el-upload");return g(),I(t,{action:e.action,data:e.data,name:e.name,"before-upload":a,"on-exceed":y,"on-success":x,"file-list":e.files,limit:e.max,drag:""},{tip:r(()=>[e.notip?z("v-if",!0):(g(),$("div",le,[i("div",se,[n(d,{title:`\u4E0A\u4F20\u6587\u4EF6\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u4E14\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u4E2A`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))]),default:r(()=>[i("div",ne,[n(h,{class:"el-icon--upload"},{default:r(()=>[n(w)]),_:1}),ae])]),_:1},8,["action","data","name","file-list","limit"])}}});var ce=j(oe,[["__scopeId","data-v-506dad6e"]]);const ue={class:"upload-container"},re={class:"mask"},de={class:"actions"},pe=["onClick"],me=["onClick"],ge=["onClick"],he=["onClick"],fe={key:0,class:"el-upload__tip"},_e={style:{display:"inline-block"}},ve=U({name:"ImagesUpload"}),ye=Object.assign(ve,{props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:o}){const c=e,{proxy:v}=B(),a=X({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function y(t){a.value.dialogImageIndex=t,a.value.imageViewerVisible=!0}function x(){a.value.imageViewerVisible=!1}function p(t){let m=c.url;m.splice(t,1),o("update:url",m)}function u(t,m){let s=c.url;m=="left"&&t!=0&&(s[t]=s.splice(t-1,1,s[t])[0]),m=="right"&&t!=s.length-1&&(s[t]=s.splice(t+1,1,s[t])[0]),o("update:url",s)}function w(t){const m=t.name.split("."),s=m[m.length-1],b=c.ext.indexOf(s)>=0,f=t.size/1024/1024<c.size;return b||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${c.ext.join(" / ")} \u683C\u5F0F\uFF01`),f||v.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${c.size}MB\uFF01`),b&&f&&(a.value.progress.preview=URL.createObjectURL(t)),b&&f}function h(t){a.value.progress.percent=~~t.percent}function d(t){a.value.progress.preview="",a.value.progress.percent=0,o("on-success",t)}return(t,m)=>{const s=l("el-image"),b=l("el-icon-zoom-in"),f=l("el-icon"),T=l("el-icon-delete"),A=l("el-icon-back"),M=l("el-icon-right"),F=P,q=l("el-progress"),K=l("el-upload"),L=l("el-alert"),D=l("el-image-viewer");return g(),$("div",ue,[(g(!0),$(Y,null,Z(e.url,(R,_)=>(g(),$("div",{key:_,class:"images"},[_<e.max?(g(),I(s,{key:0,src:R,style:k(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):z("v-if",!0),i("div",re,[i("div",de,[i("span",{title:"\u9884\u89C8",onClick:C=>y(_)},[n(f,null,{default:r(()=>[n(b)]),_:1})],8,pe),i("span",{title:"\u79FB\u9664",onClick:C=>p(_)},[n(f,null,{default:r(()=>[n(T)]),_:1})],8,me),S(i("span",{title:"\u5DE6\u79FB",class:N({disabled:_==0}),onClick:C=>u(_,"left")},[n(f,null,{default:r(()=>[n(A)]),_:1})],10,ge),[[O,e.url.length>1]]),S(i("span",{title:"\u53F3\u79FB",class:N({disabled:_==e.url.length-1}),onClick:C=>u(_,"right")},[n(f,null,{default:r(()=>[n(M)]),_:1})],10,he),[[O,e.url.length>1]])])])]))),128)),S(n(K,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":w,"on-progress":h,"on-success":d,drag:"",class:"images-upload"},{default:r(()=>[i("div",{class:"image-slot",style:k(`width:${e.width}px;height:${e.height}px;`)},[n(F,{name:"el-icon-plus"})],4),S(i("div",{class:"progress",style:k(`width:${e.width}px;height:${e.height}px;`)},[n(s,{src:a.value.progress.preview,style:k(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),n(q,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:a.value.progress.percent},null,8,["width","percentage"])],4),[[O,a.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),[[O,e.url.length<e.max]]),e.notip?z("v-if",!0):(g(),$("div",fe,[i("div",_e,[n(L,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u5355\u5F20\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}\uFF0C\u4E14\u56FE\u7247\u6570\u91CF\u4E0D\u8D85\u8FC7 ${e.max} \u5F20`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),a.value.imageViewerVisible?(g(),I(D,{key:1,"url-list":e.url,"initial-index":a.value.dialogImageIndex,onClose:x},null,8,["url-list","initial-index"])):z("v-if",!0)])}}});var we=j(ye,[["__scopeId","data-v-b8dc37c2"]]),V={};const E={data(){return{image:"",images:[],files:[{name:"\u6D4B\u8BD5\u6587\u4EF6.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}},mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){e.error==""?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){e.error==""?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,o){this.files.push({name:o.name,url:e.error==""?e.data.path:""}),this.$nextTick(()=>{e.error!=""&&(this.$message.warning(e.error),this.files.pop())})}}};function $e(e,o,c,v,a,y){const x=H,p=ee,u=G,w=we,h=ce;return g(),$("div",null,[n(x,{title:"\u4E0A\u4F20",content:"ImageUpload / ImagesUpload / FileUpload"}),n(u,{title:"\u5355\u56FE\u4E0A\u4F20"},{default:r(()=>[n(p,{url:a.image,"onUpdate:url":o[0]||(o[0]=d=>a.image=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess1},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u591A\u56FE\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u5F20\uFF09"},{default:r(()=>[n(w,{url:a.images,"onUpdate:url":o[1]||(o[1]=d=>a.images=d),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess2},null,8,["url","onOnSuccess"])]),_:1}),n(u,{title:"\u6587\u4EF6\u4E0A\u4F20\uFF08\u9ED8\u8BA4\u6700\u591A3\u4E2A\uFF09"},{default:r(()=>[n(h,{files:a.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:y.handleSuccess3},null,8,["files","onOnSuccess"])]),_:1})])}typeof V=="function"&&V(E);var Se=j(E,[["render",$e]]);export{Se as default};
