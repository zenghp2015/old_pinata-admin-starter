import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Pinata',
  description: '一个中后台的解决方案',
  // vite 配置
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5200
    }
  }
})