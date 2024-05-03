`Span` 类是对 LVGL 的 Widget `lv_span_t` 的包装

**继承自: Obj**

## 方法:

-----

### newSpan (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_spangroup_new_span()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
lv_span_t *

-----

### deleteSpan (obj:[Obj](../Obj), span:lv_span_t *)

> 该方法是对 LVGL C API `lv_spangroup_delete_span()` 的包装

参数:

* obj: [Obj](../Obj)

* span: lv_span_t *

返回值:
undefined

-----

### getChild (obj:const lv_obj_t *, id:number)

> 该方法是对 LVGL C API `lv_spangroup_get_child()` 的包装

参数:

* obj: const lv_obj_t *

* id: number

返回值:
lv_span_t *

-----

### getExpandWidth (obj:[Obj](../Obj), max_width:number)

> 该方法是对 LVGL C API `lv_spangroup_get_expand_width()` 的包装

参数:

* obj: [Obj](../Obj)

* max_width: number

返回值:
number

-----

### getExpandHeight (obj:[Obj](../Obj), width:number)

> 该方法是对 LVGL C API `lv_spangroup_get_expand_height()` 的包装

参数:

* obj: [Obj](../Obj)

* width: number

返回值:
number

-----

### refrMode (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_spangroup_refr_mode()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined


