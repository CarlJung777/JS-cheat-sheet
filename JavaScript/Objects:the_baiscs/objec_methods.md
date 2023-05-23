# 对象方法，"this"
+ 在 JavaScript 中，行为（action）由属性中的函数来表示。
```js
//教user说hello
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```
+ 作为对象属性的函数被称为 方法。
+ 当我们在代码中用对象表示实体时，就是所谓的 面向对象编程，简称为 “OOP”。

## 方法简写
```js
// 这些对象作用一样

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// 方法简写看起来更好
let user = {
  sayHi() { // 与 "sayHi: function(){...}" 一样
    alert("Hello");
  }
};
```
## this 不受限制
`this`可以用于任何函数，即使它不是对象的方法。  
`this`的值是在代码运行时计算出来的，它取决于代码上下文。