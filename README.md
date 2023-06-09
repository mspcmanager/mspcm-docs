# 微软电脑管家使用文档
![微软电脑管家 3.0](https://pcmanager.microsoft.com/assets/digitalLivingMain-phone.png)  

![文档版本](https://img.shields.io/github/package-json/v/mspcmanager/mspcm-docs) 
![Release 版本](https://img.shields.io/github/v/release/mspcmanager/mspcm-docs?include_prereleases) 
![ci 状态](https://img.shields.io/github/actions/workflow/status/mspcmanager/mspcm-docs/deploy-to-pages.yml) 

### 👏 介绍 / Introduction  
这是**微软官方**出品的电脑辅助软件「微软电脑管家」的使用文档，能够在你使用产品遇到问题时提供一点帮助。欢迎前往 <https://pcmanager.microsoft.com> 下载并体验最新版微软电脑管家！   

本文档基于 VitePress 进行构建，默认的站点运行目录为根目录。您可以在我们的 [Github Pages](https://mspcmanager.github.io/mspcm-docs/) 上查看最新已构建好的文档。  

注意：这并不是微软及其子公司官方组织编写的文档，文档编写者并非微软及其子公司的员工，本文档中的内容也与微软及其子公司本身无关。**本文档基于 [CC BY-NC-ND 4.0  协议](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.zh-Hans)，请遵守相关协议规定。**

### 📣 参与注意 / Tips  
如果您要参与本项目，您可以在 [Issues](https://github.com/mspcmanager/mspcm-docs/issues) 中提出建议，我们将尽快回复。  

如果您要[提交 PR](https://github.com/mspcmanager/mspcm-docs/pulls)，我们同样为您的贡献而高兴，不过您需要先了解以下内容，否则您的 PR 暂不予 merge，或要求您修改后 merge。  

1. 请勿提交与管家无关或对管家无故诋毁的内容。
2. 请在提交 commit 时遵守 commit message 的相关规则。您可以参考 → <https://zhuanlan.zhihu.com/p/182553920>  
  * 错误范例：新增内容
  * 正确范例：docs: 新增内容
3. 对于文档中的内容，请在中英文之间打上空格以保持美观。
4. 请遵守一定的文件/代码内命名规则，如驼峰命名法。
5. 转载相关文献时遵守一定的规定。

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
pnpm run dev
```
e. 启动生产环境，将文档打包成网页文件：  
```shell
pnpm run build
```
然后在 `/dist` 目录中，您可以查收打包好的文件，并将其部署到您的服务器中。~（不过应该没人会把咱文档部署到自己的服务器上吧）~
