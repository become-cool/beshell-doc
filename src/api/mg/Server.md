---
headerDepth: 2
---

# 类: Server
## 类方法

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  close

原型:  close ()

关闭服务器

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  startTelweb

原型:  startTelweb ()

在该服务器对象上启动 telweb

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  stopTelweb

原型:  stopTelweb ()

在该服务器对象上停止 telweb

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  setHandler

原型:  setHandler (callback:function)

设置服务器回调函数

回调函数的原型：

```
callback(event:string, request:HTTPRequest, response:Response): void
```

其中 event 参数参考：[mg 事件](../mg/#%E4%BA%8B%E4%BB%B6)

#### 参数:

* <span style='color: #007acc'>callback</span>

    <span style='display: inline-block; width:100px'>**类型**</span>function

    <span style='display: inline-block; width:100px'>**参数说明**</span>回调函数


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

