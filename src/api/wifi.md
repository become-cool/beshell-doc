---
headerDepth: 1
---

# JS模块: wifi

导入 `wifi` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'wifi'
```

@tab 在REPL命令行下
```javascript
import wifi
```

:::



# API 函数
## setPS

原型: setPS (mode:0|1|2)

设置 wifi 的节能模式 (PowerSafe)

参数 mode :

* 0 关闭节能模式
* 1 最小
* 2 最大

### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>0|1|2

    <span style='display: inline-block; width:100px'>**参数说明**</span>


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## setMode

原型: setMode (mode:0|1|2|3)

设置 wifi 的工作模式

参数 mode :

* 0 未启动
* 1 STA
* 2 AP
* 3 STA + AP

返回 0 表示 api 调用成功, 返回非 0 表示错误代码

### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>0|1|2|3

    <span style='display: inline-block; width:100px'>**参数说明**</span>


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## getMode

原型: getMode ()

返回设置 wifi 的工作模式

* 0 未启动
* 1 STA
* 2 AP
* 3 STA + AP

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## setAPConfig

原型: setAPConfig (config:object)

设置 wifi AP 模式的参数

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

### 参数:

* <span style='color: #007acc'>config</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object

    <span style='display: inline-block; width:100px'>**参数说明**</span>


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## setStaConfig

原型: setStaConfig (config:object)

设置 wifi STA 模式的参数

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

### 参数:

* <span style='color: #007acc'>config</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object

    <span style='display: inline-block; width:100px'>**参数说明**</span>


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## getConfig

原型: getConfig (mode:1|2)

返回 wifi 的工作参数

返回的对象可参考 `setStaConfig()` 和 `setAPConfig()` 的 `mode` 参数

### 参数:

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>1|2

    <span style='display: inline-block; width:100px'>**参数说明**</span> 1代表 sta , 2代表 ap


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>object





## staConnect

原型: staConnect ()

WiFi STA 连接到热点

ssid, password 等参数需要通过 wifi.setStaConfig() 设置

返回 0 仅表示api函数调用成功; 非 0 代表对应的错误

连接成功或失败回触发回调函数, 回调函数由 wifi.registerEventHandle() 设置

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## staDisconnect

原型: staDisconnect ()

WiFi STA 断开连接

返回 0 表示成功; 非 0 代表对应的错误

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## getIpInfo

原型: getIpInfo (type:number)

返回 AP/STA 的 IP 

function 返回一个对象, 包含 ip, netmask, gw 信息
```javascript
{
    ip:string,
    netmask:string,
    gw:string
}
```

### 参数:

* <span style='color: #007acc'>type</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>1代表 sta, 2代表 ap


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>object





## setHostname

原型: setHostname (nane:string)

返回设置 wifi 的在局域网中可被显示的主机名

### 参数:

* <span style='color: #007acc'>nane</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>undefined





## allSta

原型: allSta ()

返回所有连接到本机AP的客户机

返回对象数组, 每个对象包含 mac 和 rssi 信息
```javascript
[
    {mac: "xx:xx", rssi: -30},
]
```

`rssi` 值范围 -100 ~ 0, 单位为 dBm，表示信号强度，越大(绝对值越小)表示信号越强。

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>{mac:string,rssi:string}[]





## registerEventHandle

原型: registerEventHandle ()

注册一个事件函数, 当 wifi 状态变化时, 该函数会被调用

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>undefined





## scanStart

原型: scanStart ()

开始扫描附近的AP

> wifi STA 模式必须启动

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## scanStop

原型: scanStop ()

停止AP扫描

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## isScanning

原型: isScanning ()

返回 AP 扫描是否正在进行

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## scanRecords

原型: scanRecords ()

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

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>object[]





## staStarted

原型: staStarted ()

返回 WiFi STA 模式是否启动

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## staConnected

原型: staConnected ()

返回 WiFi STA 是否已经连接

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## apStarted

原型: apStarted ()

返回 WiFi AP 模式是否启用

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool




                