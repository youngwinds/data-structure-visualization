import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import { navbar } from './menu';

export default {
  // 导航菜单
  ...generatorLocaleByLanguage(navbar, 'zh-CN'),
  /** 数据结构侧导航 */
  DS_Array: '数组',
  DS_Array_Push: 'push',
  DS_Array_Pop: 'pop',
  DS_Array_Reverse: 'reverse',
  DS_Array_Sort: 'sort',
  DS_Stack: '栈',
  DS_Stack_Push: 'push',
  DS_Stack_Pop: 'pop',
  // 画廊侧导航
  Ga_Array: '数组',
  Ga_Quick_Sort: '快速排序',
  Ga_Selection_Sort: '选择排序',
  Ga_Stack: '栈',
  Ga_Parenthesis_Matching: '括号匹配',
};
