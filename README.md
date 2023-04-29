## 👏 介绍 / Introduction  
这是「微软电脑管家」的使用文档，能够在你使用产品遇到问题时提供一点帮助。  
  
本文档基于 VitePress 进行构建，默认的站点运行目录为根目录。  
  
注意：这并不是 Microsoft 官方组织编写的文档，文档编写者并非 Microsoft 员工，本文档中的内容也与 Microsoft 公司无关。

## 📣 参与注意 / Tips  
如果您要参与本项目，您需要先了解以下内容，否则对于您的 PR 暂不予 merge，或要求您修改后 merge。  

1. 请勿提交与管家无关或对管家无故诋毁的内容。
2. 请在提交 commit 时遵守 commit message 的相关规则。您可以参考 → <https://zhuanlan.zhihu.com/p/182553920>  
* 错误范例：新增内容
* 正确范例：docs: 新增内容
3. 对于文档中的内容，请在中英文之间打上空格以保持美观。
4. 请遵守一定的文件命名规则。


## 🖥️ 部署 / Deployment  
您可以选择两种方式来部署：
1. 从我们的 [Releases](https://github.com/mspcmanager/mspcm-docs/releases) 中下载打包好了的最新稳定版页面，然后部署。
2. 通过 Node 命令行部署最新的文档。
首先，请确保您的计算机中安装了 Node.js（16 或更高版本）。  
a. 将源码下载到本地：  
使用 git 命令行：  
```shell
git clone https://github.com/mspcmanager/mspcm-docs
```
b. 安装依赖的模块：  
```shell
npm install
```
c. 启动开发环境：  
```shell
npm run dev
```
d. 启动生产环境，将文档打包成网页文件：  
```shell
npm run build
```
然后在 `/dist` 目录中，您可以查收打包好的文件，并将其部署到您的服务器中。~（不过应该没人会把咱文档部署到自己的服务器上吧）~
