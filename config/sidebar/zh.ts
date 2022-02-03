import type { SidebarConfig } from '@vuepress/theme-default'
import { getFiles } from '../../utils'

export const zh: SidebarConfig = {
  '/basic/': [
    {
      text: '初级',
      collapsible: true,
      children: [
        {
          text: '数组',
          children: getFiles('basic', 'array'),
        },
        // {
        //   text: '字符串',
        //   children: getFiles('basic', 'string'),
        // },
      ],
    },
  ],
}