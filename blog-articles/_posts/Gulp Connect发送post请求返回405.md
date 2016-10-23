title: Gulp Connect发送post请求返回405
date: 2016-4-10 21:29:57
categories: 积累
toc: false
tags: gulp
comments: true
---
## 问题

在使用`gulp`过程中，遇到了在使用gulp-connect启动服务的时候，发送ajax请求不能发送post，返回错误:
<!-- more -->
```
405 Method Not Allowed
```
## 解决

通过自定义一个中间件来完成`POST`、`PUT`、`DELETE` 请求。
首先，引入`fs`、`path`和`connect`

```
    var fs = require('fs'),
    path = require('path'),
    connect = require('gulp-connect');
```

接着，在配置中增加自己的中间件。

```
gulp.task('server',function(){
    connect.server({
        middleware: function(connect, options) {
        return [
            function(req, res, next) {
                var filepath = path.join(options.root, req.url);
                if ('POSTPUTDELETE'.indexOf(req.method.toUpperCase()) > -1
                    && fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
                    return res.end(fs.readFileSync(filepath));
                }
                return next();
               }
            ];
        },
        hostname: '127.0.0.1',
        port: 8090,
        livereload: true
    });
});
```

## References
[让 Gulp Connect 支持 POST、PUT、DELETE 请求](http://cweili.gitcafe.io/gulp-connect-post-put-delete/)
