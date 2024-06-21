import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Microsoft PC Manager Docs',
    description: 'An unoffical usage and problem-solving documentation for Microsoft PC Manager',

    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        editLink: {
            pattern: 'https://github.com/mspcmanager/mspcm-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'This documentation is released under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License',
            copyright: 'Copyright © 2023-2024 Microsoft PC Manager Administrators'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [{
        text: 'Official website',
        link: 'https://pcmanager.microsoft.com'
    },
    {
        text: 'Follow us',
        items: [
            { text: 'Weibo', link: 'https://weibo.com/mspcmanager' },
            { text: 'Discord', link: 'https://discord.com/invite/FTDTddsPgd' }
        ]
    }]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Get Started',
            items: [
                { text: 'Agreements and Declarations', link: '/get-started/agreements-and-declarations.html' },
                { text: 'About Software', link: '/get-started/about.html' }
            ]
        },
        {
            text: 'Common Problems',
            items: [
                { text: 'Before Installing', link: '/problem-solving/before-installing.html' },
                { text: 'While Installing', link: '/problem-solving/while-installing.html' },
                { text: 'While Using', link: '/problem-solving/while-using.html' },
                { text: 'About Microsoft Defender', link: '/problem-solving/MDA.html' },
                { text: 'Other Unsolved Problems', link: '/problem-solving/unresolved-issues.html' }
            ]
        },
        {
            text: 'Appendix',
            items: [
                { text: 'Check Version', link: '/appendix/check-version.html' },
                { text: 'Submit Logs', link: '/appendix/submit-logs.html' },
                { text: 'Tips', link: '/appendix/OUCH.html' },
                { text: 'Submit Advice & Feedback', link: '/appendix/submit-advice-n-feedback.html' },
                { text: 'Repair System Image', link: '/appendix/repair-system-image.html' },
                { text: 'Change DNS', link: '/appendix/change-DNS.html' },
                { text: 'Our Social Accounts', link: '/appendix/social-accounts.html' },
                { text: 'Postscript', link: '/appendix/postscript.html' }
            ]
        }
    ]
}