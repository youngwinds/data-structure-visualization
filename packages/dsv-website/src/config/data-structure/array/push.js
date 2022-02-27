const code = `const array = new DsArray([10, 8, 6, 4, 2, 1, 3, 5, 7, 9])

setTimeout(() => {
  array.push(15)
}, 1000)

setTimeout(() => {
  array.push(20, 30)
}, 2000)

setTimeout(() => {
  array.push(40, 50, 60)
}, 3000)
 `;

module.exports = {
  'zh-CN': 'push',
  'en-US': 'push',
  code: code,
};
