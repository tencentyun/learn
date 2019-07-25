/**
 * Created by lenovo on 2017/7/7.
 */

var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.gzegn.gov.cn/lawguide/52000020170412162145162093.jspx';

function filterHtml(html){
    var $ = cheerio.load(html);
    //console.log($('tr'));
    //console.log($("td[rowspan ^= '2']").text());
    $("td[rowspan ^= '2']").remove();
    var dataArr = [];

    $('.selectTag > table > tbody >tr > .ta').each(function (index,value){
        var titleValue = $(this).text();
        var elementValue = $(this).next().text();
        formData = [
            titleValue,elementValue
        ];
        dataArr.push(formData);
    });

    console.log(dataArr);
}

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
