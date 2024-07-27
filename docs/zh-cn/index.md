---
layout: home
title: 首页

hero:
  name: 微软电脑管家
  text: 微软官方出品优化软件
  tagline: 简单无打扰，安全又安心。
  image:
    src: /assets/logo.png
    alt: 微软电脑管家
  actions:
    - theme: brand
      text: 阅读文档
      link: ./get-started/agreements-and-declarations
    - theme: alt
      text: 立即下载
      link: https://pcmanager.microsoft.com
---

<style>

</style>

<script setup>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://www.github.com/goo-aw233.png',
        name: '猫猫茂茂',
        title: '文档主要贡献者',
        links: [
            { icon: 'github', link: 'https://github.com/goo-aw233' }
        ]
    },
    {
        avatar: 'https://www.github.com/crrashh1542.png',
        name: '云萧是个咕咕怪！',
        title: '项目发起者',
        links: [
            { icon: 'github', link: 'https://github.com/crrashh1542' }
        ]
    },
    {
        avatar: 'https://www.github.com/ecomter.png',
        name: 'ecomter',
        title: '文档贡献者',
        links: [
            { icon: 'github', link: 'https://github.com/ecomter' }
        ]
    },
    {
        avatar: 'https://www.github.com/faq0.png',
        name: 'Untitled',
        title: '文档贡献者',
        links: [
            { icon: 'github', link: 'https://github.com/faq0' }
        ]
    },
    {
        avatar: 'https://www.github.com/SplashCN123.png',
        name: 'SplashCN',
        title: '文档贡献者',
        links: [
            { icon: 'github', link: 'https://github.com/SplashCN123' }
        ]
    }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>文档维护人员</template>
        <template #lead>请注意，我们只是该软件 QQ 社群的管理员，并非微软公司的员工，与微软公司无关系，同时也不与微软公司发生任何利益往来。</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members='members'/>
</VPTeamPage>
