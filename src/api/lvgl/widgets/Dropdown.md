`Dropdown` 类是对 LVGL 的 Widget `lv_dropdown_t` 的包装

**继承自: Obj**

## 方法:

-----

### bindValue (obj:[Obj](../Obj), subject:lv_subject_t *)

> 该方法是对 LVGL C API `lv_dropdown_bind_value()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

返回值:
lv_observer_t *

-----

### addOption (obj:[Obj](../Obj), option:const char *, pos:number)

> 该方法是对 LVGL C API `lv_dropdown_add_option()` 的包装

参数:

* obj: [Obj](../Obj)

* option: const char *

* pos: number

返回值:
undefined

-----

### clearOptions (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_dropdown_clear_options()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### getSelectedStr (obj:const lv_obj_t *, buf:char *, buf_size:number)

> 该方法是对 LVGL C API `lv_dropdown_get_selected_str()` 的包装

参数:

* obj: const lv_obj_t *

* buf: char *

* buf_size: number

返回值:
undefined

-----

### getOptionIndex (obj:[Obj](../Obj), option:const char *)

> 该方法是对 LVGL C API `lv_dropdown_get_option_index()` 的包装

参数:

* obj: [Obj](../Obj)

* option: const char *

返回值:
number

-----

### open (dropdown_obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_dropdown_open()` 的包装

参数:

* dropdown_obj: [Obj](../Obj)

返回值:
undefined

-----

### close (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_dropdown_close()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### isOpen (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_dropdown_is_open()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
bool


