
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e,c as l,b as a,w as d,j as o,n as t,ac as u,q as r,z as i,ad as m}from"./index.992324c5.js";import s from"./alert.9821d680.js";const V={components:{Alert:s},data:()=>({radio:"1",radio2:"选中且禁用",radio3:3,radio4:"上海",radio5:"1"})},f=i("备选项"),n=i("备选项"),b=i("备选项"),_=i("备选项"),p=i("备选项"),c=i("备选项"),U=i("备选项"),j=i("备选项1"),v=i("备选项2");"function"==typeof o&&o(V);var x=e(V,[["render",function(e,o,i,s,V,x){const A=t("Alert"),g=m,q=t("el-radio"),w=u,y=t("el-radio-group"),z=t("el-radio-button");return r(),l("div",null,[a(A),a(g,{title:"单选框"}),a(w,{title:"基础用法",class:"demo"},{default:d((()=>[a(q,{modelValue:V.radio,"onUpdate:modelValue":o[0]||(o[0]=e=>V.radio=e),label:"1"},{default:d((()=>[f])),_:1},8,["modelValue"]),a(q,{modelValue:V.radio,"onUpdate:modelValue":o[1]||(o[1]=e=>V.radio=e),label:"2"},{default:d((()=>[n])),_:1},8,["modelValue"])])),_:1}),a(w,{title:"禁用状态",class:"demo"},{default:d((()=>[a(q,{modelValue:V.radio2,"onUpdate:modelValue":o[2]||(o[2]=e=>V.radio2=e),disabled:"",label:"禁用"},{default:d((()=>[b])),_:1},8,["modelValue"]),a(q,{modelValue:V.radio2,"onUpdate:modelValue":o[3]||(o[3]=e=>V.radio2=e),disabled:"",label:"选中且禁用"},{default:d((()=>[_])),_:1},8,["modelValue"])])),_:1}),a(w,{title:"单选框组",class:"demo"},{default:d((()=>[a(y,{modelValue:V.radio3,"onUpdate:modelValue":o[4]||(o[4]=e=>V.radio3=e)},{default:d((()=>[a(q,{label:3},{default:d((()=>[p])),_:1}),a(q,{label:6},{default:d((()=>[c])),_:1}),a(q,{label:9},{default:d((()=>[U])),_:1})])),_:1},8,["modelValue"])])),_:1}),a(w,{title:"按钮样式",class:"demo"},{default:d((()=>[a(y,{modelValue:V.radio4,"onUpdate:modelValue":o[5]||(o[5]=e=>V.radio4=e)},{default:d((()=>[a(z,{label:"上海"}),a(z,{label:"北京"}),a(z,{label:"广州"}),a(z,{label:"深圳"})])),_:1},8,["modelValue"])])),_:1}),a(w,{title:"带有边框",class:"demo"},{default:d((()=>[a(q,{modelValue:V.radio5,"onUpdate:modelValue":o[6]||(o[6]=e=>V.radio5=e),label:"1",border:""},{default:d((()=>[j])),_:1},8,["modelValue"]),a(q,{modelValue:V.radio5,"onUpdate:modelValue":o[7]||(o[7]=e=>V.radio5=e),label:"2",border:""},{default:d((()=>[v])),_:1},8,["modelValue"])])),_:1})])}]]);export{x as default};