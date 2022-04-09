const code = `const tree = dsv.create({
  type: 'tree'
})

const A = tree.createNode({ name: 'A', value: 1 });
const B = tree.createNode({ name: 'B', value: 1 });

A.append(B);
`;

module.exports = {
  'zh-CN': 'createNode',
  'en-US': 'createNode',
  code: code,
};
