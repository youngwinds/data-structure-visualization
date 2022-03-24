const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.sort((a, b) => a - b)

array.sort((a, b) => b - a)
`;

module.exports = {
  'zh-CN': 'sort',
  'en-US': 'sort',
  code: code,
};
