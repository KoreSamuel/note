title: 高性能JavaScript
date: 2015-05-24 19:12:54
categories: 学习笔记
tags: [javascript,性能优化]
comments: true
---
## javascript加载和运行

### 脚本位置

尽管浏览器已经允许并行下载javascript文件，但是javascript下载过程仍然会阻塞其他资源的下载，如图片。页面仍然需要等待所有javascript代码下载并执行完成才能继续所以优化javascript的首要原则：将脚本放在底部（`</body>`之前)
<!-- more -->
### 组织脚本

每个`<script>`标签初始下载都会阻塞页面渲染，所以减少页面包含的`<script>`标签数量有助于改善这一情况。考虑到到HTTP请求会额外带来性能的开销。下载单个100B的文件比下载4个25B的文件更快。所以，减少页面中外链脚本文件的数量会改善性能。

<!--more-->

### 无阻塞的脚本

-  延迟的脚本：带有defer属性的`<script>`标签，需要浏览器支持
-  动态脚本元素:在跨浏览器兼容性和易用的优势，是最通用的无阻塞加载解决方案
-  XMLHttpRequest注入：先创建一个XHR对象，然后用她下载javascript文件，最后通过创建动态`<script>`元素将代码注入页面中

    ```
      var xhr = new XMLHttpRequest();
      xhr.open("get","file.js",true);
      xhr.onreadystatechange = funtion(){
           if(xhr.readyState == 4){
                if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                     var script = document.creatElement("script");
                     script.type="text/javascript";
                     script.text=xhr.responseText;
                     document.body.appendChild(script);
                     }
                }    
      };
      xhr.send(null);
      //由于代码是在<script>标签之前返回的，因此它下载后不会自动执行。
      //同样的代码在所有主流浏览器中无一例外都能正常工作
      //局限性在于：javascript文件必须与请求的页面处于相同的域，即javascript不能从CDN下载
    ```

### 无阻塞脚本加载工具

lazyLoad类库、LABjs等等

##管理作用域

### 作用域链和标识符解析

在函数执行的过程中，没遇到一个变量，都会经历一次标识符解析过程以决定从哪里获取或存储数据。该过程搜索运行期上下文的作用域链，查找同名的标识符。搜索过程从作用域链头部开始也就是当前运行函数的活动对象，如果找到了，就使用这个标示符对应的变量；如果没有找到，继续搜索作用域链中的下一个对象，直到标识符被找到，或者没有可用于搜索的对象为止，这种情况下标识符被认为是未定义的。正是这个搜索过程影响了性能。

### 标识符解析的性能

一个标识符所在的位置越深，他的读写速度就越慢，因此读写局部变量总是最快的，而读写全局变量通常是最慢的。全局变量总是存在于运行期上下文作用域链的最末端，因此是最远的。在没有优化javascript引擎的浏览器中，尽量使用局部变量，如果某个跨作用域的值在函数中被引用了多次，就把他存储到局部变量里。

  ```
function initUI() {
  var doc = document,
      bd = doc.body,
      links = doc.getElementByTagName('a');
  var i = 0,
      len = links.length;
  while (i < len) {
      update(links[i++]);
  }
  doc.getElementById('btn').onclick = function() {
      start();
  };
     bd.className = 'active'
}
    //首先将document对象引用存储到局部变量doc中，全局变量的访问减少，当有很多全局变量
    //被反复访问时，这种方法对性能的改善是很明显的。
  ```


### 闭包，作用域和内存

将常用的跨作用域变量存储在局部变量中，然后访问局部变量嵌套的对象成员会明显影响性能，尽量少用
通常来说，把常用的对象成员、数组元素、跨域变量保存在局部变量中来改善javascript性能，因为局部变量访问速度更快。

DOM

```
    function initHtml1(){
         for(var i = 0;i<15000;i++){
         document.getElementById('here').innerHTML+='a';
         }
    }
    function initHtml2(){
         var html = "";
         for(var i=0;i<15000;i++){
         html+='a';
         }
         document.getElementById('here').innerHTML = html;
    }
```

initHtml1()比initHtml2()速度慢很多，initHtml2()使用局部变量存储更新后的内容，减少了DOM访问，因此，减少DOM访问次数，讲运算尽量留在ECMAScript这端处理。
