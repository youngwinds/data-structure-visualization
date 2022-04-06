import { merge } from 'lodash';
import { LinkedListChart, LinkedNodeType } from '@dsv-charts/charts';
import { DsLinkedListConfigType, DsLinkedListThemeType } from './type';

let key = 0;

const createLinkedListNode = (data: LinkedNodeType | number[] | string[]) => {
  return data;
};

class DsLinkedList extends LinkedListChart {
  constructor(
    customConfig: DsLinkedListConfigType,
    customTheme: DsLinkedListThemeType
  ) {
    super(
      'container',
      merge({}, customConfig, {
        data: createLinkedListNode(customConfig.data),
      }),
      customTheme
    );
  }
}

export { DsLinkedList, DsLinkedListConfigType, DsLinkedListThemeType };
