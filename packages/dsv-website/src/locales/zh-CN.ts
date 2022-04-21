import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import bc from './backtracking';
import hm from './home';
import docs from './docs';

export default {
  ...generatorLocaleByLanguage(sider, 'zh-CN'),
  ...generatorLocaleByLanguage(navbar, 'zh-CN'),
  ...generatorLocaleByLanguage(bc, 'zh-CN'),
  ...generatorLocaleByLanguage(hm, 'zh-CN'),
  ...generatorLocaleByLanguage(docs, 'zh-CN'),
};
