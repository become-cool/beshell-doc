
# 在 Arduino IDE 中安装 BeShell 库

Arduino IDE 可以更容易的开始，但 BeShell 在 Arduino 环境下的功能是不完整的，并且无法对 esp32 众多编译选项进行配置。



## 准备工作

1. 首先需要安装 Arduino IDE, [下载地址](https://www.arduino.cc/en/software)

> 以下内容以 Arduino IDE 1.8.X 为例。Arduino 2.x 版本的安装方法与此类似，但 UI 有很大区别

2. BeShell 是为 ESP32 平台设计的，因此还需要在 Arduino IDE 中安装 ESP32 开发板的支持。

具体过程参考乐鑫的官方文档： [Arduino ESP32 开发板安装指南](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)

在准备好 Arduino IDE 和 ESP32 开发板的支持后，可以开始安装 BeShell 的 Arduino 库。

## 自动下载

BeShell 库可以直接从 Arduino IDE 的库管理器中自动下载安装。

1. 打开 Arduino IDE, 选择 `工具` -> `管理库...`

![打开“管理库...”](./screenshot/20240526_000607.png =640x)

2. 在搜索框中输入 `BeShell` 然后回车，选择最新版本的 `BeShell` 并点击 `安装` 按钮

![搜索并安装  BeShell 库](./screenshot/20240526_000607.png =640x)

3. 等待安装完成, 点击 `确定` 按钮关闭窗口

## 手动下载

受网速影响，在国内自动下载很慢，甚至可能失败。可以手动下载并安装 BeShell 的 Arduino 库。

1. 打开浏览器，访问 https://github.com/become-cool/beshell-arduino-precompiled

> 在国内从 Gitee 下载速度更快：https://gitee.com/become-cool/beshell-arduino

2. 在 tags 标签页下，选择最新的版本

![在 tags 标签页下，选择最新的版本](./screenshot/20240526_001134.png =640x)

3. 在 code 界面点击 `Download ZIP` 按钮下载压缩包

![在 code 界面点击 `Download ZIP` 按钮下载压缩包](./screenshot/20240526_001423.png =640x)

4. 下载完后解压缩包，将整个目录拷贝到 C:\Users\你的用户名\Documents\Arduino\libraries 目录下

![将整个目录拷贝到 C:\Users\你的用户名\Documents\Arduino\libraries 目录下](./screenshot/20240526_001617.png =640x)

5. 打开 Arduino IDE 或 重新启动 Arduino IDE，在菜单栏中找到 `文件` -> `示例` -> `BeShell` ，则表示安装成功。


## 简单的示例

1. 打开 Arduino IDE, 选择 `文件` -> `示例` -> `BeShell` -> `basic`

![打开 BeShell 示例 basic](./screenshot/20240525_233738.png =640x)

示例代码如下，这是一个运行 BeShell 最简单的例子，虽然仅包含了初始化和循环函数，但依然可以通过 JavaSript 代码做很多事情:

```cpp
#include <BeShell.hpp>

using namespace be ;

BeShell beshell ;

void setup() {
  beshell.setup() ;
}

void loop() {
  beshell.loop() ;
}
```

2. 在菜单栏 `工具` -> `开发板:xxx` 子菜单中选择对应的 ESP32 开发板。

![选择对应的ESP32开发板](./screenshot/20240526_150209.png =640x)


3. 将开发板连接到电脑, 打开串口监视器

![打开串口监视器](./screenshot/20240525_231011.png =640x)

4. 编译并烧录程序

![编译且烧录成功](./screenshot/20240525_234744.png =640x)

5. 一切顺利的话，串口监视器里会看到 BeShell 的输出的 ASCII Logo，表示运行成功。

![串口监视器中输出 ASCII Logo](./screenshot/20240525_234902.png =640x)

6. 在串口监视器中输入 `console.log("Hello, world!")` 并回车，则会在串口监视器中看到执行这行 JavaScript 代码的结果：输出了 `Hello, world!`

你在 `Hello, world!` 下面还会看一行 `undefined`，它是 `console.log` 函数的返回值。这和 NodeJS 的 REPL 以及 浏览器的 DevTools 行为一致。 **但是，这一次是在 ESP32 设备上执行的!**