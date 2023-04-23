# 如何将 DNS 更换为 223.5.5.5 等其它可靠 IPv4 DNS
## 更改方法
1. 按下 Windows 徽标键+R，输入 ms-settings:network-ethernet 并回车。
2. 找到“DNS 服务器分配”，点击“编辑”>“手动”，将 IPv4 下方的选项打开。
![图例](assets/change-dns/step2.png)
3. 在红色方框中填入 DNS 服务器地址，再点击下方的“保存”。
![图例](assets/change-dns/step3.png)
:::warning
可填入 1.1.1.1、[OpenDNS](https://www.opendns.com)、[Google](https://developers.google.cn/speed/public-dns)、[阿里云](https://alidns.com/)、[腾讯云](https://dns.pub/) 等其它可信、准确的公共/私有 IPv4 DNS 服务器。
:::
## 更改原因
据观测，部分地区/运营商自动分配的 DNS 服务器将 aka.ms 等链接空解析、指向本地回环地址或指向错误的 IP 地址等，故需要更改 DNS 以保证服务链接可以被正常解析。