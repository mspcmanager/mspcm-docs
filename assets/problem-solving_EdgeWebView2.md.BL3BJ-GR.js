import{_ as e,c as s,o as t,a4 as o}from"./chunks/framework.B-8VqrsT.js";const i="/mspcm-docs/assets/already-installed.CTWRjzdv.png",f=JSON.parse('{"title":"Microsoft Edge WebView2 Issues","description":"","frontmatter":{},"headers":[],"relativePath":"problem-solving/EdgeWebView2.md","filePath":"problem-solving/EdgeWebView2.md","lastUpdated":1722100424000}'),a={name:"problem-solving/EdgeWebView2.md"},n=o(`<h1 id="microsoft-edge-webview2-issues" tabindex="-1">Microsoft Edge WebView2 Issues <a class="header-anchor" href="#microsoft-edge-webview2-issues" aria-label="Permalink to &quot;Microsoft Edge WebView2 Issues&quot;">​</a></h1><h2 id="microsoft-edge-webview2-runtime-setup-not-working" tabindex="-1">Microsoft Edge (WebView2 Runtime) Setup Not Working <a class="header-anchor" href="#microsoft-edge-webview2-runtime-setup-not-working" aria-label="Permalink to &quot;Microsoft Edge (WebView2 Runtime) Setup Not Working&quot;">​</a></h2><p>Causation: Redirection of setup errors caused by Image File Execution Options errors.</p><p>Solution:</p><ol><li>Download <code>MicrosoftEdgeSetupUnlocker.reg</code> from <a href="https://gbcs6-my.sharepoint.com/:u:/g/personal/gucats_gbcs6_onmicrosoft_com/ESvGdSUKfTtIrKfkEmlC3AABkDVyQwf3nWYcbc5tC1NiUg?e=rkTobg" target="_blank" rel="noreferrer">OneDrive</a> and merge it to the registry. Or create a txt document, type in the following, save it and change the extension to <code>.reg</code> before merging.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Windows Registry Editor Version 5.00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[-HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\MicrosoftEdgeUpdate.exe]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\MicrosoftEdgeUpdate.exe]</span></span>
<span class="line"><span>&quot;DisableExceptionChainValidation&quot;=dword:00000000</span></span></code></pre></div><ol start="2"><li>Restart your PC and try to re-run the Microsoft Edge WebView 2 Runtime setup.</li></ol><h2 id="the-microsoft-edge-webview2-runtime-is-slready-installed-for-the-system" tabindex="-1">The Microsoft Edge Webview2 Runtime Is Slready Installed For The System <a class="header-anchor" href="#the-microsoft-edge-webview2-runtime-is-slready-installed-for-the-system" aria-label="Permalink to &quot;The Microsoft Edge Webview2 Runtime Is Slready Installed For The System&quot;">​</a></h2><p>Figure Legend:</p><p><img src="`+i+'" alt=""></p><p>Solution: Right-click on the Microsoft Edge WebView2 Runtime setup and select <code>Run as administrator</code>.</p>',11),r=[n];function d(c,l,p,g,u,m){return t(),s("div",null,r)}const b=e(a,[["render",d]]);export{f as __pageData,b as default};
