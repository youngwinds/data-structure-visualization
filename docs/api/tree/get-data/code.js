const tree = dsv.create({
  type: 'tree',
});

const root = tree.createNode({ name: 'A' });

const node = tree.createNode(root.getData());

root.setData({ name: 'B', value: 10 });

root.append(node);
