const fetch = require('node-fetch')
const fs = require('fs');
const readline = require('readline');

// 创建一个可以写入的流，写入到文件
const succFile = fs.createWriteStream('succFile.json');
const failFile = fs.createWriteStream('failFile.txt');

function main() {
  readFileToArr('./ApiName.text', (arr) => {
    arr.forEach((item, index) => {
      downloadFun(item, (res) => {

        const dataArr = res.data.dataList
        const urlObj = {            // 每个API名称一个对象
          id: index + 1,
          apiName: item,
          info: []
        }

        if (dataArr[0].url) {      // 判断该api获取的有数据
          dataArr.forEach((dataItem, index) => {
            if (index > 2) {
              return
            } else {
              const arr = []
              dataItem.source.forEach((dataItemVal) => {
                arr.push(dataItemVal.title)
              })
              urlObj.info.push({      // 取前三个url进行拼接参数
                name: arr.join('-'),
                url: dataItem.url
              })
            }
          })
          succFun(JSON.stringify(urlObj))   // 输出
        } else {
          failFun(item)
        }

      })
    })
  })
}
main()

/*
* 按行读取文件内容
* 返回：字符串数组
* 参数：fReadName:文件名路径
*      callback:回调函数
* */
function readFileToArr(fReadName, callback) {
  var fRead = fs.createReadStream(fReadName);
  var objReadline = readline.createInterface({
    input: fRead
  });
  var arr = new Array();
  objReadline.on('line', function (line) {
    arr.push(line);
    //console.log('line:'+ line);
  });
  objReadline.on('close', function () {
    // console.log(arr);
    callback(arr);
  });
}

// 输出成功的url文件
function succFun(url) {
  succFile.write(url + ', \n');
  // 标记写入完成
  // succFile.end();
}

// 输出失败的api接口
function failFun(api) {
  failFile.write(api + '\n');
  // 标记写入完成
  // failFile.end();
}

function downloadFun(url, callback) {
  fetchUrl(url, callback)
}

function fetchUrl(url, callback) {
  fetch("https://cloud.tencent.com/search/ajax/searchdoc?keyword=" + url.split('/')[1], {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "language=zh; _ga=GA1.2.541256659.1596705224; pgv_pvi=5708871680; qcloud_uid=4420770ca7279f75d0e5b8d27adb2dc1; pgv_pvid=1065420960; ts_uid=3022882416; _qddaz=QD.753799809366681; __root_domain_v=.tencent.com; lastLoginType=wx; ts_refer=console.cloud.tencent.com/; _gcl_au=1.1.1011959944.1604540192; pgv_info=ssid=s6272123813; qcmainCSRFToken=S1z452C_FD; pgv_si=s9786183680; qcloud_visitId=77350981b60d318015d59524c80c39c2; loginType=channel; moduleId=1300560919; systemTimeGap=-229; saas_synced_session=100011921910%7Cc14mruV*a7er2NG*S7-uCHEvNyOiRNGNnPCt2BcaLCs_; qcact.sid=s%3A4CGmUX-iZ67pUk12XQarMgbTZlKmqhVY.rw635Hf%2BSkR0DFVwqX0d%2FY9g4Y%2BNFe8K0o%2Bb81Iuu20; intl=; qcloud_from=gwzcw.2212127.2212127.2212127-1605163456528; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22100011921910%22%2C%22first_id%22%3A%224420770ca7279f75d0e5b8d27adb2dc1%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E4%BB%98%E8%B4%B9%E5%B9%BF%E5%91%8A%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E8%85%BE%E8%AE%AF%E4%BA%91%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2Fother.php%22%2C%22%24latest_utm_medium%22%3A%22cpd%22%7D%2C%22%24device_id%22%3A%22173c30c340c3f3-0e008fe0a75043-31677305-1296000-173c30c340d700%22%7D"
    },
    "referrer": "https://cloud.tencent.com/document/product/436/7738",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  }).then(res => res.json()).then(_ => {
    callback(_)
  }).catch(
    function (error) {
      failFun(url)
    }
  )
}







