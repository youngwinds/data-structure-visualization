const code = `const linkedList = dsv.create({
  type: 'linkedList',
})

const A = linkedList.createNode({ name: 'A', value: 1 });
const B = linkedList.createNode({ name: 'B', value: 1 });
const C = linkedList.createNode({ name: 'C', value: 1 });

B.link(A)
B.link(C)

B.remove()

A.link(C)
`;

module.exports = {
  'zh-CN': 'remove',
  'en-US': 'remove',
  code: code,
};
