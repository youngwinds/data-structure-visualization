const code = `const tree = dsv.create({
  type: 'tree'
})

const root = tree.createNode({ name: 'root', value: 1 });

root.setVisual('#edafda');
root.removeVisual();
`;

module.exports = {
  'zh-CN': 'removeVisual',
  'en-US': 'removeVisual',
  code: code,
};
