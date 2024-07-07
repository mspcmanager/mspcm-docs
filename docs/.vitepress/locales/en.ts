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
        text: 'Official Website',
        link: 'https://pcmanager.microsoft.com'
    },
    {
        text: 'Follow us',
        items: [
            { text: 'Discord', link: 'https://discord.com/invite/FTDTddsPgd' },
            { text: 'Reddit', link: 'https://www.reddit.com/r/MicrosoftPcManager' },
            { text: 'Facebook', link: 'https://www.facebook.com/microsoft.pcmanager.tw' }
        ]
    }]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Get Started',
            items: [
                { text: 'Agreements and Declarations', link: '/get-started/agreements-and-declarations.html' },
                { text: 'About Us', link: '/get-started/about.html' }
            ]
        },
        {
            text: 'Common Problems',
            items: [
                { text: 'Quick Start', link: '/problem-solving/quick-start.html' },
                { text: 'Main Program Usage Issues', link: '/problem-solving/main-program.html' },
                { text: 'Microsoft Edge WebView2 Issues', link: '/problem-solving/EdgeWebView2.html' },
                { text: 'Microsoft Defender AntiVirus Issues', link: '/problem-solving/MDA.html' },
                { text: 'Other Usage', link: '/problem-solving/other-usage.html' },
                { text: 'Other Unresolved Issues', link: '/problem-solving/unresolved-issues.html' }
            ]
        },
        {
            text: 'Appendix',
            items: [
                { text: 'Latest Version', link: '/appendix/check-version.html' },
                { text: 'Submit Logs', link: '/appendix/submit-logs.html' },
                { text: 'Submission of Suggestions and Feedback and Information Collection', link: '/appendix/submit-advice-n-feedback.html' },
                { text: 'Repair a Windows Image', link: '/appendix/repair-system-image.html' },
                { text: 'Change DNS', link: '/appendix/change-DNS.html' },
                { text: 'Social Media', link: '/appendix/social-accounts.html' },
                { text: 'Postscript', link: '/appendix/postscript.html' }
            ]
        }
    ]
}