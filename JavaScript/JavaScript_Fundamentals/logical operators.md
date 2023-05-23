# Logical operators
逻辑运算符有四个
* ｜｜ 或
*  && 与
*  ！  非
*  ？？ 空值合并运算符

## 练习题：登陆校验
源：[javascript.info](https://zh.javascript.info/logical-operators)  
```javascript
result = a || b;
//两个竖线符号表示’或‘运算符
```
```javascript
result = a && b;
//两个&符号表示’与‘运算符
```
```javascript
result = !value;
//感叹号表示布尔非运算符
```

## 空值运算符
```javascript
result = a ?? b;
//判断两个值是否已定义
```

**空值运算符** 和 **或** 的区别(优先级相同:4)
+ || 返回一个 **真** 值
+ ?? 返回一个 **已定义的** 值
禁止将 ?? 运算符与 && 和 || 运算符一起使用  
可以使用括号来区分解决此问题
```javascript
let l = (7 && 5) ?? 2;
alert(x);
```
