# !/usr/bin/env python3
# -*- coding: utf-8 -*-

class Somename(object): # 括号内为继承对象，一般为object
    __slots__ = ('name', 'age') # 限制实例属性只能有name 和 age
    def __init__(self, name): # 构造函数
        self.__name = name # __只可以在内部可以访问，外部不能访问
    def set_name(self, name): # 通过set方法修改value，
        self.__name = name
    def get_name(self): # 通过get方法获取value
        return self.__name
    def sayName(self): # 类内部函数第一个参数必须为self
        print('my name is %s' % self.__name)

>>> jay = Somename('jay')
>>> jay.sayName() # 不能通过jay.__name获取，如果__init__内部使用的self.name则可以
'jay'
# 类似__xxx__的变量名，也就是以双下划线开头，并且以双下划线结尾的，是特殊变量，特殊变量是可以直接访问的，不是private变量，所以，不能用__name__、__score__这样的变量名
# 类似_xxx的变量名，单下划线开头，是可以直接访问，但是最好别直接访问，应当视为private变量
# __xxx__也不是不能访问，因为python解释器将它改成了如上面_Somename__name了，所以上面的__name可以用_Somename__name访问
# 注意下面的写法
>>> me = Somename('xiaojie')
>>> me.get_name()
'xiaojie'
>>> me.__name = 'xiaojie1'
>>> me.__name
'xiaojie1'
>>> me.get_name()
'xiaojie'
# 如上面所示，虽然看似修改了__name的值，但是在get的时候仍然是原来的值，这种写法相当于给me增加了一个属性__name,这个__name和class内部的__name不是同一个

# isinstance() type()
>>> isinstance([1,2,3], list)
True
>>> type(123) == int
True
>>> isinstance([1,2,4], (list, tuple)) == (isinstance([1,2,4], list) or isinstance([1,2,4], tuple))
True

# @property
class Screen(object):
    @property
    def width(self): # get
        return self.__width
    @property.setter # set
    def width(self, width):
        self.__width = width
    
    @property
    def height(self):
        return self.__height
    @property.setter
    def height(self, height):
        self.__height = height
    
    @property
    def resolution(self): # readonly
        return self.__width * self.__height
>>> box = Screen()
>>> box.width = 720
>>> box.width
720
# 多重继承，通过多重继承，子类可以获得多个父类的所有方法和属性
class Dog(Mammal, Runnable):
    pass

# 调试
# print() assert logging
# print()直接将需要查看的数据打印出来
# assert 断言应该为真，否则后面代码会出错，且跑出异常
>>> assert n != 0, 'n is zero' #n必须不能等于0，否则后面程序报错，错误语句为后面的字符串
# logging 可以指定记录信息的级别，有debug, info, warning, error等几个级别
import logging
logging.basicConfig(level=logging.INFO) # 记录level为info级别的
