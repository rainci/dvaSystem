<!--
 * @Author: your name
 * @Date: 2020-11-13 14:51:23
 * @LastEditTime: 2020-11-15 00:01:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dvaSystem/README.md
-->
# dvaSystem
dva开发的后台管理系统

项目启动会报错，解决办法
将"roadhog": "^2.0.0"修改为"roadhog": "^2.5.0-beta.4"即可

#npm i dva-loading  增加loading
#cnpm i antd babel-plugin-import  --save安装antd和按需加载
#npm install --save @ant-design/icons 安装icon库
在.webpackrc下配置如下⤵️ 
<!-- {
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
} -->