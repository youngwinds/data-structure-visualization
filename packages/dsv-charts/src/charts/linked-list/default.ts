import { LinkedListConfigType, LinkedListThemeType } from './type';

export const defaultConfig: LinkedListConfigType = {
  type: 'linkedList',
  data: {
    key: '',
    name: '',
    value: '',
    next: null,
  },
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

export const defaultTheme: LinkedListThemeType = {
  type: 'linkedList',
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
