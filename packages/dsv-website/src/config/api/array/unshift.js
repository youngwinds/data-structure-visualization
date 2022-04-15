const code = `const array = dsv.create({
    type: 'array',
    data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.unshift(1)

array.unshift(2, 3)

array.unshift(4, 5, 6)

`;

module.exports = {
  'zh-CN': 'unshift',
  'en-US': 'unshift',
  code: code,
  path: '/docs/api/array/unshift',
};
