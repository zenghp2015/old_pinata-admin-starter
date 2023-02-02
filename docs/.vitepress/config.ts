import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Pinata',
  description: '一个中后台的解决方案',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      {
        text: '生态系统',
        items: [
          { text: '主题', link: '/ecosystem/themes' },
        ]
      }
    ]
  },

  // vite 配置
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5200
    }
  }
})