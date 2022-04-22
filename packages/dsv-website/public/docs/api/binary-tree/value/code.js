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

root.left.value = 'A';
root.right.value = 'B';

root.left.name = String(root.left.value);
root.right.name = String(root.right.value);
