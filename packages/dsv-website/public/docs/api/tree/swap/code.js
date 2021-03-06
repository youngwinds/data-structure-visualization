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
              children: [{ name: '5' }, { name: '6' }, { name: '7' }],
            },
          ],
        },
        { name: '8' },
        { name: '9' },
      ],
    },
    {
      name: '10',
      children: [{ name: '11' }, { name: '12' }, { name: '13' }],
    },
  ],
};

const root = tree.createTree(data);

const a = tree.createNode({ name: 'a' });

root.append(a);

root.swap(a);

for (let ch of a.children) {
  ch.reverse();
}
