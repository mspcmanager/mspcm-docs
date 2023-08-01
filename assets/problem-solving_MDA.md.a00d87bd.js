import{_ as t,H as r,o as a,c as n,L as p,w as i,k as s,a as e,V as c}from"./chunks/framework.722c30d3.js";const l="/mspcm-docs/assets/Blank-MD.caefc09f.png",d="/mspcm-docs/assets/MD-not-installed.d94997db.png",m="/mspcm-docs/assets/no-anti-virus-available.d1238ba5.png",f="/mspcm-docs/assets/failed-to-load-MD.b5a701ed.png",_="/mspcm-docs/assets/other-anti-virus-being-used.f2f04896.png",g="/mspcm-docs/assets/unzip-dControl.098b6d28.png",h="/mspcm-docs/assets/dControl-program.a87fe83d.png",D="/mspcm-docs/assets/close-protection.e24e8602.png",u="/mspcm-docs/assets/disable-Windows-Defender.7681cbd0.png",b="/mspcm-docs/assets/enable-Windows-Defender.b7de1435.png",C="/mspcm-docs/assets/enable-protection.ce92924a.png",M="/mspcm-docs/assets/WSSettings.c9047657.png",w="/mspcm-docs/assets/stop-and-reset.153069d6.png",q="/mspcm-docs/assets/run-cmd.148dd500.png",A="/mspcm-docs/assets/update-MD-version.01a03b08.png",y="/mspcm-docs/assets/updating-errors.546cbb43.png",k="/mspcm-docs/assets/select-type.c426f4d4.png",E=JSON.parse('{"title":"Microsoft Defender 防病毒问题","description":"","frontmatter":{},"headers":[],"relativePath":"problem-solving/MDA.md","filePath":"problem-solving/MDA.md","lastUpdated":1690877862000}'),x={name:"problem-solving/MDA.md"},W=s("h1",{id:"microsoft-defender-防病毒问题",tabindex:"-1"},[e("Microsoft Defender 防病毒问题 "),s("a",{class:"header-anchor",href:"#microsoft-defender-防病毒问题","aria-label":'Permalink to "Microsoft Defender 防病毒问题"'},"​")],-1),v=c('<h2 id="windows-安全中心显示为空白" tabindex="-1">Windows 安全中心显示为空白 <a class="header-anchor" href="#windows-安全中心显示为空白" aria-label="Permalink to &quot;Windows 安全中心显示为空白&quot;">​</a></h2><p>问题图例：<img src="'+l+'" alt=""></p><p>问题引起：可能被注册表屏蔽，或者 Microsoft Defender 防病毒组件被移除。</p><p>解决方案：先尝试从 <a href="https://ys8rx-my.sharepoint.com/:u:/g/personal/gucats-ys8rx-onmicrosoft-com/ET-OJ80GdGBDtVYF7Qu7NT8Bq3pbkbnXgmZda1zIVOWfPQ?e=kzwnuw" target="_blank" rel="noreferrer">OneDrive</a> 下载<code>开启 Microsoft Defender.reg</code>，打开后选择导入。若问题变成<a href="#无可用的防病毒提供方。你的设备易受攻击。">《无可用的防病毒提供方。你的设备易受攻击。》</a>章节的内容，则请参阅<a href="#加载-microsoft-defender-时遇到问题">《加载 Microsoft Defender 时遇到问题》</a>章节。</p><p><strong>特别提示：若是您当前计算机使用的是神州网信政府版（EnterpriseG），该版本不内置 Microsoft Defender 防病毒，故无法使用此文章内任何方法来修复并使用该功能。</strong></p><h2 id="未安装-microsoft-defender-防病毒" tabindex="-1">&quot;未安装 Microsoft Defender 防病毒&quot; <a class="header-anchor" href="#未安装-microsoft-defender-防病毒" aria-label="Permalink to &quot;&quot;未安装 Microsoft Defender 防病毒&quot;&quot;">​</a></h2><p>问题图例：<img src="'+d+'" alt=""></p><p>问题引起&amp;解决方案：请参阅<a href="#加载-microsoft-defender-时遇到问题">《加载 Microsoft Defender 时遇到问题》</a>章节。</p><h2 id="无可用的防病毒提供方。你的设备易受攻击。" tabindex="-1">&quot;无可用的防病毒提供方。你的设备易受攻击。&quot; <a class="header-anchor" href="#无可用的防病毒提供方。你的设备易受攻击。" aria-label="Permalink to &quot;&quot;无可用的防病毒提供方。你的设备易受攻击。&quot;&quot;">​</a></h2><p>问题图例：<img src="'+m+'" alt=""></p><p>问题引起&amp;解决方案：请参阅<a href="#加载-microsoft-defender-时遇到问题">《加载 Microsoft Defender 时遇到问题》</a>章节。</p><h2 id="加载-microsoft-defender-时遇到问题" tabindex="-1">&quot;加载 Microsoft Defender 时遇到问题&quot; <a class="header-anchor" href="#加载-microsoft-defender-时遇到问题" aria-label="Permalink to &quot;&quot;加载 Microsoft Defender 时遇到问题&quot;&quot;">​</a></h2><p>问题图例：<img src="'+f+'" alt=""></p><p>问题引起：微软电脑管家正常运行需要 Microsoft Defender 防病毒及其组件，您的系统缺失该关键组件。</p><p>在最新版中，全面体检一直处于扫描状态的 BUG 已修复，请<a href="https://aka.ms/PCManagerOFL30101" target="_blank" rel="noreferrer">更新到最新版</a>。</p><p><strong>特别提示：若是您当前计算机使用的是神州网信政府版（EnterpriseG），该版本不内置 Microsoft Defender 防病毒，故无法使用此文章内任何方法来修复并使用该功能。</strong></p><p>解决方案：（如果“开始菜单”中没有“Windows 安全中心”，或无法正常使用/闪退的请看 2.）</p><ol><li>自行搜索“反间谍软件名称+如何开启 Defender 防护”。</li></ol><p>特别提示：Microsoft Defender 防病毒亦可能被其它等非反间谍软件所关闭。</p><ol start="2"><li>请参阅<a href="./../appendix/repair-system-image.html#镜像修复">《如何使用镜像对 Windows 进行修复》</a>。</li></ol><h2 id="你正在使用其他防病毒提供程序。" tabindex="-1">&quot;你正在使用其他防病毒提供程序。&quot; <a class="header-anchor" href="#你正在使用其他防病毒提供程序。" aria-label="Permalink to &quot;&quot;你正在使用其他防病毒提供程序。&quot;&quot;">​</a></h2><p>问题图例：<img src="'+_+'" alt=""></p><p>问题描述：未安装除微软电脑管家以外的防病毒提供程序，且无法打开实时防护。</p><p>解决方案：</p><ol><li>从这里下载 <a href="https://www.sordum.org/files/downloads.php?st-defender-control" target="_blank" rel="noreferrer">dControl</a>。</li><li>下载完成后打开压缩文件，将里面的“dControl.zip”打开并解压到任意文件夹。（压缩包密码：sordum） <img src="'+g+'" alt=""></li></ol><p>然后运行里面的“dControl.exe” <img src="'+h+'" alt=""></p><ol start="3"><li><p>在“病毒和威胁防护”——“‘病毒和威胁防护’设置”——“管理设置”中关闭“篡改防护”。 <img src="'+D+'" alt=""></p></li><li><p>在 dControl 中选择“Disable Windows Defender”。 <img src="'+u+'" alt=""></p></li><li><p>再选择“Enable Windows Defender”。 <img src="'+b+'" alt=""></p></li><li><p>最后选择“Open Security Center”，再打开“篡改防护”即可。 <img src="'+C+'" alt=""></p></li></ol><p>若不成功请重复步骤 4-5，然后再自行开启实时防护。</p><ol start="7"><li><p>按下 Windows 徽标键+R，输入 ms-settings:appsfeatures 并回车。</p></li><li><p>找到名为“Windows 安全中心”的程序，并点击旁边的“...”，再点击“高级选项”。 <img src="'+M+'" alt=""></p></li><li><p>先点击“终止”，再点击“重置”，最后重启计算机。 <img src="'+w+'" alt=""></p></li></ol><p>以下是手动触发 <a href="https://go.microsoft.com/fwlink/?LinkID=121721&amp;arch=x64" target="_blank" rel="noreferrer">Microsoft Defender 防病毒更新</a>，为选做内容。</p><ol start="10"><li><p>按下 Windows 徽标键+Q 打开搜索，并输入“cmd”，右键选择“以管理员身份运行”。 <img src="'+q+`" alt=""></p></li><li><p>在 cmd 中输入以下命令并回车。</p></li></ol><div class="language-CMD"><button title="Copy Code" class="copy"></button><span class="lang">CMD</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">ProgramFiles</span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;">/Windows Defender</span></span>
<span class="line"><span style="color:#A6ACCD;">MpCmdRun.exe </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">removedefinitions </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dynamicsignatures</span></span>
<span class="line"><span style="color:#A6ACCD;">MpCmdRun.exe </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">SignatureUpdate</span></span></code></pre></div><p><img src="`+A+'" alt=""></p><p>若有红色矩形框的报错，请将草绿色矩形框中给出的路径里的日志文件上传到 <a href="https://answers.microsoft.com/zh-hans/newthread" target="_blank" rel="noreferrer">Microsoft Community</a> 以寻求帮助。 <img src="'+y+'" alt=""></p><p>并在类型中选择如下：（版本取决于您当前的 Windows 版本。） <img src="'+k+'" alt=""></p>',35);function F(P,S,T,V,B,N){const o=r("font");return a(),n("div",null,[W,p(o,{size:"1"},{default:i(()=>[e("Microsoft Defender 防病毒，早期被称为 Windows Defender (Antivirus)、Windows 安全中心、Microsoft AntiSpyware 等。")]),_:1}),v])}const O=t(x,[["render",F]]);export{E as __pageData,O as default};