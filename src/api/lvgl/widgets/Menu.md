`Menu` 类是对 LVGL 的 Widget `lv_menu_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：pageCreate

> 该方法是对 LVGL C API `lv_menu_page_create()` 的包装

原型: pageCreate (parent:[Obj](../Obj), title:char const * const)

参数:

* parent: [Obj](../Obj)

* title: char const * const

返回值:
[Obj](../Obj)



### 方法：contCreate

> 该方法是对 LVGL C API `lv_menu_cont_create()` 的包装

原型: contCreate (parent:[Obj](../Obj))

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：sectionCreate

> 该方法是对 LVGL C API `lv_menu_section_create()` 的包装

原型: sectionCreate (parent:[Obj](../Obj))

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：separatorCreate

> 该方法是对 LVGL C API `lv_menu_separator_create()` 的包装

原型: separatorCreate (parent:[Obj](../Obj))

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：setLoadPageEvent

> 该方法是对 LVGL C API `lv_menu_set_load_page_event()` 的包装

原型: setLoadPageEvent (menu:[Obj](../Obj), obj:[Obj](../Obj), page:[Obj](../Obj))

参数:

* menu: [Obj](../Obj)

* obj: [Obj](../Obj)

* page: [Obj](../Obj)

返回值:
undefined



### 方法：backButtonIsRoot

> 该方法是对 LVGL C API `lv_menu_back_button_is_root()` 的包装

原型: backButtonIsRoot (menu:[Obj](../Obj), obj:[Obj](../Obj))

参数:

* menu: [Obj](../Obj)

* obj: [Obj](../Obj)

返回值:
bool



### 方法：clearHistory

> 该方法是对 LVGL C API `lv_menu_clear_history()` 的包装

原型: clearHistory (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
undefined


