# 如何提交日志文件

## 提交安装失败的 Log
反馈方式：
1. 以下两种办法可二选一执行来获取软件的日志。

- a. 打开“运行”，输入 %temp%，找到文件夹，一般它被命名为“n+字符串.tmp”。
![](assets\appendix\feedback-bugs\installation-failure\temporary-documents-1.png)
![](assets\appendix\feedback-bugs\installation-failure\temporary-documents-2.png)

（其它软件可能也会生成生成类似的文件夹，请注意辨别文件夹内是否有 MSPCManagerInstaller.log 的文件，如果有多个请一起提交）或搜索 MSPCManagerInstaller找到日志文件。
- b. 按下 Windows 徽标键+X，选择“PowerShell(管理员)”或“终端(管理员)”，并输入以下内容。

```PowerShell
Get-ChildItem $env:temp -recurse MSPCManagerInstaller.log | Copy-Item -Filter "MSPCManagerInstaller.log" -destination "$env:PUBLIC\Desktop\微软电脑管家安装日志.log"
```

2. 获取转储文件：请转到【附录：《如何获取转储文件》】。

3. 反馈问题：

您可以简单描述一下问题并提交打包好的 Log 给软软小助手，模板如下：

微软电脑管家版本：1.2.9.3

系统：Windows 11 专业工作站版 Insider Preview 22H2 25346.1001

问题：微软电脑管家安装失败。

（按下 Windows 徽标键+R，输入 ms-settings:about ，回车后即可看系统版本，无需截图给软软小助手，只是图例。）
![](assets\appendix\feedback-bugs\view-versions\SysinfoWin11.png)
![](assets\appendix\feedback-bugs\view-versions\SysinfoWin10.png)

## 提交其它问题的 Log

反馈方式：

获取日志及转储文件：

1. 下载群文件中的“LogRetriever.exe”（或向管理员获取，或从 [OneDrive](https://ys8rx-my.sharepoint.com/:f:/g/personal/gucats_ys8rx_onmicrosoft_com/EpTwJyb79lhAu8FLndBuqMQB9vG7fYCJsC98_UopATMoog?e=lxQAa1) 下载。）并将文件需要放置在桌面后，右键该文件，选择“以管理员身份运行”。

（如果你使用的是“Log&EvtxRetriever.bat”，则直接执行第 3 步。）

2.下载“EvtxRetriever.bat”，右键该文件，选择“以管理员身份运行”。

3.转到【附录：《如何获取转储文件》】。

4.将 LogRetriever.exe 与 EvtxRetriever.bat（亦或是 Log&EvtxRetriever.bat）生成的 zip 压缩包与应用程序事件一并发送给软软小助手(551292353)，并根据以下模板发送你的计算机信息：

微软电脑管家版本：1.2.9.3

系统：Windows 11 专业工作站版 Insider Preview 22H2 25346.1001

问题：微软电脑管家的缓存清理功能导致某软件弹窗。

（按下 Windows 徽标键+R，输入 ms-settings:about ，回车后即可看系统版本，无需截图给软软小助手，只是图例。）
![](assets\appendix\feedback-bugs\view-versions\SysinfoWin11.png)
![](assets\appendix\feedback-bugs\view-versions\SysinfoWin10.png)

## 获取 DMP 文件
按下 Ctrl+Shift+ESC 打开任务管理器，找到名为“微软电脑管家”（或“MSPCManager”）的子进程，点击展开按钮（>），选择名为“微软电脑管家”（或“MSPCManager”）的子进程并右键，点击“创建转储文件(C)”。
![](assets\appendix\feedback-bugs\dmp\create-dmp-file-1.png)

如果是安装程序，则直接右键“MSPCManager”（或“微软电脑管家”），点击“创建转储文件(C)”。
![](assets\appendix\feedback-bugs\dmp\create-dmp-file-2.png)

完成后点击“打开文件位置”。
![](assets\appendix\feedback-bugs\dmp\open-in.png)

将 MSPCManager.DMP 文件复制到“微软电脑管家日志文件”的文件夹后一并打包成压缩包。
![](assets\appendix\feedback-bugs\dmp\dmp-file.png)