const e=JSON.parse('{"key":"v-1bd68b4c","path":"/zh/isKcount/2/CKA/05.Kubernetes%E7%9B%91%E6%8E%A7%E4%B8%8E%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86.html","title":"Kubernetes\u76D1\u63A7\u4E0E\u65E5\u5FD7\u7BA1\u7406","lang":"zh-CN","frontmatter":{"title":"Kubernetes\u76D1\u63A7\u4E0E\u65E5\u5FD7\u7BA1\u7406","date":"2022-01-22T12:12:03.000Z","Tag":["Kubernetes"],"summary":"Kubernetes\u76D1\u63A7\u4E0E\u65E5\u5FD7\u7BA1\u7406 \u67E5\u770B\u8D44\u6E90\u96C6\u7FA4\u72B6\u6001 \u67E5\u770Bmaster\u7EC4\u4EF6\u72B6\u6001 \u67E5\u770Bnode\u72B6\u6001 \u67E5\u770BApiserver\u4EE3\u7406\u7684URL \u67E5\u770B\u7FA4\u8BE6\u7EC6\u4FE1\u606F \u67E5\u770B\u8D44\u6E90\u4FE1\u606F \u96C6\u7FA4\u9519\u8BEF\u6392\u67E5 \u5F53\u6211\u4EEC\u4F7F\u7528kubectl\u5DE5\u5177\u6267\u884C\u51FA\u73B0\u9519\u8BEF\u7684\u65F6\u5019\uFF1F\\r\\" kubectl > kube-apiserver > etcd \\" \u5F53get node\u7684\u65F6\u5019\u6709\u8282\u70B9\u663E\u793ANotReady\u72B6\u6001\uFF0C\u600E\u4E48","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/isKcount/2/CKA/05.Kubernetes%E7%9B%91%E6%8E%A7%E4%B8%8E%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Kubernetes\u76D1\u63A7\u4E0E\u65E5\u5FD7\u7BA1\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-01-22T12:12:03.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u67E5\u770B\u8D44\u6E90\u96C6\u7FA4\u72B6\u6001","slug":"\u67E5\u770B\u8D44\u6E90\u96C6\u7FA4\u72B6\u6001","link":"#\u67E5\u770B\u8D44\u6E90\u96C6\u7FA4\u72B6\u6001","children":[{"level":3,"title":"\u67E5\u770Bmaster\u7EC4\u4EF6\u72B6\u6001","slug":"\u67E5\u770Bmaster\u7EC4\u4EF6\u72B6\u6001","link":"#\u67E5\u770Bmaster\u7EC4\u4EF6\u72B6\u6001","children":[]},{"level":3,"title":"\u67E5\u770Bnode\u72B6\u6001","slug":"\u67E5\u770Bnode\u72B6\u6001","link":"#\u67E5\u770Bnode\u72B6\u6001","children":[]},{"level":3,"title":"\u67E5\u770BApiserver\u4EE3\u7406\u7684URL","slug":"\u67E5\u770Bapiserver\u4EE3\u7406\u7684url","link":"#\u67E5\u770Bapiserver\u4EE3\u7406\u7684url","children":[]},{"level":3,"title":"\u67E5\u770B\u7FA4\u8BE6\u7EC6\u4FE1\u606F","slug":"\u67E5\u770B\u7FA4\u8BE6\u7EC6\u4FE1\u606F","link":"#\u67E5\u770B\u7FA4\u8BE6\u7EC6\u4FE1\u606F","children":[]},{"level":3,"title":"\u67E5\u770B\u8D44\u6E90\u4FE1\u606F","slug":"\u67E5\u770B\u8D44\u6E90\u4FE1\u606F","link":"#\u67E5\u770B\u8D44\u6E90\u4FE1\u606F","children":[]},{"level":3,"title":"\u96C6\u7FA4\u9519\u8BEF\u6392\u67E5","slug":"\u96C6\u7FA4\u9519\u8BEF\u6392\u67E5","link":"#\u96C6\u7FA4\u9519\u8BEF\u6392\u67E5","children":[]},{"level":3,"title":"\u96C6\u7FA4\u4E0D\u5065\u5EB7","slug":"\u96C6\u7FA4\u4E0D\u5065\u5EB7","link":"#\u96C6\u7FA4\u4E0D\u5065\u5EB7","children":[]}]},{"level":2,"title":"\u76D1\u63A7\u96C6\u7FA4\u8D44\u6E90\u5229\u7528\u7387","slug":"\u76D1\u63A7\u96C6\u7FA4\u8D44\u6E90\u5229\u7528\u7387","link":"#\u76D1\u63A7\u96C6\u7FA4\u8D44\u6E90\u5229\u7528\u7387","children":[]},{"level":2,"title":"\u76D1\u63A7\u6570\u636E\u805A\u5408\u5668","slug":"\u76D1\u63A7\u6570\u636E\u805A\u5408\u5668","link":"#\u76D1\u63A7\u6570\u636E\u805A\u5408\u5668","children":[{"level":3,"title":"Metrics Server\u90E8\u7F72\uFF1A","slug":"metrics-server\u90E8\u7F72","link":"#metrics-server\u90E8\u7F72","children":[]},{"level":3,"title":"\u5982\u679C\u63D0\u793A\u62A5\u9519\uFF1A","slug":"\u5982\u679C\u63D0\u793A\u62A5\u9519","link":"#\u5982\u679C\u63D0\u793A\u62A5\u9519","children":[]},{"level":3,"title":"\u67E5\u770BNode\u8D44\u6E90\u6D88\u8017","slug":"\u67E5\u770Bnode\u8D44\u6E90\u6D88\u8017","link":"#\u67E5\u770Bnode\u8D44\u6E90\u6D88\u8017","children":[]},{"level":3,"title":"\u67E5\u770BPod\u8D44\u6E90\u6D88\u8017","slug":"\u67E5\u770Bpod\u8D44\u6E90\u6D88\u8017","link":"#\u67E5\u770Bpod\u8D44\u6E90\u6D88\u8017","children":[]},{"level":3,"title":"\u7BA1\u7406K8s\u5E94\u7528\u65E5\u5FD7","slug":"\u7BA1\u7406k8s\u5E94\u7528\u65E5\u5FD7","link":"#\u7BA1\u7406k8s\u5E94\u7528\u65E5\u5FD7","children":[]},{"level":3,"title":"Pod\u521B\u5EFA\u4E00\u4E2A\u8FB9\u8F66\u5BB9\u5668\u8BFB\u53D6\u4E1A\u52A1\u5BB9\u5668\u65E5\u5FD7","slug":"pod\u521B\u5EFA\u4E00\u4E2A\u8FB9\u8F66\u5BB9\u5668\u8BFB\u53D6\u4E1A\u52A1\u5BB9\u5668\u65E5\u5FD7","link":"#pod\u521B\u5EFA\u4E00\u4E2A\u8FB9\u8F66\u5BB9\u5668\u8BFB\u53D6\u4E1A\u52A1\u5BB9\u5668\u65E5\u5FD7","children":[]},{"level":3,"title":"\u6536\u96C6K8s\u65E5\u5FD7\u601D\u8DEF","slug":"\u6536\u96C6k8s\u65E5\u5FD7\u601D\u8DEF","link":"#\u6536\u96C6k8s\u65E5\u5FD7\u601D\u8DEF","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1148},"filePathRelative":"zh/isKcount/2/CKA/05.Kubernetes\u76D1\u63A7\u4E0E\u65E5\u5FD7\u7BA1\u7406.md","localizedDate":"2022\u5E741\u670822\u65E5"}');export{e as data};
