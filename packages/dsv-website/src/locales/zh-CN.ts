import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';
import api from './api';
import bc from './backtracking';
import hm from './home';

export default {
  ...generatorLocaleByLanguage(sider, 'zh-CN'),
  ...generatorLocaleByLanguage(navbar, 'zh-CN'),
  ...generatorLocaleByLanguage(ds, 'zh-CN'),
  ...generatorLocaleByLanguage(ga, 'zh-CN'),
  ...generatorLocaleByLanguage(api, 'en-US'),
  ...generatorLocaleByLanguage(bc, 'zh-CN'),
  ...generatorLocaleByLanguage(hm, 'zh-CN'),
};
