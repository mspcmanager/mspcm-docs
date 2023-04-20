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
    nav: [{
      text: '官方网站',
      link: 'https://pcmanager.microsoft.com'
    },
    {
      text: '关注我们',
      items: [
        { text: '官方微博', link: 'https://weibo.com/mspcmanager' },
        { text: '官方公众号', link: 'http://weixin.qq.com/r/VyhzazfExmq5rXMI931F' },
        { text: '官方 QQ 群', link: 'https://forms.office.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7Jc7yMooGtIh8-T51_PVotUNkZSWVJSQVo4SFZVUUtDSDVHRjA4MTFMWi4u' },
        { text: '官方 Discord', link: 'https://discord.com/invite/FTDTddsPgd' }
      ]
    }],

    editLink: {
      pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/:path',
      text: '在 Github 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mspcmanager/mspcm-docs' }
    ],

    footer: {
      message: '本文档基于 Apache 2.0 协议发布',
      copyright: 'Copyright © 2023 Microsoft PC Manager Administrators'
    },

    search: {
      provider: 'local'
    }
  }
})
