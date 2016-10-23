/**
 * @file 身份证校验算法
 * @author xiaojie(xiaojie0617@gmail.com)
 */

// @see: http://zh.wikisource.org/zh/GB_11643-1999_%E5%85%AC%E6%B0%91%E8%BA%AB%E4%BB%BD%E5%8F%B7%E7%A0%81
var checkers = {
    CHECK_CODE_MAP: {
        '0': '1',
        '1': '0',
        '2': 'X',
        '3': '9',
        '4': '8',
        '5': '7',
        '6': '6',
        '7': '5',
        '8': '4',
        '9': '3',
        '10': '2'
    },
    getW: function (i) {
        return Math.pow(2, i - 1) % 11;
    },
    checkIdentity: function (source) {
        if (!/^\d{17}[\dxX]$/.test(source)) {
            return false;
        }
        var sum = 0;
        // [1, 18)
        for (var i = 0; i < 17; i++) {
            // 加权因子
            var w = this.getW(18 - i);
            // 号码字符
            var a = +source.charAt(i);
            sum += a * w;
        }
        var mod = sum % 11;
        var expectCheckCode = this.CHECK_CODE_MAP[mod].toLowerCase();
        var realCheckCode = source.charAt(17).toLowerCase();
        return expectCheckCode === realCheckCode;
    }
}