`TileView` 类是对 LVGL 的 Widget `lv_tileview_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：addTile

> 该方法是对 LVGL C API `lv_tileview_add_tile()` 的包装

原型: addTile (tv:[Obj](../Obj), col_id:number, row_id:number, dir:string)

参数:

* tv: [Obj](../Obj)

* col_id: number

* row_id: number

* dir: [lv_dir_t](../const/#lv_dir_t)

返回值:
[Obj](../Obj)



### 方法：setTile

> 该方法是对 LVGL C API `lv_tileview_set_tile()` 的包装

原型: setTile (tv:[Obj](../Obj), tile_obj:[Obj](../Obj), anim_en:string)

参数:

* tv: [Obj](../Obj)

* tile_obj: [Obj](../Obj)

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined



### 方法：setTileByIndex

> 该方法是对 LVGL C API `lv_tileview_set_tile_by_index()` 的包装

原型: setTileByIndex (tv:[Obj](../Obj), col_id:number, row_id:number, anim_en:string)

参数:

* tv: [Obj](../Obj)

* col_id: number

* row_id: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined


