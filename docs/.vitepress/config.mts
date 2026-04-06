import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tbed",
  description: "A VitePress Site",
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      head: [["link", { rel: "icon", href: "/img/telegram.svg" }]],
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '开始', link: '/start' },
          { text: '良心云', link: 'https://良心云.com/#/register?code=yE6IosTB' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: '开始', link: '/start' },
              { text: '常见问题', link: '/questions' }
            ]
          },
          {
            text: '友情链接',
            items: [
              { text: 'YouTube', link: 'https://www.youtube.com/@CNBigJackson' },
              { text: 'GitHub', link: 'https://github.com/tud8951/tbed' },
              { text: '良心云机场', link: 'https://良心云.com/#/register?code=yE6IosTB'}
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/tud8951/tbed' }
        ],
        footer: {
          copyright: "COPYRIGHT © 2020 - 2026 BIGJACKSON ALL RIGHTS RESERVED. <a href=\"https://bigjackson.vip\">BigJackson</a> 版权所有",
        }
      }
    },
  }
})
