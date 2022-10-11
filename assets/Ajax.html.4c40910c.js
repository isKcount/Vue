const e=JSON.parse('{"key":"v-478a1f26","path":"/zh/isKcount/5/Ajax.html","title":"Ajax\u7684\u57FA\u672C\u4F7F\u7528","lang":"zh-CN","frontmatter":{"title":"Ajax\u7684\u57FA\u672C\u4F7F\u7528","icon":"ajax","summary":"Ajax 1.\u524D\u63D0\u77E5\u8BC6 1.1 Ajax\u7B80\u8981\\rAJAX = Asynchronous JavaScript and XML\uFF08\u5F02\u6B65\u7684 JavaScript \u548C XML\uFF09; \\rAJAX \u662F\u4E00\u79CD\u5728\u65E0\u9700\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u7F51\u9875\u7684\u60C5\u51B5\u4E0B\uFF0C\u80FD\u591F\u66F4\u65B0\u90E8\u5206\u7F51\u9875\u7684\u6280\u672F\u3002; \\rAjax \u4E0D\u662F\u4E00\u79CD\u65B0\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u800C\u662F\u4E00\u79CD\u7528\u4E8E\u521B\u5EFA\u66F4\u597D\u66F4\u5FEB\u4EE5\u53CA\u4EA4\u4E92\u6027\u66F4\u5F3A\u7684Web\u5E94\u7528\u7A0B\u5E8F\u7684\u6280\u672F\u3002; \\r\u5728 200","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/isKcount/5/Ajax.html"}],["meta",{"property":"og:site_name","content":"\u6587\u6863\u6F14\u793A"}],["meta",{"property":"og:title","content":"Ajax\u7684\u57FA\u672C\u4F7F\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T05:08:11.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-11T05:08:11.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.\u524D\u63D0\u77E5\u8BC6","slug":"_1-\u524D\u63D0\u77E5\u8BC6","link":"#_1-\u524D\u63D0\u77E5\u8BC6","children":[{"level":3,"title":"1.1 Ajax\u7B80\u8981","slug":"_1-1-ajax\u7B80\u8981","link":"#_1-1-ajax\u7B80\u8981","children":[]},{"level":3,"title":"1.2 Ajax\u7684\u4F18\u7F3A\u70B9","slug":"_1-2-ajax\u7684\u4F18\u7F3A\u70B9","link":"#_1-2-ajax\u7684\u4F18\u7F3A\u70B9","children":[]},{"level":3,"title":"1.3 HTTP\u534F\u8BAE\u6982\u5FF5","slug":"_1-3-http\u534F\u8BAE\u6982\u5FF5","link":"#_1-3-http\u534F\u8BAE\u6982\u5FF5","children":[]},{"level":3,"title":"1.4 \u6D4F\u89C8\u5668\u5F00\u53D1\u5DE5\u5177","slug":"_1-4-\u6D4F\u89C8\u5668\u5F00\u53D1\u5DE5\u5177","link":"#_1-4-\u6D4F\u89C8\u5668\u5F00\u53D1\u5DE5\u5177","children":[]},{"level":3,"title":"1.5 Node.js\u5B89\u88C5","slug":"_1-5-node-js\u5B89\u88C5","link":"#_1-5-node-js\u5B89\u88C5","children":[]},{"level":3,"title":"1.6 Express\u5F00\u53D1\u6846\u67B6","slug":"_1-6-express\u5F00\u53D1\u6846\u67B6","link":"#_1-6-express\u5F00\u53D1\u6846\u67B6","children":[]}]},{"level":2,"title":"2.Express\u57FA\u672C\u4F7F\u7528","slug":"_2-express\u57FA\u672C\u4F7F\u7528","link":"#_2-express\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"3. \u539F\u751FAjax","slug":"_3-\u539F\u751Fajax","link":"#_3-\u539F\u751Fajax","children":[{"level":3,"title":"3.1 Ajax\u6848\u4F8B\u51C6\u5907","slug":"_3-1-ajax\u6848\u4F8B\u51C6\u5907","link":"#_3-1-ajax\u6848\u4F8B\u51C6\u5907","children":[]},{"level":3,"title":"3.2 \u53D1\u9001GET\u8BF7\u6C42","slug":"_3-2-\u53D1\u9001get\u8BF7\u6C42","link":"#_3-2-\u53D1\u9001get\u8BF7\u6C42","children":[]},{"level":3,"title":"3.3 \u53D1\u9001POST\u8BF7\u6C42","slug":"_3-3-\u53D1\u9001post\u8BF7\u6C42","link":"#_3-3-\u53D1\u9001post\u8BF7\u6C42","children":[]},{"level":3,"title":"3.4 \u8BBE\u7F6E\u8BF7\u6C42\u5934","slug":"_3-4-\u8BBE\u7F6E\u8BF7\u6C42\u5934","link":"#_3-4-\u8BBE\u7F6E\u8BF7\u6C42\u5934","children":[]},{"level":3,"title":"3.5 \u670D\u52A1\u7AEF\u54CD\u5E94JSON","slug":"_3-5-\u670D\u52A1\u7AEF\u54CD\u5E94json","link":"#_3-5-\u670D\u52A1\u7AEF\u54CD\u5E94json","children":[]},{"level":3,"title":"3.6 \u81EA\u52A8\u91CD\u542F\u5DE5\u5177","slug":"_3-6-\u81EA\u52A8\u91CD\u542F\u5DE5\u5177","link":"#_3-6-\u81EA\u52A8\u91CD\u542F\u5DE5\u5177","children":[]},{"level":3,"title":"3.7 IE\u7F13\u5B58\u95EE\u9898","slug":"_3-7-ie\u7F13\u5B58\u95EE\u9898","link":"#_3-7-ie\u7F13\u5B58\u95EE\u9898","children":[]},{"level":3,"title":"3.8 \u8BF7\u6C42\u8D85\u65F6\u548C\u5F02\u5E38","slug":"_3-8-\u8BF7\u6C42\u8D85\u65F6\u548C\u5F02\u5E38","link":"#_3-8-\u8BF7\u6C42\u8D85\u65F6\u548C\u5F02\u5E38","children":[]},{"level":3,"title":"3.9 \u53D6\u6D88\u8BF7\u6C42","slug":"_3-9-\u53D6\u6D88\u8BF7\u6C42","link":"#_3-9-\u53D6\u6D88\u8BF7\u6C42","children":[]},{"level":3,"title":"3.10 \u91CD\u590D\u8BF7\u6C42\u7684\u4F18\u5316","slug":"_3-10-\u91CD\u590D\u8BF7\u6C42\u7684\u4F18\u5316","link":"#_3-10-\u91CD\u590D\u8BF7\u6C42\u7684\u4F18\u5316","children":[]}]},{"level":2,"title":"4. JQuery\u53D1\u9001Ajax\u8BF7\u6C42","slug":"_4-jquery\u53D1\u9001ajax\u8BF7\u6C42","link":"#_4-jquery\u53D1\u9001ajax\u8BF7\u6C42","children":[{"level":3,"title":"4.1 JQuery\u65B9\u6CD5","slug":"_4-1-jquery\u65B9\u6CD5","link":"#_4-1-jquery\u65B9\u6CD5","children":[]},{"level":3,"title":"4.2 JQuery\u901A\u7528\u65B9\u6CD5","slug":"_4-2-jquery\u901A\u7528\u65B9\u6CD5","link":"#_4-2-jquery\u901A\u7528\u65B9\u6CD5","children":[]}]},{"level":2,"title":"5. Axios\u53D1\u9001Ajax\u8BF7\u6C42","slug":"_5-axios\u53D1\u9001ajax\u8BF7\u6C42","link":"#_5-axios\u53D1\u9001ajax\u8BF7\u6C42","children":[{"level":3,"title":"5.1 Axios\u65B9\u6CD5","slug":"_5-1-axios\u65B9\u6CD5","link":"#_5-1-axios\u65B9\u6CD5","children":[]},{"level":3,"title":"5.2 Axios\u901A\u7528\u65B9\u6CD5","slug":"_5-2-axios\u901A\u7528\u65B9\u6CD5","link":"#_5-2-axios\u901A\u7528\u65B9\u6CD5","children":[]},{"level":3,"title":"5.3 Fetch\u53D1\u9001Ajax\u8BF7\u6C42","slug":"_5-3-fetch\u53D1\u9001ajax\u8BF7\u6C42","link":"#_5-3-fetch\u53D1\u9001ajax\u8BF7\u6C42","children":[]}]},{"level":2,"title":"6. Ajax\u8DE8\u57DF","slug":"_6-ajax\u8DE8\u57DF","link":"#_6-ajax\u8DE8\u57DF","children":[{"level":3,"title":"6.1 \u540C\u6E90\u7B56\u7565","slug":"_6-1-\u540C\u6E90\u7B56\u7565","link":"#_6-1-\u540C\u6E90\u7B56\u7565","children":[]},{"level":3,"title":"6.2 JSONP\u89E3\u51B3\u8DE8\u57DF","slug":"_6-2-jsonp\u89E3\u51B3\u8DE8\u57DF","link":"#_6-2-jsonp\u89E3\u51B3\u8DE8\u57DF","children":[]},{"level":3,"title":"6.3 JSONP\u8DE8\u8D8A\u5B9E\u73B0","slug":"_6-3-jsonp\u8DE8\u8D8A\u5B9E\u73B0","link":"#_6-3-jsonp\u8DE8\u8D8A\u5B9E\u73B0","children":[]},{"level":3,"title":"6.4 CORS","slug":"_6-4-cors","link":"#_6-4-cors","children":[]}]}],"git":{"createdTime":1665464891000,"updatedTime":1665464891000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":18.4,"words":5521},"filePathRelative":"zh/isKcount/5/Ajax.md","localizedDate":"2022\u5E7410\u670811\u65E5"}');export{e as data};
