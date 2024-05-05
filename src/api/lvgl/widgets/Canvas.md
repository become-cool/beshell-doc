`Canvas` 类是对 LVGL 的 Widget `lv_canvas_t` 的包装

**继承自: Obj**

## 类方法:



### 方法：setBuffer

> 该方法是对 LVGL C API `lv_canvas_set_buffer()` 的包装

原型: setBuffer (obj:[Obj](../Obj), buf:undefined, w:number, h:number, cf:string)

参数:

* obj: [Obj](../Obj)

* buf: undefined

* w: number

* h: number

* cf: [lv_color_format_t](../const/#lv_color_format_t)

返回值:
undefined



### 方法：setPx

> 该方法是对 LVGL C API `lv_canvas_set_px()` 的包装

原型: setPx (obj:[Obj](../Obj), x:number, y:number, color:number, opa:string)

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

* color: number

* opa: [lv_opa_t](../const/#lv_opa_t)

返回值:
undefined



### 方法：setPalette

> 该方法是对 LVGL C API `lv_canvas_set_palette()` 的包装

原型: setPalette (canvas:[Obj](../Obj), id:number, c:lv_color32_t)

参数:

* canvas: [Obj](../Obj)

* id: number

* c: lv_color32_t

返回值:
undefined



### 方法：getPx

> 该方法是对 LVGL C API `lv_canvas_get_px()` 的包装

原型: getPx (obj:[Obj](../Obj), x:number, y:number)

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

返回值:
lv_color32_t



### 方法：copyBuf

> 该方法是对 LVGL C API `lv_canvas_copy_buf()` 的包装

原型: copyBuf (obj:[Obj](../Obj), canvas_area:const lv_area_t *, dest_buf:lv_draw_buf_t *, dest_area:const lv_area_t *)

参数:

* obj: [Obj](../Obj)

* canvas_area: const lv_area_t *

* dest_buf: lv_draw_buf_t *

* dest_area: const lv_area_t *

返回值:
undefined



### 方法：fillBg

> 该方法是对 LVGL C API `lv_canvas_fill_bg()` 的包装

原型: fillBg (obj:[Obj](../Obj), color:number, opa:string)

参数:

* obj: [Obj](../Obj)

* color: number

* opa: [lv_opa_t](../const/#lv_opa_t)

返回值:
undefined



### 方法：initLayer

> 该方法是对 LVGL C API `lv_canvas_init_layer()` 的包装

原型: initLayer (canvas:[Obj](../Obj), layer:lv_layer_t *)

参数:

* canvas: [Obj](../Obj)

* layer: lv_layer_t *

返回值:
undefined



### 方法：finishLayer

> 该方法是对 LVGL C API `lv_canvas_finish_layer()` 的包装

原型: finishLayer (canvas:[Obj](../Obj), layer:lv_layer_t *)

参数:

* canvas: [Obj](../Obj)

* layer: lv_layer_t *

返回值:
undefined


