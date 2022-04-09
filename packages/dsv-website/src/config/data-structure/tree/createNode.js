const code = `const tree = dsv.create({
  type: 'tree'
})

const Root = tree.createNode({ name: 'Root', value: 1 })
const A = tree.createNode({ name: 'A', value: 1 });
const B = tree.createNode({ name: 'B', value: 1 });

Root.append(A).append(B);
`;

module.exports = {
  'zh-CN': 'createNode',
  'en-US': 'createNode',
  code: code,
};
