
function funcDocGenerator(doc) {

    let fullName = (doc["@function"]||doc["@method"])[0]
    let funcName = (doc["@function"]||doc["@method"])[0].split('.').pop()
    let isMethod =!!doc["@method"]

    let mdParamList = ''

    let proto = funcName + " ("

    let i = 0
    for(let param of doc["@param"]||[]) {
        let segs = param.trim().split(" ")
        let sign = segs.shift().trim()
        let [name,type] = sign.split(":")
        let def = undefined
        if(type) {
            ; [type, def] = type.split("=")
            if(def!==undefined) {
                name+= "=" + def
            }
            type = type.trim().replace(/\|/g, ", ")
        }

        let desc = segs.join(" ")

        if(i++) {
            proto+= ', '
        }
        proto+= sign

        mdParamList+= "* <span style='color: #007acc'>" + name + "</span>\r\n\r\n"
        mdParamList+= "    <span style='display: inline-block; width:100px'>**类型**</span>" + type + "\r\n\r\n"
        if(def!==undefined) {
            mdParamList+= "    <span style='display: inline-block; width:100px'>**默认值**</span>" + def + "\r\n\r\n"
        }
        mdParamList+= "    <span style='display: inline-block; width:100px'>**参数说明**</span>" + desc + "\r\n\r\n"
    }

    proto+= ")"
    
    let md = `<p style="height: 10px;margin:0px"></p>

### <span class='member-header function'></span> ${isMethod?'方法':'函数'} ${funcName}

原型: ${proto}

`

    if(doc._) {
        md+= doc._.join("\r\n") + '\r\n'
    }

    if(doc["@param"]) {
        md+='#### 参数:\r\n\r\n'
        md+= mdParamList + '\r\n'
    }

    md+='#### 返回值:\r\n\r\n'
    if(doc["@return"]) {
        let segs = doc["@return"][0].trim().split(" ")
        let sign = segs.shift().trim().replace(/\|/g, ", ")
        let desc = segs.join(" ")

        md+= "<span style='display: inline-block; width:100px;margin-left:20px'>**类型**</span>" + sign + '\r\n\r\n'
        md+= desc + '\r\n'
    }
    else {
        md+= '`undefined`\r\n'
    }

    return md + '\r\n<p style="height: 10px;margin:0px"></p>'
}

function generateAllFuncs(doc) {
    let mdFuncs = []
    for(let funcDoc of doc.funcs||[]) {
        mdFuncs.push(funcDocGenerator(funcDoc))
    }
    return mdFuncs
}


function moduleDocGenerator(doc){

    let md = `---
headerDepth: 2
---

# 模块: ${doc.name}
`
    if(doc.global) {
        md+= `> 该模块不需要 import，可通过全局变量 \`${doc.global}\` 访问\r\n\r\n`
    } else {
        md+=
`
导入 \`${doc.name}\` 模块：

::: code-tabs

@tab 在.js文件中

\`\`\`javascript
import * as wifi from '${doc.name}'
\`\`\`

@tab 在REPL命令行下

\`\`\`javascript
import ${doc.name}
\`\`\`

:::

`
    }

    if(doc.desc.length>0) {
        md+= `${doc.desc.join("\r\n\r\n")}\r\n\r\n`
    }

    if(doc.funcs.length>0){
        md+= `## 模块函数\r\n\r\n`
        md+= generateAllFuncs(doc).join("\r\n\r\n") + '\r\n\r\n'
    }

    return md
}


function classDocGenerator(doc){
    

    let md = `---
headerDepth: 2
---

# 类: ${doc.name}
`

    if(doc.desc.length>0) {
        md+= `${doc.desc.join("\r\n\r\n")}\r\n\r\n`
    }

    if(doc.funcs.length>0){
        md+= `## 类方法\r\n\r\n`
        md+= generateAllFuncs(doc).join("\r\n\r\n") + '\r\n\r\n'
    }

    return md
}

const generators = {
    'nmodule': moduleDocGenerator,
    'nclass': classDocGenerator,
    'lv-widget': classDocGenerator,
}

exports.generators = generators