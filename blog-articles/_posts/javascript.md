基于对象调用 isNaN()函数时，会首先调用对象的 valueOf()方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用 toString()方法，再测试返回值
```
    isNaN({valueOf:() => 4}) // false
    isNaN({}) // true
    isNaN({toString: () => '4'}) // false
    isNaN({valueOf:() => 'notnumber', toString: () => '4'}) // true
```
Number() 与 + 相同
```
    Number(undefined) // NaN
    NUmber(null) // 0
    Number('') // 0
    Number('0011') // 11
    Number(true) // 1
    Number('0xf') // 15
    NUmber('hello') // NaN
```
如果是对象，则调用对象的 valueOf()方法，然后依照前面的规则转换返回的值。如果转换的结果是 NaN，则调用对象的 toString()方法，然后再次依照前面的规则转换返回的字符串值
parseInt()建议明确指定基数，默认10
```
    parseInt('123hehe') // 123
    parseInt('') // NaN
    parseInt('0xa') // 10
    parseInt(22.5) // 22
    parseInt('070') // 70 es5 parseInt不具有解析八进制能力
    parseInt('3.24e7') // 3
```

parseFloat() 只解析10进制

```
    parseFloat('0xa') // 0
    parseFloat('3.24e7') //32400000
```

字符串： 不可变
默认情况下，toString()方法以十进制格式返回数值的字符串表示
number, boolean, object, string都可以toString(),null, undefined 不能，可通过String()转换

object
toString()返回对象的字符串表示
valueOf()返回对象的字符串、数值、或布尔值，通常与toString()返回相同

操作符
在应用于对象时，相应的操作符通常都会调用对象的valueOf()和（或）toString()方法，已取得可以操作的值
前置递增递减操作与执行语句优先级相等，因此整个语句会从左到右被求值

乘法、除法、求模运算符
在操作数为非数值的情况下会执行自动的类型转换，先使用Number()转型函数将其转换成数值

加法
字符串 + 字符串 = 字符串
其他 + 字符串 = 字符串
数字 + 数字 = 数字
非字符串 + 数字： 会先将非字符串转换成数字或NaN
任何 + NaN = NaN

关系操作符
任何操作数与 NaN 进行关系比较，结果都是 false

相等操作符 == / !=  (比较前会进行类型转换)
boolean  其他  => 将boolean转换成数值
字符串  数值    => 字符串转换成数值
对象   其他     => 调用对象valueOf()方法，用得到的基本类型值比较
null == undefined  undefined 和 null 在比较相等性时，不能转换成其他任何值
有一个操作数是NaN，相等操作符返回false，不相等操作符返回true。即使两个操作数都是NaN,相等操作符返回false,NaN != NaN =>true

全等操作符 === / !== (操作数不进行类型转换)

我们不能给基本类型的值添加属性，尽管这样做不会导致任何错误。null, undefined, boolean, String, Number

ECMAScript 中所有函数的参数都是按值传递的

垃圾回收
- 标记清除
- 引用计数

基本类型值和引用类型值具有以下特点：
 基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
 从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；
 引用类型的值是对象，保存在堆内存中；
 包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；
 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象；
 确定一个值是哪种基本类型可以使用 typeof 操作符，而确定一个值是哪种引用类型可以使用instanceof 操作符。

引用类型

- object
众多引用类型都是object的实例

- 数组Array
迭代方法：每个方法都接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用对象——影响 this 的值。传入这些方法中的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身。
 every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
 filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
 forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
 map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
 some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
归并方法
reduce()
reduceRight()

- Date()

- RegExp()
后续看

- Function() 函数是对象，函数名是指针 
解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁。解析器会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）；至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行 

基本包装类型
```
var s1 = 'i am some text';
var s3 = s1.substring(3)
```
s1是个字符串，基本类型值，但是下一行调用了substring()保存，而基本类型值不是对象，逻辑上讲应该没有方法，所以后台会进行处理：
1、创建一个String类型的实例。2、在实例上调用指定的方法。3、销毁实例
上述步骤同样适用于boollean和Number类型对应的布尔值和数字值
> 使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁
所以s1.color = 'red';console.log(s1.color) // undefined
需要注意的是：var number = new Number('25')// 引用类型 和 var number = Number('25')// 基本类型
是不一样的，分别typeof为object 和 number

- Boolean

- Number
toString() 进制转换，默认10
toFixed()保留小数位数，标准范围0~20
toPrecision()返回有效数字位数

- String
1.字符方法 charAt(),charCodeAt()
2.字符串方法
concat(),连接字符串，可以接受任意多个参数
slice()
substring()大小无顺序，函数会取小的数字为开始位置
substr() 
需要注意的是，substr()第二个参数指定返回字符个数，当参数为负数时，slice将负值与字符长度相加，substr将负的第一个参数加上字符串长度，第二个为0，substring将负值都转换成0
3.trim()
4.replace()
5.fromCharCode()接受一个或多个字符编码，转换成一个字符串 eg:console.log(String.fromCharCode(104, 101, 108, 108, 111)) //'hello'
6.HTML方法
link(url) --> <a href='url'>string</a>
bold() --> <b>string</b>
......

单体内置对象
Global
encodeURI()除了空格其他字符不变，将空格替换成了%20。对应decodeURI()
encodeURIComponent()替换所有非字母数字字符。对应decodeURIComponent()
URI的以上两个方法替代已废弃的escape()和unescape()，不在使用废弃的方法
eval()很可能会存在代码注入的安全问题
......
Window
Math
min()/max() 可接收任意多个参数
ceil()进一
floor()向下取整
round()四舍五入
random()
......

面向对象
在定义只有内部采用的特性(attribute)时，描述了属性(property)的各种特征，特性放在[[]]中
1、属性类型
- 数据属性
[[Configurable]]能否delete删除而重新定义、能否修改属性的特性、能否把属性修改为访问器属性，默认true
[[Enumerable]]能否通过for-in循环返回属性，默认true
[[Writable]]能否修改属性的值,默认true
[[Value]]包含这个属性的数据值，读取的时候从这儿读，写入的时候将新值存在这儿，默认为undefined
- 访问器属性

Object.defineProperty(属性所在的对象，属性名字，描述符对象[configurable | enumerable | writable | value])
```
var person = {}
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'xiaojie'
});
console.log(person.name) // 'xiaojie'
person.name = 'yingying';
console.log(person.name) // 'xiaojie'
```
上述创建了一个name属性，值为'xiaojie'是只读的，不可修改，非严格模式下操作会被忽略，严格模式导致抛出错误
把configurable设置成false,则调用delete不能删除，切在调用Object.defineProperty()修改处writable以外的特性都会报错。
不指定值的话， configurable 、 enumerable 和 writable特性的默认值都是false
