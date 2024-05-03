---
headerDepth: 1
---

# JS模块: fs

导入 `fs` 模块：

::: code-tabs

@tab 在.js文件中

```javascript
import * as wifi from 'fs'
```

@tab 在REPL命令行下
```javascript
import fs
```

:::



# API 函数
## mkdirSync

原型: mkdirSync (path:string, recursive:bool=false)

同步创建目录

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>recursive=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否递归创建目录


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## rmdirSync

原型: rmdirSync (path:string)

同步删除目录。如果目录非空返回 false。

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## unlinkSync

原型: unlinkSync (path:string)

同步删除文件

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





## readFileSync

原型: readFileSync (path:string, readlen:number=-1, offset:number=0)

同步读取文件

> 函数返回的是一个 ArrayBuffer 对象，可以使用 ArrayBuffer.prototype.asString() 方法转换为字符串，例如：
> ```
> let content = fs.readFileSync("~/foo.bar").asString()
> console.log(content)
> ```

### 参数:

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


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>ArrayBuffer





## writeFileSync

原型: writeFileSync (path:string, data:string|ArrayBuffer, append:bool=false)

同步写入文件，返回写入字节数量

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>data</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string|ArrayBuffer

    <span style='display: inline-block; width:100px'>**参数说明**</span>数据内容

* <span style='color: #007acc'>append=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否追加写入


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>number





## readdirSync

原型: readdirSync (path:string, detail:bool=false)

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

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径

* <span style='color: #007acc'>detail=false</span>

    <span style='display: inline-block; width:100px'>**类型**</span>bool

    <span style='display: inline-block; width:100px'>**默认值**</span>false

    <span style='display: inline-block; width:100px'>**参数说明**</span>是否范围详细信息


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>string[]

| object[]



##  statSync

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

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>文件路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>null

| object



##  existsSync

原型:  existsSync (path:string)

同步返回路径是否存在

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





##  isFileSync

原型:  isFileSync (path:string)

同步返回路径是否存在

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool





##  isDirSync

原型:  isDirSync (path:string)

同步返回路径是否存在

### 参数:

* <span style='color: #007acc'>path</span>

    <span style='display: inline-block; width:100px'>**类型**</span>string

    <span style='display: inline-block; width:100px'>**参数说明**</span>路径


### 返回值:

<span style='display: inline-block; width:100px'>**类型**</span>bool




                