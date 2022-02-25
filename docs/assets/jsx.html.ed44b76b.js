import{r as a,o as r,c as u,b as s,w as o,a as n,F as i,e as l,d as e}from"./app.5e7cb799.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=l('<h1 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h1><blockquote><p>\u5982\u679C\u4F60\u4E0D\u4E86\u89E3 JSX \uFF0C\u751A\u81F3\u6CA1\u6709\u542C\u8BF4\u8FC7\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u6700\u540E\u63A8\u8350\u7684\u51E0\u7BC7\u6587\u7AE0\uFF0C\u5148\u5FEB\u901F\u4E86\u89E3\u719F\u6089\u4E0B\u3002</p></blockquote><p>\u9996\u5148\u8BF4\u660E\u4E00\u70B9\uFF0CJSX \u5E76\u4E0D\u662F Vue \u5B98\u65B9\u63A8\u5D07\u7684\u5F00\u53D1\u65B9\u5F0F\uFF0C\u8FD9\u70B9\u4ECE Vue \u5B98\u65B9\u6587\u6863\u4E0A\u5C31\u53EF\u4EE5\u770B\u6765\u51FA\u6765\u3002Vue \u5B98\u65B9\u63A8\u8350\u5927\u5BB6\u4F7F\u7528 SFC(Single File Component) \u7684\u65B9\u5F0F\u53BB\u7F16\u5199 Vue \u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u719F\u6089\u7684 <code>.vue</code> \u6587\u4EF6\u3002</p><h2 id="\u5F00\u53D1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u6A21\u5F0F" aria-hidden="true">#</a> \u5F00\u53D1\u6A21\u5F0F</h2><h3 id="\u5728-jsx-\u6587\u4EF6\u4E2D\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5728-jsx-\u6587\u4EF6\u4E2D\u5F00\u53D1" aria-hidden="true">#</a> \u5728 jsx \u6587\u4EF6\u4E2D\u5F00\u53D1</h3>',5),k=n("div",{class:"language-jsx ext-jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'Jsx'"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),e("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u6211\u662F\u4E00\u4E2Adiv"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),e("div")]),n("span",{class:"token punctuation"},">")]),e(`
    `),n("span",{class:"token punctuation"},"}"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),e(`
`)])])],-1),x=n("div",{class:"language-jsx ext-jsx"},[n("pre",{class:"language-jsx"},[n("code",null,[n("span",{class:"token keyword"},"export"),e(),n("span",{class:"token keyword"},"default"),e(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token string"},"'Jsx'"),n("span",{class:"token punctuation"},","),e(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
        `),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"=>"),e(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),e("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u6211\u662F\u4E00\u4E2Adiv"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),e("div")]),n("span",{class:"token punctuation"},">")]),e(`
    `),n("span",{class:"token punctuation"},"}"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),e(`
`)])])],-1),f=l('<p>\u4EE5\u4E0A\u4E24\u79CD\u65B9\u5F0F\u5747\u53EF\u4EE5\uFF0C\u5177\u4F53\u770B\u4E2A\u4EBA\u5F00\u53D1\u4E60\u60EF\u3002\u5176\u4E2D setup \u4E2D\u8BBF\u95EE\u4E0D\u5230 <code>this</code> \uFF0C\u800C\u5728 render \u4E2D\u53EF\u4EE5\u901A\u8FC7 <code>this</code> \u8BBF\u95EE\u5F53\u524D Vue \u5B9E\u4F8B\u3002</p><h3 id="\u5728-vue-\u6587\u4EF6\u4E2D\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5728-vue-\u6587\u4EF6\u4E2D\u5F00\u53D1" aria-hidden="true">#</a> \u5728 vue \u6587\u4EF6\u4E2D\u5F00\u53D1</h3><p>\u662F\u7684\uFF0C\u4F60\u4F9D\u65E7\u53EF\u4EE5\u5728 <code>.vue</code> \u6587\u4EF6\u4E2D\u4EE5 SFC \u7684\u65B9\u5F0F\u53BB\u7F16\u5199\u5F00\u53D1\u6211\u4EEC\u7684\u4E1A\u52A1\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u7ED9 <code>&lt;script&gt;</code> \u6807\u7B7E\u589E\u52A0 <code>lang=&quot;jsx&quot;</code> \u7684\u8BBE\u7F6E\u5373\u53EF\uFF0C\u540C\u6837\u4E5F\u652F\u6301\u4E0A\u9762\u6240\u63D0\u5230\u7684\u4E24\u79CD\u5F00\u53D1\u65B9\u5F0F\u3002</p>',3),g=e("\u6B64\u5916\uFF0C\u5728 "),j=n("code",null,".vue",-1),m=e(" \u6587\u4EF6\u4E2D\u5F00\u53D1\u53EF\u76F4\u63A5\u4F7F\u7528 "),v=n("code",null,"<style scoped>",-1),b=e(" \u7279\u6027\uFF0C\u800C\u5728 "),S=n("code",null,".jsx",-1),w=e(" \u6587\u4EF6\u4E2D\u5F00\u53D1\uFF0C\u5219\u9700\u8981\u4F7F\u7528 "),y={href:"https://cn.vitejs.dev/guide/features.html#css-modules",target:"_blank",rel:"noopener noreferrer"},C=e("CSS Modules"),V=e(" \u6765\u5B9E\u73B0\u6837\u5F0F\u9694\u79BB\u3002"),J=n("h2",{id:"\u9605\u8BFB\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9605\u8BFB\u53C2\u8003","aria-hidden":"true"},"#"),e(" \u9605\u8BFB\u53C2\u8003")],-1),X=n("blockquote",null,[n("p",null,"\u7531\u4E8E\u4F5C\u8005\u5BF9 JSX \u7684\u4E86\u89E3\u4E5F\u4EC5\u662F\u6D45\u5C1D\u8F84\u6B62\uFF0C\u66F4\u591A\u7684\u4F7F\u7528\u6280\u5DE7\u53EF\u53C2\u8003\u4E0B\u9762\u76F8\u5173\u94FE\u63A5\uFF0C\u540C\u65F6\u4E5F\u6B22\u8FCE\u5BF9 JSX \u6709\u6DF1\u5165\u4F7F\u7528\u7ECF\u9A8C\u7684\u5C0F\u4F19\u4F34\u52A0\u7FA4\u8BA8\u8BBA\u3002")],-1),q={href:"https://github.com/vuejs/babel-plugin-jsx#syntax",target:"_blank",rel:"noopener noreferrer"},F=e("JSX \u8BED\u6CD5"),G={href:"https://www.jiangweishan.com/article/vuejs20210715a3.html",target:"_blank",rel:"noopener noreferrer"},I=e("\u5728 vue3 \u4E2D\u7F16\u5199 jsx \u7684\u4E24\u79CD\u65B9\u5F0F"),N={href:"https://juejin.cn/post/6846687592138670094",target:"_blank",rel:"noopener noreferrer"},B=e("\u62E5\u62B1 Vue3 \u7CFB\u5217\u4E4B JSX \u8BED\u6CD5"),E={href:"https://juejin.cn/post/6911175470255964174",target:"_blank",rel:"noopener noreferrer"},L=e("\u4E3A\u4EC0\u4E48\u6211\u63A8\u8350\u4F7F\u7528 JSX \u5F00\u53D1 Vue3"),M={href:"https://juejin.cn/post/6911883529098002446",target:"_blank",rel:"noopener noreferrer"},T=e("vue3 \u4E0B jsx \u6559\u5B66\uFF0C\u4FDD\u8BC1\u4E1A\u52A1\u4E0A\u624B\u65E0\u95EE\u9898\uFF01\u624B\u6572\u4EE3\u7801\uFF0C\u6709\u77E5\u8BC6\u70B9\uFF0C\u9644\u5E26\u548C template \u5BF9\u6BD4");function z(A,D){const c=a("CodeGroupItem"),p=a("CodeGroup"),t=a("ExternalLinkIcon");return r(),u(i,null,[h,s(p,null,{default:o(()=>[s(c,{title:"\u5728 render \u4E2D\u8FD4\u56DE"},{default:o(()=>[k]),_:1}),s(c,{title:"\u5728 setup \u4E2D\u8FD4\u56DE"},{default:o(()=>[x]),_:1})]),_:1}),f,n("p",null,[g,j,m,v,b,S,w,n("a",y,[C,s(t)]),V]),J,X,n("ul",null,[n("li",null,[n("a",q,[F,s(t)])]),n("li",null,[n("a",G,[I,s(t)])]),n("li",null,[n("a",N,[B,s(t)])]),n("li",null,[n("a",E,[L,s(t)])]),n("li",null,[n("a",M,[T,s(t)])])])],64)}var O=d(_,[["render",z]]);export{O as default};
