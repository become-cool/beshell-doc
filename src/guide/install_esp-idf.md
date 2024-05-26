# 在 ESP IDF 工程中安装 BeShell 组件

## 准备工作

ESP IDF 环境下载开发，推荐使用 VSCode IDE 和 VSCode 的 ESP-IDF扩展。

1. 下载并安装 VSCode IDE

[VSCode 的下载地址](https://code.visualstudio.com/download)

2. 安装好 VSCode 后，在 VSCode 的扩展市场中搜索 `ESP-IDF`，安装 `ESP-IDF` 扩展。

3. `ctrl+shift+p` 打开命令面板，输入 `ESP-IDF: Configure ESP-IDF extension`，在向导的引导下下载安装 ESP-IDF 框架和工具链。建议下载 5.2.1 以上版本。

    具体过程可以参考乐鑫官方文档 ：[VSCode ESP-IDF 扩展安装使用指南](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md)

    > 国内网络环境a，参考镜像下载安装方案： [https://gitee.com/EspressifSystems/esp-gitee-tools](https://gitee.com/EspressifSystems/esp-gitee-tools)


## 创建 ESP-IDF 工程

* `ctrl+shift+p` 打开命令面板，输入 `ESP-IDF: Create new ESP-IDF project`，按照向导创建一个空工程。

* 也可以从 esp-idf 的 exampels 目录中拷贝任意示例工程，然后在 VSCode 中打开。

## 在工程中添加 BeShell 组件

下一步是在工程中添加 BeShell 组件。

在工程的 `components` 目录下执行命令：

```bash
git clone https://github.com/become-cool/beshell.git --recursive
```

如果想指定版本，可以加上 `--tag` 参数：
```
git clone https://github.com/become-cool/beshell.git --recursive --tag v0.3.1
```

也可以从 [Github](https://github.com/become-cool/beshell) 或 [Gitee 镜像](https://gitee.com/become-cool/beshell-component) 下载最新版本的压缩包，解压后将 `BeShell` 目录拷贝到工程的 `components` 目录下。

确保工程文件的目录结构像这样：

```
工程根目录
├── components
|   ├── BeShell
|   │   ├── CMakeLists.txt
|   │   ├── src
|   │   │   ├── BeShell.hpp
|   │   │   └── ...
|   │   └── ...
|   └── ...
└── ...
```



## 示例代码

1. 在工程的 `main` 目录下，新建 `main.cpp` 文件，删除原来的 `main.c` 文件。

2. 将 main/CMakeLists.txt 文件的内容改为：
```cmake
file(GLOB_RECURSE src
        ./*.c
        ./*.cpp
)
idf_component_register(
        SRCS ${src}
        INCLUDE_DIRS "."
)
```
> 注意是 main 目录下的 CMakeLists.txt 文件，而不是工程根目录里的 CMakeLists.txt 文件。

3. 添加以下代码：

```cpp
#include <BeShell.hpp>

using namespace std ;

void app_main(void)
{
    be::BeShell beshell ;

    beshell.setup() ;

    beshell.run();
}
```


此时，工程目录的结构应类似这样：

```
工程根目录
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
```

4. 编译并烧录到 ESP32 开发板

> 如果是通过 `ESP IDF: Build, Flash and Monitor` 编译烧录，需要关闭 `Monitor` 终端，以便断开串口连接。

5. 在浏览器中打开 [BeConsole](https://beconsole.become.cool) ，点击右下角的 USB 图标，选择刚才烧录的 ESP32 开发板。

一切顺利的话会看到 BeShell 的输出：

```
ESP-ROM:esp32s3-20210327
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
|    ~.   |                       ..''''|         ||           |       |
|____.'_  |______              .''      |_________||______     |       |
|       ~.|                 ..'         |         ||           |       |
|_______.'|___________....''            |         ||___________|_______|_______
 (c) 2020-2024 https://become.cool

version BeShell: 0.3.1; quickjs: 2021-03-27 ; esp-idf: v4.4.7-dirty
build: May 25 2024 17:14:56
type JavaScript code to run, or 'help' for more information
```

在 [BeConsole](https://beconsole.become.cool) 的终端界面输入 `console.log("Hello, BeShell!")` 然后回车，可以看到串口输出：

```
Hello, BeShell!
undefined
```

和在 Arduino 的串口工具看到的一样，`undefined` 是 console.log 的返回值。


> [BeConsole](https://beconsole.become.cool) 是一个 WEB 在线 IDE，提供了终端、文件管理、在线编辑器等功能。