## API
通过设置 Button 的属性来产生不同的按钮样式，按钮的属性说明如下：

### Button

属性 | 说明 | 类型 | 可选值 | 默认值
----|----|----|----|----|----
size | 尺寸 | string | `small` `large` | -
type | 类型 | string | `primary` `dashed` `danger` | -
shape | 形状 | string | `round` `circle` | -
htmlType | 原生类型 | string | `submit` `reset` `button` | -
disabled | 不可用 | boolean | `true` `false` | `false`
icon | 左侧的图标 | string | 所有的图标名称 | -
iconRight | 右侧的图标 | string | 所有的图标名称 | -
onClick | 点击事件 | React.MouseEventHandler | - | -

### Button.Group
按钮组合的属性会覆盖其中所有按钮的同名属性
属性 | 说明 | 类型 | 可选值 | 默认值
----|----|----|----|----|----
size | 尺寸 | string | `small` `large` | -
type | 类型 | string | `primary` `dashed` `danger` | -
shape | 形状 | string | `round` `circle` | -
disabled | 不可用 | boolean | `true` `false` | `false`
