# Microsoft Defender 防病毒问题
<font size=1>Microsoft Defender 防病毒，早期被称为 Windows Defender (Antivirus)、Windows 安全中心、Microsoft AntiSpyware 等。</font>

## Windows 安全中心显示为空白
问题图例：![](assets\MDA\Blank_MD.png)

问题引起：可能被注册表屏蔽，或者 Microsoft Defender 防病毒组件被移除。

解决方案：先尝试从 [OneDrive](https://ys8rx-my.sharepoint.com/:u:/g/personal/gucats_ys8rx_onmicrosoft_com/ET_OJ80GdGBDtVYF7Qu7NT8Bq3pbkbnXgmZda1zIVOWfPQ?e=kzwnuw) 下载<code>开启 Microsoft Defender.reg</code>，打开后选择导入。若问题变成《无可用的防病毒提供方。你的设备易受攻击。》章节的内容，则请转到《加载 Microsoft Defender 时遇到问题》章节。

**特别提示：若是您当前计算机使用的是神州网信政府版（EnterpriseG），该版本不内置 Microsoft Defender 防病毒，故无法使用此文章内任何方法来修复并使用该功能。**

## "未安装 Microsoft Defender 防病毒"
问题图例：![](assets\MDA\MD_unable_to_load\MD_not_installed.png)

问题引起&解决方案：请转到《加载 Microsoft Defender 时遇到问题》章节。

## "无可用的防病毒提供方。你的设备易受攻击。"
问题图例：![](assets\MDA\MD_unable_to_load\no_anti-virus_available.png)

问题引起&解决方案：请转到《加载 Microsoft Defender 时遇到问题》章节。

## "加载 Microsoft Defender 时遇到问题"
问题图例：![](assets\MDA\MD_unable_to_load\failed_to_load_MD.png)

问题引起：微软电脑管家正常运行需要 Microsoft Defender 防病毒及其组件，您的系统缺失该关键组件。

在最新版中，全面体检一直处于扫描状态的 BUG 已修复，请[更新到最新版](https://aka.ms/PCManagerOFL30101)。

**特别提示：若是您当前计算机使用的是神州网信政府版（EnterpriseG），该版本不内置 Microsoft Defender 防病毒，故无法使用此文章内任何方法来修复并使用该功能。**

解决方案：（如果“开始菜单”中没有“Windows 安全中心”，或无法正常使用/闪退的请看 2.。）

1. 自行搜索“反间谍软件名称+如何开启 Defender 防护”。

特别提示：Microsoft Defender 防病毒亦可能被其它等非反间谍软件所关闭。

2. 请转到【附录：《如何使用镜像对 Windows 进行修复》】。

## "你正在使用其他防病毒提供程序。"
问题图例：![](assets\MDA\other_anti-virus_being_used\other_anti-virus_being_used.png)

问题描述：未安装除微软电脑管家以外的防病毒提供程序，且无法打开实时防护。

解决方案：

1. 从这里下载 [dControl](https://www.sordum.org/files/downloads.php?st-defender-control)。
2. 下载完成后打开压缩文件，将里面的“dControl.zip”打开并解压到任意文件夹。（压缩包密码：sordum）
![](assets\MDA\other_anti-virus_being_used\Unzip_dControl.png)

然后运行里面的“dControl.exe”
![](assets\MDA\other_anti-virus_being_used\dControl_program.png)

3. 在“病毒和威胁防护”——“‘病毒和威胁防护’设置”——“管理设置”中关闭“篡改防护”。
![](assets\MDA\other_anti-virus_being_used\close_protection.png)

4. 在 dControl 中选择“Disable Windows Defender”。
![](assets\MDA\other_anti-virus_being_used\disable_Windows_Defender.png)

5. 再选择“Enable Windows Defender”。
![](assets\MDA\other_anti-virus_being_used\enable_Windows_Defender.png)

6. 最后选择“Open Security Center”，再打开“篡改防护”即可。
![](assets\MDA\other_anti-virus_being_used\enable_protection.png)

若不成功请重复步骤 4-5，然后再自行开启实时防护。

7. 按下 Windows 徽标键+R，输入 ms-settings:appsfeatures 并回车。

8. 找到名为“Windows 安全中心”的程序，并点击旁边的“...”，再点击“高级选项”。
![](assets\MDA\other_anti-virus_being_used\WSSettings.png)

9. 先点击“终止”，再点击“重置”，最后重启计算机。
![](assets\MDA\other_anti-virus_being_used\stopping&reset.png)

以下是手动触发 [Microsoft Defender 防病毒更新](https://go.microsoft.com/fwlink/?LinkID=121721&arch=x64)，为选做内容。

10. 按下 Windows 徽标键+Q 打开搜索，并输入“cmd”，右键选择“以管理员身份运行”。
![](assets\MDA\other_anti-virus_being_used\run_cmd.png)

11. 在 cmd 中输入以下命令并回车。

```CMD
cd %ProgramFiles%\Windows Defender
MpCmdRun.exe -removedefinitions -dynamicsignatures
MpCmdRun.exe -SignatureUpdate
```

![](assets\MDA\other_anti-virus_being_used\update_MD_version.png)

若有红色矩形框的报错，请将草绿色矩形框中给出的路径里的日志文件上传到 [Microsoft Community](https://answers.microsoft.com/zh-hans/newthread) 以寻求帮助。
![](assets\MDA\other_anti-virus_being_used\updating_errors.png)

并在类型中选择如下：（版本取决于您当前的 Windows 版本。）
![](assets\MDA\other_anti-virus_being_used\select_type.png)
