`Calendar` 类是对 LVGL 的 Widget `lv_calendar_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setTodayDate

> 该方法是对 LVGL C API `lv_calendar_set_today_date()` 的包装

原型: setTodayDate (obj:[Obj](../Obj), year:number, month:number, day:number)

参数:

* obj: [Obj](../Obj)

* year: number

* month: number

* day: number

返回值:
undefined



### 方法：setShowedDate

> 该方法是对 LVGL C API `lv_calendar_set_showed_date()` 的包装

原型: setShowedDate (obj:[Obj](../Obj), year:number, month:number)

参数:

* obj: [Obj](../Obj)

* year: number

* month: number

返回值:
undefined



### 方法：setHighlightedDates

> 该方法是对 LVGL C API `lv_calendar_set_highlighted_dates()` 的包装

原型: setHighlightedDates (obj:[Obj](../Obj), highlighted:lv_calendar_date_t*, date_num:size_t)

参数:

* obj: [Obj](../Obj)

* highlighted: lv_calendar_date_t*

* date_num: size_t

返回值:
undefined



### 方法：getPressedDate

> 该方法是对 LVGL C API `lv_calendar_get_pressed_date()` 的包装

原型: getPressedDate (calendar:const lv_obj_t *, date:lv_calendar_date_t *)

参数:

* calendar: const lv_obj_t *

* date: lv_calendar_date_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)



### 方法：headerArrowCreate

> 该方法是对 LVGL C API `lv_calendar_header_arrow_create()` 的包装

原型: headerArrowCreate (parent:[Obj](../Obj))

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：headerDropdownCreate

> 该方法是对 LVGL C API `lv_calendar_header_dropdown_create()` 的包装

原型: headerDropdownCreate (parent:[Obj](../Obj))

参数:

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)



### 方法：headerDropdownSetYearList

> 该方法是对 LVGL C API `lv_calendar_header_dropdown_set_year_list()` 的包装

原型: headerDropdownSetYearList (parent:[Obj](../Obj), years_list:const char *)

参数:

* parent: [Obj](../Obj)

* years_list: const char *

返回值:
undefined


