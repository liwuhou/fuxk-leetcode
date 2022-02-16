import type { SidebarConfig } from '@vuepress/theme-default'
import { getFiles } from '../../utils'

export const zh: SidebarConfig = {
  '/basic/': [
    {
      text: '基础',
      collapsible: true,
      children: [
        {
          text: '数组',
          children: getFiles('basic', 'array'),
        },
        {
          text: '链表',
          children: getFiles('basic', 'linked-list'),
        },
        // {
        //   text: '字符串',
        //   children: getFiles('basic', 'string'),
        // },
      ],
    },
  ],
}
