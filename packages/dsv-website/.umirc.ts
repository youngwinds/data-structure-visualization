import { defineConfig } from 'umi';
import { resolve, join } from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: ['monaco-editor'],
  },
  history: { type: 'hash' },
  alias: {
    '@dsv-website': resolve(__dirname, './src'),
    '@dsv-charts': resolve(__dirname, '../dsv-charts/src'),
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  fastRefresh: {},

  chainWebpack: (memo) => {
    // monorepo下其它包的ts文件无法识别，https://github.com/umijs/umi/issues/7332
    memo.module.rules
      .get('ts-in-node_modules')
      .include.add([join(__dirname, '../dsv-charts')]);

    // monaco  webpack插件
    memo
      .plugin('monaco-editor-webpack-plugin')
      .use(new MonacoWebpackPlugin(), [{ languages: ['javascript'] }]);

    return memo;
  },
});
