import{_ as a,c as e,o as s,a3 as t}from"./chunks/framework.BEYvm48w.js";const o="/mspcm-docs/assets/download-and-unpack-error.DhyfTp7E.png",i="/mspcm-docs/assets/exact-files.BaqsKTl5.png",l="/mspcm-docs/assets/moving-folders.B10qq_xq.png",p="/mspcm-docs/assets/continue-moving.C2L3l4oH.png",n="/mspcm-docs/assets/create-shortcut.CH0vMgt1.png",r="/mspcm-docs/assets/32-percent.DOPw2D2D.png",k=JSON.parse('{"title":"安装问题","description":"","frontmatter":{},"headers":[],"relativePath":"problem-solving/while-installing.md","filePath":"problem-solving/while-installing.md","lastUpdated":1720279977000}'),c={name:"problem-solving/while-installing.md"},d=t('<h1 id="安装问题" tabindex="-1">安装问题 <a class="header-anchor" href="#安装问题" aria-label="Permalink to &quot;安装问题&quot;">​</a></h1><h2 id="下载展开安装文件失败" tabindex="-1">下载展开安装文件失败 <a class="header-anchor" href="#下载展开安装文件失败" aria-label="Permalink to &quot;下载展开安装文件失败&quot;">​</a></h2><p>问题图例：<img src="'+o+'" alt=""></p><p>问题引起：</p><ol><li><p>您的网络环境较差，导致与 Microsoft 服务器通信不佳。（仅在线安装包）</p></li><li><p>%TEMP% 文件夹无法被安装程序正常访问，或 PowerShell 脚本被第三方软件拦截。（在线/离线安装包）</p></li></ol><p>解决方案：</p><ol><li>请在群文件、向管理员获取离线包或 <a href="https://aka.ms/PCManagerOFL30101" target="_blank" rel="noreferrer">点击这里下载</a>。</li></ol><p>或者将 DNS 更换为 223.5.5.5 等其它可靠 IPv4 DNS 后再重试使用在线安装包。（需要帮助？请参阅<a href="./../appendix/change-DNS.html">《如何更改 DNS》</a>）</p><ol start="2"><li>请使用免安装版，请在群文件查找、向管理员获取。（一般被命名为“PCManagerFiles_&lt;版本号&gt;.zip”）</li></ol><details><summary>你也可以通过短链接下载</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://aka.ms/WMOnlineZip10000_&lt;版本号&gt;</span></span></code></pre></div><p>版本号请在<a href="./../appendix/check-version.html">《公开最新版本号及查询方式》</a>中找到全称版本号。</p><p>例如版本号为 3.0.0.2，则链接如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://aka.ms/WMOnlineZip10000_3.0.0.2</span></span></code></pre></div></details><p><strong>特别提示：在使用免安装版之前，请先参阅<a href="./../appendix/submit-advice-n-feedback.html">《提交日志》</a>来提交你的安装日志后，再使用免安装版，以便我们及时地修复该问题。</strong></p><p>使用方法： <strong>为了确保微软电脑管家主程序及其组件的稳定性，在解压使用免安装版时，请选择解压到 C:/Program Files/Microsoft PC Manager 文件夹；否则，因为解压到其它文件夹所引起的问题将不会受到支持与帮助。</strong></p><ol><li>打开 <code>PCManagerFiles.zip</code> 文件，并选择全部解压到桌面的 <code>Microsoft PC Manager</code> 文件夹里</li></ol><p><img src="'+i+'" alt=""></p><ol start="2"><li>打开 <code>C:/Program Files</code> 目录，并将 <code>Microsoft PC Manager</code> 文件夹复制进去。</li></ol><p><img src="'+l+'" alt=""></p><ol start="3"><li>在弹窗中点击“继续(C)”。</li></ol><p><img src="'+p+'" alt=""></p><ol start="4"><li>然后在 <code>Microsoft PC Manager</code> 文件夹里找到名为 <code>MSPCManager.exe</code> 的文件，左键选择它，然后按下 Shift + F10（如果是 Windows 10 或经典右键菜单的 Windows 11 可直接右键），在弹出的菜单栏中选择“发送到(N)”&gt;“桌面快捷方式”。</li></ol><p><img src="'+n+'" alt=""></p><ol start="5"><li>然后将桌面上的快捷方式重命名（可不做），然后双击即可运行微软电脑管家。</li></ol><p>特别提示：使用该方法前请尝试重新下载离线包，或退出所有反病毒与间谍软件后再重试。</p><h2 id="主程序安装时长时间卡在-32" tabindex="-1">主程序安装时长时间卡在 32% <a class="header-anchor" href="#主程序安装时长时间卡在-32" aria-label="Permalink to &quot;主程序安装时长时间卡在 32%&quot;">​</a></h2><p>问题图例：<img src="'+r+'" alt=""></p><p>问题引起：您的网络环境较差，导致与 Microsoft 通信不佳。（仅在线安装包）</p><p>解决方案：下载使用<a href="https://aka.ms/PCManagerOFL30101" target="_blank" rel="noreferrer">离线包</a>；或者将 DNS 更换为 223.5.5.5 等其它可靠 IPv4 DNS 后再重试。（需要帮助？请参阅<a href="./../appendix/change-DNS.html">《如何更改 DNS》</a>）</p>',26),h=[d];function m(g,_,f,u,b,P){return s(),e("div",null,h)}const C=a(c,[["render",m]]);export{k as __pageData,C as default};