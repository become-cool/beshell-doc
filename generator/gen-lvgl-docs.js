const config = require("./config.js")
const fs = require("fs")

const outputDir = config.path_output + '/api/lvgl'

const LibConst = require(config.path_lv_generator+"/consts.js")
const LibStruct = require(config.path_lv_generator+"/api/struct.js")
const {StyleProps, StyleConstProps} = require(config.path_lv_generator+"/api/style.js")
const LibWidget = require(config.path_lv_generator+"/widgets.js")


const LibConstByName = {}
for(let constName in LibConst) {
    LibConstByName[constName] = LibConst[constName]
}

const LibWidgetByName = {}
for(let widgetName in LibWidget) {
    LibWidgetByName[LibWidget[widgetName].className] = LibWidget[widgetName]
}

const number_types = [
    // signed
    'int8_t','int16_t','int32_t','lv_coord_t' ,
    // unsigned
    'uint8_t','uint16_t','uint32_t','lv_color_t','lv_opa_t', "lv_border_side_t"
]

const bool_types = ['lv_res_t', 'lv_anim_enable_t']
const string_types = ['char *', 'const char *']

function iconvType(ctype) {

    let jsType = ctype
    let signType = ctype
    let type = 'scalar'

    ctype = ctype.trim().replace(/\*$/,'').trim()

    if(LibConstByName[ctype]) {
        jsType = `[${ctype}](../const/#${ctype})`
        signType = 'string'
        type = 'const'
    }
    else if(number_types.includes(ctype)) {
        jsType = `number`
        signType = 'number'
    }
    else if(bool_types.includes(ctype)) {
        jsType = `bool`
        signType = 'bool'
    }
    else if(string_types.includes(ctype)) {
        jsType = `string`
        signType = 'string'
    }
    // else if(LibStruct.byName[ctype]) {
    //     let struct = LibStruct.byName[ctype]
    //     jsType = `[lv.${struct.jsclass}](http://${api_host}/doc/${did_struct}#${struct.type})`
    //     signType = jsType
    // }
    else if(ctype=='void') {
        jsType = `undefined`
        signType = 'undefined'
    }
    else if(ctype=='lv_style_t *' || ctype=='lv_style_t'){
        jsType = `[Style](../../style#${ctype})`
        signType = `[Style](../../style#${ctype})`
        type = 'struct'
    }
    else if(ctype=='lv_obj_t *' || ctype=='const lv_obj_t *' || ctype=='lv_obj_t'){
        jsType = `[Obj](../Obj)`
        signType = '[Obj](../Obj)'
        type = 'struct'
    }

    return [jsType,signType,type]
}



function print_help() {
    console.log("usage:")
    console.log("node gen-lvgl-docs.js widget <widget_name>")
    console.log("node gen-lvgl-docs.js const>")
    console.log("node gen-lvgl-docs.js style>")
    console.log("node gen-lvgl-docs.js event>")
}

function toCamelCase(cstyle) {
    return cstyle.split('_').map((seg,i)=>{
        if(i>0) {
            return seg[0].toUpperCase() + seg.slice(1)
        }
        else {
            return seg
        }
    }).join('')
}

function updateWidgetDoc(className, doc) {

    let methods = doc.methods
    let parent = doc.parentClassName

    let md_methosd = ''
    for(let methodName in methods) {
        let {args, returnType, jsName} = methods[methodName]

        let md_args = ''
        let argsSign = []
        if(args.length) {

            for(let {type:ctype,name:argName} of args) {

                let [jsType,signType] = iconvType(ctype)

                md_args+= `* ${argName}: ${jsType}\r\n\r\n`
                argsSign.push(`${argName}:${signType}`)
            }
        }

        
        md_methosd+= '\r\n\r\n'
        md_methosd+= `### 方法：${jsName}\r\n\r\n`
        md_methosd+= `> 该方法是对 LVGL C API \`${methodName}()\` 的包装\r\n\r\n`

        md_methosd+= `原型: ${jsName} (${argsSign.join(', ')})\r\n\r\n`
        md_methosd+= `参数:\r\n\r\n`
        md_methosd+= md_args || '该函数没有参数\r\n\r\n'
        
        md_methosd+= `返回值:\r\n`

        let [jsReturnType,jsReturnSign,type] = iconvType(returnType)

        md_methosd+= `${jsReturnSign}\r\n\r\n`
        if(type=='const') {
            md_methosd+= `该函数的返回值是一个字符串常量: ${jsReturnType}\r\n\r\n`
        }
    }

    let md = `\`${className}\` 类是对 LVGL 的 Widget \`${doc.type}\` 的包装

**继承自: ${parent}**

## 类方法:

${md_methosd || '该 Widget 没有定义方法'}
` 

    let outputPath = outputDir+"/widgets/"+className+".md"
    console.log("write to:", outputPath)
    fs.writeFileSync(outputPath, md)
}


function generateConst() {
    let md = ''

    console.log(LibConst)

    for(let typename in LibConst) {

        let consDef = LibConst[typename]

        md+= `<h3 id="${consDef.type}"></h3>\r\n\r\n-----\r\n\r\n`

        md+= `### 常量类型 ${consDef.type}\r\n\r\n`
        md+= `BeShell 将 LVGL C API 中的常量类型 `${consDef.type}` 映射为 JS 字符串，在访问 JavaScript lvgl api 时，应使用对应的字符串替代 LVGL C 常量。\r\n\r\n`
        md+= `可用值(js 字符串):\r\n\r\n`
        
        for(let name of consDef.consts) {

            let value = name.replace(consDef.prefix, '').replace(/_/g, '-').toLowerCase()
            
            md+= `* "${value}"\r\n\r\n`
            md+= `    对应 \`${name}\`\r\n\r\n`
        }

    }

    console.log(md)

    fs.writeFileSync(outputDir+"/consts.md", md)

}

function updateStruct() {

    let md = 'BeShell 将一些 LCGL C api 用到的结构体绑定到了对应的 JS类。\r\n\r\n'

    for(let struct of LibStruct) {

        let props = ''
        let getter = ''
        let setter = ''
        for(let [ctype,name] of struct.members) {

            let [jsType, jsSign, type] = iconvType(ctype)

            props+= `* ${name}: ${jsSign}\r\n`
            if(type=='const'){
                props+= ` > 该属性是一个字符串常量: ${jsType}\r\n`
            }
            props+= '\r\n'

            let setterName = toCamelCase('set_'+name)
            let getterName = toCamelCase(name)

            setter+= `#### ${setterName}(value: ${jsSign})\r\n\r\n`
            setter+= `设置内部属性: \`${name}\`\r\n\r\n`

            setter+= `#### ${getterName}(): ${jsSign}\r\n\r\n`
            setter+= `返回内部属性: \`${name}\`\r\n\r\n`
        }

        md+= `<h3 id="${struct.jsclass}"></h3><h3 id="${struct.type}"></h3>

## lv.${struct.jsclass}

LVGL C struct \`${struct.type}\`

### 内部属性:

${props}

### 方法:

${setter}

${getter}

`
    }
    
    return updateCloud(did_struct,'结构对象(Struct)',md)
}


function generateStyle() {

    let md = ''

    for(let style of StyleProps) {
        if(!style.name) {
            continue
        }

        let name = style.name.toLowerCase().replace(/_/g, "-")

        md+= `* **${name}** (${style.style_type})\r\n`
        md+= ` ${style.dsc}\r\n\r\n`
    }

    let tpl = fs.readFileSync(__dirname+'/tpl/lvgl-style.md').toString()
    md = tpl.replace('${ALL STYLES}', md)

    // 
    return updateCloud(did_style,'样式(Style)',md)

}

function generateEvent() {
}

function updateSideBar() {
    let sidebar = []
    for(let className in LibWidgetByName) {
        sidebar.push({
            text: className,
            link: className,
        })
    }
    fs.writeFileSync(outputDir+"/widgets/sidebar.json", JSON.stringify(sidebar,null,2))
}

async function main() {
    if(process.argv.length<3) {
        print_help()
        return
    }

    if( process.argv[2] == 'test' ){
        process.argv[2] = 'widget'
        process.argv[3] = 'Obj'
    }

    

    if(process.argv[2]=='const') {
        await generateConst()
        return
    }

    // else if(process.argv[2]=='struct') {
    //     await updateStruct()
    //     return
    // }

    else if(process.argv[2]=='style') {
        await generateStyle()
        return
    }

    // else if(process.argv[2]=='event') {
    //     await generateEvent()
    //     return
    // }

    // else if(process.argv[2]=='widget') {

    //     if( process.argv[3] == 'all' ) {
    //         for(let className in LibWidgetByName) {
    //             generators.nclass(className, LibWidgetByName[className])
    //             updateWidgetDoc(className, LibWidgetByName[className])
    //         }
    //         updateSideBar()
    //         return
    //     }

    //     else if( LibWidgetByName[process.argv[3]] ) {
    //         updateWidgetDoc(process.argv[3], LibWidgetByName[process.argv[3]])
    //         return
    //     }

    //     else {
    //         console.log("unknow widget:", process.argv[3])
    //     }
    // }

    print_help()

}

main()