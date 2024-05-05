`Dropdown` 类是对 LVGL 的 Widget `lv_dropdown_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：bindValue

> 该方法是对 LVGL C API `lv_dropdown_bind_value()` 的包装

原型: bindValue (obj:[Obj](../Obj), subject:lv_subject_t *)

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

返回值:
lv_observer_t *



### 方法：addOption

> 该方法是对 LVGL C API `lv_dropdown_add_option()` 的包装

原型: addOption (obj:[Obj](../Obj), option:const char *, pos:number)

参数:

* obj: [Obj](../Obj)

* option: const char *

* pos: number

返回值:
undefined



### 方法：clearOptions

> 该方法是对 LVGL C API `lv_dropdown_clear_options()` 的包装

原型: clearOptions (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
undefined



### 方法：getSelectedStr

> 该方法是对 LVGL C API `lv_dropdown_get_selected_str()` 的包装

原型: getSelectedStr (obj:const lv_obj_t *, buf:char *, buf_size:number)

参数:

* obj: const lv_obj_t *

* buf: char *

* buf_size: number

返回值:
undefined



### 方法：getOptionIndex

> 该方法是对 LVGL C API `lv_dropdown_get_option_index()` 的包装

原型: getOptionIndex (obj:[Obj](../Obj), option:const char *)

参数:

* obj: [Obj](../Obj)

* option: const char *

返回值:
number



### 方法：open

> 该方法是对 LVGL C API `lv_dropdown_open()` 的包装

原型: open (dropdown_obj:[Obj](../Obj))

参数:

* dropdown_obj: [Obj](../Obj)

返回值:
undefined



### 方法：close

> 该方法是对 LVGL C API `lv_dropdown_close()` 的包装

原型: close (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
undefined



### 方法：isOpen

> 该方法是对 LVGL C API `lv_dropdown_is_open()` 的包装

原型: isOpen (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
bool


