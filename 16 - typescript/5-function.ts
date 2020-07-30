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
 
 
 let str = '123'
 str = 123