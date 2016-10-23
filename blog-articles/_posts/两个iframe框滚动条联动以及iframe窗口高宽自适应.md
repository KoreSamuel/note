title: 两个iframe框滚动条联动以及iframe窗口高宽自适应
date: 2015-05-25 20:03:05
category: 前端积累
toc: false
comments: true
tags: [iframe,scroll]
---

由于iframe没有onsccoll方法，所以采用把iframe放进固定大小且带有滑动条的div中，然后先给iframe一个适合的宽度，页面加载后再让iframe窗口自适应src链接的页面。
<!-- more -->

   ```
   <div id="div1"  style="width:620px;height:500px ; float:left;overflow:scroll" onscroll="funcsrcoll1()">
   	   <iframe name="left" id="left" scrolling="no" width="600px" height="500px" src="2.html"></iframe>
   </div>
   <div id="div2" style="width:620px; height:500px ;float:left;overflow:scroll" onscroll="funcsrcoll2()">
   	<iframe name="right" id="right" scrolling="no" width="600px" height="500px" src="3.html"></iframe>
   </div>
   <script>
   	//控制两个div的滚动条联动，便于页面对比
   	function funcsrcoll1()
   	  {
   	      div2.scrollLeft = div1.scrollLeft;
   	      div2.scrollTop = div1.scrollTop;
   	  }
   	function funcsrcoll2()
   	  {
   	      div1.scrollLeft = div2.scrollLeft;
   	      div1.scrollTop = div2.scrollTop;
   	  }
   	  //调整iframe窗口大小适应src链接的页面
   	  function func(){
   	  $('iframe').each(function(){
   	      this.style.height = this.contentWindow.document.body.scrollHeight+20 + 'px';
   	        //为了显示完整，额外加了20px的宽度
   	      this.style.width = this.contentWindow.document.body.scrollWidth+20 + 'px';
   	  });    
   	}
   </script>
   ```
