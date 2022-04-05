import { StackChartConfigType, StackChartThemeType } from './type';

export const defaultConfig: StackChartConfigType = {
  type: 'stack',
  data: [],
  layout: {
    padding: {
      left: 50,
      right: 50,
      bottom: 50,
      top: 50,
    },
  },
  transition: {
    duration: 500,
  },
};

export const defaultTheme: StackChartThemeType = {
  type: 'stack',
  colorScheme: [
    '#93b7e3',
    '#59c4e6',
    '#edafda',
    '#516b91',
    '#a5e7f0',
    '#cbb0e3',
  ],
  text: {
    color: '#212121',
  },
  border: {
    color: '#eeeeee',
    width: 10,
  },
  arrow: {
    color: '#212121',
    width: 2,
  },
};
