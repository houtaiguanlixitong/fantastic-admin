import{o as e,c as t,a as n,F as r,e as p,d as s}from"./app.5e7cb799.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const o={},c=p(`<h1 id="\u591A\u7EA7\u9875\u9762\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u9875\u9762\u7F13\u5B58" aria-hidden="true">#</a> \u591A\u7EA7\u9875\u9762\u7F13\u5B58</h1><p>\u56E0\u4E3A\u8DEF\u7531\u76F4\u63A5\u5F71\u54CD\u4FA7\u8FB9\u680F\u5BFC\u822A\u83DC\u5355\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5B9E\u73B0\u591A\u7EA7\u4FA7\u8FB9\u680F\u5BFC\u822A\u83DC\u5355\uFF0C\u5C31\u9700\u8981\u5C06\u8DEF\u7531\u914D\u7F6E\u6210\u591A\u7EA7\u5D4C\u5957\u7684\u5F62\u5F0F\u3002\u4E00\u65E6\u8D85\u8FC7\u4E24\u7EA7\uFF0C\u8FBE\u5230\u4E09\u7EA7\u751A\u81F3\u66F4\u591A\u7EA7\uFF0C\u5C31\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u7A7A\u5E03\u5C40\u9875\u9762\uFF08Empty.vue\uFF09\u7528\u6765\u7ED9 component \u4F7F\u7528\u3002\u6B64\u65F6\u5C31\u51FA\u73B0\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u56E0\u4E3A keep-alive \u662F\u5728 Layout \u4E0A\u5904\u7406\u7684\uFF0C\u6240\u4EE5\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u8DEF\u7531\u9700\u8981\u505A\u9875\u9762\u7F13\u5B58\u4F1A\u51FA\u73B0\u5404\u79CD\u5404\u6837\u5947\u602A\u7684 bug \u3002</p><p>\u5728\u601D\u8003\u5E76\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E0B\u9875\u9762\u5927\u81F4\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+------------------------------+
| Layout                       |
|  +------------------------+  |
|  | Empty                  |  |
|  |  +------------------+  |  |
|  |  | Page             |  |  |
|  |  +------------------+  |  |
|  +------------------------+  |
+------------------------------+
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u9996\u5148 keep-alive \u662F\u5728 Layout \u4E0A\u8FDB\u884C\u5904\u7406\uFF0C\u5982\u679C\u4E0D\u7F13\u5B58 Empty \uFF0C\u5219 Empty \u4E0B\u9762\u7684\u9875\u9762\u5C06\u65E0\u6CD5\u88AB\u7F13\u5B58\uFF0C\u5982\u679C\u7F13\u5B58 Empty \uFF0C\u53C8\u4F1A\u5BFC\u81F4 Empty \u91CC\u9762\u7684\u6240\u6709\u9875\u9762\u90FD\u88AB\u7F13\u5B58\uFF0C\u65E0\u6CD5\u6309\u9700\u6E05\u9664\uFF0C\u76F8\u4FE1\u63A5\u89E6\u8FC7\u7684\u540C\u5B66\u80AF\u5B9A\u611F\u540C\u8EAB\u53D7\u5176\u4E2D\u7684\u5927\u5751\u3002</p>`,5),i=["src"],u=p(`<p>\u5C31\u5982\u4E0A\u9762\u8FD9\u5F20\u56FE\u4E00\u6837\uFF0C\u5373\u4FBF\u5C06 tab \u6807\u7B7E\u9875\u5173\u95ED\u540E\uFF0C\u518D\u6B21\u6253\u5F00\u7F13\u5B58\u8FD8\u662F\u5B58\u5728\u3002</p><p>\u6846\u67B6\u7684\u89E3\u51B3\u601D\u8DEF\u5F88\u7B80\u5355\uFF0C\u65E2\u7136\u7F13\u5B58\u4E8C\u7EA7\u8DEF\u7531\u662F\u6CA1\u95EE\u9898\uFF0C\u800C\u8D85\u8FC7\u4E8C\u7EA7\u7684\u4E2D\u95F4\u5C42\u7EA7\u9875\u9762\u672C\u8EAB\u4E5F\u662F\u6CA1\u592A\u5927\u610F\u4E49\u7684\uFF0C\u90A3\u5C31\u5C06\u8DEF\u7531\u76F4\u63A5\u5904\u7406\u6210\u4E8C\u7EA7\uFF0C\u8FD9\u6837\u9875\u9762\u663E\u793A\u4E5F\u5C31\u662F\u4E8C\u7EA7\u7684\u7ED3\u6784\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>+------------------------------+                +------------------------------+
| Layout                       |                | Layout.vue                   |
|  +------------------------+  |                |  +------------------------+  |
|  | Empty                  |  |  +----------&gt;  |  | Page                   |  |
|  |  +------------------+  |  |                |  |                        |  |
|  |  | Page             |  |  |                |  |                        |  |
|  |  +------------------+  |  |                |  |                        |  |
|  +------------------------+  |                |  +------------------------+  |
+------------------------------+                +------------------------------+
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u91CC\u8DEF\u7531\u914D\u7F6E\u8FD8\u662F\u4FDD\u6301\u591A\u7EA7\u5D4C\u5957\u7684\u5F62\u5F0F\uFF0C\u800C\u8FD9\u4E2A\u914D\u7F6E\u5E76\u975E\u6700\u7EC8\u6CE8\u518C\u4F7F\u7528\u7684\u8DEF\u7531\uFF0C\u4EC5\u4EC5\u662F\u63D0\u4F9B\u4FA7\u8FB9\u680F\u5BFC\u822A\u83DC\u5355\u4F7F\u7528\uFF0C\u540C\u65F6\u4F1A\u518D\u751F\u6210\u4E00\u4EFD\u7528\u4E8E\u52A8\u6001\u6CE8\u518C\u8DEF\u7531\u7684\u6570\u636E\uFF0C\u56FE\u4F8B\u5982\u679C\u6CA1\u770B\u660E\u767D\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u4E0B\u9762\u4E24\u7EC4\u6570\u636E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u539F\u59CB\u6570\u636E\uFF08\u7528\u4E8E\u4FA7\u8FB9\u680F\u5BFC\u822A\u83DC\u5355\uFF09</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u7BA1\u7406&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u5217\u8868&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u8BE6\u60C5&#39;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5904\u7406\u540E\u6570\u636E\uFF08\u7528\u4E8E\u52A8\u6001\u6CE8\u518C\u8DEF\u7531\uFF0C\u6846\u67B6\u4F1A\u81EA\u52A8\u5904\u7406\uFF09</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients/list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u5217\u8868&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients/detail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u8BE6\u60C5&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u901A\u8FC7\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\u5C31\u53EF\u4EE5\u5904\u7406\u597D\u8DEF\u7531\u7684\u6570\u636E\uFF0C\u4F46\u8FD9\u8FD8\u4E0D\u591F\uFF0C\u56E0\u4E3A\u8FD8\u9700\u8981\u5904\u7406\u9762\u5305\u5C51\u5BFC\u822A\u3002</p><p>\u539F\u6709\u7684\u9762\u5305\u5C51\u5BFC\u822A\u662F\u901A\u8FC7 <code>$route.matched</code> \u53EF\u4EE5\u83B7\u53D6\u5230\u5D4C\u5957\u8DEF\u7531\u6BCF\u4E00\u5C42\u7EA7\u7684\u4FE1\u606F\uFF0C\u800C\u5F53\u8DEF\u7531\u88AB\u5904\u7406\u6210\u4E24\u7EA7\u540E\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u901A\u8FC7 <code>$route.matched</code> \u8FDB\u884C\u663E\u793A\u4E86\uFF0C\u6240\u4EE5\u5728\u5904\u7406\u8DEF\u7531\u6570\u636E\u7684\u540C\u65F6\uFF0C\u4E5F\u9700\u8981\u5904\u7406\u9762\u5305\u5C51\u5BFC\u822A\u7684\u4FE1\u606F\u3002\u5927\u81F4\u6700\u7EC8\u4F1A\u5904\u7406\u6210\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients/list&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u5217\u8868&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">breadCrumb</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u7BA1\u7406&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u5217\u8868&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients/detail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u8BE6\u60C5&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">breadCrumb</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u7BA1\u7406&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;clients&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u7BA1\u7406&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5BA2\u6237\u8BE6\u60C5&#39;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u901A\u8FC7 <code>$route.meta.breadcrumb</code> \u5C31\u53EF\u4EE5\u83B7\u53D6\u4EFB\u610F\u67D0\u4E2A\u8DEF\u7531\u7684\u5B8C\u6574\u9762\u5305\u5C51\u5BFC\u822A\u4FE1\u606F\u4E86\u3002\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A</p>`,9),k=["src"],b=n("p",null,"\u901A\u8FC7\u56FE\u7247\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u79CD\u65B9\u6848\u4E5F\u8FD8\u662F\u6709\u4E00\u5B9A\u7684\u9650\u5236\uFF0C\u5C31\u662F\u8DEF\u7531\u88AB\u5904\u7406\u6210\u4E8C\u7EA7\u540E\uFF0C\u591A\u7EA7\u5D4C\u5957\u5173\u7CFB\u4E0D\u5B58\u5728\u4E86\uFF0C\u4E5F\u5C31\u662F\u4E0D\u80FD\u5728 Empty \u91CC\u5199\u4EFB\u4F55\u4EE3\u7801\uFF0C\u56E0\u4E3A\u90FD\u4F1A\u88AB\u5FFD\u7565\u6389\uFF0C\u53EA\u4FDD\u7559\u9876\u7EA7\u548C\u6700\u6DF1\u5C42\u7684\u5E95\u7EA7\u4E24\u4E2A\u8DEF\u7531\u3002",-1),m=n("p",null,"\u5F53\u7136\u901A\u8FC7\u5B9E\u9645\u60C5\u51B5\u8003\u8651\uFF0C\u8FD9\u79CD\u9650\u5236\u5E76\u6CA1\u6709\u5927\u95EE\u9898\uFF0C\u56E0\u4E3A\u5728\u540E\u53F0\u7CFB\u7EDF\u91CC\uFF0C\u672C\u8EAB\u6A21\u5757\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u5373\u4FBF\u4FA7\u8FB9\u680F\u5BFC\u822A\u83DC\u5355\u662F\u5D4C\u5957\u5C42\u7EA7\u5173\u7CFB\u7684\uFF0C\u5728\u53F3\u4FA7\u5185\u5BB9\u5C55\u793A\u533A\u57DF\uFF0C\u51E0\u4E4E\u90FD\u662F\u72EC\u7ACB\u6A21\u5757\u5C55\u793A\uFF0C\u65E0\u9700\u5D4C\u5957\u3002",-1),y=n("h2",{id:"\u603B\u7ED3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u603B\u7ED3","aria-hidden":"true"},"#"),s(" \u603B\u7ED3")],-1),d=n("p",null,[s("\u4EE5\u4E0A\u662F\u4ECB\u7ECD\u4E86\u6846\u67B6\u5BF9\u591A\u7EA7\u5D4C\u5957\u8DEF\u7531\u5982\u4F55\u505A\u7F13\u5B58\u505A\u4E86\u4E00\u4E2A\u8BE6\u5C3D\u7684\u89E3\u91CA\uFF0C\u5728\u4F7F\u7528\u4E0A\u5176\u5B9E\u5E76\u4E0D\u9700\u8981\u5173\u7CFB\u5185\u90E8\u903B\u8F91\uFF0C\u901A\u8FC7\u4FEE\u6539 settings.js \u6587\u4EF6\u91CC\u7684 "),n("code",null,"enableFlatRoutes: true"),s(" \u5C31\u53EF\u4EE5\u5F00\u542F\u6241\u5E73\u5316\u8DEF\u7531\u7684\u529F\u80FD\uFF0C\u4E09\u7EA7\u6216\u8D85\u8FC7\u4E09\u7EA7\u7684\u8DEF\u7531\u90FD\u4F1A\u5904\u7406\u6210\u4E8C\u7EA7\u8DEF\u7531\u3002")],-1),g=n("p",null,"\u5F53\u7136\u4E0D\u5F00\u542F\u8FD9\u4E2A\u8BBE\u7F6E\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u5373\u8DEF\u7531\u914D\u7F6E\u7684\u591A\u5C11\u5D4C\u5957\u5C42\u7EA7\uFF0C\u9875\u9762\u4E5F\u662F\u5BF9\u5E94\u7684\u5D4C\u5957\u5C42\u7EA7\u3002",-1);function h(a,v){return e(),t(r,null,[c,n("p",null,[n("img",{src:a.$withBase("/vue2/keep-alive1.gif")},null,8,i)]),u,n("p",null,[n("img",{src:a.$withBase("/vue2/keep-alive2.gif")},null,8,k)]),b,m,y,d,g],64)}var f=l(o,[["render",h]]);export{f as default};
