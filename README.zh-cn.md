# 微软电脑管家使用文档
![微软电脑管家 3.0](https://pcmanager.microsoft.com/assets/digitalLivingMain-phone.png)  
   
![协议](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-blue)
![ci 状态](https://img.shields.io/github/actions/workflow/status/mspcmanager/mspcm-docs/deploy-to-pages.yml) 

### 🖹 语言
[English](./README.md) | [繁體中文](./README.zh-tw.md)

### 👏 介绍
这是 **Microsoft 官方**出品的电脑辅助软件“微软电脑管家”的非官方使用文档，希望本文档能够在你使用产品遇到问题时提供一点帮助。欢迎前往 <https://pcmanager.microsoft.com> 下载并体验最新版微软电脑管家！😉   

注意：这并不是微软及其子公司官方组织编写的文档，文档编写者并非微软及其子公司的员工，本文档中的内容也与微软及其子公司本身无关。**本文档基于 [CC BY-NC-SA 4.0 协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)，请转载或参与其它涉及本项目的活动时，遵守协议的规定。**  

本文档基于 [VitePress](https://vitepress.dev/zh/) 进行构建，你可以在我们的 [GitHub Pages](https://mspcmanager.github.io/mspcm-docs/zh-cn/) 上查看最新已构建好的文档。

_* 请注意，本文档部分内容引用了来自第三方（即非 Microsoft 官方）网页的链接。这些网页似乎提供了准确、安全的信息以帮助你解决问题。但是，请仍然留意网页中推广的通常被归类为 PUP（Potentially Unwanted Products，潜在有害产品）的广告。在您下载及安装文件或应用前，请彻底地研究网页中推广的任何产品。_

### 📣 参与注意
详情见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 🖥️ 本地部署文档
a. 首先，请确保你的计算机中安装了 Node.js（18 LTS 或 20 及更高版本）。  
  
b. 将源码 clone 到本地： 

```shell
git clone https://github.com/mspcmanager/mspcm-docs
```

c. 安装 PNPM 和项目依赖的模块：  

```shell
npm install pnpm -g
pnpm install
```

d. 启动开发环境，作出你的修改，再启动生产模式以构建静态页面：  

```shell
pnpm dev
pnpm build
```
