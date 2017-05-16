# !/usr/bin/env python3
# -*- coding utf-8 -*-
# http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014317848428125ae6aa24068b4c50a7e71501ab275d52000
# 1 高阶函数
# 函数名也是变量，所以函数参数可以是函数，一个函数接收另一个函数作为参数成为高阶函数
def add(x, y, fn):
    return fn(x) + fn(y)
>>> add(3, -4, abs)
7 # abs(3) + abs(-4) == 3 + 4 == 7、
# map(fn, Iterable) 传入的函数fn依次作用到序列的每个元素，并把结果作为新的Iterator返回
def f(x):
    return x**2
>>> r = list(map(f, [1, 2, 3, 4, 5]))
[1, 4, 9, 16, 25]
# reduce(fn, list) 将函数作用在序列list上，reduce把结果继续和序列的下一个元素做累计计算
# reduce(f, [x1, x2, x3 ,x4]) ==> f(f(f(x1, x2), x3), x4)
from functools import recude
def add(x, y):
    return x + y
>>> reduce(add, [1, 3, 5, 7, 9])
25 # same to sum([1, 3, 5, 7, 9])
# filter() 把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素
# 例如去除序列中的偶数
def is_odd(n):
    return n % 2 == 1
>>> list(filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) #注意到filter()函数返回的是一个Iterator
[1, 3, 5, 7, 9]
# sorted(iterable, cmp=None, key=None, reverse=False)
>>> sorted([34,2,56,33,21])
[2, 21, 33, 34, 56]
# 对字符串排序，tips 'Z' < 'a'
>>> sorted(['Zoo', 'about', 'Cat', 'bob'])
['Cat', 'Zoo', 'about', 'bob']
# 忽略大小写
>>> sorted(['Zoo', 'about', 'Cat', 'bob'], key=str.lower)
['about', 'bob', 'Cat', 'Zoo']
# 倒序
>>> sorted(['Zoo', 'about', 'Cat', 'bob'], key=str.lower, reverse=True)
['Zoo', 'Cat', 'bob', 'about']
# L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)] 用sorted()分别按名字排序
>>> L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]
def sort_byname(t):
    return t[0]
>>> sorted(L, key=sort_byname)
[('Adam', 92), ('Bart', 66), ('Bob', 75), ('Lisa', 88)]
# 按成绩降序
def sort_byscore(t):
    return t[1]
>>> sorted(L, key=sort_byscore, reverse=True)
[('Adam', 92), ('Lisa', 88), ('Bob', 75), ('Bart', 66)]
# 返回函数
# 函数内定义函数，内部函数可以访问外部函数的变量，并将内部函数作为返回值返回，相关变量和参数都被保留在返回函数中，==> '闭包'
# 该函数并未执行，返回函数中不要引用任何可能会变化的变量，类似JavaScript中的闭包
def count():
    fn = []
    for i in range(1, 4):
        def f():
            return i**2
        fn.append(f)
    return fn
>>>f1, f2, f3 = count()
>>>f1()
9
>>> f2()
9
>>>f3()
9
# 返回的函数引用了变量i，但它并非立刻执行。等到3个函数都返回时，它们所引用的变量i已经变成了3，因此最终结果为9
# 匿名函数 lambda args: statement
>>> list(map(lambda x: x**2, [1,2,3,4,5,6,7,8,9]))
[1, 4, 9, 16, 25, 36, 49, 64, 81]
# 装饰器：在代码运行期间动态增加功能。比如，在函数调用前后自动打印日志，但又不希望修改函数的定义
# 偏函数：把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。functools.partial
>>> import functools
>>> int2 = functools.partial(int, base=2) # 二进制转换函数
>>> int2('1000')
8