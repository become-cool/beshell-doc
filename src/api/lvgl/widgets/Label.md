`Label` 类是对 LVGL 的 Widget `lv_label_t` 的包装

**继承自: Obj**

## 方法:

-----

### bindText (obj:[Obj](../Obj), subject:lv_subject_t *, fmt:const char *)

> 该方法是对 LVGL C API `lv_label_bind_text()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* fmt: const char *

返回值:
lv_observer_t *

-----

### setTextFmt (obj:[Obj](../Obj), fmt:const char *, ...:)

> 该方法是对 LVGL C API `lv_label_set_text_fmt()` 的包装

参数:

* obj: [Obj](../Obj)

* fmt: const char *

* ...: 

返回值:
undefined

-----

### getLetterPos (obj:const lv_obj_t *, char_id:number, pos:lv_point_t *)

> 该方法是对 LVGL C API `lv_label_get_letter_pos()` 的包装

参数:

* obj: const lv_obj_t *

* char_id: number

* pos: lv_point_t *

返回值:
undefined

-----

### getLetterOn (obj:const lv_obj_t *, pos_in:lv_point_t *, bidi:bool)

> 该方法是对 LVGL C API `lv_label_get_letter_on()` 的包装

参数:

* obj: const lv_obj_t *

* pos_in: lv_point_t *

* bidi: bool

返回值:
number

-----

### isCharUnderPos (obj:const lv_obj_t *, pos:lv_point_t *)

> 该方法是对 LVGL C API `lv_label_is_char_under_pos()` 的包装

参数:

* obj: const lv_obj_t *

* pos: lv_point_t *

返回值:
bool

-----

### insText (obj:[Obj](../Obj), pos:number, txt:const char *)

> 该方法是对 LVGL C API `lv_label_ins_text()` 的包装

参数:

* obj: [Obj](../Obj)

* pos: number

* txt: const char *

返回值:
undefined

-----

### cutText (obj:[Obj](../Obj), pos:number, cnt:number)

> 该方法是对 LVGL C API `lv_label_cut_text()` 的包装

参数:

* obj: [Obj](../Obj)

* pos: number

* cnt: number

返回值:
undefined


