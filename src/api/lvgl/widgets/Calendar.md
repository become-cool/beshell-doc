`Calendar` 类是对 LVGL 的 Widget `lv_calendar_t` 的包装

**继承自: Obj**

## 方法:

-----

### setTodayDate (obj:[Obj](../Obj), year:number, month:number, day:number)

> 该方法是对 LVGL C API `lv_calendar_set_today_date()` 的包装

参数:

* obj: [Obj](../Obj)

* year: number

* month: number

* day: number

返回值:
undefined

-----

### setShowedDate (obj:[Obj](../Obj), year:number, month:number)

> 该方法是对 LVGL C API `lv_calendar_set_showed_date()` 的包装

参数:

* obj: [Obj](../Obj)

* year: number

* month: number

返回值:
undefined

-----

### setHighlightedDates (obj:[Obj](../Obj), highlighted:lv_calendar_date_t*, date_num:size_t)

> 该方法是对 LVGL C API `lv_calendar_set_highlighted_dates()` 的包装

参数:

* obj: [Obj](../Obj)

* highlighted: lv_calendar_date_t*

* date_num: size_t

返回值:
undefined

-----

### getPressedDate (calendar:const lv_obj_t *, date:lv_calendar_date_t *)

> 该方法是对 LVGL C API `lv_calendar_get_pressed_date()` 的包装

参数:

* calendar: const lv_obj_t *

* date: lv_calendar_date_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### headerArrowCreate (parent:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_calendar_header_arrow_create()` 的包装

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)

-----

### headerDropdownCreate (parent:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_calendar_header_dropdown_create()` 的包装

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)

-----

### headerDropdownSetYearList (parent:[Obj](../Obj), years_list:const char *)

> 该方法是对 LVGL C API `lv_calendar_header_dropdown_set_year_list()` 的包装

参数:

* parent: [Obj](../Obj)

* years_list: const char *

返回值:
undefined


