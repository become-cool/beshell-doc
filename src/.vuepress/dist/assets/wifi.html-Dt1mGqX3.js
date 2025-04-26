import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,b as p,d as a,e as c,w as o,r as l,o as u}from"./app-CbJW3NnK.js";const d={};function r(k,n){const e=l("RouteLink");return u(),i("div",null,[n[2]||(n[2]=s('<h1 id="用-javascript-连接-wifi" tabindex="-1"><a class="header-anchor" href="#用-javascript-连接-wifi"><span>用 JavaScript 连接 WiFi</span></a></h1><p>WiFi 是 ESP32 系列芯片的主要特色，BeShell 较完整的实现了 WiFi 的 JavaScript API 。下面给出了一些常用的例子，详细 API 请参考 <a href="../api/wifi">WiFi 模块 API</a>。</p><h2 id="_1-arduino-启动工程代码" tabindex="-1"><a class="header-anchor" href="#_1-arduino-启动工程代码"><span>1. Arduino 启动工程代码</span></a></h2>',3)),p("p",null,[n[1]||(n[1]=a("这里主要介绍 WiFi 模块的 JavaScript API，如何在 ESP32 设备上运行 JavaScript 文件，请参考：")),c(e,{to:"/guide/run-js-script.html"},{default:o(()=>n[0]||(n[0]=[a("运行 JavaScript 脚本文件")])),_:1})]),n[3]||(n[3]=s(`<p>使用 WiFi 模块的 Arduion 工程代码如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;BeShell.hpp&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> be<span class="token punctuation">;</span>

BeShell be<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 启动 WiFi 模块</span>
    beshell<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">use</span><span class="token generic class-name"><span class="token operator">&lt;</span>WiFi<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    <span class="token comment">// 启动 文件系统模块</span>
    beshell<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">use</span><span class="token generic class-name"><span class="token operator">&lt;</span>FS<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    
    <span class="token comment">// 挂载分区</span>
    <span class="token class-name">FS</span><span class="token double-colon punctuation">::</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token function">FatFS</span><span class="token punctuation">(</span><span class="token string">&quot;ffat&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    
    <span class="token comment">// 启动 BeShell</span>
    beshell<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主循环</span>
<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    beshell<span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ESP-IDF 框架下使用 WiFi 模块的工程类似</p></blockquote><p>接下来是 JavaScript 文件的例子。</p><h2 id="_2-做为-wifi-热点" tabindex="-1"><a class="header-anchor" href="#_2-做为-wifi-热点"><span>2. 做为 WiFi 热点</span></a></h2><p>简单启动热点的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;wifi&#39;</span>

<span class="token comment">// 启动热点</span>
wifi<span class="token punctuation">.</span><span class="token function">startAP</span><span class="token punctuation">(</span><span class="token string">&#39;BeShell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 停止热点</span>
<span class="token comment">// wifi.stopAP()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>wifi.startAP()</code> 是一个返回 Promise 的异步函数，如果需要等待热点启动成功，可以用 <code>await</code> 关键字。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;wifi&#39;</span>

<span class="token comment">// 定义异步主函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 启动热点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">await</span> wifi<span class="token punctuation">.</span><span class="token function">startAP</span><span class="token punctuation">(</span><span class="token string">&#39;BeShell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;AP started successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;AP start failed&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 调用异步主函数</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-做为-wifi-客户机" tabindex="-1"><a class="header-anchor" href="#_3-做为-wifi-客户机"><span>3. 做为 WiFi 客户机</span></a></h2><p>简单作为客户机连接到热点：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>impor <span class="token operator">*</span> <span class="token keyword">as</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;wifi&#39;</span>

<span class="token comment">// 连接到热点</span>
wifi<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;BeShell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 断开连接</span>
<span class="token comment">// wifi.disconnect(&#39;BeShell&#39;, &#39;12345678&#39;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>wifi.connect()</code> 同样返回 Promise，如果需要等待连接成功，可以用 <code>await</code> 关键字。</p><p>等待连接成功且网络可用的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;wifi&#39;</span>

<span class="token comment">// 定义异步主函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 连接到热点</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">await</span> wifi<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;BeShell&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12345678&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;connection established&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;connection failed&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 等待从 DHCP 服务器分配 IP 地址</span>
    <span class="token keyword">let</span> status <span class="token operator">=</span> <span class="token keyword">await</span> wifi<span class="token punctuation">.</span><span class="token function">waitIP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> status <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;IP address obtained: &#39;</span><span class="token punctuation">,</span> status<span class="token punctuation">.</span>ip<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;failed to get IP address&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 网络可用, 可以访问网络了</span>
    <span class="token comment">// todo ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用异步主函数</span>
<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-扫描附近的热点" tabindex="-1"><a class="header-anchor" href="#_4-扫描附近的热点"><span>4. 扫描附近的热点</span></a></h2><blockquote><p>注意：热点扫描功能需要在 STA 模式下工作</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> wifi <span class="token keyword">from</span> <span class="token string">&#39;wifi&#39;</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token comment">// 切换到 STA 模式， 也可以 APSTA 模式</span>
    <span class="token comment">// 参数 1: STA 模式, 2: AP 模式, 3: APSTA 模式</span>
    wifi<span class="token punctuation">.</span><span class="token function">setMode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment">// 启动 WiFi 模块</span>
    <span class="token keyword">await</span> wifi<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 扫描并输出附近的热点</span>
    <span class="token keyword">let</span> ssidList <span class="token operator">=</span> <span class="token keyword">await</span> wifi<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ssidList<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18))])}const b=t(d,[["render",r],["__file","wifi.html.vue"]]),f=JSON.parse('{"path":"/guide/wifi.html","title":"用 JavaScript 连接 WiFi","lang":"zh-CN","frontmatter":{"description":"用 JavaScript 连接 WiFi WiFi 是 ESP32 系列芯片的主要特色，BeShell 较完整的实现了 WiFi 的 JavaScript API 。下面给出了一些常用的例子，详细 API 请参考 WiFi 模块 API。 1. Arduino 启动工程代码 这里主要介绍 WiFi 模块的 JavaScript API，如何在 ESP3...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/wifi.html"}],["meta",{"property":"og:title","content":"用 JavaScript 连接 WiFi"}],["meta",{"property":"og:description","content":"用 JavaScript 连接 WiFi WiFi 是 ESP32 系列芯片的主要特色，BeShell 较完整的实现了 WiFi 的 JavaScript API 。下面给出了一些常用的例子，详细 API 请参考 WiFi 模块 API。 1. Arduino 启动工程代码 这里主要介绍 WiFi 模块的 JavaScript API，如何在 ESP3..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:42:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:42:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用 JavaScript 连接 WiFi\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-31T09:42:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Arduino 启动工程代码","slug":"_1-arduino-启动工程代码","link":"#_1-arduino-启动工程代码","children":[]},{"level":2,"title":"2. 做为 WiFi 热点","slug":"_2-做为-wifi-热点","link":"#_2-做为-wifi-热点","children":[]},{"level":2,"title":"3. 做为 WiFi 客户机","slug":"_3-做为-wifi-客户机","link":"#_3-做为-wifi-客户机","children":[]},{"level":2,"title":"4. 扫描附近的热点","slug":"_4-扫描附近的热点","link":"#_4-扫描附近的热点","children":[]}],"git":{"createdTime":1717148524000,"updatedTime":1717148524000,"contributors":[{"name":"alee","email":"alee_zhou@seminstructs.com","commits":1}]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"guide/wifi.md","localizedDate":"2024年5月31日","autoDesc":true}');export{b as comp,f as data};
