---
headerDepth: 1
---

# JS模块: process

导入 `process` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'process'
```

@tab 在REPL命令行下
```javascript
import process
```

:::



# API 函数
## reboot

原型: reboot ()

重启系统

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>undefined





## readEFUSE

原型: readEFUSE (field:number)

从一次性写入区(只读区) efuse 读取数据

ESP32 一共8个32位寄存器共自定义使用

### 参数:

* <span style='color: #007acc'>field</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>要读取的 efuse 块和位，范围 0-7


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number

读取到的 efuse 数据 (32位整数)



## usage

原型: usage ()

内存使用情况

返回对象的格式：

```javascript
{
  "heap": {
    "total": number,
    "used": number,
    "free": number
  },
  "psram": {
    "total": number,
    "used": number,
    "free": number
  },
  "dma": {
    "total": number,
    "used": number,
    "free": number
  }
}
```

其中，`total` 表示总内存大小，`used` 表示已用内存大小，`free` 表示剩余内存大小。

psram 表示伪静态内存，通常是外挂的IC存储器；

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>object





## top

原型: top ()

打印系统任务运行状态，包括任务名称、状态、优先级、栈大小、任务ID、运行次数、运行时间等信息。

### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>undefined





## setTime

原型: setTime (ms:number)

设置系统时间

### 参数:

* <span style='color: #007acc'>ms</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>UNIX时间戳，单位为毫秒


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>undefined




                