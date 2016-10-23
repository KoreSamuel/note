title: remove white space below image
date: 2015-10-20 18:23:18
tags: CSS
category: 前端积累
comments: true
---
最近遇到过关于`<img>`标签显示一张图片在一个`<div>`里面，`<div>`的宽高由`image`撑起。可是在图片的底部和`<div>`底部之间，多出神秘的2~3px的空白。如下图：
<!-- more -->
![have white space][1]
我知道`<img>`是个特殊的元素，为什么会出现这种现象？

## Reason

`<img>` 元素在默认情况下是inline元素，inline元素默认和父级元素的baseline对齐的，而baseline又和父级底边有一定距离，注意下面两段文字。
> Look at this line of text. Notice there are no letters that breach the baseline

另一段：
> By just crossing the bridge he probably got away.

注意比较上面两段文字中字母`y,j,p,g`,下图更形象的显示
![jQaJx][4]
因为浏览器提供空间低于inline元素来适应字体。这就是上面出现的白边。这不是CSS的padding或margin,所以开发中不容易发现。

## Solution

- 给`<img>`元素设置`display:block`
- 给`<img>`元素设置`vertical-align:bottom`或者`vertical-align:top`
- 给`<img>`元素设置`font-size:0; vertical-align:middle;`
- 给`<div>`元素设置`line-height:0`
- 给`<div>`元素设置`font-size:0`
- 给`<img>`元素设置`vertical-align:text-bottom`

以上最后一条效果并不好，设置后仍有1px的白边，如下图：
![1px white space][3]
而正常处理后是没有白边的，如下图：
![no white space][2]

## Code source

[源码与在线演示](http://runjs.cn/code/eozhsutb)

## References

- [Mystery white space underneath image tag](http://stackoverflow.com/questions/31444891/mystery-white-space-underneath-image-tag/31445364#31445364)
- [How to Remove the Space Below Images and Other Inline-Block Elements](http://salman-w.blogspot.com/2012/10/remove-space-below-images-and-inline-block-elements.html)
- [Remove white space below image](http://stackoverflow.com/questions/7774814/remove-white-space-below-image)


[1]: http://7xjp74.com1.z0.glb.clouddn.com/1.JPG
[2]: http://7xjp74.com1.z0.glb.clouddn.com/2.JPG
[3]: http://7xjp74.com1.z0.glb.clouddn.com/3.JPG
[4]: http://7xjp74.com1.z0.glb.clouddn.com/jQaJx.png

_欢迎补充_
