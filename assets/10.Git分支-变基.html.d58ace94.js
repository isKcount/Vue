const e=JSON.parse('{"key":"v-732ccdf8","path":"/zh/cicd/git/10.Git%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA.html","title":"Git\u5206\u652F-\u53D8\u57FA","lang":"zh-CN","frontmatter":{"title":"Git\u5206\u652F-\u53D8\u57FA","date":"2020-11-18T17:43:57.000Z","Category":["Git"],"Tag":["Git"],"summary":"Git\u5206\u652F-\u53D8\u57FA \u5728 Git \u4E2D\u6574\u5408\u6765\u81EA\u4E0D\u540C\u5206\u652F\u7684\u4FEE\u6539\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1Amerge \u4EE5\u53CA rebase\u3002 \u5728\u672C\u8282\u4E2D\u6211\u4EEC\u5C06\u5B66\u4E60\u4EC0\u4E48\u662F\u201C\u53D8\u57FA\u201D\uFF0C\u600E\u6837\u4F7F\u7528\u201C\u53D8\u57FA\u201D\uFF0C\u5E76\u5C06\u5C55\u793A\u8BE5\u64CD\u4F5C\u7684\u60CA\u8273\u4E4B\u5904\uFF0C\u4EE5\u53CA\u6307\u51FA\u5728\u4F55\u79CD\u60C5\u51B5\u4E0B\u4F60\u5E94\u907F\u514D\u4F7F\u7528\u5B83\u3002 \u53D8\u57FA\u7684\u57FA\u672C\u64CD\u4F5C \u8BF7\u56DE\u987E\u4E4B\u524D\u5728 \u5206\u652F\u7684\u5408\u5E76 \u4E2D\u7684\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u4F1A\u770B\u5230\u5F00\u53D1\u4EFB\u52A1\u5206\u53C9\u5230\u4E24\u4E2A\u4E0D\u540C\u5206\u652F\uFF0C\u53C8\u5404\u81EA\u63D0\u4EA4\u4E86\u66F4\u65B0\u3002 \u56FE0. \u5206\u53C9\u7684\u63D0\u4EA4\u5386\u53F2 \u25B2 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/cicd/git/10.Git%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Git\u5206\u652F-\u53D8\u57FA"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-11-18T17:43:57.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u53D8\u57FA\u7684\u57FA\u672C\u64CD\u4F5C","slug":"\u53D8\u57FA\u7684\u57FA\u672C\u64CD\u4F5C","link":"#\u53D8\u57FA\u7684\u57FA\u672C\u64CD\u4F5C","children":[{"level":3,"title":"\u6982\u5FF5","slug":"\u6982\u5FF5","link":"#\u6982\u5FF5","children":[]},{"level":3,"title":"\u539F\u7406","slug":"\u539F\u7406","link":"#\u539F\u7406","children":[]},{"level":3,"title":"\u6B65\u9AA4","slug":"\u6B65\u9AA4","link":"#\u6B65\u9AA4","children":[]},{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9","link":"#\u4F18\u70B9","children":[]}]},{"level":2,"title":"\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50","slug":"\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50","link":"#\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50","children":[{"level":3,"title":"\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50","slug":"\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50-1","link":"#\u66F4\u6709\u8DA3\u7684\u53D8\u57FA\u4F8B\u5B50-1","children":[]},{"level":3,"title":"--onto\u9009\u9879","slug":"onto\u9009\u9879","link":"#onto\u9009\u9879","children":[]},{"level":3,"title":"\u7701\u53BB\u5148\u5207\u6362\u5230\u6E90\u5206\u652F\u7684\u6B65\u9AA4","slug":"\u7701\u53BB\u5148\u5207\u6362\u5230\u6E90\u5206\u652F\u7684\u6B65\u9AA4","link":"#\u7701\u53BB\u5148\u5207\u6362\u5230\u6E90\u5206\u652F\u7684\u6B65\u9AA4","children":[]}]},{"level":2,"title":"\u53D8\u57FA\u7684\u98CE\u9669","slug":"\u53D8\u57FA\u7684\u98CE\u9669","link":"#\u53D8\u57FA\u7684\u98CE\u9669","children":[{"level":3,"title":"\u91D1\u79D1\u7389\u5F8B","slug":"\u91D1\u79D1\u7389\u5F8B","link":"#\u91D1\u79D1\u7389\u5F8B","children":[]},{"level":3,"title":"\u53D8\u57FA\u7684\u5B9E\u8D28","slug":"\u53D8\u57FA\u7684\u5B9E\u8D28","link":"#\u53D8\u57FA\u7684\u5B9E\u8D28","children":[]}]},{"level":2,"title":"\u7528\u53D8\u57FA\u89E3\u51B3\u53D8\u57FA","slug":"\u7528\u53D8\u57FA\u89E3\u51B3\u53D8\u57FA","link":"#\u7528\u53D8\u57FA\u89E3\u51B3\u53D8\u57FA","children":[]},{"level":2,"title":"\u53D8\u57FA vs. \u5408\u5E76","slug":"\u53D8\u57FA-vs-\u5408\u5E76","link":"#\u53D8\u57FA-vs-\u5408\u5E76","children":[]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":15.39,"words":4616},"filePathRelative":"zh/cicd/git/10.Git\u5206\u652F-\u53D8\u57FA.md","localizedDate":"2020\u5E7411\u670819\u65E5"}');export{e as data};
