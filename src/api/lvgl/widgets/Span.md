`Span` 类是对 LVGL 的 Widget `lv_span_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：newSpan

> 该方法是对 LVGL C API `lv_spangroup_new_span()` 的包装

原型: newSpan (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
lv_span_t *



### 方法：deleteSpan

> 该方法是对 LVGL C API `lv_spangroup_delete_span()` 的包装

原型: deleteSpan (obj:[Obj](../Obj), span:lv_span_t *)

参数:

* obj: [Obj](../Obj)

* span: lv_span_t *

返回值:
undefined



### 方法：getChild

> 该方法是对 LVGL C API `lv_spangroup_get_child()` 的包装

原型: getChild (obj:const lv_obj_t *, id:number)

参数:

* obj: const lv_obj_t *

* id: number

返回值:
lv_span_t *



### 方法：getExpandWidth

> 该方法是对 LVGL C API `lv_spangroup_get_expand_width()` 的包装

原型: getExpandWidth (obj:[Obj](../Obj), max_width:number)

参数:

* obj: [Obj](../Obj)

* max_width: number

返回值:
number



### 方法：getExpandHeight

> 该方法是对 LVGL C API `lv_spangroup_get_expand_height()` 的包装

原型: getExpandHeight (obj:[Obj](../Obj), width:number)

参数:

* obj: [Obj](../Obj)

* width: number

返回值:
number



### 方法：refrMode

> 该方法是对 LVGL C API `lv_spangroup_refr_mode()` 的包装

原型: refrMode (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
undefined


