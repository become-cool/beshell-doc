`Table` 类是对 LVGL 的 Widget `lv_table_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setCellValue

> 该方法是对 LVGL C API `lv_table_set_cell_value()` 的包装

原型: setCellValue (obj:[Obj](../Obj), row:number, col:number, txt:const char *)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* txt: const char *

返回值:
undefined



### 方法：setCellValueFmt

> 该方法是对 LVGL C API `lv_table_set_cell_value_fmt()` 的包装

原型: setCellValueFmt (obj:[Obj](../Obj), row:number, col:number, fmt:const char *, ...:)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* fmt: const char *

* ...: 

返回值:
undefined



### 方法：setColumnWidth

> 该方法是对 LVGL C API `lv_table_set_column_width()` 的包装

原型: setColumnWidth (obj:[Obj](../Obj), col_id:number, w:number)

参数:

* obj: [Obj](../Obj)

* col_id: number

* w: number

返回值:
undefined



### 方法：addCellCtrl

> 该方法是对 LVGL C API `lv_table_add_cell_ctrl()` 的包装

原型: addCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
undefined



### 方法：clearCellCtrl

> 该方法是对 LVGL C API `lv_table_clear_cell_ctrl()` 的包装

原型: clearCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
undefined



### 方法：setCellUserData

> 该方法是对 LVGL C API `lv_table_set_cell_user_data()` 的包装

原型: setCellUserData (obj:[Obj](../Obj), row:number, col:number, user_data:undefined)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* user_data: undefined

返回值:
undefined



### 方法：getCellValue

> 该方法是对 LVGL C API `lv_table_get_cell_value()` 的包装

原型: getCellValue (obj:[Obj](../Obj), row:number, col:number)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
const char *



### 方法：getColumnWidth

> 该方法是对 LVGL C API `lv_table_get_column_width()` 的包装

原型: getColumnWidth (obj:[Obj](../Obj), col:number)

参数:

* obj: [Obj](../Obj)

* col: number

返回值:
number



### 方法：hasCellCtrl

> 该方法是对 LVGL C API `lv_table_has_cell_ctrl()` 的包装

原型: hasCellCtrl (obj:[Obj](../Obj), row:number, col:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

* ctrl: [lv_table_cell_ctrl_t](../const/#lv_table_cell_ctrl_t)

返回值:
bool



### 方法：getSelectedCell

> 该方法是对 LVGL C API `lv_table_get_selected_cell()` 的包装

原型: getSelectedCell (obj:[Obj](../Obj), row:number, col:number)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
undefined



### 方法：getCellUserData

> 该方法是对 LVGL C API `lv_table_get_cell_user_data()` 的包装

原型: getCellUserData (obj:[Obj](../Obj), row:number, col:number)

参数:

* obj: [Obj](../Obj)

* row: number

* col: number

返回值:
undefined


