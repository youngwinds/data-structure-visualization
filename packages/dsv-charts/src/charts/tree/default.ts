import { TreeConfigType, TreeThemeType } from './type';

export const defaultConfig: TreeConfigType = {
  type: 'tree',
  data: null,
  layout: {
    padding: {
      left: 0,
      right: 0,
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

export const defaultTheme: TreeThemeType = {
  type: 'tree',
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
