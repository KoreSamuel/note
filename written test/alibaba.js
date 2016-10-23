/**
 *@author xiaojie
 *2015年5月21日23:14:45
 **/
/**
 *将一个32位十进制数组转化成2进制后，翻转这个2进制数，再转换成十进制数*/
 //res1
function reverseB(num) {
	var bits = num.toString(2);
	var len = 32 - bits.length;
	bits = bits.split("").reverse().join("");
	while(len--) {
		bits+="0";
	}
	return parseInt(bits,2);
}
console.log(reverseB(43261596));//964176192

//res2
function reverseBs(n){
  var m = 0;
  for (var i = 0; i < 31; i++) {
    m|=(n&1);
    n >>= 1;
    m <<= 1;
  }
  m|=(n&01);
  return m;
}
console.log(reverseBs(43261596));//964176192

/**
 *罗马数组转换成十进制数字*/
var romObj = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
var romanToInt = function(str) {
    var sum = 0;
    for(var i = 0; i < str.length; i++) {
        rom1 = romObj[str.substring(i,i+1)];
        rom2 = romObj[str.substring(i+1,i+2)];
        if(str.substring(i+1,i+2) !== "" && rom1 < rom2) {
            sum += rom2 - rom1;
            i++;
        } else
            sum += rom1;
    }
    return sum;
};
console.log(romanToInt('II'));

/**
 *总共有n阶楼梯，每次只能上一步或者两部，要到达楼上有多少种方式
 *分析，当列举了当n为1,2,3,4,5时得出有1,2,3,5,8种方式
 *就是一个斐波拉契数列*/
var climbStairs = function(n) {
    var a = 1,
        b = 2,
        sum = 1;
        if(n == 1) return a;
        if(n == 2) return b;
        n -= 2;
    while(n--){
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
};
console.log(climbStairs(3));


/**
 *给数组增加一种方法，可以去除数组中的重复项并返回数组
 */
Array.prototype.delWeight = function()
{
    var n=[],r=[]; //n为hash表，r为临时数组
    for(var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (!n[this[i]]) //如果hash表中没有当前项
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}
var arr = [1,1,1,1,1,2,2,33,4,5,6,5,6];
;
console.log(arr.delWeight());

/*
 *对不确定数量的数进行排序*/
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    for(var i = 0,len = arguments.length;i<len;i++){
        tags.push(arguments[i]);
    }
    tags.sort(function(a,b){
        return a - b;
    });
    return tags;//返回已经排序的数组
}
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.info(result);//显示结果




/*
 *用短路求值的方式求前n项和*/
function sumr(n) {
    var ans = n;
    ans && (ans += sumr(n-1));
    return ans;
}
console.log(sumr(5));

/*正则表达式判断一个数是不是素数*/
function is_prime(x){
     var r=[],s="";
     while(r.length<x){
         r.push("1");
     }
     s=r.join("");
     return !/^1?$|^(11+?)\1+$/.test(s);
}
console.log(is_prime(5));
console.log(is_prime(10));
console.log(is_prime(13));
console.log(is_prime(60));
console.log(is_prime(99));

/*
 *辗转相除求最大公约数*/
function ff(a,b){
    if (b>a) ff(b,a);
    return !(a%b)?b:ff(b,a%b);
}
console.log(ff(10,3));


/**
 *Json数据按照某一字段排序的方法
 **/
var stuJson = [{ name: "daming", age: 21, weight: 66, sex:"boy" },
                   { name: "lisa", age: 19, weight: 45, sex:"girl" },
                   { name: "lili", age: 20, weight: 50, sex:"boy"}];
     //按age升序
   stuJson.sort(function(a,b){
                    return a.age - b.age;
  });
console.log(stuJson);

/*
 *求一个数组中的最大最小值*/
var arr = [32,42,12,42,21,23,56,75,3,33,53,23,36];
 var min =   Math.min.apply(null,arr);
   console.log(min);
      var aMax = Math.max.apply(null,arr);
   console.log(aMax);

/*
 *将一个匿名函数作为函数的一个参数*/
   function map(f,a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
//调用的时候实现这个引用参数函数
var re = map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
console.log(re);//[0, 1, 8, 125, 1000].

/**
 *字符传中的大小写相互转换*/
 function upperToggleLower(str){
  var s ="";
  for(var i = 0,len = str.length;i<len;i++){
    if (str[i]<='z'&&str[i]>='a'||str[i]<='Z'&&str[i]>='A') {
      s+=String.fromCharCode(str.charCodeAt(i)^32);
    }else{
      s+=str[i];
    }
  }
  return s;
}
var str = 'abcdef FEDCBA' ;
console.log(upperToggleLower(str));//"ABCDEF fedcba"

/**
 *js快排*/
function quick_sort(array,l,r){
  if(l < r){
    var i = l,j = r,x = array[l];
    while(i < j){
      while(i < j && array[j]>=x){
        j--;
      }
      if(i < j){
        array[i++] = array[j];
      }
      while(i < j && array[i] < x){
        i++;
      }
      if(i < j){
        array[j--] = array[i];
      }
    }
    array[i] = x;
    quick_sort(array,l,i -1 );
    quick_sort(array,i + 1,r);
  }
  return array;
}

/**
 *数组去除某个数组后返回长度*/
var arr = [1,1,1,2,3,4,4,5,5];
var removeElement = function(nums, val) {
  var snums = nums.filter(function(x,pos){return x!=val});
  return nums.length == snums.length ?nums.length:snums.length;
};

console.log(removeElement(arr,1));

/**
 * 给出两个整数a和b, 求他们的和, 但不能使用 + 等数学运算符。
 *
 * @param a: The first integer
 * @param b: The second integer
 * @return: The sum of a and b*/
    int aplusb(int a, int b) {
        int n1;
        do{
            n1 = a ^ b;
            b = (a & b) << 1;
            a = n1;
        }while(b != 0);
        return n1;
    }

/**
 * 计算在一个 32 位的整数的二进制表式中有多少个 1.
 * @param num: an integer
 * @return: an integer, the number of ones in num
 */
    int countOnes(int num) {
        int count = 0;
        while(num!=0)
        {
             num = num&(num-1);
             count++;
        }
        return count;
    }

/**
 * 找到单链表倒数第n个节点，保证链表中节点的最少数量为n。
 * Definition of ListNode
 * class ListNode {
 * public:
 *     int val;
 *     ListNode *next;
 *     ListNode(int val) {
 *         this->val = val;
 *         this->next = NULL;
 *     }
 * }
 * @param head: The first node of linked list.
 * @param n: An integer.
 * @return: Nth to last node of a singly linked list.
 */
    ListNode *nthToLast(ListNode *head, int n) {
        // write your code here
        if (!head) return NULL;
        ListNode *h,*d;
        h = d = head;
        while(--n)
        {
            h = h->next;
        }
        while(h->next!=NULL){
            h = h->next;
            d = d->next;
        }
        return d;
    }

/**
 * 给出2*n + 1 个的数字，除其中一个数字之外其他每个数字均出现两次，找到这个数字
 * @param A: Array of integers.
 * return: The single number.
 */
    int singleNumber(vector<int> &A) {
        // write your code here
        if (!A.size()) return 0;
        int a = A[0];
        for(int i = 1;i<A.size();i++)
        {
            a^=A[i];
        }
        return a;
    }

/**
 * 写出一个高效的算法来搜索 m × n矩阵中的值。
 * 这个矩阵具有以下特性：
 * 1.每行中的整数从左到右是排序的。
 * 2.每行的第一个数大于上一行的最后一个整数。
 * @param matrix, a list of lists of integers
 * @param target, an integer
 * @return a boolean, indicate whether matrix contains target
 */
    bool searchMatrix(vector<vector<int> > &matrix, int target) {
        if(!matrix.size()) return false;
        // write your code here
        int i,j;
        for(i = 0; i < matrix.size(); i++)
        {
            if(target < matrix[i][0])
                break;
            if(target == matrix[i][0])
                return true;
        }
        i--;
        for(j = 0;j < matrix[i].size();j++)
        {
            if(target == matrix[i][j]) return true;
        }
        return false;
    }

/**
 * 设计一种方法，将一个字符串中的所有空格替换成 %20 。
 * 你可以假设该字符串有足够的空间来加入新的字符，且你得到的是“真实的”字符长度
 * @param string: An array of Char
 * @param length: The true length of the string
 * @return: The true length of new string
 */
    int replaceBlank(char string[], int length) {
        // Write your code here
      int space_cnt = 0;
      int new_length = 0;
      char *p,*q;
      for(int i = 0; i < length; i++)
      {
        if (string[i] == ' ') space_cnt++;
      }
      new_length = space_cnt * 2 +length;
      p = string + (length - 1);
      q = string + (new_length - 1);
      while(p != q)
      {
        if(*p == ' ') *q = '0',q--,*q = '2',q--,*q = '%';
        else *q = *p;
        p--;
        q--;
      }
      return new_length;
    }

/**
 * 统计一个字符串中每个单词的个数
 * @param {string} str 输入的字符串
 * @return {Object} o 单词及对应数量
 */
```
function countWordNum(str) {
    if (!str) return ;
    var wordsArr = str.split(' ');
    var o = {};
    for (var i = 0, len = wordsArr.length; i < len; i++){
        if (wordsArr[i] in o) { //or if (o[wordsArr[i]]) {   or if (o.hasOwnProperty(wordsArr[i])) {
            o[wordsArr[i]]++;
        }
        else {
          o[wordsArr[i]] = 1;
        }
    }
    return o;
}
```
/**
 * 给你六种面额 1、5、10、20、50、100 元的纸币，假设每种币值的数量都
 * 足够多，编写程序求组成N元（N为0~10000的非负整数）的不同组合的个数
 **/
```
public class changeDP {
  static int v [] = {1, 5, 10, 20, 50, 100};
  public static int change (int n, int i){
    if (n < 0) return 0;
    if (n == 0) return 1;
    if (i < 0) return 0;
    return change(n,i-1)+change(n-v[i],i);
  }
  public static void main (String[] args){
    System.out.println(change(100,v.length-1));
  }
}
```
/**
 * 给定非空整型数组 arr 和整数 limit ，两次从 arr 中随机抽取元素（可能抽到同一个元素），
 * 获得整数 x ,y ，得到和 s = x + y 。求所有不超过 limit 的 s 值中的最大数。
 **/

```
function limitedMaxSum(arr, limit) {
    var max = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
        for(var j = 0; j < len; j++) {
            var sum = arr[i] + arr[j];
            if (sum <= limit && sum >= max) {
                max = sum;
            }
        }
    }
    return max;
}
```
