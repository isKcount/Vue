const e=JSON.parse('{"key":"v-c55b938a","path":"/zh/cicd/ci/2.Gitlab-Runer%E8%BF%9E%E6%8E%A5K8S.html","title":"Gitlab-Runner + k8s \u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72","lang":"zh-CN","frontmatter":{"title":"Gitlab-Runner + k8s \u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72","date":"2022-04-26T12:12:00.000Z","Category":["CICD"],"Tag":["CICD"],"summary":"Gitlab-Runner + k8s \u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72 \u8FC7\u7A0B\u8BF4\u660E 1. \u60F3\u8981\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72\uFF0C\u5C31\u8981\u501F\u52A9\u5DE5\u5177kubectl\u5B89\u88C5\u6587\u6863 https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux 2. \u5C06\u8BE5\u5DE5\u5177\u96C6\u6210\u5230 alpine \u955C\u50CF\u91CC\u9762\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u53BB docker ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/cicd/ci/2.Gitlab-Runer%E8%BF%9E%E6%8E%A5K8S.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Gitlab-Runner + k8s \u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-04-26T12:12:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u8FC7\u7A0B\u8BF4\u660E","slug":"\u8FC7\u7A0B\u8BF4\u660E","link":"#\u8FC7\u7A0B\u8BF4\u660E","children":[]},{"level":2,"title":"\u51C6\u5907kubectl\u955C\u50CF","slug":"\u51C6\u5907kubectl\u955C\u50CF","link":"#\u51C6\u5907kubectl\u955C\u50CF","children":[{"level":3,"title":"1.\u7F16\u6392Dockerfile","slug":"_1-\u7F16\u6392dockerfile","link":"#_1-\u7F16\u6392dockerfile","children":[]},{"level":3,"title":"2.\u6784\u5EFA\u955C\u50CF","slug":"_2-\u6784\u5EFA\u955C\u50CF","link":"#_2-\u6784\u5EFA\u955C\u50CF","children":[]}]},{"level":2,"title":"\u51C6\u5907k8s\u914D\u7F6E\u6587\u4EF6","slug":"\u51C6\u5907k8s\u914D\u7F6E\u6587\u4EF6","link":"#\u51C6\u5907k8s\u914D\u7F6E\u6587\u4EF6","children":[{"level":3,"title":"1.\u590D\u5236config","slug":"_1-\u590D\u5236config","link":"#_1-\u590D\u5236config","children":[]},{"level":3,"title":"2.\u5728GitLab\u6DFB\u52A0\u53D8\u91CF","slug":"_2-\u5728gitlab\u6DFB\u52A0\u53D8\u91CF","link":"#_2-\u5728gitlab\u6DFB\u52A0\u53D8\u91CF","children":[]},{"level":3,"title":"3. Gitlab\u5176\u4ED6\u7EC6\u8282","slug":"_3-gitlab\u5176\u4ED6\u7EC6\u8282","link":"#_3-gitlab\u5176\u4ED6\u7EC6\u8282","children":[]}]},{"level":2,"title":"\u914D\u7F6ECICD\u6D41\u6C34\u7EBF","slug":"\u914D\u7F6Ecicd\u6D41\u6C34\u7EBF","link":"#\u914D\u7F6Ecicd\u6D41\u6C34\u7EBF","children":[{"level":3,"title":"1.\u6DFB\u52A0\u914D\u7F6E","slug":"_1-\u6DFB\u52A0\u914D\u7F6E","link":"#_1-\u6DFB\u52A0\u914D\u7F6E","children":[]},{"level":3,"title":"2.\u6D4B\u8BD5\u6D41\u6C34\u7EBF\u811A\u672C","slug":"_2-\u6D4B\u8BD5\u6D41\u6C34\u7EBF\u811A\u672C","link":"#_2-\u6D4B\u8BD5\u6D41\u6C34\u7EBF\u811A\u672C","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1060},"filePathRelative":"zh/cicd/ci/2.Gitlab-Runer\u8FDE\u63A5K8S.md","localizedDate":"2022\u5E744\u670826\u65E5"}');export{e as data};
