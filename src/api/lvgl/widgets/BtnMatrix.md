`BtnMatrix` 类是对 LVGL 的 Widget `lv_buttonmatrix_t` 的包装

**继承自: Obj**

## 方法:

-----

### setButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

> 该方法是对 LVGL C API `lv_buttonmatrix_set_button_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined

-----

### clearButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

> 该方法是对 LVGL C API `lv_buttonmatrix_clear_button_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined

-----

### clearButtonCtrlAll (obj:[Obj](../Obj), ctrl:string)

> 该方法是对 LVGL C API `lv_buttonmatrix_clear_button_ctrl_all()` 的包装

参数:

* obj: [Obj](../Obj)

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined

-----

### setButtonWidth (obj:[Obj](../Obj), btn_id:number, width:number)

> 该方法是对 LVGL C API `lv_buttonmatrix_set_button_width()` 的包装

参数:

* obj: [Obj](../Obj)

* btn_id: number

* width: number

返回值:
undefined

-----

### getButtonText (obj:const lv_obj_t *, btn_id:number)

> 该方法是对 LVGL C API `lv_buttonmatrix_get_button_text()` 的包装

参数:

* obj: const lv_obj_t *

* btn_id: number

返回值:
const char *

-----

### hasButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

> 该方法是对 LVGL C API `lv_buttonmatrix_has_button_ctrl()` 的包装

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
bool


