import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },

  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: false,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
