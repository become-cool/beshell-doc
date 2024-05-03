`Scale` 类是对 LVGL 的 Widget `lv_scale_t` 的包装

**继承自: Obj**

## 方法:

-----

### setRange (obj:[Obj](../Obj), min:number, max:number)

> 该方法是对 LVGL C API `lv_scale_set_range()` 的包装

参数:

* obj: [Obj](../Obj)

* min: number

* max: number

返回值:
undefined

-----

### setLineNeedleValue (obj:[Obj](../Obj), needle_line:[Obj](../Obj), needle_length:number, value:number)

> 该方法是对 LVGL C API `lv_scale_set_line_needle_value()` 的包装

参数:

* obj: [Obj](../Obj)

* needle_line: [Obj](../Obj)

* needle_length: number

* value: number

返回值:
undefined

-----

### setImageNeedleValue (obj:[Obj](../Obj), needle_img:[Obj](../Obj), value:number)

> 该方法是对 LVGL C API `lv_scale_set_image_needle_value()` 的包装

参数:

* obj: [Obj](../Obj)

* needle_img: [Obj](../Obj)

* value: number

返回值:
undefined

-----

### addSection (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_scale_add_section()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
lv_scale_section_t *

-----

### sectionSetRange (section:lv_scale_section_t *, minor_range:number, major_range:number)

> 该方法是对 LVGL C API `lv_scale_section_set_range()` 的包装

参数:

* section: lv_scale_section_t *

* minor_range: number

* major_range: number

返回值:
undefined

-----

### sectionSetStyle (section:lv_scale_section_t *, part:number, section_part_style:[Style](../../style#lv_style_t))

> 该方法是对 LVGL C API `lv_scale_section_set_style()` 的包装

参数:

* section: lv_scale_section_t *

* part: number

* section_part_style: [Style](../../style#lv_style_t)

返回值:
undefined


