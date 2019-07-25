/**
 * Created by lenovo on 2017/7/24.
 */
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
var themeValues = '其他';
var url = 'http://www.gzegn.gov.cn/permissionitem_list_Sort.jspx?pageNo=16&areaid=520600&sortcode=002001021';

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
                for(var i = 0; i < 23; i++){
                    var titleValue = $(this).find('.ta').eq(i).text();
                    var elementValue = $(this).find('.ta').eq(i).next().text();
                    // 去除数据里面所有的空格换行
                    var tValue = titleValue.replace(/\s+/g, '');
                    var eValue = elementValue.replace(/\s+/g, '');
                    var contentData = {
                        "titleValue": tValue,
                        "elementValue": eValue
                    };
                    contentArr.push(contentData);
                }
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
                for(var i = 1; i < 11; i++){
                    for(var m = 0; m < 4; m++){
                        var elementValue = $(this).find('tr').eq(i).find('td').eq(m).text();

                        var tValue = '';
                        var eValue = elementValue.replace(/\s+/g, '');
                        var contentData = {
                            "titleValue": tValue,
                            "elementValue": eValue
                        };
                        contentArr.push(contentData);
                    }
                }
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
                // 办理流程
                for(var i = 0; i < 4; i++){
                    for(var m = 0; m < 5; m++){
                        var titleValue = '';
                        var elementValue = $(this).find('table').eq(i).find('tr').eq(1).find('td').eq(m).text();
                        // 去除数据里面所有的空格换行
                        var tValue = titleValue;
                        var eValue = elementValue.replace(/\s+/g, '');
                        var contentData = {
                            "titleValue": tValue,
                            "elementValue": eValue
                        };
                        contentArr.push(contentData);
                    }
                }
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
                $(this).find('tr').each(function (index,value){
                    $(this).find('td').eq(3).remove();
                })

                for(var i = 1; i < 11; i++){
                    for(var m = 0; m < 4; m++){
                        var elementValue = $(this).find('tr').eq(i).find('td').eq(m).text();

                        var tValue = '';
                        var eValue = elementValue.replace(/\s+/g, '');
                        var contentData = {
                            "titleValue": tValue,
                            "elementValue": eValue
                        };
                        contentArr.push(contentData);
                    }
                }
            }else if($('.tagContent')[index] == $('.tagContent')[3]){
                // 特殊环节
                $(this).find('tr').eq(1).find('td').eq(4).remove();
                $(this).find('tr').eq(1).find('td').eq(5).remove();
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
                // 办理流程
                $(this).find('table').eq(1).find('tr').eq(1).find('td').eq(1).remove();
                $(this).find('table').eq(2).find('tr').eq(1).find('td').eq(1).remove();
                for(var i = 0; i < 4; i++){
                    for(var m = 0; m < 5; m++){
                        var titleValue = '';
                        var elementValue = $(this).find('table').eq(i).find('tr').eq(1).find('td').eq(m).text();
                        // 去除数据里面所有的空格换行
                        var tValue = titleValue;
                        var eValue = elementValue.replace(/\s+/g, '');
                        var contentData = {
                            "titleValue": tValue,
                            "elementValue": eValue
                        };
                        contentArr.push(contentData);
                    }
                }
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

                        "sequencenum1": contentData[31].elementValue,      // 序号1
                        "materialname1": contentData[32].elementValue,     // 材料名称1
                        "materialrequire1": contentData[33].elementValue,  // 材料要求1
                        "transactacc1": contentData[34].elementValue,      // 法定依据及描述1

                        "sequencenum2": contentData[35].elementValue,      // 序号2
                        "materialname2": contentData[36].elementValue,     // 材料名称2
                        "materialrequire2": contentData[37].elementValue,  // 材料要求2
                        "transactacc2": contentData[38].elementValue,      // 法定依据及描述2

                        "sequencenum3": contentData[39].elementValue,      // 序号3
                        "materialname3": contentData[40].elementValue,     // 材料名称3
                        "materialrequire3": contentData[41].elementValue,  // 材料要求3
                        "transactacc3": contentData[42].elementValue,      // 法定依据及描述3

                        "sequencenum4": contentData[43].elementValue,      // 序号4
                        "materialname4": contentData[44].elementValue,     // 材料名称4
                        "materialrequire4": contentData[45].elementValue,  // 材料要求4
                        "transactacc4": contentData[46].elementValue,      // 法定依据及描述4

                        "sequencenum5": contentData[47].elementValue,      // 序号5
                        "materialname5": contentData[48].elementValue,     // 材料名称5
                        "materialrequire5": contentData[49].elementValue,  // 材料要求5
                        "transactacc5": contentData[50].elementValue,      // 法定依据及描述5

                        "sequencenum6": contentData[51].elementValue,      // 序号6
                        "materialname6": contentData[52].elementValue,     // 材料名称6
                        "materialrequire6": contentData[53].elementValue,  // 材料要求6
                        "transactacc6": contentData[54].elementValue,      // 法定依据及描述6

                        "sequencenum7": contentData[55].elementValue,      // 序号7
                        "materialname7": contentData[56].elementValue,     // 材料名称7
                        "materialrequire7": contentData[57].elementValue,  // 材料要求7
                        "transactacc7": contentData[58].elementValue,      // 法定依据及描述7

                        "sequencenum8": contentData[59].elementValue,      // 序号8
                        "materialname8": contentData[60].elementValue,     // 材料名称8
                        "materialrequire8": contentData[61].elementValue,  // 材料要求8
                        "transactacc8": contentData[62].elementValue,      // 法定依据及描述8

                        "sequencenum9": contentData[63].elementValue,      // 序号9
                        "materialname9": contentData[64].elementValue,     // 材料名称9
                        "materialrequire9": contentData[65].elementValue,  // 材料要求9
                        "transactacc9": contentData[66].elementValue,      // 法定依据及描述9

                        "sequencenum10": contentData[67].elementValue,      // 序号10
                        "materialname10": contentData[68].elementValue,     // 材料名称10
                        "materialrequire10": contentData[69].elementValue,  // 材料要求10
                        "transactacc10": contentData[70].elementValue,      // 法定依据及描述10

                        "speciallink": contentData[71].elementValue,      // 特殊环节名称
                        "linkcharge": contentData[72].elementValue,       // 环节是否收费
                        "linkdescribe": contentData[73].elementValue,    // 法律依据及描述
                        "linkchargedes": contentData[74].elementValue,    // 收费依据及描述

                        "step1": contentData[75].elementValue,            // 步骤1
                        "receiver1": contentData[76].elementValue,        // 受理人1
                        "dealtime1": contentData[77].elementValue,        // 办理时限1
                        "reviewstandard1": contentData[78].elementValue,  // 审查标准1
                        "reviewresult1": contentData[79].elementValue,    // 审查结果1

                        "step2": contentData[80].elementValue,            // 步骤2
                        "receiver2": contentData[81].elementValue,        // 受理人2
                        "dealtime2": contentData[82].elementValue,        // 办理时限2
                        "reviewstandard2": contentData[83].elementValue,  // 审查标准2
                        "reviewresult2": contentData[84].elementValue,    // 审查结果2

                        "step3": contentData[85].elementValue,            // 步骤3
                        "receiver3": contentData[86].elementValue,        // 受理人3
                        "dealtime3": contentData[87].elementValue,        // 办理时限3
                        "reviewstandard3": contentData[88].elementValue,  // 审查标准3
                        "reviewresult3": contentData[89].elementValue,    // 审查结果3

                        "step4": contentData[90].elementValue,            // 步骤4
                        "receiver4": contentData[91].elementValue,        // 受理人4
                        "dealtime4": contentData[92].elementValue,        // 办理时限4
                        "reviewstandard4": contentData[93].elementValue,  // 审查标准4
                        "reviewresult4": contentData[94].elementValue,    // 审查结果4
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
                    var titleSql = "INSERT INTO thingguide(" +
                        "guideid,themevalue,bigtitle,smalltitle,thingcoding,powersource,thingtype,powerunit,mattertype,managedobject,statutorytime,promisetime,permissionnumber,managewindow,managetime,applyonline,applycondition,yescharge,chargestandard,accordingdescribe,managedpublicity,annualinspection,managecheck,consultthing,monitoringcom,administrativerec,statutoryacc1,accdescribe1,statutoryacc2,accdescribe2,statutoryacc3,accdescribe3,statutoryacc4,accdescribe4," +
                        "sequencenum1,materialname1,materialrequire1,transactacc1,sequencenum2,materialname2,materialrequire2,transactacc2,sequencenum3,materialname3,materialrequire3,transactacc3,sequencenum4,materialname4,materialrequire4,transactacc4,sequencenum5,materialname5,materialrequire5,transactacc5,sequencenum6,materialname6,materialrequire6,transactacc6,sequencenum7,materialname7,materialrequire7,transactacc7,sequencenum8,materialname8,materialrequire8,transactacc8,sequencenum9,materialname9,materialrequire9,transactacc9,sequencenum10,materialname10,materialrequire10,transactacc10," +
                        "speciallink,linkcharge,linkdescribe,linkchargedes," +
                        "step1,receiver1,dealtime1,reviewstandard1,reviewresult1,step2,receiver2,dealtime2,reviewstandard2,reviewresult2,step3,receiver3,dealtime3,reviewstandard3,reviewresult3,step4,receiver4,dealtime4,reviewstandard4,reviewresult4) " +
                        "VALUE " +
                        "('" + idValue + "','" + wholeData.themevalue + "' , '" + wholeData.bigtitle + "' , '" + wholeData.smalltitle + "' , '" + wholeData.thingcoding + "' , '" + wholeData.powersource + "' , '" + wholeData.thingtype + "' , '" + wholeData.powerunit + "' , '" + wholeData.mattertype + "' , '" + wholeData.managedobject + "' , '" + wholeData.statutorytime + "' , '" + wholeData.promisetime + "' , '" + wholeData.permissionnumber + "' , '" + wholeData.managewindow + "' , '" + wholeData.managetime + "' , '" + wholeData.applyonline + "' , '" + wholeData.applycondition + "' , '" + wholeData.yescharge + "' , '" + wholeData.chargestandard + "' , '" + wholeData.accordingdescribe + "' , '" + wholeData.managedpublicity + "' , '" + wholeData.annualinspection + "' , '" + wholeData.managecheck + "' , '" + wholeData.consultthing + "' , '" + wholeData.monitoringcom + "' , '" + wholeData.administrativerec + "' , '" + wholeData.statutoryacc1 + "' , '" + wholeData.accdescribe1 + "' , '" + wholeData.statutoryacc2 + "' , '" + wholeData.accdescribe2 + "' , '" + wholeData.statutoryacc3 + "' , '" + wholeData.accdescribe3 + "' , '" + wholeData.statutoryacc4 + "' , '" + wholeData.accdescribe4 + "' , '" +
                        wholeData.sequencenum1 + "' , '" + wholeData.materialname1 + "' , '" + wholeData.materialrequire1 + "' , '" + wholeData.transactacc1 + "' , '" + wholeData.sequencenum2 + "' , '" + wholeData.materialname2 + "' , '" + wholeData.materialrequire2 + "' , '" + wholeData.transactacc2 + "' , '" + wholeData.sequencenum3 + "' , '" + wholeData.materialname3 + "' , '" + wholeData.materialrequire3 + "' , '" + wholeData.transactacc3 + "' , '" + wholeData.sequencenum4 + "' , '" + wholeData.materialname4 + "' , '" + wholeData.materialrequire4 + "' , '" + wholeData.transactacc4 + "' , '" + wholeData.sequencenum5 + "' , '" + wholeData.materialname5 + "' , '" + wholeData.materialrequire5 + "' , '" + wholeData.transactacc5 + "' , '" + wholeData.sequencenum6 + "' , '" + wholeData.materialname6 + "' , '" + wholeData.materialrequire6 + "' , '" + wholeData.transactacc6 + "' , '" + wholeData.sequencenum7 + "' , '" + wholeData.materialname7 + "' , '" + wholeData.materialrequire7 + "' , '" + wholeData.transactacc7 + "' , '" + wholeData.sequencenum8 + "' , '" + wholeData.materialname8 + "' , '" + wholeData.materialrequire8 + "' , '" + wholeData.transactacc8 + "' , '" + wholeData.sequencenum9 + "' , '" + wholeData.materialname9 + "' , '" + wholeData.materialrequire9 + "' , '" + wholeData.transactacc9 + "' , '" + wholeData.sequencenum10 + "' , '" + wholeData.materialname10 + "' , '" + wholeData.materialrequire10 + "' , '" + wholeData.transactacc10 + "' , '" +
                        wholeData.speciallink + "' , '" + wholeData.linkcharge + "' , '" + wholeData.linkdescribe + "' , '" + wholeData.linkchargedes + "', '" +
                        wholeData.step1 + "', '" + wholeData.receiver1 + "', '" + wholeData.dealtime1 + "', '" + wholeData.reviewstandard1 + "', '" + wholeData.reviewresult1 + "', '" + wholeData.step2 + "', '" + wholeData.receiver2 + "', '" + wholeData.dealtime2 + "', '" + wholeData.reviewstandard2 + "', '" + wholeData.reviewresult2 + "', '" + wholeData.step3 + "', '" + wholeData.receiver3 + "', '" + wholeData.dealtime3 + "', '" + wholeData.reviewstandard3 + "', '" + wholeData.reviewresult3 + "', '" + wholeData.step4 + "', '" + wholeData.receiver4 + "', '" + wholeData.dealtime4 + "', '" + wholeData.reviewstandard4 + "', '" + wholeData.reviewresult4 + "')";
                    conn.query(titleSql,function(error,result){
                        if(error){
                            console.log(error.message);
                            return;
                        }
                        console.log('存入成功');
                    });
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

                        "sequencenum1": contentData[31].elementValue,      // 序号1
                        "materialname1": contentData[32].elementValue,     // 材料名称1
                        "materialrequire1": contentData[33].elementValue,  // 材料要求1
                        "transactacc1": contentData[34].elementValue,      // 法定依据及描述1

                        "sequencenum2": contentData[35].elementValue,      // 序号2
                        "materialname2": contentData[36].elementValue,     // 材料名称2
                        "materialrequire2": contentData[37].elementValue,  // 材料要求2
                        "transactacc2": contentData[38].elementValue,      // 法定依据及描述2

                        "sequencenum3": contentData[39].elementValue,      // 序号3
                        "materialname3": contentData[40].elementValue,     // 材料名称3
                        "materialrequire3": contentData[41].elementValue,  // 材料要求3
                        "transactacc3": contentData[42].elementValue,      // 法定依据及描述3

                        "sequencenum4": contentData[43].elementValue,      // 序号4
                        "materialname4": contentData[44].elementValue,     // 材料名称4
                        "materialrequire4": contentData[45].elementValue,  // 材料要求4
                        "transactacc4": contentData[46].elementValue,      // 法定依据及描述4

                        "sequencenum5": contentData[47].elementValue,      // 序号5
                        "materialname5": contentData[48].elementValue,     // 材料名称5
                        "materialrequire5": contentData[49].elementValue,  // 材料要求5
                        "transactacc5": contentData[50].elementValue,      // 法定依据及描述5

                        "sequencenum6": contentData[51].elementValue,      // 序号6
                        "materialname6": contentData[52].elementValue,     // 材料名称6
                        "materialrequire6": contentData[53].elementValue,  // 材料要求6
                        "transactacc6": contentData[54].elementValue,      // 法定依据及描述6

                        "sequencenum7": contentData[55].elementValue,      // 序号7
                        "materialname7": contentData[56].elementValue,     // 材料名称7
                        "materialrequire7": contentData[57].elementValue,  // 材料要求7
                        "transactacc7": contentData[58].elementValue,      // 法定依据及描述7

                        "sequencenum8": contentData[59].elementValue,      // 序号8
                        "materialname8": contentData[60].elementValue,     // 材料名称8
                        "materialrequire8": contentData[61].elementValue,  // 材料要求8
                        "transactacc8": contentData[62].elementValue,      // 法定依据及描述8

                        "sequencenum9": contentData[63].elementValue,      // 序号9
                        "materialname9": contentData[64].elementValue,     // 材料名称9
                        "materialrequire9": contentData[65].elementValue,  // 材料要求9
                        "transactacc9": contentData[66].elementValue,      // 法定依据及描述9

                        "sequencenum10": contentData[67].elementValue,      // 序号10
                        "materialname10": contentData[68].elementValue,     // 材料名称10
                        "materialrequire10": contentData[69].elementValue,  // 材料要求10
                        "transactacc10": contentData[70].elementValue,      // 法定依据及描述10

                        "speciallink": contentData[71].elementValue,      // 特殊环节名称
                        "linkcharge": contentData[72].elementValue,       // 环节是否收费
                        "linkdescribe": contentData[73].elementValue,    // 法律依据及描述
                        "linkchargedes": contentData[74].elementValue,    // 收费依据及描述

                        "step1": contentData[75].elementValue,            // 步骤1
                        "receiver1": contentData[76].elementValue,        // 受理人1
                        "dealtime1": contentData[77].elementValue,        // 办理时限1
                        "reviewstandard1": contentData[78].elementValue,  // 审查标准1
                        "reviewresult1": contentData[79].elementValue,    // 审查结果1

                        "step2": contentData[80].elementValue,            // 步骤2
                        "receiver2": contentData[81].elementValue,        // 受理人2
                        "dealtime2": contentData[82].elementValue,        // 办理时限2
                        "reviewstandard2": contentData[83].elementValue,  // 审查标准2
                        "reviewresult2": contentData[84].elementValue,    // 审查结果2

                        "step3": contentData[85].elementValue,            // 步骤3
                        "receiver3": contentData[86].elementValue,        // 受理人3
                        "dealtime3": contentData[87].elementValue,        // 办理时限3
                        "reviewstandard3": contentData[88].elementValue,  // 审查标准3
                        "reviewresult3": contentData[89].elementValue,    // 审查结果3

                        "step4": contentData[90].elementValue,            // 步骤4
                        "receiver4": contentData[91].elementValue,        // 受理人4
                        "dealtime4": contentData[92].elementValue,        // 办理时限4
                        "reviewstandard4": contentData[93].elementValue,  // 审查标准4
                        "reviewresult4": contentData[94].elementValue,    // 审查结果4
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
                    var titleSql = "INSERT INTO thingguide(" +
                        "guideid,themevalue,bigtitle,smalltitle,thingcoding,powersource,thingtype,powerunit,mattertype,managedobject,statutorytime,promisetime,permissionnumber,managewindow,managetime,applyonline,applycondition,yescharge,chargestandard,accordingdescribe,managedpublicity,annualinspection,managecheck,consultthing,monitoringcom,administrativerec,statutoryacc1,accdescribe1,statutoryacc2,accdescribe2,statutoryacc3,accdescribe3,statutoryacc4,accdescribe4," +
                        "sequencenum1,materialname1,materialrequire1,transactacc1,sequencenum2,materialname2,materialrequire2,transactacc2,sequencenum3,materialname3,materialrequire3,transactacc3,sequencenum4,materialname4,materialrequire4,transactacc4,sequencenum5,materialname5,materialrequire5,transactacc5,sequencenum6,materialname6,materialrequire6,transactacc6,sequencenum7,materialname7,materialrequire7,transactacc7,sequencenum8,materialname8,materialrequire8,transactacc8,sequencenum9,materialname9,materialrequire9,transactacc9,sequencenum10,materialname10,materialrequire10,transactacc10," +
                        "speciallink,linkcharge,linkdescribe,linkchargedes," +
                        "step1,receiver1,dealtime1,reviewstandard1,reviewresult1,step2,receiver2,dealtime2,reviewstandard2,reviewresult2,step3,receiver3,dealtime3,reviewstandard3,reviewresult3,step4,receiver4,dealtime4,reviewstandard4,reviewresult4) " +
                        "VALUE " +
                        "('" + idValue + "','" + wholeData.themevalue + "' , '" + wholeData.bigtitle + "' , '" + wholeData.smalltitle + "' , '" + wholeData.thingcoding + "' , '" + wholeData.powersource + "' , '" + wholeData.thingtype + "' , '" + wholeData.powerunit + "' , '" + wholeData.mattertype + "' , '" + wholeData.managedobject + "' , '" + wholeData.statutorytime + "' , '" + wholeData.promisetime + "' , '" + wholeData.permissionnumber + "' , '" + wholeData.managewindow + "' , '" + wholeData.managetime + "' , '" + wholeData.applyonline + "' , '" + wholeData.applycondition + "' , '" + wholeData.yescharge + "' , '" + wholeData.chargestandard + "' , '" + wholeData.accordingdescribe + "' , '" + wholeData.managedpublicity + "' , '" + wholeData.annualinspection + "' , '" + wholeData.managecheck + "' , '" + wholeData.consultthing + "' , '" + wholeData.monitoringcom + "' , '" + wholeData.administrativerec + "' , '" + wholeData.statutoryacc1 + "' , '" + wholeData.accdescribe1 + "' , '" + wholeData.statutoryacc2 + "' , '" + wholeData.accdescribe2 + "' , '" + wholeData.statutoryacc3 + "' , '" + wholeData.accdescribe3 + "' , '" + wholeData.statutoryacc4 + "' , '" + wholeData.accdescribe4 + "' , '" +
                        wholeData.sequencenum1 + "' , '" + wholeData.materialname1 + "' , '" + wholeData.materialrequire1 + "' , '" + wholeData.transactacc1 + "' , '" + wholeData.sequencenum2 + "' , '" + wholeData.materialname2 + "' , '" + wholeData.materialrequire2 + "' , '" + wholeData.transactacc2 + "' , '" + wholeData.sequencenum3 + "' , '" + wholeData.materialname3 + "' , '" + wholeData.materialrequire3 + "' , '" + wholeData.transactacc3 + "' , '" + wholeData.sequencenum4 + "' , '" + wholeData.materialname4 + "' , '" + wholeData.materialrequire4 + "' , '" + wholeData.transactacc4 + "' , '" + wholeData.sequencenum5 + "' , '" + wholeData.materialname5 + "' , '" + wholeData.materialrequire5 + "' , '" + wholeData.transactacc5 + "' , '" + wholeData.sequencenum6 + "' , '" + wholeData.materialname6 + "' , '" + wholeData.materialrequire6 + "' , '" + wholeData.transactacc6 + "' , '" + wholeData.sequencenum7 + "' , '" + wholeData.materialname7 + "' , '" + wholeData.materialrequire7 + "' , '" + wholeData.transactacc7 + "' , '" + wholeData.sequencenum8 + "' , '" + wholeData.materialname8 + "' , '" + wholeData.materialrequire8 + "' , '" + wholeData.transactacc8 + "' , '" + wholeData.sequencenum9 + "' , '" + wholeData.materialname9 + "' , '" + wholeData.materialrequire9 + "' , '" + wholeData.transactacc9 + "' , '" + wholeData.sequencenum10 + "' , '" + wholeData.materialname10 + "' , '" + wholeData.materialrequire10 + "' , '" + wholeData.transactacc10 + "' , '" +
                        wholeData.speciallink + "' , '" + wholeData.linkcharge + "' , '" + wholeData.linkdescribe + "' , '" + wholeData.linkchargedes + "', '" +
                        wholeData.step1 + "', '" + wholeData.receiver1 + "', '" + wholeData.dealtime1 + "', '" + wholeData.reviewstandard1 + "', '" + wholeData.reviewresult1 + "', '" + wholeData.step2 + "', '" + wholeData.receiver2 + "', '" + wholeData.dealtime2 + "', '" + wholeData.reviewstandard2 + "', '" + wholeData.reviewresult2 + "', '" + wholeData.step3 + "', '" + wholeData.receiver3 + "', '" + wholeData.dealtime3 + "', '" + wholeData.reviewstandard3 + "', '" + wholeData.reviewresult3 + "', '" + wholeData.step4 + "', '" + wholeData.receiver4 + "', '" + wholeData.dealtime4 + "', '" + wholeData.reviewstandard4 + "', '" + wholeData.reviewresult4 + "')";
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