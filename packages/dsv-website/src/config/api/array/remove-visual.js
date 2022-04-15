const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.setVisual([0, 1, 2, 3, 4, 5], 'red');

array.removeVisual(0);
array.removeVisual([1, 2, 3, 4, 5]);
`;

module.exports = {
  'zh-CN': 'removeVisual',
  'en-US': 'removeVisual',
  code: code,
  path: '/docs/api/array/remove-visual',
};
