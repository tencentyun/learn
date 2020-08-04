// 泛型: 是指在定义函数、接口或者类的时候  不预先指定其类型 而是在使用的时候才指定类型的一种特征

function echo<T>(arg: T): T {
  return arg
}
const str: number = 123
const result = echo(str)



function swap<T, U>(tuple: [T, U]): [U, T]{
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])



interface IWithLength{      // 规定一个interface的属性必须包含length
  length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T{
  return arg
}
const str2 = echoWithLength('str')
const obj2 = echoWithLength({length: 10})
const arr2 = echoWithLength([1, 2, 3 ])



class Queue<T>{
  private data = [];
  push(item: T){
    return this.data.push(item)
  };
  shift(): T{
    return this.data.shift()
  }
}
const queue = new Queue<number>()     // number
queue.push(1)
console.log(queue.shift().toFixed)

const queue2 = new Queue<string>()    // string
queue2.push('str')
console.log(queue2.shift().length)




interface KeyPair<T, U>{
  key: T;
  value: U
}

let kp1: KeyPair<number, string> = {key: 123, value: 'str'}
let kp2: KeyPair<string, number> = {key: 'str', value: 123}




interface IPlus<T>{
  (a: T, b: T): T
}

function plus(a: number, b: number ): number{
  return a + b
}
function connect(a: string, b: string ): string{
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect