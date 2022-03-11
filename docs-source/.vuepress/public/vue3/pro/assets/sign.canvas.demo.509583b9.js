
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{b as e,o as t,n as i}from"./index.2c18650f.js";import{g as n,r as o,K as a,L as s,o as l,h as r,a4 as c,q as d,w as h,l as u,i as g,j as f,y as p,O as v}from"./vendor.9da56f98.js";const m=["id","onMousedown","onMousemove","onMouseup","onMouseleave","onTouchstart","onTouchmove","onTouchend"],w=n({name:"SignCanvas"}),W=Object.assign(w,{props:{image:{required:!1,type:[String],default:null},options:{required:!1,type:[Object],default:()=>null}},emits:["confirm"],setup(e,{expose:t,emit:i}){const n=e,d=o(`sign-canvas-${Math.random().toString(36).substr(2)}`),h=o(null);let u=null,g=null,f=1,p={isFullScreen:!1,isFullCover:!1,isDpr:!1,lastWriteSpeed:1,lastWriteWidth:2,lineCap:"round",lineJoin:"round",canvasWidth:600,canvasHeight:600,isShowBorder:!0,bgColor:"#fcc",borderWidth:1,borderColor:"#ff787f",writeWidth:5,maxWriteWidth:30,minWriteWidth:5,writeColor:"#101010",isSign:!1,imgType:"png"},v=null;function w(){const e=n.options;if(e)for(const t in e)p[t]=e[t];f="undefined"!=typeof window&&p.isDpr&&(window.devicePixelRatio||window.webkitDevicePixelRatio||window.mozDevicePixelRatio)||1,u=document.getElementById(d.value),g=u.getContext("2d"),u.style.background=p.bgColor,p.isFullScreen&&(p.canvasWidth=window.innerWidth||document.body.clientWidth,p.canvasHeight=window.innerHeight||document.body.clientHeight,p.isFullCover&&(u.style.position="fixed",u.style.top=0,u.style.left=0,u.style.margin=0,u.style.zIndex=20001)),u.height=p.canvasWidth,u.width=p.canvasHeight,u.width=p.canvasWidth*f,u.height=p.canvasHeight*f,u.style.width=`${p.canvasWidth}px`,u.style.height=`${p.canvasHeight}px`,p.emptyCanvas=u.toDataURL(`image/${p.imgType}`),C()}function W(e){p.isWrite=!0,p.lastWriteTime=(new Date).getTime(),p.lastPoint=e,g.beginPath(),g.strokeStyle=p.writeColor,g.lineCap=p.lineCap,g.lineJoin=p.lineJoin}function y(e){g.beginPath(),g.moveTo(p.lastPoint.x*f,p.lastPoint.y*f),g.lineTo(e.x*f,e.y*f),function(){const e=(new Date).getTime(),t=e-p.lastWriteTime;p.lastWriteTime=e;let i=p.minWriteWidth+(p.maxWriteWidth-p.minWriteWidth)*t/30;if(i<p.minWriteWidth?i=p.minWriteWidth:i>p.maxWriteWidth&&(i=p.maxWriteWidth),i=i.toFixed(2),p.isSign)g.lineWidth=p.writeWidth*f;else{const e=p.lastWriteWidth=p.lastWriteWidth/4*3+i/4;g.lineWidth=e*f}}(),g.stroke(),p.lastPoint=e,g.closePath()}function T(e){p.isWrite=!1,p.lastPoint=e,x()}function C(){g.save(),g.strokeStyle=p.writeColor,g.clearRect(0,0,u.width,u.height),g.beginPath(),g.lineWidth=p.borderWidth*f,g.strokeStyle=p.borderColor;let e=p.borderWidth/2*f;p.isShowBorder&&(g.moveTo(e,e),g.lineTo(u.width-e,e),g.lineTo(u.width-e,u.height-e),g.lineTo(e,u.height-e),g.closePath(),g.stroke()),p.isShowBorder&&!p.isSign&&(g.moveTo(0,0),g.lineTo(u.width,u.height),g.lineTo(u.width,u.height/2),g.lineTo(0,u.height/2),g.lineTo(0,u.height),g.lineTo(u.width,0),g.lineTo(u.width/2,0),g.lineTo(u.width/2,u.height),g.stroke()),i("confirm",null),g.restore()}function x(){const e=new Image;return e.src=u.toDataURL(`image/${p.imgType}`),i("confirm",e.src),e.src}function b(e){W({x:e.offsetX||e.clientX,y:e.offsetY||e.clientY})}function S(e){p.isWrite&&y({x:e.offsetX,y:e.offsetY})}function P(e){T({x:e.offsetX,y:e.offsetY})}function k(e){p.isWrite=!1,p.lastPoint={x:e.offsetX,y:e.offsetY}}function R(e){const t=e.targetTouches[0];W({x:t.clientX?t.clientX-Y().left:t.pageX-$(t.target,"left"),y:t.clientY?t.clientY-Y().top:t.pageY-$(t.target,"top")})}function D(e){const t=e.targetTouches[0],i=t.clientX?t.clientX-Y().left:t.pageX-$(t.target,"left"),n=t.clientY?t.clientY-Y().top:t.pageY-$(t.target,"top");p.isWrite&&y({x:i,y:n})}function X(e){const t=e.targetTouches,i=e.changedTouches,n=t&&t.length&&t[0]||i&&i.length&&i[0];T({x:n.clientX?n.clientX-Y().left:n.pageX-$(n.target,"left"),y:n.clientY?n.clientY-Y().top:n.pageY-$(n.target,"top")})}function Y(){return h.value.getBoundingClientRect()}function $(e,t){const i="offset"+t[0].toUpperCase()+t.substring(1);let n=e[i],o=e.offsetParent;for(;null!=o;)n+=o[i],o=o.offsetParent;return n}return a((()=>n.options),(()=>w()),{deep:!0}),s((()=>{w(),window.addEventListener("resize",(()=>{v&&clearTimeout(v),v=setTimeout((()=>{w()}),100)}))})),t({canvasClear:C,saveAsImg:x,downloadSignImg:function(e){!function(e,t){const i=document.createElementNS("http://www.w3.org/1999/xhtml","a");i.href=e,i.download=t;const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(n)}(document.getElementById(d.value).toDataURL("image/png"),e?`${e}.${p.imgType}`:`${Date.parse(new Date)}.${p.imgType}`)},dealImage:function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=300,e.width=200;const i=document.getElementById(d.value).toDataURL("image/png");t.clearRect(0,0,e.width,e.height),t.drawImage(i,0,0,e.width,e.height),e.toDataURL("image/jpeg",.6)}}),(e,t)=>(l(),r("canvas",{id:d.value,ref:h.value,class:"app-sign-canvas",onMousedown:c(b,["prevent","stop"]),onMousemove:c(S,["prevent","stop"]),onMouseup:c(P,["prevent","stop"]),onMouseleave:c(k,["prevent","stop"]),onTouchstart:c(R,["prevent","stop"]),onTouchmove:c(D,["prevent","stop"]),onTouchend:c(X,["prevent","stop"])}," 您的浏览器不支持canvas技术,请升级浏览器! ",40,m))}}),y=g("p",null,"SignCanvas 三方组件",-1),T=g("p",{style:{"margin-bottom":"0"}},"该组件可用于电子合同签订等在线签名使用场景",-1),C=p("组件仓库地址"),x=p("清除画板"),b=p("生成图片"),S=p("下载图片"),P=["src","width","height"],k={setup(e){const{proxy:n}=v(),a=o(""),s=o({isDpr:!0,lastWriteSpeed:1,lastWriteWidth:2,lineCap:"round",lineJoin:"bevel",canvasWidth:500,canvasHeight:250,isShowBorder:!1,bgColor:"#fee",borderWidth:1,borderColor:"#ff787f",writeWidth:5,maxWriteWidth:30,minWriteWidth:5,writeColor:"#101010",isSign:!0,imgType:"png"});function c(){n.$refs.signCanvasRef.canvasClear()}function p(){a.value=n.$refs.signCanvasRef.saveAsImg()}function m(){n.$refs.signCanvasRef.downloadSignImg()}return(e,n)=>{const o=u("el-button"),v=t,w=W,k=i;return l(),r("div",null,[d(v,{title:"电子签名"},{content:h((()=>[y,T])),default:h((()=>[d(o,{icon:"el-icon-link",onClick:n[0]||(n[0]=e=>{return t="https://github.com/langyuxiansheng/vue-sign-canvas",void window.open(t,"top");var t})},{default:h((()=>[C])),_:1})])),_:1}),d(k,null,{default:h((()=>[d(w,{ref:"signCanvasRef",options:s.value},null,8,["options"]),g("div",null,[d(o,{onClick:c},{default:h((()=>[x])),_:1}),d(o,{onClick:p},{default:h((()=>[b])),_:1}),d(o,{onClick:m},{default:h((()=>[S])),_:1})]),a.value?(l(),r("img",{key:0,src:a.value,width:s.value.canvasWidth,height:s.value.canvasHeight},null,8,P)):f("v-if",!0)])),_:1})])}}};"function"==typeof e&&e(k);export{k as default};
