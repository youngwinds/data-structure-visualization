const code = `const dp = dsv.create({
    type: 'array',
    data: []
});

dp.push(1, 1)

const maxSize = 10;

for (let i = 2; i < maxSize; i++) {
    dp.push(dp.get(i - 1) + dp.get(i - 2));
}
`;

module.exports = {
  'zh-CN': '斐波拉契数列',
  'en-US': 'Fibonacci Sequence',
  code: code,
  path: '/docs/gallery/dynamic-programming/fibonacci',
};
