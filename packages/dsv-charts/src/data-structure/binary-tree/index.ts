import { merge } from 'lodash';
import { BinaryTreeChart } from '@dsv-charts/charts';
import { DsBinaryTreeConfigType, DsBinaryTreeThemeType } from './type';
import { BinaryTreeNodeType } from '@dsv-charts/charts/binary-tree/type';
import { DsBinaryTreeNode, IDsBinaryTreeNode } from './ds-binary-tree-node';

class DsBinaryTree extends BinaryTreeChart {
  private dsData: DsBinaryTreeNode;

  constructor(
    customConfig: DsBinaryTreeConfigType,
    customTheme: DsBinaryTreeThemeType
  ) {
    super('container', merge({}, customConfig), merge({}, customTheme));
  }

  createNode(dsNodeData: IDsBinaryTreeNode): DsBinaryTreeNode {
    const node = new DsBinaryTreeNode(dsNodeData, {
      updateHandler: () => {
        this.setData();
      },
    });

    if (!this.dsData) {
      this.dsData = node;
      this.setData();
    }

    return node;
  }

  createBinaryTree(dsNodeData: IDsBinaryTreeNode): DsBinaryTreeNode {
    this.dsData = new DsBinaryTreeNode(dsNodeData, {
      updateHandler: () => {
        this.setData();
      },
    });

    this.setData();

    return this.dsData;
  }

  convertDsDataToChartData(): BinaryTreeNodeType {
    const dfs = (node: DsBinaryTreeNode, result): BinaryTreeNodeType => {
      if (!node) {
        return null;
      }

      result.name = node.name;
      result.value = node.value;
      result.state = node.state;

      const leftChild = dfs(node.left, {});

      const rightChild = dfs(node.right, {});

      if (leftChild && rightChild) {
        result.children = [leftChild, rightChild];
      } else if (leftChild) {
        result.children = [leftChild];
      } else if (rightChild) {
        result.children = [rightChild];
      } else {
        result.children = undefined;
      }

      return result as BinaryTreeNodeType;
    };

    return dfs(this.dsData, {});
  }

  setData() {
    const chartData = this.convertDsDataToChartData();
    super.setData(chartData);
    return this;
  }
}

export { DsBinaryTree, DsBinaryTreeConfigType, DsBinaryTreeThemeType };
