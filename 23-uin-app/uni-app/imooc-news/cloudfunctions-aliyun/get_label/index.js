'use strict';

// 获取数据库的引用
const db = uniCloud.database()

exports.main = async (event, context) => {
	
	// 连接label数据表
	let label = await db.collection('label').get()
  
  //返回数据给客户端
  return {
		code: 200, 
		msg: '成功',
		data: label.data
	}
};
