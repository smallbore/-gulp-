## 简易gulp,项目构建demo

### -gulp- 所有的环境都是在 node 安装好的基础上执行的。

node -v 查看node的安装情况。
npm -v查看npm 的安装情况.

#### 1.安装依赖
> npm install

#### 2.启动项目
> gulp

> 默认打开地址：'http://localhost:1234'

> gulp clean 清除bulid , dist 目录。

#### gulp自动化构建常用参数

1、src 读取文件或者文件夹

2、dest 生成文件也就是写文件

3、watch 检测文件

4、pipe 用流的方式处理 gulp

5、tesk 指定任务

#### 项目结构

bower_components : 这个文件下边放的是 通过bower安装的第三方的js等。

build : 项目整合目录，一般在这里整合所有的代码，不压缩。

dist : 项目发布目录，也是压缩所有文件后的。

+ src : 项目源文件目录，这里放置的都是源文件。
- css : 源码less文件
- image : img目录
- include : 模板文件
- js : js目录 
- pages : html页面

### 6、rem单位与设计稿的换算
默认以设计稿宽度 750px 为基础 1rem = 100px（比如设计稿中 150px，在 css 中就写 1.5rem）

也可自定义 data-psd 为你的设计稿宽度


 
