import{r as e,o,c,a as s,b as t,F as l,e as p,d as n}from"./app.bfa6e0ea.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=p(`<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><h2 id="\u66FF\u6362\u771F\u5B9E\u7684\u540E\u7AEF\u63A5\u53E3\u540E-\u767B\u5F55\u6210\u529F\u4F9D\u65E7\u5728\u767B\u5F55\u9875" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u771F\u5B9E\u7684\u540E\u7AEF\u63A5\u53E3\u540E-\u767B\u5F55\u6210\u529F\u4F9D\u65E7\u5728\u767B\u5F55\u9875" aria-hidden="true">#</a> \u66FF\u6362\u771F\u5B9E\u7684\u540E\u7AEF\u63A5\u53E3\u540E\uFF0C\u767B\u5F55\u6210\u529F\u4F9D\u65E7\u5728\u767B\u5F55\u9875</h2><p>\u4F60\u9700\u8981\u5BF9\u51E0\u5904\u4EE3\u7801\u5206\u522B\u68C0\u67E5\u662F\u5426\u90FD\u6709\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4FEE\u6539\uFF1A</p><ol><li>\u5728 <code>.env.development</code> \u91CC\u4FEE\u6539\u771F\u5B9E\u63A5\u53E3\u8BF7\u6C42\u5730\u5740</li><li>\u56E0\u4E3A\u771F\u5B9E\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u4E0E\u6846\u67B6\u6F14\u793A\u63D0\u4F9B\u7684\u8FD4\u56DE\u683C\u5F0F\u4E00\u5B9A\u5B58\u5728\u5DEE\u5F02\uFF0C\u6240\u4EE5\u9700\u8981\u5728 <code>/src/api/index.js</code> \u91CC\u4FEE\u6539\u54CD\u5E94\u62E6\u622A\u5668\u91CC\u7684\u4EE3\u7801\uFF0C\u6309\u7167\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u8C03\u6574\u3002\u4F8B\u5982\u4EC0\u4E48\u72B6\u6001\u4E0B\u662F\u8BF7\u6C42\u6210\u529F\uFF0C\u4EC0\u4E48\u72B6\u6001\u4E0B\u662F\u8BF7\u6C42\u5F02\u5E38\uFF0C\u5E76\u8FDB\u884C\u9519\u8BEF\u63D0\u793A\u3002</li><li>\u5728 <code>/src/store/modules/user.js</code> \u91CC\u4FEE\u6539 <code>actions</code> \u4E0B\u7684 <code>login</code> \u51FD\u6570\uFF0C\u786E\u4FDD\u63A5\u53E3\u53EF\u4EE5\u8BF7\u6C42\u6210\u529F\uFF0C\u5E76\u5C06\u8FD4\u56DE\u7684\u7528\u6237\u4FE1\u606F\u5B58\u50A8\u5230 store \u4E2D\u8FDB\u884C\u5168\u5C40\u7BA1\u7406\u3002\u6700\u540E\u8FD8\u9700\u8981\u4FEE\u6539 <code>getters</code> \u4E0B\u7684 <code>isLogin</code> \u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u9700\u8981\u6839\u636E\u5B9E\u9645\u5B58\u50A8\u7684\u7528\u6237\u4FE1\u606F\u53BB\u5224\u65AD\u662F\u5426\u767B\u5F55\u3002\u4F8B\u5982\u6846\u67B6\u6F14\u793A\u767B\u5F55\u662F\u4F1A\u8FD4\u56DE token \u548C\u5931\u6548\u65F6\u95F4\uFF0C\u5219\u9A8C\u8BC1\u662F\u5426\u767B\u5F55\u4E5F\u662F\u901A\u8FC7\u8FD9\u4E24\u4E2A\u4FE1\u606F\u8FDB\u884C\u903B\u8F91\u6821\u9A8C\u3002</li></ol><h2 id="\u4F7F\u7528-script-setup-\u8BED\u6CD5\u7CD6\u5982\u4F55\u8BBE\u7F6E\u7EC4\u4EF6-name" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-script-setup-\u8BED\u6CD5\u7CD6\u5982\u4F55\u8BBE\u7F6E\u7EC4\u4EF6-name" aria-hidden="true">#</a> \u4F7F\u7528 <code>&lt;script setup&gt;</code> \u8BED\u6CD5\u7CD6\u5982\u4F55\u8BBE\u7F6E\u7EC4\u4EF6 name</h2><p><code>&lt;script setup&gt;</code> \u53EF\u4EE5\u548C\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u4E00\u8D77\u4F7F\u7528\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FD9\u6837\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;componentName&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7),r=n("\u53E6\u5916\u6846\u67B6\u5F15\u7528\u4E86 "),g={href:"https://github.com/anncwb/vite-plugin-vue-setup-extend",target:"_blank",rel:"noopener noreferrer"},d=n("vite-plugin-vue-setup-extend"),h=n(" \u4F9D\u8D56\uFF0C\u6240\u4EE5\u53EF\u4EE5\u66F4\u65B9\u4FBF\u7684\u8BBE\u7F6E\u3002"),_=p(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>componentName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u9879\u76EE-url-\u91CC\u7684-\u53F7\u80FD\u4E0D\u80FD\u53BB\u6389" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE-url-\u91CC\u7684-\u53F7\u80FD\u4E0D\u80FD\u53BB\u6389" aria-hidden="true">#</a> \u9879\u76EE URL \u91CC\u7684 # \u53F7\u80FD\u4E0D\u80FD\u53BB\u6389</h2>`,2),v=n("\u8FD9\u662F\u56E0\u4E3A\u8DEF\u7531\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F Hash \u6A21\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u5728 "),m=s("code",null,"/src/router/index.js",-1),x=n(" \u4FEE\u6539\u4E3A HTML5 \u6A21\u5F0F\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\uFF0C\u5F00\u542F HTML5 \u6A21\u5F0F\uFF0C\u670D\u52A1\u5668\u4E5F\u9700\u8981\u505A\u76F8\u5E94\u7684\u914D\u7F6E\u8C03\u6574\uFF0C\u8BE6\u7EC6\u8BF7\u9605\u8BFB\u300A"),f={href:"https://next.router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"},b=n("Vue-router \u4E0D\u540C\u7684\u5386\u53F2\u6A21\u5F0F"),j=n("\u300B\u3002"),L=p(`<h2 id="\u9875\u9762\u5207\u6362\u540E\u663E\u793A\u7A7A\u767D" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5207\u6362\u540E\u663E\u793A\u7A7A\u767D" aria-hidden="true">#</a> \u9875\u9762\u5207\u6362\u540E\u663E\u793A\u7A7A\u767D</h2><p>\u56E0\u4E3A\u8DEF\u7531\u5207\u6362\u6709\u4F7F\u7528\u5230 <code>&lt;transition&gt;</code> \u52A8\u753B\uFF0C\u800C <code>&lt;transition&gt;</code> \u7EC4\u4EF6\u65E0\u6CD5\u5904\u7406\u591A\u4E2A\u6839\u8282\u70B9\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u8BF7\u68C0\u67E5\u8DEF\u7531\u5BF9\u5E94\u6240\u6709\u7684\u9875\u9762\u6587\u4EF6\u7684\u6839\u8282\u70B9\u662F\u5426\u5747\u4E3A\u5355\u4E2A\u3002</p><p>\u9519\u8BEF\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u9700\u8981\u6CE8\u610F\uFF0C\u6CE8\u91CA\u4E5F\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u8282\u70B9 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>text h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>text h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    \u6CA1\u6709\u8282\u70B9\u4E5F\u662F\u4E0D\u884C\u7684
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6B63\u786E\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>text h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>text h2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        \u8FD9\u6837\u5C31\u6CA1\u95EE\u9898\u5566
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),N=n("\u76F8\u5173 "),y={href:"https://github.com/vuejs/vue-next/issues/1850",target:"_blank",rel:"noopener noreferrer"},V=n("Issue"),q=n(" \u8BF4\u660E");function w(B,E){const a=e("ExternalLinkIcon");return o(),c(l,null,[k,s("p",null,[r,s("a",g,[d,t(a)]),h]),_,s("p",null,[v,m,x,s("a",f,[b,t(a)]),j]),L,s("p",null,[N,s("a",y,[V,t(a)]),q])],64)}var T=u(i,[["render",w]]);export{T as default};
