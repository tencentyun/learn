/**
 * Created by lenovo on 2017/7/11.
 */
/**
 * Created by lenovo on 2017/7/10.
 */

var http = require('http');
var cheerio = require('cheerio');
var uuid = require('node-uuid');
var mysql = require('mysql');
var themeValues = '建设管理';
var url = 'http://www.gzegn.gov.cn/permissionitem_list_Sort.jspx?sortcode=002001014&areaid=520600';

// 获取具体办事内容的函数
function contentFun(sum){
    var $ = cheerio.load(sum);
    $("td[rowspan ^= '2']").remove();
    var contentArr = [];

    var thingsType = $('.bszn-warp-bt').text().replace(/\s+/g, '');
    thingsTypeValue = thingsType.substring(thingsType.length-10,thingsType.length-6);

    // 根据公共服务 或者 行政许可进行划分
    if(thingsTypeValue == '公共服务'){

        $('.tagContent').each(function (index,value){

            if($('.tagContent')[index] == $('.tagContent')[0]){
                // 基本信息
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = $(this).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }else if($('.tagContent')[index] == $('.tagContent')[1]){
                // 办理依据
                for(var i = 1; i < 9; i++){
                    var titleValue = $(this).find('tr').eq(i).children().eq(0).text();
                    var elementValue = $(this).find('tr').eq(i).children().eq(0).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                }
            }else if($('.tagContent')[index] == $('.tagContent')[2]){
                // 申请材料
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = '';
                    var numIndex = index;
                    $(this).parent('tr').nextAll().each(function (index,value){
                        elementValue += $(this).children().eq(numIndex).text() + '#';
                    })

                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }else if($('.tagContent')[index] == $('.tagContent')[3]){
                // 特殊环节
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = $(this).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }else if($('.tagContent')[index] == $('.tagContent')[4]){
                // 基本流程
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = '';
                    var numIndex = index;
                    $(this).parent('tr').nextAll().each(function (index,value){
                        elementValue += $(this).children().eq(numIndex).text() + '#';
                    })

                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }
        });
    }else if(thingsTypeValue == '行政许可'){
        $('.tagContent').each(function (index,value){
            if($('.tagContent')[index] == $('.tagContent')[0]){
                // 基本信息
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = $(this).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }else if($('.tagContent')[index] == $('.tagContent')[1]){
                // 设定依据
                for(var i = 1; i < 9; i++){
                    var titleValue = $(this).find('tr').eq(i).children().eq(0).text();
                    var elementValue = $(this).find('tr').eq(i).children().eq(0).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                }
            }else if($('.tagContent')[index] == $('.tagContent')[2]){
                // 申请材料
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = '';
                    var numIndex = index;
                    $(this).parent('tr').nextAll().each(function (index,value){
                        elementValue += $(this).children().eq(numIndex).text() + '#';
                    })

                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }else if($('.tagContent')[index] == $('.tagContent')[3]){
                // 特殊环节
                $(this).find('.ta').each(function (index,value){
                    var titleValue = $(this).text();
                    var elementValue = $(this).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                })
            }
        });
    }

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
                //console.log(contentData);

                if(thingsTypeValue == '公共服务'){
                    // 获取具体的详细数据
                    //var formData = {
                    //    "themevalue": themeValues,                          // 主题或部门
                    //    "bigtitle": bTitle,                                // 大标题
                    //    "smalltitle": sTitle,                              // 小标题
                    //    "thingcoding": contentData[1].elementValue,       // 事项编码
                    //    "thingsource": contentData[2].elementValue,       // 事项来源
                    //    "thingtype": contentData[3].elementValue,         // 事项类型
                    //    "acceptunit": contentData[4].elementValue,        // 受理单位
                    //    "mattertype": contentData[5].elementValue,        // 办件类型
                    //    "managedobject": contentData[6].elementValue,     // 办理对象
                    //    "statutorytime": contentData[7].elementValue,     // 法定时限
                    //    "promisetime": contentData[8].elementValue,       // 承诺时限
                    //    "permissionnumber": contentData[9].elementValue,  // 许可数量
                    //    "managewindow": contentData[10].elementValue,     // 办理窗口
                    //    "managetime": contentData[11].elementValue,       // 办理时间
                    //    "applyonline": contentData[12].elementValue,      // 网上申请
                    //    "applycondition": contentData[13].elementValue,   // 申请条件
                    //    "yescharge": contentData[14].elementValue,        // 是否收费
                    //    "chargestandard": contentData[15].elementValue,   // 收费标准
                    //    "accordingdescribe": contentData[16].elementValue,// 依据描述
                    //    "managedpublicity": contentData[17].elementValue, // 办理公示
                    //    "annualinspection": contentData[18].elementValue, // 年审或年检
                    //    "managecheck": contentData[19].elementValue,      // 办理查询
                    //    "consultthing": contentData[20].elementValue,     // 咨 询
                    //    "monitoringcom": contentData[21].elementValue,    // 监督投诉
                    //    "statutoryacc1": contentData[22].elementValue,    // 办理依据（法律、法规、规章及有关规定）1
                    //    "accdescribe1": contentData[23].elementValue,     // 依据描述1
                    //    "statutoryacc2": contentData[24].elementValue,    // 办理依据（法律、法规、规章及有关规定）2
                    //    "accdescribe2": contentData[25].elementValue,     // 依据描述2
                    //    "statutoryacc3": contentData[26].elementValue,    // 办理依据（法律、法规、规章及有关规定）3
                    //    "accdescribe3": contentData[27].elementValue,    // 依据描述3
                    //    "statutoryacc4" :contentData[28].elementValue,    // 办理依据（法律、法规、规章及有关规定）4
                    //    "accdescribe4": contentData[29].elementValue,     // 依据描述4
                    //    "sequencenum": contentData[30].elementValue,      // 序号
                    //    "materialname": contentData[31].elementValue,     // 材料名称
                    //    "materialrequire": contentData[32].elementValue,  // 材料要求
                    //    "transactacc": contentData[33].elementValue,      // 办理依据（法律、法规、规章及有关规定）及描述
                    //    "speciallink": contentData[34].elementValue,      // 特殊环节名称
                    //    "linkcharge": contentData[35].elementValue,       // 环节是否收费
                    //    "linkdescribe": contentData[36].elementValue,    // 环节实施依据及描述
                    //    "linkchargedes": contentData[37].elementValue    // 环节收费依据及描述
                    //};
                    //// 创建数据库连接
                    //var conn = mysql.createConnection({
                    //    host: '139.199.103.139',
                    //    user: 'root',
                    //    password: '123456',
                    //    database:'sztr',
                    //    port: '3306'
                    //});
                    //
                    //// 连接数据库
                    //conn.connect();
                    //console.log('数据库连接成功');
                    //
                    //var wholeData = formData;
                    //// 获取唯一的id
                    //var idValue = uuid.v1().replace(/-/g, "");
                    //
                    //// 向数据库里面插入数据
                    //var titleSql = "INSERT INTO thingguide(guideid,themevalue,bigtitle,smalltitle,thingcoding,thingsource,thingtype,acceptunit,mattertype,managedobject,statutorytime,promisetime,permissionnumber,managewindow,managetime,applyonline,applycondition,yescharge,chargestandard,accordingdescribe,managedpublicity,annualinspection,managecheck,consultthing,monitoringcom,statutoryacc1,accdescribe1,statutoryacc2,accdescribe2,statutoryacc3,accdescribe3,statutoryacc4,accdescribe4,sequencenum,materialname,materialrequire,transactacc,speciallink,linkcharge,linkdescribe,linkchargedes) " +
                    //    "VALUE " +
                    //    "('" + idValue + "','" + wholeData.themevalue + "' , '" + wholeData.bigtitle + "' , '" + wholeData.smalltitle + "' , '" + wholeData.thingcoding + "' , '" + wholeData.thingsource + "' , '" + wholeData.thingtype + "' , '" + wholeData.acceptunit + "' , '" + wholeData.mattertype + "' , '" + wholeData.managedobject + "' , '" + wholeData.statutorytime + "' , '" + wholeData.promisetime + "' , '" + wholeData.permissionnumber + "' , '" + wholeData.managewindow + "' , '" + wholeData.managetime + "' , '" + wholeData.applyonline + "' , '" + wholeData.applycondition + "' , '" + wholeData.yescharge + "' , '" + wholeData.chargestandard + "' , '" + wholeData.accordingdescribe + "' , '" + wholeData.managedpublicity + "' , '" + wholeData.annualinspection + "' , '" + wholeData.managecheck + "' , '" + wholeData.consultthing + "' , '" + wholeData.monitoringcom + "', '" + wholeData.statutoryacc1 + "', '" + wholeData.accdescribe1 + "', '" + wholeData.statutoryacc2 + "', '" + wholeData.accdescribe2 + "', '" + wholeData.statutoryacc3 + "', '" + wholeData.accdescribe3 + "', '" + wholeData.statutoryacc4 + "', '" + wholeData.accdescribe4 + "', '" + wholeData.sequencenum + "', '" + wholeData.materialname + "', '" + wholeData.materialrequire + "', '" + wholeData.transactacc + "', '" + wholeData.speciallink + "', '" + wholeData.linkcharge + "', '" + wholeData.linkdescribe + "', '" + wholeData.linkchargedes + "')";
                    //conn.query(titleSql,function(error,result){
                    //    if(error){
                    //        console.log(error.message);
                    //        return;
                    //    }
                    //    console.log('存入成功');
                    //});
                }else if(thingsTypeValue == '行政许可'){
                    // 获取具体的详细数据
                    var formData = {
                        "themevalue": themeValues,                         // 主题或部门
                        "bigtitle": bTitle,                                // 大标题
                        "smalltitle": sTitle,                              // 小标题
                        "thingcoding": contentData[1].elementValue,       // 事项编码
                        "powersource": contentData[2].elementValue,       // 权力来源
                        "thingtype": contentData[3].elementValue,         // 事项类型
                        "powerunit": contentData[4].elementValue,         // 权力部门
                        "mattertype": contentData[5].elementValue,        // 办件类型
                        "managedobject": contentData[6].elementValue,     // 办理对象
                        "statutorytime": contentData[7].elementValue,     // 法定时限
                        "promisetime": contentData[8].elementValue,       // 承诺时限
                        "permissionnumber": contentData[9].elementValue,  // 许可数量
                        "managewindow": contentData[10].elementValue,     // 办理窗口
                        "managetime": contentData[11].elementValue,       // 办理时间
                        "applyonline": contentData[12].elementValue,      // 网上申请
                        "applycondition": contentData[13].elementValue,   // 申请条件及条件依据
                        "yescharge": contentData[14].elementValue,        // 是否收费
                        "chargestandard": contentData[15].elementValue,   // 收费标准
                        "accordingdescribe": contentData[16].elementValue,// 收费依据及描述
                        "managedpublicity": contentData[17].elementValue, // 办理公示
                        "annualinspection": contentData[18].elementValue, // 年审或年检
                        "managecheck": contentData[19].elementValue,      // 办理查询
                        "consultthing": contentData[20].elementValue,     // 咨 询
                        "monitoringcom": contentData[21].elementValue,    // 监督投诉
                        "administrativerec": contentData[22].elementValue,// 行政复议行政诉讼
                        "statutoryacc1": contentData[23].elementValue,    // 法定依据1
                        "accdescribe1": contentData[24].elementValue,     // 依据描述1
                        "statutoryacc2": contentData[25].elementValue,    // 法定依据2
                        "accdescribe2": contentData[26].elementValue,     // 依据描述2
                        "statutoryacc3": contentData[27].elementValue,    // 法定依据3
                        "accdescribe3": contentData[28].elementValue,    // 依据描述3
                        "statutoryacc4" :contentData[29].elementValue,    // 法定依据4
                        "accdescribe4": contentData[30].elementValue,     // 依据描述4
                        "sequencenum": contentData[31].elementValue,      // 序号
                        "materialname": contentData[32].elementValue,     // 材料名称
                        "materialrequire": contentData[33].elementValue,  // 材料要求
                        "materialsource": contentData[34].elementValue,  // 材料来源
                        "transactacc": contentData[35].elementValue,      // 法定依据及描述
                        "speciallink": contentData[36].elementValue,      // 特殊环节名称
                        "linkcharge": contentData[37].elementValue,       // 环节是否收费
                        "successtime": contentData[38].elementValue,       // 完成时限
                        "linkdescribe": contentData[39].elementValue,    // 法律依据及描述
                        "linkchargedes": contentData[40].elementValue    // 收费依据及描述
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
                    var titleSql = "INSERT INTO thingguide(guideid,themevalue,bigtitle,smalltitle,thingcoding,powersource,thingtype,powerunit,mattertype,managedobject,statutorytime,promisetime,permissionnumber,managewindow,managetime,applyonline,applycondition,yescharge,chargestandard,accordingdescribe,managedpublicity,annualinspection,managecheck,consultthing,monitoringcom,administrativerec,statutoryacc1,accdescribe1,statutoryacc2,accdescribe2,statutoryacc3,accdescribe3,statutoryacc4,accdescribe4,sequencenum,materialname,materialrequire,materialsource,transactacc,speciallink,linkcharge,successtime,linkdescribe,linkchargedes) " +
                        "VALUE " +
                        "('" + idValue + "','" + wholeData.themevalue + "' , '" + wholeData.bigtitle + "' , '" + wholeData.smalltitle + "' , '" + wholeData.thingcoding + "' , '" + wholeData.powersource + "' , '" + wholeData.thingtype + "' , '" + wholeData.powerunit + "' , '" + wholeData.mattertype + "' , '" + wholeData.managedobject + "' , '" + wholeData.statutorytime + "' , '" + wholeData.promisetime + "' , '" + wholeData.permissionnumber + "' , '" + wholeData.managewindow + "' , '" + wholeData.managetime + "' , '" + wholeData.applyonline + "' , '" + wholeData.applycondition + "' , '" + wholeData.yescharge + "' , '" + wholeData.chargestandard + "' , '" + wholeData.accordingdescribe + "' , '" + wholeData.managedpublicity + "' , '" + wholeData.annualinspection + "' , '" + wholeData.managecheck + "' , '" + wholeData.consultthing + "' , '" + wholeData.monitoringcom + "' , '" + wholeData.administrativerec + "' , '" + wholeData.statutoryacc1 + "' , '" + wholeData.accdescribe1 + "' , '" + wholeData.statutoryacc2 + "' , '" + wholeData.accdescribe2 + "' , '" + wholeData.statutoryacc3 + "' , '" + wholeData.accdescribe3 + "' , '" + wholeData.statutoryacc4 + "' , '" + wholeData.accdescribe4 + "' , '" + wholeData.sequencenum + "' , '" + wholeData.materialname + "' , '" + wholeData.materialrequire + "' , '" + wholeData.materialsource + "' , '" + wholeData.transactacc + "' , '" + wholeData.speciallink + "' , '" + wholeData.linkcharge + "' , '" + wholeData.successtime + "' , '" + wholeData.linkdescribe + "' , '" + wholeData.linkchargedes + "')";
                    conn.query(titleSql,function(error,result){
                        if(error){
                            console.log(error.message);
                            return;
                        }
                        console.log('存入成功');
                    });
                }
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