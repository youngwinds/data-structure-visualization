const linkedList = dsv.create({
  type: 'linkedList',
});

const head = linkedList.createNode({ name: 'A', value: 1 });
const b = linkedList.createNode({ name: 'B', value: 2 });
const c = linkedList.createNode({ name: 'C', value: 3 });
const d = linkedList.createNode({ name: 'D', value: 4 });

head
  .link(b)
  .link(c)
  .link(d)
  .link(linkedList.createNode({ name: 'E', value: 5 }))
  .link(linkedList.createNode({ name: 'F', value: 6 }))
  .link(linkedList.createNode({ name: 'G', value: 7 }))
  .link(linkedList.createNode({ name: 'H', value: 8 }));
