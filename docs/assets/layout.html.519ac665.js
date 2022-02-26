import{r as p,o as r,c as o,a as n,b as l,F as c,e,d as a}from"./app.8e6ae36d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=e('<h1 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h1><p>\u901A\u8FC7\u4E24\u5904\u8BBE\u7F6E\u53EF\u5B9E\u73B0 3 \u5957\u4E0D\u540C\u7684\u9875\u9762\u5E03\u5C40\uFF0C\u5206\u522B\u662F<strong>\u53CC\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\u3001<strong>\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\u3001<strong>\u5934\u90E8\u5BFC\u822A\u5E03\u5C40</strong>\u3002</p><h2 id="\u53CC\u4FA7\u8FB9\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u53CC\u4FA7\u8FB9\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u53CC\u4FA7\u8FB9\u680F\u5E03\u5C40</h2><p>\u9879\u76EE\u9ED8\u8BA4\u663E\u793A<strong>\u53CC\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\uFF0C\u5373\u533A\u5206\u4E3B\u5BFC\u822A\u548C\u6B21\u5BFC\u822A\uFF0C\u5C55\u793A\u6548\u679C\u5982\u4E0B\uFF1A</p>',4),b=["src"],m=n("h2",{id:"\u5934\u90E8\u5BFC\u822A\u5E03\u5C40",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5934\u90E8\u5BFC\u822A\u5E03\u5C40","aria-hidden":"true"},"#"),a(" \u5934\u90E8\u5BFC\u822A\u5E03\u5C40")],-1),h=n("p",null,[n("strong",null,"\u5934\u90E8\u5BFC\u822A\u5E03\u5C40"),a("\u53EA\u9700\u5728 "),n("code",null,"/src/setting.js"),a(" \u8BBE\u7F6E "),n("code",null,"showHeader: true"),a(" \u5373\u53EF\uFF0C\u5C55\u793A\u6548\u679C\u5982\u4E0B\uFF1A")],-1),g=["src"],k=e(`<h2 id="\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</h2><p>\u5982\u679C\u8981\u8C03\u6574\u4E3A<strong>\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\uFF0C\u5219\u9700\u8981\u5230 <code>/src/router/index.js</code> \u8DEF\u7531\u914D\u7F6E\u6587\u4EF6\u91CC\u627E\u5230\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u5E76\u6CE8\u91CA\u6389\u9AD8\u4EAE\u90E8\u5206\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F53 children \u4E0D\u4E3A\u7A7A\u7684\u4E3B\u5BFC\u822A\u53EA\u6709\u4E00\u9879\u65F6\uFF0C\u5219\u9690\u85CF</span>
<span class="token keyword">let</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9ED8\u8BA4&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;sidebar-default&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            MultilevelMenuExample<span class="token punctuation">,</span>
            BreadcrumbExample<span class="token punctuation">,</span>
            KeepAliveExample<span class="token punctuation">,</span>
            ComponentExample<span class="token punctuation">,</span>
            PermissionExample
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5176\u5B83&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;sidebar-other&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ExTernalLinkExample</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5C55\u793A\u6548\u679C\u5982\u4E0B\uFF1A</p>`,4),_=["src"],y=e('<p><strong>\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\u5176\u5B9E\u5C31\u662F\u53BB\u6389\u4E86\u4E3B\u5BFC\u822A\uFF0C\u5F53\u53EA\u6709\u4E00\u4E2A\u4E3B\u5BFC\u822A\uFF0C\u6216\u8005\u5176\u5B83\u4E3B\u5BFC\u822A\u4E0B\u9762\u90FD\u6CA1\u6709\u6B21\u5BFC\u822A\u7684\u65F6\u5019\uFF0C\u5E03\u5C40\u5C31\u81EA\u52A8\u5207\u6362\u4E3A<strong>\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\u3002\u8FD9\u79CD\u5E03\u5C40\u9002\u5408\u5728\u529F\u80FD\u6A21\u5757\u4E0D\u591A\u7684\u4E2D\u5C0F\u578B\u540E\u53F0\u7CFB\u7EDF\u4F7F\u7528\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u540C\u65F6\u8BBE\u7F6E<strong>\u5355\u4FA7\u8FB9\u680F\u5E03\u5C40</strong>\u548C<strong>\u5934\u90E8\u5BFC\u822A\u5E03\u5C40</strong>\uFF0C\u5728\u5934\u90E8\u533A\u57DF\u4E5F\u4E0D\u4F1A\u5C55\u793A\u4E3B\u5BFC\u822A\u5185\u5BB9\u3002</p></div><h2 id="\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> \u79FB\u52A8\u7AEF</h2><p>\u672C\u6846\u67B6\u517C\u5BB9\u79FB\u52A8\u7AEF\uFF0C\u4F46\u7531\u4E8E\u540E\u53F0\u7CFB\u7EDF\u5728\u5F00\u53D1\u65F6\u53EF\u80FD\u4F1A\u5F15\u7528\u5404\u7C7B\u7B2C\u4E09\u65B9\u63D2\u4EF6\uFF0C\u8FD9\u90E8\u5206\u7684\u517C\u5BB9\u6027\u9700\u8981\u5F00\u53D1\u8005\u81EA\u884C\u9002\u914D\u3002</p><p>\u5F53\u9875\u9762\u5BBD\u5EA6\u5C0F\u4E8E <code>992px</code> \u65F6\u4F1A\u5207\u6362\u4E3A\u79FB\u52A8\u7AEF\u5E03\u5C40\u663E\u793A\uFF0C\u79FB\u52A8\u7AEF\u4E0B\u4E0D\u652F\u6301\u8BBE\u7F6E\u6846\u67B6\u5E03\u5C40\uFF0C\u4EE5\u53CA\u90E8\u5206\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u7684\u64CD\u4F5C\u6309\u94AE\u4E5F\u4F1A\u8FDB\u884C\u9690\u85CF\uFF0C\u4F8B\u5982\u201C\u5168\u5C4F\u201D\u6309\u94AE\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5EFA\u8BAE</p><p>\u7531\u4E8E\u540E\u53F0\u7CFB\u7EDF\u5C5E\u4E8E\u751F\u4EA7\u6548\u7387\u5DE5\u5177\uFF0C\u800C\u79FB\u52A8\u7AEF\u5929\u751F\u4E0D\u9002\u5408\u590D\u6742\u7684\u64CD\u4F5C\uFF0C\u5C24\u5176\u662F\u9047\u5230\u4E00\u4E9B\u6BD4\u8F83\u590D\u6742\u7684\u8868\u5355\uFF0C\u5728\u79FB\u52A8\u7AEF\u4E0A\u64CD\u4F5C\u662F\u6781\u5176\u201C\u607C\u706B\u201D\u7684\u3002</p><p>\u4F9D\u636E\u4F5C\u8005\u7684\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u5EFA\u8BAE\u79FB\u52A8\u7AEF\u540E\u53F0\u53EF\u4EE5\u72EC\u7ACB\u5F00\u53D1\u4E00\u5957\uFF0C\u5728\u529F\u80FD\u4E0A\u8FDB\u884C\u5220\u51CF\uFF0C\u4FDD\u7559\u8F7B\u91CF\u7EA7\u7684\u7BA1\u7406\u64CD\u4F5C\u3002</p></div>',6),v={id:"\u6269\u5C55",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#\u6269\u5C55","aria-hidden":"true"},"#",-1),x=a(" \u6269\u5C55 "),w=e(`<p>\u5728\u57FA\u7840\u7248 3 \u5957\u9875\u9762\u5E03\u5C40\u7684\u57FA\u7840\u4E0A\uFF0C\u4E13\u4E1A\u7248\u6269\u5C55\u4E86\u53E6\u4E00\u7EF4\u5EA6\u7684 4 \u5957\u5E03\u5C40\uFF0C\u5206\u522B\u662F<strong>\u81EA\u9002\u5E94</strong>\u3001<strong>\u81EA\u9002\u5E94\uFF08\u6709\u6700\u5C0F\u5BBD\u5EA6\uFF09</strong>\u3001<strong>\u5B9A\u5BBD\u5C45\u4E2D</strong>\u3001<strong>\u5B9A\u5BBD\u5C45\u4E2D\uFF08\u6709\u6700\u5927\u5BBD\u5EA6\uFF09</strong>\uFF0C\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8F7B\u677E\u8BBE\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u5E03\u5C40\u7C7B\u578B\uFF0C\u5F53\u8BBE\u7F6E\u4E3A\u975E adaption \u65F6\uFF0C\u8BF7\u53BB ./src/assets/styles/resources/layout.scss \u91CC\u8BBE\u7F6E $g-app-width
 * adaption \u81EA\u9002\u5E94
 * adaption-min-width \u81EA\u9002\u5E94\uFF08\u6709\u6700\u5C0F\u5BBD\u5EA6\uFF09
 * center \u5B9A\u5BBD\u5C45\u4E2D
 * center-max-width \u5B9A\u5BBD\u5C45\u4E2D\uFF08\u6709\u6700\u5927\u5BBD\u5EA6\uFF09
 */</span>
<span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;adaption&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0B\u9762\u7B80\u5355\u6F14\u793A\u8FD9 4 \u5957\u5E03\u5C40\u7684\u7279\u70B9\uFF08\u56FE\u7247\u5E73\u5747\u5927\u5C0F\u4E3A 2M \uFF0C\u52A0\u8F7D\u53EF\u80FD\u9700\u8981\u70B9\u65F6\u95F4\uFF09\u3002</p><p><strong>\u81EA\u9002\u5E94</strong></p>`,4),B=["src"],j=n("p",null,[n("strong",null,"\u81EA\u9002\u5E94\uFF08\u6709\u6700\u5C0F\u5BBD\u5EA6\uFF09")],-1),E=["src"],$=n("p",null,[n("strong",null,"\u5B9A\u5BBD\u5C45\u4E2D")],-1),N=["src"],V=n("p",null,[n("strong",null,"\u5B9A\u5BBD\u5C45\u4E2D\uFF08\u6709\u6700\u5927\u5BBD\u5EA6\uFF09")],-1),M=["src"],C=n("p",null,[a("\u5C06\u6269\u5C55\u7684 4 \u5957\u5E03\u5C40\u548C\u57FA\u7840\u7248\u539F\u6709\u7684 3 \u5957\u5E03\u5C40\u8FDB\u884C\u7EC4\u5408\u642D\u914D\uFF0C\u53EF\u5B9E\u73B0 12 \u5957\u5E03\u5C40\uFF0C\u5982\u679C\u518D\u642D\u914D\u9ED8\u8BA4\u63D0\u4F9B\u7684 5 \u6B3E\u4E3B\u9898\uFF0C"),n("strong",null,"\u5373\u53EF\u5B9E\u73B0 60 \u79CD\u754C\u9762\u98CE\u683C"),a("\u3002")],-1);function F(s,T){const t=p("Badge");return r(),o(c,null,[d,n("p",null,[n("img",{src:s.$withBase("/vue2/basic-layout-default.png")},null,8,b)]),m,h,n("p",null,[n("img",{src:s.$withBase("/vue2/basic-layout-header.png")},null,8,g)]),k,n("p",null,[n("img",{src:s.$withBase("/vue2/basic-layout-without-main-sidebar.png")},null,8,_)]),y,n("h2",v,[f,x,l(t,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),w,n("p",null,[n("img",{src:s.$withBase("/layout_1.gif")},null,8,B)]),j,n("p",null,[n("img",{src:s.$withBase("/layout_2.gif")},null,8,E)]),$,n("p",null,[n("img",{src:s.$withBase("/layout_3.gif")},null,8,N)]),V,n("p",null,[n("img",{src:s.$withBase("/layout_4.gif")},null,8,M)]),C],64)}var K=i(u,[["render",F]]);export{K as default};
