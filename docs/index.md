---
layout: home

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
      link: /get-started/agreements-and-declarations
    - theme: alt
      text: 立即下载
      link: https://pcmanager.microsoft.com
---

<style>

</style>

<script setup>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle } from 'vitepress/theme'
import members from "./data/members.json"
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>文档维护人员</template>
        <template #lead>请注意，我们只是该软件 QQ 社群的管理员，并非微软公司的员工，与微软公司无关系，同时也不与微软公司发生任何利益往来。</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members"/>
</VPTeamPage>
