import { MatrixConfigType, MatrixThemeType } from './type';

export const defaultConfig: MatrixConfigType = {
  type: 'matrix',
  data: [],
  layout: {
    padding: {
      left: 50,
      right: 50,
      bottom: 50,
      top: 50,
    },
    position: 'relative',
    zIndex: 1,
  },
  transition: {
    duration: 500,
  },
};

export const defaultTheme: MatrixThemeType = {
  type: 'matrix',
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
    width: 5,
  },
  arrow: {
    color: '#212121',
    width: 2,
  },
};
