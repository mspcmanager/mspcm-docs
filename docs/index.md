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
import members from "./data/members.json"
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Documentation maintainers</template>
        <template #lead>Please note that we are only administrators in official chat groups instead of Microsoft employees, and we have neither affiliation nor any beneficial relationship with Microsoft Corporation.</template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members"/>
</VPTeamPage>
