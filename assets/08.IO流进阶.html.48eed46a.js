const e=JSON.parse('{"key":"v-4b43f13c","path":"/zh/isKcount/4/java/jj/08.IO%E6%B5%81%E8%BF%9B%E9%98%B6.html","title":"Java\u7684IO\u6D41\u8FDB\u9636","lang":"zh-CN","frontmatter":{"title":"Java\u7684IO\u6D41\u8FDB\u9636","date":"2022-06-24T09:14:20.000Z","Category":["Java"],"Tag":["Java"],"summary":"IO\u6D41\u8FDB\u9636 \u5B57\u7B26\u7C7B \u5B57\u7B26\u6D41 1.\u5B57\u8282\u6D41\u8BFB\u53D6\u4E2D\u6587\u8F93\u51FA\u4F1A\u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F\\r\u4F1A\u4E71\u7801\u3002\u6216\u8005\u5185\u5B58\u6EA2\u51FA\u3002; 2.\u8BFB\u53D6\u4E2D\u6587\u8F93\u51FA\uFF0C\u54EA\u4E2A\u6D41\u66F4\u5408\u9002\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\\r\u5B57\u7B26\u6D41\u66F4\u5408\u9002\uFF0C\u6700\u5C0F\u5355\u4F4D\u662F\u6309\u7167\u5355\u4E2A\u5B57\u7B26\u8BFB\u53D6\u7684\u3002; \u5B57\u7B26\u8F93\u5165\u6D41 \u6587\u4EF6\u5B57\u7B26\u8F93\u5165\u6D41\uFF1AReader \u4F5C\u7528\uFF1A\u4EE5\u5185\u5B58\u4E3A\u57FA\u51C6\uFF0C\u628A\u78C1\u76D8\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u4EE5\u5B57\u7B26\u7684\u5F62\u5F0F\u8BFB\u53D6\u5230\u5185\u5B58\u4E2D\u53BB\u3002 \u6784\u9020\u5668 \u8BF4\u660E | ------------------------","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/isKcount/4/java/jj/08.IO%E6%B5%81%E8%BF%9B%E9%98%B6.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Java\u7684IO\u6D41\u8FDB\u9636"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-06-24T09:14:20.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u5B57\u7B26\u7C7B","slug":"\u5B57\u7B26\u7C7B","link":"#\u5B57\u7B26\u7C7B","children":[{"level":3,"title":"\u5B57\u7B26\u6D41","slug":"\u5B57\u7B26\u6D41","link":"#\u5B57\u7B26\u6D41","children":[]},{"level":3,"title":"\u5B57\u7B26\u8F93\u5165\u6D41","slug":"\u5B57\u7B26\u8F93\u5165\u6D41","link":"#\u5B57\u7B26\u8F93\u5165\u6D41","children":[]}]},{"level":2,"title":"\u7F13\u51B2\u6D41","slug":"\u7F13\u51B2\u6D41","link":"#\u7F13\u51B2\u6D41","children":[{"level":3,"title":"\u7F13\u5B58\u6D41\u6982\u8FF0","slug":"\u7F13\u5B58\u6D41\u6982\u8FF0","link":"#\u7F13\u5B58\u6D41\u6982\u8FF0","children":[]},{"level":3,"title":"\u5B57\u8282\u7F13\u51B2\u6D41","slug":"\u5B57\u8282\u7F13\u51B2\u6D41","link":"#\u5B57\u8282\u7F13\u51B2\u6D41","children":[]},{"level":3,"title":"\u5B57\u8282\u7F13\u51B2\u6D41\u7684\u6027\u80FD\u5206\u6790","slug":"\u5B57\u8282\u7F13\u51B2\u6D41\u7684\u6027\u80FD\u5206\u6790","link":"#\u5B57\u8282\u7F13\u51B2\u6D41\u7684\u6027\u80FD\u5206\u6790","children":[]},{"level":3,"title":"\u5B57\u7B26\u7F13\u51B2\u8F93\u51FA\u6D41","slug":"\u5B57\u7B26\u7F13\u51B2\u8F93\u51FA\u6D41","link":"#\u5B57\u7B26\u7F13\u51B2\u8F93\u51FA\u6D41","children":[]}]},{"level":2,"title":"\u8F6C\u6362\u6D41","slug":"\u8F6C\u6362\u6D41","link":"#\u8F6C\u6362\u6D41","children":[{"level":3,"title":"\u601D\u8003","slug":"\u601D\u8003","link":"#\u601D\u8003","children":[]},{"level":3,"title":"\u5B57\u7B26\u8F93\u5165\u8F6C\u6362\u6D41","slug":"\u5B57\u7B26\u8F93\u5165\u8F6C\u6362\u6D41","link":"#\u5B57\u7B26\u8F93\u5165\u8F6C\u6362\u6D41","children":[]},{"level":3,"title":"\u5B57\u7B26\u8F93\u51FA\u8F6C\u6362\u6D41","slug":"\u5B57\u7B26\u8F93\u51FA\u8F6C\u6362\u6D41","link":"#\u5B57\u7B26\u8F93\u51FA\u8F6C\u6362\u6D41","children":[]}]},{"level":2,"title":"\u5E8F\u5217\u5316\u5BF9\u8C61","slug":"\u5E8F\u5217\u5316\u5BF9\u8C61","link":"#\u5E8F\u5217\u5316\u5BF9\u8C61","children":[{"level":3,"title":"\u5BF9\u8C61\u5E8F\u5217\u5316","slug":"\u5BF9\u8C61\u5E8F\u5217\u5316","link":"#\u5BF9\u8C61\u5E8F\u5217\u5316","children":[]},{"level":3,"title":"\u5BF9\u8C61\u53CD\u5E8F\u5217\u5316","slug":"\u5BF9\u8C61\u53CD\u5E8F\u5217\u5316","link":"#\u5BF9\u8C61\u53CD\u5E8F\u5217\u5316","children":[]}]},{"level":2,"title":"\u6253\u5370\u6D41","slug":"\u6253\u5370\u6D41","link":"#\u6253\u5370\u6D41","children":[{"level":3,"title":"\u6253\u5370\u6D41","slug":"\u6253\u5370\u6D41-1","link":"#\u6253\u5370\u6D41-1","children":[]},{"level":3,"title":"\u8F93\u51FA\u8BED\u53E5\u91CD\u5B9A\u5411","slug":"\u8F93\u51FA\u8BED\u53E5\u91CD\u5B9A\u5411","link":"#\u8F93\u51FA\u8BED\u53E5\u91CD\u5B9A\u5411","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Properties\u5C5E\u6027\u96C6\u5BF9\u8C61","slug":"properties\u5C5E\u6027\u96C6\u5BF9\u8C61","link":"#properties\u5C5E\u6027\u96C6\u5BF9\u8C61","children":[]},{"level":3,"title":"Properties\u7684API","slug":"properties\u7684api","link":"#properties\u7684api","children":[]}]},{"level":2,"title":"IO\u6846\u67B6","slug":"io\u6846\u67B6","link":"#io\u6846\u67B6","children":[{"level":3,"title":"commons-io\u6982\u8FF0","slug":"commons-io\u6982\u8FF0","link":"#commons-io\u6982\u8FF0","children":[]},{"level":3,"title":"FileUtils\u65B9\u6CD5","slug":"fileutils\u65B9\u6CD5","link":"#fileutils\u65B9\u6CD5","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":20.56,"words":6168},"filePathRelative":"zh/isKcount/4/java/jj/08.IO\u6D41\u8FDB\u9636.md","localizedDate":"2022\u5E746\u670824\u65E5"}');export{e as data};
