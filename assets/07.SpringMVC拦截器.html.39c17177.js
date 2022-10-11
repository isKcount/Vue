import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.85823306.js";const e={},p=t(`<h1 id="springmvc\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#springmvc\u62E6\u622A\u5668" aria-hidden="true">#</a> SpringMVC\u62E6\u622A\u5668</h1><h2 id="_1-\u62E6\u622A\u5668interceptor" tabindex="-1"><a class="header-anchor" href="#_1-\u62E6\u622A\u5668interceptor" aria-hidden="true">#</a> 1.\u62E6\u622A\u5668Interceptor</h2><h3 id="_1-1\u62E6\u622A\u5668\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1\u62E6\u622A\u5668\u7684\u4F5C\u7528" aria-hidden="true">#</a> 1.1\u62E6\u622A\u5668\u7684\u4F5C\u7528</h3><p>Spring MVC \u7684<code>\u62E6\u622A\u5668</code>\u7C7B\u4F3C\u4E8E Servlet \u5F00\u53D1\u4E2D\u7684\u8FC7\u6EE4\u5668 Filter\uFF0C\u7528\u4E8E\u5BF9\u5904\u7406\u5668\u8FDB\u884C<code>\u9884\u5904\u7406</code>\u548C<code>\u540E\u5904\u7406</code>\u3002</p><p>\u5C06\u62E6\u622A\u5668\u6309\u4E00\u5B9A\u7684\u987A\u5E8F\u8054\u7ED3\u6210\u4E00\u6761\u94FE\uFF0C\u8FD9\u6761\u94FE\u79F0\u4E3A<code>\u62E6\u622A\u5668\u94FE\uFF08Interceptor Chain\uFF09</code>\u3002\u5728\u8BBF\u95EE\u88AB\u62E6\u622A\u7684\u65B9 \u6CD5\u6216\u5B57\u6BB5\u65F6\uFF0C\u62E6\u622A\u5668\u94FE\u4E2D\u7684\u62E6\u622A\u5668\u5C31\u4F1A\u6309\u5176\u4E4B\u524D\u5B9A\u4E49\u7684\u987A\u5E8F\u88AB\u8C03\u7528\u3002\u62E6\u622A\u5668\u4E5F\u662FAOP\u601D\u60F3\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p><h3 id="_1-2-\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_1-2-\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 1.2 \u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668</h3><p>\u62E6\u622A\u5668\u548C\u8FC7\u6EE4\u5668\u7684\u533A\u522B</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220727211437497.png" alt="image-20220727211437497" loading="lazy"></p><h3 id="_1-3-\u62E6\u622A\u5668\u7684\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#_1-3-\u62E6\u622A\u5668\u7684\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> 1.3 \u62E6\u622A\u5668\u7684\u5FEB\u901F\u5165\u95E8</h3><p>\u81EA\u5B9A\u4E49\u62E6\u622A\u5668\u5F88\u7B80\u5355\uFF0C\u53EA\u6709\u5982\u4E0B\u4E09\u6B65\uFF1A</p><p>\u2460 \u521B\u5EFA\u62E6\u622A\u5668\u7C7B\u5B9E\u73B0HandlerInterceptor\u63A5\u53E3</p><p>\u2461 \u914D\u7F6E\u62E6\u622A\u5668</p><p>\u2462 \u6D4B\u8BD5\u62E6\u622A\u5668\u7684\u62E6\u622A\u6548\u679C</p><p>\u521B\u5EFA\u62E6\u622A\u5668\u7C7B\u5B9E\u73B0HandlerInterceptor\u63A5\u53E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyHandlerInterceptor</span>  <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;preHandler running...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;postHandle running...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;afterCompletion running...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u62E6\u622A\u5668</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>	<span class="token comment">&lt;!--\u914D\u7F6E\u62E6\u622A\u5668--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptors</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/**<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.interceptor.MyHandlerInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u62E6\u622A\u5668\u7684\u62E6\u622A\u6548\u679C\uFF08\u7F16\u5199\u76EE\u6807\u65B9\u6CD5\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/show&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76EE\u6807\u65B9\u6CD5\u6267\u884C\u4E2D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ModelAndView</span> modelAndView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        modelAndView<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;itcast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        modelAndView<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// \u9ED8\u8BA4\u7684\u662Findex.jsp </span>
        <span class="token keyword">return</span> modelAndView<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u62E6\u622A\u5668\u7684\u62E6\u622A\u6548\u679C</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220727221243239.png" alt="image-20220727221243239" loading="lazy"></p><h3 id="_1-4-\u62E6\u622A\u65B9\u6CD5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-4-\u62E6\u622A\u65B9\u6CD5\u8BF4\u660E" aria-hidden="true">#</a> 1.4 \u62E6\u622A\u65B9\u6CD5\u8BF4\u660E</h3><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220727223758328.png" alt="image-20220727223758328" loading="lazy"></p>`,23),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","07.SpringMVC\u62E6\u622A\u5668.html.vue"]]);export{d as default};
