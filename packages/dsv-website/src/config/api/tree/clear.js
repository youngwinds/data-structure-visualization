const code = `const tree = dsv.create({
  type: 'tree'
})

const root = tree.createTree({
  name: 'Root', children: [
    { name: '1', children: [{ name: '11', children: [{ name: '111' }] }] },
    { name: '2', children: [{ name: '22', children: [{ name: '222' }] }] },
    { name: '3', children: [{ name: '33', children: [{ name: '333' }] }] },
    { name: '4', children: [{ name: '44', children: [{ name: '444' }] }] },
    { name: '5', children: [{ name: '55', children: [{ name: '555' }] }] },
  ]
});

for (let ch of root.children) {
  if (ch.children) {
    ch.children.forEach(d => d.clear());
  }
}
`;

module.exports = {
  'zh-CN': 'clear',
  'en-US': 'clear',
  path: '/docs/api/tree/clear',
};
