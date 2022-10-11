import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.85823306.js";const p={},e=t(`<h1 id="springmvc\u5F02\u5E38\u5904\u7406\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#springmvc\u5F02\u5E38\u5904\u7406\u673A\u5236" aria-hidden="true">#</a> SpringMVC\u5F02\u5E38\u5904\u7406\u673A\u5236</h1><h2 id="_1-\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> 1.\u5F02\u5E38\u5904\u7406</h2><h3 id="_1-1-\u5F02\u5E38\u5904\u7406\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5F02\u5E38\u5904\u7406\u7684\u601D\u8DEF" aria-hidden="true">#</a> 1.1 \u5F02\u5E38\u5904\u7406\u7684\u601D\u8DEF</h3><p>\u7CFB\u7EDF\u4E2D\u5F02\u5E38\u5305\u62EC\u4E24\u7C7B\uFF1A<code>\u9884\u671F\u5F02\u5E38</code>\u548C<code>\u8FD0\u884C\u65F6\u5F02\u5E38RuntimeException</code>\uFF0C\u524D\u8005\u901A\u8FC7\u6355\u83B7\u5F02\u5E38\u4ECE\u800C\u83B7\u53D6\u5F02\u5E38\u4FE1\u606F\uFF0C\u540E \u8005\u4E3B\u8981\u901A\u8FC7\u89C4\u8303\u4EE3\u7801\u5F00\u53D1\u3001\u6D4B\u8BD5\u7B49\u624B\u6BB5\u51CF\u5C11\u8FD0\u884C\u65F6\u5F02\u5E38\u7684\u53D1\u751F\u3002</p><p>\u7CFB\u7EDF\u7684<code>Dao\u3001Service\u3001Controller</code>\u51FA\u73B0\u90FD\u901A\u8FC7throws Exception\u5411\u4E0A\u629B\u51FA\uFF0C\u6700\u540E\u7531SpringMVC\u524D\u7AEF\u63A7\u5236\u5668\u4EA4 \u7531\u5F02\u5E38\u5904\u7406\u5668\u8FDB\u884C\u5F02\u5E38\u5904\u7406\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/isicman/image/main/img/image-20220727223602437.png" alt="image-20220727223602437" loading="lazy"></p><h3 id="_1-2-\u5F02\u5E38\u5904\u7406\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5F02\u5E38\u5904\u7406\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 1.2 \u5F02\u5E38\u5904\u7406\u7684\u4E24\u79CD\u65B9\u5F0F</h3><ul><li>\u4F7F\u7528Spring MVC\u63D0\u4F9B\u7684\u7B80\u5355\u5F02\u5E38\u5904\u7406\u5668SimpleMappingExceptionResolver</li><li>\u5B9E\u73B0Spring\u7684\u5F02\u5E38\u5904\u7406\u63A5\u53E3HandlerExceptionResolver \u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u5F02\u5E38\u5904\u7406\u5668</li></ul><h3 id="_1-3-\u7B80\u5355\u5F02\u5E38\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#_1-3-\u7B80\u5355\u5F02\u5E38\u5904\u7406\u5668" aria-hidden="true">#</a> 1.3 \u7B80\u5355\u5F02\u5E38\u5904\u7406\u5668</h3><p>\u7B80\u5355\u5F02\u5E38\u5904\u7406\u5668<code>SimpleMappingExceptionResolver</code></p><p>SpringMVC\u5DF2\u7ECF\u5B9A\u4E49\u597D\u4E86\u8BE5\u7C7B\u578B\u8F6C\u6362\u5668\uFF0C\u5728\u4F7F\u7528\u65F6\u53EF\u4EE5\u6839\u636E\u9879\u76EE\u60C5\u51B5\u8FDB\u884C\u76F8\u5E94\u5F02\u5E38\u4E0E\u89C6\u56FE\u7684\u6620\u5C04\u914D\u7F6E</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>    <span class="token comment">&lt;!--\u914D\u7F6E\u7B80\u5355\u7684\u6620\u5C04\u5F02\u5E38\u5904\u7406--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.handler.SimpleMappingExceptionResolver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultErrorView<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>   // \u8FD9\u662F\u9ED8\u8BA4\u7684error\u9875\u9762
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exceptionAttribute<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.exception.MyException<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.ClassCastException<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u81EA\u5B9A\u4E49\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_1-4-\u81EA\u5B9A\u4E49\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> 1.4 \u81EA\u5B9A\u4E49\u5F02\u5E38\u5904\u7406</h3><p>\u81EA\u5B9A\u4E49\u5F02\u5E38\u5904\u7406\u6B65\u9AA4</p><p>\u2460 \u521B\u5EFA\u5F02\u5E38\u5904\u7406\u5668\u7C7B\u5B9E\u73B0<code>HandlerExceptionResolver</code></p><p>\u2461 \u914D\u7F6E\u5F02\u5E38\u5904\u7406\u5668</p><p>\u2462 \u7F16\u5199\u5F02\u5E38\u9875\u9762</p><p>\u2463 \u6D4B\u8BD5\u5F02\u5E38\u8DF3\u8F6C</p><p>\u521B\u5EFA\u4E00\u4E2A\u4E1A\u52A1\u5C42\uFF0C\u7528\u6765\u5B58\u653E\u5F02\u5E38\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassCastException</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">DemoService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassCastException</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u8F6C\u6362\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> str <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> integer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u627E\u4E0D\u5230\u6587\u4EF6\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;C:/xxx/xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u81EA\u5B9A\u4E49\u5F02\u5E38\u9519\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u5F02\u5E38\u5904\u7406\u5668\u7C7B\u5B9E\u73B0<code>HandlerExceptionResolver</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyExceptionResolver</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerExceptionResolver</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">resolveException</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u5F02\u5E38\u7684\u4EE3\u7801\u5B9E\u73B0</span>
        <span class="token comment">// \u521B\u5EFAModelAndView\u5BF9\u8C61</span>

        <span class="token class-name">ModelAndView</span> modelAndView <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">MyException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            modelAndView<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u81EA\u5B9A\u4E49\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">ClassCastException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            modelAndView<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u7C7B\u578B\u8F6C\u6362\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        modelAndView<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> modelAndView<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u5F02\u5E38\u5904\u7406\u5668</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\u914D\u7F6E\u81EA\u5B9A\u4E49\u5F02\u5E38  Spring-mvc--&gt;</span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyExceptionResolver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.example.resolver.MyExceptionResolver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u5F02\u5E38\u9875\u9762</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
&lt;%@ page isELIgnored=&quot;false&quot; %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u901A\u7528\u7684\u5F02\u5E38\u629B\u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\${info}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u5F02\u5E38\u8DF3\u8F6C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">DemoService</span> demoService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/check&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassCastException</span><span class="token punctuation">,</span><span class="token class-name">FileNotFoundException</span><span class="token punctuation">,</span><span class="token class-name">MyException</span> <span class="token punctuation">{</span>
<span class="token comment">//        demoService.show1();</span>
<span class="token comment">//        demoService.show2();</span>
        demoService<span class="token punctuation">.</span><span class="token function">show3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","08.Spring\u7684\u5F02\u5E38\u5904\u7406.html.vue"]]);export{r as default};
