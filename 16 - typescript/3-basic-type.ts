// 1. 声明变量的数据类型
let isDone: boolean = true
let age: number = 20
let firstName: string = 'zhangsan'

// 2. null 和 undefined是所有类型的子类型 可以复制给任何类型
let n: null = null
let u: undefined = undefined
let num: number = undefined    

// 3. any定义变量可以为任何类型 不做类型检查
let notSure: any = 123        
notSure = 'zhnagsan'
notSure = true
notSure.name
notSure.getFun()

// 4. 声明数组的元素必须是number
let arrOfNumbers: number[] = [1, 2, 3, 4]     
arrOfNumbers.push(5)
arrOfNumbers.push('str')    // 会报错

// 5. 声明原组
let user: [string, number] = ['str', 1]     
user = ['str', 2, 2]      // 会报错

// 1. 联合类型 union types 
let numberOrString: number | string = 123   
numberOrString = 'abc'  // 定义变量可以是number也可以是string

// 2. 类型推论 type interface
let str = '123'  
str = 123   

// 3. 类型断言
function getLength(input: string | number): number {
  const str = input as string
  if(str.length){
    return str.length
  }else{
    const number = input as number
    return  number.toString().length
  }
}

// 4. type guard
function getLength2(input: string | number): number {
  if(typeof input === 'string'){
    return input.length
  }else{
    return  input.toString().length
  }
}

// 字面量
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'