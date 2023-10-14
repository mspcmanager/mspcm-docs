# 微软电脑管家使用文档
![微软电脑管家 3.0](https://pcmanager.microsoft.com/assets/digitalLivingMain-phone.png)  

![文档版本](https://img.shields.io/github/package-json/v/mspcmanager/mspcm-docs) 
![Release 版本](https://img.shields.io/github/v/release/mspcmanager/mspcm-docs?include_prereleases) 
![ci 状态](https://img.shields.io/github/actions/workflow/status/mspcmanager/mspcm-docs/deploy-to-pages.yml) 

### 👏 介绍 / Introduction  
这是 **Microsoft 官方**出品的电脑辅助软件「微软电脑管家」的使用文档，能够在你使用产品遇到问题时提供一点帮助。欢迎前往 <https://pcmanager.microsoft.com> 下载并体验最新版微软电脑管家！   

注意：这并不是微软及其子公司官方组织编写的文档，文档编写者并非微软及其子公司的员工，本文档中的内容也与微软及其子公司本身无关。**本文档基于 [CC BY-NC-ND 4.0  协议](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.zh-Hans)，请遵守相关协议规定。**  

我们并没有在微博、小红书、微信公众号之外设置社交媒体账号，您在其他平台遇到的**所谓自称官方的账号均为假冒**，请注意甄别！  

本文档基于 VitePress 进行构建，默认的站点运行目录为根目录。您可以在我们的 [Github Pages](https://mspcmanager.github.io/mspcm-docs/) 上查看最新已构建好的文档。

_*请注意，本文档部分内容引用了来自第三方（即非 Microsoft 官方）网页的链接。这些网页似乎提供了准确、安全的信息以帮助您解决问题。但是，请仍然留意网页中推广的通常被归类为 PUP（Potentially Unwanted Products，潜在有害产品）的广告。在您下载及安装文件或应用前，请彻底地研究网页中推广的任何产品。_

### 📣 参与注意 / Tips  
详情见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 🖥️ 部署 / Deployment
您可以选择以下两种方式部署文档：  
1. 从我们的 [Releases](https://github.com/mspcmanager/mspcm-docs/releases) 中下载打包好了的最新稳定版页面，然后部署。
2. 通过 Node 命令行部署最新的文档。
首先，请确保您的计算机中安装了 Node.js（16 或更高版本）。  
  
a. 将源码 clone 到本地：  
```shell
git clone https://github.com/mspcmanager/mspcm-docs
```
b. 安装 PNPM
```shell
npm install pnpm -g
```
c. 安装依赖的模块：  
```shell
pnpm install
```
d. 启动开发环境：  
```shell
pnpm dev
```
e. 启动生产环境，将文档打包成网页文件：  
```shell
pnpm build
```
然后在 `/dist` 目录中，您可以查收打包好的文件，并将其部署到您的服务器中。~（不过应该没人会把咱文档部署到自己的服务器上吧）~
