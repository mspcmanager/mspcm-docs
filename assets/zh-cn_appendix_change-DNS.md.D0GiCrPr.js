import{_ as a,c as t,a2 as r,o as n}from"./chunks/framework.CCefNoUs.js";const s="/mspcm-docs/assets/edit.DNvf5DgH.png",o="/mspcm-docs/assets/enter-and-change.ClGyqMJR.png",D=JSON.parse('{"title":"更换 DNS","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/appendix/change-DNS.md","filePath":"zh-cn/appendix/change-DNS.md","lastUpdated":1727855757000}'),l={name:"zh-cn/appendix/change-DNS.md"};function p(d,e,i,c,h,m){return n(),t("div",null,e[0]||(e[0]=[r('<h1 id="更换-dns" tabindex="-1">更换 DNS <a class="header-anchor" href="#更换-dns" aria-label="Permalink to &quot;更换 DNS&quot;">​</a></h1><h2 id="如何更换-dns" tabindex="-1">如何更换 DNS <a class="header-anchor" href="#如何更换-dns" aria-label="Permalink to &quot;如何更换 DNS&quot;">​</a></h2><ol><li><p>按下 WIN + R，输入 <a href="ms-settings:network-ethernet">ms-settings:network-ethernet</a> 并回车。</p></li><li><p>找到“DNS 服务器分配”，点击“编辑”&gt;“手动”，将 IPv4 下方的选项打开。</p></li></ol><p><img src="'+s+'" alt=""></p><ol start="3"><li>在红色方框中填入 DNS 服务器地址，再点击下方的“保存”。 （可填入 1.1.1.1、<a href="https://www.opendns.com" target="_blank" rel="noreferrer">OpenDNS</a>、<a href="https://developers.google.cn/speed/public-dns" target="_blank" rel="noreferrer">Google</a>、<a href="https://alidns.com" target="_blank" rel="noreferrer">阿里云公共 DNS</a> 、<a href="https://dns.pub" target="_blank" rel="noreferrer">腾讯云公共 DNS</a> 等其它可信、准确的公共/私有 IPv4 DNS 服务器。）</li></ol><p><img src="'+o+'" alt=""></p><h2 id="为什么要更换-dns-服务器" tabindex="-1">为什么要更换 DNS 服务器 <a class="header-anchor" href="#为什么要更换-dns-服务器" aria-label="Permalink to &quot;为什么要更换 DNS 服务器&quot;">​</a></h2><p>据观测，部分地区/运营商自动分配的 DNS 服务器将 aka.ms 等链接空解析、指向本地回环地址或指向错误的 IP 地址等，故需要更改 DNS 以保证服务链接可以被正常解析。</p>',8)]))}const f=a(l,[["render",p]]);export{D as __pageData,f as default};
