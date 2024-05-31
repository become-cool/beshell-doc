---
headerDepth: 2
---

# 模块: mg

导入 `mg` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'mg'
```

@tab 在REPL命令行下

```javascript
import mg
```

:::

BeShell 集成了 [Mongoose 库](https://mongoose.ws)，用来处理网络应用层的协议，包括 HTTP(S)、WebSocket、MQTT、SNTP、SMTP 等。

关于 mg 模块的例子请参考: [在 ESP32 上用 JavaScript 开发 WEB 后端](../../guide/http-server.md)

## 事件

```
error: 发生错误
open: 客户端连接
poll: 轮询事件
resolve: 域名解析完成
connect: 客户端连接建立完成
accept: 客户端连接接受完成
read: 客户端数据接收完成
write: 客户端数据发送完成
close: 客户端连接关闭
http.msg: HTTP 请求/响应消息接收完成
ws.open: WebSocket 握手完成
ws.msg: WebSocket 消息接收完成
ws.ctl: WebSocket 控制消息接收完成
mqtt.cmd: MQTT 低级命令接收完成
mqtt.msg: MQTT PUBLISH 消息接收完成
mqtt.open: MQTT CONNACK 接收完成
sntp.time: SNTP 时间接收完成
```


## 模块函数

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  listenHttp

原型:  listenHttp (addrOrOptions:string|object, callback:function)

创建一个处理 http 协议的服务器实例。

此函数的例子参考：[简单 HTTP Web 后端的例子](../../guide/http-server.md#_2-%E7%AE%80%E5%8D%95-http-web-%E5%90%8E%E7%AB%AF%E7%9A%84%E4%BE%8B%E5%AD%90)

第一个参数可以是 [ip:port] 格式的字符串表示服务器地址，例如 `"0.0.0.0:8080"`

第一个参数也可以是一个对象：

```typescript
{
    addr: string ,
    ssl: boolean ,
    callback: (ev:string, req, rspn)=>void
}
```

回调函数的原型：

```typescript
callback(event:string, request:HTTPRequest, response:Response): void
```

其中 event 参数参考：[mg 事件](#%E4%BA%8B%E4%BB%B6)


#### 参数:

* <span style='color: #007acc'>addrOrOptions</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string, object

    <span style='display: inline-block; width:100px'>**参数说明**</span>该参数可以是 [ip:port] 格式的字符串表示服务器地址，或选项对象

* <span style='color: #007acc'>callback</span>

    <span style='display: inline-block; width:100px'>**类型**</span>function

    <span style='display: inline-block; width:100px'>**参数说明**</span>服务器事件回调函数，该函数接收三个参数：事件名称、请求对象、响应对象


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>[Server](Server.md)



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  connect

原型:  connect (url:string, callback:function)

创建并执行一个客户端连接

该函数的第一个参数是连接地址，第二个参数是一个回调函数，该函数接收三个参数：事件名称、请求对象。

回调函数的原型:

```typescript
callback(event:string, request:HTTPRequest): void
```

其中 event 参数参考：[mg 事件](#%E4%BA%8B%E4%BB%B6)

#### 参数:

* <span style='color: #007acc'>url</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>连接地址，例如 `"http://www.example.com/path"`

* <span style='color: #007acc'>callback</span>

    <span style='display: inline-block; width:100px'>**类型**</span>function

    <span style='display: inline-block; width:100px'>**参数说明**</span>事件回调函数


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>[Client](Client.md)



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  connPeer

原型:  connPeer (idx:number)

返回指定客户端连接的对端地址 [ip:port]

#### 参数:

* <span style='color: #007acc'>idx</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>表示第几个客户端


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  connCount

原型:  connCount ()

连接到服务器的客户端数量

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  getDNS

原型:  getDNS ()

返回当前 dns 服务器地址

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  parseUrl

原型:  parseUrl (url:string)

解析 URL 字符串，返回对象：

```typescript
{
    host: string ,
    port: number ,
    uri: string
}
```

#### 参数:

* <span style='color: #007acc'>url</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>要解析的 URL 字符串


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setLog

原型:  setLog (log:string)

设置 mg 的日志级别

#### 参数:

* <span style='color: #007acc'>log</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>日志级别


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

