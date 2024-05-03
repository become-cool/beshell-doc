`Arc` 类是对 LVGL 的 Widget `lv_arc_t` 的包装

**继承自: Obj**

## 方法:

-----

### bindValue (obj:[Obj](../Obj), subject:lv_subject_t *)

> 该方法是对 LVGL C API `lv_arc_bind_value()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

返回值:
lv_observer_t *

-----

### setAngles (obj:[Obj](../Obj), start:lv_value_precise_t, end:lv_value_precise_t)

> 该方法是对 LVGL C API `lv_arc_set_angles()` 的包装

参数:

* obj: [Obj](../Obj)

* start: lv_value_precise_t

* end: lv_value_precise_t

返回值:
undefined

-----

### setBgAngles (obj:[Obj](../Obj), start:lv_value_precise_t, end:lv_value_precise_t)

> 该方法是对 LVGL C API `lv_arc_set_bg_angles()` 的包装

参数:

* obj: [Obj](../Obj)

* start: lv_value_precise_t

* end: lv_value_precise_t

返回值:
undefined

-----

### setRange (obj:[Obj](../Obj), min:number, max:number)

> 该方法是对 LVGL C API `lv_arc_set_range()` 的包装

参数:

* obj: [Obj](../Obj)

* min: number

* max: number

返回值:
undefined

-----

### alignObjToAngle (obj:const lv_obj_t *, obj_to_align:[Obj](../Obj), r_offset:number)

> 该方法是对 LVGL C API `lv_arc_align_obj_to_angle()` 的包装

参数:

* obj: const lv_obj_t *

* obj_to_align: [Obj](../Obj)

* r_offset: number

返回值:
undefined

-----

### rotateObjToAngle (obj:const lv_obj_t *, obj_to_rotate:[Obj](../Obj), r_offset:number)

> 该方法是对 LVGL C API `lv_arc_rotate_obj_to_angle()` 的包装

参数:

* obj: const lv_obj_t *

* obj_to_rotate: [Obj](../Obj)

* r_offset: number

返回值:
undefined


