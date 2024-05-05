`BtnMatrix` 类是对 LVGL 的 Widget `lv_buttonmatrix_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setButtonCtrl

> 该方法是对 LVGL C API `lv_buttonmatrix_set_button_ctrl()` 的包装

原型: setButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined



### 方法：clearButtonCtrl

> 该方法是对 LVGL C API `lv_buttonmatrix_clear_button_ctrl()` 的包装

原型: clearButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined



### 方法：clearButtonCtrlAll

> 该方法是对 LVGL C API `lv_buttonmatrix_clear_button_ctrl_all()` 的包装

原型: clearButtonCtrlAll (obj:[Obj](../Obj), ctrl:string)

参数:

* obj: [Obj](../Obj)

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
undefined



### 方法：setButtonWidth

> 该方法是对 LVGL C API `lv_buttonmatrix_set_button_width()` 的包装

原型: setButtonWidth (obj:[Obj](../Obj), btn_id:number, width:number)

参数:

* obj: [Obj](../Obj)

* btn_id: number

* width: number

返回值:
undefined



### 方法：getButtonText

> 该方法是对 LVGL C API `lv_buttonmatrix_get_button_text()` 的包装

原型: getButtonText (obj:const lv_obj_t *, btn_id:number)

参数:

* obj: const lv_obj_t *

* btn_id: number

返回值:
const char *



### 方法：hasButtonCtrl

> 该方法是对 LVGL C API `lv_buttonmatrix_has_button_ctrl()` 的包装

原型: hasButtonCtrl (obj:[Obj](../Obj), btn_id:number, ctrl:string)

参数:

* obj: [Obj](../Obj)

* btn_id: number

* ctrl: [lv_buttonmatrix_ctrl_t](../const/#lv_buttonmatrix_ctrl_t)

返回值:
bool


