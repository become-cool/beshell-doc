---
headerDepth: 2
---

# 模块: WiFi

导入 `WiFi` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'WiFi'
```

@tab 在REPL命令行下

```javascript
import WiFi
```

:::

> WiFi 模块的例子请参考：[用 JavaScript 连接 WiFi](../guide/wifi.md)

系统在初次 `import` WiFi 模块时，会自动初始化所有相关的硬件资源。


## 模块函数

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  start

原型:  start ()

启动 WiFi 硬件，所有 wifi 模块里的 api 都需要在 `start()` 之后才能调用。

`startAP` 和 `connect` 会自动调用 `start()` ，因此一般情况下，可以直接使用 startAP 或 connect 。

返回 0 表示成功, 返回非 0 表示错误代码

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  stop

原型:  stop ()

停止 WiFi 硬件。

返回 0 表示成功, 返回非 0 表示错误代码

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  isReady

原型:  isReady ()

返回是否已经 start()

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  startAP

原型:  startAP (ssid:string, password:string)

启动 WiFi 热点

> 该函数会自动调用 `start()` 启动 WiFi 模块。

异步返回 Promise\<bool\> 表示成功或者失败

#### 参数:

* <span style='color: #007acc'>ssid</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>WiFi 热点名称

* <span style='color: #007acc'>password</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>WiFi 热点密码


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<bool\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  stopAP

原型:  stopAP ()

停止 WiFi 热点

异步返回 Promise\<bool\> 表示成功或者失败

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<bool\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  connect

原型:  connect (ssid:string, password:string, retry:number=3, retryDuration:number=2000)

做为 WiFi STA 连接到热点

> 该函数会自动调用 `start()` 启动 WiFi 模块。

异步返回 Promise\<bool\> 表示成功或者失败

#### 参数:

* <span style='color: #007acc'>ssid</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>WiFi 热点名称

* <span style='color: #007acc'>password</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>WiFi 热点密码

* <span style='color: #007acc'>retry=3</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>3

    <span style='display: inline-block; width:100px'>**参数说明**</span>连接失败重试次数

* <span style='color: #007acc'>retryDuration=2000</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>2000

    <span style='display: inline-block; width:100px'>**参数说明**</span>连接重试间隔时间，单位 ms


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<bool\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  disconnect

原型:  disconnect ()

断开 WiFi STA 的连接

异步返回 Promise\<bool\> 表示成功或者失败

未连接状态下，直接返回 Promise\<true\>

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<bool\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  isConnecting

原型:  isConnecting ()

返回是否正在连接中

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  status

原型:  status (type:string="apsta")

返回 AP/STA 详细状态

返回对象的格式：

::: code-tabs

@tab apsta

```javascript
{
    "ap": {
        "ssid": string,
        "password": string,
        "started": bool,
        "ip":string,
        "netmask":string,
        "gw":string
     } ,
    "sta": {
        "ssid": string,
        "password": string,
        "started": bool,
        "connected": bool,
        "authmode":number,
        "ip":string,
        "netmask":string,
        "gw":string
     } ,
}
```

@tab ap

```javascript
"ap": {
    "ssid": string,
    "password": string,
    "started": bool,
    "ip":string,
    "netmask":string,
    "gw":string
} ,
```

@tab sta

```javascript
"sta": {
    "ssid": string,
    "password": string,
    "started": bool,
    "connected": bool,
    "authmode":number,
    "ip":string,
    "netmask":string,
    "gw":string
} ,
```
:::

#### 参数:

* <span style='color: #007acc'>type="apsta"</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**默认值**</span>"apsta"

    <span style='display: inline-block; width:100px'>**参数说明**</span>可选值："apsta"、"ap"、"sta"


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  waitIP

原型:  waitIP ()

等待从 DHCP 获取 IP 地址

异步返回 Promise\<object|false\> ，如果失败范围 false，成功则返回包括 ip 的 sta status 对象。

参考 `status()` 函数的返回值。

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<object, false\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setPS

原型:  setPS (mode:0|1|2)

设置 wifi 的节能模式 (PowerSafe)

参数 mode :

* 0 关闭节能模式
* 1 最小
* 2 最大

关闭节能模式，可以避免 WiFi 休眠，提供通讯的效率和稳定性，但会增加功耗

返回 0 表示 api 调用成功, 返回非 0 表示错误代码

#### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>0, 1, 2

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setMode

原型:  setMode (mode:0|1|2|3)

设置 wifi 的工作模式，`startAP` 和 `connect` 会自动设置工作模式，因此通常不需要直接使用这个 api

参数 mode :

* 0 未启动
* 1 STA
* 2 AP
* 3 STA + AP

返回 0 表示 api 调用成功, 返回非 0 表示错误代码

#### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>0, 1, 2, 3

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  getMode

原型:  getMode ()

返回设置 wifi 的工作模式

* 0 未启动
* 1 STA
* 2 AP
* 3 STA + AP

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setAPConfig

原型:  setAPConfig (config:object)

设置 wifi AP 模式的参数, `startAP` 会自动配置 AP 参数，需要对设备更详细的设置时，可以使用这个 api

参数 mode :
```javascript
{
    ssid: string ,
    password?: string ,
    "threshold.authmode"?: 0-8 ,
    channel?: 1-13 ,
    max_connection?: number = 4 , // 最大客户连接数
    ssid_hidden?:bool = false ,    // 热点不会被扫描到
    beacon_interval?: number ,
    pairwise_cipher?: number ,
    ftm_responder?: bool ,        // Enable FTM Responder mode
}
```

如果 `password` 为空, 则 `threshold.authmode` 自动设置为 `WIFI_AUTH_OPEN`

返回 0 表示 api 调用成功, 返回非 0 表示错误代码

#### 参数:

* <span style='color: #007acc'>config</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setStaConfig

原型:  setStaConfig (config:object)

设置 wifi STA 模式的连接参数, `connect` 会自动配置连接参数，需要使用更详细的连接参数时使用此 API

参数 mode :
```javascript
{
    ssid: string ,
    password?: string ,
    "threshold.authmode"?: 0-8 ,
    scan_method?: 0|1 ,
    channel?: 1-13 ,
    listen_interval?:number = 3 ,
    sort_method?: 0|1 = 0 ,       // sort the connect AP in the list by rssi or security mode
}
```

如果 `password` 为空, 则 `threshold.authmode` 自动设置为 `WIFI_AUTH_OPEN`

返回 0 表示 api 调用成功, 返回非 0 表示错误代码

#### 参数:

* <span style='color: #007acc'>config</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  getConfig

原型:  getConfig (mode:1|2)

返回 wifi 的工作参数

返回的对象可参考 `setStaConfig()` 和 `setAPConfig()` 的 `mode` 参数

#### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>1, 2

    <span style='display: inline-block; width:100px'>**参数说明**</span> 1代表 sta , 2代表 ap


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  getIpInfo

原型:  getIpInfo (type:number)

返回 AP/STA 的 IP 

function 返回一个对象, 包含 ip, netmask, gw 信息
```javascript
{
    ip:string,
    netmask:string,
    gw:string
}
```

#### 参数:

* <span style='color: #007acc'>type</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>1代表 sta, 2代表 ap


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setHostname

原型:  setHostname (nane:string)

返回设置 wifi 的在局域网中可被显示的主机名

#### 参数:

* <span style='color: #007acc'>nane</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  allSta

原型:  allSta ()

返回所有连接到本机AP的客户机

返回对象数组, 每个对象包含 mac 和 rssi 信息
```javascript
[
    {mac: "xx:xx", rssi: -30},
]
```

`rssi` 值范围 -100 ~ 0, 单位为 dBm，表示信号强度，越大(绝对值越小)表示信号越强。

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>{mac:string,rssi:string}[]



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  scan

原型:  scan ()

扫描周围的 WiFi 热点，必须在 STA 模式下运行

异步返回 Promise\<object[]\> 

返回对象数组的格式：

```javascript
[
    {
        bssid:string ,
        ssid:string ,
        channel:number ,
        rssi:number ,
        authmode:number ,
    } ,
    ...
]
```

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>Promise\<object[]\>



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  scanStop

原型:  scanStop ()

停止AP扫描

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  isScanning

原型:  isScanning ()

返回 AP 扫描是否正在进行

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  scanRecords

原型:  scanRecords ()

取回 AP 扫描的结果

返回的数组格式:
```javascript
[
    {
        bssid:string ,
         ssid:string ,
         channel:number ,
         rssi:number ,
         authmode:number ,
     }
]
```

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>object[]



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  staStarted

原型:  staStarted ()

返回 WiFi STA 模式是否启动

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  staConnected

原型:  staConnected ()

返回 WiFi STA 是否已经连接

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  apStarted

原型:  apStarted ()

返回 WiFi AP 模式是否启用

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

