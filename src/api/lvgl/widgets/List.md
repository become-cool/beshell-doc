`List` 类是对 LVGL 的 Widget `lv_list_t` 的包装

**继承自: Obj**

## 方法:

-----

### addText (list:[Obj](../Obj), txt:const char *)

> 该方法是对 LVGL C API `lv_list_add_text()` 的包装

参数:

* list: [Obj](../Obj)

* txt: const char *

返回值:
[Obj](../Obj)

-----

### addButton (list:[Obj](../Obj), icon:const void *, txt:const char *)

> 该方法是对 LVGL C API `lv_list_add_button()` 的包装

参数:

* list: [Obj](../Obj)

* icon: const void *

* txt: const char *

返回值:
[Obj](../Obj)

-----

### getButtonText (list:[Obj](../Obj), btn:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_list_get_button_text()` 的包装

参数:

* list: [Obj](../Obj)

* btn: [Obj](../Obj)

返回值:
const char *

-----

### setButtonText (list:[Obj](../Obj), btn:[Obj](../Obj), txt:const char *)

> 该方法是对 LVGL C API `lv_list_set_button_text()` 的包装

参数:

* list: [Obj](../Obj)

* btn: [Obj](../Obj)

* txt: const char *

返回值:
undefined


