import{_ as s,o as t,c as e,V as a}from"./chunks/framework.722c30d3.js";const i="/mspcm-docs/assets/click-to-repair.deecc436.png",p="/mspcm-docs/assets/reparing.59ca82dc.png",o="/mspcm-docs/assets/error-to-repair.901d2426.png",r="/mspcm-docs/assets/Edge-WebView-2-Setup.6934c761.png",c="/mspcm-docs/assets/modify.83e8328f.png",l="/mspcm-docs/assets/repair-Edge-WebView-2.a8a90430.png",n="/mspcm-docs/assets/Edge-WebView-2.38aed55c.png",m="/mspcm-docs/assets/unable-to-proceed.03b56126.png",d="/mspcm-docs/assets/unable-to-load-service.13b3f5a0.png",g="/mspcm-docs/assets/start-service.26ca8f1d.png",_="/mspcm-docs/assets/restart-service.5b8a66f2.png",h="/mspcm-docs/assets/cleanup.8a647fd0.png",f="/mspcm-docs/assets/unable-to-set.8cd2f681.png",b="/mspcm-docs/assets/blank-dark.1aa4d090.png",u="/mspcm-docs/assets/blank-light.c0460c7f.png",q="/mspcm-docs/assets/properties.d8102860.png",w="/mspcm-docs/assets/compatibility.c48df95f.png",k="/mspcm-docs/assets/without-pop-up-mgr.eabfab2b.png",W="/mspcm-docs/assets/uninstall.f8b7e6d5.png",E="/mspcm-docs/assets/setting-the-region.f14fe233.png",P="/mspcm-docs/assets/pop-up-mgr.24e84652.png",V="/mspcm-docs/assets/lack-of-cleanup-options.a8da048a.png",x="/mspcm-docs/assets/uninstall.f8b7e6d5.png",M="/mspcm-docs/assets/setting-the-region.f14fe233.png",R="/mspcm-docs/assets/full-cleanup-options.bbb69798.png",v="/mspcm-docs/assets/MDASer.52b02643.png",S="/mspcm-docs/assets/high-main-program-occupancy.0bd7b906.png",A="/mspcm-docs/assets/main-program-normally-occupied.06be00b0.png",F=JSON.parse('{"title":"使用问题","description":"","frontmatter":{},"headers":[],"relativePath":"problem-solving/while-using.md","filePath":"problem-solving/while-using.md","lastUpdated":1692869936000}'),C={name:"problem-solving/while-using.md"},T=a('<h1 id="使用问题" tabindex="-1">使用问题 <a class="header-anchor" href="#使用问题" aria-label="Permalink to &quot;使用问题&quot;">​</a></h1><h2 id="抱歉-程序运行发生了错误-请点击-重试-按钮进行修复。" tabindex="-1">“抱歉，程序运行发生了错误，请点击‘重试’按钮进行修复。” <a class="header-anchor" href="#抱歉-程序运行发生了错误-请点击-重试-按钮进行修复。" aria-label="Permalink to &quot;“抱歉，程序运行发生了错误，请点击‘重试’按钮进行修复。”&quot;">​</a></h2><p>问题图例：<img src="'+i+'" alt=""></p><p>问题引起&amp;解决方案：请参阅<a href="#修复发生错误-请退出并重启。">《修复发生错误，请退出并重启。》</a>。</p><h2 id="长时间处于-正在修复中" tabindex="-1">长时间处于“正在修复中...” <a class="header-anchor" href="#长时间处于-正在修复中" aria-label="Permalink to &quot;长时间处于“正在修复中...”&quot;">​</a></h2><p>问题图例：<img src="'+p+'" alt=""></p><p>问题引起&amp;解决方案：请参阅<a href="#修复发生错误-请退出并重启。">《修复发生错误，请退出并重启。》</a>。</p><h2 id="修复发生错误-请退出并重启。" tabindex="-1">&quot;修复发生错误，请退出并重启。&quot; <a class="header-anchor" href="#修复发生错误-请退出并重启。" aria-label="Permalink to &quot;&quot;修复发生错误，请退出并重启。&quot;&quot;">​</a></h2><p>问题图例：<img src="'+o+'" alt=""></p><p>问题引起：</p><ol><li><p>未安装 Microsoft Edge WebView2。</p></li><li><p>Microsoft Edge Webview2 安装时弹出的 UAC 弹窗未授权。</p></li><li><p>Microsoft Edge WebView2 和（或）Microsoft Edge 版本过旧。</p></li><li><p>您的网络环境较差，或微软电脑管家主程序无法联网，导致与 Microsoft 通信不佳。</p></li><li><p>其它原因。</p></li></ol><p>解决方案：（请先 <strong>退出微软电脑管家主程序</strong> 。）</p><ol><li><p>请尝试 <a href="https://go.microsoft.com/fwlink/?linkid=2124701" target="_blank" rel="noreferrer">下载 Microsoft Edge WebView2</a> 并安装。（需要右键安装程序，选择“以管理员身份运行”）</p></li><li><p>请尝试重新修复，并直接点击“是”。 <img src="'+r+'" alt=""></p></li><li><p>请尝试以下步骤以修复 Microsoft Edge WebView2 Runtime。</p></li></ol><p>a. 按下 Windows 徽标键+R，输入 ms-settings:appsfeatures 并回车。</p><p>b. 在列表中找到名为“Microsoft Edge WebView2 Runtime”的程序，并点击旁边的“...”，再点击“修改”。 <img src="'+c+'" alt=""></p><p>c. 点击修改后，安装程序会出现以下弹窗，点击“修复”后，安装程序将自动联网下载并重新安装 Microsoft Edge WebView2。 <img src="'+l+'" alt=""></p><p>d. 启动微软电脑管家。</p><ol start="4"><li>需要先判断自己是否有安装 Microsoft Edge WebView2，步骤如下：</li></ol><p>a. 按下 Windows 徽标键+R，输入 ms-settings:appsfeatures 并回车。</p><p>b. 在列表中找到名为“Microsoft Edge WebView2 Runtime”的程序。 <img src="'+n+'" alt=""></p><p>c.若已经安装，请重复 3. 的步骤；若未安装，请重复 1. 的步骤。</p><p>事已至此，若依旧报错，亦或者是根本不出现 Microsoft Edge WebView2 Runtime 的安装程序页面，请先参阅<a href="./../appendix/feedback-bugs.html">《提交日志》</a>，再转到<a href="./../appendix/repair-system-image.html#镜像修复">《如何使用镜像对 Windows 进行修复》</a>。</p><h2 id="无法完成当前操作-电脑管家服务加载失败" tabindex="-1">&quot;无法完成当前操作&quot; | &quot;电脑管家服务加载失败&quot; <a class="header-anchor" href="#无法完成当前操作-电脑管家服务加载失败" aria-label="Permalink to &quot;&quot;无法完成当前操作&quot; | &quot;电脑管家服务加载失败&quot;&quot;">​</a></h2><p>问题图例： <img src="'+m+'" alt=""><img src="'+d+'" alt=""> 解决方案：</p><ol><li><p>按下 Windows 徽标键+R，输入“services.msc”并回车</p></li><li><p>找到名为“PCManager Service”的服务，右键选择“启动(S)”。（或者是“重新启动(E)”） <img src="'+g+'" alt=""><img src="'+_+'" alt=""></p></li><li><p>尝试重新运行“垃圾清理”任务。 <img src="'+h+'" alt=""></p></li></ol><p>若报错依旧，请参阅<a href="./../appendix/feedback-bugs.html">《提交日志》</a>，把您收集到的日志、转储文件、问题截图以及系统版本一并发给我们，后续可能会需要您来协助我们修复。完成后将微软电脑管家完全卸载后再重新安装重试。</p><h2 id="设置页无法改动选项" tabindex="-1">设置页无法改动选项 <a class="header-anchor" href="#设置页无法改动选项" aria-label="Permalink to &quot;设置页无法改动选项&quot;">​</a></h2><p>问题图例：<img src="'+f+'" alt=""></p><p>问题引起：微软电脑管家 V2.0 部分电脑独有的 BUG，可升级到最新版解决。</p><p>解决方案：<a href="https://aka.ms/PCManagerOFL30101" target="_blank" rel="noreferrer">下载最新版微软电脑管家</a>。</p><h2 id="应用程序白-黑-屏-不显示任何图像" tabindex="-1">应用程序白（黑）屏/不显示任何图像 <a class="header-anchor" href="#应用程序白-黑-屏-不显示任何图像" aria-label="Permalink to &quot;应用程序白（黑）屏/不显示任何图像&quot;">​</a></h2><p>问题图例： 深色模式：<img src="'+b+'" alt=""> 浅色模式：<img src="'+u+'" alt=""></p><p>问题引起：未知</p><p>解决方案：</p><ol><li><p>右键微软电脑管家快捷方式，选择属性。 <img src="'+q+'" alt=""></p></li><li><p>在“兼容性”视图中勾选“以兼容模式运行这个程序：”，并选择“Windows 8”，完成后点击“应用(A)”，然后重新启动微软电脑管家即可。 <img src="'+w+'" alt=""></p></li><li><p>请参阅<a href="./../appendix/feedback-bugs.html">《提交日志》</a>的章节说明，把您收集到的日志、转储文件、问题截图以及系统版本一并发给我们。</p></li></ol><h2 id="缺少弹窗管理选项" tabindex="-1">缺少弹窗管理选项 <a class="header-anchor" href="#缺少弹窗管理选项" aria-label="Permalink to &quot;缺少弹窗管理选项&quot;">​</a></h2><p>问题图例：<img src="'+k+'" alt=""></p><p>问题引起：目前仅在中国大陆地区开放“弹窗管理”功能。</p><p>解决方案：</p><ol><li><p>按下 Windows 徽标键 + R，打开运行，输入 ms-settings:appsfeatures 并确认。</p></li><li><p>找到名为“微软电脑管家”的选项，点击“...”，再点击“卸载”。 <img src="'+W+'" alt=""></p></li><li><p>卸载完成后重启计算机。</p></li><li><p>按下 Windows 徽标键 + R，打开运行，输入 ms-settings:regionlanguage 并确认。</p></li><li><p>在“国家或地区”的选项中，将您的区域改为“中国”。 <img src="'+E+'" alt=""></p></li><li><p>运行微软电脑管家安装程序，完成后再将区域改回原来的即可。 <img src="'+P+'" alt=""></p></li></ol><h2 id="深度清理中-应用缓存-可选清理少" tabindex="-1">深度清理中“应用缓存”可选清理少 <a class="header-anchor" href="#深度清理中-应用缓存-可选清理少" aria-label="Permalink to &quot;深度清理中“应用缓存”可选清理少&quot;">​</a></h2><p>问题图例：<img src="'+V+'" alt=""></p><p>解决方案：</p><ol><li><p>按下 Windows 徽标键 + R，打开运行，输入 ms-settings:appsfeatures 并确认。</p></li><li><p>找到名为“微软电脑管家”的选项，点击“...”，再点击“卸载”。 <img src="'+x+'" alt=""></p></li><li><p>卸载完成后重启计算机。</p></li><li><p>按下 Windows 徽标键 + R，打开运行，输入 ms-settings:regionlanguage 并确认。</p></li><li><p>在“国家或地区”的选项中，将您的区域改为“中国”。 <img src="'+M+'" alt=""></p></li><li><p>运行微软电脑管家安装程序，完成后再将区域改回原来的即可。 <img src="'+R+'" alt=""></p></li></ol><h2 id="系统资源占用过高" tabindex="-1">系统资源占用过高 <a class="header-anchor" href="#系统资源占用过高" aria-label="Permalink to &quot;系统资源占用过高&quot;">​</a></h2><p>问题图例：（演示版本：1.2.3.2.16851） <img src="'+v+'" alt=""><img src="'+S+'" alt=""></p><p>在进行查杀、系统扫描、缓存清理或其它操作时 Microsoft Defender、Microsoft Edge WebView2 或其它功能可能会占用大部分的 CPU、GPU 及其它资源。此问题需要等到相对应的部门对其修复。</p><p>但正常情况下，程序关闭前台窗口 时占用会降低，主程序会自动进入效率模式，若关闭前台窗口后仍继续高占用则可能是仍有部分任务在进行。 <img src="'+A+'" alt=""></p>',48),U=[T];function y(D,$,B,N,G,I){return t(),e("div",null,U)}const J=s(C,[["render",y]]);export{F as __pageData,J as default};
