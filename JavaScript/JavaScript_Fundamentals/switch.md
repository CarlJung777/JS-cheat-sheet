```javascript
switch(x) {
    case'valuel1';
      ...
      [break]

    case'valuel2';
      ...
      [break]

    default   //可选代码块
      ...
      [break]
}
```
+ 判断`X`和`value`是否严格相等（值需要是同类型才能匹配）  

+ 相等的话就执行`case`的下个代码块直到最近的`break`或者`switch`语句末

+ `switch`和`case`都允许任意表达式。

+ 共享一段代码的`case`和`switch`可以被分为一组
```javascript
case 7:  //这两个case是一组的
case 5:
    alert('something')
    break;
default:
    alert('llll')    
```
> 语句最后的break非必要，为了代码可扩展性加上最好