# 使用 JavaScript 控制 GPIO

GPIO 功能是单片机的基础，BeShell 较完整的实现了 GPIO 功能的 JavaScript API 。下面给出了一些常用的例子，详细 API 请参考 [GPIO 模块 API](../api/gpio.md)。

## 1. Arduino 启动工程代码

这里主要介绍 GPIO 模块的 JavaScript API，如何在 ESP32 设备上运行 JavaScript 文件，请参考：[运行 JavaScript 脚本文件](run-js-script.html)

使用 GPIO 模块的 Arduion 工程代码如下：

```cpp
#include <BeShell.hpp>

using namespace be;

BeShell be;

void setup() {

    // 启动 GPIO 模块
    beshell.use<GPIO>() ;

    // 启动 文件系统模块
    beshell.use<FS>() ;
    
    // 挂载分区
    FS::mount("/", new FatFS("ffat",true)) ;
    
    // 启动 BeShell
    beshell.setup() ;
}

// 主循环
void loop() {
    beshell.loop() ;
}

```

> ESP-IDF 框架下使用 WiFi 模块的工程类似

接下来是 JavaScript 文件的例子。

## 2. 简单的闪烁 LED 的例子

```javascript
import * as gpio from "gpio"

// set 12, 13, 14, 15 as output mode
gpio.setMode(12, "output")
gpio.setMode(13, "output")
gpio.setMode(14, "output")
gpio.setMode(15, "output")

// blink the LEDs every second
setInterval(() => {
    gpio.write(12, gpio.read(12)? 0 : 1)
    gpio.write(13, gpio.read(13)? 0 : 1)
    gpio.write(14, gpio.read(14)? 0 : 1)
    gpio.write(15, gpio.read(15)? 0 : 1)
},1000)
```
将4个 LED 连接到 12, 13, 14, 15 四路 GPIO 上，然后运行上面的代码，就可以看到 LED 开始闪烁。

> 注意: 通常 LED 的耐受电压低于 GPIO 输出的 3.3V，所以需要串联一个 1KΩ 的电阻来降低输出电压。压。


## 3. 读取按键开关的例子

```javascript
import * as gpio from "gpio"

// 引脚 16 设置为输入模式
gpio.setMode(16, "input")

// 引脚 16 设置为内部上拉
gpio.pull(16, "up")

// 监听并输出 16 引脚的状态变化
gpio.watch(16, "both", (pin, value) => {
    if(value) {
        console.log("Button released")
    }
    else {
        console.log("Button pressed")
    }
})

```

准备一个按键开关，连接 16 引脚，另一脚连接电源 GNDA。运行上面的代码，当按键按下时，控制台会输出 "Button pressed"，当按键松开时，控制台会输出 "Button released"。

