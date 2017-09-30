// 只要某种数据结构具有iterator接口，都可以采用解构赋值
let [a, b, c] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];
// head:1
// tail:[2, 3, 4]
// 如果解构赋值不成功，则会赋值为undefined

function* fibs() {
    let a = 0;
    let b = 1;
    while (1) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();

console.log(sixth);

const zeroArr = '1'.repeat(5);

console.log(zeroArr); // '11111'

// 扩展运算符...

console.log(...[1, 3, 4]); // 1 3 4 

// es5
Math.max.apply(null, [1, 3, 5, 6]);// 6
// es6
Math.max(...[1, 3, 5, 6]);// 6

// Array.from()
// 将两类对象转为真正的数组: 类似数组对象(array-like)和可遍历(iterable)对象

const arraylike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// es5
let arr1 = [].slice.call(arraylike);
// es6
let arr2 = Array.from(arraylike);

console.log(arr1, arr2)
// ['a', 'b', 'c'] ['a', 'b', 'c']

// 最常见的应用就是dom操作的NodeList和函数内部arguments对象

// Array.of()
// 将一组值转换成数组

let arrof = Array.of(1, 2, 3);
console.log(arrof); // [1, 2, 3]

// find() / findIndex()
// 找到第一个符合条件的数组成员，如果没有符合条件的，则返回undefined / -1;
// 和filter不同，filter是返回符合条件的一个数组

console.log([1, 3, -5, 3, -3].find((x) => x < 0));// -5
console.log([1, 5, 10, 15].findIndex((x) => x > 9)); // 2


