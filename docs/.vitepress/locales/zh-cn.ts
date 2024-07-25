import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '微软电脑管家文档',
    description: '微软电脑管家的使用及问题帮助的非官方文档',

    themeConfig: {
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '语言',
        outlineTitle: '当前页',
        lastUpdatedText: '最近更新时间',
        siteTitle: '微软电脑管家文档',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },

        // STEP 4 ---- 链接配置
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/zh-cn/:path',
            text: '在 GitHub 上编辑此页'
        },
        footer: {
            message: '本文档基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 协议</a> 发布',
            copyright: 'Copyright © 2023-2024 Microsoft PC Manager Volunteers'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [{
        text: '官方网站',
        link: 'https://pcmanager.microsoft.com'
    },
    {
        text: '关注我们',
        items: [
            { text: '官方 QQ 群', link: 'https://forms.office.com/r/CEdWBcMkiN' },
            { text: '官方微博', link: 'https://weibo.com/mspcmanager' },
            { text: '官方微信公众号', link: 'http://weixin.qq.com/r/VyhzazfExmq5rXMI931F' }
        ]
    }]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '起步',
            items: [
                { text: '协议与声明', link: '/zh-cn/get-started/agreements-and-declarations.html' },
                { text: '加入预览体验计划', link: '/zh-cn/get-started/join-insider.html' },
                { text: '关于软件', link: '/zh-cn/get-started/about.html' }
            ]
        },
        {
            text: '下载与安装问题',
            items: [
                { text: '快速开始', link: '/zh-cn/problem-solving/quick-start.html' },
                { text: '主程序使用问题', link: '/zh-cn/problem-solving/main-program.html' },
                { text: 'Microsoft Edge WebView2 问题', link: '/zh-cn/problem-solving/EdgeWebView2.html' },
                { text: 'Microsoft Defender 防病毒问题', link: '/zh-cn/problem-solving/MDA.html' },
                { text: '其它使用方法', link: '/zh-cn/problem-solving/other-usage.html' },
                { text: '其它尚未解决的问题', link: '/zh-cn/problem-solving/unresolved-issues.html' }
            ]
        },
        {
            text: '附录',
            items: [
                { text: '公开最新版本号及查询方式', link: '/zh-cn/appendix/check-version.html' },
                { text: '提交日志', link: '/zh-cn/appendix/submit-logs.html' },
                { text: '友情提示', link: '/zh-cn/appendix/OUCH.html' },
                { text: '提交建议与反馈及信息采集', link: '/zh-cn/appendix/submit-advice-n-feedback.html' },
                { text: '修复损坏的系统映像', link: '/zh-cn/appendix/repair-system-image.html' },
                { text: '如何更换 DNS', link: '/zh-cn/appendix/change-DNS.html' },
                { text: '社交媒体账号', link: '/zh-cn/appendix/social-accounts.html' },
                { text: '后记', link: '/zh-cn/appendix/postscript.html' }
            ]
        }
    ]
}