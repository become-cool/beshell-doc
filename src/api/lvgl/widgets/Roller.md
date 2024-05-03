`Roller` 类是对 LVGL 的 Widget `lv_roller_t` 的包装

**继承自: Obj**

## 方法:

-----

### bindValue (obj:[Obj](../Obj), subject:lv_subject_t *)

> 该方法是对 LVGL C API `lv_roller_bind_value()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

返回值:
lv_observer_t *

-----

### setOptions (obj:[Obj](../Obj), options:const char *, mode:string)

> 该方法是对 LVGL C API `lv_roller_set_options()` 的包装

参数:

* obj: [Obj](../Obj)

* options: const char *

* mode: [lv_roller_mode_t](../const/#lv_roller_mode_t)

返回值:
undefined

-----

### setSelected (obj:[Obj](../Obj), sel_opt:number, anim:string)

> 该方法是对 LVGL C API `lv_roller_set_selected()` 的包装

参数:

* obj: [Obj](../Obj)

* sel_opt: number

* anim: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### getSelectedStr (obj:const lv_obj_t *, buf:char *, buf_size:number)

> 该方法是对 LVGL C API `lv_roller_get_selected_str()` 的包装

参数:

* obj: const lv_obj_t *

* buf: char *

* buf_size: number

返回值:
undefined


