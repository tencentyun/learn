var fs = require('fs');

var PATH = '/Users/dengtao/Desktop/5-慕课网/web前端架构师/第二周'; // 目录

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
    newPath = path + '/' + fileName.replace('_更多课程加QQ1931962866_16514', ''); // 新路径
  console.log(newPath);
  rename(oldPath, newPath);
});