const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.setVisual(0, 'red');
array.setVisual([1, 2], 'red');
array.setVisual([3, 4, 5], ['green', 'blue', 'red']);

array.removeVisual(0);
array.removeVisual([1, 2, 3, 4, 5]);
`;

module.exports = {
  'zh-CN': 'setVisual',
  'en-US': 'setVisual',
  path: '/docs/api/array/set-visual',
};
