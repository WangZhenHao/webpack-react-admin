# React + Typescript + webpack 后台管理模板

参考大量的后台开源项目，发现都是花里胡哨的东西，如什么 eachart，拖拽等等
实际上主要的功能就是`用户权限`，用户权限一般都是根据接口返回的路由列表，在本地/public/data 模拟了接口的返回
非常真实模拟了日常开发。这样子，方便数据很轻松接入不同的后台如：Java, PHP，NodeJS 等，数据只要和模拟接口一样就可以了

非常适合接私活或者接外包的时候用

在线地址：https://wangzhenhao.github.io/webpack-react-admin/
![demo](https://raw.githubusercontent.com/WangZhenHao/webpack-react-admin/master/public/img/1.jpg)

React + typeScript + webpack + antd + Tailwind 后台管理

## 目录结构

```
├─src
|  ├─views                   页面
|  ├─type                   全局类型定义
|  |
|  |
|  ├─store                 store数据
|  |
|  ├─router                 路由
|  |
|  ├─components
|  |     ├─global          组件
|  ├─assets                资源
|  |   ├─js                js目录
|  |   | |
|  |   | |
|  |   ├─img                图片
|  |   |
|  |   ├─css              css资源
|  |   |
|  ├─api                   接口列表集合
|  |
├─public
|   ├─data                mock数集合
|   |  ├─roleList.json
|   |  ├─user
|   |  |  ├─getUserList.json
|   |  |  └userLoginIn.json
├─.vscode                自动格式化配置
|    ├─extensions.json
|    └settings.json
├─config                webpack配置
|
|
├─scripts              webpack启动命令
```

## 原子 css 类 Tailwind

-   安装 vscode 专用插件：Tailwind CSS IntelliSense

https://tailwindcss.com/docs/installation

```
字体颜色：
text-color-3
text-color-6
...

字体大小：
text-12px
text-14px
text-16px
...

背景颜色：
bg-color-f
bg-color-3
bg-color-6
...

外边距：
mb-10px
mt-10px
mb-20px
mt-30px
...

内边距：
pb-10px
pt-10px
pb-20px
pt-30px
...

```