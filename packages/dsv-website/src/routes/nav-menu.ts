import { IMenu } from '@/typings/IMenu';

/**
 * 顶部导航菜单
 * @key 确保唯一
 * @locale umi国际化插件定义在 src/locales/*
 */
export const navMenu: IMenu = [
  {
    key: 'home',
    locale: 'Home',
  },
  {
    key: 'api',
    locale: 'Api',
  },
  {
    key: 'data-structure',
    locale: 'DataStructure',
  },
  {
    key: 'gallery',
    locale: 'Gallery',
  },
];
