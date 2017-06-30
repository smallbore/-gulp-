"# -gulp-" 
所有的环境都是在 node 安装好的基础上执行的。 node -v 查看node的安装情况。npm -v查看npm 的安装情况.

**gulp自动化构建常用参数**

1、src 读取文件或者文件夹

2、dest 生成文件也就是写文件

3、watch 检测文件

4、tesk 指定任务

5、pipe 用流的方式处理 gulp

**解释：**

bower_components 这个文件下边放的是 通过bower安装的第三方的js等。

build  : 项目整合目录，一般在这里整合所有的代码，不压缩。

dist : 项目发布目录，也是压缩所有文件后的。

src :  项目源文件目录，这里放置的都是源文件。

test : 这个是编写自动化测试的