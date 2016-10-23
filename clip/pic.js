/*2015年5月18日23:45:05*/
document.onselectstart=new Function('event.returnValue=false;');
window.onload = function(){
	$("#main").draggable({ containment: 'parent' ,drag: setChoice});
	var mainDiv = document.getElementById("main");
	var rightDiv = document.getElementById("right");
	var topDiv = document.getElementById("top");
	var leftDiv = document.getElementById("left");
	var bottomDiv = document.getElementById("bottom");
	var topLeftDiv = document.getElementById("top-left");
	var topRightDiv = document.getElementById("top-right");
	var leftBottomDiv = document.getElementById("left-bottom");
	var rightBottomDiv = document.getElementById("right-bottom");
	var ifKeyDown = false;
	var contact = "";//按下的触点

	rightDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "right"
	}

	topDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "top";
	}

	leftDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "left";
	}

	bottomDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeyDown = true;
		contact = "bottom";
	}

	topLeftDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeyDown = true;
		contact = "topLeft";
	}

	topRightDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeyDown = true;
		contact = "topRight";
	}

	leftBottomDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeyDown = true;
		contact = "leftBottom";
	}

	rightBottomDiv.onmousedown = function(e) {
		e.stopPropagation();
		ifKeyDown = true;
		contact = "rightBottom";
	}

	window.onmouseup = function(){
		ifKeyDown = false;
	}

	window.onmousemove = function(e) {
		if(ifKeyDown == true){
			switch(contact){
				case "top":topMove(e);break;
				case "left":leftMove(e);break;
				case "right":rightMove(e);break;
				case "bottom":bottomMove(e);break;
				case "topLeft":topMove(e);leftMove(e);break;
				case "topRight":topMove(e);rightMove(e);break;
				case "leftBottom":leftMove(e);bottomMove(e);break;
				case "rightBottom":rightMove(e);bottomMove(e);break;
			}
		}
		setChoice();
		setPreview();
	}
	//右边
	function rightMove(e) {
		var x = e.clientX;//鼠标x位置
		var addWidth = "";//增加的宽度
		var widthBefore = mainDiv.offsetWidth - 2;
		addWidth = x - getElemPosition(mainDiv).left - widthBefore;
		mainDiv.style.width = addWidth + widthBefore + "px";
	}
	//上边
	function topMove(e) {
		var y = e.clientY;
		var mainY = getElemPosition(mainDiv).top;
		var addHeight = mainY - y;
		var heightBefore = mainDiv.offsetHeight - 2 ;
		mainDiv.style.height = heightBefore + addHeight + "px";		mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
	}
	//左边
	function leftMove(e) {
		var x = e.clientX;
		var widthBefore = mainDiv.offsetWidth - 2;
		var addWidth = getElemPosition(mainDiv).left - x;
		mainDiv.style.width = addWidth + widthBefore + "px";
		mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
	}
	//下边
	function bottomMove(e) {
	    var y = e.clientY;
		var heightBefore = mainDiv.offsetHeight - 2;
		var addHeight = y - getElemPosition(mainDiv).top - heightBefore;
		mainDiv.style.height = heightBefore + addHeight + "px";	
	}
	/**
	 *获取元素距离浏览器左上边界的长度
	 *@param node
	 *@return 元素距离浏览器左上边界的长度{"left":left,"top":top}
	 **/
	function getElemPosition(node) {
		var left = node.offsetLeft;
			var top = node.offsetTop;
			var parent = node.offsetParent;
			while(parent != null){
				left += parent.offsetLeft;
				top += parent.offsetTop;
				parent=parent.offsetParent;	
			}
			return {"left":left,"top":top};
	}
	//设置选中区域高亮
	function setChoice() {
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft +　mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var imgb = document.getElementById("imgb");
		imgb.style.clip = "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
	}
		//预览函数
	function setPreview(){
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft+mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop+mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var img3 = document.getElementById("img3");
		imgc.style.top = -top+"px";
		imgc.style.left = -left+"px";
		imgc.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";	
	}
}
