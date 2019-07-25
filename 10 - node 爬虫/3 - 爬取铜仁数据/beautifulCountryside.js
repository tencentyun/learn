/**
 * Created by lenovo on 2017/8/2.
 */

var http = require('http');
var cheerio = require('cheerio');
var uuid = require('node-uuid');
var mysql = require('mysql');
var url = 'http://gztr.chinashadt.com:8010/syncott/Modile/WirelessLY/TitleImg.jsp?key=MLXCZL&fxbs=1';

// 获取具体办事内容的函数
function contentFun(sum){
    var $ = cheerio.load(sum);
    var contentArr = [];
    $('img').each(function (index,value){
        $(this).attr("src", function(i,origValue){
            return 'http://gztr.chinashadt.com:8010/syncott/' + origValue;
        });
    });

    // 获取内容的标题
    var contenttitle = $('.title').text();

    // 获取更新时间
    var createTime = $('.text-left').text();
    var createtime = createTime.replace(/\s+/g, '');

    var countryContent = $(".text").html();
    //console.log(countryContent);
    var countrycontent = unescape(countryContent.replace(/&#x/g,'%u').replace(/;/g,'').replace(/%uA0/g,' '));

    //console.log(countrycontent);

    var contentData = {
        "contentTitle": contenttitle,
        "createTime": createtime,
        "countryContent": countrycontent
    };
    contentArr.push(contentData);
    return contentArr;
}


// 获取大标题 小标题 具体办事内容的函数
function filterHtml(html){
    var $ = cheerio.load(html);

    // 给第一个链接加http
    $('.events_intro').eq(0).find('a').attr("href", function(i,origValue){
        return 'http://gztr.chinashadt.com:8010/syncott/' + origValue;
    });

    // 获取有多少个乡村
    $('.events_intro').each(function (index,value){
        // 获取乡村的名字
        var countryName = $(this).find('p').text();
        // 获取缩略图
        var countryPic = 'http://gztr.chinashadt.com:8010/syncott/' + $(this).find('img').attr('src');
        // 获取小标题链接
        var smallLink = $(this).find('a').attr('href');
        // 去除数据里面所有的空格换行
        var countryname = countryName.replace(/\s+/g, '');

        //console.log("名字" + countryname + "缩略图" + countryPic + "链接" + smallLink);

        // 获取具体事项的DOM
        http.get(smallLink,function (res){
            var sum = '';
            res.on('data',function (data){
                sum += data;
            });
            res.on('end',function (){
                var contentData = contentFun(sum);
                //console.log(contentData);
                // 获取具体的详细数据
                var formData = {
                    "infoName": countryname,                         // 乡村的名字
                    "infoPic": countryPic,                           // 缩略图链接
                    "infoTitle": contentData[0].contentTitle,        // 内容标题                             // 小标题
                    "infoTime": contentData[0].createTime,           // 更新时间
                    "infoContent": contentData[0].countryContent     // 内容
                };
                // 创建数据库连接
                var conn = mysql.createConnection({
                    host: '139.199.103.139',
                    user: 'root',
                    password: '123456',
                    database:'guns',
                    port: '3306'
                });

                // 连接数据库
                conn.connect();
                console.log('数据库连接成功');

                var wholeData = formData;

                // 获取唯一的id
                var idValue = uuid.v1().replace(/-/g, "");
                // 向数据库里面插入数据
                var titleSql = "INSERT INTO beautifulcountryside(beautifulid,name,photo,contenttitle,createtime,content) " +
                    "VALUE " +
                    "('" + idValue + "' ,'" + wholeData.infoName + "' , '" + wholeData.infoPic + "' , '" + wholeData.infoTitle + "' , '" + wholeData.infoTime + "' , '" + wholeData.infoContent + "')";
                conn.query(titleSql,function(error,result){
                    if(error){
                        console.log(error.message);
                        return;
                    }
                    console.log('存入成功');
                });
            });
        }).on('error',function (){
            console.log('请求出错');
        });

    });
}

// 获取标题列表的DOM
var resData = http.get(url,function (res){
    var html = '';

    res.on('data',function (data){
        html += data;
    });

    res.on('end',function (){
        filterHtml(html);
    });
});

resData.on('error',function (){
    console.log('请求出错');
})
