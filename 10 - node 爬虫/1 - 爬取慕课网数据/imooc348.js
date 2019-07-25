/**
 * Created by lenovo on 2017/7/6.
 */

var http = require('http');
var url = 'http://www.imooc.com/learn/348';

http.get(url,function (res){
    var html = '';

    // res有data事件触发的时候  就会执行这个回调函数
    // data事件不断的被触发  html不断的进行拼接
    res.on('data',function (data){
        html += data;
    });

    // 上述事件完全触发完 最后会触发end事件  打印出累加拼接的数据
    res.on('end',function (){
        console.log(html);
    })
}).on('error',function (){
    console.log('获取数据出错')
})
