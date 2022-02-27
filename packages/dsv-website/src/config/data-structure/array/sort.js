const code = `const array = new DsArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9])

setTimeout(() => {
  array.sort((a, b) => a - b)
}, 1000)

setTimeout(() => {
  array.sort((a, b) => b - a)
}, 2000)
 `;

module.exports = {
  'zh-CN': 'sort',
  'en-US': 'sort',
  code: code,
};
