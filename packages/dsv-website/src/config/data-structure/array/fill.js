const code = `const array = new DsArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9])

setTimeout(() => {
  array.fill(5, 5)
}, 1000)

setTimeout(() => {
  array.fill(15, 0, 5)
}, 2000)

setTimeout(() => {
  array.fill(30)
}, 3000)
 `;

module.exports = {
  'zh-CN': 'fill',
  'en-US': 'fill',
  code: code,
};
