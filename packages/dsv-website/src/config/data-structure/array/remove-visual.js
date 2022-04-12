const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.setVisual(1,'red');

array.removeVisual(1);

`;

module.exports = {
  'zh-CN': 'removeVisual',
  'en-US': 'removeVisual',
  code: code,
};
