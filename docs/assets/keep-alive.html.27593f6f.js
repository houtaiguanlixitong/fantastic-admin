import{r as p,o as c,c as i,a as s,b as a,w as o,F as k,d as n,e as t}from"./app.39b25021.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const g={},d=s("h1",{id:"\u9875\u9762\u7F13\u5B58",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9875\u9762\u7F13\u5B58","aria-hidden":"true"},"#"),n(" \u9875\u9762\u7F13\u5B58")],-1),y=s("p",null,"\u9996\u5148\u9700\u8981\u6E05\u695A\uFF0C\u672C\u6846\u67B6\u4E0D\u7BA1\u8DEF\u7531\u914D\u7F6E\u591A\u5C11\u5D4C\u5957\u5C42\u7EA7\uFF0C\u6700\u7EC8\u90FD\u4F1A\u88AB\u5904\u7406\u6210\u4E24\u7EA7\u7ED3\u6784\uFF0C\u8FD9\u4E5F\u662F\u7ECF\u8FC7\u8BB8\u591A\u5F00\u53D1\u8005\u5B9E\u8DF5\u540E\u76F8\u5BF9\u8BA4\u53EF\u7684\u65B9\u6848\u3002\u5176\u539F\u56E0\u53EA\u662F\u56E0\u4E3A\u4E09\u7EA7\u53CA\u4EE5\u4E0A\u8DEF\u7531\u5728\u5904\u7406\u9875\u9762\u7F13\u5B58\u4E0A\uFF0C\u65E0\u6CD5\u63D0\u4F9B\u4E00\u4E2A\u4E07\u5168\u7684\u65B9\u6848\uFF0C\u603B\u6709\u5404\u5F0F\u5404\u6837\u7684\u5C0F\u95EE\u9898\u3002",-1),b=n("\u5982\u679C\u60F3\u4E86\u89E3\u6846\u67B6\u662F\u600E\u4E48\u5904\u7406\u7684\uFF0C\u53EF\u4EE5\u770B\u4E0B\u4F5C\u8005\u7684\u8FD9\u7BC7\u300A"),h={href:"https://hooray.github.io/posts/7ae488b2/",target:"_blank",rel:"noopener noreferrer"},_=n("\u4E00\u52B3\u6C38\u9038\uFF0C\u89E3\u51B3\u57FA\u4E8E keep-alive \u7684\u591A\u7EA7\u8DEF\u7531\u7F13\u5B58\u95EE\u9898"),v=n("\u300B\u6587\u7AE0\u3002"),m=t(`<p>\u90A3\u4E48\u5728\u4E24\u7EA7\u8DEF\u7531\u4E0B\uFF0C\u6211\u4EEC\u8981\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u7F13\u5B58\uFF0C\u8BF7\u7EE7\u7EED\u5F80\u4E0B\u770B\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5F00\u542F\u7F13\u5B58\u5FC5\u987B\u4FDD\u8BC1\u6BCF\u4E2A\u9875\u9762\u7EC4\u4EF6\u5FC5\u987B\u8BBE\u7F6E name \uFF0C\u5E76\u4E14\u786E\u4FDD name \u552F\u4E00\u3002</p></div><h2 id="\u5F53\u6807\u7B7E\u680F\u5173\u95ED\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6807\u7B7E\u680F\u5173\u95ED\u65F6" aria-hidden="true">#</a> \u5F53\u6807\u7B7E\u680F\u5173\u95ED\u65F6</h2><p>\u9996\u5148\u9700\u8981\u5728\u5E94\u7528\u914D\u7F6E\u91CC\u8BBE\u7F6E\uFF08\u57FA\u7840\u7248\u65E0\u9700\u8BBE\u7F6E\uFF09\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">tabbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u53EA\u9700\u8981\u5728\u9700\u8981\u8FDB\u884C\u7F13\u5B58\u7684\u8DEF\u7531 meta \u5BF9\u8C61\u91CC\u914D\u7F6E cache \u53C2\u6570\u5373\u53EF\u3002\u8FD9\u4E2A\u53C2\u6570\u53EF\u63A5\u53D7\u4EE5\u4E0B 3 \u79CD\u7C7B\u578B\uFF1A</p><ul><li><code>boolean</code></li><li><code>string</code></li><li><code>array</code></li></ul><p><code>boolean</code> \u5F88\u597D\u7406\u89E3\uFF0C\u5F53\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u8BE5\u9875\u9762\u53EA\u8981\u4E00\u88AB\u8BBF\u95EE\uFF0C\u5C31\u4F1A\u88AB\u7F13\u5B58\uFF0C\u8FD9\u4E5F\u662F\u5927\u90E8\u5206\u540C\u7C7B\u6846\u67B6\u7684\u65B9\u6848\u3002\u4F8B\u5982\u6709\u4E00\u4E2A\u65B0\u95FB\u7BA1\u7406\u7684\u6A21\u5757\uFF0C\u6211\u4EEC\u628A<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8BBE\u7F6E\u4E3A <code>cache: true</code> \u540E\u5E76\u8BBF\u95EE\uFF0C\u7136\u540E\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u70B9\u51FB\u67D0\u6761\u8BB0\u5F55\u8FDB\u5165<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\uFF0C\u8FD9\u65F6\u5019\u518D\u4ECE<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\u8FD4\u56DE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u65F6\uFF0C<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u4E0A\u7684\u6570\u636E\u662F\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\uFF0C\u800C\u662F\u4FDD\u7559\u4E86\u5F53\u65F6\u79BB\u5F00\u65F6\u7684\u72B6\u6001\u3002</p><p>\u4F46\u8FD9\u4E2A\u65B9\u6848\u4E5F\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u5C31\u662F\u8BE5\u9875\u9762\u4E00\u65E6\u8BBF\u95EE\u5C31\u6C38\u4E45\u88AB\u7F13\u5B58\u4F4F\u4E86\uFF08\u9664\u975E\u624B\u52A8\u5237\u65B0\u6216\u70B9\u51FB\u6846\u67B6\u63D0\u4F9B\u7684\u5237\u65B0\u6309\u94AE\uFF09\uFF0C\u5982\u679C\u7528\u6237\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165\u7684\u4E0D\u662F<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\uFF0C\u800C\u662F\u5176\u5B83\u6A21\u5757\u7684\u9875\u9762\uFF0C\u8FD9\u65F6\u5019\u5176\u5B9E\u662F\u4E0D\u5E0C\u671B<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u88AB\u7F13\u5B58\u7684\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6846\u67B6\u652F\u6301\u8BBE\u7F6E <code>string</code> \u548C <code>array</code> \u4E24\u4E2A\u7C7B\u578B\u7684\u53C2\u6570\u503C\u3002</p><p>\u9996\u5148\u4E0D\u7BA1\u8BBE\u7F6E <code>string</code> \u8FD8\u662F <code>array</code> \uFF0C\u4F60\u9700\u8981\u8BBE\u7F6E\u7684\u503C\uFF0C\u90FD\u662F\u8DEF\u7531\u7684 name \u3002</p><p>\u600E\u4E48\u7406\u89E3\u5462\uFF1F\u8FD8\u662F\u7528\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u5982\u679C\u6709\u4E24\u4E2A\u6A21\u5757\uFF0C\u4E00\u4E2A\u65B0\u95FB\u7BA1\u7406\uFF0C\u4E00\u4E2A\u7528\u6237\u7BA1\u7406\u3002\u5F53\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5BF9<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u884C\u7F13\u5B58\uFF0C\u800C\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165<strong>\u7528\u6237\u5217\u8868\u9875</strong>\uFF0C\u5219\u4E0D\u9700\u8981\u5BF9<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u884C\u7F13\u5B58\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u7684\u8DEF\u7531\u8BBE\u7F6E\u6210\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u5217\u8868&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><p>\u8FD9\u8868\u793A\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\u65F6\uFF0C<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u624D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u8FDB\u5165\u5176\u5B83\u4EFB\u4F55\u9875\u9762\u90FD\u4E0D\u4F1A\u7F13\u5B58\u3002</p><p>\u5F53\u7136\u4E5F\u53EF\u5C06 <code>cache</code> \u8BBE\u7F6E\u6210 name \u6570\u7EC4\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u5217\u8868&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u65B0\u95FB&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><p>\u8FD9\u6837\u5C31\u8868\u793A\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\u6216<strong>\u65B0\u589E\u65B0\u95FB\u9875</strong>\u65F6\uFF0C<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u624D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u8FDB\u5165\u5176\u5B83\u4EFB\u4F55\u9875\u9762\u90FD\u4E0D\u4F1A\u7F13\u5B58\u3002</p>`,16),w={id:"\u5F53\u6807\u7B7E\u680F\u5F00\u542F\u65F6",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#\u5F53\u6807\u7B7E\u680F\u5F00\u542F\u65F6","aria-hidden":"true"},"#",-1),x=n(" \u5F53\u6807\u7B7E\u680F\u5F00\u542F\u65F6 "),j={class:"custom-container tip"},E=s("p",{class:"custom-container-title"},"\u5EFA\u8BAE",-1),N=n("\u8BF7\u786E\u4FDD\u5DF2\u9605\u8BFB\u300A"),B=n("\u6807\u7B7E\u680F - \u6807\u7B7E\u9875\u5408\u5E76"),D=n("\u300B\u3002"),C=t(`<p>\u5F53\u4F60\u4E86\u89E3\u6807\u7B7E\u9875\u662F\u5426\u5408\u5E76\u8FD9\u4E24\u79CD\u5C55\u73B0\u5F62\u5F0F\u540E\uFF0C\u6211\u4EEC\u518D\u63A5\u7740\u8BF4\u5982\u4F55\u9488\u5BF9\u6027\u7684\u505A\u9875\u9762\u7F13\u5B58\u3002</p><h3 id="\u5F53\u6807\u7B7E\u9875\u4E0D\u5408\u5E76\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6807\u7B7E\u9875\u4E0D\u5408\u5E76\u65F6" aria-hidden="true">#</a> \u5F53\u6807\u7B7E\u9875\u4E0D\u5408\u5E76\u65F6</h3><p>\u5728\u5E94\u7528\u914D\u7F6E\u91CC\u8BBE\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">tabbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mergeTabs</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u6BCF\u4E2A\u8DEF\u7531\u90FD\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u6807\u7B7E\u9875\uFF0C\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u7F13\u5B58\u5904\u7406\u53EF\u4EE5\u76F8\u5BF9\u7B80\u5355\u7C97\u66B4\u3002\u56E0\u4E3A\u4E0D\u786E\u5B9A\u7528\u6237\u4F1A\u600E\u6837\u5207\u6362\u6807\u7B7E\u9875\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u7ED9\u9700\u8981\u7F13\u5B58\u7684\u8DEF\u7531\u8BBE\u7F6E <code>cache: true</code> \u5373\u53EF\u3002</p>`,5),L=n("\u5F53\u70B9\u51FB\u5173\u95ED\u6807\u7B7E\u9875\u65F6\uFF0C\u7F13\u5B58\u4F1A\u81EA\u52A8\u5220\u9664\uFF0C\u5F53\u7136\u624B\u52A8\u8C03\u7528"),A=n("\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875"),M=n("\u7684\u65B9\u6CD5\u4E5F\u4F1A\u5220\u9664\u7F13\u5B58\u3002"),V=t(`<h3 id="\u5F53\u6807\u7B7E\u9875\u5408\u5E76\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F53\u6807\u7B7E\u9875\u5408\u5E76\u65F6" aria-hidden="true">#</a> \u5F53\u6807\u7B7E\u9875\u5408\u5E76\u65F6</h3><p>\u5728\u5E94\u7528\u914D\u7F6E\u91CC\u8BBE\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">tabbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mergeTabs</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u6807\u7B7E\u9875\u5408\u5E76\u65F6\uFF0C\u6211\u4EEC\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8FDB\u5165<strong>\u65B0\u589E\u65B0\u95FB\u9875</strong>\u540E\uFF0C\u8FDB\u884C\u4E86\u4E00\u4E9B\u6570\u636E\u586B\u5199\uFF0C\u8FD9\u65F6\u5019\u518D\u70B9\u5F00\u5176\u5B83\u6A21\u5757\u7684\u9875\u9762\uFF0C\u4F8B\u5982<strong>\u7528\u6237\u5217\u8868\u9875</strong>\uFF0C\u6B64\u65F6\u6807\u7B7E\u680F\u91CC\u6709 2 \u4E2A\u6807\u7B7E\u9875\uFF0C\u5206\u522B\u662F<em>\u65B0\u589E\u65B0\u95FB</em>\u548C<em>\u7528\u6237\u5217\u8868</em>\uFF0C\u8FD9\u65F6\u5019\u4ECE<strong>\u7528\u6237\u5217\u8868\u9875</strong>\u5207\u6362\u56DE<strong>\u65B0\u589E\u65B0\u95FB\u9875</strong>\uFF0C\u5E76\u4E14\u60F3\u8BA9\u5B83\u4FDD\u6301\u4F4F\u79BB\u5F00\u65F6\u7684\u72B6\u6001\uFF0C\u53EA\u80FD\u8BBE\u7F6E <code>cache: true</code> \uFF0C\u56E0\u4E3A\u4ECE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u8DF3\u8F6C\u5230\u5176\u5B83\u4EFB\u4F55\u9875\u9762\uFF0C\u90FD\u9700\u8981\u5C06\u5B83\u8FDB\u884C\u7F13\u5B58\u4F4F\u3002\u4F46\u8FD9\u4E2A\u65F6\u5019\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u4ECE<strong>\u65B0\u589E\u65B0\u95FB\u9875</strong>\u8FD4\u56DE<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u65F6\uFF0C\u662F\u9700\u8981\u6E05\u9664\u7F13\u5B58\u7684\uFF0C\u6240\u4EE5\u6846\u67B6\u63D0\u4F9B\u4E86\u53E6\u4E00\u4E2A\u53C2\u6570 <code>noCache</code> \uFF0C\u6765\u770B\u4E0B\u9762\u7684\u8DEF\u7531\u914D\u7F6E\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u5217\u8868&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;create&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NewsCreate&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u589E\u65B0\u95FB&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;/news/list&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">noCache</span><span class="token operator">:</span> <span class="token string">&#39;NewsList&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div></div><p>\u8868\u793A\u4ECE<strong>\u65B0\u95FB\u8BE6\u60C5\u9875</strong>\u6216<strong>\u65B0\u589E\u65B0\u95FB\u9875</strong>\u8FDB\u5165<strong>\u65B0\u95FB\u5217\u8868\u9875</strong>\u65F6\uFF0C\u4F1A\u5220\u9664\u9875\u9762\u7F13\u5B58\uFF0C\u5426\u5219\u9875\u9762\u59CB\u7EC8\u5F00\u542F\u7F13\u5B58\u3002</p><p>\u8FD9\u4E5F\u8BF4\u660E <code>noCache</code> \u8FD9\u4E2A\u53C2\u6570\u5FC5\u987B\u5728 <code>cache: true</code> \u65F6\u624D\u4F1A\u8D77\u4F5C\u7528\u3002</p>`,7);function T(F,I){const r=p("ExternalLinkIcon"),l=p("Badge"),e=p("RouterLink");return c(),i(k,null,[d,y,s("p",null,[b,s("a",h,[_,a(r)]),v]),m,s("h2",w,[f,x,a(l,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),s("div",j,[E,s("p",null,[N,a(e,{to:"/guide/tabbar.html#%E6%A0%87%E7%AD%BE%E9%A1%B5%E5%90%88%E5%B9%B6"},{default:o(()=>[B]),_:1}),D])]),C,s("p",null,[L,a(e,{to:"/guide/tabbar.html#%E5%85%B3%E9%97%AD%E5%BD%93%E5%89%8D%E6%A0%87%E7%AD%BE%E9%A1%B5"},{default:o(()=>[A]),_:1}),M]),V],64)}var q=u(g,[["render",T]]);export{q as default};
