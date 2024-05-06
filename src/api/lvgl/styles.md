
# 样式

调用 Obj.style() 和 Obj.setStyle() 方法来获取和设置样式。

## 示例

```javascript
import * as lv from 'lv'

let obj = lv.Obj( lv.screen() )

// 对象类型参数，设置多个样式
obj.setStyle({
    "border-width": 1 ,                 // 边线宽
    "border-color": lv.color(255,0,0) , // 边线颜色
    "border-opa": 255 ,                 // 边线不透明度
})
// 设置单个样式
obj.setStyle("width","100%")

console.log( "height: ", obj.style("height") )
```


## 样式属性

### **width** (num)
 Sets the width of object. Pixel, percentage and `LV_SIZE_CONTENT` values can be used. Percentage values are relative to the width of the parent's content area.

### **min-width** (num)
 Sets a minimal width. Pixel and percentage values can be used. Percentage values are relative to the width of the parent's content area.

### **max-width** (num)
 Sets a maximal width. Pixel and percentage values can be used. Percentage values are relative to the width of the parent's content area.

### **height** (num)
 Sets the height of object. Pixel, percentage and `LV_SIZE_CONTENT` can be used. Percentage values are relative to the height of the parent's content area.

### **min-height** (num)
 Sets a minimal height. Pixel and percentage values can be used. Percentage values are relative to the width of the parent's content area.

### **max-height** (num)
 Sets a maximal height. Pixel and percentage values can be used. Percentage values are relative to the height of the parent's content area.

### **length** (num)
 Its meaning depends on the type of the widget. For example in case of lv_scale it means the length of the ticks.

### **x** (num)
 Set the X coordinate of the object considering the set `align`. Pixel and percentage values can be used. Percentage values are relative to the width of the parent's content area.

### **y** (num)
 Set the Y coordinate of the object considering the set `align`. Pixel and percentage values can be used. Percentage values are relative to the height of the parent's content area.

### **align** (num)
 Set the alignment which tells from which point of the parent the X and Y coordinates should be interpreted. The possible values are: `LV_ALIGN_DEFAULT`, `LV_ALIGN_TOP_LEFT/MID/RIGHT`, `LV_ALIGN_BOTTOM_LEFT/MID/RIGHT`, `LV_ALIGN_LEFT/RIGHT_MID`, `LV_ALIGN_CENTER`. `LV_ALIGN_DEFAULT` means `LV_ALIGN_TOP_LEFT` with LTR base direction and `LV_ALIGN_TOP_RIGHT` with RTL base direction.

### **transform-width** (num)
 Make the object wider on both sides with this value. Pixel and percentage (with `lv_pct(x)`) values can be used. Percentage values are relative to the object's width.

### **transform-height** (num)
 Make the object higher on both sides with this value. Pixel and percentage (with `lv_pct(x)`) values can be used. Percentage values are relative to the object's height.

### **translate-x** (num)
 Move the object with this value in X direction. Applied after layouts, aligns and other positioning. Pixel and percentage (with `lv_pct(x)`) values can be used. Percentage values are relative to the object's width.

### **translate-y** (num)
 Move the object with this value in Y direction. Applied after layouts, aligns and other positioning. Pixel and percentage (with `lv_pct(x)`) values can be used. Percentage values are relative to the object's height.

### **transform-scale-x** (num)
 Zoom an objects horizontally. The value 256 (or `LV_SCALE_NONE`) means normal size, 128 half size, 512 double size, and so on

### **transform-scale-y** (num)
 Zoom an objects vertically. The value 256 (or `LV_SCALE_NONE`) means normal size, 128 half size, 512 double size, and so on

### **transform-rotation** (num)
 Rotate an objects. The value is interpreted in 0.1 degree units. E.g. 450 means 45 deg.

### **transform-pivot-x** (num)
 Set the pivot point's X coordinate for transformations. Relative to the object's top left corner'

### **transform-pivot-y** (num)
 Set the pivot point's Y coordinate for transformations. Relative to the object's top left corner'

### **transform-skew-x** (num)
 Skew an object horizontally. The value is interpreted in 0.1 degree units. E.g. 450 means 45 deg.

### **transform-skew-y** (num)
 Skew an object vertically. The value is interpreted in 0.1 degree units. E.g. 450 means 45 deg.

### **pad-top** (num)
 Sets the padding on the top. It makes the content area smaller in this direction.

### **pad-bottom** (num)
 Sets the padding on the bottom. It makes the content area smaller in this direction.

### **pad-left** (num)
 Sets the padding on the left. It makes the content area smaller in this direction.

### **pad-right** (num)
 Sets the padding on the right. It makes the content area smaller in this direction.

### **pad-row** (num)
 Sets the padding between the rows. Used by the layouts.

### **pad-column** (num)
 Sets the padding between the columns. Used by the layouts.

### **margin-top** (num)
 Sets the margin on the top. The object will keep this space from its siblings in layouts. 

### **margin-bottom** (num)
 Sets the margin on the bottom. The object will keep this space from its siblings in layouts.

### **margin-left** (num)
 Sets the margin on the left. The object will keep this space from its siblings in layouts.

### **margin-right** (num)
 Sets the margin on the right. The object will keep this space from its siblings in layouts.

### **bg-color** (color)
 Set the background color of the object.

### **bg-opa** (num)
 Set the opacity of the background. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **bg-grad-color** (color)
 Set the gradient color of the background. Used only if `grad_dir` is not `LV_GRAD_DIR_NONE`

### **bg-grad-dir** (num)
 Set the direction of the gradient of the background. The possible values are `LV_GRAD_DIR_NONE/HOR/VER`.

### **bg-main-stop** (num)
 Set the point from which the background color should start for gradients. 0 means to top/left side, 255 the bottom/right side, 128 the center, and so on

### **bg-grad-stop** (num)
 Set the point from which the background's gradient color should start. 0 means to top/left side, 255 the bottom/right side, 128 the center, and so on

### **bg-main-opa** (num)
 Set the opacity of the first gradient color

### **bg-grad-opa** (num)
 Set the opacity of the second gradient color

### **bg-grad** (ptr)
 Set the gradient definition. The pointed instance must exist while the object is alive. NULL to disable. It wraps `BG_GRAD_COLOR`, `BG_GRAD_DIR`, `BG_MAIN_STOP` and `BG_GRAD_STOP` into one descriptor and allows creating gradients with more colors too. If it's set other gradient related properties will be ignored'

### **bg-image-src** (ptr)
 Set a background image. Can be a pointer to `lv_image_dsc_t`, a path to a file or an `LV_SYMBOL_...`

### **bg-image-opa** (num)
 Set the opacity of the background image. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **bg-image-recolor** (color)
 Set a color to mix to the background image.

### **bg-image-recolor-opa** (num)
 Set the intensity of background image recoloring. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means no mixing, 255, `LV_OPA_100` or `LV_OPA_COVER` means full recoloring, other values or LV_OPA_10, LV_OPA_20, etc are interpreted proportionally.

### **bg-image-tiled** (num)
 If enabled the background image will be tiled. The possible values are `true` or `false`.

### **border-color** (color)
 Set the color of the border

### **border-opa** (num)
 Set the opacity of the border. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **border-width** (num)
 Set the width of the border. Only pixel values can be used.

### **border-side** (num)
 Set only which side(s) the border should be drawn. The possible values are `LV_BORDER_SIDE_NONE/TOP/BOTTOM/LEFT/RIGHT/INTERNAL`. OR-ed values can be used as well, e.g. `LV_BORDER_SIDE_TOP | LV_BORDER_SIDE_LEFT`.

### **border-post** (num)
 Sets whether the border should be drawn before or after the children are drawn. `true`: after children, `false`: before children

### **outline-width** (num)
 Set the width of the outline in pixels. 

### **outline-color** (color)
 Set the color of the outline.

### **outline-opa** (num)
 Set the opacity of the outline. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **outline-pad** (num)
 Set the padding of the outline, i.e. the gap between object and the outline.

### **shadow-width** (num)
 Set the width of the shadow in pixels. The value should be >= 0.

### **shadow-offset-x** (num)
 Set an offset on the shadow in pixels in X direction. 

### **shadow-offset-y** (num)
 Set an offset on the shadow in pixels in Y direction. 

### **shadow-spread** (num)
 Make the shadow calculation to use a larger or smaller rectangle as base. The value can be in pixel to make the area larger/smaller

### **shadow-color** (color)
 Set the color of the shadow

### **shadow-opa** (num)
 Set the opacity of the shadow. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **image-opa** (num)
 Set the opacity of an image. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **image-recolor** (color)
 Set color to mixt to the image.

### **image-recolor-opa** (num)
 Set the intensity of the color mixing. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **line-width** (num)
 Set the width of the lines in pixel.

### **line-dash-width** (num)
 Set the width of dashes in pixel. Note that dash works only on horizontal and vertical lines

### **line-dash-gap** (num)
 Set the gap between dashes in pixel. Note that dash works only on horizontal and vertical lines

### **line-rounded** (num)
 Make the end points of the lines rounded. `true`: rounded, `false`: perpendicular line ending 

### **line-color** (color)
 Set the color of the lines.

### **line-opa** (num)
 Set the opacity of the lines.

### **arc-width** (num)
 Set the width (thickness) of the arcs in pixel.

### **arc-rounded** (num)
 Make the end points of the arcs rounded. `true`: rounded, `false`: perpendicular line ending 

### **arc-color** (color)
 Set the color of the arc.

### **arc-opa** (num)
 Set the opacity of the arcs.

### **arc-image-src** (ptr)
 Set an image from which the arc will be masked out. It's useful to display complex effects on the arcs. Can be a pointer to `lv_image_dsc_t` or a path to a file

### **text-color** (color)
 Sets the color of the text.

### **text-opa** (num)
 Set the opacity of the text. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **text-font** (ptr)
 Set the font of the text (a pointer `lv_font_t *`). 

### **text-letter-space** (num)
 Set the letter space in pixels

### **text-line-space** (num)
 Set the line space in pixels.

### **text-decor** (num)
 Set decoration for the text. The possible values are `LV_TEXT_DECOR_NONE/UNDERLINE/STRIKETHROUGH`. OR-ed values can be used as well.

### **text-align** (num)
 Set how to align the lines of the text. Note that it doesn't align the object itself, only the lines inside the object. The possible values are `LV_TEXT_ALIGN_LEFT/CENTER/RIGHT/AUTO`. `LV_TEXT_ALIGN_AUTO` detect the text base direction and uses left or right alignment accordingly

### **radius** (num)
 Set the radius on every corner. The value is interpreted in pixel (>= 0) or `LV_RADIUS_CIRCLE` for max. radius

### **clip-corner** (num)
 Enable to clip the overflowed content on the rounded corner. Can be `true` or `false`.

### **opa** (num)
 Scale down all opacity values of the object by this factor. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **opa-layered** (num)
 First draw the object on the layer, then scale down layer opacity factor. Value 0, `LV_OPA_0` or `LV_OPA_TRANSP` means fully transparent, 255, `LV_OPA_100` or `LV_OPA_COVER` means fully covering, other values or LV_OPA_10, LV_OPA_20, etc means semi transparency.

### **color-filter-dsc** (ptr)
 Mix a color to all colors of the object.

### **color-filter-opa** (num)
 The intensity of mixing of color filter.

### **anim** (ptr)
 The animation template for the object's animation. Should be a pointer to `lv_anim_t`. The animation parameters are widget specific, e.g. animation time could be the E.g. blink time of the cursor on the text area or scroll time of a roller. See the widgets' documentation to learn more.

### **anim-duration** (num)
 The animation duration in milliseconds. Its meaning is widget specific. E.g. blink time of the cursor on the text area or scroll time of a roller. See the widgets' documentation to learn more.

### **transition** (ptr)
 An initialized `lv_style_transition_dsc_t` to describe a transition.

### **blend-mode** (num)
 Describes how to blend the colors to the background. The possible values are `LV_BLEND_MODE_NORMAL/ADDITIVE/SUBTRACTIVE/MULTIPLY`

### **layout** (num)
 Set the layout if the object. The children will be repositioned and resized according to the policies set for the layout. For the possible values see the documentation of the layouts.

### **base-dir** (num)
 Set the base direction of the object. The possible values are `LV_BIDI_DIR_LTR/RTL/AUTO`.

### **flex-flow** (num)
 Defines in which direct the flex layout should arrange the children

### **flex-main-place** (num)
 Defines how to align the children in the direction of flex flow

### **flex-cross-place** (num)
 Defines how to align the children perpendicular to the direction of flex flow

### **flex-track-place** (num)
 Defines how to align the tracks of the flow

### **flex-grow** (num)
 Defines how mayn space to take proprtionally the free space of the object's trach

### **grid-column-dsc-array** (ptr)
 An array to describe the columns of the grid. Should be LV_GRID_TEMPLATE_LAST terminated

### **grid-column-align** (num)
 Defines how to distribute the columns

### **grid-row-dsc-array** (ptr)
 An array to describe the rows of the grid. Should be LV_GRID_TEMPLATE_LAST terminated

### **grid-row-align** (num)
 Defines how to distribute the rows.

### **grid-cell-column-pos** (num)
 Set the column in which the object should be placed

### **grid-cell-x-align** (num)
 Set how to align the object horizontally.

### **grid-cell-column-span** (num)
 Set how many columns the object should span. Needs to be >= 1

### **grid-cell-row-pos** (num)
 Set the row in which the object should be placed

### **grid-cell-y-align** (num)
 Set how to align the object vertically.

### **grid-cell-row-span** (num)
 Set how many rows the object should span. Needs to be >= 1


