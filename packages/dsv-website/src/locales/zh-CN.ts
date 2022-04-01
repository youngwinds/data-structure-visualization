import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';
import bc from './backtracking';

export default {
  ...generatorLocaleByLanguage(sider, 'zh-CN'),
  ...generatorLocaleByLanguage(navbar, 'zh-CN'),
  ...generatorLocaleByLanguage(ds, 'zh-CN'),
  ...generatorLocaleByLanguage(ga, 'zh-CN'),
  ...generatorLocaleByLanguage(bc, 'zh-CN'),
};
