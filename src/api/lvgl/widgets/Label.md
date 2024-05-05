`Label` 类是对 LVGL 的 Widget `lv_label_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：bindText

> 该方法是对 LVGL C API `lv_label_bind_text()` 的包装

原型: bindText (obj:[Obj](../Obj), subject:lv_subject_t *, fmt:const char *)

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* fmt: const char *

返回值:
lv_observer_t *



### 方法：setTextFmt

> 该方法是对 LVGL C API `lv_label_set_text_fmt()` 的包装

原型: setTextFmt (obj:[Obj](../Obj), fmt:const char *, ...:)

参数:

* obj: [Obj](../Obj)

* fmt: const char *

* ...: 

返回值:
undefined



### 方法：getLetterPos

> 该方法是对 LVGL C API `lv_label_get_letter_pos()` 的包装

原型: getLetterPos (obj:const lv_obj_t *, char_id:number, pos:lv_point_t *)

参数:

* obj: const lv_obj_t *

* char_id: number

* pos: lv_point_t *

返回值:
undefined



### 方法：getLetterOn

> 该方法是对 LVGL C API `lv_label_get_letter_on()` 的包装

原型: getLetterOn (obj:const lv_obj_t *, pos_in:lv_point_t *, bidi:bool)

参数:

* obj: const lv_obj_t *

* pos_in: lv_point_t *

* bidi: bool

返回值:
number



### 方法：isCharUnderPos

> 该方法是对 LVGL C API `lv_label_is_char_under_pos()` 的包装

原型: isCharUnderPos (obj:const lv_obj_t *, pos:lv_point_t *)

参数:

* obj: const lv_obj_t *

* pos: lv_point_t *

返回值:
bool



### 方法：insText

> 该方法是对 LVGL C API `lv_label_ins_text()` 的包装

原型: insText (obj:[Obj](../Obj), pos:number, txt:const char *)

参数:

* obj: [Obj](../Obj)

* pos: number

* txt: const char *

返回值:
undefined



### 方法：cutText

> 该方法是对 LVGL C API `lv_label_cut_text()` 的包装

原型: cutText (obj:[Obj](../Obj), pos:number, cnt:number)

参数:

* obj: [Obj](../Obj)

* pos: number

* cnt: number

返回值:
undefined


