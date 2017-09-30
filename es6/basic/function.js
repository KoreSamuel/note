// function foo(x, x, y = 1) {} // Duplicate parameter name not allowed in this context
// 在使用参数默认值时，函数不能有同名参数
function foo(x, x, y) {} // 不报错

(function (a) {}).length; // 1
(function (a = 3) {}).length; // 0
(function (a, b, c = 5) {}).length; // 2


// 所以当函数有参数默认值的时候,length 返回的是函数参数的个数减去指定了默认值的参数的个数
// 如果设置了默认值的参数不是尾参数，那么length的值也不会在计入后面的参数
// rest参数后也不能有其他参数，否则报错，且length不包括rest参数
(function (a = 0, b, c) {}).length;// 0
(function (a, b= 0, c) {}).length; // 1
(function (a, ...b) {}).length; // 1


// 作用域
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域
// 等到初始化结束，这个作用域就会消失，在不设置参数默认值的时候是不会出现的

let x = 1;
let f = (x, y = x) => {
    console.log(y);
};
f(2);// 2
// 上面函数中，参数y的默认值时等于x，调用函数的时候，参数形成了一个单独的作用域
// 这个作用域里面，y指向第一个参数x，而不是全局的x

let ff = (y = x) => {
    let x = 2;
    console.log(y);
};
ff();// 1
// 上面函数中，参数y = x形成一个单独的作用域，这个作用域里面，x本身是没有定义的
// 所以指向外层全局变量x,函数调用的时候，函数体内的局部变量x不影响默认变量x
// 当全局变量x不存在的时候就会报错 x is not defined

const fff = (x, y = () => {x = 2;}) => {
    var x = 3;
    y();
    console.log(x);
};
fff();// 3
console.log(x); // 1
// fff函数参数形成一个单独的作用域，在作用域里面首先声明变量x，然后声明变量y
// y的默认值是一个匿名函数，函数内部变量x指向参数形成的作用域的x
// 而fff里面又声明变量x，但是与参数形成的作用域里的x不是同一个作用域，所以不是同一个变量
// 所以执行y之后，内部变量x和全局变量x都没变

// 去掉fff内部的var x = 3 改为 x= 3之后
const ffff = (x, y = () => {x = 2;}) => {
    x = 3;
    y();
    console.log(x);
};
ffff(); //2
console.log(x); // 1 
// 这时候fff函数内的x指向的是参数作用域内的x，与参数里面的匿名函数内部的x是一致的
// 所以fff内先将x赋值为3，执行y之后将x赋值为2，所以输出为2，但是不影响全局x

// 箭头函数
// 不可以当做构造函数，即不能使用new
// 函数体内的this对象，是定义时所在的对象，而不是使用时所在的对象

// 尾递归

const factorial = n => {
    return n === 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));// 120
// 上面函数复杂度O(n)
// 如果改成尾递归
const factorials = (n, total = 1) => {
    return n === 1 ? total : factorials(n - 1, total * n);
};
console.log(factorials(5)); // 120
