## API

### Row

属性 | 说明 | 类型 | 可选值 | 默认值
----|----|----|----|----|----
justify | 排列方式 | string | `start` `end` `space-between` `space-around` `center` | `start`
align | 对齐方式 | string | `top` `middle` `bottom` | `top`
gutter | 栅格间隔，通过传入包含xs, sm, md, lg, xl, xxl的对象设置响应式 | number/Object | - | 0

### Col
按钮组合的属性会覆盖其中所有按钮的同名属性
属性 | 说明 | 类型 | 可选值 | 默认值
----|----|----|----|----|----
span | 占位格数 | string | `1` ~ `24` | `24`
offset | 左侧间隔格数 | string | `1` ~ `24` | `0`
order | 栅格顺序 | string | `1` ~ `24` | -
xs | `[0, 576px)`响应式栅格,可以为span值或包含span, offset, order属性的对象 | string/object | 同上述属性 | -
sm | `[576px, 768px)`响应式栅格,可以为span值或包含span, offset, order属性的对象 | string/object | 同上述属性 | -
md | `[768px, 992px)`响应式栅格,可以为span值或包含span, offset, order属性的对象 | string/object | 同上述属性 | -
lg | `[992px, 1200px)`响应式栅格,可以为span值或包含span, offset, order属性的对象 | string/object | 同上述属性 | -
xl | `[1200px, 1600px)`响应式栅格,可以为span值或包含span, offset, order属性的对象 | string/object | 同上述属性 | -

### 响应式说明
当前屏幕对应的响应式缺省时会使用更大一级的响应式，直到值存在或者直接使用组件的属性。