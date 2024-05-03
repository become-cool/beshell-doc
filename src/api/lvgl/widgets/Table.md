`Table` 类是对 LVGL 的 Widget `lv_table_t` 的包装

**继承自: Obj**

## 方法:

-----

### setCellValue (obj:[Obj](../Obj), row:number, col:number, txt:const char *)

> 该方法是对 LVGL C API `lv_table_set_cell_value()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* txt: const char *

返回值:
undefined

-----

### setCellValueFmt (obj:[Obj](../Obj), row:number, col:number, fmt:const char *, ...:)

> 该方法是对 LVGL C API `lv_table_set_cell_value_fmt()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* fmt: const char *

* ...: 

返回值:
undefined

-----

### setColumnWidth (obj:[Obj](../Obj), col_id:number, w:number)

> 该方法是对 LVGL C API `lv_table_set_column_width()` 的包装

参数:

* obj: [Obj](../Obj)

* col_id: number

* w: number

返回值:
undefined

-----

### addCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

> 该方法是对 LVGL C API `lv_table_add_cell_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
undefined

-----

### clearCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

> 该方法是对 LVGL C API `lv_table_clear_cell_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
undefined

-----

### setCellUserData (obj:[Obj](../Obj), row:number, col:number, user_data:undefined)

> 该方法是对 LVGL C API `lv_table_set_cell_user_data()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* user_data: undefined

返回值:
undefined

-----

### getCellValue (obj:[Obj](../Obj), row:number, col:number)

> 该方法是对 LVGL C API `lv_table_get_cell_value()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
const char *

-----

### getColumnWidth (obj:[Obj](../Obj), col:number)

> 该方法是对 LVGL C API `lv_table_get_column_width()` 的包装

参数:

* obj: [Obj](../Obj)

* col: number

返回值:
number

-----

### hasCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

> 该方法是对 LVGL C API `lv_table_has_cell_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
bool

-----

### getSelectedCell (obj:[Obj](../Obj), row:number, col:number)

> 该方法是对 LVGL C API `lv_table_get_selected_cell()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
undefined

-----

### getCellUserData (obj:[Obj](../Obj), row:number, col:number)

> 该方法是对 LVGL C API `lv_table_get_cell_user_data()` 的包装

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
undefined


