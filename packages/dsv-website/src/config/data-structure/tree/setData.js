const code = `const tree = dsv.create({
  type: 'tree'
})

const Root = tree.createNode({ name: 'Root', value: 1 });
const A = tree.createNode({ name: 'A', value: 1 });

Root.setData({ name: 'R', value: 10 })
Root.append(A);
A.swap(Root)

console.log(Root.getData());
console.log(A.getData());
`;

module.exports = {
  'zh-CN': 'setData',
  'en-US': 'setData',
  code: code,
};
