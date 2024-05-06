
# 样式

调用 Obj.style() 和 Obj.setStyle() 方法来获取和设置样式。

## 示例

```javascript
import * as lv from 'lv'

let obj = lv.Obj( lv.screen() )

// 对象类型参数，设置多个样式
obj.setStyle({
    "border-width": 1 ,                 // 边线宽
    "border-color": lv.color(255,0,0) , // 边线颜色
    "border-opa": 100255 ,              // 边线不透明度
})
// 设置单个样式
obj.setStyle("width","100%")

console.log( "height: ", obj.style("height") )
```


## 样式属性

${ALL STYLES}
