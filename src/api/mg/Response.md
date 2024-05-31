---
headerDepth: 2
---

# 类: Response
Response 类用于 mg.Server 回调函数的参数 rspn , 不需要创建该类: 

* [mg.listenHttp()](../mg/#%E5%87%BD%E6%95%B0-listenhttp)

* [mg.Server.setHandler()](Server.html#%E6%96%B9%E6%B3%95-sethandler)




## 类方法

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  reply

原型:  reply (content:string, code:number=200, header:string=null)

回复内容

#### 参数:

* <span style='color: #007acc'>content</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>回复内容

* <span style='color: #007acc'>code=200</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>200

    <span style='display: inline-block; width:100px'>**参数说明**</span>回复状态码, 默认为 200

* <span style='color: #007acc'>header=null</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**默认值**</span>null

    <span style='display: inline-block; width:100px'>**参数说明**</span>回复头, 格式为 "key: value\r\n"


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  redirect

原型:  redirect (url:string)

重定向请求

#### 参数:

* <span style='color: #007acc'>url</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>重定向链接地址


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  close

原型:  close ()

服务器主动关闭访问连接

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  serveDir

原型:  serveDir (req:[HTTPRequest](HTTPRequest.md), dir:string)

执行文件服务

该方法用于实现静态文件服务器，用法请参考：[简单 HTTP Web 后端的例子](../../guide/http-server.html#_2-%E7%AE%80%E5%8D%95-http-web-%E5%90%8E%E7%AB%AF%E7%9A%84%E4%BE%8B%E5%AD%90)

#### 参数:

* <span style='color: #007acc'>req</span>

    <span style='display: inline-block; width:100px'>**类型**</span>[HTTPRequest](HTTPRequest.md)

    <span style='display: inline-block; width:100px'>**参数说明**</span>请求对象，将事件回调函数传入的 req 直接传递给 serveDir 即可

* <span style='color: #007acc'>dir</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>文件根目录


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  httpUpgrade

原型:  httpUpgrade (req:[HTTPRequest](HTTPRequest.md))

http 协议升级

将 http 请求升级为 WebSocket 通讯，用法请参考：[WebSocket 的例子](../../guide/http-server.html#_3-websocket-%E7%9A%84%E4%BE%8B%E5%AD%90)

#### 参数:

* <span style='color: #007acc'>req</span>

    <span style='display: inline-block; width:100px'>**类型**</span>[HTTPRequest](HTTPRequest.md)

    <span style='display: inline-block; width:100px'>**参数说明**</span>请求对象，将事件回调函数传入的 req 直接传递给 serveDir 即可


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  wsSend

原型:  wsSend (data:string)

发送 WebSocket 数据帧

用法请参考：[WebSocket 的例子](../../guide/http-server.html#_3-websocket-%E7%9A%84%E4%BE%8B%E5%AD%90)

#### 参数:

* <span style='color: #007acc'>data</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>数据帧内容


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

