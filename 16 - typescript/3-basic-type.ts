// 声明变量的数据类型
let isDone: boolean = true
let age: number = 20
let firstName: string = 'zhangsan'
let message: string = `my name is ${firstName} , age is ${age}`  // 同样适用模板字符串
let u: undefined = undefined
let n: null = null
let num: number = undefined     // undefined 可以复制给任何类型


let notSure: any = 123        // 定义变量可以为任何类型 不做类型检查
notSure = 'zhnagsan'
notSure = true
notSure.name
notSure.getFun()

let numberOrString: number | string = 123   // 定义变量可以是number也可以是string
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]     // 声明数组的元素必须是number
arrOfNumbers.push(5)
arrOfNumbers.push('str')    // 会报错

let user: [string, number] = ['str', 1]     // 声明原组
user = ['str', 2, 2]      // 会报错