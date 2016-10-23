title: jQuery常用方法归纳
date: 2015-06-27 01:16:35
categories: 前端积累
tags: [web前端,jQuery]
description: "jquery常用方法的归纳总结，不过随着jquery版本的升级，有的方法已经有新的实现方式"
comments: true
---

# $.grep()
```
    $.grep( array, function(elementOfArray, indexInArray) [, invert ] )
```

功能：查找满足过滤函数的数组元素：

```
<script src="js/jquery1.42.min.js"></script>
    <script type="text/javascript">
        $(function () {
            var arr = [23,45,5,1,4,67,8,100,-2];
            var arrGrep = $.grep(arr, function (element,index) {
                return (index<5)&&(element != 4);//整体返回一个数组
            })
            alert(arrGrep);//23,45,5,1
        })
 </script>
```

# $.map()

```
    $.map( array, callback(elementOfArray, indexInArray) )
```

功能：将一个数组中的所有元素转换到另一个数组中。

```
    <script src="js/jquery1.42.min.js"></script>
    <script type="text/javascript">
        $(function () {
            var arr = [5,1,4,67,8,100,-2];
            var arrMap = $.map(arr, function (element,index) {
                //  return (index<3)&&(element != 4);这里按布尔值返回
                if(index<3 && element< 4){
                    return element;
                }
            });
            alert(arrMap);//1
        })
    </script>
    ```

# mouseover()/mouserout()

当鼠标进入/离开某个元素或它的后代元素时触发`mouseover/mouseout`事件。
`mouseover`事件大多数时候会与 `mouseout` 事件一起使用。

`mouseover/mouserout`事件由于冒泡机制，经常在不需要的时候不小心触发，从而导致一些脚本问题。

# mouseenter()/mouseleave()

mouseenter/mouseleave当且仅当鼠标进入被选元素时才触发，当鼠标穿过任何子元素时不会触发。它不关心目标元素是否有子元素。

# focusin()和focusout()

`.focusin()`：一个元素或它的子元素得到焦点时触发此事件
`.focusout()`：一个元素或它的子元素失去焦点时触发此事件

与 `focus()` 方法不同的是，`focusin()` 方法在任意子元素获得焦点时也会触发。

```
    <body>
        <p><input type="text"> <span>focusin fire</span></p>
        <p><input type="password"> <span>focusin fire</span></p>
        <script>
        $( "p" ).focusin(function() {
            $( this ).find( "span" ).css( "display", "inline" ).fadeOut( 1000 );
        });
        </script>
    </body>
```

# eq()和get()

`.get()`： 通过jQuery对象获取一个对应的DOM元素。
`.eq()`：从集合的一个元素中构造新的jQuery对象

`eq`返回的是一个jQuery对象，`get`返回的是一个DOM对象。举个例子：

```
    $( "li" ).get( 0 ).css("color", "red"); //错误
    $( "li" ).eq( 0 ).css("color", "red"); //正确
```
那么，什么是DOM对象，什么又是jQuery对象呢？

DOM对象就是用js获得的对象，而juqery对象是用jQuery类库的选择器获得的对象。

如：
```
    var $obj = $("div");//jQuery对象
```

`get`方法本质上是把jQuery对象转换成DOM对象，但是css属于jQuery构造器的，DOM是不存在这个方法的，如果需要用jQuery的方法，我们必须这样写：
```
    var li = $("li").get(0);
    $(li).css("color","black");//用$包装
    filter()
```
`filter()`方法:筛选出与指定表达式匹配的元素集合。
这个方法用于缩小匹配的范围。用逗号分隔多个表达式。

`filter(expression)`：（字符串|函数）如果参数是字符串，则制定jQuery选择器，用于从包装集里删除所有与选择器不匹配的元素，最后留下与选择器匹配的元素；如果参数是函数，则用于确定筛选条件。为包装集里的每一个元素各调用一次该函数，函数调用返回值为false的任何元素都会从包装集里删除。

以下代码意为：保留第一个以及带有select类的元素

HTML 代码:
```
    <p>Hello</p><p>Hello Again</p><p class="selected">And Again</p>
```
jQuery 代码:
```
    $("p").filter(".selected, :first");
    ```
结果:
```
    <p>Hello</p>, <p class="selected">And Again</p>
 ```

再看一个function的例子，一个函数用来作为测试元素的集合。它接受一个参数index，这是元素在jQuery集合的索引。在函数， `this`指的是当前的DOM元素。

HTML 代码:

```
    <p><ol><li>Hello</li></ol></p><p>How are you?</p>
```
jQuery 代码:
```
    $("p").filter(function(index) {
        return $("ol", this).length == 0;
    });
```
结果:
```
    <p>How are you?</p>  
```

# .bind()、.live()和.delegate()方法

`.bind()`：绑定事件处理函数的最基本方式是使用`.bind()`方法。它和`live()`方法一样，接受两个参数：

`.bind(event type, event handler)`
两种绑定事件处理函数的方法：

```
    $(document).ready(function(){
        $('.mydiv').bind('click',test);
        function test(){
            alert("￼Hello World!");
            }
        });
```

事件处理函数也可以使用匿名函数，如下所示：

```
    $(document).ready(function(){
        $("#mydiv").bind("click",function(){
            alert("￼Hello World!");
        })
    });
```

`.live()`：`live`方法和`bind`方法的唯一区别在于`.live()`不仅作用于DOM中当前存在的元素，还作用于将来可能存在（动态生成）的元素
```
    $(document).ready(function(){
    $('.box').live('click',function(){
            $(this).clone().appendTo('.container');
        });
    });
    <div class="container">
        <div class="box"></div>
    </div>
```

使用`live`方法绑定事件的缺点在于它无法使用链式调用，那有没有既可以像`live`方法那样绑定事件，又可以支持链式调用的方法呢？答案就是下面的`delegate`方法。

`delegate()`方法：为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，
并规定当这些事件发生时运行的函数。从jQuery 1.7开始，`.delegate()`已经被`.on()`方法取代。
语法：

 `$(selector).delegate(childSelector,event type,function)`
参数说明：

`childSelector` 必需。规定要附加事件处理程序的一个或多个子元素。

`event` 必需。规定附加到元素的一个或多个事件。由空格分隔多个事件值。必须是有效的事件。

`function` 必需。规定当事件发生时运行的函数。
```
    $(document).ready(function(){
        $('.container').delegate('.box','click',function(){
            $(this).clone().appendTo('.container');
        });
    });
    ```
`delegate()`会在以下两个情况下使用到：

1、如果你有一个父元素，需要给其下的子元素添加事件，这时你可以使用`delegate()`了，代码如下：
```
    $("ul").delegate("li", "click", function(){
        $(this).hide();
     });
     ```
2、当元素在当前页面中不可用时，可以使用`delegate()`

`end()`方法

 `end()`方法：在jquery命令链内调用，以便退回到前一个包装集。
每次过滤方法都会被压入栈中。当我们需要返回到前一个状态时，我们可以使用`end()` 进行出栈操作，来返回栈中的前一个状态。

`end()` 方法结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态。
```
    <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title></title>
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
    </head>
    <body>
    <ul class="one">
    <li class="two">item 1</li>
    <li>item 2</li>
    <li class="three">item 3</li>
    </ul>

    <script type="text/javascript">
    $('ul.one').find(".two").css("color","red").find('.three').css("background","blue");
    </script>
```

在上面的代码例子中，我们只会看到item 1的字体颜色改变了，而背景颜色没有改变。这是因为
第二个`find()`方法之前的状态返回的是红色字体的`class`值为`two`的对象，因此，第二次`find()`只会查找`<ul class="one">` 中的`.two`，使用`end()`方法修改该链式操作的代码如下：
```
    <script type="text/javascript">
        $('ul.one').find(".two").css("color","red").end().find('.three').css("background","blue");
    </script>
    ```
`end()`方法在这里是 返回调用 `find()` 之前的状态，也就是`$('ul.one')`

# toggleClass()

`toggleClass()`方法：如果在元素中指定类名称不存在，则添加指定类名称；如果元素已经拥有指定类名称，则从元素中删除指定类名称。
`css(name,value)`方法：设定指定的值到每个已匹配元素的指定的css样式属性


# wrap()和wrapInner()

`wrap()和wrapInner()`：前者把所有匹配的元素用其他元素的结构化标记包裹起来；
后者将每一个匹配的元素的子内容(包括文本节点)用一个HTML结构包裹起来。
看下面一个`wrap()`的例子：
用原先div的内容作为新div的class，并将每一个元素包裹起来

HTML 代码:
```
    <div class="container">
    <div class="inner">Hello</div>
    <div class="inner">Goodbye</div>
    </div>
    ```
jQuery 代码:
```
    $('.inner').wrap(function() {
        return '<div class="' + $(this).text() + '" />';
     });
     ```
结果:
```
    <div class="container">
        <div class="Hello">
            <div class="inner">Hello</div>
        </div>
        <div class="Goodbye">
            <div class="inner">Goodbye</div>
        </div>
    </div>
    ```
接着再看下面一个`wrapInner()`的例子:

用原先div的内容作为新div的class，并将每一个元素包裹起来

HTML 代码:
```
    <div class="container">
        <div class="inner">Hello</div>
        <div class="inner">Goodbye</div>
    </div>
```
jQuery 代码:
```
    $('.inner').wrapInner(function() {
        return '<div class="' + $(this).text() + '" />';
    });
```
结果:
```
    <div class="container">
        <div class="inner">
            <div class="Hello">Hello</div>
        </div>
        <div class="inner">
            <div class="Goodbye">Goodbye</div>
        </div>
    </div>
```
# detach、empty和remove方法

`.detach( [selector ] )`：从DOM中去掉所有匹配的元素。当需要移走一个元素，不久又将该元素插入DOM时，就需要用到detach方法。

`.empty()`：这个方法不仅移除子元素（和其他后代元素），同样移除元素里的文本。因为，根据说明，元素里任何文本字符串都被看做是该元素的子节点。

`.remove( [selector ] )`：将元素从DOM中移除，同时移除元素上的事件及 jQuery 数据

`empty()`的例子：
```
    <ul class="one">
        <li class="two">item 1</li>
        <li>item 2</li>
        <li class="three">item 3</li>
        </ul>
        <script type="text/javascript">
            $(".two").empty();//item 1 文本节点被移除，li的小圆点还在，证明li没有被移除
        </script>
```
看下面一个`remove()`例子：

描述：从DOM中把所有段落删除

HTML 代码:
```
    <p>Hello</p> how are <p>you?</p>
```
jQuery 代码:
```
    $("p").remove();
```
结果:
```
    how are
```
# val()方法

`val()`：获得匹配元素的当前值。
描述:获取文本框中的值

jQuery 代码:
```
    $("input").val();
```
jQuery 代码:
```
    $("input").val("hello world!");
```
# each()和map()

`each()`和`map()`方法：`each`返回的是原来的数组，并不会新创建一个数组。而map方法会返回一个
新的数组。如果在没有必要的情况下使用map，则有可能造成内存浪费。
## each方法：

定义一个空数组，通过each方法，往数组添加ID值；最后将数组转换成字符串后，alert这个值；
```
    $(function(){
        var arr = [];
        $(":checkbox").each(function(index){
            arr.push(this.id);
        });
        var str = arr.join(",");
        alert(str);
    })
```
## map方法:

将每个`:checkbox`执行`return this.id`；并将这些返回值，自动的保存为jQuery对象，然后用get方法将其转换成原生Javascript数组，再使用join方法转换成字符串，最后alert这个值；
```
    $(function(){
        var str = $(":checkbox").map(function() {
            return this.id;
        }).get().join();    
        alert(str);
    })
```
当有需一个数组的值的时候，用map方法，很方便。


## $.each()

jQuery的`$(selector).each()`函数可以遍历循环选中的子元素，而jQuery的$.each()函数则可以遍历任何集合，包括对象和数组，它接收要遍历的集合以及一个回调函数，回调函数每次传递一个数组的下标和这个下标所对应的数组的值。

`$.each(array,callback);`

`$.each(object,callback);`
## 数组实例
```
    $.each( [ "one", "two", "three" ], function( i, l ){
        alert( "index #" + i + ": " + l );
    });
    ```
`callback`(索引,索引值)
DEMO：
```
    index 0: one
    index 1: two;
    index 2: three
```

## 对象实例

```
    $.each({ name: "trigkit4", lang: "JS" }, function( k, v ) {
        alert( "Key: " + k + ", Value: " + v );
    });
    ```
`callback`(键,值)

Demo:
```
    Key: name, Value: trigkit4
    Key: lang, Value: JS
    ```
# .trigger()

描述: 根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。

当相应的事件发生时，任何通过.on()、.bind()或一个快捷方法绑定的事件处理程序将被触发。但是，它们可以用.trigger()方法手动触发
```
    <script type="text/javascript">
        $(document).bind('abc',function(){
            console.log('hello');
    });
    $(document).trigger('abc');
    //Output  'hello';
    </script>
```
# .attr()和.prop()

`.attr()`：获取匹配的元素集合中的第一个元素的属性的值 或 设置每一个匹配元素的一个或多个属性。

`.prop()`：同上
jQuery 1.6之前 ，`.attr()`方法在取某些 `attribute` 的值时，会返回 `property` 的值，这就导致了结果的不一致。从 jQuery 1.6 开始， `.prop()`方法 方法返回 `property` 的值,而 `.attr()` 方法返回 `attributes` 的值。

例如, `selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked`, 和 `defaultSelected` 应使用`.prop()`方法进行取值或赋值。

他们没有相应的属性（`attributes`），只有特性(`property`)。

# .after()和.insertAfter()

## .after()

描述:
在所有段落中后插入一个jQuery对象(类似于一个DOM元素数组)。

HTML 代码:
```
    <b>Hello</b><p>I would like to say: </p>
    ```
jQuery 代码:
```
    $("p").after( $("b") );
```
结果:
```
    <p>I would like to say: </p><b>Hello</b>
    ```


## insertAfter()

描述:
把所有段落插入到一个元素之后。与 $("#foo").after("p")相同

HTML 代码:

```
    <p>I would like to say: </p><div id="foo">Hello</div>
    ```
jQuery 代码:

```
    $("p").insertAfter("#foo");
    ```
结果:

```
    <div id="foo">Hello</div><p>I would like to say: </p>
    ```


# .before()和.insertBefore()

## before()

描述:
在所有段落中前插入一个jQuery对象(类似于一个DOM元素数组)。

HTML 代码:

```
    <p>I would like to say: </p><b>Hello</b>
```
jQuery 代码:

```
    $("p").before( $("b") );
```
结果:

```
    <b>Hello</b><p>I would like to say: </p>
    ```


# .append()和.appendTo()

## append()

描述：向所有段落中追加一些HTML标记。

HTML 代码:

```
    <p>I would like to say: </p>
    ```
jQuery 代码:

```
    $("p").append("<b>Hello</b>");
    ```
结果:

 ```
    <p>I would like to say: <b>Hello</b></p>
    ```


## appendTo()

描述：新建段落追加div中并加上一个class

HTML 代码:
```
    <div></div><div></div>
```
jQuery 代码:
```
    $("<p/>")
        .appendTo("div")
        .addClass("test")
        .end()
        .addClass("test2");
        ```
结果:
```
    <div><p class="test test2"></p></div>
    <div><p class="test"></p></div>
```

# .prepend()和.prependTo()

## prepend()

描述：向所有段落中前置一个jQuery对象(类似于一个DOM元素数组)。

HTML 代码:

```
    <p>I would like to say: </p><b>Hello</b>
    ````

jQuery 代码:

```
    $("p").prepend( $("b") );
    ```
结果:

```
    <p><b>Hello</b>I would like to say: </p>
    ```


## prependTo()

描述：把所有段落追加到ID值为foo的元素中。

HTML 代码:

```
    <p>I would like to say: </p><div id="foo"></div>
    ```
jQuery 代码:

```
    $("p").prependTo("#foo");
    ```
结果:

```
    <div id="foo"><p>I would like to say: </p></div>
    ```


# 总结
```
    1. .insertAfter()和.after()：在现存元素的外部，从后面插入元素  
    2. .insertBefore()和.before()：在现存元素的外部，从前面插入元素  
    3. .appendTo()和.append()：在现存元素的内部，从后面插入元素  
    4. .prependTo()和.prepend()  ：在现存元素的内部，从前面插入元素
```
# .data( key, value )

`.data() `方法允许我们在DOM元素上绑定任意类型的数据,

```
    $("div").data("test", { first: 16, last: "pizza!" });
    ```
# .promise( [type ] [, target ] )

在 `Javascript` 中，有外一种异步处理模式被叫做 `Promises`， `CommonJS` 标准委员会于是发布了一个规范，就把这个 `API` 叫做 `Promises` 了。

`Promise` 背后的概念非常简单，有两部分:

`Deferreds`，定义工作单元，
`Promises`，从 `Deferreds` 返回的数据。
`Promise` 不同于回调的很重要的一个点是，你可以在 `Promise` 状态变成执行(`resolved`)之后追加处理句柄。这就允许你传输数据，而忽略它是否已经被应用获取，然后缓存它，等等之类的操作，因此你可以对数据执行操作，而不管它是否已经或者即将可用。

你可以给一个 `promise` 追加多个处理(`then()`)。`Promise API` 好玩的地方在于允许链式处理:
```
    <!-- lang: js -->
    promise
        .then(doSomething)
        .then(doSomethingElse)
        .then(doSomethingMore)
        .catch(logError);
  ```
  _原文见_：[trigkit4](http://segmentfault.com/a/1190000000660257)
