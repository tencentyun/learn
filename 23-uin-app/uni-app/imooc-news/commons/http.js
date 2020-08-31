export default function $http(options){
	const { url, data } = options
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data
		}).then((res) => {
			if(res.result.code === 200){
				// 相当于执行.then
				reslove(res.result)
			}else{
				// 相当于执行.catch
				reject(res.result)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}