// 批量导出文件
const requireApi = require.context(
	'.',   		// api 目录的相对路径
	false,    // 是否查询子目录
	/.js$/    // 查询文件的后缀 正则
)

let module = {}		// 定义一个空对象
requireApi.keys().forEach((item, index) => {
	if(item === './index.js') return
	Object.assign(module, requireApi(item))   // 合并对象
})

export default module

