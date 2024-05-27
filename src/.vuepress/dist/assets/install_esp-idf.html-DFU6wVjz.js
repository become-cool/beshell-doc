import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as d,a as e,b as n,d as l,e as i}from"./app-BrwPz4RZ.js";const c={},r=e("h1",{id:"在-esp-idf-工程中安装-beshell-组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在-esp-idf-工程中安装-beshell-组件"},[e("span",null,"在 ESP IDF 工程中安装 BeShell 组件")])],-1),p=e("h2",{id:"准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备工作"},[e("span",null,"准备工作")])],-1),u=e("p",null,"ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。",-1),v=e("ol",null,[e("li",null,"下载并安装 VSCode IDE")],-1),m={href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"},_={start:"2"},h=e("li",null,[e("p",null,[n("安装好 VSCode 后，在 VSCode 的扩展市场中搜索 "),e("code",null,"ESP-IDF"),n("，安装 "),e("code",null,"ESP-IDF"),n(" 扩展。")])],-1),b=e("p",null,[e("code",null,"ctrl+shift+p"),n(" 打开命令面板，输入 "),e("code",null,"ESP-IDF: Configure ESP-IDF extension"),n("，在向导的引导下下载安装 ESP-IDF 框架和工具链。建议下载 5.2.1 以上版本。")],-1),S={href:"https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://gitee.com/EspressifSystems/esp-gitee-tools",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="创建-esp-idf-工程" tabindex="-1"><a class="header-anchor" href="#创建-esp-idf-工程"><span>创建 ESP-IDF 工程</span></a></h2><ul><li><p><code>ctrl+shift+p</code> 打开命令面板，输入 <code>ESP-IDF: Create new ESP-IDF project</code>，按照向导创建一个空工程。</p></li><li><p>也可以从 esp-idf 的 exampels 目录中拷贝任意示例工程，然后在 VSCode 中打开。</p></li></ul><h2 id="在工程中添加-beshell-组件" tabindex="-1"><a class="header-anchor" href="#在工程中添加-beshell-组件"><span>在工程中添加 BeShell 组件</span></a></h2><p>下一步是在工程中添加 BeShell 组件。</p><p>在工程的 <code>components</code> 目录下执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/become-cool/beshell.git <span class="token parameter variable">--recursive</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想指定版本，可以加上 <code>--tag</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/become-cool/beshell.git --recursive --tag v0.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),f={href:"https://github.com/become-cool/beshell",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gitee.com/become-cool/beshell-component",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"BeShell",-1),I=e("code",null,"components",-1),C=i(`<p>确保工程文件的目录结构像这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>工程根目录
├── components
|   ├── BeShell
|   │   ├── CMakeLists.txt
|   │   ├── src
|   │   │   ├── BeShell.hpp
|   │   │   └── ...
|   │   └── ...
|   └── ...
└── ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><ol><li><p>在工程的 <code>main</code> 目录下，新建 <code>main.cpp</code> 文件，删除原来的 <code>main.c</code> 文件。</p></li><li><p>将 main/CMakeLists.txt 文件的内容改为：</p></li></ol><div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token keyword">file</span><span class="token punctuation">(</span>GLOB_RECURSE src
        ./*.c
        ./*.cpp
<span class="token punctuation">)</span>
<span class="token function">idf_component_register</span><span class="token punctuation">(</span>
        SRCS <span class="token punctuation">\${</span>src<span class="token punctuation">}</span>
        INCLUDE_DIRS <span class="token string">&quot;.&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意是 main 目录下的 CMakeLists.txt 文件，而不是工程根目录里的 CMakeLists.txt 文件。</p></blockquote><ol start="3"><li>添加以下代码：</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;BeShell.hpp&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std <span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">app_main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    be<span class="token double-colon punctuation">::</span>BeShell beshell <span class="token punctuation">;</span>

    beshell<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    beshell<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，工程目录的结构应类似这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>工程根目录
├── CMakeLists.txt
├── main
│   ├── CMakeLists.txt
│   ├── main.cpp
│   └── ...
├── components
|   ├── BeShell
|   │   ├── CMakeLists.txt
|   │   ├── src
|   │   │   ├── BeShell.hpp
|   │   │   └── ...
|   │   └── ...
|   └── ...
└── ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>编译并烧录到 ESP32 开发板</li></ol><blockquote><p>如果是通过 <code>ESP IDF: Build, Flash and Monitor</code> 编译烧录，需要关闭 <code>Monitor</code> 终端，以便断开串口连接。</p></blockquote>`,12),D={start:"5"},P={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"},B=i(`<p>一切顺利的话会看到 BeShell 的输出：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ESP-ROM:esp32s3-20210327
Build:Mar 27 2021
rst:0xc (RTC_SW_CPU_RST),boot:0x8 (SPI_FAST_FLASH_BOOT)
Saved PC:0x4209360a
SPIWP:0xee
mode:DIO, clock div:1
load:0x3fce3808,len:0x4bc
load:0x403c9700,len:0xbd8
load:0x403cc700,len:0x2a0c
entry 0x403c98d0
E (189) esp_core_dump_flash: Incorrect size of core dump image: -1387874895

 ____      ____                                     ____
|    ~.   |                       ..&#39;&#39;&#39;&#39;|         ||           |       |
|____.&#39;_  |______              .&#39;&#39;      |_________||______     |       |
|       ~.|                 ..&#39;         |         ||           |       |
|_______.&#39;|___________....&#39;&#39;            |         ||___________|_______|_______
 (c) 2020-2024 https://become.cool

version BeShell: 0.3.1; quickjs: 2021-03-27 ; esp-idf: v4.4.7-dirty
build: May 25 2024 17:14:56
type JavaScript code to run, or &#39;help&#39; for more information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,'console.log("Hello, BeShell!")',-1),V=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Hello, BeShell!
undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>和在 Arduino 的串口工具看到的一样，<code>undefined</code> 是 console.log 的返回值。</p>`,2),M={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"};function L(T,q){const s=t("ExternalLinkIcon");return o(),d("div",null,[r,p,u,v,e("p",null,[e("a",m,[n("VSCode 的下载地址"),l(s)])]),e("ol",_,[h,e("li",null,[b,e("p",null,[n("具体过程可以参考乐鑫官方文档 ："),e("a",S,[n("VSCode ESP-IDF 扩展安装使用指南"),l(s)])]),e("blockquote",null,[e("p",null,[n("国内网络环境a，参考镜像下载安装方案： "),e("a",g,[n("https://gitee.com/EspressifSystems/esp-gitee-tools"),l(s)])])])])]),k,e("p",null,[n("也可以从 "),e("a",f,[n("Github"),l(s)]),n(" 或 "),e("a",x,[n("Gitee 镜像"),l(s)]),n(" 下载最新版本的压缩包，解压后将 "),E,n(" 目录拷贝到工程的 "),I,n(" 目录下。")]),C,e("ol",D,[e("li",null,[n("在浏览器中打开 "),e("a",P,[n("BeConsole"),l(s)]),n(" ，点击右下角的 USB 图标，选择刚才烧录的 ESP32 开发板。")])]),B,e("p",null,[n("在 "),e("a",F,[n("BeConsole"),l(s)]),n(" 的终端界面输入 "),y,n(" 然后回车，可以看到串口输出：")]),V,e("blockquote",null,[e("p",null,[e("a",M,[n("BeConsole"),l(s)]),n(" 是一个 WEB 在线 IDE，提供了终端、文件管理、在线编辑器等功能。")])])])}const R=a(c,[["render",L],["__file","install_esp-idf.html.vue"]]),O=JSON.parse('{"path":"/guide/install_esp-idf.html","title":"在 ESP IDF 工程中安装 BeShell 组件","lang":"zh-CN","frontmatter":{"description":"在 ESP IDF 工程中安装 BeShell 组件 准备工作 ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。 下载并安装 VSCode IDE VSCode 的下载地址 安装好 VSCode 后，在 VSCode 的扩展市场中搜索 ESP-IDF，安装 ESP-IDF 扩展。 ctrl+shi...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/install_esp-idf.html"}],["meta",{"property":"og:title","content":"在 ESP IDF 工程中安装 BeShell 组件"}],["meta",{"property":"og:description","content":"在 ESP IDF 工程中安装 BeShell 组件 准备工作 ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。 下载并安装 VSCode IDE VSCode 的下载地址 安装好 VSCode 后，在 VSCode 的扩展市场中搜索 ESP-IDF，安装 ESP-IDF 扩展。 ctrl+shi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T10:09:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T10:09:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 ESP IDF 工程中安装 BeShell 组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-26T10:09:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"创建 ESP-IDF 工程","slug":"创建-esp-idf-工程","link":"#创建-esp-idf-工程","children":[]},{"level":2,"title":"在工程中添加 BeShell 组件","slug":"在工程中添加-beshell-组件","link":"#在工程中添加-beshell-组件","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}],"git":{"createdTime":1716718170000,"updatedTime":1716718170000,"contributors":[{"name":"alee","email":"alee@chou.im","commits":1}]},"readingTime":{"minutes":2.53,"words":759},"filePathRelative":"guide/install_esp-idf.md","localizedDate":"2024年5月26日","autoDesc":true}');export{R as comp,O as data};
