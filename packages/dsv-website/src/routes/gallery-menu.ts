import { IMenu } from '../typings/IMenu';

/**
 * 数据结构页面菜单配置
 */
export const GalleryMenu: IMenu = [
  {
    key: 'array',
    locale: 'Ga_Array',
    children: [
      {
        key: 'quick_sort',
        locale: 'Ga_Quick_Sort',
      },
      {
        key: 'selection_sort',
        locale: 'Ga_Selection_Sort',
      },
    ],
  },
  {
    key: 'stack',
    locale: 'Ga_Stack',
    children: [
      {
        key: 'push',
        locale: 'Ga_Parenthesis_Matching',
      },
    ],
  },
];
