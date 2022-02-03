import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './config'
import { getCodePath } from './utils'
import path from 'path'
import fs from 'fs'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  base: '/',
  themeConfig: {
    logo: 'logo.png',
    repo: 'liwuhou/fuxk-leetcode',
    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  },
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  alias: {
    '@public': path.resolve(__dirname, 'public'),
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Fuxk Leetcode',
      description: '手撕 Leetcode 算法题',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Fuxk leetcode',
    },
  },
  host: 'localhost',
  port: 3000,
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        if (str.includes('@@')) return getCodePath(str)

        return str
      },
    },
  },
})
