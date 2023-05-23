# while 和 for 循环
## while 循环
```javascript
while (condition) {
    //循环体
    //condition为真，执行循环体的代码
}
```
+ `while` 中的循环条件会被计算，计算结果转化为布尔值。
```javascript
let l = 7;
while (l) {
//和 while (l != 0) 一样，变量为0，条件为假，循环终止。    
    alert( l );
    l--;
}
```  
+ 循环体只有一句可以省略大括号。  
```javascript
let l = 7;
while (l) alert(l--);
```  
## do while 循环
+ 循环体至少执行一次 先执行 后检查
## for 循环
```javascript
for (begin; conditon; step) {
    //循环体
}
```
> begin 　　　　 进入循环时执行一次  
> conditon　 　　循环迭代之前检查  
> body　　　　　条件为真时，重复运行
> step　　　　　 在每次循环体迭代后运行
+ `begin` 执行一次，然后迭代：检查conditon后，执行body和step
+ `for` 循环的任何语句段都可以被省略 　;必须存在 否则语法错误
+ 关键词`break`可以随时跳出循环
+ 关键词`continue`跳过当前一次迭代，继续下一次循环
>标签是在循环之前带有冒号的标识符
```javascript
labeName: for (...) {
    ...
}
```
+ break`<labeName>` 语句 跳出循环到标签处（控制权转移）
+ 大部分`break`都在循环内 `continue`只在循环内部才行
+ `break/continue` 是跳出嵌套循环以转到外部的唯一方法。