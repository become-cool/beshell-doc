const javadoc = require("javadoc")

async function parseModuleSource(path, moduleConfig) {

    // let apiDesc = []
    let moduleDoc = {
        name: moduleConfig.title ,
        desc: [] ,
        funcs: [] ,
        props: [] ,
        global : null 
    }

    if( !Array.isArray(path) ) {
        path = [path]
    }

    try{
        for(let p of path) {
            
            var json = await javadoc.generate({
                include: [p],
                output: "./output.json",
                exclude: ["**/node_modules/**"],
                format: "json",
            })

            for(let doc of json.success[0]) {

                if(doc._) {
                    for(let i=0; i<(doc._).length; i++) {
                        doc._[i] = doc._[i].replace(/\\@/g, "@")
                    }
                }
                
                if(doc["@function"] || doc["@method"]) {
                    moduleDoc.funcs.push(doc)
                    continue
                }

                if(doc["@property"]) {
                    moduleDoc.props.push(doc)
                    continue
                }

                if(doc["@module"] || doc["@class"]) {
                    if(!!doc["@global"] && doc["@global"].length>0) {
                        moduleDoc.global = doc["@global"][0].trim()
                    }
                    moduleDoc.desc.push(... doc._||[])
                    continue
                }
            }
        }

        return moduleDoc
    }
    catch(e) {
        console.error(e)
    }
}


exports.parseModuleSource = parseModuleSource