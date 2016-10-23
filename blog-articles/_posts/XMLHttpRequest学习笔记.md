title: XMLHttpRequest学习笔记
date: 2015-05-29 17:16:54
categories: 学习笔记
toc: false
tags: [XMLHttpRequest]
comments: true
---

对于xhr的学习后的一个例子
<!-- more -->
```
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>first</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    </head>
    <body>
        <button id="btn">请求数据</button>
        <div id="myDiv">
            <table class="table table-bordered table-condensed">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>title</th>
                        <th>author</th>
                        <th>year</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody id="mytbody"></tbody>
            </table>
            <p>getAllResponseHeaders()</p>
            <p id="pp"></p>
            <p>getResponseHeader("Last-Modified")</p>
            <p id="ppp"></p>
        </div>
        <script type="text/javascript" src="js/jquery-1.7.2.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript">
            function loadXHR() {
                var XHR;
                if (window.XMLHttpRequest) {
                    XHR = new XMLHttpRequest();
                } else {
                    XHR = new ActiveXObject("Microsoft.XMLHTTP");
                }
                XHR.open("GET", "./text/books.xml", true);
                //通过 XML HTTP 加载 XML 文件
                XHR.send();
                XHR.onreadystatechange = function() {
                    if (XHR.readyState == 4 && XHR.status == 200) {
                    // 4 = "loaded" 200 = “OK”
                        var xmlDoc = XHR.responseXML;
                        var txt = "<tr>";
                        var x = xmlDoc.getElementsByTagName("book");
                        for (var i = 0; i < x.length; i++) {
                        //把 XML 文件显示为 HTML 表格
                            txt += "<td>" + i + "</td>";
                            xx = x[i].getElementsByTagName("title");
                            txt += "<td>" + xx[0].childNodes[0].nodeValue + "</td>";
                            xx = x[i].getElementsByTagName("author");
                            txt += "<td>" + xx[0].childNodes[0].nodeValue + "</td>";
                            xx = x[i].getElementsByTagName("year");
                            txt += "<td>" + xx[0].childNodes[0].nodeValue + "</td>";
                            xx = x[i].getElementsByTagName("price");
                            txt += "<td>" + xx[0].childNodes[0].nodeValue
                                    + "</td></tr>";
                        }
                        document.getElementById("mytbody").innerHTML = txt;
                        //通过 XML HTTP 进行一次 HEAD 请求
                        document.getElementById("pp").innerHTML = XHR.getAllResponseHeaders();
                        //通过 XML HTTP 进行一次指定的 HEAD 请求
                        document.getElementById("ppp").innerHTML = XHR.getResponseHeader("Last-Modified");
                    }
                }
            }
            document.getElementById("btn").onclick = function() {
                loadXHR();
            }
        </script>
    </body>
    </html>
    //books.xml
        <?xml version="1.0" encoding="UTF-8"?>
    <bookstore>
    	<book category="children">
    		<title lang="en">Harry Potter</title>
    		<author>J K. Rowling</author>
    		<year>2005</year>
    		<price>29.99</price>
    	</book>
    	<book category="cooking">
    		<title lang="en">Everyday Italian</title>
    		<author>Giada De Laurentiis</author>
    		<year>2005</year>
    		<price>30.00</price>
    	</book>
    	<book category="web" cover="paperback">
    		<title lang="en">Learning XML</title>
    		<author>Erik T. Ray</author>
    		<year>2003</year>
    		<price>39.95</price>
    	</book>
    	<book category="web">
    		<title lang="en">XQuery Kick Start</title>
    		<author>James McGovern</author>
    		<author>Per Bothner</author>
    		<author>Kurt Cagle</author>
    		<author>James Linn</author>
    		<author>Vaidyanathan Nagarajan</author>
    		<year>2003</year>
    		<price>49.99</price>
    	</book>
    </bookstore>
```
