const {path_beshell, path_output} = require("./config.js")
const {parseModuleSource} = require("./parser.js")
const {generators} = require("./generators.js")
const fs = require("fs")


const cpp_sources = {
    'fs': {
        title: '文件系统' ,
        src:path_beshell+"/src/fs/FS.cpp" ,
        type: 'nmodule'
    } ,
    'gpio': {
        title: 'GPIO' ,
        src:path_beshell+"/src/module/GPIO.cpp" ,
        type: 'nmodule'
    } ,

    'process': {
        title: 'process' ,
        src:path_beshell+"/src/module/Process.cpp" ,
        type: 'nmodule'
    } ,

    'wifi': {
        title: 'WiFi' ,
        src:path_beshell+"/src/module/WiFi.cpp" ,
        type: 'nmodule'
    } ,   

    'mg': {
        title: 'mg' ,
        src:path_beshell+"/src/mg/Mg.cpp" ,
        dist: path_output + '/api/mg/index.md' ,
        type: 'nmodule'
    } ,    
    'mg.Server': {
        title: 'Server' ,
        src:path_beshell+"/src/mg/Server.cpp" ,
        dist: path_output + "/api/mg/Server.md" ,
        type: 'nclass'
    } ,
    'mg.Client': {
        title: 'Client' ,
        src:path_beshell+"/src/mg/Client.cpp" ,
        dist: path_output + "/api/mg/Client.md" ,
        type: 'nclass'
    } ,
    'mg.Response': {
        title: 'Response' ,
        src:path_beshell+"/src/mg/Response.cpp" ,
        dist: path_output + "/api/mg/Response.md" ,
        type: 'nclass'
    } ,
    'mg.HTTPRequest': {
        title: 'HTTPRequest' ,
        src:path_beshell+"/src/mg/HTTPRequest.cpp" ,
        dist: path_output + "/api/mg/HTTPRequest.md" ,
        type: 'nclass'
    } ,

    'serial': {
        title: 'serial' ,
        src:path_beshell+"/src/module/serial/Serial.cpp" ,
        dist: path_output + "/api/serial/index.md" ,
        type: 'nmodule'
    } ,
    'uart': {
        title: 'UART' ,
        src:path_beshell+"/src/module/serial/UART.cpp" ,
        dist: path_output + "/api/serial/UART.md" ,
        type: 'nclass'
    } ,
    'i2c': {
        title: 'I2C' ,
        src:path_beshell+"/src/module/serial/I2C.cpp" ,
        dist: path_output + "/api/serial/I2C.md" ,
        type: 'nclass'
    } ,
    'spi': {
        title: 'SPI' ,
        src:path_beshell+"/src/module/serial/SPI.cpp" ,
        dist: path_output + "/api/serial/SPI.md" ,
        type: 'nclass'
    } ,
}

function scanLvWidgets(doc, tpl) {

    const src = fs.readFileSync(path_beshell+'/src/lv/all-widgets.hpp').toString()
    const regex = /"widget\/([^\.]+)\.hpp"/g;
    let match = null;

    while ((match = regex.exec(src)) !== null) {
        let className = match[1]
        cpp_sources[className] = {
            title: className ,
            src:path_beshell+"/src/lv/widget/"+className+".cpp" ,
            dist: path_output + "/api/lvgl/widgets/"+className+".md" ,
            type: 'nclass'
        }
    }
}
try{
    scanLvWidgets()
    
    cpp_sources["Obj"].src = [
        cpp_sources["Obj"].src ,
        path_beshell+"/src/lv/widget/Obj.style.cpp" ,
    ]
}catch(e){
    console.log(e)
}




async function main() {

    let moduleName = process.argv[2]
    if(!moduleName) {
        console.log("usage:")
        console.log("node gen-api-docs.js <module_name> | all")
        return 
    }

    for(let moduleKey in cpp_sources) {
        if(moduleName!='all' && moduleName!=moduleKey) {
            continue
        }
        let module = cpp_sources[moduleKey]
        let {src, tpl} = module
        try{
            let moduleDoc = await parseModuleSource(src, module)

            if(tpl) {
                tpl = fs.readFileSync(tpl).toString()
            }
            
            if( generators[module.type] ) {
                let md = generators[module.type] (moduleDoc, tpl) ;
    
                let output = module.dist || path_output+"/api/"+moduleKey+'.md'
                fs.writeFileSync(output, md)
                console.log("output to", output)
            } else {
                console.log("no generator for", module.type)
            }

        } catch(e) {
            console.error(e)
        }
    }
}


main()