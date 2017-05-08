# !/usr/bin/env python3
# -*- coding utf-8 -*-
# 1 and or not,与或非运算,bool值True,False
# 2 // 地板除，整除,eg:
>>> print(10 // 3)
3
# 3 ord(),chr()编码转换
>>> ord('A')
65
>>> chr(66)
'B'
# 4 str.encode(type), str.decode('type')
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
'orange'
>>> fruit
['apple', 'grape', 'pear', 'banana']
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
# 7 条件判断if else; if elif else
age = 18
if age >= 18:
	print('adult')
elif age <= 6:
	print('teenager')
else:
	print('nothing')
# next start http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431676242561226b32a9ec624505bb8f723d0027b3e7000