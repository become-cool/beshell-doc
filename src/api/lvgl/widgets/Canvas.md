`Canvas` 类是对 LVGL 的 Widget `lv_canvas_t` 的包装

**继承自: Obj**

## 方法:

-----

### setBuffer (obj:[Obj](../Obj), buf:undefined, w:number, h:number, cf:string)

> 该方法是对 LVGL C API `lv_canvas_set_buffer()` 的包装

参数:

* obj: [Obj](../Obj)

* buf: undefined

* w: number

* h: number

* cf: [lv_color_format_t](../const/#lv_color_format_t)

返回值:
undefined

-----

### setPx (obj:[Obj](../Obj), x:number, y:number, color:number, opa:string)

> 该方法是对 LVGL C API `lv_canvas_set_px()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

* color: number

* opa: [lv_opa_t](../const/#lv_opa_t)

返回值:
undefined

-----

### setPalette (canvas:[Obj](../Obj), id:number, c:lv_color32_t)

> 该方法是对 LVGL C API `lv_canvas_set_palette()` 的包装

参数:

* canvas: [Obj](../Obj)

* id: number

* c: lv_color32_t

返回值:
undefined

-----

### getPx (obj:[Obj](../Obj), x:number, y:number)

> 该方法是对 LVGL C API `lv_canvas_get_px()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

返回值:
lv_color32_t

-----

### copyBuf (obj:[Obj](../Obj), canvas_area:const lv_area_t *, dest_buf:lv_draw_buf_t *, dest_area:const lv_area_t *)

> 该方法是对 LVGL C API `lv_canvas_copy_buf()` 的包装

参数:

* obj: [Obj](../Obj)

* canvas_area: const lv_area_t *

* dest_buf: lv_draw_buf_t *

* dest_area: const lv_area_t *

返回值:
undefined

-----

### fillBg (obj:[Obj](../Obj), color:number, opa:string)

> 该方法是对 LVGL C API `lv_canvas_fill_bg()` 的包装

参数:

* obj: [Obj](../Obj)

* color: number

* opa: [lv_opa_t](../const/#lv_opa_t)

返回值:
undefined

-----

### initLayer (canvas:[Obj](../Obj), layer:lv_layer_t *)

> 该方法是对 LVGL C API `lv_canvas_init_layer()` 的包装

参数:

* canvas: [Obj](../Obj)

* layer: lv_layer_t *

返回值:
undefined

-----

### finishLayer (canvas:[Obj](../Obj), layer:lv_layer_t *)

> 该方法是对 LVGL C API `lv_canvas_finish_layer()` 的包装

参数:

* canvas: [Obj](../Obj)

* layer: lv_layer_t *

返回值:
undefined


