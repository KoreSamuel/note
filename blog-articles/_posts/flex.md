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

