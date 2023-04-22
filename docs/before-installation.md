# 安装前的问题

## 无法更改安装目录
问题图例：V1.x 与 V2.x 对比。

![](assets\before-installation\select-installation-folder.png)

原因：微软电脑管家的关键组件需要在 C 盘下才能保证其正常运行，在下一次跨版本更新之前 <font color=red>**可能都不会**</font> 再次加入此功能。

## 官网正常打开但无法下载
问题图例：（亦或者提示“aka.ms 花了太长时间进行响应”）

![](assets\before-installation\refused-to-connected.png)

解决方案：
1. 将地址栏中“aka.ms”字样的内容替换为“www.aka.ms”（如下图高亮部分所示）

![](assets\before-installation\replacement.png)

2. 将 DNS 更换为 223.5.5.5 等其它可靠 IPv4 DNS 后再重试。（需要帮助？请转到【附录：《如何更换 DNS》】）