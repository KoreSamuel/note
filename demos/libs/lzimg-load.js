window.lzimg = (function(window, document) {
    'use strict';

    var Lzimg = function(ele) {
        this.ele = ele;
        this.render();
        this.listen();
    };

    var imgList = [];

    Lzimg.prototype = {
        init: function() {
            imgList.push(this.ele);
        },
        render: function() {
            document.addEventListener
                ? document.addEventListener('DOMContentLoaded', lzImages, false)
                : (window.onload = lzImages);
        },
        listen: function() {
            window.onscroll = lzImages;
        }
    };


    var intoViewer = function(ele) {
        var pos = ele.getBoundingClientRect();
        return ((pos.top >= 0 && pos.left >= 0 && pos.top) <= (window.innerHeight || document.documentElement.clientHeight));
    };

    var replaceSrc = function(img, cb) {
        img.src = img.getAttribute('data-lzimg');
        cb && cb();
    };

    var removeLoaded = function(ele, index) {
        if (imgList.indexOf(ele) > -1) {
            imgList.splice(index, 1);
        }
    };

    var lzImages = function() {
        for (var i = 0; i < imgList.length; ) {
            var cur = imgList[i];
            if (intoViewer(cur)) {
                replaceSrc(cur, removeLoaded(cur, i));
                continue;
            }
            i++;
        }
    };

    var lzNodes = document.querySelectorAll('img[data-lzimg]');
    for (var i = 0, len = lzNodes.length; i < len; i++) {
        new Lzimg(lzNodes[i]).init();
    }
})(window, document);
