// react内置了jest


test('test common matcher', () => {
  expect(2 + 2).toBe(4)       // 2 + 2 = 4
  expect(2 + 2).not.toBe(5)   // 2 + 2 != 5 特别像英语的语法结构
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()    // 1为true
  expect(0).toBeFalsy()     // 0 为false
})
 
test('test number', () => {
  expect(4).toBeGreaterThan(3)    // 4比3大
  expect(2).toBeLessThan(3)       // 2比3小
})

test('test object', () => {
  expect({name: 'viking'}).toEqual({name: 'viking'})    // 属性值相同
})