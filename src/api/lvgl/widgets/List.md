`List` 类是对 LVGL 的 Widget `lv_list_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：addText

> 该方法是对 LVGL C API `lv_list_add_text()` 的包装

原型: addText (list:[Obj](../Obj), txt:const char *)

参数:

* list: [Obj](../Obj)

* txt: const char *

返回值:
[Obj](../Obj)



### 方法：addButton

> 该方法是对 LVGL C API `lv_list_add_button()` 的包装

原型: addButton (list:[Obj](../Obj), icon:const void *, txt:const char *)

参数:

* list: [Obj](../Obj)

* icon: const void *

* txt: const char *

返回值:
[Obj](../Obj)



### 方法：getButtonText

> 该方法是对 LVGL C API `lv_list_get_button_text()` 的包装

原型: getButtonText (list:[Obj](../Obj), btn:[Obj](../Obj))

参数:

* list: [Obj](../Obj)

* btn: [Obj](../Obj)

返回值:
const char *



### 方法：setButtonText

> 该方法是对 LVGL C API `lv_list_set_button_text()` 的包装

原型: setButtonText (list:[Obj](../Obj), btn:[Obj](../Obj), txt:const char *)

参数:

* list: [Obj](../Obj)

* btn: [Obj](../Obj)

* txt: const char *

返回值:
undefined


