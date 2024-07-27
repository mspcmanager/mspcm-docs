import { defineConfig } from 'vitepress'

import zhCn from './locales/zh-cn'
import en from './locales/en'

export default defineConfig({
    base: '/mspcm-docs/',
    srcDir: '.',
    outDir: '../dist',
    appearance: true,
    lastUpdated: true,
    cleanUrls: false,
    ignoreDeadLinks: [
        url => {
            return url.toLowerCase().includes('./index')
        }
    ],
    locales: {
        root: { label: 'English', dir: 'en', ...en },
        "zh-cn": { label: '简体中文', dir: 'zh-cn', ...zhCn },
    },

    themeConfig: {
        search: {
            provider: 'local'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mspcmanager/mspcm-docs' }
        ]
    }
})
