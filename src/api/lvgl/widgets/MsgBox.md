`MsgBox` 类是对 LVGL 的 Widget `lv_msgbox_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：addTitle

> 该方法是对 LVGL C API `lv_msgbox_add_title()` 的包装

原型: addTitle (obj:[Obj](../Obj), title:const char *)

参数:

* obj: [Obj](../Obj)

* title: const char *

返回值:
[Obj](../Obj)



### 方法：addHeaderButton

> 该方法是对 LVGL C API `lv_msgbox_add_header_button()` 的包装

原型: addHeaderButton (obj:[Obj](../Obj), icon:const void *)

参数:

* obj: [Obj](../Obj)

* icon: const void *

返回值:
[Obj](../Obj)



### 方法：addText

> 该方法是对 LVGL C API `lv_msgbox_add_text()` 的包装

原型: addText (obj:[Obj](../Obj), text:const char *)

参数:

* obj: [Obj](../Obj)

* text: const char *

返回值:
[Obj](../Obj)



### 方法：addFooterButton

> 该方法是对 LVGL C API `lv_msgbox_add_footer_button()` 的包装

原型: addFooterButton (obj:[Obj](../Obj), text:const char *)

参数:

* obj: [Obj](../Obj)

* text: const char *

返回值:
[Obj](../Obj)



### 方法：addCloseButton

> 该方法是对 LVGL C API `lv_msgbox_add_close_button()` 的包装

原型: addCloseButton (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：close

> 该方法是对 LVGL C API `lv_msgbox_close()` 的包装

原型: close (mbox:[Obj](../Obj))

参数:

* mbox: [Obj](../Obj)

返回值:
undefined



### 方法：closeAsync

> 该方法是对 LVGL C API `lv_msgbox_close_async()` 的包装

原型: closeAsync (mbox:[Obj](../Obj))

参数:

* mbox: [Obj](../Obj)

返回值:
undefined


