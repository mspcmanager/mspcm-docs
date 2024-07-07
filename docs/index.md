---
layout: home
title: Home

hero:
  name: Microsoft PC Manager
  text: A PC optimizator by Microsoft
  tagline: Safeguard your PC in a quiet and reliable way
  image:
    src: /assets/logo.png
    alt: Microsoft PC Manager
  actions:
    - theme: brand
      text: Read documentaion
      link: /get-started/agreements-and-declarations
    - theme: alt
      text: Download
      link: https://pcmanager.microsoft.com
---

<style>

</style>

<script setup>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle } from 'vitepress/theme'

const members = [
   {
      avatar: 'https://www.github.com/goo-aw233.png',
      name: 'Goo-aw233',
      title: 'Core Contributor',
      links: [
         { icon: 'github', link: 'https://github.com/goo-aw233' }
      ]
   },
   {
      avatar: 'https://www.github.com/crrashh1542.png',
      name: 'crrashh1542',
      title: 'Project Leader & Tech',
      links: [
         { icon: 'github', link: 'https://github.com/crrashh1542' }
       ]
    },
    {
       avatar: 'https://www.github.com/ecomter.png',
       name: 'ecomter',
       title: 'Contributor',
       links: [
          { icon: 'github', link: 'https://github.com/ecomter' }
       ]
    },
    {
       avatar: 'https://www.github.com/faq0.png',
       name: 'Untitled',
       title: 'Contributor',
       links: [
          { icon: 'github', link: 'https://github.com/faq0' }
       ]
    },
   {
      avatar: 'https://www.github.com/SplashCN123.png',
      name: 'SplashCN',
      title: 'Contributor',
      links: [
         { icon: 'github', link: 'https://github.com/SplashCN123' }
      ]
   }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Documentation maintainers</template>
        <template #lead>Please note that we are only administrators in official chat groups instead of Microsoft employees, and we have neither affiliation nor any beneficial relationship with Microsoft Corporation.</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members='members'/>
</VPTeamPage>
