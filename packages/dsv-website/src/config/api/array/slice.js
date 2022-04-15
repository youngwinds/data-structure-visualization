const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.splice(0, 4)

array.splice(2, 0, 9, 8, 7, 6)
 `;

module.exports = {
  'zh-CN': 'splice',
  'en-US': 'splice',
  code: code,
};
