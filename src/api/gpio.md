---
headerDepth: 2
---

# 模块: GPIO

导入 `GPIO` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'GPIO'
```

@tab 在REPL命令行下

```javascript
import GPIO
```

:::

> GPIO 模块的例子请参考：[用 JavaScript 控制 GPIO](../guide/gpio.md)


## 模块函数

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  setMode

原型:  setMode (pin:number, mode:string)

设置 GPIO 的工作模式

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>引脚序号

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>模式, 可用值: "input"|"output"|"output-od"|"input-output"|"input-output-od"


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  pull

原型:  pull (pin:number, mode:string)

设置 gpio pull 模式
 
参数 `pullMode` 的可选值为:
* up 上拉
* down 下拉
* updown 同时上下拉
* floating 悬空

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>mcu可用的gpio编号

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  write

原型:  write (pin:number, value:number)

gpio 电平输出

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>mcu可用的gpio编号

* <span style='color: #007acc'>value</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>输出电平 0|1


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>undefined



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  read

原型:  read (pin:number)

gpio 电平输入

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>mcu可用的gpio编号


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>0, 1



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  adcSetBits

原型:  adcSetBits (adc:number, bits:number)

设置 adc 的位宽

#### 参数:

* <span style='color: #007acc'>adc</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>adc (目前版本只能为 1)

* <span style='color: #007acc'>bits</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>位宽 (9-12)


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  adcSetChannelAtten
param pin:number mcu可用的gpio编号
param atten:number adc通道 (1|2)

原型:  adcSetChannelAtten
param pin:number mcu可用的gpio编号
param atten:number adc通道 (1|2) ()

设置 gpio 使用哪个 adc 通道

#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  watch

原型:  watch (pin:number, mode:string, callback:function)

监听 gpio 外部电平变化

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>mcu可用的gpio编号

* <span style='color: #007acc'>mode</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>监听模式， 可选值为: "rising"|"falling"|"both"

* <span style='color: #007acc'>callback</span>

    <span style='display: inline-block; width:100px'>**类型**</span>function

    <span style='display: inline-block; width:100px'>**参数说明**</span>回调函数，callback 的原型为 `function(pin, value)`


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  blink

原型:  blink (pin:number, time:number)

GPIO 闪烁，执行该函数后，指定的引脚会持续高低电平切换。

#### 参数:

* <span style='color: #007acc'>pin</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>引脚序号

* <span style='color: #007acc'>time</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**参数说明**</span>间隔时间，单位毫秒，闪烁的半周期


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

定时器id，可使用 `clearTimeout()` 停止闪烁。

<p style="height: 10px;margin:0px"></p>

