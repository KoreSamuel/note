/**
 * @file expressworks.js
 * @from https://github.com/azat-co/expressworks
 * @list
 » 你好，世界！                                    [完成]
 » 静态文件                                        [完成]
 » ?zh-cn.exercise.PUG?                            [完成]
 » 传统的表单                                      [完成]
 » 漂亮的 CSS                                      [完成]
 » 参数 啪啪啪                                     [完成]
 » 网址的问好后面是什么                            [完成]
 » 给我 JSON                                       [完成]
 * @date 2017-4-14 17:59:32
 * @author xiaojie6170@gmail.com
 */
// 1.----------------------------------
var express = require('express');

var app = express();
app.get('/home', function (req, res) {
    res.end('Hello World!');
});

app.listen(+process.argv[2]);

// 2. -----------------------------------------
var express = require('express');
var path    = require('path');
var app     = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(+process.argv[2])

// 3. ------------------------------------------
var express = require('express');
var path    = require('path');

var app     = express();
app.set('views', path.join(__dirname, 'templates'));// or process.argv[3]
app.set('view engine', 'pug');
app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()});
});
app.listen(+process.argv[2]);

// 4.-----------------------------------------------
var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});
app.listen(+process.argv[2])

// 5. ------------------------------------------------
var express = require('express');
var path = require('path');
var app = express();
app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.listen(+process.argv[2]);

// 6. -----------------------------------------------
var express = require('express');
var app = express();

app.put('/message/:id', function (req, res) {
    res.send(require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
});

// app.listen(+process.argv[2]);

// 7. ---------------------------------------------------
var express = require('express');
var app = express();

app.get('/search', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var params = req.query;
    res.end(JSON.stringify(params));
});

app.listen(+process.argv[2]);

// 8. -------------------------------------------------------
var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        var rst = '';
        if (err) {
            throw err;
        }
        else {
            rst = JSON.parse(data);
        }
        res.json(rst);
    })
});
app.listen(+process.argv[2]);