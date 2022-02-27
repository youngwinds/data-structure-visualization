const code = `const array = new DsArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9])

setTimeout(() => {
  array.splice(0, 4)
}, 1000)

setTimeout(() => {
  array.splice(2, 0, 9, 8, 7, 6)
}, 2000)
 `;

module.exports = {
  'zh-CN': 'splice',
  'en-US': 'splice',
  code: code,
};
