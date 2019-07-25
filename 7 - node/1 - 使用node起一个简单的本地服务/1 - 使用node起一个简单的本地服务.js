var http = require('http');     // 依赖http模块

// http.createServer 创建web服务器
http.createServer(function (req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});   // 请求头返回的状态码是200
	res.end('Hello Node.js');				// 页面输出结果
}).listen(1337,'127.0.0.1');   // node监听到端口以后  就会去执行上面的回调函数  回调函数带有连个参数 req为请求体 res为响应体

console.log('开启成功');      // 命令行输出的值