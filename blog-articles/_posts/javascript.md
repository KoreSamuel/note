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
- 访问器属性
包含一对getter和setter属性，不一定同时指定，只指定getter意味不可写，只指定setter不可读
[[Configurable]]能否delete删除属性从而重新定义、能否修改属性的特性、能否把属性修改为数据属性，默认为true
[[Enumerable]]能否通过for-in循环返回属性，默认true
[[Get]]读取属性调用，默认undefined
[[Set]]写入属性调用，默认undefined
访问器属性不能直接定义，必须使用Object.defineProperty()
```
var book = {
    _year: 2014,
    edition: 1
};
Object.defineProperty(book, 'year', {
    get: function() {
        return this._year
    },
    set: function(newValue) {
        if (newValue > 2014) {
            this._year = newValue;
            this.edition += newValue - 2014;
        }
    }
});
book.year =  2017;
console.log(book.edition); // 4
```
常见使用方式：设置一个属性的值会导致其他属性发生变化

2.定义多个属性
Object.defineProperties()
```
var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2014
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year
        },
        set: function(newValue) {
            if (newValue > 2014) {
                this._year = newValue;
                this.edition += newValue - 2014;
            }
        }
    }
});
```
3.读取属性特性
Object.getOwnPropertyDescriptor(属性所在对象，要读取描述符的属性名称);
返回一个对象，若是访问器属性，则返回其四个属性，数据属性同样


4.创建对象
- 工厂模式
```
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name)
    };
    return o;
};
var person = createPerson('xiaojie', '24', 'fe')
```
- 构造函数模式
```
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name)
    };
};
var person = new Person('xiaojie', 24, 'fe'); // 必须使用new，不然属性和方法被添加到window或global
```
相较于工厂模式
1.没有显示创建对象
2.直接将属性和方法赋给this
3.没有return
另外，若构造函数当做函数调用
1.如上，属性和方法被添加到window或global
2.另一个对象的作用域中调用
```
var o = new Object();
Person.call(o, 'xiaojie', 24, 'fe');
o.sayName(); // 'xiaojie'
构造函数的问题
每个方法都在每个实例上重新创建了一遍
```
var person1 = new Person(xxxx);
var person2 = new Person(yyyyy);
person1.sayName === person2.name // false
```
- 原型模式 prototype
可以让所有对象实例共享它所包含的属性和方法
prototype属性是一个指针，指向一个包含可以由特定类型的所有实例共享的属性和方法的对象
```
function Person() {}
var proto = Person.prototype;
proto.name = 'xiaojie';
proto.age = 24;
proto.job = 'fe';
proto.sayName = function () {
    console.log(this.name);
}
var person1 = new Person();
person1.sayName(); // 'xiaojie'

var person2 = new Person();
person2.sayName(); // 'xiaojie'

person1.sayName === person2.sayName // true
```
1.理解原型对象(Person.prototype指向函数的原型对象)
```
Person.prototype.constructor === Person // true
原型对象的construcor属性包含一个指向Person的指针
person1.__proto__ === Person.prototype // true
实例和构造函数没有直接关系，而是和构造函数的原型对象有关系
```
isPrototypeOf() 判断实例内部是否有指向原型对象的指针[[prototype]]
Person.prototype.isPrototypeOf(person1) // true
Object.getPrototypeOf() 返回[[prototype]]即__proto__的值
Object.getPrototypeOf(person1) === Person.prototype // true
Object.getPrototypeOf(person1.name); // 'xiaojie'
当为实例添加一个属性，这个属性会屏蔽原型对象中保存的同名属性，但不会修改原型对象中属性的值；即使将添加的属性设置为null，也只能在实例中设置，不会恢复指向圆形的连接，得使用delete完全删除实例属性，才能重新访问原型中的属性
```
var person1 = new Person();
var person2 = new Person();

person1.name = 'huanhuan';
console.log(person1.name) // 'huanhuan' 来自实例修改
console.log(person2.name) // 'xiaojie' 来自原型对象
person1.name = null;
console.log(person1.name) // null 没有恢复指向原型对象
delete person1.name;
console.log(person1.name) // 'xiaojie' 恢复，来自原型对象
```
当代码读取某个对象的属性时，会进行搜索，先从实例对象本身开始，若找到则返回
若没找到，则继续搜索指针指向的原型对象，找到了则返回

hasOwnProperty()检测一个属性存在于实例中还是原型中
```
var person1 = new Person();
var person2 = new Person();

console.log(person1.hasOwnProperty('name')) // false
person1.name = 'huanhuan';
console.log(person1.hasOwnProperty('name')) // true 
```
只有当实例重写了name属性之后，hasOwnProperty()才返回true
只有这时候name才是一个实例属性，而非源性属性
2.原型与in操作符
单独使用和在for-in中使用
单独使用时，会在通过对象能够访问给定属性时返回true,无论该属性存在于实例还是原型
for-in中一般和hasOwnProperty()一起使用。
在使用 for-in 循环时，返回的是所有能够通过对象访问的、可枚举的（enumerated）属性，其中既包括存在于实例中的属性，也包括存在于原型中的属性。原型中不可枚举的属性（[[Enumerable]]标记为false）的实例属性也会在for-in中返回。
Object.keys()----es5
接收一个对象作为参数，取得对象上所有可枚举的实例属性，返回一个包含所有可枚举属性的字符串数组
```
var keys = Object.keys(Person.prototype)
console.log(keys); // ['name', 'age', 'job', 'sayName'];

var p1 = new Person();
var p2 = new Person()

p1.name = 'huanhuan';
p1.age = 18;

var p1keys = Object.keys(p1);
var p2keys = Object.keys(p2);
console.log(p1keys); // ['name', 'age']
console.log(p2keys); // []
```
对实例调用Object.keys()只返回实例属性

Object.getOwnPropertyNames()
接收一个对象作为参数，取得所有实例属性，不论是否可枚举
```
var keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys); // ['constructor', 'name', 'age', 'job', 'sayName'] 包含了不可枚举的constructor
```
原型链的动态性

对原型对象所做的任何修改都能够立即从实例上反映出来——即使是先创建了实例后修改原型也照样如此
```
var friend = new Person();
Person.prototype.sayHi = function(){
 alert("hi");
};
friend.sayHi(); //"hi"
```
调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针，而把原型修改为另外一个对象就等于切断了构造函数与最初原型之间的联系。
实例中的指针仅指向原型，而不指向构造函数
原型对象存在的问题
由共享的本性所导致的。对于引用类型的属性来说，修改一个实例的这个属性值，另一个实例的属性值也会跟着改变。
构造函数模式和原型模式共同使用
原型模式定义方法和共享属性，构造函数模式用于定义实例属性

动态原型模式
可以通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型

寄生构造函数模式
是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象
返回的对象与构造函数或者与构造函数的原型属性之间没有关系；构造函数返回的对象与在构造函数外部创建的对象没有什么不同。建议在可以使用其他模式的情况下，不要使用这种模式

继承
利用原型让一个引用类型继承另一个引用类型的属性和方法
通过原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会重写原型链
原型链继承问题：引用类型值的原型属性会被所有实例共享；在创建子类型的实例时，不能向超类型的构造函数中传递参数
针对以上问题，通过借用构造函数方式解决
在子类型构造函数内部调用 超类型构造函数、主要通过使用apply()和call()
问题：无法函数复用；在超类型的原型中定义的方法在子类型不可见，所有类型都只能使用构造函数模式
组合继承(最常用)
将原型链继承和借用构造函数继承技术组合到一块。思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
调用了两次超类型构造函数。
原型式继承
object.create()本质上讲，是对传入的对象进行了一次浅复制
寄生组合式继承
通过借用构造函数来继承属性，通过原型链的混成形式来继承方法
不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型
原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
只调用一次超类型构造函数

## 函数表达式
能够创建函数再赋值给变量，也能够把函数作为其他函数的值返回

### 递归
常规的递归方式
```
function factorial (num) {
     return num <= 1 ? 1 : num * factorial(num - );
}
```

若执行以下代码，则上述递归函数则会出现问题

```
var anotherfn = factorial;
factorial = null;
console.log(anotherfn(3)); // error,因为factorial赋值为null，则只有anotherfn指向函数，但是在函数内调用factorial，此时factorial已经不是函数，导致出错
```

在编写递归函数的时候，使用arguments.callee比直接使用函数名更保险。

```
function factorial (numm) {
    return num <= 1 ? 1 : arguments.callee(num - 1);
}
```

不过在严格模式下，不能访问arguments.callee。可以使用命名函数表达式来达成相同的效果

```
var factorial = (function f(num) {
    return num <= 1 ? 1 : num * f(num - 1);
});
```

### 闭包
有权访问另一个函数作用域中的变量的函数，在一个函数内部创建另一个函数。


