 // 在JS中，函数是一等公民，函数可以作为参数、可以存入数组、可以被另外一个函数返回、可以赋值给另一个变量。
 // 函数主要由两部分构成，由输入不同的参数来实现，输出也就是函数的返回结果
 // 在ts中，凡是冒号后面都是在声明类型
 
 // 函数声明
 //  c?: number 可选参数；  d:number = 10 默认参数，也可以看成是可选参数
 function add(a: number, b: number, c?: number, d:number = 10): number{
  return a + b + c + d
 }

 let result1 = add(1, 2)
 let result2 = add(1, 2, 3, 4)
  

 let add2 = function (a: number, b: number, c?: number, d:number = 10): number{
  return a + b + c + d
 }
 let result3: (a: number, b: number, c?: number) => number = add2   // 声明reslut的类型
 
 
