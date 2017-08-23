// function asyncFunction() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('Async Hello World');
//     }, 16);
//   });
// }

// asyncFunction()
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

function getURL(URL) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}

var URL = 'https://api.github.com/users/swust-xiaoj';
getURL(URL)
    .then(function(rst) {
        console.log(rst);
    })
    .catch(function(error) {
        console.error(error);
    });

// ## Promise.resolve 将传递给它的参数填充(filfilled) 到 promise 对象后并返回这个 promise 对象
// new Promise() ===> Promise.resolve()

Promise.resolve(110).then(function(value) {
    console.log(value); // 42
});
// same to -->
new Promise(function(resolve) {
    resolve(110);
});

// Promise.resolve 还可以将 thenable 对象转换为 promise 对象
// $.ajax() 返回的就是一个 thenable 对象
var promise = Promise.resolve($.ajax('xxx.json'));
promise.then(function(value) {
    console.log(value);
});

// Promise.all
// Promise.all接收一个promise对象的数组为参数，当数组里的所有promise对象全部变成resolve或者reject的状态的时候，才会去调用then方法，所有的Promise同步执行
// Promise.race参数痛Promise.all，不同在于只要有一个promise状态为resolve或reject，就会继续后面的处理
