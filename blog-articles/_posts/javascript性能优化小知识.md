title: javascript性能优化小知识
date: 2015-07-27 10:22:26
categories: 学习笔记
tags: [javascript,性能优化]
comments: true
---
前面有一篇也是关于`javascript`性能方面的文章，是看了[《高性能javascript》][1]后的笔记，这是一篇自己在项目和学习过程中的积累，部分参考了一些学习博客。对面试和代码的编写都有帮助。
<!-- more -->
### 避免全局查找

在一个函数中会用到全局对象存储为局部变量来减少全局查找，因为访问局部变量的速度要比访问全局变量的速度更快些。

### 字符串的连接

如果要连接多个字符串，应该少使用+=，如
s+=a;
s+=b;
s+=c;
应该写成s+=a + b + c；
而如果是收集字符串，比如多次对同一个字符串进行+=操作的话，最好使用一个缓存，使用`JavaScript`数组来收集，最后使用`join`方法连接起来。

### 数字转换成字符串

`("" +) > String() > .toString() > new String()`
字符串如'1322'转换成数字的时候可以在前面加'+',如`var str = '123';var num = +str`,那么`typeof num`为`number`

### 浮点数转换成整型

很多人喜欢使用`parseInt()`，其实`parseInt()`是用于将字符串转换成数字，而不是浮点数和整型之间的转换，我们应该使用`Math.floor()`或者`Math.round()`。

### 使用DocumentFragment优化多次append

一旦需要更新DOM,请考虑使用文档碎片来构建DOM结构，然后再将其添加到现存的文档中。

```
		for (var i = 0; i < 1000; i++) {
            var el = document.createElement('p');
            el.innerHTML = i;
            document.body.appendChild(el);
        }       
         //可以替换为：
        var frag = document.createDocumentFragment();
            for (var i = 0; i < 1000; i++) {  
                var el = document.createElement('p');
            	el.innerHTML = i;
            	frag.appendChild(el);
        	}
        document.body.appendChild(frag);
```
### 使用一次innerHTML赋值代替构建dom元素

对于大的DOM更改，使用`innerHTML`要比使用标准的DOM方法创建同样的DOM结构快得多。

```
 		var frag = document.createDocumentFragment();
        for (var i = 0; i < 1000; i++) {
            var el = document.createElement('p');
            el.innerHTML = i;
            frag.appendChild(el);
        }
        document.body.appendChild(frag);
            //可以替换为：
        var html = [];
            for (var i = 0; i < 1000; i++) {
            html.push('<p>' + i + '</p>');
        }
        document.body.innerHTML = html.join('');
```

### 使用事件代理

任何可以冒泡的事件都不仅仅可以在事件目标上进行处理，目标的任何祖先节点上也能处理，使用这个知识就可以将事件处理程序附加到更高的地方负责多个目标的事件处理，同样，对于内容动态增加并且子节点都需要相同的事件处理函数的情况，可以把事件注册提到父节点上，这样就不需要为每个子节点注册事件监听了。另外，现有的js库都采用`observe`方式来创建事件监听,其实现上隔离了DOM对象和事件处理函数之间的循环引用,所以应该尽量采用这种方式来创建事件监听

### 缩短否定检测

```
    if (oTest != '#ff0000') {
        //do something
    }
    if (oTest != null) {
        //do something
    }
    if (oTest != false) {
        //do something
    }
        //虽然这些都正确，但用逻辑非操作符来操作也有同样的效果：
    if (!oTest) {
        //do something
    }
```

### 条件分支

将条件分支，按可能性顺序从高到低排列：可以减少解释器对条件的探测次数
在同一条件子的多（>2）条件分支时，使用`switch`优于`if`：`switch`分支选择的效率高于if，在IE下尤为明显。4分支的测试，IE下`switch`的执行时间约为if的一半。
使用三目运算符替代条件分支

```
 if (a > b) {
            num = a;
        } else {
            num = b;
        }        //可以替换为：
        num = a > b ? a : b;
```


_续。。。_

[1]:http://book.douban.com/subject/5362856/
