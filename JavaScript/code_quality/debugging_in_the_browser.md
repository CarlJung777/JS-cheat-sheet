## sources
>由以下三个部分组成
+ 文件导航（File Navigator
+ 代码编辑（Code Editor）
+ JavaScript 调试（JavaScript Debugging）

## console
## breakpoint
+ 断点 是调试器会自动暂停 JavaScript 执行的地方。
## “debugger” 命令
+ 在开发者工具打开时才有效，否则浏览器会忽略它。
```javascrpit
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- 调试器会在这停止

  say(phrase);
}
```
## 暂停并查看
>设置短点后，程序会在设置的行数暂停执行
+ 察看（Watch） —— 显示任意表达式的当前值。
+ 调用栈（Call Stack） —— 显示嵌套的调用链。
+ 作用域（Scope） —— 显示当前的变量。
## 跟踪执行
## 日志记录
`console.log()`