import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import { navbar } from './menu';

export default {
  ...generatorLocaleByLanguage(navbar, 'en-US'),
  // DataStructure Sider Menu
  DS_Array: 'Array',
  DS_Array_Push: 'push',
  DS_Array_Pop: 'pop',
  DS_Array_Reverse: 'reverse',
  DS_Array_Sort: 'sort',
  DS_Stack: 'Stack',
  DS_Stack_Push: 'push',
  DS_Stack_Pop: 'pop',
  // Gallery Menu
  Ga_Array: 'Array',
  Ga_Quick_Sort: 'quick sort',
  Ga_Selection_Sort: 'selection sort',
  Ga_Stack: 'Stack',
  Ga_Parenthesis_Matching: 'parenthesis matching',
  ...navbar.map((item) => ({ [item.key]: item['en-US'] })),
};
