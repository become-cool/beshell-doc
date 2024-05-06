const config = require("./config.js")
const fs = require("fs")

const outputDir = config.path_output + '/api/lvgl'

const LibConst = require(config.path_lv_generator+"/consts.js")
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



function print_help() {
    console.log("usage:")
    console.log("node gen-lvgl-docs.js const>")
    console.log("node gen-lvgl-docs.js style>")
    console.log("node gen-lvgl-docs.js event>")
}


function generateConst() {
    let md = ''

    console.log(LibConst)

    for(let typename in LibConst) {

        let consDef = LibConst[typename]

        md+= `<h3 id="${consDef.type}"></h3>\r\n\r\n-----\r\n\r\n`

        md+= `### 常量类型 ${consDef.type}\r\n\r\n`
        md+= `BeShell 将 LVGL C API 中的常量类型 \`${consDef.type}\` 映射为 JS 字符串，在访问 JavaScript lvgl api 时，应使用对应的字符串替代 LVGL C 常量。\r\n\r\n`
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


function generateStyle() {

    let md = ''

    for(let style of StyleProps) {
        if(!style.name) {
            continue
        }

        let name = style.name.toLowerCase().replace(/_/g, "-")

        md+= `### **${name}** (${style.style_type})\r\n`
        md+= ` ${style.dsc}\r\n\r\n`
    }

    let tpl = fs.readFileSync(__dirname+'/tpl/lvgl-style.md').toString()
    md = tpl.replace('${ALL STYLES}', md)

    fs.writeFileSync(outputDir+"/styles.md", md)
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
    //     await generateStruct()
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