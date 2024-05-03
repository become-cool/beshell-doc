`TabView` 类是对 LVGL 的 Widget `lv_tabview_t` 的包装

**继承自: Obj**

## 方法:

-----

### addTab (obj:[Obj](../Obj), name:const char *)

> 该方法是对 LVGL C API `lv_tabview_add_tab()` 的包装

参数:

* obj: [Obj](../Obj)

* name: const char *

返回值:
[Obj](../Obj)

-----

### renameTab (obj:[Obj](../Obj), idx:number, new_name:const char *)

> 该方法是对 LVGL C API `lv_tabview_rename_tab()` 的包装

参数:

* obj: [Obj](../Obj)

* idx: number

* new_name: const char *

返回值:
undefined

-----

### setActive (obj:[Obj](../Obj), idx:number, anim_en:string)

> 该方法是对 LVGL C API `lv_tabview_set_active()` 的包装

参数:

* obj: [Obj](../Obj)

* idx: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined


