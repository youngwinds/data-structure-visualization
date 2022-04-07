const code = `const linkedList = dsv.create({
  type: 'linkedList',
})

const A = linkedList.createNode({ name: 'A', value: 1 });
const B = linkedList.createNode({ name: 'B', value: 1 });
const C = linkedList.createNode({ name: 'C', value: 1 });

B.link(A)
B.link(C)

B.unlink()

B.link(A)
B.link(C)

B.unlink(A)
B.unlink(C)
`;

module.exports = {
  'zh-CN': 'unlink',
  'en-US': 'unlink',
  code: code,
};
