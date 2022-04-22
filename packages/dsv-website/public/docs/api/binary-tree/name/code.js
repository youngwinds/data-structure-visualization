const binaryTree = dsv.create({
  type: 'binaryTree',
});

const root = binaryTree.createNode({
  name: '1',
  value: 1,
  left: {
    name: '2',
    value: 2,
  },
  right: {
    name: '3',
    value: 3,
  },
});

root.left.name = 'A';
root.right.name = 'B';

root.left.name = String(root.left.name) + 'A';
root.right.name = String(root.right.name) + 'B';
