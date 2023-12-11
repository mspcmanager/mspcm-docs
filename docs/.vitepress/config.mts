import { defineConfig } from 'vitepress'

import menuNav from '../data/navigation.json'
import menuSidebar from '../data/sidebar.json'

export default defineConfig({
    // STEP 1 ---- 站点配置
    lang: 'zh-CN',
    title: '微软电脑管家文档',
    description: '微软电脑管家使用及问题帮助文档',
    appearance: true,
    lastUpdated: true,
    cleanUrls: false,

    // STEP 2 ---- 目录配置
    base: '/',
    srcDir: '.',
    outDir: '../dist',
//    locales: {
//        root: {
//            label: '简体中文',
//            lang: 'zh',
//            link: '/',
//            dir: '/'
//        },
//        en: {
//            label: 'English',
//            lang: 'en',
//            link: '/en/',
//            dir: '/en/'
//        },
//    },

    themeConfig: {
        // STEP 3 ---- 相关组件汉化
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '语言',
        outlineTitle: '当前页',
        logo: '/assets/logo.png',
        lastUpdatedText: '最近更新时间',
        siteTitle: '微软电脑管家文档',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },

        // STEP 4 ---- 链接配置
        nav: menuNav,
        sidebar: menuSidebar,
        editLink: {
            pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mspcmanager/mspcm-docs' }
        ],
        footer: {
            message: '本文档基于 CC BY-NC-SA 4.0 协议发布',
            copyright: 'Copyright © 2023-2024 Microsoft PC Manager Administrators'
        },
        // search: {
        //     provider: 'local'
        // }
    }
})
