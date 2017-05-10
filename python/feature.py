# !/usr/bin/env python3
# -*- coding utf-8 -*-
# 1 切片：类似js中的slice方法,前开后闭的区间(start, end]
>>> L = ['a', 'b', 'c', 'd', 'e']
>>> L[1:3]
['b', 'c']
# 索引是0的时候可以不写
>>> L[:2]
['a', 'b']
# 索引为负的时候，取倒数
>>> L[-2:]
['d', 'e']
>>> L[-2:-1]
['d']
# [start:end:step]
>>> L = list(range(100))
>>> L[::10] #所有数字中隔10个数取
[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
>>> L[:10:2] # 前10个数中隔2个数取
[0, 2, 4, 6, 8]
>>> L[2:10:2] # 前2到10个数中隔2个取
[2, 4, 6, 8]
# tuple和str用法同样
>>> (0, 1, 2, 3, 4, 5)[:3]
(0, 1, 2)
>>> 'qwert'[:3]
'qwe'
# 2 迭代 Iteration for ... in ... list,tuple,str,dict均可作为迭代对象,dict默认迭代key，若迭代value，for value in dict.values(),同时迭代,for k,v in dict.items()
>>> o = {'name': 'jay', 'age': 12}
>>> for key in o:
...     print(key)
'name'
'age'
>>> l = [1, 2, 3]
>>> for i in l:
...     print(i)
1
2
3
>>> for ch in 'abc':
...     print(ch)
'a'
'b'
'c'
# 判断对象是否可迭代:通过collections模块的Iterable类型判断
>>> from collections import Iterable
>>> isinstance('abc', Iterable)
True
>>> isinstance([1,2,3], Iterable)
True
>>> isinstance(123, Iterable)
False
# 访问list下标，使用Python内置 enumerate
>>> for index, value in enumerate(['a', 'b', 'c']):
...     print(index, value)
0 'a'
1 'b'
2 'c'
# and we can also
>>> for x, y in [(1, 2), (3, 4), (7, 8)]:
...     print(x, y)
1 2
3 4
7 8

# 列表生成式
>>> [x * x for x in range(1, 10)]
[1, 4, 9, 16, 25, 36, 49, 64, 81]
# 还可以加上条件判断，如取偶数
>>> [x * x for x in range(1, 10) if x % 2 == 0]
[4, 16, 36, 64]
# 两层循环
>>> [m + n for m in '123' for n in 'ABC']
['1A', '2B', '3C']
# 所有字符变成小写
>>> l = ['FAFff', 'dfafDEFdf', 'fdfdsEFE']
>>> [ll.lowrer() for ll in l]
['fafff', 'dfafdefdf', 'fdfdsefe']


# 生成器  generator
# 用列表生成式的方法，将[]换成()
>>> g = (x * x for x in range(1, 5))
>>> next(g)
1
>>> next(g)
4
>>> next(g)
9
# 一般使用next()很少，常用for ... in ... 迭代
>>> g = (x * x for x in range(1, 10))
>>> for n in g:
...     print(n)
1
4
9
16
25
36
49
64
81
# 斐波拉契数列,如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator：
def fib(num):
    n, a, b = 0, 0, 1
    while n < num:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'over'
# 每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行

# http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/00143178254193589df9c612d2449618ea460e7a672a366000
# 迭代器 Iterator，可以直接用for循环的对象，next()不断返回下一个值，isinstance(obj, Iterator)
# list dict str 虽然是 Iterable，但不是Iterator，iterable可通过iter()转换成iterator
