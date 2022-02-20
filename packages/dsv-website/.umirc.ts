import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  alias: {
    '@dsv-website': resolve(__dirname, './src'),
    '@dsv-charts': resolve(__dirname, '../dsv-charts/src'),
    '@dsv-editor': resolve(__dirname, '/dsv-editor/src'),
  },
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: false,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
