`Obj` 类是对 LVGL 的 Widget `lv_obj_t` 的包装

**继承自: EventEmitter**

## 方法:

-----

### addFlag (obj:[Obj](../Obj), f:string)

> 该方法是对 LVGL C API `lv_obj_add_flag()` 的包装

参数:

* obj: [Obj](../Obj)

* f: [lv_obj_flag_t](../const/#lv_obj_flag_t)

返回值:
undefined

-----

### removeFlag (obj:[Obj](../Obj), f:string)

> 该方法是对 LVGL C API `lv_obj_remove_flag()` 的包装

参数:

* obj: [Obj](../Obj)

* f: [lv_obj_flag_t](../const/#lv_obj_flag_t)

返回值:
undefined

-----

### updateFlag (obj:[Obj](../Obj), f:string, v:bool)

> 该方法是对 LVGL C API `lv_obj_update_flag()` 的包装

参数:

* obj: [Obj](../Obj)

* f: [lv_obj_flag_t](../const/#lv_obj_flag_t)

* v: bool

返回值:
undefined

-----

### addState (obj:[Obj](../Obj), state:string)

> 该方法是对 LVGL C API `lv_obj_add_state()` 的包装

参数:

* obj: [Obj](../Obj)

* state: [lv_state_t](../const/#lv_state_t)

返回值:
undefined

-----

### removeState (obj:[Obj](../Obj), state:string)

> 该方法是对 LVGL C API `lv_obj_remove_state()` 的包装

参数:

* obj: [Obj](../Obj)

* state: [lv_state_t](../const/#lv_state_t)

返回值:
undefined

-----

### setState (obj:[Obj](../Obj), state:string, v:bool)

> 该方法是对 LVGL C API `lv_obj_set_state()` 的包装

参数:

* obj: [Obj](../Obj)

* state: [lv_state_t](../const/#lv_state_t)

* v: bool

返回值:
undefined

-----

### hasFlag (obj:const lv_obj_t *, f:string)

> 该方法是对 LVGL C API `lv_obj_has_flag()` 的包装

参数:

* obj: const lv_obj_t *

* f: [lv_obj_flag_t](../const/#lv_obj_flag_t)

返回值:
bool

-----

### hasFlagAny (obj:const lv_obj_t *, f:string)

> 该方法是对 LVGL C API `lv_obj_has_flag_any()` 的包装

参数:

* obj: const lv_obj_t *

* f: [lv_obj_flag_t](../const/#lv_obj_flag_t)

返回值:
bool

-----

### hasState (obj:const lv_obj_t *, state:string)

> 该方法是对 LVGL C API `lv_obj_has_state()` 的包装

参数:

* obj: const lv_obj_t *

* state: [lv_state_t](../const/#lv_state_t)

返回值:
bool

-----

### allocateSpecAttr (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_allocate_spec_attr()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### checkType (obj:const lv_obj_t *, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_check_type()` 的包装

参数:

* obj: const lv_obj_t *

* class_p: const lv_obj_class_t *

返回值:
bool

-----

### hasClass (obj:const lv_obj_t *, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_has_class()` 的包装

参数:

* obj: const lv_obj_t *

* class_p: const lv_obj_class_t *

返回值:
bool

-----

### isValid (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_is_valid()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
bool

-----

### classCreateObj (class_p:const lv_obj_class_t *, parent:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_class_create_obj()` 的包装

参数:

* class_p: const lv_obj_class_t *

* parent: [Obj](../Obj)

返回值:
[Obj](../Obj)

-----

### classInitObj (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_class_init_obj()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### isEditable (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_is_editable()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
bool

-----

### isGroupDef (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_is_group_def()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
bool

-----

### initDrawRectDsc (obj:[Obj](../Obj), part:number, draw_dsc:lv_draw_rect_dsc_t *)

> 该方法是对 LVGL C API `lv_obj_init_draw_rect_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

* draw_dsc: lv_draw_rect_dsc_t *

返回值:
undefined

-----

### initDrawLabelDsc (obj:[Obj](../Obj), part:number, draw_dsc:lv_draw_label_dsc_t *)

> 该方法是对 LVGL C API `lv_obj_init_draw_label_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

* draw_dsc: lv_draw_label_dsc_t *

返回值:
undefined

-----

### initDrawImageDsc (obj:[Obj](../Obj), part:number, draw_dsc:lv_draw_image_dsc_t *)

> 该方法是对 LVGL C API `lv_obj_init_draw_image_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

* draw_dsc: lv_draw_image_dsc_t *

返回值:
undefined

-----

### initDrawLineDsc (obj:[Obj](../Obj), part:number, draw_dsc:lv_draw_line_dsc_t *)

> 该方法是对 LVGL C API `lv_obj_init_draw_line_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

* draw_dsc: lv_draw_line_dsc_t *

返回值:
undefined

-----

### initDrawArcDsc (obj:[Obj](../Obj), part:number, draw_dsc:lv_draw_arc_dsc_t *)

> 该方法是对 LVGL C API `lv_obj_init_draw_arc_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

* draw_dsc: lv_draw_arc_dsc_t *

返回值:
undefined

-----

### calculateExtDrawSize (obj:[Obj](../Obj), part:number)

> 该方法是对 LVGL C API `lv_obj_calculate_ext_draw_size()` 的包装

参数:

* obj: [Obj](../Obj)

* part: number

返回值:
number

-----

### refreshExtDrawSize (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_refresh_ext_draw_size()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### sendEvent (obj:[Obj](../Obj), event_code:string, param:undefined)

> 该方法是对 LVGL C API `lv_obj_send_event()` 的包装

参数:

* obj: [Obj](../Obj)

* event_code: [lv_event_code_t](../const/#lv_event_code_t)

* param: undefined

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### eventBase (class_p:const lv_obj_class_t *, e:lv_event_t *)

> 该方法是对 LVGL C API `lv_obj_event_base()` 的包装

参数:

* class_p: const lv_obj_class_t *

* e: lv_event_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### addEventCb (obj:[Obj](../Obj), event_cb:lv_event_cb_t, filter:string, user_data:undefined)

> 该方法是对 LVGL C API `lv_obj_add_event_cb()` 的包装

参数:

* obj: [Obj](../Obj)

* event_cb: lv_event_cb_t

* filter: [lv_event_code_t](../const/#lv_event_code_t)

* user_data: undefined

返回值:
undefined

-----

### getEventDsc (obj:[Obj](../Obj), index:number)

> 该方法是对 LVGL C API `lv_obj_get_event_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* index: number

返回值:
lv_event_dsc_t *

-----

### removeEvent (obj:[Obj](../Obj), index:number)

> 该方法是对 LVGL C API `lv_obj_remove_event()` 的包装

参数:

* obj: [Obj](../Obj)

* index: number

返回值:
bool

-----

### removeEventCb (obj:[Obj](../Obj), event_cb:lv_event_cb_t)

> 该方法是对 LVGL C API `lv_obj_remove_event_cb()` 的包装

参数:

* obj: [Obj](../Obj)

* event_cb: lv_event_cb_t

返回值:
bool

-----

### removeEventCbWithUserData (obj:[Obj](../Obj), event_cb:lv_event_cb_t, user_data:undefined)

> 该方法是对 LVGL C API `lv_obj_remove_event_cb_with_user_data()` 的包装

参数:

* obj: [Obj](../Obj)

* event_cb: lv_event_cb_t

* user_data: undefined

返回值:
number

-----

### setPos (obj:[Obj](../Obj), x:number, y:number)

> 该方法是对 LVGL C API `lv_obj_set_pos()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

返回值:
undefined

-----

### setSize (obj:[Obj](../Obj), w:number, h:number)

> 该方法是对 LVGL C API `lv_obj_set_size()` 的包装

参数:

* obj: [Obj](../Obj)

* w: number

* h: number

返回值:
undefined

-----

### refrSize (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_refr_size()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
bool

-----

### isLayoutPositioned (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_is_layout_positioned()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
bool

-----

### markLayoutAsDirty (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_mark_layout_as_dirty()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### updateLayout (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_update_layout()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
undefined

-----

### alignTo (obj:[Obj](../Obj), base:const lv_obj_t *, align:string, x_ofs:number, y_ofs:number)

> 该方法是对 LVGL C API `lv_obj_align_to()` 的包装

参数:

* obj: [Obj](../Obj)

* base: const lv_obj_t *

* align: [lv_align_t](../const/#lv_align_t)

* x_ofs: number

* y_ofs: number

返回值:
undefined

-----

### getCoords (obj:const lv_obj_t *, coords:lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_get_coords()` 的包装

参数:

* obj: const lv_obj_t *

* coords: lv_area_t *

返回值:
undefined

-----

### getContentCoords (obj:const lv_obj_t *, area:lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_get_content_coords()` 的包装

参数:

* obj: const lv_obj_t *

* area: lv_area_t *

返回值:
undefined

-----

### refreshSelfSize (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_refresh_self_size()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
bool

-----

### refrPos (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_refr_pos()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### moveTo (obj:[Obj](../Obj), x:number, y:number)

> 该方法是对 LVGL C API `lv_obj_move_to()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

返回值:
undefined

-----

### moveChildrenBy (obj:[Obj](../Obj), x_diff:number, y_diff:number, ignore_floating:bool)

> 该方法是对 LVGL C API `lv_obj_move_children_by()` 的包装

参数:

* obj: [Obj](../Obj)

* x_diff: number

* y_diff: number

* ignore_floating: bool

返回值:
undefined

-----

### transformPoint (obj:const lv_obj_t *, p:lv_point_t *, recursive:bool, inv:bool)

> 该方法是对 LVGL C API `lv_obj_transform_point()` 的包装

参数:

* obj: const lv_obj_t *

* p: lv_point_t *

* recursive: bool

* inv: bool

返回值:
undefined

-----

### getTransformedArea (obj:const lv_obj_t *, area:lv_area_t *, recursive:bool, inv:bool)

> 该方法是对 LVGL C API `lv_obj_get_transformed_area()` 的包装

参数:

* obj: const lv_obj_t *

* area: lv_area_t *

* recursive: bool

* inv: bool

返回值:
undefined

-----

### invalidateArea (obj:const lv_obj_t *, area:const lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_invalidate_area()` 的包装

参数:

* obj: const lv_obj_t *

* area: const lv_area_t *

返回值:
undefined

-----

### invalidate (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_invalidate()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
undefined

-----

### areaIsVisible (obj:const lv_obj_t *, area:lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_area_is_visible()` 的包装

参数:

* obj: const lv_obj_t *

* area: lv_area_t *

返回值:
bool

-----

### isVisible (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_is_visible()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
bool

-----

### getClickArea (obj:const lv_obj_t *, area:lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_get_click_area()` 的包装

参数:

* obj: const lv_obj_t *

* area: lv_area_t *

返回值:
undefined

-----

### hitTest (obj:[Obj](../Obj), point:const lv_point_t *)

> 该方法是对 LVGL C API `lv_obj_hit_test()` 的包装

参数:

* obj: [Obj](../Obj)

* point: const lv_point_t *

返回值:
bool

-----

### setProperty (obj:[Obj](../Obj), value:const lv_property_t *)

> 该方法是对 LVGL C API `lv_obj_set_property()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_property_t *

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### setProperties (obj:[Obj](../Obj), value:const lv_property_t *, count:number)

> 该方法是对 LVGL C API `lv_obj_set_properties()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_property_t *

* count: number

返回值:
string

该函数的返回值是一个字符串常量: [lv_result_t](../const/#lv_result_t)

-----

### getProperty (obj:[Obj](../Obj), id:lv_prop_id_t)

> 该方法是对 LVGL C API `lv_obj_get_property()` 的包装

参数:

* obj: [Obj](../Obj)

* id: lv_prop_id_t

返回值:
lv_property_t

-----

### getScrollEnd (obj:[Obj](../Obj), end:lv_point_t *)

> 该方法是对 LVGL C API `lv_obj_get_scroll_end()` 的包装

参数:

* obj: [Obj](../Obj)

* end: lv_point_t *

返回值:
undefined

-----

### scrollBy (obj:[Obj](../Obj), x:number, y:number, anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_by()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollByBounded (obj:[Obj](../Obj), dx:number, dy:number, anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_by_bounded()` 的包装

参数:

* obj: [Obj](../Obj)

* dx: number

* dy: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollTo (obj:[Obj](../Obj), x:number, y:number, anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_to()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* y: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollToX (obj:[Obj](../Obj), x:number, anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_to_x()` 的包装

参数:

* obj: [Obj](../Obj)

* x: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollToY (obj:[Obj](../Obj), y:number, anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_to_y()` 的包装

参数:

* obj: [Obj](../Obj)

* y: number

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollToView (obj:[Obj](../Obj), anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_to_view()` 的包装

参数:

* obj: [Obj](../Obj)

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### scrollToViewRecursive (obj:[Obj](../Obj), anim_en:string)

> 该方法是对 LVGL C API `lv_obj_scroll_to_view_recursive()` 的包装

参数:

* obj: [Obj](../Obj)

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### isScrolling (obj:const lv_obj_t *)

> 该方法是对 LVGL C API `lv_obj_is_scrolling()` 的包装

参数:

* obj: const lv_obj_t *

返回值:
bool

-----

### updateSnap (obj:[Obj](../Obj), anim_en:string)

> 该方法是对 LVGL C API `lv_obj_update_snap()` 的包装

参数:

* obj: [Obj](../Obj)

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### getScrollbarArea (obj:[Obj](../Obj), hor:lv_area_t *, ver:lv_area_t *)

> 该方法是对 LVGL C API `lv_obj_get_scrollbar_area()` 的包装

参数:

* obj: [Obj](../Obj)

* hor: lv_area_t *

* ver: lv_area_t *

返回值:
undefined

-----

### scrollbarInvalidate (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_scrollbar_invalidate()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### readjustScroll (obj:[Obj](../Obj), anim_en:string)

> 该方法是对 LVGL C API `lv_obj_readjust_scroll()` 的包装

参数:

* obj: [Obj](../Obj)

* anim_en: [lv_anim_enable_t](../const/#lv_anim_enable_t)

返回值:
undefined

-----

### addStyle (obj:[Obj](../Obj), style:const lv_style_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_add_style()` 的包装

参数:

* obj: [Obj](../Obj)

* style: const lv_style_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### replaceStyle (obj:[Obj](../Obj), old_style:const lv_style_t *, new_style:const lv_style_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_replace_style()` 的包装

参数:

* obj: [Obj](../Obj)

* old_style: const lv_style_t *

* new_style: const lv_style_t *

* selector: lv_style_selector_t

返回值:
bool

-----

### removeStyle (obj:[Obj](../Obj), style:const lv_style_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_remove_style()` 的包装

参数:

* obj: [Obj](../Obj)

* style: const lv_style_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### removeStyleAll (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_remove_style_all()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### reportStyleChange (style:[Style](../../style#lv_style_t))

> 该方法是对 LVGL C API `lv_obj_report_style_change()` 的包装

参数:

* style: [Style](../../style#lv_style_t)

返回值:
undefined

-----

### refreshStyle (obj:[Obj](../Obj), part:lv_part_t, prop:string)

> 该方法是对 LVGL C API `lv_obj_refresh_style()` 的包装

参数:

* obj: [Obj](../Obj)

* part: lv_part_t

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

返回值:
undefined

-----

### enableStyleRefresh (en:bool)

> 该方法是对 LVGL C API `lv_obj_enable_style_refresh()` 的包装

参数:

* en: bool

返回值:
undefined

-----

### getStyleProp (obj:const lv_obj_t *, part:lv_part_t, prop:string)

> 该方法是对 LVGL C API `lv_obj_get_style_prop()` 的包装

参数:

* obj: const lv_obj_t *

* part: lv_part_t

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

返回值:
lv_style_value_t

-----

### hasStyleProp (obj:const lv_obj_t *, selector:lv_style_selector_t, prop:string)

> 该方法是对 LVGL C API `lv_obj_has_style_prop()` 的包装

参数:

* obj: const lv_obj_t *

* selector: lv_style_selector_t

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

返回值:
bool

-----

### setLocalStyleProp (obj:[Obj](../Obj), prop:string, value:lv_style_value_t, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_local_style_prop()` 的包装

参数:

* obj: [Obj](../Obj)

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

* value: lv_style_value_t

* selector: lv_style_selector_t

返回值:
undefined

-----

### getLocalStyleProp (obj:[Obj](../Obj), prop:string, value:lv_style_value_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_get_local_style_prop()` 的包装

参数:

* obj: [Obj](../Obj)

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

* value: lv_style_value_t *

* selector: lv_style_selector_t

返回值:
string

该函数的返回值是一个字符串常量: [lv_style_res_t](../const/#lv_style_res_t)

-----

### removeLocalStyleProp (obj:[Obj](../Obj), prop:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_remove_local_style_prop()` 的包装

参数:

* obj: [Obj](../Obj)

* prop: [lv_style_prop_t](../const/#lv_style_prop_t)

* selector: lv_style_selector_t

返回值:
bool

-----

### fadeIn (obj:[Obj](../Obj), time:number, delay:number)

> 该方法是对 LVGL C API `lv_obj_fade_in()` 的包装

参数:

* obj: [Obj](../Obj)

* time: number

* delay: number

返回值:
undefined

-----

### fadeOut (obj:[Obj](../Obj), time:number, delay:number)

> 该方法是对 LVGL C API `lv_obj_fade_out()` 的包装

参数:

* obj: [Obj](../Obj)

* time: number

* delay: number

返回值:
undefined

-----

### calculateStyleTextAlign (obj:const lv_obj_t *, part:lv_part_t, txt:const char *)

> 该方法是对 LVGL C API `lv_obj_calculate_style_text_align()` 的包装

参数:

* obj: const lv_obj_t *

* part: lv_part_t

* txt: const char *

返回值:
string

该函数的返回值是一个字符串常量: [lv_text_align_t](../const/#lv_text_align_t)

-----

### getStyleOpaRecursive (obj:const lv_obj_t *, part:lv_part_t)

> 该方法是对 LVGL C API `lv_obj_get_style_opa_recursive()` 的包装

参数:

* obj: const lv_obj_t *

* part: lv_part_t

返回值:
string

该函数的返回值是一个字符串常量: [lv_opa_t](../const/#lv_opa_t)

-----

### setStyleWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMinWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_min_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMaxWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_max_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleHeight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_height()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMinHeight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_min_height()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMaxHeight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_max_height()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLength (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_length()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_align_t](../const/#lv_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformHeight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_height()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTranslateX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_translate_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTranslateY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_translate_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformScaleX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_scale_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformScaleY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_scale_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformRotation (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_rotation()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformPivotX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_pivot_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformPivotY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_pivot_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformSkewX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_skew_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransformSkewY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transform_skew_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadTop (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_top()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadBottom (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_bottom()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadLeft (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_left()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadRight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_right()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadRow (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_row()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStylePadColumn (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_pad_column()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMarginTop (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_margin_top()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMarginBottom (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_margin_bottom()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMarginLeft (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_margin_left()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleMarginRight (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_margin_right()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgGradColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_grad_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgGradDir (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_grad_dir()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_grad_dir_t](../const/#lv_grad_dir_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgMainStop (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_main_stop()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgGradStop (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_grad_stop()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgMainOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_main_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgGradOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_grad_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgGrad (obj:[Obj](../Obj), value:const lv_grad_dsc_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_grad()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_grad_dsc_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgImageSrc (obj:[Obj](../Obj), value:const void *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_image_src()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const void *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgImageOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_image_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgImageRecolor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_image_recolor()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgImageRecolorOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_image_recolor_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBgImageTiled (obj:[Obj](../Obj), value:bool, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_bg_image_tiled()` 的包装

参数:

* obj: [Obj](../Obj)

* value: bool

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBorderColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_border_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBorderOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_border_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBorderWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_border_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBorderSide (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_border_side()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_border_side_t](../const/#lv_border_side_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBorderPost (obj:[Obj](../Obj), value:bool, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_border_post()` 的包装

参数:

* obj: [Obj](../Obj)

* value: bool

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOutlineWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_outline_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOutlineColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_outline_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOutlineOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_outline_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOutlinePad (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_outline_pad()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowOffsetX (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_offset_x()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowOffsetY (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_offset_y()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowSpread (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_spread()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleShadowOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_shadow_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleImageOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_image_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleImageRecolor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_image_recolor()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleImageRecolorOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_image_recolor_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineDashWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_dash_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineDashGap (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_dash_gap()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineRounded (obj:[Obj](../Obj), value:bool, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_rounded()` 的包装

参数:

* obj: [Obj](../Obj)

* value: bool

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLineOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_line_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleArcWidth (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_arc_width()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleArcRounded (obj:[Obj](../Obj), value:bool, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_arc_rounded()` 的包装

参数:

* obj: [Obj](../Obj)

* value: bool

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleArcColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_arc_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleArcOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_arc_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleArcImageSrc (obj:[Obj](../Obj), value:const void *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_arc_image_src()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const void *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextColor (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_color()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextFont (obj:[Obj](../Obj), value:const lv_font_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_font()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_font_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextLetterSpace (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_letter_space()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextLineSpace (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_line_space()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextDecor (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_decor()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_text_decor_t](../const/#lv_text_decor_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTextAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_text_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_text_align_t](../const/#lv_text_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleRadius (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_radius()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleClipCorner (obj:[Obj](../Obj), value:bool, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_clip_corner()` 的包装

参数:

* obj: [Obj](../Obj)

* value: bool

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleOpaLayered (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_opa_layered()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleColorFilterDsc (obj:[Obj](../Obj), value:const lv_color_filter_dsc_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_color_filter_dsc()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_color_filter_dsc_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleColorFilterOpa (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_color_filter_opa()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_opa_t](../const/#lv_opa_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleAnim (obj:[Obj](../Obj), value:const lv_anim_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_anim()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_anim_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleAnimDuration (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_anim_duration()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleTransition (obj:[Obj](../Obj), value:const lv_style_transition_dsc_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_transition()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const lv_style_transition_dsc_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBlendMode (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_blend_mode()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_blend_mode_t](../const/#lv_blend_mode_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleLayout (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_layout()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleBaseDir (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_base_dir()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_base_dir_t](../const/#lv_base_dir_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleFlexFlow (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_flex_flow()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_flex_flow_t](../const/#lv_flex_flow_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleFlexMainPlace (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_flex_main_place()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_flex_align_t](../const/#lv_flex_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleFlexCrossPlace (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_flex_cross_place()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_flex_align_t](../const/#lv_flex_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleFlexTrackPlace (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_flex_track_place()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_flex_align_t](../const/#lv_flex_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleFlexGrow (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_flex_grow()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridColumnDscArray (obj:[Obj](../Obj), value:const int32_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_column_dsc_array()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const int32_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridColumnAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_column_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_grid_align_t](../const/#lv_grid_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridRowDscArray (obj:[Obj](../Obj), value:const int32_t *, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_row_dsc_array()` 的包装

参数:

* obj: [Obj](../Obj)

* value: const int32_t *

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridRowAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_row_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_grid_align_t](../const/#lv_grid_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellColumnPos (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_column_pos()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellXAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_x_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_grid_align_t](../const/#lv_grid_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellColumnSpan (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_column_span()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellRowPos (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_row_pos()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellYAlign (obj:[Obj](../Obj), value:string, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_y_align()` 的包装

参数:

* obj: [Obj](../Obj)

* value: [lv_grid_align_t](../const/#lv_grid_align_t)

* selector: lv_style_selector_t

返回值:
undefined

-----

### setStyleGridCellRowSpan (obj:[Obj](../Obj), value:number, selector:lv_style_selector_t)

> 该方法是对 LVGL C API `lv_obj_set_style_grid_cell_row_span()` 的包装

参数:

* obj: [Obj](../Obj)

* value: number

* selector: lv_style_selector_t

返回值:
undefined

-----

### delete (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_delete()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### clean (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_clean()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### deleteDelayed (obj:[Obj](../Obj), delay_ms:number)

> 该方法是对 LVGL C API `lv_obj_delete_delayed()` 的包装

参数:

* obj: [Obj](../Obj)

* delay_ms: number

返回值:
undefined

-----

### deleteAnimCompletedCb (a:lv_anim_t *)

> 该方法是对 LVGL C API `lv_obj_delete_anim_completed_cb()` 的包装

参数:

* a: lv_anim_t *

返回值:
undefined

-----

### deleteAsync (obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_delete_async()` 的包装

参数:

* obj: [Obj](../Obj)

返回值:
undefined

-----

### swap (obj1:[Obj](../Obj), obj2:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_swap()` 的包装

参数:

* obj1: [Obj](../Obj)

* obj2: [Obj](../Obj)

返回值:
undefined

-----

### moveToIndex (obj:[Obj](../Obj), index:number)

> 该方法是对 LVGL C API `lv_obj_move_to_index()` 的包装

参数:

* obj: [Obj](../Obj)

* index: number

返回值:
undefined

-----

### getChild (obj:const lv_obj_t *, idx:number)

> 该方法是对 LVGL C API `lv_obj_get_child()` 的包装

参数:

* obj: const lv_obj_t *

* idx: number

返回值:
[Obj](../Obj)

-----

### getChildByType (obj:const lv_obj_t *, idx:number, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_get_child_by_type()` 的包装

参数:

* obj: const lv_obj_t *

* idx: number

* class_p: const lv_obj_class_t *

返回值:
[Obj](../Obj)

-----

### getSibling (obj:const lv_obj_t *, idx:number)

> 该方法是对 LVGL C API `lv_obj_get_sibling()` 的包装

参数:

* obj: const lv_obj_t *

* idx: number

返回值:
[Obj](../Obj)

-----

### getSiblingByType (obj:const lv_obj_t *, idx:number, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_get_sibling_by_type()` 的包装

参数:

* obj: const lv_obj_t *

* idx: number

* class_p: const lv_obj_class_t *

返回值:
[Obj](../Obj)

-----

### getChildCountByType (obj:const lv_obj_t *, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_get_child_count_by_type()` 的包装

参数:

* obj: const lv_obj_t *

* class_p: const lv_obj_class_t *

返回值:
number

-----

### getIndexByType (obj:const lv_obj_t *, class_p:const lv_obj_class_t *)

> 该方法是对 LVGL C API `lv_obj_get_index_by_type()` 的包装

参数:

* obj: const lv_obj_t *

* class_p: const lv_obj_class_t *

返回值:
number

-----

### treeWalk (start_obj:[Obj](../Obj), cb:lv_obj_tree_walk_cb_t, user_data:undefined)

> 该方法是对 LVGL C API `lv_obj_tree_walk()` 的包装

参数:

* start_obj: [Obj](../Obj)

* cb: lv_obj_tree_walk_cb_t

* user_data: undefined

返回值:
undefined

-----

### dumpTree (start_ob:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_dump_tree()` 的包装

参数:

* start_ob: [Obj](../Obj)

返回值:
undefined

-----

### redraw (layer:lv_layer_t *, obj:[Obj](../Obj))

> 该方法是对 LVGL C API `lv_obj_redraw()` 的包装

参数:

* layer: lv_layer_t *

* obj: [Obj](../Obj)

返回值:
undefined

-----

### setFlexAlign (obj:[Obj](../Obj), main_place:string, cross_place:string, track_cross_place:string)

> 该方法是对 LVGL C API `lv_obj_set_flex_align()` 的包装

参数:

* obj: [Obj](../Obj)

* main_place: [lv_flex_align_t](../const/#lv_flex_align_t)

* cross_place: [lv_flex_align_t](../const/#lv_flex_align_t)

* track_cross_place: [lv_flex_align_t](../const/#lv_flex_align_t)

返回值:
undefined

-----

### setGridDscArray (obj:[Obj](../Obj), col_dsc:const int32_t*, row_dsc:const int32_t*)

> 该方法是对 LVGL C API `lv_obj_set_grid_dsc_array()` 的包装

参数:

* obj: [Obj](../Obj)

* col_dsc: const int32_t*

* row_dsc: const int32_t*

返回值:
undefined

-----

### setGridAlign (obj:[Obj](../Obj), column_align:string, row_align:string)

> 该方法是对 LVGL C API `lv_obj_set_grid_align()` 的包装

参数:

* obj: [Obj](../Obj)

* column_align: [lv_grid_align_t](../const/#lv_grid_align_t)

* row_align: [lv_grid_align_t](../const/#lv_grid_align_t)

返回值:
undefined

-----

### setGridCell (obj:[Obj](../Obj), column_align:string, col_pos:number, col_span:number, row_align:string, row_pos:number, row_span:number)

> 该方法是对 LVGL C API `lv_obj_set_grid_cell()` 的包装

参数:

* obj: [Obj](../Obj)

* column_align: [lv_grid_align_t](../const/#lv_grid_align_t)

* col_pos: number

* col_span: number

* row_align: [lv_grid_align_t](../const/#lv_grid_align_t)

* row_pos: number

* row_span: number

返回值:
undefined

-----

### bindFlagIfEq (obj:[Obj](../Obj), subject:lv_subject_t *, flag:string, ref_value:number)

> 该方法是对 LVGL C API `lv_obj_bind_flag_if_eq()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* flag: [lv_obj_flag_t](../const/#lv_obj_flag_t)

* ref_value: number

返回值:
lv_observer_t *

-----

### bindFlagIfNotEq (obj:[Obj](../Obj), subject:lv_subject_t *, flag:string, ref_value:number)

> 该方法是对 LVGL C API `lv_obj_bind_flag_if_not_eq()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* flag: [lv_obj_flag_t](../const/#lv_obj_flag_t)

* ref_value: number

返回值:
lv_observer_t *

-----

### bindStateIfEq (obj:[Obj](../Obj), subject:lv_subject_t *, state:string, ref_value:number)

> 该方法是对 LVGL C API `lv_obj_bind_state_if_eq()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* state: [lv_state_t](../const/#lv_state_t)

* ref_value: number

返回值:
lv_observer_t *

-----

### bindStateIfNotEq (obj:[Obj](../Obj), subject:lv_subject_t *, state:string, ref_value:number)

> 该方法是对 LVGL C API `lv_obj_bind_state_if_not_eq()` 的包装

参数:

* obj: [Obj](../Obj)

* subject: lv_subject_t *

* state: [lv_state_t](../const/#lv_state_t)

* ref_value: number

返回值:
lv_observer_t *


