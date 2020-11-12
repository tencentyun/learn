// var result = add(2, 3)
// var expected = 5
// if(result !== expected){
//   throw Error(`2 + 3期望的值是 ${expected}, 得到的却是${result}`)
// }



// var result = minus(3, 3)
// var expected = 0
// if(result !== expected){
//   throw Error(`3 - 3期望的值是 ${expected}, 得到的却是${result}`)
// }


// function expect(result){
//   return {
//     toBe: function (actual){
//       if(result !== actual){
//         throw Error(`得到的值不是预期值，期望的值是${actual}, 得到的值是${result}`)
//       }
//     }
//   }
// }

// function test(desc, fn){
//   try{
//     fn()
//    console.log(`${desc} 测试通过`);
//   }catch{
//     throw Error(`${desc} 测试不通过`)
//   }
// }

// test('测试加法add函数', () => {
//   expect(add(2, 3)).toBe(5)
// })

// test('测试减法minus函数', () => {
//   expect(minus(3, 3)).toBe(0)
// })

// 单元测试：单模块测试
// 集成测试：多模块测试

import { add, minus, multi } from './math'
 
test('测试3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})

test('测试3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('测试3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})
