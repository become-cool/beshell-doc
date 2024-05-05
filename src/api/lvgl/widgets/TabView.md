`TabView` 类是对 LVGL 的 Widget `lv_tabview_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：addTab

> 该方法是对 LVGL C API `lv_tabview_add_tab()` 的包装

原型: addTab (obj:[Obj](../Obj), name:const char *)

参数:

* obj: [Obj](../Obj)

* name: const char *

返回值:
[Obj](../Obj)



### 方法：renameTab

> 该方法是对 LVGL C API `lv_tabview_rename_tab()` 的包装

原型: renameTab (obj:[Obj](../Obj), idx:number, new_name:const char *)

参数:

* obj: [Obj](../Obj)

* idx: number

* new_name: const char *

返回值:
undefined



### 方法：setActive

> 该方法是对 LVGL C API `lv_tabview_set_active()` 的包装

原型: setActive (obj:[Obj](../Obj), idx:number, anim_en:string)

参数:

* obj: [Obj](../Obj)

* idx: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined


