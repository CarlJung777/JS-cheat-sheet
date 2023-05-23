## 代码风格
## 注释
## 自动化测试
+ 行为驱动开发（BDD）：BDD 包含了三部分内容：测试、文档和示例。
+ 象函数应该做什么并且描述出来。描述被称作 规范（specification, spec），包含用例的描述以及针对它们的测试，如下所示
```javascript
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
```
#### 开发流程
1. 编写初始规范，测试最基本的功能。
2. 创建一个最初始的实现。
3. 检查它是否工作，运行测试框架 Mocha来运行测试。当功能未完成时，将显示错误。持续修正直到一切都能工作。
4. 现在有一个带有测试的能工作的初步实现。增加更多的用例到规范中，或许目前的程序实现还不支持。无法通过测试。
5. 回到第 3 步，更新程序直到测试不会抛出错误。
6. 重复第 3 步到第 6 步，直到功能完善。  
**开发就是不断地 迭代**
## Polyfill 和转译器
>如何让现代的代码在还不支持最新特性的旧引擎上工作？
1. 转译器（Transpilers  
Babel 是最著名的转译器之一
2. 垫片（Polyfills）  
更新/添加新函数的脚本被称为“polyfill”
```javascript
if (!Math.trunc) { // 如果没有这个函数
  // 实现它
  Math.trunc = function(number) {
    // Math.ceil 和 Math.floor 甚至存在于上古年代的 JavaScript 引擎中
    // 在本教程的后续章节中会讲到它们
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

