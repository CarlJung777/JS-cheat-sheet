# 函数   
```javascript
//  一个函数声明的例子
function showMessage() {
    alter( 'hi!' );
}
```
- 函数声明的变量只在该函数内部可见
- 函数可以拥有所有外部变量的访问权，也可以修改外部变量。    
- 只有在无局部变量的时候才使用外部变量。
- 内部有声明同名变量，函数会遮蔽外部变量。
- 函数外声明的都是全局变量。（尽量少用）
- 参数`parameter`是函数声明中括号内列出的变量（它是函数声明时的术语）。
- 参数`argument`是调用函数时传递给函数的值（它是函数调用时的术语）。
>一个函数备调用的时候，有参数没有给出，对应的值就是`undefined`

>一个函数应该值包含函数名指定的功能，两个独立的函数一起调用时，可以创建第三个函数来调用这两个函数。
## 函数表达式
+ 函数声明 
```javascript
function sayHi() {
    alert( 'u' );
}
```  
+ 函数表达式
```javascript
//创建一个函数将其放入sayHi中
let sayHi = function() {//代码运行到这里，此函数就创建了
    alert( 'u' );
}
```
**上面两个函数都在`sayHi`变量中储存了一个函数**    

__不论函数是怎么被创建的，函数都是一个值。__

**javascript准备运行脚本时，先会去寻找全局函数声明，并进行创建这些函数**
```javascript
function sayHi() {
    alert( 'u' );
}

alert( sayHi );//显示变量的值，sayHi的

sayHi();//调用函数sayHi
```
## 回调函数
## 匿名函数
## 箭头函数  
```javascript
let func = (arg1, arg2, ...,arnN) => expression;
//函数func，接受括号中的参数，使用参数对右侧的expression求值后返回结果。
```
+ 看下面这个函数
```javascript
let sunm = function(a, b) {
    return a+b;
};
```
+ 用箭头函数可以使代码更简短，且实现同样的功能。
```javascript
let sum = (a, b) => a + b;
```
>只有一个参数可以不要括号，如果没有参数的话需要保留括号，总之这个位置得有东西。

>带有多行的表达式或语句，使用花括号括起来。**主要区别是，括起来后，许哟啊return才能返回值（像一个常规函数）**
```javascript

```