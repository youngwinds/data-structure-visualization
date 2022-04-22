const binaryTree = dsv.create({
  type: 'binaryTree',
});

const root = binaryTree.createNode({
  name: '1',
  left: {
    name: '2',
    left: {
      name: '3',
      left: {
        name: '4',
      },
      right: {
        name: '5',
      },
    },
    right: {
      name: '6',
      left: {
        name: '7',
      },
      right: {
        name: '8',
      },
    },
  },
  right: {
    name: '9',
    left: {
      name: '10',
      left: {
        name: '11',
      },
      right: {
        name: '12',
      },
    },
    right: {
      name: '13',
      left: {
        name: '14',
      },
      right: {
        name: '15',
      },
    },
  },
});

const left = binaryTree.createNode({
  name: 'A',
  left: {
    name: 'B',
  },
  right: {
    name: 'C',
  },
});

const tempLeft = root.left;

root.left = left;

left.left = tempLeft;
