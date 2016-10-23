title: Show 'Search' button in iPhone/iPad Safari keyboard
date: 2016-10-23 17:36:09
categories: 学习笔记
tags: CSS
comments: true
---

## 问题描述

点击搜索框的时候，需要将软键盘的`return` `go` `前往` 按键文案变成 `搜索`或 `search`，并且点击的时候发起搜索。
<!-- more -->
实现方式是将`input`框`type` 设置成 `search`，并在外层套一个`form`，在一般浏览器如QQ浏览器，uc浏览器等上能将软键盘显示成`搜索`,但是在safari浏览器上并不能正常将软键盘文案改变。

## 解决办法

在`form`上设置`action`,并将其值设置成`.`,但是需要控制在搜索的时候应将表单默认行为拦截，`form`上添加`return false`即可。

## 源代码
```html
<!-- 搜索框 -->
<form class="search-top" action=".">
    <div class="search-wrap">
        <input type="search" name='key' id='search-input' placeholder="keyword..." autocapitalize="off" autocomplete="off" autocorrect="off" >
        <span class="search"><i class="icon-search"></i></span>
        <i class="icon-reset reset"></i>
     </div>
     <div class="cancel-btn">取消</div>
</form>
```
```javascript
$('.search-top').on('submit', function (e) {
    var text = $('#search-input').val().trim();
    text && that.emit.emit('search', text);
    return false;
});
```


## reference

> [Show 'Search' button in iPhone/iPad Safari keyboard](http://stackoverflow.com/questions/4864167/show-search-button-in-iphone-ipad-safari-keyboard)
