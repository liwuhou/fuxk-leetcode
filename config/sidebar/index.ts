import type { DefaultTheme } from 'vitepress'
import { getDocsFiles } from '../../utils'

export const sidebar: DefaultTheme.Sidebar = {
  '/structure/': [
    {
      text: '数据结构',
      collapsed: true,
      items: getDocsFiles('structure'),
    },
  ],
  '/basic/': [
    {
      text: '算法题',
      items: getDocsFiles('basic'),
    },
  ],
}
