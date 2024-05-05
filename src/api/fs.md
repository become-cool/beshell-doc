---
headerDepth: 2
---

# 模块: 文件系统

导入 `文件系统` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from '文件系统'
```

@tab 在REPL命令行下

```javascript
import 文件系统
```

:::

## 模块函数

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  mkdirSync

原型:  mkdirSync (path:string, recursive:bool=false)

同步创建目录

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>recursive=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否递归创建目录


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  rmdirSync

原型:  rmdirSync (path:string)

同步删除目录。如果目录非空返回 false。

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  unlinkSync

原型:  unlinkSync (path:string)

同步删除文件

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  readFileSync

原型:  readFileSync (path:string, readlen:number=-1, offset:number=0)

同步读取文件

> 函数返回的是一个 ArrayBuffer 对象，可以使用 ArrayBuffer.prototype.asString() 方法转换为字符串，例如：
> ```
> let content = fs.readFileSync("~/foo.bar").asString()
> console.log(content)
> ```

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>readlen=-1</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>-1

    <span style='display: inline-block; width:100px'>**参数说明**</span>读取长度，-1表示全文

* <span style='color: #007acc'>offset=0</span>

    <span style='display: inline-block; width:100px'>**类型**</span>number

    <span style='display: inline-block; width:100px'>**默认值**</span>0

    <span style='display: inline-block; width:100px'>**参数说明**</span>开始位置


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>ArrayBuffer



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  writeFileSync

原型:  writeFileSync (path:string, data:string|ArrayBuffer, append:bool=false)

同步写入文件，返回写入字节数量

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>data</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string, ArrayBuffer

    <span style='display: inline-block; width:100px'>**参数说明**</span>数据内容

* <span style='color: #007acc'>append=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否追加写入


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  readdirSync

原型:  readdirSync (path:string, detail:bool=false)

同步读取目录下的所有成员。

如果 detail 参数为 false，仅返回文件名数字。

如果 detail 参数为 true，返回一个数组，数组元素为对象，对象格式如下：

```js
[
    {
        name: string ,
        type: "file"|"dir"|"unknown" ,
        size: number
    } ,
    ...
]
```

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>detail=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否范围详细信息


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>string[]

| object[]

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  statSync

原型:  statSync (path:string)

同步返回文件状态
如果文件不存在,返回 null; 否则返回包含详细信息的对象

返回对象格式:
```js
{
    dev:number,
    ino:number,
    mode:number,
    size:number,
    isDir:bool,
    atime:number,
    mtime:number,
    ctime:number
}
```

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>文件路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>null

| object

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  existsSync

原型:  existsSync (path:string)

同步返回路径是否存在

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  isFileSync

原型:  isFileSync (path:string)

同步返回路径是否存在

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  isDirSync

原型:  isDirSync (path:string)

同步返回路径是否存在

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>bool



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  open

原型:  open (path, mode="rw")

打开文件，返回文件句柄，用于后续操作

#### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>string 文件路径

* <span style='color: #007acc'>mode="rw"</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>string 打开方式


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  read

原型:  read (handle, length)

从文件中读指定长度的数据, 如果遇到错误抛出异常

```js
import {open,read,close} from "fs"

const handle = open("/sdcard/test.txt", "w") ;
const data = read(handle, 10) ;
console.log("readed string:",data.toString()) ;
close(handle) ;
```

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄

* <span style='color: #007acc'>length</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 读取长度


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>ArrayBuffer



<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  write

原型:  write (handle, data)

向文件写入数据,返回写入的字节数

```js
import {open,write,close} from "fs"

const handle = open("/sdcard/test.txt", "w") ;
let wrote = write(handle, "hello world") ;
console.log("wrote bytes:",wrote) ;
close(handle) ;
```

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄

* <span style='color: #007acc'>data</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>ArrayBuffer|string 写入的数据


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

写入的字节数

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  seek

原型:  seek (handle, offset, whence)

移动文件指针到指定位置，影响 read/write 操作

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄

* <span style='color: #007acc'>offset</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 偏移量

* <span style='color: #007acc'>whence</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>0|1|2 0:从文件头开始，1:从当前位置开始，2:从文件尾开始


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

返回0表示成功，非0表示失败原因

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  flush

原型:  flush (handle)

刷新文件缓冲区，将数据写入磁盘 (esp32 平台上没有实际效果)

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

返回0表示成功，非0表示失败原因

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  sync

原型:  sync (handle)

将数据立即写入存储介质（esp32 平台上没有实际效果）

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

返回0表示成功，非0表示失败原因

<p style="height: 10px;margin:0px"></p>

<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> 函数  close

原型:  close (handle)

关闭 open 打开的文件句柄

#### 参数:

* <span style='color: #007acc'>handle</span>

    <span style='display: inline-block; width:100px'>**类型**</span>undefined

    <span style='display: inline-block; width:100px'>**参数说明**</span>number 由open()返回的文件句柄


#### 返回值:

<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>number

返回0表示成功，非0表示失败原因

<p style="height: 10px;margin:0px"></p>

