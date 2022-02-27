const code = `const array = new DsArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9])

setTimeout(() => {
  array.reverse()
}, 1000)


setTimeout(() => {
  array.reverse()
}, 2000)
 `;

module.exports = {
  'zh-CN': 'reverse',
  'en-US': 'reverse',
  code: code,
};
