title: 'CSS伪元素::after提示用法'
date: 2015-09-05 19:40:37
categories: 前端积累
tags: CSS
comments: true
---
## 概述

CSS伪元素::after用来匹配已选中元素的一个虚拟的最后子元素，通常会配合content属性来为该元素添加装饰内容.这个虚拟元素默认是行内元素
<!-- more -->
## 语法

> `element:after  { style properties }`  /* CSS2 语法 */
`element::after { style properties }`  /* CSS3 语法 */

`::after`表示法是在CSS 3中引入的,::符号是用来区分伪类和伪元素的.支持CSS3的浏览器同时也都支持CSS2中引入的表示法`:after`.

##例子

用`::after`伪元素，[attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)CSS表达式和一个[自定义数据属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) `data-descr` 创建一个纯CSS, 词汇表提示工具

```
<body>
	<p>这是一段并没有什么用的
			<span data-descr='collection of words and punctuation'>文字</span>
			，完全是为了凑数才出现的文字，实现一个
			<span data-descr='small popups which also hide again'>提示</span>
			功能，可以吧鼠标放上去
			<span data-descr='not to be taken literrlly'>看看</span>
	</p>
</body>
```
```
 span[data-descr] {
        position: relative;
        text-decoration: underline;
        color: #00F;
        cursor: help;
    }
    span[data-descr]:hover::after {
      content: attr(data-descr);
      position: absolute;
      left: 0;
      top: 24px;
      min-width: 200px;
      border: 1px #aaaaaa solid;
      border-radius: 10px;
      background-color: #ffffcc;
      padding: 12px;
      color: #000000;
      font-size: 14px;
      z-index: 1;
    }
```
[在线演示](http://runjs.cn/code/hkmnji2p)

## 效果图

![css-after][1]
## 浏览器兼容性

![兼容性][2]
## References

- [::after (:after)](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Aafter)

[1]: http://7xjp74.com1.z0.glb.clouddn.com/css%20after.png
[2]: http://7xjp74.com1.z0.glb.clouddn.com/table.png
