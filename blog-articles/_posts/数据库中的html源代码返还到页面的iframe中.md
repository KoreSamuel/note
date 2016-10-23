title: 数据库中的html源代码返还到页面的iframe中
date: 2015-05-26 12:49:56
categories: 前端积累
toc: false
tags: [iframe,html]
comments: true
---

思路：先将源代码返回到父页面的一个隐藏的`<textarea>`中，再在`<iframe>`的src的链接页面中用js获取`<textarea>`中的文本，即HTML源码，然后直接显示。注：`<iframe>`是其嵌入页面的子页面
<!-- more -->
## **父页面**
	```
	<html>
    <head>
    <title>test</title>
    <script type="text/javascript">
         window.onload=function(){
         //要显示的页面html，先放到父页面的隐藏框中
         var html = "<html><body><a href="B.html?word=escape(哈哈)">点击</a></body></html>";
         document.getElementById("htmltext").text = html;
         }
    </script>
    </head>
    <body>
    <textarea rows="5" cols="10" name="htmltext" style="display: none;" id="htmltext"></textarea>
    <iframe id="iframes" width="1200px" height="500px" src="1.html"></iframe>
    </body>
    </html>
    ```

## **1.html文件**
	```
    <script type="text/javascript">
         window.onload=function(){
              setTimeout(fun,500);//为了是数据先加载到父页面上，所以本页面延迟加载
         }
         function fun(){
              var html = parent.document.getElementById("htmltext").value;
              document.write(html); //把获取的html代码直接放到本页面上。
         }
    </script>
    ```
