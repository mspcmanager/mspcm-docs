# Microsoft PC Manager Docs
![Microsoft PC Manager 3.0](https://pcmanager.microsoft.com/assets/digitalLivingMain-phone.png)  
  
![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-blue)
![CI Status](https://img.shields.io/github/actions/workflow/status/mspcmanager/mspcm-docs/deploy-to-pages.yml) 

### 🖹 Languages
[简体中文](./README.zh-cn.md) | [繁體中文](./README.zh-tw.md)

### 👏 Introduction  
This is an unofficial document of Microsoft PC Manager, a PC assistant produced by **Microsoft Corporation**, and we hope this may provide some help when you're meeting problems with Microsoft PC Manager. Visit <https://pcmanager.microsoft.com> for the latest Microsoft PC Manager! 😉   

> [!IMPORTANT]
> We are not organized by Microsoft Coporation or its subsidiaries to write this document, and are not employees of Microsoft Coporation or its subsidiaries. **This document is released under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license, thus please obverse the license when reprinting or participating in other activities that involve this document.**  

This document is built on [VitePress](https://vitepress.dev/), and you can view it on our [GitHub Pages](https://mspcmanager.github.io/mspcm-docs/).

> [!NOTE]
> Parts of this document refer to links from third-party (i.e., non-official Microsoft) web pages. These pages appear to provide accurate and safe information to help you solve your problem. However, please remain aware of ads promoted on these pages that are often categorized as PUPs (Potentially Unwanted Products). Before downloading and installing a file or application, please thoroughly research any products promoted on the page.

### 📣 Tips  
See details in [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 🖥️ Deployment
a. Make sure that Node.js (v18 LTS or v20 and later) has been installed on your PC.
  
b. Clone the repo.  

```shell
git clone https://github.com/mspcmanager/mspcm-docs
```

c. Install PNPM and dependencies of this repo.  

```shell
npm install pnpm -g
pnpm install
```

d. Start the development env and do some changes, and then start production env for building static pages.  

```shell
pnpm dev
pnpm build
```
