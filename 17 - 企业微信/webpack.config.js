/**
 * Created by lenovo on 2018/3/19.
 */

const path = require("path");
module.exports = {
    entyr:{
        "app": "./module.js"
    },
    output:{
        path: path.resolve(__dirname, 'dist/'),
        filename: "app.bundle.js"
    },
    module:{

    },
    plugins:[

    ],
    devServer:{
        contentBase: __dirname + "/",
        port: 9000,
        proxy: {
            "/users": { //需要代理的路径
                target: "https://gov.weixin.qq.com/cgi-bin/department/create?access_token=-ogD2iyDmFGsijfEpVbfuX3_mPg-BDSozUJmtXp1k9cyeKtxSkWYEnMmD7CguNCZxJPSnr2Mzbci-ZRnRng6E0zuV05Ek59nQ6pG9AJKjJ1vDxyMlWv0r46eujXPgx-SPYnDXIblNHr7Sm6NgWKcqp364XlHKA-eia5hCLEAe_dlGh-oQA772_8vXKZUM-ydjlNMlW_aA6KBmOgZgNimcQ",
                //需要代理的域名
                changeOrigin: true //必须配置为true，才能正确代理
            }
        }
    }
}