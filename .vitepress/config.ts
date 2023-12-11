import { defineConfig } from 'vitepress'
import { nav, sidebar } from '../config'
console.log('🤔 ~ file: config.ts:3 ~ nav:', nav)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fuxk-leetcode',
  description: '手撕 Leetcode 算法题',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
