import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import sider from './sider';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';
import api from './api';
import bc from './backtracking';
import hm from './home';

export default {
  ...generatorLocaleByLanguage(sider, 'en-US'),
  ...generatorLocaleByLanguage(navbar, 'en-US'),
  ...generatorLocaleByLanguage(ds, 'en-US'),
  ...generatorLocaleByLanguage(ga, 'en-US'),
  ...generatorLocaleByLanguage(api, 'en-US'),
  ...generatorLocaleByLanguage(bc, 'en-US'),
  ...generatorLocaleByLanguage(hm, 'en-US'),
};
