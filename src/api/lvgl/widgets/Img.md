`Img` 类是对 LVGL 的 Widget `lv_image_t` 的包装

**继承自: Obj**

## 方法:

-----

### srcGetType (src:const void *)

> 该方法是对 LVGL C API `lv_image_src_get_type()` 的包装

参数:

* src: const void *

返回值:
string

该函数的返回值是一个字符串常量: [lv_image_src_t](../const/#lv_image_src_t)

-----

### bufSetPalette (dsc:lv_image_dsc_t *, id:number, c:lv_color32_t)

> 该方法是对 LVGL C API `lv_image_buf_set_palette()` 的包装

参数:

* dsc: lv_image_dsc_t *

* id: number

* c: lv_color32_t

返回值:
undefined

-----

### bufFree (dsc:lv_image_dsc_t *)

> 该方法是对 LVGL C API `lv_image_buf_free()` 的包装

参数:

* dsc: lv_image_dsc_t *

返回值:
undefined

-----

### decoderGetInfo (src:const void *, header:lv_image_header_t *)

> 该方法是对 LVGL C API `lv_image_decoder_get_info()` 的包装

参数:

* src: const void *

* header: lv_image_header_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### decoderOpen (dsc:lv_image_decoder_dsc_t *, src:const void *, args:const lv_image_decoder_args_t *)

> 该方法是对 LVGL C API `lv_image_decoder_open()` 的包装

参数:

* dsc: lv_image_decoder_dsc_t *

* src: const void *

* args: const lv_image_decoder_args_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### decoderGetArea (dsc:lv_image_decoder_dsc_t *, full_area:const lv_area_t *, decoded_area:lv_area_t *)

> 该方法是对 LVGL C API `lv_image_decoder_get_area()` 的包装

参数:

* dsc: lv_image_decoder_dsc_t *

* full_area: const lv_area_t *

* decoded_area: lv_area_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### decoderClose (dsc:lv_image_decoder_dsc_t *)

> 该方法是对 LVGL C API `lv_image_decoder_close()` 的包装

参数:

* dsc: lv_image_decoder_dsc_t *

返回值:
undefined

-----

### decoderDelete (decoder:lv_image_decoder_t *)

> 该方法是对 LVGL C API `lv_image_decoder_delete()` 的包装

参数:

* decoder: lv_image_decoder_t *

返回值:
undefined

-----

### decoderGetNext (decoder:lv_image_decoder_t *)

> 该方法是对 LVGL C API `lv_image_decoder_get_next()` 的包装

参数:

* decoder: lv_image_decoder_t *

返回值:
lv_image_decoder_t *

-----

### decoderSetInfoCb (decoder:lv_image_decoder_t *, info_cb:lv_image_decoder_info_f_t)

> 该方法是对 LVGL C API `lv_image_decoder_set_info_cb()` 的包装

参数:

* decoder: lv_image_decoder_t *

* info_cb: lv_image_decoder_info_f_t

返回值:
undefined

-----

### decoderSetOpenCb (decoder:lv_image_decoder_t *, open_cb:lv_image_decoder_open_f_t)

> 该方法是对 LVGL C API `lv_image_decoder_set_open_cb()` 的包装

参数:

* decoder: lv_image_decoder_t *

* open_cb: lv_image_decoder_open_f_t

返回值:
undefined

-----

### decoderSetGetAreaCb (decoder:lv_image_decoder_t *, read_line_cb:lv_image_decoder_get_area_cb_t)

> 该方法是对 LVGL C API `lv_image_decoder_set_get_area_cb()` 的包装

参数:

* decoder: lv_image_decoder_t *

* read_line_cb: lv_image_decoder_get_area_cb_t

返回值:
undefined

-----

### decoderSetCloseCb (decoder:lv_image_decoder_t *, close_cb:lv_image_decoder_close_f_t)

> 该方法是对 LVGL C API `lv_image_decoder_set_close_cb()` 的包装

参数:

* decoder: lv_image_decoder_t *

* close_cb: lv_image_decoder_close_f_t

返回值:
undefined

-----

### decoderSetCacheFreeCb (decoder:lv_image_decoder_t *, cache_free_cb:lv_cache_free_cb_t)

> 该方法是对 LVGL C API `lv_image_decoder_set_cache_free_cb()` 的包装

参数:

* decoder: lv_image_decoder_t *

* cache_free_cb: lv_cache_free_cb_t

返回值:
undefined

-----

### decoderAddToCache (decoder:lv_image_decoder_t *, search_key:lv_image_cache_data_t *, decoded:const lv_draw_buf_t *, user_data:undefined)

> 该方法是对 LVGL C API `lv_image_decoder_add_to_cache()` 的包装

参数:

* decoder: lv_image_decoder_t *

* search_key: lv_image_cache_data_t *

* decoded: const lv_draw_buf_t *

* user_data: undefined

返回值:
lv_cache_entry_t *

-----

### decoderPostProcess (dsc:lv_image_decoder_dsc_t *, decoded:lv_draw_buf_t *)

> 该方法是对 LVGL C API `lv_image_decoder_post_process()` 的包装

参数:

* dsc: lv_image_decoder_dsc_t *

* decoded: lv_draw_buf_t *

返回值:
lv_draw_buf_t *

-----

### cacheDrop (src:const void *)

> 该方法是对 LVGL C API `lv_image_cache_drop()` 的包装

参数:

* src: const void *

返回值:
undefined

-----

### setPivot (obj:[Obj](../Obj), x:number, y:number)

> 该方法是对 LVGL C API `lv_image_set_pivot()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

返回值:
undefined

-----

### getPivot (obj:[Obj](../Obj), pivot:lv_point_t *)

> 该方法是对 LVGL C API `lv_image_get_pivot()` 的包装

参数:

* obj: [Obj](../Obj)

* pivot: lv_point_t *

返回值:
undefined


