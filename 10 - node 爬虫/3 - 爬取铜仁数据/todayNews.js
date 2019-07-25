/**
 * Created by lenovo on 2017/8/1.
 */

var http = require('http');
var cheerio = require('cheerio');
var uuid = require('node-uuid');
var mysql = require('mysql');
var url = 'http://www.trs.gov.cn/xwzx/trsyw/index.html';
var nowTime = "2017-08-07";
var imgUrl = 'http://www.trs.gov.cn/xwzx/trsyw/201708';

// 获取具体办事内容的函数
function contentFun(sum){
    var $ = cheerio.load(sum);
    var contentArr = [];

    $('img').each(function (index,value){
        $(this).attr("src", function(i,origValue){
            var imgsrc = origValue.substr(1);
            return imgUrl + imgsrc;

        });
    });

    // 标题
    var contentTitle = $('.title').children('h1').text();
    var contenttitle = contentTitle.replace(/\s+/g, '');

    //var newssource1 = $('.contData').text();
    //var newssource2 = newssource1.replace(/\s+/g, '');
    //var newssource = newssource2.split('：')[2];
    //var newssource = newssource.substring(0,newssource.length-2);
    var newssource = "铜仁网";

    var newsContent = $("#Zoom").html();
    var newscontent = unescape(newsContent.replace(/&#x/g,'%u').replace(/;/g,'').replace(/%uA0/g,' '));

    var contentData = {
        "contenttitle":contenttitle,
        "newssource": newssource,
        "newscontent": newscontent
    };
    contentArr.push(contentData);
    return contentArr;
}


// 获取大标题 小标题 具体办事内容的函数
function filterHtml(html){
    var $ = cheerio.load(html);
    var dataArr = [];

    // 获取有多少个新闻标题进行遍历
    $('.text-list li').each(function (index,value){
        // 获取新闻标题
        var newsTitle = $(this).children('a').text();
        // 获取新闻时间
        var newsTime1 = $(this).find('span').text();
        // 获取小标题链接
        var smallLink = $(this).children('a').attr('href');
        // 去除数据里面所有的空格换行
        var newstitle = newsTitle.replace(/\s+/g, '');
        var newstime2 = newsTime1.replace(/\s+/g, '');
        var newstime3 = newstime2.replace(/\(/g, '');
        var newstime = newstime3.replace(/\)/g, '');
        //console.log(newstitle + newstime);

        // 判断是不是内网的新闻
        //var judgeLink = smallLink.substring(0,26);

        // 获取当前的时间  年-月-日
        var todayTime = new Date();
        var todaytime = todayTime.toLocaleDateString();
        //console.log(todaytime);

        if(newstime == nowTime){
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
                        "newsTitle": contentData[0].contenttitle,        // 标题
                        "newsTime": newstime,                            // 时间
                        "author":"管理员",                               // 作者
                        "newsSource": contentData[0].newssource,         // 来源                             // 小标题
                        "newsContent": contentData[0].newscontent        // 内容
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
                    var titleSql = "INSERT INTO information(title,createtime,author,calssification,context) " +
                        "VALUE " +
                        "('" + wholeData.newsTitle + "' , '" + wholeData.newsTime + "' , '" + wholeData.author + "' , '" + wholeData.newsSource + "' , '" + wholeData.newsContent + "')";
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
        }else{

        }
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