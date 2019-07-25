console.log('我是第一个js文件');



require(['./2','./3'], function (a,b,c) {
    //foo is now loaded.
});