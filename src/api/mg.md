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

## 模块函数

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  listenHttp

原型:  listenHttp (addrOrOptions:object|string, callback:function)

创建一个处理 http 协议的服务器对象

第一个参数可以是 [ip:port] 格式的字符串表示服务器地址，例如 `"0.0.0.0:8080"`

第一个参数也可以是一个对象：

```
{
    addr: string ,
    ssl: boolean ,
    callback: (ev:string, req, rspn)=>void
}
```

回调函数的原型：

```
callback(event:string, request:HTTPRequest, response:Response): void
```

其中 event 表示事件类型，有以下事件：

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

#### 参数:

* <span style='color: #007acc'>addrOrOptions</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object, string

    <span style='display: inline-block; width:100px'>**参数说明**</span>该参数可以是 [ip:port] 格式的字符串表示服务器地址，或选项对象

* <span style='color: #007acc'>callback</span>

    <span style='display: inline-block; width:100px'>**类型**</span>function

    <span style='display: inline-block; width:100px'>**参数说明**</span>服务器事件回调函数，该函数接收三个参数：事件名称、请求对象、响应对象


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Server



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

### <span class='member-header function'></span> 函数  getDNS

原型:  getDNS (url:string)

解析 URL 字符串，返回对象：

```
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

```
{
    host: string ,
    port: number ,
    uri: string
}
```

#### 参数:

* <span style='color: #007acc'>log</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>日志级别


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

