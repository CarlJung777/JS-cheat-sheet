## 代码结构
+ 语句用分号分隔符。
+ 换行符也被视为分隔符。
+ 函数声明和循环语句后不需要分隔符，但是加了也没有关系，会被自动忽略。
## 严格模式
`use strict`  
+ 这个指令必须用在JS脚本的顶部或函数体的开头。
## 变量
> 变量的几种声明方式
+ `let`
+ `const` 常量
+ `var` 老版本使用的
>变量名组成
+ 字母和数字，但第一个字符不能是数字。
+ 允许使用字符`$`和`_`。
+ 非拉丁字母和象形文字也可以（通常不会使用）。
>变量是动态类型，可以储存任何值：
```javascript
let x = 7;
x = 'something';
```
>有八种数据类型
+ `number` 浮点数或者整数
+ `bigint` 用于任意长度的整数
+ `string` 字符串类型
+ `boolean` 逻辑值 true/false
+ `null` 单个值的null的类型，表示“空”或“不存在”
+ `undefined` 单个值的undefined，表示“为定义”
+ `object` 对象
+ `symbol` 
> `typeof` 运算符返回值的类型，例外是：
```javascript
typeof null == 'object'// JS 的语言设计错误
typeof function(){} == 'fuction' //函数被特殊对待
```
## 交互

>`prompt(question[,default])` 提出一个question，返回访问者输入内容，如果按下取消则返回null

>`confirm(message)`提出一个question，建议用户在确定和取消之间选择，结果一true/false形式返回。

>`alert(message)`输出一个消息。

## 运算符
+ 算数运算符：  加减乘除`+ - * /`  取余和幂运算符`% **`
+ 赋值： `=`
+ 按位运算符
+ 三元运算符：唯一具有三个参数的操作`cond ? resultA : resultB` 。`cond`为真，返回`resultA`否则`resultB`
+ 逻辑运算符：与`&&`或`||`非`!`
+ 空值合并运算符：`??`从一列变量中，选取值为已定义的值（defined value）的变量。`a ?? b`结果是a，除非a为`null/undefined`，这个时候结果是b。
+ 比较运算符：`==`会将不同类型的值转化为数字（除了null和undefined）。严格相等 `===`则不会进行转换。
>`null` `undefined`比较特殊，只在==下相等，且不相等于其它任何值。
## 循环
+ 三种类型的循环
```javascript
//while
while (conditon) {
    ...
}
//do while
do {
    ...
} while (conditon);

//for
for(let i = 0; i < 10; i++) {
    ...
}

```
+ `for(let...)`循环内部声明的变量，只在该循环内可见。
+ `break/continue`允许退出当前迭代。使用标签来打破嵌套循环。
## switch 结构
>`switch`结构可以代替多个`if`检查。。内部使用`===`严格相等进行比较。
```javascript
switch () {
    case x:
        ...;
        break;
    case y:
        ...;
        break;
    default:
        ...;        
}
```
## 函数
+ 函数声明：主代码流中
```javascript
function sum(a, b){
    let result = a + b;

    return result;
}
```
+ 函数表达式：表达式上下文中
```javascript
let sum = function(a, b) {
    let result = a + b;
     
     return result;
}
```
+ 箭头函数：
```javascript
// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;
```
