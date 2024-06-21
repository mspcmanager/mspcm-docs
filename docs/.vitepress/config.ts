import { defineConfig } from 'vitepress'

import zhCn from './locales/zh-cn'
import en from './locales/en'

export default defineConfig({
    base: '/',
    srcDir: '.',
    outDir: '../dist',
    appearance: true,
    lastUpdated: true,
    cleanUrls: false,
    locales: {
        root: { label: 'English', lang: 'en-us', ...en },
        'zh-cn': { label: '简体中文', lang: 'zh-cn', ...zhCn },
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
