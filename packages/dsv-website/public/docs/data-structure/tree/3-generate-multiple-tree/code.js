const tree = dsv.create({
  type: 'tree',
});

const data = {
  name: '1',
  children: [
    {
      name: '2',
      children: [
        {
          name: '3',
          children: [
            {
              name: '4',
              children: [{ name: '5' }],
            },
            {
              name: '6',
            },
          ],
        },
        {
          name: '7',
          children: [
            {
              name: '8',
            },
          ],
        },
      ],
    },
    {
      name: '9',
      children: [
        { name: '10' },
        {
          name: '11',
          children: [{ name: '12' }, { name: '13' }, { name: '14' }],
        },
      ],
    },
  ],
};

let queue = [[null, data]];
let tempQueue = [];

while (queue.length) {
  const [parent, node] = queue.shift();
  const treeNode = tree.createNode({ name: node.name });
  if (parent) {
    parent.append(treeNode);
  }

  if (node && node.children) {
    for (let child of node.children) {
      tempQueue.push([treeNode, child]);
    }
  }

  queue = tempQueue;
}
