let userName = prompt("who are you?");
//将用户输入信息赋予变量 userName
if (userName === "Admin") {
  //将用户输入信息与目标对比
  let pass = prompt("password?", "");
  //定义变量psss
  if (pass === "TheMaster") {
    //检查输入变量
    alert("welcome");
  } else if (pass === "" || pass === null) {
    //输入空值或者不输入信息
    alert("Canceled");
  } else {
    alert("Wrong password");
    //其它都执行密码错误
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
  //如果名字输入空值或者无信息输入
} else {
  alert("I dont know you");
  //其它情况下提示错误用户
}