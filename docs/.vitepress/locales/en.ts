import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Microsoft PC Manager Documentation',
    description: 'An unoffical usage and problem-solving documentation for Microsoft PC Manager',

    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'This documentation is released under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License',
            copyright: 'Copyright © 2023-2024 Microsoft PC Manager Administrators'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [{
        "text": "Official website",
        "link": "https://pcmanager.microsoft.com"
    },
    {
        "text": "Follow us",
        "items": [
            { "text": "Weibo", "link": "https://weibo.com/mspcmanager" },
            { "text": "Discord", "link": "https://discord.com/invite/FTDTddsPgd" }
        ]
    }]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            "text": "起步",
            "items": [
                { "text": "协议与声明", "link": "/get-started/agreements-and-declarations.html" },
                { "text": "关于软件", "link": "/get-started/about.html" }
            ]
        },
        {
            "text": "下载与安装问题",
            "items": [
                { "text": "安装前", "link": "/problem-solving/before-installing.html" },
                { "text": "安装过程中的问题", "link": "/problem-solving/while-installing.html" },
                { "text": "使用过程中的问题", "link": "/problem-solving/while-using.html" },
                { "text": "Microsoft Defender 防病毒问题", "link": "/problem-solving/MDA.html" },
                { "text": "其它尚未解决的问题", "link": "/problem-solving/unresolved-issues.html" }
            ]
        },
        {
            "text": "附录",
            "items": [
                { "text": "公开最新版本号及查询方式", "link": "/appendix/check-version.html" },
                { "text": "提交日志", "link": "/appendix/feedback-bugs.html" },
                { "text": "友情提示", "link": "/appendix/OUCH.html" },
                { "text": "提交建议与反馈及信息采集", "link": "/appendix/connect-with-us.html" },
                { "text": "修复损坏的系统映像", "link": "/appendix/repair-system-image.html" },
                { "text": "如何更换 DNS", "link": "/appendix/change-DNS.html" },
                { "text": "社交媒体账号", "link": "/appendix/social-account.html" },
                { "text": "后记", "link": "/appendix/postscript.html" }
            ]
        }
    ]
}