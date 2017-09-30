const bar = (y = 2, x = y) => {
    return [x, y];
};

console.log(bar());

// tdz(暂时性死区):只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

const PI = 3.1415;

// PI = 3;

// const 保证的并不是变量的值不变，二是变量指向的内存地址不能变，所以对于复合类型的数据（数组、对象）就要非常小心了

const foo = {
    name: 'xiaojie'
}; //{name: 'xiaojie'}

foo.name = 'he'; // ''he

// 指向的地址不可变，当指向一个新的对象的时候，就指向新的地址
foo = {}; // error

