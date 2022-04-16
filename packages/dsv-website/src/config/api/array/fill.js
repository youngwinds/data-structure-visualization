const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.fill(5, 5)

array.fill(15, 0, 5)

array.fill(30)
`;

module.exports = {
  'zh-CN': 'fill',
  'en-US': 'fill',
  path: '/docs/api/array/fill',
};
