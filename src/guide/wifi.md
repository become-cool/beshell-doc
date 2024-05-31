# 用 JavaScript 连接 WiFi

WiFi 是 ESP32 系列芯片的主要特色，BeShell 较完整的实现了 WiFi 的 JavaScript API 。下面给出了一些常用的例子，详细 API 请参考 [WiFi 模块 API](../api/wifi)。

## 1. Arduino 启动工程代码

这里主要介绍 WiFi 模块的 JavaScript API，如何在 ESP32 设备上运行 JavaScript 文件，请参考：[运行 JavaScript 脚本文件](run-js-script.html)

使用 WiFi 模块的 Arduion 工程代码如下：

```cpp
#include <BeShell.hpp>

using namespace be;

BeShell be;

void setup() {

    // 启动 WiFi 模块
    beshell.use<WiFi>() ;

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

## 2. 做为 WiFi 热点

简单启动热点的例子：

```javascript
import * as wifi from 'wifi'

// 启动热点
wifi.startAP('BeShell', '12345678')

// 停止热点
// wifi.stopAP()

```

`wifi.startAP()` 是一个返回 Promise 的异步函数，如果需要等待热点启动成功，可以用 `await` 关键字。

```javascript
import * as wifi from 'wifi'

// 定义异步主函数
async function main() {

    // 启动热点
    if( await wifi.startAP('BeShell', '12345678') ){
        console.log('AP started successfully')
    }
    else {
        console.log('AP start failed')
    }

}

// 调用异步主函数
main()

```


## 3. 做为 WiFi 客户机

简单作为客户机连接到热点：

```javascript
impor * as wifi from 'wifi'

// 连接到热点
wifi.connect('BeShell', '12345678')

// 断开连接
// wifi.disconnect('BeShell', '12345678')

```

`wifi.connect()` 同样返回 Promise，如果需要等待连接成功，可以用 `await` 关键字。

等待连接成功且网络可用的例子：

```javascript
import * as wifi from 'wifi'

// 定义异步主函数
async function main() {

    // 连接到热点
    if( await wifi.connect('BeShell', '12345678') ){
        console.log('connection established')
    }
    else {
        console.log('connection failed')
        return
    }

    // 等待从 DHCP 服务器分配 IP 地址
    let status = await wifi.waitIP()
    if( status ) {
        console.log('IP address obtained: ', status.ip)
    }
    else {
        console.log('failed to get IP address')
        return
    }

    // 网络可用, 可以访问网络了
    // todo ...
}

// 调用异步主函数
main()
```


## 4. 扫描附近的热点

> 注意：热点扫描功能需要在 STA 模式下工作


```javascript
import * as wifi from 'wifi'

;(async () => {

    // 切换到 STA 模式， 也可以 APSTA 模式
    // 参数 1: STA 模式, 2: AP 模式, 3: APSTA 模式
    wifi.setMode(1)

    // 启动 WiFi 模块
    await wifi.start()

    // 扫描并输出附近的热点
    let ssidList = await wifi.scan()
    console.log(ssidList)

})()

```

