import { merge } from 'lodash';
import { LinkedListChart, LinkedNodeType } from '@dsv-charts/charts';
import { DsLinkedListConfigType, DsLinkedListThemeType } from './type';

class DsLinkeNode {
  private key: string;
  private value: string | number;
  private name: string;
  private next: DsLinkeNode;

  private linkedList: DsLinkedList;

  constructor(node: LinkedNodeType, linkedList: DsLinkedList) {
    this.key = node.key;
    this.name = node.name;
    this.value = node.value;
    this.next = null;
    this.linkedList = linkedList;
  }

  link(node: DsLinkeNode) {
    const data = this.linkedList.getData();
    data.links.push({
      source: { key: this.key, value: this.value, name: this.name },
      target: { key: node.key, value: node.value, name: node.name },
    });
    this.linkedList.setData(data);
    this.next = node;
    return node;
  }

  unlink(node: DsLinkeNode) {
    const data = this.linkedList.getData();

    if (node) {
      const index = data.links.findIndex(
        (link) => link.source.key === this.key && link.target.key === node.key
      );
      data.links.splice(index, 1);
      this.linkedList.setData(data);
    } else {
      const newLinks = data.links.filter(
        (link) => link.source.key !== this.key
      );

      this.linkedList.setData({
        nodes: data.nodes,
        links: newLinks,
      });
    }

    return node;
  }

  getNext() {
    return this.next;
  }

  setNext(node: DsLinkeNode) {
    this.link(node);
    return node;
  }

  getData() {
    return {
      key: this.key,
      value: this.value,
      name: this.name,
      next: this.next,
    };
  }

  setData(value: LinkedNodeType) {
    const linkedListData = this.linkedList.getData();
    const node = linkedListData.nodes.find((d) => d.key === this.key);
    node.name = value.name;
    node.value = value.value;

    this.linkedList.setData(linkedListData);
    return this;
  }

  remove() {
    const data = this.linkedList.getData();
    const newLinks = data.links.filter(
      (d) => d.source.key !== this.key && d.target.key !== this.key
    );
    const newNodes = data.nodes.filter((d) => d.key !== this.key);

    this.linkedList.setData({
      nodes: newNodes,
      links: newLinks,
    });

    return this.linkedList;
  }
}

class DsLinkedList extends LinkedListChart {
  private key: number = 0;

  constructor(
    customConfig: DsLinkedListConfigType,
    customTheme: DsLinkedListThemeType
  ) {
    super('container', merge({}, customConfig, {}), customTheme);
  }

  createNode(node: LinkedNodeType) {
    const data = this.getData();
    node.key = String(++this.key);
    data.nodes.push(node);
    this.setData(data);
    return new DsLinkeNode(node, this);
  }

  getSize() {
    return this.key;
  }
}

export { DsLinkedList, DsLinkedListConfigType, DsLinkedListThemeType };
