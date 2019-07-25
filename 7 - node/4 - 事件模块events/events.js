/**
 * Created by lenovo on 2017/7/7.
 */
// events是node.js里面最重要的模块  暴露一个对象EventEmitter
// EventEmitter作用只有两个  事件发射与事件监听  最多监听10个 超过10个可能会导致内存泄漏
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();              // 生成一个EventEmitter实例

// life.setMaxListeners(11);                   // 监听超过10个的

// 事件监听life.on()   第一个参数为监听的名字  第二个为回调函数
function water(){
    console.log('给' + who + '倒水');
}

life.on('求安慰',water);

life.on('求安慰',function (who){
    console.log('给' + who + '揉肩');
});

life.on('求安慰',function (who){
    console.log('给' + who + '做饭');
});

life.removeListener('求安慰',water);      // 移除某一个事件监听 必须写外部的函数  才会起到作用
life.removeAllListeners('求安慰');        // 移除全部的监听事件


life.emit('求安慰','汉子');

console.log(life.emit('求安慰','汉子'));    // life.emit()返回的是布尔值  true为监听过