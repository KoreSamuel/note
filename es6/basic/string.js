// 标签模板

console.log`123`;// 123 等同于console.log(123);

// 标签模板其实不是模板，二是函数调用的一种特殊形式，‘标签’指的就是函数，后面的模板字符串是它的参数

let a = 5;
let b = 10;

// tag`Hello ${ a + b} world ${ a * b}`;

// console.log(tag(['Hello', ' world', ''], 15, 50));

