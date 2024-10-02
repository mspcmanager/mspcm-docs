import{_ as i,c as r,j as t,a as s,G as n,w as a,a2 as p,B as c,o as l}from"./chunks/framework.CCefNoUs.js";const d="/mspcm-docs/assets/Blank-MD.mVhrNoNm.png",u="/mspcm-docs/assets/no-active-antivirus-provider.D04HuIg3.png",m="/mspcm-docs/assets/unable-to-use-Windows-Security.qn_Hg_uO.png",h="/mspcm-docs/assets/real-time-protection-is-off.QbI72y14.png",g="/mspcm-docs/assets/other-anti-virus-being-used.EYmM0eye.png",f="/mspcm-docs/assets/unzip-dControl.irmvww0X.png",v="/mspcm-docs/assets/dControl-program.DlpPkuFn.png",y="/mspcm-docs/assets/close-protection.mI1MDpn_.png",k="/mspcm-docs/assets/disable-Windows-Defender.BLG6WEvt.png",w="/mspcm-docs/assets/enable-Windows-Defender.vZcZcvsK.png",b="/mspcm-docs/assets/enable-protection.CjPXkGhx.png",_="/mspcm-docs/assets/advanced-options.D_vFeUQz.png",D="/mspcm-docs/assets/stop-and-reset.DmLOlPa6.png",E="/mspcm-docs/assets/run-cmd.C65-VwFS.png",C="/mspcm-docs/assets/update-MD-version.CKZ96kkj.png",M="/mspcm-docs/assets/updating-errors.DiqQIjcQ.png",A="/mspcm-docs/assets/select-type.CWLm2Soh.png",P="/mspcm-docs/assets/antivirus-is-protecting-your-computer.CB83WBgD.png",S="/mspcm-docs/assets/checkAV.BrzJfBfX.png",W="/mspcm-docs/assets/list.Cy4Aw4Kw.png",B=JSON.parse('{"title":"Microsoft Defender Antivirus Issue","description":"","frontmatter":{},"headers":[],"relativePath":"problem-solving/MDA.md","filePath":"problem-solving/MDA.md","lastUpdated":1727855757000}'),I={name:"problem-solving/MDA.md"};function x(q,e,N,F,O,T){const o=c("font");return l(),r("div",null,[e[1]||(e[1]=t("h1",{id:"microsoft-defender-antivirus-issue",tabindex:"-1"},[s("Microsoft Defender Antivirus Issue "),t("a",{class:"header-anchor",href:"#microsoft-defender-antivirus-issue","aria-label":'Permalink to "Microsoft Defender Antivirus Issue"'},"​")],-1)),n(o,{size:"1"},{default:a(()=>e[0]||(e[0]=[s("Microsoft Defender antivirus, earlier known as Windows Defender (Antivirus), Windows Security Center, Microsoft AntiSpyware, and others.")])),_:1}),e[2]||(e[2]=p('<h2 id="windows-security-center-has-no-contents" tabindex="-1">Windows Security Center has no contents <a class="header-anchor" href="#windows-security-center-has-no-contents" aria-label="Permalink to &quot;Windows Security Center has no contents&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+d+'" alt=""></p><p>Causation: blocked by the registry, or the Microsoft Defender AntiVirus component has been removed.</p><p>Solution: First try downloading from <a href="https://gbcs6-my.sharepoint.com/:u:/g/personal/gucats_gbcs6_onmicrosoft_com/ES5ZszNQoXtOiueo9CpywpEB4rn3BmazwAUR41snZLcEaw?e=xvUewk" target="_blank" rel="noreferrer">OneDrive</a> Download <code>EnableMicrosoftDefender.reg</code>, open it and select <code>Merge</code>. If the question becomes <a href="#no-active-antivirus-provider">No Active Antivirus Provider</a> section, see the <a href="#you-re-using-other-antivirus-providers">You&#39;re Using Other Antivirus Providers</a> section.</p><p><strong>Notice: If your current PC is using Windows that does not come with Microsoft Defender Antivirus, such as EnterpriseG, you will not be able to use any of the methods in this article to repair and use this feature.</strong></p><h2 id="no-active-antivirus-provider" tabindex="-1">No Active Antivirus Provider <a class="header-anchor" href="#no-active-antivirus-provider" aria-label="Permalink to &quot;No Active Antivirus Provider&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+u+'" alt=""></p><p>Causation &amp; Solution: See the section <a href="#real-time-protection-is-off">Real-time Protection Is Off</a>.</p><h2 id="unable-to-use-windows-security" tabindex="-1">Unable To Use Windows Security <a class="header-anchor" href="#unable-to-use-windows-security" aria-label="Permalink to &quot;Unable To Use Windows Security&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+m+'" alt=""></p><p>Causation &amp; Solution: See the section <a href="#real-time-protection-is-off">Real-time Protection Is Off</a>.</p><h2 id="real-time-protection-is-off" tabindex="-1">Real-time Protection Is Off <a class="header-anchor" href="#real-time-protection-is-off" aria-label="Permalink to &quot;Real-time Protection Is Off&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+h+'" alt=""></p><p>Causation: The normal operation of Microsoft PC Manager requires Microsoft Defender Antivirus and its components, your system is missing this key component.</p><p><strong>Notice: If your current PC is using Windows that does not come with Microsoft Defender Antivirus, such as EnterpriseG, you will not be able to use any of the methods in this article to repair and use this feature.</strong></p><p>Solution: (If there is no <code>Windows Security</code> in the <code>Start Menu</code>, or if it does not work or crash, please see 2., If it still doesn&#39;t work, see 3.)</p><ol><li>Search for &quot;anti-virus name + how to enable Defender protection&quot;.</li></ol><p>Notice: Microsoft Defender AntiVirus may also be disabled by other non-anti-virus programs.</p><ol start="2"><li><p>See <a href="#you-re-using-other-antivirus-providers">You&#39;re using other antivirus providers</a>.</p></li><li><p>See <a href="#image-repair">How to Repair Windows Using Images</a>.</p></li></ol><h2 id="you-re-using-other-antivirus-providers" tabindex="-1">You&#39;re Using Other Antivirus Providers <a class="header-anchor" href="#you-re-using-other-antivirus-providers" aria-label="Permalink to &quot;You&#39;re Using Other Antivirus Providers&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+g+'" alt=""></p><p>Description: No Anti-Virus provider other than Microsoft PC Manager is installed and real-time protection cannot be turned on.</p><p>Solution:</p><ol><li>Download <a href="https://www.sordum.org/files/downloads.php?st-defender-control" target="_blank" rel="noreferrer">dControl</a> from here.</li></ol><div class="warning custom-block"><p class="custom-block-title">Notice</p><p>This is a non-official Microsoft website. This site appears to provide detailed information on pace and safety. The site may advertise products you don&#39;t need, so please study the details on the site thoroughly before deciding to download and install it.</p></div><ol start="2"><li>After the download is complete, open the zip zrchive, open the <code>dControl.zip</code> inside and unzip it to any folder. (password: sordum)</li></ol><p><img src="'+f+'" alt=""></p><p>Then run the <code>dControl.exe</code></p><p><img src="'+v+'" alt=""></p><ol start="3"><li>Turn off <code>Tampering Protection</code> in <code>Virus &amp; threat protection</code> - <code>Manage settings</code> of <code>Virus and threat protection</code>.</li></ol><p><img src="'+y+'" alt=""></p><ol start="4"><li>Select <code>Disable Windows Defender</code> in the dControl.</li></ol><p><img src="'+k+'" alt=""></p><ol start="5"><li>Select <code>Disable Windows Defender</code> in the dControl.</li></ol><p><img src="'+w+'" alt=""></p><ol start="6"><li>Finally, select <code>Open Security Center</code> and turn on <code>Tamper Protection</code>.</li></ol><p><img src="'+b+'" alt=""></p><p>If unsuccessful please repeat steps 4 - 5 before turning on Real-time protection yourself.</p><ol start="7"><li><p>Press WIN + R, type <a href="ms-settings:systemcomponents">ms-settings:systemcomponents</a> and Enter. (If it does not take effect, type <a href="ms-settings:appsfeatures">ms-settings:appsfeatures</a>)</p></li><li><p>Find the program called <code>Windows Security</code> and click <code>...</code> next to it. and click on <code>Advanced options</code>.</p></li></ol><p><img src="'+_+'" alt=""></p><ol start="9"><li>Click <code>Terminate</code>, then <code>Reset</code>, and finally restart your PC.</li></ol><p><img src="'+D+'" alt=""></p><p>The following manual trigger <a href="https://go.microsoft.com/fwlink/?LinkID=121721&amp;arch=x64" target="_blank" rel="noreferrer">Microsoft Defender AntiVirus Update</a>, is optional.</p><ol start="10"><li>Press WIN + Q to open search and type <code>cmd</code>, right click and select &quot;Run as administrator&quot;.</li></ol><p><img src="'+E+`" alt=""></p><ol start="11"><li>Type the following command in cmd and Enter.</li></ol><div class="language-CMD vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CMD</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProgramFiles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/Windows Defender</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MpCmdRun.exe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">removedefinitions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dynamicsignatures</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MpCmdRun.exe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SignatureUpdate</span></span></code></pre></div><p><img src="`+C+'" alt=""></p><p>If there are errors in the red rectangle, please upload the log file in the path given in the grass green rectangle to <a href="https://answers.microsoft.com/en-us/newthread" target="_blank" rel="noreferrer">Microsoft Community</a> for assistance.</p><p><img src="'+M+'" alt=""></p><p>and select the following in Topics: (The Version depends on your current Windows version)</p><p><img src="'+A+'" alt=""></p><h2 id="antivirus-software-is-protecting-your-computer" tabindex="-1">Antivirus software is protecting your computer <a class="header-anchor" href="#antivirus-software-is-protecting-your-computer" aria-label="Permalink to &quot;Antivirus software is protecting your computer&quot;">​</a></h2><p>Figure Legend:</p><p><img src="'+P+'" alt=""></p><p>Description: No antivirus provider other than Microsoft PC Manager is installed, or other antivirus provider(s) have been installed and uninstalled intentionally or unintentionally.</p><p>Causation: Errors caused by incomplete uninstallation of other antivirus providers.</p><p>Solution:</p><ol><li>Download <code>Microsoft PC Manager Helper Script_CMD</code> from <a href="https://gbcs6-my.sharepoint.com/:f:/g/personal/gucats_gbcs6_onmicrosoft_com/EtKwa-2la71HmG2RxkB5lngBvvRt9CFOYsyJG_HOwYIzNA?e=iDgaEm" target="_blank" rel="noreferrer">OneDrive</a>, unzip all its contents and run the <code>MSPCManagerHelper.bat</code> inside it by typing <code>checkAV</code> and enter.</li></ol><p><img src="'+S+'" alt=""></p><ol start="2"><li>Wait a moment and the script will list the name, status and path to the executable file of the anti-virus software installed on your PC. (Windows Defender is Microsoft Defender Antivirus)</li></ol><p><img src="'+W+'" alt=""></p><ol start="3"><li>Solve the problem on your own or seek help from a moderator according to the path given.</li></ol>',68))])}const R=i(I,[["render",x]]);export{B as __pageData,R as default};
