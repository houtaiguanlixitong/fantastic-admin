
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as j}from"./index.4b1eed8b.js";import{_ as N}from"./index.9ed489d8.js";import{_ as z}from"./index.abc7a202.js";import{_ as A}from"./index.64e7900a.js";import{l as C,F as e,A as t,D as u,o as F,m as v,$ as s}from"./vendor.bcd7a662.js";const D={data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},E=v("p",null,"FixedActionBar",-1),T=v("p",{style:{"margin-bottom":"0"}},"\u907F\u514D\u56E0\u9875\u9762\u8FC7\u957F\u5BFC\u81F4\u64CD\u4F5C\u6309\u94AE\u9700\u8981\u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8\u624D\u80FD\u64CD\u4F5C\uFF0C\u4F8B\u5982\u8868\u5355\u9875",-1),q=s("-"),G=s("-"),H=s("-"),I=s("\u7ACB\u5373\u521B\u5EFA"),J=s("\u53D6\u6D88");function K(L,o,M,O,l,P){const x=z,r=u("el-input"),n=u("el-form-item"),p=u("el-option"),_=u("el-select"),i=u("el-date-picker"),a=u("el-col"),V=u("el-time-picker"),b=u("el-switch"),d=u("el-checkbox"),y=u("el-checkbox-group"),f=u("el-radio"),g=u("el-radio-group"),c=u("el-form"),w=u("el-row"),k=N,U=u("el-button"),B=j;return F(),C("div",null,[e(x,{title:"\u56FA\u5B9A\u5E95\u90E8\u64CD\u4F5C\u680F",content:"\u907F\u514D\u56E0\u9875\u9762\u8FC7\u957F\u5BFC\u81F4\u64CD\u4F5C\u6309\u94AE\u9700\u8981\u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8\u624D\u80FD\u64CD\u4F5C\uFF0C\u4F8B\u5982\u8868\u5355\u9875"},{content:t(()=>[E,T]),_:1}),e(k,null,{default:t(()=>[e(w,null,{default:t(()=>[e(a,{md:24,lg:12},{default:t(()=>[e(c,{ref:"form",model:l.form,"label-width":"120px"},{default:t(()=>[e(n,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:t(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[0]||(o[0]=m=>l.form.name=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[1]||(o[1]=m=>l.form.region=m),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:t(()=>[e(a,{span:11},{default:t(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[2]||(o[2]=m=>l.form.date1=m),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:t(()=>[q]),_:1}),e(a,{span:11},{default:t(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[3]||(o[3]=m=>l.form.date2=m),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"\u5373\u65F6\u914D\u9001"},{default:t(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[4]||(o[4]=m=>l.form.delivery=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:t(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[5]||(o[5]=m=>l.form.type=m)},{default:t(()=>[e(d,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(d,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:t(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[6]||(o[6]=m=>l.form.resource=m)},{default:t(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:t(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[7]||(o[7]=m=>l.form.desc=m),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:t(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[8]||(o[8]=m=>l.form.name=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[9]||(o[9]=m=>l.form.region=m),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:t(()=>[e(a,{span:11},{default:t(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[10]||(o[10]=m=>l.form.date1=m),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:t(()=>[G]),_:1}),e(a,{span:11},{default:t(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[11]||(o[11]=m=>l.form.date2=m),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"\u5373\u65F6\u914D\u9001"},{default:t(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[12]||(o[12]=m=>l.form.delivery=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:t(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[13]||(o[13]=m=>l.form.type=m)},{default:t(()=>[e(d,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(d,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:t(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[14]||(o[14]=m=>l.form.resource=m)},{default:t(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:t(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[15]||(o[15]=m=>l.form.desc=m),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u540D\u79F0"},{default:t(()=>[e(r,{modelValue:l.form.name,"onUpdate:modelValue":o[16]||(o[16]=m=>l.form.name=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(_,{modelValue:l.form.region,"onUpdate:modelValue":o[17]||(o[17]=m=>l.form.region=m),placeholder:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(p,{label:"\u533A\u57DF\u4E00",value:"shanghai"}),e(p,{label:"\u533A\u57DF\u4E8C",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u65F6\u95F4"},{default:t(()=>[e(a,{span:11},{default:t(()=>[e(i,{modelValue:l.form.date1,"onUpdate:modelValue":o[18]||(o[18]=m=>l.form.date1=m),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(a,{class:"line",span:2},{default:t(()=>[H]),_:1}),e(a,{span:11},{default:t(()=>[e(V,{modelValue:l.form.date2,"onUpdate:modelValue":o[19]||(o[19]=m=>l.form.date2=m),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"\u5373\u65F6\u914D\u9001"},{default:t(()=>[e(b,{modelValue:l.form.delivery,"onUpdate:modelValue":o[20]||(o[20]=m=>l.form.delivery=m)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u6027\u8D28"},{default:t(()=>[e(y,{modelValue:l.form.type,"onUpdate:modelValue":o[21]||(o[21]=m=>l.form.type=m)},{default:t(()=>[e(d,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(d,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(d,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7279\u6B8A\u8D44\u6E90"},{default:t(()=>[e(g,{modelValue:l.form.resource,"onUpdate:modelValue":o[22]||(o[22]=m=>l.form.resource=m)},{default:t(()=>[e(f,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(f,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6D3B\u52A8\u5F62\u5F0F"},{default:t(()=>[e(r,{modelValue:l.form.desc,"onUpdate:modelValue":o[23]||(o[23]=m=>l.form.desc=m),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(U,{type:"primary",size:"large"},{default:t(()=>[I]),_:1}),e(U,{size:"large"},{default:t(()=>[J]),_:1})]),_:1})])}var Y=A(D,[["render",K]]);export{Y as default};
