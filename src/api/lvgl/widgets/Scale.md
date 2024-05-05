`Scale` 类是对 LVGL 的 Widget `lv_scale_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setRange

> 该方法是对 LVGL C API `lv_scale_set_range()` 的包装

原型: setRange (obj:[Obj](../Obj), min:number, max:number)

参数:

* obj: [Obj](../Obj)

* min: number

* max: number

返回值:
undefined



### 方法：setLineNeedleValue

> 该方法是对 LVGL C API `lv_scale_set_line_needle_value()` 的包装

原型: setLineNeedleValue (obj:[Obj](../Obj), needle_line:[Obj](../Obj), needle_length:number, value:number)

参数:

* obj: [Obj](../Obj)

* needle_line: [Obj](../Obj)

* needle_length: number

* value: number

返回值:
undefined



### 方法：setImageNeedleValue

> 该方法是对 LVGL C API `lv_scale_set_image_needle_value()` 的包装

原型: setImageNeedleValue (obj:[Obj](../Obj), needle_img:[Obj](../Obj), value:number)

参数:

* obj: [Obj](../Obj)

* needle_img: [Obj](../Obj)

* value: number

返回值:
undefined



### 方法：addSection

> 该方法是对 LVGL C API `lv_scale_add_section()` 的包装

原型: addSection (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
lv_scale_section_t *



### 方法：sectionSetRange

> 该方法是对 LVGL C API `lv_scale_section_set_range()` 的包装

原型: sectionSetRange (section:lv_scale_section_t *, minor_range:number, major_range:number)

参数:

* section: lv_scale_section_t *

* minor_range: number

* major_range: number

返回值:
undefined



### 方法：sectionSetStyle

> 该方法是对 LVGL C API `lv_scale_section_set_style()` 的包装

原型: sectionSetStyle (section:lv_scale_section_t *, part:number, section_part_style:[Style](../../style#lv_style_t))

参数:

* section: lv_scale_section_t *

* part: number

* section_part_style: [Style](../../style#lv_style_t)

返回值:
undefined


