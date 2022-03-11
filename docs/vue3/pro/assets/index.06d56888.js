
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.442bda72.js";import l from"./index.eb17c7b3.js";import{_ as a}from"./index.2c18650f.js";import{r as d,L as t,l as o,an as u,a0 as r,o as s,h as m,q as p,w as f,i,y as n,t as v,O as _}from"./vendor.9da56f98.js";const c=n("按件数"),V=n("按重量"),g={class:"freight"},b=n("默认运费"),y=n("首费"),x=n("元"),U=n("续费"),h=n("元"),$=n("启用"),j=n("停用");var k=a({props:{id:{type:[Number,String],default:""}},setup(a,{expose:k}){const w=a,{proxy:z}=_(),L=d({loading:!1,form:{id:w.id,title:"",address:[],type:1,status:!0,first_step:"",first_price:"",continued_step:"",continued_price:"",infos:[]},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]}});return t((()=>{""!=L.value.form.id&&(L.value.loading=!0,z.$api.get("pages_example/delivery/detail",{baseURL:"/mock/",params:{id:L.value.form.id}}).then((e=>{L.value.loading=!1,Object.assign(L.value.form,e.data)})))})),k({submit(e){""==L.value.form.id?z.$refs.form.validate((l=>{l&&z.$api.post("pages_example/delivery/create",L.value.form,{baseURL:"/mock/"}).then((()=>{z.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):z.$refs.form.validate((l=>{l&&z.$api.post("pages_example/delivery/edit",L.value.form,{baseURL:"/mock/"}).then((()=>{z.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(a,d)=>{const t=o("el-input"),_=o("el-form-item"),k=e,w=o("el-radio-button"),z=o("el-radio-group"),R=o("el-col"),q=o("el-row"),O=o("el-card"),I=o("el-form"),N=u("loading");return r((s(),m("div",null,[p(I,{ref:"form",model:L.value.form,rules:L.value.rules,"label-width":"120px","label-suffix":"："},{default:f((()=>[p(_,{label:"名称",prop:"title"},{default:f((()=>[p(t,{modelValue:L.value.form.title,"onUpdate:modelValue":d[0]||(d[0]=e=>L.value.form.title=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),p(_,{label:"发货地址",prop:"address"},{default:f((()=>[p(k,{modelValue:L.value.form.address,"onUpdate:modelValue":d[1]||(d[1]=e=>L.value.form.address=e)},null,8,["modelValue"])])),_:1}),p(_,{label:"计价方式"},{default:f((()=>[p(z,{modelValue:L.value.form.type,"onUpdate:modelValue":d[2]||(d[2]=e=>L.value.form.type=e)},{default:f((()=>[p(w,{label:1},{default:f((()=>[c])),_:1}),p(w,{label:2},{default:f((()=>[V])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(_,{label:"运费模版"},{default:f((()=>[i("div",g,[p(O,{shadow:"never"},{header:f((()=>[b])),default:f((()=>[p(q,{gutter:20},{default:f((()=>[p(R,{md:6},{default:f((()=>[p(t,{modelValue:L.value.form.first_step,"onUpdate:modelValue":d[3]||(d[3]=e=>L.value.form.first_step=e),size:"small"},{prepend:f((()=>[n(v(1==L.value.form.type?"首件":"首重"),1)])),append:f((()=>[n(v(1==L.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),p(R,{md:6},{default:f((()=>[p(t,{modelValue:L.value.form.first_price,"onUpdate:modelValue":d[4]||(d[4]=e=>L.value.form.first_price=e),size:"small"},{prepend:f((()=>[y])),append:f((()=>[x])),_:1},8,["modelValue"])])),_:1}),p(R,{md:6},{default:f((()=>[p(t,{modelValue:L.value.form.continued_step,"onUpdate:modelValue":d[5]||(d[5]=e=>L.value.form.continued_step=e),size:"small"},{prepend:f((()=>[n(v(1==L.value.form.type?"续件":"续重"),1)])),append:f((()=>[n(v(1==L.value.form.type?"件":"kg"),1)])),_:1},8,["modelValue"])])),_:1}),p(R,{md:6},{default:f((()=>[p(t,{modelValue:L.value.form.continued_price,"onUpdate:modelValue":d[6]||(d[6]=e=>L.value.form.continued_price=e),size:"small"},{prepend:f((()=>[U])),append:f((()=>[h])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(q,null,{default:f((()=>[p(R,{span:24},{default:f((()=>[p(l,{data:L.value.form.infos,type:L.value.form.type},null,8,["data","type"])])),_:1})])),_:1})])])),_:1}),p(_,{label:"是否启用"},{default:f((()=>[p(z,{modelValue:L.value.form.status,"onUpdate:modelValue":d[7]||(d[7]=e=>L.value.form.status=e)},{default:f((()=>[p(w,{label:!0},{default:f((()=>[$])),_:1}),p(w,{label:!1},{default:f((()=>[j])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[N,L.value.loading]])}}},[["__scopeId","data-v-30860e7e"]]);export{k as default};
