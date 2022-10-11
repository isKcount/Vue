import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,d as n}from"./app.85823306.js";const t={},r=n(`<h1 id="linux\u4E0Bfirewalld\u547D\u4EE4\u7BA1\u7406\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#linux\u4E0Bfirewalld\u547D\u4EE4\u7BA1\u7406\u8BE6\u89E3" aria-hidden="true">#</a> Linux\u4E0Bfirewalld\u547D\u4EE4\u7BA1\u7406\u8BE6\u89E3</h1><h2 id="firewalld\u4E2D\u7684\u533A\u57DF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#firewalld\u4E2D\u7684\u533A\u57DF\u7BA1\u7406" aria-hidden="true">#</a> Firewalld\u4E2D\u7684\u533A\u57DF\u7BA1\u7406</h2><table><thead><tr><th>\u963B\u585E\u533A\u57DF\uFF08block\uFF09</th><th><strong>\u4EFB\u4F55\u4F20\u5165\u7684\u7F51\u7EDC\u6570\u636E\u5305\u90FD\u5C06\u88AB\u963B\u6B62</strong></th></tr></thead><tbody><tr><td>\u5DE5\u4F5C\u533A\u57DF\uFF08work\uFF09</td><td>\u76F8\u4FE1\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u8BA1\u7B97\u673A\uFF0C\u4E0D\u4F1A\u635F\u5BB3\u4F60\u7684\u8BA1\u7B97\u673A</td></tr><tr><td>\u5BB6\u5EAD\u533A\u57DF\uFF08home\uFF09</td><td>\u76F8\u4FE1\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u8BA1\u7B97\u673A\uFF0C\u4E0D\u4F1A\u635F\u5BB3\u4F60\u7684\u8BA1\u7B97\u673A</td></tr><tr><td>\u516C\u5171\u533A\u57DF\uFF08public\uFF09</td><td>\u4E0D\u76F8\u4FE1\u7F51\u7EDC\u4E0A\u7684\u4EFB\u4F55\u8BA1\u7B97\u673A\uFF0C\u53EA\u6709\u9009\u62E9\u63A5\u53D7\u4F20\u5165\u7684\u7F51\u7EDC\u8FDE\u63A5</td></tr><tr><td>\u9694\u79BB\u533A\u57DF\uFF08DMZ\uFF09</td><td>\u9694\u79BB\u533A\u57DF\u4E5F\u79F0\u4E3A\u975E\u519B\u4E8B\u533A\u57DF\uFF0C\u5185\u5916\u7F51\u7EDC\u4E4B\u95F4\u589E\u52A0\u7684\u4E00\u5C42\u7F51\u7EDC\uFF0C\u8D77\u5230\u7F13\u51B2\u4F5C\u7528\u3002\u5BF9\u4E8E\u9694\u79BB\u533A\u57DF\uFF0C\u53EA\u6709\u9009\u62E9\u63A5\u53D7\u4F20\u5165\u7684\u7F51\u7EDC\u8FDE\u63A5</td></tr><tr><td>\u4FE1\u4EFB\u533A\u57DF\uFF08trusted\uFF09</td><td>\u6240\u6709\u7684\u7F51\u7EDC\u8FDE\u63A5\u90FD\u53EF\u4EE5\u63A5\u53D7</td></tr><tr><td>\u4E22\u5F03\u533A\u57DF\uFF08drop\uFF09</td><td>\u4EFB\u4F55\u4F20\u5165\u7684\u7F51\u7EDC\u8FDE\u63A5\u90FD\u88AB\u62D2\u7EDD</td></tr><tr><td>\u5185\u90E8\u533A\u57DF\uFF08internal\uFF09</td><td>\u4FE1\u4EFB\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u8BA1\u7B97\u673A\uFF0C\u4E0D\u4F1A\u635F\u5BB3\u4F60\u7684\u8BA1\u7B97\u673A\u3002\u53EA\u6709\u9009\u62E9\u63A5\u53D7\u4F20\u5165\u7684\u7F51\u7EDC\u8FDE\u63A5</td></tr><tr><td>\u5916\u90E8\u533A\u57DF\uFF08external\uFF09</td><td>\u4E0D\u76F8\u4FE1\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u8BA1\u7B97\u673A\uFF0C\u4E0D\u4F1A\u635F\u5BB3\u4F60\u7684\u8BA1\u7B97\u673A\u3002\u53EA\u6709\u9009\u62E9\u63A5\u53D7\u4F20\u5165\u7684\u7F51\u7EDC\u8FDE\u63A5</td></tr></tbody></table><h2 id="\u5E38\u7528\u533A\u57DF\u7BA1\u7406\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u533A\u57DF\u7BA1\u7406\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u533A\u57DF\u7BA1\u7406\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-config              		    <span class="token comment">##\u5F00\u542F\u706B\u5899\u7684\u56FE\u5F62\u7BA1\u7406</span>
firewall-cmd <span class="token parameter variable">--state</span>				 	<span class="token comment">#\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001</span>
firewall-cmd --get-active-zones 		<span class="token comment">#\u67E5\u770B\u6B63\u5728\u751F\u6548\u7684\u57DF</span>
firewall-cmd --get-default-zone 		<span class="token comment">#\u67E5\u770B\u9ED8\u8BA4\u7684\u57DF</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-all 	<span class="token comment">#\u67E5\u770Bpublic\u57DF\u91CC\u7684\u8BBE\u7F6E\uFF0C--zone\u6307\u5B9A\u57DF</span>
firewall-cmd --list-all 				<span class="token comment">#\u5217\u51FA\u9ED8\u8BA4\u57DF\u7684\u706B\u5899\u60C5\u51B5</span>
firewall-cmd --set-default-zone<span class="token operator">=</span>public 	<span class="token comment">#\u628A\u9ED8\u8BA4\u7684\u57DF\u8BBE\u4E3Apublic</span>
firewall-cmd --get-zones 				<span class="token comment">#\u67E5\u770B\u6240\u6709\u7684\u57DF</span>
firewall-cmd --get-services 			<span class="token comment">#\u67E5\u770B\u6240\u6709\u53EF\u4EE5\u6DFB\u52A0\u5230\u706B\u5899\u91CC\u7684\u670D\u52A1</span>
firewall-cmd --list-all-zones 	 		<span class="token comment">##\u67E5\u770B\u6240\u6709\u57DF\u7684\u6240\u6709\u8BBE\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u6CE8\uFF1AFirewalld\u7684\u9ED8\u8BA4\u533A\u57DF\u662Fpublic</strong></p></blockquote><h2 id="\u57FA\u672C\u547D\u4EE4\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4\u7528\u6CD5</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td><strong>--permanent</strong></td><td><strong>\u6C38\u4E45\u8BBE\u5B9A</strong></td></tr><tr><td><strong>--zone</strong></td><td><strong>\u6307\u5B9A\u57DF</strong></td></tr><tr><td><strong>--add-service</strong></td><td><strong>\u6DFB\u52A0\u670D\u52A1</strong></td></tr><tr><td><strong>--remove-service</strong></td><td><strong>\u5220\u9664\u670D\u52A1</strong></td></tr><tr><td><strong>--add-source</strong></td><td><strong>\u6DFB\u52A0\u4E3B\u673Aip</strong></td></tr><tr><td><strong>--remove-source</strong></td><td><strong>\u5220\u9664\u4E3B\u673Aip</strong></td></tr><tr><td><strong>--add-port</strong></td><td><strong>\u6DFB\u52A0\u7AEF\u53E3</strong></td></tr><tr><td><strong>--remove-port</strong></td><td><strong>\u5220\u9664\u7AEF\u53E3</strong></td></tr><tr><td><strong>--add-interface</strong></td><td><strong>\u6DFB\u52A0\u7F51\u5361</strong></td></tr><tr><td><strong>--change-interface</strong></td><td><strong>\u6539\u53D8\u7F51\u5361</strong></td></tr><tr><td><strong>--remove-interface</strong></td><td><strong>\u5220\u9664\u7F51\u5361</strong></td></tr></tbody></table><h2 id="\u53C2\u6570\u7528\u6CD5\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u7528\u6CD5\u793A\u4F8B" aria-hidden="true">#</a> \u53C2\u6570\u7528\u6CD5\u793A\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-source<span class="token operator">=</span><span class="token number">172.25</span>.0.1			<span class="token comment">#\u6DFB\u52A0\u5916\u6765\u4E3B\u673Aip\u5230trusted\u57DF</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --remove-source<span class="token operator">=</span><span class="token number">172.25</span>.0.1		<span class="token comment">#\u4ECEtrusted\u57DF\u4E2D\u5220\u9664\u5916\u6765\u4E3B\u673Aip</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-interface<span class="token operator">=</span>eth0				<span class="token comment">#\u6DFB\u52A0\u7F51\u5361\u5230\u6307\u5B9A\u7684\u57DF</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --change-interface<span class="token operator">=</span>eth0			<span class="token comment">#\u6539\u53D8\u7F51\u5361\u6240\u5728\u7684\u57DF</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> --zone-trusted --remove-interface<span class="token operator">=</span>eth0			<span class="token comment">#\u5C06\u7F51\u5361\u4ECE\u6307\u5B9A\u57DF\u4E0A\u9762\u5220\u9664</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-service<span class="token operator">=</span>smtp					<span class="token comment">#\u6C38\u4E45\u6DFB\u52A0\u670D\u52A1</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-service<span class="token operator">=</span>smtp				<span class="token comment">#\u6C38\u4E45\u79FB\u8D70\u670D\u52A1</span>
$ firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports									<span class="token comment">#\u5217\u51FA\u5141\u8BB8\u7684\u7AEF\u53E3</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8080</span>/tcp				<span class="token comment">#\u6C38\u4E45\u6DFB\u52A0\u7AEF\u53E3</span>
$ firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">8080</span>/tcp				<span class="token comment">#\u6C38\u4E45\u5220\u9664\u7AEF\u53E3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A 1.\u5728\u8BBE\u5B9A\u706B\u5899\u7B56\u7565\u65F6\uFF0C\u53EF\u4EE5\u52A0<code>--permanent</code>\u53C2\u6570\u6C38\u4E45\u8BBE\u5B9A\uFF1B\u4E34\u65F6\u8BBE\u5B9A\u65F6\u5219\u4E0D\u52A0\u8BE5\u53C2\u6570 2.\u6C38\u4E45\u8BBE\u5B9A\u540E\uFF0C\u706B\u5899\u7B56\u7565\u4E0D\u4F1A\u7ACB\u5373\u751F\u6548\uFF0C\u9700\u8981\u8FDB\u884C\u91CD\u65B0\u52A0\u8F7D\uFF0C\u4E24\u79CD\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ firewall-cmd <span class="token parameter variable">--reload</span> 			<span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\u4F7F\u5176\u751F\u6548\uFF0C\u4F46\u662F\u4E0D\u4F1A\u65AD\u5F00\u5DF2\u7ECF\u8FDE\u63A5\u7684</span>
$ firewall-cmd --complete-relode 	<span class="token comment">#\u91CD\u65B0\u52A0\u8F7D\uFF0C\u5E76\u4E14\u65AD\u5F00\u6240\u6709\u7684\u8FDE\u63A5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="\u8BBE\u5B9A\u706B\u5899\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5B9A\u706B\u5899\u89C4\u5219" aria-hidden="true">#</a> \u8BBE\u5B9A\u706B\u5899\u89C4\u5219</h2><p>\u6307\u5B9A\u4E3B\u673A\u8BBF\u95EE\u6307\u5B9A\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ firewall-cmd <span class="token parameter variable">--direct</span> --add-rule ipv4 filter INPUT <span class="token number">1</span> <span class="token parameter variable">-s</span>  <span class="token number">172.25</span>.254.1  <span class="token parameter variable">-p</span>  tcp <span class="token parameter variable">--dport</span>  <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT	<span class="token comment">#\u6DFB\u52A0\u53EA\u6709\u4E3B\u673A172.25.254.1\u53EF\u4EE5ssh\u8BBF\u95EE\u672C\u673A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6CE8\u91CA\uFF1A
filter			\uFF08\u89C4\u5219\u8868\uFF09 
INPUT			\uFF08\u94FE\uFF09 
<span class="token number">1</span>				\uFF08\u5199\u5728\u7B2C\u4E00\u6761\uFF09 
<span class="token parameter variable">-s</span>				\uFF08\u6E90ip\uFF09 <span class="token number">172.25</span>.254.1  
<span class="token parameter variable">-p</span>				\uFF08\u534F\u8BAE\u7C7B\u578B\uFF09 tcp 
<span class="token parameter variable">--dport</span>			\uFF08\u76EE\u7684\u7AEF\u53E3\uFF09 <span class="token number">22</span> 
<span class="token parameter variable">-j</span>				\uFF08\u52A8\u4F5C\uFF09 ACCEPT

\u52A8\u4F5C\uFF1A
accept 	\u63A5\u53D7\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42
reject 	\u62D2\u7EDD\u8BF7\u6C42\uFF0C\u4F46\u662F\u7ED9\u5BA2\u6237\u7AEF\u6709\u56DE\u5E94\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u518D\u8BBF\u95EE
drop 	\u4E22\u5F03\uFF0C\u6CA1\u6709\u56DE\u5E94\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u4E00\u76F4\u53D1\u6570\u636E\u5305\uFF0C\u52A0\u5927\u8D1F\u8F7D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ firewall-cmd <span class="token parameter variable">--direct</span> --get-all-rules	<span class="token comment">#\u67E5\u770B\u89C4\u5219</span>
$ firewall-cmd <span class="token parameter variable">--direct</span> --remove-rule ipv4 filter INPUT <span class="token number">1</span> <span class="token parameter variable">-s</span> <span class="token number">172.25</span>.254.1 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-j</span> ACCEPT<span class="token comment">#\u5220\u9664\u89C4\u5219</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u9664\u4E86\u6307\u5B9A\u4E3B\u673A\u5916\u7684\u4E3B\u673A\u8BBF\u95EE\u6307\u5B9A\u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ firewall-cmd <span class="token parameter variable">--direct</span> --add-rule ipv4 filter INPUT <span class="token number">1</span> <span class="token operator">!</span> <span class="token parameter variable">-s</span> <span class="token number">172.25</span>.254.1 <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">22</span> <span class="token parameter variable">-i</span> ACCEPT	<span class="token comment">#\u9664\u4E86\u6307\u5B9Aip\u5730\u5740\u7684\u4E3B\u673A\u4E0D\u4F7F\u7528\u6B64\u7B56\u7565\uFF0C\u5176\u4ED6\u4E3B\u673A\u90FD\u4F7F\u7528\u6B64\u7B56\u7565\uFF08\u6307\u5B9A\u7684\u4F7F\u7528\u9ED8\u8BA4\u7B56\u7565\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,17),l=[r];function p(d,o){return e(),s("div",null,l)}const m=a(t,[["render",p],["__file","2.html.vue"]]);export{m as default};