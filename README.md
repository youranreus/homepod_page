# homepod_page

配合[homepod](https://github.com/youranreus/homepod)食用的个人页面。

### 食用指南

想个办法把源码搞到，推荐`git clone`，然后在项目根目录执行

```bash
npm install
```



### 配置

打开`src/main.js`，修改第38行，将api修改为你部署的homepod的地址。背景图片的配置在`src/App.vue`中的第66行。

页面详细的内容是基于Homepod后端中的[profile.json](https://github.com/youranreus/Homepod/blob/master/App/Conf/profile.json)文件生成的，按照对应格式修改即可。



### 打包

配置好了之后，在项目的根目录执行

```bash
npm build
```

最终在`build`文件夹可以得到打包后的静态文件，可以直接部署。



> ps. 推荐个好工具：vercel，可以自己去百度一下教程噢（关键词：vercel vue github）
