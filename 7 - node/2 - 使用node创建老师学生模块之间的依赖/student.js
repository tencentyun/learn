function studentFun(studentName) {
	console.log(studentName);
}

// exports是一个对象 上面可以挂载合法的js的属性和方法  把add()暴露出去 就像暴露API一样
exports.add = studentFun;