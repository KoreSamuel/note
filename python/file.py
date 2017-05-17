# http://www.w3cschool.cn/python3/python3-inputoutput.html
# 2017年5月12日23:12:59
# http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431917715991ef1ebc19d15a4afdace1169a464eecc2000
# 文件读写
try:
    f = open('function.py', 'r')
    f.read()
finally:
    if f:
        f.close()

with open('functionl.py', 'r') as f:
    print(f.read())

# 操作文件和目录
import os
# 当前目录绝对路径
>>> os.path.abspath('.')
# 合并两个路径
>>> os.path.join('/user/xiaojie', 'testfolder')
'/user/xiaojie/testfolder'
# 然后创建这个目录
>>> os.mkdir('/user/xiaojie/testfolder')
# 删除目录
>>> os.rmdir('/user/xiaojie/testfolder')
# 拆分路径
>>> os.path.split('/user/xiaojie/testfolder/file.txt')
('/user/xiaojie/testfolder', 'file.txt')
# 获取文件扩展名
>>> os.path.splitext('/user/xiaojie/testfolder/file.txt')
('/user/xiaojie/testfolder/file', '.txt')
# os.rename(older, new) 改名
# os.remove(file) 删除

# 序列化
