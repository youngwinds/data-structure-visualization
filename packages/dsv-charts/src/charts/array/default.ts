import { ArrayChartConfigType, ArrayChartThemeType } from './type';

export const defaultConfig: ArrayChartConfigType = {
  type: 'array',
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

export const defaultTheme: ArrayChartThemeType = {
  type: 'array',
  colorScheme: [
    '#93b7e3',
    '#59c4e6',
    '#edafda',
    '#516b91',
    '#a5e7f0',
    '#cbb0e3',
  ],
  text: {
    textColor: '#212121',
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
