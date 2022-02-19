import { IMenu } from '../../typings/IMenu';

/**
 * 数据结构页面菜单配置
 */
export const DataStructureMenu: IMenu = [
  {
    key: 'array',
    locale: 'DS_Array',
    children: [
      {
        key: 'push',
        locale: 'DS_Array_Push',
      },
      {
        key: 'pop',
        locale: 'DS_Array_Pop',
      },
      {
        key: 'reverse',
        locale: 'DS_Array_Reverse',
      },
      {
        key: 'sort',
        locale: 'DS_Array_Sort',
      },
    ],
  },
  {
    key: 'stack',
    locale: 'DS_Stack',
    children: [
      {
        key: 'push',
        locale: 'DS_Stack_Push',
      },
      {
        key: 'pop',
        locale: 'DS_Stack_Pop',
      },
    ],
  },
];
