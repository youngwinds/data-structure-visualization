const code = `const tree = dsv.create({
  type: 'tree'
})

const A = tree.createNode({ name: 'A', value: 1 });
const B = tree.createNode({ name: 'B', value: 1 });
const C = tree.createNode({ name: 'C', value: 1 });
const D = tree.createNode({ name: 'D', value: 1 });
const E = tree.createNode({ name: 'E', value: 1 });
const F = tree.createNode({ name: 'F', value: 1 });
const G = tree.createNode({ name: 'G', value: 1 });

A.append(B).append(C).append(D)

A.append(E)
A.append(F)
A.append(G)
`;

module.exports = {
  'zh-CN': 'append',
  'en-US': 'append',
  code: code,
};
