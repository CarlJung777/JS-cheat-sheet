## 对象的应用和复制
+ 对象与原始类型的根本区别之一是，对象是“通过引用”存储和复制的，而原始类型：字符串、数字、布尔值等 —— 总是“作为一个整体”复制。
```javascript
//两个独立的变量 message phrase
let message = "Hello!";
let phrase = messag
```
+ 赋值了对象的变量储存着该对象“在内存中的地址”——就是对该对象的引用。
```javascript
//user是对name的引用
let user = {
  name: "John"
};
```
+ 当一个对象变量被复制的时候是引用被复制，不是对象自身。
```javascript
//现在两个变量都保存了对同一个对象的引用
let user = { name: "John" };

let admin = user; // 复制引用
```
+ 通过任意一个变量来访问对象并修改它的内容
```javascript
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // 通过 "admin" 引用来修改

alert(user.name); // 'Pete'，修改能通过 "user" 引用看到
```
## 通过引用来比价
+ 下面两个变量都引用同一个对象，所以相等：
```javascript
let a = {};
let b = a; // 复制引用

alert( a == b ); // true，都引用同一对象
alert( a === b ); // true
```
+ 两个看起来相似（都为空）的对象，实际并不相等：
```javascript
let a = {};
let b = {}; // 两个独立的对象

alert( a == b ); // false
```
## 克隆与合并，Obiect,assign
+ 可以通过里边已有对象的属性，并在原始类型值的层面复制它们，来实现对已有对象结构的复制。
```js
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```
+ **也可以用Object.assign 方法来达到同样的效果。**
```js
Object.assign(dest, [src1, src2, src3...])
```
>dest 是对象的目标，后面的参数是源对象  
>后面的src都会被拷贝到dest  
>然后返回dest
+ 合并多个对象
```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }
```
+ 如果拷贝的属性名存在，那么就会被覆盖
```js
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // 现在 user = { name: "Pete" }
```
+ 用`Object.assgin`代替`for...in`进行简单的克隆
```js
let user = {
  name: "John",
  age: 30
};
//将user的属性拷贝到了一个空的对象中，并返回新对象
let clone = Object.assign({}, user);
```
## 深层克隆
```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 分享同一个 sizes
user.sizes.width++;       // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个获取到变更后的结果
```
+ 应该使用一个拷贝循环来检查`user[key]`的每个值，如果它是一个对象，那么也复制它的结构，这就是所谓的“深拷贝”
+ 可以使用递归来实现，或为了不重复造轮子，使用现有的实现，例如 lodash 库的 _.cloneDeep(obj)。
>使用 const 声明的对象也是可以被修改的
```js
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
```
>看起来（*）行的代码会触发错误，但并没有。user的值是一个常量，它必须始终引用同一个对象，但该对象的属性可以被自由修改。就是说**只有当尝试将`use=...`**作为一个整体进行赋值时，`const user`才会报错