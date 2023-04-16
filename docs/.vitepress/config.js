import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  lang: 'zh-CN',
  title: '微软电脑管家文档',
  description: '微软电脑管家使用及问题帮助文档',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  base: '/',

  themeConfig: {

    editLink: {
      pattern: 'https://github.com/mcpcmanager/mspcm-docs/edit/main/:path',
      text: '在 github 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mspcmanager/mspcm-docs' }
    ],

    footer: {
      message: '本文档基于 Apache 2.0 协议发布',
      copyright: 'Copyright © 2023 Microsoft PC Manager Administrators'
    }
  }
})