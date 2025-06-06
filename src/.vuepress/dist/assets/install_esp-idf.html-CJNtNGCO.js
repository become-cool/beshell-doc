import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as n,a,d as s,e as i,r as o,o as r}from"./app-CbJW3NnK.js";const p={},c={href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"},u={start:"2"},v={href:"https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md",target:"_blank",rel:"noopener noreferrer"},m={href:"https://gitee.com/EspressifSystems/esp-gitee-tools",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/become-cool/beshell",target:"_blank",rel:"noopener noreferrer"},k={href:"https://gitee.com/become-cool/beshell-component",target:"_blank",rel:"noopener noreferrer"},S={start:"5"},g={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"},_={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"},h={href:"https://beconsole.become.cool",target:"_blank",rel:"noopener noreferrer"};function f(x,e){const l=o("ExternalLinkIcon");return r(),d("div",null,[e[26]||(e[26]=n("h1",{id:"在-esp-idf-工程中安装-beshell-组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-esp-idf-工程中安装-beshell-组件"},[n("span",null,"在 ESP IDF 工程中安装 BeShell 组件")])],-1)),e[27]||(e[27]=n("h2",{id:"准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备工作"},[n("span",null,"准备工作")])],-1)),e[28]||(e[28]=n("p",null,"ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。",-1)),e[29]||(e[29]=n("ol",null,[n("li",null,"下载并安装 VSCode IDE")],-1)),n("p",null,[n("a",c,[e[0]||(e[0]=s("VSCode 的下载地址")),i(l)])]),n("ol",u,[e[6]||(e[6]=n("li",null,[n("p",null,[s("安装好 VSCode 后，在 VSCode 的扩展市场中搜索 "),n("code",null,"ESP-IDF"),s("，安装 "),n("code",null,"ESP-IDF"),s(" 扩展。")])],-1)),n("li",null,[e[5]||(e[5]=n("p",null,[n("code",null,"ctrl+shift+p"),s(" 打开命令面板，输入 "),n("code",null,"ESP-IDF: Configure ESP-IDF extension"),s("，在向导的引导下下载安装 ESP-IDF 框架和工具链。建议下载 5.2.1 以上版本。")],-1)),n("p",null,[e[2]||(e[2]=s("具体过程可以参考乐鑫官方文档 ：")),n("a",v,[e[1]||(e[1]=s("VSCode ESP-IDF 扩展安装使用指南")),i(l)])]),n("blockquote",null,[n("p",null,[e[4]||(e[4]=s("国内网络环境a，参考镜像下载安装方案： ")),n("a",m,[e[3]||(e[3]=s("https://gitee.com/EspressifSystems/esp-gitee-tools")),i(l)])])])])]),e[30]||(e[30]=a(`<h2 id="创建-esp-idf-工程" tabindex="-1"><a class="header-anchor" href="#创建-esp-idf-工程"><span>创建 ESP-IDF 工程</span></a></h2><ul><li><p><code>ctrl+shift+p</code> 打开命令面板，输入 <code>ESP-IDF: Create new ESP-IDF project</code>，按照向导创建一个空工程。</p></li><li><p>也可以从 esp-idf 的 exampels 目录中拷贝任意示例工程，然后在 VSCode 中打开。</p></li></ul><h2 id="在工程中添加-beshell-组件" tabindex="-1"><a class="header-anchor" href="#在工程中添加-beshell-组件"><span>在工程中添加 BeShell 组件</span></a></h2><p>下一步是在工程中添加 BeShell 组件。</p><p>在工程的 <code>components</code> 目录下执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/become-cool/beshell.git <span class="token parameter variable">--recursive</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想指定版本，可以加上 <code>--tag</code> 参数：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/become-cool/beshell.git --recursive --tag v0.3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8)),n("p",null,[e[9]||(e[9]=s("也可以从 ")),n("a",b,[e[7]||(e[7]=s("Github")),i(l)]),e[10]||(e[10]=s(" 或 ")),n("a",k,[e[8]||(e[8]=s("Gitee 镜像")),i(l)]),e[11]||(e[11]=s(" 下载最新版本的压缩包，解压后将 ")),e[12]||(e[12]=n("code",null,"BeShell",-1)),e[13]||(e[13]=s(" 目录拷贝到工程的 ")),e[14]||(e[14]=n("code",null,"components",-1)),e[15]||(e[15]=s(" 目录下。"))]),e[31]||(e[31]=a(`<p>确保工程文件的目录结构像这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>工程根目录
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

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
<span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token keyword">void</span> <span class="token function">app_main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    be<span class="token double-colon punctuation">::</span>BeShell beshell <span class="token punctuation">;</span>

    beshell<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    beshell<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，工程目录的结构应类似这样：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>工程根目录
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>编译并烧录到 ESP32 开发板</li></ol><blockquote><p>如果是通过 <code>ESP IDF: Build, Flash and Monitor</code> 编译烧录，需要关闭 <code>Monitor</code> 终端，以便断开串口连接。</p></blockquote>`,12)),n("ol",S,[n("li",null,[e[17]||(e[17]=s("在浏览器中打开 ")),n("a",g,[e[16]||(e[16]=s("BeConsole")),i(l)]),e[18]||(e[18]=s(" ，点击右下角的 USB 图标，选择刚才烧录的 ESP32 开发板。"))])]),e[32]||(e[32]=a(`<p>一切顺利的话会看到 BeShell 的输出：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ESP-ROM:esp32s3-20210327
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),n("p",null,[e[20]||(e[20]=s("在 ")),n("a",_,[e[19]||(e[19]=s("BeConsole")),i(l)]),e[21]||(e[21]=s(" 的终端界面输入 ")),e[22]||(e[22]=n("code",null,'console.log("Hello, BeShell!")',-1)),e[23]||(e[23]=s(" 然后回车，可以看到串口输出："))]),e[33]||(e[33]=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Hello, BeShell!
undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>和在 Arduino 的串口工具看到的一样，<code>undefined</code> 是 console.log 的返回值。</p>`,2)),n("blockquote",null,[n("p",null,[n("a",h,[e[24]||(e[24]=s("BeConsole")),i(l)]),e[25]||(e[25]=s(" 是一个 WEB 在线 IDE，提供了终端、文件管理、在线编辑器等功能。"))])]),e[34]||(e[34]=a(`<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><p>如果运行时崩溃，打印错误：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>***ERROR*** A stack overflow in task main has been detected.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是 main 函数的 stack 空间不足导致的。将工程根目录下 <code>sdkconfig</code> 文件里的 <code>CONFIG_ESP_MAIN_TASK_STACK_SIZE</code> 配置改大以后，重新编译烧录即可。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CONFIG_ESP_MAIN_TASK_STACK_SIZE=10240
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5))])}const C=t(p,[["render",f],["__file","install_esp-idf.html.vue"]]),D=JSON.parse('{"path":"/guide/install_esp-idf.html","title":"在 ESP IDF 工程中安装 BeShell 组件","lang":"zh-CN","frontmatter":{"description":"在 ESP IDF 工程中安装 BeShell 组件 准备工作 ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。 下载并安装 VSCode IDE VSCode 的下载地址 安装好 VSCode 后，在 VSCode 的扩展市场中搜索 ESP-IDF，安装 ESP-IDF 扩展。 ctrl+shi...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/install_esp-idf.html"}],["meta",{"property":"og:title","content":"在 ESP IDF 工程中安装 BeShell 组件"}],["meta",{"property":"og:description","content":"在 ESP IDF 工程中安装 BeShell 组件 准备工作 ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。 下载并安装 VSCode IDE VSCode 的下载地址 安装好 VSCode 后，在 VSCode 的扩展市场中搜索 ESP-IDF，安装 ESP-IDF 扩展。 ctrl+shi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T15:47:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T15:47:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 ESP IDF 工程中安装 BeShell 组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-30T15:47:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"创建 ESP-IDF 工程","slug":"创建-esp-idf-工程","link":"#创建-esp-idf-工程","children":[]},{"level":2,"title":"在工程中添加 BeShell 组件","slug":"在工程中添加-beshell-组件","link":"#在工程中添加-beshell-组件","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1716718170000,"updatedTime":1717084071000,"contributors":[{"name":"alee","email":"alee@chou.im","commits":2}]},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"guide/install_esp-idf.md","localizedDate":"2024年5月26日","autoDesc":true}');export{C as comp,D as data};
