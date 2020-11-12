
// 测试10与10相匹配
test('测试10与10相匹配', () => {
  expect(10).toBe(10)
})

// 对象内容相等相等
test('测试对象内容相等', () => {
  var a = {val: 10}
  expect(a).toEqual({val: 10})
})

// 测试null
test('toBeNull测试', () => {
  var a = null
  expect(a).toBeNull()
})

// 测试undefined
test('toBeUndefined测试', () => {
  var a = undefined
  expect(a).toBeUndefined()
})

// 测试true
test('toBeTruthy测试', () => {
  var a = 1
  expect(a).toBeTruthy()
})

// 测试false
test('toBeFalsy测试', () => {
  var a = 0
  expect(a).toBeFalsy()
  expect(a).not.toBeTruthy()
})

// 大于
test('toBeGreaterThan测试', () => {
  var a = 10
  expect(a).toBeGreaterThan(1)
})

// 大于等于
test('toBeGreaterThanOrEqual测试', () => {
  var a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})

// 小于
test('toBeLessThan测试', () => {
  var a = 10
  expect(a).toBeLessThan(12)
})

// 计算浮点型 toBeCloseTo
test('toBeCloseTo测试', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

// string 匹配器
test('toMatch测试', () => {
  const str = 'http://www.baidu.com'
  expect(str).toMatch('baidu')
  expect(str).toMatch(/baidu/)
})

// Array 匹配器
test('toContain测试', () => {
  const arr = ['dell', 'lee', 'imooc']
  expect(arr).toContain('dell')
})

// 抛异常
const throwFun = () => {
  throw new Error('this is a throw function')
}
test('toThrow测试', () => {
  expect(throwFun).toThrow()
})