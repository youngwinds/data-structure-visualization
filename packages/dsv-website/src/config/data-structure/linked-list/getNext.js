const code = `const linkedList = dsv.create({
  type: 'linkedList',
})

const head = linkedList.createNode({ name: 'A', value: 1 });

head
  .link(linkedList.createNode({ name: 'B', value: 2 }))
  .link(linkedList.createNode({ name: 'C', value: 3 }))
  .link(linkedList.createNode({ name: 'D', value: 4 }));

head.getNext().getNext().unlink()
`;

module.exports = {
  'zh-CN': 'getNext',
  'en-US': 'getNext',
  code: code,
};
