import type { SidebarConfig } from '@vuepress/theme-default'
import fs from 'node:fs'
import path from 'node:path'
import { getFiles, docsPath } from '../../utils'

export const zh: SidebarConfig = {
  '/structure/': [
    {
      text: '数据结构',
      collapsible: true,
      children: fs.readdirSync(path.resolve(docsPath, 'structure')),
    },
  ],
  '/basic/': [
    {
      text: '数组',
      children: getFiles('basic', 'array'),
    },
    {
      text: '链表',

      children: getFiles('basic', 'linked-list'),
    },
    {
      text: '栈',
      children: getFiles('basic', 'stack'),
    },
    // {
    //   text: '字符串',
    //   children: getFiles('basic', 'string'),
    // },
  ],
}
