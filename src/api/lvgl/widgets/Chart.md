`Chart` 类是对 LVGL 的 Widget `lv_chart_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setRange

> 该方法是对 LVGL C API `lv_chart_set_range()` 的包装

原型: setRange (obj:[Obj](../Obj), axis:string, min:number, max:number)

参数:

* obj: [Obj](../Obj)

* axis: [lv_chart_axis_t](../const/#lv_chart_axis_t)

* min: number

* max: number

返回值:
undefined



### 方法：setDivLineCount

> 该方法是对 LVGL C API `lv_chart_set_div_line_count()` 的包装

原型: setDivLineCount (obj:[Obj](../Obj), hdiv:number, vdiv:number)

参数:

* obj: [Obj](../Obj)

* hdiv: number

* vdiv: number

返回值:
undefined



### 方法：getXStartPoint

> 该方法是对 LVGL C API `lv_chart_get_x_start_point()` 的包装

原型: getXStartPoint (obj:const lv_obj_t *, ser:lv_chart_series_t *)

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number



### 方法：getPointPosById

> 该方法是对 LVGL C API `lv_chart_get_point_pos_by_id()` 的包装

原型: getPointPosById (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number, p_out:lv_point_t *)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

* p_out: lv_point_t *

返回值:
undefined



### 方法：refresh

> 该方法是对 LVGL C API `lv_chart_refresh()` 的包装

原型: refresh (obj:[Obj](../Obj))

参数:

* obj: [Obj](../Obj)

返回值:
undefined



### 方法：addSeries

> 该方法是对 LVGL C API `lv_chart_add_series()` 的包装

原型: addSeries (obj:[Obj](../Obj), color:number, axis:string)

参数:

* obj: [Obj](../Obj)

* color: number

* axis: [lv_chart_axis_t](../const/#lv_chart_axis_t)

返回值:
lv_chart_series_t *



### 方法：removeSeries

> 该方法是对 LVGL C API `lv_chart_remove_series()` 的包装

原型: removeSeries (obj:[Obj](../Obj), series:lv_chart_series_t *)

参数:

* obj: [Obj](../Obj)

* series: lv_chart_series_t *

返回值:
undefined



### 方法：hideSeries

> 该方法是对 LVGL C API `lv_chart_hide_series()` 的包装

原型: hideSeries (chart:[Obj](../Obj), series:lv_chart_series_t *, hide:bool)

参数:

* chart: [Obj](../Obj)

* series: lv_chart_series_t *

* hide: bool

返回值:
undefined



### 方法：setSeriesColor

> 该方法是对 LVGL C API `lv_chart_set_series_color()` 的包装

原型: setSeriesColor (chart:[Obj](../Obj), series:lv_chart_series_t *, color:number)

参数:

* chart: [Obj](../Obj)

* series: lv_chart_series_t *

* color: number

返回值:
undefined



### 方法：setXStartPoint

> 该方法是对 LVGL C API `lv_chart_set_x_start_point()` 的包装

原型: setXStartPoint (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

返回值:
undefined



### 方法：getSeriesNext

> 该方法是对 LVGL C API `lv_chart_get_series_next()` 的包装

原型: getSeriesNext (chart:const lv_obj_t *, ser:const lv_chart_series_t *)

参数:

* chart: const lv_obj_t *

* ser: const lv_chart_series_t *

返回值:
lv_chart_series_t *



### 方法：addCursor

> 该方法是对 LVGL C API `lv_chart_add_cursor()` 的包装

原型: addCursor (obj:[Obj](../Obj), color:number, dir:string)

参数:

* obj: [Obj](../Obj)

* color: number

* dir: [lv_dir_t](../const/#lv_dir_t)

返回值:
lv_chart_cursor_t  *



### 方法：setCursorPos

> 该方法是对 LVGL C API `lv_chart_set_cursor_pos()` 的包装

原型: setCursorPos (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *, pos:lv_point_t *)

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

* pos: lv_point_t *

返回值:
undefined



### 方法：setCursorPoint

> 该方法是对 LVGL C API `lv_chart_set_cursor_point()` 的包装

原型: setCursorPoint (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *, ser:lv_chart_series_t *, point_id:number)

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

* ser: lv_chart_series_t *

* point_id: number

返回值:
undefined



### 方法：getCursorPoint

> 该方法是对 LVGL C API `lv_chart_get_cursor_point()` 的包装

原型: getCursorPoint (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *)

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

返回值:
lv_point_t



### 方法：setAllValue

> 该方法是对 LVGL C API `lv_chart_set_all_value()` 的包装

原型: setAllValue (obj:[Obj](../Obj), ser:lv_chart_series_t *, value:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* value: number

返回值:
undefined



### 方法：setNextValue

> 该方法是对 LVGL C API `lv_chart_set_next_value()` 的包装

原型: setNextValue (obj:[Obj](../Obj), ser:lv_chart_series_t *, value:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* value: number

返回值:
undefined



### 方法：setValueById

> 该方法是对 LVGL C API `lv_chart_set_value_by_id()` 的包装

原型: setValueById (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number, value:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

* value: number

返回值:
undefined



### 方法：setExtYArray

> 该方法是对 LVGL C API `lv_chart_set_ext_y_array()` 的包装

原型: setExtYArray (obj:[Obj](../Obj), ser:lv_chart_series_t *, array:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* array: number

返回值:
undefined



### 方法：setExtXArray

> 该方法是对 LVGL C API `lv_chart_set_ext_x_array()` 的包装

原型: setExtXArray (obj:[Obj](../Obj), ser:lv_chart_series_t *, array:number)

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* array: number

返回值:
undefined



### 方法：getYArray

> 该方法是对 LVGL C API `lv_chart_get_y_array()` 的包装

原型: getYArray (obj:const lv_obj_t *, ser:lv_chart_series_t *)

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number



### 方法：getXArray

> 该方法是对 LVGL C API `lv_chart_get_x_array()` 的包装

原型: getXArray (obj:const lv_obj_t *, ser:lv_chart_series_t *)

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number


