# 在 ESP32 上用 JavaScript 开发 WEB 后端

BeShell 集成了 [Mongoose 库](https://mongoose.ws)，用来处理网络应用层的协议，包括 HTTP(S)、WebSocket、MQTT、SNTP、SMTP 等。

BeShell 在 ESP32 平台上实现了类似 `Node.js` 这样的 WEB 后端开发框架。

BeShell 还提供的 文件系统、SQLite3 等模块，互联网前端、后端工程师可以平滑地从自己的技术栈过渡到 ESP32 单片机平台。

使用 BeShell 开发者可以轻易地将低成本的 ESP32 设备当作 微型、分布式，或者便携的 WEB 云服务器来使用。

## 1. Arduino 启动工程代码

这里主要介绍 mg 模块的 JavaScript API，如何在 ESP32 设备上运行 JavaScript 文件，请参考：[运行 JavaScript 脚本文件](run-js-script.html)

使用 mg 模块的 Arduion 工程代码如下：

```cpp
#include <BeShell.hpp>

using namespace be;

BeShell be;

void setup() {

    // 启动 Mg 模块
    beshell.use<Mg>() ;

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

## 2. 简单 HTTP Web 后端的例子

```javascript
import * as wifi from "wifi"
import * as mg from "mg"

(async function (){

    // 创建热点
    if( ! await wifi.startAP("BeShell-APP", "12345678") ){
        console.log("Failed to start AP")
        return
    }
    console.log("AP started")

    mg.listenHttp("0.0.0.0:80",(ev, req, res)=>{
        // 处理 http 请求
        if(ev=="http.msg") {
            // 动态页面
            if( req.uri() == "/hello" ){
                res.reply("<h3>Hello World</h3>")
            }
            // 静态页面
            else {
                res.serveDir(req, "/public")
            }
        }
    })

})()
```

用手机或PC 连接到 ESP32 的热点，打开浏览器访问 `http://192.168.4.1/hello`，可以看到 `Hello World` 页面。

通过 [BeConsole](https://beconsole.become.cool) 在 ESP32 设备上创建 `public` 目录，上传一些文件到 `public` 目录，然后就可以直接通过 `http://192.168.4.1/xxx.html` 访问了。

这个例子演示了一个简单但是完整的 WEB APP, 如何响应动态HTTP请求，以及如何将前端静态页面部署到 ESP32 设备上。有 `Node.JS` 经验的开发者对这种模式应该非常熟悉。

> 注意：`mg.listenHttp()` 的回调函数会接收全部的 mg 连接事件，包括 open, close, http.msg 等。所以需要判断 `ev` 参数来区分不同的事件。

## 3. WebSocket 的例子

> 该部分内容的文档还在整理中...


## 4. 数据库 SQLite3 的例子

> 该部分内容的文档还在整理中...

