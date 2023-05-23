# 对象
```javascript
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法

```
+ 通常使用花括号，这种方法叫做`字面量`
+ 字面量（literal）用于表达源代码中一个固定值的表示法（notation），整数、浮点数以及字符串等等都是字面量。

# 文本和属性
```javascript
let user = {     // 一个对象
  name: "John",  // 键 "name"，值 "John"
  age: 30        // 键 "age"，值 30
};

// 读取文件的属性：
alert( user.name ); // John
alert( user.age ); // 30
```
```javascript
//添加一个布尔类型
user.isAdmin = true;
```
```javascript
//用delete移除属性
delete user.age;
```
```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // 多词属性名必须加引号
};
```
+ 列表中最后一个属性应该用逗号结尾，这叫做尾随（trailing）或悬挂（hanging）逗号，方便后续添加、删除和移动属性，因为所有的行都是相似的。
# 方括号
+ 点符号要求 key 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 $ 和 _）
```javascript
// 这将提示有语法错误
user.likes birds = true
//它认为在处理 user.likes，然后在遇到 birds 时给出了语法错误
```
+ 方括号可以用于任何字符串
```javascript
let user = {};

// 设置
user["likes birds"] = true;

// 读取
alert(user["likes birds"]); // true

// 删除
delete user["likes birds"];
```
+ 方括号提供了可以通过任意表达式获取属性名的方式
```javascript
let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true;

```
+ 变量 key 可以是程序运行时计算得到的，也可以是根据用户的输入得到的  
```javascript
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// 访问变量
alert( user[key] ); // John（如果输入 "name"）
```
+ 点号不能以类似的方法使用
```javascript
let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```
# 计算属性
+ 创建一个对象时，可以在对象字面量中使用防括号，叫做`计算属性`
```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```
[fruit] 含义是属性名应该从 fruit 变量中获取。[fruit] 含义是属性名应该从 fruit 变量中获取。本质上和下面的语法效果一样，就是看起来好看点。
```javascript
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// 从 fruit 变量中获取值
bag[fruit] = 5;
```
## 属性值简写
>下面这个例子属性名跟变量名一样
```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```
## 属性名限制
+ 对象的属性名没有限制，保留字，任何的字符串，symbol，都是可以的，其它的类型会自动的转换为字符串。
```javascript
let obj = {
  0: "test" // 等同于 "0": "test"
};

// 都会输出相同的属性（数字 0 被转为字符串 "0"）
alert( obj["0"] ); // test
alert( obj[0] ); // test (相同的属性)
```
## 属性存在性测试，“in”操作符
+ JS对象的一个特性：能够被访问任何属性，即使属性不存在也不会报错！
```javascript
let user = {};
//读取不存在的属性只会得到undefined

alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
```
```javascript
"key" in object
//检查属性是否存在的操作符in
```
+ in 的左边必须是**属性名**，通常是一个带引号的字符串。
+ 如果省略引号，左边就是一个变量，它应该包含要判断的实际属性名。
```javascript
let user = { age: 30 };

let key = "age";
alert( key in user ); // true，属性 "age" 存在
```
## for...in 循环
+ 为了遍历一个对象的所有key，使用一个特殊的循环形式：for...in 这个和for循环是完全不一样的。
```javascript
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```
```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```
## 像对象一样排序
+ 整数属性会被进行升序，其它属性按照创建的顺序显示
+ 整数属性指可以不在任何更改的情况下与一个整数进行互转换的字符串。
```javascript
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 弹窗排序显示key 1, 41, 44, 49
}
```
+ 给键名前放一个`+`号，就可以让数字不进行升序
```javascript
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```