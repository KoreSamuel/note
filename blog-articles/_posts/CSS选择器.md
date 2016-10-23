title: CSS选择器
date: 2015-05-26 13:17:00
categories: 学习笔记
tags: CSS
comments: true
---
 ## 层次选择器

- `$("body > div")`   body中子元素中的div
- `$("#one + div")`   id为one的下一个紧挨着的div(兄弟)
- `$("#two ~ div")`   id为two的后面的所有div(兄弟)
<!-- more -->
拓展
- `$("#one").sibling("div")`  id为one的所有div兄弟元素
- `$("#one").nextAll("span")`  id为one的后面所有span元素
- `$("#one").prevAll("div")`  id为one的前面的所有的div
- `$("#one").nextAll("span:first")`  id为one的后面所有span元素的第一个

## 过滤选择器：以":"开头

- `$("div:first")` 第一个div
- `$("div:last")`   最后一个div
- `$("div:not(.one)")`  class不为one的div
- `$("div:even")` 索引值偶数div
- `$("div:odd")`   索引值奇数div
- `$("div:gt(3)")`   索引值大于3的div
- `$("div:eq(3)")`   索引值等于3的div
- `$("div:lt(3)")`   索引值小于3的div
- `$("li:gt(1):lt(4)")`  不是第2个到第5个，而是在第二个的基础上增加4
- `$(":header")`  所有的标题元素
- `$(":animated")` 正在执行动画的所有元素

## 内容过滤选择器

- `$("div:contains('ss')")`   文本含有ss的div元素
- `$("div:empty")`   文本为空的div元素
- `$("div:has(.mini)")`  含有class为mini的所有div元素
- `$(div:parent)或者$("div:not(:empty)")` 所有非空的div元素

## 可见性过滤选择器

- `$("div:visible")` 所有可见的div
- `$("div:hidden").show(time)`  所有不可见的div元素显示，time为时间，单位为毫秒
- `$("input:hidden").val()`   所有不可见的input元素的value

## 属性过滤选择器

- `$("div:[title]")`  含有属性title的div元素
- `$("div:[title=='test']")` title属性等于test的div元素
- `$("div:[title!='test']")` title属性不等于test的div元素，包括没有title属性的元素
- `$("div:[title^='te']")`  title属性以te开始的div元素
- `$("div:[title$='est']")`  title属性以est结束的div元素
- `$("div:[title*='es']")`   title属性值含有es的div元素
- `$("div:[id][title*='es']")`  有id属性的div元素中的title属性值中含有es的div元素
- `$("div:[title][title!='test']")`  含有title属性，且title属性值不为test的div元素

## 子元素过滤选择器（冒号前面有个空格，选取子元素需要在选取器前加空格）

- `$(".one :nth-child(2)")`  class为one的第二个子元素，不是索引值为2
- `$(".one :first-child")`   class为one的第一个子元素
- `$(".one :last-child")`    class为one的最后一个子元素
- `$(".one :only-child")`    class为one的只有一个节点的节点元素
- `$("div.one :nth-child(2)")`   class为one的第二个div子元素

## 表单对象属性过滤选择器

- `$(":text:enabled").val("hello")`  使所有可用的单行文本框的value值变为hello
- `$(":text:disabled").val("hello")`   设置所有不可用单行文本框value值为hello
- `$(":checkbox[name='haha']:checked").length`    多选框name为haha的被选中的个数
- `$("select :selected").length`   select的option子节点，冒号前加空格，下拉选择框的选中的长度
- `$("select :selected").val()`   因为$("select :selected")选中的是一个数组，当有多个元素时，.val()获取的是第一个选中的值。
