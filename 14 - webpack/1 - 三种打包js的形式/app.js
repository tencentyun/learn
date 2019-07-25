// es6 module  把sum里面的函数引入到app.js里面来
import sum from './sum';

// commonjs
var minus = require('./minus');

// AMD
require(['./muti'], function (muti){
  console.log('muti(2,3) = ',muti(2,3));
});

console.log('sum(23,24) = ',sum(23,24));
console.log('minus(24,17) = ',minus(24,17));