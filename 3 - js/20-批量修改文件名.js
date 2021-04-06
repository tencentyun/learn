var fs = require('fs');

var PATH = '/Users/dengtao/Desktop/5-慕课网/1-快速搞定前端技术一面——匹配大厂面试要求-299元/视频/第18章 真题模拟'; // 目录

//  遍历目录得到文件信息
function run(path, callback) {
  var files = fs.readdirSync(path);
  console.log(files);
  files.forEach(function (file) {
    console.log(file);
    if (fs.statSync(path + '/' + file).isFile()) {
      callback(path, file);
    }
  });
}

// 修改文件名称
function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      throw err;
    }
  });
}

// 运行
run(PATH, function (path, fileName) {
  console.log(111);
  var oldPath = path + '/' + fileName, // 源文件路径
    newPath = path + '/' + fileName.replace('【更多IT教程vx：zhishivip0001】', ''); // 新路径
  console.log(newPath);
  rename(oldPath, newPath);
});