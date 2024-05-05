`Roller` 类是对 LVGL 的 Widget `lv_roller_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：bindValue

> 该方法是对 LVGL C API `lv_roller_bind_value()` 的包装

原型: bindValue (obj:[Obj](../Obj), subject:lv_subject_t *)

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

返回值:
lv_observer_t *



### 方法：setOptions

> 该方法是对 LVGL C API `lv_roller_set_options()` 的包装

原型: setOptions (obj:[Obj](../Obj), options:const char *, mode:string)

参数:

* obj: [Obj](../Obj)

* options: const char *

* mode: [lv_roller_mode_t](../const/#lv_roller_mode_t)

返回值:
undefined



### 方法：setSelected

> 该方法是对 LVGL C API `lv_roller_set_selected()` 的包装

原型: setSelected (obj:[Obj](../Obj), sel_opt:number, anim:string)

参数:

* obj: [Obj](../Obj)

* sel_opt: number

* anim: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined



### 方法：getSelectedStr

> 该方法是对 LVGL C API `lv_roller_get_selected_str()` 的包装

原型: getSelectedStr (obj:const lv_obj_t *, buf:char *, buf_size:number)

参数:

* obj: const lv_obj_t *

* buf: char *

* buf_size: number

返回值:
undefined


