// 类型断言  
// 并不是类型转换
function getLength(input: string | number): number{
  if((<string>input).length){
    return (<string>input).length
  }else{
    return input.toString().length
  }
}