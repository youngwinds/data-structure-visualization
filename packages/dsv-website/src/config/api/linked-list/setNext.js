const code = `const linkedList = dsv.create({
  type: 'linkedList',
})

const A = linkedList.createNode({ name: 'A', value: 1 });
const B = linkedList.createNode({ name: 'B', value: 2 });
const C = linkedList.createNode({ name: 'C', value: 3 });
const D = linkedList.createNode({ name: 'D', value: 3 });

A.setNext(B).link(C).setNext(D)
`;

module.exports = {
  'zh-CN': 'setNext',
  'en-US': 'setNext',
  code: code,
};
