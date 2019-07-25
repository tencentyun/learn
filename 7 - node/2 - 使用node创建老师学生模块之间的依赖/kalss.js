// 导入需要引用的模块
var student = require('./student.js');
var teacher = require('./teacher.js');

// 控制台打印出student与teacher模块的值
//student.add('zhangsan');
//teacher.add('scott');

function kalssFun (teacherName,studentNamees){
    teacher.add('scott');

    // 学生的名字是一个数组 进行forEach循环 item为值 index为下标
    studentNamees.forEach(function (item,index){
        student.add(item);
    })
}

exports.add = kalssFun;
