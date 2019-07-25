/**
 * Created by lenovo on 2017/7/7.
 */
var http = require('http');
var querystring = require('querystring');

// querystring.stringify可以用来拼接参数  来获取动态的url
var formData = querystring.stringify({
    'content':'期待Scott老师更好的讲课视频',
    'cid':348
});

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':formData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=8c7f1617-d939-406c-8768-44d883efc062; imooc_isnew_ct=1498461726; UM_distinctid=15ce346e197395-02ac3e39da1a6-474f0a20-ff000-15ce346e19835b; CNZZDATA1256240398=474661555-1498461200-%7C1498461200; CNZZDATA1261157177=558418747-1498458214-%7C1498458214; CNZZDATA1261035380=986626176-1498458729-%7C1498458729; loginstate=1; apsid=E4ZGJiMWRjZjNmZDc3ZTkyYTM4ZGE2YjVlNGRlNWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzY3OTU2OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyOTc2ODU1MDQzQHFxLmNvbQAAAAAAAAAAAAAAAAAAAGU0ODkxYTczMTc2YWQxN2NhMDM4MjFjZjg2YjgzYzJiObZQWTm2UFk%3DNT; last_login_username=2976855043%40qq.com; PHPSESSID=7aoa18tgblu7cvkhhei19k9jo5; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1499327387,1499327652,1499332727,1499411349; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1499411355; imooc_isnew=2; cvde=595f33c1a35aa-6',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};

var req = http.request(options,function (res){
    console.log('状态码：' + res.statusCode);

    res.on('data',function (){

    });

    res.on('end',function (){
        console.log('评论成功');
    });
});

req.on('error',function (error){
    consoel.log('请求出错' + error.message);
});

req.write(formData);    // 把要评论的数据写入请求体

req.end();
