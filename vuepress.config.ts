import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './config'
import { getRealPathFromAlias, getCodePath } from './utils'
import path from 'node:path'

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
          '我去，你怎么跑这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  },
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Fuxk Leetcode',
      description: '手撕 Leetcode 算法题',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Fuxk leetcode',
    // },
  },
  host: 'localhost',
  port: 5555,
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        if (str.includes('@@')) return getCodePath(str)
        if (str.includes('@')) return getRealPathFromAlias(str)

        return str
      },
    },
  },
  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    // 查看下方
    viteOptions: {
      resolve: {
        alias: {
          '@public': path.resolve(__dirname, 'public'),
          '@code': path.resolve(__dirname, 'code'),
          '@structure': path.resolve(__dirname, 'code', 'structure'),
        },
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
      server: {
        watch: {
          ignored: ['!**/node_modules/**'],
        },
      },
    },
  },
})
