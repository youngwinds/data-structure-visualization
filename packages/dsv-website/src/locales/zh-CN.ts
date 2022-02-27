import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import common from './common';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';

export default {
  ...generatorLocaleByLanguage(common, 'zh-CN'),
  ...generatorLocaleByLanguage(navbar, 'zh-CN'),
  ...generatorLocaleByLanguage(ds, 'zh-CN'),
  ...generatorLocaleByLanguage(ga, 'zh-CN'),
};
