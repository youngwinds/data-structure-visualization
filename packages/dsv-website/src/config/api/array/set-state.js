const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9],
  state: {
    customName: 'red'
  },
})

array.setState(1, 'customName');
`;

module.exports = {
  'zh-CN': 'setState',
  'en-US': 'setState',
  path: '/docs/api/array/set-state',
};
