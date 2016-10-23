/**
 * 链接相关工具函数
 * @example 获取URL参数
 * UrlUtils.getUrlParameter(window.location.href, 'query');
 * @example 替换URL参数，query存在替换，不存在url中添加query=svn
 * UrlUtils.replaceUrlParameter(window.location.href, 'query', 'svn');
 */
define(function (require, exports, module) {
	var UrlUtils = {
		getUrlParameter: function (url, parameter) {
			var reg = new RegExp('(^|&)'+ parameter + '=([^&]*)(&|$)');
			var r = url.substr(url.indexOf('\?')+1).match(reg);
			
			if (r != null) {
				return unescape(r[2]);
			}
			return null;
		},
		replaceUrlParameter: function (url, parameter, value) {
			var reg = new RegExp('(^|)' + parameter + '=([^&]*)(|$)');
			var tmp = parameter + '=' + value;
			
			if (url.match(reg) != null) {
				return url.replace(eval(reg), tmp);
			} else {
				if (url.match('[\?]')) {
					return url + '&' + tmp;
				} else {
					return url+ '?' + tmp;
				}
			}
		}
	};

	module.exports = UrlUtils;
});