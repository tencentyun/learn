var mysql = require("mysql");
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//设置跨域访问
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  // if (req.method.toLowerCase() == 'options')
  //   res.send(200);  //让options尝试请求快速结束
  // else
  next();
})


var connection = mysql.createConnection({
  host: "140.143.18.118",
  port: "3306",
  database: "renren_cloud",
  multipleStatements: true,
  user: "root",
  password: "123456789@Root",
});

connection.connect(function (err) {
  if (err) console.log("与MySQL数据库建立连接失败。");
  else {
    console.log("与MySQL数据库建立连接成功。");
  }
});

app.listen(3000, () => {
  console.log('服务已开启');
})

app.post('/addData', (req, res) => {
  var idKey = uuid.v1().replace(/-/g, "");
  var dataSql = 'INSERT INTO api_list(id, api, name, url) VALUES(' + '"' + idKey + '"' + ',' + '"' + req.body.api + '"' + ',' + '"' + req.body.name + '"' + ',' + '"' + req.body.url + '"' + ')';
  connection.query(dataSql, function (error, result) {
    if (error) {
      console.log(req.body.api);
      return;
    }else{
      res.json({
        data: '存入成功'
      })
    }
  });
})
