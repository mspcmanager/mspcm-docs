# Microsoft 電腦管家使用文檔
![Microsoft 電腦管家 3.0](https://pcmanager.microsoft.com/assets/digitalLivingMain-phone.png)  
   
![協定](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-blue)
![ci 狀態](https://img.shields.io/github/actions/workflow/status/mspcmanager/mspcm-docs/deploy-to-pages.yml) 

### 🖹 語言
[English (United States)](./README.md) | [简体中文](./README.zh-cn.md)

### 👏 介紹
這是 **Microsoft 官方**出品的電腦輔助軟體“Microsoft 電腦管家”的非官方使用文件，希望本文件能夠在你使用產品遇到問題時提供一點幫助。歡迎前往 <https://pcmanager.microsoft.com> 下載並體驗最新版Microsof t電腦管家！😉   

注意：這並不是 Microsoft 及其子公司官方組織編寫的文件，文件編寫者並非 Microsoft 及其子公司的員工，本文件中的內容也與Microsoft及其子公司本身無關。**本文件基於 [CC BY-NC-SA 4.0 協議](https://creativecommons.org/licenses/by-nc-sa/4.0/)，請轉載或參與其它涉及本項目的活動時，遵守協議的規定。**  

本文件基於 [VitePress](https://vitepress.dev/zh/) 進行構建，你可以在我們的 [GitHub Pages](https://mspcmanager.github.io/mspcm-docs/zh-cn/) 上查看最新已構建好的文件。

_* 請注意，本文件部分內容引用了來自第三方（即非 Microsoft 官方）網頁的連結。這些網頁似乎提供了準確、安全的資訊以幫助你解決問題。但是，請仍然留意網頁中推廣的通常被歸類為 PUP（Potentially Unwanted Products，潛在有害產品）的廣告。在您下載及安裝文件或應用前，請徹底地研究網頁中推廣的任何產品。_

### 📣 參與注意
詳情見 [CONTRIBUTING.md](./CONTRIBUTING.md)。

### 🖥️ 本地部署文件
a. 首先，請確保你的計算機中安裝了 Node.js（18 LTS 或 20 及更高版本）。  
  
b. 將原始碼 clone 到本地： 

```shell
git clone https://github.com/mspcmanager/mspcm-docs
```

c. 安裝 PNPM 和項目依賴的模組：  

```shell
npm install pnpm -g
pnpm install
```

d. 啟動開發環境，作出你的修改，再啟動生產模式以構建靜態頁面：  

```shell
pnpm dev
pnpm build
```
