/**
 * Created by lenovo on 2017/7/8.
 */

var http = require('http');
var cheerio = require('cheerio');
var uuid = require('node-uuid');
var mysql = require('mysql');
var url = 'http://www.gzegn.gov.cn/permissionitem_list_Sort.jspx?sortcode=001001001&areaid=520000';

// 获取具体办事内容的函数
function contentFun(sum){
    var $ = cheerio.load(sum);
    $("td[rowspan ^= '2']").remove();
    var contentArr = [];

    $('.selectTag > table > tbody >tr > .ta').each(function (index,value){
        var titleValue = $(this).text();
        var elementValue = $(this).next().text();
        // 去除数据里面所有的空格换行
        var tValue = titleValue.replace(/\s+/g, '');
        var eValue = elementValue.replace(/\s+/g, '');
        var contentData = {
            "title_Value": tValue,
            "element_Value": eValue
            };
        contentArr.push(contentData);
    });
    return contentArr;
}


// 获取大标题 小标题 具体办事内容的函数
function filterHtml(html){
    var $ = cheerio.load(html);
    var dataArr = [];

    // 获取有多少个大标题进行遍历
    $('.shouli_table_style').each(function (index,value){
        // 获取大标题
        var bigTitle = $(this).children('thead').children('tr').children('th').text();
        // 获取小标题
        var smallTitle = $(this).find('.showDown').eq(0).text();
        // 获取小标题链接
        var smallLink = 'http://www.gzegn.gov.cn' + $(this).find('.show_bj').children('td').children('a').eq(0).attr('href');
        // 去除数据里面所有的空格换行
        var bTitle = bigTitle.replace(/\s+/g, '');
        var sTitle = smallTitle.replace(/\s+/g, '');

        // 获取具体事项的DOM
        http.get(smallLink,function (res){
            var sum = '';

            res.on('data',function (data){
                sum += data;
            });

            res.on('end',function (){
                var contentData = contentFun(sum);

                // 获取具体的详细数据
                var formData = {
                    "theme_value":"生育收养",                               // 主题或部门
                    "big_title": bTitle,                                // 大标题
                    "small_title": sTitle,                              // 小标题
                    "thing_coding": contentData[1].element_Value,       // 事项编码
                    "thing_source": contentData[2].element_Value,       // 事项来源
                    "thing_type": contentData[3].element_Value,         // 事项类型
                    "accept_unit": contentData[4].element_Value,        // 受理单位
                    "matter_type": contentData[5].element_Value,        // 办件类型
                    "managed_object": contentData[6].element_Value,     // 办理对象
                    "statutory_time": contentData[7].element_Value,     // 法定时限
                    "promise_time": contentData[8].element_Value,       // 承诺时限
                    "permission_number": contentData[9].element_Value,  // 许可数量
                    "manage_window": contentData[10].element_Value,     // 办理窗口
                    "manage_time": contentData[11].element_Value,       // 办理时间
                    "apply_online": contentData[12].element_Value,      // 网上申请
                    "apply_condition": contentData[13].element_Value,   // 申请条件
                    "yes_charge": contentData[14].element_Value,        // 是否收费
                    "charge_standard": contentData[15].element_Value,   // 收费标准
                    "according_describe": contentData[16].element_Value,// 依据描述
                    "managed_publicity": contentData[17].element_Value, // 办理公示
                    "annual_inspection": contentData[18].element_Value, // 年审或年检
                    "manage_check": contentData[19].element_Value,      // 办理查询
                    "consult_thing": contentData[20].element_Value,     // 咨 询
                    "monitoring_com": contentData[21].element_Value     // 监督投诉
                };
                // 创建数据库连接
                var conn = mysql.createConnection({
                    host: '139.199.103.139',
                    user: 'root',
                    password: '123456',
                    database:'gzzw',
                    port: '3306'
                });

                // 连接数据库
                conn.connect();
                console.log('数据库连接成功');

                var wholeData = formData;
                // 获取唯一的id
                var idValue = uuid.v1().replace(/-/g, "");

                // 向数据库里面插入数据
                var titleSql = "INSERT INTO basedinformation(id,theme_value,big_title,small_title,thing_coding,thing_source,thing_type,accept_unit,matter_type,managed_object,statutory_time,promise_time,permission_number,manage_window,manage_time,apply_online,apply_condition,yes_charge,charge_standard,according_describe,managed_publicity,annual_inspection,manage_check,consult_thing,monitoring_com) " +
                    "VALUE " +
                    "('" + idValue + "','" + wholeData.theme_value + "' , '" + wholeData.big_title + "' , '" + wholeData.small_title + "' , '" + wholeData.thing_coding + "' , '" + wholeData.thing_source + "' , '" + wholeData.thing_type + "' , '" + wholeData.accept_unit + "' , '" + wholeData.matter_type + "' , '" + wholeData.managed_object + "' , '" + wholeData.statutory_time + "' , '" + wholeData.promise_time + "' , '" + wholeData.permission_number + "' , '" + wholeData.manage_window + "' , '" + wholeData.manage_time + "' , '" + wholeData.apply_online + "' , '" + wholeData.apply_condition + "' , '" + wholeData.yes_charge + "' , '" + wholeData.charge_standard + "' , '" + wholeData.according_describe + "' , '" + wholeData.managed_publicity + "' , '" + wholeData.annual_inspection + "' , '" + wholeData.manage_check + "' , '" + wholeData.consult_thing + "' , '" + wholeData.monitoring_com + "')";
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