import{_ as a,r as e,o as t,c as o,a as n,b as p,F as c,d as l,e as u}from"./app.da9046bd.js";const i={},r={id:"\u79C1\u6709-storage-\u6570\u636E",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u79C1\u6709-storage-\u6570\u636E","aria-hidden":"true"},"#",-1),d=l(" \u79C1\u6709 Storage \u6570\u636E "),g=u(`<p>\u7531\u4E8E localStorage \u548C sessionStorage \u7684\u540C\u6E90\u7B56\u7565\uFF0C\u540C\u4E00\u57DF\u540D\u4E0B\u7684 storage \u6570\u636E\u4F1A\u5171\u4EAB\u3002\u5982\u679C\u4F60\u6070\u597D\u9700\u8981\u5728\u540C\u4E00\u57DF\u540D\u4E0B\u90E8\u7F72\u4E24\u5957(\u53CA\u4EE5\u4E0A)\u7CFB\u7EDF\uFF0C\u4E0D\u53EF\u907F\u514D\u4F1A\u51FA\u73B0 storage \u6570\u636E\u51B2\u7A81\uFF0C\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A storage \u7C7B\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u89E3\u51B3\u540C\u6E90 storage \u6570\u636E\u51B2\u7A81\u7684\u65B9\u5F0F\u5C31\u662F\u589E\u52A0\u524D\u7F00\u533A\u5206\uFF0C\u9996\u5148\u9700\u8981\u5728 <code>./settings.js</code> \u91CC\u914D\u7F6E <code>storagePrefix</code> \u53C2\u6570\uFF0C\u7136\u540E\u5728\u9700\u8981\u4F7F\u7528\u5230 storage \u7684\u5730\u65B9\u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;@/util/storage&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u7C7B\u5C01\u88C5\u4E86 <code>setItem()</code> \uFF0C<code>getItem()</code> \uFF0C<code>removeItem()</code> \uFF0C<code>clear()</code> \u65B9\u6CD5\uFF0C\u540C\u65F6\u8FD8\u589E\u52A0\u4E86\u4E00\u4E2A <code>has()</code> \u65B9\u6CD5\u7528\u6765\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u5728\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// localStorage</span>
storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>local<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// sessionStorage</span>
storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
storage<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E localStorage \u6709\u5BB9\u91CF\u4E0A\u9650\uFF0C\u4E00\u822C\u4E3A 5M \uFF0C\u5982\u679C\u4E00\u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u4E24\u5957\u7CFB\u7EDF\uFF0C\u610F\u5473\u7740\u4E24\u5957\u7CFB\u7EDF\u5171\u4EAB 5M \u5BB9\u91CF\uFF0C\u6240\u4EE5\u4E0D\u5EFA\u8BAE\u5728\u540C\u4E00\u57DF\u540D\u90E8\u7F72\u592A\u591A\u5957\u7CFB\u7EDF\uFF0C\u907F\u514D\u51FA\u73B0 localStorage \u4E0D\u591F\u7528\u7684\u60C5\u51B5\u3002</p></div>`,6);function m(b,v){const s=e("Badge");return t(),o(c,null,[n("h1",r,[k,d,p(s,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),g],64)}var f=a(i,[["render",m],["__file","storage.html.vue"]]);export{f as default};
