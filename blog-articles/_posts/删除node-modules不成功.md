title: 删除node_modules不成功
date: 2015-11-23 19:11:31
tags: nodejs
categories: 积累
comments: true
---
## Question

> Windows做Node.js开发的你或许碰到过无法删除node_modules文件夹的情况,如下图：
<!-- more -->
![failed](http://7xjp74.com1.z0.glb.clouddn.com/failed.png)

## Reason

windows 在文件目录的长度有限制，因为node packages 有众多dependencies，每一个dependency又有其他的dependency，这些dependency或许还有其他的dependency，所以导致node_modules有超级复杂的文件目录。比如：
> D:\codetest\node_modules\edpx-mobile\node_modules\edp-webserver\node_modules\babel\node_modules\chokidar\node_modules\anymatch\node_modules

## Solution

### install

> npm install -g rimraf

### delete

> rimraf node_modules

_亲测有效_
