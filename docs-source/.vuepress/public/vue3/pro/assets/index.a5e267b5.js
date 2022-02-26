
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{r as H,z as J,l as c,o as i,h as p,a0 as S,a1 as B,A as _,w as e,q as a,j as k,F as C,C as L,y as s,t as m,i as D,u as K,p as M,k as Q,O as W}from"./vendor.ee7254f0.js";import{_ as X,o as h}from"./index.a1178b85.js";const Y=d=>(M("data-v-78f6547a"),d=d(),Q(),d),Z={key:0},ee=s("\u7F16 \u8F91"),te={key:0},le={key:0},ae={key:0},oe={key:0},ne=s("\u5220 \u9664"),ie=Y(()=>D("span",null,null,-1)),de={key:0,style:{padding:"10px"}},se=s("\u65B0\u589E\u4E00\u6761\u8FD0\u8D39\u6A21\u7248"),ue=s("\u4E3A\u6307\u5B9A\u5730\u533A\u8BBE\u7F6E\u8FD0\u8D39\u6A21\u7248"),re={class:"filter"},ce=s("\u5168\u90E8"),_e=s("\u534E\u5317\u5730\u533A"),fe=s("\u4E1C\u5317\u5730\u533A"),pe=s("\u534E\u4E1C\u5730\u533A"),me=s("\u534E\u4E2D\u5730\u533A"),he=s("\u534E\u5357\u5730\u533A"),ye=s("\u897F\u5357\u5730\u533A"),ve=s("\u897F\u5317\u5730\u533A"),be=s("\u81EA\u6CBB\u533A"),ge=s("\u76F4\u8F96\u5E02"),ke=s("\u786E \u5B9A"),we={props:{readonly:{type:Boolean,default:!1},data:{type:Array,default:function(){return[]}},type:{type:Number,default:1}},emits:["update:data"],setup(d,{emit:w}){const y=d,{proxy:I}=W(),n=H({index:"",visible:!1,filter:"",checkList:[],disableList:[]}),N=J(()=>{let o;switch(n.value.filter){case"":o=h;break;case"autonomousRegion":o=h.filter(l=>l.autonomousRegion);break;case"provinceLevelCity":o=h.filter(l=>l.provinceLevelCity);break;default:o=h.filter(l=>l.region==n.value.filter)}return o});function U(){n.value.index="",n.value.checkList=[],n.value.disableList=$(),n.value.visible=!0}function R(o){if(n.value.checkList.length===0)I.$message({message:"\u8BF7\u52FE\u9009\u533A\u57DF",type:"warning"});else{let l=y.data;o!==""?l[o].list=n.value.checkList:l.push({list:n.value.checkList,first_step:"",first_price:"",continued_step:"",continued_price:""}),w("update:data",l),n.value.visible=!1}}function j(o){n.value.index=o,n.value.checkList=y.data[o].list,n.value.disableList=$(o),n.value.visible=!0}function A(o){let l=y.data;l.splice(o,1),w("update:data",l)}function O(o,l){let u=y.data;u[o].list.splice(u[o].list.indexOf(l),1),u[o].list.length===0&&u.splice(o,1),w("update:data",u)}function z(o){let l="";for(const u in h)h[u].code===o&&(l=h[u].name);return l}function $(o){let l=[];for(let u=0;u<y.data.length;u++)o!==u&&(l=l.concat(y.data[u].list));return l}return(o,l)=>{const u=c("el-tag"),V=c("el-col"),b=c("el-button"),F=c("el-row"),v=c("el-table-column"),g=c("el-input"),P=c("el-table"),f=c("el-radio-button"),q=c("el-radio-group"),E=c("el-checkbox"),T=c("el-checkbox-group"),G=c("el-dialog");return i(),p("div",null,[d.readonly&&d.data.length==0?k("v-if",!0):S((i(),_(P,{key:0,data:d.data,border:"",class:"freight"},{empty:e(()=>[ie]),append:e(()=>[d.readonly?k("v-if",!0):(i(),p("div",de,[a(b,{type:"primary",size:"small",plain:"",style:{width:"100%"},onClick:U},{default:e(()=>[se]),_:1})]))]),default:e(()=>[a(v,{label:"\u8FD0\u9001\u5230"},{default:e(t=>[d.readonly?(i(),p("div",Z,[(i(!0),p(C,null,L(t.row.list,(r,x)=>(i(),_(u,{key:x,type:"info"},{default:e(()=>[s(m(z(r)),1)]),_:2},1024))),128))])):(i(),_(F,{key:1,type:"flex",align:"middle",justify:"space-between"},{default:e(()=>[a(V,null,{default:e(()=>[(i(!0),p(C,null,L(t.row.list,(r,x)=>(i(),_(u,{key:x,"disable-transitions":!0,type:"info",closable:"",onClose:Ve=>O(t.$index,r)},{default:e(()=>[s(m(z(r)),1)]),_:2},1032,["onClose"]))),128))]),_:2},1024),a(V,{style:{width:"100px","text-align":"right"}},{default:e(()=>[a(b,{size:"small",plain:"",onClick:r=>j(t.$index)},{default:e(()=>[ee]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))]),_:1}),a(v,{label:d.type==1?"\u9996\u4EF6\u6570\uFF08\u4EF6\uFF09":"\u9996\u91CD\u91CF\uFF08kg\uFF09",width:"150",align:"center"},{default:e(t=>[d.readonly?(i(),p("span",te,m(t.row.first_step),1)):(i(),_(g,{key:1,modelValue:t.row.first_step,"onUpdate:modelValue":r=>t.row.first_step=r,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1},8,["label"]),a(v,{label:"\u9996\u8D39\uFF08\u5143\uFF09",width:"150",align:"center"},{default:e(t=>[d.readonly?(i(),p("span",le,m(t.row.first_price),1)):(i(),_(g,{key:1,modelValue:t.row.first_price,"onUpdate:modelValue":r=>t.row.first_price=r,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1}),a(v,{label:d.type==1?"\u7EED\u4EF6\u6570\uFF08\u4EF6\uFF09":"\u7EED\u91CD\u91CF\uFF08kg\uFF09",width:"150",align:"center"},{default:e(t=>[d.readonly?(i(),p("span",ae,m(t.row.continued_step),1)):(i(),_(g,{key:1,modelValue:t.row.continued_step,"onUpdate:modelValue":r=>t.row.continued_step=r,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1},8,["label"]),a(v,{label:"\u7EED\u8D39\uFF08\u5143\uFF09",width:"150",align:"center"},{default:e(t=>[d.readonly?(i(),p("span",oe,m(t.row.continued_price),1)):(i(),_(g,{key:1,modelValue:t.row.continued_price,"onUpdate:modelValue":r=>t.row.continued_price=r,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1}),d.readonly?k("v-if",!0):(i(),_(v,{key:0,label:"\u64CD\u4F5C",width:"100",align:"center"},{default:e(t=>[a(b,{type:"danger",size:"small",plain:"",onClick:r=>A(t.$index)},{default:e(()=>[ne]),_:2},1032,["onClick"])]),_:1}))]),_:1},8,["data"])),[[B,d.data.length!=0]]),d.readonly?k("v-if",!0):S((i(),_(b,{key:1,type:"primary",size:"default",plain:"",onClick:U},{default:e(()=>[ue]),_:1},512)),[[B,d.data.length==0]]),a(G,{modelValue:n.value.visible,"onUpdate:modelValue":l[3]||(l[3]=t=>n.value.visible=t),title:"\u9009\u62E9\u5730\u533A",width:"800px","custom-class":"freight-dialog","append-to-body":"",onClosed:l[4]||(l[4]=t=>n.value.filter="")},{footer:e(()=>[a(b,{type:"primary",onClick:l[2]||(l[2]=t=>R(n.value.index))},{default:e(()=>[ke]),_:1})]),default:e(()=>[D("div",re,[a(q,{modelValue:n.value.filter,"onUpdate:modelValue":l[0]||(l[0]=t=>n.value.filter=t),size:"small"},{default:e(()=>[a(f,{label:""},{default:e(()=>[ce]),_:1}),a(f,{label:"north"},{default:e(()=>[_e]),_:1}),a(f,{label:"northeast"},{default:e(()=>[fe]),_:1}),a(f,{label:"east"},{default:e(()=>[pe]),_:1}),a(f,{label:"central"},{default:e(()=>[me]),_:1}),a(f,{label:"south"},{default:e(()=>[he]),_:1}),a(f,{label:"southwest"},{default:e(()=>[ye]),_:1}),a(f,{label:"northwest"},{default:e(()=>[ve]),_:1}),a(f,{label:"autonomousRegion"},{default:e(()=>[be]),_:1}),a(f,{label:"provinceLevelCity"},{default:e(()=>[ge]),_:1})]),_:1},8,["modelValue"])]),a(T,{modelValue:n.value.checkList,"onUpdate:modelValue":l[1]||(l[1]=t=>n.value.checkList=t),style:{"margin-left":"50px"}},{default:e(()=>[a(F,null,{default:e(()=>[(i(!0),p(C,null,L(K(N),(t,r)=>(i(),_(V,{key:r,span:6},{default:e(()=>[a(E,{label:t.code,disabled:n.value.disableList.includes(t.code)},{default:e(()=>[s(m(t.name),1)]),_:2},1032,["label","disabled"])]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}};var Le=X(we,[["__scopeId","data-v-78f6547a"]]);export{Le as default};
