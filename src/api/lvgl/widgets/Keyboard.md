`Keyboard` 类是对 LVGL 的 Widget `lv_keyboard_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setMap

> 该方法是对 LVGL C API `lv_keyboard_set_map()` 的包装

原型: setMap (kb:[Obj](../Obj), mode:string, map:string, ctrl_map:const lv_buttonmatrix_ctrl_t*)

参数:

* kb: [Obj](../Obj)

* mode: [lv_keyboard_mode_t](../const/#lv_keyboard_mode_t)

* map: string

* ctrl_map: const lv_buttonmatrix_ctrl_t*

返回值:
undefined



### 方法：defEventCb

> 该方法是对 LVGL C API `lv_keyboard_def_event_cb()` 的包装

原型: defEventCb (e:lv_event_t *)

参数:

* e: lv_event_t *

返回值:
undefined


