const {path_beshell, path_output} = require("./config.js")
const fs = require("fs")
const javadoc = require("javadoc")


const c_sources = {
    'fs': {
        title: '文件系统' ,
        src:path_beshell+"/src/fs/FSModule.cpp"
    } ,
    'gpio': {
        title: 'GPIO' ,
        src:path_beshell+"/src/module/GPIOModule.cpp"
    } ,

    'process': {
        title: 'process' ,
        src:path_beshell+"/src/module/ProcessModule.cpp"
    } ,

    'wifi': {
        title: 'WiFi' ,
        src:path_beshell+"/src/module/WiFiModule.cpp"
    } ,

    // 'gl': {
    //     did: 72 ,
    //     title: '绘图接口(GL)' ,
    //     src:__dirname+"/../main/modules/lvgl/be_gl_js.c" ,
    //     tpl:__dirname+"/tpl/lvgl-gl.md" ,
    // } ,
}
function genApiDoc(doc) {

    let fullName = doc["@beapi"][0]
    let funcName = doc["@beapi"][0].split('.').pop()

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

    
    
    let md = '## ' + funcName + "\r\n\r\n"

    md+= '原型: ' + proto + '\r\n\r\n'

    if(doc._) {
        md+= doc._.join("\r\n") + '\r\n'
    }

    if(doc["@param"]) {
        md+='### 参数:\r\n\r\n'
        md+= mdParamList + '\r\n'
    }

    md+='### 返回值:\r\n\r\n'
    if(doc["@return"]) {
        let segs = doc["@return"][0].trim().split(" ")
        let sign = segs.shift().trim()
        let desc = segs.join(" ")

        md+= "<span style='display: inline-block; width:100px'>**类型**</span>" + sign + '\r\n\r\n'
        md+= desc + '\r\n'
    }
    else {
        md+= '`undefined`\r\n'
    }

    return md + '\r\n'
}

async function parseFile(path) {

    let apiDesc = []

    try{
        var json = await javadoc.generate({
            include: [path],
            exclude: ["**/node_modules/**"],
            format: "json"
        })

        console.log(JSON.stringify(json, null, 4))
        // fs.writeFileSync( path+".json" JSON.stringify(json, null, 4) )

        for(let doc of json.success[0]) {
            if(!doc["@beapi"]) {
                continue
            }

            // console.log(doc)
            try{
                let md = genApiDoc(doc)
                // console.log(md)

                apiDesc.push(md)
            }catch(e){
                console.error(e)
                continue
            }
        }

        return apiDesc.join("\r\n\r\n")
    }
    catch(e) {
        console.error(e)
    }
}

async function main() {

    let module = process.argv[2]
    if(!module) {
        console.log("usage:")
        console.log("node gen-api-docs.js <module_name> | all")
        return 
    }

    for(let moduleName in c_sources) {
        if(module!='all' && module!=moduleName) {
            continue
        }
        let {src, tpl} = c_sources[moduleName]
        try{
            let md = await parseFile(src, moduleName, c_sources[moduleName])

            if(tpl) {
                tpl = fs.readFileSync(tpl).toString()
                console.log(md)
                md = tpl.replace("${AUTO GEN}",md)
            } else {
                md = `---
headerDepth: 1
---

# JS模块: ${moduleName}

导入 \`${moduleName}\` 模块：

::: code-tabs

@tab 在.js文件中

\`\`\`javascript
import * as wifi from '${moduleName}'
\`\`\`

@tab 在REPL命令行下

\`\`\`javascript
import ${moduleName}
\`\`\`

:::



# API 函数
${md}
                `
            }

            let output = path_output+"/api/"+moduleName+'.md'
            fs.writeFileSync(output, md)
            console.log("output to", output)

        } catch(e) {
            console.error(e)
        }
    }
}


main()