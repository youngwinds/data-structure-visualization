const code = `const tree = dsv.create({
  type: 'tree'
})

const Root = tree.createNode({ name: 'Root', value: 1 });

Root.setData({ name: 'R', value: 10 })

console.log(Root.getData());
`;

module.exports = {
  'zh-CN': 'getData',
  'en-US': 'getData',
  code: code,
};
