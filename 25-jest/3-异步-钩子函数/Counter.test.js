import Counter from './Counter'

describe('测试Counter文件', () => {
  let counter = null

  // 该文件的单元测试开始执行之前的钩子函数
  beforeAll(() => {
    console.log('beforeAll');
  })

  // 每个测试用例执行之前  beforeEach都会执行
  beforeEach(() => {
    console.log('beforeEach');
    counter = new Counter()
  })

  // 每个测试用例执行之后  afterEach都会执行
  afterEach(() => {
    console.log('afterEach');
  })

   // 该文件的单元测试执行之前之后的钩子函数
  afterAll(() => {
    console.log('afterAll');
  })

  test('测试addOne函数', () => {
    counter.addOne()
    expect(counter.num).toBe(2)
  })

  test('测试minusOne函数', () => {
    counter.minusOne()
    expect(counter.num).toBe(0)
  })
  
})