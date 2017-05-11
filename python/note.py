# !/usr/bin/env python3
# -*- coding utf-8 -*-
# 1 and or not,与或非运算,bool值True,False ,**指数运算 '_'变量，用于存放交互模式中上次计算的结果
>>> 2**3
8
>>> _
8
# 2 // 地板除，整除,eg:
>>> print(10 // 3)
3
# 3 ord(),chr()编码转换
>>> ord('A')
65
>>> chr(66)
'B'
# 4 str.encode(type), str.decode('type'), str*n :str重复n次
>>>'中文'.encode('utf-8')
b'\xe4\xb8\xad\xe6\x96\x87'
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
'中文'
# 5 len(str)
>>> len('hello')
5
>>> len('中文')
2
# 6 list，可增删改查 && tuple，readonly
# list
>>> fruit = ['apple', 'pear', 'banana']
>>> fruit
['apple', 'pear', 'banana']
# 查
>>> fruit[-1]
'banana'
# 增
>>> fruit.append('orange')
>>> fruit
['apple', 'pear', 'banana', 'orange']
>>> fruit.insert(2, 'grape')
>>> fruit
['apple', 'grape', 'pear', 'banana', 'orange']
# 删， 若无参数，则默认最后一个，有参数则删除指定位置
>>> fruit.pop()
# popLeft() 弹出第一个
'orange'
>>> fruit
['apple', 'grape', 'pear', 'banana']
# same to fruit.remove('orange')
# 改
>>> fruit[2] = 'orange'
>>> fruit
['apple', 'grape', 'orange', 'banana']
# tuple 一旦初始化则不能改变，尽量使用tuple保证数据安全
>>> t = (1, 23)
>>> t
(1, 23);
# 若定义只有一个元素的tuple，应该用
>>> t = (1,)
>>> t
(1,)
# 因为数学公式中小括号的原因，若
>>> t = (1)
>>> t
1
# list 其他常用方法 sort(), count(item),reserve(), copy() == [:]
# list, tuple ,str 都支持通过 '+' 连接
# 7 条件判断if else; if elif else
age = 18
if age >= 18:
	print('adult')
elif age <= 6:
	print('teenager')
else:
	print('nothing')
# next start 

# 8 for x in [1,2,3] ; range(5) ==> range(0, 5); range(3,5) ==> range(3,5); range(10, 2, -2) ==> 10, 8, 6, 4
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> list(rane(3, 5))
[3, 4]
# 同时遍历两个或多个序列 for a, b in zip(A, B)

# 9 字典 dict >>> key-value键值对, key为不可变，整数/字符串可以当作key
>>> someone = {'name': 'xiaoming', 'age': 12, 'sex': 'boy'}
>>> someone['name']
'xiaoming'
>>> someone['weight'] = 50
>>> someone['weight']
50
>>> 'height' in someone
False
>>> someone.get('height') # 不存在则retuen None，可指定返回值,eg
>>> someone.get('height', -1)
-1
# 删除某个属性，pop(key) ,return 对应的key的value，eg：
>>> someone.pop('weight') # 或者 del someone['weight']
50
>>> someone
{'name': 'xiaoming', 'age': 12, 'sex': 'boy'}
# 构建字典
>>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
{'jack': 4098, 'sape': 4139, 'guido': 4127}

>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}

>>> dict(sape=4139, guido=4127, jack=4098)
{'jack': 4098, 'sape': 4139, 'guido': 4127}

# 10 set key的集合，无value，无重复key，创建一个set需要一个list集合作为参数,同dict,不可放入可变对象
>>> s = set([1, 2, 3, 4]);
>>> s
{1, 2, 3, 4}
>>> ss = set([1,1,1,2,3,4,4]) # 过滤重复key
>>> ss
{1, 2, 3, 4}
# key的添加add()和删除remove()
>>> s.add(5)
>>> s
{1, 2, 3, 4, 5}
>>> s.remove(4)
>>> s
{1, 2, 3, 5}
# 交集'&'  并集'|'  差集 '-' 操作
>>> s1 = set([1, 2, 4])
>>> s2 = set([2, 3, 4]);
>>> s1 & s2
{2, 4}
>>> s1 | s2
{1, 2, 3, 4}
>>> a = set('avsfsfewgxac')
>>> a
{'c', 'a', 'v', 'g', 'w', 'e', 's', 'x', 'f'}
>>> b = set('advdvvxdagege')
>>> b
{'a', 'v', 'd', 'g', 'e', 'x'}
>>> a - b
{'f', 'w', 'c', 's'}
>>> a | b
{'v', 's', 'x', 'f', 'c', 'a', 'd', 'g', 'w', 'e'}
>>> a & b
{'a', 'v', 'g', 'e', 'x'}
>>> a ^ b # a b 不共有的
{'c', 'd', 'w', 's', 'f'}

# 11 函数abs() max() int() float() str() bool()
>>> abs(-3)
3
>>> int(12.3)
12
>>> str(12.4)
'12.4'
>>> bool(1)
True
# 定义
def fn(args):
	statements # 如果是空函数，可以加语句 pass
def my_abs(x):
	if x >= 0:
		return x
	else:
		return -x
>>> my_abs(5)
5
>>> my_abs(-3)
3
# 返回多个值：实际是返回一个tuple,可以通过多个变量获取返回值
def multiReturn(x):
	return x * x, x + x
>>> x, y = multiReturn(3)
>>> x
9
>>> y
6
# 默认参数,必须指向不可变对象
def defaultArgs(x, y = 2):
	return x + y
>>> defaultArgs(2)
4
>>> defaultArgs(2, 3)
5
# 可变参数,在内部自动将参数转换成一个tuple
def addx(*args):
	sum = 0
	for n in args:
		sum = sum + n
	return sum
>>> addx(1,2,3,4)
10
>>> addx(1,2,3,4,5)
15
# 如果有一个已存在的list或者tuple，则调用
>>> s = [1,2,3]
>>> addx(*s)
6
# 关键字参数：这些关键字参数在函数内部自动组装为一个dict,可以扩充函数，接收调用者传入额外参数
def person(name, age, **kw):
	return {'name': name, 'age': age, 'else': kw}
>>> person('xiaoming', 12)
{'name': 'xiaoming', 'age': 12, 'else': {}}
>>> person('xiaohong', 13, height=140)
{'name': 'xiaohong', 'age': 13, 'else': {'height': 140}}
# 简便写法
>>> extra = {'weight': 40, 'height': 140};
>>> person('xiaogang', 15, **extra)
{'name': 'xiaogang', 'age': 15, 'else': {'weight': 40, 'height': 140}};
# 命名关键字参数，限制关键字参数名字
# next start http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431752945034eb82ac80a3e64b9bb4929b16eeed1eb9000 
# 如只接收 city job关键字  
def person(name, age, *, city, job): # 命名关键字参数需要一个特殊分隔符*，*后面的参数被视为命名关键字参数
	return name, age, city, job
>>> person('xiaojie', 23, city='beijing', job='engineer') # 参数必须传完
('xiaojie', 23, 'beijing', 'engineer')
# 如果参数中已有可变参数，则可以不加*
def person(name, age, *args, city, job): #city, job同样为命名关键字参数
    return name, age, args, city, job
>>> person('xiaoqing', 22, city='shanghai', 'lalala')
('xiaoqing', 22, (), 'shanghai', 'lalala') #可变参数若不传，则是一个空的tuple
# 命名关键字参数同样可以有默认值
# 参数组合：可以用必选参数、默认参数、可变参数、关键字参数和命名关键字参数，这5种参数都可以组合使用。但是请注意，参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。
