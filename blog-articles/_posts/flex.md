flexbox:不知道视窗大小或者位置元素的情况下可以智能的、灵活的调整和分配元素和空间两者之间的关系

```
// 显示声明，将父元素变成一个flex容器(flex container)，则子元素编程flex项目(flex items)
display: flex;
display: inline-flex;
```

##flex container容器属性

`flex-direction| flex-wrap| flex-flow| justify-content| align-items| align-content`

### flex-direction

控制flex项目沿主轴(Main Axis)的排列方向,默认主轴正方向`row`

`flex-direction: row | column | row-reverse | column-reverse;`

### flex-wrap

控制flex项目换行行为，默认`nowrap`不换行

`flex-wrap: wrap | nowrap | wrap-reverse`

- `wrap-reverse`改变行的位置，不改变行内item的位置

### flex-flow

是 `flex-direction` 和 `flex-wrap` 的速记属性，分别在第一第二个位置

`flex-flow: row wrap | 其他组合`

### justify-content

定义 `flex items` 在`Main Axis`上的对齐方式，默认`flex-start`

`justify-content: flex-start(左对齐) | flex-end(右对齐) | center(居中) | space-between(两端对齐) | space-around(让每个flex item 具有相同空间)`

- `space-between` 让除了第一个和最后一个`flex item` 的两者间间距相同，`Main-Axis`首末两个`flex item` 贴紧 `flex container` 边缘
- `space-around` 让每个`flex item` 具有相同的空间，首末两个`flex item` 距 `Main Axis` 边缘是其他相邻 `flex item`间距的一半

### align-items

`align-items: flex-start(顶部对齐) | flex-end(底部对齐) | center(居中对齐) | stretch(拉伸，item和container一样高) | baseline(基线对齐)`
控制`flex item`在`Cross Axis`对齐方式，也就是垂直方向，默认值`stretch`

### align-content

`align-content: flex-start(顶部对齐) | flex-end(底部对齐) | center(居中对齐) | stretch(拉伸，沿Cross Axis适应container可用空间)`

控制多行的`flex container`的排列方式，效果和`align-items`值一样，除了`baseline`值

## flex item项目属性

`order | flex-grow | flex-shrink | flex-basis`

### order

·`flex item`重新排序，默认为`0`，可以接受一个正值，也可以接受负值
如果有相同`order`值，基于`html`源文件位置排序

### flex-grow(扩展) 和 flex-shrink(收缩)

控制`flex item`在`container`有多余的空间如何放大(扩展)，在没有额外空间又如何缩小。接受大于等于`0`的数，`flex-grow`默认为0(关闭),`flex-shrink`默认为1(打开)

### flex-basic

指定`flex item` 的初始大小，也就是调整缩放、扩展前的大小，默认值是`auto`(基于内容大小)，可以取任何用于`width`属性的值，取值为`0`的时候也需要带单位如`px`

### flex速记

`flex`是`flex-grow、flex-shrink、flex-basic`三个属性的简写
默认为`flex: 0 1 auto`

#### flex: 0 0 auto

相当于`flex: none`宽度自动计算，不会伸展或者收缩
基本是一个固定宽度的元素，初始宽度基于内容大小
缩放浏览器，`flex item` 不会收缩，而是从`container`中突出

#### flex: 1 1 auto

相当于`flex: auto`宽度自动计算，有必要的时候伸展或收缩适应整个可用宽度

#### flex: positive number

取任何正数的时候，相当于`felx: 正数 1 0`，将初始宽度设置为0(根据flex-grow值得比例计算)，伸展以填满可用空间，有必要的时候收缩
`flex: 2 1 0 ` 相当于 `flex: 2`

### align-self

`align-self: auto | flex-start | flex-end | flex-end | center | baseline | stretch`

改变`flex item` 沿着`Cross-axis`(侧轴)的位置，不影响相邻`item`，默认为`auto`，取值和父元素`align-items`相同

## 绝对和相对flex

相对`flex item`内的间距是根据它的内容计算，绝对`flex item`只根据flex属性计算
一般`flex-basic`为`auto`时为相对`flex item`，只需将`flex-basic`设置成0，如`flex:1`就可以编程绝对`flex item`

## auto-margin对齐

当在`flex item`上使用`margin:auto`时，值为`auto`方向会占据所有剩余空间
这也可以看做一种自动外边距对齐的折中方案，但是当一个`flex item`使用自动外边距`margin:auto`时，`justify-content`属性就不起作用了



