---
headerDepth: 2
---

# 类: I2C
该类的构造函数没有绑定给 JS , 无法从 JS 创建实例。

模块 [serial](overview.md) 创建了和硬件对应的 I2C 实例，`import serial` 即可。


## 类方法

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  setup


原型:  setup
 (options:object)

设置 i2c 外设, 若遇到错误则抛出异常

```typescript
options: {
  sda: number,
  scl: number,
  mode: number = 0
  rx_buffer_len: number = 0
  tx_buffer_len: number = 0
  freq: number = 400000
  addr_10bit_en: number = 0
  slave_addr: number|undefined = undefined
  timeout: number = 1000
}
```

#### 参数:

* <span style='color: #007acc'>options</span>

    <span style='display: inline-block; width:100px'>**类型**</span>object

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  ping


原型:  ping
 (addr:number)

测试总线上的设备是否存在

#### 参数:

* <span style='color: #007acc'>addr</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>设备地址


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool

true 表示该地址上设备存在，false 表示不存在

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  scan


原型:  scan
 (from:number=0, to:number=127)

在总线上扫描设备给定地址范围的所有设备，在控制台上输出存在的地址

#### 参数:

* <span style='color: #007acc'>from=0</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>0

    <span style='display: inline-block; width:100px'>**参数说明**</span>起始地址

* <span style='color: #007acc'>to=127</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>127

    <span style='display: inline-block; width:100px'>**参数说明**</span>结束地址


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  send


原型:  send
 (addr:number, data:number[]|ArrayBuffer)

在总线上向指定设备发送数据

参数 `data` 可以是 ArrayBuffer 对象, 也可以是字节数值的数值, 例如：[0x1, 0x2, 0x3]

* 发送数据后，接收到设备的 ack 回应则返回 true
* 否则返回 false (总线上设备可能不存在)
* 其他错误抛出异常

#### 参数:

* <span style='color: #007acc'>addr</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>设备地址

* <span style='color: #007acc'>data</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number[], ArrayBuffer

    <span style='display: inline-block; width:100px'>**参数说明**</span>字节数据


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 方法  recv


原型:  recv
 (addr:number, length:number)

在总线上从指定地址(参数`addr`)的设备, 接收指定长度(参数`length`)的数据

* 接收到的数据以 ArrayBuffer 对象返回
* 如果总线上设备不存在则返回 null
* 其他错误抛出异常

#### 参数:

* <span style='color: #007acc'>addr</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>设备地址

* <span style='color: #007acc'>length</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>接收数据的长度


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>ArrayBuffer, null



<p style="height: 10px;margin:0px"></p>

