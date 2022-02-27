import { generatorLocaleByLanguage } from '@dsv-website/utils/locale';
import common from './common';
import navbar from './menu';
import ds from './data-structure';
import ga from './gallery';

export default {
  ...generatorLocaleByLanguage(common, 'en-US'),
  ...generatorLocaleByLanguage(navbar, 'en-US'),
  ...generatorLocaleByLanguage(ds, 'en-US'),
  ...generatorLocaleByLanguage(ga, 'en-US'),
};
