const code = `const linkedList = dsv.create({
  type: 'linkedList',
})

const head = linkedList.createNode({ name: 'A', value: 1 });

head.link(linkedList.createNode({ name: 'B', value: 2 }))
`;

module.exports = {
  'zh-CN': 'createNode',
  'en-US': 'createNode',
  code: code,
};
