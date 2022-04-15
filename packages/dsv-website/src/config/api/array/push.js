const code = `const array = dsv.create({
  type: 'array',
  data: [10, 8, 6, 4, 2, 1, 3, 5, 7, 9]
})

array.push(15)

array.push(20, 30)

array.push(40, 50, 60)
 `;

module.exports = {
  'zh-CN': 'push',
  'en-US': 'push',
  code: code,
};
