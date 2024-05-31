---
headerDepth: 2
---

# 类: HTTPRequest
HTTPRequest 类用于 mg.Server 回调函数的参数 req , 不需要创建该类: 

* [mg.listenHttp()](../mg/#%E5%87%BD%E6%95%B0-listenhttp)

* [mg.connect()](../mg/#%E5%87%BD%E6%95%B0-connect)

* [mg.Server.setHandler()](Server.html#%E6%96%B9%E6%B3%95-sethandler)




## 类方法

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  method

原型:  method ()

返回 http 请求的方法

"GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "TRACE", "CONNECT" 等

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  uri

原型:  uri ()

返回 http 请求的 uri

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  query

原型:  query ()

返回 http 请求的 query 部分

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  proto

原型:  proto ()

返回 http 请求的协议

"http", "https", "ws", "wss" 等

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  header

原型:  header (name:string)

返回 http 请求的 header 内容

#### 参数:

* <span style='color: #007acc'>name</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>header的名称，如 "Content-Type", "Content-Length", "Host" 等


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  allHeaders

原型:  allHeaders ()

返回 http 请求的所有 header 内容

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  body

原型:  body ()

返回 http 请求的 body 内容

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  chunk

原型:  chunk ()

返回 http 请求的 body 的 chunk 内容

当 body 比较长时，会分片触发事件，该方法返回事件回调时 chunk 内容

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  raw

原型:  raw ()

返回 http 请求的原始数据内容

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  rawHead

原型:  rawHead ()

返回 http 请求原始的 header 内容

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  matchURI

原型:  matchURI (pattern:string)

由 mg 提供的 uri 匹配检查函数

该函数是对 Mongoose mg_http_match_uri api 的封装

#### 参数:

* <span style='color: #007acc'>pattern</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>uri匹配模式


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

