const queue = dsv.create({
  type: 'queue',
  data: [],
  layout: {
    height: 225,
    padding: {
      top: 0,
      bottom: 0,
    },
  },
});

const tree = dsv.create({
  type: 'tree',
  layout: {
    padding: {
      top: 15,
      bottom: 20,
    },
    height: 325,
  },
});

const data = {
  name: '1',
  children: [
    {
      name: '2',
      children: [
        { name: '3' },
        { name: '4' },
        {
          name: '5',
          children: [
            {
              name: '6',
              children: [{ name: '7' }, { name: '8' }, { name: '9' }],
            },
          ],
        },
      ],
    },
    {
      name: '10',
      children: [{ name: '11' }, { name: '12' }, { name: '13' }],
    },
  ],
};

const root = tree.createTree(data);

queue.add({ name: root.name, value: root });

while (queue.length) {
  const node = queue.remove();
  node.setVisual('#edafda');
  for (let child of node.children) {
    queue.add({ name: child.name, value: child });
  }
}
