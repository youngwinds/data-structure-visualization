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
  children: DsTreeNode[] = [];
  dsTree: DsTree = null;

  constructor(node: DsTreeNodeType, dsTree: DsTree) {
    this.name = node.name;
    this.value = node.value;
    this.key = node.key;

    this.dsTree = dsTree;
  }

  append(node: DsTreeNode, targetNode: DsTreeNode): DsTreeNode {
    const data = this.dsTree.getConfigByKey('data');
    if (this.dsTree.isExit(data, node.key)) {
      throw new Error(`Adding duplicate nodes is not allowed: ${node}`);
    }

    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    if (arguments.length === 1) {
      if (currentNode !== null) {
        currentNode.children.push(this.dsTree.serializeDsTreeNode(node));
      }
      this.dsTree.setData(data);
      this.children.push(node);
      return node;
    } else if (arguments.length === 2) {
      const index = currentNode.children.findIndex(
        (d) => d.key === targetNode.key
      );
      if (index === -1) {
        throw new Error(`could't find index of ${targetNode}`);
      }

      currentNode.children.splice(
        index + 1,
        0,
        this.dsTree.serializeDsTreeNode(node)
      );
      this.dsTree.setData(data);
      this.children.splice(index + 1, 0, node);
      return node;
    }

    throw new Error('append error');
  }

  insert(node: DsTreeNode, targetNode: DsTreeNode): DsTreeNode {
    const data = this.dsTree.getConfigByKey('data');
    if (this.dsTree.isExit(data, node.key)) {
      throw new Error(`Adding duplicate nodes is not allowed: ${node}`);
    }

    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    if (arguments.length === 1) {
      if (currentNode !== null) {
        currentNode.children.unshift(this.dsTree.serializeDsTreeNode(node));
      }
      this.dsTree.setData(data);
      this.children.unshift(node);
      return node;
    } else if (arguments.length === 2) {
      const index = currentNode.children.findIndex(
        (d) => d.key === targetNode.key
      );

      if (index === -1) {
        throw new Error(`could't find index of ${targetNode}`);
      }

      currentNode.children.splice(
        index,
        0,
        this.dsTree.serializeDsTreeNode(node)
      );
      this.dsTree.setData(data);

      this.children.splice(index, 0, node);
      return node;
    }

    throw new Error('insert error');
  }

  swap(target: DsTreeNode) {
    const root = this.dsTree.getConfigByKey('data');
    const n1 = this.dsTree.getTreeNodeByKey(root, target.key);
    const n2 = this.dsTree.getTreeNodeByKey(root, this.key);

    const temp = { ...n1 };
    n1.key = n2.key;
    n1.name = n2.name;
    n1.value = n2.value;

    n2.key = temp.key;
    n2.value = temp.value;
    n2.name = temp.name;
    this.dsTree.setData(root);

    const tempChildren = this.children;
    this.children = target.children;
    target.children = tempChildren;
  }

  remove() {
    this.dsTree.delete(this);
  }

  clear(): this {
    const data = this.dsTree.getConfigByKey('data');
    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    currentNode.children = [];
    this.dsTree.setData(data);
    this.children = [];
    return this;
  }

  getData() {
    return {
      name: this.name,
      value: this.value,
    };
  }

  getChildren() {
    if (this.children) {
      return this.children;
    }

    const root = this.dsTree.getConfigByKey('data');
    const node = this.dsTree.getTreeNodeByKey(root, this.key);
    return node.children;
  }

  reverse() {
    const data = this.dsTree.getConfigByKey('data');
    const currentNode = this.dsTree.getTreeNodeByKey(data, this.key);
    currentNode.children.reverse();
    this.dsTree.setData(data);
    this.children.reverse();
    return this;
  }

  setData({ name, value }: { name?: string; value: number | string }) {
    const root = this.dsTree.getConfigByKey('data');
    const node = this.dsTree.getTreeNodeByKey(root, this.key);

    name && (node.name = name);
    value && (node.value = value);

    this.dsTree.setData(root);

    this.name = name;
    this.value = value;
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

  createTree(node: TreeNodeType) {
    return this.serializeTreeNode(node);
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

  serializeTreeNode(node: TreeNodeType): DsTreeNode {
    const root = new DsTreeNode(
      { name: node.name, key: String(++this.size), value: node.value },
      this
    );
    if (node.children)
      for (const child of node.children) {
        root.children.push(this.serializeTreeNode(child));
      }

    return root;
  }

  delete(node: DsTreeNode): void {
    const root = this.getConfigByKey('data');
    if (node.key === root.key) {
      throw new Error(
        `Due to implementation problems, not support to delete the Root Node temporarily! rootNode: ${node}`
      );
    }

    const deleteDfs = (root: TreeNodeType, targetNode: DsTreeNode) => {
      if (!root.children) {
        return false;
      }
      for (let i = 0; i < root.children.length; i++) {
        const child = root.children[i];

        if (child.key === targetNode.key) {
          root.children.splice(i, 1);
          return true;
        } else {
          deleteDfs(child, targetNode);
        }
      }
    };
    let res = deleteDfs(root, node);
    if (res === false) {
      throw new Error(`could't find delte ${node}`);
    } else {
      super.setData(root);
    }
  }
}

export { DsTree, DsTreeConfigType, DsTreeThemeType };
