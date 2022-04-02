
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as e}from"./index.ef647e37.js";import{_ as l,d as a,u as t,F as n,r as d,G as s,o as u,V as o,c as i,e as m,f as c,A as p,l as v,n as b,q as r,b as V,g as f,h as g,i as h,H as y,y as _,p as U,k as M,W as k}from"./index.b6307f63.js";const q=e=>(U("data-v-6b2e3654"),e=e(),M(),e),P={class:"container"},S=_("导航栏模式"),w={key:1,class:"menu-mode"},z=_("导航栏"),C={class:"setting-item"},x=q((()=>V("div",{class:"label"},"是否折叠",-1))),j={class:"setting-item"},A={class:"label"},F=_(" 切换跳转 "),O={class:"setting-item"},B={class:"label"},J=_(" 保持展开一个 "),N=_("顶栏"),T={class:"setting-item"},D=q((()=>V("div",{class:"label"},"是否固定",-1))),R={key:2,class:"setting-item"},$=q((()=>V("div",{class:"label"},"折叠按钮",-1))),E={key:3,class:"setting-item"},G=q((()=>V("div",{class:"label"},"面包屑导航",-1))),H={class:"setting-item"},I={class:"label"},W=_(" 导航栏搜索 "),K={key:4,class:"setting-item"},L={class:"label"},Q=_(" 全屏 "),X={class:"setting-item"},Y={class:"label"},Z=_(" 页面刷新 "),ee=_("底部版权"),le={class:"setting-item"},ae=q((()=>V("div",{class:"label"},"是否启用",-1))),te={class:"setting-item"},ne=q((()=>V("div",{class:"label"},"日期",-1))),de={class:"setting-item"},se=q((()=>V("div",{class:"label"},"公司",-1))),ue={class:"setting-item"},oe=q((()=>V("div",{class:"label"},"网址",-1))),ie=_("控制台"),me={class:"setting-item"},ce={class:"label"},pe=_(" 是否开启 "),ve={class:"setting-item"},be=q((()=>V("div",{class:"label"},"控制台名称",-1))),re=_("其它"),Ve={class:"setting-item"},fe={class:"label"},ge=_(" 组件尺寸 "),he=_("较大"),ye=_("默认"),_e=_("稍小"),Ue={class:"setting-item"},Me=q((()=>V("div",{class:"label"},"是否启用权限",-1))),ke={class:"setting-item"},qe={class:"label"},Pe=_(" 载入进度条 "),Se={class:"setting-item"},we={class:"label"},ze=_(" 动态标题 "),Ce={key:0,class:"action-buttons"},xe=_("复制配置"),je=a({name:"AppSetting"});var Ae=l(Object.assign(je,{setup(l){const{proxy:a}=p(),_=v(),U=t(),M=n(),q=d(!1),je=d(k);s((()=>je),(()=>{U.updateThemeSetting(je.value),M.setActived(0),"single"!==je.value.menu.menuMode&&M.setActived(_.fullPath)}),{deep:!0}),u((()=>{a.$eventBus.on("global-theme-toggle",(()=>{q.value=!q.value}))}));const{copy:Ae,copied:Fe,isSupported:Oe}=o();function Be(){Ae(JSON.stringify(je.value,null,4))}return s(Fe,(e=>{e&&a.$message.success("复制成功，请粘贴到 src/settings.custom.json 文件中！")})),(l,a)=>{const t=b("el-alert"),n=b("el-divider"),d=e,s=b("el-tooltip"),u=b("el-switch"),o=b("el-input"),p=b("el-radio-button"),v=b("el-radio-group"),_=b("el-button"),M=b("el-drawer");return r(),i("div",null,[m(M,{modelValue:q.value,"onUpdate:modelValue":a[22]||(a[22]=e=>q.value=e),title:"应用配置",direction:"rtl",size:350,"custom-class":"flex-container"},{default:c((()=>[V("div",P,[m(t,{title:"应用配置可实时预览效果，但仅是临时生效，要想真正作用于项目，可以点击下方的“复制配置”按钮，将配置粘贴到 src/settings.custom.json 中即可，或者也可在 src/settings.js 中直接修改默认配置。同时建议在生产环境隐藏应用配置功能。",type:"error",closable:!1}),"pc"===f(U).mode?(r(),g(n,{key:0},{default:c((()=>[S])),_:1})):h("v-if",!0),"pc"===f(U).mode?(r(),i("div",w,[m(s,{content:"侧边栏模式（含主导航）",placement:"top","show-after":500},{default:c((()=>[V("div",{class:y(["mode mode-side",{active:"side"===je.value.menu.menuMode}]),onClick:a[0]||(a[0]=e=>je.value.menu.menuMode="side")},[m(d,{name:"el-icon-check"})],2)])),_:1}),m(s,{content:"顶部模式",placement:"top","show-after":500},{default:c((()=>[V("div",{class:y(["mode mode-head",{active:"head"===je.value.menu.menuMode}]),onClick:a[1]||(a[1]=e=>je.value.menu.menuMode="head")},[m(d,{name:"el-icon-check"})],2)])),_:1}),m(s,{content:"侧边栏模式（不含主导航）",placement:"top","show-after":500},{default:c((()=>[V("div",{class:y(["mode mode-single",{active:"single"===je.value.menu.menuMode}]),onClick:a[2]||(a[2]=e=>je.value.menu.menuMode="single")},[m(d,{name:"el-icon-check"})],2)])),_:1})])):h("v-if",!0),m(n,null,{default:c((()=>[z])),_:1}),V("div",C,[x,m(u,{modelValue:je.value.menu.subMenuCollapse,"onUpdate:modelValue":a[3]||(a[3]=e=>je.value.menu.subMenuCollapse=e)},null,8,["modelValue"])]),V("div",j,[V("div",A,[F,m(s,{content:"开启该功能后，切换侧边栏时，页面自动跳转至该侧边栏导航下第一个路由地址",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.menu.switchMainMenuAndPageJump,"onUpdate:modelValue":a[4]||(a[4]=e=>je.value.menu.switchMainMenuAndPageJump=e),disabled:["single"].includes(je.value.menu.menuMode)},null,8,["modelValue","disabled"])]),V("div",O,[V("div",B,[J,m(s,{content:"开启该功能后，侧边栏只保持一个子菜单的展开",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.menu.subMenuUniqueOpened,"onUpdate:modelValue":a[5]||(a[5]=e=>je.value.menu.subMenuUniqueOpened=e)},null,8,["modelValue"])]),m(n,null,{default:c((()=>[N])),_:1}),V("div",T,[D,m(u,{modelValue:je.value.topbar.fixed,"onUpdate:modelValue":a[6]||(a[6]=e=>je.value.topbar.fixed=e)},null,8,["modelValue"])]),"pc"===f(U).mode?(r(),i("div",R,[$,m(u,{modelValue:je.value.topbar.enableSidebarCollapse,"onUpdate:modelValue":a[7]||(a[7]=e=>je.value.topbar.enableSidebarCollapse=e)},null,8,["modelValue"])])):h("v-if",!0),"pc"===f(U).mode?(r(),i("div",E,[G,m(u,{modelValue:je.value.topbar.enableBreadcrumb,"onUpdate:modelValue":a[8]||(a[8]=e=>je.value.topbar.enableBreadcrumb=e)},null,8,["modelValue"])])):h("v-if",!0),V("div",H,[V("div",I,[W,m(s,{content:"对导航栏进行快捷搜索",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.topbar.enableNavSearch,"onUpdate:modelValue":a[9]||(a[9]=e=>je.value.topbar.enableNavSearch=e)},null,8,["modelValue"])]),"pc"===f(U).mode?(r(),i("div",K,[V("div",L,[Q,m(s,{content:"该功能使用场景极少，用户习惯于通过窗口“最大化”功能来扩大显示区域，以显示更多内容，并且使用 F11 键也可以进入全屏效果",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.topbar.enableFullscreen,"onUpdate:modelValue":a[10]||(a[10]=e=>je.value.topbar.enableFullscreen=e)},null,8,["modelValue"])])):h("v-if",!0),V("div",X,[V("div",Y,[Z,m(s,{content:"开启时会阻止原生 F5 键刷新功能，并采用框架提供的刷新模式进行页面刷新",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.topbar.enablePageReload,"onUpdate:modelValue":a[11]||(a[11]=e=>je.value.topbar.enablePageReload=e)},null,8,["modelValue"])]),m(n,null,{default:c((()=>[ee])),_:1}),V("div",le,[ae,m(u,{modelValue:je.value.copyright.enable,"onUpdate:modelValue":a[12]||(a[12]=e=>je.value.copyright.enable=e)},null,8,["modelValue"])]),V("div",te,[ne,m(o,{modelValue:je.value.copyright.dates,"onUpdate:modelValue":a[13]||(a[13]=e=>je.value.copyright.dates=e),size:"small",disabled:!je.value.copyright.enable},null,8,["modelValue","disabled"])]),V("div",de,[se,m(o,{modelValue:je.value.copyright.company,"onUpdate:modelValue":a[14]||(a[14]=e=>je.value.copyright.company=e),size:"small",disabled:!je.value.copyright.enable},null,8,["modelValue","disabled"])]),V("div",ue,[oe,m(o,{modelValue:je.value.copyright.website,"onUpdate:modelValue":a[15]||(a[15]=e=>je.value.copyright.website=e),size:"small",disabled:!je.value.copyright.enable},null,8,["modelValue","disabled"])]),m(n,null,{default:c((()=>[ie])),_:1}),V("div",me,[V("div",ce,[pe,m(s,{content:"该功能开启时，登录成功默认进入控制台页面，反之则默认进入导航栏里第一个导航页面",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.dashboard.enable,"onUpdate:modelValue":a[16]||(a[16]=e=>je.value.dashboard.enable=e)},null,8,["modelValue"])]),V("div",ve,[be,m(o,{modelValue:je.value.dashboard.title,"onUpdate:modelValue":a[17]||(a[17]=e=>je.value.dashboard.title=e),size:"small"},null,8,["modelValue"])]),m(n,null,{default:c((()=>[re])),_:1}),V("div",Ve,[V("div",fe,[ge,m(s,{content:"全局设置 Element Plus 组件的默认尺寸大小",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(v,{modelValue:je.value.app.elementSize,"onUpdate:modelValue":a[18]||(a[18]=e=>je.value.app.elementSize=e),size:"small"},{default:c((()=>[m(p,{label:"large"},{default:c((()=>[he])),_:1}),m(p,{label:"default"},{default:c((()=>[ye])),_:1}),m(p,{label:"small"},{default:c((()=>[_e])),_:1})])),_:1},8,["modelValue"])]),V("div",Ue,[Me,m(u,{modelValue:je.value.app.enablePermission,"onUpdate:modelValue":a[19]||(a[19]=e=>je.value.app.enablePermission=e)},null,8,["modelValue"])]),V("div",ke,[V("div",qe,[Pe,m(s,{content:"该功能开启时，跳转路由会看到页面顶部有进度条",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.app.enableProgress,"onUpdate:modelValue":a[20]||(a[20]=e=>je.value.app.enableProgress=e)},null,8,["modelValue"])]),V("div",Se,[V("div",we,[ze,m(s,{content:"该功能开启时，页面标题会显示当前路由标题，格式为“页面标题 - 网站名称”；关闭时则显示网站名称，网站名称在项目根目录下 .env.* 文件里配置",placement:"top"},{default:c((()=>[m(d,{name:"el-icon-question-filled"})])),_:1})]),m(u,{modelValue:je.value.app.enableDynamicTitle,"onUpdate:modelValue":a[21]||(a[21]=e=>je.value.app.enableDynamicTitle=e)},null,8,["modelValue"])])]),f(Oe)?(r(),i("div",Ce,[m(_,{icon:"el-icon-document-copy",type:"primary",onClick:Be},{default:c((()=>[xe])),_:1})])):h("v-if",!0)])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-6b2e3654"]]);export{Ae as default};
