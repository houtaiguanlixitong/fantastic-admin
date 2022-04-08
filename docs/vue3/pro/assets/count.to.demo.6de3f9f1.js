
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as t,q as e,c as a,t as l,b as i,w as r,j as o,n as s,ad as n,ac as u,z as d}from"./index.992324c5.js";let m=0;const f="webkit moz ms o".split(" ");let p,c;if("undefined"==typeof window)p=function(){},c=function(){};else{let t;p=window.requestAnimationFrame,c=window.cancelAnimationFrame;for(let e=0;e<f.length&&(!p||!c);e++)t=f[e],p=p||window[t+"RequestAnimationFrame"],c=c||window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];p&&c||(p=function(t){const e=(new Date).getTime(),a=Math.max(0,16-(e-m)),l=window.setTimeout((()=>{t(e+a)}),a);return m=e+a,l},c=function(t){window.clearTimeout(t)})}var h=t({props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:t=>t>=0},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:(t,e,a,l)=>a*(1-Math.pow(2,-10*t/l))*1024/1023+e}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=p(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){c(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,p(this.count)},reset(){this.startTime=null,c(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(t){this.startTime||(this.startTime=t),this.timestamp=t;const e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=p(this.count):this.$emit("callback")},isNumber:t=>!isNaN(parseFloat(t)),formatNumber(t){t=t.toFixed(this.decimals);const e=(t+="").split(".");let a=e[0];const l=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+l+this.suffix}},destroyed(){c(this.rAF)}},[["render",function(t,i,r,o,s,n){return e(),a("span",null,l(s.displayValue),1)}]]);function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}h.unmounted=h.destroyed,Reflect.deleteProperty(h,"destroyed");const y={components:{CountTo:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){V(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({name:"CountTo",emits:["callback","mountedCallback"]},h)},data:()=>({form:{startVal:0,endVal:2017,duration:4e3,decimals:0,separator:",",prefix:"¥ ",suffix:" 元"}}),methods:{start(){this.$refs["count-to"].start()},pause(){this.$refs["count-to"].pauseResume()},open(t){window.open(t,"top")}}},w=d("组件仓库地址"),x=d("开始"),g=d("暂停");"function"==typeof o&&o(y);var D=t(y,[["render",function(t,l,o,d,m,f){const p=s("el-button"),c=n,h=s("count-to"),V=s("el-input-number"),b=s("el-form-item"),y=s("el-input"),D=s("el-form"),O=u;return e(),a("div",null,[i(c,{title:"计数器",content:"CountTo 三方组件"},{default:r((()=>[i(p,{icon:"el-icon-link",onClick:l[0]||(l[0]=t=>f.open("https://github.com/xiaofan9/vue-count-to"))},{default:r((()=>[w])),_:1})])),_:1}),i(O,null,{default:r((()=>[i(h,{ref:"count-to",class:"count-to","start-val":m.form.startVal,"end-val":m.form.endVal,duration:m.form.duration,decimals:m.form.decimals,separator:m.form.separator,prefix:m.form.prefix,suffix:m.form.suffix,autoplay:!1},null,8,["start-val","end-val","duration","decimals","separator","prefix","suffix"]),i(D,{ref:"form",model:m.form,size:"default","label-width":"80px",style:{width:"300px"}},{default:r((()=>[i(b,{label:"startVal"},{default:r((()=>[i(V,{modelValue:m.form.startVal,"onUpdate:modelValue":l[1]||(l[1]=t=>m.form.startVal=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"endVal"},{default:r((()=>[i(V,{modelValue:m.form.endVal,"onUpdate:modelValue":l[2]||(l[2]=t=>m.form.endVal=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"duration"},{default:r((()=>[i(V,{modelValue:m.form.duration,"onUpdate:modelValue":l[3]||(l[3]=t=>m.form.duration=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"decimals"},{default:r((()=>[i(V,{modelValue:m.form.decimals,"onUpdate:modelValue":l[4]||(l[4]=t=>m.form.decimals=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"separator"},{default:r((()=>[i(y,{modelValue:m.form.separator,"onUpdate:modelValue":l[5]||(l[5]=t=>m.form.separator=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"prefix"},{default:r((()=>[i(y,{modelValue:m.form.prefix,"onUpdate:modelValue":l[6]||(l[6]=t=>m.form.prefix=t)},null,8,["modelValue"])])),_:1}),i(b,{label:"suffix"},{default:r((()=>[i(y,{modelValue:m.form.suffix,"onUpdate:modelValue":l[7]||(l[7]=t=>m.form.suffix=t)},null,8,["modelValue"])])),_:1}),i(b,null,{default:r((()=>[i(p,{type:"primary",onClick:f.start},{default:r((()=>[x])),_:1},8,["onClick"]),i(p,{onClick:f.pause},{default:r((()=>[g])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1})])}],["__scopeId","data-v-62d73951"]]);export{D as default};