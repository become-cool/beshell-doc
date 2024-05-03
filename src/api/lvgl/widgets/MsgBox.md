`MsgBox` 类是对 LVGL 的 Widget `lv_msgbox_t` 的包装

**继承自: Obj**

## 方法:

-----

### addTitle (obj:[Obj](../Obj), title:const char *)

> 该方法是对 LVGL C API `lv_msgbox_add_title()` 的包装

参数:

* obj: [Obj](../Obj)

* title: const char *

返回值:
[Obj](../Obj)

-----

### addHeaderButton (obj:[Obj](../Obj), icon:const void *)

> 该方法是对 LVGL C API `lv_msgbox_add_header_button()` 的包装

参数:

* obj: [Obj](../Obj)

* icon: const void *

返回值:
[Obj](../Obj)

-----

### addText (obj:[Obj](../Obj), text:const char *)

> 该方法是对 LVGL C API `lv_msgbox_add_text()` 的包装

参数:

* obj: [Obj](../Obj)

* text: const char *

返回值:
[Obj](../Obj)

-----

### addFooterButton (obj:[Obj](../Obj), text:const char *)

> 该方法是对 LVGL C API `lv_msgbox_add_footer_button()` 的包装

参数:

* obj: [Obj](../Obj)

* text: const char *

返回值:
[Obj](../Obj)

-----

### addCloseButton (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_msgbox_add_close_button()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
[Obj](../Obj)

-----

### close (mbox:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_msgbox_close()` 的包装

参数:

* mbox: [Obj](../Obj)

返回值:
undefined

-----

### closeAsync (mbox:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_msgbox_close_async()` 的包装

参数:

* mbox: [Obj](../Obj)

返回值:
undefined


