import{r as o,o as p,c as e,a as n,b as t,F as c,d as s,e as u}from"./app.39b25021.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=n("h1",{id:"\u4F7F\u7528-composition-api-\u5F00\u53D1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-composition-api-\u5F00\u53D1","aria-hidden":"true"},"#"),s(" \u4F7F\u7528 Composition API \u5F00\u53D1")],-1),k=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u5173\u4E8E Options API"),n("p",null,"Vue3 \u867D\u7136\u63D0\u4F9B\u4E86\u5168\u65B0\u7684 Composition API \uFF0C\u4F46\u5B83\u4F9D\u65E7\u652F\u6301 Options API \uFF0C\u5BF9\u4E8E\u4ECE Vue2 \u5C31\u5728\u4F7F\u7528\u7684\u5F00\u53D1\u8005\uFF0C\u5982\u679C\u4E00\u65F6\u534A\u4F1A\u6CA1\u529E\u6CD5\u7ACB\u9A6C\u4E0A\u624B Composition API \uFF0C\u4F60\u4F9D\u65E7\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Options API \u505A\u5F00\u53D1\u3002")],-1),d=s("\u5982\u679C\u4F60\u8FD8\u4E0D\u719F\u6089 Composition API \uFF0C\u90A3\u4E48\u6211\u4EEC\u5EFA\u8BAE\u4F60\u9605\u8BFB Vue3 "),h={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u5B98\u65B9\u6587\u6863"),g=s("\u4E86\u89E3\uFF1B\u5982\u679C\u4F60\u5DF2\u7ECF\u719F\u6089 Composition API \uFF0C\u90A3\u4E48\u6211\u4EEC\u5EFA\u8BAE\u4F60\u5728\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 "),_={href:"https://v3.cn.vuejs.org/api/sfc-script-setup.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"<script setup>",-1),v=s(" \u8BED\u6CD5\u7CD6\u8FDB\u884C\u5F00\u53D1\uFF0C\u5B83\u5C06\u63D0\u9AD8\u5F88\u591A\u5F00\u53D1\u4E0A\u7684\u6548\u7387\u3002"),b=s("\u540C\u65F6\u5F97\u76CA\u4E8E "),w={href:"https://github.com/antfu/unplugin-auto-import",target:"_blank",rel:"noopener noreferrer"},y=s("unplugin-auto-import"),I=s(" \u7684\u7279\u6027\uFF0C\u5728 "),A=n("code",null,"<script setup>",-1),P=s(" \u91CC\u65E0\u9700\u5BFC\u5165\u76F8\u5173 API \uFF0C\u8BE5\u4F9D\u8D56\u4F1A\u81EA\u52A8\u5BFC\u5165\uFF08\u9ED8\u8BA4\u652F\u6301 vue \u548C vue-router\uFF09\u3002"),x=u(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u539F\u5148\u9700\u8981\u624B\u52A8 import \u76F8\u5173 API</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div></div><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u73B0\u5728\u76F4\u63A5\u4F7F\u7528\u5373\u53EF</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2);function C(V,R){const a=o("ExternalLinkIcon");return p(),e(c,null,[r,k,n("p",null,[d,n("a",h,[m,t(a)]),g,n("a",_,[f,t(a)]),v]),n("p",null,[b,n("a",w,[y,t(a)]),I,A,P]),x],64)}var B=l(i,[["render",C]]);export{B as default};
