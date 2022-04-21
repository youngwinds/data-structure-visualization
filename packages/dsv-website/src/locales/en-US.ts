import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import bc from './backtracking';
import hm from './home';
import docs from './docs';

export default {
  ...generatorLocaleByLanguage(sider, 'en-US'),
  ...generatorLocaleByLanguage(navbar, 'en-US'),
  ...generatorLocaleByLanguage(bc, 'en-US'),
  ...generatorLocaleByLanguage(hm, 'en-US'),
  ...generatorLocaleByLanguage(docs, 'en-US'),
};
