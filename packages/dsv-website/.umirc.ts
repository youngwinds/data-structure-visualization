import { defineConfig } from 'umi';
import { resolve, join } from 'path';

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
  locale: {
    default: 'zh-CN',
    antd: false,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  fastRefresh: {},
  // monorepo下其它包的ts文件无法识别，https://github.com/umijs/umi/issues/7332
  chainWebpack($, { webpack }) {
    $.module.rules
      .get('ts-in-node_modules')
      .include.add([
        join(__dirname, '../dsv-charts'),
        join(__dirname, '../dsv-editor'),
      ]);
  },
});
