/*
 * learnyounode
 * @from https://github.com/workshopper/learnyounode
 * @date 2017-4-13 18:06:59                                               
   ─────────────────────────────────────────────────────────────────────────  
   » 你好，世界                                                       [完成]  
   » 婴儿学步                                                         [完成]  
   » 第一个 I/O！                                                     [完成]  
   » 第一个异步 I/O！                                                 [完成]  
   » LS 过滤器                                                        [完成]  
   » 使其模块化                                                       [完成]  
   » HTTP 客户端                                                      [完成]  
   » HTTP 收集器                                                      [完成]  
   » 玩转异步                                                         [完成]  
   » 授时服务器                                                       [完成]  
   » HTTP 文件服务器                                                  [完成]  
   » HTTP 大写转换器                                                  [完成]  
   » HTTP JSON API 服务器                                             [完成]  
   ─────────────────────────────────────────────────────────────────────────                                                                      
                                   
 */

// 1.--------------------------
console.log('HELLO WORLD');

// 2.----------------------------
var numArr = process.argv.slice(2);
var sum = numArr.reduce(function(a, b) {
 return (+a) + (+b);
}, 0);

console.log(sum);

// 3.----------------------------------------
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var content = file.toString();
var num = content.split('\n').length;
console.log(num == 0 ? num : num - 1);

// 4.----------------------------------
var fs = require('fs');
var file = fs.readFile(process.argv[2], function (err, data) {
 if (!err) {
     console.log(data.toString().split('\n').length - 1);
 }
 else {
     throw err;
 }
})

// 5.----------------------------
var fs = require('fs');
var path = require('path');
var paths = process.argv[2];
var extname = process.argv[3];


fs.readdir(paths, function (err, list) {
 if (err) {
     throw err
 }
 else {
     var arr = list.filter(function(item) {
         return path.extname(item) === ('.' + extname);
     });
     console.log(arr.join('\n'));
 }
})

// 6.----------------------------
var fs = require('fs');
var path = require('path');
function filterExtname(paths, extname, callback) {
    fs.readdir(paths, function (err, list) {
        if (err) {
            return callback(err);
        }
        else {
            var arr = list.filter(function(item) {
                return path.extname(item) === ('.' + extname);
            });
            callback(null, arr);
        }
    })
}
module.exports = filterExtname;
// ------------- index.js ---------
var paths = process.argv[2];
var extname = process.argv[3];
var filterExtname = require('./program');
filterExtname(paths, extname, function (err, data) {
    if (err) {
        throw err;
    }
    else {
        console.log(data.join('\n'));
    }
});

// 7.------------------------------------
var http = require('http');
var url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    })
})

// 8.-------------------------------------
var http = require('http');
var url = process.argv[2];
var content = [];
http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        content.push(data);
    });
    response.on('end', function () {
        var str = content.join('')
        console.log(str.length);
        console.log(str)
    })
})

// 9. --------------------------------------
var http = require('http');
var isEnd = [0, 0, 0];
var content = [[], [], []];

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        content[0].push(data);
    });
    response.on('end', function () {
        isEnd[0] = 1;
        if (isEnd[0] && isEnd[1] && isEnd[2]) {
            console.log(content[0].join(''));
            console.log(content[1].join(''));
            console.log(content[2].join(''))
        }
    })
});
http.get(process.argv[3], function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        content[1].push(data);
    });
    response.on('end', function () {
        isEnd[1] = 1;
        if (isEnd[0] && isEnd[1] && isEnd[2]) {
            console.log(content[0].join(''));
            console.log(content[1].join(''));
            console.log(content[2].join(''))
        }
    })
});
http.get(process.argv[4], function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        content[2].push(data);
    });
    response.on('end', function () {
        isEnd[2] = 1;
        if (isEnd[0] && isEnd[1] && isEnd[2]) {
            console.log(content[0].join(''));
            console.log(content[1].join(''));
            console.log(content[2].join(''))
        }
    })
});

// 10. ------------------------------------------
var net = require('net');
var port = +process.argv[2];

var server = net.createServer(function (s) {
    var time = formatDate()
    s.end(time + '\n');
});
server.listen(port);

function formatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    var day = date.getDate < 10 ? '0' + date.getDate() : date.getDate();
    var hour = date.getHours < 10 ? '0' + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}

// 11.----------------------------------------------
var http = require('http');
var fs = require('fs');
var port = +process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    fs.createReadStream(path).pipe(res);
});
server.listen(port);

// 12.----------------------------------------------------
var map = require('through2-map');
var http = require('http');
var server = http.createServer(function (req, res) {
    req.method === 'POST' && req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)
});
server.listen(+process.argv[2]);

// 13.------------------------------------------------------
var http = require('http');
var url  = require('url');

var server = http.createServer(function (req, res) {
    var rst = {};
    res.writeHead(200, {'Content-Type': 'application/json'});
    var urlObj = url.parse(req.url, true);
    var query = urlObj.query;
    if (urlObj.pathname === '/api/parsetime') {
        var date = new Date(query.iso);
        rst.hour = date.getHours();
        rst.minute = date.getMinutes();
        rst.second = date.getSeconds();
    }
    else if (urlObj.pathname === '/api/unixtime') {
        var date = new Date(query.iso).getTime();
        rst = {unixtime: date}
    }
    res.write(JSON.stringify(rst));
    res.end();
});
server.listen(+process.argv[2])