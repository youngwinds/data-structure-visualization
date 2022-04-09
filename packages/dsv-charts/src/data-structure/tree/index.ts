import { merge, cloneDeep } from 'lodash';
import { TreeChart } from '@dsv-charts/charts';
import { DsTreeConfigType, DsTreeThemeType } from './type';
import { TreeNodeType } from '@dsv-charts/charts/tree/type';

type DsTreeValueType = {
  key?: string;
  name?: string;
  value?: string | number;
};

type DsTreeNodeType = {
  key: string;
  name: string;
  value: string | number;
};

class DsTreeNode {
  key: string = '';
  name: string = '';
  value: string | number = '';
  next: DsTreeNode = null;
  children: DsTreeNode[] = [];
  dsTree: DsTree = null;

  constructor(node: DsTreeNodeType, dsTree: DsTree) {
    this.name = node.name;
    this.value = node.value;
    this.key = node.key;

    this.dsTree = dsTree;
  }

  append(node: DsTreeNode): DsTreeNode {
    const data = this.dsTree.getConfigByKey('data');

    if (this.dsTree.isExit(data, node.key)) {
      throw new Error(`Adding duplicate nodes is not allowed: ${node}`);
    }

    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    if (currentNode !== null) {
      currentNode.children.push(this.dsTree.serializeDsTreeNode(node));
    }
    this.dsTree.setData(data);
    this.children.push(node);
    return node;
  }

  insertBefote(node: DsTreeNode, targetNode: DsTreeNode): DsTreeNode {
    return node;
  }

  insertAfter(node: DsTreeNode) {}

  swap(node: DsTreeNode) {}

  remove() {}

  clear(): this {
    const data = this.dsTree.getConfigByKey('data');
    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    currentNode.children = [];
    this.dsTree.setData(data);
    this.children = [];
    return this;
  }

  toString() {
    return JSON.stringify(this.dsTree.serializeDsTreeNode(this));
  }
}

class DsTree extends TreeChart {
  private size: number = 0;

  constructor(customConfig: DsTreeConfigType, customTheme: DsTreeThemeType) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }

  /**
   * 创建一个DsTreeNode
   * @param node
   * @returns DsTreeNode
   */
  createNode(node: DsTreeValueType): DsTreeNode {
    const data = this.getConfigByKey('data');
    if (!data) {
      super.setData({
        key: String(++this.size),
        name: node.name,
        value: node.value,
        children: [],
      });

      return new DsTreeNode(
        {
          key: String(this.size),
          name: node.name,
          value: node.value,
        },
        this
      );
    }

    return new DsTreeNode(
      {
        key: String(++this.size),
        name: node.name,
        value: node.value,
      },
      this
    );
  }

  /**
   * 得到已经创建的结点个数
   * @returns number
   */
  getSize() {
    return this.size;
  }

  isExit(treeData: TreeNodeType, key: string) {
    if (treeData.key === key) {
      return true;
    }
    if (!treeData.children) {
      return false;
    }
    for (let ch of treeData.children) {
      const res = this.isExit(ch, key);
      if (res === true) {
        return true;
      }
    }
    return false;
  }

  getTreeNodeByKey(node: TreeNodeType, key: string): TreeNodeType | null {
    if (!node) {
      return null;
    }
    if (node.key === key) {
      return node;
    }
    if (!node.children) {
      return null;
    }

    for (let child of node.children) {
      const res = this.getTreeNodeByKey(child, key);
      if (res !== null && res.key === key) {
        return res;
      }
    }

    return null;
  }

  serializeDsTreeNode(dsTreeNode: DsTreeNode): TreeNodeType {
    const result: TreeNodeType = {
      key: dsTreeNode.key,
      name: dsTreeNode.name,
      value: dsTreeNode.value,
      children: [],
    };

    if (dsTreeNode.children) {
      for (let child of dsTreeNode.children) {
        result.children.push(this.serializeDsTreeNode(child));
      }
    }

    return result;
  }
}

export { DsTree, DsTreeConfigType, DsTreeThemeType };
