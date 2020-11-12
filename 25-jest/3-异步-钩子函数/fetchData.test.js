import { fetchData, fetchDataPromise } from './fetchData'

test('fetchData异步请求', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()      // done函数执行完成才会关闭此测试用例
  })
})


// test('fetchDataPromise异步请求-1', () => {
//   return fetchDataPromise().then((res) => {
//     expect(res.data).toEqual({
//       success: true
//     })
//   })
// })

// // test('fetchDataPromise返回结果为404', () => {
// //   expect.assertions(1)
// //   return fetchDataPromise().catch((e) => {
// //     expect(e.toString().indexOf('404') > -1).toBe(true)
// //   })
// // })

// test('fetchDataPromise异步请求-2', () => {
//   return expect(fetchDataPromise()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// // test('fetchDataPromise异步请求-3', () => {
// //   return expect(fetchDataPromise()).rejects.toThrow()
// // })

// test('fetchDataPromise异步请求-4', async () => {
//   await expect(fetchDataPromise()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchDataPromise异步请求-5', async () => {
//   const res = await fetchDataPromise()
//   expect(res.data).toEqual({
//     success: true
//   }
//   )
// })