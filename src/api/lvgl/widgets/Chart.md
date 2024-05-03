`Chart` 类是对 LVGL 的 Widget `lv_chart_t` 的包装

**继承自: Obj**

## 方法:

-----

### setRange (obj:[Obj](../Obj), axis:string, min:number, max:number)

> 该方法是对 LVGL C API `lv_chart_set_range()` 的包装

参数:

* obj: [Obj](../Obj)

* axis: [lv_chart_axis_t](../const/#lv_chart_axis_t)

* min: number

* max: number

返回值:
undefined

-----

### setDivLineCount (obj:[Obj](../Obj), hdiv:number, vdiv:number)

> 该方法是对 LVGL C API `lv_chart_set_div_line_count()` 的包装

参数:

* obj: [Obj](../Obj)

* hdiv: number

* vdiv: number

返回值:
undefined

-----

### getXStartPoint (obj:const lv_obj_t *, ser:lv_chart_series_t *)

> 该方法是对 LVGL C API `lv_chart_get_x_start_point()` 的包装

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number

-----

### getPointPosById (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number, p_out:lv_point_t *)

> 该方法是对 LVGL C API `lv_chart_get_point_pos_by_id()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

* p_out: lv_point_t *

返回值:
undefined

-----

### refresh (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_chart_refresh()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### addSeries (obj:[Obj](../Obj), color:number, axis:string)

> 该方法是对 LVGL C API `lv_chart_add_series()` 的包装

参数:

* obj: [Obj](../Obj)

* color: number

* axis: [lv_chart_axis_t](../const/#lv_chart_axis_t)

返回值:
lv_chart_series_t *

-----

### removeSeries (obj:[Obj](../Obj), series:lv_chart_series_t *)

> 该方法是对 LVGL C API `lv_chart_remove_series()` 的包装

参数:

* obj: [Obj](../Obj)

* series: lv_chart_series_t *

返回值:
undefined

-----

### hideSeries (chart:[Obj](../Obj), series:lv_chart_series_t *, hide:bool)

> 该方法是对 LVGL C API `lv_chart_hide_series()` 的包装

参数:

* chart: [Obj](../Obj)

* series: lv_chart_series_t *

* hide: bool

返回值:
undefined

-----

### setSeriesColor (chart:[Obj](../Obj), series:lv_chart_series_t *, color:number)

> 该方法是对 LVGL C API `lv_chart_set_series_color()` 的包装

参数:

* chart: [Obj](../Obj)

* series: lv_chart_series_t *

* color: number

返回值:
undefined

-----

### setXStartPoint (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number)

> 该方法是对 LVGL C API `lv_chart_set_x_start_point()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

返回值:
undefined

-----

### getSeriesNext (chart:const lv_obj_t *, ser:const lv_chart_series_t *)

> 该方法是对 LVGL C API `lv_chart_get_series_next()` 的包装

参数:

* chart: const lv_obj_t *

* ser: const lv_chart_series_t *

返回值:
lv_chart_series_t *

-----

### addCursor (obj:[Obj](../Obj), color:number, dir:string)

> 该方法是对 LVGL C API `lv_chart_add_cursor()` 的包装

参数:

* obj: [Obj](../Obj)

* color: number

* dir: [lv_dir_t](../const/#lv_dir_t)

返回值:
lv_chart_cursor_t  *

-----

### setCursorPos (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *, pos:lv_point_t *)

> 该方法是对 LVGL C API `lv_chart_set_cursor_pos()` 的包装

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

* pos: lv_point_t *

返回值:
undefined

-----

### setCursorPoint (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *, ser:lv_chart_series_t *, point_id:number)

> 该方法是对 LVGL C API `lv_chart_set_cursor_point()` 的包装

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

* ser: lv_chart_series_t *

* point_id: number

返回值:
undefined

-----

### getCursorPoint (chart:[Obj](../Obj), cursor:lv_chart_cursor_t *)

> 该方法是对 LVGL C API `lv_chart_get_cursor_point()` 的包装

参数:

* chart: [Obj](../Obj)

* cursor: lv_chart_cursor_t *

返回值:
lv_point_t

-----

### setAllValue (obj:[Obj](../Obj), ser:lv_chart_series_t *, value:number)

> 该方法是对 LVGL C API `lv_chart_set_all_value()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* value: number

返回值:
undefined

-----

### setNextValue (obj:[Obj](../Obj), ser:lv_chart_series_t *, value:number)

> 该方法是对 LVGL C API `lv_chart_set_next_value()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* value: number

返回值:
undefined

-----

### setValueById (obj:[Obj](../Obj), ser:lv_chart_series_t *, id:number, value:number)

> 该方法是对 LVGL C API `lv_chart_set_value_by_id()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* id: number

* value: number

返回值:
undefined

-----

### setExtYArray (obj:[Obj](../Obj), ser:lv_chart_series_t *, array:number)

> 该方法是对 LVGL C API `lv_chart_set_ext_y_array()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* array: number

返回值:
undefined

-----

### setExtXArray (obj:[Obj](../Obj), ser:lv_chart_series_t *, array:number)

> 该方法是对 LVGL C API `lv_chart_set_ext_x_array()` 的包装

参数:

* obj: [Obj](../Obj)

* ser: lv_chart_series_t *

* array: number

返回值:
undefined

-----

### getYArray (obj:const lv_obj_t *, ser:lv_chart_series_t *)

> 该方法是对 LVGL C API `lv_chart_get_y_array()` 的包装

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number

-----

### getXArray (obj:const lv_obj_t *, ser:lv_chart_series_t *)

> 该方法是对 LVGL C API `lv_chart_get_x_array()` 的包装

参数:

* obj: const lv_obj_t *

* ser: lv_chart_series_t *

返回值:
number


