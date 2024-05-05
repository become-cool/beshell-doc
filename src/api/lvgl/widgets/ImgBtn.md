`ImgBtn` 类是对 LVGL 的 Widget `lv_imagebutton_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setSrc

> 该方法是对 LVGL C API `lv_imagebutton_set_src()` 的包装

原型: setSrc (imagebutton:[Obj](../Obj), state:string, src_left:const void *, src_mid:const void *, src_right:const void *)

参数:

* imagebutton: [Obj](../Obj)

* state: [lv_imagebutton_state_t](../const/#lv_imagebutton_state_t)

* src_left: const void *

* src_mid: const void *

* src_right: const void *

返回值:
undefined



### 方法：getSrcLeft

> 该方法是对 LVGL C API `lv_imagebutton_get_src_left()` 的包装

原型: getSrcLeft (imagebutton:[Obj](../Obj), state:string)

参数:

* imagebutton: [Obj](../Obj)

* state: [lv_imagebutton_state_t](../const/#lv_imagebutton_state_t)

返回值:
const void *



### 方法：getSrcMiddle

> 该方法是对 LVGL C API `lv_imagebutton_get_src_middle()` 的包装

原型: getSrcMiddle (imagebutton:[Obj](../Obj), state:string)

参数:

* imagebutton: [Obj](../Obj)

* state: [lv_imagebutton_state_t](../const/#lv_imagebutton_state_t)

返回值:
const void *



### 方法：getSrcRight

> 该方法是对 LVGL C API `lv_imagebutton_get_src_right()` 的包装

原型: getSrcRight (imagebutton:[Obj](../Obj), state:string)

参数:

* imagebutton: [Obj](../Obj)

* state: [lv_imagebutton_state_t](../const/#lv_imagebutton_state_t)

返回值:
const void *


