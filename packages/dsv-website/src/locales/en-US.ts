import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';
import bc from './backtracking';

export default {
  ...generatorLocaleByLanguage(sider, 'en-US'),
  ...generatorLocaleByLanguage(navbar, 'en-US'),
  ...generatorLocaleByLanguage(ds, 'en-US'),
  ...generatorLocaleByLanguage(ga, 'en-US'),
  ...generatorLocaleByLanguage(bc, 'en-US'),
};
